(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var rg=0,cf=1,og=2;var ja=1,ag=2,_i=3,ri=0,dn=1,qt=2,ki=0,zs=1,jn=2,uf=3,hf=4,lg=5,hs=100,cg=101,ug=102,hg=103,dg=104,fg=200,pg=201,mg=202,gg=203,xc=204,yc=205,xg=206,yg=207,vg=208,_g=209,Mg=210,bg=211,Sg=212,wg=213,Tg=214,Zc=0,jc=1,Jc=2,Vs=3,$c=4,Kc=5,Qc=6,eu=7,tu=0,Ag=1,Eg=2,Gi=0,Cg=1,Rg=2,Pg=3,nu=4,Ig=5,Lg=6,Dg=7;var df=300,Ks=301,Qs=302,uo=303,iu=304,Ja=306,xi=1e3,us=1001,vc=1002,cn=1003,Ug=1004;var $a=1005;var un=1006,su=1007;var Pn=1008;var kn=1009,ff=1010,pf=1011,ho=1012,ru=1013,ps=1014,li=1015,Mi=1016,ou=1017,au=1018,fo=1020,mf=35902,gf=35899,xf=1021,yf=1022,In=1023,Xr=1026,po=1027,lu=1028,cu=1029,vf=1030,uu=1031;var hu=1033,Ka=33776,Qa=33777,el=33778,tl=33779,du=35840,fu=35841,pu=35842,mu=35843,gu=36196,xu=37492,yu=37496,vu=37808,_u=37809,Mu=37810,bu=37811,Su=37812,wu=37813,Tu=37814,Au=37815,Eu=37816,Cu=37817,Ru=37818,Pu=37819,Iu=37820,Lu=37821,Du=36492,Uu=36494,Fu=36495,Nu=36283,Bu=36284,Ou=36285,zu=36286;var ma=2300,_c=2301,mc=2302,jd=2400,Jd=2401,$d=2402;var Fg=3200,Ng=3201;var Vu=0,Bg=1,Hi="",pt="srgb",ks="srgb-linear",ga="linear",_t="srgb";var Os=7680;var Kd=519,Og=512,zg=513,Vg=514,_f=515,kg=516,Gg=517,Hg=518,Wg=519,Mc=35044,Sn=35048;var Mf="300 es",si=2e3,xa=2001;var Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_m=1234567,ha=Math.PI/180,Yr=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function bf(n,e){return(n%e+e)%e}function qv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xv(n,e,t){return n!==e?(t-n)/(e-n):0}function da(n,e,t){return(1-t)*n+t*e}function Yv(n,e,t,i){return da(n,e,1-Math.exp(-t*i))}function Zv(n,e=1){return e-Math.abs(bf(n,e*2)-e)}function jv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $v(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kv(n,e){return n+Math.random()*(e-n)}function Qv(n){return n*(.5-Math.random())}function e_(n){n!==void 0&&(_m=n);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t_(n){return n*ha}function n_(n){return n*Yr}function i_(n){return(n&n-1)===0&&n!==0}function s_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function r_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function o_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:ha,RAD2DEG:Yr,generateUUID:gi,clamp:Qe,euclideanModulo:bf,mapLinear:qv,inverseLerp:Xv,lerp:da,damp:Yv,pingpong:Zv,smoothstep:jv,smootherstep:Jv,randInt:$v,randFloat:Kv,randFloatSpread:Qv,seededRandom:e_,degToRad:t_,radToDeg:n_,isPowerOfTwo:i_,ceilPowerOfTwo:s_,floorPowerOfTwo:r_,setQuaternionFromProperEuler:o_,normalize:vt,denormalize:ii},Ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let m=1-a,g=l*f+c*h+u*p+d*x,b=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let C=Math.sqrt(w),A=Math.atan2(C,g*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let v=a*b;if(l=l*m+f*v,c=c*m+h*v,u=u*m+p*v,d=d*m+x*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_d=new M,Mm=new qe,nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=s[0],m=s[3],g=s[6],b=s[1],w=s[4],v=s[7],C=s[2],A=s[5],L=s[8];return r[0]=o*x+a*b+l*C,r[3]=o*m+a*w+l*A,r[6]=o*g+a*v+l*L,r[1]=c*x+u*b+d*C,r[4]=c*m+u*w+d*A,r[7]=c*g+u*v+d*L,r[2]=f*x+h*b+p*C,r[5]=f*m+h*w+p*A,r[8]=f*g+h*v+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Md.makeScale(e,t)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Md=new nt;function Sf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qg(){let n=Zr("canvas");return n.style.display="block",n}var bm={};function jr(n){n in bm||(bm[n]=!0,console.warn(n))}function Xg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Sm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){let n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:Sm,fromXYZ:wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Sm,fromXYZ:wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),n}var ut=a_();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Tr,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Tr===void 0&&(Tr=Zr("canvas")),Tr.width=e.width,Tr.height=e.height;let s=Tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},l_=0,Jr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bd(s[o].image)):r.push(bd(s[o]))}else r=bd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var c_=0,Sd=new M,gn=class n extends Bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=us,s=us,r=un,o=Pn,a=In,l=kn,c=n.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=gi(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=df;gn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,C=(g+1)/2,A=(u+f)/4,L=(d+x)/4,U=(p+m)/4;return w>v&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=L/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new gn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ya=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Vl.subVectors(this.max,Qo),Ar.subVectors(e.a,Qo),Er.subVectors(e.b,Qo),Cr.subVectors(e.c,Qo),ss.subVectors(Er,Ar),rs.subVectors(Cr,Er),Us.subVectors(Ar,Cr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Us.z,Us.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Us.z,0,-Us.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Us.y,Us.x,0];return!wd(t,Ar,Er,Cr,Vl)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Ar,Er,Cr,Vl))?!1:(kl.crossVectors(ss,rs),t=[kl.x,kl.y,kl.z],wd(t,Ar,Er,Cr,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new M,new M,new M,new M,new M,new M,new M,new M],ei=new M,zl=new nn,Ar=new M,Er=new M,Cr=new M,ss=new M,rs=new M,Us=new M,Qo=new M,Vl=new M,kl=new M,Fs=new M;function wd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var u_=new nn,ea=new M,Td=new M,Xn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):u_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Td)),this.expandByPoint(ea.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new M,Ad=new M,Gl=new M,os=new M,Ed=new M,Hl=new M,Cd=new M,Gs=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ad.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Ad);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gl),a=os.dot(this.direction),l=-os.dot(Gl),c=os.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ad).addScaledVector(Gl,f),h}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){Ed.subVectors(t,e),Hl.subVectors(i,e),Cd.crossVectors(Ed,Hl);let o=this.direction.dot(Cd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);let l=a*this.direction.dot(Hl.crossVectors(os,Hl));if(l<0)return null;let c=a*this.direction.dot(Ed.cross(os));if(c<0||l+c>o)return null;let u=-a*os.dot(Cd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,d_)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),as.crossVectors(i,Bn),as.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),as.crossVectors(i,Bn)),as.normalize(),Wl.crossVectors(Bn,as),s[0]=as.x,s[4]=Wl.x,s[8]=Bn.x,s[1]=as.y,s[5]=Wl.y,s[9]=Bn.y,s[2]=as.z,s[6]=Wl.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],m=i[10],g=i[14],b=i[3],w=i[7],v=i[11],C=i[15],A=s[0],L=s[4],U=s[8],S=s[12],_=s[1],T=s[5],F=s[9],N=s[13],k=s[2],W=s[6],V=s[10],J=s[14],B=s[3],ae=s[7],ce=s[11],ie=s[15];return r[0]=o*A+a*_+l*k+c*B,r[4]=o*L+a*T+l*W+c*ae,r[8]=o*U+a*F+l*V+c*ce,r[12]=o*S+a*N+l*J+c*ie,r[1]=u*A+d*_+f*k+h*B,r[5]=u*L+d*T+f*W+h*ae,r[9]=u*U+d*F+f*V+h*ce,r[13]=u*S+d*N+f*J+h*ie,r[2]=p*A+x*_+m*k+g*B,r[6]=p*L+x*T+m*W+g*ae,r[10]=p*U+x*F+m*V+g*ce,r[14]=p*S+x*N+m*J+g*ie,r[3]=b*A+w*_+v*k+C*B,r[7]=b*L+w*T+v*W+C*ae,r[11]=b*U+w*F+v*V+C*ce,r[15]=b*S+w*N+v*J+C*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+g*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],m=e[14],g=e[15],b=d*m*c-x*f*c+x*l*h-a*m*h-d*l*g+a*f*g,w=p*f*c-u*m*c-p*l*h+o*m*h+u*l*g-o*f*g,v=u*x*c-p*d*c+p*a*h-o*x*h-u*a*g+o*d*g,C=p*d*l-u*x*l-p*a*f+o*x*f+u*a*m-o*d*m,A=t*b+i*w+s*v+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=b*L,e[1]=(x*f*r-d*m*r-x*s*h+i*m*h+d*s*g-i*f*g)*L,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*g+i*l*g)*L,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*L,e[4]=w*L,e[5]=(u*m*r-p*f*r+p*s*h-t*m*h-u*s*g+t*f*g)*L,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*g-t*l*g)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*L,e[8]=v*L,e[9]=(p*d*r-u*x*r-p*i*h+t*x*h+u*i*g-t*d*g)*L,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*g+t*a*g)*L,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*L,e[12]=C*L,e[13]=(u*x*s-p*d*s+p*i*f-t*x*f-u*i*m+t*d*m)*L,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,x=o*u,m=o*d,g=a*d,b=l*c,w=l*u,v=l*d,C=i.x,A=i.y,L=i.z;return s[0]=(1-(x+g))*C,s[1]=(h+v)*C,s[2]=(p-w)*C,s[3]=0,s[4]=(h-v)*A,s[5]=(1-(f+g))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(p+w)*L,s[9]=(m-b)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Rr.set(s[0],s[1],s[2]).length(),o=Rr.set(s[4],s[5],s[6]).length(),a=Rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,u=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=si,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===si)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===si)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===xa)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rr=new M,ti=new at,h_=new M(0,0,0),d_=new M(1,1,1),as=new M,Wl=new M,Bn=new M,Tm=new at,Am=new qe,sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f_=0,Em=new M,Pr=new qe,Di=new at,ql=new M,ta=new M,p_=new M,m_=new qe,Cm=new M(1,0,0),Rm=new M(0,1,0),Pm=new M(0,0,1),Im={type:"added"},g_={type:"removed"},Ir={type:"childadded",child:null},Rd={type:"childremoved",child:null},Lt=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new sn,i=new qe,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ql.copy(e):ql.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ta,ql,this.up):Di.lookAt(ql,ta,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(Di),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new M(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new M,Ui=new M,Pd=new M,Fi=new M,Lr=new M,Dr=new M,Lm=new M,Id=new M,Ld=new M,Dd=new M,Ud=new lt,Fd=new lt,Nd=new lt,Cn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Ui.subVectors(i,t),Pd.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ui),l=ni.dot(Pd),c=Ui.dot(Ui),u=Ui.dot(Pd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ud.setScalar(0),Fd.setScalar(0),Nd.setScalar(0),Ud.fromBufferAttribute(e,t),Fd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ud,r.x),o.addScaledVector(Fd,r.y),o.addScaledVector(Nd,r.z),o}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Ui.subVectors(e,t),ni.cross(Ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ni.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Lr.subVectors(s,i),Dr.subVectors(r,i),Id.subVectors(e,i);let l=Lr.dot(Id),c=Dr.dot(Id);if(l<=0&&c<=0)return t.copy(i);Ld.subVectors(e,s);let u=Lr.dot(Ld),d=Dr.dot(Ld);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Lr,o);Dd.subVectors(e,r);let h=Lr.dot(Dd),p=Dr.dot(Dd);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Dr,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return Lm.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(Lm,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Bd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=bf(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Bd(o,r,e+1/3),this.g=Bd(o,r,e),this.b=Bd(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=Yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ut.workingToColorSpace(mn.copy(this),e),Math.round(Qe(mn.r*255,0,255))*65536+Math.round(Qe(mn.g*255,0,255))*256+Math.round(Qe(mn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=pt){ut.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Xl);let i=da(ls.h,Xl.h,t),s=da(ls.s,Xl.s,t),r=da(ls.l,Xl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new De;De.NAMES=Yg;var x_=0,Yn=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=zs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xc&&(i.blendSrc=this.blendSrc),this.blendDst!==yc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yt=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new M,Yl=new Ae,y_=0,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}};var Hs=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var va=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},v_=0,qn=new at,Od=new Lt,Ur=new M,On=new nn,na=new nn,ln=new M,$e=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?va:Hs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];na.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(On.min,na.min),On.expandByPoint(ln),ln.addVectors(On.max,na.max),On.expandByPoint(ln)):(On.expandByPoint(na.min),On.expandByPoint(na.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),ln.add(Ur)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new M,l[U]=new M;let c=new M,u=new M,d=new M,f=new Ae,h=new Ae,p=new Ae,x=new M,m=new M;function g(U,S,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,U),h.fromBufferAttribute(r,S),p.fromBufferAttribute(r,_),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let T=1/(h.x*p.y-p.x*h.y);isFinite(T)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(T),a[U].add(x),a[S].add(x),a[_].add(x),l[U].add(m),l[S].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){let _=b[U],T=_.start,F=_.count;for(let N=T,k=T+F;N<k;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new M,v=new M,C=new M,A=new M;function L(U){C.fromBufferAttribute(s,U),A.copy(C);let S=a[U];w.copy(S),w.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(A,S);let T=v.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,T)}for(let U=0,S=b.length;U<S;++U){let _=b[U],T=_.start,F=_.count;for(let N=T,k=T+F;N<k;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new mt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dm=new at,Ns=new Gs,Zl=new Xn,Um=new M,jl=new M,Jl=new M,$l=new M,zd=new M,Kl=new M,Fm=new M,Ql=new M,Be=class extends Lt{constructor(e=new $e,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(zd.fromBufferAttribute(d,e),o?Kl.addScaledVector(zd,u):Kl.addScaledVector(zd.sub(t),u))}t.add(Kl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Zl.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Zl,Um)===null||Ns.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Dm.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,C=w;v<C;v+=3){let A=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);s=ec(this,g,e,i,c,u,d,A,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=ec(this,o,e,i,c,u,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,C=w;v<C;v+=3){let A=v,L=v+1,U=v+2;s=ec(this,g,e,i,c,u,d,A,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let b=m,w=m+1,v=m+2;s=ec(this,o,e,i,c,u,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function __(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ql);return c<t.near||c>t.far?null:{distance:c,point:Ql.clone(),object:n}}function ec(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jl),n.getVertexPosition(l,Jl),n.getVertexPosition(c,$l);let u=__(n,e,t,i,jl,Jl,$l,Fm);if(u){let d=new M;Cn.getBarycoord(Fm,jl,Jl,$l,d),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,d,new Ae)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,d,new Ae)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Cn.getNormal(jl,Jl,$l,f.normal),u.face=f,u.barycoord=d}return u}var et=class n extends $e{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function p(x,m,g,b,w,v,C,A,L,U,S){let _=v/L,T=C/U,F=v/2,N=C/2,k=A/2,W=L+1,V=U+1,J=0,B=0,ae=new M;for(let ce=0;ce<V;ce++){let ie=ce*T-N;for(let oe=0;oe<W;oe++){let Se=oe*_-F;ae[x]=Se*b,ae[m]=ie*w,ae[g]=k,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[g]=A>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(oe/L),d.push(1-ce/U),J+=1}}for(let ce=0;ce<U;ce++)for(let ie=0;ie<L;ie++){let oe=f+ie+W*ce,Se=f+ie+W*(ce+1),me=f+(ie+1)+W*(ce+1),de=f+(ie+1)+W*ce;l.push(oe,Se,de),l.push(Se,me,de),B+=6}a.addGroup(h,B,S),h+=B,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=er(n[t]);for(let s in i)e[s]=i[s]}return e}function M_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var ku={clone:er,merge:xn},b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_a=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new M,Nm=new Ae,Bm=new Ae,Ht=class extends _a{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Bm),t.subVectors(Bm,Nm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Nr=1,Tc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Fr,Nr,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Fr,Nr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Fr,Nr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Fr,Nr,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Fr,Nr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Fr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ma=class extends gn{constructor(e=[],t=Ks,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ki});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=un),new Tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},xt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},w_={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ba=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new M,Qr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eo=class extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,ia=new M,Or=new M,zr=new M,Vr=new Ae,sa=new Ae,Zg=new at,tc=new M,ra=new M,nc=new M,Om=new Ae,Vd=new Ae,zm=new Ae,wa=class extends Lt{constructor(e=new eo){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sa(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new Qr(i,3,0,!1)),Br.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Zg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-zr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ic(tc.set(-.5,-.5,0),zr,o,Or,s,r),ic(ra.set(.5,-.5,0),zr,o,Or,s,r),ic(nc.set(.5,.5,0),zr,o,Or,s,r),Om.set(0,0),Vd.set(1,0),zm.set(1,1);let a=e.ray.intersectTriangle(tc,ra,nc,!1,ia);if(a===null&&(ic(ra.set(-.5,.5,0),zr,o,Or,s,r),Vd.set(0,1),a=e.ray.intersectTriangle(tc,nc,ra,!1,ia),a===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Cn.getInterpolation(ia,tc,ra,nc,Om,Vd,zm,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ic(n,e,t,i,s,r){Vr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sa.x=r*Vr.x-s*Vr.y,sa.y=s*Vr.x+r*Vr.y):sa.copy(Vr),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(Zg)}var yi=class extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=cn,u=cn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var to=class extends mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new at,Vm=new at,sc=[],km=new nn,T_=new at,oa=new Be,aa=new Xn,Ta=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,T_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),km.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(km)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),aa.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),Vm.multiplyMatrices(i,kr),oa.matrixWorld=Vm,oa.raycast(e,sc);for(let o=0,a=sc.length;o<a;o++){let l=sc[o];l.instanceId=r,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(s*this.count),s,this.count,lu,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kd=new M,A_=new M,E_=new nt,En=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=kd.subVectors(i,t).cross(A_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(kd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||E_.getNormalMatrix(e),s=this.coplanarPoint(kd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new Xn,C_=new Ae(.5,.5),rc=new M,no=class{constructor(e=new En,t=new En,i=new En,s=new En,r=new En,o=new En){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],w=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,h-u,g-p,C-b).normalize(),s[1].setComponents(c+o,h+u,g+p,C+b).normalize(),s[2].setComponents(c+a,h+d,g+x,C+w).normalize(),s[3].setComponents(c-a,h-d,g-x,C-w).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,h-f,g-m,C-v).normalize();else if(s[4].setComponents(c-l,h-f,g-m,C-v).normalize(),t===si)s[5].setComponents(c+l,h+f,g+m,C+v).normalize();else if(t===xa)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=C_.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(rc.x=s.normal.x>0?e.max.x:e.min.x,rc.y=s.normal.y>0?e.max.y:e.min.y,rc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vi=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ec=new M,Cc=new M,Gm=new at,la=new Gs,oc=new Xn,Gd=new M,Hm=new M,Aa=class extends Lt{constructor(e=new $e,t=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ec.fromBufferAttribute(t,s-1),Cc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ec.distanceTo(Cc);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,e.ray.intersectsSphere(oc)===!1)return;Gm.copy(s).invert(),la.copy(e.ray).applyMatrix4(Gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=u.getX(x),b=u.getX(x+1),w=ac(this,e,la,l,g,b,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(h),g=ac(this,e,la,l,x,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=ac(this,e,la,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ac(this,e,la,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ac(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Ec.fromBufferAttribute(a,s),Cc.fromBufferAttribute(a,r),t.distanceSqToSegment(Ec,Cc,Gd,Hm)>i)return;Gd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gd);if(!(c<e.near||c>e.far))return{distance:c,point:Hm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Wm=new M,qm=new M,qs=class extends Aa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wm.fromBufferAttribute(t,s),qm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wm.distanceTo(qm);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ea=class extends Aa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},io=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xm=new at,Qd=new Gs,lc=new Xn,cc=new M,Ca=class extends Lt{constructor(e=new $e,t=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;Xm.copy(s).invert(),Qd.copy(e.ray).applyMatrix4(Xm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let m=c.getX(p);cc.fromBufferAttribute(d,m),Ym(cc,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)cc.fromBufferAttribute(d,p),Ym(cc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ym(n,e,t,i,s,r,o){let a=Qd.distanceSqToPoint(n);if(a<t){let l=new M;Qd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Zn=class extends gn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ra=class extends gn{constructor(e,t,i=ps,s,r,o,a=cn,l=cn,c,u=Xr,d=1){if(u!==Xr&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pa=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ia=class n extends $e{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+r,x=s+1,m=new M,g=new M;for(let b=0;b<=p;b++){let w=0,v=0,C=0,A=0;if(b<=i){let S=b/i,_=S*Math.PI/2;v=-u-e*Math.cos(_),C=e*Math.sin(_),A=-e*Math.cos(_),w=S*d}else if(b<=i+r){let S=(b-i)/r;v=-u+S*t,C=e,A=0,w=d+S*f}else{let S=(b-i-r)/i,_=S*Math.PI/2;v=u+e*Math.sin(_),C=e*Math.cos(_),A=e*Math.sin(_),w=d+f+S*d}let L=Math.max(0,Math.min(1,w/h)),U=0;b===0?U=.5/s:b===p&&(U=-.5/s);for(let S=0;S<=s;S++){let _=S/s,T=_*Math.PI*2,F=Math.sin(T),N=Math.cos(T);g.x=-C*N,g.y=v,g.z=C*F,a.push(g.x,g.y,g.z),m.set(-C*N,A,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(_+U,L)}if(b>0){let S=(b-1)*x;for(let _=0;_<s;_++){let T=S+_,F=S+_+1,N=b*x+_,k=b*x+_+1;o.push(T,F,N),o.push(F,k,N)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Qt=class n extends $e{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class n extends $e{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,x=[],m=i/2,g=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(h,2));function b(){let v=new M,C=new M,A=0,L=(t-e)/i;for(let U=0;U<=r;U++){let S=[],_=U/r,T=_*(t-e)+e;for(let F=0;F<=s;F++){let N=F/s,k=N*l+a,W=Math.sin(k),V=Math.cos(k);C.x=T*W,C.y=-_*i+m,C.z=T*V,d.push(C.x,C.y,C.z),v.set(W,L,V).normalize(),f.push(v.x,v.y,v.z),h.push(N,1-_),S.push(p++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let _=x[S][U],T=x[S+1][U],F=x[S+1][U+1],N=x[S][U+1];(e>0||S!==0)&&(u.push(_,T,N),A+=3),(t>0||S!==r-1)&&(u.push(T,F,N),A+=3)}c.addGroup(g,A,0),g+=A}function w(v){let C=p,A=new Ae,L=new M,U=0,S=v===!0?e:t,_=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*_,0),f.push(0,_,0),h.push(.5,.5),p++;let T=p;for(let F=0;F<=s;F++){let k=F/s*l+a,W=Math.cos(k),V=Math.sin(k);L.x=S*V,L.y=m*_,L.z=S*W,d.push(L.x,L.y,L.z),f.push(0,_,0),A.x=W*.5+.5,A.y=V*.5*_+.5,h.push(A.x,A.y),p++}for(let F=0;F<s;F++){let N=C+F,k=T+F;v===!0?u.push(k,k+1,N):u.push(k+1,k,N),U+=3}c.addGroup(g,U,v===!0?1:2),g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class n extends Wt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},so=class n extends $e{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new M,v=new M,C=new M;for(let A=0;A<t.length;A+=3)h(t[A+0],w),h(t[A+1],v),h(t[A+2],C),l(w,v,C,b)}function l(b,w,v,C){let A=C+1,L=[];for(let U=0;U<=A;U++){L[U]=[];let S=b.clone().lerp(v,U/A),_=w.clone().lerp(v,U/A),T=A-U;for(let F=0;F<=T;F++)F===0&&U===A?L[U][F]=S:L[U][F]=S.clone().lerp(_,F/T)}for(let U=0;U<A;U++)for(let S=0;S<2*(A-U)-1;S++){let _=Math.floor(S/2);S%2===0?(f(L[U][_+1]),f(L[U+1][_]),f(L[U][_])):(f(L[U][_+1]),f(L[U+1][_+1]),f(L[U+1][_]))}}function c(b){let w=new M;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let b=new M;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=m(b)/2/Math.PI+.5,C=g(b)/Math.PI+.5;o.push(v,1-C)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],C=o[b+4],A=Math.max(w,v,C),L=Math.min(w,v,C);A>.9&&L<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,w){let v=b*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let b=new M,w=new M,v=new M,C=new M,A=new Ae,L=new Ae,U=new Ae;for(let S=0,_=0;S<r.length;S+=9,_+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[_+0],o[_+1]),L.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),C.copy(b).add(w).add(v).divideScalar(3);let T=m(C);x(A,_+0,b,T),x(L,_+2,w,T),x(U,_+4,v,T)}}function x(b,w,v,C){C<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new at;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Qe(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ro=class extends zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends ro{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var uc=new M,Hd=new Tf,Wd=new Tf,qd=new Tf,Pc=class extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(uc.subVectors(s[0],s[1]).add(s[0]),c=uc);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(uc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Hd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,m),Wd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,m),qd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Wd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),qd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Hd.calc(l),Wd.calc(l),qd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function R_(n,e){let t=1-n;return t*t*e}function P_(n,e){return 2*(1-n)*n*e}function I_(n,e){return n*n*e}function fa(n,e,t,i){return R_(n,e)+P_(n,t)+I_(n,i)}function L_(n,e){let t=1-n;return t*t*t*e}function D_(n,e){let t=1-n;return 3*t*t*n*e}function U_(n,e){return 3*(1-n)*n*n*e}function F_(n,e){return n*n*n*e}function pa(n,e,t,i,s){return L_(n,e)+D_(n,t)+U_(n,i)+F_(n,s)}var La=class extends zn{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,s.x,r.x,o.x,a.x),pa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends zn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,s.x,r.x,o.x,a.x),pa(e,s.y,r.y,o.y,a.y),pa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends zn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends zn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends zn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fa(e,s.x,r.x,o.x),fa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends zn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fa(e,s.x,r.x,o.x),fa(e,s.y,r.y,o.y),fa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Zm(a,l.x,c.x,u.x,d.x),Zm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},ef=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Pc,CubicBezierCurve:La,CubicBezierCurve3:Ic,EllipseCurve:ro,LineCurve:Da,LineCurve3:Lc,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Dc,SplineCurve:Fa}),Uc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ef[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ef[s.type]().fromJSON(s))}return this}},Na=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ua(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new La(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ro(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends Na{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Na().fromJSON(s))}return this}};function N_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=jg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=k_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ba(r,o,t,a,l,c,0),o}function jg(n,e,t,i,s){let r;if(s===K_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=jm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=jm(o/i|0,n[o],n[o+1],r);return r&&oo(r,r.next)&&(za(r),r=r.next),r}function Ys(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(oo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(za(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ba(n,e,t,i,s,r,o){if(!n)return;!o&&r&&X_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?O_(n,i,s,r):B_(n)){e.push(l.i,n.i,c.i),za(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=z_(Ys(n),e),Ba(n,e,t,i,s,r,2)):o===2&&V_(n,e,t,i,s,r):Ba(Ys(n),e,t,i,s,r,1);break}}}function B_(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&ua(s,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function O_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),m=Math.max(u,d,f),g=tf(h,p,e,t,i),b=tf(x,m,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=g&&v&&v.z<=b;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ua(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ua(a,u,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ua(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ua(a,u,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function z_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!oo(i,s)&&$g(i,t,t.next,s)&&Oa(i,s)&&Oa(s,i)&&(e.push(i.i,t.i,s.i),za(t),za(t.next),t=n=s),t=t.next}while(t!==n);return Ys(t)}function V_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j_(o,a)){let l=Kg(o,a);o=Ys(o,o.next),l=Ys(l,l.next),Ba(o,e,t,i,s,r,0),Ba(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function k_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=jg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Z_(c))}s.sort(G_);for(let r=0;r<s.length;r++)t=H_(s[r],t);return t}function G_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function H_(n,e){let t=W_(n,e);if(!t)return e;let i=Kg(t,n);return Ys(i,i.next),Ys(t,t.next)}function W_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(oo(n,t))return t;do{if(oo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Jg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Oa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&q_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function q_(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function X_(n,e,t,i){let s=n;do s.z===0&&(s.z=tf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Y_(s)}function Y_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function tf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Z_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Jg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ua(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Jg(n,e,t,i,s,r,o,a)}function j_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!J_(n,e)&&(Oa(n,e)&&Oa(e,n)&&$_(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||oo(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function oo(n,e){return n.x===e.x&&n.y===e.y}function $g(n,e,t,i){let s=dc(Ot(n,e,t)),r=dc(Ot(n,e,i)),o=dc(Ot(t,i,n)),a=dc(Ot(t,i,e));return!!(s!==r&&o!==a||s===0&&hc(n,t,e)||r===0&&hc(n,i,e)||o===0&&hc(t,n,i)||a===0&&hc(t,e,i))}function hc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function dc(n){return n>0?1:n<0?-1:0}function J_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$g(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Oa(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function $_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kg(n,e){let t=nf(n.i,n.x,n.y),i=nf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jm(n,e,t,i){let s=nf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function za(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var sf=class{static triangulate(e,t,i=2){return N_(e,t,i)}},mi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Jm(e),$m(i,e);let o=e.length;t.forEach(Jm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$m(i,t[l]);let a=sf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $m(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Zs=class n extends $e{constructor(e=new Oi([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Q_,w,v=!1,C,A,L,U;g&&(w=g.getSpacedPoints(u),v=!0,f=!1,C=g.computeFrenetFrames(u,!1),A=new M,L=new M,U=new M),f||(m=0,h=0,p=0,x=0);let S=a.extractPoints(c),_=S.shape,T=S.holes;if(!mi.isClockWise(_)){_=_.reverse();for(let Y=0,Z=T.length;Y<Z;Y++){let $=T[Y];mi.isClockWise($)&&(T[Y]=$.reverse())}}function N(Y){let $=10000000000000001e-36,D=Y[0];for(let X=1;X<=Y.length;X++){let z=X%Y.length,te=Y[z],se=te.x-D.x,fe=te.y-D.y,R=se*se+fe*fe,y=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(D.x),Math.abs(D.y)),I=$*y*y;if(R<=I){Y.splice(z,1),X--;continue}D=te}}N(_),T.forEach(N);let k=T.length,W=_;for(let Y=0;Y<k;Y++){let Z=T[Y];_=_.concat(Z)}function V(Y,Z,$){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(Z,$)}let J=_.length;function B(Y,Z,$){let D,X,z,te=Y.x-Z.x,se=Y.y-Z.y,fe=$.x-Y.x,R=$.y-Y.y,y=te*te+se*se,I=te*R-se*fe;if(Math.abs(I)>Number.EPSILON){let H=Math.sqrt(y),re=Math.sqrt(fe*fe+R*R),j=Z.x-se/H,ye=Z.y+te/H,pe=$.x-R/re,be=$.y+fe/re,_e=((pe-j)*R-(be-ye)*fe)/(te*R-se*fe);D=j+te*_e-Y.x,X=ye+se*_e-Y.y;let he=D*D+X*X;if(he<=2)return new Ae(D,X);z=Math.sqrt(he/2)}else{let H=!1;te>Number.EPSILON?fe>Number.EPSILON&&(H=!0):te<-Number.EPSILON?fe<-Number.EPSILON&&(H=!0):Math.sign(se)===Math.sign(R)&&(H=!0),H?(D=-se,X=te,z=Math.sqrt(y)):(D=te,X=se,z=Math.sqrt(y/2))}return new Ae(D/z,X/z)}let ae=[];for(let Y=0,Z=W.length,$=Z-1,D=Y+1;Y<Z;Y++,$++,D++)$===Z&&($=0),D===Z&&(D=0),ae[Y]=B(W[Y],W[$],W[D]);let ce=[],ie,oe=ae.concat();for(let Y=0,Z=k;Y<Z;Y++){let $=T[Y];ie=[];for(let D=0,X=$.length,z=X-1,te=D+1;D<X;D++,z++,te++)z===X&&(z=0),te===X&&(te=0),ie[D]=B($[D],$[z],$[te]);ce.push(ie),oe=oe.concat(ie)}let Se;if(m===0)Se=mi.triangulateShape(W,T);else{let Y=[],Z=[];for(let $=0;$<m;$++){let D=$/m,X=h*Math.cos(D*Math.PI/2),z=p*Math.sin(D*Math.PI/2)+x;for(let te=0,se=W.length;te<se;te++){let fe=V(W[te],ae[te],z);Pe(fe.x,fe.y,-X),D===0&&Y.push(fe)}for(let te=0,se=k;te<se;te++){let fe=T[te];ie=ce[te];let R=[];for(let y=0,I=fe.length;y<I;y++){let H=V(fe[y],ie[y],z);Pe(H.x,H.y,-X),D===0&&R.push(H)}D===0&&Z.push(R)}}Se=mi.triangulateShape(Y,Z)}let me=Se.length,de=p+x;for(let Y=0;Y<J;Y++){let Z=f?V(_[Y],oe[Y],de):_[Y];v?(L.copy(C.normals[0]).multiplyScalar(Z.x),A.copy(C.binormals[0]).multiplyScalar(Z.y),U.copy(w[0]).add(L).add(A),Pe(U.x,U.y,U.z)):Pe(Z.x,Z.y,0)}for(let Y=1;Y<=u;Y++)for(let Z=0;Z<J;Z++){let $=f?V(_[Z],oe[Z],de):_[Z];v?(L.copy(C.normals[Y]).multiplyScalar($.x),A.copy(C.binormals[Y]).multiplyScalar($.y),U.copy(w[Y]).add(L).add(A),Pe(U.x,U.y,U.z)):Pe($.x,$.y,d/u*Y)}for(let Y=m-1;Y>=0;Y--){let Z=Y/m,$=h*Math.cos(Z*Math.PI/2),D=p*Math.sin(Z*Math.PI/2)+x;for(let X=0,z=W.length;X<z;X++){let te=V(W[X],ae[X],D);Pe(te.x,te.y,d+$)}for(let X=0,z=T.length;X<z;X++){let te=T[X];ie=ce[X];for(let se=0,fe=te.length;se<fe;se++){let R=V(te[se],ie[se],D);v?Pe(R.x,R.y+w[u-1].y,w[u-1].x+$):Pe(R.x,R.y,d+$)}}}ee(),ne();function ee(){let Y=s.length/3;if(f){let Z=0,$=J*Z;for(let D=0;D<me;D++){let X=Se[D];G(X[2]+$,X[1]+$,X[0]+$)}Z=u+m*2,$=J*Z;for(let D=0;D<me;D++){let X=Se[D];G(X[0]+$,X[1]+$,X[2]+$)}}else{for(let Z=0;Z<me;Z++){let $=Se[Z];G($[2],$[1],$[0])}for(let Z=0;Z<me;Z++){let $=Se[Z];G($[0]+J*u,$[1]+J*u,$[2]+J*u)}}i.addGroup(Y,s.length/3-Y,0)}function ne(){let Y=s.length/3,Z=0;xe(W,Z),Z+=W.length;for(let $=0,D=T.length;$<D;$++){let X=T[$];xe(X,Z),Z+=X.length}i.addGroup(Y,s.length/3-Y,1)}function xe(Y,Z){let $=Y.length;for(;--$>=0;){let D=$,X=$-1;X<0&&(X=Y.length-1);for(let z=0,te=u+m*2;z<te;z++){let se=J*z,fe=J*(z+1),R=Z+D+se,y=Z+X+se,I=Z+X+fe,H=Z+D+fe;ge(R,y,I,H)}}}function Pe(Y,Z,$){l.push(Y),l.push(Z),l.push($)}function G(Y,Z,$){Me(Y),Me(Z),Me($);let D=s.length/3,X=b.generateTopUV(i,s,D-3,D-2,D-1);E(X[0]),E(X[1]),E(X[2])}function ge(Y,Z,$,D){Me(Y),Me(Z),Me(D),Me(Z),Me($),Me(D);let X=s.length/3,z=b.generateSideWallUV(i,s,X-6,X-3,X-2,X-1);E(z[0]),E(z[1]),E(z[3]),E(z[1]),E(z[2]),E(z[3])}function Me(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function E(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return eM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ef[s.type]().fromJSON(s)),new n(i,e.options)}},Q_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-d),new Ae(f,1-p),new Ae(x,1-g)]:[new Ae(a,1-l),new Ae(u,1-d),new Ae(h,1-p),new Ae(m,1-g)]}};function eM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class n extends so{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var oi=class n extends so{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$t=class n extends $e{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let b=g*f-o;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-b,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let w=b+c*g,v=b+c*(g+1),C=b+1+c*(g+1),A=b+1+c*g;h.push(w,v,A),h.push(v,C,A)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ao=class n extends $e{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new M,p=new Ae;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let b=g+m,w=b,v=b+i+1,C=b+i+2,A=b+1;a.push(w,v,A),a.push(v,C,A)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Va=class n extends $e{constructor(e=new Oi([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;mi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];mi.isClockWise(b)===!0&&(p[m]=b.reverse())}let x=mi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];h=h.concat(b)}for(let m=0,g=h.length;m<g;m++){let b=h[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=x.length;m<g;m++){let b=x[m],w=b[0]+d,v=b[1]+d,C=b[2]+d;i.push(w,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tM(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function tM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var ai=class n extends $e{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let b=[],w=g/i,v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+v,1-w),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let w=u[g][b+1],v=u[g][b],C=u[g+1][b],A=u[g+1][b+1];(g!==0||o>0)&&h.push(w,v,A),(g!==i-1||l<Math.PI)&&h.push(v,C,A)}this.setIndex(h),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ka=class n extends so{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},zi=class n extends $e{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,m=(s+1)*(h-1)+p-1,g=(s+1)*(h-1)+p,b=(s+1)*h+p;o.push(x,m,b),o.push(m,g,b)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var js=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,b),Km(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Km(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Km(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Mt=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ga=class extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var en=class extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fc=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Js=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bc=class extends Js{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jd,endingEnd:jd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jd:r=e,a=2*t-i;break;case $d:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jd:o=e,l=2*i-t;break;case $d:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*m+(1.5+h)*x+.5*p,v=h*m-h*x;for(let C=0;C!==a;++C)r[C]=g*o[u+C]+b*o[c+C]+w*o[l+C]+v*o[d+C];return r}},Oc=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},zc=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case _c:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return _c;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&nM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=_c;var ds=class extends Vn{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ma;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Vc.prototype.ValueTypeName="color";var kc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};kc.prototype.ValueTypeName="number";var Gc=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ha=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Vn{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ma;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Hc.prototype.ValueTypeName="vector";var gc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Wc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Qg=new Wc,lo=class{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=new WeakMap,qc=class extends lo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Gr.get(o);d===void 0&&(d=[],Gr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Zr("img");function l(){u(),t&&t(this);let d=Gr.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),gc.remove(`image:${e}`);let f=Gr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var $s=class extends lo{constructor(e){super(e)}load(e,t,i,s){let r=new gn,o=new qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},co=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Wa=class extends co{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xd=new at,Qm=new M,eg=new M,Xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qm),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tg=new at,ca=new M,Yd=new M,rf=class extends Xc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Yd.copy(i.position),Yd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yd),i.updateMatrixWorld(),s.makeTranslation(-ca.x,-ca.y,-ca.z),tg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tg,i.coordinateSystem,i.reversedDepth)}},qa=class extends co{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xa=class extends _a{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},of=class extends Xc{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Af="\\[\\]\\.:\\/",iM=new RegExp("["+Af+"]","g"),Ef="[^"+Af+"]",sM="[^"+Af.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",Ef),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ef),lM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ef),cM=new RegExp("^"+rM+oM+aM+lM+"$"),uM=["material","materials","bones","map"],af=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){let t=cM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=af;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SE=new Float32Array(1);var ng=new at,Vi=class{constructor(e,t,i=0,s=1/0){this.ray=new Gs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ng),this}intersectObject(e,t=!0,i=[]){return lf(e,this,i,t),i.sort(ig),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)lf(e[s],this,i,t);return i.sort(ig),i}};function ig(n,e){return n.distance-e.distance}function lf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)lf(r[o],e,t,!0)}}var sg=new M,pc=new M,Hr=new M,Wr=new M,Zd=new M,hM=new M,dM=new M,Za=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){sg.subVectors(e,this.start),pc.subVectors(this.end,this.start);let i=pc.dot(pc),r=pc.dot(sg)/i;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=hM,i=dM){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Hr.subVectors(c,a),Wr.subVectors(u,l),Zd.subVectors(a,l);let d=Hr.dot(Hr),f=Wr.dot(Wr),h=Wr.dot(Zd);if(d<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=h/f,o=Qe(o,0,1);else{let p=Hr.dot(Zd);if(f<=s)o=0,r=Qe(-p/d,0,1);else{let x=Hr.dot(Wr),m=d*f-x*x;m!==0?r=Qe((x*h-p*f)/m,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=Qe(-p/d,0,1)):o>1&&(o=1,r=Qe((x-p)/d,0,1))}}return t.copy(a).add(Hr.multiplyScalar(r)),i.copy(l).add(Wr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Cf(n,e,t,i){let s=fM(i);switch(t){case xf:return n*e;case lu:return n*e/s.components*s.byteLength;case cu:return n*e/s.components*s.byteLength;case vf:return n*e*2/s.components*s.byteLength;case uu:return n*e*2/s.components*s.byteLength;case yf:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case hu:return n*e*4/s.components*s.byteLength;case Ka:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:case mu:return Math.max(n,16)*Math.max(e,8)/4;case du:case pu:return Math.max(n,8)*Math.max(e,8)/2;case gu:case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Au:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Du:case Uu:case Fu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Nu:case Bu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ou:case zu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fM(n){switch(n){case kn:case ff:return{byteLength:1,components:1};case ho:case pf:case Mi:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case ps:case ru:case li:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function S0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
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
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
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
}`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
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
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
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
#endif`,xb=`struct PhysicalMaterial {
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
}`,yb=`
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cb=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,E1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,I1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,B1=`#define MATCAP
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
}`,O1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,G1=`#define STANDARD
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
}`,H1=`#define STANDARD
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
}`,W1=`#define TOON
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
}`,q1=`#define TOON
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
}`,X1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,J1=`uniform float rotation;
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
}`,$1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:vM,alphahash_pars_fragment:_M,alphamap_fragment:MM,alphamap_pars_fragment:bM,alphatest_fragment:SM,alphatest_pars_fragment:wM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:EM,batching_vertex:CM,begin_vertex:RM,beginnormal_vertex:PM,bsdfs:IM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:BM,color_fragment:OM,color_pars_fragment:zM,color_pars_vertex:VM,color_vertex:kM,common:GM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:WM,displacementmap_pars_vertex:qM,displacementmap_vertex:XM,emissivemap_fragment:YM,emissivemap_pars_fragment:ZM,colorspace_fragment:jM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:KM,envmap_pars_fragment:QM,envmap_pars_vertex:eb,envmap_physical_pars_fragment:hb,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:ab,lights_lambert_fragment:lb,lights_lambert_pars_fragment:cb,lights_pars_begin:ub,lights_toon_fragment:db,lights_toon_pars_fragment:fb,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:xb,lights_fragment_begin:yb,lights_fragment_maps:vb,lights_fragment_end:_b,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:wb,map_fragment:Tb,map_pars_fragment:Ab,map_particle_fragment:Eb,map_particle_pars_fragment:Cb,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Ib,morphcolor_vertex:Lb,morphnormal_vertex:Db,morphtarget_pars_vertex:Ub,morphtarget_vertex:Fb,normal_fragment_begin:Nb,normal_fragment_maps:Bb,normal_pars_fragment:Ob,normal_pars_vertex:zb,normal_vertex:Vb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:qb,opaque_fragment:Xb,packing:Yb,premultiplied_alpha_fragment:Zb,project_vertex:jb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:s1,skinning_pars_vertex:r1,skinning_vertex:o1,skinnormal_vertex:a1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:h1,transmission_fragment:d1,transmission_pars_fragment:f1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:x1,background_vert:y1,background_frag:v1,backgroundCube_vert:_1,backgroundCube_frag:M1,cube_vert:b1,cube_frag:S1,depth_vert:w1,depth_frag:T1,distanceRGBA_vert:A1,distanceRGBA_frag:E1,equirect_vert:C1,equirect_frag:R1,linedashed_vert:P1,linedashed_frag:I1,meshbasic_vert:L1,meshbasic_frag:D1,meshlambert_vert:U1,meshlambert_frag:F1,meshmatcap_vert:N1,meshmatcap_frag:B1,meshnormal_vert:O1,meshnormal_frag:z1,meshphong_vert:V1,meshphong_frag:k1,meshphysical_vert:G1,meshphysical_frag:H1,meshtoon_vert:W1,meshtoon_frag:q1,points_vert:X1,points_frag:Y1,shadow_vert:Z1,shadow_frag:j1,sprite_vert:J1,sprite_frag:$1},Ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},bi={basic:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:xn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:xn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:xn([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:xn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:xn([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:xn([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:xn([Ue.common,Ue.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:xn([Ue.lights,Ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:xn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Gu={r:0,b:0,g:0},tr=new sn,K1=new at;function Q1(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,C=p(w);C===null?g(a,l):C&&C.isColor&&(g(C,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,v){let C=p(v);C&&(C.isCubeTexture||C.mapping===Ja)?(u===void 0&&(u=new Be(new et(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:er(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),tr.copy(v.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(tr)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==_t,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Be(new $t(2,2),new hn({name:"BackgroundMaterial",uniforms:er(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==_t,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,v){w.getRGB(Gu,wf(n)),i.buffers.color.setClear(Gu.r,Gu.g,Gu.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:x,addToRenderList:m,dispose:b}}function eS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,T,F,N,k){let W=!1,V=d(N,F,T);r!==V&&(r=V,c(r.object)),W=h(_,N,F,k),W&&p(_,N,F,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(_,T,F,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,T,F){let N=F.wireframe===!0,k=i[_.id];k===void 0&&(k={},i[_.id]=k);let W=k[T.id];W===void 0&&(W={},k[T.id]=W);let V=W[N];return V===void 0&&(V=f(l()),W[N]=V),V}function f(_){let T=[],F=[],N=[];for(let k=0;k<t;k++)T[k]=0,F[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:N,object:_,attributes:{},index:null}}function h(_,T,F,N){let k=r.attributes,W=T.attributes,V=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let ce=k[B],ie=W[B];if(ie===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),ce===void 0||ce.attribute!==ie||ie&&ce.data!==ie.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function p(_,T,F,N){let k={},W=T.attributes,V=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let ce=W[B];ce===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor));let ie={};ie.attribute=ce,ce&&ce.data&&(ie.data=ce.data),k[B]=ie,V++}r.attributes=k,r.attributesNum=V,r.index=N}function x(){let _=r.newAttributes;for(let T=0,F=_.length;T<F;T++)_[T]=0}function m(_){g(_,0)}function g(_,T){let F=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;F[_]=1,N[_]===0&&(n.enableVertexAttribArray(_),N[_]=1),k[_]!==T&&(n.vertexAttribDivisor(_,T),k[_]=T)}function b(){let _=r.newAttributes,T=r.enabledAttributes;for(let F=0,N=T.length;F<N;F++)T[F]!==_[F]&&(n.disableVertexAttribArray(F),T[F]=0)}function w(_,T,F,N,k,W,V){V===!0?n.vertexAttribIPointer(_,T,F,k,W):n.vertexAttribPointer(_,T,F,N,k,W)}function v(_,T,F,N){x();let k=N.attributes,W=F.getAttributes(),V=T.defaultAttributeValues;for(let J in W){let B=W[J];if(B.location>=0){let ae=k[J];if(ae===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ae!==void 0){let ce=ae.normalized,ie=ae.itemSize,oe=e.get(ae);if(oe===void 0)continue;let Se=oe.buffer,me=oe.type,de=oe.bytesPerElement,ee=me===n.INT||me===n.UNSIGNED_INT||ae.gpuType===ru;if(ae.isInterleavedBufferAttribute){let ne=ae.data,xe=ne.stride,Pe=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let G=0;G<B.locationSize;G++)g(B.location+G,ne.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let G=0;G<B.locationSize;G++)m(B.location+G);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let G=0;G<B.locationSize;G++)w(B.location+G,ie/B.locationSize,me,ce,xe*de,(Pe+ie/B.locationSize*G)*de,ee)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne,ae.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,ie/B.locationSize,me,ce,ie*de,ie/B.locationSize*ne*de,ee)}}else if(V!==void 0){let ce=V[J];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(B.location,ce);break;case 3:n.vertexAttrib3fv(B.location,ce);break;case 4:n.vertexAttrib4fv(B.location,ce);break;default:n.vertexAttrib1fv(B.location,ce)}}}}b()}function C(){U();for(let _ in i){let T=i[_];for(let F in T){let N=T[F];for(let k in N)u(N[k].object),delete N[k];delete T[F]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;let T=i[_.id];for(let F in T){let N=T[F];for(let k in N)u(N[k].object),delete N[k];delete T[F]}delete i[_.id]}function L(_){for(let T in i){let F=i[T];if(F[_.id]===void 0)continue;let N=F[_.id];for(let k in N)u(N[k].object),delete N[k];delete F[_.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function tS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==In&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==kn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==li&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function iS(n){let e=this,t=null,i=0,s=!1,r=!1,o=new En,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,w=b*4,v=g.clippingState||null;l.value=v,v=u(p,f,w,h);for(let C=0;C!==w;++C)v[C]=t[C];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=h;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function sS(n){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=Ks:a===iu&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===uo||a===iu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var go=4,e0=[.125,.215,.35,.446,.526,.582],sr=20,Rf=new Xa,t0=new De,Pf=null,If=0,Lf=0,Df=!1,ir=(1+Math.sqrt(5))/2,mo=1/ir,n0=[new M(-ir,mo,0),new M(ir,mo,0),new M(-mo,0,ir),new M(mo,0,ir),new M(0,ir,-mo),new M(0,ir,mo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],rS=new M,yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=rS}=r;Pf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,If,Lf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Mi,format:In,colorSpace:ks,depthBuffer:!1},s=i0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(r)),this._blurMaterial=aS(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Rf)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(t0),d.toneMapping=Gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new yt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new Be(new et,x),g=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,g=!0):(x.color.copy(t0),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let C=this._cubeSize;Hu(s,v*C,w>2?C:0,C,C),d.setRenderTarget(s),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ks||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Hu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=n0[(s-r-1)%n0.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*sr-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):sr;m>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);let g=[],b=0;for(let L=0;L<sr;++L){let U=L/x,S=Math.exp(-U*U/2);g.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<g.length;L++)g[L]=g[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let v=this._sizeLods[s],C=3*v*(s>w-go?s-w+go:0),A=4*(this._cubeSize-v);Hu(t,C,A,3*v,2*v),l.setRenderTarget(t),l.render(d,Rf)}};function oS(n){let e=[],t=[],i=[],s=n,r=n-go+1+e0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-go?l=e0[o-n+go-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,m=2,g=1,b=new Float32Array(x*p*h),w=new Float32Array(m*p*h),v=new Float32Array(g*p*h);for(let A=0;A<h;A++){let L=A%3*2/3-1,U=A>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(S,x*p*A),w.set(f,m*p*A);let _=[A,A,A,A,A,A];v.set(_,g*p*A)}let C=new $e;C.setAttribute("position",new mt(b,x)),C.setAttribute("uv",new mt(w,m)),C.setAttribute("faceIndex",new mt(v,g)),e.push(C),s>go&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function i0(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function aS(n,e,t){let i=new Float32Array(sr),s=new M(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function s0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function r0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function lS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===uo||l===iu,u=l===Ks||l===Qs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new yo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&jr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uS(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let b=h.array;x=h.version;for(let w=0,v=b.length;w<v;w+=3){let C=b[w+0],A=b[w+1],L=b[w+2];f.push(C,A,A,L,L,C)}}else if(p!==void 0){let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let C=w+0,A=w+1,L=w+2;f.push(C,A,A,L,L,C)}}else return;let m=new(Sf(f)?va:Hs)(f,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hS(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function d(f,h,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,p);let g=0;for(let b=0;b<p;b++)g+=h[b]*x[b];t.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fS(n,e,t){let i=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*C*4*d),L=new ya(A,v,C,d);L.type=li,L.needsUpdate=!0;let U=w*4;for(let _=0;_<d;_++){let T=m[_],F=g[_],N=b[_],k=v*C*4*_;for(let W=0;W<T.count;W++){let V=W*U;h===!0&&(s.fromBufferAttribute(T,W),A[k+V+0]=s.x,A[k+V+1]=s.y,A[k+V+2]=s.z,A[k+V+3]=0),p===!0&&(s.fromBufferAttribute(F,W),A[k+V+4]=s.x,A[k+V+5]=s.y,A[k+V+6]=s.z,A[k+V+7]=0),x===!0&&(s.fromBufferAttribute(N,W),A[k+V+8]=s.x,A[k+V+9]=s.y,A[k+V+10]=s.z,A[k+V+11]=N.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Ae(v,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function pS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var w0=new gn,o0=new Ra(1,1),T0=new ya,A0=new wc,E0=new Ma,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),h0=new Float32Array(4);function vo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=a0[s];if(r===void 0&&(r=new Float32Array(s),a0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xu(n,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function vS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;h0.set(i),n.uniformMatrix2fv(this.addr,!1,h0),on(t,i)}}function _S(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;u0.set(i),n.uniformMatrix3fv(this.addr,!1,u0),on(t,i)}}function MS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;c0.set(i),n.uniformMatrix4fv(this.addr,!1,c0),on(t,i)}}function bS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function wS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function TS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function AS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ES(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function CS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function RS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function PS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(o0.compareFunction=_f,r=o0):r=w0,t.setTexture2D(e||r,s)}function IS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||A0,s)}function LS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||E0,s)}function DS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||T0,s)}function US(n){switch(n){case 5126:return mS;case 35664:return gS;case 35665:return xS;case 35666:return yS;case 35674:return vS;case 35675:return _S;case 35676:return MS;case 5124:case 35670:return bS;case 35667:case 35671:return SS;case 35668:case 35672:return wS;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return ES;case 36295:return CS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return DS}}function FS(n,e){n.uniform1fv(this.addr,e)}function NS(n,e){let t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function BS(n,e){let t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function OS(n,e){let t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function zS(n,e){let t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VS(n,e){let t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kS(n,e){let t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GS(n,e){n.uniform1iv(this.addr,e)}function HS(n,e){n.uniform2iv(this.addr,e)}function WS(n,e){n.uniform3iv(this.addr,e)}function qS(n,e){n.uniform4iv(this.addr,e)}function XS(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function ZS(n,e){n.uniform3uiv(this.addr,e)}function jS(n,e){n.uniform4uiv(this.addr,e)}function JS(n,e,t){let i=this.cache,s=e.length,r=Xu(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||w0,r[o])}function $S(n,e,t){let i=this.cache,s=e.length,r=Xu(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||A0,r[o])}function KS(n,e,t){let i=this.cache,s=e.length,r=Xu(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||E0,r[o])}function QS(n,e,t){let i=this.cache,s=e.length,r=Xu(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||T0,r[o])}function ew(n){switch(n){case 5126:return FS;case 35664:return NS;case 35665:return BS;case 35666:return OS;case 35674:return zS;case 35675:return VS;case 35676:return kS;case 5124:case 35670:return GS;case 35667:case 35671:return HS;case 35668:case 35672:return WS;case 35669:case 35673:return qS;case 5125:return XS;case 36294:return YS;case 36295:return ZS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return QS}}var Ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=US(t.type)}},Nf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ew(t.type)}},Bf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Uf=/(\w+)(\])?(\[|\.)?/g;function d0(n,e){n.seq.push(e),n.map[e.id]=e}function tw(n,e,t){let i=n.name,s=i.length;for(Uf.lastIndex=0;;){let r=Uf.exec(i),o=Uf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){d0(t,c===void 0?new Ff(a,n,e):new Nf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Bf(a),d0(t,d)),t=d}}}var xo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tw(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function f0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nw=37297,iw=0;function sw(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var p0=new nt;function rw(n){ut._getMatrix(p0,ut.workingColorSpace,n);let e=`mat3( ${p0.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function m0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sw(n.getShaderSource(e),a)}else return r}function ow(n,e){let t=rw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aw(n,e){let t;switch(e){case Cg:t="Linear";break;case Rg:t="Reinhard";break;case Pg:t="Cineon";break;case nu:t="ACESFilmic";break;case Lg:t="AgX";break;case Dg:t="Neutral";break;case Ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wu=new M;function lw(){ut.getLuminanceCoefficients(Wu);let n=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function uw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function nl(n){return n!==""}function g0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(n){return n.replace(dw,pw)}var fw=new Map;function pw(n,e){let t=rt[e];if(t===void 0){let i=fw.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(t)}var mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(n){return n.replace(mw,gw)}function gw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case Qs:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function _w(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ag:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function Mw(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=xw(t),c=yw(t),u=vw(t),d=_w(t),f=Mw(t),h=cw(t),p=uw(r),x=s.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(nl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(m=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?aw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),lw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),o=Of(o),o=g0(o,t),o=x0(o,t),a=Of(a),a=g0(a,t),a=x0(a,t),o=y0(o),a=y0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=b+m+o,v=b+g+a,C=f0(s,s.VERTEX_SHADER,w),A=f0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(T){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(C)||"",k=s.getShaderInfoLog(A)||"",W=F.trim(),V=N.trim(),J=k.trim(),B=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,A);else{let ce=m0(s,C,"vertex"),ie=m0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+ce+`
`+ie)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||J==="")&&(ae=!1);ae&&(T.diagnostics={runnable:B,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:g}})}s.deleteShader(C),s.deleteShader(A),U=new xo(s,x),S=hw(s,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,nw)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var Sw=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vf(e),t.set(e,i)),i}},Vf=class{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}};function ww(n,e,t,i,s,r,o){let a=new $r,l=new zf,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,T,F,N){let k=F.fog,W=N.geometry,V=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),B=J&&J.mapping===Ja?J.image.height:null,ae=p[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=ce!==void 0?ce.length:0,oe=0;W.morphAttributes.position!==void 0&&(oe=1),W.morphAttributes.normal!==void 0&&(oe=2),W.morphAttributes.color!==void 0&&(oe=3);let Se,me,de,ee;if(ae){let gt=bi[ae];Se=gt.vertexShader,me=gt.fragmentShader}else Se=S.vertexShader,me=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);let ne=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,G=N.isBatchedMesh===!0,ge=!!S.map,Me=!!S.matcap,E=!!J,Y=!!S.aoMap,Z=!!S.lightMap,$=!!S.bumpMap,D=!!S.normalMap,X=!!S.displacementMap,z=!!S.emissiveMap,te=!!S.metalnessMap,se=!!S.roughnessMap,fe=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,I=S.iridescence>0,H=S.sheen>0,re=S.transmission>0,j=fe&&!!S.anisotropyMap,ye=R&&!!S.clearcoatMap,pe=R&&!!S.clearcoatNormalMap,be=R&&!!S.clearcoatRoughnessMap,_e=I&&!!S.iridescenceMap,he=I&&!!S.iridescenceThicknessMap,we=H&&!!S.sheenColorMap,ze=H&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Re=!!S.specularColorMap,We=!!S.specularIntensityMap,q=re&&!!S.transmissionMap,Ce=re&&!!S.thicknessMap,Le=!!S.gradientMap,Ne=!!S.alphaMap,Ee=S.alphaTest>0,ve=!!S.alphaHash,He=!!S.extensions,tt=Gi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Ct={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:me,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:G,batchingColor:G&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:Me,envMap:E,envMapMode:E&&J.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:Z,bumpMap:$,normalMap:D,displacementMap:f&&X,emissiveMap:z,normalMapObjectSpace:D&&S.normalMapType===Bg,normalMapTangentSpace:D&&S.normalMapType===Vu,metalnessMap:te,roughnessMap:se,anisotropy:fe,anisotropyMap:j,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:be,dispersion:y,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:he,sheen:H,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Te,specularColorMap:Re,specularIntensityMap:We,transmission:re,transmissionMap:q,thicknessMap:Ce,gradientMap:Le,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ee,alphaHash:ve,combine:S.combine,mapUv:ge&&x(S.map.channel),aoMapUv:Y&&x(S.aoMap.channel),lightMapUv:Z&&x(S.lightMap.channel),bumpMapUv:$&&x(S.bumpMap.channel),normalMapUv:D&&x(S.normalMap.channel),displacementMapUv:X&&x(S.displacementMap.channel),emissiveMapUv:z&&x(S.emissiveMap.channel),metalnessMapUv:te&&x(S.metalnessMap.channel),roughnessMapUv:se&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:q&&x(S.transmissionMap.channel),thicknessMapUv:Ce&&x(S.thicknessMap.channel),alphaMapUv:Ne&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||fe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ge||Ne),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:oe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:z&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||G)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)_.push(T),_.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(b(_,S),w(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function b(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function w(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let _=p[S.type],T;if(_){let F=bi[_];T=ku.clone(F.uniforms)}else T=S.uniforms;return T}function C(S,_){let T;for(let F=0,N=u.length;F<N;F++){let k=u[F];if(k.cacheKey===_){T=k,++T.usedTimes;break}}return T===void 0&&(T=new bw(n,_,S,r),u.push(T)),T}function A(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:U}}function Tw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Aw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,p,x,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.push(g):h.transparent===!0?s.push(g):t.push(g)}function l(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.unshift(g):h.transparent===!0?s.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||Aw),i.length>1&&i.sort(f||_0),s.length>1&&s.sort(f||_0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ew(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new M0,n.set(i,[o])):s>=r.length?(o=new M0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new De};break;case"SpotLight":t={position:new M,direction:new M,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function Rw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Pw=0;function Iw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lw(n){let e=new Cw,t=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new at,o=new at;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,p=0,x=0,m=0,g=0,b=0,w=0,v=0,C=0,A=0,L=0;c.sort(Iw);for(let S=0,_=c.length;S<_;S++){let T=c[S],F=T.color,N=T.intensity,k=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],N);L++}else if(T.isDirectionalLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=T.shadow.matrix,b++}i.directional[h]=V,h++}else if(T.isSpotLight){let V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[x]=V;let J=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,J.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[x]=J.matrix,T.castShadow){let B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=W,v++}x++}else if(T.isRectAreaLight){let V=e.get(T);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=V,m++}else if(T.isPointLight){let V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){let J=T.shadow,B=t.get(T);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=T.shadow.matrix,w++}i.point[p]=V,p++}else if(T.isHemisphereLight){let V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(N),V.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[g]=V,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==g||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==C||U.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=g,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=C,U.numLightProbes=L,i.version=Pw++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let w=c[g];if(w.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(w.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function b0(n){let e=new Lw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new b0(n),e.set(s,[a])):r>=o.length?(a=new b0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`;function Nw(n,e,t){let i=new no,s=new Ae,r=new Ae,o=new lt,a=new Fc({depthPacking:Ng}),l=new Nc,c={},u=t.maxTextureSize,d={[ri]:dn,[dn]:ri,[qt]:qt},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Uw,fragmentShader:Fw}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(A,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=g!==_i&&this.type===_i,k=g===_i&&this.type!==_i;for(let W=0,V=A.length;W<V;W++){let J=A[W],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let ae=B.getFrameExtents();if(s.multiply(ae),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,B.mapSize.y=r.y)),B.map===null||N===!0||k===!0){let ie=this.type!==_i?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(s.x,s.y,ie),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ce=B.getViewportCount();for(let ie=0;ie<ce;ie++){let oe=B.getViewport(ie);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),F.viewport(o),B.updateMatrices(J,ie),i=B.getFrustum(),v(L,U,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===_i&&b(B,U),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,T)};function b(A,L){let U=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,U,h,x,null)}function w(A,L,U,S){let _=null,T=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)_=T;else if(_=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=_.uuid,N=L.uuid,k=c[F];k===void 0&&(k={},c[F]=k);let W=k[N];W===void 0&&(W=_.clone(),k[N]=W,L.addEventListener("dispose",C)),_=W}if(_.visible=L.visible,_.wireframe=L.wireframe,S===_i?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:d[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let F=n.properties.get(_);F.light=U}return _}function v(A,L,U,S,_){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===_i)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let N=e.update(A),k=A.material;if(Array.isArray(k)){let W=N.groups;for(let V=0,J=W.length;V<J;V++){let B=W[V],ae=k[B.materialIndex];if(ae&&ae.visible){let ce=w(A,ae,S,_);A.onBeforeShadow(n,A,L,U,N,ce,B),n.renderBufferDirect(U,null,N,ce,A,B),A.onAfterShadow(n,A,L,U,N,ce,B)}}}else if(k.visible){let W=w(A,k,S,_);A.onBeforeShadow(n,A,L,U,N,W,null),n.renderBufferDirect(U,null,N,W,A,null),A.onAfterShadow(n,A,L,U,N,W,null)}}let F=A.children;for(let N=0,k=F.length;N<k;N++)v(F[N],L,U,S,_)}function C(A){A.target.removeEventListener("dispose",C);for(let U in c){let S=c[U],_=A.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Bw={[Zc]:jc,[Jc]:Qc,[$c]:eu,[Vs]:Kc,[jc]:Zc,[Qc]:Jc,[eu]:$c,[Kc]:Vs};function Ow(n,e){function t(){let q=!1,Ce=new lt,Le=null,Ne=new lt(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!q&&(n.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,ve,He,tt,Ct){Ct===!0&&(Ee*=tt,ve*=tt,He*=tt),Ce.set(Ee,ve,He,tt),Ne.equals(Ce)===!1&&(n.clearColor(Ee,ve,He,tt),Ne.copy(Ce))},reset:function(){q=!1,Le=null,Ne.set(-1,0,0,0)}}}function i(){let q=!1,Ce=!1,Le=null,Ne=null,Ee=null;return{setReversed:function(ve){if(Ce!==ve){let He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;let tt=Ee;Ee=null,this.setClear(tt)}},getReversed:function(){return Ce},setTest:function(ve){ve?ne(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!q&&(n.depthMask(ve),Le=ve)},setFunc:function(ve){if(Ce&&(ve=Bw[ve]),Ne!==ve){switch(ve){case Zc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case Jc:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case $c:n.depthFunc(n.EQUAL);break;case Kc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case eu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=ve}},setLocked:function(ve){q=ve},setClear:function(ve){Ee!==ve&&(Ce&&(ve=1-ve),n.clearDepth(ve),Ee=ve)},reset:function(){q=!1,Le=null,Ne=null,Ee=null,Ce=!1}}}function s(){let q=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,He=null,tt=null,Ct=null;return{setTest:function(gt){q||(gt?ne(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!q&&(n.stencilMask(gt),Ce=gt)},setFunc:function(gt,Pi,pi){(Le!==gt||Ne!==Pi||Ee!==pi)&&(n.stencilFunc(gt,Pi,pi),Le=gt,Ne=Pi,Ee=pi)},setOp:function(gt,Pi,pi){(ve!==gt||He!==Pi||tt!==pi)&&(n.stencilOp(gt,Pi,pi),ve=gt,He=Pi,tt=pi)},setLocked:function(gt){q=gt},setClear:function(gt){Ct!==gt&&(n.clearStencil(gt),Ct=gt)},reset:function(){q=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,He=null,tt=null,Ct=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,b=null,w=null,v=null,C=null,A=null,L=new De(0,0,0),U=0,S=!1,_=null,T=null,F=null,N=null,k=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,J=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=J>=2);let ae=null,ce={},ie=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Se=new lt().fromArray(ie),me=new lt().fromArray(oe);function de(q,Ce,Le,Ne){let Ee=new Uint8Array(4),ve=n.createTexture();n.bindTexture(q,ve),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Le;He++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ce+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ve}let ee={};ee[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Vs),$(!1),D(cf),ne(n.CULL_FACE),Y(ki);function ne(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function xe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Pe(q,Ce){return d[q]!==Ce?(n.bindFramebuffer(q,Ce),d[q]=Ce,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function G(q,Ce){let Le=h,Ne=!1;if(q){Le=f.get(Ce),Le===void 0&&(Le=[],f.set(Ce,Le));let Ee=q.textures;if(Le.length!==Ee.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)Le[ve]=n.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,Ne=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Le)}function ge(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let Me={[hs]:n.FUNC_ADD,[cg]:n.FUNC_SUBTRACT,[ug]:n.FUNC_REVERSE_SUBTRACT};Me[hg]=n.MIN,Me[dg]=n.MAX;let E={[fg]:n.ZERO,[pg]:n.ONE,[mg]:n.SRC_COLOR,[xc]:n.SRC_ALPHA,[Mg]:n.SRC_ALPHA_SATURATE,[vg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[gg]:n.ONE_MINUS_SRC_COLOR,[yc]:n.ONE_MINUS_SRC_ALPHA,[_g]:n.ONE_MINUS_DST_COLOR,[yg]:n.ONE_MINUS_DST_ALPHA,[bg]:n.CONSTANT_COLOR,[Sg]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[Tg]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(q,Ce,Le,Ne,Ee,ve,He,tt,Ct,gt){if(q===ki){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),q!==lg){if(q!==m||gt!==S){if((g!==hs||v!==hs)&&(n.blendEquation(n.FUNC_ADD),g=hs,v=hs),gt)switch(q){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFunc(n.ONE,n.ONE);break;case uf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,w=null,C=null,A=null,L.set(0,0,0),U=0,m=q,S=gt}return}Ee=Ee||Ce,ve=ve||Le,He=He||Ne,(Ce!==g||Ee!==v)&&(n.blendEquationSeparate(Me[Ce],Me[Ee]),g=Ce,v=Ee),(Le!==b||Ne!==w||ve!==C||He!==A)&&(n.blendFuncSeparate(E[Le],E[Ne],E[ve],E[He]),b=Le,w=Ne,C=ve,A=He),(tt.equals(L)===!1||Ct!==U)&&(n.blendColor(tt.r,tt.g,tt.b,Ct),L.copy(tt),U=Ct),m=q,S=!1}function Z(q,Ce){q.side===qt?xe(n.CULL_FACE):ne(n.CULL_FACE);let Le=q.side===dn;Ce&&(Le=!Le),$(Le),q.blending===zs&&q.transparent===!1?Y(ki):Y(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ne=q.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),z(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(q){_!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),_=q)}function D(q){q!==rg?(ne(n.CULL_FACE),q!==T&&(q===cf?n.cullFace(n.BACK):q===og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),T=q}function X(q){q!==F&&(V&&n.lineWidth(q),F=q)}function z(q,Ce,Le){q?(ne(n.POLYGON_OFFSET_FILL),(N!==Ce||k!==Le)&&(n.polygonOffset(Ce,Le),N=Ce,k=Le)):xe(n.POLYGON_OFFSET_FILL)}function te(q){q?ne(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function se(q){q===void 0&&(q=n.TEXTURE0+W-1),ae!==q&&(n.activeTexture(q),ae=q)}function fe(q,Ce,Le){Le===void 0&&(ae===null?Le=n.TEXTURE0+W-1:Le=ae);let Ne=ce[Le];Ne===void 0&&(Ne={type:void 0,texture:void 0},ce[Le]=Ne),(Ne.type!==q||Ne.texture!==Ce)&&(ae!==Le&&(n.activeTexture(Le),ae=Le),n.bindTexture(q,Ce||ee[q]),Ne.type=q,Ne.texture=Ce)}function R(){let q=ce[ae];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(q){Se.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Se.copy(q))}function ze(q){me.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function Te(q,Ce){let Le=c.get(Ce);Le===void 0&&(Le=new WeakMap,c.set(Ce,Le));let Ne=Le.get(q);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ce,q.name),Le.set(q,Ne))}function Re(q,Ce){let Ne=c.get(Ce).get(q);l.get(Ce)!==Ne&&(n.uniformBlockBinding(Ce,Ne,q.__bindingPointIndex),l.set(Ce,Ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ce={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,b=null,w=null,v=null,C=null,A=null,L=new De(0,0,0),U=0,S=!1,_=null,T=null,F=null,N=null,k=null,Se.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:xe,bindFramebuffer:Pe,drawBuffers:G,useProgram:ge,setBlending:Y,setMaterial:Z,setFlipSided:$,setCullFace:D,setLineWidth:X,setPolygonOffset:z,setScissorTest:te,activeTexture:se,bindTexture:fe,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:_e,texImage3D:he,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:pe,texStorage3D:be,texSubImage2D:H,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:ye,scissor:we,viewport:ze,reset:We}}function zw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return h?new OffscreenCanvas(R,y):Zr("canvas")}function x(R,y,I){let H=1,re=fe(R);if((re.width>I||re.height>I)&&(H=I/Math.max(re.width,re.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(H*re.width),ye=Math.floor(H*re.height);d===void 0&&(d=p(j,ye));let pe=y?p(j,ye):d;return pe.width=j,pe.height=ye,pe.getContext("2d").drawImage(R,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+ye+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,I,H,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),y===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){let ye=re?ga:ut.getTransfer(H);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=ye===_t?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,y){let I;return R?y===null||y===ps||y===fo?I=n.DEPTH24_STENCIL8:y===li?I=n.DEPTH32F_STENCIL8:y===ho&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ps||y===fo?I=n.DEPTH_COMPONENT24:y===li?I=n.DEPTH_COMPONENT32F:y===ho&&(I=n.DEPTH_COMPONENT16),I}function C(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),U(y),y.isVideoTexture&&u.delete(y)}function L(R){let y=R.target;y.removeEventListener("dispose",L),_(y)}function U(R){let y=i.get(R);if(y.__webglInit===void 0)return;let I=R.source,H=f.get(I);if(H){let re=H[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(H).length===0&&f.delete(I)}i.remove(R)}function S(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let I=R.source,H=f.get(I);delete H[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let re=0;re<y.__webglFramebuffer[H].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[H][re]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=R.textures;for(let H=0,re=I.length;H<re;H++){let j=i.get(I[H]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(R)}let T=0;function F(){T=0}function N(){let R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function k(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){let I=i.get(R);if(R.isVideoTexture&&te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let H=R.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}function V(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ee(I,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}function J(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ee(I,R,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}function B(R,y){let I=i.get(R);if(R.version>0&&I.__version!==R.version){ne(I,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}let ae={[xi]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},ce={[cn]:n.NEAREST,[Ug]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[su]:n.LINEAR_MIPMAP_NEAREST,[Pn]:n.LINEAR_MIPMAP_LINEAR},ie={[Og]:n.NEVER,[Wg]:n.ALWAYS,[zg]:n.LESS,[_f]:n.LEQUAL,[Vg]:n.EQUAL,[Hg]:n.GEQUAL,[kg]:n.GREATER,[Gg]:n.NOTEQUAL};function oe(R,y){if(y.type===li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===su||y.magFilter===$a||y.magFilter===Pn||y.minFilter===un||y.minFilter===su||y.minFilter===$a||y.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ae[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ce[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==$a&&y.minFilter!==Pn||y.type===li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Se(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let H=y.source,re=f.get(H);re===void 0&&(re={},f.set(H,re));let j=k(y);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),re[j].usedTimes++;let ye=re[R.__cacheKey];ye!==void 0&&(re[R.__cacheKey].usedTimes--,ye.usedTimes===0&&S(y)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return I}function me(R,y,I){return Math.floor(Math.floor(R/I)/y)}function de(R,y,I,H){let j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,I,H,y.data);else{j.sort((he,we)=>he.start-we.start);let ye=0;for(let he=1;he<j.length;he++){let we=j[ye],ze=j[he],Te=we.start+we.count,Re=me(ze.start,y.width,4),We=me(we.start,y.width,4);ze.start<=Te+1&&Re===We&&me(ze.start+ze.count-1,y.width,4)===Re?we.count=Math.max(we.count,ze.start+ze.count-we.start):(++ye,j[ye]=ze)}j.length=ye+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let he=0,we=j.length;he<we;he++){let ze=j[he],Te=Math.floor(ze.start/4),Re=Math.ceil(ze.count/4),We=Te%y.width,q=Math.floor(Te/y.width),Ce=Re,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,We,q,Ce,Le,I,H,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function ee(R,y,I){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);let re=Se(R,y),j=y.source;t.bindTexture(H,R.__webglTexture,n.TEXTURE0+I);let ye=i.get(j);if(j.version!==ye.__version||re===!0){t.activeTexture(n.TEXTURE0+I);let pe=ut.getPrimaries(ut.workingColorSpace),be=y.colorSpace===Hi?null:ut.getPrimaries(y.colorSpace),_e=y.colorSpace===Hi||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let he=x(y.image,!1,s.maxTextureSize);he=se(y,he);let we=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Te=w(y.internalFormat,we,ze,y.colorSpace,y.isVideoTexture);oe(H,y);let Re,We=y.mipmaps,q=y.isVideoTexture!==!0,Ce=ye.__version===void 0||re===!0,Le=j.dataReady,Ne=C(y,he);if(y.isDepthTexture)Te=v(y.format===po,y.type),Ce&&(q?t.texStorage2D(n.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,we,ze,null));else if(y.isDataTexture)if(We.length>0){q&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,ze,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,we,ze,Re.data);y.generateMipmaps=!1}else q?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,he.width,he.height),Le&&de(y,he,we,ze)):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,we,ze,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){q&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Te,We[0].width,We[0].height,he.depth);for(let Ee=0,ve=We.length;Ee<ve;Ee++)if(Re=We[Ee],y.format!==In)if(we!==null)if(q){if(Le)if(y.layerUpdates.size>0){let He=Cf(Re.width,Re.height,y.format,y.type);for(let tt of y.layerUpdates){let Ct=Re.data.subarray(tt*He/Re.data.BYTES_PER_ELEMENT,(tt+1)*He/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,tt,Re.width,Re.height,1,we,Ct)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,we,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,Te,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,we,ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,Te,Re.width,Re.height,he.depth,0,we,ze,Re.data)}else{q&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Te,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],y.format!==In?we!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,we,ze,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Te,Re.width,Re.height,0,we,ze,Re.data)}else if(y.isDataArrayTexture)if(q){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Te,he.width,he.height,he.depth),Le)if(y.layerUpdates.size>0){let Ee=Cf(he.width,he.height,y.format,y.type);for(let ve of y.layerUpdates){let He=he.data.subarray(ve*Ee/he.data.BYTES_PER_ELEMENT,(ve+1)*Ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,he.width,he.height,1,we,ze,He)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,ze,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,we,ze,he.data);else if(y.isData3DTexture)q?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ne,Te,he.width,he.height,he.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,ze,he.data)):t.texImage3D(n.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,we,ze,he.data);else if(y.isFramebufferTexture){if(Ce)if(q)t.texStorage2D(n.TEXTURE_2D,Ne,Te,he.width,he.height);else{let Ee=he.width,ve=he.height;for(let He=0;He<Ne;He++)t.texImage2D(n.TEXTURE_2D,He,Te,Ee,ve,0,we,ze,null),Ee>>=1,ve>>=1}}else if(We.length>0){if(q&&Ce){let Ee=fe(We[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Te,Ee.width,Ee.height)}for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,we,ze,Re):t.texImage2D(n.TEXTURE_2D,Ee,Te,we,ze,Re);y.generateMipmaps=!1}else if(q){if(Ce){let Ee=fe(he);t.texStorage2D(n.TEXTURE_2D,Ne,Te,Ee.width,Ee.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,ze,he)}else t.texImage2D(n.TEXTURE_2D,0,Te,we,ze,he);m(y)&&g(H),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ne(R,y,I){if(y.image.length!==6)return;let H=Se(R,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let j=i.get(re);if(re.version!==j.__version||H===!0){t.activeTexture(n.TEXTURE0+I);let ye=ut.getPrimaries(ut.workingColorSpace),pe=y.colorSpace===Hi?null:ut.getPrimaries(y.colorSpace),be=y.colorSpace===Hi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,we=[];for(let ve=0;ve<6;ve++)!_e&&!he?we[ve]=x(y.image[ve],!0,s.maxCubemapSize):we[ve]=he?y.image[ve].image:y.image[ve],we[ve]=se(y,we[ve]);let ze=we[0],Te=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),We=w(y.internalFormat,Te,Re,y.colorSpace),q=y.isVideoTexture!==!0,Ce=j.__version===void 0||H===!0,Le=re.dataReady,Ne=C(y,ze);oe(n.TEXTURE_CUBE_MAP,y);let Ee;if(_e){q&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,ze.width,ze.height);for(let ve=0;ve<6;ve++){Ee=we[ve].mipmaps;for(let He=0;He<Ee.length;He++){let tt=Ee[He];y.format!==In?Te!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Te,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Te,Re,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,Te,Re,tt.data)}}}else{if(Ee=y.mipmaps,q&&Ce){Ee.length>0&&Ne++;let ve=fe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(he){q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,we[ve].width,we[ve].height,Te,Re,we[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,we[ve].width,we[ve].height,0,Te,Re,we[ve].data);for(let He=0;He<Ee.length;He++){let Ct=Ee[He].image[ve].image;q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ct.width,Ct.height,Te,Re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,Ct.width,Ct.height,0,Te,Re,Ct.data)}}else{q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te,Re,we[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Te,Re,we[ve]);for(let He=0;He<Ee.length;He++){let tt=Ee[He];q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Te,Re,tt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,Te,Re,tt.image[ve])}}}m(y)&&g(n.TEXTURE_CUBE_MAP),j.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,I,H,re,j){let ye=r.convert(I.format,I.colorSpace),pe=r.convert(I.type),be=w(I.internalFormat,ye,pe,I.colorSpace),_e=i.get(y),he=i.get(I);if(he.__renderTarget=y,!_e.__hasExternalTextures){let we=Math.max(1,y.width>>j),ze=Math.max(1,y.height>>j);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,j,be,we,ze,y.depth,0,ye,pe,null):t.texImage2D(re,j,be,we,ze,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,re,he.__webglTexture,0,X(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,re,he.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let H=y.depthTexture,re=H&&H.isDepthTexture?H.type:null,j=v(y.stencilBuffer,re),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=X(y);z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,j,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,R)}else{let H=y.textures;for(let re=0;re<H.length;re++){let j=H[re],ye=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),be=w(j.internalFormat,ye,pe,j.colorSpace),_e=X(y);I&&z(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,be,y.width,y.height):z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,be,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,be,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let re=H.__webglTexture,j=X(y);if(y.depthTexture.format===Xr)z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===po)z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ge(R){let y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",re)};H.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=H}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let H=R.texture.mipmaps;H&&H.length>0?G(y.__webglFramebuffer[0],R):G(y.__webglFramebuffer,R)}else if(I){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),Pe(y.__webglDepthbuffer[H],R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Pe(y.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(R,y,I){let H=i.get(R);y!==void 0&&xe(H.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ge(R)}function E(R){let y=R.texture,I=i.get(R),H=i.get(y);R.addEventListener("dispose",L);let re=R.textures,j=R.isWebGLCubeRenderTarget===!0,ye=re.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let be=0;be<y.mipmaps.length;be++)I.__webglFramebuffer[pe][be]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,be=re.length;pe<be;pe++){let _e=i.get(re[pe]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&z(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){let be=re[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);let _e=r.convert(be.format,be.colorSpace),he=r.convert(be.type),we=w(be.internalFormat,_e,he,be.colorSpace,R.isXRRenderTarget===!0),ze=X(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,we,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),oe(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(I.__webglFramebuffer[pe][be],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else xe(I.__webglFramebuffer[pe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(y)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,be=re.length;pe<be;pe++){let _e=re[pe],he=i.get(_e),we=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),oe(we,_e),xe(I.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+pe,we,0),m(_e)&&g(we)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,H.__webglTexture),oe(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(I.__webglFramebuffer[be],R,y,n.COLOR_ATTACHMENT0,pe,be);else xe(I.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,pe,0);m(y)&&g(pe),t.unbindTexture()}R.depthBuffer&&ge(R)}function Y(R){let y=R.textures;for(let I=0,H=y.length;I<H;I++){let re=y[I];if(m(re)){let j=b(R),ye=i.get(re).__webglTexture;t.bindTexture(j,ye),g(j),t.unbindTexture()}}}let Z=[],$=[];function D(R){if(R.samples>0){if(z(R)===!1){let y=R.textures,I=R.width,H=R.height,re=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),pe=y.length>1;if(pe)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let he=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,re,n.NEAREST),l===!0&&(Z.length=0,$.length=0,Z.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(j),$.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let he=i.get(y[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function X(R){return Math.min(s.maxSamples,R.samples)}function z(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function se(R,y){let I=R.colorSpace,H=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==ks&&I!==Hi&&(ut.getTransfer(I)===_t?(H!==In||re!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Me,this.setupRenderTarget=E,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=z}function Vw(n,e){function t(i,s=Hi){let r,o=ut.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ff)return n.BYTE;if(i===pf)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===ru)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===xf)return n.ALPHA;if(i===yf)return n.RGB;if(i===In)return n.RGBA;if(i===Xr)return n.DEPTH_COMPONENT;if(i===po)return n.DEPTH_STENCIL;if(i===lu)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===vf)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===hu)return n.RGBA_INTEGER;if(i===Ka||i===Qa||i===el||i===tl)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===el)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===du||i===fu||i===pu||i===mu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gu||i===xu)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vu||i===_u||i===Mu||i===bu||i===Su||i===wu||i===Tu||i===Au||i===Eu||i===Cu||i===Ru||i===Pu||i===Iu||i===Lu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Su)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Au)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ru)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Iu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Du||i===Uu||i===Fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Du)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nu||i===Bu||i===Ou||i===zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`,kf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:kw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gf=class extends Bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",m=new kf,g={},b=t.getContextAttributes(),w=null,v=null,C=[],A=[],L=new Ae,U=null,S=new Ht;S.viewport=new lt;let _=new Ht;_.viewport=new lt;let T=[S,_],F=new Yc,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Kr,C[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Kr,C[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=C[ee];return ne===void 0&&(ne=new Kr,C[ee]=ne),ne.getHandSpace()};function W(ee){let ne=A.indexOf(ee.inputSource);if(ne===-1)return;let xe=C[ne];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let ee=0;ee<C.length;ee++){let ne=A[ee];ne!==null&&(A[ee]=null,C[ee].disconnect(ne))}N=null,k=null,m.reset();for(let ee in g)delete g[ee];e.setRenderTarget(w),h=null,f=null,d=null,s=null,v=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,G=null;b.depth&&(G=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?po:Xr,Pe=b.stencil?fo:ps);let ge={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Rn(f.textureWidth,f.textureHeight,{format:In,type:kn,depthTexture:new Ra(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Rn(h.framebufferWidth,h.framebufferHeight,{format:In,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(ee){for(let ne=0;ne<ee.removed.length;ne++){let xe=ee.removed[ne],Pe=A.indexOf(xe);Pe>=0&&(A[Pe]=null,C[Pe].disconnect(xe))}for(let ne=0;ne<ee.added.length;ne++){let xe=ee.added[ne],Pe=A.indexOf(xe);if(Pe===-1){for(let ge=0;ge<C.length;ge++)if(ge>=A.length){A.push(xe),Pe=ge;break}else if(A[ge]===null){A[ge]=xe,Pe=ge;break}if(Pe===-1)break}let G=C[Pe];G&&G.connect(xe)}}let B=new M,ae=new M;function ce(ee,ne,xe){B.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(xe.matrixWorld);let Pe=B.distanceTo(ae),G=ne.projectionMatrix.elements,ge=xe.projectionMatrix.elements,Me=G[14]/(G[10]-1),E=G[14]/(G[10]+1),Y=(G[9]+1)/G[5],Z=(G[9]-1)/G[5],$=(G[8]-1)/G[0],D=(ge[8]+1)/ge[0],X=Me*$,z=Me*D,te=Pe/(-$+D),se=te*-$;if(ne.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(se),ee.translateZ(te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),G[10]===-1)ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let fe=Me+te,R=E+te,y=X-se,I=z+(Pe-se),H=Y*E/R*fe,re=Z*E/R*fe;ee.projectionMatrix.makePerspective(y,I,H,re,fe,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ie(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ne=ee.near,xe=ee.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),F.near=_.near=S.near=ne,F.far=_.far=S.far=xe,(N!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,k=F.far),F.layers.mask=ee.layers.mask|6,S.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;let Pe=ee.parent,G=F.cameras;ie(F,Pe);for(let ge=0;ge<G.length;ge++)ie(G[ge],Pe);G.length===2?ce(F,S,_):F.projectionMatrix.copy(S.projectionMatrix),oe(ee,F,Pe)};function oe(ee,ne,xe){xe===null?ee.matrix.copy(ne.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ne.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ne.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Yr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ee){return g[ee]};let Se=null;function me(ee,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Pe=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let E=0;E<xe.length;E++){let Y=xe[E],Z=null;if(h!==null)Z=h.getViewport(Y);else{let D=d.getViewSubImage(f,Y);Z=D.viewport,E===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let $=T[E];$===void 0&&($=new Ht,$.layers.enable(E),$.viewport=new lt,T[E]=$),$.matrix.fromArray(Y.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Y.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Z.x,Z.y,Z.width,Z.height),E===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push($)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let E=d.getDepthInformation(xe[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(G&&G.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let E=0;E<xe.length;E++){let Y=xe[E].camera;if(Y){let Z=g[Y];Z||(Z=new Pa,g[Y]=Z);let $=d.getCameraImage(Y);Z.sourceTexture=$}}}}for(let xe=0;xe<C.length;xe++){let Pe=A[xe],G=C[xe];Pe!==null&&G!==void 0&&G.update(Pe,ne,c||o)}Se&&Se(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let de=new S0;de.setAnimationLoop(me),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}},nr=new sn,Hw=new at;function Ww(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,wf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,w,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,nr.copy(v),nr.x*=-1,nr.y*=-1,nr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(nr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let v=w.program;i.uniformBlockBinding(b,v)}function c(b,w){let v=s[b.id];v===void 0&&(p(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));let C=w.program;i.updateUBOMapping(b,C);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function u(b){let w=d();b.__bindingPointIndex=w;let v=n.createBuffer(),C=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=s[b.id],v=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,L=v.length;A<L;A++){let U=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,_=U.length;S<_;S++){let T=U[S];if(h(T,A,S,C)===!0){let F=T.__offset,N=Array.isArray(T.value)?T.value:[T.value],k=0;for(let W=0;W<N.length;W++){let V=N[W],J=x(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+k,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,v,C){let A=b.value,L=w+"_"+v;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{let U=C[L];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[L]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function p(b){let w=b.uniforms,v=0,C=16;for(let L=0,U=w.length;L<U;L++){let S=Array.isArray(w[L])?w[L]:[w[L]];for(let _=0,T=S.length;_<T;_++){let F=S[_],N=Array.isArray(F.value)?F.value:[F.value];for(let k=0,W=N.length;k<W;k++){let V=N[k],J=x(V),B=v%C,ae=B%J.boundary,ce=B+ae;v+=ae,ce!==0&&C-ce<J.storage&&(v+=C-ce),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=J.storage}}}let A=v%C;return A>0&&(v+=C-A),b.__size=v,b.__cache={},this}function x(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var qu=class{constructor(e={}){let{canvas:t=qg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=pt;let A=0,L=0,U=null,S=-1,_=null,T=new lt,F=new lt,N=null,k=new De(0),W=0,V=t.width,J=t.height,B=1,ae=null,ce=null,ie=new lt(0,0,V,J),oe=new lt(0,0,V,J),Se=!1,me=new no,de=!1,ee=!1,ne=new at,xe=new M,Pe=new lt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Me(){return U===null?B:1}let E=i;function Y(P,K){return t.getContext(P,K)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),E===null){let K="webgl2";if(E=Y(K,P),E===null)throw Y(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Z,$,D,X,z,te,se,fe,R,y,I,H,re,j,ye,pe,be,_e,he,we,ze,Te,Re,We;function q(){Z=new cS(E),Z.init(),Te=new Vw(E,Z),$=new nS(E,Z,e,Te),D=new Ow(E,Z),$.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),X=new dS(E),z=new Tw,te=new zw(E,Z,D,z,$,Te,X),se=new sS(v),fe=new lS(v),R=new yM(E),Re=new eS(E,R),y=new uS(E,R,X,Re),I=new pS(E,y,R,X),he=new fS(E,$,te),pe=new iS(z),H=new ww(v,se,fe,Z,$,Re,pe),re=new Ww(v,z),j=new Ew,ye=new Dw(Z),_e=new Q1(v,se,fe,D,I,h,l),be=new Nw(v,I,$),We=new qw(E,X,$,D),we=new tS(E,Z,X),ze=new hS(E,Z,X),X.programs=H.programs,v.capabilities=$,v.extensions=Z,v.properties=z,v.renderLists=j,v.shadowMap=be,v.state=D,v.info=X}q();let Ce=new Gf(v,E);this.xr=Ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let P=Z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(V,J,!1))},this.getSize=function(P){return P.set(V,J)},this.setSize=function(P,K,le=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,J=K,t.width=Math.floor(P*B),t.height=Math.floor(K*B),le===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(V*B,J*B).floor()},this.setDrawingBufferSize=function(P,K,le){V=P,J=K,B=le,t.width=Math.floor(P*le),t.height=Math.floor(K*le),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ie)},this.setViewport=function(P,K,le,ue){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,K,le,ue),D.viewport(T.copy(ie).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(oe)},this.setScissor=function(P,K,le,ue){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,K,le,ue),D.scissor(F.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){D.setScissorTest(Se=P)},this.setOpaqueSort=function(P){ae=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,le=!0){let ue=0;if(P){let Q=!1;if(U!==null){let Ie=U.texture.format;Q=Ie===hu||Ie===uu||Ie===cu}if(Q){let Ie=U.texture.type,Fe=Ie===kn||Ie===ps||Ie===ho||Ie===fo||Ie===ou||Ie===au,Ge=_e.getClearColor(),Ve=_e.getClearAlpha(),je=Ge.r,Je=Ge.g,Xe=Ge.b;Fe?(p[0]=je,p[1]=Je,p[2]=Xe,p[3]=Ve,E.clearBufferuiv(E.COLOR,0,p)):(x[0]=je,x[1]=Je,x[2]=Xe,x[3]=Ve,E.clearBufferiv(E.COLOR,0,x))}else ue|=E.COLOR_BUFFER_BIT}K&&(ue|=E.DEPTH_BUFFER_BIT),le&&(ue|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),j.dispose(),ye.dispose(),z.dispose(),se.dispose(),fe.dispose(),I.dispose(),Re.dispose(),We.dispose(),H.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",pi),Ce.removeEventListener("sessionend",pm),Ls.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=X.autoReset,K=be.enabled,le=be.autoUpdate,ue=be.needsUpdate,Q=be.type;q(),X.autoReset=P,be.enabled=K,be.autoUpdate=le,be.needsUpdate=ue,be.type=Q}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){let K=P.target;K.removeEventListener("dispose",ve),He(K)}function He(P){tt(P),z.remove(P)}function tt(P){let K=z.get(P).programs;K!==void 0&&(K.forEach(function(le){H.releaseProgram(le)}),P.isShaderMaterial&&H.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,le,ue,Q,Ie){K===null&&(K=G);let Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=zv(P,K,le,ue,Q);D.setMaterial(ue,Fe);let Ve=le.index,je=1;if(ue.wireframe===!0){if(Ve=y.getWireframeAttribute(le),Ve===void 0)return;je=2}let Je=le.drawRange,Xe=le.attributes.position,ot=Je.start*je,wt=(Je.start+Je.count)*je;Ie!==null&&(ot=Math.max(ot,Ie.start*je),wt=Math.min(wt,(Ie.start+Ie.count)*je)),Ve!==null?(ot=Math.max(ot,0),wt=Math.min(wt,Ve.count)):Xe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,Xe.count));let Gt=wt-ot;if(Gt<0||Gt===1/0)return;Re.setup(Q,ue,Ge,le,Ve);let Pt,Et=we;if(Ve!==null&&(Pt=R.get(Ve),Et=ze,Et.setIndex(Pt)),Q.isMesh)ue.wireframe===!0?(D.setLineWidth(ue.wireframeLinewidth*Me()),Et.setMode(E.LINES)):Et.setMode(E.TRIANGLES);else if(Q.isLine){let Ze=ue.linewidth;Ze===void 0&&(Ze=1),D.setLineWidth(Ze*Me()),Q.isLineSegments?Et.setMode(E.LINES):Q.isLineLoop?Et.setMode(E.LINE_LOOP):Et.setMode(E.LINE_STRIP)}else Q.isPoints?Et.setMode(E.POINTS):Q.isSprite&&Et.setMode(E.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Et.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ze=Q._multiDrawStarts,Nt=Q._multiDrawCounts,ht=Q._multiDrawCount,Fn=Ve?R.get(Ve).bytesPerElement:1,wr=z.get(ue).currentProgram.getUniforms();for(let Nn=0;Nn<ht;Nn++)wr.setValue(E,"_gl_DrawID",Nn),Et.render(Ze[Nn]/Fn,Nt[Nn])}else if(Q.isInstancedMesh)Et.renderInstances(ot,Gt,Q.count);else if(le.isInstancedBufferGeometry){let Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Nt=Math.min(le.instanceCount,Ze);Et.renderInstances(ot,Gt,Nt)}else Et.render(ot,Gt)};function Ct(P,K,le){P.transparent===!0&&P.side===qt&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,Ol(P,K,le),P.side=ri,P.needsUpdate=!0,Ol(P,K,le),P.side=qt):Ol(P,K,le)}this.compile=function(P,K,le=null){le===null&&(le=P),g=ye.get(le),g.init(K),w.push(g),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),P!==le&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();let ue=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let Ge=Ie[Fe];Ct(Ge,le,Q),ue.add(Ge)}else Ct(Ie,le,Q),ue.add(Ie)}),g=w.pop(),ue},this.compileAsync=function(P,K,le=null){let ue=this.compile(P,K,le);return new Promise(Q=>{function Ie(){if(ue.forEach(function(Fe){z.get(Fe).currentProgram.isReady()&&ue.delete(Fe)}),ue.size===0){Q(P);return}setTimeout(Ie,10)}Z.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let gt=null;function Pi(P){gt&&gt(P)}function pi(){Ls.stop()}function pm(){Ls.start()}let Ls=new S0;Ls.setAnimationLoop(Pi),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(P){gt=P,Ce.setAnimationLoop(P),P===null?Ls.stop():Ls.start()},Ce.addEventListener("sessionstart",pi),Ce.addEventListener("sessionend",pm),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,K,U),g=ye.get(P,w.length),g.init(K),w.push(g),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),me.setFromProjectionMatrix(ne,si,K.reversedDepth),ee=this.localClippingEnabled,de=pe.init(this.clippingPlanes,ee),m=j.get(P,b.length),m.init(),b.push(m),Ce.enabled===!0&&Ce.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&yd(Ie,K,-1/0,v.sortObjects)}yd(P,K,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,ce),ge=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ge&&_e.addToRenderList(m,P),this.info.render.frame++,de===!0&&pe.beginShadows();let le=g.state.shadowsArray;be.render(le,P,K),de===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,Q=m.transmissive;if(g.setupLights(),K.isArrayCamera){let Ie=K.cameras;if(Q.length>0)for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++){let Ve=Ie[Fe];gm(ue,Q,P,Ve)}ge&&_e.render(P);for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++){let Ve=Ie[Fe];mm(m,P,Ve,Ve.viewport)}}else Q.length>0&&gm(ue,Q,P,K),ge&&_e.render(P),mm(m,P,K);U!==null&&L===0&&(te.updateMultisampleRenderTarget(U),te.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(v,P,K),Re.resetDefaultState(),S=-1,_=null,w.pop(),w.length>0?(g=w[w.length-1],de===!0&&pe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function yd(P,K,le,ue){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||me.intersectsSprite(P)){ue&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ne);let Fe=I.update(P),Ge=P.material;Ge.visible&&m.push(P,Fe,Ge,le,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||me.intersectsObject(P))){let Fe=I.update(P),Ge=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(ne)),Array.isArray(Ge)){let Ve=Fe.groups;for(let je=0,Je=Ve.length;je<Je;je++){let Xe=Ve[je],ot=Ge[Xe.materialIndex];ot&&ot.visible&&m.push(P,Fe,ot,le,Pe.z,Xe)}}else Ge.visible&&m.push(P,Fe,Ge,le,Pe.z,null)}}let Ie=P.children;for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++)yd(Ie[Fe],K,le,ue)}function mm(P,K,le,ue){let Q=P.opaque,Ie=P.transmissive,Fe=P.transparent;g.setupLightsView(le),de===!0&&pe.setGlobalState(v.clippingPlanes,le),ue&&D.viewport(T.copy(ue)),Q.length>0&&Bl(Q,K,le),Ie.length>0&&Bl(Ie,K,le),Fe.length>0&&Bl(Fe,K,le),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function gm(P,K,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new Rn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Mi:kn,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Ie=g.state.transmissionRenderTarget[ue.id],Fe=ue.viewport||T;Ie.setSize(Fe.z*v.transmissionResolutionScale,Fe.w*v.transmissionResolutionScale);let Ge=v.getRenderTarget(),Ve=v.getActiveCubeFace(),je=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),ge&&_e.render(le);let Je=v.toneMapping;v.toneMapping=Gi;let Xe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),de===!0&&pe.setGlobalState(v.clippingPlanes,ue),Bl(P,le,ue),te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let wt=0,Gt=K.length;wt<Gt;wt++){let Pt=K[wt],Et=Pt.object,Ze=Pt.geometry,Nt=Pt.material,ht=Pt.group;if(Nt.side===qt&&Et.layers.test(ue.layers)){let Fn=Nt.side;Nt.side=dn,Nt.needsUpdate=!0,xm(Et,le,ue,Ze,Nt,ht),Nt.side=Fn,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(te.updateMultisampleRenderTarget(Ie),te.updateRenderTargetMipmap(Ie))}v.setRenderTarget(Ge,Ve,je),v.setClearColor(k,W),Xe!==void 0&&(ue.viewport=Xe),v.toneMapping=Je}function Bl(P,K,le){let ue=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Ie=P.length;Q<Ie;Q++){let Fe=P[Q],Ge=Fe.object,Ve=Fe.geometry,je=Fe.group,Je=Fe.material;Je.allowOverride===!0&&ue!==null&&(Je=ue),Ge.layers.test(le.layers)&&xm(Ge,K,le,Ve,Je,je)}}function xm(P,K,le,ue,Q,Ie){P.onBeforeRender(v,K,le,ue,Q,Ie),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(v,K,le,ue,P,Ie),Q.transparent===!0&&Q.side===qt&&Q.forceSinglePass===!1?(Q.side=dn,Q.needsUpdate=!0,v.renderBufferDirect(le,K,ue,Q,P,Ie),Q.side=ri,Q.needsUpdate=!0,v.renderBufferDirect(le,K,ue,Q,P,Ie),Q.side=qt):v.renderBufferDirect(le,K,ue,Q,P,Ie),P.onAfterRender(v,K,le,ue,Q,Ie)}function Ol(P,K,le){K.isScene!==!0&&(K=G);let ue=z.get(P),Q=g.state.lights,Ie=g.state.shadowsArray,Fe=Q.state.version,Ge=H.getParameters(P,Q.state,Ie,K,le),Ve=H.getProgramCacheKey(Ge),je=ue.programs;ue.environment=P.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(P.isMeshStandardMaterial?fe:se).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",ve),je=new Map,ue.programs=je);let Je=je.get(Ve);if(Je!==void 0){if(ue.currentProgram===Je&&ue.lightsStateVersion===Fe)return vm(P,Ge),Je}else Ge.uniforms=H.getUniforms(P),P.onBeforeCompile(Ge,v),Je=H.acquireProgram(Ge,Ve),je.set(Ve,Je),ue.uniforms=Ge.uniforms;let Xe=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),vm(P,Ge),ue.needsLights=kv(P),ue.lightsStateVersion=Fe,ue.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=Je,ue.uniformsList=null,Je}function ym(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=xo.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function vm(P,K){let le=z.get(P);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function zv(P,K,le,ue,Q){K.isScene!==!0&&(K=G),te.resetTextureUnits();let Ie=K.fog,Fe=ue.isMeshStandardMaterial?K.environment:null,Ge=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ks,Ve=(ue.isMeshStandardMaterial?fe:se).get(ue.envMap||Fe),je=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Je=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Xe=!!le.morphAttributes.position,ot=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color,Gt=Gi;ue.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Gt=v.toneMapping);let Pt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,Ze=z.get(ue),Nt=g.state.lights;if(de===!0&&(ee===!0||P!==_)){let Mn=P===_&&ue.id===S;pe.setState(ue,P,Mn)}let ht=!1;ue.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nt.state.version||Ze.outputColorSpace!==Ge||Q.isBatchedMesh&&Ze.batching===!1||!Q.isBatchedMesh&&Ze.batching===!0||Q.isBatchedMesh&&Ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ze.instancing===!1||!Q.isInstancedMesh&&Ze.instancing===!0||Q.isSkinnedMesh&&Ze.skinning===!1||!Q.isSkinnedMesh&&Ze.skinning===!0||Q.isInstancedMesh&&Ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ze.instancingMorph===!1&&Q.morphTexture!==null||Ze.envMap!==Ve||ue.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==Je||Ze.morphTargets!==Xe||Ze.morphNormals!==ot||Ze.morphColors!==wt||Ze.toneMapping!==Gt||Ze.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,Ze.__version=ue.version);let Fn=Ze.currentProgram;ht===!0&&(Fn=Ol(ue,K,Q));let wr=!1,Nn=!1,Ko=!1,Bt=Fn.getUniforms(),Hn=Ze.uniforms;if(D.useProgram(Fn.program)&&(wr=!0,Nn=!0,Ko=!0),ue.id!==S&&(S=ue.id,Nn=!0),wr||_!==P){D.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Bt.setValue(E,"projectionMatrix",P.projectionMatrix),Bt.setValue(E,"viewMatrix",P.matrixWorldInverse);let An=Bt.map.cameraPosition;An!==void 0&&An.setValue(E,xe.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&Bt.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Bt.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Nn=!0,Ko=!0)}if(Q.isSkinnedMesh){Bt.setOptional(E,Q,"bindMatrix"),Bt.setOptional(E,Q,"bindMatrixInverse");let Mn=Q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Bt.setValue(E,"boneTexture",Mn.boneTexture,te))}Q.isBatchedMesh&&(Bt.setOptional(E,Q,"batchingTexture"),Bt.setValue(E,"batchingTexture",Q._matricesTexture,te),Bt.setOptional(E,Q,"batchingIdTexture"),Bt.setValue(E,"batchingIdTexture",Q._indirectTexture,te),Bt.setOptional(E,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(E,"batchingColorTexture",Q._colorsTexture,te));let Wn=le.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&he.update(Q,le,Fn),(Nn||Ze.receiveShadow!==Q.receiveShadow)&&(Ze.receiveShadow=Q.receiveShadow,Bt.setValue(E,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Hn.envMap.value=Ve,Hn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),Nn&&(Bt.setValue(E,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Vv(Hn,Ko),Ie&&ue.fog===!0&&re.refreshFogUniforms(Hn,Ie),re.refreshMaterialUniforms(Hn,ue,B,J,g.state.transmissionRenderTarget[P.id]),xo.upload(E,ym(Ze),Hn,te)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(xo.upload(E,ym(Ze),Hn,te),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Bt.setValue(E,"center",Q.center),Bt.setValue(E,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(E,"normalMatrix",Q.normalMatrix),Bt.setValue(E,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let Mn=ue.uniformsGroups;for(let An=0,vd=Mn.length;An<vd;An++){let Ds=Mn[An];We.update(Ds,Fn),We.bind(Ds,Fn)}}return Fn}function Vv(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function kv(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,le){let ue=z.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),z.get(P.texture).__webglTexture=K,z.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let le=z.get(P);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};let Gv=E.createFramebuffer();this.setRenderTarget=function(P,K=0,le=0){U=P,A=K,L=le;let ue=!0,Q=null,Ie=!1,Fe=!1;if(P){let Ve=z.get(P);if(Ve.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(E.FRAMEBUFFER,null),ue=!1;else if(Ve.__webglFramebuffer===void 0)te.setupRenderTarget(P);else if(Ve.__hasExternalTextures)te.rebindTextures(P,z.get(P.texture).__webglTexture,z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&z.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(P)}}let je=P.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);let Je=z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?Q=Je[K][le]:Q=Je[K],Ie=!0):P.samples>0&&te.useMultisampledRTT(P)===!1?Q=z.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[le]:Q=Je,T.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else T.copy(ie).multiplyScalar(B).floor(),F.copy(oe).multiplyScalar(B).floor(),N=Se;if(le!==0&&(Q=Gv),D.bindFramebuffer(E.FRAMEBUFFER,Q)&&ue&&D.drawBuffers(P,Q),D.viewport(T),D.scissor(F),D.setScissorTest(N),Ie){let Ve=z.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,le)}else if(Fe){let Ve=K;for(let je=0;je<P.textures.length;je++){let Je=z.get(P.textures[je]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+je,Je.__webglTexture,le,Ve)}}else if(P!==null&&le!==0){let Ve=z.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ve.__webglTexture,le)}S=-1},this.readRenderTargetPixels=function(P,K,le,ue,Q,Ie,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){D.bindFramebuffer(E.FRAMEBUFFER,Ve);try{let je=P.textures[Ge],Je=je.format,Xe=je.type;if(!$.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ue&&le>=0&&le<=P.height-Q&&(P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ge),E.readPixels(K,le,ue,Q,Te.convert(Je),Te.convert(Xe),Ie))}finally{let je=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,K,le,ue,Q,Ie,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(K>=0&&K<=P.width-ue&&le>=0&&le<=P.height-Q){D.bindFramebuffer(E.FRAMEBUFFER,Ve);let je=P.textures[Ge],Je=je.format,Xe=je.type;if(!$.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.bufferData(E.PIXEL_PACK_BUFFER,Ie.byteLength,E.STREAM_READ),P.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ge),E.readPixels(K,le,ue,Q,Te.convert(Je),Te.convert(Xe),0);let wt=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,wt);let Gt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Xg(E,Gt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ot),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Ie),E.deleteBuffer(ot),E.deleteSync(Gt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,le=0){let ue=Math.pow(2,-le),Q=Math.floor(P.image.width*ue),Ie=Math.floor(P.image.height*ue),Fe=K!==null?K.x:0,Ge=K!==null?K.y:0;te.setTexture2D(P,0),E.copyTexSubImage2D(E.TEXTURE_2D,le,0,0,Fe,Ge,Q,Ie),D.unbindTexture()};let Hv=E.createFramebuffer(),Wv=E.createFramebuffer();this.copyTextureToTexture=function(P,K,le=null,ue=null,Q=0,Ie=null){Ie===null&&(Q!==0?(jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=Q,Q=0):Ie=0);let Fe,Ge,Ve,je,Je,Xe,ot,wt,Gt,Pt=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(le!==null)Fe=le.max.x-le.min.x,Ge=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,je=le.min.x,Je=le.min.y,Xe=le.isBox3?le.min.z:0;else{let Wn=Math.pow(2,-Q);Fe=Math.floor(Pt.width*Wn),Ge=Math.floor(Pt.height*Wn),P.isDataArrayTexture?Ve=Pt.depth:P.isData3DTexture?Ve=Math.floor(Pt.depth*Wn):Ve=1,je=0,Je=0,Xe=0}ue!==null?(ot=ue.x,wt=ue.y,Gt=ue.z):(ot=0,wt=0,Gt=0);let Et=Te.convert(K.format),Ze=Te.convert(K.type),Nt;K.isData3DTexture?(te.setTexture3D(K,0),Nt=E.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(te.setTexture2DArray(K,0),Nt=E.TEXTURE_2D_ARRAY):(te.setTexture2D(K,0),Nt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment);let ht=E.getParameter(E.UNPACK_ROW_LENGTH),Fn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),wr=E.getParameter(E.UNPACK_SKIP_PIXELS),Nn=E.getParameter(E.UNPACK_SKIP_ROWS),Ko=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Pt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Pt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,je),E.pixelStorei(E.UNPACK_SKIP_ROWS,Je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xe);let Bt=P.isDataArrayTexture||P.isData3DTexture,Hn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let Wn=z.get(P),Mn=z.get(K),An=z.get(Wn.__renderTarget),vd=z.get(Mn.__renderTarget);D.bindFramebuffer(E.READ_FRAMEBUFFER,An.__webglFramebuffer),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,vd.__webglFramebuffer);for(let Ds=0;Ds<Ve;Ds++)Bt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(P).__webglTexture,Q,Xe+Ds),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(K).__webglTexture,Ie,Gt+Ds)),E.blitFramebuffer(je,Je,Fe,Ge,ot,wt,Fe,Ge,E.DEPTH_BUFFER_BIT,E.NEAREST);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||z.has(P)){let Wn=z.get(P),Mn=z.get(K);D.bindFramebuffer(E.READ_FRAMEBUFFER,Hv),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,Wv);for(let An=0;An<Ve;An++)Bt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Wn.__webglTexture,Q,Xe+An):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Wn.__webglTexture,Q),Hn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Mn.__webglTexture,Ie,Gt+An):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Mn.__webglTexture,Ie),Q!==0?E.blitFramebuffer(je,Je,Fe,Ge,ot,wt,Fe,Ge,E.COLOR_BUFFER_BIT,E.NEAREST):Hn?E.copyTexSubImage3D(Nt,Ie,ot,wt,Gt+An,je,Je,Fe,Ge):E.copyTexSubImage2D(Nt,Ie,ot,wt,je,Je,Fe,Ge);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Hn?P.isDataTexture||P.isData3DTexture?E.texSubImage3D(Nt,Ie,ot,wt,Gt,Fe,Ge,Ve,Et,Ze,Pt.data):K.isCompressedArrayTexture?E.compressedTexSubImage3D(Nt,Ie,ot,wt,Gt,Fe,Ge,Ve,Et,Pt.data):E.texSubImage3D(Nt,Ie,ot,wt,Gt,Fe,Ge,Ve,Et,Ze,Pt):P.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Fe,Ge,Et,Ze,Pt.data):P.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Pt.width,Pt.height,Et,Pt.data):E.texSubImage2D(E.TEXTURE_2D,Ie,ot,wt,Fe,Ge,Et,Ze,Pt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ht),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Fn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,wr),E.pixelStorei(E.UNPACK_SKIP_ROWS,Nn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ko),Ie===0&&K.generateMipmaps&&E.generateMipmap(Nt),D.unbindTexture()},this.initRenderTarget=function(P){z.get(P).__webglFramebuffer===void 0&&te.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?te.setTextureCube(P,0):P.isData3DTexture?te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?te.setTexture2DArray(P,0):te.setTexture2D(P,0),D.unbindTexture()},this.resetState=function(){A=0,L=0,U=null,D.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var il=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ht;let i=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new En,d=new M,f=new M,h=new M,p=new at,x=new M(0,0,-1),m=new lt,g=new M,b=new M,w=new lt,v=new at,C=this.camera,A=new Rn(r,o,{samples:c,type:Mi}),L=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:ku.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=A.texture,L.uniforms.color.value=s,L.uniforms.textureMatrix.value=v,this.material=L,this.onBeforeRender=function(U,S,_){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(f,h),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),b.subVectors(f,x),b.reflect(d).negate(),b.add(f),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(d),C.lookAt(b),C.far=_.far,C.updateMatrixWorld(),C.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=C.projectionMatrix;w.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],w.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],w.z=-1,w.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(w)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,i.visible=!1;let N=U.getRenderTarget(),k=U.xr.enabled,W=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(A),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,C),U.xr.enabled=k,U.shadowMap.autoUpdate=W,U.setRenderTarget(N);let V=_.viewport;V!==void 0&&U.state.viewport(V),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}};il.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Yu=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function R0(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function yn(n,e,t,i=0,s=0){return R0(n,new Dt(1,i),e,t,s)}function Wf(n,e,t,i=0){return R0(n,new oi(1),e,t,i)}function Xw(n,e){let t=new $e;return t.setAttribute("position",new ke(e.flat(),3)),{tone:n,geometry:t}}function C0(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return Xw(n,i)}function Yw(){let n=[yn("fur",[0,.012,.011],[.154,.161,.132],1),yn("fur",[0,-.065,.008],[.128,.079,.108]),yn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),yn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),C0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),yn("skin",[0,-.061,-.133],[.102,.066,.065],1),yn("skinShade",[0,-.097,-.14],[.076,.031,.047]),yn("skin",[0,.015,-.15],[.041,.056,.038]),yn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(yn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),yn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),Wf("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),yn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),yn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),yn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),yn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),yn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),yn("ink",[e*.047,.031,-.183],[.011,.012,.006]),Wf("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),Wf("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(C0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function Zw(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new $e;return s.setAttribute("position",new mt(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var jw=Zw(Yw());function Zu(n=0){let e=new en({flatShading:!0}),t=new en({flatShading:!0}),i=new en({vertexColors:!0,flatShading:!0}),s=[],r={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g:m,b:g}=r[f];for(let b=h;b<p;b++)u.setXYZ(b,x,m,g)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Yu.length?u:0;if(d===o)return;o=d;let f=Yu[o];for(let[h,p]of Object.entries(f))(r[h]??=new De).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),f=new mt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return s.push(h),a(h),new Be(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new xt;return u.add(c(jw)),u}}}var rr=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],Jw=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],$w=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],P0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],ju=rr.length-1,I0=Math.min(...rr.map(n=>n[1])),L0=Math.max(...rr.map(n=>n[1])),Wi=new M(0,0,(I0+L0)/2),Ju=new M(.047,.027,(L0-I0)/2),Kw=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],Qw=[-.57,.57,1,.61,-.61,-1],eT=[1,1,-.04,-.91,-.91,-.04];function $u(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(S=0,_=0,T=0){let F=r.length/3;return r.push(S*s,_,T),F}function c(S,_,T){i?o.push(S,T,_):o.push(S,_,T)}function u(S,_,T,F){c(S,_,T),c(S,T,F)}function d(S,_){for(let T=0;T<S.length;T++){let F=(T+1)%S.length;u(S[F],S[T],_[T],_[F])}}function f(S,_){for(let T=0;T<S.length;T++)c(_,S[(T+1)%S.length],S[T])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=rr.map(([S,_,T,F],N)=>{let k=N===0||N===ju,W=S*.67,V=-.024+(_+.024)*.69;return{top:l(S,T,_),middle:l(S*1.08,(T+F)/2,k?_:-.025+(_+.025)*1.04),bottom:l(S,F,_),innerTop:l(W,Jw[N],V),innerBottom:l(W,$w[N],V)}});function m(S){let _=x[S],T=x[(S+1)%x.length];return[_.top,T.top,T.middle,T.bottom,_.bottom,_.middle]}let g=new Set(P0.map(({edge:S})=>S));g.add(ju);for(let S=0;S<x.length;S++){let _=x[S],T=x[(S+1)%x.length];c(h,_.innerTop,T.innerTop),c(p,T.innerBottom,_.innerBottom),u(_.innerTop,_.top,T.top,T.innerTop),u(T.innerBottom,T.bottom,_.bottom,_.innerBottom),g.has(S)||(u(T.top,_.top,_.middle,T.middle),u(T.middle,_.middle,_.bottom,T.bottom))}let b=m(ju);t||f(b,l(0,0,rr[ju][1]));let w=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:S,length:_,splay:T}of P0){let[F,N,k,W]=rr[S],[V,J,B,ae]=rr[S+1],ce=V-F,ie=J-N,oe=-ie+ce*T,Se=ce+ie*T,me=Math.hypot(oe,Se),de=Math.hypot(ce,ie)/2,ee=(k+B-W-ae)/4,ne=[],xe=m(S);for(let[G,ge,Me]of Kw){let E=[l(),l(),l(),l(),l(),l()];d(xe,E),ne.push({ring:E,distance:G*_,width:ge*de,height:Me*ee}),xe=E}let Pe=l();f(xe,Pe),a.push({x:(F+V)/2,y:(k+B+W+ae)/4,z:(N+J)/2,forwardX:oe/me,forwardZ:Se/me,rows:ne,tip:Pe,length:_,pressure:-1})}let v=new $e,C=new ke(r,3).setUsage(Sn);v.setAttribute("position",C),v.setIndex(o),v.boundingSphere=new Xn(new M(0,-.018,-.052),.12),v.boundingBox=new nn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let A=!0;function L(S,_=!0){let T=!1;for(let F=0;F<a.length;F++){let N=a[F],k=S?.[F],W=Number.isFinite(k)?Oe.clamp(k,0,1):0;if(W===N.pressure)continue;N.pressure=W,T=!0;let{forwardX:V,forwardZ:J,length:B,rows:ae,tip:ce}=N,ie=N.x,oe=N.z,Se=N.y,me=0,de=0;for(let{ring:xe,distance:Pe,width:G,height:ge}of ae){let Me=Pe/B,E=Oe.smoothstep(Me,0,.57),Y=Oe.smoothstep(Me,.38,1),Z=(.17+W*.83)*E+(.14+W*.76)*Y,$=(Z+me)/2,D=Pe-de,X=Math.cos($)*D;ie+=V*X,Se-=Math.sin($)*D,oe+=J*X;for(let z=0;z<xe.length;z++){let te=Qw[z]*G,se=eT[z]*ge,fe=se*Math.sin(Z);C.setXYZ(xe[z],s*(ie+J*te+V*fe),Se+se*Math.cos(Z),oe-V*te+J*fe)}me=Z,de=Pe}let ee=B-de,ne=ee*Math.cos(me);C.setXYZ(ce,s*(ie+V*ne),Se-ee*Math.sin(me),oe+J*ne)}T&&(C.needsUpdate=!0,A=!0),_&&A&&(v.computeVertexNormals(),A=!1)}L(),v.getAttribute("normal").setUsage(Sn);let U=new Be(v,e);return U.castShadow=!0,{mesh:U,pose:L,wristIndices:w}}var ms=12,qf=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],tT=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],D0=qf.flatMap(([n,e,t])=>Array.from({length:ms},(i,s)=>{let r=(s-.5)*Math.PI*2/ms;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function Ku(n,e){let t=D0.length,i=[],s=(J,B,ae,ce,ie)=>J.push(B,ae,ce,B,ce,ie);function r(J,B,ae=!1){for(let ce=1;ce<B.length-1;ce++)ae?J.push(B[0],B[ce+1],B[ce]):J.push(B[0],B[ce],B[ce+1])}let o=(J,B)=>J*ms+(B+ms)%ms;for(let J=0;J<qf.length-1;J++)for(let B=0;B<ms;B++)(J===2||J===3)&&(B===0||B===6)||s(i,o(J,B),o(J+1,B),o(J+1,B+1),o(J,B+1));r(i,Array.from({length:ms},(J,B)=>o(0,B))),r(i,Array.from({length:ms},(J,B)=>o(qf.length-1,B)),!0);let a=t,l=e.map(({geometry:J,wristIndices:B},ae)=>{let ce=ae===0?6:0,ie=[o(4,ce),o(4,ce+1),o(3,ce+1),o(2,ce+1),o(2,ce),o(3,ce)],oe=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Se=oe.at(-1),me=new Array(J.attributes.position.count);B.forEach((ne,xe)=>{me[ne]=Se[xe]});for(let ne=0;ne<me.length;ne++)me[ne]??=a++;let de=[];for(let ne=0;ne<J.index.count;ne++)de.push(me[J.index.getX(ne)]);for(let ne=0;ne<oe.length-1;ne++)for(let xe=0;xe<6;xe++){let Pe=(xe+1)%6;s(i,oe[ne][xe],oe[ne][Pe],oe[ne+1][Pe],oe[ne+1][xe])}let ee=[];return r(ee,Se),{socket:ie,rings:oe,wrist:Se,wristIndices:B,remap:me,skin:de,cap:ee,sign:ae===0?-1:1}}),c=new $e,u=new ke(a*3,3).setUsage(Sn);c.setAttribute("position",u);let d=new Be(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(J,B)=>new Hs([...i,...l.flatMap((ae,ce)=>B&1<<ce?ae.skin:ae.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,m=new M,g=new M,b=new M,w=new M,v=new M,C=new M,A=new qe,L=new qe,U=new qe,S=new M(0,0,-1),_=new qe().setFromEuler(new sn(-1.42,0,0)),T=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,k=0,W=!0;function V(J,B,ae,ce,ie){let oe=!!(J[0]||J[1]);if(!oe&&!W&&N===ae&&k===ce)return;N=ae,k=ce,W=oe;for(let me=0;me<t;me++){let[de,ee,ne]=D0[me];u.setXYZ(me,de*ae,ee*ce,ne*ae)}let Se=0;for(let me=0;me<l.length;me++){let de=l[me],ee=J[me],ne=e[me].geometry.attributes.position,xe=!!ee,Pe=de.wristIndices;xe&&ie&&(Se|=1<<me),p.set(0,0,0);for(let G of de.socket)p.add(h.fromBufferAttribute(u,G));p.multiplyScalar(1/6),m.set(0,0,0);for(let G of Pe)m.add(h.fromBufferAttribute(ne,G));m.multiplyScalar(1/6).applyQuaternion(ee?.quaternion??_),xe?m.add(ee.position):m.add(h.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),b.copy(g).normalize(),w.set(de.sign*.38,-1,.27).addScaledVector(b,-b.dot(h.set(de.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(g,.49),xe&&x.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-g.lengthSq()*.25))*.72),A.setFromUnitVectors(S,b.subVectors(x,p).normalize()),L.copy(ee?.quaternion??_);for(let G=0;G<4;G++){let ge=G===3;C.lerpVectors(ge?x:p,ge?m:x,T[G]),U.copy(A).slerp(L,ge?.79:G*.19);for(let Me=0;Me<6;Me++){let E=tT[Me],Y=F[G];v.set(E[0]*Y,E[1]*Y*.84,0).applyQuaternion(U).add(C),u.setXYZ(de.rings[G+1][Me],v.x,v.y,v.z)}}for(let G=0;G<de.remap.length;G++)v.fromBufferAttribute(ne,G).applyQuaternion(L),xe?v.add(ee.position):v.add(h.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(de.remap[G],v.x,v.y,v.z)}c.index!==f[Se]&&c.setIndex(f[Se]),u.needsUpdate=!0,c.computeVertexNormals()}return V([null,null],.42,1,1,!1),{mesh:d,pose:V}}function _o(n,e){let t=new Oi;return n.forEach(([i,s],r)=>r===0?t.moveTo(-i,s):t.lineTo(-i,s)),t.closePath(),new Zs(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var U0=.1,nT=45,F0=55,sl=128,Xf=96,iT=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],sT=new M(0,0,-1);function Yf(){let n=new xt,e=new Mt({color:"#596974",roughness:.38,metalness:.6}),t=new Mt({color:"#29323e",roughness:.68}),i=new yt({color:"#ffd563",toneMapped:!1});function s(o,a,l,c,u,d=0){let f=new Be(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let r=new Mt({color:"#7f4231",roughness:.46,metalness:.34});return s(_o([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),s(_o([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),r,.035,0,0),s(new Wt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),s(new et(.054,.014,.073),r,.035,.045,-.099),s(new et(.018,.008,.023),i,.035,.063,-.131),n}function N0(n,{impact:e,onShot:t}){let i=Yf(),s=new Be(new Dt(.045,0),new yt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));s.position.set(.035,.028,-.208),i.add(s),n.add(i),i.visible=!1;let r=new $e,o=new ke(sl*18,3).setUsage(Sn),a=new ke(sl*18,3);for(let N=0;N<sl;N++)for(let k=0;k<6;k++){let W=iT[Math.floor(k/2)];a.setXYZ(N*6+k,W.r,W.g,W.b)}r.setAttribute("position",o),r.setAttribute("color",a),r.setDrawRange(0,0);let l=new qs(r,new vi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new ke(Xf*3,3).setUsage(Sn),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Ca(u,new io({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:jn}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:sl},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Xf},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,m=new M,g=0,b=0,w=0,v=0,C=0,A=!1;function L(N,k,W,V){for(let J=0;J<W;J++){let B=h[b++%Xf];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(V).addScaledVector(k,.55),B.life=.12+Math.random()*.21}}function U(N,k,W){let V=f[g++%sl];return V.p.copy(N),V.d.copy(sT).applyQuaternion(k),V.distance=0,V.active=!0,V.authoritative=W,V}function S(N){let k=U(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),L(p,k.d,4,2.2),C=.055,w++,t?.(N.position,N.quaternion)}function _(N,k,W){let V=U(N,k,W);L(V.p,V.d,4,2.2),l.visible=!0}function T({dt:N,aim:k,firing:W}){if(!k&&!i.visible&&!l.visible&&!d.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!k,k&&(i.position.copy(k.modelPosition??k.position),i.quaternion.copy(k.quaternion)),k&&W){if(A)for(v-=N;v<=0;)S(k),v+=U0;else S(k),v=U0;A=!0}else v=0,A=!1;C=Math.max(0,C-N),s.visible=!!k&&C>0,s.material.opacity=C/.055;let V=0;for(let B of f){if(!B.active)continue;let ae=Math.min(nT*N,F0-B.distance),ce=ae>0?e?.(B.p,B.d,ae,B.authoritative):null,ie=ce==null?ae:Math.max(0,Math.min(ae,ce));B.p.addScaledVector(B.d,ie),B.distance+=ie,ce!=null&&(m.copy(B.d).negate(),L(B.p,m,8,4.2)),B.active=ce==null&&B.distance<F0;let oe=Math.min(.82,B.distance);for(let Se=0;Se<3;Se++)for(let me=0;me<2;me++){let de=(Se+me)/3;x.copy(B.p).addScaledVector(B.d,-oe*de),o.setXYZ(V++,x.x,x.y,x.z)}}l.visible=V>0,V>0&&(o.needsUpdate=!0),r.setDrawRange(0,V);let J=0;for(let B of h)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(J++,B.p.x,B.p.y,B.p.z));d.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function F(){for(let N of f)N.active=!1;for(let N of h)N.life=0;v=C=0,A=!1,i.visible=s.visible=l.visible=d.visible=!1,r.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:T,reset:F,replay:_,get shotsFired(){return w}}}var B0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],rT=new M(0,1,0);function Qu(n){let e=new xt,t=new Mt({color:"#2c4750",roughness:.43,metalness:.47}),i=new Mt({color:"#899fa3",roughness:.46,metalness:.57}),s=new yt({toneMapped:!1});function r(h,p,x,m,g,b=0){let w=new Be(h,p);return w.position.set(x,m,g),w.rotation.x=b,e.add(w),w}r(_o([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),r(_o([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),r(new Wt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),r(new Wt(.016,.02,.011,6,1,!0),s,.038,.025,-.169,-Math.PI/2),r(new et(.044,.009,.038),s,.038,.069,-.023);let o=new Be(new Wt(.002,.003,1,5,1,!0),new yt({transparent:!0,opacity:.52,depthWrite:!1,blending:jn,toneMapped:!1})),a=new Be(new Dt(.012,0),new yt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:m}){if(!h||!p||!x||!m){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(B0[h-1]??B0[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(rT,c.normalize()),a.position.copy(m)}return d(),{mesh:e,hide:d,update:f}}var oT="wss://clouddata.turbowarp.org",aT="itssoren.github.io/VR/gorilla-lab/",nh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Mo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),V0="\u2601 GorillaHost",rl=["ARENE1","ARENE2","ARENE3"],lT=new Map([[V0,"vr"],[nh.vr,"vr"],[nh.pc,"pc"],...Mo.map(n=>[n,"player"])]),jf=53,eh=4400,k0=64e3,cT=100,uT=200,hT=450,G0=6,Ft=(n,e)=>Math.round(n).toString().padStart(e,"0");function ol(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function or(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function dT({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Ft(e,7)+a.map(c=>Ft(c*100+2e4,5)).join("")+Ft(Math.round(l*10)%3600,4)+Ft(o,6)}function fT(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function H0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:s=()=>{},Socket:r=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,m="",g=-1/0,b=null,w=0,v=0,C=1/0,A=0,L="offline",U=!1,S=-1,_=0,T=[],F=1/0,N=350,k=1/0,W=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(E,Y){L=E,n(Y)}function ae(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ce(){return[...c.values()].map(E=>E.pose).filter(Boolean)}function ie(){let E=ce().filter(D=>h==="vr"?D.role!=="vr":D.role==="vr"),Y=D=>Number(D.ready)*2+ +(D.role==="pc"),Z=E.find(D=>D.id===b?.id)??null,$=E.reduce((D,X)=>!D||Y(X)>Y(D)?X:D,Z);$!==b&&(b=$,e(b))}function oe(E){for(let Y of c.values())Y.pose&&t(null,Y.pose),Y.pose=Y.candidate=null;E&&c.clear(),ie()}function Se(){let E=f;if(f=null,E){E.onopen=E.onmessage=E.onerror=E.onclose=null;try{E.close()}catch{}}}function me(){Se(),h=null,p="",C=1/0,U=!1,S=-1,T=[],V=[],oe(!0),B("offline","Hors ligne")}function de(E){let Y=Math.min(3e4,1500*2**Math.min(A++,5));C=a()+Y,B("retry","TurboWarp d\xE9connect\xE9 ("+E+") \xB7 reconnexion automatique au salon "+p)}function ee(E){let Y=!1;for(let[Z,$]of c)$.pose&&E-$.pose.arrival>eh&&(t(null,$.pose),$.pose=null,Y=!0),$.candidate&&E-$.candidate.arrival>eh&&($.candidate=null),E-$.lastArrival>6e4&&c.delete(Z);Y&&ie()}function ne(E,Y,Z,$){let D=bT(Z.value,null);if(!D||D.id===x)return;let X=c.get(D.id);if(!X){if(c.size>=64)return;X={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:$,pose:null,candidate:null},c.set(D.id,X)}if(D.time<=X.lastTime)return;let z=X.pose??X.candidate;if(z&&D.time-z.time>eh+$-z.arrival){if(X.pose)return;X.candidate=null}X.lastTime=D.time,X.lastArrival=$;let te={...D,ready:D.ready??!0,protocol:D.protocol??(D.ready===void 0?3:4),role:E,channel:Y,received:o(),arrival:$},se=X.candidate;if(!X.pose&&(!se||se.channel!==Y||se.map!==te.map||$-se.arrival>eh)&&(D.ready!==void 0||Math.abs(D.time-te.received)>25e3)){X.candidate=te;return}if(X.candidate=null,!X.pose&&se?.objects&&se.ready&&se.map===te.map&&!te.objects&&(te.objects=se.objects),X.pose=te,h==="vr"&&E==="vr"&&te.ready)if(k===1/0||se?.arrival<k||D.id<x)h="player",m=Mo[x%Mo.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=Z.value.length,t(te),ie(),!(!U||!te.ready||te.map!==S)){$-X.shotWindow>=1e3&&(X.shotWindow=$,X.shotCount=0);for(let{seq:fe,position:R,quaternion:y}of te.shots??[])fe<=X.lastShot||(X.lastShot=fe,!(X.shotCount>=14||(R.x-te.x)**2+(R.y-te.y)**2+(R.z-te.z)**2>7**2)&&(X.shotCount++,s({position:R,quaternion:y},te)));if(!(h!=="vr"||E!=="player"||D.actionTarget!==x))for(let{seq:fe,action:R}of D.actions)fe<=X.lastAction||(X.lastAction=fe,i(R,te))}}function xe(){let E;try{E=new r(oT)}catch{return!1}return f=E,v=a(),g=-1/0,k=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),E.onopen=()=>{f===E&&(w=a(),E.send(JSON.stringify({method:"handshake",project_id:aT+p,user:"player"+x})+`
`),B("open",ae()))},E.onmessage=Y=>{if(f!==E||typeof Y.data!="string"||Y.data.length>105e4)return;let Z=a();ee(Z);for(let $ of Y.data.split(`
`)){if(!$.trim())continue;let D;try{D=JSON.parse($)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",$.slice(0,200));continue}let X=lT.get(D?.name);D?.method!=="set"||!X||ne(X,D.name,D,Z)}},E.onerror=()=>{f===E&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},E.onclose=Y=>{if(f!==E)return;let Z=Y.code;if(Se(),oe(!1),T=[],V=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(Z)){de(Z);return}h=null,p="";let $={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[Z];B("error","TurboWarp d\xE9connect\xE9 ("+Z+")"+($?" \xB7 "+$:Y.reason?" \xB7 "+Y.reason.slice(0,100):""))},!0}function Pe(E,Y){let Z=ol(E);return!/^[A-Z0-9]{5,12}$/.test(Z)||!["vr","pc","player"].includes(Y)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===Y&&p===Z?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(oe(!0),x=Math.floor(1e6+l()*8999999),h=Y,p=Z,m=nh[h]??Mo[x%Mo.length],N=350,h==="vr"&&rl.includes(p)&&(m=x%2===0?nh.vr:V0,N=750+x%150),_=W=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},A=0,C=F=1/0,xe()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function G(E,Y){let Z=E.hand||E.type==="world"?5:4;if(h!=="player"||L!=="open"||!b?.ready||b.protocol<Z||b.map!==Y||!Jf(E)||_>=99999999)return!1;let $=a();return T=T.filter(D=>D.expires>=$&&D.target===b.id&&D.map===Y),T.length>=8?!1:(T.push({action:{...E},seq:++_,expires:$+1800,target:b.id,map:Y}),!0)}function ge(E,Y,Z){if(!h||h==="pc"||L!=="open"||W>=99999999)return;let $=wo(E),D=To(Y);if(!$||!D)return;let X=a();V=V.filter(z=>z.expires>=X&&z.map===Z).slice(-(G0-1)),V.push({record:Ft(++W,8)+$+D,expires:X+hT,map:Z})}function Me(E){let Y=a();U=!!E&&E.ready!==!1,S=E?.map??-1,ee(Y),h&&!f&&Y>=C&&(C=1/0,xe()||de(1006)),f&&f.readyState===0&&Y-v>1e4&&(Se(),de(1006)),J.bufferedBytes=f?.bufferedAmount??0;let Z=h==="pc"?uT:cT;if(!E||!h||f?.readyState!==1||J.bufferedBytes>4096||Y-w<(h==="vr"?N:350)||Y-g<Z)return!1;if(h==="player"){let se=ce().filter(R=>R.role==="player"),fe=se.find(R=>R.channel===m);if(fe?F=Math.min(Y,F):F=1/0,fe&&(fe.id<x||Y-F>=800)){let R=Mo.find(y=>!se.some(I=>I.channel===y));if(!R)return L!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=R,F=1/0}}(A||L==="capacity")&&(A=0,B("open",ae()));let $=Math.round(d+Y-u),D=dT({...E,time:$,id:x});if(!D)return!1;T=T.filter(se=>se.expires>=Y&&se.target===b?.id&&se.map===E.map),V=V.filter(se=>se.expires>=Y&&se.map===E.map);let X=J.bufferedBytes===0?E.objectFeed?.(Y):null,z=typeof E.avatar=="function"?E.avatar():E.avatar,te=MT(D,z,X,{version:5,ready:E.ready!==!1,actions:T,actionTarget:T[0]?.target??0,shots:V,score:E.score});return g=Y,h==="vr"&&(k=Math.min(k,Y)),f.send(JSON.stringify({method:"set",name:m,value:te})+`
`),J.sent++,J.bytesSent+=te.length,!0}return{join:Pe,leave:me,tick:Me,sendAction:G,queueShot:ge,get stats(){return{...J}},get role(){return h},get code(){return p},get state(){return L},get remote(){return b},get peers(){return ce()}}}var pT=15,mT=12,W0=44,th=15,Zf=35,wo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Ft(e*100+2e4,5)).join(""):null;function bo(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var To=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Ft(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function So(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function gT(n){let e=wo(n.mesh.position),t=To(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>jf)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Ft(i,5)+Ft(s,2)+r+o+Ft(a,8)+e+t}function xT(n){return Ft(n,5)+"99"+"0".repeat(W0-7)}function yT(n){if(!n)return null;let e=To(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&wo(l.position),u=l&&To(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(pT+mT)}),s=Ft(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Ft(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Ft(n.coconuts??31,2)+Ft(n.color??0,2)+a}function Jf(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=jf?"10"+Ft(t,5):null;if(e==="world"){let o=s===1?2:s===2?4:s===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+s+Ft(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Ft(i,5):null;let r=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(r)?(e==="hold"?"3":"4")+r+Ft(i,5):null}function vT(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release","world"][e];if(!s)return null;let r={type:s,objectId:i};return s==="spawn"?r={type:s,typeId:i}:s==="world"?r={type:s,mode:t,typeId:i}:s==="tool"?r.mode=t:t&&(r.hand=t),Jf(r)===n?r:null}function _T(n){let e=wo(n?.position),t=To(n?.quaternion),i=wo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function MT(n,e,t,i=null){let s=yT(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Ft(p,8)+Jf(x)).join(""),a=i.version===5,l=a&&wo(e?.gun?.position),c=a&&To(e?.gun?.quaternion),u=s&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Ft(d.length,1)+d.map(p=>p.record).join("")+Ft(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!s+(s??"")+_T(s?e.tool:null)+Ft(i.actionTarget??0,7)+Ft(o.length/th,1)+o+f;return h.length+1+r.length>k0&&(t=null,r=""),h+(t?t.full?"2":"1":"0")+r}function O0(n,e,t){let i=So(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:bo(n,a+1),quaternion:So(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function bT(n,e){if(typeof n!="string"||n.length>k0||!/^[0-9]+$/.test(n))return null;let t=fT(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:W0,r=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=O0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=bo(n,a+2),f=So(n,a+17),h=bo(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*th+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=th){let u=Number(n.slice(a,a+8)),d=vT(n.slice(a+8,a+th));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=bo(n,a+1),h=So(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>G0||n.length<a+u*Zf+7)return null;t.shots=[];let d=0;for(let f=a+u*Zf;a<f;a+=Zf){let h=Number(n.slice(a,a+8)),p=bo(n,a+8),x=So(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),r=a+7}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=O0(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=bo(n,c+10),m=So(n,c+25);if(d>jf||f>7||h>4||p>16777215||!x||!m)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:m})}t.objects={full:o==="2",records:a}}return t}var ST=.45,z0=2.5;function q0(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function s(r,o){let a=r-i>=1600,l=a||r-t>=200;a&&(i=r),l&&(t=r);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=ST&&!d.frozen&&(d.velocity.lengthSq()>=z0**2||d.angular.lengthSq()*d.radius**2>=z0**2);if(!l&&!p&&!h?.fast)continue;let x=gT(d);if(!x)continue;c?.add(f);let m=x!==h?.record;m&&e.set(f,{record:x,until:r+420}),(a||!l&&m)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:xT(d),until:r+420}),n.delete(d));for(let[d,f]of e)f.until<r?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:s,reset(){n.clear(),e.clear(),t=i=-1/0}}}var X0=Lt.DEFAULT_UP,wT=15,Y0=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function TT(){let n=new xt,e=new Be(new Dt(.155,1),new Mt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new zi(.23,.018,5,20),new yt({color:"#84e6ff",transparent:!0,opacity:.85,blending:jn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new Xs(.11,.28,9,1,!0),new yt({color:"#55c7ff",transparent:!0,opacity:.45,side:qt,blending:jn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function AT(){let n=new xt,e=new xt,t=Zu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:$u(g,t.hand,{openWrist:!0}),position:new M,quaternion:new qe,pressure:[0,0,0],tracked:!1})),r=Ku(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=Qu(e),l=null,c=new M,u=[null,null],d=new M,f=new qe,h=new qe,p=new qe,x={mode:0,position:new M,quaternion:new qe,end:new M};function m(g,b,w){let v=g.avatar,C=1-Math.exp(-w*32);if(!v){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),r.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(v.head).premultiply(f),i.quaternion.slerp(p,C),d.set(0,0,-1).applyQuaternion(i.quaternion);let A=Oe.smoothstep(-d.y,.28,.94),L=Math.max(.38,v.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*L,.24*A),o.rotation.x=-.5*A,h.copy(o.quaternion).invert(),t.setColor(v.color??0);for(let _=0;_<s.length;_++){let T=s[_],F=v.hands[_];if(u[_]=F?T:null,!F){T.tracked=!1;continue}c.copy(F.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(F.quaternion).premultiply(f).premultiply(h),T.tracked?(T.position.lerp(c,C),T.quaternion.slerp(p,C)):(T.position.copy(c),T.quaternion.copy(p)),T.tracked=!0;for(let N=0;N<3;N++)T.pressure[N]+=((F.pressure?.[N]??0)-T.pressure[N])*C;T.skin.pose(T.pressure,!1)}if(r.pose(u,v.armSpan*.5,.97,L,!0),v.gun){l||(l=Yf(),l.visible=!1,e.add(l));let _=l.visible?C:1;l.position.lerp(v.gun.position,_),l.quaternion.slerp(p.copy(v.gun.quaternion),_),l.visible=!0}else l&&(l.visible=!1);let U=v.tool;if(!U){a.hide(),x.mode=0;return}let S=x.mode?C:1;x.mode=U.mode,x.position.lerp(U.position,S),x.quaternion.slerp(p.copy(U.quaternion),S),x.end.lerp(U.end,S),a.update(x)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Z0(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function j0({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,d=new Map,f=q0(),h=0,p=-1,x=-1,m=-1,g="",b=0,w=-1;function v(){let D=e();return D!==g&&(g=D,b=or(D)),b}function C(D){return!!D?.ready&&D.map===v()}function A(D){let X=d.get(D);X&&(n.remove(X.mesh),X.mesh.material?.dispose(),d.delete(D))}function L(){for(let D of d.keys())A(D);h=0,p=-1,x!==-1&&(x=-1,s?.(null)),m!==-1&&(m=-1,r?.(null)),w!==-1&&(w=-1,o?.(0))}function U(D,X){if(D.color===X.color&&D.style===X.style)return;D.color=X.color,D.style=X.style;let z=D.mesh.material;if(z?.color){if(z.color.setHex(X.color),X.style===0){Object.assign(z,D.baseMaterial),D.baseEmissive&&z.emissive.copy(D.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][X.style],z.metalness=[.1,0,.87,.12,0][X.style],z.opacity=X.style===3?.4:1,z.transparent=X.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=X.style===4?1.65:0,z.needsUpdate=!0}}function S(D){if(!C(D)){L();return}if((h!==D.id||p!==D.map)&&(L(),h=D.id,p=D.map),D.avatar&&D.avatar.light!==x&&(x=D.avatar.light,s?.(x)),D.avatar&&D.avatar.coconuts!==m&&(m=D.avatar.coconuts,r?.(m)),D.score!==void 0&&D.score!==w&&(w=D.score,o?.(w)),!D.objects)return;let X=D.objects.full?new Set:null;for(let z of D.objects.records){if(z.removed){A(z.id);continue}X?.add(z.id);let te=d.get(z.id);if(te&&te.type!==z.type&&(A(z.id),te=null),!te){let fe=i?.(z.type);if(!fe)continue;let{roughness:R,metalness:y,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j}=fe.material??{},ye={roughness:R,metalness:y,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j};fe.userData.netId=z.id,fe.userData.netType=z.type,te={mesh:fe,baseMaterial:ye,baseEmissive:fe.material?.emissive?.clone(),type:z.type,target:new M().copy(z.position),quaternion:new qe().copy(z.rotation),velocity:new M,time:D.time},fe.position.copy(te.target),fe.quaternion.copy(te.quaternion),d.set(z.id,te),n.add(fe)}let se=(D.time-te.time)/1e3;se>.06&&se<.65&&!(z.flags&6)?te.velocity.copy(z.position).sub(te.target).multiplyScalar(1/se).clampLength(0,23):te.velocity.set(0,0,0),te.target.copy(z.position),te.quaternion.copy(z.rotation),te.time=D.time,te.flags=z.flags,te.frequent=se>.06&&se<.16,te.received=D.arrival,te.mesh.userData.netFlags=z.flags,te.mesh.userData.held=!!(z.flags&1),U(te,z)}if(X)for(let z of d.keys())X.has(z)||A(z)}let _=new M;function T(D,X,z){let te=1-Math.exp(-D*22),se=1-Math.exp(-D*32);for(let fe of d.values()){if(fe.mesh.visible=X,!X)continue;let R=fe.frequent?se:te,y=fe.flags&6?0:Math.min(fe.frequent?.1:.12,Math.max(0,(z-fe.received)/1e3));_.copy(fe.target).addScaledVector(fe.velocity,y),fe.mesh.position.distanceToSquared(_)>16||fe.flags&6&&fe.mesh.position.distanceToSquared(fe.target)<1e-4?fe.mesh.position.copy(_):fe.mesh.position.lerp(_,R),fe.mesh.quaternion.slerp(fe.quaternion,R),fe.flags&6&&fe.mesh.quaternion.angleTo(fe.quaternion)<.008&&fe.mesh.quaternion.copy(fe.quaternion),fe.mesh.updateMatrixWorld(!0)}}let F=D=>document.querySelector(D),N=F("#cloud-status"),k=F("#cloud-room"),W=F("#cloud-camera"),V=-1/0,J=0,B="Hors ligne",ae=0;function ce(D){J=D,W.textContent="Cam\xE9ra : "+Y0[D]}function ie(){ce((J+1)%Y0.length)}W.onclick=ie;let oe=H0({onStatus(D){B=D,N.textContent=D,c?.()},onPose(D){oe.role!=="vr"&&S(D)},onPeer(D,X){if(!D){let se=u.get(X.id);se?.art&&(Z0(se.art.model),Z0(se.art.toolRoot),se.art.dispose?.()),u.delete(X.id);return}let z=u.get(D.id);z||(z={art:null,motion:new M,handMotion:[new M,new M]},u.set(D.id,z));let te=z.pose;z.motion.set(0,0,0);for(let se of z.handMotion)se.set(0,0,0);if(te&&te.map===D.map){let se=(D.time-te.time)/1e3;if(se>=.055&&se<=.65){z.motion.set(D.x-te.x,D.y-te.y,D.z-te.z).multiplyScalar(1/se),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let fe=0;fe<2;fe++){let R=te.avatar?.hands[fe],y=D.avatar?.hands[fe];R&&y&&z.handMotion[fe].copy(y.position).sub(R.position).multiplyScalar(1/se).clampLength(0,23)}}}z.pose=D},onAction:a,onShot:l}),Se=ol(new URLSearchParams(location.search).get("room")??"");function me(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),D=>(D%36).toString(36)).join("").toUpperCase()}k.value=/^[A-Z0-9]{5,12}$/.test(Se)?Se:me();function de(D,X=k.value){let z=ol(X);if(!(oe.role===D&&oe.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}oe.role&&oe.leave(),oe.join(z,D)&&(k.value=z,D!=="vr"&&F("#game").focus(),f.reset(),ce(0),t(or(z)),g="")}}F("#cloud-vr").onclick=()=>de("vr"),F("#cloud-new").onclick=()=>de("vr",me());for(let[D,X]of rl.entries())F(`#public-join-${D}`).onclick=()=>de("player",X),F(`#public-host-${D}`).onclick=()=>de("vr",X);F("#cloud-pc").onclick=()=>de("pc");let ee=F("#cloud-player");ee&&(ee.onclick=()=>de("player")),F("#cloud-leave").onclick=()=>{ae=0,oe.leave()},F("#cloud-copy").onclick=async()=>{let D=new URL(location.href);D.searchParams.set("room",oe.code||ol(k.value));try{await navigator.clipboard.writeText(D.href),N.textContent="Lien copi\xE9."}catch{N.textContent=D.href}ae=performance.now()+2500},addEventListener("pagehide",()=>oe.leave());let ne=new M,xe=new M,Pe=new M,G=new M,ge=0;function Me({dt:D,position:X,yaw:z,pitch:te,camera:se,rig:fe,keys:R,flat:y}){let I=y?.movement,H=Number(R.has("KeyD"))-Number(R.has("KeyQ")||R.has("KeyA"))+(I?.x??0),re=Number(R.has("KeyS"))-Number(R.has("KeyZ")||R.has("KeyW"))+(I?.z??0);y?.consumeJump?.()&&(ge=.26),ge=Math.max(0,ge-D);let j=Number(R.has("Space")||ge>0)-Number(R.has("ShiftLeft")||R.has("ShiftRight")),ye=R.has("ControlLeft")||R.has("ControlRight")?11:3.2;G.set(H,j,re).clampLength(0,1).applyAxisAngle(X0,z),fe.position.addScaledVector(G,D*ye).clampScalar(-175,175),fe.rotation.set(0,z,0),se.position.set(0,0,0),se.rotation.set(te,0,0,"YXZ"),fe.updateMatrixWorld(!0),X.copy(fe.position)}function E(D,X,z,te){for(let se of u.values()){let fe=se.pose;if(!(D&&C(fe))){se.art&&(se.art.model.visible=!1,se.art.toolRoot&&(se.art.toolRoot.visible=!1));continue}se.art||(se.art=fe.role==="pc"?TT():AT(),n.add(se.art.model),se.art.model.visible=!1,se.art.toolRoot&&n.add(se.art.toolRoot));let{model:y,toolRoot:I}=se.art,H=Math.min(.12,Math.max(0,(te-fe.arrival)/1e3+.025));ne.copy(fe).addScaledVector(se.motion,H),!y.visible||y.position.distanceToSquared(ne)>64?y.position.copy(ne):y.position.lerp(ne,1-Math.exp(-z*34)),y.rotation.y=fe.yaw,y.visible=!0,I&&(I.visible=!0),se.art.draw(fe,X,z)}}function Y(D,X){if(X<ae)return;let z=oe.remote,te=B;if(oe.state==="open"){let se="Salon "+oe.code+" \xB7 ",fe=oe.peers.filter(R=>R.ready);if(!D)te=se+"quitte la session VR pour utiliser le mode spectateur";else if(oe.role!=="vr"&&z&&z.map!==v())te=se+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(oe.role!=="vr"&&z&&!z.ready)te=se+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(oe.role==="player"&&z&&z.protocol<5)te=se+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(oe.role!=="vr"&&C(z))te=se+"h\xF4te connect\xE9";else if(oe.role==="vr"){let R=fe.filter(C),y=R.filter(H=>H.role==="player").length,I=R.some(H=>H.role==="pc");te=se+"tu h\xE9berges \xB7 "+(y+1)+" joueur"+(y?"s":""),I&&(te+=" \xB7 spectateur connect\xE9"),!y&&fe.some(H=>!C(H))&&(te+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==te&&(N.textContent=te,c?.())}function Z(D){let{inVR:X,time:z,dt:te,position:se,yaw:fe,camera:R,rig:y,keys:I,avatar:H,bodies:re,score:j}=D;if(!oe.role){L();return}let ye=oe.role!=="pc"||!X,pe=performance.now(),be=v(),_e=oe.role!=="vr"?oe.remote:null,he=ye&&C(_e);if(!he&&p!==-1&&L(),T(te,he,pe),E(ye,z,te,pe),oe.role==="pc"&&!X){(D.actions??I).delete("KeyC")&&ie();let we=J===3&&he?[...d.values()].find(Te=>Te.type===wT)?.mesh:null,ze=he?u.get(_e.id)?.art?.model:null;we?(Pe.set(0,0,-.23).applyQuaternion(we.quaternion),y.position.copy(we.position).add(Pe),y.rotation.set(0,0,0),R.position.set(0,0,0),R.quaternion.copy(we.quaternion),y.updateMatrixWorld(!0),se.copy(y.position)):ze&&(J===1||J===2)?(Pe.set(0,.72,J===1?-2.7:2.7).applyAxisAngle(X0,ze.rotation.y),xe.copy(ze.position).add(Pe),y.position.lerp(xe,1-Math.exp(-te*11)),R.position.set(0,0,0),y.updateMatrixWorld(!0),R.lookAt(ze.position),R.updateWorldMatrix(!0,!1),se.copy(y.position)):Me(D)}oe.tick({x:se.x,y:se.y,z:se.z,yaw:fe,map:be,ready:ye,avatar:ye&&oe.role!=="pc"?H:null,score:j,objectFeed:ye&&oe.role==="vr"&&re?we=>f.capture(we,re):null}),pe-V>=150&&(V=pe,Y(ye,pe))}function $(D){let X=u.get(D)?.pose;return C(X)?X:null}return{update:Z,getPeer:$,connect:de,leave:()=>oe.leave(),get caption(){return N.textContent},handMotion(D,X){return u.get(D)?.handMotion[X]},sendAction(D){return oe.sendAction(D,v())},sendShot(D,X){oe.queueShot(D,X,v())},get stats(){return oe.stats},get role(){return oe.role},get connected(){return C(oe.remote)},get remoteSpectator(){return oe.peers.find(D=>D.role==="pc"&&C(D))??null},get remoteLight(){return x===-1?null:x},get replicaCount(){return d.size},forEachReplica(D){for(let X of d.values())X.mesh.visible&&D(X.mesh)}}}function ih(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=J0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=J0(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function J0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Kf="gorilla-lab-models-v1",ar=Object.freeze({models:12,parts:64,fileBytes:18e4}),ET=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),K0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),CT=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),RT=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,PT=/^#[a-f\d]{6}$/i;function $0(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function $f(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Oe.clamp(n[s],t,i):e)}function lr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ar.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!RT.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ar.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:$0(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(CT).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:$0(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(ET,s?.shape)?s.shape:"box",position:$f(s?.position,0,-3,3),rotation:$f(s?.rotation,0,-360,360),scale:$f(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&PT.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(K0,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Qf(n){try{let e=(n??globalThis.localStorage)?.getItem(Kf);if(e&&e.length<=ar.fileBytes)return lr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function IT(n){switch(n){case"sphere":return new ai(.5,20,12);case"cylinder":return new Wt(.5,.5,1,20);case"cone":return new Xs(.5,1,20);case"torus":return new zi(.365,.135,8,24);case"capsule":return new Ia(.28,.44,6,16);case"diamond":return new oi(.5);default:return new et(1,1,1)}}var Q0=Object.keys(K0),Ao=64,al=4,ex=2,qi;function LT(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function DT(){if(qi)return qi;let n=Ao*al,e=Ao*ex,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Ao)*al+Math.floor(s/Ao),o=LT(Q0[r],s%Ao,i%Ao),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return qi=new yi(t,n,e),qi.colorSpace=pt,qi.magFilter=un,qi.minFilter=Pn,qi.generateMipmaps=!0,qi.needsUpdate=!0,qi}function UT(n){let e=IT(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(Oe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new De(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=Q0.indexOf(n.surface),c=l%al,u=Math.floor(l/al);for(let d=0;d<r;d++)s.toArray(o,d*3),a.setXY(d,(c+.05+a.getX(d)*.9)/al,(u+.05+a.getY(d)*.9)/ex);return t.setAttribute("color",new mt(o,3)),t}function gs(){return new Mt({vertexColors:!0,map:DT(),roughness:.68})}function ep(n){let e=n.map(UT),t=ih(e);return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Eo(n){let e=ep(n.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function tx(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=ep(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:gs(),collisionGeo:new et(i.x,i.y,i.z),mass:Oe.clamp(i.x*i.y*i.z*9,.18,12)}})}function nx(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=ep(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new Be(t,gs());r.castShadow=!0;let o=new xt;return o.add(r),o}var rx=Object.freeze([8,16,32,48,64,96,128]),ox=16,sh=24,ix=new WeakMap,Si=Oe.clamp,cr=Oe.lerp,tp=n=>n*n*(3-2*n);function Jn(n,e,t,i){return Number.isFinite(n)?Si(n,e,t):i}function sx(n){if(!n)return null;let e=lr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var FT=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Co(n={}){let e=rx.includes(n?.detail)?n.detail:ox,t=n?.heights;return{detail:e,seed:Math.round(Jn(n?.seed,0,2147483647,1)),amplitude:Jn(n?.amplitude,0,12,0),frequency:Jn(n?.frequency,.015,2,.12),octaves:Math.round(Jn(n?.octaves,1,5,3)),roughness:Jn(n?.roughness,.15,.95,.42),ridge:Jn(n?.ridge,0,1,0),edgeFade:Jn(n?.edgeFade,0,1,0),grass:Jn(n?.grass,0,1,0),shrub:Jn(n?.shrub,0,1,0),grassSize:Jn(n?.grassSize,.1,5,1),shrubSize:Jn(n?.shrubSize,.1,5,1),grassModel:sx(n?.grassModel),shrubModel:sx(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&FT.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Jn(i,-sh,sh,0)):null}}function ax(n,e,t,i){let s=Si(t,0,e),r=Si(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function lx(n,e){let t=rx.includes(e)?e:ox;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>ax(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Xi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function NT(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=tp(n-i),o=tp(e-s),a=cr(Xi(i,s,t),Xi(i+1,s,t),r),l=cr(Xi(i,s+1,t),Xi(i+1,s+1,t),r);return 2*cr(a,l,o)-1}function ll(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=ix.get(n),p=h&&h.w===e&&h.d===t&&h.detail===s&&h.seed===r&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let x=s+1,m=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let w=0;w<=s;w++)for(let v=0;v<=s;v++){let C=(v/s-.5)*e*a,A=(w/s-.5)*t*a,L=0,U=1,S=0;for(let T=0;T<l;T++){let F=NT(C*2**T,A*2**T,r+T*13);L+=U*cr(F,1-2*Math.abs(F),u),S+=U,U*=c}let _=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(v/s-.5))*2,(.5-Math.abs(w/s-.5))*2)),d*2):1;m[w*x+v]=o*L/S*_}let g=f?m.map((w,v)=>w+f[v]):m,b={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:m,surface:g};return ix.set(n,b),b}function np(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return ax(o,i,(e/s+.5)*i,(t/r+.5)*i)}function BT(n,e,t){return n.y+np(ll(n),e-n.x,t-n.z)}function OT(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=s[f*r+h],d++);return u/d}function cx(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=ll(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=Si(h,-c/2,c/2),m=Si(p,-u/2,u/2);if((h-x)**2+(p-m)**2>=s**2)return!1;let g=(h/c+.5)*l,b=(p/u+.5)*l,w=c/l,v=u/l,C=Math.max(0,Math.ceil(g-s/w)),A=Math.min(l,Math.floor(g+s/w)),L=Math.max(0,Math.ceil(b-s/v)),U=Math.min(l,Math.floor(b+s/v)),S=Number.isFinite(o)?o-n.y:np(a,h,p),_=l+1,T=a.heights?.slice()??new Array(_**2).fill(0),F=!1,N=!1;function k(W,V,J){F=!0;let B=V*_+W,ae=T[B],ce;if(i==="raise"||i==="lower")ce=ae+(i==="raise"?1:-1)*r*J;else{let ie=i==="flatten"?S:OT(a,W,V);ce=cr(d[B],ie,Math.min(1,r)*J)-f[B]}ce=Si(ce,-sh,sh),!(Math.abs(ce-ae)<1e-7)&&(T[B]=ce,N=!0)}for(let W=L;W<=U;W++)for(let V=C;V<=A;V++){let J=Math.hypot((V-g)*w,(W-b)*v)/s;J<1&&k(V,W,tp(1-J))}if(!F){let W=Si(g,0,l),V=Si(b,0,l),J=Math.min(l-1,Math.floor(W)),B=Math.min(l-1,Math.floor(V)),ae=W-J,ce=V-B,ie=ae+ce<=1,oe=ie?1-ae-ce:ae+ce-1,Se=ie?ae:1-ce,me=ie?ce:1-ae;if(oe>=Math.max(Se,me)){let de=+!ie;k(J+de,B+de,1)}else Se>=me?k(J+1,B,1):k(J,B+1,1)}return N&&(n.terrain.heights=T),N}function ux(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){let h=d*r+f;o[3*h]=(f/s-.5)*e,o[3*h+2]=(d/s-.5)*t,a[2*h]=f/s*e/2.6,a[2*h+1]=(1-d/s)*t/2.6,d<s&&f<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new $e;return u.setAttribute("position",new mt(o,3).setUsage(Sn)),u.setAttribute("uv",new mt(a,2)),u.setIndex(new mt(l,1)),zT(u,n),u}function zT(n,e){let{surface:t}=ll(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function VT(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=ll(n),l=Si(((e-n.x)/r+.5)*s,0,s),c=Si(((t-n.z)/o+.5)*s,0,s),u=Math.min(s-1,Math.floor(l)),d=Math.min(s-1,Math.floor(c)),f=s+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],m=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*s/r,1,-m*s/o).normalize()}function hx(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>BT(n,t,i),normalAt:(t,i,s)=>VT(n,t,i,s),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function kT(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new $e;return e.setAttribute("position",new ke(n,3)),e.setAttribute("uv",new ke(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function GT(){return new Dt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var HT=[{name:"grass",geometry:kT,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:GT,perMetre:.17,max:48,salt:47,color:"#36583c"}];function dx(n){let e=new xt;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of HT){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,n.w*n.d*s)*l)),u=n.terrain[t+"Model"],d=n.terrain[t+"Size"]??1,f,h;if(u){let m=t==="grass"?.42:.85;f=Eo(u),f.scale(m*d,m*d,m*d),f.translate(0,m*d/2,0),h=gs()}else if(f=i(),f.scale(d,d,d),h=new en({color:a,side:t==="grass"?qt:ri,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let m=new $s().load(n.terrain.grassTexture);m.colorSpace=pt,h.map=m,h.color.set("#ffffff"),h.userData.ownTexture=!0}let p=new Ta(f,h,c);p.name=t,p.instanceMatrix.setUsage(Sn),p.userData.salt=o,p.receiveShadow=!0;let x=new De;for(let m=0;m<c;m++){let g=cr(.68,1.2,Xi(m,o,n.terrain.seed+4));p.setColorAt(m,x.setRGB(g,g,g))}e.add(p)}return WT(e,n),e}function WT(n,e){let t=ll(e),i=new Lt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Xi(a,r,o)-.5)*.96*e.w,c=(Xi(a,r,o+1)-.5)*.96*e.d;i.position.set(l,np(t,l,c),c),i.rotation.y=Xi(a,r,o+2)*2*Math.PI,i.scale.setScalar(cr(.58,1.34,Xi(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function fx(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material.userData.ownTexture&&e.material.map?.dispose(),e.material.dispose(),e.dispose();n.clear(),n.removeFromParent()}}var rh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],px=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function mx(n,e=px[n]){n=Math.max(0,Math.min(rh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:px[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function gx({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let h=c;return c=!1,h}}}var qT=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function xx(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){qT.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function yx(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var vx=.065,XT=.08,oh=.035,ip=.003,ah=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:s,settings:r,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=r,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=s*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&r.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(Wi).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(ip,s*t*t);let b=this.sweep(u,this.from,this.to);if(m){let S=this.correction.subVectors(x,d.anchor),_=S.dot(f)<=oh&&d.anchor.distanceToSquared(e)<=(c+oh)**2&&S.lengthSq()<=Math.max(.12,c*.5)**2;_&&(!b||b===p&&this.hitNormal.dot(f)>.7)?(b=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!_&&b===p&&S.dot(f)>oh&&(b=null),!b&&u.tracked&&(u.released=p,this.released=!0)}if(!b)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let w=b.friction??.8,v=Math.min(1,Math.max(0,w*(.75+r.grip*.09))),C=Math.max(0,1-Math.abs(f.y)/.28),A=Math.min(.97,Math.max(0,1-v+C*.24+(r.slide-3)*.035)),L=this.correction.subVectors(d.anchor,x);if(L.addScaledVector(f,-L.dot(f)),this.slideTarget.copy(L).multiplyScalar(-A),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,s*t*.11*A*Math.max(C,Math.max(0,1-2*v)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,ip),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-ip*2.5),this.supportBoxes[0]=b,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(A>.5&&L.lengthSq()>oh**2)continue}L.subVectors(d.anchor,x),m&&L.dot(f)<0&&L.addScaledVector(f,-L.dot(f)),l.add(L);let U=b.objectBody;if(U){let S=u.inverseRotation.copy(U.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(U.mesh.position).applyQuaternion(S),u.localNormal.copy(f).applyQuaternion(S)}if(d.surface=b,d.groundContact=f.y>.55,this.contacts++,u.tracked){let S=this.handMotion.subVectors(u.previousTarget,x),_=S.dot(f);S.multiplyScalar(1-A).addScaledVector(f,Math.max(0,_)-_*(1-A)),this.intent.add(S)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=s*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),x.copy(m).add(g),p.surface&&(x.copy(p.anchor).add(g),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=vx;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/vx),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(x);g<0&&this.average.addScaledVector(x,-g)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=XT,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function _x(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),s=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!s||n.hapticCooldown>0)return;let r=n.gamepad,o=r?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof r?.vibrationActuator?.playEffect=="function")a=r.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function Mx({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new qe,l=0,c=new Vi,u=[],d=new Map,f=N0(n,{onShot:(g,b)=>r.sendShot(g,b),impact(g,b,w,v){c.set(g,b),c.far=w;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let A=d.get(C.object);return v&&A&&!A.owner&&!A.frozen&&A.velocity.addScaledVector(b,Math.min(4,2.6/A.mass)),C.distance}}),h={position:new M,quaternion:new qe,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function m({frame:g,space:b,inVR:w,enabled:v,remoteWorld:C,dt:A,yaw:L,drop:U,rightHand:S,flatFiring:_}){let T=null,F=!1;if(v)if(w){let N=[...g.session.inputSources].find(W=>W.handedness==="right"),k=N&&g.getPose(N.targetRaySpace,b);if(k){let{position:W,orientation:V}=k.transform;T=h,T.position.set(W.x,W.y-U,W.z).applyAxisAngle(o,L).add(e.position),T.modelPosition.copy(S.valid?S.mesh.position:T.position),T.quaternion.set(V.x,V.y,V.z,V.w).premultiply(a.setFromAxisAngle(o,L)),F=!!N.gamepad?.buttons[0]?.pressed}}else T=h,t.getWorldPosition(T.position),t.getWorldQuaternion(T.quaternion),T.modelPosition.set(.16,-.17,-.43).applyQuaternion(T.quaternion).add(T.position),F=_;if(x=T?p:null,u.length=0,d.clear(),T||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(C)r.forEachReplica(N=>u.push(N));else for(let N of s)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),d.set(N.mesh,N))}f.update({dt:A,aim:T,firing:F}),F?l=1.3:l=Math.max(0,l-A)}return{update:m,receiveShot({position:g,quaternion:b},w){f.replay(g,new qe().copy(b),w),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function bx(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Sx(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var ur=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],lh=["Naturel","Cellulo","Affiche","R\xE9tro"],ch={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var hh=0,YT=1,ZT=new M,wx=new Za,sp=new En,Tx=new M,uh=new Cn,dh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new fh,this.unassigned=new fh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new rp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,ZT)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===hh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let h=s[f].point.getComponent(f)-i[f].point.getComponent(f);h>r&&(r=h,o=f)}let a=i[o],l=s[o],c,u;r=0,wx.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){wx.closestPointToPoint(p.point,!0,Tx);let x=Tx.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,sp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(sp.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(sp.distanceToPoint(u.point)<0){d.push(ci.create(a,l,c),ci.create(u,l,a),ci.create(u,c,l),ci.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(ci.create(a,c,l),ci.create(u,a,l),ci.create(u,l,c),ci.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>r&&(r=g,x=this.faces[m])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===hh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=YT;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===hh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=ci.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},ci=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=hh,this.edge=null}static create(e,t,i){let s=new n,r=new cl(e,s),o=new cl(t,s),a=new cl(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return uh.set(e.point,t.point,i.point),uh.getNormal(this.normal),uh.getMidpoint(this.midpoint),this.area=uh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},cl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},rp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},fh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var hr=class extends $e{constructor(e=[]){super();let t=[],i=[],r=new dh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(i,3))}};var Ln=Math.PI*2,ph=.84,Yi=128;function vs(n){let e=new Uint8Array(Yi*Yi*4);for(let i=0;i<Yi;i++)for(let s=0;s<Yi;s++){let r=(s+.5)/Yi,o=(i+.5)/Yi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/ph,1),Math.min(o/ph,1),s,i),l=(s+i*Yi)*4;for(let c=0;c<3;c++)e[l+c]=Oe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new yi(e,Yi,Yi);return t.colorSpace=pt,t.generateMipmaps=!0,t.minFilter=Pn,t.magFilter=un,t.needsUpdate=!0,t}function dr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new De(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*ph,r.getY(l)*ph):r.setXY(l,.95,.95);return i.setAttribute("color",new mt(a,3)),i}function _s(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:ih(s),material:new Mt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Ax(n,e,t){let i=n/2,s=e/2,r=new Oi;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function xs(n,e,t,i,s){return new Zs(Ax(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ys(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Ln*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;d>0&&r.push(m,m+1,g),n[u+1][0]>0&&r.push(m+1,g+1,g)}}let o=new $e;o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function ul(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Ln*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new hr(t)}function jT(){let t=new Va(Ax(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Oe.clamp(i.getX(l)/.098+.5,0,1),u=Oe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=vs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Ln),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[it(xs(.106,.207,.013,.011,.0019),8425890),it(xs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(xs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(xs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(it(new Wt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(it(new Qt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(it(new Qt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new hr([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return _s("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function JT(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ys(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=vs((a,l,c,u)=>{let d=Ln*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(d))/.009)**2)))),x=h**3*p,m=dr(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*x+g,76+24*h+70*x+g,24+11*h+52*x+g*.8]}),o=ul([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return _s("bread","Baguette de pain",.27,o,[it(s,16777215,!0)],r,.9)}function $T(){let n=vs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*dr(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=ys([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ys([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Wt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Wt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Ln*r/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=ul([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return _s("wheel","Roue",1.8,s,i,n,.64,.23)}function KT(){let n=vs((r,o,a,l)=>{let c=dr(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Ln*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=ys([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new zi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Ln*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new hr(i);return _s("cup","Tasse",.39,s,[it(e,16777215,!0),it(t,15785922)],n,.37)}function QT(){let n=ys([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=vs((s,r,o,a)=>{let l=9*dr(o,a),c=11*Math.cos(s*Ln*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*Ln*48+s*Ln*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*Ln*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new ao(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new Qt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new Qt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Wt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new Qt(.008,12).translate(0,.035,.0336),15633202)],i=ul([[.033,-.143],[.054,.133]],6);return _s("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function eA(){let n=ys([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=vs((r,o,a,l)=>{let c=10*dr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Ln*r*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Ln*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new Qt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new ao(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new Qt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=ul([[.069,-.112],[.069,.109]],6);return _s("soda","Canette de soda",.35,s,i,t,.42,.27)}function tA(){let n=ys([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=vs((s,r,o,a)=>{let l=15*dr(o,a),c=8*Math.cos(s*Ln*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(xs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new Qt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=ul([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return _s("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function nA(){let n=vs((s,r,o,a)=>{let l=8*dr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ys([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(xs(.138,.22,.061,.016,.004),14788675),it(xs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new $t(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Wt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new Qt(.004,8).translate(.04,.066,.0397),15817792),it(new Qt(.004,8).translate(-.04,.066,.0397),7903100),it(xs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return _s("radio","Talkie-walkie",.43,new hr(i),t,n,.61,.08)}function Ex(){return[jT(),JT(),$T(),KT(),QT(),eA(),tA(),nA()]}var Dn=new qe,Vt=new M,bh=new M,iA=new at,Cx=new WeakMap;function Ah(n){if(n.heightfield||n.objectBody)return null;let e=Cx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=iA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return Cx.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function Fx(n,e,t){let i=Ah(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Sh(n,e,t,i){if(t.heightfield)return mA(n,e,t,i);if(t.objectBody)return qx(n,e,t.objectBody,i);if(!Fx(n,e,t))return 0;Dn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Dn);let s=t.half;bh.copy(Vt).clamp(t.min,s),i.subVectors(Vt,bh);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Vt.x),a=s.y-Math.abs(Vt.y),l=s.z-Math.abs(Vt.z);return o<=a&&o<=l?i.set(Math.sign(Vt.x)||1,0,0):a<=l?i.set(0,Math.sign(Vt.y)||1,0):i.set(0,0,Math.sign(Vt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var st=new M,Zi=new M;function mp(n,e,t,i,s=0,r=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Sh(n,e,u,st);if(!d||(n.addScaledVector(st,d+1e-4),st.y>=.62&&(l=!0,a&&st.y>a.normal.y&&(a.normal.copy(st),a.surface=u)),!i))continue;let f=i.dot(st);f<0&&i.addScaledVector(st,-f*(Math.abs(f)<.55?1:1+s)),Zi.copy(i).addScaledVector(st,-i.dot(st)),i.addScaledVector(Zi,-Math.min(.95,r*u.friction*o))}return l}var op=new M,Lo=[];function Uo(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Lo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=Ah(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Lo.push(h)}for(let h=1;h<=o;h++){op.copy(n).lerp(e,h/o);for(let p of Lo){let x=Sh(op,t,p,st);if(x)return s.copy(op).addScaledVector(st,x+.001),r.copy(st),p}}return null}var fl=new M,ml=new M,Do=new M,Nx=new Cn,pl=new M;function bs(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),m=x.toArray().map(g=>g.toFixed(5)).join(",");r.has(m)||(r.add(m),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),m=x(p),g=x(p+1),b=x(p+2),w=new Cn(m,g,b).getNormal(new M);w.lengthSq()>.1&&s.push({a:m,b:g,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new nn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let m of p)m.lengthSq()>.5&&!x.some(g=>Math.abs(g.dot(m))>.9999)&&x.push(m);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Eh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Dn.copy(t.quaternion).invert(),Vt.copy(n).sub(t.position).applyQuaternion(Dn),i.faces.every(r=>r.n.dot(fl.subVectors(Vt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)Nx.set(r,o,a).closestPointToPoint(Vt,pl),s=Math.min(s,Vt.distanceToSquared(pl));return Math.sqrt(s)}function sA(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=Sh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Dn.copy(e.quaternion).invert(),Vt.copy(s.position).sub(e.position).applyQuaternion(Dn),bh.copy(Vt).clamp(e.min,e.half),Vt.distanceToSquared(bh)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){fl.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=Sh(fl,.007,e,Do);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(fl),t.copy(Do)):Math.abs(c-o)<.003&&Do.dot(t)>.98&&(i.lerp(fl,1/++a),o=Math.max(o,c)))}return o}var mh=new M,rA=new M,gh=new M,oA=new M,aA=new M;function ui(n){return bs(new et(n.x*2,n.y*2,n.z*2))}function Ch(n,e,t){let i=oA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=aA.copy(o).negate(),c=mr(n,l)+mr(e,o)-a,u=mr(n,o)+mr(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(mh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(mh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){gh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(mh.copy(a).applyQuaternion(e.mesh.quaternion).cross(gh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(rA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Dn.copy(a.mesh.quaternion).invert(),Vt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Dn);for(let{a:c,b:u,c:d}of a.shape.faces){Nx.set(c,u,d).closestPointToPoint(Vt,pl);let f=Vt.distanceToSquared(pl);f<l&&(l=f,gh.copy(pl))}if(!r(mh.subVectors(Vt,gh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var lA=new M;function cA(n,e,t){Dn.copy(e.quaternion).invert(),Vt.copy(n.mesh.position).sub(e.position).applyQuaternion(Dn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Vt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Vt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+mr(n,lA.copy(t).negate())-s,a=r+mr(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function gp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return sA(n,e,t,i??ml);let s=cA(n,e,t)??Ch(n,e,t);return s>0&&i&&zx(n,e,t,i),s}var dp=bs(new oi(1,0).scale(...Ju)),xh={mesh:{position:new M,quaternion:new qe},shape:dp,radius:dp.radius,precise:!0};function Bx(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=dp.radius;Lo.length=0;for(let c of i){let u=Ah(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Lo.push(c)}xh.mesh.quaternion.copy(t);let l=xh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Lo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Ch(xh,d,st):gp(xh,u,st);if(f>0)return s.copy(l).addScaledVector(st,f+5e-4),r.copy(st),u}}return null}function gl(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!Fx(n.mesh.position,n.radius,s))continue;let r=gp(n,s,st);r<=1e-6||(n.mesh.position.addScaledVector(st,r),i=!0)}if(!i)break}}var ap=new M,hl=new M,yh=new M,lp=new qe,Ms=new qe,Rx=new qe;function Px(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Ox(n,e,t,i,s){let{mesh:r,shape:o}=n;ap.copy(r.position),lp.copy(r.quaternion),hl.subVectors(e,ap);let a=Px(lp,t,Ms),l=hl.length()+a*o.radius,c=Hx(o),u=Math.max(1,Math.min(Gx,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;yh.set(Ms.x,Ms.y,Ms.z).normalize(),Rx.setFromAxisAngle(yh,f),hl.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(hl),r.quaternion.premultiply(Rx).normalize(),gl(n,i);let h=Math.max(.006,s||0);n.velocity.lerp(hl.subVectors(r.position,ap).divideScalar(h).clampLength(0,23),.52);let p=Px(lp,r.quaternion,Ms);yh.set(Ms.x,Ms.y,Ms.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(yh,.52)}function mr(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Dn.copy(n.mesh.quaternion).invert(),Do.copy(e).applyQuaternion(Dn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Do));return t}var Io=new M,wh=new M,uA=new M,cp=new M,Ro={},Po={};function Ix(n,e,t,i){let{mesh:s,shape:r}=n,o=mr(n,uA.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(Io),i.minV=i.maxV=s.position.dot(wh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(Do)<o-.0015)continue;cp.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=cp.dot(Io),c=cp.dot(wh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function zx(n,e,t,i){Math.abs(t.y)<.8?Io.set(-t.z,0,t.x).normalize():Io.set(t.y,-t.x,0).normalize(),wh.crossVectors(t,Io),Ix(n,t,-1,Ro),Ix(e,t,1,Po);let s=(Math.max(Ro.minU,Po.minU)+Math.min(Ro.maxU,Po.maxU))*.5,r=(Math.max(Ro.minV,Po.minV)+Math.min(Ro.maxV,Po.maxV))*.5;i.copy(t).multiplyScalar((Ro.plane+Po.plane)*.5).addScaledVector(Io,s).addScaledVector(wh,r)}var Lx=new M;function Th(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)Lx.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Lx)}}function hA(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Vx(n){return!n.owner&&!n.frozen}var fr=new M,pr=new M,dl=new M,Dx=new M,fp=new M,pp=new M,dA=new M;function vh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function kx(n,e,t,i){let{mesh:s,shape:r}=n.body;return Dn.copy(s.quaternion).invert(),fp.crossVectors(e,t),i.copy(fp).applyQuaternion(Dn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function _h(n,e,t){return n?.inverseMass?(kx(n,e,t,pp),n.inverseMass+fp.dot(pp)):0}function Mh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(kx(n,e,t,pp),i))}function up(n){return n.friction??n.spec?.friction??.78}function Ux(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(up(r)*up(o)):Math.min(up(r),t.friction??.78);fr.subVectors(ml,r.mesh.position),o&&pr.subVectors(ml,o.mesh.position),vh(n,fr,dl).sub(vh(e,pr,Dx));let l=dl.dot(st),c=!1;if(l<-1e-5){let d=l<-.8?Oe.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(_h(n,fr,st)+_h(e,pr,st));Mh(n,fr,st,f),Mh(e,pr,st,-f),vh(n,fr,dl).sub(vh(e,pr,Dx)),Zi.copy(dl).addScaledVector(st,-dl.dot(st));let h=Zi.length();if(h>1e-5&&a>0){Zi.divideScalar(h);let p=Math.min(f*a,h/(_h(n,fr,Zi)+_h(e,pr,Zi)));Mh(n,fr,Zi,-p),Mh(e,pr,Zi,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(st,u*n.inverseMass/d),Th(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(st,-u*e.inverseMass/d),Th(e)),c=!0}return n.inverseMass&&st.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,st.y)),e?.inverseMass&&st.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-st.y)),c}function fA(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Gx=96,pA=5;function Hx(n){return Math.max(.008,n.thickness*.35)}function Wx(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:Ah(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=Vx(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/Hx(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new nn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Th(f),o.push(f)}l=Math.min(Gx,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:x}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(r?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let m=x.length();m>1e-5&&h.rotateOnWorldAxis(dA.copy(x).divideScalar(m),Math.min(m,30)*c),Th(d)}for(let d=0;d<pA;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!hA(h.bounds,p,x))continue;let m=gp(h.body,p,st,ml);m>0&&(f=Ux(h,null,p,m,s)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let m=o[x];if(m.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!m.inverseMass||!p.bounds.intersectsBox(m.bounds))continue;let g=Ch(p.body,m.body,st);g<=0||(zx(p.body,m.body,st,ml),f=Ux(p,m,null,g,s)||f)}}if(!f)break}for(let d of o)d.inverseMass&&fA(d,c)}}function mA(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-s)*i.y)}var hp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function qx(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(hp.mesh.position=n,hp.shape.sphereRadius=e,Ch(hp,t,i))}function Xx(n,e,t,i,s){let r=qx(n,e,t,st);if(r<=0)return!1;n.addScaledVector(st,r+.001),s?.copy(st);let o=i.dot(st);return o<0&&(i.addScaledVector(st,-o),Math.abs(st.y)<.6&&Vx(t)&&t.velocity.addScaledVector(st,-Math.min(2.8,-o*.24))),!0}var kt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Yx=kt(-24,24,-51,7),Zx=34521,No={x:0,y:0,z:3},Rh={x:.05,y:1.16,z:5.9},Fo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:kt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:kt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:kt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:kt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:kt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:kt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:kt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:kt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:kt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:kt(9,23,-48,-37),sign:[16,-38.2]}},kR=[kt(-9,-6,-51,7),kt(6,9,-51,7),kt(-24,24,-8,-5),kt(-24,24,-27,-23),kt(9,23,-37,-34)],jx=[{name:"Glace",bounds:Fo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Fo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:kt(-9,9,-51,7)},{name:"Sol ouest",bounds:kt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:kt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:kt(-24,-23,-51,7)},{name:"Sol est",bounds:kt(9,23,-51,-48)},{name:"Sol est",bounds:kt(9,23,-37,7)},{name:"Bordure est",bounds:kt(23,24,-51,7)}],Bo={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Oo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Jx=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),xp={x:16,z:-31},yp={x:16,y:1.52,z:-21},Ph={x:-19.4,y:.68,z:-3.25},$x=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Kx={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",yp.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var gA=[0,1,2,3,4,5,7,8,9,10];function Qx(n){Jx.forEach(({x:e,z:t},i)=>n(gA[i],new M(e,.8,t)))}function ey(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Dt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new ka(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Dt(.6,4),"#dbab58",.6,3.7],["Coco",new Dt(.124,1),"#956238",.124,.44]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:bs(t,s),material:new Mt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:ui(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of Ex()){let s=bs(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var ty=new WeakMap;function vp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,ty.set(n,e),n}function Ih(n){let e=n.clone(),t=ty.get(n);return t?vp(e,t):e}function xA(n){let t=new ai(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Dt(.225,0),s=new Ga({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return vp(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function yA(n){let e=new et(.37,.37,.37),t=new Mt({color:16777215,roughness:.4});return vp(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function ny(){let n={value:0};return{props:[xA(n),yA(n)],animate(e){n.value=e}}}var iy=new M(0,1,0),sy=new M(0,0,1),vA={left:new qe().setFromAxisAngle(sy,Math.PI/2),right:new qe().setFromAxisAngle(sy,-Math.PI/2)},_A=new qe,MA=new M;function ry(n,e,t,i,s){let r=e.position,o=e.orientation;n.gripPosition.set(r.x,r.y-t,r.z).applyAxisAngle(iy,i).add(s),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(_A.setFromAxisAngle(iy,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(vA[n.side]),n.target.copy(n.gripPosition).sub(MA.copy(Wi).applyQuaternion(n.mesh.quaternion))}function oy(){let n,e,t=0,i=!1,s=0,r=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let b=0;b<g.length;b++)g[b]=(Math.random()*2-1)*(1-b/g.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),m=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(Oe.clamp(f,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(m).connect(n.destination),p.start(h),r++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:m,volume:g,enabled:b}){if(h){p.forEach((w,v)=>{a[v]=Math.max(0,a[v]-f);let C=w.valid&&w.groundContact;C&&!o[v]&&!a[v]&&b&&(c(g),a[v]=.11),o[v]=C});return}s=Math.max(0,s-f),t=x?t+m:0,x&&b&&s===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,s=.12),i=x}function d(){t=0,i=!1,s=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return r},get state(){return n?.state??"locked"}}}function ay(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),s=new $e;s.setAttribute("position",new mt(t,3).setUsage(Sn)),s.setAttribute("color",new mt(i,3).setUsage(Sn));let r=new qs(s,new vi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.frustumCulled=!1,r.renderOrder=100,r.visible=!1,n.add(r);let o=new js(new ai(1,12,8)).attributes.position,a=new js(new oi(1).scale(...Ju)).attributes.position,l=new WeakMap,c=new M(1,1,1),u=new qe,d=new M,f=new M,h=new M,p=new M,x=new M,m=new M,g=new M,b=new M(0,1,0),w={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},v=0;function C(_,T,F){v+2>1e5||(_.toArray(t,v*3),F.toArray(i,v++*3),T.toArray(t,v*3),F.toArray(i,v++*3))}function A(_,T,F,N,k){for(let W=0;W<_.count;W+=2)d.fromBufferAttribute(_,W).multiply(N).applyQuaternion(F).add(T),f.fromBufferAttribute(_,W+1).multiply(N).applyQuaternion(F).add(T),C(d,f,k)}function L(_,T,F,N){if(_.sphereRadius){A(o,T,F,p.setScalar(_.sphereRadius),N);return}for(let{a:k,b:W,c:V}of _.faces)d.copy(k).applyQuaternion(F).add(T),f.copy(W).applyQuaternion(F).add(T),h.copy(V).applyQuaternion(F).add(T),C(d,f,N),C(f,h,N),C(h,d,N)}function U(_,T,F,N){if(T.lengthSq()<1e-8)return;x.copy(_).addScaledVector(T,F),m.copy(T).normalize(),g.crossVectors(m,b),g.lengthSq()<1e-8?g.set(1,0,0):g.normalize();let k=Math.min(.09,_.distanceTo(x)*.3);p.copy(x).addScaledVector(m,-k),C(_,x,N),C(x,d.copy(p).addScaledVector(g,k*.5),N),C(x,f.copy(p).addScaledVector(g,-k*.5),N)}function S({settings:_,boxes:T,bodies:F,hands:N,locomotion:k,velocity:W,head:V,body:J,neck:B,proxies:ae,gravity:ce,appliedMove:ie,playerActive:oe,inVR:Se}){if(v=0,r.visible=_.debugPalm||_.debugHitboxes||_.debugInvisible||_.debugForces||_.debugBody,!!r.visible){if(_.debugHitboxes||_.debugInvisible){for(let me of T){let de=me.mesh?.isObject3D&&me.mesh.visible;if(!(de?!_.debugHitboxes:!_.debugInvisible)){if(me.shape)L(me.shape,me.position,me.quaternion,de?w.solid:w.proxy);else if(me.heightfield&&me.mesh?.geometry){let ee=me.mesh.geometry,ne=l.get(ee),xe=ee.attributes.position.version;ne?.version!==xe&&(ne?.edges.dispose(),ne={version:xe,edges:new js(ee)},l.set(ee,ne)),A(ne.edges.attributes.position,me.mesh.position,me.mesh.quaternion,c,w.solid)}}}if(_.debugHitboxes)for(let me of F)me.blocksPlayer&&me.mesh.visible&&L(me.shape,me.mesh.position,me.mesh.quaternion,w.solid)}if(oe){if(_.debugBody){if(_.collisions)for(let{position:me,radius:de}of ae)A(o,me,u,p.setScalar(de),w.rig);C(V,B,w.rig),C(B,J,w.rig)}if(_.debugForces&&(U(V,W,.13,w.velocity),U(V,b,-ce*.038,w.force),U(V,ie,5,w.movement)),Se&&(_.debugPalm||_.debugForces))for(let me of k.hands){let{hand:de,normal:ee,offset:ne}=me;if(de.valid){if(_.debugPalm){A(o,de.gripPosition,u,p.setScalar(.014),w.grip);for(let xe=0;xe<3;xe++)m.set(0,0,0).setComponent(xe,.075).applyQuaternion(de.controllerRotation),U(de.gripPosition,m,1,w.grip);x.copy(de.mesh.position).add(ne),A(a,x,de.mesh.quaternion,c,w.palm),C(de.gripPosition,x,w.grip),de.hasSupport&&(x.copy(Wi).applyQuaternion(de.mesh.quaternion).add(de.mesh.position),A(a,x,de.mesh.quaternion,c,w.grip))}_.debugForces&&de.surface&&U(de.anchor,ee,.25,w.normal)}}}s.setDrawRange(0,v);for(let me of["position","color"]){let de=s.attributes[me];de.clearUpdateRanges(),v&&de.addUpdateRange(0,v*3),de.needsUpdate=!!v}}}return{update:S}}function Lh(n,e,t){let i=new et(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}function ly(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*r-d*o+a,u*o+d*r+l)}return t.needsUpdate=!0,n}var _p=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],hy=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Mp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Dh=8e6,xl=512,wi=1024,cy=512,Xt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,uy=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function yl(n){if(typeof n=="string"){if(n.length>Dh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>xl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+xl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:uy(n.name,56,"Ma map"),worldSize:Xt(n.worldSize,24,2048,240),spawn:{x:Xt(e.x,-wi,wi,0),y:Xt(e.y,-256,256,.06),z:Xt(e.z,-wi,wi,3),yaw:Xt(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?Co(t.terrain):null,r=t.model?lr({version:1,models:[t.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:uy(t.name,36,"Pi\xE8ce "+(i+1)),x:Xt(t.x,-wi,wi,0),y:Xt(t.y,-256,256,0),z:Xt(t.z,-wi,wi,0),w:Xt(t.w,.05,cy,3),h:Xt(t.h,.05,256,.5),d:Xt(t.d,.05,cy,3),pitch:s?0:Xt(t.pitch,-180,180,0),yaw:s?0:Xt(t.yaw,-360,360,0),roll:s?0:Xt(t.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},uvScale:Xt(t.uvScale,.05,100,1),uvOffsetX:Xt(t.uvOffsetX,-100,100,0),uvOffsetY:Xt(t.uvOffsetY,-100,100,0),uvRotation:Xt(t.uvRotation,-360,360,0),material:Math.round(Xt(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:Xt(t.grip,0,1.5,.8),gravity:Xt(t.gravity,.05,2.5,1),bounce:Xt(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function dy(n){return yl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...No,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function Uh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function fy(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new sn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+s.x*a),u=l(n.y+s.y*a),d=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(u-n.y)*s.y-(d-n.z)*s.z;return c+=s.x*f,u+=s.y*f,d+=s.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>wi||Math.abs(d)>wi||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var vl="gorilla-lab-custom-map-v1";function py(n){let e=new Blob([JSON.stringify(yl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function my({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(G=>G.half&&G.mesh?.isObject3D).map(G=>G.mesh)),c=new xt;n.add(c);let u=[],d=[],f=new $s,h=new Map,p=0,x=null,m="",g=-1,b=-1,w="",v="",C=new et(1,1,1),A=new Be(C,new yt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let L=new Vi,U=new M,S=new M,_=document.querySelector("#map-note");function T(G){w=G,_.textContent=G}function F(){d.length>=20&&d.shift(),d.push(JSON.stringify(x))}function N(G,ge){let Me=h.get(G);if(!Me){Me={materials:new Set,texture:null,failed:!1},h.set(G,Me);let E=Z=>{if(!(h.get(G)!==Me||Me.failed)){Me.failed=!0;for(let $ of Me.materials)$.map=null,$.needsUpdate=!0;Me.texture?.dispose(),Z&&T(Z)}},Y=f.load(G,Z=>{(Z.image.width>2048||Z.image.height>2048)&&E("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>E());Me.texture=Y,Y.colorSpace=pt,Y.wrapS=Y.wrapT=xi}return Me.materials.add(ge),ge.map=Me.failed?null:Me.texture,Me}function k(){for(let[G,ge]of h)ge.materials.size||(h.delete(G),ge.failed||ge.texture.dispose())}function W(G){let ge=e.mapMaterial(G.material,r());if(!G.texture&&G.color==="#ffffff")return{material:ge,custom:!1};let Me=ge.clone();return Me.onBeforeCompile=ge.onBeforeCompile,Me.customProgramCacheKey=ge.customProgramCacheKey,Me.color.multiply(new De(G.color)),{material:Me,custom:!0,ownTexture:G.texture?N(G.texture,Me):null}}function V(G){c.remove(G.mesh),G.mesh.geometry.dispose(),G.vegetation&&fx(G.vegetation),G.custom&&(G.ownTexture?.materials.delete(G.mesh.material),G.mesh.material.dispose())}function J(G,ge){if(G.model){let z=Eo(G.model);z.scale(G.w,G.h,G.d);let te=gs(),se=new Be(z,te);se.position.set(G.x,G.y,G.z),se.rotation.set(Oe.degToRad(G.pitch),Oe.degToRad(G.yaw),Oe.degToRad(G.roll??0),"YXZ"),se.castShadow=se.receiveShadow=!0,se.userData.mapIndex=ge,G.model.kind==="prop"&&(se.visible=!1),c.add(se);let fe=new M(G.w/2,G.h/2,G.d/2),R={mesh:se,position:se.position,quaternion:se.quaternion,half:fe,min:fe.clone().negate(),shape:ui(fe),friction:G.grip,gravity:G.gravity,bounce:G.bounce,zone:!0,type:G.material};return{mesh:se,collider:R,custom:!0,model:!0}}let{material:Me,custom:E,ownTexture:Y}=W(G),Z=new Be(ly(G.terrain?ux(G):Lh(G.w,G.h,G.d),G),Me);Z.position.set(G.x,G.y,G.z),Z.rotation.set(Oe.degToRad(G.pitch),Oe.degToRad(G.yaw),Oe.degToRad(G.roll??0),"YXZ"),Z.castShadow=Z.receiveShadow=!0,Z.userData.mapIndex=ge,c.add(Z);let $=new M(G.w/2,G.h/2,G.d/2),D={mesh:Z,position:Z.position,quaternion:Z.quaternion,half:$,min:$.clone().negate(),shape:ui($),friction:G.grip,gravity:G.gravity,bounce:G.bounce,zone:!0,type:G.material};if(!G.terrain)return{mesh:Z,collider:D,custom:E,ownTexture:Y};let X=dx(G);return X&&Z.add(X),{mesh:Z,collider:hx(G,Z),custom:E,ownTexture:Y,vegetation:X}}function B(){for(let G of u){let ge=x?.pieces[G.mesh.userData.mapIndex];if(!ge||G.ownTexture||G.model)continue;let Me=e.mapMaterial(ge.material,r());G.custom?G.mesh.material.map!==Me.map&&(G.mesh.material.map=Me.map,G.mesh.material.needsUpdate=!0):G.mesh.material=Me}}function ae(){for(let ge of u)V(ge);u.length=0;let G=x?.pieces??[];m=x?"custom-"+or(JSON.stringify(x)):"",o.forEach(ge=>ge.visible=!x||x.arenaBase&&!l.has(ge));for(let ge=0;ge<G.length;ge++)u.push(J(G[ge],ge));if(k(),x){let ge=x.arenaBase?a.filter(Me=>!l.has(Me.mesh)):[];e.boxes.splice(0,e.boxes.length,...ge,...u.filter((Me,E)=>G[E].solid&&G[E].model?.kind!=="prop").map(Me=>Me.collider))}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),s(),x)try{localStorage.setItem(vl,JSON.stringify(x))}catch{}else try{localStorage.removeItem(vl)}catch{}}function ce(G){let ge=yl(G);p++,d.length=0,x=ge,g=b=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),ae(),i(x.spawn.yaw),T("Map : "+x.name+" \xB7 "+x.pieces.length+" pi\xE8ces")}function ie(){p++,x=null,d.length=0,g=b=-1,t.set(0,0,3),ae(),i(0),T("Ar\xE8ne int\xE9gr\xE9e")}function oe(){ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Uh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function Se(){if(!d.length)return T("Rien \xE0 annuler.");x=yl(d.pop()),g=b=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),ae(),T("Derni\xE8re modification annul\xE9e.")}function me(){x?py(x):T("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function de(G,ge,Me,E){x&&(F(),x.spawn={x:G,y:ge,z:Me,yaw:Oe.radToDeg(E)},t.set(G,ge,Me),ae(),T("Point de d\xE9part m\xE9moris\xE9."))}function ee(G,ge,Me,{mode:E,piece:Y,head:Z,feet:$}){L.set(G,ge),L.far=12;let D=u.map(I=>I.mesh);E===1&&x?.arenaBase&&D.push(...a.filter(I=>I.heightfield).map(I=>I.mesh));let X=L.intersectObjects(D,!1),z=E>=5?X.find(I=>x?.pieces[I.object.userData.mapIndex]?.terrain):X[0];if(A.visible=!1,!x)return;if(E>=5){let I=z?.object.userData.mapIndex,H=x.pieces[I];if(!H?.terrain||!Me)return;if(F(),E===9){let re=Y.terrain?.detail??H.terrain.detail,j=lx(H.terrain,re);H.terrain=Co({...j,...Y.terrain,heights:j.heights})}else{let re={mode:["raise","lower","smooth","flatten"][E-5],radius:Y.brushRadius,strength:Y.brushStrength,target:H.y};cx(H,z.point.x,z.point.z,re)}ae(),T("Relief modifi\xE9.");return}if(E===2||E===3||E===4){if(!z)return;let I=z.object.userData.mapIndex,H=x.pieces[I];if(Me&&E===2&&(g=I,b=I,T("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Me&&E===3){if(x.pieces.length===1)return T("Garde au moins une pi\xE8ce dans la map.");F(),x.pieces.splice(I,1),g=b=-1,ae(),T("Pi\xE8ce supprim\xE9e.")}Me&&E===4&&(F(),Object.assign(x.pieces[I],{material:Y.material,grip:Y.grip,gravity:Y.gravity,bounce:Y.bounce,solid:Y.solid,texture:Y.texture}),ae(),T("Surface modifi\xE9e.")),z&&(A.position.copy(z.object.position),A.rotation.copy(z.object.rotation),A.scale.set(H.w,H.h,H.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(E===3?"#ff8271":"#ffe2a2"));return}if(!z)return;let te=b>=0?x.pieces[b]:Y;if(z.object.userData.mapIndex===b)return;U.copy(z.face.normal).transformDirection(z.object.matrixWorld);let se=te.terrain?{...te,x:Math.round(z.point.x*2)/2,y:z.point.y,z:Math.round(z.point.z*2)/2,pitch:0,yaw:0}:fy(z.point,U,te);if(!se)return;A.position.set(se.x,se.y,se.z),A.rotation.set(Oe.degToRad(se.pitch),Oe.degToRad(se.yaw),Oe.degToRad(se.roll??0),"YXZ"),A.scale.set(se.w,se.h,se.d),A.updateMatrixWorld(!0),A.visible=!0;let fe=new nn().setFromObject(A),R=new nn(new M(Z.x-.26,$+.01,Z.z-.26),new M(Z.x+.26,Z.y+.19,Z.z+.26)),y=se.solid&&fe.intersectsBox(R);if(A.material.color.set(y?"#fd7763":"#8be4b9"),Me){if(y)return T("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(b<0&&x.pieces.length>=xl)return T("Limite de "+xl+" pi\xE8ces atteinte.");F(),b>=0?(x.pieces[b]=se,b=-1):x.pieces.push(se),ae(),T("Pi\xE8ce pos\xE9e \xB7 "+x.pieces.length+" pi\xE8ces")}}let ne=document.querySelector("#map-file"),xe=document.querySelector("#map-url");ne.onchange=async()=>{let G=ne.files[0];if(!G)return;let ge=++p;ne.value="";try{if(G.size>Dh)throw Error("Map trop lourde.");let Me=await G.text();ge===p&&ce(Me)}catch(Me){ge===p&&T(Me.message)}};async function Pe(G){let ge=++p;try{let Me=new URL(G,location.href);if(!["http:","https:"].includes(Me.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let E=await fetch(Me,{credentials:"omit"});if(ge!==p)return;if(!E.ok)throw Error("URL de map inaccessible ("+E.status+").");if(Number(E.headers.get("content-length"))>Dh)throw Error("Map trop lourde.");let Z=await E.text();ge===p&&ce(Z)}catch(Me){ge===p&&T(Me.message)}}return document.querySelector("#map-load-url").onclick=()=>Pe(xe.value),document.querySelector("#map-export").onclick=me,document.querySelector("#map-reset").onclick=ie,{placedModels:()=>x?.pieces.filter(G=>G.model?.kind==="prop")??[],modelPieces:()=>x?.pieces.filter(G=>!G.terrain&&G.name!=="Sol")??[],refreshMaterials:B,load:ce,loadURL:Pe,reset:ie,blank:oe,undo:Se,save:me,edit:ee,recenter:de,inform:T,clearGhost(){A.visible=!1},get active(){return!!x},get builtIn(){return!x||x.arenaBase===!0},get status(){return w},get yaw(){return x?.spawn.yaw??0},get nodes(){return x?.pieces.length??0},get name(){return x?.name??null},get signature(){return m}}}var bp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function gy(){let n=new Be(new $t(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+bp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function xy(n){let e=new Ws,t=new Ht;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Ae(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},s=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+bp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),r=new Be(new $t(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let w=l[b],v=Math.max(32,Math.round(w.viewport.z)),C=Math.max(32,Math.round(w.viewport.w)),A=a[b];A?(A.width!==v||A.height!==C)&&A.setSize(v,C):A=a[b]=new Rn(v,C,{type:o?Mi:kn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=b===0&&m,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function yy(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function vy(n,e,t){let i=new en({color:16777215,vertexColors:!0,flatShading:!0}),s=new Wt(.16,.25,3.15,9,12),r=s.attributes.position,o=new De,a=[];for(let ie=0;ie<r.count;ie++){let oe=Math.round((r.getY(ie)+1.575)/3.15*12),Se=Math.floor((Math.atan2(r.getX(ie),r.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+oe*.002,.35,.35+oe%3*.032+Se%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new ke(a,3));let l=new xt;l.position.set(xp.x,0,xp.z),l.rotation.z=-.14,n.add(l);let c=new Be(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,oe,Se=.85){let me=ie.getWorldPosition(new M),de=ie.getWorldQuaternion(new qe);e.push({half:oe,min:oe.clone().negate(),position:me,quaternion:de,mesh:{position:me,quaternion:de},shape:ui(oe),friction:Se,gravity:1})}for(let ie=0;ie<4;ie++){let oe=new Lt;oe.position.y=(ie+.5)*3.15/4,l.add(oe);let Se=.237-ie*.022;u(oe,new M(Se,.398,Se))}let d=[],f=[],h=3.14;function p(ie,oe,Se,me){d.push(...ie,...oe,...Se),o.setHSL(.25+me*.043,.54,.28+me*.17);for(let de=0;de<3;de++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let me=function(de,ee){let ne=de*Se;return[Math.cos(oe)*ne-Math.sin(oe)*ee,h+Math.sin(de*Math.PI)*.38-de*de*.54+ie%3*.055,Math.sin(oe)*ne+Math.cos(oe)*ee]},oe=ie*2.39996,Se=1.35+ie%4*.2;for(let de=0;de<7;de++){let ee=de/7,ne=(de+1)/7,xe=.285*Math.sin(Math.PI*ee)**.7,Pe=.285*Math.sin(Math.PI*ne)**.7;for(let G of[-1,1]){let ge=me(ee,xe*G),Me=me(ne,Pe*G);ge[1]-=.065,Me[1]-=.065,p(me(ee,0),ge,Me,.31+de%4*.14),p(me(ee,0),Me,me(ne,0),.47+ie%3*.16)}}}let x=new $e;x.setAttribute("position",new ke(d,3)),x.setAttribute("color",new ke(f,3)),x.computeVertexNormals();let m=new Be(x,new en({vertexColors:!0,side:qt,flatShading:!0}));m.castShadow=!0,l.add(m);let g=new Mt({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let ie=0;ie<5;ie++){let oe=ie*Math.PI*2/5,Se=new Be(new Dt(.124,1),g);Se.position.set(Math.cos(oe)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(oe)*(.25+ie%2*.1)),Se.scale.set(.91,1.16,.91),Se.castShadow=!0,l.add(Se),b.push(Se)}l.updateMatrixWorld(!0);let w=[],v=[],C=new en({color:"#485d5d",flatShading:!0});function A([ie,oe],Se,me){let de=new Be(new et(.095,.68,.11),C);de.position.set(ie,.34,oe+.46),de.castShadow=de.receiveShadow=!0,n.add(de),u(de,new M(.0475,.34,.055));let ee=new xt;ee.position.set(ie,.85,oe+.4),ee.rotation.x=-.35,n.add(ee);let ne=new Be(new et(.64,.36,.055),new en({color:"#182831"}));ee.add(ne);let xe=document.createElement("canvas");xe.width=512,xe.height=96;let Pe=xe.getContext("2d"),G=new Zn(xe);G.colorSpace=pt;let ge=new Be(new $t(.61,.095),new yt({map:G}));ge.position.set(0,.116,.03),ee.add(ge);let Me=.592/me.length,E=me.map(([Z,$],D)=>{let X=new Be(new et(Me-.012,.155,.04),new en({color:"#478086"}));X.position.set(-.296+Me*(D+.5),-.045,.046),ee.add(X),w.push(X),X.userData.touchWidth=Me-.012;let z=document.createElement("canvas");z.width=208,z.height=172;let te=new Zn(z);te.colorSpace=pt;let se=new Be(new $t(Me-.017,.139),new yt({map:te}));se.position.z=.0205,X.add(se);let fe=-1/0;return X.userData.action=()=>{let R=performance.now();R-fe<250||(fe=R,$(),L(),X.position.z=.036,setTimeout(()=>{X.position.z=.046},115))},{label:Z,context:z.getContext("2d"),texture:te}});function Y(){Pe.fillStyle="#182831",Pe.fillRect(0,0,512,96),Pe.fillStyle="#ffe1a0",Pe.font="bold 38px system-ui",Pe.fillText(Se,17,62,478);for(let Z of E){let $=Z.context;$.fillStyle="#386269",$.fillRect(0,0,208,172),$.fillStyle="#fff2d5",$.textAlign="center",$.font="bold 27px system-ui";let D=(typeof Z.label=="function"?Z.label():Z.label).split("|");D.forEach((X,z)=>$.fillText(X,104,(D.length>1?68:97)+z*37,188)),Z.texture.needsUpdate=!0}G.needsUpdate=!0}v.push(Y)}function L(){for(let ie of v)ie()}A(Bo.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Oo[0])],["Boule",()=>t.spawn(1,Oo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Oo[0])],["Vider",t.clear]]),A(Bo.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Oo[1])],["Sph\xE8re",()=>t.spawn(5,Oo[1])]]),A(Bo.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),A(Bo.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),A(Bo.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),L();let U=new xt,{x:S,y:_,z:T}=yp;U.position.set(S,_,T),n.add(U);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let oe=[.9,.58,.27][ie],Se=new Be(new Qt(oe,20),new en({color:F[ie],side:qt}));Se.position.z=ie*.012,U.add(Se)}let N=new Be(new et(.14,1.5,.14),C);N.position.set(0,.75-_,-.11),U.add(N);let k=0,W=document.createElement("canvas");W.width=256,W.height=64;let V=W.getContext("2d"),J=new Zn(W);J.colorSpace=pt;let B=new Be(new $t(1.4,.35),new yt({map:J,side:qt}));B.position.set(0,2.64-_,.02),U.add(B);function ae(){V.fillStyle="#182831",V.fillRect(0,0,256,64),V.textAlign="center",V.font="bold 28px system-ui",V.fillStyle="#fff0ce",V.fillText("CIBLE  \xB7  "+k,128,42),J.needsUpdate=!0}function ce(ie){for(let oe of ie){if(!oe.beforePhysics||oe.owner||oe.frozen||!oe.mesh.visible)continue;let Se=oe.beforePhysics,me=oe.mesh.position;if(Se.z<=T||me.z>T||oe.velocity.z>=-1)continue;let de=(Se.z-T)/(Se.z-me.z),ee=Math.hypot(Oe.lerp(Se.x,me.x,de)-S,Oe.lerp(Se.y,me.y,de)-_);ee<=.9+oe.radius*.45&&(k+=ee<.27?3:ee<.58?2:1,ae())}}return ae(),{targets:w,coconuts:b,redraw:L,updateTarget:ce,score:()=>k,setScore(ie){k=ie,ae()}}}function _l(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Ss=(n,e,t)=>n+(e-n)*t,zo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Fh(n,e){let t=Math.floor(n),i=Math.floor(e),s=zo(0,1,n-t),r=zo(0,1,e-i);return Ss(Ss(_l(t,i),_l(t+1,i),s),Ss(_l(t,i+1),_l(t+1,i+1),s),r)}function _y(n,e){return Fh(n,e)*.54+Fh(n*2.07+3.4,e*2.07-6.1)*.26+Fh(n*4.2+9,e*4.2)*.13+Fh(n*8.6,e*8.6-13)*.07}function My(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=r.map((p,x)=>Ss(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),m=0,g=0,b=0;if(c>.025)if(n){let v=_l(p+792,l+677);v>.9988&&(b=(v-.9988)*49e3*zo(.09,.3,c))}else{let[v,C]=s[p],A=2.8*u/(c+.16),L=v*A+3.6,U=C*A-8.1,S=_y(L,U),_=_y(L-.12,U-.09);m=zo(.49,.66,S)*zo(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(S-_)*5+(S-.54)*.8))}let w=n?1:Ss(.94,1,zo(.05,.34,c));i[x]=Ss(h[0],(139+115*g)*w,m)+b,i[x+1]=Ss(h[1],(154+100*g)*w,m)+b*.94,i[x+2]=Ss(h[2],(178+77*g)*w,m)+b*.86,i[x+3]=255}}let a=new yi(i,1024,512,In);return a.colorSpace=pt,a.wrapS=xi,a.magFilter=un,a.minFilter=Pn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function by(){return{day:My(!1),night:My(!0)}}function Nh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Zn(i);return s.colorSpace=pt,s}function Sy(n,e){let{day:t,night:i}=by(),s=new Be(new ai(180,40,20),new yt({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(s);let r=Nh(128,128,(y,I)=>{let H=y.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);H.addColorStop(0,"#fff8df"),H.addColorStop(.12,"#fff3bd"),H.addColorStop(.18,"rgba(255,225,144,.40)"),H.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=H,y.fillRect(0,0,I,I)}),o=new wa(new eo({map:r,blending:jn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=uo,a.needsUpdate=!0;let l=new yo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Wa("#daeaff","#88724c",2.25),u=new Ya("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=f[y]?y:0;let I=f[h];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,u.color.set(I.sun),u.intensity=I.power,d.set(...I.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,s.material.map=h===2?i:t,s.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=m*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let I=u.target.position,H=Math.round(y.x/4)*4,re=Math.round(y.y/4)*4,j=Math.round(y.z/4)*4;I.x===H&&I.y===re&&I.z===j||(I.set(H,re,j),u.position.copy(I).add(d))}let m=0;n.background=new De(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(y,I,H){let[,re,j]=g[I],ye=512;y.save(),y.scale(H/512,H/512),y.fillStyle=re,y.fillRect(0,0,ye,ye);let pe=I+19;function be(){return pe=Math.imul(pe,1664525)+1013904223>>>0,pe/4294967296}if(y.fillStyle=j,I===16){for(let _e=0;_e<16;_e++)for(let he=0;he<16;he++)(he+_e)%2===0&&y.fillRect(he*32,_e*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let _e=I===15?32:64;y.globalAlpha=.48;for(let he=0;he<ye;he+=_e){y.fillRect(0,he,ye,I===8?3:2);for(let we=-_e;we<ye;we+=_e)y.fillRect(we+he/_e%2*(I===2?_e/2:0),he,2,_e)}}else if([4,5,6,7,10,11,12].includes(I)){let _e=I===5?38:I===7?64:18;for(let he=0;he<_e;he++){y.strokeStyle=j,y.globalAlpha=.08+be()*.22,y.lineWidth=I===5?1+be()*8:1+be()*4;let we=be()*ye,ze=I===5?.018:.009;y.beginPath();for(let Te=0;Te<=ye;Te+=8){let Re=we+Math.sin(Te*ze+he)*(I===6||I===7?4:12+he%5*3)+(I===4?Te*.28:0);Te===0?y.moveTo(Te,Re):y.lineTo(Te,Re)}y.stroke()}}else{y.globalAlpha=.27;for(let _e=0;_e<120;_e++){let he=be()*ye,we=be()*ye,ze=2+be()*6;y.beginPath(),y.arc(he,we,ze,0,Math.PI*2),y.fill()}}if(I!==16)for(let _e=0;_e<4400;_e++)y.globalAlpha=.05+be()*.1,y.fillStyle=be()>.5?j:"#222324",y.fillRect(be()*ye,be()*ye,1+be()*4,1+be()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=g.map(([y,I,H,re,j,ye],pe)=>{let be=w.has(pe)?512:256,_e=Nh(be,be,we=>b(we,pe,be));_e.wrapS=_e.wrapT=xi;let he=new Mt({map:_e,roughness:re,metalness:j,flatShading:!0,opacity:ye,transparent:ye<1,depthWrite:ye===1});return he.name=y,he}),C=v.map(y=>y.map.image),A=512,L=v.map(y=>new en({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),U={value:0},S={value:.24},_={value:null},T={value:0};function F(){_.value?.dispose(),_.value=Nh(512,512,(y,I)=>{y.fillStyle="#ffffff",y.fillRect(0,0,I,I);let H=I/52,re=I/64;for(let j of N){if(!j.position||!j.half||j.position.y+j.half.y<.22)continue;let ye=(j.position.x+26)*H,pe=(j.position.z+54)*re,be=Math.min(55,j.half.x*H+5),_e=Math.min(72,j.half.z*re+6);y.save(),y.translate(ye+j.half.y*H*.2,pe+j.half.y*re*.24),y.scale(be,_e);let he=y.createRadialGradient(0,0,.15,0,0,1);he.addColorStop(0,"rgba(22,37,65,.54)"),he.addColorStop(.58,"rgba(36,54,76,.29)"),he.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=he,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...L])y.onBeforeCompile=I=>{I.uniforms.uFocusAmount=U,I.uniforms.uFocusRadius=S,I.uniforms.uLabLightmap=_,I.uniforms.uLabBakedStrength=T,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],k=[];function W(y,I,H,re,j,ye,pe,be=0,_e=0,he=1,we=1,ze=!1){let Te=new Be(ze?new et(j,ye,pe):Lh(j,ye,pe),v[be]);Te.position.set(I,H,re),Te.rotation.x=_e,Te.receiveShadow=!0,Te.castShadow=!0,n.add(Te);let Re=new M(j/2,ye/2,pe/2),We={mesh:Te,position:Te.position,quaternion:Te.quaternion,half:Re,min:Re.clone().negate(),friction:he,gravity:we,name:y,type:be,shape:ui(Re)};return N.push(We),We}let V=jx.map(({name:y,bounds:I,type:H=0,friction:re=.78,gravity:j=1})=>{let{xMin:ye,xMax:pe,zMin:be,zMax:_e}=I;return W(y,(ye+pe)/2,-.33,(be+_e)/2,pe-ye,.66,_e-be,H,0,re,j)});for(let y of Object.values(Kx))for(let I of y)W(...I);let{xMin:J,xMax:B,zMin:ae,zMax:ce}=Yx;W("But\xE9e arri\xE8re",0,1.35,ae+.4,B-J,2.7,.6,2),W("But\xE9e ouest",J+.3,1.05,(ae+ce)/2,.6,2.1,ce-ae,2),W("But\xE9e est",B-.3,1.05,(ae+ce)/2,.6,2.1,ce-ae,2);let{xMin:ie,xMax:oe,zMin:Se,zMax:me}=Fo.hills.bounds,de=oe-ie,ee=me-Se,ne=16,xe=64,Pe=new $t(de,ee,ne,xe).rotateX(-Math.PI/2).translate(ie+de/2,0,Se+ee/2),G=Pe.attributes.uv;for(let y=0;y<G.count;y++)G.setXY(y,G.getX(y)*de/2.6,G.getY(y)*ee/2.6);let ge=Pe.attributes.position,Me;function E(y){if(Me===y)return;Me=y;let I=Me*.017;for(let H=0;H<ge.count;H++){let re=ge.getX(H),j=ge.getZ(H),ye=Math.sin(Math.PI*Oe.clamp((re-ie)/de,0,1)),pe=Math.min(1,(j-Se)*.48,(me-j)*.48),be=.93+.56*Math.sin(j*.36+I)+.32*Math.cos(re*.67+j*.26+I*1.4)+.19*Math.sin(j*.81+I*.67);ge.setY(H,Math.max(0,ye*pe*be))}ge.needsUpdate=!0,Pe.computeVertexNormals(),Pe.computeBoundingSphere()}E(Zx);let Y=new Be(Pe,v[3]);Y.receiveShadow=Y.castShadow=!0,n.add(Y);let Z=(y,I)=>{let H=Oe.clamp((y-ie)/de*ne,0,ne-1e-6),re=Oe.clamp((I-Se)/ee*xe,0,xe-1e-6),j=Math.floor(H),ye=Math.floor(re),pe=H-j,be=re-ye,_e=ne+1,he=ye*_e+j,we=ge.getY(he),ze=ge.getY(he+1),Te=ge.getY(he+_e),Re=ge.getY(he+_e+1);return pe+be<=1?we+(ze-we)*pe+(Te-we)*be:Re+(Te-Re)*(1-pe)+(ze-Re)*(1-be)};N.push({heightfield:!0,mesh:Y,height:Z,...Fo.hills.bounds,friction:.81,gravity:1});function $(y,I,H,re,j=1.45){let ye=Nh(384,72,(be,_e,he)=>{be.fillStyle="#202a32",be.fillRect(0,0,_e,he),be.fillStyle=re,be.font="bold 31px system-ui",be.textAlign="center",be.fillText(y,_e/2,48,_e-20)}),pe=new Be(new $t(3.2,.6),new yt({map:ye,side:qt}));pe.position.set(I,j,H),n.add(pe),k.push(pe)}for(let y of Object.values(Fo)){$(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:I,xMax:H,zMin:re,zMax:j}=y.bounds,ye=new Ea(new $e().setFromPoints([new M(I,.025,re),new M(H,.025,re),new M(H,.025,j),new M(I,.025,j)]),new vi({color:y.color,transparent:!0,opacity:.72}));n.add(ye),k.push(ye)}$("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),$("MURS HAUTS",3,-31,"#e8d2ff"),$("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let D=new Mt({color:"#c8e6ed",metalness:1,roughness:.16}),X=new Be(new Dt(.54,2),D);X.position.set(Ph.x,Ph.y,Ph.z),X.castShadow=!0,n.add(X);let z=g.map((y,I)=>{let{x:H,z:re}=$x(I);return W("\xC9chantillon "+g[I][0],H,.325,re,.65,.65,.65,I,0,1,1,!0).mesh}),te=new Qt(1,12).rotateX(-Math.PI/2),se=new yt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function fe(y){let I=new Be(te,se);return I.scale.setScalar(y),n.add(I),I}function R(y,I,H,re,j,ye,pe,be){let _e=I>=3;e.shadowMap.enabled=_e,u.castShadow=_e,se.opacity=I===2?.17:.11,T.value=be?.38+H*.04:0;let he=I>=9?2048:I>=6?1024:I>=4?512:256;u.shadow.intensity=.45+I*.055,u.shadow.radius=.65+I*.12;let we=13+I*1.2;Object.assign(u.shadow.camera,{left:-we,right:we,top:we,bottom:-we}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==he&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(he,he)),o.visible=j,pe!==A&&(A=pe,v.forEach((Te,Re)=>{let We=Te.userData.texture??Te.map,q=w.has(Re)?pe:Math.min(256,pe);if(We.image.width===q)return;let Ce=document.createElement("canvas");Ce.width=Ce.height=q;let Le=Ce.getContext("2d");q>512?b(Le,Re,q):Le.drawImage(C[Re],0,0,q,q);let Ne=new Zn(Ce);Ne.colorSpace=We.colorSpace,Ne.wrapS=We.wrapS,Ne.wrapT=We.wrapT,Ne.repeat.copy(We.repeat);for(let Ee of[Te,L[Re]])Ee.userData.texture=Ne,Ee.map=Ne,Ee.needsUpdate=!0;We.dispose()}));let ze=y>=4;for(let Te of N)Te.mesh?.isMesh&&!Te.zone&&(Te.mesh.material=ze?v[Te.type]:L[Te.type]);Y.material=ze?v[3]:L[3];for(let Te=0;Te<z.length;Te++)z[Te].material=ze?v[Te]:L[Te];v.forEach((Te,Re)=>{for(let We of[Te,L[Re]])We.userData.texture||(We.userData.texture=We.map),We.map=ye?We.userData.texture:null,We.color.set(ye?"#ffffff":g[Re][1]),We.needsUpdate=!0}),m=re?.21+H*.067:0,D.metalness=re?.95:.1,D.roughness=re?.13:.46,s.visible=y>=2,p(h)}return{boxes:N,floors:V,probe:X,display:z,visual:R,shadow:fe,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Me},setHillSeed:E,bakeLightmap:F,mapMaterial:(y,I)=>I>=4?v[y]:L[y],builtObjects:[...N.map(y=>y.mesh).filter(y=>y?.isObject3D),X,...k],materials:[...v,...L],focus(y,I,H){U.value=y?I*.75:0,S.value=.07+H*.058}}}var Qy="R37",As=document.getElementById("game");As instanceof HTMLCanvasElement||(As=document.createElement("canvas"),As.id="game",As.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(As));var vr=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ke;try{Ke=new qu({canvas:As,antialias:!vr,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ke.xr.enabled=!0;Ke.xr.setReferenceSpaceType("local-floor");Ke.shadowMap.type=ja;Ke.shadowMap.autoUpdate=!1;var wy=-1/0;Ke.toneMapping=nu;Ke.toneMappingExposure=1.15;var At=new Ws;At.fog=new ba("#a6d4ea",55,135);var dt=new xt,td=new xt,Jt=new Ht(70,1,.035,210);dt.add(td);td.add(Jt);At.add(dt);var St=Sy(At,Ke),bA=xy(Ke),Wh=gy();At.add(Wh);var SA=yy(St.probe),O=Sx(vr),wA={...O};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(O.stepVolume=n)}catch{}var Ps=oy();for(let n of["pointerdown","keydown"])addEventListener(n,Ps.unlock,{passive:!0});var TA=ay(At),gr={normal:new M,surface:null},qh=[.18,.17,.105].map(n=>({radius:n,position:new M})),kp=new M(No.x,No.y,No.z);dt.position.copy(kp);var an=new M,Vo=new M,Rt=new M,Ty=new M,$n=new M,vn=new M,Ay=new M,Xo=new M,ws=new M,Ey=new M,Ts=new M,Cy=new M,Bh=new M,AA=.105,Oh=new M,Xh=!1,Ti=!1,Gp=0,Hp=null,wl=[],Wp=100,Yt=new M(0,1,0),ts=new qe,bt=0,Qi=0,_r=0,di=0,Yo=NaN,Yh=!1,Sp=0,xr=0,wp=0,zh=0,Ho=0,Wo=0,qo=0,tn=O.quality,Tl=72,Zt=!1,ev="left",ct=new URLSearchParams(location.search).has("room")?5:0,qp=0,Xp=0,Yp=0,jt=!0,Ry=0,EA=[],Vh=[],ns=St.boxes,CA=new Dt(1,0),tv=1+Math.floor(Math.random()*(Yu.length-1)),nv=Zu(tv),{hand:RA,fur:PA}=nv;function IA(n,e,t,i,s,r,o,a){let l=new Be(CA,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var nd=Qf(localStorage),LA=nd.models.length?"|atelier-"+or(JSON.stringify(nd)):"",$i=nx(nd)??nv.createHead();$i.visible=!1;At.add($i);var Go=new M,Zh=new qe,Py=new M,DA=new M,Iy=new sn(0,0,0,"YXZ"),Lp=new M,Tp=new M,Ji=new Ae,Ly=new qe,Dp=9.81,iv=null,Ap=new qe,Dy=[null,null];function id(){return .24+O.arms*.036}function UA(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=Oe.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=Oe.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=Oe.lerp(r[2],i,s),n.skin.pose(r,!O.body)}var Ut=["left","right"].map(n=>{let e=$u(n,RA,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new qe},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Rs=new ah(M,Ut,Bx),sv=Ku(PA,Ut.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ut){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var Ei=sv.mesh;At.add(Ei);function FA(n,e){if(O.body){Ap.copy(Ei.quaternion).invert();for(let t=0;t<Ut.length;t++){let i=Ut[t];Dy[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Ei.position).applyQuaternion(Ap),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Ap))}sv.pose(Dy,id(),n,e,O.hands)}}var wn=ey(),rv=[0,1,2,3,4,5],ov=[7,8,9,10,11,12,13,14],Ll=15,Uy=ui(new M(.13,.088,.115)),NA=new et(.26,.176,.23),BA=new Mt({color:"#536771",roughness:.36,metalness:.28});wn[Ll]={name:"Cam\xE9ra du spectateur",geo:NA,material:BA,shape:Uy,lowShape:Uy,mass:1.2};var{props:OA,animate:zA}=ny(),VA=tx(nd).slice(0,36),Zp=[],El=[];function av(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=bs(t??s.geo,i);e.push(wn.length),wn.push({...s,shape:r,lowShape:r})}}av(OA,Zp);av(VA,El);var lv=[...rv,...ov,...Zp,...El];wn[8].properties={supportWhileHeld:!0};wn[11].properties={supportWhileHeld:!0};function kA(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of wn)n.supportAxis=kA(n);function GA(n){let e=new Be(new Wt(.058,.074,.1,12).rotateX(Math.PI/2),new Mt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new Qt(.048,12),new yt({color:"#7bd7ed",side:qt}));t.position.z=-.203,n.add(t);let i=new Be(new et(.045,.013,.012),new yt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function cv(n,e=!1){let t=wn[n];if(!t)return null;let i=new Be(t.geo,e?Ih(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Ll&&GA(i),i}var Tt=[],Fy=[],Is={held:null},jo=new Map,Ki=0,HA=1,Ml=new qe,Cl=new qe,bl=new M,sd=new M,Es=new M,Up=new M,Fp=new M;function WA(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){sd.set(0,0,-1).applyAxisAngle(Yt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(bl.copy(n).addScaledVector(sd,r),bl.y+=.15,!Uo(n,bl,Math.min(.2,t*.5),ns,Up,Fp)&&!Tt.some(o=>o.mesh.position.distanceToSquared(bl)<(t+o.radius+.07)**2))return bl}}return null}function Sr(n,e,t,i=!1){let s=wn[n];if(!s)return null;if(!e&&(t?Es.set(t.x,t.y,t.z):Ke.xr.isPresenting?Es.copy(Rt):Jt.getWorldPosition(Es),e=WA(Es,t?.yaw??Qi,s.shape.radius),!e))return i||hi("Aucun espace libre pour cet objet."),null;let r=cv(n);r.position.copy(e),At.add(r);let o=O.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:HA++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:O.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new qe,shadow:St.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Ll,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),Tt.push(a),gl(a,St.boxes),a}function uv(){for(let n of Ut)fi(n,!1);fi(Is,!1);for(let n of jo.values())fi(n,!1)}function fd(){uv();for(let n of Tt)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();Tt.length=0,jo.clear()}function hv(){Qx((n,e)=>Sr(n,e))}hv();function fi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+O.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Dl(){uv();for(let n of Tt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function is(){pd.reset(),dt.position.copy(kp),bt=Oe.degToRad(ft.yaw),_r=0,dt.rotation.y=bt,an.set(0,0,0),Yh=!1,Ti=!1,gr.normal.set(0,0,0),gr.surface=null,Xh=!1,Rs.reset(),Ps.reset(),Ji.set(0,0);for(let n of Ut)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,fi(n,!1)}Dl();function dv(){return O.auto||vr&&!Ke.xr.isPresenting}function rd(){return dv()?Math.min(O.shadowQuality,tn):O.shadowQuality}function Rl(){return dv()?Math.min(O.lightQuality,tn):O.lightQuality}function Ri(){let n=O.texturePower;St.visual(tn,O.shadows?rd():0,Rl(),O.reflections,O.bloom,O.textures,2**(n-1),O.lightmap),ft.refreshMaterials?.(),Ke.shadowMap.needsUpdate=!0,St.setTimeOfDay(Ye.remoteLight??O.timeOfDay-1),Np=ld.slice(0,Rl()>=8?3:Rl()>=4?2:1),fm.value=O.shaderMode-1;let e=Ke.xr.isPresenting&&Ke.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(O.focus&&!e,O.focusStrength,O.focusSize),Ke.toneMappingExposure=.58+O.exposure*.114,Nv.value=.55+O.contrast*.09,Bv.value=O.saturation*.2,Ov.value=(O.warmth-5)*.022,Ke.xr.setFoveation(O.focus?Oe.clamp((O.focusStrength+1)*.105+(5-O.focusSize)*.028+(O.auto?(7-tn)*.045:0),0,1):0),Ke.xr.isPresenting||Ul(),jt=!0,Tn.redraw()}var Ny=0,By=0,Oy=0;function Ul(){if(Ke.xr.isPresenting)return;let n=Math.max(1,As.clientWidth||innerWidth),e=Math.max(1,As.clientHeight||innerHeight),t=yx(tn,devicePixelRatio,vr);t!==Oy&&(Ke.setPixelRatio(t),Oy=t),(n!==Ny||e!==By)&&(Ke.setSize(n,e,!1),Ny=n,By=e),Jt.aspect=n/e,Jt.fov=O.viewFov,Jt.updateProjectionMatrix()}addEventListener("resize",Ul);globalThis.visualViewport?.addEventListener("resize",Ul);function qA(n){Object.assign(O,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},ch[n]),tn=O.quality,Wo=qo=Ho=0,Ri()}var Mr=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",is]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",cm]]],["Rendu",[]]],jp=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Jp(){return ct===2?jp[qp][1]:ct===3?mv[Xp][1]:ct===4?tm[Yp][1]:Mr[ct][1]}function fv(n){ct=n,jt=!0}var od=null,$p=[],jh=0,Jh=0,Kp=null,ad=!1,Qp=0,em=0,pv={},ld=Array.from({length:3},()=>{let n=new qa("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),Np=ld,cd=new M;function zy(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(cd);if(e>34**2)return;let t=Np[0];for(let i of Np)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function XA(n){n?Jt.getWorldPosition(cd):cd.copy(Rt);for(let t of ld)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(zy);else if(O.objects)for(let t of Tt)t.materialStyle===3&&zy(t.mesh);let e=20+Rl()*.75;for(let{light:t,mesh:i}of ld)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function Fl(){let n=$p.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;od={game:"Gorilla Lab",version:Qy.toLowerCase(),time:new Date().toISOString(),mode:ad?"VR":"PC",settings:{...O},qualityActive:tn,debug:iv,audio:{volume:O.stepVolume,enabled:O.stepAudio,clipsPlayed:Ps.count,state:Ps.state},performance:{fps:xr,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Kp,renderer:pv,terrainSeed:St.hillSeed,map:ft.active?{name:ft.name,pieces:ft.nodes}:null,objects:{total:Tt.length,held:Tt.filter(t=>t.owner).length,frozen:Tt.filter(t=>t.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:Tn.score(),locomotion:{trackedFrames:em,contactFrames:Qp,launchCount:Gp,lastLaunch:Hp,standingHeight:Number.isFinite(Yo)?Yo:null,viewOffset:di}},document.querySelector("#download-report").disabled=!1,jt=!0}function YA(){od||Fl();let n=URL.createObjectURL(new Blob([JSON.stringify(od,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=YA;document.querySelector("#capture-report").onclick=Fl;Mr[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Fl]);var ZA=Array.from({length:Math.ceil(El.length/8)},(n,e)=>["Atelier"+(El.length>8?" "+(e+1):""),El.slice(e*8,e*8+8)]),mv=[["Basiques",rv],["D\xE9taill\xE9s",ov],["Anim\xE9s",Zp],...ZA].map(([n,e])=>[n,[...e.map(t=>[wn[t].name,()=>um(t)]),["Tout retirer",md]]]);Mr.push(["Spawn",[]]);var tm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ft.blank(),O.mapEdit=!0}],["Annuler placement",()=>ft.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ft.recenter(Rt.x,dt.position.y,Rt.z,Qi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ft.reset(),O.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Hy(!1)],["Utiliser comme t\xEAte",()=>Hy(!0)]]]];Mr.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["\xC9couter un pas",gv],["Capturer un rapport",Fl]]]);function gv(){Ps.unlock().then(()=>Ps.play(O.stepVolume))}function xv(){try{localStorage.setItem("gorilla-lab-step-volume",String(O.stepVolume))}catch{}}var jA=document.querySelector("#section"),kh=document.querySelector("#settings"),JA=document.querySelector("#readings"),nm=[1,.75,.5,.25];function _n(n,e){if(n==="debugSpeed"){O.debugSpeed=Oe.clamp(O.debugSpeed+e,1,nm.length),Rs.reset(),jt=!0;return}if(n==="stepVolume"){O.stepVolume=Oe.clamp(O.stepVolume+e,1,10),xv(),jt=!0;return}if(n==="viewFov"){O.viewFov=Oe.clamp(O.viewFov+5*e,50,105),Ul(),jt=!0;return}if(n==="vrFov"){O.vrFov=Oe.clamp(O.vrFov+5*e,55,100),jt=!0;return}if(n==="shaderMode"){O.shaderMode=(O.shaderMode-1+e+lh.length)%lh.length+1,fm.value=O.shaderMode-1,jt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??O.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else O.timeOfDay=(O.timeOfDay-1+e+3)%3+1;Ri();return}let t={mapMode:9,mapShape:5,mapMaterial:_p.length,mapSurface:4,mapTurn:8,mapTexture:rh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];O[n]=(O[n]-1+e+i)%i+1,jt=!0;return}if(n==="mapEdit"&&!O.mapEdit&&!ft.active&&ft.load(dy(St.boxes)),n==="toolMode"){O.toolMode=(O.toolMode-1+e+ur.length)%ur.length+1,Ke.xr.isPresenting||hi("Outil \xB7 "+ur[O.toolMode-1]),jt=!0;return}if(n==="preset"){let i=Object.keys(ch);O.preset=(O.preset-1+e+i.length)%i.length+1,qA(i[O.preset-1]);return}if(typeof O[n]=="boolean"?O[n]=!O[n]:O[n]=Oe.clamp(O[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ut)i.valid=!1,i.surface=null;if(n==="quality"&&(O.auto=!1,tn=O.quality),n==="auto"&&!O.auto&&(tn=O.quality),n==="movement"||n==="collisions")for(let i of Ut)i.surface=null;if(n==="objects"&&!O.objects&&Dl(),n==="blasterActive"&&O.blasterActive&&(O.toolActive=!1),n==="toolActive"&&O.toolActive&&(O.blasterActive=!1),!O.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ut)i.held?.toolHold&&fi(i,!1);am(!1)}n==="preciseHitboxes"&&yv(),Ri()}function yv(){for(let n of Tt)n.precise=O.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||gl(n,St.boxes)}function vv(){let n=(ct===2?jp:ct===4?tm:null)?.flatMap(e=>e[1])??Jp();for(let[,e]of n)typeof e=="string"&&(O[e]=wA[e]);ct===6&&(xv(),Rs.reset()),ct===0&&is(),ct===1&&(yv(),Dl()),ct===3&&md(),ct===2&&(tn=O.quality),Ri()}function Sl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),$o(),jt=!0},t}function _v(n){return n==="preciseHitboxes"?O[n]?"High":"Low":O[n]?"Actif":"Coup\xE9"}function im(n){if(n==="debugSpeed")return Ye.role?"\xD71 en ligne":"\xD7"+nm[O.debugSpeed-1];if(n==="stepVolume")return O.stepVolume+"/10";if(n==="viewFov")return O.viewFov+"\xB0";if(n==="vrFov")return O.vrFov===100?"Natif":O.vrFov+" %";if(n==="mapTexture")return O[n]===1?"Aucune":rh[O[n]-2];if(n==="terrainResolution")return[8,16,32,48][O[n]-1]+"\xB2";if(n==="shaderMode")return lh[O.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=O[n],t=n==="shadowQuality"?rd():Rl();return t===e?e+"/10":e+"/10 \xB7 "+t+(O.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??O.timeOfDay-1]:n==="mapMode"?Av[O.mapMode-1]:n==="mapShape"?nE[O.mapShape-1]:n==="mapSurface"?iE[O.mapSurface-1]:n==="mapMaterial"?_p[O.mapMaterial-1]:n==="mapTurn"?(O.mapTurn-1)*45+"\xB0":n==="toolMode"?ur[O.toolMode-1]:n==="preset"?Object.keys(ch)[O.preset-1]:n==="texturePower"?[2**(O[n]-1),2**(O[n]-1)].join("\xD7"):O[n]}function Bp(){return ct===2?jp:ct===3?mv:tm}function Mv(){return ct===2?qp:ct===3?Xp:Yp}function bv(n){ct===2?qp=n:ct===3?Xp=n:Yp=n}function Sv(n){return n===Fl?"Capturer":n===gv?"\xC9couter":n===fd||n===md?"Vider":n===is||n===cm?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function $o(){if(jA.textContent=Mr[ct][0],wv.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),kh.replaceChildren(),$A.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),Bp().forEach(([e],t)=>{let i=Sl(e,()=>bv(t));i.setAttribute("aria-pressed",String(Mv()===t)),n.append(i)}),kh.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",kh.append(n)}for(let[n,e]of Jp()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Sl(Sv(e),e)):typeof O[e]=="boolean"?i.append(Sl(_v(e),()=>_n(e,1))):i.append(Sl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+im(e)+" "),Sl("+",()=>_n(e,1))),t.append(i),kh.append(t)}}}var wv=document.querySelectorAll("[data-page]"),$A=document.querySelector("#cloud-access");wv.forEach((n,e)=>n.onclick=()=>{fv(e),$o()});document.querySelector("#restore").onclick=()=>{vv(),$o()};$o();function Tv(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Zn(r);a.colorSpace=pt;let l=new Be(new $t(t,i),new yt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=Tv(640,652,.84,.86,At);fn.mesh.visible=!1;var Kn=Tv(416,84,.32,.065,At);Kn.mesh.visible=!1;var ko=new Ht(75,1,.07,140),Qn=new il(new $t(1.7,1.95),{color:16054015,textureWidth:vr?128:256,textureHeight:vr?128:256,clipBias:.004,multisample:0}),KA=new M(0,0,-1),Gh=new M,Vy=new M;Qn.position.set(Rh.x,Rh.y,Rh.z);Qn.rotation.y=Math.PI;At.add(Qn);var sm=new Be(new et(1.8,2.03,.1),new en({color:"#344650"}));sm.position.copy(Qn.position).z+=.064;At.add(sm);var QA=Qn.onBeforeRender.bind(Qn);Qn.onBeforeRender=()=>{};Qn.visible=!1;var Ep=-1/0;function eE(n,e){if(ko.position.copy(Rt),e){let i=e.transform.orientation;ko.quaternion.set(i.x,i.y,i.z,i.w).premultiply(Zh.setFromAxisAngle(Yt,bt))}else Jt.getWorldQuaternion(ko.quaternion);Vy.set(0,0,-1).applyQuaternion(ko.quaternion),Gh.subVectors(Qn.position,Rt);let t=Gh.length();if(Qn.visible=ft.builtIn&&O.reflections&&t<4&&Gh.dot(KA)<-.15&&Gh.multiplyScalar(1/Math.max(.001,t)).dot(Vy)>.66,!Qn.visible){Ep=-1/0;return}if(!(n-Ep<(vr&&!Ke.xr.isPresenting?110:45))){Ep=n,ko.updateMatrixWorld(!0),Qn.updateMatrixWorld(!0),$i.visible=O.body;try{QA(Ke,At,ko)}finally{$i.visible=!1}}}var Ci=new Vi,Gn=new M,Un=new M,Jo=new M,Hh=new M,ky=new M,Al=null,$h=null,Kh=null,tE=new Set(At.children),Tn=vy(At,St.boxes,{spawn:um,clear:md,resetPlayer:is,resetObjects:cm,resetTree:()=>lm(2,Cv),quality:()=>tn+"/10",resolution:()=>O.resolution+"/10 \xB7 relancer VR",textureSize:()=>im("texturePower"),qualityNext:()=>{O.quality>=10&&(O.quality=0),_n("quality",1)},resolutionNext:()=>{O.resolution>=10&&(O.resolution=0),_n("resolution",1)},textureNext:()=>{O.texturePower>=12&&(O.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),Av=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],nE=["Bloc","Rampe","Mur","Dalle","Terrain"],iE=["Normale","Glace","Caoutchouc","Lune"],Gy=new Map;function sE(){for(let n of ft.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=Gy.get(e);if(t===void 0){let s=Eo(n.model);s.scale(n.w,n.h,n.d);let r=new et(n.w,n.h,n.d),o=bs(r);r.dispose(),t=wn.length,wn.push({id:n.model.id,name:n.model.name,geo:s,material:gs(),shape:o,lowShape:o,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Oe.clamp(n.w*n.h*n.d*9,.18,12)}),Gy.set(e,t)}let i=Sr(t,new M(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Oe.degToRad(n.pitch),Oe.degToRad(n.yaw),Oe.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position))}}var ft=my({scene:At,arena:St,boot:kp,onReset:n=>{fd(),is(),bt=Oe.degToRad(n),ft.builtIn&&hv(),sE()},onVisual:Ri,getLevel:()=>tn,defaultObjects:[...St.builtObjects,...At.children.filter(n=>!tE.has(n)),sm]}),Ye=j0({scene:At,currentMap:()=>(ft.signature||"arena-r25-"+St.hillSeed)+LA,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=cv(n,!0);return e&&Nl(e.material),e},onAction:uE,onStatus:()=>{ct===5&&(jt=!0)},onShot:n=>pd.receiveShot(n,Ye.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??O.timeOfDay-1),jt=!0,Ke.xr.isPresenting||$o()},applyScore:n=>Tn.setScore(n),applyCoconuts:n=>Tn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function Hy(n){let e=ft.modelPieces();if(!e.length||e.length>ar.parts){hi("Compose un mod\xE8le de 1 \xE0 "+ar.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Qf(localStorage);if(t.models.length>=ar.models){hi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:O.modelGrab,frozen:O.modelFrozen,collidable:O.modelCollidable,supportWhileHeld:O.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?hy[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Kf,JSON.stringify(lr(t))),hi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{hi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var Cp=new Map;function rE(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][O.mapShape-1],e=Co({detail:[8,16,32,48][O.terrainResolution-1],amplitude:(O.terrainAmplitude-1)*.34,frequency:.05+O.terrainFrequency*.025,seed:O.terrainSeed,grass:(O.terrainGrass-1)/9,shrub:(O.terrainShrub-1)/9}),t=O.mapTexture-2;return t>=0&&!Cp.has(t)&&Cp.set(t,mx(t).toDataURL("image/webp",.83)),Uh({...n,material:O.mapMaterial-1,yaw:O.mapShape===5?0:(O.mapTurn-1)*45,...Mp[Object.keys(Mp)[O.mapSurface-1]],texture:Cp.get(t)??null,terrain:O.mapShape===5||O.mapMode===9?e:null,brushRadius:.5+O.brushRadius*.5,brushStrength:O.brushStrength*.15})}function oE(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Gn.set(r.x,r.y-di,r.z).applyAxisAngle(Yt,bt).add(dt.position),ts.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(ts).applyAxisAngle(Yt,bt),ft.edit(Gn,Un,i,{mode:O.mapMode,piece:rE(),head:Rt,feet:dt.position.y}),i&&(jt=!0)}function aE(n){if(!ft.builtIn||!n.valid||n.held||n.remoteHeld||Zt)return;let e=null;for(let t of Tn.targets)if(t.getWorldPosition(ky),!(n.mesh.position.distanceToSquared(ky)>.11**2)&&(t.worldToLocal(Hh.copy(n.mesh.position)),Math.abs(Hh.x)<t.userData.touchWidth*.5+.025&&Math.abs(Hh.y)<.095&&Math.abs(Hh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function rm(n,e=null){n.getWorldPosition(Jo),n.visible=!1,O.objects||(O.objects=!0);let t=Sr(6,Jo);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function Op(n,e,t){if(!ft.builtIn)return;Ci.set(n,e),Ci.far=5.5;let i=Ci.intersectObjects([...Tn.targets,...Tn.coconuts.filter(r=>r.visible)],!1);Ci.far=1/0;let s=i[0];s&&(br.visible=!0,br.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:Tn.coconuts.indexOf(s.object)}):rm(s.object,e),$o()))}var Wy=new M,Ev=new qe,om=Qu(At),pd=Mx({scene:At,rig:dt,camera:Jt,arena:St,objects:Tt,spectator:Ye}),tP=om.mesh,Qh=new M,es=new qe,ud=new M,Zo={mode:0,position:ud,quaternion:es,end:Qh},qy=new M,lE=new M,Xy=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var hd=new M,cE={position:ud,quaternion:es,pressure:[.1,.66,.08]},Rp=new M,dd=new qe;function am(n){Is.held&&fi(Is,n)}function lm(n,e){if(Ye.role==="pc"){hi("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||hi("Attends la connexion \xE0 l\u2019h\xF4te.")}function md(){lm(0,fd)}function cm(){lm(1,Dl)}function Cv(){for(let n of Tn.coconuts)n.visible=!0}function um(n,e=null){if(O.objects=!0,Ye.role==="pc"){hi("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||hi("Attends la connexion \xE0 l\u2019h\xF4te."):Sr(n,e)}function uE(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)O.timeOfDay=n.typeId+1,Ri();else if(n.mode===3)[fd,Dl,Cv][n.typeId]();else if(ft.builtIn){let u=Tn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(Jo).distanceToSquared(e)<=5.8**2&&!Uo(Es.copy(e),Jo,.01,ns,Up,Fp)&&rm(u)}return}if(n.type==="spawn"){lv.includes(n.typeId)&&(O.objects=!0,Sr(n.typeId,null,e));return}let t=Tt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,s=e.id*3+i,r=n.type==="hold"?1:n.mode,o=jo.get(s);if(!o&&r===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},jo.set(s,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),fi(o,!0)}return}if(!O.objects||r===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Es.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Eh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Uo(l,t.mesh.position,.01,ns,Up,Fp))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}hm(t,r,o,Oe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Cl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Cl))}}function hE(n){if(Ke.xr.isPresenting)for(let t of Ut)t.valid&&t.held&&Pp(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of jo){let s=Ye.getPeer(i.peerId),r=i.hand?s?.avatar?.hands[i.hand-1]:null;if(!s||i.hand&&!r){fi(i,!1),jo.delete(t);continue}let o=i.held;if(!o)continue;let a=r?.quaternion??s.avatar?.tool?.quaternion??s.avatar?.head;a&&i.controllerRotation.copy(a),Es.copy(r?.position??s.avatar?.tool?.position??s),sd.set(0,0,-1).applyQuaternion(i.controllerRotation),Pp(o,Es,sd,i.controllerRotation,n)}let e=Is.held;e&&(Jt.getWorldPosition(hd),Jt.getWorldDirection(Wy),Jt.getWorldQuaternion(es),Pp(e,hd,Wy,es,n))}function Pp(n,e,t,i,s){n.toolHold?Rp.copy(e).addScaledVector(t,n.toolDistance):Rp.copy(n.offset).applyQuaternion(i).add(e),dd.multiplyQuaternions(i,n.relativeRotation),Ox(n,Rp,dd,ns,s)}function Rv(n){return n.customMaterial||(n.mesh.material=Ih(n.mesh.material),n.customMaterial=!0,Nl(n.mesh.material)),n.mesh.material}function dE(n){let e=Rv(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function Pv(n,e,t){Ci.set(n,e),Ci.far=9;let i=Ci.intersectObjects(t,!1)[0];return Ci.far=1/0,Qh.copy(n).addScaledVector(e,i?.distance??9),Uo(n,Qh,.006,ns,qy,lE)?(Qh.copy(qy),null):i}function hm(n,e,t,i){if(e===1){if(t?.held){t===Is?am(!0):fi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??es;n.relativeRotation.multiplyQuaternions(Ev.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)At.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),Tt.splice(Tt.indexOf(n),1);else if(e===4&&!n.protected){hd.copy(n.mesh.position).addScaledVector(Yt,n.radius*2+.08);let s=Sr(n.netType,hd);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=Ih(n.mesh.material),s.customMaterial=!0,Nl(s.mesh.material)),gl(s,St.boxes))}else if(e===5){let s=Rv(n);s.color.set(Xy[n.paint++%Xy.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,dE(n));jt=!0}}var Cs=[];function Iv(n,e,t,i){if(!O.objects)return;let s=Ye.role==="player";if(Cs.length=0,s)Ye.forEachReplica(a=>Cs.push(a));else for(let a of Tt)!a.owner&&a.mesh.visible&&Cs.push(a.mesh);let r=Pv(n,e,Cs);if(Zo.mode=O.toolMode,i?(ud.copy(i.mesh.position),es.copy(i.controllerRotation)):(Jt.getWorldQuaternion(es),ud.set(.16,-.17,-.43).applyQuaternion(es).add(n)),om.update(Zo),!t)return;if(s){if(O.toolMode===1&&Ki)Ye.sendAction({type:"release",objectId:Ki}),Ki=0;else if(r){let a=r.object.userData.netId;Ye.sendAction({type:"tool",mode:O.toolMode,objectId:a})&&O.toolMode===1&&(Ki=a)}return}let o=r&&Tt.find(a=>a.mesh===r.object);hm(o,O.toolMode,i??Is,r?Oe.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function fE(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;Gn.set(o.x,o.y-di,o.z).applyAxisAngle(Yt,bt).add(dt.position),ts.set(a.x,a.y,a.z,a.w),Un.set(0,0,-1).applyQuaternion(ts).applyAxisAngle(Yt,bt),Iv(Gn,Un,s,i)}function pE(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Gn.set(r.x,r.y-di,r.z).applyAxisAngle(Yt,bt).add(dt.position),ts.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(ts).applyAxisAngle(Yt,bt),Op(Gn,Un,i)}var br=IA(At,new yt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);br.visible=!1;var zp=[],yr=null;function Yy(){let n=fn.ctx;zp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+Qy,25,42),n.font="20px system-ui",n.fillText(xr+" FPS   \xB7   Q "+tn+"/10   \xB7   "+(O.auto?"AUTO":"MANUEL"),390,40);function e(s,r,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(s,r,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,s+o/2,r+a/2+7,o-8),n.textAlign="left",zp.push({x:s,y:r,w:o,h:a,action:c,label:l})}let t=Math.floor(587/Mr.length);if(Mr.forEach(([s],r)=>e(25+r*t,61,t-4,44,s,()=>fv(r),ct===r?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),rl.forEach((s,r)=>{let o=204+r*48;n.fillText("Ar\xE8ne "+(r+1),25,o+29),e(200,o,190,40,"Rejoindre",()=>Ye.connect("player",s)),e(406,o,206,40,"H\xE9berger",()=>Ye.connect("vr",s))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>Zt=!1),fn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&Bp().forEach(([s],r)=>{let o=Mv()===r,a=Math.min(144,Math.floor(586/Bp().length)-4);e(25+r*(a+4),114,a,38,s,()=>bv(r),o?"#546947":"#263d49")}),Jp().forEach(([s,r],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(s,37,a+26),typeof r=="function"?e(406,a,206,36,Sv(r),r):typeof O[r]=="boolean"?e(406,a,206,36,_v(r),()=>_n(r,1),O[r]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>_n(r,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(im(r)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>_n(r,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",vv),e(325,579,287,44,"Fermer",()=>Zt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(dm||(ct===6?"Cyan : prise \xB7 Vert : paume \xB7 Rose : collisions invisibles":ct===4&&ft.status?ft.status.slice(0,64):od?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),fn.texture.needsUpdate=!0}function mE(n){Zt=!Zt,Zt&&(ev=n,Py.set(0,0,-1).applyAxisAngle(Yt,Qi),fn.mesh.position.copy(Rt).addScaledVector(Py,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(Rt),fn.mesh.updateMatrixWorld(!0)),jt=!0}function gE(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;Gn.set(r.x,r.y-di,r.z).applyAxisAngle(Yt,bt).add(dt.position),ts.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(ts).applyAxisAngle(Yt,bt),Ci.set(Gn,Un);let a=Ci.intersectObject(fn.mesh)[0];if(a&&(br.visible=!0,br.position.copy(a.point).addScaledVector(Un,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;zp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),jt=!0}}var gd=xx(),{held:Ai,pressed:ji}=gd,Lv=bx(Ke.domElement,document.querySelector("#touch-fire")),Zy=document.querySelector("#game-settings"),Dv=document.querySelector("#open-settings"),Vp=document.querySelector("#game-hint"),ed=0;function hi(n){Vp.textContent=n,Vp.hidden=!1,ed=performance.now()+2400,dm=n,jt=!0}var dm="";function xd(n){let e=n??!Zy.hidden;Zy.hidden=e,Dv.hidden=!e,e&&Ke.domElement.focus()}Dv.onclick=()=>xd(!1);document.querySelector("#close-settings").onclick=()=>xd(!0);var Pl=gx({canvas:Ke.domElement,enabled:()=>!Ke.xr.isPresenting,onLook:(n,e,t)=>{bt-=n*t,_r=Oe.clamp(_r-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&ji.add(e)},onMenu:()=>xd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ke.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||xd();return}n.code==="Space"&&n.preventDefault(),gd.down(n.code,n.repeat),n.code==="KeyR"&&is()}});addEventListener("keyup",n=>gd.up(n.code));addEventListener("blur",()=>{gd.clear(),Pl.clear(),Lv.clear()});function xE(n,e){if(!O.objects)return!1;let t=Ye.role==="player";if(t&&Ki)return Ye.sendAction({type:"release",objectId:Ki}),Ki=0,!0;if(Is.held)return am(!0),!0;if(Cs.length=0,t)Ye.forEachReplica(s=>Cs.push(s));else for(let s of Tt)!s.owner&&s.mesh.visible&&Cs.push(s.mesh);let i=Pv(n,e,Cs);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:s})&&(Ki=s)}else Jt.getWorldQuaternion(es),hm(Tt.find(s=>s.mesh===i.object),1,Is,Math.max(.75,i.distance));return!0}var Ip=[];function Uv(){return Ip.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!wn[e]||wn[e].properties?.collidable===!1||n.userData.held)return;let t=wn[e],i=O.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=O.preciseHitboxes,s.handCollider??={objectBody:s,friction:.96,gravity:1},Ip.push(s)}),Ip}function yE(){Ye.role!=="vr"||!Ye.remoteSpectator||Tt.some(n=>n.netType===Ll)||Sr(Ll,null,null,!0)}var Il=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Il.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Il.onclick=async()=>{let n;Ps.unlock();try{Il.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ke.xr.setFramebufferScaleFactor(.45+O.resolution*.055),await Ke.xr.setSession(n),Ri(),Tl=n.frameRate||72,wl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=wl.includes(120)?120:wl.find(t=>t>=100)??wl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Tl=n.frameRate||Tl,Wp=Math.min(100,Tl),O.auto&&(tn=Math.min(tn,4),Ho=Wo=qo=0),$p=[],jh=0,Jh=0,Qp=em=Gp=0,Hp=null,ad=!0,Kp=null,Yo=NaN,di=0,is(),Ri(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Il.disabled=!1,document.querySelector("#status").textContent=e.message}};Ke.xr.addEventListener("sessionend",()=>{Il.disabled=!1,Zt=!1,fn.mesh.visible=!1,Kn.mesh.visible=!1,document.body.classList.remove("immersive"),is(),Ul()});function Fv(n){if(!ft.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ft.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function jy(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Zt||!e||n.grip||!O.objects)return;let i=null,s=.15;if(Ye.forEachReplica(r=>{if(r.userData.held)return;let o=wn[r.userData.netType];if(!o||o.properties?.grabbable===!1||r.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Eh(n.target,{mesh:r,shape:o.shape,radius:o.shape.radius});a<s&&(i=r,s=a)}),i){let r=i.userData.netId;Ye.sendAction({type:"hold",objectId:r,hand:t})&&(n.remoteHeld=r)}else if(ft.builtIn){let r=Tn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(Jo).distanceToSquared(n.target)<.06760000000000001);r>=0&&Ye.sendAction({type:"world",mode:2,typeId:r})}}function vE(n,e,t){let i=[...n.session.inputSources];for(let s of Ut){let r=i.find(h=>h.handedness===s.side&&h.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&O.hands&&!O.body,!o){Ye.role==="player"&&jy(s,!1),s.valid=!1,s.surface=null,fi(s,!1);continue}ry(s,o.transform,di,bt,dt.position),s.valid=!0;let a=!!r.gamepad?.buttons[1]?.pressed;if(Ml.copy(s.controllerRotation),UA(s,r.gamepad?.buttons??[],t),Ye.role==="player")jy(s,a);else if(!Zt&&a&&!s.grip&&O.objects&&!s.held){let h=null,p=.15,x=Tn.coconuts.find(m=>m.visible&&m.getWorldPosition(Jo).distanceToSquared(s.target)<.26**2);x&&(h=rm(x));for(let m of Tt){if(m.owner||!m.grabbable||m.mesh.position.distanceToSquared(s.target)>(m.radius+.18)**2)continue;let g=Eh(s.target,m);!x&&g<p&&(p=g,h=m)}h&&!s.held&&(s.held=h,h.owner=s,h.frozen=!1,Cl.copy(Ml).invert(),h.offset.copy(h.mesh.position).sub(s.target).applyQuaternion(Cl),h.relativeRotation.multiplyQuaternions(Cl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&s.grip&&!s.held?.toolHold&&fi(s,!Zt),s.grip=a,s.hasSupport=!1;let l=s.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){dd.multiplyQuaternions(Ml,l.relativeRotation),s.supportOffset.copy(l.spec.supportAxis).applyQuaternion(dd),Xo.copy(l.offset).applyQuaternion(Ml);let h=s.supportOffset.dot(Xo);(Math.abs(h)>.008?h<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(Xo),s.hasSupport=!0}if(s.held?.toolHold){let p=n.getPose(r.targetRaySpace,e)?.transform.orientation;p?s.aimDirection.set(0,0,-1).applyQuaternion(Ev.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Yt,bt):s.aimDirection.set(0,0,-1).applyQuaternion(Ml)}let c=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");c&&!s.menu&&mE(s.side),s.menu=c;let u=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&u&&!s.toolButton&&!Zt&&_n("toolActive",1),s.toolButton=u;let d=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&d&&!s.toolCycle&&O.toolActive&&!Zt&&_n("toolMode",1),s.toolCycle=d;let f=!!r.gamepad?.buttons[0]?.pressed;if(Zt){let h=f&&!s.trigger;(h||!yr||!yr.click&&s.side!==ev)&&(yr={source:r,click:h})}else!Zt&&s.side==="right"&&O.mapEdit?Kh={source:r,click:f&&!s.trigger}:!Zt&&s.side==="right"&&O.toolActive?$h={source:r,hand:s,click:f&&!s.trigger}:!Zt&&!O.blasterActive&&(s.side==="right"||f&&!s.trigger)&&(Al={source:r,click:f&&!s.trigger});s.trigger=f}}function Jy(n,e){let t=n?-Go.y:Math.max(0,-Math.sin(_r)),i=0,s=0,r=0;if(n){Ly.setFromAxisAngle(Yt,-Qi);for(let u of Ut)u.valid&&(Tp.copy(u.gripPosition).sub(Rt).applyQuaternion(Ly),i+=Tp.x-(u.side==="left"?-.2:.2),s+=Tp.z+.24,r++)}let o=r?Oe.clamp(-s/r,-.35,.45):0,a=r?Oe.clamp(i/r,-.35,.35):0,l=1-Math.exp(-e*13),c=-.31*Oe.smoothstep(t,.2,.92)-o*.45;Ji.x=Oe.lerp(Ji.x,c,l),Ji.y=Oe.lerp(Ji.y,-a*.62,l),Iy.set(Ji.x,Qi,Ji.y,"YXZ"),Ei.quaternion.setFromEuler(Iy)}function _E(n,e,t,i,s=i){let r=!!t,o=.43+O.size*.088;if(r){let f=t.transform.position;Number.isFinite(Yo)||(Yo=f.y),di=Oe.clamp(Yo-o,-.65,1.7),td.position.y=-di,$n.set(f.x,f.y-di,f.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(Yh=!1),Math.abs(p)>.67&&!Yh&&!Zt&&(Yh=!0,vn.copy($n).applyAxisAngle(Yt,bt),bt-=Math.sign(p)*Math.PI/4,Ty.copy($n).applyAxisAngle(Yt,bt),dt.position.add(vn.sub(Ty)),Rs.reset(),Xh=!1)}else td.position.y=0,$n.set(0,o,0),Jt.position.copy($n),Jt.rotation.set(_r,0,0,"YXZ");if(Rt.copy($n).applyAxisAngle(Yt,bt).add(dt.position),r){let f=t.transform.orientation;Zh.set(f.x,f.y,f.z,f.w),Go.set(0,0,-1).applyQuaternion(Zh),Go.x**2+Go.z**2>.018&&(Qi=bt+Math.atan2(-Go.x,-Go.z))}else Qi=bt;let a=Fv(Rt),l=9.81*(O.gravity/5)*(a?.gravity??1);Dp=l,Ey.copy(dt.position);let c=Ye.role==="player"?Uv():Tt;if(r){vE(n,e,s),Jy(!0,s),Ut.some(f=>f.valid)&&em++,Vh.length=0;for(let f of ns)Vh.push(f);if(O.collisions&&O.objects)for(let f of c)f.handCollider&&!f.owner&&Vh.push(f.handCollider);Rs.move({head:Rt,dt:i,inputDt:s,gravity:l,settings:O,boxes:Vh,velocity:an,movement:Vo,reach:id()*2+.16});for(let f of Ut)_x(f,O.stepHaptics,s)}else{Jy(!1,s),an.y-=l*i;let f=Number(Ai.has("KeyD"))-Number(Ai.has("KeyA")||Ai.has("KeyQ"))+Pl.movement.x,h=Number(Ai.has("KeyS"))-Number(Ai.has("KeyW")||Ai.has("KeyZ"))+Pl.movement.z,p=Ai.has("ShiftLeft")||Ai.has("ShiftRight");ws.set(f,0,h).clampLength(0,1).applyAxisAngle(Yt,bt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Ti?13:4));an.x=Oe.lerp(an.x,ws.x,x),an.z=Oe.lerp(an.z,ws.z,x);let g=(Pl.consumeJump()||ji.delete("Space"))&&Ti,b=gr.normal,w=!g&&Ti&&b.y>=.62&&(gr.surface?.friction??0)>=.45;g?an.y=3.1+O.jump*.18:w&&(an.y=-(an.x*b.x+an.z*b.z)/b.y),Vo.copy(an).multiplyScalar(i),w&&Vo.addScaledVector(b,-l*i*i)}if(O.collisions&&Xh&&(Xo.copy(Rt).add(Vo),Uo(Cy,Xo,AA,ns,vn,Bh)&&ws.subVectors(Xo,vn).dot(Bh)<0&&Vo.copy(vn).sub(Rt)),dt.position.add(Vo),Rt.copy($n).applyAxisAngle(Yt,bt).add(dt.position),Ti=!1,gr.normal.set(0,0,0),gr.surface=null,O.collisions){Oh.set(0,-1,0).applyQuaternion(Ei.quaternion),Oh.y=0,Oh.addScaledVector(DA.set(0,0,1).applyAxisAngle(Yt,Qi),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,$n.y*.57):$n.y,{radius:p}=qh[f];if(vn.set(Rt.x,dt.position.y+h,Rt.z),f<2&&vn.addScaledVector(Oh,Math.max(0,$n.y-h)),Ay.copy(vn),Ti=mp(vn,p,St.boxes,an,0,3+O.grip,i,f===0?gr:null)||Ti,O.objects)for(let x of c)x.blocksPlayer&&!x.owner&&Xx(vn,p,x,an,Bh)&&Bh.y>.6&&(Ti=!0);mp(vn,p,St.boxes,an,0,3+O.grip,i),ws.subVectors(vn,Ay),dt.position.add(ws),Rt.add(ws);for(let x=0;x<f;x++)qh[x].position.add(ws);qh[f].position.copy(vn)}}if(Ts.subVectors(dt.position,Ey),Ps.update({dt:s,inVR:r,hands:Ut,grounded:Ti,travel:Math.hypot(Ts.x,Ts.z),volume:O.stepVolume,enabled:O.stepAudio}),r){let f=Rs.finish(Ts,an);f.contacts&&Qp++,f.launched&&(Gp++,Hp={handSpeed:f.launchSpeed,velocity:an.toArray(),t:performance.now()})}(ft.active?dt.position.y<-24||Math.abs(dt.position.x)>155||Math.abs(dt.position.z)>155:dt.position.y<-9||Math.abs(dt.position.x)>33||dt.position.z<-57||dt.position.z>13)&&(is(),Rt.copy($n).applyAxisAngle(Yt,bt).add(dt.position)),Cy.copy(Rt),Xh=!0,dt.rotation.y=bt,r&&Jt.position.set(0,0,0);for(let f of Ut)r&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Ts,f.surface?0:1),f.gripPosition.add(Ts)),r||(f.mesh.visible=!1);let u=.72+O.size*.05,d=id()*2*(2/3)/.82;Ei.visible=O.body,$i.position.copy(Rt),r?$i.quaternion.copy(Zh).premultiply(ts.setFromAxisAngle(Yt,bt)):$i.quaternion.setFromEuler(new sn(_r,bt,0,"YXZ")),Lp.set(0,-.145,.045).applyQuaternion($i.quaternion).add(Rt),Ei.position.set(0,.46*d,.04*u).applyQuaternion(Ei.quaternion).negate().add(Lp),FA(u,d),dt.updateMatrixWorld(!0),Jt.updateWorldMatrix(!0,!1)}function ME(n,e){if(zh+=n,wp++,Ho+=n,zh<1||(xr=Math.round(wp/zh),wp=0,zh=0,jt=!0,JA.textContent=xr+" FPS \xB7 qualit\xE9 "+tn+"/10 \xB7 "+(O.auto?"auto":"manuel"),!O.auto||Ho<5))return;Ho=0;let t=e?Math.min(100,Ke.xr.getSession()?.frameRate||Tl):60;e&&(Wp=t),Wo=xr<t-4?Wo+1:0,qo=xr>=t-1?qo+1:0;let i=Oe.clamp(tn+(Wo>=1?-1:qo>=2?1:0),1,10);i!==tn&&(tn=i,Ho=Wo=qo=0,Ri())}St.bakeLightmap();var Nv={value:1},Bv={value:1},Ov={value:0},fm={value:0},$y=new WeakSet;function Nl(n){if(!n||$y.has(n))return;$y.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:Nv,uPhotoSaturation:Bv,uPhotoWarmth:Ov,uLabShader:fm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)Nl(n);At.traverse(n=>{n.isMesh&&![fn.mesh,Kn.mesh,br].includes(n)&&Nl(n.material)});Ri();var Ky=new URLSearchParams(location.search);if(Ky.has("map"))ft.loadURL(Ky.get("map"));else try{let n=localStorage.getItem(vl);n&&ft.load(n)}catch(n){ft.inform(n.message)}function bE(){let n=Ke.xr.isPresenting;return{head:$i.quaternion,hands:n?Ut.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,Zo.mode?cE:null],height:$n.y,armSpan:id()*2,light:O.timeOfDay-1,color:tv,coconuts:Tn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:Zo.mode?Zo:null,gun:pd.gun}}Ke.setAnimationLoop((n,e)=>{let t=Sp?Math.max(0,(n-Sp)/1e3):.014;Sp=n;let i=Math.max(1e-4,Math.min(.035,t)),s=Ye.role?1:nm[O.debugSpeed-1],r=i*s,o=Ke.xr.isPresenting,a=Ke.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(zA(n*.001),ed&&n>ed&&(Vp.hidden=!0,ed=0,dm=""),br.visible=!1,om.hide(),Zo.mode=0,ns=O.collisions?St.boxes:EA,yr=null,Al=null,$h=null,Kh=null,ft.clearGhost(),fn.mesh.visible=!1,!o&&Ye.role==="pc"){Ei.visible=!1;for(let m of Ut)m.mesh.visible=!1}else _E(e,a,l,r,i);let c=!o&&Ye.role==="pc",u=c||Ye.role==="player";if(Ye.role!=="player"){Ki=0;for(let m of Ut)m.remoteHeld=0}u||(hE(r),yE());for(let m of Tt){m.mesh.visible=O.objects&&!u;let{x:g,y:b,z:w}=m.mesh.position;if((ft.active?b<-24||Math.abs(g)>155||Math.abs(w)>155:b<-8||Math.abs(g)>28||w<-57||w>13)&&(m.owner||(m.mesh.position.copy(m.start),m.velocity.set(0,0,0),m.angular.set(0,0,0))),m.shadow.visible=!u&&O.shadows&&rd()<3&&O.objects&&m.mesh.position.y<2,m.shadow.visible){let{x:C,z:A}=m.mesh.position,L=St.boxes.find(S=>S.heightfield&&C>=S.xMin&&C<=S.xMax&&A>=S.zMin&&A<=S.zMax),U=L?L.height(C,A):0;m.shadow.position.set(C,U+.006,A)}}if(!u&&O.objects){for(let m of Tt)m.beforePhysics.copy(m.mesh.position);Wx(Tt,St.boxes,r,9.81*O.gravity/5,.12+O.bounce*.064,Fv),ft.builtIn&&Tn.updateTarget(Tt)}if(o&&!Zt&&Ye.role!=="pc")for(let m of Ut)aE(m);if(St.probe.rotation.y+=r*.29,ME(Math.min(.3,t),o),fn.mesh.visible=o&&Zt,fn.mesh.visible&&jt&&Yy(),fn.mesh.visible&&yr)gE(e,a,yr.source,yr.click);else if(o&&Kh)oE(e,a,Kh);else if(o&&$h)fE(e,a,$h);else if(o&&Al)pE(e,a,Al.source,Al.click);else if(!o&&!c){Jt.getWorldPosition(Gn),Jt.getWorldDirection(Un),ji.delete("KeyX")&&_n("blasterActive",1),ji.delete("KeyG")&&(_n("toolActive",1),O.toolActive&&hi("Outil \xB7 "+ur[O.toolMode-1])),ji.delete("KeyT")&&_n("toolMode",1);let m=ji.delete("KeyE");O.toolActive?Iv(Gn,Un,m,null):m&&!xE(Gn,Un)?Op(Gn,Un,!0):!m&&!u&&Op(Gn,Un,!1),ji.delete("KeyF")&&(O.objects=!0,um(lv[0]))}let d=Kn.mesh.visible;if(Kn.mesh.visible=o&&!Zt&&Ut[0].valid,Kn.mesh.visible&&(Kn.mesh.position.copy(Ut[0].mesh.position).y+=.12,Kn.mesh.lookAt(Rt)),(jt||n-Ry>1100||Kn.mesh.visible&&!d)&&(jt=!1,Ry=n,Zt&&Yy(),Kn.mesh.visible)){let m=Kn.ctx;m.clearRect(0,0,416,84),m.fillStyle="#182632",m.fillRect(0,0,416,84),m.fillStyle="#fff0cf",m.font="bold 25px system-ui",m.fillText(xr+" FPS     Q "+tn+"/10",17,32),m.font="20px system-ui",m.fillText(O.mapEdit?"\xC9dition : "+Av[O.mapMode-1]:O.blasterActive?"Pistolet : maintenir la g\xE2chette":O.toolActive?"Tool Gun : "+ur[O.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Kn.texture.needsUpdate=!0}pd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:r,yaw:bt,drop:di,rightHand:Ut[1],enabled:O.blasterActive&&!c&&!Zt&&!O.mapEdit,flatFiring:Lv.held||Ai.has("KeyJ")}),Ye.update({inVR:o,time:n,dt:i,position:Rt,yaw:c?bt:Qi,pitch:_r,camera:Jt,rig:dt,keys:Ai,actions:ji,flat:Pl,avatar:bE,bodies:O.objects?Tt:Fy,score:Tn.score()}),ji.clear(),TA.update({settings:O,boxes:ns,bodies:u?O.debugHitboxes?Uv():Fy:Tt,hands:Ut,locomotion:Rs,velocity:an,head:Rt,neck:Lp,body:Ei.position,proxies:qh,gravity:Dp,appliedMove:Ts,playerActive:!c,inVR:o}),!c&&(o||!ad)&&n-Jh>350&&(iv={simulationScale:s,gravity:Dp,velocity:an.toArray(),grounded:Ti,torsoDegrees:[Ji.x,Ji.y].map(Oe.radToDeg),hands:o?Rs.hands.map(({hand:m,normal:g,offset:b})=>m.valid?{side:m.side,gripPosition:m.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Wi).applyQuaternion(m.mesh.quaternion).add(m.target).add(Ts).distanceTo(m.gripPosition),palmCenter:vn.copy(Wi).applyQuaternion(m.mesh.quaternion).add(m.mesh.position).toArray(),contactCenter:vn.copy(m.mesh.position).add(b).toArray(),normal:m.surface?g.toArray():null,surface:m.surface?.name??m.surface?.objectBody?.spec?.name??null}:null):[]}),XA(u),St.centerShadows(cd);let f=25+(10-rd())*(o?7:4);Ke.shadowMap.enabled&&n-wy>=f&&(Ke.shadowMap.needsUpdate=!0,wy=n),eE(n,l);let h=o&&O.post,p=o&&O.rayTrace;SA(p,Tt);let x=O.vrFov/100;if(!h||!bA.render(At,Jt,{bloom:O.bloom,visibleField:x})){Wh.material.uniforms.visibleField.value=x,Wh.visible=o&&x<1;try{Ke.render(At,Jt)}finally{Wh.visible=!1}}if((o||!ad)&&($p[jh]=t*1e3,jh=(jh+1)%720,n-Jh>350)){Jh=n;let{calls:m,triangles:g,lines:b,points:w}=Ke.info.render;pv={calls:m,triangles:g,lines:b,points:w,textures:Ke.info.memory.textures},o&&(Kp={refreshHz:Ke.xr.getSession()?.frameRate??null,targetFps:Wp,supportedHz:wl.slice(),foveation:Ke.xr.getFoveation()??null,visualEffects:{post:h,bloom:h&&O.bloom,rayTrace:p},eyeViewports:Ke.xr.getCamera().cameras.map(v=>({width:v.viewport?.z??null,height:v.viewport?.w??null}))})}});})();
