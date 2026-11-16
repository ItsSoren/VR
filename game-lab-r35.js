(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var tg=0,sf=1,ng=2;var Ha=1,ig=2,xi=3,si=0,un=1,qt=2,Bi=0,Fs=1,jn=2,rf=3,of=4,sg=5,ls=100,rg=101,og=102,ag=103,lg=104,cg=200,ug=201,hg=202,dg=203,hc=204,dc=205,fg=206,pg=207,mg=208,gg=209,yg=210,xg=211,vg=212,_g=213,Mg=214,Gc=0,Hc=1,Wc=2,Ns=3,qc=4,Xc=5,Yc=6,Zc=7,jc=0,bg=1,Sg=2,Oi=0,wg=1,Tg=2,Ag=3,Jc=4,Eg=5,Cg=6,Rg=7;var af=300,Ys=301,Zs=302,no=303,$c=304,Wa=306,mi=1e3,as=1001,fc=1002,on=1003,Pg=1004;var qa=1005;var an=1006,Kc=1007;var Rn=1008;var Vn=1009,lf=1010,cf=1011,io=1012,Qc=1013,hs=1014,ai=1015,vi=1016,eu=1017,tu=1018,so=1020,uf=35902,hf=35899,df=1021,ff=1022,Pn=1023,Or=1026,ro=1027,nu=1028,iu=1029,pf=1030,su=1031;var ru=1033,Xa=33776,Ya=33777,Za=33778,ja=33779,ou=35840,au=35841,lu=35842,cu=35843,uu=36196,hu=37492,du=37496,fu=37808,pu=37809,mu=37810,gu=37811,yu=37812,xu=37813,vu=37814,_u=37815,Mu=37816,bu=37817,Su=37818,wu=37819,Tu=37820,Au=37821,Eu=36492,Cu=36494,Ru=36495,Pu=36283,Iu=36284,Lu=36285,Du=36286;var la=2300,pc=2301,cc=2302,Wd=2400,qd=2401,Xd=2402;var Ig=3200,Lg=3201;var Uu=0,Dg=1,zi="",vt="srgb",Bs="srgb-linear",ca="linear",_t="srgb";var Us=7680;var Yd=519,Ug=512,Fg=513,Ng=514,mf=515,Bg=516,Og=517,zg=518,Vg=519,mc=35044,Sn=35048;var gf="300 es",ii=2e3,ua=2001;var Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gm=1234567,sa=Math.PI/180,zr=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function yf(n,e){return(n%e+e)%e}function zv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vv(n,e,t){return n!==e?(t-n)/(e-n):0}function ra(n,e,t){return(1-t)*n+t*e}function kv(n,e,t,i){return ra(n,e,1-Math.exp(-t*i))}function Gv(n,e=1){return e-Math.abs(yf(n,e*2)-e)}function Hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xv(n,e){return n+Math.random()*(e-n)}function Yv(n){return n*(.5-Math.random())}function Zv(n){n!==void 0&&(gm=n);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(n){return n*sa}function Jv(n){return n*zr}function $v(n){return(n&n-1)===0&&n!==0}function Kv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function e_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var He={DEG2RAD:sa,RAD2DEG:zr,generateUUID:pi,clamp:Qe,euclideanModulo:yf,mapLinear:zv,inverseLerp:Vv,lerp:ra,damp:kv,pingpong:Gv,smoothstep:Hv,smootherstep:Wv,randInt:qv,randFloat:Xv,randFloatSpread:Yv,seededRandom:Zv,degToRad:jv,radToDeg:Jv,isPowerOfTwo:$v,ceilPowerOfTwo:Kv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:e_,normalize:xt,denormalize:ni},Ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=y;return}if(h!==y||l!==f||c!==d||u!==p){let m=1-a,g=l*f+c*d+u*p+h*y,b=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let C=Math.sqrt(w),A=Math.atan2(C,g*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let _=a*b;if(l=l*m+f*_,c=c*m+d*_,u=u*m+p*_,h=h*m+y*_,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},md=new M,ym=new qe,nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],y=s[0],m=s[3],g=s[6],b=s[1],w=s[4],_=s[7],C=s[2],A=s[5],L=s[8];return r[0]=o*y+a*b+l*C,r[3]=o*m+a*w+l*A,r[6]=o*g+a*_+l*L,r[1]=c*y+u*b+h*C,r[4]=c*m+u*w+h*A,r[7]=c*g+u*_+h*L,r[2]=f*y+d*b+p*C,r[5]=f*m+d*w+p*A,r[8]=f*g+d*_+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gd.makeScale(e,t)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gd=new nt;function xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kg(){let n=Vr("canvas");return n.style.display="block",n}var xm={};function kr(n){n in xm||(xm[n]=!0,console.warn(n))}function Gg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var vm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t_(){let n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Br(s.r),s.g=Br(s.g),s.b=Br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}var ut=t_();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yr,gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=Vr("canvas")),yr.width=e.width,yr.height=e.height;let s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n_=0,Gr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yd(s[o].image)):r.push(yd(s[o]))}else r=yd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function yd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i_=0,xd=new M,pn=class n extends Di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=as,s=as,r=an,o=Rn,a=Pn,l=Vn,c=n.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=pi(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mi:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mi:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=af;pn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(d+1)/2,C=(g+1)/2,A=(u+f)/4,L=(h+y)/4,U=(p+m)/4;return w>_&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=L/i):_>C?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new pn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends yc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ha=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Ul.subVectors(this.max,Xo),xr.subVectors(e.a,Xo),vr.subVectors(e.b,Xo),_r.subVectors(e.c,Xo),ts.subVectors(vr,xr),ns.subVectors(_r,vr),Ps.subVectors(xr,_r);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ps.y,Ps.x,0];return!vd(t,xr,vr,_r,Ul)||(t=[1,0,0,0,1,0,0,0,1],!vd(t,xr,vr,_r,Ul))?!1:(Fl.crossVectors(ts,ns),t=[Fl.x,Fl.y,Fl.z],vd(t,xr,vr,_r,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new M,new M,new M,new M,new M,new M,new M,new M],Qn=new M,Dl=new rn,xr=new M,vr=new M,_r=new M,ts=new M,ns=new M,Ps=new M,Xo=new M,Ul=new M,Fl=new M,Is=new M;function vd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Is.fromArray(n,r);let a=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),u=i.dot(Is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var s_=new rn,Yo=new M,_d=new M,Xn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):s_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let t=Yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(_d)),this.expandByPoint(Yo.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ci=new M,Md=new M,Nl=new M,is=new M,bd=new M,Bl=new M,Sd=new M,Os=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Md.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Md);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),a=is.dot(this.direction),l=-is.dot(Nl),c=is.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Md).addScaledVector(Nl,f),d}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){bd.subVectors(t,e),Bl.subVectors(i,e),Sd.crossVectors(bd,Bl);let o=this.direction.dot(Sd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let l=a*this.direction.dot(Bl.crossVectors(is,Bl));if(l<0)return null;let c=a*this.direction.dot(bd.cross(is));if(c<0||l+c>o)return null;let u=-a*is.dot(Sd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,y,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,y=c*h;t[0]=f+y*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,y=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-y*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,o_)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ss.crossVectors(i,Nn),ss.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ss.crossVectors(i,Nn)),ss.normalize(),Ol.crossVectors(Nn,ss),s[0]=ss.x,s[4]=Ol.x,s[8]=Nn.x,s[1]=ss.y,s[5]=Ol.y,s[9]=Nn.y,s[2]=ss.z,s[6]=Ol.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],y=i[6],m=i[10],g=i[14],b=i[3],w=i[7],_=i[11],C=i[15],A=s[0],L=s[4],U=s[8],S=s[12],v=s[1],T=s[5],F=s[9],N=s[13],k=s[2],H=s[6],V=s[10],J=s[14],B=s[3],oe=s[7],le=s[11],ie=s[15];return r[0]=o*A+a*v+l*k+c*B,r[4]=o*L+a*T+l*H+c*oe,r[8]=o*U+a*F+l*V+c*le,r[12]=o*S+a*N+l*J+c*ie,r[1]=u*A+h*v+f*k+d*B,r[5]=u*L+h*T+f*H+d*oe,r[9]=u*U+h*F+f*V+d*le,r[13]=u*S+h*N+f*J+d*ie,r[2]=p*A+y*v+m*k+g*B,r[6]=p*L+y*T+m*H+g*oe,r[10]=p*U+y*F+m*V+g*le,r[14]=p*S+y*N+m*J+g*ie,r[3]=b*A+w*v+_*k+C*B,r[7]=b*L+w*T+_*H+C*oe,r[11]=b*U+w*F+_*V+C*le,r[15]=b*S+w*N+_*J+C*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],y=e[7],m=e[11],g=e[15];return p*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+y*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+g*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],y=e[13],m=e[14],g=e[15],b=h*m*c-y*f*c+y*l*d-a*m*d-h*l*g+a*f*g,w=p*f*c-u*m*c-p*l*d+o*m*d+u*l*g-o*f*g,_=u*y*c-p*h*c+p*a*d-o*y*d-u*a*g+o*h*g,C=p*h*l-u*y*l-p*a*f+o*y*f+u*a*m-o*h*m,A=t*b+i*w+s*_+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=b*L,e[1]=(y*f*r-h*m*r-y*s*d+i*m*d+h*s*g-i*f*g)*L,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*g+i*l*g)*L,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*L,e[4]=w*L,e[5]=(u*m*r-p*f*r+p*s*d-t*m*d-u*s*g+t*f*g)*L,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*g-t*l*g)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=_*L,e[9]=(p*h*r-u*y*r-p*i*d+t*y*d+u*i*g-t*h*g)*L,e[10]=(o*y*r-p*a*r+p*i*c-t*y*c-o*i*g+t*a*g)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*L,e[12]=C*L,e[13]=(u*y*s-p*h*s+p*i*f-t*y*f-u*i*m+t*h*m)*L,e[14]=(p*a*s-o*y*s-p*i*l+t*y*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,y=o*u,m=o*h,g=a*h,b=l*c,w=l*u,_=l*h,C=i.x,A=i.y,L=i.z;return s[0]=(1-(y+g))*C,s[1]=(d+_)*C,s[2]=(p-w)*C,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+g))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(p+w)*L,s[9]=(m-b)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Mr.set(s[0],s[1],s[2]).length(),o=Mr.set(s[4],s[5],s[6]).length(),a=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,u=1/o,h=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ua)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ii,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===ii)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===ua)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Mr=new M,ei=new at,r_=new M(0,0,0),o_=new M(1,1,1),ss=new M,Ol=new M,Nn=new M,Mm=new at,bm=new qe,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a_=0,Sm=new M,br=new qe,Ri=new at,zl=new M,Zo=new M,l_=new M,c_=new qe,wm=new M(1,0,0),Tm=new M(0,1,0),Am=new M(0,0,1),Em={type:"added"},u_={type:"removed"},Sr={type:"childadded",child:null},wd={type:"childremoved",child:null},Lt=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new ln,i=new qe,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Zo,zl,this.up):Ri.lookAt(zl,Zo,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Ri),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new M(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new M,Pi=new M,Td=new M,Ii=new M,wr=new M,Tr=new M,Cm=new M,Ad=new M,Ed=new M,Cd=new M,Rd=new lt,Pd=new lt,Id=new lt,En=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Pi.subVectors(i,t),Td.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Pi),l=ti.dot(Td),c=Pi.dot(Pi),u=Pi.dot(Td),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rd.setScalar(0),Pd.setScalar(0),Id.setScalar(0),Rd.fromBufferAttribute(e,t),Pd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rd,r.x),o.addScaledVector(Pd,r.y),o.addScaledVector(Id,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Pi.subVectors(e,t),ti.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;wr.subVectors(s,i),Tr.subVectors(r,i),Ad.subVectors(e,i);let l=wr.dot(Ad),c=Tr.dot(Ad);if(l<=0&&c<=0)return t.copy(i);Ed.subVectors(e,s);let u=wr.dot(Ed),h=Tr.dot(Ed);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(wr,o);Cd.subVectors(e,r);let d=wr.dot(Cd),p=Tr.dot(Cd);if(p>=0&&d<=p)return t.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Tr,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Cm.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Cm,a);let g=1/(m+y+f);return o=y*g,a=f*g,t.copy(i).addScaledVector(wr,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Ld(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=yf(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ld(o,r,e+1/3),this.g=Ld(o,r,e),this.b=Ld(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Hg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return ut.workingToColorSpace(fn.copy(this),e),Math.round(Qe(fn.r*255,0,255))*65536+Math.round(Qe(fn.g*255,0,255))*256+Math.round(Qe(fn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=vt){ut.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Vl);let i=ra(rs.h,Vl.h,t),s=ra(rs.s,Vl.s,t),r=ra(rs.l,Vl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new De;De.NAMES=Hg;var h_=0,Yn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Fs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yt=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new M,kl=new Ae,d_=0,ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}};var zs=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ve=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},f_=0,qn=new at,Dd=new Lt,Ar=new M,Bn=new rn,jo=new rn,sn=new M,$e=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?da:zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Bn.min,jo.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,jo.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(jo.min),Bn.expandByPoint(jo.max))}Bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),sn.add(Ar)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new M,l[U]=new M;let c=new M,u=new M,h=new M,f=new Ae,d=new Ae,p=new Ae,y=new M,m=new M;function g(U,S,v){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(T),a[U].add(y),a[S].add(y),a[v].add(y),l[U].add(m),l[S].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){let v=b[U],T=v.start,F=v.count;for(let N=T,k=T+F;N<k;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new M,_=new M,C=new M,A=new M;function L(U){C.fromBufferAttribute(s,U),A.copy(C);let S=a[U];w.copy(S),w.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(A,S);let T=_.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,T)}for(let U=0,S=b.length;U<S;++U){let v=b[U],T=v.start,F=v.count;for(let N=T,k=T+F;N<k;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new ft(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rm=new at,Ls=new Os,Gl=new Xn,Pm=new M,Hl=new M,Wl=new M,ql=new M,Ud=new M,Xl=new M,Im=new M,Yl=new M,Be=class extends Lt{constructor(e=new $e,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ud.fromBufferAttribute(h,e),o?Xl.addScaledVector(Ud,u):Xl.addScaledVector(Ud.sub(t),u))}t.add(Xl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Gl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Gl,Pm)===null||Ls.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,C=w;_<C;_+=3){let A=a.getX(_),L=a.getX(_+1),U=a.getX(_+2);s=Zl(this,g,e,i,c,u,h,A,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let b=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=Zl(this,o,e,i,c,u,h,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,C=w;_<C;_+=3){let A=_,L=_+1,U=_+2;s=Zl(this,g,e,i,c,u,h,A,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let b=m,w=m+1,_=m+2;s=Zl(this,o,e,i,c,u,h,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function p_(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;Yl.copy(a),Yl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Yl);return c<t.near||c>t.far?null:{distance:c,point:Yl.clone(),object:n}}function Zl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Hl),n.getVertexPosition(l,Wl),n.getVertexPosition(c,ql);let u=p_(n,e,t,i,Hl,Wl,ql,Im);if(u){let h=new M;En.getBarycoord(Im,Hl,Wl,ql,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,l,c,h,new Ae)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,l,c,h,new Ae)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,h,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};En.getNormal(Hl,Wl,ql,f.normal),u.face=f,u.barycoord=h}return u}var et=class n extends $e{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function p(y,m,g,b,w,_,C,A,L,U,S){let v=_/L,T=C/U,F=_/2,N=C/2,k=A/2,H=L+1,V=U+1,J=0,B=0,oe=new M;for(let le=0;le<V;le++){let ie=le*T-N;for(let re=0;re<H;re++){let Se=re*v-F;oe[y]=Se*b,oe[m]=ie*w,oe[g]=k,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[m]=0,oe[g]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(re/L),h.push(1-le/U),J+=1}}for(let le=0;le<U;le++)for(let ie=0;ie<L;ie++){let re=f+ie+H*le,Se=f+ie+H*(le+1),me=f+(ie+1)+H*(le+1),de=f+(ie+1)+H*le;l.push(re,Se,de),l.push(Se,me,de),B+=6}a.addGroup(d,B,S),d+=B,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=js(n[t]);for(let s in i)e[s]=i[s]}return e}function m_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Fu={clone:js,merge:mn},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fa=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new M,Lm=new Ae,Dm=new Ae,Ht=class extends fa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Dm),t.subVectors(Dm,Lm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,Cr=1,vc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Er,Cr,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Er,Cr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Er,Cr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Er,Cr,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Er,Cr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Er,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},pa=class extends pn{constructor(e=[],t=Ys,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_c=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Bi});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Rn&&(t.minFilter=an),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},gt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},x_={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ma=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ga=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new M,qr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xr=class extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rr,Jo=new M,Pr=new M,Ir=new M,Lr=new Ae,$o=new Ae,Wg=new at,jl=new M,Ko=new M,Jl=new M,Um=new Ae,Fd=new Ae,Fm=new Ae,ya=class extends Lt{constructor(e=new Xr){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ga(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new qr(i,3,0,!1)),Rr.setAttribute("uv",new qr(i,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),Wg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Ir.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;$l(jl.set(-.5,-.5,0),Ir,o,Pr,s,r),$l(Ko.set(.5,-.5,0),Ir,o,Pr,s,r),$l(Jl.set(.5,.5,0),Ir,o,Pr,s,r),Um.set(0,0),Fd.set(1,0),Fm.set(1,1);let a=e.ray.intersectTriangle(jl,Ko,Jl,!1,Jo);if(a===null&&($l(Ko.set(-.5,.5,0),Ir,o,Pr,s,r),Fd.set(0,1),a=e.ray.intersectTriangle(jl,Jl,Ko,!1,Jo),a===null))return;let l=e.ray.origin.distanceTo(Jo);l<e.near||l>e.far||t.push({distance:l,point:Jo.clone(),uv:En.getInterpolation(Jo,jl,Ko,Jl,Um,Fd,Fm,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $l(n,e,t,i,s,r){Lr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($o.x=r*Lr.x-s*Lr.y,$o.y=s*Lr.x+r*Lr.y):$o.copy(Lr),n.copy(e),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(Wg)}var gi=class extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dr=new at,Nm=new at,Kl=[],Bm=new rn,v_=new at,Qo=new Be,ea=new Xn,xa=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,v_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),Bm.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Bm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),ea.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Nm.multiplyMatrices(i,Dr),Qo.matrixWorld=Nm,Qo.raycast(e,Kl);for(let o=0,a=Kl.length;o<a;o++){let l=Kl[o];l.instanceId=r,l.object=this,t.push(l)}Kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(s*this.count),s,this.count,nu,ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nd=new M,__=new M,M_=new nt,An=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nd.subVectors(i,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||M_.getNormalMatrix(e),s=this.coplanarPoint(Nd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Xn,b_=new Ae(.5,.5),Ql=new M,Zr=class{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],y=r[9],m=r[10],g=r[11],b=r[12],w=r[13],_=r[14],C=r[15];if(s[0].setComponents(c-o,d-u,g-p,C-b).normalize(),s[1].setComponents(c+o,d+u,g+p,C+b).normalize(),s[2].setComponents(c+a,d+h,g+y,C+w).normalize(),s[3].setComponents(c-a,d-h,g-y,C-w).normalize(),i)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,g-m,C-_).normalize();else if(s[4].setComponents(c-l,d-f,g-m,C-_).normalize(),t===ii)s[5].setComponents(c+l,d+f,g+m,C+_).normalize();else if(t===ua)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=b_.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ql.x=s.normal.x>0?e.max.x:e.min.x,Ql.y=s.normal.y>0?e.max.y:e.min.y,Ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yi=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mc=new M,bc=new M,Om=new at,ta=new Os,ec=new Xn,Bd=new M,zm=new M,va=class extends Lt{constructor(e=new $e,t=new yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Mc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Mc.distanceTo(bc);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;Om.copy(s).invert(),ta.copy(e.ray).applyMatrix4(Om);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=c){let g=u.getX(y),b=u.getX(y+1),w=tc(this,e,ta,l,g,b,y);w&&t.push(w)}if(this.isLineLoop){let y=u.getX(p-1),m=u.getX(d),g=tc(this,e,ta,l,y,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=c){let g=tc(this,e,ta,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=tc(this,e,ta,l,p-1,d,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Mc.fromBufferAttribute(a,s),bc.fromBufferAttribute(a,r),t.distanceSqToSegment(Mc,bc,Bd,zm)>i)return;Bd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Bd);if(!(c<e.near||c>e.far))return{distance:c,point:zm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Vm=new M,km=new M,ks=class extends va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vm.fromBufferAttribute(t,s),km.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vm.distanceTo(km);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_a=class extends va{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jr=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gm=new at,Zd=new Os,nc=new Xn,ic=new M,Ma=class extends Lt{constructor(e=new $e,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;Gm.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(Gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,y=d;p<y;p++){let m=c.getX(p);ic.fromBufferAttribute(h,m),Hm(ic,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,y=d;p<y;p++)ic.fromBufferAttribute(h,p),Hm(ic,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hm(n,e,t,i,s,r,o){let a=Zd.distanceSqToPoint(n);if(a<t){let l=new M;Zd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Zn=class extends pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ba=class extends pn{constructor(e,t,i=hs,s,r,o,a=on,l=on,c,u=Or,h=1){if(u!==Or&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sa=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wa=class n extends $e{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,p=i*2+r,y=s+1,m=new M,g=new M;for(let b=0;b<=p;b++){let w=0,_=0,C=0,A=0;if(b<=i){let S=b/i,v=S*Math.PI/2;_=-u-e*Math.cos(v),C=e*Math.sin(v),A=-e*Math.cos(v),w=S*h}else if(b<=i+r){let S=(b-i)/r;_=-u+S*t,C=e,A=0,w=h+S*f}else{let S=(b-i-r)/i,v=S*Math.PI/2;_=u+e*Math.sin(v),C=e*Math.cos(v),A=e*Math.sin(v),w=h+f+S*h}let L=Math.max(0,Math.min(1,w/d)),U=0;b===0?U=.5/s:b===p&&(U=-.5/s);for(let S=0;S<=s;S++){let v=S/s,T=v*Math.PI*2,F=Math.sin(T),N=Math.cos(T);g.x=-C*N,g.y=_,g.z=C*F,a.push(g.x,g.y,g.z),m.set(-C*N,A,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+U,L)}if(b>0){let S=(b-1)*y;for(let v=0;v<s;v++){let T=S+v,F=S+v+1,N=b*y+v,k=b*y+v+1;o.push(T,F,N),o.push(F,k,N)}}}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Kt=class n extends $e{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class n extends $e{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,y=[],m=i/2,g=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2));function b(){let _=new M,C=new M,A=0,L=(t-e)/i;for(let U=0;U<=r;U++){let S=[],v=U/r,T=v*(t-e)+e;for(let F=0;F<=s;F++){let N=F/s,k=N*l+a,H=Math.sin(k),V=Math.cos(k);C.x=T*H,C.y=-v*i+m,C.z=T*V,h.push(C.x,C.y,C.z),_.set(H,L,V).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-v),S.push(p++)}y.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let v=y[S][U],T=y[S+1][U],F=y[S+1][U+1],N=y[S][U+1];(e>0||S!==0)&&(u.push(v,T,N),A+=3),(t>0||S!==r-1)&&(u.push(T,F,N),A+=3)}c.addGroup(g,A,0),g+=A}function w(_){let C=p,A=new Ae,L=new M,U=0,S=_===!0?e:t,v=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),p++;let T=p;for(let F=0;F<=s;F++){let k=F/s*l+a,H=Math.cos(k),V=Math.sin(k);L.x=S*V,L.y=m*v,L.z=S*H,h.push(L.x,L.y,L.z),f.push(0,v,0),A.x=H*.5+.5,A.y=V*.5*v+.5,d.push(A.x,A.y),p++}for(let F=0;F<s;F++){let N=C+F,k=T+F;_===!0?u.push(k,k+1,N):u.push(k+1,k,N),U+=3}c.addGroup(g,U,_===!0?1:2),g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gs=class n extends Wt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jr=class n extends $e{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new M,_=new M,C=new M;for(let A=0;A<t.length;A+=3)d(t[A+0],w),d(t[A+1],_),d(t[A+2],C),l(w,_,C,b)}function l(b,w,_,C){let A=C+1,L=[];for(let U=0;U<=A;U++){L[U]=[];let S=b.clone().lerp(_,U/A),v=w.clone().lerp(_,U/A),T=A-U;for(let F=0;F<=T;F++)F===0&&U===A?L[U][F]=S:L[U][F]=S.clone().lerp(v,F/T)}for(let U=0;U<A;U++)for(let S=0;S<2*(A-U)-1;S++){let v=Math.floor(S/2);S%2===0?(f(L[U][v+1]),f(L[U+1][v]),f(L[U][v])):(f(L[U][v+1]),f(L[U+1][v+1]),f(L[U+1][v]))}}function c(b){let w=new M;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function u(){let b=new M;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let _=m(b)/2/Math.PI+.5,C=g(b)/Math.PI+.5;o.push(_,1-C)}p(),h()}function h(){for(let b=0;b<o.length;b+=6){let w=o[b+0],_=o[b+2],C=o[b+4],A=Math.max(w,_,C),L=Math.min(w,_,C);A>.9&&L<.1&&(w<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,w){let _=b*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let b=new M,w=new M,_=new M,C=new M,A=new Ae,L=new Ae,U=new Ae;for(let S=0,v=0;S<r.length;S+=9,v+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(o[v+0],o[v+1]),L.set(o[v+2],o[v+3]),U.set(o[v+4],o[v+5]),C.copy(b).add(w).add(_).divideScalar(3);let T=m(C);y(A,v+0,b,T),y(L,v+2,w,T),y(U,v+4,_,T)}}function y(b,w,_,C){C<0&&b.x===1&&(o[w]=b.x-1),_.x===0&&_.z===0&&(o[w]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new at;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sc=class extends $r{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _f(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var sc=new M,Od=new _f,zd=new _f,Vd=new _f,wc=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(sc.subVectors(s[0],s[1]).add(s[0]),c=sc);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(sc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Od.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,y,m),zd.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,y,m),Vd.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),zd.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vd.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Od.calc(l),zd.calc(l),Vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function S_(n,e){let t=1-n;return t*t*e}function w_(n,e){return 2*(1-n)*n*e}function T_(n,e){return n*n*e}function oa(n,e,t,i){return S_(n,e)+w_(n,t)+T_(n,i)}function A_(n,e){let t=1-n;return t*t*t*e}function E_(n,e){let t=1-n;return 3*t*t*n*e}function C_(n,e){return 3*(1-n)*n*n*e}function R_(n,e){return n*n*n*e}function aa(n,e,t,i,s){return A_(n,e)+E_(n,t)+C_(n,i)+R_(n,s)}var Ta=class extends On{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,s.x,r.x,o.x,a.x),aa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tc=class extends On{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,s.x,r.x,o.x,a.x),aa(e,s.y,r.y,o.y,a.y),aa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends On{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends On{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends On{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(oa(e,s.x,r.x,o.x),oa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends On{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(oa(e,s.x,r.x,o.x),oa(e,s.y,r.y,o.y),oa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Wm(a,l.x,c.x,u.x,h.x),Wm(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:wc,CubicBezierCurve:Ta,CubicBezierCurve3:Tc,EllipseCurve:$r,LineCurve:Aa,LineCurve3:Ac,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Ec,SplineCurve:Ca}),Cc=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new jd[s.type]().fromJSON(s))}return this}},Ra=class extends Cc{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ea(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ta(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new $r(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ui=class extends Ra{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ra().fromJSON(s))}return this}};function P_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=qg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=F_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Pa(r,o,t,a,l,c,0),o}function qg(n,e,t,i,s){let r;if(s===X_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=qm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=qm(o/i|0,n[o],n[o+1],r);return r&&Kr(r,r.next)&&(La(r),r=r.next),r}function Hs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Kr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&V_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?L_(n,i,s,r):I_(n)){e.push(l.i,n.i,c.i),La(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=D_(Hs(n),e),Pa(n,e,t,i,s,r,2)):o===2&&U_(n,e,t,i,s,r):Pa(Hs(n),e,t,i,s,r,1);break}}}function I_(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&ia(s,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function L_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),y=Math.max(a,l,c),m=Math.max(u,h,f),g=Jd(d,p,e,t,i),b=Jd(y,m,e,t,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=g&&_&&_.z<=b;){if(w.x>=d&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ia(a,u,l,h,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&ia(a,u,l,h,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ia(a,u,l,h,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&ia(a,u,l,h,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Kr(i,s)&&Yg(i,t,t.next,s)&&Ia(i,s)&&Ia(s,i)&&(e.push(i.i,t.i,s.i),La(t),La(t.next),t=n=s),t=t.next}while(t!==n);return Hs(t)}function U_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H_(o,a)){let l=Zg(o,a);o=Hs(o,o.next),l=Hs(l,l.next),Pa(o,e,t,i,s,r,0),Pa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function F_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=qg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(G_(c))}s.sort(N_);for(let r=0;r<s.length;r++)t=B_(s[r],t);return t}function N_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function B_(n,e){let t=O_(n,e);if(!t)return e;let i=Zg(t,n);return Hs(i,i.next),Hs(t,t.next)}function O_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Kr(n,t))return t;do{if(Kr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Xg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Ia(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&z_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function z_(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function V_(n,e,t,i){let s=n;do s.z===0&&(s.z=Jd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Jd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function G_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ia(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Xg(n,e,t,i,s,r,o,a)}function H_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!W_(n,e)&&(Ia(n,e)&&Ia(e,n)&&q_(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||Kr(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Kr(n,e){return n.x===e.x&&n.y===e.y}function Yg(n,e,t,i){let s=oc(Ot(n,e,t)),r=oc(Ot(n,e,i)),o=oc(Ot(t,i,n)),a=oc(Ot(t,i,e));return!!(s!==r&&o!==a||s===0&&rc(n,t,e)||r===0&&rc(n,i,e)||o===0&&rc(t,n,i)||a===0&&rc(t,e,i))}function rc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function oc(n){return n>0?1:n<0?-1:0}function W_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ia(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function q_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zg(n,e){let t=$d(n.i,n.x,n.y),i=$d(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qm(n,e,t,i){let s=$d(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function La(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $d(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function X_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Kd=class{static triangulate(e,t,i=2){return P_(e,t,i)}},fi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Xm(e),Ym(i,e);let o=e.length;t.forEach(Xm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ym(i,t[l]);let a=Kd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ym(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ws=class n extends $e{constructor(e=new Ui([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ve(s,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Y_,w,_=!1,C,A,L,U;g&&(w=g.getSpacedPoints(u),_=!0,f=!1,C=g.computeFrenetFrames(u,!1),A=new M,L=new M,U=new M),f||(m=0,d=0,p=0,y=0);let S=a.extractPoints(c),v=S.shape,T=S.holes;if(!fi.isClockWise(v)){v=v.reverse();for(let X=0,Z=T.length;X<Z;X++){let $=T[X];fi.isClockWise($)&&(T[X]=$.reverse())}}function N(X){let $=10000000000000001e-36,D=X[0];for(let q=1;q<=X.length;q++){let z=q%X.length,te=X[z],ue=te.x-D.x,pe=te.y-D.y,R=ue*ue+pe*pe,x=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(D.x),Math.abs(D.y)),I=$*x*x;if(R<=I){X.splice(z,1),q--;continue}D=te}}N(v),T.forEach(N);let k=T.length,H=v;for(let X=0;X<k;X++){let Z=T[X];v=v.concat(Z)}function V(X,Z,$){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Z,$)}let J=v.length;function B(X,Z,$){let D,q,z,te=X.x-Z.x,ue=X.y-Z.y,pe=$.x-X.x,R=$.y-X.y,x=te*te+ue*ue,I=te*R-ue*pe;if(Math.abs(I)>Number.EPSILON){let G=Math.sqrt(x),se=Math.sqrt(pe*pe+R*R),j=Z.x-ue/G,xe=Z.y+te/G,fe=$.x-R/se,be=$.y+pe/se,_e=((fe-j)*R-(be-xe)*pe)/(te*R-ue*pe);D=j+te*_e-X.x,q=xe+ue*_e-X.y;let he=D*D+q*q;if(he<=2)return new Ae(D,q);z=Math.sqrt(he/2)}else{let G=!1;te>Number.EPSILON?pe>Number.EPSILON&&(G=!0):te<-Number.EPSILON?pe<-Number.EPSILON&&(G=!0):Math.sign(ue)===Math.sign(R)&&(G=!0),G?(D=-ue,q=te,z=Math.sqrt(x)):(D=te,q=ue,z=Math.sqrt(x/2))}return new Ae(D/z,q/z)}let oe=[];for(let X=0,Z=H.length,$=Z-1,D=X+1;X<Z;X++,$++,D++)$===Z&&($=0),D===Z&&(D=0),oe[X]=B(H[X],H[$],H[D]);let le=[],ie,re=oe.concat();for(let X=0,Z=k;X<Z;X++){let $=T[X];ie=[];for(let D=0,q=$.length,z=q-1,te=D+1;D<q;D++,z++,te++)z===q&&(z=0),te===q&&(te=0),ie[D]=B($[D],$[z],$[te]);le.push(ie),re=re.concat(ie)}let Se;if(m===0)Se=fi.triangulateShape(H,T);else{let X=[],Z=[];for(let $=0;$<m;$++){let D=$/m,q=d*Math.cos(D*Math.PI/2),z=p*Math.sin(D*Math.PI/2)+y;for(let te=0,ue=H.length;te<ue;te++){let pe=V(H[te],oe[te],z);Pe(pe.x,pe.y,-q),D===0&&X.push(pe)}for(let te=0,ue=k;te<ue;te++){let pe=T[te];ie=le[te];let R=[];for(let x=0,I=pe.length;x<I;x++){let G=V(pe[x],ie[x],z);Pe(G.x,G.y,-q),D===0&&R.push(G)}D===0&&Z.push(R)}}Se=fi.triangulateShape(X,Z)}let me=Se.length,de=p+y;for(let X=0;X<J;X++){let Z=f?V(v[X],re[X],de):v[X];_?(L.copy(C.normals[0]).multiplyScalar(Z.x),A.copy(C.binormals[0]).multiplyScalar(Z.y),U.copy(w[0]).add(L).add(A),Pe(U.x,U.y,U.z)):Pe(Z.x,Z.y,0)}for(let X=1;X<=u;X++)for(let Z=0;Z<J;Z++){let $=f?V(v[Z],re[Z],de):v[Z];_?(L.copy(C.normals[X]).multiplyScalar($.x),A.copy(C.binormals[X]).multiplyScalar($.y),U.copy(w[X]).add(L).add(A),Pe(U.x,U.y,U.z)):Pe($.x,$.y,h/u*X)}for(let X=m-1;X>=0;X--){let Z=X/m,$=d*Math.cos(Z*Math.PI/2),D=p*Math.sin(Z*Math.PI/2)+y;for(let q=0,z=H.length;q<z;q++){let te=V(H[q],oe[q],D);Pe(te.x,te.y,h+$)}for(let q=0,z=T.length;q<z;q++){let te=T[q];ie=le[q];for(let ue=0,pe=te.length;ue<pe;ue++){let R=V(te[ue],ie[ue],D);_?Pe(R.x,R.y+w[u-1].y,w[u-1].x+$):Pe(R.x,R.y,h+$)}}}ee(),ne();function ee(){let X=s.length/3;if(f){let Z=0,$=J*Z;for(let D=0;D<me;D++){let q=Se[D];Y(q[2]+$,q[1]+$,q[0]+$)}Z=u+m*2,$=J*Z;for(let D=0;D<me;D++){let q=Se[D];Y(q[0]+$,q[1]+$,q[2]+$)}}else{for(let Z=0;Z<me;Z++){let $=Se[Z];Y($[2],$[1],$[0])}for(let Z=0;Z<me;Z++){let $=Se[Z];Y($[0]+J*u,$[1]+J*u,$[2]+J*u)}}i.addGroup(X,s.length/3-X,0)}function ne(){let X=s.length/3,Z=0;ge(H,Z),Z+=H.length;for(let $=0,D=T.length;$<D;$++){let q=T[$];ge(q,Z),Z+=q.length}i.addGroup(X,s.length/3-X,1)}function ge(X,Z){let $=X.length;for(;--$>=0;){let D=$,q=$-1;q<0&&(q=X.length-1);for(let z=0,te=u+m*2;z<te;z++){let ue=J*z,pe=J*(z+1),R=Z+D+ue,x=Z+q+ue,I=Z+q+pe,G=Z+D+pe;ye(R,x,I,G)}}}function Pe(X,Z,$){l.push(X),l.push(Z),l.push($)}function Y(X,Z,$){Me(X),Me(Z),Me($);let D=s.length/3,q=b.generateTopUV(i,s,D-3,D-2,D-1);E(q[0]),E(q[1]),E(q[2])}function ye(X,Z,$,D){Me(X),Me(Z),Me(D),Me(Z),Me($),Me(D);let q=s.length/3,z=b.generateSideWallUV(i,s,q-6,q-3,q-2,q-1);E(z[0]),E(z[1]),E(z[3]),E(z[1]),E(z[2]),E(z[3])}function Me(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function E(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Z_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jd[s.type]().fromJSON(s)),new n(i,e.options)}},Y_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-h),new Ae(f,1-p),new Ae(y,1-g)]:[new Ae(a,1-l),new Ae(u,1-h),new Ae(d,1-p),new Ae(m,1-g)]}};function Z_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class n extends Jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ri=class n extends Jr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Jt=class n extends $e{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let b=g*f-o;for(let w=0;w<c;w++){let _=w*h-r;p.push(_,-b,0),y.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let w=b+c*g,_=b+c*(g+1),C=b+1+c*(g+1),A=b+1+c*g;d.push(w,_,A),d.push(_,C,A)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(y,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Qr=class n extends $e{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new M,p=new Ae;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let g=r+m/i*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let y=0;y<s;y++){let m=y*(i+1);for(let g=0;g<i;g++){let b=g+m,w=b,_=b+i+1,C=b+i+2,A=b+1;a.push(w,_,A),a.push(_,C,A)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Da=class n extends $e{constructor(e=new Ui([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(u){let h=s.length/3,f=u.extractPoints(t),d=f.shape,p=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];fi.isClockWise(b)===!0&&(p[m]=b.reverse())}let y=fi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];d=d.concat(b)}for(let m=0,g=d.length;m<g;m++){let b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=y.length;m<g;m++){let b=y[m],w=b[0]+h,_=b[1]+h,C=b[2]+h;i.push(w,_,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function j_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var oi=class n extends $e{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new M,f=new M,d=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let b=[],w=g/i,_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let A=C/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+w*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(A+_,1-w),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let w=u[g][b+1],_=u[g][b],C=u[g+1][b],A=u[g+1][b+1];(g!==0||o>0)&&d.push(w,_,A),(g!==i-1||l<Math.PI)&&d.push(_,C,A)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(y,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ua=class n extends Jr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fi=class n extends $e{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,h=new M,f=new M;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let y=p/s*r,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let y=(s+1)*d+p-1,m=(s+1)*(d-1)+p-1,g=(s+1)*(d-1)+p,b=(s+1)*d+p;o.push(y,m,b),o.push(m,g,b)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var qs=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let p=f,y=f+d;p<y;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,b),Zm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Zm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Mt=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fa=class extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Qt=class extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rc=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ac(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function J_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Xs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ic=class extends Xs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qd:r=e,a=2*t-i;break;case Xd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qd:o=e,l=2*i-t;break;case Xd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),y=p*p,m=y*p,g=-f*m+2*f*y-f*p,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*y+.5*p,_=d*m-d*y;for(let C=0;C!==a;++C)r[C]=g*o[u+C]+b*o[c+C]+w*o[l+C]+_*o[h+C];return r}},Lc=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Dc=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ac(t,this.TimeBufferType),this.values=ac(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ac(e.times,Array),values:ac(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case pc:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&J_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let y=t[h+p];if(y!==t[f+p]||y!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=pc;var cs=class extends zn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=la;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Uc.prototype.ValueTypeName="color";var Fc=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Fc.prototype.ValueTypeName="number";var Nc=class extends Xs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Na=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends zn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=la;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Bc.prototype.ValueTypeName="vector";var uc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Oc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},jg=new Oc,eo=class{constructor(e){this.manager=e!==void 0?e:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=new WeakMap,zc=class extends eo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=uc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ur.get(o);h===void 0&&(h=[],Ur.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Vr("img");function l(){u(),t&&t(this);let h=Ur.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ur.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),uc.remove(`image:${e}`);let f=Ur.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),uc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ba=class extends eo{constructor(e){super(e)}load(e,t,i,s){let r=new pn,o=new zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},to=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oa=class extends to{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kd=new at,jm=new M,Jm=new M,Vc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),Jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jm),t.updateMatrixWorld(),kd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $m=new at,na=new M,Gd=new M,Qd=class extends Vc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),Gd.copy(i.position),Gd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gd),i.updateMatrixWorld(),s.makeTranslation(-na.x,-na.y,-na.z),$m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($m,i.coordinateSystem,i.reversedDepth)}},za=class extends to{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Va=class extends fa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ef=class extends Vc{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mf="\\[\\]\\.:\\/",$_=new RegExp("["+Mf+"]","g"),bf="[^"+Mf+"]",K_="[^"+Mf.replace("\\.","")+"]",Q_=/((?:WC+[\/:])*)/.source.replace("WC",bf),eM=/(WCOD+)?/.source.replace("WCOD",K_),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bf),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bf),iM=new RegExp("^"+Q_+eM+tM+nM+"$"),sM=["material","materials","bones","map"],tf=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($_,"")}static parseTrackName(e){let t=iM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);sM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=tf;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fE=new Float32Array(1);var Km=new at,Ni=class{constructor(e,t,i=0,s=1/0){this.ray=new Os(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,t=!0,i=[]){return nf(e,this,i,t),i.sort(Qm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)nf(e[s],this,i,t);return i.sort(Qm),i}};function Qm(n,e){return n.distance-e.distance}function nf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)nf(r[o],e,t,!0)}}var eg=new M,lc=new M,Fr=new M,Nr=new M,Hd=new M,rM=new M,oM=new M,Ga=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){eg.subVectors(e,this.start),lc.subVectors(this.end,this.start);let i=lc.dot(lc),r=lc.dot(eg)/i;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=rM,i=oM){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Fr.subVectors(c,a),Nr.subVectors(u,l),Hd.subVectors(a,l);let h=Fr.dot(Fr),f=Nr.dot(Nr),d=Nr.dot(Hd);if(h<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,o=d/f,o=Qe(o,0,1);else{let p=Fr.dot(Hd);if(f<=s)o=0,r=Qe(-p/h,0,1);else{let y=Fr.dot(Nr),m=h*f-y*y;m!==0?r=Qe((y*d-p*f)/m,0,1):r=0,o=(y*r+d)/f,o<0?(o=0,r=Qe(-p/h,0,1)):o>1&&(o=1,r=Qe((y-p)/h,0,1))}}return t.copy(a).add(Fr.multiplyScalar(r)),i.copy(l).add(Nr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Sf(n,e,t,i){let s=aM(i);switch(t){case df:return n*e;case nu:return n*e/s.components*s.byteLength;case iu:return n*e/s.components*s.byteLength;case pf:return n*e*2/s.components*s.byteLength;case su:return n*e*2/s.components*s.byteLength;case ff:return n*e*3/s.components*s.byteLength;case Pn:return n*e*4/s.components*s.byteLength;case ru:return n*e*4/s.components*s.byteLength;case Xa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:case cu:return Math.max(n,16)*Math.max(e,8)/4;case ou:case lu:return Math.max(n,8)*Math.max(e,8)/2;case uu:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Cu:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pu:case Iu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lu:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aM(n){switch(n){case Vn:case lf:return{byteLength:1,components:1};case io:case cf:case vi:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case hs:case Qc:case ai:return{byteLength:4,components:1};case uf:case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],y=h[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let y=h[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
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
#endif`,bM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NM=`#define PI 3.141592653589793
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
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
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
#endif`,hb=`struct PhysicalMaterial {
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
}`,db=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bb=`#if defined( USE_POINTS_UV )
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
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fb=`#ifdef USE_NORMALMAP
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
#endif`,Nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$b=`float getShadowMask() {
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
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,M1=`#define DISTANCE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,E1=`uniform vec3 diffuse;
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
}`,C1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,P1=`#define MATCAP
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
}`,I1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
}`,O1=`#define TOON
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
}`,z1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,q1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:fM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:yM,alphatest_pars_fragment:xM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:MM,batching_vertex:bM,begin_vertex:SM,beginnormal_vertex:wM,bsdfs:TM,iridescence_fragment:AM,bumpmap_pars_fragment:EM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:IM,color_fragment:LM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:FM,common:NM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:OM,displacementmap_pars_vertex:zM,displacementmap_vertex:VM,emissivemap_fragment:kM,emissivemap_pars_fragment:GM,colorspace_fragment:HM,colorspace_pars_fragment:WM,envmap_fragment:qM,envmap_common_pars_fragment:XM,envmap_pars_fragment:YM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:rb,envmap_vertex:jM,fog_vertex:JM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:QM,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:ab,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:fb,lights_fragment_end:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:xb,map_fragment:vb,map_pars_fragment:_b,map_particle_fragment:Mb,map_particle_pars_fragment:bb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:wb,morphinstance_vertex:Tb,morphcolor_vertex:Ab,morphnormal_vertex:Eb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Rb,normal_fragment_begin:Pb,normal_fragment_maps:Ib,normal_pars_fragment:Lb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Fb,clearcoat_normal_fragment_begin:Nb,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:zb,opaque_fragment:Vb,packing:kb,premultiplied_alpha_fragment:Gb,project_vertex:Hb,dithering_fragment:Wb,dithering_pars_fragment:qb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:jb,shadowmap_vertex:Jb,shadowmask_pars_fragment:$b,skinbase_vertex:Kb,skinning_pars_vertex:Qb,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:s1,tonemapping_pars_fragment:r1,transmission_fragment:o1,transmission_pars_fragment:a1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:h1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:y1,depth_vert:x1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:M1,equirect_vert:b1,equirect_frag:S1,linedashed_vert:w1,linedashed_frag:T1,meshbasic_vert:A1,meshbasic_frag:E1,meshlambert_vert:C1,meshlambert_frag:R1,meshmatcap_vert:P1,meshmatcap_frag:I1,meshnormal_vert:L1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:F1,meshphysical_vert:N1,meshphysical_frag:B1,meshtoon_vert:O1,meshtoon_frag:z1,points_vert:V1,points_frag:k1,shadow_vert:G1,shadow_frag:H1,sprite_vert:W1,sprite_frag:q1},Ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},_i={basic:{uniforms:mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Ue.points,Ue.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Ue.common,Ue.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Ue.sprite,Ue.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:mn([Ue.common,Ue.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:mn([Ue.lights,Ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Nu={r:0,b:0,g:0},Js=new ln,X1=new at;function Y1(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function y(w){let _=!1,C=p(w);C===null?g(a,l):C&&C.isColor&&(g(C,1),_=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,_){let C=p(_);C&&(C.isCubeTexture||C.mapping===Wa)?(u===void 0&&(u=new Be(new et(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Js.copy(_.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Js)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==_t,(h!==C||f!==C.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Be(new Jt(2,2),new cn({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==_t,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,_){w.getRGB(Nu,vf(n)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:y,addToRenderList:m,dispose:b}}function Z1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(v,T,F,N,k){let H=!1,V=h(N,F,T);r!==V&&(r=V,c(r.object)),H=d(v,N,F,k),H&&p(v,N,F,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(v,T,F,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,T,F){let N=F.wireframe===!0,k=i[v.id];k===void 0&&(k={},i[v.id]=k);let H=k[T.id];H===void 0&&(H={},k[T.id]=H);let V=H[N];return V===void 0&&(V=f(l()),H[N]=V),V}function f(v){let T=[],F=[],N=[];for(let k=0;k<t;k++)T[k]=0,F[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,T,F,N){let k=r.attributes,H=T.attributes,V=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let le=k[B],ie=H[B];if(ie===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),le===void 0||le.attribute!==ie||ie&&le.data!==ie.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function p(v,T,F,N){let k={},H=T.attributes,V=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let le=H[B];le===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));let ie={};ie.attribute=le,le&&le.data&&(ie.data=le.data),k[B]=ie,V++}r.attributes=k,r.attributesNum=V,r.index=N}function y(){let v=r.newAttributes;for(let T=0,F=v.length;T<F;T++)v[T]=0}function m(v){g(v,0)}function g(v,T){let F=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;F[v]=1,N[v]===0&&(n.enableVertexAttribArray(v),N[v]=1),k[v]!==T&&(n.vertexAttribDivisor(v,T),k[v]=T)}function b(){let v=r.newAttributes,T=r.enabledAttributes;for(let F=0,N=T.length;F<N;F++)T[F]!==v[F]&&(n.disableVertexAttribArray(F),T[F]=0)}function w(v,T,F,N,k,H,V){V===!0?n.vertexAttribIPointer(v,T,F,k,H):n.vertexAttribPointer(v,T,F,N,k,H)}function _(v,T,F,N){y();let k=N.attributes,H=F.getAttributes(),V=T.defaultAttributeValues;for(let J in H){let B=H[J];if(B.location>=0){let oe=k[J];if(oe===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){let le=oe.normalized,ie=oe.itemSize,re=e.get(oe);if(re===void 0)continue;let Se=re.buffer,me=re.type,de=re.bytesPerElement,ee=me===n.INT||me===n.UNSIGNED_INT||oe.gpuType===Qc;if(oe.isInterleavedBufferAttribute){let ne=oe.data,ge=ne.stride,Pe=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let Y=0;Y<B.locationSize;Y++)g(B.location+Y,ne.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Y=0;Y<B.locationSize;Y++)w(B.location+Y,ie/B.locationSize,me,le,ge*de,(Pe+ie/B.locationSize*Y)*de,ee)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne,oe.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,ie/B.locationSize,me,le,ie*de,ie/B.locationSize*ne*de,ee)}}else if(V!==void 0){let le=V[J];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(B.location,le);break;case 3:n.vertexAttrib3fv(B.location,le);break;case 4:n.vertexAttrib4fv(B.location,le);break;default:n.vertexAttrib1fv(B.location,le)}}}}b()}function C(){U();for(let v in i){let T=i[v];for(let F in T){let N=T[F];for(let k in N)u(N[k].object),delete N[k];delete T[F]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let T=i[v.id];for(let F in T){let N=T[F];for(let k in N)u(N[k].object),delete N[k];delete T[F]}delete i[v.id]}function L(v){for(let T in i){let F=i[T];if(F[v.id]===void 0)continue;let N=F[v.id];for(let k in N)u(N[k].object),delete N[k];delete F[v.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function j1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let y=0;y<h;y++)p+=u[y]*f[y];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Pn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ai&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function $1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new An,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,w=b*4,_=g.clippingState||null;l.value=_,_=u(p,f,w,d);for(let C=0;C!==w;++C)_[C]=t[C];g.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=d+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=d;w!==y;++w,_+=4)o.copy(h[w]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function K1(n){let e=new WeakMap;function t(o,a){return a===no?o.mapping=Ys:a===$c&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===no||a===$c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _c(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ao=4,Jg=[.125,.215,.35,.446,.526,.582],Qs=20,wf=new Va,$g=new De,Tf=null,Af=0,Ef=0,Cf=!1,Ks=(1+Math.sqrt(5))/2,oo=1/Ks,Kg=[new M(-Ks,oo,0),new M(Ks,oo,0),new M(-oo,0,Ks),new M(oo,0,Ks),new M(0,Ks,-oo),new M(0,Ks,oo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Q1=new M,co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Q1}=r;Tf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,Af,Ef),this._renderer.xr.enabled=Cf,e.scissorTest=!1,Bu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:vi,format:Pn,colorSpace:Bs,depthBuffer:!1},s=Qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(r)),this._blurMaterial=tS(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,wf)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor($g),h.toneMapping=Oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new yt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new Be(new et,y),g=!1,b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,g=!0):(y.color.copy($g),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let C=this._cubeSize;Bu(s,_*C,w>2?C:0,C,C),h.setRenderTarget(s),g&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ys||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Bu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kg[(s-r-1)%Kg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Be(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),y=r/p,m=isFinite(r)?1+Math.floor(u*y):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let g=[],b=0;for(let L=0;L<Qs;++L){let U=L/y,S=Math.exp(-U*U/2);g.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<g.length;L++)g[L]=g[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let _=this._sizeLods[s],C=3*_*(s>w-ao?s-w+ao:0),A=4*(this._cubeSize-_);Bu(t,C,A,3*_,2*_),l.setRenderTarget(t),l.render(h,wf)}};function eS(n){let e=[],t=[],i=[],s=n,r=n-ao+1+Jg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ao?l=Jg[o-n+ao-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,y=3,m=2,g=1,b=new Float32Array(y*p*d),w=new Float32Array(m*p*d),_=new Float32Array(g*p*d);for(let A=0;A<d;A++){let L=A%3*2/3-1,U=A>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(S,y*p*A),w.set(f,m*p*A);let v=[A,A,A,A,A,A];_.set(v,g*p*A)}let C=new $e;C.setAttribute("position",new ft(b,y)),C.setAttribute("uv",new ft(w,m)),C.setAttribute("faceIndex",new ft(_,g)),e.push(C),s>ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qg(n,e,t){let i=new Cn(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tS(n,e,t){let i=new Float32Array(Qs),s=new M(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function e0(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function t0(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Of(){return`

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
	`}function nS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===no||l===$c,u=l===Ys||l===Zs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new co(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new co(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sS(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,y=0;if(d!==null){let b=d.array;y=d.version;for(let w=0,_=b.length;w<_;w+=3){let C=b[w+0],A=b[w+1],L=b[w+2];f.push(C,A,A,L,L,C)}}else if(p!==void 0){let b=p.array;y=p.version;for(let w=0,_=b.length/3-1;w<_;w+=3){let C=w+0,A=w+1,L=w+2;f.push(C,A,A,L,L,C)}}else return;let m=new(xf(f)?da:zs)(f,1);m.version=y;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rS(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,i,1)}function h(f,d,p,y){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,y,0,p);let g=0;for(let b=0;b<p;b++)g+=d[b]*y[b];t.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aS(n,e,t){let i=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let _=a.attributes.position.count*w,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*C*4*h),L=new ha(A,_,C,h);L.type=ai,L.needsUpdate=!0;let U=w*4;for(let v=0;v<h;v++){let T=m[v],F=g[v],N=b[v],k=_*C*4*v;for(let H=0;H<T.count;H++){let V=H*U;d===!0&&(s.fromBufferAttribute(T,H),A[k+V+0]=s.x,A[k+V+1]=s.y,A[k+V+2]=s.z,A[k+V+3]=0),p===!0&&(s.fromBufferAttribute(F,H),A[k+V+4]=s.x,A[k+V+5]=s.y,A[k+V+6]=s.z,A[k+V+7]=0),y===!0&&(s.fromBufferAttribute(N,H),A[k+V+8]=s.x,A[k+V+9]=s.y,A[k+V+10]=s.z,A[k+V+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new Ae(_,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var _0=new pn,n0=new ba(1,1),M0=new ha,b0=new xc,S0=new pa,i0=[],s0=[],r0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=i0[s];if(r===void 0&&(r=new Float32Array(s),i0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vu(n,e){let t=s0[e];t===void 0&&(t=new Int32Array(e),s0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function dS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function fS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;a0.set(i),n.uniformMatrix2fv(this.addr,!1,a0),nn(t,i)}}function pS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;o0.set(i),n.uniformMatrix3fv(this.addr,!1,o0),nn(t,i)}}function mS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;r0.set(i),n.uniformMatrix4fv(this.addr,!1,r0),nn(t,i)}}function gS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function _S(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function bS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function wS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(n0.compareFunction=mf,r=n0):r=_0,t.setTexture2D(e||r,s)}function TS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||b0,s)}function AS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||S0,s)}function ES(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||M0,s)}function CS(n){switch(n){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return dS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return yS;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return MS;case 36295:return bS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return ES}}function RS(n,e){n.uniform1fv(this.addr,e)}function PS(n,e){let t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function IS(n,e){let t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){let t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function DS(n,e){let t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function US(n,e){let t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FS(n,e){let t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NS(n,e){n.uniform1iv(this.addr,e)}function BS(n,e){n.uniform2iv(this.addr,e)}function OS(n,e){n.uniform3iv(this.addr,e)}function zS(n,e){n.uniform4iv(this.addr,e)}function VS(n,e){n.uniform1uiv(this.addr,e)}function kS(n,e){n.uniform2uiv(this.addr,e)}function GS(n,e){n.uniform3uiv(this.addr,e)}function HS(n,e){n.uniform4uiv(this.addr,e)}function WS(n,e,t){let i=this.cache,s=e.length,r=Vu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_0,r[o])}function qS(n,e,t){let i=this.cache,s=e.length,r=Vu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||b0,r[o])}function XS(n,e,t){let i=this.cache,s=e.length,r=Vu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||S0,r[o])}function YS(n,e,t){let i=this.cache,s=e.length,r=Vu(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||M0,r[o])}function ZS(n){switch(n){case 5126:return RS;case 35664:return PS;case 35665:return IS;case 35666:return LS;case 35674:return DS;case 35675:return US;case 35676:return FS;case 5124:case 35670:return NS;case 35667:case 35671:return BS;case 35668:case 35672:return OS;case 35669:case 35673:return zS;case 5125:return VS;case 36294:return kS;case 36295:return GS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return YS}}var Pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CS(t.type)}},If=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}},Lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function l0(n,e){n.seq.push(e),n.map[e.id]=e}function jS(n,e,t){let i=n.name,s=i.length;for(Rf.lastIndex=0;;){let r=Rf.exec(i),o=Rf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){l0(t,c===void 0?new Pf(a,n,e):new If(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Lf(a),l0(t,h)),t=h}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function c0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var JS=37297,$S=0;function KS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var u0=new nt;function QS(n){ut._getMatrix(u0,ut.workingColorSpace,n);let e=`mat3( ${u0.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function h0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+KS(n.getShaderSource(e),a)}else return r}function ew(n,e){let t=QS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tw(n,e){let t;switch(e){case wg:t="Linear";break;case Tg:t="Reinhard";break;case Ag:t="Cineon";break;case Jc:t="ACESFilmic";break;case Cg:t="AgX";break;case Rg:t="Neutral";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ou=new M;function nw(){ut.getLuminanceCoefficients(Ou);let n=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function sw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ja(n){return n!==""}function d0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(n){return n.replace(ow,lw)}var aw=new Map;function lw(n,e){let t=st[e];if(t===void 0){let i=aw.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Df(t)}var cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(n){return n.replace(cw,uw)}function uw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function m0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function hw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ha?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Sg:e="ENVMAP_BLENDING_ADD";break}return e}function mw(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hw(t),c=dw(t),u=fw(t),h=pw(t),f=mw(t),d=iw(t),p=sw(r),y=s.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),g.length>0&&(g+=`
`)):(m=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),g=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?st.tonemapping_pars_fragment:"",t.toneMapping!==Oi?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=Df(o),o=d0(o,t),o=f0(o,t),a=Df(a),a=d0(a,t),a=f0(a,t),o=p0(o),a=p0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=b+m+o,_=b+g+a,C=c0(s,s.VERTEX_SHADER,w),A=c0(s,s.FRAGMENT_SHADER,_);s.attachShader(y,C),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(T){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(C)||"",k=s.getShaderInfoLog(A)||"",H=F.trim(),V=N.trim(),J=k.trim(),B=!0,oe=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,A);else{let le=h0(s,C,"vertex"),ie=h0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+H+`
`+le+`
`+ie)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||J==="")&&(oe=!1);oe&&(T.diagnostics={runnable:B,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:g}})}s.deleteShader(C),s.deleteShader(A),U=new lo(s,y),S=rw(s,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(y,JS)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$S++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}var yw=0,Uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ff(e),t.set(e,i)),i}},Ff=class{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}};function xw(n,e,t,i,s,r,o){let a=new Hr,l=new Uf,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,T,F,N){let k=F.fog,H=N.geometry,V=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),B=J&&J.mapping===Wa?J.image.height:null,oe=p[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=le!==void 0?le.length:0,re=0;H.morphAttributes.position!==void 0&&(re=1),H.morphAttributes.normal!==void 0&&(re=2),H.morphAttributes.color!==void 0&&(re=3);let Se,me,de,ee;if(oe){let mt=_i[oe];Se=mt.vertexShader,me=mt.fragmentShader}else Se=S.vertexShader,me=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);let ne=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,Y=N.isBatchedMesh===!0,ye=!!S.map,Me=!!S.matcap,E=!!J,X=!!S.aoMap,Z=!!S.lightMap,$=!!S.bumpMap,D=!!S.normalMap,q=!!S.displacementMap,z=!!S.emissiveMap,te=!!S.metalnessMap,ue=!!S.roughnessMap,pe=S.anisotropy>0,R=S.clearcoat>0,x=S.dispersion>0,I=S.iridescence>0,G=S.sheen>0,se=S.transmission>0,j=pe&&!!S.anisotropyMap,xe=R&&!!S.clearcoatMap,fe=R&&!!S.clearcoatNormalMap,be=R&&!!S.clearcoatRoughnessMap,_e=I&&!!S.iridescenceMap,he=I&&!!S.iridescenceThicknessMap,we=G&&!!S.sheenColorMap,Oe=G&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Re=!!S.specularColorMap,We=!!S.specularIntensityMap,W=se&&!!S.transmissionMap,Ce=se&&!!S.thicknessMap,Le=!!S.gradientMap,Ne=!!S.alphaMap,Ee=S.alphaTest>0,ve=!!S.alphaHash,Ge=!!S.extensions,tt=Oi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Ct={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:me,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Y,batchingColor:Y&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Bs,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:Me,envMap:E,envMapMode:E&&J.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:Z,bumpMap:$,normalMap:D,displacementMap:f&&q,emissiveMap:z,normalMapObjectSpace:D&&S.normalMapType===Dg,normalMapTangentSpace:D&&S.normalMapType===Uu,metalnessMap:te,roughnessMap:ue,anisotropy:pe,anisotropyMap:j,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,dispersion:x,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:he,sheen:G,sheenColorMap:we,sheenRoughnessMap:Oe,specularMap:Te,specularColorMap:Re,specularIntensityMap:We,transmission:se,transmissionMap:W,thicknessMap:Ce,gradientMap:Le,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ee,alphaHash:ve,combine:S.combine,mapUv:ye&&y(S.map.channel),aoMapUv:X&&y(S.aoMap.channel),lightMapUv:Z&&y(S.lightMap.channel),bumpMapUv:$&&y(S.bumpMap.channel),normalMapUv:D&&y(S.normalMap.channel),displacementMapUv:q&&y(S.displacementMap.channel),emissiveMapUv:z&&y(S.emissiveMap.channel),metalnessMapUv:te&&y(S.metalnessMap.channel),roughnessMapUv:ue&&y(S.roughnessMap.channel),anisotropyMapUv:j&&y(S.anisotropyMap.channel),clearcoatMapUv:xe&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:Re&&y(S.specularColorMap.channel),specularIntensityMapUv:We&&y(S.specularIntensityMap.channel),transmissionMapUv:W&&y(S.transmissionMap.channel),thicknessMapUv:Ce&&y(S.thicknessMap.channel),alphaMapUv:Ne&&y(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(D||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(ye||Ne),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:z&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||Y)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)v.push(T),v.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(b(v,S),w(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function w(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let v=p[S.type],T;if(v){let F=_i[v];T=Fu.clone(F.uniforms)}else T=S.uniforms;return T}function C(S,v){let T;for(let F=0,N=u.length;F<N;F++){let k=u[F];if(k.cacheKey===v){T=k,++T.usedTimes;break}}return T===void 0&&(T=new gw(n,v,S,r),u.push(T)),T}function A(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:U}}function vw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function _w(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function g0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,p,y,m){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:y,group:m},n[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=y,g.group=m),e++,g}function a(h,f,d,p,y,m){let g=o(h,f,d,p,y,m);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):t.push(g)}function l(h,f,d,p,y,m){let g=o(h,f,d,p,y,m);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||_w),i.length>1&&i.sort(f||g0),s.length>1&&s.sort(f||g0)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Mw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new y0,n.set(i,[o])):s>=r.length?(o=new y0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new De};break;case"SpotLight":t={position:new M,direction:new M,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function Sw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ww=0;function Tw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Aw(n){let e=new bw,t=Sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,p=0,y=0,m=0,g=0,b=0,w=0,_=0,C=0,A=0,L=0;c.sort(Tw);for(let S=0,v=c.length;S<v;S++){let T=c[S],F=T.color,N=T.intensity,k=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=F.r*N,h+=F.g*N,f+=F.b*N;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],N);L++}else if(T.isDirectionalLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=T.shadow.matrix,b++}i.directional[d]=V,d++}else if(T.isSpotLight){let V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[y]=V;let J=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,J.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[y]=J.matrix,T.castShadow){let B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=H,_++}y++}else if(T.isRectAreaLight){let V=e.get(T);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=V,m++}else if(T.isPointLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){let J=T.shadow,B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=T.shadow.matrix,w++}i.point[p]=V,p++}else if(T.isHemisphereLight){let V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(N),V.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[g]=V,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==d||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==g||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==C||U.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,U.directionalLength=d,U.pointLength=p,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=g,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=C,U.numLightProbes=L,i.version=ww++)}function l(c,u){let h=0,f=0,d=0,p=0,y=0,m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let w=c[g];if(w.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(w.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function x0(n){let e=new Aw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ew(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new x0(n),e.set(s,[a])):r>=o.length?(a=new x0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`;function Pw(n,e,t){let i=new Zr,s=new Ae,r=new Ae,o=new lt,a=new Rc({depthPacking:Lg}),l=new Pc,c={},u=t.maxTextureSize,h={[si]:un,[un]:si,[qt]:qt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Cw,fragmentShader:Rw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let g=this.type;this.render=function(A,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=g!==xi&&this.type===xi,k=g===xi&&this.type!==xi;for(let H=0,V=A.length;H<V;H++){let J=A[H],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let oe=B.getFrameExtents();if(s.multiply(oe),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,B.mapSize.y=r.y)),B.map===null||N===!0||k===!0){let ie=this.type!==xi?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new Cn(s.x,s.y,ie),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let le=B.getViewportCount();for(let ie=0;ie<le;ie++){let re=B.getViewport(ie);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),F.viewport(o),B.updateMatrices(J,ie),i=B.getFrustum(),_(L,U,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===xi&&b(B,U),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,T)};function b(A,L){let U=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,U,d,y,null)}function w(A,L,U,S){let v=null,T=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=v.uuid,N=L.uuid,k=c[F];k===void 0&&(k={},c[F]=k);let H=k[N];H===void 0&&(H=v.clone(),k[N]=H,L.addEventListener("dispose",C)),v=H}if(v.visible=L.visible,v.wireframe=L.wireframe,S===xi?v.side=L.shadowSide!==null?L.shadowSide:L.side:v.side=L.shadowSide!==null?L.shadowSide:h[L.side],v.alphaMap=L.alphaMap,v.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,v.map=L.map,v.clipShadows=L.clipShadows,v.clippingPlanes=L.clippingPlanes,v.clipIntersection=L.clipIntersection,v.displacementMap=L.displacementMap,v.displacementScale=L.displacementScale,v.displacementBias=L.displacementBias,v.wireframeLinewidth=L.wireframeLinewidth,v.linewidth=L.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=n.properties.get(v);F.light=U}return v}function _(A,L,U,S,v){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let N=e.update(A),k=A.material;if(Array.isArray(k)){let H=N.groups;for(let V=0,J=H.length;V<J;V++){let B=H[V],oe=k[B.materialIndex];if(oe&&oe.visible){let le=w(A,oe,S,v);A.onBeforeShadow(n,A,L,U,N,le,B),n.renderBufferDirect(U,null,N,le,A,B),A.onAfterShadow(n,A,L,U,N,le,B)}}}else if(k.visible){let H=w(A,k,S,v);A.onBeforeShadow(n,A,L,U,N,H,null),n.renderBufferDirect(U,null,N,H,A,null),A.onAfterShadow(n,A,L,U,N,H,null)}}let F=A.children;for(let N=0,k=F.length;N<k;N++)_(F[N],L,U,S,v)}function C(A){A.target.removeEventListener("dispose",C);for(let U in c){let S=c[U],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var Iw={[Gc]:Hc,[Wc]:Yc,[qc]:Zc,[Ns]:Xc,[Hc]:Gc,[Yc]:Wc,[Zc]:qc,[Xc]:Ns};function Lw(n,e){function t(){let W=!1,Ce=new lt,Le=null,Ne=new lt(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!W&&(n.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,ve,Ge,tt,Ct){Ct===!0&&(Ee*=tt,ve*=tt,Ge*=tt),Ce.set(Ee,ve,Ge,tt),Ne.equals(Ce)===!1&&(n.clearColor(Ee,ve,Ge,tt),Ne.copy(Ce))},reset:function(){W=!1,Le=null,Ne.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,Le=null,Ne=null,Ee=null;return{setReversed:function(ve){if(Ce!==ve){let Ge=e.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;let tt=Ee;Ee=null,this.setClear(tt)}},getReversed:function(){return Ce},setTest:function(ve){ve?ne(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!W&&(n.depthMask(ve),Le=ve)},setFunc:function(ve){if(Ce&&(ve=Iw[ve]),Ne!==ve){switch(ve){case Gc:n.depthFunc(n.NEVER);break;case Hc:n.depthFunc(n.ALWAYS);break;case Wc:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case qc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case Yc:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Ee!==ve&&(Ce&&(ve=1-ve),n.clearDepth(ve),Ee=ve)},reset:function(){W=!1,Le=null,Ne=null,Ee=null,Ce=!1}}}function s(){let W=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,Ge=null,tt=null,Ct=null;return{setTest:function(mt){W||(mt?ne(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!W&&(n.stencilMask(mt),Ce=mt)},setFunc:function(mt,Ai,di){(Le!==mt||Ne!==Ai||Ee!==di)&&(n.stencilFunc(mt,Ai,di),Le=mt,Ne=Ai,Ee=di)},setOp:function(mt,Ai,di){(ve!==mt||Ge!==Ai||tt!==di)&&(n.stencilOp(mt,Ai,di),ve=mt,Ge=Ai,tt=di)},setLocked:function(mt){W=mt},setClear:function(mt){Ct!==mt&&(n.clearStencil(mt),Ct=mt)},reset:function(){W=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,Ge=null,tt=null,Ct=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,y=!1,m=null,g=null,b=null,w=null,_=null,C=null,A=null,L=new De(0,0,0),U=0,S=!1,v=null,T=null,F=null,N=null,k=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,J=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=J>=2);let oe=null,le={},ie=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Se=new lt().fromArray(ie),me=new lt().fromArray(re);function de(W,Ce,Le,Ne){let Ee=new Uint8Array(4),ve=n.createTexture();n.bindTexture(W,ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Le;Ge++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ve}let ee={};ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Ns),$(!1),D(sf),ne(n.CULL_FACE),X(Bi);function ne(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function ge(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Pe(W,Ce){return h[W]!==Ce?(n.bindFramebuffer(W,Ce),h[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Y(W,Ce){let Le=d,Ne=!1;if(W){Le=f.get(Ce),Le===void 0&&(Le=[],f.set(Ce,Le));let Ee=W.textures;if(Le.length!==Ee.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ge=Ee.length;ve<Ge;ve++)Le[ve]=n.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,Ne=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Le)}function ye(W){return p!==W?(n.useProgram(W),p=W,!0):!1}let Me={[ls]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[og]:n.FUNC_REVERSE_SUBTRACT};Me[ag]=n.MIN,Me[lg]=n.MAX;let E={[cg]:n.ZERO,[ug]:n.ONE,[hg]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[yg]:n.SRC_ALPHA_SATURATE,[mg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[dg]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[gg]:n.ONE_MINUS_DST_COLOR,[pg]:n.ONE_MINUS_DST_ALPHA,[xg]:n.CONSTANT_COLOR,[vg]:n.ONE_MINUS_CONSTANT_COLOR,[_g]:n.CONSTANT_ALPHA,[Mg]:n.ONE_MINUS_CONSTANT_ALPHA};function X(W,Ce,Le,Ne,Ee,ve,Ge,tt,Ct,mt){if(W===Bi){y===!0&&(ge(n.BLEND),y=!1);return}if(y===!1&&(ne(n.BLEND),y=!0),W!==sg){if(W!==m||mt!==S){if((g!==ls||_!==ls)&&(n.blendEquation(n.FUNC_ADD),g=ls,_=ls),mt)switch(W){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFunc(n.ONE,n.ONE);break;case rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case of:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case of:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,w=null,C=null,A=null,L.set(0,0,0),U=0,m=W,S=mt}return}Ee=Ee||Ce,ve=ve||Le,Ge=Ge||Ne,(Ce!==g||Ee!==_)&&(n.blendEquationSeparate(Me[Ce],Me[Ee]),g=Ce,_=Ee),(Le!==b||Ne!==w||ve!==C||Ge!==A)&&(n.blendFuncSeparate(E[Le],E[Ne],E[ve],E[Ge]),b=Le,w=Ne,C=ve,A=Ge),(tt.equals(L)===!1||Ct!==U)&&(n.blendColor(tt.r,tt.g,tt.b,Ct),L.copy(tt),U=Ct),m=W,S=!1}function Z(W,Ce){W.side===qt?ge(n.CULL_FACE):ne(n.CULL_FACE);let Le=W.side===un;Ce&&(Le=!Le),$(Le),W.blending===Fs&&W.transparent===!1?X(Bi):X(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ne=W.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(W){v!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),v=W)}function D(W){W!==tg?(ne(n.CULL_FACE),W!==T&&(W===sf?n.cullFace(n.BACK):W===ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),T=W}function q(W){W!==F&&(V&&n.lineWidth(W),F=W)}function z(W,Ce,Le){W?(ne(n.POLYGON_OFFSET_FILL),(N!==Ce||k!==Le)&&(n.polygonOffset(Ce,Le),N=Ce,k=Le)):ge(n.POLYGON_OFFSET_FILL)}function te(W){W?ne(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function ue(W){W===void 0&&(W=n.TEXTURE0+H-1),oe!==W&&(n.activeTexture(W),oe=W)}function pe(W,Ce,Le){Le===void 0&&(oe===null?Le=n.TEXTURE0+H-1:Le=oe);let Ne=le[Le];Ne===void 0&&(Ne={type:void 0,texture:void 0},le[Le]=Ne),(Ne.type!==W||Ne.texture!==Ce)&&(oe!==Le&&(n.activeTexture(Le),oe=Le),n.bindTexture(W,Ce||ee[W]),Ne.type=W,Ne.texture=Ce)}function R(){let W=le[oe];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{n.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{n.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{n.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(W){Se.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Oe(W){me.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function Te(W,Ce){let Le=c.get(Ce);Le===void 0&&(Le=new WeakMap,c.set(Ce,Le));let Ne=Le.get(W);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ce,W.name),Le.set(W,Ne))}function Re(W,Ce){let Ne=c.get(Ce).get(W);l.get(Ce)!==Ne&&(n.uniformBlockBinding(Ce,Ne,W.__bindingPointIndex),l.set(Ce,Ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,le={},h={},f=new WeakMap,d=[],p=null,y=!1,m=null,g=null,b=null,w=null,_=null,C=null,A=null,L=new De(0,0,0),U=0,S=!1,v=null,T=null,F=null,N=null,k=null,Se.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ge,bindFramebuffer:Pe,drawBuffers:Y,useProgram:ye,setBlending:X,setMaterial:Z,setFlipSided:$,setCullFace:D,setLineWidth:q,setPolygonOffset:z,setScissorTest:te,activeTexture:ue,bindTexture:pe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:_e,texImage3D:he,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:fe,texStorage3D:be,texSubImage2D:G,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:xe,scissor:we,viewport:Oe,reset:We}}function Dw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,x){return d?new OffscreenCanvas(R,x):Vr("canvas")}function y(R,x,I){let G=1,se=pe(R);if((se.width>I||se.height>I)&&(G=I/Math.max(se.width,se.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(G*se.width),xe=Math.floor(G*se.height);h===void 0&&(h=p(j,xe));let fe=x?p(j,xe):h;return fe.width=j,fe.height=xe,fe.getContext("2d").drawImage(R,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+xe+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,x,I,G,se=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),x===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let xe=se?ca:ut.getTransfer(G);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=xe===_t?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(R,x){let I;return R?x===null||x===hs||x===so?I=n.DEPTH24_STENCIL8:x===ai?I=n.DEPTH32F_STENCIL8:x===io&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hs||x===so?I=n.DEPTH_COMPONENT24:x===ai?I=n.DEPTH_COMPONENT32F:x===io&&(I=n.DEPTH_COMPONENT16),I}function C(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){let x=R.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&u.delete(x)}function L(R){let x=R.target;x.removeEventListener("dispose",L),v(x)}function U(R){let x=i.get(R);if(x.__webglInit===void 0)return;let I=R.source,G=f.get(I);if(G){let se=G[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(R),Object.keys(G).length===0&&f.delete(I)}i.remove(R)}function S(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let I=R.source,G=f.get(I);delete G[x.__cacheKey],o.memory.textures--}function v(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let se=0;se<x.__webglFramebuffer[G].length;se++)n.deleteFramebuffer(x.__webglFramebuffer[G][se]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=R.textures;for(let G=0,se=I.length;G<se;G++){let j=i.get(I[G]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(R)}let T=0;function F(){T=0}function N(){let R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function k(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function H(R,x){let I=i.get(R);if(R.isVideoTexture&&te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let G=R.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,R,x);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function V(R,x){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ee(I,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function J(R,x){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ee(I,R,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function B(R,x){let I=i.get(R);if(R.version>0&&I.__version!==R.version){ne(I,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}let oe={[mi]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},le={[on]:n.NEAREST,[Pg]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Kc]:n.LINEAR_MIPMAP_NEAREST,[Rn]:n.LINEAR_MIPMAP_LINEAR},ie={[Ug]:n.NEVER,[Vg]:n.ALWAYS,[Fg]:n.LESS,[mf]:n.LEQUAL,[Ng]:n.EQUAL,[zg]:n.GEQUAL,[Bg]:n.GREATER,[Og]:n.NOTEQUAL};function re(R,x){if(x.type===ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Kc||x.magFilter===qa||x.magFilter===Rn||x.minFilter===an||x.minFilter===Kc||x.minFilter===qa||x.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,le[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==qa&&x.minFilter!==Rn||x.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Se(R,x){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));let G=x.source,se=f.get(G);se===void 0&&(se={},f.set(G,se));let j=k(x);if(j!==R.__cacheKey){se[j]===void 0&&(se[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[j].usedTimes++;let xe=se[R.__cacheKey];xe!==void 0&&(se[R.__cacheKey].usedTimes--,xe.usedTimes===0&&S(x)),R.__cacheKey=j,R.__webglTexture=se[j].texture}return I}function me(R,x,I){return Math.floor(Math.floor(R/I)/x)}function de(R,x,I,G){let j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,G,x.data);else{j.sort((he,we)=>he.start-we.start);let xe=0;for(let he=1;he<j.length;he++){let we=j[xe],Oe=j[he],Te=we.start+we.count,Re=me(Oe.start,x.width,4),We=me(we.start,x.width,4);Oe.start<=Te+1&&Re===We&&me(Oe.start+Oe.count-1,x.width,4)===Re?we.count=Math.max(we.count,Oe.start+Oe.count-we.start):(++xe,j[xe]=Oe)}j.length=xe+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let he=0,we=j.length;he<we;he++){let Oe=j[he],Te=Math.floor(Oe.start/4),Re=Math.ceil(Oe.count/4),We=Te%x.width,W=Math.floor(Te/x.width),Ce=Re,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,We,W,Ce,Le,I,G,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function ee(R,x,I){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);let se=Se(R,x),j=x.source;t.bindTexture(G,R.__webglTexture,n.TEXTURE0+I);let xe=i.get(j);if(j.version!==xe.__version||se===!0){t.activeTexture(n.TEXTURE0+I);let fe=ut.getPrimaries(ut.workingColorSpace),be=x.colorSpace===zi?null:ut.getPrimaries(x.colorSpace),_e=x.colorSpace===zi||fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let he=y(x.image,!1,s.maxTextureSize);he=ue(x,he);let we=r.convert(x.format,x.colorSpace),Oe=r.convert(x.type),Te=w(x.internalFormat,we,Oe,x.colorSpace,x.isVideoTexture);re(G,x);let Re,We=x.mipmaps,W=x.isVideoTexture!==!0,Ce=xe.__version===void 0||se===!0,Le=j.dataReady,Ne=C(x,he);if(x.isDepthTexture)Te=_(x.format===ro,x.type),Ce&&(W?t.texStorage2D(n.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,we,Oe,null));else if(x.isDataTexture)if(We.length>0){W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],W?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,Oe,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,we,Oe,Re.data);x.generateMipmaps=!1}else W?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,he.width,he.height),Le&&de(x,he,we,Oe)):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,we,Oe,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){W&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Te,We[0].width,We[0].height,he.depth);for(let Ee=0,ve=We.length;Ee<ve;Ee++)if(Re=We[Ee],x.format!==Pn)if(we!==null)if(W){if(Le)if(x.layerUpdates.size>0){let Ge=Sf(Re.width,Re.height,x.format,x.type);for(let tt of x.layerUpdates){let Ct=Re.data.subarray(tt*Ge/Re.data.BYTES_PER_ELEMENT,(tt+1)*Ge/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,tt,Re.width,Re.height,1,we,Ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,we,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,Te,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,we,Oe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,Te,Re.width,Re.height,he.depth,0,we,Oe,Re.data)}else{W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],x.format!==Pn?we!==null?W?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,Oe,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,we,Oe,Re.data)}else if(x.isDataArrayTexture)if(W){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Te,he.width,he.height,he.depth),Le)if(x.layerUpdates.size>0){let Ee=Sf(he.width,he.height,x.format,x.type);for(let ve of x.layerUpdates){let Ge=he.data.subarray(ve*Ee/he.data.BYTES_PER_ELEMENT,(ve+1)*Ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,he.width,he.height,1,we,Oe,Ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,Oe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,we,Oe,he.data);else if(x.isData3DTexture)W?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ne,Te,he.width,he.height,he.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,Oe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,we,Oe,he.data);else if(x.isFramebufferTexture){if(Ce)if(W)t.texStorage2D(n.TEXTURE_2D,Ne,Te,he.width,he.height);else{let Ee=he.width,ve=he.height;for(let Ge=0;Ge<Ne;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Te,Ee,ve,0,we,Oe,null),Ee>>=1,ve>>=1}}else if(We.length>0){if(W&&Ce){let Ee=pe(We[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Te,Ee.width,Ee.height)}for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],W?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,we,Oe,Re):t.texImage2D(n.TEXTURE_2D,Ee,Te,we,Oe,Re);x.generateMipmaps=!1}else if(W){if(Ce){let Ee=pe(he);t.texStorage2D(n.TEXTURE_2D,Ne,Te,Ee.width,Ee.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Oe,he)}else t.texImage2D(n.TEXTURE_2D,0,Te,we,Oe,he);m(x)&&g(G),xe.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ne(R,x,I){if(x.image.length!==6)return;let G=Se(R,x),se=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let j=i.get(se);if(se.version!==j.__version||G===!0){t.activeTexture(n.TEXTURE0+I);let xe=ut.getPrimaries(ut.workingColorSpace),fe=x.colorSpace===zi?null:ut.getPrimaries(x.colorSpace),be=x.colorSpace===zi||xe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,we=[];for(let ve=0;ve<6;ve++)!_e&&!he?we[ve]=y(x.image[ve],!0,s.maxCubemapSize):we[ve]=he?x.image[ve].image:x.image[ve],we[ve]=ue(x,we[ve]);let Oe=we[0],Te=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),We=w(x.internalFormat,Te,Re,x.colorSpace),W=x.isVideoTexture!==!0,Ce=j.__version===void 0||G===!0,Le=se.dataReady,Ne=C(x,Oe);re(n.TEXTURE_CUBE_MAP,x);let Ee;if(_e){W&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,Oe.width,Oe.height);for(let ve=0;ve<6;ve++){Ee=we[ve].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){let tt=Ee[Ge];x.format!==Pn?Te!==null?W?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,tt.width,tt.height,Te,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,tt.width,tt.height,Te,Re,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,We,tt.width,tt.height,0,Te,Re,tt.data)}}}else{if(Ee=x.mipmaps,W&&Ce){Ee.length>0&&Ne++;let ve=pe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(he){W?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,we[ve].width,we[ve].height,Te,Re,we[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,we[ve].width,we[ve].height,0,Te,Re,we[ve].data);for(let Ge=0;Ge<Ee.length;Ge++){let Ct=Ee[Ge].image[ve].image;W?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Ct.width,Ct.height,Te,Re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,We,Ct.width,Ct.height,0,Te,Re,Ct.data)}}else{W?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te,Re,we[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Te,Re,we[ve]);for(let Ge=0;Ge<Ee.length;Ge++){let tt=Ee[Ge];W?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Te,Re,tt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,We,Te,Re,tt.image[ve])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),j.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ge(R,x,I,G,se,j){let xe=r.convert(I.format,I.colorSpace),fe=r.convert(I.type),be=w(I.internalFormat,xe,fe,I.colorSpace),_e=i.get(x),he=i.get(I);if(he.__renderTarget=x,!_e.__hasExternalTextures){let we=Math.max(1,x.width>>j),Oe=Math.max(1,x.height>>j);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,j,be,we,Oe,x.depth,0,xe,fe,null):t.texImage2D(se,j,be,we,Oe,0,xe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,se,he.__webglTexture,0,q(x)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,se,he.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let G=x.depthTexture,se=G&&G.isDepthTexture?G.type:null,j=_(x.stencilBuffer,se),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=q(x);z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let G=x.textures;for(let se=0;se<G.length;se++){let j=G[se],xe=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),be=w(j.internalFormat,xe,fe,j.colorSpace),_e=q(x);I&&z(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,be,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let se=G.__webglTexture,j=q(x);if(x.depthTexture.format===Or)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(x.depthTexture.format===ro)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ye(R){let x=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",se)};G.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let G=R.texture.mipmaps;G&&G.length>0?Y(x.__webglFramebuffer[0],R):Y(x.__webglFramebuffer,R)}else if(I){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[G],R,!1);else{let se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(R,x,I){let G=i.get(R);x!==void 0&&ge(G.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ye(R)}function E(R){let x=R.texture,I=i.get(R),G=i.get(x);R.addEventListener("dispose",L);let se=R.textures,j=R.isWebGLCubeRenderTarget===!0,xe=se.length>1;if(xe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let be=0;be<x.mipmaps.length;be++)I.__webglFramebuffer[fe][be]=n.createFramebuffer()}else I.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)I.__webglFramebuffer[fe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(xe)for(let fe=0,be=se.length;fe<be;fe++){let _e=i.get(se[fe]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&z(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){let be=se[fe];I.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);let _e=r.convert(be.format,be.colorSpace),he=r.convert(be.type),we=w(be.internalFormat,_e,he,be.colorSpace,R.isXRRenderTarget===!0),Oe=q(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,we,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),re(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ge(I.__webglFramebuffer[fe][be],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else ge(I.__webglFramebuffer[fe],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let fe=0,be=se.length;fe<be;fe++){let _e=se[fe],he=i.get(_e),we=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),re(we,_e),ge(I.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+fe,we,0),m(_e)&&g(we)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,G.__webglTexture),re(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ge(I.__webglFramebuffer[be],R,x,n.COLOR_ATTACHMENT0,fe,be);else ge(I.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&g(fe),t.unbindTexture()}R.depthBuffer&&ye(R)}function X(R){let x=R.textures;for(let I=0,G=x.length;I<G;I++){let se=x[I];if(m(se)){let j=b(R),xe=i.get(se).__webglTexture;t.bindTexture(j,xe),g(j),t.unbindTexture()}}}let Z=[],$=[];function D(R){if(R.samples>0){if(z(R)===!1){let x=R.textures,I=R.width,G=R.height,se=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),fe=x.length>1;if(fe)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let he=i.get(x[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,se,n.NEAREST),l===!0&&(Z.length=0,$.length=0,Z.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(j),$.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let he=i.get(x[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function q(R){return Math.min(s.maxSamples,R.samples)}function z(R){let x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(R){let x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function ue(R,x){let I=R.colorSpace,G=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Bs&&I!==zi&&(ut.getTransfer(I)===_t?(G!==Pn||se!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Me,this.setupRenderTarget=E,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=z}function Uw(n,e){function t(i,s=zi){let r,o=ut.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lf)return n.BYTE;if(i===cf)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===df)return n.ALPHA;if(i===ff)return n.RGB;if(i===Pn)return n.RGBA;if(i===Or)return n.DEPTH_COMPONENT;if(i===ro)return n.DEPTH_STENCIL;if(i===nu)return n.RED;if(i===iu)return n.RED_INTEGER;if(i===pf)return n.RG;if(i===su)return n.RG_INTEGER;if(i===ru)return n.RGBA_INTEGER;if(i===Xa||i===Ya||i===Za||i===ja)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===au||i===lu||i===cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uu||i===hu||i===du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uu||i===hu)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===du)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fu||i===pu||i===mu||i===gu||i===yu||i===xu||i===vu||i===_u||i===Mu||i===bu||i===Su||i===wu||i===Tu||i===Au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===Cu||i===Ru)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Eu)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Iu||i===Lu||i===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`,Nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:Fw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends Di{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,y=typeof XRWebGLBinding<"u",m=new Nf,g={},b=t.getContextAttributes(),w=null,_=null,C=[],A=[],L=new Ae,U=null,S=new Ht;S.viewport=new lt;let v=new Ht;v.viewport=new lt;let T=[S,v],F=new kc,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Wr,C[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Wr,C[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Wr,C[ee]=ne),ne.getHandSpace()};function H(ee){let ne=A.indexOf(ee.inputSource);if(ne===-1)return;let ge=C[ne];ge!==void 0&&(ge.update(ee.inputSource,ee.frame,c||o),ge.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let ee=0;ee<C.length;ee++){let ne=A[ee];ne!==null&&(A[ee]=null,C[ee].disconnect(ne))}N=null,k=null,m.reset();for(let ee in g)delete g[ee];e.setRenderTarget(w),d=null,f=null,h=null,s=null,_=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Pe=null,Y=null;b.depth&&(Y=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?ro:Or,Pe=b.stencil?so:hs);let ye={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Cn(f.textureWidth,f.textureHeight,{format:Pn,type:Vn,depthTexture:new ba(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Cn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(ee){for(let ne=0;ne<ee.removed.length;ne++){let ge=ee.removed[ne],Pe=A.indexOf(ge);Pe>=0&&(A[Pe]=null,C[Pe].disconnect(ge))}for(let ne=0;ne<ee.added.length;ne++){let ge=ee.added[ne],Pe=A.indexOf(ge);if(Pe===-1){for(let ye=0;ye<C.length;ye++)if(ye>=A.length){A.push(ge),Pe=ye;break}else if(A[ye]===null){A[ye]=ge,Pe=ye;break}if(Pe===-1)break}let Y=C[Pe];Y&&Y.connect(ge)}}let B=new M,oe=new M;function le(ee,ne,ge){B.setFromMatrixPosition(ne.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);let Pe=B.distanceTo(oe),Y=ne.projectionMatrix.elements,ye=ge.projectionMatrix.elements,Me=Y[14]/(Y[10]-1),E=Y[14]/(Y[10]+1),X=(Y[9]+1)/Y[5],Z=(Y[9]-1)/Y[5],$=(Y[8]-1)/Y[0],D=(ye[8]+1)/ye[0],q=Me*$,z=Me*D,te=Pe/(-$+D),ue=te*-$;if(ne.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ue),ee.translateZ(te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Y[10]===-1)ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let pe=Me+te,R=E+te,x=q-ue,I=z+(Pe-ue),G=X*E/R*pe,se=Z*E/R*pe;ee.projectionMatrix.makePerspective(x,I,G,se,pe,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ie(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ne=ee.near,ge=ee.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),F.near=v.near=S.near=ne,F.far=v.far=S.far=ge,(N!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,k=F.far),F.layers.mask=ee.layers.mask|6,S.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let Pe=ee.parent,Y=F.cameras;ie(F,Pe);for(let ye=0;ye<Y.length;ye++)ie(Y[ye],Pe);Y.length===2?le(F,S,v):F.projectionMatrix.copy(S.projectionMatrix),re(ee,F,Pe)};function re(ee,ne,ge){ge===null?ee.matrix.copy(ne.matrixWorld):(ee.matrix.copy(ge.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ne.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=zr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ee){return g[ee]};let Se=null;function me(ee,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Pe=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let E=0;E<ge.length;E++){let X=ge[E],Z=null;if(d!==null)Z=d.getViewport(X);else{let D=h.getViewSubImage(f,X);Z=D.viewport,E===0&&(e.setRenderTargetTextures(_,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(_))}let $=T[E];$===void 0&&($=new Ht,$.layers.enable(E),$.viewport=new lt,T[E]=$),$.matrix.fromArray(X.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(X.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Z.x,Z.y,Z.width,Z.height),E===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push($)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let E=h.getDepthInformation(ge[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(Y&&Y.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let E=0;E<ge.length;E++){let X=ge[E].camera;if(X){let Z=g[X];Z||(Z=new Sa,g[X]=Z);let $=h.getCameraImage(X);Z.sourceTexture=$}}}}for(let ge=0;ge<C.length;ge++){let Pe=A[ge],Y=C[ge];Pe!==null&&Y!==void 0&&Y.update(Pe,ne,c||o)}Se&&Se(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let de=new v0;de.setAnimationLoop(me),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}},$s=new ln,Bw=new at;function Ow(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,vf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,w,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,$s.copy(_),$s.x*=-1,$s.y*=-1,$s.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler($s)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let _=w.program;i.uniformBlockBinding(b,_)}function c(b,w){let _=s[b.id];_===void 0&&(p(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",m));let C=w.program;i.updateUBOMapping(b,C);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function u(b){let w=h();b.__bindingPointIndex=w;let _=n.createBuffer(),C=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=s[b.id],_=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,L=_.length;A<L;A++){let U=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,v=U.length;S<v;S++){let T=U[S];if(d(T,A,S,C)===!0){let F=T.__offset,N=Array.isArray(T.value)?T.value:[T.value],k=0;for(let H=0;H<N.length;H++){let V=N[H],J=y(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+k,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,w,_,C){let A=b.value,L=w+"_"+_;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{let U=C[L];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[L]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function p(b){let w=b.uniforms,_=0,C=16;for(let L=0,U=w.length;L<U;L++){let S=Array.isArray(w[L])?w[L]:[w[L]];for(let v=0,T=S.length;v<T;v++){let F=S[v],N=Array.isArray(F.value)?F.value:[F.value];for(let k=0,H=N.length;k<H;k++){let V=N[k],J=y(V),B=_%C,oe=B%J.boundary,le=B+oe;_+=oe,le!==0&&C-le<J.storage&&(_+=C-le),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=J.storage}}}let A=_%C;return A>0&&(_+=C-A),b.__size=_,b.__cache={},this}function y(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var zu=class{constructor(e={}){let{canvas:t=kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),y=new Int32Array(4),m=null,g=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,C=!1;this._outputColorSpace=vt;let A=0,L=0,U=null,S=-1,v=null,T=new lt,F=new lt,N=null,k=new De(0),H=0,V=t.width,J=t.height,B=1,oe=null,le=null,ie=new lt(0,0,V,J),re=new lt(0,0,V,J),Se=!1,me=new Zr,de=!1,ee=!1,ne=new at,ge=new M,Pe=new lt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Me(){return U===null?B:1}let E=i;function X(P,K){return t.getContext(P,K)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),E===null){let K="webgl2";if(E=X(K,P),E===null)throw X(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Z,$,D,q,z,te,ue,pe,R,x,I,G,se,j,xe,fe,be,_e,he,we,Oe,Te,Re,We;function W(){Z=new iS(E),Z.init(),Te=new Uw(E,Z),$=new J1(E,Z,e,Te),D=new Lw(E,Z),$.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),q=new oS(E),z=new vw,te=new Dw(E,Z,D,z,$,Te,q),ue=new K1(_),pe=new nS(_),R=new dM(E),Re=new Z1(E,R),x=new sS(E,R,q,Re),I=new lS(E,x,R,q),he=new aS(E,$,te),fe=new $1(z),G=new xw(_,ue,pe,Z,$,Re,fe),se=new Ow(_,z),j=new Mw,xe=new Ew(Z),_e=new Y1(_,ue,pe,D,I,d,l),be=new Pw(_,I,$),We=new zw(E,q,$,D),we=new j1(E,Z,q),Oe=new rS(E,Z,q),q.programs=G.programs,_.capabilities=$,_.extensions=Z,_.properties=z,_.renderLists=j,_.shadowMap=be,_.state=D,_.info=q}W();let Ce=new Bf(_,E);this.xr=Ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let P=Z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(V,J,!1))},this.getSize=function(P){return P.set(V,J)},this.setSize=function(P,K,ae=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,J=K,t.width=Math.floor(P*B),t.height=Math.floor(K*B),ae===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(V*B,J*B).floor()},this.setDrawingBufferSize=function(P,K,ae){V=P,J=K,B=ae,t.width=Math.floor(P*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ie)},this.setViewport=function(P,K,ae,ce){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,K,ae,ce),D.viewport(T.copy(ie).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(re)},this.setScissor=function(P,K,ae,ce){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,K,ae,ce),D.scissor(F.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){D.setScissorTest(Se=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ae=!0){let ce=0;if(P){let Q=!1;if(U!==null){let Ie=U.texture.format;Q=Ie===ru||Ie===su||Ie===iu}if(Q){let Ie=U.texture.type,Fe=Ie===Vn||Ie===hs||Ie===io||Ie===so||Ie===eu||Ie===tu,ke=_e.getClearColor(),ze=_e.getClearAlpha(),je=ke.r,Je=ke.g,Xe=ke.b;Fe?(p[0]=je,p[1]=Je,p[2]=Xe,p[3]=ze,E.clearBufferuiv(E.COLOR,0,p)):(y[0]=je,y[1]=Je,y[2]=Xe,y[3]=ze,E.clearBufferiv(E.COLOR,0,y))}else ce|=E.COLOR_BUFFER_BIT}K&&(ce|=E.DEPTH_BUFFER_BIT),ae&&(ce|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),j.dispose(),xe.dispose(),z.dispose(),ue.dispose(),pe.dispose(),I.dispose(),Re.dispose(),We.dispose(),G.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",di),Ce.removeEventListener("sessionend",um),Cs.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=q.autoReset,K=be.enabled,ae=be.autoUpdate,ce=be.needsUpdate,Q=be.type;W(),q.autoReset=P,be.enabled=K,be.autoUpdate=ae,be.needsUpdate=ce,be.type=Q}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){let K=P.target;K.removeEventListener("dispose",ve),Ge(K)}function Ge(P){tt(P),z.remove(P)}function tt(P){let K=z.get(P).programs;K!==void 0&&(K.forEach(function(ae){G.releaseProgram(ae)}),P.isShaderMaterial&&G.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ae,ce,Q,Ie){K===null&&(K=Y);let Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=Dv(P,K,ae,ce,Q);D.setMaterial(ce,Fe);let ze=ae.index,je=1;if(ce.wireframe===!0){if(ze=x.getWireframeAttribute(ae),ze===void 0)return;je=2}let Je=ae.drawRange,Xe=ae.attributes.position,ot=Je.start*je,wt=(Je.start+Je.count)*je;Ie!==null&&(ot=Math.max(ot,Ie.start*je),wt=Math.min(wt,(Ie.start+Ie.count)*je)),ze!==null?(ot=Math.max(ot,0),wt=Math.min(wt,ze.count)):Xe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,Xe.count));let Gt=wt-ot;if(Gt<0||Gt===1/0)return;Re.setup(Q,ce,ke,ae,ze);let Pt,Et=we;if(ze!==null&&(Pt=R.get(ze),Et=Oe,Et.setIndex(Pt)),Q.isMesh)ce.wireframe===!0?(D.setLineWidth(ce.wireframeLinewidth*Me()),Et.setMode(E.LINES)):Et.setMode(E.TRIANGLES);else if(Q.isLine){let Ze=ce.linewidth;Ze===void 0&&(Ze=1),D.setLineWidth(Ze*Me()),Q.isLineSegments?Et.setMode(E.LINES):Q.isLineLoop?Et.setMode(E.LINE_LOOP):Et.setMode(E.LINE_STRIP)}else Q.isPoints?Et.setMode(E.POINTS):Q.isSprite&&Et.setMode(E.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Et.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ze=Q._multiDrawStarts,Nt=Q._multiDrawCounts,ht=Q._multiDrawCount,Un=ze?R.get(ze).bytesPerElement:1,gr=z.get(ce).currentProgram.getUniforms();for(let Fn=0;Fn<ht;Fn++)gr.setValue(E,"_gl_DrawID",Fn),Et.render(Ze[Fn]/Un,Nt[Fn])}else if(Q.isInstancedMesh)Et.renderInstances(ot,Gt,Q.count);else if(ae.isInstancedBufferGeometry){let Ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Nt=Math.min(ae.instanceCount,Ze);Et.renderInstances(ot,Gt,Nt)}else Et.render(ot,Gt)};function Ct(P,K,ae){P.transparent===!0&&P.side===qt&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,Ll(P,K,ae),P.side=si,P.needsUpdate=!0,Ll(P,K,ae),P.side=qt):Ll(P,K,ae)}this.compile=function(P,K,ae=null){ae===null&&(ae=P),g=xe.get(ae),g.init(K),w.push(g),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),P!==ae&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();let ce=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let ke=Ie[Fe];Ct(ke,ae,Q),ce.add(ke)}else Ct(Ie,ae,Q),ce.add(Ie)}),g=w.pop(),ce},this.compileAsync=function(P,K,ae=null){let ce=this.compile(P,K,ae);return new Promise(Q=>{function Ie(){if(ce.forEach(function(Fe){z.get(Fe).currentProgram.isReady()&&ce.delete(Fe)}),ce.size===0){Q(P);return}setTimeout(Ie,10)}Z.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let mt=null;function Ai(P){mt&&mt(P)}function di(){Cs.stop()}function um(){Cs.start()}let Cs=new v0;Cs.setAnimationLoop(Ai),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(P){mt=P,Ce.setAnimationLoop(P),P===null?Cs.stop():Cs.start()},Ce.addEventListener("sessionstart",di),Ce.addEventListener("sessionend",um),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,K,U),g=xe.get(P,w.length),g.init(K),w.push(g),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),me.setFromProjectionMatrix(ne,ii,K.reversedDepth),ee=this.localClippingEnabled,de=fe.init(this.clippingPlanes,ee),m=j.get(P,b.length),m.init(),b.push(m),Ce.enabled===!0&&Ce.isPresenting===!0){let Ie=_.xr.getDepthSensingMesh();Ie!==null&&fd(Ie,K,-1/0,_.sortObjects)}fd(P,K,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,le),ye=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ye&&_e.addToRenderList(m,P),this.info.render.frame++,de===!0&&fe.beginShadows();let ae=g.state.shadowsArray;be.render(ae,P,K),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Q=m.transmissive;if(g.setupLights(),K.isArrayCamera){let Ie=K.cameras;if(Q.length>0)for(let Fe=0,ke=Ie.length;Fe<ke;Fe++){let ze=Ie[Fe];dm(ce,Q,P,ze)}ye&&_e.render(P);for(let Fe=0,ke=Ie.length;Fe<ke;Fe++){let ze=Ie[Fe];hm(m,P,ze,ze.viewport)}}else Q.length>0&&dm(ce,Q,P,K),ye&&_e.render(P),hm(m,P,K);U!==null&&L===0&&(te.updateMultisampleRenderTarget(U),te.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(_,P,K),Re.resetDefaultState(),S=-1,v=null,w.pop(),w.length>0?(g=w[w.length-1],de===!0&&fe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function fd(P,K,ae,ce){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||me.intersectsSprite(P)){ce&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ne);let Fe=I.update(P),ke=P.material;ke.visible&&m.push(P,Fe,ke,ae,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||me.intersectsObject(P))){let Fe=I.update(P),ke=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(ne)),Array.isArray(ke)){let ze=Fe.groups;for(let je=0,Je=ze.length;je<Je;je++){let Xe=ze[je],ot=ke[Xe.materialIndex];ot&&ot.visible&&m.push(P,Fe,ot,ae,Pe.z,Xe)}}else ke.visible&&m.push(P,Fe,ke,ae,Pe.z,null)}}let Ie=P.children;for(let Fe=0,ke=Ie.length;Fe<ke;Fe++)fd(Ie[Fe],K,ae,ce)}function hm(P,K,ae,ce){let Q=P.opaque,Ie=P.transmissive,Fe=P.transparent;g.setupLightsView(ae),de===!0&&fe.setGlobalState(_.clippingPlanes,ae),ce&&D.viewport(T.copy(ce)),Q.length>0&&Il(Q,K,ae),Ie.length>0&&Il(Ie,K,ae),Fe.length>0&&Il(Fe,K,ae),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function dm(P,K,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new Cn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?vi:Vn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Ie=g.state.transmissionRenderTarget[ce.id],Fe=ce.viewport||T;Ie.setSize(Fe.z*_.transmissionResolutionScale,Fe.w*_.transmissionResolutionScale);let ke=_.getRenderTarget(),ze=_.getActiveCubeFace(),je=_.getActiveMipmapLevel();_.setRenderTarget(Ie),_.getClearColor(k),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),ye&&_e.render(ae);let Je=_.toneMapping;_.toneMapping=Oi;let Xe=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),de===!0&&fe.setGlobalState(_.clippingPlanes,ce),Il(P,ae,ce),te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let wt=0,Gt=K.length;wt<Gt;wt++){let Pt=K[wt],Et=Pt.object,Ze=Pt.geometry,Nt=Pt.material,ht=Pt.group;if(Nt.side===qt&&Et.layers.test(ce.layers)){let Un=Nt.side;Nt.side=un,Nt.needsUpdate=!0,fm(Et,ae,ce,Ze,Nt,ht),Nt.side=Un,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie))}_.setRenderTarget(ke,ze,je),_.setClearColor(k,H),Xe!==void 0&&(ce.viewport=Xe),_.toneMapping=Je}function Il(P,K,ae){let ce=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Ie=P.length;Q<Ie;Q++){let Fe=P[Q],ke=Fe.object,ze=Fe.geometry,je=Fe.group,Je=Fe.material;Je.allowOverride===!0&&ce!==null&&(Je=ce),ke.layers.test(ae.layers)&&fm(ke,K,ae,ze,Je,je)}}function fm(P,K,ae,ce,Q,Ie){P.onBeforeRender(_,K,ae,ce,Q,Ie),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(_,K,ae,ce,P,Ie),Q.transparent===!0&&Q.side===qt&&Q.forceSinglePass===!1?(Q.side=un,Q.needsUpdate=!0,_.renderBufferDirect(ae,K,ce,Q,P,Ie),Q.side=si,Q.needsUpdate=!0,_.renderBufferDirect(ae,K,ce,Q,P,Ie),Q.side=qt):_.renderBufferDirect(ae,K,ce,Q,P,Ie),P.onAfterRender(_,K,ae,ce,Q,Ie)}function Ll(P,K,ae){K.isScene!==!0&&(K=Y);let ce=z.get(P),Q=g.state.lights,Ie=g.state.shadowsArray,Fe=Q.state.version,ke=G.getParameters(P,Q.state,Ie,K,ae),ze=G.getProgramCacheKey(ke),je=ce.programs;ce.environment=P.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(P.isMeshStandardMaterial?pe:ue).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",ve),je=new Map,ce.programs=je);let Je=je.get(ze);if(Je!==void 0){if(ce.currentProgram===Je&&ce.lightsStateVersion===Fe)return mm(P,ke),Je}else ke.uniforms=G.getUniforms(P),P.onBeforeCompile(ke,_),Je=G.acquireProgram(ke,ze),je.set(ze,Je),ce.uniforms=ke.uniforms;let Xe=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=fe.uniform),mm(P,ke),ce.needsLights=Fv(P),ce.lightsStateVersion=Fe,ce.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=Je,ce.uniformsList=null,Je}function pm(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=lo.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function mm(P,K){let ae=z.get(P);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Dv(P,K,ae,ce,Q){K.isScene!==!0&&(K=Y),te.resetTextureUnits();let Ie=K.fog,Fe=ce.isMeshStandardMaterial?K.environment:null,ke=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Bs,ze=(ce.isMeshStandardMaterial?pe:ue).get(ce.envMap||Fe),je=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Je=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Xe=!!ae.morphAttributes.position,ot=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color,Gt=Oi;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Gt=_.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,Ze=z.get(ce),Nt=g.state.lights;if(de===!0&&(ee===!0||P!==v)){let Mn=P===v&&ce.id===S;fe.setState(ce,P,Mn)}let ht=!1;ce.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nt.state.version||Ze.outputColorSpace!==ke||Q.isBatchedMesh&&Ze.batching===!1||!Q.isBatchedMesh&&Ze.batching===!0||Q.isBatchedMesh&&Ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ze.instancing===!1||!Q.isInstancedMesh&&Ze.instancing===!0||Q.isSkinnedMesh&&Ze.skinning===!1||!Q.isSkinnedMesh&&Ze.skinning===!0||Q.isInstancedMesh&&Ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ze.instancingMorph===!1&&Q.morphTexture!==null||Ze.envMap!==ze||ce.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==fe.numPlanes||Ze.numIntersection!==fe.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==Je||Ze.morphTargets!==Xe||Ze.morphNormals!==ot||Ze.morphColors!==wt||Ze.toneMapping!==Gt||Ze.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,Ze.__version=ce.version);let Un=Ze.currentProgram;ht===!0&&(Un=Ll(ce,K,Q));let gr=!1,Fn=!1,qo=!1,Bt=Un.getUniforms(),Hn=Ze.uniforms;if(D.useProgram(Un.program)&&(gr=!0,Fn=!0,qo=!0),ce.id!==S&&(S=ce.id,Fn=!0),gr||v!==P){D.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Bt.setValue(E,"projectionMatrix",P.projectionMatrix),Bt.setValue(E,"viewMatrix",P.matrixWorldInverse);let Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(E,ge.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&Bt.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Bt.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Fn=!0,qo=!0)}if(Q.isSkinnedMesh){Bt.setOptional(E,Q,"bindMatrix"),Bt.setOptional(E,Q,"bindMatrixInverse");let Mn=Q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Bt.setValue(E,"boneTexture",Mn.boneTexture,te))}Q.isBatchedMesh&&(Bt.setOptional(E,Q,"batchingTexture"),Bt.setValue(E,"batchingTexture",Q._matricesTexture,te),Bt.setOptional(E,Q,"batchingIdTexture"),Bt.setValue(E,"batchingIdTexture",Q._indirectTexture,te),Bt.setOptional(E,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(E,"batchingColorTexture",Q._colorsTexture,te));let Wn=ae.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&he.update(Q,ae,Un),(Fn||Ze.receiveShadow!==Q.receiveShadow)&&(Ze.receiveShadow=Q.receiveShadow,Bt.setValue(E,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Hn.envMap.value=ze,Hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),Fn&&(Bt.setValue(E,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&Uv(Hn,qo),Ie&&ce.fog===!0&&se.refreshFogUniforms(Hn,Ie),se.refreshMaterialUniforms(Hn,ce,B,J,g.state.transmissionRenderTarget[P.id]),lo.upload(E,pm(Ze),Hn,te)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(lo.upload(E,pm(Ze),Hn,te),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Bt.setValue(E,"center",Q.center),Bt.setValue(E,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(E,"normalMatrix",Q.normalMatrix),Bt.setValue(E,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let Mn=ce.uniformsGroups;for(let Tn=0,pd=Mn.length;Tn<pd;Tn++){let Rs=Mn[Tn];We.update(Rs,Un),We.bind(Rs,Un)}}return Un}function Uv(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Fv(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,ae){let ce=z.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),z.get(P.texture).__webglTexture=K,z.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let ae=z.get(P);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0};let Nv=E.createFramebuffer();this.setRenderTarget=function(P,K=0,ae=0){U=P,A=K,L=ae;let ce=!0,Q=null,Ie=!1,Fe=!1;if(P){let ze=z.get(P);if(ze.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(E.FRAMEBUFFER,null),ce=!1;else if(ze.__webglFramebuffer===void 0)te.setupRenderTarget(P);else if(ze.__hasExternalTextures)te.rebindTextures(P,z.get(P.texture).__webglTexture,z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(ze.__boundDepthTexture!==Xe){if(Xe!==null&&z.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(P)}}let je=P.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);let Je=z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?Q=Je[K][ae]:Q=Je[K],Ie=!0):P.samples>0&&te.useMultisampledRTT(P)===!1?Q=z.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[ae]:Q=Je,T.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else T.copy(ie).multiplyScalar(B).floor(),F.copy(re).multiplyScalar(B).floor(),N=Se;if(ae!==0&&(Q=Nv),D.bindFramebuffer(E.FRAMEBUFFER,Q)&&ce&&D.drawBuffers(P,Q),D.viewport(T),D.scissor(F),D.setScissorTest(N),Ie){let ze=z.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,ae)}else if(Fe){let ze=K;for(let je=0;je<P.textures.length;je++){let Je=z.get(P.textures[je]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+je,Je.__webglTexture,ae,ze)}}else if(P!==null&&ae!==0){let ze=z.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ze.__webglTexture,ae)}S=-1},this.readRenderTargetPixels=function(P,K,ae,ce,Q,Ie,Fe,ke=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){D.bindFramebuffer(E.FRAMEBUFFER,ze);try{let je=P.textures[ke],Je=je.format,Xe=je.type;if(!$.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ce&&ae>=0&&ae<=P.height-Q&&(P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ke),E.readPixels(K,ae,ce,Q,Te.convert(Je),Te.convert(Xe),Ie))}finally{let je=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,K,ae,ce,Q,Ie,Fe,ke=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if(K>=0&&K<=P.width-ce&&ae>=0&&ae<=P.height-Q){D.bindFramebuffer(E.FRAMEBUFFER,ze);let je=P.textures[ke],Je=je.format,Xe=je.type;if(!$.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.bufferData(E.PIXEL_PACK_BUFFER,Ie.byteLength,E.STREAM_READ),P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ke),E.readPixels(K,ae,ce,Q,Te.convert(Je),Te.convert(Xe),0);let wt=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,wt);let Gt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Gg(E,Gt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Ie),E.deleteBuffer(ot),E.deleteSync(Gt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,ae=0){let ce=Math.pow(2,-ae),Q=Math.floor(P.image.width*ce),Ie=Math.floor(P.image.height*ce),Fe=K!==null?K.x:0,ke=K!==null?K.y:0;te.setTexture2D(P,0),E.copyTexSubImage2D(E.TEXTURE_2D,ae,0,0,Fe,ke,Q,Ie),D.unbindTexture()};let Bv=E.createFramebuffer(),Ov=E.createFramebuffer();this.copyTextureToTexture=function(P,K,ae=null,ce=null,Q=0,Ie=null){Ie===null&&(Q!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=Q,Q=0):Ie=0);let Fe,ke,ze,je,Je,Xe,ot,wt,Gt,Pt=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(ae!==null)Fe=ae.max.x-ae.min.x,ke=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,Je=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{let Wn=Math.pow(2,-Q);Fe=Math.floor(Pt.width*Wn),ke=Math.floor(Pt.height*Wn),P.isDataArrayTexture?ze=Pt.depth:P.isData3DTexture?ze=Math.floor(Pt.depth*Wn):ze=1,je=0,Je=0,Xe=0}ce!==null?(ot=ce.x,wt=ce.y,Gt=ce.z):(ot=0,wt=0,Gt=0);let Et=Te.convert(K.format),Ze=Te.convert(K.type),Nt;K.isData3DTexture?(te.setTexture3D(K,0),Nt=E.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(te.setTexture2DArray(K,0),Nt=E.TEXTURE_2D_ARRAY):(te.setTexture2D(K,0),Nt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment);let ht=E.getParameter(E.UNPACK_ROW_LENGTH),Un=E.getParameter(E.UNPACK_IMAGE_HEIGHT),gr=E.getParameter(E.UNPACK_SKIP_PIXELS),Fn=E.getParameter(E.UNPACK_SKIP_ROWS),qo=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Pt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Pt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,je),E.pixelStorei(E.UNPACK_SKIP_ROWS,Je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xe);let Bt=P.isDataArrayTexture||P.isData3DTexture,Hn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let Wn=z.get(P),Mn=z.get(K),Tn=z.get(Wn.__renderTarget),pd=z.get(Mn.__renderTarget);D.bindFramebuffer(E.READ_FRAMEBUFFER,Tn.__webglFramebuffer),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,pd.__webglFramebuffer);for(let Rs=0;Rs<ze;Rs++)Bt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(P).__webglTexture,Q,Xe+Rs),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(K).__webglTexture,Ie,Gt+Rs)),E.blitFramebuffer(je,Je,Fe,ke,ot,wt,Fe,ke,E.DEPTH_BUFFER_BIT,E.NEAREST);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||z.has(P)){let Wn=z.get(P),Mn=z.get(K);D.bindFramebuffer(E.READ_FRAMEBUFFER,Bv),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ov);for(let Tn=0;Tn<ze;Tn++)Bt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Wn.__webglTexture,Q,Xe+Tn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Wn.__webglTexture,Q),Hn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Mn.__webglTexture,Ie,Gt+Tn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Mn.__webglTexture,Ie),Q!==0?E.blitFramebuffer(je,Je,Fe,ke,ot,wt,Fe,ke,E.COLOR_BUFFER_BIT,E.NEAREST):Hn?E.copyTexSubImage3D(Nt,Ie,ot,wt,Gt+Tn,je,Je,Fe,ke):E.copyTexSubImage2D(Nt,Ie,ot,wt,je,Je,Fe,ke);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Hn?P.isDataTexture||P.isData3DTexture?E.texSubImage3D(Nt,Ie,ot,wt,Gt,Fe,ke,ze,Et,Ze,Pt.data):K.isCompressedArrayTexture?E.compressedTexSubImage3D(Nt,Ie,ot,wt,Gt,Fe,ke,ze,Et,Pt.data):E.texSubImage3D(Nt,Ie,ot,wt,Gt,Fe,ke,ze,Et,Ze,Pt):P.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Fe,ke,Et,Ze,Pt.data):P.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Pt.width,Pt.height,Et,Pt.data):E.texSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Fe,ke,Et,Ze,Pt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ht),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Un),E.pixelStorei(E.UNPACK_SKIP_PIXELS,gr),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,qo),Ie===0&&K.generateMipmaps&&E.generateMipmap(Nt),D.unbindTexture()},this.initRenderTarget=function(P){z.get(P).__webglFramebuffer===void 0&&te.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?te.setTextureCube(P,0):P.isData3DTexture?te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?te.setTexture2DArray(P,0):te.setTexture2D(P,0),D.unbindTexture()},this.resetState=function(){A=0,L=0,U=null,D.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var $a=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ht;let i=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new An,h=new M,f=new M,d=new M,p=new at,y=new M(0,0,-1),m=new lt,g=new M,b=new M,w=new lt,_=new at,C=this.camera,A=new Cn(r,o,{samples:c,type:vi}),L=new cn({name:l.name!==void 0?l.name:"unspecified",uniforms:Fu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=A.texture,L.uniforms.color.value=s,L.uniforms.textureMatrix.value=_,this.material=L,this.onBeforeRender=function(U,S,v){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(v.matrixWorld),p.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(p),g.subVectors(f,d),g.dot(h)>0===!0&&this.forceUpdate===!1)return;g.reflect(h).negate(),g.add(f),p.extractRotation(v.matrixWorld),y.set(0,0,-1),y.applyMatrix4(p),y.add(d),b.subVectors(f,y),b.reflect(h).negate(),b.add(f),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(h),C.lookAt(b),C.far=v.far,C.updateMatrixWorld(),C.projectionMatrix.copy(v.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(C.projectionMatrix),_.multiply(C.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=C.projectionMatrix;w.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],w.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],w.z=-1,w.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(w)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,i.visible=!1;let N=U.getRenderTarget(),k=U.xr.enabled,H=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(A),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,C),U.xr.enabled=k,U.shadowMap.autoUpdate=H,U.setRenderTarget(N);let V=v.viewport;V!==void 0&&U.state.viewport(V),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}};$a.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var ku=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function T0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function gn(n,e,t,i=0,s=0){return T0(n,new Dt(1,i),e,t,s)}function zf(n,e,t,i=0){return T0(n,new ri(1),e,t,i)}function Vw(n,e){let t=new $e;return t.setAttribute("position",new Ve(e.flat(),3)),{tone:n,geometry:t}}function w0(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return Vw(n,i)}function kw(){let n=[gn("fur",[0,.012,.011],[.154,.161,.132],1),gn("fur",[0,-.065,.008],[.128,.079,.108]),gn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),gn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),w0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),gn("skin",[0,-.061,-.133],[.102,.066,.065],1),gn("skinShade",[0,-.097,-.14],[.076,.031,.047]),gn("skin",[0,.015,-.15],[.041,.056,.038]),gn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(gn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),gn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),zf("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),gn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),gn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),gn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),gn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),gn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),gn("ink",[e*.047,.031,-.183],[.011,.012,.006]),zf("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),zf("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(w0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function Gw(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new $e;return s.setAttribute("position",new ft(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var Hw=Gw(kw());function Gu(n=0){let e=new Qt({flatShading:!0}),t=new Qt({flatShading:!0}),i=new Qt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:h}){for(let{tone:f,start:d,end:p}of h){let{r:y,g:m,b:g}=r[f];for(let b=d;b<p;b++)u.setXYZ(b,y,m,g)}u.needsUpdate=!0}function l(u){let h=Number.isInteger(u)&&u>=0&&u<ku.length?u:0;if(h===o)return;o=h;let f=ku[o];for(let[d,p]of Object.entries(f))(r[d]??=new De).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let h=u.geometry.clone(),f=new ft(new Float32Array(h.getAttribute("position").count*3),3);h.setAttribute("color",f);let d={colors:f,ranges:u.ranges};return s.push(d),a(d),new Be(h,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new gt;return u.add(c(Hw)),u}}}var er=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],Ww=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],qw=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],A0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Hu=er.length-1,E0=Math.min(...er.map(n=>n[1])),C0=Math.max(...er.map(n=>n[1])),Vi=new M(0,0,(E0+C0)/2),Wu=new M(.047,.027,(C0-E0)/2),Xw=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],Yw=[-.57,.57,1,.61,-.61,-1],Zw=[1,1,-.04,-.91,-.91,-.04];function qu(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(S=0,v=0,T=0){let F=r.length/3;return r.push(S*s,v,T),F}function c(S,v,T){i?o.push(S,T,v):o.push(S,v,T)}function u(S,v,T,F){c(S,v,T),c(S,T,F)}function h(S,v){for(let T=0;T<S.length;T++){let F=(T+1)%S.length;u(S[F],S[T],v[T],v[F])}}function f(S,v){for(let T=0;T<S.length;T++)c(v,S[(T+1)%S.length],S[T])}let d=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),y=er.map(([S,v,T,F],N)=>{let k=N===0||N===Hu,H=S*.67,V=-.024+(v+.024)*.69;return{top:l(S,T,v),middle:l(S*1.08,(T+F)/2,k?v:-.025+(v+.025)*1.04),bottom:l(S,F,v),innerTop:l(H,Ww[N],V),innerBottom:l(H,qw[N],V)}});function m(S){let v=y[S],T=y[(S+1)%y.length];return[v.top,T.top,T.middle,T.bottom,v.bottom,v.middle]}let g=new Set(A0.map(({edge:S})=>S));g.add(Hu);for(let S=0;S<y.length;S++){let v=y[S],T=y[(S+1)%y.length];c(d,v.innerTop,T.innerTop),c(p,T.innerBottom,v.innerBottom),u(v.innerTop,v.top,T.top,T.innerTop),u(T.innerBottom,T.bottom,v.bottom,v.innerBottom),g.has(S)||(u(T.top,v.top,v.middle,T.middle),u(T.middle,v.middle,v.bottom,T.bottom))}let b=m(Hu);t||f(b,l(0,0,er[Hu][1]));let w=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:S,length:v,splay:T}of A0){let[F,N,k,H]=er[S],[V,J,B,oe]=er[S+1],le=V-F,ie=J-N,re=-ie+le*T,Se=le+ie*T,me=Math.hypot(re,Se),de=Math.hypot(le,ie)/2,ee=(k+B-H-oe)/4,ne=[],ge=m(S);for(let[Y,ye,Me]of Xw){let E=[l(),l(),l(),l(),l(),l()];h(ge,E),ne.push({ring:E,distance:Y*v,width:ye*de,height:Me*ee}),ge=E}let Pe=l();f(ge,Pe),a.push({x:(F+V)/2,y:(k+B+H+oe)/4,z:(N+J)/2,forwardX:re/me,forwardZ:Se/me,rows:ne,tip:Pe,length:v,pressure:-1})}let _=new $e,C=new Ve(r,3).setUsage(Sn);_.setAttribute("position",C),_.setIndex(o),_.boundingSphere=new Xn(new M(0,-.018,-.052),.12),_.boundingBox=new rn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let A=!0;function L(S,v=!0){let T=!1;for(let F=0;F<a.length;F++){let N=a[F],k=S?.[F],H=Number.isFinite(k)?He.clamp(k,0,1):0;if(H===N.pressure)continue;N.pressure=H,T=!0;let{forwardX:V,forwardZ:J,length:B,rows:oe,tip:le}=N,ie=N.x,re=N.z,Se=N.y,me=0,de=0;for(let{ring:ge,distance:Pe,width:Y,height:ye}of oe){let Me=Pe/B,E=He.smoothstep(Me,0,.57),X=He.smoothstep(Me,.38,1),Z=(.17+H*.83)*E+(.14+H*.76)*X,$=(Z+me)/2,D=Pe-de,q=Math.cos($)*D;ie+=V*q,Se-=Math.sin($)*D,re+=J*q;for(let z=0;z<ge.length;z++){let te=Yw[z]*Y,ue=Zw[z]*ye,pe=ue*Math.sin(Z);C.setXYZ(ge[z],s*(ie+J*te+V*pe),Se+ue*Math.cos(Z),re-V*te+J*pe)}me=Z,de=Pe}let ee=B-de,ne=ee*Math.cos(me);C.setXYZ(le,s*(ie+V*ne),Se-ee*Math.sin(me),re+J*ne)}T&&(C.needsUpdate=!0,A=!0),v&&A&&(_.computeVertexNormals(),A=!1)}L(),_.getAttribute("normal").setUsage(Sn);let U=new Be(_,e);return U.castShadow=!0,{mesh:U,pose:L,wristIndices:w}}var ds=12,Vf=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],jw=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],R0=Vf.flatMap(([n,e,t])=>Array.from({length:ds},(i,s)=>{let r=(s-.5)*Math.PI*2/ds;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Xu(n,e){let t=R0.length,i=[],s=(J,B,oe,le,ie)=>J.push(B,oe,le,B,le,ie);function r(J,B,oe=!1){for(let le=1;le<B.length-1;le++)oe?J.push(B[0],B[le+1],B[le]):J.push(B[0],B[le],B[le+1])}let o=(J,B)=>J*ds+(B+ds)%ds;for(let J=0;J<Vf.length-1;J++)for(let B=0;B<ds;B++)(J===2||J===3)&&(B===0||B===6)||s(i,o(J,B),o(J+1,B),o(J+1,B+1),o(J,B+1));r(i,Array.from({length:ds},(J,B)=>o(0,B))),r(i,Array.from({length:ds},(J,B)=>o(Vf.length-1,B)),!0);let a=t,l=e.map(({geometry:J,wristIndices:B},oe)=>{let le=oe===0?6:0,ie=[o(4,le),o(4,le+1),o(3,le+1),o(2,le+1),o(2,le),o(3,le)],re=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Se=re.at(-1),me=new Array(J.attributes.position.count);B.forEach((ne,ge)=>{me[ne]=Se[ge]});for(let ne=0;ne<me.length;ne++)me[ne]??=a++;let de=[];for(let ne=0;ne<J.index.count;ne++)de.push(me[J.index.getX(ne)]);for(let ne=0;ne<re.length-1;ne++)for(let ge=0;ge<6;ge++){let Pe=(ge+1)%6;s(i,re[ne][ge],re[ne][Pe],re[ne+1][Pe],re[ne+1][ge])}let ee=[];return r(ee,Se),{socket:ie,rings:re,wrist:Se,wristIndices:B,remap:me,skin:de,cap:ee,sign:oe===0?-1:1}}),c=new $e,u=new Ve(a*3,3).setUsage(Sn);c.setAttribute("position",u);let h=new Be(c,n);h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let f=Array.from({length:4},(J,B)=>new zs([...i,...l.flatMap((oe,le)=>B&1<<le?oe.skin:oe.cap)],1));c.setIndex(f[0]);let d=new M,p=new M,y=new M,m=new M,g=new M,b=new M,w=new M,_=new M,C=new M,A=new qe,L=new qe,U=new qe,S=new M(0,0,-1),v=new qe().setFromEuler(new ln(-1.42,0,0)),T=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,k=0,H=!0;function V(J,B,oe,le,ie){let re=!!(J[0]||J[1]);if(!re&&!H&&N===oe&&k===le)return;N=oe,k=le,H=re;for(let me=0;me<t;me++){let[de,ee,ne]=R0[me];u.setXYZ(me,de*oe,ee*le,ne*oe)}let Se=0;for(let me=0;me<l.length;me++){let de=l[me],ee=J[me],ne=e[me].geometry.attributes.position,ge=!!ee,Pe=de.wristIndices;ge&&ie&&(Se|=1<<me),p.set(0,0,0);for(let Y of de.socket)p.add(d.fromBufferAttribute(u,Y));p.multiplyScalar(1/6),m.set(0,0,0);for(let Y of Pe)m.add(d.fromBufferAttribute(ne,Y));m.multiplyScalar(1/6).applyQuaternion(ee?.quaternion??v),ge?m.add(ee.position):m.add(d.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),b.copy(g).normalize(),w.set(de.sign*.38,-1,.27).addScaledVector(b,-b.dot(d.set(de.sign*.38,-1,.27))).normalize(),y.copy(p).addScaledVector(g,.49),ge&&y.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-g.lengthSq()*.25))*.72),A.setFromUnitVectors(S,b.subVectors(y,p).normalize()),L.copy(ee?.quaternion??v);for(let Y=0;Y<4;Y++){let ye=Y===3;C.lerpVectors(ye?y:p,ye?m:y,T[Y]),U.copy(A).slerp(L,ye?.79:Y*.19);for(let Me=0;Me<6;Me++){let E=jw[Me],X=F[Y];_.set(E[0]*X,E[1]*X*.84,0).applyQuaternion(U).add(C),u.setXYZ(de.rings[Y+1][Me],_.x,_.y,_.z)}}for(let Y=0;Y<de.remap.length;Y++)_.fromBufferAttribute(ne,Y).applyQuaternion(L),ge?_.add(ee.position):_.add(d.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(de.remap[Y],_.x,_.y,_.z)}c.index!==f[Se]&&c.setIndex(f[Se]),u.needsUpdate=!0,c.computeVertexNormals()}return V([null,null],.42,1,1,!1),{mesh:h,pose:V}}function ho(n,e){let t=new Ui;return n.forEach(([i,s],r)=>r===0?t.moveTo(-i,s):t.lineTo(-i,s)),t.closePath(),new Ws(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var P0=.1,Jw=45,I0=55,Ka=128,kf=96,$w=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],Kw=new M(0,0,-1);function Gf(){let n=new gt,e=new Mt({color:"#596974",roughness:.38,metalness:.6}),t=new Mt({color:"#29323e",roughness:.68}),i=new yt({color:"#ffd563",toneMapped:!1});function s(o,a,l,c,u,h=0){let f=new Be(o,a);f.position.set(l,c,u),f.rotation.x=h,n.add(f)}let r=new Mt({color:"#7f4231",roughness:.46,metalness:.34});return s(ho([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),s(ho([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),r,.035,0,0),s(new Wt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),s(new et(.054,.014,.073),r,.035,.045,-.099),s(new et(.018,.008,.023),i,.035,.063,-.131),n}function L0(n,{impact:e,onShot:t}){let i=Gf(),s=new Be(new Dt(.045,0),new yt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));s.position.set(.035,.028,-.208),i.add(s),n.add(i),i.visible=!1;let r=new $e,o=new Ve(Ka*18,3).setUsage(Sn),a=new Ve(Ka*18,3);for(let N=0;N<Ka;N++)for(let k=0;k<6;k++){let H=$w[Math.floor(k/2)];a.setXYZ(N*6+k,H.r,H.g,H.b)}r.setAttribute("position",o),r.setAttribute("color",a),r.setDrawRange(0,0);let l=new ks(r,new yi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Ve(kf*3,3).setUsage(Sn),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let h=new Ma(u,new jr({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:jn}));h.frustumCulled=!1,h.visible=!1,n.add(h);let f=Array.from({length:Ka},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),d=Array.from({length:kf},()=>({p:new M,v:new M,life:0})),p=new M,y=new M,m=new M,g=0,b=0,w=0,_=0,C=0,A=!1;function L(N,k,H,V){for(let J=0;J<H;J++){let B=d[b++%kf];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(V).addScaledVector(k,.55),B.life=.12+Math.random()*.21}}function U(N,k,H){let V=f[g++%Ka];return V.p.copy(N),V.d.copy(Kw).applyQuaternion(k),V.distance=0,V.active=!0,V.authoritative=H,V}function S(N){let k=U(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),L(p,k.d,4,2.2),C=.055,w++,t?.(N.position,N.quaternion)}function v(N,k,H){let V=U(N,k,H);L(V.p,V.d,4,2.2),l.visible=!0}function T({dt:N,aim:k,firing:H}){if(!k&&!i.visible&&!l.visible&&!h.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!k,k&&(i.position.copy(k.modelPosition??k.position),i.quaternion.copy(k.quaternion)),k&&H){if(A)for(_-=N;_<=0;)S(k),_+=P0;else S(k),_=P0;A=!0}else _=0,A=!1;C=Math.max(0,C-N),s.visible=!!k&&C>0,s.material.opacity=C/.055;let V=0;for(let B of f){if(!B.active)continue;let oe=Math.min(Jw*N,I0-B.distance),le=oe>0?e?.(B.p,B.d,oe,B.authoritative):null,ie=le==null?oe:Math.max(0,Math.min(oe,le));B.p.addScaledVector(B.d,ie),B.distance+=ie,le!=null&&(m.copy(B.d).negate(),L(B.p,m,8,4.2)),B.active=le==null&&B.distance<I0;let re=Math.min(.82,B.distance);for(let Se=0;Se<3;Se++)for(let me=0;me<2;me++){let de=(Se+me)/3;y.copy(B.p).addScaledVector(B.d,-re*de),o.setXYZ(V++,y.x,y.y,y.z)}}l.visible=V>0,V>0&&(o.needsUpdate=!0),r.setDrawRange(0,V);let J=0;for(let B of d)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(J++,B.p.x,B.p.y,B.p.z));h.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function F(){for(let N of f)N.active=!1;for(let N of d)N.life=0;_=C=0,A=!1,i.visible=s.visible=l.visible=h.visible=!1,r.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:T,reset:F,replay:v,get shotsFired(){return w}}}var D0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],Qw=new M(0,1,0);function Yu(n){let e=new gt,t=new Mt({color:"#2c4750",roughness:.43,metalness:.47}),i=new Mt({color:"#899fa3",roughness:.46,metalness:.57}),s=new yt({toneMapped:!1});function r(d,p,y,m,g,b=0){let w=new Be(d,p);return w.position.set(y,m,g),w.rotation.x=b,e.add(w),w}r(ho([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),r(ho([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),r(new Wt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),r(new Wt(.016,.02,.011,6,1,!0),s,.038,.025,-.169,-Math.PI/2),r(new et(.044,.009,.038),s,.038,.069,-.023);let o=new Be(new Wt(.002,.003,1,5,1,!0),new yt({transparent:!0,opacity:.52,depthWrite:!1,blending:jn,toneMapped:!1})),a=new Be(new Dt(.012,0),new yt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function h(){e.visible=o.visible=a.visible=!1}function f({mode:d,position:p,quaternion:y,end:m}){if(!d||!p||!y||!m){h();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(y),d!==u&&(u=d,s.color.set(D0[d-1]??D0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(Qw,c.normalize()),a.position.copy(m)}return h(),{mesh:e,hide:h,update:f}}var eT="wss://clouddata.turbowarp.org",tT="itssoren.github.io/VR/gorilla-lab/",Ju={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},fo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),N0="\u2601 GorillaHost",Qa=["ARENE1","ARENE2","ARENE3"],nT=new Map([[N0,"vr"],[Ju.vr,"vr"],[Ju.pc,"pc"],...fo.map(n=>[n,"player"])]),Wf=53,Zu=4400,B0=64e3,iT=100,sT=200,rT=450,O0=6,Ft=(n,e)=>Math.round(n).toString().padStart(e,"0");function el(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function tr(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function oT({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Ft(e,7)+a.map(c=>Ft(c*100+2e4,5)).join("")+Ft(Math.round(l*10)%3600,4)+Ft(o,6)}function aT(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function z0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:s=()=>{},Socket:r=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),h=o(),f=null,d=null,p="",y=0,m="",g=-1/0,b=null,w=0,_=0,C=1/0,A=0,L="offline",U=!1,S=-1,v=0,T=[],F=1/0,N=350,k=1/0,H=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(E,X){L=E,n(X)}function oe(){return"Salon "+p+" \xB7 "+(d==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function le(){return[...c.values()].map(E=>E.pose).filter(Boolean)}function ie(){let E=le().filter(D=>d==="vr"?D.role!=="vr":D.role==="vr"),X=D=>Number(D.ready)*2+ +(D.role==="pc"),Z=E.find(D=>D.id===b?.id)??null,$=E.reduce((D,q)=>!D||X(q)>X(D)?q:D,Z);$!==b&&(b=$,e(b))}function re(E){for(let X of c.values())X.pose&&t(null,X.pose),X.pose=X.candidate=null;E&&c.clear(),ie()}function Se(){let E=f;if(f=null,E){E.onopen=E.onmessage=E.onerror=E.onclose=null;try{E.close()}catch{}}}function me(){Se(),d=null,p="",C=1/0,U=!1,S=-1,T=[],V=[],re(!0),B("offline","Hors ligne")}function de(E){let X=Math.min(3e4,1500*2**Math.min(A++,5));C=a()+X,B("retry","TurboWarp d\xE9connect\xE9 ("+E+") \xB7 reconnexion automatique au salon "+p)}function ee(E){let X=!1;for(let[Z,$]of c)$.pose&&E-$.pose.arrival>Zu&&(t(null,$.pose),$.pose=null,X=!0),$.candidate&&E-$.candidate.arrival>Zu&&($.candidate=null),E-$.lastArrival>6e4&&c.delete(Z);X&&ie()}function ne(E,X,Z,$){let D=gT(Z.value,null);if(!D||D.id===y)return;let q=c.get(D.id);if(!q){if(c.size>=64)return;q={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:$,pose:null,candidate:null},c.set(D.id,q)}if(D.time<=q.lastTime)return;let z=q.pose??q.candidate;if(z&&D.time-z.time>Zu+$-z.arrival){if(q.pose)return;q.candidate=null}q.lastTime=D.time,q.lastArrival=$;let te={...D,ready:D.ready??!0,protocol:D.protocol??(D.ready===void 0?3:4),role:E,channel:X,received:o(),arrival:$},ue=q.candidate;if(!q.pose&&(!ue||ue.channel!==X||ue.map!==te.map||$-ue.arrival>Zu)&&(D.ready!==void 0||Math.abs(D.time-te.received)>25e3)){q.candidate=te;return}if(q.candidate=null,!q.pose&&ue?.objects&&ue.ready&&ue.map===te.map&&!te.objects&&(te.objects=ue.objects),q.pose=te,d==="vr"&&E==="vr"&&te.ready)if(k===1/0||ue?.arrival<k||D.id<y)d="player",m=fo[y%fo.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=Z.value.length,t(te),ie(),!(!U||!te.ready||te.map!==S)){$-q.shotWindow>=1e3&&(q.shotWindow=$,q.shotCount=0);for(let{seq:pe,position:R,quaternion:x}of te.shots??[])pe<=q.lastShot||(q.lastShot=pe,!(q.shotCount>=14||(R.x-te.x)**2+(R.y-te.y)**2+(R.z-te.z)**2>7**2)&&(q.shotCount++,s({position:R,quaternion:x},te)));if(!(d!=="vr"||E!=="player"||D.actionTarget!==y))for(let{seq:pe,action:R}of D.actions)pe<=q.lastAction||(q.lastAction=pe,i(R,te))}}function ge(){let E;try{E=new r(eT)}catch{return!1}return f=E,_=a(),g=-1/0,k=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),E.onopen=()=>{f===E&&(w=a(),E.send(JSON.stringify({method:"handshake",project_id:tT+p,user:"player"+y})+`
`),B("open",oe()))},E.onmessage=X=>{if(f!==E||typeof X.data!="string"||X.data.length>105e4)return;let Z=a();ee(Z);for(let $ of X.data.split(`
`)){if(!$.trim())continue;let D;try{D=JSON.parse($)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",$.slice(0,200));continue}let q=nT.get(D?.name);D?.method!=="set"||!q||ne(q,D.name,D,Z)}},E.onerror=()=>{f===E&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},E.onclose=X=>{if(f!==E)return;let Z=X.code;if(Se(),re(!1),T=[],V=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(Z)){de(Z);return}d=null,p="";let $={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[Z];B("error","TurboWarp d\xE9connect\xE9 ("+Z+")"+($?" \xB7 "+$:X.reason?" \xB7 "+X.reason.slice(0,100):""))},!0}function Pe(E,X){let Z=el(E);return!/^[A-Z0-9]{5,12}$/.test(Z)||!["vr","pc","player"].includes(X)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):d===X&&p===Z?!0:d?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(re(!0),y=Math.floor(1e6+l()*8999999),d=X,p=Z,m=Ju[d]??fo[y%fo.length],N=350,d==="vr"&&Qa.includes(p)&&(m=y%2===0?Ju.vr:N0,N=750+y%150),v=H=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},A=0,C=F=1/0,ge()?!0:(d=null,p="",B("error","WebSocket indisponible."),!1))}function Y(E,X){let Z=E.hand||E.type==="world"?5:4;if(d!=="player"||L!=="open"||!b?.ready||b.protocol<Z||b.map!==X||!qf(E)||v>=99999999)return!1;let $=a();return T=T.filter(D=>D.expires>=$&&D.target===b.id&&D.map===X),T.length>=8?!1:(T.push({action:{...E},seq:++v,expires:$+1800,target:b.id,map:X}),!0)}function ye(E,X,Z){if(!d||d==="pc"||L!=="open"||H>=99999999)return;let $=go(E),D=yo(X);if(!$||!D)return;let q=a();V=V.filter(z=>z.expires>=q&&z.map===Z).slice(-(O0-1)),V.push({record:Ft(++H,8)+$+D,expires:q+rT,map:Z})}function Me(E){let X=a();U=!!E&&E.ready!==!1,S=E?.map??-1,ee(X),d&&!f&&X>=C&&(C=1/0,ge()||de(1006)),f&&f.readyState===0&&X-_>1e4&&(Se(),de(1006)),J.bufferedBytes=f?.bufferedAmount??0;let Z=d==="pc"?sT:iT;if(!E||!d||f?.readyState!==1||J.bufferedBytes>4096||X-w<(d==="vr"?N:350)||X-g<Z)return!1;if(d==="player"){let ue=le().filter(R=>R.role==="player"),pe=ue.find(R=>R.channel===m);if(pe?F=Math.min(X,F):F=1/0,pe&&(pe.id<y||X-F>=800)){let R=fo.find(x=>!ue.some(I=>I.channel===x));if(!R)return L!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=R,F=1/0}}(A||L==="capacity")&&(A=0,B("open",oe()));let $=Math.round(h+X-u),D=oT({...E,time:$,id:y});if(!D)return!1;T=T.filter(ue=>ue.expires>=X&&ue.target===b?.id&&ue.map===E.map),V=V.filter(ue=>ue.expires>=X&&ue.map===E.map);let q=J.bufferedBytes===0?E.objectFeed?.(X):null,z=typeof E.avatar=="function"?E.avatar():E.avatar,te=mT(D,z,q,{version:5,ready:E.ready!==!1,actions:T,actionTarget:T[0]?.target??0,shots:V,score:E.score});return g=X,d==="vr"&&(k=Math.min(k,X)),f.send(JSON.stringify({method:"set",name:m,value:te})+`
`),J.sent++,J.bytesSent+=te.length,!0}return{join:Pe,leave:me,tick:Me,sendAction:Y,queueShot:ye,get stats(){return{...J}},get role(){return d},get code(){return p},get state(){return L},get remote(){return b},get peers(){return le()}}}var lT=15,cT=12,V0=44,ju=15,Hf=35,go=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Ft(e*100+2e4,5)).join(""):null;function po(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var yo=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Ft(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function mo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function uT(n){let e=go(n.mesh.position),t=yo(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>Wf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Ft(i,5)+Ft(s,2)+r+o+Ft(a,8)+e+t}function hT(n){return Ft(n,5)+"99"+"0".repeat(V0-7)}function dT(n){if(!n)return null;let e=yo(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&go(l.position),u=l&&yo(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(lT+cT)}),s=Ft(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Ft(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Ft(n.coconuts??31,2)+Ft(n.color??0,2)+a}function qf(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Wf?"10"+Ft(t,5):null;if(e==="world"){let o=s===1?2:s===2?4:s===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+s+Ft(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Ft(i,5):null;let r=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(r)?(e==="hold"?"3":"4")+r+Ft(i,5):null}function fT(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release","world"][e];if(!s)return null;let r={type:s,objectId:i};return s==="spawn"?r={type:s,typeId:i}:s==="world"?r={type:s,mode:t,typeId:i}:s==="tool"?r.mode=t:t&&(r.hand=t),qf(r)===n?r:null}function pT(n){let e=go(n?.position),t=yo(n?.quaternion),i=go(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function mT(n,e,t,i=null){let s=dT(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:p,action:y})=>Ft(p,8)+qf(y)).join(""),a=i.version===5,l=a&&go(e?.gun?.position),c=a&&yo(e?.gun?.quaternion),u=s&&l&&c?"1"+l+c:"0",h=i.shots??[],f=a?u+Ft(h.length,1)+h.map(p=>p.record).join("")+Ft(Math.max(0,Math.min(999999,i.score??0)),6):"",d=n+(a?"5":"4")+Number(i.ready)+ +!!s+(s??"")+pT(s?e.tool:null)+Ft(i.actionTarget??0,7)+Ft(o.length/ju,1)+o+f;return d.length+1+r.length>B0&&(t=null,r=""),d+(t?t.full?"2":"1":"0")+r}function U0(n,e,t){let i=mo(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:po(n,a+1),quaternion:mo(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function gT(n,e){if(typeof n!="string"||n.length>B0||!/^[0-9]+$/.test(n))return null;let t=aT(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:V0,r=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=U0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),h=po(n,a+2),f=mo(n,a+17),d=po(n,a+29);if(u<1||u>7||!h||!f||!d)return null;t.avatar.tool={mode:u,position:h,quaternion:f,end:d},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*ju+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=ju){let u=Number(n.slice(a,a+8)),h=fT(n.slice(a+8,a+ju));if(!h||u<=c)return null;t.actions.push({seq:u,action:h}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=po(n,a+1),d=mo(n,a+16);if(!f||!d)return null;t.avatar.gun={position:f,quaternion:d},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>O0||n.length<a+u*Hf+7)return null;t.shots=[];let h=0;for(let f=a+u*Hf;a<f;a+=Hf){let d=Number(n.slice(a,a+8)),p=po(n,a+8),y=mo(n,a+23);if(d<=h||!p||!y)return null;t.shots.push({seq:d,position:p,quaternion:y}),h=d}t.score=Number(n.slice(a,a+6)),r=a+7}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=U0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),h=Number(n.slice(l+5,c));if(!u)return null;if(h===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),d=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),y=po(n,c+10),m=mo(n,c+25);if(h>Wf||f>7||d>4||p>16777215||!y||!m)return null;a.push({id:u,type:h,flags:f,style:d,color:p,position:y,rotation:m})}t.objects={full:o==="2",records:a}}return t}var yT=.45,F0=2.5;function k0(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function s(r,o){let a=r-i>=1600,l=a||r-t>=200;a&&(i=r),l&&(t=r);let c=l?new Set:null,u=[];for(let h of o){if(!h.mesh.visible)continue;let f=h.netId,d=n.get(f),p=h.radius<=yT&&!h.frozen&&(h.velocity.lengthSq()>=F0**2||h.angular.lengthSq()*h.radius**2>=F0**2);if(!l&&!p&&!d?.fast)continue;let y=uT(h);if(!y)continue;c?.add(f);let m=y!==d?.record;m&&e.set(f,{record:y,until:r+420}),(a||!l&&m)&&u.push(y),d?(d.record=y,d.fast=p):n.set(f,{record:y,fast:p})}if(l){for(let h of n.keys())c.has(h)||(e.set(h,{record:hT(h),until:r+420}),n.delete(h));for(let[h,f]of e)f.until<r?e.delete(h):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:s,reset(){n.clear(),e.clear(),t=i=-1/0}}}var G0=Lt.DEFAULT_UP,xT=15,H0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function vT(){let n=new gt,e=new Be(new Dt(.155,1),new Mt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new Fi(.23,.018,5,20),new yt({color:"#84e6ff",transparent:!0,opacity:.85,blending:jn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new Gs(.11,.28,9,1,!0),new yt({color:"#55c7ff",transparent:!0,opacity:.45,side:qt,blending:jn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function _T(){let n=new gt,e=new gt,t=Gu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:qu(g,t.hand,{openWrist:!0}),position:new M,quaternion:new qe,pressure:[0,0,0],tracked:!1})),r=Xu(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Yu(e),l=null,c=new M,u=[null,null],h=new M,f=new qe,d=new qe,p=new qe,y={mode:0,position:new M,quaternion:new qe,end:new M};function m(g,b,w){let _=g.avatar,C=1-Math.exp(-w*32);if(!_){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),r.pose(u,.42,.97,.68,!0),a.hide(),y.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(_.head).premultiply(f),i.quaternion.slerp(p,C),h.set(0,0,-1).applyQuaternion(i.quaternion);let A=He.smoothstep(-h.y,.28,.94),L=Math.max(.38,_.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*L,.24*A),o.rotation.x=-.5*A,d.copy(o.quaternion).invert(),t.setColor(_.color??0);for(let v=0;v<s.length;v++){let T=s[v],F=_.hands[v];if(u[v]=F?T:null,!F){T.tracked=!1;continue}c.copy(F.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(d),p.copy(F.quaternion).premultiply(f).premultiply(d),T.tracked?(T.position.lerp(c,C),T.quaternion.slerp(p,C)):(T.position.copy(c),T.quaternion.copy(p)),T.tracked=!0;for(let N=0;N<3;N++)T.pressure[N]+=((F.pressure?.[N]??0)-T.pressure[N])*C;T.skin.pose(T.pressure,!1)}if(r.pose(u,_.armSpan*.5,.97,L,!0),_.gun){l||(l=Gf(),l.visible=!1,e.add(l));let v=l.visible?C:1;l.position.lerp(_.gun.position,v),l.quaternion.slerp(p.copy(_.gun.quaternion),v),l.visible=!0}else l&&(l.visible=!1);let U=_.tool;if(!U){a.hide(),y.mode=0;return}let S=y.mode?C:1;y.mode=U.mode,y.position.lerp(U.position,S),y.quaternion.slerp(p.copy(U.quaternion),S),y.end.lerp(U.end,S),a.update(y)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function W0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function q0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,h=new Map,f=k0(),d=0,p=-1,y=-1,m=-1,g="",b=0,w=-1;function _(){let D=e();return D!==g&&(g=D,b=tr(D)),b}function C(D){return!!D?.ready&&D.map===_()}function A(D){let q=h.get(D);q&&(n.remove(q.mesh),q.mesh.material?.dispose(),h.delete(D))}function L(){for(let D of h.keys())A(D);d=0,p=-1,y!==-1&&(y=-1,s?.(null)),m!==-1&&(m=-1,r?.(null)),w!==-1&&(w=-1,o?.(0))}function U(D,q){if(D.color===q.color&&D.style===q.style)return;D.color=q.color,D.style=q.style;let z=D.mesh.material;if(z?.color){if(z.color.setHex(q.color),q.style===0){Object.assign(z,D.baseMaterial),D.baseEmissive&&z.emissive.copy(D.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][q.style],z.metalness=[.1,0,.87,.12,0][q.style],z.opacity=q.style===3?.4:1,z.transparent=q.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=q.style===4?1.65:0,z.needsUpdate=!0}}function S(D){if(!C(D)){L();return}if((d!==D.id||p!==D.map)&&(L(),d=D.id,p=D.map),D.avatar&&D.avatar.light!==y&&(y=D.avatar.light,s?.(y)),D.avatar&&D.avatar.coconuts!==m&&(m=D.avatar.coconuts,r?.(m)),D.score!==void 0&&D.score!==w&&(w=D.score,o?.(w)),!D.objects)return;let q=D.objects.full?new Set:null;for(let z of D.objects.records){if(z.removed){A(z.id);continue}q?.add(z.id);let te=h.get(z.id);if(te&&te.type!==z.type&&(A(z.id),te=null),!te){let pe=i?.(z.type);if(!pe)continue;let{roughness:R,metalness:x,transparent:I,depthWrite:G,opacity:se,emissiveIntensity:j}=pe.material??{},xe={roughness:R,metalness:x,transparent:I,depthWrite:G,opacity:se,emissiveIntensity:j};pe.userData.netId=z.id,pe.userData.netType=z.type,te={mesh:pe,baseMaterial:xe,baseEmissive:pe.material?.emissive?.clone(),type:z.type,target:new M().copy(z.position),quaternion:new qe().copy(z.rotation),velocity:new M,time:D.time},pe.position.copy(te.target),pe.quaternion.copy(te.quaternion),h.set(z.id,te),n.add(pe)}let ue=(D.time-te.time)/1e3;ue>.06&&ue<.65&&!(z.flags&6)?te.velocity.copy(z.position).sub(te.target).multiplyScalar(1/ue).clampLength(0,23):te.velocity.set(0,0,0),te.target.copy(z.position),te.quaternion.copy(z.rotation),te.time=D.time,te.flags=z.flags,te.frequent=ue>.06&&ue<.16,te.received=D.arrival,te.mesh.userData.netFlags=z.flags,te.mesh.userData.held=!!(z.flags&1),U(te,z)}if(q)for(let z of h.keys())q.has(z)||A(z)}let v=new M;function T(D,q,z){let te=1-Math.exp(-D*22),ue=1-Math.exp(-D*32);for(let pe of h.values()){if(pe.mesh.visible=q,!q)continue;let R=pe.frequent?ue:te,x=pe.flags&6?0:Math.min(pe.frequent?.1:.12,Math.max(0,(z-pe.received)/1e3));v.copy(pe.target).addScaledVector(pe.velocity,x),pe.mesh.position.distanceToSquared(v)>16||pe.flags&6&&pe.mesh.position.distanceToSquared(pe.target)<1e-4?pe.mesh.position.copy(v):pe.mesh.position.lerp(v,R),pe.mesh.quaternion.slerp(pe.quaternion,R),pe.flags&6&&pe.mesh.quaternion.angleTo(pe.quaternion)<.008&&pe.mesh.quaternion.copy(pe.quaternion),pe.mesh.updateMatrixWorld(!0)}}let F=D=>document.querySelector(D),N=F("#cloud-status"),k=F("#cloud-room"),H=F("#cloud-camera"),V=-1/0,J=0,B="Hors ligne",oe=0;function le(D){J=D,H.textContent="Cam\xE9ra : "+H0[D]}function ie(){le((J+1)%H0.length)}H.onclick=ie;let re=z0({onStatus(D){B=D,N.textContent=D,c?.()},onPose(D){re.role!=="vr"&&S(D)},onPeer(D,q){if(!D){let ue=u.get(q.id);ue?.art&&(W0(ue.art.model),W0(ue.art.toolRoot),ue.art.dispose?.()),u.delete(q.id);return}let z=u.get(D.id);z||(z={art:null,motion:new M,handMotion:[new M,new M]},u.set(D.id,z));let te=z.pose;z.motion.set(0,0,0);for(let ue of z.handMotion)ue.set(0,0,0);if(te&&te.map===D.map){let ue=(D.time-te.time)/1e3;if(ue>=.055&&ue<=.65){z.motion.set(D.x-te.x,D.y-te.y,D.z-te.z).multiplyScalar(1/ue),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let pe=0;pe<2;pe++){let R=te.avatar?.hands[pe],x=D.avatar?.hands[pe];R&&x&&z.handMotion[pe].copy(x.position).sub(R.position).multiplyScalar(1/ue).clampLength(0,23)}}}z.pose=D},onAction:a,onShot:l}),Se=el(new URLSearchParams(location.search).get("room")??"");function me(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),D=>(D%36).toString(36)).join("").toUpperCase()}k.value=/^[A-Z0-9]{5,12}$/.test(Se)?Se:me();function de(D,q=k.value){let z=el(q);if(!(re.role===D&&re.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}re.role&&re.leave(),re.join(z,D)&&(k.value=z,D!=="vr"&&F("#game").focus(),f.reset(),le(0),t(tr(z)),g="")}}F("#cloud-vr").onclick=()=>de("vr"),F("#cloud-new").onclick=()=>de("vr",me());for(let[D,q]of Qa.entries())F(`#public-join-${D}`).onclick=()=>de("player",q),F(`#public-host-${D}`).onclick=()=>de("vr",q);F("#cloud-pc").onclick=()=>de("pc");let ee=F("#cloud-player");ee&&(ee.onclick=()=>de("player")),F("#cloud-leave").onclick=()=>{oe=0,re.leave()},F("#cloud-copy").onclick=async()=>{let D=new URL(location.href);D.searchParams.set("room",re.code||el(k.value));try{await navigator.clipboard.writeText(D.href),N.textContent="Lien copi\xE9."}catch{N.textContent=D.href}oe=performance.now()+2500},addEventListener("pagehide",()=>re.leave());let ne=new M,ge=new M,Pe=new M,Y=new M,ye=0;function Me({dt:D,position:q,yaw:z,pitch:te,camera:ue,rig:pe,keys:R,flat:x}){let I=x?.movement,G=Number(R.has("KeyD"))-Number(R.has("KeyQ")||R.has("KeyA"))+(I?.x??0),se=Number(R.has("KeyS"))-Number(R.has("KeyZ")||R.has("KeyW"))+(I?.z??0);x?.consumeJump?.()&&(ye=.26),ye=Math.max(0,ye-D);let j=Number(R.has("Space")||ye>0)-Number(R.has("ShiftLeft")||R.has("ShiftRight")),xe=R.has("ControlLeft")||R.has("ControlRight")?11:3.2;Y.set(G,j,se).clampLength(0,1).applyAxisAngle(G0,z),pe.position.addScaledVector(Y,D*xe).clampScalar(-175,175),pe.rotation.set(0,z,0),ue.position.set(0,0,0),ue.rotation.set(te,0,0,"YXZ"),pe.updateMatrixWorld(!0),q.copy(pe.position)}function E(D,q,z,te){for(let ue of u.values()){let pe=ue.pose;if(!(D&&C(pe))){ue.art&&(ue.art.model.visible=!1,ue.art.toolRoot&&(ue.art.toolRoot.visible=!1));continue}ue.art||(ue.art=pe.role==="pc"?vT():_T(),n.add(ue.art.model),ue.art.model.visible=!1,ue.art.toolRoot&&n.add(ue.art.toolRoot));let{model:x,toolRoot:I}=ue.art,G=Math.min(.12,Math.max(0,(te-pe.arrival)/1e3+.025));ne.copy(pe).addScaledVector(ue.motion,G),!x.visible||x.position.distanceToSquared(ne)>64?x.position.copy(ne):x.position.lerp(ne,1-Math.exp(-z*34)),x.rotation.y=pe.yaw,x.visible=!0,I&&(I.visible=!0),ue.art.draw(pe,q,z)}}function X(D,q){if(q<oe)return;let z=re.remote,te=B;if(re.state==="open"){let ue="Salon "+re.code+" \xB7 ",pe=re.peers.filter(R=>R.ready);if(!D)te=ue+"quitte la session VR pour utiliser le mode spectateur";else if(re.role!=="vr"&&z&&z.map!==_())te=ue+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(re.role!=="vr"&&z&&!z.ready)te=ue+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(re.role==="player"&&z&&z.protocol<5)te=ue+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(re.role!=="vr"&&C(z))te=ue+"h\xF4te connect\xE9";else if(re.role==="vr"){let R=pe.filter(C),x=R.filter(G=>G.role==="player").length,I=R.some(G=>G.role==="pc");te=ue+"tu h\xE9berges \xB7 "+(x+1)+" joueur"+(x?"s":""),I&&(te+=" \xB7 spectateur connect\xE9"),!x&&pe.some(G=>!C(G))&&(te+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==te&&(N.textContent=te,c?.())}function Z(D){let{inVR:q,time:z,dt:te,position:ue,yaw:pe,camera:R,rig:x,keys:I,avatar:G,bodies:se,score:j}=D;if(!re.role){L();return}let xe=re.role!=="pc"||!q,fe=performance.now(),be=_(),_e=re.role!=="vr"?re.remote:null,he=xe&&C(_e);if(!he&&p!==-1&&L(),T(te,he,fe),E(xe,z,te,fe),re.role==="pc"&&!q){(D.actions??I).delete("KeyC")&&ie();let we=J===3&&he?[...h.values()].find(Te=>Te.type===xT)?.mesh:null,Oe=he?u.get(_e.id)?.art?.model:null;we?(Pe.set(0,0,-.23).applyQuaternion(we.quaternion),x.position.copy(we.position).add(Pe),x.rotation.set(0,0,0),R.position.set(0,0,0),R.quaternion.copy(we.quaternion),x.updateMatrixWorld(!0),ue.copy(x.position)):Oe&&(J===1||J===2)?(Pe.set(0,.72,J===1?-2.7:2.7).applyAxisAngle(G0,Oe.rotation.y),ge.copy(Oe.position).add(Pe),x.position.lerp(ge,1-Math.exp(-te*11)),R.position.set(0,0,0),x.updateMatrixWorld(!0),R.lookAt(Oe.position),R.updateWorldMatrix(!0,!1),ue.copy(x.position)):Me(D)}re.tick({x:ue.x,y:ue.y,z:ue.z,yaw:pe,map:be,ready:xe,avatar:xe&&re.role!=="pc"?G:null,score:j,objectFeed:xe&&re.role==="vr"&&se?we=>f.capture(we,se):null}),fe-V>=150&&(V=fe,X(xe,fe))}function $(D){let q=u.get(D)?.pose;return C(q)?q:null}return{update:Z,getPeer:$,connect:de,leave:()=>re.leave(),get caption(){return N.textContent},handMotion(D,q){return u.get(D)?.handMotion[q]},sendAction(D){return re.sendAction(D,_())},sendShot(D,q){re.queueShot(D,q,_())},get stats(){return re.stats},get role(){return re.role},get connected(){return C(re.remote)},get remoteSpectator(){return re.peers.find(D=>D.role==="pc"&&C(D))??null},get remoteLight(){return y===-1?null:y},get replicaCount(){return h.size},forEachReplica(D){for(let q of h.values())q.mesh.visible&&D(q.mesh)}}}var Y0=Object.freeze([8,16,32,48]),Z0=16,$u=24,X0=new WeakMap,fs=He.clamp,vo=He.lerp,Yf=n=>n*n*(3-2*n);function xo(n,e,t,i){return Number.isFinite(n)?fs(n,e,t):i}function _o(n={}){let e=Y0.includes(n?.detail)?n.detail:Z0,t=n?.heights;return{detail:e,seed:Math.round(xo(n?.seed,0,2147483647,1)),amplitude:xo(n?.amplitude,0,12,0),frequency:xo(n?.frequency,.015,2,.12),grass:xo(n?.grass,0,1,0),shrub:xo(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>xo(i,-$u,$u,0)):null}}function j0(n,e,t,i){let s=fs(t,0,e),r=fs(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,h=a*u+o,f=n[h],d=n[h+1],p=n[h+u],y=n[h+u+1];return l+c<=1?f+(d-f)*l+(p-f)*c:y+(p-y)*(1-l)+(d-y)*(1-c)}function J0(n,e){let t=Y0.includes(e)?e:Z0;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>j0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function ki(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Xf(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Yf(n-i),o=Yf(e-s),a=vo(ki(i,s,t),ki(i+1,s,t),r),l=vo(ki(i,s+1,t),ki(i+1,s+1,t),r);return 2*vo(a,l,o)-1}function Ku(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=X0.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let h=s+1,f=u?c.procedural:new Float64Array(h**2);if(!u&&o)for(let y=0;y<=s;y++)for(let m=0;m<=s;m++){let g=(m/s-.5)*e*a,b=(y/s-.5)*t*a;f[y*h+m]=o*(.62*Xf(g,b,r)+.26*Xf(g*2.03,b*2.03,r+13)+.12*Xf(g*4.13,b*4.13,r+37))}let d=l?f.map((y,m)=>y+l[m]):f,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:f,surface:d};return X0.set(n,p),p}function Zf(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return j0(o,i,(e/s+.5)*i,(t/r+.5)*i)}function MT(n,e,t){return n.y+Zf(Ku(n),e-n.x,t-n.z)}function bT(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,h=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(u+=s[f*r+d],h++);return u/h}function $0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ku(n),{detail:l,w:c,d:u,surface:h,procedural:f}=a,d=e-n.x,p=t-n.z,y=fs(d,-c/2,c/2),m=fs(p,-u/2,u/2);if((d-y)**2+(p-m)**2>=s**2)return!1;let g=(d/c+.5)*l,b=(p/u+.5)*l,w=c/l,_=u/l,C=Math.max(0,Math.ceil(g-s/w)),A=Math.min(l,Math.floor(g+s/w)),L=Math.max(0,Math.ceil(b-s/_)),U=Math.min(l,Math.floor(b+s/_)),S=Number.isFinite(o)?o-n.y:Zf(a,d,p),v=l+1,T=a.heights?.slice()??new Array(v**2).fill(0),F=!1,N=!1;function k(H,V,J){F=!0;let B=V*v+H,oe=T[B],le;if(i==="raise"||i==="lower")le=oe+(i==="raise"?1:-1)*r*J;else{let ie=i==="flatten"?S:bT(a,H,V);le=vo(h[B],ie,Math.min(1,r)*J)-f[B]}le=fs(le,-$u,$u),!(Math.abs(le-oe)<1e-7)&&(T[B]=le,N=!0)}for(let H=L;H<=U;H++)for(let V=C;V<=A;V++){let J=Math.hypot((V-g)*w,(H-b)*_)/s;J<1&&k(V,H,Yf(1-J))}if(!F){let H=fs(g,0,l),V=fs(b,0,l),J=Math.min(l-1,Math.floor(H)),B=Math.min(l-1,Math.floor(V)),oe=H-J,le=V-B,ie=oe+le<=1,re=ie?1-oe-le:oe+le-1,Se=ie?oe:1-le,me=ie?le:1-oe;if(re>=Math.max(Se,me)){let de=+!ie;k(J+de,B+de,1)}else Se>=me?k(J+1,B,1):k(J,B+1,1)}return N&&(n.terrain.heights=T),N}function K0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let h=0;h<=s;h++)for(let f=0;f<=s;f++){let d=h*r+f;o[3*d]=(f/s-.5)*e,o[3*d+2]=(h/s-.5)*t,a[2*d]=f/s*e/2.6,a[2*d+1]=(1-h/s)*t/2.6,h<s&&f<s&&(l.set([d,d+r,d+1,d+r+1,d+1,d+r],c),c+=6)}let u=new $e;return u.setAttribute("position",new ft(o,3).setUsage(Sn)),u.setAttribute("uv",new ft(a,2)),u.setIndex(new ft(l,1)),ST(u,n),u}function ST(n,e){let{surface:t}=Ku(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function Q0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>MT(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function wT(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new $e;return e.setAttribute("position",new Ve(n,3)),e.computeVertexNormals(),e}function TT(){return new Dt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var AT=[{name:"grass",geometry:wT,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:TT,perMetre:.17,max:48,salt:47,color:"#36583c"}];function ey(n){let e=new gt;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of AT){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new Qt({color:a,side:t==="grass"?qt:si});u.flatShading=!0;let h=new xa(i(),u,c);h.name=t,h.instanceMatrix.setUsage(Sn),h.userData.salt=o,h.receiveShadow=!0;let f=new De;for(let d=0;d<c;d++){let p=vo(.68,1.2,ki(d,o,n.terrain.seed+4));h.setColorAt(d,f.setRGB(p,p,p))}e.add(h)}return ET(e,n),e}function ET(n,e){let t=Ku(e),i=new Lt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(ki(a,r,o)-.5)*.96*e.w,c=(ki(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Zf(t,l,c),c),i.rotation.y=ki(a,r,o+2)*2*Math.PI,i.scale.setScalar(vo(.58,1.34,ki(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function ty(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var Qu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],ny=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function iy(n,e=ny[n]){n=Math.max(0,Math.min(Qu.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:ny[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let h of[0,-512])for(let f of[0,-512])i.fillRect(a+h,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function sy({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=d=>Math.min(1,Math.max(-1,d));function h(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=d=>{if(e()){if(d.pointerType==="touch"){let p=n.getBoundingClientRect();if(d.clientX-p.left<p.width*.46){if(o)return;o={id:d.pointerId,x:d.clientX,y:d.clientY}}else{if(a)return;a={id:d.pointerId,x:d.clientX,y:d.clientY,total:0}}d.preventDefault()}else{if(d.button!==0&&d.button!==2)return;l=!0}n.setPointerCapture(d.pointerId)}},n.onpointermove=d=>{if(e())if(d.pointerId===o?.id)r.x=u((d.clientX-o.x)/48),r.z=u((d.clientY-o.y)/48);else if(d.pointerId===a?.id){let p=d.clientX-a.x,y=d.clientY-a.y;a.x=d.clientX,a.y=d.clientY,a.total+=Math.abs(p)+Math.abs(y),t(p,y,.007)}else l&&d.pointerType!=="touch"&&t(d.movementX,d.movementY,.004)};function f(d,p){d.pointerId===o?.id&&(r.x=r.z=0,o=null),d.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),d.pointerType!=="touch"&&(l=!1)}return n.onpointerup=d=>f(d,!0),n.onpointercancel=n.onlostpointercapture=d=>f(d,!1),n.oncontextmenu=d=>d.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(d=>{d.onclick=()=>{if(!e())return;let p=d.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:h,consumeJump(){let d=c;return c=!1,d}}}var CT=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function ry(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){CT.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function oy(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var ay=.065,RT=.08,eh=.035,jf=.003,th=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:s,settings:r,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=r,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=s*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:h,normal:f,offset:d}=u,p=h.surface;if(u.released=null,h.surface=null,h.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=h.valid&&(!h.held||h.hasSupport)&&r.movement!==!1,!h.valid)continue;let y=h.locomotionTarget.subVectors(h.target,e).clampLength(0,c).add(e);if(h.hasSupport?d.copy(h.supportOffset):d.copy(Vi).applyQuaternion(h.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&h.anchor.copy(u.previousPalm).sub(d),this.from.copy(y).add(d),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(y).add(d),m||this.to.add(this.flight),this.to.y-=Math.min(jf,s*t*t);let b=this.sweep(u,this.from,this.to);if(m){let S=this.correction.subVectors(y,h.anchor),v=S.dot(f)<=eh&&h.anchor.distanceToSquared(e)<=(c+eh)**2&&S.lengthSq()<=Math.max(.12,c*.5)**2;v&&(!b||b===p&&this.hitNormal.dot(f)>.7)?(b=p,this.hit.copy(h.anchor).add(d),this.hitNormal.copy(f)):!v&&b===p&&S.dot(f)>eh&&(b=null),!b&&u.tracked&&(u.released=p,this.released=!0)}if(!b)continue;h.anchor.copy(this.hit).sub(d),f.copy(this.hitNormal);let w=b.friction??.8,_=Math.min(1,Math.max(0,w*(.75+r.grip*.09))),C=1-Math.max(0,f.y),A=Math.min(.97,Math.max(0,1-_+C*.24+(r.slide-3)*.035)),L=this.correction.subVectors(h.anchor,y);if(L.addScaledVector(f,-L.dot(f)),this.slideTarget.copy(L).multiplyScalar(-A),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,s*t*.11*A)),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(h.anchor).add(d).addScaledVector(f,jf),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-jf*2.5),this.supportBoxes[0]=b,this.palmContact(this.from,this.to,h.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))h.anchor.copy(this.hit).sub(d),f.copy(this.hitNormal);else if(A>.5&&L.lengthSq()>eh**2)continue}L.subVectors(h.anchor,y),m&&L.dot(f)<0&&L.addScaledVector(f,-L.dot(f)),l.add(L);let U=b.objectBody;if(U){let S=u.inverseRotation.copy(U.mesh.quaternion).invert();u.localAnchor.copy(h.anchor).add(d).sub(U.mesh.position).applyQuaternion(S),u.localNormal.copy(f).applyQuaternion(S)}if(h.surface=b,h.groundContact=f.y>.55,this.contacts++,u.tracked){let S=this.handMotion.subVectors(u.previousTarget,y),v=S.dot(f);S.multiplyScalar(1-A).addScaledVector(f,Math.max(0,v)-v*(1-A)),this.intent.add(S)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=s*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let d of this.hands){let{hand:p,previousPalm:y,previousTarget:m,offset:g}=d;d.tracked=d.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),y.copy(m).add(g),p.surface&&(y.copy(p.anchor).add(g),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let d=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(d,this.planned.length()))}let u=ay;this.average.set(0,0,0);for(let d=0;d<o.length&&u>0;d++){let p=o[(this.historyIndex-d+o.length)%o.length];if(!p.duration)break;let y=Math.min(u,p.duration);this.average.addScaledVector(p.distance,y/p.duration),u-=y}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/ay),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let d=0;d<2;d++)for(let{hand:p,normal:y,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(y);g<0&&this.average.addScaledVector(y,-g)}let{jump:h,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*h)/(.72+.056*f)),t.clampLength(0,8.5+.28*h);for(let d of this.hands){let p=d.hand.surface??d.released;p&&(d.releaseSurface=p,d.releaseTime=RT,d.hand.surface=null,d.previousPalm.copy(d.previousTarget).add(d.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function ly(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function cy({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new qe,l=0,c=new Ni,u=[],h=new Map,f=L0(n,{onShot:(g,b)=>r.sendShot(g,b),impact(g,b,w,_){c.set(g,b),c.far=w;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let A=h.get(C.object);return _&&A&&!A.owner&&!A.frozen&&A.velocity.addScaledVector(b,Math.min(4,2.6/A.mass)),C.distance}}),d={position:new M,quaternion:new qe,modelPosition:new M},p={position:d.modelPosition,quaternion:d.quaternion},y=null;function m({frame:g,space:b,inVR:w,enabled:_,remoteWorld:C,dt:A,yaw:L,drop:U,rightHand:S,flatFiring:v}){let T=null,F=!1;if(_)if(w){let N=[...g.session.inputSources].find(H=>H.handedness==="right"),k=N&&g.getPose(N.targetRaySpace,b);if(k){let{position:H,orientation:V}=k.transform;T=d,T.position.set(H.x,H.y-U,H.z).applyAxisAngle(o,L).add(e.position),T.modelPosition.copy(S.valid?S.mesh.position:T.position),T.quaternion.set(V.x,V.y,V.z,V.w).premultiply(a.setFromAxisAngle(o,L)),F=!!N.gamepad?.buttons[0]?.pressed}}else T=d,t.getWorldPosition(T.position),t.getWorldQuaternion(T.quaternion),T.modelPosition.set(.16,-.17,-.43).applyQuaternion(T.quaternion).add(T.position),F=v;if(y=T?p:null,u.length=0,h.clear(),T||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(C)r.forEachReplica(N=>u.push(N));else for(let N of s)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),h.set(N.mesh,N))}f.update({dt:A,aim:T,firing:F}),F?l=1.3:l=Math.max(0,l-A)}return{update:m,receiveShot({position:g,quaternion:b},w){f.replay(g,new qe().copy(b),w),l=1.3},reset(){f.reset(),l=0,y=null},get gun(){return y},get shotsFired(){return f.shotsFired}}}function uy(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function hy(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var nr=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],nh=["Naturel","Cellulo","Affiche","R\xE9tro"],ih={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function sh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=dy(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let p=dy(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function dy(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let y=u.getComponent(f,p);a.setComponent(f+h,p,y)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var oh=0,PT=1,IT=new M,fy=new Ga,Jf=new An,py=new M,rh=new En,ah=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new lh,this.unassigned=new lh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new $f(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,IT)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===oh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,u;r=0,fy.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l){fy.closestPointToPoint(p.point,!0,py);let y=py.distanceToSquared(p.point);y>r&&(r=y,c=p)}}r=-1,Jf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let y=Math.abs(Jf.distanceToPoint(p.point));y>r&&(r=y,u=p)}}let h=[];if(Jf.distanceToPoint(u.point)<0){h.push(li.create(a,l,c),li.create(u,l,a),li.create(u,c,l),li.create(u,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge(d)),h[f+1].getEdge(1).setTwin(h[d+1].getEdge(0))}}else{h.push(li.create(a,c,l),li.create(u,a,l),li.create(u,l,c),li.create(u,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge((3-f)%3)),h[f+1].getEdge(0).setTwin(h[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(h[f]);for(let f=0,d=e.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let y=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>r&&(r=g,y=this.faces[m])}y!==null&&this._addVertexToFace(p,y)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===oh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=PT;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===oh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=li.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},li=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=oh,this.edge=null}static create(e,t,i){let s=new n,r=new tl(e,s),o=new tl(t,s),a=new tl(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return rh.set(e.point,t.point,i.point),rh.getNormal(this.normal),rh.getMidpoint(this.midpoint),this.area=rh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},tl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},$f=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},lh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ir=class extends $e{constructor(e=[]){super();let t=[],i=[],r=new ah().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ve(t,3)),this.setAttribute("normal",new Ve(i,3))}};var In=Math.PI*2,ch=.84,Gi=128;function gs(n){let e=new Uint8Array(Gi*Gi*4);for(let i=0;i<Gi;i++)for(let s=0;s<Gi;s++){let r=(s+.5)/Gi,o=(i+.5)/Gi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/ch,1),Math.min(o/ch,1),s,i),l=(s+i*Gi)*4;for(let c=0;c<3;c++)e[l+c]=He.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new gi(e,Gi,Gi);return t.colorSpace=vt,t.generateMipmaps=!0,t.minFilter=Rn,t.magFilter=an,t.needsUpdate=!0,t}function sr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new De(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*ch,r.getY(l)*ch):r.setXY(l,.95,.95);return i.setAttribute("color",new ft(a,3)),i}function ys(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:sh(s),material:new Mt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function my(n,e,t){let i=n/2,s=e/2,r=new Ui;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ps(n,e,t,i,s){return new Ws(my(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ms(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[h,f]=n[u];for(let d=0;d<=e;d++){let p=In*d/e,y=t(h,f,p,u);if(i.push(y*Math.sin(p),f,y*Math.cos(p)),s.push(d/e,u/(n.length-1)),u===n.length-1||d===e)continue;let m=u*(e+1)+d,g=m+e+1;h>0&&r.push(m,m+1,g),n[u+1][0]>0&&r.push(m+1,g+1,g)}}let o=new $e;o.setAttribute("position",new Ve(i,3)),o.setAttribute("uv",new Ve(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let h=u*(e+1),f=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function nl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=In*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new ir(t)}function LT(){let t=new Da(my(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=He.clamp(i.getX(l)/.098+.5,0,1),u=He.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=gs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*In),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[it(ps(.106,.207,.013,.011,.0019),8425890),it(ps(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(ps(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(ps(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(it(new Wt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(it(new Kt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(it(new Kt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ir([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return ys("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function DT(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ms(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+h)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=gs((a,l,c,u)=>{let h=In*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(h)),p=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(h))/.009)**2)))),y=d**3*p,m=sr(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*d+58*y+g,76+24*d+70*y+g,24+11*d+52*y+g*.8]}),o=nl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return ys("bread","Baguette de pain",.27,o,[it(s,16777215,!0)],r,.9)}function UT(){let n=gs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*sr(a,l)-(c&&(h||f)?35:0);return[p*.94,p,p*1.04]}),e=ms([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ms([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Wt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Wt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=In*r/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=nl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return ys("wheel","Roue",1.8,s,i,n,.64,.23)}function FT(){let n=gs((r,o,a,l)=>{let c=sr(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos(In*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=ms([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Fi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+In*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new ir(i);return ys("cup","Tasse",.39,s,[it(e,16777215,!0),it(t,15785922)],n,.37)}function NT(){let n=ms([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=gs((s,r,o,a)=>{let l=9*sr(o,a),c=11*Math.cos(s*In*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*In*48+s*In*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*In*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new Qr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new Kt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new Kt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Wt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new Kt(.008,12).translate(0,.035,.0336),15633202)],i=nl([[.033,-.143],[.054,.133]],6);return ys("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function BT(){let n=ms([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=gs((r,o,a,l)=>{let c=10*sr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(In*r*2));if(e[f]?.[h]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(In*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new Kt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new Qr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new Kt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=nl([[.069,-.112],[.069,.109]],6);return ys("soda","Canette de soda",.35,s,i,t,.42,.27)}function OT(){let n=ms([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=gs((s,r,o,a)=>{let l=15*sr(o,a),c=8*Math.cos(s*In*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(ps(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new Kt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=nl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return ys("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function zT(){let n=gs((s,r,o,a)=>{let l=8*sr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ms([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(ps(.138,.22,.061,.016,.004),14788675),it(ps(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new Jt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Wt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new Kt(.004,8).translate(.04,.066,.0397),15817792),it(new Kt(.004,8).translate(-.04,.066,.0397),7903100),it(ps(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return ys("radio","Talkie-walkie",.43,new ir(i),t,n,.61,.08)}function gy(){return[LT(),DT(),UT(),FT(),NT(),BT(),OT(),zT()]}var Ln=new qe,Vt=new M,yh=new M,VT=new at,yy=new WeakMap;function Mh(n){if(n.heightfield||n.objectBody)return null;let e=yy.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=VT.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return yy.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function wy(n,e,t){let i=Mh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function xh(n,e,t,i){if(t.heightfield)return KT(n,e,t,i);if(t.objectBody)return Uy(n,e,t.objectBody,i);if(!wy(n,e,t))return 0;Ln.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Ln);let s=t.half;yh.copy(Vt).clamp(t.min,s),i.subVectors(Vt,yh);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Vt.x),a=s.y-Math.abs(Vt.y),l=s.z-Math.abs(Vt.z);return o<=a&&o<=l?i.set(Math.sign(Vt.x)||1,0,0):a<=l?i.set(0,Math.sign(Vt.y)||1,0):i.set(0,0,Math.sign(Vt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,Hi=new M;function ap(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=xh(n,e,c,rt);if(!u||(n.addScaledVector(rt,u+1e-4),rt.y>.65&&(a=!0),!i))continue;let h=i.dot(rt);h<0&&i.addScaledVector(rt,-h*(Math.abs(h)<.55?1:1+s)),Hi.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(Hi,-Math.min(.95,r*c.friction*o))}return a}var Kf=new M,wo=[];function Ao(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));wo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,h=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let d of i){let p=Mh(d);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&h<=p.maxZ)&&wo.push(d)}for(let d=1;d<=o;d++){Kf.copy(n).lerp(e,d/o);for(let p of wo){let y=xh(Kf,t,p,rt);if(y)return s.copy(Kf).addScaledVector(rt,y+.001),r.copy(rt),p}}return null}var rl=new M,al=new M,To=new M,Ty=new En,ol=new M;function lr(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let y=new M().fromBufferAttribute(t,p),m=y.toArray().map(g=>g.toFixed(5)).join(",");r.has(m)||(r.add(m),i.push(y))}for(let p=0;p<(n.index?.count??t.count);p+=3){let y=_=>new M().fromBufferAttribute(t,n.index?n.index.getX(_):_),m=y(p),g=y(p+1),b=y(p+2),w=new En(m,g,b).getNormal(new M);w.lengthSq()>.1&&s.push({a:m,b:g,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new rn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),h=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=p=>{let y=[];for(let m of p)m.lengthSq()>.5&&!y.some(g=>Math.abs(g.dot(m))>.9999)&&y.push(m);return y};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:f,normals:e?[]:d(s.map(p=>p.n)),edges:e?[]:d(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function bh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Ln.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Ln),i.faces.every(r=>r.n.dot(rl.subVectors(Vt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)Ty.set(r,o,a).closestPointToPoint(Vt,ol),s=Math.min(s,Vt.distanceToSquared(ol));return Math.sqrt(s)}function kT(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=xh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Ln.copy(e.quaternion).invert(),Vt.copy(s.position).sub(e.position).applyQuaternion(Ln),yh.copy(Vt).clamp(e.min,e.half),Vt.distanceToSquared(yh)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){rl.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=xh(rl,.007,e,To);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(rl),t.copy(To)):Math.abs(c-o)<.003&&To.dot(t)>.98&&(i.lerp(rl,1/++a),o=Math.max(o,c)))}return o}var uh=new M,GT=new M,hh=new M,HT=new M,WT=new M;function Mi(n){return lr(new et(n.x*2,n.y*2,n.z*2))}function Sh(n,e,t){let i=HT.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=WT.copy(o).negate(),c=ar(n,l)+ar(e,o)-a,u=ar(n,o)+ar(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(uh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(uh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){hh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(uh.copy(a).applyQuaternion(e.mesh.quaternion).cross(hh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(GT.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Ln.copy(a.mesh.quaternion).invert(),Vt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Ln);for(let{a:c,b:u,c:h}of a.shape.faces){Ty.set(c,u,h).closestPointToPoint(Vt,ol);let f=Vt.distanceToSquared(ol);f<l&&(l=f,hh.copy(ol))}if(!r(uh.subVectors(Vt,hh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var qT=new M;function XT(n,e,t){Ln.copy(e.quaternion).invert(),Vt.copy(n.mesh.position).sub(e.position).applyQuaternion(Ln);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Vt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Vt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+ar(n,qT.copy(t).negate())-s,a=r+ar(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function lp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return kT(n,e,t,i??al);let s=XT(n,e,t)??Sh(n,e,t);return s>0&&i&&Cy(n,e,t,i),s}var sp=lr(new ri(1,0).scale(...Wu)),dh={mesh:{position:new M,quaternion:new qe},shape:sp,radius:sp.radius,precise:!0};function Ay(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=sp.radius;wo.length=0;for(let c of i){let u=Mh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||wo.push(c)}dh.mesh.quaternion.copy(t);let l=dh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of wo){let h=u.objectBody;if(h&&(h.owner||l.distanceToSquared(h.mesh.position)>(a+h.radius)**2))continue;let f=h?Sh(dh,h,rt):lp(dh,u,rt);if(f>0)return s.copy(l).addScaledVector(rt,f+5e-4),r.copy(rt),u}}return null}function ll(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!wy(n.mesh.position,n.radius,s))continue;let r=lp(n,s,rt);r<=1e-6||(n.mesh.position.addScaledVector(rt,r),i=!0)}if(!i)break}}var Qf=new M,il=new M,fh=new M,ep=new qe,xs=new qe,xy=new qe;function vy(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Ey(n,e,t,i,s){let{mesh:r,shape:o}=n;Qf.copy(r.position),ep.copy(r.quaternion),il.subVectors(e,Qf);let a=vy(ep,t,xs),l=il.length()+a*o.radius,c=Ly(o),u=Math.max(1,Math.min(Iy,Math.ceil(l/c))),h=l>0?Math.min(1,u*c/l):1,f=a*h/u;fh.set(xs.x,xs.y,xs.z).normalize(),xy.setFromAxisAngle(fh,f),il.multiplyScalar(h/u);for(let y=0;y<u;y++)r.position.add(il),r.quaternion.premultiply(xy).normalize(),ll(n,i);let d=Math.max(.006,s||0);n.velocity.lerp(il.subVectors(r.position,Qf).divideScalar(d).clampLength(0,23),.52);let p=vy(ep,r.quaternion,xs);fh.set(xs.x,xs.y,xs.z).normalize().multiplyScalar(Math.min(24,p/d)),n.angular.lerp(fh,.52)}function ar(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Ln.copy(n.mesh.quaternion).invert(),To.copy(e).applyQuaternion(Ln);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(To));return t}var So=new M,vh=new M,YT=new M,tp=new M,Mo={},bo={};function _y(n,e,t,i){let{mesh:s,shape:r}=n,o=ar(n,YT.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(So),i.minV=i.maxV=s.position.dot(vh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(To)<o-.0015)continue;tp.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=tp.dot(So),c=tp.dot(vh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Cy(n,e,t,i){Math.abs(t.y)<.8?So.set(-t.z,0,t.x).normalize():So.set(t.y,-t.x,0).normalize(),vh.crossVectors(t,So),_y(n,t,-1,Mo),_y(e,t,1,bo);let s=(Math.max(Mo.minU,bo.minU)+Math.min(Mo.maxU,bo.maxU))*.5,r=(Math.max(Mo.minV,bo.minV)+Math.min(Mo.maxV,bo.maxV))*.5;i.copy(t).multiplyScalar((Mo.plane+bo.plane)*.5).addScaledVector(So,s).addScaledVector(vh,r)}var My=new M;function _h(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)My.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(My)}}function ZT(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Ry(n){return!n.owner&&!n.frozen}var rr=new M,or=new M,sl=new M,by=new M,rp=new M,op=new M,jT=new M;function ph(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function Py(n,e,t,i){let{mesh:s,shape:r}=n.body;return Ln.copy(s.quaternion).invert(),rp.crossVectors(e,t),i.copy(rp).applyQuaternion(Ln).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function mh(n,e,t){return n?.inverseMass?(Py(n,e,t,op),n.inverseMass+rp.dot(op)):0}function gh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(Py(n,e,t,op),i))}function np(n){return n.friction??n.spec?.friction??.78}function Sy(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(np(r)*np(o)):Math.min(np(r),t.friction??.78);rr.subVectors(al,r.mesh.position),o&&or.subVectors(al,o.mesh.position),ph(n,rr,sl).sub(ph(e,or,by));let l=sl.dot(rt),c=!1;if(l<-1e-5){let h=l<-.8?He.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+h)/(mh(n,rr,rt)+mh(e,or,rt));gh(n,rr,rt,f),gh(e,or,rt,-f),ph(n,rr,sl).sub(ph(e,or,by)),Hi.copy(sl).addScaledVector(rt,-sl.dot(rt));let d=Hi.length();if(d>1e-5&&a>0){Hi.divideScalar(d);let p=Math.min(f*a,d/(mh(n,rr,Hi)+mh(e,or,Hi)));gh(n,rr,Hi,-p),gh(e,or,Hi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let h=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(rt,u*n.inverseMass/h),_h(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/h),_h(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function JT(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Iy=96,$T=5;function Ly(n){return Math.max(.008,n.thickness*.35)}function Dy(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:Mh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let h=Ry(u);if(h){let d=Math.min(u.angular.length(),30),p=u.velocity.length()+d*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/Ly(u.shape)))}let f={body:u,inverseMass:h?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new rn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};_h(f),o.push(f)}l=Math.min(Iy,l);let c=t/l;for(let u=0;u<l;u++){for(let h of o){if(!h.inverseMass)continue;let{body:f}=h,{mesh:d,velocity:p,angular:y}=f;h.groundFriction=0,h.groundY=0,p.y-=i*c*(r?.(d.position)?.gravity??1),d.position.addScaledVector(p,c);let m=y.length();m>1e-5&&d.rotateOnWorldAxis(jT.copy(y).divideScalar(m),Math.min(m,30)*c),_h(h)}for(let h=0;h<$T;h++){let f=!1;for(let d of o)if(d.inverseMass)for(let{box:p,bounds:y}of a){if(!ZT(d.bounds,p,y))continue;let m=lp(d.body,p,rt,al);m>0&&(f=Sy(d,null,p,m,s)||f)}for(let d of o)d.sweepStart=d.bounds.min.x,d.sweepEnd=d.bounds.max.x;o.sort((d,p)=>d.sweepStart-p.sweepStart);for(let d=0;d<o.length;d++){let p=o[d];for(let y=d+1;y<o.length;y++){let m=o[y];if(m.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!m.inverseMass||!p.bounds.intersectsBox(m.bounds))continue;let g=Sh(p.body,m.body,rt);g<=0||(Cy(p.body,m.body,rt,al),f=Sy(p,m,null,g,s)||f)}}if(!f)break}for(let h of o)h.inverseMass&&JT(h,c)}}function KT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var ip={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function Uy(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(ip.mesh.position=n,ip.shape.sphereRadius=e,Sh(ip,t,i))}function Fy(n,e,t,i,s){let r=Uy(n,e,t,rt);if(r<=0)return!1;n.addScaledVector(rt,r+.001),s?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Ry(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var kt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Ny=kt(-24,24,-51,7),By=34521,Co={x:0,y:0,z:3},wh={x:.05,y:1.16,z:5.9},Eo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:kt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:kt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:kt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:kt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:kt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:kt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:kt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:kt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:kt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:kt(9,23,-48,-37),sign:[16,-38.2]}},CR=[kt(-9,-6,-51,7),kt(6,9,-51,7),kt(-24,24,-8,-5),kt(-24,24,-27,-23),kt(9,23,-37,-34)],Oy=[{name:"Glace",bounds:Eo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Eo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:kt(-9,9,-51,7)},{name:"Sol ouest",bounds:kt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:kt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:kt(-24,-23,-51,7)},{name:"Sol est",bounds:kt(9,23,-51,-48)},{name:"Sol est",bounds:kt(9,23,-37,7)},{name:"Bordure est",bounds:kt(23,24,-51,7)}],Ro={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Po=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],zy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),cp={x:16,z:-31},up={x:16,y:1.52,z:-21},Th={x:-19.4,y:.68,z:-3.25},Vy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),ky={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",up.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var QT=[0,1,2,3,4,5,7,8,9,10];function Gy(n){zy.forEach(({x:e,z:t},i)=>n(QT[i],new M(e,.8,t)))}function Hy(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Dt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ua(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Dt(.6,4),"#dbab58",.6,3.7],["Coco",new Dt(.124,1),"#956238",.124,.44]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:lr(t,s),material:new Mt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Mi(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of gy()){let s=lr(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var Wy=new WeakMap;function hp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,Wy.set(n,e),n}function Ah(n){let e=n.clone(),t=Wy.get(n);return t?hp(e,t):e}function eA(n){let t=new oi(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Dt(.225,0),s=new Fa({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return hp(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function tA(n){let e=new et(.37,.37,.37),t=new Mt({color:16777215,roughness:.4});return hp(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function qy(){let n={value:0};return{props:[eA(n),tA(n)],animate(e){n.value=e}}}var fp="gorilla-lab-models-v1",cr=Object.freeze({models:12,parts:24,fileBytes:18e4}),nA=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),Yy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),iA=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),sA=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,rA=/^#[a-f\d]{6}$/i;function Xy(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function dp(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?He.clamp(n[s],t,i):e)}function pp(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>cr.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!sA.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>cr.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Xy(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(iA).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:Xy(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(nA,s?.shape)?s.shape:"box",position:dp(s?.position,0,-3,3),rotation:dp(s?.rotation,0,-360,360),scale:dp(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&rA.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(Yy,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function mp(n){try{let e=(n??globalThis.localStorage)?.getItem(fp);if(e&&e.length<=cr.fileBytes)return pp(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function oA(n){switch(n){case"sphere":return new oi(.5,20,12);case"cylinder":return new Wt(.5,.5,1,20);case"cone":return new Gs(.5,1,20);case"torus":return new Fi(.365,.135,8,24);case"capsule":return new wa(.28,.44,6,16);case"diamond":return new ri(.5);default:return new et(1,1,1)}}var Zy=Object.keys(Yy),Io=64,cl=4,jy=2,Wi;function aA(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function lA(){if(Wi)return Wi;let n=Io*cl,e=Io*jy,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Io)*cl+Math.floor(s/Io),o=aA(Zy[r],s%Io,i%Io),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Wi=new gi(t,n,e),Wi.colorSpace=vt,Wi.magFilter=an,Wi.minFilter=Rn,Wi.generateMipmaps=!0,Wi.needsUpdate=!0,Wi}function cA(n){let e=oA(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(He.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new De(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=Zy.indexOf(n.surface),c=l%cl,u=Math.floor(l/cl);for(let h=0;h<r;h++)s.toArray(o,h*3),a.setXY(h,(c+.05+a.getX(h)*.9)/cl,(u+.05+a.getY(h)*.9)/jy);return t.setAttribute("color",new ft(o,3)),t}function Jy(){return new Mt({vertexColors:!0,map:lA(),roughness:.68})}function $y(n){let e=n.map(cA),t=sh(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Ky(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=$y(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Jy(),collisionGeo:new et(i.x,i.y,i.z),mass:He.clamp(i.x*i.y*i.z*9,.18,12)}})}function Qy(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=$y(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Be(t,Jy());r.castShadow=!0;let o=new gt;return o.add(r),o}var ex=new M(0,1,0),tx=new M(0,0,1),uA={left:new qe().setFromAxisAngle(tx,Math.PI/2),right:new qe().setFromAxisAngle(tx,-Math.PI/2)},hA=new qe,dA=new M;function nx(n,e,t,i,s){let r=e.position,o=e.orientation;n.gripPosition.set(r.x,r.y-t,r.z).applyAxisAngle(ex,i).add(s),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(hA.setFromAxisAngle(ex,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(uA[n.side]),n.target.copy(n.gripPosition).sub(dA.copy(Vi).applyQuaternion(n.mesh.quaternion))}function ix(){let n,e,t=0,i=!1,s=0,r=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let b=0;b<g.length;b++)g[b]=(Math.random()*2-1)*(1-b/g.length)}let d=n.currentTime,p=n.createBufferSource(),y=n.createBiquadFilter(),m=n.createGain();p.buffer=e,y.type="lowpass",y.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(He.clamp(f,1,10)*.055,d),m.gain.exponentialRampToValueAtTime(.001,d+.085),p.connect(y).connect(m).connect(n.destination),p.start(d),r++}function u({dt:f,inVR:d,hands:p,grounded:y,travel:m,volume:g,enabled:b}){if(d){p.forEach((w,_)=>{a[_]=Math.max(0,a[_]-f);let C=w.valid&&w.groundContact;C&&!o[_]&&!a[_]&&b&&(c(g),a[_]=.11),o[_]=C});return}s=Math.max(0,s-f),t=y?t+m:0,y&&b&&s===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,s=.12),i=y}function h(){t=0,i=!1,s=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:h,get count(){return r},get state(){return n?.state??"locked"}}}function sx(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),s=new $e;s.setAttribute("position",new ft(t,3).setUsage(Sn)),s.setAttribute("color",new ft(i,3).setUsage(Sn));let r=new ks(s,new yi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.frustumCulled=!1,r.renderOrder=100,r.visible=!1,n.add(r);let o=new qs(new oi(1,12,8)).attributes.position,a=new qs(new ri(1).scale(...Wu)).attributes.position,l=new WeakMap,c=new M(1,1,1),u=new qe,h=new M,f=new M,d=new M,p=new M,y=new M,m=new M,g=new M,b=new M(0,1,0),w={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},_=0;function C(v,T,F){_+2>1e5||(v.toArray(t,_*3),F.toArray(i,_++*3),T.toArray(t,_*3),F.toArray(i,_++*3))}function A(v,T,F,N,k){for(let H=0;H<v.count;H+=2)h.fromBufferAttribute(v,H).multiply(N).applyQuaternion(F).add(T),f.fromBufferAttribute(v,H+1).multiply(N).applyQuaternion(F).add(T),C(h,f,k)}function L(v,T,F,N){if(v.sphereRadius){A(o,T,F,p.setScalar(v.sphereRadius),N);return}for(let{a:k,b:H,c:V}of v.faces)h.copy(k).applyQuaternion(F).add(T),f.copy(H).applyQuaternion(F).add(T),d.copy(V).applyQuaternion(F).add(T),C(h,f,N),C(f,d,N),C(d,h,N)}function U(v,T,F,N){if(T.lengthSq()<1e-8)return;y.copy(v).addScaledVector(T,F),m.copy(T).normalize(),g.crossVectors(m,b),g.lengthSq()<1e-8?g.set(1,0,0):g.normalize();let k=Math.min(.09,v.distanceTo(y)*.3);p.copy(y).addScaledVector(m,-k),C(v,y,N),C(y,h.copy(p).addScaledVector(g,k*.5),N),C(y,f.copy(p).addScaledVector(g,-k*.5),N)}function S({settings:v,boxes:T,bodies:F,hands:N,locomotion:k,velocity:H,head:V,body:J,neck:B,proxies:oe,gravity:le,appliedMove:ie,playerActive:re,inVR:Se}){if(_=0,r.visible=v.debugPalm||v.debugHitboxes||v.debugInvisible||v.debugForces||v.debugBody,!!r.visible){if(v.debugHitboxes||v.debugInvisible){for(let me of T){let de=me.mesh?.isObject3D&&me.mesh.visible;if(!(de?!v.debugHitboxes:!v.debugInvisible)){if(me.shape)L(me.shape,me.position,me.quaternion,de?w.solid:w.proxy);else if(me.heightfield&&me.mesh?.geometry){let ee=me.mesh.geometry,ne=l.get(ee),ge=ee.attributes.position.version;ne?.version!==ge&&(ne?.edges.dispose(),ne={version:ge,edges:new qs(ee)},l.set(ee,ne)),A(ne.edges.attributes.position,me.mesh.position,me.mesh.quaternion,c,w.solid)}}}if(v.debugHitboxes)for(let me of F)me.blocksPlayer&&me.mesh.visible&&L(me.shape,me.mesh.position,me.mesh.quaternion,w.solid)}if(re){if(v.debugBody){if(v.collisions)for(let{position:me,radius:de}of oe)A(o,me,u,p.setScalar(de),w.rig);C(V,B,w.rig),C(B,J,w.rig)}if(v.debugForces&&(U(V,H,.13,w.velocity),U(V,b,-le*.038,w.force),U(V,ie,5,w.movement)),Se&&(v.debugPalm||v.debugForces))for(let me of k.hands){let{hand:de,normal:ee,offset:ne}=me;if(de.valid){if(v.debugPalm){A(o,de.gripPosition,u,p.setScalar(.014),w.grip);for(let ge=0;ge<3;ge++)m.set(0,0,0).setComponent(ge,.075).applyQuaternion(de.controllerRotation),U(de.gripPosition,m,1,w.grip);y.copy(de.mesh.position).add(ne),A(a,y,de.mesh.quaternion,c,w.palm),C(de.gripPosition,y,w.grip),de.hasSupport&&(y.copy(Vi).applyQuaternion(de.mesh.quaternion).add(de.mesh.position),A(a,y,de.mesh.quaternion,c,w.grip))}v.debugForces&&de.surface&&U(de.anchor,ee,.25,w.normal)}}}s.setDrawRange(0,_);for(let me of["position","color"]){let de=s.attributes[me];de.clearUpdateRanges(),_&&de.addUpdateRange(0,_*3),de.needsUpdate=!!_}}}return{update:S}}function Eh(n,e,t){let i=new et(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var gp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],ox=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],yp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Ch=3e6,ul=240,yn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,rx=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function hl(n){if(typeof n=="string"){if(n.length>Ch)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>ul)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+ul+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:rx(n.name,56,"Ma map"),spawn:{x:yn(e.x,-120,120,0),y:yn(e.y,-10,30,.06),z:yn(e.z,-120,120,3),yaw:yn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?_o(t.terrain):null;return{name:rx(t.name,36,"Pi\xE8ce "+(i+1)),x:yn(t.x,-120,120,0),y:yn(t.y,-12,33,0),z:yn(t.z,-120,120,0),w:yn(t.w,.2,64,3),h:yn(t.h,.12,36,.5),d:yn(t.d,.2,64,3),pitch:s?0:yn(t.pitch,-70,70,0),yaw:s?0:yn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(yn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:yn(t.grip,0,1.5,.8),gravity:yn(t.gravity,.05,2.5,1),bounce:yn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function ax(n){return hl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Co,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function Rh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function lx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,h=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,f=g=>Math.round(g/i)*i,d=f(n.x+u.x*h),p=f(n.y+u.y*h),y=f(n.z+u.z*h),m=h-(d-n.x)*u.x-(p-n.y)*u.y-(y-n.z)*u.z;return d+=u.x*m,p+=u.y*m,y+=u.z*m,![d,p,y].every(Number.isFinite)||Math.abs(d)>120||Math.abs(y)>120||p<-12||p>33?null:{...t,x:d,y:p,z:y}}var dl="gorilla-lab-custom-map-v1";function cx(n){let e=new Blob([JSON.stringify(hl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function ux({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(Y=>Y.half&&Y.mesh?.isObject3D).map(Y=>Y.mesh)),c=new gt;n.add(c);let u=[],h=[],f=new Ba,d=new Map,p=0,y=null,m="",g=-1,b=-1,w="",_="",C=new et(1,1,1),A=new Be(C,new yt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let L=new Ni,U=new M,S=new M,v=document.querySelector("#map-note");function T(Y){w=Y,v.textContent=Y}function F(){h.length>=20&&h.shift(),h.push(JSON.stringify(y))}function N(Y,ye){let Me=d.get(Y);if(!Me){Me={materials:new Set,texture:null,failed:!1},d.set(Y,Me);let E=Z=>{if(!(d.get(Y)!==Me||Me.failed)){Me.failed=!0;for(let $ of Me.materials)$.map=null,$.needsUpdate=!0;Me.texture?.dispose(),Z&&T(Z)}},X=f.load(Y,Z=>{(Z.image.width>2048||Z.image.height>2048)&&E("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>E());Me.texture=X,X.colorSpace=vt,X.wrapS=X.wrapT=mi}return Me.materials.add(ye),ye.map=Me.failed?null:Me.texture,Me}function k(){for(let[Y,ye]of d)ye.materials.size||(d.delete(Y),ye.failed||ye.texture.dispose())}function H(Y){let ye=e.mapMaterial(Y.material,r());if(!Y.texture&&Y.color==="#ffffff")return{material:ye,custom:!1};let Me=ye.clone();return Me.onBeforeCompile=ye.onBeforeCompile,Me.customProgramCacheKey=ye.customProgramCacheKey,Me.color.multiply(new De(Y.color)),{material:Me,custom:!0,ownTexture:Y.texture?N(Y.texture,Me):null}}function V(Y){c.remove(Y.mesh),Y.mesh.geometry.dispose(),Y.vegetation&&ty(Y.vegetation),Y.custom&&(Y.ownTexture?.materials.delete(Y.mesh.material),Y.mesh.material.dispose())}function J(Y,ye){let{material:Me,custom:E,ownTexture:X}=H(Y),Z=new Be(Y.terrain?K0(Y):Eh(Y.w,Y.h,Y.d),Me);Z.position.set(Y.x,Y.y,Y.z),Z.rotation.set(He.degToRad(Y.pitch),He.degToRad(Y.yaw),0,"YXZ"),Z.castShadow=Z.receiveShadow=!0,Z.userData.mapIndex=ye,c.add(Z);let $=new M(Y.w/2,Y.h/2,Y.d/2),D={mesh:Z,position:Z.position,quaternion:Z.quaternion,half:$,min:$.clone().negate(),shape:Mi($),friction:Y.grip,gravity:Y.gravity,bounce:Y.bounce,zone:!0,type:Y.material};if(!Y.terrain)return{mesh:Z,collider:D,custom:E,ownTexture:X};let q=ey(Y);return q&&Z.add(q),{mesh:Z,collider:Q0(Y,Z),custom:E,ownTexture:X,vegetation:q}}function B(){for(let Y of u){let ye=y?.pieces[Y.mesh.userData.mapIndex];if(!ye||Y.ownTexture)continue;let Me=e.mapMaterial(ye.material,r());Y.custom?Y.mesh.material.map!==Me.map&&(Y.mesh.material.map=Me.map,Y.mesh.material.needsUpdate=!0):Y.mesh.material=Me}}function oe(){for(let ye of u)V(ye);u.length=0;let Y=y?.pieces??[];m=y?"custom-"+tr(JSON.stringify(y)):"",o.forEach(ye=>ye.visible=!y||y.arenaBase&&!l.has(ye));for(let ye=0;ye<Y.length;ye++)u.push(J(Y[ye],ye));if(k(),y){let ye=y.arenaBase?a.filter(Me=>!l.has(Me.mesh)):[];e.boxes.splice(0,e.boxes.length,...ye,...u.filter((Me,E)=>Y[E].solid).map(Me=>Me.collider))}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),s(),y)try{localStorage.setItem(dl,JSON.stringify(y))}catch{}else try{localStorage.removeItem(dl)}catch{}}function le(Y){let ye=hl(Y);p++,h.length=0,y=ye,g=b=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),oe(),i(y.spawn.yaw),T("Map : "+y.name+" \xB7 "+y.pieces.length+" pi\xE8ces")}function ie(){p++,y=null,h.length=0,g=b=-1,t.set(0,0,3),oe(),i(0),T("Ar\xE8ne int\xE9gr\xE9e")}function re(){le({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Rh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function Se(){if(!h.length)return T("Rien \xE0 annuler.");y=hl(h.pop()),g=b=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),oe(),T("Derni\xE8re modification annul\xE9e.")}function me(){y?cx(y):T("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function de(Y,ye,Me,E){y&&(F(),y.spawn={x:Y,y:ye,z:Me,yaw:He.radToDeg(E)},t.set(Y,ye,Me),oe(),T("Point de d\xE9part m\xE9moris\xE9."))}function ee(Y,ye,Me,{mode:E,piece:X,head:Z,feet:$}){L.set(Y,ye),L.far=12;let D=u.map(I=>I.mesh);E===1&&y?.arenaBase&&D.push(...a.filter(I=>I.heightfield).map(I=>I.mesh));let q=L.intersectObjects(D,!1),z=E>=5?q.find(I=>y?.pieces[I.object.userData.mapIndex]?.terrain):q[0];if(A.visible=!1,!y)return;if(E>=5){let I=z?.object.userData.mapIndex,G=y.pieces[I];if(!G?.terrain||!Me)return;if(F(),E===9){let se=X.terrain?.detail??G.terrain.detail,j=J0(G.terrain,se);G.terrain=_o({...j,...X.terrain,heights:j.heights})}else{let se={mode:["raise","lower","smooth","flatten"][E-5],radius:X.brushRadius,strength:X.brushStrength,target:G.y};$0(G,z.point.x,z.point.z,se)}oe(),T("Relief modifi\xE9.");return}if(E===2||E===3||E===4){if(!z)return;let I=z.object.userData.mapIndex,G=y.pieces[I];if(Me&&E===2&&(g=I,b=I,T("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Me&&E===3){if(y.pieces.length===1)return T("Garde au moins une pi\xE8ce dans la map.");F(),y.pieces.splice(I,1),g=b=-1,oe(),T("Pi\xE8ce supprim\xE9e.")}Me&&E===4&&(F(),Object.assign(y.pieces[I],{material:X.material,grip:X.grip,gravity:X.gravity,bounce:X.bounce,solid:X.solid,texture:X.texture}),oe(),T("Surface modifi\xE9e.")),z&&(A.position.copy(z.object.position),A.rotation.copy(z.object.rotation),A.scale.set(G.w,G.h,G.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(E===3?"#ff8271":"#ffe2a2"));return}if(!z)return;let te=b>=0?y.pieces[b]:X;if(z.object.userData.mapIndex===b)return;U.copy(z.face.normal).transformDirection(z.object.matrixWorld);let ue=te.terrain?{...te,x:Math.round(z.point.x*2)/2,y:z.point.y,z:Math.round(z.point.z*2)/2,pitch:0,yaw:0}:lx(z.point,U,te);if(!ue)return;A.position.set(ue.x,ue.y,ue.z),A.rotation.set(He.degToRad(ue.pitch),He.degToRad(ue.yaw),0,"YXZ"),A.scale.set(ue.w,ue.h,ue.d),A.updateMatrixWorld(!0),A.visible=!0;let pe=new rn().setFromObject(A),R=new rn(new M(Z.x-.26,$+.01,Z.z-.26),new M(Z.x+.26,Z.y+.19,Z.z+.26)),x=ue.solid&&pe.intersectsBox(R);if(A.material.color.set(x?"#fd7763":"#8be4b9"),Me){if(x)return T("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(b<0&&y.pieces.length>=ul)return T("Limite de "+ul+" pi\xE8ces atteinte.");F(),b>=0?(y.pieces[b]=ue,b=-1):y.pieces.push(ue),oe(),T("Pi\xE8ce pos\xE9e \xB7 "+y.pieces.length+" pi\xE8ces")}}let ne=document.querySelector("#map-file"),ge=document.querySelector("#map-url");ne.onchange=async()=>{let Y=ne.files[0];if(!Y)return;let ye=++p;ne.value="";try{if(Y.size>Ch)throw Error("Map trop lourde.");let Me=await Y.text();ye===p&&le(Me)}catch(Me){ye===p&&T(Me.message)}};async function Pe(Y){let ye=++p;try{let Me=new URL(Y,location.href);if(!["http:","https:"].includes(Me.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let E=await fetch(Me,{credentials:"omit"});if(ye!==p)return;if(!E.ok)throw Error("URL de map inaccessible ("+E.status+").");if(Number(E.headers.get("content-length"))>Ch)throw Error("Map trop lourde.");let Z=await E.text();ye===p&&le(Z)}catch(Me){ye===p&&T(Me.message)}}return document.querySelector("#map-load-url").onclick=()=>Pe(ge.value),document.querySelector("#map-export").onclick=me,document.querySelector("#map-reset").onclick=ie,{modelPieces:()=>y?.pieces.filter(Y=>!Y.terrain&&Y.name!=="Sol")??[],refreshMaterials:B,load:le,loadURL:Pe,reset:ie,blank:re,undo:Se,save:me,edit:ee,recenter:de,inform:T,clearGhost(){A.visible=!1},get active(){return!!y},get builtIn(){return!y||y.arenaBase===!0},get status(){return w},get yaw(){return y?.spawn.yaw??0},get nodes(){return y?.pieces.length??0},get name(){return y?.name??null},get signature(){return m}}}var xp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function hx(){let n=new Be(new Jt(2,2),new cn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+xp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function dx(n){let e=new Vs,t=new Ht;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Ae(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},s=new cn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+xp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),r=new Be(new Jt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,h,f)=>{let d=Math.max(0,l.indexOf(f)),p=a[d]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,h,{bloom:f,visibleField:d}){if(n.xr.updateCamera(h),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=d,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),y=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let w=l[b],_=Math.max(32,Math.round(w.viewport.z)),C=Math.max(32,Math.round(w.viewport.w)),A=a[b];A?(A.width!==_||A.height!==C)&&A.setSize(_,C):A=a[b]=new Cn(_,C,{type:o?vi:Vn,minFilter:on,magFilter:on,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=b===0&&m,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=y,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,h)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function fx(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function px(n,e,t){let i=new Qt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Wt(.16,.25,3.15,9,12),r=s.attributes.position,o=new De,a=[];for(let ie=0;ie<r.count;ie++){let re=Math.round((r.getY(ie)+1.575)/3.15*12),Se=Math.floor((Math.atan2(r.getX(ie),r.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+re*.002,.35,.35+re%3*.032+Se%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Ve(a,3));let l=new gt;l.position.set(cp.x,0,cp.z),l.rotation.z=-.14,n.add(l);let c=new Be(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,re,Se=.85){let me=ie.getWorldPosition(new M),de=ie.getWorldQuaternion(new qe);e.push({half:re,min:re.clone().negate(),position:me,quaternion:de,mesh:{position:me,quaternion:de},shape:Mi(re),friction:Se,gravity:1})}for(let ie=0;ie<4;ie++){let re=new Lt;re.position.y=(ie+.5)*3.15/4,l.add(re);let Se=.237-ie*.022;u(re,new M(Se,.398,Se))}let h=[],f=[],d=3.14;function p(ie,re,Se,me){h.push(...ie,...re,...Se),o.setHSL(.25+me*.043,.54,.28+me*.17);for(let de=0;de<3;de++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let me=function(de,ee){let ne=de*Se;return[Math.cos(re)*ne-Math.sin(re)*ee,d+Math.sin(de*Math.PI)*.38-de*de*.54+ie%3*.055,Math.sin(re)*ne+Math.cos(re)*ee]},re=ie*2.39996,Se=1.35+ie%4*.2;for(let de=0;de<7;de++){let ee=de/7,ne=(de+1)/7,ge=.285*Math.sin(Math.PI*ee)**.7,Pe=.285*Math.sin(Math.PI*ne)**.7;for(let Y of[-1,1]){let ye=me(ee,ge*Y),Me=me(ne,Pe*Y);ye[1]-=.065,Me[1]-=.065,p(me(ee,0),ye,Me,.31+de%4*.14),p(me(ee,0),Me,me(ne,0),.47+ie%3*.16)}}}let y=new $e;y.setAttribute("position",new Ve(h,3)),y.setAttribute("color",new Ve(f,3)),y.computeVertexNormals();let m=new Be(y,new Qt({vertexColors:!0,side:qt,flatShading:!0}));m.castShadow=!0,l.add(m);let g=new Mt({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let ie=0;ie<5;ie++){let re=ie*Math.PI*2/5,Se=new Be(new Dt(.124,1),g);Se.position.set(Math.cos(re)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(re)*(.25+ie%2*.1)),Se.scale.set(.91,1.16,.91),Se.castShadow=!0,l.add(Se),b.push(Se)}l.updateMatrixWorld(!0);let w=[],_=[],C=new Qt({color:"#485d5d",flatShading:!0});function A([ie,re],Se,me){let de=new Be(new et(.095,.68,.11),C);de.position.set(ie,.34,re+.46),de.castShadow=de.receiveShadow=!0,n.add(de),u(de,new M(.0475,.34,.055));let ee=new gt;ee.position.set(ie,.85,re+.4),ee.rotation.x=-.35,n.add(ee);let ne=new Be(new et(.64,.36,.055),new Qt({color:"#182831"}));ee.add(ne);let ge=document.createElement("canvas");ge.width=512,ge.height=96;let Pe=ge.getContext("2d"),Y=new Zn(ge);Y.colorSpace=vt;let ye=new Be(new Jt(.61,.095),new yt({map:Y}));ye.position.set(0,.116,.03),ee.add(ye);let Me=.592/me.length,E=me.map(([Z,$],D)=>{let q=new Be(new et(Me-.012,.155,.04),new Qt({color:"#478086"}));q.position.set(-.296+Me*(D+.5),-.045,.046),ee.add(q),w.push(q),q.userData.touchWidth=Me-.012;let z=document.createElement("canvas");z.width=208,z.height=172;let te=new Zn(z);te.colorSpace=vt;let ue=new Be(new Jt(Me-.017,.139),new yt({map:te}));ue.position.z=.0205,q.add(ue);let pe=-1/0;return q.userData.action=()=>{let R=performance.now();R-pe<250||(pe=R,$(),L(),q.position.z=.036,setTimeout(()=>{q.position.z=.046},115))},{label:Z,context:z.getContext("2d"),texture:te}});function X(){Pe.fillStyle="#182831",Pe.fillRect(0,0,512,96),Pe.fillStyle="#ffe1a0",Pe.font="bold 38px system-ui",Pe.fillText(Se,17,62,478);for(let Z of E){let $=Z.context;$.fillStyle="#386269",$.fillRect(0,0,208,172),$.fillStyle="#fff2d5",$.textAlign="center",$.font="bold 27px system-ui";let D=(typeof Z.label=="function"?Z.label():Z.label).split("|");D.forEach((q,z)=>$.fillText(q,104,(D.length>1?68:97)+z*37,188)),Z.texture.needsUpdate=!0}Y.needsUpdate=!0}_.push(X)}function L(){for(let ie of _)ie()}A(Ro.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Po[0])],["Boule",()=>t.spawn(1,Po[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Po[0])],["Vider",t.clear]]),A(Ro.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Po[1])],["Sph\xE8re",()=>t.spawn(5,Po[1])]]),A(Ro.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),A(Ro.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),A(Ro.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),L();let U=new gt,{x:S,y:v,z:T}=up;U.position.set(S,v,T),n.add(U);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let re=[.9,.58,.27][ie],Se=new Be(new Kt(re,20),new Qt({color:F[ie],side:qt}));Se.position.z=ie*.012,U.add(Se)}let N=new Be(new et(.14,1.5,.14),C);N.position.set(0,.75-v,-.11),U.add(N);let k=0,H=document.createElement("canvas");H.width=256,H.height=64;let V=H.getContext("2d"),J=new Zn(H);J.colorSpace=vt;let B=new Be(new Jt(1.4,.35),new yt({map:J,side:qt}));B.position.set(0,2.64-v,.02),U.add(B);function oe(){V.fillStyle="#182831",V.fillRect(0,0,256,64),V.textAlign="center",V.font="bold 28px system-ui",V.fillStyle="#fff0ce",V.fillText("CIBLE  \xB7  "+k,128,42),J.needsUpdate=!0}function le(ie){for(let re of ie){if(!re.beforePhysics||re.owner||re.frozen||!re.mesh.visible)continue;let Se=re.beforePhysics,me=re.mesh.position;if(Se.z<=T||me.z>T||re.velocity.z>=-1)continue;let de=(Se.z-T)/(Se.z-me.z),ee=Math.hypot(He.lerp(Se.x,me.x,de)-S,He.lerp(Se.y,me.y,de)-v);ee<=.9+re.radius*.45&&(k+=ee<.27?3:ee<.58?2:1,oe())}}return oe(),{targets:w,coconuts:b,redraw:L,updateTarget:le,score:()=>k,setScore(ie){k=ie,oe()}}}function fl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var vs=(n,e,t)=>n+(e-n)*t,Lo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Ph(n,e){let t=Math.floor(n),i=Math.floor(e),s=Lo(0,1,n-t),r=Lo(0,1,e-i);return vs(vs(fl(t,i),fl(t+1,i),s),vs(fl(t,i+1),fl(t+1,i+1),s),r)}function mx(n,e){return Ph(n,e)*.54+Ph(n*2.07+3.4,e*2.07-6.1)*.26+Ph(n*4.2+9,e*4.2)*.13+Ph(n*8.6,e*8.6-13)*.07}function gx(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),h=Math.max(0,c),f=h**.54,d=r.map((p,y)=>vs(p,o[y],f));for(let p=0;p<1024;p++){let y=4*(p+l*1024),m=0,g=0,b=0;if(c>.025)if(n){let _=fl(p+792,l+677);_>.9988&&(b=(_-.9988)*49e3*Lo(.09,.3,c))}else{let[_,C]=s[p],A=2.8*u/(c+.16),L=_*A+3.6,U=C*A-8.1,S=mx(L,U),v=mx(L-.12,U-.09);m=Lo(.49,.66,S)*Lo(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(S-v)*5+(S-.54)*.8))}let w=n?1:vs(.94,1,Lo(.05,.34,c));i[y]=vs(d[0],(139+115*g)*w,m)+b,i[y+1]=vs(d[1],(154+100*g)*w,m)+b*.94,i[y+2]=vs(d[2],(178+77*g)*w,m)+b*.86,i[y+3]=255}}let a=new gi(i,1024,512,Pn);return a.colorSpace=vt,a.wrapS=mi,a.magFilter=an,a.minFilter=Rn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function yx(){return{day:gx(!1),night:gx(!0)}}function Ih(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Zn(i);return s.colorSpace=vt,s}function xx(n,e){let{day:t,night:i}=yx(),s=new Be(new oi(180,40,20),new yt({map:t,side:un,fog:!1,toneMapped:!1}));n.add(s);let r=Ih(128,128,(x,I)=>{let G=x.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);G.addColorStop(0,"#fff8df"),G.addColorStop(.12,"#fff3bd"),G.addColorStop(.18,"rgba(255,225,144,.40)"),G.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=G,x.fillRect(0,0,I,I)}),o=new ya(new Xr({map:r,blending:jn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=no,a.needsUpdate=!0;let l=new co(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Oa("#daeaff","#88724c",2.25),u=new ka("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let h=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],d=0;function p(x){d=f[x]?x:0;let I=f[d];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,u.color.set(I.sun),u.intensity=I.power,h.set(...I.xyz),u.position.copy(u.target.position).add(h),o.position.copy(h).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,s.material.map=d===2?i:t,s.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=m*[1,.56,.09][d]}function y(x){if(!u.castShadow)return;let I=u.target.position,G=Math.round(x.x/4)*4,se=Math.round(x.y/4)*4,j=Math.round(x.z/4)*4;I.x===G&&I.y===se&&I.z===j||(I.set(G,se,j),u.position.copy(I).add(h))}let m=0;n.background=new De(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(x,I,G){let[,se,j]=g[I],xe=512;x.save(),x.scale(G/512,G/512),x.fillStyle=se,x.fillRect(0,0,xe,xe);let fe=I+19;function be(){return fe=Math.imul(fe,1664525)+1013904223>>>0,fe/4294967296}if(x.fillStyle=j,I===16){for(let _e=0;_e<16;_e++)for(let he=0;he<16;he++)(he+_e)%2===0&&x.fillRect(he*32,_e*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let _e=I===15?32:64;x.globalAlpha=.48;for(let he=0;he<xe;he+=_e){x.fillRect(0,he,xe,I===8?3:2);for(let we=-_e;we<xe;we+=_e)x.fillRect(we+he/_e%2*(I===2?_e/2:0),he,2,_e)}}else if([4,5,6,7,10,11,12].includes(I)){let _e=I===5?38:I===7?64:18;for(let he=0;he<_e;he++){x.strokeStyle=j,x.globalAlpha=.08+be()*.22,x.lineWidth=I===5?1+be()*8:1+be()*4;let we=be()*xe,Oe=I===5?.018:.009;x.beginPath();for(let Te=0;Te<=xe;Te+=8){let Re=we+Math.sin(Te*Oe+he)*(I===6||I===7?4:12+he%5*3)+(I===4?Te*.28:0);Te===0?x.moveTo(Te,Re):x.lineTo(Te,Re)}x.stroke()}}else{x.globalAlpha=.27;for(let _e=0;_e<120;_e++){let he=be()*xe,we=be()*xe,Oe=2+be()*6;x.beginPath(),x.arc(he,we,Oe,0,Math.PI*2),x.fill()}}if(I!==16)for(let _e=0;_e<4400;_e++)x.globalAlpha=.05+be()*.1,x.fillStyle=be()>.5?j:"#222324",x.fillRect(be()*xe,be()*xe,1+be()*4,1+be()*3);x.restore()}let w=new Set([0,2,4,5,8,15,16]),_=g.map(([x,I,G,se,j,xe],fe)=>{let be=w.has(fe)?512:256,_e=Ih(be,be,we=>b(we,fe,be));_e.wrapS=_e.wrapT=mi;let he=new Mt({map:_e,roughness:se,metalness:j,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return he.name=x,he}),C=_.map(x=>x.map.image),A=512,L=_.map(x=>new Qt({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),U={value:0},S={value:.24},v={value:null},T={value:0};function F(){v.value?.dispose(),v.value=Ih(512,512,(x,I)=>{x.fillStyle="#ffffff",x.fillRect(0,0,I,I);let G=I/52,se=I/64;for(let j of N){if(!j.position||!j.half||j.position.y+j.half.y<.22)continue;let xe=(j.position.x+26)*G,fe=(j.position.z+54)*se,be=Math.min(55,j.half.x*G+5),_e=Math.min(72,j.half.z*se+6);x.save(),x.translate(xe+j.half.y*G*.2,fe+j.half.y*se*.24),x.scale(be,_e);let he=x.createRadialGradient(0,0,.15,0,0,1);he.addColorStop(0,"rgba(22,37,65,.54)"),he.addColorStop(.58,"rgba(36,54,76,.29)"),he.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=he,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[..._,...L])x.onBeforeCompile=I=>{I.uniforms.uFocusAmount=U,I.uniforms.uFocusRadius=S,I.uniforms.uLabLightmap=v,I.uniforms.uLabBakedStrength=T,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],k=[];function H(x,I,G,se,j,xe,fe,be=0,_e=0,he=1,we=1,Oe=!1){let Te=new Be(Oe?new et(j,xe,fe):Eh(j,xe,fe),_[be]);Te.position.set(I,G,se),Te.rotation.x=_e,Te.receiveShadow=!0,Te.castShadow=!0,n.add(Te);let Re=new M(j/2,xe/2,fe/2),We={mesh:Te,position:Te.position,quaternion:Te.quaternion,half:Re,min:Re.clone().negate(),friction:he,gravity:we,name:x,type:be,shape:Mi(Re)};return N.push(We),We}let V=Oy.map(({name:x,bounds:I,type:G=0,friction:se=.78,gravity:j=1})=>{let{xMin:xe,xMax:fe,zMin:be,zMax:_e}=I;return H(x,(xe+fe)/2,-.33,(be+_e)/2,fe-xe,.66,_e-be,G,0,se,j)});for(let x of Object.values(ky))for(let I of x)H(...I);let{xMin:J,xMax:B,zMin:oe,zMax:le}=Ny;H("But\xE9e arri\xE8re",0,1.35,oe+.4,B-J,2.7,.6,2),H("But\xE9e ouest",J+.3,1.05,(oe+le)/2,.6,2.1,le-oe,2),H("But\xE9e est",B-.3,1.05,(oe+le)/2,.6,2.1,le-oe,2);let{xMin:ie,xMax:re,zMin:Se,zMax:me}=Eo.hills.bounds,de=re-ie,ee=me-Se,ne=16,ge=64,Pe=new Jt(de,ee,ne,ge).rotateX(-Math.PI/2).translate(ie+de/2,0,Se+ee/2),Y=Pe.attributes.uv;for(let x=0;x<Y.count;x++)Y.setXY(x,Y.getX(x)*de/2.6,Y.getY(x)*ee/2.6);let ye=Pe.attributes.position,Me;function E(x){if(Me===x)return;Me=x;let I=Me*.017;for(let G=0;G<ye.count;G++){let se=ye.getX(G),j=ye.getZ(G),xe=Math.sin(Math.PI*He.clamp((se-ie)/de,0,1)),fe=Math.min(1,(j-Se)*.48,(me-j)*.48),be=.93+.56*Math.sin(j*.36+I)+.32*Math.cos(se*.67+j*.26+I*1.4)+.19*Math.sin(j*.81+I*.67);ye.setY(G,Math.max(0,xe*fe*be))}ye.needsUpdate=!0,Pe.computeVertexNormals(),Pe.computeBoundingSphere()}E(By);let X=new Be(Pe,_[3]);X.receiveShadow=X.castShadow=!0,n.add(X);let Z=(x,I)=>{let G=He.clamp((x-ie)/de*ne,0,ne-1e-6),se=He.clamp((I-Se)/ee*ge,0,ge-1e-6),j=Math.floor(G),xe=Math.floor(se),fe=G-j,be=se-xe,_e=ne+1,he=xe*_e+j,we=ye.getY(he),Oe=ye.getY(he+1),Te=ye.getY(he+_e),Re=ye.getY(he+_e+1);return fe+be<=1?we+(Oe-we)*fe+(Te-we)*be:Re+(Te-Re)*(1-fe)+(Oe-Re)*(1-be)};N.push({heightfield:!0,mesh:X,height:Z,...Eo.hills.bounds,friction:.81,gravity:1});function $(x,I,G,se,j=1.45){let xe=Ih(384,72,(be,_e,he)=>{be.fillStyle="#202a32",be.fillRect(0,0,_e,he),be.fillStyle=se,be.font="bold 31px system-ui",be.textAlign="center",be.fillText(x,_e/2,48,_e-20)}),fe=new Be(new Jt(3.2,.6),new yt({map:xe,side:qt}));fe.position.set(I,j,G),n.add(fe),k.push(fe)}for(let x of Object.values(Eo)){$(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:I,xMax:G,zMin:se,zMax:j}=x.bounds,xe=new _a(new $e().setFromPoints([new M(I,.025,se),new M(G,.025,se),new M(G,.025,j),new M(I,.025,j)]),new yi({color:x.color,transparent:!0,opacity:.72}));n.add(xe),k.push(xe)}$("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),$("MURS HAUTS",3,-31,"#e8d2ff"),$("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let D=new Mt({color:"#c8e6ed",metalness:1,roughness:.16}),q=new Be(new Dt(.54,2),D);q.position.set(Th.x,Th.y,Th.z),q.castShadow=!0,n.add(q);let z=g.map((x,I)=>{let{x:G,z:se}=Vy(I);return H("\xC9chantillon "+g[I][0],G,.325,se,.65,.65,.65,I,0,1,1,!0).mesh}),te=new Kt(1,12).rotateX(-Math.PI/2),ue=new yt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function pe(x){let I=new Be(te,ue);return I.scale.setScalar(x),n.add(I),I}function R(x,I,G,se,j,xe,fe,be){let _e=I>=3;e.shadowMap.enabled=_e,u.castShadow=_e,ue.opacity=I===2?.17:.11,T.value=be?.38+G*.04:0;let he=I>=9?2048:I>=6?1024:I>=4?512:256;u.shadow.intensity=.45+I*.055,u.shadow.radius=.65+I*.12;let we=13+I*1.2;Object.assign(u.shadow.camera,{left:-we,right:we,top:we,bottom:-we}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==he&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(he,he)),o.visible=j,fe!==A&&(A=fe,_.forEach((Te,Re)=>{let We=Te.userData.texture??Te.map,W=w.has(Re)?fe:Math.min(256,fe);if(We.image.width===W)return;let Ce=document.createElement("canvas");Ce.width=Ce.height=W;let Le=Ce.getContext("2d");W>512?b(Le,Re,W):Le.drawImage(C[Re],0,0,W,W);let Ne=new Zn(Ce);Ne.colorSpace=We.colorSpace,Ne.wrapS=We.wrapS,Ne.wrapT=We.wrapT,Ne.repeat.copy(We.repeat);for(let Ee of[Te,L[Re]])Ee.userData.texture=Ne,Ee.map=Ne,Ee.needsUpdate=!0;We.dispose()}));let Oe=x>=4;for(let Te of N)Te.mesh?.isMesh&&!Te.zone&&(Te.mesh.material=Oe?_[Te.type]:L[Te.type]);X.material=Oe?_[3]:L[3];for(let Te=0;Te<z.length;Te++)z[Te].material=Oe?_[Te]:L[Te];_.forEach((Te,Re)=>{for(let We of[Te,L[Re]])We.userData.texture||(We.userData.texture=We.map),We.map=xe?We.userData.texture:null,We.color.set(xe?"#ffffff":g[Re][1]),We.needsUpdate=!0}),m=se?.21+G*.067:0,D.metalness=se?.95:.1,D.roughness=se?.13:.46,s.visible=x>=2,p(d)}return{boxes:N,floors:V,probe:q,display:z,visual:R,shadow:pe,setTimeOfDay:p,centerShadows:y,get hillSeed(){return Me},setHillSeed:E,bakeLightmap:F,mapMaterial:(x,I)=>I>=4?_[x]:L[x],builtObjects:[...N.map(x=>x.mesh).filter(x=>x?.isObject3D),q,...k],materials:[..._,...L],focus(x,I,G){U.value=x?I*.75:0,S.value=.07+G*.058}}}var Yx="R35.1",bs=document.getElementById("game");bs instanceof HTMLCanvasElement||(bs=document.createElement("canvas"),bs.id="game",bs.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(bs));var dr=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ke;try{Ke=new zu({canvas:bs,antialias:!dr,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ke.xr.enabled=!0;Ke.xr.setReferenceSpaceType("local-floor");Ke.shadowMap.type=Ha;Ke.shadowMap.autoUpdate=!1;var vx=-1/0;Ke.toneMapping=Jc;Ke.toneMappingExposure=1.15;var At=new Vs;At.fog=new ma("#a6d4ea",55,135);var dt=new gt,Jh=new gt,jt=new Ht(70,1,.035,210);dt.add(Jh);Jh.add(jt);At.add(dt);var St=xx(At,Ke),fA=dx(Ke),zh=hx();At.add(zh);var pA=fx(St.probe),O=hy(dr),mA={...O};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(O.stepVolume=n)}catch{}var As=ix();for(let n of["pointerdown","keydown"])addEventListener(n,As.unlock,{passive:!0});var gA=sx(At),Vh=[.18,.17,.105].map(n=>({radius:n,position:new M})),Bp=new M(Co.x,Co.y,Co.z);dt.position.copy(Bp);var xn=new M,pl=new M,Rt=new M,_x=new M,Jn=new M,vn=new M,Mx=new M,Oo=new M,_s=new M,bx=new M,Ms=new M,Sx=new M,Lh=new M,yA=.105,Dh=new M,kh=!1,qi=!1,Op=0,zp=null,xl=[],Vp=100,Xt=new M(0,1,0),Ki=new qe,bt=0,Ji=0,fr=0,ui=0,zo=NaN,Gh=!1,vp=0,ur=0,_p=0,Uh=0,Fo=0,No=0,Bo=0,en=O.quality,vl=72,Yt=!1,Zx="left",ct=new URLSearchParams(location.search).has("room")?5:0,kp=0,Gp=0,Hp=0,Zt=!0,wx=0,xA=[],Fh=[],Qi=St.boxes,vA=new Dt(1,0),jx=1+Math.floor(Math.random()*(ku.length-1)),Jx=Gu(jx),{hand:_A,fur:MA}=Jx;function bA(n,e,t,i,s,r,o,a){let l=new Be(vA,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var $h=mp(localStorage),SA=$h.models.length?"|atelier-"+tr(JSON.stringify($h)):"",Zi=Qy($h)??Jx.createHead();Zi.visible=!1;At.add(Zi);var Uo=new M,Hh=new qe,Tx=new M,wA=new M,Ax=new ln(0,0,0,"YXZ"),Cp=new M,Mp=new M,Yi=new Ae,Ex=new qe,Rp=9.81,$x=null,bp=new qe,Cx=[null,null];function Kh(){return .24+O.arms*.036}function TA(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=He.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=He.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=He.lerp(r[2],i,s),n.skin.pose(r,!O.body)}var Ut=["left","right"].map(n=>{let e=qu(n,_A,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new qe},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Ts=new th(M,Ut,Ay),Kx=Xu(MA,Ut.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ut){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var Si=Kx.mesh;At.add(Si);function AA(n,e){if(O.body){bp.copy(Si.quaternion).invert();for(let t=0;t<Ut.length;t++){let i=Ut[t];Cx[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Si.position).applyQuaternion(bp),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(bp))}Kx.pose(Cx,Kh(),n,e,O.hands)}}var Gn=Hy(),Qx=[0,1,2,3,4,5],ev=[7,8,9,10,11,12,13,14],Al=15,Rx=Mi(new M(.13,.088,.115)),EA=new et(.26,.176,.23),CA=new Mt({color:"#536771",roughness:.36,metalness:.28});Gn[Al]={name:"Cam\xE9ra du spectateur",geo:EA,material:CA,shape:Rx,lowShape:Rx,mass:1.2};var{props:RA,animate:PA}=qy(),IA=Ky($h).slice(0,36),Wp=[],Ml=[];function tv(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=lr(t??s.geo,i);e.push(Gn.length),Gn.push({...s,shape:r,lowShape:r})}}tv(RA,Wp);tv(IA,Ml);var nv=[...Qx,...ev,...Wp,...Ml];Gn[8].properties={supportWhileHeld:!0};Gn[11].properties={supportWhileHeld:!0};function LA(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Gn)n.supportAxis=LA(n);function DA(n){let e=new Be(new Wt(.058,.074,.1,12).rotateX(Math.PI/2),new Mt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new Kt(.048,12),new yt({color:"#7bd7ed",side:qt}));t.position.z=-.203,n.add(t);let i=new Be(new et(.045,.013,.012),new yt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function iv(n,e=!1){let t=Gn[n];if(!t)return null;let i=new Be(t.geo,e?Ah(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Al&&DA(i),i}var Tt=[],Px=[],Es={held:null},ko=new Map,ji=0,UA=1,ml=new qe,bl=new qe,gl=new M,Qh=new M,Ss=new M,Pp=new M,Ip=new M;function FA(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Qh.set(0,0,-1).applyAxisAngle(Xt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(gl.copy(n).addScaledVector(Qh,r),gl.y+=.15,!Ao(n,gl,Math.min(.2,t*.5),Qi,Pp,Ip)&&!Tt.some(o=>o.mesh.position.distanceToSquared(gl)<(t+o.radius+.07)**2))return gl}}return null}function Ho(n,e,t,i=!1){let s=Gn[n];if(!s)return null;if(!e&&(t?Ss.set(t.x,t.y,t.z):Ke.xr.isPresenting?Ss.copy(Rt):jt.getWorldPosition(Ss),e=FA(Ss,t?.yaw??Ji,s.shape.radius),!e))return i||ci("Aucun espace libre pour cet objet."),null;let r=iv(n);r.position.copy(e),At.add(r);let o=O.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:UA++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:O.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new qe,shadow:St.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Al,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),Tt.push(a),ll(a,St.boxes),a}function sv(){for(let n of Ut)hi(n,!1);hi(Es,!1);for(let n of ko.values())hi(n,!1)}function ld(){sv();for(let n of Tt)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();Tt.length=0,ko.clear()}function rv(){Gy((n,e)=>Ho(n,e))}rv();function hi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+O.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function El(){sv();for(let n of Tt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function es(){cd.reset(),dt.position.copy(Bp),bt=He.degToRad(pt.yaw),fr=0,dt.rotation.y=bt,xn.set(0,0,0),Gh=!1,qi=!1,kh=!1,Ts.reset(),As.reset(),Yi.set(0,0);for(let n of Ut)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,hi(n,!1)}El();function ov(){return O.auto||dr&&!Ke.xr.isPresenting}function ed(){return ov()?Math.min(O.shadowQuality,en):O.shadowQuality}function Sl(){return ov()?Math.min(O.lightQuality,en):O.lightQuality}function Ti(){let n=O.texturePower;St.visual(en,O.shadows?ed():0,Sl(),O.reflections,O.bloom,O.textures,2**(n-1),O.lightmap),pt.refreshMaterials?.(),Ke.shadowMap.needsUpdate=!0,St.setTimeOfDay(Ye.remoteLight??O.timeOfDay-1),Lp=id.slice(0,Sl()>=8?3:Sl()>=4?2:1),cm.value=O.shaderMode-1;let e=Ke.xr.isPresenting&&Ke.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(O.focus&&!e,O.focusStrength,O.focusSize),Ke.toneMappingExposure=.58+O.exposure*.114,Pv.value=.55+O.contrast*.09,Iv.value=O.saturation*.2,Lv.value=(O.warmth-5)*.022,Ke.xr.setFoveation(O.focus?He.clamp((O.focusStrength+1)*.105+(5-O.focusSize)*.028+(O.auto?(7-en)*.045:0),0,1):0),Ke.xr.isPresenting||Cl(),Zt=!0,wn.redraw()}var Ix=0,Lx=0,Dx=0;function Cl(){if(Ke.xr.isPresenting)return;let n=Math.max(1,bs.clientWidth||innerWidth),e=Math.max(1,bs.clientHeight||innerHeight),t=oy(en,devicePixelRatio,dr);t!==Dx&&(Ke.setPixelRatio(t),Dx=t),(n!==Ix||e!==Lx)&&(Ke.setSize(n,e,!1),Ix=n,Lx=e),jt.aspect=n/e,jt.fov=O.viewFov,jt.updateProjectionMatrix()}addEventListener("resize",Cl);globalThis.visualViewport?.addEventListener("resize",Cl);function NA(n){Object.assign(O,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},ih[n]),en=O.quality,No=Bo=Fo=0,Ti()}var pr=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",es]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",rm]]],["Rendu",[]]],qp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Xp(){return ct===2?qp[kp][1]:ct===3?cv[Gp][1]:ct===4?$p[Hp][1]:pr[ct][1]}function av(n){ct=n,Zt=!0}var td=null,Yp=[],Wh=0,qh=0,Zp=null,nd=!1,jp=0,Jp=0,lv={},id=Array.from({length:3},()=>{let n=new za("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),Lp=id,sd=new M;function Ux(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(sd);if(e>34**2)return;let t=Lp[0];for(let i of Lp)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function BA(n){n?jt.getWorldPosition(sd):sd.copy(Rt);for(let t of id)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(Ux);else if(O.objects)for(let t of Tt)t.materialStyle===3&&Ux(t.mesh);let e=20+Sl()*.75;for(let{light:t,mesh:i}of id)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Rl(){let n=Yp.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;td={game:"Gorilla Lab",version:Yx.toLowerCase(),time:new Date().toISOString(),mode:nd?"VR":"PC",settings:{...O},qualityActive:en,debug:$x,audio:{volume:O.stepVolume,enabled:O.stepAudio,clipsPlayed:As.count,state:As.state},performance:{fps:ur,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Zp,renderer:lv,terrainSeed:St.hillSeed,map:pt.active?{name:pt.name,pieces:pt.nodes}:null,objects:{total:Tt.length,held:Tt.filter(t=>t.owner).length,frozen:Tt.filter(t=>t.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:wn.score(),locomotion:{trackedFrames:Jp,contactFrames:jp,launchCount:Op,lastLaunch:zp,standingHeight:Number.isFinite(zo)?zo:null,viewOffset:ui}},document.querySelector("#download-report").disabled=!1,Zt=!0}function OA(){td||Rl();let n=URL.createObjectURL(new Blob([JSON.stringify(td,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=OA;document.querySelector("#capture-report").onclick=Rl;pr[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Rl]);var zA=Array.from({length:Math.ceil(Ml.length/8)},(n,e)=>["Atelier"+(Ml.length>8?" "+(e+1):""),Ml.slice(e*8,e*8+8)]),cv=[["Basiques",Qx],["D\xE9taill\xE9s",ev],["Anim\xE9s",Wp],...zA].map(([n,e])=>[n,[...e.map(t=>[Gn[t].name,()=>om(t)]),["Tout retirer",ud]]]);pr.push(["Spawn",[]]);var $p=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{pt.blank(),O.mapEdit=!0}],["Annuler placement",()=>pt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>pt.recenter(Rt.x,dt.position.y,Rt.z,Ji)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{pt.reset(),O.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Bx(!1)],["Utiliser comme t\xEAte",()=>Bx(!0)]]]];pr.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["\xC9couter un pas",uv],["Capturer un rapport",Rl]]]);function uv(){As.unlock().then(()=>As.play(O.stepVolume))}function hv(){try{localStorage.setItem("gorilla-lab-step-volume",String(O.stepVolume))}catch{}}var VA=document.querySelector("#section"),Nh=document.querySelector("#settings"),kA=document.querySelector("#readings"),Kp=[1,.75,.5,.25];function _n(n,e){if(n==="debugSpeed"){O.debugSpeed=He.clamp(O.debugSpeed+e,1,Kp.length),Ts.reset(),Zt=!0;return}if(n==="stepVolume"){O.stepVolume=He.clamp(O.stepVolume+e,1,10),hv(),Zt=!0;return}if(n==="viewFov"){O.viewFov=He.clamp(O.viewFov+5*e,50,105),Cl(),Zt=!0;return}if(n==="vrFov"){O.vrFov=He.clamp(O.vrFov+5*e,55,100),Zt=!0;return}if(n==="shaderMode"){O.shaderMode=(O.shaderMode-1+e+nh.length)%nh.length+1,cm.value=O.shaderMode-1,Zt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??O.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else O.timeOfDay=(O.timeOfDay-1+e+3)%3+1;Ti();return}let t={mapMode:9,mapShape:5,mapMaterial:gp.length,mapSurface:4,mapTurn:8,mapTexture:Qu.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];O[n]=(O[n]-1+e+i)%i+1,Zt=!0;return}if(n==="mapEdit"&&!O.mapEdit&&!pt.active&&pt.load(ax(St.boxes)),n==="toolMode"){O.toolMode=(O.toolMode-1+e+nr.length)%nr.length+1,Ke.xr.isPresenting||ci("Outil \xB7 "+nr[O.toolMode-1]),Zt=!0;return}if(n==="preset"){let i=Object.keys(ih);O.preset=(O.preset-1+e+i.length)%i.length+1,NA(i[O.preset-1]);return}if(typeof O[n]=="boolean"?O[n]=!O[n]:O[n]=He.clamp(O[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ut)i.valid=!1,i.surface=null;if(n==="quality"&&(O.auto=!1,en=O.quality),n==="auto"&&!O.auto&&(en=O.quality),n==="movement"||n==="collisions")for(let i of Ut)i.surface=null;if(n==="objects"&&!O.objects&&El(),n==="blasterActive"&&O.blasterActive&&(O.toolActive=!1),n==="toolActive"&&O.toolActive&&(O.blasterActive=!1),!O.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ut)i.held?.toolHold&&hi(i,!1);im(!1)}n==="preciseHitboxes"&&dv(),Ti()}function dv(){for(let n of Tt)n.precise=O.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||ll(n,St.boxes)}function fv(){let n=(ct===2?qp:ct===4?$p:null)?.flatMap(e=>e[1])??Xp();for(let[,e]of n)typeof e=="string"&&(O[e]=mA[e]);ct===6&&(hv(),Ts.reset()),ct===0&&es(),ct===1&&(dv(),El()),ct===3&&ud(),ct===2&&(en=O.quality),Ti()}function yl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),Wo(),Zt=!0},t}function pv(n){return n==="preciseHitboxes"?O[n]?"High":"Low":O[n]?"Actif":"Coup\xE9"}function Qp(n){if(n==="debugSpeed")return Ye.role?"\xD71 en ligne":"\xD7"+Kp[O.debugSpeed-1];if(n==="stepVolume")return O.stepVolume+"/10";if(n==="viewFov")return O.viewFov+"\xB0";if(n==="vrFov")return O.vrFov===100?"Natif":O.vrFov+" %";if(n==="mapTexture")return O[n]===1?"Aucune":Qu[O[n]-2];if(n==="terrainResolution")return[8,16,32,48][O[n]-1]+"\xB2";if(n==="shaderMode")return nh[O.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=O[n],t=n==="shadowQuality"?ed():Sl();return t===e?e+"/10":e+"/10 \xB7 "+t+(O.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??O.timeOfDay-1]:n==="mapMode"?_v[O.mapMode-1]:n==="mapShape"?YA[O.mapShape-1]:n==="mapSurface"?ZA[O.mapSurface-1]:n==="mapMaterial"?gp[O.mapMaterial-1]:n==="mapTurn"?(O.mapTurn-1)*45+"\xB0":n==="toolMode"?nr[O.toolMode-1]:n==="preset"?Object.keys(ih)[O.preset-1]:n==="texturePower"?[2**(O[n]-1),2**(O[n]-1)].join("\xD7"):O[n]}function Dp(){return ct===2?qp:ct===3?cv:$p}function mv(){return ct===2?kp:ct===3?Gp:Hp}function gv(n){ct===2?kp=n:ct===3?Gp=n:Hp=n}function yv(n){return n===Rl?"Capturer":n===uv?"\xC9couter":n===ld||n===ud?"Vider":n===es||n===rm?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function Wo(){if(VA.textContent=pr[ct][0],xv.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),Nh.replaceChildren(),GA.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),Dp().forEach(([e],t)=>{let i=yl(e,()=>gv(t));i.setAttribute("aria-pressed",String(mv()===t)),n.append(i)}),Nh.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",Nh.append(n)}for(let[n,e]of Xp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(yl(yv(e),e)):typeof O[e]=="boolean"?i.append(yl(pv(e),()=>_n(e,1))):i.append(yl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+Qp(e)+" "),yl("+",()=>_n(e,1))),t.append(i),Nh.append(t)}}}var xv=document.querySelectorAll("[data-page]"),GA=document.querySelector("#cloud-access");xv.forEach((n,e)=>n.onclick=()=>{av(e),Wo()});document.querySelector("#restore").onclick=()=>{fv(),Wo()};Wo();function vv(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Zn(r);a.colorSpace=vt;let l=new Be(new Jt(t,i),new yt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var hn=vv(640,652,.84,.86,At);hn.mesh.visible=!1;var $n=vv(416,84,.32,.065,At);$n.mesh.visible=!1;var Do=new Ht(75,1,.07,140),Kn=new $a(new Jt(1.7,1.95),{color:16054015,textureWidth:dr?128:256,textureHeight:dr?128:256,clipBias:.004,multisample:0}),HA=new M(0,0,-1),Bh=new M,Fx=new M;Kn.position.set(wh.x,wh.y,wh.z);Kn.rotation.y=Math.PI;At.add(Kn);var em=new Be(new et(1.8,2.03,.1),new Qt({color:"#344650"}));em.position.copy(Kn.position).z+=.064;At.add(em);var WA=Kn.onBeforeRender.bind(Kn);Kn.onBeforeRender=()=>{};Kn.visible=!1;var Sp=-1/0;function qA(n,e){if(Do.position.copy(Rt),e){let i=e.transform.orientation;Do.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Hh.setFromAxisAngle(Xt,bt))}else jt.getWorldQuaternion(Do.quaternion);Fx.set(0,0,-1).applyQuaternion(Do.quaternion),Bh.subVectors(Kn.position,Rt);let t=Bh.length();if(Kn.visible=pt.builtIn&&O.reflections&&t<4&&Bh.dot(HA)<-.15&&Bh.multiplyScalar(1/Math.max(.001,t)).dot(Fx)>.66,!Kn.visible){Sp=-1/0;return}if(!(n-Sp<(dr&&!Ke.xr.isPresenting?110:45))){Sp=n,Do.updateMatrixWorld(!0),Kn.updateMatrixWorld(!0),Zi.visible=O.body;try{WA(Ke,At,Do)}finally{Zi.visible=!1}}}var wi=new Ni,kn=new M,Dn=new M,Go=new M,Oh=new M,Nx=new M,_l=null,Xh=null,Yh=null,XA=new Set(At.children),wn=px(At,St.boxes,{spawn:om,clear:ud,resetPlayer:es,resetObjects:rm,resetTree:()=>sm(2,bv),quality:()=>en+"/10",resolution:()=>O.resolution+"/10 \xB7 relancer VR",textureSize:()=>Qp("texturePower"),qualityNext:()=>{O.quality>=10&&(O.quality=0),_n("quality",1)},resolutionNext:()=>{O.resolution>=10&&(O.resolution=0),_n("resolution",1)},textureNext:()=>{O.texturePower>=12&&(O.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),_v=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],YA=["Bloc","Rampe","Mur","Dalle","Terrain"],ZA=["Normale","Glace","Caoutchouc","Lune"],pt=ux({scene:At,arena:St,boot:Bp,onReset:n=>{ld(),es(),bt=He.degToRad(n),pt.builtIn&&rv()},onVisual:Ti,getLevel:()=>en,defaultObjects:[...St.builtObjects,...At.children.filter(n=>!XA.has(n)),em]}),Ye=q0({scene:At,currentMap:()=>(pt.signature||"arena-r25-"+St.hillSeed)+SA,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=iv(n,!0);return e&&Pl(e.material),e},onAction:eE,onStatus:()=>{ct===5&&(Zt=!0)},onShot:n=>cd.receiveShot(n,Ye.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??O.timeOfDay-1),Zt=!0,Ke.xr.isPresenting||Wo()},applyScore:n=>wn.setScore(n),applyCoconuts:n=>wn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function Bx(n){let e=pt.modelPieces();if(!e.length||e.length>cr.parts){ci("Compose un mod\xE8le de 1 \xE0 "+cr.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=mp(localStorage);if(t.models.length>=cr.models){ci("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:O.modelGrab,frozen:O.modelFrozen,collidable:O.modelCollidable,supportWhileHeld:O.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?ox[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(fp,JSON.stringify(pp(t))),ci("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ci("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var wp=new Map;function jA(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][O.mapShape-1],e=_o({detail:[8,16,32,48][O.terrainResolution-1],amplitude:(O.terrainAmplitude-1)*.34,frequency:.05+O.terrainFrequency*.025,seed:O.terrainSeed,grass:(O.terrainGrass-1)/9,shrub:(O.terrainShrub-1)/9}),t=O.mapTexture-2;return t>=0&&!wp.has(t)&&wp.set(t,iy(t).toDataURL("image/webp",.83)),Rh({...n,material:O.mapMaterial-1,yaw:O.mapShape===5?0:(O.mapTurn-1)*45,...yp[Object.keys(yp)[O.mapSurface-1]],texture:wp.get(t)??null,terrain:O.mapShape===5||O.mapMode===9?e:null,brushRadius:.5+O.brushRadius*.5,brushStrength:O.brushStrength*.15})}function JA(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;kn.set(r.x,r.y-ui,r.z).applyAxisAngle(Xt,bt).add(dt.position),Ki.set(o.x,o.y,o.z,o.w),Dn.set(0,0,-1).applyQuaternion(Ki).applyAxisAngle(Xt,bt),pt.edit(kn,Dn,i,{mode:O.mapMode,piece:jA(),head:Rt,feet:dt.position.y}),i&&(Zt=!0)}function $A(n){if(!pt.builtIn||!n.valid||n.held||n.remoteHeld||Yt)return;let e=null;for(let t of wn.targets)if(t.getWorldPosition(Nx),!(n.mesh.position.distanceToSquared(Nx)>.11**2)&&(t.worldToLocal(Oh.copy(n.mesh.position)),Math.abs(Oh.x)<t.userData.touchWidth*.5+.025&&Math.abs(Oh.y)<.095&&Math.abs(Oh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function tm(n,e=null){n.getWorldPosition(Go),n.visible=!1,O.objects||(O.objects=!0);let t=Ho(6,Go);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function Up(n,e,t){if(!pt.builtIn)return;wi.set(n,e),wi.far=5.5;let i=wi.intersectObjects([...wn.targets,...wn.coconuts.filter(r=>r.visible)],!1);wi.far=1/0;let s=i[0];s&&(mr.visible=!0,mr.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:wn.coconuts.indexOf(s.object)}):tm(s.object,e),Wo()))}var Ox=new M,Mv=new qe,nm=Yu(At),cd=cy({scene:At,rig:dt,camera:jt,arena:St,objects:Tt,spectator:Ye}),k3=nm.mesh,Zh=new M,$i=new qe,rd=new M,Vo={mode:0,position:rd,quaternion:$i,end:Zh},zx=new M,KA=new M,Vx=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var od=new M,QA={position:rd,quaternion:$i,pressure:[.1,.66,.08]},Tp=new M,ad=new qe;function im(n){Es.held&&hi(Es,n)}function sm(n,e){if(Ye.role==="pc"){ci("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||ci("Attends la connexion \xE0 l\u2019h\xF4te.")}function ud(){sm(0,ld)}function rm(){sm(1,El)}function bv(){for(let n of wn.coconuts)n.visible=!0}function om(n,e=null){if(O.objects=!0,Ye.role==="pc"){ci("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||ci("Attends la connexion \xE0 l\u2019h\xF4te."):Ho(n,e)}function eE(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)O.timeOfDay=n.typeId+1,Ti();else if(n.mode===3)[ld,El,bv][n.typeId]();else if(pt.builtIn){let u=wn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(Go).distanceToSquared(e)<=5.8**2&&!Ao(Ss.copy(e),Go,.01,Qi,Pp,Ip)&&tm(u)}return}if(n.type==="spawn"){nv.includes(n.typeId)&&(O.objects=!0,Ho(n.typeId,null,e));return}let t=Tt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,s=e.id*3+i,r=n.type==="hold"?1:n.mode,o=ko.get(s);if(!o&&r===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},ko.set(s,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),hi(o,!0)}return}if(!O.objects||r===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ss.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?bh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Ao(l,t.mesh.position,.01,Qi,Pp,Ip))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}am(t,r,o,He.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,bl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(bl))}}function tE(n){if(Ke.xr.isPresenting)for(let t of Ut)t.valid&&t.held&&Ap(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of ko){let s=Ye.getPeer(i.peerId),r=i.hand?s?.avatar?.hands[i.hand-1]:null;if(!s||i.hand&&!r){hi(i,!1),ko.delete(t);continue}let o=i.held;if(!o)continue;let a=r?.quaternion??s.avatar?.tool?.quaternion??s.avatar?.head;a&&i.controllerRotation.copy(a),Ss.copy(r?.position??s.avatar?.tool?.position??s),Qh.set(0,0,-1).applyQuaternion(i.controllerRotation),Ap(o,Ss,Qh,i.controllerRotation,n)}let e=Es.held;e&&(jt.getWorldPosition(od),jt.getWorldDirection(Ox),jt.getWorldQuaternion($i),Ap(e,od,Ox,$i,n))}function Ap(n,e,t,i,s){n.toolHold?Tp.copy(e).addScaledVector(t,n.toolDistance):Tp.copy(n.offset).applyQuaternion(i).add(e),ad.multiplyQuaternions(i,n.relativeRotation),Ey(n,Tp,ad,Qi,s)}function Sv(n){return n.customMaterial||(n.mesh.material=Ah(n.mesh.material),n.customMaterial=!0,Pl(n.mesh.material)),n.mesh.material}function nE(n){let e=Sv(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function wv(n,e,t){wi.set(n,e),wi.far=9;let i=wi.intersectObjects(t,!1)[0];return wi.far=1/0,Zh.copy(n).addScaledVector(e,i?.distance??9),Ao(n,Zh,.006,Qi,zx,KA)?(Zh.copy(zx),null):i}function am(n,e,t,i){if(e===1){if(t?.held){t===Es?im(!0):hi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??$i;n.relativeRotation.multiplyQuaternions(Mv.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),Tt.splice(Tt.indexOf(n),1);else if(e===4&&!n.protected){od.copy(n.mesh.position).addScaledVector(Xt,n.radius*2+.08);let s=Ho(n.netType,od);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=Ah(n.mesh.material),s.customMaterial=!0,Pl(s.mesh.material)),ll(s,St.boxes))}else if(e===5){let s=Sv(n);s.color.set(Vx[n.paint++%Vx.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,nE(n));Zt=!0}}var ws=[];function Tv(n,e,t,i){if(!O.objects)return;let s=Ye.role==="player";if(ws.length=0,s)Ye.forEachReplica(a=>ws.push(a));else for(let a of Tt)!a.owner&&a.mesh.visible&&ws.push(a.mesh);let r=wv(n,e,ws);if(Vo.mode=O.toolMode,i?(rd.copy(i.mesh.position),$i.copy(i.controllerRotation)):(jt.getWorldQuaternion($i),rd.set(.16,-.17,-.43).applyQuaternion($i).add(n)),nm.update(Vo),!t)return;if(s){if(O.toolMode===1&&ji)Ye.sendAction({type:"release",objectId:ji}),ji=0;else if(r){let a=r.object.userData.netId;Ye.sendAction({type:"tool",mode:O.toolMode,objectId:a})&&O.toolMode===1&&(ji=a)}return}let o=r&&Tt.find(a=>a.mesh===r.object);am(o,O.toolMode,i??Es,r?He.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function iE(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;kn.set(o.x,o.y-ui,o.z).applyAxisAngle(Xt,bt).add(dt.position),Ki.set(a.x,a.y,a.z,a.w),Dn.set(0,0,-1).applyQuaternion(Ki).applyAxisAngle(Xt,bt),Tv(kn,Dn,s,i)}function sE(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;kn.set(r.x,r.y-ui,r.z).applyAxisAngle(Xt,bt).add(dt.position),Ki.set(o.x,o.y,o.z,o.w),Dn.set(0,0,-1).applyQuaternion(Ki).applyAxisAngle(Xt,bt),Up(kn,Dn,i)}var mr=bA(At,new yt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);mr.visible=!1;var Fp=[],hr=null;function kx(){let n=hn.ctx;Fp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+Yx,25,42),n.font="20px system-ui",n.fillText(ur+" FPS   \xB7   Q "+en+"/10   \xB7   "+(O.auto?"AUTO":"MANUEL"),390,40);function e(s,r,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(s,r,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,s+o/2,r+a/2+7,o-8),n.textAlign="left",Fp.push({x:s,y:r,w:o,h:a,action:c,label:l})}let t=Math.floor(587/pr.length);if(pr.forEach(([s],r)=>e(25+r*t,61,t-4,44,s,()=>av(r),ct===r?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),Qa.forEach((s,r)=>{let o=204+r*48;n.fillText("Ar\xE8ne "+(r+1),25,o+29),e(200,o,190,40,"Rejoindre",()=>Ye.connect("player",s)),e(406,o,206,40,"H\xE9berger",()=>Ye.connect("vr",s))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>Yt=!1),hn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&Dp().forEach(([s],r)=>{let o=mv()===r,a=Math.min(144,Math.floor(586/Dp().length)-4);e(25+r*(a+4),114,a,38,s,()=>gv(r),o?"#546947":"#263d49")}),Xp().forEach(([s,r],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(s,37,a+26),typeof r=="function"?e(406,a,206,36,yv(r),r):typeof O[r]=="boolean"?e(406,a,206,36,pv(r),()=>_n(r,1),O[r]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>_n(r,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Qp(r)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>_n(r,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",fv),e(325,579,287,44,"Fermer",()=>Yt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(lm||(ct===6?"Cyan : prise \xB7 Vert : paume \xB7 Rose : collisions invisibles":ct===4&&pt.status?pt.status.slice(0,64):td?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),hn.texture.needsUpdate=!0}function rE(n){Yt=!Yt,Yt&&(Zx=n,Tx.set(0,0,-1).applyAxisAngle(Xt,Ji),hn.mesh.position.copy(Rt).addScaledVector(Tx,1.25),hn.mesh.position.y+=.08,hn.mesh.lookAt(Rt),hn.mesh.updateMatrixWorld(!0)),Zt=!0}function oE(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;kn.set(r.x,r.y-ui,r.z).applyAxisAngle(Xt,bt).add(dt.position),Ki.set(o.x,o.y,o.z,o.w),Dn.set(0,0,-1).applyQuaternion(Ki).applyAxisAngle(Xt,bt),wi.set(kn,Dn);let a=wi.intersectObject(hn.mesh)[0];if(a&&(mr.visible=!0,mr.position.copy(a.point).addScaledVector(Dn,-.012),i)){let l=a.uv.x*hn.w,c=(1-a.uv.y)*hn.h;Fp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Zt=!0}}var hd=ry(),{held:bi,pressed:Xi}=hd,Av=uy(Ke.domElement,document.querySelector("#touch-fire")),Gx=document.querySelector("#game-settings"),Ev=document.querySelector("#open-settings"),Np=document.querySelector("#game-hint"),jh=0;function ci(n){Np.textContent=n,Np.hidden=!1,jh=performance.now()+2400,lm=n,Zt=!0}var lm="";function dd(n){let e=n??!Gx.hidden;Gx.hidden=e,Ev.hidden=!e,e&&Ke.domElement.focus()}Ev.onclick=()=>dd(!1);document.querySelector("#close-settings").onclick=()=>dd(!0);var wl=sy({canvas:Ke.domElement,enabled:()=>!Ke.xr.isPresenting,onLook:(n,e,t)=>{bt-=n*t,fr=He.clamp(fr-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Xi.add(e)},onMenu:()=>dd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ke.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||dd();return}n.code==="Space"&&n.preventDefault(),hd.down(n.code,n.repeat),n.code==="KeyR"&&es()}});addEventListener("keyup",n=>hd.up(n.code));addEventListener("blur",()=>{hd.clear(),wl.clear(),Av.clear()});function aE(n,e){if(!O.objects)return!1;let t=Ye.role==="player";if(t&&ji)return Ye.sendAction({type:"release",objectId:ji}),ji=0,!0;if(Es.held)return im(!0),!0;if(ws.length=0,t)Ye.forEachReplica(s=>ws.push(s));else for(let s of Tt)!s.owner&&s.mesh.visible&&ws.push(s.mesh);let i=wv(n,e,ws);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:s})&&(ji=s)}else jt.getWorldQuaternion($i),am(Tt.find(s=>s.mesh===i.object),1,Es,Math.max(.75,i.distance));return!0}var Ep=[];function Cv(){return Ep.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!Gn[e]||Gn[e].properties?.collidable===!1||n.userData.held)return;let t=Gn[e],i=O.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=O.preciseHitboxes,s.handCollider??={objectBody:s,friction:.96,gravity:1},Ep.push(s)}),Ep}function lE(){Ye.role!=="vr"||!Ye.remoteSpectator||Tt.some(n=>n.netType===Al)||Ho(Al,null,null,!0)}var Tl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Tl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Tl.onclick=async()=>{let n;As.unlock();try{Tl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ke.xr.setFramebufferScaleFactor(.45+O.resolution*.055),await Ke.xr.setSession(n),Ti(),vl=n.frameRate||72,xl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=xl.includes(120)?120:xl.find(t=>t>=100)??xl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}vl=n.frameRate||vl,Vp=Math.min(100,vl),O.auto&&(en=Math.min(en,4),Fo=No=Bo=0),Yp=[],Wh=0,qh=0,jp=Jp=Op=0,zp=null,nd=!0,Zp=null,zo=NaN,ui=0,es(),Ti(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Tl.disabled=!1,document.querySelector("#status").textContent=e.message}};Ke.xr.addEventListener("sessionend",()=>{Tl.disabled=!1,Yt=!1,hn.mesh.visible=!1,$n.mesh.visible=!1,document.body.classList.remove("immersive"),es(),Cl()});function Rv(n){if(!pt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(pt.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function Hx(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Yt||!e||n.grip||!O.objects)return;let i=null,s=.15;if(Ye.forEachReplica(r=>{if(r.userData.held)return;let o=Gn[r.userData.netType];if(!o||o.properties?.grabbable===!1||r.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=bh(n.target,{mesh:r,shape:o.shape,radius:o.shape.radius});a<s&&(i=r,s=a)}),i){let r=i.userData.netId;Ye.sendAction({type:"hold",objectId:r,hand:t})&&(n.remoteHeld=r)}else if(pt.builtIn){let r=wn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(Go).distanceToSquared(n.target)<.06760000000000001);r>=0&&Ye.sendAction({type:"world",mode:2,typeId:r})}}function cE(n,e,t){let i=[...n.session.inputSources];for(let s of Ut){let r=i.find(d=>d.handedness===s.side&&d.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&O.hands&&!O.body,!o){Ye.role==="player"&&Hx(s,!1),s.valid=!1,s.surface=null,hi(s,!1);continue}nx(s,o.transform,ui,bt,dt.position),s.valid=!0;let a=!!r.gamepad?.buttons[1]?.pressed;if(ml.copy(s.controllerRotation),TA(s,r.gamepad?.buttons??[],t),Ye.role==="player")Hx(s,a);else if(!Yt&&a&&!s.grip&&O.objects&&!s.held){let d=null,p=.15,y=wn.coconuts.find(m=>m.visible&&m.getWorldPosition(Go).distanceToSquared(s.target)<.26**2);y&&(d=tm(y));for(let m of Tt){if(m.owner||!m.grabbable||m.mesh.position.distanceToSquared(s.target)>(m.radius+.18)**2)continue;let g=bh(s.target,m);!y&&g<p&&(p=g,d=m)}d&&!s.held&&(s.held=d,d.owner=s,d.frozen=!1,bl.copy(ml).invert(),d.offset.copy(d.mesh.position).sub(s.target).applyQuaternion(bl),d.relativeRotation.multiplyQuaternions(bl,d.mesh.quaternion),d.velocity.set(0,0,0),d.angular.set(0,0,0))}!a&&s.grip&&!s.held?.toolHold&&hi(s,!Yt),s.grip=a,s.hasSupport=!1;let l=s.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){ad.multiplyQuaternions(ml,l.relativeRotation),s.supportOffset.copy(l.spec.supportAxis).applyQuaternion(ad),Oo.copy(l.offset).applyQuaternion(ml);let d=s.supportOffset.dot(Oo);(Math.abs(d)>.008?d<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(Oo),s.hasSupport=!0}if(s.held?.toolHold){let p=n.getPose(r.targetRaySpace,e)?.transform.orientation;p?s.aimDirection.set(0,0,-1).applyQuaternion(Mv.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Xt,bt):s.aimDirection.set(0,0,-1).applyQuaternion(ml)}let c=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");c&&!s.menu&&rE(s.side),s.menu=c;let u=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&u&&!s.toolButton&&!Yt&&_n("toolActive",1),s.toolButton=u;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&O.toolActive&&!Yt&&_n("toolMode",1),s.toolCycle=h;let f=!!r.gamepad?.buttons[0]?.pressed;if(Yt){let d=f&&!s.trigger;(d||!hr||!hr.click&&s.side!==Zx)&&(hr={source:r,click:d})}else!Yt&&s.side==="right"&&O.mapEdit?Yh={source:r,click:f&&!s.trigger}:!Yt&&s.side==="right"&&O.toolActive?Xh={source:r,hand:s,click:f&&!s.trigger}:!Yt&&!O.blasterActive&&(s.side==="right"||f&&!s.trigger)&&(_l={source:r,click:f&&!s.trigger});s.trigger=f}}function Wx(n,e){let t=n?-Uo.y:Math.max(0,-Math.sin(fr)),i=0,s=0,r=0;if(n){Ex.setFromAxisAngle(Xt,-Ji);for(let u of Ut)u.valid&&(Mp.copy(u.gripPosition).sub(Rt).applyQuaternion(Ex),i+=Mp.x-(u.side==="left"?-.2:.2),s+=Mp.z+.24,r++)}let o=r?He.clamp(-s/r,-.35,.45):0,a=r?He.clamp(i/r,-.35,.35):0,l=1-Math.exp(-e*13),c=-.31*He.smoothstep(t,.2,.92)-o*.45;Yi.x=He.lerp(Yi.x,c,l),Yi.y=He.lerp(Yi.y,-a*.62,l),Ax.set(Yi.x,Ji,Yi.y,"YXZ"),Si.quaternion.setFromEuler(Ax)}function uE(n,e,t,i,s=i){let r=!!t,o=.43+O.size*.088;if(r){let f=t.transform.position;Number.isFinite(zo)||(zo=f.y),ui=He.clamp(zo-o,-.65,1.7),Jh.position.y=-ui,Jn.set(f.x,f.y-ui,f.z);let p=[...n.session.inputSources].find(y=>y.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(Gh=!1),Math.abs(p)>.67&&!Gh&&!Yt&&(Gh=!0,vn.copy(Jn).applyAxisAngle(Xt,bt),bt-=Math.sign(p)*Math.PI/4,_x.copy(Jn).applyAxisAngle(Xt,bt),dt.position.add(vn.sub(_x)),Ts.reset(),kh=!1)}else Jh.position.y=0,Jn.set(0,o,0),jt.position.copy(Jn),jt.rotation.set(fr,0,0,"YXZ");if(Rt.copy(Jn).applyAxisAngle(Xt,bt).add(dt.position),r){let f=t.transform.orientation;Hh.set(f.x,f.y,f.z,f.w),Uo.set(0,0,-1).applyQuaternion(Hh),Uo.x**2+Uo.z**2>.018&&(Ji=bt+Math.atan2(-Uo.x,-Uo.z))}else Ji=bt;let a=Rv(Rt),l=9.81*(O.gravity/5)*(a?.gravity??1);Rp=l,bx.copy(dt.position);let c=Ye.role==="player"?Cv():Tt;if(r){cE(n,e,s),Wx(!0,s),Ut.some(f=>f.valid)&&Jp++,Fh.length=0;for(let f of Qi)Fh.push(f);if(O.collisions&&O.objects)for(let f of c)f.handCollider&&!f.owner&&Fh.push(f.handCollider);Ts.move({head:Rt,dt:i,inputDt:s,gravity:l,settings:O,boxes:Fh,velocity:xn,movement:pl,reach:Kh()*2+.16});for(let f of Ut)ly(f,O.stepHaptics,s)}else{Wx(!1,s),xn.y-=l*i;let f=Number(bi.has("KeyD"))-Number(bi.has("KeyA")||bi.has("KeyQ"))+wl.movement.x,d=Number(bi.has("KeyS"))-Number(bi.has("KeyW")||bi.has("KeyZ"))+wl.movement.z,p=bi.has("ShiftLeft")||bi.has("ShiftRight");_s.set(f,0,d).clampLength(0,1).applyAxisAngle(Xt,bt).multiplyScalar(p?5.4:3.4);let y=1-Math.exp(-i*(a?.friction<.1?2:qi?13:4));xn.x=He.lerp(xn.x,_s.x,y),xn.z=He.lerp(xn.z,_s.z,y),(wl.consumeJump()||Xi.delete("Space"))&&qi&&(xn.y=3.1+O.jump*.18),pl.copy(xn).multiplyScalar(i)}if(O.collisions&&kh&&(Oo.copy(Rt).add(pl),Ao(Sx,Oo,yA,Qi,vn,Lh)&&_s.subVectors(Oo,vn).dot(Lh)<0&&pl.copy(vn).sub(Rt)),dt.position.add(pl),Rt.copy(Jn).applyAxisAngle(Xt,bt).add(dt.position),qi=!1,O.collisions){Dh.set(0,-1,0).applyQuaternion(Si.quaternion),Dh.y=0,Dh.addScaledVector(wA.set(0,0,1).applyAxisAngle(Xt,Ji),.12);for(let f=0;f<3;f++){let d=f===0?.18:f===1?Math.max(.26,Jn.y*.57):Jn.y,{radius:p}=Vh[f];if(vn.set(Rt.x,dt.position.y+d,Rt.z),f<2&&vn.addScaledVector(Dh,Math.max(0,Jn.y-d)),Mx.copy(vn),qi=ap(vn,p,St.boxes,xn,0,3+O.grip,i)||qi,O.objects)for(let y of c)y.blocksPlayer&&!y.owner&&Fy(vn,p,y,xn,Lh)&&Lh.y>.6&&(qi=!0);ap(vn,p,St.boxes,xn,0,3+O.grip,i),_s.subVectors(vn,Mx),dt.position.add(_s),Rt.add(_s);for(let y=0;y<f;y++)Vh[y].position.add(_s);Vh[f].position.copy(vn)}}if(Ms.subVectors(dt.position,bx),As.update({dt:s,inVR:r,hands:Ut,grounded:qi,travel:Math.hypot(Ms.x,Ms.z),volume:O.stepVolume,enabled:O.stepAudio}),r){let f=Ts.finish(Ms,xn);f.contacts&&jp++,f.launched&&(Op++,zp={handSpeed:f.launchSpeed,velocity:xn.toArray(),t:performance.now()})}(pt.active?dt.position.y<-24||Math.abs(dt.position.x)>155||Math.abs(dt.position.z)>155:dt.position.y<-9||Math.abs(dt.position.x)>33||dt.position.z<-57||dt.position.z>13)&&(es(),Rt.copy(Jn).applyAxisAngle(Xt,bt).add(dt.position)),Sx.copy(Rt),kh=!0,dt.rotation.y=bt,r&&jt.position.set(0,0,0);for(let f of Ut)r&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Ms,f.surface?0:1),f.gripPosition.add(Ms)),r||(f.mesh.visible=!1);let u=.72+O.size*.05,h=Kh()*2*(2/3)/.82;Si.visible=O.body,Zi.position.copy(Rt),r?Zi.quaternion.copy(Hh).premultiply(Ki.setFromAxisAngle(Xt,bt)):Zi.quaternion.setFromEuler(new ln(fr,bt,0,"YXZ")),Cp.set(0,-.145,.045).applyQuaternion(Zi.quaternion).add(Rt),Si.position.set(0,.46*h,.04*u).applyQuaternion(Si.quaternion).negate().add(Cp),AA(u,h),dt.updateMatrixWorld(!0),jt.updateWorldMatrix(!0,!1)}function hE(n,e){if(Uh+=n,_p++,Fo+=n,Uh<1||(ur=Math.round(_p/Uh),_p=0,Uh=0,Zt=!0,kA.textContent=ur+" FPS \xB7 qualit\xE9 "+en+"/10 \xB7 "+(O.auto?"auto":"manuel"),!O.auto||Fo<5))return;Fo=0;let t=e?Math.min(100,Ke.xr.getSession()?.frameRate||vl):60;e&&(Vp=t),No=ur<t-4?No+1:0,Bo=ur>=t-1?Bo+1:0;let i=He.clamp(en+(No>=1?-1:Bo>=2?1:0),1,10);i!==en&&(en=i,Fo=No=Bo=0,Ti())}St.bakeLightmap();var Pv={value:1},Iv={value:1},Lv={value:0},cm={value:0},qx=new WeakSet;function Pl(n){if(!n||qx.has(n))return;qx.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:Pv,uPhotoSaturation:Iv,uPhotoWarmth:Lv,uLabShader:cm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)Pl(n);At.traverse(n=>{n.isMesh&&![hn.mesh,$n.mesh,mr].includes(n)&&Pl(n.material)});Ti();var Xx=new URLSearchParams(location.search);if(Xx.has("map"))pt.loadURL(Xx.get("map"));else try{let n=localStorage.getItem(dl);n&&pt.load(n)}catch(n){pt.inform(n.message)}function dE(){let n=Ke.xr.isPresenting;return{head:Zi.quaternion,hands:n?Ut.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,Vo.mode?QA:null],height:Jn.y,armSpan:Kh()*2,light:O.timeOfDay-1,color:jx,coconuts:wn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:Vo.mode?Vo:null,gun:cd.gun}}Ke.setAnimationLoop((n,e)=>{let t=vp?Math.max(0,(n-vp)/1e3):.014;vp=n;let i=Math.max(1e-4,Math.min(.035,t)),s=Ye.role?1:Kp[O.debugSpeed-1],r=i*s,o=Ke.xr.isPresenting,a=Ke.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(PA(n*.001),jh&&n>jh&&(Np.hidden=!0,jh=0,lm=""),mr.visible=!1,nm.hide(),Vo.mode=0,Qi=O.collisions?St.boxes:xA,hr=null,_l=null,Xh=null,Yh=null,pt.clearGhost(),hn.mesh.visible=!1,!o&&Ye.role==="pc"){Si.visible=!1;for(let m of Ut)m.mesh.visible=!1}else uE(e,a,l,r,i);let c=!o&&Ye.role==="pc",u=c||Ye.role==="player";if(Ye.role!=="player"){ji=0;for(let m of Ut)m.remoteHeld=0}u||(tE(r),lE());for(let m of Tt){m.mesh.visible=O.objects&&!u;let{x:g,y:b,z:w}=m.mesh.position;if((pt.active?b<-24||Math.abs(g)>155||Math.abs(w)>155:b<-8||Math.abs(g)>28||w<-57||w>13)&&(m.owner||(m.mesh.position.copy(m.start),m.velocity.set(0,0,0),m.angular.set(0,0,0))),m.shadow.visible=!u&&O.shadows&&ed()<3&&O.objects&&m.mesh.position.y<2,m.shadow.visible){let{x:C,z:A}=m.mesh.position,L=St.boxes.find(S=>S.heightfield&&C>=S.xMin&&C<=S.xMax&&A>=S.zMin&&A<=S.zMax),U=L?L.height(C,A):0;m.shadow.position.set(C,U+.006,A)}}if(!u&&O.objects){for(let m of Tt)m.beforePhysics.copy(m.mesh.position);Dy(Tt,St.boxes,r,9.81*O.gravity/5,.12+O.bounce*.064,Rv),pt.builtIn&&wn.updateTarget(Tt)}if(o&&!Yt&&Ye.role!=="pc")for(let m of Ut)$A(m);if(St.probe.rotation.y+=r*.29,hE(Math.min(.3,t),o),hn.mesh.visible=o&&Yt,hn.mesh.visible&&Zt&&kx(),hn.mesh.visible&&hr)oE(e,a,hr.source,hr.click);else if(o&&Yh)JA(e,a,Yh);else if(o&&Xh)iE(e,a,Xh);else if(o&&_l)sE(e,a,_l.source,_l.click);else if(!o&&!c){jt.getWorldPosition(kn),jt.getWorldDirection(Dn),Xi.delete("KeyX")&&_n("blasterActive",1),Xi.delete("KeyG")&&(_n("toolActive",1),O.toolActive&&ci("Outil \xB7 "+nr[O.toolMode-1])),Xi.delete("KeyT")&&_n("toolMode",1);let m=Xi.delete("KeyE");O.toolActive?Tv(kn,Dn,m,null):m&&!aE(kn,Dn)?Up(kn,Dn,!0):!m&&!u&&Up(kn,Dn,!1),Xi.delete("KeyF")&&(O.objects=!0,om(nv[0]))}let h=$n.mesh.visible;if($n.mesh.visible=o&&!Yt&&Ut[0].valid,$n.mesh.visible&&($n.mesh.position.copy(Ut[0].mesh.position).y+=.12,$n.mesh.lookAt(Rt)),(Zt||n-wx>1100||$n.mesh.visible&&!h)&&(Zt=!1,wx=n,Yt&&kx(),$n.mesh.visible)){let m=$n.ctx;m.clearRect(0,0,416,84),m.fillStyle="#182632",m.fillRect(0,0,416,84),m.fillStyle="#fff0cf",m.font="bold 25px system-ui",m.fillText(ur+" FPS     Q "+en+"/10",17,32),m.font="20px system-ui",m.fillText(O.mapEdit?"\xC9dition : "+_v[O.mapMode-1]:O.blasterActive?"Pistolet : maintenir la g\xE2chette":O.toolActive?"Tool Gun : "+nr[O.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),$n.texture.needsUpdate=!0}cd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:r,yaw:bt,drop:ui,rightHand:Ut[1],enabled:O.blasterActive&&!c&&!Yt&&!O.mapEdit,flatFiring:Av.held||bi.has("KeyJ")}),Ye.update({inVR:o,time:n,dt:i,position:Rt,yaw:c?bt:Ji,pitch:fr,camera:jt,rig:dt,keys:bi,actions:Xi,flat:wl,avatar:dE,bodies:O.objects?Tt:Px,score:wn.score()}),Xi.clear(),gA.update({settings:O,boxes:Qi,bodies:u?O.debugHitboxes?Cv():Px:Tt,hands:Ut,locomotion:Ts,velocity:xn,head:Rt,neck:Cp,body:Si.position,proxies:Vh,gravity:Rp,appliedMove:Ms,playerActive:!c,inVR:o}),!c&&(o||!nd)&&n-qh>350&&($x={simulationScale:s,gravity:Rp,velocity:xn.toArray(),grounded:qi,torsoDegrees:[Yi.x,Yi.y].map(He.radToDeg),hands:o?Ts.hands.map(({hand:m,normal:g,offset:b})=>m.valid?{side:m.side,gripPosition:m.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Vi).applyQuaternion(m.mesh.quaternion).add(m.target).add(Ms).distanceTo(m.gripPosition),palmCenter:vn.copy(Vi).applyQuaternion(m.mesh.quaternion).add(m.mesh.position).toArray(),contactCenter:vn.copy(m.mesh.position).add(b).toArray(),normal:m.surface?g.toArray():null,surface:m.surface?.name??m.surface?.objectBody?.spec?.name??null}:null):[]}),BA(u),St.centerShadows(sd);let f=25+(10-ed())*(o?7:4);Ke.shadowMap.enabled&&n-vx>=f&&(Ke.shadowMap.needsUpdate=!0,vx=n),qA(n,l);let d=o&&O.post,p=o&&O.rayTrace;pA(p,Tt);let y=O.vrFov/100;if(!d||!fA.render(At,jt,{bloom:O.bloom,visibleField:y})){zh.material.uniforms.visibleField.value=y,zh.visible=o&&y<1;try{Ke.render(At,jt)}finally{zh.visible=!1}}if((o||!nd)&&(Yp[Wh]=t*1e3,Wh=(Wh+1)%720,n-qh>350)){qh=n;let{calls:m,triangles:g,lines:b,points:w}=Ke.info.render;lv={calls:m,triangles:g,lines:b,points:w,textures:Ke.info.memory.textures},o&&(Zp={refreshHz:Ke.xr.getSession()?.frameRate??null,targetFps:Vp,supportedHz:xl.slice(),foveation:Ke.xr.getFoveation()??null,visualEffects:{post:d,bloom:d&&O.bloom,rayTrace:p},eyeViewports:Ke.xr.getCamera().cameras.map(_=>({width:_.viewport?.z??null,height:_.viewport?.w??null}))})}});})();
