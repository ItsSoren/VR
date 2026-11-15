(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Um=0,Fd=1,Nm=2;var Ea=1,Fm=2,pi=3,ii=0,cn=1,Ht=2,Ii=0,Ts=1,Yn=2,Bd=3,Od=4,Bm=5,$i=100,Om=101,zm=102,Vm=103,km=104,Gm=200,Hm=201,Wm=202,Xm=203,Jl=204,Kl=205,qm=206,Ym=207,Zm=208,jm=209,Jm=210,Km=211,$m=212,Qm=213,eg=214,Ec=0,Cc=1,Rc=2,As=3,Pc=4,Ic=5,Lc=6,Dc=7,Uc=0,tg=1,ng=2,Li=0,ig=1,sg=2,rg=3,Nc=4,og=5,ag=6,lg=7;var zd=300,Ns=301,Fs=302,Xr=303,Fc=304,Ca=306,di=1e3,Ki=1001,$l=1002,on=1003,cg=1004;var Ra=1005;var an=1006,Bc=1007;var An=1008;var On=1009,Vd=1010,kd=1011,qr=1012,Oc=1013,is=1014,si=1015,mi=1016,zc=1017,Vc=1018,Yr=1020,Gd=35902,Hd=35899,Wd=1021,Xd=1022,En=1023,Er=1026,Zr=1027,kc=1028,Gc=1029,qd=1030,Hc=1031;var Wc=1033,Pa=33776,Ia=33777,La=33778,Da=33779,Xc=35840,qc=35841,Yc=35842,Zc=35843,jc=36196,Jc=37492,Kc=37496,$c=37808,Qc=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,du=36492,fu=36494,pu=36495,mu=36283,gu=36284,xu=36285,yu=36286;var Wo=2300,Ql=2301,Zl=2302,Sd=2400,wd=2401,Td=2402;var ug=3200,hg=3201;var _u=0,dg=1,Di="",xt="srgb",Es="srgb-linear",Xo="linear",yt="srgb";var ws=7680;var Ad=519,fg=512,pg=513,mg=514,Yd=515,gg=516,xg=517,yg=518,_g=519,ec=35044,Zn=35048;var Zd="300 es",ni=2e3,qo=2001;var Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jp=1234567,Vo=Math.PI/180,Cr=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function jd(n,e){return(n%e+e)%e}function Wy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xy(n,e,t){return n!==e?(t-n)/(e-n):0}function ko(n,e,t){return(1-t)*n+t*e}function qy(n,e,t,i){return ko(n,e,1-Math.exp(-t*i))}function Yy(n,e=1){return e-Math.abs(jd(n,e*2)-e)}function Zy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Jy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ky(n,e){return n+Math.random()*(e-n)}function $y(n){return n*(.5-Math.random())}function Qy(n){n!==void 0&&(Jp=n);let e=Jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(n){return n*Vo}function t_(n){return n*Cr}function n_(n){return(n&n-1)===0&&n!==0}function i_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function s_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:Vo,RAD2DEG:Cr,generateUUID:hi,clamp:Je,euclideanModulo:jd,mapLinear:Wy,inverseLerp:Xy,lerp:ko,damp:qy,pingpong:Yy,smoothstep:Zy,smootherstep:jy,randInt:Jy,randFloat:Ky,randFloatSpread:$y,seededRandom:Qy,degToRad:e_,radToDeg:t_,isPowerOfTwo:n_,ceilPowerOfTwo:i_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:r_,normalize:gt,denormalize:ti},Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,S=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let E=Math.sqrt(w),P=Math.atan2(E,m*S);g=Math.sin(g*P)/E,a=Math.sin(a*P)/E}let v=a*S;if(l=l*g+f*v,c=c*g+h*v,u=u*g+p*v,d=d*g+x*v,g===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zh=new M,Kp=new Ke,tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=s[0],g=s[3],m=s[6],S=s[1],w=s[4],v=s[7],E=s[2],P=s[5],D=s[8];return r[0]=o*x+a*S+l*E,r[3]=o*g+a*w+l*P,r[6]=o*m+a*v+l*D,r[1]=c*x+u*S+d*E,r[4]=c*g+u*w+d*P,r[7]=c*m+u*v+d*D,r[2]=f*x+h*S+p*E,r[5]=f*g+h*w+p*P,r[8]=f*m+h*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jh.makeScale(e,t)),this}rotate(e){return this.premultiply(jh.makeRotation(-e)),this}translate(e,t){return this.premultiply(jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jh=new tt;function Jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vg(){let n=Rr("canvas");return n.style.display="block",n}var $p={};function Pr(n){n in $p||($p[n]=!0,console.warn(n))}function Mg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Qp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){let n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}var lt=o_();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var or,tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{or===void 0&&(or=Rr("canvas")),or.width=e.width,or.height=e.height;let s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a_=0,Ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jh(s[o].image)):r.push(Jh(s[o]))}else r=Jh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l_=0,Kh=new M,dn=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ki,s=Ki,r=an,o=An,a=En,l=On,c=n.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=hi(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=zd;dn.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,E=(m+1)/2,P=(u+f)/4,D=(d+x)/4,L=(p+g)/4;return w>v&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=D/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=L/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends nc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),_l.subVectors(this.max,Co),ar.subVectors(e.a,Co),lr.subVectors(e.b,Co),cr.subVectors(e.c,Co),Xi.subVectors(lr,ar),qi.subVectors(cr,lr),vs.subVectors(ar,cr);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-vs.z,vs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,vs.z,0,-vs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-vs.y,vs.x,0];return!$h(t,ar,lr,cr,_l)||(t=[1,0,0,0,1,0,0,0,1],!$h(t,ar,lr,cr,_l))?!1:(vl.crossVectors(Xi,qi),t=[vl.x,vl.y,vl.z],$h(t,ar,lr,cr,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new M,new M,new M,new M,new M,new M,new M,new M],$n=new M,yl=new sn,ar=new M,lr=new M,cr=new M,Xi=new M,qi=new M,vs=new M,Co=new M,_l=new M,vl=new M,Ms=new M;function $h(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),u=i.dot(Ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var c_=new sn,Ro=new M,Qh=new M,Wn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):c_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Qh)),this.expandByPoint(Ro.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bi=new M,ed=new M,Ml=new M,Yi=new M,td=new M,bl=new M,nd=new M,Cs=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ed.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(ed);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ml),a=Yi.dot(this.direction),l=-Yi.dot(Ml),c=Yi.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ed).addScaledVector(Ml,f),h}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){td.subVectors(t,e),bl.subVectors(i,e),nd.crossVectors(td,bl);let o=this.direction.dot(nd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(bl.crossVectors(Yi,bl));if(l<0)return null;let c=a*this.direction.dot(td.cross(Yi));if(c<0||l+c>o)return null;let u=-a*Yi.dot(nd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,h_)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Zi.crossVectors(i,Un),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Zi.crossVectors(i,Un)),Zi.normalize(),Sl.crossVectors(Un,Zi),s[0]=Zi.x,s[4]=Sl.x,s[8]=Un.x,s[1]=Zi.y,s[5]=Sl.y,s[9]=Un.y,s[2]=Zi.z,s[6]=Sl.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],S=i[3],w=i[7],v=i[11],E=i[15],P=s[0],D=s[4],L=s[8],b=s[12],_=s[1],C=s[5],U=s[9],j=s[13],H=s[2],V=s[6],Z=s[10],te=s[14],B=s[3],Y=s[7],oe=s[11],ie=s[15];return r[0]=o*P+a*_+l*H+c*B,r[4]=o*D+a*C+l*V+c*Y,r[8]=o*L+a*U+l*Z+c*oe,r[12]=o*b+a*j+l*te+c*ie,r[1]=u*P+d*_+f*H+h*B,r[5]=u*D+d*C+f*V+h*Y,r[9]=u*L+d*U+f*Z+h*oe,r[13]=u*b+d*j+f*te+h*ie,r[2]=p*P+x*_+g*H+m*B,r[6]=p*D+x*C+g*V+m*Y,r[10]=p*L+x*U+g*Z+m*oe,r[14]=p*b+x*j+g*te+m*ie,r[3]=S*P+w*_+v*H+E*B,r[7]=S*D+w*C+v*V+E*Y,r[11]=S*L+w*U+v*Z+E*oe,r[15]=S*b+w*j+v*te+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+g*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],S=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,w=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,v=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,E=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,P=t*S+i*w+s*v+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=S*D,e[1]=(x*f*r-d*g*r-x*s*h+i*g*h+d*s*m-i*f*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=w*D,e[5]=(u*g*r-p*f*r+p*s*h-t*g*h-u*s*m+t*f*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*D,e[8]=v*D,e[9]=(p*d*r-u*x*r-p*i*h+t*x*h+u*i*m-t*d*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*D,e[12]=E*D,e[13]=(u*x*s-p*d*s+p*i*f-t*x*f-u*i*g+t*d*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,x=o*u,g=o*d,m=a*d,S=l*c,w=l*u,v=l*d,E=i.x,P=i.y,D=i.z;return s[0]=(1-(x+m))*E,s[1]=(h+v)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(h-v)*P,s[5]=(1-(f+m))*P,s[6]=(g+S)*P,s[7]=0,s[8]=(p+w)*D,s[9]=(g-S)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,u=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===qo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ni)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===qo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ur=new M,Qn=new ot,u_=new M(0,0,0),h_=new M(1,1,1),Zi=new M,Sl=new M,Un=new M,tm=new ot,nm=new Ke,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},d_=0,im=new M,hr=new Ke,Si=new ot,wl=new M,Po=new M,f_=new M,p_=new Ke,sm=new M(1,0,0),rm=new M(0,1,0),om=new M(0,0,1),am={type:"added"},m_={type:"removed"},dr={type:"childadded",child:null},id={type:"childremoved",child:null},Lt=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new ln,i=new Ke,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new tt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,t){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Po,wl,this.up):Si.lookAt(wl,Po,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Si),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new M(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new M,wi=new M,sd=new M,Ti=new M,fr=new M,pr=new M,lm=new M,rd=new M,od=new M,ad=new M,ld=new at,cd=new at,ud=new at,wn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ei.subVectors(s,t),wi.subVectors(i,t),sd.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(wi),l=ei.dot(sd),c=wi.dot(wi),u=wi.dot(sd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ld,r.x),o.addScaledVector(cd,r.y),o.addScaledVector(ud,r.z),o}static isFrontFacing(e,t,i,s){return ei.subVectors(i,t),wi.subVectors(e,t),ei.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ei.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;fr.subVectors(s,i),pr.subVectors(r,i),rd.subVectors(e,i);let l=fr.dot(rd),c=pr.dot(rd);if(l<=0&&c<=0)return t.copy(i);od.subVectors(e,s);let u=fr.dot(od),d=pr.dot(od);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fr,o);ad.subVectors(e,r);let h=fr.dot(ad),p=pr.dot(ad);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(pr,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return lm.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(lm,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(fr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=jd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=hd(o,r,e+1/3),this.g=hd(o,r,e),this.b=hd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=bg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return lt.workingToColorSpace(hn.copy(this),e),Math.round(Je(hn.r*255,0,255))*65536+Math.round(Je(hn.g*255,0,255))*256+Math.round(Je(hn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=xt){lt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Tl);let i=ko(ji.h,Tl.h,t),s=ko(ji.s,Tl.s,t),r=ko(ji.l,Tl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Fe;Fe.NAMES=bg;var g_=0,Xn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ts,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new M,Al=new Se,x_=0,Mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var Rs=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zo=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},y_=0,Hn=new ot,dd=new Lt,mr=new M,Nn=new sn,Io=new sn,nn=new M,Qe=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?Zo:Rs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Nn.min,Io.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Io.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Io.min),Nn.expandByPoint(Io.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),nn.add(mr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new M,l[L]=new M;let c=new M,u=new M,d=new M,f=new Se,h=new Se,p=new Se,x=new M,g=new M;function m(L,b,_){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,L),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(C),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(C),a[L].add(x),a[b].add(x),a[_].add(x),l[L].add(g),l[b].add(g),l[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,b=S.length;L<b;++L){let _=S[L],C=_.start,U=_.count;for(let j=C,H=C+U;j<H;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let w=new M,v=new M,E=new M,P=new M;function D(L){E.fromBufferAttribute(s,L),P.copy(E);let b=a[L];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(P,b);let C=v.dot(l[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,C)}for(let L=0,b=S.length;L<b;++L){let _=S[L],C=_.start,U=_.count;for(let j=C,H=C+U;j<H;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new Mt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cm=new ot,bs=new Cs,El=new Wn,um=new M,Cl=new M,Rl=new M,Pl=new M,fd=new M,Il=new M,hm=new M,Ll=new M,Be=class extends Lt{constructor(e=new Qe,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(fd.fromBufferAttribute(d,e),o?Il.addScaledVector(fd,u):Il.addScaledVector(fd.sub(t),u))}t.add(Il)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(El.containsPoint(bs.origin)===!1&&(bs.intersectSphere(El,um)===null||bs.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(r).invert(),bs.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,h.start),w=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=S,E=w;v<E;v+=3){let P=a.getX(v),D=a.getX(v+1),L=a.getX(v+2);s=Dl(this,m,e,i,c,u,d,P,D,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let S=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=Dl(this,o,e,i,c,u,d,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=S,E=w;v<E;v+=3){let P=v,D=v+1,L=v+2;s=Dl(this,m,e,i,c,u,d,P,D,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let S=g,w=g+1,v=g+2;s=Dl(this,o,e,i,c,u,d,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function __(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ll);return c<t.near||c>t.far?null:{distance:c,point:Ll.clone(),object:n}}function Dl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Cl),n.getVertexPosition(l,Rl),n.getVertexPosition(c,Pl);let u=__(n,e,t,i,Cl,Rl,Pl,hm);if(u){let d=new M;wn.getBarycoord(hm,Cl,Rl,Pl,d),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};wn.getNormal(Cl,Rl,Pl,f.normal),u.face=f,u.barycoord=d}return u}var je=class n extends Qe{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function p(x,g,m,S,w,v,E,P,D,L,b){let _=v/D,C=E/L,U=v/2,j=E/2,H=P/2,V=D+1,Z=L+1,te=0,B=0,Y=new M;for(let oe=0;oe<Z;oe++){let ie=oe*C-j;for(let pe=0;pe<V;pe++){let ve=pe*_-U;Y[x]=ve*S,Y[g]=ie*w,Y[m]=H,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=P>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(pe/D),d.push(1-oe/L),te+=1}}for(let oe=0;oe<L;oe++)for(let ie=0;ie<D;ie++){let pe=f+ie+V*oe,ve=f+ie+V*(oe+1),Te=f+(ie+1)+V*(oe+1),ye=f+(ie+1)+V*oe;l.push(pe,ve,ye),l.push(ve,Te,ye),B+=6}a.addGroup(h,B,b),h+=B,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function v_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var vu={clone:Bs,merge:fn},M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},jo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new M,dm=new Se,fm=new Se,kt=class extends jo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,dm,fm),t.subVectors(fm,dm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,xr=1,sc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new kt(gr,xr,e,t);r.layers=this.layers,this.add(r);let o=new kt(gr,xr,e,t);o.layers=this.layers,this.add(o);let a=new kt(gr,xr,e,t);a.layers=this.layers,this.add(a);let l=new kt(gr,xr,e,t);l.layers=this.layers,this.add(l);let c=new kt(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jo=class extends dn{constructor(e=[],t=Ns,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rc=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ii});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=an),new sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ko=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$o=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new M,Ur=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nr=class extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yr,Lo=new M,_r=new M,vr=new M,Mr=new Se,Do=new Se,Sg=new ot,Ul=new M,Uo=new M,Nl=new M,pm=new Se,pd=new Se,mm=new Se,Qo=class extends Lt{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $o(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Ur(i,3,0,!1)),yr.setAttribute("uv",new Ur(i,2,3,!1))}this.geometry=yr,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Sg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fl(Ul.set(-.5,-.5,0),vr,o,_r,s,r),Fl(Uo.set(.5,-.5,0),vr,o,_r,s,r),Fl(Nl.set(.5,.5,0),vr,o,_r,s,r),pm.set(0,0),pd.set(1,0),mm.set(1,1);let a=e.ray.intersectTriangle(Ul,Uo,Nl,!1,Lo);if(a===null&&(Fl(Uo.set(-.5,.5,0),vr,o,_r,s,r),pd.set(0,1),a=e.ray.intersectTriangle(Ul,Nl,Uo,!1,Lo),a===null))return;let l=e.ray.origin.distanceTo(Lo);l<e.near||l>e.far||t.push({distance:l,point:Lo.clone(),uv:wn.getInterpolation(Lo,Ul,Uo,Nl,pm,pd,mm,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fl(n,e,t,i,s,r){Mr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Do.x=r*Mr.x-s*Mr.y,Do.y=s*Mr.x+r*Mr.y):Do.copy(Mr),n.copy(e),n.x+=Do.x,n.y+=Do.y,n.applyMatrix4(Sg)}var fi=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,u=on,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new ot,gm=new ot,Bl=[],xm=new sn,w_=new ot,No=new Be,Fo=new Wn,ea=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,w_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),xm.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(xm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),Fo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),gm.multiplyMatrices(i,br),No.matrixWorld=gm,No.raycast(e,Bl);for(let o=0,a=Bl.length;o<a;o++){let l=Bl[o];l.instanceId=r,l.object=this,t.push(l)}Bl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,kc,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},md=new M,T_=new M,A_=new tt,Sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=md.subVectors(i,t).cross(T_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(md),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||A_.getNormalMatrix(e),s=this.coplanarPoint(md).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Wn,E_=new Se(.5,.5),Ol=new M,Br=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,h-u,m-p,E-S).normalize(),s[1].setComponents(c+o,h+u,m+p,E+S).normalize(),s[2].setComponents(c+a,h+d,m+x,E+w).normalize(),s[3].setComponents(c-a,h-d,m-x,E-w).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,h-f,m-g,E-v).normalize();else if(s[4].setComponents(c-l,h-f,m-g,E-v).normalize(),t===ni)s[5].setComponents(c+l,h+f,m+g,E+v).normalize();else if(t===qo)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=E_.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ol.x=s.normal.x>0?e.max.x:e.min.x,Ol.y=s.normal.y>0?e.max.y:e.min.y,Ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qi=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oc=new M,ac=new M,ym=new ot,Bo=new Cs,zl=new Wn,gd=new M,_m=new M,ta=class extends Lt{constructor(e=new Qe,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oc.fromBufferAttribute(t,s-1),ac.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;ym.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),S=u.getX(x+1),w=Vl(this,e,Bo,l,m,S,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Vl(this,e,Bo,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Vl(this,e,Bo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Vl(this,e,Bo,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(oc.fromBufferAttribute(a,s),ac.fromBufferAttribute(a,r),t.distanceSqToSegment(oc,ac,gd,_m)>i)return;gd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(gd);if(!(c<e.near||c>e.far))return{distance:c,point:_m.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var vm=new M,Mm=new M,na=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)vm.fromBufferAttribute(t,s),Mm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vm.distanceTo(Mm);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ia=class extends ta{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Or=class extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bm=new ot,Ed=new Cs,kl=new Wn,Gl=new M,sa=class extends Lt{constructor(e=new Qe,t=new Or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,e.ray.intersectsSphere(kl)===!1)return;bm.copy(s).invert(),Ed.copy(e.ray).applyMatrix4(bm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Gl.fromBufferAttribute(d,g),Sm(Gl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Gl.fromBufferAttribute(d,p),Sm(Gl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sm(n,e,t,i,s,r,o){let a=Ed.distanceSqToPoint(n);if(a<t){let l=new M;Ed.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qn=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ra=class extends dn{constructor(e,t,i=is,s,r,o,a=on,l=on,c,u=Er,d=1){if(u!==Er&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},aa=class n extends Qe{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+r,x=s+1,g=new M,m=new M;for(let S=0;S<=p;S++){let w=0,v=0,E=0,P=0;if(S<=i){let b=S/i,_=b*Math.PI/2;v=-u-e*Math.cos(_),E=e*Math.sin(_),P=-e*Math.cos(_),w=b*d}else if(S<=i+r){let b=(S-i)/r;v=-u+b*t,E=e,P=0,w=d+b*f}else{let b=(S-i-r)/i,_=b*Math.PI/2;v=u+e*Math.sin(_),E=e*Math.cos(_),P=e*Math.sin(_),w=d+f+b*d}let D=Math.max(0,Math.min(1,w/h)),L=0;S===0?L=.5/s:S===p&&(L=-.5/s);for(let b=0;b<=s;b++){let _=b/s,C=_*Math.PI*2,U=Math.sin(C),j=Math.cos(C);m.x=-E*j,m.y=v,m.z=E*U,a.push(m.x,m.y,m.z),g.set(-E*j,P,E*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(_+L,D)}if(S>0){let b=(S-1)*x;for(let _=0;_<s;_++){let C=b+_,U=b+_+1,j=S*x+_,H=S*x+_+1;o.push(C,U,j),o.push(U,H,j)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yt=class n extends Qe{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class n extends Qe{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;S(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(h,2));function S(){let v=new M,E=new M,P=0,D=(t-e)/i;for(let L=0;L<=r;L++){let b=[],_=L/r,C=_*(t-e)+e;for(let U=0;U<=s;U++){let j=U/s,H=j*l+a,V=Math.sin(H),Z=Math.cos(H);E.x=C*V,E.y=-_*i+g,E.z=C*Z,d.push(E.x,E.y,E.z),v.set(V,D,Z).normalize(),f.push(v.x,v.y,v.z),h.push(j,1-_),b.push(p++)}x.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){let _=x[b][L],C=x[b+1][L],U=x[b+1][L+1],j=x[b][L+1];(e>0||b!==0)&&(u.push(_,C,j),P+=3),(t>0||b!==r-1)&&(u.push(C,U,j),P+=3)}c.addGroup(m,P,0),m+=P}function w(v){let E=p,P=new Se,D=new M,L=0,b=v===!0?e:t,_=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*_,0),f.push(0,_,0),h.push(.5,.5),p++;let C=p;for(let U=0;U<=s;U++){let H=U/s*l+a,V=Math.cos(H),Z=Math.sin(H);D.x=b*Z,D.y=g*_,D.z=b*V,d.push(D.x,D.y,D.z),f.push(0,_,0),P.x=V*.5+.5,P.y=Z*.5*_+.5,h.push(P.x,P.y),p++}for(let U=0;U<s;U++){let j=E+U,H=C+U;v===!0?u.push(H,H+1,j):u.push(H+1,H,j),L+=3}c.addGroup(m,L,v===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Is=class n extends Gt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class n extends Qe{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let w=new M,v=new M,E=new M;for(let P=0;P<t.length;P+=3)h(t[P+0],w),h(t[P+1],v),h(t[P+2],E),l(w,v,E,S)}function l(S,w,v,E){let P=E+1,D=[];for(let L=0;L<=P;L++){D[L]=[];let b=S.clone().lerp(v,L/P),_=w.clone().lerp(v,L/P),C=P-L;for(let U=0;U<=C;U++)U===0&&L===P?D[L][U]=b:D[L][U]=b.clone().lerp(_,U/C)}for(let L=0;L<P;L++)for(let b=0;b<2*(P-L)-1;b++){let _=Math.floor(b/2);b%2===0?(f(D[L][_+1]),f(D[L+1][_]),f(D[L][_])):(f(D[L][_+1]),f(D[L+1][_+1]),f(D[L+1][_]))}}function c(S){let w=new M;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let S=new M;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=g(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;o.push(v,1-E)}p(),d()}function d(){for(let S=0;S<o.length;S+=6){let w=o[S+0],v=o[S+2],E=o[S+4],P=Math.max(w,v,E),D=Math.min(w,v,E);P>.9&&D<.1&&(w<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function h(S,w){let v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let S=new M,w=new M,v=new M,E=new M,P=new Se,D=new Se,L=new Se;for(let b=0,_=0;b<r.length;b+=9,_+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),P.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),E.copy(S).add(w).add(v).divideScalar(3);let C=g(E);x(P,_+0,S,C),x(D,_+2,w,C),x(L,_+4,v,C)}}function x(S,w,v,E){E<0&&S.x===1&&(o[w]=S.x-1),v.x===0&&v.z===0&&(o[w]=E/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new ot;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Je(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Je(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lc=class extends Vr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $d(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Hl=new M,xd=new $d,yd=new $d,_d=new $d,cc=class extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Hl.subVectors(s[0],s[1]).add(s[0]),c=Hl);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Hl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),xd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),yd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),_d.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),yd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),_d.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(xd.calc(l),yd.calc(l),_d.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function C_(n,e){let t=1-n;return t*t*e}function R_(n,e){return 2*(1-n)*n*e}function P_(n,e){return n*n*e}function Go(n,e,t,i){return C_(n,e)+R_(n,t)+P_(n,i)}function I_(n,e){let t=1-n;return t*t*t*e}function L_(n,e){let t=1-n;return 3*t*t*n*e}function D_(n,e){return 3*(1-n)*n*n*e}function U_(n,e){return n*n*n*e}function Ho(n,e,t,i,s){return I_(n,e)+L_(n,t)+D_(n,i)+U_(n,s)}var la=class extends Fn{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,s.x,r.x,o.x,a.x),Ho(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uc=class extends Fn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,s.x,r.x,o.x,a.x),Ho(e,s.y,r.y,o.y,a.y),Ho(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Fn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends Fn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Fn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Go(e,s.x,r.x,o.x),Go(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dc=class extends Fn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Go(e,s.x,r.x,o.x),Go(e,s.y,r.y,o.y),Go(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(wm(a,l.x,c.x,u.x,d.x),wm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Cd=Object.freeze({__proto__:null,ArcCurve:lc,CatmullRomCurve3:cc,CubicBezierCurve:la,CubicBezierCurve3:uc,EllipseCurve:Vr,LineCurve:ca,LineCurve3:hc,QuadraticBezierCurve:ua,QuadraticBezierCurve3:dc,SplineCurve:ha}),fc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Cd[s.type]().fromJSON(s))}return this}},da=class extends fc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ca(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ua(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new la(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ha(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Vr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ls=class extends da{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new da().fromJSON(s))}return this}};function N_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=V_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return fa(r,o,t,a,l,c,0),o}function wg(n,e,t,i,s){let r;if(s===K_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Tm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Tm(o/i|0,n[o],n[o+1],r);return r&&kr(r,r.next)&&(ma(r),r=r.next),r}function Ds(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(kr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&X_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?B_(n,i,s,r):F_(n)){e.push(l.i,n.i,c.i),ma(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=O_(Ds(n),e),fa(n,e,t,i,s,r,2)):o===2&&z_(n,e,t,i,s,r):fa(Ds(n),e,t,i,s,r,1);break}}}function F_(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&zo(s,a,r,l,o,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function B_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Rd(h,p,e,t,i),S=Rd(x,g,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&zo(a,u,l,d,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&zo(a,u,l,d,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&zo(a,u,l,d,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&zo(a,u,l,d,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function O_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!kr(i,s)&&Ag(i,t,t.next,s)&&pa(i,s)&&pa(s,i)&&(e.push(i.i,t.i,s.i),ma(t),ma(t.next),t=n=s),t=t.next}while(t!==n);return Ds(t)}function z_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z_(o,a)){let l=Eg(o,a);o=Ds(o,o.next),l=Ds(l,l.next),fa(o,e,t,i,s,r,0),fa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function V_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=wg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Y_(c))}s.sort(k_);for(let r=0;r<s.length;r++)t=G_(s[r],t);return t}function k_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function G_(n,e){let t=H_(n,e);if(!t)return e;let i=Eg(t,n);return Ds(i,i.next),Ds(t,t.next)}function H_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(kr(n,t))return t;do{if(kr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Tg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);pa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&W_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function W_(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function X_(n,e,t,i){let s=n;do s.z===0&&(s.z=Rd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,q_(s)}function q_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Rd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Y_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Tg(n,e,t,i,s,r,o,a)}function Z_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!j_(n,e)&&(pa(n,e)&&pa(e,n)&&J_(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||kr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function kr(n,e){return n.x===e.x&&n.y===e.y}function Ag(n,e,t,i){let s=Xl(Bt(n,e,t)),r=Xl(Bt(n,e,i)),o=Xl(Bt(t,i,n)),a=Xl(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Wl(n,t,e)||r===0&&Wl(n,i,e)||o===0&&Wl(t,n,i)||a===0&&Wl(t,e,i))}function Wl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Xl(n){return n>0?1:n<0?-1:0}function j_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ag(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function pa(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function J_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Eg(n,e){let t=Pd(n.i,n.x,n.y),i=Pd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Tm(n,e,t,i){let s=Pd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Id=class{static triangulate(e,t,i=2){return N_(e,t,i)}},ui=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Am(e),Em(i,e);let o=e.length;t.forEach(Am);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Em(i,t[l]);let a=Id.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Am(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Em(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ga=class n extends Qe{constructor(e=new Ls([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:$_,w,v=!1,E,P,D,L;m&&(w=m.getSpacedPoints(u),v=!0,f=!1,E=m.computeFrenetFrames(u,!1),P=new M,D=new M,L=new M),f||(g=0,h=0,p=0,x=0);let b=a.extractPoints(c),_=b.shape,C=b.holes;if(!ui.isClockWise(_)){_=_.reverse();for(let z=0,O=C.length;z<O;z++){let X=C[z];ui.isClockWise(X)&&(C[z]=X.reverse())}}function j(z){let X=10000000000000001e-36,F=z[0];for(let ce=1;ce<=z.length;ce++){let ne=ce%z.length,fe=z[ne],Ne=fe.x-F.x,Ue=fe.y-F.y,R=Ne*Ne+Ue*Ue,y=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(F.x),Math.abs(F.y)),I=X*y*y;if(R<=I){z.splice(ne,1),ce--;continue}F=fe}}j(_),C.forEach(j);let H=C.length,V=_;for(let z=0;z<H;z++){let O=C[z];_=_.concat(O)}function Z(z,O,X){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(O,X)}let te=_.length;function B(z,O,X){let F,ce,ne,fe=z.x-O.x,Ne=z.y-O.y,Ue=X.x-z.x,R=X.y-z.y,y=fe*fe+Ne*Ne,I=fe*R-Ne*Ue;if(Math.abs(I)>Number.EPSILON){let J=Math.sqrt(y),le=Math.sqrt(Ue*Ue+R*R),$=O.x-Ne/J,ge=O.y+fe/J,de=X.x-R/le,xe=X.y+Ue/le,_e=((de-$)*R-(xe-ge)*Ue)/(fe*R-Ne*Ue);F=$+fe*_e-z.x,ce=ge+Ne*_e-z.y;let ue=F*F+ce*ce;if(ue<=2)return new Se(F,ce);ne=Math.sqrt(ue/2)}else{let J=!1;fe>Number.EPSILON?Ue>Number.EPSILON&&(J=!0):fe<-Number.EPSILON?Ue<-Number.EPSILON&&(J=!0):Math.sign(Ne)===Math.sign(R)&&(J=!0),J?(F=-Ne,ce=fe,ne=Math.sqrt(y)):(F=fe,ce=Ne,ne=Math.sqrt(y/2))}return new Se(F/ne,ce/ne)}let Y=[];for(let z=0,O=V.length,X=O-1,F=z+1;z<O;z++,X++,F++)X===O&&(X=0),F===O&&(F=0),Y[z]=B(V[z],V[X],V[F]);let oe=[],ie,pe=Y.concat();for(let z=0,O=H;z<O;z++){let X=C[z];ie=[];for(let F=0,ce=X.length,ne=ce-1,fe=F+1;F<ce;F++,ne++,fe++)ne===ce&&(ne=0),fe===ce&&(fe=0),ie[F]=B(X[F],X[ne],X[fe]);oe.push(ie),pe=pe.concat(ie)}let ve;if(g===0)ve=ui.triangulateShape(V,C);else{let z=[],O=[];for(let X=0;X<g;X++){let F=X/g,ce=h*Math.cos(F*Math.PI/2),ne=p*Math.sin(F*Math.PI/2)+x;for(let fe=0,Ne=V.length;fe<Ne;fe++){let Ue=Z(V[fe],Y[fe],ne);W(Ue.x,Ue.y,-ce),F===0&&z.push(Ue)}for(let fe=0,Ne=H;fe<Ne;fe++){let Ue=C[fe];ie=oe[fe];let R=[];for(let y=0,I=Ue.length;y<I;y++){let J=Z(Ue[y],ie[y],ne);W(J.x,J.y,-ce),F===0&&R.push(J)}F===0&&O.push(R)}}ve=ui.triangulateShape(z,O)}let Te=ve.length,ye=p+x;for(let z=0;z<te;z++){let O=f?Z(_[z],pe[z],ye):_[z];v?(D.copy(E.normals[0]).multiplyScalar(O.x),P.copy(E.binormals[0]).multiplyScalar(O.y),L.copy(w[0]).add(D).add(P),W(L.x,L.y,L.z)):W(O.x,O.y,0)}for(let z=1;z<=u;z++)for(let O=0;O<te;O++){let X=f?Z(_[O],pe[O],ye):_[O];v?(D.copy(E.normals[z]).multiplyScalar(X.x),P.copy(E.binormals[z]).multiplyScalar(X.y),L.copy(w[z]).add(D).add(P),W(L.x,L.y,L.z)):W(X.x,X.y,d/u*z)}for(let z=g-1;z>=0;z--){let O=z/g,X=h*Math.cos(O*Math.PI/2),F=p*Math.sin(O*Math.PI/2)+x;for(let ce=0,ne=V.length;ce<ne;ce++){let fe=Z(V[ce],Y[ce],F);W(fe.x,fe.y,d+X)}for(let ce=0,ne=C.length;ce<ne;ce++){let fe=C[ce];ie=oe[ce];for(let Ne=0,Ue=fe.length;Ne<Ue;Ne++){let R=Z(fe[Ne],ie[Ne],F);v?W(R.x,R.y+w[u-1].y,w[u-1].x+X):W(R.x,R.y,d+X)}}}N(),G();function N(){let z=s.length/3;if(f){let O=0,X=te*O;for(let F=0;F<Te;F++){let ce=ve[F];K(ce[2]+X,ce[1]+X,ce[0]+X)}O=u+g*2,X=te*O;for(let F=0;F<Te;F++){let ce=ve[F];K(ce[0]+X,ce[1]+X,ce[2]+X)}}else{for(let O=0;O<Te;O++){let X=ve[O];K(X[2],X[1],X[0])}for(let O=0;O<Te;O++){let X=ve[O];K(X[0]+te*u,X[1]+te*u,X[2]+te*u)}}i.addGroup(z,s.length/3-z,0)}function G(){let z=s.length/3,O=0;he(V,O),O+=V.length;for(let X=0,F=C.length;X<F;X++){let ce=C[X];he(ce,O),O+=ce.length}i.addGroup(z,s.length/3-z,1)}function he(z,O){let X=z.length;for(;--X>=0;){let F=X,ce=X-1;ce<0&&(ce=z.length-1);for(let ne=0,fe=u+g*2;ne<fe;ne++){let Ne=te*ne,Ue=te*(ne+1),R=O+F+Ne,y=O+ce+Ne,I=O+ce+Ue,J=O+F+Ue;ae(R,y,I,J)}}}function W(z,O,X){l.push(z),l.push(O),l.push(X)}function K(z,O,X){Re(z),Re(O),Re(X);let F=s.length/3,ce=S.generateTopUV(i,s,F-3,F-2,F-1);T(ce[0]),T(ce[1]),T(ce[2])}function ae(z,O,X,F){Re(z),Re(O),Re(F),Re(O),Re(X),Re(F);let ce=s.length/3,ne=S.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);T(ne[0]),T(ne[1]),T(ne[3]),T(ne[1]),T(ne[2]),T(ne[3])}function Re(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function T(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Q_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Cd[s.type]().fromJSON(s)),new n(i,e.options)}},$_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(f,1-p),new Se(x,1-m)]:[new Se(a,1-l),new Se(u,1-d),new Se(h,1-p),new Se(g,1-m)]}};function Q_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class n extends zr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ci=class n extends zr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Qt=class n extends Qe{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let S=m*f-o;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-S,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let w=S+c*m,v=S+c*(m+1),E=S+1+c*(m+1),P=S+1+c*m;h.push(w,v,P),h.push(v,E,P)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Gr=class n extends Qe{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new M,p=new Se;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let S=m+g,w=S,v=S+i+1,E=S+i+2,P=S+1;a.push(w,v,P),a.push(v,E,P)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xa=class n extends Qe{constructor(e=new Ls([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;ui.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];ui.isClockWise(S)===!0&&(p[g]=S.reverse())}let x=ui.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];h=h.concat(S)}for(let g=0,m=h.length;g<m;g++){let S=h[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=x.length;g<m;g++){let S=x[g],w=S[0]+d,v=S[1]+d,E=S[2]+d;i.push(w,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ev(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function ev(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ri=class n extends Qe{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let S=[],w=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let P=E/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(P+v,1-w),S.push(c++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){let w=u[m][S+1],v=u[m][S],E=u[m+1][S],P=u[m+1][S+1];(m!==0||o>0)&&h.push(w,v,P),(m!==i-1||l<Math.PI)&&h.push(v,E,P)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ya=class n extends zr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Pi=class n extends Qe{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,S=(s+1)*h+p;o.push(x,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tt=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_a=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zt=class extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pc=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ql(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends Us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sd,endingEnd:Sd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wd:r=e,a=2*t-i;break;case Td:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wd:o=e,l=2*i-t;break;case Td:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,S=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+S*o[c+E]+w*o[l+E]+v*o[d+E];return r}},xc=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},yc=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ql(t,this.TimeBufferType),this.values=ql(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ql(e.times,Array),values:ql(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Zl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&tv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ql;var es=class extends Bn{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Wo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};_c.prototype.ValueTypeName="color";var vc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="number";var Mc=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},va=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Bn{constructor(e,t,i){super(e,t,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Wo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};bc.prototype.ValueTypeName="vector";var jl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Cg=new Sc,Hr=class{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=new WeakMap,wc=class extends Hr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=jl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Sr.get(o);d===void 0&&(d=[],Sr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Rr("img");function l(){u(),t&&t(this);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),jl.remove(`image:${e}`);let f=Sr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ma=class extends Hr{constructor(e){super(e)}load(e,t,i,s){let r=new dn,o=new wc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Wr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ba=class extends Wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vd=new ot,Cm=new M,Rm=new M,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cm),Rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rm),t.updateMatrixWorld(),vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pm=new ot,Oo=new M,Md=new M,Ld=class extends Tc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),Md.copy(i.position),Md.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Md),i.updateMatrixWorld(),s.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm,i.coordinateSystem,i.reversedDepth)}},Sa=class extends Wr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wa=class extends jo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dd=class extends Tc{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ac=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qd="\\[\\]\\.:\\/",nv=new RegExp("["+Qd+"]","g"),ef="[^"+Qd+"]",iv="[^"+Qd.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",ef),rv=/(WCOD+)?/.source.replace("WCOD",iv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),lv=new RegExp("^"+sv+rv+ov+av+"$"),cv=["material","materials","bones","map"],Ud=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(e){let t=lv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Ud;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lA=new Float32Array(1);var Im=new ot,ns=class{constructor(e,t,i=0,s=1/0){this.ray=new Cs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Im),this}intersectObject(e,t=!0,i=[]){return Nd(e,this,i,t),i.sort(Lm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nd(e[s],this,i,t);return i.sort(Lm),i}};function Lm(n,e){return n.distance-e.distance}function Nd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Nd(r[o],e,t,!0)}}var Dm=new M,Yl=new M,wr=new M,Tr=new M,bd=new M,uv=new M,hv=new M,Aa=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Dm.subVectors(e,this.start),Yl.subVectors(this.end,this.start);let i=Yl.dot(Yl),r=Yl.dot(Dm)/i;return t&&(r=Je(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=uv,i=hv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;wr.subVectors(c,a),Tr.subVectors(u,l),bd.subVectors(a,l);let d=wr.dot(wr),f=Tr.dot(Tr),h=Tr.dot(bd);if(d<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=h/f,o=Je(o,0,1);else{let p=wr.dot(bd);if(f<=s)o=0,r=Je(-p/d,0,1);else{let x=wr.dot(Tr),g=d*f-x*x;g!==0?r=Je((x*h-p*f)/g,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=Je(-p/d,0,1)):o>1&&(o=1,r=Je((x-p)/d,0,1))}}return t.copy(a).add(wr.multiplyScalar(r)),i.copy(l).add(Tr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function tf(n,e,t,i){let s=dv(i);switch(t){case Wd:return n*e;case kc:return n*e/s.components*s.byteLength;case Gc:return n*e/s.components*s.byteLength;case qd:return n*e*2/s.components*s.byteLength;case Hc:return n*e*2/s.components*s.byteLength;case Xd:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Wc:return n*e*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:case Zc:return Math.max(n,16)*Math.max(e,8)/4;case Xc:case Yc:return Math.max(n,8)*Math.max(e,8)/2;case jc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case du:case fu:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dv(n){switch(n){case On:case Vd:return{byteLength:1,components:1};case qr:case kd:case mi:return{byteLength:2,components:1};case zc:case Vc:return{byteLength:2,components:4};case is:case Oc:case si:return{byteLength:4,components:1};case Gd:case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $g(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
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
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hv=`vec3 transformedNormal = objectNormal;
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
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`struct PhysicalMaterial {
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
}`,xM=`
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
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
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`#include <common>
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
}`,wb=`#if DEPTH_PACKING == 3200
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
}`,Tb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Db=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
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
}`,Nb=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,Bb=`#define NORMAL
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
}`,Ob=`#define NORMAL
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
}`,zb=`#define PHONG
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
}`,Vb=`#define PHONG
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
}`,kb=`#define STANDARD
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
}`,Gb=`#define STANDARD
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
}`,Hb=`#define TOON
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
}`,Wb=`#define TOON
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
}`,Xb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,Zb=`uniform vec3 color;
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
}`,jb=`uniform float rotation;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:yv,alphahash_pars_fragment:_v,alphamap_fragment:vv,alphamap_pars_fragment:Mv,alphatest_fragment:bv,alphatest_pars_fragment:Sv,aomap_fragment:wv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:Ev,begin_vertex:Cv,beginnormal_vertex:Rv,bsdfs:Pv,iridescence_fragment:Iv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Dv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Fv,color_fragment:Bv,color_pars_fragment:Ov,color_pars_vertex:zv,color_vertex:Vv,common:kv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:qv,emissivemap_pars_fragment:Yv,colorspace_fragment:Zv,colorspace_pars_fragment:jv,envmap_fragment:Jv,envmap_common_pars_fragment:Kv,envmap_pars_fragment:$v,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:sM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:xM,lights_fragment_maps:yM,lights_fragment_end:_M,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:SM,map_fragment:wM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:EM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:IM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:NM,normal_fragment_maps:FM,normal_pars_fragment:BM,normal_pars_vertex:OM,normal_vertex:zM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:qM,premultiplied_alpha_fragment:YM,project_vertex:ZM,dithering_fragment:jM,dithering_pars_fragment:JM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:sb,skinning_vertex:rb,skinnormal_vertex:ob,specularmap_fragment:ab,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:ub,transmission_fragment:hb,transmission_pars_fragment:db,uv_pars_fragment:fb,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:xb,background_frag:yb,backgroundCube_vert:_b,backgroundCube_frag:vb,cube_vert:Mb,cube_frag:bb,depth_vert:Sb,depth_frag:wb,distanceRGBA_vert:Tb,distanceRGBA_frag:Ab,equirect_vert:Eb,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:Pb,meshbasic_vert:Ib,meshbasic_frag:Lb,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:Nb,meshmatcap_frag:Fb,meshnormal_vert:Bb,meshnormal_frag:Ob,meshphong_vert:zb,meshphong_frag:Vb,meshphysical_vert:kb,meshphysical_frag:Gb,meshtoon_vert:Hb,meshtoon_frag:Wb,points_vert:Xb,points_frag:qb,shadow_vert:Yb,shadow_frag:Zb,sprite_vert:jb,sprite_frag:Jb},Ie={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},gi={basic:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Fe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Fe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:fn([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:fn([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:fn([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:fn([Ie.lights,Ie.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};gi.physical={uniforms:fn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Mu={r:0,b:0,g:0},Os=new ln,Kb=new ot;function $b(n,e,t,i,s,r,o){let a=new Fe(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,E=p(w);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,v){let E=p(v);E&&(E.isCubeTexture||E.mapping===Ca)?(u===void 0&&(u=new Be(new je(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Bs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Os.copy(v.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(Os)),u.material.toneMapped=lt.getTransfer(E.colorSpace)!==yt,(d!==E||f!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new Qt(2,2),new Mn({name:"BackgroundMaterial",uniforms:Bs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==yt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(Mu,Kd(n)),i.buffers.color.setClear(Mu.r,Mu.g,Mu.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:S}}function Qb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,C,U,j,H){let V=!1,Z=d(j,U,C);r!==Z&&(r=Z,c(r.object)),V=h(_,j,U,H),V&&p(_,j,U,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(_,C,U,j),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,C,U){let j=U.wireframe===!0,H=i[_.id];H===void 0&&(H={},i[_.id]=H);let V=H[C.id];V===void 0&&(V={},H[C.id]=V);let Z=V[j];return Z===void 0&&(Z=f(l()),V[j]=Z),Z}function f(_){let C=[],U=[],j=[];for(let H=0;H<t;H++)C[H]=0,U[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:j,object:_,attributes:{},index:null}}function h(_,C,U,j){let H=r.attributes,V=C.attributes,Z=0,te=U.getAttributes();for(let B in te)if(te[B].location>=0){let oe=H[B],ie=V[B];if(ie===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),oe===void 0||oe.attribute!==ie||ie&&oe.data!==ie.data)return!0;Z++}return r.attributesNum!==Z||r.index!==j}function p(_,C,U,j){let H={},V=C.attributes,Z=0,te=U.getAttributes();for(let B in te)if(te[B].location>=0){let oe=V[B];oe===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor));let ie={};ie.attribute=oe,oe&&oe.data&&(ie.data=oe.data),H[B]=ie,Z++}r.attributes=H,r.attributesNum=Z,r.index=j}function x(){let _=r.newAttributes;for(let C=0,U=_.length;C<U;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let U=r.newAttributes,j=r.enabledAttributes,H=r.attributeDivisors;U[_]=1,j[_]===0&&(n.enableVertexAttribArray(_),j[_]=1),H[_]!==C&&(n.vertexAttribDivisor(_,C),H[_]=C)}function S(){let _=r.newAttributes,C=r.enabledAttributes;for(let U=0,j=C.length;U<j;U++)C[U]!==_[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function w(_,C,U,j,H,V,Z){Z===!0?n.vertexAttribIPointer(_,C,U,H,V):n.vertexAttribPointer(_,C,U,j,H,V)}function v(_,C,U,j){x();let H=j.attributes,V=U.getAttributes(),Z=C.defaultAttributeValues;for(let te in V){let B=V[te];if(B.location>=0){let Y=H[te];if(Y===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let oe=Y.normalized,ie=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;let ve=pe.buffer,Te=pe.type,ye=pe.bytesPerElement,N=Te===n.INT||Te===n.UNSIGNED_INT||Y.gpuType===Oc;if(Y.isInterleavedBufferAttribute){let G=Y.data,he=G.stride,W=Y.offset;if(G.isInstancedInterleavedBuffer){for(let K=0;K<B.locationSize;K++)m(B.location+K,G.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let K=0;K<B.locationSize;K++)g(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let K=0;K<B.locationSize;K++)w(B.location+K,ie/B.locationSize,Te,oe,he*ye,(W+ie/B.locationSize*K)*ye,N)}else{if(Y.isInstancedBufferAttribute){for(let G=0;G<B.locationSize;G++)m(B.location+G,Y.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let G=0;G<B.locationSize;G++)g(B.location+G);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let G=0;G<B.locationSize;G++)w(B.location+G,ie/B.locationSize,Te,oe,ie*ye,ie/B.locationSize*G*ye,N)}}else if(Z!==void 0){let oe=Z[te];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(B.location,oe);break;case 3:n.vertexAttrib3fv(B.location,oe);break;case 4:n.vertexAttrib4fv(B.location,oe);break;default:n.vertexAttrib1fv(B.location,oe)}}}}S()}function E(){L();for(let _ in i){let C=i[_];for(let U in C){let j=C[U];for(let H in j)u(j[H].object),delete j[H];delete C[U]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let U in C){let j=C[U];for(let H in j)u(j[H].object),delete j[H];delete C[U]}delete i[_.id]}function D(_){for(let C in i){let U=i[C];if(U[_.id]===void 0)continue;let j=U[_.id];for(let H in j)u(j[H].object),delete j[H];delete U[_.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function e1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==En&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==On&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==si&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:E,maxSamples:P}}function n1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let S=r?0:i,w=S*4,v=m.clippingState||null;l.value=v,v=u(p,f,w,h);for(let E=0;E!==w;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=h;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function i1(n){let e=new WeakMap;function t(o,a){return a===Xr?o.mapping=Ns:a===Fc&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xr||a===Fc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Jr=4,Rg=[.125,.215,.35,.446,.526,.582],ks=20,nf=new wa,Pg=new Fe,sf=null,rf=0,of=0,af=!1,Vs=(1+Math.sqrt(5))/2,jr=1/Vs,Ig=[new M(-Vs,jr,0),new M(Vs,jr,0),new M(-jr,0,Vs),new M(jr,0,Vs),new M(0,Vs,-jr),new M(0,Vs,jr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],s1=new M,$r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=s1}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,rf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,bu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:mi,format:En,colorSpace:Es,depthBuffer:!1},s=Lg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(r)),this._blurMaterial=o1(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,nf)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Pg),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new mt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Be(new je,x),m=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,m=!0):(x.color.copy(Pg),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let E=this._cubeSize;bu(s,v*E,w>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ns||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;bu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ig[(s-r-1)%Ig.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ks-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):ks;g>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ks}`);let m=[],S=0;for(let D=0;D<ks;++D){let L=D/x,b=Math.exp(-L*L/2);m.push(b),D===0?S+=b:D<g&&(S+=2*b)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let v=this._sizeLods[s],E=3*v*(s>w-Jr?s-w+Jr:0),P=4*(this._cubeSize-v);bu(t,E,P,3*v,2*v),l.setRenderTarget(t),l.render(d,nf)}};function r1(n){let e=[],t=[],i=[],s=n,r=n-Jr+1+Rg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Jr?l=Rg[o-n+Jr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,S=new Float32Array(x*p*h),w=new Float32Array(g*p*h),v=new Float32Array(m*p*h);for(let P=0;P<h;P++){let D=P%3*2/3-1,L=P>2?0:-1,b=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];S.set(b,x*p*P),w.set(f,g*p*P);let _=[P,P,P,P,P,P];v.set(_,m*p*P)}let E=new Qe;E.setAttribute("position",new Mt(S,x)),E.setAttribute("uv",new Mt(w,g)),E.setAttribute("faceIndex",new Mt(v,m)),e.push(E),s>Jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lg(n,e,t){let i=new Tn(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function o1(n,e,t){let i=new Float32Array(ks),s=new M(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Dg(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ug(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function xf(){return`

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
	`}function a1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xr||l===Fc,u=l===Ns||l===Fs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $r(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new $r(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function l1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function c1(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let S=h.array;x=h.version;for(let w=0,v=S.length;w<v;w+=3){let E=S[w+0],P=S[w+1],D=S[w+2];f.push(E,P,P,D,D,E)}}else if(p!==void 0){let S=p.array;x=p.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let E=w+0,P=w+1,D=w+2;f.push(E,P,P,D,D,E)}}else return;let g=new(Jd(f)?Zo:Rs)(f,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function u1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,p);let m=0;for(let S=0;S<p;S++)m+=h[S]*x[S];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function h1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d1(n,e,t){let i=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let P=new Float32Array(v*E*4*d),D=new Yo(P,v,E,d);D.type=si,D.needsUpdate=!0;let L=w*4;for(let _=0;_<d;_++){let C=g[_],U=m[_],j=S[_],H=v*E*4*_;for(let V=0;V<C.count;V++){let Z=V*L;h===!0&&(s.fromBufferAttribute(C,V),P[H+Z+0]=s.x,P[H+Z+1]=s.y,P[H+Z+2]=s.z,P[H+Z+3]=0),p===!0&&(s.fromBufferAttribute(U,V),P[H+Z+4]=s.x,P[H+Z+5]=s.y,P[H+Z+6]=s.z,P[H+Z+7]=0),x===!0&&(s.fromBufferAttribute(j,V),P[H+Z+8]=s.x,P[H+Z+9]=s.y,P[H+Z+10]=s.z,P[H+Z+11]=j.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new Se(v,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function f1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Qg=new dn,Ng=new ra(1,1),e0=new Yo,t0=new ic,n0=new Jo,Fg=[],Bg=[],Og=new Float32Array(16),zg=new Float32Array(9),Vg=new Float32Array(4);function Qr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fg[s];if(r===void 0&&(r=new Float32Array(s),Fg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tu(n,e){let t=Bg[e];t===void 0&&(t=new Int32Array(e),Bg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function p1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function y1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Vg.set(i),n.uniformMatrix2fv(this.addr,!1,Vg),tn(t,i)}}function _1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;zg.set(i),n.uniformMatrix3fv(this.addr,!1,zg),tn(t,i)}}function v1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Og.set(i),n.uniformMatrix4fv(this.addr,!1,Og),tn(t,i)}}function M1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function w1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function T1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function R1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ng.compareFunction=Yd,r=Ng):r=Qg,t.setTexture2D(e||r,s)}function P1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||t0,s)}function I1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||n0,s)}function L1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||e0,s)}function D1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return x1;case 35674:return y1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return S1;case 35669:case 35673:return w1;case 5125:return T1;case 36294:return A1;case 36295:return E1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return L1}}function U1(n,e){n.uniform1fv(this.addr,e)}function N1(n,e){let t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function F1(n,e){let t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function B1(n,e){let t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function O1(n,e){let t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z1(n,e){let t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V1(n,e){let t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k1(n,e){n.uniform1iv(this.addr,e)}function G1(n,e){n.uniform2iv(this.addr,e)}function H1(n,e){n.uniform3iv(this.addr,e)}function W1(n,e){n.uniform4iv(this.addr,e)}function X1(n,e){n.uniform1uiv(this.addr,e)}function q1(n,e){n.uniform2uiv(this.addr,e)}function Y1(n,e){n.uniform3uiv(this.addr,e)}function Z1(n,e){n.uniform4uiv(this.addr,e)}function j1(n,e,t){let i=this.cache,s=e.length,r=Tu(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qg,r[o])}function J1(n,e,t){let i=this.cache,s=e.length,r=Tu(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||t0,r[o])}function K1(n,e,t){let i=this.cache,s=e.length,r=Tu(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||n0,r[o])}function $1(n,e,t){let i=this.cache,s=e.length,r=Tu(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||e0,r[o])}function Q1(n){switch(n){case 5126:return U1;case 35664:return N1;case 35665:return F1;case 35666:return B1;case 35674:return O1;case 35675:return z1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return q1;case 36295:return Y1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return $1}}var cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=D1(t.type)}},uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q1(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lf=/(\w+)(\])?(\[|\.)?/g;function kg(n,e){n.seq.push(e),n.map[e.id]=e}function eS(n,e,t){let i=n.name,s=i.length;for(lf.lastIndex=0;;){let r=lf.exec(i),o=lf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kg(t,c===void 0?new cf(a,n,e):new uf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hf(a),kg(t,d)),t=d}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Gg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var tS=37297,nS=0;function iS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Hg=new tt;function sS(n){lt._getMatrix(Hg,lt.workingColorSpace,n);let e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+iS(n.getShaderSource(e),a)}else return r}function rS(n,e){let t=sS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oS(n,e){let t;switch(e){case ig:t="Linear";break;case sg:t="Reinhard";break;case rg:t="Cineon";break;case Nc:t="ACESFilmic";break;case ag:t="AgX";break;case lg:t="Neutral";break;case og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Su=new M;function aS(){lt.getLuminanceCoefficients(Su);let n=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function cS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ua(n){return n!==""}function Xg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(n){return n.replace(hS,fS)}var dS=new Map;function fS(n,e){let t=it[e];if(t===void 0){let i=dS.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return df(t)}var pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(n){return n.replace(pS,mS)}function mS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ea?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function xS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Fs:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function _S(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function vS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function MS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gS(t),c=xS(t),u=yS(t),d=_S(t),f=vS(t),h=lS(t),p=cS(r),x=s.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),m.length>0&&(m+=`
`)):(g=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),m=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?it.tonemapping_pars_fragment:"",t.toneMapping!==Li?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,rS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=df(o),o=Xg(o,t),o=qg(o,t),a=df(a),a=Xg(a,t),a=qg(a,t),o=Yg(o),a=Yg(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+o,v=S+m+a,E=Gg(s,s.VERTEX_SHADER,w),P=Gg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",j=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(P)||"",V=U.trim(),Z=j.trim(),te=H.trim(),B=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,P);else{let oe=Wg(s,E,"vertex"),ie=Wg(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+oe+`
`+ie)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Z===""||te==="")&&(Y=!1);Y&&(C.diagnostics={runnable:B,programLog:V,vertexShader:{log:Z,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(E),s.deleteShader(P),L=new Kr(s,x),b=uS(s,x)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,tS)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=P,this}var bS=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pf(e),t.set(e,i)),i}},pf=class{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}};function SS(n,e,t,i,s,r,o){let a=new Lr,l=new ff,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,C,U,j){let H=U.fog,V=j.geometry,Z=b.isMeshStandardMaterial?U.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),B=te&&te.mapping===Ca?te.image.height:null,Y=p[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=oe!==void 0?oe.length:0,pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let ve,Te,ye,N;if(Y){let ft=gi[Y];ve=ft.vertexShader,Te=ft.fragmentShader}else ve=b.vertexShader,Te=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),N=l.getFragmentShaderID(b);let G=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),W=j.isInstancedMesh===!0,K=j.isBatchedMesh===!0,ae=!!b.map,Re=!!b.matcap,T=!!te,z=!!b.aoMap,O=!!b.lightMap,X=!!b.bumpMap,F=!!b.normalMap,ce=!!b.displacementMap,ne=!!b.emissiveMap,fe=!!b.metalnessMap,Ne=!!b.roughnessMap,Ue=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,I=b.iridescence>0,J=b.sheen>0,le=b.transmission>0,$=Ue&&!!b.anisotropyMap,ge=R&&!!b.clearcoatMap,de=R&&!!b.clearcoatNormalMap,xe=R&&!!b.clearcoatRoughnessMap,_e=I&&!!b.iridescenceMap,ue=I&&!!b.iridescenceThicknessMap,Ae=J&&!!b.sheenColorMap,ze=J&&!!b.sheenRoughnessMap,Me=!!b.specularMap,Ee=!!b.specularColorMap,He=!!b.specularIntensityMap,k=le&&!!b.transmissionMap,we=le&&!!b.thicknessMap,Pe=!!b.gradientMap,De=!!b.alphaMap,be=b.alphaTest>0,me=!!b.alphaHash,Ge=!!b.extensions,$e=Li;b.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($e=n.toneMapping);let At={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:Te,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:N,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:K,batchingColor:K&&j._colorsTexture!==null,instancing:W,instancingColor:W&&j.instanceColor!==null,instancingMorph:W&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Re,envMap:T,envMapMode:T&&te.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:O,bumpMap:X,normalMap:F,displacementMap:f&&ce,emissiveMap:ne,normalMapObjectSpace:F&&b.normalMapType===dg,normalMapTangentSpace:F&&b.normalMapType===_u,metalnessMap:fe,roughnessMap:Ne,anisotropy:Ue,anisotropyMap:$,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:de,clearcoatRoughnessMap:xe,dispersion:y,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:ze,specularMap:Me,specularColorMap:Ee,specularIntensityMap:He,transmission:le,transmissionMap:k,thicknessMap:we,gradientMap:Pe,opaque:b.transparent===!1&&b.blending===Ts&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:be,alphaHash:me,combine:b.combine,mapUv:ae&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:O&&x(b.lightMap.channel),bumpMapUv:X&&x(b.bumpMap.channel),normalMapUv:F&&x(b.normalMap.channel),displacementMapUv:ce&&x(b.displacementMap.channel),emissiveMapUv:ne&&x(b.emissiveMap.channel),metalnessMapUv:fe&&x(b.metalnessMap.channel),roughnessMapUv:Ne&&x(b.roughnessMap.channel),anisotropyMapUv:$&&x(b.anisotropyMap.channel),clearcoatMapUv:ge&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(b.sheenRoughnessMap.channel),specularMapUv:Me&&x(b.specularMap.channel),specularColorMapUv:Ee&&x(b.specularColorMap.channel),specularIntensityMapUv:He&&x(b.specularIntensityMap.channel),transmissionMapUv:k&&x(b.transmissionMap.channel),thicknessMapUv:we&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(F||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(ae||De),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ht,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||K)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(_,b),w(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function w(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let _=p[b.type],C;if(_){let U=gi[_];C=vu.clone(U.uniforms)}else C=b.uniforms;return C}function E(b,_){let C;for(let U=0,j=u.length;U<j;U++){let H=u[U];if(H.cacheKey===_){C=H,++C.usedTimes;break}}return C===void 0&&(C=new MS(n,_,b,r),u.push(C)),C}function P(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:L}}function wS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||TS),i.length>1&&i.sort(f||jg),s.length>1&&s.sort(f||jg)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function AS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Jg,n.set(i,[o])):s>=r.length?(o=new Jg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ES(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Fe};break;case"SpotLight":t={position:new M,direction:new M,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function CS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var RS=0;function PS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){let e=new ES,t=CS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new ot,o=new ot;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,S=0,w=0,v=0,E=0,P=0,D=0;c.sort(PS);for(let b=0,_=c.length;b<_;b++){let C=c[b],U=C.color,j=C.intensity,H=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*j,d+=U.g*j,f+=U.b*j;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],j);D++}else if(C.isDirectionalLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=C.shadow.matrix,S++}i.directional[h]=Z,h++}else if(C.isSpotLight){let Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(U).multiplyScalar(j),Z.distance=H,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,i.spot[x]=Z;let te=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,te.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[x]=te.matrix,C.castShadow){let B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=V,v++}x++}else if(C.isRectAreaLight){let Z=e.get(C);Z.color.copy(U).multiplyScalar(j),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=Z,g++}else if(C.isPointLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){let te=C.shadow,B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,B.shadowCameraNear=te.camera.near,B.shadowCameraFar=te.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=C.shadow.matrix,w++}i.point[p]=Z,p++}else if(C.isHemisphereLight){let Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(j),Z.groundColor.copy(C.groundColor).multiplyScalar(j),i.hemi[m]=Z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==v||L.numSpotMaps!==E||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,L.directionalLength=h,L.pointLength=p,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=v,L.numSpotMaps=E,L.numLightProbes=D,i.version=RS++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let w=c[m];if(w.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(w.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Kg(n){let e=new IS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kg(n),e.set(s,[a])):r>=o.length?(a=new Kg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
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
}`;function NS(n,e,t){let i=new Br,s=new Se,r=new Se,o=new at,a=new pc({depthPacking:hg}),l=new mc,c={},u=t.maxTextureSize,d={[ii]:cn,[cn]:ii,[Ht]:Ht},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:DS,fragmentShader:US}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(P,D,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let b=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ii),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let j=m!==pi&&this.type===pi,H=m===pi&&this.type!==pi;for(let V=0,Z=P.length;V<Z;V++){let te=P[V],B=te.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Y=B.getFrameExtents();if(s.multiply(Y),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y)),B.map===null||j===!0||H===!0){let ie=this.type!==pi?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new Tn(s.x,s.y,ie),B.map.texture.name=te.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let oe=B.getViewportCount();for(let ie=0;ie<oe;ie++){let pe=B.getViewport(ie);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o),B.updateMatrices(te,ie),i=B.getFrustum(),v(D,L,B.camera,te,this.type)}B.isPointLightShadow!==!0&&this.type===pi&&S(B,L),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,_,C)};function S(P,D){let L=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Tn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,x,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,L,h,x,null)}function w(P,D,L,b){let _=null,C=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)_=C;else if(_=L.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let U=_.uuid,j=D.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let V=H[j];V===void 0&&(V=_.clone(),H[j]=V,D.addEventListener("dispose",E)),_=V}if(_.visible=D.visible,_.wireframe=D.wireframe,b===pi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let U=n.properties.get(_);U.light=L}return _}function v(P,D,L,b,_){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===pi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);let j=e.update(P),H=P.material;if(Array.isArray(H)){let V=j.groups;for(let Z=0,te=V.length;Z<te;Z++){let B=V[Z],Y=H[B.materialIndex];if(Y&&Y.visible){let oe=w(P,Y,b,_);P.onBeforeShadow(n,P,D,L,j,oe,B),n.renderBufferDirect(L,null,j,oe,P,B),P.onAfterShadow(n,P,D,L,j,oe,B)}}}else if(H.visible){let V=w(P,H,b,_);P.onBeforeShadow(n,P,D,L,j,V,null),n.renderBufferDirect(L,null,j,V,P,null),P.onAfterShadow(n,P,D,L,j,V,null)}}let U=P.children;for(let j=0,H=U.length;j<H;j++)v(U[j],D,L,b,_)}function E(P){P.target.removeEventListener("dispose",E);for(let L in c){let b=c[L],_=P.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var FS={[Ec]:Cc,[Rc]:Lc,[Pc]:Dc,[As]:Ic,[Cc]:Ec,[Lc]:Rc,[Dc]:Pc,[Ic]:As};function BS(n,e){function t(){let k=!1,we=new at,Pe=null,De=new at(0,0,0,0);return{setMask:function(be){Pe!==be&&!k&&(n.colorMask(be,be,be,be),Pe=be)},setLocked:function(be){k=be},setClear:function(be,me,Ge,$e,At){At===!0&&(be*=$e,me*=$e,Ge*=$e),we.set(be,me,Ge,$e),De.equals(we)===!1&&(n.clearColor(be,me,Ge,$e),De.copy(we))},reset:function(){k=!1,Pe=null,De.set(-1,0,0,0)}}}function i(){let k=!1,we=!1,Pe=null,De=null,be=null;return{setReversed:function(me){if(we!==me){let Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=me;let $e=be;be=null,this.setClear($e)}},getReversed:function(){return we},setTest:function(me){me?G(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(me){Pe!==me&&!k&&(n.depthMask(me),Pe=me)},setFunc:function(me){if(we&&(me=FS[me]),De!==me){switch(me){case Ec:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Rc:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Pc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Lc:n.depthFunc(n.GREATER);break;case Dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=me}},setLocked:function(me){k=me},setClear:function(me){be!==me&&(we&&(me=1-me),n.clearDepth(me),be=me)},reset:function(){k=!1,Pe=null,De=null,be=null,we=!1}}}function s(){let k=!1,we=null,Pe=null,De=null,be=null,me=null,Ge=null,$e=null,At=null;return{setTest:function(ft){k||(ft?G(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(ft){we!==ft&&!k&&(n.stencilMask(ft),we=ft)},setFunc:function(ft,vi,ci){(Pe!==ft||De!==vi||be!==ci)&&(n.stencilFunc(ft,vi,ci),Pe=ft,De=vi,be=ci)},setOp:function(ft,vi,ci){(me!==ft||Ge!==vi||$e!==ci)&&(n.stencilOp(ft,vi,ci),me=ft,Ge=vi,$e=ci)},setLocked:function(ft){k=ft},setClear:function(ft){At!==ft&&(n.clearStencil(ft),At=ft)},reset:function(){k=!1,we=null,Pe=null,De=null,be=null,me=null,Ge=null,$e=null,At=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,S=null,w=null,v=null,E=null,P=null,D=new Fe(0,0,0),L=0,b=!1,_=null,C=null,U=null,j=null,H=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,te=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(B)[1]),Z=te>=1):B.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Z=te>=2);let Y=null,oe={},ie=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ve=new at().fromArray(ie),Te=new at().fromArray(pe);function ye(k,we,Pe,De){let be=new Uint8Array(4),me=n.createTexture();n.bindTexture(k,me),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Pe;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(we+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return me}let N={};N[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),N[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),N[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(As),X(!1),F(Fd),G(n.CULL_FACE),z(Ii);function G(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function he(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function W(k,we){return d[k]!==we?(n.bindFramebuffer(k,we),d[k]=we,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=we),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=we),!0):!1}function K(k,we){let Pe=h,De=!1;if(k){Pe=f.get(we),Pe===void 0&&(Pe=[],f.set(we,Pe));let be=k.textures;if(Pe.length!==be.length||Pe[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ge=be.length;me<Ge;me++)Pe[me]=n.COLOR_ATTACHMENT0+me;Pe.length=be.length,De=!0}}else Pe[0]!==n.BACK&&(Pe[0]=n.BACK,De=!0);De&&n.drawBuffers(Pe)}function ae(k){return p!==k?(n.useProgram(k),p=k,!0):!1}let Re={[$i]:n.FUNC_ADD,[Om]:n.FUNC_SUBTRACT,[zm]:n.FUNC_REVERSE_SUBTRACT};Re[Vm]=n.MIN,Re[km]=n.MAX;let T={[Gm]:n.ZERO,[Hm]:n.ONE,[Wm]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[Jm]:n.SRC_ALPHA_SATURATE,[Zm]:n.DST_COLOR,[qm]:n.DST_ALPHA,[Xm]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[jm]:n.ONE_MINUS_DST_COLOR,[Ym]:n.ONE_MINUS_DST_ALPHA,[Km]:n.CONSTANT_COLOR,[$m]:n.ONE_MINUS_CONSTANT_COLOR,[Qm]:n.CONSTANT_ALPHA,[eg]:n.ONE_MINUS_CONSTANT_ALPHA};function z(k,we,Pe,De,be,me,Ge,$e,At,ft){if(k===Ii){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(G(n.BLEND),x=!0),k!==Bm){if(k!==g||ft!==b){if((m!==$i||v!==$i)&&(n.blendEquation(n.FUNC_ADD),m=$i,v=$i),ft)switch(k){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFunc(n.ONE,n.ONE);break;case Bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Od:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,w=null,E=null,P=null,D.set(0,0,0),L=0,g=k,b=ft}return}be=be||we,me=me||Pe,Ge=Ge||De,(we!==m||be!==v)&&(n.blendEquationSeparate(Re[we],Re[be]),m=we,v=be),(Pe!==S||De!==w||me!==E||Ge!==P)&&(n.blendFuncSeparate(T[Pe],T[De],T[me],T[Ge]),S=Pe,w=De,E=me,P=Ge),($e.equals(D)===!1||At!==L)&&(n.blendColor($e.r,$e.g,$e.b,At),D.copy($e),L=At),g=k,b=!1}function O(k,we){k.side===Ht?he(n.CULL_FACE):G(n.CULL_FACE);let Pe=k.side===cn;we&&(Pe=!Pe),X(Pe),k.blending===Ts&&k.transparent===!1?z(Ii):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let De=k.stencilWrite;a.setTest(De),De&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function F(k){k!==Um?(G(n.CULL_FACE),k!==C&&(k===Fd?n.cullFace(n.BACK):k===Nm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),C=k}function ce(k){k!==U&&(Z&&n.lineWidth(k),U=k)}function ne(k,we,Pe){k?(G(n.POLYGON_OFFSET_FILL),(j!==we||H!==Pe)&&(n.polygonOffset(we,Pe),j=we,H=Pe)):he(n.POLYGON_OFFSET_FILL)}function fe(k){k?G(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=n.TEXTURE0+V-1),Y!==k&&(n.activeTexture(k),Y=k)}function Ue(k,we,Pe){Pe===void 0&&(Y===null?Pe=n.TEXTURE0+V-1:Pe=Y);let De=oe[Pe];De===void 0&&(De={type:void 0,texture:void 0},oe[Pe]=De),(De.type!==k||De.texture!==we)&&(Y!==Pe&&(n.activeTexture(Pe),Y=Pe),n.bindTexture(k,we||N[k]),De.type=k,De.texture=we)}function R(){let k=oe[Y];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(k){ve.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function ze(k){Te.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Me(k,we){let Pe=c.get(we);Pe===void 0&&(Pe=new WeakMap,c.set(we,Pe));let De=Pe.get(k);De===void 0&&(De=n.getUniformBlockIndex(we,k.name),Pe.set(k,De))}function Ee(k,we){let De=c.get(we).get(k);l.get(we)!==De&&(n.uniformBlockBinding(we,De,k.__bindingPointIndex),l.set(we,De))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,oe={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,S=null,w=null,v=null,E=null,P=null,D=new Fe(0,0,0),L=0,b=!1,_=null,C=null,U=null,j=null,H=null,ve.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:he,bindFramebuffer:W,drawBuffers:K,useProgram:ae,setBlending:z,setMaterial:O,setFlipSided:X,setCullFace:F,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:fe,activeTexture:Ne,bindTexture:Ue,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:_e,texImage3D:ue,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:de,texStorage3D:xe,texSubImage2D:J,texSubImage3D:le,compressedTexSubImage2D:$,compressedTexSubImage3D:ge,scissor:Ae,viewport:ze,reset:He}}function OS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return h?new OffscreenCanvas(R,y):Rr("canvas")}function x(R,y,I){let J=1,le=Ue(R);if((le.width>I||le.height>I)&&(J=I/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(J*le.width),ge=Math.floor(J*le.height);d===void 0&&(d=p($,ge));let de=y?p($,ge):d;return de.width=$,de.height=ge,de.getContext("2d").drawImage(R,0,0,$,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+$+"x"+ge+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,I,J,le=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===n.RED&&(I===n.FLOAT&&($=n.R32F),I===n.HALF_FLOAT&&($=n.R16F),I===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.R8UI),I===n.UNSIGNED_SHORT&&($=n.R16UI),I===n.UNSIGNED_INT&&($=n.R32UI),I===n.BYTE&&($=n.R8I),I===n.SHORT&&($=n.R16I),I===n.INT&&($=n.R32I)),y===n.RG&&(I===n.FLOAT&&($=n.RG32F),I===n.HALF_FLOAT&&($=n.RG16F),I===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RG8UI),I===n.UNSIGNED_SHORT&&($=n.RG16UI),I===n.UNSIGNED_INT&&($=n.RG32UI),I===n.BYTE&&($=n.RG8I),I===n.SHORT&&($=n.RG16I),I===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGB8UI),I===n.UNSIGNED_SHORT&&($=n.RGB16UI),I===n.UNSIGNED_INT&&($=n.RGB32UI),I===n.BYTE&&($=n.RGB8I),I===n.SHORT&&($=n.RGB16I),I===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGBA8UI),I===n.UNSIGNED_SHORT&&($=n.RGBA16UI),I===n.UNSIGNED_INT&&($=n.RGBA32UI),I===n.BYTE&&($=n.RGBA8I),I===n.SHORT&&($=n.RGBA16I),I===n.INT&&($=n.RGBA32I)),y===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),y===n.RGBA){let ge=le?Xo:lt.getTransfer(J);I===n.FLOAT&&($=n.RGBA32F),I===n.HALF_FLOAT&&($=n.RGBA16F),I===n.UNSIGNED_BYTE&&($=ge===yt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(R,y){let I;return R?y===null||y===is||y===Yr?I=n.DEPTH24_STENCIL8:y===si?I=n.DEPTH32F_STENCIL8:y===qr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===is||y===Yr?I=n.DEPTH_COMPONENT24:y===si?I=n.DEPTH_COMPONENT32F:y===qr&&(I=n.DEPTH_COMPONENT16),I}function E(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){let y=R.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&u.delete(y)}function D(R){let y=R.target;y.removeEventListener("dispose",D),_(y)}function L(R){let y=i.get(R);if(y.__webglInit===void 0)return;let I=R.source,J=f.get(I);if(J){let le=J[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(R),Object.keys(J).length===0&&f.delete(I)}i.remove(R)}function b(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let I=R.source,J=f.get(I);delete J[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let le=0;le<y.__webglFramebuffer[J].length;le++)n.deleteFramebuffer(y.__webglFramebuffer[J][le]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=R.textures;for(let J=0,le=I.length;J<le;J++){let $=i.get(I[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(I[J])}i.remove(R)}let C=0;function U(){C=0}function j(){let R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function H(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function V(R,y){let I=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}function Z(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){N(I,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}function te(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){N(I,R,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}function B(R,y){let I=i.get(R);if(R.version>0&&I.__version!==R.version){G(I,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}let Y={[di]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},oe={[on]:n.NEAREST,[cg]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Bc]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},ie={[fg]:n.NEVER,[_g]:n.ALWAYS,[pg]:n.LESS,[Yd]:n.LEQUAL,[mg]:n.EQUAL,[yg]:n.GEQUAL,[gg]:n.GREATER,[xg]:n.NOTEQUAL};function pe(R,y){if(y.type===si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===Bc||y.magFilter===Ra||y.magFilter===An||y.minFilter===an||y.minFilter===Bc||y.minFilter===Ra||y.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Y[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Y[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Y[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Ra&&y.minFilter!==An||y.type===si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));let J=y.source,le=f.get(J);le===void 0&&(le={},f.set(J,le));let $=H(y);if($!==R.__cacheKey){le[$]===void 0&&(le[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),le[$].usedTimes++;let ge=le[R.__cacheKey];ge!==void 0&&(le[R.__cacheKey].usedTimes--,ge.usedTimes===0&&b(y)),R.__cacheKey=$,R.__webglTexture=le[$].texture}return I}function Te(R,y,I){return Math.floor(Math.floor(R/I)/y)}function ye(R,y,I,J){let $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,I,J,y.data);else{$.sort((ue,Ae)=>ue.start-Ae.start);let ge=0;for(let ue=1;ue<$.length;ue++){let Ae=$[ge],ze=$[ue],Me=Ae.start+Ae.count,Ee=Te(ze.start,y.width,4),He=Te(Ae.start,y.width,4);ze.start<=Me+1&&Ee===He&&Te(ze.start+ze.count-1,y.width,4)===Ee?Ae.count=Math.max(Ae.count,ze.start+ze.count-Ae.start):(++ge,$[ge]=ze)}$.length=ge+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Ae=$.length;ue<Ae;ue++){let ze=$[ue],Me=Math.floor(ze.start/4),Ee=Math.ceil(ze.count/4),He=Me%y.width,k=Math.floor(Me/y.width),we=Ee,Pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,He,k,we,Pe,I,J,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function N(R,y,I){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let le=ve(R,y),$=y.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+I);let ge=i.get($);if($.version!==ge.__version||le===!0){t.activeTexture(n.TEXTURE0+I);let de=lt.getPrimaries(lt.workingColorSpace),xe=y.colorSpace===Di?null:lt.getPrimaries(y.colorSpace),_e=y.colorSpace===Di||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ue=x(y.image,!1,s.maxTextureSize);ue=Ne(y,ue);let Ae=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Me=w(y.internalFormat,Ae,ze,y.colorSpace,y.isVideoTexture);pe(J,y);let Ee,He=y.mipmaps,k=y.isVideoTexture!==!0,we=ge.__version===void 0||le===!0,Pe=$.dataReady,De=E(y,ue);if(y.isDepthTexture)Me=v(y.format===Zr,y.type),we&&(k?t.texStorage2D(n.TEXTURE_2D,1,Me,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ae,ze,null));else if(y.isDataTexture)if(He.length>0){k&&we&&t.texStorage2D(n.TEXTURE_2D,De,Me,He[0].width,He[0].height);for(let be=0,me=He.length;be<me;be++)Ee=He[be],k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ae,ze,Ee.data);y.generateMipmaps=!1}else k?(we&&t.texStorage2D(n.TEXTURE_2D,De,Me,ue.width,ue.height),Pe&&ye(y,ue,Ae,ze)):t.texImage2D(n.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ae,ze,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Me,He[0].width,He[0].height,ue.depth);for(let be=0,me=He.length;be<me;be++)if(Ee=He[be],y.format!==En)if(Ae!==null)if(k){if(Pe)if(y.layerUpdates.size>0){let Ge=tf(Ee.width,Ee.height,y.format,y.type);for(let $e of y.layerUpdates){let At=Ee.data.subarray($e*Ge/Ee.data.BYTES_PER_ELEMENT,($e+1)*Ge/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,$e,Ee.width,Ee.height,1,Ae,At)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,ue.depth,Ae,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Me,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,ue.depth,Ae,ze,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Me,Ee.width,Ee.height,ue.depth,0,Ae,ze,Ee.data)}else{k&&we&&t.texStorage2D(n.TEXTURE_2D,De,Me,He[0].width,He[0].height);for(let be=0,me=He.length;be<me;be++)Ee=He[be],y.format!==En?Ae!==null?k?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ae,ze,Ee.data)}else if(y.isDataArrayTexture)if(k){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Me,ue.width,ue.height,ue.depth),Pe)if(y.layerUpdates.size>0){let be=tf(ue.width,ue.height,y.format,y.type);for(let me of y.layerUpdates){let Ge=ue.data.subarray(me*be/ue.data.BYTES_PER_ELEMENT,(me+1)*be/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ue.width,ue.height,1,Ae,ze,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ze,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ue.width,ue.height,ue.depth,0,Ae,ze,ue.data);else if(y.isData3DTexture)k?(we&&t.texStorage3D(n.TEXTURE_3D,De,Me,ue.width,ue.height,ue.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ue.width,ue.height,ue.depth,0,Ae,ze,ue.data);else if(y.isFramebufferTexture){if(we)if(k)t.texStorage2D(n.TEXTURE_2D,De,Me,ue.width,ue.height);else{let be=ue.width,me=ue.height;for(let Ge=0;Ge<De;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Me,be,me,0,Ae,ze,null),be>>=1,me>>=1}}else if(He.length>0){if(k&&we){let be=Ue(He[0]);t.texStorage2D(n.TEXTURE_2D,De,Me,be.width,be.height)}for(let be=0,me=He.length;be<me;be++)Ee=He[be],k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ae,ze,Ee):t.texImage2D(n.TEXTURE_2D,be,Me,Ae,ze,Ee);y.generateMipmaps=!1}else if(k){if(we){let be=Ue(ue);t.texStorage2D(n.TEXTURE_2D,De,Me,be.width,be.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ze,ue)}else t.texImage2D(n.TEXTURE_2D,0,Me,Ae,ze,ue);g(y)&&m(J),ge.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function G(R,y,I){if(y.image.length!==6)return;let J=ve(R,y),le=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let $=i.get(le);if(le.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+I);let ge=lt.getPrimaries(lt.workingColorSpace),de=y.colorSpace===Di?null:lt.getPrimaries(y.colorSpace),xe=y.colorSpace===Di||ge===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!_e&&!ue?Ae[me]=x(y.image[me],!0,s.maxCubemapSize):Ae[me]=ue?y.image[me].image:y.image[me],Ae[me]=Ne(y,Ae[me]);let ze=Ae[0],Me=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),He=w(y.internalFormat,Me,Ee,y.colorSpace),k=y.isVideoTexture!==!0,we=$.__version===void 0||J===!0,Pe=le.dataReady,De=E(y,ze);pe(n.TEXTURE_CUBE_MAP,y);let be;if(_e){k&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,He,ze.width,ze.height);for(let me=0;me<6;me++){be=Ae[me].mipmaps;for(let Ge=0;Ge<be.length;Ge++){let $e=be[Ge];y.format!==En?Me!==null?k?Pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,$e.width,$e.height,Me,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,He,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,$e.width,$e.height,Me,Ee,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,He,$e.width,$e.height,0,Me,Ee,$e.data)}}}else{if(be=y.mipmaps,k&&we){be.length>0&&De++;let me=Ue(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,He,me.width,me.height)}for(let me=0;me<6;me++)if(ue){k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Me,Ee,Ae[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Ae[me].width,Ae[me].height,0,Me,Ee,Ae[me].data);for(let Ge=0;Ge<be.length;Ge++){let At=be[Ge].image[me].image;k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,At.width,At.height,Me,Ee,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,He,At.width,At.height,0,Me,Ee,At.data)}}else{k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me,Ee,Ae[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Me,Ee,Ae[me]);for(let Ge=0;Ge<be.length;Ge++){let $e=be[Ge];k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,Me,Ee,$e.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,He,Me,Ee,$e.image[me])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),$.__version=le.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,I,J,le,$){let ge=r.convert(I.format,I.colorSpace),de=r.convert(I.type),xe=w(I.internalFormat,ge,de,I.colorSpace),_e=i.get(y),ue=i.get(I);if(ue.__renderTarget=y,!_e.__hasExternalTextures){let Ae=Math.max(1,y.width>>$),ze=Math.max(1,y.height>>$);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,$,xe,Ae,ze,y.depth,0,ge,de,null):t.texImage2D(le,$,xe,Ae,ze,0,ge,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,le,ue.__webglTexture,0,ce(y)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,le,ue.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(R,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let J=y.depthTexture,le=J&&J.isDepthTexture?J.type:null,$=v(y.stencilBuffer,le),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=ce(y);ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,$,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,R)}else{let J=y.textures;for(let le=0;le<J.length;le++){let $=J[le],ge=r.convert($.format,$.colorSpace),de=r.convert($.type),xe=w($.internalFormat,ge,de,$.colorSpace),_e=ce(y);I&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,xe,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let le=J.__webglTexture,$=ce(y);if(y.depthTexture.format===Er)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(y.depthTexture.format===Zr)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ae(R){let y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=J}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?K(y.__webglFramebuffer[0],R):K(y.__webglFramebuffer,R)}else if(I){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),W(y.__webglDepthbuffer[J],R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,$)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),W(y.__webglDepthbuffer,R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,y,I){let J=i.get(R);y!==void 0&&he(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ae(R)}function T(R){let y=R.texture,I=i.get(R),J=i.get(y);R.addEventListener("dispose",D);let le=R.textures,$=R.isWebGLCubeRenderTarget===!0,ge=le.length>1;if(ge||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),$){I.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[de]=[];for(let xe=0;xe<y.mipmaps.length;xe++)I.__webglFramebuffer[de][xe]=n.createFramebuffer()}else I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ge)for(let de=0,xe=le.length;de<xe;de++){let _e=i.get(le[de]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){let xe=le[de];I.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[de]);let _e=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),Ae=w(xe.internalFormat,_e,ue,xe.colorSpace,R.isXRRenderTarget===!0),ze=ce(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,I.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),W(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),pe(n.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(I.__webglFramebuffer[de][xe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else he(I.__webglFramebuffer[de],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let de=0,xe=le.length;de<xe;de++){let _e=le[de],ue=i.get(_e),Ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),pe(Ae,_e),he(I.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+de,Ae,0),g(_e)&&m(Ae)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),pe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(I.__webglFramebuffer[xe],R,y,n.COLOR_ATTACHMENT0,de,xe);else he(I.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,de,0);g(y)&&m(de),t.unbindTexture()}R.depthBuffer&&ae(R)}function z(R){let y=R.textures;for(let I=0,J=y.length;I<J;I++){let le=y[I];if(g(le)){let $=S(R),ge=i.get(le).__webglTexture;t.bindTexture($,ge),m($),t.unbindTexture()}}}let O=[],X=[];function F(R){if(R.samples>0){if(ne(R)===!1){let y=R.textures,I=R.width,J=R.height,le=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),de=y.length>1;if(de)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ue=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,I,J,0,0,I,J,le,n.NEAREST),l===!0&&(O.length=0,X.length=0,O.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(O.push($),X.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ue=i.get(y[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ce(R){return Math.min(s.maxSamples,R.samples)}function ne(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ne(R,y){let I=R.colorSpace,J=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Es&&I!==Di&&(lt.getTransfer(I)===yt?(J!==En||le!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=T,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ne}function zS(n,e){function t(i,s=Di){let r,o=lt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vd)return n.BYTE;if(i===kd)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Xd)return n.RGB;if(i===En)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===qd)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===Pa||i===Ia||i===La||i===Da)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===qc||i===Yc||i===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Jc||i===Kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jc||i===Jc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$c||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ru)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===du||i===fu||i===pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===du)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mu||i===gu||i===xu||i===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kS=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:VS,fragmentShader:kS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new mf,m={},S=t.getContextAttributes(),w=null,v=null,E=[],P=[],D=new Se,L=null,b=new kt;b.viewport=new at;let _=new kt;_.viewport=new at;let C=[b,_],U=new Ac,j=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=E[N];return G===void 0&&(G=new Dr,E[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=E[N];return G===void 0&&(G=new Dr,E[N]=G),G.getGripSpace()},this.getHand=function(N){let G=E[N];return G===void 0&&(G=new Dr,E[N]=G),G.getHandSpace()};function V(N){let G=P.indexOf(N.inputSource);if(G===-1)return;let he=E[G];he!==void 0&&(he.update(N.inputSource,N.frame,c||o),he.dispatchEvent({type:N.type,data:N.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",te);for(let N=0;N<E.length;N++){let G=P[N];G!==null&&(P[N]=null,E[N].disconnect(G))}j=null,H=null,g.reset();for(let N in m)delete m[N];e.setRenderTarget(w),h=null,f=null,d=null,s=null,v=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,W=null,K=null;S.depth&&(K=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?Zr:Er,W=S.stencil?Yr:is);let ae={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Tn(f.textureWidth,f.textureHeight,{format:En,type:On,depthTexture:new ra(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Tn(h.framebufferWidth,h.framebufferHeight,{format:En,type:On,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(N){for(let G=0;G<N.removed.length;G++){let he=N.removed[G],W=P.indexOf(he);W>=0&&(P[W]=null,E[W].disconnect(he))}for(let G=0;G<N.added.length;G++){let he=N.added[G],W=P.indexOf(he);if(W===-1){for(let ae=0;ae<E.length;ae++)if(ae>=P.length){P.push(he),W=ae;break}else if(P[ae]===null){P[ae]=he,W=ae;break}if(W===-1)break}let K=E[W];K&&K.connect(he)}}let B=new M,Y=new M;function oe(N,G,he){B.setFromMatrixPosition(G.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);let W=B.distanceTo(Y),K=G.projectionMatrix.elements,ae=he.projectionMatrix.elements,Re=K[14]/(K[10]-1),T=K[14]/(K[10]+1),z=(K[9]+1)/K[5],O=(K[9]-1)/K[5],X=(K[8]-1)/K[0],F=(ae[8]+1)/ae[0],ce=Re*X,ne=Re*F,fe=W/(-X+F),Ne=fe*-X;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ne),N.translateZ(fe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),K[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Ue=Re+fe,R=T+fe,y=ce-Ne,I=ne+(W-Ne),J=z*T/R*Ue,le=O*T/R*Ue;N.projectionMatrix.makePerspective(y,I,J,le,Ue,R),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ie(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let G=N.near,he=N.far;g.texture!==null&&(g.depthNear>0&&(G=g.depthNear),g.depthFar>0&&(he=g.depthFar)),U.near=_.near=b.near=G,U.far=_.far=b.far=he,(j!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),j=U.near,H=U.far),U.layers.mask=N.layers.mask|6,b.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;let W=N.parent,K=U.cameras;ie(U,W);for(let ae=0;ae<K.length;ae++)ie(K[ae],W);K.length===2?oe(U,b,_):U.projectionMatrix.copy(b.projectionMatrix),pe(N,U,W)};function pe(N,G,he){he===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(he.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Cr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(N){return m[N]};let ve=null;function Te(N,G){if(u=G.getViewerPose(c||o),p=G,u!==null){let he=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let W=!1;he.length!==U.cameras.length&&(U.cameras.length=0,W=!0);for(let T=0;T<he.length;T++){let z=he[T],O=null;if(h!==null)O=h.getViewport(z);else{let F=d.getViewSubImage(f,z);O=F.viewport,T===0&&(e.setRenderTargetTextures(v,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(v))}let X=C[T];X===void 0&&(X=new kt,X.layers.enable(T),X.viewport=new at,C[T]=X),X.matrix.fromArray(z.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(z.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(O.x,O.y,O.width,O.height),T===0&&(U.matrix.copy(X.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),W===!0&&U.cameras.push(X)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let T=d.getDepthInformation(he[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(K&&K.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<he.length;T++){let z=he[T].camera;if(z){let O=m[z];O||(O=new oa,m[z]=O);let X=d.getCameraImage(z);O.sourceTexture=X}}}}for(let he=0;he<E.length;he++){let W=P[he],K=E[he];W!==null&&K!==void 0&&K.update(W,G,c||o)}ve&&ve(N,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),p=null}let ye=new $g;ye.setAnimationLoop(Te),this.setAnimationLoop=function(N){ve=N},this.dispose=function(){}}},zs=new ln,GS=new ot;function HS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Kd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,w,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,v=S.envMapRotation;w&&(g.envMap.value=w,zs.copy(v),zs.x*=-1,zs.y*=-1,zs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),g.envMapRotation.value.setFromMatrix4(GS.makeRotationFromEuler(zs)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let v=w.program;i.uniformBlockBinding(S,v)}function c(S,w){let v=s[S.id];v===void 0&&(p(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",g));let E=w.program;i.updateUBOMapping(S,E);let P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function u(S){let w=d();S.__bindingPointIndex=w;let v=n.createBuffer(),E=S.__size,P=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let w=s[S.id],v=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,D=v.length;P<D;P++){let L=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,_=L.length;b<_;b++){let C=L[b];if(h(C,P,b,E)===!0){let U=C.__offset,j=Array.isArray(C.value)?C.value:[C.value],H=0;for(let V=0;V<j.length;V++){let Z=j[V],te=x(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,U+H,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,w,v,E){let P=S.value,D=w+"_"+v;if(E[D]===void 0)return typeof P=="number"||typeof P=="boolean"?E[D]=P:E[D]=P.clone(),!0;{let L=E[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return E[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function p(S){let w=S.uniforms,v=0,E=16;for(let D=0,L=w.length;D<L;D++){let b=Array.isArray(w[D])?w[D]:[w[D]];for(let _=0,C=b.length;_<C;_++){let U=b[_],j=Array.isArray(U.value)?U.value:[U.value];for(let H=0,V=j.length;H<V;H++){let Z=j[H],te=x(Z),B=v%E,Y=B%te.boundary,oe=B+Y;v+=Y,oe!==0&&E-oe<te.storage&&(v+=E-oe),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=te.storage}}}let P=v%E;return P>0&&(v+=E-P),S.__size=v,S.__cache={},this}function x(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){let w=S.target;w.removeEventListener("dispose",g);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var wu=class{constructor(e={}){let{canvas:t=vg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=xt;let P=0,D=0,L=null,b=-1,_=null,C=new at,U=new at,j=null,H=new Fe(0),V=0,Z=t.width,te=t.height,B=1,Y=null,oe=null,ie=new at(0,0,Z,te),pe=new at(0,0,Z,te),ve=!1,Te=new Br,ye=!1,N=!1,G=new ot,he=new M,W=new at,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Re(){return L===null?B:1}let T=i;function z(A,Q){return t.getContext(A,Q)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),T===null){let Q="webgl2";if(T=z(Q,A),T===null)throw z(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let O,X,F,ce,ne,fe,Ne,Ue,R,y,I,J,le,$,ge,de,xe,_e,ue,Ae,ze,Me,Ee,He;function k(){O=new l1(T),O.init(),Me=new zS(T,O),X=new t1(T,O,e,Me),F=new BS(T,O),X.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),ce=new h1(T),ne=new wS,fe=new OS(T,O,F,ne,X,Me,ce),Ne=new i1(v),Ue=new a1(v),R=new xv(T),Ee=new Qb(T,R),y=new c1(T,R,ce,Ee),I=new f1(T,y,R,ce),ue=new d1(T,X,fe),de=new n1(ne),J=new SS(v,Ne,Ue,O,X,Ee,de),le=new HS(v,ne),$=new AS,ge=new LS(O),_e=new $b(v,Ne,Ue,F,I,h,l),xe=new NS(v,I,X),He=new WS(T,ce,X,F),Ae=new e1(T,O,ce),ze=new u1(T,O,ce),ce.programs=J.programs,v.capabilities=X,v.extensions=O,v.properties=ne,v.renderLists=$,v.shadowMap=xe,v.state=F,v.info=ce}k();let we=new gf(v,T);this.xr=we,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(Z,te,!1))},this.getSize=function(A){return A.set(Z,te)},this.setSize=function(A,Q,se=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,te=Q,t.width=Math.floor(A*B),t.height=Math.floor(Q*B),se===!0&&(t.style.width=A+"px",t.style.height=Q+"px"),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(Z*B,te*B).floor()},this.setDrawingBufferSize=function(A,Q,se){Z=A,te=Q,B=se,t.width=Math.floor(A*se),t.height=Math.floor(Q*se),this.setViewport(0,0,A,Q)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,Q,se,re){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,Q,se,re),F.viewport(C.copy(ie).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,Q,se,re){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,Q,se,re),F.scissor(U.copy(pe).multiplyScalar(B).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){F.setScissorTest(ve=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,se=!0){let re=0;if(A){let ee=!1;if(L!==null){let Ce=L.texture.format;ee=Ce===Wc||Ce===Hc||Ce===Gc}if(ee){let Ce=L.texture.type,Le=Ce===On||Ce===is||Ce===qr||Ce===Yr||Ce===zc||Ce===Vc,Ve=_e.getClearColor(),Oe=_e.getClearAlpha(),Ye=Ve.r,Ze=Ve.g,We=Ve.b;Le?(p[0]=Ye,p[1]=Ze,p[2]=We,p[3]=Oe,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Ye,x[1]=Ze,x[2]=We,x[3]=Oe,T.clearBufferiv(T.COLOR,0,x))}else re|=T.COLOR_BUFFER_BIT}Q&&(re|=T.DEPTH_BUFFER_BIT),se&&(re|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),_e.dispose(),$.dispose(),ge.dispose(),ne.dispose(),Ne.dispose(),Ue.dispose(),I.dispose(),Ee.dispose(),He.dispose(),J.dispose(),we.dispose(),we.removeEventListener("sessionstart",ci),we.removeEventListener("sessionend",Wp),ys.stop()};function Pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=ce.autoReset,Q=xe.enabled,se=xe.autoUpdate,re=xe.needsUpdate,ee=xe.type;k(),ce.autoReset=A,xe.enabled=Q,xe.autoUpdate=se,xe.needsUpdate=re,xe.type=ee}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){let Q=A.target;Q.removeEventListener("dispose",me),Ge(Q)}function Ge(A){$e(A),ne.remove(A)}function $e(A){let Q=ne.get(A).programs;Q!==void 0&&(Q.forEach(function(se){J.releaseProgram(se)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,se,re,ee,Ce){Q===null&&(Q=K);let Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=Oy(A,Q,se,re,ee);F.setMaterial(re,Le);let Oe=se.index,Ye=1;if(re.wireframe===!0){if(Oe=y.getWireframeAttribute(se),Oe===void 0)return;Ye=2}let Ze=se.drawRange,We=se.attributes.position,rt=Ze.start*Ye,vt=(Ze.start+Ze.count)*Ye;Ce!==null&&(rt=Math.max(rt,Ce.start*Ye),vt=Math.min(vt,(Ce.start+Ce.count)*Ye)),Oe!==null?(rt=Math.max(rt,0),vt=Math.min(vt,Oe.count)):We!=null&&(rt=Math.max(rt,0),vt=Math.min(vt,We.count));let Vt=vt-rt;if(Vt<0||Vt===1/0)return;Ee.setup(ee,re,Ve,se,Oe);let Pt,wt=Ae;if(Oe!==null&&(Pt=R.get(Oe),wt=ze,wt.setIndex(Pt)),ee.isMesh)re.wireframe===!0?(F.setLineWidth(re.wireframeLinewidth*Re()),wt.setMode(T.LINES)):wt.setMode(T.TRIANGLES);else if(ee.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),F.setLineWidth(Xe*Re()),ee.isLineSegments?wt.setMode(T.LINES):ee.isLineLoop?wt.setMode(T.LINE_LOOP):wt.setMode(T.LINE_STRIP)}else ee.isPoints?wt.setMode(T.POINTS):ee.isSprite&&wt.setMode(T.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Xe=ee._multiDrawStarts,Nt=ee._multiDrawCounts,ct=ee._multiDrawCount,Ln=Oe?R.get(Oe).bytesPerElement:1,rr=ne.get(re).currentProgram.getUniforms();for(let Dn=0;Dn<ct;Dn++)rr.setValue(T,"_gl_DrawID",Dn),wt.render(Xe[Dn]/Ln,Nt[Dn])}else if(ee.isInstancedMesh)wt.renderInstances(rt,Vt,ee.count);else if(se.isInstancedBufferGeometry){let Xe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Nt=Math.min(se.instanceCount,Xe);wt.renderInstances(rt,Vt,Nt)}else wt.render(rt,Vt)};function At(A,Q,se){A.transparent===!0&&A.side===Ht&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,xl(A,Q,se),A.side=ii,A.needsUpdate=!0,xl(A,Q,se),A.side=Ht):xl(A,Q,se)}this.compile=function(A,Q,se=null){se===null&&(se=A),m=ge.get(se),m.init(Q),w.push(m),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),A!==se&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights();let re=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ce=ee.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){let Ve=Ce[Le];At(Ve,se,ee),re.add(Ve)}else At(Ce,se,ee),re.add(Ce)}),m=w.pop(),re},this.compileAsync=function(A,Q,se=null){let re=this.compile(A,Q,se);return new Promise(ee=>{function Ce(){if(re.forEach(function(Le){ne.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){ee(A);return}setTimeout(Ce,10)}O.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ft=null;function vi(A){ft&&ft(A)}function ci(){ys.stop()}function Wp(){ys.start()}let ys=new $g;ys.setAnimationLoop(vi),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(A){ft=A,we.setAnimationLoop(A),A===null?ys.stop():ys.start()},we.addEventListener("sessionstart",ci),we.addEventListener("sessionend",Wp),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Q,L),m=ge.get(A,w.length),m.init(Q),w.push(m),G.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Te.setFromProjectionMatrix(G,ni,Q.reversedDepth),N=this.localClippingEnabled,ye=de.init(this.clippingPlanes,N),g=$.get(A,S.length),g.init(),S.push(g),we.enabled===!0&&we.isPresenting===!0){let Ce=v.xr.getDepthSensingMesh();Ce!==null&&qh(Ce,Q,-1/0,v.sortObjects)}qh(A,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,oe),ae=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ae&&_e.addToRenderList(g,A),this.info.render.frame++,ye===!0&&de.beginShadows();let se=m.state.shadowsArray;xe.render(se,A,Q),ye===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=g.opaque,ee=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Ce=Q.cameras;if(ee.length>0)for(let Le=0,Ve=Ce.length;Le<Ve;Le++){let Oe=Ce[Le];qp(re,ee,A,Oe)}ae&&_e.render(A);for(let Le=0,Ve=Ce.length;Le<Ve;Le++){let Oe=Ce[Le];Xp(g,A,Oe,Oe.viewport)}}else ee.length>0&&qp(re,ee,A,Q),ae&&_e.render(A),Xp(g,A,Q);L!==null&&D===0&&(fe.updateMultisampleRenderTarget(L),fe.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(v,A,Q),Ee.resetDefaultState(),b=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],ye===!0&&de.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function qh(A,Q,se,re){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){re&&W.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);let Le=I.update(A),Ve=A.material;Ve.visible&&g.push(A,Le,Ve,se,W.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){let Le=I.update(A),Ve=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),W.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),W.copy(Le.boundingSphere.center)),W.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(Ve)){let Oe=Le.groups;for(let Ye=0,Ze=Oe.length;Ye<Ze;Ye++){let We=Oe[Ye],rt=Ve[We.materialIndex];rt&&rt.visible&&g.push(A,Le,rt,se,W.z,We)}}else Ve.visible&&g.push(A,Le,Ve,se,W.z,null)}}let Ce=A.children;for(let Le=0,Ve=Ce.length;Le<Ve;Le++)qh(Ce[Le],Q,se,re)}function Xp(A,Q,se,re){let ee=A.opaque,Ce=A.transmissive,Le=A.transparent;m.setupLightsView(se),ye===!0&&de.setGlobalState(v.clippingPlanes,se),re&&F.viewport(C.copy(re)),ee.length>0&&gl(ee,Q,se),Ce.length>0&&gl(Ce,Q,se),Le.length>0&&gl(Le,Q,se),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function qp(A,Q,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Tn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?mi:On,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let Ce=m.state.transmissionRenderTarget[re.id],Le=re.viewport||C;Ce.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),Oe=v.getActiveCubeFace(),Ye=v.getActiveMipmapLevel();v.setRenderTarget(Ce),v.getClearColor(H),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),ae&&_e.render(se);let Ze=v.toneMapping;v.toneMapping=Li;let We=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),ye===!0&&de.setGlobalState(v.clippingPlanes,re),gl(A,se,re),fe.updateMultisampleRenderTarget(Ce),fe.updateRenderTargetMipmap(Ce),O.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let vt=0,Vt=Q.length;vt<Vt;vt++){let Pt=Q[vt],wt=Pt.object,Xe=Pt.geometry,Nt=Pt.material,ct=Pt.group;if(Nt.side===Ht&&wt.layers.test(re.layers)){let Ln=Nt.side;Nt.side=cn,Nt.needsUpdate=!0,Yp(wt,se,re,Xe,Nt,ct),Nt.side=Ln,Nt.needsUpdate=!0,rt=!0}}rt===!0&&(fe.updateMultisampleRenderTarget(Ce),fe.updateRenderTargetMipmap(Ce))}v.setRenderTarget(Ve,Oe,Ye),v.setClearColor(H,V),We!==void 0&&(re.viewport=We),v.toneMapping=Ze}function gl(A,Q,se){let re=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Ce=A.length;ee<Ce;ee++){let Le=A[ee],Ve=Le.object,Oe=Le.geometry,Ye=Le.group,Ze=Le.material;Ze.allowOverride===!0&&re!==null&&(Ze=re),Ve.layers.test(se.layers)&&Yp(Ve,Q,se,Oe,Ze,Ye)}}function Yp(A,Q,se,re,ee,Ce){A.onBeforeRender(v,Q,se,re,ee,Ce),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(v,Q,se,re,A,Ce),ee.transparent===!0&&ee.side===Ht&&ee.forceSinglePass===!1?(ee.side=cn,ee.needsUpdate=!0,v.renderBufferDirect(se,Q,re,ee,A,Ce),ee.side=ii,ee.needsUpdate=!0,v.renderBufferDirect(se,Q,re,ee,A,Ce),ee.side=Ht):v.renderBufferDirect(se,Q,re,ee,A,Ce),A.onAfterRender(v,Q,se,re,ee,Ce)}function xl(A,Q,se){Q.isScene!==!0&&(Q=K);let re=ne.get(A),ee=m.state.lights,Ce=m.state.shadowsArray,Le=ee.state.version,Ve=J.getParameters(A,ee.state,Ce,Q,se),Oe=J.getProgramCacheKey(Ve),Ye=re.programs;re.environment=A.isMeshStandardMaterial?Q.environment:null,re.fog=Q.fog,re.envMap=(A.isMeshStandardMaterial?Ue:Ne).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",me),Ye=new Map,re.programs=Ye);let Ze=Ye.get(Oe);if(Ze!==void 0){if(re.currentProgram===Ze&&re.lightsStateVersion===Le)return jp(A,Ve),Ze}else Ve.uniforms=J.getUniforms(A),A.onBeforeCompile(Ve,v),Ze=J.acquireProgram(Ve,Oe),Ye.set(Oe,Ze),re.uniforms=Ve.uniforms;let We=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=de.uniform),jp(A,Ve),re.needsLights=Vy(A),re.lightsStateVersion=Le,re.needsLights&&(We.ambientLightColor.value=ee.state.ambient,We.lightProbe.value=ee.state.probe,We.directionalLights.value=ee.state.directional,We.directionalLightShadows.value=ee.state.directionalShadow,We.spotLights.value=ee.state.spot,We.spotLightShadows.value=ee.state.spotShadow,We.rectAreaLights.value=ee.state.rectArea,We.ltc_1.value=ee.state.rectAreaLTC1,We.ltc_2.value=ee.state.rectAreaLTC2,We.pointLights.value=ee.state.point,We.pointLightShadows.value=ee.state.pointShadow,We.hemisphereLights.value=ee.state.hemi,We.directionalShadowMap.value=ee.state.directionalShadowMap,We.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,We.spotShadowMap.value=ee.state.spotShadowMap,We.spotLightMatrix.value=ee.state.spotLightMatrix,We.spotLightMap.value=ee.state.spotLightMap,We.pointShadowMap.value=ee.state.pointShadowMap,We.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=Ze,re.uniformsList=null,Ze}function Zp(A){if(A.uniformsList===null){let Q=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function jp(A,Q){let se=ne.get(A);se.outputColorSpace=Q.outputColorSpace,se.batching=Q.batching,se.batchingColor=Q.batchingColor,se.instancing=Q.instancing,se.instancingColor=Q.instancingColor,se.instancingMorph=Q.instancingMorph,se.skinning=Q.skinning,se.morphTargets=Q.morphTargets,se.morphNormals=Q.morphNormals,se.morphColors=Q.morphColors,se.morphTargetsCount=Q.morphTargetsCount,se.numClippingPlanes=Q.numClippingPlanes,se.numIntersection=Q.numClipIntersection,se.vertexAlphas=Q.vertexAlphas,se.vertexTangents=Q.vertexTangents,se.toneMapping=Q.toneMapping}function Oy(A,Q,se,re,ee){Q.isScene!==!0&&(Q=K),fe.resetTextureUnits();let Ce=Q.fog,Le=re.isMeshStandardMaterial?Q.environment:null,Ve=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Es,Oe=(re.isMeshStandardMaterial?Ue:Ne).get(re.envMap||Le),Ye=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ze=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!se.morphAttributes.position,rt=!!se.morphAttributes.normal,vt=!!se.morphAttributes.color,Vt=Li;re.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Vt=v.toneMapping);let Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=Pt!==void 0?Pt.length:0,Xe=ne.get(re),Nt=m.state.lights;if(ye===!0&&(N===!0||A!==_)){let _n=A===_&&re.id===b;de.setState(re,A,_n)}let ct=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==Ve||ee.isBatchedMesh&&Xe.batching===!1||!ee.isBatchedMesh&&Xe.batching===!0||ee.isBatchedMesh&&Xe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Xe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Xe.instancing===!1||!ee.isInstancedMesh&&Xe.instancing===!0||ee.isSkinnedMesh&&Xe.skinning===!1||!ee.isSkinnedMesh&&Xe.skinning===!0||ee.isInstancedMesh&&Xe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Xe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Xe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Xe.instancingMorph===!1&&ee.morphTexture!==null||Xe.envMap!==Oe||re.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==Ze||Xe.morphTargets!==We||Xe.morphNormals!==rt||Xe.morphColors!==vt||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==wt)&&(ct=!0):(ct=!0,Xe.__version=re.version);let Ln=Xe.currentProgram;ct===!0&&(Ln=xl(re,Q,ee));let rr=!1,Dn=!1,Eo=!1,Ft=Ln.getUniforms(),kn=Xe.uniforms;if(F.useProgram(Ln.program)&&(rr=!0,Dn=!0,Eo=!0),re.id!==b&&(b=re.id,Dn=!0),rr||_!==A){F.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(T,"projectionMatrix",A.projectionMatrix),Ft.setValue(T,"viewMatrix",A.matrixWorldInverse);let bn=Ft.map.cameraPosition;bn!==void 0&&bn.setValue(T,he.setFromMatrixPosition(A.matrixWorld)),X.logarithmicDepthBuffer&&Ft.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,Dn=!0,Eo=!0)}if(ee.isSkinnedMesh){Ft.setOptional(T,ee,"bindMatrix"),Ft.setOptional(T,ee,"bindMatrixInverse");let _n=ee.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ft.setValue(T,"boneTexture",_n.boneTexture,fe))}ee.isBatchedMesh&&(Ft.setOptional(T,ee,"batchingTexture"),Ft.setValue(T,"batchingTexture",ee._matricesTexture,fe),Ft.setOptional(T,ee,"batchingIdTexture"),Ft.setValue(T,"batchingIdTexture",ee._indirectTexture,fe),Ft.setOptional(T,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ft.setValue(T,"batchingColorTexture",ee._colorsTexture,fe));let Gn=se.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ue.update(ee,se,Ln),(Dn||Xe.receiveShadow!==ee.receiveShadow)&&(Xe.receiveShadow=ee.receiveShadow,Ft.setValue(T,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(kn.envMap.value=Oe,kn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Q.environment!==null&&(kn.envMapIntensity.value=Q.environmentIntensity),Dn&&(Ft.setValue(T,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&zy(kn,Eo),Ce&&re.fog===!0&&le.refreshFogUniforms(kn,Ce),le.refreshMaterialUniforms(kn,re,B,te,m.state.transmissionRenderTarget[A.id]),Kr.upload(T,Zp(Xe),kn,fe)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Kr.upload(T,Zp(Xe),kn,fe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(T,"center",ee.center),Ft.setValue(T,"modelViewMatrix",ee.modelViewMatrix),Ft.setValue(T,"normalMatrix",ee.normalMatrix),Ft.setValue(T,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let _n=re.uniformsGroups;for(let bn=0,Yh=_n.length;bn<Yh;bn++){let _s=_n[bn];He.update(_s,Ln),He.bind(_s,Ln)}}return Ln}function zy(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function Vy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,Q,se){let re=ne.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=Q,ne.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){let se=ne.get(A);se.__webglFramebuffer=Q,se.__useDefaultFramebuffer=Q===void 0};let ky=T.createFramebuffer();this.setRenderTarget=function(A,Q=0,se=0){L=A,P=Q,D=se;let re=!0,ee=null,Ce=!1,Le=!1;if(A){let Oe=ne.get(A);if(Oe.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(T.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Oe.__hasExternalTextures)fe.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let We=A.depthTexture;if(Oe.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}let Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);let Ze=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?ee=Ze[Q][se]:ee=Ze[Q],Ce=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ee=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[se]:ee=Ze,C.copy(A.viewport),U.copy(A.scissor),j=A.scissorTest}else C.copy(ie).multiplyScalar(B).floor(),U.copy(pe).multiplyScalar(B).floor(),j=ve;if(se!==0&&(ee=ky),F.bindFramebuffer(T.FRAMEBUFFER,ee)&&re&&F.drawBuffers(A,ee),F.viewport(C),F.scissor(U),F.setScissorTest(j),Ce){let Oe=ne.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Oe.__webglTexture,se)}else if(Le){let Oe=Q;for(let Ye=0;Ye<A.textures.length;Ye++){let Ze=ne.get(A.textures[Ye]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,se,Oe)}}else if(A!==null&&se!==0){let Oe=ne.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Oe.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(A,Q,se,re,ee,Ce,Le,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){F.bindFramebuffer(T.FRAMEBUFFER,Oe);try{let Ye=A.textures[Ve],Ze=Ye.format,We=Ye.type;if(!X.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-re&&se>=0&&se<=A.height-ee&&(A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ve),T.readPixels(Q,se,re,ee,Me.convert(Ze),Me.convert(We),Ce))}finally{let Ye=L!==null?ne.get(L).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,Q,se,re,ee,Ce,Le,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(Q>=0&&Q<=A.width-re&&se>=0&&se<=A.height-ee){F.bindFramebuffer(T.FRAMEBUFFER,Oe);let Ye=A.textures[Ve],Ze=Ye.format,We=Ye.type;if(!X.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,rt),T.bufferData(T.PIXEL_PACK_BUFFER,Ce.byteLength,T.STREAM_READ),A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ve),T.readPixels(Q,se,re,ee,Me.convert(Ze),Me.convert(We),0);let vt=L!==null?ne.get(L).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,vt);let Vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Mg(T,Vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,rt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ce),T.deleteBuffer(rt),T.deleteSync(Vt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,se=0){let re=Math.pow(2,-se),ee=Math.floor(A.image.width*re),Ce=Math.floor(A.image.height*re),Le=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;fe.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,se,0,0,Le,Ve,ee,Ce),F.unbindTexture()};let Gy=T.createFramebuffer(),Hy=T.createFramebuffer();this.copyTextureToTexture=function(A,Q,se=null,re=null,ee=0,Ce=null){Ce===null&&(ee!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=ee,ee=0):Ce=0);let Le,Ve,Oe,Ye,Ze,We,rt,vt,Vt,Pt=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(se!==null)Le=se.max.x-se.min.x,Ve=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,Ze=se.min.y,We=se.isBox3?se.min.z:0;else{let Gn=Math.pow(2,-ee);Le=Math.floor(Pt.width*Gn),Ve=Math.floor(Pt.height*Gn),A.isDataArrayTexture?Oe=Pt.depth:A.isData3DTexture?Oe=Math.floor(Pt.depth*Gn):Oe=1,Ye=0,Ze=0,We=0}re!==null?(rt=re.x,vt=re.y,Vt=re.z):(rt=0,vt=0,Vt=0);let wt=Me.convert(Q.format),Xe=Me.convert(Q.type),Nt;Q.isData3DTexture?(fe.setTexture3D(Q,0),Nt=T.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(fe.setTexture2DArray(Q,0),Nt=T.TEXTURE_2D_ARRAY):(fe.setTexture2D(Q,0),Nt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,Q.unpackAlignment);let ct=T.getParameter(T.UNPACK_ROW_LENGTH),Ln=T.getParameter(T.UNPACK_IMAGE_HEIGHT),rr=T.getParameter(T.UNPACK_SKIP_PIXELS),Dn=T.getParameter(T.UNPACK_SKIP_ROWS),Eo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Pt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);let Ft=A.isDataArrayTexture||A.isData3DTexture,kn=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){let Gn=ne.get(A),_n=ne.get(Q),bn=ne.get(Gn.__renderTarget),Yh=ne.get(_n.__renderTarget);F.bindFramebuffer(T.READ_FRAMEBUFFER,bn.__webglFramebuffer),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,Yh.__webglFramebuffer);for(let _s=0;_s<Oe;_s++)Ft&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,ee,We+_s),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(Q).__webglTexture,Ce,Vt+_s)),T.blitFramebuffer(Ye,Ze,Le,Ve,rt,vt,Le,Ve,T.DEPTH_BUFFER_BIT,T.NEAREST);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||ne.has(A)){let Gn=ne.get(A),_n=ne.get(Q);F.bindFramebuffer(T.READ_FRAMEBUFFER,Gy),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,Hy);for(let bn=0;bn<Oe;bn++)Ft?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Gn.__webglTexture,ee,We+bn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Gn.__webglTexture,ee),kn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_n.__webglTexture,Ce,Vt+bn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,_n.__webglTexture,Ce),ee!==0?T.blitFramebuffer(Ye,Ze,Le,Ve,rt,vt,Le,Ve,T.COLOR_BUFFER_BIT,T.NEAREST):kn?T.copyTexSubImage3D(Nt,Ce,rt,vt,Vt+bn,Ye,Ze,Le,Ve):T.copyTexSubImage2D(Nt,Ce,rt,vt,Ye,Ze,Le,Ve);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else kn?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Nt,Ce,rt,vt,Vt,Le,Ve,Oe,wt,Xe,Pt.data):Q.isCompressedArrayTexture?T.compressedTexSubImage3D(Nt,Ce,rt,vt,Vt,Le,Ve,Oe,wt,Pt.data):T.texSubImage3D(Nt,Ce,rt,vt,Vt,Le,Ve,Oe,wt,Xe,Pt):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Le,Ve,wt,Xe,Pt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Pt.width,Pt.height,wt,Pt.data):T.texSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Le,Ve,wt,Xe,Pt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ln),T.pixelStorei(T.UNPACK_SKIP_PIXELS,rr),T.pixelStorei(T.UNPACK_SKIP_ROWS,Dn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Eo),Ce===0&&Q.generateMipmaps&&T.generateMipmap(Nt),F.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),F.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,F.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Na=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new kt;let i=this,s=t.color!==void 0?new Fe(t.color):new Fe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new M,f=new M,h=new M,p=new ot,x=new M(0,0,-1),g=new at,m=new M,S=new M,w=new at,v=new ot,E=this.camera,P=new Tn(r,o,{samples:c,type:mi}),D=new Mn({name:l.name!==void 0?l.name:"unspecified",uniforms:vu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=P.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=v,this.material=D,this.onBeforeRender=function(L,b,_){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),S.subVectors(f,x),S.reflect(d).negate(),S.add(f),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(p),E.up.reflect(d),E.lookAt(S),E.far=_.far,E.updateMatrixWorld(),E.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(E.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let U=E.projectionMatrix;w.x=(Math.sign(g.x)+U.elements[8])/U.elements[0],w.y=(Math.sign(g.y)+U.elements[9])/U.elements[5],w.z=-1,w.w=(1+U.elements[10])/U.elements[14],g.multiplyScalar(2/g.dot(w)),U.elements[2]=g.x,U.elements[6]=g.y,U.elements[10]=g.z+1-a,U.elements[14]=g.w,i.visible=!1;let j=L.getRenderTarget(),H=L.xr.enabled,V=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(P),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(b,E),L.xr.enabled=H,L.shadowMap.autoUpdate=V,L.setRenderTarget(j);let Z=_.viewport;Z!==void 0&&L.state.viewport(Z),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),i.material.dispose()}}};Na.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Au=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function s0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function pn(n,e,t,i=0,s=0){return s0(n,new Dt(1,i),e,t,s)}function yf(n,e,t,i=0){return s0(n,new Ci(1),e,t,i)}function XS(n,e){let t=new Qe;return t.setAttribute("position",new ke(e.flat(),3)),{tone:n,geometry:t}}function i0(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return XS(n,i)}function qS(){let n=[pn("fur",[0,.012,.011],[.154,.161,.132],1),pn("fur",[0,-.065,.008],[.128,.079,.108]),pn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),pn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),i0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),pn("skin",[0,-.061,-.133],[.102,.066,.065],1),pn("skinShade",[0,-.097,-.14],[.076,.031,.047]),pn("skin",[0,.015,-.15],[.041,.056,.038]),pn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(pn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),pn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),yf("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),pn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),pn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),pn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),pn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),pn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),pn("ink",[e*.047,.031,-.183],[.011,.012,.006]),yf("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),yf("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(i0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function YS(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new Qe;return s.setAttribute("position",new Mt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var ZS=YS(qS());function Eu(n=0){let e=new Zt({flatShading:!0}),t=new Zt({flatShading:!0}),i=new Zt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Fe("#212128"),ivory:new Fe("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=r[f];for(let S=h;S<p;S++)u.setXYZ(S,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Au.length?u:0;if(d===o)return;o=d;let f=Au[o];for(let[h,p]of Object.entries(f))(r[h]??=new Fe).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),f=new Mt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return s.push(h),a(h),new Be(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new pt;return u.add(c(ZS)),u}}}var Fa=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],jS=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],JS=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],r0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Cu=Fa.length-1,KS=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],$S=[-.57,.57,1,.61,-.61,-1],QS=[1,1,-.04,-.91,-.91,-.04];function Ru(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(b=0,_=0,C=0){let U=r.length/3;return r.push(b*s,_,C),U}function c(b,_,C){i?o.push(b,C,_):o.push(b,_,C)}function u(b,_,C,U){c(b,_,C),c(b,C,U)}function d(b,_){for(let C=0;C<b.length;C++){let U=(C+1)%b.length;u(b[U],b[C],_[C],_[U])}}function f(b,_){for(let C=0;C<b.length;C++)c(_,b[(C+1)%b.length],b[C])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Fa.map(([b,_,C,U],j)=>{let H=j===0||j===Cu,V=b*.67,Z=-.024+(_+.024)*.69;return{top:l(b,C,_),middle:l(b*1.08,(C+U)/2,H?_:-.025+(_+.025)*1.04),bottom:l(b,U,_),innerTop:l(V,jS[j],Z),innerBottom:l(V,JS[j],Z)}});function g(b){let _=x[b],C=x[(b+1)%x.length];return[_.top,C.top,C.middle,C.bottom,_.bottom,_.middle]}let m=new Set(r0.map(({edge:b})=>b));m.add(Cu);for(let b=0;b<x.length;b++){let _=x[b],C=x[(b+1)%x.length];c(h,_.innerTop,C.innerTop),c(p,C.innerBottom,_.innerBottom),u(_.innerTop,_.top,C.top,C.innerTop),u(C.innerBottom,C.bottom,_.bottom,_.innerBottom),m.has(b)||(u(C.top,_.top,_.middle,C.middle),u(C.middle,_.middle,_.bottom,C.bottom))}let S=g(Cu);t||f(S,l(0,0,Fa[Cu][1]));let w=i?[S[1],S[0],S[5],S[4],S[3],S[2]]:S;for(let{edge:b,length:_,splay:C}of r0){let[U,j,H,V]=Fa[b],[Z,te,B,Y]=Fa[b+1],oe=Z-U,ie=te-j,pe=-ie+oe*C,ve=oe+ie*C,Te=Math.hypot(pe,ve),ye=Math.hypot(oe,ie)/2,N=(H+B-V-Y)/4,G=[],he=g(b);for(let[K,ae,Re]of KS){let T=[l(),l(),l(),l(),l(),l()];d(he,T),G.push({ring:T,distance:K*_,width:ae*ye,height:Re*N}),he=T}let W=l();f(he,W),a.push({x:(U+Z)/2,y:(H+B+V+Y)/4,z:(j+te)/2,forwardX:pe/Te,forwardZ:ve/Te,rows:G,tip:W,length:_,pressure:-1})}let v=new Qe,E=new ke(r,3).setUsage(Zn);v.setAttribute("position",E),v.setIndex(o),v.boundingSphere=new Wn(new M(0,-.018,-.052),.12),v.boundingBox=new sn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let P=!0;function D(b,_=!0){let C=!1;for(let U=0;U<a.length;U++){let j=a[U],H=b?.[U],V=Number.isFinite(H)?qe.clamp(H,0,1):0;if(V===j.pressure)continue;j.pressure=V,C=!0;let{forwardX:Z,forwardZ:te,length:B,rows:Y,tip:oe}=j,ie=j.x,pe=j.z,ve=j.y,Te=0,ye=0;for(let{ring:he,distance:W,width:K,height:ae}of Y){let Re=W/B,T=qe.smoothstep(Re,0,.57),z=qe.smoothstep(Re,.38,1),O=(.17+V*.83)*T+(.14+V*.76)*z,X=(O+Te)/2,F=W-ye,ce=Math.cos(X)*F;ie+=Z*ce,ve-=Math.sin(X)*F,pe+=te*ce;for(let ne=0;ne<he.length;ne++){let fe=$S[ne]*K,Ne=QS[ne]*ae,Ue=Ne*Math.sin(O);E.setXYZ(he[ne],s*(ie+te*fe+Z*Ue),ve+Ne*Math.cos(O),pe-Z*fe+te*Ue)}Te=O,ye=W}let N=B-ye,G=N*Math.cos(Te);E.setXYZ(oe,s*(ie+Z*G),ve-N*Math.sin(Te),pe+te*G)}C&&(E.needsUpdate=!0,P=!0),_&&P&&(v.computeVertexNormals(),P=!1)}D(),v.getAttribute("normal").setUsage(Zn);let L=new Be(v,e);return L.castShadow=!0,{mesh:L,pose:D,wristIndices:w}}var ss=12,_f=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],ew=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],o0=_f.flatMap(([n,e,t])=>Array.from({length:ss},(i,s)=>{let r=(s-.5)*Math.PI*2/ss;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Pu(n,e){let t=o0.length,i=[],s=(te,B,Y,oe,ie)=>te.push(B,Y,oe,B,oe,ie);function r(te,B,Y=!1){for(let oe=1;oe<B.length-1;oe++)Y?te.push(B[0],B[oe+1],B[oe]):te.push(B[0],B[oe],B[oe+1])}let o=(te,B)=>te*ss+(B+ss)%ss;for(let te=0;te<_f.length-1;te++)for(let B=0;B<ss;B++)(te===2||te===3)&&(B===0||B===6)||s(i,o(te,B),o(te+1,B),o(te+1,B+1),o(te,B+1));r(i,Array.from({length:ss},(te,B)=>o(0,B))),r(i,Array.from({length:ss},(te,B)=>o(_f.length-1,B)),!0);let a=t,l=e.map(({geometry:te,wristIndices:B},Y)=>{let oe=Y===0?6:0,ie=[o(4,oe),o(4,oe+1),o(3,oe+1),o(2,oe+1),o(2,oe),o(3,oe)],pe=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],ve=pe.at(-1),Te=new Array(te.attributes.position.count);B.forEach((G,he)=>{Te[G]=ve[he]});for(let G=0;G<Te.length;G++)Te[G]??=a++;let ye=[];for(let G=0;G<te.index.count;G++)ye.push(Te[te.index.getX(G)]);for(let G=0;G<pe.length-1;G++)for(let he=0;he<6;he++){let W=(he+1)%6;s(i,pe[G][he],pe[G][W],pe[G+1][W],pe[G+1][he])}let N=[];return r(N,ve),{socket:ie,rings:pe,wrist:ve,wristIndices:B,remap:Te,skin:ye,cap:N,sign:Y===0?-1:1}}),c=new Qe,u=new ke(a*3,3).setUsage(Zn);c.setAttribute("position",u);let d=new Be(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(te,B)=>new Rs([...i,...l.flatMap((Y,oe)=>B&1<<oe?Y.skin:Y.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,g=new M,m=new M,S=new M,w=new M,v=new M,E=new M,P=new Ke,D=new Ke,L=new Ke,b=new M(0,0,-1),_=new Ke().setFromEuler(new ln(-1.42,0,0)),C=[.24,.62,.94,.56],U=[.089,.084,.069,.054,.037],j=0,H=0,V=!0;function Z(te,B,Y,oe,ie){let pe=!!(te[0]||te[1]);if(!pe&&!V&&j===Y&&H===oe)return;j=Y,H=oe,V=pe;for(let Te=0;Te<t;Te++){let[ye,N,G]=o0[Te];u.setXYZ(Te,ye*Y,N*oe,G*Y)}let ve=0;for(let Te=0;Te<l.length;Te++){let ye=l[Te],N=te[Te],G=e[Te].geometry.attributes.position,he=!!N,W=ye.wristIndices;he&&ie&&(ve|=1<<Te),p.set(0,0,0);for(let K of ye.socket)p.add(h.fromBufferAttribute(u,K));p.multiplyScalar(1/6),g.set(0,0,0);for(let K of W)g.add(h.fromBufferAttribute(G,K));g.multiplyScalar(1/6).applyQuaternion(N?.quaternion??_),he?g.add(N.position):g.add(h.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),S.copy(m).normalize(),w.set(ye.sign*.38,-1,.27).addScaledVector(S,-S.dot(h.set(ye.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),he&&x.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-m.lengthSq()*.25))*.72),P.setFromUnitVectors(b,S.subVectors(x,p).normalize()),D.copy(N?.quaternion??_);for(let K=0;K<4;K++){let ae=K===3;E.lerpVectors(ae?x:p,ae?g:x,C[K]),L.copy(P).slerp(D,ae?.79:K*.19);for(let Re=0;Re<6;Re++){let T=ew[Re],z=U[K];v.set(T[0]*z,T[1]*z*.84,0).applyQuaternion(L).add(E),u.setXYZ(ye.rings[K+1][Re],v.x,v.y,v.z)}}for(let K=0;K<ye.remap.length;K++)v.fromBufferAttribute(G,K).applyQuaternion(D),he?v.add(N.position):v.add(h.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(ye.remap[K],v.x,v.y,v.z)}c.index!==f[ve]&&c.setIndex(f[ve]),u.needsUpdate=!0,c.computeVertexNormals()}return Z([null,null],.42,1,1,!1),{mesh:d,pose:Z}}var a0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],tw=new M(0,1,0);function Iu(n){let e=new pt,t=new Tt({color:"#2c4750",roughness:.43,metalness:.47}),i=new Tt({color:"#899fa3",roughness:.46,metalness:.57}),s=new mt({toneMapped:!1});function r(h,p,x,g,m,S=0){let w=new Be(h,p);return w.position.set(x,g,m),w.rotation.x=S,e.add(w),w}r(new je(.071,.059,.149),t,.038,.026,-.054),r(new je(.04,.072,.05),i,.038,-.028,-.014,-.29),r(new Gt(.019,.024,.064,8),i,.038,.025,-.137,Math.PI/2),r(new Gt(.015,.016,.008,8),s,.038,.025,-.173,Math.PI/2),r(new je(.041,.009,.047),s,.038,.059,-.067);let o=new Be(new Gt(.002,.003,1,5,1,!0),new mt({transparent:!0,opacity:.52,depthWrite:!1,blending:Yn,toneMapped:!1})),a=new Be(new Dt(.012,0),new mt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(a0[h-1]??a0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(tw,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var nw="wss://clouddata.turbowarp.org",iw="itssoren.github.io/VR/gorilla-lab/",vf={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Du=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),sw=new Map([[vf.vr,"vr"],[vf.pc,"pc"],...Du.map(n=>[n,"player"])]),Mf=53,Lu=4400,c0=64e3,jt=(n,e)=>Math.round(n).toString().padStart(e,"0");function Ba(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Gs(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function rw({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+jt(e,7)+a.map(c=>jt(c*100+2e4,5)).join("")+jt(Math.round(l*10)%3600,4)+jt(o,6)}function ow(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function u0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},Socket:s=globalThis.WebSocket,now:r=Date.now,monotonicNow:o=r===Date.now?()=>performance.now():r,random:a=Math.random}={}){let l=new Map,c=o(),u=r(),d=null,f=null,h="",p=0,x="",g=-1/0,m=null,S=0,w=0,v=1/0,E=0,P="offline",D=!1,L=-1,b=0,_=[],C=1/0;function U(N,G){P=N,n(G)}function j(){return"Salon "+h+" \xB7 "+(f==="vr"?"en attente de joueurs ou du spectateur":"en attente du joueur VR")}function H(){return[...l.values()].map(N=>N.pose).filter(Boolean)}function V(){let N=H().filter(K=>f==="vr"?K.role!=="vr":K.role==="vr"),G=K=>Number(K.ready)*2+ +(K.role==="pc"),he=N.find(K=>K.id===m?.id)??null,W=N.reduce((K,ae)=>!K||G(ae)>G(K)?ae:K,he);W!==m&&(m=W,e(m))}function Z(N){for(let G of l.values())G.pose&&t(null,G.pose),G.pose=G.candidate=null;N&&l.clear(),V()}function te(){let N=d;if(d=null,N){N.onopen=N.onmessage=N.onerror=N.onclose=null;try{N.close()}catch{}}}function B(){te(),f=null,h="",v=1/0,D=!1,L=-1,_=[],Z(!0),U("offline","Hors ligne")}function Y(N){let G=Math.min(3e4,1500*2**Math.min(E++,5));v=o()+G,U("retry","TurboWarp d\xE9connect\xE9 ("+N+") \xB7 reconnexion automatique au salon "+h)}function oe(N){let G=!1;for(let[he,W]of l)W.pose&&N-W.pose.arrival>Lu&&(t(null,W.pose),W.pose=null,G=!0),W.candidate&&N-W.candidate.arrival>Lu&&(W.candidate=null),N-W.lastArrival>6e4&&l.delete(he);G&&V()}function ie(N,G,he,W){let K=mw(he.value,null);if(!K||K.id===p)return;let ae=l.get(K.id);if(!ae){if(l.size>=64)return;ae={lastTime:-1/0,lastAction:0,lastArrival:W,pose:null,candidate:null},l.set(K.id,ae)}if(K.time<=ae.lastTime)return;let Re=ae.pose??ae.candidate;if(Re&&K.time-Re.time>Lu+W-Re.arrival){if(ae.pose)return;ae.candidate=null}ae.lastTime=K.time,ae.lastArrival=W;let T={...K,ready:K.ready??!0,protocol:K.ready===void 0?3:4,role:N,channel:G,received:r(),arrival:W},z=ae.candidate;if(!ae.pose&&(!z||z.channel!==G||z.map!==T.map||W-z.arrival>Lu)&&(K.ready!==void 0||Math.abs(K.time-T.received)>25e3)){ae.candidate=T;return}if(ae.candidate=null,!ae.pose&&z?.objects&&z.ready&&z.map===T.map&&!T.objects&&(T.objects=z.objects),ae.pose=T,t(T),V(),!(f!=="vr"||N!=="player"||!D||!T.ready||T.map!==L||K.actionTarget!==p))for(let{seq:O,action:X}of K.actions)O<=ae.lastAction||(ae.lastAction=O,i(X,T))}function pe(){let N;try{N=new s(nw)}catch{return!1}return d=N,w=o(),g=-1/0,U("connecting","Connexion \xE0 TurboWarp \xB7 salon "+h),N.onopen=()=>{d===N&&(S=o(),N.send(JSON.stringify({method:"handshake",project_id:iw+h,user:"player"+p})+`
`),U("open",j()))},N.onmessage=G=>{if(d!==N||typeof G.data!="string"||G.data.length>105e4)return;let he=o();oe(he);for(let W of G.data.split(`
`)){if(!W.trim())continue;let K;try{K=JSON.parse(W)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",W.slice(0,200));continue}let ae=sw.get(K?.name);K?.method!=="set"||!ae||ae==="vr"&&f==="vr"||ie(ae,K.name,K,he)}},N.onerror=()=>{d===N&&U("connecting","Impossible de joindre TurboWarp \xB7 salon "+h)},N.onclose=G=>{if(d!==N)return;let he=G.code;if(te(),Z(!1),_=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(he)){Y(he);return}f=null,h="";let W={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[he];U("error","TurboWarp d\xE9connect\xE9 ("+he+")"+(W?" \xB7 "+W:G.reason?" \xB7 "+G.reason.slice(0,100):""))},!0}function ve(N,G){let he=Ba(N);return!/^[A-Z0-9]{5,12}$/.test(he)||!["vr","pc","player"].includes(G)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):f===G&&h===he?!0:f?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(Z(!0),p=Math.floor(1e6+a()*8999999),f=G,h=he,x=vf[f]??Du[p%Du.length],b=0,E=0,v=C=1/0,pe()?!0:(f=null,h="",U("error","WebSocket indisponible."),!1))}function Te(N,G){if(f!=="player"||P!=="open"||!m?.ready||m.protocol<4||m.map!==G||!bf(N)||b>=99999999)return!1;let he=o();return _=_.filter(W=>W.expires>=he&&W.target===m.id&&W.map===G),_.length>=8?!1:(_.push({action:{...N},seq:++b,expires:he+1800,target:m.id,map:G}),!0)}function ye(N){let G=o();if(D=!!N&&N.ready!==!1,L=N?.map??-1,oe(G),f&&!d&&G>=v&&(v=1/0,pe()||Y(1006)),d&&d.readyState===0&&G-w>1e4&&(te(),Y(1006)),!N||!f||d?.readyState!==1||d.bufferedAmount>4096||G-S<350||G-g<100)return!1;if(f==="player"){let Re=H().filter(z=>z.role==="player"),T=Re.find(z=>z.channel===x);if(T?C=Math.min(G,C):C=1/0,T&&(T.id<p||G-C>=800)){let z=Du.find(O=>!Re.some(X=>X.channel===O));if(!z)return P!=="capacity"&&U("capacity","Salon "+h+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;x=z,C=1/0}}(E||P==="capacity")&&(E=0,U("open",j()));let he=Math.round(u+G-c),W=rw({...N,time:he,id:p});if(!W)return!1;_=_.filter(Re=>Re.expires>=G&&Re.target===m?.id&&Re.map===N.map);let K=N.ready!==void 0||N.avatar?.tool||f==="player",ae=pw(W,N.avatar,N.objectFeed?.(G),K?{ready:N.ready!==!1,actions:_,actionTarget:_[0]?.target??0}:null);return g=G,d.send(JSON.stringify({method:"set",name:x,value:ae})+`
`),!0}return{join:ve,leave:B,tick:ye,sendAction:Te,get role(){return f},get code(){return h},get state(){return P},get remote(){return m},get peers(){return H()}}}var aw=15,lw=12,h0=44,Uu=15,Fu=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>jt(e*100+2e4,5)).join(""):null;function Nu(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var Bu=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>jt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Ou(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function cw(n){let e=Fu(n.mesh.position),t=Bu(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>Mf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return jt(i,5)+jt(s,2)+r+o+jt(a,8)+e+t}function uw(n){return jt(n,5)+"99"+"0".repeat(h0-7)}function hw(n){if(!n)return null;let e=Bu(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Fu(l.position),u=l&&Bu(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(aw+lw)}),s=jt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=jt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+jt(n.coconuts??31,2)+jt(n.color??0,2)+a}function bf(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;return e==="spawn"?Number.isInteger(t)&&t>=0&&t<=Mf?"10"+jt(t,5):null:!Number.isInteger(i)||i<1||i>=1e5?null:e==="tool"?Number.isInteger(s)&&s>=1&&s<=7?"2"+s+jt(i,5):null:e==="hold"||e==="release"?(e==="hold"?"30":"40")+jt(i,5):null}function dw(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release"][e];if(!s)return null;let r=s==="spawn"?{type:s,typeId:i}:s==="tool"?{type:s,mode:t,objectId:i}:{type:s,objectId:i};return bf(r)===n?r:null}function fw(n){let e=Fu(n?.position),t=Bu(n?.quaternion),i=Fu(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function pw(n,e,t,i=null){let s=hw(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:l,action:c})=>jt(l,8)+bf(c)).join(""),a=n+"4"+Number(i.ready)+ +!!s+(s??"")+fw(s?e.tool:null)+jt(i.actionTarget??0,7)+jt(o.length/Uu,1)+o;return a.length+1+r.length>c0&&(t=null,r=""),a+(t?t.full?"2":"1":"0")+r}function l0(n,e,t){let i=Ou(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:Nu(n,a+1),quaternion:Ou(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function mw(n,e){if(typeof n!="string"||n.length>c0||!/^[0-9]+$/.test(n))return null;let t=ow(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:h0,r=i?125:133;if(n[46]==="4"){if(n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=l0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Nu(n,a+2),f=Ou(n,a+17),h=Nu(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*Uu+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=Uu){let u=Number(n.slice(a,a+8)),d=dw(n.slice(a+8,a+Uu));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=l0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Nu(n,c+10),g=Ou(n,c+25);if(d>Mf||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}function d0(){let n=new Map,e=-1/0,t=-1/0;function i(s,r){if(s-e<200)return null;e=s;let o=s-t>=1600;o&&(t=s);let a=new Set,l=[];for(let c of r){if(!c.mesh.visible)continue;let u=cw(c);u&&(a.add(c.netId),(o||n.get(c.netId)!==u)&&l.push(u),n.set(c.netId,u))}for(let c of n.keys())a.has(c)||(o||l.push(uw(c)),n.delete(c));return o||l.length?{full:o,records:l}:null}return{capture:i,reset(){n.clear(),e=t=-1/0}}}var f0=Lt.DEFAULT_UP,gw=15,p0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function xw(){let n=new pt,e=new Be(new Dt(.155,1),new Tt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new Pi(.23,.018,5,20),new mt({color:"#84e6ff",transparent:!0,opacity:.85,blending:Yn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new Is(.11,.28,9,1,!0),new mt({color:"#55c7ff",transparent:!0,opacity:.45,side:Ht,blending:Yn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function yw(){let n=new pt,e=new pt,t=Eu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:Ru(g,t.hand,{openWrist:!0}),position:new M,quaternion:new Ke,pressure:[0,0,0],tracked:!1})),r=Pu(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Iu(e),l=new M,c=[null,null],u=new M,d=new Ke,f=new Ke,h=new Ke,p={mode:0,position:new M,quaternion:new Ke,end:new M};function x(g,m,S){let w=g.avatar,v=1-Math.exp(-S*20);if(!w){o.position.set(0,-.46,0),o.rotation.x=0,c.fill(null),r.pose(c,.42,.97,.68,!0),a.hide(),p.mode=0;return}d.copy(n.quaternion).invert(),h.copy(w.head).premultiply(d),i.quaternion.slerp(h,v),u.set(0,0,-1).applyQuaternion(i.quaternion);let E=qe.smoothstep(-u.y,.28,.94),P=Math.max(.38,w.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*P,.24*E),o.rotation.x=-.5*E,f.copy(o.quaternion).invert(),t.setColor(w.color??0);for(let b=0;b<s.length;b++){let _=s[b],C=w.hands[b];if(c[b]=C?_:null,!C){_.tracked=!1;continue}l.copy(C.position).sub(g).applyQuaternion(d).sub(o.position).applyQuaternion(f),h.copy(C.quaternion).premultiply(d).premultiply(f),_.tracked?(_.position.lerp(l,v),_.quaternion.slerp(h,v)):(_.position.copy(l),_.quaternion.copy(h)),_.tracked=!0;for(let U=0;U<3;U++)_.pressure[U]+=((C.pressure?.[U]??0)-_.pressure[U])*v;_.skin.pose(_.pressure,!1)}r.pose(c,w.armSpan*.5,.97,P,!0);let D=w.tool;if(!D){a.hide(),p.mode=0;return}let L=p.mode?v:1;p.mode=D.mode,p.position.lerp(D.position,L),p.quaternion.slerp(h.copy(D.quaternion),L),p.end.lerp(D.end,L),a.update(p)}return{model:n,toolRoot:e,draw:x,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function m0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function g0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,onAction:o}){let a=new Map,l=new Map,c=d0(),u=0,d=-1,f=-1,h=-1,p="",x=0,g=null,m=0;function S(){let T=e();return T!==p&&(p=T,x=Gs(T)),x}function w(T){return!!T?.ready&&T.map===S()}function v(T){let z=l.get(T);z&&(n.remove(z.mesh),z.mesh.material?.dispose(),l.delete(T))}function E(){for(let T of l.keys())v(T);u=0,d=-1,f!==-1&&(f=-1,s?.(null)),h!==-1&&(h=-1,r?.(null))}function P(T,z){if(T.color===z.color&&T.style===z.style)return;T.color=z.color,T.style=z.style;let O=T.mesh.material;if(O?.color){if(O.color.setHex(z.color),z.style===0){Object.assign(O,T.baseMaterial),T.baseEmissive&&O.emissive.copy(T.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][z.style],O.metalness=[.1,0,.87,.12,0][z.style],O.opacity=z.style===3?.4:1,O.transparent=z.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=z.style===4?1.65:0,O.needsUpdate=!0}}function D(T){if(!w(T)){E();return}if((u!==T.id||d!==T.map)&&(E(),u=T.id,d=T.map),T.avatar&&T.avatar.light!==f&&(f=T.avatar.light,s?.(f)),T.avatar&&T.avatar.coconuts!==h&&(h=T.avatar.coconuts,r?.(h)),!T.objects)return;let z=T.objects.full?new Set:null;for(let O of T.objects.records){if(O.removed){v(O.id);continue}z?.add(O.id);let X=l.get(O.id);if(X&&X.type!==O.type&&(v(O.id),X=null),!X){let ce=i?.(O.type);if(!ce)continue;let{roughness:ne,metalness:fe,transparent:Ne,depthWrite:Ue,opacity:R,emissiveIntensity:y}=ce.material??{},I={roughness:ne,metalness:fe,transparent:Ne,depthWrite:Ue,opacity:R,emissiveIntensity:y};ce.userData.netId=O.id,ce.userData.netType=O.type,X={mesh:ce,baseMaterial:I,baseEmissive:ce.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new Ke().copy(O.rotation),velocity:new M,time:T.time},ce.position.copy(X.target),ce.quaternion.copy(X.quaternion),l.set(O.id,X),n.add(ce)}let F=(T.time-X.time)/1e3;F>.06&&F<.65&&!(O.flags&6)?X.velocity.copy(O.position).sub(X.target).multiplyScalar(1/F).clampLength(0,23):X.velocity.set(0,0,0),X.target.copy(O.position),X.quaternion.copy(O.rotation),X.time=T.time,X.flags=O.flags,X.received=T.arrival,X.mesh.userData.netFlags=O.flags,X.mesh.userData.held=!!(O.flags&1),P(X,O)}if(z)for(let O of l.keys())z.has(O)||v(O)}let L=new M;function b(T,z,O){let X=1-Math.exp(-T*22);for(let F of l.values()){if(F.mesh.visible=z,!z)continue;let ce=F.flags&6?0:Math.min(.12,Math.max(0,(O-F.received)/1e3));L.copy(F.target).addScaledVector(F.velocity,ce),F.mesh.position.distanceToSquared(L)>16||F.flags&6&&F.mesh.position.distanceToSquared(F.target)<1e-4?F.mesh.position.copy(L):F.mesh.position.lerp(L,X),F.mesh.quaternion.slerp(F.quaternion,X),F.flags&6&&F.mesh.quaternion.angleTo(F.quaternion)<.008&&F.mesh.quaternion.copy(F.quaternion),F.mesh.updateMatrixWorld(!0)}}let _=T=>document.querySelector(T),C=_("#cloud-status"),U=_("#cloud-room"),j=_("#cloud-camera"),H=0,V="Hors ligne",Z=0;function te(T){H=T,j.textContent="Cam\xE9ra : "+p0[T]}function B(){te((H+1)%p0.length)}j.onclick=B;let Y=u0({onStatus(T){V=T,C.textContent=T},onPose(T){Y.role!=="vr"&&D(T)},onPeer(T,z){if(!T){let F=a.get(z.id);F?.art&&(m0(F.art.model),m0(F.art.toolRoot),F.art.dispose?.()),a.delete(z.id);return}let O=a.get(T.id);O||(O={art:null,motion:new M},a.set(T.id,O));let X=O.pose;if(O.motion.set(0,0,0),X&&X.map===T.map){let F=(T.time-X.time)/1e3;F>=.055&&F<=.65&&(O.motion.set(T.x-X.x,T.y-X.y,T.z-X.z).multiplyScalar(1/F),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0))}O.pose=T},onAction:o}),oe=Ba(new URLSearchParams(location.search).get("room")??"");U.value=/^[A-Z0-9]{5,12}$/.test(oe)?oe:Math.random().toString(36).slice(2,8).padEnd(6,"0").toUpperCase();function ie(T){let z=Ba(U.value);Y.role===T&&Y.code===z||Y.join(z,T)&&(U.value=z,T!=="vr"&&_("#game").focus(),c.reset(),g=null,te(0),t(Gs(z)),p="")}_("#cloud-vr").onclick=()=>ie("vr"),_("#cloud-pc").onclick=()=>ie("pc");let pe=_("#cloud-player");pe&&(pe.onclick=()=>ie("player")),_("#cloud-leave").onclick=()=>{Z=0,Y.leave()},_("#cloud-copy").onclick=async()=>{let T=new URL(location.href);T.searchParams.set("room",Ba(U.value));try{await navigator.clipboard.writeText(T.href),C.textContent="Lien copi\xE9."}catch{C.textContent=T.href}Z=performance.now()+2500},addEventListener("pagehide",()=>Y.leave());let ve=new M,Te=new M,ye=new M,N=new M,G=0;function he({dt:T,position:z,yaw:O,pitch:X,camera:F,rig:ce,keys:ne,flat:fe}){let Ne=fe?.movement,Ue=Number(ne.has("KeyD"))-Number(ne.has("KeyQ")||ne.has("KeyA"))+(Ne?.x??0),R=Number(ne.has("KeyS"))-Number(ne.has("KeyZ")||ne.has("KeyW"))+(Ne?.z??0);fe?.consumeJump?.()&&(G=.26),G=Math.max(0,G-T);let y=Number(ne.has("Space")||G>0)-Number(ne.has("ShiftLeft")||ne.has("ShiftRight")),I=ne.has("ControlLeft")||ne.has("ControlRight")?11:3.2;N.set(Ue,y,R).clampLength(0,1).applyAxisAngle(f0,O),ce.position.addScaledVector(N,T*I).clampScalar(-175,175),ce.rotation.set(0,O,0),F.position.set(0,0,0),F.rotation.set(X,0,0,"YXZ"),ce.updateMatrixWorld(!0),z.copy(ce.position)}function W(T,z,O,X){for(let F of a.values()){let ce=F.pose;if(!(T&&w(ce))){F.art&&(F.art.model.visible=!1,F.art.toolRoot&&(F.art.toolRoot.visible=!1));continue}F.art||(F.art=ce.role==="pc"?xw():yw(),n.add(F.art.model),F.art.model.visible=!1,F.art.toolRoot&&n.add(F.art.toolRoot));let{model:fe,toolRoot:Ne}=F.art,Ue=Math.min(.19,Math.max(0,(X-ce.arrival)/1e3+.036));ve.copy(ce).addScaledVector(F.motion,Ue),!fe.visible||fe.position.distanceToSquared(ve)>64?fe.position.copy(ve):fe.position.lerp(ve,1-Math.exp(-O*11)),fe.rotation.y=ce.yaw,fe.visible=!0,Ne&&(Ne.visible=!0),F.art.draw(ce,z,O)}}function K(T,z){if(z<Z)return;let O=Y.remote,X=V;if(Y.state==="open"){let F="Salon "+Y.code+" \xB7 ",ce=Y.peers.filter(ne=>ne.ready);if(!T)X=F+(Y.role==="vr"?"s\xE9lectionne \xAB Entrer en VR \xBB pour ouvrir la partie":"quitte la session VR pour utiliser ce r\xF4le");else if(Y.role!=="vr"&&O&&O.map!==S())X=F+"le joueur VR utilise une autre carte. Chargez la m\xEAme carte.";else if(Y.role!=="vr"&&O&&!O.ready)X=F+"casque connect\xE9 \xB7 en attente du d\xE9marrage VR";else if(Y.role==="player"&&O&&O.protocol<4)X=F+"mets \xE0 jour le jeu sur le casque pour jouer ensemble";else if(Y.role!=="vr"&&w(O))X=F+"joueur VR connect\xE9";else if(Y.role==="vr"){let ne=ce.filter(w),fe=ne.filter(Ue=>Ue.role==="player").length,Ne=ne.some(Ue=>Ue.role==="pc");fe||Ne?X=F+[Ne?"spectateur connect\xE9":"",fe?fe+" joueur"+(fe===1?"":"s")+" PC / mobile":""].filter(Boolean).join(" \xB7 "):ce.length&&(X=F+"le correspondant utilise une autre carte. Chargez la m\xEAme carte.")}}C.textContent!==X&&(C.textContent=X)}function ae(T){let{inVR:z,time:O,dt:X,position:F,yaw:ce,camera:ne,rig:fe,keys:Ne,avatar:Ue,bodies:R}=T;if(!Y.role){E();return}let y=Y.role==="vr"?z:!z,I=performance.now(),J=S(),le=Y.role!=="vr"?Y.remote:null,$=y&&w(le);if(!$&&d!==-1&&E(),b(X,$,I),W(y,O,X,I),Y.role==="pc"&&!z){Ne.delete("KeyC")&&B();let ge=H===3&&$?[...l.values()].find(xe=>xe.type===gw)?.mesh:null,de=$?a.get(le.id)?.art?.model:null;ge?(ye.set(0,0,-.23).applyQuaternion(ge.quaternion),fe.position.copy(ge.position).add(ye),fe.rotation.set(0,0,0),ne.position.set(0,0,0),ne.quaternion.copy(ge.quaternion),fe.updateMatrixWorld(!0),F.copy(fe.position)):de&&(H===1||H===2)?(ye.set(0,.72,H===1?-2.7:2.7).applyAxisAngle(f0,de.rotation.y),Te.copy(de.position).add(ye),fe.position.lerp(Te,1-Math.exp(-X*11)),ne.position.set(0,0,0),fe.updateMatrixWorld(!0),ne.lookAt(de.position),ne.updateWorldMatrix(!0,!1),F.copy(fe.position)):he(T)}Y.tick({x:F.x,y:F.y,z:F.z,yaw:ce,map:J,ready:y,avatar:y?Ue:null,objectFeed:y&&Y.role==="vr"&&R?ge=>{let de=c.capture(ge,R);return de&&(g=de,m=ge+200),ge<m?g:null}:null}),K(y,I)}function Re(T){let z=a.get(T)?.pose;return w(z)?z:null}return{update:ae,getPeer:Re,sendAction(T){return Y.sendAction(T,S())},get role(){return Y.role},get connected(){return w(Y.remote)},get remoteSpectator(){return Y.peers.find(T=>T.role==="pc"&&w(T))??null},get remoteLight(){return f===-1?null:f},get replicaCount(){return l.size},forEachReplica(T){for(let z of l.values())z.mesh.visible&&T(z.mesh)}}}var y0=Object.freeze([8,16,32,48]),_0=16,zu=24,x0=new WeakMap,rs=qe.clamp,to=qe.lerp,wf=n=>n*n*(3-2*n);function eo(n,e,t,i){return Number.isFinite(n)?rs(n,e,t):i}function no(n={}){let e=y0.includes(n?.detail)?n.detail:_0,t=n?.heights;return{detail:e,seed:Math.round(eo(n?.seed,0,2147483647,1)),amplitude:eo(n?.amplitude,0,12,0),frequency:eo(n?.frequency,.015,2,.12),grass:eo(n?.grass,0,1,0),shrub:eo(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>eo(i,-zu,zu,0)):null}}function v0(n,e,t,i){let s=rs(t,0,e),r=rs(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function M0(n,e){let t=y0.includes(e)?e:_0;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>v0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Ui(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Sf(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=wf(n-i),o=wf(e-s),a=to(Ui(i,s,t),Ui(i+1,s,t),r),l=to(Ui(i,s+1,t),Ui(i+1,s+1,t),r);return 2*to(a,l,o)-1}function Vu(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=x0.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let d=s+1,f=u?c.procedural:new Float64Array(d**2);if(!u&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let m=(g/s-.5)*e*a,S=(x/s-.5)*t*a;f[x*d+g]=o*(.62*Sf(m,S,r)+.26*Sf(m*2.03,S*2.03,r+13)+.12*Sf(m*4.13,S*4.13,r+37))}let h=l?f.map((x,g)=>x+l[g]):f,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:f,surface:h};return x0.set(n,p),p}function Tf(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return v0(o,i,(e/s+.5)*i,(t/r+.5)*i)}function _w(n,e,t){return n.y+Tf(Vu(n),e-n.x,t-n.z)}function vw(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=s[f*r+h],d++);return u/d}function b0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Vu(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=rs(h,-c/2,c/2),g=rs(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=s**2)return!1;let m=(h/c+.5)*l,S=(p/u+.5)*l,w=c/l,v=u/l,E=Math.max(0,Math.ceil(m-s/w)),P=Math.min(l,Math.floor(m+s/w)),D=Math.max(0,Math.ceil(S-s/v)),L=Math.min(l,Math.floor(S+s/v)),b=Number.isFinite(o)?o-n.y:Tf(a,h,p),_=l+1,C=a.heights?.slice()??new Array(_**2).fill(0),U=!1,j=!1;function H(V,Z,te){U=!0;let B=Z*_+V,Y=C[B],oe;if(i==="raise"||i==="lower")oe=Y+(i==="raise"?1:-1)*r*te;else{let ie=i==="flatten"?b:vw(a,V,Z);oe=to(d[B],ie,Math.min(1,r)*te)-f[B]}oe=rs(oe,-zu,zu),!(Math.abs(oe-Y)<1e-7)&&(C[B]=oe,j=!0)}for(let V=D;V<=L;V++)for(let Z=E;Z<=P;Z++){let te=Math.hypot((Z-m)*w,(V-S)*v)/s;te<1&&H(Z,V,wf(1-te))}if(!U){let V=rs(m,0,l),Z=rs(S,0,l),te=Math.min(l-1,Math.floor(V)),B=Math.min(l-1,Math.floor(Z)),Y=V-te,oe=Z-B,ie=Y+oe<=1,pe=ie?1-Y-oe:Y+oe-1,ve=ie?Y:1-oe,Te=ie?oe:1-Y;if(pe>=Math.max(ve,Te)){let ye=+!ie;H(te+ye,B+ye,1)}else ve>=Te?H(te+1,B,1):H(te,B+1,1)}return j&&(n.terrain.heights=C),j}function S0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){let h=d*r+f;o[3*h]=(f/s-.5)*e,o[3*h+2]=(d/s-.5)*t,a[2*h]=f/s*e/2.6,a[2*h+1]=(1-d/s)*t/2.6,d<s&&f<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new Qe;return u.setAttribute("position",new Mt(o,3).setUsage(Zn)),u.setAttribute("uv",new Mt(a,2)),u.setIndex(new Mt(l,1)),Mw(u,n),u}function Mw(n,e){let{surface:t}=Vu(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function w0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>_w(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function bw(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new Qe;return e.setAttribute("position",new ke(n,3)),e.computeVertexNormals(),e}function Sw(){return new Dt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var ww=[{name:"grass",geometry:bw,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:Sw,perMetre:.17,max:48,salt:47,color:"#36583c"}];function T0(n){let e=new pt;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of ww){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new Zt({color:a,side:t==="grass"?Ht:ii});u.flatShading=!0;let d=new ea(i(),u,c);d.name=t,d.instanceMatrix.setUsage(Zn),d.userData.salt=o,d.receiveShadow=!0;let f=new Fe;for(let h=0;h<c;h++){let p=to(.68,1.2,Ui(h,o,n.terrain.seed+4));d.setColorAt(h,f.setRGB(p,p,p))}e.add(d)}return Tw(e,n),e}function Tw(n,e){let t=Vu(e),i=new Lt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Ui(a,r,o)-.5)*.96*e.w,c=(Ui(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Tf(t,l,c),c),i.rotation.y=Ui(a,r,o+2)*2*Math.PI,i.scale.setScalar(to(.58,1.34,Ui(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function A0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var ku=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],E0=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function C0(n,e=E0[n]){n=Math.max(0,Math.min(ku.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:E0[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function R0({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let h=c;return c=!1,h}}}var Gu=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:d,offset:f}=c,h=u.surface;if(c.released=null,u.surface=null,u.groundContact=!1,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&(!u.held||u.hasSupport)&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(u.hasSupport?f.copy(u.supportOffset):f.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=h&&r.includes(h)&&!h.objectBody?.owner,g=x&&h.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),d.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(f),this.from.copy(p).add(f),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(f),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let L=this.correction.subVectors(p,u.anchor),b=L.dot(d)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&L.lengthSq()<=Math.max(.12,l*.5)**2;b&&(!m||m===h&&this.hitNormal.dot(d)>.7)?(m=h,this.hit.copy(u.anchor).add(f),this.hitNormal.copy(d)):!b&&m===h&&L.dot(d)>.035&&(m=null),!m&&c.tracked&&(c.released=h,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(f),d.copy(this.hitNormal);let S=m.friction??.8,w=Math.min(1,Math.max(0,S*(.75+s.grip*.09))),v=Math.min(.97,Math.max(0,1-w+(s.slide-3)*.035)),E=this.correction.subVectors(u.anchor,p),P=E.dot(d);if(E.addScaledVector(d,-P),E.lengthSq()*v**2>.003**2){if(this.to.copy(u.anchor).add(f).addScaledVector(E,-v),this.from.copy(this.to).addScaledVector(d,.003),this.to.addScaledVector(d,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(f);else if(v>.5&&E.lengthSq()>.035**2)continue}E.subVectors(u.anchor,p),x&&E.dot(d)<0&&E.addScaledVector(d,-E.dot(d)),a.add(E);let D=m.objectBody;if(D){let L=c.inverseRotation.copy(D.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(f).sub(D.mesh.position).applyQuaternion(L),c.localNormal.copy(d).applyQuaternion(L)}if(u.surface=m,u.groundContact=d.y>.55,this.contacts++,c.tracked){let L=this.handMotion.subVectors(c.previousTarget,p),b=L.dot(d);L.multiplyScalar(1-v).addScaledVector(d,Math.max(0,b)-b*(1-v)),this.intent.add(L)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=.08,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function P0(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}var I0=.1,Aw=45,L0=55,Oa=24,Af=96,Ew=[new Fe("#ffdc4d"),new Fe("#ff5d35"),new Fe("#bfc4c8")],Cw=new M(0,0,-1);function D0(n,{impact:e}){let t=new pt,i=new Tt({color:"#596974",roughness:.38,metalness:.6}),s=new Tt({color:"#29323e",roughness:.68}),r=new mt({color:"#ffd563",toneMapped:!1});function o(H,V,Z,te,B,Y=0){let oe=new Be(H,V);oe.position.set(Z,te,B),oe.rotation.x=Y,t.add(oe)}o(new je(.075,.064,.18),s,.035,.024,-.065),o(new je(.042,.08,.055),i,.035,-.025,-.022,-.22),o(new Gt(.02,.024,.071,8).rotateX(Math.PI/2),i,.035,.028,-.161),o(new je(.024,.01,.025),r,.035,.061,-.133);let a=new Be(new Dt(.045,0),new mt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));a.position.set(.035,.028,-.208),t.add(a),n.add(t),t.visible=!1;let l=new Qe,c=new ke(Oa*18,3).setUsage(Zn),u=new ke(Oa*18,3);for(let H=0;H<Oa;H++)for(let V=0;V<6;V++){let Z=Ew[Math.floor(V/2)];u.setXYZ(H*6+V,Z.r,Z.g,Z.b)}l.setAttribute("position",c),l.setAttribute("color",u),l.setDrawRange(0,0);let d=new na(l,new Qi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));d.frustumCulled=!1,n.add(d);let f=new ke(Af*3,3).setUsage(Zn),h=new Qe;h.setAttribute("position",f),h.setDrawRange(0,0);let p=new sa(h,new Or({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:Yn}));p.frustumCulled=!1,n.add(p);let x=Array.from({length:Oa},()=>({p:new M,d:new M,distance:0,active:!1})),g=Array.from({length:Af},()=>({p:new M,v:new M,life:0})),m=new M,S=new M,w=new M,v=0,E=0,P=0,D=0,L=0,b=!1;function _(H,V,Z,te){for(let B=0;B<Z;B++){let Y=g[E++%Af];Y.p.copy(H),Y.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(te).addScaledVector(V,.55),Y.life=.12+Math.random()*.21}}function C(H){let V=x[v++%Oa];m.copy(H.position),V.p.copy(m),V.d.copy(H.direction).normalize(),V.d.lengthSq()<.5&&V.d.copy(Cw).applyQuaternion(H.quaternion),V.distance=0,V.active=!0,S.set(.035,.028,-.208).applyQuaternion(t.quaternion).add(t.position),_(S,V.d,4,2.2),L=.055,P++}function U({dt:H,aim:V,firing:Z}){if(H=Math.max(0,Math.min(H,.12)),t.visible=!!V,V&&(t.position.copy(V.modelPosition??V.position),t.quaternion.copy(V.quaternion)),V&&Z){if(b)for(D-=H;D<=0;)C(V),D+=I0;else C(V),D=I0;b=!0}else D=0,b=!1;L=Math.max(0,L-H),a.visible=!!V&&L>0,a.material.opacity=L/.055;let te=0;for(let Y of x){if(!Y.active)continue;let oe=Math.min(Aw*H,L0-Y.distance),ie=oe>0?e?.(Y.p,Y.d,oe):null,pe=ie==null?oe:Math.max(0,Math.min(oe,ie));Y.p.addScaledVector(Y.d,pe),Y.distance+=pe,ie!=null&&(w.copy(Y.d).negate(),_(Y.p,w,8,4.2)),Y.active=ie==null&&Y.distance<L0;let ve=Math.min(.82,Y.distance);for(let Te=0;Te<3;Te++)for(let ye=0;ye<2;ye++){let N=(Te+ye)/3;S.copy(Y.p).addScaledVector(Y.d,-ve*N),c.setXYZ(te++,S.x,S.y,S.z)}}c.needsUpdate=!0,l.setDrawRange(0,te);let B=0;for(let Y of g)Y.life<=0||(Y.life-=H,Y.v.y-=5*H,Y.p.addScaledVector(Y.v,H),Y.life>0&&f.setXYZ(B++,Y.p.x,Y.p.y,Y.p.z));f.needsUpdate=!0,h.setDrawRange(0,B)}function j(){for(let H of x)H.active=!1;for(let H of g)H.life=0;D=L=0,b=!1,t.visible=a.visible=!1,l.setDrawRange(0,0),h.setDrawRange(0,0)}return{update:U,reset:j,get shotsFired(){return P}}}function Hu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Qe,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=U0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=U0(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function U0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Xu=0,Rw=1,Pw=new M,N0=new Aa,Ef=new Sn,F0=new M,Wu=new wn,qu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Yu,this.unassigned=new Yu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Cf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Pw)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Xu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let h=s[f].point.getComponent(f)-i[f].point.getComponent(f);h>r&&(r=h,o=f)}let a=i[o],l=s[o],c,u;r=0,N0.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){N0.closestPointToPoint(p.point,!0,F0);let x=F0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Ef.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Ef.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(Ef.distanceToPoint(u.point)<0){d.push(ri.create(a,l,c),ri.create(u,l,a),ri.create(u,c,l),ri.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(ri.create(a,c,l),ri.create(u,a,l),ri.create(u,l,c),ri.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Xu&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Rw;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Xu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=ri.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},ri=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Xu,this.edge=null}static create(e,t,i){let s=new n,r=new za(e,s),o=new za(t,s),a=new za(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Wu.set(e.point,t.point,i.point),Wu.getNormal(this.normal),Wu.getMidpoint(this.midpoint),this.area=Wu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},za=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Cf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Yu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Hs=class extends Qe{constructor(e=[]){super();let t=[],i=[],r=new qu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(i,3))}};var Cn=Math.PI*2,Zu=.84,Ni=128;function ls(n){let e=new Uint8Array(Ni*Ni*4);for(let i=0;i<Ni;i++)for(let s=0;s<Ni;s++){let r=(s+.5)/Ni,o=(i+.5)/Ni,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Zu,1),Math.min(o/Zu,1),s,i),l=(s+i*Ni)*4;for(let c=0;c<3;c++)e[l+c]=qe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new fi(e,Ni,Ni);return t.colorSpace=xt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=an,t.needsUpdate=!0,t}function Ws(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function nt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Fe(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Zu,r.getY(l)*Zu):r.setXY(l,.95,.95);return i.setAttribute("color",new Mt(a,3)),i}function cs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Hu(s),material:new Tt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function B0(n,e,t){let i=n/2,s=e/2,r=new Ls;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function os(n,e,t,i,s){return new ga(B0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function as(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Cn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new Qe;o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Va(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Cn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new Hs(t)}function Iw(){let t=new xa(B0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=qe.clamp(i.getX(l)/.098+.5,0,1),u=qe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=ls((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Cn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[nt(os(.106,.207,.013,.011,.0019),8425890),nt(os(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),nt(os(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),nt(t,16777215,!0),nt(os(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),nt(new je(.0036,.024,.004).translate(.055,.029,0),11714250),nt(new je(.0036,.015,.004).translate(-.055,.032,0),11385285),nt(new je(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(nt(new Gt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(nt(new Yt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(nt(new Yt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Hs([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return cs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Lw(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=as(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=ls((a,l,c,u)=>{let d=Cn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(S=>Math.exp(-(((f-S+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=Ws(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Va([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return cs("bread","Baguette de pain",.27,o,[nt(s,16777215,!0)],r,.9)}function Dw(){let n=ls((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*Ws(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=as([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=as([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[nt(e,16777215,!0),nt(t,11056059),nt(new Gt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),nt(new Gt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(nt(new je(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Va([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return cs("wheel","Roue",1.8,s,i,n,.64,.23)}function Uw(){let n=ls((r,o,a,l)=>{let c=Ws(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=as([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Pi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new Hs(i);return cs("cup","Tasse",.39,s,[nt(e,16777215,!0),nt(t,15785922)],n,.37)}function Nw(){let n=as([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=ls((s,r,o,a)=>{let l=9*Ws(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*Cn*4);return[u,u*1.13,u*1.24]}),t=[nt(n,16777215,!0),nt(new Gr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),nt(new Yt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),nt(new Yt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),nt(new Gt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),nt(new Yt(.008,12).translate(0,.035,.0336),15633202)],i=Va([[.033,-.143],[.054,.133]],6);return cs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function Fw(){let n=as([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=ls((r,o,a,l)=>{let c=10*Ws(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Cn*r*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Cn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[nt(n,16777215,!0),nt(new Yt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),nt(new Gr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),nt(new Yt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Va([[.069,-.112],[.069,.109]],6);return cs("soda","Canette de soda",.35,s,i,t,.42,.27)}function Bw(){let n=as([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=ls((s,r,o,a)=>{let l=15*Ws(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[nt(n,16777215,!0),nt(os(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),nt(new Yt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Va([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return cs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function Ow(){let n=ls((s,r,o,a)=>{let l=8*Ws(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=as([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[nt(os(.138,.22,.061,.016,.004),14788675),nt(os(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),nt(new Qt(.106,.174).translate(0,-.004,.0395),16777215,!0),nt(e,2502456),nt(new Gt(.014,.017,.016,10).translate(.04,.117,.001),2503482),nt(new je(.008,.047,.027).translate(-.072,.014,-.002),3028798),nt(new je(.006,.02,.019).translate(-.072,-.043,-.002),3950414),nt(new Yt(.004,8).translate(.04,.066,.0397),15817792),nt(new Yt(.004,8).translate(-.04,.066,.0397),7903100),nt(os(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return cs("radio","Talkie-walkie",.43,new Hs(i),t,n,.61,.08)}function O0(){return[Iw(),Lw(),Dw(),Uw(),Nw(),Fw(),Bw(),Ow()]}var z0=new WeakMap;function Rf(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,z0.set(n,e),n}function ju(n){let e=n.clone(),t=z0.get(n);return t?Rf(e,t):e}function zw(n){let t=new Ri(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Dt(.225,0),s=new _a({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Rf(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function Vw(n){let e=new je(.37,.37,.37),t=new Tt({color:16777215,roughness:.4});return Rf(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function V0(){let n={value:0};return{props:[zw(n),Vw(n)],animate(e){n.value=e}}}var If="gorilla-lab-models-v1",Xs=Object.freeze({models:12,parts:24,fileBytes:18e4}),kw=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),G0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Gw=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),Hw=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Ww=/^#[a-f\d]{6}$/i;function k0(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Pf(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?qe.clamp(n[s],t,i):e)}function Lf(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Xs.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!Hw.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Xs.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:k0(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(Gw).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:k0(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(kw,s?.shape)?s.shape:"box",position:Pf(s?.position,0,-3,3),rotation:Pf(s?.rotation,0,-360,360),scale:Pf(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&Ww.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(G0,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Df(n){try{let e=(n??globalThis.localStorage)?.getItem(If);if(e&&e.length<=Xs.fileBytes)return Lf(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Xw(n){switch(n){case"sphere":return new Ri(.5,20,12);case"cylinder":return new Gt(.5,.5,1,20);case"cone":return new Is(.5,1,20);case"torus":return new Pi(.365,.135,8,24);case"capsule":return new aa(.28,.44,6,16);case"diamond":return new Ci(.5);default:return new je(1,1,1)}}var H0=Object.keys(G0),io=64,ka=4,W0=2,Fi;function qw(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Yw(){if(Fi)return Fi;let n=io*ka,e=io*W0,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/io)*ka+Math.floor(s/io),o=qw(H0[r],s%io,i%io),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Fi=new fi(t,n,e),Fi.colorSpace=xt,Fi.magFilter=an,Fi.minFilter=An,Fi.generateMipmaps=!0,Fi.needsUpdate=!0,Fi}function Zw(n){let e=Xw(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(qe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new Fe(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=H0.indexOf(n.surface),c=l%ka,u=Math.floor(l/ka);for(let d=0;d<r;d++)s.toArray(o,d*3),a.setXY(d,(c+.05+a.getX(d)*.9)/ka,(u+.05+a.getY(d)*.9)/W0);return t.setAttribute("color",new Mt(o,3)),t}function X0(){return new Tt({vertexColors:!0,map:Yw(),roughness:.68})}function q0(n){let e=n.map(Zw),t=Hu(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Y0(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=q0(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:X0(),collisionGeo:new je(i.x,i.y,i.z),mass:qe.clamp(i.x*i.y*i.z*9,.18,12)}})}function Z0(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=q0(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Be(t,X0());r.castShadow=!0;let o=new pt;return o.add(r),o}var Ot=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),j0=Ot(-24,24,-51,7),Ju={x:0,y:0,z:3},Ku={x:.05,y:1.16,z:5.9},so={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Ot(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Ot(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Ot(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Ot(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Ot(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Ot(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Ot(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Ot(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Ot(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Ot(9,23,-48,-37),sign:[16,-38.2]}},gC=[Ot(-9,-6,-51,7),Ot(6,9,-51,7),Ot(-24,24,-8,-5),Ot(-24,24,-27,-23),Ot(9,23,-37,-34)],J0=[{name:"Glace",bounds:so.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:so.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Ot(-9,9,-51,7)},{name:"Sol ouest",bounds:Ot(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Ot(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Ot(-24,-23,-51,7)},{name:"Sol est",bounds:Ot(9,23,-51,-48)},{name:"Sol est",bounds:Ot(9,23,-37,7)},{name:"Bordure est",bounds:Ot(23,24,-51,7)}],ro={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},oo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Uf=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Nf={x:16,z:-31},Ff={x:16,y:1.52,z:-21},$u={x:-19.4,y:.68,z:-3.25},K0=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),$0={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Ff.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Qu(n,e,t){let i=new je(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Rn=new Ke,zt=new M,ah=new M,jw=new ot,Q0=new WeakMap;function hh(n){if(n.heightfield||n.objectBody)return null;let e=Q0.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=jw.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return Q0.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function ox(n,e,t){let i=hh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function lh(n,e,t,i){if(t.heightfield)return aT(n,e,t,i);if(t.objectBody)return xx(n,e,t.objectBody,i);if(!ox(n,e,t))return 0;Rn.copy(t.quaternion).invert(),zt.copy(n).sub(t.position).applyQuaternion(Rn);let s=t.half;ah.copy(zt).clamp(t.min,s),i.subVectors(zt,ah);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(zt.x),a=s.y-Math.abs(zt.y),l=s.z-Math.abs(zt.z);return o<=a&&o<=l?i.set(Math.sign(zt.x)||1,0,0):a<=l?i.set(0,Math.sign(zt.y)||1,0):i.set(0,0,Math.sign(zt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var st=new M,Bi=new M;function qf(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=lh(n,e,c,st);if(!u||(n.addScaledVector(st,u+1e-4),st.y>.65&&(a=!0),!i))continue;let d=i.dot(st);d<0&&i.addScaledVector(st,-d*(Math.abs(d)<.55?1:1+s)),Bi.copy(i).addScaledVector(st,-i.dot(st)),i.addScaledVector(Bi,-Math.min(.95,r*c.friction*o))}return a}var Bf=new M,uo=[];function Ya(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));uo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=hh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&uo.push(h)}for(let h=1;h<=o;h++){Bf.copy(n).lerp(e,h/o);for(let p of uo){let x=lh(Bf,t,p,st);if(x)return s.copy(Bf).addScaledVector(st,x+.001),r.copy(st),p}}return null}var Wa=new M,qa=new M,ho=new M,ax=new wn,Xa=new M;function fo(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),g=x(p),m=x(p+1),S=x(p+2),w=new wn(g,m,S).getNormal(new M);w.lengthSq()>.1&&s.push({a:g,b:m,c:S,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new sn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function lx(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Rn.copy(t.quaternion).invert(),zt.copy(n).sub(t.position).applyQuaternion(Rn),i.faces.every(r=>r.n.dot(Wa.subVectors(zt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)ax.set(r,o,a).closestPointToPoint(zt,Xa),s=Math.min(s,zt.distanceToSquared(Xa));return Math.sqrt(s)}function Jw(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=lh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Rn.copy(e.quaternion).invert(),zt.copy(s.position).sub(e.position).applyQuaternion(Rn),ah.copy(zt).clamp(e.min,e.half),zt.distanceToSquared(ah)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){Wa.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=lh(Wa,.007,e,ho);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Wa),t.copy(ho)):Math.abs(c-o)<.003&&ho.dot(t)>.98&&(i.lerp(Wa,1/++a),o=Math.max(o,c)))}return o}var eh=new M,Kw=new M,th=new M,$w=new M,Qw=new M;function Oi(n){return fo(new je(n.x*2,n.y*2,n.z*2))}function dh(n,e,t){let i=$w.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=Qw.copy(o).negate(),c=Zs(n,l)+Zs(e,o)-a,u=Zs(n,o)+Zs(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(eh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(eh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){th.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(eh.copy(a).applyQuaternion(e.mesh.quaternion).cross(th)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(Kw.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Rn.copy(a.mesh.quaternion).invert(),zt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Rn);for(let{a:c,b:u,c:d}of a.shape.faces){ax.set(c,u,d).closestPointToPoint(zt,Xa);let f=zt.distanceToSquared(Xa);f<l&&(l=f,th.copy(Xa))}if(!r(eh.subVectors(zt,th).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var eT=new M;function tT(n,e,t){Rn.copy(e.quaternion).invert(),zt.copy(n.mesh.position).sub(e.position).applyQuaternion(Rn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(zt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=zt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+Zs(n,eT.copy(t).negate())-s,a=r+Zs(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Yf(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return Jw(n,e,t,i??qa);let s=tT(n,e,t)??dh(n,e,t);return s>0&&i&&hx(n,e,t,i),s}var Hf=fo(new Ci(1,0).scale(.055,.033,.075)),nh={mesh:{position:new M,quaternion:new Ke},shape:Hf,radius:Hf.radius,precise:!0};function cx(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Hf.radius;uo.length=0;for(let c of i){let u=hh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||uo.push(c)}nh.mesh.quaternion.copy(t);let l=nh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of uo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?dh(nh,d,st):Yf(nh,u,st);if(f>0)return s.copy(l).addScaledVector(st,f+5e-4),r.copy(st),u}}return null}function Za(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!ox(n.mesh.position,n.radius,s))continue;let r=Yf(n,s,st);r<=1e-6||(n.mesh.position.addScaledVector(st,r),i=!0)}if(!i)break}}var Of=new M,Ga=new M,ih=new M,zf=new Ke,us=new Ke,ex=new Ke;function tx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function ux(n,e,t,i,s){let{mesh:r,shape:o}=n;Of.copy(r.position),zf.copy(r.quaternion),Ga.subVectors(e,Of);let a=tx(zf,t,us),l=Ga.length()+a*o.radius,c=mx(o),u=Math.max(1,Math.min(px,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;ih.set(us.x,us.y,us.z).normalize(),ex.setFromAxisAngle(ih,f),Ga.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(Ga),r.quaternion.premultiply(ex).normalize(),Za(n,i);let h=Math.max(.006,s||0);n.velocity.lerp(Ga.subVectors(r.position,Of).divideScalar(h).clampLength(0,23),.52);let p=tx(zf,r.quaternion,us);ih.set(us.x,us.y,us.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(ih,.52)}function Zs(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Rn.copy(n.mesh.quaternion).invert(),ho.copy(e).applyQuaternion(Rn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(ho));return t}var co=new M,ch=new M,nT=new M,Vf=new M,ao={},lo={};function nx(n,e,t,i){let{mesh:s,shape:r}=n,o=Zs(n,nT.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(co),i.minV=i.maxV=s.position.dot(ch);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(ho)<o-.0015)continue;Vf.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=Vf.dot(co),c=Vf.dot(ch);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function hx(n,e,t,i){Math.abs(t.y)<.8?co.set(-t.z,0,t.x).normalize():co.set(t.y,-t.x,0).normalize(),ch.crossVectors(t,co),nx(n,t,-1,ao),nx(e,t,1,lo);let s=(Math.max(ao.minU,lo.minU)+Math.min(ao.maxU,lo.maxU))*.5,r=(Math.max(ao.minV,lo.minV)+Math.min(ao.maxV,lo.maxV))*.5;i.copy(t).multiplyScalar((ao.plane+lo.plane)*.5).addScaledVector(co,s).addScaledVector(ch,r)}var ix=new M;function uh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)ix.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(ix)}}function iT(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function dx(n){return!n.owner&&!n.frozen}var qs=new M,Ys=new M,Ha=new M,sx=new M,Wf=new M,Xf=new M,sT=new M;function sh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function fx(n,e,t,i){let{mesh:s,shape:r}=n.body;return Rn.copy(s.quaternion).invert(),Wf.crossVectors(e,t),i.copy(Wf).applyQuaternion(Rn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function rh(n,e,t){return n?.inverseMass?(fx(n,e,t,Xf),n.inverseMass+Wf.dot(Xf)):0}function oh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(fx(n,e,t,Xf),i))}function kf(n){return n.friction??n.spec?.friction??.78}function rx(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(kf(r)*kf(o)):Math.min(kf(r),t.friction??.78);qs.subVectors(qa,r.mesh.position),o&&Ys.subVectors(qa,o.mesh.position),sh(n,qs,Ha).sub(sh(e,Ys,sx));let l=Ha.dot(st),c=!1;if(l<-1e-5){let d=l<-.8?qe.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(rh(n,qs,st)+rh(e,Ys,st));oh(n,qs,st,f),oh(e,Ys,st,-f),sh(n,qs,Ha).sub(sh(e,Ys,sx)),Bi.copy(Ha).addScaledVector(st,-Ha.dot(st));let h=Bi.length();if(h>1e-5&&a>0){Bi.divideScalar(h);let p=Math.min(f*a,h/(rh(n,qs,Bi)+rh(e,Ys,Bi)));oh(n,qs,Bi,-p),oh(e,Ys,Bi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(st,u*n.inverseMass/d),uh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(st,-u*e.inverseMass/d),uh(e)),c=!0}return n.inverseMass&&st.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,st.y)),e?.inverseMass&&st.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-st.y)),c}function rT(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var px=96,oT=5;function mx(n){return Math.max(.008,n.thickness*.35)}function gx(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:hh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=dx(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/mx(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new sn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};uh(f),o.push(f)}l=Math.min(px,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:x}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(r?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let g=x.length();g>1e-5&&h.rotateOnWorldAxis(sT.copy(x).divideScalar(g),Math.min(g,30)*c),uh(d)}for(let d=0;d<oT;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!iT(h.bounds,p,x))continue;let g=Yf(h.body,p,st,qa);g>0&&(f=rx(h,null,p,g,s)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=dh(p.body,g.body,st);m<=0||(hx(p.body,g.body,st,qa),f=rx(p,g,null,m,s)||f)}}if(!f)break}for(let d of o)d.inverseMass&&rT(d,c)}}function aT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var Gf={mesh:{position:null,quaternion:new Ke},shape:{sphereRadius:0,normals:[],edges:[]}};function xx(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Gf.mesh.position=n,Gf.shape.sphereRadius=e,dh(Gf,t,i))}function yx(n,e,t,i,s){let r=xx(n,e,t,st);if(r<=0)return!1;n.addScaledVector(st,r+.001),s?.copy(st);let o=i.dot(st);return o<0&&(i.addScaledVector(st,-o),Math.abs(st.y)<.6&&dx(t)&&t.velocity.addScaledVector(st,-Math.min(2.8,-o*.24))),!0}var Zf=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],vx=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],jf={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},fh=3e6,ja=240,mn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,_x=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function ph(n){if(typeof n=="string"){if(n.length>fh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>ja)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+ja+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:_x(n.name,56,"Ma map"),spawn:{x:mn(e.x,-120,120,0),y:mn(e.y,-10,30,.06),z:mn(e.z,-120,120,3),yaw:mn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?no(t.terrain):null;return{name:_x(t.name,36,"Pi\xE8ce "+(i+1)),x:mn(t.x,-120,120,0),y:mn(t.y,-12,33,0),z:mn(t.z,-120,120,0),w:mn(t.w,.2,64,3),h:mn(t.h,.12,36,.5),d:mn(t.d,.2,64,3),pitch:s?0:mn(t.pitch,-70,70,0),yaw:s?0:mn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(mn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:mn(t.grip,0,1.5,.8),gravity:mn(t.gravity,.05,2.5,1),bounce:mn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function mh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Mx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,d=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,f=m=>Math.round(m/i)*i,h=f(n.x+u.x*d),p=f(n.y+u.y*d),x=f(n.z+u.z*d),g=d-(h-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return h+=u.x*g,p+=u.y*g,x+=u.z*g,![h,p,x].every(Number.isFinite)||Math.abs(h)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:h,y:p,z:x}}var Ja="gorilla-lab-custom-map-v1";function bx(n){let e=new Blob([JSON.stringify(ph(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function Sx({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new pt;n.add(l);let c=[],u=[],d=new Ma,f=new Map,h=0,p=null,x="",g=-1,m=-1,S="",w="",v=new je(1,1,1),E=new Be(v,new mt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));E.visible=!1,n.add(E);let P=new ns,D=new M,L=new M,b=document.querySelector("#map-note");function _(W){S=W,b.textContent=W}function C(){u.length>=20&&u.shift(),u.push(JSON.stringify(p))}function U(W,K){let ae=f.get(W);if(!ae){ae={materials:new Set,texture:null,failed:!1},f.set(W,ae);let Re=z=>{if(!(f.get(W)!==ae||ae.failed)){ae.failed=!0;for(let O of ae.materials)O.map=null,O.needsUpdate=!0;ae.texture?.dispose(),z&&_(z)}},T=d.load(W,z=>{(z.image.width>2048||z.image.height>2048)&&Re("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>Re());ae.texture=T,T.colorSpace=xt,T.wrapS=T.wrapT=di}return ae.materials.add(K),K.map=ae.failed?null:ae.texture,ae}function j(){for(let[W,K]of f)K.materials.size||(f.delete(W),K.failed||K.texture.dispose())}function H(W){let K=e.mapMaterial(W.material,r());if(!W.texture&&W.color==="#ffffff")return{material:K,custom:!1};let ae=K.clone();return ae.onBeforeCompile=K.onBeforeCompile,ae.customProgramCacheKey=K.customProgramCacheKey,ae.color.multiply(new Fe(W.color)),{material:ae,custom:!0,ownTexture:W.texture?U(W.texture,ae):null}}function V(W){l.remove(W.mesh),W.mesh.geometry.dispose(),W.vegetation&&A0(W.vegetation),W.custom&&(W.ownTexture?.materials.delete(W.mesh.material),W.mesh.material.dispose())}function Z(W,K){let{material:ae,custom:Re,ownTexture:T}=H(W),z=new Be(W.terrain?S0(W):Qu(W.w,W.h,W.d),ae);z.position.set(W.x,W.y,W.z),z.rotation.set(qe.degToRad(W.pitch),qe.degToRad(W.yaw),0,"YXZ"),z.castShadow=z.receiveShadow=!0,z.userData.mapIndex=K,l.add(z);let O=new M(W.w/2,W.h/2,W.d/2),X={mesh:z,position:z.position,quaternion:z.quaternion,half:O,min:O.clone().negate(),shape:Oi(O),friction:W.grip,gravity:W.gravity,bounce:W.bounce,zone:!0,type:W.material};if(!W.terrain)return{mesh:z,collider:X,custom:Re,ownTexture:T};let F=T0(W);return F&&z.add(F),{mesh:z,collider:w0(W,z),custom:Re,ownTexture:T,vegetation:F}}function te(){for(let W of c){let K=p?.pieces[W.mesh.userData.mapIndex];if(!K||W.ownTexture)continue;let ae=e.mapMaterial(K.material,r());W.custom?W.mesh.material.map!==ae.map&&(W.mesh.material.map=ae.map,W.mesh.material.needsUpdate=!0):W.mesh.material=ae}}function B(){for(let K of c)V(K);c.length=0;let W=p?.pieces??[];x=p?"custom-"+Gs(JSON.stringify(p)):"",o.forEach(K=>K.visible=!p);for(let K=0;K<W.length;K++)c.push(Z(W[K],K));if(j(),p?e.boxes.splice(0,e.boxes.length,...c.filter((K,ae)=>W[ae].solid).map(K=>K.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),p)try{localStorage.setItem(Ja,JSON.stringify(p))}catch{}else try{localStorage.removeItem(Ja)}catch{}}function Y(W){let K=ph(W);h++,u.length=0,p=K,g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),i(p.spawn.yaw),_("Map : "+p.name+" \xB7 "+p.pieces.length+" pi\xE8ces")}function oe(){h++,p=null,u.length=0,g=m=-1,t.set(0,0,3),B(),i(0),_("Ar\xE8ne int\xE9gr\xE9e")}function ie(){Y({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[mh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function pe(){if(!u.length)return _("Rien \xE0 annuler.");p=ph(u.pop()),g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),_("Derni\xE8re modification annul\xE9e.")}function ve(){p?bx(p):_("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Te(W,K,ae,Re){p&&(C(),p.spawn={x:W,y:K,z:ae,yaw:qe.radToDeg(Re)},t.set(W,K,ae),B(),_("Point de d\xE9part m\xE9moris\xE9."))}function ye(W,K,ae,{mode:Re,piece:T,head:z,feet:O}){P.set(W,K),P.far=12;let X=P.intersectObjects(c.map(R=>R.mesh),!1),F=Re>=5?X.find(R=>p?.pieces[R.object.userData.mapIndex]?.terrain):X[0];if(E.visible=!1,!p)return;if(Re>=5){let R=F?.object.userData.mapIndex,y=p.pieces[R];if(!y?.terrain||!ae)return;if(C(),Re===9){let I=T.terrain?.detail??y.terrain.detail,J=M0(y.terrain,I);y.terrain=no({...J,...T.terrain,heights:J.heights})}else{let I={mode:["raise","lower","smooth","flatten"][Re-5],radius:T.brushRadius,strength:T.brushStrength,target:y.y};b0(y,F.point.x,F.point.z,I)}B(),_("Relief modifi\xE9.");return}if(Re===2||Re===3||Re===4){if(!F)return;let R=F.object.userData.mapIndex,y=p.pieces[R];if(ae&&Re===2&&(g=R,m=R,_("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),ae&&Re===3){if(p.pieces.length===1)return _("Garde au moins une pi\xE8ce dans la map.");C(),p.pieces.splice(R,1),g=m=-1,B(),_("Pi\xE8ce supprim\xE9e.")}ae&&Re===4&&(C(),Object.assign(p.pieces[R],{material:T.material,grip:T.grip,gravity:T.gravity,bounce:T.bounce,solid:T.solid,texture:T.texture}),B(),_("Surface modifi\xE9e.")),F&&(E.position.copy(F.object.position),E.rotation.copy(F.object.rotation),E.scale.set(y.w,y.h,y.d).multiplyScalar(1.006),E.visible=!0,E.material.color.set(Re===3?"#ff8271":"#ffe2a2"));return}if(!F)return;let ce=m>=0?p.pieces[m]:T;if(F.object.userData.mapIndex===m)return;D.copy(F.face.normal).transformDirection(F.object.matrixWorld);let ne=ce.terrain?{...ce,x:Math.round(F.point.x*2)/2,y:F.point.y,z:Math.round(F.point.z*2)/2,pitch:0,yaw:0}:Mx(F.point,D,ce);if(!ne)return;E.position.set(ne.x,ne.y,ne.z),E.rotation.set(qe.degToRad(ne.pitch),qe.degToRad(ne.yaw),0,"YXZ"),E.scale.set(ne.w,ne.h,ne.d),E.updateMatrixWorld(!0),E.visible=!0;let fe=new sn().setFromObject(E),Ne=new sn(new M(z.x-.26,O+.01,z.z-.26),new M(z.x+.26,z.y+.19,z.z+.26)),Ue=ne.solid&&fe.intersectsBox(Ne);if(E.material.color.set(Ue?"#fd7763":"#8be4b9"),ae){if(Ue)return _("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(m<0&&p.pieces.length>=ja)return _("Limite de "+ja+" pi\xE8ces atteinte.");C(),m>=0?(p.pieces[m]=ne,m=-1):p.pieces.push(ne),B(),_("Pi\xE8ce pos\xE9e \xB7 "+p.pieces.length+" pi\xE8ces")}}let N=document.querySelector("#map-file"),G=document.querySelector("#map-url");N.onchange=async()=>{let W=N.files[0];if(!W)return;let K=++h;N.value="";try{if(W.size>fh)throw Error("Map trop lourde.");let ae=await W.text();K===h&&Y(ae)}catch(ae){K===h&&_(ae.message)}};async function he(W){let K=++h;try{let ae=new URL(W,location.href);if(!["http:","https:"].includes(ae.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let Re=await fetch(ae,{credentials:"omit"});if(K!==h)return;if(!Re.ok)throw Error("URL de map inaccessible ("+Re.status+").");if(Number(Re.headers.get("content-length"))>fh)throw Error("Map trop lourde.");let z=await Re.text();K===h&&Y(z)}catch(ae){K===h&&_(ae.message)}}return document.querySelector("#map-load-url").onclick=()=>he(G.value),document.querySelector("#map-export").onclick=ve,document.querySelector("#map-reset").onclick=oe,{modelPieces:()=>p?.pieces.filter(W=>!W.terrain&&W.name!=="Sol")??[],refreshMaterials:te,load:Y,loadURL:he,reset:oe,blank:ie,undo:pe,save:ve,edit:ye,recenter:Te,inform:_,clearGhost(){E.visible=!1},get active(){return!!p},get status(){return S},get yaw(){return p?.spawn.yaw??0},get nodes(){return p?.pieces.length??0},get name(){return p?.name??null},get signature(){return x}}}function wx(n){let e=new Ps,t=new kt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Se(1,1)},bloom:{value:0},exposure:{value:1}},s=new Mn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}"}),r=new Be(new Qt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:f}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(m=>!m.viewport?.z||!m.viewport?.w))return!1;i.bloom.value=f?.18:0,i.exposure.value=n.toneMappingExposure;let h=n.getRenderTarget(),p=n.xr.enabled,x=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let m=0;m<l.length;m++){let S=l[m],w=Math.max(32,Math.round(S.viewport.z)),v=Math.max(32,Math.round(S.viewport.w)),E=a[m];E?(E.width!==w||E.height!==v)&&E.setSize(w,v):E=a[m]=new Tn(w,v,{type:o?mi:On,minFilter:on,magFilter:on,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(S.matrixWorld),t.matrixWorld.copy(S.matrixWorld),t.matrixWorldInverse.copy(S.matrixWorldInverse),t.projectionMatrix.copy(S.projectionMatrix),t.projectionMatrixInverse.copy(S.projectionMatrixInverse),t.layers.mask=S.layers.mask,n.shadowMap.autoUpdate=m===0&&x,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=x,n.xr.enabled=p,n.setRenderTarget(h),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Tx(n){let e={value:0},t={value:Array.from({length:7},()=>new at(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Ax(n,e,t){let i=new Zt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Gt(.16,.25,3.15,9,12),r=s.attributes.position,o=new Fe,a=[];for(let ie=0;ie<r.count;ie++){let pe=Math.round((r.getY(ie)+1.575)/3.15*12),ve=Math.floor((Math.atan2(r.getX(ie),r.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+pe*.002,.35,.35+pe%3*.032+ve%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new ke(a,3));let l=new pt;l.position.set(Nf.x,0,Nf.z),l.rotation.z=-.14,n.add(l);let c=new Be(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,pe,ve=.85){let Te=ie.getWorldPosition(new M),ye=ie.getWorldQuaternion(new Ke);e.push({half:pe,min:pe.clone().negate(),position:Te,quaternion:ye,mesh:{position:Te,quaternion:ye},shape:Oi(pe),friction:ve,gravity:1})}for(let ie=0;ie<4;ie++){let pe=new Lt;pe.position.y=(ie+.5)*3.15/4,l.add(pe);let ve=.237-ie*.022;u(pe,new M(ve,.398,ve))}let d=[],f=[],h=3.14;function p(ie,pe,ve,Te){d.push(...ie,...pe,...ve),o.setHSL(.25+Te*.043,.54,.28+Te*.17);for(let ye=0;ye<3;ye++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let Te=function(ye,N){let G=ye*ve;return[Math.cos(pe)*G-Math.sin(pe)*N,h+Math.sin(ye*Math.PI)*.38-ye*ye*.54+ie%3*.055,Math.sin(pe)*G+Math.cos(pe)*N]},pe=ie*2.39996,ve=1.35+ie%4*.2;for(let ye=0;ye<7;ye++){let N=ye/7,G=(ye+1)/7,he=.285*Math.sin(Math.PI*N)**.7,W=.285*Math.sin(Math.PI*G)**.7;for(let K of[-1,1]){let ae=Te(N,he*K),Re=Te(G,W*K);ae[1]-=.065,Re[1]-=.065,p(Te(N,0),ae,Re,.31+ye%4*.14),p(Te(N,0),Re,Te(G,0),.47+ie%3*.16)}}}let x=new Qe;x.setAttribute("position",new ke(d,3)),x.setAttribute("color",new ke(f,3)),x.computeVertexNormals();let g=new Be(x,new Zt({vertexColors:!0,side:Ht,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new Tt({color:"#956238",roughness:.92,flatShading:!0}),S=[];for(let ie=0;ie<5;ie++){let pe=ie*Math.PI*2/5,ve=new Be(new Dt(.124,1),m);ve.position.set(Math.cos(pe)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(pe)*(.25+ie%2*.1)),ve.scale.set(.91,1.16,.91),ve.castShadow=!0,l.add(ve),S.push(ve)}l.updateMatrixWorld(!0);let w=[],v=[],E=new Zt({color:"#485d5d",flatShading:!0});function P([ie,pe],ve,Te){let ye=new Be(new je(1.72,.91,.57),E);ye.position.set(ie,.455,pe),ye.castShadow=ye.receiveShadow=!0,n.add(ye),u(ye,new M(.86,.455,.285));let N=new pt;N.position.set(ie,1.1,pe+.4),N.rotation.x=-.35,n.add(N);let G=new Be(new je(.64,.36,.055),new Zt({color:"#182831"}));N.add(G);let he=document.createElement("canvas");he.width=512,he.height=96;let W=he.getContext("2d"),K=new qn(he);K.colorSpace=xt;let ae=new Be(new Qt(.61,.095),new mt({map:K}));ae.position.set(0,.116,.03),N.add(ae);let Re=.592/Te.length,T=Te.map(([O,X],F)=>{let ce=new Be(new je(Re-.012,.155,.04),new Zt({color:"#478086"}));ce.position.set(-.296+Re*(F+.5),-.045,.046),N.add(ce),w.push(ce),ce.userData.touchWidth=Re-.012;let ne=document.createElement("canvas");ne.width=208,ne.height=172;let fe=new qn(ne);fe.colorSpace=xt;let Ne=new Be(new Qt(Re-.017,.139),new mt({map:fe}));Ne.position.z=.0205,ce.add(Ne);let Ue=-1/0;return ce.userData.action=()=>{let R=performance.now();R-Ue<250||(Ue=R,X(),D(),ce.position.z=.036,setTimeout(()=>{ce.position.z=.046},115))},{label:O,context:ne.getContext("2d"),texture:fe}});function z(){W.fillStyle="#182831",W.fillRect(0,0,512,96),W.fillStyle="#ffe1a0",W.font="bold 38px system-ui",W.fillText(ve,17,62,478);for(let O of T){let X=O.context;X.fillStyle="#386269",X.fillRect(0,0,208,172),X.fillStyle="#fff2d5",X.textAlign="center",X.font="bold 27px system-ui";let F=(typeof O.label=="function"?O.label():O.label).split("|");F.forEach((ce,ne)=>X.fillText(ce,104,(F.length>1?68:97)+ne*37,188)),O.texture.needsUpdate=!0}K.needsUpdate=!0}v.push(z)}function D(){for(let ie of v)ie()}P(ro.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,oo[0])],["Boule",()=>t.spawn(1,oo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,oo[0])],["Vider",t.clear]]),P(ro.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,oo[1])],["Sph\xE8re",()=>t.spawn(5,oo[1])]]),P(ro.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),P(ro.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),P(ro.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),D();let L=new pt,{x:b,y:_,z:C}=Ff;L.position.set(b,_,C),n.add(L);let U=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let pe=[.9,.58,.27][ie],ve=new Be(new Yt(pe,20),new Zt({color:U[ie],side:Ht}));ve.position.z=ie*.012,L.add(ve)}let j=new Be(new je(.14,1.5,.14),E);j.position.set(0,.75-_,-.11),L.add(j);let H=0,V=document.createElement("canvas");V.width=256,V.height=64;let Z=V.getContext("2d"),te=new qn(V);te.colorSpace=xt;let B=new Be(new Qt(1.4,.35),new mt({map:te,side:Ht}));B.position.set(0,2.64-_,.02),L.add(B);function Y(){Z.fillStyle="#182831",Z.fillRect(0,0,256,64),Z.textAlign="center",Z.font="bold 28px system-ui",Z.fillStyle="#fff0ce",Z.fillText("CIBLE  \xB7  "+H,128,42),te.needsUpdate=!0}function oe(ie){for(let pe of ie){if(!pe.beforePhysics||pe.owner||pe.frozen||!pe.mesh.visible)continue;let ve=pe.beforePhysics,Te=pe.mesh.position;if(ve.z<=C||Te.z>C||pe.velocity.z>=-1)continue;let ye=(ve.z-C)/(ve.z-Te.z),N=Math.hypot(qe.lerp(ve.x,Te.x,ye)-b,qe.lerp(ve.y,Te.y,ye)-_);N<=.9+pe.radius*.45&&(H+=N<.27?3:N<.58?2:1,Y())}}return Y(),{targets:w,coconuts:S,redraw:D,updateTarget:oe,score:()=>H}}function Ka(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var hs=(n,e,t)=>n+(e-n)*t,po=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function gh(n,e){let t=Math.floor(n),i=Math.floor(e),s=po(0,1,n-t),r=po(0,1,e-i);return hs(hs(Ka(t,i),Ka(t+1,i),s),hs(Ka(t,i+1),Ka(t+1,i+1),s),r)}function Ex(n,e){return gh(n,e)*.54+gh(n*2.07+3.4,e*2.07-6.1)*.26+gh(n*4.2+9,e*4.2)*.13+gh(n*8.6,e*8.6-13)*.07}function Cx(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=r.map((p,x)=>hs(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,S=0;if(c>.025)if(n){let v=Ka(p+792,l+677);v>.9988&&(S=(v-.9988)*49e3*po(.09,.3,c))}else{let[v,E]=s[p],P=2.8*u/(c+.16),D=v*P+3.6,L=E*P-8.1,b=Ex(D,L),_=Ex(D-.12,L-.09);g=po(.49,.66,b)*po(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(b-_)*5+(b-.54)*.8))}let w=n?1:hs(.94,1,po(.05,.34,c));i[x]=hs(h[0],(139+115*m)*w,g)+S,i[x+1]=hs(h[1],(154+100*m)*w,g)+S*.94,i[x+2]=hs(h[2],(178+77*m)*w,g)+S*.86,i[x+3]=255}}let a=new fi(i,1024,512,En);return a.colorSpace=xt,a.wrapS=di,a.magFilter=an,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Rx(){return{day:Cx(!1),night:Cx(!0)}}function xh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new qn(i);return s.colorSpace=xt,s}function Px(n,e){let{day:t,night:i}=Rx(),s=new Be(new Ri(180,40,20),new mt({map:t,side:cn,fog:!1,toneMapped:!1}));n.add(s);let r=xh(128,128,(y,I)=>{let J=y.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);J.addColorStop(0,"#fff8df"),J.addColorStop(.12,"#fff3bd"),J.addColorStop(.18,"rgba(255,225,144,.40)"),J.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=J,y.fillRect(0,0,I,I)}),o=new Qo(new Nr({map:r,blending:Yn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Xr,a.needsUpdate=!0;let l=new $r(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ba("#daeaff","#88724c",2.25),u=new Ta("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=f[y]?y:0;let I=f[h];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,u.color.set(I.sun),u.intensity=I.power,d.set(...I.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,s.material.map=h===2?i:t,s.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let I=u.target.position,J=Math.round(y.x/4)*4,le=Math.round(y.y/4)*4,$=Math.round(y.z/4)*4;I.x===J&&I.y===le&&I.z===$||(I.set(J,le,$),u.position.copy(I).add(d))}let g=0;n.background=new Fe(f[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function S(y,I,J){let[,le,$]=m[I],ge=512;y.save(),y.scale(J/512,J/512),y.fillStyle=le,y.fillRect(0,0,ge,ge);let de=I+19;function xe(){return de=Math.imul(de,1664525)+1013904223>>>0,de/4294967296}if(y.fillStyle=$,I===16){for(let _e=0;_e<16;_e++)for(let ue=0;ue<16;ue++)(ue+_e)%2===0&&y.fillRect(ue*32,_e*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let _e=I===15?32:64;y.globalAlpha=.48;for(let ue=0;ue<ge;ue+=_e){y.fillRect(0,ue,ge,I===8?3:2);for(let Ae=-_e;Ae<ge;Ae+=_e)y.fillRect(Ae+ue/_e%2*(I===2?_e/2:0),ue,2,_e)}}else if([4,5,6,7,10,11,12].includes(I)){let _e=I===5?38:I===7?64:18;for(let ue=0;ue<_e;ue++){y.strokeStyle=$,y.globalAlpha=.08+xe()*.22,y.lineWidth=I===5?1+xe()*8:1+xe()*4;let Ae=xe()*ge,ze=I===5?.018:.009;y.beginPath();for(let Me=0;Me<=ge;Me+=8){let Ee=Ae+Math.sin(Me*ze+ue)*(I===6||I===7?4:12+ue%5*3)+(I===4?Me*.28:0);Me===0?y.moveTo(Me,Ee):y.lineTo(Me,Ee)}y.stroke()}}else{y.globalAlpha=.27;for(let _e=0;_e<120;_e++){let ue=xe()*ge,Ae=xe()*ge,ze=2+xe()*6;y.beginPath(),y.arc(ue,Ae,ze,0,Math.PI*2),y.fill()}}if(I!==16)for(let _e=0;_e<4400;_e++)y.globalAlpha=.05+xe()*.1,y.fillStyle=xe()>.5?$:"#222324",y.fillRect(xe()*ge,xe()*ge,1+xe()*4,1+xe()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=m.map(([y,I,J,le,$,ge],de)=>{let xe=w.has(de)?512:256,_e=xh(xe,xe,Ae=>S(Ae,de,xe));_e.wrapS=_e.wrapT=di;let ue=new Tt({map:_e,roughness:le,metalness:$,flatShading:!0,opacity:ge,transparent:ge<1,depthWrite:ge===1});return ue.name=y,ue}),E=v.map(y=>y.map.image),P=512,D=v.map(y=>new Zt({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),L={value:0},b={value:.24},_={value:null},C={value:0};function U(){_.value?.dispose(),_.value=xh(512,512,(y,I)=>{y.fillStyle="#ffffff",y.fillRect(0,0,I,I);let J=I/52,le=I/64;for(let $ of j){if(!$.position||!$.half||$.position.y+$.half.y<.22)continue;let ge=($.position.x+26)*J,de=($.position.z+54)*le,xe=Math.min(55,$.half.x*J+5),_e=Math.min(72,$.half.z*le+6);y.save(),y.translate(ge+$.half.y*J*.2,de+$.half.y*le*.24),y.scale(xe,_e);let ue=y.createRadialGradient(0,0,.15,0,0,1);ue.addColorStop(0,"rgba(22,37,65,.54)"),ue.addColorStop(.58,"rgba(36,54,76,.29)"),ue.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ue,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...D])y.onBeforeCompile=I=>{I.uniforms.uFocusAmount=L,I.uniforms.uFocusRadius=b,I.uniforms.uLabLightmap=_,I.uniforms.uLabBakedStrength=C,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let j=[],H=[];function V(y,I,J,le,$,ge,de,xe=0,_e=0,ue=1,Ae=1,ze=!1){let Me=new Be(ze?new je($,ge,de):Qu($,ge,de),v[xe]);Me.position.set(I,J,le),Me.rotation.x=_e,Me.receiveShadow=!0,Me.castShadow=!0,n.add(Me);let Ee=new M($/2,ge/2,de/2),He={mesh:Me,position:Me.position,quaternion:Me.quaternion,half:Ee,min:Ee.clone().negate(),friction:ue,gravity:Ae,name:y,type:xe,shape:Oi(Ee)};return j.push(He),He}let Z=J0.map(({name:y,bounds:I,type:J=0,friction:le=.78,gravity:$=1})=>{let{xMin:ge,xMax:de,zMin:xe,zMax:_e}=I;return V(y,(ge+de)/2,-.33,(xe+_e)/2,de-ge,.66,_e-xe,J,0,le,$)});for(let y of Object.values($0))for(let I of y)V(...I);let{xMin:te,xMax:B,zMin:Y,zMax:oe}=j0;V("But\xE9e arri\xE8re",0,1.35,Y+.4,B-te,2.7,.6,2),V("But\xE9e ouest",te+.3,1.05,(Y+oe)/2,.6,2.1,oe-Y,2),V("But\xE9e est",B-.3,1.05,(Y+oe)/2,.6,2.1,oe-Y,2);let{xMin:ie,xMax:pe,zMin:ve,zMax:Te}=so.hills.bounds,ye=pe-ie,N=Te-ve,G=16,he=64,W=new Qt(ye,N,G,he).rotateX(-Math.PI/2).translate(ie+ye/2,0,ve+N/2),K=W.attributes.uv;for(let y=0;y<K.count;y++)K.setXY(y,K.getX(y)*ye/2.6,K.getY(y)*N/2.6);let ae=W.attributes.position,Re;function T(y){if(Re===y)return;Re=y;let I=Re*.017;for(let J=0;J<ae.count;J++){let le=ae.getX(J),$=ae.getZ(J),ge=Math.sin(Math.PI*qe.clamp((le-ie)/ye,0,1)),de=Math.min(1,($-ve)*.48,(Te-$)*.48),xe=.93+.56*Math.sin($*.36+I)+.32*Math.cos(le*.67+$*.26+I*1.4)+.19*Math.sin($*.81+I*.67);ae.setY(J,Math.max(0,ge*de*xe))}ae.needsUpdate=!0,W.computeVertexNormals(),W.computeBoundingSphere()}T(Math.floor(Math.random()*1e6));let z=new Be(W,v[3]);z.receiveShadow=z.castShadow=!0,n.add(z);let O=(y,I)=>{let J=qe.clamp((y-ie)/ye*G,0,G-1e-6),le=qe.clamp((I-ve)/N*he,0,he-1e-6),$=Math.floor(J),ge=Math.floor(le),de=J-$,xe=le-ge,_e=G+1,ue=ge*_e+$,Ae=ae.getY(ue),ze=ae.getY(ue+1),Me=ae.getY(ue+_e),Ee=ae.getY(ue+_e+1);return de+xe<=1?Ae+(ze-Ae)*de+(Me-Ae)*xe:Ee+(Me-Ee)*(1-de)+(ze-Ee)*(1-xe)};j.push({heightfield:!0,mesh:z,height:O,...so.hills.bounds,friction:.81,gravity:1});function X(y,I,J,le,$=1.45){let ge=xh(384,72,(xe,_e,ue)=>{xe.fillStyle="#202a32",xe.fillRect(0,0,_e,ue),xe.fillStyle=le,xe.font="bold 31px system-ui",xe.textAlign="center",xe.fillText(y,_e/2,48,_e-20)}),de=new Be(new Qt(3.2,.6),new mt({map:ge,side:Ht}));de.position.set(I,$,J),n.add(de),H.push(de)}for(let y of Object.values(so)){X(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:I,xMax:J,zMin:le,zMax:$}=y.bounds,ge=new ia(new Qe().setFromPoints([new M(I,.025,le),new M(J,.025,le),new M(J,.025,$),new M(I,.025,$)]),new Qi({color:y.color,transparent:!0,opacity:.72}));n.add(ge),H.push(ge)}X("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),X("MURS HAUTS",3,-31,"#e8d2ff"),X("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let F=new Tt({color:"#c8e6ed",metalness:1,roughness:.16}),ce=new Be(new Dt(.54,2),F);ce.position.set($u.x,$u.y,$u.z),ce.castShadow=!0,n.add(ce);let ne=m.map((y,I)=>{let{x:J,z:le}=K0(I);return V("\xC9chantillon "+m[I][0],J,.325,le,.65,.65,.65,I,0,1,1,!0).mesh}),fe=new Yt(1,12).rotateX(-Math.PI/2),Ne=new mt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ue(y){let I=new Be(fe,Ne);return I.scale.setScalar(y),n.add(I),I}function R(y,I,J,le,$,ge,de,xe){let _e=I>=3;e.shadowMap.enabled=_e,u.castShadow=_e,Ne.opacity=I===2?.17:.11,C.value=xe?.38+J*.04:0;let ue=I>=9?2048:I>=6?1024:I>=4?512:256;u.shadow.intensity=.45+I*.055,u.shadow.radius=.65+I*.12;let Ae=13+I*1.2;Object.assign(u.shadow.camera,{left:-Ae,right:Ae,top:Ae,bottom:-Ae}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ue&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ue,ue)),o.visible=$,de!==P&&(P=de,v.forEach((Me,Ee)=>{let He=Me.userData.texture??Me.map,k=w.has(Ee)?de:Math.min(256,de);if(He.image.width===k)return;let we=document.createElement("canvas");we.width=we.height=k;let Pe=we.getContext("2d");k>512?S(Pe,Ee,k):Pe.drawImage(E[Ee],0,0,k,k);let De=new qn(we);De.colorSpace=He.colorSpace,De.wrapS=He.wrapS,De.wrapT=He.wrapT,De.repeat.copy(He.repeat);for(let be of[Me,D[Ee]])be.userData.texture=De,be.map=De,be.needsUpdate=!0;He.dispose()}));let ze=y>=4;for(let Me of j)Me.mesh?.isMesh&&!Me.zone&&(Me.mesh.material=ze?v[Me.type]:D[Me.type]);z.material=ze?v[3]:D[3];for(let Me=0;Me<ne.length;Me++)ne[Me].material=ze?v[Me]:D[Me];v.forEach((Me,Ee)=>{for(let He of[Me,D[Ee]])He.userData.texture||(He.userData.texture=He.map),He.map=ge?He.userData.texture:null,He.color.set(ge?"#ffffff":m[Ee][1]),He.needsUpdate=!0}),g=le?.21+J*.067:0,F.metalness=le?.95:.1,F.roughness=le?.13:.46,s.visible=y>=2,p(h)}return{boxes:j,floors:Z,probe:ce,display:ne,visual:R,shadow:Ue,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Re},setHillSeed:T,bakeLightmap:U,mapMaterial:(y,I)=>I>=4?v[y]:D[y],builtObjects:[...j.map(y=>y.mesh).filter(y=>y?.isObject3D),ce,...H],materials:[...v,...D],focus(y,I,J){L.value=y?I*.75:0,b.value=.07+J*.058}}}var go=document.getElementById("game");go instanceof HTMLCanvasElement||(go=document.createElement("canvas"),go.id="game",go.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(go));var et;try{et=new wu({canvas:go,antialias:!0,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}et.xr.enabled=!0;et.xr.setReferenceSpaceType("local-floor");et.shadowMap.type=Ea;et.shadowMap.autoUpdate=!1;var Ix=-1/0;et.toneMapping=Nc;et.toneMappingExposure=1.15;var Rt=new Ps;Rt.fog=new Ko("#a6d4ea",55,135);var ut=new pt,Lh=new pt,Wt=new kt(70,1,.035,210);ut.add(Lh);Lh.add(Wt);Rt.add(ut);var St=Px(Rt,et),lT=wx(et),cT=Tx(St.probe),q={timeOfDay:1,stepHaptics:!0,blasterActive:!1,shaderMode:1,shadowQuality:10,lightQuality:10,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,contrast:5,saturation:5,exposure:5,warmth:5,bounce:4,throw:5,preciseHitboxes:!1,quality:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4,toolMode:1,toolActive:!1,focus:!0,focusStrength:5,focusSize:5,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,textures:!0,reflections:!0,shadows:!0,bloom:!0},uT={...q},xp=new M(Ju.x,Ju.y,Ju.z);ut.position.copy(xp);var Pn=new M,$a=new M,Et=new M,Lx=new M,Jn=new M,jn=new M,Dx=new M,ds=new M,js=new M,Ux=new M,Jf=new M,Nx=new M,yh=new M,Fx=.105,Bx=new M,Sh=!1,$s=!1,hT=new Ke,dT=new M(0,0,1),yp=0,_p=null,nl=[],vp=100,Ct=new M(0,1,0),li=new Ke,ht=0,Vi=0,fs=0,oi=0,Mo=NaN,wh=!1,Kf=0,Qs=0,$f=0,_h=0,xo=0,yo=0,_o=0,$t=7,il=72,Kt=!1,ny="left",Ut=0,Mp=0,bp=0,Sp=0,yn=!0,Ox=0,fT=[],vh=[],nr=St.boxes,pT=new Dt(1,0),iy=1+Math.floor(Math.random()*(Au.length-1)),sy=Eu(iy),{hand:mT,fur:gT}=sy;function xT(n,e,t,i,s,r,o,a){let l=new Be(pT,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var Dh=Df(localStorage),yT=Dh.models.length?"|atelier-"+Gs(JSON.stringify(Dh)):"",gs=Z0(Dh)??sy.createHead();gs.visible=!1;Rt.add(gs);var Js=new M,Th=new Ke,zx=new M,Vx=new M,kx=new ln(0,0,0,"YXZ"),Qa=0,Qf=new Ke,Gx=[null,null];function Uh(){return .24+q.arms*.036}function _T(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=qe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=qe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=qe.lerp(r[2],i,s),n.skin.pose(r,!q.body)}var Xt=["left","right"].map(n=>{let e=Ru(n,mT,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Rt.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new Ke},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new Ke,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Ah=new Gu(M,Xt,cx),ry=Pu(gT,Xt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Xt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var ps=ry.mesh;Rt.add(ps);function vT(n,e){if(q.body){Qf.copy(ps.quaternion).invert();for(let t=0;t<Xt.length;t++){let i=Xt[t];Gx[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(ps.position).applyQuaternion(Qf),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Qf))}ry.pose(Gx,Uh(),n,e,q.hands)}}var Vn=[["Cube",new je(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Dt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new ya(.29),"#d8ae53",0,1],["Brique",new je(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new je(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Dt(.6,2),"#dbab58",.6,3.7],["Coco",new Dt(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:fo(e,i),material:new Tt({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:Oi(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of O0()){let i=fo(n??t.geo,e);Vn.push({...t,shape:i,lowShape:i})}var oy=[0,1,2,3,4,5],ay=[7,8,9,10,11,12,13,14],dl=15,Hx=Oi(new M(.13,.088,.115)),MT=new je(.26,.176,.23),bT=new Tt({color:"#536771",roughness:.36,metalness:.28});Vn[dl]={name:"Cam\xE9ra du spectateur",geo:MT,material:bT,shape:Hx,lowShape:Hx,mass:1.2};var{props:ST,animate:wT}=V0(),TT=Y0(Dh).slice(0,36),wp=[],al=[];function ly(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=fo(t??s.geo,i);e.push(Vn.length),Vn.push({...s,shape:r,lowShape:r})}}ly(ST,wp);ly(TT,al);var Tp=[...oy,...ay,...wp,...al];Vn[8].properties={supportWhileHeld:!0};Vn[11].properties={supportWhileHeld:!0};function AT(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Vn)n.supportAxis=AT(n);function ET(n){let e=new Be(new Gt(.058,.074,.1,12).rotateX(Math.PI/2),new Tt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new Yt(.048,12),new mt({color:"#7bd7ed",side:Ht}));t.position.z=-.203,n.add(t);let i=new Be(new je(.045,.013,.012),new mt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function cy(n,e=!1){let t=Vn[n];if(!t)return null;let i=new Be(t.geo,e?ju(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===dl&&ET(i),i}var bt=[],CT=[],xs={held:null},So=new Map,ki=0,RT=1,Ks=new Ke,ep=new Ke,el=new M,Nh=new M,er=new M,uy=new M,hy=new M;function PT(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Nh.set(0,0,-1).applyAxisAngle(Ct,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(el.copy(n).addScaledVector(Nh,r),el.y+=.15,!Ya(n,el,Math.min(.2,t*.5),nr,uy,hy)&&!bt.some(o=>o.mesh.position.distanceToSquared(el)<(t+o.radius+.07)**2))return el}}return null}function sr(n,e,t,i=!1){let s=Vn[n];if(!s)return null;if(!e&&(t?er.set(t.x,t.y,t.z):et.xr.isPresenting?er.copy(Et):Wt.getWorldPosition(er),e=PT(er,t?.yaw??Vi,s.shape.radius),!e))return i||yi("Aucun espace libre pour cet objet."),null;let r=cy(n);r.position.copy(e),Rt.add(r);let o=q.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:RT++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:q.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new Ke,shadow:St.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===dl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),bt.push(a),Za(a,St.boxes),a}function dy(){for(let n of Xt)ai(n,!1);ai(xs,!1);for(let n of So.values())ai(n,!1)}function Hh(){dy();for(let n of bt)Rt.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();bt.length=0,So.clear()}function fy(){Tp.slice(0,Uf.length).forEach((n,e)=>{let{x:t,z:i}=Uf[e];sr(n,new M(t,.8,i))})}fy();function ai(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+q.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function wo(){dy();for(let n of bt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function Wi(){Cy.reset(),ol=0,ut.position.copy(xp),ht=qe.degToRad(_t.yaw),fs=0,ut.rotation.y=ht,Pn.set(0,0,0),wh=!1,$s=!1,Sh=!1,Ah.reset();for(let n of Xt)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,ai(n,!1)}wo();function Fh(){return q.auto?Math.min(q.shadowQuality,$t):q.shadowQuality}function ll(){return q.auto?Math.min(q.lightQuality,$t):q.lightQuality}function Hi(){let n=q.texturePower;St.visual($t,q.shadows?Fh():0,ll(),q.reflections,q.bloom,q.textures,2**(n-1),q.lightmap),_t.refreshMaterials?.(),et.shadowMap.needsUpdate=!0,St.setTimeOfDay(dt.remoteLight??q.timeOfDay-1),up=Oh.slice(0,ll()>=8?3:ll()>=4?2:1),Hp.value=q.shaderMode-1;let e=et.xr.isPresenting&&et.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(q.focus&&!e,q.focusStrength,q.focusSize),et.toneMappingExposure=.58+q.exposure*.114,Ny.value=.55+q.contrast*.09,Fy.value=q.saturation*.2,By.value=(q.warmth-5)*.022,et.xr.setFoveation(q.focus?qe.clamp((q.focusStrength+1)*.105+(5-q.focusSize)*.028+(q.auto?(7-$t)*.045:0),0,1):0),et.xr.isPresenting||Ap(),yn=!0,_i.redraw()}function Ap(){et.xr.isPresenting||(et.setPixelRatio(Math.min(devicePixelRatio,1.75)*(.53+$t*.047)),et.setSize(innerWidth,innerHeight,!1),Wt.aspect=innerWidth/innerHeight,Wt.updateProjectionMatrix())}addEventListener("resize",Ap);var bo=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],lp=["Naturel","Cellulo","Affiche","R\xE9tro"],Ep={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function IT(n){Object.assign(q,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Ep[n]),$t=q.quality,yo=_o=xo=0,Hi()}var To=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",Wi]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",wo]]],["Rendu",[]]],Cp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Rp(){return Ut===2?Cp[Mp][1]:Ut===3?gy[bp][1]:Ut===4?Np[Sp][1]:To[Ut][1]}function py(n){Ut=n,yn=!0}var Bh=null,Pp=[],Eh=0,cp=0,Ip=null,Lp=!1,Dp=0,Up=0,my={},Oh=Array.from({length:3},()=>{let n=new Sa("#ffffff",0,22,1.6);return n.visible=!1,Rt.add(n),{light:n,mesh:null,distance:1/0}}),up=Oh,zh=new M;function Wx(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(zh);if(e>34**2)return;let t=up[0];for(let i of up)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function LT(n){n?Wt.getWorldPosition(zh):zh.copy(Et);for(let t of Oh)t.mesh=null,t.distance=1/0;if(n)dt.forEachReplica(Wx);else if(q.objects)for(let t of bt)t.materialStyle===3&&Wx(t.mesh);let e=20+ll()*.75;for(let{light:t,mesh:i}of Oh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Wh(){let n=Pp.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;Bh={game:"Gorilla Lab",version:"r28",time:new Date().toISOString(),mode:Lp?"VR":"PC",settings:{...q},qualityActive:$t,performance:{fps:Qs,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Ip,renderer:my,terrainSeed:St.hillSeed,map:_t.active?{name:_t.name,pieces:_t.nodes}:null,objects:{total:bt.length,held:bt.filter(t=>t.owner).length,frozen:bt.filter(t=>t.frozen).length},cloud:{role:dt.role,connected:dt.connected,replicas:dt.replicaCount},targetScore:_i.score(),locomotion:{trackedFrames:Up,contactFrames:Dp,launchCount:yp,lastLaunch:_p,standingHeight:Number.isFinite(Mo)?Mo:null,viewOffset:oi}},document.querySelector("#download-report").disabled=!1,yn=!0}function DT(){Bh||Wh();let n=URL.createObjectURL(new Blob([JSON.stringify(Bh,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=DT;document.querySelector("#capture-report").onclick=Wh;To[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Wh]);var UT=Array.from({length:Math.ceil(al.length/8)},(n,e)=>["Atelier"+(al.length>8?" "+(e+1):""),al.slice(e*8,e*8+8)]),gy=[["Basiques",oy],["D\xE9taill\xE9s",ay],["Anim\xE9s",wp],...UT].map(([n,e])=>[n,[...e.map(t=>[Vn[t].name,()=>Ry(t)]),["Tout retirer",Vp]]]);To.push(["Spawn",[]]);var Np=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{_t.blank(),q.mapEdit=!0}],["Annuler placement",()=>_t.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>_t.recenter(Et.x,ut.position.y,Et.z,Vi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{_t.reset(),q.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Yx(!1)],["Utiliser comme t\xEAte",()=>Yx(!0)]]]];To.push(["Carte",[]]);var NT=document.querySelector("#section"),tp=document.querySelector("#settings"),FT=document.querySelector("#readings");function gn(n,e){if(n==="shaderMode"){q.shaderMode=(q.shaderMode-1+e+lp.length)%lp.length+1,Hp.value=q.shaderMode-1,yn=!0;return}if(n==="timeOfDay"){q.timeOfDay=(q.timeOfDay-1+e+3)%3+1,Hi();return}let t={mapMode:9,mapShape:5,mapMaterial:Zf.length,mapSurface:4,mapTurn:8,mapTexture:ku.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];q[n]=(q[n]-1+e+i)%i+1,yn=!0;return}if(n==="mapEdit"&&!q.mapEdit&&!_t.active&&_t.blank(),n==="toolMode"){q.toolMode=(q.toolMode-1+e+bo.length)%bo.length+1,et.xr.isPresenting||yi("Outil \xB7 "+bo[q.toolMode-1]),yn=!0;return}if(n==="preset"){let i=Object.keys(Ep);q.preset=(q.preset-1+e+i.length)%i.length+1,IT(i[q.preset-1]);return}if(typeof q[n]=="boolean"?q[n]=!q[n]:q[n]=qe.clamp(q[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Xt)i.valid=!1,i.surface=null;if(n==="quality"&&(q.auto=!1,$t=q.quality),n==="auto"&&!q.auto&&($t=q.quality),n==="movement"||n==="collisions")for(let i of Xt)i.surface=null;if(n==="objects"&&!q.objects&&wo(),n==="blasterActive"&&q.blasterActive&&(q.toolActive=!1),n==="toolActive"&&q.toolActive&&(q.blasterActive=!1),!q.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Xt)i.held?.toolHold&&ai(i,!1);zp(!1)}n==="preciseHitboxes"&&xy(),Hi()}function xy(){for(let n of bt)n.precise=q.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||Za(n,St.boxes)}function yy(){let n=(Ut===2?Cp:Ut===4?Np:null)?.flatMap(e=>e[1])??Rp();for(let[,e]of n)typeof e=="string"&&(q[e]=uT[e]);Ut===0&&Wi(),Ut===1&&(xy(),wo()),Ut===3&&Vp(),Ut===2&&($t=q.quality),Hi()}function tl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),fl(),yn=!0},t}function _y(n){return n==="preciseHitboxes"?q[n]?"High":"Low":q[n]?"Actif":"Coup\xE9"}function Fp(n){if(n==="mapTexture")return q[n]===1?"Aucune":ku[q[n]-2];if(n==="terrainResolution")return[8,16,32,48][q[n]-1]+"\xB2";if(n==="shaderMode")return lp[q.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=q[n],t=n==="shadowQuality"?Fh():ll();return t===e?e+"/10":e+"/10 \xB7 "+t+" auto"}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][q.timeOfDay-1]:n==="mapMode"?Ty[q.mapMode-1]:n==="mapShape"?kT[q.mapShape-1]:n==="mapSurface"?GT[q.mapSurface-1]:n==="mapMaterial"?Zf[q.mapMaterial-1]:n==="mapTurn"?(q.mapTurn-1)*45+"\xB0":n==="toolMode"?bo[q.toolMode-1]:n==="preset"?Object.keys(Ep)[q.preset-1]:n==="texturePower"?[2**(q[n]-1),2**(q[n]-1)].join("\xD7"):q[n]}function hp(){return Ut===2?Cp:Ut===3?gy:Np}function vy(){return Ut===2?Mp:Ut===3?bp:Sp}function My(n){Ut===2?Mp=n:Ut===3?bp=n:Sp=n}function by(n){return n===Wh?"Capturer":n===Hh||n===Vp?"Vider":n===Wi||n===wo?"R\xE9initialiser":Ut===3?"Cr\xE9er":"Appliquer"}function fl(){if(NT.textContent=To[Ut][0],Sy.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===Ut))),tp.replaceChildren(),Ut>=2){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),hp().forEach(([e],t)=>{let i=tl(e,()=>My(t));i.setAttribute("aria-pressed",String(vy()===t)),n.append(i)}),tp.append(n)}for(let[n,e]of Rp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(tl(by(e),e)):typeof q[e]=="boolean"?i.append(tl(_y(e),()=>gn(e,1))):i.append(tl("\u2212",()=>gn(e,-1)),document.createTextNode(" "+Fp(e)+" "),tl("+",()=>gn(e,1))),t.append(i),tp.append(t)}}var Sy=document.querySelectorAll("[data-page]");Sy.forEach((n,e)=>n.onclick=()=>{py(e),fl()});document.querySelector("#restore").onclick=()=>{yy(),fl()};fl();function wy(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new qn(r);a.colorSpace=xt;let l=new Be(new Qt(t,i),new mt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var xn=wy(640,652,.84,.86,Rt);xn.mesh.visible=!1;var zi=wy(416,84,.32,.065,Rt);zi.mesh.visible=!1;var mo=new kt(75,1,.07,140),Kn=new Na(new Qt(1.7,1.95),{color:16054015,textureWidth:256,textureHeight:256,clipBias:.004,multisample:0}),BT=new M(0,0,-1),Mh=new M,Xx=new M;Kn.position.set(Ku.x,Ku.y,Ku.z);Kn.rotation.y=Math.PI;Rt.add(Kn);var Bp=new Be(new je(1.8,2.03,.1),new Zt({color:"#344650"}));Bp.position.copy(Kn.position).z+=.064;Rt.add(Bp);var OT=Kn.onBeforeRender.bind(Kn);Kn.onBeforeRender=()=>{};Kn.visible=!1;var np=-1/0;function zT(n,e){if(mo.position.copy(Et),e){let i=e.transform.orientation;mo.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Th.setFromAxisAngle(Ct,ht))}else Wt.getWorldQuaternion(mo.quaternion);Xx.set(0,0,-1).applyQuaternion(mo.quaternion),Mh.subVectors(Kn.position,Et);let t=Mh.length();if(Kn.visible=!_t.active&&q.reflections&&t<4&&Mh.dot(BT)<-.15&&Mh.multiplyScalar(1/Math.max(.001,t)).dot(Xx)>.66,!Kn.visible){np=-1/0;return}if(!(n-np<45)){np=n,mo.updateMatrixWorld(!0),Kn.updateMatrixWorld(!0),gs.visible=q.body;try{OT(et,Rt,mo)}finally{gs.visible=!1}}}var xi=new ns,zn=new M,In=new M,dp=new M,bh=new M,qx=new M,sl=null,Ch=null,Rh=null,VT=new Set(Rt.children),_i=Ax(Rt,St.boxes,{spawn:(n,e)=>{q.objects||(q.objects=!0),sr(n,e)},clear:Hh,resetPlayer:Wi,resetObjects:wo,resetTree:()=>{for(let n of _i.coconuts)n.visible=!0},quality:()=>$t+"/10",resolution:()=>q.resolution+"/10 \xB7 relancer VR",textureSize:()=>Fp("texturePower"),qualityNext:()=>{q.quality>=10&&(q.quality=0),gn("quality",1)},resolutionNext:()=>{q.resolution>=10&&(q.resolution=0),gn("resolution",1)},textureNext:()=>{q.texturePower>=12&&(q.texturePower=0),gn("texturePower",1)},hitbox:()=>gn("preciseHitboxes",1),movement:()=>gn("movement",1)}),Ty=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],kT=["Bloc","Rampe","Mur","Dalle","Terrain"],GT=["Normale","Glace","Caoutchouc","Lune"],_t=Sx({scene:Rt,arena:St,boot:xp,onReset:n=>{Hh(),Wi(),ht=qe.degToRad(n),_t.active||fy()},onVisual:Hi,getLevel:()=>$t,defaultObjects:[...St.builtObjects,...Rt.children.filter(n=>!VT.has(n)),Bp]}),dt=g0({scene:Rt,currentMap:()=>(_t.signature||"arena-r25-"+St.hillSeed)+yT,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=cy(n,!0);return e&&ml(e.material),e},onAction:jT,applyLight:n=>St.setTimeOfDay(n??q.timeOfDay-1),applyCoconuts:n=>_i.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function Yx(n){let e=_t.modelPieces();if(!e.length||e.length>Xs.parts){yi("Compose un mod\xE8le de 1 \xE0 "+Xs.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Df(localStorage);if(t.models.length>=Xs.models){yi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:q.modelGrab,frozen:q.modelFrozen,collidable:q.modelCollidable,supportWhileHeld:q.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?vx[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(If,JSON.stringify(Lf(t))),yi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{yi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var ip=new Map;function HT(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][q.mapShape-1],e=no({detail:[8,16,32,48][q.terrainResolution-1],amplitude:(q.terrainAmplitude-1)*.34,frequency:.05+q.terrainFrequency*.025,seed:q.terrainSeed,grass:(q.terrainGrass-1)/9,shrub:(q.terrainShrub-1)/9}),t=q.mapTexture-2;return t>=0&&!ip.has(t)&&ip.set(t,C0(t).toDataURL("image/webp",.83)),mh({...n,material:q.mapMaterial-1,yaw:q.mapShape===5?0:(q.mapTurn-1)*45,...jf[Object.keys(jf)[q.mapSurface-1]],texture:ip.get(t)??null,terrain:q.mapShape===5||q.mapMode===9?e:null,brushRadius:.5+q.brushRadius*.5,brushStrength:q.brushStrength*.15})}function WT(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-oi,r.z).applyAxisAngle(Ct,ht).add(ut.position),li.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(li).applyAxisAngle(Ct,ht),_t.edit(zn,In,i,{mode:q.mapMode,piece:HT(),head:Et,feet:ut.position.y}),i&&(yn=!0)}function XT(n){if(_t.active||!n.valid||n.held||Kt)return;let e=null;for(let t of _i.targets)if(t.getWorldPosition(qx),!(n.mesh.position.distanceToSquared(qx)>.11**2)&&(t.worldToLocal(bh.copy(n.mesh.position)),Math.abs(bh.x)<t.userData.touchWidth*.5+.025&&Math.abs(bh.y)<.095&&Math.abs(bh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Ay(n,e=null){n.getWorldPosition(dp),n.visible=!1,q.objects||(q.objects=!0);let t=sr(6,dp);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function fp(n,e,t){if(_t.active)return;xi.set(n,e),xi.far=5.5;let i=xi.intersectObjects([..._i.targets,..._i.coconuts.filter(r=>r.visible)],!1);xi.far=1/0;let s=i[0];s&&(ir.visible=!0,ir.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Ay(s.object,e),fl()))}var Zx=new M,Ey=new Ke,Op=Iu(Rt),sp=new ns,rl=[],pp=new Map,Cy=D0(Rt,{impact(n,e,t){sp.set(n,e),sp.far=t;let i=sp.intersectObjects(rl,!1)[0];if(!i)return null;let s=pp.get(i.object);return s&&!s.owner&&!s.frozen&&s.velocity.addScaledVector(e,Math.min(4,2.6/s.mass)),i.distance}}),jx={position:new M,quaternion:new Ke,direction:new M,modelPosition:new M};function qT(n,e,t,i,s,r){let o=null,a=!1;if(q.blasterActive&&!i&&!Kt&&!q.mapEdit)if(t){let l=[...n.session.inputSources].find(u=>u.handedness==="right"),c=l&&n.getPose(l.targetRaySpace,e);if(c){let{position:u,orientation:d}=c.transform;o=jx,o.position.set(u.x,u.y-oi,u.z).applyAxisAngle(Ct,ht).add(ut.position),o.modelPosition.copy(Xt[1].valid?Xt[1].mesh.position:o.position),o.quaternion.set(d.x,d.y,d.z,d.w).premultiply(li.setFromAxisAngle(Ct,ht)),o.direction.set(0,0,-1).applyQuaternion(o.quaternion),a=!!l.gamepad?.buttons[0]?.pressed}}else o=jx,Wt.getWorldPosition(o.position),Wt.getWorldQuaternion(o.quaternion),o.direction.set(0,0,-1).applyQuaternion(o.quaternion),o.modelPosition.set(.16,-.17,-.43).applyQuaternion(o.quaternion).add(o.position),a=Ao||pl||Jt.has("KeyJ");if(rl.length=0,pp.clear(),o||ol){for(let l of St.boxes)l.mesh?.isMesh&&l.mesh.visible&&rl.push(l.mesh);if(s)dt.forEachReplica(l=>rl.push(l));else for(let l of bt)l.mesh.visible&&l.collidable&&!l.owner&&(rl.push(l.mesh),pp.set(l.mesh,l))}Cy.update({dt:r,aim:o,firing:a}),a?ol=1.3:ol=Math.max(0,ol-r)}var ol=0,aR=Op.mesh,Ph=new M,Gi=new Ke,Vh=new M,vo={mode:0,position:Vh,quaternion:Gi,end:Ph},Jx=new M,YT=new M,Kx=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var kh=new M,ZT={position:Vh,quaternion:Gi,pressure:[.1,.66,.08]},rp=new M,Gh=new Ke;function zp(n){xs.held&&ai(xs,n)}function Vp(){dt.role==="player"||dt.role==="pc"?yi("Le joueur VR g\xE8re la remise \xE0 z\xE9ro."):Hh()}function Ry(n){if(q.objects=!0,dt.role==="pc"){yi("Commence par rejoindre le salon en joueur.");return}dt.role==="player"?dt.sendAction({type:"spawn",typeId:n})||yi("Attends la connexion au joueur VR."):sr(n)}function jT(n,e){if(!q.objects||!e)return;if(n.type==="spawn"){Tp.includes(n.typeId)&&sr(n.typeId,null,e);return}let t=bt.find(l=>l.netId===n.objectId);if(!t)return;let i=So.get(e.id);if(i||(i={held:null,controllerRotation:new Ke},So.set(e.id,i)),n.type==="release"){i.held===t&&ai(i,!0);return}let s=Math.hypot(t.mesh.position.x-e.x,t.mesh.position.y-e.y,t.mesh.position.z-e.z);if(s>10)return;let r=er.set(e.x,e.y,e.z);if(Ya(r,t.mesh.position,.01,nr,uy,hy))return;let o=n.type==="hold"?1:n.mode;if(o===1&&i.held)return;let a=e.avatar?.tool?.quaternion??e.avatar?.head;a&&i.controllerRotation.copy(a),kp(t,o,i,qe.clamp(s,1.1,5))}function JT(n){if(et.xr.isPresenting)for(let t of Xt)t.valid&&t.held&&op(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of So){let s=dt.getPeer?.(t);if(!s){ai(i,!1),So.delete(t);continue}let r=i.held;if(!r)continue;let o=s.avatar?.head??s.avatar?.tool?.quaternion;o&&i.controllerRotation.copy(o),er.set(s.x,s.y,s.z),Nh.set(0,0,-1).applyQuaternion(i.controllerRotation),op(r,er,Nh,i.controllerRotation,n)}let e=xs.held;e&&(Wt.getWorldPosition(kh),Wt.getWorldDirection(Zx),Wt.getWorldQuaternion(Gi),op(e,kh,Zx,Gi,n))}function op(n,e,t,i,s){n.toolHold?rp.copy(e).addScaledVector(t,n.toolDistance):rp.copy(n.offset).applyQuaternion(i).add(e),Gh.multiplyQuaternions(i,n.relativeRotation),ux(n,rp,Gh,nr,s)}function Py(n){return n.customMaterial||(n.mesh.material=ju(n.mesh.material),n.customMaterial=!0,ml(n.mesh.material)),n.mesh.material}function KT(n){let e=Py(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function Iy(n,e,t){xi.set(n,e),xi.far=9;let i=xi.intersectObjects(t,!1)[0];return xi.far=1/0,Ph.copy(n).addScaledVector(e,i?.distance??9),Ya(n,Ph,.006,nr,Jx,YT)?(Ph.copy(Jx),null):i}function kp(n,e,t,i){if(e===1){if(t?.held){t===xs?zp(!0):ai(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??Gi;n.relativeRotation.multiplyQuaternions(Ey.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)Rt.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),bt.splice(bt.indexOf(n),1);else if(e===4&&!n.protected){kh.copy(n.mesh.position).addScaledVector(Ct,n.radius*2+.08);let s=sr(n.netType,kh);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=ju(n.mesh.material),s.customMaterial=!0,ml(s.mesh.material)),Za(s,St.boxes))}else if(e===5){let s=Py(n);s.color.set(Kx[n.paint++%Kx.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,KT(n));yn=!0}}var ms=[];function Ly(n,e,t,i){if(!q.objects)return;let s=dt.role==="player";if(ms.length=0,s)dt.forEachReplica(a=>ms.push(a));else for(let a of bt)!a.owner&&a.mesh.visible&&ms.push(a.mesh);let r=Iy(n,e,ms);if(vo.mode=q.toolMode,i?(Vh.copy(i.mesh.position),Gi.copy(i.controllerRotation)):(Wt.getWorldQuaternion(Gi),Vh.set(.16,-.17,-.43).applyQuaternion(Gi).add(n)),Op.update(vo),!t)return;if(s){if(q.toolMode===1&&ki)dt.sendAction({type:"release",objectId:ki}),ki=0;else if(r){let a=r.object.userData.netId;dt.sendAction({type:"tool",mode:q.toolMode,objectId:a})&&q.toolMode===1&&(ki=a)}return}let o=r&&bt.find(a=>a.mesh===r.object);kp(o,q.toolMode,i??xs,r?qe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function $T(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;zn.set(o.x,o.y-oi,o.z).applyAxisAngle(Ct,ht).add(ut.position),li.set(a.x,a.y,a.z,a.w),In.set(0,0,-1).applyQuaternion(li).applyAxisAngle(Ct,ht),Ly(zn,In,s,i)}function QT(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-oi,r.z).applyAxisAngle(Ct,ht).add(ut.position),li.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(li).applyAxisAngle(Ct,ht),fp(zn,In,i)}var ir=xT(Rt,new mt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);ir.visible=!1;var mp=[],tr=null;function $x(){let n=xn.ctx;mp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(Qs+" FPS   \xB7   Q "+$t+"/10   \xB7   "+(q.auto?"AUTO":"MANUEL"),390,40);function e(i,s,r,o,a,l,c="#344b59"){n.fillStyle=c,n.fillRect(i,s,r,o),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(a,i+r/2,s+o/2+7),n.textAlign="left",mp.push({x:i,y:s,w:r,h:o,action:l,label:a})}To.forEach(([i],s)=>e(25+s*119,61,114,44,i,()=>py(s),Ut===s?"#586d53":"#334b58"));let t=Ut>=2;t&&hp().forEach(([i],s)=>{let r=vy()===s,o=Math.min(144,Math.floor(586/hp().length)-4);e(25+s*(o+4),114,o,38,i,()=>My(s),r?"#546947":"#263d49")}),Rp().forEach(([i,s],r)=>{let o=(t?166:113)+r*40;r%2===0&&(n.fillStyle="#20323e",n.fillRect(25,o,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(i,37,o+26),typeof s=="function"?e(406,o,206,36,by(s),s):typeof q[s]=="boolean"?e(406,o,206,36,_y(s),()=>gn(s,1),q[s]?"#415c4c":"#344b59"):(e(359,o,44,36,"\u2212",()=>gn(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Fp(s)),508,o+25,156),n.textAlign="left",e(568,o,44,36,"+",()=>gn(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",yy),e(325,579,287,44,"Fermer",()=>Kt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Gp||(Ut===4&&_t.status?_t.status.slice(0,64):Bh?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),xn.texture.needsUpdate=!0}function eA(n){Kt=!Kt,Kt&&(ny=n,zx.set(0,0,-1).applyAxisAngle(Ct,Vi),xn.mesh.position.copy(Et).addScaledVector(zx,1.25),xn.mesh.position.y+=.08,xn.mesh.lookAt(Et),xn.mesh.updateMatrixWorld(!0)),yn=!0}function tA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;zn.set(r.x,r.y-oi,r.z).applyAxisAngle(Ct,ht).add(ut.position),li.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(li).applyAxisAngle(Ct,ht),xi.set(zn,In);let a=xi.intersectObject(xn.mesh)[0];if(a&&(ir.visible=!0,ir.position.copy(a.point).addScaledVector(In,-.012),i)){let l=a.uv.x*xn.w,c=(1-a.uv.y)*xn.h;mp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),yn=!0}}var Jt=new Set,Ao=!1,pl=!1;et.domElement.addEventListener("pointerdown",n=>{n.pointerType!=="touch"&&n.button===0&&(Ao=!0)});et.domElement.addEventListener("lostpointercapture",()=>{Ao=!1});addEventListener("pointerup",()=>{Ao=!1});addEventListener("pointercancel",()=>{Ao=pl=!1});var cl=document.querySelector("#touch-fire");cl.onpointerdown=n=>{n.preventDefault(),pl=!0,cl.setPointerCapture(n.pointerId)};cl.onpointerup=cl.onpointercancel=cl.onlostpointercapture=()=>{pl=!1};var Qx=document.querySelector("#game-settings"),Dy=document.querySelector("#open-settings"),gp=document.querySelector("#game-hint"),Ih=0;function yi(n){gp.textContent=n,gp.hidden=!1,Ih=performance.now()+2400,Gp=n,yn=!0}var Gp="";function Xh(n){let e=n??!Qx.hidden;Qx.hidden=e,Dy.hidden=!e,e&&et.domElement.focus()}Dy.onclick=()=>Xh(!1);document.querySelector("#close-settings").onclick=()=>Xh(!0);var ul=R0({canvas:et.domElement,enabled:()=>!et.xr.isPresenting,onLook:(n,e,t)=>{ht-=n*t,fs=qe.clamp(fs-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Jt.add(e)},onMenu:()=>Xh()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!et.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Xh();return}n.code==="Space"&&n.preventDefault(),!(n.repeat&&["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"].includes(n.code))&&(Jt.add(n.code),n.code==="KeyR"&&Wi())}});addEventListener("keyup",n=>Jt.delete(n.code));addEventListener("blur",()=>{Jt.clear(),ul.clear(),Ao=pl=!1});function nA(n,e){if(!q.objects)return!1;let t=dt.role==="player";if(t&&ki)return dt.sendAction({type:"release",objectId:ki}),ki=0,!0;if(xs.held)return zp(!0),!0;if(ms.length=0,t)dt.forEachReplica(s=>ms.push(s));else for(let s of bt)!s.owner&&s.mesh.visible&&ms.push(s.mesh);let i=Iy(n,e,ms);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;dt.sendAction({type:"hold",objectId:s})&&(ki=s)}else Wt.getWorldQuaternion(Gi),kp(bt.find(s=>s.mesh===i.object),1,xs,Math.max(.75,i.distance));return!0}var ap=[];function iA(){return ap.length=0,dt.forEachReplica(n=>{let e=n.userData.netType;if(!Vn[e]||Vn[e].properties?.collidable===!1||n.userData.held)return;let t=Vn[e],i=q.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=q.preciseHitboxes,ap.push(s)}),ap}function sA(){dt.role!=="vr"||!dt.remoteSpectator||bt.some(n=>n.netType===dl)||sr(dl,null,null,!0)}var hl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{hl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});hl.onclick=async()=>{let n;try{hl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),et.xr.setFramebufferScaleFactor(.45+q.resolution*.055),await et.xr.setSession(n),Hi(),il=n.frameRate||72,nl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=nl.includes(120)?120:nl.find(t=>t>=100)??nl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}il=n.frameRate||il,vp=Math.min(100,il),q.auto&&($t=Math.min($t,4),xo=yo=_o=0),Pp=[],Eh=0,cp=0,Dp=Up=yp=0,_p=null,Lp=!0,Ip=null,Mo=NaN,oi=0,Wi(),Hi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),hl.disabled=!1,document.querySelector("#status").textContent=e.message}};et.xr.addEventListener("sessionend",()=>{hl.disabled=!1,Kt=!1,xn.mesh.visible=!1,zi.mesh.visible=!1,document.body.classList.remove("immersive"),Wi(),Ap()});function Uy(n){if(!_t.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(_t.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function rA(n,e,t){let i=[...n.session.inputSources];for(let s of Xt){let r=i.find(x=>x.handedness===s.side&&x.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&q.hands&&!q.body,!o){s.valid=!1,s.surface=null,ai(s,!1);continue}let a=o.transform.position;ds.set(a.x,a.y-oi,a.z),s.target.copy(ds).applyAxisAngle(Ct,ht).add(ut.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(Ks.set(c.x,c.y,c.z,c.w).premultiply(li.setFromAxisAngle(Ct,ht)),s.controllerRotation.copy(Ks),s.mesh.quaternion.copy(Ks).multiply(hT.setFromAxisAngle(dT,s.side==="left"?Math.PI/2:-Math.PI/2)),_T(s,r.gamepad?.buttons??[],t),!Kt&&l&&!s.grip&&q.objects&&!s.held){let x=null,g=.15,m=_i.coconuts.find(S=>S.visible&&S.getWorldPosition(dp).distanceToSquared(s.target)<.26**2);m&&(x=Ay(m));for(let S of bt){if(S.owner||!S.grabbable||S.mesh.position.distanceToSquared(s.target)>(S.radius+.18)**2)continue;let w=lx(s.target,S);!m&&w<g&&(g=w,x=S)}x&&!s.held&&(s.held=x,x.owner=s,x.frozen=!1,ep.copy(Ks).invert(),x.offset.copy(x.mesh.position).sub(s.target).applyQuaternion(ep),x.relativeRotation.multiplyQuaternions(ep,x.mesh.quaternion),x.velocity.set(0,0,0),x.angular.set(0,0,0))}!l&&s.grip&&!s.held?.toolHold&&ai(s,!Kt),s.grip=l,s.hasSupport=!1;let u=s.held;if(u&&!u.toolHold&&u.collidable&&u.spec.supportAxis){Gh.multiplyQuaternions(Ks,u.relativeRotation),s.supportOffset.copy(u.spec.supportAxis).applyQuaternion(Gh),ds.copy(u.offset).applyQuaternion(Ks);let x=s.supportOffset.dot(ds);(Math.abs(x)>.008?x<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(ds),s.hasSupport=!0}if(s.held?.toolHold){let g=n.getPose(r.targetRaySpace,e)?.transform.orientation;g?s.aimDirection.set(0,0,-1).applyQuaternion(Ey.set(g.x,g.y,g.z,g.w)).applyAxisAngle(Ct,ht):s.aimDirection.set(0,0,-1).applyQuaternion(Ks)}let d=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");d&&!s.menu&&eA(s.side),s.menu=d;let f=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&f&&!s.toolButton&&!Kt&&gn("toolActive",1),s.toolButton=f;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&q.toolActive&&!Kt&&gn("toolMode",1),s.toolCycle=h;let p=!!r.gamepad?.buttons[0]?.pressed;if(Kt){let x=p&&!s.trigger;(x||!tr||!tr.click&&s.side!==ny)&&(tr={source:r,click:x})}else!Kt&&s.side==="right"&&q.mapEdit?Rh={source:r,click:p&&!s.trigger}:!Kt&&s.side==="right"&&q.toolActive?Ch={source:r,hand:s,click:p&&!s.trigger}:!Kt&&!q.blasterActive&&(s.side==="right"||p&&!s.trigger)&&(sl={source:r,click:p&&!s.trigger});s.trigger=p}}function oA(n,e,t,i){let s=!!t,r=.43+q.size*.088;if(s){let f=t.transform.position;Number.isFinite(Mo)||(Mo=f.y),oi=qe.clamp(Mo-r,-.65,1.7),Lh.position.y=-oi,Jn.set(f.x,f.y-oi,f.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(wh=!1),Math.abs(p)>.67&&!wh&&!Kt&&(wh=!0,jn.copy(Jn).applyAxisAngle(Ct,ht),ht-=Math.sign(p)*Math.PI/4,Lx.copy(Jn).applyAxisAngle(Ct,ht),ut.position.add(jn.sub(Lx)),Ah.reset(),Sh=!1)}else Lh.position.y=0,Jn.set(0,r,0),Wt.position.copy(Jn),Wt.rotation.set(fs,0,0,"YXZ");if(Et.copy(Jn).applyAxisAngle(Ct,ht).add(ut.position),s){let f=t.transform.orientation;Th.set(f.x,f.y,f.z,f.w),Js.set(0,0,-1).applyQuaternion(Th),Js.x**2+Js.z**2>.018&&(Vi=ht+Math.atan2(-Js.x,-Js.z))}else Vi=ht;let o=Uy(Et),a=9.81*(q.gravity/5)*(o?.gravity??1);if(Ux.copy(ut.position),s){rA(n,e,i),Xt.some(f=>f.valid)&&Up++,vh.length=0;for(let f of nr)vh.push(f);if(q.collisions&&q.objects)for(let f of bt)f.handCollider&&!f.owner&&vh.push(f.handCollider);Ah.move({head:Et,dt:i,gravity:a,settings:q,boxes:vh,velocity:Pn,movement:$a,reach:Uh()*2+.16});for(let f of Xt)P0(f,q.stepHaptics,i)}else{Pn.y-=a*i;let f=Number(Jt.has("KeyD"))-Number(Jt.has("KeyA")||Jt.has("KeyQ"))+ul.movement.x,h=Number(Jt.has("KeyS"))-Number(Jt.has("KeyW")||Jt.has("KeyZ"))+ul.movement.z,p=Jt.has("ShiftLeft")||Jt.has("ShiftRight");js.set(f,0,h).clampLength(0,1).applyAxisAngle(Ct,ht).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(o?.friction<.1?2:$s?13:4));Pn.x=qe.lerp(Pn.x,js.x,x),Pn.z=qe.lerp(Pn.z,js.z,x),(ul.consumeJump()||Jt.delete("Space"))&&$s&&(Pn.y=3.1+q.jump*.18),$a.copy(Pn).multiplyScalar(i)}if(q.collisions&&Sh&&(ds.copy(Et).add($a),Ya(Nx,ds,Fx,nr,jn,yh)&&js.subVectors(ds,jn).dot(yh)<0&&$a.copy(jn).sub(Et)),ut.position.add($a),Et.copy(Jn).applyAxisAngle(Ct,ht).add(ut.position),$s=!1,q.collisions){let f=dt.role==="player"?iA():bt;Bx.set(0,0,1).applyAxisAngle(Ct,Vi);let h=s?-Js.y:Math.max(0,-Math.sin(fs)),p=s?.17+qe.smoothstep(h,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,Jn.y*.57):Jn.y,m=x===2?Fx:x===0?.18:.17;if(jn.set(Et.x,ut.position.y+g,Et.z),x<2&&jn.addScaledVector(Bx,p),Dx.copy(jn),$s=qf(jn,m,St.boxes,Pn,0,3+q.grip,i)||$s,q.objects)for(let S of f)S.blocksPlayer&&!S.owner&&yx(jn,m,S,Pn,yh)&&yh.y>.6&&($s=!0);qf(jn,m,St.boxes,Pn,0,3+q.grip,i),js.subVectors(jn,Dx),ut.position.add(js),Et.add(js)}}if(Jf.subVectors(ut.position,Ux),s){let f=Ah.finish(Jf,Pn);f.contacts&&Dp++,f.launched&&(yp++,_p={handSpeed:f.launchSpeed,velocity:Pn.toArray(),t:performance.now()})}(_t.active?ut.position.y<-24||Math.abs(ut.position.x)>155||Math.abs(ut.position.z)>155:ut.position.y<-9||Math.abs(ut.position.x)>33||ut.position.z<-57||ut.position.z>13)&&(Wi(),Et.copy(Jn).applyAxisAngle(Ct,ht).add(ut.position)),Nx.copy(Et),Sh=!0,ut.rotation.y=ht,s&&Wt.position.set(0,0,0);for(let f of Xt)s&&f.valid&&f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Jf,f.surface?0:1),s||(f.mesh.visible=!1);let l=Math.min(.3,Math.max(.21,Jn.y*.31)),c=.72+q.size*.05,u=Uh()*2*(2/3)/.82;ps.visible=q.body,ps.position.set(Et.x,Et.y-l-.24*u-.05*Qa,Et.z);let d=s?-Js.y:Math.max(0,-Math.sin(fs));Qa=qe.lerp(Qa,qe.smoothstep(d,.24,.92),1-Math.exp(-i*14)),Vx.set(0,0,1).applyAxisAngle(Ct,Vi),ps.position.addScaledVector(Vx,.32*Qa),kx.set(-.48*Qa,Vi,0,"YXZ"),ps.quaternion.setFromEuler(kx),gs.position.copy(Et),s?gs.quaternion.copy(Th).premultiply(li.setFromAxisAngle(Ct,ht)):gs.quaternion.setFromEuler(new ln(fs,ht,0,"YXZ")),vT(c,u),ut.updateMatrixWorld(!0),Wt.updateWorldMatrix(!0,!1)}function aA(n,e){if(_h+=n,$f++,xo+=n,_h<1||(Qs=Math.round($f/_h),$f=0,_h=0,yn=!0,FT.textContent=Qs+" FPS \xB7 qualit\xE9 "+$t+"/10 \xB7 "+(q.auto?"auto":"manuel"),!q.auto||xo<5))return;xo=0;let t=e?Math.min(100,et.xr.getSession()?.frameRate||il):60;e&&(vp=t),yo=Qs<t-4?yo+1:0,_o=Qs>=t-1?_o+1:0;let i=qe.clamp($t+(yo>=1?-1:_o>=2?1:0),1,10);i!==$t&&($t=i,xo=yo=_o=0,Hi())}St.bakeLightmap();var Ny={value:1},Fy={value:1},By={value:0},Hp={value:0},ey=new WeakSet;function ml(n){if(!n||ey.has(n))return;ey.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:Ny,uPhotoSaturation:Fy,uPhotoWarmth:By,uLabShader:Hp}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)ml(n);Rt.traverse(n=>{n.isMesh&&![xn.mesh,zi.mesh,ir].includes(n)&&ml(n.material)});Hi();var ty=new URLSearchParams(location.search);if(ty.has("map"))_t.loadURL(ty.get("map"));else try{let n=localStorage.getItem(Ja);n&&_t.load(n)}catch(n){_t.inform(n.message)}et.setAnimationLoop((n,e)=>{let t=Kf?Math.max(0,(n-Kf)/1e3):.014;Kf=n;let i=Math.min(.035,t),s=et.xr.isPresenting,r=et.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if(wT(n*.001),Ih&&n>Ih&&(gp.hidden=!0,Ih=0,Gp=""),ir.visible=!1,Op.hide(),vo.mode=0,nr=q.collisions?St.boxes:fT,tr=null,sl=null,Ch=null,Rh=null,_t.clearGhost(),xn.mesh.visible=!1,!s&&dt.role==="pc"){ps.visible=!1;for(let h of Xt)h.mesh.visible=!1}else oA(e,r,o,i);let a=!s&&dt.role==="pc",l=a||dt.role==="player";dt.role!=="player"&&(ki=0),l||(JT(i),sA());for(let h of bt){h.mesh.visible=q.objects&&!l;let{x:p,y:x,z:g}=h.mesh.position;if((_t.active?x<-24||Math.abs(p)>155||Math.abs(g)>155:x<-8||Math.abs(p)>28||g<-57||g>13)&&(h.owner||(h.mesh.position.copy(h.start),h.velocity.set(0,0,0),h.angular.set(0,0,0))),h.shadow.visible=!l&&q.shadows&&Fh()<3&&q.objects&&h.mesh.position.y<2,h.shadow.visible){let{x:S,z:w}=h.mesh.position,v=St.boxes.find(P=>P.heightfield&&S>=P.xMin&&S<=P.xMax&&w>=P.zMin&&w<=P.zMax),E=v?v.height(S,w):0;h.shadow.position.set(S,E+.006,w)}}for(let h of bt)h.beforePhysics.copy(h.mesh.position);if(l||gx(bt,St.boxes,i,9.81*q.gravity/5,.12+q.bounce*.064,Uy),!_t.active&&!l&&_i.updateTarget(bt),s&&!Kt)for(let h of Xt)XT(h);if(St.probe.rotation.y+=i*.29,aA(Math.min(.3,t),s),xn.mesh.visible=s&&Kt,xn.mesh.visible&&yn&&$x(),xn.mesh.visible&&tr)tA(e,r,tr.source,tr.click);else if(s&&Rh)WT(e,r,Rh);else if(s&&Ch)$T(e,r,Ch);else if(s&&sl)QT(e,r,sl.source,sl.click);else if(!s&&!a){Wt.getWorldPosition(zn),Wt.getWorldDirection(In),Jt.delete("KeyX")&&gn("blasterActive",1),Jt.delete("KeyG")&&(gn("toolActive",1),q.toolActive&&yi("Outil \xB7 "+bo[q.toolMode-1])),Jt.delete("KeyT")&&gn("toolMode",1);let h=Jt.delete("KeyE");q.toolActive?Ly(zn,In,h,null):h&&!nA(zn,In)?fp(zn,In,!0):!h&&!l&&fp(zn,In,!1),Jt.delete("KeyF")&&(q.objects=!0,Ry(Tp[0]))}if(zi.mesh.visible=s&&!Kt&&Xt[0].valid,zi.mesh.visible&&(zi.mesh.position.copy(Xt[0].mesh.position).y+=.12,zi.mesh.lookAt(Et)),yn||n-Ox>1100){yn=!1,Ox=n,Kt&&$x();let h=zi.ctx;h.clearRect(0,0,416,84),h.fillStyle="#182632",h.fillRect(0,0,416,84),h.fillStyle="#fff0cf",h.font="bold 25px system-ui",h.fillText(Qs+" FPS     Q "+$t+"/10",17,32),h.font="20px system-ui",h.fillText(q.mapEdit?"\xC9dition : "+Ty[q.mapMode-1]:q.blasterActive?"Pistolet : maintenir la g\xE2chette":q.toolActive?"Tool Gun : "+bo[q.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),zi.texture.needsUpdate=!0}let c=!a&&(dt.role==="player"||s&&dt.role==="vr")?{head:gs.quaternion,hands:s?Xt.map(h=>h.valid?{position:h.mesh.position,quaternion:h.mesh.quaternion,pressure:h.pressure}:null):[null,vo.mode?ZT:null],height:Jn.y,armSpan:Uh()*2,light:q.timeOfDay-1,color:iy,coconuts:_i.coconuts.reduce((h,p,x)=>h|Number(p.visible)<<x,0),tool:vo.mode?vo:null}:null;dt.update({inVR:s,time:n,dt:i,position:Et,yaw:a?ht:Vi,pitch:fs,camera:Wt,rig:ut,keys:Jt,flat:ul,avatar:c,bodies:q.objects?bt:CT}),qT(e,r,s,a,l,i),LT(l),St.centerShadows(zh);let u=25+(10-Fh())*(s?7:4);et.shadowMap.enabled&&n-Ix>=u&&(et.shadowMap.needsUpdate=!0,Ix=n),zT(n,o);let d=s&&q.post,f=s&&q.rayTrace;if(cT(f,bt),(!d||!lT.render(Rt,Wt,{bloom:q.bloom}))&&et.render(Rt,Wt),(s||!Lp)&&(Pp[Eh]=t*1e3,Eh=(Eh+1)%720,n-cp>350)){cp=n;let{calls:h,triangles:p,lines:x,points:g}=et.info.render;my={calls:h,triangles:p,lines:x,points:g,textures:et.info.memory.textures},s&&(Ip={refreshHz:et.xr.getSession()?.frameRate??null,targetFps:vp,supportedHz:nl.slice(),foveation:et.xr.getFoveation()??null,visualEffects:{post:d,bloom:d&&q.bloom,rayTrace:f},eyeViewports:et.xr.getCamera().cameras.map(m=>({width:m.viewport?.z??null,height:m.viewport?.w??null}))})}});})();
