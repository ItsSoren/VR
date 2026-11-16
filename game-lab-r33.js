(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Wm=0,Yf=1,qm=2;var Na=1,Xm=2,mi=3,si=0,un=1,Wt=2,Fi=0,Ps=1,Yn=2,Zf=3,jf=4,Ym=5,ts=100,Zm=101,jm=102,Jm=103,Km=104,$m=200,Qm=201,eg=202,tg=203,ic=204,sc=205,ng=206,ig=207,sg=208,rg=209,og=210,ag=211,lg=212,cg=213,ug=214,Uc=0,Fc=1,Nc=2,Is=3,Bc=4,Oc=5,zc=6,Vc=7,kc=0,hg=1,fg=2,Ni=0,dg=1,pg=2,mg=3,Gc=4,gg=5,xg=6,yg=7;var Jf=300,Vs=301,ks=302,Jr=303,Hc=304,Ba=306,di=1e3,es=1001,rc=1002,on=1003,vg=1004;var Oa=1005;var an=1006,Wc=1007;var An=1008;var zn=1009,Kf=1010,$f=1011,Kr=1012,qc=1013,rs=1014,ri=1015,gi=1016,Xc=1017,Yc=1018,$r=1020,Qf=35902,ed=35899,td=1021,nd=1022,En=1023,Lr=1026,Qr=1027,Zc=1028,jc=1029,id=1030,Jc=1031;var Kc=1033,za=33776,Va=33777,ka=33778,Ga=33779,$c=35840,Qc=35841,eu=35842,tu=35843,nu=36196,iu=37492,su=37496,ru=37808,ou=37809,au=37810,lu=37811,cu=37812,uu=37813,hu=37814,fu=37815,du=37816,pu=37817,mu=37818,gu=37819,xu=37820,yu=37821,vu=36492,_u=36494,Mu=36495,bu=36283,Su=36284,wu=36285,Tu=36286;var ea=2300,oc=2301,tc=2302,Uf=2400,Ff=2401,Nf=2402;var _g=3200,Mg=3201;var Au=0,bg=1,Bi="",yt="srgb",Ls="srgb-linear",ta="linear",vt="srgb";var Rs=7680;var Bf=519,Sg=512,wg=513,Tg=514,sd=515,Ag=516,Eg=517,Cg=518,Rg=519,ac=35044,Zn=35048;var rd="300 es",ii=2e3,na=2001;var Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],om=1234567,Jo=Math.PI/180,Dr=180/Math.PI;function fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function od(n,e){return(n%e+e)%e}function cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uv(n,e,t){return n!==e?(t-n)/(e-n):0}function Ko(n,e,t){return(1-t)*n+t*e}function hv(n,e,t,i){return Ko(n,e,1-Math.exp(-t*i))}function fv(n,e=1){return e-Math.abs(od(n,e*2)-e)}function dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gv(n,e){return n+Math.random()*(e-n)}function xv(n){return n*(.5-Math.random())}function yv(n){n!==void 0&&(om=n);let e=om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vv(n){return n*Jo}function _v(n){return n*Dr}function Mv(n){return(n&n-1)===0&&n!==0}function bv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:Jo,RAD2DEG:Dr,generateUUID:fi,clamp:$e,euclideanModulo:od,mapLinear:cv,inverseLerp:uv,lerp:Ko,damp:hv,pingpong:fv,smoothstep:dv,smootherstep:pv,randInt:mv,randFloat:gv,randFloatSpread:xv,seededRandom:yv,degToRad:vv,radToDeg:_v,isPowerOfTwo:Mv,ceilPowerOfTwo:bv,floorPowerOfTwo:Sv,setQuaternionFromProperEuler:wv,normalize:xt,denormalize:ni},Ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(f!==x||l!==d||c!==h||u!==p){let g=1-a,m=l*d+c*h+u*p+f*x,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let A=Math.sqrt(w),P=Math.atan2(A,m*b);g=Math.sin(g*P)/A,a=Math.sin(a*P)/A}let v=a*b;if(l=l*g+d*v,c=c*g+h*v,u=u*g+p*v,f=f*g+x*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-a*h,e[t+2]=c*p+u*h+a*d-l*f,e[t+3]=u*p-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(am.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rf=new M,am=new je,nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],p=i[8],x=s[0],g=s[3],m=s[6],b=s[1],w=s[4],v=s[7],A=s[2],P=s[5],D=s[8];return r[0]=o*x+a*b+l*A,r[3]=o*g+a*w+l*P,r[6]=o*m+a*v+l*D,r[1]=c*x+u*b+f*A,r[4]=c*g+u*w+f*P,r[7]=c*m+u*v+f*D,r[2]=d*x+h*b+p*A,r[5]=d*g+h*w+p*P,r[8]=d*m+h*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,p=t*f+i*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},of=new nt;function ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pg(){let n=Ur("canvas");return n.style.display="block",n}var lm={};function Fr(n){n in lm||(lm[n]=!0,console.warn(n))}function Ig(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var cm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),um=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tv(){let n={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ls]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:cm,fromXYZ:um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:cm,fromXYZ:um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var ct=Tv();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=Ur("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Av=0,Nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(af(s[o].image)):r.push(af(s[o]))}else r=af(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function af(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ev=0,lf=new M,dn=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=es,s=es,r=an,o=An,a=En,l=zn,c=n.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=fi(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lf).x}get height(){return this.source.getSize(lf).y}get depth(){return this.source.getSize(lf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Jf;dn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,A=(m+1)/2,P=(u+d)/4,D=(f+x)/4,U=(p+g)/4;return w>v&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=D/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=U/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(f-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),Al.subVectors(this.max,Oo),fr.subVectors(e.a,Oo),dr.subVectors(e.b,Oo),pr.subVectors(e.c,Oo),Zi.subVectors(dr,fr),ji.subVectors(pr,dr),Ts.subVectors(fr,pr);let t=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-Ts.z,Ts.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,Ts.z,0,-Ts.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-Ts.y,Ts.x,0];return!cf(t,fr,dr,pr,Al)||(t=[1,0,0,0,1,0,0,0,1],!cf(t,fr,dr,pr,Al))?!1:(El.crossVectors(Zi,ji),t=[El.x,El.y,El.z],cf(t,fr,dr,pr,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new M,new M,new M,new M,new M,new M,new M,new M],Qn=new M,Tl=new rn,fr=new M,dr=new M,pr=new M,Zi=new M,ji=new M,Ts=new M,Oo=new M,Al=new M,El=new M,As=new M;function cf(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){As.fromArray(n,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Cv=new rn,zo=new M,uf=new M,Wn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);let t=zo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(uf)),this.expandByPoint(zo.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wi=new M,hf=new M,Cl=new M,Ji=new M,ff=new M,Rl=new M,df=new M,Ds=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hf.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(hf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Cl),a=Ji.dot(this.direction),l=-Ji.dot(Cl),c=Ji.lengthSq(),u=Math.abs(1-o*o),f,d,h,p;if(u>0)if(f=o*l-a,d=o*a-l,p=r*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hf).addScaledVector(Cl,d),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){ff.subVectors(t,e),Rl.subVectors(i,e),df.crossVectors(ff,Rl);let o=this.direction.dot(df),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let l=a*this.direction.dot(Rl.crossVectors(Ji,Rl));if(l<0)return null;let c=a*this.direction.dot(ff.cross(Ji));if(c<0||l+c>o)return null;let u=-a*Ji.dot(df);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,u,f,d,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,h,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,f,d,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Pv)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ki.crossVectors(i,Fn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ki.crossVectors(i,Fn)),Ki.normalize(),Pl.crossVectors(Fn,Ki),s[0]=Ki.x,s[4]=Pl.x,s[8]=Fn.x,s[1]=Ki.y,s[5]=Pl.y,s[9]=Fn.y,s[2]=Ki.z,s[6]=Pl.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],b=i[3],w=i[7],v=i[11],A=i[15],P=s[0],D=s[4],U=s[8],S=s[12],_=s[1],C=s[5],N=s[9],F=s[13],G=s[2],X=s[6],z=s[10],Y=s[14],B=s[3],ce=s[7],he=s[11],ie=s[15];return r[0]=o*P+a*_+l*G+c*B,r[4]=o*D+a*C+l*X+c*ce,r[8]=o*U+a*N+l*z+c*he,r[12]=o*S+a*F+l*Y+c*ie,r[1]=u*P+f*_+d*G+h*B,r[5]=u*D+f*C+d*X+h*ce,r[9]=u*U+f*N+d*z+h*he,r[13]=u*S+f*F+d*Y+h*ie,r[2]=p*P+x*_+g*G+m*B,r[6]=p*D+x*C+g*X+m*ce,r[10]=p*U+x*N+g*z+m*he,r[14]=p*S+x*F+g*Y+m*ie,r[3]=b*P+w*_+v*G+A*B,r[7]=b*D+w*C+v*X+A*ce,r[11]=b*U+w*N+v*z+A*he,r[15]=b*S+w*F+v*Y+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*h-i*l*h)+x*(+t*l*h-t*c*d+r*o*d-s*o*h+s*c*u-r*l*u)+g*(+t*c*f-t*a*h-r*o*f+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=f*g*c-x*d*c+x*l*h-a*g*h-f*l*m+a*d*m,w=p*d*c-u*g*c-p*l*h+o*g*h+u*l*m-o*d*m,v=u*x*c-p*f*c+p*a*h-o*x*h-u*a*m+o*f*m,A=p*f*l-u*x*l-p*a*d+o*x*d+u*a*g-o*f*g,P=t*b+i*w+s*v+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=b*D,e[1]=(x*d*r-f*g*r-x*s*h+i*g*h+f*s*m-i*d*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*h-i*l*h)*D,e[4]=w*D,e[5]=(u*g*r-p*d*r+p*s*h-t*g*h-u*s*m+t*d*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*h+t*l*h)*D,e[8]=v*D,e[9]=(p*f*r-u*x*r-p*i*h+t*x*h+u*i*m-t*f*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*h-t*a*h)*D,e[12]=A*D,e[13]=(u*x*s-p*f*s+p*i*d-t*x*d-u*i*g+t*f*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,p=r*f,x=o*u,g=o*f,m=a*f,b=l*c,w=l*u,v=l*f,A=i.x,P=i.y,D=i.z;return s[0]=(1-(x+m))*A,s[1]=(h+v)*A,s[2]=(p-w)*A,s[3]=0,s[4]=(h-v)*P,s[5]=(1-(d+m))*P,s[6]=(g+b)*P,s[7]=0,s[8]=(p+w)*D,s[9]=(g-b)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=mr.set(s[0],s[1],s[2]).length(),o=mr.set(s[4],s[5],s[6]).length(),a=mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===na)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ii)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===na)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mr=new M,ei=new at,Rv=new M(0,0,0),Pv=new M(1,1,1),Ki=new M,Pl=new M,Fn=new M,hm=new at,fm=new je,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iv=0,dm=new M,gr=new je,Ti=new at,Il=new M,Vo=new M,Lv=new M,Dv=new je,pm=new M(1,0,0),mm=new M(0,1,0),gm=new M(0,0,1),xm={type:"added"},Uv={type:"removed"},xr={type:"childadded",child:null},pf={type:"childremoved",child:null},Lt=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new ln,i=new je,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Il.copy(e):Il.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Vo,Il,this.up):Ti.lookAt(Il,Vo,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Ti),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uv),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new M(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new M,Ai=new M,mf=new M,Ei=new M,yr=new M,vr=new M,ym=new M,gf=new M,xf=new M,yf=new M,vf=new lt,_f=new lt,Mf=new lt,wn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ai.subVectors(i,t),mf.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ai),l=ti.dot(mf),c=Ai.dot(Ai),u=Ai.dot(mf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return vf.setScalar(0),_f.setScalar(0),Mf.setScalar(0),vf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,i),Mf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vf,r.x),o.addScaledVector(_f,r.y),o.addScaledVector(Mf,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ai.subVectors(e,t),ti.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;yr.subVectors(s,i),vr.subVectors(r,i),gf.subVectors(e,i);let l=yr.dot(gf),c=vr.dot(gf);if(l<=0&&c<=0)return t.copy(i);xf.subVectors(e,s);let u=yr.dot(xf),f=vr.dot(xf);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(yr,o);yf.subVectors(e,r);let h=yr.dot(yf),p=vr.dot(yf);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(vr,a);let g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return ym.subVectors(r,s),a=(f-u)/(f-u+(h-p)),t.copy(s).addScaledVector(ym,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(yr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function bf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=od(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bf(o,r,e+1/3),this.g=bf(o,r,e),this.b=bf(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=Lg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ct.workingToColorSpace(fn.copy(this),e),Math.round($e(fn.r*255,0,255))*65536+Math.round($e(fn.g*255,0,255))*256+Math.round($e(fn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=yt){ct.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ll);let i=Ko($i.h,Ll.h,t),s=Ko($i.s,Ll.s,t),r=Ko($i.l,Ll.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Be;Be.NAMES=Lg;var Fv=0,qn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ps,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new M,Dl=new Ae,Nv=0,bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}};var Us=class extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sa=class extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bv=0,Hn=new at,Sf=new Lt,_r=new M,Nn=new rn,ko=new rn,sn=new M,et=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?sa:Us)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Nn.min,ko.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,ko.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(ko.min),Nn.expandByPoint(ko.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),sn.add(_r)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new M,l[U]=new M;let c=new M,u=new M,f=new M,d=new Ae,h=new Ae,p=new Ae,x=new M,g=new M;function m(U,S,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,_),d.fromBufferAttribute(r,U),h.fromBufferAttribute(r,S),p.fromBufferAttribute(r,_),u.sub(c),f.sub(c),h.sub(d),p.sub(d);let C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(C),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(C),a[U].add(x),a[S].add(x),a[_].add(x),l[U].add(g),l[S].add(g),l[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){let _=b[U],C=_.start,N=_.count;for(let F=C,G=C+N;F<G;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new M,v=new M,A=new M,P=new M;function D(U){A.fromBufferAttribute(s,U),P.copy(A);let S=a[U];w.copy(S),w.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(P,S);let C=v.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,C)}for(let U=0,S=b.length;U<S;++U){let _=b[U],C=_.start,N=_.count;for(let F=C,G=C+N;F<G;F+=3)D(e.getX(F+0)),D(e.getX(F+1)),D(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,f=new M;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[h++]}return new bt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vm=new at,Es=new Ds,Ul=new Wn,_m=new M,Fl=new M,Nl=new M,Bl=new M,wf=new M,Ol=new M,Mm=new M,zl=new M,Ne=class extends Lt{constructor(e=new et,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(wf.fromBufferAttribute(f,e),o?Ol.addScaledVector(wf,u):Ol.addScaledVector(wf.sub(t),u))}t.add(Ol)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Ul.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ul,_m)===null||Es.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(r).invert(),Es.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,A=w;v<A;v+=3){let P=a.getX(v),D=a.getX(v+1),U=a.getX(v+2);s=Vl(this,m,e,i,c,u,f,P,D,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=Vl(this,o,e,i,c,u,f,b,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,A=w;v<A;v+=3){let P=v,D=v+1,U=v+2;s=Vl(this,m,e,i,c,u,f,P,D,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=g,w=g+1,v=g+2;s=Vl(this,o,e,i,c,u,f,b,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ov(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(zl);return c<t.near||c>t.far?null:{distance:c,point:zl.clone(),object:n}}function Vl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Fl),n.getVertexPosition(l,Nl),n.getVertexPosition(c,Bl);let u=Ov(n,e,t,i,Fl,Nl,Bl,Mm);if(u){let f=new M;wn.getBarycoord(Mm,Fl,Nl,Bl,f),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,f,new Ae)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,f,new Ae)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,f,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};wn.getNormal(Fl,Nl,Bl,d.normal),u.face=d,u.barycoord=f}return u}var tt=class n extends et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function p(x,g,m,b,w,v,A,P,D,U,S){let _=v/D,C=A/U,N=v/2,F=A/2,G=P/2,X=D+1,z=U+1,Y=0,B=0,ce=new M;for(let he=0;he<z;he++){let ie=he*C-F;for(let se=0;se<X;se++){let be=se*_-N;ce[x]=be*b,ce[g]=ie*w,ce[m]=G,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[m]=P>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(se/D),f.push(1-he/U),Y+=1}}for(let he=0;he<U;he++)for(let ie=0;ie<D;ie++){let se=d+ie+X*he,be=d+ie+X*(he+1),Ce=d+(ie+1)+X*(he+1),ye=d+(ie+1)+X*he;l.push(se,be,ye),l.push(be,Ce,ye),B+=6}a.addGroup(h,B,S),h+=B,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=Gs(n[t]);for(let s in i)e[s]=i[s]}return e}function zv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Eu={clone:Gs,merge:pn},Vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vv,this.fragmentShader=kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=zv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ra=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new M,bm=new Ae,Sm=new Ae,Gt=class extends ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Sm),t.subVectors(Sm,bm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mr=-90,br=1,hc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Mr,br,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Mr,br,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Mr,br,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Mr,br,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Mr,br,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Mr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},oa=class extends dn{constructor(e=[],t=Vs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Fi});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=an),new hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gv={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var aa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},la=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new M,zr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vr=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Go=new M,wr=new M,Tr=new M,Ar=new Ae,Ho=new Ae,Dg=new at,kl=new M,Wo=new M,Gl=new M,wm=new Ae,Tf=new Ae,Tm=new Ae,ca=class extends Lt{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new la(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new zr(i,3,0,!1)),Sr.setAttribute("uv",new zr(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Hl(kl.set(-.5,-.5,0),Tr,o,wr,s,r),Hl(Wo.set(.5,-.5,0),Tr,o,wr,s,r),Hl(Gl.set(.5,.5,0),Tr,o,wr,s,r),wm.set(0,0),Tf.set(1,0),Tm.set(1,1);let a=e.ray.intersectTriangle(kl,Wo,Gl,!1,Go);if(a===null&&(Hl(Wo.set(-.5,.5,0),Tr,o,wr,s,r),Tf.set(0,1),a=e.ray.intersectTriangle(kl,Gl,Wo,!1,Go),a===null))return;let l=e.ray.origin.distanceTo(Go);l<e.near||l>e.far||t.push({distance:l,point:Go.clone(),uv:wn.getInterpolation(Go,kl,Wo,Gl,wm,Tf,Tm,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Hl(n,e,t,i,s,r){Ar.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ho.x=r*Ar.x-s*Ar.y,Ho.y=s*Ar.x+r*Ar.y):Ho.copy(Ar),n.copy(e),n.x+=Ho.x,n.y+=Ho.y,n.applyMatrix4(Dg)}var pi=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,u=on,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new at,Am=new at,Wl=[],Em=new rn,Hv=new at,qo=new Ne,Xo=new Wn,ua=class extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Hv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Em.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Em)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Xo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(qo.geometry=this.geometry,qo.material=this.material,qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Am.multiplyMatrices(i,Er),qo.matrixWorld=Am,qo.raycast(e,Wl);for(let o=0,a=Wl.length;o<a;o++){let l=Wl[o];l.instanceId=r,l.object=this,t.push(l)}Wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(s*this.count),s,this.count,Zc,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Af=new M,Wv=new M,qv=new nt,Sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Af.subVectors(i,t).cross(Wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Af),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qv.getNormalMatrix(e),s=this.coplanarPoint(Af).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new Wn,Xv=new Ae(.5,.5),ql=new M,Gr=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],w=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,h-u,m-p,A-b).normalize(),s[1].setComponents(c+o,h+u,m+p,A+b).normalize(),s[2].setComponents(c+a,h+f,m+x,A+w).normalize(),s[3].setComponents(c-a,h-f,m-x,A-w).normalize(),i)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,h-d,m-g,A-v).normalize();else if(s[4].setComponents(c-l,h-d,m-g,A-v).normalize(),t===ii)s[5].setComponents(c+l,h+d,m+g,A+v).normalize();else if(t===na)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=Xv.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ql.x=s.normal.x>0?e.max.x:e.min.x,ql.y=s.normal.y>0?e.max.y:e.min.y,ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dc=new M,pc=new M,Cm=new at,Yo=new Ds,Xl=new Wn,Ef=new M,Rm=new M,ha=class extends Lt{constructor(e=new et,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),Xl.radius+=r,e.ray.intersectsSphere(Xl)===!1)return;Cm.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Cm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),b=u.getX(x+1),w=Yl(this,e,Yo,l,m,b,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Yl(this,e,Yo,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Yl(this,e,Yo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Yl(this,e,Yo,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(dc.fromBufferAttribute(a,s),pc.fromBufferAttribute(a,r),t.distanceSqToSegment(dc,pc,Ef,Rm)>i)return;Ef.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ef);if(!(c<e.near||c>e.far))return{distance:c,point:Rm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Pm=new M,Im=new M,fa=class extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pm.fromBufferAttribute(t,s),Im.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pm.distanceTo(Im);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lm=new at,Of=new Ds,Zl=new Wn,jl=new M,pa=class extends Lt{constructor(e=new et,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;Lm.copy(s).invert(),Of.copy(e.ray).applyMatrix4(Lm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=d,x=h;p<x;p++){let g=c.getX(p);jl.fromBufferAttribute(f,g),Dm(jl,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let p=d,x=h;p<x;p++)jl.fromBufferAttribute(f,p),Dm(jl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dm(n,e,t,i,s,r,o){let a=Of.distanceSqToPoint(n);if(a<t){let l=new M;Of.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xn=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ma=class extends dn{constructor(e,t,i=rs,s,r,o,a=on,l=on,c,u=Lr,f=1){if(u!==Lr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ga=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xa=class n extends et{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,d=t,h=2*f+d,p=i*2+r,x=s+1,g=new M,m=new M;for(let b=0;b<=p;b++){let w=0,v=0,A=0,P=0;if(b<=i){let S=b/i,_=S*Math.PI/2;v=-u-e*Math.cos(_),A=e*Math.sin(_),P=-e*Math.cos(_),w=S*f}else if(b<=i+r){let S=(b-i)/r;v=-u+S*t,A=e,P=0,w=f+S*d}else{let S=(b-i-r)/i,_=S*Math.PI/2;v=u+e*Math.sin(_),A=e*Math.cos(_),P=e*Math.sin(_),w=f+d+S*f}let D=Math.max(0,Math.min(1,w/h)),U=0;b===0?U=.5/s:b===p&&(U=-.5/s);for(let S=0;S<=s;S++){let _=S/s,C=_*Math.PI*2,N=Math.sin(C),F=Math.cos(C);m.x=-A*F,m.y=v,m.z=A*N,a.push(m.x,m.y,m.z),g.set(-A*F,P,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(_+U,D)}if(b>0){let S=(b-1)*x;for(let _=0;_<s;_++){let C=S+_,N=S+_+1,F=b*x+_,G=b*x+_+1;o.push(C,N,F),o.push(N,G,F)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Kt=class n extends et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let h=i+f/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ht=class n extends et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],p=0,x=[],g=i/2,m=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(h,2));function b(){let v=new M,A=new M,P=0,D=(t-e)/i;for(let U=0;U<=r;U++){let S=[],_=U/r,C=_*(t-e)+e;for(let N=0;N<=s;N++){let F=N/s,G=F*l+a,X=Math.sin(G),z=Math.cos(G);A.x=C*X,A.y=-_*i+g,A.z=C*z,f.push(A.x,A.y,A.z),v.set(X,D,z).normalize(),d.push(v.x,v.y,v.z),h.push(F,1-_),S.push(p++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let _=x[S][U],C=x[S+1][U],N=x[S+1][U+1],F=x[S][U+1];(e>0||S!==0)&&(u.push(_,C,F),P+=3),(t>0||S!==r-1)&&(u.push(C,N,F),P+=3)}c.addGroup(m,P,0),m+=P}function w(v){let A=p,P=new Ae,D=new M,U=0,S=v===!0?e:t,_=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*_,0),d.push(0,_,0),h.push(.5,.5),p++;let C=p;for(let N=0;N<=s;N++){let G=N/s*l+a,X=Math.cos(G),z=Math.sin(G);D.x=S*z,D.y=g*_,D.z=S*X,f.push(D.x,D.y,D.z),d.push(0,_,0),P.x=X*.5+.5,P.y=z*.5*_+.5,h.push(P.x,P.y),p++}for(let N=0;N<s;N++){let F=A+N,G=C+N;v===!0?u.push(G,G+1,F):u.push(G+1,G,F),U+=3}c.addGroup(m,U,v===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class n extends Ht{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class n extends et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new M,v=new M,A=new M;for(let P=0;P<t.length;P+=3)h(t[P+0],w),h(t[P+1],v),h(t[P+2],A),l(w,v,A,b)}function l(b,w,v,A){let P=A+1,D=[];for(let U=0;U<=P;U++){D[U]=[];let S=b.clone().lerp(v,U/P),_=w.clone().lerp(v,U/P),C=P-U;for(let N=0;N<=C;N++)N===0&&U===P?D[U][N]=S:D[U][N]=S.clone().lerp(_,N/C)}for(let U=0;U<P;U++)for(let S=0;S<2*(P-U)-1;S++){let _=Math.floor(S/2);S%2===0?(d(D[U][_+1]),d(D[U+1][_]),d(D[U][_])):(d(D[U][_+1]),d(D[U+1][_+1]),d(D[U+1][_]))}}function c(b){let w=new M;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let b=new M;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=g(b)/2/Math.PI+.5,A=m(b)/Math.PI+.5;o.push(v,1-A)}p(),f()}function f(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],A=o[b+4],P=Math.max(w,v,A),D=Math.min(w,v,A);P>.9&&D<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function h(b,w){let v=b*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let b=new M,w=new M,v=new M,A=new M,P=new Ae,D=new Ae,U=new Ae;for(let S=0,_=0;S<r.length;S+=9,_+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),P.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),A.copy(b).add(w).add(v).divideScalar(3);let C=g(A);x(P,_+0,b,C),x(D,_+2,w,C),x(U,_+4,v,C)}}function x(b,w,v,A){A<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=A/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,h=(o-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new at;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos($e(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos($e(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mc=class extends qr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,s(o,a,d,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Jl=new M,Cf=new cd,Rf=new cd,Pf=new cd,gc=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Jl.subVectors(s[0],s[1]).add(s[0]),c=Jl);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Jl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Cf.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,p,x,g),Rf.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,p,x,g),Pf.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Cf.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Rf.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Pf.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Cf.calc(l),Rf.calc(l),Pf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Um(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Yv(n,e){let t=1-n;return t*t*e}function Zv(n,e){return 2*(1-n)*n*e}function jv(n,e){return n*n*e}function $o(n,e,t,i){return Yv(n,e)+Zv(n,t)+jv(n,i)}function Jv(n,e){let t=1-n;return t*t*t*e}function Kv(n,e){let t=1-n;return 3*t*t*n*e}function $v(n,e){return 3*(1-n)*n*n*e}function Qv(n,e){return n*n*n*e}function Qo(n,e,t,i,s){return Jv(n,e)+Kv(n,t)+$v(n,i)+Qv(n,s)}var ya=class extends Bn{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qo(e,s.x,r.x,o.x,a.x),Qo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends Bn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qo(e,s.x,r.x,o.x,a.x),Qo(e,s.y,r.y,o.y,a.y),Qo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Bn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends Bn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Bn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends Bn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y),$o(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Um(a,l.x,c.x,u.x,f.x),Um(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},zf=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:ya,CubicBezierCurve3:xc,EllipseCurve:qr,LineCurve:va,LineCurve3:yc,QuadraticBezierCurve:_a,QuadraticBezierCurve3:vc,SplineCurve:Ma}),_c=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new zf[s.type]().fromJSON(s))}return this}},ba=class extends _c{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new va(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new _a(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ya(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ma(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new qr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class extends ba{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ba().fromJSON(s))}return this}};function e_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Ug(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=r_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let d=t;d<s;d+=t){let h=n[d],p=n[d+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Sa(r,o,t,a,l,c,0),o}function Ug(n,e,t,i,s){let r;if(s===g_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Fm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Fm(o/i|0,n[o],n[o+1],r);return r&&Xr(r,r.next)&&(Ta(r),r=r.next),r}function Bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Xr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&u_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?n_(n,i,s,r):t_(n)){e.push(l.i,n.i,c.i),Ta(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=i_(Bs(n),e),Sa(n,e,t,i,s,r,2)):o===2&&s_(n,e,t,i,s,r):Sa(Bs(n),e,t,i,s,r,1);break}}}function t_(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&jo(s,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function n_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,h=Math.min(a,l,c),p=Math.min(u,f,d),x=Math.max(a,l,c),g=Math.max(u,f,d),m=Vf(h,p,e,t,i),b=Vf(x,g,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=b;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&jo(a,u,l,f,c,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&jo(a,u,l,f,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&jo(a,u,l,f,c,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&jo(a,u,l,f,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function i_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Xr(i,s)&&Ng(i,t,t.next,s)&&wa(i,s)&&wa(s,i)&&(e.push(i.i,t.i,s.i),Ta(t),Ta(t.next),t=n=s),t=t.next}while(t!==n);return Bs(t)}function s_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d_(o,a)){let l=Bg(o,a);o=Bs(o,o.next),l=Bs(l,l.next),Sa(o,e,t,i,s,r,0),Sa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function r_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ug(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(f_(c))}s.sort(o_);for(let r=0;r<s.length;r++)t=a_(s[r],t);return t}function o_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function a_(n,e){let t=l_(n,e);if(!t)return e;let i=Bg(t,n);return Bs(i,i.next),Bs(t,t.next)}function l_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Xr(n,t))return t;do{if(Xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Fg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);wa(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&c_(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function c_(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function u_(n,e,t,i){let s=n;do s.z===0&&(s.z=Vf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,h_(s)}function h_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Vf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function f_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function jo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Fg(n,e,t,i,s,r,o,a)}function d_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!p_(n,e)&&(wa(n,e)&&wa(e,n)&&m_(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||Xr(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xr(n,e){return n.x===e.x&&n.y===e.y}function Ng(n,e,t,i){let s=$l(Ot(n,e,t)),r=$l(Ot(n,e,i)),o=$l(Ot(t,i,n)),a=$l(Ot(t,i,e));return!!(s!==r&&o!==a||s===0&&Kl(n,t,e)||r===0&&Kl(n,i,e)||o===0&&Kl(t,n,i)||a===0&&Kl(t,e,i))}function Kl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $l(n){return n>0?1:n<0?-1:0}function p_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ng(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wa(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function m_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Bg(n,e){let t=kf(n.i,n.x,n.y),i=kf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Fm(n,e,t,i){let s=kf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Gf=class{static triangulate(e,t,i=2){return e_(e,t,i)}},hi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Nm(e),Bm(i,e);let o=e.length;t.forEach(Nm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bm(i,t[l]);let a=Gf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Os=class n extends et{constructor(e=new Pi([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:x_,w,v=!1,A,P,D,U;m&&(w=m.getSpacedPoints(u),v=!0,d=!1,A=m.computeFrenetFrames(u,!1),P=new M,D=new M,U=new M),d||(g=0,h=0,p=0,x=0);let S=a.extractPoints(c),_=S.shape,C=S.holes;if(!hi.isClockWise(_)){_=_.reverse();for(let H=0,te=C.length;H<te;H++){let J=C[H];hi.isClockWise(J)&&(C[H]=J.reverse())}}function F(H){let J=10000000000000001e-36,I=H[0];for(let W=1;W<=H.length;W++){let O=W%H.length,ee=H[O],fe=ee.x-I.x,de=ee.y-I.y,T=fe*fe+de*de,y=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(I.x),Math.abs(I.y)),L=J*y*y;if(T<=L){H.splice(O,1),W--;continue}I=ee}}F(_),C.forEach(F);let G=C.length,X=_;for(let H=0;H<G;H++){let te=C[H];_=_.concat(te)}function z(H,te,J){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(te,J)}let Y=_.length;function B(H,te,J){let I,W,O,ee=H.x-te.x,fe=H.y-te.y,de=J.x-H.x,T=J.y-H.y,y=ee*ee+fe*fe,L=ee*T-fe*de;if(Math.abs(L)>Number.EPSILON){let q=Math.sqrt(y),oe=Math.sqrt(de*de+T*T),Z=te.x-fe/q,ge=te.y+ee/q,pe=J.x-T/oe,Me=J.y+de/oe,ve=((pe-Z)*T-(Me-ge)*de)/(ee*T-fe*de);I=Z+ee*ve-H.x,W=ge+fe*ve-H.y;let ue=I*I+W*W;if(ue<=2)return new Ae(I,W);O=Math.sqrt(ue/2)}else{let q=!1;ee>Number.EPSILON?de>Number.EPSILON&&(q=!0):ee<-Number.EPSILON?de<-Number.EPSILON&&(q=!0):Math.sign(fe)===Math.sign(T)&&(q=!0),q?(I=-fe,W=ee,O=Math.sqrt(y)):(I=ee,W=fe,O=Math.sqrt(y/2))}return new Ae(I/O,W/O)}let ce=[];for(let H=0,te=X.length,J=te-1,I=H+1;H<te;H++,J++,I++)J===te&&(J=0),I===te&&(I=0),ce[H]=B(X[H],X[J],X[I]);let he=[],ie,se=ce.concat();for(let H=0,te=G;H<te;H++){let J=C[H];ie=[];for(let I=0,W=J.length,O=W-1,ee=I+1;I<W;I++,O++,ee++)O===W&&(O=0),ee===W&&(ee=0),ie[I]=B(J[I],J[O],J[ee]);he.push(ie),se=se.concat(ie)}let be;if(g===0)be=hi.triangulateShape(X,C);else{let H=[],te=[];for(let J=0;J<g;J++){let I=J/g,W=h*Math.cos(I*Math.PI/2),O=p*Math.sin(I*Math.PI/2)+x;for(let ee=0,fe=X.length;ee<fe;ee++){let de=z(X[ee],ce[ee],O);$(de.x,de.y,-W),I===0&&H.push(de)}for(let ee=0,fe=G;ee<fe;ee++){let de=C[ee];ie=he[ee];let T=[];for(let y=0,L=de.length;y<L;y++){let q=z(de[y],ie[y],O);$(q.x,q.y,-W),I===0&&T.push(q)}I===0&&te.push(T)}}be=hi.triangulateShape(H,te)}let Ce=be.length,ye=p+x;for(let H=0;H<Y;H++){let te=d?z(_[H],se[H],ye):_[H];v?(D.copy(A.normals[0]).multiplyScalar(te.x),P.copy(A.binormals[0]).multiplyScalar(te.y),U.copy(w[0]).add(D).add(P),$(U.x,U.y,U.z)):$(te.x,te.y,0)}for(let H=1;H<=u;H++)for(let te=0;te<Y;te++){let J=d?z(_[te],se[te],ye):_[te];v?(D.copy(A.normals[H]).multiplyScalar(J.x),P.copy(A.binormals[H]).multiplyScalar(J.y),U.copy(w[H]).add(D).add(P),$(U.x,U.y,U.z)):$(J.x,J.y,f/u*H)}for(let H=g-1;H>=0;H--){let te=H/g,J=h*Math.cos(te*Math.PI/2),I=p*Math.sin(te*Math.PI/2)+x;for(let W=0,O=X.length;W<O;W++){let ee=z(X[W],ce[W],I);$(ee.x,ee.y,f+J)}for(let W=0,O=C.length;W<O;W++){let ee=C[W];ie=he[W];for(let fe=0,de=ee.length;fe<de;fe++){let T=z(ee[fe],ie[fe],I);v?$(T.x,T.y+w[u-1].y,w[u-1].x+J):$(T.x,T.y,f+J)}}}Q(),ne();function Q(){let H=s.length/3;if(d){let te=0,J=Y*te;for(let I=0;I<Ce;I++){let W=be[I];re(W[2]+J,W[1]+J,W[0]+J)}te=u+g*2,J=Y*te;for(let I=0;I<Ce;I++){let W=be[I];re(W[0]+J,W[1]+J,W[2]+J)}}else{for(let te=0;te<Ce;te++){let J=be[te];re(J[2],J[1],J[0])}for(let te=0;te<Ce;te++){let J=be[te];re(J[0]+Y*u,J[1]+Y*u,J[2]+Y*u)}}i.addGroup(H,s.length/3-H,0)}function ne(){let H=s.length/3,te=0;_e(X,te),te+=X.length;for(let J=0,I=C.length;J<I;J++){let W=C[J];_e(W,te),te+=W.length}i.addGroup(H,s.length/3-H,1)}function _e(H,te){let J=H.length;for(;--J>=0;){let I=J,W=J-1;W<0&&(W=H.length-1);for(let O=0,ee=u+g*2;O<ee;O++){let fe=Y*O,de=Y*(O+1),T=te+I+fe,y=te+W+fe,L=te+W+de,q=te+I+de;me(T,y,L,q)}}}function $(H,te,J){l.push(H),l.push(te),l.push(J)}function re(H,te,J){Le(H),Le(te),Le(J);let I=s.length/3,W=b.generateTopUV(i,s,I-3,I-2,I-1);E(W[0]),E(W[1]),E(W[2])}function me(H,te,J,I){Le(H),Le(te),Le(I),Le(te),Le(J),Le(I);let W=s.length/3,O=b.generateSideWallUV(i,s,W-6,W-3,W-2,W-1);E(O[0]),E(O[1]),E(O[3]),E(O[1]),E(O[2]),E(O[3])}function Le(H){s.push(l[H*3+0]),s.push(l[H*3+1]),s.push(l[H*3+2])}function E(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return y_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zf[s.type]().fromJSON(s)),new n(i,e.options)}},x_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-f),new Ae(d,1-p),new Ae(x,1-m)]:[new Ae(a,1-l),new Ae(u,1-f),new Ae(h,1-p),new Ae(g,1-m)]}};function y_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class n extends Wr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ii=class n extends Wr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zt=class n extends et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let b=m*d-o;for(let w=0;w<c;w++){let v=w*f-r;p.push(v,-b,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let w=b+c*m,v=b+c*(m+1),A=b+1+c*(m+1),P=b+1+c*m;h.push(w,v,P),h.push(v,A,P)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yr=class n extends et{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=e,d=(t-e)/s,h=new M,p=new Ae;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}f+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let b=m+g,w=b,v=b+i+1,A=b+i+2,P=b+1;a.push(w,v,P),a.push(v,A,P)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Aa=class n extends et{constructor(e=new Pi([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){let f=s.length/3,d=u.extractPoints(t),h=d.shape,p=d.holes;hi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];hi.isClockWise(b)===!0&&(p[g]=b.reverse())}let x=hi.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];h=h.concat(b)}for(let g=0,m=h.length;g<m;g++){let b=h[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,m=x.length;g<m;g++){let b=x[g],w=b[0]+f,v=b[1]+f,A=b[2]+f;i.push(w,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return v_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function v_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Li=class n extends et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new M,d=new M,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let b=[],w=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let P=A/t;f.x=-e*Math.cos(s+P*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+P*r)*Math.sin(o+w*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(P+v,1-w),b.push(c++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){let w=u[m][b+1],v=u[m][b],A=u[m+1][b],P=u[m+1][b+1];(m!==0||o>0)&&h.push(w,v,P),(m!==i-1||l<Math.PI)&&h.push(v,A,P)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ea=class n extends Wr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Di=class n extends et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,f=new M,d=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,g=h/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,b=(s+1)*h+p;o.push(x,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var St=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ca=class extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $t=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mc=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ql(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function __(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var zs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends zs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uf,endingEnd:Uf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ff:r=e,a=2*t-i;break;case Nf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ff:o=e,l=2*i-t;break;case Nf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let A=0;A!==a;++A)r[A]=m*o[u+A]+b*o[c+A]+w*o[l+A]+v*o[f+A];return r}},wc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}},Tc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case oc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&__(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,d=f-i,h=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=oc;var is=class extends On{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ea;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Ac.prototype.ValueTypeName="color";var Ec=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Ec.prototype.ValueTypeName="number";var Cc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ra=class extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends On{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ea;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Rc.prototype.ValueTypeName="vector";var nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Pc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Og=new Pc,Zr=class{constructor(e){this.manager=e!==void 0?e:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=new WeakMap,Ic=class extends Zr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=nc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Cr.get(o);f===void 0&&(f=[],Cr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Ur("img");function l(){u(),t&&t(this);let f=Cr.get(this)||[];for(let d=0;d<f.length;d++){let h=f[d];h.onLoad&&h.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),nc.remove(`image:${e}`);let d=Cr.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onError&&p.onError(f)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),nc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Pa=class extends Zr{constructor(e){super(e)}load(e,t,i,s){let r=new dn,o=new Ic(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},jr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ia=class extends jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},If=new at,Om=new M,zm=new M,Lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),t.position.copy(Om),zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zm),t.updateMatrixWorld(),If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(If)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vm=new at,Zo=new M,Lf=new M,Hf=class extends Lc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),Lf.copy(i.position),Lf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lf),i.updateMatrixWorld(),s.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Vm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vm,i.coordinateSystem,i.reversedDepth)}},La=class extends jr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Da=class extends ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wf=class extends Lc{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ua=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Wf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Dc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ud="\\[\\]\\.:\\/",M_=new RegExp("["+ud+"]","g"),hd="[^"+ud+"]",b_="[^"+ud.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",hd),w_=/(WCOD+)?/.source.replace("WCOD",b_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),E_=new RegExp("^"+S_+w_+T_+A_+"$"),C_=["material","materials","bones","map"],qf=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=E_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);C_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=qf;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DA=new Float32Array(1);var km=new at,Ui=class{constructor(e,t,i=0,s=1/0){this.ray=new Ds(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(e,t=!0,i=[]){return Xf(e,this,i,t),i.sort(Gm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xf(e[s],this,i,t);return i.sort(Gm),i}};function Gm(n,e){return n.distance-e.distance}function Xf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Xf(r[o],e,t,!0)}}var Hm=new M,ec=new M,Rr=new M,Pr=new M,Df=new M,R_=new M,P_=new M,Fa=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Hm.subVectors(e,this.start),ec.subVectors(this.end,this.start);let i=ec.dot(ec),r=ec.dot(Hm)/i;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=R_,i=P_){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Rr.subVectors(c,a),Pr.subVectors(u,l),Df.subVectors(a,l);let f=Rr.dot(Rr),d=Pr.dot(Pr),h=Pr.dot(Df);if(f<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(f<=s)r=0,o=h/d,o=$e(o,0,1);else{let p=Rr.dot(Df);if(d<=s)o=0,r=$e(-p/f,0,1);else{let x=Rr.dot(Pr),g=f*d-x*x;g!==0?r=$e((x*h-p*d)/g,0,1):r=0,o=(x*r+h)/d,o<0?(o=0,r=$e(-p/f,0,1)):o>1&&(o=1,r=$e((x-p)/f,0,1))}}return t.copy(a).add(Rr.multiplyScalar(r)),i.copy(l).add(Pr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function fd(n,e,t,i){let s=I_(i);switch(t){case td:return n*e;case Zc:return n*e/s.components*s.byteLength;case jc:return n*e/s.components*s.byteLength;case id:return n*e*2/s.components*s.byteLength;case Jc:return n*e*2/s.components*s.byteLength;case nd:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Kc:return n*e*4/s.components*s.byteLength;case za:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tu:return Math.max(n,16)*Math.max(e,8)/4;case $c:case eu:return Math.max(n,8)*Math.max(e,8)/2;case nu:case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vu:case _u:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wu:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I_(n){switch(n){case zn:case Kf:return{byteLength:1,components:1};case Kr:case $f:case gi:return{byteLength:2,components:1};case Xc:case Yc:return{byteLength:2,components:4};case rs:case qc:case ri:return{byteLength:4,components:1};case Qf:case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function l0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function N_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O_=`#ifdef USE_ALPHAHASH
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
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
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
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lM=`vec3 transformedNormal = objectNormal;
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
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,FM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XM=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
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
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Wb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,Kb=`uniform vec3 diffuse;
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
}`,$b=`#define LAMBERT
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
}`,Qb=`#define LAMBERT
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
}`,e1=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,n1=`#define NORMAL
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
}`,i1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,r1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,l1=`#define TOON
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
}`,c1=`#define TOON
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
}`,u1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,p1=`uniform float rotation;
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
}`,m1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:B_,alphahash_pars_fragment:O_,alphamap_fragment:z_,alphamap_pars_fragment:V_,alphatest_fragment:k_,alphatest_pars_fragment:G_,aomap_fragment:H_,aomap_pars_fragment:W_,batching_pars_vertex:q_,batching_vertex:X_,begin_vertex:Y_,beginnormal_vertex:Z_,bsdfs:j_,iridescence_fragment:J_,bumpmap_pars_fragment:K_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:eM,clipping_planes_vertex:tM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:sM,color_vertex:rM,common:oM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:hM,emissivemap_pars_fragment:fM,colorspace_fragment:dM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:RM,envmap_vertex:vM,fog_vertex:_M,fog_pars_vertex:MM,fog_fragment:bM,fog_pars_fragment:SM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:EM,lights_pars_begin:CM,lights_toon_fragment:PM,lights_toon_pars_fragment:IM,lights_phong_fragment:LM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:FM,lights_fragment_begin:NM,lights_fragment_maps:BM,lights_fragment_end:OM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:GM,map_fragment:HM,map_pars_fragment:WM,map_particle_fragment:qM,map_particle_pars_fragment:XM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:jM,morphcolor_vertex:JM,morphnormal_vertex:KM,morphtarget_pars_vertex:$M,morphtarget_vertex:QM,normal_fragment_begin:eb,normal_fragment_maps:tb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:sb,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:lb,iridescence_pars_fragment:cb,opaque_fragment:ub,packing:hb,premultiplied_alpha_fragment:fb,project_vertex:db,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:yb,shadowmap_pars_vertex:vb,shadowmap_vertex:_b,shadowmask_pars_fragment:Mb,skinbase_vertex:bb,skinning_pars_vertex:Sb,skinning_vertex:wb,skinnormal_vertex:Tb,specularmap_fragment:Ab,specularmap_pars_fragment:Eb,tonemapping_fragment:Cb,tonemapping_pars_fragment:Rb,transmission_fragment:Pb,transmission_pars_fragment:Ib,uv_pars_fragment:Lb,uv_pars_vertex:Db,uv_vertex:Ub,worldpos_vertex:Fb,background_vert:Nb,background_frag:Bb,backgroundCube_vert:Ob,backgroundCube_frag:zb,cube_vert:Vb,cube_frag:kb,depth_vert:Gb,depth_frag:Hb,distanceRGBA_vert:Wb,distanceRGBA_frag:qb,equirect_vert:Xb,equirect_frag:Yb,linedashed_vert:Zb,linedashed_frag:jb,meshbasic_vert:Jb,meshbasic_frag:Kb,meshlambert_vert:$b,meshlambert_frag:Qb,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:a1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:h1,shadow_vert:f1,shadow_frag:d1,sprite_vert:p1,sprite_frag:m1},De={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},xi={basic:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:pn([De.points,De.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:pn([De.common,De.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:pn([De.sprite,De.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:pn([De.common,De.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:pn([De.lights,De.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};xi.physical={uniforms:pn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Cu={r:0,b:0,g:0},Hs=new ln,g1=new at;function x1(n,e,t,i,s,r,o){let a=new Be(0),l=r===!0?0:1,c,u,f=null,d=0,h=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,A=p(w);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,v){let A=p(v);A&&(A.isCubeTexture||A.mapping===Ba)?(u===void 0&&(u=new Ne(new tt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Gs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hs.copy(v.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Hs)),u.material.toneMapped=ct.getTransfer(A.colorSpace)!==vt,(f!==A||d!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ne(new Zt(2,2),new cn({name:"BackgroundMaterial",uniforms:Gs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(Cu,ld(n)),i.buffers.color.setClear(Cu.r,Cu.g,Cu.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:b}}function y1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(_,C,N,F,G){let X=!1,z=f(F,N,C);r!==z&&(r=z,c(r.object)),X=h(_,F,N,G),X&&p(_,F,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(_,C,N,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function f(_,C,N){let F=N.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let X=G[C.id];X===void 0&&(X={},G[C.id]=X);let z=X[F];return z===void 0&&(z=d(l()),X[F]=z),z}function d(_){let C=[],N=[],F=[];for(let G=0;G<t;G++)C[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function h(_,C,N,F){let G=r.attributes,X=C.attributes,z=0,Y=N.getAttributes();for(let B in Y)if(Y[B].location>=0){let he=G[B],ie=X[B];if(ie===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),he===void 0||he.attribute!==ie||ie&&he.data!==ie.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function p(_,C,N,F){let G={},X=C.attributes,z=0,Y=N.getAttributes();for(let B in Y)if(Y[B].location>=0){let he=X[B];he===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));let ie={};ie.attribute=he,he&&he.data&&(ie.data=he.data),G[B]=ie,z++}r.attributes=G,r.attributesNum=z,r.index=F}function x(){let _=r.newAttributes;for(let C=0,N=_.length;C<N;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let N=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;N[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),G[_]!==C&&(n.vertexAttribDivisor(_,C),G[_]=C)}function b(){let _=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==_[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function w(_,C,N,F,G,X,z){z===!0?n.vertexAttribIPointer(_,C,N,G,X):n.vertexAttribPointer(_,C,N,F,G,X)}function v(_,C,N,F){x();let G=F.attributes,X=N.getAttributes(),z=C.defaultAttributeValues;for(let Y in X){let B=X[Y];if(B.location>=0){let ce=G[Y];if(ce===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){let he=ce.normalized,ie=ce.itemSize,se=e.get(ce);if(se===void 0)continue;let be=se.buffer,Ce=se.type,ye=se.bytesPerElement,Q=Ce===n.INT||Ce===n.UNSIGNED_INT||ce.gpuType===qc;if(ce.isInterleavedBufferAttribute){let ne=ce.data,_e=ne.stride,$=ce.offset;if(ne.isInstancedInterleavedBuffer){for(let re=0;re<B.locationSize;re++)m(B.location+re,ne.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<B.locationSize;re++)g(B.location+re);n.bindBuffer(n.ARRAY_BUFFER,be);for(let re=0;re<B.locationSize;re++)w(B.location+re,ie/B.locationSize,Ce,he,_e*ye,($+ie/B.locationSize*re)*ye,Q)}else{if(ce.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne,ce.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,ie/B.locationSize,Ce,he,ie*ye,ie/B.locationSize*ne*ye,Q)}}else if(z!==void 0){let he=z[Y];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(B.location,he);break;case 3:n.vertexAttrib3fv(B.location,he);break;case 4:n.vertexAttrib4fv(B.location,he);break;default:n.vertexAttrib1fv(B.location,he)}}}}b()}function A(){U();for(let _ in i){let C=i[_];for(let N in C){let F=C[N];for(let G in F)u(F[G].object),delete F[G];delete C[N]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let N in C){let F=C[N];for(let G in F)u(F[G].object),delete F[G];delete C[N]}delete i[_.id]}function D(_){for(let C in i){let N=i[C];if(N[_.id]===void 0)continue;let F=N[_.id];for(let G in F)u(F[G].object),delete F[G];delete N[_.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function v1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let p=0;p<f;p++)h+=u[p];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==En&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==zn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ri&&!U)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:A,maxSamples:P}}function M1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,w=b*4,v=m.clippingState||null;l.value=v,v=u(p,d,w,h);for(let A=0;A!==w;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=h;w!==x;++w,v+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function b1(n){let e=new WeakMap;function t(o,a){return a===Jr?o.mapping=Vs:a===Hc&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jr||a===Hc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var to=4,zg=[.125,.215,.35,.446,.526,.582],Xs=20,dd=new Da,Vg=new Be,pd=null,md=0,gd=0,xd=!1,qs=(1+Math.sqrt(5))/2,eo=1/qs,kg=[new M(-qs,eo,0),new M(qs,eo,0),new M(-eo,0,qs),new M(eo,0,qs),new M(0,qs,-eo),new M(0,qs,eo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],S1=new M,io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=S1}=r;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Ru(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:gi,format:En,colorSpace:Ls,depthBuffer:!1},s=Gg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(r)),this._blurMaterial=T1(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,i,s,r){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Vg),f.toneMapping=Ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new mt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Ne(new tt,x),m=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,m=!0):(x.color.copy(Vg),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let A=this._cubeSize;Ru(s,v*A,w>2?A:0,A,A),f.setRenderTarget(s),m&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Vs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ru(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kg[(s-r-1)%kg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Ne(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Xs-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Xs;g>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xs}`);let m=[],b=0;for(let D=0;D<Xs;++D){let U=D/x,S=Math.exp(-U*U/2);m.push(S),D===0?b+=S:D<g&&(b+=2*S)}for(let D=0;D<m.length;D++)m[D]=m[D]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let v=this._sizeLods[s],A=3*v*(s>w-to?s-w+to:0),P=4*(this._cubeSize-v);Ru(t,A,P,3*v,2*v),l.setRenderTarget(t),l.render(f,dd)}};function w1(n){let e=[],t=[],i=[],s=n,r=n-to+1+zg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-to?l=zg[o-n+to-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*h),w=new Float32Array(g*p*h),v=new Float32Array(m*p*h);for(let P=0;P<h;P++){let D=P%3*2/3-1,U=P>2?0:-1,S=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];b.set(S,x*p*P),w.set(d,g*p*P);let _=[P,P,P,P,P,P];v.set(_,m*p*P)}let A=new et;A.setAttribute("position",new bt(b,x)),A.setAttribute("uv",new bt(w,g)),A.setAttribute("faceIndex",new bt(v,m)),e.push(A),s>to&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gg(n,e,t){let i=new Tn(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ru(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function T1(n,e,t){let i=new Float32Array(Xs),s=new M(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ed(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Hg(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Wg(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ed(){return`

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
	`}function A1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jr||l===Hc,u=l===Vs||l===ks;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new io(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new io(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function E1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function C1(n,e,t,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,p=f.attributes.position,x=0;if(h!==null){let b=h.array;x=h.version;for(let w=0,v=b.length;w<v;w+=3){let A=b[w+0],P=b[w+1],D=b[w+2];d.push(A,P,P,D,D,A)}}else if(p!==void 0){let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let A=w+0,P=w+1,D=w+2;d.push(A,P,P,D,D,A)}}else return;let g=new(ad(d)?sa:Us)(d,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function R1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function f(d,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=h[b]*x[b];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function P1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function I1(n,e,t){let i=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let P=new Float32Array(v*A*4*f),D=new ia(P,v,A,f);D.type=ri,D.needsUpdate=!0;let U=w*4;for(let _=0;_<f;_++){let C=g[_],N=m[_],F=b[_],G=v*A*4*_;for(let X=0;X<C.count;X++){let z=X*U;h===!0&&(s.fromBufferAttribute(C,X),P[G+z+0]=s.x,P[G+z+1]=s.y,P[G+z+2]=s.z,P[G+z+3]=0),p===!0&&(s.fromBufferAttribute(N,X),P[G+z+4]=s.x,P[G+z+5]=s.y,P[G+z+6]=s.z,P[G+z+7]=0),x===!0&&(s.fromBufferAttribute(F,X),P[G+z+8]=s.x,P[G+z+9]=s.y,P[G+z+10]=s.z,P[G+z+11]=F.itemSize===4?s.w:1)}}d={count:f,texture:D,size:new Ae(v,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function L1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var c0=new dn,qg=new ma(1,1),u0=new ia,h0=new uc,f0=new oa,Xg=[],Yg=[],Zg=new Float32Array(16),jg=new Float32Array(9),Jg=new Float32Array(4);function so(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xg[s];if(r===void 0&&(r=new Float32Array(s),Xg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lu(n,e){let t=Yg[e];t===void 0&&(t=new Int32Array(e),Yg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function B1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Jg.set(i),n.uniformMatrix2fv(this.addr,!1,Jg),nn(t,i)}}function O1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;jg.set(i),n.uniformMatrix3fv(this.addr,!1,jg),nn(t,i)}}function z1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Zg.set(i),n.uniformMatrix4fv(this.addr,!1,Zg),nn(t,i)}}function V1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function W1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Z1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(qg.compareFunction=sd,r=qg):r=c0,t.setTexture2D(e||r,s)}function j1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||h0,s)}function J1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||f0,s)}function K1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||u0,s)}function $1(n){switch(n){case 5126:return D1;case 35664:return U1;case 35665:return F1;case 35666:return N1;case 35674:return B1;case 35675:return O1;case 35676:return z1;case 5124:case 35670:return V1;case 35667:case 35671:return k1;case 35668:case 35672:return G1;case 35669:case 35673:return H1;case 5125:return W1;case 36294:return q1;case 36295:return X1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return K1}}function Q1(n,e){n.uniform1fv(this.addr,e)}function eS(n,e){let t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function tS(n,e){let t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function nS(n,e){let t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function iS(n,e){let t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sS(n,e){let t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rS(n,e){let t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oS(n,e){n.uniform1iv(this.addr,e)}function aS(n,e){n.uniform2iv(this.addr,e)}function lS(n,e){n.uniform3iv(this.addr,e)}function cS(n,e){n.uniform4iv(this.addr,e)}function uS(n,e){n.uniform1uiv(this.addr,e)}function hS(n,e){n.uniform2uiv(this.addr,e)}function fS(n,e){n.uniform3uiv(this.addr,e)}function dS(n,e){n.uniform4uiv(this.addr,e)}function pS(n,e,t){let i=this.cache,s=e.length,r=Lu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||c0,r[o])}function mS(n,e,t){let i=this.cache,s=e.length,r=Lu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||h0,r[o])}function gS(n,e,t){let i=this.cache,s=e.length,r=Lu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||f0,r[o])}function xS(n,e,t){let i=this.cache,s=e.length,r=Lu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||u0,r[o])}function yS(n){switch(n){case 5126:return Q1;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return sS;case 35676:return rS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return xS}}var vd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$1(t.type)}},_d=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yS(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},yd=/(\w+)(\])?(\[|\.)?/g;function Kg(n,e){n.seq.push(e),n.map[e.id]=e}function vS(n,e,t){let i=n.name,s=i.length;for(yd.lastIndex=0;;){let r=yd.exec(i),o=yd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kg(t,c===void 0?new vd(a,n,e):new _d(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Md(a),Kg(t,f)),t=f}}}var no=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $g(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _S=37297,MS=0;function bS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Qg=new nt;function SS(n){ct._getMatrix(Qg,ct.workingColorSpace,n);let e=`mat3( ${Qg.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function e0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bS(n.getShaderSource(e),a)}else return r}function wS(n,e){let t=SS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TS(n,e){let t;switch(e){case dg:t="Linear";break;case pg:t="Reinhard";break;case mg:t="Cineon";break;case Gc:t="ACESFilmic";break;case xg:t="AgX";break;case yg:t="Neutral";break;case gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pu=new M;function AS(){ct.getLuminanceCoefficients(Pu);let n=Pu.x.toFixed(4),e=Pu.y.toFixed(4),t=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ES(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function CS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ha(n){return n!==""}function t0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(n){return n.replace(PS,LS)}var IS=new Map;function LS(n,e){let t=st[e];if(t===void 0){let i=IS.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(t)}var DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(n){return n.replace(DS,US)}function US(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function s0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function FS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Na?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function NS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case ks:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function OS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case hg:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function zS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function VS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=FS(t),c=NS(t),u=BS(t),f=OS(t),d=zS(t),h=ES(t),p=CS(r),x=s.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),m.length>0&&(m+=`
`)):(g=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),m=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?st.tonemapping_pars_fragment:"",t.toneMapping!==Ni?TS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,wS("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),o=bd(o),o=t0(o,t),o=n0(o,t),a=bd(a),a=t0(a,t),a=n0(a,t),o=i0(o),a=i0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+o,v=b+m+a,A=$g(s,s.VERTEX_SHADER,w),P=$g(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(C){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(P)||"",X=N.trim(),z=F.trim(),Y=G.trim(),B=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,P);else{let he=e0(s,A,"vertex"),ie=e0(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+he+`
`+ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||Y==="")&&(ce=!1);ce&&(C.diagnostics={runnable:B,programLog:X,vertexShader:{log:z,prefix:g},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(A),s.deleteShader(P),U=new no(s,x),S=RS(s,x)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,_S)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=P,this}var kS=0,Sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wd(e),t.set(e,i)),i}},wd=class{constructor(e){this.id=kS++,this.code=e,this.usedTimes=0}};function GS(n,e,t,i,s,r,o){let a=new Br,l=new Sd,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,_,C,N,F){let G=N.fog,X=F.geometry,z=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),B=Y&&Y.mapping===Ba?Y.image.height:null,ce=p[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=he!==void 0?he.length:0,se=0;X.morphAttributes.position!==void 0&&(se=1),X.morphAttributes.normal!==void 0&&(se=2),X.morphAttributes.color!==void 0&&(se=3);let be,Ce,ye,Q;if(ce){let dt=xi[ce];be=dt.vertexShader,Ce=dt.fragmentShader}else be=S.vertexShader,Ce=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);let ne=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),$=F.isInstancedMesh===!0,re=F.isBatchedMesh===!0,me=!!S.map,Le=!!S.matcap,E=!!Y,H=!!S.aoMap,te=!!S.lightMap,J=!!S.bumpMap,I=!!S.normalMap,W=!!S.displacementMap,O=!!S.emissiveMap,ee=!!S.metalnessMap,fe=!!S.roughnessMap,de=S.anisotropy>0,T=S.clearcoat>0,y=S.dispersion>0,L=S.iridescence>0,q=S.sheen>0,oe=S.transmission>0,Z=de&&!!S.anisotropyMap,ge=T&&!!S.clearcoatMap,pe=T&&!!S.clearcoatNormalMap,Me=T&&!!S.clearcoatRoughnessMap,ve=L&&!!S.iridescenceMap,ue=L&&!!S.iridescenceThicknessMap,Se=q&&!!S.sheenColorMap,Oe=q&&!!S.sheenRoughnessMap,we=!!S.specularMap,Re=!!S.specularColorMap,He=!!S.specularIntensityMap,k=oe&&!!S.transmissionMap,Ee=oe&&!!S.thicknessMap,Ie=!!S.gradientMap,Fe=!!S.alphaMap,Te=S.alphaTest>0,xe=!!S.alphaHash,Ge=!!S.extensions,Qe=Ni;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qe=n.toneMapping);let Ct={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:be,fragmentShader:Ce,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:re,batchingColor:re&&F._colorsTexture!==null,instancing:$,instancingColor:$&&F.instanceColor!==null,instancingMorph:$&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ls,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Le,envMap:E,envMapMode:E&&Y.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:te,bumpMap:J,normalMap:I,displacementMap:d&&W,emissiveMap:O,normalMapObjectSpace:I&&S.normalMapType===bg,normalMapTangentSpace:I&&S.normalMapType===Au,metalnessMap:ee,roughnessMap:fe,anisotropy:de,anisotropyMap:Z,clearcoat:T,clearcoatMap:ge,clearcoatNormalMap:pe,clearcoatRoughnessMap:Me,dispersion:y,iridescence:L,iridescenceMap:ve,iridescenceThicknessMap:ue,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Oe,specularMap:we,specularColorMap:Re,specularIntensityMap:He,transmission:oe,transmissionMap:k,thicknessMap:Ee,gradientMap:Ie,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:xe,combine:S.combine,mapUv:me&&x(S.map.channel),aoMapUv:H&&x(S.aoMap.channel),lightMapUv:te&&x(S.lightMap.channel),bumpMapUv:J&&x(S.bumpMap.channel),normalMapUv:I&&x(S.normalMap.channel),displacementMapUv:W&&x(S.displacementMap.channel),emissiveMapUv:O&&x(S.emissiveMap.channel),metalnessMapUv:ee&&x(S.metalnessMap.channel),roughnessMapUv:fe&&x(S.roughnessMap.channel),anisotropyMapUv:Z&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(S.sheenRoughnessMap.channel),specularMapUv:we&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:He&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:Ee&&x(S.thicknessMap.channel),alphaMapUv:Fe&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(I||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(me||Fe),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:O&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wt,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)_.push(C),_.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(_,S),w(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function b(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function w(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let _=p[S.type],C;if(_){let N=xi[_];C=Eu.clone(N.uniforms)}else C=S.uniforms;return C}function A(S,_){let C;for(let N=0,F=u.length;N<F;N++){let G=u[N];if(G.cacheKey===_){C=G,++C.usedTimes;break}}return C===void 0&&(C=new VS(n,_,S,r),u.push(C)),C}function P(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:U}}function HS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function r0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function o0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,h,p,x,g){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:x,group:g},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=x,m.group=g),e++,m}function a(f,d,h,p,x,g){let m=o(f,d,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(f,d,h,p,x,g){let m=o(f,d,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||WS),i.length>1&&i.sort(d||r0),s.length>1&&s.sort(d||r0)}function u(){for(let f=e,d=n.length;f<d;f++){let h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function qS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new o0,n.set(i,[o])):s>=r.length?(o=new o0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Be};break;case"SpotLight":t={position:new M,direction:new M,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function YS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ZS=0;function jS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JS(n){let e=new XS,t=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new at,o=new at;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,b=0,w=0,v=0,A=0,P=0,D=0;c.sort(jS);for(let S=0,_=c.length;S<_;S++){let C=c[S],N=C.color,F=C.intensity,G=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*F,f+=N.g*F,d+=N.b*F;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],F);D++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=C.shadow.matrix,b++}i.directional[h]=z,h++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(F),z.distance=G,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[x]=z;let Y=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,Y.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[x]=Y.matrix,C.castShadow){let B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=X,v++}x++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(N).multiplyScalar(F),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=z,g++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=C.shadow.matrix,w++}i.point[p]=z,p++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(F),z.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[m]=z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==A||U.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=A,U.numLightProbes=D,i.version=ZS++)}function l(c,u){let f=0,d=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let w=c[m];if(w.isDirectionalLight){let v=i.directional[f];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(w.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function a0(n){let e=new JS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new a0(n),e.set(s,[a])):r>=o.length?(a=new a0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`;function ew(n,e,t){let i=new Gr,s=new Ae,r=new Ae,o=new lt,a=new Mc({depthPacking:Mg}),l=new bc,c={},u=t.maxTextureSize,f={[si]:un,[un]:si,[Wt]:Wt},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:$S,fragmentShader:QS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let m=this.type;this.render=function(P,D,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==mi&&this.type===mi,G=m===mi&&this.type!==mi;for(let X=0,z=P.length;X<z;X++){let Y=P[X],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let ce=B.getFrameExtents();if(s.multiply(ce),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,B.mapSize.y=r.y)),B.map===null||F===!0||G===!0){let ie=this.type!==mi?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new Tn(s.x,s.y,ie),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let he=B.getViewportCount();for(let ie=0;ie<he;ie++){let se=B.getViewport(ie);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),N.viewport(o),B.updateMatrices(Y,ie),i=B.getFrustum(),v(D,U,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===mi&&b(B,U),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,_,C)};function b(P,D){let U=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Tn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,U,d,x,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,U,h,x,null)}function w(P,D,U,S){let _=null,C=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)_=C;else if(_=U.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=_.uuid,F=D.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let X=G[F];X===void 0&&(X=_.clone(),G[F]=X,D.addEventListener("dispose",A)),_=X}if(_.visible=D.visible,_.wireframe=D.wireframe,S===mi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:f[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=n.properties.get(_);N.light=U}return _}function v(P,D,U,S,_){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===mi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let F=e.update(P),G=P.material;if(Array.isArray(G)){let X=F.groups;for(let z=0,Y=X.length;z<Y;z++){let B=X[z],ce=G[B.materialIndex];if(ce&&ce.visible){let he=w(P,ce,S,_);P.onBeforeShadow(n,P,D,U,F,he,B),n.renderBufferDirect(U,null,F,he,P,B),P.onAfterShadow(n,P,D,U,F,he,B)}}}else if(G.visible){let X=w(P,G,S,_);P.onBeforeShadow(n,P,D,U,F,X,null),n.renderBufferDirect(U,null,F,X,P,null),P.onAfterShadow(n,P,D,U,F,X,null)}}let N=P.children;for(let F=0,G=N.length;F<G;F++)v(N[F],D,U,S,_)}function A(P){P.target.removeEventListener("dispose",A);for(let U in c){let S=c[U],_=P.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var tw={[Uc]:Fc,[Nc]:zc,[Bc]:Vc,[Is]:Oc,[Fc]:Uc,[zc]:Nc,[Vc]:Bc,[Oc]:Is};function nw(n,e){function t(){let k=!1,Ee=new lt,Ie=null,Fe=new lt(0,0,0,0);return{setMask:function(Te){Ie!==Te&&!k&&(n.colorMask(Te,Te,Te,Te),Ie=Te)},setLocked:function(Te){k=Te},setClear:function(Te,xe,Ge,Qe,Ct){Ct===!0&&(Te*=Qe,xe*=Qe,Ge*=Qe),Ee.set(Te,xe,Ge,Qe),Fe.equals(Ee)===!1&&(n.clearColor(Te,xe,Ge,Qe),Fe.copy(Ee))},reset:function(){k=!1,Ie=null,Fe.set(-1,0,0,0)}}}function i(){let k=!1,Ee=!1,Ie=null,Fe=null,Te=null;return{setReversed:function(xe){if(Ee!==xe){let Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ee=xe;let Qe=Te;Te=null,this.setClear(Qe)}},getReversed:function(){return Ee},setTest:function(xe){xe?ne(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(xe){Ie!==xe&&!k&&(n.depthMask(xe),Ie=xe)},setFunc:function(xe){if(Ee&&(xe=tw[xe]),Fe!==xe){switch(xe){case Uc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case Bc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case zc:n.depthFunc(n.GREATER);break;case Vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=xe}},setLocked:function(xe){k=xe},setClear:function(xe){Te!==xe&&(Ee&&(xe=1-xe),n.clearDepth(xe),Te=xe)},reset:function(){k=!1,Ie=null,Fe=null,Te=null,Ee=!1}}}function s(){let k=!1,Ee=null,Ie=null,Fe=null,Te=null,xe=null,Ge=null,Qe=null,Ct=null;return{setTest:function(dt){k||(dt?ne(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(dt){Ee!==dt&&!k&&(n.stencilMask(dt),Ee=dt)},setFunc:function(dt,bi,ui){(Ie!==dt||Fe!==bi||Te!==ui)&&(n.stencilFunc(dt,bi,ui),Ie=dt,Fe=bi,Te=ui)},setOp:function(dt,bi,ui){(xe!==dt||Ge!==bi||Qe!==ui)&&(n.stencilOp(dt,bi,ui),xe=dt,Ge=bi,Qe=ui)},setLocked:function(dt){k=dt},setClear:function(dt){Ct!==dt&&(n.clearStencil(dt),Ct=dt)},reset:function(){k=!1,Ee=null,Ie=null,Fe=null,Te=null,xe=null,Ge=null,Qe=null,Ct=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,b=null,w=null,v=null,A=null,P=null,D=new Be(0,0,0),U=0,S=!1,_=null,C=null,N=null,F=null,G=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=Y>=2);let ce=null,he={},ie=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),be=new lt().fromArray(ie),Ce=new lt().fromArray(se);function ye(k,Ee,Ie,Fe){let Te=new Uint8Array(4),xe=n.createTexture();n.bindTexture(k,xe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ie;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Ee+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return xe}let Q={};Q[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Is),J(!1),I(Yf),ne(n.CULL_FACE),H(Fi);function ne(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function _e(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function $(k,Ee){return f[k]!==Ee?(n.bindFramebuffer(k,Ee),f[k]=Ee,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function re(k,Ee){let Ie=h,Fe=!1;if(k){Ie=d.get(Ee),Ie===void 0&&(Ie=[],d.set(Ee,Ie));let Te=k.textures;if(Ie.length!==Te.length||Ie[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ge=Te.length;xe<Ge;xe++)Ie[xe]=n.COLOR_ATTACHMENT0+xe;Ie.length=Te.length,Fe=!0}}else Ie[0]!==n.BACK&&(Ie[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(Ie)}function me(k){return p!==k?(n.useProgram(k),p=k,!0):!1}let Le={[ts]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[jm]:n.FUNC_REVERSE_SUBTRACT};Le[Jm]=n.MIN,Le[Km]=n.MAX;let E={[$m]:n.ZERO,[Qm]:n.ONE,[eg]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[og]:n.SRC_ALPHA_SATURATE,[sg]:n.DST_COLOR,[ng]:n.DST_ALPHA,[tg]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[rg]:n.ONE_MINUS_DST_COLOR,[ig]:n.ONE_MINUS_DST_ALPHA,[ag]:n.CONSTANT_COLOR,[lg]:n.ONE_MINUS_CONSTANT_COLOR,[cg]:n.CONSTANT_ALPHA,[ug]:n.ONE_MINUS_CONSTANT_ALPHA};function H(k,Ee,Ie,Fe,Te,xe,Ge,Qe,Ct,dt){if(k===Fi){x===!0&&(_e(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),k!==Ym){if(k!==g||dt!==S){if((m!==ts||v!==ts)&&(n.blendEquation(n.FUNC_ADD),m=ts,v=ts),dt)switch(k){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFunc(n.ONE,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,w=null,A=null,P=null,D.set(0,0,0),U=0,g=k,S=dt}return}Te=Te||Ee,xe=xe||Ie,Ge=Ge||Fe,(Ee!==m||Te!==v)&&(n.blendEquationSeparate(Le[Ee],Le[Te]),m=Ee,v=Te),(Ie!==b||Fe!==w||xe!==A||Ge!==P)&&(n.blendFuncSeparate(E[Ie],E[Fe],E[xe],E[Ge]),b=Ie,w=Fe,A=xe,P=Ge),(Qe.equals(D)===!1||Ct!==U)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Ct),D.copy(Qe),U=Ct),g=k,S=!1}function te(k,Ee){k.side===Wt?_e(n.CULL_FACE):ne(n.CULL_FACE);let Ie=k.side===un;Ee&&(Ie=!Ie),J(Ie),k.blending===Ps&&k.transparent===!1?H(Fi):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Fe=k.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),O(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function I(k){k!==Wm?(ne(n.CULL_FACE),k!==C&&(k===Yf?n.cullFace(n.BACK):k===qm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),C=k}function W(k){k!==N&&(z&&n.lineWidth(k),N=k)}function O(k,Ee,Ie){k?(ne(n.POLYGON_OFFSET_FILL),(F!==Ee||G!==Ie)&&(n.polygonOffset(Ee,Ie),F=Ee,G=Ie)):_e(n.POLYGON_OFFSET_FILL)}function ee(k){k?ne(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function fe(k){k===void 0&&(k=n.TEXTURE0+X-1),ce!==k&&(n.activeTexture(k),ce=k)}function de(k,Ee,Ie){Ie===void 0&&(ce===null?Ie=n.TEXTURE0+X-1:Ie=ce);let Fe=he[Ie];Fe===void 0&&(Fe={type:void 0,texture:void 0},he[Ie]=Fe),(Fe.type!==k||Fe.texture!==Ee)&&(ce!==Ie&&(n.activeTexture(Ie),ce=Ie),n.bindTexture(k,Ee||Q[k]),Fe.type=k,Fe.texture=Ee)}function T(){let k=he[ce];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(k){be.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Oe(k){Ce.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function we(k,Ee){let Ie=c.get(Ee);Ie===void 0&&(Ie=new WeakMap,c.set(Ee,Ie));let Fe=Ie.get(k);Fe===void 0&&(Fe=n.getUniformBlockIndex(Ee,k.name),Ie.set(k,Fe))}function Re(k,Ee){let Fe=c.get(Ee).get(k);l.get(Ee)!==Fe&&(n.uniformBlockBinding(Ee,Fe,k.__bindingPointIndex),l.set(Ee,Fe))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,he={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,b=null,w=null,v=null,A=null,P=null,D=new Be(0,0,0),U=0,S=!1,_=null,C=null,N=null,F=null,G=null,be.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:_e,bindFramebuffer:$,drawBuffers:re,useProgram:me,setBlending:H,setMaterial:te,setFlipSided:J,setCullFace:I,setLineWidth:W,setPolygonOffset:O,setScissorTest:ee,activeTexture:fe,bindTexture:de,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ve,texImage3D:ue,updateUBOMapping:we,uniformBlockBinding:Re,texStorage2D:pe,texStorage3D:Me,texSubImage2D:q,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:ge,scissor:Se,viewport:Oe,reset:He}}function iw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,y){return h?new OffscreenCanvas(T,y):Ur("canvas")}function x(T,y,L){let q=1,oe=de(T);if((oe.width>L||oe.height>L)&&(q=L/Math.max(oe.width,oe.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(q*oe.width),ge=Math.floor(q*oe.height);f===void 0&&(f=p(Z,ge));let pe=y?p(Z,ge):f;return pe.width=Z,pe.height=ge,pe.getContext("2d").drawImage(T,0,0,Z,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+ge+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,y,L,q,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),y===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),y===n.RGBA){let ge=oe?ta:ct.getTransfer(q);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=ge===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(T,y){let L;return T?y===null||y===rs||y===$r?L=n.DEPTH24_STENCIL8:y===ri?L=n.DEPTH32F_STENCIL8:y===Kr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rs||y===$r?L=n.DEPTH_COMPONENT24:y===ri?L=n.DEPTH_COMPONENT32F:y===Kr&&(L=n.DEPTH_COMPONENT16),L}function A(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function P(T){let y=T.target;y.removeEventListener("dispose",P),U(y),y.isVideoTexture&&u.delete(y)}function D(T){let y=T.target;y.removeEventListener("dispose",D),_(y)}function U(T){let y=i.get(T);if(y.__webglInit===void 0)return;let L=T.source,q=d.get(L);if(q){let oe=q[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(T),Object.keys(q).length===0&&d.delete(L)}i.remove(T)}function S(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let L=T.source,q=d.get(L);delete q[y.__cacheKey],o.memory.textures--}function _(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let oe=0;oe<y.__webglFramebuffer[q].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[q][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=T.textures;for(let q=0,oe=L.length;q<oe;q++){let Z=i.get(L[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[q])}i.remove(T)}let C=0;function N(){C=0}function F(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function G(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){let L=i.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(L,T,y);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function z(T,y){let L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Q(L,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function Y(T,y){let L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Q(L,T,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function B(T,y){let L=i.get(T);if(T.version>0&&L.__version!==T.version){ne(L,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let ce={[di]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},he={[on]:n.NEAREST,[vg]:n.NEAREST_MIPMAP_NEAREST,[Oa]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Wc]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},ie={[Sg]:n.NEVER,[Rg]:n.ALWAYS,[wg]:n.LESS,[sd]:n.LEQUAL,[Tg]:n.EQUAL,[Cg]:n.GEQUAL,[Ag]:n.GREATER,[Eg]:n.NOTEQUAL};function se(T,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===Wc||y.magFilter===Oa||y.magFilter===An||y.minFilter===an||y.minFilter===Wc||y.minFilter===Oa||y.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ce[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ce[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ce[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Oa&&y.minFilter!==An||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function be(T,y){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",P));let q=y.source,oe=d.get(q);oe===void 0&&(oe={},d.set(q,oe));let Z=G(y);if(Z!==T.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),oe[Z].usedTimes++;let ge=oe[T.__cacheKey];ge!==void 0&&(oe[T.__cacheKey].usedTimes--,ge.usedTimes===0&&S(y)),T.__cacheKey=Z,T.__webglTexture=oe[Z].texture}return L}function Ce(T,y,L){return Math.floor(Math.floor(T/L)/y)}function ye(T,y,L,q){let Z=T.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,q,y.data);else{Z.sort((ue,Se)=>ue.start-Se.start);let ge=0;for(let ue=1;ue<Z.length;ue++){let Se=Z[ge],Oe=Z[ue],we=Se.start+Se.count,Re=Ce(Oe.start,y.width,4),He=Ce(Se.start,y.width,4);Oe.start<=we+1&&Re===He&&Ce(Oe.start+Oe.count-1,y.width,4)===Re?Se.count=Math.max(Se.count,Oe.start+Oe.count-Se.start):(++ge,Z[ge]=Oe)}Z.length=ge+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Se=Z.length;ue<Se;ue++){let Oe=Z[ue],we=Math.floor(Oe.start/4),Re=Math.ceil(Oe.count/4),He=we%y.width,k=Math.floor(we/y.width),Ee=Re,Ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,He,k,Ee,Ie,L,q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function Q(T,y,L){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let oe=be(T,y),Z=y.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+L);let ge=i.get(Z);if(Z.version!==ge.__version||oe===!0){t.activeTexture(n.TEXTURE0+L);let pe=ct.getPrimaries(ct.workingColorSpace),Me=y.colorSpace===Bi?null:ct.getPrimaries(y.colorSpace),ve=y.colorSpace===Bi||pe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ue=x(y.image,!1,s.maxTextureSize);ue=fe(y,ue);let Se=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),we=w(y.internalFormat,Se,Oe,y.colorSpace,y.isVideoTexture);se(q,y);let Re,He=y.mipmaps,k=y.isVideoTexture!==!0,Ee=ge.__version===void 0||oe===!0,Ie=Z.dataReady,Fe=A(y,ue);if(y.isDepthTexture)we=v(y.format===Qr,y.type),Ee&&(k?t.texStorage2D(n.TEXTURE_2D,1,we,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,Se,Oe,null));else if(y.isDataTexture)if(He.length>0){k&&Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,we,He[0].width,He[0].height);for(let Te=0,xe=He.length;Te<xe;Te++)Re=He[Te],k?Ie&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Re.width,Re.height,Se,Oe,Re.data):t.texImage2D(n.TEXTURE_2D,Te,we,Re.width,Re.height,0,Se,Oe,Re.data);y.generateMipmaps=!1}else k?(Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,we,ue.width,ue.height),Ie&&ye(y,ue,Se,Oe)):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,Se,Oe,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,we,He[0].width,He[0].height,ue.depth);for(let Te=0,xe=He.length;Te<xe;Te++)if(Re=He[Te],y.format!==En)if(Se!==null)if(k){if(Ie)if(y.layerUpdates.size>0){let Ge=fd(Re.width,Re.height,y.format,y.type);for(let Qe of y.layerUpdates){let Ct=Re.data.subarray(Qe*Ge/Re.data.BYTES_PER_ELEMENT,(Qe+1)*Ge/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,Qe,Re.width,Re.height,1,Se,Ct)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,Re.width,Re.height,ue.depth,Se,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,we,Re.width,Re.height,ue.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,Re.width,Re.height,ue.depth,Se,Oe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,we,Re.width,Re.height,ue.depth,0,Se,Oe,Re.data)}else{k&&Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,we,He[0].width,He[0].height);for(let Te=0,xe=He.length;Te<xe;Te++)Re=He[Te],y.format!==En?Se!==null?k?Ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,Re.width,Re.height,Se,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,we,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ie&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Re.width,Re.height,Se,Oe,Re.data):t.texImage2D(n.TEXTURE_2D,Te,we,Re.width,Re.height,0,Se,Oe,Re.data)}else if(y.isDataArrayTexture)if(k){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,we,ue.width,ue.height,ue.depth),Ie)if(y.layerUpdates.size>0){let Te=fd(ue.width,ue.height,y.format,y.type);for(let xe of y.layerUpdates){let Ge=ue.data.subarray(xe*Te/ue.data.BYTES_PER_ELEMENT,(xe+1)*Te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,ue.width,ue.height,1,Se,Oe,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,Oe,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ue.width,ue.height,ue.depth,0,Se,Oe,ue.data);else if(y.isData3DTexture)k?(Ee&&t.texStorage3D(n.TEXTURE_3D,Fe,we,ue.width,ue.height,ue.depth),Ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,Oe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,we,ue.width,ue.height,ue.depth,0,Se,Oe,ue.data);else if(y.isFramebufferTexture){if(Ee)if(k)t.texStorage2D(n.TEXTURE_2D,Fe,we,ue.width,ue.height);else{let Te=ue.width,xe=ue.height;for(let Ge=0;Ge<Fe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,we,Te,xe,0,Se,Oe,null),Te>>=1,xe>>=1}}else if(He.length>0){if(k&&Ee){let Te=de(He[0]);t.texStorage2D(n.TEXTURE_2D,Fe,we,Te.width,Te.height)}for(let Te=0,xe=He.length;Te<xe;Te++)Re=He[Te],k?Ie&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Se,Oe,Re):t.texImage2D(n.TEXTURE_2D,Te,we,Se,Oe,Re);y.generateMipmaps=!1}else if(k){if(Ee){let Te=de(ue);t.texStorage2D(n.TEXTURE_2D,Fe,we,Te.width,Te.height)}Ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Oe,ue)}else t.texImage2D(n.TEXTURE_2D,0,we,Se,Oe,ue);g(y)&&m(q),ge.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ne(T,y,L){if(y.image.length!==6)return;let q=be(T,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);let Z=i.get(oe);if(oe.version!==Z.__version||q===!0){t.activeTexture(n.TEXTURE0+L);let ge=ct.getPrimaries(ct.workingColorSpace),pe=y.colorSpace===Bi?null:ct.getPrimaries(y.colorSpace),Me=y.colorSpace===Bi||ge===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ve=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let xe=0;xe<6;xe++)!ve&&!ue?Se[xe]=x(y.image[xe],!0,s.maxCubemapSize):Se[xe]=ue?y.image[xe].image:y.image[xe],Se[xe]=fe(y,Se[xe]);let Oe=Se[0],we=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),He=w(y.internalFormat,we,Re,y.colorSpace),k=y.isVideoTexture!==!0,Ee=Z.__version===void 0||q===!0,Ie=oe.dataReady,Fe=A(y,Oe);se(n.TEXTURE_CUBE_MAP,y);let Te;if(ve){k&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,He,Oe.width,Oe.height);for(let xe=0;xe<6;xe++){Te=Se[xe].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){let Qe=Te[Ge];y.format!==En?we!==null?k?Ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,0,0,Qe.width,Qe.height,we,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,He,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,0,0,Qe.width,Qe.height,we,Re,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,He,Qe.width,Qe.height,0,we,Re,Qe.data)}}}else{if(Te=y.mipmaps,k&&Ee){Te.length>0&&Fe++;let xe=de(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,He,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ue){k?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Se[xe].width,Se[xe].height,we,Re,Se[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,He,Se[xe].width,Se[xe].height,0,we,Re,Se[xe].data);for(let Ge=0;Ge<Te.length;Ge++){let Ct=Te[Ge].image[xe].image;k?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,0,0,Ct.width,Ct.height,we,Re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,He,Ct.width,Ct.height,0,we,Re,Ct.data)}}else{k?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we,Re,Se[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,He,we,Re,Se[xe]);for(let Ge=0;Ge<Te.length;Ge++){let Qe=Te[Ge];k?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,0,0,we,Re,Qe.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,He,we,Re,Qe.image[xe])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),Z.__version=oe.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _e(T,y,L,q,oe,Z){let ge=r.convert(L.format,L.colorSpace),pe=r.convert(L.type),Me=w(L.internalFormat,ge,pe,L.colorSpace),ve=i.get(y),ue=i.get(L);if(ue.__renderTarget=y,!ve.__hasExternalTextures){let Se=Math.max(1,y.width>>Z),Oe=Math.max(1,y.height>>Z);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,Me,Se,Oe,y.depth,0,ge,pe,null):t.texImage2D(oe,Z,Me,Se,Oe,0,ge,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,oe,ue.__webglTexture,0,W(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,oe,ue.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(T,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let q=y.depthTexture,oe=q&&q.isDepthTexture?q.type:null,Z=v(y.stencilBuffer,oe),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=W(y);O(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Z,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,T)}else{let q=y.textures;for(let oe=0;oe<q.length;oe++){let Z=q[oe],ge=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),Me=w(Z.internalFormat,ge,pe,Z.colorSpace),ve=W(y);L&&O(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,y.width,y.height):O(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,Me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let oe=q.__webglTexture,Z=W(y);if(y.depthTexture.format===Lr)O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(y.depthTexture.format===Qr)O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function me(T){let y=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",oe)};q.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?re(y.__webglFramebuffer[0],T):re(y.__webglFramebuffer,T)}else if(L){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),$(y.__webglDepthbuffer[q],T,!1);else{let oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),$(y.__webglDepthbuffer,T,!1);else{let oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,y,L){let q=i.get(T);y!==void 0&&_e(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&me(T)}function E(T){let y=T.texture,L=i.get(T),q=i.get(y);T.addEventListener("dispose",D);let oe=T.textures,Z=T.isWebGLCubeRenderTarget===!0,ge=oe.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let Me=0;Me<y.mipmaps.length;Me++)L.__webglFramebuffer[pe][Me]=n.createFramebuffer()}else L.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)L.__webglFramebuffer[pe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ge)for(let pe=0,Me=oe.length;pe<Me;pe++){let ve=i.get(oe[pe]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&O(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Me=oe[pe];L.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);let ve=r.convert(Me.format,Me.colorSpace),ue=r.convert(Me.type),Se=w(Me.internalFormat,ve,ue,Me.colorSpace,T.isXRRenderTarget===!0),Oe=W(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),$(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),se(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)_e(L.__webglFramebuffer[pe][Me],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else _e(L.__webglFramebuffer[pe],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let pe=0,Me=oe.length;pe<Me;pe++){let ve=oe[pe],ue=i.get(ve),Se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ue.__webglTexture),se(Se,ve),_e(L.__webglFramebuffer,T,ve,n.COLOR_ATTACHMENT0+pe,Se,0),g(ve)&&m(Se)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,q.__webglTexture),se(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)_e(L.__webglFramebuffer[Me],T,y,n.COLOR_ATTACHMENT0,pe,Me);else _e(L.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,pe,0);g(y)&&m(pe),t.unbindTexture()}T.depthBuffer&&me(T)}function H(T){let y=T.textures;for(let L=0,q=y.length;L<q;L++){let oe=y[L];if(g(oe)){let Z=b(T),ge=i.get(oe).__webglTexture;t.bindTexture(Z,ge),m(Z),t.unbindTexture()}}}let te=[],J=[];function I(T){if(T.samples>0){if(O(T)===!1){let y=T.textures,L=T.width,q=T.height,oe=n.COLOR_BUFFER_BIT,Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(T),pe=y.length>1;if(pe)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);let ue=i.get(y[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,q,0,0,L,q,oe,n.NEAREST),l===!0&&(te.length=0,J.length=0,te.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(te.push(Z),J.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);let ue=i.get(y[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function W(T){return Math.min(s.maxSamples,T.samples)}function O(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(T){let y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function fe(T,y){let L=T.colorSpace,q=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Ls&&L!==Bi&&(ct.getTransfer(L)===vt?(q!==En||oe!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Le,this.setupRenderTarget=E,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=O}function sw(n,e){function t(i,s=Bi){let r,o=ct.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kf)return n.BYTE;if(i===$f)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===nd)return n.RGB;if(i===En)return n.RGBA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===id)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===za||i===Va||i===ka||i===Ga)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Qc||i===eu||i===tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nu||i===iu)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===su)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===au)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===du)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vu||i===_u||i===Mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vu)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===Su||i===wu||i===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ow=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:rw,fragmentShader:ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new Td,m={},b=t.getContextAttributes(),w=null,v=null,A=[],P=[],D=new Ae,U=null,S=new Gt;S.viewport=new lt;let _=new Gt;_.viewport=new lt;let C=[S,_],N=new Dc,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Or,A[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Or,A[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Or,A[Q]=ne),ne.getHandSpace()};function X(Q){let ne=P.indexOf(Q.inputSource);if(ne===-1)return;let _e=A[ne];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,c||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<A.length;Q++){let ne=P[Q];ne!==null&&(P[Q]=null,A[Q].disconnect(ne))}F=null,G=null,g.reset();for(let Q in m)delete m[Q];e.setRenderTarget(w),h=null,d=null,f=null,s=null,v=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,$=null,re=null;b.depth&&(re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Qr:Lr,$=b.stencil?$r:rs);let me={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Tn(d.textureWidth,d.textureHeight,{format:En,type:zn,depthTexture:new ma(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Tn(h.framebufferWidth,h.framebufferHeight,{format:En,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(Q){for(let ne=0;ne<Q.removed.length;ne++){let _e=Q.removed[ne],$=P.indexOf(_e);$>=0&&(P[$]=null,A[$].disconnect(_e))}for(let ne=0;ne<Q.added.length;ne++){let _e=Q.added[ne],$=P.indexOf(_e);if($===-1){for(let me=0;me<A.length;me++)if(me>=P.length){P.push(_e),$=me;break}else if(P[me]===null){P[me]=_e,$=me;break}if($===-1)break}let re=A[$];re&&re.connect(_e)}}let B=new M,ce=new M;function he(Q,ne,_e){B.setFromMatrixPosition(ne.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);let $=B.distanceTo(ce),re=ne.projectionMatrix.elements,me=_e.projectionMatrix.elements,Le=re[14]/(re[10]-1),E=re[14]/(re[10]+1),H=(re[9]+1)/re[5],te=(re[9]-1)/re[5],J=(re[8]-1)/re[0],I=(me[8]+1)/me[0],W=Le*J,O=Le*I,ee=$/(-J+I),fe=ee*-J;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(fe),Q.translateZ(ee),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),re[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let de=Le+ee,T=E+ee,y=W-fe,L=O+($-fe),q=H*E/T*de,oe=te*E/T*de;Q.projectionMatrix.makePerspective(y,L,q,oe,de,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ie(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,_e=Q.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),N.near=_.near=S.near=ne,N.far=_.far=S.far=_e,(F!==N.near||G!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,G=N.far),N.layers.mask=Q.layers.mask|6,S.layers.mask=N.layers.mask&3,_.layers.mask=N.layers.mask&5;let $=Q.parent,re=N.cameras;ie(N,$);for(let me=0;me<re.length;me++)ie(re[me],$);re.length===2?he(N,S,_):N.projectionMatrix.copy(S.projectionMatrix),se(Q,N,$)};function se(Q,ne,_e){_e===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Dr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Q){return m[Q]};let be=null;function Ce(Q,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let $=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,$=!0);for(let E=0;E<_e.length;E++){let H=_e[E],te=null;if(h!==null)te=h.getViewport(H);else{let I=f.getViewSubImage(d,H);te=I.viewport,E===0&&(e.setRenderTargetTextures(v,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(v))}let J=C[E];J===void 0&&(J=new Gt,J.layers.enable(E),J.viewport=new lt,C[E]=J),J.matrix.fromArray(H.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(H.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),E===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),$===!0&&N.cameras.push(J)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let E=f.getDepthInformation(_e[0]);E&&E.isValid&&E.texture&&g.init(E,s.renderState)}if(re&&re.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let E=0;E<_e.length;E++){let H=_e[E].camera;if(H){let te=m[H];te||(te=new ga,m[H]=te);let J=f.getCameraImage(H);te.sourceTexture=J}}}}for(let _e=0;_e<A.length;_e++){let $=P[_e],re=A[_e];$!==null&&re!==void 0&&re.update($,ne,c||o)}be&&be(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let ye=new l0;ye.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){be=Q},this.dispose=function(){}}},Ws=new ln,aw=new at;function lw(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ld(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,Ws.copy(v),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),g.envMapRotation.value.setFromMatrix4(aw.makeRotationFromEuler(Ws)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let v=w.program;i.uniformBlockBinding(b,v)}function c(b,w){let v=s[b.id];v===void 0&&(p(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",g));let A=w.program;i.updateUBOMapping(b,A);let P=e.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function u(b){let w=f();b.__bindingPointIndex=w;let v=n.createBuffer(),A=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,D=v.length;P<D;P++){let U=Array.isArray(v[P])?v[P]:[v[P]];for(let S=0,_=U.length;S<_;S++){let C=U[S];if(h(C,P,S,A)===!0){let N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],G=0;for(let X=0;X<F.length;X++){let z=F[X],Y=x(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+G,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,v,A){let P=b.value,D=w+"_"+v;if(A[D]===void 0)return typeof P=="number"||typeof P=="boolean"?A[D]=P:A[D]=P.clone(),!0;{let U=A[D];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return A[D]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function p(b){let w=b.uniforms,v=0,A=16;for(let D=0,U=w.length;D<U;D++){let S=Array.isArray(w[D])?w[D]:[w[D]];for(let _=0,C=S.length;_<C;_++){let N=S[_],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,X=F.length;G<X;G++){let z=F[G],Y=x(z),B=v%A,ce=B%Y.boundary,he=B+ce;v+=ce,he!==0&&A-he<Y.storage&&(v+=A-he),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}let P=v%A;return P>0&&(v+=A-P),b.__size=v,b.__cache={},this}function x(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){let w=b.target;w.removeEventListener("dispose",g);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Iu=class{constructor(e={}){let{canvas:t=Pg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=yt;let P=0,D=0,U=null,S=-1,_=null,C=new lt,N=new lt,F=null,G=new Be(0),X=0,z=t.width,Y=t.height,B=1,ce=null,he=null,ie=new lt(0,0,z,Y),se=new lt(0,0,z,Y),be=!1,Ce=new Gr,ye=!1,Q=!1,ne=new at,_e=new M,$=new lt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Le(){return U===null?B:1}let E=i;function H(R,j){return t.getContext(R,j)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),E===null){let j="webgl2";if(E=H(j,R),E===null)throw H(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,J,I,W,O,ee,fe,de,T,y,L,q,oe,Z,ge,pe,Me,ve,ue,Se,Oe,we,Re,He;function k(){te=new E1(E),te.init(),we=new sw(E,te),J=new _1(E,te,e,we),I=new nw(E,te),J.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),W=new P1(E),O=new HS,ee=new iw(E,te,I,O,J,we,W),fe=new b1(v),de=new A1(v),T=new N_(E),Re=new y1(E,T),y=new C1(E,T,W,Re),L=new L1(E,y,T,W),ue=new I1(E,J,ee),pe=new M1(O),q=new GS(v,fe,de,te,J,Re,pe),oe=new lw(v,O),Z=new qS,ge=new KS(te),ve=new x1(v,fe,de,I,L,h,l),Me=new ew(v,L,J),He=new cw(E,W,J,I),Se=new v1(E,te,W),Oe=new R1(E,te,W),W.programs=q.programs,v.capabilities=J,v.extensions=te,v.properties=O,v.renderLists=Z,v.shadowMap=Me,v.state=I,v.info=W}k();let Ee=new Ad(v,E);this.xr=Ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(z,Y,!1))},this.getSize=function(R){return R.set(z,Y)},this.setSize=function(R,j,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Y=j,t.width=Math.floor(R*B),t.height=Math.floor(j*B),ae===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(z*B,Y*B).floor()},this.setDrawingBufferSize=function(R,j,ae){z=R,Y=j,B=ae,t.width=Math.floor(R*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,j,ae,le){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,j,ae,le),I.viewport(C.copy(ie).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,j,ae,le){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,j,ae,le),I.scissor(N.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){I.setScissorTest(be=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ae=!0){let le=0;if(R){let K=!1;if(U!==null){let Pe=U.texture.format;K=Pe===Kc||Pe===Jc||Pe===jc}if(K){let Pe=U.texture.type,Ue=Pe===zn||Pe===rs||Pe===Kr||Pe===$r||Pe===Xc||Pe===Yc,Ve=ve.getClearColor(),ze=ve.getClearAlpha(),Ze=Ve.r,Je=Ve.g,We=Ve.b;Ue?(p[0]=Ze,p[1]=Je,p[2]=We,p[3]=ze,E.clearBufferuiv(E.COLOR,0,p)):(x[0]=Ze,x[1]=Je,x[2]=We,x[3]=ze,E.clearBufferiv(E.COLOR,0,x))}else le|=E.COLOR_BUFFER_BIT}j&&(le|=E.DEPTH_BUFFER_BIT),ae&&(le|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ve.dispose(),Z.dispose(),ge.dispose(),O.dispose(),fe.dispose(),de.dispose(),L.dispose(),Re.dispose(),He.dispose(),q.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ui),Ee.removeEventListener("sessionend",em),Ss.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=W.autoReset,j=Me.enabled,ae=Me.autoUpdate,le=Me.needsUpdate,K=Me.type;k(),W.autoReset=R,Me.enabled=j,Me.autoUpdate=ae,Me.needsUpdate=le,Me.type=K}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){let j=R.target;j.removeEventListener("dispose",xe),Ge(j)}function Ge(R){Qe(R),O.remove(R)}function Qe(R){let j=O.get(R).programs;j!==void 0&&(j.forEach(function(ae){q.releaseProgram(ae)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ae,le,K,Pe){j===null&&(j=re);let Ue=K.isMesh&&K.matrixWorld.determinant()<0,Ve=iv(R,j,ae,le,K);I.setMaterial(le,Ue);let ze=ae.index,Ze=1;if(le.wireframe===!0){if(ze=y.getWireframeAttribute(ae),ze===void 0)return;Ze=2}let Je=ae.drawRange,We=ae.attributes.position,ot=Je.start*Ze,Mt=(Je.start+Je.count)*Ze;Pe!==null&&(ot=Math.max(ot,Pe.start*Ze),Mt=Math.min(Mt,(Pe.start+Pe.count)*Ze)),ze!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,ze.count)):We!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,We.count));let kt=Mt-ot;if(kt<0||kt===1/0)return;Re.setup(K,le,Ve,ae,ze);let Pt,Tt=Se;if(ze!==null&&(Pt=T.get(ze),Tt=Oe,Tt.setIndex(Pt)),K.isMesh)le.wireframe===!0?(I.setLineWidth(le.wireframeLinewidth*Le()),Tt.setMode(E.LINES)):Tt.setMode(E.TRIANGLES);else if(K.isLine){let Xe=le.linewidth;Xe===void 0&&(Xe=1),I.setLineWidth(Xe*Le()),K.isLineSegments?Tt.setMode(E.LINES):K.isLineLoop?Tt.setMode(E.LINE_LOOP):Tt.setMode(E.LINE_STRIP)}else K.isPoints?Tt.setMode(E.POINTS):K.isSprite&&Tt.setMode(E.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Xe=K._multiDrawStarts,Nt=K._multiDrawCounts,ut=K._multiDrawCount,Dn=ze?T.get(ze).bytesPerElement:1,ur=O.get(le).currentProgram.getUniforms();for(let Un=0;Un<ut;Un++)ur.setValue(E,"_gl_DrawID",Un),Tt.render(Xe[Un]/Dn,Nt[Un])}else if(K.isInstancedMesh)Tt.renderInstances(ot,kt,K.count);else if(ae.isInstancedBufferGeometry){let Xe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Nt=Math.min(ae.instanceCount,Xe);Tt.renderInstances(ot,kt,Nt)}else Tt.render(ot,kt)};function Ct(R,j,ae){R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,wl(R,j,ae),R.side=si,R.needsUpdate=!0,wl(R,j,ae),R.side=Wt):wl(R,j,ae)}this.compile=function(R,j,ae=null){ae===null&&(ae=R),m=ge.get(ae),m.init(j),w.push(m),ae.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),R!==ae&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let le=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){let Ve=Pe[Ue];Ct(Ve,ae,K),le.add(Ve)}else Ct(Pe,ae,K),le.add(Pe)}),m=w.pop(),le},this.compileAsync=function(R,j,ae=null){let le=this.compile(R,j,ae);return new Promise(K=>{function Pe(){if(le.forEach(function(Ue){O.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){K(R);return}setTimeout(Pe,10)}te.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let dt=null;function bi(R){dt&&dt(R)}function ui(){Ss.stop()}function em(){Ss.start()}let Ss=new l0;Ss.setAnimationLoop(bi),typeof self<"u"&&Ss.setContext(self),this.setAnimationLoop=function(R){dt=R,Ee.setAnimationLoop(R),R===null?Ss.stop():Ss.start()},Ee.addEventListener("sessionstart",ui),Ee.addEventListener("sessionend",em),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(j),j=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,j,U),m=ge.get(R,w.length),m.init(j),w.push(m),ne.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ce.setFromProjectionMatrix(ne,ii,j.reversedDepth),Q=this.localClippingEnabled,ye=pe.init(this.clippingPlanes,Q),g=Z.get(R,b.length),g.init(),b.push(g),Ee.enabled===!0&&Ee.isPresenting===!0){let Pe=v.xr.getDepthSensingMesh();Pe!==null&&nf(Pe,j,-1/0,v.sortObjects)}nf(R,j,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,he),me=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,me&&ve.addToRenderList(g,R),this.info.render.frame++,ye===!0&&pe.beginShadows();let ae=m.state.shadowsArray;Me.render(ae,R,j),ye===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=g.opaque,K=g.transmissive;if(m.setupLights(),j.isArrayCamera){let Pe=j.cameras;if(K.length>0)for(let Ue=0,Ve=Pe.length;Ue<Ve;Ue++){let ze=Pe[Ue];nm(le,K,R,ze)}me&&ve.render(R);for(let Ue=0,Ve=Pe.length;Ue<Ve;Ue++){let ze=Pe[Ue];tm(g,R,ze,ze.viewport)}}else K.length>0&&nm(le,K,R,j),me&&ve.render(R),tm(g,R,j);U!==null&&D===0&&(ee.updateMultisampleRenderTarget(U),ee.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(v,R,j),Re.resetDefaultState(),S=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],ye===!0&&pe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function nf(R,j,ae,le){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){le&&$.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);let Ue=L.update(R),Ve=R.material;Ve.visible&&g.push(R,Ue,Ve,ae,$.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){let Ue=L.update(R),Ve=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),$.copy(Ue.boundingSphere.center)),$.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Ve)){let ze=Ue.groups;for(let Ze=0,Je=ze.length;Ze<Je;Ze++){let We=ze[Ze],ot=Ve[We.materialIndex];ot&&ot.visible&&g.push(R,Ue,ot,ae,$.z,We)}}else Ve.visible&&g.push(R,Ue,Ve,ae,$.z,null)}}let Pe=R.children;for(let Ue=0,Ve=Pe.length;Ue<Ve;Ue++)nf(Pe[Ue],j,ae,le)}function tm(R,j,ae,le){let K=R.opaque,Pe=R.transmissive,Ue=R.transparent;m.setupLightsView(ae),ye===!0&&pe.setGlobalState(v.clippingPlanes,ae),le&&I.viewport(C.copy(le)),K.length>0&&Sl(K,j,ae),Pe.length>0&&Sl(Pe,j,ae),Ue.length>0&&Sl(Ue,j,ae),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function nm(R,j,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[le.id]===void 0&&(m.state.transmissionRenderTarget[le.id]=new Tn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?gi:zn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let Pe=m.state.transmissionRenderTarget[le.id],Ue=le.viewport||C;Pe.setSize(Ue.z*v.transmissionResolutionScale,Ue.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),ze=v.getActiveCubeFace(),Ze=v.getActiveMipmapLevel();v.setRenderTarget(Pe),v.getClearColor(G),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),me&&ve.render(ae);let Je=v.toneMapping;v.toneMapping=Ni;let We=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),m.setupLightsView(le),ye===!0&&pe.setGlobalState(v.clippingPlanes,le),Sl(R,ae,le),ee.updateMultisampleRenderTarget(Pe),ee.updateRenderTargetMipmap(Pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Mt=0,kt=j.length;Mt<kt;Mt++){let Pt=j[Mt],Tt=Pt.object,Xe=Pt.geometry,Nt=Pt.material,ut=Pt.group;if(Nt.side===Wt&&Tt.layers.test(le.layers)){let Dn=Nt.side;Nt.side=un,Nt.needsUpdate=!0,im(Tt,ae,le,Xe,Nt,ut),Nt.side=Dn,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(ee.updateMultisampleRenderTarget(Pe),ee.updateRenderTargetMipmap(Pe))}v.setRenderTarget(Ve,ze,Ze),v.setClearColor(G,X),We!==void 0&&(le.viewport=We),v.toneMapping=Je}function Sl(R,j,ae){let le=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Pe=R.length;K<Pe;K++){let Ue=R[K],Ve=Ue.object,ze=Ue.geometry,Ze=Ue.group,Je=Ue.material;Je.allowOverride===!0&&le!==null&&(Je=le),Ve.layers.test(ae.layers)&&im(Ve,j,ae,ze,Je,Ze)}}function im(R,j,ae,le,K,Pe){R.onBeforeRender(v,j,ae,le,K,Pe),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(v,j,ae,le,R,Pe),K.transparent===!0&&K.side===Wt&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,v.renderBufferDirect(ae,j,le,K,R,Pe),K.side=si,K.needsUpdate=!0,v.renderBufferDirect(ae,j,le,K,R,Pe),K.side=Wt):v.renderBufferDirect(ae,j,le,K,R,Pe),R.onAfterRender(v,j,ae,le,K,Pe)}function wl(R,j,ae){j.isScene!==!0&&(j=re);let le=O.get(R),K=m.state.lights,Pe=m.state.shadowsArray,Ue=K.state.version,Ve=q.getParameters(R,K.state,Pe,j,ae),ze=q.getProgramCacheKey(Ve),Ze=le.programs;le.environment=R.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(R.isMeshStandardMaterial?de:fe).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",xe),Ze=new Map,le.programs=Ze);let Je=Ze.get(ze);if(Je!==void 0){if(le.currentProgram===Je&&le.lightsStateVersion===Ue)return rm(R,Ve),Je}else Ve.uniforms=q.getUniforms(R),R.onBeforeCompile(Ve,v),Je=q.acquireProgram(Ve,ze),Ze.set(ze,Je),le.uniforms=Ve.uniforms;let We=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=pe.uniform),rm(R,Ve),le.needsLights=rv(R),le.lightsStateVersion=Ue,le.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),le.currentProgram=Je,le.uniformsList=null,Je}function sm(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=no.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function rm(R,j){let ae=O.get(R);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function iv(R,j,ae,le,K){j.isScene!==!0&&(j=re),ee.resetTextureUnits();let Pe=j.fog,Ue=le.isMeshStandardMaterial?j.environment:null,Ve=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ls,ze=(le.isMeshStandardMaterial?de:fe).get(le.envMap||Ue),Ze=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Je=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),We=!!ae.morphAttributes.position,ot=!!ae.morphAttributes.normal,Mt=!!ae.morphAttributes.color,kt=Ni;le.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(kt=v.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Tt=Pt!==void 0?Pt.length:0,Xe=O.get(le),Nt=m.state.lights;if(ye===!0&&(Q===!0||R!==_)){let vn=R===_&&le.id===S;pe.setState(le,R,vn)}let ut=!1;le.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==Ve||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==ze||le.fog===!0&&Xe.fog!==Pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==pe.numPlanes||Xe.numIntersection!==pe.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==Je||Xe.morphTargets!==We||Xe.morphNormals!==ot||Xe.morphColors!==Mt||Xe.toneMapping!==kt||Xe.morphTargetsCount!==Tt)&&(ut=!0):(ut=!0,Xe.__version=le.version);let Dn=Xe.currentProgram;ut===!0&&(Dn=wl(le,j,K));let ur=!1,Un=!1,Bo=!1,Bt=Dn.getUniforms(),kn=Xe.uniforms;if(I.useProgram(Dn.program)&&(ur=!0,Un=!0,Bo=!0),le.id!==S&&(S=le.id,Un=!0),ur||_!==R){I.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(E,"projectionMatrix",R.projectionMatrix),Bt.setValue(E,"viewMatrix",R.matrixWorldInverse);let bn=Bt.map.cameraPosition;bn!==void 0&&bn.setValue(E,_e.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&Bt.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,Un=!0,Bo=!0)}if(K.isSkinnedMesh){Bt.setOptional(E,K,"bindMatrix"),Bt.setOptional(E,K,"bindMatrixInverse");let vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Bt.setValue(E,"boneTexture",vn.boneTexture,ee))}K.isBatchedMesh&&(Bt.setOptional(E,K,"batchingTexture"),Bt.setValue(E,"batchingTexture",K._matricesTexture,ee),Bt.setOptional(E,K,"batchingIdTexture"),Bt.setValue(E,"batchingIdTexture",K._indirectTexture,ee),Bt.setOptional(E,K,"batchingColorTexture"),K._colorsTexture!==null&&Bt.setValue(E,"batchingColorTexture",K._colorsTexture,ee));let Gn=ae.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ue.update(K,ae,Dn),(Un||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Bt.setValue(E,"receiveShadow",K.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&j.environment!==null&&(kn.envMapIntensity.value=j.environmentIntensity),Un&&(Bt.setValue(E,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&sv(kn,Bo),Pe&&le.fog===!0&&oe.refreshFogUniforms(kn,Pe),oe.refreshMaterialUniforms(kn,le,B,Y,m.state.transmissionRenderTarget[R.id]),no.upload(E,sm(Xe),kn,ee)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(no.upload(E,sm(Xe),kn,ee),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(E,"center",K.center),Bt.setValue(E,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(E,"normalMatrix",K.normalMatrix),Bt.setValue(E,"modelMatrix",K.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let vn=le.uniformsGroups;for(let bn=0,sf=vn.length;bn<sf;bn++){let ws=vn[bn];He.update(ws,Dn),He.bind(ws,Dn)}}return Dn}function sv(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function rv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,j,ae){let le=O.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),O.get(R.texture).__webglTexture=j,O.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let ae=O.get(R);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};let ov=E.createFramebuffer();this.setRenderTarget=function(R,j=0,ae=0){U=R,P=j,D=ae;let le=!0,K=null,Pe=!1,Ue=!1;if(R){let ze=O.get(R);if(ze.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(E.FRAMEBUFFER,null),le=!1;else if(ze.__webglFramebuffer===void 0)ee.setupRenderTarget(R);else if(ze.__hasExternalTextures)ee.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let We=R.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&O.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(R)}}let Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ue=!0);let Je=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?K=Je[j][ae]:K=Je[j],Pe=!0):R.samples>0&&ee.useMultisampledRTT(R)===!1?K=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[ae]:K=Je,C.copy(R.viewport),N.copy(R.scissor),F=R.scissorTest}else C.copy(ie).multiplyScalar(B).floor(),N.copy(se).multiplyScalar(B).floor(),F=be;if(ae!==0&&(K=ov),I.bindFramebuffer(E.FRAMEBUFFER,K)&&le&&I.drawBuffers(R,K),I.viewport(C),I.scissor(N),I.setScissorTest(F),Pe){let ze=O.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ae)}else if(Ue){let ze=j;for(let Ze=0;Ze<R.textures.length;Ze++){let Je=O.get(R.textures[Ze]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,ae,ze)}}else if(R!==null&&ae!==0){let ze=O.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ze.__webglTexture,ae)}S=-1},this.readRenderTargetPixels=function(R,j,ae,le,K,Pe,Ue,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){I.bindFramebuffer(E.FRAMEBUFFER,ze);try{let Ze=R.textures[Ve],Je=Ze.format,We=Ze.type;if(!J.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-le&&ae>=0&&ae<=R.height-K&&(R.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ve),E.readPixels(j,ae,le,K,we.convert(Je),we.convert(We),Pe))}finally{let Ze=U!==null?O.get(U).__webglFramebuffer:null;I.bindFramebuffer(E.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,j,ae,le,K,Pe,Ue,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(j>=0&&j<=R.width-le&&ae>=0&&ae<=R.height-K){I.bindFramebuffer(E.FRAMEBUFFER,ze);let Ze=R.textures[Ve],Je=Ze.format,We=Ze.type;if(!J.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.bufferData(E.PIXEL_PACK_BUFFER,Pe.byteLength,E.STREAM_READ),R.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ve),E.readPixels(j,ae,le,K,we.convert(Je),we.convert(We),0);let Mt=U!==null?O.get(U).__webglFramebuffer:null;I.bindFramebuffer(E.FRAMEBUFFER,Mt);let kt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ig(E,kt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Pe),E.deleteBuffer(ot),E.deleteSync(kt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ae=0){let le=Math.pow(2,-ae),K=Math.floor(R.image.width*le),Pe=Math.floor(R.image.height*le),Ue=j!==null?j.x:0,Ve=j!==null?j.y:0;ee.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,ae,0,0,Ue,Ve,K,Pe),I.unbindTexture()};let av=E.createFramebuffer(),lv=E.createFramebuffer();this.copyTextureToTexture=function(R,j,ae=null,le=null,K=0,Pe=null){Pe===null&&(K!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=K,K=0):Pe=0);let Ue,Ve,ze,Ze,Je,We,ot,Mt,kt,Pt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,Je=ae.min.y,We=ae.isBox3?ae.min.z:0;else{let Gn=Math.pow(2,-K);Ue=Math.floor(Pt.width*Gn),Ve=Math.floor(Pt.height*Gn),R.isDataArrayTexture?ze=Pt.depth:R.isData3DTexture?ze=Math.floor(Pt.depth*Gn):ze=1,Ze=0,Je=0,We=0}le!==null?(ot=le.x,Mt=le.y,kt=le.z):(ot=0,Mt=0,kt=0);let Tt=we.convert(j.format),Xe=we.convert(j.type),Nt;j.isData3DTexture?(ee.setTexture3D(j,0),Nt=E.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ee.setTexture2DArray(j,0),Nt=E.TEXTURE_2D_ARRAY):(ee.setTexture2D(j,0),Nt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,j.unpackAlignment);let ut=E.getParameter(E.UNPACK_ROW_LENGTH),Dn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ur=E.getParameter(E.UNPACK_SKIP_PIXELS),Un=E.getParameter(E.UNPACK_SKIP_ROWS),Bo=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Pt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Pt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ze),E.pixelStorei(E.UNPACK_SKIP_ROWS,Je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,We);let Bt=R.isDataArrayTexture||R.isData3DTexture,kn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let Gn=O.get(R),vn=O.get(j),bn=O.get(Gn.__renderTarget),sf=O.get(vn.__renderTarget);I.bindFramebuffer(E.READ_FRAMEBUFFER,bn.__webglFramebuffer),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,sf.__webglFramebuffer);for(let ws=0;ws<ze;ws++)Bt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,O.get(R).__webglTexture,K,We+ws),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,O.get(j).__webglTexture,Pe,kt+ws)),E.blitFramebuffer(Ze,Je,Ue,Ve,ot,Mt,Ue,Ve,E.DEPTH_BUFFER_BIT,E.NEAREST);I.bindFramebuffer(E.READ_FRAMEBUFFER,null),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||O.has(R)){let Gn=O.get(R),vn=O.get(j);I.bindFramebuffer(E.READ_FRAMEBUFFER,av),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,lv);for(let bn=0;bn<ze;bn++)Bt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Gn.__webglTexture,K,We+bn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Gn.__webglTexture,K),kn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,vn.__webglTexture,Pe,kt+bn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,vn.__webglTexture,Pe),K!==0?E.blitFramebuffer(Ze,Je,Ue,Ve,ot,Mt,Ue,Ve,E.COLOR_BUFFER_BIT,E.NEAREST):kn?E.copyTexSubImage3D(Nt,Pe,ot,Mt,kt+bn,Ze,Je,Ue,Ve):E.copyTexSubImage2D(Nt,Pe,ot,Mt,Ze,Je,Ue,Ve);I.bindFramebuffer(E.READ_FRAMEBUFFER,null),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else kn?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Nt,Pe,ot,Mt,kt,Ue,Ve,ze,Tt,Xe,Pt.data):j.isCompressedArrayTexture?E.compressedTexSubImage3D(Nt,Pe,ot,Mt,kt,Ue,Ve,ze,Tt,Pt.data):E.texSubImage3D(Nt,Pe,ot,Mt,kt,Ue,Ve,ze,Tt,Xe,Pt):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Pe,ot,Mt,Ue,Ve,Tt,Xe,Pt.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Pe,ot,Mt,Pt.width,Pt.height,Tt,Pt.data):E.texSubImage2D(E.TEXTURE_2D,Pe,ot,Mt,Ue,Ve,Tt,Xe,Pt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ut),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Dn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ur),E.pixelStorei(E.UNPACK_SKIP_ROWS,Un),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Bo),Pe===0&&j.generateMipmaps&&E.generateMipmap(Nt),I.unbindTexture()},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&ee.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ee.setTextureCube(R,0):R.isData3DTexture?ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ee.setTexture2DArray(R,0):ee.setTexture2D(R,0),I.unbindTexture()},this.resetState=function(){P=0,D=0,U=null,I.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Wa=class n extends Ne{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;let i=this,s=t.color!==void 0?new Be(t.color):new Be(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,f=new M,d=new M,h=new M,p=new at,x=new M(0,0,-1),g=new lt,m=new M,b=new M,w=new lt,v=new at,A=this.camera,P=new Tn(r,o,{samples:c,type:gi}),D=new cn({name:l.name!==void 0?l.name:"unspecified",uniforms:Eu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=P.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=v,this.material=D,this.onBeforeRender=function(U,S,_){if(d.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(p),m.subVectors(d,h),m.dot(f)>0===!0&&this.forceUpdate===!1)return;m.reflect(f).negate(),m.add(d),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),b.subVectors(d,x),b.reflect(f).negate(),b.add(d),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(f),A.lookAt(b),A.far=_.far,A.updateMatrixWorld(),A.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=A.projectionMatrix;w.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],w.z=-1,w.w=(1+N.elements[10])/N.elements[14],g.multiplyScalar(2/g.dot(w)),N.elements[2]=g.x,N.elements[6]=g.y,N.elements[10]=g.z+1-a,N.elements[14]=g.w,i.visible=!1;let F=U.getRenderTarget(),G=U.xr.enabled,X=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(P),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,A),U.xr.enabled=G,U.shadowMap.autoUpdate=X,U.setRenderTarget(F);let z=_.viewport;z!==void 0&&U.state.viewport(z),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),i.material.dispose()}}};Wa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Du=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function p0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function mn(n,e,t,i=0,s=0){return p0(n,new Dt(1,i),e,t,s)}function Cd(n,e,t,i=0){return p0(n,new Ii(1),e,t,i)}function uw(n,e){let t=new et;return t.setAttribute("position",new ke(e.flat(),3)),{tone:n,geometry:t}}function d0(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return uw(n,i)}function hw(){let n=[mn("fur",[0,.012,.011],[.154,.161,.132],1),mn("fur",[0,-.065,.008],[.128,.079,.108]),mn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),mn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),d0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),mn("skin",[0,-.061,-.133],[.102,.066,.065],1),mn("skinShade",[0,-.097,-.14],[.076,.031,.047]),mn("skin",[0,.015,-.15],[.041,.056,.038]),mn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(mn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),mn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),Cd("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),mn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),mn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),mn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),mn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),mn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),mn("ink",[e*.047,.031,-.183],[.011,.012,.006]),Cd("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),Cd("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(d0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function fw(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new et;return s.setAttribute("position",new bt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var dw=fw(hw());function Uu(n=0){let e=new $t({flatShading:!0}),t=new $t({flatShading:!0}),i=new $t({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Be("#212128"),ivory:new Be("#fff1ce")},o=-1;function a({colors:u,ranges:f}){for(let{tone:d,start:h,end:p}of f){let{r:x,g,b:m}=r[d];for(let b=h;b<p;b++)u.setXYZ(b,x,g,m)}u.needsUpdate=!0}function l(u){let f=Number.isInteger(u)&&u>=0&&u<Du.length?u:0;if(f===o)return;o=f;let d=Du[o];for(let[h,p]of Object.entries(d))(r[h]??=new Be).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let f=u.geometry.clone(),d=new bt(new Float32Array(f.getAttribute("position").count*3),3);f.setAttribute("color",d);let h={colors:d,ranges:u.ranges};return s.push(h),a(h),new Ne(f,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new pt;return u.add(c(dw)),u}}}var qa=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],pw=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],mw=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],m0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Fu=qa.length-1,gw=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],xw=[-.57,.57,1,.61,-.61,-1],yw=[1,1,-.04,-.91,-.91,-.04];function Nu(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(S=0,_=0,C=0){let N=r.length/3;return r.push(S*s,_,C),N}function c(S,_,C){i?o.push(S,C,_):o.push(S,_,C)}function u(S,_,C,N){c(S,_,C),c(S,C,N)}function f(S,_){for(let C=0;C<S.length;C++){let N=(C+1)%S.length;u(S[N],S[C],_[C],_[N])}}function d(S,_){for(let C=0;C<S.length;C++)c(_,S[(C+1)%S.length],S[C])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=qa.map(([S,_,C,N],F)=>{let G=F===0||F===Fu,X=S*.67,z=-.024+(_+.024)*.69;return{top:l(S,C,_),middle:l(S*1.08,(C+N)/2,G?_:-.025+(_+.025)*1.04),bottom:l(S,N,_),innerTop:l(X,pw[F],z),innerBottom:l(X,mw[F],z)}});function g(S){let _=x[S],C=x[(S+1)%x.length];return[_.top,C.top,C.middle,C.bottom,_.bottom,_.middle]}let m=new Set(m0.map(({edge:S})=>S));m.add(Fu);for(let S=0;S<x.length;S++){let _=x[S],C=x[(S+1)%x.length];c(h,_.innerTop,C.innerTop),c(p,C.innerBottom,_.innerBottom),u(_.innerTop,_.top,C.top,C.innerTop),u(C.innerBottom,C.bottom,_.bottom,_.innerBottom),m.has(S)||(u(C.top,_.top,_.middle,C.middle),u(C.middle,_.middle,_.bottom,C.bottom))}let b=g(Fu);t||d(b,l(0,0,qa[Fu][1]));let w=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:S,length:_,splay:C}of m0){let[N,F,G,X]=qa[S],[z,Y,B,ce]=qa[S+1],he=z-N,ie=Y-F,se=-ie+he*C,be=he+ie*C,Ce=Math.hypot(se,be),ye=Math.hypot(he,ie)/2,Q=(G+B-X-ce)/4,ne=[],_e=g(S);for(let[re,me,Le]of gw){let E=[l(),l(),l(),l(),l(),l()];f(_e,E),ne.push({ring:E,distance:re*_,width:me*ye,height:Le*Q}),_e=E}let $=l();d(_e,$),a.push({x:(N+z)/2,y:(G+B+X+ce)/4,z:(F+Y)/2,forwardX:se/Ce,forwardZ:be/Ce,rows:ne,tip:$,length:_,pressure:-1})}let v=new et,A=new ke(r,3).setUsage(Zn);v.setAttribute("position",A),v.setIndex(o),v.boundingSphere=new Wn(new M(0,-.018,-.052),.12),v.boundingBox=new rn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let P=!0;function D(S,_=!0){let C=!1;for(let N=0;N<a.length;N++){let F=a[N],G=S?.[N],X=Number.isFinite(G)?qe.clamp(G,0,1):0;if(X===F.pressure)continue;F.pressure=X,C=!0;let{forwardX:z,forwardZ:Y,length:B,rows:ce,tip:he}=F,ie=F.x,se=F.z,be=F.y,Ce=0,ye=0;for(let{ring:_e,distance:$,width:re,height:me}of ce){let Le=$/B,E=qe.smoothstep(Le,0,.57),H=qe.smoothstep(Le,.38,1),te=(.17+X*.83)*E+(.14+X*.76)*H,J=(te+Ce)/2,I=$-ye,W=Math.cos(J)*I;ie+=z*W,be-=Math.sin(J)*I,se+=Y*W;for(let O=0;O<_e.length;O++){let ee=xw[O]*re,fe=yw[O]*me,de=fe*Math.sin(te);A.setXYZ(_e[O],s*(ie+Y*ee+z*de),be+fe*Math.cos(te),se-z*ee+Y*de)}Ce=te,ye=$}let Q=B-ye,ne=Q*Math.cos(Ce);A.setXYZ(he,s*(ie+z*ne),be-Q*Math.sin(Ce),se+Y*ne)}C&&(A.needsUpdate=!0,P=!0),_&&P&&(v.computeVertexNormals(),P=!1)}D(),v.getAttribute("normal").setUsage(Zn);let U=new Ne(v,e);return U.castShadow=!0,{mesh:U,pose:D,wristIndices:w}}var os=12,Rd=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],vw=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],g0=Rd.flatMap(([n,e,t])=>Array.from({length:os},(i,s)=>{let r=(s-.5)*Math.PI*2/os;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Bu(n,e){let t=g0.length,i=[],s=(Y,B,ce,he,ie)=>Y.push(B,ce,he,B,he,ie);function r(Y,B,ce=!1){for(let he=1;he<B.length-1;he++)ce?Y.push(B[0],B[he+1],B[he]):Y.push(B[0],B[he],B[he+1])}let o=(Y,B)=>Y*os+(B+os)%os;for(let Y=0;Y<Rd.length-1;Y++)for(let B=0;B<os;B++)(Y===2||Y===3)&&(B===0||B===6)||s(i,o(Y,B),o(Y+1,B),o(Y+1,B+1),o(Y,B+1));r(i,Array.from({length:os},(Y,B)=>o(0,B))),r(i,Array.from({length:os},(Y,B)=>o(Rd.length-1,B)),!0);let a=t,l=e.map(({geometry:Y,wristIndices:B},ce)=>{let he=ce===0?6:0,ie=[o(4,he),o(4,he+1),o(3,he+1),o(2,he+1),o(2,he),o(3,he)],se=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],be=se.at(-1),Ce=new Array(Y.attributes.position.count);B.forEach((ne,_e)=>{Ce[ne]=be[_e]});for(let ne=0;ne<Ce.length;ne++)Ce[ne]??=a++;let ye=[];for(let ne=0;ne<Y.index.count;ne++)ye.push(Ce[Y.index.getX(ne)]);for(let ne=0;ne<se.length-1;ne++)for(let _e=0;_e<6;_e++){let $=(_e+1)%6;s(i,se[ne][_e],se[ne][$],se[ne+1][$],se[ne+1][_e])}let Q=[];return r(Q,be),{socket:ie,rings:se,wrist:be,wristIndices:B,remap:Ce,skin:ye,cap:Q,sign:ce===0?-1:1}}),c=new et,u=new ke(a*3,3).setUsage(Zn);c.setAttribute("position",u);let f=new Ne(c,n);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let d=Array.from({length:4},(Y,B)=>new Us([...i,...l.flatMap((ce,he)=>B&1<<he?ce.skin:ce.cap)],1));c.setIndex(d[0]);let h=new M,p=new M,x=new M,g=new M,m=new M,b=new M,w=new M,v=new M,A=new M,P=new je,D=new je,U=new je,S=new M(0,0,-1),_=new je().setFromEuler(new ln(-1.42,0,0)),C=[.24,.62,.94,.56],N=[.089,.084,.069,.054,.037],F=0,G=0,X=!0;function z(Y,B,ce,he,ie){let se=!!(Y[0]||Y[1]);if(!se&&!X&&F===ce&&G===he)return;F=ce,G=he,X=se;for(let Ce=0;Ce<t;Ce++){let[ye,Q,ne]=g0[Ce];u.setXYZ(Ce,ye*ce,Q*he,ne*ce)}let be=0;for(let Ce=0;Ce<l.length;Ce++){let ye=l[Ce],Q=Y[Ce],ne=e[Ce].geometry.attributes.position,_e=!!Q,$=ye.wristIndices;_e&&ie&&(be|=1<<Ce),p.set(0,0,0);for(let re of ye.socket)p.add(h.fromBufferAttribute(u,re));p.multiplyScalar(1/6),g.set(0,0,0);for(let re of $)g.add(h.fromBufferAttribute(ne,re));g.multiplyScalar(1/6).applyQuaternion(Q?.quaternion??_),_e?g.add(Q.position):g.add(h.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),b.copy(m).normalize(),w.set(ye.sign*.38,-1,.27).addScaledVector(b,-b.dot(h.set(ye.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),_e&&x.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-m.lengthSq()*.25))*.72),P.setFromUnitVectors(S,b.subVectors(x,p).normalize()),D.copy(Q?.quaternion??_);for(let re=0;re<4;re++){let me=re===3;A.lerpVectors(me?x:p,me?g:x,C[re]),U.copy(P).slerp(D,me?.79:re*.19);for(let Le=0;Le<6;Le++){let E=vw[Le],H=N[re];v.set(E[0]*H,E[1]*H*.84,0).applyQuaternion(U).add(A),u.setXYZ(ye.rings[re+1][Le],v.x,v.y,v.z)}}for(let re=0;re<ye.remap.length;re++)v.fromBufferAttribute(ne,re).applyQuaternion(D),_e?v.add(Q.position):v.add(h.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(ye.remap[re],v.x,v.y,v.z)}c.index!==d[be]&&c.setIndex(d[be]),u.needsUpdate=!0,c.computeVertexNormals()}return z([null,null],.42,1,1,!1),{mesh:f,pose:z}}function ro(n,e){let t=new Pi;return n.forEach(([i,s],r)=>r===0?t.moveTo(-i,s):t.lineTo(-i,s)),t.closePath(),new Os(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var x0=.1,_w=45,y0=55,Xa=128,Pd=96,Mw=[new Be("#ffdc4d"),new Be("#ff5d35"),new Be("#bfc4c8")],bw=new M(0,0,-1);function Id(){let n=new pt,e=new St({color:"#596974",roughness:.38,metalness:.6}),t=new St({color:"#29323e",roughness:.68}),i=new mt({color:"#ffd563",toneMapped:!1});function s(o,a,l,c,u,f=0){let d=new Ne(o,a);d.position.set(l,c,u),d.rotation.x=f,n.add(d)}let r=new St({color:"#7f4231",roughness:.46,metalness:.34});return s(ro([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),s(ro([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),r,.035,0,0),s(new Ht(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),s(new tt(.054,.014,.073),r,.035,.045,-.099),s(new tt(.018,.008,.023),i,.035,.063,-.131),n}function v0(n,{impact:e,onShot:t}){let i=Id(),s=new Ne(new Dt(.045,0),new mt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));s.position.set(.035,.028,-.208),i.add(s),n.add(i),i.visible=!1;let r=new et,o=new ke(Xa*18,3).setUsage(Zn),a=new ke(Xa*18,3);for(let F=0;F<Xa;F++)for(let G=0;G<6;G++){let X=Mw[Math.floor(G/2)];a.setXYZ(F*6+G,X.r,X.g,X.b)}r.setAttribute("position",o),r.setAttribute("color",a),r.setDrawRange(0,0);let l=new fa(r,new ns({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new ke(Pd*3,3).setUsage(Zn),u=new et;u.setAttribute("position",c),u.setDrawRange(0,0);let f=new pa(u,new Hr({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:Yn}));f.frustumCulled=!1,f.visible=!1,n.add(f);let d=Array.from({length:Xa},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Pd},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,g=new M,m=0,b=0,w=0,v=0,A=0,P=!1;function D(F,G,X,z){for(let Y=0;Y<X;Y++){let B=h[b++%Pd];B.p.copy(F),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(z).addScaledVector(G,.55),B.life=.12+Math.random()*.21}}function U(F,G,X){let z=d[m++%Xa];return z.p.copy(F),z.d.copy(bw).applyQuaternion(G),z.distance=0,z.active=!0,z.authoritative=X,z}function S(F){let G=U(F.position,F.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),D(p,G.d,4,2.2),A=.055,w++,t?.(F.position,F.quaternion)}function _(F,G,X){let z=U(F,G,X);D(z.p,z.d,4,2.2),l.visible=!0}function C({dt:F,aim:G,firing:X}){if(!G&&!i.visible&&!l.visible&&!f.visible)return;if(F=Math.max(0,Math.min(F,.12)),i.visible=!!G,G&&(i.position.copy(G.modelPosition??G.position),i.quaternion.copy(G.quaternion)),G&&X){if(P)for(v-=F;v<=0;)S(G),v+=x0;else S(G),v=x0;P=!0}else v=0,P=!1;A=Math.max(0,A-F),s.visible=!!G&&A>0,s.material.opacity=A/.055;let z=0;for(let B of d){if(!B.active)continue;let ce=Math.min(_w*F,y0-B.distance),he=ce>0?e?.(B.p,B.d,ce,B.authoritative):null,ie=he==null?ce:Math.max(0,Math.min(ce,he));B.p.addScaledVector(B.d,ie),B.distance+=ie,he!=null&&(g.copy(B.d).negate(),D(B.p,g,8,4.2)),B.active=he==null&&B.distance<y0;let se=Math.min(.82,B.distance);for(let be=0;be<3;be++)for(let Ce=0;Ce<2;Ce++){let ye=(be+Ce)/3;x.copy(B.p).addScaledVector(B.d,-se*ye),o.setXYZ(z++,x.x,x.y,x.z)}}l.visible=z>0,z>0&&(o.needsUpdate=!0),r.setDrawRange(0,z);let Y=0;for(let B of h)B.life<=0||(B.life-=F,B.v.y-=5*F,B.p.addScaledVector(B.v,F),B.life>0&&c.setXYZ(Y++,B.p.x,B.p.y,B.p.z));f.visible=Y>0,Y>0&&(c.needsUpdate=!0),u.setDrawRange(0,Y)}function N(){for(let F of d)F.active=!1;for(let F of h)F.life=0;v=A=0,P=!1,i.visible=s.visible=l.visible=f.visible=!1,r.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:C,reset:N,replay:_,get shotsFired(){return w}}}var _0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],Sw=new M(0,1,0);function Ou(n){let e=new pt,t=new St({color:"#2c4750",roughness:.43,metalness:.47}),i=new St({color:"#899fa3",roughness:.46,metalness:.57}),s=new mt({toneMapped:!1});function r(h,p,x,g,m,b=0){let w=new Ne(h,p);return w.position.set(x,g,m),w.rotation.x=b,e.add(w),w}r(ro([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),r(ro([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),r(new Ht(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),r(new Ht(.016,.02,.011,6,1,!0),s,.038,.025,-.169,-Math.PI/2),r(new tt(.044,.009,.038),s,.038,.069,-.023);let o=new Ne(new Ht(.002,.003,1,5,1,!0),new mt({transparent:!0,opacity:.52,depthWrite:!1,blending:Yn,toneMapped:!1})),a=new Ne(new Dt(.012,0),new mt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function f(){e.visible=o.visible=a.visible=!1}function d({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){f();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(_0[h-1]??_0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(Sw,c.normalize()),a.position.copy(g)}return f(),{mesh:e,hide:f,update:d}}var ww="wss://clouddata.turbowarp.org",Tw="itssoren.github.io/VR/gorilla-lab/",ku={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},oo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),S0="\u2601 GorillaHost",Ya=["ARENE1","ARENE2","ARENE3"],Aw=new Map([[S0,"vr"],[ku.vr,"vr"],[ku.pc,"pc"],...oo.map(n=>[n,"player"])]),Dd=53,zu=4400,w0=64e3,Ew=100,Cw=200,Rw=450,T0=6,Ut=(n,e)=>Math.round(n).toString().padStart(e,"0");function Za(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Ys(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function Pw({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Ut(e,7)+a.map(c=>Ut(c*100+2e4,5)).join("")+Ut(Math.round(l*10)%3600,4)+Ut(o,6)}function Iw(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function A0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:s=()=>{},Socket:r=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),f=o(),d=null,h=null,p="",x=0,g="",m=-1/0,b=null,w=0,v=0,A=1/0,P=0,D="offline",U=!1,S=-1,_=0,C=[],N=1/0,F=350,G=1/0,X=0,z=[],Y={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(E,H){D=E,n(H)}function ce(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function he(){return[...c.values()].map(E=>E.pose).filter(Boolean)}function ie(){let E=he().filter(I=>h==="vr"?I.role!=="vr":I.role==="vr"),H=I=>Number(I.ready)*2+ +(I.role==="pc"),te=E.find(I=>I.id===b?.id)??null,J=E.reduce((I,W)=>!I||H(W)>H(I)?W:I,te);J!==b&&(b=J,e(b))}function se(E){for(let H of c.values())H.pose&&t(null,H.pose),H.pose=H.candidate=null;E&&c.clear(),ie()}function be(){let E=d;if(d=null,E){E.onopen=E.onmessage=E.onerror=E.onclose=null;try{E.close()}catch{}}}function Ce(){be(),h=null,p="",A=1/0,U=!1,S=-1,C=[],z=[],se(!0),B("offline","Hors ligne")}function ye(E){let H=Math.min(3e4,1500*2**Math.min(P++,5));A=a()+H,B("retry","TurboWarp d\xE9connect\xE9 ("+E+") \xB7 reconnexion automatique au salon "+p)}function Q(E){let H=!1;for(let[te,J]of c)J.pose&&E-J.pose.arrival>zu&&(t(null,J.pose),J.pose=null,H=!0),J.candidate&&E-J.candidate.arrival>zu&&(J.candidate=null),E-J.lastArrival>6e4&&c.delete(te);H&&ie()}function ne(E,H,te,J){let I=Vw(te.value,null);if(!I||I.id===x)return;let W=c.get(I.id);if(!W){if(c.size>=64)return;W={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:J,pose:null,candidate:null},c.set(I.id,W)}if(I.time<=W.lastTime)return;let O=W.pose??W.candidate;if(O&&I.time-O.time>zu+J-O.arrival){if(W.pose)return;W.candidate=null}W.lastTime=I.time,W.lastArrival=J;let ee={...I,ready:I.ready??!0,protocol:I.protocol??(I.ready===void 0?3:4),role:E,channel:H,received:o(),arrival:J},fe=W.candidate;if(!W.pose&&(!fe||fe.channel!==H||fe.map!==ee.map||J-fe.arrival>zu)&&(I.ready!==void 0||Math.abs(I.time-ee.received)>25e3)){W.candidate=ee;return}if(W.candidate=null,!W.pose&&fe?.objects&&fe.ready&&fe.map===ee.map&&!ee.objects&&(ee.objects=fe.objects),W.pose=ee,h==="vr"&&E==="vr"&&ee.ready)if(G===1/0||fe?.arrival<G||I.id<x)h="player",g=oo[x%oo.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(Y.received++,Y.bytesReceived+=te.value.length,t(ee),ie(),!(!U||!ee.ready||ee.map!==S)){J-W.shotWindow>=1e3&&(W.shotWindow=J,W.shotCount=0);for(let{seq:de,position:T,quaternion:y}of ee.shots??[])de<=W.lastShot||(W.lastShot=de,!(W.shotCount>=14||(T.x-ee.x)**2+(T.y-ee.y)**2+(T.z-ee.z)**2>7**2)&&(W.shotCount++,s({position:T,quaternion:y},ee)));if(!(h!=="vr"||E!=="player"||I.actionTarget!==x))for(let{seq:de,action:T}of I.actions)de<=W.lastAction||(W.lastAction=de,i(T,ee))}}function _e(){let E;try{E=new r(ww)}catch{return!1}return d=E,v=a(),m=-1/0,G=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),E.onopen=()=>{d===E&&(w=a(),E.send(JSON.stringify({method:"handshake",project_id:Tw+p,user:"player"+x})+`
`),B("open",ce()))},E.onmessage=H=>{if(d!==E||typeof H.data!="string"||H.data.length>105e4)return;let te=a();Q(te);for(let J of H.data.split(`
`)){if(!J.trim())continue;let I;try{I=JSON.parse(J)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",J.slice(0,200));continue}let W=Aw.get(I?.name);I?.method!=="set"||!W||ne(W,I.name,I,te)}},E.onerror=()=>{d===E&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},E.onclose=H=>{if(d!==E)return;let te=H.code;if(be(),se(!1),C=[],z=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(te)){ye(te);return}h=null,p="";let J={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[te];B("error","TurboWarp d\xE9connect\xE9 ("+te+")"+(J?" \xB7 "+J:H.reason?" \xB7 "+H.reason.slice(0,100):""))},!0}function $(E,H){let te=Za(E);return!/^[A-Z0-9]{5,12}$/.test(te)||!["vr","pc","player"].includes(H)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===H&&p===te?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(se(!0),x=Math.floor(1e6+l()*8999999),h=H,p=te,g=ku[h]??oo[x%oo.length],F=350,h==="vr"&&Ya.includes(p)&&(g=x%2===0?ku.vr:S0,F=750+x%150),_=X=0,z=[],Y={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},P=0,A=N=1/0,_e()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function re(E,H){let te=E.hand||E.type==="world"?5:4;if(h!=="player"||D!=="open"||!b?.ready||b.protocol<te||b.map!==H||!Ud(E)||_>=99999999)return!1;let J=a();return C=C.filter(I=>I.expires>=J&&I.target===b.id&&I.map===H),C.length>=8?!1:(C.push({action:{...E},seq:++_,expires:J+1800,target:b.id,map:H}),!0)}function me(E,H,te){if(!h||h==="pc"||D!=="open"||X>=99999999)return;let J=co(E),I=uo(H);if(!J||!I)return;let W=a();z=z.filter(O=>O.expires>=W&&O.map===te).slice(-(T0-1)),z.push({record:Ut(++X,8)+J+I,expires:W+Rw,map:te})}function Le(E){let H=a();U=!!E&&E.ready!==!1,S=E?.map??-1,Q(H),h&&!d&&H>=A&&(A=1/0,_e()||ye(1006)),d&&d.readyState===0&&H-v>1e4&&(be(),ye(1006)),Y.bufferedBytes=d?.bufferedAmount??0;let te=h==="pc"?Cw:Ew;if(!E||!h||d?.readyState!==1||Y.bufferedBytes>4096||H-w<(h==="vr"?F:350)||H-m<te)return!1;if(h==="player"){let fe=he().filter(T=>T.role==="player"),de=fe.find(T=>T.channel===g);if(de?N=Math.min(H,N):N=1/0,de&&(de.id<x||H-N>=800)){let T=oo.find(y=>!fe.some(L=>L.channel===y));if(!T)return D!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=T,N=1/0}}(P||D==="capacity")&&(P=0,B("open",ce()));let J=Math.round(f+H-u),I=Pw({...E,time:J,id:x});if(!I)return!1;C=C.filter(fe=>fe.expires>=H&&fe.target===b?.id&&fe.map===E.map),z=z.filter(fe=>fe.expires>=H&&fe.map===E.map);let W=Y.bufferedBytes===0?E.objectFeed?.(H):null,O=typeof E.avatar=="function"?E.avatar():E.avatar,ee=zw(I,O,W,{version:5,ready:E.ready!==!1,actions:C,actionTarget:C[0]?.target??0,shots:z,score:E.score});return m=H,h==="vr"&&(G=Math.min(G,H)),d.send(JSON.stringify({method:"set",name:g,value:ee})+`
`),Y.sent++,Y.bytesSent+=ee.length,!0}return{join:$,leave:Ce,tick:Le,sendAction:re,queueShot:me,get stats(){return{...Y}},get role(){return h},get code(){return p},get state(){return D},get remote(){return b},get peers(){return he()}}}var Lw=15,Dw=12,E0=44,Vu=15,Ld=35,co=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Ut(e*100+2e4,5)).join(""):null;function ao(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var uo=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Ut(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function lo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function Uw(n){let e=co(n.mesh.position),t=uo(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>Dd)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Ut(i,5)+Ut(s,2)+r+o+Ut(a,8)+e+t}function Fw(n){return Ut(n,5)+"99"+"0".repeat(E0-7)}function Nw(n){if(!n)return null;let e=uo(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&co(l.position),u=l&&uo(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(Lw+Dw)}),s=Ut(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Ut(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Ut(n.coconuts??31,2)+Ut(n.color??0,2)+a}function Ud(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Dd?"10"+Ut(t,5):null;if(e==="world"){let o=s===1?2:s===2?4:s===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+s+Ut(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Ut(i,5):null;let r=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(r)?(e==="hold"?"3":"4")+r+Ut(i,5):null}function Bw(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release","world"][e];if(!s)return null;let r={type:s,objectId:i};return s==="spawn"?r={type:s,typeId:i}:s==="world"?r={type:s,mode:t,typeId:i}:s==="tool"?r.mode=t:t&&(r.hand=t),Ud(r)===n?r:null}function Ow(n){let e=co(n?.position),t=uo(n?.quaternion),i=co(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function zw(n,e,t,i=null){let s=Nw(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Ut(p,8)+Ud(x)).join(""),a=i.version===5,l=a&&co(e?.gun?.position),c=a&&uo(e?.gun?.quaternion),u=s&&l&&c?"1"+l+c:"0",f=i.shots??[],d=a?u+Ut(f.length,1)+f.map(p=>p.record).join("")+Ut(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!s+(s??"")+Ow(s?e.tool:null)+Ut(i.actionTarget??0,7)+Ut(o.length/Vu,1)+o+d;return h.length+1+r.length>w0&&(t=null,r=""),h+(t?t.full?"2":"1":"0")+r}function M0(n,e,t){let i=lo(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:ao(n,a+1),quaternion:lo(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function Vw(n,e){if(typeof n!="string"||n.length>w0||!/^[0-9]+$/.test(n))return null;let t=Iw(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:E0,r=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=M0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),f=ao(n,a+2),d=lo(n,a+17),h=ao(n,a+29);if(u<1||u>7||!f||!d||!h)return null;t.avatar.tool={mode:u,position:f,quaternion:d,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*Vu+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=Vu){let u=Number(n.slice(a,a+8)),f=Bw(n.slice(a+8,a+Vu));if(!f||u<=c)return null;t.actions.push({seq:u,action:f}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let d=ao(n,a+1),h=lo(n,a+16);if(!d||!h)return null;t.avatar.gun={position:d,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>T0||n.length<a+u*Ld+7)return null;t.shots=[];let f=0;for(let d=a+u*Ld;a<d;a+=Ld){let h=Number(n.slice(a,a+8)),p=ao(n,a+8),x=lo(n,a+23);if(h<=f||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),f=h}t.score=Number(n.slice(a,a+6)),r=a+7}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=M0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),f=Number(n.slice(l+5,c));if(!u)return null;if(f===(i?9:99)){a.push({id:u,removed:!0});continue}let d=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=ao(n,c+10),g=lo(n,c+25);if(f>Dd||d>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:f,flags:d,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var kw=.45,b0=2.5;function C0(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function s(r,o){let a=r-i>=1600,l=a||r-t>=200;a&&(i=r),l&&(t=r);let c=l?new Set:null,u=[];for(let f of o){if(!f.mesh.visible)continue;let d=f.netId,h=n.get(d),p=f.radius<=kw&&!f.frozen&&(f.velocity.lengthSq()>=b0**2||f.angular.lengthSq()*f.radius**2>=b0**2);if(!l&&!p&&!h?.fast)continue;let x=Uw(f);if(!x)continue;c?.add(d);let g=x!==h?.record;g&&e.set(d,{record:x,until:r+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(d,{record:x,fast:p})}if(l){for(let f of n.keys())c.has(f)||(e.set(f,{record:Fw(f),until:r+420}),n.delete(f));for(let[f,d]of e)d.until<r?e.delete(f):a||u.push(d.record)}return a||u.length?{full:a,records:u}:null}return{capture:s,reset(){n.clear(),e.clear(),t=i=-1/0}}}var R0=Lt.DEFAULT_UP,Gw=15,P0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function Hw(){let n=new pt,e=new Ne(new Dt(.155,1),new St({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Ne(new Di(.23,.018,5,20),new mt({color:"#84e6ff",transparent:!0,opacity:.85,blending:Yn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Ne(new Ns(.11,.28,9,1,!0),new mt({color:"#55c7ff",transparent:!0,opacity:.45,side:Wt,blending:Yn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function Ww(){let n=new pt,e=new pt,t=Uu(0),i=t.createHead(),s=["left","right"].map(m=>({skin:Nu(m,t.hand,{openWrist:!0}),position:new M,quaternion:new je,pressure:[0,0,0],tracked:!1})),r=Bu(t.fur,s.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Ou(e),l=null,c=new M,u=[null,null],f=new M,d=new je,h=new je,p=new je,x={mode:0,position:new M,quaternion:new je,end:new M};function g(m,b,w){let v=m.avatar,A=1-Math.exp(-w*32);if(!v){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),r.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}d.copy(n.quaternion).invert(),p.copy(v.head).premultiply(d),i.quaternion.slerp(p,A),f.set(0,0,-1).applyQuaternion(i.quaternion);let P=qe.smoothstep(-f.y,.28,.94),D=Math.max(.38,v.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*D,.24*P),o.rotation.x=-.5*P,h.copy(o.quaternion).invert(),t.setColor(v.color??0);for(let _=0;_<s.length;_++){let C=s[_],N=v.hands[_];if(u[_]=N?C:null,!N){C.tracked=!1;continue}c.copy(N.position).sub(m).applyQuaternion(d).sub(o.position).applyQuaternion(h),p.copy(N.quaternion).premultiply(d).premultiply(h),C.tracked?(C.position.lerp(c,A),C.quaternion.slerp(p,A)):(C.position.copy(c),C.quaternion.copy(p)),C.tracked=!0;for(let F=0;F<3;F++)C.pressure[F]+=((N.pressure?.[F]??0)-C.pressure[F])*A;C.skin.pose(C.pressure,!1)}if(r.pose(u,v.armSpan*.5,.97,D,!0),v.gun){l||(l=Id(),l.visible=!1,e.add(l));let _=l.visible?A:1;l.position.lerp(v.gun.position,_),l.quaternion.slerp(p.copy(v.gun.quaternion),_),l.visible=!0}else l&&(l.visible=!1);let U=v.tool;if(!U){a.hide(),x.mode=0;return}let S=x.mode?A:1;x.mode=U.mode,x.position.lerp(U.position,S),x.quaternion.slerp(p.copy(U.quaternion),S),x.end.lerp(U.end,S),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of s)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function I0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function L0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,f=new Map,d=C0(),h=0,p=-1,x=-1,g=-1,m="",b=0,w=-1;function v(){let I=e();return I!==m&&(m=I,b=Ys(I)),b}function A(I){return!!I?.ready&&I.map===v()}function P(I){let W=f.get(I);W&&(n.remove(W.mesh),W.mesh.material?.dispose(),f.delete(I))}function D(){for(let I of f.keys())P(I);h=0,p=-1,x!==-1&&(x=-1,s?.(null)),g!==-1&&(g=-1,r?.(null)),w!==-1&&(w=-1,o?.(0))}function U(I,W){if(I.color===W.color&&I.style===W.style)return;I.color=W.color,I.style=W.style;let O=I.mesh.material;if(O?.color){if(O.color.setHex(W.color),W.style===0){Object.assign(O,I.baseMaterial),I.baseEmissive&&O.emissive.copy(I.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][W.style],O.metalness=[.1,0,.87,.12,0][W.style],O.opacity=W.style===3?.4:1,O.transparent=W.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=W.style===4?1.65:0,O.needsUpdate=!0}}function S(I){if(!A(I)){D();return}if((h!==I.id||p!==I.map)&&(D(),h=I.id,p=I.map),I.avatar&&I.avatar.light!==x&&(x=I.avatar.light,s?.(x)),I.avatar&&I.avatar.coconuts!==g&&(g=I.avatar.coconuts,r?.(g)),I.score!==void 0&&I.score!==w&&(w=I.score,o?.(w)),!I.objects)return;let W=I.objects.full?new Set:null;for(let O of I.objects.records){if(O.removed){P(O.id);continue}W?.add(O.id);let ee=f.get(O.id);if(ee&&ee.type!==O.type&&(P(O.id),ee=null),!ee){let de=i?.(O.type);if(!de)continue;let{roughness:T,metalness:y,transparent:L,depthWrite:q,opacity:oe,emissiveIntensity:Z}=de.material??{},ge={roughness:T,metalness:y,transparent:L,depthWrite:q,opacity:oe,emissiveIntensity:Z};de.userData.netId=O.id,de.userData.netType=O.type,ee={mesh:de,baseMaterial:ge,baseEmissive:de.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new je().copy(O.rotation),velocity:new M,time:I.time},de.position.copy(ee.target),de.quaternion.copy(ee.quaternion),f.set(O.id,ee),n.add(de)}let fe=(I.time-ee.time)/1e3;fe>.06&&fe<.65&&!(O.flags&6)?ee.velocity.copy(O.position).sub(ee.target).multiplyScalar(1/fe).clampLength(0,23):ee.velocity.set(0,0,0),ee.target.copy(O.position),ee.quaternion.copy(O.rotation),ee.time=I.time,ee.flags=O.flags,ee.frequent=fe>.06&&fe<.16,ee.received=I.arrival,ee.mesh.userData.netFlags=O.flags,ee.mesh.userData.held=!!(O.flags&1),U(ee,O)}if(W)for(let O of f.keys())W.has(O)||P(O)}let _=new M;function C(I,W,O){let ee=1-Math.exp(-I*22),fe=1-Math.exp(-I*32);for(let de of f.values()){if(de.mesh.visible=W,!W)continue;let T=de.frequent?fe:ee,y=de.flags&6?0:Math.min(de.frequent?.1:.12,Math.max(0,(O-de.received)/1e3));_.copy(de.target).addScaledVector(de.velocity,y),de.mesh.position.distanceToSquared(_)>16||de.flags&6&&de.mesh.position.distanceToSquared(de.target)<1e-4?de.mesh.position.copy(_):de.mesh.position.lerp(_,T),de.mesh.quaternion.slerp(de.quaternion,T),de.flags&6&&de.mesh.quaternion.angleTo(de.quaternion)<.008&&de.mesh.quaternion.copy(de.quaternion),de.mesh.updateMatrixWorld(!0)}}let N=I=>document.querySelector(I),F=N("#cloud-status"),G=N("#cloud-room"),X=N("#cloud-camera"),z=-1/0,Y=0,B="Hors ligne",ce=0;function he(I){Y=I,X.textContent="Cam\xE9ra : "+P0[I]}function ie(){he((Y+1)%P0.length)}X.onclick=ie;let se=A0({onStatus(I){B=I,F.textContent=I,c?.()},onPose(I){se.role!=="vr"&&S(I)},onPeer(I,W){if(!I){let fe=u.get(W.id);fe?.art&&(I0(fe.art.model),I0(fe.art.toolRoot),fe.art.dispose?.()),u.delete(W.id);return}let O=u.get(I.id);O||(O={art:null,motion:new M,handMotion:[new M,new M]},u.set(I.id,O));let ee=O.pose;O.motion.set(0,0,0);for(let fe of O.handMotion)fe.set(0,0,0);if(ee&&ee.map===I.map){let fe=(I.time-ee.time)/1e3;if(fe>=.055&&fe<=.65){O.motion.set(I.x-ee.x,I.y-ee.y,I.z-ee.z).multiplyScalar(1/fe),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0);for(let de=0;de<2;de++){let T=ee.avatar?.hands[de],y=I.avatar?.hands[de];T&&y&&O.handMotion[de].copy(y.position).sub(T.position).multiplyScalar(1/fe).clampLength(0,23)}}}O.pose=I},onAction:a,onShot:l}),be=Za(new URLSearchParams(location.search).get("room")??"");function Ce(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),I=>(I%36).toString(36)).join("").toUpperCase()}G.value=/^[A-Z0-9]{5,12}$/.test(be)?be:Ce();function ye(I,W=G.value){let O=Za(W);if(!(se.role===I&&se.code===O)){if(!/^[A-Z0-9]{5,12}$/.test(O)){F.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}se.role&&se.leave(),se.join(O,I)&&(G.value=O,I!=="vr"&&N("#game").focus(),d.reset(),he(0),t(Ys(O)),m="")}}N("#cloud-vr").onclick=()=>ye("vr"),N("#cloud-new").onclick=()=>ye("vr",Ce());for(let[I,W]of Ya.entries())N(`#public-join-${I}`).onclick=()=>ye("player",W),N(`#public-host-${I}`).onclick=()=>ye("vr",W);N("#cloud-pc").onclick=()=>ye("pc");let Q=N("#cloud-player");Q&&(Q.onclick=()=>ye("player")),N("#cloud-leave").onclick=()=>{ce=0,se.leave()},N("#cloud-copy").onclick=async()=>{let I=new URL(location.href);I.searchParams.set("room",se.code||Za(G.value));try{await navigator.clipboard.writeText(I.href),F.textContent="Lien copi\xE9."}catch{F.textContent=I.href}ce=performance.now()+2500},addEventListener("pagehide",()=>se.leave());let ne=new M,_e=new M,$=new M,re=new M,me=0;function Le({dt:I,position:W,yaw:O,pitch:ee,camera:fe,rig:de,keys:T,flat:y}){let L=y?.movement,q=Number(T.has("KeyD"))-Number(T.has("KeyQ")||T.has("KeyA"))+(L?.x??0),oe=Number(T.has("KeyS"))-Number(T.has("KeyZ")||T.has("KeyW"))+(L?.z??0);y?.consumeJump?.()&&(me=.26),me=Math.max(0,me-I);let Z=Number(T.has("Space")||me>0)-Number(T.has("ShiftLeft")||T.has("ShiftRight")),ge=T.has("ControlLeft")||T.has("ControlRight")?11:3.2;re.set(q,Z,oe).clampLength(0,1).applyAxisAngle(R0,O),de.position.addScaledVector(re,I*ge).clampScalar(-175,175),de.rotation.set(0,O,0),fe.position.set(0,0,0),fe.rotation.set(ee,0,0,"YXZ"),de.updateMatrixWorld(!0),W.copy(de.position)}function E(I,W,O,ee){for(let fe of u.values()){let de=fe.pose;if(!(I&&A(de))){fe.art&&(fe.art.model.visible=!1,fe.art.toolRoot&&(fe.art.toolRoot.visible=!1));continue}fe.art||(fe.art=de.role==="pc"?Hw():Ww(),n.add(fe.art.model),fe.art.model.visible=!1,fe.art.toolRoot&&n.add(fe.art.toolRoot));let{model:y,toolRoot:L}=fe.art,q=Math.min(.12,Math.max(0,(ee-de.arrival)/1e3+.025));ne.copy(de).addScaledVector(fe.motion,q),!y.visible||y.position.distanceToSquared(ne)>64?y.position.copy(ne):y.position.lerp(ne,1-Math.exp(-O*34)),y.rotation.y=de.yaw,y.visible=!0,L&&(L.visible=!0),fe.art.draw(de,W,O)}}function H(I,W){if(W<ce)return;let O=se.remote,ee=B;if(se.state==="open"){let fe="Salon "+se.code+" \xB7 ",de=se.peers.filter(T=>T.ready);if(!I)ee=fe+"quitte la session VR pour utiliser le mode spectateur";else if(se.role!=="vr"&&O&&O.map!==v())ee=fe+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(se.role!=="vr"&&O&&!O.ready)ee=fe+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(se.role==="player"&&O&&O.protocol<5)ee=fe+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(se.role!=="vr"&&A(O))ee=fe+"h\xF4te connect\xE9";else if(se.role==="vr"){let T=de.filter(A),y=T.filter(q=>q.role==="player").length,L=T.some(q=>q.role==="pc");ee=fe+"tu h\xE9berges \xB7 "+(y+1)+" joueur"+(y?"s":""),L&&(ee+=" \xB7 spectateur connect\xE9"),!y&&de.some(q=>!A(q))&&(ee+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}F.textContent!==ee&&(F.textContent=ee,c?.())}function te(I){let{inVR:W,time:O,dt:ee,position:fe,yaw:de,camera:T,rig:y,keys:L,avatar:q,bodies:oe,score:Z}=I;if(!se.role){D();return}let ge=se.role!=="pc"||!W,pe=performance.now(),Me=v(),ve=se.role!=="vr"?se.remote:null,ue=ge&&A(ve);if(!ue&&p!==-1&&D(),C(ee,ue,pe),E(ge,O,ee,pe),se.role==="pc"&&!W){(I.actions??L).delete("KeyC")&&ie();let Se=Y===3&&ue?[...f.values()].find(we=>we.type===Gw)?.mesh:null,Oe=ue?u.get(ve.id)?.art?.model:null;Se?($.set(0,0,-.23).applyQuaternion(Se.quaternion),y.position.copy(Se.position).add($),y.rotation.set(0,0,0),T.position.set(0,0,0),T.quaternion.copy(Se.quaternion),y.updateMatrixWorld(!0),fe.copy(y.position)):Oe&&(Y===1||Y===2)?($.set(0,.72,Y===1?-2.7:2.7).applyAxisAngle(R0,Oe.rotation.y),_e.copy(Oe.position).add($),y.position.lerp(_e,1-Math.exp(-ee*11)),T.position.set(0,0,0),y.updateMatrixWorld(!0),T.lookAt(Oe.position),T.updateWorldMatrix(!0,!1),fe.copy(y.position)):Le(I)}se.tick({x:fe.x,y:fe.y,z:fe.z,yaw:de,map:Me,ready:ge,avatar:ge&&se.role!=="pc"?q:null,score:Z,objectFeed:ge&&se.role==="vr"&&oe?Se=>d.capture(Se,oe):null}),pe-z>=150&&(z=pe,H(ge,pe))}function J(I){let W=u.get(I)?.pose;return A(W)?W:null}return{update:te,getPeer:J,connect:ye,leave:()=>se.leave(),get caption(){return F.textContent},handMotion(I,W){return u.get(I)?.handMotion[W]},sendAction(I){return se.sendAction(I,v())},sendShot(I,W){se.queueShot(I,W,v())},get stats(){return se.stats},get role(){return se.role},get connected(){return A(se.remote)},get remoteSpectator(){return se.peers.find(I=>I.role==="pc"&&A(I))??null},get remoteLight(){return x===-1?null:x},get replicaCount(){return f.size},forEachReplica(I){for(let W of f.values())W.mesh.visible&&I(W.mesh)}}}var U0=Object.freeze([8,16,32,48]),F0=16,Gu=24,D0=new WeakMap,as=qe.clamp,fo=qe.lerp,Nd=n=>n*n*(3-2*n);function ho(n,e,t,i){return Number.isFinite(n)?as(n,e,t):i}function po(n={}){let e=U0.includes(n?.detail)?n.detail:F0,t=n?.heights;return{detail:e,seed:Math.round(ho(n?.seed,0,2147483647,1)),amplitude:ho(n?.amplitude,0,12,0),frequency:ho(n?.frequency,.015,2,.12),grass:ho(n?.grass,0,1,0),shrub:ho(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>ho(i,-Gu,Gu,0)):null}}function N0(n,e,t,i){let s=as(t,0,e),r=as(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,f=a*u+o,d=n[f],h=n[f+1],p=n[f+u],x=n[f+u+1];return l+c<=1?d+(h-d)*l+(p-d)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function B0(n,e){let t=U0.includes(e)?e:F0;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>N0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Oi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Fd(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Nd(n-i),o=Nd(e-s),a=fo(Oi(i,s,t),Oi(i+1,s,t),r),l=fo(Oi(i,s+1,t),Oi(i+1,s+1,t),r);return 2*fo(a,l,o)-1}function Hu(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=D0.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let f=s+1,d=u?c.procedural:new Float64Array(f**2);if(!u&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let m=(g/s-.5)*e*a,b=(x/s-.5)*t*a;d[x*f+g]=o*(.62*Fd(m,b,r)+.26*Fd(m*2.03,b*2.03,r+13)+.12*Fd(m*4.13,b*4.13,r+37))}let h=l?d.map((x,g)=>x+l[g]):d,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:d,surface:h};return D0.set(n,p),p}function Bd(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return N0(o,i,(e/s+.5)*i,(t/r+.5)*i)}function qw(n,e,t){return n.y+Bd(Hu(n),e-n.x,t-n.z)}function Xw(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,f=0;for(let d=l;d<=c;d++)for(let h=o;h<=a;h++)h===e&&d===t||(u+=s[d*r+h],f++);return u/f}function O0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Hu(n),{detail:l,w:c,d:u,surface:f,procedural:d}=a,h=e-n.x,p=t-n.z,x=as(h,-c/2,c/2),g=as(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=s**2)return!1;let m=(h/c+.5)*l,b=(p/u+.5)*l,w=c/l,v=u/l,A=Math.max(0,Math.ceil(m-s/w)),P=Math.min(l,Math.floor(m+s/w)),D=Math.max(0,Math.ceil(b-s/v)),U=Math.min(l,Math.floor(b+s/v)),S=Number.isFinite(o)?o-n.y:Bd(a,h,p),_=l+1,C=a.heights?.slice()??new Array(_**2).fill(0),N=!1,F=!1;function G(X,z,Y){N=!0;let B=z*_+X,ce=C[B],he;if(i==="raise"||i==="lower")he=ce+(i==="raise"?1:-1)*r*Y;else{let ie=i==="flatten"?S:Xw(a,X,z);he=fo(f[B],ie,Math.min(1,r)*Y)-d[B]}he=as(he,-Gu,Gu),!(Math.abs(he-ce)<1e-7)&&(C[B]=he,F=!0)}for(let X=D;X<=U;X++)for(let z=A;z<=P;z++){let Y=Math.hypot((z-m)*w,(X-b)*v)/s;Y<1&&G(z,X,Nd(1-Y))}if(!N){let X=as(m,0,l),z=as(b,0,l),Y=Math.min(l-1,Math.floor(X)),B=Math.min(l-1,Math.floor(z)),ce=X-Y,he=z-B,ie=ce+he<=1,se=ie?1-ce-he:ce+he-1,be=ie?ce:1-he,Ce=ie?he:1-ce;if(se>=Math.max(be,Ce)){let ye=+!ie;G(Y+ye,B+ye,1)}else be>=Ce?G(Y+1,B,1):G(Y,B+1,1)}return F&&(n.terrain.heights=C),F}function z0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let f=0;f<=s;f++)for(let d=0;d<=s;d++){let h=f*r+d;o[3*h]=(d/s-.5)*e,o[3*h+2]=(f/s-.5)*t,a[2*h]=d/s*e/2.6,a[2*h+1]=(1-f/s)*t/2.6,f<s&&d<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new et;return u.setAttribute("position",new bt(o,3).setUsage(Zn)),u.setAttribute("uv",new bt(a,2)),u.setIndex(new bt(l,1)),Yw(u,n),u}function Yw(n,e){let{surface:t}=Hu(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function V0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>qw(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function Zw(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new et;return e.setAttribute("position",new ke(n,3)),e.computeVertexNormals(),e}function jw(){return new Dt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var Jw=[{name:"grass",geometry:Zw,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:jw,perMetre:.17,max:48,salt:47,color:"#36583c"}];function k0(n){let e=new pt;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of Jw){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new $t({color:a,side:t==="grass"?Wt:si});u.flatShading=!0;let f=new ua(i(),u,c);f.name=t,f.instanceMatrix.setUsage(Zn),f.userData.salt=o,f.receiveShadow=!0;let d=new Be;for(let h=0;h<c;h++){let p=fo(.68,1.2,Oi(h,o,n.terrain.seed+4));f.setColorAt(h,d.setRGB(p,p,p))}e.add(f)}return Kw(e,n),e}function Kw(n,e){let t=Hu(e),i=new Lt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Oi(a,r,o)-.5)*.96*e.w,c=(Oi(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Bd(t,l,c),c),i.rotation.y=Oi(a,r,o+2)*2*Math.PI,i.scale.setScalar(fo(.58,1.34,Oi(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function G0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var Wu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],H0=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function W0(n,e=H0[n]){n=Math.max(0,Math.min(Wu.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:H0[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let f of[0,-512])for(let d of[0,-512])i.fillRect(a+f,l+d,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function q0({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function f(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function d(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>d(h,!0),n.onpointercancel=n.onlostpointercapture=h=>d(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:f,consumeJump(){let h=c;return c=!1,h}}}var $w=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function X0(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){$w.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Y0(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var qu=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:f,offset:d}=c,h=u.surface;if(c.released=null,u.surface=null,u.groundContact=!1,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&(!u.held||u.hasSupport)&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(u.hasSupport?d.copy(u.supportOffset):d.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=h&&r.includes(h)&&!h.objectBody?.owner,g=x&&h.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(d),this.from.copy(p).add(d),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(d),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let U=this.correction.subVectors(p,u.anchor),S=U.dot(f)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&U.lengthSq()<=Math.max(.12,l*.5)**2;S&&(!m||m===h&&this.hitNormal.dot(f)>.7)?(m=h,this.hit.copy(u.anchor).add(d),this.hitNormal.copy(f)):!S&&m===h&&U.dot(f)>.035&&(m=null),!m&&c.tracked&&(c.released=h,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(d),f.copy(this.hitNormal);let b=m.friction??.8,w=Math.min(1,Math.max(0,b*(.75+s.grip*.09))),v=Math.min(.97,Math.max(0,1-w+(s.slide-3)*.035)),A=this.correction.subVectors(u.anchor,p),P=A.dot(f);if(A.addScaledVector(f,-P),A.lengthSq()*v**2>.003**2){if(this.to.copy(u.anchor).add(d).addScaledVector(A,-v),this.from.copy(this.to).addScaledVector(f,.003),this.to.addScaledVector(f,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(d);else if(v>.5&&A.lengthSq()>.035**2)continue}A.subVectors(u.anchor,p),x&&A.dot(f)<0&&A.addScaledVector(f,-A.dot(f)),a.add(A);let D=m.objectBody;if(D){let U=c.inverseRotation.copy(D.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(d).sub(D.mesh.position).applyQuaternion(U),c.localNormal.copy(f).applyQuaternion(U)}if(u.surface=m,u.groundContact=f.y>.55,this.contacts++,c.tracked){let U=this.handMotion.subVectors(c.previousTarget,p),S=U.dot(f);U.multiplyScalar(1-v).addScaledVector(f,Math.max(0,S)-S*(1-v)),this.intent.add(U)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:f,weight:d}=this.settings;if(this.average.lengthSq()<(1.05+.04*d)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*f)/(.72+.056*d)),t.clampLength(0,8.5+.28*f);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=.08,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function Z0(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function j0({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new je,l=0,c=new Ui,u=[],f=new Map,d=v0(n,{onShot:(m,b)=>r.sendShot(m,b),impact(m,b,w,v){c.set(m,b),c.far=w;let A=c.intersectObjects(u,!1)[0];if(!A)return null;let P=f.get(A.object);return v&&P&&!P.owner&&!P.frozen&&P.velocity.addScaledVector(b,Math.min(4,2.6/P.mass)),A.distance}}),h={position:new M,quaternion:new je,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:b,inVR:w,enabled:v,remoteWorld:A,dt:P,yaw:D,drop:U,rightHand:S,flatFiring:_}){let C=null,N=!1;if(v)if(w){let F=[...m.session.inputSources].find(X=>X.handedness==="right"),G=F&&m.getPose(F.targetRaySpace,b);if(G){let{position:X,orientation:z}=G.transform;C=h,C.position.set(X.x,X.y-U,X.z).applyAxisAngle(o,D).add(e.position),C.modelPosition.copy(S.valid?S.mesh.position:C.position),C.quaternion.set(z.x,z.y,z.z,z.w).premultiply(a.setFromAxisAngle(o,D)),N=!!F.gamepad?.buttons[0]?.pressed}}else C=h,t.getWorldPosition(C.position),t.getWorldQuaternion(C.quaternion),C.modelPosition.set(.16,-.17,-.43).applyQuaternion(C.quaternion).add(C.position),N=_;if(x=C?p:null,u.length=0,f.clear(),C||l){for(let F of i.boxes)F.mesh?.isMesh&&F.mesh.visible&&u.push(F.mesh);if(A)r.forEachReplica(F=>u.push(F));else for(let F of s)F.mesh.visible&&F.collidable&&!F.owner&&(u.push(F.mesh),f.set(F.mesh,F))}d.update({dt:P,aim:C,firing:N}),N?l=1.3:l=Math.max(0,l-P)}return{update:g,receiveShot({position:m,quaternion:b},w){d.replay(m,new je().copy(b),w),l=1.3},reset(){d.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return d.shotsFired}}}function J0(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function K0(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!1,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Zs=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Xu=["Naturel","Cellulo","Affiche","R\xE9tro"],Yu={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function Zu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new et,c=0;for(let u=0;u<n.length;++u){let f=n[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,f=[];for(let d=0;d<n.length;++d){let h=n[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=$0(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][d]);let p=$0(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function $0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new bt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let d=0,h=u.count;d<h;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+f,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Ju=0,Qw=1,eT=new M,Q0=new Fa,Od=new Sn,ex=new M,ju=new wn,Ku=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new $u,this.unassigned=new $u,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new zd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let f=u!==0?-c/u:0;if(!(f<=0)&&(u>0?r=Math.min(f,r):s=Math.max(f,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,eT)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Ju){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let h=s[d].point.getComponent(d)-i[d].point.getComponent(d);h>r&&(r=h,o=d)}let a=i[o],l=s[o],c,u;r=0,Q0.set(a.point,l.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l){Q0.closestPointToPoint(p.point,!0,ex);let x=ex.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Od.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Od.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let f=[];if(Od.distanceToPoint(u.point)<0){f.push(oi.create(a,l,c),oi.create(u,l,a),oi.create(u,c,l),oi.create(u,a,c));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge(h)),f[d+1].getEdge(1).setTwin(f[h+1].getEdge(0))}}else{f.push(oi.create(a,c,l),oi.create(u,a,l),oi.create(u,l,c),oi.create(u,c,a));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge((3-d)%3)),f[d+1].getEdge(0).setTwin(f[h+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(f[d]);for(let d=0,h=e.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Ju&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Qw;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Ju&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=oi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},oi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Ju,this.edge=null}static create(e,t,i){let s=new n,r=new ja(e,s),o=new ja(t,s),a=new ja(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return ju.set(e.point,t.point,i.point),ju.getNormal(this.normal),ju.getMidpoint(this.midpoint),this.area=ju.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ja=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},zd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},$u=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var js=class extends et{constructor(e=[]){super();let t=[],i=[],r=new Ku().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(i,3))}};var Cn=Math.PI*2,Qu=.84,zi=128;function us(n){let e=new Uint8Array(zi*zi*4);for(let i=0;i<zi;i++)for(let s=0;s<zi;s++){let r=(s+.5)/zi,o=(i+.5)/zi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Qu,1),Math.min(o/Qu,1),s,i),l=(s+i*zi)*4;for(let c=0;c<3;c++)e[l+c]=qe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new pi(e,zi,zi);return t.colorSpace=yt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=an,t.needsUpdate=!0,t}function Js(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Be(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Qu,r.getY(l)*Qu):r.setXY(l,.95,.95);return i.setAttribute("color",new bt(a,3)),i}function hs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Zu(s),material:new St({vertexColors:!0,map:r,roughness:o,metalness:a})}}function tx(n,e,t){let i=n/2,s=e/2,r=new Pi;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ls(n,e,t,i,s){return new Os(tx(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function cs(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[f,d]=n[u];for(let h=0;h<=e;h++){let p=Cn*h/e,x=t(f,d,p,u);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;f>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new et;o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let f=u*(e+1),d=f+e;l.fromBufferAttribute(a,f).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(f,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Ja(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Cn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new js(t)}function tT(){let t=new Aa(tx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=qe.clamp(i.getX(l)/.098+.5,0,1),u=qe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=us((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),f=.5+.5*Math.sin((c*1.5+l*.6)*Cn),d=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:d||p?[222,239,247]:[15+58*u+27*f,27+98*u+54*f,59+108*u+47*f]}),r=[it(ls(.106,.207,.013,.011,.0019),8425890),it(ls(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(ls(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(ls(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new tt(.0036,.024,.004).translate(.055,.029,0),11714250),it(new tt(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new tt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(it(new Ht(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(it(new Kt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(it(new Kt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new js([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return hs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function nT(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=cs(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),f=.035*Math.cos(c),d=Math.max(...e.map(h=>Math.exp(-(((l-h+f)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=us((a,l,c,u)=>{let f=Cn*a,d=(l*2-1)*.275,h=Math.max(0,-Math.sin(f)),p=Math.max(...e.map(b=>Math.exp(-(((d-b+.035*Math.cos(f))/.009)**2)))),x=h**3*p,g=Js(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Ja([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return hs("bread","Baguette de pain",.27,o,[it(s,16777215,!0)],r,.9)}function iT(){let n=us((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,f=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*Js(a,l)-(c&&(f||d)?35:0);return[p*.94,p,p*1.04]}),e=cs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=cs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Ht(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Ht(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(it(new tt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ja([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return hs("wheel","Roue",1.8,s,i,n,.64,.23)}function sT(){let n=us((r,o,a,l)=>{let c=Js(a,l),u=o>.26&&o<.34||o>.455&&o<.475,f=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return u?[46+f,94+f,117+f]:[240+f,223+f,194+f]}),e=cs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Di(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new js(i);return hs("cup","Tasse",.39,s,[it(e,16777215,!0),it(t,15785922)],n,.37)}function rT(){let n=cs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=us((s,r,o,a)=>{let l=9*Js(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let f=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[f,f*1.08,f*1.13]}let u=63+c+l+14*Math.cos(s*Cn*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new Yr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new Kt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new Kt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Ht(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new Kt(.008,12).translate(0,.035,.0336),15633202)],i=Ja([[.033,-.143],[.054,.133]],6);return hs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function oT(){let n=cs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=us((r,o,a,l)=>{let c=10*Js(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,f=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Cn*r*2));if(e[d]?.[f]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Cn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new Kt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new Yr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new Kt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ja([[.069,-.112],[.069,.109]],6);return hs("soda","Canette de soda",.35,s,i,t,.42,.27)}function aT(){let n=cs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=us((s,r,o,a)=>{let l=15*Js(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let f=o%4===0||(o+2*a)%7===0?14:0;return[240+l-f,236+l-f,216+l-f]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(ls(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new Kt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Ja([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return hs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function lT(){let n=us((s,r,o,a)=>{let l=8*Js(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return d||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=cs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(ls(.138,.22,.061,.016,.004),14788675),it(ls(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new Zt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Ht(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new tt(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new tt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new Kt(.004,8).translate(.04,.066,.0397),15817792),it(new Kt(.004,8).translate(-.04,.066,.0397),7903100),it(ls(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return hs("radio","Talkie-walkie",.43,new js(i),t,n,.61,.08)}function nx(){return[tT(),nT(),iT(),sT(),rT(),oT(),aT(),lT()]}var ix=new WeakMap;function Vd(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,ix.set(n,e),n}function eh(n){let e=n.clone(),t=ix.get(n);return t?Vd(e,t):e}function cT(n){let t=new Li(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Dt(.225,0),s=new Ca({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Vd(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function uT(n){let e=new tt(.37,.37,.37),t=new St({color:16777215,roughness:.4});return Vd(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function sx(){let n={value:0};return{props:[cT(n),uT(n)],animate(e){n.value=e}}}var Gd="gorilla-lab-models-v1",Ks=Object.freeze({models:12,parts:24,fileBytes:18e4}),hT=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),ox=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),fT=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),dT=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,pT=/^#[a-f\d]{6}$/i;function rx(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function kd(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?qe.clamp(n[s],t,i):e)}function Hd(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Ks.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!dT.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Ks.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:rx(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(fT).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:rx(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(hT,s?.shape)?s.shape:"box",position:kd(s?.position,0,-3,3),rotation:kd(s?.rotation,0,-360,360),scale:kd(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&pT.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(ox,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Wd(n){try{let e=(n??globalThis.localStorage)?.getItem(Gd);if(e&&e.length<=Ks.fileBytes)return Hd(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function mT(n){switch(n){case"sphere":return new Li(.5,20,12);case"cylinder":return new Ht(.5,.5,1,20);case"cone":return new Ns(.5,1,20);case"torus":return new Di(.365,.135,8,24);case"capsule":return new xa(.28,.44,6,16);case"diamond":return new Ii(.5);default:return new tt(1,1,1)}}var ax=Object.keys(ox),mo=64,Ka=4,lx=2,Vi;function gT(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function xT(){if(Vi)return Vi;let n=mo*Ka,e=mo*lx,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/mo)*Ka+Math.floor(s/mo),o=gT(ax[r],s%mo,i%mo),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Vi=new pi(t,n,e),Vi.colorSpace=yt,Vi.magFilter=an,Vi.minFilter=An,Vi.generateMipmaps=!0,Vi.needsUpdate=!0,Vi}function yT(n){let e=mT(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(qe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new Be(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=ax.indexOf(n.surface),c=l%Ka,u=Math.floor(l/Ka);for(let f=0;f<r;f++)s.toArray(o,f*3),a.setXY(f,(c+.05+a.getX(f)*.9)/Ka,(u+.05+a.getY(f)*.9)/lx);return t.setAttribute("color",new bt(o,3)),t}function cx(){return new St({vertexColors:!0,map:xT(),roughness:.68})}function ux(n){let e=n.map(yT),t=Zu(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function hx(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=ux(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:cx(),collisionGeo:new tt(i.x,i.y,i.z),mass:qe.clamp(i.x*i.y*i.z*9,.18,12)}})}function fx(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=ux(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Ne(t,cx());r.castShadow=!0;let o=new pt;return o.add(r),o}var zt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),dx=zt(-24,24,-51,7),th={x:0,y:0,z:3},nh={x:.05,y:1.16,z:5.9},go={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:zt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:zt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:zt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:zt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:zt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:zt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:zt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:zt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:zt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:zt(9,23,-48,-37),sign:[16,-38.2]}},jC=[zt(-9,-6,-51,7),zt(6,9,-51,7),zt(-24,24,-8,-5),zt(-24,24,-27,-23),zt(9,23,-37,-34)],px=[{name:"Glace",bounds:go.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:go.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:zt(-9,9,-51,7)},{name:"Sol ouest",bounds:zt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:zt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:zt(-24,-23,-51,7)},{name:"Sol est",bounds:zt(9,23,-51,-48)},{name:"Sol est",bounds:zt(9,23,-37,7)},{name:"Bordure est",bounds:zt(23,24,-51,7)}],xo={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},yo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],qd=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Xd={x:16,z:-31},Yd={x:16,y:1.52,z:-21},ih={x:-19.4,y:.68,z:-3.25},mx=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),gx={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Yd.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function sh(n,e,t){let i=new tt(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Rn=new je,Vt=new M,fh=new M,vT=new at,xx=new WeakMap;function gh(n){if(n.heightfield||n.objectBody)return null;let e=xx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=vT.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return xx.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function wx(n,e,t){let i=gh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function dh(n,e,t,i){if(t.heightfield)return IT(n,e,t,i);if(t.objectBody)return Ux(n,e,t.objectBody,i);if(!wx(n,e,t))return 0;Rn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Rn);let s=t.half;fh.copy(Vt).clamp(t.min,s),i.subVectors(Vt,fh);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Vt.x),a=s.y-Math.abs(Vt.y),l=s.z-Math.abs(Vt.z);return o<=a&&o<=l?i.set(Math.sign(Vt.x)||1,0,0):a<=l?i.set(0,Math.sign(Vt.y)||1,0):i.set(0,0,Math.sign(Vt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,ki=new M;function ip(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=dh(n,e,c,rt);if(!u||(n.addScaledVector(rt,u+1e-4),rt.y>.65&&(a=!0),!i))continue;let f=i.dot(rt);f<0&&i.addScaledVector(rt,-f*(Math.abs(f)<.55?1:1+s)),ki.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(ki,-Math.min(.95,r*c.friction*o))}return a}var Zd=new M,bo=[];function wo(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));bo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,f=Math.min(n.z,e.z)-t,d=Math.max(n.z,e.z)+t;for(let h of i){let p=gh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&d>=p.minZ&&f<=p.maxZ)&&bo.push(h)}for(let h=1;h<=o;h++){Zd.copy(n).lerp(e,h/o);for(let p of bo){let x=dh(Zd,t,p,rt);if(x)return s.copy(Zd).addScaledVector(rt,x+.001),r.copy(rt),p}}return null}var el=new M,nl=new M,So=new M,Tx=new wn,tl=new M;function To(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),g=x(p),m=x(p+1),b=x(p+2),w=new wn(g,m,b).getNormal(new M);w.lengthSq()>.1&&s.push({a:g,b:m,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new rn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),f=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:f,thickness:d,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function xh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Rn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Rn),i.faces.every(r=>r.n.dot(el.subVectors(Vt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)Tx.set(r,o,a).closestPointToPoint(Vt,tl),s=Math.min(s,Vt.distanceToSquared(tl));return Math.sqrt(s)}function _T(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=dh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Rn.copy(e.quaternion).invert(),Vt.copy(s.position).sub(e.position).applyQuaternion(Rn),fh.copy(Vt).clamp(e.min,e.half),Vt.distanceToSquared(fh)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){el.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=dh(el,.007,e,So);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(el),t.copy(So)):Math.abs(c-o)<.003&&So.dot(t)>.98&&(i.lerp(el,1/++a),o=Math.max(o,c)))}return o}var rh=new M,MT=new M,oh=new M,bT=new M,ST=new M;function Gi(n){return To(new tt(n.x*2,n.y*2,n.z*2))}function yh(n,e,t){let i=bT.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=ST.copy(o).negate(),c=er(n,l)+er(e,o)-a,u=er(n,o)+er(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(rh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(rh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){oh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(rh.copy(a).applyQuaternion(e.mesh.quaternion).cross(oh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(MT.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Rn.copy(a.mesh.quaternion).invert(),Vt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Rn);for(let{a:c,b:u,c:f}of a.shape.faces){Tx.set(c,u,f).closestPointToPoint(Vt,tl);let d=Vt.distanceToSquared(tl);d<l&&(l=d,oh.copy(tl))}if(!r(rh.subVectors(Vt,oh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var wT=new M;function TT(n,e,t){Rn.copy(e.quaternion).invert(),Vt.copy(n.mesh.position).sub(e.position).applyQuaternion(Rn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Vt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Vt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+er(n,wT.copy(t).negate())-s,a=r+er(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function sp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return _T(n,e,t,i??nl);let s=TT(n,e,t)??yh(n,e,t);return s>0&&i&&Cx(n,e,t,i),s}var ep=To(new Ii(1,0).scale(.055,.033,.075)),ah={mesh:{position:new M,quaternion:new je},shape:ep,radius:ep.radius,precise:!0};function Ax(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=ep.radius;bo.length=0;for(let c of i){let u=gh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||bo.push(c)}ah.mesh.quaternion.copy(t);let l=ah.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of bo){let f=u.objectBody;if(f&&(f.owner||l.distanceToSquared(f.mesh.position)>(a+f.radius)**2))continue;let d=f?yh(ah,f,rt):sp(ah,u,rt);if(d>0)return s.copy(l).addScaledVector(rt,d+5e-4),r.copy(rt),u}}return null}function il(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!wx(n.mesh.position,n.radius,s))continue;let r=sp(n,s,rt);r<=1e-6||(n.mesh.position.addScaledVector(rt,r),i=!0)}if(!i)break}}var jd=new M,$a=new M,lh=new M,Jd=new je,fs=new je,yx=new je;function vx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Ex(n,e,t,i,s){let{mesh:r,shape:o}=n;jd.copy(r.position),Jd.copy(r.quaternion),$a.subVectors(e,jd);let a=vx(Jd,t,fs),l=$a.length()+a*o.radius,c=Lx(o),u=Math.max(1,Math.min(Ix,Math.ceil(l/c))),f=l>0?Math.min(1,u*c/l):1,d=a*f/u;lh.set(fs.x,fs.y,fs.z).normalize(),yx.setFromAxisAngle(lh,d),$a.multiplyScalar(f/u);for(let x=0;x<u;x++)r.position.add($a),r.quaternion.premultiply(yx).normalize(),il(n,i);let h=Math.max(.006,s||0);n.velocity.lerp($a.subVectors(r.position,jd).divideScalar(h).clampLength(0,23),.52);let p=vx(Jd,r.quaternion,fs);lh.set(fs.x,fs.y,fs.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(lh,.52)}function er(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Rn.copy(n.mesh.quaternion).invert(),So.copy(e).applyQuaternion(Rn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(So));return t}var Mo=new M,ph=new M,AT=new M,Kd=new M,vo={},_o={};function _x(n,e,t,i){let{mesh:s,shape:r}=n,o=er(n,AT.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(Mo),i.minV=i.maxV=s.position.dot(ph);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(So)<o-.0015)continue;Kd.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=Kd.dot(Mo),c=Kd.dot(ph);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Cx(n,e,t,i){Math.abs(t.y)<.8?Mo.set(-t.z,0,t.x).normalize():Mo.set(t.y,-t.x,0).normalize(),ph.crossVectors(t,Mo),_x(n,t,-1,vo),_x(e,t,1,_o);let s=(Math.max(vo.minU,_o.minU)+Math.min(vo.maxU,_o.maxU))*.5,r=(Math.max(vo.minV,_o.minV)+Math.min(vo.maxV,_o.maxV))*.5;i.copy(t).multiplyScalar((vo.plane+_o.plane)*.5).addScaledVector(Mo,s).addScaledVector(ph,r)}var Mx=new M;function mh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)Mx.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Mx)}}function ET(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Rx(n){return!n.owner&&!n.frozen}var $s=new M,Qs=new M,Qa=new M,bx=new M,tp=new M,np=new M,CT=new M;function ch(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function Px(n,e,t,i){let{mesh:s,shape:r}=n.body;return Rn.copy(s.quaternion).invert(),tp.crossVectors(e,t),i.copy(tp).applyQuaternion(Rn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function uh(n,e,t){return n?.inverseMass?(Px(n,e,t,np),n.inverseMass+tp.dot(np)):0}function hh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(Px(n,e,t,np),i))}function $d(n){return n.friction??n.spec?.friction??.78}function Sx(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt($d(r)*$d(o)):Math.min($d(r),t.friction??.78);$s.subVectors(nl,r.mesh.position),o&&Qs.subVectors(nl,o.mesh.position),ch(n,$s,Qa).sub(ch(e,Qs,bx));let l=Qa.dot(rt),c=!1;if(l<-1e-5){let f=l<-.8?qe.clamp(s*(t?.bounce??1),0,.98):0,d=-l*(1+f)/(uh(n,$s,rt)+uh(e,Qs,rt));hh(n,$s,rt,d),hh(e,Qs,rt,-d),ch(n,$s,Qa).sub(ch(e,Qs,bx)),ki.copy(Qa).addScaledVector(rt,-Qa.dot(rt));let h=ki.length();if(h>1e-5&&a>0){ki.divideScalar(h);let p=Math.min(d*a,h/(uh(n,$s,ki)+uh(e,Qs,ki)));hh(n,$s,ki,-p),hh(e,Qs,ki,p)}c=!0}let u=i-15e-5;if(u>1e-6){let f=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(rt,u*n.inverseMass/f),mh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/f),mh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function RT(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Ix=96,PT=5;function Lx(n){return Math.max(.008,n.thickness*.35)}function Dx(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:gh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let f=Rx(u);if(f){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/Lx(u.shape)))}let d={body:u,inverseMass:f?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new rn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};mh(d),o.push(d)}l=Math.min(Ix,l);let c=t/l;for(let u=0;u<l;u++){for(let f of o){if(!f.inverseMass)continue;let{body:d}=f,{mesh:h,velocity:p,angular:x}=d;f.groundFriction=0,f.groundY=0,p.y-=i*c*(r?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let g=x.length();g>1e-5&&h.rotateOnWorldAxis(CT.copy(x).divideScalar(g),Math.min(g,30)*c),mh(f)}for(let f=0;f<PT;f++){let d=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!ET(h.bounds,p,x))continue;let g=sp(h.body,p,rt,nl);g>0&&(d=Sx(h,null,p,g,s)||d)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=yh(p.body,g.body,rt);m<=0||(Cx(p.body,g.body,rt,nl),d=Sx(p,g,null,m,s)||d)}}if(!d)break}for(let f of o)f.inverseMass&&RT(f,c)}}function IT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var Qd={mesh:{position:null,quaternion:new je},shape:{sphereRadius:0,normals:[],edges:[]}};function Ux(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Qd.mesh.position=n,Qd.shape.sphereRadius=e,yh(Qd,t,i))}function Fx(n,e,t,i,s){let r=Ux(n,e,t,rt);if(r<=0)return!1;n.addScaledVector(rt,r+.001),s?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Rx(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var rp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Bx=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],op={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},vh=3e6,sl=240,gn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Nx=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function _h(n){if(typeof n=="string"){if(n.length>vh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>sl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+sl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:Nx(n.name,56,"Ma map"),spawn:{x:gn(e.x,-120,120,0),y:gn(e.y,-10,30,.06),z:gn(e.z,-120,120,3),yaw:gn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?po(t.terrain):null;return{name:Nx(t.name,36,"Pi\xE8ce "+(i+1)),x:gn(t.x,-120,120,0),y:gn(t.y,-12,33,0),z:gn(t.z,-120,120,0),w:gn(t.w,.2,64,3),h:gn(t.h,.12,36,.5),d:gn(t.d,.2,64,3),pitch:s?0:gn(t.pitch,-70,70,0),yaw:s?0:gn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(gn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:gn(t.grip,0,1.5,.8),gravity:gn(t.gravity,.05,2.5,1),bounce:gn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function Mh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Ox(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,f=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,d=m=>Math.round(m/i)*i,h=d(n.x+u.x*f),p=d(n.y+u.y*f),x=d(n.z+u.z*f),g=f-(h-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return h+=u.x*g,p+=u.y*g,x+=u.z*g,![h,p,x].every(Number.isFinite)||Math.abs(h)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:h,y:p,z:x}}var rl="gorilla-lab-custom-map-v1";function zx(n){let e=new Blob([JSON.stringify(_h(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function Vx({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new pt;n.add(l);let c=[],u=[],f=new Pa,d=new Map,h=0,p=null,x="",g=-1,m=-1,b="",w="",v=new tt(1,1,1),A=new Ne(v,new mt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let P=new Ui,D=new M,U=new M,S=document.querySelector("#map-note");function _($){b=$,S.textContent=$}function C(){u.length>=20&&u.shift(),u.push(JSON.stringify(p))}function N($,re){let me=d.get($);if(!me){me={materials:new Set,texture:null,failed:!1},d.set($,me);let Le=H=>{if(!(d.get($)!==me||me.failed)){me.failed=!0;for(let te of me.materials)te.map=null,te.needsUpdate=!0;me.texture?.dispose(),H&&_(H)}},E=f.load($,H=>{(H.image.width>2048||H.image.height>2048)&&Le("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>Le());me.texture=E,E.colorSpace=yt,E.wrapS=E.wrapT=di}return me.materials.add(re),re.map=me.failed?null:me.texture,me}function F(){for(let[$,re]of d)re.materials.size||(d.delete($),re.failed||re.texture.dispose())}function G($){let re=e.mapMaterial($.material,r());if(!$.texture&&$.color==="#ffffff")return{material:re,custom:!1};let me=re.clone();return me.onBeforeCompile=re.onBeforeCompile,me.customProgramCacheKey=re.customProgramCacheKey,me.color.multiply(new Be($.color)),{material:me,custom:!0,ownTexture:$.texture?N($.texture,me):null}}function X($){l.remove($.mesh),$.mesh.geometry.dispose(),$.vegetation&&G0($.vegetation),$.custom&&($.ownTexture?.materials.delete($.mesh.material),$.mesh.material.dispose())}function z($,re){let{material:me,custom:Le,ownTexture:E}=G($),H=new Ne($.terrain?z0($):sh($.w,$.h,$.d),me);H.position.set($.x,$.y,$.z),H.rotation.set(qe.degToRad($.pitch),qe.degToRad($.yaw),0,"YXZ"),H.castShadow=H.receiveShadow=!0,H.userData.mapIndex=re,l.add(H);let te=new M($.w/2,$.h/2,$.d/2),J={mesh:H,position:H.position,quaternion:H.quaternion,half:te,min:te.clone().negate(),shape:Gi(te),friction:$.grip,gravity:$.gravity,bounce:$.bounce,zone:!0,type:$.material};if(!$.terrain)return{mesh:H,collider:J,custom:Le,ownTexture:E};let I=k0($);return I&&H.add(I),{mesh:H,collider:V0($,H),custom:Le,ownTexture:E,vegetation:I}}function Y(){for(let $ of c){let re=p?.pieces[$.mesh.userData.mapIndex];if(!re||$.ownTexture)continue;let me=e.mapMaterial(re.material,r());$.custom?$.mesh.material.map!==me.map&&($.mesh.material.map=me.map,$.mesh.material.needsUpdate=!0):$.mesh.material=me}}function B(){for(let re of c)X(re);c.length=0;let $=p?.pieces??[];x=p?"custom-"+Ys(JSON.stringify(p)):"",o.forEach(re=>re.visible=!p);for(let re=0;re<$.length;re++)c.push(z($[re],re));if(F(),p?e.boxes.splice(0,e.boxes.length,...c.filter((re,me)=>$[me].solid).map(re=>re.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),p)try{localStorage.setItem(rl,JSON.stringify(p))}catch{}else try{localStorage.removeItem(rl)}catch{}}function ce($){let re=_h($);h++,u.length=0,p=re,g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),i(p.spawn.yaw),_("Map : "+p.name+" \xB7 "+p.pieces.length+" pi\xE8ces")}function he(){h++,p=null,u.length=0,g=m=-1,t.set(0,0,3),B(),i(0),_("Ar\xE8ne int\xE9gr\xE9e")}function ie(){ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Mh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function se(){if(!u.length)return _("Rien \xE0 annuler.");p=_h(u.pop()),g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),_("Derni\xE8re modification annul\xE9e.")}function be(){p?zx(p):_("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Ce($,re,me,Le){p&&(C(),p.spawn={x:$,y:re,z:me,yaw:qe.radToDeg(Le)},t.set($,re,me),B(),_("Point de d\xE9part m\xE9moris\xE9."))}function ye($,re,me,{mode:Le,piece:E,head:H,feet:te}){P.set($,re),P.far=12;let J=P.intersectObjects(c.map(T=>T.mesh),!1),I=Le>=5?J.find(T=>p?.pieces[T.object.userData.mapIndex]?.terrain):J[0];if(A.visible=!1,!p)return;if(Le>=5){let T=I?.object.userData.mapIndex,y=p.pieces[T];if(!y?.terrain||!me)return;if(C(),Le===9){let L=E.terrain?.detail??y.terrain.detail,q=B0(y.terrain,L);y.terrain=po({...q,...E.terrain,heights:q.heights})}else{let L={mode:["raise","lower","smooth","flatten"][Le-5],radius:E.brushRadius,strength:E.brushStrength,target:y.y};O0(y,I.point.x,I.point.z,L)}B(),_("Relief modifi\xE9.");return}if(Le===2||Le===3||Le===4){if(!I)return;let T=I.object.userData.mapIndex,y=p.pieces[T];if(me&&Le===2&&(g=T,m=T,_("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),me&&Le===3){if(p.pieces.length===1)return _("Garde au moins une pi\xE8ce dans la map.");C(),p.pieces.splice(T,1),g=m=-1,B(),_("Pi\xE8ce supprim\xE9e.")}me&&Le===4&&(C(),Object.assign(p.pieces[T],{material:E.material,grip:E.grip,gravity:E.gravity,bounce:E.bounce,solid:E.solid,texture:E.texture}),B(),_("Surface modifi\xE9e.")),I&&(A.position.copy(I.object.position),A.rotation.copy(I.object.rotation),A.scale.set(y.w,y.h,y.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(Le===3?"#ff8271":"#ffe2a2"));return}if(!I)return;let W=m>=0?p.pieces[m]:E;if(I.object.userData.mapIndex===m)return;D.copy(I.face.normal).transformDirection(I.object.matrixWorld);let O=W.terrain?{...W,x:Math.round(I.point.x*2)/2,y:I.point.y,z:Math.round(I.point.z*2)/2,pitch:0,yaw:0}:Ox(I.point,D,W);if(!O)return;A.position.set(O.x,O.y,O.z),A.rotation.set(qe.degToRad(O.pitch),qe.degToRad(O.yaw),0,"YXZ"),A.scale.set(O.w,O.h,O.d),A.updateMatrixWorld(!0),A.visible=!0;let ee=new rn().setFromObject(A),fe=new rn(new M(H.x-.26,te+.01,H.z-.26),new M(H.x+.26,H.y+.19,H.z+.26)),de=O.solid&&ee.intersectsBox(fe);if(A.material.color.set(de?"#fd7763":"#8be4b9"),me){if(de)return _("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(m<0&&p.pieces.length>=sl)return _("Limite de "+sl+" pi\xE8ces atteinte.");C(),m>=0?(p.pieces[m]=O,m=-1):p.pieces.push(O),B(),_("Pi\xE8ce pos\xE9e \xB7 "+p.pieces.length+" pi\xE8ces")}}let Q=document.querySelector("#map-file"),ne=document.querySelector("#map-url");Q.onchange=async()=>{let $=Q.files[0];if(!$)return;let re=++h;Q.value="";try{if($.size>vh)throw Error("Map trop lourde.");let me=await $.text();re===h&&ce(me)}catch(me){re===h&&_(me.message)}};async function _e($){let re=++h;try{let me=new URL($,location.href);if(!["http:","https:"].includes(me.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let Le=await fetch(me,{credentials:"omit"});if(re!==h)return;if(!Le.ok)throw Error("URL de map inaccessible ("+Le.status+").");if(Number(Le.headers.get("content-length"))>vh)throw Error("Map trop lourde.");let H=await Le.text();re===h&&ce(H)}catch(me){re===h&&_(me.message)}}return document.querySelector("#map-load-url").onclick=()=>_e(ne.value),document.querySelector("#map-export").onclick=be,document.querySelector("#map-reset").onclick=he,{modelPieces:()=>p?.pieces.filter($=>!$.terrain&&$.name!=="Sol")??[],refreshMaterials:Y,load:ce,loadURL:_e,reset:he,blank:ie,undo:se,save:be,edit:ye,recenter:Ce,inform:_,clearGhost(){A.visible=!1},get active(){return!!p},get status(){return b},get yaw(){return p?.spawn.yaw??0},get nodes(){return p?.pieces.length??0},get name(){return p?.name??null},get signature(){return x}}}var ap=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function kx(){let n=new Ne(new Zt(2,2),new cn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+ap+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Gx(n){let e=new Fs,t=new Gt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Ae(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},s=new cn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+ap+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),r=new Ne(new Zt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,f,d)=>{let h=Math.max(0,l.indexOf(d)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,f,{bloom:d,visibleField:h}){if(n.xr.updateCamera(f),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=d?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let w=l[b],v=Math.max(32,Math.round(w.viewport.z)),A=Math.max(32,Math.round(w.viewport.w)),P=a[b];P?(P.width!==v||P.height!==A)&&P.setSize(v,A):P=a[b]=new Tn(v,A,{type:o?gi:zn,minFilter:on,magFilter:on,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=b===0&&g,n.setRenderTarget(P),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,f)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Hx(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Wx(n,e,t){let i=new $t({color:16777215,vertexColors:!0,flatShading:!0}),s=new Ht(.16,.25,3.15,9,12),r=s.attributes.position,o=new Be,a=[];for(let ie=0;ie<r.count;ie++){let se=Math.round((r.getY(ie)+1.575)/3.15*12),be=Math.floor((Math.atan2(r.getX(ie),r.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+se*.002,.35,.35+se%3*.032+be%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new ke(a,3));let l=new pt;l.position.set(Xd.x,0,Xd.z),l.rotation.z=-.14,n.add(l);let c=new Ne(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,se,be=.85){let Ce=ie.getWorldPosition(new M),ye=ie.getWorldQuaternion(new je);e.push({half:se,min:se.clone().negate(),position:Ce,quaternion:ye,mesh:{position:Ce,quaternion:ye},shape:Gi(se),friction:be,gravity:1})}for(let ie=0;ie<4;ie++){let se=new Lt;se.position.y=(ie+.5)*3.15/4,l.add(se);let be=.237-ie*.022;u(se,new M(be,.398,be))}let f=[],d=[],h=3.14;function p(ie,se,be,Ce){f.push(...ie,...se,...be),o.setHSL(.25+Ce*.043,.54,.28+Ce*.17);for(let ye=0;ye<3;ye++)d.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let Ce=function(ye,Q){let ne=ye*be;return[Math.cos(se)*ne-Math.sin(se)*Q,h+Math.sin(ye*Math.PI)*.38-ye*ye*.54+ie%3*.055,Math.sin(se)*ne+Math.cos(se)*Q]},se=ie*2.39996,be=1.35+ie%4*.2;for(let ye=0;ye<7;ye++){let Q=ye/7,ne=(ye+1)/7,_e=.285*Math.sin(Math.PI*Q)**.7,$=.285*Math.sin(Math.PI*ne)**.7;for(let re of[-1,1]){let me=Ce(Q,_e*re),Le=Ce(ne,$*re);me[1]-=.065,Le[1]-=.065,p(Ce(Q,0),me,Le,.31+ye%4*.14),p(Ce(Q,0),Le,Ce(ne,0),.47+ie%3*.16)}}}let x=new et;x.setAttribute("position",new ke(f,3)),x.setAttribute("color",new ke(d,3)),x.computeVertexNormals();let g=new Ne(x,new $t({vertexColors:!0,side:Wt,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new St({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let ie=0;ie<5;ie++){let se=ie*Math.PI*2/5,be=new Ne(new Dt(.124,1),m);be.position.set(Math.cos(se)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(se)*(.25+ie%2*.1)),be.scale.set(.91,1.16,.91),be.castShadow=!0,l.add(be),b.push(be)}l.updateMatrixWorld(!0);let w=[],v=[],A=new $t({color:"#485d5d",flatShading:!0});function P([ie,se],be,Ce){let ye=new Ne(new tt(.095,.68,.11),A);ye.position.set(ie,.34,se+.46),ye.castShadow=ye.receiveShadow=!0,n.add(ye),u(ye,new M(.0475,.34,.055));let Q=new pt;Q.position.set(ie,.85,se+.4),Q.rotation.x=-.35,n.add(Q);let ne=new Ne(new tt(.64,.36,.055),new $t({color:"#182831"}));Q.add(ne);let _e=document.createElement("canvas");_e.width=512,_e.height=96;let $=_e.getContext("2d"),re=new Xn(_e);re.colorSpace=yt;let me=new Ne(new Zt(.61,.095),new mt({map:re}));me.position.set(0,.116,.03),Q.add(me);let Le=.592/Ce.length,E=Ce.map(([te,J],I)=>{let W=new Ne(new tt(Le-.012,.155,.04),new $t({color:"#478086"}));W.position.set(-.296+Le*(I+.5),-.045,.046),Q.add(W),w.push(W),W.userData.touchWidth=Le-.012;let O=document.createElement("canvas");O.width=208,O.height=172;let ee=new Xn(O);ee.colorSpace=yt;let fe=new Ne(new Zt(Le-.017,.139),new mt({map:ee}));fe.position.z=.0205,W.add(fe);let de=-1/0;return W.userData.action=()=>{let T=performance.now();T-de<250||(de=T,J(),D(),W.position.z=.036,setTimeout(()=>{W.position.z=.046},115))},{label:te,context:O.getContext("2d"),texture:ee}});function H(){$.fillStyle="#182831",$.fillRect(0,0,512,96),$.fillStyle="#ffe1a0",$.font="bold 38px system-ui",$.fillText(be,17,62,478);for(let te of E){let J=te.context;J.fillStyle="#386269",J.fillRect(0,0,208,172),J.fillStyle="#fff2d5",J.textAlign="center",J.font="bold 27px system-ui";let I=(typeof te.label=="function"?te.label():te.label).split("|");I.forEach((W,O)=>J.fillText(W,104,(I.length>1?68:97)+O*37,188)),te.texture.needsUpdate=!0}re.needsUpdate=!0}v.push(H)}function D(){for(let ie of v)ie()}P(xo.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,yo[0])],["Boule",()=>t.spawn(1,yo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,yo[0])],["Vider",t.clear]]),P(xo.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,yo[1])],["Sph\xE8re",()=>t.spawn(5,yo[1])]]),P(xo.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),P(xo.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),P(xo.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),D();let U=new pt,{x:S,y:_,z:C}=Yd;U.position.set(S,_,C),n.add(U);let N=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let se=[.9,.58,.27][ie],be=new Ne(new Kt(se,20),new $t({color:N[ie],side:Wt}));be.position.z=ie*.012,U.add(be)}let F=new Ne(new tt(.14,1.5,.14),A);F.position.set(0,.75-_,-.11),U.add(F);let G=0,X=document.createElement("canvas");X.width=256,X.height=64;let z=X.getContext("2d"),Y=new Xn(X);Y.colorSpace=yt;let B=new Ne(new Zt(1.4,.35),new mt({map:Y,side:Wt}));B.position.set(0,2.64-_,.02),U.add(B);function ce(){z.fillStyle="#182831",z.fillRect(0,0,256,64),z.textAlign="center",z.font="bold 28px system-ui",z.fillStyle="#fff0ce",z.fillText("CIBLE  \xB7  "+G,128,42),Y.needsUpdate=!0}function he(ie){for(let se of ie){if(!se.beforePhysics||se.owner||se.frozen||!se.mesh.visible)continue;let be=se.beforePhysics,Ce=se.mesh.position;if(be.z<=C||Ce.z>C||se.velocity.z>=-1)continue;let ye=(be.z-C)/(be.z-Ce.z),Q=Math.hypot(qe.lerp(be.x,Ce.x,ye)-S,qe.lerp(be.y,Ce.y,ye)-_);Q<=.9+se.radius*.45&&(G+=Q<.27?3:Q<.58?2:1,ce())}}return ce(),{targets:w,coconuts:b,redraw:D,updateTarget:he,score:()=>G,setScore(ie){G=ie,ce()}}}function ol(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var ds=(n,e,t)=>n+(e-n)*t,Ao=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function bh(n,e){let t=Math.floor(n),i=Math.floor(e),s=Ao(0,1,n-t),r=Ao(0,1,e-i);return ds(ds(ol(t,i),ol(t+1,i),s),ds(ol(t,i+1),ol(t+1,i+1),s),r)}function qx(n,e){return bh(n,e)*.54+bh(n*2.07+3.4,e*2.07-6.1)*.26+bh(n*4.2+9,e*4.2)*.13+bh(n*8.6,e*8.6-13)*.07}function Xx(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),f=Math.max(0,c),d=f**.54,h=r.map((p,x)=>ds(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,b=0;if(c>.025)if(n){let v=ol(p+792,l+677);v>.9988&&(b=(v-.9988)*49e3*Ao(.09,.3,c))}else{let[v,A]=s[p],P=2.8*u/(c+.16),D=v*P+3.6,U=A*P-8.1,S=qx(D,U),_=qx(D-.12,U-.09);g=Ao(.49,.66,S)*Ao(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-_)*5+(S-.54)*.8))}let w=n?1:ds(.94,1,Ao(.05,.34,c));i[x]=ds(h[0],(139+115*m)*w,g)+b,i[x+1]=ds(h[1],(154+100*m)*w,g)+b*.94,i[x+2]=ds(h[2],(178+77*m)*w,g)+b*.86,i[x+3]=255}}let a=new pi(i,1024,512,En);return a.colorSpace=yt,a.wrapS=di,a.magFilter=an,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Yx(){return{day:Xx(!1),night:Xx(!0)}}function Sh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Xn(i);return s.colorSpace=yt,s}function Zx(n,e){let{day:t,night:i}=Yx(),s=new Ne(new Li(180,40,20),new mt({map:t,side:un,fog:!1,toneMapped:!1}));n.add(s);let r=Sh(128,128,(y,L)=>{let q=y.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);q.addColorStop(0,"#fff8df"),q.addColorStop(.12,"#fff3bd"),q.addColorStop(.18,"rgba(255,225,144,.40)"),q.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=q,y.fillRect(0,0,L,L)}),o=new ca(new Vr({map:r,blending:Yn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Jr,a.needsUpdate=!0;let l=new io(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Ia("#daeaff","#88724c",2.25),u=new Ua("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let f=new M,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=d[y]?y:0;let L=d[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,f.set(...L.xyz),u.position.copy(u.target.position).add(f),o.position.copy(f).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=h===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let L=u.target.position,q=Math.round(y.x/4)*4,oe=Math.round(y.y/4)*4,Z=Math.round(y.z/4)*4;L.x===q&&L.y===oe&&L.z===Z||(L.set(q,oe,Z),u.position.copy(L).add(f))}let g=0;n.background=new Be(d[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(y,L,q){let[,oe,Z]=m[L],ge=512;y.save(),y.scale(q/512,q/512),y.fillStyle=oe,y.fillRect(0,0,ge,ge);let pe=L+19;function Me(){return pe=Math.imul(pe,1664525)+1013904223>>>0,pe/4294967296}if(y.fillStyle=Z,L===16){for(let ve=0;ve<16;ve++)for(let ue=0;ue<16;ue++)(ue+ve)%2===0&&y.fillRect(ue*32,ve*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let ve=L===15?32:64;y.globalAlpha=.48;for(let ue=0;ue<ge;ue+=ve){y.fillRect(0,ue,ge,L===8?3:2);for(let Se=-ve;Se<ge;Se+=ve)y.fillRect(Se+ue/ve%2*(L===2?ve/2:0),ue,2,ve)}}else if([4,5,6,7,10,11,12].includes(L)){let ve=L===5?38:L===7?64:18;for(let ue=0;ue<ve;ue++){y.strokeStyle=Z,y.globalAlpha=.08+Me()*.22,y.lineWidth=L===5?1+Me()*8:1+Me()*4;let Se=Me()*ge,Oe=L===5?.018:.009;y.beginPath();for(let we=0;we<=ge;we+=8){let Re=Se+Math.sin(we*Oe+ue)*(L===6||L===7?4:12+ue%5*3)+(L===4?we*.28:0);we===0?y.moveTo(we,Re):y.lineTo(we,Re)}y.stroke()}}else{y.globalAlpha=.27;for(let ve=0;ve<120;ve++){let ue=Me()*ge,Se=Me()*ge,Oe=2+Me()*6;y.beginPath(),y.arc(ue,Se,Oe,0,Math.PI*2),y.fill()}}if(L!==16)for(let ve=0;ve<4400;ve++)y.globalAlpha=.05+Me()*.1,y.fillStyle=Me()>.5?Z:"#222324",y.fillRect(Me()*ge,Me()*ge,1+Me()*4,1+Me()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=m.map(([y,L,q,oe,Z,ge],pe)=>{let Me=w.has(pe)?512:256,ve=Sh(Me,Me,Se=>b(Se,pe,Me));ve.wrapS=ve.wrapT=di;let ue=new St({map:ve,roughness:oe,metalness:Z,flatShading:!0,opacity:ge,transparent:ge<1,depthWrite:ge===1});return ue.name=y,ue}),A=v.map(y=>y.map.image),P=512,D=v.map(y=>new $t({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),U={value:0},S={value:.24},_={value:null},C={value:0};function N(){_.value?.dispose(),_.value=Sh(512,512,(y,L)=>{y.fillStyle="#ffffff",y.fillRect(0,0,L,L);let q=L/52,oe=L/64;for(let Z of F){if(!Z.position||!Z.half||Z.position.y+Z.half.y<.22)continue;let ge=(Z.position.x+26)*q,pe=(Z.position.z+54)*oe,Me=Math.min(55,Z.half.x*q+5),ve=Math.min(72,Z.half.z*oe+6);y.save(),y.translate(ge+Z.half.y*q*.2,pe+Z.half.y*oe*.24),y.scale(Me,ve);let ue=y.createRadialGradient(0,0,.15,0,0,1);ue.addColorStop(0,"rgba(22,37,65,.54)"),ue.addColorStop(.58,"rgba(36,54,76,.29)"),ue.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ue,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...D])y.onBeforeCompile=L=>{L.uniforms.uFocusAmount=U,L.uniforms.uFocusRadius=S,L.uniforms.uLabLightmap=_,L.uniforms.uLabBakedStrength=C,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let F=[],G=[];function X(y,L,q,oe,Z,ge,pe,Me=0,ve=0,ue=1,Se=1,Oe=!1){let we=new Ne(Oe?new tt(Z,ge,pe):sh(Z,ge,pe),v[Me]);we.position.set(L,q,oe),we.rotation.x=ve,we.receiveShadow=!0,we.castShadow=!0,n.add(we);let Re=new M(Z/2,ge/2,pe/2),He={mesh:we,position:we.position,quaternion:we.quaternion,half:Re,min:Re.clone().negate(),friction:ue,gravity:Se,name:y,type:Me,shape:Gi(Re)};return F.push(He),He}let z=px.map(({name:y,bounds:L,type:q=0,friction:oe=.78,gravity:Z=1})=>{let{xMin:ge,xMax:pe,zMin:Me,zMax:ve}=L;return X(y,(ge+pe)/2,-.33,(Me+ve)/2,pe-ge,.66,ve-Me,q,0,oe,Z)});for(let y of Object.values(gx))for(let L of y)X(...L);let{xMin:Y,xMax:B,zMin:ce,zMax:he}=dx;X("But\xE9e arri\xE8re",0,1.35,ce+.4,B-Y,2.7,.6,2),X("But\xE9e ouest",Y+.3,1.05,(ce+he)/2,.6,2.1,he-ce,2),X("But\xE9e est",B-.3,1.05,(ce+he)/2,.6,2.1,he-ce,2);let{xMin:ie,xMax:se,zMin:be,zMax:Ce}=go.hills.bounds,ye=se-ie,Q=Ce-be,ne=16,_e=64,$=new Zt(ye,Q,ne,_e).rotateX(-Math.PI/2).translate(ie+ye/2,0,be+Q/2),re=$.attributes.uv;for(let y=0;y<re.count;y++)re.setXY(y,re.getX(y)*ye/2.6,re.getY(y)*Q/2.6);let me=$.attributes.position,Le;function E(y){if(Le===y)return;Le=y;let L=Le*.017;for(let q=0;q<me.count;q++){let oe=me.getX(q),Z=me.getZ(q),ge=Math.sin(Math.PI*qe.clamp((oe-ie)/ye,0,1)),pe=Math.min(1,(Z-be)*.48,(Ce-Z)*.48),Me=.93+.56*Math.sin(Z*.36+L)+.32*Math.cos(oe*.67+Z*.26+L*1.4)+.19*Math.sin(Z*.81+L*.67);me.setY(q,Math.max(0,ge*pe*Me))}me.needsUpdate=!0,$.computeVertexNormals(),$.computeBoundingSphere()}E(Math.floor(Math.random()*1e6));let H=new Ne($,v[3]);H.receiveShadow=H.castShadow=!0,n.add(H);let te=(y,L)=>{let q=qe.clamp((y-ie)/ye*ne,0,ne-1e-6),oe=qe.clamp((L-be)/Q*_e,0,_e-1e-6),Z=Math.floor(q),ge=Math.floor(oe),pe=q-Z,Me=oe-ge,ve=ne+1,ue=ge*ve+Z,Se=me.getY(ue),Oe=me.getY(ue+1),we=me.getY(ue+ve),Re=me.getY(ue+ve+1);return pe+Me<=1?Se+(Oe-Se)*pe+(we-Se)*Me:Re+(we-Re)*(1-pe)+(Oe-Re)*(1-Me)};F.push({heightfield:!0,mesh:H,height:te,...go.hills.bounds,friction:.81,gravity:1});function J(y,L,q,oe,Z=1.45){let ge=Sh(384,72,(Me,ve,ue)=>{Me.fillStyle="#202a32",Me.fillRect(0,0,ve,ue),Me.fillStyle=oe,Me.font="bold 31px system-ui",Me.textAlign="center",Me.fillText(y,ve/2,48,ve-20)}),pe=new Ne(new Zt(3.2,.6),new mt({map:ge,side:Wt}));pe.position.set(L,Z,q),n.add(pe),G.push(pe)}for(let y of Object.values(go)){J(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:L,xMax:q,zMin:oe,zMax:Z}=y.bounds,ge=new da(new et().setFromPoints([new M(L,.025,oe),new M(q,.025,oe),new M(q,.025,Z),new M(L,.025,Z)]),new ns({color:y.color,transparent:!0,opacity:.72}));n.add(ge),G.push(ge)}J("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),J("MURS HAUTS",3,-31,"#e8d2ff"),J("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let I=new St({color:"#c8e6ed",metalness:1,roughness:.16}),W=new Ne(new Dt(.54,2),I);W.position.set(ih.x,ih.y,ih.z),W.castShadow=!0,n.add(W);let O=m.map((y,L)=>{let{x:q,z:oe}=mx(L);return X("\xC9chantillon "+m[L][0],q,.325,oe,.65,.65,.65,L,0,1,1,!0).mesh}),ee=new Kt(1,12).rotateX(-Math.PI/2),fe=new mt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function de(y){let L=new Ne(ee,fe);return L.scale.setScalar(y),n.add(L),L}function T(y,L,q,oe,Z,ge,pe,Me){let ve=L>=3;e.shadowMap.enabled=ve,u.castShadow=ve,fe.opacity=L===2?.17:.11,C.value=Me?.38+q*.04:0;let ue=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Se=13+L*1.2;Object.assign(u.shadow.camera,{left:-Se,right:Se,top:Se,bottom:-Se}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ue&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ue,ue)),o.visible=Z,pe!==P&&(P=pe,v.forEach((we,Re)=>{let He=we.userData.texture??we.map,k=w.has(Re)?pe:Math.min(256,pe);if(He.image.width===k)return;let Ee=document.createElement("canvas");Ee.width=Ee.height=k;let Ie=Ee.getContext("2d");k>512?b(Ie,Re,k):Ie.drawImage(A[Re],0,0,k,k);let Fe=new Xn(Ee);Fe.colorSpace=He.colorSpace,Fe.wrapS=He.wrapS,Fe.wrapT=He.wrapT,Fe.repeat.copy(He.repeat);for(let Te of[we,D[Re]])Te.userData.texture=Fe,Te.map=Fe,Te.needsUpdate=!0;He.dispose()}));let Oe=y>=4;for(let we of F)we.mesh?.isMesh&&!we.zone&&(we.mesh.material=Oe?v[we.type]:D[we.type]);H.material=Oe?v[3]:D[3];for(let we=0;we<O.length;we++)O[we].material=Oe?v[we]:D[we];v.forEach((we,Re)=>{for(let He of[we,D[Re]])He.userData.texture||(He.userData.texture=He.map),He.map=ge?He.userData.texture:null,He.color.set(ge?"#ffffff":m[Re][1]),He.needsUpdate=!0}),g=oe?.21+q*.067:0,I.metalness=oe?.95:.1,I.roughness=oe?.13:.46,s.visible=y>=2,p(h)}return{boxes:F,floors:z,probe:W,display:O,visual:T,shadow:de,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Le},setHillSeed:E,bakeLightmap:N,mapMaterial:(y,L)=>L>=4?v[y]:D[y],builtObjects:[...F.map(y=>y.mesh).filter(y=>y?.isObject3D),W,...G],materials:[...v,...D],focus(y,L,q){U.value=y?L*.75:0,S.value=.07+q*.058}}}var ps=document.getElementById("game");ps instanceof HTMLCanvasElement||(ps=document.createElement("canvas"),ps.id="game",ps.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(ps));var ar=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ke;try{Ke=new Iu({canvas:ps,antialias:!ar,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ke.xr.enabled=!0;Ke.xr.setReferenceSpaceType("local-floor");Ke.shadowMap.type=Na;Ke.shadowMap.autoUpdate=!1;var jx=-1/0;Ke.toneMapping=Gc;Ke.toneMappingExposure=1.15;var Et=new Fs;Et.fog=new aa("#a6d4ea",55,135);var ht=new pt,zh=new pt,Yt=new Gt(70,1,.035,210);ht.add(zh);zh.add(Yt);Et.add(ht);var wt=Zx(Et,Ke),LT=Gx(Ke),Rh=kx();Et.add(Rh);var DT=Hx(wt.probe),V=K0(ar),UT={...V},Ap=new M(th.x,th.y,th.z);ht.position.copy(Ap);var Pn=new M,al=new M,Rt=new M,Jx=new M,Jn=new M,jn=new M,Kx=new M,ms=new M,tr=new M,$x=new M,lp=new M,Qx=new M,wh=new M,ey=.105,ty=new M,Ph=!1,sr=!1,FT=new je,NT=new M(0,0,1),Ep=0,Cp=null,hl=[],Rp=100,Ft=new M(0,1,0),_i=new je,gt=0,Wi=0,gs=0,li=0,Io=NaN,Ih=!1,cp=0,rr=0,up=0,Th=0,Co=0,Ro=0,Po=0,en=V.quality,fl=72,qt=!1,Sy="left",_t=new URLSearchParams(location.search).has("room")?5:0,Pp=0,Ip=0,Lp=0,Qt=!0,ny=0,BT=[],Ah=[],Ms=wt.boxes,OT=new Dt(1,0),wy=1+Math.floor(Math.random()*(Du.length-1)),Ty=Uu(wy),{hand:zT,fur:VT}=Ty;function kT(n,e,t,i,s,r,o,a){let l=new Ne(OT,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var Vh=Wd(localStorage),GT=Vh.models.length?"|atelier-"+Ys(JSON.stringify(Vh)):"",_s=fx(Vh)??Ty.createHead();_s.visible=!1;Et.add(_s);var nr=new M,Lh=new je,iy=new M,sy=new M,ry=new ln(0,0,0,"YXZ"),ll=0,hp=new je,oy=[null,null];function kh(){return .24+V.arms*.036}function HT(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=qe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=qe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=qe.lerp(r[2],i,s),n.skin.pose(r,!V.body)}var Xt=["left","right"].map(n=>{let e=Nu(n,zT,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Et.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new je},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new je,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Dh=new qu(M,Xt,Ax),Ay=Bu(VT,Xt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Xt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var xs=Ay.mesh;Et.add(xs);function WT(n,e){if(V.body){hp.copy(xs.quaternion).invert();for(let t=0;t<Xt.length;t++){let i=Xt[t];oy[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(xs.position).applyQuaternion(hp),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(hp))}Ay.pose(oy,kh(),n,e,V.hands)}}var Ln=[["Cube",new tt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Dt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ea(.29),"#d8ae53",0,1],["Brique",new tt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new tt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Dt(.6,2),"#dbab58",.6,3.7],["Coco",new Dt(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:To(e,i),material:new St({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:Gi(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of nx()){let i=To(n??t.geo,e);Ln.push({...t,shape:i,lowShape:i})}var Ey=[0,1,2,3,4,5],Cy=[7,8,9,10,11,12,13,14],vl=15,ay=Gi(new M(.13,.088,.115)),qT=new tt(.26,.176,.23),XT=new St({color:"#536771",roughness:.36,metalness:.28});Ln[vl]={name:"Cam\xE9ra du spectateur",geo:qT,material:XT,shape:ay,lowShape:ay,mass:1.2};var{props:YT,animate:ZT}=sx(),jT=hx(Vh).slice(0,36),Dp=[],pl=[];function Ry(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=To(t??s.geo,i);e.push(Ln.length),Ln.push({...s,shape:r,lowShape:r})}}Ry(YT,Dp);Ry(jT,pl);var Up=[...Ey,...Cy,...Dp,...pl];Ln[8].properties={supportWhileHeld:!0};Ln[11].properties={supportWhileHeld:!0};function JT(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Ln)n.supportAxis=JT(n);function KT(n){let e=new Ne(new Ht(.058,.074,.1,12).rotateX(Math.PI/2),new St({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Ne(new Kt(.048,12),new mt({color:"#7bd7ed",side:Wt}));t.position.z=-.203,n.add(t);let i=new Ne(new tt(.045,.013,.012),new mt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function Py(n,e=!1){let t=Ln[n];if(!t)return null;let i=new Ne(t.geo,e?eh(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===vl&&KT(i),i}var At=[],$T=[],bs={held:null},Do=new Map,qi=0,QT=1,ir=new je,ml=new je,cl=new M,Gh=new M,ys=new M,yp=new M,vp=new M;function eA(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Gh.set(0,0,-1).applyAxisAngle(Ft,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(cl.copy(n).addScaledVector(Gh,r),cl.y+=.15,!wo(n,cl,Math.min(.2,t*.5),Ms,yp,vp)&&!At.some(o=>o.mesh.position.distanceToSquared(cl)<(t+o.radius+.07)**2))return cl}}return null}function Fo(n,e,t,i=!1){let s=Ln[n];if(!s)return null;if(!e&&(t?ys.set(t.x,t.y,t.z):Ke.xr.isPresenting?ys.copy(Rt):Yt.getWorldPosition(ys),e=eA(ys,t?.yaw??Wi,s.shape.radius),!e))return i||ai("Aucun espace libre pour cet objet."),null;let r=Py(n);r.position.copy(e),Et.add(r);let o=V.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:QT++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:V.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new je,shadow:wt.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===vl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),At.push(a),il(a,wt.boxes),a}function Iy(){for(let n of Xt)ci(n,!1);ci(bs,!1);for(let n of Do.values())ci(n,!1)}function Jh(){Iy();for(let n of At)Et.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();At.length=0,Do.clear()}function Ly(){Up.slice(0,qd.length).forEach((n,e)=>{let{x:t,z:i}=qd[e];Fo(n,new M(t,.8,i))})}Ly();function ci(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+V.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function _l(){Iy();for(let n of At)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function Yi(){$h.reset(),ht.position.copy(Ap),gt=qe.degToRad(ft.yaw),gs=0,ht.rotation.y=gt,Pn.set(0,0,0),Ih=!1,sr=!1,Ph=!1,Dh.reset();for(let n of Xt)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,ci(n,!1)}_l();function Dy(){return V.auto||ar&&!Ke.xr.isPresenting}function Hh(){return Dy()?Math.min(V.shadowQuality,en):V.shadowQuality}function gl(){return Dy()?Math.min(V.lightQuality,en):V.lightQuality}function Mi(){let n=V.texturePower;wt.visual(en,V.shadows?Hh():0,gl(),V.reflections,V.bloom,V.textures,2**(n-1),V.lightmap),ft.refreshMaterials?.(),Ke.shadowMap.needsUpdate=!0,wt.setTimeOfDay(Ye.remoteLight??V.timeOfDay-1),Mp=qh.slice(0,gl()>=8?3:gl()>=4?2:1),Qp.value=V.shaderMode-1;let e=Ke.xr.isPresenting&&Ke.xr.getBaseLayer?.()?.fixedFoveation!=null;wt.focus(V.focus&&!e,V.focusStrength,V.focusSize),Ke.toneMappingExposure=.58+V.exposure*.114,ev.value=.55+V.contrast*.09,tv.value=V.saturation*.2,nv.value=(V.warmth-5)*.022,Ke.xr.setFoveation(V.focus?qe.clamp((V.focusStrength+1)*.105+(5-V.focusSize)*.028+(V.auto?(7-en)*.045:0),0,1):0),Ke.xr.isPresenting||Ml(),Qt=!0,Mn.redraw()}var ly=0,cy=0,uy=0;function Ml(){if(Ke.xr.isPresenting)return;let n=Math.max(1,ps.clientWidth||innerWidth),e=Math.max(1,ps.clientHeight||innerHeight),t=Y0(en,devicePixelRatio,ar);t!==uy&&(Ke.setPixelRatio(t),uy=t),(n!==ly||e!==cy)&&(Ke.setSize(n,e,!1),ly=n,cy=e),Yt.aspect=n/e,Yt.fov=V.viewFov,Yt.updateProjectionMatrix()}addEventListener("resize",Ml);globalThis.visualViewport?.addEventListener("resize",Ml);function tA(n){Object.assign(V,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Yu[n]),en=V.quality,Ro=Po=Co=0,Mi()}var lr=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",Yi]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",jp]]],["Rendu",[]]],Fp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Np(){return _t===2?Fp[Pp][1]:_t===3?Ny[Ip][1]:_t===4?Gp[Lp][1]:lr[_t][1]}function Uy(n){_t=n,Qt=!0}var Wh=null,Bp=[],Uh=0,_p=0,Op=null,zp=!1,Vp=0,kp=0,Fy={},qh=Array.from({length:3},()=>{let n=new La("#ffffff",0,22,1.6);return n.visible=!1,Et.add(n),{light:n,mesh:null,distance:1/0}}),Mp=qh,Xh=new M;function hy(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(Xh);if(e>34**2)return;let t=Mp[0];for(let i of Mp)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function nA(n){n?Yt.getWorldPosition(Xh):Xh.copy(Rt);for(let t of qh)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(hy);else if(V.objects)for(let t of At)t.materialStyle===3&&hy(t.mesh);let e=20+gl()*.75;for(let{light:t,mesh:i}of qh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Kh(){let n=Bp.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;Wh={game:"Gorilla Lab",version:"r33",time:new Date().toISOString(),mode:zp?"VR":"PC",settings:{...V},qualityActive:en,performance:{fps:rr,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Op,renderer:Fy,terrainSeed:wt.hillSeed,map:ft.active?{name:ft.name,pieces:ft.nodes}:null,objects:{total:At.length,held:At.filter(t=>t.owner).length,frozen:At.filter(t=>t.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:Mn.score(),locomotion:{trackedFrames:kp,contactFrames:Vp,launchCount:Ep,lastLaunch:Cp,standingHeight:Number.isFinite(Io)?Io:null,viewOffset:li}},document.querySelector("#download-report").disabled=!1,Qt=!0}function iA(){Wh||Kh();let n=URL.createObjectURL(new Blob([JSON.stringify(Wh,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=iA;document.querySelector("#capture-report").onclick=Kh;lr[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Kh]);var sA=Array.from({length:Math.ceil(pl.length/8)},(n,e)=>["Atelier"+(pl.length>8?" "+(e+1):""),pl.slice(e*8,e*8+8)]),Ny=[["Basiques",Ey],["D\xE9taill\xE9s",Cy],["Anim\xE9s",Dp],...sA].map(([n,e])=>[n,[...e.map(t=>[Ln[t].name,()=>Jp(t)]),["Tout retirer",Qh]]]);lr.push(["Spawn",[]]);var Gp=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ft.blank(),V.mapEdit=!0}],["Annuler placement",()=>ft.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ft.recenter(Rt.x,ht.position.y,Rt.z,Wi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ft.reset(),V.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>py(!1)],["Utiliser comme t\xEAte",()=>py(!0)]]]];lr.push(["Carte",[]],["En ligne",[]]);var rA=document.querySelector("#section"),fp=document.querySelector("#settings"),oA=document.querySelector("#readings");function xn(n,e){if(n==="viewFov"){V.viewFov=qe.clamp(V.viewFov+5*e,50,105),Ml(),Qt=!0;return}if(n==="vrFov"){V.vrFov=qe.clamp(V.vrFov+5*e,55,100),Qt=!0;return}if(n==="shaderMode"){V.shaderMode=(V.shaderMode-1+e+Xu.length)%Xu.length+1,Qp.value=V.shaderMode-1,Qt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??V.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else V.timeOfDay=(V.timeOfDay-1+e+3)%3+1;Mi();return}let t={mapMode:9,mapShape:5,mapMaterial:rp.length,mapSurface:4,mapTurn:8,mapTexture:Wu.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];V[n]=(V[n]-1+e+i)%i+1,Qt=!0;return}if(n==="mapEdit"&&!V.mapEdit&&!ft.active&&ft.blank(),n==="toolMode"){V.toolMode=(V.toolMode-1+e+Zs.length)%Zs.length+1,Ke.xr.isPresenting||ai("Outil \xB7 "+Zs[V.toolMode-1]),Qt=!0;return}if(n==="preset"){let i=Object.keys(Yu);V.preset=(V.preset-1+e+i.length)%i.length+1,tA(i[V.preset-1]);return}if(typeof V[n]=="boolean"?V[n]=!V[n]:V[n]=qe.clamp(V[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Xt)i.valid=!1,i.surface=null;if(n==="quality"&&(V.auto=!1,en=V.quality),n==="auto"&&!V.auto&&(en=V.quality),n==="movement"||n==="collisions")for(let i of Xt)i.surface=null;if(n==="objects"&&!V.objects&&_l(),n==="blasterActive"&&V.blasterActive&&(V.toolActive=!1),n==="toolActive"&&V.toolActive&&(V.blasterActive=!1),!V.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Xt)i.held?.toolHold&&ci(i,!1);Yp(!1)}n==="preciseHitboxes"&&By(),Mi()}function By(){for(let n of At)n.precise=V.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||il(n,wt.boxes)}function Oy(){let n=(_t===2?Fp:_t===4?Gp:null)?.flatMap(e=>e[1])??Np();for(let[,e]of n)typeof e=="string"&&(V[e]=UT[e]);_t===0&&Yi(),_t===1&&(By(),_l()),_t===3&&Qh(),_t===2&&(en=V.quality),Mi()}function ul(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),No(),Qt=!0},t}function zy(n){return n==="preciseHitboxes"?V[n]?"High":"Low":V[n]?"Actif":"Coup\xE9"}function Hp(n){if(n==="viewFov")return V.viewFov+"\xB0";if(n==="vrFov")return V.vrFov===100?"Natif":V.vrFov+" %";if(n==="mapTexture")return V[n]===1?"Aucune":Wu[V[n]-2];if(n==="terrainResolution")return[8,16,32,48][V[n]-1]+"\xB2";if(n==="shaderMode")return Xu[V.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=V[n],t=n==="shadowQuality"?Hh():gl();return t===e?e+"/10":e+"/10 \xB7 "+t+(V.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??V.timeOfDay-1]:n==="mapMode"?qy[V.mapMode-1]:n==="mapShape"?fA[V.mapShape-1]:n==="mapSurface"?dA[V.mapSurface-1]:n==="mapMaterial"?rp[V.mapMaterial-1]:n==="mapTurn"?(V.mapTurn-1)*45+"\xB0":n==="toolMode"?Zs[V.toolMode-1]:n==="preset"?Object.keys(Yu)[V.preset-1]:n==="texturePower"?[2**(V[n]-1),2**(V[n]-1)].join("\xD7"):V[n]}function bp(){return _t===2?Fp:_t===3?Ny:Gp}function Vy(){return _t===2?Pp:_t===3?Ip:Lp}function ky(n){_t===2?Pp=n:_t===3?Ip=n:Lp=n}function Gy(n){return n===Kh?"Capturer":n===Jh||n===Qh?"Vider":n===Yi||n===jp?"R\xE9initialiser":_t===3?"Cr\xE9er":"Appliquer"}function No(){if(rA.textContent=lr[_t][0],Hy.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===_t))),fp.replaceChildren(),aA.hidden=_t!==5,document.querySelector("#restore").hidden=_t===5,_t!==5){if(_t>=2){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),bp().forEach(([e],t)=>{let i=ul(e,()=>ky(t));i.setAttribute("aria-pressed",String(Vy()===t)),n.append(i)}),fp.append(n)}for(let[n,e]of Np()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(ul(Gy(e),e)):typeof V[e]=="boolean"?i.append(ul(zy(e),()=>xn(e,1))):i.append(ul("\u2212",()=>xn(e,-1)),document.createTextNode(" "+Hp(e)+" "),ul("+",()=>xn(e,1))),t.append(i),fp.append(t)}}}var Hy=document.querySelectorAll("[data-page]"),aA=document.querySelector("#cloud-access");Hy.forEach((n,e)=>n.onclick=()=>{Uy(e),No()});document.querySelector("#restore").onclick=()=>{Oy(),No()};No();function Wy(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Xn(r);a.colorSpace=yt;let l=new Ne(new Zt(t,i),new mt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var yn=Wy(640,652,.84,.86,Et);yn.mesh.visible=!1;var Kn=Wy(416,84,.32,.065,Et);Kn.mesh.visible=!1;var Eo=new Gt(75,1,.07,140),$n=new Wa(new Zt(1.7,1.95),{color:16054015,textureWidth:ar?128:256,textureHeight:ar?128:256,clipBias:.004,multisample:0}),lA=new M(0,0,-1),Eh=new M,fy=new M;$n.position.set(nh.x,nh.y,nh.z);$n.rotation.y=Math.PI;Et.add($n);var Wp=new Ne(new tt(1.8,2.03,.1),new $t({color:"#344650"}));Wp.position.copy($n.position).z+=.064;Et.add(Wp);var cA=$n.onBeforeRender.bind($n);$n.onBeforeRender=()=>{};$n.visible=!1;var dp=-1/0;function uA(n,e){if(Eo.position.copy(Rt),e){let i=e.transform.orientation;Eo.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Lh.setFromAxisAngle(Ft,gt))}else Yt.getWorldQuaternion(Eo.quaternion);fy.set(0,0,-1).applyQuaternion(Eo.quaternion),Eh.subVectors($n.position,Rt);let t=Eh.length();if($n.visible=!ft.active&&V.reflections&&t<4&&Eh.dot(lA)<-.15&&Eh.multiplyScalar(1/Math.max(.001,t)).dot(fy)>.66,!$n.visible){dp=-1/0;return}if(!(n-dp<(ar&&!Ke.xr.isPresenting?110:45))){dp=n,Eo.updateMatrixWorld(!0),$n.updateMatrixWorld(!0),_s.visible=V.body;try{cA(Ke,Et,Eo)}finally{_s.visible=!1}}}var vi=new Ui,Vn=new M,In=new M,Uo=new M,Ch=new M,dy=new M,dl=null,Fh=null,Nh=null,hA=new Set(Et.children),Mn=Wx(Et,wt.boxes,{spawn:Jp,clear:Qh,resetPlayer:Yi,resetObjects:jp,resetTree:()=>Zp(2,Yy),quality:()=>en+"/10",resolution:()=>V.resolution+"/10 \xB7 relancer VR",textureSize:()=>Hp("texturePower"),qualityNext:()=>{V.quality>=10&&(V.quality=0),xn("quality",1)},resolutionNext:()=>{V.resolution>=10&&(V.resolution=0),xn("resolution",1)},textureNext:()=>{V.texturePower>=12&&(V.texturePower=0),xn("texturePower",1)},hitbox:()=>xn("preciseHitboxes",1),movement:()=>xn("movement",1)}),qy=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],fA=["Bloc","Rampe","Mur","Dalle","Terrain"],dA=["Normale","Glace","Caoutchouc","Lune"],ft=Vx({scene:Et,arena:wt,boot:Ap,onReset:n=>{Jh(),Yi(),gt=qe.degToRad(n),ft.active||Ly()},onVisual:Mi,getLevel:()=>en,defaultObjects:[...wt.builtObjects,...Et.children.filter(n=>!hA.has(n)),Wp]}),Ye=L0({scene:Et,currentMap:()=>(ft.signature||"arena-r25-"+wt.hillSeed)+GT,seedArena:n=>wt.setHillSeed(n),makeReplica:n=>{let e=Py(n,!0);return e&&bl(e.material),e},onAction:vA,onStatus:()=>{_t===5&&(Qt=!0)},onShot:n=>$h.receiveShot(n,Ye.role==="vr"),applyLight:n=>{wt.setTimeOfDay(n??V.timeOfDay-1),Qt=!0,Ke.xr.isPresenting||No()},applyScore:n=>Mn.setScore(n),applyCoconuts:n=>Mn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function py(n){let e=ft.modelPieces();if(!e.length||e.length>Ks.parts){ai("Compose un mod\xE8le de 1 \xE0 "+Ks.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Wd(localStorage);if(t.models.length>=Ks.models){ai("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:V.modelGrab,frozen:V.modelFrozen,collidable:V.modelCollidable,supportWhileHeld:V.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Bx[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Gd,JSON.stringify(Hd(t))),ai("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ai("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var pp=new Map;function pA(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][V.mapShape-1],e=po({detail:[8,16,32,48][V.terrainResolution-1],amplitude:(V.terrainAmplitude-1)*.34,frequency:.05+V.terrainFrequency*.025,seed:V.terrainSeed,grass:(V.terrainGrass-1)/9,shrub:(V.terrainShrub-1)/9}),t=V.mapTexture-2;return t>=0&&!pp.has(t)&&pp.set(t,W0(t).toDataURL("image/webp",.83)),Mh({...n,material:V.mapMaterial-1,yaw:V.mapShape===5?0:(V.mapTurn-1)*45,...op[Object.keys(op)[V.mapSurface-1]],texture:pp.get(t)??null,terrain:V.mapShape===5||V.mapMode===9?e:null,brushRadius:.5+V.brushRadius*.5,brushStrength:V.brushStrength*.15})}function mA(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-li,r.z).applyAxisAngle(Ft,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ft,gt),ft.edit(Vn,In,i,{mode:V.mapMode,piece:pA(),head:Rt,feet:ht.position.y}),i&&(Qt=!0)}function gA(n){if(ft.active||!n.valid||n.held||n.remoteHeld||qt)return;let e=null;for(let t of Mn.targets)if(t.getWorldPosition(dy),!(n.mesh.position.distanceToSquared(dy)>.11**2)&&(t.worldToLocal(Ch.copy(n.mesh.position)),Math.abs(Ch.x)<t.userData.touchWidth*.5+.025&&Math.abs(Ch.y)<.095&&Math.abs(Ch.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function qp(n,e=null){n.getWorldPosition(Uo),n.visible=!1,V.objects||(V.objects=!0);let t=Fo(6,Uo);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function Sp(n,e,t){if(ft.active)return;vi.set(n,e),vi.far=5.5;let i=vi.intersectObjects([...Mn.targets,...Mn.coconuts.filter(r=>r.visible)],!1);vi.far=1/0;let s=i[0];s&&(cr.visible=!0,cr.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:Mn.coconuts.indexOf(s.object)}):qp(s.object,e),No()))}var my=new M,Xy=new je,Xp=Ou(Et),$h=j0({scene:Et,rig:ht,camera:Yt,arena:wt,objects:At,spectator:Ye}),qR=Xp.mesh,Bh=new M,Xi=new je,Yh=new M,Lo={mode:0,position:Yh,quaternion:Xi,end:Bh},gy=new M,xA=new M,xy=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Zh=new M,yA={position:Yh,quaternion:Xi,pressure:[.1,.66,.08]},mp=new M,jh=new je;function Yp(n){bs.held&&ci(bs,n)}function Zp(n,e){if(Ye.role==="pc"){ai("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||ai("Attends la connexion \xE0 l\u2019h\xF4te.")}function Qh(){Zp(0,Jh)}function jp(){Zp(1,_l)}function Yy(){for(let n of Mn.coconuts)n.visible=!0}function Jp(n,e=null){if(V.objects=!0,Ye.role==="pc"){ai("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||ai("Attends la connexion \xE0 l\u2019h\xF4te."):Fo(n,e)}function vA(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)V.timeOfDay=n.typeId+1,Mi();else if(n.mode===3)[Jh,_l,Yy][n.typeId]();else if(!ft.active){let u=Mn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(Uo).distanceToSquared(e)<=5.8**2&&!wo(ys.copy(e),Uo,.01,Ms,yp,vp)&&qp(u)}return}if(n.type==="spawn"){Up.includes(n.typeId)&&(V.objects=!0,Fo(n.typeId,null,e));return}let t=At.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,s=e.id*3+i,r=n.type==="hold"?1:n.mode,o=Do.get(s);if(!o&&r===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new je},Do.set(s,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),ci(o,!0)}return}if(!V.objects||r===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=ys.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?xh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||wo(l,t.mesh.position,.01,Ms,yp,vp))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Kp(t,r,o,qe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,ml.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(ml))}}function _A(n){if(Ke.xr.isPresenting)for(let t of Xt)t.valid&&t.held&&gp(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Do){let s=Ye.getPeer(i.peerId),r=i.hand?s?.avatar?.hands[i.hand-1]:null;if(!s||i.hand&&!r){ci(i,!1),Do.delete(t);continue}let o=i.held;if(!o)continue;let a=r?.quaternion??s.avatar?.tool?.quaternion??s.avatar?.head;a&&i.controllerRotation.copy(a),ys.copy(r?.position??s.avatar?.tool?.position??s),Gh.set(0,0,-1).applyQuaternion(i.controllerRotation),gp(o,ys,Gh,i.controllerRotation,n)}let e=bs.held;e&&(Yt.getWorldPosition(Zh),Yt.getWorldDirection(my),Yt.getWorldQuaternion(Xi),gp(e,Zh,my,Xi,n))}function gp(n,e,t,i,s){n.toolHold?mp.copy(e).addScaledVector(t,n.toolDistance):mp.copy(n.offset).applyQuaternion(i).add(e),jh.multiplyQuaternions(i,n.relativeRotation),Ex(n,mp,jh,Ms,s)}function Zy(n){return n.customMaterial||(n.mesh.material=eh(n.mesh.material),n.customMaterial=!0,bl(n.mesh.material)),n.mesh.material}function MA(n){let e=Zy(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function jy(n,e,t){vi.set(n,e),vi.far=9;let i=vi.intersectObjects(t,!1)[0];return vi.far=1/0,Bh.copy(n).addScaledVector(e,i?.distance??9),wo(n,Bh,.006,Ms,gy,xA)?(Bh.copy(gy),null):i}function Kp(n,e,t,i){if(e===1){if(t?.held){t===bs?Yp(!0):ci(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??Xi;n.relativeRotation.multiplyQuaternions(Xy.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)Et.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),At.splice(At.indexOf(n),1);else if(e===4&&!n.protected){Zh.copy(n.mesh.position).addScaledVector(Ft,n.radius*2+.08);let s=Fo(n.netType,Zh);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=eh(n.mesh.material),s.customMaterial=!0,bl(s.mesh.material)),il(s,wt.boxes))}else if(e===5){let s=Zy(n);s.color.set(xy[n.paint++%xy.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,MA(n));Qt=!0}}var vs=[];function Jy(n,e,t,i){if(!V.objects)return;let s=Ye.role==="player";if(vs.length=0,s)Ye.forEachReplica(a=>vs.push(a));else for(let a of At)!a.owner&&a.mesh.visible&&vs.push(a.mesh);let r=jy(n,e,vs);if(Lo.mode=V.toolMode,i?(Yh.copy(i.mesh.position),Xi.copy(i.controllerRotation)):(Yt.getWorldQuaternion(Xi),Yh.set(.16,-.17,-.43).applyQuaternion(Xi).add(n)),Xp.update(Lo),!t)return;if(s){if(V.toolMode===1&&qi)Ye.sendAction({type:"release",objectId:qi}),qi=0;else if(r){let a=r.object.userData.netId;Ye.sendAction({type:"tool",mode:V.toolMode,objectId:a})&&V.toolMode===1&&(qi=a)}return}let o=r&&At.find(a=>a.mesh===r.object);Kp(o,V.toolMode,i??bs,r?qe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function bA(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;Vn.set(o.x,o.y-li,o.z).applyAxisAngle(Ft,gt).add(ht.position),_i.set(a.x,a.y,a.z,a.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ft,gt),Jy(Vn,In,s,i)}function SA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-li,r.z).applyAxisAngle(Ft,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ft,gt),Sp(Vn,In,i)}var cr=kT(Et,new mt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);cr.visible=!1;var wp=[],or=null;function yy(){let n=yn.ctx;wp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(rr+" FPS   \xB7   Q "+en+"/10   \xB7   "+(V.auto?"AUTO":"MANUEL"),390,40);function e(s,r,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(s,r,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,s+o/2,r+a/2+7,o-8),n.textAlign="left",wp.push({x:s,y:r,w:o,h:a,action:c,label:l})}let t=Math.floor(587/lr.length);if(lr.forEach(([s],r)=>e(25+r*t,61,t-4,44,s,()=>Uy(r),_t===r?"#586d53":"#334b58")),_t===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),Ya.forEach((s,r)=>{let o=204+r*48;n.fillText("Ar\xE8ne "+(r+1),25,o+29),e(200,o,190,40,"Rejoindre",()=>Ye.connect("player",s)),e(406,o,206,40,"H\xE9berger",()=>Ye.connect("vr",s))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>qt=!1);return}let i=_t>=2;i&&bp().forEach(([s],r)=>{let o=Vy()===r,a=Math.min(144,Math.floor(586/bp().length)-4);e(25+r*(a+4),114,a,38,s,()=>ky(r),o?"#546947":"#263d49")}),Np().forEach(([s,r],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(s,37,a+26),typeof r=="function"?e(406,a,206,36,Gy(r),r):typeof V[r]=="boolean"?e(406,a,206,36,zy(r),()=>xn(r,1),V[r]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>xn(r,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Hp(r)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>xn(r,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",Oy),e(325,579,287,44,"Fermer",()=>qt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText($p||(_t===4&&ft.status?ft.status.slice(0,64):Wh?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),yn.texture.needsUpdate=!0}function wA(n){qt=!qt,qt&&(Sy=n,iy.set(0,0,-1).applyAxisAngle(Ft,Wi),yn.mesh.position.copy(Rt).addScaledVector(iy,1.25),yn.mesh.position.y+=.08,yn.mesh.lookAt(Rt),yn.mesh.updateMatrixWorld(!0)),Qt=!0}function TA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Vn.set(r.x,r.y-li,r.z).applyAxisAngle(Ft,gt).add(ht.position),_i.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Ft,gt),vi.set(Vn,In);let a=vi.intersectObject(yn.mesh)[0];if(a&&(cr.visible=!0,cr.position.copy(a.point).addScaledVector(In,-.012),i)){let l=a.uv.x*yn.w,c=(1-a.uv.y)*yn.h;wp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Qt=!0}}var ef=X0(),{held:yi,pressed:Hi}=ef,Ky=J0(Ke.domElement,document.querySelector("#touch-fire")),vy=document.querySelector("#game-settings"),$y=document.querySelector("#open-settings"),Tp=document.querySelector("#game-hint"),Oh=0;function ai(n){Tp.textContent=n,Tp.hidden=!1,Oh=performance.now()+2400,$p=n,Qt=!0}var $p="";function tf(n){let e=n??!vy.hidden;vy.hidden=e,$y.hidden=!e,e&&Ke.domElement.focus()}$y.onclick=()=>tf(!1);document.querySelector("#close-settings").onclick=()=>tf(!0);var xl=q0({canvas:Ke.domElement,enabled:()=>!Ke.xr.isPresenting,onLook:(n,e,t)=>{gt-=n*t,gs=qe.clamp(gs-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Hi.add(e)},onMenu:()=>tf()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ke.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||tf();return}n.code==="Space"&&n.preventDefault(),ef.down(n.code,n.repeat),n.code==="KeyR"&&Yi()}});addEventListener("keyup",n=>ef.up(n.code));addEventListener("blur",()=>{ef.clear(),xl.clear(),Ky.clear()});function AA(n,e){if(!V.objects)return!1;let t=Ye.role==="player";if(t&&qi)return Ye.sendAction({type:"release",objectId:qi}),qi=0,!0;if(bs.held)return Yp(!0),!0;if(vs.length=0,t)Ye.forEachReplica(s=>vs.push(s));else for(let s of At)!s.owner&&s.mesh.visible&&vs.push(s.mesh);let i=jy(n,e,vs);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:s})&&(qi=s)}else Yt.getWorldQuaternion(Xi),Kp(At.find(s=>s.mesh===i.object),1,bs,Math.max(.75,i.distance));return!0}var xp=[];function EA(){return xp.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!Ln[e]||Ln[e].properties?.collidable===!1||n.userData.held)return;let t=Ln[e],i=V.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=V.preciseHitboxes,s.handCollider??={objectBody:s,friction:.96,gravity:1},xp.push(s)}),xp}function CA(){Ye.role!=="vr"||!Ye.remoteSpectator||At.some(n=>n.netType===vl)||Fo(vl,null,null,!0)}var yl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{yl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});yl.onclick=async()=>{let n;try{yl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ke.xr.setFramebufferScaleFactor(.45+V.resolution*.055),await Ke.xr.setSession(n),Mi(),fl=n.frameRate||72,hl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=hl.includes(120)?120:hl.find(t=>t>=100)??hl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}fl=n.frameRate||fl,Rp=Math.min(100,fl),V.auto&&(en=Math.min(en,4),Co=Ro=Po=0),Bp=[],Uh=0,_p=0,Vp=kp=Ep=0,Cp=null,zp=!0,Op=null,Io=NaN,li=0,Yi(),Mi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),yl.disabled=!1,document.querySelector("#status").textContent=e.message}};Ke.xr.addEventListener("sessionend",()=>{yl.disabled=!1,qt=!1,yn.mesh.visible=!1,Kn.mesh.visible=!1,document.body.classList.remove("immersive"),Yi(),Ml()});function Qy(n){if(!ft.active){for(let e of wt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ft.active){let e=-1/0,t;for(let i of wt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function _y(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),qt||!e||n.grip||!V.objects)return;let i=null,s=.15;if(Ye.forEachReplica(r=>{if(r.userData.held)return;let o=Ln[r.userData.netType];if(!o||o.properties?.grabbable===!1||r.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=xh(n.target,{mesh:r,shape:o.shape,radius:o.shape.radius});a<s&&(i=r,s=a)}),i){let r=i.userData.netId;Ye.sendAction({type:"hold",objectId:r,hand:t})&&(n.remoteHeld=r)}else if(!ft.active){let r=Mn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(Uo).distanceToSquared(n.target)<.06760000000000001);r>=0&&Ye.sendAction({type:"world",mode:2,typeId:r})}}function RA(n,e,t){let i=[...n.session.inputSources];for(let s of Xt){let r=i.find(x=>x.handedness===s.side&&x.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&V.hands&&!V.body,!o){Ye.role==="player"&&_y(s,!1),s.valid=!1,s.surface=null,ci(s,!1);continue}let a=o.transform.position;ms.set(a.x,a.y-li,a.z),s.target.copy(ms).applyAxisAngle(Ft,gt).add(ht.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(ir.set(c.x,c.y,c.z,c.w).premultiply(_i.setFromAxisAngle(Ft,gt)),s.controllerRotation.copy(ir),s.mesh.quaternion.copy(ir).multiply(FT.setFromAxisAngle(NT,s.side==="left"?Math.PI/2:-Math.PI/2)),HT(s,r.gamepad?.buttons??[],t),Ye.role==="player")_y(s,l);else if(!qt&&l&&!s.grip&&V.objects&&!s.held){let x=null,g=.15,m=Mn.coconuts.find(b=>b.visible&&b.getWorldPosition(Uo).distanceToSquared(s.target)<.26**2);m&&(x=qp(m));for(let b of At){if(b.owner||!b.grabbable||b.mesh.position.distanceToSquared(s.target)>(b.radius+.18)**2)continue;let w=xh(s.target,b);!m&&w<g&&(g=w,x=b)}x&&!s.held&&(s.held=x,x.owner=s,x.frozen=!1,ml.copy(ir).invert(),x.offset.copy(x.mesh.position).sub(s.target).applyQuaternion(ml),x.relativeRotation.multiplyQuaternions(ml,x.mesh.quaternion),x.velocity.set(0,0,0),x.angular.set(0,0,0))}!l&&s.grip&&!s.held?.toolHold&&ci(s,!qt),s.grip=l,s.hasSupport=!1;let u=s.held;if(u&&!u.toolHold&&u.collidable&&u.spec.supportAxis){jh.multiplyQuaternions(ir,u.relativeRotation),s.supportOffset.copy(u.spec.supportAxis).applyQuaternion(jh),ms.copy(u.offset).applyQuaternion(ir);let x=s.supportOffset.dot(ms);(Math.abs(x)>.008?x<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(ms),s.hasSupport=!0}if(s.held?.toolHold){let g=n.getPose(r.targetRaySpace,e)?.transform.orientation;g?s.aimDirection.set(0,0,-1).applyQuaternion(Xy.set(g.x,g.y,g.z,g.w)).applyAxisAngle(Ft,gt):s.aimDirection.set(0,0,-1).applyQuaternion(ir)}let f=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");f&&!s.menu&&wA(s.side),s.menu=f;let d=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&d&&!s.toolButton&&!qt&&xn("toolActive",1),s.toolButton=d;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&V.toolActive&&!qt&&xn("toolMode",1),s.toolCycle=h;let p=!!r.gamepad?.buttons[0]?.pressed;if(qt){let x=p&&!s.trigger;(x||!or||!or.click&&s.side!==Sy)&&(or={source:r,click:x})}else!qt&&s.side==="right"&&V.mapEdit?Nh={source:r,click:p&&!s.trigger}:!qt&&s.side==="right"&&V.toolActive?Fh={source:r,hand:s,click:p&&!s.trigger}:!qt&&!V.blasterActive&&(s.side==="right"||p&&!s.trigger)&&(dl={source:r,click:p&&!s.trigger});s.trigger=p}}function PA(n,e,t,i){let s=!!t,r=.43+V.size*.088;if(s){let h=t.transform.position;Number.isFinite(Io)||(Io=h.y),li=qe.clamp(Io-r,-.65,1.7),zh.position.y=-li,Jn.set(h.x,h.y-li,h.z);let x=[...n.session.inputSources].find(g=>g.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(x)<.3&&(Ih=!1),Math.abs(x)>.67&&!Ih&&!qt&&(Ih=!0,jn.copy(Jn).applyAxisAngle(Ft,gt),gt-=Math.sign(x)*Math.PI/4,Jx.copy(Jn).applyAxisAngle(Ft,gt),ht.position.add(jn.sub(Jx)),Dh.reset(),Ph=!1)}else zh.position.y=0,Jn.set(0,r,0),Yt.position.copy(Jn),Yt.rotation.set(gs,0,0,"YXZ");if(Rt.copy(Jn).applyAxisAngle(Ft,gt).add(ht.position),s){let h=t.transform.orientation;Lh.set(h.x,h.y,h.z,h.w),nr.set(0,0,-1).applyQuaternion(Lh),nr.x**2+nr.z**2>.018&&(Wi=gt+Math.atan2(-nr.x,-nr.z))}else Wi=gt;let o=Qy(Rt),a=9.81*(V.gravity/5)*(o?.gravity??1);$x.copy(ht.position);let l=Ye.role==="player"?EA():At;if(s){RA(n,e,i),Xt.some(h=>h.valid)&&kp++,Ah.length=0;for(let h of Ms)Ah.push(h);if(V.collisions&&V.objects)for(let h of l)h.handCollider&&!h.owner&&Ah.push(h.handCollider);Dh.move({head:Rt,dt:i,gravity:a,settings:V,boxes:Ah,velocity:Pn,movement:al,reach:kh()*2+.16});for(let h of Xt)Z0(h,V.stepHaptics,i)}else{Pn.y-=a*i;let h=Number(yi.has("KeyD"))-Number(yi.has("KeyA")||yi.has("KeyQ"))+xl.movement.x,p=Number(yi.has("KeyS"))-Number(yi.has("KeyW")||yi.has("KeyZ"))+xl.movement.z,x=yi.has("ShiftLeft")||yi.has("ShiftRight");tr.set(h,0,p).clampLength(0,1).applyAxisAngle(Ft,gt).multiplyScalar(x?5.4:3.4);let g=1-Math.exp(-i*(o?.friction<.1?2:sr?13:4));Pn.x=qe.lerp(Pn.x,tr.x,g),Pn.z=qe.lerp(Pn.z,tr.z,g),(xl.consumeJump()||Hi.delete("Space"))&&sr&&(Pn.y=3.1+V.jump*.18),al.copy(Pn).multiplyScalar(i)}if(V.collisions&&Ph&&(ms.copy(Rt).add(al),wo(Qx,ms,ey,Ms,jn,wh)&&tr.subVectors(ms,jn).dot(wh)<0&&al.copy(jn).sub(Rt)),ht.position.add(al),Rt.copy(Jn).applyAxisAngle(Ft,gt).add(ht.position),sr=!1,V.collisions){ty.set(0,0,1).applyAxisAngle(Ft,Wi);let h=s?-nr.y:Math.max(0,-Math.sin(gs)),p=s?.17+qe.smoothstep(h,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,Jn.y*.57):Jn.y,m=x===2?ey:x===0?.18:.17;if(jn.set(Rt.x,ht.position.y+g,Rt.z),x<2&&jn.addScaledVector(ty,p),Kx.copy(jn),sr=ip(jn,m,wt.boxes,Pn,0,3+V.grip,i)||sr,V.objects)for(let b of l)b.blocksPlayer&&!b.owner&&Fx(jn,m,b,Pn,wh)&&wh.y>.6&&(sr=!0);ip(jn,m,wt.boxes,Pn,0,3+V.grip,i),tr.subVectors(jn,Kx),ht.position.add(tr),Rt.add(tr)}}if(lp.subVectors(ht.position,$x),s){let h=Dh.finish(lp,Pn);h.contacts&&Vp++,h.launched&&(Ep++,Cp={handSpeed:h.launchSpeed,velocity:Pn.toArray(),t:performance.now()})}(ft.active?ht.position.y<-24||Math.abs(ht.position.x)>155||Math.abs(ht.position.z)>155:ht.position.y<-9||Math.abs(ht.position.x)>33||ht.position.z<-57||ht.position.z>13)&&(Yi(),Rt.copy(Jn).applyAxisAngle(Ft,gt).add(ht.position)),Qx.copy(Rt),Ph=!0,ht.rotation.y=gt,s&&Yt.position.set(0,0,0);for(let h of Xt)s&&h.valid&&h.mesh.position.copy(h.surface?h.anchor:h.held?h.target:h.locomotionTarget).addScaledVector(lp,h.surface?0:1),s||(h.mesh.visible=!1);let c=Math.min(.3,Math.max(.21,Jn.y*.31)),u=.72+V.size*.05,f=kh()*2*(2/3)/.82;xs.visible=V.body,xs.position.set(Rt.x,Rt.y-c-.24*f-.05*ll,Rt.z);let d=s?-nr.y:Math.max(0,-Math.sin(gs));ll=qe.lerp(ll,qe.smoothstep(d,.24,.92),1-Math.exp(-i*14)),sy.set(0,0,1).applyAxisAngle(Ft,Wi),xs.position.addScaledVector(sy,.32*ll),ry.set(-.48*ll,Wi,0,"YXZ"),xs.quaternion.setFromEuler(ry),_s.position.copy(Rt),s?_s.quaternion.copy(Lh).premultiply(_i.setFromAxisAngle(Ft,gt)):_s.quaternion.setFromEuler(new ln(gs,gt,0,"YXZ")),WT(u,f),ht.updateMatrixWorld(!0),Yt.updateWorldMatrix(!0,!1)}function IA(n,e){if(Th+=n,up++,Co+=n,Th<1||(rr=Math.round(up/Th),up=0,Th=0,Qt=!0,oA.textContent=rr+" FPS \xB7 qualit\xE9 "+en+"/10 \xB7 "+(V.auto?"auto":"manuel"),!V.auto||Co<5))return;Co=0;let t=e?Math.min(100,Ke.xr.getSession()?.frameRate||fl):60;e&&(Rp=t),Ro=rr<t-4?Ro+1:0,Po=rr>=t-1?Po+1:0;let i=qe.clamp(en+(Ro>=1?-1:Po>=2?1:0),1,10);i!==en&&(en=i,Co=Ro=Po=0,Mi())}wt.bakeLightmap();var ev={value:1},tv={value:1},nv={value:0},Qp={value:0},My=new WeakSet;function bl(n){if(!n||My.has(n))return;My.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:ev,uPhotoSaturation:tv,uPhotoWarmth:nv,uLabShader:Qp}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of wt.materials)bl(n);Et.traverse(n=>{n.isMesh&&![yn.mesh,Kn.mesh,cr].includes(n)&&bl(n.material)});Mi();var by=new URLSearchParams(location.search);if(by.has("map"))ft.loadURL(by.get("map"));else try{let n=localStorage.getItem(rl);n&&ft.load(n)}catch(n){ft.inform(n.message)}function LA(){let n=Ke.xr.isPresenting;return{head:_s.quaternion,hands:n?Xt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,Lo.mode?yA:null],height:Jn.y,armSpan:kh()*2,light:V.timeOfDay-1,color:wy,coconuts:Mn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:Lo.mode?Lo:null,gun:$h.gun}}Ke.setAnimationLoop((n,e)=>{let t=cp?Math.max(0,(n-cp)/1e3):.014;cp=n;let i=Math.min(.035,t),s=Ke.xr.isPresenting,r=Ke.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if(ZT(n*.001),Oh&&n>Oh&&(Tp.hidden=!0,Oh=0,$p=""),cr.visible=!1,Xp.hide(),Lo.mode=0,Ms=V.collisions?wt.boxes:BT,or=null,dl=null,Fh=null,Nh=null,ft.clearGhost(),yn.mesh.visible=!1,!s&&Ye.role==="pc"){xs.visible=!1;for(let p of Xt)p.mesh.visible=!1}else PA(e,r,o,i);let a=!s&&Ye.role==="pc",l=a||Ye.role==="player";if(Ye.role!=="player"){qi=0;for(let p of Xt)p.remoteHeld=0}l||(_A(i),CA());for(let p of At){p.mesh.visible=V.objects&&!l;let{x,y:g,z:m}=p.mesh.position;if((ft.active?g<-24||Math.abs(x)>155||Math.abs(m)>155:g<-8||Math.abs(x)>28||m<-57||m>13)&&(p.owner||(p.mesh.position.copy(p.start),p.velocity.set(0,0,0),p.angular.set(0,0,0))),p.shadow.visible=!l&&V.shadows&&Hh()<3&&V.objects&&p.mesh.position.y<2,p.shadow.visible){let{x:w,z:v}=p.mesh.position,A=wt.boxes.find(D=>D.heightfield&&w>=D.xMin&&w<=D.xMax&&v>=D.zMin&&v<=D.zMax),P=A?A.height(w,v):0;p.shadow.position.set(w,P+.006,v)}}if(!l&&V.objects){for(let p of At)p.beforePhysics.copy(p.mesh.position);Dx(At,wt.boxes,i,9.81*V.gravity/5,.12+V.bounce*.064,Qy),ft.active||Mn.updateTarget(At)}if(s&&!qt&&Ye.role!=="pc")for(let p of Xt)gA(p);if(wt.probe.rotation.y+=i*.29,IA(Math.min(.3,t),s),yn.mesh.visible=s&&qt,yn.mesh.visible&&Qt&&yy(),yn.mesh.visible&&or)TA(e,r,or.source,or.click);else if(s&&Nh)mA(e,r,Nh);else if(s&&Fh)bA(e,r,Fh);else if(s&&dl)SA(e,r,dl.source,dl.click);else if(!s&&!a){Yt.getWorldPosition(Vn),Yt.getWorldDirection(In),Hi.delete("KeyX")&&xn("blasterActive",1),Hi.delete("KeyG")&&(xn("toolActive",1),V.toolActive&&ai("Outil \xB7 "+Zs[V.toolMode-1])),Hi.delete("KeyT")&&xn("toolMode",1);let p=Hi.delete("KeyE");V.toolActive?Jy(Vn,In,p,null):p&&!AA(Vn,In)?Sp(Vn,In,!0):!p&&!l&&Sp(Vn,In,!1),Hi.delete("KeyF")&&(V.objects=!0,Jp(Up[0]))}let c=Kn.mesh.visible;if(Kn.mesh.visible=s&&!qt&&Xt[0].valid,Kn.mesh.visible&&(Kn.mesh.position.copy(Xt[0].mesh.position).y+=.12,Kn.mesh.lookAt(Rt)),(Qt||n-ny>1100||Kn.mesh.visible&&!c)&&(Qt=!1,ny=n,qt&&yy(),Kn.mesh.visible)){let p=Kn.ctx;p.clearRect(0,0,416,84),p.fillStyle="#182632",p.fillRect(0,0,416,84),p.fillStyle="#fff0cf",p.font="bold 25px system-ui",p.fillText(rr+" FPS     Q "+en+"/10",17,32),p.font="20px system-ui",p.fillText(V.mapEdit?"\xC9dition : "+qy[V.mapMode-1]:V.blasterActive?"Pistolet : maintenir la g\xE2chette":V.toolActive?"Tool Gun : "+Zs[V.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Kn.texture.needsUpdate=!0}$h.update({frame:e,space:r,inVR:s,remoteWorld:l,dt:i,yaw:gt,drop:li,rightHand:Xt[1],enabled:V.blasterActive&&!a&&!qt&&!V.mapEdit,flatFiring:Ky.held||yi.has("KeyJ")}),Ye.update({inVR:s,time:n,dt:i,position:Rt,yaw:a?gt:Wi,pitch:gs,camera:Yt,rig:ht,keys:yi,actions:Hi,flat:xl,avatar:LA,bodies:V.objects?At:$T,score:Mn.score()}),Hi.clear(),nA(l),wt.centerShadows(Xh);let u=25+(10-Hh())*(s?7:4);Ke.shadowMap.enabled&&n-jx>=u&&(Ke.shadowMap.needsUpdate=!0,jx=n),uA(n,o);let f=s&&V.post,d=s&&V.rayTrace;DT(d,At);let h=V.vrFov/100;if(!f||!LT.render(Et,Yt,{bloom:V.bloom,visibleField:h})){Rh.material.uniforms.visibleField.value=h,Rh.visible=s&&h<1;try{Ke.render(Et,Yt)}finally{Rh.visible=!1}}if((s||!zp)&&(Bp[Uh]=t*1e3,Uh=(Uh+1)%720,n-_p>350)){_p=n;let{calls:p,triangles:x,lines:g,points:m}=Ke.info.render;Fy={calls:p,triangles:x,lines:g,points:m,textures:Ke.info.memory.textures},s&&(Op={refreshHz:Ke.xr.getSession()?.frameRate??null,targetFps:Rp,supportedHz:hl.slice(),foveation:Ke.xr.getFoveation()??null,visualEffects:{post:f,bloom:f&&V.bloom,rayTrace:d},eyeViewports:Ke.xr.getCamera().cameras.map(b=>({width:b.viewport?.z??null,height:b.viewport?.w??null}))})}});})();
