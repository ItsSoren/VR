(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Pm=0,Bd=1,Im=2;var Ca=1,Lm=2,fi=3,ii=0,ln=1,Ht=2,Di=0,Es=1,qn=2,Od=3,zd=4,Dm=5,es=100,Um=101,Fm=102,Nm=103,Bm=104,Om=200,zm=201,Vm=202,km=203,Zl=204,jl=205,Gm=206,Hm=207,Wm=208,Xm=209,qm=210,Ym=211,Zm=212,jm=213,Jm=214,Tc=0,Ac=1,Ec=2,Cs=3,Cc=4,Rc=5,Pc=6,Ic=7,Lc=0,Km=1,$m=2,Ui=0,Qm=1,eg=2,tg=3,Dc=4,ng=5,ig=6,sg=7;var Vd=300,Bs=301,Os=302,jr=303,Uc=304,Ra=306,hi=1e3,Qi=1001,Jl=1002,rn=1003,rg=1004;var Pa=1005;var on=1006,Fc=1007;var Tn=1008;var Bn=1009,kd=1010,Gd=1011,Jr=1012,Nc=1013,ss=1014,si=1015,pi=1016,Bc=1017,Oc=1018,Kr=1020,Hd=35902,Wd=35899,Xd=1021,qd=1022,An=1023,Ir=1026,$r=1027,zc=1028,Vc=1029,Yd=1030,kc=1031;var Gc=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Hc=35840,Wc=35841,Xc=35842,qc=35843,Yc=36196,Zc=37492,jc=37496,Jc=37808,Kc=37809,$c=37810,Qc=37811,eu=37812,tu=37813,nu=37814,iu=37815,su=37816,ru=37817,ou=37818,au=37819,lu=37820,cu=37821,uu=36492,hu=36494,du=36495,fu=36283,pu=36284,mu=36285,gu=36286;var Xo=2300,Kl=2301,ql=2302,wd=2400,Td=2401,Ad=2402;var og=3200,ag=3201;var xu=0,lg=1,Fi="",xt="srgb",Rs="srgb-linear",qo="linear",yt="srgb";var As=7680;var Ed=519,cg=512,ug=513,hg=514,Zd=515,dg=516,fg=517,pg=518,mg=519,$l=35044,Yn=35048;var jd="300 es",ni=2e3,Yo=2001;var Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qp=1234567,ko=Math.PI/180,Lr=180/Math.PI;function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Jd(n,e){return(n%e+e)%e}function jy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Jy(n,e,t){return n!==e?(t-n)/(e-n):0}function Go(n,e,t){return(1-t)*n+t*e}function Ky(n,e,t,i){return Go(n,e,1-Math.exp(-t*i))}function $y(n,e=1){return e-Math.abs(Jd(n,e*2)-e)}function Qy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function e_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function t_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function n_(n,e){return n+Math.random()*(e-n)}function i_(n){return n*(.5-Math.random())}function s_(n){n!==void 0&&(qp=n);let e=qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r_(n){return n*ko}function o_(n){return n*Lr}function a_(n){return(n&n-1)===0&&n!==0}function l_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function c_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xe={DEG2RAD:ko,RAD2DEG:Lr,generateUUID:ui,clamp:Ke,euclideanModulo:Jd,mapLinear:jy,inverseLerp:Jy,lerp:Go,damp:Ky,pingpong:$y,smoothstep:Qy,smootherstep:e_,randInt:t_,randFloat:n_,randFloatSpread:i_,seededRandom:s_,degToRad:r_,radToDeg:o_,isPowerOfTwo:a_,ceilPowerOfTwo:l_,floorPowerOfTwo:c_,setQuaternionFromProperEuler:u_,normalize:gt,denormalize:ti},Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==p){let g=1-a,m=l*f+c*d+u*p+h*x,S=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let A=Math.sqrt(w),P=Math.atan2(A,m*S);g=Math.sin(g*P)/A,a=Math.sin(a*P)/A}let v=a*S;if(l=l*g+f*v,c=c*g+d*v,u=u*g+p*v,h=h*g+x*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jh=new M,Yp=new je,tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],S=s[1],w=s[4],v=s[7],A=s[2],P=s[5],I=s[8];return r[0]=o*x+a*S+l*A,r[3]=o*g+a*w+l*P,r[6]=o*m+a*v+l*I,r[1]=c*x+u*S+h*A,r[4]=c*g+u*w+h*P,r[7]=c*m+u*v+h*I,r[2]=f*x+d*S+p*A,r[5]=f*g+d*w+p*P,r[8]=f*m+d*v+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jh.makeScale(e,t)),this}rotate(e){return this.premultiply(Jh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jh=new tt;function Kd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gg(){let n=Dr("canvas");return n.style.display="block",n}var Zp={};function Ur(n){n in Zp||(Zp[n]=!0,console.warn(n))}function xg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var jp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h_(){let n={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rs]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:jp,fromXYZ:Jp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:jp,fromXYZ:Jp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}var lt=h_();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ur,Ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Dr("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d_=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kh(s[o].image)):r.push(Kh(s[o]))}else r=Kh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Kh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f_=0,$h=new M,dn=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=on,o=Tn,a=An,l=Bn,c=n.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ui(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Vd;dn.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(d+1)/2,A=(m+1)/2,P=(u+f)/4,I=(h+x)/4,D=(p+g)/4;return w>v&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=I/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=I/r,s=D/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ec=class extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),xl.subVectors(this.max,Ro),hr.subVectors(e.a,Ro),dr.subVectors(e.b,Ro),fr.subVectors(e.c,Ro),Yi.subVectors(dr,hr),Zi.subVectors(fr,dr),bs.subVectors(hr,fr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-bs.y,bs.x,0];return!Qh(t,hr,dr,fr,xl)||(t=[1,0,0,0,1,0,0,0,1],!Qh(t,hr,dr,fr,xl))?!1:(yl.crossVectors(Yi,Zi),t=[yl.x,yl.y,yl.z],Qh(t,hr,dr,fr,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new M,new M,new M,new M,new M,new M,new M,new M],$n=new M,gl=new sn,hr=new M,dr=new M,fr=new M,Yi=new M,Zi=new M,bs=new M,Ro=new M,xl=new M,yl=new M,Ss=new M;function Qh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var p_=new sn,Po=new M,ed=new M,Hn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):p_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Po,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(ed)),this.expandByPoint(Po.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Si=new M,td=new M,_l=new M,ji=new M,nd=new M,vl=new M,id=new M,Ps=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){td.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(td);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=ji.dot(this.direction),l=-ji.dot(_l),c=ji.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(td).addScaledVector(_l,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){nd.subVectors(t,e),vl.subVectors(i,e),id.crossVectors(nd,vl);let o=this.direction.dot(id),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let l=a*this.direction.dot(vl.crossVectors(ji,vl));if(l<0)return null;let c=a*this.direction.dot(nd.cross(ji));if(c<0||l+c>o)return null;let u=-a*ji.dot(id);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,g_)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ji.crossVectors(i,Dn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ji.crossVectors(i,Dn)),Ji.normalize(),Ml.crossVectors(Dn,Ji),s[0]=Ji.x,s[4]=Ml.x,s[8]=Dn.x,s[1]=Ji.y,s[5]=Ml.y,s[9]=Dn.y,s[2]=Ji.z,s[6]=Ml.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],S=i[3],w=i[7],v=i[11],A=i[15],P=s[0],I=s[4],D=s[8],b=s[12],_=s[1],C=s[5],U=s[9],q=s[13],G=s[2],V=s[6],j=s[10],te=s[14],B=s[3],Z=s[7],oe=s[11],ie=s[15];return r[0]=o*P+a*_+l*G+c*B,r[4]=o*I+a*C+l*V+c*Z,r[8]=o*D+a*U+l*j+c*oe,r[12]=o*b+a*q+l*te+c*ie,r[1]=u*P+h*_+f*G+d*B,r[5]=u*I+h*C+f*V+d*Z,r[9]=u*D+h*U+f*j+d*oe,r[13]=u*b+h*q+f*te+d*ie,r[2]=p*P+x*_+g*G+m*B,r[6]=p*I+x*C+g*V+m*Z,r[10]=p*D+x*U+g*j+m*oe,r[14]=p*b+x*q+g*te+m*ie,r[3]=S*P+w*_+v*G+A*B,r[7]=S*I+w*C+v*V+A*Z,r[11]=S*D+w*U+v*j+A*oe,r[15]=S*b+w*q+v*te+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+g*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],S=h*g*c-x*f*c+x*l*d-a*g*d-h*l*m+a*f*m,w=p*f*c-u*g*c-p*l*d+o*g*d+u*l*m-o*f*m,v=u*x*c-p*h*c+p*a*d-o*x*d-u*a*m+o*h*m,A=p*h*l-u*x*l-p*a*f+o*x*f+u*a*g-o*h*g,P=t*S+i*w+s*v+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=S*I,e[1]=(x*f*r-h*g*r-x*s*d+i*g*d+h*s*m-i*f*m)*I,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=w*I,e[5]=(u*g*r-p*f*r+p*s*d-t*g*d-u*s*m+t*f*m)*I,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=v*I,e[9]=(p*h*r-u*x*r-p*i*d+t*x*d+u*i*m-t*h*m)*I,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=A*I,e[13]=(u*x*s-p*h*s+p*i*f-t*x*f-u*i*g+t*h*g)*I,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,g=o*h,m=a*h,S=l*c,w=l*u,v=l*h,A=i.x,P=i.y,I=i.z;return s[0]=(1-(x+m))*A,s[1]=(d+v)*A,s[2]=(p-w)*A,s[3]=0,s[4]=(d-v)*P,s[5]=(1-(f+m))*P,s[6]=(g+S)*P,s[7]=0,s[8]=(p+w)*I,s[9]=(g-S)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),a=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,u=1/o,h=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Yo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ni)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Yo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pr=new M,Qn=new ot,m_=new M(0,0,0),g_=new M(1,1,1),Ji=new M,Ml=new M,Dn=new M,Kp=new ot,$p=new je,an=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x_=0,Qp=new M,mr=new je,wi=new ot,bl=new M,Io=new M,y_=new M,__=new je,em=new M(1,0,0),tm=new M(0,1,0),nm=new M(0,0,1),im={type:"added"},v_={type:"removed"},gr={type:"childadded",child:null},sd={type:"childremoved",child:null},It=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new an,i=new je,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new tt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,t){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bl.copy(e):bl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Io,bl,this.up):wi.lookAt(bl,Io,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(wi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v_),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new M(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new M,Ti=new M,rd=new M,Ai=new M,xr=new M,yr=new M,sm=new M,od=new M,ad=new M,ld=new M,cd=new at,ud=new at,hd=new at,Sn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ei.subVectors(s,t),Ti.subVectors(i,t),rd.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(Ti),l=ei.dot(rd),c=Ti.dot(Ti),u=Ti.dot(rd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cd.setScalar(0),ud.setScalar(0),hd.setScalar(0),cd.fromBufferAttribute(e,t),ud.fromBufferAttribute(e,i),hd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cd,r.x),o.addScaledVector(ud,r.y),o.addScaledVector(hd,r.z),o}static isFrontFacing(e,t,i,s){return ei.subVectors(i,t),Ti.subVectors(e,t),ei.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ei.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xr.subVectors(s,i),yr.subVectors(r,i),od.subVectors(e,i);let l=xr.dot(od),c=yr.dot(od);if(l<=0&&c<=0)return t.copy(i);ad.subVectors(e,s);let u=xr.dot(ad),h=yr.dot(ad);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xr,o);ld.subVectors(e,r);let d=xr.dot(ld),p=yr.dot(ld);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(yr,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return sm.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(sm,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function dd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Jd(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=dd(o,r,e+1/3),this.g=dd(o,r,e),this.b=dd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return lt.workingToColorSpace(hn.copy(this),e),Math.round(Ke(hn.r*255,0,255))*65536+Math.round(Ke(hn.g*255,0,255))*256+Math.round(Ke(hn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=xt){lt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Sl);let i=Go(Ki.h,Sl.h,t),s=Go(Ki.s,Sl.s,t),r=Go(Ki.l,Sl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Ne;Ne.NAMES=yg;var M_=0,Wn=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Es,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=jl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zl&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new M,wl=new Se,b_=0,Mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}};var Is=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var jo=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},S_=0,Gn=new ot,fd=new It,_r=new M,Un=new sn,Lo=new sn,nn=new M,et=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?jo:Is)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,Lo.min),Un.expandByPoint(nn),nn.addVectors(Un.max,Lo.max),Un.expandByPoint(nn)):(Un.expandByPoint(Lo.min),Un.expandByPoint(Lo.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),nn.add(_r)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new M,l[D]=new M;let c=new M,u=new M,h=new M,f=new Se,d=new Se,p=new Se,x=new M,g=new M;function m(D,b,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),a[D].add(x),a[b].add(x),a[_].add(x),l[D].add(g),l[b].add(g),l[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,b=S.length;D<b;++D){let _=S[D],C=_.start,U=_.count;for(let q=C,G=C+U;q<G;q+=3)m(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let w=new M,v=new M,A=new M,P=new M;function I(D){A.fromBufferAttribute(s,D),P.copy(A);let b=a[D];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(P,b);let C=v.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,C)}for(let D=0,b=S.length;D<b;++D){let _=S[D],C=_.start,U=_.count;for(let q=C,G=C+U;q<G;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new Mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rm=new ot,ws=new Ps,Tl=new Hn,om=new M,Al=new M,El=new M,Cl=new M,pd=new M,Rl=new M,am=new M,Pl=new M,Be=class extends It{constructor(e=new et,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(pd.fromBufferAttribute(h,e),o?Rl.addScaledVector(pd,u):Rl.addScaledVector(pd.sub(t),u))}t.add(Rl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Tl.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Tl,om)===null||ws.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(rm.copy(r).invert(),ws.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,A=w;v<A;v+=3){let P=a.getX(v),I=a.getX(v+1),D=a.getX(v+2);s=Il(this,m,e,i,c,u,h,P,I,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let S=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=Il(this,o,e,i,c,u,h,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,A=w;v<A;v+=3){let P=v,I=v+1,D=v+2;s=Il(this,m,e,i,c,u,h,P,I,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let S=g,w=g+1,v=g+2;s=Il(this,o,e,i,c,u,h,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function w_(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;Pl.copy(a),Pl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:n}}function Il(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Al),n.getVertexPosition(l,El),n.getVertexPosition(c,Cl);let u=w_(n,e,t,i,Al,El,Cl,am);if(u){let h=new M;Sn.getBarycoord(am,Al,El,Cl,h),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,l,c,h,new Se)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,l,c,h,new Se)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,h,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Sn.getNormal(Al,El,Cl,f.normal),u.face=f,u.barycoord=h}return u}var Je=class n extends et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function p(x,g,m,S,w,v,A,P,I,D,b){let _=v/I,C=A/D,U=v/2,q=A/2,G=P/2,V=I+1,j=D+1,te=0,B=0,Z=new M;for(let oe=0;oe<j;oe++){let ie=oe*C-q;for(let pe=0;pe<V;pe++){let ve=pe*_-U;Z[x]=ve*S,Z[g]=ie*w,Z[m]=G,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[m]=P>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(pe/I),h.push(1-oe/D),te+=1}}for(let oe=0;oe<D;oe++)for(let ie=0;ie<I;ie++){let pe=f+ie+V*oe,ve=f+ie+V*(oe+1),Te=f+(ie+1)+V*(oe+1),ye=f+(ie+1)+V*oe;l.push(pe,ve,ye),l.push(ve,Te,ye),B+=6}a.addGroup(d,B,b),d+=B,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=zs(n[t]);for(let s in i)e[s]=i[s]}return e}function T_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $d(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var yu={clone:zs,merge:fn},A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=T_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Jo=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new M,lm=new Se,cm=new Se,kt=class extends Jo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,lm,cm),t.subVectors(cm,lm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vr=-90,Mr=1,nc=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(vr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new kt(vr,Mr,e,t);r.layers=this.layers,this.add(r);let o=new kt(vr,Mr,e,t);o.layers=this.layers,this.add(o);let a=new kt(vr,Mr,e,t);a.layers=this.layers,this.add(a);let l=new kt(vr,Mr,e,t);l.layers=this.layers,this.add(l);let c=new kt(vr,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ko=class extends dn{constructor(e=[],t=Bs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ic=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Di});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=on),new nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ft=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var $o=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new M,Or=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zr=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,Do=new M,Sr=new M,wr=new M,Tr=new Se,Uo=new Se,_g=new ot,Ll=new M,Fo=new M,Dl=new M,um=new Se,md=new Se,hm=new Se,ea=class extends It{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qo(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Or(i,3,0,!1)),br.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),_g.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ul(Ll.set(-.5,-.5,0),wr,o,Sr,s,r),Ul(Fo.set(.5,-.5,0),wr,o,Sr,s,r),Ul(Dl.set(.5,.5,0),wr,o,Sr,s,r),um.set(0,0),md.set(1,0),hm.set(1,1);let a=e.ray.intersectTriangle(Ll,Fo,Dl,!1,Do);if(a===null&&(Ul(Fo.set(-.5,.5,0),wr,o,Sr,s,r),md.set(0,1),a=e.ray.intersectTriangle(Ll,Dl,Fo,!1,Do),a===null))return;let l=e.ray.origin.distanceTo(Do);l<e.near||l>e.far||t.push({distance:l,point:Do.clone(),uv:Sn.getInterpolation(Do,Ll,Fo,Dl,um,md,hm,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ul(n,e,t,i,s,r){Tr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Uo.x=r*Tr.x-s*Tr.y,Uo.y=s*Tr.x+r*Tr.y):Uo.copy(Tr),n.copy(e),n.x+=Uo.x,n.y+=Uo.y,n.applyMatrix4(_g)}var di=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new ot,dm=new ot,Fl=[],fm=new sn,R_=new ot,No=new Be,Bo=new Hn,ta=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,R_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),fm.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(fm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Bo.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),dm.multiplyMatrices(i,Ar),No.matrixWorld=dm,No.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){let l=Fl[o];l.instanceId=r,l.object=this,t.push(l)}Fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(s*this.count),s,this.count,zc,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gd=new M,P_=new M,I_=new tt,bn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gd.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||I_.getNormalMatrix(e),s=this.coplanarPoint(gd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Hn,L_=new Se(.5,.5),Nl=new M,kr=class{constructor(e=new bn,t=new bn,i=new bn,s=new bn,r=new bn,o=new bn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],w=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,m-p,A-S).normalize(),s[1].setComponents(c+o,d+u,m+p,A+S).normalize(),s[2].setComponents(c+a,d+h,m+x,A+w).normalize(),s[3].setComponents(c-a,d-h,m-x,A-w).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,A-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,A-v).normalize(),t===ni)s[5].setComponents(c+l,d+f,m+g,A+v).normalize();else if(t===Yo)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=L_.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nl.x=s.normal.x>0?e.max.x:e.min.x,Nl.y=s.normal.y>0?e.max.y:e.min.y,Nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new M,rc=new M,pm=new ot,Oo=new Ps,Bl=new Hn,xd=new M,mm=new M,na=class extends It{constructor(e=new et,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;pm.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(pm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),S=u.getX(x+1),w=Ol(this,e,Oo,l,m,S,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=Ol(this,e,Oo,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Ol(this,e,Oo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ol(this,e,Oo,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ol(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(sc.fromBufferAttribute(a,s),rc.fromBufferAttribute(a,r),t.distanceSqToSegment(sc,rc,xd,mm)>i)return;xd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(xd);if(!(c<e.near||c>e.far))return{distance:c,point:mm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var gm=new M,xm=new M,ia=class extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gm.fromBufferAttribute(t,s),xm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gm.distanceTo(xm);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gr=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ym=new ot,Cd=new Ps,zl=new Hn,Vl=new M,ra=class extends It{constructor(e=new et,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;ym.copy(s).invert(),Cd.copy(e.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Vl.fromBufferAttribute(h,g),_m(Vl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Vl.fromBufferAttribute(h,p),_m(Vl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _m(n,e,t,i,s,r,o){let a=Cd.distanceSqToPoint(n);if(a<t){let l=new M;Cd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xn=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oa=class extends dn{constructor(e,t,i=ss,s,r,o,a=rn,l=rn,c,u=Ir,h=1){if(u!==Ir&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},aa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},la=class n extends et{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,p=i*2+r,x=s+1,g=new M,m=new M;for(let S=0;S<=p;S++){let w=0,v=0,A=0,P=0;if(S<=i){let b=S/i,_=b*Math.PI/2;v=-u-e*Math.cos(_),A=e*Math.sin(_),P=-e*Math.cos(_),w=b*h}else if(S<=i+r){let b=(S-i)/r;v=-u+b*t,A=e,P=0,w=h+b*f}else{let b=(S-i-r)/i,_=b*Math.PI/2;v=u+e*Math.sin(_),A=e*Math.cos(_),P=e*Math.sin(_),w=h+f+b*h}let I=Math.max(0,Math.min(1,w/d)),D=0;S===0?D=.5/s:S===p&&(D=-.5/s);for(let b=0;b<=s;b++){let _=b/s,C=_*Math.PI*2,U=Math.sin(C),q=Math.cos(C);m.x=-A*q,m.y=v,m.z=A*U,a.push(m.x,m.y,m.z),g.set(-A*q,P,A*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(_+D,I)}if(S>0){let b=(S-1)*x;for(let _=0;_<s;_++){let C=b+_,U=b+_+1,q=S*x+_,G=S*x+_+1;o.push(C,U,q),o.push(U,G,q)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yt=class n extends et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class n extends et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,x=[],g=i/2,m=0;S(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function S(){let v=new M,A=new M,P=0,I=(t-e)/i;for(let D=0;D<=r;D++){let b=[],_=D/r,C=_*(t-e)+e;for(let U=0;U<=s;U++){let q=U/s,G=q*l+a,V=Math.sin(G),j=Math.cos(G);A.x=C*V,A.y=-_*i+g,A.z=C*j,h.push(A.x,A.y,A.z),v.set(V,I,j).normalize(),f.push(v.x,v.y,v.z),d.push(q,1-_),b.push(p++)}x.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let _=x[b][D],C=x[b+1][D],U=x[b+1][D+1],q=x[b][D+1];(e>0||b!==0)&&(u.push(_,C,q),P+=3),(t>0||b!==r-1)&&(u.push(C,U,q),P+=3)}c.addGroup(m,P,0),m+=P}function w(v){let A=p,P=new Se,I=new M,D=0,b=v===!0?e:t,_=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),p++;let C=p;for(let U=0;U<=s;U++){let G=U/s*l+a,V=Math.cos(G),j=Math.sin(G);I.x=b*j,I.y=g*_,I.z=b*V,h.push(I.x,I.y,I.z),f.push(0,_,0),P.x=V*.5+.5,P.y=j*.5*_+.5,d.push(P.x,P.y),p++}for(let U=0;U<s;U++){let q=A+U,G=C+U;v===!0?u.push(G,G+1,q):u.push(G+1,G,q),D+=3}c.addGroup(m,D,v===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ds=class n extends Gt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class n extends et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let w=new M,v=new M,A=new M;for(let P=0;P<t.length;P+=3)d(t[P+0],w),d(t[P+1],v),d(t[P+2],A),l(w,v,A,S)}function l(S,w,v,A){let P=A+1,I=[];for(let D=0;D<=P;D++){I[D]=[];let b=S.clone().lerp(v,D/P),_=w.clone().lerp(v,D/P),C=P-D;for(let U=0;U<=C;U++)U===0&&D===P?I[D][U]=b:I[D][U]=b.clone().lerp(_,U/C)}for(let D=0;D<P;D++)for(let b=0;b<2*(P-D)-1;b++){let _=Math.floor(b/2);b%2===0?(f(I[D][_+1]),f(I[D+1][_]),f(I[D][_])):(f(I[D][_+1]),f(I[D+1][_+1]),f(I[D+1][_]))}}function c(S){let w=new M;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let S=new M;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=g(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;o.push(v,1-A)}p(),h()}function h(){for(let S=0;S<o.length;S+=6){let w=o[S+0],v=o[S+2],A=o[S+4],P=Math.max(w,v,A),I=Math.min(w,v,A);P>.9&&I<.1&&(w<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,w){let v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let S=new M,w=new M,v=new M,A=new M,P=new Se,I=new Se,D=new Se;for(let b=0,_=0;b<r.length;b+=9,_+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),P.set(o[_+0],o[_+1]),I.set(o[_+2],o[_+3]),D.set(o[_+4],o[_+5]),A.copy(S).add(w).add(v).divideScalar(3);let C=g(A);x(P,_+0,S,C),x(I,_+2,w,C),x(D,_+4,v,C)}}function x(S,w,v,A){A<0&&S.x===1&&(o[w]=S.x-1),v.x===0&&v.z===0&&(o[w]=A/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new ot;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oc=class extends Wr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var kl=new M,yd=new Qd,_d=new Qd,vd=new Qd,ac=class extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(kl.subVectors(s[0],s[1]).add(s[0]),c=kl);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(kl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),yd.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,x,g),_d.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,x,g),vd.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_d.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),vd.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(yd.calc(l),_d.calc(l),vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function D_(n,e){let t=1-n;return t*t*e}function U_(n,e){return 2*(1-n)*n*e}function F_(n,e){return n*n*e}function Ho(n,e,t,i){return D_(n,e)+U_(n,t)+F_(n,i)}function N_(n,e){let t=1-n;return t*t*t*e}function B_(n,e){let t=1-n;return 3*t*t*n*e}function O_(n,e){return 3*(1-n)*n*n*e}function z_(n,e){return n*n*n*e}function Wo(n,e,t,i,s){return N_(n,e)+B_(n,t)+O_(n,i)+z_(n,s)}var ca=class extends Fn{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wo(e,s.x,r.x,o.x,a.x),Wo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lc=class extends Fn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wo(e,s.x,r.x,o.x,a.x),Wo(e,s.y,r.y,o.y,a.y),Wo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends Fn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Fn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Fn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ho(e,s.x,r.x,o.x),Ho(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends Fn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ho(e,s.x,r.x,o.x),Ho(e,s.y,r.y,o.y),Ho(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(vm(a,l.x,c.x,u.x,h.x),vm(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Rd=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:ac,CubicBezierCurve:ca,CubicBezierCurve3:lc,EllipseCurve:Wr,LineCurve:ua,LineCurve3:cc,QuadraticBezierCurve:ha,QuadraticBezierCurve3:uc,SplineCurve:da}),hc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Rd[s.type]().fromJSON(s))}return this}},fa=class extends hc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ua(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ha(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ca(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new da(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends fa{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fa().fromJSON(s))}return this}};function V_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=vg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=X_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return pa(r,o,t,a,l,c,0),o}function vg(n,e,t,i,s){let r;if(s===nv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Mm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Mm(o/i|0,n[o],n[o+1],r);return r&&Xr(r,r.next)&&(ga(r),r=r.next),r}function Fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Xr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&J_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?G_(n,i,s,r):k_(n)){e.push(l.i,n.i,c.i),ga(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=H_(Fs(n),e),pa(n,e,t,i,s,r,2)):o===2&&W_(n,e,t,i,s,r):pa(Fs(n),e,t,i,s,r,1);break}}}function k_(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Vo(s,a,r,l,o,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function G_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),m=Pd(d,p,e,t,i),S=Pd(x,g,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Vo(a,u,l,h,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Vo(a,u,l,h,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&Vo(a,u,l,h,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Vo(a,u,l,h,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function H_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Xr(i,s)&&bg(i,t,t.next,s)&&ma(i,s)&&ma(s,i)&&(e.push(i.i,t.i,s.i),ga(t),ga(t.next),t=n=s),t=t.next}while(t!==n);return Fs(t)}function W_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q_(o,a)){let l=Sg(o,a);o=Fs(o,o.next),l=Fs(l,l.next),pa(o,e,t,i,s,r,0),pa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function X_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=vg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push($_(c))}s.sort(q_);for(let r=0;r<s.length;r++)t=Y_(s[r],t);return t}function q_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Y_(n,e){let t=Z_(n,e);if(!t)return e;let i=Sg(t,n);return Fs(i,i.next),Fs(t,t.next)}function Z_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Xr(n,t))return t;do{if(Xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Mg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);ma(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&j_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function j_(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function J_(n,e,t,i){let s=n;do s.z===0&&(s.z=Pd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,K_(s)}function K_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Pd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Mg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Vo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Mg(n,e,t,i,s,r,o,a)}function Q_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ev(n,e)&&(ma(n,e)&&ma(e,n)&&tv(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Xr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xr(n,e){return n.x===e.x&&n.y===e.y}function bg(n,e,t,i){let s=Hl(Bt(n,e,t)),r=Hl(Bt(n,e,i)),o=Hl(Bt(t,i,n)),a=Hl(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Gl(n,t,e)||r===0&&Gl(n,i,e)||o===0&&Gl(t,n,i)||a===0&&Gl(t,e,i))}function Gl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Hl(n){return n>0?1:n<0?-1:0}function ev(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ma(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function tv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sg(n,e){let t=Id(n.i,n.x,n.y),i=Id(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Mm(n,e,t,i){let s=Id(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Id(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ld=class{static triangulate(e,t,i=2){return V_(e,t,i)}},ci=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];bm(e),Sm(i,e);let o=e.length;t.forEach(bm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Sm(i,t[l]);let a=Ld.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var xa=class n extends et{constructor(e=new Us([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:iv,w,v=!1,A,P,I,D;m&&(w=m.getSpacedPoints(u),v=!0,f=!1,A=m.computeFrenetFrames(u,!1),P=new M,I=new M,D=new M),f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(c),_=b.shape,C=b.holes;if(!ci.isClockWise(_)){_=_.reverse();for(let z=0,O=C.length;z<O;z++){let Y=C[z];ci.isClockWise(Y)&&(C[z]=Y.reverse())}}function q(z){let Y=10000000000000001e-36,N=z[0];for(let ce=1;ce<=z.length;ce++){let ne=ce%z.length,fe=z[ne],Fe=fe.x-N.x,Ue=fe.y-N.y,R=Fe*Fe+Ue*Ue,y=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(N.x),Math.abs(N.y)),L=Y*y*y;if(R<=L){z.splice(ne,1),ce--;continue}N=fe}}q(_),C.forEach(q);let G=C.length,V=_;for(let z=0;z<G;z++){let O=C[z];_=_.concat(O)}function j(z,O,Y){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(O,Y)}let te=_.length;function B(z,O,Y){let N,ce,ne,fe=z.x-O.x,Fe=z.y-O.y,Ue=Y.x-z.x,R=Y.y-z.y,y=fe*fe+Fe*Fe,L=fe*R-Fe*Ue;if(Math.abs(L)>Number.EPSILON){let J=Math.sqrt(y),le=Math.sqrt(Ue*Ue+R*R),$=O.x-Fe/J,ge=O.y+fe/J,de=Y.x-R/le,xe=Y.y+Ue/le,_e=((de-$)*R-(xe-ge)*Ue)/(fe*R-Fe*Ue);N=$+fe*_e-z.x,ce=ge+Fe*_e-z.y;let ue=N*N+ce*ce;if(ue<=2)return new Se(N,ce);ne=Math.sqrt(ue/2)}else{let J=!1;fe>Number.EPSILON?Ue>Number.EPSILON&&(J=!0):fe<-Number.EPSILON?Ue<-Number.EPSILON&&(J=!0):Math.sign(Fe)===Math.sign(R)&&(J=!0),J?(N=-Fe,ce=fe,ne=Math.sqrt(y)):(N=fe,ce=Fe,ne=Math.sqrt(y/2))}return new Se(N/ne,ce/ne)}let Z=[];for(let z=0,O=V.length,Y=O-1,N=z+1;z<O;z++,Y++,N++)Y===O&&(Y=0),N===O&&(N=0),Z[z]=B(V[z],V[Y],V[N]);let oe=[],ie,pe=Z.concat();for(let z=0,O=G;z<O;z++){let Y=C[z];ie=[];for(let N=0,ce=Y.length,ne=ce-1,fe=N+1;N<ce;N++,ne++,fe++)ne===ce&&(ne=0),fe===ce&&(fe=0),ie[N]=B(Y[N],Y[ne],Y[fe]);oe.push(ie),pe=pe.concat(ie)}let ve;if(g===0)ve=ci.triangulateShape(V,C);else{let z=[],O=[];for(let Y=0;Y<g;Y++){let N=Y/g,ce=d*Math.cos(N*Math.PI/2),ne=p*Math.sin(N*Math.PI/2)+x;for(let fe=0,Fe=V.length;fe<Fe;fe++){let Ue=j(V[fe],Z[fe],ne);X(Ue.x,Ue.y,-ce),N===0&&z.push(Ue)}for(let fe=0,Fe=G;fe<Fe;fe++){let Ue=C[fe];ie=oe[fe];let R=[];for(let y=0,L=Ue.length;y<L;y++){let J=j(Ue[y],ie[y],ne);X(J.x,J.y,-ce),N===0&&R.push(J)}N===0&&O.push(R)}}ve=ci.triangulateShape(z,O)}let Te=ve.length,ye=p+x;for(let z=0;z<te;z++){let O=f?j(_[z],pe[z],ye):_[z];v?(I.copy(A.normals[0]).multiplyScalar(O.x),P.copy(A.binormals[0]).multiplyScalar(O.y),D.copy(w[0]).add(I).add(P),X(D.x,D.y,D.z)):X(O.x,O.y,0)}for(let z=1;z<=u;z++)for(let O=0;O<te;O++){let Y=f?j(_[O],pe[O],ye):_[O];v?(I.copy(A.normals[z]).multiplyScalar(Y.x),P.copy(A.binormals[z]).multiplyScalar(Y.y),D.copy(w[z]).add(I).add(P),X(D.x,D.y,D.z)):X(Y.x,Y.y,h/u*z)}for(let z=g-1;z>=0;z--){let O=z/g,Y=d*Math.cos(O*Math.PI/2),N=p*Math.sin(O*Math.PI/2)+x;for(let ce=0,ne=V.length;ce<ne;ce++){let fe=j(V[ce],Z[ce],N);X(fe.x,fe.y,h+Y)}for(let ce=0,ne=C.length;ce<ne;ce++){let fe=C[ce];ie=oe[ce];for(let Fe=0,Ue=fe.length;Fe<Ue;Fe++){let R=j(fe[Fe],ie[Fe],N);v?X(R.x,R.y+w[u-1].y,w[u-1].x+Y):X(R.x,R.y,h+Y)}}}F(),H();function F(){let z=s.length/3;if(f){let O=0,Y=te*O;for(let N=0;N<Te;N++){let ce=ve[N];K(ce[2]+Y,ce[1]+Y,ce[0]+Y)}O=u+g*2,Y=te*O;for(let N=0;N<Te;N++){let ce=ve[N];K(ce[0]+Y,ce[1]+Y,ce[2]+Y)}}else{for(let O=0;O<Te;O++){let Y=ve[O];K(Y[2],Y[1],Y[0])}for(let O=0;O<Te;O++){let Y=ve[O];K(Y[0]+te*u,Y[1]+te*u,Y[2]+te*u)}}i.addGroup(z,s.length/3-z,0)}function H(){let z=s.length/3,O=0;he(V,O),O+=V.length;for(let Y=0,N=C.length;Y<N;Y++){let ce=C[Y];he(ce,O),O+=ce.length}i.addGroup(z,s.length/3-z,1)}function he(z,O){let Y=z.length;for(;--Y>=0;){let N=Y,ce=Y-1;ce<0&&(ce=z.length-1);for(let ne=0,fe=u+g*2;ne<fe;ne++){let Fe=te*ne,Ue=te*(ne+1),R=O+N+Fe,y=O+ce+Fe,L=O+ce+Ue,J=O+N+Ue;ae(R,y,L,J)}}}function X(z,O,Y){l.push(z),l.push(O),l.push(Y)}function K(z,O,Y){Re(z),Re(O),Re(Y);let N=s.length/3,ce=S.generateTopUV(i,s,N-3,N-2,N-1);T(ce[0]),T(ce[1]),T(ce[2])}function ae(z,O,Y,N){Re(z),Re(O),Re(N),Re(O),Re(Y),Re(N);let ce=s.length/3,ne=S.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);T(ne[0]),T(ne[1]),T(ne[3]),T(ne[1]),T(ne[2]),T(ne[3])}function Re(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function T(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rd[s.type]().fromJSON(s)),new n(i,e.options)}},iv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-h),new Se(f,1-p),new Se(x,1-m)]:[new Se(a,1-l),new Se(u,1-h),new Se(d,1-p),new Se(g,1-m)]}};function sv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Lt=class n extends Hr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ri=class n extends Hr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$t=class n extends et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let S=m*f-o;for(let w=0;w<c;w++){let v=w*h-r;p.push(v,-S,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let w=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),P=S+1+c*m;d.push(w,v,P),d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},qr=class n extends et{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new M,p=new Se;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let S=m+g,w=S,v=S+i+1,A=S+i+2,P=S+1;a.push(w,v,P),a.push(v,A,P)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ya=class n extends et{constructor(e=new Us([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){let h=s.length/3,f=u.extractPoints(t),d=f.shape,p=f.holes;ci.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];ci.isClockWise(S)===!0&&(p[g]=S.reverse())}let x=ci.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];d=d.concat(S)}for(let g=0,m=d.length;g<m;g++){let S=d[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=x.length;g<m;g++){let S=x[g],w=S[0]+h,v=S[1]+h,A=S[2]+h;i.push(w,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rv(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function rv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Pi=class n extends et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new M,f=new M,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let S=[],w=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let P=A/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+w*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(P+v,1-w),S.push(c++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){let w=u[m][S+1],v=u[m][S],A=u[m+1][S],P=u[m+1][S+1];(m!==0||o>0)&&d.push(w,v,P),(m!==i-1||l<Math.PI)&&d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_a=class n extends Hr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ii=class n extends et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,h=new M,f=new M;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,S=(s+1)*d+p;o.push(x,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tt=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zt=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dc=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ov(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ns=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends Ns{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wd,endingEnd:wd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Td:r=e,a=2*t-i;break;case Ad:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Td:o=e,l=2*i-t;break;case Ad:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,S=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let A=0;A!==a;++A)r[A]=m*o[u+A]+S*o[c+A]+w*o[l+A]+v*o[h+A];return r}},mc=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},gc=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wl(t,this.TimeBufferType),this.values=Wl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wl(e.times,Array),values:Wl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case Kl:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Kl;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ov(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Kl;var ns=class extends Nn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Xo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};xc.prototype.ValueTypeName="color";var yc=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};yc.prototype.ValueTypeName="number";var _c=class extends Ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ma=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Nn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Xo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="vector";var Yl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wg=new Mc,Yr=class{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=new WeakMap,bc=class extends Yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Er.get(o);h===void 0&&(h=[],Er.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Dr("img");function l(){u(),t&&t(this);let h=Er.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Yl.remove(`image:${e}`);let f=Er.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ba=class extends Yr{constructor(e){super(e)}load(e,t,i,s){let r=new dn,o=new bc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Zr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sa=class extends Zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Md=new ot,wm=new M,Tm=new M,Sc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(wm),Tm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tm),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Am=new ot,zo=new M,bd=new M,Dd=class extends Sc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(zo),bd.copy(i.position),bd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bd),i.updateMatrixWorld(),s.makeTranslation(-zo.x,-zo.y,-zo.z),Am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Am,i.coordinateSystem,i.reversedDepth)}},wa=class extends Zr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ta=class extends Jo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ud=class extends Sc{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wc=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ef="\\[\\]\\.:\\/",av=new RegExp("["+ef+"]","g"),tf="[^"+ef+"]",lv="[^"+ef.replace("\\.","")+"]",cv=/((?:WC+[\/:])*)/.source.replace("WC",tf),uv=/(WCOD+)?/.source.replace("WCOD",lv),hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),fv=new RegExp("^"+cv+uv+hv+dv+"$"),pv=["material","materials","bones","map"],Fd=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(av,"")}static parseTrackName(e){let t=fv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Fd;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fA=new Float32Array(1);var Em=new ot,Li=class{constructor(e,t,i=0,s=1/0){this.ray=new Ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Em.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Em),this}intersectObject(e,t=!0,i=[]){return Nd(e,this,i,t),i.sort(Cm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nd(e[s],this,i,t);return i.sort(Cm),i}};function Cm(n,e){return n.distance-e.distance}function Nd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Nd(r[o],e,t,!0)}}var Rm=new M,Xl=new M,Cr=new M,Rr=new M,Sd=new M,mv=new M,gv=new M,Ea=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rm.subVectors(e,this.start),Xl.subVectors(this.end,this.start);let i=Xl.dot(Xl),r=Xl.dot(Rm)/i;return t&&(r=Ke(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=mv,i=gv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Cr.subVectors(c,a),Rr.subVectors(u,l),Sd.subVectors(a,l);let h=Cr.dot(Cr),f=Rr.dot(Rr),d=Rr.dot(Sd);if(h<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,o=d/f,o=Ke(o,0,1);else{let p=Cr.dot(Sd);if(f<=s)o=0,r=Ke(-p/h,0,1);else{let x=Cr.dot(Rr),g=h*f-x*x;g!==0?r=Ke((x*d-p*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=Ke(-p/h,0,1)):o>1&&(o=1,r=Ke((x-p)/h,0,1))}}return t.copy(a).add(Cr.multiplyScalar(r)),i.copy(l).add(Rr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function nf(n,e,t,i){let s=xv(i);switch(t){case Xd:return n*e;case zc:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case Yd:return n*e*2/s.components*s.byteLength;case kc:return n*e*2/s.components*s.byteLength;case qd:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case Gc:return n*e*4/s.components*s.byteLength;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:case qc:return Math.max(n,16)*Math.max(e,8)/4;case Hc:case Xc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uu:case hu:case du:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fu:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(n){switch(n){case Bn:case kd:return{byteLength:1,components:1};case Jr:case Gd:case pi:return{byteLength:2,components:1};case Bc:case Oc:return{byteLength:2,components:4};case ss:case Nc:case si:return{byteLength:4,components:1};case Hd:case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
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
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
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
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
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
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Bv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qv=`#define PI 3.141592653589793
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
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
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vM=`PhysicalMaterial material;
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
#endif`,MM=`struct PhysicalMaterial {
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
}`,bM=`
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Ob=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,kb=`#define MATCAP
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
}`,Gb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,qb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,jb=`#define TOON
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
}`,Jb=`uniform float size;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,Qb=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Sv,alphahash_pars_fragment:wv,alphamap_fragment:Tv,alphamap_pars_fragment:Av,alphatest_fragment:Ev,alphatest_pars_fragment:Cv,aomap_fragment:Rv,aomap_pars_fragment:Pv,batching_pars_vertex:Iv,batching_vertex:Lv,begin_vertex:Dv,beginnormal_vertex:Uv,bsdfs:Fv,iridescence_fragment:Nv,bumpmap_pars_fragment:Bv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:kv,color_fragment:Gv,color_pars_fragment:Hv,color_pars_vertex:Wv,color_vertex:Xv,common:qv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:Zv,displacementmap_pars_vertex:jv,displacementmap_vertex:Jv,emissivemap_fragment:Kv,emissivemap_pars_fragment:$v,colorspace_fragment:Qv,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:mM,envmap_vertex:rM,fog_vertex:oM,fog_pars_vertex:aM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:hM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:fM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:xM,lights_phong_fragment:yM,lights_phong_pars_fragment:_M,lights_physical_fragment:vM,lights_physical_pars_fragment:MM,lights_fragment_begin:bM,lights_fragment_maps:SM,lights_fragment_end:wM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:CM,map_fragment:RM,map_pars_fragment:PM,map_particle_fragment:IM,map_particle_pars_fragment:LM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:UM,morphinstance_vertex:FM,morphcolor_vertex:NM,morphnormal_vertex:BM,morphtarget_pars_vertex:OM,morphtarget_vertex:zM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:GM,normal_pars_vertex:HM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:jM,opaque_fragment:JM,packing:KM,premultiplied_alpha_fragment:$M,project_vertex:QM,dithering_fragment:eb,dithering_pars_fragment:tb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:rb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:ub,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:fb,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:xb,uv_pars_fragment:yb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:Mb,background_vert:bb,background_frag:Sb,backgroundCube_vert:wb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:Eb,depth_vert:Cb,depth_frag:Rb,distanceRGBA_vert:Pb,distanceRGBA_frag:Ib,equirect_vert:Lb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Fb,meshbasic_vert:Nb,meshbasic_frag:Bb,meshlambert_vert:Ob,meshlambert_frag:zb,meshmatcap_vert:Vb,meshmatcap_frag:kb,meshnormal_vert:Gb,meshnormal_frag:Hb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:qb,meshphysical_frag:Yb,meshtoon_vert:Zb,meshtoon_frag:jb,points_vert:Jb,points_frag:Kb,shadow_vert:$b,shadow_frag:Qb,sprite_vert:e1,sprite_frag:t1},Ie={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},mi={basic:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:fn([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:fn([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:fn([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:fn([Ie.lights,Ie.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var _u={r:0,b:0,g:0},Vs=new an,n1=new ot;function i1(n,e,t,i,s,r,o){let a=new Ne(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,A=p(w);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,v){let A=p(v);A&&(A.isCubeTexture||A.mapping===Ra)?(u===void 0&&(u=new Be(new Je(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:zs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(v.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(Vs)),u.material.toneMapped=lt.getTransfer(A.colorSpace)!==yt,(h!==A||f!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Be(new $t(2,2),new vn({name:"BackgroundMaterial",uniforms:zs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(_u,$d(n)),i.buffers.color.setClear(_u.r,_u.g,_u.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:S}}function s1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,C,U,q,G){let V=!1,j=h(q,U,C);r!==j&&(r=j,c(r.object)),V=d(_,q,U,G),V&&p(_,q,U,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(_,C,U,q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,C,U){let q=U.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let V=G[C.id];V===void 0&&(V={},G[C.id]=V);let j=V[q];return j===void 0&&(j=f(l()),V[q]=j),j}function f(_){let C=[],U=[],q=[];for(let G=0;G<t;G++)C[G]=0,U[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:q,object:_,attributes:{},index:null}}function d(_,C,U,q){let G=r.attributes,V=C.attributes,j=0,te=U.getAttributes();for(let B in te)if(te[B].location>=0){let oe=G[B],ie=V[B];if(ie===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),oe===void 0||oe.attribute!==ie||ie&&oe.data!==ie.data)return!0;j++}return r.attributesNum!==j||r.index!==q}function p(_,C,U,q){let G={},V=C.attributes,j=0,te=U.getAttributes();for(let B in te)if(te[B].location>=0){let oe=V[B];oe===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor));let ie={};ie.attribute=oe,oe&&oe.data&&(ie.data=oe.data),G[B]=ie,j++}r.attributes=G,r.attributesNum=j,r.index=q}function x(){let _=r.newAttributes;for(let C=0,U=_.length;C<U;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let U=r.newAttributes,q=r.enabledAttributes,G=r.attributeDivisors;U[_]=1,q[_]===0&&(n.enableVertexAttribArray(_),q[_]=1),G[_]!==C&&(n.vertexAttribDivisor(_,C),G[_]=C)}function S(){let _=r.newAttributes,C=r.enabledAttributes;for(let U=0,q=C.length;U<q;U++)C[U]!==_[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function w(_,C,U,q,G,V,j){j===!0?n.vertexAttribIPointer(_,C,U,G,V):n.vertexAttribPointer(_,C,U,q,G,V)}function v(_,C,U,q){x();let G=q.attributes,V=U.getAttributes(),j=C.defaultAttributeValues;for(let te in V){let B=V[te];if(B.location>=0){let Z=G[te];if(Z===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){let oe=Z.normalized,ie=Z.itemSize,pe=e.get(Z);if(pe===void 0)continue;let ve=pe.buffer,Te=pe.type,ye=pe.bytesPerElement,F=Te===n.INT||Te===n.UNSIGNED_INT||Z.gpuType===Nc;if(Z.isInterleavedBufferAttribute){let H=Z.data,he=H.stride,X=Z.offset;if(H.isInstancedInterleavedBuffer){for(let K=0;K<B.locationSize;K++)m(B.location+K,H.meshPerAttribute);_.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<B.locationSize;K++)g(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let K=0;K<B.locationSize;K++)w(B.location+K,ie/B.locationSize,Te,oe,he*ye,(X+ie/B.locationSize*K)*ye,F)}else{if(Z.isInstancedBufferAttribute){for(let H=0;H<B.locationSize;H++)m(B.location+H,Z.meshPerAttribute);_.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let H=0;H<B.locationSize;H++)g(B.location+H);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let H=0;H<B.locationSize;H++)w(B.location+H,ie/B.locationSize,Te,oe,ie*ye,ie/B.locationSize*H*ye,F)}}else if(j!==void 0){let oe=j[te];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(B.location,oe);break;case 3:n.vertexAttrib3fv(B.location,oe);break;case 4:n.vertexAttrib4fv(B.location,oe);break;default:n.vertexAttrib1fv(B.location,oe)}}}}S()}function A(){D();for(let _ in i){let C=i[_];for(let U in C){let q=C[U];for(let G in q)u(q[G].object),delete q[G];delete C[U]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let U in C){let q=C[U];for(let G in q)u(q[G].object),delete q[G];delete C[U]}delete i[_.id]}function I(_){for(let C in i){let U=i[C];if(U[_.id]===void 0)continue;let q=U[_.id];for(let G in q)u(q[G].object),delete q[G];delete U[_.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function r1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==An&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==si&&!D)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:A,maxSamples:P}}function a1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let S=r?0:i,w=S*4,v=m.clippingState||null;l.value=v,v=u(p,f,w,d);for(let A=0;A!==w;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=d;w!==x;++w,v+=4)o.copy(h[w]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function l1(n){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=Bs:a===Uc&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jr||a===Uc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ic(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var eo=4,Tg=[.125,.215,.35,.446,.526,.582],Hs=20,sf=new Ta,Ag=new Ne,rf=null,of=0,af=0,lf=!1,Gs=(1+Math.sqrt(5))/2,Qr=1/Gs,Eg=[new M(-Gs,Qr,0),new M(Gs,Qr,0),new M(-Qr,0,Gs),new M(Qr,0,Gs),new M(0,Gs,-Qr),new M(0,Gs,Qr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],c1=new M,no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=c1}=r;rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,of,af),this._renderer.xr.enabled=lf,e.scissorTest=!1,vu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:pi,format:An,colorSpace:Rs,depthBuffer:!1},s=Cg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(r)),this._blurMaterial=h1(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,sf)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ag),h.toneMapping=Ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new pt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Be(new Je,x),m=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,m=!0):(x.color.copy(Ag),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let A=this._cubeSize;vu(s,v*A,w>2?A:0,A,A),h.setRenderTarget(s),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Bs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;vu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eg[(s-r-1)%Eg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Be(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Hs;g>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hs}`);let m=[],S=0;for(let I=0;I<Hs;++I){let D=I/x,b=Math.exp(-D*D/2);m.push(b),I===0?S+=b:I<g&&(S+=2*b)}for(let I=0;I<m.length;I++)m[I]=m[I]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let v=this._sizeLods[s],A=3*v*(s>w-eo?s-w+eo:0),P=4*(this._cubeSize-v);vu(t,A,P,3*v,2*v),l.setRenderTarget(t),l.render(h,sf)}};function u1(n){let e=[],t=[],i=[],s=n,r=n-eo+1+Tg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-eo?l=Tg[o-n+eo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,x=3,g=2,m=1,S=new Float32Array(x*p*d),w=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let P=0;P<d;P++){let I=P%3*2/3-1,D=P>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];S.set(b,x*p*P),w.set(f,g*p*P);let _=[P,P,P,P,P,P];v.set(_,m*p*P)}let A=new et;A.setAttribute("position",new Mt(S,x)),A.setAttribute("uv",new Mt(w,g)),A.setAttribute("faceIndex",new Mt(v,m)),e.push(A),s>eo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cg(n,e,t){let i=new wn(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function h1(n,e,t){let i=new Float32Array(Hs),s=new M(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Rg(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Pg(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function d1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===jr||l===Uc,u=l===Bs||l===Os;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new no(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new no(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function f1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function p1(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let w=0,v=S.length;w<v;w+=3){let A=S[w+0],P=S[w+1],I=S[w+2];f.push(A,P,P,I,I,A)}}else if(p!==void 0){let S=p.array;x=p.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let A=w+0,P=w+1,I=w+2;f.push(A,P,P,I,I,A)}}else return;let g=new(Kd(f)?jo:Is)(f,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function m1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function h(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let S=0;S<p;S++)m+=d[S]*x[S];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function g1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function x1(n,e,t){let i=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let P=new Float32Array(v*A*4*h),I=new Zo(P,v,A,h);I.type=si,I.needsUpdate=!0;let D=w*4;for(let _=0;_<h;_++){let C=g[_],U=m[_],q=S[_],G=v*A*4*_;for(let V=0;V<C.count;V++){let j=V*D;d===!0&&(s.fromBufferAttribute(C,V),P[G+j+0]=s.x,P[G+j+1]=s.y,P[G+j+2]=s.z,P[G+j+3]=0),p===!0&&(s.fromBufferAttribute(U,V),P[G+j+4]=s.x,P[G+j+5]=s.y,P[G+j+6]=s.z,P[G+j+7]=0),x===!0&&(s.fromBufferAttribute(q,V),P[G+j+8]=s.x,P[G+j+9]=s.y,P[G+j+10]=s.z,P[G+j+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new Se(v,A)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function y1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var jg=new dn,Ig=new oa(1,1),Jg=new Zo,Kg=new tc,$g=new Ko,Lg=[],Dg=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Ng=new Float32Array(4);function io(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Lg[s];if(r===void 0&&(r=new Float32Array(s),Lg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Su(n,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function M1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function S1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ng.set(i),n.uniformMatrix2fv(this.addr,!1,Ng),en(t,i)}}function w1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Fg.set(i),n.uniformMatrix3fv(this.addr,!1,Fg),en(t,i)}}function T1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ug.set(i),n.uniformMatrix4fv(this.addr,!1,Ug),en(t,i)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function P1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function I1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function U1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ig.compareFunction=Zd,r=Ig):r=jg,t.setTexture2D(e||r,s)}function F1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kg,s)}function N1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$g,s)}function B1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jg,s)}function O1(n){switch(n){case 5126:return _1;case 35664:return v1;case 35665:return M1;case 35666:return b1;case 35674:return S1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return E1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return I1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return B1}}function z1(n,e){n.uniform1fv(this.addr,e)}function V1(n,e){let t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function k1(n,e){let t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function G1(n,e){let t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function H1(n,e){let t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W1(n,e){let t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X1(n,e){let t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q1(n,e){n.uniform1iv(this.addr,e)}function Y1(n,e){n.uniform2iv(this.addr,e)}function Z1(n,e){n.uniform3iv(this.addr,e)}function j1(n,e){n.uniform4iv(this.addr,e)}function J1(n,e){n.uniform1uiv(this.addr,e)}function K1(n,e){n.uniform2uiv(this.addr,e)}function $1(n,e){n.uniform3uiv(this.addr,e)}function Q1(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jg,r[o])}function tS(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kg,r[o])}function nS(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$g,r[o])}function iS(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jg,r[o])}function sS(n){switch(n){case 5126:return z1;case 35664:return V1;case 35665:return k1;case 35666:return G1;case 35674:return H1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return Z1;case 35669:case 35673:return j1;case 5125:return J1;case 36294:return K1;case 36295:return $1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}var uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O1(t.type)}},hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}},df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},cf=/(\w+)(\])?(\[|\.)?/g;function Bg(n,e){n.seq.push(e),n.map[e.id]=e}function rS(n,e,t){let i=n.name,s=i.length;for(cf.lastIndex=0;;){let r=cf.exec(i),o=cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bg(t,c===void 0?new uf(a,n,e):new hf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new df(a),Bg(t,h)),t=h}}}var to=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);rS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Og(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var oS=37297,aS=0;function lS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var zg=new tt;function cS(n){lt._getMatrix(zg,lt.workingColorSpace,n);let e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lS(n.getShaderSource(e),a)}else return r}function uS(n,e){let t=cS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hS(n,e){let t;switch(e){case Qm:t="Linear";break;case eg:t="Reinhard";break;case tg:t="Cineon";break;case Dc:t="ACESFilmic";break;case ig:t="AgX";break;case sg:t="Neutral";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mu=new M;function dS(){lt.getLuminanceCoefficients(Mu);let n=Mu.x.toFixed(4),e=Mu.y.toFixed(4),t=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function pS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fa(n){return n!==""}function kg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(n){return n.replace(gS,yS)}var xS=new Map;function yS(n,e){let t=it[e];if(t===void 0){let i=xS.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(t)}var _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(n){return n.replace(_S,vS)}function vS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function MS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function bS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Os:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function TS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=MS(t),c=bS(t),u=SS(t),h=wS(t),f=TS(t),d=fS(t),p=pS(r),x=s.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(g=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?it.tonemapping_pars_fragment:"",t.toneMapping!==Ui?hS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=ff(o),o=kg(o,t),o=Gg(o,t),a=ff(a),a=kg(a,t),a=Gg(a,t),o=Hg(o),a=Hg(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+o,v=S+m+a,A=Og(s,s.VERTEX_SHADER,w),P=Og(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(P)||"",V=U.trim(),j=q.trim(),te=G.trim(),B=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,P);else{let oe=Vg(s,A,"vertex"),ie=Vg(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+oe+`
`+ie)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(j===""||te==="")&&(Z=!1);Z&&(C.diagnostics={runnable:B,programLog:V,vertexShader:{log:j,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(A),s.deleteShader(P),D=new to(s,x),b=mS(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,oS)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=P,this}var ES=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mf(e),t.set(e,i)),i}},mf=class{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}};function CS(n,e,t,i,s,r,o){let a=new Nr,l=new pf,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,C,U,q){let G=U.fog,V=q.geometry,j=b.isMeshStandardMaterial?U.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),B=te&&te.mapping===Ra?te.image.height:null,Z=p[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=oe!==void 0?oe.length:0,pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let ve,Te,ye,F;if(Z){let dt=mi[Z];ve=dt.vertexShader,Te=dt.fragmentShader}else ve=b.vertexShader,Te=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),F=l.getFragmentShaderID(b);let H=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),X=q.isInstancedMesh===!0,K=q.isBatchedMesh===!0,ae=!!b.map,Re=!!b.matcap,T=!!te,z=!!b.aoMap,O=!!b.lightMap,Y=!!b.bumpMap,N=!!b.normalMap,ce=!!b.displacementMap,ne=!!b.emissiveMap,fe=!!b.metalnessMap,Fe=!!b.roughnessMap,Ue=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,L=b.iridescence>0,J=b.sheen>0,le=b.transmission>0,$=Ue&&!!b.anisotropyMap,ge=R&&!!b.clearcoatMap,de=R&&!!b.clearcoatNormalMap,xe=R&&!!b.clearcoatRoughnessMap,_e=L&&!!b.iridescenceMap,ue=L&&!!b.iridescenceThicknessMap,Ae=J&&!!b.sheenColorMap,ze=J&&!!b.sheenRoughnessMap,Me=!!b.specularMap,Ee=!!b.specularColorMap,He=!!b.specularIntensityMap,k=le&&!!b.transmissionMap,we=le&&!!b.thicknessMap,Pe=!!b.gradientMap,De=!!b.alphaMap,be=b.alphaTest>0,me=!!b.alphaHash,Ge=!!b.extensions,Qe=Ui;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Qe=n.toneMapping);let At={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:Te,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:F,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:K,batchingColor:K&&q._colorsTexture!==null,instancing:X,instancingColor:X&&q.instanceColor!==null,instancingMorph:X&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Rs,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Re,envMap:T,envMapMode:T&&te.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:O,bumpMap:Y,normalMap:N,displacementMap:f&&ce,emissiveMap:ne,normalMapObjectSpace:N&&b.normalMapType===lg,normalMapTangentSpace:N&&b.normalMapType===xu,metalnessMap:fe,roughnessMap:Fe,anisotropy:Ue,anisotropyMap:$,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:de,clearcoatRoughnessMap:xe,dispersion:y,iridescence:L,iridescenceMap:_e,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:ze,specularMap:Me,specularColorMap:Ee,specularIntensityMap:He,transmission:le,transmissionMap:k,thicknessMap:we,gradientMap:Pe,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:be,alphaHash:me,combine:b.combine,mapUv:ae&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:O&&x(b.lightMap.channel),bumpMapUv:Y&&x(b.bumpMap.channel),normalMapUv:N&&x(b.normalMap.channel),displacementMapUv:ce&&x(b.displacementMap.channel),emissiveMapUv:ne&&x(b.emissiveMap.channel),metalnessMapUv:fe&&x(b.metalnessMap.channel),roughnessMapUv:Fe&&x(b.roughnessMap.channel),anisotropyMapUv:$&&x(b.anisotropyMap.channel),clearcoatMapUv:ge&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(b.sheenRoughnessMap.channel),specularMapUv:Me&&x(b.specularMap.channel),specularColorMapUv:Ee&&x(b.specularColorMap.channel),specularIntensityMapUv:He&&x(b.specularIntensityMap.channel),transmissionMapUv:k&&x(b.transmissionMap.channel),thicknessMapUv:we&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(N||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(ae||De),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ht,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||K)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(_,b),w(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function w(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let _=p[b.type],C;if(_){let U=mi[_];C=yu.clone(U.uniforms)}else C=b.uniforms;return C}function A(b,_){let C;for(let U=0,q=u.length;U<q;U++){let G=u[U];if(G.cacheKey===_){C=G,++C.usedTimes;break}}return C===void 0&&(C=new AS(n,_,b,r),u.push(C)),C}function P(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function I(b){l.remove(b)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:D}}function RS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function PS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||PS),i.length>1&&i.sort(f||Xg),s.length>1&&s.sort(f||Xg)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function IS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new qg,n.set(i,[o])):s>=r.length?(o=new qg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ne};break;case"SpotLight":t={position:new M,direction:new M,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function DS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var US=0;function FS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NS(n){let e=new LS,t=DS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new ot,o=new ot;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,S=0,w=0,v=0,A=0,P=0,I=0;c.sort(FS);for(let b=0,_=c.length;b<_;b++){let C=c[b],U=C.color,q=C.intensity,G=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*q,h+=U.g*q,f+=U.b*q;else if(C.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(C.sh.coefficients[j],q);I++}else if(C.isDirectionalLight){let j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=C.shadow.matrix,S++}i.directional[d]=j,d++}else if(C.isSpotLight){let j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(U).multiplyScalar(q),j.distance=G,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,i.spot[x]=j;let te=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,te.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[x]=te.matrix,C.castShadow){let B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=V,v++}x++}else if(C.isRectAreaLight){let j=e.get(C);j.color.copy(U).multiplyScalar(q),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=j,g++}else if(C.isPointLight){let j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let te=C.shadow,B=t.get(C);B.shadowIntensity=te.intensity,B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,B.shadowCameraNear=te.camera.near,B.shadowCameraFar=te.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=C.shadow.matrix,w++}i.point[p]=j,p++}else if(C.isHemisphereLight){let j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(q),j.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[m]=j,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,D.directionalLength=d,D.pointLength=p,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=I,i.version=US++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let w=c[m];if(w.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(w.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Yg(n){let e=new NS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yg(n),e.set(s,[a])):r>=o.length?(a=new Yg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`;function VS(n,e,t){let i=new kr,s=new Se,r=new Se,o=new at,a=new dc({depthPacking:ag}),l=new fc,c={},u=t.maxTextureSize,h={[ii]:ln,[ln]:ii,[Ht]:Ht},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:OS,fragmentShader:zS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let m=this.type;this.render=function(P,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let b=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Di),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=m!==fi&&this.type===fi,G=m===fi&&this.type!==fi;for(let V=0,j=P.length;V<j;V++){let te=P[V],B=te.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();if(s.multiply(Z),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y)),B.map===null||q===!0||G===!0){let ie=this.type!==fi?{minFilter:rn,magFilter:rn}:{};B.map!==null&&B.map.dispose(),B.map=new wn(s.x,s.y,ie),B.map.texture.name=te.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let oe=B.getViewportCount();for(let ie=0;ie<oe;ie++){let pe=B.getViewport(ie);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o),B.updateMatrices(te,ie),i=B.getFrustum(),v(I,D,B.camera,te,this.type)}B.isPointLightShadow!==!0&&this.type===fi&&S(B,D),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,_,C)};function S(P,I){let D=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(I,null,D,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(I,null,D,d,x,null)}function w(P,I,D,b){let _=null,C=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)_=C;else if(_=D.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=_.uuid,q=I.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let V=G[q];V===void 0&&(V=_.clone(),G[q]=V,I.addEventListener("dispose",A)),_=V}if(_.visible=I.visible,_.wireframe=I.wireframe,b===fi?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let U=n.properties.get(_);U.light=D}return _}function v(P,I,D,b,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===fi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);let q=e.update(P),G=P.material;if(Array.isArray(G)){let V=q.groups;for(let j=0,te=V.length;j<te;j++){let B=V[j],Z=G[B.materialIndex];if(Z&&Z.visible){let oe=w(P,Z,b,_);P.onBeforeShadow(n,P,I,D,q,oe,B),n.renderBufferDirect(D,null,q,oe,P,B),P.onAfterShadow(n,P,I,D,q,oe,B)}}}else if(G.visible){let V=w(P,G,b,_);P.onBeforeShadow(n,P,I,D,q,V,null),n.renderBufferDirect(D,null,q,V,P,null),P.onAfterShadow(n,P,I,D,q,V,null)}}let U=P.children;for(let q=0,G=U.length;q<G;q++)v(U[q],I,D,b,_)}function A(P){P.target.removeEventListener("dispose",A);for(let D in c){let b=c[D],_=P.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var kS={[Tc]:Ac,[Ec]:Pc,[Cc]:Ic,[Cs]:Rc,[Ac]:Tc,[Pc]:Ec,[Ic]:Cc,[Rc]:Cs};function GS(n,e){function t(){let k=!1,we=new at,Pe=null,De=new at(0,0,0,0);return{setMask:function(be){Pe!==be&&!k&&(n.colorMask(be,be,be,be),Pe=be)},setLocked:function(be){k=be},setClear:function(be,me,Ge,Qe,At){At===!0&&(be*=Qe,me*=Qe,Ge*=Qe),we.set(be,me,Ge,Qe),De.equals(we)===!1&&(n.clearColor(be,me,Ge,Qe),De.copy(we))},reset:function(){k=!1,Pe=null,De.set(-1,0,0,0)}}}function i(){let k=!1,we=!1,Pe=null,De=null,be=null;return{setReversed:function(me){if(we!==me){let Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=me;let Qe=be;be=null,this.setClear(Qe)}},getReversed:function(){return we},setTest:function(me){me?H(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(me){Pe!==me&&!k&&(n.depthMask(me),Pe=me)},setFunc:function(me){if(we&&(me=kS[me]),De!==me){switch(me){case Tc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case Ec:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=me}},setLocked:function(me){k=me},setClear:function(me){be!==me&&(we&&(me=1-me),n.clearDepth(me),be=me)},reset:function(){k=!1,Pe=null,De=null,be=null,we=!1}}}function s(){let k=!1,we=null,Pe=null,De=null,be=null,me=null,Ge=null,Qe=null,At=null;return{setTest:function(dt){k||(dt?H(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(dt){we!==dt&&!k&&(n.stencilMask(dt),we=dt)},setFunc:function(dt,Mi,li){(Pe!==dt||De!==Mi||be!==li)&&(n.stencilFunc(dt,Mi,li),Pe=dt,De=Mi,be=li)},setOp:function(dt,Mi,li){(me!==dt||Ge!==Mi||Qe!==li)&&(n.stencilOp(dt,Mi,li),me=dt,Ge=Mi,Qe=li)},setLocked:function(dt){k=dt},setClear:function(dt){At!==dt&&(n.clearStencil(dt),At=dt)},reset:function(){k=!1,we=null,Pe=null,De=null,be=null,me=null,Ge=null,Qe=null,At=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,S=null,w=null,v=null,A=null,P=null,I=new Ne(0,0,0),D=0,b=!1,_=null,C=null,U=null,q=null,G=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,te=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(B)[1]),j=te>=1):B.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),j=te>=2);let Z=null,oe={},ie=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ve=new at().fromArray(ie),Te=new at().fromArray(pe);function ye(k,we,Pe,De){let be=new Uint8Array(4),me=n.createTexture();n.bindTexture(k,me),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Pe;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(we+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return me}let F={};F[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(Cs),Y(!1),N(Bd),H(n.CULL_FACE),z(Di);function H(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function he(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function X(k,we){return h[k]!==we?(n.bindFramebuffer(k,we),h[k]=we,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=we),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=we),!0):!1}function K(k,we){let Pe=d,De=!1;if(k){Pe=f.get(we),Pe===void 0&&(Pe=[],f.set(we,Pe));let be=k.textures;if(Pe.length!==be.length||Pe[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ge=be.length;me<Ge;me++)Pe[me]=n.COLOR_ATTACHMENT0+me;Pe.length=be.length,De=!0}}else Pe[0]!==n.BACK&&(Pe[0]=n.BACK,De=!0);De&&n.drawBuffers(Pe)}function ae(k){return p!==k?(n.useProgram(k),p=k,!0):!1}let Re={[es]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Fm]:n.FUNC_REVERSE_SUBTRACT};Re[Nm]=n.MIN,Re[Bm]=n.MAX;let T={[Om]:n.ZERO,[zm]:n.ONE,[Vm]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[qm]:n.SRC_ALPHA_SATURATE,[Wm]:n.DST_COLOR,[Gm]:n.DST_ALPHA,[km]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[Xm]:n.ONE_MINUS_DST_COLOR,[Hm]:n.ONE_MINUS_DST_ALPHA,[Ym]:n.CONSTANT_COLOR,[Zm]:n.ONE_MINUS_CONSTANT_COLOR,[jm]:n.CONSTANT_ALPHA,[Jm]:n.ONE_MINUS_CONSTANT_ALPHA};function z(k,we,Pe,De,be,me,Ge,Qe,At,dt){if(k===Di){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(H(n.BLEND),x=!0),k!==Dm){if(k!==g||dt!==b){if((m!==es||v!==es)&&(n.blendEquation(n.FUNC_ADD),m=es,v=es),dt)switch(k){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qn:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Od:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,w=null,A=null,P=null,I.set(0,0,0),D=0,g=k,b=dt}return}be=be||we,me=me||Pe,Ge=Ge||De,(we!==m||be!==v)&&(n.blendEquationSeparate(Re[we],Re[be]),m=we,v=be),(Pe!==S||De!==w||me!==A||Ge!==P)&&(n.blendFuncSeparate(T[Pe],T[De],T[me],T[Ge]),S=Pe,w=De,A=me,P=Ge),(Qe.equals(I)===!1||At!==D)&&(n.blendColor(Qe.r,Qe.g,Qe.b,At),I.copy(Qe),D=At),g=k,b=!1}function O(k,we){k.side===Ht?he(n.CULL_FACE):H(n.CULL_FACE);let Pe=k.side===ln;we&&(Pe=!Pe),Y(Pe),k.blending===Es&&k.transparent===!1?z(Di):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let De=k.stencilWrite;a.setTest(De),De&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function N(k){k!==Pm?(H(n.CULL_FACE),k!==C&&(k===Bd?n.cullFace(n.BACK):k===Im?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),C=k}function ce(k){k!==U&&(j&&n.lineWidth(k),U=k)}function ne(k,we,Pe){k?(H(n.POLYGON_OFFSET_FILL),(q!==we||G!==Pe)&&(n.polygonOffset(we,Pe),q=we,G=Pe)):he(n.POLYGON_OFFSET_FILL)}function fe(k){k?H(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Fe(k){k===void 0&&(k=n.TEXTURE0+V-1),Z!==k&&(n.activeTexture(k),Z=k)}function Ue(k,we,Pe){Pe===void 0&&(Z===null?Pe=n.TEXTURE0+V-1:Pe=Z);let De=oe[Pe];De===void 0&&(De={type:void 0,texture:void 0},oe[Pe]=De),(De.type!==k||De.texture!==we)&&(Z!==Pe&&(n.activeTexture(Pe),Z=Pe),n.bindTexture(k,we||F[k]),De.type=k,De.texture=we)}function R(){let k=oe[Z];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(k){ve.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function ze(k){Te.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Me(k,we){let Pe=c.get(we);Pe===void 0&&(Pe=new WeakMap,c.set(we,Pe));let De=Pe.get(k);De===void 0&&(De=n.getUniformBlockIndex(we,k.name),Pe.set(k,De))}function Ee(k,we){let De=c.get(we).get(k);l.get(we)!==De&&(n.uniformBlockBinding(we,De,k.__bindingPointIndex),l.set(we,De))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,oe={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,S=null,w=null,v=null,A=null,P=null,I=new Ne(0,0,0),D=0,b=!1,_=null,C=null,U=null,q=null,G=null,ve.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:he,bindFramebuffer:X,drawBuffers:K,useProgram:ae,setBlending:z,setMaterial:O,setFlipSided:Y,setCullFace:N,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:fe,activeTexture:Fe,bindTexture:Ue,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:_e,texImage3D:ue,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:de,texStorage3D:xe,texSubImage2D:J,texSubImage3D:le,compressedTexSubImage2D:$,compressedTexSubImage3D:ge,scissor:Ae,viewport:ze,reset:He}}function HS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return d?new OffscreenCanvas(R,y):Dr("canvas")}function x(R,y,L){let J=1,le=Ue(R);if((le.width>L||le.height>L)&&(J=L/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(J*le.width),ge=Math.floor(J*le.height);h===void 0&&(h=p($,ge));let de=y?p($,ge):h;return de.width=$,de.height=ge,de.getContext("2d").drawImage(R,0,0,$,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+$+"x"+ge+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,L,J,le=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===n.RED&&(L===n.FLOAT&&($=n.R32F),L===n.HALF_FLOAT&&($=n.R16F),L===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.R8UI),L===n.UNSIGNED_SHORT&&($=n.R16UI),L===n.UNSIGNED_INT&&($=n.R32UI),L===n.BYTE&&($=n.R8I),L===n.SHORT&&($=n.R16I),L===n.INT&&($=n.R32I)),y===n.RG&&(L===n.FLOAT&&($=n.RG32F),L===n.HALF_FLOAT&&($=n.RG16F),L===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RG8UI),L===n.UNSIGNED_SHORT&&($=n.RG16UI),L===n.UNSIGNED_INT&&($=n.RG32UI),L===n.BYTE&&($=n.RG8I),L===n.SHORT&&($=n.RG16I),L===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGB8UI),L===n.UNSIGNED_SHORT&&($=n.RGB16UI),L===n.UNSIGNED_INT&&($=n.RGB32UI),L===n.BYTE&&($=n.RGB8I),L===n.SHORT&&($=n.RGB16I),L===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGBA8UI),L===n.UNSIGNED_SHORT&&($=n.RGBA16UI),L===n.UNSIGNED_INT&&($=n.RGBA32UI),L===n.BYTE&&($=n.RGBA8I),L===n.SHORT&&($=n.RGBA16I),L===n.INT&&($=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),y===n.RGBA){let ge=le?qo:lt.getTransfer(J);L===n.FLOAT&&($=n.RGBA32F),L===n.HALF_FLOAT&&($=n.RGBA16F),L===n.UNSIGNED_BYTE&&($=ge===yt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(R,y){let L;return R?y===null||y===ss||y===Kr?L=n.DEPTH24_STENCIL8:y===si?L=n.DEPTH32F_STENCIL8:y===Jr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ss||y===Kr?L=n.DEPTH_COMPONENT24:y===si?L=n.DEPTH_COMPONENT32F:y===Jr&&(L=n.DEPTH_COMPONENT16),L}function A(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){let y=R.target;y.removeEventListener("dispose",P),D(y),y.isVideoTexture&&u.delete(y)}function I(R){let y=R.target;y.removeEventListener("dispose",I),_(y)}function D(R){let y=i.get(R);if(y.__webglInit===void 0)return;let L=R.source,J=f.get(L);if(J){let le=J[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(R),Object.keys(J).length===0&&f.delete(L)}i.remove(R)}function b(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let L=R.source,J=f.get(L);delete J[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let le=0;le<y.__webglFramebuffer[J].length;le++)n.deleteFramebuffer(y.__webglFramebuffer[J][le]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=R.textures;for(let J=0,le=L.length;J<le;J++){let $=i.get(L[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(L[J])}i.remove(R)}let C=0;function U(){C=0}function q(){let R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function G(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function V(R,y){let L=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(L,R,y);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function j(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){F(L,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function te(R,y){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){F(L,R,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function B(R,y){let L=i.get(R);if(R.version>0&&L.__version!==R.version){H(L,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let Z={[hi]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},oe={[rn]:n.NEAREST,[rg]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Fc]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},ie={[cg]:n.NEVER,[mg]:n.ALWAYS,[ug]:n.LESS,[Zd]:n.LEQUAL,[hg]:n.EQUAL,[pg]:n.GEQUAL,[dg]:n.GREATER,[fg]:n.NOTEQUAL};function pe(R,y){if(y.type===si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Fc||y.magFilter===Pa||y.magFilter===Tn||y.minFilter===on||y.minFilter===Fc||y.minFilter===Pa||y.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Pa&&y.minFilter!==Tn||y.type===si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ve(R,y){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));let J=y.source,le=f.get(J);le===void 0&&(le={},f.set(J,le));let $=G(y);if($!==R.__cacheKey){le[$]===void 0&&(le[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),le[$].usedTimes++;let ge=le[R.__cacheKey];ge!==void 0&&(le[R.__cacheKey].usedTimes--,ge.usedTimes===0&&b(y)),R.__cacheKey=$,R.__webglTexture=le[$].texture}return L}function Te(R,y,L){return Math.floor(Math.floor(R/L)/y)}function ye(R,y,L,J){let $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,J,y.data);else{$.sort((ue,Ae)=>ue.start-Ae.start);let ge=0;for(let ue=1;ue<$.length;ue++){let Ae=$[ge],ze=$[ue],Me=Ae.start+Ae.count,Ee=Te(ze.start,y.width,4),He=Te(Ae.start,y.width,4);ze.start<=Me+1&&Ee===He&&Te(ze.start+ze.count-1,y.width,4)===Ee?Ae.count=Math.max(Ae.count,ze.start+ze.count-Ae.start):(++ge,$[ge]=ze)}$.length=ge+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Ae=$.length;ue<Ae;ue++){let ze=$[ue],Me=Math.floor(ze.start/4),Ee=Math.ceil(ze.count/4),He=Me%y.width,k=Math.floor(Me/y.width),we=Ee,Pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,He,k,we,Pe,L,J,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function F(R,y,L){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let le=ve(R,y),$=y.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+L);let ge=i.get($);if($.version!==ge.__version||le===!0){t.activeTexture(n.TEXTURE0+L);let de=lt.getPrimaries(lt.workingColorSpace),xe=y.colorSpace===Fi?null:lt.getPrimaries(y.colorSpace),_e=y.colorSpace===Fi||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ue=x(y.image,!1,s.maxTextureSize);ue=Fe(y,ue);let Ae=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Me=w(y.internalFormat,Ae,ze,y.colorSpace,y.isVideoTexture);pe(J,y);let Ee,He=y.mipmaps,k=y.isVideoTexture!==!0,we=ge.__version===void 0||le===!0,Pe=$.dataReady,De=A(y,ue);if(y.isDepthTexture)Me=v(y.format===$r,y.type),we&&(k?t.texStorage2D(n.TEXTURE_2D,1,Me,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ae,ze,null));else if(y.isDataTexture)if(He.length>0){k&&we&&t.texStorage2D(n.TEXTURE_2D,De,Me,He[0].width,He[0].height);for(let be=0,me=He.length;be<me;be++)Ee=He[be],k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ae,ze,Ee.data);y.generateMipmaps=!1}else k?(we&&t.texStorage2D(n.TEXTURE_2D,De,Me,ue.width,ue.height),Pe&&ye(y,ue,Ae,ze)):t.texImage2D(n.TEXTURE_2D,0,Me,ue.width,ue.height,0,Ae,ze,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Me,He[0].width,He[0].height,ue.depth);for(let be=0,me=He.length;be<me;be++)if(Ee=He[be],y.format!==An)if(Ae!==null)if(k){if(Pe)if(y.layerUpdates.size>0){let Ge=nf(Ee.width,Ee.height,y.format,y.type);for(let Qe of y.layerUpdates){let At=Ee.data.subarray(Qe*Ge/Ee.data.BYTES_PER_ELEMENT,(Qe+1)*Ge/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Qe,Ee.width,Ee.height,1,Ae,At)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,ue.depth,Ae,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Me,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,ue.depth,Ae,ze,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Me,Ee.width,Ee.height,ue.depth,0,Ae,ze,Ee.data)}else{k&&we&&t.texStorage2D(n.TEXTURE_2D,De,Me,He[0].width,He[0].height);for(let be=0,me=He.length;be<me;be++)Ee=He[be],y.format!==An?Ae!==null?k?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Ae,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,be,Me,Ee.width,Ee.height,0,Ae,ze,Ee.data)}else if(y.isDataArrayTexture)if(k){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Me,ue.width,ue.height,ue.depth),Pe)if(y.layerUpdates.size>0){let be=nf(ue.width,ue.height,y.format,y.type);for(let me of y.layerUpdates){let Ge=ue.data.subarray(me*be/ue.data.BYTES_PER_ELEMENT,(me+1)*be/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ue.width,ue.height,1,Ae,ze,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ze,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ue.width,ue.height,ue.depth,0,Ae,ze,ue.data);else if(y.isData3DTexture)k?(we&&t.texStorage3D(n.TEXTURE_3D,De,Me,ue.width,ue.height,ue.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ue.width,ue.height,ue.depth,0,Ae,ze,ue.data);else if(y.isFramebufferTexture){if(we)if(k)t.texStorage2D(n.TEXTURE_2D,De,Me,ue.width,ue.height);else{let be=ue.width,me=ue.height;for(let Ge=0;Ge<De;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Me,be,me,0,Ae,ze,null),be>>=1,me>>=1}}else if(He.length>0){if(k&&we){let be=Ue(He[0]);t.texStorage2D(n.TEXTURE_2D,De,Me,be.width,be.height)}for(let be=0,me=He.length;be<me;be++)Ee=He[be],k?Pe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ae,ze,Ee):t.texImage2D(n.TEXTURE_2D,be,Me,Ae,ze,Ee);y.generateMipmaps=!1}else if(k){if(we){let be=Ue(ue);t.texStorage2D(n.TEXTURE_2D,De,Me,be.width,be.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ze,ue)}else t.texImage2D(n.TEXTURE_2D,0,Me,Ae,ze,ue);g(y)&&m(J),ge.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function H(R,y,L){if(y.image.length!==6)return;let J=ve(R,y),le=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+L);let $=i.get(le);if(le.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+L);let ge=lt.getPrimaries(lt.workingColorSpace),de=y.colorSpace===Fi?null:lt.getPrimaries(y.colorSpace),xe=y.colorSpace===Fi||ge===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!_e&&!ue?Ae[me]=x(y.image[me],!0,s.maxCubemapSize):Ae[me]=ue?y.image[me].image:y.image[me],Ae[me]=Fe(y,Ae[me]);let ze=Ae[0],Me=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),He=w(y.internalFormat,Me,Ee,y.colorSpace),k=y.isVideoTexture!==!0,we=$.__version===void 0||J===!0,Pe=le.dataReady,De=A(y,ze);pe(n.TEXTURE_CUBE_MAP,y);let be;if(_e){k&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,He,ze.width,ze.height);for(let me=0;me<6;me++){be=Ae[me].mipmaps;for(let Ge=0;Ge<be.length;Ge++){let Qe=be[Ge];y.format!==An?Me!==null?k?Pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,Qe.width,Qe.height,Me,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,He,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,Qe.width,Qe.height,Me,Ee,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,He,Qe.width,Qe.height,0,Me,Ee,Qe.data)}}}else{if(be=y.mipmaps,k&&we){be.length>0&&De++;let me=Ue(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,He,me.width,me.height)}for(let me=0;me<6;me++)if(ue){k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Me,Ee,Ae[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Ae[me].width,Ae[me].height,0,Me,Ee,Ae[me].data);for(let Ge=0;Ge<be.length;Ge++){let At=be[Ge].image[me].image;k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,At.width,At.height,Me,Ee,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,He,At.width,At.height,0,Me,Ee,At.data)}}else{k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me,Ee,Ae[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,Me,Ee,Ae[me]);for(let Ge=0;Ge<be.length;Ge++){let Qe=be[Ge];k?Pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,Me,Ee,Qe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,He,Me,Ee,Qe.image[me])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),$.__version=le.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,L,J,le,$){let ge=r.convert(L.format,L.colorSpace),de=r.convert(L.type),xe=w(L.internalFormat,ge,de,L.colorSpace),_e=i.get(y),ue=i.get(L);if(ue.__renderTarget=y,!_e.__hasExternalTextures){let Ae=Math.max(1,y.width>>$),ze=Math.max(1,y.height>>$);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,$,xe,Ae,ze,y.depth,0,ge,de,null):t.texImage2D(le,$,xe,Ae,ze,0,ge,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,le,ue.__webglTexture,0,ce(y)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,le,ue.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function X(R,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let J=y.depthTexture,le=J&&J.isDepthTexture?J.type:null,$=v(y.stencilBuffer,le),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=ce(y);ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,$,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,R)}else{let J=y.textures;for(let le=0;le<J.length;le++){let $=J[le],ge=r.convert($.format,$.colorSpace),de=r.convert($.type),xe=w($.internalFormat,ge,de,$.colorSpace),_e=ce(y);L&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,xe,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let le=J.__webglTexture,$=ce(y);if(y.depthTexture.format===Ir)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(y.depthTexture.format===$r)ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ae(R){let y=i.get(R),L=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=J}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?K(y.__webglFramebuffer[0],R):K(y.__webglFramebuffer,R)}else if(L){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),X(y.__webglDepthbuffer[J],R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,$)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),X(y.__webglDepthbuffer,R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,y,L){let J=i.get(R);y!==void 0&&he(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ae(R)}function T(R){let y=R.texture,L=i.get(R),J=i.get(y);R.addEventListener("dispose",I);let le=R.textures,$=R.isWebGLCubeRenderTarget===!0,ge=le.length>1;if(ge||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),$){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let xe=0;xe<y.mipmaps.length;xe++)L.__webglFramebuffer[de][xe]=n.createFramebuffer()}else L.__webglFramebuffer[de]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)L.__webglFramebuffer[de]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ge)for(let de=0,xe=le.length;de<xe;de++){let _e=i.get(le[de]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){let xe=le[de];L.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[de]);let _e=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),Ae=w(xe.internalFormat,_e,ue,xe.colorSpace,R.isXRRenderTarget===!0),ze=ce(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,L.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),X(L.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),pe(n.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(L.__webglFramebuffer[de][xe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else he(L.__webglFramebuffer[de],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let de=0,xe=le.length;de<xe;de++){let _e=le[de],ue=i.get(_e),Ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),pe(Ae,_e),he(L.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+de,Ae,0),g(_e)&&m(Ae)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),pe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(L.__webglFramebuffer[xe],R,y,n.COLOR_ATTACHMENT0,de,xe);else he(L.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,de,0);g(y)&&m(de),t.unbindTexture()}R.depthBuffer&&ae(R)}function z(R){let y=R.textures;for(let L=0,J=y.length;L<J;L++){let le=y[L];if(g(le)){let $=S(R),ge=i.get(le).__webglTexture;t.bindTexture($,ge),m($),t.unbindTexture()}}}let O=[],Y=[];function N(R){if(R.samples>0){if(ne(R)===!1){let y=R.textures,L=R.width,J=R.height,le=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),de=y.length>1;if(de)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ue=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,J,0,0,L,J,le,n.NEAREST),l===!0&&(O.length=0,Y.length=0,O.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(O.push($),Y.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ue=i.get(y[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ce(R){return Math.min(s.maxSamples,R.samples)}function ne(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Fe(R,y){let L=R.colorSpace,J=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==Rs&&L!==Fi&&(lt.getTransfer(L)===yt?(J!==An||le!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=T,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ne}function WS(n,e){function t(i,s=Fi){let r,o=lt.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kd)return n.BYTE;if(i===Gd)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Xd)return n.ALPHA;if(i===qd)return n.RGB;if(i===An)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Yd)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Ia||i===La||i===Da||i===Ua)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hc||i===Wc||i===Xc||i===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===Zc||i===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yc||i===Zc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Kc||i===$c||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===iu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===su)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ru)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ou)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===au)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uu||i===hu||i===du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===uu)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fu||i===pu||i===mu||i===gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:XS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends Ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new gf,m={},S=t.getContextAttributes(),w=null,v=null,A=[],P=[],I=new Se,D=null,b=new kt;b.viewport=new at;let _=new kt;_.viewport=new at;let C=[b,_],U=new wc,q=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let H=A[F];return H===void 0&&(H=new Br,A[F]=H),H.getTargetRaySpace()},this.getControllerGrip=function(F){let H=A[F];return H===void 0&&(H=new Br,A[F]=H),H.getGripSpace()},this.getHand=function(F){let H=A[F];return H===void 0&&(H=new Br,A[F]=H),H.getHandSpace()};function V(F){let H=P.indexOf(F.inputSource);if(H===-1)return;let he=A[H];he!==void 0&&(he.update(F.inputSource,F.frame,c||o),he.dispatchEvent({type:F.type,data:F.inputSource}))}function j(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",te);for(let F=0;F<A.length;F++){let H=P[F];H!==null&&(P[F]=null,A[F].disconnect(H))}q=null,G=null,g.reset();for(let F in m)delete m[F];e.setRenderTarget(w),d=null,f=null,h=null,s=null,v=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",j),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,X=null,K=null;S.depth&&(K=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?$r:Ir,X=S.stencil?Kr:ss);let ae={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new wn(f.textureWidth,f.textureHeight,{format:An,type:Bn,depthTexture:new oa(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wn(d.framebufferWidth,d.framebufferHeight,{format:An,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(F){for(let H=0;H<F.removed.length;H++){let he=F.removed[H],X=P.indexOf(he);X>=0&&(P[X]=null,A[X].disconnect(he))}for(let H=0;H<F.added.length;H++){let he=F.added[H],X=P.indexOf(he);if(X===-1){for(let ae=0;ae<A.length;ae++)if(ae>=P.length){P.push(he),X=ae;break}else if(P[ae]===null){P[ae]=he,X=ae;break}if(X===-1)break}let K=A[X];K&&K.connect(he)}}let B=new M,Z=new M;function oe(F,H,he){B.setFromMatrixPosition(H.matrixWorld),Z.setFromMatrixPosition(he.matrixWorld);let X=B.distanceTo(Z),K=H.projectionMatrix.elements,ae=he.projectionMatrix.elements,Re=K[14]/(K[10]-1),T=K[14]/(K[10]+1),z=(K[9]+1)/K[5],O=(K[9]-1)/K[5],Y=(K[8]-1)/K[0],N=(ae[8]+1)/ae[0],ce=Re*Y,ne=Re*N,fe=X/(-Y+N),Fe=fe*-Y;if(H.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Fe),F.translateZ(fe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),K[10]===-1)F.projectionMatrix.copy(H.projectionMatrix),F.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let Ue=Re+fe,R=T+fe,y=ce-Fe,L=ne+(X-Fe),J=z*T/R*Ue,le=O*T/R*Ue;F.projectionMatrix.makePerspective(y,L,J,le,Ue,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ie(F,H){H===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(H.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let H=F.near,he=F.far;g.texture!==null&&(g.depthNear>0&&(H=g.depthNear),g.depthFar>0&&(he=g.depthFar)),U.near=_.near=b.near=H,U.far=_.far=b.far=he,(q!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),q=U.near,G=U.far),U.layers.mask=F.layers.mask|6,b.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;let X=F.parent,K=U.cameras;ie(U,X);for(let ae=0;ae<K.length;ae++)ie(K[ae],X);K.length===2?oe(U,b,_):U.projectionMatrix.copy(b.projectionMatrix),pe(F,U,X)};function pe(F,H,he){he===null?F.matrix.copy(H.matrixWorld):(F.matrix.copy(he.matrixWorld),F.matrix.invert(),F.matrix.multiply(H.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(H.projectionMatrix),F.projectionMatrixInverse.copy(H.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Lr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(F){return m[F]};let ve=null;function Te(F,H){if(u=H.getViewerPose(c||o),p=H,u!==null){let he=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let X=!1;he.length!==U.cameras.length&&(U.cameras.length=0,X=!0);for(let T=0;T<he.length;T++){let z=he[T],O=null;if(d!==null)O=d.getViewport(z);else{let N=h.getViewSubImage(f,z);O=N.viewport,T===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let Y=C[T];Y===void 0&&(Y=new kt,Y.layers.enable(T),Y.viewport=new at,C[T]=Y),Y.matrix.fromArray(z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(z.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(O.x,O.y,O.width,O.height),T===0&&(U.matrix.copy(Y.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),X===!0&&U.cameras.push(Y)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let T=h.getDepthInformation(he[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(K&&K.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let T=0;T<he.length;T++){let z=he[T].camera;if(z){let O=m[z];O||(O=new aa,m[z]=O);let Y=h.getCameraImage(z);O.sourceTexture=Y}}}}for(let he=0;he<A.length;he++){let X=P[he],K=A[he];X!==null&&K!==void 0&&K.update(X,H,c||o)}ve&&ve(F,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),p=null}let ye=new Zg;ye.setAnimationLoop(Te),this.setAnimationLoop=function(F){ve=F},this.dispose=function(){}}},ks=new an,YS=new ot;function ZS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,$d(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,w,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,v=S.envMapRotation;w&&(g.envMap.value=w,ks.copy(v),ks.x*=-1,ks.y*=-1,ks.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(YS.makeRotationFromEuler(ks)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let v=w.program;i.uniformBlockBinding(S,v)}function c(S,w){let v=s[S.id];v===void 0&&(p(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",g));let A=w.program;i.updateUBOMapping(S,A);let P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function u(S){let w=h();S.__bindingPointIndex=w;let v=n.createBuffer(),A=S.__size,P=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let w=s[S.id],v=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,I=v.length;P<I;P++){let D=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,_=D.length;b<_;b++){let C=D[b];if(d(C,P,b,A)===!0){let U=C.__offset,q=Array.isArray(C.value)?C.value:[C.value],G=0;for(let V=0;V<q.length;V++){let j=q[V],te=x(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+G,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,w,v,A){let P=S.value,I=w+"_"+v;if(A[I]===void 0)return typeof P=="number"||typeof P=="boolean"?A[I]=P:A[I]=P.clone(),!0;{let D=A[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return A[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function p(S){let w=S.uniforms,v=0,A=16;for(let I=0,D=w.length;I<D;I++){let b=Array.isArray(w[I])?w[I]:[w[I]];for(let _=0,C=b.length;_<C;_++){let U=b[_],q=Array.isArray(U.value)?U.value:[U.value];for(let G=0,V=q.length;G<V;G++){let j=q[G],te=x(j),B=v%A,Z=B%te.boundary,oe=B+Z;v+=Z,oe!==0&&A-oe<te.storage&&(v+=A-oe),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=te.storage}}}let P=v%A;return P>0&&(v+=A-P),S.__size=v,S.__cache={},this}function x(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){let w=S.target;w.removeEventListener("dispose",g);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var bu=class{constructor(e={}){let{canvas:t=gg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=xt;let P=0,I=0,D=null,b=-1,_=null,C=new at,U=new at,q=null,G=new Ne(0),V=0,j=t.width,te=t.height,B=1,Z=null,oe=null,ie=new at(0,0,j,te),pe=new at(0,0,j,te),ve=!1,Te=new kr,ye=!1,F=!1,H=new ot,he=new M,X=new at,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Re(){return D===null?B:1}let T=i;function z(E,Q){return t.getContext(E,Q)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),T===null){let Q="webgl2";if(T=z(Q,E),T===null)throw z(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let O,Y,N,ce,ne,fe,Fe,Ue,R,y,L,J,le,$,ge,de,xe,_e,ue,Ae,ze,Me,Ee,He;function k(){O=new f1(T),O.init(),Me=new WS(T,O),Y=new o1(T,O,e,Me),N=new GS(T,O),Y.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),ce=new g1(T),ne=new RS,fe=new HS(T,O,N,ne,Y,Me,ce),Fe=new l1(v),Ue=new d1(v),R=new bv(T),Ee=new s1(T,R),y=new p1(T,R,ce,Ee),L=new y1(T,y,R,ce),ue=new x1(T,Y,fe),de=new a1(ne),J=new CS(v,Fe,Ue,O,Y,Ee,de),le=new ZS(v,ne),$=new IS,ge=new BS(O),_e=new i1(v,Fe,Ue,N,L,d,l),xe=new VS(v,L,Y),He=new jS(T,ce,Y,N),Ae=new r1(T,O,ce),ze=new m1(T,O,ce),ce.programs=J.programs,v.capabilities=Y,v.extensions=O,v.properties=ne,v.renderLists=$,v.shadowMap=xe,v.state=N,v.info=ce}k();let we=new xf(v,T);this.xr=we,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=O.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=O.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(j,te,!1))},this.getSize=function(E){return E.set(j,te)},this.setSize=function(E,Q,se=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,te=Q,t.width=Math.floor(E*B),t.height=Math.floor(Q*B),se===!0&&(t.style.width=E+"px",t.style.height=Q+"px"),this.setViewport(0,0,E,Q)},this.getDrawingBufferSize=function(E){return E.set(j*B,te*B).floor()},this.setDrawingBufferSize=function(E,Q,se){j=E,te=Q,B=se,t.width=Math.floor(E*se),t.height=Math.floor(Q*se),this.setViewport(0,0,E,Q)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,Q,se,re){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,Q,se,re),N.viewport(C.copy(ie).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,Q,se,re){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,Q,se,re),N.scissor(U.copy(pe).multiplyScalar(B).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){N.setScissorTest(ve=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(E=!0,Q=!0,se=!0){let re=0;if(E){let ee=!1;if(D!==null){let Ce=D.texture.format;ee=Ce===Gc||Ce===kc||Ce===Vc}if(ee){let Ce=D.texture.type,Le=Ce===Bn||Ce===ss||Ce===Jr||Ce===Kr||Ce===Bc||Ce===Oc,Ve=_e.getClearColor(),Oe=_e.getClearAlpha(),Ye=Ve.r,Ze=Ve.g,We=Ve.b;Le?(p[0]=Ye,p[1]=Ze,p[2]=We,p[3]=Oe,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Ye,x[1]=Ze,x[2]=We,x[3]=Oe,T.clearBufferiv(T.COLOR,0,x))}else re|=T.COLOR_BUFFER_BIT}Q&&(re|=T.DEPTH_BUFFER_BIT),se&&(re|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),_e.dispose(),$.dispose(),ge.dispose(),ne.dispose(),Fe.dispose(),Ue.dispose(),L.dispose(),Ee.dispose(),He.dispose(),J.dispose(),we.dispose(),we.removeEventListener("sessionstart",li),we.removeEventListener("sessionend",Vp),vs.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=ce.autoReset,Q=xe.enabled,se=xe.autoUpdate,re=xe.needsUpdate,ee=xe.type;k(),ce.autoReset=E,xe.enabled=Q,xe.autoUpdate=se,xe.needsUpdate=re,xe.type=ee}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let Q=E.target;Q.removeEventListener("dispose",me),Ge(Q)}function Ge(E){Qe(E),ne.remove(E)}function Qe(E){let Q=ne.get(E).programs;Q!==void 0&&(Q.forEach(function(se){J.releaseProgram(se)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,Q,se,re,ee,Ce){Q===null&&(Q=K);let Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=Hy(E,Q,se,re,ee);N.setMaterial(re,Le);let Oe=se.index,Ye=1;if(re.wireframe===!0){if(Oe=y.getWireframeAttribute(se),Oe===void 0)return;Ye=2}let Ze=se.drawRange,We=se.attributes.position,rt=Ze.start*Ye,vt=(Ze.start+Ze.count)*Ye;Ce!==null&&(rt=Math.max(rt,Ce.start*Ye),vt=Math.min(vt,(Ce.start+Ce.count)*Ye)),Oe!==null?(rt=Math.max(rt,0),vt=Math.min(vt,Oe.count)):We!=null&&(rt=Math.max(rt,0),vt=Math.min(vt,We.count));let Vt=vt-rt;if(Vt<0||Vt===1/0)return;Ee.setup(ee,re,Ve,se,Oe);let Rt,wt=Ae;if(Oe!==null&&(Rt=R.get(Oe),wt=ze,wt.setIndex(Rt)),ee.isMesh)re.wireframe===!0?(N.setLineWidth(re.wireframeLinewidth*Re()),wt.setMode(T.LINES)):wt.setMode(T.TRIANGLES);else if(ee.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),N.setLineWidth(qe*Re()),ee.isLineSegments?wt.setMode(T.LINES):ee.isLineLoop?wt.setMode(T.LINE_LOOP):wt.setMode(T.LINE_STRIP)}else ee.isPoints?wt.setMode(T.POINTS):ee.isSprite&&wt.setMode(T.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let qe=ee._multiDrawStarts,Ft=ee._multiDrawCounts,ct=ee._multiDrawCount,In=Oe?R.get(Oe).bytesPerElement:1,cr=ne.get(re).currentProgram.getUniforms();for(let Ln=0;Ln<ct;Ln++)cr.setValue(T,"_gl_DrawID",Ln),wt.render(qe[Ln]/In,Ft[Ln])}else if(ee.isInstancedMesh)wt.renderInstances(rt,Vt,ee.count);else if(se.isInstancedBufferGeometry){let qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ft=Math.min(se.instanceCount,qe);wt.renderInstances(rt,Vt,Ft)}else wt.render(rt,Vt)};function At(E,Q,se){E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,ml(E,Q,se),E.side=ii,E.needsUpdate=!0,ml(E,Q,se),E.side=Ht):ml(E,Q,se)}this.compile=function(E,Q,se=null){se===null&&(se=E),m=ge.get(se),m.init(Q),w.push(m),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),E!==se&&E.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights();let re=new Set;return E.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ce=ee.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){let Ve=Ce[Le];At(Ve,se,ee),re.add(Ve)}else At(Ce,se,ee),re.add(Ce)}),m=w.pop(),re},this.compileAsync=function(E,Q,se=null){let re=this.compile(E,Q,se);return new Promise(ee=>{function Ce(){if(re.forEach(function(Le){ne.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){ee(E);return}setTimeout(Ce,10)}O.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let dt=null;function Mi(E){dt&&dt(E)}function li(){vs.stop()}function Vp(){vs.start()}let vs=new Zg;vs.setAnimationLoop(Mi),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(E){dt=E,we.setAnimationLoop(E),E===null?vs.stop():vs.start()},we.addEventListener("sessionstart",li),we.addEventListener("sessionend",Vp),this.render=function(E,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,Q,D),m=ge.get(E,w.length),m.init(Q),w.push(m),H.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Te.setFromProjectionMatrix(H,ni,Q.reversedDepth),F=this.localClippingEnabled,ye=de.init(this.clippingPlanes,F),g=$.get(E,S.length),g.init(),S.push(g),we.enabled===!0&&we.isPresenting===!0){let Ce=v.xr.getDepthSensingMesh();Ce!==null&&Yh(Ce,Q,-1/0,v.sortObjects)}Yh(E,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Z,oe),ae=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ae&&_e.addToRenderList(g,E),this.info.render.frame++,ye===!0&&de.beginShadows();let se=m.state.shadowsArray;xe.render(se,E,Q),ye===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=g.opaque,ee=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Ce=Q.cameras;if(ee.length>0)for(let Le=0,Ve=Ce.length;Le<Ve;Le++){let Oe=Ce[Le];Gp(re,ee,E,Oe)}ae&&_e.render(E);for(let Le=0,Ve=Ce.length;Le<Ve;Le++){let Oe=Ce[Le];kp(g,E,Oe,Oe.viewport)}}else ee.length>0&&Gp(re,ee,E,Q),ae&&_e.render(E),kp(g,E,Q);D!==null&&I===0&&(fe.updateMultisampleRenderTarget(D),fe.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(v,E,Q),Ee.resetDefaultState(),b=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],ye===!0&&de.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Yh(E,Q,se,re){if(E.visible===!1)return;if(E.layers.test(Q.layers)){if(E.isGroup)se=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Q);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Te.intersectsSprite(E)){re&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);let Le=L.update(E),Ve=E.material;Ve.visible&&g.push(E,Le,Ve,se,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Te.intersectsObject(E))){let Le=L.update(E),Ve=E.material;if(re&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),X.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),X.copy(Le.boundingSphere.center)),X.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Ve)){let Oe=Le.groups;for(let Ye=0,Ze=Oe.length;Ye<Ze;Ye++){let We=Oe[Ye],rt=Ve[We.materialIndex];rt&&rt.visible&&g.push(E,Le,rt,se,X.z,We)}}else Ve.visible&&g.push(E,Le,Ve,se,X.z,null)}}let Ce=E.children;for(let Le=0,Ve=Ce.length;Le<Ve;Le++)Yh(Ce[Le],Q,se,re)}function kp(E,Q,se,re){let ee=E.opaque,Ce=E.transmissive,Le=E.transparent;m.setupLightsView(se),ye===!0&&de.setGlobalState(v.clippingPlanes,se),re&&N.viewport(C.copy(re)),ee.length>0&&pl(ee,Q,se),Ce.length>0&&pl(Ce,Q,se),Le.length>0&&pl(Le,Q,se),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Gp(E,Q,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new wn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?pi:Bn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let Ce=m.state.transmissionRenderTarget[re.id],Le=re.viewport||C;Ce.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),Oe=v.getActiveCubeFace(),Ye=v.getActiveMipmapLevel();v.setRenderTarget(Ce),v.getClearColor(G),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),ae&&_e.render(se);let Ze=v.toneMapping;v.toneMapping=Ui;let We=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),ye===!0&&de.setGlobalState(v.clippingPlanes,re),pl(E,se,re),fe.updateMultisampleRenderTarget(Ce),fe.updateRenderTargetMipmap(Ce),O.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let vt=0,Vt=Q.length;vt<Vt;vt++){let Rt=Q[vt],wt=Rt.object,qe=Rt.geometry,Ft=Rt.material,ct=Rt.group;if(Ft.side===Ht&&wt.layers.test(re.layers)){let In=Ft.side;Ft.side=ln,Ft.needsUpdate=!0,Hp(wt,se,re,qe,Ft,ct),Ft.side=In,Ft.needsUpdate=!0,rt=!0}}rt===!0&&(fe.updateMultisampleRenderTarget(Ce),fe.updateRenderTargetMipmap(Ce))}v.setRenderTarget(Ve,Oe,Ye),v.setClearColor(G,V),We!==void 0&&(re.viewport=We),v.toneMapping=Ze}function pl(E,Q,se){let re=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Ce=E.length;ee<Ce;ee++){let Le=E[ee],Ve=Le.object,Oe=Le.geometry,Ye=Le.group,Ze=Le.material;Ze.allowOverride===!0&&re!==null&&(Ze=re),Ve.layers.test(se.layers)&&Hp(Ve,Q,se,Oe,Ze,Ye)}}function Hp(E,Q,se,re,ee,Ce){E.onBeforeRender(v,Q,se,re,ee,Ce),E.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(v,Q,se,re,E,Ce),ee.transparent===!0&&ee.side===Ht&&ee.forceSinglePass===!1?(ee.side=ln,ee.needsUpdate=!0,v.renderBufferDirect(se,Q,re,ee,E,Ce),ee.side=ii,ee.needsUpdate=!0,v.renderBufferDirect(se,Q,re,ee,E,Ce),ee.side=Ht):v.renderBufferDirect(se,Q,re,ee,E,Ce),E.onAfterRender(v,Q,se,re,ee,Ce)}function ml(E,Q,se){Q.isScene!==!0&&(Q=K);let re=ne.get(E),ee=m.state.lights,Ce=m.state.shadowsArray,Le=ee.state.version,Ve=J.getParameters(E,ee.state,Ce,Q,se),Oe=J.getProgramCacheKey(Ve),Ye=re.programs;re.environment=E.isMeshStandardMaterial?Q.environment:null,re.fog=Q.fog,re.envMap=(E.isMeshStandardMaterial?Ue:Fe).get(E.envMap||re.environment),re.envMapRotation=re.environment!==null&&E.envMap===null?Q.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",me),Ye=new Map,re.programs=Ye);let Ze=Ye.get(Oe);if(Ze!==void 0){if(re.currentProgram===Ze&&re.lightsStateVersion===Le)return Xp(E,Ve),Ze}else Ve.uniforms=J.getUniforms(E),E.onBeforeCompile(Ve,v),Ze=J.acquireProgram(Ve,Oe),Ye.set(Oe,Ze),re.uniforms=Ve.uniforms;let We=re.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=de.uniform),Xp(E,Ve),re.needsLights=Xy(E),re.lightsStateVersion=Le,re.needsLights&&(We.ambientLightColor.value=ee.state.ambient,We.lightProbe.value=ee.state.probe,We.directionalLights.value=ee.state.directional,We.directionalLightShadows.value=ee.state.directionalShadow,We.spotLights.value=ee.state.spot,We.spotLightShadows.value=ee.state.spotShadow,We.rectAreaLights.value=ee.state.rectArea,We.ltc_1.value=ee.state.rectAreaLTC1,We.ltc_2.value=ee.state.rectAreaLTC2,We.pointLights.value=ee.state.point,We.pointLightShadows.value=ee.state.pointShadow,We.hemisphereLights.value=ee.state.hemi,We.directionalShadowMap.value=ee.state.directionalShadowMap,We.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,We.spotShadowMap.value=ee.state.spotShadowMap,We.spotLightMatrix.value=ee.state.spotLightMatrix,We.spotLightMap.value=ee.state.spotLightMap,We.pointShadowMap.value=ee.state.pointShadowMap,We.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=Ze,re.uniformsList=null,Ze}function Wp(E){if(E.uniformsList===null){let Q=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(Q.seq,E.uniforms)}return E.uniformsList}function Xp(E,Q){let se=ne.get(E);se.outputColorSpace=Q.outputColorSpace,se.batching=Q.batching,se.batchingColor=Q.batchingColor,se.instancing=Q.instancing,se.instancingColor=Q.instancingColor,se.instancingMorph=Q.instancingMorph,se.skinning=Q.skinning,se.morphTargets=Q.morphTargets,se.morphNormals=Q.morphNormals,se.morphColors=Q.morphColors,se.morphTargetsCount=Q.morphTargetsCount,se.numClippingPlanes=Q.numClippingPlanes,se.numIntersection=Q.numClipIntersection,se.vertexAlphas=Q.vertexAlphas,se.vertexTangents=Q.vertexTangents,se.toneMapping=Q.toneMapping}function Hy(E,Q,se,re,ee){Q.isScene!==!0&&(Q=K),fe.resetTextureUnits();let Ce=Q.fog,Le=re.isMeshStandardMaterial?Q.environment:null,Ve=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Rs,Oe=(re.isMeshStandardMaterial?Ue:Fe).get(re.envMap||Le),Ye=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ze=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!se.morphAttributes.position,rt=!!se.morphAttributes.normal,vt=!!se.morphAttributes.color,Vt=Ui;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Vt=v.toneMapping);let Rt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,qe=ne.get(re),Ft=m.state.lights;if(ye===!0&&(F===!0||E!==_)){let yn=E===_&&re.id===b;de.setState(re,E,yn)}let ct=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ft.state.version||qe.outputColorSpace!==Ve||ee.isBatchedMesh&&qe.batching===!1||!ee.isBatchedMesh&&qe.batching===!0||ee.isBatchedMesh&&qe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&qe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||ee.isInstancedMesh&&qe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&qe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&qe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&qe.instancingMorph===!1&&ee.morphTexture!==null||qe.envMap!==Oe||re.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==de.numPlanes||qe.numIntersection!==de.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ze||qe.morphTargets!==We||qe.morphNormals!==rt||qe.morphColors!==vt||qe.toneMapping!==Vt||qe.morphTargetsCount!==wt)&&(ct=!0):(ct=!0,qe.__version=re.version);let In=qe.currentProgram;ct===!0&&(In=ml(re,Q,ee));let cr=!1,Ln=!1,Co=!1,Nt=In.getUniforms(),Vn=qe.uniforms;if(N.useProgram(In.program)&&(cr=!0,Ln=!0,Co=!0),re.id!==b&&(b=re.id,Ln=!0),cr||_!==E){N.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Nt.setValue(T,"projectionMatrix",E.projectionMatrix),Nt.setValue(T,"viewMatrix",E.matrixWorldInverse);let Mn=Nt.map.cameraPosition;Mn!==void 0&&Mn.setValue(T,he.setFromMatrixPosition(E.matrixWorld)),Y.logarithmicDepthBuffer&&Nt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Nt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Ln=!0,Co=!0)}if(ee.isSkinnedMesh){Nt.setOptional(T,ee,"bindMatrix"),Nt.setOptional(T,ee,"bindMatrixInverse");let yn=ee.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Nt.setValue(T,"boneTexture",yn.boneTexture,fe))}ee.isBatchedMesh&&(Nt.setOptional(T,ee,"batchingTexture"),Nt.setValue(T,"batchingTexture",ee._matricesTexture,fe),Nt.setOptional(T,ee,"batchingIdTexture"),Nt.setValue(T,"batchingIdTexture",ee._indirectTexture,fe),Nt.setOptional(T,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Nt.setValue(T,"batchingColorTexture",ee._colorsTexture,fe));let kn=se.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&ue.update(ee,se,In),(Ln||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,Nt.setValue(T,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Vn.envMap.value=Oe,Vn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Q.environment!==null&&(Vn.envMapIntensity.value=Q.environmentIntensity),Ln&&(Nt.setValue(T,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Wy(Vn,Co),Ce&&re.fog===!0&&le.refreshFogUniforms(Vn,Ce),le.refreshMaterialUniforms(Vn,re,B,te,m.state.transmissionRenderTarget[E.id]),to.upload(T,Wp(qe),Vn,fe)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(to.upload(T,Wp(qe),Vn,fe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Nt.setValue(T,"center",ee.center),Nt.setValue(T,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(T,"normalMatrix",ee.normalMatrix),Nt.setValue(T,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let yn=re.uniformsGroups;for(let Mn=0,Zh=yn.length;Mn<Zh;Mn++){let Ms=yn[Mn];He.update(Ms,In),He.bind(Ms,In)}}return In}function Wy(E,Q){E.ambientLightColor.needsUpdate=Q,E.lightProbe.needsUpdate=Q,E.directionalLights.needsUpdate=Q,E.directionalLightShadows.needsUpdate=Q,E.pointLights.needsUpdate=Q,E.pointLightShadows.needsUpdate=Q,E.spotLights.needsUpdate=Q,E.spotLightShadows.needsUpdate=Q,E.rectAreaLights.needsUpdate=Q,E.hemisphereLights.needsUpdate=Q}function Xy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,Q,se){let re=ne.get(E);re.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ne.get(E.texture).__webglTexture=Q,ne.get(E.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Q){let se=ne.get(E);se.__webglFramebuffer=Q,se.__useDefaultFramebuffer=Q===void 0};let qy=T.createFramebuffer();this.setRenderTarget=function(E,Q=0,se=0){D=E,P=Q,I=se;let re=!0,ee=null,Ce=!1,Le=!1;if(E){let Oe=ne.get(E);if(Oe.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(T.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(E);else if(Oe.__hasExternalTextures)fe.rebindTextures(E,ne.get(E.texture).__webglTexture,ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let We=E.depthTexture;if(Oe.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(E)}}let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);let Ze=ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?ee=Ze[Q][se]:ee=Ze[Q],Ce=!0):E.samples>0&&fe.useMultisampledRTT(E)===!1?ee=ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[se]:ee=Ze,C.copy(E.viewport),U.copy(E.scissor),q=E.scissorTest}else C.copy(ie).multiplyScalar(B).floor(),U.copy(pe).multiplyScalar(B).floor(),q=ve;if(se!==0&&(ee=qy),N.bindFramebuffer(T.FRAMEBUFFER,ee)&&re&&N.drawBuffers(E,ee),N.viewport(C),N.scissor(U),N.setScissorTest(q),Ce){let Oe=ne.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Oe.__webglTexture,se)}else if(Le){let Oe=Q;for(let Ye=0;Ye<E.textures.length;Ye++){let Ze=ne.get(E.textures[Ye]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,se,Oe)}}else if(E!==null&&se!==0){let Oe=ne.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Oe.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(E,Q,se,re,ee,Ce,Le,Ve=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){N.bindFramebuffer(T.FRAMEBUFFER,Oe);try{let Ye=E.textures[Ve],Ze=Ye.format,We=Ye.type;if(!Y.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=E.width-re&&se>=0&&se<=E.height-ee&&(E.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ve),T.readPixels(Q,se,re,ee,Me.convert(Ze),Me.convert(We),Ce))}finally{let Ye=D!==null?ne.get(D).__webglFramebuffer:null;N.bindFramebuffer(T.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(E,Q,se,re,ee,Ce,Le,Ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(Q>=0&&Q<=E.width-re&&se>=0&&se<=E.height-ee){N.bindFramebuffer(T.FRAMEBUFFER,Oe);let Ye=E.textures[Ve],Ze=Ye.format,We=Ye.type;if(!Y.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,rt),T.bufferData(T.PIXEL_PACK_BUFFER,Ce.byteLength,T.STREAM_READ),E.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ve),T.readPixels(Q,se,re,ee,Me.convert(Ze),Me.convert(We),0);let vt=D!==null?ne.get(D).__webglFramebuffer:null;N.bindFramebuffer(T.FRAMEBUFFER,vt);let Vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await xg(T,Vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,rt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ce),T.deleteBuffer(rt),T.deleteSync(Vt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Q=null,se=0){let re=Math.pow(2,-se),ee=Math.floor(E.image.width*re),Ce=Math.floor(E.image.height*re),Le=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;fe.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,se,0,0,Le,Ve,ee,Ce),N.unbindTexture()};let Yy=T.createFramebuffer(),Zy=T.createFramebuffer();this.copyTextureToTexture=function(E,Q,se=null,re=null,ee=0,Ce=null){Ce===null&&(ee!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=ee,ee=0):Ce=0);let Le,Ve,Oe,Ye,Ze,We,rt,vt,Vt,Rt=E.isCompressedTexture?E.mipmaps[Ce]:E.image;if(se!==null)Le=se.max.x-se.min.x,Ve=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,Ze=se.min.y,We=se.isBox3?se.min.z:0;else{let kn=Math.pow(2,-ee);Le=Math.floor(Rt.width*kn),Ve=Math.floor(Rt.height*kn),E.isDataArrayTexture?Oe=Rt.depth:E.isData3DTexture?Oe=Math.floor(Rt.depth*kn):Oe=1,Ye=0,Ze=0,We=0}re!==null?(rt=re.x,vt=re.y,Vt=re.z):(rt=0,vt=0,Vt=0);let wt=Me.convert(Q.format),qe=Me.convert(Q.type),Ft;Q.isData3DTexture?(fe.setTexture3D(Q,0),Ft=T.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(fe.setTexture2DArray(Q,0),Ft=T.TEXTURE_2D_ARRAY):(fe.setTexture2D(Q,0),Ft=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,Q.unpackAlignment);let ct=T.getParameter(T.UNPACK_ROW_LENGTH),In=T.getParameter(T.UNPACK_IMAGE_HEIGHT),cr=T.getParameter(T.UNPACK_SKIP_PIXELS),Ln=T.getParameter(T.UNPACK_SKIP_ROWS),Co=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Rt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Rt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);let Nt=E.isDataArrayTexture||E.isData3DTexture,Vn=Q.isDataArrayTexture||Q.isData3DTexture;if(E.isDepthTexture){let kn=ne.get(E),yn=ne.get(Q),Mn=ne.get(kn.__renderTarget),Zh=ne.get(yn.__renderTarget);N.bindFramebuffer(T.READ_FRAMEBUFFER,Mn.__webglFramebuffer),N.bindFramebuffer(T.DRAW_FRAMEBUFFER,Zh.__webglFramebuffer);for(let Ms=0;Ms<Oe;Ms++)Nt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(E).__webglTexture,ee,We+Ms),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(Q).__webglTexture,Ce,Vt+Ms)),T.blitFramebuffer(Ye,Ze,Le,Ve,rt,vt,Le,Ve,T.DEPTH_BUFFER_BIT,T.NEAREST);N.bindFramebuffer(T.READ_FRAMEBUFFER,null),N.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(ee!==0||E.isRenderTargetTexture||ne.has(E)){let kn=ne.get(E),yn=ne.get(Q);N.bindFramebuffer(T.READ_FRAMEBUFFER,Yy),N.bindFramebuffer(T.DRAW_FRAMEBUFFER,Zy);for(let Mn=0;Mn<Oe;Mn++)Nt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,kn.__webglTexture,ee,We+Mn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,kn.__webglTexture,ee),Vn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yn.__webglTexture,Ce,Vt+Mn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yn.__webglTexture,Ce),ee!==0?T.blitFramebuffer(Ye,Ze,Le,Ve,rt,vt,Le,Ve,T.COLOR_BUFFER_BIT,T.NEAREST):Vn?T.copyTexSubImage3D(Ft,Ce,rt,vt,Vt+Mn,Ye,Ze,Le,Ve):T.copyTexSubImage2D(Ft,Ce,rt,vt,Ye,Ze,Le,Ve);N.bindFramebuffer(T.READ_FRAMEBUFFER,null),N.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Vn?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Ft,Ce,rt,vt,Vt,Le,Ve,Oe,wt,qe,Rt.data):Q.isCompressedArrayTexture?T.compressedTexSubImage3D(Ft,Ce,rt,vt,Vt,Le,Ve,Oe,wt,Rt.data):T.texSubImage3D(Ft,Ce,rt,vt,Vt,Le,Ve,Oe,wt,qe,Rt):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Le,Ve,wt,qe,Rt.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Rt.width,Rt.height,wt,Rt.data):T.texSubImage2D(T.TEXTURE_2D,Ce,rt,vt,Le,Ve,wt,qe,Rt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,In),T.pixelStorei(T.UNPACK_SKIP_PIXELS,cr),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ln),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Co),Ce===0&&Q.generateMipmaps&&T.generateMipmap(Ft),N.unbindTexture()},this.initRenderTarget=function(E){ne.get(E).__webglFramebuffer===void 0&&fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?fe.setTextureCube(E,0):E.isData3DTexture?fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?fe.setTexture2DArray(E,0):fe.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,N.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Na=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new kt;let i=this,s=t.color!==void 0?new Ne(t.color):new Ne(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new bn,h=new M,f=new M,d=new M,p=new ot,x=new M(0,0,-1),g=new at,m=new M,S=new M,w=new at,v=new ot,A=this.camera,P=new wn(r,o,{samples:c,type:pi}),I=new vn({name:l.name!==void 0?l.name:"unspecified",uniforms:yu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=P.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=v,this.material=I,this.onBeforeRender=function(D,b,_){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(p),m.subVectors(f,d),m.dot(h)>0===!0&&this.forceUpdate===!1)return;m.reflect(h).negate(),m.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(d),S.subVectors(f,x),S.reflect(h).negate(),S.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(h),A.lookAt(S),A.far=_.far,A.updateMatrixWorld(),A.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let U=A.projectionMatrix;w.x=(Math.sign(g.x)+U.elements[8])/U.elements[0],w.y=(Math.sign(g.y)+U.elements[9])/U.elements[5],w.z=-1,w.w=(1+U.elements[10])/U.elements[14],g.multiplyScalar(2/g.dot(w)),U.elements[2]=g.x,U.elements[6]=g.y,U.elements[10]=g.z+1-a,U.elements[14]=g.w,i.visible=!1;let q=D.getRenderTarget(),G=D.xr.enabled,V=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(P),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(b,A),D.xr.enabled=G,D.shadowMap.autoUpdate=V,D.setRenderTarget(q);let j=_.viewport;j!==void 0&&D.state.viewport(j),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),i.material.dispose()}}};Na.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var wu=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function e0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function pn(n,e,t,i=0,s=0){return e0(n,new Lt(1,i),e,t,s)}function _f(n,e,t,i=0){return e0(n,new Ri(1),e,t,i)}function JS(n,e){let t=new et;return t.setAttribute("position",new ke(e.flat(),3)),{tone:n,geometry:t}}function Qg(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return JS(n,i)}function KS(){let n=[pn("fur",[0,.012,.011],[.154,.161,.132],1),pn("fur",[0,-.065,.008],[.128,.079,.108]),pn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),pn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),Qg("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),pn("skin",[0,-.061,-.133],[.102,.066,.065],1),pn("skinShade",[0,-.097,-.14],[.076,.031,.047]),pn("skin",[0,.015,-.15],[.041,.056,.038]),pn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(pn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),pn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),_f("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),pn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),pn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),pn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),pn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),pn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),pn("ink",[e*.047,.031,-.183],[.011,.012,.006]),_f("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),_f("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(Qg("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function $S(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new et;return s.setAttribute("position",new Mt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var QS=$S(KS());function Tu(n=0){let e=new Zt({flatShading:!0}),t=new Zt({flatShading:!0}),i=new Zt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Ne("#212128"),ivory:new Ne("#fff1ce")},o=-1;function a({colors:u,ranges:h}){for(let{tone:f,start:d,end:p}of h){let{r:x,g,b:m}=r[f];for(let S=d;S<p;S++)u.setXYZ(S,x,g,m)}u.needsUpdate=!0}function l(u){let h=Number.isInteger(u)&&u>=0&&u<wu.length?u:0;if(h===o)return;o=h;let f=wu[o];for(let[d,p]of Object.entries(f))(r[d]??=new Ne).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let h=u.geometry.clone(),f=new Mt(new Float32Array(h.getAttribute("position").count*3),3);h.setAttribute("color",f);let d={colors:f,ranges:u.ranges};return s.push(d),a(d),new Be(h,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new ft;return u.add(c(QS)),u}}}var Ba=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],ew=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],tw=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],t0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Au=Ba.length-1,nw=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],iw=[-.57,.57,1,.61,-.61,-1],sw=[1,1,-.04,-.91,-.91,-.04];function Eu(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(b=0,_=0,C=0){let U=r.length/3;return r.push(b*s,_,C),U}function c(b,_,C){i?o.push(b,C,_):o.push(b,_,C)}function u(b,_,C,U){c(b,_,C),c(b,C,U)}function h(b,_){for(let C=0;C<b.length;C++){let U=(C+1)%b.length;u(b[U],b[C],_[C],_[U])}}function f(b,_){for(let C=0;C<b.length;C++)c(_,b[(C+1)%b.length],b[C])}let d=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Ba.map(([b,_,C,U],q)=>{let G=q===0||q===Au,V=b*.67,j=-.024+(_+.024)*.69;return{top:l(b,C,_),middle:l(b*1.08,(C+U)/2,G?_:-.025+(_+.025)*1.04),bottom:l(b,U,_),innerTop:l(V,ew[q],j),innerBottom:l(V,tw[q],j)}});function g(b){let _=x[b],C=x[(b+1)%x.length];return[_.top,C.top,C.middle,C.bottom,_.bottom,_.middle]}let m=new Set(t0.map(({edge:b})=>b));m.add(Au);for(let b=0;b<x.length;b++){let _=x[b],C=x[(b+1)%x.length];c(d,_.innerTop,C.innerTop),c(p,C.innerBottom,_.innerBottom),u(_.innerTop,_.top,C.top,C.innerTop),u(C.innerBottom,C.bottom,_.bottom,_.innerBottom),m.has(b)||(u(C.top,_.top,_.middle,C.middle),u(C.middle,_.middle,_.bottom,C.bottom))}let S=g(Au);t||f(S,l(0,0,Ba[Au][1]));let w=i?[S[1],S[0],S[5],S[4],S[3],S[2]]:S;for(let{edge:b,length:_,splay:C}of t0){let[U,q,G,V]=Ba[b],[j,te,B,Z]=Ba[b+1],oe=j-U,ie=te-q,pe=-ie+oe*C,ve=oe+ie*C,Te=Math.hypot(pe,ve),ye=Math.hypot(oe,ie)/2,F=(G+B-V-Z)/4,H=[],he=g(b);for(let[K,ae,Re]of nw){let T=[l(),l(),l(),l(),l(),l()];h(he,T),H.push({ring:T,distance:K*_,width:ae*ye,height:Re*F}),he=T}let X=l();f(he,X),a.push({x:(U+j)/2,y:(G+B+V+Z)/4,z:(q+te)/2,forwardX:pe/Te,forwardZ:ve/Te,rows:H,tip:X,length:_,pressure:-1})}let v=new et,A=new ke(r,3).setUsage(Yn);v.setAttribute("position",A),v.setIndex(o),v.boundingSphere=new Hn(new M(0,-.018,-.052),.12),v.boundingBox=new sn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let P=!0;function I(b,_=!0){let C=!1;for(let U=0;U<a.length;U++){let q=a[U],G=b?.[U],V=Number.isFinite(G)?Xe.clamp(G,0,1):0;if(V===q.pressure)continue;q.pressure=V,C=!0;let{forwardX:j,forwardZ:te,length:B,rows:Z,tip:oe}=q,ie=q.x,pe=q.z,ve=q.y,Te=0,ye=0;for(let{ring:he,distance:X,width:K,height:ae}of Z){let Re=X/B,T=Xe.smoothstep(Re,0,.57),z=Xe.smoothstep(Re,.38,1),O=(.17+V*.83)*T+(.14+V*.76)*z,Y=(O+Te)/2,N=X-ye,ce=Math.cos(Y)*N;ie+=j*ce,ve-=Math.sin(Y)*N,pe+=te*ce;for(let ne=0;ne<he.length;ne++){let fe=iw[ne]*K,Fe=sw[ne]*ae,Ue=Fe*Math.sin(O);A.setXYZ(he[ne],s*(ie+te*fe+j*Ue),ve+Fe*Math.cos(O),pe-j*fe+te*Ue)}Te=O,ye=X}let F=B-ye,H=F*Math.cos(Te);A.setXYZ(oe,s*(ie+j*H),ve-F*Math.sin(Te),pe+te*H)}C&&(A.needsUpdate=!0,P=!0),_&&P&&(v.computeVertexNormals(),P=!1)}I(),v.getAttribute("normal").setUsage(Yn);let D=new Be(v,e);return D.castShadow=!0,{mesh:D,pose:I,wristIndices:w}}var rs=12,vf=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],rw=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],n0=vf.flatMap(([n,e,t])=>Array.from({length:rs},(i,s)=>{let r=(s-.5)*Math.PI*2/rs;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Cu(n,e){let t=n0.length,i=[],s=(te,B,Z,oe,ie)=>te.push(B,Z,oe,B,oe,ie);function r(te,B,Z=!1){for(let oe=1;oe<B.length-1;oe++)Z?te.push(B[0],B[oe+1],B[oe]):te.push(B[0],B[oe],B[oe+1])}let o=(te,B)=>te*rs+(B+rs)%rs;for(let te=0;te<vf.length-1;te++)for(let B=0;B<rs;B++)(te===2||te===3)&&(B===0||B===6)||s(i,o(te,B),o(te+1,B),o(te+1,B+1),o(te,B+1));r(i,Array.from({length:rs},(te,B)=>o(0,B))),r(i,Array.from({length:rs},(te,B)=>o(vf.length-1,B)),!0);let a=t,l=e.map(({geometry:te,wristIndices:B},Z)=>{let oe=Z===0?6:0,ie=[o(4,oe),o(4,oe+1),o(3,oe+1),o(2,oe+1),o(2,oe),o(3,oe)],pe=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],ve=pe.at(-1),Te=new Array(te.attributes.position.count);B.forEach((H,he)=>{Te[H]=ve[he]});for(let H=0;H<Te.length;H++)Te[H]??=a++;let ye=[];for(let H=0;H<te.index.count;H++)ye.push(Te[te.index.getX(H)]);for(let H=0;H<pe.length-1;H++)for(let he=0;he<6;he++){let X=(he+1)%6;s(i,pe[H][he],pe[H][X],pe[H+1][X],pe[H+1][he])}let F=[];return r(F,ve),{socket:ie,rings:pe,wrist:ve,wristIndices:B,remap:Te,skin:ye,cap:F,sign:Z===0?-1:1}}),c=new et,u=new ke(a*3,3).setUsage(Yn);c.setAttribute("position",u);let h=new Be(c,n);h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let f=Array.from({length:4},(te,B)=>new Is([...i,...l.flatMap((Z,oe)=>B&1<<oe?Z.skin:Z.cap)],1));c.setIndex(f[0]);let d=new M,p=new M,x=new M,g=new M,m=new M,S=new M,w=new M,v=new M,A=new M,P=new je,I=new je,D=new je,b=new M(0,0,-1),_=new je().setFromEuler(new an(-1.42,0,0)),C=[.24,.62,.94,.56],U=[.089,.084,.069,.054,.037],q=0,G=0,V=!0;function j(te,B,Z,oe,ie){let pe=!!(te[0]||te[1]);if(!pe&&!V&&q===Z&&G===oe)return;q=Z,G=oe,V=pe;for(let Te=0;Te<t;Te++){let[ye,F,H]=n0[Te];u.setXYZ(Te,ye*Z,F*oe,H*Z)}let ve=0;for(let Te=0;Te<l.length;Te++){let ye=l[Te],F=te[Te],H=e[Te].geometry.attributes.position,he=!!F,X=ye.wristIndices;he&&ie&&(ve|=1<<Te),p.set(0,0,0);for(let K of ye.socket)p.add(d.fromBufferAttribute(u,K));p.multiplyScalar(1/6),g.set(0,0,0);for(let K of X)g.add(d.fromBufferAttribute(H,K));g.multiplyScalar(1/6).applyQuaternion(F?.quaternion??_),he?g.add(F.position):g.add(d.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),S.copy(m).normalize(),w.set(ye.sign*.38,-1,.27).addScaledVector(S,-S.dot(d.set(ye.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),he&&x.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-m.lengthSq()*.25))*.72),P.setFromUnitVectors(b,S.subVectors(x,p).normalize()),I.copy(F?.quaternion??_);for(let K=0;K<4;K++){let ae=K===3;A.lerpVectors(ae?x:p,ae?g:x,C[K]),D.copy(P).slerp(I,ae?.79:K*.19);for(let Re=0;Re<6;Re++){let T=rw[Re],z=U[K];v.set(T[0]*z,T[1]*z*.84,0).applyQuaternion(D).add(A),u.setXYZ(ye.rings[K+1][Re],v.x,v.y,v.z)}}for(let K=0;K<ye.remap.length;K++)v.fromBufferAttribute(H,K).applyQuaternion(I),he?v.add(F.position):v.add(d.set(p.x+ye.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(ye.remap[K],v.x,v.y,v.z)}c.index!==f[ve]&&c.setIndex(f[ve]),u.needsUpdate=!0,c.computeVertexNormals()}return j([null,null],.42,1,1,!1),{mesh:h,pose:j}}var i0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],ow=new M(0,1,0);function Ru(n){let e=new ft,t=new Tt({color:"#2c4750",roughness:.43,metalness:.47}),i=new Tt({color:"#899fa3",roughness:.46,metalness:.57}),s=new pt({toneMapped:!1});function r(d,p,x,g,m,S=0){let w=new Be(d,p);return w.position.set(x,g,m),w.rotation.x=S,e.add(w),w}r(new Je(.071,.059,.149),t,.038,.026,-.054),r(new Je(.04,.072,.05),i,.038,-.028,-.014,-.29),r(new Gt(.019,.024,.064,8),i,.038,.025,-.137,Math.PI/2),r(new Gt(.015,.016,.008,8),s,.038,.025,-.173,Math.PI/2),r(new Je(.041,.009,.047),s,.038,.059,-.067);let o=new Be(new Gt(.002,.003,1,5,1,!0),new pt({transparent:!0,opacity:.52,depthWrite:!1,blending:qn,toneMapped:!1})),a=new Be(new Lt(.012,0),new pt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function h(){e.visible=o.visible=a.visible=!1}function f({mode:d,position:p,quaternion:x,end:g}){if(!d||!p||!x||!g){h();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),d!==u&&(u=d,s.color.set(i0[d-1]??i0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(ow,c.normalize()),a.position.copy(g)}return h(),{mesh:e,hide:h,update:f}}var aw="wss://clouddata.turbowarp.org",lw="itssoren.github.io/VR/gorilla-lab/",Mf={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Iu=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),cw=new Map([[Mf.vr,"vr"],[Mf.pc,"pc"],...Iu.map(n=>[n,"player"])]),bf=53,Pu=4400,r0=64e3,jt=(n,e)=>Math.round(n).toString().padStart(e,"0");function Oa(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Ws(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function uw({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+jt(e,7)+a.map(c=>jt(c*100+2e4,5)).join("")+jt(Math.round(l*10)%3600,4)+jt(o,6)}function hw(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function o0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},Socket:s=globalThis.WebSocket,now:r=Date.now,monotonicNow:o=r===Date.now?()=>performance.now():r,random:a=Math.random}={}){let l=new Map,c=o(),u=r(),h=null,f=null,d="",p=0,x="",g=-1/0,m=null,S=0,w=0,v=1/0,A=0,P="offline",I=!1,D=-1,b=0,_=[],C=1/0;function U(F,H){P=F,n(H)}function q(){return"Salon "+d+" \xB7 "+(f==="vr"?"en attente de joueurs ou du spectateur":"en attente du joueur VR")}function G(){return[...l.values()].map(F=>F.pose).filter(Boolean)}function V(){let F=G().filter(K=>f==="vr"?K.role!=="vr":K.role==="vr"),H=K=>Number(K.ready)*2+ +(K.role==="pc"),he=F.find(K=>K.id===m?.id)??null,X=F.reduce((K,ae)=>!K||H(ae)>H(K)?ae:K,he);X!==m&&(m=X,e(m))}function j(F){for(let H of l.values())H.pose&&t(null,H.pose),H.pose=H.candidate=null;F&&l.clear(),V()}function te(){let F=h;if(h=null,F){F.onopen=F.onmessage=F.onerror=F.onclose=null;try{F.close()}catch{}}}function B(){te(),f=null,d="",v=1/0,I=!1,D=-1,_=[],j(!0),U("offline","Hors ligne")}function Z(F){let H=Math.min(3e4,1500*2**Math.min(A++,5));v=o()+H,U("retry","TurboWarp d\xE9connect\xE9 ("+F+") \xB7 reconnexion automatique au salon "+d)}function oe(F){let H=!1;for(let[he,X]of l)X.pose&&F-X.pose.arrival>Pu&&(t(null,X.pose),X.pose=null,H=!0),X.candidate&&F-X.candidate.arrival>Pu&&(X.candidate=null),F-X.lastArrival>6e4&&l.delete(he);H&&V()}function ie(F,H,he,X){let K=vw(he.value,null);if(!K||K.id===p)return;let ae=l.get(K.id);if(!ae){if(l.size>=64)return;ae={lastTime:-1/0,lastAction:0,lastArrival:X,pose:null,candidate:null},l.set(K.id,ae)}if(K.time<=ae.lastTime)return;let Re=ae.pose??ae.candidate;if(Re&&K.time-Re.time>Pu+X-Re.arrival){if(ae.pose)return;ae.candidate=null}ae.lastTime=K.time,ae.lastArrival=X;let T={...K,ready:K.ready??!0,protocol:K.ready===void 0?3:4,role:F,channel:H,received:r(),arrival:X},z=ae.candidate;if(!ae.pose&&(!z||z.channel!==H||z.map!==T.map||X-z.arrival>Pu)&&(K.ready!==void 0||Math.abs(K.time-T.received)>25e3)){ae.candidate=T;return}if(ae.candidate=null,!ae.pose&&z?.objects&&z.ready&&z.map===T.map&&!T.objects&&(T.objects=z.objects),ae.pose=T,t(T),V(),!(f!=="vr"||F!=="player"||!I||!T.ready||T.map!==D||K.actionTarget!==p))for(let{seq:O,action:Y}of K.actions)O<=ae.lastAction||(ae.lastAction=O,i(Y,T))}function pe(){let F;try{F=new s(aw)}catch{return!1}return h=F,w=o(),g=-1/0,U("connecting","Connexion \xE0 TurboWarp \xB7 salon "+d),F.onopen=()=>{h===F&&(S=o(),F.send(JSON.stringify({method:"handshake",project_id:lw+d,user:"player"+p})+`
`),U("open",q()))},F.onmessage=H=>{if(h!==F||typeof H.data!="string"||H.data.length>105e4)return;let he=o();oe(he);for(let X of H.data.split(`
`)){if(!X.trim())continue;let K;try{K=JSON.parse(X)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",X.slice(0,200));continue}let ae=cw.get(K?.name);K?.method!=="set"||!ae||ae==="vr"&&f==="vr"||ie(ae,K.name,K,he)}},F.onerror=()=>{h===F&&U("connecting","Impossible de joindre TurboWarp \xB7 salon "+d)},F.onclose=H=>{if(h!==F)return;let he=H.code;if(te(),j(!1),_=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(he)){Z(he);return}f=null,d="";let X={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[he];U("error","TurboWarp d\xE9connect\xE9 ("+he+")"+(X?" \xB7 "+X:H.reason?" \xB7 "+H.reason.slice(0,100):""))},!0}function ve(F,H){let he=Oa(F);return!/^[A-Z0-9]{5,12}$/.test(he)||!["vr","pc","player"].includes(H)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):f===H&&d===he?!0:f?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(j(!0),p=Math.floor(1e6+a()*8999999),f=H,d=he,x=Mf[f]??Iu[p%Iu.length],b=0,A=0,v=C=1/0,pe()?!0:(f=null,d="",U("error","WebSocket indisponible."),!1))}function Te(F,H){if(f!=="player"||P!=="open"||!m?.ready||m.protocol<4||m.map!==H||!Sf(F)||b>=99999999)return!1;let he=o();return _=_.filter(X=>X.expires>=he&&X.target===m.id&&X.map===H),_.length>=8?!1:(_.push({action:{...F},seq:++b,expires:he+1800,target:m.id,map:H}),!0)}function ye(F){let H=o();if(I=!!F&&F.ready!==!1,D=F?.map??-1,oe(H),f&&!h&&H>=v&&(v=1/0,pe()||Z(1006)),h&&h.readyState===0&&H-w>1e4&&(te(),Z(1006)),!F||!f||h?.readyState!==1||h.bufferedAmount>4096||H-S<350||H-g<100)return!1;if(f==="player"){let Re=G().filter(z=>z.role==="player"),T=Re.find(z=>z.channel===x);if(T?C=Math.min(H,C):C=1/0,T&&(T.id<p||H-C>=800)){let z=Iu.find(O=>!Re.some(Y=>Y.channel===O));if(!z)return P!=="capacity"&&U("capacity","Salon "+d+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;x=z,C=1/0}}(A||P==="capacity")&&(A=0,U("open",q()));let he=Math.round(u+H-c),X=uw({...F,time:he,id:p});if(!X)return!1;_=_.filter(Re=>Re.expires>=H&&Re.target===m?.id&&Re.map===F.map);let K=F.ready!==void 0||F.avatar?.tool||f==="player",ae=_w(X,F.avatar,F.objectFeed?.(H),K?{ready:F.ready!==!1,actions:_,actionTarget:_[0]?.target??0}:null);return g=H,h.send(JSON.stringify({method:"set",name:x,value:ae})+`
`),!0}return{join:ve,leave:B,tick:ye,sendAction:Te,get role(){return f},get code(){return d},get state(){return P},get remote(){return m},get peers(){return G()}}}var dw=15,fw=12,a0=44,Lu=15,Uu=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>jt(e*100+2e4,5)).join(""):null;function Du(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var Fu=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>jt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Nu(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function pw(n){let e=Uu(n.mesh.position),t=Fu(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>bf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return jt(i,5)+jt(s,2)+r+o+jt(a,8)+e+t}function mw(n){return jt(n,5)+"99"+"0".repeat(a0-7)}function gw(n){if(!n)return null;let e=Fu(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Uu(l.position),u=l&&Fu(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(dw+fw)}),s=jt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=jt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+jt(n.coconuts??31,2)+jt(n.color??0,2)+a}function Sf(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;return e==="spawn"?Number.isInteger(t)&&t>=0&&t<=bf?"10"+jt(t,5):null:!Number.isInteger(i)||i<1||i>=1e5?null:e==="tool"?Number.isInteger(s)&&s>=1&&s<=7?"2"+s+jt(i,5):null:e==="hold"||e==="release"?(e==="hold"?"30":"40")+jt(i,5):null}function xw(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release"][e];if(!s)return null;let r=s==="spawn"?{type:s,typeId:i}:s==="tool"?{type:s,mode:t,objectId:i}:{type:s,objectId:i};return Sf(r)===n?r:null}function yw(n){let e=Uu(n?.position),t=Fu(n?.quaternion),i=Uu(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function _w(n,e,t,i=null){let s=gw(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:l,action:c})=>jt(l,8)+Sf(c)).join(""),a=n+"4"+Number(i.ready)+ +!!s+(s??"")+yw(s?e.tool:null)+jt(i.actionTarget??0,7)+jt(o.length/Lu,1)+o;return a.length+1+r.length>r0&&(t=null,r=""),a+(t?t.full?"2":"1":"0")+r}function s0(n,e,t){let i=Nu(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:Du(n,a+1),quaternion:Nu(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function vw(n,e){if(typeof n!="string"||n.length>r0||!/^[0-9]+$/.test(n))return null;let t=hw(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:a0,r=i?125:133;if(n[46]==="4"){if(n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=s0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),h=Du(n,a+2),f=Nu(n,a+17),d=Du(n,a+29);if(u<1||u>7||!h||!f||!d)return null;t.avatar.tool={mode:u,position:h,quaternion:f,end:d},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*Lu+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=Lu){let u=Number(n.slice(a,a+8)),h=xw(n.slice(a+8,a+Lu));if(!h||u<=c)return null;t.actions.push({seq:u,action:h}),c=u}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=s0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),h=Number(n.slice(l+5,c));if(!u)return null;if(h===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),d=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Du(n,c+10),g=Nu(n,c+25);if(h>bf||f>7||d>4||p>16777215||!x||!g)return null;a.push({id:u,type:h,flags:f,style:d,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}function l0(){let n=new Map,e=-1/0,t=-1/0;function i(s,r){if(s-e<200)return null;e=s;let o=s-t>=1600;o&&(t=s);let a=new Set,l=[];for(let c of r){if(!c.mesh.visible)continue;let u=pw(c);u&&(a.add(c.netId),(o||n.get(c.netId)!==u)&&l.push(u),n.set(c.netId,u))}for(let c of n.keys())a.has(c)||(o||l.push(mw(c)),n.delete(c));return o||l.length?{full:o,records:l}:null}return{capture:i,reset(){n.clear(),e=t=-1/0}}}var c0=It.DEFAULT_UP,Mw=15,u0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function bw(){let n=new ft,e=new Be(new Lt(.155,1),new Tt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new Ii(.23,.018,5,20),new pt({color:"#84e6ff",transparent:!0,opacity:.85,blending:qn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new Ds(.11,.28,9,1,!0),new pt({color:"#55c7ff",transparent:!0,opacity:.45,side:Ht,blending:qn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function Sw(){let n=new ft,e=new ft,t=Tu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:Eu(g,t.hand,{openWrist:!0}),position:new M,quaternion:new je,pressure:[0,0,0],tracked:!1})),r=Cu(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Ru(e),l=new M,c=[null,null],u=new M,h=new je,f=new je,d=new je,p={mode:0,position:new M,quaternion:new je,end:new M};function x(g,m,S){let w=g.avatar,v=1-Math.exp(-S*20);if(!w){o.position.set(0,-.46,0),o.rotation.x=0,c.fill(null),r.pose(c,.42,.97,.68,!0),a.hide(),p.mode=0;return}h.copy(n.quaternion).invert(),d.copy(w.head).premultiply(h),i.quaternion.slerp(d,v),u.set(0,0,-1).applyQuaternion(i.quaternion);let A=Xe.smoothstep(-u.y,.28,.94),P=Math.max(.38,w.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*P,.24*A),o.rotation.x=-.5*A,f.copy(o.quaternion).invert(),t.setColor(w.color??0);for(let b=0;b<s.length;b++){let _=s[b],C=w.hands[b];if(c[b]=C?_:null,!C){_.tracked=!1;continue}l.copy(C.position).sub(g).applyQuaternion(h).sub(o.position).applyQuaternion(f),d.copy(C.quaternion).premultiply(h).premultiply(f),_.tracked?(_.position.lerp(l,v),_.quaternion.slerp(d,v)):(_.position.copy(l),_.quaternion.copy(d)),_.tracked=!0;for(let U=0;U<3;U++)_.pressure[U]+=((C.pressure?.[U]??0)-_.pressure[U])*v;_.skin.pose(_.pressure,!1)}r.pose(c,w.armSpan*.5,.97,P,!0);let I=w.tool;if(!I){a.hide(),p.mode=0;return}let D=p.mode?v:1;p.mode=I.mode,p.position.lerp(I.position,D),p.quaternion.slerp(d.copy(I.quaternion),D),p.end.lerp(I.end,D),a.update(p)}return{model:n,toolRoot:e,draw:x,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function h0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function d0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,onAction:o}){let a=new Map,l=new Map,c=l0(),u=0,h=-1,f=-1,d=-1,p="",x=0,g=null,m=0;function S(){let T=e();return T!==p&&(p=T,x=Ws(T)),x}function w(T){return!!T?.ready&&T.map===S()}function v(T){let z=l.get(T);z&&(n.remove(z.mesh),z.mesh.material?.dispose(),l.delete(T))}function A(){for(let T of l.keys())v(T);u=0,h=-1,f!==-1&&(f=-1,s?.(null)),d!==-1&&(d=-1,r?.(null))}function P(T,z){if(T.color===z.color&&T.style===z.style)return;T.color=z.color,T.style=z.style;let O=T.mesh.material;if(O?.color){if(O.color.setHex(z.color),z.style===0){Object.assign(O,T.baseMaterial),T.baseEmissive&&O.emissive.copy(T.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][z.style],O.metalness=[.1,0,.87,.12,0][z.style],O.opacity=z.style===3?.4:1,O.transparent=z.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=z.style===4?1.65:0,O.needsUpdate=!0}}function I(T){if(!w(T)){A();return}if((u!==T.id||h!==T.map)&&(A(),u=T.id,h=T.map),T.avatar&&T.avatar.light!==f&&(f=T.avatar.light,s?.(f)),T.avatar&&T.avatar.coconuts!==d&&(d=T.avatar.coconuts,r?.(d)),!T.objects)return;let z=T.objects.full?new Set:null;for(let O of T.objects.records){if(O.removed){v(O.id);continue}z?.add(O.id);let Y=l.get(O.id);if(Y&&Y.type!==O.type&&(v(O.id),Y=null),!Y){let ce=i?.(O.type);if(!ce)continue;let{roughness:ne,metalness:fe,transparent:Fe,depthWrite:Ue,opacity:R,emissiveIntensity:y}=ce.material??{},L={roughness:ne,metalness:fe,transparent:Fe,depthWrite:Ue,opacity:R,emissiveIntensity:y};ce.userData.netId=O.id,ce.userData.netType=O.type,Y={mesh:ce,baseMaterial:L,baseEmissive:ce.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new je().copy(O.rotation),velocity:new M,time:T.time},ce.position.copy(Y.target),ce.quaternion.copy(Y.quaternion),l.set(O.id,Y),n.add(ce)}let N=(T.time-Y.time)/1e3;N>.06&&N<.65&&!(O.flags&6)?Y.velocity.copy(O.position).sub(Y.target).multiplyScalar(1/N).clampLength(0,23):Y.velocity.set(0,0,0),Y.target.copy(O.position),Y.quaternion.copy(O.rotation),Y.time=T.time,Y.flags=O.flags,Y.received=T.arrival,Y.mesh.userData.netFlags=O.flags,Y.mesh.userData.held=!!(O.flags&1),P(Y,O)}if(z)for(let O of l.keys())z.has(O)||v(O)}let D=new M;function b(T,z,O){let Y=1-Math.exp(-T*22);for(let N of l.values()){if(N.mesh.visible=z,!z)continue;let ce=N.flags&6?0:Math.min(.12,Math.max(0,(O-N.received)/1e3));D.copy(N.target).addScaledVector(N.velocity,ce),N.mesh.position.distanceToSquared(D)>16||N.flags&6&&N.mesh.position.distanceToSquared(N.target)<1e-4?N.mesh.position.copy(D):N.mesh.position.lerp(D,Y),N.mesh.quaternion.slerp(N.quaternion,Y),N.flags&6&&N.mesh.quaternion.angleTo(N.quaternion)<.008&&N.mesh.quaternion.copy(N.quaternion),N.mesh.updateMatrixWorld(!0)}}let _=T=>document.querySelector(T),C=_("#cloud-status"),U=_("#cloud-room"),q=_("#cloud-camera"),G=0,V="Hors ligne",j=0;function te(T){G=T,q.textContent="Cam\xE9ra : "+u0[T]}function B(){te((G+1)%u0.length)}q.onclick=B;let Z=o0({onStatus(T){V=T,C.textContent=T},onPose(T){Z.role!=="vr"&&I(T)},onPeer(T,z){if(!T){let N=a.get(z.id);N?.art&&(h0(N.art.model),h0(N.art.toolRoot),N.art.dispose?.()),a.delete(z.id);return}let O=a.get(T.id);O||(O={art:null,motion:new M},a.set(T.id,O));let Y=O.pose;if(O.motion.set(0,0,0),Y&&Y.map===T.map){let N=(T.time-Y.time)/1e3;N>=.055&&N<=.65&&(O.motion.set(T.x-Y.x,T.y-Y.y,T.z-Y.z).multiplyScalar(1/N),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0))}O.pose=T},onAction:o}),oe=Oa(new URLSearchParams(location.search).get("room")??"");U.value=/^[A-Z0-9]{5,12}$/.test(oe)?oe:Math.random().toString(36).slice(2,8).padEnd(6,"0").toUpperCase();function ie(T){let z=Oa(U.value);Z.role===T&&Z.code===z||Z.join(z,T)&&(U.value=z,T!=="vr"&&_("#game").focus(),c.reset(),g=null,te(0),t(Ws(z)),p="")}_("#cloud-vr").onclick=()=>ie("vr"),_("#cloud-pc").onclick=()=>ie("pc");let pe=_("#cloud-player");pe&&(pe.onclick=()=>ie("player")),_("#cloud-leave").onclick=()=>{j=0,Z.leave()},_("#cloud-copy").onclick=async()=>{let T=new URL(location.href);T.searchParams.set("room",Oa(U.value));try{await navigator.clipboard.writeText(T.href),C.textContent="Lien copi\xE9."}catch{C.textContent=T.href}j=performance.now()+2500},addEventListener("pagehide",()=>Z.leave());let ve=new M,Te=new M,ye=new M,F=new M,H=0;function he({dt:T,position:z,yaw:O,pitch:Y,camera:N,rig:ce,keys:ne,flat:fe}){let Fe=fe?.movement,Ue=Number(ne.has("KeyD"))-Number(ne.has("KeyQ")||ne.has("KeyA"))+(Fe?.x??0),R=Number(ne.has("KeyS"))-Number(ne.has("KeyZ")||ne.has("KeyW"))+(Fe?.z??0);fe?.consumeJump?.()&&(H=.26),H=Math.max(0,H-T);let y=Number(ne.has("Space")||H>0)-Number(ne.has("ShiftLeft")||ne.has("ShiftRight")),L=ne.has("ControlLeft")||ne.has("ControlRight")?11:3.2;F.set(Ue,y,R).clampLength(0,1).applyAxisAngle(c0,O),ce.position.addScaledVector(F,T*L).clampScalar(-175,175),ce.rotation.set(0,O,0),N.position.set(0,0,0),N.rotation.set(Y,0,0,"YXZ"),ce.updateMatrixWorld(!0),z.copy(ce.position)}function X(T,z,O,Y){for(let N of a.values()){let ce=N.pose;if(!(T&&w(ce))){N.art&&(N.art.model.visible=!1,N.art.toolRoot&&(N.art.toolRoot.visible=!1));continue}N.art||(N.art=ce.role==="pc"?bw():Sw(),n.add(N.art.model),N.art.model.visible=!1,N.art.toolRoot&&n.add(N.art.toolRoot));let{model:fe,toolRoot:Fe}=N.art,Ue=Math.min(.19,Math.max(0,(Y-ce.arrival)/1e3+.036));ve.copy(ce).addScaledVector(N.motion,Ue),!fe.visible||fe.position.distanceToSquared(ve)>64?fe.position.copy(ve):fe.position.lerp(ve,1-Math.exp(-O*11)),fe.rotation.y=ce.yaw,fe.visible=!0,Fe&&(Fe.visible=!0),N.art.draw(ce,z,O)}}function K(T,z){if(z<j)return;let O=Z.remote,Y=V;if(Z.state==="open"){let N="Salon "+Z.code+" \xB7 ",ce=Z.peers.filter(ne=>ne.ready);if(!T)Y=N+(Z.role==="vr"?"s\xE9lectionne \xAB Entrer en VR \xBB pour ouvrir la partie":"quitte la session VR pour utiliser ce r\xF4le");else if(Z.role!=="vr"&&O&&O.map!==S())Y=N+"le joueur VR utilise une autre carte. Chargez la m\xEAme carte.";else if(Z.role!=="vr"&&O&&!O.ready)Y=N+"casque connect\xE9 \xB7 en attente du d\xE9marrage VR";else if(Z.role==="player"&&O&&O.protocol<4)Y=N+"mets \xE0 jour le jeu sur le casque pour jouer ensemble";else if(Z.role!=="vr"&&w(O))Y=N+"joueur VR connect\xE9";else if(Z.role==="vr"){let ne=ce.filter(w),fe=ne.filter(Ue=>Ue.role==="player").length,Fe=ne.some(Ue=>Ue.role==="pc");fe||Fe?Y=N+[Fe?"spectateur connect\xE9":"",fe?fe+" joueur"+(fe===1?"":"s")+" PC / mobile":""].filter(Boolean).join(" \xB7 "):ce.length&&(Y=N+"le correspondant utilise une autre carte. Chargez la m\xEAme carte.")}}C.textContent!==Y&&(C.textContent=Y)}function ae(T){let{inVR:z,time:O,dt:Y,position:N,yaw:ce,camera:ne,rig:fe,keys:Fe,avatar:Ue,bodies:R}=T;if(!Z.role){A();return}let y=Z.role==="vr"?z:!z,L=performance.now(),J=S(),le=Z.role!=="vr"?Z.remote:null,$=y&&w(le);if(!$&&h!==-1&&A(),b(Y,$,L),X(y,O,Y,L),Z.role==="pc"&&!z){(T.actions??Fe).delete("KeyC")&&B();let ge=G===3&&$?[...l.values()].find(xe=>xe.type===Mw)?.mesh:null,de=$?a.get(le.id)?.art?.model:null;ge?(ye.set(0,0,-.23).applyQuaternion(ge.quaternion),fe.position.copy(ge.position).add(ye),fe.rotation.set(0,0,0),ne.position.set(0,0,0),ne.quaternion.copy(ge.quaternion),fe.updateMatrixWorld(!0),N.copy(fe.position)):de&&(G===1||G===2)?(ye.set(0,.72,G===1?-2.7:2.7).applyAxisAngle(c0,de.rotation.y),Te.copy(de.position).add(ye),fe.position.lerp(Te,1-Math.exp(-Y*11)),ne.position.set(0,0,0),fe.updateMatrixWorld(!0),ne.lookAt(de.position),ne.updateWorldMatrix(!0,!1),N.copy(fe.position)):he(T)}Z.tick({x:N.x,y:N.y,z:N.z,yaw:ce,map:J,ready:y,avatar:y?Ue:null,objectFeed:y&&Z.role==="vr"&&R?ge=>{let de=c.capture(ge,R);return de&&(g=de,m=ge+200),ge<m?g:null}:null}),K(y,L)}function Re(T){let z=a.get(T)?.pose;return w(z)?z:null}return{update:ae,getPeer:Re,sendAction(T){return Z.sendAction(T,S())},get role(){return Z.role},get connected(){return w(Z.remote)},get remoteSpectator(){return Z.peers.find(T=>T.role==="pc"&&w(T))??null},get remoteLight(){return f===-1?null:f},get replicaCount(){return l.size},forEachReplica(T){for(let z of l.values())z.mesh.visible&&T(z.mesh)}}}var p0=Object.freeze([8,16,32,48]),m0=16,Bu=24,f0=new WeakMap,os=Xe.clamp,ro=Xe.lerp,Tf=n=>n*n*(3-2*n);function so(n,e,t,i){return Number.isFinite(n)?os(n,e,t):i}function oo(n={}){let e=p0.includes(n?.detail)?n.detail:m0,t=n?.heights;return{detail:e,seed:Math.round(so(n?.seed,0,2147483647,1)),amplitude:so(n?.amplitude,0,12,0),frequency:so(n?.frequency,.015,2,.12),grass:so(n?.grass,0,1,0),shrub:so(n?.shrub,0,1,0),heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>so(i,-Bu,Bu,0)):null}}function g0(n,e,t,i){let s=os(t,0,e),r=os(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,h=a*u+o,f=n[h],d=n[h+1],p=n[h+u],x=n[h+u+1];return l+c<=1?f+(d-f)*l+(p-f)*c:x+(p-x)*(1-l)+(d-x)*(1-c)}function x0(n,e){let t=p0.includes(e)?e:m0;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>g0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Ni(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function wf(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Tf(n-i),o=Tf(e-s),a=ro(Ni(i,s,t),Ni(i+1,s,t),r),l=ro(Ni(i,s+1,t),Ni(i+1,s+1,t),r);return 2*ro(a,l,o)-1}function Ou(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=i,c=f0.get(n),u=c&&c.w===e&&c.d===t&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(u&&c.heights===l)return c;let h=s+1,f=u?c.procedural:new Float64Array(h**2);if(!u&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let m=(g/s-.5)*e*a,S=(x/s-.5)*t*a;f[x*h+g]=o*(.62*wf(m,S,r)+.26*wf(m*2.03,S*2.03,r+13)+.12*wf(m*4.13,S*4.13,r+37))}let d=l?f.map((x,g)=>x+l[g]):f,p={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:f,surface:d};return f0.set(n,p),p}function Af(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return g0(o,i,(e/s+.5)*i,(t/r+.5)*i)}function ww(n,e,t){return n.y+Af(Ou(n),e-n.x,t-n.z)}function Tw(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,h=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(u+=s[f*r+d],h++);return u/h}function y0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ou(n),{detail:l,w:c,d:u,surface:h,procedural:f}=a,d=e-n.x,p=t-n.z,x=os(d,-c/2,c/2),g=os(p,-u/2,u/2);if((d-x)**2+(p-g)**2>=s**2)return!1;let m=(d/c+.5)*l,S=(p/u+.5)*l,w=c/l,v=u/l,A=Math.max(0,Math.ceil(m-s/w)),P=Math.min(l,Math.floor(m+s/w)),I=Math.max(0,Math.ceil(S-s/v)),D=Math.min(l,Math.floor(S+s/v)),b=Number.isFinite(o)?o-n.y:Af(a,d,p),_=l+1,C=a.heights?.slice()??new Array(_**2).fill(0),U=!1,q=!1;function G(V,j,te){U=!0;let B=j*_+V,Z=C[B],oe;if(i==="raise"||i==="lower")oe=Z+(i==="raise"?1:-1)*r*te;else{let ie=i==="flatten"?b:Tw(a,V,j);oe=ro(h[B],ie,Math.min(1,r)*te)-f[B]}oe=os(oe,-Bu,Bu),!(Math.abs(oe-Z)<1e-7)&&(C[B]=oe,q=!0)}for(let V=I;V<=D;V++)for(let j=A;j<=P;j++){let te=Math.hypot((j-m)*w,(V-S)*v)/s;te<1&&G(j,V,Tf(1-te))}if(!U){let V=os(m,0,l),j=os(S,0,l),te=Math.min(l-1,Math.floor(V)),B=Math.min(l-1,Math.floor(j)),Z=V-te,oe=j-B,ie=Z+oe<=1,pe=ie?1-Z-oe:Z+oe-1,ve=ie?Z:1-oe,Te=ie?oe:1-Z;if(pe>=Math.max(ve,Te)){let ye=+!ie;G(te+ye,B+ye,1)}else ve>=Te?G(te+1,B,1):G(te,B+1,1)}return q&&(n.terrain.heights=C),q}function _0(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let h=0;h<=s;h++)for(let f=0;f<=s;f++){let d=h*r+f;o[3*d]=(f/s-.5)*e,o[3*d+2]=(h/s-.5)*t,a[2*d]=f/s*e/2.6,a[2*d+1]=(1-h/s)*t/2.6,h<s&&f<s&&(l.set([d,d+r,d+1,d+r+1,d+1,d+r],c),c+=6)}let u=new et;return u.setAttribute("position",new Mt(o,3).setUsage(Yn)),u.setAttribute("uv",new Mt(a,2)),u.setIndex(new Mt(l,1)),Aw(u,n),u}function Aw(n,e){let{surface:t}=Ou(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function v0(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>ww(n,t,i),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function Ew(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new et;return e.setAttribute("position",new ke(n,3)),e.computeVertexNormals(),e}function Cw(){return new Lt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var Rw=[{name:"grass",geometry:Ew,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:Cw,perMetre:.17,max:48,salt:47,color:"#36583c"}];function M0(n){let e=new ft;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of Rw){let l=n.terrain[t];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(n.w*n.d*s*l))),u=new Zt({color:a,side:t==="grass"?Ht:ii});u.flatShading=!0;let h=new ta(i(),u,c);h.name=t,h.instanceMatrix.setUsage(Yn),h.userData.salt=o,h.receiveShadow=!0;let f=new Ne;for(let d=0;d<c;d++){let p=ro(.68,1.2,Ni(d,o,n.terrain.seed+4));h.setColorAt(d,f.setRGB(p,p,p))}e.add(h)}return Pw(e,n),e}function Pw(n,e){let t=Ou(e),i=new It;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Ni(a,r,o)-.5)*.96*e.w,c=(Ni(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Af(t,l,c),c),i.rotation.y=Ni(a,r,o+2)*2*Math.PI,i.scale.setScalar(ro(.58,1.34,Ni(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function b0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var zu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],S0=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function w0(n,e=S0[n]){n=Math.max(0,Math.min(zu.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:S0[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let h of[0,-512])for(let f of[0,-512])i.fillRect(a+h,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function T0({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=d=>Math.min(1,Math.max(-1,d));function h(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=d=>{if(e()){if(d.pointerType==="touch"){let p=n.getBoundingClientRect();if(d.clientX-p.left<p.width*.46){if(o)return;o={id:d.pointerId,x:d.clientX,y:d.clientY}}else{if(a)return;a={id:d.pointerId,x:d.clientX,y:d.clientY,total:0}}d.preventDefault()}else{if(d.button!==0&&d.button!==2)return;l=!0}n.setPointerCapture(d.pointerId)}},n.onpointermove=d=>{if(e())if(d.pointerId===o?.id)r.x=u((d.clientX-o.x)/48),r.z=u((d.clientY-o.y)/48);else if(d.pointerId===a?.id){let p=d.clientX-a.x,x=d.clientY-a.y;a.x=d.clientX,a.y=d.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&d.pointerType!=="touch"&&t(d.movementX,d.movementY,.004)};function f(d,p){d.pointerId===o?.id&&(r.x=r.z=0,o=null),d.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),d.pointerType!=="touch"&&(l=!1)}return n.onpointerup=d=>f(d,!0),n.onpointercancel=n.onlostpointercapture=d=>f(d,!1),n.oncontextmenu=d=>d.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(d=>{d.onclick=()=>{if(!e())return;let p=d.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:h,consumeJump(){let d=c;return c=!1,d}}}var Iw=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function A0(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){Iw.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function E0(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var Vu=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:h,offset:f}=c,d=u.surface;if(c.released=null,u.surface=null,u.groundContact=!1,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&(!u.held||u.hasSupport)&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(u.hasSupport?f.copy(u.supportOffset):f.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=d&&r.includes(d)&&!d.objectBody?.owner,g=x&&d.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),h.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(f),this.from.copy(p).add(f),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(f),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let D=this.correction.subVectors(p,u.anchor),b=D.dot(h)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&D.lengthSq()<=Math.max(.12,l*.5)**2;b&&(!m||m===d&&this.hitNormal.dot(h)>.7)?(m=d,this.hit.copy(u.anchor).add(f),this.hitNormal.copy(h)):!b&&m===d&&D.dot(h)>.035&&(m=null),!m&&c.tracked&&(c.released=d,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(f),h.copy(this.hitNormal);let S=m.friction??.8,w=Math.min(1,Math.max(0,S*(.75+s.grip*.09))),v=Math.min(.97,Math.max(0,1-w+(s.slide-3)*.035)),A=this.correction.subVectors(u.anchor,p),P=A.dot(h);if(A.addScaledVector(h,-P),A.lengthSq()*v**2>.003**2){if(this.to.copy(u.anchor).add(f).addScaledVector(A,-v),this.from.copy(this.to).addScaledVector(h,.003),this.to.addScaledVector(h,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(f);else if(v>.5&&A.lengthSq()>.035**2)continue}A.subVectors(u.anchor,p),x&&A.dot(h)<0&&A.addScaledVector(h,-A.dot(h)),a.add(A);let I=m.objectBody;if(I){let D=c.inverseRotation.copy(I.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(f).sub(I.mesh.position).applyQuaternion(D),c.localNormal.copy(h).applyQuaternion(D)}if(u.surface=m,u.groundContact=h.y>.55,this.contacts++,c.tracked){let D=this.handMotion.subVectors(c.previousTarget,p),b=D.dot(h);D.multiplyScalar(1-v).addScaledVector(h,Math.max(0,b)-b*(1-v)),this.intent.add(D)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let d of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=d;d.tracked=d.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let d=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(d,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let d=0;d<o.length&&u>0;d++){let p=o[(this.historyIndex-d+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let d=0;d<2;d++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:h,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*h)/(.72+.056*f)),t.clampLength(0,8.5+.28*h);for(let d of this.hands){let p=d.hand.surface??d.released;p&&(d.releaseSurface=p,d.releaseTime=.08,d.hand.surface=null,d.previousPalm.copy(d.previousTarget).add(d.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function C0(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}var R0=.1,Lw=45,P0=55,za=24,Ef=96,Dw=[new Ne("#ffdc4d"),new Ne("#ff5d35"),new Ne("#bfc4c8")],Uw=new M(0,0,-1);function I0(n,{impact:e}){let t=new ft,i=new Tt({color:"#596974",roughness:.38,metalness:.6}),s=new Tt({color:"#29323e",roughness:.68}),r=new pt({color:"#ffd563",toneMapped:!1});function o(G,V,j,te,B,Z=0){let oe=new Be(G,V);oe.position.set(j,te,B),oe.rotation.x=Z,t.add(oe)}o(new Je(.075,.064,.18),s,.035,.024,-.065),o(new Je(.042,.08,.055),i,.035,-.025,-.022,-.22),o(new Gt(.02,.024,.071,8).rotateX(Math.PI/2),i,.035,.028,-.161),o(new Je(.024,.01,.025),r,.035,.061,-.133);let a=new Be(new Lt(.045,0),new pt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));a.position.set(.035,.028,-.208),t.add(a),n.add(t),t.visible=!1;let l=new et,c=new ke(za*18,3).setUsage(Yn),u=new ke(za*18,3);for(let G=0;G<za;G++)for(let V=0;V<6;V++){let j=Dw[Math.floor(V/2)];u.setXYZ(G*6+V,j.r,j.g,j.b)}l.setAttribute("position",c),l.setAttribute("color",u),l.setDrawRange(0,0);let h=new ia(l,new ts({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));h.frustumCulled=!1,h.visible=!1,n.add(h);let f=new ke(Ef*3,3).setUsage(Yn),d=new et;d.setAttribute("position",f),d.setDrawRange(0,0);let p=new ra(d,new Gr({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:qn}));p.frustumCulled=!1,p.visible=!1,n.add(p);let x=Array.from({length:za},()=>({p:new M,d:new M,distance:0,active:!1})),g=Array.from({length:Ef},()=>({p:new M,v:new M,life:0})),m=new M,S=new M,w=new M,v=0,A=0,P=0,I=0,D=0,b=!1;function _(G,V,j,te){for(let B=0;B<j;B++){let Z=g[A++%Ef];Z.p.copy(G),Z.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(te).addScaledVector(V,.55),Z.life=.12+Math.random()*.21}}function C(G){let V=x[v++%za];m.copy(G.position),V.p.copy(m),V.d.copy(G.direction).normalize(),V.d.lengthSq()<.5&&V.d.copy(Uw).applyQuaternion(G.quaternion),V.distance=0,V.active=!0,S.set(.035,.028,-.208).applyQuaternion(t.quaternion).add(t.position),_(S,V.d,4,2.2),D=.055,P++}function U({dt:G,aim:V,firing:j}){if(!V&&!t.visible&&!h.visible&&!p.visible)return;if(G=Math.max(0,Math.min(G,.12)),t.visible=!!V,V&&(t.position.copy(V.modelPosition??V.position),t.quaternion.copy(V.quaternion)),V&&j){if(b)for(I-=G;I<=0;)C(V),I+=R0;else C(V),I=R0;b=!0}else I=0,b=!1;D=Math.max(0,D-G),a.visible=!!V&&D>0,a.material.opacity=D/.055;let te=0;for(let Z of x){if(!Z.active)continue;let oe=Math.min(Lw*G,P0-Z.distance),ie=oe>0?e?.(Z.p,Z.d,oe):null,pe=ie==null?oe:Math.max(0,Math.min(oe,ie));Z.p.addScaledVector(Z.d,pe),Z.distance+=pe,ie!=null&&(w.copy(Z.d).negate(),_(Z.p,w,8,4.2)),Z.active=ie==null&&Z.distance<P0;let ve=Math.min(.82,Z.distance);for(let Te=0;Te<3;Te++)for(let ye=0;ye<2;ye++){let F=(Te+ye)/3;S.copy(Z.p).addScaledVector(Z.d,-ve*F),c.setXYZ(te++,S.x,S.y,S.z)}}h.visible=te>0,te>0&&(c.needsUpdate=!0),l.setDrawRange(0,te);let B=0;for(let Z of g)Z.life<=0||(Z.life-=G,Z.v.y-=5*G,Z.p.addScaledVector(Z.v,G),Z.life>0&&f.setXYZ(B++,Z.p.x,Z.p.y,Z.p.z));p.visible=B>0,B>0&&(f.needsUpdate=!0),d.setDrawRange(0,B)}function q(){for(let G of x)G.active=!1;for(let G of g)G.life=0;I=D=0,b=!1,t.visible=a.visible=h.visible=p.visible=!1,l.setDrawRange(0,0),d.setDrawRange(0,0)}return{update:U,reset:q,get shotsFired(){return P}}}function L0({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new je,l=0,c=new Li,u=[],h=new Map,f=I0(n,{impact(x,g,m){c.set(x,g),c.far=m;let S=c.intersectObjects(u,!1)[0];if(!S)return null;let w=h.get(S.object);return w&&!w.owner&&!w.frozen&&w.velocity.addScaledVector(g,Math.min(4,2.6/w.mass)),S.distance}}),d={position:new M,quaternion:new je,direction:new M,modelPosition:new M};function p({frame:x,space:g,inVR:m,enabled:S,remoteWorld:w,dt:v,yaw:A,drop:P,rightHand:I,flatFiring:D}){let b=null,_=!1;if(S)if(m){let C=[...x.session.inputSources].find(q=>q.handedness==="right"),U=C&&x.getPose(C.targetRaySpace,g);if(U){let{position:q,orientation:G}=U.transform;b=d,b.position.set(q.x,q.y-P,q.z).applyAxisAngle(o,A).add(e.position),b.modelPosition.copy(I.valid?I.mesh.position:b.position),b.quaternion.set(G.x,G.y,G.z,G.w).premultiply(a.setFromAxisAngle(o,A)),b.direction.set(0,0,-1).applyQuaternion(b.quaternion),_=!!C.gamepad?.buttons[0]?.pressed}}else b=d,t.getWorldPosition(b.position),t.getWorldQuaternion(b.quaternion),b.direction.set(0,0,-1).applyQuaternion(b.quaternion),b.modelPosition.set(.16,-.17,-.43).applyQuaternion(b.quaternion).add(b.position),_=D;if(u.length=0,h.clear(),b||l){for(let C of i.boxes)C.mesh?.isMesh&&C.mesh.visible&&u.push(C.mesh);if(w)r.forEachReplica(C=>u.push(C));else for(let C of s)C.mesh.visible&&C.collidable&&!C.owner&&(u.push(C.mesh),h.set(C.mesh,C))}f.update({dt:v,aim:b,firing:_}),_?l=1.3:l=Math.max(0,l-v)}return{update:p,reset(){f.reset(),l=0},get shotsFired(){return f.shotsFired}}}function D0(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function U0(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!1,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,timeOfDay:1,viewFov:70,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Xs=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],ku=["Naturel","Cellulo","Affiche","R\xE9tro"],Gu={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function Hu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new et,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=F0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let p=F0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function F0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Xu=0,Fw=1,Nw=new M,N0=new Ea,Cf=new bn,B0=new M,Wu=new Sn,qu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Yu,this.unassigned=new Yu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Rf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Nw)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Xu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,u;r=0,N0.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l){N0.closestPointToPoint(p.point,!0,B0);let x=B0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Cf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Cf.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let h=[];if(Cf.distanceToPoint(u.point)<0){h.push(ri.create(a,l,c),ri.create(u,l,a),ri.create(u,c,l),ri.create(u,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge(d)),h[f+1].getEdge(1).setTwin(h[d+1].getEdge(0))}}else{h.push(ri.create(a,c,l),ri.create(u,a,l),ri.create(u,l,c),ri.create(u,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge((3-f)%3)),h[f+1].getEdge(0).setTwin(h[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(h[f]);for(let f=0,d=e.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Xu&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Fw;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Xu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=ri.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},ri=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Xu,this.edge=null}static create(e,t,i){let s=new n,r=new Va(e,s),o=new Va(t,s),a=new Va(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Wu.set(e.point,t.point,i.point),Wu.getNormal(this.normal),Wu.getMidpoint(this.midpoint),this.area=Wu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Va=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Rf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Yu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var qs=class extends et{constructor(e=[]){super();let t=[],i=[],r=new qu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(i,3))}};var En=Math.PI*2,Zu=.84,Bi=128;function cs(n){let e=new Uint8Array(Bi*Bi*4);for(let i=0;i<Bi;i++)for(let s=0;s<Bi;s++){let r=(s+.5)/Bi,o=(i+.5)/Bi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Zu,1),Math.min(o/Zu,1),s,i),l=(s+i*Bi)*4;for(let c=0;c<3;c++)e[l+c]=Xe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new di(e,Bi,Bi);return t.colorSpace=xt,t.generateMipmaps=!0,t.minFilter=Tn,t.magFilter=on,t.needsUpdate=!0,t}function Ys(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function nt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Ne(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Zu,r.getY(l)*Zu):r.setXY(l,.95,.95);return i.setAttribute("color",new Mt(a,3)),i}function us(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Hu(s),material:new Tt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function O0(n,e,t){let i=n/2,s=e/2,r=new Us;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function as(n,e,t,i,s){return new xa(O0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ls(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[h,f]=n[u];for(let d=0;d<=e;d++){let p=En*d/e,x=t(h,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(d/e,u/(n.length-1)),u===n.length-1||d===e)continue;let g=u*(e+1)+d,m=g+e+1;h>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new et;o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let h=u*(e+1),f=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function ka(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=En*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new qs(t)}function Bw(){let t=new ya(O0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Xe.clamp(i.getX(l)/.098+.5,0,1),u=Xe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=cs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*En),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[nt(as(.106,.207,.013,.011,.0019),8425890),nt(as(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),nt(as(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),nt(t,16777215,!0),nt(as(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),nt(new Je(.0036,.024,.004).translate(.055,.029,0),11714250),nt(new Je(.0036,.015,.004).translate(-.055,.032,0),11385285),nt(new Je(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(nt(new Gt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(nt(new Yt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(nt(new Yt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new qs([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return us("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Ow(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ls(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+h)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=cs((a,l,c,u)=>{let h=En*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(h)),p=Math.max(...e.map(S=>Math.exp(-(((f-S+.035*Math.cos(h))/.009)**2)))),x=d**3*p,g=Ys(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*x+m,76+24*d+70*x+m,24+11*d+52*x+m*.8]}),o=ka([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return us("bread","Baguette de pain",.27,o,[nt(s,16777215,!0)],r,.9)}function zw(){let n=cs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*Ys(a,l)-(c&&(h||f)?35:0);return[p*.94,p,p*1.04]}),e=ls([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ls([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[nt(e,16777215,!0),nt(t,11056059),nt(new Gt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),nt(new Gt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=En*r/5;i.push(nt(new Je(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=ka([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return us("wheel","Roue",1.8,s,i,n,.64,.23)}function Vw(){let n=cs((r,o,a,l)=>{let c=Ys(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos(En*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=ls([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Ii(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+En*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new qs(i);return us("cup","Tasse",.39,s,[nt(e,16777215,!0),nt(t,15785922)],n,.37)}function kw(){let n=ls([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=cs((s,r,o,a)=>{let l=9*Ys(o,a),c=11*Math.cos(s*En*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*En*48+s*En*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*En*4);return[u,u*1.13,u*1.24]}),t=[nt(n,16777215,!0),nt(new qr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),nt(new Yt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),nt(new Yt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),nt(new Gt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),nt(new Yt(.008,12).translate(0,.035,.0336),15633202)],i=ka([[.033,-.143],[.054,.133]],6);return us("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function Gw(){let n=ls([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=cs((r,o,a,l)=>{let c=10*Ys(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(En*r*2));if(e[f]?.[h]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(En*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[nt(n,16777215,!0),nt(new Yt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),nt(new qr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),nt(new Yt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=ka([[.069,-.112],[.069,.109]],6);return us("soda","Canette de soda",.35,s,i,t,.42,.27)}function Hw(){let n=ls([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=cs((s,r,o,a)=>{let l=15*Ys(o,a),c=8*Math.cos(s*En*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[nt(n,16777215,!0),nt(as(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),nt(new Yt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=ka([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return us("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function Ww(){let n=cs((s,r,o,a)=>{let l=8*Ys(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ls([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[nt(as(.138,.22,.061,.016,.004),14788675),nt(as(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),nt(new $t(.106,.174).translate(0,-.004,.0395),16777215,!0),nt(e,2502456),nt(new Gt(.014,.017,.016,10).translate(.04,.117,.001),2503482),nt(new Je(.008,.047,.027).translate(-.072,.014,-.002),3028798),nt(new Je(.006,.02,.019).translate(-.072,-.043,-.002),3950414),nt(new Yt(.004,8).translate(.04,.066,.0397),15817792),nt(new Yt(.004,8).translate(-.04,.066,.0397),7903100),nt(as(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return us("radio","Talkie-walkie",.43,new qs(i),t,n,.61,.08)}function z0(){return[Bw(),Ow(),zw(),Vw(),kw(),Gw(),Hw(),Ww()]}var V0=new WeakMap;function Pf(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,V0.set(n,e),n}function ju(n){let e=n.clone(),t=V0.get(n);return t?Pf(e,t):e}function Xw(n){let t=new Pi(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Lt(.225,0),s=new va({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Pf(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function qw(n){let e=new Je(.37,.37,.37),t=new Tt({color:16777215,roughness:.4});return Pf(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function k0(){let n={value:0};return{props:[Xw(n),qw(n)],animate(e){n.value=e}}}var Lf="gorilla-lab-models-v1",Zs=Object.freeze({models:12,parts:24,fileBytes:18e4}),Yw=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),H0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Zw=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),jw=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Jw=/^#[a-f\d]{6}$/i;function G0(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function If(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Xe.clamp(n[s],t,i):e)}function Df(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Zs.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!jw.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Zs.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:G0(i.name,"Mod\xE8le sans nom"),inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(Zw).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:G0(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(Yw,s?.shape)?s.shape:"box",position:If(s?.position,0,-3,3),rotation:If(s?.rotation,0,-360,360),scale:If(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&Jw.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(H0,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Uf(n){try{let e=(n??globalThis.localStorage)?.getItem(Lf);if(e&&e.length<=Zs.fileBytes)return Df(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Kw(n){switch(n){case"sphere":return new Pi(.5,20,12);case"cylinder":return new Gt(.5,.5,1,20);case"cone":return new Ds(.5,1,20);case"torus":return new Ii(.365,.135,8,24);case"capsule":return new la(.28,.44,6,16);case"diamond":return new Ri(.5);default:return new Je(1,1,1)}}var W0=Object.keys(H0),ao=64,Ga=4,X0=2,Oi;function $w(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Qw(){if(Oi)return Oi;let n=ao*Ga,e=ao*X0,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/ao)*Ga+Math.floor(s/ao),o=$w(W0[r],s%ao,i%ao),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Oi=new di(t,n,e),Oi.colorSpace=xt,Oi.magFilter=on,Oi.minFilter=Tn,Oi.generateMipmaps=!0,Oi.needsUpdate=!0,Oi}function eT(n){let e=Kw(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(Xe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new Ne(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=W0.indexOf(n.surface),c=l%Ga,u=Math.floor(l/Ga);for(let h=0;h<r;h++)s.toArray(o,h*3),a.setXY(h,(c+.05+a.getX(h)*.9)/Ga,(u+.05+a.getY(h)*.9)/X0);return t.setAttribute("color",new Mt(o,3)),t}function q0(){return new Tt({vertexColors:!0,map:Qw(),roughness:.68})}function Y0(n){let e=n.map(eT),t=Hu(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Z0(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Y0(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:q0(),collisionGeo:new Je(i.x,i.y,i.z),mass:Xe.clamp(i.x*i.y*i.z*9,.18,12)}})}function j0(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Y0(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Be(t,q0());r.castShadow=!0;let o=new ft;return o.add(r),o}var Ot=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),J0=Ot(-24,24,-51,7),Ju={x:0,y:0,z:3},Ku={x:.05,y:1.16,z:5.9},lo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Ot(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Ot(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Ot(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Ot(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Ot(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Ot(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Ot(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Ot(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Ot(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Ot(9,23,-48,-37),sign:[16,-38.2]}},TC=[Ot(-9,-6,-51,7),Ot(6,9,-51,7),Ot(-24,24,-8,-5),Ot(-24,24,-27,-23),Ot(9,23,-37,-34)],K0=[{name:"Glace",bounds:lo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:lo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Ot(-9,9,-51,7)},{name:"Sol ouest",bounds:Ot(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Ot(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Ot(-24,-23,-51,7)},{name:"Sol est",bounds:Ot(9,23,-51,-48)},{name:"Sol est",bounds:Ot(9,23,-37,7)},{name:"Bordure est",bounds:Ot(23,24,-51,7)}],co={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},uo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Ff=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Nf={x:16,z:-31},Bf={x:16,y:1.52,z:-21},$u={x:-19.4,y:.68,z:-3.25},$0=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Q0={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Bf.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Qu(n,e,t){let i=new Je(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Cn=new je,zt=new M,ah=new M,tT=new ot,ex=new WeakMap;function hh(n){if(n.heightfield||n.objectBody)return null;let e=ex.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=tT.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return ex.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function ax(n,e,t){let i=hh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function lh(n,e,t,i){if(t.heightfield)return fT(n,e,t,i);if(t.objectBody)return yx(n,e,t.objectBody,i);if(!ax(n,e,t))return 0;Cn.copy(t.quaternion).invert(),zt.copy(n).sub(t.position).applyQuaternion(Cn);let s=t.half;ah.copy(zt).clamp(t.min,s),i.subVectors(zt,ah);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(zt.x),a=s.y-Math.abs(zt.y),l=s.z-Math.abs(zt.z);return o<=a&&o<=l?i.set(Math.sign(zt.x)||1,0,0):a<=l?i.set(0,Math.sign(zt.y)||1,0):i.set(0,0,Math.sign(zt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var st=new M,zi=new M;function Yf(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=lh(n,e,c,st);if(!u||(n.addScaledVector(st,u+1e-4),st.y>.65&&(a=!0),!i))continue;let h=i.dot(st);h<0&&i.addScaledVector(st,-h*(Math.abs(h)<.55?1:1+s)),zi.copy(i).addScaledVector(st,-i.dot(st)),i.addScaledVector(zi,-Math.min(.95,r*c.friction*o))}return a}var Of=new M,mo=[];function Za(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));mo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,h=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let d of i){let p=hh(d);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&h<=p.maxZ)&&mo.push(d)}for(let d=1;d<=o;d++){Of.copy(n).lerp(e,d/o);for(let p of mo){let x=lh(Of,t,p,st);if(x)return s.copy(Of).addScaledVector(st,x+.001),r.copy(st),p}}return null}var Xa=new M,Ya=new M,go=new M,lx=new Sn,qa=new M;function xo(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),g=x(p),m=x(p+1),S=x(p+2),w=new Sn(g,m,S).getNormal(new M);w.lengthSq()>.1&&s.push({a:g,b:m,c:S,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new sn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),h=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:f,normals:e?[]:d(s.map(p=>p.n)),edges:e?[]:d(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function cx(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Cn.copy(t.quaternion).invert(),zt.copy(n).sub(t.position).applyQuaternion(Cn),i.faces.every(r=>r.n.dot(Xa.subVectors(zt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)lx.set(r,o,a).closestPointToPoint(zt,qa),s=Math.min(s,zt.distanceToSquared(qa));return Math.sqrt(s)}function nT(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=lh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Cn.copy(e.quaternion).invert(),zt.copy(s.position).sub(e.position).applyQuaternion(Cn),ah.copy(zt).clamp(e.min,e.half),zt.distanceToSquared(ah)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){Xa.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=lh(Xa,.007,e,go);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Xa),t.copy(go)):Math.abs(c-o)<.003&&go.dot(t)>.98&&(i.lerp(Xa,1/++a),o=Math.max(o,c)))}return o}var eh=new M,iT=new M,th=new M,sT=new M,rT=new M;function Vi(n){return xo(new Je(n.x*2,n.y*2,n.z*2))}function dh(n,e,t){let i=sT.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=rT.copy(o).negate(),c=Ks(n,l)+Ks(e,o)-a,u=Ks(n,o)+Ks(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(eh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(eh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){th.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(eh.copy(a).applyQuaternion(e.mesh.quaternion).cross(th)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(iT.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Cn.copy(a.mesh.quaternion).invert(),zt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Cn);for(let{a:c,b:u,c:h}of a.shape.faces){lx.set(c,u,h).closestPointToPoint(zt,qa);let f=zt.distanceToSquared(qa);f<l&&(l=f,th.copy(qa))}if(!r(eh.subVectors(zt,th).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var oT=new M;function aT(n,e,t){Cn.copy(e.quaternion).invert(),zt.copy(n.mesh.position).sub(e.position).applyQuaternion(Cn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(zt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=zt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+Ks(n,oT.copy(t).negate())-s,a=r+Ks(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Zf(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return nT(n,e,t,i??Ya);let s=aT(n,e,t)??dh(n,e,t);return s>0&&i&&dx(n,e,t,i),s}var Wf=xo(new Ri(1,0).scale(.055,.033,.075)),nh={mesh:{position:new M,quaternion:new je},shape:Wf,radius:Wf.radius,precise:!0};function ux(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Wf.radius;mo.length=0;for(let c of i){let u=hh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||mo.push(c)}nh.mesh.quaternion.copy(t);let l=nh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of mo){let h=u.objectBody;if(h&&(h.owner||l.distanceToSquared(h.mesh.position)>(a+h.radius)**2))continue;let f=h?dh(nh,h,st):Zf(nh,u,st);if(f>0)return s.copy(l).addScaledVector(st,f+5e-4),r.copy(st),u}}return null}function ja(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!ax(n.mesh.position,n.radius,s))continue;let r=Zf(n,s,st);r<=1e-6||(n.mesh.position.addScaledVector(st,r),i=!0)}if(!i)break}}var zf=new M,Ha=new M,ih=new M,Vf=new je,hs=new je,tx=new je;function nx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function hx(n,e,t,i,s){let{mesh:r,shape:o}=n;zf.copy(r.position),Vf.copy(r.quaternion),Ha.subVectors(e,zf);let a=nx(Vf,t,hs),l=Ha.length()+a*o.radius,c=gx(o),u=Math.max(1,Math.min(mx,Math.ceil(l/c))),h=l>0?Math.min(1,u*c/l):1,f=a*h/u;ih.set(hs.x,hs.y,hs.z).normalize(),tx.setFromAxisAngle(ih,f),Ha.multiplyScalar(h/u);for(let x=0;x<u;x++)r.position.add(Ha),r.quaternion.premultiply(tx).normalize(),ja(n,i);let d=Math.max(.006,s||0);n.velocity.lerp(Ha.subVectors(r.position,zf).divideScalar(d).clampLength(0,23),.52);let p=nx(Vf,r.quaternion,hs);ih.set(hs.x,hs.y,hs.z).normalize().multiplyScalar(Math.min(24,p/d)),n.angular.lerp(ih,.52)}function Ks(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Cn.copy(n.mesh.quaternion).invert(),go.copy(e).applyQuaternion(Cn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(go));return t}var po=new M,ch=new M,lT=new M,kf=new M,ho={},fo={};function ix(n,e,t,i){let{mesh:s,shape:r}=n,o=Ks(n,lT.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(po),i.minV=i.maxV=s.position.dot(ch);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(go)<o-.0015)continue;kf.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=kf.dot(po),c=kf.dot(ch);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function dx(n,e,t,i){Math.abs(t.y)<.8?po.set(-t.z,0,t.x).normalize():po.set(t.y,-t.x,0).normalize(),ch.crossVectors(t,po),ix(n,t,-1,ho),ix(e,t,1,fo);let s=(Math.max(ho.minU,fo.minU)+Math.min(ho.maxU,fo.maxU))*.5,r=(Math.max(ho.minV,fo.minV)+Math.min(ho.maxV,fo.maxV))*.5;i.copy(t).multiplyScalar((ho.plane+fo.plane)*.5).addScaledVector(po,s).addScaledVector(ch,r)}var sx=new M;function uh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)sx.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(sx)}}function cT(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function fx(n){return!n.owner&&!n.frozen}var js=new M,Js=new M,Wa=new M,rx=new M,Xf=new M,qf=new M,uT=new M;function sh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function px(n,e,t,i){let{mesh:s,shape:r}=n.body;return Cn.copy(s.quaternion).invert(),Xf.crossVectors(e,t),i.copy(Xf).applyQuaternion(Cn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function rh(n,e,t){return n?.inverseMass?(px(n,e,t,qf),n.inverseMass+Xf.dot(qf)):0}function oh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(px(n,e,t,qf),i))}function Gf(n){return n.friction??n.spec?.friction??.78}function ox(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(Gf(r)*Gf(o)):Math.min(Gf(r),t.friction??.78);js.subVectors(Ya,r.mesh.position),o&&Js.subVectors(Ya,o.mesh.position),sh(n,js,Wa).sub(sh(e,Js,rx));let l=Wa.dot(st),c=!1;if(l<-1e-5){let h=l<-.8?Xe.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+h)/(rh(n,js,st)+rh(e,Js,st));oh(n,js,st,f),oh(e,Js,st,-f),sh(n,js,Wa).sub(sh(e,Js,rx)),zi.copy(Wa).addScaledVector(st,-Wa.dot(st));let d=zi.length();if(d>1e-5&&a>0){zi.divideScalar(d);let p=Math.min(f*a,d/(rh(n,js,zi)+rh(e,Js,zi)));oh(n,js,zi,-p),oh(e,Js,zi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let h=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(st,u*n.inverseMass/h),uh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(st,-u*e.inverseMass/h),uh(e)),c=!0}return n.inverseMass&&st.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,st.y)),e?.inverseMass&&st.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-st.y)),c}function hT(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var mx=96,dT=5;function gx(n){return Math.max(.008,n.thickness*.35)}function xx(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:hh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let h=fx(u);if(h){let d=Math.min(u.angular.length(),30),p=u.velocity.length()+d*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/gx(u.shape)))}let f={body:u,inverseMass:h?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new sn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};uh(f),o.push(f)}l=Math.min(mx,l);let c=t/l;for(let u=0;u<l;u++){for(let h of o){if(!h.inverseMass)continue;let{body:f}=h,{mesh:d,velocity:p,angular:x}=f;h.groundFriction=0,h.groundY=0,p.y-=i*c*(r?.(d.position)?.gravity??1),d.position.addScaledVector(p,c);let g=x.length();g>1e-5&&d.rotateOnWorldAxis(uT.copy(x).divideScalar(g),Math.min(g,30)*c),uh(h)}for(let h=0;h<dT;h++){let f=!1;for(let d of o)if(d.inverseMass)for(let{box:p,bounds:x}of a){if(!cT(d.bounds,p,x))continue;let g=Zf(d.body,p,st,Ya);g>0&&(f=ox(d,null,p,g,s)||f)}for(let d of o)d.sweepStart=d.bounds.min.x,d.sweepEnd=d.bounds.max.x;o.sort((d,p)=>d.sweepStart-p.sweepStart);for(let d=0;d<o.length;d++){let p=o[d];for(let x=d+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=dh(p.body,g.body,st);m<=0||(dx(p.body,g.body,st,Ya),f=ox(p,g,null,m,s)||f)}}if(!f)break}for(let h of o)h.inverseMass&&hT(h,c)}}function fT(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var Hf={mesh:{position:null,quaternion:new je},shape:{sphereRadius:0,normals:[],edges:[]}};function yx(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Hf.mesh.position=n,Hf.shape.sphereRadius=e,dh(Hf,t,i))}function _x(n,e,t,i,s){let r=yx(n,e,t,st);if(r<=0)return!1;n.addScaledVector(st,r+.001),s?.copy(st);let o=i.dot(st);return o<0&&(i.addScaledVector(st,-o),Math.abs(st.y)<.6&&fx(t)&&t.velocity.addScaledVector(st,-Math.min(2.8,-o*.24))),!0}var jf=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Mx=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Jf={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},fh=3e6,Ja=240,mn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,vx=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function ph(n){if(typeof n=="string"){if(n.length>fh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ja)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ja+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:vx(n.name,56,"Ma map"),spawn:{x:mn(e.x,-120,120,0),y:mn(e.y,-10,30,.06),z:mn(e.z,-120,120,3),yaw:mn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?oo(t.terrain):null;return{name:vx(t.name,36,"Pi\xE8ce "+(i+1)),x:mn(t.x,-120,120,0),y:mn(t.y,-12,33,0),z:mn(t.z,-120,120,0),w:mn(t.w,.2,64,3),h:mn(t.h,.12,36,.5),d:mn(t.d,.2,64,3),pitch:s?0:mn(t.pitch,-70,70,0),yaw:s?0:mn(t.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(mn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:mn(t.grip,0,1.5,.8),gravity:mn(t.gravity,.05,2.5,1),bounce:mn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function mh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function bx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,h=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,f=m=>Math.round(m/i)*i,d=f(n.x+u.x*h),p=f(n.y+u.y*h),x=f(n.z+u.z*h),g=h-(d-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return d+=u.x*g,p+=u.y*g,x+=u.z*g,![d,p,x].every(Number.isFinite)||Math.abs(d)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:d,y:p,z:x}}var Ka="gorilla-lab-custom-map-v1";function Sx(n){let e=new Blob([JSON.stringify(ph(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function wx({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new ft;n.add(l);let c=[],u=[],h=new ba,f=new Map,d=0,p=null,x="",g=-1,m=-1,S="",w="",v=new Je(1,1,1),A=new Be(v,new pt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let P=new Li,I=new M,D=new M,b=document.querySelector("#map-note");function _(X){S=X,b.textContent=X}function C(){u.length>=20&&u.shift(),u.push(JSON.stringify(p))}function U(X,K){let ae=f.get(X);if(!ae){ae={materials:new Set,texture:null,failed:!1},f.set(X,ae);let Re=z=>{if(!(f.get(X)!==ae||ae.failed)){ae.failed=!0;for(let O of ae.materials)O.map=null,O.needsUpdate=!0;ae.texture?.dispose(),z&&_(z)}},T=h.load(X,z=>{(z.image.width>2048||z.image.height>2048)&&Re("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>Re());ae.texture=T,T.colorSpace=xt,T.wrapS=T.wrapT=hi}return ae.materials.add(K),K.map=ae.failed?null:ae.texture,ae}function q(){for(let[X,K]of f)K.materials.size||(f.delete(X),K.failed||K.texture.dispose())}function G(X){let K=e.mapMaterial(X.material,r());if(!X.texture&&X.color==="#ffffff")return{material:K,custom:!1};let ae=K.clone();return ae.onBeforeCompile=K.onBeforeCompile,ae.customProgramCacheKey=K.customProgramCacheKey,ae.color.multiply(new Ne(X.color)),{material:ae,custom:!0,ownTexture:X.texture?U(X.texture,ae):null}}function V(X){l.remove(X.mesh),X.mesh.geometry.dispose(),X.vegetation&&b0(X.vegetation),X.custom&&(X.ownTexture?.materials.delete(X.mesh.material),X.mesh.material.dispose())}function j(X,K){let{material:ae,custom:Re,ownTexture:T}=G(X),z=new Be(X.terrain?_0(X):Qu(X.w,X.h,X.d),ae);z.position.set(X.x,X.y,X.z),z.rotation.set(Xe.degToRad(X.pitch),Xe.degToRad(X.yaw),0,"YXZ"),z.castShadow=z.receiveShadow=!0,z.userData.mapIndex=K,l.add(z);let O=new M(X.w/2,X.h/2,X.d/2),Y={mesh:z,position:z.position,quaternion:z.quaternion,half:O,min:O.clone().negate(),shape:Vi(O),friction:X.grip,gravity:X.gravity,bounce:X.bounce,zone:!0,type:X.material};if(!X.terrain)return{mesh:z,collider:Y,custom:Re,ownTexture:T};let N=M0(X);return N&&z.add(N),{mesh:z,collider:v0(X,z),custom:Re,ownTexture:T,vegetation:N}}function te(){for(let X of c){let K=p?.pieces[X.mesh.userData.mapIndex];if(!K||X.ownTexture)continue;let ae=e.mapMaterial(K.material,r());X.custom?X.mesh.material.map!==ae.map&&(X.mesh.material.map=ae.map,X.mesh.material.needsUpdate=!0):X.mesh.material=ae}}function B(){for(let K of c)V(K);c.length=0;let X=p?.pieces??[];x=p?"custom-"+Ws(JSON.stringify(p)):"",o.forEach(K=>K.visible=!p);for(let K=0;K<X.length;K++)c.push(j(X[K],K));if(q(),p?e.boxes.splice(0,e.boxes.length,...c.filter((K,ae)=>X[ae].solid).map(K=>K.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),p)try{localStorage.setItem(Ka,JSON.stringify(p))}catch{}else try{localStorage.removeItem(Ka)}catch{}}function Z(X){let K=ph(X);d++,u.length=0,p=K,g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),i(p.spawn.yaw),_("Map : "+p.name+" \xB7 "+p.pieces.length+" pi\xE8ces")}function oe(){d++,p=null,u.length=0,g=m=-1,t.set(0,0,3),B(),i(0),_("Ar\xE8ne int\xE9gr\xE9e")}function ie(){Z({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[mh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function pe(){if(!u.length)return _("Rien \xE0 annuler.");p=ph(u.pop()),g=m=-1,t.set(p.spawn.x,p.spawn.y,p.spawn.z),B(),_("Derni\xE8re modification annul\xE9e.")}function ve(){p?Sx(p):_("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Te(X,K,ae,Re){p&&(C(),p.spawn={x:X,y:K,z:ae,yaw:Xe.radToDeg(Re)},t.set(X,K,ae),B(),_("Point de d\xE9part m\xE9moris\xE9."))}function ye(X,K,ae,{mode:Re,piece:T,head:z,feet:O}){P.set(X,K),P.far=12;let Y=P.intersectObjects(c.map(R=>R.mesh),!1),N=Re>=5?Y.find(R=>p?.pieces[R.object.userData.mapIndex]?.terrain):Y[0];if(A.visible=!1,!p)return;if(Re>=5){let R=N?.object.userData.mapIndex,y=p.pieces[R];if(!y?.terrain||!ae)return;if(C(),Re===9){let L=T.terrain?.detail??y.terrain.detail,J=x0(y.terrain,L);y.terrain=oo({...J,...T.terrain,heights:J.heights})}else{let L={mode:["raise","lower","smooth","flatten"][Re-5],radius:T.brushRadius,strength:T.brushStrength,target:y.y};y0(y,N.point.x,N.point.z,L)}B(),_("Relief modifi\xE9.");return}if(Re===2||Re===3||Re===4){if(!N)return;let R=N.object.userData.mapIndex,y=p.pieces[R];if(ae&&Re===2&&(g=R,m=R,_("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),ae&&Re===3){if(p.pieces.length===1)return _("Garde au moins une pi\xE8ce dans la map.");C(),p.pieces.splice(R,1),g=m=-1,B(),_("Pi\xE8ce supprim\xE9e.")}ae&&Re===4&&(C(),Object.assign(p.pieces[R],{material:T.material,grip:T.grip,gravity:T.gravity,bounce:T.bounce,solid:T.solid,texture:T.texture}),B(),_("Surface modifi\xE9e.")),N&&(A.position.copy(N.object.position),A.rotation.copy(N.object.rotation),A.scale.set(y.w,y.h,y.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(Re===3?"#ff8271":"#ffe2a2"));return}if(!N)return;let ce=m>=0?p.pieces[m]:T;if(N.object.userData.mapIndex===m)return;I.copy(N.face.normal).transformDirection(N.object.matrixWorld);let ne=ce.terrain?{...ce,x:Math.round(N.point.x*2)/2,y:N.point.y,z:Math.round(N.point.z*2)/2,pitch:0,yaw:0}:bx(N.point,I,ce);if(!ne)return;A.position.set(ne.x,ne.y,ne.z),A.rotation.set(Xe.degToRad(ne.pitch),Xe.degToRad(ne.yaw),0,"YXZ"),A.scale.set(ne.w,ne.h,ne.d),A.updateMatrixWorld(!0),A.visible=!0;let fe=new sn().setFromObject(A),Fe=new sn(new M(z.x-.26,O+.01,z.z-.26),new M(z.x+.26,z.y+.19,z.z+.26)),Ue=ne.solid&&fe.intersectsBox(Fe);if(A.material.color.set(Ue?"#fd7763":"#8be4b9"),ae){if(Ue)return _("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(m<0&&p.pieces.length>=Ja)return _("Limite de "+Ja+" pi\xE8ces atteinte.");C(),m>=0?(p.pieces[m]=ne,m=-1):p.pieces.push(ne),B(),_("Pi\xE8ce pos\xE9e \xB7 "+p.pieces.length+" pi\xE8ces")}}let F=document.querySelector("#map-file"),H=document.querySelector("#map-url");F.onchange=async()=>{let X=F.files[0];if(!X)return;let K=++d;F.value="";try{if(X.size>fh)throw Error("Map trop lourde.");let ae=await X.text();K===d&&Z(ae)}catch(ae){K===d&&_(ae.message)}};async function he(X){let K=++d;try{let ae=new URL(X,location.href);if(!["http:","https:"].includes(ae.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let Re=await fetch(ae,{credentials:"omit"});if(K!==d)return;if(!Re.ok)throw Error("URL de map inaccessible ("+Re.status+").");if(Number(Re.headers.get("content-length"))>fh)throw Error("Map trop lourde.");let z=await Re.text();K===d&&Z(z)}catch(ae){K===d&&_(ae.message)}}return document.querySelector("#map-load-url").onclick=()=>he(H.value),document.querySelector("#map-export").onclick=ve,document.querySelector("#map-reset").onclick=oe,{modelPieces:()=>p?.pieces.filter(X=>!X.terrain&&X.name!=="Sol")??[],refreshMaterials:te,load:Z,loadURL:he,reset:oe,blank:ie,undo:pe,save:ve,edit:ye,recenter:Te,inform:_,clearGhost(){A.visible=!1},get active(){return!!p},get status(){return S},get yaw(){return p?.spawn.yaw??0},get nodes(){return p?.pieces.length??0},get name(){return p?.name??null},get signature(){return x}}}function Tx(n){let e=new Ls,t=new kt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Se(1,1)},bloom:{value:0},exposure:{value:1}},s=new vn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}"}),r=new Be(new $t(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,h,f)=>{let d=Math.max(0,l.indexOf(f)),p=a[d]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,h,{bloom:f}){if(n.xr.updateCamera(h),l=n.xr.getCamera().cameras,l.length===0||l.some(m=>!m.viewport?.z||!m.viewport?.w))return!1;i.bloom.value=f?.18:0,i.exposure.value=n.toneMappingExposure;let d=n.getRenderTarget(),p=n.xr.enabled,x=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let m=0;m<l.length;m++){let S=l[m],w=Math.max(32,Math.round(S.viewport.z)),v=Math.max(32,Math.round(S.viewport.w)),A=a[m];A?(A.width!==w||A.height!==v)&&A.setSize(w,v):A=a[m]=new wn(w,v,{type:o?pi:Bn,minFilter:rn,magFilter:rn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(S.matrixWorld),t.matrixWorld.copy(S.matrixWorld),t.matrixWorldInverse.copy(S.matrixWorldInverse),t.projectionMatrix.copy(S.projectionMatrix),t.projectionMatrixInverse.copy(S.projectionMatrixInverse),t.layers.mask=S.layers.mask,n.shadowMap.autoUpdate=m===0&&x,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=x,n.xr.enabled=p,n.setRenderTarget(d),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,h)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Ax(n){let e={value:0},t={value:Array.from({length:7},()=>new at(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Ex(n,e,t){let i=new Zt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Gt(.16,.25,3.15,9,12),r=s.attributes.position,o=new Ne,a=[];for(let ie=0;ie<r.count;ie++){let pe=Math.round((r.getY(ie)+1.575)/3.15*12),ve=Math.floor((Math.atan2(r.getX(ie),r.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+pe*.002,.35,.35+pe%3*.032+ve%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new ke(a,3));let l=new ft;l.position.set(Nf.x,0,Nf.z),l.rotation.z=-.14,n.add(l);let c=new Be(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,pe,ve=.85){let Te=ie.getWorldPosition(new M),ye=ie.getWorldQuaternion(new je);e.push({half:pe,min:pe.clone().negate(),position:Te,quaternion:ye,mesh:{position:Te,quaternion:ye},shape:Vi(pe),friction:ve,gravity:1})}for(let ie=0;ie<4;ie++){let pe=new It;pe.position.y=(ie+.5)*3.15/4,l.add(pe);let ve=.237-ie*.022;u(pe,new M(ve,.398,ve))}let h=[],f=[],d=3.14;function p(ie,pe,ve,Te){h.push(...ie,...pe,...ve),o.setHSL(.25+Te*.043,.54,.28+Te*.17);for(let ye=0;ye<3;ye++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let Te=function(ye,F){let H=ye*ve;return[Math.cos(pe)*H-Math.sin(pe)*F,d+Math.sin(ye*Math.PI)*.38-ye*ye*.54+ie%3*.055,Math.sin(pe)*H+Math.cos(pe)*F]},pe=ie*2.39996,ve=1.35+ie%4*.2;for(let ye=0;ye<7;ye++){let F=ye/7,H=(ye+1)/7,he=.285*Math.sin(Math.PI*F)**.7,X=.285*Math.sin(Math.PI*H)**.7;for(let K of[-1,1]){let ae=Te(F,he*K),Re=Te(H,X*K);ae[1]-=.065,Re[1]-=.065,p(Te(F,0),ae,Re,.31+ye%4*.14),p(Te(F,0),Re,Te(H,0),.47+ie%3*.16)}}}let x=new et;x.setAttribute("position",new ke(h,3)),x.setAttribute("color",new ke(f,3)),x.computeVertexNormals();let g=new Be(x,new Zt({vertexColors:!0,side:Ht,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new Tt({color:"#956238",roughness:.92,flatShading:!0}),S=[];for(let ie=0;ie<5;ie++){let pe=ie*Math.PI*2/5,ve=new Be(new Lt(.124,1),m);ve.position.set(Math.cos(pe)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(pe)*(.25+ie%2*.1)),ve.scale.set(.91,1.16,.91),ve.castShadow=!0,l.add(ve),S.push(ve)}l.updateMatrixWorld(!0);let w=[],v=[],A=new Zt({color:"#485d5d",flatShading:!0});function P([ie,pe],ve,Te){let ye=new Be(new Je(.095,.68,.11),A);ye.position.set(ie,.34,pe+.46),ye.castShadow=ye.receiveShadow=!0,n.add(ye),u(ye,new M(.0475,.34,.055));let F=new ft;F.position.set(ie,.85,pe+.4),F.rotation.x=-.35,n.add(F);let H=new Be(new Je(.64,.36,.055),new Zt({color:"#182831"}));F.add(H);let he=document.createElement("canvas");he.width=512,he.height=96;let X=he.getContext("2d"),K=new Xn(he);K.colorSpace=xt;let ae=new Be(new $t(.61,.095),new pt({map:K}));ae.position.set(0,.116,.03),F.add(ae);let Re=.592/Te.length,T=Te.map(([O,Y],N)=>{let ce=new Be(new Je(Re-.012,.155,.04),new Zt({color:"#478086"}));ce.position.set(-.296+Re*(N+.5),-.045,.046),F.add(ce),w.push(ce),ce.userData.touchWidth=Re-.012;let ne=document.createElement("canvas");ne.width=208,ne.height=172;let fe=new Xn(ne);fe.colorSpace=xt;let Fe=new Be(new $t(Re-.017,.139),new pt({map:fe}));Fe.position.z=.0205,ce.add(Fe);let Ue=-1/0;return ce.userData.action=()=>{let R=performance.now();R-Ue<250||(Ue=R,Y(),I(),ce.position.z=.036,setTimeout(()=>{ce.position.z=.046},115))},{label:O,context:ne.getContext("2d"),texture:fe}});function z(){X.fillStyle="#182831",X.fillRect(0,0,512,96),X.fillStyle="#ffe1a0",X.font="bold 38px system-ui",X.fillText(ve,17,62,478);for(let O of T){let Y=O.context;Y.fillStyle="#386269",Y.fillRect(0,0,208,172),Y.fillStyle="#fff2d5",Y.textAlign="center",Y.font="bold 27px system-ui";let N=(typeof O.label=="function"?O.label():O.label).split("|");N.forEach((ce,ne)=>Y.fillText(ce,104,(N.length>1?68:97)+ne*37,188)),O.texture.needsUpdate=!0}K.needsUpdate=!0}v.push(z)}function I(){for(let ie of v)ie()}P(co.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,uo[0])],["Boule",()=>t.spawn(1,uo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,uo[0])],["Vider",t.clear]]),P(co.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,uo[1])],["Sph\xE8re",()=>t.spawn(5,uo[1])]]),P(co.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),P(co.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),P(co.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),I();let D=new ft,{x:b,y:_,z:C}=Bf;D.position.set(b,_,C),n.add(D);let U=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let pe=[.9,.58,.27][ie],ve=new Be(new Yt(pe,20),new Zt({color:U[ie],side:Ht}));ve.position.z=ie*.012,D.add(ve)}let q=new Be(new Je(.14,1.5,.14),A);q.position.set(0,.75-_,-.11),D.add(q);let G=0,V=document.createElement("canvas");V.width=256,V.height=64;let j=V.getContext("2d"),te=new Xn(V);te.colorSpace=xt;let B=new Be(new $t(1.4,.35),new pt({map:te,side:Ht}));B.position.set(0,2.64-_,.02),D.add(B);function Z(){j.fillStyle="#182831",j.fillRect(0,0,256,64),j.textAlign="center",j.font="bold 28px system-ui",j.fillStyle="#fff0ce",j.fillText("CIBLE  \xB7  "+G,128,42),te.needsUpdate=!0}function oe(ie){for(let pe of ie){if(!pe.beforePhysics||pe.owner||pe.frozen||!pe.mesh.visible)continue;let ve=pe.beforePhysics,Te=pe.mesh.position;if(ve.z<=C||Te.z>C||pe.velocity.z>=-1)continue;let ye=(ve.z-C)/(ve.z-Te.z),F=Math.hypot(Xe.lerp(ve.x,Te.x,ye)-b,Xe.lerp(ve.y,Te.y,ye)-_);F<=.9+pe.radius*.45&&(G+=F<.27?3:F<.58?2:1,Z())}}return Z(),{targets:w,coconuts:S,redraw:I,updateTarget:oe,score:()=>G}}function $a(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var ds=(n,e,t)=>n+(e-n)*t,yo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function gh(n,e){let t=Math.floor(n),i=Math.floor(e),s=yo(0,1,n-t),r=yo(0,1,e-i);return ds(ds($a(t,i),$a(t+1,i),s),ds($a(t,i+1),$a(t+1,i+1),s),r)}function Cx(n,e){return gh(n,e)*.54+gh(n*2.07+3.4,e*2.07-6.1)*.26+gh(n*4.2+9,e*4.2)*.13+gh(n*8.6,e*8.6-13)*.07}function Rx(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),h=Math.max(0,c),f=h**.54,d=r.map((p,x)=>ds(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,S=0;if(c>.025)if(n){let v=$a(p+792,l+677);v>.9988&&(S=(v-.9988)*49e3*yo(.09,.3,c))}else{let[v,A]=s[p],P=2.8*u/(c+.16),I=v*P+3.6,D=A*P-8.1,b=Cx(I,D),_=Cx(I-.12,D-.09);g=yo(.49,.66,b)*yo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(b-_)*5+(b-.54)*.8))}let w=n?1:ds(.94,1,yo(.05,.34,c));i[x]=ds(d[0],(139+115*m)*w,g)+S,i[x+1]=ds(d[1],(154+100*m)*w,g)+S*.94,i[x+2]=ds(d[2],(178+77*m)*w,g)+S*.86,i[x+3]=255}}let a=new di(i,1024,512,An);return a.colorSpace=xt,a.wrapS=hi,a.magFilter=on,a.minFilter=Tn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Px(){return{day:Rx(!1),night:Rx(!0)}}function xh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Xn(i);return s.colorSpace=xt,s}function Ix(n,e){let{day:t,night:i}=Px(),s=new Be(new Pi(180,40,20),new pt({map:t,side:ln,fog:!1,toneMapped:!1}));n.add(s);let r=xh(128,128,(y,L)=>{let J=y.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);J.addColorStop(0,"#fff8df"),J.addColorStop(.12,"#fff3bd"),J.addColorStop(.18,"rgba(255,225,144,.40)"),J.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=J,y.fillRect(0,0,L,L)}),o=new ea(new zr({map:r,blending:qn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=jr,a.needsUpdate=!0;let l=new no(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Sa("#daeaff","#88724c",2.25),u=new Aa("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let h=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],d=0;function p(y){d=f[y]?y:0;let L=f[d];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,h.set(...L.xyz),u.position.copy(u.target.position).add(h),o.position.copy(h).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=d===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][d]}function x(y){if(!u.castShadow)return;let L=u.target.position,J=Math.round(y.x/4)*4,le=Math.round(y.y/4)*4,$=Math.round(y.z/4)*4;L.x===J&&L.y===le&&L.z===$||(L.set(J,le,$),u.position.copy(L).add(h))}let g=0;n.background=new Ne(f[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function S(y,L,J){let[,le,$]=m[L],ge=512;y.save(),y.scale(J/512,J/512),y.fillStyle=le,y.fillRect(0,0,ge,ge);let de=L+19;function xe(){return de=Math.imul(de,1664525)+1013904223>>>0,de/4294967296}if(y.fillStyle=$,L===16){for(let _e=0;_e<16;_e++)for(let ue=0;ue<16;ue++)(ue+_e)%2===0&&y.fillRect(ue*32,_e*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let _e=L===15?32:64;y.globalAlpha=.48;for(let ue=0;ue<ge;ue+=_e){y.fillRect(0,ue,ge,L===8?3:2);for(let Ae=-_e;Ae<ge;Ae+=_e)y.fillRect(Ae+ue/_e%2*(L===2?_e/2:0),ue,2,_e)}}else if([4,5,6,7,10,11,12].includes(L)){let _e=L===5?38:L===7?64:18;for(let ue=0;ue<_e;ue++){y.strokeStyle=$,y.globalAlpha=.08+xe()*.22,y.lineWidth=L===5?1+xe()*8:1+xe()*4;let Ae=xe()*ge,ze=L===5?.018:.009;y.beginPath();for(let Me=0;Me<=ge;Me+=8){let Ee=Ae+Math.sin(Me*ze+ue)*(L===6||L===7?4:12+ue%5*3)+(L===4?Me*.28:0);Me===0?y.moveTo(Me,Ee):y.lineTo(Me,Ee)}y.stroke()}}else{y.globalAlpha=.27;for(let _e=0;_e<120;_e++){let ue=xe()*ge,Ae=xe()*ge,ze=2+xe()*6;y.beginPath(),y.arc(ue,Ae,ze,0,Math.PI*2),y.fill()}}if(L!==16)for(let _e=0;_e<4400;_e++)y.globalAlpha=.05+xe()*.1,y.fillStyle=xe()>.5?$:"#222324",y.fillRect(xe()*ge,xe()*ge,1+xe()*4,1+xe()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=m.map(([y,L,J,le,$,ge],de)=>{let xe=w.has(de)?512:256,_e=xh(xe,xe,Ae=>S(Ae,de,xe));_e.wrapS=_e.wrapT=hi;let ue=new Tt({map:_e,roughness:le,metalness:$,flatShading:!0,opacity:ge,transparent:ge<1,depthWrite:ge===1});return ue.name=y,ue}),A=v.map(y=>y.map.image),P=512,I=v.map(y=>new Zt({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),D={value:0},b={value:.24},_={value:null},C={value:0};function U(){_.value?.dispose(),_.value=xh(512,512,(y,L)=>{y.fillStyle="#ffffff",y.fillRect(0,0,L,L);let J=L/52,le=L/64;for(let $ of q){if(!$.position||!$.half||$.position.y+$.half.y<.22)continue;let ge=($.position.x+26)*J,de=($.position.z+54)*le,xe=Math.min(55,$.half.x*J+5),_e=Math.min(72,$.half.z*le+6);y.save(),y.translate(ge+$.half.y*J*.2,de+$.half.y*le*.24),y.scale(xe,_e);let ue=y.createRadialGradient(0,0,.15,0,0,1);ue.addColorStop(0,"rgba(22,37,65,.54)"),ue.addColorStop(.58,"rgba(36,54,76,.29)"),ue.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ue,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...I])y.onBeforeCompile=L=>{L.uniforms.uFocusAmount=D,L.uniforms.uFocusRadius=b,L.uniforms.uLabLightmap=_,L.uniforms.uLabBakedStrength=C,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let q=[],G=[];function V(y,L,J,le,$,ge,de,xe=0,_e=0,ue=1,Ae=1,ze=!1){let Me=new Be(ze?new Je($,ge,de):Qu($,ge,de),v[xe]);Me.position.set(L,J,le),Me.rotation.x=_e,Me.receiveShadow=!0,Me.castShadow=!0,n.add(Me);let Ee=new M($/2,ge/2,de/2),He={mesh:Me,position:Me.position,quaternion:Me.quaternion,half:Ee,min:Ee.clone().negate(),friction:ue,gravity:Ae,name:y,type:xe,shape:Vi(Ee)};return q.push(He),He}let j=K0.map(({name:y,bounds:L,type:J=0,friction:le=.78,gravity:$=1})=>{let{xMin:ge,xMax:de,zMin:xe,zMax:_e}=L;return V(y,(ge+de)/2,-.33,(xe+_e)/2,de-ge,.66,_e-xe,J,0,le,$)});for(let y of Object.values(Q0))for(let L of y)V(...L);let{xMin:te,xMax:B,zMin:Z,zMax:oe}=J0;V("But\xE9e arri\xE8re",0,1.35,Z+.4,B-te,2.7,.6,2),V("But\xE9e ouest",te+.3,1.05,(Z+oe)/2,.6,2.1,oe-Z,2),V("But\xE9e est",B-.3,1.05,(Z+oe)/2,.6,2.1,oe-Z,2);let{xMin:ie,xMax:pe,zMin:ve,zMax:Te}=lo.hills.bounds,ye=pe-ie,F=Te-ve,H=16,he=64,X=new $t(ye,F,H,he).rotateX(-Math.PI/2).translate(ie+ye/2,0,ve+F/2),K=X.attributes.uv;for(let y=0;y<K.count;y++)K.setXY(y,K.getX(y)*ye/2.6,K.getY(y)*F/2.6);let ae=X.attributes.position,Re;function T(y){if(Re===y)return;Re=y;let L=Re*.017;for(let J=0;J<ae.count;J++){let le=ae.getX(J),$=ae.getZ(J),ge=Math.sin(Math.PI*Xe.clamp((le-ie)/ye,0,1)),de=Math.min(1,($-ve)*.48,(Te-$)*.48),xe=.93+.56*Math.sin($*.36+L)+.32*Math.cos(le*.67+$*.26+L*1.4)+.19*Math.sin($*.81+L*.67);ae.setY(J,Math.max(0,ge*de*xe))}ae.needsUpdate=!0,X.computeVertexNormals(),X.computeBoundingSphere()}T(Math.floor(Math.random()*1e6));let z=new Be(X,v[3]);z.receiveShadow=z.castShadow=!0,n.add(z);let O=(y,L)=>{let J=Xe.clamp((y-ie)/ye*H,0,H-1e-6),le=Xe.clamp((L-ve)/F*he,0,he-1e-6),$=Math.floor(J),ge=Math.floor(le),de=J-$,xe=le-ge,_e=H+1,ue=ge*_e+$,Ae=ae.getY(ue),ze=ae.getY(ue+1),Me=ae.getY(ue+_e),Ee=ae.getY(ue+_e+1);return de+xe<=1?Ae+(ze-Ae)*de+(Me-Ae)*xe:Ee+(Me-Ee)*(1-de)+(ze-Ee)*(1-xe)};q.push({heightfield:!0,mesh:z,height:O,...lo.hills.bounds,friction:.81,gravity:1});function Y(y,L,J,le,$=1.45){let ge=xh(384,72,(xe,_e,ue)=>{xe.fillStyle="#202a32",xe.fillRect(0,0,_e,ue),xe.fillStyle=le,xe.font="bold 31px system-ui",xe.textAlign="center",xe.fillText(y,_e/2,48,_e-20)}),de=new Be(new $t(3.2,.6),new pt({map:ge,side:Ht}));de.position.set(L,$,J),n.add(de),G.push(de)}for(let y of Object.values(lo)){Y(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:L,xMax:J,zMin:le,zMax:$}=y.bounds,ge=new sa(new et().setFromPoints([new M(L,.025,le),new M(J,.025,le),new M(J,.025,$),new M(L,.025,$)]),new ts({color:y.color,transparent:!0,opacity:.72}));n.add(ge),G.push(ge)}Y("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Y("MURS HAUTS",3,-31,"#e8d2ff"),Y("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let N=new Tt({color:"#c8e6ed",metalness:1,roughness:.16}),ce=new Be(new Lt(.54,2),N);ce.position.set($u.x,$u.y,$u.z),ce.castShadow=!0,n.add(ce);let ne=m.map((y,L)=>{let{x:J,z:le}=$0(L);return V("\xC9chantillon "+m[L][0],J,.325,le,.65,.65,.65,L,0,1,1,!0).mesh}),fe=new Yt(1,12).rotateX(-Math.PI/2),Fe=new pt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ue(y){let L=new Be(fe,Fe);return L.scale.setScalar(y),n.add(L),L}function R(y,L,J,le,$,ge,de,xe){let _e=L>=3;e.shadowMap.enabled=_e,u.castShadow=_e,Fe.opacity=L===2?.17:.11,C.value=xe?.38+J*.04:0;let ue=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Ae=13+L*1.2;Object.assign(u.shadow.camera,{left:-Ae,right:Ae,top:Ae,bottom:-Ae}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ue&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ue,ue)),o.visible=$,de!==P&&(P=de,v.forEach((Me,Ee)=>{let He=Me.userData.texture??Me.map,k=w.has(Ee)?de:Math.min(256,de);if(He.image.width===k)return;let we=document.createElement("canvas");we.width=we.height=k;let Pe=we.getContext("2d");k>512?S(Pe,Ee,k):Pe.drawImage(A[Ee],0,0,k,k);let De=new Xn(we);De.colorSpace=He.colorSpace,De.wrapS=He.wrapS,De.wrapT=He.wrapT,De.repeat.copy(He.repeat);for(let be of[Me,I[Ee]])be.userData.texture=De,be.map=De,be.needsUpdate=!0;He.dispose()}));let ze=y>=4;for(let Me of q)Me.mesh?.isMesh&&!Me.zone&&(Me.mesh.material=ze?v[Me.type]:I[Me.type]);z.material=ze?v[3]:I[3];for(let Me=0;Me<ne.length;Me++)ne[Me].material=ze?v[Me]:I[Me];v.forEach((Me,Ee)=>{for(let He of[Me,I[Ee]])He.userData.texture||(He.userData.texture=He.map),He.map=ge?He.userData.texture:null,He.color.set(ge?"#ffffff":m[Ee][1]),He.needsUpdate=!0}),g=le?.21+J*.067:0,N.metalness=le?.95:.1,N.roughness=le?.13:.46,s.visible=y>=2,p(d)}return{boxes:q,floors:j,probe:ce,display:ne,visual:R,shadow:Ue,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Re},setHillSeed:T,bakeLightmap:U,mapMaterial:(y,L)=>L>=4?v[y]:I[y],builtObjects:[...q.map(y=>y.mesh).filter(y=>y?.isObject3D),ce,...G],materials:[...v,...I],focus(y,L,J){D.value=y?L*.75:0,b.value=.07+J*.058}}}var fs=document.getElementById("game");fs instanceof HTMLCanvasElement||(fs=document.createElement("canvas"),fs.id="game",fs.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(fs));var rr=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),$e;try{$e=new bu({canvas:fs,antialias:!rr,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}$e.xr.enabled=!0;$e.xr.setReferenceSpaceType("local-floor");$e.shadowMap.type=Ca;$e.shadowMap.autoUpdate=!1;var Lx=-1/0;$e.toneMapping=Dc;$e.toneMappingExposure=1.15;var Ct=new Ls;Ct.fog=new $o("#a6d4ea",55,135);var ut=new ft,Lh=new ft,Wt=new kt(70,1,.035,210);ut.add(Lh);Lh.add(Wt);Ct.add(ut);var St=Ix(Ct,$e),pT=Tx($e),mT=Ax(St.probe),W=U0(rr),gT={...W},mp=new M(Ju.x,Ju.y,Ju.z);ut.position.copy(mp);var Rn=new M,Qa=new M,Et=new M,Dx=new M,jn=new M,Zn=new M,Ux=new M,ps=new M,$s=new M,Fx=new M,Kf=new M,Nx=new M,yh=new M,Bx=.105,Ox=new M,Sh=!1,tr=!1,xT=new je,yT=new M(0,0,1),gp=0,xp=null,il=[],yp=100,Dt=new M(0,1,0),_i=new je,mt=0,Gi=0,ms=0,oi=0,wo=NaN,wh=!1,$f=0,nr=0,Qf=0,_h=0,vo=0,Mo=0,bo=0,Kt=W.quality,sl=72,Jt=!1,ry="left",Ut=0,_p=0,vp=0,Mp=0,cn=!0,zx=0,_T=[],vh=[],or=St.boxes,vT=new Lt(1,0),oy=1+Math.floor(Math.random()*(wu.length-1)),ay=Tu(oy),{hand:MT,fur:bT}=ay;function ST(n,e,t,i,s,r,o,a){let l=new Be(vT,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var Dh=Uf(localStorage),wT=Dh.models.length?"|atelier-"+Ws(JSON.stringify(Dh)):"",ys=j0(Dh)??ay.createHead();ys.visible=!1;Ct.add(ys);var Qs=new M,Th=new je,Vx=new M,kx=new M,Gx=new an(0,0,0,"YXZ"),el=0,ep=new je,Hx=[null,null];function Uh(){return .24+W.arms*.036}function TT(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=Xe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=Xe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=Xe.lerp(r[2],i,s),n.skin.pose(r,!W.body)}var Xt=["left","right"].map(n=>{let e=Eu(n,MT,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Ct.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new je},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new je,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Ah=new Vu(M,Xt,ux),ly=Cu(bT,Xt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Xt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var gs=ly.mesh;Ct.add(gs);function AT(n,e){if(W.body){ep.copy(gs.quaternion).invert();for(let t=0;t<Xt.length;t++){let i=Xt[t];Hx[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(gs.position).applyQuaternion(ep),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(ep))}ly.pose(Hx,Uh(),n,e,W.hands)}}var zn=[["Cube",new Je(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Lt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new _a(.29),"#d8ae53",0,1],["Brique",new Je(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Je(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Lt(.6,2),"#dbab58",.6,3.7],["Coco",new Lt(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:xo(e,i),material:new Tt({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:Vi(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of z0()){let i=xo(n??t.geo,e);zn.push({...t,shape:i,lowShape:i})}var cy=[0,1,2,3,4,5],uy=[7,8,9,10,11,12,13,14],ul=15,Wx=Vi(new M(.13,.088,.115)),ET=new Je(.26,.176,.23),CT=new Tt({color:"#536771",roughness:.36,metalness:.28});zn[ul]={name:"Cam\xE9ra du spectateur",geo:ET,material:CT,shape:Wx,lowShape:Wx,mass:1.2};var{props:RT,animate:PT}=k0(),IT=Z0(Dh).slice(0,36),bp=[],ol=[];function hy(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=xo(t??s.geo,i);e.push(zn.length),zn.push({...s,shape:r,lowShape:r})}}hy(RT,bp);hy(IT,ol);var Sp=[...cy,...uy,...bp,...ol];zn[8].properties={supportWhileHeld:!0};zn[11].properties={supportWhileHeld:!0};function LT(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of zn)n.supportAxis=LT(n);function DT(n){let e=new Be(new Gt(.058,.074,.1,12).rotateX(Math.PI/2),new Tt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new Yt(.048,12),new pt({color:"#7bd7ed",side:Ht}));t.position.z=-.203,n.add(t);let i=new Be(new Je(.045,.013,.012),new pt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function dy(n,e=!1){let t=zn[n];if(!t)return null;let i=new Be(t.geo,e?ju(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===ul&&DT(i),i}var bt=[],UT=[],_s={held:null},To=new Map,Hi=0,FT=1,er=new je,tp=new je,tl=new M,Fh=new M,ir=new M,fy=new M,py=new M;function NT(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Fh.set(0,0,-1).applyAxisAngle(Dt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(tl.copy(n).addScaledVector(Fh,r),tl.y+=.15,!Za(n,tl,Math.min(.2,t*.5),or,fy,py)&&!bt.some(o=>o.mesh.position.distanceToSquared(tl)<(t+o.radius+.07)**2))return tl}}return null}function lr(n,e,t,i=!1){let s=zn[n];if(!s)return null;if(!e&&(t?ir.set(t.x,t.y,t.z):$e.xr.isPresenting?ir.copy(Et):Wt.getWorldPosition(ir),e=NT(ir,t?.yaw??Gi,s.shape.radius),!e))return i||yi("Aucun espace libre pour cet objet."),null;let r=dy(n);r.position.copy(e),Ct.add(r);let o=W.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:FT++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:W.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new je,shadow:St.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===ul,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),bt.push(a),ja(a,St.boxes),a}function my(){for(let n of Xt)ai(n,!1);ai(_s,!1);for(let n of To.values())ai(n,!1)}function Hh(){my();for(let n of bt)Ct.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();bt.length=0,To.clear()}function gy(){Sp.slice(0,Ff.length).forEach((n,e)=>{let{x:t,z:i}=Ff[e];lr(n,new M(t,.8,i))})}gy();function ai(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+W.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Ao(){my();for(let n of bt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function qi(){Ly.reset(),ut.position.copy(mp),mt=Xe.degToRad(_t.yaw),ms=0,ut.rotation.y=mt,Rn.set(0,0,0),wh=!1,tr=!1,Sh=!1,Ah.reset();for(let n of Xt)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,ai(n,!1)}Ao();function xy(){return W.auto||rr&&!$e.xr.isPresenting}function Nh(){return xy()?Math.min(W.shadowQuality,Kt):W.shadowQuality}function al(){return xy()?Math.min(W.lightQuality,Kt):W.lightQuality}function Xi(){let n=W.texturePower;St.visual(Kt,W.shadows?Nh():0,al(),W.reflections,W.bloom,W.textures,2**(n-1),W.lightmap),_t.refreshMaterials?.(),$e.shadowMap.needsUpdate=!0,St.setTimeOfDay(ht.remoteLight??W.timeOfDay-1),cp=Oh.slice(0,al()>=8?3:al()>=4?2:1),zp.value=W.shaderMode-1;let e=$e.xr.isPresenting&&$e.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(W.focus&&!e,W.focusStrength,W.focusSize),$e.toneMappingExposure=.58+W.exposure*.114,Vy.value=.55+W.contrast*.09,ky.value=W.saturation*.2,Gy.value=(W.warmth-5)*.022,$e.xr.setFoveation(W.focus?Xe.clamp((W.focusStrength+1)*.105+(5-W.focusSize)*.028+(W.auto?(7-Kt)*.045:0),0,1):0),$e.xr.isPresenting||hl(),cn=!0,vi.redraw()}var Xx=0,qx=0,Yx=0;function hl(){if($e.xr.isPresenting)return;let n=Math.max(1,fs.clientWidth||innerWidth),e=Math.max(1,fs.clientHeight||innerHeight),t=E0(Kt,devicePixelRatio,rr);t!==Yx&&($e.setPixelRatio(t),Yx=t),(n!==Xx||e!==qx)&&($e.setSize(n,e,!1),Xx=n,qx=e),Wt.aspect=n/e,Wt.fov=W.viewFov,Wt.updateProjectionMatrix()}addEventListener("resize",hl);globalThis.visualViewport?.addEventListener("resize",hl);function BT(n){Object.assign(W,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Gu[n]),Kt=W.quality,Mo=bo=vo=0,Xi()}var Eo=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",qi]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Ao]]],["Rendu",[]]],wp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["Champ de vision \xE9cran","viewFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Tp(){return Ut===2?wp[_p][1]:Ut===3?vy[vp][1]:Ut===4?Ip[Mp][1]:Eo[Ut][1]}function yy(n){Ut=n,cn=!0}var Bh=null,Ap=[],Eh=0,lp=0,Ep=null,Cp=!1,Rp=0,Pp=0,_y={},Oh=Array.from({length:3},()=>{let n=new wa("#ffffff",0,22,1.6);return n.visible=!1,Ct.add(n),{light:n,mesh:null,distance:1/0}}),cp=Oh,zh=new M;function Zx(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(zh);if(e>34**2)return;let t=cp[0];for(let i of cp)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function OT(n){n?Wt.getWorldPosition(zh):zh.copy(Et);for(let t of Oh)t.mesh=null,t.distance=1/0;if(n)ht.forEachReplica(Zx);else if(W.objects)for(let t of bt)t.materialStyle===3&&Zx(t.mesh);let e=20+al()*.75;for(let{light:t,mesh:i}of Oh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Wh(){let n=Ap.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;Bh={game:"Gorilla Lab",version:"r30",time:new Date().toISOString(),mode:Cp?"VR":"PC",settings:{...W},qualityActive:Kt,performance:{fps:nr,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Ep,renderer:_y,terrainSeed:St.hillSeed,map:_t.active?{name:_t.name,pieces:_t.nodes}:null,objects:{total:bt.length,held:bt.filter(t=>t.owner).length,frozen:bt.filter(t=>t.frozen).length},cloud:{role:ht.role,connected:ht.connected,replicas:ht.replicaCount},targetScore:vi.score(),locomotion:{trackedFrames:Pp,contactFrames:Rp,launchCount:gp,lastLaunch:xp,standingHeight:Number.isFinite(wo)?wo:null,viewOffset:oi}},document.querySelector("#download-report").disabled=!1,cn=!0}function zT(){Bh||Wh();let n=URL.createObjectURL(new Blob([JSON.stringify(Bh,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=zT;document.querySelector("#capture-report").onclick=Wh;Eo[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Wh]);var VT=Array.from({length:Math.ceil(ol.length/8)},(n,e)=>["Atelier"+(ol.length>8?" "+(e+1):""),ol.slice(e*8,e*8+8)]),vy=[["Basiques",cy],["D\xE9taill\xE9s",uy],["Anim\xE9s",bp],...VT].map(([n,e])=>[n,[...e.map(t=>[zn[t].name,()=>Dy(t)]),["Tout retirer",Np]]]);Eo.push(["Spawn",[]]);var Ip=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{_t.blank(),W.mapEdit=!0}],["Annuler placement",()=>_t.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>_t.recenter(Et.x,ut.position.y,Et.z,Gi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{_t.reset(),W.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Kx(!1)],["Utiliser comme t\xEAte",()=>Kx(!0)]]]];Eo.push(["Carte",[]]);var kT=document.querySelector("#section"),np=document.querySelector("#settings"),GT=document.querySelector("#readings");function gn(n,e){if(n==="viewFov"){W.viewFov=Xe.clamp(W.viewFov+5*e,50,105),hl(),cn=!0;return}if(n==="shaderMode"){W.shaderMode=(W.shaderMode-1+e+ku.length)%ku.length+1,zp.value=W.shaderMode-1,cn=!0;return}if(n==="timeOfDay"){W.timeOfDay=(W.timeOfDay-1+e+3)%3+1,Xi();return}let t={mapMode:9,mapShape:5,mapMaterial:jf.length,mapSurface:4,mapTurn:8,mapTexture:zu.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];W[n]=(W[n]-1+e+i)%i+1,cn=!0;return}if(n==="mapEdit"&&!W.mapEdit&&!_t.active&&_t.blank(),n==="toolMode"){W.toolMode=(W.toolMode-1+e+Xs.length)%Xs.length+1,$e.xr.isPresenting||yi("Outil \xB7 "+Xs[W.toolMode-1]),cn=!0;return}if(n==="preset"){let i=Object.keys(Gu);W.preset=(W.preset-1+e+i.length)%i.length+1,BT(i[W.preset-1]);return}if(typeof W[n]=="boolean"?W[n]=!W[n]:W[n]=Xe.clamp(W[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Xt)i.valid=!1,i.surface=null;if(n==="quality"&&(W.auto=!1,Kt=W.quality),n==="auto"&&!W.auto&&(Kt=W.quality),n==="movement"||n==="collisions")for(let i of Xt)i.surface=null;if(n==="objects"&&!W.objects&&Ao(),n==="blasterActive"&&W.blasterActive&&(W.toolActive=!1),n==="toolActive"&&W.toolActive&&(W.blasterActive=!1),!W.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Xt)i.held?.toolHold&&ai(i,!1);Fp(!1)}n==="preciseHitboxes"&&My(),Xi()}function My(){for(let n of bt)n.precise=W.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||ja(n,St.boxes)}function by(){let n=(Ut===2?wp:Ut===4?Ip:null)?.flatMap(e=>e[1])??Tp();for(let[,e]of n)typeof e=="string"&&(W[e]=gT[e]);Ut===0&&qi(),Ut===1&&(My(),Ao()),Ut===3&&Np(),Ut===2&&(Kt=W.quality),Xi()}function nl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),dl(),cn=!0},t}function Sy(n){return n==="preciseHitboxes"?W[n]?"High":"Low":W[n]?"Actif":"Coup\xE9"}function Lp(n){if(n==="viewFov")return W.viewFov+"\xB0";if(n==="mapTexture")return W[n]===1?"Aucune":zu[W[n]-2];if(n==="terrainResolution")return[8,16,32,48][W[n]-1]+"\xB2";if(n==="shaderMode")return ku[W.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=W[n],t=n==="shadowQuality"?Nh():al();return t===e?e+"/10":e+"/10 \xB7 "+t+(W.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][W.timeOfDay-1]:n==="mapMode"?Ry[W.mapMode-1]:n==="mapShape"?YT[W.mapShape-1]:n==="mapSurface"?ZT[W.mapSurface-1]:n==="mapMaterial"?jf[W.mapMaterial-1]:n==="mapTurn"?(W.mapTurn-1)*45+"\xB0":n==="toolMode"?Xs[W.toolMode-1]:n==="preset"?Object.keys(Gu)[W.preset-1]:n==="texturePower"?[2**(W[n]-1),2**(W[n]-1)].join("\xD7"):W[n]}function up(){return Ut===2?wp:Ut===3?vy:Ip}function wy(){return Ut===2?_p:Ut===3?vp:Mp}function Ty(n){Ut===2?_p=n:Ut===3?vp=n:Mp=n}function Ay(n){return n===Wh?"Capturer":n===Hh||n===Np?"Vider":n===qi||n===Ao?"R\xE9initialiser":Ut===3?"Cr\xE9er":"Appliquer"}function dl(){if(kT.textContent=Eo[Ut][0],Ey.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===Ut))),np.replaceChildren(),Ut>=2){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),up().forEach(([e],t)=>{let i=nl(e,()=>Ty(t));i.setAttribute("aria-pressed",String(wy()===t)),n.append(i)}),np.append(n)}for(let[n,e]of Tp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(nl(Ay(e),e)):typeof W[e]=="boolean"?i.append(nl(Sy(e),()=>gn(e,1))):i.append(nl("\u2212",()=>gn(e,-1)),document.createTextNode(" "+Lp(e)+" "),nl("+",()=>gn(e,1))),t.append(i),np.append(t)}}var Ey=document.querySelectorAll("[data-page]");Ey.forEach((n,e)=>n.onclick=()=>{yy(e),dl()});document.querySelector("#restore").onclick=()=>{by(),dl()};dl();function Cy(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Xn(r);a.colorSpace=xt;let l=new Be(new $t(t,i),new pt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var xn=Cy(640,652,.84,.86,Ct);xn.mesh.visible=!1;var Jn=Cy(416,84,.32,.065,Ct);Jn.mesh.visible=!1;var _o=new kt(75,1,.07,140),Kn=new Na(new $t(1.7,1.95),{color:16054015,textureWidth:rr?128:256,textureHeight:rr?128:256,clipBias:.004,multisample:0}),HT=new M(0,0,-1),Mh=new M,jx=new M;Kn.position.set(Ku.x,Ku.y,Ku.z);Kn.rotation.y=Math.PI;Ct.add(Kn);var Dp=new Be(new Je(1.8,2.03,.1),new Zt({color:"#344650"}));Dp.position.copy(Kn.position).z+=.064;Ct.add(Dp);var WT=Kn.onBeforeRender.bind(Kn);Kn.onBeforeRender=()=>{};Kn.visible=!1;var ip=-1/0;function XT(n,e){if(_o.position.copy(Et),e){let i=e.transform.orientation;_o.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Th.setFromAxisAngle(Dt,mt))}else Wt.getWorldQuaternion(_o.quaternion);jx.set(0,0,-1).applyQuaternion(_o.quaternion),Mh.subVectors(Kn.position,Et);let t=Mh.length();if(Kn.visible=!_t.active&&W.reflections&&t<4&&Mh.dot(HT)<-.15&&Mh.multiplyScalar(1/Math.max(.001,t)).dot(jx)>.66,!Kn.visible){ip=-1/0;return}if(!(n-ip<(rr&&!$e.xr.isPresenting?110:45))){ip=n,_o.updateMatrixWorld(!0),Kn.updateMatrixWorld(!0),ys.visible=W.body;try{WT($e,Ct,_o)}finally{ys.visible=!1}}}var xi=new Li,On=new M,Pn=new M,hp=new M,bh=new M,Jx=new M,rl=null,Ch=null,Rh=null,qT=new Set(Ct.children),vi=Ex(Ct,St.boxes,{spawn:(n,e)=>{W.objects||(W.objects=!0),lr(n,e)},clear:Hh,resetPlayer:qi,resetObjects:Ao,resetTree:()=>{for(let n of vi.coconuts)n.visible=!0},quality:()=>Kt+"/10",resolution:()=>W.resolution+"/10 \xB7 relancer VR",textureSize:()=>Lp("texturePower"),qualityNext:()=>{W.quality>=10&&(W.quality=0),gn("quality",1)},resolutionNext:()=>{W.resolution>=10&&(W.resolution=0),gn("resolution",1)},textureNext:()=>{W.texturePower>=12&&(W.texturePower=0),gn("texturePower",1)},hitbox:()=>gn("preciseHitboxes",1),movement:()=>gn("movement",1)}),Ry=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],YT=["Bloc","Rampe","Mur","Dalle","Terrain"],ZT=["Normale","Glace","Caoutchouc","Lune"],_t=wx({scene:Ct,arena:St,boot:mp,onReset:n=>{Hh(),qi(),mt=Xe.degToRad(n),_t.active||gy()},onVisual:Xi,getLevel:()=>Kt,defaultObjects:[...St.builtObjects,...Ct.children.filter(n=>!qT.has(n)),Dp]}),ht=d0({scene:Ct,currentMap:()=>(_t.signature||"arena-r25-"+St.hillSeed)+wT,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=dy(n,!0);return e&&fl(e.material),e},onAction:eA,applyLight:n=>St.setTimeOfDay(n??W.timeOfDay-1),applyCoconuts:n=>vi.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function Kx(n){let e=_t.modelPieces();if(!e.length||e.length>Zs.parts){yi("Compose un mod\xE8le de 1 \xE0 "+Zs.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Uf(localStorage);if(t.models.length>=Zs.models){yi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:W.modelGrab,frozen:W.modelFrozen,collidable:W.modelCollidable,supportWhileHeld:W.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Mx[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Lf,JSON.stringify(Df(t))),yi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{yi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var sp=new Map;function jT(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][W.mapShape-1],e=oo({detail:[8,16,32,48][W.terrainResolution-1],amplitude:(W.terrainAmplitude-1)*.34,frequency:.05+W.terrainFrequency*.025,seed:W.terrainSeed,grass:(W.terrainGrass-1)/9,shrub:(W.terrainShrub-1)/9}),t=W.mapTexture-2;return t>=0&&!sp.has(t)&&sp.set(t,w0(t).toDataURL("image/webp",.83)),mh({...n,material:W.mapMaterial-1,yaw:W.mapShape===5?0:(W.mapTurn-1)*45,...Jf[Object.keys(Jf)[W.mapSurface-1]],texture:sp.get(t)??null,terrain:W.mapShape===5||W.mapMode===9?e:null,brushRadius:.5+W.brushRadius*.5,brushStrength:W.brushStrength*.15})}function JT(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-oi,r.z).applyAxisAngle(Dt,mt).add(ut.position),_i.set(o.x,o.y,o.z,o.w),Pn.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Dt,mt),_t.edit(On,Pn,i,{mode:W.mapMode,piece:jT(),head:Et,feet:ut.position.y}),i&&(cn=!0)}function KT(n){if(_t.active||!n.valid||n.held||Jt)return;let e=null;for(let t of vi.targets)if(t.getWorldPosition(Jx),!(n.mesh.position.distanceToSquared(Jx)>.11**2)&&(t.worldToLocal(bh.copy(n.mesh.position)),Math.abs(bh.x)<t.userData.touchWidth*.5+.025&&Math.abs(bh.y)<.095&&Math.abs(bh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Py(n,e=null){n.getWorldPosition(hp),n.visible=!1,W.objects||(W.objects=!0);let t=lr(6,hp);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function dp(n,e,t){if(_t.active)return;xi.set(n,e),xi.far=5.5;let i=xi.intersectObjects([...vi.targets,...vi.coconuts.filter(r=>r.visible)],!1);xi.far=1/0;let s=i[0];s&&(ar.visible=!0,ar.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Py(s.object,e),dl()))}var $x=new M,Iy=new je,Up=Ru(Ct),Ly=L0({scene:Ct,rig:ut,camera:Wt,arena:St,objects:bt,spectator:ht}),yR=Up.mesh,Ph=new M,Wi=new je,Vh=new M,So={mode:0,position:Vh,quaternion:Wi,end:Ph},Qx=new M,$T=new M,ey=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var kh=new M,QT={position:Vh,quaternion:Wi,pressure:[.1,.66,.08]},rp=new M,Gh=new je;function Fp(n){_s.held&&ai(_s,n)}function Np(){ht.role==="player"||ht.role==="pc"?yi("Le joueur VR g\xE8re la remise \xE0 z\xE9ro."):Hh()}function Dy(n){if(W.objects=!0,ht.role==="pc"){yi("Commence par rejoindre le salon en joueur.");return}ht.role==="player"?ht.sendAction({type:"spawn",typeId:n})||yi("Attends la connexion au joueur VR."):lr(n)}function eA(n,e){if(!W.objects||!e)return;if(n.type==="spawn"){Sp.includes(n.typeId)&&lr(n.typeId,null,e);return}let t=bt.find(l=>l.netId===n.objectId);if(!t)return;let i=To.get(e.id);if(i||(i={held:null,controllerRotation:new je},To.set(e.id,i)),n.type==="release"){i.held===t&&ai(i,!0);return}let s=Math.hypot(t.mesh.position.x-e.x,t.mesh.position.y-e.y,t.mesh.position.z-e.z);if(s>10)return;let r=ir.set(e.x,e.y,e.z);if(Za(r,t.mesh.position,.01,or,fy,py))return;let o=n.type==="hold"?1:n.mode;if(o===1&&i.held)return;let a=e.avatar?.tool?.quaternion??e.avatar?.head;a&&i.controllerRotation.copy(a),Bp(t,o,i,Xe.clamp(s,1.1,5))}function tA(n){if($e.xr.isPresenting)for(let t of Xt)t.valid&&t.held&&op(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of To){let s=ht.getPeer?.(t);if(!s){ai(i,!1),To.delete(t);continue}let r=i.held;if(!r)continue;let o=s.avatar?.head??s.avatar?.tool?.quaternion;o&&i.controllerRotation.copy(o),ir.set(s.x,s.y,s.z),Fh.set(0,0,-1).applyQuaternion(i.controllerRotation),op(r,ir,Fh,i.controllerRotation,n)}let e=_s.held;e&&(Wt.getWorldPosition(kh),Wt.getWorldDirection($x),Wt.getWorldQuaternion(Wi),op(e,kh,$x,Wi,n))}function op(n,e,t,i,s){n.toolHold?rp.copy(e).addScaledVector(t,n.toolDistance):rp.copy(n.offset).applyQuaternion(i).add(e),Gh.multiplyQuaternions(i,n.relativeRotation),hx(n,rp,Gh,or,s)}function Uy(n){return n.customMaterial||(n.mesh.material=ju(n.mesh.material),n.customMaterial=!0,fl(n.mesh.material)),n.mesh.material}function nA(n){let e=Uy(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function Fy(n,e,t){xi.set(n,e),xi.far=9;let i=xi.intersectObjects(t,!1)[0];return xi.far=1/0,Ph.copy(n).addScaledVector(e,i?.distance??9),Za(n,Ph,.006,or,Qx,$T)?(Ph.copy(Qx),null):i}function Bp(n,e,t,i){if(e===1){if(t?.held){t===_s?Fp(!0):ai(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??Wi;n.relativeRotation.multiplyQuaternions(Iy.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)Ct.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),bt.splice(bt.indexOf(n),1);else if(e===4&&!n.protected){kh.copy(n.mesh.position).addScaledVector(Dt,n.radius*2+.08);let s=lr(n.netType,kh);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=ju(n.mesh.material),s.customMaterial=!0,fl(s.mesh.material)),ja(s,St.boxes))}else if(e===5){let s=Uy(n);s.color.set(ey[n.paint++%ey.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,nA(n));cn=!0}}var xs=[];function Ny(n,e,t,i){if(!W.objects)return;let s=ht.role==="player";if(xs.length=0,s)ht.forEachReplica(a=>xs.push(a));else for(let a of bt)!a.owner&&a.mesh.visible&&xs.push(a.mesh);let r=Fy(n,e,xs);if(So.mode=W.toolMode,i?(Vh.copy(i.mesh.position),Wi.copy(i.controllerRotation)):(Wt.getWorldQuaternion(Wi),Vh.set(.16,-.17,-.43).applyQuaternion(Wi).add(n)),Up.update(So),!t)return;if(s){if(W.toolMode===1&&Hi)ht.sendAction({type:"release",objectId:Hi}),Hi=0;else if(r){let a=r.object.userData.netId;ht.sendAction({type:"tool",mode:W.toolMode,objectId:a})&&W.toolMode===1&&(Hi=a)}return}let o=r&&bt.find(a=>a.mesh===r.object);Bp(o,W.toolMode,i??_s,r?Xe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function iA(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;On.set(o.x,o.y-oi,o.z).applyAxisAngle(Dt,mt).add(ut.position),_i.set(a.x,a.y,a.z,a.w),Pn.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Dt,mt),Ny(On,Pn,s,i)}function sA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-oi,r.z).applyAxisAngle(Dt,mt).add(ut.position),_i.set(o.x,o.y,o.z,o.w),Pn.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Dt,mt),dp(On,Pn,i)}var ar=ST(Ct,new pt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);ar.visible=!1;var fp=[],sr=null;function ty(){let n=xn.ctx;fp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(nr+" FPS   \xB7   Q "+Kt+"/10   \xB7   "+(W.auto?"AUTO":"MANUEL"),390,40);function e(i,s,r,o,a,l,c="#344b59"){n.fillStyle=c,n.fillRect(i,s,r,o),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(a,i+r/2,s+o/2+7),n.textAlign="left",fp.push({x:i,y:s,w:r,h:o,action:l,label:a})}Eo.forEach(([i],s)=>e(25+s*119,61,114,44,i,()=>yy(s),Ut===s?"#586d53":"#334b58"));let t=Ut>=2;t&&up().forEach(([i],s)=>{let r=wy()===s,o=Math.min(144,Math.floor(586/up().length)-4);e(25+s*(o+4),114,o,38,i,()=>Ty(s),r?"#546947":"#263d49")}),Tp().forEach(([i,s],r)=>{let o=(t?166:113)+r*40;r%2===0&&(n.fillStyle="#20323e",n.fillRect(25,o,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(i,37,o+26),typeof s=="function"?e(406,o,206,36,Ay(s),s):typeof W[s]=="boolean"?e(406,o,206,36,Sy(s),()=>gn(s,1),W[s]?"#415c4c":"#344b59"):(e(359,o,44,36,"\u2212",()=>gn(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Lp(s)),508,o+25,156),n.textAlign="left",e(568,o,44,36,"+",()=>gn(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",by),e(325,579,287,44,"Fermer",()=>Jt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Op||(Ut===4&&_t.status?_t.status.slice(0,64):Bh?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),xn.texture.needsUpdate=!0}function rA(n){Jt=!Jt,Jt&&(ry=n,Vx.set(0,0,-1).applyAxisAngle(Dt,Gi),xn.mesh.position.copy(Et).addScaledVector(Vx,1.25),xn.mesh.position.y+=.08,xn.mesh.lookAt(Et),xn.mesh.updateMatrixWorld(!0)),cn=!0}function oA(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-oi,r.z).applyAxisAngle(Dt,mt).add(ut.position),_i.set(o.x,o.y,o.z,o.w),Pn.set(0,0,-1).applyQuaternion(_i).applyAxisAngle(Dt,mt),xi.set(On,Pn);let a=xi.intersectObject(xn.mesh)[0];if(a&&(ar.visible=!0,ar.position.copy(a.point).addScaledVector(Pn,-.012),i)){let l=a.uv.x*xn.w,c=(1-a.uv.y)*xn.h;fp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),cn=!0}}var Xh=A0(),{held:gi,pressed:ki}=Xh,By=D0($e.domElement,document.querySelector("#touch-fire")),ny=document.querySelector("#game-settings"),Oy=document.querySelector("#open-settings"),pp=document.querySelector("#game-hint"),Ih=0;function yi(n){pp.textContent=n,pp.hidden=!1,Ih=performance.now()+2400,Op=n,cn=!0}var Op="";function qh(n){let e=n??!ny.hidden;ny.hidden=e,Oy.hidden=!e,e&&$e.domElement.focus()}Oy.onclick=()=>qh(!1);document.querySelector("#close-settings").onclick=()=>qh(!0);var ll=T0({canvas:$e.domElement,enabled:()=>!$e.xr.isPresenting,onLook:(n,e,t)=>{mt-=n*t,ms=Xe.clamp(ms-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&ki.add(e)},onMenu:()=>qh()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!$e.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||qh();return}n.code==="Space"&&n.preventDefault(),Xh.down(n.code,n.repeat),n.code==="KeyR"&&qi()}});addEventListener("keyup",n=>Xh.up(n.code));addEventListener("blur",()=>{Xh.clear(),ll.clear(),By.clear()});function aA(n,e){if(!W.objects)return!1;let t=ht.role==="player";if(t&&Hi)return ht.sendAction({type:"release",objectId:Hi}),Hi=0,!0;if(_s.held)return Fp(!0),!0;if(xs.length=0,t)ht.forEachReplica(s=>xs.push(s));else for(let s of bt)!s.owner&&s.mesh.visible&&xs.push(s.mesh);let i=Fy(n,e,xs);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;ht.sendAction({type:"hold",objectId:s})&&(Hi=s)}else Wt.getWorldQuaternion(Wi),Bp(bt.find(s=>s.mesh===i.object),1,_s,Math.max(.75,i.distance));return!0}var ap=[];function lA(){return ap.length=0,ht.forEachReplica(n=>{let e=n.userData.netType;if(!zn[e]||zn[e].properties?.collidable===!1||n.userData.held)return;let t=zn[e],i=W.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=W.preciseHitboxes,ap.push(s)}),ap}function cA(){ht.role!=="vr"||!ht.remoteSpectator||bt.some(n=>n.netType===ul)||lr(ul,null,null,!0)}var cl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{cl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});cl.onclick=async()=>{let n;try{cl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),$e.xr.setFramebufferScaleFactor(.45+W.resolution*.055),await $e.xr.setSession(n),Xi(),sl=n.frameRate||72,il=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=il.includes(120)?120:il.find(t=>t>=100)??il.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}sl=n.frameRate||sl,yp=Math.min(100,sl),W.auto&&(Kt=Math.min(Kt,4),vo=Mo=bo=0),Ap=[],Eh=0,lp=0,Rp=Pp=gp=0,xp=null,Cp=!0,Ep=null,wo=NaN,oi=0,qi(),Xi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),cl.disabled=!1,document.querySelector("#status").textContent=e.message}};$e.xr.addEventListener("sessionend",()=>{cl.disabled=!1,Jt=!1,xn.mesh.visible=!1,Jn.mesh.visible=!1,document.body.classList.remove("immersive"),qi(),hl()});function zy(n){if(!_t.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(_t.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function uA(n,e,t){let i=[...n.session.inputSources];for(let s of Xt){let r=i.find(x=>x.handedness===s.side&&x.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&W.hands&&!W.body,!o){s.valid=!1,s.surface=null,ai(s,!1);continue}let a=o.transform.position;ps.set(a.x,a.y-oi,a.z),s.target.copy(ps).applyAxisAngle(Dt,mt).add(ut.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(er.set(c.x,c.y,c.z,c.w).premultiply(_i.setFromAxisAngle(Dt,mt)),s.controllerRotation.copy(er),s.mesh.quaternion.copy(er).multiply(xT.setFromAxisAngle(yT,s.side==="left"?Math.PI/2:-Math.PI/2)),TT(s,r.gamepad?.buttons??[],t),!Jt&&l&&!s.grip&&W.objects&&!s.held){let x=null,g=.15,m=vi.coconuts.find(S=>S.visible&&S.getWorldPosition(hp).distanceToSquared(s.target)<.26**2);m&&(x=Py(m));for(let S of bt){if(S.owner||!S.grabbable||S.mesh.position.distanceToSquared(s.target)>(S.radius+.18)**2)continue;let w=cx(s.target,S);!m&&w<g&&(g=w,x=S)}x&&!s.held&&(s.held=x,x.owner=s,x.frozen=!1,tp.copy(er).invert(),x.offset.copy(x.mesh.position).sub(s.target).applyQuaternion(tp),x.relativeRotation.multiplyQuaternions(tp,x.mesh.quaternion),x.velocity.set(0,0,0),x.angular.set(0,0,0))}!l&&s.grip&&!s.held?.toolHold&&ai(s,!Jt),s.grip=l,s.hasSupport=!1;let u=s.held;if(u&&!u.toolHold&&u.collidable&&u.spec.supportAxis){Gh.multiplyQuaternions(er,u.relativeRotation),s.supportOffset.copy(u.spec.supportAxis).applyQuaternion(Gh),ps.copy(u.offset).applyQuaternion(er);let x=s.supportOffset.dot(ps);(Math.abs(x)>.008?x<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(ps),s.hasSupport=!0}if(s.held?.toolHold){let g=n.getPose(r.targetRaySpace,e)?.transform.orientation;g?s.aimDirection.set(0,0,-1).applyQuaternion(Iy.set(g.x,g.y,g.z,g.w)).applyAxisAngle(Dt,mt):s.aimDirection.set(0,0,-1).applyQuaternion(er)}let h=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");h&&!s.menu&&rA(s.side),s.menu=h;let f=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&f&&!s.toolButton&&!Jt&&gn("toolActive",1),s.toolButton=f;let d=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&d&&!s.toolCycle&&W.toolActive&&!Jt&&gn("toolMode",1),s.toolCycle=d;let p=!!r.gamepad?.buttons[0]?.pressed;if(Jt){let x=p&&!s.trigger;(x||!sr||!sr.click&&s.side!==ry)&&(sr={source:r,click:x})}else!Jt&&s.side==="right"&&W.mapEdit?Rh={source:r,click:p&&!s.trigger}:!Jt&&s.side==="right"&&W.toolActive?Ch={source:r,hand:s,click:p&&!s.trigger}:!Jt&&!W.blasterActive&&(s.side==="right"||p&&!s.trigger)&&(rl={source:r,click:p&&!s.trigger});s.trigger=p}}function hA(n,e,t,i){let s=!!t,r=.43+W.size*.088;if(s){let f=t.transform.position;Number.isFinite(wo)||(wo=f.y),oi=Xe.clamp(wo-r,-.65,1.7),Lh.position.y=-oi,jn.set(f.x,f.y-oi,f.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(wh=!1),Math.abs(p)>.67&&!wh&&!Jt&&(wh=!0,Zn.copy(jn).applyAxisAngle(Dt,mt),mt-=Math.sign(p)*Math.PI/4,Dx.copy(jn).applyAxisAngle(Dt,mt),ut.position.add(Zn.sub(Dx)),Ah.reset(),Sh=!1)}else Lh.position.y=0,jn.set(0,r,0),Wt.position.copy(jn),Wt.rotation.set(ms,0,0,"YXZ");if(Et.copy(jn).applyAxisAngle(Dt,mt).add(ut.position),s){let f=t.transform.orientation;Th.set(f.x,f.y,f.z,f.w),Qs.set(0,0,-1).applyQuaternion(Th),Qs.x**2+Qs.z**2>.018&&(Gi=mt+Math.atan2(-Qs.x,-Qs.z))}else Gi=mt;let o=zy(Et),a=9.81*(W.gravity/5)*(o?.gravity??1);if(Fx.copy(ut.position),s){uA(n,e,i),Xt.some(f=>f.valid)&&Pp++,vh.length=0;for(let f of or)vh.push(f);if(W.collisions&&W.objects)for(let f of bt)f.handCollider&&!f.owner&&vh.push(f.handCollider);Ah.move({head:Et,dt:i,gravity:a,settings:W,boxes:vh,velocity:Rn,movement:Qa,reach:Uh()*2+.16});for(let f of Xt)C0(f,W.stepHaptics,i)}else{Rn.y-=a*i;let f=Number(gi.has("KeyD"))-Number(gi.has("KeyA")||gi.has("KeyQ"))+ll.movement.x,d=Number(gi.has("KeyS"))-Number(gi.has("KeyW")||gi.has("KeyZ"))+ll.movement.z,p=gi.has("ShiftLeft")||gi.has("ShiftRight");$s.set(f,0,d).clampLength(0,1).applyAxisAngle(Dt,mt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(o?.friction<.1?2:tr?13:4));Rn.x=Xe.lerp(Rn.x,$s.x,x),Rn.z=Xe.lerp(Rn.z,$s.z,x),(ll.consumeJump()||ki.delete("Space"))&&tr&&(Rn.y=3.1+W.jump*.18),Qa.copy(Rn).multiplyScalar(i)}if(W.collisions&&Sh&&(ps.copy(Et).add(Qa),Za(Nx,ps,Bx,or,Zn,yh)&&$s.subVectors(ps,Zn).dot(yh)<0&&Qa.copy(Zn).sub(Et)),ut.position.add(Qa),Et.copy(jn).applyAxisAngle(Dt,mt).add(ut.position),tr=!1,W.collisions){let f=ht.role==="player"?lA():bt;Ox.set(0,0,1).applyAxisAngle(Dt,Gi);let d=s?-Qs.y:Math.max(0,-Math.sin(ms)),p=s?.17+Xe.smoothstep(d,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,jn.y*.57):jn.y,m=x===2?Bx:x===0?.18:.17;if(Zn.set(Et.x,ut.position.y+g,Et.z),x<2&&Zn.addScaledVector(Ox,p),Ux.copy(Zn),tr=Yf(Zn,m,St.boxes,Rn,0,3+W.grip,i)||tr,W.objects)for(let S of f)S.blocksPlayer&&!S.owner&&_x(Zn,m,S,Rn,yh)&&yh.y>.6&&(tr=!0);Yf(Zn,m,St.boxes,Rn,0,3+W.grip,i),$s.subVectors(Zn,Ux),ut.position.add($s),Et.add($s)}}if(Kf.subVectors(ut.position,Fx),s){let f=Ah.finish(Kf,Rn);f.contacts&&Rp++,f.launched&&(gp++,xp={handSpeed:f.launchSpeed,velocity:Rn.toArray(),t:performance.now()})}(_t.active?ut.position.y<-24||Math.abs(ut.position.x)>155||Math.abs(ut.position.z)>155:ut.position.y<-9||Math.abs(ut.position.x)>33||ut.position.z<-57||ut.position.z>13)&&(qi(),Et.copy(jn).applyAxisAngle(Dt,mt).add(ut.position)),Nx.copy(Et),Sh=!0,ut.rotation.y=mt,s&&Wt.position.set(0,0,0);for(let f of Xt)s&&f.valid&&f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Kf,f.surface?0:1),s||(f.mesh.visible=!1);let l=Math.min(.3,Math.max(.21,jn.y*.31)),c=.72+W.size*.05,u=Uh()*2*(2/3)/.82;gs.visible=W.body,gs.position.set(Et.x,Et.y-l-.24*u-.05*el,Et.z);let h=s?-Qs.y:Math.max(0,-Math.sin(ms));el=Xe.lerp(el,Xe.smoothstep(h,.24,.92),1-Math.exp(-i*14)),kx.set(0,0,1).applyAxisAngle(Dt,Gi),gs.position.addScaledVector(kx,.32*el),Gx.set(-.48*el,Gi,0,"YXZ"),gs.quaternion.setFromEuler(Gx),ys.position.copy(Et),s?ys.quaternion.copy(Th).premultiply(_i.setFromAxisAngle(Dt,mt)):ys.quaternion.setFromEuler(new an(ms,mt,0,"YXZ")),AT(c,u),ut.updateMatrixWorld(!0),Wt.updateWorldMatrix(!0,!1)}function dA(n,e){if(_h+=n,Qf++,vo+=n,_h<1||(nr=Math.round(Qf/_h),Qf=0,_h=0,cn=!0,GT.textContent=nr+" FPS \xB7 qualit\xE9 "+Kt+"/10 \xB7 "+(W.auto?"auto":"manuel"),!W.auto||vo<5))return;vo=0;let t=e?Math.min(100,$e.xr.getSession()?.frameRate||sl):60;e&&(yp=t),Mo=nr<t-4?Mo+1:0,bo=nr>=t-1?bo+1:0;let i=Xe.clamp(Kt+(Mo>=1?-1:bo>=2?1:0),1,10);i!==Kt&&(Kt=i,vo=Mo=bo=0,Xi())}St.bakeLightmap();var Vy={value:1},ky={value:1},Gy={value:0},zp={value:0},iy=new WeakSet;function fl(n){if(!n||iy.has(n))return;iy.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:Vy,uPhotoSaturation:ky,uPhotoWarmth:Gy,uLabShader:zp}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)fl(n);Ct.traverse(n=>{n.isMesh&&![xn.mesh,Jn.mesh,ar].includes(n)&&fl(n.material)});Xi();var sy=new URLSearchParams(location.search);if(sy.has("map"))_t.loadURL(sy.get("map"));else try{let n=localStorage.getItem(Ka);n&&_t.load(n)}catch(n){_t.inform(n.message)}$e.setAnimationLoop((n,e)=>{let t=$f?Math.max(0,(n-$f)/1e3):.014;$f=n;let i=Math.min(.035,t),s=$e.xr.isPresenting,r=$e.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if(PT(n*.001),Ih&&n>Ih&&(pp.hidden=!0,Ih=0,Op=""),ar.visible=!1,Up.hide(),So.mode=0,or=W.collisions?St.boxes:_T,sr=null,rl=null,Ch=null,Rh=null,_t.clearGhost(),xn.mesh.visible=!1,!s&&ht.role==="pc"){gs.visible=!1;for(let p of Xt)p.mesh.visible=!1}else hA(e,r,o,i);let a=!s&&ht.role==="pc",l=a||ht.role==="player";ht.role!=="player"&&(Hi=0),l||(tA(i),cA());for(let p of bt){p.mesh.visible=W.objects&&!l;let{x,y:g,z:m}=p.mesh.position;if((_t.active?g<-24||Math.abs(x)>155||Math.abs(m)>155:g<-8||Math.abs(x)>28||m<-57||m>13)&&(p.owner||(p.mesh.position.copy(p.start),p.velocity.set(0,0,0),p.angular.set(0,0,0))),p.shadow.visible=!l&&W.shadows&&Nh()<3&&W.objects&&p.mesh.position.y<2,p.shadow.visible){let{x:w,z:v}=p.mesh.position,A=St.boxes.find(I=>I.heightfield&&w>=I.xMin&&w<=I.xMax&&v>=I.zMin&&v<=I.zMax),P=A?A.height(w,v):0;p.shadow.position.set(w,P+.006,v)}}if(!l&&W.objects){for(let p of bt)p.beforePhysics.copy(p.mesh.position);xx(bt,St.boxes,i,9.81*W.gravity/5,.12+W.bounce*.064,zy),_t.active||vi.updateTarget(bt)}if(s&&!Jt)for(let p of Xt)KT(p);if(St.probe.rotation.y+=i*.29,dA(Math.min(.3,t),s),xn.mesh.visible=s&&Jt,xn.mesh.visible&&cn&&ty(),xn.mesh.visible&&sr)oA(e,r,sr.source,sr.click);else if(s&&Rh)JT(e,r,Rh);else if(s&&Ch)iA(e,r,Ch);else if(s&&rl)sA(e,r,rl.source,rl.click);else if(!s&&!a){Wt.getWorldPosition(On),Wt.getWorldDirection(Pn),ki.delete("KeyX")&&gn("blasterActive",1),ki.delete("KeyG")&&(gn("toolActive",1),W.toolActive&&yi("Outil \xB7 "+Xs[W.toolMode-1])),ki.delete("KeyT")&&gn("toolMode",1);let p=ki.delete("KeyE");W.toolActive?Ny(On,Pn,p,null):p&&!aA(On,Pn)?dp(On,Pn,!0):!p&&!l&&dp(On,Pn,!1),ki.delete("KeyF")&&(W.objects=!0,Dy(Sp[0]))}let c=Jn.mesh.visible;if(Jn.mesh.visible=s&&!Jt&&Xt[0].valid,Jn.mesh.visible&&(Jn.mesh.position.copy(Xt[0].mesh.position).y+=.12,Jn.mesh.lookAt(Et)),(cn||n-zx>1100||Jn.mesh.visible&&!c)&&(cn=!1,zx=n,Jt&&ty(),Jn.mesh.visible)){let p=Jn.ctx;p.clearRect(0,0,416,84),p.fillStyle="#182632",p.fillRect(0,0,416,84),p.fillStyle="#fff0cf",p.font="bold 25px system-ui",p.fillText(nr+" FPS     Q "+Kt+"/10",17,32),p.font="20px system-ui",p.fillText(W.mapEdit?"\xC9dition : "+Ry[W.mapMode-1]:W.blasterActive?"Pistolet : maintenir la g\xE2chette":W.toolActive?"Tool Gun : "+Xs[W.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Jn.texture.needsUpdate=!0}let u=!a&&(ht.role==="player"||s&&ht.role==="vr")?{head:ys.quaternion,hands:s?Xt.map(p=>p.valid?{position:p.mesh.position,quaternion:p.mesh.quaternion,pressure:p.pressure}:null):[null,So.mode?QT:null],height:jn.y,armSpan:Uh()*2,light:W.timeOfDay-1,color:oy,coconuts:vi.coconuts.reduce((p,x,g)=>p|Number(x.visible)<<g,0),tool:So.mode?So:null}:null;ht.update({inVR:s,time:n,dt:i,position:Et,yaw:a?mt:Gi,pitch:ms,camera:Wt,rig:ut,keys:gi,actions:ki,flat:ll,avatar:u,bodies:W.objects?bt:UT}),Ly.update({frame:e,space:r,inVR:s,remoteWorld:l,dt:i,yaw:mt,drop:oi,rightHand:Xt[1],enabled:W.blasterActive&&!a&&!Jt&&!W.mapEdit,flatFiring:By.held||gi.has("KeyJ")}),ki.clear(),OT(l),St.centerShadows(zh);let h=25+(10-Nh())*(s?7:4);$e.shadowMap.enabled&&n-Lx>=h&&($e.shadowMap.needsUpdate=!0,Lx=n),XT(n,o);let f=s&&W.post,d=s&&W.rayTrace;if(mT(d,bt),(!f||!pT.render(Ct,Wt,{bloom:W.bloom}))&&$e.render(Ct,Wt),(s||!Cp)&&(Ap[Eh]=t*1e3,Eh=(Eh+1)%720,n-lp>350)){lp=n;let{calls:p,triangles:x,lines:g,points:m}=$e.info.render;_y={calls:p,triangles:x,lines:g,points:m,textures:$e.info.memory.textures},s&&(Ep={refreshHz:$e.xr.getSession()?.frameRate??null,targetFps:yp,supportedHz:il.slice(),foveation:$e.xr.getFoveation()??null,visualEffects:{post:f,bloom:f&&W.bloom,rayTrace:d},eyeViewports:$e.xr.getCamera().cameras.map(S=>({width:S.viewport?.z??null,height:S.viewport?.w??null}))})}});})();
