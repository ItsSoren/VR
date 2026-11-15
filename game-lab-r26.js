(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var fm=0,Td=1,pm=2;var ba=1,mm=2,ui=3,Qn=0,ln=1,Gt=2,Pi=0,Ss=1,hi=2,wd=3,Ad=4,gm=5,$i=100,xm=101,ym=102,_m=103,vm=104,Mm=200,bm=201,Sm=202,Tm=203,Ol=204,zl=205,wm=206,Am=207,Em=208,Cm=209,Rm=210,Pm=211,Im=212,Lm=213,Dm=214,gc=0,xc=1,yc=2,Ts=3,_c=4,vc=5,Mc=6,bc=7,Sc=0,Um=1,Nm=2,Ii=0,Fm=1,Bm=2,Om=3,Tc=4,zm=5,Vm=6,km=7;var Ed=300,Ds=301,Us=302,Wr=303,wc=304,Sa=306,li=1e3,Ki=1001,Vl=1002,rn=1003,Gm=1004;var Ta=1005;var on=1006,Ac=1007;var An=1008;var On=1009,Cd=1010,Rd=1011,Xr=1012,Ec=1013,ts=1014,ni=1015,di=1016,Cc=1017,Rc=1018,qr=1020,Pd=35902,Id=35899,Ld=1021,Dd=1022,En=1023,wr=1026,Yr=1027,Pc=1028,Ic=1029,Ud=1030,Lc=1031;var Dc=1033,wa=33776,Aa=33777,Ea=33778,Ca=33779,Uc=35840,Nc=35841,Fc=35842,Bc=35843,Oc=36196,zc=37492,Vc=37496,kc=37808,Gc=37809,Hc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,Zc=37815,jc=37816,Jc=37817,Kc=37818,$c=37819,Qc=37820,eu=37821,tu=36492,nu=36494,iu=36495,su=36283,ru=36284,ou=36285,au=36286;var Go=2300,kl=2301,Fl=2302,dd=2400,fd=2401,pd=2402;var Hm=3200,Wm=3201;var lu=0,Xm=1,Li="",pt="srgb",ws="srgb-linear",Ho="linear",mt="srgb";var bs=7680;var md=519,qm=512,Ym=513,Zm=514,Nd=515,jm=516,Jm=517,Km=518,$m=519,Gl=35044,Di=35048;var Fd="300 es",$n=2e3,Wo=2001;var Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dp=1234567,Oo=Math.PI/180,Ar=180/Math.PI;function ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Bd(n,e){return(n%e+e)%e}function _y(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function vy(n,e,t){return n!==e?(t-n)/(e-n):0}function zo(n,e,t){return(1-t)*n+t*e}function My(n,e,t,i){return zo(n,e,1-Math.exp(-t*i))}function by(n,e=1){return e-Math.abs(Bd(n,e*2)-e)}function Sy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ty(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ay(n,e){return n+Math.random()*(e-n)}function Ey(n){return n*(.5-Math.random())}function Cy(n){n!==void 0&&(Dp=n);let e=Dp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ry(n){return n*Oo}function Py(n){return n*Ar}function Iy(n){return(n&n-1)===0&&n!==0}function Ly(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uy(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:Oo,RAD2DEG:Ar,generateUUID:ai,clamp:je,euclideanModulo:Bd,mapLinear:_y,inverseLerp:vy,lerp:zo,damp:My,pingpong:by,smoothstep:Sy,smootherstep:Ty,randInt:wy,randFloat:Ay,randFloatSpread:Ey,seededRandom:Cy,degToRad:Ry,radToDeg:Py,isPowerOfTwo:Iy,ceilPowerOfTwo:Ly,floorPowerOfTwo:Dy,setQuaternionFromProperEuler:Uy,normalize:ft,denormalize:Kn},Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let E=Math.sqrt(S),P=Math.atan2(E,m*T);g=Math.sin(g*P)/E,a=Math.sin(a*P)/E}let v=a*T;if(l=l*g+f*v,c=c*g+h*v,u=u*g+p*v,d=d*g+x*v,g===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Up.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bh=new M,Up=new Je,$e=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=s[0],g=s[3],m=s[6],T=s[1],S=s[4],v=s[7],E=s[2],P=s[5],D=s[8];return r[0]=o*x+a*T+l*E,r[3]=o*g+a*S+l*P,r[6]=o*m+a*v+l*D,r[1]=c*x+u*T+d*E,r[4]=c*g+u*S+d*P,r[7]=c*m+u*v+d*D,r[2]=f*x+h*T+p*E,r[5]=f*g+h*S+p*P,r[8]=f*m+h*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new $e;function Od(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qm(){let n=Er("canvas");return n.style.display="block",n}var Np={};function Cr(n){n in Np||(Np[n]=!0,console.warn(n))}function eg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Fp=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){let n={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ws]:{primaries:e,whitePoint:i,transfer:Ho,toXYZ:Fp,fromXYZ:Bp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Fp,fromXYZ:Bp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),n}var lt=Ny();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sr,Hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Er("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fy=0,Rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zh(s[o].image)):r.push(zh(s[o]))}else r=zh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var By=0,Vh=new M,dn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ki,s=Ki,r=on,o=An,a=En,l=On,c=n.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=ai(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Ed;dn.DEFAULT_ANISOTROPY=1;var ot=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(h+1)/2,E=(m+1)/2,P=(u+f)/4,D=(d+x)/4,I=(p+g)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=P/i,r=D/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=I/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=I/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-p)/T,this.y=(d-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Wl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),cl.subVectors(this.max,Ao),rr.subVectors(e.a,Ao),or.subVectors(e.b,Ao),ar.subVectors(e.c,Ao),Xi.subVectors(or,rr),qi.subVectors(ar,or),ys.subVectors(rr,ar);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ys.z,ys.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ys.z,0,-ys.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ys.y,ys.x,0];return!kh(t,rr,or,ar,cl)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,rr,or,ar,cl))?!1:(ul.crossVectors(Xi,qi),t=[ul.x,ul.y,ul.z],kh(t,rr,or,ar,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new M,new M,new M,new M,new M,new M,new M,new M],Zn=new M,ll=new nn,rr=new M,or=new M,ar=new M,Xi=new M,qi=new M,ys=new M,Ao=new M,cl=new M,ul=new M,_s=new M;function kh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Oy=new nn,Eo=new M,Gh=new M,ei=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Oy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Gh)),this.expandByPoint(Eo.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mi=new M,Hh=new M,hl=new M,Yi=new M,Wh=new M,dl=new M,Xh=new M,Pr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hh.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(hl),a=Yi.dot(this.direction),l=-Yi.dot(hl),c=Yi.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hh).addScaledVector(hl,f),h}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,s,r){Wh.subVectors(t,e),dl.subVectors(i,e),Xh.crossVectors(Wh,dl);let o=this.direction.dot(Xh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(dl.crossVectors(Yi,dl));if(l<0)return null;let c=a*this.direction.dot(Wh.cross(Yi));if(c<0||l+c>o)return null;let u=-a*Yi.dot(Xh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zy,e,Vy)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Zi.crossVectors(i,Un),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Zi.crossVectors(i,Un)),Zi.normalize(),fl.crossVectors(Un,Zi),s[0]=Zi.x,s[4]=fl.x,s[8]=Un.x,s[1]=Zi.y,s[5]=fl.y,s[9]=Un.y,s[2]=Zi.z,s[6]=fl.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],T=i[3],S=i[7],v=i[11],E=i[15],P=s[0],D=s[4],I=s[8],b=s[12],_=s[1],C=s[5],F=s[9],G=s[13],Y=s[2],Z=s[6],q=s[10],Q=s[14],V=s[3],ee=s[7],he=s[11],se=s[15];return r[0]=o*P+a*_+l*Y+c*V,r[4]=o*D+a*C+l*Z+c*ee,r[8]=o*I+a*F+l*q+c*he,r[12]=o*b+a*G+l*Q+c*se,r[1]=u*P+d*_+f*Y+h*V,r[5]=u*D+d*C+f*Z+h*ee,r[9]=u*I+d*F+f*q+h*he,r[13]=u*b+d*G+f*Q+h*se,r[2]=p*P+x*_+g*Y+m*V,r[6]=p*D+x*C+g*Z+m*ee,r[10]=p*I+x*F+g*q+m*he,r[14]=p*b+x*G+g*Q+m*se,r[3]=T*P+S*_+v*Y+E*V,r[7]=T*D+S*C+v*Z+E*ee,r[11]=T*I+S*F+v*q+E*he,r[15]=T*b+S*G+v*Q+E*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+g*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],T=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,S=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,v=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,E=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,P=t*T+i*S+s*v+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=T*D,e[1]=(x*f*r-d*g*r-x*s*h+i*g*h+d*s*m-i*f*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=S*D,e[5]=(u*g*r-p*f*r+p*s*h-t*g*h-u*s*m+t*f*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*D,e[8]=v*D,e[9]=(p*d*r-u*x*r-p*i*h+t*x*h+u*i*m-t*d*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*D,e[12]=E*D,e[13]=(u*x*s-p*d*s+p*i*f-t*x*f-u*i*g+t*d*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,x=o*u,g=o*d,m=a*d,T=l*c,S=l*u,v=l*d,E=i.x,P=i.y,D=i.z;return s[0]=(1-(x+m))*E,s[1]=(h+v)*E,s[2]=(p-S)*E,s[3]=0,s[4]=(h-v)*P,s[5]=(1-(f+m))*P,s[6]=(g+T)*P,s[7]=0,s[8]=(p+S)*D,s[9]=(g-T)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let c=1/r,u=1/o,d=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Wo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===$n)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Wo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},lr=new M,jn=new at,zy=new M(0,0,0),Vy=new M(1,1,1),Zi=new M,fl=new M,Un=new M,Op=new at,zp=new Je,an=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ky=0,Vp=new M,cr=new Je,bi=new at,pl=new M,Co=new M,Gy=new M,Hy=new Je,kp=new M(1,0,0),Gp=new M(0,1,0),Hp=new M(0,0,1),Wp={type:"added"},Wy={type:"removed"},ur={type:"childadded",child:null},qh={type:"childremoved",child:null},Pt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new an,i=new Je,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new $e}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,t){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pl.copy(e):pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Co,pl,this.up):bi.lookAt(pl,Co,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(bi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wy),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new M(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new M,Si=new M,Yh=new M,Ti=new M,hr=new M,dr=new M,Xp=new M,Zh=new M,jh=new M,Jh=new M,Kh=new ot,$h=new ot,Qh=new ot,Tn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Si.subVectors(i,t),Yh.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Si),l=Jn.dot(Yh),c=Si.dot(Si),u=Si.dot(Yh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Kh.setScalar(0),$h.setScalar(0),Qh.setScalar(0),Kh.fromBufferAttribute(e,t),$h.fromBufferAttribute(e,i),Qh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kh,r.x),o.addScaledVector($h,r.y),o.addScaledVector(Qh,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Si.subVectors(e,t),Jn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,i),dr.subVectors(r,i),Zh.subVectors(e,i);let l=hr.dot(Zh),c=dr.dot(Zh);if(l<=0&&c<=0)return t.copy(i);jh.subVectors(e,s);let u=hr.dot(jh),d=dr.dot(jh);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Jh.subVectors(e,r);let h=hr.dot(Jh),p=dr.dot(Jh);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(dr,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return Xp.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(Xp,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ml={h:0,s:0,l:0};function ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Bd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ed(o,r,e+1/3),this.g=ed(o,r,e),this.b=ed(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=tg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return lt.workingToColorSpace(hn.copy(this),e),Math.round(je(hn.r*255,0,255))*65536+Math.round(je(hn.g*255,0,255))*256+Math.round(je(hn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=pt){lt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ml);let i=zo(ji.h,ml.h,t),s=zo(ji.s,ml.s,t),r=zo(ji.l,ml.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Oe;Oe.NAMES=tg;var Xy=0,ti=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ss,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=zl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bt=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new M,gl=new Se,qy=0,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var As=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qo=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var He=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Yy=0,Hn=new at,td=new Pt,fr=new M,Nn=new nn,Ro=new nn,tn=new M,it=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Od(e)?qo:As)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Nn.min,Ro.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,Ro.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(Ro.min),Nn.expandByPoint(Ro.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(fr.fromBufferAttribute(e,c),tn.add(fr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new M,l[I]=new M;let c=new M,u=new M,d=new M,f=new Se,h=new Se,p=new Se,x=new M,g=new M;function m(I,b,_){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(C),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(C),a[I].add(x),a[b].add(x),a[_].add(x),l[I].add(g),l[b].add(g),l[_].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,b=T.length;I<b;++I){let _=T[I],C=_.start,F=_.count;for(let G=C,Y=C+F;G<Y;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new M,v=new M,E=new M,P=new M;function D(I){E.fromBufferAttribute(s,I),P.copy(E);let b=a[I];S.copy(b),S.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(P,b);let C=v.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,b=T.length;I<b;++I){let _=T[I],C=_.start,F=_.count;for(let G=C,Y=C+F;G<Y;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new vt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qp=new at,vs=new Pr,xl=new ei,Yp=new M,yl=new M,_l=new M,vl=new M,nd=new M,Ml=new M,Zp=new M,bl=new M,Be=class extends Pt{constructor(e=new it,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(nd.fromBufferAttribute(d,e),o?Ml.addScaledVector(nd,u):Ml.addScaledVector(nd.sub(t),u))}t.add(Ml)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(xl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(xl,Yp)===null||vs.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(qp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],T=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=T,E=S;v<E;v+=3){let P=a.getX(v),D=a.getX(v+1),I=a.getX(v+2);s=Sl(this,m,e,i,c,u,d,P,D,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let T=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=Sl(this,o,e,i,c,u,d,T,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],T=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=T,E=S;v<E;v+=3){let P=v,D=v+1,I=v+2;s=Sl(this,m,e,i,c,u,d,P,D,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let T=g,S=g+1,v=g+2;s=Sl(this,o,e,i,c,u,d,T,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Zy(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;bl.copy(a),bl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(bl);return c<t.near||c>t.far?null:{distance:c,point:bl.clone(),object:n}}function Sl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,yl),n.getVertexPosition(l,_l),n.getVertexPosition(c,vl);let u=Zy(n,e,t,i,yl,_l,vl,Zp);if(u){let d=new M;Tn.getBarycoord(Zp,yl,_l,vl,d),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Tn.getNormal(yl,_l,vl,f.normal),u.face=f,u.barycoord=d}return u}var Qe=class n extends it{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function p(x,g,m,T,S,v,E,P,D,I,b){let _=v/D,C=E/I,F=v/2,G=E/2,Y=P/2,Z=D+1,q=I+1,Q=0,V=0,ee=new M;for(let he=0;he<q;he++){let se=he*C-G;for(let pe=0;pe<Z;pe++){let be=pe*_-F;ee[x]=be*T,ee[g]=se*S,ee[m]=Y,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=P>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(pe/D),d.push(1-he/I),Q+=1}}for(let he=0;he<I;he++)for(let se=0;se<D;se++){let pe=f+se+Z*he,be=f+se+Z*(he+1),Ce=f+(se+1)+Z*(he+1),$=f+(se+1)+Z*he;l.push(pe,be,$),l.push(be,Ce,$),V+=6}a.addGroup(h,V,b),h+=V,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Ns(n[t]);for(let s in i)e[s]=i[s]}return e}function jy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var cu={clone:Ns,merge:fn},Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Yo=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new M,jp=new Se,Jp=new Se,Vt=class extends Yo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,jp,Jp),t.subVectors(Jp,jp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,ql=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new Vt(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new Vt(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new Vt(pr,mr,e,t);a.layers=this.layers,this.add(a);let l=new Vt(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new Vt(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zo=class extends dn{constructor(e=[],t=Ds,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yl=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Pi});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=on),new ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},_t=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$y={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($y)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var jo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Es=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new M,Dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gr,Po=new M,xr=new M,yr=new M,_r=new Se,Io=new Se,ng=new at,Tl=new M,Lo=new M,wl=new M,Kp=new Se,id=new Se,$p=new Se,Ko=class extends Pt{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jo(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new Dr(i,3,0,!1)),gr.setAttribute("uv",new Dr(i,2,3,!1))}this.geometry=gr,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),ng.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Al(Tl.set(-.5,-.5,0),yr,o,xr,s,r),Al(Lo.set(.5,-.5,0),yr,o,xr,s,r),Al(wl.set(.5,.5,0),yr,o,xr,s,r),Kp.set(0,0),id.set(1,0),$p.set(1,1);let a=e.ray.intersectTriangle(Tl,Lo,wl,!1,Po);if(a===null&&(Al(Lo.set(-.5,.5,0),yr,o,xr,s,r),id.set(0,1),a=e.ray.intersectTriangle(Tl,wl,Lo,!1,Po),a===null))return;let l=e.ray.origin.distanceTo(Po);l<e.near||l>e.far||t.push({distance:l,point:Po.clone(),uv:Tn.getInterpolation(Po,Tl,Lo,wl,Kp,id,$p,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Al(n,e,t,i,s,r){_r.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Io.x=r*_r.x-s*_r.y,Io.y=s*_r.x+r*_r.y):Io.copy(_r),n.copy(e),n.x+=Io.x,n.y+=Io.y,n.applyMatrix4(ng)}var ci=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new at,Qp=new at,El=[],em=new nn,Qy=new at,Do=new Be,Uo=new ei,$o=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),em.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(em)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),Uo.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),Qp.multiplyMatrices(i,vr),Do.matrixWorld=Qp,Do.raycast(e,El);for(let o=0,a=El.length;o<a;o++){let l=El[o];l.instanceId=r,l.object=this,t.push(l)}El.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,Pc,ni));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sd=new M,e_=new M,t_=new $e,Sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=sd.subVectors(i,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(sd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t_.getNormalMatrix(e),s=this.coplanarPoint(sd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new ei,n_=new Se(.5,.5),Cl=new M,Fr=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],T=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,h-u,m-p,E-T).normalize(),s[1].setComponents(c+o,h+u,m+p,E+T).normalize(),s[2].setComponents(c+a,h+d,m+x,E+S).normalize(),s[3].setComponents(c-a,h-d,m-x,E-S).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,h-f,m-g,E-v).normalize();else if(s[4].setComponents(c-l,h-f,m-g,E-v).normalize(),t===$n)s[5].setComponents(c+l,h+f,m+g,E+v).normalize();else if(t===Wo)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=n_.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Cl.x=s.normal.x>0?e.max.x:e.min.x,Cl.y=s.normal.y>0?e.max.y:e.min.y,Cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zl=new M,jl=new M,tm=new at,No=new Pr,Rl=new ei,rd=new M,nm=new M,Jl=class extends Pt{constructor(e=new it,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zl.fromBufferAttribute(t,s-1),jl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zl.distanceTo(jl);e.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;tm.copy(s).invert(),No.copy(e.ray).applyMatrix4(tm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),T=u.getX(x+1),S=Pl(this,e,No,l,m,T,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Pl(this,e,No,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Pl(this,e,No,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Pl(this,e,No,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Zl.fromBufferAttribute(a,s),jl.fromBufferAttribute(a,r),t.distanceSqToSegment(Zl,jl,rd,nm)>i)return;rd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(rd);if(!(c<e.near||c>e.far))return{distance:c,point:nm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Qo=class extends Jl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Wn=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ea=class extends dn{constructor(e,t,i=ts,s,r,o,a=rn,l=rn,c,u=wr,d=1){if(u!==wr&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ta=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},na=class n extends it{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+r,x=s+1,g=new M,m=new M;for(let T=0;T<=p;T++){let S=0,v=0,E=0,P=0;if(T<=i){let b=T/i,_=b*Math.PI/2;v=-u-e*Math.cos(_),E=e*Math.sin(_),P=-e*Math.cos(_),S=b*d}else if(T<=i+r){let b=(T-i)/r;v=-u+b*t,E=e,P=0,S=d+b*f}else{let b=(T-i-r)/i,_=b*Math.PI/2;v=u+e*Math.sin(_),E=e*Math.cos(_),P=e*Math.sin(_),S=d+f+b*d}let D=Math.max(0,Math.min(1,S/h)),I=0;T===0?I=.5/s:T===p&&(I=-.5/s);for(let b=0;b<=s;b++){let _=b/s,C=_*Math.PI*2,F=Math.sin(C),G=Math.cos(C);m.x=-E*G,m.y=v,m.z=E*F,a.push(m.x,m.y,m.z),g.set(-E*G,P,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(_+I,D)}if(T>0){let b=(T-1)*x;for(let _=0;_<s;_++){let C=b+_,F=b+_+1,G=T*x+_,Y=T*x+_+1;o.push(C,F,G),o.push(F,Y,G)}}}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Wt=class n extends it{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class n extends it{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(h,2));function T(){let v=new M,E=new M,P=0,D=(t-e)/i;for(let I=0;I<=r;I++){let b=[],_=I/r,C=_*(t-e)+e;for(let F=0;F<=s;F++){let G=F/s,Y=G*l+a,Z=Math.sin(Y),q=Math.cos(Y);E.x=C*Z,E.y=-_*i+g,E.z=C*q,d.push(E.x,E.y,E.z),v.set(Z,D,q).normalize(),f.push(v.x,v.y,v.z),h.push(G,1-_),b.push(p++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let _=x[b][I],C=x[b+1][I],F=x[b+1][I+1],G=x[b][I+1];(e>0||b!==0)&&(u.push(_,C,G),P+=3),(t>0||b!==r-1)&&(u.push(C,F,G),P+=3)}c.addGroup(m,P,0),m+=P}function S(v){let E=p,P=new Se,D=new M,I=0,b=v===!0?e:t,_=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*_,0),f.push(0,_,0),h.push(.5,.5),p++;let C=p;for(let F=0;F<=s;F++){let Y=F/s*l+a,Z=Math.cos(Y),q=Math.sin(Y);D.x=b*q,D.y=g*_,D.z=b*Z,d.push(D.x,D.y,D.z),f.push(0,_,0),P.x=Z*.5+.5,P.y=q*.5*_+.5,h.push(P.x,P.y),p++}for(let F=0;F<s;F++){let G=E+F,Y=C+F;v===!0?u.push(Y,Y+1,G):u.push(Y+1,Y,G),I+=3}c.addGroup(m,I,v===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class n extends Xt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class n extends it{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let S=new M,v=new M,E=new M;for(let P=0;P<t.length;P+=3)h(t[P+0],S),h(t[P+1],v),h(t[P+2],E),l(S,v,E,T)}function l(T,S,v,E){let P=E+1,D=[];for(let I=0;I<=P;I++){D[I]=[];let b=T.clone().lerp(v,I/P),_=S.clone().lerp(v,I/P),C=P-I;for(let F=0;F<=C;F++)F===0&&I===P?D[I][F]=b:D[I][F]=b.clone().lerp(_,F/C)}for(let I=0;I<P;I++)for(let b=0;b<2*(P-I)-1;b++){let _=Math.floor(b/2);b%2===0?(f(D[I][_+1]),f(D[I+1][_]),f(D[I][_])):(f(D[I][_+1]),f(D[I+1][_+1]),f(D[I+1][_]))}}function c(T){let S=new M;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(T),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){let T=new M;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];let v=g(T)/2/Math.PI+.5,E=m(T)/Math.PI+.5;o.push(v,1-E)}p(),d()}function d(){for(let T=0;T<o.length;T+=6){let S=o[T+0],v=o[T+2],E=o[T+4],P=Math.max(S,v,E),D=Math.min(S,v,E);P>.9&&D<.1&&(S<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),E<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function h(T,S){let v=T*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let T=new M,S=new M,v=new M,E=new M,P=new Se,D=new Se,I=new Se;for(let b=0,_=0;b<r.length;b+=9,_+=6){T.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),P.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),E.copy(T).add(S).add(v).divideScalar(3);let C=g(E);x(P,_+0,T,C),x(D,_+2,S,C),x(I,_+4,v,C)}}function x(T,S,v,E){E<0&&T.x===1&&(o[S]=T.x-1),v.x===0&&v.z===0&&(o[S]=E/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new at;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(je(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(je(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kl=class extends zr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Il=new M,od=new Vd,ad=new Vd,ld=new Vd,$l=class extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Il.subVectors(s[0],s[1]).add(s[0]),c=Il);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Il.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Il),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),od.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),ad.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),ld.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(od.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),ad.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),ld.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(od.calc(l),ad.calc(l),ld.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function im(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function i_(n,e){let t=1-n;return t*t*e}function s_(n,e){return 2*(1-n)*n*e}function r_(n,e){return n*n*e}function Vo(n,e,t,i){return i_(n,e)+s_(n,t)+r_(n,i)}function o_(n,e){let t=1-n;return t*t*t*e}function a_(n,e){let t=1-n;return 3*t*t*n*e}function l_(n,e){return 3*(1-n)*n*n*e}function c_(n,e){return n*n*n*e}function ko(n,e,t,i,s){return o_(n,e)+a_(n,t)+l_(n,i)+c_(n,s)}var ia=class extends Fn{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,s.x,r.x,o.x,a.x),ko(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends Fn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,s.x,r.x,o.x,a.x),ko(e,s.y,r.y,o.y,a.y),ko(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Fn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends Fn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Fn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vo(e,s.x,r.x,o.x),Vo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Fn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vo(e,s.x,r.x,o.x),Vo(e,s.y,r.y,o.y),Vo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(im(a,l.x,c.x,u.x,d.x),im(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},gd=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:$l,CubicBezierCurve:ia,CubicBezierCurve3:Ql,EllipseCurve:zr,LineCurve:sa,LineCurve3:ec,QuadraticBezierCurve:ra,QuadraticBezierCurve3:tc,SplineCurve:oa}),nc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gd[s.type]().fromJSON(s))}return this}},aa=class extends nc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new sa(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ra(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ia(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new zr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rs=class extends aa{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new aa().fromJSON(s))}return this}};function u_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ig(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=m_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return la(r,o,t,a,l,c,0),o}function ig(n,e,t,i,s){let r;if(s===A_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=sm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=sm(o/i|0,n[o],n[o+1],r);return r&&Vr(r,r.next)&&(ua(r),r=r.next),r}function Ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function la(n,e,t,i,s,r,o){if(!n)return;!o&&r&&v_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?d_(n,i,s,r):h_(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=f_(Ps(n),e),la(n,e,t,i,s,r,2)):o===2&&p_(n,e,t,i,s,r):la(Ps(n),e,t,i,s,r,1);break}}}function h_(n){let e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&Bo(s,a,r,l,o,c,p.x,p.y)&&Ft(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function d_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ft(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=xd(h,p,e,t,i),T=xd(x,g,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=T;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Bo(a,u,l,d,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Bo(a,u,l,d,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Bo(a,u,l,d,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=T;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Bo(a,u,l,d,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function f_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Vr(i,s)&&rg(i,t,t.next,s)&&ca(i,s)&&ca(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return Ps(t)}function p_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S_(o,a)){let l=og(o,a);o=Ps(o,o.next),l=Ps(l,l.next),la(o,e,t,i,s,r,0),la(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function m_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ig(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(b_(c))}s.sort(g_);for(let r=0;r<s.length;r++)t=x_(s[r],t);return t}function g_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function x_(n,e){let t=y_(n,e);if(!t)return e;let i=og(t,n);return Ps(i,i.next),Ps(t,t.next)}function y_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Vr(n,t))return t;do{if(Vr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&sg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ca(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&__(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function __(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function v_(n,e,t,i){let s=n;do s.z===0&&(s.z=xd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,M_(s)}function M_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function xd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function b_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function sg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Bo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&sg(n,e,t,i,s,r,o,a)}function S_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!T_(n,e)&&(ca(n,e)&&ca(e,n)&&w_(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||Vr(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vr(n,e){return n.x===e.x&&n.y===e.y}function rg(n,e,t,i){let s=Dl(Ft(n,e,t)),r=Dl(Ft(n,e,i)),o=Dl(Ft(t,i,n)),a=Dl(Ft(t,i,e));return!!(s!==r&&o!==a||s===0&&Ll(n,t,e)||r===0&&Ll(n,i,e)||o===0&&Ll(t,n,i)||a===0&&Ll(t,e,i))}function Ll(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Dl(n){return n>0?1:n<0?-1:0}function T_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&rg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ca(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function w_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function og(n,e){let t=yd(n.i,n.x,n.y),i=yd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function sm(n,e,t,i){let s=yd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var _d=class{static triangulate(e,t,i=2){return u_(e,t,i)}},oi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];rm(e),om(i,e);let o=e.length;t.forEach(rm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,om(i,t[l]);let a=_d.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function om(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ha=class n extends it{constructor(e=new Rs([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:E_,S,v=!1,E,P,D,I;m&&(S=m.getSpacedPoints(u),v=!0,f=!1,E=m.computeFrenetFrames(u,!1),P=new M,D=new M,I=new M),f||(g=0,h=0,p=0,x=0);let b=a.extractPoints(c),_=b.shape,C=b.holes;if(!oi.isClockWise(_)){_=_.reverse();for(let H=0,B=C.length;H<B;H++){let k=C[H];oi.isClockWise(k)&&(C[H]=k.reverse())}}function G(H){let k=10000000000000001e-36,z=H[0];for(let le=1;le<=H.length;le++){let ne=le%H.length,de=H[ne],De=de.x-z.x,Ne=de.y-z.y,R=De*De+Ne*Ne,y=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(z.x),Math.abs(z.y)),L=k*y*y;if(R<=L){H.splice(ne,1),le--;continue}z=de}}G(_),C.forEach(G);let Y=C.length,Z=_;for(let H=0;H<Y;H++){let B=C[H];_=_.concat(B)}function q(H,B,k){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(B,k)}let Q=_.length;function V(H,B,k){let z,le,ne,de=H.x-B.x,De=H.y-B.y,Ne=k.x-H.x,R=k.y-H.y,y=de*de+De*De,L=de*R-De*Ne;if(Math.abs(L)>Number.EPSILON){let X=Math.sqrt(y),ae=Math.sqrt(Ne*Ne+R*R),j=B.x-De/X,ge=B.y+de/X,fe=k.x-R/ae,xe=k.y+Ne/ae,ye=((fe-j)*R-(xe-ge)*Ne)/(de*R-De*Ne);z=j+de*ye-H.x,le=ge+De*ye-H.y;let ue=z*z+le*le;if(ue<=2)return new Se(z,le);ne=Math.sqrt(ue/2)}else{let X=!1;de>Number.EPSILON?Ne>Number.EPSILON&&(X=!0):de<-Number.EPSILON?Ne<-Number.EPSILON&&(X=!0):Math.sign(De)===Math.sign(R)&&(X=!0),X?(z=-De,le=de,ne=Math.sqrt(y)):(z=de,le=De,ne=Math.sqrt(y/2))}return new Se(z/ne,le/ne)}let ee=[];for(let H=0,B=Z.length,k=B-1,z=H+1;H<B;H++,k++,z++)k===B&&(k=0),z===B&&(z=0),ee[H]=V(Z[H],Z[k],Z[z]);let he=[],se,pe=ee.concat();for(let H=0,B=Y;H<B;H++){let k=C[H];se=[];for(let z=0,le=k.length,ne=le-1,de=z+1;z<le;z++,ne++,de++)ne===le&&(ne=0),de===le&&(de=0),se[z]=V(k[z],k[ne],k[de]);he.push(se),pe=pe.concat(se)}let be;if(g===0)be=oi.triangulateShape(Z,C);else{let H=[],B=[];for(let k=0;k<g;k++){let z=k/g,le=h*Math.cos(z*Math.PI/2),ne=p*Math.sin(z*Math.PI/2)+x;for(let de=0,De=Z.length;de<De;de++){let Ne=q(Z[de],ee[de],ne);ce(Ne.x,Ne.y,-le),z===0&&H.push(Ne)}for(let de=0,De=Y;de<De;de++){let Ne=C[de];se=he[de];let R=[];for(let y=0,L=Ne.length;y<L;y++){let X=q(Ne[y],se[y],ne);ce(X.x,X.y,-le),z===0&&R.push(X)}z===0&&B.push(R)}}be=oi.triangulateShape(H,B)}let Ce=be.length,$=p+x;for(let H=0;H<Q;H++){let B=f?q(_[H],pe[H],$):_[H];v?(D.copy(E.normals[0]).multiplyScalar(B.x),P.copy(E.binormals[0]).multiplyScalar(B.y),I.copy(S[0]).add(D).add(P),ce(I.x,I.y,I.z)):ce(B.x,B.y,0)}for(let H=1;H<=u;H++)for(let B=0;B<Q;B++){let k=f?q(_[B],pe[B],$):_[B];v?(D.copy(E.normals[H]).multiplyScalar(k.x),P.copy(E.binormals[H]).multiplyScalar(k.y),I.copy(S[H]).add(D).add(P),ce(I.x,I.y,I.z)):ce(k.x,k.y,d/u*H)}for(let H=g-1;H>=0;H--){let B=H/g,k=h*Math.cos(B*Math.PI/2),z=p*Math.sin(B*Math.PI/2)+x;for(let le=0,ne=Z.length;le<ne;le++){let de=q(Z[le],ee[le],z);ce(de.x,de.y,d+k)}for(let le=0,ne=C.length;le<ne;le++){let de=C[le];se=he[le];for(let De=0,Ne=de.length;De<Ne;De++){let R=q(de[De],se[De],z);v?ce(R.x,R.y+S[u-1].y,S[u-1].x+k):ce(R.x,R.y,d+k)}}}U(),N();function U(){let H=s.length/3;if(f){let B=0,k=Q*B;for(let z=0;z<Ce;z++){let le=be[z];te(le[2]+k,le[1]+k,le[0]+k)}B=u+g*2,k=Q*B;for(let z=0;z<Ce;z++){let le=be[z];te(le[0]+k,le[1]+k,le[2]+k)}}else{for(let B=0;B<Ce;B++){let k=be[B];te(k[2],k[1],k[0])}for(let B=0;B<Ce;B++){let k=be[B];te(k[0]+Q*u,k[1]+Q*u,k[2]+Q*u)}}i.addGroup(H,s.length/3-H,0)}function N(){let H=s.length/3,B=0;ie(Z,B),B+=Z.length;for(let k=0,z=C.length;k<z;k++){let le=C[k];ie(le,B),B+=le.length}i.addGroup(H,s.length/3-H,1)}function ie(H,B){let k=H.length;for(;--k>=0;){let z=k,le=k-1;le<0&&(le=H.length-1);for(let ne=0,de=u+g*2;ne<de;ne++){let De=Q*ne,Ne=Q*(ne+1),R=B+z+De,y=B+le+De,L=B+le+Ne,X=B+z+Ne;_e(R,y,L,X)}}}function ce(H,B,k){l.push(H),l.push(B),l.push(k)}function te(H,B,k){Ue(H),Ue(B),Ue(k);let z=s.length/3,le=T.generateTopUV(i,s,z-3,z-2,z-1);w(le[0]),w(le[1]),w(le[2])}function _e(H,B,k,z){Ue(H),Ue(B),Ue(z),Ue(B),Ue(k),Ue(z);let le=s.length/3,ne=T.generateSideWallUV(i,s,le-6,le-3,le-2,le-1);w(ne[0]),w(ne[1]),w(ne[3]),w(ne[1]),w(ne[2]),w(ne[3])}function Ue(H){s.push(l[H*3+0]),s.push(l[H*3+1]),s.push(l[H*3+2])}function w(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return C_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gd[s.type]().fromJSON(s)),new n(i,e.options)}},E_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(f,1-p),new Se(x,1-m)]:[new Se(a,1-l),new Se(u,1-d),new Se(h,1-p),new Se(g,1-m)]}};function C_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kt=class n extends Or{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ei=class n extends Or{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Jt=class n extends it{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let T=m*f-o;for(let S=0;S<c;S++){let v=S*d-r;p.push(v,-T,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let S=T+c*m,v=T+c*(m+1),E=T+1+c*(m+1),P=T+1+c*m;h.push(S,v,P),h.push(v,E,P)}this.setIndex(h),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},kr=class n extends it{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new M,p=new Se;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let T=m+g,S=T,v=T+i+1,E=T+i+2,P=T+1;a.push(S,v,P),a.push(v,E,P)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},da=class n extends it{constructor(e=new Rs([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;oi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let T=p[g];oi.isClockWise(T)===!0&&(p[g]=T.reverse())}let x=oi.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let T=p[g];h=h.concat(T)}for(let g=0,m=h.length;g<m;g++){let T=h[g];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let g=0,m=x.length;g<m;g++){let T=x[g],S=T[0]+d,v=T[1]+d,E=T[2]+d;i.push(S,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return R_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function R_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ci=class n extends it{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let T=[],S=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let P=E/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+S*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(P+v,1-S),T.push(c++)}u.push(T)}for(let m=0;m<i;m++)for(let T=0;T<t;T++){let S=u[m][T+1],v=u[m][T],E=u[m+1][T],P=u[m+1][T+1];(m!==0||o>0)&&h.push(S,v,P),(m!==i-1||l<Math.PI)&&h.push(v,E,P)}this.setIndex(h),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fa=class n extends Or{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ri=class n extends it{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,T=(s+1)*h+p;o.push(x,g,T),o.push(g,m,T)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var It=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends It{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qt=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ic=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ul(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function P_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Is=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends Is{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fd:r=e,a=2*t-i;break;case pd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fd:o=e,l=2*i-t;break;case pd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,T=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,S=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+T*o[c+E]+S*o[l+E]+v*o[d+E];return r}},oc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},ac=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case kl:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&P_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=kl;var Qi=class extends Bn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Go;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};lc.prototype.ValueTypeName="color";var cc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};cc.prototype.ValueTypeName="number";var uc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},ma=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Bn{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Go;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};hc.prototype.ValueTypeName="vector";var Bl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},dc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ag=new dc,Gr=class{constructor(e){this.manager=e!==void 0?e:ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=new WeakMap,fc=class extends Gr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Mr.get(o);d===void 0&&(d=[],Mr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Er("img");function l(){u(),t&&t(this);let d=Mr.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Mr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Bl.remove(`image:${e}`);let f=Mr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ga=class extends Gr{constructor(e){super(e)}load(e,t,i,s){let r=new dn,o=new fc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Hr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xa=class extends Hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cd=new at,am=new M,lm=new M,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;am.setFromMatrixPosition(e.matrixWorld),t.position.copy(am),lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lm),t.updateMatrixWorld(),cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cm=new at,Fo=new M,ud=new M,vd=class extends pc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fo),ud.copy(i.position),ud.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ud),i.updateMatrixWorld(),s.makeTranslation(-Fo.x,-Fo.y,-Fo.z),cm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cm,i.coordinateSystem,i.reversedDepth)}},ya=class extends Hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_a=class extends Yo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Md=class extends pc{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},va=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Md}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var mc=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kd="\\[\\]\\.:\\/",I_=new RegExp("["+kd+"]","g"),Gd="[^"+kd+"]",L_="[^"+kd.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",Gd),U_=/(WCOD+)?/.source.replace("WCOD",L_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gd),F_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gd),B_=new RegExp("^"+D_+U_+N_+F_+"$"),O_=["material","materials","bones","map"],bd=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(e){let t=B_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);O_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=bd;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dw=new Float32Array(1);var um=new at,Ls=class{constructor(e,t,i=0,s=1/0){this.ray=new Pr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(um),this}intersectObject(e,t=!0,i=[]){return Sd(e,this,i,t),i.sort(hm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Sd(e[s],this,i,t);return i.sort(hm),i}};function hm(n,e){return n.distance-e.distance}function Sd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Sd(r[o],e,t,!0)}}var dm=new M,Nl=new M,br=new M,Sr=new M,hd=new M,z_=new M,V_=new M,Ma=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dm.subVectors(e,this.start),Nl.subVectors(this.end,this.start);let i=Nl.dot(Nl),r=Nl.dot(dm)/i;return t&&(r=je(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=z_,i=V_){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;br.subVectors(c,a),Sr.subVectors(u,l),hd.subVectors(a,l);let d=br.dot(br),f=Sr.dot(Sr),h=Sr.dot(hd);if(d<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=h/f,o=je(o,0,1);else{let p=br.dot(hd);if(f<=s)o=0,r=je(-p/d,0,1);else{let x=br.dot(Sr),g=d*f-x*x;g!==0?r=je((x*h-p*f)/g,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=je(-p/d,0,1)):o>1&&(o=1,r=je((x-p)/d,0,1))}}return t.copy(a).add(br.multiplyScalar(r)),i.copy(l).add(Sr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Hd(n,e,t,i){let s=k_(i);switch(t){case Ld:return n*e;case Pc:return n*e/s.components*s.byteLength;case Ic:return n*e/s.components*s.byteLength;case Ud:return n*e*2/s.components*s.byteLength;case Lc:return n*e*2/s.components*s.byteLength;case Dd:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Dc:return n*e*4/s.components*s.byteLength;case wa:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Bc:return Math.max(n,16)*Math.max(e,8)/4;case Uc:case Fc:return Math.max(n,8)*Math.max(e,8)/2;case Oc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tu:case nu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case su:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k_(n){switch(n){case On:case Cd:return{byteLength:1,components:1};case Xr:case Rd:case di:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case ts:case Ec:case ni:return{byteLength:4,components:1};case Pd:case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ig(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
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
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gv=`#define PI 3.141592653589793
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
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
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`struct PhysicalMaterial {
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
}`,qv=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IM=`float getShadowMask() {
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
}`,LM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,QM=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,h1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,f1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,x1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,_1=`#define TOON
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
}`,v1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Y_,alphahash_pars_fragment:Z_,alphamap_fragment:j_,alphamap_pars_fragment:J_,alphatest_fragment:K_,alphatest_pars_fragment:$_,aomap_fragment:Q_,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:sv,bsdfs:rv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:dv,color_pars_fragment:fv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:yv,displacementmap_pars_vertex:_v,displacementmap_vertex:vv,emissivemap_fragment:Mv,emissivemap_pars_fragment:bv,colorspace_fragment:Sv,colorspace_pars_fragment:Tv,envmap_fragment:wv,envmap_common_pars_fragment:Av,envmap_pars_fragment:Ev,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:zv,envmap_vertex:Rv,fog_vertex:Pv,fog_pars_vertex:Iv,fog_fragment:Lv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Bv,lights_pars_begin:Ov,lights_toon_fragment:Vv,lights_toon_pars_fragment:kv,lights_phong_fragment:Gv,lights_phong_pars_fragment:Hv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:Zv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Jv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:$v,map_fragment:Qv,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:sM,morphinstance_vertex:rM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:cM,normal_fragment_begin:uM,normal_fragment_maps:hM,normal_pars_fragment:dM,normal_pars_vertex:fM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:xM,clearcoat_pars_fragment:yM,iridescence_pars_fragment:_M,opaque_fragment:vM,packing:MM,premultiplied_alpha_fragment:bM,project_vertex:SM,dithering_fragment:TM,dithering_pars_fragment:wM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:RM,shadowmap_vertex:PM,shadowmask_pars_fragment:IM,skinbase_vertex:LM,skinning_pars_vertex:DM,skinning_vertex:UM,skinnormal_vertex:NM,specularmap_fragment:FM,specularmap_pars_fragment:BM,tonemapping_fragment:OM,tonemapping_pars_fragment:zM,transmission_fragment:VM,transmission_pars_fragment:kM,uv_pars_fragment:GM,uv_pars_vertex:HM,uv_vertex:WM,worldpos_vertex:XM,background_vert:qM,background_frag:YM,backgroundCube_vert:ZM,backgroundCube_frag:jM,cube_vert:JM,cube_frag:KM,depth_vert:$M,depth_frag:QM,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:s1,linedashed_frag:r1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:u1,meshmatcap_frag:h1,meshnormal_vert:d1,meshnormal_frag:f1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:x1,meshtoon_vert:y1,meshtoon_frag:_1,points_vert:v1,points_frag:M1,shadow_vert:b1,shadow_frag:S1,sprite_vert:T1,sprite_frag:w1},Pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fn([Pe.points,Pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fn([Pe.common,Pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fn([Pe.sprite,Pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:fn([Pe.lights,Pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var uu={r:0,b:0,g:0},Fs=new an,A1=new at;function E1(n,e,t,i,s,r,o){let a=new Oe(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1,E=p(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,v){let E=p(v);E&&(E.isCubeTexture||E.mapping===Sa)?(u===void 0&&(u=new Be(new Qe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ns(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fs.copy(v.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Fs)),u.material.toneMapped=lt.getTransfer(E.colorSpace)!==mt,(d!==E||f!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new Jt(2,2),new vn({name:"BackgroundMaterial",uniforms:Ns(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(uu,zd(n)),i.buffers.color.setClear(uu.r,uu.g,uu.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:x,addToRenderList:g,dispose:T}}function C1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,C,F,G,Y){let Z=!1,q=d(G,F,C);r!==q&&(r=q,c(r.object)),Z=h(_,G,F,Y),Z&&p(_,G,F,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(_,C,F,G),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,C,F){let G=F.wireframe===!0,Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let Z=Y[C.id];Z===void 0&&(Z={},Y[C.id]=Z);let q=Z[G];return q===void 0&&(q=f(l()),Z[G]=q),q}function f(_){let C=[],F=[],G=[];for(let Y=0;Y<t;Y++)C[Y]=0,F[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:G,object:_,attributes:{},index:null}}function h(_,C,F,G){let Y=r.attributes,Z=C.attributes,q=0,Q=F.getAttributes();for(let V in Q)if(Q[V].location>=0){let he=Y[V],se=Z[V];if(se===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),he===void 0||he.attribute!==se||se&&he.data!==se.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function p(_,C,F,G){let Y={},Z=C.attributes,q=0,Q=F.getAttributes();for(let V in Q)if(Q[V].location>=0){let he=Z[V];he===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));let se={};se.attribute=he,he&&he.data&&(se.data=he.data),Y[V]=se,q++}r.attributes=Y,r.attributesNum=q,r.index=G}function x(){let _=r.newAttributes;for(let C=0,F=_.length;C<F;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let F=r.newAttributes,G=r.enabledAttributes,Y=r.attributeDivisors;F[_]=1,G[_]===0&&(n.enableVertexAttribArray(_),G[_]=1),Y[_]!==C&&(n.vertexAttribDivisor(_,C),Y[_]=C)}function T(){let _=r.newAttributes,C=r.enabledAttributes;for(let F=0,G=C.length;F<G;F++)C[F]!==_[F]&&(n.disableVertexAttribArray(F),C[F]=0)}function S(_,C,F,G,Y,Z,q){q===!0?n.vertexAttribIPointer(_,C,F,Y,Z):n.vertexAttribPointer(_,C,F,G,Y,Z)}function v(_,C,F,G){x();let Y=G.attributes,Z=F.getAttributes(),q=C.defaultAttributeValues;for(let Q in Z){let V=Z[Q];if(V.location>=0){let ee=Y[Q];if(ee===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor)),ee!==void 0){let he=ee.normalized,se=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;let be=pe.buffer,Ce=pe.type,$=pe.bytesPerElement,U=Ce===n.INT||Ce===n.UNSIGNED_INT||ee.gpuType===Ec;if(ee.isInterleavedBufferAttribute){let N=ee.data,ie=N.stride,ce=ee.offset;if(N.isInstancedInterleavedBuffer){for(let te=0;te<V.locationSize;te++)m(V.location+te,N.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let te=0;te<V.locationSize;te++)g(V.location+te);n.bindBuffer(n.ARRAY_BUFFER,be);for(let te=0;te<V.locationSize;te++)S(V.location+te,se/V.locationSize,Ce,he,ie*$,(ce+se/V.locationSize*te)*$,U)}else{if(ee.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)m(V.location+N,ee.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let N=0;N<V.locationSize;N++)g(V.location+N);n.bindBuffer(n.ARRAY_BUFFER,be);for(let N=0;N<V.locationSize;N++)S(V.location+N,se/V.locationSize,Ce,he,se*$,se/V.locationSize*N*$,U)}}else if(q!==void 0){let he=q[Q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(V.location,he);break;case 3:n.vertexAttrib3fv(V.location,he);break;case 4:n.vertexAttrib4fv(V.location,he);break;default:n.vertexAttrib1fv(V.location,he)}}}}T()}function E(){I();for(let _ in i){let C=i[_];for(let F in C){let G=C[F];for(let Y in G)u(G[Y].object),delete G[Y];delete C[F]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let F in C){let G=C[F];for(let Y in G)u(G[Y].object),delete G[Y];delete C[F]}delete i[_.id]}function D(_){for(let C in i){let F=i[C];if(F[_.id]===void 0)continue;let G=F[_.id];for(let Y in G)u(G[Y].object),delete G[Y];delete F[_.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function R1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==En&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let I=D===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==On&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ni&&!I)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:E,maxSamples:P}}function I1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let T=r?0:i,S=T*4,v=m.clippingState||null;l.value=v,v=u(p,f,S,h);for(let E=0;E!==S;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=h;S!==x;++S,v+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function L1(n){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=Ds:a===wc&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wr||a===wc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var jr=4,lg=[.125,.215,.35,.446,.526,.582],zs=20,Wd=new _a,cg=new Oe,Xd=null,qd=0,Yd=0,Zd=!1,Os=(1+Math.sqrt(5))/2,Zr=1/Os,ug=[new M(-Os,Zr,0),new M(Os,Zr,0),new M(-Zr,0,Os),new M(Zr,0,Os),new M(0,Os,-Zr),new M(0,Os,Zr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],D1=new M,Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=D1}=r;Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,qd,Yd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:di,format:En,colorSpace:ws,depthBuffer:!1},s=hg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U1(r)),this._blurMaterial=N1(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Wd)}_sceneToCubeUV(e,t,i,s,r){let l=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(cg),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new bt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Be(new Qe,x),m=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,m=!0):(x.color.copy(cg),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;hu(s,v*E,S>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ds||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;hu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ug[(s-r-1)%ug.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*zs-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):zs;g>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zs}`);let m=[],T=0;for(let D=0;D<zs;++D){let I=D/x,b=Math.exp(-I*I/2);m.push(b),D===0?T+=b:D<g&&(T+=2*b)}for(let D=0;D<m.length;D++)m[D]=m[D]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-i;let v=this._sizeLods[s],E=3*v*(s>S-jr?s-S+jr:0),P=4*(this._cubeSize-v);hu(t,E,P,3*v,2*v),l.setRenderTarget(t),l.render(d,Wd)}};function U1(n){let e=[],t=[],i=[],s=n,r=n-jr+1+lg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-jr?l=lg[o-n+jr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,T=new Float32Array(x*p*h),S=new Float32Array(g*p*h),v=new Float32Array(m*p*h);for(let P=0;P<h;P++){let D=P%3*2/3-1,I=P>2?0:-1,b=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];T.set(b,x*p*P),S.set(f,g*p*P);let _=[P,P,P,P,P,P];v.set(_,m*p*P)}let E=new it;E.setAttribute("position",new vt(T,x)),E.setAttribute("uv",new vt(S,g)),E.setAttribute("faceIndex",new vt(v,m)),e.push(E),s>jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hg(n,e,t){let i=new wn(n,e,t);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function N1(n,e,t){let i=new Float32Array(zs),s=new M(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function dg(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function fg(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function rf(){return`

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
	`}function F1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wr||l===wc,u=l===Ds||l===Us;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kr(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new Kr(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function B1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function O1(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let T=h.array;x=h.version;for(let S=0,v=T.length;S<v;S+=3){let E=T[S+0],P=T[S+1],D=T[S+2];f.push(E,P,P,D,D,E)}}else if(p!==void 0){let T=p.array;x=p.version;for(let S=0,v=T.length/3-1;S<v;S+=3){let E=S+0,P=S+1,D=S+2;f.push(E,P,P,D,D,E)}}else return;let g=new(Od(f)?qo:As)(f,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function z1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,p);let m=0;for(let T=0;T<p;T++)m+=h[T]*x[T];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function V1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function k1(n,e,t){let i=new WeakMap,s=new ot;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;h===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let P=new Float32Array(v*E*4*d),D=new Xo(P,v,E,d);D.type=ni,D.needsUpdate=!0;let I=S*4;for(let _=0;_<d;_++){let C=g[_],F=m[_],G=T[_],Y=v*E*4*_;for(let Z=0;Z<C.count;Z++){let q=Z*I;h===!0&&(s.fromBufferAttribute(C,Z),P[Y+q+0]=s.x,P[Y+q+1]=s.y,P[Y+q+2]=s.z,P[Y+q+3]=0),p===!0&&(s.fromBufferAttribute(F,Z),P[Y+q+4]=s.x,P[Y+q+5]=s.y,P[Y+q+6]=s.z,P[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(G,Z),P[Y+q+8]=s.x,P[Y+q+9]=s.y,P[Y+q+10]=s.z,P[Y+q+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new Se(v,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function G1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Lg=new dn,pg=new ea(1,1),Dg=new Xo,Ug=new Xl,Ng=new Zo,mg=[],gg=[],xg=new Float32Array(16),yg=new Float32Array(9),_g=new Float32Array(4);function $r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mg[s];if(r===void 0&&(r=new Float32Array(s),mg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pu(n,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Y1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;_g.set(i),n.uniformMatrix2fv(this.addr,!1,_g),$t(t,i)}}function Z1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;yg.set(i),n.uniformMatrix3fv(this.addr,!1,yg),$t(t,i)}}function j1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;xg.set(i),n.uniformMatrix4fv(this.addr,!1,xg),$t(t,i)}}function J1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function $1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function Q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function eb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function sb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pg.compareFunction=Nd,r=pg):r=Lg,t.setTexture2D(e||r,s)}function rb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ug,s)}function ob(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ng,s)}function ab(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Dg,s)}function lb(n){switch(n){case 5126:return H1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return Z1;case 35676:return j1;case 5124:case 35670:return J1;case 35667:case 35671:return K1;case 35668:case 35672:return $1;case 35669:case 35673:return Q1;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(n,e){n.uniform1fv(this.addr,e)}function ub(n,e){let t=$r(e,this.size,2);n.uniform2fv(this.addr,t)}function hb(n,e){let t=$r(e,this.size,3);n.uniform3fv(this.addr,t)}function db(n,e){let t=$r(e,this.size,4);n.uniform4fv(this.addr,t)}function fb(n,e){let t=$r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pb(n,e){let t=$r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mb(n,e){let t=$r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gb(n,e){n.uniform1iv(this.addr,e)}function xb(n,e){n.uniform2iv(this.addr,e)}function yb(n,e){n.uniform3iv(this.addr,e)}function _b(n,e){n.uniform4iv(this.addr,e)}function vb(n,e){n.uniform1uiv(this.addr,e)}function Mb(n,e){n.uniform2uiv(this.addr,e)}function bb(n,e){n.uniform3uiv(this.addr,e)}function Sb(n,e){n.uniform4uiv(this.addr,e)}function Tb(n,e,t){let i=this.cache,s=e.length,r=pu(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lg,r[o])}function wb(n,e,t){let i=this.cache,s=e.length,r=pu(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ug,r[o])}function Ab(n,e,t){let i=this.cache,s=e.length,r=pu(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ng,r[o])}function Eb(n,e,t){let i=this.cache,s=e.length,r=pu(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Dg,r[o])}function Cb(n){switch(n){case 5126:return cb;case 35664:return ub;case 35665:return hb;case 35666:return db;case 35674:return fb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return Mb;case 36295:return bb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Eb}}var Jd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lb(t.type)}},Kd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cb(t.type)}},$d=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},jd=/(\w+)(\])?(\[|\.)?/g;function vg(n,e){n.seq.push(e),n.map[e.id]=e}function Rb(n,e,t){let i=n.name,s=i.length;for(jd.lastIndex=0;;){let r=jd.exec(i),o=jd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vg(t,c===void 0?new Jd(a,n,e):new Kd(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new $d(a),vg(t,d)),t=d}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Rb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Mg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Pb=37297,Ib=0;function Lb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var bg=new $e;function Db(n){lt._getMatrix(bg,lt.workingColorSpace,n);let e=`mat3( ${bg.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Ho:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lb(n.getShaderSource(e),a)}else return r}function Ub(n,e){let t=Db(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nb(n,e){let t;switch(e){case Fm:t="Linear";break;case Bm:t="Reinhard";break;case Om:t="Cineon";break;case Tc:t="ACESFilmic";break;case Vm:t="AgX";break;case km:t="Neutral";break;case zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var du=new M;function Fb(){lt.getLuminanceCoefficients(du);let n=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function Ob(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function Tg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(n){return n.replace(Vb,Gb)}var kb=new Map;function Gb(n,e){let t=nt[e];if(t===void 0){let i=kb.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}var Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(n){return n.replace(Hb,Wb)}function Wb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Xb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function qb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Zb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Um:e="ENVMAP_BLENDING_MIX";break;case Nm:e="ENVMAP_BLENDING_ADD";break}return e}function jb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Jb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Xb(t),c=qb(t),u=Yb(t),d=Zb(t),f=jb(t),h=Bb(t),p=Ob(r),x=s.createProgram(),g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(g=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),Fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Qd(o),o=Tg(o,t),o=wg(o,t),a=Qd(a),a=Tg(a,t),a=wg(a,t),o=Ag(o),a=Ag(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=T+g+o,v=T+m+a,E=Mg(s,s.VERTEX_SHADER,S),P=Mg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(C){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(E)||"",Y=s.getShaderInfoLog(P)||"",Z=F.trim(),q=G.trim(),Q=Y.trim(),V=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,P);else{let he=Sg(s,E,"vertex"),se=Sg(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Z+`
`+he+`
`+se)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||Q==="")&&(ee=!1);ee&&(C.diagnostics={runnable:V,programLog:Z,vertexShader:{log:q,prefix:g},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(E),s.deleteShader(P),I=new Jr(s,x),b=zb(s,x)}let I;this.getUniforms=function(){return I===void 0&&D(this),I};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Pb)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=P,this}var Kb=0,ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tf(e),t.set(e,i)),i}},tf=class{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}};function $b(n,e,t,i,s,r,o){let a=new Ir,l=new ef,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,C,F,G){let Y=F.fog,Z=G.geometry,q=b.isMeshStandardMaterial?F.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),V=Q&&Q.mapping===Sa?Q.image.height:null,ee=p[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=he!==void 0?he.length:0,pe=0;Z.morphAttributes.position!==void 0&&(pe=1),Z.morphAttributes.normal!==void 0&&(pe=2),Z.morphAttributes.color!==void 0&&(pe=3);let be,Ce,$,U;if(ee){let ht=fi[ee];be=ht.vertexShader,Ce=ht.fragmentShader}else be=b.vertexShader,Ce=b.fragmentShader,l.update(b),$=l.getVertexShaderID(b),U=l.getFragmentShaderID(b);let N=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ce=G.isInstancedMesh===!0,te=G.isBatchedMesh===!0,_e=!!b.map,Ue=!!b.matcap,w=!!Q,H=!!b.aoMap,B=!!b.lightMap,k=!!b.bumpMap,z=!!b.normalMap,le=!!b.displacementMap,ne=!!b.emissiveMap,de=!!b.metalnessMap,De=!!b.roughnessMap,Ne=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,L=b.iridescence>0,X=b.sheen>0,ae=b.transmission>0,j=Ne&&!!b.anisotropyMap,ge=R&&!!b.clearcoatMap,fe=R&&!!b.clearcoatNormalMap,xe=R&&!!b.clearcoatRoughnessMap,ye=L&&!!b.iridescenceMap,ue=L&&!!b.iridescenceThicknessMap,we=X&&!!b.sheenColorMap,ze=X&&!!b.sheenRoughnessMap,ve=!!b.specularMap,Ae=!!b.specularColorMap,Ge=!!b.specularIntensityMap,O=ae&&!!b.transmissionMap,Te=ae&&!!b.thicknessMap,Re=!!b.gradientMap,Le=!!b.alphaMap,Me=b.alphaTest>0,me=!!b.alphaHash,ke=!!b.extensions,Ke=Ii;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let wt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:be,fragmentShader:Ce,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:U,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:te,batchingColor:te&&G._colorsTexture!==null,instancing:ce,instancingColor:ce&&G.instanceColor!==null,instancingMorph:ce&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ws,alphaToCoverage:!!b.alphaToCoverage,map:_e,matcap:Ue,envMap:w,envMapMode:w&&Q.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:B,bumpMap:k,normalMap:z,displacementMap:f&&le,emissiveMap:ne,normalMapObjectSpace:z&&b.normalMapType===Xm,normalMapTangentSpace:z&&b.normalMapType===lu,metalnessMap:de,roughnessMap:De,anisotropy:Ne,anisotropyMap:j,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:fe,clearcoatRoughnessMap:xe,dispersion:y,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:ve,specularColorMap:Ae,specularIntensityMap:Ge,transmission:ae,transmissionMap:O,thicknessMap:Te,gradientMap:Re,opaque:b.transparent===!1&&b.blending===Ss&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:Me,alphaHash:me,combine:b.combine,mapUv:_e&&x(b.map.channel),aoMapUv:H&&x(b.aoMap.channel),lightMapUv:B&&x(b.lightMap.channel),bumpMapUv:k&&x(b.bumpMap.channel),normalMapUv:z&&x(b.normalMap.channel),displacementMapUv:le&&x(b.displacementMap.channel),emissiveMapUv:ne&&x(b.emissiveMap.channel),metalnessMapUv:de&&x(b.metalnessMap.channel),roughnessMapUv:De&&x(b.roughnessMap.channel),anisotropyMapUv:j&&x(b.anisotropyMap.channel),clearcoatMapUv:ge&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(b.sheenRoughnessMap.channel),specularMapUv:ve&&x(b.specularMap.channel),specularColorMapUv:Ae&&x(b.specularColorMap.channel),specularIntensityMapUv:Ge&&x(b.specularIntensityMap.channel),transmissionMapUv:O&&x(b.transmissionMap.channel),thicknessMapUv:Te&&x(b.thicknessMap.channel),alphaMapUv:Le&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(z||Ne),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(_e||Le),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:_e&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gt,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(T(_,b),S(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function T(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let _=p[b.type],C;if(_){let F=fi[_];C=cu.clone(F.uniforms)}else C=b.uniforms;return C}function E(b,_){let C;for(let F=0,G=u.length;F<G;F++){let Y=u[F];if(Y.cacheKey===_){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Jb(n,_,b,r),u.push(C)),C}function P(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:I}}function Qb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function eS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||eS),i.length>1&&i.sort(f||Cg),s.length>1&&s.sort(f||Cg)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function tS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rg,n.set(i,[o])):s>=r.length?(o=new Rg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Oe};break;case"SpotLight":t={position:new M,direction:new M,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function iS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sS=0;function rS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oS(n){let e=new nS,t=iS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new at,o=new at;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,T=0,S=0,v=0,E=0,P=0,D=0;c.sort(rS);for(let b=0,_=c.length;b<_;b++){let C=c[b],F=C.color,G=C.intensity,Y=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*G,d+=F.g*G,f+=F.b*G;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],G);D++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,V=t.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=C.shadow.matrix,T++}i.directional[h]=q,h++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(F).multiplyScalar(G),q.distance=Y,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[x]=q;let Q=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,Q.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=Z,v++}x++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(F).multiplyScalar(G),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=q,g++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let Q=C.shadow,V=t.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=q,p++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(G),q.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[m]=q,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==h||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,I.directionalLength=h,I.pointLength=p,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=D,i.version=sS++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let S=c[m];if(S.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(S.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Pg(n){let e=new oS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function aS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pg(n),e.set(s,[a])):r>=o.length?(a=new Pg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var lS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cS=`uniform sampler2D shadow_pass;
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
}`;function uS(n,e,t){let i=new Fr,s=new Se,r=new Se,o=new ot,a=new ic({depthPacking:Wm}),l=new sc,c={},u=t.maxTextureSize,d={[Qn]:ln,[ln]:Qn,[Gt]:Gt},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:lS,fragmentShader:cS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new it;p.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let m=this.type;this.render=function(P,D,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let b=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=m!==ui&&this.type===ui,Y=m===ui&&this.type!==ui;for(let Z=0,q=P.length;Z<q;Z++){let Q=P[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();if(s.multiply(ee),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y)),V.map===null||G===!0||Y===!0){let se=this.type!==ui?{minFilter:rn,magFilter:rn}:{};V.map!==null&&V.map.dispose(),V.map=new wn(s.x,s.y,se),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let he=V.getViewportCount();for(let se=0;se<he;se++){let pe=V.getViewport(se);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(o),V.updateMatrices(Q,se),i=V.getFrustum(),v(D,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ui&&T(V,I),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,_,C)};function T(P,D){let I=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,I,f,x,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,I,h,x,null)}function S(P,D,I,b){let _=null,C=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)_=C;else if(_=I.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let F=_.uuid,G=D.uuid,Y=c[F];Y===void 0&&(Y={},c[F]=Y);let Z=Y[G];Z===void 0&&(Z=_.clone(),Y[G]=Z,D.addEventListener("dispose",E)),_=Z}if(_.visible=D.visible,_.wireframe=D.wireframe,b===ui?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let F=n.properties.get(_);F.light=I}return _}function v(P,D,I,b,_){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let G=e.update(P),Y=P.material;if(Array.isArray(Y)){let Z=G.groups;for(let q=0,Q=Z.length;q<Q;q++){let V=Z[q],ee=Y[V.materialIndex];if(ee&&ee.visible){let he=S(P,ee,b,_);P.onBeforeShadow(n,P,D,I,G,he,V),n.renderBufferDirect(I,null,G,he,P,V),P.onAfterShadow(n,P,D,I,G,he,V)}}}else if(Y.visible){let Z=S(P,Y,b,_);P.onBeforeShadow(n,P,D,I,G,Z,null),n.renderBufferDirect(I,null,G,Z,P,null),P.onAfterShadow(n,P,D,I,G,Z,null)}}let F=P.children;for(let G=0,Y=F.length;G<Y;G++)v(F[G],D,I,b,_)}function E(P){P.target.removeEventListener("dispose",E);for(let I in c){let b=c[I],_=P.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var hS={[gc]:xc,[yc]:Mc,[_c]:bc,[Ts]:vc,[xc]:gc,[Mc]:yc,[bc]:_c,[vc]:Ts};function dS(n,e){function t(){let O=!1,Te=new ot,Re=null,Le=new ot(0,0,0,0);return{setMask:function(Me){Re!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){O=Me},setClear:function(Me,me,ke,Ke,wt){wt===!0&&(Me*=Ke,me*=Ke,ke*=Ke),Te.set(Me,me,ke,Ke),Le.equals(Te)===!1&&(n.clearColor(Me,me,ke,Ke),Le.copy(Te))},reset:function(){O=!1,Re=null,Le.set(-1,0,0,0)}}}function i(){let O=!1,Te=!1,Re=null,Le=null,Me=null;return{setReversed:function(me){if(Te!==me){let ke=e.get("EXT_clip_control");me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Te=me;let Ke=Me;Me=null,this.setClear(Ke)}},getReversed:function(){return Te},setTest:function(me){me?N(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(me){Re!==me&&!O&&(n.depthMask(me),Re=me)},setFunc:function(me){if(Te&&(me=hS[me]),Le!==me){switch(me){case gc:n.depthFunc(n.NEVER);break;case xc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case Mc:n.depthFunc(n.GREATER);break;case bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=me}},setLocked:function(me){O=me},setClear:function(me){Me!==me&&(Te&&(me=1-me),n.clearDepth(me),Me=me)},reset:function(){O=!1,Re=null,Le=null,Me=null,Te=!1}}}function s(){let O=!1,Te=null,Re=null,Le=null,Me=null,me=null,ke=null,Ke=null,wt=null;return{setTest:function(ht){O||(ht?N(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(ht){Te!==ht&&!O&&(n.stencilMask(ht),Te=ht)},setFunc:function(ht,_i,ri){(Re!==ht||Le!==_i||Me!==ri)&&(n.stencilFunc(ht,_i,ri),Re=ht,Le=_i,Me=ri)},setOp:function(ht,_i,ri){(me!==ht||ke!==_i||Ke!==ri)&&(n.stencilOp(ht,_i,ri),me=ht,ke=_i,Ke=ri)},setLocked:function(ht){O=ht},setClear:function(ht){wt!==ht&&(n.clearStencil(ht),wt=ht)},reset:function(){O=!1,Te=null,Re=null,Le=null,Me=null,me=null,ke=null,Ke=null,wt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,T=null,S=null,v=null,E=null,P=null,D=new Oe(0,0,0),I=0,b=!1,_=null,C=null,F=null,G=null,Y=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Q>=2);let ee=null,he={},se=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),be=new ot().fromArray(se),Ce=new ot().fromArray(pe);function $(O,Te,Re,Le){let Me=new Uint8Array(4),me=n.createTexture();n.bindTexture(O,me),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<Re;ke++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Te+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return me}let U={};U[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(Ts),k(!1),z(Td),N(n.CULL_FACE),H(Pi);function N(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ie(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ce(O,Te){return d[O]!==Te?(n.bindFramebuffer(O,Te),d[O]=Te,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Te),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function te(O,Te){let Re=h,Le=!1;if(O){Re=f.get(Te),Re===void 0&&(Re=[],f.set(Te,Re));let Me=O.textures;if(Re.length!==Me.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let me=0,ke=Me.length;me<ke;me++)Re[me]=n.COLOR_ATTACHMENT0+me;Re.length=Me.length,Le=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,Le=!0);Le&&n.drawBuffers(Re)}function _e(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Ue={[$i]:n.FUNC_ADD,[xm]:n.FUNC_SUBTRACT,[ym]:n.FUNC_REVERSE_SUBTRACT};Ue[_m]=n.MIN,Ue[vm]=n.MAX;let w={[Mm]:n.ZERO,[bm]:n.ONE,[Sm]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[Rm]:n.SRC_ALPHA_SATURATE,[Em]:n.DST_COLOR,[wm]:n.DST_ALPHA,[Tm]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[Cm]:n.ONE_MINUS_DST_COLOR,[Am]:n.ONE_MINUS_DST_ALPHA,[Pm]:n.CONSTANT_COLOR,[Im]:n.ONE_MINUS_CONSTANT_COLOR,[Lm]:n.CONSTANT_ALPHA,[Dm]:n.ONE_MINUS_CONSTANT_ALPHA};function H(O,Te,Re,Le,Me,me,ke,Ke,wt,ht){if(O===Pi){x===!0&&(ie(n.BLEND),x=!1);return}if(x===!1&&(N(n.BLEND),x=!0),O!==gm){if(O!==g||ht!==b){if((m!==$i||v!==$i)&&(n.blendEquation(n.FUNC_ADD),m=$i,v=$i),ht)switch(O){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hi:n.blendFunc(n.ONE,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ad:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,S=null,E=null,P=null,D.set(0,0,0),I=0,g=O,b=ht}return}Me=Me||Te,me=me||Re,ke=ke||Le,(Te!==m||Me!==v)&&(n.blendEquationSeparate(Ue[Te],Ue[Me]),m=Te,v=Me),(Re!==T||Le!==S||me!==E||ke!==P)&&(n.blendFuncSeparate(w[Re],w[Le],w[me],w[ke]),T=Re,S=Le,E=me,P=ke),(Ke.equals(D)===!1||wt!==I)&&(n.blendColor(Ke.r,Ke.g,Ke.b,wt),D.copy(Ke),I=wt),g=O,b=!1}function B(O,Te){O.side===Gt?ie(n.CULL_FACE):N(n.CULL_FACE);let Re=O.side===ln;Te&&(Re=!Re),k(Re),O.blending===Ss&&O.transparent===!1?H(Pi):H(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Le=O.stencilWrite;a.setTest(Le),Le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(O){_!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),_=O)}function z(O){O!==fm?(N(n.CULL_FACE),O!==C&&(O===Td?n.cullFace(n.BACK):O===pm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),C=O}function le(O){O!==F&&(q&&n.lineWidth(O),F=O)}function ne(O,Te,Re){O?(N(n.POLYGON_OFFSET_FILL),(G!==Te||Y!==Re)&&(n.polygonOffset(Te,Re),G=Te,Y=Re)):ie(n.POLYGON_OFFSET_FILL)}function de(O){O?N(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function De(O){O===void 0&&(O=n.TEXTURE0+Z-1),ee!==O&&(n.activeTexture(O),ee=O)}function Ne(O,Te,Re){Re===void 0&&(ee===null?Re=n.TEXTURE0+Z-1:Re=ee);let Le=he[Re];Le===void 0&&(Le={type:void 0,texture:void 0},he[Re]=Le),(Le.type!==O||Le.texture!==Te)&&(ee!==Re&&(n.activeTexture(Re),ee=Re),n.bindTexture(O,Te||U[O]),Le.type=O,Le.texture=Te)}function R(){let O=he[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){be.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),be.copy(O))}function ze(O){Ce.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ce.copy(O))}function ve(O,Te){let Re=c.get(Te);Re===void 0&&(Re=new WeakMap,c.set(Te,Re));let Le=Re.get(O);Le===void 0&&(Le=n.getUniformBlockIndex(Te,O.name),Re.set(O,Le))}function Ae(O,Te){let Le=c.get(Te).get(O);l.get(Te)!==Le&&(n.uniformBlockBinding(Te,Le,O.__bindingPointIndex),l.set(Te,Le))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,he={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,T=null,S=null,v=null,E=null,P=null,D=new Oe(0,0,0),I=0,b=!1,_=null,C=null,F=null,G=null,Y=null,be.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:ie,bindFramebuffer:ce,drawBuffers:te,useProgram:_e,setBlending:H,setMaterial:B,setFlipSided:k,setCullFace:z,setLineWidth:le,setPolygonOffset:ne,setScissorTest:de,activeTexture:De,bindTexture:Ne,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ye,texImage3D:ue,updateUBOMapping:ve,uniformBlockBinding:Ae,texStorage2D:fe,texStorage3D:xe,texSubImage2D:X,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:ge,scissor:we,viewport:ze,reset:Ge}}function fS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return h?new OffscreenCanvas(R,y):Er("canvas")}function x(R,y,L){let X=1,ae=Ne(R);if((ae.width>L||ae.height>L)&&(X=L/Math.max(ae.width,ae.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(X*ae.width),ge=Math.floor(X*ae.height);d===void 0&&(d=p(j,ge));let fe=y?p(j,ge):d;return fe.width=j,fe.height=ge,fe.getContext("2d").drawImage(R,0,0,j,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+ge+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,y,L,X,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(L===n.FLOAT&&(j=n.R32F),L===n.HALF_FLOAT&&(j=n.R16F),L===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.R8UI),L===n.UNSIGNED_SHORT&&(j=n.R16UI),L===n.UNSIGNED_INT&&(j=n.R32UI),L===n.BYTE&&(j=n.R8I),L===n.SHORT&&(j=n.R16I),L===n.INT&&(j=n.R32I)),y===n.RG&&(L===n.FLOAT&&(j=n.RG32F),L===n.HALF_FLOAT&&(j=n.RG16F),L===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RG8UI),L===n.UNSIGNED_SHORT&&(j=n.RG16UI),L===n.UNSIGNED_INT&&(j=n.RG32UI),L===n.BYTE&&(j=n.RG8I),L===n.SHORT&&(j=n.RG16I),L===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RGB8UI),L===n.UNSIGNED_SHORT&&(j=n.RGB16UI),L===n.UNSIGNED_INT&&(j=n.RGB32UI),L===n.BYTE&&(j=n.RGB8I),L===n.SHORT&&(j=n.RGB16I),L===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),L===n.UNSIGNED_INT&&(j=n.RGBA32UI),L===n.BYTE&&(j=n.RGBA8I),L===n.SHORT&&(j=n.RGBA16I),L===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){let ge=ae?Ho:lt.getTransfer(X);L===n.FLOAT&&(j=n.RGBA32F),L===n.HALF_FLOAT&&(j=n.RGBA16F),L===n.UNSIGNED_BYTE&&(j=ge===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,y){let L;return R?y===null||y===ts||y===qr?L=n.DEPTH24_STENCIL8:y===ni?L=n.DEPTH32F_STENCIL8:y===Xr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ts||y===qr?L=n.DEPTH_COMPONENT24:y===ni?L=n.DEPTH_COMPONENT32F:y===Xr&&(L=n.DEPTH_COMPONENT16),L}function E(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){let y=R.target;y.removeEventListener("dispose",P),I(y),y.isVideoTexture&&u.delete(y)}function D(R){let y=R.target;y.removeEventListener("dispose",D),_(y)}function I(R){let y=i.get(R);if(y.__webglInit===void 0)return;let L=R.source,X=f.get(L);if(X){let ae=X[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(R),Object.keys(X).length===0&&f.delete(L)}i.remove(R)}function b(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let L=R.source,X=f.get(L);delete X[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ae=0;ae<y.__webglFramebuffer[X].length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[X][ae]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=R.textures;for(let X=0,ae=L.length;X<ae;X++){let j=i.get(L[X]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(R)}let C=0;function F(){C=0}function G(){let R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function Y(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){let L=i.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(L,R,y);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function q(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){U(L,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function Q(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){U(L,R,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function V(R,y){let L=i.get(R);if(R.version>0&&L.__version!==R.version){N(L,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let ee={[li]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},he={[rn]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Ac]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},se={[qm]:n.NEVER,[$m]:n.ALWAYS,[Ym]:n.LESS,[Nd]:n.LEQUAL,[Zm]:n.EQUAL,[Km]:n.GEQUAL,[jm]:n.GREATER,[Jm]:n.NOTEQUAL};function pe(R,y){if(y.type===ni&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Ac||y.magFilter===Ta||y.magFilter===An||y.minFilter===on||y.minFilter===Ac||y.minFilter===Ta||y.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ee[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Ta&&y.minFilter!==An||y.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function be(R,y){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));let X=y.source,ae=f.get(X);ae===void 0&&(ae={},f.set(X,ae));let j=Y(y);if(j!==R.__cacheKey){ae[j]===void 0&&(ae[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ae[j].usedTimes++;let ge=ae[R.__cacheKey];ge!==void 0&&(ae[R.__cacheKey].usedTimes--,ge.usedTimes===0&&b(y)),R.__cacheKey=j,R.__webglTexture=ae[j].texture}return L}function Ce(R,y,L){return Math.floor(Math.floor(R/L)/y)}function $(R,y,L,X){let j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,X,y.data);else{j.sort((ue,we)=>ue.start-we.start);let ge=0;for(let ue=1;ue<j.length;ue++){let we=j[ge],ze=j[ue],ve=we.start+we.count,Ae=Ce(ze.start,y.width,4),Ge=Ce(we.start,y.width,4);ze.start<=ve+1&&Ae===Ge&&Ce(ze.start+ze.count-1,y.width,4)===Ae?we.count=Math.max(we.count,ze.start+ze.count-we.start):(++ge,j[ge]=ze)}j.length=ge+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,we=j.length;ue<we;ue++){let ze=j[ue],ve=Math.floor(ze.start/4),Ae=Math.ceil(ze.count/4),Ge=ve%y.width,O=Math.floor(ve/y.width),Te=Ae,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ge,O,Te,Re,L,X,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function U(R,y,L){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);let ae=be(R,y),j=y.source;t.bindTexture(X,R.__webglTexture,n.TEXTURE0+L);let ge=i.get(j);if(j.version!==ge.__version||ae===!0){t.activeTexture(n.TEXTURE0+L);let fe=lt.getPrimaries(lt.workingColorSpace),xe=y.colorSpace===Li?null:lt.getPrimaries(y.colorSpace),ye=y.colorSpace===Li||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ue=x(y.image,!1,s.maxTextureSize);ue=De(y,ue);let we=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),ve=S(y.internalFormat,we,ze,y.colorSpace,y.isVideoTexture);pe(X,y);let Ae,Ge=y.mipmaps,O=y.isVideoTexture!==!0,Te=ge.__version===void 0||ae===!0,Re=j.dataReady,Le=E(y,ue);if(y.isDepthTexture)ve=v(y.format===Yr,y.type),Te&&(O?t.texStorage2D(n.TEXTURE_2D,1,ve,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ve,ue.width,ue.height,0,we,ze,null));else if(y.isDataTexture)if(Ge.length>0){O&&Te&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Ge[0].width,Ge[0].height);for(let Me=0,me=Ge.length;Me<me;Me++)Ae=Ge[Me],O?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,Me,ve,Ae.width,Ae.height,0,we,ze,Ae.data);y.generateMipmaps=!1}else O?(Te&&t.texStorage2D(n.TEXTURE_2D,Le,ve,ue.width,ue.height),Re&&$(y,ue,we,ze)):t.texImage2D(n.TEXTURE_2D,0,ve,ue.width,ue.height,0,we,ze,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ve,Ge[0].width,Ge[0].height,ue.depth);for(let Me=0,me=Ge.length;Me<me;Me++)if(Ae=Ge[Me],y.format!==En)if(we!==null)if(O){if(Re)if(y.layerUpdates.size>0){let ke=Hd(Ae.width,Ae.height,y.format,y.type);for(let Ke of y.layerUpdates){let wt=Ae.data.subarray(Ke*ke/Ae.data.BYTES_PER_ELEMENT,(Ke+1)*ke/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Ke,Ae.width,Ae.height,1,we,wt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,ue.depth,we,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,ve,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,ue.depth,we,ze,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,ve,Ae.width,Ae.height,ue.depth,0,we,ze,Ae.data)}else{O&&Te&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Ge[0].width,Ge[0].height);for(let Me=0,me=Ge.length;Me<me;Me++)Ae=Ge[Me],y.format!==En?we!==null?O?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,Me,ve,Ae.width,Ae.height,0,we,ze,Ae.data)}else if(y.isDataArrayTexture)if(O){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ve,ue.width,ue.height,ue.depth),Re)if(y.layerUpdates.size>0){let Me=Hd(ue.width,ue.height,y.format,y.type);for(let me of y.layerUpdates){let ke=ue.data.subarray(me*Me/ue.data.BYTES_PER_ELEMENT,(me+1)*Me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ue.width,ue.height,1,we,ze,ke)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,ze,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,ue.width,ue.height,ue.depth,0,we,ze,ue.data);else if(y.isData3DTexture)O?(Te&&t.texStorage3D(n.TEXTURE_3D,Le,ve,ue.width,ue.height,ue.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ve,ue.width,ue.height,ue.depth,0,we,ze,ue.data);else if(y.isFramebufferTexture){if(Te)if(O)t.texStorage2D(n.TEXTURE_2D,Le,ve,ue.width,ue.height);else{let Me=ue.width,me=ue.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,ve,Me,me,0,we,ze,null),Me>>=1,me>>=1}}else if(Ge.length>0){if(O&&Te){let Me=Ne(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Le,ve,Me.width,Me.height)}for(let Me=0,me=Ge.length;Me<me;Me++)Ae=Ge[Me],O?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,we,ze,Ae):t.texImage2D(n.TEXTURE_2D,Me,ve,we,ze,Ae);y.generateMipmaps=!1}else if(O){if(Te){let Me=Ne(ue);t.texStorage2D(n.TEXTURE_2D,Le,ve,Me.width,Me.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,ze,ue)}else t.texImage2D(n.TEXTURE_2D,0,ve,we,ze,ue);g(y)&&m(X),ge.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function N(R,y,L){if(y.image.length!==6)return;let X=be(R,y),ae=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+L);let j=i.get(ae);if(ae.version!==j.__version||X===!0){t.activeTexture(n.TEXTURE0+L);let ge=lt.getPrimaries(lt.workingColorSpace),fe=y.colorSpace===Li?null:lt.getPrimaries(y.colorSpace),xe=y.colorSpace===Li||ge===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,we=[];for(let me=0;me<6;me++)!ye&&!ue?we[me]=x(y.image[me],!0,s.maxCubemapSize):we[me]=ue?y.image[me].image:y.image[me],we[me]=De(y,we[me]);let ze=we[0],ve=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type),Ge=S(y.internalFormat,ve,Ae,y.colorSpace),O=y.isVideoTexture!==!0,Te=j.__version===void 0||X===!0,Re=ae.dataReady,Le=E(y,ze);pe(n.TEXTURE_CUBE_MAP,y);let Me;if(ye){O&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ge,ze.width,ze.height);for(let me=0;me<6;me++){Me=we[me].mipmaps;for(let ke=0;ke<Me.length;ke++){let Ke=Me[ke];y.format!==En?ve!==null?O?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Ke.width,Ke.height,ve,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,Ge,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Ke.width,Ke.height,ve,Ae,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,Ge,Ke.width,Ke.height,0,ve,Ae,Ke.data)}}}else{if(Me=y.mipmaps,O&&Te){Me.length>0&&Le++;let me=Ne(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ge,me.width,me.height)}for(let me=0;me<6;me++)if(ue){O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,we[me].width,we[me].height,ve,Ae,we[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ge,we[me].width,we[me].height,0,ve,Ae,we[me].data);for(let ke=0;ke<Me.length;ke++){let wt=Me[ke].image[me].image;O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,wt.width,wt.height,ve,Ae,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,Ge,wt.width,wt.height,0,ve,Ae,wt.data)}}else{O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ve,Ae,we[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ge,ve,Ae,we[me]);for(let ke=0;ke<Me.length;ke++){let Ke=Me[ke];O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,ve,Ae,Ke.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,Ge,ve,Ae,Ke.image[me])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),j.__version=ae.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ie(R,y,L,X,ae,j){let ge=r.convert(L.format,L.colorSpace),fe=r.convert(L.type),xe=S(L.internalFormat,ge,fe,L.colorSpace),ye=i.get(y),ue=i.get(L);if(ue.__renderTarget=y,!ye.__hasExternalTextures){let we=Math.max(1,y.width>>j),ze=Math.max(1,y.height>>j);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,xe,we,ze,y.depth,0,ge,fe,null):t.texImage2D(ae,j,xe,we,ze,0,ge,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ae,ue.__webglTexture,0,le(y)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ae,ue.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(R,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let X=y.depthTexture,ae=X&&X.isDepthTexture?X.type:null,j=v(y.stencilBuffer,ae),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=le(y);ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,R)}else{let X=y.textures;for(let ae=0;ae<X.length;ae++){let j=X[ae],ge=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),xe=S(j.internalFormat,ge,fe,j.colorSpace),ye=le(y);L&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,xe,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let ae=X.__webglTexture,j=le(y);if(y.depthTexture.format===wr)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===Yr)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function _e(R){let y=i.get(R),L=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ae)};X.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let X=R.texture.mipmaps;X&&X.length>0?te(y.__webglFramebuffer[0],R):te(y.__webglFramebuffer,R)}else if(L){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),ce(y.__webglDepthbuffer[X],R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ce(y.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,y,L){let X=i.get(R);y!==void 0&&ie(X.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&_e(R)}function w(R){let y=R.texture,L=i.get(R),X=i.get(y);R.addEventListener("dispose",D);let ae=R.textures,j=R.isWebGLCubeRenderTarget===!0,ge=ae.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,o.memory.textures++),j){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)L.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else L.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)L.__webglFramebuffer[fe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ge)for(let fe=0,xe=ae.length;fe<xe;fe++){let ye=i.get(ae[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let xe=ae[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);let ye=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),we=S(xe.internalFormat,ye,ue,xe.colorSpace,R.isXRRenderTarget===!0),ze=le(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,we,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(L.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),pe(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ie(L.__webglFramebuffer[fe][xe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ie(L.__webglFramebuffer[fe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let fe=0,xe=ae.length;fe<xe;fe++){let ye=ae[fe],ue=i.get(ye),we=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ue.__webglTexture),pe(we,ye),ie(L.__webglFramebuffer,R,ye,n.COLOR_ATTACHMENT0+fe,we,0),g(ye)&&m(we)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),pe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ie(L.__webglFramebuffer[xe],R,y,n.COLOR_ATTACHMENT0,fe,xe);else ie(L.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,fe,0);g(y)&&m(fe),t.unbindTexture()}R.depthBuffer&&_e(R)}function H(R){let y=R.textures;for(let L=0,X=y.length;L<X;L++){let ae=y[L];if(g(ae)){let j=T(R),ge=i.get(ae).__webglTexture;t.bindTexture(j,ge),m(j),t.unbindTexture()}}}let B=[],k=[];function z(R){if(R.samples>0){if(ne(R)===!1){let y=R.textures,L=R.width,X=R.height,ae=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),fe=y.length>1;if(fe)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let ue=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,ae,n.NEAREST),l===!0&&(B.length=0,k.length=0,B.push(n.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(B.push(j),k.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let ue=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function ne(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function De(R,y){let L=R.colorSpace,X=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==ws&&L!==Li&&(lt.getTransfer(L)===mt?(X!==En||ae!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=w,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ne}function pS(n,e){function t(i,s=Li){let r,o=lt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Id)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cd)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Ld)return n.ALPHA;if(i===Dd)return n.RGB;if(i===En)return n.RGBA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===Pc)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===Ud)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===wa||i===Aa||i===Ea||i===Ca)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uc||i===Nc||i===Fc||i===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===zc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oc||i===zc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===jc||i===Jc||i===Kc||i===$c||i===Qc||i===eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tu||i===nu||i===iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===tu)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===su||i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===su)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`,nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sf=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new nf,m={},T=t.getContextAttributes(),S=null,v=null,E=[],P=[],D=new Se,I=null,b=new Vt;b.viewport=new ot;let _=new Vt;_.viewport=new ot;let C=[b,_],F=new mc,G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let N=E[U];return N===void 0&&(N=new Lr,E[U]=N),N.getTargetRaySpace()},this.getControllerGrip=function(U){let N=E[U];return N===void 0&&(N=new Lr,E[U]=N),N.getGripSpace()},this.getHand=function(U){let N=E[U];return N===void 0&&(N=new Lr,E[U]=N),N.getHandSpace()};function Z(U){let N=P.indexOf(U.inputSource);if(N===-1)return;let ie=E[N];ie!==void 0&&(ie.update(U.inputSource,U.frame,c||o),ie.dispatchEvent({type:U.type,data:U.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let U=0;U<E.length;U++){let N=P[U];N!==null&&(P[U]=null,E[U].disconnect(N))}G=null,Y=null,g.reset();for(let U in m)delete m[U];e.setRenderTarget(S),h=null,f=null,d=null,s=null,v=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ce=null,te=null;T.depth&&(te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=T.stencil?Yr:wr,ce=T.stencil?qr:ts);let _e={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new wn(f.textureWidth,f.textureHeight,{format:En,type:On,depthTexture:new ea(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ie={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new wn(h.framebufferWidth,h.framebufferHeight,{format:En,type:On,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(U){for(let N=0;N<U.removed.length;N++){let ie=U.removed[N],ce=P.indexOf(ie);ce>=0&&(P[ce]=null,E[ce].disconnect(ie))}for(let N=0;N<U.added.length;N++){let ie=U.added[N],ce=P.indexOf(ie);if(ce===-1){for(let _e=0;_e<E.length;_e++)if(_e>=P.length){P.push(ie),ce=_e;break}else if(P[_e]===null){P[_e]=ie,ce=_e;break}if(ce===-1)break}let te=E[ce];te&&te.connect(ie)}}let V=new M,ee=new M;function he(U,N,ie){V.setFromMatrixPosition(N.matrixWorld),ee.setFromMatrixPosition(ie.matrixWorld);let ce=V.distanceTo(ee),te=N.projectionMatrix.elements,_e=ie.projectionMatrix.elements,Ue=te[14]/(te[10]-1),w=te[14]/(te[10]+1),H=(te[9]+1)/te[5],B=(te[9]-1)/te[5],k=(te[8]-1)/te[0],z=(_e[8]+1)/_e[0],le=Ue*k,ne=Ue*z,de=ce/(-k+z),De=de*-k;if(N.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(De),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),te[10]===-1)U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Ne=Ue+de,R=w+de,y=le-De,L=ne+(ce-De),X=H*w/R*Ne,ae=B*w/R*Ne;U.projectionMatrix.makePerspective(y,L,X,ae,Ne,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function se(U,N){N===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(N.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let N=U.near,ie=U.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),F.near=_.near=b.near=N,F.far=_.far=b.far=ie,(G!==F.near||Y!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,Y=F.far),F.layers.mask=U.layers.mask|6,b.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;let ce=U.parent,te=F.cameras;se(F,ce);for(let _e=0;_e<te.length;_e++)se(te[_e],ce);te.length===2?he(F,b,_):F.projectionMatrix.copy(b.projectionMatrix),pe(U,F,ce)};function pe(U,N,ie){ie===null?U.matrix.copy(N.matrixWorld):(U.matrix.copy(ie.matrixWorld),U.matrix.invert(),U.matrix.multiply(N.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ar*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(U){return m[U]};let be=null;function Ce(U,N){if(u=N.getViewerPose(c||o),p=N,u!==null){let ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ce=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,ce=!0);for(let w=0;w<ie.length;w++){let H=ie[w],B=null;if(h!==null)B=h.getViewport(H);else{let z=d.getViewSubImage(f,H);B=z.viewport,w===0&&(e.setRenderTargetTextures(v,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(v))}let k=C[w];k===void 0&&(k=new Vt,k.layers.enable(w),k.viewport=new ot,C[w]=k),k.matrix.fromArray(H.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(H.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(B.x,B.y,B.width,B.height),w===0&&(F.matrix.copy(k.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ce===!0&&F.cameras.push(k)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let w=d.getDepthInformation(ie[0]);w&&w.isValid&&w.texture&&g.init(w,s.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let w=0;w<ie.length;w++){let H=ie[w].camera;if(H){let B=m[H];B||(B=new ta,m[H]=B);let k=d.getCameraImage(H);B.sourceTexture=k}}}}for(let ie=0;ie<E.length;ie++){let ce=P[ie],te=E[ie];ce!==null&&te!==void 0&&te.update(ce,N,c||o)}be&&be(U,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),p=null}let $=new Ig;$.setAnimationLoop(Ce),this.setAnimationLoop=function(U){be=U},this.dispose=function(){}}},Bs=new an,xS=new at;function yS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,zd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,T,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,T,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let T=e.get(m),S=T.envMap,v=T.envMapRotation;S&&(g.envMap.value=S,Bs.copy(v),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),g.envMapRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Bs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,T,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _S(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let v=S.program;i.uniformBlockBinding(T,v)}function c(T,S){let v=s[T.id];v===void 0&&(p(T),v=u(T),s[T.id]=v,T.addEventListener("dispose",g));let E=S.program;i.updateUBOMapping(T,E);let P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){let S=d();T.__bindingPointIndex=S;let v=n.createBuffer(),E=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let S=s[T.id],v=T.uniforms,E=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,D=v.length;P<D;P++){let I=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,_=I.length;b<_;b++){let C=I[b];if(h(C,P,b,E)===!0){let F=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let Z=0;Z<G.length;Z++){let q=G[Z],Q=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,F+Y,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,S,v,E){let P=T.value,D=S+"_"+v;if(E[D]===void 0)return typeof P=="number"||typeof P=="boolean"?E[D]=P:E[D]=P.clone(),!0;{let I=E[D];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return E[D]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function p(T){let S=T.uniforms,v=0,E=16;for(let D=0,I=S.length;D<I;D++){let b=Array.isArray(S[D])?S[D]:[S[D]];for(let _=0,C=b.length;_<C;_++){let F=b[_],G=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,Z=G.length;Y<Z;Y++){let q=G[Y],Q=x(q),V=v%E,ee=V%Q.boundary,he=V+ee;v+=ee,he!==0&&E-he<Q.storage&&(v+=E-he),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Q.storage}}}let P=v%E;return P>0&&(v+=E-P),T.__size=v,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){let S=T.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var fu=class{constructor(e={}){let{canvas:t=Qm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=pt;let P=0,D=0,I=null,b=-1,_=null,C=new ot,F=new ot,G=null,Y=new Oe(0),Z=0,q=t.width,Q=t.height,V=1,ee=null,he=null,se=new ot(0,0,q,Q),pe=new ot(0,0,q,Q),be=!1,Ce=new Fr,$=!1,U=!1,N=new at,ie=new M,ce=new ot,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Ue(){return I===null?V:1}let w=i;function H(A,J){return t.getContext(A,J)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Me,!1),w===null){let J="webgl2";if(w=H(J,A),w===null)throw H(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let B,k,z,le,ne,de,De,Ne,R,y,L,X,ae,j,ge,fe,xe,ye,ue,we,ze,ve,Ae,Ge;function O(){B=new B1(w),B.init(),ve=new pS(w,B),k=new P1(w,B,e,ve),z=new dS(w,B),k.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),le=new V1(w),ne=new Qb,de=new fS(w,B,z,ne,k,ve,le),De=new L1(v),Ne=new F1(v),R=new q_(w),Ae=new C1(w,R),y=new O1(w,R,le,Ae),L=new G1(w,y,R,le),ue=new k1(w,k,de),fe=new I1(ne),X=new $b(v,De,Ne,B,k,Ae,fe),ae=new yS(v,ne),j=new tS,ge=new aS(B),ye=new E1(v,De,Ne,z,L,h,l),xe=new uS(v,L,k),Ge=new _S(w,le,k,z),we=new R1(w,B,le),ze=new z1(w,B,le),le.programs=X.programs,v.capabilities=k,v.extensions=B,v.properties=ne,v.renderLists=j,v.shadowMap=xe,v.state=z,v.info=le}O();let Te=new sf(v,w);this.xr=Te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let A=B.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=B.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(q,Q,!1))},this.getSize=function(A){return A.set(q,Q)},this.setSize=function(A,J,re=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,Q=J,t.width=Math.floor(A*V),t.height=Math.floor(J*V),re===!0&&(t.style.width=A+"px",t.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(q*V,Q*V).floor()},this.setDrawingBufferSize=function(A,J,re){q=A,Q=J,V=re,t.width=Math.floor(A*re),t.height=Math.floor(J*re),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,J,re,oe){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,J,re,oe),z.viewport(C.copy(se).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,J,re,oe){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,J,re,oe),z.scissor(F.copy(pe).multiplyScalar(V).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){z.setScissorTest(be=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,re=!0){let oe=0;if(A){let K=!1;if(I!==null){let Ee=I.texture.format;K=Ee===Dc||Ee===Lc||Ee===Ic}if(K){let Ee=I.texture.type,Ie=Ee===On||Ee===ts||Ee===Xr||Ee===qr||Ee===Cc||Ee===Rc,Ve=ye.getClearColor(),Fe=ye.getClearAlpha(),Ye=Ve.r,Ze=Ve.g,We=Ve.b;Ie?(p[0]=Ye,p[1]=Ze,p[2]=We,p[3]=Fe,w.clearBufferuiv(w.COLOR,0,p)):(x[0]=Ye,x[1]=Ze,x[2]=We,x[3]=Fe,w.clearBufferiv(w.COLOR,0,x))}else oe|=w.COLOR_BUFFER_BIT}J&&(oe|=w.DEPTH_BUFFER_BIT),re&&(oe|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ye.dispose(),j.dispose(),ge.dispose(),ne.dispose(),De.dispose(),Ne.dispose(),L.dispose(),Ae.dispose(),Ge.dispose(),X.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ri),Te.removeEventListener("sessionend",Ep),gs.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=le.autoReset,J=xe.enabled,re=xe.autoUpdate,oe=xe.needsUpdate,K=xe.type;O(),le.autoReset=A,xe.enabled=J,xe.autoUpdate=re,xe.needsUpdate=oe,xe.type=K}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){let J=A.target;J.removeEventListener("dispose",me),ke(J)}function ke(A){Ke(A),ne.remove(A)}function Ke(A){let J=ne.get(A).programs;J!==void 0&&(J.forEach(function(re){X.releaseProgram(re)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,re,oe,K,Ee){J===null&&(J=te);let Ie=K.isMesh&&K.matrixWorld.determinant()<0,Ve=fy(A,J,re,oe,K);z.setMaterial(oe,Ie);let Fe=re.index,Ye=1;if(oe.wireframe===!0){if(Fe=y.getWireframeAttribute(re),Fe===void 0)return;Ye=2}let Ze=re.drawRange,We=re.attributes.position,rt=Ze.start*Ye,yt=(Ze.start+Ze.count)*Ye;Ee!==null&&(rt=Math.max(rt,Ee.start*Ye),yt=Math.min(yt,(Ee.start+Ee.count)*Ye)),Fe!==null?(rt=Math.max(rt,0),yt=Math.min(yt,Fe.count)):We!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,We.count));let zt=yt-rt;if(zt<0||zt===1/0)return;Ae.setup(K,oe,Ve,re,Fe);let Et,Mt=we;if(Fe!==null&&(Et=R.get(Fe),Mt=ze,Mt.setIndex(Et)),K.isMesh)oe.wireframe===!0?(z.setLineWidth(oe.wireframeLinewidth*Ue()),Mt.setMode(w.LINES)):Mt.setMode(w.TRIANGLES);else if(K.isLine){let Xe=oe.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*Ue()),K.isLineSegments?Mt.setMode(w.LINES):K.isLineLoop?Mt.setMode(w.LINE_LOOP):Mt.setMode(w.LINE_STRIP)}else K.isPoints?Mt.setMode(w.POINTS):K.isSprite&&Mt.setMode(w.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Xe=K._multiDrawStarts,Ut=K._multiDrawCounts,ct=K._multiDrawCount,Ln=Fe?R.get(Fe).bytesPerElement:1,ir=ne.get(oe).currentProgram.getUniforms();for(let Dn=0;Dn<ct;Dn++)ir.setValue(w,"_gl_DrawID",Dn),Mt.render(Xe[Dn]/Ln,Ut[Dn])}else if(K.isInstancedMesh)Mt.renderInstances(rt,zt,K.count);else if(re.isInstancedBufferGeometry){let Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ut=Math.min(re.instanceCount,Xe);Mt.renderInstances(rt,zt,Ut)}else Mt.render(rt,zt)};function wt(A,J,re){A.transparent===!0&&A.side===Gt&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,al(A,J,re),A.side=Qn,A.needsUpdate=!0,al(A,J,re),A.side=Gt):al(A,J,re)}this.compile=function(A,J,re=null){re===null&&(re=A),m=ge.get(re),m.init(J),S.push(m),re.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),A!==re&&A.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let oe=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){let Ve=Ee[Ie];wt(Ve,re,K),oe.add(Ve)}else wt(Ee,re,K),oe.add(Ee)}),m=S.pop(),oe},this.compileAsync=function(A,J,re=null){let oe=this.compile(A,J,re);return new Promise(K=>{function Ee(){if(oe.forEach(function(Ie){ne.get(Ie).currentProgram.isReady()&&oe.delete(Ie)}),oe.size===0){K(A);return}setTimeout(Ee,10)}B.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ht=null;function _i(A){ht&&ht(A)}function ri(){gs.stop()}function Ep(){gs.start()}let gs=new Ig;gs.setAnimationLoop(_i),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(A){ht=A,Te.setAnimationLoop(A),A===null?gs.stop():gs.start()},Te.addEventListener("sessionstart",ri),Te.addEventListener("sessionend",Ep),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(J),J=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,J,I),m=ge.get(A,S.length),m.init(J),S.push(m),N.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Ce.setFromProjectionMatrix(N,$n,J.reversedDepth),U=this.localClippingEnabled,$=fe.init(this.clippingPlanes,U),g=j.get(A,T.length),g.init(),T.push(g),Te.enabled===!0&&Te.isPresenting===!0){let Ee=v.xr.getDepthSensingMesh();Ee!==null&&Nh(Ee,J,-1/0,v.sortObjects)}Nh(A,J,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,he),_e=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,_e&&ye.addToRenderList(g,A),this.info.render.frame++,$===!0&&fe.beginShadows();let re=m.state.shadowsArray;xe.render(re,A,J),$===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=g.opaque,K=g.transmissive;if(m.setupLights(),J.isArrayCamera){let Ee=J.cameras;if(K.length>0)for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){let Fe=Ee[Ie];Rp(oe,K,A,Fe)}_e&&ye.render(A);for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){let Fe=Ee[Ie];Cp(g,A,Fe,Fe.viewport)}}else K.length>0&&Rp(oe,K,A,J),_e&&ye.render(A),Cp(g,A,J);I!==null&&D===0&&(de.updateMultisampleRenderTarget(I),de.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,J),Ae.resetDefaultState(),b=-1,_=null,S.pop(),S.length>0?(m=S[S.length-1],$===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Nh(A,J,re,oe){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){oe&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);let Ie=L.update(A),Ve=A.material;Ve.visible&&g.push(A,Ie,Ve,re,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){let Ie=L.update(A),Ve=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ve)){let Fe=Ie.groups;for(let Ye=0,Ze=Fe.length;Ye<Ze;Ye++){let We=Fe[Ye],rt=Ve[We.materialIndex];rt&&rt.visible&&g.push(A,Ie,rt,re,ce.z,We)}}else Ve.visible&&g.push(A,Ie,Ve,re,ce.z,null)}}let Ee=A.children;for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++)Nh(Ee[Ie],J,re,oe)}function Cp(A,J,re,oe){let K=A.opaque,Ee=A.transmissive,Ie=A.transparent;m.setupLightsView(re),$===!0&&fe.setGlobalState(v.clippingPlanes,re),oe&&z.viewport(C.copy(oe)),K.length>0&&ol(K,J,re),Ee.length>0&&ol(Ee,J,re),Ie.length>0&&ol(Ie,J,re),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Rp(A,J,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[oe.id]===void 0&&(m.state.transmissionRenderTarget[oe.id]=new wn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?di:On,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let Ee=m.state.transmissionRenderTarget[oe.id],Ie=oe.viewport||C;Ee.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),Fe=v.getActiveCubeFace(),Ye=v.getActiveMipmapLevel();v.setRenderTarget(Ee),v.getClearColor(Y),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),_e&&ye.render(re);let Ze=v.toneMapping;v.toneMapping=Ii;let We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),m.setupLightsView(oe),$===!0&&fe.setGlobalState(v.clippingPlanes,oe),ol(A,re,oe),de.updateMultisampleRenderTarget(Ee),de.updateRenderTargetMipmap(Ee),B.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let yt=0,zt=J.length;yt<zt;yt++){let Et=J[yt],Mt=Et.object,Xe=Et.geometry,Ut=Et.material,ct=Et.group;if(Ut.side===Gt&&Mt.layers.test(oe.layers)){let Ln=Ut.side;Ut.side=ln,Ut.needsUpdate=!0,Pp(Mt,re,oe,Xe,Ut,ct),Ut.side=Ln,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(de.updateMultisampleRenderTarget(Ee),de.updateRenderTargetMipmap(Ee))}v.setRenderTarget(Ve,Fe,Ye),v.setClearColor(Y,Z),We!==void 0&&(oe.viewport=We),v.toneMapping=Ze}function ol(A,J,re){let oe=J.isScene===!0?J.overrideMaterial:null;for(let K=0,Ee=A.length;K<Ee;K++){let Ie=A[K],Ve=Ie.object,Fe=Ie.geometry,Ye=Ie.group,Ze=Ie.material;Ze.allowOverride===!0&&oe!==null&&(Ze=oe),Ve.layers.test(re.layers)&&Pp(Ve,J,re,Fe,Ze,Ye)}}function Pp(A,J,re,oe,K,Ee){A.onBeforeRender(v,J,re,oe,K,Ee),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(v,J,re,oe,A,Ee),K.transparent===!0&&K.side===Gt&&K.forceSinglePass===!1?(K.side=ln,K.needsUpdate=!0,v.renderBufferDirect(re,J,oe,K,A,Ee),K.side=Qn,K.needsUpdate=!0,v.renderBufferDirect(re,J,oe,K,A,Ee),K.side=Gt):v.renderBufferDirect(re,J,oe,K,A,Ee),A.onAfterRender(v,J,re,oe,K,Ee)}function al(A,J,re){J.isScene!==!0&&(J=te);let oe=ne.get(A),K=m.state.lights,Ee=m.state.shadowsArray,Ie=K.state.version,Ve=X.getParameters(A,K.state,Ee,J,re),Fe=X.getProgramCacheKey(Ve),Ye=oe.programs;oe.environment=A.isMeshStandardMaterial?J.environment:null,oe.fog=J.fog,oe.envMap=(A.isMeshStandardMaterial?Ne:De).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",me),Ye=new Map,oe.programs=Ye);let Ze=Ye.get(Fe);if(Ze!==void 0){if(oe.currentProgram===Ze&&oe.lightsStateVersion===Ie)return Lp(A,Ve),Ze}else Ve.uniforms=X.getUniforms(A),A.onBeforeCompile(Ve,v),Ze=X.acquireProgram(Ve,Fe),Ye.set(Fe,Ze),oe.uniforms=Ve.uniforms;let We=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=fe.uniform),Lp(A,Ve),oe.needsLights=my(A),oe.lightsStateVersion=Ie,oe.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=Ze,oe.uniformsList=null,Ze}function Ip(A){if(A.uniformsList===null){let J=A.currentProgram.getUniforms();A.uniformsList=Jr.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Lp(A,J){let re=ne.get(A);re.outputColorSpace=J.outputColorSpace,re.batching=J.batching,re.batchingColor=J.batchingColor,re.instancing=J.instancing,re.instancingColor=J.instancingColor,re.instancingMorph=J.instancingMorph,re.skinning=J.skinning,re.morphTargets=J.morphTargets,re.morphNormals=J.morphNormals,re.morphColors=J.morphColors,re.morphTargetsCount=J.morphTargetsCount,re.numClippingPlanes=J.numClippingPlanes,re.numIntersection=J.numClipIntersection,re.vertexAlphas=J.vertexAlphas,re.vertexTangents=J.vertexTangents,re.toneMapping=J.toneMapping}function fy(A,J,re,oe,K){J.isScene!==!0&&(J=te),de.resetTextureUnits();let Ee=J.fog,Ie=oe.isMeshStandardMaterial?J.environment:null,Ve=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ws,Fe=(oe.isMeshStandardMaterial?Ne:De).get(oe.envMap||Ie),Ye=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ze=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!re.morphAttributes.position,rt=!!re.morphAttributes.normal,yt=!!re.morphAttributes.color,zt=Ii;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(zt=v.toneMapping);let Et=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Mt=Et!==void 0?Et.length:0,Xe=ne.get(oe),Ut=m.state.lights;if($===!0&&(U===!0||A!==_)){let yn=A===_&&oe.id===b;fe.setState(oe,A,yn)}let ct=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ut.state.version||Xe.outputColorSpace!==Ve||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==Fe||oe.fog===!0&&Xe.fog!==Ee||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==Ze||Xe.morphTargets!==We||Xe.morphNormals!==rt||Xe.morphColors!==yt||Xe.toneMapping!==zt||Xe.morphTargetsCount!==Mt)&&(ct=!0):(ct=!0,Xe.__version=oe.version);let Ln=Xe.currentProgram;ct===!0&&(Ln=al(oe,J,K));let ir=!1,Dn=!1,wo=!1,Nt=Ln.getUniforms(),kn=Xe.uniforms;if(z.useProgram(Ln.program)&&(ir=!0,Dn=!0,wo=!0),oe.id!==b&&(b=oe.id,Dn=!0),ir||_!==A){z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(w,"projectionMatrix",A.projectionMatrix),Nt.setValue(w,"viewMatrix",A.matrixWorldInverse);let bn=Nt.map.cameraPosition;bn!==void 0&&bn.setValue(w,ie.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Nt.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Nt.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,Dn=!0,wo=!0)}if(K.isSkinnedMesh){Nt.setOptional(w,K,"bindMatrix"),Nt.setOptional(w,K,"bindMatrixInverse");let yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Nt.setValue(w,"boneTexture",yn.boneTexture,de))}K.isBatchedMesh&&(Nt.setOptional(w,K,"batchingTexture"),Nt.setValue(w,"batchingTexture",K._matricesTexture,de),Nt.setOptional(w,K,"batchingIdTexture"),Nt.setValue(w,"batchingIdTexture",K._indirectTexture,de),Nt.setOptional(w,K,"batchingColorTexture"),K._colorsTexture!==null&&Nt.setValue(w,"batchingColorTexture",K._colorsTexture,de));let Gn=re.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ue.update(K,re,Ln),(Dn||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Nt.setValue(w,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(kn.envMap.value=Fe,kn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&J.environment!==null&&(kn.envMapIntensity.value=J.environmentIntensity),Dn&&(Nt.setValue(w,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&py(kn,wo),Ee&&oe.fog===!0&&ae.refreshFogUniforms(kn,Ee),ae.refreshMaterialUniforms(kn,oe,V,Q,m.state.transmissionRenderTarget[A.id]),Jr.upload(w,Ip(Xe),kn,de)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Jr.upload(w,Ip(Xe),kn,de),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Nt.setValue(w,"center",K.center),Nt.setValue(w,"modelViewMatrix",K.modelViewMatrix),Nt.setValue(w,"normalMatrix",K.normalMatrix),Nt.setValue(w,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){let yn=oe.uniformsGroups;for(let bn=0,Fh=yn.length;bn<Fh;bn++){let xs=yn[bn];Ge.update(xs,Ln),Ge.bind(xs,Ln)}}return Ln}function py(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function my(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,J,re){let oe=ne.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=J,ne.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){let re=ne.get(A);re.__webglFramebuffer=J,re.__useDefaultFramebuffer=J===void 0};let gy=w.createFramebuffer();this.setRenderTarget=function(A,J=0,re=0){I=A,P=J,D=re;let oe=!0,K=null,Ee=!1,Ie=!1;if(A){let Fe=ne.get(A);if(Fe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(w.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Fe.__hasExternalTextures)de.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let We=A.depthTexture;if(Fe.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}let Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);let Ze=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[J])?K=Ze[J][re]:K=Ze[J],Ee=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?K=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?K=Ze[re]:K=Ze,C.copy(A.viewport),F.copy(A.scissor),G=A.scissorTest}else C.copy(se).multiplyScalar(V).floor(),F.copy(pe).multiplyScalar(V).floor(),G=be;if(re!==0&&(K=gy),z.bindFramebuffer(w.FRAMEBUFFER,K)&&oe&&z.drawBuffers(A,K),z.viewport(C),z.scissor(F),z.setScissorTest(G),Ee){let Fe=ne.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+J,Fe.__webglTexture,re)}else if(Ie){let Fe=J;for(let Ye=0;Ye<A.textures.length;Ye++){let Ze=ne.get(A.textures[Ye]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,re,Fe)}}else if(A!==null&&re!==0){let Fe=ne.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Fe.__webglTexture,re)}b=-1},this.readRenderTargetPixels=function(A,J,re,oe,K,Ee,Ie,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){z.bindFramebuffer(w.FRAMEBUFFER,Fe);try{let Ye=A.textures[Ve],Ze=Ye.format,We=Ye.type;if(!k.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-oe&&re>=0&&re<=A.height-K&&(A.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ve),w.readPixels(J,re,oe,K,ve.convert(Ze),ve.convert(We),Ee))}finally{let Ye=I!==null?ne.get(I).__webglFramebuffer:null;z.bindFramebuffer(w.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,J,re,oe,K,Ee,Ie,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(J>=0&&J<=A.width-oe&&re>=0&&re<=A.height-K){z.bindFramebuffer(w.FRAMEBUFFER,Fe);let Ye=A.textures[Ve],Ze=Ye.format,We=Ye.type;if(!k.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,rt),w.bufferData(w.PIXEL_PACK_BUFFER,Ee.byteLength,w.STREAM_READ),A.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ve),w.readPixels(J,re,oe,K,ve.convert(Ze),ve.convert(We),0);let yt=I!==null?ne.get(I).__webglFramebuffer:null;z.bindFramebuffer(w.FRAMEBUFFER,yt);let zt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await eg(w,zt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,rt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ee),w.deleteBuffer(rt),w.deleteSync(zt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,re=0){let oe=Math.pow(2,-re),K=Math.floor(A.image.width*oe),Ee=Math.floor(A.image.height*oe),Ie=J!==null?J.x:0,Ve=J!==null?J.y:0;de.setTexture2D(A,0),w.copyTexSubImage2D(w.TEXTURE_2D,re,0,0,Ie,Ve,K,Ee),z.unbindTexture()};let xy=w.createFramebuffer(),yy=w.createFramebuffer();this.copyTextureToTexture=function(A,J,re=null,oe=null,K=0,Ee=null){Ee===null&&(K!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=K,K=0):Ee=0);let Ie,Ve,Fe,Ye,Ze,We,rt,yt,zt,Et=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(re!==null)Ie=re.max.x-re.min.x,Ve=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,Ye=re.min.x,Ze=re.min.y,We=re.isBox3?re.min.z:0;else{let Gn=Math.pow(2,-K);Ie=Math.floor(Et.width*Gn),Ve=Math.floor(Et.height*Gn),A.isDataArrayTexture?Fe=Et.depth:A.isData3DTexture?Fe=Math.floor(Et.depth*Gn):Fe=1,Ye=0,Ze=0,We=0}oe!==null?(rt=oe.x,yt=oe.y,zt=oe.z):(rt=0,yt=0,zt=0);let Mt=ve.convert(J.format),Xe=ve.convert(J.type),Ut;J.isData3DTexture?(de.setTexture3D(J,0),Ut=w.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(de.setTexture2DArray(J,0),Ut=w.TEXTURE_2D_ARRAY):(de.setTexture2D(J,0),Ut=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,J.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,J.unpackAlignment);let ct=w.getParameter(w.UNPACK_ROW_LENGTH),Ln=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ir=w.getParameter(w.UNPACK_SKIP_PIXELS),Dn=w.getParameter(w.UNPACK_SKIP_ROWS),wo=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,We);let Nt=A.isDataArrayTexture||A.isData3DTexture,kn=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){let Gn=ne.get(A),yn=ne.get(J),bn=ne.get(Gn.__renderTarget),Fh=ne.get(yn.__renderTarget);z.bindFramebuffer(w.READ_FRAMEBUFFER,bn.__webglFramebuffer),z.bindFramebuffer(w.DRAW_FRAMEBUFFER,Fh.__webglFramebuffer);for(let xs=0;xs<Fe;xs++)Nt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,K,We+xs),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(J).__webglTexture,Ee,zt+xs)),w.blitFramebuffer(Ye,Ze,Ie,Ve,rt,yt,Ie,Ve,w.DEPTH_BUFFER_BIT,w.NEAREST);z.bindFramebuffer(w.READ_FRAMEBUFFER,null),z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||ne.has(A)){let Gn=ne.get(A),yn=ne.get(J);z.bindFramebuffer(w.READ_FRAMEBUFFER,xy),z.bindFramebuffer(w.DRAW_FRAMEBUFFER,yy);for(let bn=0;bn<Fe;bn++)Nt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gn.__webglTexture,K,We+bn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Gn.__webglTexture,K),kn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,yn.__webglTexture,Ee,zt+bn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,yn.__webglTexture,Ee),K!==0?w.blitFramebuffer(Ye,Ze,Ie,Ve,rt,yt,Ie,Ve,w.COLOR_BUFFER_BIT,w.NEAREST):kn?w.copyTexSubImage3D(Ut,Ee,rt,yt,zt+bn,Ye,Ze,Ie,Ve):w.copyTexSubImage2D(Ut,Ee,rt,yt,Ye,Ze,Ie,Ve);z.bindFramebuffer(w.READ_FRAMEBUFFER,null),z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else kn?A.isDataTexture||A.isData3DTexture?w.texSubImage3D(Ut,Ee,rt,yt,zt,Ie,Ve,Fe,Mt,Xe,Et.data):J.isCompressedArrayTexture?w.compressedTexSubImage3D(Ut,Ee,rt,yt,zt,Ie,Ve,Fe,Mt,Et.data):w.texSubImage3D(Ut,Ee,rt,yt,zt,Ie,Ve,Fe,Mt,Xe,Et):A.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ee,rt,yt,Ie,Ve,Mt,Xe,Et.data):A.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ee,rt,yt,Et.width,Et.height,Mt,Et.data):w.texSubImage2D(w.TEXTURE_2D,Ee,rt,yt,Ie,Ve,Mt,Xe,Et);w.pixelStorei(w.UNPACK_ROW_LENGTH,ct),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ln),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ir),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wo),Ee===0&&J.generateMipmaps&&w.generateMipmap(Ut),z.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){P=0,D=0,I=null,z.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Pa=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Vt;let i=this,s=t.color!==void 0?new Oe(t.color):new Oe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new M,f=new M,h=new M,p=new at,x=new M(0,0,-1),g=new ot,m=new M,T=new M,S=new ot,v=new at,E=this.camera,P=new wn(r,o,{samples:c,type:di}),D=new vn({name:l.name!==void 0?l.name:"unspecified",uniforms:cu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=P.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=v,this.material=D,this.onBeforeRender=function(I,b,_){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),T.subVectors(f,x),T.reflect(d).negate(),T.add(f),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(p),E.up.reflect(d),E.lookAt(T),E.far=_.far,E.updateMatrixWorld(),E.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(E.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=E.projectionMatrix;S.x=(Math.sign(g.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(g.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],g.multiplyScalar(2/g.dot(S)),F.elements[2]=g.x,F.elements[6]=g.y,F.elements[10]=g.z+1-a,F.elements[14]=g.w,i.visible=!1;let G=I.getRenderTarget(),Y=I.xr.enabled,Z=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(P),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(b,E),I.xr.enabled=Y,I.shadowMap.autoUpdate=Z,I.setRenderTarget(G);let q=_.viewport;q!==void 0&&I.state.viewport(q),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),i.material.dispose()}}};Pa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var mu=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function Bg(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function pn(n,e,t,i=0,s=0){return Bg(n,new kt(1,i),e,t,s)}function of(n,e,t,i=0){return Bg(n,new Ei(1),e,t,i)}function vS(n,e){let t=new it;return t.setAttribute("position",new He(e.flat(),3)),{tone:n,geometry:t}}function Fg(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return vS(n,i)}function MS(){let n=[pn("fur",[0,.012,.011],[.154,.161,.132],1),pn("fur",[0,-.065,.008],[.128,.079,.108]),pn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),pn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),Fg("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),pn("skin",[0,-.061,-.133],[.102,.066,.065],1),pn("skinShade",[0,-.097,-.14],[.076,.031,.047]),pn("skin",[0,.015,-.15],[.041,.056,.038]),pn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(pn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),pn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),of("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),pn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),pn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),pn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),pn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),pn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),pn("ink",[e*.047,.031,-.183],[.011,.012,.006]),of("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),of("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(Fg("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function bS(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new it;return s.setAttribute("position",new vt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var SS=bS(MS());function gu(n=0){let e=new qt({flatShading:!0}),t=new qt({flatShading:!0}),i=new qt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Oe("#212128"),ivory:new Oe("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=r[f];for(let T=h;T<p;T++)u.setXYZ(T,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<mu.length?u:0;if(d===o)return;o=d;let f=mu[o];for(let[h,p]of Object.entries(f))(r[h]??=new Oe).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),f=new vt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return s.push(h),a(h),new Be(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new _t;return u.add(c(SS)),u}}}var Ia=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],TS=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],wS=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],Og=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],xu=Ia.length-1,AS=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],ES=[-.57,.57,1,.61,-.61,-1],CS=[1,1,-.04,-.91,-.91,-.04];function yu(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(b=0,_=0,C=0){let F=r.length/3;return r.push(b*s,_,C),F}function c(b,_,C){i?o.push(b,C,_):o.push(b,_,C)}function u(b,_,C,F){c(b,_,C),c(b,C,F)}function d(b,_){for(let C=0;C<b.length;C++){let F=(C+1)%b.length;u(b[F],b[C],_[C],_[F])}}function f(b,_){for(let C=0;C<b.length;C++)c(_,b[(C+1)%b.length],b[C])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Ia.map(([b,_,C,F],G)=>{let Y=G===0||G===xu,Z=b*.67,q=-.024+(_+.024)*.69;return{top:l(b,C,_),middle:l(b*1.08,(C+F)/2,Y?_:-.025+(_+.025)*1.04),bottom:l(b,F,_),innerTop:l(Z,TS[G],q),innerBottom:l(Z,wS[G],q)}});function g(b){let _=x[b],C=x[(b+1)%x.length];return[_.top,C.top,C.middle,C.bottom,_.bottom,_.middle]}let m=new Set(Og.map(({edge:b})=>b));m.add(xu);for(let b=0;b<x.length;b++){let _=x[b],C=x[(b+1)%x.length];c(h,_.innerTop,C.innerTop),c(p,C.innerBottom,_.innerBottom),u(_.innerTop,_.top,C.top,C.innerTop),u(C.innerBottom,C.bottom,_.bottom,_.innerBottom),m.has(b)||(u(C.top,_.top,_.middle,C.middle),u(C.middle,_.middle,_.bottom,C.bottom))}let T=g(xu);t||f(T,l(0,0,Ia[xu][1]));let S=i?[T[1],T[0],T[5],T[4],T[3],T[2]]:T;for(let{edge:b,length:_,splay:C}of Og){let[F,G,Y,Z]=Ia[b],[q,Q,V,ee]=Ia[b+1],he=q-F,se=Q-G,pe=-se+he*C,be=he+se*C,Ce=Math.hypot(pe,be),$=Math.hypot(he,se)/2,U=(Y+V-Z-ee)/4,N=[],ie=g(b);for(let[te,_e,Ue]of AS){let w=[l(),l(),l(),l(),l(),l()];d(ie,w),N.push({ring:w,distance:te*_,width:_e*$,height:Ue*U}),ie=w}let ce=l();f(ie,ce),a.push({x:(F+q)/2,y:(Y+V+Z+ee)/4,z:(G+Q)/2,forwardX:pe/Ce,forwardZ:be/Ce,rows:N,tip:ce,length:_,pressure:-1})}let v=new it,E=new He(r,3).setUsage(Di);v.setAttribute("position",E),v.setIndex(o),v.boundingSphere=new ei(new M(0,-.018,-.052),.12),v.boundingBox=new nn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let P=!0;function D(b,_=!0){let C=!1;for(let F=0;F<a.length;F++){let G=a[F],Y=b?.[F],Z=Number.isFinite(Y)?qe.clamp(Y,0,1):0;if(Z===G.pressure)continue;G.pressure=Z,C=!0;let{forwardX:q,forwardZ:Q,length:V,rows:ee,tip:he}=G,se=G.x,pe=G.z,be=G.y,Ce=0,$=0;for(let{ring:ie,distance:ce,width:te,height:_e}of ee){let Ue=ce/V,w=qe.smoothstep(Ue,0,.57),H=qe.smoothstep(Ue,.38,1),B=(.17+Z*.83)*w+(.14+Z*.76)*H,k=(B+Ce)/2,z=ce-$,le=Math.cos(k)*z;se+=q*le,be-=Math.sin(k)*z,pe+=Q*le;for(let ne=0;ne<ie.length;ne++){let de=ES[ne]*te,De=CS[ne]*_e,Ne=De*Math.sin(B);E.setXYZ(ie[ne],s*(se+Q*de+q*Ne),be+De*Math.cos(B),pe-q*de+Q*Ne)}Ce=B,$=ce}let U=V-$,N=U*Math.cos(Ce);E.setXYZ(he,s*(se+q*N),be-U*Math.sin(Ce),pe+Q*N)}C&&(E.needsUpdate=!0,P=!0),_&&P&&(v.computeVertexNormals(),P=!1)}D(),v.getAttribute("normal").setUsage(Di);let I=new Be(v,e);return I.castShadow=!0,{mesh:I,pose:D,wristIndices:S}}var ns=12,af=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],RS=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],zg=af.flatMap(([n,e,t])=>Array.from({length:ns},(i,s)=>{let r=(s-.5)*Math.PI*2/ns;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function _u(n,e){let t=zg.length,i=[],s=(Q,V,ee,he,se)=>Q.push(V,ee,he,V,he,se);function r(Q,V,ee=!1){for(let he=1;he<V.length-1;he++)ee?Q.push(V[0],V[he+1],V[he]):Q.push(V[0],V[he],V[he+1])}let o=(Q,V)=>Q*ns+(V+ns)%ns;for(let Q=0;Q<af.length-1;Q++)for(let V=0;V<ns;V++)(Q===2||Q===3)&&(V===0||V===6)||s(i,o(Q,V),o(Q+1,V),o(Q+1,V+1),o(Q,V+1));r(i,Array.from({length:ns},(Q,V)=>o(0,V))),r(i,Array.from({length:ns},(Q,V)=>o(af.length-1,V)),!0);let a=t,l=e.map(({geometry:Q,wristIndices:V},ee)=>{let he=ee===0?6:0,se=[o(4,he),o(4,he+1),o(3,he+1),o(2,he+1),o(2,he),o(3,he)],pe=[se,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],be=pe.at(-1),Ce=new Array(Q.attributes.position.count);V.forEach((N,ie)=>{Ce[N]=be[ie]});for(let N=0;N<Ce.length;N++)Ce[N]??=a++;let $=[];for(let N=0;N<Q.index.count;N++)$.push(Ce[Q.index.getX(N)]);for(let N=0;N<pe.length-1;N++)for(let ie=0;ie<6;ie++){let ce=(ie+1)%6;s(i,pe[N][ie],pe[N][ce],pe[N+1][ce],pe[N+1][ie])}let U=[];return r(U,be),{socket:se,rings:pe,wrist:be,wristIndices:V,remap:Ce,skin:$,cap:U,sign:ee===0?-1:1}}),c=new it,u=new He(a*3,3).setUsage(Di);c.setAttribute("position",u);let d=new Be(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(Q,V)=>new As([...i,...l.flatMap((ee,he)=>V&1<<he?ee.skin:ee.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,g=new M,m=new M,T=new M,S=new M,v=new M,E=new M,P=new Je,D=new Je,I=new Je,b=new M(0,0,-1),_=new Je().setFromEuler(new an(-1.42,0,0)),C=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],G=0,Y=0,Z=!0;function q(Q,V,ee,he,se){let pe=!!(Q[0]||Q[1]);if(!pe&&!Z&&G===ee&&Y===he)return;G=ee,Y=he,Z=pe;for(let Ce=0;Ce<t;Ce++){let[$,U,N]=zg[Ce];u.setXYZ(Ce,$*ee,U*he,N*ee)}let be=0;for(let Ce=0;Ce<l.length;Ce++){let $=l[Ce],U=Q[Ce],N=e[Ce].geometry.attributes.position,ie=!!U,ce=$.wristIndices;ie&&se&&(be|=1<<Ce),p.set(0,0,0);for(let te of $.socket)p.add(h.fromBufferAttribute(u,te));p.multiplyScalar(1/6),g.set(0,0,0);for(let te of ce)g.add(h.fromBufferAttribute(N,te));g.multiplyScalar(1/6).applyQuaternion(U?.quaternion??_),ie?g.add(U.position):g.add(h.set(p.x+$.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),T.copy(m).normalize(),S.set($.sign*.38,-1,.27).addScaledVector(T,-T.dot(h.set($.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),ie&&x.addScaledVector(S,Math.sqrt(Math.max(.007,V**2-m.lengthSq()*.25))*.72),P.setFromUnitVectors(b,T.subVectors(x,p).normalize()),D.copy(U?.quaternion??_);for(let te=0;te<4;te++){let _e=te===3;E.lerpVectors(_e?x:p,_e?g:x,C[te]),I.copy(P).slerp(D,_e?.79:te*.19);for(let Ue=0;Ue<6;Ue++){let w=RS[Ue],H=F[te];v.set(w[0]*H,w[1]*H*.84,0).applyQuaternion(I).add(E),u.setXYZ($.rings[te+1][Ue],v.x,v.y,v.z)}}for(let te=0;te<$.remap.length;te++)v.fromBufferAttribute(N,te).applyQuaternion(D),ie?v.add(U.position):v.add(h.set(p.x+$.sign*.026,p.y-.43,p.z-.015)),u.setXYZ($.remap[te],v.x,v.y,v.z)}c.index!==f[be]&&c.setIndex(f[be]),u.needsUpdate=!0,c.computeVertexNormals()}return q([null,null],.42,1,1,!1),{mesh:d,pose:q}}var Vg=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],PS=new M(0,1,0);function vu(n){let e=new _t,t=new It({color:"#2c4750",roughness:.43,metalness:.47}),i=new It({color:"#899fa3",roughness:.46,metalness:.57}),s=new bt({toneMapped:!1});function r(h,p,x,g,m,T=0){let S=new Be(h,p);return S.position.set(x,g,m),S.rotation.x=T,e.add(S),S}r(new Qe(.071,.059,.149),t,.038,.026,-.054),r(new Qe(.04,.072,.05),i,.038,-.028,-.014,-.29),r(new Xt(.019,.024,.064,8),i,.038,.025,-.137,Math.PI/2),r(new Xt(.015,.016,.008,8),s,.038,.025,-.173,Math.PI/2),r(new Qe(.041,.009,.047),s,.038,.059,-.067);let o=new Be(new Xt(.002,.003,1,5,1,!0),new bt({transparent:!0,opacity:.52,depthWrite:!1,blending:hi,toneMapped:!1})),a=new Be(new kt(.012,0),new bt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(Vg[h-1]??Vg[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(PS,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var IS="wss://clouddata.turbowarp.org",LS="itssoren.github.io/VR/gorilla-lab/",lf={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},bu=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),DS=new Map([[lf.vr,"vr"],[lf.pc,"pc"],...bu.map(n=>[n,"player"])]),cf=53,Mu=4400,Gg=64e3,Yt=(n,e)=>Math.round(n).toString().padStart(e,"0");function La(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Vs(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function US({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Yt(e,7)+a.map(c=>Yt(c*100+2e4,5)).join("")+Yt(Math.round(l*10)%3600,4)+Yt(o,6)}function NS(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function Hg({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},Socket:s=globalThis.WebSocket,now:r=Date.now,monotonicNow:o=r===Date.now?()=>performance.now():r,random:a=Math.random}={}){let l=new Map,c=o(),u=r(),d=null,f=null,h="",p=0,x="",g=-1/0,m=null,T=0,S=0,v=1/0,E=0,P="offline",D=!1,I=-1,b=0,_=[],C=1/0;function F(U,N){P=U,n(N)}function G(){return"Salon "+h+" \xB7 "+(f==="vr"?"en attente de joueurs ou du spectateur":"en attente du joueur VR")}function Y(){return[...l.values()].map(U=>U.pose).filter(Boolean)}function Z(){let U=Y().filter(te=>f==="vr"?te.role!=="vr":te.role==="vr"),N=te=>Number(te.ready)*2+ +(te.role==="pc"),ie=U.find(te=>te.id===m?.id)??null,ce=U.reduce((te,_e)=>!te||N(_e)>N(te)?_e:te,ie);ce!==m&&(m=ce,e(m))}function q(U){for(let N of l.values())N.pose&&t(null,N.pose),N.pose=N.candidate=null;U&&l.clear(),Z()}function Q(){let U=d;if(d=null,U){U.onopen=U.onmessage=U.onerror=U.onclose=null;try{U.close()}catch{}}}function V(){Q(),f=null,h="",v=1/0,D=!1,I=-1,_=[],q(!0),F("offline","Hors ligne")}function ee(U){let N=Math.min(3e4,1500*2**Math.min(E++,5));v=o()+N,F("retry","TurboWarp d\xE9connect\xE9 ("+U+") \xB7 reconnexion automatique au salon "+h)}function he(U){let N=!1;for(let[ie,ce]of l)ce.pose&&U-ce.pose.arrival>Mu&&(t(null,ce.pose),ce.pose=null,N=!0),ce.candidate&&U-ce.candidate.arrival>Mu&&(ce.candidate=null),U-ce.lastArrival>6e4&&l.delete(ie);N&&Z()}function se(U,N,ie,ce){let te=WS(ie.value,null);if(!te||te.id===p)return;let _e=l.get(te.id);if(!_e){if(l.size>=64)return;_e={lastTime:-1/0,lastAction:0,lastArrival:ce,pose:null,candidate:null},l.set(te.id,_e)}if(te.time<=_e.lastTime)return;let Ue=_e.pose??_e.candidate;if(Ue&&te.time-Ue.time>Mu+ce-Ue.arrival){if(_e.pose)return;_e.candidate=null}_e.lastTime=te.time,_e.lastArrival=ce;let w={...te,ready:te.ready??!0,protocol:te.ready===void 0?3:4,role:U,channel:N,received:r(),arrival:ce},H=_e.candidate;if(!_e.pose&&(!H||H.channel!==N||H.map!==w.map||ce-H.arrival>Mu)&&(te.ready!==void 0||Math.abs(te.time-w.received)>25e3)){_e.candidate=w;return}if(_e.candidate=null,!_e.pose&&H?.objects&&H.ready&&H.map===w.map&&!w.objects&&(w.objects=H.objects),_e.pose=w,t(w),Z(),!(f!=="vr"||U!=="player"||!D||!w.ready||w.map!==I||te.actionTarget!==p))for(let{seq:B,action:k}of te.actions)B<=_e.lastAction||(_e.lastAction=B,i(k,w))}function pe(){let U;try{U=new s(IS)}catch{return!1}return d=U,S=o(),g=-1/0,F("connecting","Connexion \xE0 TurboWarp \xB7 salon "+h),U.onopen=()=>{d===U&&(T=o(),U.send(JSON.stringify({method:"handshake",project_id:LS+h,user:"player"+p})+`
`),F("open",G()))},U.onmessage=N=>{if(d!==U||typeof N.data!="string"||N.data.length>105e4)return;let ie=o();he(ie);for(let ce of N.data.split(`
`)){if(!ce.trim())continue;let te;try{te=JSON.parse(ce)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",ce.slice(0,200));continue}let _e=DS.get(te?.name);te?.method!=="set"||!_e||_e==="vr"&&f==="vr"||se(_e,te.name,te,ie)}},U.onerror=()=>{d===U&&F("connecting","Impossible de joindre TurboWarp \xB7 salon "+h)},U.onclose=N=>{if(d!==U)return;let ie=N.code;if(Q(),q(!1),_=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(ie)){ee(ie);return}f=null,h="";let ce={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[ie];F("error","TurboWarp d\xE9connect\xE9 ("+ie+")"+(ce?" \xB7 "+ce:N.reason?" \xB7 "+N.reason.slice(0,100):""))},!0}function be(U,N){let ie=La(U);return!/^[A-Z0-9]{5,12}$/.test(ie)||!["vr","pc","player"].includes(N)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):f===N&&h===ie?!0:f?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(q(!0),p=Math.floor(1e6+a()*8999999),f=N,h=ie,x=lf[f]??bu[p%bu.length],b=0,E=0,v=C=1/0,pe()?!0:(f=null,h="",F("error","WebSocket indisponible."),!1))}function Ce(U,N){if(f!=="player"||P!=="open"||!m?.ready||m.protocol<4||m.map!==N||!uf(U)||b>=99999999)return!1;let ie=o();return _=_.filter(ce=>ce.expires>=ie&&ce.target===m.id&&ce.map===N),_.length>=8?!1:(_.push({action:{...U},seq:++b,expires:ie+1800,target:m.id,map:N}),!0)}function $(U){let N=o();if(D=!!U&&U.ready!==!1,I=U?.map??-1,he(N),f&&!d&&N>=v&&(v=1/0,pe()||ee(1006)),d&&d.readyState===0&&N-S>1e4&&(Q(),ee(1006)),!U||!f||d?.readyState!==1||d.bufferedAmount>4096||N-T<350||N-g<100)return!1;if(f==="player"){let Ue=Y().filter(H=>H.role==="player"),w=Ue.find(H=>H.channel===x);if(w?C=Math.min(N,C):C=1/0,w&&(w.id<p||N-C>=800)){let H=bu.find(B=>!Ue.some(k=>k.channel===B));if(!H)return P!=="capacity"&&F("capacity","Salon "+h+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;x=H,C=1/0}}(E||P==="capacity")&&(E=0,F("open",G()));let ie=Math.round(u+N-c),ce=US({...U,time:ie,id:p});if(!ce)return!1;_=_.filter(Ue=>Ue.expires>=N&&Ue.target===m?.id&&Ue.map===U.map);let te=U.ready!==void 0||U.avatar?.tool||f==="player",_e=HS(ce,U.avatar,U.objectFeed?.(N),te?{ready:U.ready!==!1,actions:_,actionTarget:_[0]?.target??0}:null);return g=N,d.send(JSON.stringify({method:"set",name:x,value:_e})+`
`),!0}return{join:be,leave:V,tick:$,sendAction:Ce,get role(){return f},get code(){return h},get state(){return P},get remote(){return m},get peers(){return Y()}}}var FS=15,BS=12,Wg=44,Su=15,wu=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Yt(e*100+2e4,5)).join(""):null;function Tu(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var Au=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Yt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Eu(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function OS(n){let e=wu(n.mesh.position),t=Au(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>cf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Yt(i,5)+Yt(s,2)+r+o+Yt(a,8)+e+t}function zS(n){return Yt(n,5)+"99"+"0".repeat(Wg-7)}function VS(n){if(!n)return null;let e=Au(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&wu(l.position),u=l&&Au(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(FS+BS)}),s=Yt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Yt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Yt(n.coconuts??31,2)+Yt(n.color??0,2)+a}function uf(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;return e==="spawn"?Number.isInteger(t)&&t>=0&&t<=cf?"10"+Yt(t,5):null:!Number.isInteger(i)||i<1||i>=1e5?null:e==="tool"?Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Yt(i,5):null:e==="hold"||e==="release"?(e==="hold"?"30":"40")+Yt(i,5):null}function kS(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release"][e];if(!s)return null;let r=s==="spawn"?{type:s,typeId:i}:s==="tool"?{type:s,mode:t,objectId:i}:{type:s,objectId:i};return uf(r)===n?r:null}function GS(n){let e=wu(n?.position),t=Au(n?.quaternion),i=wu(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function HS(n,e,t,i=null){let s=VS(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:l,action:c})=>Yt(l,8)+uf(c)).join(""),a=n+"4"+Number(i.ready)+ +!!s+(s??"")+GS(s?e.tool:null)+Yt(i.actionTarget??0,7)+Yt(o.length/Su,1)+o;return a.length+1+r.length>Gg&&(t=null,r=""),a+(t?t.full?"2":"1":"0")+r}function kg(n,e,t){let i=Eu(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:Tu(n,a+1),quaternion:Eu(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function WS(n,e){if(typeof n!="string"||n.length>Gg||!/^[0-9]+$/.test(n))return null;let t=NS(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:Wg,r=i?125:133;if(n[46]==="4"){if(n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=kg(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Tu(n,a+2),f=Eu(n,a+17),h=Tu(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*Su+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=Su){let u=Number(n.slice(a,a+8)),d=kS(n.slice(a+8,a+Su));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=kg(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Tu(n,c+10),g=Eu(n,c+25);if(d>cf||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}function Xg(){let n=new Map,e=-1/0,t=-1/0;function i(s,r){if(s-e<200)return null;e=s;let o=s-t>=1600;o&&(t=s);let a=new Set,l=[];for(let c of r){if(!c.mesh.visible)continue;let u=OS(c);u&&(a.add(c.netId),(o||n.get(c.netId)!==u)&&l.push(u),n.set(c.netId,u))}for(let c of n.keys())a.has(c)||(o||l.push(zS(c)),n.delete(c));return o||l.length?{full:o,records:l}:null}return{capture:i,reset(){n.clear(),e=t=-1/0}}}var qg=Pt.DEFAULT_UP,XS=15,Yg=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function qS(){let n=new _t,e=new Be(new kt(.155,1),new It({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new Ri(.23,.018,5,20),new bt({color:"#84e6ff",transparent:!0,opacity:.85,blending:hi,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new Cs(.11,.28,9,1,!0),new bt({color:"#55c7ff",transparent:!0,opacity:.45,side:Gt,blending:hi,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function YS(){let n=new _t,e=new _t,t=gu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:yu(g,t.hand,{openWrist:!0}),position:new M,quaternion:new Je,pressure:[0,0,0],tracked:!1})),r=_u(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=vu(e),l=new M,c=[null,null],u=new M,d=new Je,f=new Je,h=new Je,p={mode:0,position:new M,quaternion:new Je,end:new M};function x(g,m,T){let S=g.avatar,v=1-Math.exp(-T*20);if(!S){o.position.set(0,-.46,0),o.rotation.x=0,c.fill(null),r.pose(c,.42,.97,.68,!0),a.hide(),p.mode=0;return}d.copy(n.quaternion).invert(),h.copy(S.head).premultiply(d),i.quaternion.slerp(h,v),u.set(0,0,-1).applyQuaternion(i.quaternion);let E=qe.smoothstep(-u.y,.28,.94),P=Math.max(.38,S.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*P,.24*E),o.rotation.x=-.5*E,f.copy(o.quaternion).invert(),t.setColor(S.color??0);for(let b=0;b<s.length;b++){let _=s[b],C=S.hands[b];if(c[b]=C?_:null,!C){_.tracked=!1;continue}l.copy(C.position).sub(g).applyQuaternion(d).sub(o.position).applyQuaternion(f),h.copy(C.quaternion).premultiply(d).premultiply(f),_.tracked?(_.position.lerp(l,v),_.quaternion.slerp(h,v)):(_.position.copy(l),_.quaternion.copy(h)),_.tracked=!0;for(let F=0;F<3;F++)_.pressure[F]+=((C.pressure?.[F]??0)-_.pressure[F])*v;_.skin.pose(_.pressure,!1)}r.pose(c,S.armSpan*.5,.97,P,!0);let D=S.tool;if(!D){a.hide(),p.mode=0;return}let I=p.mode?v:1;p.mode=D.mode,p.position.lerp(D.position,I),p.quaternion.slerp(h.copy(D.quaternion),I),p.end.lerp(D.end,I),a.update(p)}return{model:n,toolRoot:e,draw:x,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Zg(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function jg({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,onAction:o}){let a=new Map,l=new Map,c=Xg(),u=0,d=-1,f=-1,h=-1,p="",x=0,g=null,m=0;function T(){let w=e();return w!==p&&(p=w,x=Vs(w)),x}function S(w){return!!w?.ready&&w.map===T()}function v(w){let H=l.get(w);H&&(n.remove(H.mesh),H.mesh.material?.dispose(),l.delete(w))}function E(){for(let w of l.keys())v(w);u=0,d=-1,f!==-1&&(f=-1,s?.(null)),h!==-1&&(h=-1,r?.(null))}function P(w,H){if(w.color===H.color&&w.style===H.style)return;w.color=H.color,w.style=H.style;let B=w.mesh.material;if(B?.color){if(B.color.setHex(H.color),H.style===0){Object.assign(B,w.baseMaterial),w.baseEmissive&&B.emissive.copy(w.baseEmissive),B.needsUpdate=!0;return}B.roughness=[.44,.94,.12,.16,.4][H.style],B.metalness=[.1,0,.87,.12,0][H.style],B.opacity=H.style===3?.4:1,B.transparent=H.style===3,B.depthWrite=!B.transparent,B.emissive?.copy(B.color),B.emissiveIntensity=H.style===4?1.65:0,B.needsUpdate=!0}}function D(w){if(!S(w)){E();return}if((u!==w.id||d!==w.map)&&(E(),u=w.id,d=w.map),w.avatar&&w.avatar.light!==f&&(f=w.avatar.light,s?.(f)),w.avatar&&w.avatar.coconuts!==h&&(h=w.avatar.coconuts,r?.(h)),!w.objects)return;let H=w.objects.full?new Set:null;for(let B of w.objects.records){if(B.removed){v(B.id);continue}H?.add(B.id);let k=l.get(B.id);if(k&&k.type!==B.type&&(v(B.id),k=null),!k){let le=i?.(B.type);if(!le)continue;let{roughness:ne,metalness:de,transparent:De,depthWrite:Ne,opacity:R,emissiveIntensity:y}=le.material??{},L={roughness:ne,metalness:de,transparent:De,depthWrite:Ne,opacity:R,emissiveIntensity:y};le.userData.netId=B.id,le.userData.netType=B.type,k={mesh:le,baseMaterial:L,baseEmissive:le.material?.emissive?.clone(),type:B.type,target:new M().copy(B.position),quaternion:new Je().copy(B.rotation),velocity:new M,time:w.time},le.position.copy(k.target),le.quaternion.copy(k.quaternion),l.set(B.id,k),n.add(le)}let z=(w.time-k.time)/1e3;z>.06&&z<.65&&!(B.flags&6)?k.velocity.copy(B.position).sub(k.target).multiplyScalar(1/z).clampLength(0,23):k.velocity.set(0,0,0),k.target.copy(B.position),k.quaternion.copy(B.rotation),k.time=w.time,k.flags=B.flags,k.received=w.arrival,k.mesh.userData.netFlags=B.flags,k.mesh.userData.held=!!(B.flags&1),P(k,B)}if(H)for(let B of l.keys())H.has(B)||v(B)}let I=new M;function b(w,H,B){let k=1-Math.exp(-w*22);for(let z of l.values()){if(z.mesh.visible=H,!H)continue;let le=z.flags&6?0:Math.min(.12,Math.max(0,(B-z.received)/1e3));I.copy(z.target).addScaledVector(z.velocity,le),z.mesh.position.distanceToSquared(I)>16||z.flags&6&&z.mesh.position.distanceToSquared(z.target)<1e-4?z.mesh.position.copy(I):z.mesh.position.lerp(I,k),z.mesh.quaternion.slerp(z.quaternion,k),z.flags&6&&z.mesh.quaternion.angleTo(z.quaternion)<.008&&z.mesh.quaternion.copy(z.quaternion),z.mesh.updateMatrixWorld(!0)}}let _=w=>document.querySelector(w),C=_("#cloud-status"),F=_("#cloud-room"),G=_("#cloud-camera"),Y=0,Z="Hors ligne",q=0;function Q(w){Y=w,G.textContent="Cam\xE9ra : "+Yg[w]}function V(){Q((Y+1)%Yg.length)}G.onclick=V;let ee=Hg({onStatus(w){Z=w,C.textContent=w},onPose(w){ee.role!=="vr"&&D(w)},onPeer(w,H){if(!w){let z=a.get(H.id);z?.art&&(Zg(z.art.model),Zg(z.art.toolRoot),z.art.dispose?.()),a.delete(H.id);return}let B=a.get(w.id);B||(B={art:null,motion:new M},a.set(w.id,B));let k=B.pose;if(B.motion.set(0,0,0),k&&k.map===w.map){let z=(w.time-k.time)/1e3;z>=.055&&z<=.65&&(B.motion.set(w.x-k.x,w.y-k.y,w.z-k.z).multiplyScalar(1/z),B.motion.lengthSq()>=18**2&&B.motion.set(0,0,0))}B.pose=w},onAction:o}),he=La(new URLSearchParams(location.search).get("room")??"");F.value=/^[A-Z0-9]{5,12}$/.test(he)?he:Math.random().toString(36).slice(2,8).padEnd(6,"0").toUpperCase();function se(w){let H=La(F.value);ee.role===w&&ee.code===H||ee.join(H,w)&&(F.value=H,w!=="vr"&&_("#game").focus(),c.reset(),g=null,Q(0),t(Vs(H)),p="")}_("#cloud-vr").onclick=()=>se("vr"),_("#cloud-pc").onclick=()=>se("pc");let pe=_("#cloud-player");pe&&(pe.onclick=()=>se("player")),_("#cloud-leave").onclick=()=>{q=0,ee.leave()},_("#cloud-copy").onclick=async()=>{let w=new URL(location.href);w.searchParams.set("room",La(F.value));try{await navigator.clipboard.writeText(w.href),C.textContent="Lien copi\xE9."}catch{C.textContent=w.href}q=performance.now()+2500},addEventListener("pagehide",()=>ee.leave());let be=new M,Ce=new M,$=new M,U=new M,N=0;function ie({dt:w,position:H,yaw:B,pitch:k,camera:z,rig:le,keys:ne,flat:de}){let De=de?.movement,Ne=Number(ne.has("KeyD"))-Number(ne.has("KeyQ")||ne.has("KeyA"))+(De?.x??0),R=Number(ne.has("KeyS"))-Number(ne.has("KeyZ")||ne.has("KeyW"))+(De?.z??0);de?.consumeJump?.()&&(N=.26),N=Math.max(0,N-w);let y=Number(ne.has("Space")||N>0)-Number(ne.has("ShiftLeft")||ne.has("ShiftRight")),L=ne.has("ControlLeft")||ne.has("ControlRight")?11:3.2;U.set(Ne,y,R).clampLength(0,1).applyAxisAngle(qg,B),le.position.addScaledVector(U,w*L).clampScalar(-175,175),le.rotation.set(0,B,0),z.position.set(0,0,0),z.rotation.set(k,0,0,"YXZ"),le.updateMatrixWorld(!0),H.copy(le.position)}function ce(w,H,B,k){for(let z of a.values()){let le=z.pose;if(!(w&&S(le))){z.art&&(z.art.model.visible=!1,z.art.toolRoot&&(z.art.toolRoot.visible=!1));continue}z.art||(z.art=le.role==="pc"?qS():YS(),n.add(z.art.model),z.art.model.visible=!1,z.art.toolRoot&&n.add(z.art.toolRoot));let{model:de,toolRoot:De}=z.art,Ne=Math.min(.19,Math.max(0,(k-le.arrival)/1e3+.036));be.copy(le).addScaledVector(z.motion,Ne),!de.visible||de.position.distanceToSquared(be)>64?de.position.copy(be):de.position.lerp(be,1-Math.exp(-B*11)),de.rotation.y=le.yaw,de.visible=!0,De&&(De.visible=!0),z.art.draw(le,H,B)}}function te(w,H){if(H<q)return;let B=ee.remote,k=Z;if(ee.state==="open"){let z="Salon "+ee.code+" \xB7 ",le=ee.peers.filter(ne=>ne.ready);if(!w)k=z+(ee.role==="vr"?"s\xE9lectionne \xAB Entrer en VR \xBB pour ouvrir la partie":"quitte la session VR pour utiliser ce r\xF4le");else if(ee.role!=="vr"&&B&&B.map!==T())k=z+"le joueur VR utilise une autre carte. Chargez la m\xEAme carte.";else if(ee.role!=="vr"&&B&&!B.ready)k=z+"casque connect\xE9 \xB7 en attente du d\xE9marrage VR";else if(ee.role==="player"&&B&&B.protocol<4)k=z+"mets \xE0 jour le jeu sur le casque pour jouer ensemble";else if(ee.role!=="vr"&&S(B))k=z+"joueur VR connect\xE9";else if(ee.role==="vr"){let ne=le.filter(S),de=ne.filter(Ne=>Ne.role==="player").length,De=ne.some(Ne=>Ne.role==="pc");de||De?k=z+[De?"spectateur connect\xE9":"",de?de+" joueur"+(de===1?"":"s")+" PC / mobile":""].filter(Boolean).join(" \xB7 "):le.length&&(k=z+"le correspondant utilise une autre carte. Chargez la m\xEAme carte.")}}C.textContent!==k&&(C.textContent=k)}function _e(w){let{inVR:H,time:B,dt:k,position:z,yaw:le,camera:ne,rig:de,keys:De,avatar:Ne,bodies:R}=w;if(!ee.role){E();return}let y=ee.role==="vr"?H:!H,L=performance.now(),X=T(),ae=ee.role!=="vr"?ee.remote:null,j=y&&S(ae);if(!j&&d!==-1&&E(),b(k,j,L),ce(y,B,k,L),ee.role==="pc"&&!H){De.delete("KeyC")&&V();let ge=Y===3&&j?[...l.values()].find(xe=>xe.type===XS)?.mesh:null,fe=j?a.get(ae.id)?.art?.model:null;ge?($.set(0,0,-.23).applyQuaternion(ge.quaternion),de.position.copy(ge.position).add($),de.rotation.set(0,0,0),ne.position.set(0,0,0),ne.quaternion.copy(ge.quaternion),de.updateMatrixWorld(!0),z.copy(de.position)):fe&&(Y===1||Y===2)?($.set(0,.72,Y===1?-2.7:2.7).applyAxisAngle(qg,fe.rotation.y),Ce.copy(fe.position).add($),de.position.lerp(Ce,1-Math.exp(-k*11)),ne.position.set(0,0,0),de.updateMatrixWorld(!0),ne.lookAt(fe.position),ne.updateWorldMatrix(!0,!1),z.copy(de.position)):ie(w)}ee.tick({x:z.x,y:z.y,z:z.z,yaw:le,map:X,ready:y,avatar:y?Ne:null,objectFeed:y&&ee.role==="vr"&&R?ge=>{let fe=c.capture(ge,R);return fe&&(g=fe,m=ge+200),ge<m?g:null}:null}),te(y,L)}function Ue(w){let H=a.get(w)?.pose;return S(H)?H:null}return{update:_e,getPeer:Ue,sendAction(w){return ee.sendAction(w,T())},get role(){return ee.role},get connected(){return S(ee.remote)},get remoteSpectator(){return ee.peers.find(w=>w.role==="pc"&&S(w))??null},get remoteLight(){return f===-1?null:f},get replicaCount(){return l.size},forEachReplica(w){for(let H of l.values())H.mesh.visible&&w(H.mesh)}}}var Kg=Object.freeze([8,16,32,48]),$g=16,Cu=24,Jg=new WeakMap,is=qe.clamp,eo=qe.lerp,df=n=>n*n*(3-2*n);function Qr(n,e,t,i){return Number.isFinite(n)?is(n,e,t):i}function to(n={}){let e=Kg.includes(n?.detail)?n.detail:$g,t=n?.heights;return{detail:e,seed:Math.round(Qr(n?.seed,0,2147483647,1)),amplitude:Qr(n?.amplitude,0,12,0),frequency:Qr(n?.frequency,.015,2,.12),grass:Qr(n?.grass,0,1,0),shrub:Qr(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Qr(i,-Cu,Cu,0)):null}}function Qg(n,e,t,i){let s=is(t,0,e),r=is(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function e0(n,e){let t=Kg.includes(e)?e:$g;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>Qg(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Ui(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function hf(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=df(n-i),o=df(e-s),a=eo(Ui(i,s,t),Ui(i+1,s,t),r),l=eo(Ui(i,s+1,t),Ui(i+1,s+1,t),r);return 2*eo(a,l,o)-1}function Ru(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=Jg.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let d=s+1,f=u?c.procedural:new Float64Array(d**2);if(!u&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let m=(g/s-.5)*e*a,T=(x/s-.5)*t*a;f[x*d+g]=o*(.62*hf(m,T,r)+.26*hf(m*2.03,T*2.03,r+13)+.12*hf(m*4.13,T*4.13,r+37))}let h=l?f.map((x,g)=>x+l[g]):f,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:f,surface:h};return Jg.set(n,p),p}function ff(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Qg(o,i,(e/s+.5)*i,(t/r+.5)*i)}function ZS(n,e,t){return n.y+ff(Ru(n),e-n.x,t-n.z)}function jS(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=s[f*r+h],d++);return u/d}function t0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ru(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=is(h,-c/2,c/2),g=is(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=s**2)return!1;let m=(h/c+.5)*l,T=(p/u+.5)*l,S=c/l,v=u/l,E=Math.max(0,Math.ceil(m-s/S)),P=Math.min(l,Math.floor(m+s/S)),D=Math.max(0,Math.ceil(T-s/v)),I=Math.min(l,Math.floor(T+s/v)),b=Number.isFinite(o)?o-n.y:ff(a,h,p),_=l+1,C=a.heights?.slice()??new Array(_**2).fill(0),F=!1,G=!1;function Y(Z,q,Q){F=!0;let V=q*_+Z,ee=C[V],he;if(i==="raise"||i==="lower")he=ee+(i==="raise"?1:-1)*r*Q;else{let se=i==="flatten"?b:jS(a,Z,q);he=eo(d[V],se,Math.min(1,r)*Q)-f[V]}he=is(he,-Cu,Cu),!(Math.abs(he-ee)<1e-7)&&(C[V]=he,G=!0)}for(let Z=D;Z<=I;Z++)for(let q=E;q<=P;q++){let Q=Math.hypot((q-m)*S,(Z-T)*v)/s;Q<1&&Y(q,Z,df(1-Q))}if(!F){let Z=is(m,0,l),q=is(T,0,l),Q=Math.min(l-1,Math.floor(Z)),V=Math.min(l-1,Math.floor(q)),ee=Z-Q,he=q-V,se=ee+he<=1,pe=se?1-ee-he:ee+he-1,be=se?ee:1-he,Ce=se?he:1-ee;if(pe>=Math.max(be,Ce)){let $=+!se;Y(Q+$,V+$,1)}else be>=Ce?Y(Q+1,V,1):Y(Q,V+1,1)}return G&&(n.terrain.heights=C),G}function n0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){let h=d*r+f;o[3*h]=(f/s-.5)*e,o[3*h+2]=(d/s-.5)*t,a[2*h]=f/s*e/2.6,a[2*h+1]=(1-d/s)*t/2.6,d<s&&f<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new it;return u.setAttribute("position",new vt(o,3).setUsage(Di)),u.setAttribute("uv",new vt(a,2)),u.setIndex(new vt(l,1)),JS(u,n),u}function JS(n,e){let{surface:t}=Ru(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function i0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>ZS(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function KS(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new it;return e.setAttribute("position",new He(n,3)),e.computeVertexNormals(),e}function $S(){return new kt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var QS=[{name:"grass",geometry:KS,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:$S,perMetre:.17,max:48,salt:47,color:"#36583c"}];function s0(n){let e=new _t;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of QS){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new qt({color:a,side:t==="grass"?Gt:Qn});u.flatShading=!0;let d=new $o(i(),u,c);d.name=t,d.instanceMatrix.setUsage(Di),d.userData.salt=o,d.receiveShadow=!0;let f=new Oe;for(let h=0;h<c;h++){let p=eo(.68,1.2,Ui(h,o,n.terrain.seed+4));d.setColorAt(h,f.setRGB(p,p,p))}e.add(d)}return eT(e,n),e}function eT(n,e){let t=Ru(e),i=new Pt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Ui(a,r,o)-.5)*.96*e.w,c=(Ui(a,r,o+1)-.5)*.96*e.d;i.position.set(l,ff(t,l,c),c),i.rotation.y=Ui(a,r,o+2)*2*Math.PI,i.scale.setScalar(eo(.58,1.34,Ui(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function r0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var Pu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],o0=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function a0(n,e=o0[n]){n=Math.max(0,Math.min(Pu.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:o0[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function l0({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let h=c;return c=!1,h}}}var Iu=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:d,offset:f}=c,h=u.surface;if(c.released=null,u.surface=null,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&(!u.held||u.hasSupport)&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(u.hasSupport?f.copy(u.supportOffset):f.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=h&&r.includes(h)&&!h.objectBody?.owner,g=x&&h.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),d.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(f),this.from.copy(p).add(f),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(f),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let I=this.correction.subVectors(p,u.anchor),b=I.dot(d)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&I.lengthSq()<=Math.max(.12,l*.5)**2;b&&(!m||m===h&&this.hitNormal.dot(d)>.7)?(m=h,this.hit.copy(u.anchor).add(f),this.hitNormal.copy(d)):!b&&m===h&&I.dot(d)>.035&&(m=null),!m&&c.tracked&&(c.released=h,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(f),d.copy(this.hitNormal);let T=m.friction??.8,S=Math.min(1,Math.max(0,T*(.75+s.grip*.09))),v=Math.min(.97,Math.max(0,1-S+(s.slide-3)*.035)),E=this.correction.subVectors(u.anchor,p),P=E.dot(d);if(E.addScaledVector(d,-P),E.lengthSq()*v**2>.003**2){if(this.to.copy(u.anchor).add(f).addScaledVector(E,-v),this.from.copy(this.to).addScaledVector(d,.003),this.to.addScaledVector(d,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(f);else if(v>.5&&E.lengthSq()>.035**2)continue}E.subVectors(u.anchor,p),x&&E.dot(d)<0&&E.addScaledVector(d,-E.dot(d)),a.add(E);let D=m.objectBody;if(D){let I=c.inverseRotation.copy(D.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(f).sub(D.mesh.position).applyQuaternion(I),c.localNormal.copy(d).applyQuaternion(I)}if(u.surface=m,this.contacts++,c.tracked){let I=this.handMotion.subVectors(c.previousTarget,p),b=I.dot(d);I.multiplyScalar(1-v).addScaledVector(d,Math.max(0,b)-b*(1-v)),this.intent.add(I)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=.08,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function Lu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new it,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=c0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=c0(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function c0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new vt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Uu=0,tT=1,nT=new M,u0=new Ma,pf=new Sn,h0=new M,Du=new Tn,Nu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fu,this.unassigned=new Fu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new mf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,nT)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Uu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let h=s[f].point.getComponent(f)-i[f].point.getComponent(f);h>r&&(r=h,o=f)}let a=i[o],l=s[o],c,u;r=0,u0.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){u0.closestPointToPoint(p.point,!0,h0);let x=h0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,pf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(pf.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(pf.distanceToPoint(u.point)<0){d.push(ii.create(a,l,c),ii.create(u,l,a),ii.create(u,c,l),ii.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(ii.create(a,c,l),ii.create(u,a,l),ii.create(u,l,c),ii.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Uu&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=tT;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Uu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=ii.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},ii=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Uu,this.edge=null}static create(e,t,i){let s=new n,r=new Da(e,s),o=new Da(t,s),a=new Da(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Du.set(e.point,t.point,i.point),Du.getNormal(this.normal),Du.getMidpoint(this.midpoint),this.area=Du.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Da=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},mf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Fu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ks=class extends it{constructor(e=[]){super();let t=[],i=[],r=new Nu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new He(t,3)),this.setAttribute("normal",new He(i,3))}};var Cn=Math.PI*2,Bu=.84,Ni=128;function os(n){let e=new Uint8Array(Ni*Ni*4);for(let i=0;i<Ni;i++)for(let s=0;s<Ni;s++){let r=(s+.5)/Ni,o=(i+.5)/Ni,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Bu,1),Math.min(o/Bu,1),s,i),l=(s+i*Ni)*4;for(let c=0;c<3;c++)e[l+c]=qe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ci(e,Ni,Ni);return t.colorSpace=pt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=on,t.needsUpdate=!0,t}function Gs(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function et(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Oe(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Bu,r.getY(l)*Bu):r.setXY(l,.95,.95);return i.setAttribute("color",new vt(a,3)),i}function as(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Lu(s),material:new It({vertexColors:!0,map:r,roughness:o,metalness:a})}}function d0(n,e,t){let i=n/2,s=e/2,r=new Rs;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ss(n,e,t,i,s){return new ha(d0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function rs(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Cn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new it;o.setAttribute("position",new He(i,3)),o.setAttribute("uv",new He(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Ua(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Cn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new ks(t)}function iT(){let t=new da(d0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=qe.clamp(i.getX(l)/.098+.5,0,1),u=qe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=os((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Cn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[et(ss(.106,.207,.013,.011,.0019),8425890),et(ss(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),et(ss(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),et(t,16777215,!0),et(ss(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),et(new Qe(.0036,.024,.004).translate(.055,.029,0),11714250),et(new Qe(.0036,.015,.004).translate(-.055,.032,0),11385285),et(new Qe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(et(new Xt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(et(new Wt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(et(new Wt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ks([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return as("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function sT(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=rs(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=os((a,l,c,u)=>{let d=Cn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(T=>Math.exp(-(((f-T+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=Gs(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Ua([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return as("bread","Baguette de pain",.27,o,[et(s,16777215,!0)],r,.9)}function rT(){let n=os((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*Gs(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=rs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=rs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[et(e,16777215,!0),et(t,11056059),et(new Xt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),et(new Xt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(et(new Qe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ua([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return as("wheel","Roue",1.8,s,i,n,.64,.23)}function oT(){let n=os((r,o,a,l)=>{let c=Gs(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=rs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Ri(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new ks(i);return as("cup","Tasse",.39,s,[et(e,16777215,!0),et(t,15785922)],n,.37)}function aT(){let n=rs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=os((s,r,o,a)=>{let l=9*Gs(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*Cn*4);return[u,u*1.13,u*1.24]}),t=[et(n,16777215,!0),et(new kr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),et(new Wt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),et(new Wt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),et(new Xt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),et(new Wt(.008,12).translate(0,.035,.0336),15633202)],i=Ua([[.033,-.143],[.054,.133]],6);return as("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function lT(){let n=rs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=os((r,o,a,l)=>{let c=10*Gs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Cn*r*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Cn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[et(n,16777215,!0),et(new Wt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),et(new kr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),et(new Wt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ua([[.069,-.112],[.069,.109]],6);return as("soda","Canette de soda",.35,s,i,t,.42,.27)}function cT(){let n=rs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=os((s,r,o,a)=>{let l=15*Gs(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[et(n,16777215,!0),et(ss(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),et(new Wt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Ua([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return as("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function uT(){let n=os((s,r,o,a)=>{let l=8*Gs(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=rs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[et(ss(.138,.22,.061,.016,.004),14788675),et(ss(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),et(new Jt(.106,.174).translate(0,-.004,.0395),16777215,!0),et(e,2502456),et(new Xt(.014,.017,.016,10).translate(.04,.117,.001),2503482),et(new Qe(.008,.047,.027).translate(-.072,.014,-.002),3028798),et(new Qe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),et(new Wt(.004,8).translate(.04,.066,.0397),15817792),et(new Wt(.004,8).translate(-.04,.066,.0397),7903100),et(ss(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return as("radio","Talkie-walkie",.43,new ks(i),t,n,.61,.08)}function f0(){return[iT(),sT(),rT(),oT(),aT(),lT(),cT(),uT()]}var p0=new WeakMap;function gf(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,p0.set(n,e),n}function Ou(n){let e=n.clone(),t=p0.get(n);return t?gf(e,t):e}function hT(n){let t=new Ci(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new kt(.225,0),s=new pa({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return gf(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function dT(n){let e=new Qe(.37,.37,.37),t=new It({color:16777215,roughness:.4});return gf(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;
    `+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`
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
    `),s.fragmentShader=`
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
    `+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function m0(){let n={value:0};return{props:[hT(n),dT(n)],animate(e){n.value=e}}}var yf="gorilla-lab-models-v1",Hs=Object.freeze({models:12,parts:24,fileBytes:18e4}),fT=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),x0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),pT=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),mT=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,gT=/^#[a-f\d]{6}$/i;function g0(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function xf(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?qe.clamp(n[s],t,i):e)}function _f(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Hs.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!mT.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Hs.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:g0(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(pT).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:g0(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(fT,s?.shape)?s.shape:"box",position:xf(s?.position,0,-3,3),rotation:xf(s?.rotation,0,-360,360),scale:xf(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&gT.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(x0,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function vf(n){try{let e=(n??globalThis.localStorage)?.getItem(yf);if(e&&e.length<=Hs.fileBytes)return _f(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function xT(n){switch(n){case"sphere":return new Ci(.5,20,12);case"cylinder":return new Xt(.5,.5,1,20);case"cone":return new Cs(.5,1,20);case"torus":return new Ri(.365,.135,8,24);case"capsule":return new na(.28,.44,6,16);case"diamond":return new Ei(.5);default:return new Qe(1,1,1)}}var y0=Object.keys(x0),no=64,Na=4,_0=2,Fi;function yT(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function _T(){if(Fi)return Fi;let n=no*Na,e=no*_0,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/no)*Na+Math.floor(s/no),o=yT(y0[r],s%no,i%no),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Fi=new ci(t,n,e),Fi.colorSpace=pt,Fi.magFilter=on,Fi.minFilter=An,Fi.generateMipmaps=!0,Fi.needsUpdate=!0,Fi}function vT(n){let e=xT(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(qe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new Oe(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=y0.indexOf(n.surface),c=l%Na,u=Math.floor(l/Na);for(let d=0;d<r;d++)s.toArray(o,d*3),a.setXY(d,(c+.05+a.getX(d)*.9)/Na,(u+.05+a.getY(d)*.9)/_0);return t.setAttribute("color",new vt(o,3)),t}function v0(){return new It({vertexColors:!0,map:_T(),roughness:.68})}function M0(n){let e=n.map(vT),t=Lu(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function b0(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=M0(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:v0(),collisionGeo:new Qe(i.x,i.y,i.z),mass:qe.clamp(i.x*i.y*i.z*9,.18,12)}})}function S0(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=M0(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Be(t,v0());r.castShadow=!0;let o=new _t;return o.add(r),o}var Bt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),T0=Bt(-24,24,-51,7),zu={x:0,y:0,z:3},Vu={x:.05,y:1.16,z:5.9},io={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Bt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Bt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Bt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Bt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Bt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Bt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Bt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Bt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Bt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Bt(9,23,-48,-37),sign:[16,-38.2]}},G2=[Bt(-9,-6,-51,7),Bt(6,9,-51,7),Bt(-24,24,-8,-5),Bt(-24,24,-27,-23),Bt(9,23,-37,-34)],w0=[{name:"Glace",bounds:io.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:io.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Bt(-9,9,-51,7)},{name:"Sol ouest",bounds:Bt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Bt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Bt(-24,-23,-51,7)},{name:"Sol est",bounds:Bt(9,23,-51,-48)},{name:"Sol est",bounds:Bt(9,23,-37,7)},{name:"Bordure est",bounds:Bt(23,24,-51,7)}],so={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},ro=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Mf=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),bf={x:16,z:-31},Sf={x:16,y:1.52,z:-21},ku={x:-19.4,y:.68,z:-3.25},A0=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),E0={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Sf.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Gu(n,e,t){let i=new Qe(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Rn=new Je,Ot=new M,Ju=new M,MT=new at,C0=new WeakMap;function eh(n){if(n.heightfield||n.objectBody)return null;let e=C0.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=MT.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return C0.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function N0(n,e,t){let i=eh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Ku(n,e,t,i){if(t.heightfield)return DT(n,e,t,i);if(t.objectBody)return q0(n,e,t.objectBody,i);if(!N0(n,e,t))return 0;Rn.copy(t.quaternion).invert(),Ot.copy(n).sub(t.position).applyQuaternion(Rn);let s=t.half;Ju.copy(Ot).clamp(t.min,s),i.subVectors(Ot,Ju);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Ot.x),a=s.y-Math.abs(Ot.y),l=s.z-Math.abs(Ot.z);return o<=a&&o<=l?i.set(Math.sign(Ot.x)||1,0,0):a<=l?i.set(0,Math.sign(Ot.y)||1,0):i.set(0,0,Math.sign(Ot.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var st=new M,Bi=new M;function Df(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=Ku(n,e,c,st);if(!u||(n.addScaledVector(st,u+1e-4),st.y>.65&&(a=!0),!i))continue;let d=i.dot(st);d<0&&i.addScaledVector(st,-d*(Math.abs(d)<.55?1:1+s)),Bi.copy(i).addScaledVector(st,-i.dot(st)),i.addScaledVector(Bi,-Math.min(.95,r*c.friction*o))}return a}var Tf=new M,co=[];function ka(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));co.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=eh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&co.push(h)}for(let h=1;h<=o;h++){Tf.copy(n).lerp(e,h/o);for(let p of co){let x=Ku(Tf,t,p,st);if(x)return s.copy(Tf).addScaledVector(st,x+.001),r.copy(st),p}}return null}var Oa=new M,Va=new M,uo=new M,F0=new Tn,za=new M;function ho(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),g=x(p),m=x(p+1),T=x(p+2),S=new Tn(g,m,T).getNormal(new M);S.lengthSq()>.1&&s.push({a:g,b:m,c:T,n:S})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new nn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function B0(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Rn.copy(t.quaternion).invert(),Ot.copy(n).sub(t.position).applyQuaternion(Rn),i.faces.every(r=>r.n.dot(Oa.subVectors(Ot,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)F0.set(r,o,a).closestPointToPoint(Ot,za),s=Math.min(s,Ot.distanceToSquared(za));return Math.sqrt(s)}function bT(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=Ku(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Rn.copy(e.quaternion).invert(),Ot.copy(s.position).sub(e.position).applyQuaternion(Rn),Ju.copy(Ot).clamp(e.min,e.half),Ot.distanceToSquared(Ju)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){Oa.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=Ku(Oa,.007,e,uo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Oa),t.copy(uo)):Math.abs(c-o)<.003&&uo.dot(t)>.98&&(i.lerp(Oa,1/++a),o=Math.max(o,c)))}return o}var Hu=new M,ST=new M,Wu=new M,TT=new M,wT=new M;function Oi(n){return ho(new Qe(n.x*2,n.y*2,n.z*2))}function th(n,e,t){let i=TT.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=wT.copy(o).negate(),c=qs(n,l)+qs(e,o)-a,u=qs(n,o)+qs(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(Hu.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(Hu.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Wu.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(Hu.copy(a).applyQuaternion(e.mesh.quaternion).cross(Wu)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(ST.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Rn.copy(a.mesh.quaternion).invert(),Ot.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Rn);for(let{a:c,b:u,c:d}of a.shape.faces){F0.set(c,u,d).closestPointToPoint(Ot,za);let f=Ot.distanceToSquared(za);f<l&&(l=f,Wu.copy(za))}if(!r(Hu.subVectors(Ot,Wu).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var AT=new M;function ET(n,e,t){Rn.copy(e.quaternion).invert(),Ot.copy(n.mesh.position).sub(e.position).applyQuaternion(Rn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Ot.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Ot.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+qs(n,AT.copy(t).negate())-s,a=r+qs(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Uf(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return bT(n,e,t,i??Va);let s=ET(n,e,t)??th(n,e,t);return s>0&&i&&V0(n,e,t,i),s}var Pf=ho(new Ei(1,0).scale(.055,.033,.075)),Xu={mesh:{position:new M,quaternion:new Je},shape:Pf,radius:Pf.radius,precise:!0};function O0(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Pf.radius;co.length=0;for(let c of i){let u=eh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||co.push(c)}Xu.mesh.quaternion.copy(t);let l=Xu.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of co){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?th(Xu,d,st):Uf(Xu,u,st);if(f>0)return s.copy(l).addScaledVector(st,f+5e-4),r.copy(st),u}}return null}function Ga(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!N0(n.mesh.position,n.radius,s))continue;let r=Uf(n,s,st);r<=1e-6||(n.mesh.position.addScaledVector(st,r),i=!0)}if(!i)break}}var wf=new M,Fa=new M,qu=new M,Af=new Je,ls=new Je,R0=new Je;function P0(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function z0(n,e,t,i,s){let{mesh:r,shape:o}=n;wf.copy(r.position),Af.copy(r.quaternion),Fa.subVectors(e,wf);let a=P0(Af,t,ls),l=Fa.length()+a*o.radius,c=W0(o),u=Math.max(1,Math.min(H0,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;qu.set(ls.x,ls.y,ls.z).normalize(),R0.setFromAxisAngle(qu,f),Fa.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(Fa),r.quaternion.premultiply(R0).normalize(),Ga(n,i);let h=Math.max(.006,s||0);n.velocity.lerp(Fa.subVectors(r.position,wf).divideScalar(h).clampLength(0,23),.52);let p=P0(Af,r.quaternion,ls);qu.set(ls.x,ls.y,ls.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(qu,.52)}function qs(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Rn.copy(n.mesh.quaternion).invert(),uo.copy(e).applyQuaternion(Rn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(uo));return t}var lo=new M,$u=new M,CT=new M,Ef=new M,oo={},ao={};function I0(n,e,t,i){let{mesh:s,shape:r}=n,o=qs(n,CT.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(lo),i.minV=i.maxV=s.position.dot($u);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(uo)<o-.0015)continue;Ef.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=Ef.dot(lo),c=Ef.dot($u);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function V0(n,e,t,i){Math.abs(t.y)<.8?lo.set(-t.z,0,t.x).normalize():lo.set(t.y,-t.x,0).normalize(),$u.crossVectors(t,lo),I0(n,t,-1,oo),I0(e,t,1,ao);let s=(Math.max(oo.minU,ao.minU)+Math.min(oo.maxU,ao.maxU))*.5,r=(Math.max(oo.minV,ao.minV)+Math.min(oo.maxV,ao.maxV))*.5;i.copy(t).multiplyScalar((oo.plane+ao.plane)*.5).addScaledVector(lo,s).addScaledVector($u,r)}var L0=new M;function Qu(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)L0.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(L0)}}function RT(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function k0(n){return!n.owner&&!n.frozen}var Ws=new M,Xs=new M,Ba=new M,D0=new M,If=new M,Lf=new M,PT=new M;function Yu(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function G0(n,e,t,i){let{mesh:s,shape:r}=n.body;return Rn.copy(s.quaternion).invert(),If.crossVectors(e,t),i.copy(If).applyQuaternion(Rn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function Zu(n,e,t){return n?.inverseMass?(G0(n,e,t,Lf),n.inverseMass+If.dot(Lf)):0}function ju(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(G0(n,e,t,Lf),i))}function Cf(n){return n.friction??n.spec?.friction??.78}function U0(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(Cf(r)*Cf(o)):Math.min(Cf(r),t.friction??.78);Ws.subVectors(Va,r.mesh.position),o&&Xs.subVectors(Va,o.mesh.position),Yu(n,Ws,Ba).sub(Yu(e,Xs,D0));let l=Ba.dot(st),c=!1;if(l<-1e-5){let d=l<-.8?qe.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(Zu(n,Ws,st)+Zu(e,Xs,st));ju(n,Ws,st,f),ju(e,Xs,st,-f),Yu(n,Ws,Ba).sub(Yu(e,Xs,D0)),Bi.copy(Ba).addScaledVector(st,-Ba.dot(st));let h=Bi.length();if(h>1e-5&&a>0){Bi.divideScalar(h);let p=Math.min(f*a,h/(Zu(n,Ws,Bi)+Zu(e,Xs,Bi)));ju(n,Ws,Bi,-p),ju(e,Xs,Bi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(st,u*n.inverseMass/d),Qu(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(st,-u*e.inverseMass/d),Qu(e)),c=!0}return n.inverseMass&&st.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,st.y)),e?.inverseMass&&st.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-st.y)),c}function IT(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var H0=96,LT=5;function W0(n){return Math.max(.008,n.thickness*.35)}function X0(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:eh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=k0(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/W0(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new nn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Qu(f),o.push(f)}l=Math.min(H0,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:x}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(r?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let g=x.length();g>1e-5&&h.rotateOnWorldAxis(PT.copy(x).divideScalar(g),Math.min(g,30)*c),Qu(d)}for(let d=0;d<LT;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!RT(h.bounds,p,x))continue;let g=Uf(h.body,p,st,Va);g>0&&(f=U0(h,null,p,g,s)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=th(p.body,g.body,st);m<=0||(V0(p.body,g.body,st,Va),f=U0(p,g,null,m,s)||f)}}if(!f)break}for(let d of o)d.inverseMass&&IT(d,c)}}function DT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var Rf={mesh:{position:null,quaternion:new Je},shape:{sphereRadius:0,normals:[],edges:[]}};function q0(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Rf.mesh.position=n,Rf.shape.sphereRadius=e,th(Rf,t,i))}function Y0(n,e,t,i,s){let r=q0(n,e,t,st);if(r<=0)return!1;n.addScaledVector(st,r+.001),s?.copy(st);let o=i.dot(st);return o<0&&(i.addScaledVector(st,-o),Math.abs(st.y)<.6&&k0(t)&&t.velocity.addScaledVector(st,-Math.min(2.8,-o*.24))),!0}var Nf=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],j0=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Ff={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},nh=3e6,Ha=240,mn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Z0=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function ih(n){if(typeof n=="string"){if(n.length>nh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ha)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ha+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:Z0(n.name,56,"Ma map"),spawn:{x:mn(e.x,-120,120,0),y:mn(e.y,-10,30,.06),z:mn(e.z,-120,120,3),yaw:mn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?to(t.terrain):null;return{name:Z0(t.name,36,"Pi\xE8ce "+(i+1)),x:mn(t.x,-120,120,0),y:mn(t.y,-12,33,0),z:mn(t.z,-120,120,0),w:mn(t.w,.2,64,3),h:mn(t.h,.12,36,.5),d:mn(t.d,.2,64,3),pitch:s?0:mn(t.pitch,-70,70,0),yaw:s?0:mn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(mn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:mn(t.grip,0,1.5,.8),gravity:mn(t.gravity,.05,2.5,1),bounce:mn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function sh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function J0(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,d=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,f=m=>Math.round(m/i)*i,h=f(n.x+u.x*d),p=f(n.y+u.y*d),x=f(n.z+u.z*d),g=d-(h-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return h+=u.x*g,p+=u.y*g,x+=u.z*g,![h,p,x].every(Number.isFinite)||Math.abs(h)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:h,y:p,z:x}}var Wa="gorilla-lab-custom-map-v1";function K0(n){let e=new Blob([JSON.stringify(ih(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function $0({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new _t;n.add(l);let c=[],u=[],d=new ga,f=null,h="",p=-1,x=-1,g="",m="",T=new Qe(1,1,1),S=new Be(T,new bt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));S.visible=!1,n.add(S);let v=new Ls,E=new M,P=new M,D=document.querySelector("#map-note");function I($){g=$,D.textContent=$}function b(){u.length>=20&&u.shift(),u.push(JSON.stringify(f))}function _($){let U=e.mapMaterial($.material,r());if(!$.texture&&$.color==="#ffffff")return{material:U,custom:!1};let N=U.clone();return N.onBeforeCompile=U.onBeforeCompile,N.customProgramCacheKey=U.customProgramCacheKey,N.color.multiply(new Oe($.color)),$.texture&&(N.map=d.load($.texture,ie=>{(ie.image.width>2048||ie.image.height>2048)&&(N.map=null,ie.dispose(),N.needsUpdate=!0,I("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px."))},void 0,()=>{N.map=null,N.needsUpdate=!0}),N.map.colorSpace=pt,N.map.wrapS=N.map.wrapT=li),{material:N,custom:!0,ownTexture:!!$.texture}}function C($){l.remove($.mesh),$.mesh.geometry.dispose(),$.vegetation&&r0($.vegetation),$.custom&&($.ownTexture&&$.mesh.material.map?.dispose(),$.mesh.material.dispose())}function F($,U){let{material:N,custom:ie,ownTexture:ce}=_($),te=new Be($.terrain?n0($):Gu($.w,$.h,$.d),N);te.position.set($.x,$.y,$.z),te.rotation.set(qe.degToRad($.pitch),qe.degToRad($.yaw),0,"YXZ"),te.castShadow=te.receiveShadow=!0,te.userData.mapIndex=U,l.add(te);let _e=new M($.w/2,$.h/2,$.d/2),Ue={mesh:te,position:te.position,quaternion:te.quaternion,half:_e,min:_e.clone().negate(),shape:Oi(_e),friction:$.grip,gravity:$.gravity,bounce:$.bounce,zone:!0,type:$.material};if(!$.terrain)return{mesh:te,collider:Ue,custom:ie,ownTexture:ce};let w=s0($);return w&&te.add(w),{mesh:te,collider:i0($,te),custom:ie,ownTexture:ce,vegetation:w}}function G(){for(let $ of c){let U=f?.pieces[$.mesh.userData.mapIndex];if(!U||$.ownTexture)continue;let N=e.mapMaterial(U.material,r());$.custom?$.mesh.material.map!==N.map&&($.mesh.material.map=N.map,$.mesh.material.needsUpdate=!0):$.mesh.material=N}}function Y(){for(let U of c)C(U);c.length=0;let $=f?.pieces??[];h=f?"custom-"+Vs(JSON.stringify(f)):"",o.forEach(U=>U.visible=!f);for(let U=0;U<$.length;U++)c.push(F($[U],U));if(f?e.boxes.splice(0,e.boxes.length,...c.filter((U,N)=>$[N].solid).map(U=>U.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),f)try{localStorage.setItem(Wa,JSON.stringify(f))}catch{}else try{localStorage.removeItem(Wa)}catch{}}function Z($){let U=ih($);u.length=0,f=U,p=x=-1,t.set(f.spawn.x,f.spawn.y,f.spawn.z),Y(),i(f.spawn.yaw),I("Map : "+f.name+" \xB7 "+f.pieces.length+" pi\xE8ces")}function q(){f=null,u.length=0,p=x=-1,t.set(0,0,3),Y(),i(0),I("Ar\xE8ne int\xE9gr\xE9e")}function Q(){Z({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[sh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function V(){if(!u.length)return I("Rien \xE0 annuler.");f=ih(u.pop()),p=x=-1,t.set(f.spawn.x,f.spawn.y,f.spawn.z),Y(),I("Derni\xE8re modification annul\xE9e.")}function ee(){f?K0(f):I("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function he($,U,N,ie){f&&(b(),f.spawn={x:$,y:U,z:N,yaw:qe.radToDeg(ie)},t.set($,U,N),Y(),I("Point de d\xE9part m\xE9moris\xE9."))}function se($,U,N,{mode:ie,piece:ce,head:te,feet:_e}){v.set($,U),v.far=12;let Ue=v.intersectObjects(c.map(ne=>ne.mesh),!1),w=ie>=5?Ue.find(ne=>f?.pieces[ne.object.userData.mapIndex]?.terrain):Ue[0];if(S.visible=!1,!f)return;if(ie>=5){let ne=w?.object.userData.mapIndex,de=f.pieces[ne];if(!de?.terrain||!N)return;if(b(),ie===9){let De=ce.terrain?.detail??de.terrain.detail,Ne=e0(de.terrain,De);de.terrain=to({...Ne,...ce.terrain,heights:Ne.heights})}else{let De={mode:["raise","lower","smooth","flatten"][ie-5],radius:ce.brushRadius,strength:ce.brushStrength,target:de.y};t0(de,w.point.x,w.point.z,De)}Y(),I("Relief modifi\xE9.");return}if(ie===2||ie===3||ie===4){if(!w)return;let ne=w.object.userData.mapIndex,de=f.pieces[ne];if(N&&ie===2&&(p=ne,x=ne,I("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),N&&ie===3){if(f.pieces.length===1)return I("Garde au moins une pi\xE8ce dans la map.");b(),f.pieces.splice(ne,1),p=x=-1,Y(),I("Pi\xE8ce supprim\xE9e.")}N&&ie===4&&(b(),Object.assign(f.pieces[ne],{material:ce.material,grip:ce.grip,gravity:ce.gravity,bounce:ce.bounce,solid:ce.solid,texture:ce.texture}),Y(),I("Surface modifi\xE9e.")),w&&(S.position.copy(w.object.position),S.rotation.copy(w.object.rotation),S.scale.set(de.w,de.h,de.d).multiplyScalar(1.006),S.visible=!0,S.material.color.set(ie===3?"#ff8271":"#ffe2a2"));return}if(!w)return;let H=x>=0?f.pieces[x]:ce;if(w.object.userData.mapIndex===x)return;E.copy(w.face.normal).transformDirection(w.object.matrixWorld);let B=H.terrain?{...H,x:Math.round(w.point.x*2)/2,y:w.point.y,z:Math.round(w.point.z*2)/2,pitch:0,yaw:0}:J0(w.point,E,H);if(!B)return;S.position.set(B.x,B.y,B.z),S.rotation.set(qe.degToRad(B.pitch),qe.degToRad(B.yaw),0,"YXZ"),S.scale.set(B.w,B.h,B.d),S.updateMatrixWorld(!0),S.visible=!0;let k=new nn().setFromObject(S),z=new nn(new M(te.x-.26,_e+.01,te.z-.26),new M(te.x+.26,te.y+.19,te.z+.26)),le=B.solid&&k.intersectsBox(z);if(S.material.color.set(le?"#fd7763":"#8be4b9"),N){if(le)return I("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(x<0&&f.pieces.length>=Ha)return I("Limite de "+Ha+" pi\xE8ces atteinte.");b(),x>=0?(f.pieces[x]=B,x=-1):f.pieces.push(B),Y(),I("Pi\xE8ce pos\xE9e \xB7 "+f.pieces.length+" pi\xE8ces")}}let pe=document.querySelector("#map-file"),be=document.querySelector("#map-url");pe.onchange=async()=>{let $=pe.files[0];if($)try{if($.size>nh)throw Error("Map trop lourde.");Z(await $.text())}catch(U){I(U.message)}finally{pe.value=""}};async function Ce($){try{let U=new URL($,location.href);if(!["http:","https:"].includes(U.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let N=await fetch(U,{credentials:"omit"});if(!N.ok)throw Error("URL de map inaccessible ("+N.status+").");if(Number(N.headers.get("content-length"))>nh)throw Error("Map trop lourde.");Z(await N.text())}catch(U){I(U.message)}}return document.querySelector("#map-load-url").onclick=()=>Ce(be.value),document.querySelector("#map-export").onclick=ee,document.querySelector("#map-reset").onclick=q,{modelPieces:()=>f?.pieces.filter($=>!$.terrain&&$.name!=="Sol")??[],refreshMaterials:G,load:Z,loadURL:Ce,reset:q,blank:Q,undo:V,save:ee,edit:se,recenter:he,inform:I,clearGhost(){S.visible=!1},get active(){return!!f},get status(){return g},get yaw(){return f?.spawn.yaw??0},get nodes(){return f?.pieces.length??0},get name(){return f?.name??null},get signature(){return h}}}function Q0(n){let e=new Es,t=new Vt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Se(1,1)},bloom:{value:0},exposure:{value:1}},s=new vn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}"}),r=new Be(new Jt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:f}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(m=>!m.viewport?.z||!m.viewport?.w))return!1;i.bloom.value=f?.18:0,i.exposure.value=n.toneMappingExposure;let h=n.getRenderTarget(),p=n.xr.enabled,x=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let m=0;m<l.length;m++){let T=l[m],S=Math.max(32,Math.round(T.viewport.z)),v=Math.max(32,Math.round(T.viewport.w)),E=a[m];E?(E.width!==S||E.height!==v)&&E.setSize(S,v):E=a[m]=new wn(S,v,{type:o?di:On,minFilter:rn,magFilter:rn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(T.matrixWorld),t.matrixWorld.copy(T.matrixWorld),t.matrixWorldInverse.copy(T.matrixWorldInverse),t.projectionMatrix.copy(T.projectionMatrix),t.projectionMatrixInverse.copy(T.projectionMatrixInverse),t.layers.mask=T.layers.mask,n.shadowMap.autoUpdate=m===0&&x,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=x,n.xr.enabled=p,n.setRenderTarget(h),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function ex(n){let e={value:0},t={value:Array.from({length:7},()=>new ot(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function tx(n,e,t){let i=new qt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Xt(.16,.25,3.15,9,12),r=s.attributes.position,o=new Oe,a=[];for(let se=0;se<r.count;se++){let pe=Math.round((r.getY(se)+1.575)/3.15*12),be=Math.floor((Math.atan2(r.getX(se),r.getZ(se))+Math.PI)*1.43);o.setHSL(.084+pe*.002,.35,.35+pe%3*.032+be%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new He(a,3));let l=new _t;l.position.set(bf.x,0,bf.z),l.rotation.z=-.14,n.add(l);let c=new Be(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(se,pe,be=.85){let Ce=se.getWorldPosition(new M),$=se.getWorldQuaternion(new Je);e.push({half:pe,min:pe.clone().negate(),position:Ce,quaternion:$,mesh:{position:Ce,quaternion:$},shape:Oi(pe),friction:be,gravity:1})}for(let se=0;se<4;se++){let pe=new Pt;pe.position.y=(se+.5)*3.15/4,l.add(pe);let be=.237-se*.022;u(pe,new M(be,.398,be))}let d=[],f=[],h=3.14;function p(se,pe,be,Ce){d.push(...se,...pe,...be),o.setHSL(.25+Ce*.043,.54,.28+Ce*.17);for(let $=0;$<3;$++)f.push(o.r,o.g,o.b)}for(let se=0;se<10;se++){let Ce=function($,U){let N=$*be;return[Math.cos(pe)*N-Math.sin(pe)*U,h+Math.sin($*Math.PI)*.38-$*$*.54+se%3*.055,Math.sin(pe)*N+Math.cos(pe)*U]},pe=se*2.39996,be=1.35+se%4*.2;for(let $=0;$<7;$++){let U=$/7,N=($+1)/7,ie=.285*Math.sin(Math.PI*U)**.7,ce=.285*Math.sin(Math.PI*N)**.7;for(let te of[-1,1]){let _e=Ce(U,ie*te),Ue=Ce(N,ce*te);_e[1]-=.065,Ue[1]-=.065,p(Ce(U,0),_e,Ue,.31+$%4*.14),p(Ce(U,0),Ue,Ce(N,0),.47+se%3*.16)}}}let x=new it;x.setAttribute("position",new He(d,3)),x.setAttribute("color",new He(f,3)),x.computeVertexNormals();let g=new Be(x,new qt({vertexColors:!0,side:Gt,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new It({color:"#956238",roughness:.92,flatShading:!0}),T=[];for(let se=0;se<5;se++){let pe=se*Math.PI*2/5,be=new Be(new kt(.124,1),m);be.position.set(Math.cos(pe)*(.25+se%2*.1),2.88+se%3*.06,Math.sin(pe)*(.25+se%2*.1)),be.scale.set(.91,1.16,.91),be.castShadow=!0,l.add(be),T.push(be)}l.updateMatrixWorld(!0);let S=[],v=[],E=new qt({color:"#485d5d",flatShading:!0});function P([se,pe],be,Ce){let $=new Be(new Qe(1.72,.91,.57),E);$.position.set(se,.455,pe),$.castShadow=$.receiveShadow=!0,n.add($),u($,new M(.86,.455,.285));let U=new _t;U.position.set(se,1.1,pe+.4),U.rotation.x=-.35,n.add(U);let N=new Be(new Qe(.64,.36,.055),new qt({color:"#182831"}));U.add(N);let ie=document.createElement("canvas");ie.width=512,ie.height=96;let ce=ie.getContext("2d"),te=new Wn(ie);te.colorSpace=pt;let _e=new Be(new Jt(.61,.095),new bt({map:te}));_e.position.set(0,.116,.03),U.add(_e);let Ue=.592/Ce.length,w=Ce.map(([B,k],z)=>{let le=new Be(new Qe(Ue-.012,.155,.04),new qt({color:"#478086"}));le.position.set(-.296+Ue*(z+.5),-.045,.046),U.add(le),S.push(le),le.userData.touchWidth=Ue-.012;let ne=document.createElement("canvas");ne.width=208,ne.height=172;let de=new Wn(ne);de.colorSpace=pt;let De=new Be(new Jt(Ue-.017,.139),new bt({map:de}));De.position.z=.0205,le.add(De);let Ne=-1/0;return le.userData.action=()=>{let R=performance.now();R-Ne<250||(Ne=R,k(),D(),le.position.z=.036,setTimeout(()=>{le.position.z=.046},115))},{label:B,context:ne.getContext("2d"),texture:de}});function H(){ce.fillStyle="#182831",ce.fillRect(0,0,512,96),ce.fillStyle="#ffe1a0",ce.font="bold 38px system-ui",ce.fillText(be,17,62,478);for(let B of w){let k=B.context;k.fillStyle="#386269",k.fillRect(0,0,208,172),k.fillStyle="#fff2d5",k.textAlign="center",k.font="bold 27px system-ui";let z=(typeof B.label=="function"?B.label():B.label).split("|");z.forEach((le,ne)=>k.fillText(le,104,(z.length>1?68:97)+ne*37,188)),B.texture.needsUpdate=!0}te.needsUpdate=!0}v.push(H)}function D(){for(let se of v)se()}P(so.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,ro[0])],["Boule",()=>t.spawn(1,ro[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,ro[0])],["Vider",t.clear]]),P(so.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,ro[1])],["Sph\xE8re",()=>t.spawn(5,ro[1])]]),P(so.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),P(so.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),P(so.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),D();let I=new _t,{x:b,y:_,z:C}=Sf;I.position.set(b,_,C),n.add(I);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let se=0;se<3;se++){let pe=[.9,.58,.27][se],be=new Be(new Wt(pe,20),new qt({color:F[se],side:Gt}));be.position.z=se*.012,I.add(be)}let G=new Be(new Qe(.14,1.5,.14),E);G.position.set(0,.75-_,-.11),I.add(G);let Y=0,Z=document.createElement("canvas");Z.width=256,Z.height=64;let q=Z.getContext("2d"),Q=new Wn(Z);Q.colorSpace=pt;let V=new Be(new Jt(1.4,.35),new bt({map:Q,side:Gt}));V.position.set(0,2.64-_,.02),I.add(V);function ee(){q.fillStyle="#182831",q.fillRect(0,0,256,64),q.textAlign="center",q.font="bold 28px system-ui",q.fillStyle="#fff0ce",q.fillText("CIBLE  \xB7  "+Y,128,42),Q.needsUpdate=!0}function he(se){for(let pe of se){if(!pe.beforePhysics||pe.owner||pe.frozen||!pe.mesh.visible)continue;let be=pe.beforePhysics,Ce=pe.mesh.position;if(be.z<=C||Ce.z>C||pe.velocity.z>=-1)continue;let $=(be.z-C)/(be.z-Ce.z),U=Math.hypot(qe.lerp(be.x,Ce.x,$)-b,qe.lerp(be.y,Ce.y,$)-_);U<=.9+pe.radius*.45&&(Y+=U<.27?3:U<.58?2:1,ee())}}return ee(),{targets:S,coconuts:T,redraw:D,updateTarget:he,score:()=>Y}}function Xa(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var cs=(n,e,t)=>n+(e-n)*t,fo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function rh(n,e){let t=Math.floor(n),i=Math.floor(e),s=fo(0,1,n-t),r=fo(0,1,e-i);return cs(cs(Xa(t,i),Xa(t+1,i),s),cs(Xa(t,i+1),Xa(t+1,i+1),s),r)}function nx(n,e){return rh(n,e)*.54+rh(n*2.07+3.4,e*2.07-6.1)*.26+rh(n*4.2+9,e*4.2)*.13+rh(n*8.6,e*8.6-13)*.07}function ix(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=r.map((p,x)=>cs(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,T=0;if(c>.025)if(n){let v=Xa(p+792,l+677);v>.9988&&(T=(v-.9988)*49e3*fo(.09,.3,c))}else{let[v,E]=s[p],P=2.8*u/(c+.16),D=v*P+3.6,I=E*P-8.1,b=nx(D,I),_=nx(D-.12,I-.09);g=fo(.49,.66,b)*fo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(b-_)*5+(b-.54)*.8))}let S=n?1:cs(.94,1,fo(.05,.34,c));i[x]=cs(h[0],(139+115*m)*S,g)+T,i[x+1]=cs(h[1],(154+100*m)*S,g)+T*.94,i[x+2]=cs(h[2],(178+77*m)*S,g)+T*.86,i[x+3]=255}}let a=new ci(i,1024,512,En);return a.colorSpace=pt,a.wrapS=li,a.magFilter=on,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function sx(){return{day:ix(!1),night:ix(!0)}}function oh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Wn(i);return s.colorSpace=pt,s}function rx(n,e){let{day:t,night:i}=sx(),s=new Be(new Ci(180,40,20),new bt({map:t,side:ln,fog:!1,toneMapped:!1}));n.add(s);let r=oh(128,128,(y,L)=>{let X=y.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);X.addColorStop(0,"#fff8df"),X.addColorStop(.12,"#fff3bd"),X.addColorStop(.18,"rgba(255,225,144,.40)"),X.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=X,y.fillRect(0,0,L,L)}),o=new Ko(new Ur({map:r,blending:hi,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Wr,a.needsUpdate=!0;let l=new Kr(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new xa("#daeaff","#88724c",2.25),u=new va("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=f[y]?y:0;let L=f[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,d.set(...L.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=h===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let L=u.target.position,X=Math.round(y.x/4)*4,ae=Math.round(y.y/4)*4,j=Math.round(y.z/4)*4;L.x===X&&L.y===ae&&L.z===j||(L.set(X,ae,j),u.position.copy(L).add(d))}let g=0;n.background=new Oe(f[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function T(y,L,X){let[,ae,j]=m[L],ge=512;y.save(),y.scale(X/512,X/512),y.fillStyle=ae,y.fillRect(0,0,ge,ge);let fe=L+19;function xe(){return fe=Math.imul(fe,1664525)+1013904223>>>0,fe/4294967296}if(y.fillStyle=j,L===16){for(let ye=0;ye<16;ye++)for(let ue=0;ue<16;ue++)(ue+ye)%2===0&&y.fillRect(ue*32,ye*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let ye=L===15?32:64;y.globalAlpha=.48;for(let ue=0;ue<ge;ue+=ye){y.fillRect(0,ue,ge,L===8?3:2);for(let we=-ye;we<ge;we+=ye)y.fillRect(we+ue/ye%2*(L===2?ye/2:0),ue,2,ye)}}else if([4,5,6,7,10,11,12].includes(L)){let ye=L===5?38:L===7?64:18;for(let ue=0;ue<ye;ue++){y.strokeStyle=j,y.globalAlpha=.08+xe()*.22,y.lineWidth=L===5?1+xe()*8:1+xe()*4;let we=xe()*ge,ze=L===5?.018:.009;y.beginPath();for(let ve=0;ve<=ge;ve+=8){let Ae=we+Math.sin(ve*ze+ue)*(L===6||L===7?4:12+ue%5*3)+(L===4?ve*.28:0);ve===0?y.moveTo(ve,Ae):y.lineTo(ve,Ae)}y.stroke()}}else{y.globalAlpha=.27;for(let ye=0;ye<120;ye++){let ue=xe()*ge,we=xe()*ge,ze=2+xe()*6;y.beginPath(),y.arc(ue,we,ze,0,Math.PI*2),y.fill()}}if(L!==16)for(let ye=0;ye<4400;ye++)y.globalAlpha=.05+xe()*.1,y.fillStyle=xe()>.5?j:"#222324",y.fillRect(xe()*ge,xe()*ge,1+xe()*4,1+xe()*3);y.restore()}let S=new Set([0,2,4,5,8,15,16]),v=m.map(([y,L,X,ae,j,ge],fe)=>{let xe=S.has(fe)?512:256,ye=oh(xe,xe,we=>T(we,fe,xe));ye.wrapS=ye.wrapT=li;let ue=new It({map:ye,roughness:ae,metalness:j,flatShading:!0,opacity:ge,transparent:ge<1,depthWrite:ge===1});return ue.name=y,ue}),E=v.map(y=>y.map.image),P=512,D=v.map(y=>new qt({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),I={value:0},b={value:.24},_={value:null},C={value:0};function F(){_.value?.dispose(),_.value=oh(512,512,(y,L)=>{y.fillStyle="#ffffff",y.fillRect(0,0,L,L);let X=L/52,ae=L/64;for(let j of G){if(!j.position||!j.half||j.position.y+j.half.y<.22)continue;let ge=(j.position.x+26)*X,fe=(j.position.z+54)*ae,xe=Math.min(55,j.half.x*X+5),ye=Math.min(72,j.half.z*ae+6);y.save(),y.translate(ge+j.half.y*X*.2,fe+j.half.y*ae*.24),y.scale(xe,ye);let ue=y.createRadialGradient(0,0,.15,0,0,1);ue.addColorStop(0,"rgba(22,37,65,.54)"),ue.addColorStop(.58,"rgba(36,54,76,.29)"),ue.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ue,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...D])y.onBeforeCompile=L=>{L.uniforms.uFocusAmount=I,L.uniforms.uFocusRadius=b,L.uniforms.uLabLightmap=_,L.uniforms.uLabBakedStrength=C,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let G=[],Y=[];function Z(y,L,X,ae,j,ge,fe,xe=0,ye=0,ue=1,we=1,ze=!1){let ve=new Be(ze?new Qe(j,ge,fe):Gu(j,ge,fe),v[xe]);ve.position.set(L,X,ae),ve.rotation.x=ye,ve.receiveShadow=!0,ve.castShadow=!0,n.add(ve);let Ae=new M(j/2,ge/2,fe/2),Ge={mesh:ve,position:ve.position,quaternion:ve.quaternion,half:Ae,min:Ae.clone().negate(),friction:ue,gravity:we,name:y,type:xe,shape:Oi(Ae)};return G.push(Ge),Ge}let q=w0.map(({name:y,bounds:L,type:X=0,friction:ae=.78,gravity:j=1})=>{let{xMin:ge,xMax:fe,zMin:xe,zMax:ye}=L;return Z(y,(ge+fe)/2,-.33,(xe+ye)/2,fe-ge,.66,ye-xe,X,0,ae,j)});for(let y of Object.values(E0))for(let L of y)Z(...L);let{xMin:Q,xMax:V,zMin:ee,zMax:he}=T0;Z("But\xE9e arri\xE8re",0,1.35,ee+.4,V-Q,2.7,.6,2),Z("But\xE9e ouest",Q+.3,1.05,(ee+he)/2,.6,2.1,he-ee,2),Z("But\xE9e est",V-.3,1.05,(ee+he)/2,.6,2.1,he-ee,2);let{xMin:se,xMax:pe,zMin:be,zMax:Ce}=io.hills.bounds,$=pe-se,U=Ce-be,N=16,ie=64,ce=new Jt($,U,N,ie).rotateX(-Math.PI/2).translate(se+$/2,0,be+U/2),te=ce.attributes.uv;for(let y=0;y<te.count;y++)te.setXY(y,te.getX(y)*$/2.6,te.getY(y)*U/2.6);let _e=ce.attributes.position,Ue;function w(y){if(Ue===y)return;Ue=y;let L=Ue*.017;for(let X=0;X<_e.count;X++){let ae=_e.getX(X),j=_e.getZ(X),ge=Math.sin(Math.PI*qe.clamp((ae-se)/$,0,1)),fe=Math.min(1,(j-be)*.48,(Ce-j)*.48),xe=.93+.56*Math.sin(j*.36+L)+.32*Math.cos(ae*.67+j*.26+L*1.4)+.19*Math.sin(j*.81+L*.67);_e.setY(X,Math.max(0,ge*fe*xe))}_e.needsUpdate=!0,ce.computeVertexNormals(),ce.computeBoundingSphere()}w(Math.floor(Math.random()*1e6));let H=new Be(ce,v[3]);H.receiveShadow=H.castShadow=!0,n.add(H);let B=(y,L)=>{let X=qe.clamp((y-se)/$*N,0,N-1e-6),ae=qe.clamp((L-be)/U*ie,0,ie-1e-6),j=Math.floor(X),ge=Math.floor(ae),fe=X-j,xe=ae-ge,ye=N+1,ue=ge*ye+j,we=_e.getY(ue),ze=_e.getY(ue+1),ve=_e.getY(ue+ye),Ae=_e.getY(ue+ye+1);return fe+xe<=1?we+(ze-we)*fe+(ve-we)*xe:Ae+(ve-Ae)*(1-fe)+(ze-Ae)*(1-xe)};G.push({heightfield:!0,height:B,...io.hills.bounds,friction:.81,gravity:1});function k(y,L,X,ae,j=1.45){let ge=oh(384,72,(xe,ye,ue)=>{xe.fillStyle="#202a32",xe.fillRect(0,0,ye,ue),xe.fillStyle=ae,xe.font="bold 31px system-ui",xe.textAlign="center",xe.fillText(y,ye/2,48,ye-20)}),fe=new Be(new Jt(3.2,.6),new bt({map:ge,side:Gt}));fe.position.set(L,j,X),n.add(fe),Y.push(fe)}for(let y of Object.values(io)){k(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:L,xMax:X,zMin:ae,zMax:j}=y.bounds,ge=new Qo(new it().setFromPoints([new M(L,.025,ae),new M(X,.025,ae),new M(X,.025,j),new M(L,.025,j)]),new Br({color:y.color,transparent:!0,opacity:.72}));n.add(ge),Y.push(ge)}k("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),k("MURS HAUTS",3,-31,"#e8d2ff"),k("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let z=new It({color:"#c8e6ed",metalness:1,roughness:.16}),le=new Be(new kt(.54,2),z);le.position.set(ku.x,ku.y,ku.z),le.castShadow=!0,n.add(le);let ne=m.map((y,L)=>{let{x:X,z:ae}=A0(L);return Z("\xC9chantillon "+m[L][0],X,.325,ae,.65,.65,.65,L,0,1,1,!0).mesh}),de=new Wt(1,12).rotateX(-Math.PI/2),De=new bt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ne(y){let L=new Be(de,De);return L.scale.setScalar(y),n.add(L),L}function R(y,L,X,ae,j,ge,fe,xe){let ye=L>=3;e.shadowMap.enabled=ye,u.castShadow=ye,De.opacity=L===2?.17:.11,C.value=xe?.38+X*.04:0;let ue=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let we=13+L*1.2;Object.assign(u.shadow.camera,{left:-we,right:we,top:we,bottom:-we}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ue&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ue,ue)),o.visible=j,fe!==P&&(P=fe,v.forEach((ve,Ae)=>{let Ge=ve.userData.texture??ve.map,O=S.has(Ae)?fe:Math.min(256,fe);if(Ge.image.width===O)return;let Te=document.createElement("canvas");Te.width=Te.height=O;let Re=Te.getContext("2d");O>512?T(Re,Ae,O):Re.drawImage(E[Ae],0,0,O,O);let Le=new Wn(Te);Le.colorSpace=Ge.colorSpace,Le.wrapS=Ge.wrapS,Le.wrapT=Ge.wrapT,Le.repeat.copy(Ge.repeat);for(let Me of[ve,D[Ae]])Me.userData.texture=Le,Me.map=Le,Me.needsUpdate=!0;Ge.dispose()}));let ze=y>=4;for(let ve of G)ve.mesh?.isMesh&&!ve.zone&&(ve.mesh.material=ze?v[ve.type]:D[ve.type]);H.material=ze?v[3]:D[3];for(let ve=0;ve<ne.length;ve++)ne[ve].material=ze?v[ve]:D[ve];v.forEach((ve,Ae)=>{for(let Ge of[ve,D[Ae]])Ge.userData.texture||(Ge.userData.texture=Ge.map),Ge.map=ge?Ge.userData.texture:null,Ge.color.set(ge?"#ffffff":m[Ae][1]),Ge.needsUpdate=!0}),g=ae?.21+X*.067:0,z.metalness=ae?.95:.1,z.roughness=ae?.13:.46,s.visible=y>=2,p(h)}return{boxes:G,floors:q,probe:le,display:ne,visual:R,shadow:Ne,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Ue},setHillSeed:w,bakeLightmap:F,mapMaterial:(y,L)=>L>=4?v[y]:D[y],builtObjects:[...G.map(y=>y.mesh).filter(y=>y?.isObject3D),H,le,...Y],materials:[...v,...D],focus(y,L,X){I.value=y?L*.75:0,b.value=.07+X*.058}}}var mo=document.getElementById("game");mo instanceof HTMLCanvasElement||(mo=document.createElement("canvas"),mo.id="game",mo.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(mo));var tt;try{tt=new fu({canvas:mo,antialias:!0,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}tt.xr.enabled=!0;tt.xr.setReferenceSpaceType("local-floor");tt.shadowMap.type=ba;tt.shadowMap.autoUpdate=!1;var ox=-1/0;tt.toneMapping=Tc;tt.toneMappingExposure=1.15;var Rt=new Es;Rt.fog=new jo("#a6d4ea",55,135);var ut=new _t,Mh=new _t,Zt=new Vt(70,1,.035,210);ut.add(Mh);Mh.add(Zt);Rt.add(ut);var Tt=rx(Rt,tt),UT=Q0(tt),NT=ex(Tt.probe),W={timeOfDay:1,shaderMode:1,shadowQuality:10,lightQuality:10,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,contrast:5,saturation:5,exposure:5,warmth:5,bounce:4,throw:5,preciseHitboxes:!1,quality:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4,toolMode:1,toolActive:!1,focus:!0,focusStrength:5,focusSize:5,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,textures:!0,reflections:!0,shadows:!0,bloom:!0},FT={...W},np=new M(zu.x,zu.y,zu.z);ut.position.copy(np);var Pn=new M,qa=new M,At=new M,ax=new M,qn=new M,Xn=new M,lx=new M,us=new M,Ys=new M,cx=new M,Bf=new M,ux=new M,ah=new M,hx=.105,dx=new M,dh=!1,Js=!1,BT=new Je,OT=new M(0,0,1),ip=0,sp=null,Ja=[],rp=100,Lt=new M(0,1,0),xi=new Je,gt=0,Vi=0,hs=0,gi=0,vo=NaN,fh=!1,Of=0,Ks=0,zf=0,lh=0,go=0,xo=0,yo=0,jt=7,Ka=72,Qt=!1,Px="left",Dt=0,op=0,ap=0,lp=0,xn=!0,fx=0,zT=[],ch=[],er=Tt.boxes,VT=new kt(1,0),Ix=1+Math.floor(Math.random()*(mu.length-1)),Lx=gu(Ix),{hand:kT,fur:GT}=Lx;function HT(n,e,t,i,s,r,o,a){let l=new Be(VT,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var bh=vf(localStorage),WT=bh.models.length?"|atelier-"+Vs(JSON.stringify(bh)):"",ps=S0(bh)??Lx.createHead();ps.visible=!1;Rt.add(ps);var Zs=new M,ph=new Je,px=new M,mx=new M,gx=new an(0,0,0,"YXZ"),Ya=0,Vf=new Je,xx=[null,null];function Sh(){return .24+W.arms*.036}function XT(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=qe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=qe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=qe.lerp(r[2],i,s),n.skin.pose(r,!W.body)}var en=["left","right"].map(n=>{let e=yu(n,kT,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Rt.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new Je},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new Je,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),mh=new Iu(M,en,O0),Dx=_u(GT,en.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of en){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var ds=Dx.mesh;Rt.add(ds);function qT(n,e){if(W.body){Vf.copy(ds.quaternion).invert();for(let t=0;t<en.length;t++){let i=en[t];xx[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(ds.position).applyQuaternion(Vf),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Vf))}Dx.pose(xx,Sh(),n,e,W.hands)}}var Vn=[["Cube",new Qe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new kt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new fa(.29),"#d8ae53",0,1],["Brique",new Qe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Qe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new kt(.6,2),"#dbab58",.6,3.7],["Coco",new kt(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:ho(e,i),material:new It({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:Oi(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of f0()){let i=ho(n??t.geo,e);Vn.push({...t,shape:i,lowShape:i})}var Ux=[0,1,2,3,4,5],Nx=[7,8,9,10,11,12,13,14],il=15,yx=Oi(new M(.13,.088,.115)),YT=new Qe(.26,.176,.23),ZT=new It({color:"#536771",roughness:.36,metalness:.28});Vn[il]={name:"Cam\xE9ra du spectateur",geo:YT,material:ZT,shape:yx,lowShape:yx,mass:1.2};var{props:jT,animate:JT}=m0(),KT=b0(bh).slice(0,36),cp=[],Qa=[];function Fx(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=ho(t??s.geo,i);e.push(Vn.length),Vn.push({...s,shape:r,lowShape:r})}}Fx(jT,cp);Fx(KT,Qa);var up=[...Ux,...Nx,...cp,...Qa];Vn[8].properties={supportWhileHeld:!0};Vn[11].properties={supportWhileHeld:!0};function $T(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Vn)n.supportAxis=$T(n);function QT(n){let e=new Be(new Xt(.058,.074,.1,12).rotateX(Math.PI/2),new It({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new Wt(.048,12),new bt({color:"#7bd7ed",side:Gt}));t.position.z=-.203,n.add(t);let i=new Be(new Qe(.045,.013,.012),new bt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function Bx(n,e=!1){let t=Vn[n];if(!t)return null;let i=new Be(t.geo,e?Ou(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===il&&QT(i),i}var St=[],ew=[],ms={held:null},bo=new Map,ki=0,tw=1,js=new Je,kf=new Je,Za=new M,Th=new M,$s=new M,Ox=new M,zx=new M;function nw(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Th.set(0,0,-1).applyAxisAngle(Lt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(Za.copy(n).addScaledVector(Th,r),Za.y+=.15,!ka(n,Za,Math.min(.2,t*.5),er,Ox,zx)&&!St.some(o=>o.mesh.position.distanceToSquared(Za)<(t+o.radius+.07)**2))return Za}}return null}function nr(n,e,t,i=!1){let s=Vn[n];if(!s)return null;if(!e&&(t?$s.set(t.x,t.y,t.z):tt.xr.isPresenting?$s.copy(At):Zt.getWorldPosition($s),e=nw($s,t?.yaw??Vi,s.shape.radius),!e))return i||mi("Aucun espace libre pour cet objet."),null;let r=Bx(n);r.position.copy(e),Rt.add(r);let o=W.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:tw++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:W.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new Je,shadow:Tt.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===il,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),St.push(a),Ga(a,Tt.boxes),a}function Vx(){for(let n of en)si(n,!1);si(ms,!1);for(let n of bo.values())si(n,!1)}function Lh(){Vx();for(let n of St)Rt.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();St.length=0,bo.clear()}function kx(){up.slice(0,Mf.length).forEach((n,e)=>{let{x:t,z:i}=Mf[e];nr(n,new M(t,.8,i))})}kx();function si(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+W.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function So(){Vx();for(let n of St)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function Wi(){ut.position.copy(np),gt=qe.degToRad(xt.yaw),hs=0,ut.rotation.y=gt,Pn.set(0,0,0),fh=!1,Js=!1,dh=!1,mh.reset();for(let n of en)n.valid=!1,si(n,!1)}So();function wh(){return W.auto?Math.min(W.shadowQuality,jt):W.shadowQuality}function el(){return W.auto?Math.min(W.lightQuality,jt):W.lightQuality}function Hi(){let n=W.texturePower;Tt.visual(jt,W.shadows?wh():0,el(),W.reflections,W.bloom,W.textures,2**(n-1),W.lightmap),xt.refreshMaterials?.(),tt.shadowMap.needsUpdate=!0,Tt.setTimeOfDay(dt.remoteLight??W.timeOfDay-1),Jf=Eh.slice(0,el()>=8?3:el()>=4?2:1),Ap.value=W.shaderMode-1;let e=tt.xr.isPresenting&&tt.xr.getBaseLayer?.()?.fixedFoveation!=null;Tt.focus(W.focus&&!e,W.focusStrength,W.focusSize),tt.toneMappingExposure=.58+W.exposure*.114,uy.value=.55+W.contrast*.09,hy.value=W.saturation*.2,dy.value=(W.warmth-5)*.022,tt.xr.setFoveation(W.focus?qe.clamp((W.focusStrength+1)*.105+(5-W.focusSize)*.028+(W.auto?(7-jt)*.045:0),0,1):0),tt.xr.isPresenting||hp(),xn=!0,yi.redraw()}function hp(){tt.xr.isPresenting||(tt.setPixelRatio(Math.min(devicePixelRatio,1.75)*(.53+jt*.047)),tt.setSize(innerWidth,innerHeight,!1),Zt.aspect=innerWidth/innerHeight,Zt.updateProjectionMatrix())}addEventListener("resize",hp);var Mo=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Zf=["Naturel","Cellulo","Affiche","R\xE9tro"],dp={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function iw(n){Object.assign(W,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},dp[n]),jt=W.quality,xo=yo=go=0,Hi()}var To=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Retour au d\xE9part",Wi]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",So]]],["Rendu",[]]],fp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function pp(){return Dt===2?fp[op][1]:Dt===3?Wx[ap][1]:Dt===4?vp[lp][1]:To[Dt][1]}function Gx(n){Dt=n,xn=!0}var Ah=null,mp=[],gh=0,jf=0,gp=null,xp=!1,yp=0,_p=0,Hx={},Eh=Array.from({length:3},()=>{let n=new ya("#ffffff",0,22,1.6);return n.visible=!1,Rt.add(n),{light:n,mesh:null,distance:1/0}}),Jf=Eh,Ch=new M;function _x(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(Ch);if(e>34**2)return;let t=Jf[0];for(let i of Jf)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function sw(n){n?Zt.getWorldPosition(Ch):Ch.copy(At);for(let t of Eh)t.mesh=null,t.distance=1/0;if(n)dt.forEachReplica(_x);else if(W.objects)for(let t of St)t.materialStyle===3&&_x(t.mesh);let e=20+el()*.75;for(let{light:t,mesh:i}of Eh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Dh(){let n=mp.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;Ah={game:"Gorilla Lab",version:"r26",time:new Date().toISOString(),mode:xp?"VR":"PC",settings:{...W},qualityActive:jt,performance:{fps:Ks,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:gp,renderer:Hx,terrainSeed:Tt.hillSeed,map:xt.active?{name:xt.name,pieces:xt.nodes}:null,objects:{total:St.length,held:St.filter(t=>t.owner).length,frozen:St.filter(t=>t.frozen).length},cloud:{role:dt.role,connected:dt.connected,replicas:dt.replicaCount},targetScore:yi.score(),locomotion:{trackedFrames:_p,contactFrames:yp,launchCount:ip,lastLaunch:sp,standingHeight:Number.isFinite(vo)?vo:null,viewOffset:gi}},document.querySelector("#download-report").disabled=!1,xn=!0}function rw(){Ah||Dh();let n=URL.createObjectURL(new Blob([JSON.stringify(Ah,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=rw;document.querySelector("#capture-report").onclick=Dh;To[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Capturer un rapport",Dh]);var ow=Array.from({length:Math.ceil(Qa.length/8)},(n,e)=>["Atelier"+(Qa.length>8?" "+(e+1):""),Qa.slice(e*8,e*8+8)]),Wx=[["Basiques",Ux],["D\xE9taill\xE9s",Nx],["Anim\xE9s",cp],...ow].map(([n,e])=>[n,[...e.map(t=>[Vn[t].name,()=>sy(t)]),["Tout retirer",iy]]]);To.push(["Spawn",[]]);var vp=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{xt.blank(),W.mapEdit=!0}],["Annuler placement",()=>xt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>xt.recenter(At.x,ut.position.y,At.z,Vi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{xt.reset(),W.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>bx(!1)],["Utiliser comme t\xEAte",()=>bx(!0)]]]];To.push(["Carte",[]]);var aw=document.querySelector("#section"),Gf=document.querySelector("#settings"),lw=document.querySelector("#readings");function Mn(n,e){if(n==="shaderMode"){W.shaderMode=(W.shaderMode-1+e+Zf.length)%Zf.length+1,Ap.value=W.shaderMode-1,xn=!0;return}if(n==="timeOfDay"){W.timeOfDay=(W.timeOfDay-1+e+3)%3+1,Hi();return}let t={mapMode:9,mapShape:5,mapMaterial:Nf.length,mapSurface:4,mapTurn:8,mapTexture:Pu.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];W[n]=(W[n]-1+e+i)%i+1,xn=!0;return}if(n==="mapEdit"&&!W.mapEdit&&!xt.active&&xt.blank(),n==="toolMode"){W.toolMode=(W.toolMode-1+e+Mo.length)%Mo.length+1,tt.xr.isPresenting||mi("Outil \xB7 "+Mo[W.toolMode-1]),xn=!0;return}if(n==="preset"){let i=Object.keys(dp);W.preset=(W.preset-1+e+i.length)%i.length+1,iw(i[W.preset-1]);return}if(typeof W[n]=="boolean"?W[n]=!W[n]:W[n]=qe.clamp(W[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of en)i.valid=!1,i.surface=null;if(n==="quality"&&(W.auto=!1,jt=W.quality),n==="auto"&&!W.auto&&(jt=W.quality),n==="movement"||n==="collisions")for(let i of en)i.surface=null;if(n==="objects"&&!W.objects&&So(),n==="toolActive"&&!W.toolActive)for(let i of en)i.held?.toolHold&&si(i,!1);n==="preciseHitboxes"&&Xx(),Hi()}function Xx(){for(let n of St)n.precise=W.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||Ga(n,Tt.boxes)}function qx(){let n=(Dt===2?fp:Dt===4?vp:null)?.flatMap(e=>e[1])??pp();for(let[,e]of n)typeof e=="string"&&(W[e]=FT[e]);Dt===0&&Wi(),Dt===1&&(Xx(),So()),Dt===3&&iy(),Dt===2&&(jt=W.quality),Hi()}function ja(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),sl(),xn=!0},t}function Yx(n){return n==="preciseHitboxes"?W[n]?"High":"Low":W[n]?"Actif":"Coup\xE9"}function Mp(n){if(n==="mapTexture")return W[n]===1?"Aucune":Pu[W[n]-2];if(n==="terrainResolution")return[8,16,32,48][W[n]-1]+"\xB2";if(n==="shaderMode")return Zf[W.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=W[n],t=n==="shadowQuality"?wh():el();return t===e?e+"/10":e+"/10 \xB7 "+t+" auto"}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][W.timeOfDay-1]:n==="mapMode"?Qx[W.mapMode-1]:n==="mapShape"?fw[W.mapShape-1]:n==="mapSurface"?pw[W.mapSurface-1]:n==="mapMaterial"?Nf[W.mapMaterial-1]:n==="mapTurn"?(W.mapTurn-1)*45+"\xB0":n==="toolMode"?Mo[W.toolMode-1]:n==="preset"?Object.keys(dp)[W.preset-1]:n==="texturePower"?[2**(W[n]-1),2**(W[n]-1)].join("\xD7"):W[n]}function Kf(){return Dt===2?fp:Dt===3?Wx:vp}function Zx(){return Dt===2?op:Dt===3?ap:lp}function jx(n){Dt===2?op=n:Dt===3?ap=n:lp=n}function Jx(n){return n===Dh?"Capturer":n===Lh?"Vider":n===Wi||n===So?"R\xE9initialiser":Dt===3?"Cr\xE9er":"Appliquer"}function sl(){if(aw.textContent=To[Dt][0],Kx.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===Dt))),Gf.replaceChildren(),Dt>=2){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),Kf().forEach(([e],t)=>{let i=ja(e,()=>jx(t));i.setAttribute("aria-pressed",String(Zx()===t)),n.append(i)}),Gf.append(n)}for(let[n,e]of pp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(ja(Jx(e),e)):typeof W[e]=="boolean"?i.append(ja(Yx(e),()=>Mn(e,1))):i.append(ja("\u2212",()=>Mn(e,-1)),document.createTextNode(" "+Mp(e)+" "),ja("+",()=>Mn(e,1))),t.append(i),Gf.append(t)}}var Kx=document.querySelectorAll("[data-page]");Kx.forEach((n,e)=>n.onclick=()=>{Gx(e),sl()});document.querySelector("#restore").onclick=()=>{qx(),sl()};sl();function $x(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Wn(r);a.colorSpace=pt;let l=new Be(new Jt(t,i),new bt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var gn=$x(640,652,.84,.86,Rt);gn.mesh.visible=!1;var zi=$x(416,84,.32,.065,Rt);zi.mesh.visible=!1;var po=new Vt(75,1,.07,140),Yn=new Pa(new Jt(1.7,1.95),{color:16054015,textureWidth:256,textureHeight:256,clipBias:.004,multisample:0}),cw=new M(0,0,-1),uh=new M,vx=new M;Yn.position.set(Vu.x,Vu.y,Vu.z);Yn.rotation.y=Math.PI;Rt.add(Yn);var bp=new Be(new Qe(1.8,2.03,.1),new qt({color:"#344650"}));bp.position.copy(Yn.position).z+=.064;Rt.add(bp);var uw=Yn.onBeforeRender.bind(Yn);Yn.onBeforeRender=()=>{};Yn.visible=!1;var Hf=-1/0;function hw(n,e){if(po.position.copy(At),e){let i=e.transform.orientation;po.quaternion.set(i.x,i.y,i.z,i.w).premultiply(ph.setFromAxisAngle(Lt,gt))}else Zt.getWorldQuaternion(po.quaternion);vx.set(0,0,-1).applyQuaternion(po.quaternion),uh.subVectors(Yn.position,At);let t=uh.length();if(Yn.visible=!xt.active&&W.reflections&&t<4&&uh.dot(cw)<-.15&&uh.multiplyScalar(1/Math.max(.001,t)).dot(vx)>.66,!Yn.visible){Hf=-1/0;return}if(!(n-Hf<45)){Hf=n,po.updateMatrixWorld(!0),Yn.updateMatrixWorld(!0),ps.visible=W.body;try{uw(tt,Rt,po)}finally{ps.visible=!1}}}var pi=new Ls,zn=new M,In=new M,$f=new M,hh=new M,Mx=new M,$a=null,xh=null,yh=null,dw=new Set(Rt.children),yi=tx(Rt,Tt.boxes,{spawn:(n,e)=>{W.objects||(W.objects=!0),nr(n,e)},clear:Lh,resetPlayer:Wi,resetObjects:So,resetTree:()=>{for(let n of yi.coconuts)n.visible=!0},quality:()=>jt+"/10",resolution:()=>W.resolution+"/10 \xB7 relancer VR",textureSize:()=>Mp("texturePower"),qualityNext:()=>{W.quality>=10&&(W.quality=0),Mn("quality",1)},resolutionNext:()=>{W.resolution>=10&&(W.resolution=0),Mn("resolution",1)},textureNext:()=>{W.texturePower>=12&&(W.texturePower=0),Mn("texturePower",1)},hitbox:()=>Mn("preciseHitboxes",1),movement:()=>Mn("movement",1)}),Qx=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],fw=["Bloc","Rampe","Mur","Dalle","Terrain"],pw=["Normale","Glace","Caoutchouc","Lune"],xt=$0({scene:Rt,arena:Tt,boot:np,onReset:n=>{Lh(),Wi(),gt=qe.degToRad(n),xt.active||kx()},onVisual:Hi,getLevel:()=>jt,defaultObjects:[...Tt.builtObjects,...Rt.children.filter(n=>!dw.has(n)),bp]}),dt=jg({scene:Rt,currentMap:()=>(xt.signature||"arena-r25-"+Tt.hillSeed)+WT,seedArena:n=>Tt.setHillSeed(n),makeReplica:n=>{let e=Bx(n,!0);return e&&rl(e.material),e},onAction:vw,applyLight:n=>Tt.setTimeOfDay(n??W.timeOfDay-1),applyCoconuts:n=>yi.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function bx(n){let e=xt.modelPieces();if(!e.length||e.length>Hs.parts){mi("Compose un mod\xE8le de 1 \xE0 "+Hs.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=vf(localStorage);if(t.models.length>=Hs.models){mi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:W.modelGrab,frozen:W.modelFrozen,collidable:W.modelCollidable,supportWhileHeld:W.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?j0[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(yf,JSON.stringify(_f(t))),mi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{mi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var Wf=new Map;function mw(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][W.mapShape-1],e=to({detail:[8,16,32,48][W.terrainResolution-1],amplitude:(W.terrainAmplitude-1)*.34,frequency:.05+W.terrainFrequency*.025,seed:W.terrainSeed,grass:(W.terrainGrass-1)/9,shrub:(W.terrainShrub-1)/9}),t=W.mapTexture-2;return t>=0&&!Wf.has(t)&&Wf.set(t,a0(t).toDataURL("image/webp",.83)),sh({...n,material:W.mapMaterial-1,yaw:W.mapShape===5?0:(W.mapTurn-1)*45,...Ff[Object.keys(Ff)[W.mapSurface-1]],texture:Wf.get(t)??null,terrain:W.mapShape===5||W.mapMode===9?e:null,brushRadius:.5+W.brushRadius*.5,brushStrength:W.brushStrength*.15})}function gw(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-gi,r.z).applyAxisAngle(Lt,gt).add(ut.position),xi.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(xi).applyAxisAngle(Lt,gt),xt.edit(zn,In,i,{mode:W.mapMode,piece:mw(),head:At,feet:ut.position.y}),i&&(xn=!0)}function xw(n){if(xt.active||!n.valid||n.held||Qt)return;let e=null;for(let t of yi.targets)if(t.getWorldPosition(Mx),!(n.mesh.position.distanceToSquared(Mx)>.11**2)&&(t.worldToLocal(hh.copy(n.mesh.position)),Math.abs(hh.x)<t.userData.touchWidth*.5+.025&&Math.abs(hh.y)<.095&&Math.abs(hh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function ey(n,e=null){n.getWorldPosition($f),n.visible=!1,W.objects||(W.objects=!0);let t=nr(6,$f);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function Qf(n,e,t){if(xt.active)return;pi.set(n,e),pi.far=5.5;let i=pi.intersectObjects([...yi.targets,...yi.coconuts.filter(r=>r.visible)],!1);pi.far=1/0;let s=i[0];s&&(tr.visible=!0,tr.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):ey(s.object,e),sl()))}var Sx=new M,ty=new Je,Sp=vu(Rt),IC=Sp.mesh,_h=new M,Gi=new Je,Rh=new M,_o={mode:0,position:Rh,quaternion:Gi,end:_h},Tx=new M,yw=new M,wx=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Ph=new M,_w={position:Rh,quaternion:Gi,pressure:[.1,.66,.08]},Xf=new M,Ih=new Je;function ny(n){ms.held&&si(ms,n)}function iy(){dt.role==="player"||dt.role==="pc"?mi("Le joueur VR g\xE8re la remise \xE0 z\xE9ro."):Lh()}function sy(n){if(W.objects=!0,dt.role==="pc"){mi("Commence par rejoindre le salon en joueur.");return}dt.role==="player"?dt.sendAction({type:"spawn",typeId:n})||mi("Attends la connexion au joueur VR."):nr(n)}function vw(n,e){if(!W.objects||!e)return;if(n.type==="spawn"){up.includes(n.typeId)&&nr(n.typeId,null,e);return}let t=St.find(l=>l.netId===n.objectId);if(!t)return;let i=bo.get(e.id);if(i||(i={held:null,controllerRotation:new Je},bo.set(e.id,i)),n.type==="release"){i.held===t&&si(i,!0);return}let s=Math.hypot(t.mesh.position.x-e.x,t.mesh.position.y-e.y,t.mesh.position.z-e.z);if(s>10)return;let r=$s.set(e.x,e.y,e.z);if(ka(r,t.mesh.position,.01,er,Ox,zx))return;let o=n.type==="hold"?1:n.mode;if(o===1&&i.held)return;let a=e.avatar?.tool?.quaternion??e.avatar?.head;a&&i.controllerRotation.copy(a),Tp(t,o,i,qe.clamp(s,1.1,5))}function Mw(n){if(tt.xr.isPresenting)for(let t of en)t.valid&&t.held&&qf(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of bo){let s=dt.getPeer?.(t);if(!s){si(i,!1),bo.delete(t);continue}let r=i.held;if(!r)continue;let o=s.avatar?.head??s.avatar?.tool?.quaternion;o&&i.controllerRotation.copy(o),$s.set(s.x,s.y,s.z),Th.set(0,0,-1).applyQuaternion(i.controllerRotation),qf(r,$s,Th,i.controllerRotation,n)}let e=ms.held;e&&(Zt.getWorldPosition(Ph),Zt.getWorldDirection(Sx),Zt.getWorldQuaternion(Gi),qf(e,Ph,Sx,Gi,n))}function qf(n,e,t,i,s){n.toolHold?Xf.copy(e).addScaledVector(t,n.toolDistance):Xf.copy(n.offset).applyQuaternion(i).add(e),Ih.multiplyQuaternions(i,n.relativeRotation),z0(n,Xf,Ih,er,s)}function ry(n){return n.customMaterial||(n.mesh.material=Ou(n.mesh.material),n.customMaterial=!0,rl(n.mesh.material)),n.mesh.material}function bw(n){let e=ry(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function oy(n,e,t){pi.set(n,e),pi.far=9;let i=pi.intersectObjects(t,!1)[0];return pi.far=1/0,_h.copy(n).addScaledVector(e,i?.distance??9),ka(n,_h,.006,er,Tx,yw)?(_h.copy(Tx),null):i}function Tp(n,e,t,i){if(e===1){if(t?.held){t===ms?ny(!0):si(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??Gi;n.relativeRotation.multiplyQuaternions(ty.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)Rt.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),St.splice(St.indexOf(n),1);else if(e===4&&!n.protected){Ph.copy(n.mesh.position).addScaledVector(Lt,n.radius*2+.08);let s=nr(n.netType,Ph);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=Ou(n.mesh.material),s.customMaterial=!0,rl(s.mesh.material)),Ga(s,Tt.boxes))}else if(e===5){let s=ry(n);s.color.set(wx[n.paint++%wx.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,bw(n));xn=!0}}var fs=[];function ay(n,e,t,i){if(!W.objects)return;let s=dt.role==="player";if(fs.length=0,s)dt.forEachReplica(a=>fs.push(a));else for(let a of St)!a.owner&&a.mesh.visible&&fs.push(a.mesh);let r=oy(n,e,fs);if(_o.mode=W.toolMode,i?(Rh.copy(i.mesh.position),Gi.copy(i.controllerRotation)):(Zt.getWorldQuaternion(Gi),Rh.set(.16,-.17,-.43).applyQuaternion(Gi).add(n)),Sp.update(_o),!t)return;if(s){if(W.toolMode===1&&ki)dt.sendAction({type:"release",objectId:ki}),ki=0;else if(r){let a=r.object.userData.netId;dt.sendAction({type:"tool",mode:W.toolMode,objectId:a})&&W.toolMode===1&&(ki=a)}return}let o=r&&St.find(a=>a.mesh===r.object);Tp(o,W.toolMode,i??ms,r?qe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function Sw(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;zn.set(o.x,o.y-gi,o.z).applyAxisAngle(Lt,gt).add(ut.position),xi.set(a.x,a.y,a.z,a.w),In.set(0,0,-1).applyQuaternion(xi).applyAxisAngle(Lt,gt),ay(zn,In,s,i)}function Tw(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-gi,r.z).applyAxisAngle(Lt,gt).add(ut.position),xi.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(xi).applyAxisAngle(Lt,gt),Qf(zn,In,i)}var tr=HT(Rt,new bt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);tr.visible=!1;var ep=[],Qs=null;function Ax(){let n=gn.ctx;ep=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(Ks+" FPS   \xB7   Q "+jt+"/10   \xB7   "+(W.auto?"AUTO":"MANUEL"),390,40);function e(i,s,r,o,a,l,c="#344b59"){n.fillStyle=c,n.fillRect(i,s,r,o),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(a,i+r/2,s+o/2+7),n.textAlign="left",ep.push({x:i,y:s,w:r,h:o,action:l,label:a})}To.forEach(([i],s)=>e(25+s*119,61,114,44,i,()=>Gx(s),Dt===s?"#586d53":"#334b58"));let t=Dt>=2;t&&Kf().forEach(([i],s)=>{let r=Zx()===s,o=Math.min(144,Math.floor(586/Kf().length)-4);e(25+s*(o+4),114,o,38,i,()=>jx(s),r?"#546947":"#263d49")}),pp().forEach(([i,s],r)=>{let o=(t?166:113)+r*40;r%2===0&&(n.fillStyle="#20323e",n.fillRect(25,o,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(i,37,o+26),typeof s=="function"?e(406,o,206,36,Jx(s),s):typeof W[s]=="boolean"?e(406,o,206,36,Yx(s),()=>Mn(s,1),W[s]?"#415c4c":"#344b59"):(e(359,o,44,36,"\u2212",()=>Mn(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Mp(s)),508,o+25,156),n.textAlign="left",e(568,o,44,36,"+",()=>Mn(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",qx),e(325,579,287,44,"Fermer",()=>Qt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(wp||(Dt===4&&xt.status?xt.status.slice(0,64):Ah?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),gn.texture.needsUpdate=!0}function ww(n){Qt=!Qt,Qt&&(Px=n,px.set(0,0,-1).applyAxisAngle(Lt,Vi),gn.mesh.position.copy(At).addScaledVector(px,1.25),gn.mesh.position.y+=.08,gn.mesh.lookAt(At),gn.mesh.updateMatrixWorld(!0)),xn=!0}function Aw(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-gi,r.z).applyAxisAngle(Lt,gt).add(ut.position),xi.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(xi).applyAxisAngle(Lt,gt),pi.set(zn,In);let a=pi.intersectObject(gn.mesh)[0];if(a&&(tr.visible=!0,tr.position.copy(a.point).addScaledVector(In,-.012),i)){let l=a.uv.x*gn.w,c=(1-a.uv.y)*gn.h;ep.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),xn=!0}}var sn=new Set,Ex=document.querySelector("#game-settings"),ly=document.querySelector("#open-settings"),tp=document.querySelector("#game-hint"),vh=0;function mi(n){tp.textContent=n,tp.hidden=!1,vh=performance.now()+2400,wp=n,xn=!0}var wp="";function Uh(n){let e=n??!Ex.hidden;Ex.hidden=e,ly.hidden=!e,e&&tt.domElement.focus()}ly.onclick=()=>Uh(!1);document.querySelector("#close-settings").onclick=()=>Uh(!0);var tl=l0({canvas:tt.domElement,enabled:()=>!tt.xr.isPresenting,onLook:(n,e,t)=>{gt-=n*t,hs=qe.clamp(hs-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&sn.add(e)},onMenu:()=>Uh()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!tt.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Uh();return}n.code==="Space"&&n.preventDefault(),!(n.repeat&&["KeyC","KeyE","KeyF","KeyG","KeyT","Space"].includes(n.code))&&(sn.add(n.code),n.code==="KeyR"&&Wi())}});addEventListener("keyup",n=>sn.delete(n.code));addEventListener("blur",()=>{sn.clear(),tl.clear()});function Ew(n,e){if(!W.objects)return!1;let t=dt.role==="player";if(t&&ki)return dt.sendAction({type:"release",objectId:ki}),ki=0,!0;if(ms.held)return ny(!0),!0;if(fs.length=0,t)dt.forEachReplica(s=>fs.push(s));else for(let s of St)!s.owner&&s.mesh.visible&&fs.push(s.mesh);let i=oy(n,e,fs);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;dt.sendAction({type:"hold",objectId:s})&&(ki=s)}else Zt.getWorldQuaternion(Gi),Tp(St.find(s=>s.mesh===i.object),1,ms,Math.max(.75,i.distance));return!0}var Yf=[];function Cw(){return Yf.length=0,dt.forEachReplica(n=>{let e=n.userData.netType;if(!Vn[e]||Vn[e].properties?.collidable===!1||n.userData.held)return;let t=Vn[e],i=W.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=W.preciseHitboxes,Yf.push(s)}),Yf}function Rw(){dt.role!=="vr"||!dt.remoteSpectator||St.some(n=>n.netType===il)||nr(il,null,null,!0)}var nl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{nl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});nl.onclick=async()=>{let n;try{nl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),tt.xr.setFramebufferScaleFactor(.45+W.resolution*.055),await tt.xr.setSession(n),Hi(),Ka=n.frameRate||72,Ja=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Ja.includes(120)?120:Ja.find(t=>t>=100)??Ja.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Ka=n.frameRate||Ka,rp=Math.min(100,Ka),W.auto&&(jt=Math.min(jt,4),go=xo=yo=0),mp=[],gh=0,jf=0,yp=_p=ip=0,sp=null,xp=!0,gp=null,vo=NaN,gi=0,Wi(),Hi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),nl.disabled=!1,document.querySelector("#status").textContent=e.message}};tt.xr.addEventListener("sessionend",()=>{nl.disabled=!1,Qt=!1,gn.mesh.visible=!1,zi.mesh.visible=!1,document.body.classList.remove("immersive"),Wi(),hp()});function cy(n){if(!xt.active){for(let e of Tt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(xt.active){let e=-1/0,t;for(let i of Tt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function Pw(n,e,t){let i=[...n.session.inputSources];for(let s of en){let r=i.find(x=>x.handedness===s.side&&x.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.mesh.visible=!!o&&W.hands&&!W.body,!o){s.valid=!1,s.surface=null,si(s,!1);continue}let a=o.transform.position;us.set(a.x,a.y-gi,a.z),s.target.copy(us).applyAxisAngle(Lt,gt).add(ut.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(js.set(c.x,c.y,c.z,c.w).premultiply(xi.setFromAxisAngle(Lt,gt)),s.controllerRotation.copy(js),s.mesh.quaternion.copy(js).multiply(BT.setFromAxisAngle(OT,s.side==="left"?Math.PI/2:-Math.PI/2)),XT(s,r.gamepad?.buttons??[],t),!Qt&&l&&!s.grip&&W.objects&&!s.held){let x=null,g=.15,m=yi.coconuts.find(T=>T.visible&&T.getWorldPosition($f).distanceToSquared(s.target)<.26**2);m&&(x=ey(m));for(let T of St){if(T.owner||!T.grabbable||T.mesh.position.distanceToSquared(s.target)>(T.radius+.18)**2)continue;let S=B0(s.target,T);!m&&S<g&&(g=S,x=T)}x&&!s.held&&(s.held=x,x.owner=s,x.frozen=!1,kf.copy(js).invert(),x.offset.copy(x.mesh.position).sub(s.target).applyQuaternion(kf),x.relativeRotation.multiplyQuaternions(kf,x.mesh.quaternion),x.velocity.set(0,0,0),x.angular.set(0,0,0))}!l&&s.grip&&!s.held?.toolHold&&si(s,!Qt),s.grip=l,s.hasSupport=!1;let u=s.held;if(u&&!u.toolHold&&u.collidable&&u.spec.supportAxis){Ih.multiplyQuaternions(js,u.relativeRotation),s.supportOffset.copy(u.spec.supportAxis).applyQuaternion(Ih),us.copy(u.offset).applyQuaternion(js);let x=s.supportOffset.dot(us);(Math.abs(x)>.008?x<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(us),s.hasSupport=!0}if(s.held?.toolHold){let g=n.getPose(r.targetRaySpace,e)?.transform.orientation;g?s.aimDirection.set(0,0,-1).applyQuaternion(ty.set(g.x,g.y,g.z,g.w)).applyAxisAngle(Lt,gt):s.aimDirection.set(0,0,-1).applyQuaternion(js)}let d=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");d&&!s.menu&&ww(s.side),s.menu=d;let f=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&f&&!s.toolButton&&!Qt&&Mn("toolActive",1),s.toolButton=f;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&W.toolActive&&!Qt&&Mn("toolMode",1),s.toolCycle=h;let p=!!r.gamepad?.buttons[0]?.pressed;if(Qt){let x=p&&!s.trigger;(x||!Qs||!Qs.click&&s.side!==Px)&&(Qs={source:r,click:x})}else!Qt&&s.side==="right"&&W.mapEdit?yh={source:r,click:p&&!s.trigger}:!Qt&&s.side==="right"&&W.toolActive?xh={source:r,hand:s,click:p&&!s.trigger}:!Qt&&(s.side==="right"||p&&!s.trigger)&&($a={source:r,click:p&&!s.trigger});s.trigger=p}}function Iw(n,e,t,i){let s=!!t,r=.43+W.size*.088;if(s){let f=t.transform.position;Number.isFinite(vo)||(vo=f.y),gi=qe.clamp(vo-r,-.65,1.7),Mh.position.y=-gi,qn.set(f.x,f.y-gi,f.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(fh=!1),Math.abs(p)>.67&&!fh&&!Qt&&(fh=!0,Xn.copy(qn).applyAxisAngle(Lt,gt),gt-=Math.sign(p)*Math.PI/4,ax.copy(qn).applyAxisAngle(Lt,gt),ut.position.add(Xn.sub(ax)),mh.reset(),dh=!1)}else Mh.position.y=0,qn.set(0,r,0),Zt.position.copy(qn),Zt.rotation.set(hs,0,0,"YXZ");if(At.copy(qn).applyAxisAngle(Lt,gt).add(ut.position),s){let f=t.transform.orientation;ph.set(f.x,f.y,f.z,f.w),Zs.set(0,0,-1).applyQuaternion(ph),Zs.x**2+Zs.z**2>.018&&(Vi=gt+Math.atan2(-Zs.x,-Zs.z))}else Vi=gt;let o=cy(At),a=9.81*(W.gravity/5)*(o?.gravity??1);if(cx.copy(ut.position),s){Pw(n,e,i),en.some(f=>f.valid)&&_p++,ch.length=0;for(let f of er)ch.push(f);if(W.collisions&&W.objects)for(let f of St)f.handCollider&&!f.owner&&ch.push(f.handCollider);mh.move({head:At,dt:i,gravity:a,settings:W,boxes:ch,velocity:Pn,movement:qa,reach:Sh()*2+.16})}else{Pn.y-=a*i;let f=Number(sn.has("KeyD"))-Number(sn.has("KeyA")||sn.has("KeyQ"))+tl.movement.x,h=Number(sn.has("KeyS"))-Number(sn.has("KeyW")||sn.has("KeyZ"))+tl.movement.z,p=sn.has("ShiftLeft")||sn.has("ShiftRight");Ys.set(f,0,h).clampLength(0,1).applyAxisAngle(Lt,gt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(o?.friction<.1?2:Js?13:4));Pn.x=qe.lerp(Pn.x,Ys.x,x),Pn.z=qe.lerp(Pn.z,Ys.z,x),(tl.consumeJump()||sn.delete("Space"))&&Js&&(Pn.y=3.1+W.jump*.18),qa.copy(Pn).multiplyScalar(i)}if(W.collisions&&dh&&(us.copy(At).add(qa),ka(ux,us,hx,er,Xn,ah)&&Ys.subVectors(us,Xn).dot(ah)<0&&qa.copy(Xn).sub(At)),ut.position.add(qa),At.copy(qn).applyAxisAngle(Lt,gt).add(ut.position),Js=!1,W.collisions){let f=dt.role==="player"?Cw():St;dx.set(0,0,1).applyAxisAngle(Lt,Vi);let h=s?-Zs.y:Math.max(0,-Math.sin(hs)),p=s?.17+qe.smoothstep(h,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,qn.y*.57):qn.y,m=x===2?hx:x===0?.18:.17;if(Xn.set(At.x,ut.position.y+g,At.z),x<2&&Xn.addScaledVector(dx,p),lx.copy(Xn),Js=Df(Xn,m,Tt.boxes,Pn,0,3+W.grip,i)||Js,W.objects)for(let T of f)T.blocksPlayer&&!T.owner&&Y0(Xn,m,T,Pn,ah)&&ah.y>.6&&(Js=!0);Df(Xn,m,Tt.boxes,Pn,0,3+W.grip,i),Ys.subVectors(Xn,lx),ut.position.add(Ys),At.add(Ys)}}if(Bf.subVectors(ut.position,cx),s){let f=mh.finish(Bf,Pn);f.contacts&&yp++,f.launched&&(ip++,sp={handSpeed:f.launchSpeed,velocity:Pn.toArray(),t:performance.now()})}(xt.active?ut.position.y<-24||Math.abs(ut.position.x)>155||Math.abs(ut.position.z)>155:ut.position.y<-9||Math.abs(ut.position.x)>33||ut.position.z<-57||ut.position.z>13)&&(Wi(),At.copy(qn).applyAxisAngle(Lt,gt).add(ut.position)),ux.copy(At),dh=!0,ut.rotation.y=gt,s&&Zt.position.set(0,0,0);for(let f of en)s&&f.valid&&f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Bf,f.surface?0:1),s||(f.mesh.visible=!1);let l=Math.min(.3,Math.max(.21,qn.y*.31)),c=.72+W.size*.05,u=Sh()*2*(2/3)/.82;ds.visible=W.body,ds.position.set(At.x,At.y-l-.24*u-.05*Ya,At.z);let d=s?-Zs.y:Math.max(0,-Math.sin(hs));Ya=qe.lerp(Ya,qe.smoothstep(d,.24,.92),1-Math.exp(-i*14)),mx.set(0,0,1).applyAxisAngle(Lt,Vi),ds.position.addScaledVector(mx,.32*Ya),gx.set(-.48*Ya,Vi,0,"YXZ"),ds.quaternion.setFromEuler(gx),ps.position.copy(At),s?ps.quaternion.copy(ph).premultiply(xi.setFromAxisAngle(Lt,gt)):ps.quaternion.setFromEuler(new an(hs,gt,0,"YXZ")),qT(c,u),ut.updateMatrixWorld(!0),Zt.updateWorldMatrix(!0,!1)}function Lw(n,e){if(lh+=n,zf++,go+=n,lh<1||(Ks=Math.round(zf/lh),zf=0,lh=0,xn=!0,lw.textContent=Ks+" FPS \xB7 qualit\xE9 "+jt+"/10 \xB7 "+(W.auto?"auto":"manuel"),!W.auto||go<5))return;go=0;let t=e?Math.min(100,tt.xr.getSession()?.frameRate||Ka):60;e&&(rp=t),xo=Ks<t-4?xo+1:0,yo=Ks>=t-1?yo+1:0;let i=qe.clamp(jt+(xo>=1?-1:yo>=2?1:0),1,10);i!==jt&&(jt=i,go=xo=yo=0,Hi())}Tt.bakeLightmap();var uy={value:1},hy={value:1},dy={value:0},Ap={value:0},Cx=new WeakSet;function rl(n){if(!n||Cx.has(n))return;Cx.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:uy,uPhotoSaturation:hy,uPhotoWarmth:dy,uLabShader:Ap}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of Tt.materials)rl(n);Rt.traverse(n=>{n.isMesh&&![gn.mesh,zi.mesh,tr].includes(n)&&rl(n.material)});Hi();var Rx=new URLSearchParams(location.search);if(Rx.has("map"))xt.loadURL(Rx.get("map"));else try{let n=localStorage.getItem(Wa);n&&xt.load(n)}catch(n){xt.inform(n.message)}tt.setAnimationLoop((n,e)=>{let t=Of?Math.max(0,(n-Of)/1e3):.014;Of=n;let i=Math.min(.035,t),s=tt.xr.isPresenting,r=tt.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if(JT(n*.001),vh&&n>vh&&(tp.hidden=!0,vh=0,wp=""),tr.visible=!1,Sp.hide(),_o.mode=0,er=W.collisions?Tt.boxes:zT,Qs=null,$a=null,xh=null,yh=null,xt.clearGhost(),gn.mesh.visible=!1,!s&&dt.role==="pc"){ds.visible=!1;for(let h of en)h.mesh.visible=!1}else Iw(e,r,o,i);let a=!s&&dt.role==="pc",l=a||dt.role==="player";dt.role!=="player"&&(ki=0),l||(Mw(i),Rw());for(let h of St){h.mesh.visible=W.objects&&!l;let{x:p,y:x,z:g}=h.mesh.position;if((xt.active?x<-24||Math.abs(p)>155||Math.abs(g)>155:x<-8||Math.abs(p)>28||g<-57||g>13)&&(h.owner||(h.mesh.position.copy(h.start),h.velocity.set(0,0,0),h.angular.set(0,0,0))),h.shadow.visible=!l&&W.shadows&&wh()<3&&W.objects&&h.mesh.position.y<2,h.shadow.visible){let{x:T,z:S}=h.mesh.position,v=Tt.boxes.find(P=>P.heightfield&&T>=P.xMin&&T<=P.xMax&&S>=P.zMin&&S<=P.zMax),E=v?v.height(T,S):0;h.shadow.position.set(T,E+.006,S)}}for(let h of St)h.beforePhysics.copy(h.mesh.position);if(l||X0(St,Tt.boxes,i,9.81*W.gravity/5,.12+W.bounce*.064,cy),!xt.active&&!l&&yi.updateTarget(St),s&&!Qt)for(let h of en)xw(h);if(Tt.probe.rotation.y+=i*.29,Lw(Math.min(.3,t),s),gn.mesh.visible=s&&Qt,gn.mesh.visible&&xn&&Ax(),gn.mesh.visible&&Qs)Aw(e,r,Qs.source,Qs.click);else if(s&&yh)gw(e,r,yh);else if(s&&xh)Sw(e,r,xh);else if(s&&$a)Tw(e,r,$a.source,$a.click);else if(!s&&!a){Zt.getWorldPosition(zn),Zt.getWorldDirection(In),sn.delete("KeyG")&&(Mn("toolActive",1),W.toolActive&&mi("Outil \xB7 "+Mo[W.toolMode-1])),sn.delete("KeyT")&&Mn("toolMode",1);let h=sn.delete("KeyE");W.toolActive?ay(zn,In,h,null):h&&!Ew(zn,In)?Qf(zn,In,!0):!h&&!l&&Qf(zn,In,!1),sn.delete("KeyF")&&(W.objects=!0,sy(up[0]))}if(zi.mesh.visible=s&&!Qt&&en[0].valid,zi.mesh.visible&&(zi.mesh.position.copy(en[0].mesh.position).y+=.12,zi.mesh.lookAt(At)),xn||n-fx>1100){xn=!1,fx=n,Qt&&Ax();let h=zi.ctx;h.clearRect(0,0,416,84),h.fillStyle="#182632",h.fillRect(0,0,416,84),h.fillStyle="#fff0cf",h.font="bold 25px system-ui",h.fillText(Ks+" FPS     Q "+jt+"/10",17,32),h.font="20px system-ui",h.fillText(W.mapEdit?"\xC9dition : "+Qx[W.mapMode-1]:W.toolActive?"Tool Gun : "+Mo[W.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),zi.texture.needsUpdate=!0}let c=!a&&(dt.role==="player"||s&&dt.role==="vr")?{head:ps.quaternion,hands:s?en.map(h=>h.valid?{position:h.mesh.position,quaternion:h.mesh.quaternion,pressure:h.pressure}:null):[null,_o.mode?_w:null],height:qn.y,armSpan:Sh()*2,light:W.timeOfDay-1,color:Ix,coconuts:yi.coconuts.reduce((h,p,x)=>h|Number(p.visible)<<x,0),tool:_o.mode?_o:null}:null;dt.update({inVR:s,time:n,dt:i,position:At,yaw:a?gt:Vi,pitch:hs,camera:Zt,rig:ut,keys:sn,flat:tl,avatar:c,bodies:W.objects?St:ew}),sw(l),Tt.centerShadows(Ch);let u=25+(10-wh())*(s?7:4);tt.shadowMap.enabled&&n-ox>=u&&(tt.shadowMap.needsUpdate=!0,ox=n),hw(n,o);let d=s&&W.post,f=s&&W.rayTrace;if(NT(f,St),(!d||!UT.render(Rt,Zt,{bloom:W.bloom}))&&tt.render(Rt,Zt),(s||!xp)&&(mp[gh]=t*1e3,gh=(gh+1)%720,n-jf>350)){jf=n;let{calls:h,triangles:p,lines:x,points:g}=tt.info.render;Hx={calls:h,triangles:p,lines:x,points:g,textures:tt.info.memory.textures},s&&(gp={refreshHz:tt.xr.getSession()?.frameRate??null,targetFps:rp,supportedHz:Ja.slice(),foveation:tt.xr.getFoveation()??null,visualEffects:{post:d,bloom:d&&W.bloom,rayTrace:f},eyeViewports:tt.xr.getCamera().cameras.map(m=>({width:m.viewport?.z??null,height:m.viewport?.w??null}))})}});})();
