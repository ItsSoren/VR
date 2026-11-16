(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var zm=0,Gd=1,Vm=2;var Fa=1,km=2,pi=3,si=0,un=1,Wt=2,Ui=0,Rs=1,Yn=2,Hd=3,Wd=4,Gm=5,es=100,Hm=101,Wm=102,qm=103,Xm=104,Ym=200,Zm=201,jm=202,Jm=203,ec=204,tc=205,Km=206,$m=207,Qm=208,eg=209,tg=210,ng=211,ig=212,sg=213,rg=214,Ic=0,Lc=1,Dc=2,Ps=3,Uc=4,Fc=5,Nc=6,Bc=7,Oc=0,og=1,ag=2,Fi=0,lg=1,cg=2,ug=3,zc=4,hg=5,dg=6,fg=7;var qd=300,zs=301,Vs=302,jr=303,Vc=304,Na=306,di=1e3,Qi=1001,nc=1002,on=1003,pg=1004;var Ba=1005;var an=1006,kc=1007;var An=1008;var zn=1009,Xd=1010,Yd=1011,Jr=1012,Gc=1013,ss=1014,ri=1015,mi=1016,Hc=1017,Wc=1018,Kr=1020,Zd=35902,jd=35899,Jd=1021,Kd=1022,En=1023,Ir=1026,$r=1027,qc=1028,Xc=1029,$d=1030,Yc=1031;var Zc=1033,Oa=33776,za=33777,Va=33778,ka=33779,jc=35840,Jc=35841,Kc=35842,$c=35843,Qc=36196,eu=37492,tu=37496,nu=37808,iu=37809,su=37810,ru=37811,ou=37812,au=37813,lu=37814,cu=37815,uu=37816,hu=37817,du=37818,fu=37819,pu=37820,mu=37821,gu=36492,xu=36494,yu=36495,vu=36283,_u=36284,Mu=36285,bu=36286;var $o=2300,ic=2301,$l=2302,Rd=2400,Pd=2401,Id=2402;var mg=3200,gg=3201;var Su=0,xg=1,Ni="",yt="srgb",Is="srgb-linear",Qo="linear",vt="srgb";var Cs=7680;var Ld=519,yg=512,vg=513,_g=514,Qd=515,Mg=516,bg=517,Sg=518,wg=519,sc=35044,Zn=35048;var ef="300 es",ii=2e3,ea=2001;var Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tm=1234567,Zo=Math.PI/180,Lr=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function iv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sv(n,e,t){return n!==e?(t-n)/(e-n):0}function jo(n,e,t){return(1-t)*n+t*e}function rv(n,e,t,i){return jo(n,e,1-Math.exp(-t*i))}function ov(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function av(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uv(n,e){return n+Math.random()*(e-n)}function hv(n){return n*(.5-Math.random())}function dv(n){n!==void 0&&(tm=n);let e=tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(n){return n*Zo}function pv(n){return n*Lr}function mv(n){return(n&n-1)===0&&n!==0}function gv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:Zo,RAD2DEG:Lr,generateUUID:hi,clamp:$e,euclideanModulo:tf,mapLinear:iv,inverseLerp:sv,lerp:jo,damp:rv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:uv,randFloatSpread:hv,seededRandom:dv,degToRad:fv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:xv,setQuaternionFromProperEuler:yv,normalize:xt,denormalize:ni},Ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let T=Math.sqrt(w),C=Math.atan2(T,m*b);g=Math.sin(g*C)/T,a=Math.sin(a*C)/T}let v=a*b;if(l=l*g+f*v,c=c*g+h*v,u=u*g+p*v,d=d*g+x*v,g===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ed=new M,nm=new Ze,nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=s[0],g=s[3],m=s[6],b=s[1],w=s[4],v=s[7],T=s[2],C=s[5],D=s[8];return r[0]=o*x+a*b+l*T,r[3]=o*g+a*w+l*C,r[6]=o*m+a*v+l*D,r[1]=c*x+u*b+d*T,r[4]=c*g+u*w+d*C,r[7]=c*m+u*v+d*D,r[2]=f*x+h*b+p*T,r[5]=f*g+h*w+p*C,r[8]=f*m+h*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(td.makeScale(e,t)),this}rotate(e){return this.premultiply(td.makeRotation(-e)),this}translate(e,t){return this.premultiply(td.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},td=new nt;function nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tg(){let n=Dr("canvas");return n.style.display="block",n}var im={};function Ur(n){n in im||(im[n]=!0,console.warn(n))}function Ag(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var sm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vv(){let n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Is]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var ct=vv();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ur,rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Dr("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_v=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nd(s[o].image)):r.push(nd(s[o]))}else r=nd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mv=0,id=new M,fn=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=an,o=An,a=En,l=zn,c=n.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=hi(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=qd;fn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,T=(m+1)/2,C=(u+f)/4,D=(d+x)/4,U=(p+g)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=C/i,r=D/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=U/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=D/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ta=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Sl.subVectors(this.max,No),hr.subVectors(e.a,No),dr.subVectors(e.b,No),fr.subVectors(e.c,No),Yi.subVectors(dr,hr),Zi.subVectors(fr,dr),ws.subVectors(hr,fr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ws.z,ws.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ws.z,0,-ws.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ws.y,ws.x,0];return!sd(t,hr,dr,fr,Sl)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,hr,dr,fr,Sl))?!1:(wl.crossVectors(Yi,Zi),t=[wl.x,wl.y,wl.z],sd(t,hr,dr,fr,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new M,new M,new M,new M,new M,new M,new M,new M],Qn=new M,bl=new rn,hr=new M,dr=new M,fr=new M,Yi=new M,Zi=new M,ws=new M,No=new M,Sl=new M,wl=new M,Ts=new M;function sd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var bv=new rn,Bo=new M,rd=new M,Wn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let t=Bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Bo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(rd)),this.expandByPoint(Bo.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wi=new M,od=new M,Tl=new M,ji=new M,ad=new M,Al=new M,ld=new M,Ls=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){od.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(od);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Tl),a=ji.dot(this.direction),l=-ji.dot(Tl),c=ji.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(od).addScaledVector(Tl,f),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){ad.subVectors(t,e),Al.subVectors(i,e),ld.crossVectors(ad,Al);let o=this.direction.dot(ld),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let l=a*this.direction.dot(Al.crossVectors(ji,Al));if(l<0)return null;let c=a*this.direction.dot(ad.cross(ji));if(c<0||l+c>o)return null;let u=-a*ji.dot(ld);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sv,e,wv)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ji.crossVectors(i,Fn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ji.crossVectors(i,Fn)),Ji.normalize(),El.crossVectors(Fn,Ji),s[0]=Ji.x,s[4]=El.x,s[8]=Fn.x,s[1]=Ji.y,s[5]=El.y,s[9]=Fn.y,s[2]=Ji.z,s[6]=El.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],b=i[3],w=i[7],v=i[11],T=i[15],C=s[0],D=s[4],U=s[8],S=s[12],_=s[1],A=s[5],B=s[9],F=s[13],H=s[2],W=s[6],V=s[10],te=s[14],N=s[3],ce=s[7],he=s[11],Z=s[15];return r[0]=o*C+a*_+l*H+c*N,r[4]=o*D+a*A+l*W+c*ce,r[8]=o*U+a*B+l*V+c*he,r[12]=o*S+a*F+l*te+c*Z,r[1]=u*C+d*_+f*H+h*N,r[5]=u*D+d*A+f*W+h*ce,r[9]=u*U+d*B+f*V+h*he,r[13]=u*S+d*F+f*te+h*Z,r[2]=p*C+x*_+g*H+m*N,r[6]=p*D+x*A+g*W+m*ce,r[10]=p*U+x*B+g*V+m*he,r[14]=p*S+x*F+g*te+m*Z,r[3]=b*C+w*_+v*H+T*N,r[7]=b*D+w*A+v*W+T*ce,r[11]=b*U+w*B+v*V+T*he,r[15]=b*S+w*F+v*te+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+g*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,w=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,v=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,T=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,C=t*b+i*w+s*v+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=b*D,e[1]=(x*f*r-d*g*r-x*s*h+i*g*h+d*s*m-i*f*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=w*D,e[5]=(u*g*r-p*f*r+p*s*h-t*g*h-u*s*m+t*f*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*D,e[8]=v*D,e[9]=(p*d*r-u*x*r-p*i*h+t*x*h+u*i*m-t*d*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*D,e[12]=T*D,e[13]=(u*x*s-p*d*s+p*i*f-t*x*f-u*i*g+t*d*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,x=o*u,g=o*d,m=a*d,b=l*c,w=l*u,v=l*d,T=i.x,C=i.y,D=i.z;return s[0]=(1-(x+m))*T,s[1]=(h+v)*T,s[2]=(p-w)*T,s[3]=0,s[4]=(h-v)*C,s[5]=(1-(f+m))*C,s[6]=(g+b)*C,s[7]=0,s[8]=(p+w)*D,s[9]=(g-b)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),a=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,u=1/o,d=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ea)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ii)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ea)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pr=new M,ei=new at,Sv=new M(0,0,0),wv=new M(1,1,1),Ji=new M,El=new M,Fn=new M,om=new at,am=new Ze,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tv=0,lm=new M,mr=new Ze,Ti=new at,Cl=new M,Oo=new M,Av=new M,Ev=new Ze,cm=new M(1,0,0),um=new M(0,1,0),hm=new M(0,0,1),dm={type:"added"},Cv={type:"removed"},gr={type:"childadded",child:null},cd={type:"childremoved",child:null},It=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new ln,i=new Ze,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cl.copy(e):Cl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Oo,Cl,this.up):Ti.lookAt(Cl,Oo,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ti),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cv),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new M(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new M,Ai=new M,ud=new M,Ei=new M,xr=new M,yr=new M,fm=new M,hd=new M,dd=new M,fd=new M,pd=new lt,md=new lt,gd=new lt,wn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ai.subVectors(i,t),ud.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ai),l=ti.dot(ud),c=Ai.dot(Ai),u=Ai.dot(ud),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pd,r.x),o.addScaledVector(md,r.y),o.addScaledVector(gd,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ai.subVectors(e,t),ti.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xr.subVectors(s,i),yr.subVectors(r,i),hd.subVectors(e,i);let l=xr.dot(hd),c=yr.dot(hd);if(l<=0&&c<=0)return t.copy(i);dd.subVectors(e,s);let u=xr.dot(dd),d=yr.dot(dd);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xr,o);fd.subVectors(e,r);let h=xr.dot(fd),p=yr.dot(fd);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(yr,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return fm.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(fm,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=tf(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xd(o,r,e+1/3),this.g=xd(o,r,e),this.b=xd(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ct.workingToColorSpace(dn.copy(this),e),Math.round($e(dn.r*255,0,255))*65536+Math.round($e(dn.g*255,0,255))*256+Math.round($e(dn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=yt){ct.workingToColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Rl);let i=jo(Ki.h,Rl.h,t),s=jo(Ki.s,Rl.s,t),r=jo(Ki.l,Rl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Be;Be.NAMES=Eg;var Rv=0,qn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Rs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ld&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var jt=new M,Pl=new Ae,Pv=0,Mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}};var Ds=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var na=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Iv=0,Hn=new at,yd=new It,vr=new M,Nn=new rn,zo=new rn,sn=new M,tt=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?na:Ds)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Nn.min,zo.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,zo.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(zo.min),Nn.expandByPoint(zo.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),sn.add(vr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new M,l[U]=new M;let c=new M,u=new M,d=new M,f=new Ae,h=new Ae,p=new Ae,x=new M,g=new M;function m(U,S,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,U),h.fromBufferAttribute(r,S),p.fromBufferAttribute(r,_),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let A=1/(h.x*p.y-p.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(A),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(A),a[U].add(x),a[S].add(x),a[_].add(x),l[U].add(g),l[S].add(g),l[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){let _=b[U],A=_.start,B=_.count;for(let F=A,H=A+B;F<H;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new M,v=new M,T=new M,C=new M;function D(U){T.fromBufferAttribute(s,U),C.copy(T);let S=a[U];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(C,S);let A=v.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,A)}for(let U=0,S=b.length;U<S;++U){let _=b[U],A=_.start,B=_.count;for(let F=A,H=A+B;F<H;F+=3)D(e.getX(F+0)),D(e.getX(F+1)),D(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new Mt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pm=new at,As=new Ls,Il=new Wn,mm=new M,Ll=new M,Dl=new M,Ul=new M,vd=new M,Fl=new M,gm=new M,Nl=new M,Ne=class extends It{constructor(e=new tt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(vd.fromBufferAttribute(d,e),o?Fl.addScaledVector(vd,u):Fl.addScaledVector(vd.sub(t),u))}t.add(Fl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Il.containsPoint(As.origin)===!1&&(As.intersectSphere(Il,mm)===null||As.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(r).invert(),As.copy(e.ray).applyMatrix4(pm),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,T=w;v<T;v+=3){let C=a.getX(v),D=a.getX(v+1),U=a.getX(v+2);s=Bl(this,m,e,i,c,u,d,C,D,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=Bl(this,o,e,i,c,u,d,b,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,T=w;v<T;v+=3){let C=v,D=v+1,U=v+2;s=Bl(this,m,e,i,c,u,d,C,D,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=g,w=g+1,v=g+2;s=Bl(this,o,e,i,c,u,d,b,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Lv(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;Nl.copy(a),Nl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nl);return c<t.near||c>t.far?null:{distance:c,point:Nl.clone(),object:n}}function Bl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ll),n.getVertexPosition(l,Dl),n.getVertexPosition(c,Ul);let u=Lv(n,e,t,i,Ll,Dl,Ul,gm);if(u){let d=new M;wn.getBarycoord(gm,Ll,Dl,Ul,d),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,d,new Ae)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,d,new Ae)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};wn.getNormal(Ll,Dl,Ul,f.normal),u.face=f,u.barycoord=d}return u}var Je=class n extends tt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function p(x,g,m,b,w,v,T,C,D,U,S){let _=v/D,A=T/U,B=v/2,F=T/2,H=C/2,W=D+1,V=U+1,te=0,N=0,ce=new M;for(let he=0;he<V;he++){let Z=he*A-F;for(let me=0;me<W;me++){let ve=me*_-B;ce[x]=ve*b,ce[g]=Z*w,ce[m]=H,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[m]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(me/D),d.push(1-he/U),te+=1}}for(let he=0;he<U;he++)for(let Z=0;Z<D;Z++){let me=f+Z+W*he,ve=f+Z+W*(he+1),Ee=f+(Z+1)+W*(he+1),_e=f+(Z+1)+W*he;l.push(me,ve,_e),l.push(ve,Ee,_e),N+=6}a.addGroup(h,N,S),h+=N,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=ks(n[t]);for(let s in i)e[s]=i[s]}return e}function Dv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var wu={clone:ks,merge:pn},Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ia=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new M,xm=new Ae,ym=new Ae,Gt=class extends ia{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,xm,ym),t.subVectors(ym,xm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_r=-90,Mr=1,lc=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(_r,Mr,e,t);s.layers=this.layers,this.add(s);let r=new Gt(_r,Mr,e,t);r.layers=this.layers,this.add(r);let o=new Gt(_r,Mr,e,t);o.layers=this.layers,this.add(o);let a=new Gt(_r,Mr,e,t);a.layers=this.layers,this.add(a);let l=new Gt(_r,Mr,e,t);l.layers=this.layers,this.add(l);let c=new Gt(_r,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},sa=class extends fn{constructor(e=[],t=zs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cc=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ui});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=an),new lc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ra=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new M,Or=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zr=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,Vo=new M,Sr=new M,wr=new M,Tr=new Ae,ko=new Ae,Cg=new at,Ol=new M,Go=new M,zl=new M,vm=new Ae,_d=new Ae,_m=new Ae,aa=class extends It{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oa(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Or(i,3,0,!1)),br.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Vl(Ol.set(-.5,-.5,0),wr,o,Sr,s,r),Vl(Go.set(.5,-.5,0),wr,o,Sr,s,r),Vl(zl.set(.5,.5,0),wr,o,Sr,s,r),vm.set(0,0),_d.set(1,0),_m.set(1,1);let a=e.ray.intersectTriangle(Ol,Go,zl,!1,Vo);if(a===null&&(Vl(Go.set(-.5,.5,0),wr,o,Sr,s,r),_d.set(0,1),a=e.ray.intersectTriangle(Ol,zl,Go,!1,Vo),a===null))return;let l=e.ray.origin.distanceTo(Vo);l<e.near||l>e.far||t.push({distance:l,point:Vo.clone(),uv:wn.getInterpolation(Vo,Ol,Go,zl,vm,_d,_m,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vl(n,e,t,i,s,r){Tr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ko.x=r*Tr.x-s*Tr.y,ko.y=s*Tr.x+r*Tr.y):ko.copy(Tr),n.copy(e),n.x+=ko.x,n.y+=ko.y,n.applyMatrix4(Cg)}var fi=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,u=on,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new at,Mm=new at,kl=[],bm=new rn,Bv=new at,Ho=new Ne,Wo=new Wn,la=class extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),bm.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(bm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Wo.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Mm.multiplyMatrices(i,Ar),Ho.matrixWorld=Mm,Ho.raycast(e,kl);for(let o=0,a=kl.length;o<a;o++){let l=kl[o];l.instanceId=r,l.object=this,t.push(l)}kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,qc,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Md=new M,Ov=new M,zv=new nt,Sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Md.subVectors(i,t).cross(Ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Md),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zv.getNormalMatrix(e),s=this.coplanarPoint(Md).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Wn,Vv=new Ae(.5,.5),Gl=new M,kr=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,h-u,m-p,T-b).normalize(),s[1].setComponents(c+o,h+u,m+p,T+b).normalize(),s[2].setComponents(c+a,h+d,m+x,T+w).normalize(),s[3].setComponents(c-a,h-d,m-x,T-w).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,h-f,m-g,T-v).normalize();else if(s[4].setComponents(c-l,h-f,m-g,T-v).normalize(),t===ii)s[5].setComponents(c+l,h+f,m+g,T+v).normalize();else if(t===ea)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=Vv.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Gl.x=s.normal.x>0?e.max.x:e.min.x,Gl.y=s.normal.y>0?e.max.y:e.min.y,Gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uc=new M,hc=new M,Sm=new at,qo=new Ls,Hl=new Wn,bd=new M,wm=new M,ca=class extends It{constructor(e=new tt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)uc.fromBufferAttribute(t,s-1),hc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=uc.distanceTo(hc);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),Hl.radius+=r,e.ray.intersectsSphere(Hl)===!1)return;Sm.copy(s).invert(),qo.copy(e.ray).applyMatrix4(Sm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),b=u.getX(x+1),w=Wl(this,e,qo,l,m,b,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Wl(this,e,qo,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Wl(this,e,qo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Wl(this,e,qo,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(uc.fromBufferAttribute(a,s),hc.fromBufferAttribute(a,r),t.distanceSqToSegment(uc,hc,bd,wm)>i)return;bd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bd);if(!(c<e.near||c>e.far))return{distance:c,point:wm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Tm=new M,Am=new M,ua=class extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Tm.fromBufferAttribute(t,s),Am.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tm.distanceTo(Am);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ha=class extends ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gr=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Em=new at,Dd=new Ls,ql=new Wn,Xl=new M,da=class extends It{constructor(e=new tt,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;Em.copy(s).invert(),Dd.copy(e.ray).applyMatrix4(Em);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Xl.fromBufferAttribute(d,g),Cm(Xl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Xl.fromBufferAttribute(d,p),Cm(Xl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cm(n,e,t,i,s,r,o){let a=Dd.distanceSqToPoint(n);if(a<t){let l=new M;Dd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xn=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fa=class extends fn{constructor(e,t,i=ss,s,r,o,a=on,l=on,c,u=Ir,d=1){if(u!==Ir&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pa=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ma=class n extends tt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+r,x=s+1,g=new M,m=new M;for(let b=0;b<=p;b++){let w=0,v=0,T=0,C=0;if(b<=i){let S=b/i,_=S*Math.PI/2;v=-u-e*Math.cos(_),T=e*Math.sin(_),C=-e*Math.cos(_),w=S*d}else if(b<=i+r){let S=(b-i)/r;v=-u+S*t,T=e,C=0,w=d+S*f}else{let S=(b-i-r)/i,_=S*Math.PI/2;v=u+e*Math.sin(_),T=e*Math.cos(_),C=e*Math.sin(_),w=d+f+S*d}let D=Math.max(0,Math.min(1,w/h)),U=0;b===0?U=.5/s:b===p&&(U=-.5/s);for(let S=0;S<=s;S++){let _=S/s,A=_*Math.PI*2,B=Math.sin(A),F=Math.cos(A);m.x=-T*F,m.y=v,m.z=T*B,a.push(m.x,m.y,m.z),g.set(-T*F,C,T*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(_+U,D)}if(b>0){let S=(b-1)*x;for(let _=0;_<s;_++){let A=S+_,B=S+_+1,F=b*x+_,H=b*x+_+1;o.push(A,B,F),o.push(B,H,F)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Jt=class n extends tt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ht=class n extends tt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(h,2));function b(){let v=new M,T=new M,C=0,D=(t-e)/i;for(let U=0;U<=r;U++){let S=[],_=U/r,A=_*(t-e)+e;for(let B=0;B<=s;B++){let F=B/s,H=F*l+a,W=Math.sin(H),V=Math.cos(H);T.x=A*W,T.y=-_*i+g,T.z=A*V,d.push(T.x,T.y,T.z),v.set(W,D,V).normalize(),f.push(v.x,v.y,v.z),h.push(F,1-_),S.push(p++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let _=x[S][U],A=x[S+1][U],B=x[S+1][U+1],F=x[S][U+1];(e>0||S!==0)&&(u.push(_,A,F),C+=3),(t>0||S!==r-1)&&(u.push(A,B,F),C+=3)}c.addGroup(m,C,0),m+=C}function w(v){let T=p,C=new Ae,D=new M,U=0,S=v===!0?e:t,_=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*_,0),f.push(0,_,0),h.push(.5,.5),p++;let A=p;for(let B=0;B<=s;B++){let H=B/s*l+a,W=Math.cos(H),V=Math.sin(H);D.x=S*V,D.y=g*_,D.z=S*W,d.push(D.x,D.y,D.z),f.push(0,_,0),C.x=W*.5+.5,C.y=V*.5*_+.5,h.push(C.x,C.y),p++}for(let B=0;B<s;B++){let F=T+B,H=A+B;v===!0?u.push(H,H+1,F):u.push(H+1,H,F),U+=3}c.addGroup(m,U,v===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fs=class n extends Ht{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class n extends tt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new M,v=new M,T=new M;for(let C=0;C<t.length;C+=3)h(t[C+0],w),h(t[C+1],v),h(t[C+2],T),l(w,v,T,b)}function l(b,w,v,T){let C=T+1,D=[];for(let U=0;U<=C;U++){D[U]=[];let S=b.clone().lerp(v,U/C),_=w.clone().lerp(v,U/C),A=C-U;for(let B=0;B<=A;B++)B===0&&U===C?D[U][B]=S:D[U][B]=S.clone().lerp(_,B/A)}for(let U=0;U<C;U++)for(let S=0;S<2*(C-U)-1;S++){let _=Math.floor(S/2);S%2===0?(f(D[U][_+1]),f(D[U+1][_]),f(D[U][_])):(f(D[U][_+1]),f(D[U+1][_+1]),f(D[U+1][_]))}}function c(b){let w=new M;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let b=new M;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=g(b)/2/Math.PI+.5,T=m(b)/Math.PI+.5;o.push(v,1-T)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],T=o[b+4],C=Math.max(w,v,T),D=Math.min(w,v,T);C>.9&&D<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,w){let v=b*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let b=new M,w=new M,v=new M,T=new M,C=new Ae,D=new Ae,U=new Ae;for(let S=0,_=0;S<r.length;S+=9,_+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),C.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),T.copy(b).add(w).add(v).divideScalar(3);let A=g(T);x(C,_+0,b,A),x(D,_+2,w,A),x(U,_+4,v,A)}}function x(b,w,v,T){T<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=T/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new at;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos($e(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos($e(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dc=class extends Wr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Yl=new M,Sd=new rf,wd=new rf,Td=new rf,fc=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Yl.subVectors(s[0],s[1]).add(s[0]),c=Yl);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Sd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),wd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),Td.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),wd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Td.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Sd.calc(l),wd.calc(l),Td.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function kv(n,e){let t=1-n;return t*t*e}function Gv(n,e){return 2*(1-n)*n*e}function Hv(n,e){return n*n*e}function Jo(n,e,t,i){return kv(n,e)+Gv(n,t)+Hv(n,i)}function Wv(n,e){let t=1-n;return t*t*t*e}function qv(n,e){let t=1-n;return 3*t*t*n*e}function Xv(n,e){return 3*(1-n)*n*n*e}function Yv(n,e){return n*n*n*e}function Ko(n,e,t,i,s){return Wv(n,e)+qv(n,t)+Xv(n,i)+Yv(n,s)}var ga=class extends Bn{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pc=class extends Bn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends Bn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends Bn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Bn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends Bn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y),Jo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Rm(a,l.x,c.x,u.x,d.x),Rm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},Ud=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:ga,CubicBezierCurve3:pc,EllipseCurve:Wr,LineCurve:xa,LineCurve3:mc,QuadraticBezierCurve:ya,QuadraticBezierCurve3:gc,SplineCurve:va}),xc=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ud[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ud[s.type]().fromJSON(s))}return this}},_a=class extends xc{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xa(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ya(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ga(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ns=class extends _a{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new _a().fromJSON(s))}return this}};function Zv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Rg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Qv(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ma(r,o,t,a,l,c,0),o}function Rg(n,e,t,i,s){let r;if(s===u_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pm(o/i|0,n[o],n[o+1],r);return r&&qr(r,r.next)&&(Sa(r),r=r.next),r}function Bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ma(n,e,t,i,s,r,o){if(!n)return;!o&&r&&s_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jv(n,i,s,r):jv(n)){e.push(l.i,n.i,c.i),Sa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Kv(Bs(n),e),Ma(n,e,t,i,s,r,2)):o===2&&$v(n,e,t,i,s,r):Ma(Bs(n),e,t,i,s,r,1);break}}}function jv(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&Yo(s,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Fd(h,p,e,t,i),b=Fd(x,g,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=b;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Yo(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Yo(a,u,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Yo(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Yo(a,u,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kv(n,e){let t=n;do{let i=t.prev,s=t.next.next;!qr(i,s)&&Ig(i,t,t.next,s)&&ba(i,s)&&ba(s,i)&&(e.push(i.i,t.i,s.i),Sa(t),Sa(t.next),t=n=s),t=t.next}while(t!==n);return Bs(t)}function $v(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a_(o,a)){let l=Lg(o,a);o=Bs(o,o.next),l=Bs(l,l.next),Ma(o,e,t,i,s,r,0),Ma(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Qv(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Rg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(o_(c))}s.sort(e_);for(let r=0;r<s.length;r++)t=t_(s[r],t);return t}function e_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function t_(n,e){let t=n_(n,e);if(!t)return e;let i=Lg(t,n);return Bs(i,i.next),Bs(t,t.next)}function n_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(qr(n,t))return t;do{if(qr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Pg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ba(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&i_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function i_(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function s_(n,e,t,i){let s=n;do s.z===0&&(s.z=Fd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,r_(s)}function r_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Fd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function o_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Yo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Pg(n,e,t,i,s,r,o,a)}function a_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!l_(n,e)&&(ba(n,e)&&ba(e,n)&&c_(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||qr(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qr(n,e){return n.x===e.x&&n.y===e.y}function Ig(n,e,t,i){let s=jl(Ot(n,e,t)),r=jl(Ot(n,e,i)),o=jl(Ot(t,i,n)),a=jl(Ot(t,i,e));return!!(s!==r&&o!==a||s===0&&Zl(n,t,e)||r===0&&Zl(n,i,e)||o===0&&Zl(t,n,i)||a===0&&Zl(t,e,i))}function Zl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function jl(n){return n>0?1:n<0?-1:0}function l_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ig(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ba(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function c_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lg(n,e){let t=Nd(n.i,n.x,n.y),i=Nd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pm(n,e,t,i){let s=Nd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Bd=class{static triangulate(e,t,i=2){return Zv(e,t,i)}},ui=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Im(e),Lm(i,e);let o=e.length;t.forEach(Im);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lm(i,t[l]);let a=Bd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Im(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var wa=class n extends tt{constructor(e=new Ns([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:h_,w,v=!1,T,C,D,U;m&&(w=m.getSpacedPoints(u),v=!0,f=!1,T=m.computeFrenetFrames(u,!1),C=new M,D=new M,U=new M),f||(g=0,h=0,p=0,x=0);let S=a.extractPoints(c),_=S.shape,A=S.holes;if(!ui.isClockWise(_)){_=_.reverse();for(let Y=0,I=A.length;Y<I;Y++){let z=A[Y];ui.isClockWise(z)&&(A[Y]=z.reverse())}}function F(Y){let z=10000000000000001e-36,O=Y[0];for(let j=1;j<=Y.length;j++){let q=j%Y.length,ie=Y[q],Me=ie.x-O.x,Pe=ie.y-O.y,R=Me*Me+Pe*Pe,y=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(O.x),Math.abs(O.y)),L=z*y*y;if(R<=L){Y.splice(q,1),j--;continue}O=ie}}F(_),A.forEach(F);let H=A.length,W=_;for(let Y=0;Y<H;Y++){let I=A[Y];_=_.concat(I)}function V(Y,I,z){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(I,z)}let te=_.length;function N(Y,I,z){let O,j,q,ie=Y.x-I.x,Me=Y.y-I.y,Pe=z.x-Y.x,R=z.y-Y.y,y=ie*ie+Me*Me,L=ie*R-Me*Pe;if(Math.abs(L)>Number.EPSILON){let X=Math.sqrt(y),re=Math.sqrt(Pe*Pe+R*R),J=I.x-Me/X,be=I.y+ie/X,fe=z.x-R/re,xe=z.y+Pe/re,pe=((fe-J)*R-(xe-be)*Pe)/(ie*R-Me*Pe);O=J+ie*pe-Y.x,j=be+Me*pe-Y.y;let ue=O*O+j*j;if(ue<=2)return new Ae(O,j);q=Math.sqrt(ue/2)}else{let X=!1;ie>Number.EPSILON?Pe>Number.EPSILON&&(X=!0):ie<-Number.EPSILON?Pe<-Number.EPSILON&&(X=!0):Math.sign(Me)===Math.sign(R)&&(X=!0),X?(O=-Me,j=ie,q=Math.sqrt(y)):(O=ie,j=Me,q=Math.sqrt(y/2))}return new Ae(O/q,j/q)}let ce=[];for(let Y=0,I=W.length,z=I-1,O=Y+1;Y<I;Y++,z++,O++)z===I&&(z=0),O===I&&(O=0),ce[Y]=N(W[Y],W[z],W[O]);let he=[],Z,me=ce.concat();for(let Y=0,I=H;Y<I;Y++){let z=A[Y];Z=[];for(let O=0,j=z.length,q=j-1,ie=O+1;O<j;O++,q++,ie++)q===j&&(q=0),ie===j&&(ie=0),Z[O]=N(z[O],z[q],z[ie]);he.push(Z),me=me.concat(Z)}let ve;if(g===0)ve=ui.triangulateShape(W,A);else{let Y=[],I=[];for(let z=0;z<g;z++){let O=z/g,j=h*Math.cos(O*Math.PI/2),q=p*Math.sin(O*Math.PI/2)+x;for(let ie=0,Me=W.length;ie<Me;ie++){let Pe=V(W[ie],ce[ie],q);ee(Pe.x,Pe.y,-j),O===0&&Y.push(Pe)}for(let ie=0,Me=H;ie<Me;ie++){let Pe=A[ie];Z=he[ie];let R=[];for(let y=0,L=Pe.length;y<L;y++){let X=V(Pe[y],Z[y],q);ee(X.x,X.y,-j),O===0&&R.push(X)}O===0&&I.push(R)}}ve=ui.triangulateShape(Y,I)}let Ee=ve.length,_e=p+x;for(let Y=0;Y<te;Y++){let I=f?V(_[Y],me[Y],_e):_[Y];v?(D.copy(T.normals[0]).multiplyScalar(I.x),C.copy(T.binormals[0]).multiplyScalar(I.y),U.copy(w[0]).add(D).add(C),ee(U.x,U.y,U.z)):ee(I.x,I.y,0)}for(let Y=1;Y<=u;Y++)for(let I=0;I<te;I++){let z=f?V(_[I],me[I],_e):_[I];v?(D.copy(T.normals[Y]).multiplyScalar(z.x),C.copy(T.binormals[Y]).multiplyScalar(z.y),U.copy(w[Y]).add(D).add(C),ee(U.x,U.y,U.z)):ee(z.x,z.y,d/u*Y)}for(let Y=g-1;Y>=0;Y--){let I=Y/g,z=h*Math.cos(I*Math.PI/2),O=p*Math.sin(I*Math.PI/2)+x;for(let j=0,q=W.length;j<q;j++){let ie=V(W[j],ce[j],O);ee(ie.x,ie.y,d+z)}for(let j=0,q=A.length;j<q;j++){let ie=A[j];Z=he[j];for(let Me=0,Pe=ie.length;Me<Pe;Me++){let R=V(ie[Me],Z[Me],O);v?ee(R.x,R.y+w[u-1].y,w[u-1].x+z):ee(R.x,R.y,d+z)}}}ne(),se();function ne(){let Y=s.length/3;if(f){let I=0,z=te*I;for(let O=0;O<Ee;O++){let j=ve[O];oe(j[2]+z,j[1]+z,j[0]+z)}I=u+g*2,z=te*I;for(let O=0;O<Ee;O++){let j=ve[O];oe(j[0]+z,j[1]+z,j[2]+z)}}else{for(let I=0;I<Ee;I++){let z=ve[I];oe(z[2],z[1],z[0])}for(let I=0;I<Ee;I++){let z=ve[I];oe(z[0]+te*u,z[1]+te*u,z[2]+te*u)}}i.addGroup(Y,s.length/3-Y,0)}function se(){let Y=s.length/3,I=0;ye(W,I),I+=W.length;for(let z=0,O=A.length;z<O;z++){let j=A[z];ye(j,I),I+=j.length}i.addGroup(Y,s.length/3-Y,1)}function ye(Y,I){let z=Y.length;for(;--z>=0;){let O=z,j=z-1;j<0&&(j=Y.length-1);for(let q=0,ie=u+g*2;q<ie;q++){let Me=te*q,Pe=te*(q+1),R=I+O+Me,y=I+j+Me,L=I+j+Pe,X=I+O+Pe;Q(R,y,L,X)}}}function ee(Y,I,z){l.push(Y),l.push(I),l.push(z)}function oe(Y,I,z){de(Y),de(I),de(z);let O=s.length/3,j=b.generateTopUV(i,s,O-3,O-2,O-1);P(j[0]),P(j[1]),P(j[2])}function Q(Y,I,z,O){de(Y),de(I),de(O),de(I),de(z),de(O);let j=s.length/3,q=b.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);P(q[0]),P(q[1]),P(q[3]),P(q[1]),P(q[2]),P(q[3])}function de(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function P(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return d_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ud[s.type]().fromJSON(s)),new n(i,e.options)}},h_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-d),new Ae(f,1-p),new Ae(x,1-m)]:[new Ae(a,1-l),new Ae(u,1-d),new Ae(h,1-p),new Ae(g,1-m)]}};function d_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Lt=class n extends Hr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Pi=class n extends Hr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Yt=class n extends tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let b=m*f-o;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-b,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let w=b+c*m,v=b+c*(m+1),T=b+1+c*(m+1),C=b+1+c*m;h.push(w,v,C),h.push(v,T,C)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Xr=class n extends tt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new M,p=new Ae;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let b=m+g,w=b,v=b+i+1,T=b+i+2,C=b+1;a.push(w,v,C),a.push(v,T,C)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ta=class n extends tt{constructor(e=new Ns([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;ui.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];ui.isClockWise(b)===!0&&(p[g]=b.reverse())}let x=ui.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];h=h.concat(b)}for(let g=0,m=h.length;g<m;g++){let b=h[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,m=x.length;g<m;g++){let b=x[g],w=b[0]+d,v=b[1]+d,T=b[2]+d;i.push(w,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return f_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function f_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ii=class n extends tt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let b=[],w=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let C=T/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(C+v,1-w),b.push(c++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){let w=u[m][b+1],v=u[m][b],T=u[m+1][b],C=u[m+1][b+1];(m!==0||o>0)&&h.push(w,v,C),(m!==i-1||l<Math.PI)&&h.push(v,T,C)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Aa=class n extends Hr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Li=class n extends tt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,b=(s+1)*h+p;o.push(x,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wt=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kt=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function p_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends Os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:r=e,a=2*t-i;break;case Id:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pd:o=e,l=2*i-t;break;case Id:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+b*o[c+T]+w*o[l+T]+v*o[d+T];return r}},Mc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},bc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&p_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$l,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ic;var ns=class extends On{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=$o;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Sc.prototype.ValueTypeName="color";var wc=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};wc.prototype.ValueTypeName="number";var Tc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ze.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ca=class extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends On{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=$o;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Ac.prototype.ValueTypeName="vector";var Ql={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ec=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Dg=new Ec,Yr=class{constructor(e){this.manager=e!==void 0?e:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=new WeakMap,Cc=class extends Yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ql.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Er.get(o);d===void 0&&(d=[],Er.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Dr("img");function l(){u(),t&&t(this);let d=Er.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Ql.remove(`image:${e}`);let f=Er.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ql.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ra=class extends Yr{constructor(e){super(e)}load(e,t,i,s){let r=new fn,o=new Cc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Zr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Pa=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ad=new at,Dm=new M,Um=new M,Rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Um),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fm=new at,Xo=new M,Ed=new M,Od=class extends Rc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xo),Ed.copy(i.position),Ed.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ed),i.updateMatrixWorld(),s.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm,i.coordinateSystem,i.reversedDepth)}},Ia=class extends Zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Od}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},La=class extends ia{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zd=class extends Rc{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var of="\\[\\]\\.:\\/",m_=new RegExp("["+of+"]","g"),af="[^"+of+"]",g_="[^"+of.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",af),y_=/(WCOD+)?/.source.replace("WCOD",g_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",af),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",af),M_=new RegExp("^"+x_+y_+v_+__+"$"),b_=["material","materials","bones","map"],Vd=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(e){let t=M_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Vd;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AA=new Float32Array(1);var Nm=new at,Di=class{constructor(e,t,i=0,s=1/0){this.ray=new Ls(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(e,t=!0,i=[]){return kd(e,this,i,t),i.sort(Bm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kd(e[s],this,i,t);return i.sort(Bm),i}};function Bm(n,e){return n.distance-e.distance}function kd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)kd(r[o],e,t,!0)}}var Om=new M,Kl=new M,Cr=new M,Rr=new M,Cd=new M,S_=new M,w_=new M,Ua=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),Kl.subVectors(this.end,this.start);let i=Kl.dot(Kl),r=Kl.dot(Om)/i;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=S_,i=w_){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Cr.subVectors(c,a),Rr.subVectors(u,l),Cd.subVectors(a,l);let d=Cr.dot(Cr),f=Rr.dot(Rr),h=Rr.dot(Cd);if(d<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=h/f,o=$e(o,0,1);else{let p=Cr.dot(Cd);if(f<=s)o=0,r=$e(-p/d,0,1);else{let x=Cr.dot(Rr),g=d*f-x*x;g!==0?r=$e((x*h-p*f)/g,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=$e(-p/d,0,1)):o>1&&(o=1,r=$e((x-p)/d,0,1))}}return t.copy(a).add(Cr.multiplyScalar(r)),i.copy(l).add(Rr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function lf(n,e,t,i){let s=T_(i);switch(t){case Jd:return n*e;case qc:return n*e/s.components*s.byteLength;case Xc:return n*e/s.components*s.byteLength;case $d:return n*e*2/s.components*s.byteLength;case Yc:return n*e*2/s.components*s.byteLength;case Kd:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case Oa:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:case $c:return Math.max(n,16)*Math.max(e,8)/4;case jc:case Kc:return Math.max(n,8)*Math.max(e,8)/2;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gu:case xu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mu:case bu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T_(n){switch(n){case zn:case Xd:return{byteLength:1,components:1};case Jr:case Yd:case mi:return{byteLength:2,components:1};case Hc:case Wc:return{byteLength:2,components:4};case ss:case Gc:case ri:return{byteLength:4,components:1};case Zd:case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function P_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,V_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,q_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
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
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
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
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
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
#endif`,RM=`struct PhysicalMaterial {
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
}`,PM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
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
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mb=`float getShadowMask() {
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
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Bb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,qb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,Yb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Jb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,Qb=`#define PHONG
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
}`,e1=`#define STANDARD
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
}`,t1=`#define STANDARD
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
}`,n1=`#define TOON
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
}`,i1=`#define TOON
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
}`,s1=`uniform float size;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,l1=`uniform float rotation;
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
}`,c1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:I_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:U_,alphatest_fragment:F_,alphatest_pars_fragment:N_,aomap_fragment:B_,aomap_pars_fragment:O_,batching_pars_vertex:z_,batching_vertex:V_,begin_vertex:k_,beginnormal_vertex:G_,bsdfs:H_,iridescence_fragment:W_,bumpmap_pars_fragment:q_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:j_,color_fragment:J_,color_pars_fragment:K_,color_pars_vertex:$_,color_vertex:Q_,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:sM,emissivemap_fragment:rM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:SM,envmap_vertex:fM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:vM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:MM,lights_pars_begin:bM,lights_toon_fragment:wM,lights_toon_pars_fragment:TM,lights_phong_fragment:AM,lights_phong_pars_fragment:EM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:PM,lights_fragment_maps:IM,lights_fragment_end:LM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:NM,map_fragment:BM,map_pars_fragment:OM,map_particle_fragment:zM,map_particle_pars_fragment:VM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:GM,morphinstance_vertex:HM,morphcolor_vertex:WM,morphnormal_vertex:qM,morphtarget_pars_vertex:XM,morphtarget_vertex:YM,normal_fragment_begin:ZM,normal_fragment_maps:jM,normal_pars_fragment:JM,normal_pars_vertex:KM,normal_vertex:$M,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:sb,packing:rb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:lb,dithering_pars_fragment:cb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:fb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:xb,skinning_vertex:yb,skinnormal_vertex:vb,specularmap_fragment:_b,specularmap_pars_fragment:Mb,tonemapping_fragment:bb,tonemapping_pars_fragment:Sb,transmission_fragment:wb,transmission_pars_fragment:Tb,uv_pars_fragment:Ab,uv_pars_vertex:Eb,uv_vertex:Cb,worldpos_vertex:Rb,background_vert:Pb,background_frag:Ib,backgroundCube_vert:Lb,backgroundCube_frag:Db,cube_vert:Ub,cube_frag:Fb,depth_vert:Nb,depth_frag:Bb,distanceRGBA_vert:Ob,distanceRGBA_frag:zb,equirect_vert:Vb,equirect_frag:kb,linedashed_vert:Gb,linedashed_frag:Hb,meshbasic_vert:Wb,meshbasic_frag:qb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:Zb,meshmatcap_frag:jb,meshnormal_vert:Jb,meshnormal_frag:Kb,meshphong_vert:$b,meshphong_frag:Qb,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:s1,points_frag:r1,shadow_vert:o1,shadow_frag:a1,sprite_vert:l1,sprite_frag:c1},De={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},gi={basic:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:pn([De.points,De.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:pn([De.common,De.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:pn([De.sprite,De.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:pn([De.common,De.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:pn([De.lights,De.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};gi.physical={uniforms:pn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Tu={r:0,b:0,g:0},Gs=new ln,u1=new at;function h1(n,e,t,i,s,r,o){let a=new Be(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,T=p(w);T===null?m(a,l):T&&T.isColor&&(m(T,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,v){let T=p(v);T&&(T.isCubeTexture||T.mapping===Na)?(u===void 0&&(u=new Ne(new Je(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ks(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gs.copy(v.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Gs)),u.material.toneMapped=ct.getTransfer(T.colorSpace)!==vt,(d!==T||f!==T.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ne(new Yt(2,2),new cn({name:"BackgroundMaterial",uniforms:ks(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(T.colorSpace)!==vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(Tu,sf(n)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:b}}function d1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,A,B,F,H){let W=!1,V=d(F,B,A);r!==V&&(r=V,c(r.object)),W=h(_,F,B,H),W&&p(_,F,B,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(_,A,B,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,A,B){let F=B.wireframe===!0,H=i[_.id];H===void 0&&(H={},i[_.id]=H);let W=H[A.id];W===void 0&&(W={},H[A.id]=W);let V=W[F];return V===void 0&&(V=f(l()),W[F]=V),V}function f(_){let A=[],B=[],F=[];for(let H=0;H<t;H++)A[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:F,object:_,attributes:{},index:null}}function h(_,A,B,F){let H=r.attributes,W=A.attributes,V=0,te=B.getAttributes();for(let N in te)if(te[N].location>=0){let he=H[N],Z=W[N];if(Z===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),he===void 0||he.attribute!==Z||Z&&he.data!==Z.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function p(_,A,B,F){let H={},W=A.attributes,V=0,te=B.getAttributes();for(let N in te)if(te[N].location>=0){let he=W[N];he===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));let Z={};Z.attribute=he,he&&he.data&&(Z.data=he.data),H[N]=Z,V++}r.attributes=H,r.attributesNum=V,r.index=F}function x(){let _=r.newAttributes;for(let A=0,B=_.length;A<B;A++)_[A]=0}function g(_){m(_,0)}function m(_,A){let B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),H[_]!==A&&(n.vertexAttribDivisor(_,A),H[_]=A)}function b(){let _=r.newAttributes,A=r.enabledAttributes;for(let B=0,F=A.length;B<F;B++)A[B]!==_[B]&&(n.disableVertexAttribArray(B),A[B]=0)}function w(_,A,B,F,H,W,V){V===!0?n.vertexAttribIPointer(_,A,B,H,W):n.vertexAttribPointer(_,A,B,F,H,W)}function v(_,A,B,F){x();let H=F.attributes,W=B.getAttributes(),V=A.defaultAttributeValues;for(let te in W){let N=W[te];if(N.location>=0){let ce=H[te];if(ce===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){let he=ce.normalized,Z=ce.itemSize,me=e.get(ce);if(me===void 0)continue;let ve=me.buffer,Ee=me.type,_e=me.bytesPerElement,ne=Ee===n.INT||Ee===n.UNSIGNED_INT||ce.gpuType===Gc;if(ce.isInterleavedBufferAttribute){let se=ce.data,ye=se.stride,ee=ce.offset;if(se.isInstancedInterleavedBuffer){for(let oe=0;oe<N.locationSize;oe++)m(N.location+oe,se.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let oe=0;oe<N.locationSize;oe++)w(N.location+oe,Z/N.locationSize,Ee,he,ye*_e,(ee+Z/N.locationSize*oe)*_e,ne)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)m(N.location+se,ce.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<N.locationSize;se++)g(N.location+se);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let se=0;se<N.locationSize;se++)w(N.location+se,Z/N.locationSize,Ee,he,Z*_e,Z/N.locationSize*se*_e,ne)}}else if(V!==void 0){let he=V[te];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(N.location,he);break;case 3:n.vertexAttrib3fv(N.location,he);break;case 4:n.vertexAttrib4fv(N.location,he);break;default:n.vertexAttrib1fv(N.location,he)}}}}b()}function T(){U();for(let _ in i){let A=i[_];for(let B in A){let F=A[B];for(let H in F)u(F[H].object),delete F[H];delete A[B]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let B in A){let F=A[B];for(let H in F)u(F[H].object),delete F[H];delete A[B]}delete i[_.id]}function D(_){for(let A in i){let B=i[A];if(B[_.id]===void 0)continue;let F=B[_.id];for(let H in F)u(F[H].object),delete F[H];delete B[_.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function f1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==En&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==zn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ri&&!U)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:T,maxSamples:C}}function m1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,w=b*4,v=m.clippingState||null;l.value=v,v=u(p,f,w,h);for(let T=0;T!==w;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=h;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function g1(n){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=zs:a===Vc&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jr||a===Vc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var eo=4,Ug=[.125,.215,.35,.446,.526,.582],qs=20,cf=new La,Fg=new Be,uf=null,hf=0,df=0,ff=!1,Ws=(1+Math.sqrt(5))/2,Qr=1/Ws,Ng=[new M(-Ws,Qr,0),new M(Ws,Qr,0),new M(-Qr,0,Ws),new M(Qr,0,Ws),new M(0,Ws,-Qr),new M(0,Ws,Qr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],x1=new M,no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=x1}=r;uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,hf,df),this._renderer.xr.enabled=ff,e.scissorTest=!1,Au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:mi,format:En,colorSpace:Is,depthBuffer:!1},s=Bg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(r)),this._blurMaterial=v1(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,cf)}_sceneToCubeUV(e,t,i,s,r){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Fg),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new mt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Ne(new Je,x),m=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,m=!0):(x.color.copy(Fg),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let T=this._cubeSize;Au(s,v*T,w>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Au(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ng[(s-r-1)%Ng.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ne(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*qs-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):qs;g>qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qs}`);let m=[],b=0;for(let D=0;D<qs;++D){let U=D/x,S=Math.exp(-U*U/2);m.push(S),D===0?b+=S:D<g&&(b+=2*S)}for(let D=0;D<m.length;D++)m[D]=m[D]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let v=this._sizeLods[s],T=3*v*(s>w-eo?s-w+eo:0),C=4*(this._cubeSize-v);Au(t,T,C,3*v,2*v),l.setRenderTarget(t),l.render(d,cf)}};function y1(n){let e=[],t=[],i=[],s=n,r=n-eo+1+Ug.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-eo?l=Ug[o-n+eo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*h),w=new Float32Array(g*p*h),v=new Float32Array(m*p*h);for(let C=0;C<h;C++){let D=C%3*2/3-1,U=C>2?0:-1,S=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];b.set(S,x*p*C),w.set(f,g*p*C);let _=[C,C,C,C,C,C];v.set(_,m*p*C)}let T=new tt;T.setAttribute("position",new Mt(b,x)),T.setAttribute("uv",new Mt(w,g)),T.setAttribute("faceIndex",new Mt(v,m)),e.push(T),s>eo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bg(n,e,t){let i=new Tn(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Au(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function v1(n,e,t){let i=new Float32Array(qs),s=new M(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Og(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function zg(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Sf(){return`

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
	`}function _1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===jr||l===Vc,u=l===zs||l===Vs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new no(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new no(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function M1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b1(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let b=h.array;x=h.version;for(let w=0,v=b.length;w<v;w+=3){let T=b[w+0],C=b[w+1],D=b[w+2];f.push(T,C,C,D,D,T)}}else if(p!==void 0){let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let T=w+0,C=w+1,D=w+2;f.push(T,C,C,D,D,T)}}else return;let g=new(nf(f)?na:Ds)(f,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function S1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=h[b]*x[b];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function w1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T1(n,e,t){let i=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*T*4*d),D=new ta(C,v,T,d);D.type=ri,D.needsUpdate=!0;let U=w*4;for(let _=0;_<d;_++){let A=g[_],B=m[_],F=b[_],H=v*T*4*_;for(let W=0;W<A.count;W++){let V=W*U;h===!0&&(s.fromBufferAttribute(A,W),C[H+V+0]=s.x,C[H+V+1]=s.y,C[H+V+2]=s.z,C[H+V+3]=0),p===!0&&(s.fromBufferAttribute(B,W),C[H+V+4]=s.x,C[H+V+5]=s.y,C[H+V+6]=s.z,C[H+V+7]=0),x===!0&&(s.fromBufferAttribute(F,W),C[H+V+8]=s.x,C[H+V+9]=s.y,C[H+V+10]=s.z,C[H+V+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new Ae(v,T)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function A1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var s0=new fn,Vg=new fa(1,1),r0=new ta,o0=new ac,a0=new sa,kg=[],Gg=[],Hg=new Float32Array(16),Wg=new Float32Array(9),qg=new Float32Array(4);function io(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=kg[s];if(r===void 0&&(r=new Float32Array(s),kg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ru(n,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function I1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;qg.set(i),n.uniformMatrix2fv(this.addr,!1,qg),tn(t,i)}}function L1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Wg.set(i),n.uniformMatrix3fv(this.addr,!1,Wg),tn(t,i)}}function D1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Hg.set(i),n.uniformMatrix4fv(this.addr,!1,Hg),tn(t,i)}}function U1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function B1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function O1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function V1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function G1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vg.compareFunction=Qd,r=Vg):r=s0,t.setTexture2D(e||r,s)}function H1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||o0,s)}function W1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||a0,s)}function q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||r0,s)}function X1(n){switch(n){case 5126:return E1;case 35664:return C1;case 35665:return R1;case 35666:return P1;case 35674:return I1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return F1;case 35668:case 35672:return N1;case 35669:case 35673:return B1;case 5125:return O1;case 36294:return z1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return q1}}function Y1(n,e){n.uniform1fv(this.addr,e)}function Z1(n,e){let t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function j1(n,e){let t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function J1(n,e){let t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function K1(n,e){let t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $1(n,e){let t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q1(n,e){let t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){let i=this.cache,s=e.length,r=Ru(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||s0,r[o])}function cS(n,e,t){let i=this.cache,s=e.length,r=Ru(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||o0,r[o])}function uS(n,e,t){let i=this.cache,s=e.length,r=Ru(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a0,r[o])}function hS(n,e,t){let i=this.cache,s=e.length,r=Ru(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||r0,r[o])}function dS(n){switch(n){case 5126:return Y1;case 35664:return Z1;case 35665:return j1;case 35666:return J1;case 35674:return K1;case 35675:return $1;case 35676:return Q1;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}var mf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X1(t.type)}},gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}},xf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},pf=/(\w+)(\])?(\[|\.)?/g;function Xg(n,e){n.seq.push(e),n.map[e.id]=e}function fS(n,e,t){let i=n.name,s=i.length;for(pf.lastIndex=0;;){let r=pf.exec(i),o=pf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xg(t,c===void 0?new mf(a,n,e):new gf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xf(a),Xg(t,d)),t=d}}}var to=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Yg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pS=37297,mS=0;function gS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zg=new nt;function xS(n){ct._getMatrix(Zg,ct.workingColorSpace,n);let e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Qo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gS(n.getShaderSource(e),a)}else return r}function yS(n,e){let t=xS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vS(n,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case ug:t="Cineon";break;case zc:t="ACESFilmic";break;case dg:t="AgX";break;case fg:t="Neutral";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eu=new M;function _S(){ct.getLuminanceCoefficients(Eu);let n=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function bS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ga(n){return n!==""}function Jg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(n){return n.replace(wS,AS)}var TS=new Map;function AS(n,e){let t=st[e];if(t===void 0){let i=TS.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}var ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(n){return n.replace(ES,CS)}function CS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function RS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function LS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case og:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function DS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function US(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=RS(t),c=PS(t),u=IS(t),d=LS(t),f=DS(t),h=MS(t),p=bS(r),x=s.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),m.length>0&&(m+=`
`)):(g=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),m=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?st.tonemapping_pars_fragment:"",t.toneMapping!==Fi?vS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=yf(o),o=Jg(o,t),o=Kg(o,t),a=yf(a),a=Jg(a,t),a=Kg(a,t),o=$g(o),a=$g(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+o,v=b+m+a,T=Yg(s,s.VERTEX_SHADER,w),C=Yg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(A){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(C)||"",W=B.trim(),V=F.trim(),te=H.trim(),N=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,C);else{let he=jg(s,T,"vertex"),Z=jg(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+he+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||te==="")&&(ce=!1);ce&&(A.diagnostics={runnable:N,programLog:W,vertexShader:{log:V,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(T),s.deleteShader(C),U=new to(s,x),S=SS(s,x)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,pS)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}var FS=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _f(e),t.set(e,i)),i}},_f=class{constructor(e){this.id=FS++,this.code=e,this.usedTimes=0}};function NS(n,e,t,i,s,r,o){let a=new Nr,l=new vf,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,_,A,B,F){let H=B.fog,W=F.geometry,V=S.isMeshStandardMaterial?B.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),N=te&&te.mapping===Na?te.image.height:null,ce=p[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Z=he!==void 0?he.length:0,me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let ve,Ee,_e,ne;if(ce){let ft=gi[ce];ve=ft.vertexShader,Ee=ft.fragmentShader}else ve=S.vertexShader,Ee=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);let se=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),ee=F.isInstancedMesh===!0,oe=F.isBatchedMesh===!0,Q=!!S.map,de=!!S.matcap,P=!!te,Y=!!S.aoMap,I=!!S.lightMap,z=!!S.bumpMap,O=!!S.normalMap,j=!!S.displacementMap,q=!!S.emissiveMap,ie=!!S.metalnessMap,Me=!!S.roughnessMap,Pe=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,L=S.iridescence>0,X=S.sheen>0,re=S.transmission>0,J=Pe&&!!S.anisotropyMap,be=R&&!!S.clearcoatMap,fe=R&&!!S.clearcoatNormalMap,xe=R&&!!S.clearcoatRoughnessMap,pe=L&&!!S.iridescenceMap,ue=L&&!!S.iridescenceThicknessMap,Te=X&&!!S.sheenColorMap,ze=X&&!!S.sheenRoughnessMap,Se=!!S.specularMap,Re=!!S.specularColorMap,He=!!S.specularIntensityMap,G=re&&!!S.transmissionMap,Ce=re&&!!S.thicknessMap,Le=!!S.gradientMap,Fe=!!S.alphaMap,we=S.alphaTest>0,ge=!!S.alphaHash,Ge=!!S.extensions,et=Fi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=n.toneMapping);let Et={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:Ee,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:oe,batchingColor:oe&&F._colorsTexture!==null,instancing:ee,instancingColor:ee&&F.instanceColor!==null,instancingMorph:ee&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Is,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:de,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:N,aoMap:Y,lightMap:I,bumpMap:z,normalMap:O,displacementMap:f&&j,emissiveMap:q,normalMapObjectSpace:O&&S.normalMapType===xg,normalMapTangentSpace:O&&S.normalMapType===Su,metalnessMap:ie,roughnessMap:Me,anisotropy:Pe,anisotropyMap:J,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:fe,clearcoatRoughnessMap:xe,dispersion:y,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Se,specularColorMap:Re,specularIntensityMap:He,transmission:re,transmissionMap:G,thicknessMap:Ce,gradientMap:Le,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:Fe,alphaTest:we,alphaHash:ge,combine:S.combine,mapUv:Q&&x(S.map.channel),aoMapUv:Y&&x(S.aoMap.channel),lightMapUv:I&&x(S.lightMap.channel),bumpMapUv:z&&x(S.bumpMap.channel),normalMapUv:O&&x(S.normalMap.channel),displacementMapUv:j&&x(S.displacementMap.channel),emissiveMapUv:q&&x(S.emissiveMap.channel),metalnessMapUv:ie&&x(S.metalnessMap.channel),roughnessMapUv:Me&&x(S.roughnessMap.channel),anisotropyMapUv:J&&x(S.anisotropyMap.channel),clearcoatMapUv:be&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Se&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:He&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:Ce&&x(S.thicknessMap.channel),alphaMapUv:Fe&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(O||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Q||Fe),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:me,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:q&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wt,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)_.push(A),_.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(b(_,S),w(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function b(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function w(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let _=p[S.type],A;if(_){let B=gi[_];A=wu.clone(B.uniforms)}else A=S.uniforms;return A}function T(S,_){let A;for(let B=0,F=u.length;B<F;B++){let H=u[B];if(H.cacheKey===_){A=H,++A.usedTimes;break}}return A===void 0&&(A=new US(n,_,S,r),u.push(A)),A}function C(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:U}}function BS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function OS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||OS),i.length>1&&i.sort(f||e0),s.length>1&&s.sort(f||e0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function zS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new t0,n.set(i,[o])):s>=r.length?(o=new t0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function VS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Be};break;case"SpotLight":t={position:new M,direction:new M,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function kS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var GS=0;function HS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WS(n){let e=new VS,t=kS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new at,o=new at;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,b=0,w=0,v=0,T=0,C=0,D=0;c.sort(HS);for(let S=0,_=c.length;S<_;S++){let A=c[S],B=A.color,F=A.intensity,H=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=B.r*F,d+=B.g*F,f+=B.b*F;else if(A.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],F);D++}else if(A.isDirectionalLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let te=A.shadow,N=t.get(A);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.directionalShadow[h]=N,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=A.shadow.matrix,b++}i.directional[h]=V,h++}else if(A.isSpotLight){let V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[x]=V;let te=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,te.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,A.castShadow){let N=t.get(A);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=W,v++}x++}else if(A.isRectAreaLight){let V=e.get(A);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=V,g++}else if(A.isPointLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){let te=A.shadow,N=t.get(A);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,N.shadowCameraNear=te.camera.near,N.shadowCameraFar=te.camera.far,i.pointShadow[p]=N,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=A.shadow.matrix,w++}i.point[p]=V,p++}else if(A.isHemisphereLight){let V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(F),V.groundColor.copy(A.groundColor).multiplyScalar(F),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==T||U.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=T,U.numLightProbes=D,i.version=GS++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let w=c[m];if(w.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(w.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function n0(n){let e=new WS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new n0(n),e.set(s,[a])):r>=o.length?(a=new n0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
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
}`;function ZS(n,e,t){let i=new kr,s=new Ae,r=new Ae,o=new lt,a=new yc({depthPacking:gg}),l=new vc,c={},u=t.maxTextureSize,d={[si]:un,[un]:si,[Wt]:Wt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:XS,fragmentShader:YS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new tt;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let m=this.type;this.render=function(C,D,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ui),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=m!==pi&&this.type===pi,H=m===pi&&this.type!==pi;for(let W=0,V=C.length;W<V;W++){let te=C[W],N=te.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let ce=N.getFrameExtents();if(s.multiply(ce),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,N.mapSize.y=r.y)),N.map===null||F===!0||H===!0){let Z=this.type!==pi?{minFilter:on,magFilter:on}:{};N.map!==null&&N.map.dispose(),N.map=new Tn(s.x,s.y,Z),N.map.texture.name=te.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let he=N.getViewportCount();for(let Z=0;Z<he;Z++){let me=N.getViewport(Z);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(o),N.updateMatrices(te,Z),i=N.getFrustum(),v(D,U,N.camera,te,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&b(N,U),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,_,A)};function b(C,D){let U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,U,f,x,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,U,h,x,null)}function w(C,D,U,S){let _=null,A=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=U.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let B=_.uuid,F=D.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let W=H[F];W===void 0&&(W=_.clone(),H[F]=W,D.addEventListener("dispose",T)),_=W}if(_.visible=D.visible,_.wireframe=D.wireframe,S===pi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=n.properties.get(_);B.light=U}return _}function v(C,D,U,S,_){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let F=e.update(C),H=C.material;if(Array.isArray(H)){let W=F.groups;for(let V=0,te=W.length;V<te;V++){let N=W[V],ce=H[N.materialIndex];if(ce&&ce.visible){let he=w(C,ce,S,_);C.onBeforeShadow(n,C,D,U,F,he,N),n.renderBufferDirect(U,null,F,he,C,N),C.onAfterShadow(n,C,D,U,F,he,N)}}}else if(H.visible){let W=w(C,H,S,_);C.onBeforeShadow(n,C,D,U,F,W,null),n.renderBufferDirect(U,null,F,W,C,null),C.onAfterShadow(n,C,D,U,F,W,null)}}let B=C.children;for(let F=0,H=B.length;F<H;F++)v(B[F],D,U,S,_)}function T(C){C.target.removeEventListener("dispose",T);for(let U in c){let S=c[U],_=C.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var jS={[Ic]:Lc,[Dc]:Nc,[Uc]:Bc,[Ps]:Fc,[Lc]:Ic,[Nc]:Dc,[Bc]:Uc,[Fc]:Ps};function JS(n,e){function t(){let G=!1,Ce=new lt,Le=null,Fe=new lt(0,0,0,0);return{setMask:function(we){Le!==we&&!G&&(n.colorMask(we,we,we,we),Le=we)},setLocked:function(we){G=we},setClear:function(we,ge,Ge,et,Et){Et===!0&&(we*=et,ge*=et,Ge*=et),Ce.set(we,ge,Ge,et),Fe.equals(Ce)===!1&&(n.clearColor(we,ge,Ge,et),Fe.copy(Ce))},reset:function(){G=!1,Le=null,Fe.set(-1,0,0,0)}}}function i(){let G=!1,Ce=!1,Le=null,Fe=null,we=null;return{setReversed:function(ge){if(Ce!==ge){let Ge=e.get("EXT_clip_control");ge?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=ge;let et=we;we=null,this.setClear(et)}},getReversed:function(){return Ce},setTest:function(ge){ge?se(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ge){Le!==ge&&!G&&(n.depthMask(ge),Le=ge)},setFunc:function(ge){if(Ce&&(ge=jS[ge]),Fe!==ge){switch(ge){case Ic:n.depthFunc(n.NEVER);break;case Lc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Fc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=ge}},setLocked:function(ge){G=ge},setClear:function(ge){we!==ge&&(Ce&&(ge=1-ge),n.clearDepth(ge),we=ge)},reset:function(){G=!1,Le=null,Fe=null,we=null,Ce=!1}}}function s(){let G=!1,Ce=null,Le=null,Fe=null,we=null,ge=null,Ge=null,et=null,Et=null;return{setTest:function(ft){G||(ft?se(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ft){Ce!==ft&&!G&&(n.stencilMask(ft),Ce=ft)},setFunc:function(ft,bi,ci){(Le!==ft||Fe!==bi||we!==ci)&&(n.stencilFunc(ft,bi,ci),Le=ft,Fe=bi,we=ci)},setOp:function(ft,bi,ci){(ge!==ft||Ge!==bi||et!==ci)&&(n.stencilOp(ft,bi,ci),ge=ft,Ge=bi,et=ci)},setLocked:function(ft){G=ft},setClear:function(ft){Et!==ft&&(n.clearStencil(ft),Et=ft)},reset:function(){G=!1,Ce=null,Le=null,Fe=null,we=null,ge=null,Ge=null,et=null,Et=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,b=null,w=null,v=null,T=null,C=null,D=new Be(0,0,0),U=0,S=!1,_=null,A=null,B=null,F=null,H=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=te>=1):N.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=te>=2);let ce=null,he={},Z=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ve=new lt().fromArray(Z),Ee=new lt().fromArray(me);function _e(G,Ce,Le,Fe){let we=new Uint8Array(4),ge=n.createTexture();n.bindTexture(G,ge),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Le;Ge++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ge}let ne={};ne[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ps),z(!1),O(Gd),se(n.CULL_FACE),Y(Ui);function se(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function ye(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ee(G,Ce){return d[G]!==Ce?(n.bindFramebuffer(G,Ce),d[G]=Ce,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function oe(G,Ce){let Le=h,Fe=!1;if(G){Le=f.get(Ce),Le===void 0&&(Le=[],f.set(Ce,Le));let we=G.textures;if(Le.length!==we.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ge=we.length;ge<Ge;ge++)Le[ge]=n.COLOR_ATTACHMENT0+ge;Le.length=we.length,Fe=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(Le)}function Q(G){return p!==G?(n.useProgram(G),p=G,!0):!1}let de={[es]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};de[qm]=n.MIN,de[Xm]=n.MAX;let P={[Ym]:n.ZERO,[Zm]:n.ONE,[jm]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[tg]:n.SRC_ALPHA_SATURATE,[Qm]:n.DST_COLOR,[Km]:n.DST_ALPHA,[Jm]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[eg]:n.ONE_MINUS_DST_COLOR,[$m]:n.ONE_MINUS_DST_ALPHA,[ng]:n.CONSTANT_COLOR,[ig]:n.ONE_MINUS_CONSTANT_COLOR,[sg]:n.CONSTANT_ALPHA,[rg]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(G,Ce,Le,Fe,we,ge,Ge,et,Et,ft){if(G===Ui){x===!0&&(ye(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),G!==Gm){if(G!==g||ft!==S){if((m!==es||v!==es)&&(n.blendEquation(n.FUNC_ADD),m=es,v=es),ft)switch(G){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFunc(n.ONE,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,w=null,T=null,C=null,D.set(0,0,0),U=0,g=G,S=ft}return}we=we||Ce,ge=ge||Le,Ge=Ge||Fe,(Ce!==m||we!==v)&&(n.blendEquationSeparate(de[Ce],de[we]),m=Ce,v=we),(Le!==b||Fe!==w||ge!==T||Ge!==C)&&(n.blendFuncSeparate(P[Le],P[Fe],P[ge],P[Ge]),b=Le,w=Fe,T=ge,C=Ge),(et.equals(D)===!1||Et!==U)&&(n.blendColor(et.r,et.g,et.b,Et),D.copy(et),U=Et),g=G,S=!1}function I(G,Ce){G.side===Wt?ye(n.CULL_FACE):se(n.CULL_FACE);let Le=G.side===un;Ce&&(Le=!Le),z(Le),G.blending===Rs&&G.transparent===!1?Y(Ui):Y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Fe=G.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(G){_!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),_=G)}function O(G){G!==zm?(se(n.CULL_FACE),G!==A&&(G===Gd?n.cullFace(n.BACK):G===Vm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),A=G}function j(G){G!==B&&(V&&n.lineWidth(G),B=G)}function q(G,Ce,Le){G?(se(n.POLYGON_OFFSET_FILL),(F!==Ce||H!==Le)&&(n.polygonOffset(Ce,Le),F=Ce,H=Le)):ye(n.POLYGON_OFFSET_FILL)}function ie(G){G?se(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Me(G){G===void 0&&(G=n.TEXTURE0+W-1),ce!==G&&(n.activeTexture(G),ce=G)}function Pe(G,Ce,Le){Le===void 0&&(ce===null?Le=n.TEXTURE0+W-1:Le=ce);let Fe=he[Le];Fe===void 0&&(Fe={type:void 0,texture:void 0},he[Le]=Fe),(Fe.type!==G||Fe.texture!==Ce)&&(ce!==Le&&(n.activeTexture(Le),ce=Le),n.bindTexture(G,Ce||ne[G]),Fe.type=G,Fe.texture=Ce)}function R(){let G=he[ce];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(G){ve.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ve.copy(G))}function ze(G){Ee.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function Se(G,Ce){let Le=c.get(Ce);Le===void 0&&(Le=new WeakMap,c.set(Ce,Le));let Fe=Le.get(G);Fe===void 0&&(Fe=n.getUniformBlockIndex(Ce,G.name),Le.set(G,Fe))}function Re(G,Ce){let Fe=c.get(Ce).get(G);l.get(Ce)!==Fe&&(n.uniformBlockBinding(Ce,Fe,G.__bindingPointIndex),l.set(Ce,Fe))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,he={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,b=null,w=null,v=null,T=null,C=null,D=new Be(0,0,0),U=0,S=!1,_=null,A=null,B=null,F=null,H=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ye,bindFramebuffer:ee,drawBuffers:oe,useProgram:Q,setBlending:Y,setMaterial:I,setFlipSided:z,setCullFace:O,setLineWidth:j,setPolygonOffset:q,setScissorTest:ie,activeTexture:Me,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:pe,texImage3D:ue,updateUBOMapping:Se,uniformBlockBinding:Re,texStorage2D:fe,texStorage3D:xe,texSubImage2D:X,texSubImage3D:re,compressedTexSubImage2D:J,compressedTexSubImage3D:be,scissor:Te,viewport:ze,reset:He}}function KS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return h?new OffscreenCanvas(R,y):Dr("canvas")}function x(R,y,L){let X=1,re=Pe(R);if((re.width>L||re.height>L)&&(X=L/Math.max(re.width,re.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(X*re.width),be=Math.floor(X*re.height);d===void 0&&(d=p(J,be));let fe=y?p(J,be):d;return fe.width=J,fe.height=be,fe.getContext("2d").drawImage(R,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+be+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,L,X,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=y;if(y===n.RED&&(L===n.FLOAT&&(J=n.R32F),L===n.HALF_FLOAT&&(J=n.R16F),L===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.R8UI),L===n.UNSIGNED_SHORT&&(J=n.R16UI),L===n.UNSIGNED_INT&&(J=n.R32UI),L===n.BYTE&&(J=n.R8I),L===n.SHORT&&(J=n.R16I),L===n.INT&&(J=n.R32I)),y===n.RG&&(L===n.FLOAT&&(J=n.RG32F),L===n.HALF_FLOAT&&(J=n.RG16F),L===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RG8UI),L===n.UNSIGNED_SHORT&&(J=n.RG16UI),L===n.UNSIGNED_INT&&(J=n.RG32UI),L===n.BYTE&&(J=n.RG8I),L===n.SHORT&&(J=n.RG16I),L===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGB8UI),L===n.UNSIGNED_SHORT&&(J=n.RGB16UI),L===n.UNSIGNED_INT&&(J=n.RGB32UI),L===n.BYTE&&(J=n.RGB8I),L===n.SHORT&&(J=n.RGB16I),L===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),L===n.UNSIGNED_INT&&(J=n.RGBA32UI),L===n.BYTE&&(J=n.RGBA8I),L===n.SHORT&&(J=n.RGBA16I),L===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let be=re?Qo:ct.getTransfer(X);L===n.FLOAT&&(J=n.RGBA32F),L===n.HALF_FLOAT&&(J=n.RGBA16F),L===n.UNSIGNED_BYTE&&(J=be===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,y){let L;return R?y===null||y===ss||y===Kr?L=n.DEPTH24_STENCIL8:y===ri?L=n.DEPTH32F_STENCIL8:y===Jr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ss||y===Kr?L=n.DEPTH_COMPONENT24:y===ri?L=n.DEPTH_COMPONENT32F:y===Jr&&(L=n.DEPTH_COMPONENT16),L}function T(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){let y=R.target;y.removeEventListener("dispose",C),U(y),y.isVideoTexture&&u.delete(y)}function D(R){let y=R.target;y.removeEventListener("dispose",D),_(y)}function U(R){let y=i.get(R);if(y.__webglInit===void 0)return;let L=R.source,X=f.get(L);if(X){let re=X[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(X).length===0&&f.delete(L)}i.remove(R)}function S(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let L=R.source,X=f.get(L);delete X[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let re=0;re<y.__webglFramebuffer[X].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[X][re]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=R.textures;for(let X=0,re=L.length;X<re;X++){let J=i.get(L[X]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(R)}let A=0;function B(){A=0}function F(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function H(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){let L=i.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(L,R,y);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function V(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){ne(L,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function te(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){ne(L,R,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function N(R,y){let L=i.get(R);if(R.version>0&&L.__version!==R.version){se(L,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let ce={[di]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},he={[on]:n.NEAREST,[pg]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[kc]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},Z={[yg]:n.NEVER,[wg]:n.ALWAYS,[vg]:n.LESS,[Qd]:n.LEQUAL,[_g]:n.EQUAL,[Sg]:n.GEQUAL,[Mg]:n.GREATER,[bg]:n.NOTEQUAL};function me(R,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===kc||y.magFilter===Ba||y.magFilter===An||y.minFilter===an||y.minFilter===kc||y.minFilter===Ba||y.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Ba&&y.minFilter!==An||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(R,y){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));let X=y.source,re=f.get(X);re===void 0&&(re={},f.set(X,re));let J=H(y);if(J!==R.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),re[J].usedTimes++;let be=re[R.__cacheKey];be!==void 0&&(re[R.__cacheKey].usedTimes--,be.usedTimes===0&&S(y)),R.__cacheKey=J,R.__webglTexture=re[J].texture}return L}function Ee(R,y,L){return Math.floor(Math.floor(R/L)/y)}function _e(R,y,L,X){let J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,X,y.data);else{J.sort((ue,Te)=>ue.start-Te.start);let be=0;for(let ue=1;ue<J.length;ue++){let Te=J[be],ze=J[ue],Se=Te.start+Te.count,Re=Ee(ze.start,y.width,4),He=Ee(Te.start,y.width,4);ze.start<=Se+1&&Re===He&&Ee(ze.start+ze.count-1,y.width,4)===Re?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++be,J[be]=ze)}J.length=be+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Te=J.length;ue<Te;ue++){let ze=J[ue],Se=Math.floor(ze.start/4),Re=Math.ceil(ze.count/4),He=Se%y.width,G=Math.floor(Se/y.width),Ce=Re,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,He,G,Ce,Le,L,X,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function ne(R,y,L){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);let re=ve(R,y),J=y.source;t.bindTexture(X,R.__webglTexture,n.TEXTURE0+L);let be=i.get(J);if(J.version!==be.__version||re===!0){t.activeTexture(n.TEXTURE0+L);let fe=ct.getPrimaries(ct.workingColorSpace),xe=y.colorSpace===Ni?null:ct.getPrimaries(y.colorSpace),pe=y.colorSpace===Ni||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ue=x(y.image,!1,s.maxTextureSize);ue=Me(y,ue);let Te=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Se=w(y.internalFormat,Te,ze,y.colorSpace,y.isVideoTexture);me(X,y);let Re,He=y.mipmaps,G=y.isVideoTexture!==!0,Ce=be.__version===void 0||re===!0,Le=J.dataReady,Fe=T(y,ue);if(y.isDepthTexture)Se=v(y.format===$r,y.type),Ce&&(G?t.texStorage2D(n.TEXTURE_2D,1,Se,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Se,ue.width,ue.height,0,Te,ze,null));else if(y.isDataTexture)if(He.length>0){G&&Ce&&t.texStorage2D(n.TEXTURE_2D,Fe,Se,He[0].width,He[0].height);for(let we=0,ge=He.length;we<ge;we++)Re=He[we],G?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Re.width,Re.height,Te,ze,Re.data):t.texImage2D(n.TEXTURE_2D,we,Se,Re.width,Re.height,0,Te,ze,Re.data);y.generateMipmaps=!1}else G?(Ce&&t.texStorage2D(n.TEXTURE_2D,Fe,Se,ue.width,ue.height),Le&&_e(y,ue,Te,ze)):t.texImage2D(n.TEXTURE_2D,0,Se,ue.width,ue.height,0,Te,ze,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){G&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Se,He[0].width,He[0].height,ue.depth);for(let we=0,ge=He.length;we<ge;we++)if(Re=He[we],y.format!==En)if(Te!==null)if(G){if(Le)if(y.layerUpdates.size>0){let Ge=lf(Re.width,Re.height,y.format,y.type);for(let et of y.layerUpdates){let Et=Re.data.subarray(et*Ge/Re.data.BYTES_PER_ELEMENT,(et+1)*Ge/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,et,Re.width,Re.height,1,Te,Et)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Re.width,Re.height,ue.depth,Te,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,Se,Re.width,Re.height,ue.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Re.width,Re.height,ue.depth,Te,ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,Se,Re.width,Re.height,ue.depth,0,Te,ze,Re.data)}else{G&&Ce&&t.texStorage2D(n.TEXTURE_2D,Fe,Se,He[0].width,He[0].height);for(let we=0,ge=He.length;we<ge;we++)Re=He[we],y.format!==En?Te!==null?G?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,we,Se,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Re.width,Re.height,Te,ze,Re.data):t.texImage2D(n.TEXTURE_2D,we,Se,Re.width,Re.height,0,Te,ze,Re.data)}else if(y.isDataArrayTexture)if(G){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Se,ue.width,ue.height,ue.depth),Le)if(y.layerUpdates.size>0){let we=lf(ue.width,ue.height,y.format,y.type);for(let ge of y.layerUpdates){let Ge=ue.data.subarray(ge*we/ue.data.BYTES_PER_ELEMENT,(ge+1)*we/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ue.width,ue.height,1,Te,ze,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,ze,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ue.width,ue.height,ue.depth,0,Te,ze,ue.data);else if(y.isData3DTexture)G?(Ce&&t.texStorage3D(n.TEXTURE_3D,Fe,Se,ue.width,ue.height,ue.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ue.width,ue.height,ue.depth,0,Te,ze,ue.data);else if(y.isFramebufferTexture){if(Ce)if(G)t.texStorage2D(n.TEXTURE_2D,Fe,Se,ue.width,ue.height);else{let we=ue.width,ge=ue.height;for(let Ge=0;Ge<Fe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Se,we,ge,0,Te,ze,null),we>>=1,ge>>=1}}else if(He.length>0){if(G&&Ce){let we=Pe(He[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Se,we.width,we.height)}for(let we=0,ge=He.length;we<ge;we++)Re=He[we],G?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Te,ze,Re):t.texImage2D(n.TEXTURE_2D,we,Se,Te,ze,Re);y.generateMipmaps=!1}else if(G){if(Ce){let we=Pe(ue);t.texStorage2D(n.TEXTURE_2D,Fe,Se,we.width,we.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,ze,ue)}else t.texImage2D(n.TEXTURE_2D,0,Se,Te,ze,ue);g(y)&&m(X),be.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function se(R,y,L){if(y.image.length!==6)return;let X=ve(R,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+L);let J=i.get(re);if(re.version!==J.__version||X===!0){t.activeTexture(n.TEXTURE0+L);let be=ct.getPrimaries(ct.workingColorSpace),fe=y.colorSpace===Ni?null:ct.getPrimaries(y.colorSpace),xe=y.colorSpace===Ni||be===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let pe=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ge=0;ge<6;ge++)!pe&&!ue?Te[ge]=x(y.image[ge],!0,s.maxCubemapSize):Te[ge]=ue?y.image[ge].image:y.image[ge],Te[ge]=Me(y,Te[ge]);let ze=Te[0],Se=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),He=w(y.internalFormat,Se,Re,y.colorSpace),G=y.isVideoTexture!==!0,Ce=J.__version===void 0||X===!0,Le=re.dataReady,Fe=T(y,ze);me(n.TEXTURE_CUBE_MAP,y);let we;if(pe){G&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,He,ze.width,ze.height);for(let ge=0;ge<6;ge++){we=Te[ge].mipmaps;for(let Ge=0;Ge<we.length;Ge++){let et=we[Ge];y.format!==En?Se!==null?G?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,et.width,et.height,Se,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,He,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,et.width,et.height,Se,Re,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,He,et.width,et.height,0,Se,Re,et.data)}}}else{if(we=y.mipmaps,G&&Ce){we.length>0&&Fe++;let ge=Pe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,He,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ue){G?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Te[ge].width,Te[ge].height,Se,Re,Te[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,He,Te[ge].width,Te[ge].height,0,Se,Re,Te[ge].data);for(let Ge=0;Ge<we.length;Ge++){let Et=we[Ge].image[ge].image;G?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Et.width,Et.height,Se,Re,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,He,Et.width,Et.height,0,Se,Re,Et.data)}}else{G?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Se,Re,Te[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,He,Se,Re,Te[ge]);for(let Ge=0;Ge<we.length;Ge++){let et=we[Ge];G?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Se,Re,et.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,He,Se,Re,et.image[ge])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),J.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ye(R,y,L,X,re,J){let be=r.convert(L.format,L.colorSpace),fe=r.convert(L.type),xe=w(L.internalFormat,be,fe,L.colorSpace),pe=i.get(y),ue=i.get(L);if(ue.__renderTarget=y,!pe.__hasExternalTextures){let Te=Math.max(1,y.width>>J),ze=Math.max(1,y.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,xe,Te,ze,y.depth,0,be,fe,null):t.texImage2D(re,J,xe,Te,ze,0,be,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,re,ue.__webglTexture,0,j(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,re,ue.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let X=y.depthTexture,re=X&&X.isDepthTexture?X.type:null,J=v(y.stencilBuffer,re),be=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=j(y);q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,J,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,R)}else{let X=y.textures;for(let re=0;re<X.length;re++){let J=X[re],be=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),xe=w(J.internalFormat,be,fe,J.colorSpace),pe=j(y);L&&q(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,xe,y.width,y.height):q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let re=X.__webglTexture,J=j(y);if(y.depthTexture.format===Ir)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===$r)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Q(R){let y=i.get(R),L=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",re)};X.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let X=R.texture.mipmaps;X&&X.length>0?oe(y.__webglFramebuffer[0],R):oe(y.__webglFramebuffer,R)}else if(L){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),ee(y.__webglDepthbuffer[X],R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ee(y.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(R,y,L){let X=i.get(R);y!==void 0&&ye(X.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Q(R)}function P(R){let y=R.texture,L=i.get(R),X=i.get(y);R.addEventListener("dispose",D);let re=R.textures,J=R.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,o.memory.textures++),J){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)L.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else L.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)L.__webglFramebuffer[fe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(be)for(let fe=0,xe=re.length;fe<xe;fe++){let pe=i.get(re[fe]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&q(R)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){let xe=re[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);let pe=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),Te=w(xe.internalFormat,pe,ue,xe.colorSpace,R.isXRRenderTarget===!0),ze=j(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(L.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),me(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(L.__webglFramebuffer[fe][xe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ye(L.__webglFramebuffer[fe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,xe=re.length;fe<xe;fe++){let pe=re[fe],ue=i.get(pe),Te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ue.__webglTexture),me(Te,pe),ye(L.__webglFramebuffer,R,pe,n.COLOR_ATTACHMENT0+fe,Te,0),g(pe)&&m(Te)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),me(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(L.__webglFramebuffer[xe],R,y,n.COLOR_ATTACHMENT0,fe,xe);else ye(L.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,fe,0);g(y)&&m(fe),t.unbindTexture()}R.depthBuffer&&Q(R)}function Y(R){let y=R.textures;for(let L=0,X=y.length;L<X;L++){let re=y[L];if(g(re)){let J=b(R),be=i.get(re).__webglTexture;t.bindTexture(J,be),m(J),t.unbindTexture()}}}let I=[],z=[];function O(R){if(R.samples>0){if(q(R)===!1){let y=R.textures,L=R.width,X=R.height,re=n.COLOR_BUFFER_BIT,J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(R),fe=y.length>1;if(fe)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let ue=i.get(y[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,re,n.NEAREST),l===!0&&(I.length=0,z.length=0,I.push(n.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(I.push(J),z.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let ue=i.get(y[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function j(R){return Math.min(s.maxSamples,R.samples)}function q(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Me(R,y){let L=R.colorSpace,X=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==Is&&L!==Ni&&(ct.getTransfer(L)===vt?(X!==En||re!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=N,this.rebindTextures=de,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=q}function $S(n,e){function t(i,s=Ni){let r,o=ct.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xd)return n.BYTE;if(i===Yd)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Jd)return n.ALPHA;if(i===Kd)return n.RGB;if(i===En)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===$d)return n.RG;if(i===Yc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===Oa||i===za||i===Va||i===ka)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Jc||i===Kc||i===$c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===eu||i===tu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qc||i===eu)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===iu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===au)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===du)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gu||i===xu||i===yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gu)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===_u||i===Mu||i===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
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

}`,Mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:QS,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Yt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bf=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new Mf,m={},b=t.getContextAttributes(),w=null,v=null,T=[],C=[],D=new Ae,U=null,S=new Gt;S.viewport=new lt;let _=new Gt;_.viewport=new lt;let A=[S,_],B=new Pc,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let se=T[ne];return se===void 0&&(se=new Br,T[ne]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ne){let se=T[ne];return se===void 0&&(se=new Br,T[ne]=se),se.getGripSpace()},this.getHand=function(ne){let se=T[ne];return se===void 0&&(se=new Br,T[ne]=se),se.getHandSpace()};function W(ne){let se=C.indexOf(ne.inputSource);if(se===-1)return;let ye=T[se];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||o),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let ne=0;ne<T.length;ne++){let se=C[ne];se!==null&&(C[ne]=null,T[ne].disconnect(se))}F=null,H=null,g.reset();for(let ne in m)delete m[ne];e.setRenderTarget(w),h=null,f=null,d=null,s=null,v=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ee=null,oe=null;b.depth&&(oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?$r:Ir,ee=b.stencil?Kr:ss);let Q={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Tn(f.textureWidth,f.textureHeight,{format:En,type:zn,depthTexture:new fa(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Tn(h.framebufferWidth,h.framebufferHeight,{format:En,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(ne){for(let se=0;se<ne.removed.length;se++){let ye=ne.removed[se],ee=C.indexOf(ye);ee>=0&&(C[ee]=null,T[ee].disconnect(ye))}for(let se=0;se<ne.added.length;se++){let ye=ne.added[se],ee=C.indexOf(ye);if(ee===-1){for(let Q=0;Q<T.length;Q++)if(Q>=C.length){C.push(ye),ee=Q;break}else if(C[Q]===null){C[Q]=ye,ee=Q;break}if(ee===-1)break}let oe=T[ee];oe&&oe.connect(ye)}}let N=new M,ce=new M;function he(ne,se,ye){N.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);let ee=N.distanceTo(ce),oe=se.projectionMatrix.elements,Q=ye.projectionMatrix.elements,de=oe[14]/(oe[10]-1),P=oe[14]/(oe[10]+1),Y=(oe[9]+1)/oe[5],I=(oe[9]-1)/oe[5],z=(oe[8]-1)/oe[0],O=(Q[8]+1)/Q[0],j=de*z,q=de*O,ie=ee/(-z+O),Me=ie*-z;if(se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Me),ne.translateZ(ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),oe[10]===-1)ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Pe=de+ie,R=P+ie,y=j-Me,L=q+(ee-Me),X=Y*P/R*Pe,re=I*P/R*Pe;ne.projectionMatrix.makePerspective(y,L,X,re,Pe,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Z(ne,se){se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let se=ne.near,ye=ne.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),B.near=_.near=S.near=se,B.far=_.far=S.far=ye,(F!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,H=B.far),B.layers.mask=ne.layers.mask|6,S.layers.mask=B.layers.mask&3,_.layers.mask=B.layers.mask&5;let ee=ne.parent,oe=B.cameras;Z(B,ee);for(let Q=0;Q<oe.length;Q++)Z(oe[Q],ee);oe.length===2?he(B,S,_):B.projectionMatrix.copy(S.projectionMatrix),me(ne,B,ee)};function me(ne,se,ye){ye===null?ne.matrix.copy(se.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Lr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(ne){return m[ne]};let ve=null;function Ee(ne,se){if(u=se.getViewerPose(c||o),p=se,u!==null){let ye=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ee=!1;ye.length!==B.cameras.length&&(B.cameras.length=0,ee=!0);for(let P=0;P<ye.length;P++){let Y=ye[P],I=null;if(h!==null)I=h.getViewport(Y);else{let O=d.getViewSubImage(f,Y);I=O.viewport,P===0&&(e.setRenderTargetTextures(v,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(v))}let z=A[P];z===void 0&&(z=new Gt,z.layers.enable(P),z.viewport=new lt,A[P]=z),z.matrix.fromArray(Y.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Y.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(I.x,I.y,I.width,I.height),P===0&&(B.matrix.copy(z.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ee===!0&&B.cameras.push(z)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let P=d.getDepthInformation(ye[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(oe&&oe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<ye.length;P++){let Y=ye[P].camera;if(Y){let I=m[Y];I||(I=new pa,m[Y]=I);let z=d.getCameraImage(Y);I.sourceTexture=z}}}}for(let ye=0;ye<T.length;ye++){let ee=C[ye],oe=T[ye];ee!==null&&oe!==void 0&&oe.update(ee,se,c||o)}ve&&ve(ne,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let _e=new i0;_e.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}},Hs=new ln,tw=new at;function nw(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,sf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,Hs.copy(v),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),g.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Hs)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let v=w.program;i.uniformBlockBinding(b,v)}function c(b,w){let v=s[b.id];v===void 0&&(p(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",g));let T=w.program;i.updateUBOMapping(b,T);let C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){let w=d();b.__bindingPointIndex=w;let v=n.createBuffer(),T=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=s[b.id],v=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,D=v.length;C<D;C++){let U=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,_=U.length;S<_;S++){let A=U[S];if(h(A,C,S,T)===!0){let B=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],H=0;for(let W=0;W<F.length;W++){let V=F[W],te=x(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+H,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,v,T){let C=b.value,D=w+"_"+v;if(T[D]===void 0)return typeof C=="number"||typeof C=="boolean"?T[D]=C:T[D]=C.clone(),!0;{let U=T[D];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return T[D]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function p(b){let w=b.uniforms,v=0,T=16;for(let D=0,U=w.length;D<U;D++){let S=Array.isArray(w[D])?w[D]:[w[D]];for(let _=0,A=S.length;_<A;_++){let B=S[_],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,W=F.length;H<W;H++){let V=F[H],te=x(V),N=v%T,ce=N%te.boundary,he=N+ce;v+=ce,he!==0&&T-he<te.storage&&(v+=T-he),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=te.storage}}}let C=v%T;return C>0&&(v+=T-C),b.__size=v,b.__cache={},this}function x(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){let w=b.target;w.removeEventListener("dispose",g);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Cu=class{constructor(e={}){let{canvas:t=Tg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=yt;let C=0,D=0,U=null,S=-1,_=null,A=new lt,B=new lt,F=null,H=new Be(0),W=0,V=t.width,te=t.height,N=1,ce=null,he=null,Z=new lt(0,0,V,te),me=new lt(0,0,V,te),ve=!1,Ee=new kr,_e=!1,ne=!1,se=new at,ye=new M,ee=new lt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function de(){return U===null?N:1}let P=i;function Y(E,K){return t.getContext(E,K)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",we,!1),P===null){let K="webgl2";if(P=Y(K,E),P===null)throw Y(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let I,z,O,j,q,ie,Me,Pe,R,y,L,X,re,J,be,fe,xe,pe,ue,Te,ze,Se,Re,He;function G(){I=new M1(P),I.init(),Se=new $S(P,I),z=new p1(P,I,e,Se),O=new JS(P,I),z.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),j=new w1(P),q=new BS,ie=new KS(P,I,O,q,z,Se,j),Me=new g1(v),Pe=new _1(v),R=new P_(P),Re=new d1(P,R),y=new b1(P,R,j,Re),L=new A1(P,y,R,j),ue=new T1(P,z,ie),fe=new m1(q),X=new NS(v,Me,Pe,I,z,Re,fe),re=new nw(v,q),J=new zS,be=new qS(I),pe=new h1(v,Me,Pe,O,L,h,l),xe=new ZS(v,L,z),He=new iw(P,j,z,O),Te=new f1(P,I,j),ze=new S1(P,I,j),j.programs=X.programs,v.capabilities=z,v.extensions=I,v.properties=q,v.renderLists=J,v.shadowMap=xe,v.state=O,v.info=j}G();let Ce=new bf(v,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=I.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=I.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(V,te,!1))},this.getSize=function(E){return E.set(V,te)},this.setSize=function(E,K,ae=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,te=K,t.width=Math.floor(E*N),t.height=Math.floor(K*N),ae===!0&&(t.style.width=E+"px",t.style.height=K+"px"),this.setViewport(0,0,E,K)},this.getDrawingBufferSize=function(E){return E.set(V*N,te*N).floor()},this.setDrawingBufferSize=function(E,K,ae){V=E,te=K,N=ae,t.width=Math.floor(E*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,E,K)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,K,ae,le){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,K,ae,le),O.viewport(A.copy(Z).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,K,ae,le){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,K,ae,le),O.scissor(B.copy(me).multiplyScalar(N).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){O.setScissorTest(ve=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(E=!0,K=!0,ae=!0){let le=0;if(E){let $=!1;if(U!==null){let Ie=U.texture.format;$=Ie===Zc||Ie===Yc||Ie===Xc}if($){let Ie=U.texture.type,Ue=Ie===zn||Ie===ss||Ie===Jr||Ie===Kr||Ie===Hc||Ie===Wc,Ve=pe.getClearColor(),Oe=pe.getClearAlpha(),Ye=Ve.r,je=Ve.g,We=Ve.b;Ue?(p[0]=Ye,p[1]=je,p[2]=We,p[3]=Oe,P.clearBufferuiv(P.COLOR,0,p)):(x[0]=Ye,x[1]=je,x[2]=We,x[3]=Oe,P.clearBufferiv(P.COLOR,0,x))}else le|=P.COLOR_BUFFER_BIT}K&&(le|=P.DEPTH_BUFFER_BIT),ae&&(le|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",we,!1),pe.dispose(),J.dispose(),be.dispose(),q.dispose(),Me.dispose(),Pe.dispose(),L.dispose(),Re.dispose(),He.dispose(),X.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ci),Ce.removeEventListener("sessionend",jp),bs.stop()};function Le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=j.autoReset,K=xe.enabled,ae=xe.autoUpdate,le=xe.needsUpdate,$=xe.type;G(),j.autoReset=E,xe.enabled=K,xe.autoUpdate=ae,xe.needsUpdate=le,xe.type=$}function we(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ge(E){let K=E.target;K.removeEventListener("dispose",ge),Ge(K)}function Ge(E){et(E),q.remove(E)}function et(E){let K=q.get(E).programs;K!==void 0&&(K.forEach(function(ae){X.releaseProgram(ae)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,K,ae,le,$,Ie){K===null&&(K=oe);let Ue=$.isMesh&&$.matrixWorld.determinant()<0,Ve=Ky(E,K,ae,le,$);O.setMaterial(le,Ue);let Oe=ae.index,Ye=1;if(le.wireframe===!0){if(Oe=y.getWireframeAttribute(ae),Oe===void 0)return;Ye=2}let je=ae.drawRange,We=ae.attributes.position,ot=je.start*Ye,_t=(je.start+je.count)*Ye;Ie!==null&&(ot=Math.max(ot,Ie.start*Ye),_t=Math.min(_t,(Ie.start+Ie.count)*Ye)),Oe!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Oe.count)):We!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,We.count));let kt=_t-ot;if(kt<0||kt===1/0)return;Re.setup($,le,Ve,ae,Oe);let Rt,St=Te;if(Oe!==null&&(Rt=R.get(Oe),St=ze,St.setIndex(Rt)),$.isMesh)le.wireframe===!0?(O.setLineWidth(le.wireframeLinewidth*de()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if($.isLine){let Xe=le.linewidth;Xe===void 0&&(Xe=1),O.setLineWidth(Xe*de()),$.isLineSegments?St.setMode(P.LINES):$.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else $.isPoints?St.setMode(P.POINTS):$.isSprite&&St.setMode(P.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xe=$._multiDrawStarts,Nt=$._multiDrawCounts,ut=$._multiDrawCount,Dn=Oe?R.get(Oe).bytesPerElement:1,cr=q.get(le).currentProgram.getUniforms();for(let Un=0;Un<ut;Un++)cr.setValue(P,"_gl_DrawID",Un),St.render(Xe[Un]/Dn,Nt[Un])}else if($.isInstancedMesh)St.renderInstances(ot,kt,$.count);else if(ae.isInstancedBufferGeometry){let Xe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Nt=Math.min(ae.instanceCount,Xe);St.renderInstances(ot,kt,Nt)}else St.render(ot,kt)};function Et(E,K,ae){E.transparent===!0&&E.side===Wt&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Ml(E,K,ae),E.side=si,E.needsUpdate=!0,Ml(E,K,ae),E.side=Wt):Ml(E,K,ae)}this.compile=function(E,K,ae=null){ae===null&&(ae=E),m=be.get(ae),m.init(K),w.push(m),ae.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),E!==ae&&E.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let le=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ie=$.material;if(Ie)if(Array.isArray(Ie))for(let Ue=0;Ue<Ie.length;Ue++){let Ve=Ie[Ue];Et(Ve,ae,$),le.add(Ve)}else Et(Ie,ae,$),le.add(Ie)}),m=w.pop(),le},this.compileAsync=function(E,K,ae=null){let le=this.compile(E,K,ae);return new Promise($=>{function Ie(){if(le.forEach(function(Ue){q.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){$(E);return}setTimeout(Ie,10)}I.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ft=null;function bi(E){ft&&ft(E)}function ci(){bs.stop()}function jp(){bs.start()}let bs=new i0;bs.setAnimationLoop(bi),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(E){ft=E,Ce.setAnimationLoop(E),E===null?bs.stop():bs.start()},Ce.addEventListener("sessionstart",ci),Ce.addEventListener("sessionend",jp),this.render=function(E,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,K,U),m=be.get(E,w.length),m.init(K),w.push(m),se.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ee.setFromProjectionMatrix(se,ii,K.reversedDepth),ne=this.localClippingEnabled,_e=fe.init(this.clippingPlanes,ne),g=J.get(E,b.length),g.init(),b.push(g),Ce.enabled===!0&&Ce.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&$h(Ie,K,-1/0,v.sortObjects)}$h(E,K,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,he),Q=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Q&&pe.addToRenderList(g,E),this.info.render.frame++,_e===!0&&fe.beginShadows();let ae=m.state.shadowsArray;xe.render(ae,E,K),_e===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=g.opaque,$=g.transmissive;if(m.setupLights(),K.isArrayCamera){let Ie=K.cameras;if($.length>0)for(let Ue=0,Ve=Ie.length;Ue<Ve;Ue++){let Oe=Ie[Ue];Kp(le,$,E,Oe)}Q&&pe.render(E);for(let Ue=0,Ve=Ie.length;Ue<Ve;Ue++){let Oe=Ie[Ue];Jp(g,E,Oe,Oe.viewport)}}else $.length>0&&Kp(le,$,E,K),Q&&pe.render(E),Jp(g,E,K);U!==null&&D===0&&(ie.updateMultisampleRenderTarget(U),ie.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(v,E,K),Re.resetDefaultState(),S=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],_e===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function $h(E,K,ae,le){if(E.visible===!1)return;if(E.layers.test(K.layers)){if(E.isGroup)ae=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(K);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ee.intersectsSprite(E)){le&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);let Ue=L.update(E),Ve=E.material;Ve.visible&&g.push(E,Ue,Ve,ae,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ee.intersectsObject(E))){let Ue=L.update(E),Ve=E.material;if(le&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ee.copy(Ue.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(Ve)){let Oe=Ue.groups;for(let Ye=0,je=Oe.length;Ye<je;Ye++){let We=Oe[Ye],ot=Ve[We.materialIndex];ot&&ot.visible&&g.push(E,Ue,ot,ae,ee.z,We)}}else Ve.visible&&g.push(E,Ue,Ve,ae,ee.z,null)}}let Ie=E.children;for(let Ue=0,Ve=Ie.length;Ue<Ve;Ue++)$h(Ie[Ue],K,ae,le)}function Jp(E,K,ae,le){let $=E.opaque,Ie=E.transmissive,Ue=E.transparent;m.setupLightsView(ae),_e===!0&&fe.setGlobalState(v.clippingPlanes,ae),le&&O.viewport(A.copy(le)),$.length>0&&_l($,K,ae),Ie.length>0&&_l(Ie,K,ae),Ue.length>0&&_l(Ue,K,ae),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Kp(E,K,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[le.id]===void 0&&(m.state.transmissionRenderTarget[le.id]=new Tn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?mi:zn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let Ie=m.state.transmissionRenderTarget[le.id],Ue=le.viewport||A;Ie.setSize(Ue.z*v.transmissionResolutionScale,Ue.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),Oe=v.getActiveCubeFace(),Ye=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(H),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Q&&pe.render(ae);let je=v.toneMapping;v.toneMapping=Fi;let We=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),m.setupLightsView(le),_e===!0&&fe.setGlobalState(v.clippingPlanes,le),_l(E,ae,le),ie.updateMultisampleRenderTarget(Ie),ie.updateRenderTargetMipmap(Ie),I.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let _t=0,kt=K.length;_t<kt;_t++){let Rt=K[_t],St=Rt.object,Xe=Rt.geometry,Nt=Rt.material,ut=Rt.group;if(Nt.side===Wt&&St.layers.test(le.layers)){let Dn=Nt.side;Nt.side=un,Nt.needsUpdate=!0,$p(St,ae,le,Xe,Nt,ut),Nt.side=Dn,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(ie.updateMultisampleRenderTarget(Ie),ie.updateRenderTargetMipmap(Ie))}v.setRenderTarget(Ve,Oe,Ye),v.setClearColor(H,W),We!==void 0&&(le.viewport=We),v.toneMapping=je}function _l(E,K,ae){let le=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ie=E.length;$<Ie;$++){let Ue=E[$],Ve=Ue.object,Oe=Ue.geometry,Ye=Ue.group,je=Ue.material;je.allowOverride===!0&&le!==null&&(je=le),Ve.layers.test(ae.layers)&&$p(Ve,K,ae,Oe,je,Ye)}}function $p(E,K,ae,le,$,Ie){E.onBeforeRender(v,K,ae,le,$,Ie),E.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(v,K,ae,le,E,Ie),$.transparent===!0&&$.side===Wt&&$.forceSinglePass===!1?($.side=un,$.needsUpdate=!0,v.renderBufferDirect(ae,K,le,$,E,Ie),$.side=si,$.needsUpdate=!0,v.renderBufferDirect(ae,K,le,$,E,Ie),$.side=Wt):v.renderBufferDirect(ae,K,le,$,E,Ie),E.onAfterRender(v,K,ae,le,$,Ie)}function Ml(E,K,ae){K.isScene!==!0&&(K=oe);let le=q.get(E),$=m.state.lights,Ie=m.state.shadowsArray,Ue=$.state.version,Ve=X.getParameters(E,$.state,Ie,K,ae),Oe=X.getProgramCacheKey(Ve),Ye=le.programs;le.environment=E.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(E.isMeshStandardMaterial?Pe:Me).get(E.envMap||le.environment),le.envMapRotation=le.environment!==null&&E.envMap===null?K.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",ge),Ye=new Map,le.programs=Ye);let je=Ye.get(Oe);if(je!==void 0){if(le.currentProgram===je&&le.lightsStateVersion===Ue)return em(E,Ve),je}else Ve.uniforms=X.getUniforms(E),E.onBeforeCompile(Ve,v),je=X.acquireProgram(Ve,Oe),Ye.set(Oe,je),le.uniforms=Ve.uniforms;let We=le.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=fe.uniform),em(E,Ve),le.needsLights=Qy(E),le.lightsStateVersion=Ue,le.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=je,le.uniformsList=null,je}function Qp(E){if(E.uniformsList===null){let K=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(K.seq,E.uniforms)}return E.uniformsList}function em(E,K){let ae=q.get(E);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Ky(E,K,ae,le,$){K.isScene!==!0&&(K=oe),ie.resetTextureUnits();let Ie=K.fog,Ue=le.isMeshStandardMaterial?K.environment:null,Ve=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Is,Oe=(le.isMeshStandardMaterial?Pe:Me).get(le.envMap||Ue),Ye=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,je=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),We=!!ae.morphAttributes.position,ot=!!ae.morphAttributes.normal,_t=!!ae.morphAttributes.color,kt=Fi;le.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(kt=v.toneMapping);let Rt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=Rt!==void 0?Rt.length:0,Xe=q.get(le),Nt=m.state.lights;if(_e===!0&&(ne===!0||E!==_)){let vn=E===_&&le.id===S;fe.setState(le,E,vn)}let ut=!1;le.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==Ve||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Oe||le.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==je||Xe.morphTargets!==We||Xe.morphNormals!==ot||Xe.morphColors!==_t||Xe.toneMapping!==kt||Xe.morphTargetsCount!==St)&&(ut=!0):(ut=!0,Xe.__version=le.version);let Dn=Xe.currentProgram;ut===!0&&(Dn=Ml(le,K,$));let cr=!1,Un=!1,Fo=!1,Bt=Dn.getUniforms(),kn=Xe.uniforms;if(O.useProgram(Dn.program)&&(cr=!0,Un=!0,Fo=!0),le.id!==S&&(S=le.id,Un=!0),cr||_!==E){O.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Bt.setValue(P,"projectionMatrix",E.projectionMatrix),Bt.setValue(P,"viewMatrix",E.matrixWorldInverse);let bn=Bt.map.cameraPosition;bn!==void 0&&bn.setValue(P,ye.setFromMatrixPosition(E.matrixWorld)),z.logarithmicDepthBuffer&&Bt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Un=!0,Fo=!0)}if($.isSkinnedMesh){Bt.setOptional(P,$,"bindMatrix"),Bt.setOptional(P,$,"bindMatrixInverse");let vn=$.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Bt.setValue(P,"boneTexture",vn.boneTexture,ie))}$.isBatchedMesh&&(Bt.setOptional(P,$,"batchingTexture"),Bt.setValue(P,"batchingTexture",$._matricesTexture,ie),Bt.setOptional(P,$,"batchingIdTexture"),Bt.setValue(P,"batchingIdTexture",$._indirectTexture,ie),Bt.setOptional(P,$,"batchingColorTexture"),$._colorsTexture!==null&&Bt.setValue(P,"batchingColorTexture",$._colorsTexture,ie));let Gn=ae.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ue.update($,ae,Dn),(Un||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,Bt.setValue(P,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(kn.envMap.value=Oe,kn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(kn.envMapIntensity.value=K.environmentIntensity),Un&&(Bt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&$y(kn,Fo),Ie&&le.fog===!0&&re.refreshFogUniforms(kn,Ie),re.refreshMaterialUniforms(kn,le,N,te,m.state.transmissionRenderTarget[E.id]),to.upload(P,Qp(Xe),kn,ie)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(to.upload(P,Qp(Xe),kn,ie),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(P,"center",$.center),Bt.setValue(P,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(P,"normalMatrix",$.normalMatrix),Bt.setValue(P,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let vn=le.uniformsGroups;for(let bn=0,Qh=vn.length;bn<Qh;bn++){let Ss=vn[bn];He.update(Ss,Dn),He.bind(Ss,Dn)}}return Dn}function $y(E,K){E.ambientLightColor.needsUpdate=K,E.lightProbe.needsUpdate=K,E.directionalLights.needsUpdate=K,E.directionalLightShadows.needsUpdate=K,E.pointLights.needsUpdate=K,E.pointLightShadows.needsUpdate=K,E.spotLights.needsUpdate=K,E.spotLightShadows.needsUpdate=K,E.rectAreaLights.needsUpdate=K,E.hemisphereLights.needsUpdate=K}function Qy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,K,ae){let le=q.get(E);le.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=K,q.get(E.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,K){let ae=q.get(E);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0};let ev=P.createFramebuffer();this.setRenderTarget=function(E,K=0,ae=0){U=E,C=K,D=ae;let le=!0,$=null,Ie=!1,Ue=!1;if(E){let Oe=q.get(E);if(Oe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(P.FRAMEBUFFER,null),le=!1;else if(Oe.__webglFramebuffer===void 0)ie.setupRenderTarget(E);else if(Oe.__hasExternalTextures)ie.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let We=E.depthTexture;if(Oe.__boundDepthTexture!==We){if(We!==null&&q.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(E)}}let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ue=!0);let je=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[K])?$=je[K][ae]:$=je[K],Ie=!0):E.samples>0&&ie.useMultisampledRTT(E)===!1?$=q.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[ae]:$=je,A.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else A.copy(Z).multiplyScalar(N).floor(),B.copy(me).multiplyScalar(N).floor(),F=ve;if(ae!==0&&($=ev),O.bindFramebuffer(P.FRAMEBUFFER,$)&&le&&O.drawBuffers(E,$),O.viewport(A),O.scissor(B),O.setScissorTest(F),Ie){let Oe=q.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,ae)}else if(Ue){let Oe=K;for(let Ye=0;Ye<E.textures.length;Ye++){let je=q.get(E.textures[Ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ye,je.__webglTexture,ae,Oe)}}else if(E!==null&&ae!==0){let Oe=q.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,ae)}S=-1},this.readRenderTargetPixels=function(E,K,ae,le,$,Ie,Ue,Ve=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){O.bindFramebuffer(P.FRAMEBUFFER,Oe);try{let Ye=E.textures[Ve],je=Ye.format,We=Ye.type;if(!z.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=E.width-le&&ae>=0&&ae<=E.height-$&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ve),P.readPixels(K,ae,le,$,Se.convert(je),Se.convert(We),Ie))}finally{let Ye=U!==null?q.get(U).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(E,K,ae,le,$,Ie,Ue,Ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe)if(K>=0&&K<=E.width-le&&ae>=0&&ae<=E.height-$){O.bindFramebuffer(P.FRAMEBUFFER,Oe);let Ye=E.textures[Ve],je=Ye.format,We=Ye.type;if(!z.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.bufferData(P.PIXEL_PACK_BUFFER,Ie.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ve),P.readPixels(K,ae,le,$,Se.convert(je),Se.convert(We),0);let _t=U!==null?q.get(U).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,_t);let kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ag(P,kt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ot),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ie),P.deleteBuffer(ot),P.deleteSync(kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,K=null,ae=0){let le=Math.pow(2,-ae),$=Math.floor(E.image.width*le),Ie=Math.floor(E.image.height*le),Ue=K!==null?K.x:0,Ve=K!==null?K.y:0;ie.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,ae,0,0,Ue,Ve,$,Ie),O.unbindTexture()};let tv=P.createFramebuffer(),nv=P.createFramebuffer();this.copyTextureToTexture=function(E,K,ae=null,le=null,$=0,Ie=null){Ie===null&&($!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=$,$=0):Ie=0);let Ue,Ve,Oe,Ye,je,We,ot,_t,kt,Rt=E.isCompressedTexture?E.mipmaps[Ie]:E.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,Oe=ae.isBox3?ae.max.z-ae.min.z:1,Ye=ae.min.x,je=ae.min.y,We=ae.isBox3?ae.min.z:0;else{let Gn=Math.pow(2,-$);Ue=Math.floor(Rt.width*Gn),Ve=Math.floor(Rt.height*Gn),E.isDataArrayTexture?Oe=Rt.depth:E.isData3DTexture?Oe=Math.floor(Rt.depth*Gn):Oe=1,Ye=0,je=0,We=0}le!==null?(ot=le.x,_t=le.y,kt=le.z):(ot=0,_t=0,kt=0);let St=Se.convert(K.format),Xe=Se.convert(K.type),Nt;K.isData3DTexture?(ie.setTexture3D(K,0),Nt=P.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ie.setTexture2DArray(K,0),Nt=P.TEXTURE_2D_ARRAY):(ie.setTexture2D(K,0),Nt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,K.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,K.unpackAlignment);let ut=P.getParameter(P.UNPACK_ROW_LENGTH),Dn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cr=P.getParameter(P.UNPACK_SKIP_PIXELS),Un=P.getParameter(P.UNPACK_SKIP_ROWS),Fo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We);let Bt=E.isDataArrayTexture||E.isData3DTexture,kn=K.isDataArrayTexture||K.isData3DTexture;if(E.isDepthTexture){let Gn=q.get(E),vn=q.get(K),bn=q.get(Gn.__renderTarget),Qh=q.get(vn.__renderTarget);O.bindFramebuffer(P.READ_FRAMEBUFFER,bn.__webglFramebuffer),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qh.__webglFramebuffer);for(let Ss=0;Ss<Oe;Ss++)Bt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,q.get(E).__webglTexture,$,We+Ss),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,q.get(K).__webglTexture,Ie,kt+Ss)),P.blitFramebuffer(Ye,je,Ue,Ve,ot,_t,Ue,Ve,P.DEPTH_BUFFER_BIT,P.NEAREST);O.bindFramebuffer(P.READ_FRAMEBUFFER,null),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||q.has(E)){let Gn=q.get(E),vn=q.get(K);O.bindFramebuffer(P.READ_FRAMEBUFFER,tv),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,nv);for(let bn=0;bn<Oe;bn++)Bt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gn.__webglTexture,$,We+bn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gn.__webglTexture,$),kn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vn.__webglTexture,Ie,kt+bn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vn.__webglTexture,Ie),$!==0?P.blitFramebuffer(Ye,je,Ue,Ve,ot,_t,Ue,Ve,P.COLOR_BUFFER_BIT,P.NEAREST):kn?P.copyTexSubImage3D(Nt,Ie,ot,_t,kt+bn,Ye,je,Ue,Ve):P.copyTexSubImage2D(Nt,Ie,ot,_t,Ye,je,Ue,Ve);O.bindFramebuffer(P.READ_FRAMEBUFFER,null),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else kn?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Nt,Ie,ot,_t,kt,Ue,Ve,Oe,St,Xe,Rt.data):K.isCompressedArrayTexture?P.compressedTexSubImage3D(Nt,Ie,ot,_t,kt,Ue,Ve,Oe,St,Rt.data):P.texSubImage3D(Nt,Ie,ot,_t,kt,Ue,Ve,Oe,St,Xe,Rt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ie,ot,_t,Ue,Ve,St,Xe,Rt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ie,ot,_t,Rt.width,Rt.height,St,Rt.data):P.texSubImage2D(P.TEXTURE_2D,Ie,ot,_t,Ue,Ve,St,Xe,Rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fo),Ie===0&&K.generateMipmaps&&P.generateMipmap(Nt),O.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ie.setTextureCube(E,0):E.isData3DTexture?ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ie.setTexture2DArray(E,0):ie.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){C=0,D=0,U=null,O.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Ha=class n extends Ne{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;let i=this,s=t.color!==void 0?new Be(t.color):new Be(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new M,f=new M,h=new M,p=new at,x=new M(0,0,-1),g=new lt,m=new M,b=new M,w=new lt,v=new at,T=this.camera,C=new Tn(r,o,{samples:c,type:mi}),D=new cn({name:l.name!==void 0?l.name:"unspecified",uniforms:wu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=C.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=v,this.material=D,this.onBeforeRender=function(U,S,_){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),b.subVectors(f,x),b.reflect(d).negate(),b.add(f),T.position.copy(m),T.up.set(0,1,0),T.up.applyMatrix4(p),T.up.reflect(d),T.lookAt(b),T.far=_.far,T.updateMatrixWorld(),T.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(T.projectionMatrix),v.multiply(T.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(T.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=T.projectionMatrix;w.x=(Math.sign(g.x)+B.elements[8])/B.elements[0],w.y=(Math.sign(g.y)+B.elements[9])/B.elements[5],w.z=-1,w.w=(1+B.elements[10])/B.elements[14],g.multiplyScalar(2/g.dot(w)),B.elements[2]=g.x,B.elements[6]=g.y,B.elements[10]=g.z+1-a,B.elements[14]=g.w,i.visible=!1;let F=U.getRenderTarget(),H=U.xr.enabled,W=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(C),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,T),U.xr.enabled=H,U.shadowMap.autoUpdate=W,U.setRenderTarget(F);let V=_.viewport;V!==void 0&&U.state.viewport(V),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),i.material.dispose()}}};Ha.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Pu=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function c0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function mn(n,e,t,i=0,s=0){return c0(n,new Lt(1,i),e,t,s)}function wf(n,e,t,i=0){return c0(n,new Pi(1),e,t,i)}function sw(n,e){let t=new tt;return t.setAttribute("position",new ke(e.flat(),3)),{tone:n,geometry:t}}function l0(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return sw(n,i)}function rw(){let n=[mn("fur",[0,.012,.011],[.154,.161,.132],1),mn("fur",[0,-.065,.008],[.128,.079,.108]),mn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),mn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),l0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),mn("skin",[0,-.061,-.133],[.102,.066,.065],1),mn("skinShade",[0,-.097,-.14],[.076,.031,.047]),mn("skin",[0,.015,-.15],[.041,.056,.038]),mn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(mn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),mn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),wf("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),mn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),mn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),mn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),mn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),mn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),mn("ink",[e*.047,.031,-.183],[.011,.012,.006]),wf("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),wf("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(l0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function ow(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new tt;return s.setAttribute("position",new Mt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var aw=ow(rw());function Iu(n=0){let e=new Kt({flatShading:!0}),t=new Kt({flatShading:!0}),i=new Kt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Be("#212128"),ivory:new Be("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=r[f];for(let b=h;b<p;b++)u.setXYZ(b,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Pu.length?u:0;if(d===o)return;o=d;let f=Pu[o];for(let[h,p]of Object.entries(f))(r[h]??=new Be).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),f=new Mt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return s.push(h),a(h),new Ne(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new pt;return u.add(c(aw)),u}}}var Wa=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],lw=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],cw=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],u0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Lu=Wa.length-1,uw=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],hw=[-.57,.57,1,.61,-.61,-1],dw=[1,1,-.04,-.91,-.91,-.04];function Du(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(S=0,_=0,A=0){let B=r.length/3;return r.push(S*s,_,A),B}function c(S,_,A){i?o.push(S,A,_):o.push(S,_,A)}function u(S,_,A,B){c(S,_,A),c(S,A,B)}function d(S,_){for(let A=0;A<S.length;A++){let B=(A+1)%S.length;u(S[B],S[A],_[A],_[B])}}function f(S,_){for(let A=0;A<S.length;A++)c(_,S[(A+1)%S.length],S[A])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Wa.map(([S,_,A,B],F)=>{let H=F===0||F===Lu,W=S*.67,V=-.024+(_+.024)*.69;return{top:l(S,A,_),middle:l(S*1.08,(A+B)/2,H?_:-.025+(_+.025)*1.04),bottom:l(S,B,_),innerTop:l(W,lw[F],V),innerBottom:l(W,cw[F],V)}});function g(S){let _=x[S],A=x[(S+1)%x.length];return[_.top,A.top,A.middle,A.bottom,_.bottom,_.middle]}let m=new Set(u0.map(({edge:S})=>S));m.add(Lu);for(let S=0;S<x.length;S++){let _=x[S],A=x[(S+1)%x.length];c(h,_.innerTop,A.innerTop),c(p,A.innerBottom,_.innerBottom),u(_.innerTop,_.top,A.top,A.innerTop),u(A.innerBottom,A.bottom,_.bottom,_.innerBottom),m.has(S)||(u(A.top,_.top,_.middle,A.middle),u(A.middle,_.middle,_.bottom,A.bottom))}let b=g(Lu);t||f(b,l(0,0,Wa[Lu][1]));let w=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:S,length:_,splay:A}of u0){let[B,F,H,W]=Wa[S],[V,te,N,ce]=Wa[S+1],he=V-B,Z=te-F,me=-Z+he*A,ve=he+Z*A,Ee=Math.hypot(me,ve),_e=Math.hypot(he,Z)/2,ne=(H+N-W-ce)/4,se=[],ye=g(S);for(let[oe,Q,de]of uw){let P=[l(),l(),l(),l(),l(),l()];d(ye,P),se.push({ring:P,distance:oe*_,width:Q*_e,height:de*ne}),ye=P}let ee=l();f(ye,ee),a.push({x:(B+V)/2,y:(H+N+W+ce)/4,z:(F+te)/2,forwardX:me/Ee,forwardZ:ve/Ee,rows:se,tip:ee,length:_,pressure:-1})}let v=new tt,T=new ke(r,3).setUsage(Zn);v.setAttribute("position",T),v.setIndex(o),v.boundingSphere=new Wn(new M(0,-.018,-.052),.12),v.boundingBox=new rn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let C=!0;function D(S,_=!0){let A=!1;for(let B=0;B<a.length;B++){let F=a[B],H=S?.[B],W=Number.isFinite(H)?qe.clamp(H,0,1):0;if(W===F.pressure)continue;F.pressure=W,A=!0;let{forwardX:V,forwardZ:te,length:N,rows:ce,tip:he}=F,Z=F.x,me=F.z,ve=F.y,Ee=0,_e=0;for(let{ring:ye,distance:ee,width:oe,height:Q}of ce){let de=ee/N,P=qe.smoothstep(de,0,.57),Y=qe.smoothstep(de,.38,1),I=(.17+W*.83)*P+(.14+W*.76)*Y,z=(I+Ee)/2,O=ee-_e,j=Math.cos(z)*O;Z+=V*j,ve-=Math.sin(z)*O,me+=te*j;for(let q=0;q<ye.length;q++){let ie=hw[q]*oe,Me=dw[q]*Q,Pe=Me*Math.sin(I);T.setXYZ(ye[q],s*(Z+te*ie+V*Pe),ve+Me*Math.cos(I),me-V*ie+te*Pe)}Ee=I,_e=ee}let ne=N-_e,se=ne*Math.cos(Ee);T.setXYZ(he,s*(Z+V*se),ve-ne*Math.sin(Ee),me+te*se)}A&&(T.needsUpdate=!0,C=!0),_&&C&&(v.computeVertexNormals(),C=!1)}D(),v.getAttribute("normal").setUsage(Zn);let U=new Ne(v,e);return U.castShadow=!0,{mesh:U,pose:D,wristIndices:w}}var rs=12,Tf=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],fw=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],h0=Tf.flatMap(([n,e,t])=>Array.from({length:rs},(i,s)=>{let r=(s-.5)*Math.PI*2/rs;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Uu(n,e){let t=h0.length,i=[],s=(te,N,ce,he,Z)=>te.push(N,ce,he,N,he,Z);function r(te,N,ce=!1){for(let he=1;he<N.length-1;he++)ce?te.push(N[0],N[he+1],N[he]):te.push(N[0],N[he],N[he+1])}let o=(te,N)=>te*rs+(N+rs)%rs;for(let te=0;te<Tf.length-1;te++)for(let N=0;N<rs;N++)(te===2||te===3)&&(N===0||N===6)||s(i,o(te,N),o(te+1,N),o(te+1,N+1),o(te,N+1));r(i,Array.from({length:rs},(te,N)=>o(0,N))),r(i,Array.from({length:rs},(te,N)=>o(Tf.length-1,N)),!0);let a=t,l=e.map(({geometry:te,wristIndices:N},ce)=>{let he=ce===0?6:0,Z=[o(4,he),o(4,he+1),o(3,he+1),o(2,he+1),o(2,he),o(3,he)],me=[Z,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],ve=me.at(-1),Ee=new Array(te.attributes.position.count);N.forEach((se,ye)=>{Ee[se]=ve[ye]});for(let se=0;se<Ee.length;se++)Ee[se]??=a++;let _e=[];for(let se=0;se<te.index.count;se++)_e.push(Ee[te.index.getX(se)]);for(let se=0;se<me.length-1;se++)for(let ye=0;ye<6;ye++){let ee=(ye+1)%6;s(i,me[se][ye],me[se][ee],me[se+1][ee],me[se+1][ye])}let ne=[];return r(ne,ve),{socket:Z,rings:me,wrist:ve,wristIndices:N,remap:Ee,skin:_e,cap:ne,sign:ce===0?-1:1}}),c=new tt,u=new ke(a*3,3).setUsage(Zn);c.setAttribute("position",u);let d=new Ne(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(te,N)=>new Ds([...i,...l.flatMap((ce,he)=>N&1<<he?ce.skin:ce.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,g=new M,m=new M,b=new M,w=new M,v=new M,T=new M,C=new Ze,D=new Ze,U=new Ze,S=new M(0,0,-1),_=new Ze().setFromEuler(new ln(-1.42,0,0)),A=[.24,.62,.94,.56],B=[.089,.084,.069,.054,.037],F=0,H=0,W=!0;function V(te,N,ce,he,Z){let me=!!(te[0]||te[1]);if(!me&&!W&&F===ce&&H===he)return;F=ce,H=he,W=me;for(let Ee=0;Ee<t;Ee++){let[_e,ne,se]=h0[Ee];u.setXYZ(Ee,_e*ce,ne*he,se*ce)}let ve=0;for(let Ee=0;Ee<l.length;Ee++){let _e=l[Ee],ne=te[Ee],se=e[Ee].geometry.attributes.position,ye=!!ne,ee=_e.wristIndices;ye&&Z&&(ve|=1<<Ee),p.set(0,0,0);for(let oe of _e.socket)p.add(h.fromBufferAttribute(u,oe));p.multiplyScalar(1/6),g.set(0,0,0);for(let oe of ee)g.add(h.fromBufferAttribute(se,oe));g.multiplyScalar(1/6).applyQuaternion(ne?.quaternion??_),ye?g.add(ne.position):g.add(h.set(p.x+_e.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),b.copy(m).normalize(),w.set(_e.sign*.38,-1,.27).addScaledVector(b,-b.dot(h.set(_e.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),ye&&x.addScaledVector(w,Math.sqrt(Math.max(.007,N**2-m.lengthSq()*.25))*.72),C.setFromUnitVectors(S,b.subVectors(x,p).normalize()),D.copy(ne?.quaternion??_);for(let oe=0;oe<4;oe++){let Q=oe===3;T.lerpVectors(Q?x:p,Q?g:x,A[oe]),U.copy(C).slerp(D,Q?.79:oe*.19);for(let de=0;de<6;de++){let P=fw[de],Y=B[oe];v.set(P[0]*Y,P[1]*Y*.84,0).applyQuaternion(U).add(T),u.setXYZ(_e.rings[oe+1][de],v.x,v.y,v.z)}}for(let oe=0;oe<_e.remap.length;oe++)v.fromBufferAttribute(se,oe).applyQuaternion(D),ye?v.add(ne.position):v.add(h.set(p.x+_e.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(_e.remap[oe],v.x,v.y,v.z)}c.index!==f[ve]&&c.setIndex(f[ve]),u.needsUpdate=!0,c.computeVertexNormals()}return V([null,null],.42,1,1,!1),{mesh:d,pose:V}}var d0=.1,pw=45,f0=55,qa=128,Af=96,mw=[new Be("#ffdc4d"),new Be("#ff5d35"),new Be("#bfc4c8")],gw=new M(0,0,-1);function Ef(){let n=new pt,e=new wt({color:"#596974",roughness:.38,metalness:.6}),t=new wt({color:"#29323e",roughness:.68}),i=new mt({color:"#ffd563",toneMapped:!1});function s(r,o,a,l,c,u=0){let d=new Ne(r,o);d.position.set(a,l,c),d.rotation.x=u,n.add(d)}return s(new Je(.075,.064,.18),t,.035,.024,-.065),s(new Je(.042,.08,.055),e,.035,-.025,-.022,-.22),s(new Ht(.02,.024,.071,8).rotateX(Math.PI/2),e,.035,.028,-.161),s(new Je(.024,.01,.025),i,.035,.061,-.133),n}function p0(n,{impact:e,onShot:t}){let i=Ef(),s=new Ne(new Lt(.045,0),new mt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));s.position.set(.035,.028,-.208),i.add(s),n.add(i),i.visible=!1;let r=new tt,o=new ke(qa*18,3).setUsage(Zn),a=new ke(qa*18,3);for(let F=0;F<qa;F++)for(let H=0;H<6;H++){let W=mw[Math.floor(H/2)];a.setXYZ(F*6+H,W.r,W.g,W.b)}r.setAttribute("position",o),r.setAttribute("color",a),r.setDrawRange(0,0);let l=new ua(r,new ts({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new ke(Af*3,3).setUsage(Zn),u=new tt;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new da(u,new Gr({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:Yn}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:qa},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Af},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,g=new M,m=0,b=0,w=0,v=0,T=0,C=!1;function D(F,H,W,V){for(let te=0;te<W;te++){let N=h[b++%Af];N.p.copy(F),N.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(V).addScaledVector(H,.55),N.life=.12+Math.random()*.21}}function U(F,H,W){let V=f[m++%qa];return V.p.copy(F),V.d.copy(gw).applyQuaternion(H),V.distance=0,V.active=!0,V.authoritative=W,V}function S(F){let H=U(F.position,F.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),D(p,H.d,4,2.2),T=.055,w++,t?.(F.position,F.quaternion)}function _(F,H,W){let V=U(F,H,W);D(V.p,V.d,4,2.2),l.visible=!0}function A({dt:F,aim:H,firing:W}){if(!H&&!i.visible&&!l.visible&&!d.visible)return;if(F=Math.max(0,Math.min(F,.12)),i.visible=!!H,H&&(i.position.copy(H.modelPosition??H.position),i.quaternion.copy(H.quaternion)),H&&W){if(C)for(v-=F;v<=0;)S(H),v+=d0;else S(H),v=d0;C=!0}else v=0,C=!1;T=Math.max(0,T-F),s.visible=!!H&&T>0,s.material.opacity=T/.055;let V=0;for(let N of f){if(!N.active)continue;let ce=Math.min(pw*F,f0-N.distance),he=ce>0?e?.(N.p,N.d,ce,N.authoritative):null,Z=he==null?ce:Math.max(0,Math.min(ce,he));N.p.addScaledVector(N.d,Z),N.distance+=Z,he!=null&&(g.copy(N.d).negate(),D(N.p,g,8,4.2)),N.active=he==null&&N.distance<f0;let me=Math.min(.82,N.distance);for(let ve=0;ve<3;ve++)for(let Ee=0;Ee<2;Ee++){let _e=(ve+Ee)/3;x.copy(N.p).addScaledVector(N.d,-me*_e),o.setXYZ(V++,x.x,x.y,x.z)}}l.visible=V>0,V>0&&(o.needsUpdate=!0),r.setDrawRange(0,V);let te=0;for(let N of h)N.life<=0||(N.life-=F,N.v.y-=5*F,N.p.addScaledVector(N.v,F),N.life>0&&c.setXYZ(te++,N.p.x,N.p.y,N.p.z));d.visible=te>0,te>0&&(c.needsUpdate=!0),u.setDrawRange(0,te)}function B(){for(let F of f)F.active=!1;for(let F of h)F.life=0;v=T=0,C=!1,i.visible=s.visible=l.visible=d.visible=!1,r.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:A,reset:B,replay:_,get shotsFired(){return w}}}var m0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],xw=new M(0,1,0);function Fu(n){let e=new pt,t=new wt({color:"#2c4750",roughness:.43,metalness:.47}),i=new wt({color:"#899fa3",roughness:.46,metalness:.57}),s=new mt({toneMapped:!1});function r(h,p,x,g,m,b=0){let w=new Ne(h,p);return w.position.set(x,g,m),w.rotation.x=b,e.add(w),w}r(new Je(.071,.059,.149),t,.038,.026,-.054),r(new Je(.04,.072,.05),i,.038,-.028,-.014,-.29),r(new Ht(.019,.024,.064,8),i,.038,.025,-.137,Math.PI/2),r(new Ht(.015,.016,.008,8),s,.038,.025,-.173,Math.PI/2),r(new Je(.041,.009,.047),s,.038,.059,-.067);let o=new Ne(new Ht(.002,.003,1,5,1,!0),new mt({transparent:!0,opacity:.52,depthWrite:!1,blending:Yn,toneMapped:!1})),a=new Ne(new Lt(.012,0),new mt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(m0[h-1]??m0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(xw,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var yw="wss://clouddata.turbowarp.org",vw="itssoren.github.io/VR/gorilla-lab/",Rf={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Bu=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),_w=new Map([[Rf.vr,"vr"],[Rf.pc,"pc"],...Bu.map(n=>[n,"player"])]),Pf=53,Nu=4400,y0=64e3,Mw=100,bw=200,Sw=450,v0=6,Dt=(n,e)=>Math.round(n).toString().padStart(e,"0");function Xa(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Xs(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function ww({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Dt(e,7)+a.map(c=>Dt(c*100+2e4,5)).join("")+Dt(Math.round(l*10)%3600,4)+Dt(o,6)}function Tw(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function _0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:s=()=>{},Socket:r=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,g="",m=-1/0,b=null,w=0,v=0,T=1/0,C=0,D="offline",U=!1,S=-1,_=0,A=[],B=1/0,F=0,H=[],W={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function V(Q,de){D=Q,n(de)}function te(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente du joueur VR")}function N(){return[...c.values()].map(Q=>Q.pose).filter(Boolean)}function ce(){let Q=N().filter(I=>h==="vr"?I.role!=="vr":I.role==="vr"),de=I=>Number(I.ready)*2+ +(I.role==="pc"),P=Q.find(I=>I.id===b?.id)??null,Y=Q.reduce((I,z)=>!I||de(z)>de(I)?z:I,P);Y!==b&&(b=Y,e(b))}function he(Q){for(let de of c.values())de.pose&&t(null,de.pose),de.pose=de.candidate=null;Q&&c.clear(),ce()}function Z(){let Q=f;if(f=null,Q){Q.onopen=Q.onmessage=Q.onerror=Q.onclose=null;try{Q.close()}catch{}}}function me(){Z(),h=null,p="",T=1/0,U=!1,S=-1,A=[],H=[],he(!0),V("offline","Hors ligne")}function ve(Q){let de=Math.min(3e4,1500*2**Math.min(C++,5));T=a()+de,V("retry","TurboWarp d\xE9connect\xE9 ("+Q+") \xB7 reconnexion automatique au salon "+p)}function Ee(Q){let de=!1;for(let[P,Y]of c)Y.pose&&Q-Y.pose.arrival>Nu&&(t(null,Y.pose),Y.pose=null,de=!0),Y.candidate&&Q-Y.candidate.arrival>Nu&&(Y.candidate=null),Q-Y.lastArrival>6e4&&c.delete(P);de&&ce()}function _e(Q,de,P,Y){let I=Uw(P.value,null);if(!I||I.id===x)return;let z=c.get(I.id);if(!z){if(c.size>=64)return;z={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:Y,pose:null,candidate:null},c.set(I.id,z)}if(I.time<=z.lastTime)return;let O=z.pose??z.candidate;if(O&&I.time-O.time>Nu+Y-O.arrival){if(z.pose)return;z.candidate=null}z.lastTime=I.time,z.lastArrival=Y;let j={...I,ready:I.ready??!0,protocol:I.protocol??(I.ready===void 0?3:4),role:Q,channel:de,received:o(),arrival:Y},q=z.candidate;if(!z.pose&&(!q||q.channel!==de||q.map!==j.map||Y-q.arrival>Nu)&&(I.ready!==void 0||Math.abs(I.time-j.received)>25e3)){z.candidate=j;return}if(z.candidate=null,!z.pose&&q?.objects&&q.ready&&q.map===j.map&&!j.objects&&(j.objects=q.objects),z.pose=j,W.received++,W.bytesReceived+=P.value.length,t(j),ce(),!(!U||!j.ready||j.map!==S)){Y-z.shotWindow>=1e3&&(z.shotWindow=Y,z.shotCount=0);for(let{seq:ie,position:Me,quaternion:Pe}of j.shots??[])ie<=z.lastShot||(z.lastShot=ie,!(z.shotCount>=14||(Me.x-j.x)**2+(Me.y-j.y)**2+(Me.z-j.z)**2>7**2)&&(z.shotCount++,s({position:Me,quaternion:Pe},j)));if(!(h!=="vr"||Q!=="player"||I.actionTarget!==x))for(let{seq:ie,action:Me}of I.actions)ie<=z.lastAction||(z.lastAction=ie,i(Me,j))}}function ne(){let Q;try{Q=new r(yw)}catch{return!1}return f=Q,v=a(),m=-1/0,V("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),Q.onopen=()=>{f===Q&&(w=a(),Q.send(JSON.stringify({method:"handshake",project_id:vw+p,user:"player"+x})+`
`),V("open",te()))},Q.onmessage=de=>{if(f!==Q||typeof de.data!="string"||de.data.length>105e4)return;let P=a();Ee(P);for(let Y of de.data.split(`
`)){if(!Y.trim())continue;let I;try{I=JSON.parse(Y)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",Y.slice(0,200));continue}let z=_w.get(I?.name);I?.method!=="set"||!z||z==="vr"&&h==="vr"||_e(z,I.name,I,P)}},Q.onerror=()=>{f===Q&&V("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},Q.onclose=de=>{if(f!==Q)return;let P=de.code;if(Z(),he(!1),A=[],H=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(P)){ve(P);return}h=null,p="";let Y={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[P];V("error","TurboWarp d\xE9connect\xE9 ("+P+")"+(Y?" \xB7 "+Y:de.reason?" \xB7 "+de.reason.slice(0,100):""))},!0}function se(Q,de){let P=Xa(Q);return!/^[A-Z0-9]{5,12}$/.test(P)||!["vr","pc","player"].includes(de)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===de&&p===P?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(he(!0),x=Math.floor(1e6+l()*8999999),h=de,p=P,g=Rf[h]??Bu[x%Bu.length],_=F=0,H=[],W={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},C=0,T=B=1/0,ne()?!0:(h=null,p="",V("error","WebSocket indisponible."),!1))}function ye(Q,de){let P=Q.hand||Q.type==="world"?5:4;if(h!=="player"||D!=="open"||!b?.ready||b.protocol<P||b.map!==de||!If(Q)||_>=99999999)return!1;let Y=a();return A=A.filter(I=>I.expires>=Y&&I.target===b.id&&I.map===de),A.length>=8?!1:(A.push({action:{...Q},seq:++_,expires:Y+1800,target:b.id,map:de}),!0)}function ee(Q,de,P){if(!h||h==="pc"||D!=="open"||F>=99999999)return;let Y=oo(Q),I=ao(de);if(!Y||!I)return;let z=a();H=H.filter(O=>O.expires>=z&&O.map===P).slice(-(v0-1)),H.push({record:Dt(++F,8)+Y+I,expires:z+Sw,map:P})}function oe(Q){let de=a();U=!!Q&&Q.ready!==!1,S=Q?.map??-1,Ee(de),h&&!f&&de>=T&&(T=1/0,ne()||ve(1006)),f&&f.readyState===0&&de-v>1e4&&(Z(),ve(1006)),W.bufferedBytes=f?.bufferedAmount??0;let P=h==="pc"?bw:Mw;if(!Q||!h||f?.readyState!==1||W.bufferedBytes>4096||de-w<350||de-m<P)return!1;if(h==="player"){let q=N().filter(Me=>Me.role==="player"),ie=q.find(Me=>Me.channel===g);if(ie?B=Math.min(de,B):B=1/0,ie&&(ie.id<x||de-B>=800)){let Me=Bu.find(Pe=>!q.some(R=>R.channel===Pe));if(!Me)return D!=="capacity"&&V("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=Me,B=1/0}}(C||D==="capacity")&&(C=0,V("open",te()));let Y=Math.round(d+de-u),I=ww({...Q,time:Y,id:x});if(!I)return!1;A=A.filter(q=>q.expires>=de&&q.target===b?.id&&q.map===Q.map),H=H.filter(q=>q.expires>=de&&q.map===Q.map);let z=W.bufferedBytes===0?Q.objectFeed?.(de):null,O=typeof Q.avatar=="function"?Q.avatar():Q.avatar,j=Dw(I,O,z,{version:5,ready:Q.ready!==!1,actions:A,actionTarget:A[0]?.target??0,shots:H,score:Q.score});return m=de,f.send(JSON.stringify({method:"set",name:g,value:j})+`
`),W.sent++,W.bytesSent+=j.length,!0}return{join:se,leave:me,tick:oe,sendAction:ye,queueShot:ee,get stats(){return{...W}},get role(){return h},get code(){return p},get state(){return D},get remote(){return b},get peers(){return N()}}}var Aw=15,Ew=12,M0=44,Ou=15,Cf=35,oo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Dt(e*100+2e4,5)).join(""):null;function so(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var ao=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Dt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function ro(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function Cw(n){let e=oo(n.mesh.position),t=ao(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>Pf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Dt(i,5)+Dt(s,2)+r+o+Dt(a,8)+e+t}function Rw(n){return Dt(n,5)+"99"+"0".repeat(M0-7)}function Pw(n){if(!n)return null;let e=ao(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&oo(l.position),u=l&&ao(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(Aw+Ew)}),s=Dt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Dt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Dt(n.coconuts??31,2)+Dt(n.color??0,2)+a}function If(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Pf?"10"+Dt(t,5):null;if(e==="world"){let o=s===1?2:s===2?4:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+s+Dt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Dt(i,5):null;let r=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(r)?(e==="hold"?"3":"4")+r+Dt(i,5):null}function Iw(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release","world"][e];if(!s)return null;let r={type:s,objectId:i};return s==="spawn"?r={type:s,typeId:i}:s==="world"?r={type:s,mode:t,typeId:i}:s==="tool"?r.mode=t:t&&(r.hand=t),If(r)===n?r:null}function Lw(n){let e=oo(n?.position),t=ao(n?.quaternion),i=oo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function Dw(n,e,t,i=null){let s=Pw(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Dt(p,8)+If(x)).join(""),a=i.version===5,l=a&&oo(e?.gun?.position),c=a&&ao(e?.gun?.quaternion),u=s&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Dt(d.length,1)+d.map(p=>p.record).join("")+Dt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!s+(s??"")+Lw(s?e.tool:null)+Dt(i.actionTarget??0,7)+Dt(o.length/Ou,1)+o+f;return h.length+1+r.length>y0&&(t=null,r=""),h+(t?t.full?"2":"1":"0")+r}function g0(n,e,t){let i=ro(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:so(n,a+1),quaternion:ro(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function Uw(n,e){if(typeof n!="string"||n.length>y0||!/^[0-9]+$/.test(n))return null;let t=Tw(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:M0,r=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=g0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=so(n,a+2),f=ro(n,a+17),h=so(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*Ou+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=Ou){let u=Number(n.slice(a,a+8)),d=Iw(n.slice(a+8,a+Ou));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=so(n,a+1),h=ro(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>v0||n.length<a+u*Cf+7)return null;t.shots=[];let d=0;for(let f=a+u*Cf;a<f;a+=Cf){let h=Number(n.slice(a,a+8)),p=so(n,a+8),x=ro(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),r=a+7}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=g0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=so(n,c+10),g=ro(n,c+25);if(d>Pf||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var Fw=.45,x0=2.5;function b0(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function s(r,o){let a=r-i>=1600,l=a||r-t>=200;a&&(i=r),l&&(t=r);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=Fw&&!d.frozen&&(d.velocity.lengthSq()>=x0**2||d.angular.lengthSq()*d.radius**2>=x0**2);if(!l&&!p&&!h?.fast)continue;let x=Cw(d);if(!x)continue;c?.add(f);let g=x!==h?.record;g&&e.set(f,{record:x,until:r+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:Rw(d),until:r+420}),n.delete(d));for(let[d,f]of e)f.until<r?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:s,reset(){n.clear(),e.clear(),t=i=-1/0}}}var S0=It.DEFAULT_UP,Nw=15,w0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function Bw(){let n=new pt,e=new Ne(new Lt(.155,1),new wt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Ne(new Li(.23,.018,5,20),new mt({color:"#84e6ff",transparent:!0,opacity:.85,blending:Yn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Ne(new Fs(.11,.28,9,1,!0),new mt({color:"#55c7ff",transparent:!0,opacity:.45,side:Wt,blending:Yn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function Ow(){let n=new pt,e=new pt,t=Iu(0),i=t.createHead(),s=["left","right"].map(m=>({skin:Du(m,t.hand,{openWrist:!0}),position:new M,quaternion:new Ze,pressure:[0,0,0],tracked:!1})),r=Uu(t.fur,s.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Fu(e),l=null,c=new M,u=[null,null],d=new M,f=new Ze,h=new Ze,p=new Ze,x={mode:0,position:new M,quaternion:new Ze,end:new M};function g(m,b,w){let v=m.avatar,T=1-Math.exp(-w*32);if(!v){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),r.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(v.head).premultiply(f),i.quaternion.slerp(p,T),d.set(0,0,-1).applyQuaternion(i.quaternion);let C=qe.smoothstep(-d.y,.28,.94),D=Math.max(.38,v.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*D,.24*C),o.rotation.x=-.5*C,h.copy(o.quaternion).invert(),t.setColor(v.color??0);for(let _=0;_<s.length;_++){let A=s[_],B=v.hands[_];if(u[_]=B?A:null,!B){A.tracked=!1;continue}c.copy(B.position).sub(m).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(B.quaternion).premultiply(f).premultiply(h),A.tracked?(A.position.lerp(c,T),A.quaternion.slerp(p,T)):(A.position.copy(c),A.quaternion.copy(p)),A.tracked=!0;for(let F=0;F<3;F++)A.pressure[F]+=((B.pressure?.[F]??0)-A.pressure[F])*T;A.skin.pose(A.pressure,!1)}if(r.pose(u,v.armSpan*.5,.97,D,!0),v.gun){l||(l=Ef(),l.visible=!1,e.add(l));let _=l.visible?T:1;l.position.lerp(v.gun.position,_),l.quaternion.slerp(p.copy(v.gun.quaternion),_),l.visible=!0}else l&&(l.visible=!1);let U=v.tool;if(!U){a.hide(),x.mode=0;return}let S=x.mode?T:1;x.mode=U.mode,x.position.lerp(U.position,S),x.quaternion.slerp(p.copy(U.quaternion),S),x.end.lerp(U.end,S),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of s)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function T0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function A0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,applyScore:o,onAction:a,onShot:l}){let c=new Map,u=new Map,d=b0(),f=0,h=-1,p=-1,x=-1,g="",m=0,b=-1;function w(){let I=e();return I!==g&&(g=I,m=Xs(I)),m}function v(I){return!!I?.ready&&I.map===w()}function T(I){let z=u.get(I);z&&(n.remove(z.mesh),z.mesh.material?.dispose(),u.delete(I))}function C(){for(let I of u.keys())T(I);f=0,h=-1,p!==-1&&(p=-1,s?.(null)),x!==-1&&(x=-1,r?.(null)),b!==-1&&(b=-1,o?.(0))}function D(I,z){if(I.color===z.color&&I.style===z.style)return;I.color=z.color,I.style=z.style;let O=I.mesh.material;if(O?.color){if(O.color.setHex(z.color),z.style===0){Object.assign(O,I.baseMaterial),I.baseEmissive&&O.emissive.copy(I.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][z.style],O.metalness=[.1,0,.87,.12,0][z.style],O.opacity=z.style===3?.4:1,O.transparent=z.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=z.style===4?1.65:0,O.needsUpdate=!0}}function U(I){if(!v(I)){C();return}if((f!==I.id||h!==I.map)&&(C(),f=I.id,h=I.map),I.avatar&&I.avatar.light!==p&&(p=I.avatar.light,s?.(p)),I.avatar&&I.avatar.coconuts!==x&&(x=I.avatar.coconuts,r?.(x)),I.score!==void 0&&I.score!==b&&(b=I.score,o?.(b)),!I.objects)return;let z=I.objects.full?new Set:null;for(let O of I.objects.records){if(O.removed){T(O.id);continue}z?.add(O.id);let j=u.get(O.id);if(j&&j.type!==O.type&&(T(O.id),j=null),!j){let ie=i?.(O.type);if(!ie)continue;let{roughness:Me,metalness:Pe,transparent:R,depthWrite:y,opacity:L,emissiveIntensity:X}=ie.material??{},re={roughness:Me,metalness:Pe,transparent:R,depthWrite:y,opacity:L,emissiveIntensity:X};ie.userData.netId=O.id,ie.userData.netType=O.type,j={mesh:ie,baseMaterial:re,baseEmissive:ie.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new Ze().copy(O.rotation),velocity:new M,time:I.time},ie.position.copy(j.target),ie.quaternion.copy(j.quaternion),u.set(O.id,j),n.add(ie)}let q=(I.time-j.time)/1e3;q>.06&&q<.65&&!(O.flags&6)?j.velocity.copy(O.position).sub(j.target).multiplyScalar(1/q).clampLength(0,23):j.velocity.set(0,0,0),j.target.copy(O.position),j.quaternion.copy(O.rotation),j.time=I.time,j.flags=O.flags,j.frequent=q>.06&&q<.16,j.received=I.arrival,j.mesh.userData.netFlags=O.flags,j.mesh.userData.held=!!(O.flags&1),D(j,O)}if(z)for(let O of u.keys())z.has(O)||T(O)}let S=new M;function _(I,z,O){let j=1-Math.exp(-I*22),q=1-Math.exp(-I*32);for(let ie of u.values()){if(ie.mesh.visible=z,!z)continue;let Me=ie.frequent?q:j,Pe=ie.flags&6?0:Math.min(ie.frequent?.1:.12,Math.max(0,(O-ie.received)/1e3));S.copy(ie.target).addScaledVector(ie.velocity,Pe),ie.mesh.position.distanceToSquared(S)>16||ie.flags&6&&ie.mesh.position.distanceToSquared(ie.target)<1e-4?ie.mesh.position.copy(S):ie.mesh.position.lerp(S,Me),ie.mesh.quaternion.slerp(ie.quaternion,Me),ie.flags&6&&ie.mesh.quaternion.angleTo(ie.quaternion)<.008&&ie.mesh.quaternion.copy(ie.quaternion),ie.mesh.updateMatrixWorld(!0)}}let A=I=>document.querySelector(I),B=A("#cloud-status"),F=A("#cloud-room"),H=A("#cloud-camera"),W=-1/0,V=0,te="Hors ligne",N=0;function ce(I){V=I,H.textContent="Cam\xE9ra : "+w0[I]}function he(){ce((V+1)%w0.length)}H.onclick=he;let Z=_0({onStatus(I){te=I,B.textContent=I},onPose(I){Z.role!=="vr"&&U(I)},onPeer(I,z){if(!I){let q=c.get(z.id);q?.art&&(T0(q.art.model),T0(q.art.toolRoot),q.art.dispose?.()),c.delete(z.id);return}let O=c.get(I.id);O||(O={art:null,motion:new M,handMotion:[new M,new M]},c.set(I.id,O));let j=O.pose;O.motion.set(0,0,0);for(let q of O.handMotion)q.set(0,0,0);if(j&&j.map===I.map){let q=(I.time-j.time)/1e3;if(q>=.055&&q<=.65){O.motion.set(I.x-j.x,I.y-j.y,I.z-j.z).multiplyScalar(1/q),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0);for(let ie=0;ie<2;ie++){let Me=j.avatar?.hands[ie],Pe=I.avatar?.hands[ie];Me&&Pe&&O.handMotion[ie].copy(Pe.position).sub(Me.position).multiplyScalar(1/q).clampLength(0,23)}}}O.pose=I},onAction:a,onShot:l}),me=Xa(new URLSearchParams(location.search).get("room")??"");F.value=/^[A-Z0-9]{5,12}$/.test(me)?me:Math.random().toString(36).slice(2,8).padEnd(6,"0").toUpperCase();function ve(I){let z=Xa(F.value);Z.role===I&&Z.code===z||Z.join(z,I)&&(F.value=z,I!=="vr"&&A("#game").focus(),d.reset(),ce(0),t(Xs(z)),g="")}A("#cloud-vr").onclick=()=>ve("vr"),A("#cloud-pc").onclick=()=>ve("pc");let Ee=A("#cloud-player");Ee&&(Ee.onclick=()=>ve("player")),A("#cloud-leave").onclick=()=>{N=0,Z.leave()},A("#cloud-copy").onclick=async()=>{let I=new URL(location.href);I.searchParams.set("room",Xa(F.value));try{await navigator.clipboard.writeText(I.href),B.textContent="Lien copi\xE9."}catch{B.textContent=I.href}N=performance.now()+2500},addEventListener("pagehide",()=>Z.leave());let _e=new M,ne=new M,se=new M,ye=new M,ee=0;function oe({dt:I,position:z,yaw:O,pitch:j,camera:q,rig:ie,keys:Me,flat:Pe}){let R=Pe?.movement,y=Number(Me.has("KeyD"))-Number(Me.has("KeyQ")||Me.has("KeyA"))+(R?.x??0),L=Number(Me.has("KeyS"))-Number(Me.has("KeyZ")||Me.has("KeyW"))+(R?.z??0);Pe?.consumeJump?.()&&(ee=.26),ee=Math.max(0,ee-I);let X=Number(Me.has("Space")||ee>0)-Number(Me.has("ShiftLeft")||Me.has("ShiftRight")),re=Me.has("ControlLeft")||Me.has("ControlRight")?11:3.2;ye.set(y,X,L).clampLength(0,1).applyAxisAngle(S0,O),ie.position.addScaledVector(ye,I*re).clampScalar(-175,175),ie.rotation.set(0,O,0),q.position.set(0,0,0),q.rotation.set(j,0,0,"YXZ"),ie.updateMatrixWorld(!0),z.copy(ie.position)}function Q(I,z,O,j){for(let q of c.values()){let ie=q.pose;if(!(I&&v(ie))){q.art&&(q.art.model.visible=!1,q.art.toolRoot&&(q.art.toolRoot.visible=!1));continue}q.art||(q.art=ie.role==="pc"?Bw():Ow(),n.add(q.art.model),q.art.model.visible=!1,q.art.toolRoot&&n.add(q.art.toolRoot));let{model:Pe,toolRoot:R}=q.art,y=Math.min(.12,Math.max(0,(j-ie.arrival)/1e3+.025));_e.copy(ie).addScaledVector(q.motion,y),!Pe.visible||Pe.position.distanceToSquared(_e)>64?Pe.position.copy(_e):Pe.position.lerp(_e,1-Math.exp(-O*34)),Pe.rotation.y=ie.yaw,Pe.visible=!0,R&&(R.visible=!0),q.art.draw(ie,z,O)}}function de(I,z){if(z<N)return;let O=Z.remote,j=te;if(Z.state==="open"){let q="Salon "+Z.code+" \xB7 ",ie=Z.peers.filter(Me=>Me.ready);if(!I)j=q+(Z.role==="vr"?"s\xE9lectionne \xAB Entrer en VR \xBB pour ouvrir la partie":"quitte la session VR pour utiliser ce r\xF4le");else if(Z.role!=="vr"&&O&&O.map!==w())j=q+"le joueur VR utilise une autre carte. Chargez la m\xEAme carte.";else if(Z.role!=="vr"&&O&&!O.ready)j=q+"casque connect\xE9 \xB7 en attente du d\xE9marrage VR";else if(Z.role==="player"&&O&&O.protocol<5)j=q+"mets \xE0 jour le jeu sur le casque pour synchroniser la partie";else if(Z.role!=="vr"&&v(O))j=q+"joueur VR connect\xE9";else if(Z.role==="vr"){let Me=ie.filter(v),Pe=Me.filter(y=>y.role==="player").length,R=Me.some(y=>y.role==="pc");Pe||R?j=q+[R?"spectateur connect\xE9":"",Pe?Pe+" joueur"+(Pe===1?"":"s")+" PC / mobile":""].filter(Boolean).join(" \xB7 "):ie.length&&(j=q+"le correspondant utilise une autre carte. Chargez la m\xEAme carte.")}}B.textContent!==j&&(B.textContent=j)}function P(I){let{inVR:z,time:O,dt:j,position:q,yaw:ie,camera:Me,rig:Pe,keys:R,avatar:y,bodies:L,score:X}=I;if(!Z.role){C();return}let re=Z.role==="vr"?z:Z.role==="player"||!z,J=performance.now(),be=w(),fe=Z.role!=="vr"?Z.remote:null,xe=re&&v(fe);if(!xe&&h!==-1&&C(),_(j,xe,J),Q(re,O,j,J),Z.role==="pc"&&!z){(I.actions??R).delete("KeyC")&&he();let pe=V===3&&xe?[...u.values()].find(Te=>Te.type===Nw)?.mesh:null,ue=xe?c.get(fe.id)?.art?.model:null;pe?(se.set(0,0,-.23).applyQuaternion(pe.quaternion),Pe.position.copy(pe.position).add(se),Pe.rotation.set(0,0,0),Me.position.set(0,0,0),Me.quaternion.copy(pe.quaternion),Pe.updateMatrixWorld(!0),q.copy(Pe.position)):ue&&(V===1||V===2)?(se.set(0,.72,V===1?-2.7:2.7).applyAxisAngle(S0,ue.rotation.y),ne.copy(ue.position).add(se),Pe.position.lerp(ne,1-Math.exp(-j*11)),Me.position.set(0,0,0),Pe.updateMatrixWorld(!0),Me.lookAt(ue.position),Me.updateWorldMatrix(!0,!1),q.copy(Pe.position)):oe(I)}Z.tick({x:q.x,y:q.y,z:q.z,yaw:ie,map:be,ready:re,avatar:re&&Z.role!=="pc"?y:null,score:X,objectFeed:re&&Z.role==="vr"&&L?pe=>d.capture(pe,L):null}),J-W>=150&&(W=J,de(re,J))}function Y(I){let z=c.get(I)?.pose;return v(z)?z:null}return{update:P,getPeer:Y,handMotion(I,z){return c.get(I)?.handMotion[z]},sendAction(I){return Z.sendAction(I,w())},sendShot(I,z){Z.queueShot(I,z,w())},get stats(){return Z.stats},get role(){return Z.role},get connected(){return v(Z.remote)},get remoteSpectator(){return Z.peers.find(I=>I.role==="pc"&&v(I))??null},get remoteLight(){return p===-1?null:p},get replicaCount(){return u.size},forEachReplica(I){for(let z of u.values())z.mesh.visible&&I(z.mesh)}}}var C0=Object.freeze([8,16,32,48]),R0=16,zu=24,E0=new WeakMap,os=qe.clamp,co=qe.lerp,Df=n=>n*n*(3-2*n);function lo(n,e,t,i){return Number.isFinite(n)?os(n,e,t):i}function uo(n={}){let e=C0.includes(n?.detail)?n.detail:R0,t=n?.heights;return{detail:e,seed:Math.round(lo(n?.seed,0,2147483647,1)),amplitude:lo(n?.amplitude,0,12,0),frequency:lo(n?.frequency,.015,2,.12),grass:lo(n?.grass,0,1,0),shrub:lo(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>lo(i,-zu,zu,0)):null}}function P0(n,e,t,i){let s=os(t,0,e),r=os(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function I0(n,e){let t=C0.includes(e)?e:R0;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>P0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Bi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Lf(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Df(n-i),o=Df(e-s),a=co(Bi(i,s,t),Bi(i+1,s,t),r),l=co(Bi(i,s+1,t),Bi(i+1,s+1,t),r);return 2*co(a,l,o)-1}function Vu(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=E0.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let d=s+1,f=u?c.procedural:new Float64Array(d**2);if(!u&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let m=(g/s-.5)*e*a,b=(x/s-.5)*t*a;f[x*d+g]=o*(.62*Lf(m,b,r)+.26*Lf(m*2.03,b*2.03,r+13)+.12*Lf(m*4.13,b*4.13,r+37))}let h=l?f.map((x,g)=>x+l[g]):f,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:f,surface:h};return E0.set(n,p),p}function Uf(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return P0(o,i,(e/s+.5)*i,(t/r+.5)*i)}function zw(n,e,t){return n.y+Uf(Vu(n),e-n.x,t-n.z)}function Vw(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=s[f*r+h],d++);return u/d}function L0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Vu(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=os(h,-c/2,c/2),g=os(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=s**2)return!1;let m=(h/c+.5)*l,b=(p/u+.5)*l,w=c/l,v=u/l,T=Math.max(0,Math.ceil(m-s/w)),C=Math.min(l,Math.floor(m+s/w)),D=Math.max(0,Math.ceil(b-s/v)),U=Math.min(l,Math.floor(b+s/v)),S=Number.isFinite(o)?o-n.y:Uf(a,h,p),_=l+1,A=a.heights?.slice()??new Array(_**2).fill(0),B=!1,F=!1;function H(W,V,te){B=!0;let N=V*_+W,ce=A[N],he;if(i==="raise"||i==="lower")he=ce+(i==="raise"?1:-1)*r*te;else{let Z=i==="flatten"?S:Vw(a,W,V);he=co(d[N],Z,Math.min(1,r)*te)-f[N]}he=os(he,-zu,zu),!(Math.abs(he-ce)<1e-7)&&(A[N]=he,F=!0)}for(let W=D;W<=U;W++)for(let V=T;V<=C;V++){let te=Math.hypot((V-m)*w,(W-b)*v)/s;te<1&&H(V,W,Df(1-te))}if(!B){let W=os(m,0,l),V=os(b,0,l),te=Math.min(l-1,Math.floor(W)),N=Math.min(l-1,Math.floor(V)),ce=W-te,he=V-N,Z=ce+he<=1,me=Z?1-ce-he:ce+he-1,ve=Z?ce:1-he,Ee=Z?he:1-ce;if(me>=Math.max(ve,Ee)){let _e=+!Z;H(te+_e,N+_e,1)}else ve>=Ee?H(te+1,N,1):H(te,N+1,1)}return F&&(n.terrain.heights=A),F}function D0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){let h=d*r+f;o[3*h]=(f/s-.5)*e,o[3*h+2]=(d/s-.5)*t,a[2*h]=f/s*e/2.6,a[2*h+1]=(1-d/s)*t/2.6,d<s&&f<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new tt;return u.setAttribute("position",new Mt(o,3).setUsage(Zn)),u.setAttribute("uv",new Mt(a,2)),u.setIndex(new Mt(l,1)),kw(u,n),u}function kw(n,e){let{surface:t}=Vu(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function U0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>zw(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function Gw(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new tt;return e.setAttribute("position",new ke(n,3)),e.computeVertexNormals(),e}function Hw(){return new Lt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var Ww=[{name:"grass",geometry:Gw,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:Hw,perMetre:.17,max:48,salt:47,color:"#36583c"}];function F0(n){let e=new pt;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of Ww){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new Kt({color:a,side:t==="grass"?Wt:si});u.flatShading=!0;let d=new la(i(),u,c);d.name=t,d.instanceMatrix.setUsage(Zn),d.userData.salt=o,d.receiveShadow=!0;let f=new Be;for(let h=0;h<c;h++){let p=co(.68,1.2,Bi(h,o,n.terrain.seed+4));d.setColorAt(h,f.setRGB(p,p,p))}e.add(d)}return qw(e,n),e}function qw(n,e){let t=Vu(e),i=new It;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Bi(a,r,o)-.5)*.96*e.w,c=(Bi(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Uf(t,l,c),c),i.rotation.y=Bi(a,r,o+2)*2*Math.PI,i.scale.setScalar(co(.58,1.34,Bi(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function N0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var ku=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],B0=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function O0(n,e=B0[n]){n=Math.max(0,Math.min(ku.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:B0[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function z0({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let h=c;return c=!1,h}}}var Xw=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function V0(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){Xw.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function k0(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var Gu=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:d,offset:f}=c,h=u.surface;if(c.released=null,u.surface=null,u.groundContact=!1,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&(!u.held||u.hasSupport)&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(u.hasSupport?f.copy(u.supportOffset):f.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=h&&r.includes(h)&&!h.objectBody?.owner,g=x&&h.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),d.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(f),this.from.copy(p).add(f),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(f),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let U=this.correction.subVectors(p,u.anchor),S=U.dot(d)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&U.lengthSq()<=Math.max(.12,l*.5)**2;S&&(!m||m===h&&this.hitNormal.dot(d)>.7)?(m=h,this.hit.copy(u.anchor).add(f),this.hitNormal.copy(d)):!S&&m===h&&U.dot(d)>.035&&(m=null),!m&&c.tracked&&(c.released=h,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(f),d.copy(this.hitNormal);let b=m.friction??.8,w=Math.min(1,Math.max(0,b*(.75+s.grip*.09))),v=Math.min(.97,Math.max(0,1-w+(s.slide-3)*.035)),T=this.correction.subVectors(u.anchor,p),C=T.dot(d);if(T.addScaledVector(d,-C),T.lengthSq()*v**2>.003**2){if(this.to.copy(u.anchor).add(f).addScaledVector(T,-v),this.from.copy(this.to).addScaledVector(d,.003),this.to.addScaledVector(d,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(f);else if(v>.5&&T.lengthSq()>.035**2)continue}T.subVectors(u.anchor,p),x&&T.dot(d)<0&&T.addScaledVector(d,-T.dot(d)),a.add(T);let D=m.objectBody;if(D){let U=c.inverseRotation.copy(D.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(f).sub(D.mesh.position).applyQuaternion(U),c.localNormal.copy(d).applyQuaternion(U)}if(u.surface=m,u.groundContact=d.y>.55,this.contacts++,c.tracked){let U=this.handMotion.subVectors(c.previousTarget,p),S=U.dot(d);U.multiplyScalar(1-v).addScaledVector(d,Math.max(0,S)-S*(1-v)),this.intent.add(U)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=.08,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function G0(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function H0({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new Ze,l=0,c=new Di,u=[],d=new Map,f=p0(n,{onShot:(m,b)=>r.sendShot(m,b),impact(m,b,w,v){c.set(m,b),c.far=w;let T=c.intersectObjects(u,!1)[0];if(!T)return null;let C=d.get(T.object);return v&&C&&!C.owner&&!C.frozen&&C.velocity.addScaledVector(b,Math.min(4,2.6/C.mass)),T.distance}}),h={position:new M,quaternion:new Ze,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:b,inVR:w,enabled:v,remoteWorld:T,dt:C,yaw:D,drop:U,rightHand:S,flatFiring:_}){let A=null,B=!1;if(v)if(w){let F=[...m.session.inputSources].find(W=>W.handedness==="right"),H=F&&m.getPose(F.targetRaySpace,b);if(H){let{position:W,orientation:V}=H.transform;A=h,A.position.set(W.x,W.y-U,W.z).applyAxisAngle(o,D).add(e.position),A.modelPosition.copy(S.valid?S.mesh.position:A.position),A.quaternion.set(V.x,V.y,V.z,V.w).premultiply(a.setFromAxisAngle(o,D)),B=!!F.gamepad?.buttons[0]?.pressed}}else A=h,t.getWorldPosition(A.position),t.getWorldQuaternion(A.quaternion),A.modelPosition.set(.16,-.17,-.43).applyQuaternion(A.quaternion).add(A.position),B=_;if(x=A?p:null,u.length=0,d.clear(),A||l){for(let F of i.boxes)F.mesh?.isMesh&&F.mesh.visible&&u.push(F.mesh);if(T)r.forEachReplica(F=>u.push(F));else for(let F of s)F.mesh.visible&&F.collidable&&!F.owner&&(u.push(F.mesh),d.set(F.mesh,F))}f.update({dt:C,aim:A,firing:B}),B?l=1.3:l=Math.max(0,l-C)}return{update:g,receiveShot({position:m,quaternion:b},w){f.replay(m,new Ze().copy(b),w),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function W0(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function q0(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!1,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Ys=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Hu=["Naturel","Cellulo","Affiche","R\xE9tro"],Wu={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function qu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new tt,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=X0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=X0(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function X0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Yu=0,Yw=1,Zw=new M,Y0=new Ua,Ff=new Sn,Z0=new M,Xu=new wn,Zu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new ju,this.unassigned=new ju,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Nf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Zw)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Yu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let h=s[f].point.getComponent(f)-i[f].point.getComponent(f);h>r&&(r=h,o=f)}let a=i[o],l=s[o],c,u;r=0,Y0.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Y0.closestPointToPoint(p.point,!0,Z0);let x=Z0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Ff.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Ff.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(Ff.distanceToPoint(u.point)<0){d.push(oi.create(a,l,c),oi.create(u,l,a),oi.create(u,c,l),oi.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(oi.create(a,c,l),oi.create(u,a,l),oi.create(u,l,c),oi.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Yu&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Yw;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Yu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=oi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},oi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Yu,this.edge=null}static create(e,t,i){let s=new n,r=new Ya(e,s),o=new Ya(t,s),a=new Ya(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Xu.set(e.point,t.point,i.point),Xu.getNormal(this.normal),Xu.getMidpoint(this.midpoint),this.area=Xu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ya=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Nf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},ju=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Zs=class extends tt{constructor(e=[]){super();let t=[],i=[],r=new Zu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(i,3))}};var Cn=Math.PI*2,Ju=.84,Oi=128;function cs(n){let e=new Uint8Array(Oi*Oi*4);for(let i=0;i<Oi;i++)for(let s=0;s<Oi;s++){let r=(s+.5)/Oi,o=(i+.5)/Oi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Ju,1),Math.min(o/Ju,1),s,i),l=(s+i*Oi)*4;for(let c=0;c<3;c++)e[l+c]=qe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new fi(e,Oi,Oi);return t.colorSpace=yt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=an,t.needsUpdate=!0,t}function js(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Be(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Ju,r.getY(l)*Ju):r.setXY(l,.95,.95);return i.setAttribute("color",new Mt(a,3)),i}function us(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:qu(s),material:new wt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function j0(n,e,t){let i=n/2,s=e/2,r=new Ns;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function as(n,e,t,i,s){return new wa(j0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ls(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Cn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new tt;o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Za(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Cn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new Zs(t)}function jw(){let t=new Ta(j0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=qe.clamp(i.getX(l)/.098+.5,0,1),u=qe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=cs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Cn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[it(as(.106,.207,.013,.011,.0019),8425890),it(as(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(as(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(as(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new Je(.0036,.024,.004).translate(.055,.029,0),11714250),it(new Je(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new Je(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(it(new Ht(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(it(new Jt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(it(new Jt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Zs([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return us("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Jw(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ls(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=cs((a,l,c,u)=>{let d=Cn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=js(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Za([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return us("bread","Baguette de pain",.27,o,[it(s,16777215,!0)],r,.9)}function Kw(){let n=cs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*js(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=ls([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ls([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Ht(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Ht(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(it(new Je(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Za([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return us("wheel","Roue",1.8,s,i,n,.64,.23)}function $w(){let n=cs((r,o,a,l)=>{let c=js(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=ls([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Li(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new Zs(i);return us("cup","Tasse",.39,s,[it(e,16777215,!0),it(t,15785922)],n,.37)}function Qw(){let n=ls([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=cs((s,r,o,a)=>{let l=9*js(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*Cn*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new Xr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new Jt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new Jt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Ht(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new Jt(.008,12).translate(0,.035,.0336),15633202)],i=Za([[.033,-.143],[.054,.133]],6);return us("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function eT(){let n=ls([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=cs((r,o,a,l)=>{let c=10*js(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Cn*r*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Cn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new Jt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new Xr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new Jt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Za([[.069,-.112],[.069,.109]],6);return us("soda","Canette de soda",.35,s,i,t,.42,.27)}function tT(){let n=ls([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=cs((s,r,o,a)=>{let l=15*js(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(as(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new Jt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Za([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return us("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function nT(){let n=cs((s,r,o,a)=>{let l=8*js(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ls([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(as(.138,.22,.061,.016,.004),14788675),it(as(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new Yt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Ht(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new Je(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new Je(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new Jt(.004,8).translate(.04,.066,.0397),15817792),it(new Jt(.004,8).translate(-.04,.066,.0397),7903100),it(as(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return us("radio","Talkie-walkie",.43,new Zs(i),t,n,.61,.08)}function J0(){return[jw(),Jw(),Kw(),$w(),Qw(),eT(),tT(),nT()]}var K0=new WeakMap;function Bf(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,K0.set(n,e),n}function Ku(n){let e=n.clone(),t=K0.get(n);return t?Bf(e,t):e}function iT(n){let t=new Ii(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Lt(.225,0),s=new Ea({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Bf(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function sT(n){let e=new Je(.37,.37,.37),t=new wt({color:16777215,roughness:.4});return Bf(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function $0(){let n={value:0};return{props:[iT(n),sT(n)],animate(e){n.value=e}}}var zf="gorilla-lab-models-v1",Js=Object.freeze({models:12,parts:24,fileBytes:18e4}),rT=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),ex=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),oT=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),aT=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,lT=/^#[a-f\d]{6}$/i;function Q0(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Of(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?qe.clamp(n[s],t,i):e)}function Vf(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Js.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!aT.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Js.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Q0(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(oT).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:Q0(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(rT,s?.shape)?s.shape:"box",position:Of(s?.position,0,-3,3),rotation:Of(s?.rotation,0,-360,360),scale:Of(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&lT.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(ex,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function kf(n){try{let e=(n??globalThis.localStorage)?.getItem(zf);if(e&&e.length<=Js.fileBytes)return Vf(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function cT(n){switch(n){case"sphere":return new Ii(.5,20,12);case"cylinder":return new Ht(.5,.5,1,20);case"cone":return new Fs(.5,1,20);case"torus":return new Li(.365,.135,8,24);case"capsule":return new ma(.28,.44,6,16);case"diamond":return new Pi(.5);default:return new Je(1,1,1)}}var tx=Object.keys(ex),ho=64,ja=4,nx=2,zi;function uT(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function hT(){if(zi)return zi;let n=ho*ja,e=ho*nx,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/ho)*ja+Math.floor(s/ho),o=uT(tx[r],s%ho,i%ho),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return zi=new fi(t,n,e),zi.colorSpace=yt,zi.magFilter=an,zi.minFilter=An,zi.generateMipmaps=!0,zi.needsUpdate=!0,zi}function dT(n){let e=cT(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(qe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new Be(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=tx.indexOf(n.surface),c=l%ja,u=Math.floor(l/ja);for(let d=0;d<r;d++)s.toArray(o,d*3),a.setXY(d,(c+.05+a.getX(d)*.9)/ja,(u+.05+a.getY(d)*.9)/nx);return t.setAttribute("color",new Mt(o,3)),t}function ix(){return new wt({vertexColors:!0,map:hT(),roughness:.68})}function sx(n){let e=n.map(dT),t=qu(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function rx(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=sx(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:ix(),collisionGeo:new Je(i.x,i.y,i.z),mass:qe.clamp(i.x*i.y*i.z*9,.18,12)}})}function ox(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=sx(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Ne(t,ix());r.castShadow=!0;let o=new pt;return o.add(r),o}var zt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),ax=zt(-24,24,-51,7),$u={x:0,y:0,z:3},Qu={x:.05,y:1.16,z:5.9},fo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:zt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:zt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:zt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:zt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:zt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:zt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:zt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:zt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:zt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:zt(9,23,-48,-37),sign:[16,-38.2]}},zC=[zt(-9,-6,-51,7),zt(6,9,-51,7),zt(-24,24,-8,-5),zt(-24,24,-27,-23),zt(9,23,-37,-34)],lx=[{name:"Glace",bounds:fo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:fo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:zt(-9,9,-51,7)},{name:"Sol ouest",bounds:zt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:zt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:zt(-24,-23,-51,7)},{name:"Sol est",bounds:zt(9,23,-51,-48)},{name:"Sol est",bounds:zt(9,23,-37,7)},{name:"Bordure est",bounds:zt(23,24,-51,7)}],po={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},mo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Gf=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Hf={x:16,z:-31},Wf={x:16,y:1.52,z:-21},eh={x:-19.4,y:.68,z:-3.25},cx=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),ux={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Wf.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function th(n,e,t){let i=new Je(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Rn=new Ze,Vt=new M,ch=new M,fT=new at,hx=new WeakMap;function fh(n){if(n.heightfield||n.objectBody)return null;let e=hx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=fT.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return hx.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function yx(n,e,t){let i=fh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function uh(n,e,t,i){if(t.heightfield)return TT(n,e,t,i);if(t.objectBody)return Cx(n,e,t.objectBody,i);if(!yx(n,e,t))return 0;Rn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Rn);let s=t.half;ch.copy(Vt).clamp(t.min,s),i.subVectors(Vt,ch);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Vt.x),a=s.y-Math.abs(Vt.y),l=s.z-Math.abs(Vt.z);return o<=a&&o<=l?i.set(Math.sign(Vt.x)||1,0,0):a<=l?i.set(0,Math.sign(Vt.y)||1,0):i.set(0,0,Math.sign(Vt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,Vi=new M;function ep(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=uh(n,e,c,rt);if(!u||(n.addScaledVector(rt,u+1e-4),rt.y>.65&&(a=!0),!i))continue;let d=i.dot(rt);d<0&&i.addScaledVector(rt,-d*(Math.abs(d)<.55?1:1+s)),Vi.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(Vi,-Math.min(.95,r*c.friction*o))}return a}var qf=new M,vo=[];function Mo(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));vo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=fh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&vo.push(h)}for(let h=1;h<=o;h++){qf.copy(n).lerp(e,h/o);for(let p of vo){let x=uh(qf,t,p,rt);if(x)return s.copy(qf).addScaledVector(rt,x+.001),r.copy(rt),p}}return null}var $a=new M,el=new M,_o=new M,vx=new wn,Qa=new M;function bo(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),g=x(p),m=x(p+1),b=x(p+2),w=new wn(g,m,b).getNormal(new M);w.lengthSq()>.1&&s.push({a:g,b:m,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new rn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function ph(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Rn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Rn),i.faces.every(r=>r.n.dot($a.subVectors(Vt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)vx.set(r,o,a).closestPointToPoint(Vt,Qa),s=Math.min(s,Vt.distanceToSquared(Qa));return Math.sqrt(s)}function pT(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=uh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Rn.copy(e.quaternion).invert(),Vt.copy(s.position).sub(e.position).applyQuaternion(Rn),ch.copy(Vt).clamp(e.min,e.half),Vt.distanceToSquared(ch)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){$a.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=uh($a,.007,e,_o);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy($a),t.copy(_o)):Math.abs(c-o)<.003&&_o.dot(t)>.98&&(i.lerp($a,1/++a),o=Math.max(o,c)))}return o}var nh=new M,mT=new M,ih=new M,gT=new M,xT=new M;function ki(n){return bo(new Je(n.x*2,n.y*2,n.z*2))}function mh(n,e,t){let i=gT.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=xT.copy(o).negate(),c=Qs(n,l)+Qs(e,o)-a,u=Qs(n,o)+Qs(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(nh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(nh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){ih.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(nh.copy(a).applyQuaternion(e.mesh.quaternion).cross(ih)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(mT.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Rn.copy(a.mesh.quaternion).invert(),Vt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Rn);for(let{a:c,b:u,c:d}of a.shape.faces){vx.set(c,u,d).closestPointToPoint(Vt,Qa);let f=Vt.distanceToSquared(Qa);f<l&&(l=f,ih.copy(Qa))}if(!r(nh.subVectors(Vt,ih).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var yT=new M;function vT(n,e,t){Rn.copy(e.quaternion).invert(),Vt.copy(n.mesh.position).sub(e.position).applyQuaternion(Rn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Vt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Vt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+Qs(n,yT.copy(t).negate())-s,a=r+Qs(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function tp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return pT(n,e,t,i??el);let s=vT(n,e,t)??mh(n,e,t);return s>0&&i&&bx(n,e,t,i),s}var Kf=bo(new Pi(1,0).scale(.055,.033,.075)),sh={mesh:{position:new M,quaternion:new Ze},shape:Kf,radius:Kf.radius,precise:!0};function _x(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Kf.radius;vo.length=0;for(let c of i){let u=fh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||vo.push(c)}sh.mesh.quaternion.copy(t);let l=sh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of vo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?mh(sh,d,rt):tp(sh,u,rt);if(f>0)return s.copy(l).addScaledVector(rt,f+5e-4),r.copy(rt),u}}return null}function tl(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!yx(n.mesh.position,n.radius,s))continue;let r=tp(n,s,rt);r<=1e-6||(n.mesh.position.addScaledVector(rt,r),i=!0)}if(!i)break}}var Xf=new M,Ja=new M,rh=new M,Yf=new Ze,hs=new Ze,dx=new Ze;function fx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Mx(n,e,t,i,s){let{mesh:r,shape:o}=n;Xf.copy(r.position),Yf.copy(r.quaternion),Ja.subVectors(e,Xf);let a=fx(Yf,t,hs),l=Ja.length()+a*o.radius,c=Ax(o),u=Math.max(1,Math.min(Tx,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;rh.set(hs.x,hs.y,hs.z).normalize(),dx.setFromAxisAngle(rh,f),Ja.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(Ja),r.quaternion.premultiply(dx).normalize(),tl(n,i);let h=Math.max(.006,s||0);n.velocity.lerp(Ja.subVectors(r.position,Xf).divideScalar(h).clampLength(0,23),.52);let p=fx(Yf,r.quaternion,hs);rh.set(hs.x,hs.y,hs.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(rh,.52)}function Qs(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Rn.copy(n.mesh.quaternion).invert(),_o.copy(e).applyQuaternion(Rn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(_o));return t}var yo=new M,hh=new M,_T=new M,Zf=new M,go={},xo={};function px(n,e,t,i){let{mesh:s,shape:r}=n,o=Qs(n,_T.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(yo),i.minV=i.maxV=s.position.dot(hh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(_o)<o-.0015)continue;Zf.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=Zf.dot(yo),c=Zf.dot(hh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function bx(n,e,t,i){Math.abs(t.y)<.8?yo.set(-t.z,0,t.x).normalize():yo.set(t.y,-t.x,0).normalize(),hh.crossVectors(t,yo),px(n,t,-1,go),px(e,t,1,xo);let s=(Math.max(go.minU,xo.minU)+Math.min(go.maxU,xo.maxU))*.5,r=(Math.max(go.minV,xo.minV)+Math.min(go.maxV,xo.maxV))*.5;i.copy(t).multiplyScalar((go.plane+xo.plane)*.5).addScaledVector(yo,s).addScaledVector(hh,r)}var mx=new M;function dh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)mx.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(mx)}}function MT(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Sx(n){return!n.owner&&!n.frozen}var Ks=new M,$s=new M,Ka=new M,gx=new M,$f=new M,Qf=new M,bT=new M;function oh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function wx(n,e,t,i){let{mesh:s,shape:r}=n.body;return Rn.copy(s.quaternion).invert(),$f.crossVectors(e,t),i.copy($f).applyQuaternion(Rn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function ah(n,e,t){return n?.inverseMass?(wx(n,e,t,Qf),n.inverseMass+$f.dot(Qf)):0}function lh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(wx(n,e,t,Qf),i))}function jf(n){return n.friction??n.spec?.friction??.78}function xx(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(jf(r)*jf(o)):Math.min(jf(r),t.friction??.78);Ks.subVectors(el,r.mesh.position),o&&$s.subVectors(el,o.mesh.position),oh(n,Ks,Ka).sub(oh(e,$s,gx));let l=Ka.dot(rt),c=!1;if(l<-1e-5){let d=l<-.8?qe.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(ah(n,Ks,rt)+ah(e,$s,rt));lh(n,Ks,rt,f),lh(e,$s,rt,-f),oh(n,Ks,Ka).sub(oh(e,$s,gx)),Vi.copy(Ka).addScaledVector(rt,-Ka.dot(rt));let h=Vi.length();if(h>1e-5&&a>0){Vi.divideScalar(h);let p=Math.min(f*a,h/(ah(n,Ks,Vi)+ah(e,$s,Vi)));lh(n,Ks,Vi,-p),lh(e,$s,Vi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(rt,u*n.inverseMass/d),dh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/d),dh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function ST(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Tx=96,wT=5;function Ax(n){return Math.max(.008,n.thickness*.35)}function Ex(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:fh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=Sx(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/Ax(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new rn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};dh(f),o.push(f)}l=Math.min(Tx,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:x}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(r?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let g=x.length();g>1e-5&&h.rotateOnWorldAxis(bT.copy(x).divideScalar(g),Math.min(g,30)*c),dh(d)}for(let d=0;d<wT;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!MT(h.bounds,p,x))continue;let g=tp(h.body,p,rt,el);g>0&&(f=xx(h,null,p,g,s)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=mh(p.body,g.body,rt);m<=0||(bx(p.body,g.body,rt,el),f=xx(p,g,null,m,s)||f)}}if(!f)break}for(let d of o)d.inverseMass&&ST(d,c)}}function TT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var Jf={mesh:{position:null,quaternion:new Ze},shape:{sphereRadius:0,normals:[],edges:[]}};function Cx(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Jf.mesh.position=n,Jf.shape.sphereRadius=e,mh(Jf,t,i))}function Rx(n,e,t,i,s){let r=Cx(n,e,t,rt);if(r<=0)return!1;n.addScaledVector(rt,r+.001),s?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Sx(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var np=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Ix=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],ip={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},gh=3e6,nl=240,gn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Px=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function xh(n){if(typeof n=="string"){if(n.length>gh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>nl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+nl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:Px(n.name,56,"Ma map"),spawn:{x:gn(e.x,-120,120,0),y:gn(e.y,-10,30,.06),z:gn(e.z,-120,120,3),yaw:gn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?uo(t.terrain):null;return{name:Px(t.name,36,"Pi\xE8ce "+(i+1)),x:gn(t.x,-120,120,0),y:gn(t.y,-12,33,0),z:gn(t.z,-120,120,0),w:gn(t.w,.2,64,3),h:gn(t.h,.12,36,.5),d:gn(t.d,.2,64,3),pitch:s?0:gn(t.pitch,-70,70,0),yaw:s?0:gn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(gn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:gn(t.grip,0,1.5,.8),gravity:gn(t.gravity,.05,2.5,1),bounce:gn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function yh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Lx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,d=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,f=m=>Math.round(m/i)*i,h=f(n.x+u.x*d),p=f(n.y+u.y*d),x=f(n.z+u.z*d),g=d-(h-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return h+=u.x*g,p+=u.y*g,x+=u.z*g,![h,p,x].every(Number.isFinite)||Math.abs(h)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:h,y:p,z:x}}var il="gorilla-lab-custom-map-v1";function Dx(n){let e=new Blob([JSON.stringify(xh(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function Ux({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new pt;n.add(l);let c=[],u=[],d=new Ra,f=new Map,h=0,p=null,x="",g=-1,m=-1,b="",w="",v=new Je(1,1,1),T=new Ne(v,new mt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));T.visible=!1,n.add(T);let C=new Di,D=new M,U=new M,S=document.querySelector("#map-note");function _(ee){b=ee,S.textContent=ee}function A(){u.length>=20&&u.shift(),u.push(JSON.stringify(p))}function B(ee,oe){let Q=f.get(ee);if(!Q){Q={materials:new Set,texture:null,failed:!1},f.set(ee,Q);let de=Y=>{if(!(f.get(ee)!==Q||Q.failed)){Q.failed=!0;for(let I of Q.materials)I.map=null,I.needsUpdate=!0;Q.texture?.dispose(),Y&&_(Y)}},P=d.load(ee,Y=>{(Y.image.width>2048||Y.image.height>2048)&&de("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>de());Q.texture=P,P.colorSpace=yt,P.wrapS=P.wrapT=di}return Q.materials.add(oe),oe.map=Q.failed?null:Q.texture,Q}function F(){for(let[ee,oe]of f)oe.materials.size||(f.delete(ee),oe.failed||oe.texture.dispose())}function H(ee){let oe=e.mapMaterial(ee.material,r());if(!ee.texture&&ee.color==="#ffffff")return{material:oe,custom:!1};let Q=oe.clone();return Q.onBeforeCompile=oe.onBeforeCompile,Q.customProgramCacheKey=oe.customProgramCacheKey,Q.color.multiply(new Be(ee.color)),{material:Q,custom:!0,ownTexture:ee.texture?B(ee.texture,Q):null}}function W(ee){l.remove(ee.mesh),ee.mesh.geometry.dispose(),ee.vegetation&&N0(ee.vegetation),ee.custom&&(ee.ownTexture?.materials.delete(ee.mesh.material),ee.mesh.material.dispose())}function V(ee,oe){let{material:Q,custom:de,ownTexture:P}=H(ee),Y=new Ne(ee.terrain?D0(ee):th(ee.w,ee.h,ee.d),Q);Y.position.set(ee.x,ee.y,ee.z),Y.rotation.set(qe.degToRad(ee.pitch),qe.degToRad(ee.yaw),0,"YXZ"),Y.castShadow=Y.receiveShadow=!0,Y.userData.mapIndex=oe,l.add(Y);let I=new M(ee.w/2,ee.h/2,ee.d/2),z={mesh:Y,position:Y.position,quaternion:Y.quaternion,half:I,min:I.clone().negate(),shape:ki(I),friction:ee.grip,gravity:ee.gravity,bounce:ee.bounce,zone:!0,type:ee.material};if(!ee.terrain)return{mesh:Y,collider:z,custom:de,ownTexture:P};let O=F0(ee);return O&&Y.add(O),{mesh:Y,collider:U0(ee,Y),custom:de,ownTexture:P,vegetation:O}}function te(){for(let ee of c){let oe=p?.pieces[ee.mesh.userData.mapIndex];if(!oe||ee.ownTexture)continue;let Q=e.mapMaterial(oe.material,r());ee.custom?ee.mesh.material.map!==Q.map&&(ee.mesh.material.map=Q.map,ee.mesh.material.needsUpdate=!0):ee.mesh.material=Q}}function N(){for(let oe of c)W(oe);c.length=0;let ee=p?.pieces??[];x=p?"custom-"+Xs(JSON.stringify(p)):"",o.forEach(oe=>oe.visible=!p);for(let oe=0;oe<ee.length;oe++)c.push(V(ee[oe],oe));if(F(),p?e.boxes.splice(0,e.boxes.length,...c.filter((oe,Q)=>ee[Q].solid).map(oe=>oe.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),p)try{localStorage.setItem(il,JSON.stringify(p))}catch{}else try{localStorage.removeItem(il)}catch{}}function ce(ee){let oe=xh(ee);h++,u.length=0,p=oe,g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),N(),i(p.spawn.yaw),_("Map : "+p.name+" \xB7 "+p.pieces.length+" pi\xE8ces")}function he(){h++,p=null,u.length=0,g=m=-1,t.set(0,0,3),N(),i(0),_("Ar\xE8ne int\xE9gr\xE9e")}function Z(){ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[yh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function me(){if(!u.length)return _("Rien \xE0 annuler.");p=xh(u.pop()),g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),N(),_("Derni\xE8re modification annul\xE9e.")}function ve(){p?Dx(p):_("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Ee(ee,oe,Q,de){p&&(A(),p.spawn={x:ee,y:oe,z:Q,yaw:qe.radToDeg(de)},t.set(ee,oe,Q),N(),_("Point de d\xE9part m\xE9moris\xE9."))}function _e(ee,oe,Q,{mode:de,piece:P,head:Y,feet:I}){C.set(ee,oe),C.far=12;let z=C.intersectObjects(c.map(R=>R.mesh),!1),O=de>=5?z.find(R=>p?.pieces[R.object.userData.mapIndex]?.terrain):z[0];if(T.visible=!1,!p)return;if(de>=5){let R=O?.object.userData.mapIndex,y=p.pieces[R];if(!y?.terrain||!Q)return;if(A(),de===9){let L=P.terrain?.detail??y.terrain.detail,X=I0(y.terrain,L);y.terrain=uo({...X,...P.terrain,heights:X.heights})}else{let L={mode:["raise","lower","smooth","flatten"][de-5],radius:P.brushRadius,strength:P.brushStrength,target:y.y};L0(y,O.point.x,O.point.z,L)}N(),_("Relief modifi\xE9.");return}if(de===2||de===3||de===4){if(!O)return;let R=O.object.userData.mapIndex,y=p.pieces[R];if(Q&&de===2&&(g=R,m=R,_("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Q&&de===3){if(p.pieces.length===1)return _("Garde au moins une pi\xE8ce dans la map.");A(),p.pieces.splice(R,1),g=m=-1,N(),_("Pi\xE8ce supprim\xE9e.")}Q&&de===4&&(A(),Object.assign(p.pieces[R],{material:P.material,grip:P.grip,gravity:P.gravity,bounce:P.bounce,solid:P.solid,texture:P.texture}),N(),_("Surface modifi\xE9e.")),O&&(T.position.copy(O.object.position),T.rotation.copy(O.object.rotation),T.scale.set(y.w,y.h,y.d).multiplyScalar(1.006),T.visible=!0,T.material.color.set(de===3?"#ff8271":"#ffe2a2"));return}if(!O)return;let j=m>=0?p.pieces[m]:P;if(O.object.userData.mapIndex===m)return;D.copy(O.face.normal).transformDirection(O.object.matrixWorld);let q=j.terrain?{...j,x:Math.round(O.point.x*2)/2,y:O.point.y,z:Math.round(O.point.z*2)/2,pitch:0,yaw:0}:Lx(O.point,D,j);if(!q)return;T.position.set(q.x,q.y,q.z),T.rotation.set(qe.degToRad(q.pitch),qe.degToRad(q.yaw),0,"YXZ"),T.scale.set(q.w,q.h,q.d),T.updateMatrixWorld(!0),T.visible=!0;let ie=new rn().setFromObject(T),Me=new rn(new M(Y.x-.26,I+.01,Y.z-.26),new M(Y.x+.26,Y.y+.19,Y.z+.26)),Pe=q.solid&&ie.intersectsBox(Me);if(T.material.color.set(Pe?"#fd7763":"#8be4b9"),Q){if(Pe)return _("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(m<0&&p.pieces.length>=nl)return _("Limite de "+nl+" pi\xE8ces atteinte.");A(),m>=0?(p.pieces[m]=q,m=-1):p.pieces.push(q),N(),_("Pi\xE8ce pos\xE9e \xB7 "+p.pieces.length+" pi\xE8ces")}}let ne=document.querySelector("#map-file"),se=document.querySelector("#map-url");ne.onchange=async()=>{let ee=ne.files[0];if(!ee)return;let oe=++h;ne.value="";try{if(ee.size>gh)throw Error("Map trop lourde.");let Q=await ee.text();oe===h&&ce(Q)}catch(Q){oe===h&&_(Q.message)}};async function ye(ee){let oe=++h;try{let Q=new URL(ee,location.href);if(!["http:","https:"].includes(Q.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let de=await fetch(Q,{credentials:"omit"});if(oe!==h)return;if(!de.ok)throw Error("URL de map inaccessible ("+de.status+").");if(Number(de.headers.get("content-length"))>gh)throw Error("Map trop lourde.");let Y=await de.text();oe===h&&ce(Y)}catch(Q){oe===h&&_(Q.message)}}return document.querySelector("#map-load-url").onclick=()=>ye(se.value),document.querySelector("#map-export").onclick=ve,document.querySelector("#map-reset").onclick=he,{modelPieces:()=>p?.pieces.filter(ee=>!ee.terrain&&ee.name!=="Sol")??[],refreshMaterials:te,load:ce,loadURL:ye,reset:he,blank:Z,undo:me,save:ve,edit:_e,recenter:Ee,inform:_,clearGhost(){T.visible=!1},get active(){return!!p},get status(){return b},get yaw(){return p?.spawn.yaw??0},get nodes(){return p?.pieces.length??0},get name(){return p?.name??null},get signature(){return x}}}var sp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Fx(){let n=new Ne(new Yt(2,2),new cn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+sp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Nx(n){let e=new Us,t=new Gt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Ae(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},s=new cn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+sp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),r=new Ne(new Yt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let w=l[b],v=Math.max(32,Math.round(w.viewport.z)),T=Math.max(32,Math.round(w.viewport.w)),C=a[b];C?(C.width!==v||C.height!==T)&&C.setSize(v,T):C=a[b]=new Tn(v,T,{type:o?mi:zn,minFilter:on,magFilter:on,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=b===0&&g,n.setRenderTarget(C),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Bx(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Ox(n,e,t){let i=new Kt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Ht(.16,.25,3.15,9,12),r=s.attributes.position,o=new Be,a=[];for(let Z=0;Z<r.count;Z++){let me=Math.round((r.getY(Z)+1.575)/3.15*12),ve=Math.floor((Math.atan2(r.getX(Z),r.getZ(Z))+Math.PI)*1.43);o.setHSL(.084+me*.002,.35,.35+me%3*.032+ve%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new ke(a,3));let l=new pt;l.position.set(Hf.x,0,Hf.z),l.rotation.z=-.14,n.add(l);let c=new Ne(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(Z,me,ve=.85){let Ee=Z.getWorldPosition(new M),_e=Z.getWorldQuaternion(new Ze);e.push({half:me,min:me.clone().negate(),position:Ee,quaternion:_e,mesh:{position:Ee,quaternion:_e},shape:ki(me),friction:ve,gravity:1})}for(let Z=0;Z<4;Z++){let me=new It;me.position.y=(Z+.5)*3.15/4,l.add(me);let ve=.237-Z*.022;u(me,new M(ve,.398,ve))}let d=[],f=[],h=3.14;function p(Z,me,ve,Ee){d.push(...Z,...me,...ve),o.setHSL(.25+Ee*.043,.54,.28+Ee*.17);for(let _e=0;_e<3;_e++)f.push(o.r,o.g,o.b)}for(let Z=0;Z<10;Z++){let Ee=function(_e,ne){let se=_e*ve;return[Math.cos(me)*se-Math.sin(me)*ne,h+Math.sin(_e*Math.PI)*.38-_e*_e*.54+Z%3*.055,Math.sin(me)*se+Math.cos(me)*ne]},me=Z*2.39996,ve=1.35+Z%4*.2;for(let _e=0;_e<7;_e++){let ne=_e/7,se=(_e+1)/7,ye=.285*Math.sin(Math.PI*ne)**.7,ee=.285*Math.sin(Math.PI*se)**.7;for(let oe of[-1,1]){let Q=Ee(ne,ye*oe),de=Ee(se,ee*oe);Q[1]-=.065,de[1]-=.065,p(Ee(ne,0),Q,de,.31+_e%4*.14),p(Ee(ne,0),de,Ee(se,0),.47+Z%3*.16)}}}let x=new tt;x.setAttribute("position",new ke(d,3)),x.setAttribute("color",new ke(f,3)),x.computeVertexNormals();let g=new Ne(x,new Kt({vertexColors:!0,side:Wt,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new wt({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let Z=0;Z<5;Z++){let me=Z*Math.PI*2/5,ve=new Ne(new Lt(.124,1),m);ve.position.set(Math.cos(me)*(.25+Z%2*.1),2.88+Z%3*.06,Math.sin(me)*(.25+Z%2*.1)),ve.scale.set(.91,1.16,.91),ve.castShadow=!0,l.add(ve),b.push(ve)}l.updateMatrixWorld(!0);let w=[],v=[],T=new Kt({color:"#485d5d",flatShading:!0});function C([Z,me],ve,Ee){let _e=new Ne(new Je(.095,.68,.11),T);_e.position.set(Z,.34,me+.46),_e.castShadow=_e.receiveShadow=!0,n.add(_e),u(_e,new M(.0475,.34,.055));let ne=new pt;ne.position.set(Z,.85,me+.4),ne.rotation.x=-.35,n.add(ne);let se=new Ne(new Je(.64,.36,.055),new Kt({color:"#182831"}));ne.add(se);let ye=document.createElement("canvas");ye.width=512,ye.height=96;let ee=ye.getContext("2d"),oe=new Xn(ye);oe.colorSpace=yt;let Q=new Ne(new Yt(.61,.095),new mt({map:oe}));Q.position.set(0,.116,.03),ne.add(Q);let de=.592/Ee.length,P=Ee.map(([I,z],O)=>{let j=new Ne(new Je(de-.012,.155,.04),new Kt({color:"#478086"}));j.position.set(-.296+de*(O+.5),-.045,.046),ne.add(j),w.push(j),j.userData.touchWidth=de-.012;let q=document.createElement("canvas");q.width=208,q.height=172;let ie=new Xn(q);ie.colorSpace=yt;let Me=new Ne(new Yt(de-.017,.139),new mt({map:ie}));Me.position.z=.0205,j.add(Me);let Pe=-1/0;return j.userData.action=()=>{let R=performance.now();R-Pe<250||(Pe=R,z(),D(),j.position.z=.036,setTimeout(()=>{j.position.z=.046},115))},{label:I,context:q.getContext("2d"),texture:ie}});function Y(){ee.fillStyle="#182831",ee.fillRect(0,0,512,96),ee.fillStyle="#ffe1a0",ee.font="bold 38px system-ui",ee.fillText(ve,17,62,478);for(let I of P){let z=I.context;z.fillStyle="#386269",z.fillRect(0,0,208,172),z.fillStyle="#fff2d5",z.textAlign="center",z.font="bold 27px system-ui";let O=(typeof I.label=="function"?I.label():I.label).split("|");O.forEach((j,q)=>z.fillText(j,104,(O.length>1?68:97)+q*37,188)),I.texture.needsUpdate=!0}oe.needsUpdate=!0}v.push(Y)}function D(){for(let Z of v)Z()}C(po.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,mo[0])],["Boule",()=>t.spawn(1,mo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,mo[0])],["Vider",t.clear]]),C(po.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,mo[1])],["Sph\xE8re",()=>t.spawn(5,mo[1])]]),C(po.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),C(po.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),C(po.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),D();let U=new pt,{x:S,y:_,z:A}=Wf;U.position.set(S,_,A),n.add(U);let B=["#e2ad5c","#ca664b","#f5e5bd"];for(let Z=0;Z<3;Z++){let me=[.9,.58,.27][Z],ve=new Ne(new Jt(me,20),new Kt({color:B[Z],side:Wt}));ve.position.z=Z*.012,U.add(ve)}let F=new Ne(new Je(.14,1.5,.14),T);F.position.set(0,.75-_,-.11),U.add(F);let H=0,W=document.createElement("canvas");W.width=256,W.height=64;let V=W.getContext("2d"),te=new Xn(W);te.colorSpace=yt;let N=new Ne(new Yt(1.4,.35),new mt({map:te,side:Wt}));N.position.set(0,2.64-_,.02),U.add(N);function ce(){V.fillStyle="#182831",V.fillRect(0,0,256,64),V.textAlign="center",V.font="bold 28px system-ui",V.fillStyle="#fff0ce",V.fillText("CIBLE  \xB7  "+H,128,42),te.needsUpdate=!0}function he(Z){for(let me of Z){if(!me.beforePhysics||me.owner||me.frozen||!me.mesh.visible)continue;let ve=me.beforePhysics,Ee=me.mesh.position;if(ve.z<=A||Ee.z>A||me.velocity.z>=-1)continue;let _e=(ve.z-A)/(ve.z-Ee.z),ne=Math.hypot(qe.lerp(ve.x,Ee.x,_e)-S,qe.lerp(ve.y,Ee.y,_e)-_);ne<=.9+me.radius*.45&&(H+=ne<.27?3:ne<.58?2:1,ce())}}return ce(),{targets:w,coconuts:b,redraw:D,updateTarget:he,score:()=>H,setScore(Z){H=Z,ce()}}}function sl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var ds=(n,e,t)=>n+(e-n)*t,So=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function vh(n,e){let t=Math.floor(n),i=Math.floor(e),s=So(0,1,n-t),r=So(0,1,e-i);return ds(ds(sl(t,i),sl(t+1,i),s),ds(sl(t,i+1),sl(t+1,i+1),s),r)}function zx(n,e){return vh(n,e)*.54+vh(n*2.07+3.4,e*2.07-6.1)*.26+vh(n*4.2+9,e*4.2)*.13+vh(n*8.6,e*8.6-13)*.07}function Vx(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=r.map((p,x)=>ds(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,b=0;if(c>.025)if(n){let v=sl(p+792,l+677);v>.9988&&(b=(v-.9988)*49e3*So(.09,.3,c))}else{let[v,T]=s[p],C=2.8*u/(c+.16),D=v*C+3.6,U=T*C-8.1,S=zx(D,U),_=zx(D-.12,U-.09);g=So(.49,.66,S)*So(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-_)*5+(S-.54)*.8))}let w=n?1:ds(.94,1,So(.05,.34,c));i[x]=ds(h[0],(139+115*m)*w,g)+b,i[x+1]=ds(h[1],(154+100*m)*w,g)+b*.94,i[x+2]=ds(h[2],(178+77*m)*w,g)+b*.86,i[x+3]=255}}let a=new fi(i,1024,512,En);return a.colorSpace=yt,a.wrapS=di,a.magFilter=an,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function kx(){return{day:Vx(!1),night:Vx(!0)}}function _h(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Xn(i);return s.colorSpace=yt,s}function Gx(n,e){let{day:t,night:i}=kx(),s=new Ne(new Ii(180,40,20),new mt({map:t,side:un,fog:!1,toneMapped:!1}));n.add(s);let r=_h(128,128,(y,L)=>{let X=y.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);X.addColorStop(0,"#fff8df"),X.addColorStop(.12,"#fff3bd"),X.addColorStop(.18,"rgba(255,225,144,.40)"),X.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=X,y.fillRect(0,0,L,L)}),o=new aa(new zr({map:r,blending:Yn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=jr,a.needsUpdate=!0;let l=new no(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Pa("#daeaff","#88724c",2.25),u=new Da("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=f[y]?y:0;let L=f[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,d.set(...L.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=h===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let L=u.target.position,X=Math.round(y.x/4)*4,re=Math.round(y.y/4)*4,J=Math.round(y.z/4)*4;L.x===X&&L.y===re&&L.z===J||(L.set(X,re,J),u.position.copy(L).add(d))}let g=0;n.background=new Be(f[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(y,L,X){let[,re,J]=m[L],be=512;y.save(),y.scale(X/512,X/512),y.fillStyle=re,y.fillRect(0,0,be,be);let fe=L+19;function xe(){return fe=Math.imul(fe,1664525)+1013904223>>>0,fe/4294967296}if(y.fillStyle=J,L===16){for(let pe=0;pe<16;pe++)for(let ue=0;ue<16;ue++)(ue+pe)%2===0&&y.fillRect(ue*32,pe*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let pe=L===15?32:64;y.globalAlpha=.48;for(let ue=0;ue<be;ue+=pe){y.fillRect(0,ue,be,L===8?3:2);for(let Te=-pe;Te<be;Te+=pe)y.fillRect(Te+ue/pe%2*(L===2?pe/2:0),ue,2,pe)}}else if([4,5,6,7,10,11,12].includes(L)){let pe=L===5?38:L===7?64:18;for(let ue=0;ue<pe;ue++){y.strokeStyle=J,y.globalAlpha=.08+xe()*.22,y.lineWidth=L===5?1+xe()*8:1+xe()*4;let Te=xe()*be,ze=L===5?.018:.009;y.beginPath();for(let Se=0;Se<=be;Se+=8){let Re=Te+Math.sin(Se*ze+ue)*(L===6||L===7?4:12+ue%5*3)+(L===4?Se*.28:0);Se===0?y.moveTo(Se,Re):y.lineTo(Se,Re)}y.stroke()}}else{y.globalAlpha=.27;for(let pe=0;pe<120;pe++){let ue=xe()*be,Te=xe()*be,ze=2+xe()*6;y.beginPath(),y.arc(ue,Te,ze,0,Math.PI*2),y.fill()}}if(L!==16)for(let pe=0;pe<4400;pe++)y.globalAlpha=.05+xe()*.1,y.fillStyle=xe()>.5?J:"#222324",y.fillRect(xe()*be,xe()*be,1+xe()*4,1+xe()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=m.map(([y,L,X,re,J,be],fe)=>{let xe=w.has(fe)?512:256,pe=_h(xe,xe,Te=>b(Te,fe,xe));pe.wrapS=pe.wrapT=di;let ue=new wt({map:pe,roughness:re,metalness:J,flatShading:!0,opacity:be,transparent:be<1,depthWrite:be===1});return ue.name=y,ue}),T=v.map(y=>y.map.image),C=512,D=v.map(y=>new Kt({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),U={value:0},S={value:.24},_={value:null},A={value:0};function B(){_.value?.dispose(),_.value=_h(512,512,(y,L)=>{y.fillStyle="#ffffff",y.fillRect(0,0,L,L);let X=L/52,re=L/64;for(let J of F){if(!J.position||!J.half||J.position.y+J.half.y<.22)continue;let be=(J.position.x+26)*X,fe=(J.position.z+54)*re,xe=Math.min(55,J.half.x*X+5),pe=Math.min(72,J.half.z*re+6);y.save(),y.translate(be+J.half.y*X*.2,fe+J.half.y*re*.24),y.scale(xe,pe);let ue=y.createRadialGradient(0,0,.15,0,0,1);ue.addColorStop(0,"rgba(22,37,65,.54)"),ue.addColorStop(.58,"rgba(36,54,76,.29)"),ue.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ue,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...D])y.onBeforeCompile=L=>{L.uniforms.uFocusAmount=U,L.uniforms.uFocusRadius=S,L.uniforms.uLabLightmap=_,L.uniforms.uLabBakedStrength=A,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let F=[],H=[];function W(y,L,X,re,J,be,fe,xe=0,pe=0,ue=1,Te=1,ze=!1){let Se=new Ne(ze?new Je(J,be,fe):th(J,be,fe),v[xe]);Se.position.set(L,X,re),Se.rotation.x=pe,Se.receiveShadow=!0,Se.castShadow=!0,n.add(Se);let Re=new M(J/2,be/2,fe/2),He={mesh:Se,position:Se.position,quaternion:Se.quaternion,half:Re,min:Re.clone().negate(),friction:ue,gravity:Te,name:y,type:xe,shape:ki(Re)};return F.push(He),He}let V=lx.map(({name:y,bounds:L,type:X=0,friction:re=.78,gravity:J=1})=>{let{xMin:be,xMax:fe,zMin:xe,zMax:pe}=L;return W(y,(be+fe)/2,-.33,(xe+pe)/2,fe-be,.66,pe-xe,X,0,re,J)});for(let y of Object.values(ux))for(let L of y)W(...L);let{xMin:te,xMax:N,zMin:ce,zMax:he}=ax;W("But\xE9e arri\xE8re",0,1.35,ce+.4,N-te,2.7,.6,2),W("But\xE9e ouest",te+.3,1.05,(ce+he)/2,.6,2.1,he-ce,2),W("But\xE9e est",N-.3,1.05,(ce+he)/2,.6,2.1,he-ce,2);let{xMin:Z,xMax:me,zMin:ve,zMax:Ee}=fo.hills.bounds,_e=me-Z,ne=Ee-ve,se=16,ye=64,ee=new Yt(_e,ne,se,ye).rotateX(-Math.PI/2).translate(Z+_e/2,0,ve+ne/2),oe=ee.attributes.uv;for(let y=0;y<oe.count;y++)oe.setXY(y,oe.getX(y)*_e/2.6,oe.getY(y)*ne/2.6);let Q=ee.attributes.position,de;function P(y){if(de===y)return;de=y;let L=de*.017;for(let X=0;X<Q.count;X++){let re=Q.getX(X),J=Q.getZ(X),be=Math.sin(Math.PI*qe.clamp((re-Z)/_e,0,1)),fe=Math.min(1,(J-ve)*.48,(Ee-J)*.48),xe=.93+.56*Math.sin(J*.36+L)+.32*Math.cos(re*.67+J*.26+L*1.4)+.19*Math.sin(J*.81+L*.67);Q.setY(X,Math.max(0,be*fe*xe))}Q.needsUpdate=!0,ee.computeVertexNormals(),ee.computeBoundingSphere()}P(Math.floor(Math.random()*1e6));let Y=new Ne(ee,v[3]);Y.receiveShadow=Y.castShadow=!0,n.add(Y);let I=(y,L)=>{let X=qe.clamp((y-Z)/_e*se,0,se-1e-6),re=qe.clamp((L-ve)/ne*ye,0,ye-1e-6),J=Math.floor(X),be=Math.floor(re),fe=X-J,xe=re-be,pe=se+1,ue=be*pe+J,Te=Q.getY(ue),ze=Q.getY(ue+1),Se=Q.getY(ue+pe),Re=Q.getY(ue+pe+1);return fe+xe<=1?Te+(ze-Te)*fe+(Se-Te)*xe:Re+(Se-Re)*(1-fe)+(ze-Re)*(1-xe)};F.push({heightfield:!0,mesh:Y,height:I,...fo.hills.bounds,friction:.81,gravity:1});function z(y,L,X,re,J=1.45){let be=_h(384,72,(xe,pe,ue)=>{xe.fillStyle="#202a32",xe.fillRect(0,0,pe,ue),xe.fillStyle=re,xe.font="bold 31px system-ui",xe.textAlign="center",xe.fillText(y,pe/2,48,pe-20)}),fe=new Ne(new Yt(3.2,.6),new mt({map:be,side:Wt}));fe.position.set(L,J,X),n.add(fe),H.push(fe)}for(let y of Object.values(fo)){z(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:L,xMax:X,zMin:re,zMax:J}=y.bounds,be=new ha(new tt().setFromPoints([new M(L,.025,re),new M(X,.025,re),new M(X,.025,J),new M(L,.025,J)]),new ts({color:y.color,transparent:!0,opacity:.72}));n.add(be),H.push(be)}z("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),z("MURS HAUTS",3,-31,"#e8d2ff"),z("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let O=new wt({color:"#c8e6ed",metalness:1,roughness:.16}),j=new Ne(new Lt(.54,2),O);j.position.set(eh.x,eh.y,eh.z),j.castShadow=!0,n.add(j);let q=m.map((y,L)=>{let{x:X,z:re}=cx(L);return W("\xC9chantillon "+m[L][0],X,.325,re,.65,.65,.65,L,0,1,1,!0).mesh}),ie=new Jt(1,12).rotateX(-Math.PI/2),Me=new mt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Pe(y){let L=new Ne(ie,Me);return L.scale.setScalar(y),n.add(L),L}function R(y,L,X,re,J,be,fe,xe){let pe=L>=3;e.shadowMap.enabled=pe,u.castShadow=pe,Me.opacity=L===2?.17:.11,A.value=xe?.38+X*.04:0;let ue=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Te=13+L*1.2;Object.assign(u.shadow.camera,{left:-Te,right:Te,top:Te,bottom:-Te}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ue&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ue,ue)),o.visible=J,fe!==C&&(C=fe,v.forEach((Se,Re)=>{let He=Se.userData.texture??Se.map,G=w.has(Re)?fe:Math.min(256,fe);if(He.image.width===G)return;let Ce=document.createElement("canvas");Ce.width=Ce.height=G;let Le=Ce.getContext("2d");G>512?b(Le,Re,G):Le.drawImage(T[Re],0,0,G,G);let Fe=new Xn(Ce);Fe.colorSpace=He.colorSpace,Fe.wrapS=He.wrapS,Fe.wrapT=He.wrapT,Fe.repeat.copy(He.repeat);for(let we of[Se,D[Re]])we.userData.texture=Fe,we.map=Fe,we.needsUpdate=!0;He.dispose()}));let ze=y>=4;for(let Se of F)Se.mesh?.isMesh&&!Se.zone&&(Se.mesh.material=ze?v[Se.type]:D[Se.type]);Y.material=ze?v[3]:D[3];for(let Se=0;Se<q.length;Se++)q[Se].material=ze?v[Se]:D[Se];v.forEach((Se,Re)=>{for(let He of[Se,D[Re]])He.userData.texture||(He.userData.texture=He.map),He.map=be?He.userData.texture:null,He.color.set(be?"#ffffff":m[Re][1]),He.needsUpdate=!0}),g=re?.21+X*.067:0,O.metalness=re?.95:.1,O.roughness=re?.13:.46,s.visible=y>=2,p(h)}return{boxes:F,floors:V,probe:j,display:q,visual:R,shadow:Pe,setTimeOfDay:p,centerShadows:x,get hillSeed(){return de},setHillSeed:P,bakeLightmap:B,mapMaterial:(y,L)=>L>=4?v[y]:D[y],builtObjects:[...F.map(y=>y.mesh).filter(y=>y?.isObject3D),j,...H],materials:[...v,...D],focus(y,L,X){U.value=y?L*.75:0,S.value=.07+X*.058}}}var fs=document.getElementById("game");fs instanceof HTMLCanvasElement||(fs=document.createElement("canvas"),fs.id="game",fs.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(fs));var or=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ke;try{Ke=new Cu({canvas:fs,antialias:!or,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ke.xr.enabled=!0;Ke.xr.setReferenceSpaceType("local-floor");Ke.shadowMap.type=Fa;Ke.shadowMap.autoUpdate=!1;var Hx=-1/0;Ke.toneMapping=zc;Ke.toneMappingExposure=1.15;var At=new Us;At.fog=new ra("#a6d4ea",55,135);var ht=new pt,Nh=new pt,Xt=new Gt(70,1,.035,210);ht.add(Nh);Nh.add(Xt);At.add(ht);var bt=Gx(At,Ke),AT=Nx(Ke),Ah=Fx();At.add(Ah);var ET=Bx(bt.probe),k=q0(or),CT={...k},Sp=new M($u.x,$u.y,$u.z);ht.position.copy(Sp);var Pn=new M,rl=new M,Ct=new M,Wx=new M,Jn=new M,jn=new M,qx=new M,ps=new M,er=new M,Xx=new M,rp=new M,Yx=new M,Mh=new M,Zx=.105,jx=new M,Eh=!1,ir=!1,RT=new Ze,PT=new M(0,0,1),wp=0,Tp=null,cl=[],Ap=100,Ut=new M(0,1,0),_i=new Ze,gt=0,Hi=0,ms=0,ai=0,Co=NaN,Ch=!1,op=0,sr=0,ap=0,bh=0,To=0,Ao=0,Eo=0,Qt=k.quality,ul=72,Zt=!1,xy="left",Ft=0,Ep=0,Cp=0,Rp=0,nn=!0,Jx=0,IT=[],Sh=[],_s=bt.boxes,LT=new Lt(1,0),yy=1+Math.floor(Math.random()*(Pu.length-1)),vy=Iu(yy),{hand:DT,fur:UT}=vy;function FT(n,e,t,i,s,r,o,a){let l=new Ne(LT,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var Bh=kf(localStorage),NT=Bh.models.length?"|atelier-"+Xs(JSON.stringify(Bh)):"",vs=ox(Bh)??vy.createHead();vs.visible=!1;At.add(vs);var tr=new M,Rh=new Ze,Kx=new M,$x=new M,Qx=new ln(0,0,0,"YXZ"),ol=0,lp=new Ze,ey=[null,null];function Oh(){return .24+k.arms*.036}function BT(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=qe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=qe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=qe.lerp(r[2],i,s),n.skin.pose(r,!k.body)}var qt=["left","right"].map(n=>{let e=Du(n,DT,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new Ze},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new Ze,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Ph=new Gu(M,qt,_x),_y=Uu(UT,qt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of qt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var gs=_y.mesh;At.add(gs);function OT(n,e){if(k.body){lp.copy(gs.quaternion).invert();for(let t=0;t<qt.length;t++){let i=qt[t];ey[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(gs.position).applyQuaternion(lp),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(lp))}_y.pose(ey,Oh(),n,e,k.hands)}}var Ln=[["Cube",new Je(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Lt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Aa(.29),"#d8ae53",0,1],["Brique",new Je(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Je(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Lt(.6,2),"#dbab58",.6,3.7],["Coco",new Lt(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:bo(e,i),material:new wt({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:ki(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of J0()){let i=bo(n??t.geo,e);Ln.push({...t,shape:i,lowShape:i})}var My=[0,1,2,3,4,5],by=[7,8,9,10,11,12,13,14],xl=15,ty=ki(new M(.13,.088,.115)),zT=new Je(.26,.176,.23),VT=new wt({color:"#536771",roughness:.36,metalness:.28});Ln[xl]={name:"Cam\xE9ra du spectateur",geo:zT,material:VT,shape:ty,lowShape:ty,mass:1.2};var{props:kT,animate:GT}=$0(),HT=rx(Bh).slice(0,36),Pp=[],dl=[];function Sy(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=bo(t??s.geo,i);e.push(Ln.length),Ln.push({...s,shape:r,lowShape:r})}}Sy(kT,Pp);Sy(HT,dl);var Ip=[...My,...by,...Pp,...dl];Ln[8].properties={supportWhileHeld:!0};Ln[11].properties={supportWhileHeld:!0};function WT(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Ln)n.supportAxis=WT(n);function qT(n){let e=new Ne(new Ht(.058,.074,.1,12).rotateX(Math.PI/2),new wt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Ne(new Jt(.048,12),new mt({color:"#7bd7ed",side:Wt}));t.position.z=-.203,n.add(t);let i=new Ne(new Je(.045,.013,.012),new mt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function wy(n,e=!1){let t=Ln[n];if(!t)return null;let i=new Ne(t.geo,e?Ku(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===xl&&qT(i),i}var Tt=[],XT=[],Ms={held:null},Po=new Map,Wi=0,YT=1,nr=new Ze,fl=new Ze,al=new M,zh=new M,xs=new M,mp=new M,gp=new M;function ZT(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){zh.set(0,0,-1).applyAxisAngle(Ut,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(al.copy(n).addScaledVector(zh,r),al.y+=.15,!Mo(n,al,Math.min(.2,t*.5),_s,mp,gp)&&!Tt.some(o=>o.mesh.position.distanceToSquared(al)<(t+o.radius+.07)**2))return al}}return null}function lr(n,e,t,i=!1){let s=Ln[n];if(!s)return null;if(!e&&(t?xs.set(t.x,t.y,t.z):Ke.xr.isPresenting?xs.copy(Ct):Xt.getWorldPosition(xs),e=ZT(xs,t?.yaw??Hi,s.shape.radius),!e))return i||vi("Aucun espace libre pour cet objet."),null;let r=wy(n);r.position.copy(e),At.add(r);let o=k.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:YT++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:k.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new Ze,shadow:bt.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===xl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),Tt.push(a),tl(a,bt.boxes),a}function Ty(){for(let n of qt)li(n,!1);li(Ms,!1);for(let n of Po.values())li(n,!1)}function Yh(){Ty();for(let n of Tt)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();Tt.length=0,Po.clear()}function Ay(){Ip.slice(0,Gf.length).forEach((n,e)=>{let{x:t,z:i}=Gf[e];lr(n,new M(t,.8,i))})}Ay();function li(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+k.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Lo(){Ty();for(let n of Tt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function Xi(){jh.reset(),ht.position.copy(Sp),gt=qe.degToRad(dt.yaw),ms=0,ht.rotation.y=gt,Pn.set(0,0,0),Ch=!1,ir=!1,Eh=!1,Ph.reset();for(let n of qt)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,li(n,!1)}Lo();function Ey(){return k.auto||or&&!Ke.xr.isPresenting}function Vh(){return Ey()?Math.min(k.shadowQuality,Qt):k.shadowQuality}function pl(){return Ey()?Math.min(k.lightQuality,Qt):k.lightQuality}function Mi(){let n=k.texturePower;bt.visual(Qt,k.shadows?Vh():0,pl(),k.reflections,k.bloom,k.textures,2**(n-1),k.lightmap),dt.refreshMaterials?.(),Ke.shadowMap.needsUpdate=!0,bt.setTimeOfDay(Qe.remoteLight??k.timeOfDay-1),yp=Gh.slice(0,pl()>=8?3:pl()>=4?2:1),Zp.value=k.shaderMode-1;let e=Ke.xr.isPresenting&&Ke.xr.getBaseLayer?.()?.fixedFoveation!=null;bt.focus(k.focus&&!e,k.focusStrength,k.focusSize),Ke.toneMappingExposure=.58+k.exposure*.114,Zy.value=.55+k.contrast*.09,jy.value=k.saturation*.2,Jy.value=(k.warmth-5)*.022,Ke.xr.setFoveation(k.focus?qe.clamp((k.focusStrength+1)*.105+(5-k.focusSize)*.028+(k.auto?(7-Qt)*.045:0),0,1):0),Ke.xr.isPresenting||yl(),nn=!0,Mn.redraw()}var ny=0,iy=0,sy=0;function yl(){if(Ke.xr.isPresenting)return;let n=Math.max(1,fs.clientWidth||innerWidth),e=Math.max(1,fs.clientHeight||innerHeight),t=k0(Qt,devicePixelRatio,or);t!==sy&&(Ke.setPixelRatio(t),sy=t),(n!==ny||e!==iy)&&(Ke.setSize(n,e,!1),ny=n,iy=e),Xt.aspect=n/e,Xt.fov=k.viewFov,Xt.updateProjectionMatrix()}addEventListener("resize",yl);globalThis.visualViewport?.addEventListener("resize",yl);function jT(n){Object.assign(k,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Wu[n]),Qt=k.quality,Ao=Eo=To=0,Mi()}var Do=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",Xi]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Lo]]],["Rendu",[]]],Lp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Dp(){return Ft===2?Lp[Ep][1]:Ft===3?Py[Cp][1]:Ft===4?zp[Rp][1]:Do[Ft][1]}function Cy(n){Ft=n,nn=!0}var kh=null,Up=[],Ih=0,xp=0,Fp=null,Np=!1,Bp=0,Op=0,Ry={},Gh=Array.from({length:3},()=>{let n=new Ia("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),yp=Gh,Hh=new M;function ry(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(Hh);if(e>34**2)return;let t=yp[0];for(let i of yp)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function JT(n){n?Xt.getWorldPosition(Hh):Hh.copy(Ct);for(let t of Gh)t.mesh=null,t.distance=1/0;if(n)Qe.forEachReplica(ry);else if(k.objects)for(let t of Tt)t.materialStyle===3&&ry(t.mesh);let e=20+pl()*.75;for(let{light:t,mesh:i}of Gh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Zh(){let n=Up.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;kh={game:"Gorilla Lab",version:"r32",time:new Date().toISOString(),mode:Np?"VR":"PC",settings:{...k},qualityActive:Qt,performance:{fps:sr,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Fp,renderer:Ry,terrainSeed:bt.hillSeed,map:dt.active?{name:dt.name,pieces:dt.nodes}:null,objects:{total:Tt.length,held:Tt.filter(t=>t.owner).length,frozen:Tt.filter(t=>t.frozen).length},cloud:{role:Qe.role,connected:Qe.connected,replicas:Qe.replicaCount,...Qe.stats},targetScore:Mn.score(),locomotion:{trackedFrames:Op,contactFrames:Bp,launchCount:wp,lastLaunch:Tp,standingHeight:Number.isFinite(Co)?Co:null,viewOffset:ai}},document.querySelector("#download-report").disabled=!1,nn=!0}function KT(){kh||Zh();let n=URL.createObjectURL(new Blob([JSON.stringify(kh,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=KT;document.querySelector("#capture-report").onclick=Zh;Do[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Zh]);var $T=Array.from({length:Math.ceil(dl.length/8)},(n,e)=>["Atelier"+(dl.length>8?" "+(e+1):""),dl.slice(e*8,e*8+8)]),Py=[["Basiques",My],["D\xE9taill\xE9s",by],["Anim\xE9s",Pp],...$T].map(([n,e])=>[n,[...e.map(t=>[Ln[t].name,()=>ky(t)]),["Tout retirer",qp]]]);Do.push(["Spawn",[]]);var zp=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{dt.blank(),k.mapEdit=!0}],["Annuler placement",()=>dt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>dt.recenter(Ct.x,ht.position.y,Ct.z,Hi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{dt.reset(),k.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>ly(!1)],["Utiliser comme t\xEAte",()=>ly(!0)]]]];Do.push(["Carte",[]]);var QT=document.querySelector("#section"),cp=document.querySelector("#settings"),eA=document.querySelector("#readings");function xn(n,e){if(n==="viewFov"){k.viewFov=qe.clamp(k.viewFov+5*e,50,105),yl(),nn=!0;return}if(n==="vrFov"){k.vrFov=qe.clamp(k.vrFov+5*e,55,100),nn=!0;return}if(n==="shaderMode"){k.shaderMode=(k.shaderMode-1+e+Hu.length)%Hu.length+1,Zp.value=k.shaderMode-1,nn=!0;return}if(n==="timeOfDay"){if(Qe.role==="player"){let i=((Qe.remoteLight??k.timeOfDay-1)+e+3)%3;Qe.sendAction({type:"world",mode:1,typeId:i})}else k.timeOfDay=(k.timeOfDay-1+e+3)%3+1;Mi();return}let t={mapMode:9,mapShape:5,mapMaterial:np.length,mapSurface:4,mapTurn:8,mapTexture:ku.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];k[n]=(k[n]-1+e+i)%i+1,nn=!0;return}if(n==="mapEdit"&&!k.mapEdit&&!dt.active&&dt.blank(),n==="toolMode"){k.toolMode=(k.toolMode-1+e+Ys.length)%Ys.length+1,Ke.xr.isPresenting||vi("Outil \xB7 "+Ys[k.toolMode-1]),nn=!0;return}if(n==="preset"){let i=Object.keys(Wu);k.preset=(k.preset-1+e+i.length)%i.length+1,jT(i[k.preset-1]);return}if(typeof k[n]=="boolean"?k[n]=!k[n]:k[n]=qe.clamp(k[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of qt)i.valid=!1,i.surface=null;if(n==="quality"&&(k.auto=!1,Qt=k.quality),n==="auto"&&!k.auto&&(Qt=k.quality),n==="movement"||n==="collisions")for(let i of qt)i.surface=null;if(n==="objects"&&!k.objects&&Lo(),n==="blasterActive"&&k.blasterActive&&(k.toolActive=!1),n==="toolActive"&&k.toolActive&&(k.blasterActive=!1),!k.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of qt)i.held?.toolHold&&li(i,!1);Wp(!1)}n==="preciseHitboxes"&&Iy(),Mi()}function Iy(){for(let n of Tt)n.precise=k.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||tl(n,bt.boxes)}function Ly(){let n=(Ft===2?Lp:Ft===4?zp:null)?.flatMap(e=>e[1])??Dp();for(let[,e]of n)typeof e=="string"&&(k[e]=CT[e]);Ft===0&&Xi(),Ft===1&&(Iy(),Lo()),Ft===3&&qp(),Ft===2&&(Qt=k.quality),Mi()}function ll(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),Uo(),nn=!0},t}function Dy(n){return n==="preciseHitboxes"?k[n]?"High":"Low":k[n]?"Actif":"Coup\xE9"}function Vp(n){if(n==="viewFov")return k.viewFov+"\xB0";if(n==="vrFov")return k.vrFov===100?"Natif":k.vrFov+" %";if(n==="mapTexture")return k[n]===1?"Aucune":ku[k[n]-2];if(n==="terrainResolution")return[8,16,32,48][k[n]-1]+"\xB2";if(n==="shaderMode")return Hu[k.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=k[n],t=n==="shadowQuality"?Vh():pl();return t===e?e+"/10":e+"/10 \xB7 "+t+(k.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Qe.remoteLight??k.timeOfDay-1]:n==="mapMode"?zy[k.mapMode-1]:n==="mapShape"?rA[k.mapShape-1]:n==="mapSurface"?oA[k.mapSurface-1]:n==="mapMaterial"?np[k.mapMaterial-1]:n==="mapTurn"?(k.mapTurn-1)*45+"\xB0":n==="toolMode"?Ys[k.toolMode-1]:n==="preset"?Object.keys(Wu)[k.preset-1]:n==="texturePower"?[2**(k[n]-1),2**(k[n]-1)].join("\xD7"):k[n]}function vp(){return Ft===2?Lp:Ft===3?Py:zp}function Uy(){return Ft===2?Ep:Ft===3?Cp:Rp}function Fy(n){Ft===2?Ep=n:Ft===3?Cp=n:Rp=n}function Ny(n){return n===Zh?"Capturer":n===Yh||n===qp?"Vider":n===Xi||n===Lo?"R\xE9initialiser":Ft===3?"Cr\xE9er":"Appliquer"}function Uo(){if(QT.textContent=Do[Ft][0],By.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===Ft))),cp.replaceChildren(),Ft>=2){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),vp().forEach(([e],t)=>{let i=ll(e,()=>Fy(t));i.setAttribute("aria-pressed",String(Uy()===t)),n.append(i)}),cp.append(n)}for(let[n,e]of Dp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(ll(Ny(e),e)):typeof k[e]=="boolean"?i.append(ll(Dy(e),()=>xn(e,1))):i.append(ll("\u2212",()=>xn(e,-1)),document.createTextNode(" "+Vp(e)+" "),ll("+",()=>xn(e,1))),t.append(i),cp.append(t)}}var By=document.querySelectorAll("[data-page]");By.forEach((n,e)=>n.onclick=()=>{Cy(e),Uo()});document.querySelector("#restore").onclick=()=>{Ly(),Uo()};Uo();function Oy(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Xn(r);a.colorSpace=yt;let l=new Ne(new Yt(t,i),new mt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var yn=Oy(640,652,.84,.86,At);yn.mesh.visible=!1;var Kn=Oy(416,84,.32,.065,At);Kn.mesh.visible=!1;var wo=new Gt(75,1,.07,140),$n=new Ha(new Yt(1.7,1.95),{color:16054015,textureWidth:or?128:256,textureHeight:or?128:256,clipBias:.004,multisample:0}),tA=new M(0,0,-1),wh=new M,oy=new M;$n.position.set(Qu.x,Qu.y,Qu.z);$n.rotation.y=Math.PI;At.add($n);var kp=new Ne(new Je(1.8,2.03,.1),new Kt({color:"#344650"}));kp.position.copy($n.position).z+=.064;At.add(kp);var nA=$n.onBeforeRender.bind($n);$n.onBeforeRender=()=>{};$n.visible=!1;var up=-1/0;function iA(n,e){if(wo.position.copy(Ct),e){let i=e.transform.orientation;wo.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Rh.setFromAxisAngle(Ut,gt))}else Xt.getWorldQuaternion(wo.quaternion);oy.set(0,0,-1).applyQuaternion(wo.quaternion),wh.subVectors($n.position,Ct);let t=wh.length();if($n.visible=!dt.active&&k.reflections&&t<4&&wh.dot(tA)<-.15&&wh.multiplyScalar(1/Math.max(.001,t)).dot(oy)>.66,!$n.visible){up=-1/0;return}if(!(n-up<(or&&!Ke.xr.isPresenting?110:45))){up=n,wo.updateMatrixWorld(!0),$n.updateMatrixWorld(!0),vs.visible=k.body;try{nA(Ke,At,wo)}finally{vs.visible=!1}}}var yi=new Di,Vn=new M,In=new M,Io=new M,Th=new M,ay=new M,hl=null,Lh=null,Dh=null,sA=new Set(At.children),Mn=Ox(At,bt.boxes,{spawn:(n,e)=>{k.objects||(k.objects=!0),lr(n,e)},clear:Yh,resetPlayer:Xi,resetObjects:Lo,resetTree:()=>{for(let n of Mn.coconuts)n.visible=!0},quality:()=>Qt+"/10",resolution:()=>k.resolution+"/10 \xB7 relancer VR",textureSize:()=>Vp("texturePower"),qualityNext:()=>{k.quality>=10&&(k.quality=0),xn("quality",1)},resolutionNext:()=>{k.resolution>=10&&(k.resolution=0),xn("resolution",1)},textureNext:()=>{k.texturePower>=12&&(k.texturePower=0),xn("texturePower",1)},hitbox:()=>xn("preciseHitboxes",1),movement:()=>xn("movement",1)}),zy=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],rA=["Bloc","Rampe","Mur","Dalle","Terrain"],oA=["Normale","Glace","Caoutchouc","Lune"],dt=Ux({scene:At,arena:bt,boot:Sp,onReset:n=>{Yh(),Xi(),gt=qe.degToRad(n),dt.active||Ay()},onVisual:Mi,getLevel:()=>Qt,defaultObjects:[...bt.builtObjects,...At.children.filter(n=>!sA.has(n)),kp]}),Qe=A0({scene:At,currentMap:()=>(dt.signature||"arena-r25-"+bt.hillSeed)+NT,seedArena:n=>bt.setHillSeed(n),makeReplica:n=>{let e=wy(n,!0);return e&&vl(e.material),e},onAction:dA,onShot:n=>jh.receiveShot(n,Qe.role==="vr"),applyLight:n=>{bt.setTimeOfDay(n??k.timeOfDay-1),nn=!0,Ke.xr.isPresenting||Uo()},applyScore:n=>Mn.setScore(n),applyCoconuts:n=>Mn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function ly(n){let e=dt.modelPieces();if(!e.length||e.length>Js.parts){vi("Compose un mod\xE8le de 1 \xE0 "+Js.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=kf(localStorage);if(t.models.length>=Js.models){vi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:k.modelGrab,frozen:k.modelFrozen,collidable:k.modelCollidable,supportWhileHeld:k.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Ix[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(zf,JSON.stringify(Vf(t))),vi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{vi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var hp=new Map;function aA(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][k.mapShape-1],e=uo({detail:[8,16,32,48][k.terrainResolution-1],amplitude:(k.terrainAmplitude-1)*.34,frequency:.05+k.terrainFrequency*.025,seed:k.terrainSeed,grass:(k.terrainGrass-1)/9,shrub:(k.terrainShrub-1)/9}),t=k.mapTexture-2;return t>=0&&!hp.has(t)&&hp.set(t,O0(t).toDataURL("image/webp",.83)),yh({...n,material:k.mapMaterial-1,yaw:k.mapShape===5?0:(k.mapTurn-1)*45,...ip[Object.keys(ip)[k.mapSurface-1]],texture:hp.get(t)??null,terrain:k.mapShape===5||k.mapMode===9?e:null,brushRadius:.5+k.brushRadius*.5,brushStrength:k.brushStrength*.15})}function lA(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-ai,r.z).applyAxisAngle(Ut,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ut,gt),dt.edit(Vn,In,i,{mode:k.mapMode,piece:aA(),head:Ct,feet:ht.position.y}),i&&(nn=!0)}function cA(n){if(dt.active||Qe.role==="player"||!n.valid||n.held||Zt)return;let e=null;for(let t of Mn.targets)if(t.getWorldPosition(ay),!(n.mesh.position.distanceToSquared(ay)>.11**2)&&(t.worldToLocal(Th.copy(n.mesh.position)),Math.abs(Th.x)<t.userData.touchWidth*.5+.025&&Math.abs(Th.y)<.095&&Math.abs(Th.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Gp(n,e=null){n.getWorldPosition(Io),n.visible=!1,k.objects||(k.objects=!0);let t=lr(6,Io);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function _p(n,e,t){if(dt.active)return;yi.set(n,e),yi.far=5.5;let i=yi.intersectObjects([...Mn.targets,...Mn.coconuts.filter(r=>r.visible)],!1);yi.far=1/0;let s=i[0];s&&(ar.visible=!0,ar.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Qe.role==="player"?Qe.sendAction({type:"world",mode:2,typeId:Mn.coconuts.indexOf(s.object)}):Gp(s.object,e),Uo()))}var cy=new M,Vy=new Ze,Hp=Fu(At),jh=H0({scene:At,rig:ht,camera:Xt,arena:bt,objects:Tt,spectator:Qe}),FR=Hp.mesh,Uh=new M,qi=new Ze,Wh=new M,Ro={mode:0,position:Wh,quaternion:qi,end:Uh},uy=new M,uA=new M,hy=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var qh=new M,hA={position:Wh,quaternion:qi,pressure:[.1,.66,.08]},dp=new M,Xh=new Ze;function Wp(n){Ms.held&&li(Ms,n)}function qp(){Qe.role==="player"||Qe.role==="pc"?vi("Le joueur VR g\xE8re la remise \xE0 z\xE9ro."):Yh()}function ky(n){if(k.objects=!0,Qe.role==="pc"){vi("Commence par rejoindre le salon en joueur.");return}Qe.role==="player"?Qe.sendAction({type:"spawn",typeId:n})||vi("Attends la connexion au joueur VR."):lr(n)}function dA(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)k.timeOfDay=n.typeId+1,Mi();else if(!dt.active){let u=Mn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(Io).distanceToSquared(e)<=5.8**2&&!Mo(xs.copy(e),Io,.01,_s,mp,gp)&&Gp(u)}return}if(n.type==="spawn"){Ip.includes(n.typeId)&&(k.objects=!0,lr(n.typeId,null,e));return}let t=Tt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,s=e.id*3+i,r=n.type==="hold"?1:n.mode,o=Po.get(s);if(!o&&r===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new Ze},Po.set(s,o)),n.type==="release"){if(o?.held===t){let u=i?Qe.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),li(o,!0)}return}if(!k.objects||r===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=xs.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?ph(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Mo(l,t.mesh.position,.01,_s,mp,gp))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Xp(t,r,o,qe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,fl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(fl))}}function fA(n){if(Ke.xr.isPresenting)for(let t of qt)t.valid&&t.held&&fp(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Po){let s=Qe.getPeer(i.peerId),r=i.hand?s?.avatar?.hands[i.hand-1]:null;if(!s||i.hand&&!r){li(i,!1),Po.delete(t);continue}let o=i.held;if(!o)continue;let a=r?.quaternion??s.avatar?.tool?.quaternion??s.avatar?.head;a&&i.controllerRotation.copy(a),xs.copy(r?.position??s.avatar?.tool?.position??s),zh.set(0,0,-1).applyQuaternion(i.controllerRotation),fp(o,xs,zh,i.controllerRotation,n)}let e=Ms.held;e&&(Xt.getWorldPosition(qh),Xt.getWorldDirection(cy),Xt.getWorldQuaternion(qi),fp(e,qh,cy,qi,n))}function fp(n,e,t,i,s){n.toolHold?dp.copy(e).addScaledVector(t,n.toolDistance):dp.copy(n.offset).applyQuaternion(i).add(e),Xh.multiplyQuaternions(i,n.relativeRotation),Mx(n,dp,Xh,_s,s)}function Gy(n){return n.customMaterial||(n.mesh.material=Ku(n.mesh.material),n.customMaterial=!0,vl(n.mesh.material)),n.mesh.material}function pA(n){let e=Gy(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function Hy(n,e,t){yi.set(n,e),yi.far=9;let i=yi.intersectObjects(t,!1)[0];return yi.far=1/0,Uh.copy(n).addScaledVector(e,i?.distance??9),Mo(n,Uh,.006,_s,uy,uA)?(Uh.copy(uy),null):i}function Xp(n,e,t,i){if(e===1){if(t?.held){t===Ms?Wp(!0):li(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??qi;n.relativeRotation.multiplyQuaternions(Vy.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),Tt.splice(Tt.indexOf(n),1);else if(e===4&&!n.protected){qh.copy(n.mesh.position).addScaledVector(Ut,n.radius*2+.08);let s=lr(n.netType,qh);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=Ku(n.mesh.material),s.customMaterial=!0,vl(s.mesh.material)),tl(s,bt.boxes))}else if(e===5){let s=Gy(n);s.color.set(hy[n.paint++%hy.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,pA(n));nn=!0}}var ys=[];function Wy(n,e,t,i){if(!k.objects)return;let s=Qe.role==="player";if(ys.length=0,s)Qe.forEachReplica(a=>ys.push(a));else for(let a of Tt)!a.owner&&a.mesh.visible&&ys.push(a.mesh);let r=Hy(n,e,ys);if(Ro.mode=k.toolMode,i?(Wh.copy(i.mesh.position),qi.copy(i.controllerRotation)):(Xt.getWorldQuaternion(qi),Wh.set(.16,-.17,-.43).applyQuaternion(qi).add(n)),Hp.update(Ro),!t)return;if(s){if(k.toolMode===1&&Wi)Qe.sendAction({type:"release",objectId:Wi}),Wi=0;else if(r){let a=r.object.userData.netId;Qe.sendAction({type:"tool",mode:k.toolMode,objectId:a})&&k.toolMode===1&&(Wi=a)}return}let o=r&&Tt.find(a=>a.mesh===r.object);Xp(o,k.toolMode,i??Ms,r?qe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function mA(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;Vn.set(o.x,o.y-ai,o.z).applyAxisAngle(Ut,gt).add(ht.position),_i.set(a.x,a.y,a.z,a.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ut,gt),Wy(Vn,In,s,i)}function gA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-ai,r.z).applyAxisAngle(Ut,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ut,gt),_p(Vn,In,i)}var ar=FT(At,new mt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);ar.visible=!1;var Mp=[],rr=null;function dy(){let n=yn.ctx;Mp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(sr+" FPS   \xB7   Q "+Qt+"/10   \xB7   "+(k.auto?"AUTO":"MANUEL"),390,40);function e(i,s,r,o,a,l,c="#344b59"){n.fillStyle=c,n.fillRect(i,s,r,o),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(a,i+r/2,s+o/2+7),n.textAlign="left",Mp.push({x:i,y:s,w:r,h:o,action:l,label:a})}Do.forEach(([i],s)=>e(25+s*119,61,114,44,i,()=>Cy(s),Ft===s?"#586d53":"#334b58"));let t=Ft>=2;t&&vp().forEach(([i],s)=>{let r=Uy()===s,o=Math.min(144,Math.floor(586/vp().length)-4);e(25+s*(o+4),114,o,38,i,()=>Fy(s),r?"#546947":"#263d49")}),Dp().forEach(([i,s],r)=>{let o=(t?166:113)+r*40;r%2===0&&(n.fillStyle="#20323e",n.fillRect(25,o,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(i,37,o+26),typeof s=="function"?e(406,o,206,36,Ny(s),s):typeof k[s]=="boolean"?e(406,o,206,36,Dy(s),()=>xn(s,1),k[s]?"#415c4c":"#344b59"):(e(359,o,44,36,"\u2212",()=>xn(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Vp(s)),508,o+25,156),n.textAlign="left",e(568,o,44,36,"+",()=>xn(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",Ly),e(325,579,287,44,"Fermer",()=>Zt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Yp||(Ft===4&&dt.status?dt.status.slice(0,64):kh?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),yn.texture.needsUpdate=!0}function xA(n){Zt=!Zt,Zt&&(xy=n,Kx.set(0,0,-1).applyAxisAngle(Ut,Hi),yn.mesh.position.copy(Ct).addScaledVector(Kx,1.25),yn.mesh.position.y+=.08,yn.mesh.lookAt(Ct),yn.mesh.updateMatrixWorld(!0)),nn=!0}function yA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-ai,r.z).applyAxisAngle(Ut,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ut,gt),yi.set(Vn,In);let a=yi.intersectObject(yn.mesh)[0];if(a&&(ar.visible=!0,ar.position.copy(a.point).addScaledVector(In,-.012),i)){let l=a.uv.x*yn.w,c=(1-a.uv.y)*yn.h;Mp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),nn=!0}}var Jh=V0(),{held:xi,pressed:Gi}=Jh,qy=W0(Ke.domElement,document.querySelector("#touch-fire")),fy=document.querySelector("#game-settings"),Xy=document.querySelector("#open-settings"),bp=document.querySelector("#game-hint"),Fh=0;function vi(n){bp.textContent=n,bp.hidden=!1,Fh=performance.now()+2400,Yp=n,nn=!0}var Yp="";function Kh(n){let e=n??!fy.hidden;fy.hidden=e,Xy.hidden=!e,e&&Ke.domElement.focus()}Xy.onclick=()=>Kh(!1);document.querySelector("#close-settings").onclick=()=>Kh(!0);var ml=z0({canvas:Ke.domElement,enabled:()=>!Ke.xr.isPresenting,onLook:(n,e,t)=>{gt-=n*t,ms=qe.clamp(ms-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Gi.add(e)},onMenu:()=>Kh()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ke.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Kh();return}n.code==="Space"&&n.preventDefault(),Jh.down(n.code,n.repeat),n.code==="KeyR"&&Xi()}});addEventListener("keyup",n=>Jh.up(n.code));addEventListener("blur",()=>{Jh.clear(),ml.clear(),qy.clear()});function vA(n,e){if(!k.objects)return!1;let t=Qe.role==="player";if(t&&Wi)return Qe.sendAction({type:"release",objectId:Wi}),Wi=0,!0;if(Ms.held)return Wp(!0),!0;if(ys.length=0,t)Qe.forEachReplica(s=>ys.push(s));else for(let s of Tt)!s.owner&&s.mesh.visible&&ys.push(s.mesh);let i=Hy(n,e,ys);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;Qe.sendAction({type:"hold",objectId:s})&&(Wi=s)}else Xt.getWorldQuaternion(qi),Xp(Tt.find(s=>s.mesh===i.object),1,Ms,Math.max(.75,i.distance));return!0}var pp=[];function _A(){return pp.length=0,Qe.forEachReplica(n=>{let e=n.userData.netType;if(!Ln[e]||Ln[e].properties?.collidable===!1||n.userData.held)return;let t=Ln[e],i=k.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=k.preciseHitboxes,s.handCollider??={objectBody:s,friction:.96,gravity:1},pp.push(s)}),pp}function MA(){Qe.role!=="vr"||!Qe.remoteSpectator||Tt.some(n=>n.netType===xl)||lr(xl,null,null,!0)}var gl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{gl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});gl.onclick=async()=>{let n;try{gl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ke.xr.setFramebufferScaleFactor(.45+k.resolution*.055),await Ke.xr.setSession(n),Mi(),ul=n.frameRate||72,cl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=cl.includes(120)?120:cl.find(t=>t>=100)??cl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}ul=n.frameRate||ul,Ap=Math.min(100,ul),k.auto&&(Qt=Math.min(Qt,4),To=Ao=Eo=0),Up=[],Ih=0,xp=0,Bp=Op=wp=0,Tp=null,Np=!0,Fp=null,Co=NaN,ai=0,Xi(),Mi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),gl.disabled=!1,document.querySelector("#status").textContent=e.message}};Ke.xr.addEventListener("sessionend",()=>{gl.disabled=!1,Zt=!1,yn.mesh.visible=!1,Kn.mesh.visible=!1,document.body.classList.remove("immersive"),Xi(),yl()});function Yy(n){if(!dt.active){for(let e of bt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(dt.active){let e=-1/0,t;for(let i of bt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function py(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Qe.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Zt||!e||n.grip||!k.objects)return;let i=null,s=.15;if(Qe.forEachReplica(r=>{if(r.userData.held)return;let o=Ln[r.userData.netType];if(!o||o.properties?.grabbable===!1||r.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=ph(n.target,{mesh:r,shape:o.shape,radius:o.shape.radius});a<s&&(i=r,s=a)}),i){let r=i.userData.netId;Qe.sendAction({type:"hold",objectId:r,hand:t})&&(n.remoteHeld=r)}else if(!dt.active){let r=Mn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(Io).distanceToSquared(n.target)<.06760000000000001);r>=0&&Qe.sendAction({type:"world",mode:2,typeId:r})}}function bA(n,e,t){let i=[...n.session.inputSources];for(let s of qt){let r=i.find(x=>x.handedness===s.side&&x.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&k.hands&&!k.body,!o){Qe.role==="player"&&py(s,!1),s.valid=!1,s.surface=null,li(s,!1);continue}let a=o.transform.position;ps.set(a.x,a.y-ai,a.z),s.target.copy(ps).applyAxisAngle(Ut,gt).add(ht.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(nr.set(c.x,c.y,c.z,c.w).premultiply(_i.setFromAxisAngle(Ut,gt)),s.controllerRotation.copy(nr),s.mesh.quaternion.copy(nr).multiply(RT.setFromAxisAngle(PT,s.side==="left"?Math.PI/2:-Math.PI/2)),BT(s,r.gamepad?.buttons??[],t),Qe.role==="player")py(s,l);else if(!Zt&&l&&!s.grip&&k.objects&&!s.held){let x=null,g=.15,m=Mn.coconuts.find(b=>b.visible&&b.getWorldPosition(Io).distanceToSquared(s.target)<.26**2);m&&(x=Gp(m));for(let b of Tt){if(b.owner||!b.grabbable||b.mesh.position.distanceToSquared(s.target)>(b.radius+.18)**2)continue;let w=ph(s.target,b);!m&&w<g&&(g=w,x=b)}x&&!s.held&&(s.held=x,x.owner=s,x.frozen=!1,fl.copy(nr).invert(),x.offset.copy(x.mesh.position).sub(s.target).applyQuaternion(fl),x.relativeRotation.multiplyQuaternions(fl,x.mesh.quaternion),x.velocity.set(0,0,0),x.angular.set(0,0,0))}!l&&s.grip&&!s.held?.toolHold&&li(s,!Zt),s.grip=l,s.hasSupport=!1;let u=s.held;if(u&&!u.toolHold&&u.collidable&&u.spec.supportAxis){Xh.multiplyQuaternions(nr,u.relativeRotation),s.supportOffset.copy(u.spec.supportAxis).applyQuaternion(Xh),ps.copy(u.offset).applyQuaternion(nr);let x=s.supportOffset.dot(ps);(Math.abs(x)>.008?x<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(ps),s.hasSupport=!0}if(s.held?.toolHold){let g=n.getPose(r.targetRaySpace,e)?.transform.orientation;g?s.aimDirection.set(0,0,-1).applyQuaternion(Vy.set(g.x,g.y,g.z,g.w)).applyAxisAngle(Ut,gt):s.aimDirection.set(0,0,-1).applyQuaternion(nr)}let d=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");d&&!s.menu&&xA(s.side),s.menu=d;let f=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&f&&!s.toolButton&&!Zt&&xn("toolActive",1),s.toolButton=f;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&k.toolActive&&!Zt&&xn("toolMode",1),s.toolCycle=h;let p=!!r.gamepad?.buttons[0]?.pressed;if(Zt){let x=p&&!s.trigger;(x||!rr||!rr.click&&s.side!==xy)&&(rr={source:r,click:x})}else!Zt&&s.side==="right"&&k.mapEdit?Dh={source:r,click:p&&!s.trigger}:!Zt&&s.side==="right"&&k.toolActive?Lh={source:r,hand:s,click:p&&!s.trigger}:!Zt&&!k.blasterActive&&(s.side==="right"||p&&!s.trigger)&&(hl={source:r,click:p&&!s.trigger});s.trigger=p}}function SA(n,e,t,i){let s=!!t,r=.43+k.size*.088;if(s){let h=t.transform.position;Number.isFinite(Co)||(Co=h.y),ai=qe.clamp(Co-r,-.65,1.7),Nh.position.y=-ai,Jn.set(h.x,h.y-ai,h.z);let x=[...n.session.inputSources].find(g=>g.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(x)<.3&&(Ch=!1),Math.abs(x)>.67&&!Ch&&!Zt&&(Ch=!0,jn.copy(Jn).applyAxisAngle(Ut,gt),gt-=Math.sign(x)*Math.PI/4,Wx.copy(Jn).applyAxisAngle(Ut,gt),ht.position.add(jn.sub(Wx)),Ph.reset(),Eh=!1)}else Nh.position.y=0,Jn.set(0,r,0),Xt.position.copy(Jn),Xt.rotation.set(ms,0,0,"YXZ");if(Ct.copy(Jn).applyAxisAngle(Ut,gt).add(ht.position),s){let h=t.transform.orientation;Rh.set(h.x,h.y,h.z,h.w),tr.set(0,0,-1).applyQuaternion(Rh),tr.x**2+tr.z**2>.018&&(Hi=gt+Math.atan2(-tr.x,-tr.z))}else Hi=gt;let o=Yy(Ct),a=9.81*(k.gravity/5)*(o?.gravity??1);Xx.copy(ht.position);let l=Qe.role==="player"?_A():Tt;if(s){bA(n,e,i),qt.some(h=>h.valid)&&Op++,Sh.length=0;for(let h of _s)Sh.push(h);if(k.collisions&&k.objects)for(let h of l)h.handCollider&&!h.owner&&Sh.push(h.handCollider);Ph.move({head:Ct,dt:i,gravity:a,settings:k,boxes:Sh,velocity:Pn,movement:rl,reach:Oh()*2+.16});for(let h of qt)G0(h,k.stepHaptics,i)}else{Pn.y-=a*i;let h=Number(xi.has("KeyD"))-Number(xi.has("KeyA")||xi.has("KeyQ"))+ml.movement.x,p=Number(xi.has("KeyS"))-Number(xi.has("KeyW")||xi.has("KeyZ"))+ml.movement.z,x=xi.has("ShiftLeft")||xi.has("ShiftRight");er.set(h,0,p).clampLength(0,1).applyAxisAngle(Ut,gt).multiplyScalar(x?5.4:3.4);let g=1-Math.exp(-i*(o?.friction<.1?2:ir?13:4));Pn.x=qe.lerp(Pn.x,er.x,g),Pn.z=qe.lerp(Pn.z,er.z,g),(ml.consumeJump()||Gi.delete("Space"))&&ir&&(Pn.y=3.1+k.jump*.18),rl.copy(Pn).multiplyScalar(i)}if(k.collisions&&Eh&&(ps.copy(Ct).add(rl),Mo(Yx,ps,Zx,_s,jn,Mh)&&er.subVectors(ps,jn).dot(Mh)<0&&rl.copy(jn).sub(Ct)),ht.position.add(rl),Ct.copy(Jn).applyAxisAngle(Ut,gt).add(ht.position),ir=!1,k.collisions){jx.set(0,0,1).applyAxisAngle(Ut,Hi);let h=s?-tr.y:Math.max(0,-Math.sin(ms)),p=s?.17+qe.smoothstep(h,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,Jn.y*.57):Jn.y,m=x===2?Zx:x===0?.18:.17;if(jn.set(Ct.x,ht.position.y+g,Ct.z),x<2&&jn.addScaledVector(jx,p),qx.copy(jn),ir=ep(jn,m,bt.boxes,Pn,0,3+k.grip,i)||ir,k.objects)for(let b of l)b.blocksPlayer&&!b.owner&&Rx(jn,m,b,Pn,Mh)&&Mh.y>.6&&(ir=!0);ep(jn,m,bt.boxes,Pn,0,3+k.grip,i),er.subVectors(jn,qx),ht.position.add(er),Ct.add(er)}}if(rp.subVectors(ht.position,Xx),s){let h=Ph.finish(rp,Pn);h.contacts&&Bp++,h.launched&&(wp++,Tp={handSpeed:h.launchSpeed,velocity:Pn.toArray(),t:performance.now()})}(dt.active?ht.position.y<-24||Math.abs(ht.position.x)>155||Math.abs(ht.position.z)>155:ht.position.y<-9||Math.abs(ht.position.x)>33||ht.position.z<-57||ht.position.z>13)&&(Xi(),Ct.copy(Jn).applyAxisAngle(Ut,gt).add(ht.position)),Yx.copy(Ct),Eh=!0,ht.rotation.y=gt,s&&Xt.position.set(0,0,0);for(let h of qt)s&&h.valid&&h.mesh.position.copy(h.surface?h.anchor:h.held?h.target:h.locomotionTarget).addScaledVector(rp,h.surface?0:1),s||(h.mesh.visible=!1);let c=Math.min(.3,Math.max(.21,Jn.y*.31)),u=.72+k.size*.05,d=Oh()*2*(2/3)/.82;gs.visible=k.body,gs.position.set(Ct.x,Ct.y-c-.24*d-.05*ol,Ct.z);let f=s?-tr.y:Math.max(0,-Math.sin(ms));ol=qe.lerp(ol,qe.smoothstep(f,.24,.92),1-Math.exp(-i*14)),$x.set(0,0,1).applyAxisAngle(Ut,Hi),gs.position.addScaledVector($x,.32*ol),Qx.set(-.48*ol,Hi,0,"YXZ"),gs.quaternion.setFromEuler(Qx),vs.position.copy(Ct),s?vs.quaternion.copy(Rh).premultiply(_i.setFromAxisAngle(Ut,gt)):vs.quaternion.setFromEuler(new ln(ms,gt,0,"YXZ")),OT(u,d),ht.updateMatrixWorld(!0),Xt.updateWorldMatrix(!0,!1)}function wA(n,e){if(bh+=n,ap++,To+=n,bh<1||(sr=Math.round(ap/bh),ap=0,bh=0,nn=!0,eA.textContent=sr+" FPS \xB7 qualit\xE9 "+Qt+"/10 \xB7 "+(k.auto?"auto":"manuel"),!k.auto||To<5))return;To=0;let t=e?Math.min(100,Ke.xr.getSession()?.frameRate||ul):60;e&&(Ap=t),Ao=sr<t-4?Ao+1:0,Eo=sr>=t-1?Eo+1:0;let i=qe.clamp(Qt+(Ao>=1?-1:Eo>=2?1:0),1,10);i!==Qt&&(Qt=i,To=Ao=Eo=0,Mi())}bt.bakeLightmap();var Zy={value:1},jy={value:1},Jy={value:0},Zp={value:0},my=new WeakSet;function vl(n){if(!n||my.has(n))return;my.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:Zy,uPhotoSaturation:jy,uPhotoWarmth:Jy,uLabShader:Zp}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of bt.materials)vl(n);At.traverse(n=>{n.isMesh&&![yn.mesh,Kn.mesh,ar].includes(n)&&vl(n.material)});Mi();var gy=new URLSearchParams(location.search);if(gy.has("map"))dt.loadURL(gy.get("map"));else try{let n=localStorage.getItem(il);n&&dt.load(n)}catch(n){dt.inform(n.message)}function TA(){let n=Ke.xr.isPresenting;return{head:vs.quaternion,hands:n?qt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,Ro.mode?hA:null],height:Jn.y,armSpan:Oh()*2,light:k.timeOfDay-1,color:yy,coconuts:Mn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:Ro.mode?Ro:null,gun:jh.gun}}Ke.setAnimationLoop((n,e)=>{let t=op?Math.max(0,(n-op)/1e3):.014;op=n;let i=Math.min(.035,t),s=Ke.xr.isPresenting,r=Ke.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if(GT(n*.001),Fh&&n>Fh&&(bp.hidden=!0,Fh=0,Yp=""),ar.visible=!1,Hp.hide(),Ro.mode=0,_s=k.collisions?bt.boxes:IT,rr=null,hl=null,Lh=null,Dh=null,dt.clearGhost(),yn.mesh.visible=!1,!s&&Qe.role==="pc"){gs.visible=!1;for(let p of qt)p.mesh.visible=!1}else SA(e,r,o,i);let a=!s&&Qe.role==="pc",l=a||Qe.role==="player";if(Qe.role!=="player"){Wi=0;for(let p of qt)p.remoteHeld=0}l||(fA(i),MA());for(let p of Tt){p.mesh.visible=k.objects&&!l;let{x,y:g,z:m}=p.mesh.position;if((dt.active?g<-24||Math.abs(x)>155||Math.abs(m)>155:g<-8||Math.abs(x)>28||m<-57||m>13)&&(p.owner||(p.mesh.position.copy(p.start),p.velocity.set(0,0,0),p.angular.set(0,0,0))),p.shadow.visible=!l&&k.shadows&&Vh()<3&&k.objects&&p.mesh.position.y<2,p.shadow.visible){let{x:w,z:v}=p.mesh.position,T=bt.boxes.find(D=>D.heightfield&&w>=D.xMin&&w<=D.xMax&&v>=D.zMin&&v<=D.zMax),C=T?T.height(w,v):0;p.shadow.position.set(w,C+.006,v)}}if(!l&&k.objects){for(let p of Tt)p.beforePhysics.copy(p.mesh.position);Ex(Tt,bt.boxes,i,9.81*k.gravity/5,.12+k.bounce*.064,Yy),dt.active||Mn.updateTarget(Tt)}if(s&&!Zt&&!l)for(let p of qt)cA(p);if(bt.probe.rotation.y+=i*.29,wA(Math.min(.3,t),s),yn.mesh.visible=s&&Zt,yn.mesh.visible&&nn&&dy(),yn.mesh.visible&&rr)yA(e,r,rr.source,rr.click);else if(s&&Dh)lA(e,r,Dh);else if(s&&Lh)mA(e,r,Lh);else if(s&&hl)gA(e,r,hl.source,hl.click);else if(!s&&!a){Xt.getWorldPosition(Vn),Xt.getWorldDirection(In),Gi.delete("KeyX")&&xn("blasterActive",1),Gi.delete("KeyG")&&(xn("toolActive",1),k.toolActive&&vi("Outil \xB7 "+Ys[k.toolMode-1])),Gi.delete("KeyT")&&xn("toolMode",1);let p=Gi.delete("KeyE");k.toolActive?Wy(Vn,In,p,null):p&&!vA(Vn,In)?_p(Vn,In,!0):!p&&!l&&_p(Vn,In,!1),Gi.delete("KeyF")&&(k.objects=!0,ky(Ip[0]))}let c=Kn.mesh.visible;if(Kn.mesh.visible=s&&!Zt&&qt[0].valid,Kn.mesh.visible&&(Kn.mesh.position.copy(qt[0].mesh.position).y+=.12,Kn.mesh.lookAt(Ct)),(nn||n-Jx>1100||Kn.mesh.visible&&!c)&&(nn=!1,Jx=n,Zt&&dy(),Kn.mesh.visible)){let p=Kn.ctx;p.clearRect(0,0,416,84),p.fillStyle="#182632",p.fillRect(0,0,416,84),p.fillStyle="#fff0cf",p.font="bold 25px system-ui",p.fillText(sr+" FPS     Q "+Qt+"/10",17,32),p.font="20px system-ui",p.fillText(k.mapEdit?"\xC9dition : "+zy[k.mapMode-1]:k.blasterActive?"Pistolet : maintenir la g\xE2chette":k.toolActive?"Tool Gun : "+Ys[k.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Kn.texture.needsUpdate=!0}jh.update({frame:e,space:r,inVR:s,remoteWorld:l,dt:i,yaw:gt,drop:ai,rightHand:qt[1],enabled:k.blasterActive&&!a&&!Zt&&!k.mapEdit,flatFiring:qy.held||xi.has("KeyJ")}),Qe.update({inVR:s,time:n,dt:i,position:Ct,yaw:a?gt:Hi,pitch:ms,camera:Xt,rig:ht,keys:xi,actions:Gi,flat:ml,avatar:TA,bodies:k.objects?Tt:XT,score:Mn.score()}),Gi.clear(),JT(l),bt.centerShadows(Hh);let u=25+(10-Vh())*(s?7:4);Ke.shadowMap.enabled&&n-Hx>=u&&(Ke.shadowMap.needsUpdate=!0,Hx=n),iA(n,o);let d=s&&k.post,f=s&&k.rayTrace;ET(f,Tt);let h=k.vrFov/100;if(!d||!AT.render(At,Xt,{bloom:k.bloom,visibleField:h})){Ah.material.uniforms.visibleField.value=h,Ah.visible=s&&h<1;try{Ke.render(At,Xt)}finally{Ah.visible=!1}}if((s||!Np)&&(Up[Ih]=t*1e3,Ih=(Ih+1)%720,n-xp>350)){xp=n;let{calls:p,triangles:x,lines:g,points:m}=Ke.info.render;Ry={calls:p,triangles:x,lines:g,points:m,textures:Ke.info.memory.textures},s&&(Fp={refreshHz:Ke.xr.getSession()?.frameRate??null,targetFps:Ap,supportedHz:cl.slice(),foveation:Ke.xr.getFoveation()??null,visualEffects:{post:d,bloom:d&&k.bloom,rayTrace:f},eyeViewports:Ke.xr.getCamera().cameras.map(b=>({width:b.viewport?.z??null,height:b.viewport?.w??null}))})}});})();
