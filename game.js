(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var hp=0,Yu=1,up=2;var $u=1,ac=2,Oi=3,ns=0,Mn=1,jt=2,as=0,$s=1,Zu=2,Ju=3,Ku=4,dp=5,ws=100,fp=101,pp=102,mp=103,gp=104,vp=200,xp=201,yp=202,_p=203,Il=204,Ll=205,bp=206,Mp=207,Sp=208,Ep=209,wp=210,Tp=211,Ap=212,Rp=213,Cp=214,lc=0,cc=1,hc=2,Zs=3,uc=4,dc=5,fc=6,pc=7,mc=0,Pp=1,Ip=2,ls=0,Lp=1,Dp=2,Up=3,io=4,Np=5,Fp=6,zp=7;var ju=300,rr=301,or=302,gc=303,vc=304,Ma=306,Gr=1e3,Es=1001,Dl=1002,Gn=1003,Bp=1004;var Sa=1005;var un=1006,xc=1007;var Ls=1008;var ri=1009,Qu=1010,ed=1011,so=1012,yc=1013,ki=1014,Li=1015,Di=1016,_c=1017,bc=1018,ro=1020,td=35902,nd=35899,id=1021,sd=1022,Pn=1023,Wr=1026,oo=1027,ao=1028,Mc=1029,rd=1030,Sc=1031;var Ec=1033,Ea=33776,wa=33777,Ta=33778,Aa=33779,wc=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,zc=37813,Bc=37814,Oc=37815,kc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,$c=36495,Zc=36283,Jc=36284,Kc=36285,jc=36286;var Jo=2300,Ul=2301,Pl=2302,Du=2400,Uu=2401,Nu=2402;var Op=3200,kp=3201;var Qc=0,Hp=1,cs="",Kt="srgb",Js="srgb-linear",Ko="linear",Et="srgb";var qs=7680;var Fu=519,Vp=512,Gp=513,Wp=514,od=515,Xp=516,qp=517,Yp=518,$p=519,zu=35044;var ar="300 es",Ri=2e3,jo=2001;var is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=1234567,Hr=Math.PI/180,Xr=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function ad(i,e){return(i%e+e)%e}function G0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function W0(i,e,t){return i!==e?(t-i)/(e-i):0}function Yo(i,e,t){return(1-t)*i+t*e}function X0(i,e,t,n){return Yo(i,e,1-Math.exp(-t*n))}function q0(i,e=1){return e-Math.abs(ad(i,e*2)-e)}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Z0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function J0(i,e){return i+Math.random()*(e-i)}function K0(i){return i*(.5-Math.random())}function j0(i){i!==void 0&&(Cf=i);let e=Cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q0(i){return i*Hr}function eg(i){return i*Xr}function tg(i){return(i&i-1)===0&&i!==0}function ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ig(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),h=o(t/2),c=r((e+n)/2),l=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*l,h*u,h*d,a*c);break;case"YZY":i.set(h*d,a*l,h*u,a*c);break;case"ZXZ":i.set(h*u,h*d,a*l,a*c);break;case"XZX":i.set(a*l,h*g,h*f,a*c);break;case"YXY":i.set(h*f,a*l,h*g,a*c);break;case"ZYZ":i.set(h*g,h*f,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var at={DEG2RAD:Hr,RAD2DEG:Xr,generateUUID:lr,clamp:ut,euclideanModulo:ad,mapLinear:G0,inverseLerp:W0,lerp:Yo,damp:X0,pingpong:q0,smoothstep:Y0,smootherstep:$0,randInt:Z0,randFloat:J0,randFloatSpread:K0,seededRandom:j0,degToRad:Q0,radToDeg:eg,isPowerOfTwo:tg,ceilPowerOfTwo:ng,floorPowerOfTwo:ig,setQuaternionFromProperEuler:sg,normalize:Nn,denormalize:kr},ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let h=n[s+0],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||h!==d||c!==f||l!==g){let p=1-a,m=h*d+c*f+l*g+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let T=Math.sqrt(_),w=Math.atan2(T,m*x);p=Math.sin(p*w)/T,a=Math.sin(a*w)/T}let y=a*x;if(h=h*p+d*y,c=c*p+f*y,l=l*p+g*y,u=u*p+v*y,p===1-a){let T=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=T,c*=T,l*=T,u*=T}}e[t]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],h=n[s+1],c=n[s+2],l=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+l*u+h*f-c*d,e[t+1]=h*g+l*d+c*u-a*f,e[t+2]=c*g+l*f+a*d-h*u,e[t+3]=l*g-a*u-h*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,c=a(n/2),l=a(s/2),u=a(r/2),d=h(n/2),f=h(s/2),g=h(r/2);switch(o){case"XYZ":this._x=d*l*u+c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u+d*f*g;break;case"YZX":this._x=d*l*u+c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u-d*f*g;break;case"XZY":this._x=d*l*u-c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],h=t[9],c=t[2],l=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-h)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(l-h)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(h+l)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(h+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,h=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+s*c-r*h,this._y=s*l+o*h+r*a-n*c,this._z=r*l+o*c+n*h-s*a,this._w=o*l-n*a-s*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let h=1-a*a;if(h<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(h),l=Math.atan2(c,a),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,h=e.w,c=2*(o*s-a*n),l=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+h*c+o*u-a*l,this.y=n+h*l+a*c-r*u,this.z=s+h*u+r*l-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ru=new R,Pf=new Rt,$e=class i{constructor(e,t,n,s,r,o,a,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c)}set(e,t,n,s,r,o,a,h,c){let l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=h,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],x=s[1],_=s[4],y=s[7],T=s[2],w=s[5],C=s[8];return r[0]=o*v+a*x+h*T,r[3]=o*p+a*_+h*w,r[6]=o*m+a*y+h*C,r[1]=c*v+l*x+u*T,r[4]=c*p+l*_+u*w,r[7]=c*m+l*y+u*C,r[2]=d*v+f*x+g*T,r[5]=d*p+f*_+g*w,r[8]=d*m+f*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*r*l+n*a*h+s*r*c-s*o*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],u=l*o-a*c,d=a*h-l*r,f=c*r-o*h,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-l*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(l*t-s*h)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*h-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+e,-s*c,s*h,-s*(-c*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ou=new $e;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){let i=Qo("canvas");return i.style.display="block",i}var If={};function qr(i){i in If||(If[i]=!0,console.warn(i))}function Jp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var gt=rg();function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=Qo("canvas")),Ar.width=e.width,Ar.height=e.height;let s=Ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},og=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(au(s[o].image)):r.push(au(s[o]))}else r=au(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function au(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ag=0,lu=new R,Fn=class i extends is{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Es,s=Es,r=un,o=Ls,a=Pn,h=ri,c=i.DEFAULT_ANISOTROPY,l=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=lr(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ju;Fn.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,h=e.elements,c=h[0],l=h[4],u=h[8],d=h[1],f=h[5],g=h[9],v=h[2],p=h[6],m=h[10];if(Math.abs(l-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,T=(m+1)/2,w=(l+d)/4,C=(u+v)/4,I=(g+p)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-v)/x,this.z=(d-l)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Fn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),nl.subVectors(this.max,Bo),Rr.subVectors(e.a,Bo),Cr.subVectors(e.b,Bo),Pr.subVectors(e.c,Bo),xs.subVectors(Cr,Rr),ys.subVectors(Pr,Cr),Vs.subVectors(Rr,Pr);let t=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-Vs.z,Vs.y,xs.z,0,-xs.x,ys.z,0,-ys.x,Vs.z,0,-Vs.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-Vs.y,Vs.x,0];return!cu(t,Rr,Cr,Pr,nl)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Rr,Cr,Pr,nl))?!1:(il.crossVectors(xs,ys),t=[il.x,il.y,il.z],cu(t,Rr,Cr,Pr,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new R,new R,new R,new R,new R,new R,new R,new R],wi=new R,tl=new yn,Rr=new R,Cr=new R,Pr=new R,xs=new R,ys=new R,Vs=new R,Bo=new R,nl=new R,il=new R,Gs=new R;function cu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gs.fromArray(i,r);let a=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),h=e.dot(Gs),c=t.dot(Gs),l=n.dot(Gs);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>a)return!1}return!0}var lg=new yn,Oo=new R,hu=new R,Wn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);let t=Oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(hu)),this.expandByPoint(Oo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ji=new R,uu=new R,sl=new R,_s=new R,du=new R,rl=new R,fu=new R,ti=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uu.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(uu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sl),a=_s.dot(this.direction),h=-_s.dot(sl),c=_s.lengthSq(),l=Math.abs(1-o*o),u,d,f,g;if(l>0)if(u=o*h-a,d=o*a-h,g=r*l,u>=0)if(d>=-g)if(d<=g){let v=1/l;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*h)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-h),r),f=d*(d+2*h)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uu).addScaledVector(sl,d),f}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,h,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),l>=0?(r=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,h=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,h=(e.min.z-d.z)*u),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,r){du.subVectors(t,e),rl.subVectors(n,e),fu.crossVectors(du,rl);let o=this.direction.dot(fu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,e);let h=a*this.direction.dot(rl.crossVectors(_s,rl));if(h<0)return null;let c=a*this.direction.dot(du.cross(_s));if(c<0||h+c>o)return null;let l=-a*_s.dot(fu);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,o,a,h,c,l,u,d,f,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,h,c,l,u,d,f,g,v,p)}set(e,t,n,s,r,o,a,h,c,l,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=h,m[2]=c,m[6]=l,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ir.setFromMatrixColumn(e,0).length(),r=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),c=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*l,f=o*u,g=a*l,v=a*u;t[0]=h*l,t[4]=-h*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*h,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*h}else if(e.order==="YXZ"){let d=h*l,f=h*u,g=c*l,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*h}else if(e.order==="ZXY"){let d=h*l,f=h*u,g=c*l,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*l,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){let d=o*l,f=o*u,g=a*l,v=a*u;t[0]=h*l,t[4]=g*c-f,t[8]=d*c+v,t[1]=h*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){let d=o*h,f=o*c,g=a*h,v=a*c;t[0]=h*l,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*h,f=o*c,g=a*h,v=a*c;t[0]=h*l,t[4]=-u,t[8]=c*l,t[1]=d*u+v,t[5]=o*l,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*l,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cg,e,hg)}lookAt(e,t,n){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),bs.crossVectors(n,Qn),bs.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),bs.crossVectors(n,Qn)),bs.normalize(),ol.crossVectors(Qn,bs),s[0]=bs.x,s[4]=ol.x,s[8]=Qn.x,s[1]=bs.y,s[5]=ol.y,s[9]=Qn.y,s[2]=bs.z,s[6]=ol.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],_=n[7],y=n[11],T=n[15],w=s[0],C=s[4],I=s[8],S=s[12],b=s[1],A=s[5],L=s[9],U=s[13],k=s[2],B=s[6],H=s[10],K=s[14],G=s[3],oe=s[7],pe=s[11],Z=s[15];return r[0]=o*w+a*b+h*k+c*G,r[4]=o*C+a*A+h*B+c*oe,r[8]=o*I+a*L+h*H+c*pe,r[12]=o*S+a*U+h*K+c*Z,r[1]=l*w+u*b+d*k+f*G,r[5]=l*C+u*A+d*B+f*oe,r[9]=l*I+u*L+d*H+f*pe,r[13]=l*S+u*U+d*K+f*Z,r[2]=g*w+v*b+p*k+m*G,r[6]=g*C+v*A+p*B+m*oe,r[10]=g*I+v*L+p*H+m*pe,r[14]=g*S+v*U+p*K+m*Z,r[3]=x*w+_*b+y*k+T*G,r[7]=x*C+_*A+y*B+T*oe,r[11]=x*I+_*L+y*H+T*pe,r[15]=x*S+_*U+y*K+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],h=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*h*u-s*c*u-r*a*d+n*c*d+s*a*f-n*h*f)+v*(+t*h*f-t*c*d+r*o*d-s*o*f+s*c*l-r*h*l)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*l-n*c*l)+m*(-s*a*l-t*h*u+t*a*d+s*o*u-n*o*d+n*h*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],x=u*p*c-v*d*c+v*h*f-a*p*f-u*h*m+a*d*m,_=g*d*c-l*p*c-g*h*f+o*p*f+l*h*m-o*d*m,y=l*v*c-g*u*c+g*a*f-o*v*f-l*a*m+o*u*m,T=g*u*h-l*v*h-g*a*d+o*v*d+l*a*p-o*u*p,w=t*x+n*_+s*y+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=x*C,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*C,e[2]=(a*p*r-v*h*r+v*s*c-n*p*c-a*s*m+n*h*m)*C,e[3]=(u*h*r-a*d*r-u*s*c+n*d*c+a*s*f-n*h*f)*C,e[4]=_*C,e[5]=(l*p*r-g*d*r+g*s*f-t*p*f-l*s*m+t*d*m)*C,e[6]=(g*h*r-o*p*r-g*s*c+t*p*c+o*s*m-t*h*m)*C,e[7]=(o*d*r-l*h*r+l*s*c-t*d*c-o*s*f+t*h*f)*C,e[8]=y*C,e[9]=(g*u*r-l*v*r-g*n*f+t*v*f+l*n*m-t*u*m)*C,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*m+t*a*m)*C,e[11]=(l*a*r-o*u*r-l*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=T*C,e[13]=(l*v*s-g*u*s+g*n*d-t*v*d-l*n*p+t*u*p)*C,e[14]=(g*a*s-o*v*s-g*n*h+t*v*h+o*n*p-t*a*p)*C,e[15]=(o*u*s-l*a*s+l*n*h-t*u*h-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,h=e.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-s*h,c*h+s*a,0,c*a+s*h,l*a+n,l*h-s*o,0,c*h-s*a,l*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,c=r+r,l=o+o,u=a+a,d=r*c,f=r*l,g=r*u,v=o*l,p=o*u,m=a*u,x=h*c,_=h*l,y=h*u,T=n.x,w=n.y,C=n.z;return s[0]=(1-(v+m))*T,s[1]=(f+y)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+m))*w,s[6]=(p+x)*w,s[7]=0,s[8]=(g+_)*C,s[9]=(p-x)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ir.set(s[0],s[1],s[2]).length(),o=Ir.set(s[4],s[5],s[6]).length(),a=Ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);let c=1/r,l=1/o,u=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=l,Ti.elements[5]*=l,Ti.elements[6]*=l,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ri,h=!1){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(h)g=r/(o-r),v=o*r/(o-r);else if(a===Ri)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ri,h=!1){let c=this.elements,l=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(h)g=1/(o-r),v=o/(o-r);else if(a===Ri)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===jo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ir=new R,Ti=new Ke,cg=new R(0,0,0),hg=new R(1,1,1),bs=new R,ol=new R,Qn=new R,Uf=new Ke,Nf=new Rt,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],h=s[1],c=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ug=0,Ff=new R,Lr=new Rt,Ki=new Ke,al=new R,ko=new R,dg=new R,fg=new Rt,zf=new R(1,0,0),Bf=new R(0,1,0),Of=new R(0,0,1),kf={type:"added"},pg={type:"removed"},Dr={type:"childadded",child:null},pu={type:"childremoved",child:null},vt=class i extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new An,n=new Rt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new $e}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?al.copy(e):al.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ko,al,this.up):Ki.lookAt(al,ko,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pg),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){let u=h[c];r(e.shapes,u)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(e.materials,this.material[h]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(e.animations,h))}}if(t){let a=o(e.geometries),h=o(e.materials),c=o(e.textures),l=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let h=[];for(let c in a){let l=a[c];delete l.metadata,h.push(l)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new R(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new R,ji=new R,mu=new R,Qi=new R,Ur=new R,Nr=new R,Hf=new R,gu=new R,vu=new R,xu=new R,yu=new ct,_u=new ct,bu=new ct,es=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ai.subVectors(e,t),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ai.subVectors(s,t),ji.subVectors(n,t),mu.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(ji),h=Ai.dot(mu),c=ji.dot(ji),l=ji.dot(mu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*h-a*l)*d,g=(o*l-a*h)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,h){return this.getBarycoord(e,t,n,s,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Qi.x),h.addScaledVector(o,Qi.y),h.addScaledVector(a,Qi.z),h)}static getInterpolatedAttribute(e,t,n,s,r,o){return yu.setScalar(0),_u.setScalar(0),bu.setScalar(0),yu.fromBufferAttribute(e,t),_u.fromBufferAttribute(e,n),bu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(_u,r.y),o.addScaledVector(bu,r.z),o}static isFrontFacing(e,t,n,s){return Ai.subVectors(n,t),ji.subVectors(e,t),Ai.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ai.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ur.subVectors(s,n),Nr.subVectors(r,n),gu.subVectors(e,n);let h=Ur.dot(gu),c=Nr.dot(gu);if(h<=0&&c<=0)return t.copy(n);vu.subVectors(e,s);let l=Ur.dot(vu),u=Nr.dot(vu);if(l>=0&&u<=l)return t.copy(s);let d=h*u-l*c;if(d<=0&&h>=0&&l<=0)return o=h/(h-l),t.copy(n).addScaledVector(Ur,o);xu.subVectors(e,r);let f=Ur.dot(xu),g=Nr.dot(xu);if(g>=0&&f<=g)return t.copy(r);let v=f*c-h*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Nr,a);let p=l*g-f*u;if(p<=0&&u-l>=0&&f-g>=0)return Hf.subVectors(r,s),a=(u-l)/(u-l+(f-g)),t.copy(s).addScaledVector(Hf,a);let m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Ur,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Mu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=ad(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Mu(o,r,e+1/3),this.g=Mu(o,r,e),this.b=Mu(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return gt.workingToColorSpace(Tn.copy(this),e),Math.round(ut(Tn.r*255,0,255))*65536+Math.round(ut(Tn.g*255,0,255))*256+Math.round(ut(Tn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),h,c,l=(a+o)/2;if(a===o)h=0,c=0;else{let u=o-a;switch(c=l<=.5?u/(o+a):u/(2-o-a),o){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return e.h=h,e.s=c,e.l=l,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Kt){gt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(ll);let n=Yo(Ms.h,ll.h,t),s=Yo(Ms.s,ll.s,t),r=Yo(Ms.l,ll.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new se;se.NAMES=Kp;var mg=0,Ci=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=$s,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ll,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rn=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new R,cl=new ue,gg=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),e}};var ta=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Me=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},vg=0,ui=new Ke,Su=new vt,Fr=new R,ei=new yn,Ho=new yn,xn=new R,it=class i extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?na:ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ei.min,Ho.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Ho.max),ei.expandByPoint(xn)):(ei.expandByPoint(Ho.min),ei.expandByPoint(Ho.max))}ei.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],h=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)xn.fromBufferAttribute(a,c),h&&(Fr.fromBufferAttribute(e,c),xn.add(Fr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],h=[];for(let I=0;I<n.count;I++)a[I]=new R,h[I]=new R;let c=new R,l=new R,u=new R,d=new ue,f=new ue,g=new ue,v=new R,p=new R;function m(I,S,b){c.fromBufferAttribute(n,I),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),l.sub(c),u.sub(c),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),p.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(A),a[I].add(v),a[S].add(v),a[b].add(v),h[I].add(p),h[S].add(p),h[b].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,S=x.length;I<S;++I){let b=x[I],A=b.start,L=b.count;for(let U=A,k=A+L;U<k;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let _=new R,y=new R,T=new R,w=new R;function C(I){T.fromBufferAttribute(s,I),w.copy(T);let S=a[I];_.copy(S),_.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(w,S);let A=y.dot(h[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,A)}for(let I=0,S=x.length;I<S;++I){let b=x[I],A=b.start,L=b.count;for(let U=A,k=A+L;U<k;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,h=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(l),h.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,h){let c=a.array,l=a.itemSize,u=a.normalized,d=new c.constructor(h.length*l),f=0,g=0;for(let v=0,p=h.length;v<p;v++){a.isInterleavedBufferAttribute?f=h[v]*a.data.stride+a.offset:f=h[v]*l;for(let m=0;m<l;m++)d[g++]=c[f++]}return new Ot(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],c=e(h,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let h=[],c=r[a];for(let l=0,u=c.length;l<u;l++){let d=c[l],f=e(d,n);h.push(f)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],l=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];l.push(f.toJSON(e.data))}l.length>0&&(s[h]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let l=s[c];this.setAttribute(c,l.clone(t))}let r=e.morphAttributes;for(let c in r){let l=[],u=r[c];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,l=o.length;c<l;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vf=new Ke,Ws=new ti,hl=new Wn,Gf=new R,ul=new R,dl=new R,fl=new R,Eu=new R,pl=new R,Wf=new R,ml=new R,nt=class extends vt{constructor(e=new it,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){pl.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let l=a[h],u=r[h];l!==0&&(Eu.fromBufferAttribute(u,e),o?pl.addScaledVector(Eu,l):pl.addScaledVector(Eu.sub(t),l))}t.add(pl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(hl.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(hl,Gf)===null||Ws.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Vf.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Vf),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,T=_;y<T;y+=3){let w=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);s=gl(this,m,e,n,c,l,u,w,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);s=gl(this,o,e,n,c,l,u,x,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(h.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,T=_;y<T;y+=3){let w=y,C=y+1,I=y+2;s=gl(this,m,e,n,c,l,u,w,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(h.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=p,_=p+1,y=p+2;s=gl(this,o,e,n,c,l,u,x,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function xg(i,e,t,n,s,r,o,a){let h;if(e.side===Mn?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,e.side===ns,a),h===null)return null;ml.copy(a),ml.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ml);return c<t.near||c>t.far?null:{distance:c,point:ml.clone(),object:i}}function gl(i,e,t,n,s,r,o,a,h,c){i.getVertexPosition(a,ul),i.getVertexPosition(h,dl),i.getVertexPosition(c,fl);let l=xg(i,e,t,n,ul,dl,fl,Wf);if(l){let u=new R;es.getBarycoord(Wf,ul,dl,fl,u),s&&(l.uv=es.getInterpolatedAttribute(s,a,h,c,u,new ue)),r&&(l.uv1=es.getInterpolatedAttribute(r,a,h,c,u,new ue)),o&&(l.normal=es.getInterpolatedAttribute(o,a,h,c,u,new R),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:h,c,normal:new R,materialIndex:0};es.getNormal(ul,dl,fl,d.normal),l.face=d,l.barycoord=u}return l}var zn=class i extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],c=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2));function g(v,p,m,x,_,y,T,w,C,I,S){let b=y/C,A=T/I,L=y/2,U=T/2,k=w/2,B=C+1,H=I+1,K=0,G=0,oe=new R;for(let pe=0;pe<H;pe++){let Z=pe*A-U;for(let Ve=0;Ve<B;Ve++){let Ze=Ve*b-L;oe[v]=Ze*x,oe[p]=Z*_,oe[m]=k,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[p]=0,oe[m]=w>0?1:-1,l.push(oe.x,oe.y,oe.z),u.push(Ve/C),u.push(1-pe/I),K+=1}}for(let pe=0;pe<I;pe++)for(let Z=0;Z<C;Z++){let Ve=d+Z+B*pe,Ze=d+Z+B*(pe+1),dt=d+(Z+1)+B*(pe+1),Qe=d+(Z+1)+B*pe;h.push(Ve,Ze,Qe),h.push(Ze,dt,Qe),G+=6}a.addGroup(f,G,S),f+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function yg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var eh={clone:cr,merge:In},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ss=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ss=new R,Xf=new ue,qf=new ue,Wt=class extends ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*n/c,s*=o.width/h,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zr=-90,Br=1,zl=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(zr,Br,e,t);s.layers=this.layers,this.add(s);let r=new Wt(zr,Br,e,t);r.layers=this.layers,this.add(r);let o=new Wt(zr,Br,e,t);o.layers=this.layers,this.add(o);let a=new Wt(zr,Br,e,t);a.layers=this.layers,this.add(a);let h=new Wt(zr,Br,e,t);h.layers=this.layers,this.add(h);let c=new Wt(zr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,h]=t;for(let c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends Fn{constructor(e=[],t=rr,n,s,r,o,a,h,c,l){super(e,t,n,s,r,o,a,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bl=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:as});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===Ls&&(t.minFilter=un),new zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ut=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Pi=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ts=class extends Fn{constructor(e=null,t=1,n=1,s,r,o,a,h,c=Gn,l=Gn,u,d){super(null,o,a,h,c,l,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new Ke,Yf=new Ke,vl=[],$f=new yn,Sg=new Ke,Vo=new nt,Go=new Wn,en=class extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),$f.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Go.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),e.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Yf.multiplyMatrices(n,Or),Vo.matrixWorld=Yf,Vo.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){let h=vl[o];h.instanceId=r,h.object=this,t.push(h)}vl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,ao,Li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*e;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wu=new R,Eg=new R,wg=new $e,di=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wu.subVectors(n,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wg.getNormalMatrix(e),s=this.coplanarPoint(wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xs=new Wn,Tg=new ue(.5,.5),xl=new R,As=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],h=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],x=r[12],_=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-l,m-g,T-x).normalize(),s[1].setComponents(c+o,f+l,m+g,T+x).normalize(),s[2].setComponents(c+a,f+u,m+v,T+_).normalize(),s[3].setComponents(c-a,f-u,m-v,T-_).normalize(),n)s[4].setComponents(h,d,p,y).normalize(),s[5].setComponents(c-h,f-d,m-p,T-y).normalize();else if(s[4].setComponents(c-h,f-d,m-p,T-y).normalize(),t===Ri)s[5].setComponents(c+h,f+d,m+p,T+y).normalize();else if(t===jo)s[5].setComponents(h,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=Tg.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xl.x=s.normal.x>0?e.max.x:e.min.x,xl.y=s.normal.y>0?e.max.y:e.min.y,xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bi=class extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ol=new R,kl=new R,Zf=new Ke,Wo=new ti,yl=new Wn,Tu=new R,Jf=new R,Qr=class extends vt{constructor(e=new it,t=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ol.fromBufferAttribute(t,s-1),kl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ol.distanceTo(kl);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),yl.radius+=r,e.ray.intersectsSphere(yl)===!1)return;Zf.copy(s).invert(),Wo.copy(e.ray).applyMatrix4(Zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){let m=l.getX(v),x=l.getX(v+1),_=_l(this,e,Wo,h,m,x,v);_&&t.push(_)}if(this.isLineLoop){let v=l.getX(g-1),p=l.getX(f),m=_l(this,e,Wo,h,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){let m=_l(this,e,Wo,h,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=_l(this,e,Wo,h,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _l(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ol.fromBufferAttribute(a,s),kl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ol,kl,Tu,Jf)>n)return;Tu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tu);if(!(c<e.near||c>e.far))return{distance:c,point:Jf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Kf=new R,jf=new R,Ks=class extends Qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kf.distanceTo(jf);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hl=class extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new Ke,Bu=new ti,bl=new Wn,Ml=new R,sa=class extends vt{constructor(e=new it,t=new Hl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),bl.radius+=r,e.ray.intersectsSphere(bl)===!1)return;Qf.copy(s).invert(),Bu.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let p=c.getX(g);Ml.fromBufferAttribute(u,p),ep(Ml,p,h,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Ml.fromBufferAttribute(u,g),ep(Ml,g,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ep(i,e,t,n,s,r,o){let a=Bu.distanceSqToPoint(i);if(a<t){let h=new R;Bu.closestPointToPoint(i,h),h.applyMatrix4(n);let c=s.ray.origin.distanceTo(h);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var rs=class extends Fn{constructor(e,t,n,s,r,o,a,h,c){super(e,t,n,s,r,o,a,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},js=class extends Fn{constructor(e,t,n=ki,s,r,o,a=Gn,h=Gn,c,l=Wr,u=1){if(l!==Wr&&l!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,h,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ra=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Bn=class i extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function x(){let y=new R,T=new R,w=0,C=(t-e)/n;for(let I=0;I<=r;I++){let S=[],b=I/r,A=b*(t-e)+e;for(let L=0;L<=s;L++){let U=L/s,k=U*h+a,B=Math.sin(k),H=Math.cos(k);T.x=A*B,T.y=-b*n+p,T.z=A*H,u.push(T.x,T.y,T.z),y.set(B,C,H).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-b),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let b=v[S][I],A=v[S+1][I],L=v[S+1][I+1],U=v[S][I+1];(e>0||S!==0)&&(l.push(b,A,U),w+=3),(t>0||S!==r-1)&&(l.push(A,L,U),w+=3)}c.addGroup(m,w,0),m+=w}function _(y){let T=g,w=new ue,C=new R,I=0,S=y===!0?e:t,b=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;let A=g;for(let L=0;L<=s;L++){let k=L/s*h+a,B=Math.cos(k),H=Math.sin(k);C.x=S*H,C.y=p*b,C.z=S*B,u.push(C.x,C.y,C.z),d.push(0,b,0),w.x=B*.5+.5,w.y=H*.5*b+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){let U=T+L,k=A+L;y===!0?l.push(k,k+1,U):l.push(k+1,k,U),I+=3}c.addGroup(m,I,y===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},os=class i extends Bn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oa=class i extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),l(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new R,y=new R,T=new R;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],y),f(t[w+2],T),h(_,y,T,x)}function h(x,_,y,T){let w=T+1,C=[];for(let I=0;I<=w;I++){C[I]=[];let S=x.clone().lerp(y,I/w),b=_.clone().lerp(y,I/w),A=w-I;for(let L=0;L<=A;L++)L===0&&I===w?C[I][L]=S:C[I][L]=S.clone().lerp(b,L/A)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){let b=Math.floor(S/2);S%2===0?(d(C[I][b+1]),d(C[I+1][b]),d(C[I][b])):(d(C[I][b+1]),d(C[I+1][b+1]),d(C[I+1][b]))}}function c(x){let _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function l(){let x=new R;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let y=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;o.push(y,1-T)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let _=o[x+0],y=o[x+2],T=o[x+4],w=Math.max(_,y,T),C=Math.min(_,y,T);w>.9&&C<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let x=new R,_=new R,y=new R,T=new R,w=new ue,C=new ue,I=new ue;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),T.copy(x).add(_).add(y).divideScalar(3);let A=p(T);v(w,b+0,x,A),v(C,b+2,_,A),v(I,b+4,y,A)}}function v(x,_,y,T){T<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Sl=new R,El=new R,Au=new R,wl=new es,aa=class extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Hr*t),o=e.getIndex(),a=e.getAttribute("position"),h=o?o.count:a.count,c=[0,0,0],l=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<h;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:p,c:m}=wl;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),wl.getNormal(Au),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let _=(x+1)%3,y=u[x],T=u[_],w=wl[l[x]],C=wl[l[_]],I=`${y}_${T}`,S=`${T}_${y}`;S in d&&d[S]?(Au.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),d[S]=null):I in d||(d[I]={index0:c[x],index1:c[_],normal:Au.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:p}=d[g];Sl.fromBufferAttribute(a,v),El.fromBufferAttribute(a,p),f.push(Sl.x,Sl.y,Sl.z),f.push(El.x,El.y,El.z)}this.setAttribute("position",new Me(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,h=r-1,c;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===o)return s/(r-1);let l=n[s],d=n[s+1]-l,f=(o-l)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),h=t||(o.isVector2?new ue:new R);return h.copy(a).sub(o).normalize(),h}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],o=[],a=new R,h=new Ke;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(h.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(h.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},eo=class extends ni{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,h=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=h-this.aX,f=c-this.aY;h=d*l-f*u+this.aX,c=d*u+f*l+this.aY}return n.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vl=class extends eo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hd(){let i=0,e=0,t=0,n=0;function s(r,o,a,h){i=r,e=a,t=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,c){s(o,a,c*(a-r),c*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,c,l,u){let d=(o-r)/c-(a-r)/(c+l)+(a-o)/l,f=(a-o)/l-(h-o)/(l+u)+(h-a)/u;d*=l,f*=l,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Tl=new R,Ru=new hd,Cu=new hd,Pu=new hd,Gl=class extends ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let c,l;this.closed||a>0?c=s[(a-1)%r]:(Tl.subVectors(s[0],s[1]).add(s[0]),c=Tl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(Tl.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Tl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(l),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ru.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,g,v,p),Cu.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,g,v,p),Pu.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,g,v,p)}else this.curveType==="catmullrom"&&(Ru.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Cu.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Pu.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ru.calc(h),Cu.calc(h),Pu.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,h=i*a;return(2*t-2*n+r+o)*h+(-3*t+3*n-2*r-o)*a+r*i+t}function Ag(i,e){let t=1-i;return t*t*e}function Rg(i,e){return 2*(1-i)*i*e}function Cg(i,e){return i*i*e}function $o(i,e,t,n){return Ag(i,e)+Rg(i,t)+Cg(i,n)}function Pg(i,e){let t=1-i;return t*t*t*e}function Ig(i,e){let t=1-i;return 3*t*t*i*e}function Lg(i,e){return 3*(1-i)*i*i*e}function Dg(i,e){return i*i*i*e}function Zo(i,e,t,n,s){return Pg(i,e)+Ig(i,t)+Lg(i,n)+Dg(i,s)}var la=class extends ni{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zo(e,s.x,r.x,o.x,a.x),Zo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wl=class extends ni{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zo(e,s.x,r.x,o.x,a.x),Zo(e,s.y,r.y,o.y,a.y),Zo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends ni{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends ni{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends ni{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends ni{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y),$o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,h=s[o===0?o:o-1],c=s[o],l=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(tp(a,h.x,c.x,l.x,u.x),tp(a,h.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Gl,CubicBezierCurve:la,CubicBezierCurve3:Wl,EllipseCurve:eo,LineCurve:ca,LineCurve3:Xl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:ql,SplineCurve:ua}),Yl=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],h=a.getLength(),c=h===0?0:1-o/h;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,h=o.getPoints(a);for(let c=0;c<h.length;c++){let l=h[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ou[s.type]().fromJSON(s))}return this}},da=class extends Yl{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ca(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ha(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new la(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+a,t+h,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,h){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,r,o,a,h),this}absellipse(e,t,n,s,r,o,a,h){let c=new eo(e,t,n,s,r,o,a,h);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rs=class extends da{constructor(e){super(e),this.uuid=lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new da().fromJSON(s))}return this}};function Ug(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=jp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,h,c;if(n&&(r=Og(i,e,r,t)),i.length>80*t){a=1/0,h=1/0;let l=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<h&&(h=g),f>l&&(l=f),g>u&&(u=g)}c=Math.max(l-a,u-h),c=c!==0?32767/c:0}return fa(r,o,t,a,h,c,0),o}function jp(i,e,t,n,s){let r;if(s===Jg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=np(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=np(o/n|0,i[o],i[o+1],r);return r&&to(r,r.next)&&(ma(r),r=r.next),r}function Qs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(to(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Wg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let h=i.prev,c=i.next;if(r?Fg(i,n,s,r):Ng(i)){e.push(h.i,i.i,c.i),ma(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zg(Qs(i),e),fa(i,e,t,n,s,r,2)):o===2&&Bg(i,e,t,n,s,r):fa(Qs(i),e,t,n,s,r,1);break}}}function Ng(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,h=t.y,c=n.y,l=Math.min(s,r,o),u=Math.min(a,h,c),d=Math.max(s,r,o),f=Math.max(a,h,c),g=n.next;for(;g!==e;){if(g.x>=l&&g.x<=d&&g.y>=u&&g.y<=f&&qo(s,a,r,h,o,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;let a=s.x,h=r.x,c=o.x,l=s.y,u=r.y,d=o.y,f=Math.min(a,h,c),g=Math.min(l,u,d),v=Math.max(a,h,c),p=Math.max(l,u,d),m=ku(f,g,e,t,n),x=ku(v,p,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&qo(a,l,h,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&qo(a,l,h,u,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&qo(a,l,h,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&qo(a,l,h,u,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!to(n,s)&&em(n,t,t.next,s)&&pa(n,s)&&pa(s,n)&&(e.push(n.i,t.i,s.i),ma(t),ma(t.next),t=i=s),t=t.next}while(t!==i);return Qs(t)}function Bg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let h=tm(o,a);o=Qs(o,o.next),h=Qs(h,h.next),fa(o,e,t,n,s,r,0),fa(h,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Og(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,h=r<o-1?e[r+1]*n:i.length,c=jp(i,a,h,n,!1);c===c.next&&(c.steiner=!0),s.push(qg(c))}s.sort(kg);for(let r=0;r<s.length;r++)t=Hg(s[r],t);return t}function kg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Hg(i,e){let t=Vg(i,e);if(!t)return e;let n=tm(t,i);return Qs(n,n.next),Qs(t,t.next)}function Vg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(to(i,t))return t;do{if(to(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,h=o.x,c=o.y,l=1/0;t=o;do{if(n>=t.x&&t.x>=h&&n!==t.x&&Qp(s<c?n:r,s,h,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);pa(t,i)&&(u<l||u===l&&(t.x>o.x||t.x===o.x&&Gg(o,t)))&&(o=t,l=u)}t=t.next}while(t!==a);return o}function Gg(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function Wg(i,e,t,n){let s=i;do s.z===0&&(s.z=ku(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let h=t;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ku(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function qo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Qp(i,e,t,n,s,r,o,a)}function Yg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$g(i,e)&&(pa(i,e)&&pa(e,i)&&Zg(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||to(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function to(i,e){return i.x===e.x&&i.y===e.y}function em(i,e,t,n){let s=Rl(Xt(i,e,t)),r=Rl(Xt(i,e,n)),o=Rl(Xt(t,n,i)),a=Rl(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Al(i,t,e)||r===0&&Al(i,n,e)||o===0&&Al(t,i,n)||a===0&&Al(t,e,n))}function Al(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rl(i){return i>0?1:i<0?-1:0}function $g(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&em(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function pa(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Zg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tm(i,e){let t=Hu(i.i,i.x,i.y),n=Hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function np(i,e,t,n){let s=Hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vu=class{static triangulate(e,t,n=2){return Ug(e,t,n)}},Ys=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ip(e),sp(n,e);let o=e.length;t.forEach(ip);for(let h=0;h<t.length;h++)s.push(o),o+=t[h].length,sp(n,t[h]);let a=Vu.triangulate(n,s);for(let h=0;h<a.length;h+=3)r.push(a.slice(h,h+3));return r}};function ip(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var er=class i extends it{constructor(e=new Rs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,h=e.length;a<h;a++){let c=e[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let h=[],c=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Kg,_,y=!1,T,w,C,I;m&&(_=m.getSpacedPoints(l),y=!0,d=!1,T=m.computeFrenetFrames(l,!1),w=new R,C=new R,I=new R),d||(p=0,f=0,g=0,v=0);let S=a.extractPoints(c),b=S.shape,A=S.holes;if(!Ys.isClockWise(b)){b=b.reverse();for(let re=0,ee=A.length;re<ee;re++){let Q=A[re];Ys.isClockWise(Q)&&(A[re]=Q.reverse())}}function U(re){let Q=10000000000000001e-36,j=re[0];for(let me=1;me<=re.length;me++){let ae=me%re.length,ge=re[ae],et=ge.x-j.x,Je=ge.y-j.y,P=et*et+Je*Je,M=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(j.x),Math.abs(j.y)),O=Q*M*M;if(P<=O){re.splice(ae,1),me--;continue}j=ge}}U(b),A.forEach(U);let k=A.length,B=b;for(let re=0;re<k;re++){let ee=A[re];b=b.concat(ee)}function H(re,ee,Q){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ee,Q)}let K=b.length;function G(re,ee,Q){let j,me,ae,ge=re.x-ee.x,et=re.y-ee.y,Je=Q.x-re.x,P=Q.y-re.y,M=ge*ge+et*et,O=ge*P-et*Je;if(Math.abs(O)>Number.EPSILON){let q=Math.sqrt(M),ie=Math.sqrt(Je*Je+P*P),$=ee.x-et/q,Ne=ee.y+ge/q,fe=Q.x-P/ie,Ie=Q.y+Je/ie,Le=((fe-$)*P-(Ie-Ne)*Je)/(ge*P-et*Je);j=$+ge*Le-re.x,me=Ne+et*Le-re.y;let le=j*j+me*me;if(le<=2)return new ue(j,me);ae=Math.sqrt(le/2)}else{let q=!1;ge>Number.EPSILON?Je>Number.EPSILON&&(q=!0):ge<-Number.EPSILON?Je<-Number.EPSILON&&(q=!0):Math.sign(et)===Math.sign(P)&&(q=!0),q?(j=-et,me=ge,ae=Math.sqrt(M)):(j=ge,me=et,ae=Math.sqrt(M/2))}return new ue(j/ae,me/ae)}let oe=[];for(let re=0,ee=B.length,Q=ee-1,j=re+1;re<ee;re++,Q++,j++)Q===ee&&(Q=0),j===ee&&(j=0),oe[re]=G(B[re],B[Q],B[j]);let pe=[],Z,Ve=oe.concat();for(let re=0,ee=k;re<ee;re++){let Q=A[re];Z=[];for(let j=0,me=Q.length,ae=me-1,ge=j+1;j<me;j++,ae++,ge++)ae===me&&(ae=0),ge===me&&(ge=0),Z[j]=G(Q[j],Q[ae],Q[ge]);pe.push(Z),Ve=Ve.concat(Z)}let Ze;if(p===0)Ze=Ys.triangulateShape(B,A);else{let re=[],ee=[];for(let Q=0;Q<p;Q++){let j=Q/p,me=f*Math.cos(j*Math.PI/2),ae=g*Math.sin(j*Math.PI/2)+v;for(let ge=0,et=B.length;ge<et;ge++){let Je=H(B[ge],oe[ge],ae);ze(Je.x,Je.y,-me),j===0&&re.push(Je)}for(let ge=0,et=k;ge<et;ge++){let Je=A[ge];Z=pe[ge];let P=[];for(let M=0,O=Je.length;M<O;M++){let q=H(Je[M],Z[M],ae);ze(q.x,q.y,-me),j===0&&P.push(q)}j===0&&ee.push(P)}}Ze=Ys.triangulateShape(re,ee)}let dt=Ze.length,Qe=g+v;for(let re=0;re<K;re++){let ee=d?H(b[re],Ve[re],Qe):b[re];y?(C.copy(T.normals[0]).multiplyScalar(ee.x),w.copy(T.binormals[0]).multiplyScalar(ee.y),I.copy(_[0]).add(C).add(w),ze(I.x,I.y,I.z)):ze(ee.x,ee.y,0)}for(let re=1;re<=l;re++)for(let ee=0;ee<K;ee++){let Q=d?H(b[ee],Ve[ee],Qe):b[ee];y?(C.copy(T.normals[re]).multiplyScalar(Q.x),w.copy(T.binormals[re]).multiplyScalar(Q.y),I.copy(_[re]).add(C).add(w),ze(I.x,I.y,I.z)):ze(Q.x,Q.y,u/l*re)}for(let re=p-1;re>=0;re--){let ee=re/p,Q=f*Math.cos(ee*Math.PI/2),j=g*Math.sin(ee*Math.PI/2)+v;for(let me=0,ae=B.length;me<ae;me++){let ge=H(B[me],oe[me],j);ze(ge.x,ge.y,u+Q)}for(let me=0,ae=A.length;me<ae;me++){let ge=A[me];Z=pe[me];for(let et=0,Je=ge.length;et<Je;et++){let P=H(ge[et],Z[et],j);y?ze(P.x,P.y+_[l-1].y,_[l-1].x+Q):ze(P.x,P.y,u+Q)}}}J(),ne();function J(){let re=s.length/3;if(d){let ee=0,Q=K*ee;for(let j=0;j<dt;j++){let me=Ze[j];Pe(me[2]+Q,me[1]+Q,me[0]+Q)}ee=l+p*2,Q=K*ee;for(let j=0;j<dt;j++){let me=Ze[j];Pe(me[0]+Q,me[1]+Q,me[2]+Q)}}else{for(let ee=0;ee<dt;ee++){let Q=Ze[ee];Pe(Q[2],Q[1],Q[0])}for(let ee=0;ee<dt;ee++){let Q=Ze[ee];Pe(Q[0]+K*l,Q[1]+K*l,Q[2]+K*l)}}n.addGroup(re,s.length/3-re,0)}function ne(){let re=s.length/3,ee=0;Ee(B,ee),ee+=B.length;for(let Q=0,j=A.length;Q<j;Q++){let me=A[Q];Ee(me,ee),ee+=me.length}n.addGroup(re,s.length/3-re,1)}function Ee(re,ee){let Q=re.length;for(;--Q>=0;){let j=Q,me=Q-1;me<0&&(me=re.length-1);for(let ae=0,ge=l+p*2;ae<ge;ae++){let et=K*ae,Je=K*(ae+1),P=ee+j+et,M=ee+me+et,O=ee+me+Je,q=ee+j+Je;ft(P,M,O,q)}}}function ze(re,ee,Q){h.push(re),h.push(ee),h.push(Q)}function Pe(re,ee,Q){Lt(re),Lt(ee),Lt(Q);let j=s.length/3,me=x.generateTopUV(n,s,j-3,j-2,j-1);D(me[0]),D(me[1]),D(me[2])}function ft(re,ee,Q,j){Lt(re),Lt(ee),Lt(j),Lt(ee),Lt(Q),Lt(j);let me=s.length/3,ae=x.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);D(ae[0]),D(ae[1]),D(ae[3]),D(ae[1]),D(ae[2]),D(ae[3])}function Lt(re){s.push(h[re*3+0]),s.push(h[re*3+1]),s.push(h[re*3+2])}function D(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ou[s.type]().fromJSON(s)),new i(n,e.options)}},Kg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],h=e[n*3+1],c=e[s*3],l=e[s*3+1];return[new ue(r,o),new ue(a,h),new ue(c,l)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],h=e[t*3+2],c=e[n*3],l=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-l)<Math.abs(o-c)?[new ue(o,1-h),new ue(c,1-u),new ue(d,1-g),new ue(v,1-m)]:[new ue(a,1-h),new ue(l,1-u),new ue(f,1-g),new ue(p,1-m)]}};function jg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fi=class i extends oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tr=class i extends oa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cn=class i extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),h=Math.floor(s),c=a+1,l=h+1,u=e/a,d=t/h,f=[],g=[],v=[],p=[];for(let m=0;m<l;m++){let x=m*d-o;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-x,0),v.push(0,0,1),p.push(_/a),p.push(1-m/h)}}for(let m=0;m<h;m++)for(let x=0;x<a;x++){let _=x+c*m,y=x+c*(m+1),T=x+1+c*(m+1),w=x+1+c*m;f.push(_,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ga=class i extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],h=[],c=[],l=[],u=e,d=(t-e)/s,f=new R,g=new ue;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),h.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,l.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let x=m+p,_=x,y=x+n+1,T=x+n+2,w=x+1;a.push(_,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ii=class i extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(o+a,Math.PI),c=0,l=[],u=new R,d=new R,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let x=[],_=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&h===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let w=T/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(w+y,1-_),x.push(c++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let _=l[m][x+1],y=l[m][x],T=l[m+1][x],w=l[m+1][x+1];(m!==0||o>0)&&f.push(_,y,w),(m!==n-1||h<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var va=class i extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],h=[],c=[],l=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),d.subVectors(u,l).normalize(),h.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(v,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var nr=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xa=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$l=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ir=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jl=class extends ir{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,a=2*t-n;break;case Nu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Uu:o=e,h=2*n-t;break;case Nu:o=1,h=n+s[1]-s[0];break;default:o=e-1,h=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(h-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,c=h-a,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,x=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let T=0;T!==a;++T)r[T]=m*o[l+T]+x*o[c+T]+_*o[h+T]+y*o[u+T];return r}},Kl=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,c=h-a,l=(n-t)/(s-t),u=1-l;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[h+d]*l;return r}},jl=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cl(t,this.TimeBufferType),this.values=Cl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cl(e.times,Array),values:Cl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,h),e=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,h,o),e=!1;break}o=h}if(s!==void 0&&Qg(s))for(let a=0,h=s.length;a!==h;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1,o=1;for(let a=1;a<r;++a){let h=!1,c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(s)h=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){h=!0;break}}}if(h){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,h=o*n,c=0;c!==n;++c)t[h+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Ul;var Cs=class extends ii{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Jo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};Ql.prototype.ValueTypeName="color";var ec=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};ec.prototype.ValueTypeName="number";var tc=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-t)/(s-t),c=e*a;for(let l=c+a;c!==l;c+=4)Rt.slerpFlat(r,0,o,c-a,o,c,h);return r}},ya=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends ii{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Jo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}};nc.prototype.ValueTypeName="vector";var ic=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return h?h(l):l},this.setURLModifier=function(l){return h=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},nm=new ic,sc=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Is=class extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Iu=new Ke,rp=new R,op=new R,rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),Iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ap=new Ke,Xo=new R,Lu=new R,Gu=class extends rc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xo),Lu.copy(n.position),Lu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lu),n.updateMatrixWorld(),s.makeTranslation(-Xo.x,-Xo.y,-Xo.z),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap,n.coordinateSystem,n.reversedDepth)}},si=class extends no{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_a=class extends ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,h=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wu=class extends rc{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ud="\\[\\]\\.:\\/",ev=new RegExp("["+ud+"]","g"),dd="[^"+ud+"]",tv="[^"+ud.replace("\\.","")+"]",nv=/((?:WC+[\/:])*)/.source.replace("WC",dd),iv=/(WCOD+)?/.source.replace("WCOD",tv),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),ov=new RegExp("^"+nv+iv+sv+rv+"$"),av=["material","materials","bones","map"],Xu=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(e){let t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let h=n(a.children);if(h)return h}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Xu;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jM=new Float32Array(1);var lp=new Ke,ba=class{constructor(e,t,n=0,s=1/0){this.ray=new ti(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(e,t=!0,n=[]){return qu(e,this,n,t),n.sort(cp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qu(e[s],this,n,t);return n.sort(cp),n}};function cp(i,e){return i.distance-e.distance}function qu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)qu(r[o],e,t,!0)}}function fd(i,e,t,n){let s=lv(n);switch(t){case id:return i*e;case ao:return i*e/s.components*s.byteLength;case Mc:return i*e/s.components*s.byteLength;case rd:return i*e*2/s.components*s.byteLength;case Sc:return i*e*2/s.components*s.byteLength;case sd:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Ec:return i*e*4/s.components*s.byteLength;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Rc:return Math.max(i,16)*Math.max(e,8)/4;case wc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lv(i){switch(i){case ri:case Qu:return{byteLength:1,components:1};case so:case ed:case Di:return{byteLength:2,components:1};case _c:case bc:return{byteLength:2,components:4};case ki:case yc:case Li:return{byteLength:4,components:1};case td:case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mv(i){let e=new WeakMap;function t(a,h){let c=a.array,l=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,c,l),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,h,c){let l=h.array,u=h.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=e.get(a);h&&(i.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,h),c.version=a.version}}return{get:s,remove:r,update:o}}var gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vv=`#ifdef USE_ALPHAHASH
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
#endif`,xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mv=`#ifdef USE_AOMAP
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
#endif`,Sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ev=`#ifdef USE_BATCHING
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
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
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
#endif`,Pv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ov=`#define PI 3.141592653589793
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
} // validated`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,px=`struct PhysicalMaterial {
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
}`,mx=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,Ey=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Uy=`#define MATCAP
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,Hy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Gy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,$y=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:gv,alphahash_pars_fragment:vv,alphamap_fragment:xv,alphamap_pars_fragment:yv,alphatest_fragment:_v,alphatest_pars_fragment:bv,aomap_fragment:Mv,aomap_pars_fragment:Sv,batching_pars_vertex:Ev,batching_vertex:wv,begin_vertex:Tv,beginnormal_vertex:Av,bsdfs:Rv,iridescence_fragment:Cv,bumpmap_pars_fragment:Pv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Lv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Uv,color_fragment:Nv,color_pars_fragment:Fv,color_pars_vertex:zv,color_vertex:Bv,common:Ov,cube_uv_reflection_fragment:kv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Gv,emissivemap_fragment:Wv,emissivemap_pars_fragment:Xv,colorspace_fragment:qv,colorspace_pars_fragment:Yv,envmap_fragment:$v,envmap_common_pars_fragment:Zv,envmap_pars_fragment:Jv,envmap_pars_vertex:Kv,envmap_physical_pars_fragment:lx,envmap_vertex:jv,fog_vertex:Qv,fog_pars_vertex:ex,fog_fragment:tx,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:sx,lights_lambert_fragment:rx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:hx,lights_phong_fragment:ux,lights_phong_pars_fragment:dx,lights_physical_fragment:fx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:vx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:bx,map_fragment:Mx,map_pars_fragment:Sx,map_particle_fragment:Ex,map_particle_pars_fragment:wx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Ax,morphinstance_vertex:Rx,morphcolor_vertex:Cx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Ux,normal_pars_fragment:Nx,normal_pars_vertex:Fx,normal_vertex:zx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Vx,opaque_fragment:Gx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:dy,uv_vertex:fy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:vy,backgroundCube_frag:xy,cube_vert:yy,cube_frag:_y,depth_vert:by,depth_frag:My,distanceRGBA_vert:Sy,distanceRGBA_frag:Ey,equirect_vert:wy,equirect_frag:Ty,linedashed_vert:Ay,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Uy,meshnormal_vert:Ny,meshnormal_frag:Fy,meshphong_vert:zy,meshphong_frag:By,meshphysical_vert:Oy,meshphysical_frag:ky,meshtoon_vert:Hy,meshtoon_frag:Vy,points_vert:Gy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:$y},ye={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hi={basic:{uniforms:In([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:In([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new se(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:In([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:In([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:In([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new se(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:In([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:In([ye.points,ye.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:In([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:In([ye.common,ye.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:In([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:In([ye.sprite,ye.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:In([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:In([ye.lights,ye.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var th={r:0,b:0,g:0},hr=new An,Zy=new Ke;function Jy(i,e,t,n,s,r,o){let a=new se(0),h=r===!0?0:1,c,l,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1,T=g(_);T===null?m(a,h):T&&T.isColor&&(m(T,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,y){let T=g(y);T&&(T.isCubeTexture||T.mapping===Ma)?(l===void 0&&(l=new nt(new zn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:cr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),hr.copy(y.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),l.material.uniforms.envMap.value=T,l.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(hr)),l.material.toneMapped=gt.getTransfer(T.colorSpace)!==Et,(u!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new nt(new Cn(2,2),new Qt({name:"BackgroundMaterial",uniforms:cr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(T.colorSpace)!==Et,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(th,cd(i)),n.buffers.color.setClear(th.r,th.g,th.b,y,o)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),h=y,m(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,m(a,h)},render:v,addToRenderList:p,dispose:x}}function Ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,A,L,U,k){let B=!1,H=u(U,L,A);r!==H&&(r=H,c(r.object)),B=f(b,U,L,k),B&&g(b,U,L,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(b,A,L,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function h(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function l(b){return i.deleteVertexArray(b)}function u(b,A,L){let U=L.wireframe===!0,k=n[b.id];k===void 0&&(k={},n[b.id]=k);let B=k[A.id];B===void 0&&(B={},k[A.id]=B);let H=B[U];return H===void 0&&(H=d(h()),B[U]=H),H}function d(b){let A=[],L=[],U=[];for(let k=0;k<t;k++)A[k]=0,L[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,A,L,U){let k=r.attributes,B=A.attributes,H=0,K=L.getAttributes();for(let G in K)if(K[G].location>=0){let pe=k[G],Z=B[G];if(Z===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),pe===void 0||pe.attribute!==Z||Z&&pe.data!==Z.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(b,A,L,U){let k={},B=A.attributes,H=0,K=L.getAttributes();for(let G in K)if(K[G].location>=0){let pe=B[G];pe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));let Z={};Z.attribute=pe,pe&&pe.data&&(Z.data=pe.data),k[G]=Z,H++}r.attributes=k,r.attributesNum=H,r.index=U}function v(){let b=r.newAttributes;for(let A=0,L=b.length;A<L;A++)b[A]=0}function p(b){m(b,0)}function m(b,A){let L=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;L[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),k[b]!==A&&(i.vertexAttribDivisor(b,A),k[b]=A)}function x(){let b=r.newAttributes,A=r.enabledAttributes;for(let L=0,U=A.length;L<U;L++)A[L]!==b[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function _(b,A,L,U,k,B,H){H===!0?i.vertexAttribIPointer(b,A,L,k,B):i.vertexAttribPointer(b,A,L,U,k,B)}function y(b,A,L,U){v();let k=U.attributes,B=L.getAttributes(),H=A.defaultAttributeValues;for(let K in B){let G=B[K];if(G.location>=0){let oe=k[K];if(oe===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){let pe=oe.normalized,Z=oe.itemSize,Ve=e.get(oe);if(Ve===void 0)continue;let Ze=Ve.buffer,dt=Ve.type,Qe=Ve.bytesPerElement,J=dt===i.INT||dt===i.UNSIGNED_INT||oe.gpuType===yc;if(oe.isInterleavedBufferAttribute){let ne=oe.data,Ee=ne.stride,ze=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)m(G.location+Pe,ne.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)p(G.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Pe=0;Pe<G.locationSize;Pe++)_(G.location+Pe,Z/G.locationSize,dt,pe,Ee*Qe,(ze+Z/G.locationSize*Pe)*Qe,J)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne,oe.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ne=0;ne<G.locationSize;ne++)_(G.location+ne,Z/G.locationSize,dt,pe,Z*Qe,Z/G.locationSize*ne*Qe,J)}}else if(H!==void 0){let pe=H[K];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(G.location,pe);break;case 3:i.vertexAttrib3fv(G.location,pe);break;case 4:i.vertexAttrib4fv(G.location,pe);break;default:i.vertexAttrib1fv(G.location,pe)}}}}x()}function T(){I();for(let b in n){let A=n[b];for(let L in A){let U=A[L];for(let k in U)l(U[k].object),delete U[k];delete A[L]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let A=n[b.id];for(let L in A){let U=A[L];for(let k in U)l(U[k].object),delete U[k];delete A[L]}delete n[b.id]}function C(b){for(let A in n){let L=n[A];if(L[b.id]===void 0)continue;let U=L[b.id];for(let k in U)l(U[k].object),delete U[k];delete L[b.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function jy(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];t.update(f,n,1)}function h(c,l,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,l,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=l[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Qy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ri&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Li&&!I)}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",l=h(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:w}}function e_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new $e,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?l(null):c();else{let x=r?0:n,_=x*4,y=m.clippingState||null;h.value=y,y=l(g,d,_,f);for(let T=0;T!==_;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=h.value,g!==!0||p===null){let m=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}h.value=p,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function t_(i){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=rr:a===vc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===vc)if(e.has(o)){let h=e.get(o).texture;return t(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let c=new Bl(h.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var co=4,im=[.125,.215,.35,.446,.526,.582],fr=20,pd=new _a,sm=new se,md=null,gd=0,vd=0,xd=!1,dr=(1+Math.sqrt(5))/2,lo=1/dr,rm=[new R(-dr,lo,0),new R(dr,lo,0),new R(-lo,0,dr),new R(lo,0,dr),new R(0,dr,-lo),new R(0,dr,lo),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],n_=new R,sh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=n_}=r;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,a),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),this._renderer.xr.enabled=xd,e.scissorTest=!1,nh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Di,format:Pn,colorSpace:Js,depthBuffer:!1},s=om(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(r)),this._blurMaterial=s_(r,e,t)}return s}_compileMaterial(e){let t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,pd)}_sceneToCubeUV(e,t,n,s,r){let h=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(sm),u.toneMapping=ls,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Rn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),p=new nt(new zn,v),m=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,m=!0):(v.color.copy(sm),m=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(h.up.set(0,c[_],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+l[_],r.y,r.z)):y===1?(h.up.set(0,0,c[_]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+l[_],r.z)):(h.up.set(0,c[_],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+l[_]));let T=this._cubeSize;nh(s,y*T,_>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(p,h),u.render(e,h)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let h=this._cubeSize;nh(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,pd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rm[(s-r-1)%rm.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new nt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fr-1),v=r/g,p=isFinite(r)?1+Math.floor(l*v):fr;p>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);let m=[],x=0;for(let C=0;C<fr;++C){let I=C/v,S=Math.exp(-I*I/2);m.push(S),C===0?x+=S:C<p&&(x+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],T=3*y*(s>_-co?s-_+co:0),w=4*(this._cubeSize-y);nh(t,T,w,3*y,2*y),h.setRenderTarget(t),h.render(u,pd)}};function i_(i){let e=[],t=[],n=[],s=i,r=i-co+1+im.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let h=1/a;o>i-co?h=im[o-i+co-1]:o===0&&(h=0),n.push(h);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,v=3,p=2,m=1,x=new Float32Array(v*g*f),_=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,I=w>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(S,v*g*w),_.set(d,p*g*w);let b=[w,w,w,w,w,w];y.set(b,m*g*w)}let T=new it;T.setAttribute("position",new Ot(x,v)),T.setAttribute("uv",new Ot(_,p)),T.setAttribute("faceIndex",new Ot(y,m)),e.push(T),s>co&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function om(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nh(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function s_(i,e,t){let n=new Float32Array(fr),s=new R(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function am(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function lm(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function r_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let h=a.mapping,c=h===gc||h===vc,l=h===rr||h===or;if(c||l){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||l&&f&&s(f)?(t===null&&(t=new sh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let h=0,c=6;for(let l=0;l<c;l++)a[l]!==void 0&&h++;return h===c}function r(a){let h=a.target;h.removeEventListener("dispose",r);let c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function o_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function a_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function h(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){let T=x[_+0],w=x[_+1],C=x[_+2];d.push(T,w,w,C,C,T)}}else if(g!==void 0){let x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let T=_+0,w=_+1,C=_+2;d.push(T,w,w,C,C,T)}}else return;let p=new(ld(d)?na:ta)(d,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function l(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:l}}function l_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function h(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function l(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x]*v[x];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function c_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function h_(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,h){let c=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*u),C=new ea(w,y,T,u);C.type=Li,C.needsUpdate=!0;let I=_*4;for(let b=0;b<u;b++){let A=p[b],L=m[b],U=x[b],k=y*T*4*b;for(let B=0;B<A.count;B++){let H=B*I;f===!0&&(s.fromBufferAttribute(A,B),w[k+H+0]=s.x,w[k+H+1]=s.y,w[k+H+2]=s.z,w[k+H+3]=0),g===!0&&(s.fromBufferAttribute(L,B),w[k+H+4]=s.x,w[k+H+5]=s.y,w[k+H+6]=s.z,w[k+H+7]=0),v===!0&&(s.fromBufferAttribute(U,B),w[k+H+8]=s.x,w[k+H+9]=s.y,w[k+H+10]=s.z,w[k+H+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ue(y,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function u_(i,e,t,n){let s=new WeakMap;function r(h){let c=n.render.frame,l=h.geometry,u=e.get(h,l);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==c&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(h){let c=h.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Am=new Fn,cm=new js(1,1),Rm=new ea,Cm=new $r,Pm=new ia,hm=[],um=[],dm=new Float32Array(16),fm=new Float32Array(9),pm=new Float32Array(4);function fo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hm[s];if(r===void 0&&(r=new Float32Array(s),hm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rh(i,e){let t=um[e];t===void 0&&(t=new Int32Array(e),um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;pm.set(n),i.uniformMatrix2fv(this.addr,!1,pm),pn(t,n)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;fm.set(n),i.uniformMatrix3fv(this.addr,!1,fm),pn(t,n)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;dm.set(n),i.uniformMatrix4fv(this.addr,!1,dm),pn(t,n)}}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cm.compareFunction=od,r=cm):r=Am,t.setTexture2D(e||r,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cm,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pm,s)}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rm,s)}function I_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return __;case 35668:case 35672:return b_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return E_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function L_(i,e){i.uniform1fv(this.addr,e)}function D_(i,e){let t=fo(e,this.size,2);i.uniform2fv(this.addr,t)}function U_(i,e){let t=fo(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){let t=fo(e,this.size,4);i.uniform4fv(this.addr,t)}function F_(i,e){let t=fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z_(i,e){let t=fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B_(i,e){let t=fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O_(i,e){i.uniform1iv(this.addr,e)}function k_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function V_(i,e){i.uniform4iv(this.addr,e)}function G_(i,e){i.uniform1uiv(this.addr,e)}function W_(i,e){i.uniform2uiv(this.addr,e)}function X_(i,e){i.uniform3uiv(this.addr,e)}function q_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Am,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pm,r[o])}function J_(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rm,r[o])}function K_(i){switch(i){case 5126:return L_;case 35664:return D_;case 35665:return U_;case 35666:return N_;case 35674:return F_;case 35675:return z_;case 35676:return B_;case 5124:case 35670:return O_;case 35667:case 35671:return k_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}var _d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yd=/(\w+)(\])?(\[|\.)?/g;function mm(i,e){i.seq.push(e),i.map[e.id]=e}function j_(i,e,t){let n=i.name,s=n.length;for(yd.lastIndex=0;;){let r=yd.exec(n),o=yd.lastIndex,a=r[1],h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===s){mm(t,c===void 0?new _d(a,i,e):new bd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Md(a),mm(t,u)),t=u}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);j_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Q_=37297,eb=0;function tb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vm=new $e;function nb(i){gt._getMatrix(vm,gt.workingColorSpace,i);let e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ko:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tb(i.getShaderSource(e),a)}else return r}function ib(i,e){let t=nb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sb(i,e){let t;switch(e){case Lp:t="Linear";break;case Dp:t="Reinhard";break;case Up:t="Cineon";break;case io:t="ACESFilmic";break;case Fp:t="AgX";break;case zp:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ih=new R;function rb(){gt.getLuminanceCoefficients(ih);let i=ih.x.toFixed(4),e=ih.y.toFixed(4),t=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function ab(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ra(i){return i!==""}function ym(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(i){return i.replace(cb,ub)}var hb=new Map;function ub(i,e){let t=st[e];if(t===void 0){let n=hb.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}var db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(i){return i.replace(db,fb)}function fb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function vb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Pp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function xb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,h=pb(t),c=mb(t),l=gb(t),u=vb(t),d=xb(t),f=ob(t),g=ab(r),v=s.createProgram(),p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(p=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?st.tonemapping_pars_fragment:"",t.toneMapping!==ls?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Sd(o),o=ym(o,t),o=_m(o,t),a=Sd(a),a=ym(a,t),a=_m(a,t),o=bm(o),a=bm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ar?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ar?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+p+o,y=x+m+a,T=gm(s,s.VERTEX_SHADER,_),w=gm(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(w)||"",B=L.trim(),H=U.trim(),K=k.trim(),G=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{let pe=xm(s,T,"vertex"),Z=xm(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+pe+`
`+Z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||K==="")&&(oe=!1);oe&&(A.diagnostics={runnable:G,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(T),s.deleteShader(w),I=new ho(s,v),S=lb(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Q_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}var _b=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wd(e),t.set(e,n)),n}},wd=class{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}};function bb(i,e,t,n,s,r,o){let a=new Zr,h=new Ed,c=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,A,L,U){let k=L.fog,B=U.geometry,H=S.isMeshStandardMaterial?L.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),G=K&&K.mapping===Ma?K.image.height:null,oe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let pe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Z=pe!==void 0?pe.length:0,Ve=0;B.morphAttributes.position!==void 0&&(Ve=1),B.morphAttributes.normal!==void 0&&(Ve=2),B.morphAttributes.color!==void 0&&(Ve=3);let Ze,dt,Qe,J;if(oe){let bt=Hi[oe];Ze=bt.vertexShader,dt=bt.fragmentShader}else Ze=S.vertexShader,dt=S.fragmentShader,h.update(S),Qe=h.getVertexShaderID(S),J=h.getFragmentShaderID(S);let ne=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Pe=U.isBatchedMesh===!0,ft=!!S.map,Lt=!!S.matcap,D=!!K,re=!!S.aoMap,ee=!!S.lightMap,Q=!!S.bumpMap,j=!!S.normalMap,me=!!S.displacementMap,ae=!!S.emissiveMap,ge=!!S.metalnessMap,et=!!S.roughnessMap,Je=S.anisotropy>0,P=S.clearcoat>0,M=S.dispersion>0,O=S.iridescence>0,q=S.sheen>0,ie=S.transmission>0,$=Je&&!!S.anisotropyMap,Ne=P&&!!S.clearcoatMap,fe=P&&!!S.clearcoatNormalMap,Ie=P&&!!S.clearcoatRoughnessMap,Le=O&&!!S.iridescenceMap,le=O&&!!S.iridescenceThicknessMap,Se=q&&!!S.sheenColorMap,We=q&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,_e=!!S.specularColorMap,rt=!!S.specularIntensityMap,N=ie&&!!S.transmissionMap,de=ie&&!!S.thicknessMap,ve=!!S.gradientMap,Re=!!S.alphaMap,ce=S.alphaTest>0,te=!!S.alphaHash,De=!!S.extensions,tt=ls;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Dt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:dt,defines:S.defines,customVertexShaderID:Qe,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:ft,matcap:Lt,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:G,aoMap:re,lightMap:ee,bumpMap:Q,normalMap:j,displacementMap:d&&me,emissiveMap:ae,normalMapObjectSpace:j&&S.normalMapType===Hp,normalMapTangentSpace:j&&S.normalMapType===Qc,metalnessMap:ge,roughnessMap:et,anisotropy:Je,anisotropyMap:$,clearcoat:P,clearcoatMap:Ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ie,dispersion:M,iridescence:O,iridescenceMap:Le,iridescenceThicknessMap:le,sheen:q,sheenColorMap:Se,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:_e,specularIntensityMap:rt,transmission:ie,transmissionMap:N,thicknessMap:de,gradientMap:ve,opaque:S.transparent===!1&&S.blending===$s&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:ce,alphaHash:te,combine:S.combine,mapUv:ft&&v(S.map.channel),aoMapUv:re&&v(S.aoMap.channel),lightMapUv:ee&&v(S.lightMap.channel),bumpMapUv:Q&&v(S.bumpMap.channel),normalMapUv:j&&v(S.normalMap.channel),displacementMapUv:me&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:ge&&v(S.metalnessMap.channel),roughnessMapUv:et&&v(S.roughnessMap.channel),anisotropyMapUv:$&&v(S.anisotropyMap.channel),clearcoatMapUv:Ne&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(S.sheenRoughnessMap.channel),specularMapUv:Fe&&v(S.specularMap.channel),specularColorMapUv:_e&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:Re&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(j||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ft||Re),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ft&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jt,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)b.push(A),b.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=g[S.type],A;if(b){let L=Hi[b];A=eh.clone(L.uniforms)}else A=S.uniforms;return A}function T(S,b){let A;for(let L=0,U=l.length;L<U;L++){let k=l[L];if(k.cacheKey===b){A=k,++A.usedTimes;break}}return A===void 0&&(A=new yb(i,b,S,r),l.push(A)),A}function w(S){if(--S.usedTimes===0){let b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function C(S){h.remove(S)}function I(){h.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:I}}function Mb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Em(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,g,v,p){let m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function h(u,d,f,g,v,p){let m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Sb),n.length>1&&n.sort(d||Sm),s.length>1&&s.sort(d||Sm)}function l(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:l,sort:c}}function Eb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Em,i.set(n,[o])):s>=r.length?(o=new Em,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new se};break;case"SpotLight":t={position:new R,direction:new R,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ab=0;function Rb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cb(i){let e=new wb,t=Tb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Ke,o=new Ke;function a(c){let l=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,x=0,_=0,y=0,T=0,w=0,C=0;c.sort(Rb);for(let S=0,b=c.length;S<b;S++){let A=c[S],L=A.color,U=A.intensity,k=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)l+=L.r*U,u+=L.g*U,d+=L.b*U;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],U);C++}else if(A.isDirectionalLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=A.shadow.matrix,x++}n.directional[f]=H,f++}else if(A.isSpotLight){let H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(L).multiplyScalar(U),H.distance=k,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[v]=H;let K=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,K.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[v]=K.matrix,A.castShadow){let G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=B,y++}v++}else if(A.isRectAreaLight){let H=e.get(A);H.color.copy(L).multiplyScalar(U),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=H,p++}else if(A.isPointLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let K=A.shadow,G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=H,g++}else if(A.isHemisphereLight){let H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(U),H.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=C,n.version=Ab++)}function h(c,l){let u=0,d=0,f=0,g=0,v=0,p=l.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:h,state:n}}function wm(i){let e=new Cb(i),t=[],n=[];function s(l){c.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function o(l){n.push(l)}function a(){e.setup(t)}function h(l){e.setupView(t,l)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function Pb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wm(i),e.set(s,[a])):r>=o.length?(a=new wm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Db(i,e,t){let n=new As,s=new ue,r=new ue,o=new ct,a=new $l({depthPacking:kp}),h=new Zl,c={},l=t.maxTextureSize,u={[ns]:Mn,[Mn]:ns,[jt]:jt},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Ib,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new it;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(w,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(as),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==Oi&&this.type===Oi,k=m===Oi&&this.type!==Oi;for(let B=0,H=w.length;B<H;B++){let K=w[B],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let oe=G.getFrameExtents();if(s.multiply(oe),r.copy(G.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||U===!0||k===!0){let Z=this.type!==Oi?{minFilter:Gn,magFilter:Gn}:{};G.map!==null&&G.map.dispose(),G.map=new dn(s.x,s.y,Z),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pe=G.getViewportCount();for(let Z=0;Z<pe;Z++){let Ve=G.getViewport(Z);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),L.viewport(o),G.updateMatrices(K,Z),n=G.getFrustum(),y(C,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Oi&&x(G,I),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,b,A)};function x(w,C){let I=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,I,f,v,null)}function _(w,C,I,S){let b=null,A=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)b=A;else if(b=I.isPointLight===!0?h:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=b.uuid,U=C.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let B=k[U];B===void 0&&(B=b.clone(),k[U]=B,C.addEventListener("dispose",T)),b=B}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Oi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=i.properties.get(b);L.light=I}return b}function y(w,C,I,S,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let U=e.update(w),k=w.material;if(Array.isArray(k)){let B=U.groups;for(let H=0,K=B.length;H<K;H++){let G=B[H],oe=k[G.materialIndex];if(oe&&oe.visible){let pe=_(w,oe,S,b);w.onBeforeShadow(i,w,C,I,U,pe,G),i.renderBufferDirect(I,null,U,pe,w,G),w.onAfterShadow(i,w,C,I,U,pe,G)}}}else if(k.visible){let B=_(w,k,S,b);w.onBeforeShadow(i,w,C,I,U,B,null),i.renderBufferDirect(I,null,U,B,w,null),w.onAfterShadow(i,w,C,I,U,B,null)}}let L=w.children;for(let U=0,k=L.length;U<k;U++)y(L[U],C,I,S,b)}function T(w){w.target.removeEventListener("dispose",T);for(let I in c){let S=c[I],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Ub={[lc]:cc,[hc]:fc,[uc]:pc,[Zs]:dc,[cc]:lc,[fc]:hc,[pc]:uc,[dc]:Zs};function Nb(i,e){function t(){let N=!1,de=new ct,ve=null,Re=new ct(0,0,0,0);return{setMask:function(ce){ve!==ce&&!N&&(i.colorMask(ce,ce,ce,ce),ve=ce)},setLocked:function(ce){N=ce},setClear:function(ce,te,De,tt,Dt){Dt===!0&&(ce*=tt,te*=tt,De*=tt),de.set(ce,te,De,tt),Re.equals(de)===!1&&(i.clearColor(ce,te,De,tt),Re.copy(de))},reset:function(){N=!1,ve=null,Re.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,ve=null,Re=null,ce=null;return{setReversed:function(te){if(de!==te){let De=e.get("EXT_clip_control");te?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),de=te;let tt=ce;ce=null,this.setClear(tt)}},getReversed:function(){return de},setTest:function(te){te?ne(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(te){ve!==te&&!N&&(i.depthMask(te),ve=te)},setFunc:function(te){if(de&&(te=Ub[te]),Re!==te){switch(te){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=te}},setLocked:function(te){N=te},setClear:function(te){ce!==te&&(de&&(te=1-te),i.clearDepth(te),ce=te)},reset:function(){N=!1,ve=null,Re=null,ce=null,de=!1}}}function s(){let N=!1,de=null,ve=null,Re=null,ce=null,te=null,De=null,tt=null,Dt=null;return{setTest:function(bt){N||(bt?ne(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(bt){de!==bt&&!N&&(i.stencilMask(bt),de=bt)},setFunc:function(bt,$i,zi){(ve!==bt||Re!==$i||ce!==zi)&&(i.stencilFunc(bt,$i,zi),ve=bt,Re=$i,ce=zi)},setOp:function(bt,$i,zi){(te!==bt||De!==$i||tt!==zi)&&(i.stencilOp(bt,$i,zi),te=bt,De=$i,tt=zi)},setLocked:function(bt){N=bt},setClear:function(bt){Dt!==bt&&(i.clearStencil(bt),Dt=bt)},reset:function(){N=!1,de=null,ve=null,Re=null,ce=null,te=null,De=null,tt=null,Dt=null}}}let r=new t,o=new n,a=new s,h=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,x=null,_=null,y=null,T=null,w=null,C=new se(0,0,0),I=0,S=!1,b=null,A=null,L=null,U=null,k=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=K>=2);let oe=null,pe={},Z=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Ze=new ct().fromArray(Z),dt=new ct().fromArray(Ve);function Qe(N,de,ve,Re){let ce=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ve;De++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(de+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return te}let J={};J[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Zs),Q(!1),j(Yu),ne(i.CULL_FACE),re(as);function ne(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function Ee(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function ze(N,de){return u[N]!==de?(i.bindFramebuffer(N,de),u[N]=de,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Pe(N,de){let ve=f,Re=!1;if(N){ve=d.get(de),ve===void 0&&(ve=[],d.set(de,ve));let ce=N.textures;if(ve.length!==ce.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let te=0,De=ce.length;te<De;te++)ve[te]=i.COLOR_ATTACHMENT0+te;ve.length=ce.length,Re=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ve)}function ft(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Lt={[ws]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[pp]:i.FUNC_REVERSE_SUBTRACT};Lt[mp]=i.MIN,Lt[gp]=i.MAX;let D={[vp]:i.ZERO,[xp]:i.ONE,[yp]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[wp]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[bp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[Ep]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function re(N,de,ve,Re,ce,te,De,tt,Dt,bt){if(N===as){v===!0&&(Ee(i.BLEND),v=!1);return}if(v===!1&&(ne(i.BLEND),v=!0),N!==dp){if(N!==p||bt!==S){if((m!==ws||y!==ws)&&(i.blendEquation(i.FUNC_ADD),m=ws,y=ws),bt)switch(N){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ku:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ju:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ku:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,_=null,T=null,w=null,C.set(0,0,0),I=0,p=N,S=bt}return}ce=ce||de,te=te||ve,De=De||Re,(de!==m||ce!==y)&&(i.blendEquationSeparate(Lt[de],Lt[ce]),m=de,y=ce),(ve!==x||Re!==_||te!==T||De!==w)&&(i.blendFuncSeparate(D[ve],D[Re],D[te],D[De]),x=ve,_=Re,T=te,w=De),(tt.equals(C)===!1||Dt!==I)&&(i.blendColor(tt.r,tt.g,tt.b,Dt),C.copy(tt),I=Dt),p=N,S=!1}function ee(N,de){N.side===jt?Ee(i.CULL_FACE):ne(i.CULL_FACE);let ve=N.side===Mn;de&&(ve=!ve),Q(ve),N.blending===$s&&N.transparent===!1?re(as):re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Re=N.stencilWrite;a.setTest(Re),Re&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function j(N){N!==hp?(ne(i.CULL_FACE),N!==A&&(N===Yu?i.cullFace(i.BACK):N===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),A=N}function me(N){N!==L&&(H&&i.lineWidth(N),L=N)}function ae(N,de,ve){N?(ne(i.POLYGON_OFFSET_FILL),(U!==de||k!==ve)&&(i.polygonOffset(de,ve),U=de,k=ve)):Ee(i.POLYGON_OFFSET_FILL)}function ge(N){N?ne(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function et(N){N===void 0&&(N=i.TEXTURE0+B-1),oe!==N&&(i.activeTexture(N),oe=N)}function Je(N,de,ve){ve===void 0&&(oe===null?ve=i.TEXTURE0+B-1:ve=oe);let Re=pe[ve];Re===void 0&&(Re={type:void 0,texture:void 0},pe[ve]=Re),(Re.type!==N||Re.texture!==de)&&(oe!==ve&&(i.activeTexture(ve),oe=ve),i.bindTexture(N,de||J[N]),Re.type=N,Re.texture=de)}function P(){let N=pe[oe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(N){Ze.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function We(N){dt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),dt.copy(N))}function Fe(N,de){let ve=c.get(de);ve===void 0&&(ve=new WeakMap,c.set(de,ve));let Re=ve.get(N);Re===void 0&&(Re=i.getUniformBlockIndex(de,N.name),ve.set(N,Re))}function _e(N,de){let Re=c.get(de).get(N);h.get(de)!==Re&&(i.uniformBlockBinding(de,Re,N.__bindingPointIndex),h.set(de,Re))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},oe=null,pe={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,x=null,_=null,y=null,T=null,w=null,C=new se(0,0,0),I=0,S=!1,b=null,A=null,L=null,U=null,k=null,Ze.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Ee,bindFramebuffer:ze,drawBuffers:Pe,useProgram:ft,setBlending:re,setMaterial:ee,setFlipSided:Q,setCullFace:j,setLineWidth:me,setPolygonOffset:ae,setScissorTest:ge,activeTexture:et,bindTexture:Je,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:Le,texImage3D:le,updateUBOMapping:Fe,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Ie,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:$,compressedTexSubImage3D:Ne,scissor:Se,viewport:We,reset:rt}}function Fb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):Qo("canvas")}function v(P,M,O){let q=1,ie=Je(P);if((ie.width>O||ie.height>O)&&(q=O/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let $=Math.floor(q*ie.width),Ne=Math.floor(q*ie.height);u===void 0&&(u=g($,Ne));let fe=M?g($,Ne):u;return fe.width=$,fe.height=Ne,fe.getContext("2d").drawImage(P,0,0,$,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+Ne+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,M,O,q,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=M;if(M===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),M===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),M===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let Ne=ie?Ko:gt.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Ne===Et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(P,M){let O;return P?M===null||M===ki||M===ro?O=i.DEPTH24_STENCIL8:M===Li?O=i.DEPTH32F_STENCIL8:M===so&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===ro?O=i.DEPTH_COMPONENT24:M===Li?O=i.DEPTH_COMPONENT32F:M===so&&(O=i.DEPTH_COMPONENT16),O}function T(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gn&&P.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){let M=P.target;M.removeEventListener("dispose",w),I(M),M.isVideoTexture&&l.delete(M)}function C(P){let M=P.target;M.removeEventListener("dispose",C),b(M)}function I(P){let M=n.get(P);if(M.__webglInit===void 0)return;let O=P.source,q=d.get(O);if(q){let ie=q[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(P),Object.keys(q).length===0&&d.delete(O)}n.remove(P)}function S(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let O=P.source,q=d.get(O);delete q[M.__cacheKey],o.memory.textures--}function b(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ie=0;ie<M.__webglFramebuffer[q].length;ie++)i.deleteFramebuffer(M.__webglFramebuffer[q][ie]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=P.textures;for(let q=0,ie=O.length;q<ie;q++){let $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(P)}let A=0;function L(){A=0}function U(){let P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function k(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function B(P,M){let O=n.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){let q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,P,M);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function H(P,M){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){J(O,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function K(P,M){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){J(O,P,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function G(P,M){let O=n.get(P);if(P.version>0&&O.__version!==P.version){ne(O,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let oe={[Gr]:i.REPEAT,[Es]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},pe={[Gn]:i.NEAREST,[Bp]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[xc]:i.LINEAR_MIPMAP_NEAREST,[Ls]:i.LINEAR_MIPMAP_LINEAR},Z={[Vp]:i.NEVER,[$p]:i.ALWAYS,[Gp]:i.LESS,[od]:i.LEQUAL,[Wp]:i.EQUAL,[Yp]:i.GEQUAL,[Xp]:i.GREATER,[qp]:i.NOTEQUAL};function Ve(P,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===xc||M.magFilter===Sa||M.magFilter===Ls||M.minFilter===un||M.minFilter===xc||M.minFilter===Sa||M.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,oe[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==Sa&&M.minFilter!==Ls||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(P,M){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));let q=M.source,ie=d.get(q);ie===void 0&&(ie={},d.set(q,ie));let $=k(M);if($!==P.__cacheKey){ie[$]===void 0&&(ie[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[$].usedTimes++;let Ne=ie[P.__cacheKey];Ne!==void 0&&(ie[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&S(M)),P.__cacheKey=$,P.__webglTexture=ie[$].texture}return O}function dt(P,M,O){return Math.floor(Math.floor(P/O)/M)}function Qe(P,M,O,q){let $=P.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,O,q,M.data);else{$.sort((le,Se)=>le.start-Se.start);let Ne=0;for(let le=1;le<$.length;le++){let Se=$[Ne],We=$[le],Fe=Se.start+Se.count,_e=dt(We.start,M.width,4),rt=dt(Se.start,M.width,4);We.start<=Fe+1&&_e===rt&&dt(We.start+We.count-1,M.width,4)===_e?Se.count=Math.max(Se.count,We.start+We.count-Se.start):(++Ne,$[Ne]=We)}$.length=Ne+1;let fe=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let le=0,Se=$.length;le<Se;le++){let We=$[le],Fe=Math.floor(We.start/4),_e=Math.ceil(We.count/4),rt=Fe%M.width,N=Math.floor(Fe/M.width),de=_e,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,rt,N,de,ve,O,q,M.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function J(P,M,O){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let ie=Ze(P,M),$=M.source;t.bindTexture(q,P.__webglTexture,i.TEXTURE0+O);let Ne=n.get($);if($.version!==Ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);let fe=gt.getPrimaries(gt.workingColorSpace),Ie=M.colorSpace===cs?null:gt.getPrimaries(M.colorSpace),Le=M.colorSpace===cs||fe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let le=v(M.image,!1,s.maxTextureSize);le=et(M,le);let Se=r.convert(M.format,M.colorSpace),We=r.convert(M.type),Fe=_(M.internalFormat,Se,We,M.colorSpace,M.isVideoTexture);Ve(q,M);let _e,rt=M.mipmaps,N=M.isVideoTexture!==!0,de=Ne.__version===void 0||ie===!0,ve=$.dataReady,Re=T(M,le);if(M.isDepthTexture)Fe=y(M.format===oo,M.type),de&&(N?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,Se,We,null));else if(M.isDataTexture)if(rt.length>0){N&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,rt[0].width,rt[0].height);for(let ce=0,te=rt.length;ce<te;ce++)_e=rt[ce],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,_e.width,_e.height,Se,We,_e.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,_e.width,_e.height,0,Se,We,_e.data);M.generateMipmaps=!1}else N?(de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,le.width,le.height),ve&&Qe(M,le,Se,We)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,Se,We,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,rt[0].width,rt[0].height,le.depth);for(let ce=0,te=rt.length;ce<te;ce++)if(_e=rt[ce],M.format!==Pn)if(Se!==null)if(N){if(ve)if(M.layerUpdates.size>0){let De=fd(_e.width,_e.height,M.format,M.type);for(let tt of M.layerUpdates){let Dt=_e.data.subarray(tt*De/_e.data.BYTES_PER_ELEMENT,(tt+1)*De/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,tt,_e.width,_e.height,1,Se,Dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,le.depth,Se,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,le.depth,Se,We,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,_e.width,_e.height,le.depth,0,Se,We,_e.data)}else{N&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,rt[0].width,rt[0].height);for(let ce=0,te=rt.length;ce<te;ce++)_e=rt[ce],M.format!==Pn?Se!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,_e.width,_e.height,Se,We,_e.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,_e.width,_e.height,0,Se,We,_e.data)}else if(M.isDataArrayTexture)if(N){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,le.width,le.height,le.depth),ve)if(M.layerUpdates.size>0){let ce=fd(le.width,le.height,M.format,M.type);for(let te of M.layerUpdates){let De=le.data.subarray(te*ce/le.data.BYTES_PER_ELEMENT,(te+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,Se,We,De)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,We,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,Se,We,le.data);else if(M.isData3DTexture)N?(de&&t.texStorage3D(i.TEXTURE_3D,Re,Fe,le.width,le.height,le.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,We,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,Se,We,le.data);else if(M.isFramebufferTexture){if(de)if(N)t.texStorage2D(i.TEXTURE_2D,Re,Fe,le.width,le.height);else{let ce=le.width,te=le.height;for(let De=0;De<Re;De++)t.texImage2D(i.TEXTURE_2D,De,Fe,ce,te,0,Se,We,null),ce>>=1,te>>=1}}else if(rt.length>0){if(N&&de){let ce=Je(rt[0]);t.texStorage2D(i.TEXTURE_2D,Re,Fe,ce.width,ce.height)}for(let ce=0,te=rt.length;ce<te;ce++)_e=rt[ce],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Se,We,_e):t.texImage2D(i.TEXTURE_2D,ce,Fe,Se,We,_e);M.generateMipmaps=!1}else if(N){if(de){let ce=Je(le);t.texStorage2D(i.TEXTURE_2D,Re,Fe,ce.width,ce.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,We,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Se,We,le);p(M)&&m(q),Ne.__version=$.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,O){if(M.image.length!==6)return;let q=Ze(P,M),ie=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+O);let $=n.get(ie);if(ie.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+O);let Ne=gt.getPrimaries(gt.workingColorSpace),fe=M.colorSpace===cs?null:gt.getPrimaries(M.colorSpace),Ie=M.colorSpace===cs||Ne===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Le=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!Le&&!le?Se[te]=v(M.image[te],!0,s.maxCubemapSize):Se[te]=le?M.image[te].image:M.image[te],Se[te]=et(M,Se[te]);let We=Se[0],Fe=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),rt=_(M.internalFormat,Fe,_e,M.colorSpace),N=M.isVideoTexture!==!0,de=$.__version===void 0||q===!0,ve=ie.dataReady,Re=T(M,We);Ve(i.TEXTURE_CUBE_MAP,M);let ce;if(Le){N&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,We.width,We.height);for(let te=0;te<6;te++){ce=Se[te].mipmaps;for(let De=0;De<ce.length;De++){let tt=ce[De];M.format!==Pn?Fe!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,0,0,tt.width,tt.height,Fe,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,rt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,0,0,tt.width,tt.height,Fe,_e,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,rt,tt.width,tt.height,0,Fe,_e,tt.data)}}}else{if(ce=M.mipmaps,N&&de){ce.length>0&&Re++;let te=Je(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,te.width,te.height)}for(let te=0;te<6;te++)if(le){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Fe,_e,Se[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Se[te].width,Se[te].height,0,Fe,_e,Se[te].data);for(let De=0;De<ce.length;De++){let Dt=ce[De].image[te].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,0,0,Dt.width,Dt.height,Fe,_e,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,rt,Dt.width,Dt.height,0,Fe,_e,Dt.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,_e,Se[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Fe,_e,Se[te]);for(let De=0;De<ce.length;De++){let tt=ce[De];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,0,0,Fe,_e,tt.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,rt,Fe,_e,tt.image[te])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),$.__version=ie.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ee(P,M,O,q,ie,$){let Ne=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),Ie=_(O.internalFormat,Ne,fe,O.colorSpace),Le=n.get(M),le=n.get(O);if(le.__renderTarget=M,!Le.__hasExternalTextures){let Se=Math.max(1,M.width>>$),We=Math.max(1,M.height>>$);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,Ie,Se,We,M.depth,0,Ne,fe,null):t.texImage2D(ie,$,Ie,Se,We,0,Ne,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ae(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ie,le.__webglTexture,0,me(M)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ie,le.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(P,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let q=M.depthTexture,ie=q&&q.isDepthTexture?q.type:null,$=y(M.stencilBuffer,ie),Ne=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=me(M);ae(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,$,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,P)}else{let q=M.textures;for(let ie=0;ie<q.length;ie++){let $=q[ie],Ne=r.convert($.format,$.colorSpace),fe=r.convert($.type),Ie=_($.internalFormat,Ne,fe,$.colorSpace),Le=me(M);O&&ae(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ie,M.width,M.height):ae(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);let ie=q.__webglTexture,$=me(M);if(M.depthTexture.format===Wr)ae(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===oo)ae(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ft(P){let M=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let q=P.texture.mipmaps;q&&q.length>0?Pe(M.__webglFramebuffer[0],P):Pe(M.__webglFramebuffer,P)}else if(O){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),ze(M.__webglDepthbuffer[q],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,$)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ze(M.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(P,M,O){let q=n.get(P);M!==void 0&&Ee(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ft(P)}function D(P){let M=P.texture,O=n.get(P),q=n.get(M);P.addEventListener("dispose",C);let ie=P.textures,$=P.isWebGLCubeRenderTarget===!0,Ne=ie.length>1;if(Ne||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)O.__webglFramebuffer[fe][Ie]=i.createFramebuffer()}else O.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)O.__webglFramebuffer[fe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let fe=0,Ie=ie.length;fe<Ie;fe++){let Le=n.get(ie[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ae(P)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){let Ie=ie[fe];O.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);let Le=r.convert(Ie.format,Ie.colorSpace),le=r.convert(Ie.type),Se=_(Ie.internalFormat,Le,le,Ie.colorSpace,P.isXRRenderTarget===!0),We=me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Se,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(O.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Ee(O.__webglFramebuffer[fe][Ie],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie);else Ee(O.__webglFramebuffer[fe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let fe=0,Ie=ie.length;fe<Ie;fe++){let Le=ie[fe],le=n.get(Le),Se=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),Ve(Se,Le),Ee(O.__webglFramebuffer,P,Le,i.COLOR_ATTACHMENT0+fe,Se,0),p(Le)&&m(Se)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),Ve(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Ee(O.__webglFramebuffer[Ie],P,M,i.COLOR_ATTACHMENT0,fe,Ie);else Ee(O.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,fe,0);p(M)&&m(fe),t.unbindTexture()}P.depthBuffer&&ft(P)}function re(P){let M=P.textures;for(let O=0,q=M.length;O<q;O++){let ie=M[O];if(p(ie)){let $=x(P),Ne=n.get(ie).__webglTexture;t.bindTexture($,Ne),m($),t.unbindTexture()}}}let ee=[],Q=[];function j(P){if(P.samples>0){if(ae(P)===!1){let M=P.textures,O=P.width,q=P.height,ie=i.COLOR_BUFFER_BIT,$=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(P),fe=M.length>1;if(fe)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);let Ie=P.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);let le=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,ie,i.NEAREST),h===!0&&(ee.length=0,Q.length=0,ee.push(i.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push($),Q.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);let le=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function me(P){return Math.min(s.maxSamples,P.samples)}function ae(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ge(P){let M=o.render.frame;l.get(P)!==M&&(l.set(P,M),P.update())}function et(P,M){let O=P.colorSpace,q=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Js&&O!==cs&&(gt.getTransfer(O)===Et?(q!==Pn||ie!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ae}function zb(i,e){function t(n,s=cs){let r,o=gt.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qu)return i.BYTE;if(n===ed)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===id)return i.ALPHA;if(n===sd)return i.RGB;if(n===Pn)return i.RGBA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===oo)return i.DEPTH_STENCIL;if(n===ao)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===rd)return i.RG;if(n===Sc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Ea||n===wa||n===Ta||n===Aa)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Tc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Pc)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===zc||n===Bc||n===Oc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===Jc||n===Kc||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:Bb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends is{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",h=1,c=null,l=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Td,m={},x=t.getContextAttributes(),_=null,y=null,T=[],w=[],C=new ue,I=null,S=new Wt;S.viewport=new ct;let b=new Wt;b.viewport=new ct;let A=[S,b],L=new oc,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=T[J];return ne===void 0&&(ne=new Jr,T[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=T[J];return ne===void 0&&(ne=new Jr,T[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=T[J];return ne===void 0&&(ne=new Jr,T[J]=ne),ne.getHandSpace()};function B(J){let ne=w.indexOf(J.inputSource);if(ne===-1)return;let Ee=T[ne];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let J=0;J<T.length;J++){let ne=w[J];ne!==null&&(w[J]=null,T[J].disconnect(ne))}U=null,k=null,p.reset();for(let J in m)delete m[J];e.setRenderTarget(_),f=null,d=null,u=null,s=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?oo:Wr,ze=x.stencil?ro:ki);let ft={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new dn(d.textureWidth,d.textureHeight,{format:Pn,type:ri,depthTexture:new js(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let ne=0;ne<J.removed.length;ne++){let Ee=J.removed[ne],ze=w.indexOf(Ee);ze>=0&&(w[ze]=null,T[ze].disconnect(Ee))}for(let ne=0;ne<J.added.length;ne++){let Ee=J.added[ne],ze=w.indexOf(Ee);if(ze===-1){for(let ft=0;ft<T.length;ft++)if(ft>=w.length){w.push(Ee),ze=ft;break}else if(w[ft]===null){w[ft]=Ee,ze=ft;break}if(ze===-1)break}let Pe=T[ze];Pe&&Pe.connect(Ee)}}let G=new R,oe=new R;function pe(J,ne,Ee){G.setFromMatrixPosition(ne.matrixWorld),oe.setFromMatrixPosition(Ee.matrixWorld);let ze=G.distanceTo(oe),Pe=ne.projectionMatrix.elements,ft=Ee.projectionMatrix.elements,Lt=Pe[14]/(Pe[10]-1),D=Pe[14]/(Pe[10]+1),re=(Pe[9]+1)/Pe[5],ee=(Pe[9]-1)/Pe[5],Q=(Pe[8]-1)/Pe[0],j=(ft[8]+1)/ft[0],me=Lt*Q,ae=Lt*j,ge=ze/(-Q+j),et=ge*-Q;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(et),J.translateZ(ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Je=Lt+ge,P=D+ge,M=me-et,O=ae+(ze-et),q=re*D/P*Je,ie=ee*D/P*Je;J.projectionMatrix.makePerspective(M,O,q,ie,Je,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,Ee=J.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),L.near=b.near=S.near=ne,L.far=b.far=S.far=Ee,(U!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,k=L.far),L.layers.mask=J.layers.mask|6,S.layers.mask=L.layers.mask&3,b.layers.mask=L.layers.mask&5;let ze=J.parent,Pe=L.cameras;Z(L,ze);for(let ft=0;ft<Pe.length;ft++)Z(Pe[ft],ze);Pe.length===2?pe(L,S,b):L.projectionMatrix.copy(S.projectionMatrix),Ve(J,L,ze)};function Ve(J,ne,Ee){Ee===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(J){h=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Ze=null;function dt(J,ne){if(l=ne.getViewerPose(c||o),g=ne,l!==null){let Ee=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ze=!1;Ee.length!==L.cameras.length&&(L.cameras.length=0,ze=!0);for(let D=0;D<Ee.length;D++){let re=Ee[D],ee=null;if(f!==null)ee=f.getViewport(re);else{let j=u.getViewSubImage(d,re);ee=j.viewport,D===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let Q=A[D];Q===void 0&&(Q=new Wt,Q.layers.enable(D),Q.viewport=new ct,A[D]=Q),Q.matrix.fromArray(re.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(re.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(L.matrix.copy(Q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ze===!0&&L.cameras.push(Q)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let D=u.getDepthInformation(Ee[0]);D&&D.isValid&&D.texture&&p.init(D,s.renderState)}if(Pe&&Pe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Ee.length;D++){let re=Ee[D].camera;if(re){let ee=m[re];ee||(ee=new ra,m[re]=ee);let Q=u.getCameraImage(re);ee.sourceTexture=Q}}}}for(let Ee=0;Ee<T.length;Ee++){let ze=w[Ee],Pe=T[Ee];ze!==null&&Pe!==void 0&&Pe.update(ze,ne,c||o)}Ze&&Ze(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Qe=new Tm;Qe.setAnimationLoop(dt),this.setAnimationLoop=function(J){Ze=J},this.dispose=function(){}}},ur=new An,kb=new Ke;function Hb(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),l(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?h(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m),_=x.envMap,y=x.envMapRotation;_&&(p.envMap.value=_,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(ur)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function h(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,_){let y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=s[x.id];y===void 0&&(g(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",p));let T=_.program;n.updateUBOMapping(x,T);let w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function l(x){let _=u();x.__bindingPointIndex=_;let y=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){let I=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,b=I.length;S<b;S++){let A=I[S];if(f(A,w,S,T)===!0){let L=A.__offset,U=Array.isArray(A.value)?A.value:[A.value],k=0;for(let B=0;B<U.length;B++){let H=U[B],K=v(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+k,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,y,T){let w=x.value,C=_+"_"+y;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{let I=T[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){let _=x.uniforms,y=0,T=16;for(let C=0,I=_.length;C<I;C++){let S=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,A=S.length;b<A;b++){let L=S[b],U=Array.isArray(L.value)?L.value:[L.value];for(let k=0,B=U.length;k<B;k++){let H=U[k],K=v(H),G=y%T,oe=G%K.boundary,pe=G+oe;y+=oe,pe!==0&&T-pe<K.storage&&(y+=T-pe),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=K.storage}}}let w=y%T;return w>0&&(y+=T-w),x.__size=y,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){let _=x.target;_.removeEventListener("dispose",p);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:h,update:c,dispose:m}}var uo=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,m=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Kt;let w=0,C=0,I=null,S=-1,b=null,A=new ct,L=new ct,U=null,k=new se(0),B=0,H=t.width,K=t.height,G=1,oe=null,pe=null,Z=new ct(0,0,H,K),Ve=new ct(0,0,H,K),Ze=!1,dt=new As,Qe=!1,J=!1,ne=new Ke,Ee=new R,ze=new ct,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Lt(){return I===null?G:1}let D=n;function re(E,F){return t.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){let F="webgl2";if(D=re(F,E),D===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,Q,j,me,ae,ge,et,Je,P,M,O,q,ie,$,Ne,fe,Ie,Le,le,Se,We,Fe,_e,rt;function N(){ee=new o_(D),ee.init(),Fe=new zb(D,ee),Q=new Qy(D,ee,e,Fe),j=new Nb(D,ee),Q.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),me=new c_(D),ae=new Mb,ge=new Fb(D,ee,j,ae,Q,Fe,me),et=new t_(y),Je=new r_(y),P=new mv(D),_e=new Ky(D,P),M=new a_(D,P,me,_e),O=new u_(D,M,P,me),le=new h_(D,Q,ge),fe=new e_(ae),q=new bb(y,et,Je,ee,Q,_e,fe),ie=new Hb(y,ae),$=new Eb,Ne=new Pb(ee),Le=new Jy(y,et,Je,j,O,f,h),Ie=new Db(y,O,Q),rt=new Vb(D,me,Q,j),Se=new jy(D,ee,me),We=new l_(D,ee,me),me.programs=q.programs,y.capabilities=Q,y.extensions=ee,y.properties=ae,y.renderLists=$,y.shadowMap=Ie,y.state=j,y.info=me}N();let de=new Ad(y,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,F,W=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=F,t.width=Math.floor(E*G),t.height=Math.floor(F*G),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*G,K*G).floor()},this.setDrawingBufferSize=function(E,F,W){H=E,K=F,G=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,F,W,X){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,F,W,X),j.viewport(A.copy(Z).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,F,W,X){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,F,W,X),j.scissor(L.copy(Ve).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){j.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let X=0;if(E){let z=!1;if(I!==null){let he=I.texture.format;z=he===Ec||he===Sc||he===Mc}if(z){let he=I.texture.type,be=he===ri||he===ki||he===so||he===ro||he===_c||he===bc,Ce=Le.getClearColor(),Ae=Le.getClearAlpha(),Ge=Ce.r,Xe=Ce.g,Oe=Ce.b;be?(g[0]=Ge,g[1]=Xe,g[2]=Oe,g[3]=Ae,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ge,v[1]=Xe,v[2]=Oe,v[3]=Ae,D.clearBufferiv(D.COLOR,0,v))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),$.dispose(),Ne.dispose(),ae.dispose(),et.dispose(),Je.dispose(),O.dispose(),_e.dispose(),rt.dispose(),q.dispose(),de.dispose(),de.removeEventListener("sessionstart",zi),de.removeEventListener("sessionend",Sf),ks.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=me.autoReset,F=Ie.enabled,W=Ie.autoUpdate,X=Ie.needsUpdate,z=Ie.type;N(),me.autoReset=E,Ie.enabled=F,Ie.autoUpdate=W,Ie.needsUpdate=X,Ie.type=z}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){let F=E.target;F.removeEventListener("dispose",te),De(F)}function De(E){tt(E),ae.remove(E)}function tt(E){let F=ae.get(E).programs;F!==void 0&&(F.forEach(function(W){q.releaseProgram(W)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,X,z,he){F===null&&(F=Pe);let be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=z0(E,F,W,X,z);j.setMaterial(X,be);let Ae=W.index,Ge=1;if(X.wireframe===!0){if(Ae=M.getWireframeAttribute(W),Ae===void 0)return;Ge=2}let Xe=W.drawRange,Oe=W.attributes.position,pt=Xe.start*Ge,At=(Xe.start+Xe.count)*Ge;he!==null&&(pt=Math.max(pt,he.start*Ge),At=Math.min(At,(he.start+he.count)*Ge)),Ae!==null?(pt=Math.max(pt,0),At=Math.min(At,Ae.count)):Oe!=null&&(pt=Math.max(pt,0),At=Math.min(At,Oe.count));let Jt=At-pt;if(Jt<0||Jt===1/0)return;_e.setup(z,X,Ce,W,Ae);let Nt,Pt=Se;if(Ae!==null&&(Nt=P.get(Ae),Pt=We,Pt.setIndex(Nt)),z.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*Lt()),Pt.setMode(D.LINES)):Pt.setMode(D.TRIANGLES);else if(z.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),j.setLineWidth(ke*Lt()),z.isLineSegments?Pt.setMode(D.LINES):z.isLineLoop?Pt.setMode(D.LINE_LOOP):Pt.setMode(D.LINE_STRIP)}else z.isPoints?Pt.setMode(D.POINTS):z.isSprite&&Pt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ke=z._multiDrawStarts,Vt=z._multiDrawCounts,xt=z._multiDrawCount,Kn=Ae?P.get(Ae).bytesPerElement:1,Tr=ae.get(X).currentProgram.getUniforms();for(let jn=0;jn<xt;jn++)Tr.setValue(D,"_gl_DrawID",jn),Pt.render(ke[jn]/Kn,Vt[jn])}else if(z.isInstancedMesh)Pt.renderInstances(pt,Jt,z.count);else if(W.isInstancedBufferGeometry){let ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Vt=Math.min(W.instanceCount,ke);Pt.renderInstances(pt,Jt,Vt)}else Pt.render(pt,Jt)};function Dt(E,F,W){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,el(E,F,W),E.side=ns,E.needsUpdate=!0,el(E,F,W),E.side=jt):el(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),m=Ne.get(W),m.init(F),_.push(m),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let he=z.material;if(he)if(Array.isArray(he))for(let be=0;be<he.length;be++){let Ce=he[be];Dt(Ce,W,z),X.add(Ce)}else Dt(he,W,z),X.add(he)}),m=_.pop(),X},this.compileAsync=function(E,F,W=null){let X=this.compile(E,F,W);return new Promise(z=>{function he(){if(X.forEach(function(be){ae.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){z(E);return}setTimeout(he,10)}ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let bt=null;function $i(E){bt&&bt(E)}function zi(){ks.stop()}function Sf(){ks.start()}let ks=new Tm;ks.setAnimationLoop($i),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(E){bt=E,de.setAnimationLoop(E),E===null?ks.stop():ks.start()},de.addEventListener("sessionstart",zi),de.addEventListener("sessionend",Sf),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,I),m=Ne.get(E,_.length),m.init(F),_.push(m),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),dt.setFromProjectionMatrix(ne,Ri,F.reversedDepth),J=this.localClippingEnabled,Qe=fe.init(this.clippingPlanes,J),p=$.get(E,x.length),p.init(),x.push(p),de.enabled===!0&&de.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&iu(he,F,-1/0,y.sortObjects)}iu(E,F,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(oe,pe),ft=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ft&&Le.addToRenderList(p,E),this.info.render.frame++,Qe===!0&&fe.beginShadows();let W=m.state.shadowsArray;Ie.render(W,E,F),Qe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,z=p.transmissive;if(m.setupLights(),F.isArrayCamera){let he=F.cameras;if(z.length>0)for(let be=0,Ce=he.length;be<Ce;be++){let Ae=he[be];wf(X,z,E,Ae)}ft&&Le.render(E);for(let be=0,Ce=he.length;be<Ce;be++){let Ae=he[be];Ef(p,E,Ae,Ae.viewport)}}else z.length>0&&wf(X,z,E,F),ft&&Le.render(E),Ef(p,E,F);I!==null&&C===0&&(ge.updateMultisampleRenderTarget(I),ge.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,F),_e.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],Qe===!0&&fe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function iu(E,F,W,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||dt.intersectsSprite(E)){X&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);let be=O.update(E),Ce=E.material;Ce.visible&&p.push(E,be,Ce,W,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||dt.intersectsObject(E))){let be=O.update(E),Ce=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ze.copy(be.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(ne)),Array.isArray(Ce)){let Ae=be.groups;for(let Ge=0,Xe=Ae.length;Ge<Xe;Ge++){let Oe=Ae[Ge],pt=Ce[Oe.materialIndex];pt&&pt.visible&&p.push(E,be,pt,W,ze.z,Oe)}}else Ce.visible&&p.push(E,be,Ce,W,ze.z,null)}}let he=E.children;for(let be=0,Ce=he.length;be<Ce;be++)iu(he[be],F,W,X)}function Ef(E,F,W,X){let z=E.opaque,he=E.transmissive,be=E.transparent;m.setupLightsView(W),Qe===!0&&fe.setGlobalState(y.clippingPlanes,W),X&&j.viewport(A.copy(X)),z.length>0&&Qa(z,F,W),he.length>0&&Qa(he,F,W),be.length>0&&Qa(be,F,W),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function wf(E,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Di:ri,minFilter:Ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let he=m.state.transmissionRenderTarget[X.id],be=X.viewport||A;he.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);let Ce=y.getRenderTarget(),Ae=y.getActiveCubeFace(),Ge=y.getActiveMipmapLevel();y.setRenderTarget(he),y.getClearColor(k),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),ft&&Le.render(W);let Xe=y.toneMapping;y.toneMapping=ls;let Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Qe===!0&&fe.setGlobalState(y.clippingPlanes,X),Qa(E,W,X),ge.updateMultisampleRenderTarget(he),ge.updateRenderTargetMipmap(he),ee.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let At=0,Jt=F.length;At<Jt;At++){let Nt=F[At],Pt=Nt.object,ke=Nt.geometry,Vt=Nt.material,xt=Nt.group;if(Vt.side===jt&&Pt.layers.test(X.layers)){let Kn=Vt.side;Vt.side=Mn,Vt.needsUpdate=!0,Tf(Pt,W,X,ke,Vt,xt),Vt.side=Kn,Vt.needsUpdate=!0,pt=!0}}pt===!0&&(ge.updateMultisampleRenderTarget(he),ge.updateRenderTargetMipmap(he))}y.setRenderTarget(Ce,Ae,Ge),y.setClearColor(k,B),Oe!==void 0&&(X.viewport=Oe),y.toneMapping=Xe}function Qa(E,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){let be=E[z],Ce=be.object,Ae=be.geometry,Ge=be.group,Xe=be.material;Xe.allowOverride===!0&&X!==null&&(Xe=X),Ce.layers.test(W.layers)&&Tf(Ce,F,W,Ae,Xe,Ge)}}function Tf(E,F,W,X,z,he){E.onBeforeRender(y,F,W,X,z,he),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,F,W,X,E,he),z.transparent===!0&&z.side===jt&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,y.renderBufferDirect(W,F,X,z,E,he),z.side=ns,z.needsUpdate=!0,y.renderBufferDirect(W,F,X,z,E,he),z.side=jt):y.renderBufferDirect(W,F,X,z,E,he),E.onAfterRender(y,F,W,X,z,he)}function el(E,F,W){F.isScene!==!0&&(F=Pe);let X=ae.get(E),z=m.state.lights,he=m.state.shadowsArray,be=z.state.version,Ce=q.getParameters(E,z.state,he,F,W),Ae=q.getProgramCacheKey(Ce),Ge=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?Je:et).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",te),Ge=new Map,X.programs=Ge);let Xe=Ge.get(Ae);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===be)return Rf(E,Ce),Xe}else Ce.uniforms=q.getUniforms(E),E.onBeforeCompile(Ce,y),Xe=q.acquireProgram(Ce,Ae),Ge.set(Ae,Xe),X.uniforms=Ce.uniforms;let Oe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),Rf(E,Ce),X.needsLights=O0(E),X.lightsStateVersion=be,X.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function Af(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=ho.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Rf(E,F){let W=ae.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function z0(E,F,W,X,z){F.isScene!==!0&&(F=Pe),ge.resetTextureUnits();let he=F.fog,be=X.isMeshStandardMaterial?F.environment:null,Ce=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Js,Ae=(X.isMeshStandardMaterial?Je:et).get(X.envMap||be),Ge=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,At=!!W.morphAttributes.color,Jt=ls;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Jt=y.toneMapping);let Nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pt=Nt!==void 0?Nt.length:0,ke=ae.get(X),Vt=m.state.lights;if(Qe===!0&&(J===!0||E!==b)){let Un=E===b&&X.id===S;fe.setState(X,E,Un)}let xt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vt.state.version||ke.outputColorSpace!==Ce||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isBatchedMesh&&ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==Ae||X.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Xe||ke.morphTargets!==Oe||ke.morphNormals!==pt||ke.morphColors!==At||ke.toneMapping!==Jt||ke.morphTargetsCount!==Pt)&&(xt=!0):(xt=!0,ke.__version=X.version);let Kn=ke.currentProgram;xt===!0&&(Kn=el(X,F,z));let Tr=!1,jn=!1,zo=!1,Gt=Kn.getUniforms(),ci=ke.uniforms;if(j.useProgram(Kn.program)&&(Tr=!0,jn=!0,zo=!0),X.id!==S&&(S=X.id,jn=!0),Tr||b!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Gt.setValue(D,"projectionMatrix",E.projectionMatrix),Gt.setValue(D,"viewMatrix",E.matrixWorldInverse);let Vn=Gt.map.cameraPosition;Vn!==void 0&&Vn.setValue(D,Ee.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&Gt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Gt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,jn=!0,zo=!0)}if(z.isSkinnedMesh){Gt.setOptional(D,z,"bindMatrix"),Gt.setOptional(D,z,"bindMatrixInverse");let Un=z.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Gt.setValue(D,"boneTexture",Un.boneTexture,ge))}z.isBatchedMesh&&(Gt.setOptional(D,z,"batchingTexture"),Gt.setValue(D,"batchingTexture",z._matricesTexture,ge),Gt.setOptional(D,z,"batchingIdTexture"),Gt.setValue(D,"batchingIdTexture",z._indirectTexture,ge),Gt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Gt.setValue(D,"batchingColorTexture",z._colorsTexture,ge));let hi=W.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&le.update(z,W,Kn),(jn||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,Gt.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ci.envMap.value=Ae,ci.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(ci.envMapIntensity.value=F.environmentIntensity),jn&&(Gt.setValue(D,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&B0(ci,zo),he&&X.fog===!0&&ie.refreshFogUniforms(ci,he),ie.refreshMaterialUniforms(ci,X,G,K,m.state.transmissionRenderTarget[E.id]),ho.upload(D,Af(ke),ci,ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ho.upload(D,Af(ke),ci,ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Gt.setValue(D,"center",z.center),Gt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Gt.setValue(D,"normalMatrix",z.normalMatrix),Gt.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Un=X.uniformsGroups;for(let Vn=0,su=Un.length;Vn<su;Vn++){let Hs=Un[Vn];rt.update(Hs,Kn),rt.bind(Hs,Kn)}}return Kn}function B0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function O0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,W){let X=ae.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=F,ae.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let W=ae.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};let k0=D.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){I=E,w=F,C=W;let X=!0,z=null,he=!1,be=!1;if(E){let Ae=ae.get(E);if(Ae.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)ge.setupRenderTarget(E);else if(Ae.__hasExternalTextures)ge.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Oe=E.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&ae.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);let Xe=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?z=Xe[F][W]:z=Xe[F],he=!0):E.samples>0&&ge.useMultisampledRTT(E)===!1?z=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?z=Xe[W]:z=Xe,A.copy(E.viewport),L.copy(E.scissor),U=E.scissorTest}else A.copy(Z).multiplyScalar(G).floor(),L.copy(Ve).multiplyScalar(G).floor(),U=Ze;if(W!==0&&(z=k0),j.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&j.drawBuffers(E,z),j.viewport(A),j.scissor(L),j.setScissorTest(U),he){let Ae=ae.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,W)}else if(be){let Ae=F;for(let Ge=0;Ge<E.textures.length;Ge++){let Xe=ae.get(E.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,W,Ae)}}else if(E!==null&&W!==0){let Ae=ae.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(E,F,W,X,z,he,be,Ce=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){j.bindFramebuffer(D.FRAMEBUFFER,Ae);try{let Ge=E.textures[Ce],Xe=Ge.format,Oe=Ge.type;if(!Q.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&W>=0&&W<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(F,W,X,z,Fe.convert(Xe),Fe.convert(Oe),he))}finally{let Ge=I!==null?ae.get(I).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,X,z,he,be,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(F>=0&&F<=E.width-X&&W>=0&&W<=E.height-z){j.bindFramebuffer(D.FRAMEBUFFER,Ae);let Ge=E.textures[Ce],Xe=Ge.format,Oe=Ge.type;if(!Q.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(F,W,X,z,Fe.convert(Xe),Fe.convert(Oe),0);let At=I!==null?ae.get(I).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,At);let Jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jp(D,Jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(pt),D.deleteSync(Jt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){let X=Math.pow(2,-W),z=Math.floor(E.image.width*X),he=Math.floor(E.image.height*X),be=F!==null?F.x:0,Ce=F!==null?F.y:0;ge.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,be,Ce,z,he),j.unbindTexture()};let H0=D.createFramebuffer(),V0=D.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,X=null,z=0,he=null){he===null&&(z!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let be,Ce,Ae,Ge,Xe,Oe,pt,At,Jt,Nt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(W!==null)be=W.max.x-W.min.x,Ce=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,Xe=W.min.y,Oe=W.isBox3?W.min.z:0;else{let hi=Math.pow(2,-z);be=Math.floor(Nt.width*hi),Ce=Math.floor(Nt.height*hi),E.isDataArrayTexture?Ae=Nt.depth:E.isData3DTexture?Ae=Math.floor(Nt.depth*hi):Ae=1,Ge=0,Xe=0,Oe=0}X!==null?(pt=X.x,At=X.y,Jt=X.z):(pt=0,At=0,Jt=0);let Pt=Fe.convert(F.format),ke=Fe.convert(F.type),Vt;F.isData3DTexture?(ge.setTexture3D(F,0),Vt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ge.setTexture2DArray(F,0),Vt=D.TEXTURE_2D_ARRAY):(ge.setTexture2D(F,0),Vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let xt=D.getParameter(D.UNPACK_ROW_LENGTH),Kn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tr=D.getParameter(D.UNPACK_SKIP_PIXELS),jn=D.getParameter(D.UNPACK_SKIP_ROWS),zo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);let Gt=E.isDataArrayTexture||E.isData3DTexture,ci=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let hi=ae.get(E),Un=ae.get(F),Vn=ae.get(hi.__renderTarget),su=ae.get(Un.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,Vn.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let Hs=0;Hs<Ae;Hs++)Gt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,z,Oe+Hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ae.get(F).__webglTexture,he,Jt+Hs)),D.blitFramebuffer(Ge,Xe,be,Ce,pt,At,be,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||ae.has(E)){let hi=ae.get(E),Un=ae.get(F);j.bindFramebuffer(D.READ_FRAMEBUFFER,H0),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,V0);for(let Vn=0;Vn<Ae;Vn++)Gt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hi.__webglTexture,z,Oe+Vn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hi.__webglTexture,z),ci?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Un.__webglTexture,he,Jt+Vn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Un.__webglTexture,he),z!==0?D.blitFramebuffer(Ge,Xe,be,Ce,pt,At,be,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):ci?D.copyTexSubImage3D(Vt,he,pt,At,Jt+Vn,Ge,Xe,be,Ce):D.copyTexSubImage2D(Vt,he,pt,At,Ge,Xe,be,Ce);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ci?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Vt,he,pt,At,Jt,be,Ce,Ae,Pt,ke,Nt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Vt,he,pt,At,Jt,be,Ce,Ae,Pt,Nt.data):D.texSubImage3D(Vt,he,pt,At,Jt,be,Ce,Ae,Pt,ke,Nt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,pt,At,be,Ce,Pt,ke,Nt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,pt,At,Nt.width,Nt.height,Pt,Nt.data):D.texSubImage2D(D.TEXTURE_2D,he,pt,At,be,Ce,Pt,ke,Nt);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tr),D.pixelStorei(D.UNPACK_SKIP_ROWS,jn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zo),he===0&&F.generateMipmaps&&D.generateMipmap(Vt),j.unbindTexture()},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&ge.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,j.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Gb=`
float cloudNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return texture(tNoise,(i+f+.5)/32.).r;}
float cloudDensity(vec3 p){
  float height=(p.y-620.)/240.;if(height<0.||height>1.)return 0.;
  vec3 q=(p+vec3(uTime*2.8,0.,uTime*.7))*.0028;
  float n=cloudNoise(q)*.63+cloudNoise(q*2.03)*.26+cloudNoise(q*4.13)*.11;
  float shape=smoothstep(0.,.2,height)*(1.-smoothstep(.62,1.,height));
  return max(0.,n-(.72-uCover*.32))*shape*1.8;
}`,Wb=`precision highp float;precision highp sampler3D;
  in vec2 vUv;out vec4 fragColor;
  uniform sampler3D tNoise;uniform vec2 uCenter;uniform float uSpan,uTime,uCover,uSunY,uStrength;
  uniform vec3 uSun;
  ${Gb}
  void main(){
    if(uSunY<.035||uStrength<=.001){fragColor=vec4(1.);return;}
    vec2 xz=uCenter+(vUv-.5)*uSpan;
    float start=620./uSunY,end=860./uSunY;
    float stepSize=(end-start)/16.;float opticalDepth=0.;
    for(int i=0;i<16;i++){
      vec3 p=vec3(xz.x,0.,xz.y)+uSun*(start+(float(i)+.5)*stepSize);
      opticalDepth+=cloudDensity(p)*stepSize*.018;
    }
    float transmittance=exp(-opticalDepth);
    fragColor=vec4(mix(1.,transmittance,uStrength));
  }`,Xb="in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Ca={high:{size:256,span:1200,interval:.16},medium:{size:192,span:1e3,interval:.24},low:{size:128,span:800,interval:.36}},oh=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.clouds=n,this.quality="high",this.lastRender=-1/0,this.lastTime=-1/0,this.center=new ue(1/0,1/0),this.sun=new R(0,1,0),this.materials=new Set,this.grassMaterials=new Set,this.wrapped=new WeakMap,this.target=new dn(1,1,{format:Pn,type:ri,minFilter:un,magFilter:un,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this.target.texture.name="Cloud shadow transmittance",this.uniforms={tCloudShadow:{value:this.target.texture},uCloudShadowCenter:{value:this.center},uCloudShadowSpan:{value:Ca.high.span},uCloudShadowSun:{value:this.sun},uCloudShadowStrength:{value:0}};let s=n?.material?.uniforms?.tNoise?.value;this.passMaterial=new nr({glslVersion:ar,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{tNoise:{value:s||null},uCenter:{value:new ue},uSpan:{value:Ca.high.span},uSun:{value:this.sun},uSunY:{value:1},uTime:{value:0},uCover:{value:.25},uStrength:{value:0}},vertexShader:Xb,fragmentShader:Wb}),this.passScene=new Pi,this.passCamera=new ss,this.quad=new nt(new Cn(2,2),this.passMaterial),this.quad.frustumCulled=!1,this.passScene.add(this.quad),this.resize(),t?.traverse?.(r=>{let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.isMeshStandardMaterial&&this.install(a)})}setQuality(e){!Ca[e]||e===this.quality||(this.quality=e,this.resize(),this.lastRender=-1/0)}resize(){let e=Ca[this.quality];this.target.setSize(e.size,e.size),this.uniforms.uCloudShadowSpan.value=e.span,this.passMaterial.uniforms.uSpan.value=e.span}install(e){if(!e?.isMeshStandardMaterial||this.wrapped.has(e))return e;this.wrapped.set(e,"standard"),this.materials.add(e),e.addEventListener("dispose",()=>this.materials.delete(e));let t=e.onBeforeCompile,n=e.customProgramCacheKey;return e.onBeforeCompile=(s,r)=>{t.call(e,s,r),Object.assign(s.uniforms,this.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCloudShadowWorld;`),s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vec4 cloudWorld=vec4(transformed,1.);
#ifdef USE_INSTANCING
cloudWorld=instanceMatrix*cloudWorld;
#endif
vCloudShadowWorld=(modelMatrix*cloudWorld).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
         varying vec3 vCloudShadowWorld;
         uniform sampler2D tCloudShadow;
         uniform vec2 uCloudShadowCenter;
         uniform float uCloudShadowSpan,uCloudShadowStrength;
         uniform vec3 uCloudShadowSun;
         float vallonCloudTransmittance(){
           vec2 p=vCloudShadowWorld.xz-uCloudShadowSun.xz*(vCloudShadowWorld.y/max(.035,uCloudShadowSun.y));
           vec2 uv=(p-uCloudShadowCenter)/uCloudShadowSpan+.5;
           float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
           return mix(1.,mix(1.,texture2D(tCloudShadow,uv).r,uCloudShadowStrength),inside);
         }`),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",st.lights_fragment_begin).replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
         directLight.color *= vallonCloudTransmittance();`)},e.customProgramCacheKey=()=>`${n.call(e)}-vallon-cloud-shadow`,e.needsUpdate=!0,e}installGrass(e){if(!e?.isShaderMaterial||this.wrapped.has(e))return e;this.wrapped.set(e,"grass"),this.grassMaterials.add(e),e.addEventListener("dispose",()=>this.grassMaterials.delete(e));let t=e.onBeforeCompile,n=e.customProgramCacheKey;return e.onBeforeCompile=(s,r)=>{t.call(e,s,r),Object.assign(s.uniforms,this.uniforms),s.fragmentShader=s.fragmentShader.replace("varying vec3 vTint, vWorld, vNormal;",`varying vec3 vTint, vWorld, vNormal;
         uniform sampler2D tCloudShadow;
         uniform vec2 uCloudShadowCenter;
         uniform float uCloudShadowSpan,uCloudShadowStrength;
         uniform vec3 uCloudShadowSun;
         float vallonGrassCloudTransmittance(){
           vec2 p=vWorld.xz-uCloudShadowSun.xz*(vWorld.y/max(.035,uCloudShadowSun.y));
           vec2 uv=(p-uCloudShadowCenter)/uCloudShadowSpan+.5;
           float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
           return mix(1.,mix(1.,texture2D(tCloudShadow,uv).r,uCloudShadowStrength),inside);
         }`),s.fragmentShader=s.fragmentShader.replace("float d = length(cameraPosition - vWorld);",`color *= .55 + .45 * vallonGrassCloudTransmittance();
    float d = length(cameraPosition - vWorld);`)},e.customProgramCacheKey=()=>`${n.call(e)}-vallon-cloud-shadow-grass`,e.needsUpdate=!0,e}update(e,t,n,s=!1){let r=n?.uniforms;if(!e||!r?.uSun||!r?.uCover)return!1;let o=Ca[this.quality],a=Number.isFinite(t)?t:0;if(!(!Number.isFinite(this.lastRender)||a-this.lastRender>=o.interval))return!1;this.sun.copy(r.uSun.value).normalize();let c=r.uDay?.value??1,l=s?0:at.clamp(c,0,1),u=o.span/o.size,d=Math.round(e.position.x/u)*u,f=Math.round(e.position.z/u)*u;this.center.set(d,f),this.uniforms.uCloudShadowStrength.value=l;let g=this.passMaterial.uniforms;return g.tNoise.value=this.clouds?.material?.uniforms?.tNoise?.value||g.tNoise.value,g.uCenter.value.set(d,f),g.uSpan.value=o.span,g.uSun.value.copy(this.sun),g.uSunY.value=this.sun.y,g.uTime.value=a,g.uCover.value=r.uCover.value,g.uStrength.value=l>0?1:0,this.renderPass(),this.lastTime=a,this.lastRender=a,!0}renderPass(){let e=this.renderer,t=e.getRenderTarget(),n=e.getViewport(new ct),s=e.getScissor(new ct),r=e.getScissorTest(),o=e.getClearColor(new se),a=e.getClearAlpha(),h=e.autoClear;try{e.setRenderTarget(this.target),e.setViewport(0,0,this.target.width,this.target.height),e.setScissorTest(!1),e.autoClear=!1,e.setClearColor(16777215,1),e.clear(!0,!1,!1),e.render(this.passScene,this.passCamera)}finally{e.setRenderTarget(t),e.setViewport(n),e.setScissor(s),e.setScissorTest(r),e.setClearColor(o,a),e.autoClear=h}}dispose(){this.target.dispose(),this.passMaterial.dispose(),this.quad.geometry.dispose(),this.materials.clear(),this.grassMaterials.clear()}};var ah=class{constructor(e,t,n,s=t){let r=s.spawn,o=null;for(let v=0;v<48;v++){let p=v*2.39996,m=r.x+Math.cos(p)*(42+v%4*9),x=r.z+Math.sin(p)*(42+v%4*9),_=s.sample(m,x),y=Math.abs(_.slope-.2)+(_.height<5?10:0);(!o||y<o.score)&&(o={x:m,z:x,score:y})}this.position=new R(o.x,t.height(o.x,o.z),o.z),this.group=new Ut,this.group.position.copy(this.position);let a=new yt({color:"#767b70",roughness:1,flatShading:!0}),h=new Rn({color:"#080f13"}),c=(v,p,m,x,_,y=1,T=1,w=1)=>{let C=new nt(v,p);return C.position.set(m,x,_),C.scale.set(y,T,w),C.castShadow=C.receiveShadow=!0,this.group.add(C),C},l=new fi(1,0);c(l,a,-2.4,1.4,0,1.8,2.7,2.3),c(l,a,2.4,1.6,0,1.9,3,2.4),c(l,a,0,4.1,0,3.3,1.6,2.5),c(new Cn(3.5,4),h,0,2,-.2);let u=document.createElement("canvas");u.width=512,u.height=128;let d=u.getContext("2d");d.fillStyle="#172421",d.fillRect(0,0,512,128),d.fillStyle="#eee7cd",d.font="32px sans-serif",d.textAlign="center",d.fillText("GROTTES \xB7 ENTR\xC9E",256,58),d.font="22px sans-serif",d.fillText("Charbon \u2192 cristaux \u2192 pierre profonde",256,99),c(new Cn(3.2,.8),new Rn({map:new rs(u),side:jt}),0,4.8,1),e.add(this.group),this.exit=new Ut,this.exit.position.set(n.field.spawn.x,n.field.floor(0,7),n.field.spawn.z+4);let f=new nt(new Cn(3,4),new Rn({color:"#b8d5db",side:jt}));f.position.y=2,this.exit.add(f);let g=new si("#ffe3ad",65,25,2);g.position.set(0,3,-2),this.exit.add(g),n.group.add(this.exit)}distance(e,t=!1){let n=t?this.exit.position:this.position;return Math.hypot(e.position.x-n.x,e.position.z-n.z)}dispose(){this.group.removeFromParent(),this.exit.removeFromParent();let e=new Set,t=new Set;for(let n of[this.group,this.exit])n.traverse(s=>{s.geometry&&e.add(s.geometry),s.material&&t.add(s.material)});for(let n of e)n.dispose();for(let n of t)n.map?.dispose(),n.dispose()}};var Cd=new Map,qb={wood:"#aa8257",stone:"#9ba6a1",clay:"#af7959",berries:"#c34f60",wool:"#e4dfca",meat:"#a96856",meal:"#c19b55",coal:"#48505a",copper:"#c18452",iron:"#b9c9d2",crystal:"#af91df",diamond:"#91d9d0"},po={hand:"M15 51 7 31 13 27 20 35 20 13 26 11 27 32 28 8 34 9 34 32 36 14 42 16 40 35 44 23 49 25 47 46 39 54Z",shovel:"M14 50 21 54 40 24 47 21 52 9 35 7 29 17 35 22Z",pick:"M16 54 23 55 40 25 35 20Z M8 19 19 10 32 8 46 12 56 29 42 20 30 17 15 21Z",sword:"M9 51 17 57 27 44 34 48 39 42 32 36 54 10 51 3 43 6 24 29 18 24 12 30 19 37Z",armor:"M20 7 28 14 36 14 44 7 58 21 49 32 44 28 45 54 19 54 20 28 15 32 6 21Z",wood:"M12 20 25 9 53 17 52 45 39 55 11 47Z",stone:"M7 39 16 15 38 9 56 28 49 50 25 55Z",clay:"M8 43 13 22 32 12 52 25 56 45 32 53Z",berries:"M9 28 19 21 28 29 24 43 13 44Z M28 34 39 27 51 35 47 49 33 51Z M23 17 34 9 44 18 40 31 28 32Z",wool:"M10 22 19 13 27 17 37 10 48 19 46 27 55 34 47 46 35 47 27 54 16 45 9 43 7 32Z",meat:"M7 36 13 17 30 9 49 17 54 34 44 49 25 51 13 44Z",meal:"M8 31 13 18 34 10 50 17 55 33 48 49 16 49Z",coal:"M8 41 12 24 28 10 48 16 56 36 46 51 23 54Z",copper:"M9 27 39 15 55 25 55 42 26 53 9 43Z",iron:"M9 27 39 15 55 25 55 42 26 53 9 43Z",crystal:"M11 41 18 20 24 19 27 6 36 9 41 26 48 18 55 41 36 56Z",diamond:"M6 25 19 11 45 11 58 25 32 55Z",torch:"M24 58 32 59 38 25 29 23Z M24 29 20 18 27 7 30 14 35 3 43 18 39 31Z",block:"M8 20 32 7 56 20 56 47 32 60 8 47Z",slab:"M8 35 32 23 56 35 56 46 32 58 8 46Z",stairs:"M8 45 8 32 25 32 25 20 42 20 42 8 55 8 55 50 31 59Z",roof:"M5 41 30 10 59 41 55 48 30 24 9 48Z",door:"M18 7 48 12 48 56 18 51Z",arch:"M9 55 9 27 20 11 44 11 55 27 55 55 44 55 44 30 37 21 27 21 20 30 20 55Z",fence:"M10 12 16 7 23 12 23 54 10 54Z M41 12 48 7 55 12 55 54 41 54Z M8 20 57 20 57 27 8 27Z M8 37 57 37 57 44 8 44Z",bench:"M8 27 54 27 56 36 51 39 51 54 44 54 44 40 20 40 20 54 13 54 13 38 8 36Z",table:"M5 21 32 8 58 21 58 30 50 32 50 54 44 54 44 35 20 35 20 54 14 54 14 32 5 30Z",lantern:"M21 8 43 8 43 15 49 20 47 51 17 51 15 20 21 15Z",forge:"M7 25 17 12 49 12 57 25 57 53 7 53Z",beacon:"M12 55 19 45 27 45 27 29 21 18 32 4 43 18 37 29 37 45 45 45 53 55Z"},Yb={wood:"M25 11v34l14 8M13 23l10 4m-10 9 10 3m21-14 6 2",stone:"m16 15 12 18-3 22m3-22 28-5m-28 5 10-24",berries:"m18 21 7-7 7 6m-8 12 7-8",meat:"M18 36c-9-18 17-27 24-12s-13 27-24 12Z",diamond:"m6 25 26 30 26-30H6m13-14 13 44 13-44",crystal:"m27 6 6 37 3 13m-18-36 15 23 15-25",block:"M8 20 32 34 56 20M32 34v26",torch:"m29 23 9 2m-10 6 9 2m-9 11 7 1"};function On(i,e=qb[i],t=2){e=/^#[0-9a-f]{6}$/i.test(e||"")?e:"#bbbdaf",i==="pick"&&(e={2:"#929f9c",3:"#b6c9d3",4:"#b396de"}[t]||e);let n=`${i}:${e}:${t}`;if(!Cd.has(n)){let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><pattern id="grain" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M1 2h3m1 4h2" stroke="#fff" stroke-opacity=".18"/><path d="M0 7h3m2-5h2" stroke="#000" stroke-opacity=".17"/></pattern><linearGradient id="shade" x2=".7" y2="1"><stop stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient></defs><path d="${po[i]||po.block}" fill="${e}" stroke="#1d2927" stroke-width="1.5" stroke-linejoin="round"/><path d="${po[i]||po.block}" fill="url(#shade)"/><path d="${po[i]||po.block}" fill="url(#grain)"/><path d="${Yb[i]||"M16 24l12 7 16-8m-16 8 2 16"}" fill="none" stroke="#e7e8d0" stroke-opacity=".4" stroke-width="1.5"/></svg>`;Cd.set(n,`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`)}return`<img class="item-icon" src="${Cd.get(n)}" alt="" aria-hidden="true" draggable="false">`}var _n={wood:["Bois","#aa8257","Construction, \xE9tabli et manches d\u2019outils."],stone:["Pierre","#9ba6a1","Construction, forge et am\xE9lioration de la pioche."],clay:["Terre","#af7959","Remblai, briques et construction."],berries:["Baies","#c34f60","Nourriture et apprivoisement. +8 sant\xE9, +25 endurance."],wool:["Laine","#e4dfca","Protection. Nourrissez les moutons pour en r\xE9colter."],meat:["Viande","#a96856","\xC0 cuire dans une forge pour pr\xE9parer des rations."],meal:["Ration","#c19b55","Repas pr\xE9par\xE9. +35 sant\xE9, +40 endurance."],coal:["Charbon","#48505a","Combustible pour la forge et les recettes."],copper:["Cuivre","#c18452","M\xE9taux, lanternes et phare."],iron:["Fer","#b9c9d2","Pioche, \xE9p\xE9e et armure."],crystal:["Cristal","#af91df","\xC9quipement avanc\xE9 et phare."],diamond:["Diamant","#91d9d0","Construction pr\xE9cieuse."],torch:["Torche","#ffb646","\xC9claire la main et les grottes. 7 \xE9quiper, F poser, E r\xE9cup\xE9rer."]};var lh={wood:1,coal:1};function Im(i){if(Object.entries(lh).some(([e,t])=>(i[e]||0)<t))return!1;for(let[e,t]of Object.entries(lh))i[e]-=t;return i.torch=(i.torch||0)+4,!0}var ch=class{constructor(e,t){this.scene=e,this.camera=t,this.placed=[],this.handle=new Bn(.065,.085,.7,5),this.flame=new os(.13,.34,5),this.wood=new yt({color:"#805233",flatShading:!0}),this.fire=new Rn({color:"#ffb646"}),this.held=this.model(),this.held.position.set(.34,-.34,-.62),t.add(this.held),this.lights=Array.from({length:6},()=>{let n=new si("#ffc16c",0,17,2);return e.add(n),n}),this.embers=new en(new tr(.022,0),new Rn({color:"#ffd787"}),56),this.embers.frustumCulled=!1,e.add(this.embers),this.dummy=new vt}model(){let e=new Ut,t=new nt(this.handle,this.wood),n=new nt(this.flame,this.fire);return t.position.y=.35,n.position.y=.82,e.add(t,n),e}clear(){for(let e of this.placed)this.scene.remove(e.mesh);this.placed=[]}restore(e=[]){this.clear();for(let t of e.slice(0,128))[t.x,t.y,t.z].every(Number.isFinite)&&this.add(t,!!t.cave)}add(e,t=!1){if(this.placed.length>=128)return!1;let n=this.model();return n.position.set(e.x,e.y,e.z),this.scene.add(n),this.placed.push({x:e.x,y:e.y,z:e.z,cave:t,mesh:n}),!0}remove(e){this.scene.remove(e.mesh),this.placed.splice(this.placed.indexOf(e),1)}target(e){return this.placed.find(t=>e.distanceToPoint(new R(t.x,t.y+.5,t.z))<.3&&e.origin.distanceTo(new R(t.x,t.y,t.z))<6)}serialize(){return this.placed.map(({x:e,y:t,z:n,cave:s})=>({x:e,y:t,z:n,cave:s}))}update(e,t,n,s){this.held.visible=t&&s;let r=this.placed.filter(h=>h.cave===n);for(let h of this.placed)h.mesh.visible=h.cave===n;r.sort((h,c)=>this.camera.position.distanceToSquared(h.mesh.position)-this.camera.position.distanceToSquared(c.mesh.position));let o=r.slice(0,t?5:6).map(h=>h.mesh.position.clone().add(new R(0,.85,0)));t&&s&&o.unshift(this.held.getWorldPosition(new R).add(new R(0,.5,0))),this.lights.forEach((h,c)=>{h.visible=!!o[c],o[c]&&(h.position.copy(o[c]),h.intensity=18*(.92+Math.sin(e*11+c)*.06+Math.sin(e*17)*.025))});let a=0;for(let h=0;h<o.length;h++)for(let c=0;c<8;c++){let l=(e*.65+c*.123+h*.17)%1;this.dummy.position.copy(o[h]).add(new R(Math.sin(c*7+e)*l*.14,l*.8,Math.cos(c*3+e)*l*.14)),this.dummy.scale.setScalar(1-l),this.dummy.updateMatrix(),this.embers.setMatrixAt(a++,this.dummy.matrix)}this.embers.count=a,this.embers.visible=s,this.embers.instanceMatrix.needsUpdate=!0}};var Dm=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),Lm=(i,e,t)=>{let n=Dm((t-i)/(e-i));return n*n*(3-2*n)},mo=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function Um(i){let e=(i%24+24)%24,t=Lm(4.7,7.5,e)*(1-Lm(16.7,19.8,e)),n=Math.exp(-(((e-6.1)/1.2)**2)),s=Math.exp(-(((e-18.1)/1.45)**2)),r=mo([.48,.63,1],[1,.97,.9],t);r=mo(r,[.64,.8,1],n*.6),r=mo(r,[1,.4,.12],s*.85);let o=mo([.035,.065,.115],[.43,.6,.76],t);return o=mo(o,[.35,.49,.65],n*.55),o=mo(o,[.6,.32,.18],s*.48),{hour:e,day:t,dawn:n,dusk:s,sun:r,fog:o,fogDensity:53e-5+(1-t)*65e-5+n*22e-5}}var hs={clear:{label:"Ciel clair",cover:.25,rain:0,fog:0,wind:.18},overcast:{label:"Ciel couvert",cover:.84,rain:0,fog:.22,wind:.45},rain:{label:"Pluie",cover:.94,rain:.65,fog:.5,wind:.65},storm:{label:"Orage",cover:1,rain:1,fog:.72,wind:1},mist:{label:"Brume",cover:.38,rain:0,fog:1,wind:.08}},Pa=class{constructor(e,t={}){this.seed=(Number(t.seed)||Number(e)||1427)>>>0,this.clock=Math.max(0,Number(t.clock)||0),this.type=hs[t.type]?t.type:"clear",this.age=Math.max(0,Number(t.age)||0),this.duration=Math.max(90,Number(t.duration)||210),this.values={...hs[this.type]};for(let n of["cover","rain","fog","wind"])Number.isFinite(t.values?.[n])&&(this.values[n]=Dm(t.values[n]));this.flash=0,this.lightningIn=Math.max(1,Number(t.lightningIn)||9),this.automatic=t.automatic!==!1}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}set(e){return hs[e]?(this.type=e,this.values.label=hs[e].label,this.age=0,this.duration=150+this.random()*210,!0):!1}update(e,t=!0){if(!t||!Number.isFinite(e)||e<=0)return this.values;if(e=Math.min(e,.12),this.clock+=e,this.age+=e,this.automatic&&this.age>=this.duration){let r=this.type==="clear"?["overcast","mist"]:this.type==="overcast"?["clear","rain","storm"]:this.type==="storm"?["rain","overcast"]:["clear","overcast"];this.set(r[Math.floor(this.random()*r.length)])}let n=hs[this.type],s=1-Math.exp(-e/6);for(let r of["cover","rain","fog","wind"])this.values[r]+=(n[r]-this.values[r])*s;return this.flash=Math.max(0,this.flash-e*4),this.type==="storm"&&this.values.rain>.5&&(this.lightningIn-=e,this.lightningIn<=0&&(this.flash=1,this.lightningIn=8+this.random()*14)),this.values}serialize(){return{seed:this.seed,clock:this.clock,type:this.type,age:this.age,duration:this.duration,values:{...this.values},lightningIn:this.lightningIn,automatic:this.automatic}}};var hh=class{constructor(e,t){this.hooks=e,this.fly=!1,this.noclip=!1,this.god=!1,this.xray=!1,this.markers=new en(new tr(.22,0),new Rn({depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}),640),this.markers.renderOrder=90,this.markers.frustumCulled=!1,this.markers.visible=!1,t.add(this.markers),this.dummy=new vt,this.lastScan="";let n=document.createElement("section");n.id="debug",n.className="dialog debug-dialog",n.hidden=!0,n.innerHTML=`<div class="eyebrow">ATELIER DE TEST \xB7 F3</div><h2>Explorer les syst\xE8mes</h2><p>Les commandes de triche d\xE9sactivent les nouveaux succ\xE8s dans cette sauvegarde.</p>
      <div class="debug-switches">${[["fly","Vol \xB7 Espace / Maj descendre"],["noclip","Traverser les obstacles"],["god","Invincibilit\xE9"],["xray","Voir les minerais \xE0 travers les murs"],["creative","Construction sans co\xFBt"]].map(([s,r])=>`<label><input type="checkbox" data-debug="${s}"> ${r}</label>`).join("")}</div>
      <div class="debug-row"><button id="debug-items">Tout l\u2019\xE9quipement + 64 ressources</button><button id="debug-reset">D\xE9sactiver les pouvoirs</button></div>
      <div id="debug-item-list"></div><label>Heure <input id="debug-hour" type="range" min="0" max="23.99" step=".1"></label>
      <label>M\xE9t\xE9o <select id="debug-weather"><option value="automatic">Automatique</option>${Object.entries(hs).map(([s,r])=>`<option value="${s}">${r.label}</option>`).join("")}</select></label>
      <div class="debug-row"><button data-teleport="panorama">Panorama</button><button data-teleport="cave">Grotte</button><button data-teleport="clouds">Dans les nuages</button></div>
      <output id="debug-metrics"></output><button class="primary" id="debug-close">Reprendre <span>\u2197</span></button>`,document.body.append(n),this.root=n,this.badge=document.createElement("div"),this.badge.className="debug-badge",document.body.append(this.badge);for(let s of n.querySelectorAll("[data-debug]"))s.onchange=()=>{let r=s.dataset.debug;s.checked&&e.cheat(),r==="creative"?e.creative(s.checked):this[r]=s.checked,r==="fly"&&!this.fly&&(this.noclip=!1,e.land(),n.querySelector('[data-debug="noclip"]').checked=!1),r==="noclip"&&this.noclip&&(this.fly=!0,n.querySelector('[data-debug="fly"]').checked=!0)};n.querySelector("#debug-items").onclick=()=>{e.cheat(),e.all(),this.refresh()};for(let s of e.items){let r=document.createElement("button");r.innerHTML=On(s)+`<span>${e.label(s)}</span>`,r.onclick=()=>{e.cheat(),e.grant(s),this.refresh()},n.querySelector("#debug-item-list").append(r)}n.querySelector("#debug-hour").oninput=s=>{e.cheat(),e.hour(Number(s.target.value))},n.querySelector("#debug-weather").onchange=s=>e.weather(s.target.value);for(let s of n.querySelectorAll("[data-teleport]"))s.onclick=()=>{e.cheat();let r=s.dataset.teleport;r==="clouds"&&(this.fly=!0,n.querySelector('[data-debug="fly"]').checked=!0),e.teleport(r),e.close()};n.querySelector("#debug-close").onclick=e.close,n.querySelector("#debug-reset").onclick=()=>this.reset()}reset(){let e=this.fly;this.fly=this.noclip=this.god=this.xray=!1,this.hooks.creative(!1),this.root.querySelectorAll("[data-debug]").forEach(t=>t.checked=!1),this.markers.visible=!1,e&&this.hooks.land(),this.refresh()}refresh(){let e=this.hooks.state();this.root.querySelector("#debug-hour").value=e.hour,this.root.querySelector("#debug-weather").value=e.weather,this.root.querySelector("#debug-metrics").textContent=`${e.fps} FPS \xB7 ${e.calls} appels \xB7 ${Math.round(e.triangles/1e3)} k triangles
${e.position.map(n=>n.toFixed(1)).join(" / ")} m`;let t=[this.fly&&"VOL",this.noclip&&"NOCLIP",this.god&&"INVINCIBLE",this.xray&&"X-RAY"].filter(Boolean);this.badge.textContent=t.length?`F3 \xB7 ${t.join(" \xB7 ")}`:e.debugged?"F3 \xB7 PARTIE TEST":""}move(e,t,n,s,r=null){let o=new R((n.has("KeyD")?1:0)-(n.has("KeyA")||n.has("KeyQ")?1:0),(n.has("Space")?1:0)-(n.has("ShiftLeft")||n.has("ShiftRight")?1:0),(n.has("KeyS")?1:0)-(n.has("KeyW")||n.has("KeyZ")?1:0));o.normalize().applyAxisAngle(new R(0,1,0),e.yaw);let a=e.position.clone().addScaledVector(o,t*18);a.x=at.clamp(a.x,-1449,1449),a.z=at.clamp(a.z,-1449,1449),a.y=at.clamp(a.y,-20,1200);let h=this.noclip;if(!h){h=r?r.fits(a.x,a.y,a.z,e.radius,e.bodyHeight):a.y>=s.height(a.x,a.z);for(let c of e.colliderProvider(a.x,a.z,e.radius+.3)||[]){let l=c.y??c.baseY??s.height(c.x,c.z);a.y+e.bodyHeight<=l||a.y>=l+c.height||(c.radius?Math.hypot(a.x-c.x,a.z-c.z)<c.radius+e.radius:Math.abs(a.x-c.x)<c.width/2+e.radius&&Math.abs(a.z-c.z)<c.depth/2+e.radius)&&(h=!1)}}h&&e.position.copy(a),e.velocity.set(0,0,0),e.grounded=!1,e.syncCamera(t)}scan(e,t,n){if(this.markers.visible=this.xray&&n,!this.markers.visible)return;let s=`${Math.floor(e.position.x/8)}:${Math.floor(e.position.z/8)}:${t.field.revision}:${t.removed.size}`;if(s===this.lastScan)return;this.lastScan=s;let r=0,o={coal:"#929daa",copper:"#e39856",iron:"#c5e3ed",crystal:"#c8a0ff",diamond:"#65ffe2"},a=(c,l,u,d)=>{r>=640||(this.dummy.position.set(c,l,u),this.dummy.updateMatrix(),this.markers.setMatrixAt(r,this.dummy.matrix),this.markers.setColorAt(r++,new se(o[d])))};for(let c of t.crystals)if(!t.removed.has(c.userData.id)){let l=c.userData;a(l.x,l.y+.7,l.z,"crystal")}let h=t.field;for(let c=Math.floor(e.position.x/3)*3-30;c<e.position.x+30;c+=3)for(let l=Math.floor(e.position.z/3)*3-30;l<e.position.z+30;l+=3)for(let u=0;u<14;u+=3){let d=h.materialAt(c,u,l);o[d]&&h.density(c,u,l)<=0&&a(c,u,l,d)}this.markers.count=r,this.markers.instanceMatrix.needsUpdate=!0,this.markers.instanceColor&&(this.markers.instanceColor.needsUpdate=!0)}};function Pd(i){if(!/^\d{1,10}$/.test(String(i)))return null;let e=Number(i);return Number.isSafeInteger(e)&&e<=4294967295?e:null}function uh(){return crypto.getRandomValues(new Uint32Array(1))[0]}function Nm(i,e){let t=Number(e)>>>0,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296);for(let s=0;s<160;s++){let r=(n()-.5)*1500,o=(n()-.5)*1500,a=i.sample(r,o);if(!(a.slope>.3||a.height>145||(a.canopy||0)>.3||i.waterLevel(r,o)!==null)&&![[-2,0],[2,0],[0,-2],[0,2]].some(([h,c])=>Math.abs(i.height(r+h,o+c)-a.height)>.8))return{x:r,z:o,yaw:n()*Math.PI*2,pitch:-.12}}return{...i.panorama}}var dh=class{constructor(e){this.capacity=900,this.geometry=new it,this.positions=new Float32Array(this.capacity*6),this.geometry.setAttribute("position",new Ot(this.positions,3)),this.material=new Bi({color:"#b7cfdf",transparent:!0,opacity:.45,depthWrite:!1}),this.rain=new Ks(this.geometry,this.material),this.rain.name="Pluie et vent",this.rain.frustumCulled=!1,e.add(this.rain),this.cache=new Float32Array(this.capacity),this.cacheTick=-1,this.count=0}update(e,t,n,s,r,o,a=!1){let h=n.values,c=s==="high"?900:s==="medium"?480:180;if(this.count=Math.floor(c*h.rain),this.rain.visible=!o&&!a&&r&&this.count>0,!this.rain.visible)return;let l=Math.floor(n.clock),u=l!==this.cacheTick;this.cacheTick=l;let d=n.clock,f=e.position.x,g=e.position.y,v=e.position.z;for(let p=0;p<this.count;p++){let m=p*2.39996,x=2+p*7.17%19,_=f+Math.sin(m)*x,y=v+Math.cos(m)*x;u&&(this.cache[p]=t.height(_,y)+.04);let T=this.cache[p],w=Math.max(T+1,g+14),C=((p*.617-d*(h.rain*9+9)/(w-T))%1+1)%1,I=T+C*(w-T),S=p*6,b=h.wind*.4;this.positions[S]=_,this.positions[S+1]=I,this.positions[S+2]=y,this.positions[S+3]=_+b,this.positions[S+4]=Math.max(T,I-.55),this.positions[S+5]=y+b*.3}this.geometry.setDrawRange(0,this.count*2),this.geometry.attributes.position.needsUpdate=!0}};var vo=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),go=(i,e,t)=>i+(e-i)*t,mt=(i,e,t)=>{let n=vo((t-i)/(e-i));return n*n*(3-2*n)},Fm=i=>i*i*i*(i*(i*6-15)+10);function $b(i){let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function Zb(i="vallon-2026"){let e=$b(i);function t(p,m){let x=Math.imul(p,374761393)^Math.imul(m,668265263)^e;return x=Math.imul(x^x>>>13,1274126177),((x^x>>>16)>>>0)/4294967295}function n(p,m){let x=Math.floor(p),_=Math.floor(m),y=Fm(p-x),T=Fm(m-_);return go(go(t(x,_),t(x+1,_),y),go(t(x,_+1),t(x+1,_+1),y),T)}function s(p,m,x=3){let _=0,y=.57142857,T=1;for(let w=0;w<x;w++)_+=n(p*T+w*17.31,m*T-w*9.2)*y,y*=.5,T*=2;return _}let r=(p,m,x,_,y,T)=>Math.exp(-((p-x)**2/(y*y)+(m-_)**2/(T*T)));function o(p){return 15+Math.sin(p/420)*110+Math.sin(p/170)*45}function a(p){return o(p)-65+Math.sin(p/180)*18}function h(p,m){let x=(n(p/520+40,m/520-20)-.5)*90,_=r(p+x,m,-680,-830,410,620),y=r(p+x,m,820,-690,520,530),T=r(p,m,-90,-1600,720,500),w=r(p,m,-640,650,620,550),C=182*_+215*y+178*T+48*w,I=mt(18,130,C),S=1-Math.abs(s(p/260+31,m/260-12)*2-1),b=(S*S-.52)*27*I,A=(s(p/330+2,m/330+14)-.48)*30,L=Math.abs(p-o(m)),U=mt(38,380,L),B=6.5+mt(150,1700,-m)*25+(C+b)*(.11+.89*U);B+=A*(.23+.77*mt(10,150,L)),B+=r(p,m,390,330,460,450)*25;let H=r(p,m,450,220,255,280)*.62;B=go(B,34+A*.26,H);let K=Math.exp(-((L/19)**2));B-=K*2.4,B+=(n(p/34+100,m/34+40)-.5)*.75,B+=(n(p/11-60,m/11+81)-.5)*.2,B=260*Math.tanh(B/260);let G=Math.hypot((p+890)/660,(m+460)/920),oe=(1-mt(.64,1.18,G))*(1-mt(-260,-150,p));return go(B,2.4+n(p/140,m/140)*1.2,oe)}let c={x:-890,z:-460,rx:790,rz:1100,level:6},l=[[-350,480,95,72],[840,460,130,90],[-140,-680,110,75]].map(([p,m,x,_])=>({x:p,z:m,rx:x,rz:_,level:h(p,m)-.5})),u=[c,...l];function d(p,m){let x=h(p,m);for(let _ of l){let y=Math.hypot((p-_.x)/_.rx,(m-_.z)/_.rz);y<1.55&&(x=go(x,_.level-3.4+Math.min(1.5,y*y)*5,1-mt(1.05,1.55,y)))}return x}function f(p,m,x,_){let y=Math.abs(p-o(m)),T=Math.max(...u.map(Z=>Math.exp(-Math.hypot((p-Z.x)/Z.rx,(m-Z.z)/Z.rz)*1.3))),w=vo(.48+(s(p/360+63,m/360-82)-.42)*.7+Math.exp(-y/110)*.19-x*8e-4+T*.14),C=n(p/175+111,m/175-50)*.82+n(p/58+27,m/58-18)*.18,I=mt(.43,.59,C)*(1-mt(115,155,x))*(1-mt(.48,.76,_)),S=a(m)+(n(m/95+68,21)-.5)*9,b=2.2+n(p/13+72,m/18-91)*2.2,A=(1-mt(b,b+2.6,Math.abs(p-S)))*(1-mt(750,1250,Math.abs(m))),L=n(p/440-44,m/440+61),U=x>143||_>.69?"rock":x>99?"alpine":I>.35&&y>18?"forest":"meadow",k=U==="rock"||U==="alpine"?U:u.some(Z=>Math.hypot((p-Z.x)/Z.rx,(m-Z.z)/Z.rz)<1.22&&x<Z.level+2.4)?"shore":U==="forest"?L>.64?"birch":"forest":w>.64&&_<.15?"wetland":L>.67?"heath":w<.44?"steppe":"meadow",B=mt(.54,.78,n(p/38+37,m/38-64))*(.25+(1-w)*.65)*(1-mt(.2,.55,_)),H=n(p/95+8,m/95-19),K=mt(58,145,x)*mt(.43,.65,H),G=vo(Math.max(mt(.3,.82,_)*.78,mt(.58,.82,H)*mt(88,158,x)*.82,mt(148,188,x)*.72)),oe=(1-mt(.25,.75,_))*(1-mt(104,155,x));oe*=1-G*.82,oe*=(1-A*.96)*(.75+n(p/45,m/45)*.25),oe*=1-I*.68,oe*=1-B*.9,y<9&&(oe*=.4),u.some(Z=>Math.hypot((p-Z.x)/Z.rx,(m-Z.z)/Z.rz)<1&&x<Z.level+.1)&&(oe=0);let pe=n(p/75+300,m/75+50);return{height:x,slope:_,moisture:w,biome:k,coverType:U,canopy:I,flora:pe,soil:B,exposure:K,bedrock:G,grass:vo(oe),path:A,riverDistance:y}}function g(p,m){let x=d(p,m),_=1.5,y=(d(p+_,m)-d(p-_,m))/(2*_),T=(d(p,m+_)-d(p,m-_))/(2*_);return f(p,m,x,Math.hypot(y,T))}return{seed:i,height:d,sample:g,surface:f,noise:n,riverX:o,pathX:a,waterLevel:(p,m)=>{for(let x of u)if(Math.hypot((p-x.x)/x.rx,(m-x.z)/x.rz)<1&&d(p,m)<x.level)return x.level;return null},spawn:{x:a(100),z:100},panorama:{x:600,z:-320,yaw:1.35,pitch:-.15},lake:c,lakes:u,bounds:2048}}var Jb=new se("#638447"),Kb=new se("#a69b60"),jb=new se("#537969"),Qb=new se("#85805d");function eM(i=.55,e=.5,t=.5,n=new se){return n.copy(Jb).lerp(Kb,vo((.61-i)*2.3+e*.16)),n.lerp(jb,mt(.58,.8,i)*.48),n.lerp(Qb,mt(.64,.9,t)*.4),n}function Id(i,e=.5,t=new se){return eM(i.moisture??.55,e,i.flora??.5,t),t.lerp(new se("#768c73"),mt(60,145,i.height??i.y??0)*.45),t.lerp(new se("#778058"),mt(.56,.85,i.flora??.5)*.18),t.multiplyScalar(1-(i.canopy||0)*.2),t}function zm(i,e=new se){return e.set("#ac8861").lerp(new se("#705746"),mt(.4,.74,i.moisture??.55)),e.lerp(new se("#8f9388"),mt(65,150,i.height??0)*.55),e}var zt=32,fh=4096,tM=32,ph=new se,nM=new se("#8b907c"),iM=new se("#817f79"),sM=new se("#938d7d"),rM=new se("#70777a"),Bm=new se,oM=new se("#98836b"),aM=new se("#d7dace");function lM(i,e,t,n,s,r){let o=i.surface(e,t,n,s);Id(o,.5,r),r.lerp(nM,mt(86,145,n)*.48);let a=vo(Math.max(o.bedrock||0,mt(132,180,n)*.62),0,.9),h=i.noise(e/210+32,t/210-16);Bm.copy(rM).lerp(sM,mt(.36,.68,h)),r.lerp(Bm,a*.92),r.lerp(aM,mt(190,235,n)*(1-mt(.4,.8,s))),r.lerp(oM,o.path*.87),r.lerp(zm(o),o.soil*.82),o.biome==="shore"&&r.lerp(new se("#b2a17b"),.6);let c=-(i.displacement?.(e,t)||0);r.lerp(c>1.7?iM:zm(o),(o.disturbance||0)*.86),c>5&&r.multiplyScalar(.65),r.multiplyScalar(.94+i.noise(e/24+300,t/24)*.12)}function Ia(i,e,t){return Math.hypot(Math.max(i.x-e,0,e-i.x-i.size),Math.max(i.z-t,0,t-i.z-i.size))}var mh=class{constructor(e,t){this.scene=e,this.world=t,this.rootGroup=new Ut,this.rootGroup.name="Terrain \xB7 progressive geomorph LOD",e.add(this.rootGroup),this.frame=0,this.maxBuildsPerFrame=3,this.buildBudgetMs=5,this.stats={chunks:1,triangles:0,queued:0,buildMs:0,lodLevels:{}},this.root=this.makeNode(-fh/2,-fh/2,fh),this.disposed=!1}makeNode(e,t,n){let s={x:e,z:t,size:n,children:null,mesh:null,split:!1,lastSeen:this.frame};return s.mesh=this.makeMesh(s),this.rootGroup.add(s.mesh),s}makeMesh(e){let{x:t,z:n,size:s}=e,r=s/zt,o=zt+1,a=[],h=[],c=[],l=[],u=[],d=[],f=[],g=new Float64Array(o*o);for(let A=0;A<=zt;A++)for(let L=0;L<=zt;L++)g[A*o+L]=this.world.height(t+L*r,n+A*r);for(let A=0;A<=zt;A++)for(let L=0;L<=zt;L++){let U=A*o+L,k=g[U],B=(g[A*o+Math.min(zt,L+1)]-g[A*o+Math.max(0,L-1)])/(r*(L===0||L===zt?1:2)),H=(g[Math.min(zt,A+1)*o+L]-g[Math.max(0,A-1)*o+L])/(r*(A===0||A===zt?1:2));a.push(L*r,k,A*r),lM(this.world,t+L*r,n+A*r,k,Math.hypot(B,H),ph),h.push(ph.r,ph.g,ph.b)}for(let A=0;A<=zt;A++)for(let L=0;L<=zt;L++){let U=Math.min(zt-2,Math.floor(L/2)*2),k=Math.min(zt-2,Math.floor(A/2)*2),B=(L-U)/2,H=(A-k)/2,K=k*o+U,G=K+2,oe=K+o*2,pe=oe+2,Z=B+H<=1?[K,G,oe]:[pe,oe,G],Ve=B+H<=1?[1-B-H,B,H]:[B+H-1,1-B,1-H];c.push(Z.reduce((Ze,dt,Qe)=>Ze+g[dt]*Ve[Qe],0));for(let Ze=0;Ze<3;Ze++)l.push(Z.reduce((dt,Qe,J)=>dt+h[Qe*3+Ze]*Ve[J],0))}let v=r*2,p=-fh/2,m=new Map,x=(A,L)=>{let U=`${A},${L}`;return m.has(U)||m.set(U,this.world.height(p+A*v,p+L*v)),m.get(U)},_=(A,L)=>{let U=(A-p)/v,k=(L-p)/v,B=Math.floor(U),H=Math.floor(k),K=U-B,G=k-H,oe=x(B,H),pe=x(B+1,H),Z=x(B,H+1),Ve=x(B+1,H+1);return K+G<=1?oe*(1-K-G)+pe*K+Z*G:Ve*(K+G-1)+Z*(1-K)+pe*(1-G)},y=(A,L,U,k,B)=>{let H=(A(L+k,U)-A(L-k,U))/(2*k),K=(A(L,U+k)-A(L,U-k))/(2*k),G=Math.hypot(H,1,K);B.push(-H/G,1/G,-K/G)};for(let A=0;A<=zt;A++)for(let L=0;L<=zt;L++){let U=t+L*r,k=n+A*r;y(this.world.height,U,k,1.5,u),y(_,U,k,v,d)}for(let A=0;A<zt;A++)for(let L=0;L<zt;L++){let U=A*o+L,k=U+1,B=U+o,H=B+1;f.push(U,B,k,k,B,H)}let T=[Array.from({length:o},(A,L)=>L),Array.from({length:o},(A,L)=>L*o+zt),Array.from({length:o},(A,L)=>zt*o+zt-L),Array.from({length:o},(A,L)=>(zt-L)*o)],w=Math.max(1.4,r*1.15);for(let A of T){let L=a.length/3;for(let U of A)a.push(a[U*3],a[U*3+1]-w,a[U*3+2]),h.push(h[U*3],h[U*3+1],h[U*3+2]),u.push(u[U*3],u[U*3+1],u[U*3+2]),c.push(c[U]-w),l.push(l[U*3],l[U*3+1],l[U*3+2]),d.push(d[U*3],d[U*3+1],d[U*3+2]);for(let U=0;U<zt;U++)f.push(A[U],L+U,A[U+1],A[U+1],L+U,L+U+1)}let C=new it;C.setAttribute("position",new Me(a,3)),C.setAttribute("color",new Me(h,3)),C.setAttribute("coarseHeight",new Me(c,1)),C.setAttribute("coarseColor",new Me(l,3)),C.setAttribute("normal",new Me(u,3)),C.setAttribute("coarseNormal",new Me(d,3)),C.setIndex(f),C.computeBoundingSphere();let I={value:0},S=new yt({vertexColors:!0,roughness:1,metalness:0});S.onBeforeCompile=A=>{A.uniforms.terrainMorph=I,A.vertexShader=`varying vec3 vTerrainWorld;
varying vec3 vTerrainNormal;
uniform float terrainMorph;
attribute float coarseHeight;
attribute vec3 coarseColor;
attribute vec3 coarseNormal;
`+A.vertexShader,A.vertexShader=A.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = normalize(mix(normal, coarseNormal, terrainMorph));`),A.vertexShader=A.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y = mix(position.y, coarseHeight, terrainMorph);
vTerrainWorld=(modelMatrix*vec4(transformed,1.)).xyz;vTerrainNormal=normalize(mat3(modelMatrix)*objectNormal);`),A.vertexShader=A.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
vColor = mix(color, coarseColor, terrainMorph);`),A.fragmentShader=`varying vec3 vTerrainWorld;
        varying vec3 vTerrainNormal;
        float soilHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float soilNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(soilHash(i),soilHash(i+vec2(1,0)),f.x),mix(soilHash(i+vec2(0,1)),soilHash(i+1.),f.x),f.y);}
      `+(A.fragmentShader||""),A.fragmentShader=A.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float d=distance(cameraPosition,vTerrainWorld);
        float footprint=max(length(dFdx(vTerrainWorld.xz)),length(dFdy(vTerrainWorld.xz)));
        float detail=1.-smoothstep(.025,.18,footprint);
        float grain=soilNoise(vTerrainWorld.xz*30.);
        float strata=sin(vTerrainWorld.y*2.1+soilNoise(vTerrainWorld.xz*.07)*3.);
        float exposed=smoothstep(.22,.65,1.-abs(vTerrainNormal.y));
        diffuseColor.rgb*=1.+strata*exposed*.075;
        float cover=soilNoise(vTerrainWorld.xz*.12)*.55+soilNoise(vTerrainWorld.xz*.7)*.25;
        // Filter fine grains as the pixel footprint grows; keep macro patches across LODs.
        float grassWeave=soilNoise(vTerrainWorld.xz*vec2(7.,1.8));
        diffuseColor.rgb*=.91+cover*.2+mix(.04,(grain-.5)*.17,detail);
        diffuseColor.rgb*=1.+(grassWeave-.5)*.13*(1.-smoothstep(.18,1.8,footprint));
        // Distant grass represents the light-catching tips lost when cards fade away.
        diffuseColor.rgb*=1.+smoothstep(35.,110.,d)*.12*(1.-smoothstep(95.,150.,vTerrainWorld.y));
      `)},S.customProgramCacheKey=()=>"vallon-terrain-natural-v4";let b=new nt(C,S);return b.position.set(t,0,n),b.receiveShadow=!0,b.castShadow=!1,b.userData.morph=I,b.userData.terrainStep=r,b.name=`Terrain ${r}m`,b}update(e,t=0){if(this.disposed)return;this.frame++;let n=performance.now(),s=e.position.x,r=e.position.z,o=0,a=0,h=0,c=0,l={},u=p=>{let m=p.mesh,x=this.makeMesh(p);x.visible=m.visible,x.userData.morph.value=m.userData.morph.value,this.rootGroup.remove(m),m.geometry.dispose(),m.material.dispose(),p.mesh=x,this.rootGroup.add(x),p.needsRefresh=!1,o++},d=[],f=p=>{p.needsRefresh&&p.mesh.visible&&d.push(p),p.children&&p.children.forEach(f)};f(this.root),d.sort((p,m)=>Ia(p,s,r)-Ia(m,s,r));for(let p of d){if(o>=this.maxBuildsPerFrame||performance.now()-n>=this.buildBudgetMs)break;u(p)}let g=p=>{if(p.mesh.visible=!1,p.children)for(let m of p.children)g(m)},v=p=>{p.needsRefresh&&o<this.maxBuildsPerFrame&&performance.now()-n<this.buildBudgetMs&&u(p);let m=Ia(p,s,r),x=p.size*(p.split?1.45:1.35);if(p.size>tM&&m<x){for(p.children||(p.children=[]);p.children.length<4&&o<this.maxBuildsPerFrame&&performance.now()-n<this.buildBudgetMs;){let T=p.children.length,w=p.size/2,C=this.makeNode(p.x+T%2*w,p.z+Math.floor(T/2)*w,w);C.mesh.visible=!1,p.children.push(C),o++}if(p.children.length===4){p.split=!0,p.mesh.visible=!1;let T=p.children.slice().sort((w,C)=>Ia(w,s,r)-Ia(C,s,r));for(let w of T)v(w);return}c+=4-p.children.length}else if(p.split=!1,p.children)for(let T of p.children)g(T);p.lastSeen=this.frame,p.mesh.visible=!0,p.mesh.userData.morph.value=mt(p.size*1.45,p.size*2.1,m),a++,h+=p.mesh.geometry.index.count/3;let y=p.size/zt;l[y]=(l[y]||0)+1};if(v(this.root),this.frame%180===0){let p=m=>{if(m.children)if(!m.split&&this.frame-Math.max(...m.children.map(x=>x.lastSeen))>360){for(let x of m.children)this.disposeNode(x);m.children=null}else for(let x of m.children)p(x)};p(this.root)}this.stats={chunks:a,triangles:h,queued:c,buildMs:performance.now()-n,lodLevels:l}}disposeNode(e){if(e.children)for(let t of e.children)this.disposeNode(t);this.rootGroup.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}invalidate(e){let t=n=>{let s=n.size/zt*4;if(!(n.x>e.maxX+s||n.x+n.size<e.x-s||n.z>e.maxZ+s||n.z+n.size<e.z-s)&&(n.needsRefresh=!0,n.children))for(let r of n.children)t(r)};t(this.root)}dispose(){this.disposed||(this.disposed=!0,this.disposeNode(this.root),this.scene.remove(this.rootGroup))}};function Om(i="vallon-2026",{scale:e=.84}={}){let t=Zb(i),n=e===1?1:.84;if(n===1)return t;let s=o=>({...o,x:o.x*n,z:o.z*n,..."rx"in o?{rx:o.rx*n,rz:o.rz*n,level:o.level*n}:{}}),r=t.lakes.map(s);return{...t,scale:n,height:(o,a)=>t.height(o/n,a/n)*n,sample:(o,a)=>{let h=t.sample(o/n,a/n);return{...h,height:h.height*n,riverDistance:h.riverDistance*n}},surface:(o,a,h,c)=>{let l=t.surface(o/n,a/n,h/n,c);return{...l,height:h,riverDistance:l.riverDistance*n}},waterLevel:(o,a)=>{let h=t.waterLevel(o/n,a/n);return h===null?null:h*n},riverX:o=>t.riverX(o/n)*n,pathX:o=>t.pathX(o/n)*n,spawn:s(t.spawn),panorama:s(t.panorama),lake:r[0],lakes:r}}var cM=i=>i-Math.floor(i),Xn=(i,e)=>cM(Math.sin(i.x*12.9898+i.z*78.233+i.rotation*19.37+e*37.71)*43758.5453),km=new R,Hm=new Rt,Vm=new R,hM=new An;function gh(i){let e=i.type==="tree"||i.prototype<3,t=i.type==="rock"||i.prototype>=3&&i.prototype<6,n=Xn(i,1),s=e?.68+Xn(i,2)*.64:t?.65+Xn(i,2)*.95:.7+Xn(i,2)*.75,r=e?n<.25?.62+n:.9+Xn(i,3)*.43:t?.45+Xn(i,3)*1.05:.55+Xn(i,3)*.85;return{x:s,y:r,z:s*(.72+Xn(i,4)*.53),leanX:e?(Xn(i,5)-.5)*.055:(Xn(i,5)-.5)*.22,leanZ:e?(Xn(i,6)-.5)*.055:(Xn(i,6)-.5)*.22,tone:Xn(i,7),light:.8+Xn(i,8)*.2}}function xo(i,e){let t=gh(i);return km.set(i.x,i.baseY-.045,i.z),Hm.setFromEuler(hM.set(t.leanX,i.rotation,t.leanZ)),Vm.set(i.scale*t.x,i.scale*t.y,i.scale*t.z),e.compose(km,Hm,Vm)}function La(i,e,t=!1){let n=gh(i);return t||i.prototype>=6?e.setRGB(.83+n.tone*.17,.94+n.tone*.06,.75+(1-n.tone)*.25):e.setRGB(1,.91+n.tone*.09,.83+n.tone*.17),e.multiplyScalar(n.light)}function vh(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i)();return i.onBeforeCompile=o=>{n(o),o.uniforms.uPropRange=e,o.vertexShader=`uniform float uPropRange;varying float vPropFade;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vec4 propRoot=vec4(0.,0.,0.,1.);
   #ifdef USE_INSTANCING
    propRoot=instanceMatrix*propRoot;
   #endif
   propRoot=modelMatrix*propRoot;
   float outerLod=smoothstep(uPropRange-20.,uPropRange+20.,length(propRoot.xz-cameraPosition.xz));
   vPropFade=${t?"outerLod":"1.-outerLod"};`),o.fragmentShader=`varying float vPropFade;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   float propDither=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
   if(${t?"1.-propDither":"propDither"}>vPropFade)discard;`)},i.customProgramCacheKey=()=>r+"-distance-"+t,i}var Gm=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296};function Ld(i=!1){if(typeof document>"u"){let o=new Ts(new Uint8Array([115,139,89,255]),1,1);return o.needsUpdate=!0,o}let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=Gm(i?911:340);t.lineCap="round",t.strokeStyle="#555e3b",t.lineWidth=2,t.beginPath(),t.moveTo(128,245),t.bezierCurveTo(114,165,143,92,128,20),t.stroke();let s=i?62:36;for(let o=0;o<s;o++){let a=o%2?-1:1,h=25+o*(205/s),c=127+a*(20+n()*59),l=i?18+n()*8:24+n()*13;t.strokeStyle="#667149",t.lineWidth=1,t.beginPath(),t.moveTo(128,h+22),t.lineTo(c,h),t.stroke(),t.save(),t.translate(c,h),t.rotate(a*.65+(n()-.5)*.55),i&&t.scale(.32,1);let u=t.createLinearGradient(-l,0,l,0);u.addColorStop(0,"#485f3b"),u.addColorStop(.46,"#9baa79"),u.addColorStop(1,"#637d49"),t.fillStyle="#789451",t.beginPath(),t.moveTo(0,-l),t.lineTo(l*.6,-l*.22),t.lineTo(l*.48,l*.48),t.lineTo(0,l),t.lineTo(-l*.48,l*.48),t.lineTo(-l*.6,-l*.22),t.closePath(),t.fill(),t.fillStyle="#506c3c",t.beginPath(),t.moveTo(0,-l),t.lineTo(0,l),t.lineTo(-l*.48,l*.48),t.lineTo(-l*.6,-l*.22),t.closePath(),t.fill(),t.strokeStyle="#bcc69b90",t.lineWidth=.7,t.beginPath(),t.moveTo(0,-l*.85),t.lineTo(0,l*.9),t.stroke(),t.restore()}let r=new rs(e);return r.colorSpace=Kt,r.anisotropy=8,r}function xh(i,e=!1,t=!1){let n=Gm(737+i*819+(t?200:0)),s=[],r=[],o=[],a=[],h=[],c=t?70:i===1?220:300,l=t?e?c:150:i===1?e?c:520:e?c:720,u=new Rt,d=new R,f=new R,g=new R,v=[[-.5,-.5,0,0],[.5,-.5,1,0],[-.5,.5,0,1],[.5,-.5,1,0],[.5,.5,1,1],[-.5,.5,0,1]];for(let m=0;m<l;m++){let x=n()*Math.PI*2,_=n()*2-1,y=Math.sqrt(Math.max(0,1-_*_)),T,w,C,I;if(t){let b=Math.cbrt(n())*.95;T=Math.cos(x)*y*b,C=Math.sin(x)*y*b,w=.65+_*b*.65,I=.48+n()*.35}else if(i===1){w=2+n()*6.4;let b=(8.7-w)*.34*Math.sqrt(n());T=Math.cos(x)*b,C=Math.sin(x)*b,I=.8+n()*.45}else{let b=i===2,A=m%8,L=A*2.399963,U=b?1.3:1.8,k=b?6.2:5,B=Math.cbrt(n())*(b?1.5:1.88);T=(A===7?0:Math.cos(L)*U)+Math.cos(x)*y*B,C=(A===7?0:Math.sin(L)*U)+Math.sin(x)*y*B,w=(A===7?k+1.25:k-.7+A*.32)+_*B*(b?1.05:.78),I=.78+n()*.46}u.setFromEuler(new An(n()*Math.PI*2,n()*Math.PI*2,n()*Math.PI*2)),f.set(0,0,1).applyQuaternion(u);let S=new se(i===2?"#e3e4c3":t?"#b9c6a4":"#c7d1b3");S.multiplyScalar(.77+n()*.3);for(let[b,A,L,U]of v)g.set(b*I,A*I,0).applyQuaternion(u),d.set(T,w,C).add(g),s.push(d.x,d.y,d.z),r.push(L,U),o.push(S.r,S.g,S.b),a.push(f.x,f.y,f.z),h.push(m>=c?1:0)}let p=new it;return p.setAttribute("position",new Me(s,3)),p.setAttribute("normal",new Me(a,3)),p.setAttribute("uv",new Me(r,2)),p.setAttribute("color",new Me(o,3)),p.setAttribute("leafDetail",new Me(h,1)),p.computeBoundingSphere(),p}function Dd(i){let e=new yt({vertexColors:!0,roughness:i==="rock"?.97:.92,flatShading:!0});return e.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vNaturalPos;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vNaturalPos=position;`),t.fragmentShader=`varying vec3 vNaturalPos;
 float nHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float nNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(nHash(i),nHash(i+vec3(1,0,0)),f.x),mix(nHash(i+vec3(0,1,0)),nHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(nHash(i+vec3(0,0,1)),nHash(i+vec3(1,0,1)),f.x),mix(nHash(i+vec3(0,1,1)),nHash(i+1.),f.x),f.y),f.z);}
 `+t.fragmentShader;let n=i==="rock"?"float fleck=nNoise(vNaturalPos*8.)*.6+nNoise(vNaturalPos*37.)*.25+nNoise(vNaturalPos*91.)*.15;diffuseColor.rgb*=.68+fleck*.55;float moss=smoothstep(.54,.74,nNoise(vNaturalPos*3.))*(1.-smoothstep(.05,.8,vNaturalPos.y));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.11,.15,.065),moss*.27);":"float barkFine=nNoise(vNaturalPos*vec3(42.,1.8,42.));float barkSoft=nNoise(vNaturalPos*vec3(13.,4.,13.));diffuseColor.rgb*=.84+barkFine*.2+barkSoft*.08;";t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+n),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
    float relief=nNoise(vNaturalPos*${i==="rock"?"22.":"vec3(90.,4.,90.)"});
    vec3 dx=dFdx(-vViewPosition),dy=dFdy(-vViewPosition),r1=cross(dy,normal),r2=cross(normal,dx);
    float determinant=dot(dx,r1);
    normal=normalize(abs(determinant)*normal-sign(determinant)*(dFdx(relief)*r1+dFdy(relief)*r2)*${i==="rock"?".004":".0003"});
  `)},e.customProgramCacheKey=()=>`vallon-natural-${i}`,e}function Wm(i){let e=i.getAttribute("position"),t=i.getAttribute("normal"),n=new Map,s=r=>`${Math.round(e.getX(r)*1e5)},${Math.round(e.getY(r)*1e5)},${Math.round(e.getZ(r)*1e5)}`;for(let r=0;r<e.count;r++){let o=s(r),a=n.get(o);a||(a=new R,n.set(o,a)),a.x+=t.getX(r),a.y+=t.getY(r),a.z+=t.getZ(r)}for(let r of n.values())r.normalize();for(let r=0;r<e.count;r++){let o=n.get(s(r));t.setXYZ(r,o.x,o.y,o.z)}return i}var ln=20,qn=40,yo=12,yh={high:{density:13.2,grassRange:90,nearStart:27,nearEnd:48,propRange:230},medium:{density:5.2,grassRange:76,nearStart:22,nearEnd:39,propRange:200},low:{density:2.1,grassRange:55,nearStart:15,nearEnd:29,propRange:165}},Nd=(i,e,t)=>Math.max(e,Math.min(t,i)),_h=(i,e,t)=>{let n=Nd((t-i)/(e-i),0,1);return n*n*(3-2*n)};function bo(i,e,t=0){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function uM(i){if(typeof i=="number")return i|0;let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return e|0}function Mo(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ud=(i,e)=>`${i},${e}`,Ln=(i,e,t)=>new R(i,e,t);function Xm(i,e,t,n,s){let r=n.coverType||n.biome,o=n.canopy??(r==="forest"?1:0),a=.006+Math.pow(o,1.25)*.965,h=n.biome==="birch"?s<.65?2:s<.88?0:1:r==="alpine"?1:r==="forest"?s<.6?1:s<.82?0:2:s<.42?1:s<.85?0:2,c=i.spawn||{x:0,z:100},l=i.panorama,u=!(l&&Math.hypot(e-l.x,t-l.z)<18)&&Math.hypot(e-c.x,t-c.z)>=5&&(n.path||0)<=.18&&n.slope<=.62&&(n.riverDistance==null||n.riverDistance>=5.5);return{density:a,species:h,valid:u}}function Fd(i){let e=[],t=[];for(let{geometry:s,matrix:r,color:o,variation:a=.06}of i){let h=s.index?s.toNonIndexed():s;r&&h.applyMatrix4(r);let c=h.getAttribute("position"),l=new se(o);for(let u=0;u<c.count;u++){e.push(c.getX(u),c.getY(u),c.getZ(u));let d=1-a/2+bo(Math.floor(u/3),Math.round(c.getY(u)*11),811)*a;t.push(l.r*d,l.g*d,l.b*d)}h!==s&&h.dispose(),s.dispose()}let n=new it;return n.setAttribute("position",new Me(e,3)),n.setAttribute("color",new Me(t,3)),n.computeVertexNormals(),n.computeBoundingSphere(),n}function Ym(i,e=Ln(1,1,1),t=new Rt){return new Ke().compose(i,t,e)}function _o(i,e,t,n){let s=e.clone().sub(i),r=new Rt().setFromUnitVectors(Ln(0,1,0),s.clone().normalize());return{geometry:new Bn(t*.48,t,s.length(),10),matrix:Ym(i.clone().add(e).multiplyScalar(.5),Ln(1,1,1),r),color:n}}function dM(i){let e=[];if(i===1){e.push(_o(Ln(0,0,0),Ln(.08,8.2,0),.25,"#65503a"));for(let t=0;t<23;t++){let n=2.3+t*.25,s=t*2.399963,r=(8.4-n)*.31;e.push(_o(Ln(0,n,0),Ln(Math.cos(s)*r,n-.25,Math.sin(s)*r),.045,"#62513f"))}}else{let t=i===2,n=t?"#b6b49b":"#70503b",s=t?6.2:5;e.push(_o(Ln(0,0,0),Ln(.18,s,.06),t?.19:.31,n));for(let r=0;r<7;r++){let o=r*2.399963,a=t?1.3:1.8,h=s-1.35+r*.32,c=Ln(Math.cos(o)*a,h,Math.sin(o)*a);e.push(_o(Ln(.1,h-1.55,0),c,t?.07:.12,n));for(let l=0;l<3;l++)e.push(_o(c.clone().multiplyScalar(.85),c.clone().add(Ln(Math.sin(l*2+r)*.8,.7+l*.16,Math.cos(l*2+r)*.8)),.033,n))}if(!t)for(let r=0;r<4;r++){let o=r*Math.PI/2;e.push(_o(Ln(Math.cos(o)*.55,.03,Math.sin(o)*.55),Ln(0,.9,0),.13,n))}}return Fd(e)}function fM(i){let e=new fi(1,1),t=e.getAttribute("position");for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n),a=.95+Math.sin(s*3+i)*Math.cos(o*4-r*2)*.13+Math.sin(r*6+o*5)*.06;t.setXYZ(n,s*a*(1.25-i*.11),Math.max(0,(r*a+.8)*(.68+i*.14)),o*a)}return Fd([{geometry:e,color:["#878a85","#99958b","#737e78"][i],variation:.04}])}function pM(i){return xh(i,!1,!0)}function qm(i){let e=[],t=Mo(7313+i*419);for(let n=0;n<16;n++){let s=n*2.399963,r=.7+t()*.23,o=.32+t()*.8;for(let a=0;a<3;a++)e.push({geometry:new fi(.06+t()*.016,0),matrix:Ym(Ln(Math.cos(s)*r+(a-1)*.06,o+a%2*.08,Math.sin(s)*r+(a-1)*.035)),color:i?"#6372b2":"#ba4052",variation:.13})}return Fd(e)}function mM(){let i=[],e=[],t=[],n=Mo(58731);for(let r=0;r<7;r++){let o=n()*Math.PI*2,a=(n()-.5)*.48,h=(n()-.5)*.48,c=.3+n()*.4,l=.022+n()*.026,u=.07+n()*.18,d=Math.cos(o),f=Math.sin(o),g=(m,x,_)=>[a+d*x*_+f*u*m*m,m*c,h+f*x*_-d*u*m*m],v=[g(0,-1,l),g(0,1,l),g(.57,-1,l*.6),g(.57,1,l*.6),g(1,0,0)],p=[[0,0],[1,0],[0,.57],[1,.57],[.5,1]];for(let m of[0,1,2,1,3,2,2,3,4])i.push(...v[m]),e.push(f*.35,.94,-d*.35),t.push(...p[m])}let s=new it;return s.setAttribute("position",new Me(i,3)),s.setAttribute("normal",new Me(e,3)),s.setAttribute("uv",new Me(t,2)),s}function gM(){let i=[],e=[],t=[];for(let s=0;s<2;s++){let r=s*Math.PI/2;for(let[o,a,h,c]of[[-.52,0,0,0],[.52,0,1,0],[-.52,.76,0,1],[.52,0,1,0],[.52,.76,1,1],[-.52,.76,0,1]])i.push(Math.cos(r)*o,a,Math.sin(r)*o),t.push(0,1,0),e.push(h,c)}let n=new it;return n.setAttribute("position",new Me(i,3)),n.setAttribute("normal",new Me(t,3)),n.setAttribute("uv",new Me(e,2)),n}function vM(){if(typeof document>"u"||!document.createElement){let n=new Ts(new Uint8Array([100,125,82,0]),1,1,Pn);return n.colorSpace=Kt,n.needsUpdate=!0,n}let i=document.createElement("canvas");i.width=1024,i.height=256;let e=i.getContext("2d");for(let n=0;n<4;n++){let s=Mo(381+n*17),r=n*256;for(let o=0;o<23;o++){let a=r+37+s()*182,h=62+s()*158,c=(s()-.5)*96,l=2.5+s()*4.4,u=e.createLinearGradient(0,256,0,256-h);if(u.addColorStop(0,"#ededed"),u.addColorStop(.52,"#f7f7f7"),u.addColorStop(1,"#ffffff"),e.fillStyle=u,e.beginPath(),e.moveTo(a-l,256),e.quadraticCurveTo(a-l+c*.2,256-h*.6,a+c,256-h),e.quadraticCurveTo(a+l+c*.42,256-h*.47,a+l,256),e.fill(),n===3&&o%5===0){e.fillStyle="#ebe6cf";for(let d=0;d<5;d++){let f=d*Math.PI*2/5;e.beginPath(),e.ellipse(a+c+Math.cos(f)*3.5,256-h+Math.sin(f)*3.5,3,2.1,f,0,Math.PI*2),e.fill()}}}}let t=new rs(i);return t.colorSpace=Kt,t.anisotropy=4,t}var xM=`
  #include <common>
  #include <shadowmap_pars_vertex>
  uniform float uTime, uMode, uNearStart, uNearEnd, uMaxDistance;
  varying vec2 vUv;
  varying vec3 vTint, vWorld, vNormal;
  varying float vFade, vHeight;
  float noiseRoot(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  void main() {
    vec4 root = modelMatrix * instanceMatrix * vec4(0.,0.,0.,1.);
    float distanceToCamera = length(root.xz - cameraPosition.xz);
    float lod = smoothstep(uNearStart, uNearEnd, distanceToCamera);
    float cutoff = noiseRoot(root.xz);
    float nearWeight = 1. - smoothstep(cutoff - .12, cutoff + .12, lod);
    if (lod < .001) nearWeight = 1.;
    if (lod > .999) nearWeight = 0.;
    vFade = mix(nearWeight, 1.-nearWeight, uMode) * (1.-smoothstep(uMaxDistance-15.,uMaxDistance,distanceToCamera));
    vec3 displaced = position;
    float wind = sin(uTime * 1.45 + root.x * .19 + root.z * .14) * .085;
    wind += sin(uTime * 2.7 + root.z * .43) * .028;
    displaced.x += wind * position.y * position.y;
    displaced.z += wind * .45 * position.y * position.y;
    vec4 world = modelMatrix * instanceMatrix * vec4(displaced,1.);
    vWorld = world.xyz;
    vHeight = clamp(position.y / .9, 0., 1.);
    vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);
    vUv = uv;
    if (uMode > .5) vUv.x = (vUv.x + floor(noiseRoot(root.zx + 7.) * 4.)) * .25;
    vTint = vec3(1.);
    #ifdef USE_INSTANCING_COLOR
      vTint = instanceColor;
    #endif
    gl_Position = projectionMatrix * viewMatrix * world;
    vec4 worldPosition=world;
    vec3 transformedNormal=normalize(mat3(viewMatrix)*vNormal);
    #include <shadowmap_vertex>
  }
`,yM=`
  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
  uniform sampler2D uAtlas;
  uniform float uMode, uFogNear, uFogFar, uFogDensity, uDayLight;
  uniform vec3 uFogColor,uSunDir,uLightColor;
  varying vec2 vUv;
  varying vec3 vTint, vWorld, vNormal;
  varying float vFade, vHeight;
  float threshold(vec3 p) { return fract(sin(dot(floor(p * 31.), vec3(127.1,311.7,74.7))) * 43758.5453); }
  void main() {
    if (vFade < .005 || threshold(vWorld) > vFade) discard;
    vec4 texel = vec4(1.);
    if (uMode > .5) { texel = texture2D(uAtlas, vUv); if(texel.a < .42) discard; }
    float sun = .57 + abs(dot(normalize(vNormal),uSunDir)) * .36;
    vec3 rootTone = vec3(.69,.76,.62);
    vec3 tipTone = vec3(1.02,1.10,.94);
    vec3 bladeTone = mix(rootTone, tipTone, smoothstep(.02,.88,vHeight));
    float atlasLuma = dot(texel.rgb, vec3(.299,.587,.114));
    float atlasShade = uMode > .5 ? mix(.94,1.04,clamp((atlasLuma-.88)/.12,0.,1.)) : 1.;
    float vein=1.-exp(-abs(vUv.x-.5)*34.)*.08;
    vec3 color = vTint * vec3(atlasShade*vein) * bladeTone * sun * (.38+.62*getShadowMask()) * vec3(1.36);
    color *= mix(vec3(.075,.11,.18),mix(vec3(1.),uLightColor,.42),uDayLight);
    float d = length(cameraPosition - vWorld);
    float fog = uFogDensity > 0. ? 1. - exp(-uFogDensity*uFogDensity*d*d) : smoothstep(uFogNear,uFogFar,d);
    gl_FragColor = vec4(mix(color,uFogColor,clamp(fog,0.,1.)),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,bh=class{constructor(e,t,{quality:n="high"}={}){this.scene=e,this.world=t,this.seed=uM(t.seed??1),this.quality=yh[n]?n:"high",this.config=yh[this.quality],this.grassCells=new Map,this.propCells=new Map,this.harvested=new Set,this.colliderBuckets=new Map,this.propsById=new Map,this.grassQueue=[],this.propQueue=[],this.grassJob=null,this.propJob=null,this.batchMeshes=new Map,this.prototypes=[],this.streamBudget=typeof document>"u"?160:1200,this.streamMs=8,this.frame=0,this.lastPlan=-1/0,this.lastRebuild=-1/0,this.propsDirty=!0,this.lastPosition=new R(1/0,0,1/0),this.lastBatchPosition=new R(1/0,0,1/0),this.frustum=new As,this.projection=new Ke,this.matrix=new Ke,this.rotation=new Rt,this.scale=new R,this.position=new R,this.color=new se,this.atlas=vM(),this.blades=mM(),this.cards=gM(),this.grassMaterials=[0,1].map(s=>new Qt({lights:!0,uniforms:eh.merge([ye.lights,{uTime:{value:0},uDayLight:{value:1},uSunDir:{value:new R(-.7,.6,.22).normalize()},uLightColor:{value:new se("#fff6df")},uMode:{value:s},uNearStart:{value:this.config.nearStart},uNearEnd:{value:this.config.nearEnd},uMaxDistance:{value:this.config.grassRange},uAtlas:{value:this.atlas},uFogColor:{value:e.fog?.color||new se("#c4d5db")},uFogNear:{value:e.fog?.near||130},uFogFar:{value:e.fog?.far||700},uFogDensity:{value:e.fog?.isFogExp2?e.fog.density:0}}]),vertexShader:xM,fragmentShader:yM,side:jt,transparent:!1,depthWrite:!0})),this.propMaterial=Dd("bark"),this.rockMaterial=Dd("rock"),this.berryBatches=new Map,this.berryPrototypes=[qm(0),qm(1)],this.berryMaterial=new yt({vertexColors:!0,roughness:1,flatShading:!0}),this.berryMaterial.onBeforeCompile=s=>{s.vertexShader=`varying float berryFade;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 berryRoot=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;berryFade=1.-smoothstep(25.,43.,length(berryRoot.xz-cameraPosition.xz));`),s.fragmentShader=`varying float berryFade;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
if(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>berryFade)discard;`)},this.leafTextures=[Ld(),Ld(!0)],this.foliageBatches=new Map,this.foliagePrototypes=[],this.leafTime={value:0},this.leafMaterials=this.leafTextures.map(s=>{let r=new yt({map:s,vertexColors:!0,roughness:.95,side:jt,alphaTest:.42,alphaToCoverage:!0});return r.onBeforeCompile=o=>{o.uniforms.leafTime=this.leafTime,o.vertexShader=`attribute float leafDetail;
varying float vLeafFade;
varying float vLeafDistance;
uniform float leafTime;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(leafTime*1.4+position.y*3.+position.x*2.)*.028;
vec3 leafRoot=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
vLeafDistance=length(leafRoot.xz-cameraPosition.xz);
vLeafFade=1.-leafDetail*smoothstep(40.,57.,vLeafDistance);`),o.fragmentShader=`varying float vLeafFade;
varying float vLeafDistance;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`float leafCutoff=mix(.42,.055,smoothstep(24.,85.,vLeafDistance));
float leafAlphaWidth=max(fwidth(diffuseColor.a),.015);
diffuseColor.a=smoothstep(leafCutoff-leafAlphaWidth,leafCutoff+leafAlphaWidth,diffuseColor.a);
if(diffuseColor.a<.01)discard;`),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
if(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>vLeafFade)discard;
diffuseColor.rgb*=.98;`)},r.customProgramCacheKey=()=>"vallon-leaves-v3",r}),this.pineMaterial=new yt({vertexColors:!0,roughness:.95}),this.propRange={value:this.config.propRange};for(let s of[this.propMaterial,this.rockMaterial,this.pineMaterial,...this.leafMaterials])vh(s,this.propRange);for(let s=0;s<3;s++)this.foliagePrototypes.push(xh(s,!1),xh(s,!0));for(let s=0;s<3;s++)this.prototypes.push(dM(s));for(let s=0;s<3;s++)this.prototypes.push(fM(s));for(let s=0;s<2;s++)this.prototypes.push(pM(s));this.stats={grassTufts:0,grassBlades:0,grassCells:0,visibleGrassCells:0,trees:0,rocks:0,bushes:0,props:0,queuedCells:0,drawCalls:0}}setQuality(e){if(!(!yh[e]||this.quality===e)){this.quality=e,this.config=yh[e],this.propRange.value=this.config.propRange;for(let t of this.grassCells.values())this.disposeGrassCell(t);this.grassCells.clear(),this.grassQueue.length=0,this.grassJob=null,this.lastPlan=-1/0,this.propsDirty=!0;for(let t of this.grassMaterials)t.uniforms.uNearStart.value=this.config.nearStart,t.uniforms.uNearEnd.value=this.config.nearEnd,t.uniforms.uMaxDistance.value=this.config.grassRange}}plan(e,t){let n=e.position.x,s=e.position.z,r=(h,c,l)=>{let u=[],d=Math.floor(n/h),f=Math.floor(s/h),g=Math.ceil(c/h);for(let v=f-g;v<=f+g;v++)for(let p=d-g;p<=d+g;p++){let m=(p+.5)*h-n,x=(v+.5)*h-s,_=Math.hypot(m,x),y=Ud(p,v);_<c+h*.71&&!l.has(y)&&u.push({x:p,z:v,key:y,distance:_})}return u.sort((v,p)=>v.distance-p.distance),u},o=new Set(this.grassCells.keys()),a=new Set(this.propCells.keys());this.grassJob&&o.add(this.grassJob.key),this.propJob&&a.add(this.propJob.key),this.grassQueue=r(ln,this.config.grassRange,o),this.propQueue=r(qn,this.config.propRange,a),this.grassJob&&Math.hypot((this.grassJob.x+.5)*ln-n,(this.grassJob.z+.5)*ln-s)>this.config.grassRange+42&&(this.grassJob=null),this.propJob&&Math.hypot((this.propJob.x+.5)*qn-n,(this.propJob.z+.5)*qn-s)>this.config.propRange+75&&(this.propJob=null);for(let[h,c]of this.grassCells)Math.hypot(c.cx-n,c.cz-s)>this.config.grassRange+42&&(this.disposeGrassCell(c),this.grassCells.delete(h));for(let[h,c]of this.propCells)if(Math.hypot(c.cx-n,c.cz-s)>this.config.propRange+75){for(let l of c.props)this.removeCollider(l);this.propCells.delete(h),this.propsDirty=!0}this.lastPlan=t,this.lastPosition.copy(e.position)}createGrassCell(e,t=1/0){let{x:n,z:s,key:r}=e,o=Math.ceil(ln*ln*this.config.density),a=e.job||={rng:Mo(bo(n,s,this.seed+521)*4294967295>>>0),records:[],index:0,minY:1/0,maxY:-1/0},h=0;for(;a.index<o&&h<t;a.index++,h++){let g=a.index,v=(n+a.rng())*ln,p=(s+a.rng())*ln,m=this.world.sample(v,p),x=m.grass??(m.biome==="rock"?.03:m.biome==="alpine"?.35:1),_=Nd(x*(1-(m.path||0)*.98)*(1-Nd((m.slope-.48)/.52,0,1)),0,1);if(a.rng()>_||m.riverDistance!=null&&m.riverDistance<2.8)continue;let y=(.65+a.rng()*.73)*(.7+(this.world.noise?.(v/9,p/9)||.5)*.52),T={x:v,y:m.height??this.world.height(v,p),z:p,scale:y*(m.biome==="steppe"?.8:m.biome==="wetland"?1.4:1+(m.flora>.52?.45:0)),yaw:a.rng()*Math.PI*2,hue:a.rng(),moisture:m.moisture??.6,flora:m.flora??.5,canopy:m.canopy||0,biome:m.biome};a.records.push(T),a.minY=Math.min(a.minY,T.y),a.maxY=Math.max(a.maxY,T.y+1.5)}if(a.index<o)return{done:!1,used:h};let{records:c}=a,{minY:l,maxY:u}=a,d=[this.blades,this.cards].map((g,v)=>{let p=new en(g,this.grassMaterials[v],c.length||1);p.count=c.length,p.castShadow=!1,p.receiveShadow=!0,p.frustumCulled=!1,p.name=v?"Herbe \u2014 cartes crois\xE9es LOD":"Herbe \u2014 brins courbes instanci\xE9s";for(let m=0;m<c.length;m++){let x=c[m];this.position.set(x.x,x.y-.018,x.z),this.rotation.setFromAxisAngle(vt.DEFAULT_UP,x.yaw),this.scale.setScalar(this.covered?.(x.x,x.z,x.y)?0:x.scale),this.matrix.compose(this.position,this.rotation,this.scale),p.setMatrixAt(m,this.matrix),Id(x,x.hue,this.color),p.setColorAt(m,this.color)}return p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0),this.scene.add(p),p});Number.isFinite(l)||(l=u=this.world.height((n+.5)*ln,(s+.5)*ln));let f=Ln((n+.5)*ln,(l+u)/2,(s+.5)*ln);return this.grassCells.set(r,{meshes:d,records:c,count:c.length,cx:f.x,cz:f.z,sphere:new Wn(f,Math.hypot(ln*.73,(u-l)/2))}),{done:!0,used:h}}distantTrees(e,t){let n=Mo(bo(e,t,this.seed+1187)*4294967295>>>0),s=[];for(let r=0;r<25;r++){let o=(e+(r%5+.18+n()*.64)/5)*qn,a=(t+(Math.floor(r/5)+.18+n()*.64)/5)*qn,h=this.world.sample(o,a);if(Number.isFinite(this.world.waterLevel?.(o,a)))continue;let c=n(),l=n(),u=n(),d=n()*Math.PI*2,f=Xm(this.world,o,a,h,l);f.valid&&c<f.density&&s.push({id:`tree:${e},${t}:${r%5}:${Math.floor(r/5)}`,prototype:f.species,x:o,z:a,baseY:h.height,scale:(.71+u*.7)*(1+(h.canopy||0)*.3),rotation:d})}return s}createPropCell(e,t=1/0){let{x:n,z:s,key:r}=e,o=e.job||={rng:Mo(bo(n,s,this.seed+1187)*4294967295>>>0),props:[],index:0},a=o.rng,h=o.props,c=(u,d,f,g,v,p,m,x)=>{if(this.harvested.has(m))return;let _={id:m,type:u,prototype:d,x:f,z:g,baseY:v.height??this.world.height(f,g),scale:p,rotation:x,radius:u==="tree"?(d===2?.25:.39)*p:u==="rock"?1.12*p:0,height:(u==="tree"?9.3:u==="rock"?1.65:1.5)*p};u==="bush"&&bo(Math.round(f*13),Math.round(g*13),this.seed+2041)<(v.biome==="forest"?.52:v.biome==="meadow"?.4:.22)&&(_.berrySpecies=d-6,_.berryCount=3+Math.floor(bo(Math.round(f*7),Math.round(g*7),this.seed+921)*4),_.radius=.9*p);let y=gh(_);if(_.radius*=Math.max(y.x,y.z),_.height*=y.y,u==="rock"){let T=this.prototypes[d];T.boundingBox||T.computeBoundingBox();let w=T.boundingBox.clone().applyMatrix4(xo(_,this.matrix));_.height=w.max.y-_.baseY}u==="tree"&&(_.radius+=.035),h.push(_)},l=0;for(;o.index<56&&l<t;o.index++,l++){let u=o.index,d,f;if(u<25){let K=u%5,G=Math.floor(u/5);d=(n+(K+.18+a()*.64)/5)*qn,f=(s+(G+.18+a()*.64)/5)*qn}else d=(n+a())*qn,f=(s+a())*qn;let g=this.world.sample(d,f);if(Number.isFinite(this.world.waterLevel?.(d,f)))continue;let v=g.coverType||g.biome,p=a(),m,x;u<25?(m=a(),x=a()):(x=a(),m=Math.floor(a()*3));let _=a()*Math.PI*2,y=Xm(this.world,d,f,g,m),T=y.density,w=this.world.spawn||{x:0,z:100},C=this.world.panorama;if(C&&Math.hypot(d-C.x,f-C.z)<(u<25?18:8)||Math.hypot(d-w.x,f-w.z)<5||this.world.caveEntrance&&Math.hypot(d-this.world.caveEntrance.x,f-this.world.caveEntrance.z)<6||(g.path||0)>.18||g.slope>.62||g.riverDistance!=null&&g.riverDistance<5.5)continue;if(u<25&&p<T){let K=y.species;c("tree",K,d,f,g,(.71+x*.7)*(1+(g.canopy||0)*.3),`tree:${r}:${u%5}:${Math.floor(u/5)}`,_)}if(u<25)continue;let I=p,S=x,b=m,A=_;if((g.path||0)>.24||g.riverDistance!=null&&g.riverDistance<3||g.slope>.95)continue;let L=_h(.49,.7,this.world.noise(d/82+91,f/82-37)),U=_h(.18,.46,g.slope)*(1-_h(.76,.94,g.slope)),k=_h(112,170,g.height),B=g.bedrock||0,H=Math.min(.3,.05+k*.045+U*.12+B*.055+(g.exposure||0)*.04)*(.3+L*.7);I<H?c("rock",3+b,d,f,g,.38+S*S*1.12,`rock:${r}:${u-25}`,A):I<H+(v==="forest"?.45:v==="meadow"?.3:.12)&&g.slope<.65&&c("bush",6+b%2,d,f,g,.65+S*.8,`bush:${r}:${u-25}`,A)}if(o.index<56)return{done:!1,used:l};for(let u of h)this.harvested.has(u.id)||(this.propsById.set(u.id,u),(u.type!=="bush"||u.berrySpecies!=null)&&this.addCollider(u));return this.propCells.set(r,{props:h,cx:(n+.5)*qn,cz:(s+.5)*qn}),this.propsDirty=!0,{done:!0,used:l}}addCollider(e){let t=Ud(Math.floor(e.x/yo),Math.floor(e.z/yo)),n=this.colliderBuckets.get(t);n||(n=new Map,this.colliderBuckets.set(t,n)),n.set(e.id,e),e.bucket=t}removeCollider(e){let t=this.colliderBuckets.get(e.bucket);t&&(t.delete(e.id),t.size||this.colliderBuckets.delete(e.bucket)),this.propsById.delete(e.id)}queryColliders(e,t,n=1,{includeBushes:s=!1}={}){let r=[],o=n+5;for(let a=Math.floor((t-o)/yo);a<=Math.floor((t+o)/yo);a++)for(let h=Math.floor((e-o)/yo);h<=Math.floor((e+o)/yo);h++){let c=this.colliderBuckets.get(Ud(h,a));if(c)for(let l of c.values())(l.type!=="bush"||s)&&Math.hypot(e-l.x,t-l.z)<n+l.radius&&r.push(l)}return r}harvest(e){let t=this.propsById.get(e);return!t||t.type==="bush"&&t.berrySpecies==null||this.harvested.has(e)?null:(this.harvested.add(e),this.removeCollider(t),this.propsDirty=!0,t.type==="tree"?"wood":t.type==="bush"?"berries":"stone")}setRemoved(e){if(e)for(let t of e){if(typeof t!="string"||this.harvested.has(t))continue;this.harvested.add(t);let n=this.propsById.get(t);n&&this.removeCollider(n),this.propsDirty=!0}}rebuildProps(e){let t=Array.from({length:16},()=>[]),n=0,s=0,r=0;for(let o of this.propCells.values())for(let a of o.props){let h=Math.hypot(a.x-e.position.x,a.z-e.position.z);if(this.harvested.has(a.id)||h>this.config.propRange+20)continue;let c=this.quality!=="low"&&h<58;t[a.prototype*2+(c?0:1)].push(a),a.type==="tree"?n++:a.type==="rock"?s++:r++}for(let o=0;o<t.length;o++){let a=t[o],h=this.batchMeshes.get(o);if(!h||h.instanceMatrix.count<a.length){h&&(this.scene.remove(h),h.dispose());let c=Math.floor(o/2),l=c<3?this.propMaterial:c<6?this.rockMaterial:this.leafMaterials[0];h=new en(this.prototypes[c],l,Math.max(16,2**Math.ceil(Math.log2(Math.max(1,a.length))))),h.castShadow=o<12,h.receiveShadow=!0,h.name=`Props proc\xE9duraux ${o}`,this.scene.add(h),this.batchMeshes.set(o,h)}h.count=a.length,h.visible=a.length>0;for(let c=0;c<a.length;c++){let l=a[c];xo(l,this.matrix),h.setMatrixAt(c,this.matrix),La(l,this.color),h.setColorAt(c,this.color)}if(h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.computeBoundingSphere(),o<6){let c=this.foliageBatches.get(o);(!c||c.instanceMatrix.count<a.length)&&(c&&(this.scene.remove(c),c.dispose()),c=new en(this.foliagePrototypes[o],this.leafMaterials[Math.floor(o/2)===1?1:0],h.instanceMatrix.count),c.castShadow=!0,c.receiveShadow=!0,c.name=`Feuillage d\xE9coup\xE9 ${o}`,this.scene.add(c),this.foliageBatches.set(o,c)),c.count=a.length,c.visible=a.length>0;for(let l=0;l<a.length;l++)h.getMatrixAt(l,this.matrix),c.setMatrixAt(l,this.matrix),La(a[l],this.color,!0),c.setColorAt(l,this.color);c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c.computeBoundingSphere()}if(o>=12){let c=a.filter(u=>u.berrySpecies!=null&&Math.hypot(u.x-e.position.x,u.z-e.position.z)<58),l=this.berryBatches.get(o);(!l||l.instanceMatrix.count<c.length)&&(l&&(this.scene.remove(l),l.dispose()),l=new en(this.berryPrototypes[Math.floor(o/2)-6],this.berryMaterial,Math.max(16,2**Math.ceil(Math.log2(Math.max(1,c.length))))),l.receiveShadow=!0,l.name="Baies \xB7 fruits instanci\xE9s",this.scene.add(l),this.berryBatches.set(o,l)),l.count=c.length,l.visible=c.length>0;for(let u=0;u<c.length;u++){let d=c[u];xo(d,this.matrix),l.setMatrixAt(u,this.matrix)}l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere()}}this.stats.trees=n,this.stats.rocks=s,this.stats.bushes=r,this.stats.props=n+s+r,this.stats.berryBushes=[...this.propsById.values()].filter(o=>o.berrySpecies!=null&&!this.harvested.has(o.id)).length,this.propsDirty=!1,this.lastBatchPosition.copy(e.position)}update(e,t,n){this.frame++,this.leafTime.value=t,(t-this.lastPlan>.8||e.position.distanceToSquared(this.lastPosition)>100)&&this.plan(e,t);let s=performance.now(),r=this.streamBudget;do{if(!this.propJob&&this.propQueue.length&&(this.propJob=this.propQueue.shift()),!this.grassJob&&this.grassQueue.length&&(this.grassJob=this.grassQueue.shift()),this.propJob){let l=this.createPropCell(this.propJob,Math.min(32,r));r-=l.used,l.done&&(this.propJob=null)}if(this.grassJob&&r>0){let l=this.createGrassCell(this.grassJob,Math.min(128,r));r-=l.used,l.done&&(this.grassJob=null)}if(!this.propJob&&!this.grassJob&&!this.propQueue.length&&!this.grassQueue.length)break}while(r>0&&performance.now()-s<this.streamMs);e.position.distanceToSquared(this.lastBatchPosition)>144&&(this.propsDirty=!0),this.propsDirty&&(t-this.lastRebuild>.16||!this.propQueue.length)&&(this.rebuildProps(e),this.lastRebuild=t),e.updateMatrixWorld(),this.projection.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projection);let o=0,a=0,h=0,c=0;for(let l of this.grassMaterials)l.uniforms.uTime.value=t;for(let l of this.grassCells.values()){let u=Math.hypot(l.cx-e.position.x,l.cz-e.position.z),d=u<this.config.grassRange+ln*.71&&this.frustum.intersectsSphere(l.sphere);l.meshes[0].visible=d&&u<this.config.nearEnd+ln*.71,l.meshes[1].visible=d&&u>this.config.nearStart-ln*.71,d&&(o++,a+=l.count),l.meshes[0].visible&&(h+=l.count*7,c++),l.meshes[1].visible&&c++}for(let l of this.batchMeshes.values())l.visible&&c++;for(let l of this.foliageBatches.values())l.visible&&c++;for(let l of this.berryBatches.values())l.visible&&c++;this.stats.grassCells=this.grassCells.size,this.stats.visibleGrassCells=o,this.stats.grassTufts=a,this.stats.grassBlades=h,this.stats.drawCalls=c,this.stats.queuedCells=this.grassQueue.length+this.propQueue.length}disposeGrassCell(e){for(let t of e.meshes)this.scene.remove(t),t.dispose()}terrainChanged(e){let t=(n,s,r=0)=>n>=e.x-r&&n<=e.maxX+r&&s>=e.z-r&&s<=e.maxZ+r;for(let n of this.grassCells.values()){if(!t(n.cx,n.cz,ln))continue;let s=1/0,r=-1/0;for(let o=0;o<n.records.length;o++){let a=n.records[o],h=this.world.height(a.x,a.z),c=Math.abs(this.world.displacement?.(a.x,a.z)||0)>.12||this.covered?.(a.x,a.z,h);this.position.set(a.x,h-.018,a.z),this.rotation.setFromAxisAngle(vt.DEFAULT_UP,a.yaw),this.scale.setScalar(c?0:a.scale),this.matrix.compose(this.position,this.rotation,this.scale);for(let l of n.meshes)l.setMatrixAt(o,this.matrix);s=Math.min(s,h),r=Math.max(r,h+1.5)}for(let o of n.meshes)o.instanceMatrix.needsUpdate=!0;Number.isFinite(s)&&(n.sphere.center.y=(s+r)/2,n.sphere.radius=Math.hypot(ln*.73,(r-s)/2))}this.grassJob&&t((this.grassJob.x+.5)*ln,(this.grassJob.z+.5)*ln,ln)&&(this.grassJob=null),this.propJob&&t((this.propJob.x+.5)*qn,(this.propJob.z+.5)*qn,qn)&&(this.propJob=null);for(let n of this.propsById.values())t(n.x,n.z)&&(n.baseY=this.world.height(n.x,n.z),this.propsDirty=!0);this.lastPlan=-1/0}dispose(){for(let e of this.grassCells.values())this.disposeGrassCell(e);for(let e of this.batchMeshes.values())this.scene.remove(e),e.dispose();for(let e of this.foliageBatches.values())this.scene.remove(e),e.dispose();this.foliageBatches.clear();for(let e of this.berryBatches.values())this.scene.remove(e),e.dispose();this.berryBatches.clear();for(let e of this.berryPrototypes)e.dispose();this.berryMaterial.dispose(),this.grassCells.clear(),this.propCells.clear(),this.batchMeshes.clear(),this.colliderBuckets.clear(),this.propsById.clear(),this.harvested.clear(),this.grassQueue.length=this.propQueue.length=0,this.grassJob=this.propJob=null,this.blades.dispose(),this.cards.dispose(),this.atlas.dispose();for(let e of this.prototypes)e.dispose();for(let e of this.grassMaterials)e.dispose();this.propMaterial.dispose(),this.rockMaterial.dispose(),this.pineMaterial.dispose();for(let e of this.foliagePrototypes)e.dispose();for(let e of this.leafMaterials)e.dispose();for(let e of this.leafTextures)e.dispose()}};function $m(i,e,t,{player:n,floor:s,solid:r,start:o}){let a=new Ut,h=new Wt(68,1,.07,7e3);a.add(h),e.add(a);let c=new xa({color:7362624,flatShading:!0}),l=["left","right"].map(I=>{let S=new nt(new fi(1,1),c);return S.scale.set(.09,.105,.13),S.visible=!1,e.add(S),{side:I,mesh:S,anchor:new R,local:new R,touch:!1}}),u=document.createElement("button");u.textContent="Entrer en VR",u.title="Pousse sur le sol ou un obstacle avec les mains. Joystick droit : rotation par crans de 45\xB0.",u.style.cssText="position:fixed;right:18px;bottom:18px;z-index:10000;padding:12px 16px;background:#ead6a2;color:#253129;border:0;border-radius:6px;font:bold 15px system-ui",u.hidden=!0,document.body.append(u),i.xr.enabled=!0,i.xr.setReferenceSpaceType("local-floor"),i.xr.setFramebufferScaleFactor(.8),navigator.xr?.isSessionSupported("immersive-vr").then(I=>u.hidden=!I).catch(()=>{});let d,f=0,g=!1,v=new R(0,1,0),p=new R,m=new R,x=new R,_=new R,y=new R,T=new R,w=new R;function C(I,S){return S.copy(I).applyAxisAngle(v,f).add(a.position)}return u.onclick=async()=>{let I;try{I=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),await i.xr.setSession(I),i.xr.setFoveation(.7),u.hidden=!0,o()}catch(S){I&&await I.end().catch(()=>{}),u.textContent="VR indisponible",console.warn(S)}},i.xr.addEventListener("sessionend",()=>{d=null;for(let I of l)I.mesh.visible=!1,I.touch=!1;n().velocity.set(0,0,0),n().syncCamera(),u.hidden=!1}),{view:h,step(I,S){let b=i.xr.getReferenceSpace(),A=I&&b&&I.getViewerPose(b);if(!A)return!1;let L=A.transform.position;p.set(L.x,L.y,L.z);let U=n();if(d!==U){d=U,f=U.yaw||0,m.copy(p).applyAxisAngle(v,f),a.position.set(U.position.x-m.x,U.position.y,U.position.z-m.z),y.set(0,0,0),g=!1;for(let Z of l)Z.touch=!1}let k=[...I.session.inputSources],B=k.find(Z=>Z.handedness==="right"&&Z.gamepad?.mapping==="xr-standard")?.gamepad.axes[2]??0;if(Math.abs(B)<.3&&(g=!1),Math.abs(B)>.65&&!g){g=!0,C(p,x),f-=Math.sign(B)*Math.PI/4,C(p,m),a.position.add(T.subVectors(x,m)),y.set(0,0,0);for(let Z of l)Z.touch=!1}_.set(0,0,0);let H=0;for(let Z of l){let Ve=k.find(Ee=>Ee.handedness===Z.side&&Ee.gripSpace),Ze=Ve&&I.getPose(Ve.gripSpace,b);if(Z.mesh.visible=!!Ze,!Ze){Z.touch=!1;continue}let dt=Ze.transform.position;Z.local.set(dt.x,dt.y,dt.z),T.subVectors(Z.local,p).clampLength(0,1.35),Z.local.copy(p).add(T),C(Z.local,w);let Qe=s(w.x,w.z)+.085,J=r(w);Z.touch&&(w.distanceTo(Z.anchor)>.52||w.y>Qe+.17&&!J&&Z.anchor.y<Qe+.12)&&(Z.touch=!1),!Z.touch&&(w.y<=Qe||J)&&(Z.touch=!0,J&&Z.mesh.position.distanceTo(w)<.4?Z.anchor.copy(Z.mesh.position):Z.anchor.copy(w),w.y<=Qe&&(Z.anchor.y=Qe)),Z.touch&&(_.add(T.subVectors(Z.anchor,w)),H++);let ne=Ze.transform.orientation;Z.mesh.quaternion.set(ne.x,ne.y,ne.z,ne.w),Z.mesh.quaternion.premultiply(new Rt().setFromAxisAngle(v,f))}H?(_.multiplyScalar(1/H).clampLength(0,S*7),y.lerp(T.copy(_).multiplyScalar(1/Math.max(S,.008)),.37)):(y.y-=11*S,_.copy(y).multiplyScalar(S)),C(p,x);let K=x.x+_.x,G=x.z+_.z;(r(w.set(K,x.y,G))||s(K,G)>a.position.y+.52)&&(_.x=_.z=y.x=y.z=0),a.position.add(_),C(p,x);let oe=s(x.x,x.z);a.position.y<oe&&(a.position.y=oe,y.y=Math.max(0,y.y),H||(y.x*=Math.exp(-5*S),y.z*=Math.exp(-5*S)),C(p,x));for(let Z of l)Z.mesh.visible&&(Z.touch?Z.mesh.position.copy(Z.anchor):C(Z.local,Z.mesh.position));a.rotation.y=f,a.updateMatrixWorld(!0),U.position.set(x.x,a.position.y,x.z),U.velocity.copy(y),U.yaw=f,t.position.copy(x);let pe=A.transform.orientation;return t.quaternion.set(pe.x,pe.y,pe.z,pe.w),t.quaternion.premultiply(new Rt().setFromAxisAngle(v,f)),t.updateMatrixWorld(),!0}}}var zd=(i,e,t)=>Math.max(e,Math.min(t,i)),Mh=class{constructor(){this.phase=0,this.motion=0,this.kick=0,this.trauma=0,this.age=0}impact(e=.5){this.kick=Math.min(1,this.kick+e*.7),this.trauma=Math.min(1,this.trauma+e*.35)}reset(){this.phase=this.motion=this.kick=this.trauma=this.age=0}sample(e,t,n,s,r=1){return e>0&&(e=Math.min(.12,e),this.age+=e,this.motion+=(zd(t/4.5,0,1)*(n?1:0)-this.motion)*(1-Math.exp(-e*12)),this.phase+=e*(s?14:10)*zd(t/4.5,0,1.5),this.kick*=Math.exp(-e*14),this.trauma*=Math.exp(-e*10)),r=zd(r,0,1),r===0?{y:0,roll:0,pitch:0,fov:0}:{y:(Math.sin(this.phase*2)*.013*this.motion-this.kick*.025)*r,roll:(Math.sin(this.phase)*.006*this.motion+Math.sin(this.age*55)*this.trauma*.008)*r,pitch:(this.kick*.027+Math.sin(this.age*61)*this.trauma*.003)*r,fov:(s?7:0)*r}}};var _M=1/90,pi=1450,oi=.002,bM=Math.tan(44*Math.PI/180),So=class{constructor(e,t,n=()=>[]){this.camera=e,this.world=t,this.colliderProvider=n,this.radius=.27,this.eyeHeight=1.58,this.bodyHeight=1.7,this.feel=new Mh,this.motionScale=.65,this.stepHeight=.45,this.position=new R,this.velocity=new R,this.yaw=0,this.pitch=-.05,this.grounded=!0,this.baseFov=e.fov||72,this._jumpHeld=!1,this._colliders=[],this._sprinting=!1;let s=t.spawn||{x:0,z:0};this.teleport(s.x||0,s.z||0)}_height(e,t){let n=this.world.height(e,t);return Number.isFinite(n)?n:0}teleport(e,t){this.position.set(at.clamp(e,-pi+this.radius,pi-this.radius),0,at.clamp(t,-pi+this.radius,pi-this.radius)),this.position.y=this._height(this.position.x,this.position.z),this.velocity.set(0,0,0),this.grounded=!0,this._jumpHeld=!1,this.feel.reset(),this.syncCamera()}look(e,t,n=1){this.yaw-=e*.0022*n,this.pitch=at.clamp(this.pitch-t*.0022*n,-1.47,1.47),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}resetInput(){this._jumpHeld=!1,this._sprinting=!1,this.velocity.x=0,this.velocity.z=0}push(e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.07));for(let s=0;s<n;s++){let r=this.position.x,o=this.position.z,a=at.clamp(r+e/n,-pi+this.radius,pi-this.radius),h=at.clamp(o+t/n,-pi+this.radius,pi-this.radius);this._colliders=this.colliderProvider(r,o,this.radius+.2)||[],this._moveHorizontal(a-r,h-o);let c=this._support(this.position.x,this.position.z,this.position.y+(this.grounded?this.stepHeight:0));this.grounded&&c<=this.position.y+this.stepHeight&&c>=this.position.y-.35&&(this.position.y=c)}this.syncCamera()}syncCamera(e=0){let t=this.feel.sample(e,Math.hypot(this.velocity.x,this.velocity.z),this.grounded,this._sprinting,this.motionScale);this.camera.position.copy(this.position),this.camera.position.y+=this.eyeHeight+t.y,this.camera.rotation.set(this.pitch+t.pitch,this.yaw,t.roll,"YXZ");let n=this.baseFov+t.fov,s=e>0?at.damp(this.camera.fov,n,6,e):n;Math.abs(this.camera.fov-s)>1e-4&&(this.camera.fov=s,this.camera.updateProjectionMatrix())}impact(e=.5){this.feel.impact(e)}update(e,t=new Set,{sprint:n=!1,speedFactor:s=1,repeatJump:r=!1}={}){let o=t.has("Space"),a=o&&(!this._jumpHeld||r&&this.grounded);if(this._jumpHeld=o,!Number.isFinite(e)||e<=0)return;e=Math.min(e,.12);let h=Number(t.has("KeyW")||t.has("KeyZ"))-Number(t.has("KeyS")),c=Number(t.has("KeyD"))-Number(t.has("KeyA")||t.has("KeyQ")),l=Math.hypot(h,c)||1;this._sprinting=!!(h||c)&&(n||t.has("ShiftLeft")||t.has("ShiftRight"));let u=this.world.waterLevel?.(this.position.x,this.position.z),f=(Number.isFinite(u)&&this._height(this.position.x,this.position.z)<u-this.eyeHeight?this._sprinting?3.8:2.6:this._sprinting?10.5:4.5)*Math.max(.3,Math.min(1,s)),g=Math.sin(this.yaw),v=Math.cos(this.yaw),p=(c*v-h*g)/l*f,m=(-h*v-c*g)/l*f;a&&this.grounded&&(this.impact(.25),this.velocity.y=7.2,this.grounded=!1);let x=Math.ceil(e/_M),_=e/x,y=Math.max(0,-this.velocity.y),T=this.grounded;for(let w=0;w<x;w++)this._step(_,p,m);!T&&this.grounded&&y>2&&this.impact(Math.min(.8,y/16)),this.syncCamera(e)}_overlaps(e,t,n){if(n.type==="block"){let r=(n.width||1)/2,o=(n.depth||1)/2,a=at.clamp(e,n.x-r,n.x+r),h=at.clamp(t,n.z-o,n.z+o);return(e-a)**2+(t-h)**2<this.radius**2}let s=this.radius+(n.radius||0);return(e-n.x)**2+(t-n.z)**2<s**2}_base(e){return e.type==="block"?e.y||0:e.baseY||0}_top(e){return this._base(e)+(e.height||1)}_support(e,t,n){let s=this._height(e,t),r=this.world.waterLevel?.(e,t);Number.isFinite(r)&&(s=Math.max(s,r-this.eyeHeight+.22));for(let o of this._colliders){if(o.type==="entity"||!this._overlaps(e,t,o))continue;let a=this._top(o);a<=n+oi&&(s=Math.max(s,a))}return s}_canMove(e,t,n,s){let r=this._height(e,t),o=this._height(n,s),a=Math.hypot(e-n,t-s);if(r>o+a*bM+1e-4&&r>this.position.y+oi)return!1;let h=this.grounded?this.stepHeight:0;for(let c of this._colliders){if(!this._overlaps(e,t,c))continue;let l=this._top(c),u=this._base(c);if(!(this.position.y>=l-oi||this.position.y+this.bodyHeight<=u+oi)&&!(c.type!=="entity"&&l<=this.position.y+h+oi&&!this._colliders.some(f=>f!==c&&this._overlaps(e,t,f)&&this._base(f)<l+this.bodyHeight-oi&&this._top(f)>l+oi)))return!1}return!0}_moveHorizontal(e,t){let{x:n,z:s}=this.position;if(this._canMove(n+e,s+t,n,s)){this.position.x+=e,this.position.z+=t;return}let r=e,o=t;for(let a of this._colliders){if(a.type==="block"||!this._overlaps(n+e,s+t,a)||this.position.y>=this._top(a)-oi||this.position.y+this.bodyHeight<=this._base(a)+oi)continue;let h=Math.hypot(n-a.x,s-a.z);if(h<oi)continue;let c=(n-a.x)/h,l=(s-a.z)/h,u=r*c+o*l;u<0&&(r-=u*c,o-=u*l)}if(this._canMove(n+r,s+o,n,s)){this.position.x+=r,this.position.z+=o;return}this._canMove(n+e,s,n,s)&&(this.position.x+=e),this._canMove(this.position.x,s+t,this.position.x,s)&&(this.position.z+=t)}_step(e,t,n){let s=this.grounded?13:4.2;this.velocity.x=at.damp(this.velocity.x,t,s,e),this.velocity.z=at.damp(this.velocity.z,n,s,e);let{x:r,z:o}=this.position,a=this.radius+Math.hypot(this.velocity.x,this.velocity.z)*e+.5;this._colliders=this.colliderProvider(r,o,a)||[];let h=at.clamp(r+this.velocity.x*e,-pi+this.radius,pi-this.radius),c=at.clamp(o+this.velocity.z*e,-pi+this.radius,pi-this.radius);this._moveHorizontal(h-r,c-o),this.velocity.x=(this.position.x-r)/e,this.velocity.z=(this.position.z-o)/e;let l=this.position.y,u=this._support(this.position.x,this.position.z,l+(this.grounded?this.stepHeight:0));if(this.grounded&&u<=l+this.stepHeight+oi&&u>=l-.35){this.position.y=u,this.velocity.y=0;return}this.grounded=!1,this.velocity.y=Math.max(-38,this.velocity.y-21*e);let d=l+this.velocity.y*e;if(this.velocity.y>0)for(let f of this._colliders){if(!this._overlaps(this.position.x,this.position.z,f))continue;let g=this._base(f);l+this.bodyHeight<=g+oi&&d+this.bodyHeight>=g&&(d=g-this.bodyHeight,this.velocity.y=0)}this.velocity.y<=0&&d<=u+oi?(this.position.y=u,this.velocity.y=0,this.grounded=!0):this.position.y=d}};var pr=(i,e,t)=>Math.max(e,Math.min(t,i)),Zm=i=>i*i*(3-2*i),Eo=(i,e)=>`${i},${e}`;function Jm(i){let e=new Map,t=[],n=0;function s(d,f){let g=Math.floor(d),v=Math.floor(f),p=Zm(d-g),m=Zm(f-v),x=e.get(Eo(g,v))||0,_=e.get(Eo(g+1,v))||0,y=e.get(Eo(g,v+1))||0,T=e.get(Eo(g+1,v+1))||0;return(x+(_-x)*p)*(1-m)+(y+(T-y)*p)*m}let r=(d,f)=>i.height(d,f)+s(d,f);function o(d,f,g,v){let p=i.surface(d,f,g,v),m=pr(Math.abs(s(d,f))*1.6,0,1);return{...p,disturbance:m,grass:p.grass*(1-m)}}function a(d,f){let g=r(d,f),v=.6,p=Math.hypot((r(d+v,f)-r(d-v,f))/(2*v),(r(d,f+v)-r(d,f-v))/(2*v));return o(d,f,g,p)}function h(d,f,{mode:g="dig",radius:v=2.6,strength:p=.35,miningTier:m=4}={}){if(![d,f,v,p].every(Number.isFinite)||Math.abs(d)>1450||Math.abs(f)>1450||!["dig","raise","smooth"].includes(g))return null;v=pr(v,1.8,4),p=pr(p,.02,.45);let x=[],_=v;for(let T=Math.floor(f-_);T<=Math.ceil(f+_);T++)for(let w=Math.floor(d-_);w<=Math.ceil(d+_);w++){let C=((w-d)**2+(T-f)**2)/(_*_);if(C>=1)continue;let I=Eo(w,T),S=e.get(I)||0,b=(1-C)**3,A=(g==="dig"?-p:p)*b;if(g==="smooth"){let k=(r(w-1,T)+r(w+1,T)+r(w,T-1)+r(w,T+1))/4;A=pr((k-r(w,T))*.6,-p,p)*b}let L=m<2?-1.7:m<3?-5:-12,U=g==="raise"?pr(S+A,-12,12):S<L?S:pr(S+A,L,12);Math.abs(U-S)>1e-6&&x.push({k:I,before:S,after:U})}if(!x.length||e.size+x.filter(T=>!e.has(T.k)).length>3e4)return null;for(let T of x)e.set(T.k,T.after);let y={changes:x,mode:g,bounds:{x:d-_-2,z:f-_-2,maxX:d+_+2,maxZ:f+_+2}};return t.push(y),t.length>32&&t.shift(),n++,y}function c(){let d=t.pop();if(!d)return null;for(let f of d.changes)Math.abs(f.before)<1e-6?e.delete(f.k):e.set(f.k,f.before);return n++,d}function l(d){if(e.clear(),t.length=0,Array.isArray(d))for(let f of d.slice(0,3e4)){if(!Array.isArray(f)||f.length!==3)continue;let[g,v,p]=f;![g,v,p].every(Number.isFinite)||!Number.isInteger(g)||!Number.isInteger(v)||Math.abs(g)>1455||Math.abs(v)>1455||e.set(Eo(g,v),pr(p,-12,12))}n++}return{...i,height:r,sample:a,surface:o,waterLevel:(d,f)=>{if(!i.lakes)return i.waterLevel?.(d,f)??null;for(let g of i.lakes)if(Math.hypot((d-g.x)/g.rx,(f-g.z)/g.rz)<1&&r(d,f)<g.level)return g.level;return null},displacement:s,stroke:h,undo:c,restore:l,serialize:()=>[...e].map(([d,f])=>[...d.split(",").map(Number),f]),peekUndo:()=>t.at(-1),get editedCells(){return e.size},get revision(){return n},get undoCount(){return t.length}}}var Sh=class{constructor(e,t){this.root=new Ut,this.root.position.set(.38,-.36,-.65),this.root.scale.setScalar(.72),e.add(this.root),t.add(e),this.materials=[],this.geometries=[],this.models=[],this.swing=0,this.lightScale={value:1};let n=c=>{let l=new yt({color:c,roughness:.9,depthTest:!1,depthWrite:!1});return l.onBeforeCompile=u=>{u.uniforms.toolLightScale=this.lightScale,u.fragmentShader=`uniform float toolLightScale;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
reflectedLight.directDiffuse*=toolLightScale;reflectedLight.directSpecular*=toolLightScale;`)},l.customProgramCacheKey=()=>"vallon-held-tool",this.materials.push(l),l},s=n("#8c633f"),r=n("#aab5ae"),o=n("#99a49a"),a=n("#c29373");this.swordMaterial=n("#ac8154");let h=(c,l,u,d,f,g,v,p)=>{let m=new zn(l,u,d);this.geometries.push(m);let x=new nt(m,p);return x.position.set(f,g,v),x.renderOrder=100,x.frustumCulled=!1,c.add(x),x};this.pickHeads=[];for(let c of["hand","shovel","pick","wood","stone","clay","sword"]){let l=new Ut;if(l.name=c,c==="shovel"&&(h(l,.035,.56,.035,0,.24,-.05,s),h(l,.2,.23,.035,0,.6,-.05,r),h(l,.23,.035,.06,0,.49,-.03,r)),c==="pick"){let u=h(l,.038,.62,.042,0,.26,-.05,s);u.rotation.z=-.08,[[[-.24,-.04],[-.18,.07],[-.07,.105],[.09,.09],[.22,.005],[.26,-.1],[.08,.02],[-.09,.025]],[[-.27,-.1],[-.21,.05],[-.08,.11],[.08,.105],[.22,.04],[.29,-.11],[.17,-.035],[.06,.025],[-.07,.03],[-.18,-.02]],[[-.3,-.15],[-.24,.04],[-.09,.13],[.08,.12],[.23,.02],[.32,-.15],[.18,-.07],[.065,.025],[-.075,.03],[-.19,-.065]]].forEach((f,g)=>{let v=new Rs;f.forEach(([y,T],w)=>w?v.lineTo(y,T):v.moveTo(y,T)),v.closePath();let p=new er(v,{depth:.058,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.006});this.geometries.push(p);let m=n(["#87948d","#c2d1d5","#af93dc"][g]);m.flatShading=!0,m.roughness=g===0?.9:.4,m.metalness=g===0?.05:.45;let x=new nt(p,m);x.position.set(0,.58,-.08),x.renderOrder=100,x.frustumCulled=!1,l.add(x),this.pickHeads.push(x);let _=h(l,.062,.045,.061,0,.46-g*.055,-.05,m);_.userData.tier=g+2,this.pickHeads.push(_),x.userData.tier=g+2})}if(c==="sword"&&(h(l,.055,.22,.055,0,.17,-.05,s),h(l,.22,.04,.08,0,.3,-.05,r),h(l,.075,.55,.026,0,.6,-.05,this.swordMaterial),h(l,.03,.11,.026,0,.92,-.05,this.swordMaterial)),["wood","stone","clay"].includes(c)){let u=h(l,.23,.23,.23,0,.17,-.11,{wood:s,stone:o,clay:a}[c]);u.rotation.y=.25}l.rotation.set(-.12,0,-.35),this.root.add(l),this.models.push(l)}this.brushGeometry=new it,this.brushGeometry.setAttribute("position",new Ot(new Float32Array(195),3)),this.brush=new Qr(this.brushGeometry,new Bi({color:"#f4d58e",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1})),this.brush.renderOrder=98,this.brush.frustumCulled=!1,this.brush.visible=!1,t.add(this.brush)}setPickTier(e){this.pickHeads.forEach(t=>t.visible=t.userData.tier===e)}strike(){this.swing=1}setSwordTier(e){this.swordMaterial.color.set(["","#ac8154","#bdcacb","#b799e7"][e]||"#ac8154"),this.swordMaterial.emissive.set(e===3?"#513782":"#000000"),this.swordMaterial.emissiveIntensity=e===3?.2:0}update(e,t,n,s,r,o=!1,a=!1){this.lightScale.value=o?.035:1,this.root.visible=s&&n!=="hand",this.models.forEach(c=>c.visible=c.name===n),this.swing=Math.max(0,this.swing-e*4.5);let h=Math.sin(this.swing*Math.PI);this.root.position.set(.38-h*.09,-.36+Math.sin(t*8)*r*.012-h*.13,-.65-h*.12),this.root.rotation.set(-h*.65,h*.22,h*.08),a&&(this.root.position.set(.07,-.28,-.6),this.root.rotation.set(.15,.25,1.05))}showBrush(e,t,n,s){if(this.brush.visible=!!e,!e)return;let r=this.brushGeometry.getAttribute("position");for(let o=0;o<=64;o++){let a=o/64*Math.PI*2,h=e.x+Math.cos(a)*n,c=e.z+Math.sin(a)*n;r.setXYZ(o,h,t.height(h,c)+.05,c)}r.needsUpdate=!0,this.brush.material.color.set(s==="raise"?"#b8e0b2":s==="smooth"?"#a5d9df":"#f4d58e")}};function Eh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,h=new it,c=0;for(let l=0;l<i.length;++l){let u=i[l],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;h.addGroup(c,f,l),c+=f}}if(t){let l=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=i[d].attributes.position.count}h.setIndex(u)}for(let l in r){let u=Km(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;h.setAttribute(l,u)}for(let l in o){let u=o[l][0].length;if(u===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[l]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[l].length;++v)f.push(o[l][v][d]);let g=Km(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;h.morphAttributes[l].push(g)}}return h}function Km(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let l=i[c];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*t}let o=new e(r),a=new Ot(o,t,n),h=0;for(let c=0;c<i.length;++c){let l=i[c];if(l.isInterleavedBufferAttribute){let u=h/t;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<t;g++){let v=l.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(l.array,h);h+=l.count*t}return s!==void 0&&(a.gpuType=s),a}var MM=`
  uniform float time;
  attribute float waterDepth;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vWaterUv;
  varying vec4 vReflectionCoord;
  uniform mat4 uReflectionMatrix;
  float waveHeight(vec2 p,float t){
    return sin(p.x*.075+p.y*.031+t*1.25)*.032
      +sin(-p.x*.041+p.y*.092-t*.88)*.023
      +sin(p.x*.19-p.y*.14+t*1.7)*.009;
  }
  void main(){
    vec4 w=modelMatrix*vec4(position,1.);
    w.y+=waveHeight(w.xz,time);
    vWorld=w.xyz;
    vDepth=waterDepth;
    vWaterUv=uv;
    vReflectionCoord=uReflectionMatrix*vec4(w.xyz,1.);
    gl_Position=projectionMatrix*viewMatrix*w;
  }
`,SM=`
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vWaterUv;
  uniform float time,dayLight,uHasReflection;
  uniform vec3 sunDir,fogColor;
  uniform vec4 uReflectionLake;
  uniform sampler2D uReflectionTex;
  varying vec4 vReflectionCoord;

  float waveHeight(vec2 p,float t){
    return sin(p.x*.075+p.y*.031+t*1.25)*.032
      +sin(-p.x*.041+p.y*.092-t*.88)*.023
      +sin(p.x*.19-p.y*.14+t*1.7)*.009;
  }
  float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise21(vec2 p){
    vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
    return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),
      mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.,1.)),f.x),f.y);
  }
  vec3 skyRadiance(vec3 ray){
    float up=clamp(ray.y*.5+.5,0.,1.);
    vec3 sky=mix(vec3(.56,.68,.76),vec3(.13,.34,.57),pow(up,.72));
    float haze=exp(-max(ray.y,0.)*7.);
    sky=mix(sky,vec3(.72,.79,.81),haze*.32);
    vec2 cloudP=ray.xz/(.22+max(ray.y,.025)*.9);
    float cloud=noise21(cloudP*2.1+vec2(time*.012,-time*.006));
    cloud=smoothstep(.55,.78,cloud)*(1.-smoothstep(.03,.7,ray.y));
    sky=mix(sky,vec3(.83,.87,.87),cloud*.48);
    float sunGlow=pow(max(dot(ray,normalize(sunDir)),0.),72.);
    sky+=vec3(1.,.78,.52)*sunGlow*.75;
    return sky;
  }
  void main(){
    if(length(vWaterUv-.5)>.5)discard;
    vec2 p=vWorld.xz;
    vec2 eps=vec2(.7,0.);
    float h=waveHeight(p,time);
    float dx=(waveHeight(p+eps.xy,time)-waveHeight(p-eps.xy,time))/(2.*eps.x);
    float dz=(waveHeight(p+eps.yx,time)-waveHeight(p-eps.yx,time))/(2.*eps.x);
    // Additional short ripples bend highlights without displacing the collision surface.
    dx+=cos(p.x*.51+p.y*.32+time*2.4)*.012;
    dz+=cos(-p.x*.37+p.y*.61-time*2.1)*.012;
    vec3 n=normalize(vec3(-dx,1.,-dz));
    vec3 view=normalize(cameraPosition-vWorld);
    vec3 ray=reflect(-view,n);
    float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
    vec3 sky=skyRadiance(ray);
    vec2 reflectUv=vReflectionCoord.xy/max(vReflectionCoord.w,.0001);
    vec2 lakeDelta=(p-uReflectionLake.xy)/max(uReflectionLake.zw,vec2(1.));
    float inReflectionLake=1.-smoothstep(.96,1.04,length(lakeDelta));
    float inReflectionImage=step(0.,reflectUv.x)*step(reflectUv.x,1.)*
      step(0.,reflectUv.y)*step(reflectUv.y,1.)*step(.0001,vReflectionCoord.w);
    vec3 reflected=mix(sky,texture2D(uReflectionTex,reflectUv).rgb,
      uHasReflection*inReflectionLake*inReflectionImage);

    float depth=max(vDepth,0.);
    float deep=smoothstep(.15,5.5,depth);
    vec3 shallow=mix(vec3(.31,.55,.48),vec3(.055,.43,.47),smoothstep(.1,1.8,depth));
    vec3 bed=mix(shallow,vec3(.012,.115,.17),deep);
    float caustic=pow(max(0.,sin(p.x*.15+h*3.)*sin(p.y*.17-h*2.)),8.)*exp(-depth*.55);
    bed+=vec3(.15,.22,.13)*caustic;

    float rippleA=sin(p.x*.42+p.y*.19+time*1.3+h*3.);
    float rippleB=sin(-p.x*.16+p.y*.48-time*1.1);
    float ripple=smoothstep(.78,.98,rippleA*.58+rippleB*.42);
    vec3 water=mix(bed,reflected,.2+fresnel*.78);
    water=mix(water,vec3(.43,.68,.73),ripple*(.11+.23*fresnel));
    float spec=pow(max(dot(reflect(-normalize(sunDir),n),view),0.),150.);
    water+=vec3(1.,.88,.68)*spec*(.35+dayLight*.9);

    float shoreNoise=noise21(p*.19+vec2(time*.025,-time*.018));
    float shoreBand=1.-smoothstep(.16,.95,depth+(shoreNoise-.5)*.38+h*.7);
    float foamLine=smoothstep(.38,.78,sin(p.x*.12+p.y*.09+shoreNoise*3.5+time*.7));
    float foam=shoreBand*(.2+.48*foamLine);
    water=mix(water,vec3(.73,.82,.78),foam);

    water*=mix(.08,1.,dayLight);
    float d=length(cameraPosition-vWorld);
    water=mix(water,fogColor,1.-exp(-d*d*.00000008));
    gl_FragColor=vec4(water,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function EM(i){let e=[],t=(s,r,o)=>{let a=s;s=s.toNonIndexed(),a.dispose(),s.deleteAttribute("uv"),s.translate(...o);let h=new se(r),c=[];for(let l=0;l<s.attributes.position.count;l++)c.push(h.r,h.g,h.b);s.setAttribute("color",new Me(c,3)),e.push(s)};if(t(new Bn(.16,.24,5,5),i===2?"#bcb9a6":"#66523d",[0,2.5,0]),i===1)e.push(wM(!0));else for(let s=0;s<5;s++){let r=new Ii(i===2?1.45:1.85,7,5);r.scale(1,i===2?1.12:.83,1),t(r,s%2?"#64844e":"#527044",[Math.sin(s*2.4)*1.25,4.8+s*.42,Math.cos(s*2.4)*1.25])}let n=Eh(e);return e.forEach(s=>s.dispose()),n}function wM(i=!1){let e=[],t=[];for(let s=0;s<8;s++){let r=2+s*.73,o=(8.4-r)*.36,a=new os(o,1.9,i?7:11,1,!1),h=a.toNonIndexed(),c=h.attributes.position,l=new se(s%2?"#496c3a":"#3a5d35");for(let u=0;u<c.count;u++){let d=c.getX(u),f=c.getZ(u),g=1+Math.sin(d*3+f*2+s)*.085+Math.cos(f*5-s)*.04;e.push(d*g+Math.sin(s*2.3)*.1,c.getY(u)+r+.8,f*g),t.push(l.r,l.g,l.b)}h.dispose(),a.dispose()}let n=new it;return n.setAttribute("position",new Me(e,3)),n.setAttribute("color",new Me(t,3)),n.computeVertexNormals(),n}function TM(i){let e=[],t=[],n=(r,o,a,h,c,l=0)=>{let u=r.index?r.toNonIndexed():r;u.rotateY(l),u.translate(o,a,h);let d=u.attributes.position,f=new se(c);for(let g=0;g<d.count;g++)e.push(d.getX(g),d.getY(g),d.getZ(g)),t.push(f.r,f.g,f.b);u!==r&&u.dispose(),r.dispose()};n(new Bn(.007,.01,i===2?.65:.43,4),0,i===2?.325:.215,0,"#456934");for(let r=0;r<3;r++){let o=new Ii(.1,4,2);o.scale(.33,.16,1),o.rotateZ(.5),n(o,Math.sin(r*2.4)*.05,.1+r*.09,Math.cos(r*2.4)*.05,"#537b38",r*2.4)}if(i===2||i===4)for(let r=0;r<(i===4?5:7);r++)for(let o=0;o<4;o++)n(new Ii(.035*(1-r*.06),5,3),Math.sin(o*1.57+r)*.037,.35+r*.043,Math.cos(o*1.57+r)*.037,i===4?r%2?"#bd8f9e":"#965d7f":r%2?"#9f8bc6":"#7566a9");else if(i===5)for(let r=0;r<3;r++){let o=r*2.4,a=new Bn(.014,.012,.8+r*.07,4);n(a,Math.sin(o)*.04,.4,Math.cos(o)*.04,"#7a8844"),n(new Bn(.034,.026,.21,5),Math.sin(o)*.04,.82,Math.cos(o)*.04,"#867256")}else{let r=i===3?5:i?6:9;for(let o=0;o<r;o++){let a=o*Math.PI*2/r,h=new Ii(i===3?.065:.04,5,2);h.scale(.65,.16,1.5),n(h,Math.sin(a)*.062,.435,Math.cos(a)*.062,i===3?"#c96b52":i?"#edc950":"#f5f0d6",a)}n(new Ii(.027,7,3),0,.445,0,i===3?"#574536":"#b89c34")}let s=new it;return s.setAttribute("position",new Me(e,3)),s.setAttribute("color",new Me(t,3)),s.computeVertexNormals(),s}var wh=class{constructor(e,t,n){this.scene=e,this.world=t,this.vegetation=n,this.group=new Ut,e.add(this.group),this.last=-99,this.count=0,this.waterMaterial=new Qt({uniforms:{time:{value:0},dayLight:{value:1},sunDir:{value:new R(-.6,.27,-.7)},fogColor:{value:e.fog.color},uReflectionTex:{value:null},uReflectionMatrix:{value:new Ke},uHasReflection:{value:0},uReflectionLake:{value:new ct(0,0,1,1)}},vertexShader:MM,fragmentShader:SM}),this.waters=(t.lakes||[t.lake]).map((c,l)=>{let u=new Cn(c.rx*2,c.rz*2,l?32:96,l?24:128);u.rotateX(-Math.PI/2);let d=u.attributes.position,f=[];for(let v=0;v<d.count;v++)f.push(c.level-t.height(d.getX(v)+c.x,d.getZ(v)+c.z));u.setAttribute("waterDepth",new Me(f,1));let g=new nt(u,this.waterMaterial);return g.position.set(c.x,c.level,c.z),g.name=l?"\xC9tang \xB7 berges et caustiques":"Grand lac \xB7 reflets anim\xE9s",this.group.add(g),g}),this.water=this.waters[0];let s=new Cn(1e4,4e3,180,80);s.rotateX(-Math.PI/2);let r=s.attributes.position,o=[];for(let c=0;c<r.count;c++){let l=r.getX(c),u=r.getZ(c)-3850,d=240+Math.sin(l/630)*95+Math.cos(l/370)*75,f=(1-Math.abs(t.noise(l/180+17,u/180+31)*2-1))*170,g=at.smoothstep(-u,1850,2400),v=(d+f+t.noise(l/520,u/430)*240)*g;r.setXYZ(c,l,v-12,u);let p=new se("#697f8d").lerp(new se("#c1cbd0"),at.smoothstep(v,420,620)*.68);o.push(p.r,p.g,p.b)}s.setAttribute("color",new Me(o,3)),s.computeVertexNormals();let a=new yt({vertexColors:!0,flatShading:!0,roughness:1}),h=new nt(s,a);h.name="Massifs lointains \xB7 relief large",this.group.add(h),this.flowerMaterial=new yt({vertexColors:!0,flatShading:!0,side:jt,roughness:.9}),this.flowerMaterial.onBeforeCompile=c=>{c.uniforms.windTime=this.waterMaterial.uniforms.time,c.vertexShader=`uniform float windTime;varying float flowerFade;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 root=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;transformed.x+=sin(windTime*1.5+root.x*.3)*position.y*position.y*.06;flowerFade=1.-smoothstep(30.,43.,length(root.xz-cameraPosition.xz));`),c.fragmentShader=`varying float flowerFade;
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
if(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)>flowerFade)discard;`)},this.flowers=[0,1,2,3,4,5].map(c=>{let l=new en(TM(c),this.flowerMaterial,900);return l.count=0,l.receiveShadow=!0,this.group.add(l),l}),this.treeMaterial=vh(new yt({vertexColors:!0,flatShading:!0,roughness:1}),n.propRange,!0),this.forests=[0,1,2].map(c=>{let l=new en(EM(c),this.treeMaterial,6500);return l.count=0,this.group.add(l),l}),this.forestSphere=new Wn(new R,12),this.forest=this.forests[1],this.forestRecords=[],this.forestIndex=0,this.forestQueue=null,this.forestLast=-99}update(e,t,n){this.waterMaterial.uniforms.time.value=t,this.waterMaterial.uniforms.sunDir.value.copy(n);let s=new Ke,r=new Rt,o=new R,a=new R;this.forestQueue||(this.forestQueue=Array.from({length:3600},(l,u)=>({x:u%60-30,z:Math.floor(u/60)-30})).sort((l,u)=>Math.hypot(l.x*40-e.position.x,l.z*40-e.position.z)-Math.hypot(u.x*40-e.position.x,u.z*40-e.position.z)));let h=performance.now();for(let l=0;l<32&&this.forestIndex<3600&&performance.now()-h<3;l++,this.forestIndex++){let{x:u,z:d}=this.forestQueue[this.forestIndex];this.forestRecords.push(...this.vegetation.distantTrees(u,d))}if(t-this.forestLast>1.2){this.forestLast=t;let l=[0,0,0];for(let u of this.forestRecords){let d=Math.hypot(u.x-e.position.x,u.z-e.position.z),f=u.prototype;if(d<this.vegetation.config.propRange-20||d>{high:1700,medium:1400,low:1050}[this.vegetation.quality]||l[f]>={high:6500,medium:4500,low:2500}[this.vegetation.quality]||this.vegetation.harvested.has(u.id)||(this.forestSphere.center.set(u.x,u.baseY+4,u.z),this.forestSphere.radius=15*u.scale,!this.vegetation.frustum.intersectsSphere(this.forestSphere)))continue;xo(u,s);let g=l[f]++;this.forests[f].setMatrixAt(g,s),this.forests[f].setColorAt(g,La(u,new se,!0))}this.forests.forEach((u,d)=>{u.count=l[d],u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),u.computeBoundingSphere()})}if(t-this.last<.6)return;this.last=t;let c=[0,0,0,0,0,0];for(let l of this.vegetation.grassCells.values())for(let u of l.records){let d=this.world.noise(u.x/55+74,u.z/55-81);if(u.hue>(.006+Math.pow(d,3)*.22)*(1-(u.canopy||0)*.94)||Math.hypot(u.x-e.position.x,u.z-e.position.z)>43||Math.abs(this.world.displacement(u.x,u.z))>.12||this.vegetation.covered?.(u.x,u.z,this.world.height(u.x,u.z)))continue;let f=u.yaw/6.283185,g=u.biome==="wetland"||u.biome==="shore"&&f<.65?5:u.biome==="heath"?f<.65?4:2:u.biome==="steppe"?f<.3?3:1:f<.12?2:f<.35?1:f<.42?3:0,v=c[g];v>=900||(r.setFromAxisAngle(vt.DEFAULT_UP,u.yaw),o.set(u.x,this.world.height(u.x,u.z),u.z),a.set((.65+u.hue*.5)*(.8+u.scale*.6),(.65+u.yaw%1*.6)*(.8+u.scale*.6),(.75+u.hue*.35)*(.8+u.scale*.6)),s.compose(o,r,a),this.flowers[g].setMatrixAt(v,s),c[g]++)}this.count=c.reduce((l,u)=>l+u,0),this.flowers.forEach((l,u)=>{l.count=c[u],l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.computeBoundingSphere()})}dispose(){this.group.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.isInstancedMesh&&e.dispose())}),this.flowerMaterial.dispose(),this.treeMaterial.dispose(),this.waterMaterial.dispose(),this.group.children.find(e=>e.name.startsWith("Massifs"))?.material.dispose(),this.scene.remove(this.group)}};var AM=new Ke().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Th=class{constructor(e,t,{exclude:n=[]}={}){this.renderer=e,this.scene=t,this.exclude=n,this.target=new dn(512,512,{depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1,minFilter:un,magFilter:un}),this.target.texture.name="Vallon lake reflection",this.virtualCamera=new Wt,this.reflectionMatrix=new Ke,this.frame=0,this.size=512,this.lake=null}update(e,t,n,s,r=!0){let o=t.waterMaterial.uniforms;if(o.uReflectionTex.value=this.target.texture,!r||s==="low"||!t.waters.length)return o.uHasReflection.value=0,!1;let a=s==="high"?768:512;if(a!==this.size&&(this.target.setSize(a,a),this.size=a),this.frame++%5!==0)return!!o.uHasReflection.value;e.updateMatrixWorld(!0);let h=e.getWorldPosition(new R),c=t.waters.map((u,d)=>{let f=t.world.lakes[d],g=Math.hypot((u.position.x-h.x)/f.rx,(u.position.z-h.z)/f.rz);return{mesh:u,data:f,normalizedDistance:g,shoreDistance:Math.max(0,g-1)*Math.min(f.rx,f.rz)}}).filter(({mesh:u,normalizedDistance:d})=>d<1.5&&h.y>u.position.y+.02).sort((u,d)=>u.shoreDistance-d.shoreDistance)[0];if(!c)return o.uHasReflection.value=0,!1;let l=c.data;return this.#e(e,c.mesh.position.y),o.uReflectionMatrix.value.copy(this.reflectionMatrix),o.uReflectionLake.value.set(l.x,l.z,l.rx,l.rz),this.landscape=t,this.#t(e),o.uHasReflection.value=1,this.lake=c.mesh,!0}#e(e,t){let n=this.virtualCamera;n.copy(e,!1),n.parent=null,e.updateMatrixWorld(!0);let s=e.getWorldPosition(new R),r=e.getWorldDirection(new R),o=s.clone().add(r),a=new R(0,1,0).applyQuaternion(e.getWorldQuaternion(new Rt)),h=new R(0,t+.025,0),c=new R(0,1,0),l=x=>{let _=c.dot(x.clone().sub(h));return x.addScaledVector(c,-2*_)},u=l(s),d=l(o);a.addScaledVector(c,-2*c.dot(a)),n.position.copy(u),n.up.copy(a),n.lookAt(d),n.far=e.far,n.updateMatrixWorld(!0),n.projectionMatrix.copy(e.projectionMatrix);let f=new di().setFromNormalAndCoplanarPoint(c,h);f.applyMatrix4(n.matrixWorldInverse);let g=new ct(f.normal.x,f.normal.y,f.normal.z,f.constant),p=n.projectionMatrix.elements,m=new ct((Math.sign(g.x)+p[8])/p[0],(Math.sign(g.y)+p[9])/p[5],-1,(1+p[10])/p[14]);g.multiplyScalar(2/g.dot(m)),p[2]=g.x,p[6]=g.y,p[10]=g.z+1-.003,p[14]=g.w,this.reflectionMatrix.copy(AM).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse)}#t(e){let t=this.renderer,n=t.getRenderTarget(),s=t.getViewport(new ct),r=t.getScissor(new ct),o=t.getScissorTest(),a=t.getClearColor(new se),h=t.getClearAlpha(),c=t.autoClear,l=t.xr.enabled,u=t.shadowMap.autoUpdate,d=t.info.autoReset,f=t.info.render,g={calls:f.calls,triangles:f.triangles,points:f.points,lines:f.lines},v=new Map,p=m=>{!m||v.has(m)||(v.set(m,m.visible),m.visible=!1)};for(let m of this.landscape.waters)p(m);for(let m of e.children)p(m);for(let m of this.exclude)p(m);try{t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.autoClear=!0,t.info.autoReset=!1,t.setRenderTarget(this.target),t.setViewport(0,0,this.size,this.size),t.setScissorTest(!1),t.setClearColor(8886435,1),t.render(this.scene,this.virtualCamera)}finally{for(let[m,x]of v)m.visible=x;t.setRenderTarget(n),t.setViewport(s),t.setScissor(r),t.setScissorTest(o),t.setClearColor(a,h),t.autoClear=c,t.xr.enabled=l,t.shadowMap.autoUpdate=u,t.info.autoReset=d,Object.assign(f,g)}}dispose(){this.target.dispose()}};var nn=12,mi=1.5,wo=8,RM=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],jm=[[0,0,0],[1,0,0],[1,0,1],[0,0,1],[0,1,0],[1,1,0],[1,1,1],[0,1,1]],CM=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],Bd=(i,e,t)=>`${i},${e},${t}`,Ah=(i,e,t)=>at.smoothstep(t,i,e),Od=class{constructor(e=1427,t){this.seed=e,this.noise=t||((o,a)=>Math.sin(o*12.9898+a*78.233+e)*43758.5453%1*.5+.5),this.rooms=[[0,0,24,27,19],[0,-43,14,18,11],[-32,-76,25,25,22],[32,-88,28,26,26],[-54,-120,24,26,30],[31,-139,28,24,23],[63,-43,19,22,17],[-61,-33,20,23,16]].map(([o,a,h,c,l],u)=>({x:o,z:a,rx:h*(.92+this.noise(u,72)*.16),rz:c,h:l})),this.links=[[0,1],[1,2],[1,3],[2,4],[3,5],[3,6],[0,7],[4,5]],this.edits=[],this.editBuckets=new Map,this.revision=0,this.spawn={x:0,z:7},this.formations=[],this.formBuckets=new Map;let n=(o,a)=>Math.min(...this.links.map(([h,c])=>{let l=this.rooms[h],u=this.rooms[c],d=u.x-l.x,f=u.z-l.z,g=at.clamp(((o-l.x)*d+(a-l.z)*f)/(d*d+f*f),0,1);return Math.hypot(o-l.x-d*g,a-l.z-f*g)})),s=[[8,-5],[-18,-77],[42,-87],[-48,-121],[20,-141],[60,-45]],r=o=>{this.formations.push(o);for(let a=Math.floor((o.z-o.r-1)/nn);a<=Math.floor((o.z+o.r+1)/nn);a++)for(let h=Math.floor((o.x-o.r-1)/nn);h<=Math.floor((o.x+o.r+1)/nn);h++){let c=`${h},${a}`;this.formBuckets.has(c)||this.formBuckets.set(c,[]),this.formBuckets.get(c).push(o)}};this.rooms.forEach((o,a)=>{for(let h=0;h<8;h++){let c=h*Math.PI/4+this.noise(a,h+54)*.45,l=o.x+Math.sin(c)*o.rx*.62,u=o.z+Math.cos(c)*o.rz*.62,d=this.floor(l,u),f=d+o.h*Math.sqrt(1-.62*.62);r({x:l,z:u,bottom:f-2-this.noise(a,h+101)*3.6,top:f+.7,r:.65+this.noise(a,h+7)*.7,hanging:!0}),n(l,u)>6&&s.every(([g,v])=>Math.hypot(l-g,u-v)>3)&&Math.hypot(l,u-7)>10&&r({x:l,z:u,bottom:d-.3,top:d+2.4+this.noise(a,h+90)*3.1,r:.8+this.noise(a,h+65)*1.1,hanging:!1})}})}floor(e,t){return Math.sin(e/45)*1.2+Math.sin(t/60)*1.1-Ah(60,145,-t)*3.5}density(e,t,n){let s=this.floor(e,n),r=-100;for(let o of this.rooms){let a=Math.hypot((e-o.x)/o.rx,(n-o.z)/o.rz);if(a>1.25)continue;let h=(1-a)*Math.min(o.rx,o.rz),c=s+o.h*Math.sqrt(Math.max(0,1-a*a));r=Math.max(r,Math.min(h,c-t))}for(let[o,a]of this.links){let h=this.rooms[o],c=this.rooms[a],l=c.x-h.x,u=c.z-h.z,d=at.clamp(((e-h.x)*l+(n-h.z)*u)/(l*l+u*u),0,1),f=Math.hypot(e-h.x-l*d,n-h.z-u*d),g=4.2+Math.sin(d*Math.PI)*1.4;r=Math.max(r,Math.min(g-f,s+6.5+Math.cos(d*Math.PI*2)*.4-t))}r>-3&&t>s+.7&&(r+=(this.noise(e*.38+t*.05,n*.38)-.5)*.65),r=Math.min(r,t-s);for(let o of this.formBuckets.get(`${Math.floor(e/nn)},${Math.floor(n/nn)}`)||[]){let a=at.clamp((t-o.bottom)/(o.top-o.bottom),0,1),h=o.r*(o.hanging?a:1-a),c=Math.max(Math.hypot(e-o.x,n-o.z)-h,o.bottom-t,t-o.top);r=Math.min(r,c)}for(let o of this.editBuckets.get(Bd(Math.floor(e/nn),Math.floor(t/nn),Math.floor(n/nn)))||[])r=Math.max(r,o[3]-Math.hypot(e-o[0],t-o[1],n-o[2]));return Math.min(r,100-Math.abs(e),n+168,36-n,t+17,36-t)}materialAt(e,t,n){let s=this.noise(e*.23+t*.09+48,n*.23+36),r=this.noise(e*.52+9,n*.52+t*.13);return n<-95&&s>.78&&r>.59?"diamond":s>.73?"iron":s>.66?"copper":s>.59?"coal":n<-75||t<this.floor(e,n)-3?"deepstone":"stone"}layerTier(e,t,n){return n<-75||t<this.floor(e,n)-3?3:2}mine(e,t,n=1.85){if(this.edits.length>=500)return null;let s=e.clone().addScaledVector(t,.65);if(this.density(s.x,s.y,s.z)>-.03||Math.abs(s.x)>95||s.z<-162||s.z>30||s.y<-12||s.y>31)return null;let r=[s.x,s.y,s.z,at.clamp(n,1.6,2.4)];return this.edits.push(r),this.indexEdit(r),this.revision++,r}indexEdit(e){let t=e[3]+3;for(let n=Math.floor((e[1]-t)/nn);n<=Math.floor((e[1]+t)/nn);n++)for(let s=Math.floor((e[2]-t)/nn);s<=Math.floor((e[2]+t)/nn);s++)for(let r=Math.floor((e[0]-t)/nn);r<=Math.floor((e[0]+t)/nn);r++){let o=Bd(r,n,s);this.editBuckets.has(o)||this.editBuckets.set(o,[]),this.editBuckets.get(o).push(e)}}restore(e){this.edits=Array.isArray(e)?e.slice(0,500).filter(t=>Array.isArray(t)&&t.length===4&&t.every(Number.isFinite)&&Math.abs(t[0])<=95&&t[1]>=-12&&t[1]<=31&&t[2]>=-162&&t[2]<=30&&t[3]>=1.6&&t[3]<=2.4).map(t=>t.slice()):[],this.editBuckets.clear(),this.edits.forEach(t=>this.indexEdit(t)),this.revision++}raycast(e,t,n=7){let s=0;for(let r=.1;r<=n;r+=.1){let o=e.clone().addScaledVector(t,r);if(this.density(o.x,o.y,o.z)<=0){let a=r;for(let c=0;c<8;c++){let l=(s+a)/2,u=e.clone().addScaledVector(t,l);this.density(u.x,u.y,u.z)>0?s=l:a=l}let h=e.clone().addScaledVector(t,a);return{kind:"cave",point:h,distance:a,material:this.materialAt(h.x,h.y,h.z),tier:this.layerTier(h.x,h.y,h.z)}}s=r}return null}fits(e,t,n,s=.27,r=1.7){for(let o of[.16,.9,r-.05]){if(this.density(e,t+o,n)<0)return!1;for(let a=0;a<8;a++){let h=a*Math.PI/4;if(this.density(e+Math.cos(h)*s,t+o,n+Math.sin(h)*s)<0)return!1}}return!0}support(e,t,n){let s=n;for(let r=n;r>n-15;r-=.15){if(this.density(e,r,t)<=0){let o=r;for(let a=0;a<10;a++){let h=(s+o)/2;this.density(e,h,t)>0?s=h:o=h}return(s+o)/2}s=r}return-17}},Rh=class extends So{constructor(e,t){super(e,{spawn:t.spawn,height:(n,s)=>t.floor(n,s)}),this.field=t}_height(e,t){return this.field?this.field.support(e,t,this.position.y+.33):super._height(e,t)}_canMove(e,t,n,s){return this.field.fits(e,this.position.y,t,this.radius,this.bodyHeight)&&super._canMove(e,t,n,s)}_step(e,t,n){let s=this.position.y;super._step(e,t,n),this.position.y>s&&!this.field.fits(this.position.x,this.position.y,this.position.z)&&(this.position.y=s,this.velocity.y=0)}teleport(e,t){super.teleport(e,t),this.field&&(this.position.y=this.field.floor(e,t),this.syncCamera())}};function PM(i,e,t,n){let s=new Float32Array(729),r=(l,u,d)=>(u*9+d)*9+l;for(let l=0;l<=wo;l++)for(let u=0;u<=wo;u++)for(let d=0;d<=wo;d++)s[r(d,l,u)]=i.density(e+d*mi,t+l*mi,n+u*mi);let o=[],a=[],h={stone:"#7c807f",deepstone:"#3f4654",coal:"#353b42",iron:"#ae8060",copper:"#ae7950",diamond:"#75d6dd"};for(let l=0;l<wo;l++)for(let u=0;u<wo;u++)for(let d=0;d<wo;d++){let f=jm.map(([v,p,m])=>s[r(d+v,l+p,u+m)]);if(f.every(v=>v>=0)||f.every(v=>v<0))continue;let g=jm.map(([v,p,m])=>new R(e+(d+v)*mi,t+(l+p)*mi,n+(u+m)*mi));for(let v of RM){let p=[],m=new R,x=0;for(let C of v)f[C]>0&&(m.add(g[C]),x++);if(!x||x===4)continue;m.divideScalar(x);for(let[C,I]of CM){let S=v[C],b=v[I];f[S]>0!=f[b]>0&&p.push(g[S].clone().lerp(g[b],f[S]/(f[S]-f[b])))}if(p.length<3)continue;let _=p.reduce((C,I)=>C.add(I),new R).divideScalar(p.length),y=m.sub(_).normalize(),T=p[0].clone().sub(_).normalize(),w=new R().crossVectors(y,T).normalize();p.sort((C,I)=>Math.atan2(C.clone().sub(_).dot(w),C.clone().sub(_).dot(T))-Math.atan2(I.clone().sub(_).dot(w),I.clone().sub(_).dot(T)));for(let C=1;C<p.length-1;C++){let I=[p[0],p[C],p[C+1]];new R().crossVectors(I[1].clone().sub(I[0]),I[2].clone().sub(I[0])).dot(y)<0&&([I[1],I[2]]=[I[2],I[1]]);for(let b of I){o.push(b.x,b.y,b.z);let A=i.noise(b.x*.23+b.y*.09+48,b.z*.23+36),L=new se(h[i.layerTier(b.x,b.y,b.z)>2?"deepstone":"stone"]);L.lerp(new se(h.coal),Ah(.56,.61,A)),L.lerp(new se(h.copper),Ah(.64,.69,A)),L.lerp(new se(h.iron),Ah(.71,.76,A)),i.materialAt(b.x,b.y,b.z)==="diamond"&&L.lerp(new se(h.diamond),.8),L.multiplyScalar(.85+i.noise(b.x*.8,b.z*.8)*.25),a.push(L.r,L.g,L.b)}}}}let c=new it;return c.setAttribute("position",new Me(o,3)),c.setAttribute("color",new Me(a,3)),c.computeVertexNormals(),c.computeBoundingSphere(),o.length?Wm(c):c}var Ch=class{constructor(e,t){this.scene=e,this.field=new Od(t.seed,t.noise),this.group=new Ut,this.group.visible=!1,e.add(this.group),this.chunks=new Map,this.queue=[],this.planAt=-99,this.lastPosition=new R(1/0,0,0),this.stats={chunks:0,queued:0,triangles:0,edits:0},this.material=new yt({vertexColors:!0,roughness:.94,side:jt}),this.material.onBeforeCompile=s=>{s.vertexShader=`varying vec3 rockPosition;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
rockPosition=position;`),s.fragmentShader=`varying vec3 rockPosition;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float grain=fract(sin(dot(floor(rockPosition*55.),vec3(12.9,78.2,45.1)))*43758.54);diffuseColor.rgb*=.9+grain*.2;`)},this.crystals=[],this.removed=new Set;for(let[s,r,o]of[[0,8,-5],[1,-18,-77],[2,42,-87],[3,-48,-121],[4,20,-141],[5,60,-45]]){let a=new Ut,h=new yt({color:s%2?"#68bfc6":"#a595df",emissive:s%2?"#2b8d9c":"#7364b8",emissiveIntensity:.45,roughness:.28,metalness:.22});for(let l=0;l<7;l++){let u=new Bn(0,.13+l%3*.04,.7+l%4*.22,6),d=new nt(u,h);d.position.set(Math.sin(l*2.4)*.4,.3+l%4*.1,Math.cos(l*2.4)*.4),d.rotation.z=Math.sin(l*3)*.3,a.add(d)}let c=this.field.floor(r,o);a.position.set(r,c,o),a.userData={id:`crystal:${s}`,x:r,y:c,z:o},this.group.add(a),this.crystals.push(a)}this.glow=new si("#80bbd4",22,22,2),this.group.add(this.glow);let n=new nt(new va(1.8,.15,6,16),new yt({color:"#b4c9a3",emissive:"#96c7aa",emissiveIntensity:.5}));n.position.set(0,2,16),this.group.add(n)}setRemoved(e){this.removed=new Set(Array.isArray(e)?e:[]),this.crystals.forEach(t=>t.visible=!this.removed.has(t.userData.id))}harvestCrystal(e){let t=this.crystals.find(n=>n.userData.id===e);return!t||this.removed.has(e)?!1:(this.removed.add(e),t.visible=!1,!0)}target(e,t){let n=this.field.raycast(e,t),s=new ti(e,t),r=new R;for(let o of this.crystals){if(!o.visible)continue;let a=o.userData,h=new yn(new R(a.x-.6,a.y,a.z-.6),new R(a.x+.6,a.y+1.4,a.z+.6));if(s.intersectBox(h,r)){let c=r.distanceTo(e);c<7&&(!n||c<n.distance)&&(n={kind:"crystal",material:"crystal",tier:3,id:a.id,point:r.clone(),distance:c})}}return n}invalidate(e){let[t,n,s,r]=e;for(let o of this.chunks.values())o.x<t+r+mi&&o.x+nn>t-r-mi&&o.y<n+r+mi&&o.y+nn>n-r-mi&&o.z<s+r+mi&&o.z+nn>s-r-mi&&(o.dirty=!0)}update(e,t){let n=e.position;if(t-this.planAt>.6||n.distanceToSquared(this.lastPosition)>64){this.planAt=t,this.lastPosition.copy(n),this.queue=[];for(let h=-2;h<3;h++)for(let c=-14;c<3;c++)for(let l=-9;l<9;l++){let u=l*nn,d=h*nn,f=c*nn,g=Math.hypot(u+6-n.x,(d+6-n.y)*.6,f+6-n.z),v=Bd(l,h,c);if(g>62)continue;let p=this.chunks.get(v);p&&!p.dirty||this.queue.push({k:v,x:u,y:d,z:f,d:g,dirty:p?.dirty})}this.queue.sort((h,c)=>Number(c.dirty)-Number(h.dirty)||h.d-c.d);for(let[h,c]of this.chunks)Math.hypot(c.x+6-n.x,c.z+6-n.z)>85&&(this.group.remove(c.mesh),c.mesh.geometry.dispose(),this.chunks.delete(h))}let s=performance.now(),r=0;for(;this.queue.length&&r<2&&performance.now()-s<6;){let h=this.queue.shift(),c=this.chunks.get(h.k),l=PM(this.field,h.x,h.y,h.z);c&&(this.group.remove(c.mesh),c.mesh.geometry.dispose());let u=new nt(l,this.material);u.visible=l.attributes.position.count>0,u.receiveShadow=!0,u.name="Roche volum\xE9trique \xB7 galerie",this.group.add(u),this.chunks.set(h.k,{...h,mesh:u,dirty:!1}),r++}let o=0;for(let h of this.chunks.values())o+=h.mesh.geometry.attributes.position.count/3;let a=this.crystals.filter(h=>h.visible).sort((h,c)=>h.position.distanceToSquared(n)-c.position.distanceToSquared(n))[0];a&&this.glow.position.copy(a.position).add(new R(0,1.7,0)),this.glow.visible=!!a,this.stats={chunks:this.chunks.size,queued:this.queue.length,triangles:o,edits:this.field.edits.length}}dispose(){this.group.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material!==this.material&&e.material.dispose())}),this.material.dispose(),this.scene.remove(this.group),this.chunks.clear()}};var Ph={soil:{label:"Terre / herbe",tier:1,resource:"clay",seconds:.65},sand:{label:"Sable",tier:1,resource:"clay",seconds:.5},wood:{label:"Bois",tier:1,resource:"wood",seconds:1.1},berries:{label:"Buisson de baies",tier:1,resource:"berries",seconds:.55},stone:{label:"Pierre",tier:2,resource:"stone",seconds:2.1},coal:{label:"Charbon",tier:2,resource:"coal",seconds:1.3},copper:{label:"Cuivre",tier:2,resource:"copper",seconds:1.6},iron:{label:"Fer",tier:2,resource:"iron",seconds:1.8},deepstone:{label:"Roche profonde",tier:3,resource:"stone",seconds:2.2},crystal:{label:"Cristal d\u2019am\xE9thyste",tier:3,resource:"crystal",seconds:2},diamond:{label:"Diamant",tier:4,resource:"diamond",seconds:3.2}};function Ih(i,e,t=2){let n=Ph[i]||Ph.stone,s=e==="pick"?t:1,r=s>=n.tier,o=e==="shovel"&&["soil","sand"].includes(i)?.34:e==="pick"&&n.tier>=2?Math.max(.38,1-(t-n.tier)*.22):e==="pick"?.95:e==="shovel"?1.8:1.4;return{...n,allowed:r,level:s,duration:n.seconds*o}}function kd(i,e,t){let n=i.sample(e,t),s=-(i.displacement?.(e,t)||0);return s>=4.99?"deepstone":s>=1.69||n.biome==="rock"?"stone":n.height<(i.lake?.level||0)+1.8&&e<-180?"sand":"soil"}function Da(i){return i===2?{stone:6,wood:4}:i===3?{iron:8,wood:4}:null}function Qm(i,e){let t=Da(e);return!t||Object.entries(t).some(([n,s])=>(i[n]||0)<s)?null:{tier:e+1,inventory:Object.fromEntries(Object.entries(i).map(([n,s])=>[n,s-(t[n]||0)]))}}var mr=[{tool:"hand",label:"Main"},{tool:"shovel",label:"Pelle"},{tool:"pick",label:"Pioche"},{material:0,label:"Bois"},{material:1,label:"Pierre"},{material:2,label:"Terre"}],us={primary:"Miner / casser / frapper",build:"Poser une pi\xE8ce",mode:"Action du terrain",cave:"Descendre / remonter pr\xE8s de l\u2019entr\xE9e",upgrade:"Am\xE9liorer la pioche",undo:"Annuler le terrain",catalog:"Catalogue de construction",rotate:"Pivoter la pi\xE8ce",interact:"Interagir / nourrir / baie",journal:"Carnet de progression",combat:"Sortir / ranger l\u2019\xE9p\xE9e",dodge:"Esquiver",guard:"Maintenir la garde",achievements:"Succ\xE8s, bestiaire et \xE9quipement"},Hd={primary:"KeyE",build:"KeyF",mode:"KeyR",cave:"KeyG",upgrade:"KeyC",undo:"KeyU",catalog:"KeyB",rotate:"KeyX",interact:"KeyV",journal:"KeyN",combat:"KeyT",dodge:"KeyI",guard:"KeyO",achievements:"KeyL"},IM=new Set(["KeyW","KeyA","KeyS","KeyD","KeyZ","KeyQ","KeyH","KeyP","Digit7","Space","Tab","Escape","Home","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Minus","Equal","BracketLeft","BracketRight"]),Vd=i=>typeof i=="string"&&/^(Key[A-Z]|Digit[0-9]|Numpad[0-9]|Enter|Backspace|Insert|Delete|End|PageUp|PageDown)$/.test(i)&&!IM.has(i)&&!/^Digit[1-6]$/.test(i);function LM(i){return i.replace(/^Key|^Digit/,"").replace("Numpad","Pav. ").replace("Backspace","Retour").replace("Enter","Entr\xE9e").replace("Delete","Suppr.").replace("Insert","Inser.").replace("PageUp","Page \u2191").replace("PageDown","Page \u2193").replace("End","Fin")}function e0(i){let e={...Hd};if(i&&typeof i=="object"){let t=Object.fromEntries(Object.keys(us).filter(s=>i[s]).map(s=>[s,i[s]])),n=new Set(Object.values(t));if(Object.values(t).every(Vd)&&n.size===Object.keys(t).length){for(let s of Object.keys(us))if(!t[s]){let r=[Hd[s],...["K","O","M","T","L","Y","I","J","N","B","X","V","E","F","R","G","C","U"].map(o=>"Key"+o),"Digit7","Digit8","Digit9","Digit0"].find(o=>Vd(o)&&!n.has(o));t[s]=r,n.add(r)}e=t}}return{get bindings(){return{...e}},code:t=>e[t],label:t=>LM(e[t]),action:t=>Object.keys(us).find(n=>e[n]===t),bind(t,n){if(!Object.hasOwn(us,t)||!Vd(n))return{ok:!1,error:"Cette touche est r\xE9serv\xE9e au d\xE9placement ou \xE0 l\u2019interface."};let s=Object.keys(us).find(r=>r!==t&&e[r]===n);return s?{ok:!1,error:`Cette touche sert d\xE9j\xE0 \xE0 \xAB ${us[s]} \xBB.`}:(e[t]=n,{ok:!0})},reset(){e={...Hd}}}}function t0(i){return(i%mr.length+mr.length)%mr.length}var ds=[{id:"oak",label:"Ch\xEAne",color:"#aa8257",family:"wood",cost:{wood:1},mining:"wood"},{id:"stone",label:"Calcaire",color:"#a2a89e",family:"stone",cost:{stone:1},mining:"stone"},{id:"earth",label:"Terre battue",color:"#b18a68",family:"earth",cost:{clay:1},mining:"soil"},{id:"pine",label:"Pin clair",color:"#d1b588",family:"wood",cost:{wood:1},mining:"wood"},{id:"cobble",label:"Moellons",color:"#858d83",family:"stone",cost:{stone:1},mining:"stone"},{id:"planks",label:"Planches",color:"#ba9b70",family:"planks",cost:{wood:1},mining:"wood",station:"workbench"},{id:"darkwood",label:"Bois fum\xE9",color:"#655044",family:"wood",cost:{wood:1,coal:1},mining:"wood",station:"workbench"},{id:"polished",label:"Pierre taill\xE9e",color:"#a8b1ab",family:"tiles",cost:{stone:2},mining:"stone",station:"workbench"},{id:"brick",label:"Brique",color:"#b16e51",family:"brick",cost:{clay:2,coal:1},mining:"soil",station:"forge"},{id:"glass",label:"Verre",color:"#b9dece",family:"glass",cost:{stone:1,clay:1,coal:1},mining:"stone",station:"forge"},{id:"slate",label:"Ardoise",color:"#4d606c",family:"tiles",cost:{stone:2,coal:1},mining:"stone",station:"forge"},{id:"iron",label:"Fer bross\xE9",color:"#acb9bc",family:"metal",cost:{iron:2,coal:1},mining:"iron",station:"forge"},{id:"copper",label:"Cuivre",color:"#b57950",family:"metal",cost:{copper:2,coal:1},mining:"copper",station:"forge"},{id:"crystal",label:"Am\xE9thyste",color:"#a38bdb",family:"crystal",cost:{crystal:2,stone:1},mining:"crystal",level:3},{id:"marble",label:"Marbre vein\xE9",color:"#d4dbcd",family:"marble",cost:{stone:3,iron:1},mining:"stone",level:3},{id:"diamond",label:"Incrustations",color:"#89c6c4",family:"crystal",cost:{stone:2,diamond:1},mining:"diamond",level:4}],gi=[{id:"cube",label:"Bloc",icon:"\u25A3",volume:1},{id:"slab",label:"Dalle",icon:"\u25B0",volume:.35},{id:"wall",label:"Mur fin",icon:"\u25A5",volume:.5},{id:"pillar",label:"Pilier",icon:"\u25AF",volume:.4},{id:"beam",label:"Poutre",icon:"\u2501",volume:.35},{id:"stairs",label:"Escalier",icon:"\u259F",volume:1,station:"workbench"},{id:"ramp",label:"Rampe",icon:"\u25E9",volume:1,station:"workbench"},{id:"roof",label:"Toit inclin\xE9",icon:"\u2571",volume:.6,station:"workbench"},{id:"ridge",label:"Fa\xEEtage",icon:"\u2302",volume:.8,station:"workbench"},{id:"window",label:"Fen\xEAtre",icon:"\u25A4",volume:.5,station:"forge",extra:{stone:1,coal:1}},{id:"door",label:"Porte",icon:"\u25AF",volume:1,station:"workbench"},{id:"arch",label:"Arche",icon:"\u2229",volume:1.2,station:"workbench"},{id:"fence",label:"Cl\xF4ture",icon:"\u256B",volume:.6},{id:"planter",label:"Jardini\xE8re",icon:"\u2767",volume:.5,station:"workbench",extra:{clay:1,berries:2}},{id:"bench",label:"Banc",icon:"\u2564",volume:.7,station:"workbench"},{id:"table",label:"Table",icon:"\u2565",volume:1,station:"workbench"},{id:"lantern",label:"Lanterne",icon:"\u25C7",volume:.35,station:"forge",extra:{copper:1,coal:1}},{id:"workbench",label:"\xC9tabli",icon:"\u2692",recipe:{wood:4,stone:2}},{id:"forge",label:"Forge",icon:"\u265C",recipe:{stone:6,clay:4},station:"workbench"},{id:"beacon",label:"Phare de cristal",icon:"\u2727",recipe:{stone:4,copper:4,iron:4,crystal:4},level:3}],Dh=[{id:"natural",label:"Naturelle",color:"#ffffff"},...[["chalk","Craie","#e6e2ce"],["sand","Sable","#d5ba83"],["ochre","Ocre","#bd8549"],["terra","Terracotta","#a96750"],["rose","Rose","#c38889"],["moss","Mousse","#7e9b6c"],["sage","Sauge","#9aafa0"],["sea","Lagon","#70aaa7"],["blue","Ardoise bleue","#768fab"],["violet","Bruy\xE8re","#a38cae"],["charcoal","Charbon","#626a69"]].map(([i,e,t])=>({id:i,label:e,color:t}))],Uh=[{id:"natural",label:"Brute"},{id:"smooth",label:"Polie"},{id:"panels",label:"\xC0 panneaux"},{id:"carved",label:"Cisel\xE9e"}],gr=(i,e)=>i.find(t=>t.id===e)||i[0],Ui=i=>gr(ds,i),i0=i=>gr(gi,i);function cn(i={}){let e=Number.isInteger(i.material)?ds[i.material]?.id:i.material;return{material:gr(ds,e).id,shape:gr(gi,i.shape).id,tint:gr(Dh,i.tint).id,finish:gr(Uh,i.finish).id,rotation:(Math.round(Number(i.rotation)||0)%4+4)%4,size:[.5,1,2].includes(i.size)?i.size:1,mirror:!!i.mirror}}function Vi(i){let e=cn(i),t=i0(e.shape),n=Ui(e.material),s={};if(t.recipe){for(let[r,o]of Object.entries(t.recipe))s[r]=Math.ceil(o*e.size**3);if(n.station==="forge"||n.level)for(let[r,o]of Object.entries(n.cost))s[r]=(s[r]||0)+Math.ceil(o*e.size**3)}else{for(let[r,o]of Object.entries(n.cost))s[r]=Math.max(1,Math.ceil(o*t.volume*e.size**3));for(let[r,o]of Object.entries(t.extra||{}))s[r]=(s[r]||0)+Math.max(1,Math.ceil(o*e.size))}return s}function Ds(i,e){for(let t of[i0(i.shape),Ui(i.material)]){if(t.station&&!e.stations?.[t.station])return t.station==="forge"?"Allumez une forge avec 2 charbons.":"Posez un \xE9tabli et utilisez-le avec la touche d\u2019interaction.";if((t.level||0)>(e.chapter||0))return`Terminez le chapitre ${t.level} du carnet.`}return""}function Gd(i,e,t={}){let n={...i};for(let s of new Set([...Object.keys(e),...Object.keys(t)]))if(n[s]=(n[s]||0)+(t[s]||0)-(e[s]||0),n[s]<0)return null;return n}function Ao(i){let e={wood:"bois",stone:"pierre",clay:"terre",coal:"charbon",copper:"cuivre",iron:"fer",crystal:"cristaux",diamond:"diamants",berries:"baies"};return Object.entries(i).filter(([,t])=>t>0).map(([t,n])=>`${n} ${e[t]||t}`).join(" \xB7 ")||"Gratuit"}function To(i,e=!1){let t=(n,s,r,o,a,h)=>({x:n,y:s,z:r,w:o,h:a,d:h});switch(i){case"slab":return[t(0,.125,0,1,.25,1)];case"wall":return[t(0,.5,0,1,1,.2)];case"pillar":return[t(0,.5,0,.28,1,.28),t(0,.07,0,.4,.14,.4),t(0,.93,0,.4,.14,.4)];case"beam":return[t(0,.12,0,1,.24,.24)];case"stairs":return Array.from({length:4},(n,s)=>t(0,(s+1)/8,.375-s*.25,1,(s+1)/4,.25));case"ramp":return Array.from({length:10},(n,s)=>t(0,(s+.5)/20,.45-s*.1,1,(s+.5)/10,.1));case"roof":return Array.from({length:10},(n,s)=>t(0,.08+(s+.5)*.07,.45-s*.1,1,.16,.1));case"ridge":return Array.from({length:10},(n,s)=>t(0,.775+(1-Math.abs((s+.5)/5-1))*.4,.45-s*.1,1,.16,.1));case"window":return[t(-.43,.5,0,.14,1,.18),t(.43,.5,0,.14,1,.18),t(0,.07,0,1,.14,.18),t(0,.93,0,1,.14,.18),t(0,.5,0,.86,.86,.035)];case"door":return[t(-.44,1,0,.12,2,.2),t(.44,1,0,.12,2,.2),t(0,1.94,0,1,.12,.2),...e?[]:[t(0,.96,0,.76,1.86,.1)]];case"arch":return[t(-.4,.88,0,.2,1.76,.3),t(.4,.88,0,.2,1.76,.3),t(-.22,1.78,0,.27,.24,.3),t(.22,1.78,0,.27,.24,.3),t(0,1.92,0,.22,.16,.3)];case"fence":return[t(-.42,.5,0,.12,1,.12),t(.42,.5,0,.12,1,.12),t(0,.35,0,1,.12,.12),t(0,.75,0,1,.12,.12)];case"planter":return[t(0,.08,0,1,.16,.7),t(0,.24,-.29,1,.36,.12),t(0,.24,.29,1,.36,.12),t(-.44,.24,0,.12,.36,.7),t(.44,.24,0,.12,.36,.7)];case"bench":return[t(0,.5,0,1,.16,.5),t(-.35,.23,0,.12,.46,.4),t(.35,.23,0,.12,.46,.4)];case"table":case"workbench":return[t(0,.85,0,1,.18,1),...[-.37,.37].flatMap(n=>[-.37,.37].map(s=>t(n,.4,s,.14,.8,.14)))];case"forge":return[t(0,.3,0,1,.6,1),t(-.42,.85,0,.16,.5,1),t(.42,.85,0,.16,.5,1),t(0,.85,-.42,.84,.5,.16),t(0,1.12,0,1,.14,1),t(0,1.45,-.3,.35,.6,.35)];case"lantern":return[t(0,.08,0,.4,.16,.4),t(0,.34,0,.28,.4,.28),t(0,.57,0,.4,.1,.4)];case"beacon":return[t(0,.12,0,1,.24,1),t(0,.64,0,.36,.8,.36),t(0,1.32,0,.6,.6,.6),t(0,1.7,0,.72,.16,.72)];default:return[t(0,.5,0,1,1,1)]}}function DM(i){let e=i==="ridge"?[[-.5,.7],[-.5,.85],[0,1.25],[.5,.85],[.5,.7],[0,1.1]]:i==="ramp"?[[-.5,0],[.5,1],[.5,0]]:[[-.5,0],[-.5,.15],[.5,.85],[.5,.7]],t=new Rs;e.forEach(([s,r],o)=>o?t.lineTo(s,r):t.moveTo(s,r)),t.closePath();let n=new er(t,{depth:1,bevelEnabled:!1,steps:1});return n.rotateY(Math.PI/2),n.translate(-.5,0,0),n.computeVertexNormals(),n}function n0(i){let e=[],t=[],n=[];for(let r of i){let o=new zn(r.w,r.h,r.d).toNonIndexed();o.translate(r.x,r.y,r.z),e.push(...o.attributes.position.array),t.push(...o.attributes.normal.array),n.push(...o.attributes.uv.array),o.dispose()}let s=new it;return s.setAttribute("position",new Me(e,3)),s.setAttribute("normal",new Me(t,3)),s.setAttribute("uv",new Me(n,2)),s.computeBoundingBox(),s.computeBoundingSphere(),s}function Ua(i){let e=cn(i),t=Math.cos(e.rotation*Math.PI/2),n=Math.sin(e.rotation*Math.PI/2);return To(e.shape,i.open).map((s,r)=>{let o=s.z*(e.mirror?-1:1);return{type:"block",id:i.key+"#"+r,owner:i.key,x:i.x+(s.x*t+o*n)*e.size,z:i.z+(o*t-s.x*n)*e.size,y:i.y+(s.y-s.h/2)*e.size,width:(e.rotation%2?s.d:s.w)*e.size,depth:(e.rotation%2?s.w:s.d)*e.size,height:s.h*e.size}})}function Us(i){let e=To(i.shape),t=i.size||1;return{width:Math.max(...e.map(n=>Math.abs(n.x)*2+n.w))*t,depth:Math.max(...e.map(n=>Math.abs(n.z)*2+n.d))*t,height:Math.max(...e.map(n=>n.y+n.h/2))*t}}var Nh=(i,e)=>Math.abs(i.x-e.x)<(i.width+e.width)/2-.008&&Math.abs(i.z-e.z)<(i.depth+e.depth)/2-.008&&i.y<e.y+e.height-.008&&i.y+i.height>e.y+.008,Lh=class{constructor(e,t=new Map,n=[]){this.scene=e,this.records=t,this.meshes=n,this.spatial=new Map,this.batches=new Map,this.geometries=new Map,this.materials=new Map,this.matrix=new Ke,this.q=new Rt,this.scale=new R,this.pos=new R,this.lightTimer=0,this.lights=Array.from({length:6},()=>{let s=new si("#ffd89b",7,13,2);return s.visible=!1,e.add(s),s})}geometry(e,t=!1){let n=e.shape+(t?":open":"")+(e.mirror?":mirror":"");if(!this.geometries.has(n)){let s=To(e.shape,t).filter((o,a)=>e.shape==="window"?a<4:e.shape==="lantern"?a!==1:e.shape==="beacon"?a!==2:!0),r=["ramp","roof","ridge"].includes(e.shape)?DM(e.shape):n0(s);if(e.mirror){r.scale(1,1,-1);for(let o of Object.values(r.attributes))for(let a=0;a<o.count;a+=3)for(let h=0;h<o.itemSize;h++){let c=a*o.itemSize+h,l=(a+2)*o.itemSize+h,u=o.array[c];o.array[c]=o.array[l],o.array[l]=u}r.computeBoundingBox(),r.computeBoundingSphere()}this.geometries.set(n,r)}return this.geometries.get(n)}accent(e){let t=e.shape,n="accent:"+t;if(!["window","lantern","beacon","planter","forge"].includes(t)||t==="forge"&&!e.lit)return null;if(!this.geometries.has(n)){let r=t==="window"?[To(t)[4]]:t==="lantern"?[To(t)[1]]:t==="beacon"?[To(t)[2]]:t==="forge"?[{x:0,y:.73,z:.1,w:.5,h:.2,d:.5}]:Array.from({length:5},(o,a)=>({x:(a-2)*.17,y:.48+a%2*.12,z:0,w:.15,h:.28+a%2*.2,d:.25}));this.geometries.set(n,n0(r))}let s="accent-material:"+t;if(!this.materials.has(s)){let r=t==="planter"?"#6d994b":t==="beacon"?"#b2a3f5":t==="window"?"#b9e0d5":"#ffbc69",o=["beacon","lantern","forge"].includes(t);this.materials.set(s,new yt({color:r,roughness:.3,transparent:t==="window",opacity:t==="window"?.42:1,depthWrite:t!=="window",emissive:o?r:"#000000",emissiveIntensity:o?.8:0}))}return{geometry:this.geometries.get(n),material:this.materials.get(s)}}material(e){let t=[e.material,e.tint,e.finish].join(":");if(this.materials.has(t))return this.materials.get(t);let n=Ui(e.material),s=gr(Dh,e.tint),r=new se(n.color);s.id!=="natural"&&r.lerp(new se(s.color),.72);let o=new yt({color:r,roughness:e.finish==="smooth"?.4:n.family==="metal"?.42:.88,metalness:n.family==="metal"?.55:0,transparent:n.family==="glass",opacity:n.family==="glass"?.5:1,depthWrite:n.family!=="glass"});n.family==="crystal"&&(o.emissive.copy(r),o.emissiveIntensity=.35);let a=["wood","planks"].includes(n.family)?1:["brick","tiles"].includes(n.family)?2:n.family==="marble"?3:0,h=Uh.findIndex(c=>c.id===e.finish);return o.onBeforeCompile=c=>{c.vertexShader=`varying vec3 buildPos;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
buildPos=position;`),c.fragmentShader=`varying vec3 buildPos;
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    float grain=sin(buildPos.x*57.+sin(buildPos.y*32.)*2.+buildPos.z*43.);float detail=.98+grain*.025;
    ${a===1?"detail=.98+.025*sin(buildPos.y*9.+sin(buildPos.x*4.+buildPos.z*4.));":""}
    ${a===2?"vec2 bp=vec2(buildPos.x+buildPos.z,buildPos.y)*vec2(3.,4.);bp.x+=mod(floor(bp.y),2.)*.5;vec2 cell=fract(bp);detail=mix(.85,1.,smoothstep(.02,.055,min(min(cell.x,1.-cell.x),min(cell.y,1.-cell.y))));":""}
    ${a===3?"detail=.96+.04*sin(buildPos.x*8.+buildPos.y*5.+sin(buildPos.z*6.)*2.);":""}
    ${h===2?"detail*=.92+.08*smoothstep(.025,.045,min(fract((buildPos.x+buildPos.z)*4.),fract(buildPos.y*4.)));":""}
    ${h===3?"detail*=.94+.06*smoothstep(-.2,.4,sin(buildPos.y*18.)*cos((buildPos.x+buildPos.z)*18.));":""}
    diffuseColor.rgb*=detail;`)},o.customProgramCacheKey=()=>`build-${a}-${h}`,this.materials.set(t,o),o}add(e,t=!0){if(![e.x,e.y,e.z].every(Number.isFinite)||this.records.size>=2e3)return null;let n=cn(e),s=`${e.x.toFixed(3)},${e.y.toFixed(3)},${e.z.toFixed(3)}`;if(this.records.has(s))return null;let r={...n,x:e.x,y:e.y,z:e.z,key:s,type:"block",open:!!e.open,lit:!!e.lit,paid:e.paid||Vi(n),free:!!e.free};return Object.assign(r,Us(n)),n.rotation%2&&([r.width,r.depth]=[r.depth,r.width]),r.parts=Ua(r),this.records.set(s,r),t&&this.rebuild(),r}remove(e){this.records.delete(e.key)&&this.rebuild()}clear(){this.records.clear(),this.rebuild()}rebuild(){this.spatial.clear();for(let t of this.records.values())for(let n of t.parts)for(let s=Math.floor((n.z-n.depth/2)/8);s<=Math.floor((n.z+n.depth/2)/8);s++)for(let r=Math.floor((n.x-n.width/2)/8);r<=Math.floor((n.x+n.width/2)/8);r++){let o=r+","+s;this.spatial.has(o)||this.spatial.set(o,[]),this.spatial.get(o).push(n)}let e=new Map;for(let t of this.records.values()){let n=[t.shape,t.material,t.tint,t.finish,t.mirror?"mirror":"normal",t.open?"open":"closed"].join(":");if(e.has(n)||e.set(n,{records:[],accent:!1}),e.get(n).records.push(t),this.accent(t)){let s="accent:"+t.shape;e.has(s)||e.set(s,{records:[],accent:!0}),e.get(s).records.push(t)}}for(let[t,n]of this.batches)e.has(t)||(this.scene.remove(n),n.dispose(),this.batches.delete(t));for(let[t,{records:n,accent:s}]of e){let r=n[0],o=s?this.accent(r):null,a=this.batches.get(t);(!a||a.instanceMatrix.count<n.length)&&(a&&(this.scene.remove(a),a.dispose()),a=new en(o?.geometry||this.geometry(r,r.open),o?.material||this.material(r),Math.max(16,2**Math.ceil(Math.log2(n.length)))),a.castShadow=!s,a.receiveShadow=!0,this.batches.set(t,a),this.scene.add(a)),a.count=n.length,a.userData.records=n;for(let h=0;h<n.length;h++){let c=n[h];this.pos.set(c.x,c.y,c.z),this.q.setFromAxisAngle(vt.DEFAULT_UP,c.rotation*Math.PI/2),this.scale.set(c.size,c.size,c.size),this.matrix.compose(this.pos,this.q,this.scale),a.setMatrixAt(h,this.matrix)}a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),a.updateMatrixWorld(!0)}this.meshes.splice(0,this.meshes.length,...this.batches.values())}colliders(e,t,n=1){let s=new Set;for(let r=Math.floor((t-n)/8);r<=Math.floor((t+n)/8);r++)for(let o=Math.floor((e-n)/8);o<=Math.floor((e+n)/8);o++)for(let a of this.spatial.get(o+","+r)||[])Math.abs(a.x-e)<n+a.width/2&&Math.abs(a.z-t)<n+a.depth/2&&s.add(a);return[...s]}covered(e,t,n){return this.colliders(e,t,.02).some(s=>Math.abs(s.x-e)<s.width/2+.02&&Math.abs(s.z-t)<s.depth/2+.02&&s.y<n+.8&&s.y+s.height>n+.04)}serialize(){return[...this.records.values()].map(({x:e,y:t,z:n,material:s,shape:r,tint:o,finish:a,rotation:h,size:c,mirror:l,open:u,lit:d,paid:f,free:g})=>({x:e,y:t,z:n,material:s,shape:r,tint:o,finish:a,rotation:h,size:c,mirror:l,open:u,lit:d,paid:f,free:g}))}update(e,t,n=!0){if(this.lightTimer-=t,this.lightTimer>0)return;this.lightTimer=.3;let s=[...this.records.values()].filter(r=>["lantern","beacon"].includes(r.shape)||r.shape==="forge"&&r.lit).sort((r,o)=>Math.hypot(r.x-e.position.x,r.z-e.position.z)-Math.hypot(o.x-e.position.x,o.z-e.position.z));this.lights.forEach((r,o)=>{let a=s[o];r.visible=n&&!!a&&Math.hypot(a.x-e.position.x,a.z-e.position.z)<28,a&&(r.position.set(a.x,a.y+a.height*.8,a.z),r.color.set(a.shape==="beacon"?"#b5a6ff":"#ffb966"),r.intensity=a.shape==="beacon"?14:7)})}};var Ni=[{title:"Installez votre atelier",detail:"R\xE9coltez 8 bois, 4 pierres et 3 baies. Posez un \xE9tabli, puis utilisez-le.",reward:{wood:12,stone:8},rewardText:"12 bois + 8 pierres \xB7 charpente et meubles"},{title:"Un vrai toit",detail:"Autour de l\u2019\xE9tabli : 4 dalles, 6 murs/blocs, une porte et 4 toitures au-dessus du sol.",reward:{clay:12,coal:4},rewardText:"12 terres + 4 charbons \xB7 d\xE9marrage de la forge"},{title:"Le feu et le verre",detail:"Construisez et allumez une forge avec 2 charbons. Ajoutez 2 fen\xEAtres et 4 pi\xE8ces en brique ou verre.",reward:{copper:4},rewardText:"4 cuivres \xB7 pierre noble et am\xE9thyste"},{title:"Une lumi\xE8re dans la vall\xE9e",detail:"Am\xE9liorez la pioche. R\xE9coltez 8 fers et 4 cristaux dans les grottes, b\xE2tissez et activez un phare.",reward:{crystal:4,iron:4},rewardText:"4 cristaux + 4 fers \xB7 finitions rares"},{title:"Faites vivre le Vallon",detail:"Un refuge, un phare actif, une pioche niv. 4, 28 pi\xE8ces, 6 mat\xE9riaux et 2 jardini\xE8res.",reward:{diamond:3},rewardText:"3 diamants \xB7 mode de construction libre"}];function Wd(i){return{chapter:Math.max(0,Math.min(Ni.length,Math.floor(i?.chapter||0))),harvested:{wood:0,stone:0,berries:0,iron:0,crystal:0,...i?.harvested},stations:{...i?.stations},home:Array.isArray(i?.home)&&i.home.length===2&&i.home.every(Number.isFinite)?i.home:null,energy:Math.max(0,Math.min(100,Number.isFinite(i?.energy)?i.energy:100)),creative:!!i?.creative}}function UM(i){let e=[...i].filter(n=>!n.free),t=e.filter(n=>n.shape==="workbench");for(let n of t){let s=e.filter(c=>Math.hypot(c.x-n.x,c.z-n.z)<10&&Math.abs(c.y-n.y)<5),r=s.filter(c=>c.shape==="slab"),o=s.filter(c=>["cube","wall"].includes(c.shape)),a=r.length?Math.min(...r.map(c=>c.y)):n.y,h=s.filter(c=>["roof","ridge"].includes(c.shape)&&c.y>=a+1.4);if(r.length>=4&&o.length>=6&&s.some(c=>c.shape==="door")&&h.length>=4){let c=Math.min(...r.map(f=>f.x))-1,l=Math.max(...r.map(f=>f.x))+1,u=Math.min(...r.map(f=>f.z))-1,d=Math.max(...r.map(f=>f.z))+1;if(h.filter(f=>f.x>=c&&f.x<=l&&f.z>=u&&f.z<=d).length>=4)return{x:n.x,z:n.z,pieces:s.length}}}return null}function Ro(i,e,t){let n=[...e].filter(c=>!c.free),s=i.harvested,r=UM(n),o=new Set(n.map(c=>c.material)),a=i.chapter,h=[[["Bois r\xE9colt\xE9",s.wood,8],["Pierre r\xE9colt\xE9e",s.stone,4],["Baies r\xE9colt\xE9es",s.berries,3],["\xC9tabli utilis\xE9",Number(i.stations.workbench),1]],[["Refuge construit",+!!r,1]],[["Forge allum\xE9e",Number(i.stations.forge),1],["Fen\xEAtres",n.filter(c=>c.shape==="window").length,2],["Briques / verre",n.filter(c=>["brick","glass"].includes(c.material)).length,4]],[["Pioche niv. 3",Math.min(1,t-2),1],["Fer r\xE9colt\xE9",s.iron,8],["Cristaux r\xE9colt\xE9s",s.crystal,4],["Phare activ\xE9",Number(i.stations.beacon),1]],[["Refuge",+!!r,1],["Phare actif",Number(i.stations.beacon),1],["Pioche niv. 4",+(t>=4),1],["Pi\xE8ces",n.length,28],["Mat\xE9riaux",o.size,6],["Jardini\xE8res",n.filter(c=>c.shape==="planter").length,2]]][a]||[];return{title:Ni[a]?.title||"La vall\xE9e est \xE0 vous",detail:Ni[a]?.detail||"Le mode libre est d\xE9bloqu\xE9. Cr\xE9ez, agrandissez et personnalisez votre village.",conditions:h,done:h.length>0&&h.every(([,c,l])=>c>=l),progress:a/Ni.length,roof:r,materials:o.size,pieces:n.length}}function s0(i,e,t,n){if(!Ro(i,e,t).done)return null;let r=Ni[i.chapter];for(let[o,a]of Object.entries(r.reward))n[o]=(n[o]||0)+a;return i.chapter++,{title:r.title,reward:r.rewardText}}function Na(i,e,t){Number.isFinite(t)&&t>0&&(i.harvested[e]=(i.harvested[e]||0)+t)}var Fh=class{constructor(e,t){this.library=e,this.hooks=t,this.plan=cn(t.plan),this.inspect=null;let n=o=>document.getElementById(o);this.$=n;let s=(o,a,h)=>{for(let c of a){let l=document.createElement("button");l.type="button",l.dataset.choice=h,l.dataset.value=c.id,l.title=c.label,h==="tint"?(l.style.backgroundColor=c.color,l.setAttribute("aria-label",c.label)):l.innerHTML=On(h==="shape"?c.id:"block",c.color)+`<span>${c.label}</span>`,l.addEventListener("click",()=>{this.plan=cn({...this.plan,[h]:c.id}),t.select(this.plan),this.refresh()}),n(o).append(l)}};s("shape-list",gi,"shape"),s("surface-list",ds,"material"),s("tint-list",Dh,"tint"),s("finish-list",Uh,"finish"),n("build-size").addEventListener("change",o=>{this.plan=cn({...this.plan,size:Number(o.target.value)}),t.select(this.plan),this.refresh()}),n("rotate-piece").addEventListener("click",()=>this.rotate()),n("mirror-piece").addEventListener("click",()=>{this.plan.mirror=!this.plan.mirror,t.select(this.plan),this.refresh()}),n("copy-piece").addEventListener("click",()=>{this.inspect&&(this.plan=cn(this.inspect),t.select(this.plan),this.refresh())}),n("apply-piece").addEventListener("click",()=>{this.inspect&&t.edit(this.inspect,this.plan)&&(this.inspect=t.target(this.inspect.key),this.refresh())}),n("eat-berries").addEventListener("click",()=>t.eat()),n("home-return").addEventListener("click",()=>t.home()),n("creative-build").addEventListener("change",o=>{t.creative(o.target.checked),this.refresh()});for(let o of["cabin","terrace","workshop"])n("blueprint-"+o).addEventListener("click",()=>t.blueprint(o));this.scene=new Pi,this.scene.background=new se("#213a32"),this.camera=new Wt(36,1,.01,20),this.camera.position.set(2,1.8,2.7),this.scene.add(new Is("#f3ecd8","#6c7d65",3));let r=new sr("#ffe2ba",4);r.position.set(2,4,3),this.scene.add(r),this.renderer=new uo({canvas:n("piece-preview"),antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(260,180,!1),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=io,this.refresh()}rotate(){this.plan.rotation=(this.plan.rotation+1)%4,this.hooks.select(this.plan),this.refresh()}set(e){this.plan=cn(e),this.refresh()}open(e){this.inspect=e||null,this.refresh()}refresh(){let{$:e,plan:t}=this,n=this.hooks.state(),s=n.journey.creative?"":Ds(t,n.journey);document.querySelectorAll("[data-choice]").forEach(h=>{let c=h.dataset.choice;if(h.classList.toggle("selected",t[c]===h.dataset.value),["material","shape"].includes(c)){let l=cn({...t,[c]:h.dataset.value}),u=!!Ds(l,n.journey)&&!n.journey.creative;h.classList.toggle("locked",u),h.setAttribute("aria-pressed",String(t[c]===h.dataset.value))}}),e("piece-name").textContent=`${gi.find(h=>h.id===t.shape).label} \xB7 ${ds.find(h=>h.id===t.material).label}`,e("favorite-label").textContent=`Palette m\xE9moris\xE9e dans la case ${Math.max(3,n.hotbarSlot)+1}.`,e("piece-cost").textContent=n.journey.creative?"Construction libre":Ao(Vi(t)),e("piece-lock").textContent=s||"Disponible \xB7 clic droit pour poser en jeu",e("build-size").value=t.size,e("rotation-label").textContent=`${t.rotation*90}\xB0${t.mirror?" \xB7 invers\xE9e":""}`,e("mirror-piece").classList.toggle("selected",t.mirror),e("copy-piece").disabled=!this.inspect,e("apply-piece").disabled=!this.inspect,e("edit-name").textContent=this.inspect?"Cible : "+gi.find(h=>h.id===this.inspect.shape).label:"Visez une pi\xE8ce avant d\u2019ouvrir le catalogue pour la modifier.",e("build-resources").textContent=`Bois ${n.inventory.wood} \xB7 Pierre ${n.inventory.stone} \xB7 Terre ${n.inventory.clay} \xB7 Charbon ${n.inventory.coal} \xB7 Cuivre ${n.inventory.copper} \xB7 Fer ${n.inventory.iron} \xB7 Cristaux ${n.inventory.crystal} \xB7 Diamants ${n.inventory.diamond}`,e("creative-build").checked=!!n.journey.creative,e("creative-build").disabled=n.journey.chapter<Ni.length,this.model&&this.scene.remove(this.model),this.model=new nt(this.library.geometry(t),this.library.material(t));let r=this.library.accent(t);r&&this.model.add(new nt(r.geometry,r.material)),this.model.rotation.y=t.rotation*Math.PI/2+.3,this.model.scale.setScalar(Math.min(t.size,1.2)),this.scene.add(this.model);let o=new yn().setFromObject(this.model),a=o.getCenter(new R);this.camera.lookAt(a),this.renderer.render(this.scene,this.camera)}journal(){let e=this.hooks.state(),t=Ro(e.journey,e.blocks,e.pickTier),n=this.$;n("chapter-title").textContent=t.title,n("chapter-detail").textContent=t.detail,n("chapter-number").textContent=`${Math.min(5,e.journey.chapter+1)} / 5`;let s=n("chapter-checks");s.replaceChildren();for(let[r,o,a]of t.conditions){let h=document.createElement("li");h.className=o>=a?"done":"",h.textContent=`${o>=a?"\u2713":"\u25CB"} ${r} \xB7 ${Math.min(a,Math.max(0,o||0))} / ${a}`,s.append(h)}n("chapter-reward").textContent=Ni[e.journey.chapter]?"R\xE9compense : "+Ni[e.journey.chapter].rewardText:"Toutes les \xE9tapes sont termin\xE9es. La construction libre est disponible dans le catalogue.",n("journal-resources").textContent=`${t.pieces} pi\xE8ces \xB7 ${t.materials} mat\xE9riaux \xB7 ${t.roof?"refuge construit":"refuge \xE0 b\xE2tir"}`,n("home-return").disabled=!e.journey.home,n("eat-berries").disabled=e.inventory.berries<1||e.journey.energy>=100,n("journal-energy").textContent=`\xC9nergie ${Math.round(e.journey.energy)} / 100 \xB7 Baies ${e.inventory.berries}`}};var It={sheep:{label:"Mouton",passive:!0,hp:32,speed:1.1,flee:3.7,radius:.48,height:1.15,feed:3,loot:{meat:2,wool:1},biomes:["meadow","alpine"]},deer:{label:"Chevreuil",passive:!0,hp:40,speed:1.5,flee:5.9,radius:.44,height:1.65,feed:3,loot:{meat:2},biomes:["forest","meadow"]},rabbit:{label:"Li\xE8vre",passive:!0,hp:18,speed:1.4,flee:5.2,radius:.25,height:.65,feed:3,loot:{meat:1},biomes:["meadow","forest"]},boar:{label:"Sanglier",hp:55,speed:2.3,radius:.5,height:1.05,damage:18,notice:7,windup:1.05,recovery:2.4,loot:{meat:3},biomes:["forest","meadow"]},wolf:{label:"Loup",hp:46,speed:3.6,radius:.42,height:1.2,damage:12,notice:16,windup:.8,recovery:1.8,loot:{meat:2},biomes:["forest","alpine","meadow"]},sentinel:{label:"Gardien de cristal",hp:95,speed:1.65,radius:.65,height:2.2,damage:24,notice:12,windup:1.3,recovery:2.7,loot:{stone:3,crystal:1},biomes:["cave"]},fox:{label:"Renard roux",passive:!0,hp:24,speed:1.7,flee:5.5,radius:.34,height:.85,loot:{meat:1},biomes:["forest","meadow","heath"],description:"Omnivore et farouche. Il fuit les courses et accepte les baies ; sa queue blanche vous aide \xE0 le suivre dans les bois."},badger:{label:"Blaireau",passive:!0,hp:36,speed:.85,flee:2.8,radius:.38,height:.7,loot:{meat:2},biomes:["forest","birch","heath"],description:"Habite les sous-bois. Plus lent et trapu que le renard ; trois repas espac\xE9s gagnent sa confiance."},goat:{label:"Ch\xE8vre des cr\xEAtes",passive:!0,hp:38,speed:1.4,flee:4.4,radius:.4,height:1.5,maxSlope:.95,loot:{meat:2,wool:1},biomes:["alpine","rock","steppe"],description:"Grimpe sur des pentes plus fortes que les autres animaux. Approchez \xE0 pied et nourrissez-la pour qu\u2019elle vous accompagne."},tortoise:{label:"Tortue des berges",passive:!0,hp:30,speed:.35,flee:.55,radius:.35,height:.55,loot:{meat:1},biomes:["shore","wetland","meadow"],description:"Vit autour des \xE9tangs. Se replie dans sa carapace \xE0 votre approche : elle absorbe alors 65 % des d\xE9g\xE2ts. Une baie la fait ressortir."},lynx:{label:"Lynx des landes",hp:52,speed:3.3,radius:.42,height:1.15,damage:16,notice:11,windup:1.05,recovery:3,charge:7.5,prepareRange:5,reach:1.5,loot:{meat:2,wool:1},biomes:["forest","heath","alpine"],description:"Chasseur des landes et des bois. Pr\xE9pare son bond pendant 1,05 s, puis s\u2019\xE9lance tout droit. Une esquive lat\xE9rale ouvre trois secondes pour riposter."},crawler:{label:"Araign\xE9e de schiste",hp:48,speed:2,radius:.62,height:.8,damage:10,notice:9,windup:1.2,recovery:2.8,reach:2.2,prepareRange:2,slow:2.4,loot:{coal:2,copper:1},biomes:["cave"],description:"R\xF4de dans les chambres profondes. Sa morsure annonc\xE9e ralentit la marche pendant 2,4 s. La garde bloque ce ralentissement ; la parade l\u2019\xE9tourdit."}},Co=(i,e,t)=>Math.max(e,Math.min(t,i)),Gi=(i,e=0)=>Number.isFinite(i)?i:e;function Xd(i){let e={seen:[],biomes:[],kills:{},tamed:[],fed:0,wool:0,parries:0,dodges:0,cave:!1,deep:!1,nights:0,homeDefence:0,...i?.stats};for(let t of["seen","biomes","tamed"])e[t]=Array.isArray(e[t])?[...new Set(e[t].filter(n=>typeof n=="string"))].slice(0,256):[];for(let t of["fed","wool","parries","dodges","nights","homeDefence"])e[t]=Math.max(0,Gi(e[t]));return(!e.kills||typeof e.kills!="object")&&(e.kills={}),{health:Co(Gi(i?.health,100),0,100),sword:Co(Math.floor(Gi(i?.sword,1)),1,3),armor:Co(Math.floor(Gi(i?.armor)),0,2),time:Math.max(0,Gi(i?.time)),hour:Co(Gi(i?.hour,17.4),0,23.999),cycle:i?.cycle!==!1,dayMinutes:Co(Gi(i?.dayMinutes,72),30,120),peaceful:!!i?.peaceful,debugged:!!i?.debugged,stats:e,achieved:{...i?.achieved},deaths:Math.max(0,Gi(i?.deaths)),nightSeconds:Math.max(0,Gi(i?.nightSeconds)),invulnerable:8,lastDamage:-100,attackCd:0,dodgeCd:0,dodgeTime:0,guardTime:0,guard:!1}}var vr=i=>i>=20||i<5;function r0(i,e,{energy:t=100,sheltered:n=!1,guard:s=!1}={}){e=Co(Gi(e),0,.12),i.time+=e;for(let o of["attackCd","dodgeCd","dodgeTime","invulnerable","slowTime"])i[o]=Math.max(0,(i[o]||0)-e);i.guard=s,i.guardTime=s?i.guardTime+e:0,i.time-i.lastDamage>12&&t>=35&&(i.health=Math.min(100,i.health+e*(n?2:.2)));let r=vr(i.hour);i.cycle&&(i.hour=(i.hour+e*24/(i.dayMinutes*60))%24),r&&(i.nightSeconds+=e),r&&!vr(i.hour)&&i.nightSeconds>=120&&(i.stats.nights++,i.nightSeconds=0),!r&&!vr(i.hour)&&(i.nightSeconds=0)}function vi(i){return{damage:[0,12,20,28][i.sword],delay:[0,.65,.58,.52][i.sword],label:["","\xC9p\xE9e de bois","\xC9p\xE9e de fer","\xC9p\xE9e de cristal"][i.sword]}}function o0(i,e){return i.dodgeCd>0||e<18?!1:(i.dodgeCd=1.6,i.dodgeTime=.32,i.invulnerable=Math.max(i.invulnerable,.32),!0)}function a0(i,e,t,{facing:n=!0}={}){if(i.peaceful)return{damage:0,energy:t,kind:"peaceful"};if(i.dodgeTime>0)return i.stats.dodges++,{damage:0,energy:t,kind:"dodge"};if(i.invulnerable>0)return{damage:0,energy:t,kind:"immune"};let s="hit";if(i.guard&&n&&t>=8){if(t-=8,i.guardTime<=.28)return i.stats.parries++,{damage:0,energy:t,kind:"parry"};e*=.35,s="block"}return e=Math.round(e*(1-[0,.2,.35][i.armor])),i.health=Math.max(0,i.health-e),i.lastDamage=i.time,i.invulnerable=.65,{damage:e,energy:t,kind:s}}function Fa(i,e){return e==="sword"?i.sword===1?{wood:4,iron:6}:i.sword===2?{iron:4,crystal:4}:null:e==="armor"?i.armor===0?{wool:4,wood:2}:i.armor===1?{wool:4,iron:8}:null:e==="meal"?{meat:2,coal:1}:null}function l0(i,e,t,n){let s=Fa(i,n);if(!s)return{ok:!1,error:"\xC9quipement d\xE9j\xE0 au maximum."};if(n==="sword"||n==="meal"||n==="armor"&&i.armor===1){if(!t.forge)return{ok:!1,error:"Allumez une forge pour cette recette."}}else if(!t.workbench)return{ok:!1,error:"Utilisez un \xE9tabli pour cette recette."};if(Object.entries(s).some(([r,o])=>(e[r]||0)<o))return{ok:!1,error:"Il manque des ressources pour cette recette."};for(let[r,o]of Object.entries(s))e[r]-=o;return n==="sword"?i.sword++:n==="armor"?i.armor++:e.meal=(e.meal||0)+2,{ok:!0,cost:s}}function qd(i,e,t,n){return!["berries","meal"].includes(n)||!t[n]||i.health>=100&&e.energy>=100?!1:(t[n]--,i.health=Math.min(100,i.health+(n==="meal"?35:8)),e.energy=Math.min(100,e.energy+(n==="meal"?40:25)),!0)}var zh=[["wood","Premiers copeaux","R\xE9colter 4 bois.",{wood:2},i=>i.j.harvested.wood>=4],["berries","Le go\xFBt du Vallon","R\xE9colter 3 baies.",{berries:3},i=>i.j.harvested.berries>=3],["walk","Les pieds voyageurs","Parcourir 300 m\xE8tres.",{berries:4},i=>i.walked>=300],["biomes","Trois horizons","D\xE9couvrir 3 biomes de surface.",{clay:4},i=>i.v.stats.biomes.length>=3],["cave","Sous nos pieds","Entrer dans une grotte.",{coal:2},i=>i.v.stats.cave],["deep","Dans les profondeurs","Explorer au-del\xE0 de 95 m dans les grottes.",{crystal:1},i=>i.v.stats.deep],["ores","Prospecteur","R\xE9colter charbon, cuivre et fer.",{iron:2},i=>["coal","copper","iron"].every(e=>i.j.harvested[e]>0)],["bench","Artisan","Utiliser un \xE9tabli.",{wood:4},i=>i.j.stations.workbench],["roof","Un chez-soi","Construire un refuge reconnu.",{wool:2},i=>!!i.refuge],["forge","Ma\xEEtre du feu","Allumer une forge.",{coal:3},i=>i.j.stations.forge],["beacon","La lumi\xE8re du retour","Activer un phare.",{copper:2},i=>i.j.stations.beacon],["designer","Toutes les mati\xE8res","Construire avec 6 mat\xE9riaux pay\xE9s.",{iron:2},i=>new Set(i.blocks.filter(e=>!e.free).map(e=>e.material)).size>=6],["village","Une vall\xE9e habit\xE9e","Achever les 5 chapitres.",{diamond:1},i=>i.j.chapter>=5],["naturalist","Carnet naturaliste","Observer les 3 esp\xE8ces passives \xE0 moins de 18 m.",{berries:6},i=>["sheep","rabbit","deer"].every(e=>i.v.stats.seen.includes(e))],["friend","Une confiance m\xE9rit\xE9e","Apprivoiser un animal en le nourrissant 3 fois.",{wool:2},i=>i.v.stats.tamed.length>=1],["shepherd","Berger patient","Obtenir 6 laines en nourrissant les moutons.",{wool:2},i=>i.v.stats.wool>=6],["armor","Pr\xEAt pour la route","Fabriquer une protection en laine.",{berries:3},i=>i.v.armor>=1],["fighter","Premier duel","Vaincre une cr\xE9ature hostile.",{meat:2},i=>Object.values(i.v.stats.kills).some(e=>e>0)],["parry","Au bon moment","R\xE9ussir 3 parades parfaites dans les 0,28 premi\xE8res secondes.",{iron:2},i=>i.v.stats.parries>=3],["dodge","Sur le c\xF4t\xE9","\xC9viter 2 attaques avec une esquive.",{berries:4},i=>i.v.stats.dodges>=2],["bestiary","Les dangers du Vallon","Vaincre un sanglier, un loup et un gardien.",{crystal:2},i=>["boar","wolf","sentinel"].every(e=>i.v.stats.kills[e]>0)],["night","Jusqu\u2019\xE0 l\u2019aube","Passer au moins 2 minutes de nuit, puis voir l\u2019aube naturelle.",{coal:3},i=>i.v.stats.nights>=1],["defence","Gardien du foyer","Vaincre 2 hostiles \xE0 moins de 20 m de son refuge.",{crystal:1},i=>i.v.stats.homeDefence>=2],["sword","Lame d\u2019am\xE9thyste","Fabriquer l\u2019\xE9p\xE9e de cristal.",{iron:3},i=>i.v.sword>=3]].map(([i,e,t,n,s])=>({id:i,title:e,detail:t,reward:n,test:s}));function Yd(i,e,t){let n=[];for(let s of zh)if(!Object.hasOwn(i.achieved,s.id)&&s.test({...e,v:i})){i.achieved[s.id]=Math.floor(i.time);for(let[r,o]of Object.entries(s.reward))t[r]=(t[r]||0)+o;n.push(s)}return n}var za=48,Bh=56,NM=600,c0=30,FM=180;var xi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Fi=i=>{let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967295},h0=(i,e,t,n)=>n.type==="block"?Math.hypot(Math.max(0,Math.abs(i-n.x)-(n.width||1)/2),Math.max(0,Math.abs(e-n.z)-(n.depth||1)/2))<t:Math.hypot(i-n.x,e-n.z)<t+(n.radius||0),$d=class{constructor(e,t,n=()=>[],s){if(this.world=e,this.field=t,this.obstacles=n,this.active=new Map,this.memory=new Map,this.events=[],this.scan=0,this.cave=!1,this.time=0,Array.isArray(s))for(let r of s.slice(-4096))r&&typeof r.id=="string"&&It[r.species]&&[r.x,r.z,r.hp,r.trust,r.fed,r.wool,r.dead].every(Number.isFinite)&&this.memory.set(r.id,{...r})}floor(e,t,n=this.cave){return n?this.field.support(e,t,this.field.floor(e,t)+.4):this.world.height(e,t)}safe(e,t){return[this.world.spawn,this.world.panorama].some(n=>n&&Math.hypot(e-n.x,t-n.z)<42)}valid(e,t,n,s=this.cave){let r=It[n],o=this.floor(e,t,s);if(!Number.isFinite(o)||Math.abs(e)>1445||Math.abs(t)>1445)return!1;if(s){if(!this.field.fits(e,o,t,r.radius,r.height))return!1}else{let a=this.world.sample(e,t),h=this.world.waterLevel?.(e,t);if(a.slope>(r.maxSlope||.65)||Number.isFinite(h)&&o<h+.1)return!1}return!this.obstacles(e,t,r.radius+1,s).some(a=>h0(e,t,r.radius,a)&&o<(a.y??a.baseY??0)+(a.height||1)&&o+r.height>(a.y??a.baseY??0))}spawn(e,t,n,s){if(this.active.has(e)||this.active.size>=za||!this.valid(n,s,t))return;let r=It[t],o=this.memory.get(e);if(o?.dead>0&&this.time-o.dead<NM)return;let a={id:e,species:t,x:n,z:s,y:this.floor(n,s),homeX:n,homeZ:s,hp:r.hp,trust:0,fed:-999,wool:-999,dead:0,yaw:Fi(e)*Math.PI*2,mode:"idle",timer:Fi(e+"t")*2+1,alert:0,hit:0,walk:0,attackId:0};o&&!o.dead&&(a={...a,...o},this.valid(a.x,a.z,t)||(a.x=n,a.z=s,a.y=this.floor(n,s))),a.mode="idle",a.timer=1+Fi(e)*2,a.cave=this.cave,this.active.set(e,a)}remember(e){for(this.memory.delete(e.id),this.memory.set(e.id,this.record(e));this.memory.size>4096;)this.memory.delete(this.memory.keys().next().value)}record(e){let{id:t,species:n,x:s,z:r,homeX:o,homeZ:a,hp:h,trust:c,fed:l,wool:u,dead:d,cave:f}=e;return{id:t,species:n,x:s,z:r,homeX:o,homeZ:a,hp:h,trust:c,fed:l,wool:u,dead:d,cave:f}}stream(e,t,n){this.cave=n;for(let[h,c]of this.active)(c.cave!==n||xi(c,e)>160||c.species==="wolf"&&!vr(t)&&c.mode!=="windup"&&c.mode!=="strike"||c.species==="boar"&&vr(t)&&c.mode==="idle")&&(this.remember(c),this.active.delete(h));if(n){for(let h=1;h<this.field.rooms.length;h++){let c=this.field.rooms[h],l=c.x-5,u=c.z+3;Math.hypot(l-e.x,u-e.z)<110&&(this.spawn("cave:"+h+":0","sentinel",l,u),h>=3&&this.spawn("cave:"+h+":crawler","crawler",c.x+5,c.z-4))}return}let s=this.world.panorama||this.world.spawn;if(s&&xi(s,e)<140)for(let[h,c]of["sheep","sheep","rabbit","deer","fox","badger"].entries())for(let l=0;l<12;l++){let u=.6+h*1.6+l*.23,d=s.x+Math.sin(u)*(18+l*2),f=s.z+Math.cos(u)*(18+l*2);if(this.valid(d,f,c)){this.spawn("welcome:"+h,c,d,f);break}}let r=Math.floor(e.x/Bh),o=Math.floor(e.z/Bh),a=[];for(let h=o-2;h<=o+2;h++)for(let c=r-2;c<=r+2;c++)for(let l=0;l<3;l++){let u=`wild:${c}:${h}:${l}`,d=Fi(this.world.seed+u),f=(c+.18+Fi(u+"x")*.64)*Bh,g=(h+.18+Fi(u+"z")*.64)*Bh;if(Math.hypot(f-e.x,g-e.z)>138)continue;let v=this.world.sample(f,g),p=v.biome,m=v.coverType||p,x=l===2?vr(t)?"wolf":d>.77?"lynx":"boar":d<.16?"rabbit":d<.34?"fox":d<.46?"badger":d<.7?"sheep":"deer";l<2&&(p==="alpine"||p==="rock"||p==="steppe")&&d<.6&&(x="goat"),l<2&&(p==="shore"||p==="wetland")&&d<.65&&(x="tortoise"),!(!It[x].biomes.includes(p)&&!It[x].biomes.includes(m))&&(!It[x].passive&&(this.safe(f,g)||Math.hypot(f-e.x,g-e.z)<14||d<.48)||a.push({id:u+":"+x,species:x,x:f,z:g,d:Math.hypot(f-e.x,g-e.z)}))}for(let h of a.sort((c,l)=>c.d-l.d))this.spawn(h.id,h.species,h.x,h.z)}line(e,t,n=this.cave){let s=xi(e,t),r=Math.ceil(s/.55);for(let o=1;o<r;o++){let a=o/r,h=e.x+(t.x-e.x)*a,c=e.z+(t.z-e.z)*a,l=(e.y||0)+.8+((t.y||0)-(e.y||0)+.1)*a;if(n&&this.field.density(h,l,c)<0||!n&&this.world.height(h,c)>l+.45||this.obstacles(h,c,.7,n).some(u=>h0(h,c,.18,u)&&l>(u.y??u.baseY)&&l<(u.y??u.baseY)+(u.height||1)))return!1}return!0}move(e,t,n,s,r=!0){let o=e.y,a=r?[0,.48,-.48,.95,-.95,1.65,-1.65]:[0];for(let h of a){let c=t+h,l=e.x+Math.sin(c)*n*s,u=e.z+Math.cos(c)*n*s,d=this.floor(l,u);if(!(Math.abs(d-o)>Math.max(.18,n*s*(It[e.species].maxSlope||.8))||!this.valid(l,u,e.species))&&![...this.active.values()].some(f=>f!==e&&xi({x:l,z:u},f)<(It[e.species].radius+It[f.species].radius)*.85&&Math.abs(f.y-d)<1))return e.x=l,e.z=u,e.y=d,e.yaw=c,e.walk+=n*s,!0}return!1}calm(e){e.mode="idle",e.timer=2,e.alert=0}passiveActivity(e,t,n){let s=xi(e,{x:e.homeX,z:e.homeZ});if(s>18){e.mode="roam",e.yaw=Math.atan2(e.homeX-e.x,e.homeZ-e.z),e.timer=Math.min(8,s/Math.max(.5,t.speed));return}let r=Fi(e.id+Math.floor(n/7));r<.46?(e.mode="graze",e.timer=3+Fi(e.id+Math.floor(n/3))*5):(e.mode=r<.76?"wander":"roam",e.yaw+=(Fi(e.id+Math.floor(n/2))-.5)*(e.mode==="roam"?2.4:1.5),e.timer=e.mode==="roam"?4+r*4:1.5+r*3)}update(e,t,{time:n,hour:s=17,cave:r=!1,sprint:o=!1,peaceful:a=!1,protectedAt:h=()=>!1}={}){this.time=n,e=Math.min(.12,Math.max(0,e)),this.scan-=e,(this.scan<=0||this.cave!==r)&&(this.stream(t,s,r),this.scan=1.2),this.events=[];let c=[...this.active.values()].filter(l=>["chase","windup","strike"].includes(l.mode)).length;for(let l of this.active.values()){let u=It[l.species],d=xi(l,t);if(l.timer-=e,l.hit=Math.max(0,l.hit-e),l.y=this.floor(l.x,l.z),d>100)continue;if(u.passive){if(l.species==="tortoise"&&l.trust<3&&n-l.fed>20&&d<3.5){l.mode="shell",l.timer=1;continue}if(l.mode==="shell"&&this.calm(l),l.mode==="flee"&&l.timer<=0&&this.calm(l),l.trust<3&&n-l.fed>20&&d<(o?10:3.4)&&l.mode!=="flee"&&(l.mode="flee",l.timer=2.5),l.mode==="flee"){this.move(l,Math.atan2(l.x-t.x,l.z-t.z),u.flee,e);continue}if(l.mode==="curious"&&l.timer>0){l.yaw=Math.atan2(t.x-l.x,t.z-l.z),l.species==="fox"&&d>4.5&&this.move(l,l.yaw,u.speed*.32,e);continue}if(l.mode==="observe"&&l.timer>0){l.yaw=Math.atan2(t.x-l.x,t.z-l.z);continue}if((l.mode==="curious"||l.mode==="observe")&&(l.mode="idle"),l.trust<3&&!o&&d>4&&d<(l.species==="fox"?13:9)&&l.mode!=="follow"){l.mode=l.species==="fox"||l.species==="deer"?"curious":"observe",l.timer=l.mode==="curious"?2.4:1.8,l.yaw=Math.atan2(t.x-l.x,t.z-l.z),l.species==="fox"&&d>4.5&&this.move(l,l.yaw,u.speed*.32,e);continue}if(l.trust>=3&&d>3&&d<22&&xi(l,t)<xi(l,{x:l.homeX,z:l.homeZ})+20){this.move(l,Math.atan2(t.x-l.x,t.z-l.z),u.speed*1.7,e),l.mode="follow";continue}(l.timer<=0||l.mode==="idle")&&this.passiveActivity(l,u,n),xi(l,{x:l.homeX,z:l.homeZ})>22&&l.trust<3&&(l.yaw=Math.atan2(l.homeX-l.x,l.homeZ-l.z)),l.mode==="wander"&&this.move(l,l.yaw,u.speed*.48,e),l.mode==="roam"&&this.move(l,l.yaw,u.speed*.82,e);continue}let f=!r&&(this.safe(t.x,t.z)||h(t,l));if(a||n<20||f||d>35){l.mode!=="idle"&&this.calm(l),l.timer<=0&&(l.yaw+=1,l.timer=4),this.move(l,l.yaw,u.speed*.2,e);continue}let g=d<u.notice+4&&this.line(l,t),v=Math.abs((t.y||0)-l.y)<2.5;if(l.mode==="idle"&&d<u.notice&&g&&v&&c<2&&(l.mode="chase",l.alert=1,c++,this.events.push({type:"alert",entity:l})),l.mode==="chase"){if(!g){l.alert-=e*.6,l.alert<=0&&this.calm(l);continue}l.alert=1,d<(u.prepareRange||(l.species==="boar"?6.5:l.species==="wolf"?1.9:2.6))&&v?(l.mode="windup",l.timer=u.windup,l.aim=Math.atan2(t.x-l.x,t.z-l.z),l.yaw=l.aim,l.attackId++,l.struck=!1):this.move(l,Math.atan2(t.x-l.x,t.z-l.z),u.speed,e)}else if(l.mode==="windup"&&l.timer<=0)l.mode="strike",l.timer=l.species==="boar"?.75:u.charge?.65:.25;else if(l.mode==="strike"){(l.species==="boar"||u.charge)&&this.move(l,l.aim,u.charge||9,e,!1);let p=u.reach||(l.species==="sentinel"?3:l.species==="boar"?1.6:2.1);!l.struck&&xi(l,t)<p&&v&&this.line(l,t)&&(l.struck=!0,this.events.push({type:"attack",entity:l,damage:u.damage,slow:u.slow||0,attackId:l.attackId})),l.timer<=0&&(l.mode="recover",l.timer=u.recovery)}else l.mode==="recover"&&l.timer<=0&&(l.mode="chase",l.alert=1)}return this.events}attack(e,t,{combat:n=!1,tool:s="hand",energy:r=100}={}){if(!this.active.has(e.id)||t.attackCd>0)return{ok:!1};let o=It[e.species];if(o.passive&&!n)return{ok:!1,message:"Animal paisible \xB7 nourrissez-le avec Interagir, ou sortez une arme."};let a=n?vi(t):{damage:s==="pick"?8:s==="shovel"?6:4,delay:.75};return r<6?{ok:!1,message:"Reprenez votre souffle avant de frapper."}:(t.attackCd=a.delay,e.hp=Math.max(0,e.hp-a.damage*(e.mode==="shell"?.35:1)),e.hit=.3,e.hp<=0?(e.dead=Math.max(.01,this.time),this.remember(e),this.active.delete(e.id),o.passive||(t.stats.kills[e.species]=(t.stats.kills[e.species]||0)+1),{ok:!0,dead:!0,loot:{...o.loot},energy:r-6}):(o.passive?(e.trust=0,e.mode="flee",e.timer=6):e.mode==="idle"&&(e.mode="chase",e.alert=1),this.remember(e),{ok:!0,energy:r-6}))}feed(e,t,n){let s=It[e.species];if(!s.passive)return{ok:!1,message:"Cette cr\xE9ature ne s\u2019apprivoise pas."};if(this.time-e.fed<c0)return{ok:!1,message:`Il vient de manger \xB7 revenez dans ${Math.ceil(c0-this.time+e.fed)} s.`};if((n.berries||0)<1)return{ok:!1,message:"Une baie est n\xE9cessaire pour le nourrir."};n.berries--,e.fed=this.time,e.trust=Math.min(3,e.trust+1),e.mode="graze",e.timer=8,t.stats.fed++;let r=0;return e.species==="sheep"&&this.time-e.wool>=FM&&(r=2,e.wool=this.time,n.wool=(n.wool||0)+r,t.stats.wool+=r),e.trust===3&&!t.stats.tamed.includes(e.id)&&t.stats.tamed.push(e.id),this.remember(e),{ok:!0,wool:r,message:`${s.label} \xB7 confiance ${e.trust}/3${r?" \xB7 +2 laines":""}${e.trust===3?" \xB7 vous accompagne":""}`}}serialize(){for(let e of this.active.values())this.remember(e);return[...this.memory.values()].map(e=>({...e}))}resetAggression(e){for(let t of this.active.values())!It[t.species].passive&&xi(t,e)<40&&this.calm(t)}get stats(){return{active:this.active.size,budget:za,remembered:this.memory.size,attacking:[...this.active.values()].filter(e=>["chase","windup","strike"].includes(e.mode)).length}}};function zM(i){let e=[],t=new se,n=(a,h,c,l,u=0)=>{let d=a==="ball"?new fi(1,0):a==="cone"?new os(1,1,7):new zn(1,1,1);d.index&&(d=d.toNonIndexed()),d.scale(...h),d.rotateZ(u),d.translate(...c),t.set(l);let f=[];for(let g=0;g<d.attributes.position.count;g++)f.push(t.r,t.g,t.b);d.setAttribute("color",new Me(f,3)),e.push(d)},s={sheep:["#e5dfc9","#50453c"],deer:["#ac7954","#694b3a"],rabbit:["#b7a48b","#b08b7d"],boar:["#645343","#413a34"],wolf:["#848e8a","#454d4b"],sentinel:["#687d82","#a57adc"],fox:["#bc683e","#e2caaa"],badger:["#686861","#ede6d4"],goat:["#c7b99c","#615746"],tortoise:["#586c3f","#95865c"],lynx:["#ba925d","#514231"],crawler:["#343c50","#68a4a9"]}[i],r=s;if(i==="tortoise"){n("ball",[.4,.29,.48],[0,.3,0],r[0]),n("ball",[.42,.08,.49],[0,.12,0],r[1]),n("ball",[.13,.11,.19],[0,.19,.52],r[1]);for(let a=0;a<8;a++){let h=a*2.39996;n("ball",[.105,.04,.12],[Math.sin(h)*.29,.39+Math.cos(h)*.035,Math.cos(h)*.32],"#84945e")}for(let a of[-1,1])n("ball",[.02,.025,.025],[a*.095,.235,.61],"#17251c")}else if(i==="crawler"){n("ball",[.38,.25,.46],[0,.4,-.18],r[0]),n("ball",[.28,.23,.28],[0,.35,.3],r[0]);for(let a of[-1,1])for(let h=0;h<3;h++)n("ball",[.034,.038,.04],[a*(.085+h*.066),.4,.53-h*.02],r[1]);n("cone",[.08,.2,.08],[.13,.22,.57],"#b5c8c4",.45),n("cone",[.08,.2,.08],[-.13,.22,.57],"#b5c8c4",-.45)}else if(i==="sentinel"){n("ball",[.75,.8,.52],[0,1.1,0],r[0]),n("ball",[.45,.4,.4],[0,1.98,.06],r[0]);for(let a of[-1,1])n("ball",[.28,.65,.28],[a*.9,1.1,0],r[0],a*.16),n("cone",[.2,.65,.2],[a*.32,1.72,.2],r[1],a*.5),n("ball",[.06,.07,.07],[a*.17,2,.42],"#cba7ff");n("cone",[.18,.55,.18],[0,1.5,.45],r[1])}else{let a=i==="rabbit",h=i==="deer",c=a?.35:h?1:i==="badger"?.42:.7;if(n("ball",a?[.26,.28,.4]:[.42,i==="sheep"?.42:.33,.66],[0,c,0],r[0]),i==="sheep")for(let d=0;d<10;d++){let f=d*Math.PI*2/10;n("ball",[.25,.24,.23],[Math.sin(f)*.29,.78+Math.cos(f)*.14,Math.cos(f)*.47],"#ddd8c7")}let l=a?.55:h?1.48:.91,u=a?.33:.67;h&&n("ball",[.21,.43,.22],[0,1.23,.5],r[0],-.25),n("ball",a?[.19,.21,.24]:[.25,.26,.34],[0,l,u],r[0]),n("ball",[a?.12:.19,.11,.17],[0,l-.08,u+.24],r[1]);for(let d of[-1,1])n("ball",[.036,.042,.03],[d*(a?.17:.235),l+.05,u+.1],"#1a2523"),n("cone",a?[.08,.4,.075]:[.11,.18,.08],[d*.17,l+(a?.31:.25),u-.02],r[1],d*.35),h&&(n("cone",[.055,.42,.055],[d*.19,1.88,.58],"#b4a080",d*.25),n("cone",[.04,.27,.04],[d*.3,2.02,.6],"#b4a080",d*-.65),n("cone",[.035,.22,.035],[d*.1,2.02,.6],"#b4a080",d*.72)),i==="sheep"&&n("ball",[.105,.07,.2],[d*.32,l-.03,u-.04],"#b8a995",d*.35),i==="boar"&&n("cone",[.04,.2,.04],[d*.17,.77,1],"#ebdec1",d*-.4),i==="goat"&&(n("cone",[.06,.44,.06],[d*.17,1.26,.57],r[1],d*.26),n("cone",[.08,.19,.08],[0,.67,.89],"#a89678")),i==="badger"&&n("box",[.11,.27,.38],[d*.15,l+.04,u+.04],"#292d2d"),i==="lynx"&&n("cone",[.028,.19,.03],[d*.23,1.23,.6],"#302c24");if(n("ball",[.08,.12,a?.08:.23],[0,c+.05,-(a?.38:.68)],r[1]),i==="fox"&&(n("ball",[.19,.19,.54],[0,.58,-.94],r[0]),n("ball",[.16,.16,.19],[0,.55,-1.33],r[1]),n("ball",[.22,.18,.21],[0,.8,.76],r[1])),i==="lynx")for(let d=0;d<14;d++)n("ball",[.036,.037,.04],[Math.sin(d*2.4)*.4,.7+Math.cos(d)*.18,(d%7-3)*.15],"#796444")}let o=Eh(e);return e.forEach(a=>a.dispose()),o.computeBoundingSphere(),o}var Oh=class extends $d{constructor(e,t,n,s,r){super(t,n,s,r),this.scene=e,this.group=new Ut,e.add(this.group),this.batches=new Map,this.material=new yt({vertexColors:!0,flatShading:!0,roughness:.92}),this.legMaterial=new yt({color:"#615949",roughness:.9}),this.legGeometry=new zn(.12,1,.12),this.dummy=new vt,this.color=new se,this.lightScale={value:1};for(let a of[this.material,this.legMaterial])a.onBeforeCompile=h=>{h.uniforms.faunaLightScale=this.lightScale,h.fragmentShader=`uniform float faunaLightScale;
`+h.fragmentShader,h.fragmentShader=h.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
reflectedLight.directDiffuse*=faunaLightScale;reflectedLight.directSpecular*=faunaLightScale;`)},a.customProgramCacheKey=()=>"vallon-fauna-light";let o=new ga(.85,1,30);o.rotateX(-Math.PI/2),this.ring=new en(o,new Rn({color:"#ed8854",transparent:!0,opacity:.7,depthWrite:!1,side:jt}),za),this.ring.count=0,this.ring.frustumCulled=!1,this.group.add(this.ring)}batch(e){if(!this.batches.has(e)){let t=new en(zM(e),this.material,za),n=new en(this.legGeometry,this.legMaterial,za*8);for(let s of[t,n])s.count=0,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,this.group.add(s);this.batches.set(e,{body:t,legs:n})}return this.batches.get(e)}render(e,t){this.lightScale.value=this.cave?.14:1;let n=new Map;for(let r of this.active.values())xi(r,t.position)<145&&(n.has(r.species)||n.set(r.species,[]),n.get(r.species).push(r));for(let r of this.batches.values())r.body.count=0,r.legs.count=0;let s=0;for(let[r,o]of n){let a=this.batch(r),h=It[r],c=r==="crawler"?8:4;a.body.count=o.length,a.legs.count=o.length*c,o.forEach((l,u)=>{let d=["wander","roam","curious","flee","follow","chase","strike"].includes(l.mode),f=l.walk*6,g=d?Math.sin(f)*.04:0,v=.9+Fi(l.id)*.2;this.dummy.position.set(l.x,l.y+g,l.z);let p=l.mode==="graze"?.2:l.mode==="curious"?-.06:0;this.dummy.rotation.set(p,l.yaw,l.mode==="curious"?Math.sin(e*3+Fi(l.id)*6)*.035:0),this.dummy.scale.set(v,v*(l.mode==="shell"?.68:r==="badger"?.7:1),v),this.dummy.updateMatrix(),a.body.setMatrixAt(u,this.dummy.matrix),this.color.set(l.hit>0?"#ffc0a6":l.mode==="windup"?"#e3b1a0":"#ffffff"),a.body.setColorAt(u,this.color);let m=r==="rabbit"?.23:r==="tortoise"?.15:r==="crawler"?.36:r==="badger"?.24:r==="deer"?.8:.45;for(let x=0;x<c;x++){let _=x%2?1:-1,y=x<2?1:-1,T=_*(r==="crawler"?.55:r==="rabbit"?.17:.27),w=r==="crawler"?.45-Math.floor(x/2)*.3:y*(r==="rabbit"?.22:.43),C=d?Math.sin(f+(x===0||x===3?0:Math.PI))*.26:0;this.dummy.position.set(l.x+(T*Math.cos(l.yaw)+w*Math.sin(l.yaw))*v,l.y+m*.5+Math.max(0,C)*.05,l.z+(w*Math.cos(l.yaw)-T*Math.sin(l.yaw))*v),this.dummy.rotation.set(C,l.yaw,r==="crawler"?_*.95:0,"YXZ"),r!=="crawler"&&x<2&&this.dummy.rotateY(-Math.PI/2),this.dummy.scale.set(v*(r==="crawler"?.45:1),m*v*(r==="crawler"?1.8:1),v),this.dummy.updateMatrix(),a.legs.setMatrixAt(u*c+x,this.dummy.matrix)}if(["windup","strike"].includes(l.mode)){this.dummy.position.set(l.x,l.y+.055,l.z),this.dummy.rotation.set(0,0,0);let x=h.reach||(r==="sentinel"?3:r==="boar"?1.6:2.1);this.dummy.scale.setScalar(x),this.dummy.updateMatrix(),this.ring.setMatrixAt(s++,this.dummy.matrix)}});for(let l of[a.body,a.legs])l.instanceMatrix.needsUpdate=!0;a.body.instanceColor&&(a.body.instanceColor.needsUpdate=!0)}this.ring.count=s,this.ring.instanceMatrix.needsUpdate=!0}target(e,t,n=7){let s=new ti(e,t),r=new yn,o=new R,a=null;for(let h of this.active.values()){let c=It[h.species];if(r.min.set(h.x-c.radius,h.y,h.z-c.radius),r.max.set(h.x+c.radius,h.y+c.height,h.z+c.radius),s.intersectBox(r,o)){let l=e.distanceTo(o);l<=n&&(!a||l<a.distance)&&(a={kind:"entity",entity:h,point:o.clone(),distance:l})}}return a}dispose(){this.group.removeFromParent();for(let e of this.batches.values())e.body.geometry.dispose();this.material.dispose(),this.legMaterial.dispose(),this.legGeometry.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose()}};var kh=class{constructor(e){let n=new Uint8Array(32768);for(let r=0;r<32;r++)for(let o=0;o<32;o++)for(let a=0;a<32;a++){let h=Math.sin(a*127.1+o*311.7+r*74.7)*43758.5453;n[a+32*(o+32*r)]=(h-Math.floor(h))*255}let s=new $r(n,32,32,32);s.format=ao,s.minFilter=s.magFilter=un,s.wrapS=s.wrapT=s.wrapR=Gr,s.needsUpdate=!0,this.target=new dn(1,1,{type:Di,depthBuffer:!1}),this.material=new nr({glslVersion:ar,depthTest:!1,depthWrite:!1,uniforms:{tNoise:{value:s},tDepth:{value:e},uInverse:{value:new Ke},uRotation:{value:new $e},uCamera:{value:new R},uSun:{value:new R},uTime:{value:0},uDay:{value:1},uDusk:{value:0},uCover:{value:.25},uSteps:{value:40},uNear:{value:.08},uFar:{value:7e3}},vertexShader:"in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`precision highp float;precision highp sampler3D;
        in vec2 vUv;out vec4 fragColor;
        uniform sampler3D tNoise;uniform sampler2D tDepth;
        uniform mat4 uInverse;uniform mat3 uRotation;uniform vec3 uCamera,uSun;
        uniform float uTime,uDay,uDusk,uCover,uNear,uFar;uniform int uSteps;
        float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return texture(tNoise,(i+f+.5)/32.).r;}
        float density(vec3 p){
          float height=(p.y-620.)/240.;if(height<0.||height>1.)return 0.;
          vec3 q=(p+vec3(uTime*2.8,0.,uTime*.7))*.0028;
          float n=noise(q)*.63+noise(q*2.03)*.26+noise(q*4.13)*.11;
          float shape=smoothstep(0.,.2,height)*(1.-smoothstep(.62,1.,height));
          return max(0.,n-(.72-uCover*.32))*shape*1.8;
        }
        void main(){
          vec4 view=uInverse*vec4(vUv*2.-1.,1.,1.);vec3 ray=normalize(view.xyz/view.w);
          float z=texture(tDepth,vUv).r;
          float limit=uNear*uFar/(uFar-z*(uFar-uNear))/max(.001,-ray.z);
          ray=normalize(uRotation*ray);
          if(abs(ray.y)<.001){fragColor=vec4(0.);return;}
          float a=(620.-uCamera.y)/ray.y,b=(860.-uCamera.y)/ray.y;
          float start=max(0.,min(a,b)),end=min(min(max(a,b),limit),6500.);
          if(end<=start){fragColor=vec4(0.);return;}
          float stepSize=(end-start)/float(uSteps),transmission=1.;vec3 color=vec3(0.);
          vec3 sunColor=mix(vec3(1.,.98,.91),vec3(1.,.44,.18),uDusk*.8);
          for(int i=0;i<48;i++){
            if(i>=uSteps||transmission<.025)break;
            vec3 p=uCamera+ray*(start+(float(i)+.5)*stepSize);float d=density(p);
            if(d>.001){
              float shade=density(p+uSun*45.)+density(p+uSun*100.)+density(p+uSun*180.);
              float lighting=exp(-shade*2.4),forward=pow(max(0.,dot(ray,uSun)),12.);
              vec3 lit=mix(vec3(.025,.04,.075),vec3(.38,.47,.59)+sunColor*(lighting*.75+forward*.22),uDay);
              float opacity=1.-exp(-d*stepSize*.018);
              color+=transmission*opacity*lit;transmission*=1.-opacity;
            }
          }
          fragColor=vec4(color,1.-transmission);
        }`})}resize(e,t,n){let s={high:.5,medium:.35,low:.25}[n];this.target.setSize(Math.max(1,Math.ceil(e*s)),Math.max(1,Math.ceil(t*s))),this.material.uniforms.uSteps.value={high:40,medium:28,low:18}[n]}update(e,t,n){let s=this.material.uniforms;s.uInverse.value.copy(e.projectionMatrixInverse),s.uRotation.value.setFromMatrix4(e.matrixWorld),s.uCamera.value.copy(e.position);for(let r of["uSun","uDay","uDusk","uCover"])r==="uSun"?s[r].value.copy(n.uniforms[r].value):s[r].value=n.uniforms[r].value;s.uTime.value=t,s.uNear.value=e.near,s.uFar.value=e.far}};var u0="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}";function d0(){return new Qt({side:Mn,depthWrite:!1,uniforms:{uSun:{value:new R(-1,.3,.22).normalize()},uTime:{value:0},uDay:{value:1},uDawn:{value:0},uDusk:{value:0},uCover:{value:.25}},vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`

 varying vec3 vDir;uniform vec3 uSun;uniform float uTime,uDay,uDawn,uDusk,uCover;

 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}

 void main(){

  vec3 d=normalize(vDir);float h=max(d.y,0.),mu=dot(d,uSun),sun=max(mu,0.);

  float dusk=uDusk,haze=exp(-h*7.);

  vec3 zenith=vec3(.025,.16,.52),horizon=mix(vec3(.30,.51,.76),vec3(.82,.45,.18),dusk*pow(sun,8.));

  vec3 col=mix(horizon,zenith,pow(h,.42));col=mix(col,vec3(.32,.49,.69),uDawn*haze*.32);col=mix(col,vec3(.21,.27,.34),smoothstep(.4,1.,uCover)*.5);

  // Rayleigh-shaped blue scattering and forward Mie aureole at low sun.

  col+=vec3(.15,.22,.31)*(1.+mu*mu)*haze*.08;

  col+=mix(vec3(.8,.72,.53),vec3(1.,.42,.12),dusk)*pow(sun,32.)*.24;

  col+=vec3(2.8,2.35,1.65)*smoothstep(.99987,.99997,sun);

  float transmission=1.;

  vec3 nightCol=mix(vec3(.033,.049,.091),vec3(.007,.015,.04),pow(h,.5));

  vec2 starUv=d.xz/max(.1,d.y+.3)*420.;vec2 cell=floor(starUv);float star=step(.997,hash(cell))*pow(max(0.,1.-length(fract(starUv)-.5)*2.),7.);

  nightCol+=vec3(.65,.77,1.)*star*transmission*smoothstep(.05,.4,h)*2.;

  float moon=max(dot(d,-uSun),0.);nightCol+=vec3(.58,.72,.95)*smoothstep(.99975,.99995,moon)*transmission;

  col=mix(nightCol,col,uDay);gl_FragColor=vec4(col,1.);

  #include <tonemapping_fragment>

  #include <colorspace_fragment>

 }`})}var Hh=class{constructor(e,t){this.renderer=e,this.scene=t,this.quality="high",this.size=new ue,this.sunPoint=new R,this.calls=0,this.target=new dn(1,1,{type:Di,depthBuffer:!0}),this.target.depthTexture=new js(1,1,ki),this.rays=new dn(1,1,{type:Di,depthBuffer:!1}),this.postScene=new Pi,this.postCamera=new ss,this.quad=new nt(new Cn(2,2)),this.quad.frustumCulled=!1,this.postScene.add(this.quad),this.rayMaterial=new Qt({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{tDepth:{value:this.target.depthTexture},tScene:{value:this.target.texture},uSun:{value:new ue},uStrength:{value:0}},vertexShader:u0,fragmentShader:`

   varying vec2 vUv;uniform sampler2D tDepth,tScene,tClouds;uniform vec2 uSun;uniform float uStrength;

   void main(){vec2 uv=vUv,stepUv=(uv-uSun)*.94/28.;float sum=0.,decay=1.;

    for(int i=0;i<28;i++){uv-=stepUv;float inside=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);float sky=step(.99998,texture2D(tDepth,uv).r)*inside;

     vec3 light=texture2D(tScene,uv).rgb;float cloudLight=smoothstep(.28,.9,dot(light,vec3(.21,.72,.07)));sum+=sky*cloudLight*(1.-texture2D(tClouds,uv).a)*decay;decay*=.96;}

    float radial=exp(-length(vUv-uSun)*1.35);gl_FragColor=vec4(vec3(sum/28.*radial*uStrength),1.);}`}),this.composite=new Qt({depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:this.target.texture},tRays:{value:this.rays.texture},uRayBlend:{value:0},uDay:{value:1},tDepth:{value:this.target.depthTexture},uTexel:{value:new ue(1,1)},uAO:{value:1},uPixelSize:{value:0}},vertexShader:u0,fragmentShader:`

   varying vec2 vUv;uniform sampler2D tScene,tRays,tDepth,tClouds;uniform float uRayBlend,uDay,uAO,uCloudBlend,uPixelSize;uniform vec2 uTexel;
   float linearDepth(float z){return .08*7000./(7000.-z*(7000.-.08));}

   void main(){vec2 uv=vUv;if(uPixelSize>0.){vec2 cell=uTexel*uPixelSize;uv=(floor(vUv/cell)+.5)*cell;}
    vec3 col=texture2D(tScene,uv).rgb;vec4 cloud=texture2D(tClouds,uv)*uCloudBlend;col=col*(1.-cloud.a)+cloud.rgb;
    float center=linearDepth(texture2D(tDepth,uv).r),contact=0.;vec3 bloom=vec3(0.);
    for(int j=0;j<8;j++){float a=float(j)*.785398;vec2 offset=vec2(cos(a),sin(a))*uTexel;
     float neighbor=linearDepth(texture2D(tDepth,uv+offset*5.).r),delta=center-neighbor;
     contact+=smoothstep(.07,.25,delta)*(1.-smoothstep(.35,1.7,delta));
     vec3 bright=texture2D(tScene,uv+offset*9.).rgb;bloom+=max(bright-vec3(1.4),vec3(0.));
    }
    col*=1.-contact/8.*.28*uAO*(1.-smoothstep(35.,90.,center));col+=bloom/8.*.09*uDay;

    col+=vec3(1.,.79,.47)*texture2D(tRays,uv).r*uRayBlend;

    float vignette=smoothstep(.28,.86,length((vUv-.5)*vec2(1.,.8)));col*=1.-vignette*.06;
    float luma=dot(col,vec3(.2126,.7152,.0722));col=mix(vec3(luma),col,1.08);col*=mix(vec3(.94,.98,1.06),vec3(1.035,1.01,.96),smoothstep(.12,.9,luma)*uDay);

    gl_FragColor=vec4(col,1.);

    #include <tonemapping_fragment>

    #include <colorspace_fragment>

   }`}),this.particles=new Zd(t),this.clouds=new kh(this.target.depthTexture),this.rayMaterial.uniforms.tClouds={value:this.clouds.target.texture},this.composite.uniforms.tClouds={value:this.clouds.target.texture},this.composite.uniforms.uCloudBlend={value:1}}setPixelSize(e){this.pixelSize=at.clamp(Number(e)||0,0,8),this.composite.uniforms.uPixelSize.value=this.pixelSize*this.renderer.getPixelRatio()}setQuality(e){this.quality=e,this.resize()}resize(){this.renderer.getDrawingBufferSize(this.size);let e=Math.max(1,this.size.x),t=Math.max(1,this.size.y),n=Math.min(this.renderer.capabilities.maxSamples,this.quality==="high"?4:this.quality==="medium"?2:0);this.target.samples!==n&&(this.target.dispose(),this.target.samples=n),this.target.setSize(e,t),this.composite.uniforms.uTexel.value.set(1/e,1/t),this.setPixelSize(this.pixelSize||0),this.composite.uniforms.uAO.value=this.quality==="low"?0:1;let s=this.quality==="high"?.5:.33;this.rays.setSize(Math.ceil(e*s),Math.ceil(t*s)),this.clouds?.resize(e,t,this.quality)}render(e,t,n,s=!1,r=!0){this.particles.update(e,t,n.uniforms.uDay.value,s,r),this.clouds.update(e,t,n),this.renderer.getDrawingBufferSize(this.size),(this.target.width!==this.size.x||this.target.height!==this.size.y)&&this.resize(),this.sunPoint.copy(e.position).addScaledVector(n.uniforms.uSun.value,3e3).project(e);let o=new R;e.getWorldDirection(o);let h=o.dot(n.uniforms.uSun.value)>0&&this.sunPoint.x>-1.4&&this.sunPoint.x<1.4&&this.sunPoint.y>-1.4&&this.sunPoint.y<1.4,c=!s&&h&&this.quality!=="low"?.62*n.uniforms.uDay.value:0;this.rayMaterial.uniforms.uSun.value.set(this.sunPoint.x*.5+.5,this.sunPoint.y*.5+.5),this.rayMaterial.uniforms.uStrength.value=c,this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,e),this.calls=this.renderer.info.render.calls,this.triangles=this.renderer.info.render.triangles,this.composite.uniforms.uCloudBlend.value=s?0:1,s||(this.quad.material=this.clouds.material,this.renderer.setRenderTarget(this.clouds.target),this.renderer.render(this.postScene,this.postCamera)),this.composite.uniforms.uRayBlend.value=c>0?1:0,this.composite.uniforms.uDay.value=n.uniforms.uDay.value,c>0&&(this.quad.material=this.rayMaterial,this.renderer.setRenderTarget(this.rays),this.renderer.render(this.postScene,this.postCamera)),this.quad.material=this.composite,this.renderer.setRenderTarget(null),this.renderer.render(this.postScene,this.postCamera)}},Zd=class{constructor(e){this.count=520,this.bursts=[],this.origin=new R;let t=new Float32Array((this.count+96)*3),n=new Float32Array(t.length),s=new Float32Array(this.count+96);this.geometry=new it,this.geometry.setAttribute("position",new Ot(t,3)),this.geometry.setAttribute("color",new Ot(n,3)),this.geometry.setAttribute("size",new Ot(s,1)),this.material=new Qt({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{uPixel:{value:1}},vertexShader:"attribute float size;varying vec3 vColor;uniform float uPixel;void main(){vColor=color;vec4 v=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*v;gl_PointSize=clamp(size*uPixel*260./max(1.,-v.z),1.,16.);}",fragmentShader:`varying vec3 vColor;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(vColor,pow(1.-r,2.)*.55);#include <tonemapping_fragment>
#include <colorspace_fragment>}`.replace(";#include",`;
#include`)}),this.points=new sa(this.geometry,this.material),this.points.frustumCulled=!1,this.points.name="Pollen, lucioles et poussi\xE8res",e.add(this.points)}burst(e,t="soil"){let n=t==="entity"?[.7,.35,.22]:t==="stone"||t==="crystal"?[.47,.58,.65]:[.48,.35,.18];for(let s=0;s<16;s++)this.bursts.push({p:e.clone(),v:new R((Math.random()-.5)*2,Math.random()*2.5,(Math.random()-.5)*2),life:.7+Math.random()*.4,color:n});this.bursts=this.bursts.slice(-96)}update(e,t,n,s,r){let o=Math.min(.06,Math.max(0,t-(this.last??t)));this.last=t,this.points.visible=r;let a=this.geometry.attributes.position,h=this.geometry.attributes.color,c=this.geometry.attributes.size;for(let l=0;l<this.count;l++){let u=l*2.399963,d=(l*17.37+t*.12)%36-18,f=(l*9.17+t*.07)%36-18,g=(l*.731+t*.045)%10-2;a.setXYZ(l,e.position.x+d+Math.sin(t*.3+u)*.6,e.position.y+g,e.position.z+f);let v=n<.3&&!s&&l%9===0;h.setXYZ(l,v?.85:s?.25:.58,v?1:s?.43:.56,v?.24:s?.67:.32),c.setX(l,v?.065*(.5+Math.sin(t*2+u)*.5):.012)}this.bursts=this.bursts.filter(l=>(r&&(l.life-=o,l.v.y-=o*3,l.p.addScaledVector(l.v,o)),l.life>0)),this.bursts.forEach((l,u)=>{a.setXYZ(this.count+u,...l.p.toArray()),h.setXYZ(this.count+u,...l.color),c.setX(this.count+u,l.life*.055)}),this.geometry.setDrawRange(0,this.count+this.bursts.length);for(let l of[a,h,c])l.needsUpdate=!0;this.material.uniforms.uPixel.value=Math.min(devicePixelRatio,1.5)}};var BM={wood:"bois",stone:"pierre",wool:"laine",meat:"viande",meal:"rations",iron:"fer",coal:"charbon",crystal:"cristaux",berries:"baies",copper:"cuivre",clay:"terre",diamond:"diamants"},Ba=i=>i?Object.entries(i).map(([e,t])=>`${t} ${BM[e]||e}`).join(" + "):"Maximum atteint",Vh=class{constructor(e){this.hooks=e,this.$=t=>document.getElementById(t),this.rows=new Map;for(let t of zh){let n=document.createElement("li"),s=document.createElement("span"),r=document.createElement("div"),o=document.createElement("strong"),a=document.createElement("small"),h=document.createElement("em");s.textContent="\u25C7",o.textContent=t.title,a.textContent=t.detail,h.textContent="R\xE9compense : "+Ba(t.reward),r.append(o,a,h),n.append(s,r),this.$("achievement-list").append(n),this.rows.set(t.id,{li:n,icon:s})}for(let[t,n]of Object.entries(It)){let s=document.createElement("article"),r=document.createElement("h3"),o=document.createElement("p");r.textContent=n.label,o.textContent=n.description||{sheep:"Paisible. Une baie donne 2 laines toutes les 3 minutes. Trois repas espac\xE9s de 30 s \xE9tablissent sa confiance.",deer:"Timide. La course le fait fuir ; marchez et offrez trois baies, \xE0 30 s d\u2019intervalle. Il vous accompagne ensuite.",rabbit:"Vif et farouche. Approchez doucement et nourrissez-le avec V. Un animal apprivois\xE9 suit son ami \xE0 proximit\xE9.",boar:"Territorial. Il avertit, pr\xE9pare sa charge pendant 1,05 s, puis fonce tout droit. Esquivez sur le c\xF4t\xE9 et frappez pendant sa r\xE9cup\xE9ration.",wolf:"Sort la nuit. Il poursuit, annonce sa morsure pendant 0,8 s, puis r\xE9cup\xE8re 1,8 s. Les lanternes et les phares actifs le repoussent.",sentinel:"Garde les grottes. Son attaque de zone est annonc\xE9e pendant 1,3 s. Sortez du cercle de 3 m ou parez, puis profitez des 2,7 s de r\xE9cup\xE9ration."}[t],s.append(r,o),s.dataset.species=t,this.$("bestiary-list").append(s)}for(let t of["sword","armor","meal"])this.$("craft-"+t).addEventListener("click",()=>e.craft(t));this.$("eat-meal").addEventListener("click",()=>e.eat());for(let t of document.querySelectorAll("[data-adventure-tab]"))t.addEventListener("click",()=>{for(let n of document.querySelectorAll("[data-adventure-pane]"))n.hidden=n.dataset.adventurePane!==t.dataset.adventureTab;for(let n of document.querySelectorAll("[data-adventure-tab]"))n.classList.toggle("selected",n===t)})}refresh(){let{v:e,inventory:t,j:n}=this.hooks.state(),s=this.$,r=0;for(let[o,{li:a,icon:h}]of this.rows){let c=Object.hasOwn(e.achieved,o);a.classList.toggle("done",c),h.textContent=c?"\u2713":"\u25C7",c&&r++}s("achievement-count").textContent=`${r} / ${zh.length} succ\xE8s \xB7 r\xE9compenses re\xE7ues automatiquement`,s("equipment-state").textContent=`${vi(e).label} \xB7 ${["Sans protection","Veste de laine \xB7 \u221220 % d\xE9g\xE2ts","Armure de fer \xB7 \u221235 % d\xE9g\xE2ts"][e.armor]}`,s("adventure-resources").textContent=`Laine ${t.wool||0} \xB7 Viande ${t.meat||0} \xB7 Rations ${t.meal||0} \xB7 Fer ${t.iron} \xB7 Cristaux ${t.crystal}`;for(let o of["sword","armor","meal"]){let a=Fa(e,o),h=s("craft-"+o),c=o==="armor"&&e.armor===0?n.stations.workbench:n.stations.forge;h.textContent={sword:"Am\xE9liorer la lame",armor:"Fabriquer la protection",meal:"Cuire 2 rations"}[o]+" \xB7 "+Ba(a),h.disabled=!a||!c||Object.entries(a).some(([l,u])=>(t[l]||0)<u)}s("eat-meal").disabled=!t.meal||e.health>=100&&n.energy>=100;for(let o of document.querySelectorAll("[data-species]"))o.classList.toggle("observed",e.stats.seen.includes(o.dataset.species))}hud(e){let{v:t,inventory:n}=this.hooks.state(),s=this.$;s("health-value").textContent=`${Math.ceil(t.health)} / 100`,s("health-fill").style.width=t.health+"%",s("health-bar").classList.toggle("low",t.health<30),s("combat-toggle").classList.toggle("selected",e),s("weapon-label").textContent=e?vi(t).label:"Outils",s("dodge-ready").textContent=t.dodgeCd>0?`${t.dodgeCd.toFixed(1)} s`:"Pr\xEAte",s("meal-count").textContent=n.meal||0}};function OM(i,e=Object.keys(_n)){let t=[];for(let n of[...new Set([...e,...Object.keys(_n)])]){if(!_n[n])continue;let s=Math.min(1e4,Math.max(0,Math.floor(Number(i[n])||0)));for(;s>0;){let r=Math.min(64,s);t.push({key:n,count:r}),s-=r}}return t}function f0(i,e){let t=e==="torch"?lh:e==="pick"?Da(i.pickTier):Fa(i.v,e),n=["pick","torch"].includes(e)?null:e==="armor"&&i.v.armor===0?"workbench":"forge",s=t?Object.entries(t).filter(([r,o])=>(i.inventory[r]||0)<o):[];return{cost:t,station:n,missing:s,ready:!!t&&(!n||!!i.j.stations[n])&&s.length===0}}var Gh=class{constructor(e){this.hooks=e,this.type="pick",this.selected="wood",this.page=0,this.order=Object.keys(_n);try{let n=JSON.parse(localStorage.getItem("vallon-bag-order"));Array.isArray(n)&&(this.order=n.filter(s=>_n[s]))}catch{}this.root=document.getElementById("inventory-workspace"),this.root.innerHTML='<div class="bag-layout"><section><div class="bag-heading"><h3>Votre sac</h3><button id="bag-sort">Trier</button></div><div id="bag-grid" class="bag-grid" aria-label="Ressources, piles de 64"></div><div class="bag-pager"><button id="bag-prev" aria-label="Page pr\xE9c\xE9dente">\u2190</button><span id="bag-page"></span><button id="bag-next" aria-label="Page suivante">\u2192</button></div><div id="bag-detail" class="bag-detail" aria-live="polite"></div><button id="bag-eat">Manger</button><p class="bag-hint">Piles de 64 \xB7 Glissez une ressource sur une autre pour les ranger.</p><h3>\xC9quipement</h3><div id="bag-equipment"></div></section><section class="craft-panel"><div class="eyebrow">LIVRE DE RECETTES</div><h3>Fabriquer</h3><div class="craft-tabs"><button data-craft="pick">Pioche</button><button data-craft="sword">\xC9p\xE9e</button><button data-craft="armor">Armure</button><button data-craft="meal">Cuisine</button><button data-craft="torch">Torches</button></div><strong id="craft-title"></strong><p id="craft-station"></p><div id="craft-ingredients" class="craft-ingredients" aria-label="Ingr\xE9dients de la recette"></div><div id="craft-status" role="status"></div><button id="bag-craft" class="primary">Fabriquer <span>\u2192</span></button><button id="bag-build">Blocs, mobilier & \xE9tabli <span>\u2197</span></button><p class="bag-hint">Le catalogue permet de choisir forme, mati\xE8re et couleur. Les mat\xE9riaux sont consomm\xE9s \xE0 la pose.</p></section></div>';let t=n=>this.root.querySelector("#"+n);this.$=t,this.root.querySelectorAll("[data-craft]").forEach(n=>n.onclick=()=>{this.type=n.dataset.craft,this.refresh()}),t("bag-craft").onclick=()=>{f0(e.state(),this.type).ready&&(this.type==="pick"?e.upgrade():e.craft(this.type),this.refresh())},t("bag-eat").onclick=()=>{e.eat(this.selected),this.refresh()},t("bag-build").onclick=e.build,t("bag-prev").onclick=()=>{this.page--,this.refresh()},t("bag-next").onclick=()=>{this.page++,this.refresh()},t("bag-sort").onclick=()=>{this.order=Object.keys(_n),this.page=0,this.store(),this.refresh()}}store(){try{localStorage.setItem("vallon-bag-order",JSON.stringify(this.order))}catch{}}refresh(){let e=this.hooks.state(),t=this.$,n=OM(e.inventory,this.order),s=Math.max(1,Math.ceil(n.length/27));this.page=Math.max(0,Math.min(s-1,this.page)),t("bag-grid").replaceChildren();for(let a=0;a<27;a++){let h=n[this.page*27+a],c=document.createElement("button");if(c.className="bag-slot",h){let{key:l,count:u}=h;c.dataset.item=l,c.draggable=!0,c.title=_n[l][0]+" \xD7 "+u,c.setAttribute("aria-label",c.title),c.innerHTML=On(l)+`<small>${_n[l][0]}</small><b>${u}</b>`,c.classList.toggle("selected",l===this.selected),c.onclick=()=>{this.selected=l,this.refresh()},c.ondragstart=d=>d.dataTransfer.setData("text/plain",l),c.ondragover=d=>d.preventDefault(),c.ondrop=d=>{d.preventDefault();let f=d.dataTransfer.getData("text/plain");if(!_n[f])return;this.order=[...new Set([...this.order,...Object.keys(_n)])];let g=this.order.indexOf(f),v=this.order.indexOf(l);[this.order[g],this.order[v]]=[this.order[v],this.order[g]],this.store(),this.refresh()}}else c.disabled=!0,c.setAttribute("aria-label","Case vide");t("bag-grid").append(c)}t("bag-page").textContent=`${this.page+1} / ${s} \xB7 ${n.length} piles`,t("bag-prev").disabled=this.page===0,t("bag-next").disabled=this.page===s-1;let r=_n[this.selected];t("bag-detail").textContent=`${r[0]} \xB7 ${e.inventory[this.selected]||0} au total. ${r[2]}`,t("bag-eat").hidden=!["berries","meal"].includes(this.selected),t("bag-eat").disabled=!e.inventory[this.selected]||e.v.health>=100&&e.j.energy>=100,t("bag-equipment").innerHTML=On("shovel")+On("pick",void 0,e.pickTier)+On("sword")+On("armor")+`Pelle \xB7 Pioche ${e.pickTier} \xB7 ${vi(e.v).label} \xB7 ${["Sans armure","Veste de laine","Armure de fer"][e.v.armor]}`;let o=f0(e,this.type);this.root.querySelectorAll("[data-craft]").forEach(a=>a.classList.toggle("selected",a.dataset.craft===this.type)),t("craft-title").textContent={pick:`Pioche niveau ${Math.min(4,e.pickTier+1)}`,sword:e.v.sword===1?"\xC9p\xE9e de fer":"\xC9p\xE9e de cristal",armor:e.v.armor===0?"Veste de laine":"Armure de fer",meal:"2 rations cuites",torch:"4 torches"}[this.type],t("craft-station").textContent=o.station?(o.station==="workbench"?"\xC9tabli":"Forge allum\xE9e")+(e.j.stations[o.station]?" \xB7 disponible":" \xB7 \xE0 d\xE9bloquer avec V"):"Fabrication dans le sac",t("craft-ingredients").replaceChildren();for(let[a,h]of Object.entries(o.cost||{})){let c=document.createElement("div");c.className="ingredient"+((e.inventory[a]||0)<h?" missing":""),c.innerHTML=On(a)+`<strong>${_n[a][0]}</strong><span>${e.inventory[a]||0} / ${h}</span>`,t("craft-ingredients").append(c)}t("craft-status").textContent=o.cost?o.station&&!e.j.stations[o.station]?"Construisez puis utilisez la station requise.":o.missing.length?"R\xE9coltez les ingr\xE9dients manquants.":"Tous les ingr\xE9dients sont pr\xEAts.":"Niveau maximal atteint.",t("bag-craft").disabled=!o.ready}};var V=i=>document.getElementById(i),Tt=V("world"),_t=new Set,af="vallon-v1",lf=()=>({torch:0,wood:12,stone:8,clay:16,berries:0,wool:0,meat:0,meal:0,coal:0,copper:0,iron:0,crystal:0,diamond:0}),je=null,ka=!0;try{je=JSON.parse(localStorage.getItem(af)||"null")}catch{ka=!1}var br=!1;try{br=localStorage.getItem("vallon-random-refresh")==="true"}catch{}var qh=Pd(new URL(location.href).searchParams.get("seed"));if(br||qh!==null&&qh!==je?.seed){try{je&&localStorage.setItem("vallon-world:"+je.seed,JSON.stringify(je))}catch{}if(je=null,!br)try{je=JSON.parse(localStorage.getItem("vallon-world:"+qh)||"null")}catch{}}var kt=e0(je?.bindings),bi=null,sn=0,yi=Number.isInteger(je?.seed)?je.seed:br?uh():qh??uh(),rn=new Pa(yi,je?.weather),Wa=Math.max(0,Math.min(1,Number(je?.motionScale??.65)));try{if(window.self===window.top){let i=new URL(location.href);i.searchParams.set("seed",yi),history.replaceState(null,"",i)}}catch{}var cf=je?.worldScale??(je?.blocks?.length||je?.terrainEdits?.length?1:.84),$n=["high","medium","low"].includes(je?.quality)?je.quality:"high",Fs=at.clamp(Number(je?.pixelSize)||0,0,8),Ue={...lf(),...je?.inventory};for(let i of Object.keys(lf()))Ue[i]=Math.max(0,Math.min(1e4,Number(Ue[i])||0));var Lo=0,Mt=!1,Jh=!1,Do=!1,Hn="hand",mn="dig",Mr=2.6,Zn=0,Ha=0,Bs=!1,Kh={hand:{label:"Main",strength:.16,delay:.55},shovel:{label:"Pelle",strength:.36,delay:.22},pick:{label:"Pioche",strength:.27,delay:.32}},hf,gn,Si=!1,we=Xd(je?.adventure),Yt,Xa,ai=!1,nf={x:0,z:0},Va=[],ps=at.clamp(Number(je?.sensitivity)||1,.35,2),Mi=we.hour,hn=0,Jd=0,Wh=0,$h=60,Xi,Ei,St,Po,Be=!1,$t=Math.max(2,Math.min(4,Number(je?.pickTier)||2)),kn=0,yr="",Oa=-99,ms,Ct,qe,Y,ot=null,He=!1,_r=Number(je?.walked)||0,jh=Number(je?.collected)||0,gs=new Set(Array.isArray(je?.removed)?je.removed:[]),Te=Wd(je?.journey||{harvested:{wood:[...gs].filter(i=>i.startsWith("tree:")).length*4,stone:[...gs].filter(i=>i.startsWith("rock:")).length*4,berries:Ue.berries,iron:Ue.iron+($t>=4?8:0),crystal:Ue.crystal}}),Ht=cn(je?.buildPlan),qi,vn=null,No=Array.from({length:3},(i,e)=>cn(je?.favoritePlans?.[e]||{material:ds[e].id})),Sn=new Map,uf=[],kM=new zn(1,1,1),wt=new Pi,qt=new Lh(wt,Sn,uf);wt.background=new se("#afc9c8");var zs=new Kr("#b2cbe0",53e-5);wt.fog=zs;var ht=new Wt(68,innerWidth/innerHeight,.08,7e3),on=new uo({canvas:Tt,antialias:!0,alpha:!1,powerPreference:"high-performance"});on.setPixelRatio(Math.min(devicePixelRatio,1.5));on.setSize(innerWidth,innerHeight);on.outputColorSpace=Kt;on.toneMapping=io;on.toneMappingExposure=1.08;on.shadowMap.enabled=!0;on.shadowMap.type=ac;var Io=new Is("#d6e7f1","#6c8055",2.4);wt.add(Io);var Bt=new sr("#ffdfad",3.3);Bt.position.set(-100,150,-160);Bt.castShadow=!0;Bt.shadow.mapSize.set(2048,2048);Bt.shadow.camera.left=-100;Bt.shadow.camera.right=100;Bt.shadow.camera.top=100;Bt.shadow.camera.bottom=-100;Bt.shadow.camera.near=1;Bt.shadow.camera.far=550;Bt.shadow.bias=-15e-5;Bt.shadow.normalBias=.08;wt.add(Bt,Bt.target);var _i=d0(),Za=new nt(new Ii(6e3,32,16),_i);Za.frustumCulled=!1;wt.add(Za);var Yh=new WeakMap;function sf(i){return Yh.has(i)||Yh.set(i,new aa(i,30)),Yh.get(i)}var Yn=new Ks(sf(kM),new Bi({color:"#eff6ce",transparent:!0,opacity:.7}));Yn.visible=!1;wt.add(Yn);var xr=null,p0="",Xh=new ba,Dn=new R,Wi=new R,Kd=new yn,HM=new R,jd=new Ke,m0=new $e,Jn=new Sh(ht,wt),bn=new Hh(on,wt),Ga=new oh(on,wt,bn.clouds),Qd=-1,df=new dh(wt),x0=new Th(on,wt,{exclude:[Yn,bn.particles.points,df.rain]}),Os=new ch(wt,ht),Sr=new si("#ffe1b8",65,42,1.5);ht.add(Sr);Sr.visible=!1;var Ja=new Is("#8fa9c0","#282232",.5);Ja.visible=!1;wt.add(Ja);function xe(i){V("toast").textContent=i,V("toast").classList.add("show"),clearTimeout(xe.timer),xe.timer=setTimeout(()=>V("toast").classList.remove("show"),2800)}function VM(i){qt.remove(i),ff([i])}function ff(i){i.length&&(Ct?.terrainChanged({x:Math.min(...i.map(e=>e.x-(e.width||Us(e).width)/2)),z:Math.min(...i.map(e=>e.z-(e.depth||Us(e).depth)/2)),maxX:Math.max(...i.map(e=>e.x+(e.width||Us(e).width)/2)),maxZ:Math.max(...i.map(e=>e.z+(e.depth||Us(e).depth)/2))}),Ei&&(Ei.last=-1/0))}function y0(i,e,t){let n=Ct?.queryColliders(i,e,t)||[];return n.push(...qt.colliders(i,e,t),...pf(i,e,t)),n}function pf(i,e,t,n=!1){return[...Yt?.active.values()||[]].filter(s=>s.cave===n&&Math.hypot(s.x-i,s.z-e)<t+1).map(s=>({type:"entity",x:s.x,z:s.z,baseY:s.y,height:It[s.species].height,radius:It[s.species].radius,id:s.id}))}function Ye(){if(He){try{localStorage.setItem(af,JSON.stringify({seed:yi,worldScale:cf,motionScale:Wa,weather:rn.serialize(),quality:$n,pixelSize:Fs,bindings:kt.bindings,sensitivity:ps,inventory:Ue,adventure:we,fauna:Yt?.serialize(),journey:Te,buildPlan:Ht,favoritePlans:No,pickTier:$t,inCave:Be,caveEdits:St.field.edits,crystalsRemoved:[...St.removed],cavePosition:Be?Y.position.toArray():null,terrainEdits:qe.serialize(),removed:[...gs],blocks:qt.serialize(),torches:Os.serialize(),walked:_r,collected:jh,position:(Be?Po:Y).position.toArray(),yaw:(Be?Po:Y).yaw,pitch:(Be?Po:Y).pitch})),ka=!0,He=!1}catch{ka=!1}V("save-label").textContent=ka?"Sauvegarde locale":"Session temporaire"}}function _0(i,e=!1){Xi?.dispose(),Yt?.dispose(),ms?.dispose(),Ct?.dispose(),Ei?.dispose(),St?.dispose(),Be=!1,wt.fog=zs,Sr.visible=!1,Ja.visible=!1,Bt.visible=!0,Io.visible=!0,Za.visible=!0,qt.clear(),Os.clear(),Si=!1,gn?.reset(),yi=i,e||(rn=new Pa(yi));let t=Om(yi,{scale:cf});if(qe=Jm(t),e&&qe.restore(je?.terrainEdits),ms=new mh(wt,qe),Ct=new bh(wt,qe,{quality:$n}),Ei=new wh(wt,qe,Ct),St=new Ch(wt,qe),e&&(St.field.restore(je?.caveEdits),St.setRemoved(je?.crystalsRemoved)),Ct.covered=(s,r,o)=>qt.covered(s,r,o)||!!qe.caveEntrance&&Math.hypot(s-qe.caveEntrance.x,r-qe.caveEntrance.z)<3,Ct.removed instanceof Set)for(let s of gs)Ct.removed.add(s);typeof Ct.setRemoved=="function"&&Ct.setRemoved(gs),Yt=new Oh(wt,qe,St.field,(s,r,o,a)=>a?[]:[...Ct.queryColliders(s,r,o),...qt.colliders(s,r,o)],e?je?.fauna:null),Y=new So(ht,qe,y0),Po=Y;let n=Nm(t,yi);if(qe.spawn={x:n.x,z:n.z},Xi=new ah(wt,qe,St,{...t,spawn:qe.spawn}),qe.caveEntrance={x:Xi.position.x,z:Xi.position.z},Y.teleport(n.x,n.z),Y.yaw=n.yaw,Y.pitch=n.pitch,Y.syncCamera(),e&&Array.isArray(je?.blocks)){for(let s of je.blocks.slice(0,2e3))qt.add(s,!1);qt.rebuild()}if(e&&Array.isArray(je?.position)&&je.position.every(Number.isFinite)){Y.teleport(je.position[0],je.position[2]);for(let s of qt.colliders(Y.position.x,Y.position.z,1))Math.abs(s.x-Y.position.x)<s.width/2+Y.radius&&Math.abs(s.z-Y.position.z)<s.depth/2+Y.radius&&s.y+s.height<=je.position[1]+.25&&(Y.position.y=Math.max(Y.position.y,s.y+s.height));Y.yaw=Number(je.yaw)||0,Y.pitch=at.clamp(Number(je.pitch)||.01,-1.47,1.47),Y.syncCamera()}e&&Os.restore(je?.torches),e&&je?.inCave&&mf(je?.cavePosition),V("seed-label").textContent=String(yi),V("world-seed").value=yi,Do=!1,V("play").disabled=!0,V("play").innerHTML="Pr\xE9paration du paysage\u2026 <span>\u2197</span>",Zt(),w0(),He=!0}function Zt(){YM();for(let e of["wood","stone","clay"])V(e+"-count").textContent=Ue[e];V("undo-sculpt").disabled=!qe?.undoCount||Be,V("berry-count").textContent=Ue.berries,Xa?.refresh(),hf?.refresh(),qi&&!V("construction").hidden&&qi.refresh(),V("ore-bag").textContent=`Charbon ${Ue.coal} \xB7 Cuivre ${Ue.copper} \xB7 Fer ${Ue.iron} \xB7 Cristaux ${Ue.crystal} \xB7 Diamants ${Ue.diamond}`;let i=Da($t);V("upgrade-pick").textContent=i?`Pioche niv. ${$t} \u2192 ${$t+1} \xB7 ${Object.entries(i).map(([e,t])=>t+" "+(e==="wood"?"bois":e==="iron"?"fer":"pierre")).join(" + ")}`:"Pioche niv. 4 \xB7 maximale",V("upgrade-pick").disabled=!i||Object.entries(i).some(([e,t])=>Ue[e]<t)}function b0(i){Xi.group.visible=i,ms.rootGroup.visible=i,Ei.group.visible=i,Za.visible=i,Bt.visible=i,Io.visible=i;for(let e of Ct.grassCells.values())for(let t of e.meshes)t.visible=i;for(let e of[...Ct.batchMeshes.values(),...Ct.foliageBatches.values(),...Ct.berryBatches.values(),...uf])e.visible=i}function mf(i){Be||(Po=Y,Y=new Rh(ht,St.field),Y.colliderProvider=(e,t,n)=>pf(e,t,n,!0),Y.pitch=.03,we.stats.cave=!0,Yt&&(Yt.serialize(),Yt.active.clear(),Yt.scan=0),Array.isArray(i)&&i.length===3&&i.every(Number.isFinite)&&St.field.fits(...i)&&(Y.position.fromArray(i),Y.syncCamera()),Be=!0,b0(!1),St.group.visible=!0,Sr.visible=!0,Ja.visible=!0,wt.fog=new Kr("#0c1420",.027),wt.background.set("#0c1420"),kn=0,_t.clear(),lt=null,He=!0,Zt(),En())}function Fo(){Be&&(Yt&&(Yt.serialize(),Yt.active.clear(),Yt.scan=0),Y=Po,Y.resetInput(),Y.syncCamera(),Be=!1,St.group.visible=!1,Sr.visible=!1,Ja.visible=!1,wt.fog=zs,wt.background.set("#afc9c8"),b0(!0),kn=0,_t.clear(),lt=null,He=!0,Zt(),En())}function M0(){let i=Xi.distance(Y,Be);if(i>6&&!gn?.fly&&!gn?.noclip){xe(Be?`Rejoignez la sortie \xE9clair\xE9e \xB7 ${Math.round(i)} m.`:`Rejoignez l\u2019entr\xE9e balis\xE9e \xB7 ${Math.round(i)} m. Menu \u2192 Grottes.`);return}Be?(Fo(),xe("De retour \xE0 la lumi\xE8re.")):(mf(),xe("Explorez les galeries : charbon, cristaux, puis pierre profonde. La sortie \xE9clair\xE9e reste derri\xE8re vous.")),Ye()}function Ka(){Be&&Fo(),Y.teleport(qe.panorama.x,qe.panorama.z),Y.yaw=qe.panorama.yaw,Y.pitch=qe.panorama.pitch,Y.syncCamera(),He=!0,Ye(),xe("Le belv\xE9d\xE8re du lac.")}function Qh(){let i=Qm(Ue,$t);if(!i){xe("R\xE9coltez les mat\xE9riaux indiqu\xE9s pour am\xE9liorer votre pioche.");return}Ue=i.inventory,$t=i.tier,R0("pick"),Zt(),He=!0,Ye(),xe(`Pioche niveau ${$t} : de nouvelles roches deviennent accessibles.`)}function S0(i,e){let t=Ih(e,Hn,$t),n=Math.max(t.tier,i.tier||1);if(t.level<n)return(hn-Oa>.7||yr!==`blocked:${e}`)&&xe(`${t.label} \xB7 pioche de niveau ${n} requise.`),Oa=hn,yr=`blocked:${e}`,kn=0,!1;let s=i.id||i.block?.key||i.collider?.id||`${Math.floor(i.point.x/1.5)},${Math.floor(i.point.y/1.5)},${Math.floor(i.point.z/1.5)}`;return Te.energy=Math.max(0,Te.energy-.22),He=!0,(s!==yr||hn-Oa>.7)&&(kn=0),yr=s,Oa=hn,kn+=.18/t.duration,Jn.strike(),Y.impact(.55),bn.particles.burst(i.point,e),kn<1?!1:(kn=0,yr="",!0)}function E0(i){if(!(!i||!S0(i,i.material))){if(i.kind==="crystal"){if(!St.harvestCrystal(i.id))return;Ue.crystal+=4,Na(Te,"crystal",4),xe("+4 cristaux d\u2019am\xE9thyste")}else{ht.getWorldDirection(Dn);let e=St.field.mine(i.point,Dn);if(!e){xe("La galerie ne peut pas \xEAtre prolong\xE9e ici.");return}St.invalidate(e);let t=Ph[i.material],n=i.material==="stone"||i.material==="deepstone"?1:3;Ue[t.resource]+=n,Na(Te,t.resource,n),xe(`+${n} ${t.label.toLowerCase()}`)}He=!0,jh++,Zt(),Ye()}}function Er(){V("pixel-preview").hidden=!0,Mt=!1,document.pointerLockElement===Tt&&document.exitPointerLock(),document.body.classList.remove("playing"),V("welcome").hidden=!1,V("playing-ui").hidden=!0,V("target-label").textContent="",Yn.visible=!1,V("mining-meter").hidden=!0,Jn.brush.visible=!1,_t.clear(),Y.resetInput(),lt=null,Ye()}function Yi(){Do&&(Mt=!0,Jh=!0,document.body.classList.add("playing"),V("welcome").hidden=!0,V("playing-ui").hidden=!1,V("settings").hidden=!0,V("help").hidden=!0,V("construction").hidden=!0,V("journal").hidden=!0,V("achievements").hidden=!0,V("field-kit").hidden=!0,gn&&(gn.root.hidden=!0),V("play").innerHTML="Reprendre la promenade <span>\u2197</span>",Tt.focus())}function li(i){let e=vs();Er();for(let t of["settings","help","construction","journal","achievements","field-kit","debug"])V(t).hidden=!0;V("welcome").hidden=!0,V(i).hidden=!1,i==="debug"&&gn.refresh(),i==="field-kit"&&hf?.refresh(),i==="construction"&&qi?.open(e?.block),i==="journal"&&qi?.journal(),i==="achievements"&&Xa?.refresh()}function fs(){bi=null,Uo();for(let i of["settings","help","construction","journal","achievements","field-kit","debug"])V(i).hidden=!0;Jh?Yi():V("welcome").hidden=!1}function w0(){let i={high:1.5,medium:1.15,low:.85}[$n];on.setPixelRatio(Math.min(devicePixelRatio,i)),on.setSize(innerWidth,innerHeight),on.shadowMap.enabled=$n!=="low";let e=$n==="high"?4096:2048;Bt.shadow.mapSize.x!==e&&(Bt.shadow.map?.dispose(),Bt.shadow.map=null,Bt.shadow.mapSize.set(e,e)),bn.setQuality($n),Ga.setQuality($n),Ct?.setQuality($n),V("quality").value=$n}function ja(){V("time").value=Mi;let i=Um(Mi),e=rn.values,t=i.day;_i.uniforms.uDay.value=t,_i.uniforms.uDawn.value=i.dawn,_i.uniforms.uDusk.value=i.dusk,_i.uniforms.uCover.value=e.cover,Io.intensity=.24+t*(1.35+e.cover*.35)+rn.flash*2,Io.color.set("#8cadd7").lerp(new se("#d6e7f1"),t),Io.groundColor.set("#263142").lerp(new se("#465637"),t),on.toneMappingExposure=1.08,zs.color.fromArray(i.fog).lerp(new se("#738697"),e.fog*.4),zs.density=i.fogDensity+e.fog*.004,rn.flash&&zs.color.lerp(new se("#d5e5ff"),rn.flash*.5);for(let o of Ct?.grassMaterials||[])o.uniforms.uDayLight.value=t,o.uniforms.uFogColor.value.copy(zs.color),o.uniforms.uFogDensity.value=zs.density;Ei&&(Ei.waterMaterial.uniforms.dayLight.value=t);let n=(Mi-6)/12*Math.PI,s=new R(Math.cos(n),Math.sin(n)*.8,.22).normalize();_i.uniforms.uSun.value.copy(s),Bt.color.fromArray(i.sun),Bt.intensity=3.8*t*at.smoothstep(s.y,0,.22)*(1-e.cover*.3);for(let o of Ct?.grassMaterials||[])o.uniforms.uSunDir.value.copy(s),o.uniforms.uLightColor.value.copy(Bt.color);V("weather-label").textContent=hs[rn.type].label;let r=`${String(Math.floor(Mi)).padStart(2,"0")}:${String(Math.floor(Mi%1*60)).padStart(2,"0")}`;V("hour").textContent=r,V("time-label").textContent=r}function wr(i){ai=!1,Si=!1,sn=t0(i);let e=mr[sn];Bs=!1,Hn=e.tool||"hand",e.material!=null&&(Lo=e.material,Ht=cn(No[Lo]),qi?.set(Ht),He=!0),mn="dig",kn=0,yr="",document.querySelectorAll("[data-slot]").forEach(t=>t.classList.toggle("selected",Number(t.dataset.slot)===sn)),En()}function T0(i){return i.type==="tree"?"wood":i.berrySpecies!=null?"berries":"stone"}function vs(){if(Be){ht.updateMatrixWorld(),ht.getWorldDirection(Dn);let s=St.target(ht.position,Dn),r=Yt?.target(ht.position,Dn);return r&&(!s||r.distance<s.distance)?r:s}ht.updateMatrixWorld(),Xh.setFromCamera(new ue(0,0),ht),Xh.far=7;let i=null,e=Xh.intersectObjects(uf,!1)[0];if(e){let s=e.object.userData.records[e.instanceId];e.object.getMatrixAt(e.instanceId,jd),jd.premultiply(e.object.matrixWorld),m0.getNormalMatrix(jd),i={kind:"block",distance:e.distance,point:e.point.clone(),normal:e.face.normal.clone().applyNormalMatrix(m0).normalize(),block:s}}ht.getWorldDirection(Dn);let t=Ct.queryColliders(ht.position.x+Dn.x*3.5,ht.position.z+Dn.z*3.5,8,{includeBushes:!0});for(let s of t){let r=s.radius;Kd.min.set(s.x-r,s.baseY,s.z-r),Kd.max.set(s.x+r,s.baseY+s.height,s.z+r);let o=Xh.ray.intersectBox(Kd,HM);if(o){let a=o.distanceTo(ht.position);a<=7&&(!i||a<i.distance)&&(i={kind:"prop",distance:a,point:o.clone(),collider:s})}}for(let s=.15;s<=7;s+=.15)if(Wi.copy(ht.position).addScaledVector(Dn,s),Wi.y<=qe.height(Wi.x,Wi.z)){let r=s-.15,o=s;for(let a=0;a<6;a++){let h=(r+o)/2;Wi.copy(ht.position).addScaledVector(Dn,h),Wi.y>qe.height(Wi.x,Wi.z)?r=h:o=h}Wi.copy(ht.position).addScaledVector(Dn,o),(!i||o<i.distance)&&(i={kind:"ground",distance:o,point:Wi.clone(),normal:new R(0,1,0)});break}let n=Yt?.target(ht.position,Dn);return n&&(!i||n.distance<i.distance)?n:i}function gf(i){if(!i||i.kind==="prop"||i.kind==="entity"||Be)return null;let e=cn(Ht),t=Us(e);if(e.rotation%2&&([t.width,t.depth]=[t.depth,t.width]),i.kind==="block"){let a=i.block,h=i.normal,c={...e,x:a.x,y:a.y,z:a.z};return Math.abs(h.y)>.5?c.y=h.y>0?a.y+a.height:a.y-t.height:Math.abs(h.x)>Math.abs(h.z)?c.x+=Math.sign(h.x)*(a.width+t.width)/2:c.z+=Math.sign(h.z)*(a.depth+t.depth)/2,c}let n=e.size===.5?.5:e.size===2?2:1,s=Math.floor(i.point.x/n)*n+n/2,r=Math.floor(i.point.z/n)*n+n/2,o=[[-.48,-.48],[-.48,.48],[.48,-.48],[.48,.48]].map(([a,h])=>qe.height(s+a*t.width,r+h*t.depth));return{...e,x:s,z:r,y:Math.min(...o)-.035}}function qa(i,e=null,t=[]){if(!i||Sn.size>=2e3&&!e)return!1;let n=Us(i),s=Ua({...i,key:"preview"}),r={x:Y.position.x,z:Y.position.z,y:Y.position.y,width:Y.radius*2,depth:Y.radius*2,height:Y.bodyHeight};if(i.y<qe.height(i.x,i.z)-.8||s.some(o=>Nh(o,r)))return!1;for(let o of pf(i.x,i.z,Math.max(n.width,n.depth)))if(s.some(a=>Math.hypot(a.x-o.x,a.z-o.z)<o.radius+Math.max(a.width,a.depth)/2&&a.y<o.baseY+o.height&&a.y+a.height>o.baseY))return!1;for(let o of qt.colliders(i.x,i.z,Math.max(n.width,n.depth)))if(o.owner!==e&&s.some(a=>Nh(a,o)))return!1;for(let o of t)if(s.some(a=>Ua({...o,key:"pending"}).some(h=>Nh(a,h))))return!1;for(let o of Ct.queryColliders(i.x,i.z,Math.max(n.width,n.depth)))if(s.some(a=>Math.hypot(a.x-o.x,a.z-o.z)<o.radius+Math.max(a.width,a.depth)/2&&a.y<o.baseY+o.height&&a.y+a.height>o.baseY))return!1;return![...Sn.values()].some(o=>o.key!==e&&Math.abs(o.x-i.x)<.001&&Math.abs(o.y-i.y)<.001&&Math.abs(o.z-i.z)<.001)}function A0(){if(ot=vs(),ot?.kind==="entity"){U0(ot);return}if(Be){E0(ot);return}if(!ot||ot.kind==="ground"){xe("Approchez-vous d\u2019un arbre, d\u2019un rocher ou d\u2019un bloc.");return}let i=ot.kind==="prop"?T0(ot.collider):Ui(ot.block.material).mining;if(S0(ot,i)){if(ot.kind==="block"){for(let[e,t]of Object.entries(ot.block.paid))Ue[e]=(Ue[e]||0)+t;VM(ot.block),xe("Pi\xE8ce d\xE9mont\xE9e \xB7 recette r\xE9cup\xE9r\xE9e")}else{let e=ot.collider.berrySpecies!=null?ot.collider.berryCount:4,t=Ct.harvest(ot.collider.id);if(!t)return;gs.add(ot.collider.id),Ue[t]=(Ue[t]||0)+e,jh+=e,Na(Te,t,e),xe(t==="berries"?`+${e} baies \xB7 buisson r\xE9colt\xE9`:t==="wood"?"+4 bois \xB7 de quoi b\xE2tir":"+4 pierres \xB7 solides fondations")}Jn.strike(),Y.impact(.55),He=!0,Zt(),Ye()}}function R0(i){Kh[i]&&(wr(mr.findIndex(e=>e.tool===i)),Tt.focus())}function En(){document.querySelectorAll("[data-quick-action]").forEach(e=>e.classList.toggle("selected",Bs&&e.dataset.quickAction===mn)),V("interaction").firstElementChild.textContent=Bs?"E / clic G \xB7 "+{dig:"Creuser",raise:"Remblayer",smooth:"Lisser"}[mn]:"E / clic G \xB7 Miner";for(let[e,t]of["hand","shovel","pick"].entries()){let n=document.querySelector(`[data-slot="${e}"]`),s=n.querySelector(".tool-icon"),r=t+":"+$t;n.dataset.iconKey!==r&&((s||n.querySelector(".item-icon")).outerHTML=On(t,void 0,$t),n.dataset.iconKey=r)}V("torch-equip").classList.toggle("selected",Si),V("torch-count").textContent=Ue.torch,V("torch-equip").dataset.iconKey||(V("torch-equip").querySelector(".item-icon").outerHTML=On("torch","#ffb646"),V("torch-equip").dataset.iconKey="torch"),No.forEach((e,t)=>{let n=Ui(e.material),s=document.querySelector(`[data-slot="${t+3}"]`);s.querySelector("span").textContent=gi.find(o=>o.id===e.shape).label==="Bloc"?n.label:gi.find(o=>o.id===e.shape).label;let r=e.shape+":"+n.color;s.dataset.iconKey!==r&&(s.querySelector(".cube").innerHTML=On(e.shape,n.color),s.dataset.iconKey=r),s.querySelector(".cube").style.backgroundColor="transparent",s.querySelector("b").textContent=Ue[Object.keys(Vi(e))[0]]||0,s.setAttribute("aria-label",`${t+4} \u2014 ${gi.find(o=>o.id===e.shape).label}, ${n.label}`)}),document.querySelectorAll("[data-tool]").forEach(e=>e.classList.toggle("selected",e.dataset.tool===Hn)),document.querySelectorAll("[data-action]").forEach(e=>e.classList.toggle("selected",e.dataset.action===mn)),V("build-label").textContent=vn?{cabin:"Chalet",terrace:"Terrasse",workshop:"Atelier couvert"}[vn]:gi.find(e=>e.id===Ht.shape).label+" \xB7 "+Ui(Ht.material).label;let i=vn?$a(vn,{x:0,y:0,z:0}).reduce((e,t)=>{for(let[n,s]of Object.entries(Vi(t)))e[n]=(e[n]||0)+s;return e},{}):Vi(Ht);V("build-cost").textContent=Te.creative?"Libre":Ao(i),V("cancel-blueprint").hidden=!vn,V("tool-status").textContent=`${sn>=3?mr[sn].label:Kh[Hn].label}${Hn==="pick"?" niv. "+$t:""} \xB7 rayon ${Mr.toFixed(1)} m`,V("interaction").innerHTML=`Clic G / ${kt.label("primary")} <b>casser</b><span>\xB7</span>Clic D / ${kt.label("build")} <b>poser</b><span>\xB7</span>Clic D gliss\xE9 <b>regarder</b>`}function Uo(){document.querySelectorAll("[data-key]").forEach(i=>i.textContent=kt.label(i.dataset.key)),document.querySelectorAll("[data-bind]").forEach(i=>{i.textContent=i.dataset.bind===bi?"\u2026":kt.label(i.dataset.bind),i.classList.toggle("waiting",i.dataset.bind===bi)}),V("binding-status").textContent=bi?`Appuyez sur une touche pour \xAB ${us[bi]} \xBB. \xC9chap pour annuler.`:"Cliquez sur une touche pour la modifier."}function GM(){Bs=!0,mn=["dig","raise","smooth"][(["dig","raise","smooth"].indexOf(mn)+1)%3],kn=0,En()}function eu(i){Mr=at.clamp(Mr+i,1.8,4),En()}function C0(i){ms.invalidate(i.bounds),Ct.terrainChanged(i.bounds);let e=qe.height(Y.position.x,Y.position.z);e>Y.position.y&&(Y.position.y=e,Y.velocity.y=0,Y.grounded=!0,Y.syncCamera()),He=!0,Zt()}function P0(i){if(!i||i.kind!=="ground")return!1;let e=kd(qe,i.point.x,i.point.z),t=Ih(e,Hn,$t);if(mn!=="raise"&&!t.allowed)return xe(`${t.label} \xB7 pioche de niveau ${t.tier} requise.`),!1;if(mn==="raise"&&Ue.clay<1)return xe("Plus de terre : creusez pour en r\xE9cup\xE9rer."),!1;for(let s of Sn.values())if(Math.hypot(s.x-i.point.x,s.z-i.point.z)<Mr+1)return xe("\xC9loignez la brosse des constructions."),!1;let n=qe.stroke(i.point.x,i.point.z,{mode:mn,radius:Mr,strength:Kh[Hn].strength*(Hn==="pick"&&t.tier===1?.38:1)*(t.tier>=2?1.1/t.duration:1),miningTier:t.level});return n?(n.resourceDelta=mn==="dig"?1:mn==="raise"?-1:0,n.resourceKey=mn==="dig"?t.resource:"clay",Ue[n.resourceKey]+=n.resourceDelta,n.resourceDelta>0&&Na(Te,n.resourceKey,n.resourceDelta),Te.energy=Math.max(0,Te.energy-.6),Jn.strike(),Y.impact(.55),bn.particles.burst(i.point,e),C0(n),!0):(xe("Le sol ne peut plus \xEAtre travaill\xE9 \xE0 cet endroit."),!1)}function Ya(){if(Si){if(!Mt||Zn>0)return;ht.getWorldDirection(Dn);let e=Os.target(new ti(ht.position,Dn));e?(Os.remove(e),Ue.torch++,He=!0,Zt(),Ye()):xe("F / clic droit pour poser la torche."),Zn=.3;return}if(!Mt||Zn>0)return;let i=vs();if(i?.kind==="entity"){U0(i);return}if(ai){Jn.strike(),Y.impact(.55),Zn=vi(we).delay;return}Be?(E0(i),Zn=.18):i?.kind==="ground"?P0(i)&&(Zn=Kh[Hn].delay):(A0(),Zn=.18)}function Zh(){if(Be){xe("L\u2019annulation concerne le terrain de surface.");return}if(!qe.undoCount){xe("Aucun coup de terrain \xE0 annuler.");return}let i=qe.peekUndo();for(let e of Sn.values())if(e.x>=i.bounds.x&&e.x<=i.bounds.maxX&&e.z>=i.bounds.z&&e.z<=i.bounds.maxZ){xe("R\xE9cup\xE9rez les blocs pos\xE9s dans cette zone avant d\u2019annuler.");return}if((i.resourceDelta||0)>Ue[i.resourceKey||"clay"]){xe("R\xE9cup\xE9rez la terre utilis\xE9e avant d\u2019annuler.");return}qe.undo(),Ue[i.resourceKey||"clay"]-=i.resourceDelta||0,C0(i),Ye(),xe("Dernier coup de terrain annul\xE9.")}function I0(i){Ht=cn(i),vn=null,sn=sn>=3?sn:3,Lo=sn-3,No[Lo]={...Ht},Hn="hand",kn=0,document.querySelectorAll("[data-slot]").forEach(e=>e.classList.toggle("selected",Number(e.dataset.slot)===sn)),En(),He=!0,Ye()}function tu(){if(!Mt||Ha>0)return;if(Ha=.22,Bs){let r=mn;mn="raise";let o=P0(vs());return mn=r,En(),o}if(Si){qM();return}if(Be){xe("Remontez \xE0 la surface pour b\xE2tir votre refuge.");return}let i=gf(vs());if(!i){xe("Visez le sol ou une pi\xE8ce \xE0 moins de 7 m.");return}let e=vn?$a(vn,i):[i],t={},n=[];for(let r of e){let o=Te.creative?"":Ds(r,Te);if(o){xe(o);return}if(!qa(r,null,n)){xe("Emplacement occup\xE9 ou terrain trop irr\xE9gulier. Aplanissez le sol avec la pelle.");return}n.push(r);for(let[a,h]of Object.entries(Vi(r)))t[a]=(t[a]||0)+h}if(Sn.size+e.length>2e3){xe("Limite de 2 000 pi\xE8ces atteinte.");return}let s=Gd(Ue,Te.creative?{}:t);if(!s){xe("Ressources n\xE9cessaires : "+Ao(t));return}for(let r of e)qt.add({...r,paid:Te.creative?{}:Vi(r),free:Te.creative},!1);qt.rebuild(),ff(e),Ue=s,He=!0,Zt(),Ye(),xe(vn?"Construction assembl\xE9e.":gi.find(r=>r.id===i.shape).label+" pos\xE9e.")}function L0(i,e){if(!Sn.has(i.key))return xe("Cette pi\xE8ce n\u2019existe plus."),!1;let t={...cn(e),x:i.x,y:i.y,z:i.z},n=Te.creative?"":Ds(t,Te);if(n)return xe(n),!1;if(!qa(t,i.key))return xe("Cette forme empi\xE8te sur une autre pi\xE8ce ou sur le personnage."),!1;let s=Te.creative?{}:Vi(t),r=Gd(Ue,s,i.paid);return r?(qt.remove(i),qt.add({...t,paid:s,free:Te.creative,lit:i.lit,open:i.open&&t.shape==="door"}),ff([i,t]),Ue=r,He=!0,Zt(),Ye(),xe("Pi\xE8ce modifi\xE9e \xB7 diff\xE9rence de recette r\xE9gl\xE9e."),!0):(xe("Ressources n\xE9cessaires pour la modification : "+Ao(s)),!1)}function nu(){if(!qd(we,Te,Ue,"berries")){xe(Ue.berries?"Vous \xEAtes d\xE9j\xE0 en pleine forme.":"R\xE9coltez un buisson de baies.");return}He=!0,Zt(),qi?.journal(),Ye(),xe("Une baie \xB7 +8 sant\xE9, +25 \xE9nergie")}function vf(){if(!Te.home){Ka();return}Be&&Fo(),Y.teleport(...Te.home),He=!0,Ye(),xe("Retour au refuge.")}function D0(){let i=vs();if(i?.kind==="entity"){if(i.distance>3){xe("Approchez \xE0 moins de 3 m pour nourrir cet animal.");return}let t=Yt.feed(i.entity,we,Ue);xe(t.message),t.ok&&(He=!0,Zt(),Ye());return}let e=i?.block;if(!e){nu();return}if(e.shape==="door")e.open=!e.open,e.parts=Ua(e),qt.rebuild(),xe(e.open?"Porte ouverte":"Porte ferm\xE9e");else if(e.shape==="workbench")Te.stations.workbench=!0,Te.home=[e.x,e.z+2],xe("Atelier ouvert \xB7 charpente, mobilier et jardin d\xE9bloqu\xE9s.");else if(e.shape==="forge"){if(!Te.stations.forge){if(Ue.coal<2){xe("2 charbons sont n\xE9cessaires pour allumer la forge.");return}Ue.coal-=2}Te.stations.forge=!0,e.lit=!0,qt.rebuild(),xe("Forge allum\xE9e \xB7 briques, verre, m\xE9taux et lanternes d\xE9bloqu\xE9s.")}else if(e.shape==="beacon")Te.stations.beacon=!0,Te.home=[e.x,e.z+2],e.lit=!0,xe("Phare activ\xE9 \xB7 votre refuge est rep\xE9r\xE9 et votre retour enregistr\xE9.");else{li("construction");return}He=!0,Zt(),Ye()}function xf(){ai=!ai,kn=0,_t.clear(),we.guard=!1,we.guardTime=0,En(),xe(ai?vi(we).label+" \xB7 "+kt.label("guard")+" maintenir : garde \xB7 "+kt.label("dodge")+" : esquive":"Outils en main")}function yf(){if(!Mt)return;if(!o0(we,Te.energy)){xe(we.dodgeCd>0?"L\u2019esquive r\xE9cup\xE8re.":"18 points d\u2019\xE9nergie sont n\xE9cessaires.");return}Te.energy-=18;let i=Number(_t.has("KeyD"))-Number(_t.has("KeyA")||_t.has("KeyQ")),e=Number(_t.has("KeyW")||_t.has("KeyZ"))-Number(_t.has("KeyS")),t=Math.hypot(i,e)||1,n=i||e?i:1;nf={x:(n*Math.cos(Y.yaw)-e*Math.sin(Y.yaw))/t,z:(-e*Math.cos(Y.yaw)-n*Math.sin(Y.yaw))/t},He=!0}function U0(i){if(we.guard){Zn=.25,xe("Baissez la garde pour frapper.");return}if(i.distance>3.2){xe("Approchez \xE0 moins de 3,2 m pour frapper."),Zn=.25;return}let e=Yt.attack(i.entity,we,{combat:ai,tool:Hn,energy:Te.energy});if(!e.ok){e.message&&xe(e.message),Zn=.18;return}if(Te.energy=e.energy,Zn=vi(we).delay,Jn.strike(),Y.impact(.55),bn.particles.burst(i.point,"entity"),e.dead){for(let[t,n]of Object.entries(e.loot))Ue[t]=(Ue[t]||0)+n;!It[i.entity.species].passive&&Te.home&&Math.hypot(i.entity.x-Te.home[0],i.entity.z-Te.home[1])<20&&we.stats.homeDefence++,xe(It[i.entity.species].label+" vaincu \xB7 "+Ba(e.loot)),Zt()}He=!0,Ye()}function WM(i,e){return e?.species==="wolf"&&[...Sn.values()].some(t=>(t.shape==="lantern"||t.shape==="beacon"&&t.lit)&&Math.hypot(t.x-i.x,t.z-i.z)<(t.shape==="beacon"?14:6))}function XM(i){if(gn?.god)return;let e=i.entity,t=Math.atan2(-(e.x-Y.position.x),-(e.z-Y.position.z)),n=Math.atan2(Math.sin(t-Y.yaw),Math.cos(t-Y.yaw)),s=a0(we,i.damage,Te.energy,{facing:Math.abs(n)<Math.PI*.42});Te.energy=s.energy,s.kind==="parry"?(e.mode="recover",e.timer=1.4,xe("Parade parfaite \xB7 contre-attaquez !")):s.kind==="dodge"?xe("Attaque esquiv\xE9e"):s.damage&&(V("damage-flash").classList.remove("hit"),V("damage-flash").offsetWidth,V("damage-flash").classList.add("hit"),xe(`\u2212${s.damage} sant\xE9${s.kind==="block"?" \xB7 garde":""}`)),s.kind==="hit"&&i.slow&&(we.slowTime=i.slow),we.health<=0&&(we.slowTime=0,we.deaths++,we.health=70,we.nightSeconds=0,we.invulnerable=10,Te.energy=60,Be&&Fo(),Te.home?Y.teleport(...Te.home):(Y.teleport(qe.panorama.x,qe.panorama.z),Y.yaw=qe.panorama.yaw,Y.syncCamera()),Yt.resetAggression(Y.position),_t.clear(),xe("Vous reprenez connaissance au refuge \xB7 mat\xE9riaux conserv\xE9s.")),He=!0,Zt(),Ye()}function N0(){if(!Ue.torch){xe("Fabriquez des torches dans le sac : 1 bois + 1 charbon.");return}ai=!1,Si=!Si,En(),Tt.focus()}function qM(){if(!Mt||!Ue.torch)return;let i=vs();if(!i?.point){xe("Visez une surface \xE0 moins de 7 m.");return}let e=i.point.clone();i.normal?e.addScaledVector(i.normal,.1):(ht.getWorldDirection(Dn),e.addScaledVector(Dn,-.15)),Os.add(e,Be)?(Ue.torch--,Si=Ue.torch>0,He=!0,Zt(),Ye(),xe("Torche pos\xE9e \xB7 E pour la r\xE9cup\xE9rer.")):xe("Limite de 128 torches atteinte.")}function _f(i){if(i==="torch"){let t=Im(Ue);xe(t?"4 torches fabriqu\xE9es":"Il faut 1 bois et 1 charbon."),t&&(He=!0,Zt(),Ye());return}let e=l0(we,Ue,Te.stations,i);xe(e.ok?i==="meal"?"2 rations pr\xE9par\xE9es":i==="sword"?vi(we).label+" fabriqu\xE9e":"Protection am\xE9lior\xE9e":e.error),e.ok&&(He=!0,Zt(),Ye())}function bf(){if(!qd(we,Te,Ue,"meal")){xe("Une ration cuite est n\xE9cessaire, ou vous \xEAtes d\xE9j\xE0 en pleine forme.");return}He=!0,Zt(),Ye(),xe("Ration \xB7 +35 sant\xE9, +40 \xE9nergie")}function rf(i){V("achievement-notice").querySelector("strong").textContent=i.title,V("achievement-notice").querySelector("small").textContent=Ba(i.reward),V("achievement-notice").classList.add("show"),clearTimeout(rf.timer),rf.timer=setTimeout(()=>V("achievement-notice").classList.remove("show"),3200)}function YM(){if(we.debugged)return[];let i=Yd(we,{j:Te,blocks:[...Sn.values()],refuge:Ro(Te,Sn.values(),$t).roof,walked:_r},Ue);return i.length&&(Va.push(...i),He=!0),i}function $a(i,e){let t=[],n=Ht.material,s=(h,c,l,u,d=n,f=0)=>t.push({...cn({...Ht,shape:h,material:d,size:1,rotation:f,mirror:!1}),x:c,y:l,z:u});if(i==="cabin"){for(let h=-1;h<=1;h++)for(let c=-1;c<=1;c++){if(s("slab",h,0,c,"pine"),Math.abs(h)===1||Math.abs(c)===1)if(h===0&&c===1)s("door",h,.25,c,"oak");else{let l=Math.abs(h)===1&&Math.abs(c)===1?"cube":"wall";s(l,h,.25,c,n,Math.abs(h)===1?1:0),s(l,h,1.25,c,n,Math.abs(h)===1?1:0)}s(h===0?"ridge":"roof",h,2.25,c,"pine",h===0?1:h<0?3:1)}s("workbench",0,0,-2,"oak")}else if(i==="terrace"){for(let h=-1;h<=1;h++)for(let c=-1;c<=1;c++)s("slab",h,0,c);for(let h=-1;h<=1;h++)s("fence",h,.25,-1);s("bench",0,.25,0,"pine"),s("planter",1,.25,1,"oak")}else{for(let h=-1;h<=1;h++)for(let c=-1;c<=1;c++)s("slab",h,0,c,"stone"),s("roof",h,2.25,c,"pine");for(let h of[-1.35,1.35])for(let c of[-1.35,1.35])s("pillar",h,.25,c,"pine"),s("pillar",h,1.25,c,"pine");s("workbench",-.5,.25,-.5,"oak"),s("forge",.5,.25,.5,"stone")}let r=Ht.rotation*Math.PI/2,o=Math.cos(r),a=Math.sin(r);return t.map(h=>({...h,x:e.x+h.x*o+h.z*a,y:e.y+h.y,z:e.z+h.z*o-h.x*a,rotation:(h.rotation+Ht.rotation)%4}))}function F0(i){vn=i,sn=3,Lo=0,Hn="hand",document.querySelectorAll("[data-slot]").forEach(e=>e.classList.toggle("selected",Number(e.dataset.slot)===3)),fs(),En(),xe("Plan pr\xEAt \xB7 visez un sol d\xE9gag\xE9, puis posez avec le clic droit.")}function $M(){Ht.rotation=(Ht.rotation+1)%4,sn>=3&&!vn&&(No[sn-3]={...Ht}),qi?.set(Ht),He=!0,En()}function ZM(i){if(Yn.visible=!!i&&sn>=3,!Yn.visible)return;let e=qa(i)&&(!Ds(i,Te)||Te.creative);if(vn){let t=vn+":"+Ht.rotation;if(p0!==t){xr&&(Yh.get(xr)?.dispose(),xr.dispose());let s=[],r=new R,o=new Rt;for(let a of $a(vn,{x:0,y:0,z:0})){let h=qt.geometry(a).attributes.position;o.setFromAxisAngle(vt.DEFAULT_UP,a.rotation*Math.PI/2);for(let c=0;c<h.count;c++)r.fromBufferAttribute(h,c).multiplyScalar(a.size).applyQuaternion(o).add(new R(a.x,a.y,a.z)),s.push(r.x,r.y,r.z)}xr=new it,xr.setAttribute("position",new Me(s,3)),xr.computeBoundingSphere(),p0=t}Yn.geometry=sf(xr),Yn.rotation.y=0,Yn.scale.setScalar(1);let n=[];e=!0;for(let s of $a(vn,i)){if(!qa(s,null,n)||!Te.creative&&Ds(s,Te)){e=!1;break}n.push(s)}}else Yn.geometry=sf(qt.geometry(i)),Yn.rotation.y=i.rotation*Math.PI/2,Yn.scale.setScalar(i.size);Yn.position.set(i.x,i.y,i.z),Yn.material.color.set(e?"#eff6ce":"#e8a082")}var lt=null;Tt.addEventListener("pointerdown",i=>{if(!(!Mt||lt||![0,1,2].includes(i.button))){i.preventDefault(),Tt.focus(),lt={id:i.pointerId,button:i.button,x:i.clientX,y:i.clientY,moved:0,start:performance.now(),lookX:0,lookY:0,looking:!1};try{Tt.setPointerCapture(i.pointerId)}catch{}}});Tt.addEventListener("pointermove",i=>{if(!Mt)return;if(document.pointerLockElement===Tt){Y.look(i.movementX,i.movementY,ps);return}if(!lt||i.pointerId!==lt.id)return;let e=i.clientX-lt.x,t=i.clientY-lt.y;lt.moved+=Math.hypot(e,t),lt.lookX+=e,lt.lookY+=t,lt.moved>=3&&(Y.look(lt.lookX,lt.lookY,ps),lt.lookX=0,lt.lookY=0,lt.looking=!0,kn=0,yr=""),lt.x=i.clientX,lt.y=i.clientY});Tt.addEventListener("pointerup",i=>{if(!lt||i.pointerId!==lt.id)return;let e=!lt.looking&&!lt.acted,t=lt.button;lt=null;try{Tt.releasePointerCapture(i.pointerId)}catch{}e&&Mt&&(t===0?Ya():t===2&&tu())});Tt.addEventListener("pointercancel",()=>{lt=null});Tt.addEventListener("lostpointercapture",()=>{lt=null});Tt.addEventListener("contextmenu",i=>i.preventDefault());Tt.addEventListener("wheel",i=>{Mt&&(i.preventDefault(),i.shiftKey?eu(Math.sign(i.deltaY)*.4):wr(sn+Math.sign(i.deltaY)))},{passive:!1});window.addEventListener("keydown",i=>{if(i.code==="F6"&&!i.repeat&&!bi){i.preventDefault(),V("pixel-preview").hidden?(Mt||Yi(),V("pixel-preview").hidden=!1):V("pixel-preview").hidden=!0;return}if(V("pixel-preview").contains(i.target)&&i.code!=="Escape")return;if(i.code==="F3"&&!i.repeat){i.preventDefault(),gn.root.hidden?li("debug"):fs();return}if(bi){if(i.preventDefault(),i.code==="Escape"){bi=null,Uo();return}let n=kt.bind(bi,i.code);if(!n.ok){V("binding-status").textContent=n.error;return}bi=null,_t.clear(),Uo(),En(),He=!0,Ye();return}if(i.code==="Escape"){i.preventDefault(),["settings","help","construction","journal","achievements","field-kit","debug"].some(n=>!V(n).hidden)?fs():Mt?Er():Yi();return}if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)return;let e=kt.action(i.code);if(["catalog","journal","achievements"].includes(e)&&!i.repeat){i.preventDefault();let n=e==="catalog"?"construction":e==="achievements"?"achievements":"journal";V(n).hidden?li(n):fs();return}if(i.code==="Tab"&&!i.repeat){i.preventDefault(),V("field-kit").hidden?li("field-kit"):fs();return}if(i.code==="KeyH"&&!i.repeat){i.preventDefault(),V("help").hidden?li("help"):fs();return}if(!Mt)return;if(i.code==="Digit7"&&!i.repeat){i.preventDefault(),N0();return}if((i.ctrlKey||i.metaKey)&&i.code==="KeyZ"){i.preventDefault(),i.repeat||Zh();return}if(i.ctrlKey||i.metaKey||i.altKey)return;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyZ","KeyQ"].includes(i.code)&&i.preventDefault();let t=kt.action(i.code);(t||/^Digit[1-6]$/.test(i.code))&&i.preventDefault(),_t.add(i.code),!i.repeat&&(t==="cave"&&M0(),i.code==="KeyP"&&Ka(),t==="upgrade"&&Qh(),t==="combat"&&xf(),t==="dodge"&&yf(),t==="rotate"&&$M(),t==="interact"&&D0(),t==="primary"&&Ya(),t==="build"&&tu(),t==="mode"&&GM(),t==="undo"&&Zh(),["BracketLeft","BracketRight","Minus","Equal","NumpadSubtract","NumpadAdd"].includes(i.code)&&(i.preventDefault(),eu(["BracketRight","Equal","NumpadAdd"].includes(i.code)?.4:-.4)),i.code==="Home"&&(i.preventDefault(),Be?Y.teleport(St.field.spawn.x,St.field.spawn.z):vf(),xe("De retour au d\xE9part.")),/^Digit[1-6]$/.test(i.code)&&wr(Number(i.code.slice(-1))-1))});window.addEventListener("keyup",i=>_t.delete(i.code));window.addEventListener("blur",()=>{_t.clear(),lt=null,Mt&&Er()});document.addEventListener("visibilitychange",()=>{document.hidden&&(_t.clear(),lt=null,Mt&&Er(),Ye())});window.addEventListener("beforeunload",Ye);window.addEventListener("resize",()=>{ht.aspect=innerWidth/innerHeight,ht.updateProjectionMatrix(),on.setSize(innerWidth,innerHeight)});Tt.addEventListener("webglcontextlost",i=>{i.preventDefault(),Er(),V("error").hidden=!1,V("error-text").textContent="Le navigateur a interrompu le rendu 3D. Rechargez le paysage pour reprendre."});V("play").addEventListener("click",Yi);V("panorama-open").addEventListener("click",()=>{Ka(),Yi()});V("caves-open").addEventListener("click",()=>{Be&&Fo(),Y.teleport(Xi.position.x,Xi.position.z+5),Y.yaw=0,Y.pitch=0,Y.syncCamera(),Yi(),xe(`Approchez l\u2019entr\xE9e puis ${kt.label("cave")} pour descendre. Une pioche et des torches sont utiles.`)});V("upgrade-pick").addEventListener("click",Qh);V("menu-btn").addEventListener("click",()=>{Mt?Er():Jh&&Yi()});V("pack-toggle").addEventListener("click",()=>li("field-kit"));V("settings-open").addEventListener("click",()=>li("settings"));V("help-open").addEventListener("click",()=>li("help"));V("debug-open").addEventListener("click",()=>li("debug"));document.querySelectorAll(".close-dialog").forEach(i=>i.addEventListener("click",fs));function Mf(i){Fs=at.clamp(Math.round(Number(i)||0),0,8),bn.setPixelSize(Fs);for(let e of["pixel-size","pixel-live"])V(e).value=Fs;for(let e of["pixel-size-label","pixel-live-label"])V(e).textContent=Fs?`${Fs} px`:"Sans filtre";document.querySelectorAll("[data-pixel]").forEach(e=>e.classList.toggle("selected",Number(e.dataset.pixel)===Fs)),He=!0}Mf(Fs);for(let i of["pixel-size","pixel-live"])V(i).addEventListener("input",e=>Mf(e.target.value));for(let i of["pixel-size","pixel-live"])V(i).addEventListener("change",Ye);document.querySelectorAll("[data-pixel]").forEach(i=>i.addEventListener("click",()=>{Mf(i.dataset.pixel),Ye()}));V("pixel-test").addEventListener("click",()=>{fs(),Yi(),V("pixel-preview").hidden=!1});V("pixel-close").addEventListener("click",()=>{V("pixel-preview").hidden=!0,Tt.focus()});V("quality").addEventListener("change",i=>{$n=i.target.value,w0(),He=!0,Ye()});V("sensitivity").value=ps;V("sensitivity").addEventListener("input",i=>{ps=Number(i.target.value),He=!0,Ye()});V("time").addEventListener("input",i=>{Mi=Number(i.target.value),we.hour=Mi,we.nightSeconds=0,He=!0,ja(),Ye()});V("camera-motion").value=Wa;V("camera-motion").addEventListener("input",i=>{Wa=Number(i.target.value),Y.motionScale=Wa,He=!0,Ye()});V("day-duration").value=we.dayMinutes;V("day-duration-label").textContent=we.dayMinutes+" min";V("day-duration").addEventListener("input",i=>{we.dayMinutes=Number(i.target.value),V("day-duration-label").textContent=we.dayMinutes+" min",He=!0,Ye()});V("weather-select").value=rn.automatic?"auto":rn.type;V("weather-select").addEventListener("change",i=>{rn.automatic=i.target.value==="auto",rn.automatic||rn.set(i.target.value),He=!0,Ye(),ja()});var of=V("capture-mouse");(window.self!==window.top||!Tt.requestPointerLock)&&(of.disabled=!0,of.textContent="Clic-gliss\xE9 \xB7 contexte int\xE9gr\xE9");of.addEventListener("click",()=>{try{Tt.requestPointerLock()?.catch(()=>xe("Capture indisponible : utilisez le clic-gliss\xE9."))}catch{xe("Capture indisponible : utilisez le clic-gliss\xE9.")}});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Tt?Yi():Mt&&Er()});document.addEventListener("pointerlockerror",()=>xe("Capture indisponible : utilisez le clic-gliss\xE9."));V("day-cycle").checked=we.cycle;V("day-cycle").addEventListener("change",i=>{we.cycle=i.target.checked,He=!0,Ye()});V("peaceful").checked=we.peaceful;V("peaceful").addEventListener("change",i=>{we.peaceful=i.target.checked,He=!0,Ye()});V("show-stats").addEventListener("change",i=>V("stats").hidden=!i.target.checked);document.querySelectorAll("[data-slot]").forEach(i=>i.addEventListener("click",()=>{wr(Number(i.dataset.slot)),Tt.focus()}));document.querySelectorAll("[data-tool]").forEach(i=>i.addEventListener("click",()=>R0(i.dataset.tool)));for(let[i,e]of Object.entries(us)){let t=document.createElement("div");t.className="binding-row";let n=document.createElement("span");n.textContent=e;let s=document.createElement("button");s.type="button",s.dataset.bind=i,s.setAttribute("aria-label",`Modifier la touche : ${e}`),s.addEventListener("click",()=>{bi=i,Uo()}),t.append(n,s),V("key-bindings").append(t)}V("reset-bindings").addEventListener("click",()=>{bi=null,kt.reset(),_t.clear(),Uo(),En(),He=!0,Ye()});document.querySelectorAll("[data-action]").forEach(i=>i.addEventListener("click",()=>{mn=i.dataset.action,En(),Tt.focus()}));V("undo-sculpt").addEventListener("click",Zh);V("brush-smaller").addEventListener("click",()=>{eu(-.4),Tt.focus()});V("brush-larger").addEventListener("click",()=>{eu(.4),Tt.focus()});V("random-refresh").checked=br;V("random-refresh").onchange=i=>{br=i.target.checked;try{localStorage.setItem("vallon-random-refresh",String(br))}catch{}};V("random-seed").onclick=()=>{V("world-seed").value=uh()};V("torch-equip").onclick=()=>N0();document.querySelectorAll("[data-quick-action]").forEach(i=>i.onclick=()=>{wr(1),Bs=!0,mn=i.dataset.quickAction,En(),Tt.focus()});V("new-world").addEventListener("click",()=>{if((Sn.size>0||gs.size>0||_r>1||qe.editedCells>0||St.field.edits.length>0)&&V("new-world").dataset.confirm!=="yes"){V("new-world").dataset.confirm="yes",V("new-world").textContent="Remplacer ce paysage ?",setTimeout(()=>{V("new-world").dataset.confirm="",V("new-world").textContent="Nouveau paysage"},5e3);return}let i=Pd(V("world-seed").value);if(i===null){xe("Seed : nombre entre 0 et 4294967295.");return}try{localStorage.setItem("vallon-world:"+yi,localStorage.getItem(af)||"null")}catch{}let e=new URL(location.href);e.searchParams.set("seed",i),history.replaceState(null,"",e),gs.clear(),cf=.84,Ue=lf(),Te=Wd(),we=Xd(),Mi=we.hour,Va=[],ai=!1,Ht=cn(),No=ds.slice(0,3).map(t=>cn({material:t.id})),vn=null,qi?.set(Ht),$t=2,_r=0,jh=0,gn?.reset(),_0(i),wr(0),Ye(),V("new-world").dataset.confirm="",V("new-world").textContent="Nouveau paysage",xe("Une nouvelle vall\xE9e vous attend.")});_0(yi,!0);ja();wr(0);Uo();qi=new Fh(qt,{plan:Ht,select:I0,state:()=>({inventory:Ue,journey:Te,blocks:Sn.values(),pickTier:$t,hotbarSlot:sn}),edit:L0,target:i=>Sn.get(i),eat:nu,home:vf,creative:i=>{Te.creative=Te.chapter>=Ni.length&&i,He=!0,Ye()},blueprint:F0});for(let i of["catalog-open","catalog-menu"])V(i).addEventListener("click",()=>li("construction"));for(let i of["journal-open","journal-menu"])V(i).addEventListener("click",()=>li("journal"));V("cancel-blueprint").addEventListener("click",()=>{vn=null,En(),Tt.focus()});hf=new Gh({state:()=>({inventory:Ue,v:we,j:Te,pickTier:$t}),craft:_f,upgrade:Qh,eat:i=>i==="berries"?nu():bf(),build:()=>li("construction")});Xa=new Vh({state:()=>({v:we,inventory:Ue,j:Te}),craft:_f,eat:bf});for(let i of["achievements-open","achievements-menu","achievements-journal"])V(i).addEventListener("click",()=>li("achievements"));V("combat-toggle").addEventListener("click",()=>{xf(),Tt.focus()});V("dodge-button").addEventListener("click",()=>{yf(),Tt.focus()});V("save-label").textContent=ka?"Sauvegarde locale":"Session temporaire";gn=new hh({items:Object.keys(_n),label:i=>_n[i][0],state:()=>({debugged:we.debugged,hour:Mi,weather:rn.automatic?"automatic":rn.type,fps:$h,calls:bn.calls,triangles:bn.triangles||0,position:Y.position.toArray()}),cheat:()=>{we.debugged=!0,He=!0,xe("Test activ\xE9 \xB7 nouveaux succ\xE8s d\xE9sactiv\xE9s pour cette partie."),Ye()},all:()=>{for(let i of Object.keys(_n))Ue[i]=Math.min(1e4,Ue[i]+64);$t=4,we.sword=3,we.armor=2,He=!0,Zt(),Ye()},grant:i=>{Ue[i]=Math.min(1e4,Ue[i]+64),He=!0,Zt(),Ye()},hour:i=>{Mi=we.hour=i,ja(),He=!0,Ye()},weather:i=>{rn.automatic=i==="automatic",rn.automatic||rn.set(i),He=!0,Ye()},creative:i=>{Te.creative=i,He=!0,Ye()},teleport:i=>{i==="cave"?Be||mf():(Be&&Fo(),Ka(),i==="clouds"&&(Y.position.y=740,Y.syncCamera()))},land:()=>{Be?Y.teleport(St.field.spawn.x,St.field.spawn.z):Y.teleport(qe.spawn.x,qe.spawn.z)},close:fs},wt);var JM={meadow:"Prairie sauvage",forest:"Lisi\xE8re des bois",alpine:"Hauts p\xE2turages",rock:"Les cr\xEAtes",heath:"Landes fleuries",wetland:"Prairies humides",birch:"Bois de bouleaux",steppe:"Prairies dor\xE9es",shore:"Berges du lac"},g0=performance.now(),ef=0,tf=0,Ns=null,v0=$m(on,wt,ht,{player:()=>Y,floor:(i,e)=>Be?St.field.floor(i,e):qe.height(i,e),solid:i=>Be?St.field.density(i.x,i.y,i.z)<=0:y0(i.x,i.z,.28).some(e=>{let t=e.baseY??e.y??qe.height(e.x,e.z),n=e.topY??t+(e.height||2);if(i.y<t-.05||i.y>n+.08)return!1;let s=i.x-e.x,r=i.z-e.z;return e.width?Math.abs(s)<e.width/2+.1&&Math.abs(r)<(e.depth||e.width)/2+.1:Math.hypot(s,r)<(e.radius||.2)+.1}),start:()=>{document.pointerLockElement&&document.exitPointerLock(),Do=!0,Yi()}});function KM(i,e){let t=on.xr.isPresenting,n=(i-g0)/1e3,s=at.clamp(n,0,.045);if(g0=i,!(document.hidden&&!t)){if(Mt&&(hn+=s),rn.update(s,Mt),Y.motionScale=Wa,Jd++,Wh+=n,Wh>=.8&&($h=Math.round(Jd/Wh),Wh=0,Jd=0),Mt){r0(we,s,{energy:Te.energy,sheltered:!Be&&Ns&&Math.hypot(Y.position.x-Ns.x,Y.position.z-Ns.z)<6,guard:ai&&_t.has(kt.code("guard"))}),Mi=we.hour,Zn=Math.max(0,Zn-s),Ha=Math.max(0,Ha-s);let r=_t.has(kt.code("build"))||lt?.button===2&&!lt.looking&&i-lt.start>280;r&&Ha<=0&&(tu(),lt?.button===2&&(lt.acted=!0)),_t.has(kt.code("primary"))&&!we.guard&&Ya(),lt&&lt.button===0&&!lt.looking&&i-lt.start>280&&Zn<=0&&!we.guard&&(Ya(),lt.acted=!0),_t.has("ArrowLeft")&&Y.look(-s*550,0,ps),_t.has("ArrowRight")&&Y.look(s*550,0,ps),_t.has("ArrowUp")&&Y.look(0,-s*400,ps),_t.has("ArrowDown")&&Y.look(0,s*400,ps);let o=(_t.has("ShiftLeft")||_t.has("ShiftRight"))&&["KeyW","KeyZ","KeyA","KeyQ","KeyS","KeyD"].some(u=>_t.has(u));o&&Te.energy<5&&(_t.delete("ShiftLeft"),_t.delete("ShiftRight")),Te.energy=at.clamp(Te.energy+(o?-3:Ns&&Math.hypot(Y.position.x-Ns.x,Y.position.z-Ns.z)<6?3:.35)*s,0,100);let a=Y.position.x,h=Y.position.z;t?v0.step(e,s):gn.fly?gn.move(Y,s,_t,qe,Be?St.field:null):Y.update(s,_t,{speedFactor:we.slowTime>0?.55:1,repeatJump:r&&!Bs&&sn>=3});let c=Math.hypot(Y.position.x-a,Y.position.z-h);_r+=c,we.dodgeTime>0&&Y.push(nf.x*9*s,nf.z*9*s),He=!0;let l=Yt.update(s,{x:Y.position.x,y:Y.position.y,z:Y.position.z},{time:we.time,hour:Mi,cave:Be,sprint:o,peaceful:we.peaceful,protectedAt:WM});for(let u of l)u.type==="attack"?XM(u):u.type==="alert"&&xe(It[u.entity.species].label+" \xB7 attention \xE0 son attaque !")}if(ht.updateMatrixWorld(),t&&(Jn.root.visible=!1),Be?St.update(ht,hn):(ms.update(ht,s),Ct.update(ht,hn,s),Ei.update(ht,hn,_i.uniforms.uSun.value)),Jn.setPickTier($t),Jn.setSwordTier(we.sword),Jn.update(s,hn,Si?"hand":ai?"sword":sn>=3?Ui(Ht.material).mining==="wood"?"wood":Ui(Ht.material).mining==="soil"?"clay":"stone":Hn,Mt,Math.min(1,Math.hypot(Y.velocity.x,Y.velocity.z)/4.5),Be,we.guard),!Do&&(Be?St.stats.chunks>=12:Ct.stats.grassCells>=5&&ms.stats.chunks>=30)&&(Do=!0,V("play").disabled=!1,V("play").innerHTML=`${Jh?"Reprendre la promenade":"Entrer dans le paysage"} <span>\u2197</span>`),t&&(Jn.root.visible=!1),qt.update(ht,s,!Be),Os.update(hn,Si&&Ue.torch>0,Be,Mt),Sr.visible=Be&&!Si,Sr.intensity=14,gn.scan(Y,St,Be),Yt.render(we.time,ht),Za.position.copy(ht.position),_i.uniforms.uTime.value=hn,Bt.target.position.copy(Y.position),Bt.position.copy(Y.position).addScaledVector(_i.uniforms.uSun.value,240),Bt.target.updateMatrixWorld(),ef+=s,tf+=s,ef>.12){ef=0,gn.refresh(),Mt&&ja();let r=qe.sample(Y.position.x,Y.position.z);V("biome").textContent=Be?Y.position.z<-75?"Grottes profondes":"Galeries de pierre":JM[r.biome]||"Terres sauvages";let o=Xi.distance(Y,Be);V("expedition").textContent=Be?`${Y.position.z<-75?"Pierre profonde \xB7 pioche niv. 3+":"Galeries \xB7 charbon et cristaux"} \xB7 Sortie ${Math.round(o)} m${o<6?" \xB7 "+kt.label("cave")+" remonter":""}`:o<90?`Grottes \xB7 entr\xE9e ${Math.round(o)} m${o<6?" \xB7 "+kt.label("cave")+" descendre":""}`:"";let a=(-Y.yaw*180/Math.PI%360+360)%360;V("heading").textContent=["N","NE","E","SE","S","SO","O","NO"][Math.round(a/45)%8],V("position-label").textContent=`ALT. ${Math.round(Y.position.y)} M  \xB7  ${Math.round(_r)} M PARCOURUS`;let h=we.debugged?null:s0(Te,Sn.values(),$t,Ue);h&&(He=!0,Zt(),Ye(),xe("\xC9tape accomplie \xB7 "+h.reward));let c=Ro(Te,Sn.values(),$t);if(Ns=c.roof,V("journey-progress").firstElementChild.style.width=`${c.progress*100}%`,V("objective").textContent=c.title,V("objective-detail").textContent=c.detail,V("energy-fill").style.width=Te.energy+"%",V("energy-value").textContent=Math.round(Te.energy),document.body.classList.toggle("combat-mode",ai),V("construction-strip").hidden=sn<3&&!vn,V("energy-label").textContent=`\xC9NERGIE ${Math.round(Te.energy)} / 100 \xB7 ${kt.label("interact")} INTERAGIR / BAIES`,V("journal").hidden||qi?.journal(),Xa?.hud(ai),V("achievements").hidden||Xa?.refresh(),Mt){!Be&&!we.stats.biomes.includes(r.biome)&&we.stats.biomes.push(r.biome),Be&&Y.position.z<-95&&(we.stats.deep=!0);for(let u of Yt.active.values())Math.hypot(u.x-Y.position.x,u.z-Y.position.z)<18&&!we.stats.seen.includes(u.species)&&Yt.line(u,{x:Y.position.x,y:Y.position.y,z:Y.position.z})&&(we.stats.seen.push(u.species),He=!0);let l=we.debugged?[]:Yd(we,{j:Te,blocks:[...Sn.values()],refuge:Ns,walked:_r},Ue);if(l.length&&(Va.push(...l),He=!0,Zt(),Ye()),Va.length&&hn-(xe.achievementTime||-99)>3.5){let u=Va.shift();rf(u),xe.achievementTime=hn}}if(Mt){ot=vs();let l=ot?.material||(ot?.kind==="ground"?kd(qe,ot.point.x,ot.point.z):ot?.kind==="prop"?T0(ot.collider):ot?.kind==="block"?Ui(ot.block.material).mining:null),u=l?Ih(l,Hn,$t):null,d=u?Math.max(u.tier,ot?.tier||1):1;V("target-label").textContent=ot?.kind==="entity"?`${It[ot.entity.species].label} \xB7 ${Math.ceil(ot.entity.hp)}/${It[ot.entity.species].hp} \xB7 ${It[ot.entity.species].passive?kt.label("interact")+" nourrir \xB7 confiance "+ot.entity.trust+"/3":ot.entity.mode==="windup"?"ATTAQUE IMMINENTE":kt.label("primary")+" frapper \xB7 "+kt.label("combat")+" arme"}`:u?`${u.label}${l==="berries"?" \xB7 "+ot.collider.berryCount+" baies":" \xB7 niv. "+d} \xB7 ${u.level<d?"pioche requise":kt.label("primary")+" / clic maintenu"}`:"",V("mining-meter").hidden=kn<=0||hn-Oa>.65,V("mining-meter").firstElementChild.style.width=`${Math.min(1,kn)*100}%`;let f=Be?null:gf(ot);ZM(f),ot?.kind==="block"&&["door","workbench","forge","beacon"].includes(ot.block.shape)&&(V("target-label").textContent+=` \xB7 ${kt.label("interact")} ${ot.block.shape==="door"?"ouvrir / fermer":"utiliser"}`),En(),Jn.showBrush(!Be&&ot?.kind==="ground"&&sn<3?ot.point:null,qe,Mr,mn)}V("stats").hidden||(V("stats").textContent=`${$h} FPS \xB7 ${$n}
${on.info.render.calls} appels \xB7 ${Math.round(on.info.render.triangles/1e3)} k triangles
Terrain ${JSON.stringify(Be?St.stats:ms.stats)}
V\xE9g\xE9tation ${JSON.stringify(Ct.stats)}`)}if(tf>5&&(tf=0,Ye()),df.update(ht,qe,rn,$n,Mt,Be,qt.colliders(Y.position.x,Y.position.z,.3).some(r=>r.y>Y.position.y+Y.eyeHeight&&r.y<Y.position.y+8)),hn-Qd>.5||Qd<0){wt.traverse(r=>{let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)Ga.install(a)});for(let r of Ct.grassMaterials)Ga.installGrass(r);Qd=hn}t?(bn.particles.update(ht,hn,_i.uniforms.uDay.value,Be,Mt),on.render(wt,v0.view)):(Ga.update(ht,hn,_i,Be),x0.update(ht,Ei,hn,$n,!Be),bn.render(ht,hn,_i,Be,Mt))}}on.setAnimationLoop(KM);window.__VALLON__={get state(){return{adventure:JSON.parse(JSON.stringify(we)),debug:{fly:gn.fly,noclip:gn.noclip,god:gn.god,xray:gn.xray,ores:gn.markers.count},torches:Os.serialize(),torchEquipped:Si,combat:ai,weather:{...rn.serialize(),flash:rn.flash,rainParticles:df.count},body:{radius:Y.radius,height:Y.bodyHeight,eyes:Y.eyeHeight},fauna:Yt.stats,seed:yi,quality:$n,playing:Mt,ready:Do,inCave:Be,pickTier:$t,mineProgress:kn,flowers:Ei.count,caves:St.stats,activeTool:Hn,hotbarSlot:sn,selected:Lo,brushRadius:Mr,bindings:kt.bindings,actionMode:mn,topoActive:Bs,terrainEdits:qe.editedCells,undoCount:qe.undoCount,position:Y.position.toArray(),inventory:{...Ue},journey:JSON.parse(JSON.stringify(Te)),buildPlan:{...Ht},pendingBlueprint:vn,buildingBatches:qt.batches.size,blocks:Sn.size,removed:gs.size,fps:$h,terrain:ms.stats,vegetation:Ct.stats,drawCalls:bn.calls+2,triangles:bn.triangles,atmosphere:{rays:bn.rayMaterial.uniforms.uStrength.value,particles:bn.particles.geometry.drawRange.count,lakes:Ei.waters.length,planarReflection:Ei.waterMaterial.uniforms.uHasReflection.value>0,reflectionSize:x0.size,clouds:{steps:bn.clouds.material.uniforms.uSteps.value,width:bn.clouds.target.width,height:bn.clouds.target.height},handVisible:Jn.models[0].visible&&Jn.root.visible}}},get entrance(){return Xi},get cloudShadows(){return Ga},get world(){return qe},get player(){return Y},get vegetation(){return Ct},get terrain(){return ms},get caves(){return St},get building(){return qt},get fauna(){return Yt},toggleCombat:xf,dodge:yf,craftAdventure:_f,eatMeal:bf,choosePlan:I0,editPiece:L0,interact:D0,chooseBlueprint:F0,blueprintPieces:$a,eatBerry:nu,returnHome:vf,toggleCave:M0,panorama:Ka,upgrade:Qh,build:tu,harvest:A0,useTool:Ya,undoSculpt:Zh,findTarget:vs,placement:gf,canBuild:qa,save:Ye};})();
