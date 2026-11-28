(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xm=0,Qd=1,qm=2;var ef=1,Ym=2,ji=3,ri=0,Xn=1,cn=2,hs=0,ar=1,ul=2,tf=3,nf=4,Zm=5,Rs=100,jm=101,Jm=102,$m=103,Km=104,Qm=200,eg=201,tg=202,ng=203,Fc=204,Nc=205,ig=206,sg=207,rg=208,og=209,ag=210,lg=211,cg=212,ug=213,hg=214,lu=0,cu=1,uu=2,lr=3,hu=4,du=5,fu=6,pu=7,mu=0,dg=1,fg=2,ds=0,gu=1,xu=2,yu=3,_u=4,vu=5,Mu=6,bu=7;var sf=300,br=301,Sr=302,Li=303,Su=304,hl=306,Ln=1e3,Cs=1001,zc=1002,Jn=1003,pg=1004;var dl=1005;var ln=1006,wu=1007;var zn=1008;var Ui=1009,rf=1010,of=1011,No=1012,Tu=1013,Ns=1014,Fi=1015,wi=1016,Eu=1017,Au=1018,zo=1020,af=35902,lf=35899,cf=1021,uf=1022,qn=1023,go=1026,Oo=1027,Cu=1028,Ru=1029,hf=1030,Pu=1031;var Iu=1033,fl=33776,pl=33777,ml=33778,gl=33779,Du=35840,Lu=35841,Uu=35842,Fu=35843,Nu=36196,zu=37492,Ou=37496,Bu=37808,ku=37809,Vu=37810,Gu=37811,Hu=37812,Wu=37813,Xu=37814,qu=37815,Yu=37816,Zu=37817,ju=37818,Ju=37819,$u=37820,Ku=37821,Qu=36492,eh=36494,th=36495,nh=36283,ih=36284,sh=36285,rh=36286;var Ua=2300,Oc=2301,Lc=2302,Vd=2400,Gd=2401,Hd=2402;var mg=3200,gg=3201;var oh=0,xg=1,fs="",St="srgb",cr="srgb-linear",Fa="linear",Ut="srgb";var or=7680;var Wd=519,yg=512,_g=513,vg=514,df=515,Mg=516,bg=517,Sg=518,wg=519,Bc=35044,wr=35048;var ff="300 es",Pi=2e3,Na=2001;var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cm=1234567,po=Math.PI/180,xo=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function pf(n,e){return(n%e+e)%e}function i_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function s_(n,e,t){return n!==e?(t-n)/(e-n):0}function Ia(n,e,t){return(1-t)*n+t*e}function r_(n,e,t,i){return Ia(n,e,1-Math.exp(-t*i))}function o_(n,e=1){return e-Math.abs(pf(n,e*2)-e)}function a_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function l_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function c_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function u_(n,e){return n+Math.random()*(e-n)}function h_(n){return n*(.5-Math.random())}function d_(n){n!==void 0&&(cm=n);let e=cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f_(n){return n*po}function p_(n){return n*xo}function m_(n){return(n&n-1)===0&&n!==0}function g_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function x_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function y_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ee={DEG2RAD:po,RAD2DEG:xo,generateUUID:Yi,clamp:st,euclideanModulo:pf,mapLinear:i_,inverseLerp:s_,lerp:Ia,damp:r_,pingpong:o_,smoothstep:a_,smootherstep:l_,randInt:c_,randFloat:u_,randFloatSpread:h_,seededRandom:d_,degToRad:f_,radToDeg:p_,isPowerOfTwo:m_,ceilPowerOfTwo:g_,floorPowerOfTwo:x_,setQuaternionFromProperEuler:y_,normalize:Nt,denormalize:Ri},ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let T=Math.sqrt(v),w=Math.atan2(T,m*_);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,u=u*g+p*y,h=h*g+x*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dd=new M,um=new Tt,ht=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],v=s[4],y=s[7],T=s[2],w=s[5],R=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*g+a*v+l*w,r[6]=o*m+a*y+l*R,r[1]=c*x+u*_+h*T,r[4]=c*g+u*v+h*w,r[7]=c*m+u*y+h*R,r[2]=d*x+f*_+p*T,r[5]=d*g+f*v+p*w,r[8]=d*m+f*y+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fd.makeScale(e,t)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fd=new ht;function mf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tg(){let n=yo("canvas");return n.style.display="block",n}var hm={};function _o(n){n in hm||(hm[n]=!0,console.warn(n))}function Eg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var dm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function __(){let n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ut&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _o("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _o("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:e,whitePoint:i,transfer:Fa,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),n}var Ct=__();function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yr,kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yr===void 0&&(Yr=yo("canvas")),Yr.width=e.width,Yr.height=e.height;let s=Yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v_=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pd(s[o].image)):r.push(pd(s[o]))}else r=pd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function pd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var M_=0,md=new M,Un=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Cs,s=Cs,r=ln,o=zn,a=qn,l=Ui,c=n.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Yi(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=sf;Un.DEFAULT_ANISOTROPY=1;var Jt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,T=(m+1)/2,w=(u+d)/4,R=(h+x)/4,C=(p+g)/4;return v>y&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=R/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vc=class extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Un(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Vc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},za=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gc=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tc.copy(i.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),nc.subVectors(this.max,va),Zr.subVectors(e.a,va),jr.subVectors(e.b,va),Jr.subVectors(e.c,va),bs.subVectors(jr,Zr),Ss.subVectors(Jr,jr),nr.subVectors(Zr,Jr);let t=[0,-bs.z,bs.y,0,-Ss.z,Ss.y,0,-nr.z,nr.y,bs.z,0,-bs.x,Ss.z,0,-Ss.x,nr.z,0,-nr.x,-bs.y,bs.x,0,-Ss.y,Ss.x,0,-nr.y,nr.x,0];return!gd(t,Zr,jr,Jr,nc)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,Zr,jr,Jr,nc))?!1:(ic.crossVectors(bs,Ss),t=[ic.x,ic.y,ic.z],gd(t,Zr,jr,Jr,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new M,new M,new M,new M,new M,new M,new M,new M],Ei=new M,tc=new fn,Zr=new M,jr=new M,Jr=new M,bs=new M,Ss=new M,nr=new M,va=new M,nc=new M,ic=new M,ir=new M;function gd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ir.fromArray(n,r);let a=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var b_=new fn,Ma=new M,xd=new M,yi=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):b_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ma,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(xd)),this.expandByPoint(Ma.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},is=new M,yd=new M,sc=new M,ws=new M,_d=new M,rc=new M,vd=new M,Ps=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yd.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),ws.copy(this.origin).sub(yd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sc),a=ws.dot(this.direction),l=-ws.dot(sc),c=ws.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yd).addScaledVector(sc,d),f}intersectSphere(e,t){is.subVectors(e.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,i,s,r){_d.subVectors(t,e),rc.subVectors(i,e),vd.crossVectors(_d,rc);let o=this.direction.dot(vd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ws.subVectors(this.origin,e);let l=a*this.direction.dot(rc.crossVectors(ws,rc));if(l<0)return null;let c=a*this.direction.dot(_d.cross(ws));if(c<0||l+c>o)return null;let u=-a*ws.dot(vd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/$r.setFromMatrixColumn(e,0).length(),r=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S_,e,w_)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ts.crossVectors(i,ii),Ts.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ts.crossVectors(i,ii)),Ts.normalize(),oc.crossVectors(ii,Ts),s[0]=Ts.x,s[4]=oc.x,s[8]=ii.x,s[1]=Ts.y,s[5]=oc.y,s[9]=ii.y,s[2]=Ts.z,s[6]=oc.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],v=i[7],y=i[11],T=i[15],w=s[0],R=s[4],C=s[8],b=s[12],S=s[1],A=s[5],I=s[9],O=s[13],z=s[2],V=s[6],B=s[10],K=s[14],N=s[3],F=s[7],W=s[11],J=s[15];return r[0]=o*w+a*S+l*z+c*N,r[4]=o*R+a*A+l*V+c*F,r[8]=o*C+a*I+l*B+c*W,r[12]=o*b+a*O+l*K+c*J,r[1]=u*w+h*S+d*z+f*N,r[5]=u*R+h*A+d*V+f*F,r[9]=u*C+h*I+d*B+f*W,r[13]=u*b+h*O+d*K+f*J,r[2]=p*w+x*S+g*z+m*N,r[6]=p*R+x*A+g*V+m*F,r[10]=p*C+x*I+g*B+m*W,r[14]=p*b+x*O+g*K+m*J,r[3]=_*w+v*S+y*z+T*N,r[7]=_*R+v*A+y*V+T*F,r[11]=_*C+v*I+y*B+T*W,r[15]=_*b+v*O+y*K+T*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,v=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,y=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,T=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,w=t*_+i*v+s*y+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=_*R,e[1]=(x*d*r-h*g*r-x*s*f+i*g*f+h*s*m-i*d*m)*R,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=v*R,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*R,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(p*h*r-u*x*r-p*i*f+t*x*f+u*i*m-t*h*m)*R,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*R,e[12]=T*R,e[13]=(u*x*s-p*h*s+p*i*d-t*x*d-u*i*g+t*h*g)*R,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,g=o*h,m=a*h,_=l*c,v=l*u,y=l*h,T=i.x,w=i.y,R=i.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(p-v)*T,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+m))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(p+v)*R,s[9]=(g-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=$r.set(s[0],s[1],s[2]).length(),o=$r.set(s[4],s[5],s[6]).length(),a=$r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ai.copy(this);let c=1/r,u=1/o,h=1/a;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Pi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Na)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pi,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Pi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Na)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$r=new M,Ai=new wt,S_=new M(0,0,0),w_=new M(1,1,1),Ts=new M,oc=new M,ii=new M,pm=new wt,mm=new Tt,nn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},T_=0,gm=new M,Kr=new Tt,ss=new wt,ac=new M,ba=new M,E_=new M,A_=new Tt,xm=new M(1,0,0),ym=new M(0,1,0),_m=new M(0,0,1),vm={type:"added"},C_={type:"removed"},Qr={type:"childadded",child:null},Md={type:"childremoved",child:null},Yt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new nn,i=new Tt,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new ht}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ac.copy(e):ac.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(ba,ac,this.up):ss.lookAt(ac,ba,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(ss),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C_),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new M(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new M,rs=new M,bd=new M,os=new M,eo=new M,to=new M,Mm=new M,Sd=new M,wd=new M,Td=new M,Ed=new Jt,Ad=new Jt,Cd=new Jt,Hn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ci.subVectors(e,t),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ci.subVectors(s,t),rs.subVectors(i,t),bd.subVectors(e,t);let o=Ci.dot(Ci),a=Ci.dot(rs),l=Ci.dot(bd),c=rs.dot(rs),u=rs.dot(bd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(o,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ed.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Ed.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ed,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Cd,r.z),o}static isFrontFacing(e,t,i,s){return Ci.subVectors(i,t),rs.subVectors(e,t),Ci.cross(rs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Ci.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;eo.subVectors(s,i),to.subVectors(r,i),Sd.subVectors(e,i);let l=eo.dot(Sd),c=to.dot(Sd);if(l<=0&&c<=0)return t.copy(i);wd.subVectors(e,s);let u=eo.dot(wd),h=to.dot(wd);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(eo,o);Td.subVectors(e,r);let f=eo.dot(Td),p=to.dot(Td);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(to,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Mm.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(Mm,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},lc={h:0,s:0,l:0};function Rd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=pf(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Rd(o,r,e+1/3),this.g=Rd(o,r,e),this.b=Rd(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let i=Ag[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ct.workingToColorSpace(Pn.copy(this),e),Math.round(st(Pn.r*255,0,255))*65536+Math.round(st(Pn.g*255,0,255))*256+Math.round(st(Pn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Pn.copy(this),t);let i=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=St){Ct.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,s=Pn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(lc);let i=Ia(Es.h,lc.h,t),s=Ia(Es.s,lc.s,t),r=Ia(Es.l,lc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new He;He.NAMES=Ag;var R_=0,Ii=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=ar,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Nc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fc&&(i.blendSrc=this.blendSrc),this.blendDst!==Nc&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ot=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new M,cc=new ce,P_=0,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var Oa=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ba=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},I_=0,xi=new wt,Pd=new Yt,no=new M,si=new fn,Sa=new fn,bn=new M,rt=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?Ba:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(si.min,Sa.min),si.expandByPoint(bn),bn.addVectors(si.max,Sa.max),si.expandByPoint(bn)):(si.expandByPoint(Sa.min),si.expandByPoint(Sa.max))}si.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(e,c),bn.add(no)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new M,l[C]=new M;let c=new M,u=new M,h=new M,d=new ce,f=new ce,p=new ce,x=new M,g=new M;function m(C,b,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[C].add(x),a[b].add(x),a[S].add(x),l[C].add(g),l[b].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,b=_.length;C<b;++C){let S=_[C],A=S.start,I=S.count;for(let O=A,z=A+I;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new M,y=new M,T=new M,w=new M;function R(C){T.fromBufferAttribute(s,C),w.copy(T);let b=a[C];v.copy(b),v.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(w,b);let A=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,b=_.length;C<b;++C){let S=_[C],A=S.start,I=S.count;for(let O=A,z=A+I;O<z;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bm=new wt,sr=new Ps,uc=new yi,Sm=new M,hc=new M,dc=new M,fc=new M,Id=new M,pc=new M,wm=new M,mc=new M,pe=class extends Yt{constructor(e=new rt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){pc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Id.fromBufferAttribute(h,e),o?pc.addScaledVector(Id,u):pc.addScaledVector(Id.sub(t),u))}t.add(pc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(uc.containsPoint(sr.origin)===!1&&(sr.intersectSphere(uc,Sm)===null||sr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(bm.copy(r).invert(),sr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,T=v;y<T;y+=3){let w=a.getX(y),R=a.getX(y+1),C=a.getX(y+2);s=gc(this,m,e,i,c,u,h,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);s=gc(this,o,e,i,c,u,h,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,T=v;y<T;y+=3){let w=y,R=y+1,C=y+2;s=gc(this,m,e,i,c,u,h,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,y=g+2;s=gc(this,o,e,i,c,u,h,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function D_(n,e,t,i,s,r,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;mc.copy(a),mc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(mc);return c<t.near||c>t.far?null:{distance:c,point:mc.clone(),object:n}}function gc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hc),n.getVertexPosition(l,dc),n.getVertexPosition(c,fc);let u=D_(n,e,t,i,hc,dc,fc,wm);if(u){let h=new M;Hn.getBarycoord(wm,hc,dc,fc,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};Hn.getNormal(hc,dc,fc,d.normal),u.face=d,u.barycoord=h}return u}var Ye=class n extends rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(h,2));function p(x,g,m,_,v,y,T,w,R,C,b){let S=y/R,A=T/C,I=y/2,O=T/2,z=w/2,V=R+1,B=C+1,K=0,N=0,F=new M;for(let W=0;W<B;W++){let J=W*A-O;for(let ue=0;ue<V;ue++){let ye=ue*S-I;F[x]=ye*_,F[g]=J*v,F[m]=z,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=w>0?1:-1,u.push(F.x,F.y,F.z),h.push(ue/R),h.push(1-W/C),K+=1}}for(let W=0;W<C;W++)for(let J=0;J<R;J++){let ue=d+J+V*W,ye=d+J+V*(W+1),Te=d+(J+1)+V*(W+1),Ue=d+(J+1)+V*W;l.push(ue,ye,Ue),l.push(ye,Te,Ue),N+=6}a.addGroup(f,N,b),f+=N,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Tr(n[t]);for(let s in i)e[s]=i[s]}return e}function L_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Er={clone:Tr,merge:On},U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ka=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},As=new M,Tm=new ce,Em=new ce,In=class extends ka{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,Tm,Em),t.subVectors(Em,Tm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},io=-90,so=1,Hc=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(io,so,e,t);s.layers=this.layers,this.add(s);let r=new In(io,so,e,t);r.layers=this.layers,this.add(r);let o=new In(io,so,e,t);o.layers=this.layers,this.add(o);let a=new In(io,so,e,t);a.layers=this.layers,this.add(a);let l=new In(io,so,e,t);l.layers=this.layers,this.add(l);let c=new In(io,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Va=class extends Un{constructor(e=[],t=br,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:hs});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=ln),new Hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},qt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},N_={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ur=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},So=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ga=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new M,wo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},To=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ro,wa=new M,oo=new M,ao=new M,lo=new ce,Ta=new ce,Cg=new wt,xc=new M,Ea=new M,yc=new M,Am=new ce,Dd=new ce,Cm=new ce,Ha=class extends Yt{constructor(e=new To){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ga(t,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new wo(i,3,0,!1)),ro.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=ro,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),Cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ao.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;_c(xc.set(-.5,-.5,0),ao,o,oo,s,r),_c(Ea.set(.5,-.5,0),ao,o,oo,s,r),_c(yc.set(.5,.5,0),ao,o,oo,s,r),Am.set(0,0),Dd.set(1,0),Cm.set(1,1);let a=e.ray.intersectTriangle(xc,Ea,yc,!1,wa);if(a===null&&(_c(Ea.set(-.5,.5,0),ao,o,oo,s,r),Dd.set(0,1),a=e.ray.intersectTriangle(xc,yc,Ea,!1,wa),a===null))return;let l=e.ray.origin.distanceTo(wa);l<e.near||l>e.far||t.push({distance:l,point:wa.clone(),uv:Hn.getInterpolation(wa,xc,Ea,yc,Am,Dd,Cm,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _c(n,e,t,i,s,r){lo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ta.x=r*lo.x-s*lo.y,Ta.y=s*lo.x+r*lo.y):Ta.copy(lo),n.copy(e),n.x+=Ta.x,n.y+=Ta.y,n.applyMatrix4(Cg)}var oi=class extends Un{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Jn,u=Jn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},co=new wt,Rm=new wt,vc=[],Pm=new fn,z_=new wt,Aa=new pe,Ca=new yi,hr=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,z_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),Pm.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(Pm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),Ca.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,co),Rm.multiplyMatrices(i,co),Aa.matrixWorld=Rm,Aa.raycast(e,vc);for(let o=0,a=vc.length;o<a;o++){let l=vc[o];l.instanceId=r,l.object=this,t.push(l)}vc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(s*this.count),s,this.count,Cu,Fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ld=new M,O_=new M,B_=new ht,Dn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ld.subVectors(i,t).cross(O_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ld),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||B_.getNormalMatrix(e),s=this.coplanarPoint(Ld).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new yi,k_=new ce(.5,.5),Mc=new M,Ao=class{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],v=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,m-p,T-_).normalize(),s[1].setComponents(c+o,f+u,m+p,T+_).normalize(),s[2].setComponents(c+a,f+h,m+x,T+v).normalize(),s[3].setComponents(c-a,f-h,m-x,T-v).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,T-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,T-y).normalize(),t===Pi)s[5].setComponents(c+l,f+d,m+g,T+y).normalize();else if(t===Na)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);let t=k_.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Mc.x=s.normal.x>0?e.max.x:e.min.x,Mc.y=s.normal.y>0?e.max.y:e.min.y,Mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sn=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xc=new M,qc=new M,Im=new wt,Ra=new Ps,bc=new yi,Ud=new M,Dm=new M,wn=class extends Yt{constructor(e=new rt,t=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Xc.fromBufferAttribute(t,s-1),qc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xc.distanceTo(qc);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),bc.radius+=r,e.ray.intersectsSphere(bc)===!1)return;Im.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Im);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),_=u.getX(x+1),v=Sc(this,e,Ra,l,m,_,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=Sc(this,e,Ra,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Sc(this,e,Ra,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Sc(this,e,Ra,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Xc.fromBufferAttribute(a,s),qc.fromBufferAttribute(a,r),t.distanceSqToSegment(Xc,qc,Ud,Dm)>i)return;Ud.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ud);if(!(c<e.near||c>e.far))return{distance:c,point:Dm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Lm=new M,Um=new M,ls=class extends wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lm.fromBufferAttribute(t,s),Um.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lm.distanceTo(Um);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wa=class extends wn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Di=class extends Un{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xa=class extends Un{constructor(e,t,i=Ns,s,r,o,a=Jn,l=Jn,c,u=go,h=1){if(u!==go&&u!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qa=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Is=class n extends rt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=i*2+r,x=s+1,g=new M,m=new M;for(let _=0;_<=p;_++){let v=0,y=0,T=0,w=0;if(_<=i){let b=_/i,S=b*Math.PI/2;y=-u-e*Math.cos(S),T=e*Math.sin(S),w=-e*Math.cos(S),v=b*h}else if(_<=i+r){let b=(_-i)/r;y=-u+b*t,T=e,w=0,v=h+b*d}else{let b=(_-i-r)/i,S=b*Math.PI/2;y=u+e*Math.sin(S),T=e*Math.cos(S),w=e*Math.sin(S),v=h+d+b*h}let R=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/s:_===p&&(C=-.5/s);for(let b=0;b<=s;b++){let S=b/s,A=S*Math.PI*2,I=Math.sin(A),O=Math.cos(A);m.x=-T*O,m.y=y,m.z=T*I,a.push(m.x,m.y,m.z),g.set(-T*O,w,T*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+C,R)}if(_>0){let b=(_-1)*x;for(let S=0;S<s;S++){let A=b+S,I=b+S+1,O=_*x+S,z=_*x+S+1;o.push(A,I,O),o.push(I,z,O)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Nn=class n extends rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function _(){let y=new M,T=new M,w=0,R=(t-e)/i;for(let C=0;C<=r;C++){let b=[],S=C/r,A=S*(t-e)+e;for(let I=0;I<=s;I++){let O=I/s,z=O*l+a,V=Math.sin(z),B=Math.cos(z);T.x=A*V,T.y=-S*i+g,T.z=A*B,h.push(T.x,T.y,T.z),y.set(V,R,B).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-S),b.push(p++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let S=x[b][C],A=x[b+1][C],I=x[b+1][C+1],O=x[b][C+1];(e>0||b!==0)&&(u.push(S,A,O),w+=3),(t>0||b!==r-1)&&(u.push(A,I,O),w+=3)}c.addGroup(m,w,0),m+=w}function v(y){let T=p,w=new ce,R=new M,C=0,b=y===!0?e:t,S=y===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;let A=p;for(let I=0;I<=s;I++){let z=I/s*l+a,V=Math.cos(z),B=Math.sin(z);R.x=b*B,R.y=g*S,R.z=b*V,h.push(R.x,R.y,R.z),d.push(0,S,0),w.x=V*.5+.5,w.y=B*.5*S+.5,f.push(w.x,w.y),p++}for(let I=0;I<s;I++){let O=T+I,z=A+I;y===!0?u.push(z,z+1,O):u.push(z+1,z,O),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cs=class n extends Bt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class n extends rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new M,y=new M,T=new M;for(let w=0;w<t.length;w+=3)f(t[w+0],v),f(t[w+1],y),f(t[w+2],T),l(v,y,T,_)}function l(_,v,y,T){let w=T+1,R=[];for(let C=0;C<=w;C++){R[C]=[];let b=_.clone().lerp(y,C/w),S=v.clone().lerp(y,C/w),A=w-C;for(let I=0;I<=A;I++)I===0&&C===w?R[C][I]=b:R[C][I]=b.clone().lerp(S,I/A)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){let S=Math.floor(b/2);b%2===0?(d(R[C][S+1]),d(R[C+1][S]),d(R[C][S])):(d(R[C][S+1]),d(R[C+1][S+1]),d(R[C+1][S]))}}function c(_){let v=new M;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){let _=new M;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;o.push(y,1-T)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],T=o[_+4],w=Math.max(v,y,T),R=Math.min(v,y,T);w>.9&&R<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){let _=new M,v=new M,y=new M,T=new M,w=new ce,R=new ce,C=new ce;for(let b=0,S=0;b<r.length;b+=9,S+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),w.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),T.copy(_).add(v).add(y).divideScalar(3);let A=g(T);x(w,S+0,_,A),x(R,S+2,v,A),x(C,S+4,y,A)}}function x(_,v,y,T){T<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var wc=new M,Tc=new M,Fd=new M,Ec=new Hn,Ya=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(po*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=Ec;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Ec.getNormal(Fd),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let v=(_+1)%3,y=h[_],T=h[v],w=Ec[u[_]],R=Ec[u[v]],C=`${y}_${T}`,b=`${T}_${y}`;b in d&&d[b]?(Fd.dot(d[b].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(R.x,R.y,R.z)),d[b]=null):C in d||(d[C]={index0:c[_],index1:c[v],normal:Fd.clone()})}}for(let p in d)if(d[p]){let{index0:x,index1:g}=d[p];wc.fromBufferAttribute(a,x),Tc.fromBufferAttribute(a,g),f.push(wc.x,wc.y,wc.z),f.push(Tc.x,Tc.y,Tc.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new wt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends ai{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yc=class extends Ro{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ac=new M,Nd=new xf,zd=new xf,Od=new xf,Po=class extends ai{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ac.subVectors(s[0],s[1]).add(s[0]),c=Ac);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ac.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Nd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),zd.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),Od.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Nd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),zd.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Od.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Nd.calc(l),zd.calc(l),Od.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function V_(n,e){let t=1-n;return t*t*e}function G_(n,e){return 2*(1-n)*n*e}function H_(n,e){return n*n*e}function Da(n,e,t,i){return V_(n,e)+G_(n,t)+H_(n,i)}function W_(n,e){let t=1-n;return t*t*t*e}function X_(n,e){let t=1-n;return 3*t*t*n*e}function q_(n,e){return 3*(1-n)*n*n*e}function Y_(n,e){return n*n*n*e}function La(n,e,t,i,s){return W_(n,e)+X_(n,t)+q_(n,i)+Y_(n,s)}var Za=class extends ai{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(La(e,s.x,r.x,o.x,a.x),La(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zc=class extends ai{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(La(e,s.x,r.x,o.x,a.x),La(e,s.y,r.y,o.y,a.y),La(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends ai{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends ai{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends ai{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Da(e,s.x,r.x,o.x),Da(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends ai{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Da(e,s.x,r.x,o.x),Da(e,s.y,r.y,o.y),Da(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Fm(a,l.x,c.x,u.x,h.x),Fm(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Xd=Object.freeze({__proto__:null,ArcCurve:Yc,CatmullRomCurve3:Po,CubicBezierCurve:Za,CubicBezierCurve3:Zc,EllipseCurve:Ro,LineCurve:ja,LineCurve3:Io,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:jc,SplineCurve:$a}),Do=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Xd[s.type]().fromJSON(s))}return this}},Ka=class extends Do{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ja(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ja(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Za(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $a(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ro(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},us=class extends Ka{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ka().fromJSON(s))}return this}};function Z_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Rg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Q_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Qa(r,o,t,a,l,c,0),o}function Rg(n,e,t,i,s){let r;if(s===uv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Nm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Nm(o/i|0,n[o],n[o+1],r);return r&&Lo(r,r.next)&&(tl(r),r=r.next),r}function dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Lo(t,t.next)||tn(t.prev,t,t.next)===0)){if(tl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&sv(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?J_(n,i,s,r):j_(n)){e.push(l.i,n.i,c.i),tl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$_(dr(n),e),Qa(n,e,t,i,s,r,2)):o===2&&K_(n,e,t,i,s,r):Qa(dr(n),e,t,i,s,r,1);break}}}function j_(n){let e=n.prev,t=n,i=n.next;if(tn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Pa(s,a,r,l,o,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function J_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),g=Math.max(u,h,d),m=qd(f,p,e,t,i),_=qd(x,g,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Pa(a,u,l,h,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Pa(a,u,l,h,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Pa(a,u,l,h,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Pa(a,u,l,h,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Lo(i,s)&&Ig(i,t,t.next,s)&&el(i,s)&&el(s,i)&&(e.push(i.i,t.i,s.i),tl(t),tl(t.next),t=n=s),t=t.next}while(t!==n);return dr(t)}function K_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&av(o,a)){let l=Dg(o,a);o=dr(o,o.next),l=dr(l,l.next),Qa(o,e,t,i,s,r,0),Qa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Q_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Rg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ov(c))}s.sort(ev);for(let r=0;r<s.length;r++)t=tv(s[r],t);return t}function ev(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function tv(n,e){let t=nv(n,e);if(!t)return e;let i=Dg(t,n);return dr(i,i.next),dr(t,t.next)}function nv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Lo(n,t))return t;do{if(Lo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Pg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);el(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&iv(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function iv(n,e){return tn(n.prev,n,e.prev)<0&&tn(e.next,n,n.next)<0}function sv(n,e,t,i){let s=n;do s.z===0&&(s.z=qd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,rv(s)}function rv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function qd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ov(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Pa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Pg(n,e,t,i,s,r,o,a)}function av(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!lv(n,e)&&(el(n,e)&&el(e,n)&&cv(n,e)&&(tn(n.prev,n,e.prev)||tn(n,e.prev,e))||Lo(n,e)&&tn(n.prev,n,n.next)>0&&tn(e.prev,e,e.next)>0)}function tn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Lo(n,e){return n.x===e.x&&n.y===e.y}function Ig(n,e,t,i){let s=Rc(tn(n,e,t)),r=Rc(tn(n,e,i)),o=Rc(tn(t,i,n)),a=Rc(tn(t,i,e));return!!(s!==r&&o!==a||s===0&&Cc(n,t,e)||r===0&&Cc(n,i,e)||o===0&&Cc(t,n,i)||a===0&&Cc(t,e,i))}function Cc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rc(n){return n>0?1:n<0?-1:0}function lv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ig(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function el(n,e){return tn(n.prev,n,n.next)<0?tn(n,e,n.next)>=0&&tn(n,n.prev,e)>=0:tn(n,e,n.prev)<0||tn(n,n.next,e)<0}function cv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dg(n,e){let t=Yd(n.i,n.x,n.y),i=Yd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Nm(n,e,t,i){let s=Yd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zd=class{static triangulate(e,t,i=2){return Z_(e,t,i)}},qi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];zm(e),Om(i,e);let o=e.length;t.forEach(zm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Om(i,t[l]);let a=Zd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Om(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var fr=class n extends rt{constructor(e=new us([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:hv,v,y=!1,T,w,R,C;m&&(v=m.getSpacedPoints(u),y=!0,d=!1,T=m.computeFrenetFrames(u,!1),w=new M,R=new M,C=new M),d||(g=0,f=0,p=0,x=0);let b=a.extractPoints(c),S=b.shape,A=b.holes;if(!qi.isClockWise(S)){S=S.reverse();for(let le=0,ie=A.length;le<ie;le++){let ee=A[le];qi.isClockWise(ee)&&(A[le]=ee.reverse())}}function O(le){let ee=10000000000000001e-36,se=le[0];for(let Me=1;Me<=le.length;Me++){let xe=Me%le.length,Ae=le[xe],Je=Ae.x-se.x,Ze=Ae.y-se.y,L=Je*Je+Ze*Ze,E=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(se.x),Math.abs(se.y)),Z=ee*E*E;if(L<=Z){le.splice(xe,1),Me--;continue}se=Ae}}O(S),A.forEach(O);let z=A.length,V=S;for(let le=0;le<z;le++){let ie=A[le];S=S.concat(ie)}function B(le,ie,ee){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ie,ee)}let K=S.length;function N(le,ie,ee){let se,Me,xe,Ae=le.x-ie.x,Je=le.y-ie.y,Ze=ee.x-le.x,L=ee.y-le.y,E=Ae*Ae+Je*Je,Z=Ae*L-Je*Ze;if(Math.abs(Z)>Number.EPSILON){let oe=Math.sqrt(E),fe=Math.sqrt(Ze*Ze+L*L),ae=ie.x-Je/oe,Ve=ie.y+Ae/oe,we=ee.x-L/fe,ze=ee.y+Ze/fe,Oe=((we-ae)*L-(ze-Ve)*Ze)/(Ae*L-Je*Ze);se=ae+Ae*Oe-le.x,Me=Ve+Je*Oe-le.y;let me=se*se+Me*Me;if(me<=2)return new ce(se,Me);xe=Math.sqrt(me/2)}else{let oe=!1;Ae>Number.EPSILON?Ze>Number.EPSILON&&(oe=!0):Ae<-Number.EPSILON?Ze<-Number.EPSILON&&(oe=!0):Math.sign(Je)===Math.sign(L)&&(oe=!0),oe?(se=-Je,Me=Ae,xe=Math.sqrt(E)):(se=Ae,Me=Je,xe=Math.sqrt(E/2))}return new ce(se/xe,Me/xe)}let F=[];for(let le=0,ie=V.length,ee=ie-1,se=le+1;le<ie;le++,ee++,se++)ee===ie&&(ee=0),se===ie&&(se=0),F[le]=N(V[le],V[ee],V[se]);let W=[],J,ue=F.concat();for(let le=0,ie=z;le<ie;le++){let ee=A[le];J=[];for(let se=0,Me=ee.length,xe=Me-1,Ae=se+1;se<Me;se++,xe++,Ae++)xe===Me&&(xe=0),Ae===Me&&(Ae=0),J[se]=N(ee[se],ee[xe],ee[Ae]);W.push(J),ue=ue.concat(J)}let ye;if(g===0)ye=qi.triangulateShape(V,A);else{let le=[],ie=[];for(let ee=0;ee<g;ee++){let se=ee/g,Me=f*Math.cos(se*Math.PI/2),xe=p*Math.sin(se*Math.PI/2)+x;for(let Ae=0,Je=V.length;Ae<Je;Ae++){let Ze=B(V[Ae],F[Ae],xe);Re(Ze.x,Ze.y,-Me),se===0&&le.push(Ze)}for(let Ae=0,Je=z;Ae<Je;Ae++){let Ze=A[Ae];J=W[Ae];let L=[];for(let E=0,Z=Ze.length;E<Z;E++){let oe=B(Ze[E],J[E],xe);Re(oe.x,oe.y,-Me),se===0&&L.push(oe)}se===0&&ie.push(L)}}ye=qi.triangulateShape(le,ie)}let Te=ye.length,Ue=p+x;for(let le=0;le<K;le++){let ie=d?B(S[le],ue[le],Ue):S[le];y?(R.copy(T.normals[0]).multiplyScalar(ie.x),w.copy(T.binormals[0]).multiplyScalar(ie.y),C.copy(v[0]).add(R).add(w),Re(C.x,C.y,C.z)):Re(ie.x,ie.y,0)}for(let le=1;le<=u;le++)for(let ie=0;ie<K;ie++){let ee=d?B(S[ie],ue[ie],Ue):S[ie];y?(R.copy(T.normals[le]).multiplyScalar(ee.x),w.copy(T.binormals[le]).multiplyScalar(ee.y),C.copy(v[le]).add(R).add(w),Re(C.x,C.y,C.z)):Re(ee.x,ee.y,h/u*le)}for(let le=g-1;le>=0;le--){let ie=le/g,ee=f*Math.cos(ie*Math.PI/2),se=p*Math.sin(ie*Math.PI/2)+x;for(let Me=0,xe=V.length;Me<xe;Me++){let Ae=B(V[Me],F[Me],se);Re(Ae.x,Ae.y,h+ee)}for(let Me=0,xe=A.length;Me<xe;Me++){let Ae=A[Me];J=W[Me];for(let Je=0,Ze=Ae.length;Je<Ze;Je++){let L=B(Ae[Je],J[Je],se);y?Re(L.x,L.y+v[u-1].y,v[u-1].x+ee):Re(L.x,L.y,h+ee)}}}H(),Q();function H(){let le=s.length/3;if(d){let ie=0,ee=K*ie;for(let se=0;se<Te;se++){let Me=ye[se];U(Me[2]+ee,Me[1]+ee,Me[0]+ee)}ie=u+g*2,ee=K*ie;for(let se=0;se<Te;se++){let Me=ye[se];U(Me[0]+ee,Me[1]+ee,Me[2]+ee)}}else{for(let ie=0;ie<Te;ie++){let ee=ye[ie];U(ee[2],ee[1],ee[0])}for(let ie=0;ie<Te;ie++){let ee=ye[ie];U(ee[0]+K*u,ee[1]+K*u,ee[2]+K*u)}}i.addGroup(le,s.length/3-le,0)}function Q(){let le=s.length/3,ie=0;Se(V,ie),ie+=V.length;for(let ee=0,se=A.length;ee<se;ee++){let Me=A[ee];Se(Me,ie),ie+=Me.length}i.addGroup(le,s.length/3-le,1)}function Se(le,ie){let ee=le.length;for(;--ee>=0;){let se=ee,Me=ee-1;Me<0&&(Me=le.length-1);for(let xe=0,Ae=u+g*2;xe<Ae;xe++){let Je=K*xe,Ze=K*(xe+1),L=ie+se+Je,E=ie+Me+Je,Z=ie+Me+Ze,oe=ie+se+Ze;$(L,E,Z,oe)}}}function Re(le,ie,ee){l.push(le),l.push(ie),l.push(ee)}function U(le,ie,ee){he(le),he(ie),he(ee);let se=s.length/3,Me=_.generateTopUV(i,s,se-3,se-2,se-1);D(Me[0]),D(Me[1]),D(Me[2])}function $(le,ie,ee,se){he(le),he(ie),he(se),he(ie),he(ee),he(se);let Me=s.length/3,xe=_.generateSideWallUV(i,s,Me-6,Me-3,Me-2,Me-1);D(xe[0]),D(xe[1]),D(xe[3]),D(xe[1]),D(xe[2]),D(xe[3])}function he(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function D(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return dv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xd[s.type]().fromJSON(s)),new n(i,e.options)}},hv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-p),new ce(x,1-m)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-p),new ce(g,1-m)]}};function dv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _i=class n extends Co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},nl=class n extends rt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new M,d=new ce,f=new M,p=new M,x=new M,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let v=i+_*u*s,y=Math.sin(v),T=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*y,h.y=e[w].y,h.z=e[w].x*T,o.push(h.x,h.y,h.z),d.x=_/t,d.y=w/(e.length-1),a.push(d.x,d.y);let R=l[3*w+0]*y,C=l[3*w+1],b=l[3*w+0]*T;c.push(R,C,b)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,T=y,w=y+e.length,R=y+e.length+1,C=y+1;r.push(T,w,C),r.push(R,C,w)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},vi=class n extends Co{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},An=class n extends rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let _=m*d-o;for(let v=0;v<c;v++){let y=v*h-r;p.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),T=_+1+c*(m+1),w=_+1+c*m;f.push(v,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class n extends rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new M,p=new ce;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,v=_,y=_+i+1,T=_+i+2,w=_+1;a.push(v,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},il=class n extends rt{constructor(e=new us([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;qi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];qi.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=qi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){let _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],v=_[0]+h,y=_[1]+h,T=_[2]+h;i.push(v,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return fv(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function fv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Mi=class n extends rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new M,d=new M,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],v=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let w=T/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(w+y,1-v),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let v=u[m][_+1],y=u[m][_],T=u[m+1][_],w=u[m+1][_+1];(m!==0||o>0)&&f.push(v,y,w),(m!==i-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},pr=class n extends Co{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wn=class n extends rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,h=new M,d=new M;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var sl=class extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),Bm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Bm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Bm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var rl=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xn=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var li=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jc=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function pv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var mr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends mr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gd:r=e,a=2*t-i;break;case Hd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gd:o=e,l=2*i-t;break;case Hd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+_*o[c+T]+v*o[l+T]+y*o[h+T];return r}},Qc=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},eu=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pc(t,this.TimeBufferType),this.values=Pc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pc(e.times,Array),values:Pc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Oc:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&pv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Oc;var Ls=class extends ci{constructor(e,t,i){super(e,t,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ua;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var tu=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};tu.prototype.ValueTypeName="color";var nu=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};nu.prototype.ValueTypeName="number";var iu=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Tt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ol=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends ci{constructor(e,t,i){super(e,t,i)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ua;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};su.prototype.ValueTypeName="vector";var Uc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ru=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Lg=new ru,Uo=class{constructor(e){this.manager=e!==void 0?e:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=new WeakMap,ou=class extends Uo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Uc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=uo.get(o);h===void 0&&(h=[],uo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=yo("img");function l(){u(),t&&t(this);let h=uo.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}uo.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Uc.remove(`image:${e}`);let d=uo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}uo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Uc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var bi=class extends Uo{constructor(e){super(e)}load(e,t,i,s){let r=new Un,o=new ou(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},al=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},gr=class extends al{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bd=new wt,km=new M,Vm=new M,jd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),Bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xr=class extends ka{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jd=class extends jd{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Jd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var au=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yf="\\[\\]\\.:\\/",mv=new RegExp("["+yf+"]","g"),_f="[^"+yf+"]",gv="[^"+yf.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",_f),yv=/(WCOD+)?/.source.replace("WCOD",gv),_v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),Mv=new RegExp("^"+xv+yv+_v+vv+"$"),bv=["material","materials","bones","map"],$d=class{constructor(e,t,i){let s=i||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},jt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(e){let t=Mv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=$d;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TE=new Float32Array(1);var Gm=new wt,_r=class{constructor(e,t,i=0,s=1/0){this.ray=new Ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gm),this}intersectObject(e,t=!0,i=[]){return Kd(e,this,i,t),i.sort(Hm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kd(e[s],this,i,t);return i.sort(Hm),i}};function Hm(n,e){return n.distance-e.distance}function Kd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Kd(r[o],e,t,!0)}}var Fo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wm=new M,Ic=new M,ho=new M,fo=new M,kd=new M,Sv=new M,wv=new M,ll=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wm.subVectors(e,this.start),Ic.subVectors(this.end,this.start);let i=Ic.dot(Ic),r=Ic.dot(Wm)/i;return t&&(r=st(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Sv,i=wv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;ho.subVectors(c,a),fo.subVectors(u,l),kd.subVectors(a,l);let h=ho.dot(ho),d=fo.dot(fo),f=fo.dot(kd);if(h<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,o=f/d,o=st(o,0,1);else{let p=ho.dot(kd);if(d<=s)o=0,r=st(-p/h,0,1);else{let x=ho.dot(fo),g=h*d-x*x;g!==0?r=st((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=st(-p/h,0,1)):o>1&&(o=1,r=st((x-p)/h,0,1))}}return t.copy(a).add(ho.multiplyScalar(r)),i.copy(l).add(fo.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var cl=class extends ls{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new rt;u.setAttribute("position",new Ne(l,3)),u.setAttribute("color",new Ne(c,3));let h=new Sn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Dc=new fn,vr=class extends ls{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new rt;r.setIndex(new zt(i,1)),r.setAttribute("position",new zt(s,3)),super(r,new Sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Dc.setFromObject(this.object),Dc.isEmpty())return;let e=Dc.min,t=Dc.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Mr=class extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vf(n,e,t,i){let s=Tv(i);switch(t){case cf:return n*e;case Cu:return n*e/s.components*s.byteLength;case Ru:return n*e/s.components*s.byteLength;case hf:return n*e*2/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case uf:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case Iu:return n*e*4/s.components*s.byteLength;case fl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Fu:return Math.max(n,16)*Math.max(e,8)/4;case Du:case Uu:return Math.max(n,8)*Math.max(e,8)/2;case Nu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qu:case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tv(n){switch(n){case Ui:case rf:return{byteLength:1,components:1};case No:case of:case wi:return{byteLength:2,components:1};case Eu:case Au:return{byteLength:2,components:4};case Ns:case Tu:case Fi:return{byteLength:4,components:1};case af:case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
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
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
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
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
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
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,$b=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,dt={alphahash_fragment:Iv,alphahash_pars_fragment:Dv,alphamap_fragment:Lv,alphamap_pars_fragment:Uv,alphatest_fragment:Fv,alphatest_pars_fragment:Nv,aomap_fragment:zv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:Vv,beginnormal_vertex:Gv,bsdfs:Hv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:jv,color_fragment:Jv,color_pars_fragment:$v,color_pars_vertex:Kv,color_vertex:Qv,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:sM,emissivemap_fragment:rM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:SM,envmap_vertex:fM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:_M,lights_lambert_fragment:vM,lights_lambert_pars_fragment:MM,lights_pars_begin:bM,lights_toon_fragment:wM,lights_toon_pars_fragment:TM,lights_phong_fragment:EM,lights_phong_pars_fragment:AM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:PM,lights_fragment_maps:IM,lights_fragment_end:DM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:NM,map_fragment:zM,map_pars_fragment:OM,map_particle_fragment:BM,map_particle_pars_fragment:kM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:GM,morphinstance_vertex:HM,morphcolor_vertex:WM,morphnormal_vertex:XM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:ZM,normal_fragment_maps:jM,normal_pars_fragment:JM,normal_pars_vertex:$M,normal_vertex:KM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:sb,packing:rb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:lb,dithering_pars_fragment:cb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:fb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:xb,skinning_vertex:yb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:Mb,tonemapping_fragment:bb,tonemapping_pars_fragment:Sb,transmission_fragment:wb,transmission_pars_fragment:Tb,uv_pars_fragment:Eb,uv_pars_vertex:Ab,uv_vertex:Cb,worldpos_vertex:Rb,background_vert:Pb,background_frag:Ib,backgroundCube_vert:Db,backgroundCube_frag:Lb,cube_vert:Ub,cube_frag:Fb,depth_vert:Nb,depth_frag:zb,distanceRGBA_vert:Ob,distanceRGBA_frag:Bb,equirect_vert:kb,equirect_frag:Vb,linedashed_vert:Gb,linedashed_frag:Hb,meshbasic_vert:Wb,meshbasic_frag:Xb,meshlambert_vert:qb,meshlambert_frag:Yb,meshmatcap_vert:Zb,meshmatcap_frag:jb,meshnormal_vert:Jb,meshnormal_frag:$b,meshphong_vert:Kb,meshphong_frag:Qb,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:s1,points_frag:r1,shadow_vert:o1,shadow_frag:a1,sprite_vert:l1,sprite_frag:c1},De={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ji={basic:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:On([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:On([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:On([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:On([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:On([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:On([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:On([De.common,De.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:On([De.lights,De.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ji.physical={uniforms:On([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var ah={r:0,b:0,g:0},Ar=new nn,u1=new wt;function h1(n,e,t,i,s,r,o){let a=new He(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,T=p(v);T===null?m(a,l):T&&T.isColor&&(m(T,1),y=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,y){let T=p(y);T&&(T.isCubeTexture||T.mapping===hl)?(u===void 0&&(u=new pe(new Ye(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Tr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Ar)),u.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ut,(h!==T||d!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new pe(new An(2,2),new En({name:"BackgroundMaterial",uniforms:Tr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(ah,gf(n)),i.buffers.color.setClear(ah.r,ah.g,ah.b,y,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:_}}function d1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,A,I,O,z){let V=!1,B=h(O,I,A);r!==B&&(r=B,c(r.object)),V=f(S,O,I,z),V&&p(S,O,I,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(S,A,I,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,I){let O=I.wireframe===!0,z=i[S.id];z===void 0&&(z={},i[S.id]=z);let V=z[A.id];V===void 0&&(V={},z[A.id]=V);let B=V[O];return B===void 0&&(B=d(l()),V[O]=B),B}function d(S){let A=[],I=[],O=[];for(let z=0;z<t;z++)A[z]=0,I[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,A,I,O){let z=r.attributes,V=A.attributes,B=0,K=I.getAttributes();for(let N in K)if(K[N].location>=0){let W=z[N],J=V[N];if(J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function p(S,A,I,O){let z={},V=A.attributes,B=0,K=I.getAttributes();for(let N in K)if(K[N].location>=0){let W=V[N];W===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));let J={};J.attribute=W,W&&W.data&&(J.data=W.data),z[N]=J,B++}r.attributes=z,r.attributesNum=B,r.index=O}function x(){let S=r.newAttributes;for(let A=0,I=S.length;A<I;A++)S[A]=0}function g(S){m(S,0)}function m(S,A){let I=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;I[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),z[S]!==A&&(n.vertexAttribDivisor(S,A),z[S]=A)}function _(){let S=r.newAttributes,A=r.enabledAttributes;for(let I=0,O=A.length;I<O;I++)A[I]!==S[I]&&(n.disableVertexAttribArray(I),A[I]=0)}function v(S,A,I,O,z,V,B){B===!0?n.vertexAttribIPointer(S,A,I,z,V):n.vertexAttribPointer(S,A,I,O,z,V)}function y(S,A,I,O){x();let z=O.attributes,V=I.getAttributes(),B=A.defaultAttributeValues;for(let K in V){let N=V[K];if(N.location>=0){let F=z[K];if(F===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){let W=F.normalized,J=F.itemSize,ue=e.get(F);if(ue===void 0)continue;let ye=ue.buffer,Te=ue.type,Ue=ue.bytesPerElement,H=Te===n.INT||Te===n.UNSIGNED_INT||F.gpuType===Tu;if(F.isInterleavedBufferAttribute){let Q=F.data,Se=Q.stride,Re=F.offset;if(Q.isInstancedInterleavedBuffer){for(let U=0;U<N.locationSize;U++)m(N.location+U,Q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let U=0;U<N.locationSize;U++)g(N.location+U);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let U=0;U<N.locationSize;U++)v(N.location+U,J/N.locationSize,Te,W,Se*Ue,(Re+J/N.locationSize*U)*Ue,H)}else{if(F.isInstancedBufferAttribute){for(let Q=0;Q<N.locationSize;Q++)m(N.location+Q,F.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Q=0;Q<N.locationSize;Q++)g(N.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Q=0;Q<N.locationSize;Q++)v(N.location+Q,J/N.locationSize,Te,W,J*Ue,J/N.locationSize*Q*Ue,H)}}else if(B!==void 0){let W=B[K];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(N.location,W);break;case 3:n.vertexAttrib3fv(N.location,W);break;case 4:n.vertexAttrib4fv(N.location,W);break;default:n.vertexAttrib1fv(N.location,W)}}}}_()}function T(){C();for(let S in i){let A=i[S];for(let I in A){let O=A[I];for(let z in O)u(O[z].object),delete O[z];delete A[I]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let I in A){let O=A[I];for(let z in O)u(O[z].object),delete O[z];delete A[I]}delete i[S.id]}function R(S){for(let A in i){let I=i[A];if(I[S.id]===void 0)continue;let O=I[S.id];for(let z in O)u(O[z].object),delete O[z];delete I[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function f1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ui&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fi&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:w}}function m1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Dn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:i,v=_*4,y=m.clippingState||null;l.value=y,y=u(p,d,v,f);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function g1(n){let e=new WeakMap;function t(o,a){return a===Li?o.mapping=br:a===Su&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Li||a===Su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ko=4,Ug=[.125,.215,.35,.446,.526,.582],Pr=20,Mf=new xr,Fg=new He,bf=null,Sf=0,wf=0,Tf=!1,Rr=(1+Math.sqrt(5))/2,Bo=1/Rr,Ng=[new M(-Rr,Bo,0),new M(Rr,Bo,0),new M(-Bo,0,Rr),new M(Bo,0,Rr),new M(0,Rr,-Bo),new M(0,Rr,Bo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],x1=new M,Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=x1}=r;bf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Sf,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:wi,format:qn,colorSpace:cr,depthBuffer:!1},s=zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(r)),this._blurMaterial=_1(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Mf)}_sceneToCubeUV(e,t,i,s,r){let l=new In(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Fg),h.toneMapping=ds,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new Ot({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new pe(new Ye,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(Fg),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let T=this._cubeSize;lh(s,y*T,v>2?T:0,T,T),h.setRenderTarget(s),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===br||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;lh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ng[(s-r-1)%Ng.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pr-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Pr;g>Pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);let m=[],_=0;for(let R=0;R<Pr;++R){let C=R/x,b=Math.exp(-C*C/2);m.push(b),R===0?_+=b:R<g&&(_+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let y=this._sizeLods[s],T=3*y*(s>v-ko?s-v+ko:0),w=4*(this._cubeSize-y);lh(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Mf)}};function y1(n){let e=[],t=[],i=[],s=n,r=n-ko+1+Ug.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ko?l=Ug[o-n+ko-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,C=w>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(b,x*p*w),v.set(d,g*p*w);let S=[w,w,w,w,w,w];y.set(S,m*p*w)}let T=new rt;T.setAttribute("position",new zt(_,x)),T.setAttribute("uv",new zt(v,g)),T.setAttribute("faceIndex",new zt(y,m)),e.push(T),s>ko&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zg(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _1(n,e,t){let i=new Float32Array(Pr),s=new M(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Og(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Bg(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Ff(){return`

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
	`}function v1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Li||l===Su,u=l===br||l===Sr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Go(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Go(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function M1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b1(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let T=_[v+0],w=_[v+1],R=_[v+2];d.push(T,w,w,R,R,T)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let T=v+0,w=v+1,R=v+2;d.push(T,w,w,R,R,T)}}else return;let g=new(mf(d)?Ba:Oa)(d,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function S1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function h(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function w1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T1(n,e,t){let i=new WeakMap,s=new Jt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*h),R=new za(w,y,T,h);R.type=Fi,R.needsUpdate=!0;let C=v*4;for(let S=0;S<h;S++){let A=g[S],I=m[S],O=_[S],z=y*T*4*S;for(let V=0;V<A.count;V++){let B=V*C;f===!0&&(s.fromBufferAttribute(A,V),w[z+B+0]=s.x,w[z+B+1]=s.y,w[z+B+2]=s.z,w[z+B+3]=0),p===!0&&(s.fromBufferAttribute(I,V),w[z+B+4]=s.x,w[z+B+5]=s.y,w[z+B+6]=s.z,w[z+B+7]=0),x===!0&&(s.fromBufferAttribute(O,V),w[z+B+8]=s.x,w[z+B+9]=s.y,w[z+B+10]=s.z,w[z+B+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ce(y,T)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function E1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var s0=new Un,kg=new Xa(1,1),r0=new za,o0=new Gc,a0=new Va,Vg=[],Gg=[],Hg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vg[s];if(r===void 0&&(r=new Float32Array(s),Vg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hh(n,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function I1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;Xg.set(i),n.uniformMatrix2fv(this.addr,!1,Xg),_n(t,i)}}function D1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;Wg.set(i),n.uniformMatrix3fv(this.addr,!1,Wg),_n(t,i)}}function L1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;Hg.set(i),n.uniformMatrix4fv(this.addr,!1,Hg),_n(t,i)}}function U1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function O1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function V1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function G1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kg.compareFunction=df,r=kg):r=s0,t.setTexture2D(e||r,s)}function H1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||o0,s)}function W1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||a0,s)}function X1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||r0,s)}function q1(n){switch(n){case 5126:return A1;case 35664:return C1;case 35665:return R1;case 35666:return P1;case 35674:return I1;case 35675:return D1;case 35676:return L1;case 5124:case 35670:return U1;case 35667:case 35671:return F1;case 35668:case 35672:return N1;case 35669:case 35673:return z1;case 5125:return O1;case 36294:return B1;case 36295:return k1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}function Y1(n,e){n.uniform1fv(this.addr,e)}function Z1(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function j1(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function J1(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function $1(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K1(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q1(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||s0,r[o])}function cS(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||o0,r[o])}function uS(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a0,r[o])}function hS(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||r0,r[o])}function dS(n){switch(n){case 5126:return Y1;case 35664:return Z1;case 35665:return j1;case 35666:return J1;case 35674:return $1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}var Af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q1(t.type)}},Cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}},Rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ef=/(\w+)(\])?(\[|\.)?/g;function qg(n,e){n.seq.push(e),n.map[e.id]=e}function fS(n,e,t){let i=n.name,s=i.length;for(Ef.lastIndex=0;;){let r=Ef.exec(i),o=Ef.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qg(t,c===void 0?new Af(a,n,e):new Cf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Rf(a),qg(t,h)),t=h}}}var Vo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Yg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pS=37297,mS=0;function gS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zg=new ht;function xS(n){Ct._getMatrix(Zg,Ct.workingColorSpace,n);let e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gS(n.getShaderSource(e),a)}else return r}function yS(n,e){let t=xS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _S(n,e){let t;switch(e){case gu:t="Linear";break;case xu:t="Reinhard";break;case yu:t="Cineon";break;case _u:t="ACESFilmic";break;case Mu:t="AgX";break;case bu:t="Neutral";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new M;function vS(){Ct.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function bS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xl(n){return n!==""}function Jg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(n){return n.replace(wS,ES)}var TS=new Map;function ES(n,e){let t=dt[e];if(t===void 0){let i=TS.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}var AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(n){return n.replace(AS,CS)}function CS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function RS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function DS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function LS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function US(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=RS(t),c=PS(t),u=IS(t),h=DS(t),d=LS(t),f=MS(t),p=bS(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xl).join(`
`),m.length>0&&(m+=`
`)):(g=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),m=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?dt.tonemapping_pars_fragment:"",t.toneMapping!==ds?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),vS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xl).join(`
`)),o=Pf(o),o=Jg(o,t),o=$g(o,t),a=Pf(a),a=Jg(a,t),a=$g(a,t),o=Kg(o),a=Kg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,y=_+m+a,T=Yg(s,s.VERTEX_SHADER,v),w=Yg(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(w)||"",V=I.trim(),B=O.trim(),K=z.trim(),N=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,w);else{let W=jg(s,T,"vertex"),J=jg(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+W+`
`+J)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||K==="")&&(F=!1);F&&(A.diagnostics={runnable:N,programLog:V,vertexShader:{log:B,prefix:g},fragmentShader:{log:K,prefix:m}})}s.deleteShader(T),s.deleteShader(w),C=new Vo(s,x),b=SS(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,pS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var FS=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Df(e),t.set(e,i)),i}},Df=class{constructor(e){this.id=FS++,this.code=e,this.usedTimes=0}};function NS(n,e,t,i,s,r,o){let a=new Mo,l=new If,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,A,I,O){let z=I.fog,V=O.geometry,B=b.isMeshStandardMaterial?I.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),N=K&&K.mapping===hl?K.image.height:null,F=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=W!==void 0?W.length:0,ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let ye,Te,Ue,H;if(F){let ge=Ji[F];ye=ge.vertexShader,Te=ge.fragmentShader}else ye=b.vertexShader,Te=b.fragmentShader,l.update(b),Ue=l.getVertexShaderID(b),H=l.getFragmentShaderID(b);let Q=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,U=O.isBatchedMesh===!0,$=!!b.map,he=!!b.matcap,D=!!K,le=!!b.aoMap,ie=!!b.lightMap,ee=!!b.bumpMap,se=!!b.normalMap,Me=!!b.displacementMap,xe=!!b.emissiveMap,Ae=!!b.metalnessMap,Je=!!b.roughnessMap,Ze=b.anisotropy>0,L=b.clearcoat>0,E=b.dispersion>0,Z=b.iridescence>0,oe=b.sheen>0,fe=b.transmission>0,ae=Ze&&!!b.anisotropyMap,Ve=L&&!!b.clearcoatMap,we=L&&!!b.clearcoatNormalMap,ze=L&&!!b.clearcoatRoughnessMap,Oe=Z&&!!b.iridescenceMap,me=Z&&!!b.iridescenceThicknessMap,Pe=oe&&!!b.sheenColorMap,$e=oe&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Ie=!!b.specularColorMap,ot=!!b.specularIntensityMap,G=fe&&!!b.transmissionMap,_e=fe&&!!b.thicknessMap,Ce=!!b.gradientMap,Be=!!b.alphaMap,ve=b.alphaTest>0,de=!!b.alphaHash,We=!!b.extensions,X=ds;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(X=n.toneMapping);let j={shaderID:F,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:Te,defines:b.defines,customVertexShaderID:Ue,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:U,batchingColor:U&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:cr,alphaToCoverage:!!b.alphaToCoverage,map:$,matcap:he,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:N,aoMap:le,lightMap:ie,bumpMap:ee,normalMap:se,displacementMap:d&&Me,emissiveMap:xe,normalMapObjectSpace:se&&b.normalMapType===xg,normalMapTangentSpace:se&&b.normalMapType===oh,metalnessMap:Ae,roughnessMap:Je,anisotropy:Ze,anisotropyMap:ae,clearcoat:L,clearcoatMap:Ve,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:E,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:me,sheen:oe,sheenColorMap:Pe,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:ot,transmission:fe,transmissionMap:G,thicknessMap:_e,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===ar&&b.alphaToCoverage===!1,alphaMap:Be,alphaTest:ve,alphaHash:de,combine:b.combine,mapUv:$&&x(b.map.channel),aoMapUv:le&&x(b.aoMap.channel),lightMapUv:ie&&x(b.lightMap.channel),bumpMapUv:ee&&x(b.bumpMap.channel),normalMapUv:se&&x(b.normalMap.channel),displacementMapUv:Me&&x(b.displacementMap.channel),emissiveMapUv:xe&&x(b.emissiveMap.channel),metalnessMapUv:Ae&&x(b.metalnessMap.channel),roughnessMapUv:Je&&x(b.roughnessMap.channel),anisotropyMapUv:ae&&x(b.anisotropyMap.channel),clearcoatMapUv:Ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(b.sheenRoughnessMap.channel),specularMapUv:Ge&&x(b.specularMap.channel),specularColorMapUv:Ie&&x(b.specularColorMap.channel),specularIntensityMapUv:ot&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:_e&&x(b.thicknessMap.channel),alphaMapUv:Be&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||Ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&($||Be),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:X,decodeVideoTexture:$&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||U)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=p[b.type],A;if(S){let I=Ji[S];A=Er.clone(I.uniforms)}else A=b.uniforms;return A}function T(b,S){let A;for(let I=0,O=u.length;I<O;I++){let z=u[I];if(z.cacheKey===S){A=z,++A.usedTimes;break}}return A===void 0&&(A=new US(n,S,b,r),u.push(A)),A}function w(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}function zS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function OS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||OS),i.length>1&&i.sort(d||e0),s.length>1&&s.sort(d||e0)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function BS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new t0,n.set(i,[o])):s>=r.length?(o=new t0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new He};break;case"SpotLight":t={position:new M,direction:new M,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function VS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var GS=0;function HS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WS(n){let e=new kS,t=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new wt,o=new wt;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,v=0,y=0,T=0,w=0,R=0;c.sort(HS);for(let b=0,S=c.length;b<S;b++){let A=c[b],I=A.color,O=A.intensity,z=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*O,h+=I.g*O,d+=I.b*O;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],O);R++}else if(A.isDirectionalLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,N=t.get(A);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=A.shadow.matrix,_++}i.directional[f]=B,f++}else if(A.isSpotLight){let B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(I).multiplyScalar(O),B.distance=z,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[x]=B;let K=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,K.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[x]=K.matrix,A.castShadow){let N=t.get(A);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=V,y++}x++}else if(A.isRectAreaLight){let B=e.get(A);B.color.copy(I).multiplyScalar(O),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=B,g++}else if(A.isPointLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let K=A.shadow,N=t.get(A);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[p]=N,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=A.shadow.matrix,v++}i.point[p]=B,p++}else if(A.isHemisphereLight){let B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(O),B.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[m]=B,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=R,i.version=GS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function n0(n){let e=new WS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function XS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new n0(n),e.set(s,[a])):r>=o.length?(a=new n0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var qS=`void main() {
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
}`;function ZS(n,e,t){let i=new Ao,s=new ce,r=new ce,o=new Jt,a=new Jc({depthPacking:gg}),l=new $c,c={},u=t.maxTextureSize,h={[ri]:Xn,[Xn]:ri,[cn]:cn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:qS,fragmentShader:YS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new rt;p.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let m=this.type;this.render=function(w,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=m!==ji&&this.type===ji,z=m===ji&&this.type!==ji;for(let V=0,B=w.length;V<B;V++){let K=w[V],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let F=N.getFrameExtents();if(s.multiply(F),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/F.x),s.x=r.x*F.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/F.y),s.y=r.y*F.y,N.mapSize.y=r.y)),N.map===null||O===!0||z===!0){let J=this.type!==ji?{minFilter:Jn,magFilter:Jn}:{};N.map!==null&&N.map.dispose(),N.map=new Fn(s.x,s.y,J),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let W=N.getViewportCount();for(let J=0;J<W;J++){let ue=N.getViewport(J);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),I.viewport(o),N.updateMatrices(K,J),i=N.getFrustum(),y(R,C,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===ji&&_(N,C),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,A)};function _(w,R){let C=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,C,f,x,null)}function v(w,R,C,b){let S=null,A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=S.uuid,O=R.uuid,z=c[I];z===void 0&&(z={},c[I]=z);let V=z[O];V===void 0&&(V=S.clone(),z[O]=V,R.addEventListener("dispose",T)),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,b===ji?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=n.properties.get(S);I.light=C}return S}function y(w,R,C,b,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let O=e.update(w),z=w.material;if(Array.isArray(z)){let V=O.groups;for(let B=0,K=V.length;B<K;B++){let N=V[B],F=z[N.materialIndex];if(F&&F.visible){let W=v(w,F,b,S);w.onBeforeShadow(n,w,R,C,O,W,N),n.renderBufferDirect(C,null,O,W,w,N),w.onAfterShadow(n,w,R,C,O,W,N)}}}else if(z.visible){let V=v(w,z,b,S);w.onBeforeShadow(n,w,R,C,O,V,null),n.renderBufferDirect(C,null,O,V,w,null),w.onAfterShadow(n,w,R,C,O,V,null)}}let I=w.children;for(let O=0,z=I.length;O<z;O++)y(I[O],R,C,b,S)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let b=c[C],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var jS={[lu]:cu,[uu]:fu,[hu]:pu,[lr]:du,[cu]:lu,[fu]:uu,[pu]:hu,[du]:lr};function JS(n,e){function t(){let G=!1,_e=new Jt,Ce=null,Be=new Jt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!G&&(n.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){G=ve},setClear:function(ve,de,We,X,j){j===!0&&(ve*=X,de*=X,We*=X),_e.set(ve,de,We,X),Be.equals(_e)===!1&&(n.clearColor(ve,de,We,X),Be.copy(_e))},reset:function(){G=!1,Ce=null,Be.set(-1,0,0,0)}}}function i(){let G=!1,_e=!1,Ce=null,Be=null,ve=null;return{setReversed:function(de){if(_e!==de){let We=e.get("EXT_clip_control");de?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),_e=de;let X=ve;ve=null,this.setClear(X)}},getReversed:function(){return _e},setTest:function(de){de?Q(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(de){Ce!==de&&!G&&(n.depthMask(de),Ce=de)},setFunc:function(de){if(_e&&(de=jS[de]),Be!==de){switch(de){case lu:n.depthFunc(n.NEVER);break;case cu:n.depthFunc(n.ALWAYS);break;case uu:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case hu:n.depthFunc(n.EQUAL);break;case du:n.depthFunc(n.GEQUAL);break;case fu:n.depthFunc(n.GREATER);break;case pu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=de}},setLocked:function(de){G=de},setClear:function(de){ve!==de&&(_e&&(de=1-de),n.clearDepth(de),ve=de)},reset:function(){G=!1,Ce=null,Be=null,ve=null,_e=!1}}}function s(){let G=!1,_e=null,Ce=null,Be=null,ve=null,de=null,We=null,X=null,j=null;return{setTest:function(ge){G||(ge?Q(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ge){_e!==ge&&!G&&(n.stencilMask(ge),_e=ge)},setFunc:function(ge,Xe,Fe){(Ce!==ge||Be!==Xe||ve!==Fe)&&(n.stencilFunc(ge,Xe,Fe),Ce=ge,Be=Xe,ve=Fe)},setOp:function(ge,Xe,Fe){(de!==ge||We!==Xe||X!==Fe)&&(n.stencilOp(ge,Xe,Fe),de=ge,We=Xe,X=Fe)},setLocked:function(ge){G=ge},setClear:function(ge){j!==ge&&(n.clearStencil(ge),j=ge)},reset:function(){G=!1,_e=null,Ce=null,Be=null,ve=null,de=null,We=null,X=null,j=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,T=null,w=null,R=new He(0,0,0),C=0,b=!1,S=null,A=null,I=null,O=null,z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=K>=2);let F=null,W={},J=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ye=new Jt().fromArray(J),Te=new Jt().fromArray(ue);function Ue(G,_e,Ce,Be){let ve=new Uint8Array(4),de=n.createTexture();n.bindTexture(G,de),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<Ce;We++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(_e+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return de}let H={};H[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(lr),ee(!1),se(Qd),Q(n.CULL_FACE),le(hs);function Q(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Se(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Re(G,_e){return h[G]!==_e?(n.bindFramebuffer(G,_e),h[G]=_e,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_e),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function U(G,_e){let Ce=f,Be=!1;if(G){Ce=d.get(_e),Ce===void 0&&(Ce=[],d.set(_e,Ce));let ve=G.textures;if(Ce.length!==ve.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let de=0,We=ve.length;de<We;de++)Ce[de]=n.COLOR_ATTACHMENT0+de;Ce.length=ve.length,Be=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Be=!0);Be&&n.drawBuffers(Ce)}function $(G){return p!==G?(n.useProgram(G),p=G,!0):!1}let he={[Rs]:n.FUNC_ADD,[jm]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};he[$m]=n.MIN,he[Km]=n.MAX;let D={[Qm]:n.ZERO,[eg]:n.ONE,[tg]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[ag]:n.SRC_ALPHA_SATURATE,[rg]:n.DST_COLOR,[ig]:n.DST_ALPHA,[ng]:n.ONE_MINUS_SRC_COLOR,[Nc]:n.ONE_MINUS_SRC_ALPHA,[og]:n.ONE_MINUS_DST_COLOR,[sg]:n.ONE_MINUS_DST_ALPHA,[lg]:n.CONSTANT_COLOR,[cg]:n.ONE_MINUS_CONSTANT_COLOR,[ug]:n.CONSTANT_ALPHA,[hg]:n.ONE_MINUS_CONSTANT_ALPHA};function le(G,_e,Ce,Be,ve,de,We,X,j,ge){if(G===hs){x===!0&&(Se(n.BLEND),x=!1);return}if(x===!1&&(Q(n.BLEND),x=!0),G!==Zm){if(G!==g||ge!==b){if((m!==Rs||y!==Rs)&&(n.blendEquation(n.FUNC_ADD),m=Rs,y=Rs),ge)switch(G){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,v=null,T=null,w=null,R.set(0,0,0),C=0,g=G,b=ge}return}ve=ve||_e,de=de||Ce,We=We||Be,(_e!==m||ve!==y)&&(n.blendEquationSeparate(he[_e],he[ve]),m=_e,y=ve),(Ce!==_||Be!==v||de!==T||We!==w)&&(n.blendFuncSeparate(D[Ce],D[Be],D[de],D[We]),_=Ce,v=Be,T=de,w=We),(X.equals(R)===!1||j!==C)&&(n.blendColor(X.r,X.g,X.b,j),R.copy(X),C=j),g=G,b=!1}function ie(G,_e){G.side===cn?Se(n.CULL_FACE):Q(n.CULL_FACE);let Ce=G.side===Xn;_e&&(Ce=!Ce),ee(Ce),G.blending===ar&&G.transparent===!1?le(hs):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Be=G.stencilWrite;a.setTest(Be),Be&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function se(G){G!==Xm?(Q(n.CULL_FACE),G!==A&&(G===Qd?n.cullFace(n.BACK):G===qm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),A=G}function Me(G){G!==I&&(B&&n.lineWidth(G),I=G)}function xe(G,_e,Ce){G?(Q(n.POLYGON_OFFSET_FILL),(O!==_e||z!==Ce)&&(n.polygonOffset(_e,Ce),O=_e,z=Ce)):Se(n.POLYGON_OFFSET_FILL)}function Ae(G){G?Q(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Je(G){G===void 0&&(G=n.TEXTURE0+V-1),F!==G&&(n.activeTexture(G),F=G)}function Ze(G,_e,Ce){Ce===void 0&&(F===null?Ce=n.TEXTURE0+V-1:Ce=F);let Be=W[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},W[Ce]=Be),(Be.type!==G||Be.texture!==_e)&&(F!==Ce&&(n.activeTexture(Ce),F=Ce),n.bindTexture(G,_e||H[G]),Be.type=G,Be.texture=_e)}function L(){let G=W[F];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){ye.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function $e(G){Te.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Te.copy(G))}function Ge(G,_e){let Ce=c.get(_e);Ce===void 0&&(Ce=new WeakMap,c.set(_e,Ce));let Be=Ce.get(G);Be===void 0&&(Be=n.getUniformBlockIndex(_e,G.name),Ce.set(G,Be))}function Ie(G,_e){let Be=c.get(_e).get(G);l.get(_e)!==Be&&(n.uniformBlockBinding(_e,Be,G.__bindingPointIndex),l.set(_e,Be))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},F=null,W={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,T=null,w=null,R=new He(0,0,0),C=0,b=!1,S=null,A=null,I=null,O=null,z=null,ye.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:Se,bindFramebuffer:Re,drawBuffers:U,useProgram:$,setBlending:le,setMaterial:ie,setFlipSided:ee,setCullFace:se,setLineWidth:Me,setPolygonOffset:xe,setScissorTest:Ae,activeTexture:Je,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Oe,texImage3D:me,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:we,texStorage3D:ze,texSubImage2D:oe,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ve,scissor:Pe,viewport:$e,reset:ot}}function $S(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return f?new OffscreenCanvas(L,E):yo("canvas")}function x(L,E,Z){let oe=1,fe=Ze(L);if((fe.width>Z||fe.height>Z)&&(oe=Z/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ae=Math.floor(oe*fe.width),Ve=Math.floor(oe*fe.height);h===void 0&&(h=p(ae,Ve));let we=E?p(ae,Ve):h;return we.width=ae,we.height=Ve,we.getContext("2d").drawImage(L,0,0,ae,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ae+"x"+Ve+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(L,E,Z,oe,fe=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=E;if(E===n.RED&&(Z===n.FLOAT&&(ae=n.R32F),Z===n.HALF_FLOAT&&(ae=n.R16F),Z===n.UNSIGNED_BYTE&&(ae=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ae=n.R8UI),Z===n.UNSIGNED_SHORT&&(ae=n.R16UI),Z===n.UNSIGNED_INT&&(ae=n.R32UI),Z===n.BYTE&&(ae=n.R8I),Z===n.SHORT&&(ae=n.R16I),Z===n.INT&&(ae=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(ae=n.RG32F),Z===n.HALF_FLOAT&&(ae=n.RG16F),Z===n.UNSIGNED_BYTE&&(ae=n.RG8)),E===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ae=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ae=n.RG16UI),Z===n.UNSIGNED_INT&&(ae=n.RG32UI),Z===n.BYTE&&(ae=n.RG8I),Z===n.SHORT&&(ae=n.RG16I),Z===n.INT&&(ae=n.RG32I)),E===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),Z===n.UNSIGNED_INT&&(ae=n.RGB32UI),Z===n.BYTE&&(ae=n.RGB8I),Z===n.SHORT&&(ae=n.RGB16I),Z===n.INT&&(ae=n.RGB32I)),E===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ae=n.RGBA32UI),Z===n.BYTE&&(ae=n.RGBA8I),Z===n.SHORT&&(ae=n.RGBA16I),Z===n.INT&&(ae=n.RGBA32I)),E===n.RGB&&(Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),E===n.RGBA){let Ve=fe?Fa:Ct.getTransfer(oe);Z===n.FLOAT&&(ae=n.RGBA32F),Z===n.HALF_FLOAT&&(ae=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ae=Ve===Ut?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(L,E){let Z;return L?E===null||E===Ns||E===zo?Z=n.DEPTH24_STENCIL8:E===Fi?Z=n.DEPTH32F_STENCIL8:E===No&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ns||E===zo?Z=n.DEPTH_COMPONENT24:E===Fi?Z=n.DEPTH_COMPONENT32F:E===No&&(Z=n.DEPTH_COMPONENT16),Z}function T(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jn&&L.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){let E=L.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function R(L){let E=L.target;E.removeEventListener("dispose",R),S(E)}function C(L){let E=i.get(L);if(E.__webglInit===void 0)return;let Z=L.source,oe=d.get(Z);if(oe){let fe=oe[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(L),Object.keys(oe).length===0&&d.delete(Z)}i.remove(L)}function b(L){let E=i.get(L);n.deleteTexture(E.__webglTexture);let Z=L.source,oe=d.get(Z);delete oe[E.__cacheKey],o.memory.textures--}function S(L){let E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let fe=0;fe<E.__webglFramebuffer[oe].length;fe++)n.deleteFramebuffer(E.__webglFramebuffer[oe][fe]);else n.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)n.deleteFramebuffer(E.__webglFramebuffer[oe]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Z=L.textures;for(let oe=0,fe=Z.length;oe<fe;oe++){let ae=i.get(Z[oe]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(Z[oe])}i.remove(L)}let A=0;function I(){A=0}function O(){let L=A;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),A+=1,L}function z(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function V(L,E){let Z=i.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Z,L,E);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function B(L,E){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){H(Z,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function K(L,E){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){H(Z,L,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function N(L,E){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let F={[Ln]:n.REPEAT,[Cs]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},W={[Jn]:n.NEAREST,[pg]:n.NEAREST_MIPMAP_NEAREST,[dl]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[wu]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},J={[yg]:n.NEVER,[wg]:n.ALWAYS,[_g]:n.LESS,[df]:n.LEQUAL,[vg]:n.EQUAL,[Sg]:n.GEQUAL,[Mg]:n.GREATER,[bg]:n.NOTEQUAL};function ue(L,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ln||E.magFilter===wu||E.magFilter===dl||E.magFilter===zn||E.minFilter===ln||E.minFilter===wu||E.minFilter===dl||E.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,F[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,F[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,F[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,W[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jn||E.minFilter!==dl&&E.minFilter!==zn||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));let oe=E.source,fe=d.get(oe);fe===void 0&&(fe={},d.set(oe,fe));let ae=z(E);if(ae!==L.__cacheKey){fe[ae]===void 0&&(fe[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),fe[ae].usedTimes++;let Ve=fe[L.__cacheKey];Ve!==void 0&&(fe[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(E)),L.__cacheKey=ae,L.__webglTexture=fe[ae].texture}return Z}function Te(L,E,Z){return Math.floor(Math.floor(L/Z)/E)}function Ue(L,E,Z,oe){let ae=L.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Z,oe,E.data);else{ae.sort((me,Pe)=>me.start-Pe.start);let Ve=0;for(let me=1;me<ae.length;me++){let Pe=ae[Ve],$e=ae[me],Ge=Pe.start+Pe.count,Ie=Te($e.start,E.width,4),ot=Te(Pe.start,E.width,4);$e.start<=Ge+1&&Ie===ot&&Te($e.start+$e.count-1,E.width,4)===Ie?Pe.count=Math.max(Pe.count,$e.start+$e.count-Pe.start):(++Ve,ae[Ve]=$e)}ae.length=Ve+1;let we=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let me=0,Pe=ae.length;me<Pe;me++){let $e=ae[me],Ge=Math.floor($e.start/4),Ie=Math.ceil($e.count/4),ot=Ge%E.width,G=Math.floor(Ge/E.width),_e=Ie,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ot,G,_e,Ce,Z,oe,E.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,we),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function H(L,E,Z){let oe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=n.TEXTURE_3D);let fe=ye(L,E),ae=E.source;t.bindTexture(oe,L.__webglTexture,n.TEXTURE0+Z);let Ve=i.get(ae);if(ae.version!==Ve.__version||fe===!0){t.activeTexture(n.TEXTURE0+Z);let we=Ct.getPrimaries(Ct.workingColorSpace),ze=E.colorSpace===fs?null:Ct.getPrimaries(E.colorSpace),Oe=E.colorSpace===fs||we===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let me=x(E.image,!1,s.maxTextureSize);me=Je(E,me);let Pe=r.convert(E.format,E.colorSpace),$e=r.convert(E.type),Ge=v(E.internalFormat,Pe,$e,E.colorSpace,E.isVideoTexture);ue(oe,E);let Ie,ot=E.mipmaps,G=E.isVideoTexture!==!0,_e=Ve.__version===void 0||fe===!0,Ce=ae.dataReady,Be=T(E,me);if(E.isDepthTexture)Ge=y(E.format===Oo,E.type),_e&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ge,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ge,me.width,me.height,0,Pe,$e,null));else if(E.isDataTexture)if(ot.length>0){G&&_e&&t.texStorage2D(n.TEXTURE_2D,Be,Ge,ot[0].width,ot[0].height);for(let ve=0,de=ot.length;ve<de;ve++)Ie=ot[ve],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,$e,Ie.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Pe,$e,Ie.data);E.generateMipmaps=!1}else G?(_e&&t.texStorage2D(n.TEXTURE_2D,Be,Ge,me.width,me.height),Ce&&Ue(E,me,Pe,$e)):t.texImage2D(n.TEXTURE_2D,0,Ge,me.width,me.height,0,Pe,$e,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ge,ot[0].width,ot[0].height,me.depth);for(let ve=0,de=ot.length;ve<de;ve++)if(Ie=ot[ve],E.format!==qn)if(Pe!==null)if(G){if(Ce)if(E.layerUpdates.size>0){let We=vf(Ie.width,Ie.height,E.format,E.type);for(let X of E.layerUpdates){let j=Ie.data.subarray(X*We/Ie.data.BYTES_PER_ELEMENT,(X+1)*We/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,X,Ie.width,Ie.height,1,Pe,j)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,me.depth,Pe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,me.depth,Pe,$e,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,Ie.width,Ie.height,me.depth,0,Pe,$e,Ie.data)}else{G&&_e&&t.texStorage2D(n.TEXTURE_2D,Be,Ge,ot[0].width,ot[0].height);for(let ve=0,de=ot.length;ve<de;ve++)Ie=ot[ve],E.format!==qn?Pe!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,$e,Ie.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Pe,$e,Ie.data)}else if(E.isDataArrayTexture)if(G){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ge,me.width,me.height,me.depth),Ce)if(E.layerUpdates.size>0){let ve=vf(me.width,me.height,E.format,E.type);for(let de of E.layerUpdates){let We=me.data.subarray(de*ve/me.data.BYTES_PER_ELEMENT,(de+1)*ve/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,me.width,me.height,1,Pe,$e,We)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,$e,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,me.width,me.height,me.depth,0,Pe,$e,me.data);else if(E.isData3DTexture)G?(_e&&t.texStorage3D(n.TEXTURE_3D,Be,Ge,me.width,me.height,me.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,$e,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,me.width,me.height,me.depth,0,Pe,$e,me.data);else if(E.isFramebufferTexture){if(_e)if(G)t.texStorage2D(n.TEXTURE_2D,Be,Ge,me.width,me.height);else{let ve=me.width,de=me.height;for(let We=0;We<Be;We++)t.texImage2D(n.TEXTURE_2D,We,Ge,ve,de,0,Pe,$e,null),ve>>=1,de>>=1}}else if(ot.length>0){if(G&&_e){let ve=Ze(ot[0]);t.texStorage2D(n.TEXTURE_2D,Be,Ge,ve.width,ve.height)}for(let ve=0,de=ot.length;ve<de;ve++)Ie=ot[ve],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe,$e,Ie):t.texImage2D(n.TEXTURE_2D,ve,Ge,Pe,$e,Ie);E.generateMipmaps=!1}else if(G){if(_e){let ve=Ze(me);t.texStorage2D(n.TEXTURE_2D,Be,Ge,ve.width,ve.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,$e,me)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Pe,$e,me);g(E)&&m(oe),Ve.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Q(L,E,Z){if(E.image.length!==6)return;let oe=ye(L,E),fe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);let ae=i.get(fe);if(fe.version!==ae.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z);let Ve=Ct.getPrimaries(Ct.workingColorSpace),we=E.colorSpace===fs?null:Ct.getPrimaries(E.colorSpace),ze=E.colorSpace===fs||Ve===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let de=0;de<6;de++)!Oe&&!me?Pe[de]=x(E.image[de],!0,s.maxCubemapSize):Pe[de]=me?E.image[de].image:E.image[de],Pe[de]=Je(E,Pe[de]);let $e=Pe[0],Ge=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),ot=v(E.internalFormat,Ge,Ie,E.colorSpace),G=E.isVideoTexture!==!0,_e=ae.__version===void 0||oe===!0,Ce=fe.dataReady,Be=T(E,$e);ue(n.TEXTURE_CUBE_MAP,E);let ve;if(Oe){G&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,ot,$e.width,$e.height);for(let de=0;de<6;de++){ve=Pe[de].mipmaps;for(let We=0;We<ve.length;We++){let X=ve[We];E.format!==qn?Ge!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,X.width,X.height,Ge,X.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,ot,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,X.width,X.height,Ge,Ie,X.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,ot,X.width,X.height,0,Ge,Ie,X.data)}}}else{if(ve=E.mipmaps,G&&_e){ve.length>0&&Be++;let de=Ze(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,ot,de.width,de.height)}for(let de=0;de<6;de++)if(me){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Pe[de].width,Pe[de].height,Ge,Ie,Pe[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Pe[de].width,Pe[de].height,0,Ge,Ie,Pe[de].data);for(let We=0;We<ve.length;We++){let j=ve[We].image[de].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,j.width,j.height,Ge,Ie,j.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,ot,j.width,j.height,0,Ge,Ie,j.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ge,Ie,Pe[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Ge,Ie,Pe[de]);for(let We=0;We<ve.length;We++){let X=ve[We];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,Ge,Ie,X.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,ot,Ge,Ie,X.image[de])}}}g(E)&&m(n.TEXTURE_CUBE_MAP),ae.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,Z,oe,fe,ae){let Ve=r.convert(Z.format,Z.colorSpace),we=r.convert(Z.type),ze=v(Z.internalFormat,Ve,we,Z.colorSpace),Oe=i.get(E),me=i.get(Z);if(me.__renderTarget=E,!Oe.__hasExternalTextures){let Pe=Math.max(1,E.width>>ae),$e=Math.max(1,E.height>>ae);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,ae,ze,Pe,$e,E.depth,0,Ve,we,null):t.texImage2D(fe,ae,ze,Pe,$e,0,Ve,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,fe,me.__webglTexture,0,Me(E)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,fe,me.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(L,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){let oe=E.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,ae=y(E.stencilBuffer,fe),Ve=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=Me(E);xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ae,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,L)}else{let oe=E.textures;for(let fe=0;fe<oe.length;fe++){let ae=oe[fe],Ve=r.convert(ae.format,ae.colorSpace),we=r.convert(ae.type),ze=v(ae.internalFormat,Ve,we,ae.colorSpace),Oe=Me(E);Z&&xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ze,E.width,E.height):xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,ze,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ze,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let oe=i.get(E.depthTexture);oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);let fe=oe.__webglTexture,ae=Me(E);if(E.depthTexture.format===go)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Oo)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function $(L){let E=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let oe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){let fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=oe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let oe=L.texture.mipmaps;oe&&oe.length>0?U(E.__webglFramebuffer[0],L):U(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=n.createRenderbuffer(),Re(E.__webglDepthbuffer[oe],L,!1);else{let fe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,ae)}}else{let oe=L.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Re(E.__webglDepthbuffer,L,!1);else{let fe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(L,E,Z){let oe=i.get(L);E!==void 0&&Se(oe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&$(L)}function D(L){let E=L.texture,Z=i.get(L),oe=i.get(E);L.addEventListener("dispose",R);let fe=L.textures,ae=L.isWebGLCubeRenderTarget===!0,Ve=fe.length>1;if(Ve||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=E.version,o.memory.textures++),ae){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let ze=0;ze<E.mipmaps.length;ze++)Z.__webglFramebuffer[we][ze]=n.createFramebuffer()}else Z.__webglFramebuffer[we]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Z.__webglFramebuffer[we]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let we=0,ze=fe.length;we<ze;we++){let Oe=i.get(fe[we]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&xe(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<fe.length;we++){let ze=fe[we];Z.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);let Oe=r.convert(ze.format,ze.colorSpace),me=r.convert(ze.type),Pe=v(ze.internalFormat,Oe,me,ze.colorSpace,L.isXRRenderTarget===!0),$e=Me(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ue(n.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Se(Z.__webglFramebuffer[we][ze],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else Se(Z.__webglFramebuffer[we],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let we=0,ze=fe.length;we<ze;we++){let Oe=fe[we],me=i.get(Oe),Pe=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),ue(Pe,Oe),Se(Z.__webglFramebuffer,L,Oe,n.COLOR_ATTACHMENT0+we,Pe,0),g(Oe)&&m(Pe)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,oe.__webglTexture),ue(we,E),E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Se(Z.__webglFramebuffer[ze],L,E,n.COLOR_ATTACHMENT0,we,ze);else Se(Z.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,we,0);g(E)&&m(we),t.unbindTexture()}L.depthBuffer&&$(L)}function le(L){let E=L.textures;for(let Z=0,oe=E.length;Z<oe;Z++){let fe=E[Z];if(g(fe)){let ae=_(L),Ve=i.get(fe).__webglTexture;t.bindTexture(ae,Ve),m(ae),t.unbindTexture()}}}let ie=[],ee=[];function se(L){if(L.samples>0){if(xe(L)===!1){let E=L.textures,Z=L.width,oe=L.height,fe=n.COLOR_BUFFER_BIT,ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(L),we=E.length>1;if(we)for(let Oe=0;Oe<E.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);let ze=L.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let me=i.get(E[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,fe,n.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(n.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ie.push(ae),ee.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Oe=0;Oe<E.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let me=i.get(E[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Me(L){return Math.min(s.maxSamples,L.samples)}function xe(L){let E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Je(L,E){let Z=L.colorSpace,oe=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==cr&&Z!==fs&&(Ct.getTransfer(Z)===Ut?(oe!==qn||fe!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=he,this.setupRenderTarget=D,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=xe}function KS(n,e){function t(i,s=fs){let r,o=Ct.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rf)return n.BYTE;if(i===of)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===Ns)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===cf)return n.ALPHA;if(i===uf)return n.RGB;if(i===qn)return n.RGBA;if(i===go)return n.DEPTH_COMPONENT;if(i===Oo)return n.DEPTH_STENCIL;if(i===Cu)return n.RED;if(i===Ru)return n.RED_INTEGER;if(i===hf)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===fl||i===pl||i===ml||i===gl)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Du||i===Lu||i===Uu||i===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===zu||i===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nu||i===zu)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ou)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bu||i===ku||i===Vu||i===Gu||i===Hu||i===Wu||i===Xu||i===qu||i===Yu||i===Zu||i===ju||i===Ju||i===$u||i===Ku)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ku)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ju)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qu||i===eh||i===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qu)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===sh||i===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var QS=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new En({vertexShader:QS,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new An(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uf=class extends Zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Lf,m={},_=t.getContextAttributes(),v=null,y=null,T=[],w=[],R=new ce,C=null,b=new In;b.viewport=new Jt;let S=new In;S.viewport=new Jt;let A=[b,S],I=new au,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=T[H];return Q===void 0&&(Q=new bo,T[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=T[H];return Q===void 0&&(Q=new bo,T[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=T[H];return Q===void 0&&(Q=new bo,T[H]=Q),Q.getHandSpace()};function V(H){let Q=w.indexOf(H.inputSource);if(Q===-1)return;let Se=T[Q];Se!==void 0&&(Se.update(H.inputSource,H.frame,c||o),Se.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let H=0;H<T.length;H++){let Q=w[H];Q!==null&&(w[H]=null,T[H].disconnect(Q))}O=null,z=null,g.reset();for(let H in m)delete m[H];e.setRenderTarget(v),f=null,d=null,h=null,s=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,U=null;_.depth&&(U=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?Oo:go,Re=_.stencil?zo:Ns);let $={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer($),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Fn(d.textureWidth,d.textureHeight,{format:qn,type:Ui,depthTexture:new Xa(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fn(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(H){for(let Q=0;Q<H.removed.length;Q++){let Se=H.removed[Q],Re=w.indexOf(Se);Re>=0&&(w[Re]=null,T[Re].disconnect(Se))}for(let Q=0;Q<H.added.length;Q++){let Se=H.added[Q],Re=w.indexOf(Se);if(Re===-1){for(let $=0;$<T.length;$++)if($>=w.length){w.push(Se),Re=$;break}else if(w[$]===null){w[$]=Se,Re=$;break}if(Re===-1)break}let U=T[Re];U&&U.connect(Se)}}let N=new M,F=new M;function W(H,Q,Se){N.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(Se.matrixWorld);let Re=N.distanceTo(F),U=Q.projectionMatrix.elements,$=Se.projectionMatrix.elements,he=U[14]/(U[10]-1),D=U[14]/(U[10]+1),le=(U[9]+1)/U[5],ie=(U[9]-1)/U[5],ee=(U[8]-1)/U[0],se=($[8]+1)/$[0],Me=he*ee,xe=he*se,Ae=Re/(-ee+se),Je=Ae*-ee;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Je),H.translateZ(Ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),U[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ze=he+Ae,L=D+Ae,E=Me-Je,Z=xe+(Re-Je),oe=le*D/L*Ze,fe=ie*D/L*Ze;H.projectionMatrix.makePerspective(E,Z,oe,fe,Ze,L),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function J(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Q=H.near,Se=H.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),I.near=S.near=b.near=Q,I.far=S.far=b.far=Se,(O!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,z=I.far),I.layers.mask=H.layers.mask|6,b.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let Re=H.parent,U=I.cameras;J(I,Re);for(let $=0;$<U.length;$++)J(U[$],Re);U.length===2?W(I,b,S):I.projectionMatrix.copy(b.projectionMatrix),ue(H,I,Re)};function ue(H,Q,Se){Se===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(Se.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(H){return m[H]};let ye=null;function Te(H,Q){if(u=Q.getViewerPose(c||o),p=Q,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Re=!1;Se.length!==I.cameras.length&&(I.cameras.length=0,Re=!0);for(let D=0;D<Se.length;D++){let le=Se[D],ie=null;if(f!==null)ie=f.getViewport(le);else{let se=h.getViewSubImage(d,le);ie=se.viewport,D===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let ee=A[D];ee===void 0&&(ee=new In,ee.layers.enable(D),ee.viewport=new Jt,A[D]=ee),ee.matrix.fromArray(le.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(le.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),D===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Re===!0&&I.cameras.push(ee)}let U=s.enabledFeatures;if(U&&U.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let D=h.getDepthInformation(Se[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(U&&U.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<Se.length;D++){let le=Se[D].camera;if(le){let ie=m[le];ie||(ie=new qa,m[le]=ie);let ee=h.getCameraImage(le);ie.sourceTexture=ee}}}}for(let Se=0;Se<T.length;Se++){let Re=w[Se],U=T[Se];Re!==null&&U!==void 0&&U.update(Re,Q,c||o)}ye&&ye(H,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Ue=new i0;Ue.setAnimationLoop(Te),this.setAnimationLoop=function(H){ye=H},this.dispose=function(){}}},Cr=new nn,tw=new wt;function nw(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,gf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Cr.copy(y),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Cr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(p(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",g));let T=v.program;i.updateUBOMapping(_,T);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function u(_){let v=h();_.__bindingPointIndex=v;let y=n.createBuffer(),T=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,R=y.length;w<R;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,S=C.length;b<S;b++){let A=C[b];if(f(A,w,b,T)===!0){let I=A.__offset,O=Array.isArray(A.value)?A.value:[A.value],z=0;for(let V=0;V<O.length;V++){let B=O[V],K=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+z,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,y,T){let w=_.value,R=v+"_"+y;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{let C=T[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function p(_){let v=_.uniforms,y=0,T=16;for(let R=0,C=v.length;R<C;R++){let b=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,A=b.length;S<A;S++){let I=b[S],O=Array.isArray(I.value)?I.value:[I.value];for(let z=0,V=O.length;z<V;z++){let B=O[z],K=x(B),N=y%T,F=N%K.boundary,W=N+F;y+=F,W!==0&&T-W<K.storage&&(y+=T-W),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=K.storage}}}let w=y%T;return w>0&&(y+=T-w),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var uh=class{constructor(e={}){let{canvas:t=Tg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=St;let w=0,R=0,C=null,b=-1,S=null,A=new Jt,I=new Jt,O=null,z=new He(0),V=0,B=t.width,K=t.height,N=1,F=null,W=null,J=new Jt(0,0,B,K),ue=new Jt(0,0,B,K),ye=!1,Te=new Ao,Ue=!1,H=!1,Q=new wt,Se=new M,Re=new Jt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function he(){return C===null?N:1}let D=i;function le(P,q){return t.getContext(P,q)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let q="webgl2";if(D=le(q,P),D===null)throw le(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ie,ee,se,Me,xe,Ae,Je,Ze,L,E,Z,oe,fe,ae,Ve,we,ze,Oe,me,Pe,$e,Ge,Ie,ot;function G(){ie=new M1(D),ie.init(),Ge=new KS(D,ie),ee=new p1(D,ie,e,Ge),se=new JS(D,ie),ee.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Me=new w1(D),xe=new zS,Ae=new $S(D,ie,se,xe,ee,Ge,Me),Je=new g1(y),Ze=new v1(y),L=new Pv(D),Ie=new d1(D,L),E=new b1(D,L,Me,Ie),Z=new E1(D,E,L,Me),me=new T1(D,ee,Ae),we=new m1(xe),oe=new NS(y,Je,Ze,ie,ee,Ie,we),fe=new nw(y,xe),ae=new BS,Ve=new XS(ie),Oe=new h1(y,Je,Ze,se,Z,f,l),ze=new ZS(y,Z,ee),ot=new iw(D,Me,ee,se),Pe=new f1(D,ie,Me),$e=new S1(D,ie,Me),Me.programs=oe.programs,y.capabilities=ee,y.extensions=ie,y.properties=xe,y.renderLists=ae,y.shadowMap=ze,y.state=se,y.info=Me}G();let _e=new Uf(y,D);this.xr=_e,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let P=ie.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ie.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(B,K,!1))},this.getSize=function(P){return P.set(B,K)},this.setSize=function(P,q,te=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,K=q,t.width=Math.floor(P*N),t.height=Math.floor(q*N),te===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(B*N,K*N).floor()},this.setDrawingBufferSize=function(P,q,te){B=P,K=q,N=te,t.width=Math.floor(P*te),t.height=Math.floor(q*te),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,q,te,re){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,q,te,re),se.viewport(A.copy(J).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(ue)},this.setScissor=function(P,q,te,re){P.isVector4?ue.set(P.x,P.y,P.z,P.w):ue.set(P,q,te,re),se.scissor(I.copy(ue).multiplyScalar(N).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(P){se.setScissorTest(ye=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,te=!0){let re=0;if(P){let Y=!1;if(C!==null){let be=C.texture.format;Y=be===Iu||be===Pu||be===Ru}if(Y){let be=C.texture.type,Le=be===Ui||be===Ns||be===No||be===zo||be===Eu||be===Au,qe=Oe.getClearColor(),ke=Oe.getClearAlpha(),et=qe.r,it=qe.g,je=qe.b;Le?(p[0]=et,p[1]=it,p[2]=je,p[3]=ke,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=et,x[1]=it,x[2]=je,x[3]=ke,D.clearBufferiv(D.COLOR,0,x))}else re|=D.COLOR_BUFFER_BIT}q&&(re|=D.DEPTH_BUFFER_BIT),te&&(re|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Oe.dispose(),ae.dispose(),Ve.dispose(),xe.dispose(),Je.dispose(),Ze.dispose(),Z.dispose(),Ie.dispose(),ot.dispose(),oe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Fe),_e.removeEventListener("sessionend",at),At.stop()};function Ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let P=Me.autoReset,q=ze.enabled,te=ze.autoUpdate,re=ze.needsUpdate,Y=ze.type;G(),Me.autoReset=P,ze.enabled=q,ze.autoUpdate=te,ze.needsUpdate=re,ze.type=Y}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function de(P){let q=P.target;q.removeEventListener("dispose",de),We(q)}function We(P){X(P),xe.remove(P)}function X(P){let q=xe.get(P).programs;q!==void 0&&(q.forEach(function(te){oe.releaseProgram(te)}),P.isShaderMaterial&&oe.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,te,re,Y,be){q===null&&(q=U);let Le=Y.isMesh&&Y.matrixWorld.determinant()<0,qe=ec(P,q,te,re,Y);se.setMaterial(re,Le);let ke=te.index,et=1;if(re.wireframe===!0){if(ke=E.getWireframeAttribute(te),ke===void 0)return;et=2}let it=te.drawRange,je=te.attributes.position,bt=it.start*et,Vt=(it.start+it.count)*et;be!==null&&(bt=Math.max(bt,be.start*et),Vt=Math.min(Vt,(be.start+be.count)*et)),ke!==null?(bt=Math.max(bt,0),Vt=Math.min(Vt,ke.count)):je!=null&&(bt=Math.max(bt,0),Vt=Math.min(Vt,je.count));let on=Vt-bt;if(on<0||on===1/0)return;Ie.setup(Y,re,qe,te,ke);let Zt,Ht=Pe;if(ke!==null&&(Zt=L.get(ke),Ht=$e,Ht.setIndex(Zt)),Y.isMesh)re.wireframe===!0?(se.setLineWidth(re.wireframeLinewidth*he()),Ht.setMode(D.LINES)):Ht.setMode(D.TRIANGLES);else if(Y.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),se.setLineWidth(Ke*he()),Y.isLineSegments?Ht.setMode(D.LINES):Y.isLineLoop?Ht.setMode(D.LINE_LOOP):Ht.setMode(D.LINE_STRIP)}else Y.isPoints?Ht.setMode(D.POINTS):Y.isSprite&&Ht.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_o("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ht.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ke=Y._multiDrawStarts,Qt=Y._multiDrawCounts,It=Y._multiDrawCount,ti=ke?L.get(ke).bytesPerElement:1,qr=xe.get(re).currentProgram.getUniforms();for(let ni=0;ni<It;ni++)qr.setValue(D,"_gl_DrawID",ni),Ht.render(Ke[ni]/ti,Qt[ni])}else if(Y.isInstancedMesh)Ht.renderInstances(bt,on,Y.count);else if(te.isInstancedBufferGeometry){let Ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qt=Math.min(te.instanceCount,Ke);Ht.renderInstances(bt,on,Qt)}else Ht.render(bt,on)};function j(P,q,te){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Xn,P.needsUpdate=!0,gt(P,q,te),P.side=ri,P.needsUpdate=!0,gt(P,q,te),P.side=cn):gt(P,q,te)}this.compile=function(P,q,te=null){te===null&&(te=P),m=Ve.get(te),m.init(q),v.push(m),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),P!==te&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();let re=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let qe=be[Le];j(qe,te,Y),re.add(qe)}else j(be,te,Y),re.add(be)}),m=v.pop(),re},this.compileAsync=function(P,q,te=null){let re=this.compile(P,q,te);return new Promise(Y=>{function be(){if(re.forEach(function(Le){xe.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){Y(P);return}setTimeout(be,10)}ie.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ge=null;function Xe(P){ge&&ge(P)}function Fe(){At.stop()}function at(){At.start()}let At=new i0;At.setAnimationLoop(Xe),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(P){ge=P,_e.setAnimationLoop(P),P===null?At.stop():At.start()},_e.addEventListener("sessionstart",Fe),_e.addEventListener("sessionend",at),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(q),q=_e.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,q,C),m=Ve.get(P,v.length),m.init(q),v.push(m),Q.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Te.setFromProjectionMatrix(Q,Pi,q.reversedDepth),H=this.localClippingEnabled,Ue=we.init(this.clippingPlanes,H),g=ae.get(P,_.length),g.init(),_.push(g),_e.enabled===!0&&_e.isPresenting===!0){let be=y.xr.getDepthSensingMesh();be!==null&&lt(be,q,-1/0,y.sortObjects)}lt(P,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(F,W),$=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,$&&Oe.addToRenderList(g,P),this.info.render.frame++,Ue===!0&&we.beginShadows();let te=m.state.shadowsArray;ze.render(te,P,q),Ue===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=g.opaque,Y=g.transmissive;if(m.setupLights(),q.isArrayCamera){let be=q.cameras;if(Y.length>0)for(let Le=0,qe=be.length;Le<qe;Le++){let ke=be[Le];pt(re,Y,P,ke)}$&&Oe.render(P);for(let Le=0,qe=be.length;Le<qe;Le++){let ke=be[Le];ct(g,P,ke,ke.viewport)}}else Y.length>0&&pt(re,Y,P,q),$&&Oe.render(P),ct(g,P,q);C!==null&&R===0&&(Ae.updateMultisampleRenderTarget(C),Ae.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,q),Ie.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],Ue===!0&&we.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function lt(P,q,te,re){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Te.intersectsSprite(P)){re&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);let Le=Z.update(P),qe=P.material;qe.visible&&g.push(P,Le,qe,te,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Te.intersectsObject(P))){let Le=Z.update(P),qe=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Re.copy(Le.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(qe)){let ke=Le.groups;for(let et=0,it=ke.length;et<it;et++){let je=ke[et],bt=qe[je.materialIndex];bt&&bt.visible&&g.push(P,Le,bt,te,Re.z,je)}}else qe.visible&&g.push(P,Le,qe,te,Re.z,null)}}let be=P.children;for(let Le=0,qe=be.length;Le<qe;Le++)lt(be[Le],q,te,re)}function ct(P,q,te,re){let Y=P.opaque,be=P.transmissive,Le=P.transparent;m.setupLightsView(te),Ue===!0&&we.setGlobalState(y.clippingPlanes,te),re&&se.viewport(A.copy(re)),Y.length>0&&xt(Y,q,te),be.length>0&&xt(be,q,te),Le.length>0&&xt(Le,q,te),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function pt(P,q,te,re){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Fn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?wi:Ui,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let be=m.state.transmissionRenderTarget[re.id],Le=re.viewport||A;be.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);let qe=y.getRenderTarget(),ke=y.getActiveCubeFace(),et=y.getActiveMipmapLevel();y.setRenderTarget(be),y.getClearColor(z),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),$&&Oe.render(te);let it=y.toneMapping;y.toneMapping=ds;let je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),Ue===!0&&we.setGlobalState(y.clippingPlanes,re),xt(P,te,re),Ae.updateMultisampleRenderTarget(be),Ae.updateRenderTargetMipmap(be),ie.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Vt=0,on=q.length;Vt<on;Vt++){let Zt=q[Vt],Ht=Zt.object,Ke=Zt.geometry,Qt=Zt.material,It=Zt.group;if(Qt.side===cn&&Ht.layers.test(re.layers)){let ti=Qt.side;Qt.side=Xn,Qt.needsUpdate=!0,gn(Ht,te,re,Ke,Qt,It),Qt.side=ti,Qt.needsUpdate=!0,bt=!0}}bt===!0&&(Ae.updateMultisampleRenderTarget(be),Ae.updateRenderTargetMipmap(be))}y.setRenderTarget(qe,ke,et),y.setClearColor(z,V),je!==void 0&&(re.viewport=je),y.toneMapping=it}function xt(P,q,te){let re=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,be=P.length;Y<be;Y++){let Le=P[Y],qe=Le.object,ke=Le.geometry,et=Le.group,it=Le.material;it.allowOverride===!0&&re!==null&&(it=re),qe.layers.test(te.layers)&&gn(qe,q,te,ke,it,et)}}function gn(P,q,te,re,Y,be){P.onBeforeRender(y,q,te,re,Y,be),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(y,q,te,re,P,be),Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,y.renderBufferDirect(te,q,re,Y,P,be),Y.side=ri,Y.needsUpdate=!0,y.renderBufferDirect(te,q,re,Y,P,be),Y.side=cn):y.renderBufferDirect(te,q,re,Y,P,be),P.onAfterRender(y,q,te,re,Y,be)}function gt(P,q,te){q.isScene!==!0&&(q=U);let re=xe.get(P),Y=m.state.lights,be=m.state.shadowsArray,Le=Y.state.version,qe=oe.getParameters(P,Y.state,be,q,te),ke=oe.getProgramCacheKey(qe),et=re.programs;re.environment=P.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(P.isMeshStandardMaterial?Ze:Je).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",de),et=new Map,re.programs=et);let it=et.get(ke);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Le)return Xi(P,qe),it}else qe.uniforms=oe.getUniforms(P),P.onBeforeCompile(qe,y),it=oe.acquireProgram(qe,ke),et.set(ke,it),re.uniforms=qe.uniforms;let je=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=we.uniform),Xi(P,qe),re.needsLights=ya(P),re.lightsStateVersion=Le,re.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function hn(P){if(P.uniformsList===null){let q=P.currentProgram.getUniforms();P.uniformsList=Vo.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Xi(P,q){let te=xe.get(P);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function ec(P,q,te,re,Y){q.isScene!==!0&&(q=U),Ae.resetTextureUnits();let be=q.fog,Le=re.isMeshStandardMaterial?q.environment:null,qe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cr,ke=(re.isMeshStandardMaterial?Ze:Je).get(re.envMap||Le),et=re.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!te.morphAttributes.position,bt=!!te.morphAttributes.normal,Vt=!!te.morphAttributes.color,on=ds;re.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(on=y.toneMapping);let Zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ht=Zt!==void 0?Zt.length:0,Ke=xe.get(re),Qt=m.state.lights;if(Ue===!0&&(H===!0||P!==S)){let Vn=P===S&&re.id===b;we.setState(re,P,Vn)}let It=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Qt.state.version||Ke.outputColorSpace!==qe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==ke||re.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==it||Ke.morphTargets!==je||Ke.morphNormals!==bt||Ke.morphColors!==Vt||Ke.toneMapping!==on||Ke.morphTargetsCount!==Ht)&&(It=!0):(It=!0,Ke.__version=re.version);let ti=Ke.currentProgram;It===!0&&(ti=gt(re,q,Y));let qr=!1,ni=!1,_a=!1,en=ti.getUniforms(),mi=Ke.uniforms;if(se.useProgram(ti.program)&&(qr=!0,ni=!0,_a=!0),re.id!==b&&(b=re.id,ni=!0),qr||S!==P){se.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),en.setValue(D,"projectionMatrix",P.projectionMatrix),en.setValue(D,"viewMatrix",P.matrixWorldInverse);let jn=en.map.cameraPosition;jn!==void 0&&jn.setValue(D,Se.setFromMatrixPosition(P.matrixWorld)),ee.logarithmicDepthBuffer&&en.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&en.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,ni=!0,_a=!0)}if(Y.isSkinnedMesh){en.setOptional(D,Y,"bindMatrix"),en.setOptional(D,Y,"bindMatrixInverse");let Vn=Y.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),en.setValue(D,"boneTexture",Vn.boneTexture,Ae))}Y.isBatchedMesh&&(en.setOptional(D,Y,"batchingTexture"),en.setValue(D,"batchingTexture",Y._matricesTexture,Ae),en.setOptional(D,Y,"batchingIdTexture"),en.setValue(D,"batchingIdTexture",Y._indirectTexture,Ae),en.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&en.setValue(D,"batchingColorTexture",Y._colorsTexture,Ae));let gi=te.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&me.update(Y,te,ti),(ni||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,en.setValue(D,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(mi.envMap.value=ke,mi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(mi.envMapIntensity.value=q.environmentIntensity),ni&&(en.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&Ms(mi,_a),be&&re.fog===!0&&fe.refreshFogUniforms(mi,be),fe.refreshMaterialUniforms(mi,re,N,K,m.state.transmissionRenderTarget[P.id]),Vo.upload(D,hn(Ke),mi,Ae)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vo.upload(D,hn(Ke),mi,Ae),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&en.setValue(D,"center",Y.center),en.setValue(D,"modelViewMatrix",Y.modelViewMatrix),en.setValue(D,"normalMatrix",Y.normalMatrix),en.setValue(D,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let Vn=re.uniformsGroups;for(let jn=0,hd=Vn.length;jn<hd;jn++){let tr=Vn[jn];ot.update(tr,ti),ot.bind(tr,ti)}}return ti}function Ms(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ya(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,q,te){let re=xe.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),xe.get(P.texture).__webglTexture=q,xe.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:te,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){let te=xe.get(P);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0};let e_=D.createFramebuffer();this.setRenderTarget=function(P,q=0,te=0){C=P,w=q,R=te;let re=!0,Y=null,be=!1,Le=!1;if(P){let ke=xe.get(P);if(ke.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(D.FRAMEBUFFER,null),re=!1;else if(ke.__webglFramebuffer===void 0)Ae.setupRenderTarget(P);else if(ke.__hasExternalTextures)Ae.rebindTextures(P,xe.get(P.texture).__webglTexture,xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let je=P.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&xe.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(P)}}let et=P.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);let it=xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[q])?Y=it[q][te]:Y=it[q],be=!0):P.samples>0&&Ae.useMultisampledRTT(P)===!1?Y=xe.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[te]:Y=it,A.copy(P.viewport),I.copy(P.scissor),O=P.scissorTest}else A.copy(J).multiplyScalar(N).floor(),I.copy(ue).multiplyScalar(N).floor(),O=ye;if(te!==0&&(Y=e_),se.bindFramebuffer(D.FRAMEBUFFER,Y)&&re&&se.drawBuffers(P,Y),se.viewport(A),se.scissor(I),se.setScissorTest(O),be){let ke=xe.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,te)}else if(Le){let ke=q;for(let et=0;et<P.textures.length;et++){let it=xe.get(P.textures[et]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+et,it.__webglTexture,te,ke)}}else if(P!==null&&te!==0){let ke=xe.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(P,q,te,re,Y,be,Le,qe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){se.bindFramebuffer(D.FRAMEBUFFER,ke);try{let et=P.textures[qe],it=et.format,je=et.type;if(!ee.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-re&&te>=0&&te<=P.height-Y&&(P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+qe),D.readPixels(q,te,re,Y,Ge.convert(it),Ge.convert(je),be))}finally{let et=C!==null?xe.get(C).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,q,te,re,Y,be,Le,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(q>=0&&q<=P.width-re&&te>=0&&te<=P.height-Y){se.bindFramebuffer(D.FRAMEBUFFER,ke);let et=P.textures[qe],it=et.format,je=et.type;if(!ee.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+qe),D.readPixels(q,te,re,Y,Ge.convert(it),Ge.convert(je),0);let Vt=C!==null?xe.get(C).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,Vt);let on=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eg(D,on,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.deleteBuffer(bt),D.deleteSync(on),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,te=0){let re=Math.pow(2,-te),Y=Math.floor(P.image.width*re),be=Math.floor(P.image.height*re),Le=q!==null?q.x:0,qe=q!==null?q.y:0;Ae.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,te,0,0,Le,qe,Y,be),se.unbindTexture()};let t_=D.createFramebuffer(),n_=D.createFramebuffer();this.copyTextureToTexture=function(P,q,te=null,re=null,Y=0,be=null){be===null&&(Y!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Y,Y=0):be=0);let Le,qe,ke,et,it,je,bt,Vt,on,Zt=P.isCompressedTexture?P.mipmaps[be]:P.image;if(te!==null)Le=te.max.x-te.min.x,qe=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,et=te.min.x,it=te.min.y,je=te.isBox3?te.min.z:0;else{let gi=Math.pow(2,-Y);Le=Math.floor(Zt.width*gi),qe=Math.floor(Zt.height*gi),P.isDataArrayTexture?ke=Zt.depth:P.isData3DTexture?ke=Math.floor(Zt.depth*gi):ke=1,et=0,it=0,je=0}re!==null?(bt=re.x,Vt=re.y,on=re.z):(bt=0,Vt=0,on=0);let Ht=Ge.convert(q.format),Ke=Ge.convert(q.type),Qt;q.isData3DTexture?(Ae.setTexture3D(q,0),Qt=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Ae.setTexture2DArray(q,0),Qt=D.TEXTURE_2D_ARRAY):(Ae.setTexture2D(q,0),Qt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);let It=D.getParameter(D.UNPACK_ROW_LENGTH),ti=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qr=D.getParameter(D.UNPACK_SKIP_PIXELS),ni=D.getParameter(D.UNPACK_SKIP_ROWS),_a=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,et),D.pixelStorei(D.UNPACK_SKIP_ROWS,it),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je);let en=P.isDataArrayTexture||P.isData3DTexture,mi=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){let gi=xe.get(P),Vn=xe.get(q),jn=xe.get(gi.__renderTarget),hd=xe.get(Vn.__renderTarget);se.bindFramebuffer(D.READ_FRAMEBUFFER,jn.__webglFramebuffer),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,hd.__webglFramebuffer);for(let tr=0;tr<ke;tr++)en&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.get(P).__webglTexture,Y,je+tr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.get(q).__webglTexture,be,on+tr)),D.blitFramebuffer(et,it,Le,qe,bt,Vt,Le,qe,D.DEPTH_BUFFER_BIT,D.NEAREST);se.bindFramebuffer(D.READ_FRAMEBUFFER,null),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||xe.has(P)){let gi=xe.get(P),Vn=xe.get(q);se.bindFramebuffer(D.READ_FRAMEBUFFER,t_),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,n_);for(let jn=0;jn<ke;jn++)en?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gi.__webglTexture,Y,je+jn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gi.__webglTexture,Y),mi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vn.__webglTexture,be,on+jn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vn.__webglTexture,be),Y!==0?D.blitFramebuffer(et,it,Le,qe,bt,Vt,Le,qe,D.COLOR_BUFFER_BIT,D.NEAREST):mi?D.copyTexSubImage3D(Qt,be,bt,Vt,on+jn,et,it,Le,qe):D.copyTexSubImage2D(Qt,be,bt,Vt,et,it,Le,qe);se.bindFramebuffer(D.READ_FRAMEBUFFER,null),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mi?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Qt,be,bt,Vt,on,Le,qe,ke,Ht,Ke,Zt.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(Qt,be,bt,Vt,on,Le,qe,ke,Ht,Zt.data):D.texSubImage3D(Qt,be,bt,Vt,on,Le,qe,ke,Ht,Ke,Zt):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,bt,Vt,Le,qe,Ht,Ke,Zt.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,bt,Vt,Zt.width,Zt.height,Ht,Zt.data):D.texSubImage2D(D.TEXTURE_2D,be,bt,Vt,Le,qe,Ht,Ke,Zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ti),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qr),D.pixelStorei(D.UNPACK_SKIP_ROWS,ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_a),be===0&&q.generateMipmaps&&D.generateMipmap(Qt),se.unbindTexture()},this.initRenderTarget=function(P){xe.get(P).__webglFramebuffer===void 0&&Ae.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ae.setTextureCube(P,0):P.isData3DTexture?Ae.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ae.setTexture2DArray(P,0):Ae.setTexture2D(P,0),se.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,se.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var Wo=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sw=new xr(-1,1,1,-1,0,1),Nf=class extends rt{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}},rw=new Nf,Xo=class{constructor(e){this._mesh=new pe(rw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var dh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var l0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qo=class n extends Wo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,o,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Fn(r,o,{type:wi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Fn(r,o,{type:wi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=l0;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new En({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Er.clone(dh.uniforms),this.blendMaterial=new En({uniforms:this.copyUniforms,vertexShader:dh.vertexShader,fragmentShader:dh.fragmentShader,blending:ul,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Xo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new En({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new En({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};qo.BlurDirectionX=new ce(1,0);qo.BlurDirectionY=new ce(0,1);var yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fh=class extends Wo{constructor(){super(),this.uniforms=Er.clone(yl.uniforms),this.material=new rl({name:yl.name,uniforms:this.uniforms,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this._fsQuad=new Xo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function ow(n){let e=n.extensions.has("EXT_color_buffer_float"),t,i=0,s=0;function r(a,l){if(!e||!(l?.strength>0))return;let c=Math.max(32,Math.ceil(a.width*l.resolution)),u=Math.max(32,Math.ceil(a.height*l.resolution));t||(t=new qo(new ce(c,u))),(c!==i||u!==s)&&(t.setSize(c,u),i=c,s=u),t.strength=l.strength,t.radius=l.radius,t.threshold=l.threshold,t.highPassUniforms.smoothWidth.value=l.softness,t.render(n,null,a,0,!1)}function o(){t?.dispose(),t=null,i=s=0}return{supported:e,apply:r,dispose:o}}function c0(n){let e=ow(n),t=new ce,i,s;function r(o,a,l){if(!e.supported||!(l?.strength>0)||(n.getDrawingBufferSize(t),t.x<32||t.y<32))return!1;i?(i.width!==t.x||i.height!==t.y)&&i.setSize(t.x,t.y):(i=new Fn(t.x,t.y,{type:wi,samples:2}),i.texture.name="Gorilla Lab HDR scene",s=new fh,s.renderToScreen=!0);let c=n.getRenderTarget(),u=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.setRenderTarget(i),n.render(o,a),e.apply(i,l),s.render(n,null,i)}finally{n.setRenderTarget(c),n.info.autoReset=u}return!0}return{render:r}}var u0=["Jour","Coucher de soleil","Nuit"],ph={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,sunDiameter:3.3,sunHalo:1,sunRadiance:7.5,shadowRange:0,bloomRadius:.43,bloomThreshold:1.25,bloomSoftness:.01,bloomResolution:.64,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},aw=[ph,{...ph,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,sunRadiance:9,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...ph,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,sunRadiance:1,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Ni(n){return{...aw[n]??ph}}var mh=5e6,lw=4*Math.ceil(mh/3)+23,Yo=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,Cn=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function gh(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(Cn(n.preset,0,2,0)),t=Ni(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=lw?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=mh?n.skyImage:null,r=Cn(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:Cn(n.rotation,-360,360,0),skyTint:Yo(n.skyTint,"#ffffff"),skyColor:Yo(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:Yo(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,Cn(n.fogFar,1,4096,t.fogFar)),azimuth:Cn(n.azimuth,-360,360,t.azimuth),elevation:Cn(n.elevation,-89,89,t.elevation),sunColor:Yo(n.sunColor,t.sunColor),sunPower:Cn(n.sunPower,0,12,t.sunPower),sunDiameter:Cn(n.sunDiameter,.1,12,t.sunDiameter),sunHalo:Cn(n.sunHalo,0,4,t.sunHalo),sunRadiance:Cn(n.sunRadiance,.1,100,Math.max(1,Cn(n.sunPower,0,12,t.sunPower)*2.5)),bloomRadius:Cn(n.bloomRadius,0,1,t.bloomRadius),bloomThreshold:Cn(n.bloomThreshold,.01,12,t.bloomThreshold),bloomSoftness:Cn(n.bloomSoftness,.001,2,t.bloomSoftness),bloomResolution:Cn(n.bloomResolution,.25,1,t.bloomResolution),shadowRange:Cn(n.shadowRange,0,160,t.shadowRange),ambientColor:Yo(n.ambientColor,t.ambientColor),groundColor:Yo(n.groundColor,t.groundColor),ambientPower:Cn(n.ambientPower,0,12,t.ambientPower)}}var zf;function cw(){return zf??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw zf=null,n}),zf}async function h0(n,e,t){let i=await cw();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function d0(n){return await h0(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function Of(n,e){await h0(n,"readwrite",(t,i)=>t.put(e,i))}var Bf=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var mC=Bf.length-1,f0=Math.min(...Bf.map(n=>n[1])),p0=Math.max(...Bf.map(n=>n[1])),gC=new M(0,0,(f0+p0)/2),m0=new M(.047,.027,(p0-f0)/2);var _C=new Tt,vC=new M,MC=new M,bC=new wt;var SC=new M,wC=new M;var TC=new M;var EC=new M,AC=new M,CC=new M,RC=new Hn,PC=new M,IC=new M,DC=new M,LC=new M,UC=new M;function _l(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new M().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),v=new Hn(g,m,_).getNormal(new M);v.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:v})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new fn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),h=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}var FC=new M,NC=new M,zC=new M,OC=new M,BC=new Tt,kC=new Tt,VC=new M;function Zo(n){return _l(new Ye(n.x*2,n.y*2,n.z*2))}var GC=new M;var kf=_l(new vi(1,0).scale(...m0)),HC={mesh:{position:new M,quaternion:new Tt},shape:kf,radius:kf.radius,precise:!0},WC=new M,XC=new M,qC=new M,YC=new M,ZC=new M,jC=new M,JC=new M,$C=kf.vertices.map(()=>new M);var KC=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)];var QC=new M,eR=new M,tR=new M,nR=new Tt,iR=new Tt,sR=new Tt;var rR=new M,oR=new M,aR=new M,lR=new M;var cR=new M;var uR=new M,hR=new M,dR=new M,fR=new M,pR=new M,mR=new M,gR=new M;var xR={mesh:{position:null,quaternion:new Tt},shape:{sphereRadius:0,normals:[],edges:[]}};function xh(n,e,t){let i=new Ye(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}function g0(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,h=t.getY(c)*i;t.setXY(c,u*r-h*o+a,u*o+h*r+l)}return t.needsUpdate=!0,n}function x0(n){switch(n){case"sphere":return new Mi(.5,24,16);case"cylinder":return new Bt(.5,.5,1,24);case"cone":return new cs(.5,1,24);case"torus":return new Wn(.34,.14,12,32);case"capsule":return new Is(.32,.36,8,16);default:return new Ye(1,1,1)}}function Vf(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new M(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],u=l[1].clone().sub(c).normalize(),h=l.at(-1).clone().sub(c);h.addScaledVector(u,-h.dot(u)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(u)/2.6,p.dot(h)/2.6)}}let o=new rt;return o.setAttribute("position",new Ne(s,3)),o.setAttribute("uv",new Ne(r,2)),o.computeVertexNormals(),o}function vl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var zs=(n,e,t)=>n+(e-n)*t,jo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function yh(n,e){let t=Math.floor(n),i=Math.floor(e),s=jo(0,1,n-t),r=jo(0,1,e-i);return zs(zs(vl(t,i),vl(t+1,i),s),zs(vl(t,i+1),vl(t+1,i+1),s),r)}function y0(n,e){return yh(n,e)*.54+yh(n*2.07+3.4,e*2.07-6.1)*.26+yh(n*4.2+9,e*4.2)*.13+yh(n*8.6,e*8.6-13)*.07}function _0(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),h=Math.max(0,c),d=h**.54,f=r.map((p,x)=>zs(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=vl(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*jo(.09,.3,c))}else{let[y,T]=s[p],w=2.8*u/(c+.16),R=y*w+3.6,C=T*w-8.1,b=y0(R,C),S=y0(R-.12,C-.09);g=jo(.49,.66,b)*jo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(b-S)*5+(b-.54)*.8))}let v=n?1:zs(.94,1,jo(.05,.34,c));i[x]=zs(f[0],(139+115*m)*v,g)+_,i[x+1]=zs(f[1],(154+100*m)*v,g)+_*.94,i[x+2]=zs(f[2],(178+77*m)*v,g)+_*.86,i[x+3]=255}}let a=new oi(i,1024,512,qn);return a.colorSpace=St,a.wrapS=Ln,a.magFilter=ln,a.minFilter=zn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function v0(){let n=_0(!1),e=_0(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new oi(t,n.image.width,n.image.height,qn);i.colorSpace=St;for(let s of[n,i,e])s.mapping=Li,s.magFilter=ln,s.minFilter=ln,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var sn=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),M0=sn(-24,24,-51,7),b0=34521,S0={x:0,y:0,z:3},Os={x:.05,y:1.16,z:5.9},Jo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:sn(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:sn(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:sn(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:sn(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:sn(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:sn(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:sn(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:sn(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:sn(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:sn(9,23,-48,-37),sign:[16,-38.2]}},MR=[sn(-9,-6,-51,7),sn(6,9,-51,7),sn(-24,24,-8,-5),sn(-24,24,-27,-23),sn(9,23,-37,-34)],w0=[{name:"Glace",bounds:Jo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Jo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:sn(-9,9,-51,7)},{name:"Sol ouest",bounds:sn(-23,-9,-51,-23)},{name:"Sol ouest",bounds:sn(-23,-9,-8,7)},{name:"Bordure ouest",bounds:sn(-24,-23,-51,7)},{name:"Sol est",bounds:sn(9,23,-51,-48)},{name:"Sol est",bounds:sn(9,23,-37,7)},{name:"Bordure est",bounds:sn(23,24,-51,7)}],Ml={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},$o=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],T0=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Bs={x:-19.4,y:.68,z:-3.25},E0=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),A0={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function _h(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Di(i);return s.colorSpace=St,s}function C0(n,e){let{day:t,sunset:i,night:s}=v0(),r=[t,i,s],o=new He,a=new ur("#a6d4ea",55,135),l=_h(64,64,(X,j)=>{let ge=X.createRadialGradient(j/2,j/2,j*.22,j/2,j/2,j*.5);ge.addColorStop(0,"#fff"),ge.addColorStop(.65,"#fff"),ge.addColorStop(.88,"rgba(255,255,255,.72)"),ge.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=ge,X.fillRect(0,0,j,j)}),c=new Ha(new To({map:l,alphaTest:.15,depthWrite:!1,fog:!1}));n.add(c);let u=t.clone();u.mapping=Li,u.needsUpdate=!0;let h=new Go(e);n.environment=h.fromEquirectangular(u).texture,h.dispose();let d=new gr("#daeaff","#88724c",2.25),f=new yr("#fff0d0",3);f.position.set(-14,25,-16),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),Object.assign(f.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),f.shadow.bias=-25e-5,f.shadow.normalBias=.025,n.add(d,f,f.target);let p=new M,x=0,g=null,m=!0,_=null,v=null,y=!1,T=0,w=0,R=new M,C=null,b=null,S=null,A=null,I=null,O=!1,z=0;function V(X,j){if(j==="#ffffff")return X;if(X===b&&j===S)return C;let ge=X.image,Xe=document.createElement("canvas");Xe.width=ge.width,Xe.height=ge.height;let Fe=Xe.getContext("2d");return X.isDataTexture?Fe.putImageData(new ImageData(new Uint8ClampedArray(ge.data),ge.width,ge.height),0,0):Fe.drawImage(ge,0,0),Fe.globalCompositeOperation="multiply",Fe.fillStyle=j,Fe.fillRect(0,0,Xe.width,Xe.height),C?.dispose(),C=new Di(Xe),C.mapping=Li,C.colorSpace=St,C.flipY=X.flipY,b=X,S=j,C}function B(X){if(I===X)return A;A?.dispose();let j=document.createElement("canvas"),ge=document.createElement("canvas");j.width=384,j.height=192,ge.width=1536,ge.height=768,j.getContext("2d").drawImage(X.image,0,0,j.width,j.height);let Xe=ge.getContext("2d");return Xe.imageSmoothingEnabled=!1,Xe.drawImage(j,0,0,ge.width,ge.height),A=new Di(ge),A.mapping=Li,A.colorSpace=St,A.flipY=X.flipY,I=X,A}function K(X){let j=X.shadowRange?Math.max(13,X.shadowRange):13+z*1.2,ge=Math.max(33,j*1.4);p.copy(R).multiplyScalar(ge),Object.assign(f.shadow.camera,{left:-j,right:j,top:j,bottom:-j,far:Math.max(72,ge+j*1.5)}),f.shadow.camera.updateProjectionMatrix()}function N(X){x=[0,1,2].includes(X)?X:0;let j=g??Ni(x),ge=Ee.degToRad(j.azimuth),Xe=Ee.degToRad(j.elevation);R.set(Math.cos(ge)*Math.cos(Xe),Math.sin(Xe),Math.sin(ge)*Math.cos(Xe)),K(j),d.color.set(j.ambientColor),d.groundColor.set(j.groundColor),d.intensity=j.ambientPower,f.color.set(j.sunColor),f.intensity=j.sunPower,f.position.copy(f.target.position).add(p),c.material.color.set(j.sunColor).multiplyScalar(j.sunRadiance??Math.max(1,j.sunPower*2.5)),c.visible=j.sunPower>0;let Fe=j.sky==="image"&&v?v:r[j.preset],at=V(Fe,j.skyTint);n.background=j.sky==="color"||!m?o.set(j.skyColor):O&&!at.isDataTexture?B(at):at,n.backgroundRotation.y=Ee.degToRad(j.rotation),a.color.set(j.fogColor),a.near=j.fogNear,a.far=j.fogFar,n.fog=j.fog?a:null,n.environmentIntensity=T*[1,.56,.09][j.preset]}function F(X,j=()=>{}){g=X;let ge=X?.sky==="image"?X.skyImage:null;if(_!==ge){_=ge;let Xe=++w;v?.dispose(),v=null,y=!!ge,ge&&new bi().load(ge,Fe=>{if(w!==Xe){Fe.dispose();return}Fe.colorSpace=St,Fe.mapping=Li,v=Fe,y=!1,N(x),j()},void 0,()=>{Xe===w&&(y=!1,j())})}N(x)}function W(X,j=210){let ge=g??Ni(x),Xe=j*.96,Fe=2*Xe*Math.tan(Ee.degToRad(ge.sunDiameter/2));c.position.copy(X).addScaledVector(R,Xe),c.scale.setScalar(Fe)}function J(X){if(!f.castShadow)return;let j=f.target.position,ge=Math.round(X.x/4)*4,Xe=Math.round(X.y/4)*4,Fe=Math.round(X.z/4)*4;j.x===ge&&j.y===Xe&&j.z===Fe||(j.set(ge,Xe,Fe),f.position.copy(j).add(p))}N(0);let ue=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function ye(X,j,ge){let[,Xe,Fe]=ue[j],at=512;X.save(),X.scale(ge/512,ge/512),X.fillStyle=Xe,X.fillRect(0,0,at,at);let At=j+19;function lt(){return At=Math.imul(At,1664525)+1013904223>>>0,At/4294967296}if(X.fillStyle=Fe,j===16){for(let ct=0;ct<16;ct++)for(let pt=0;pt<16;pt++)(pt+ct)%2===0&&X.fillRect(pt*32,ct*32,32,32);X.fillStyle="#ff3957",X.fillRect(253,0,6,512),X.fillRect(0,253,512,6)}else if([0,2,8,15].includes(j)){let ct=j===15?32:64;X.globalAlpha=.48;for(let pt=0;pt<at;pt+=ct){X.fillRect(0,pt,at,j===8?3:2);for(let xt=-ct;xt<at;xt+=ct)X.fillRect(xt+pt/ct%2*(j===2?ct/2:0),pt,2,ct)}}else if([4,5,6,7,10,11,12].includes(j)){let ct=j===5?38:j===7?64:18;for(let pt=0;pt<ct;pt++){X.strokeStyle=Fe,X.globalAlpha=.08+lt()*.22,X.lineWidth=j===5?1+lt()*8:1+lt()*4;let xt=lt()*at,gn=j===5?.018:.009;X.beginPath();for(let gt=0;gt<=at;gt+=8){let hn=xt+Math.sin(gt*gn+pt)*(j===6||j===7?4:12+pt%5*3)+(j===4?gt*.28:0);gt===0?X.moveTo(gt,hn):X.lineTo(gt,hn)}X.stroke()}}else{X.globalAlpha=.27;for(let ct=0;ct<120;ct++){let pt=lt()*at,xt=lt()*at,gn=2+lt()*6;X.beginPath(),X.arc(pt,xt,gn,0,Math.PI*2),X.fill()}}if(j!==16)for(let ct=0;ct<4400;ct++)X.globalAlpha=.05+lt()*.1,X.fillStyle=lt()>.5?Fe:"#222324",X.fillRect(lt()*at,lt()*at,1+lt()*4,1+lt()*3);X.restore()}let Te=new Set([0,2,4,5,8,15,16]),Ue=dt.shadowmap_pars_fragment.replace("return mix( 1.0, shadow, shadowIntensity );","vec2 edge = min(shadowCoord.xy, 1.0 - shadowCoord.xy); return mix(1.0, shadow, shadowIntensity * smoothstep(0.0, 0.14, min(edge.x, edge.y)));"),H=ue.map(([X,j,ge,Xe,Fe,at],At)=>{let lt=Te.has(At)?512:256,ct=_h(lt,lt,xt=>ye(xt,At,lt));ct.wrapS=ct.wrapT=Ln;let pt=new xn({map:ct,roughness:Xe,metalness:Fe,flatShading:!0,opacity:at,transparent:at<1,depthWrite:at===1});return pt.name=X,pt}),Q=H.map(X=>X.map.image),Se=512,Re=H.map(X=>new li({map:X.map,flatShading:!0,opacity:X.opacity,transparent:X.transparent,depthWrite:X.depthWrite})),U={value:0},$={value:.24},he={value:null},D={value:0};function le(){he.value?.dispose(),he.value=_h(512,512,(X,j)=>{X.fillStyle="#ffffff",X.fillRect(0,0,j,j);let ge=j/52,Xe=j/64;for(let Fe of ie){if(!Fe.position||!Fe.half||Fe.position.y+Fe.half.y<.22)continue;let at=(Fe.position.x+26)*ge,At=(Fe.position.z+54)*Xe,lt=Math.min(55,Fe.half.x*ge+5),ct=Math.min(72,Fe.half.z*Xe+6);X.save(),X.translate(at+Fe.half.y*ge*.2,At+Fe.half.y*Xe*.24),X.scale(lt,ct);let pt=X.createRadialGradient(0,0,.15,0,0,1);pt.addColorStop(0,"rgba(22,37,65,.54)"),pt.addColorStop(.58,"rgba(36,54,76,.29)"),pt.addColorStop(1,"rgba(38,48,57,0)"),X.fillStyle=pt,X.fillRect(-1,-1,2,2),X.restore()}})}for(let X of[...H,...Re])X.onBeforeCompile=j=>{j.fragmentShader=j.fragmentShader.replace("#include <shadowmap_pars_fragment>",Ue),j.uniforms.uFocusAmount=U,j.uniforms.uFocusRadius=$,j.uniforms.uLabLightmap=he,j.uniforms.uLabBakedStrength=D,j.vertexShader=`varying vec3 vLabPosition;
`+j.vertexShader,j.vertexShader=j.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),j.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+j.fragmentShader,j.fragmentShader=j.fragmentShader.replace("#include <map_fragment>",`
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
      `)},X.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v3";let ie=[],ee=[];function se(X,j,ge,Xe,Fe,at,At,lt=0,ct=0,pt=1,xt=1,gn=!1){let gt=new pe(gn?new Ye(Fe,at,At):xh(Fe,at,At),H[lt]);gt.position.set(j,ge,Xe),gt.rotation.x=ct,gt.receiveShadow=!0,gt.castShadow=!0,n.add(gt);let hn=new M(Fe/2,at/2,At/2),Xi={mesh:gt,position:gt.position,quaternion:gt.quaternion,half:hn,min:hn.clone().negate(),friction:pt,gravity:xt,name:X,type:lt,shape:Zo(hn)};return ie.push(Xi),Xi}let Me=w0.map(({name:X,bounds:j,type:ge=0,friction:Xe=.78,gravity:Fe=1})=>{let{xMin:at,xMax:At,zMin:lt,zMax:ct}=j;return se(X,(at+At)/2,-.33,(lt+ct)/2,At-at,.66,ct-lt,ge,0,Xe,Fe)});for(let X of Object.values(A0))for(let j of X)se(...j);let{xMin:xe,xMax:Ae,zMin:Je,zMax:Ze}=M0;se("But\xE9e arri\xE8re",0,1.35,Je+.4,Ae-xe,2.7,.6,2),se("But\xE9e ouest",xe+.3,1.05,(Je+Ze)/2,.6,2.1,Ze-Je,2),se("But\xE9e est",Ae-.3,1.05,(Je+Ze)/2,.6,2.1,Ze-Je,2);let{xMin:L,xMax:E,zMin:Z,zMax:oe}=Jo.hills.bounds,fe=E-L,ae=oe-Z,Ve=16,we=64,ze=new An(fe,ae,Ve,we).rotateX(-Math.PI/2).translate(L+fe/2,0,Z+ae/2),Oe=ze.attributes.uv;for(let X=0;X<Oe.count;X++)Oe.setXY(X,Oe.getX(X)*fe/2.6,Oe.getY(X)*ae/2.6);let me=ze.attributes.position,Pe;function $e(X){if(Pe===X)return;Pe=X;let j=Pe*.017;for(let ge=0;ge<me.count;ge++){let Xe=me.getX(ge),Fe=me.getZ(ge),at=Math.sin(Math.PI*Ee.clamp((Xe-L)/fe,0,1)),At=Math.min(1,(Fe-Z)*.48,(oe-Fe)*.48),lt=.93+.56*Math.sin(Fe*.36+j)+.32*Math.cos(Xe*.67+Fe*.26+j*1.4)+.19*Math.sin(Fe*.81+j*.67);me.setY(ge,Math.max(0,at*At*lt))}me.needsUpdate=!0,ze.computeVertexNormals(),ze.computeBoundingSphere()}$e(b0);let Ge=new pe(ze,H[3]);Ge.userData.editorAssetId="lab-hill",Ge.receiveShadow=Ge.castShadow=!0,n.add(Ge);let Ie=(X,j)=>{let ge=Ee.clamp((X-L)/fe*Ve,0,Ve-1e-6),Xe=Ee.clamp((j-Z)/ae*we,0,we-1e-6),Fe=Math.floor(ge),at=Math.floor(Xe),At=ge-Fe,lt=Xe-at,ct=Ve+1,pt=at*ct+Fe,xt=me.getY(pt),gn=me.getY(pt+1),gt=me.getY(pt+ct),hn=me.getY(pt+ct+1);return At+lt<=1?xt+(gn-xt)*At+(gt-xt)*lt:hn+(gt-hn)*(1-At)+(gn-hn)*(1-lt)};ie.push({heightfield:!0,mesh:Ge,editorAssetId:"lab-hill",height:Ie,...Jo.hills.bounds,friction:.81,gravity:1});function ot(X,j,ge,Xe,Fe=1.45){let at=_h(384,72,(lt,ct,pt)=>{lt.fillStyle="#202a32",lt.fillRect(0,0,ct,pt),lt.fillStyle=Xe,lt.font="bold 31px system-ui",lt.textAlign="center",lt.fillText(X,ct/2,48,ct-20)}),At=new pe(new An(3.2,.6),new Ot({map:at,side:cn}));At.position.set(j,Fe,ge),n.add(At),ee.push(At)}for(let X of Object.values(Jo)){ot(X.name.toLocaleUpperCase("fr"),...X.sign,X.color);let{xMin:j,xMax:ge,zMin:Xe,zMax:Fe}=X.bounds,at=new Wa(new rt().setFromPoints([new M(j,.025,Xe),new M(ge,.025,Xe),new M(ge,.025,Fe),new M(j,.025,Fe)]),new Sn({color:X.color,transparent:!0,opacity:.72}));n.add(at),ee.push(at)}ot("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),ot("MURS HAUTS",3,-31,"#e8d2ff"),ot("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let G=new xn({color:"#c8e6ed",metalness:1,roughness:.16}),_e=new pe(new _i(.54,2),G);_e.userData.editorAssetId="chrome-sphere",_e.position.set(Bs.x,Bs.y,Bs.z),_e.castShadow=!0,n.add(_e);let Ce=ue.map((X,j)=>{let{x:ge,z:Xe}=E0(j);return se("\xC9chantillon "+ue[j][0],ge,.325,Xe,.65,.65,.65,j,0,1,1,!0).mesh}),Be=new Nn(1,12).rotateX(-Math.PI/2),ve=new Ot({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function de(X){let j=new pe(Be,ve);return j.scale.setScalar(X),n.add(j),j}function We(X,j,ge,Xe,Fe,at,At){let lt=j>=3;e.shadowMap.enabled=lt,f.castShadow=lt,ve.opacity=j===2?.17:.11,D.value=At?.38+ge*.04:0;let ct=j>=9?2048:j>=6?1024:j>=4?512:256;f.shadow.intensity=.45+j*.055,f.shadow.radius=.65+j*.12,z=j,f.shadow.mapSize.x!==ct&&(f.shadow.map?.dispose(),f.shadow.map=null,f.shadow.mapSize.set(ct,ct)),at!==Se&&(Se=at,H.forEach((xt,gn)=>{let gt=xt.userData.texture??xt.map,hn=Te.has(gn)?at:Math.min(256,at);if(gt.image.width===hn)return;let Xi=document.createElement("canvas");Xi.width=Xi.height=hn;let ec=Xi.getContext("2d");hn>512?ye(ec,gn,hn):ec.drawImage(Q[gn],0,0,hn,hn);let Ms=new Di(Xi);Ms.colorSpace=gt.colorSpace,Ms.wrapS=gt.wrapS,Ms.wrapT=gt.wrapT,Ms.repeat.copy(gt.repeat);for(let ya of[xt,Re[gn]])ya.userData.texture=Ms,ya.map=Ms,ya.needsUpdate=!0;gt.dispose()}));let pt=X>=4;for(let xt of ie)xt.mesh?.isMesh&&!xt.zone&&(xt.mesh.material=pt?H[xt.type]:Re[xt.type]);Ge.material=pt?H[3]:Re[3];for(let xt=0;xt<Ce.length;xt++)Ce[xt].material=pt?H[xt]:Re[xt];H.forEach((xt,gn)=>{for(let gt of[xt,Re[gn]])gt.userData.texture||(gt.userData.texture=gt.map),gt.map=Fe?gt.userData.texture:null,gt.color.set(Fe?"#ffffff":ue[gn][1]),gt.needsUpdate=!0}),T=Xe?.21+ge*.067:0,G.metalness=Xe?.95:.1,G.roughness=Xe?.13:.46,m=X>=2,N(x)}return{boxes:ie,floors:Me,probe:_e,display:Ce,visual:We,shadow:de,setTimeOfDay:N,setEnvironment:F,centerSky:W,setRetroSky(X){O!==X&&(O=X,N(x))},sunDirection:()=>R.clone(),centerShadows:J,lighting:[d,f,f.target,c],sunDisk:c,get bloomProfile(){let X=g??Ni(x);return{strength:X.sunHalo*.19,radius:X.bloomRadius,threshold:X.bloomThreshold,softness:X.bloomSoftness,resolution:X.bloomResolution}},get skyLoading(){return y},get hillSeed(){return Pe},setHillSeed:$e,bakeLightmap:le,mapMaterial:(X,j)=>j>=4?H[X]:Re[X],builtObjects:[...ie.map(X=>X.mesh).filter(X=>X?.isObject3D),_e,...ee],materials:[...H,...Re],focus(X,j,ge){U.value=X?j*.75:0,$.value=.07+ge*.058}}}function R0(n,e,t){function i(c,u,h=.85){let d=c.getWorldPosition(new M),f=c.getWorldQuaternion(new Tt);e.push({half:u,min:u.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:Zo(u),friction:h,gravity:1})}let s=[],r=[],o=new li({color:"#485d5d",flatShading:!0});function a([c,u],h,d){let f=new pe(new Ye(.095,.68,.11),o);f.position.set(c,.34,u+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new M(.0475,.34,.055));let p=new qt;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new pe(new Ye(.64,.36,.055),new li({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Di(g);_.colorSpace=St;let v=new pe(new An(.61,.095),new Ot({map:_}));v.position.set(0,.116,.03),p.add(v);let y=.592/d.length,T=d.map(([R,C],b)=>{let S=new pe(new Ye(y-.012,.155,.04),new li({color:"#478086"}));S.position.set(-.296+y*(b+.5),-.045,.046),p.add(S),s.push(S),S.userData.touchWidth=y-.012;let A=document.createElement("canvas");A.width=208,A.height=172;let I=new Di(A);I.colorSpace=St;let O=new pe(new An(y-.017,.139),new Ot({map:I}));O.position.z=.0205,S.add(O);let z=-1/0;return S.userData.action=()=>{let V=performance.now();V-z<250||(z=V,C(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:R,context:A.getContext("2d"),texture:I}});function w(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(h,17,62,478);for(let R of T){let C=R.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let b=(typeof R.label=="function"?R.label():R.label).split("|");b.forEach((S,A)=>C.fillText(S,104,(b.length>1?68:97)+A*37,188)),R.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(w)}function l(){for(let c of r)c()}return a(Ml.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,$o[0])],["Boule",()=>t.spawn(1,$o[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,$o[0])],["Vider",t.clear]]),a(Ml.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,$o[1])],["Sph\xE8re",()=>t.spawn(5,$o[1])]]),a(Ml.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ml.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function vh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new rt,c=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=P0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=P0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function P0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new zt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var bh=0,uw=1,hw=new M,I0=new ll,Gf=new Dn,D0=new M,Mh=new Hn,Sh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new wh,this.unassigned=new wh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Hf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,hw)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===bh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,u;r=0,I0.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){I0.closestPointToPoint(p.point,!0,D0);let x=D0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Gf.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Gf.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let h=[];if(Gf.distanceToPoint(u.point)<0){h.push(zi.create(a,l,c),zi.create(u,l,a),zi.create(u,c,l),zi.create(u,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(zi.create(a,c,l),zi.create(u,a,l),zi.create(u,l,c),zi.create(u,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===bh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=uw;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===bh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=zi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},zi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=bh,this.edge=null}static create(e,t,i){let s=new n,r=new bl(e,s),o=new bl(t,s),a=new bl(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Mh.set(e.point,t.point,i.point),Mh.getNormal(this.normal),Mh.getMidpoint(this.midpoint),this.area=Mh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},bl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Hf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},wh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ps=class extends rt{constructor(e=[]){super();let t=[],i=[],r=new Sh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var $n=Math.PI*2,Th=.84,ms=128;function Gs(n){let e=new Uint8Array(ms*ms*4);for(let i=0;i<ms;i++)for(let s=0;s<ms;s++){let r=(s+.5)/ms,o=(i+.5)/ms,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Th,1),Math.min(o/Th,1),s,i),l=(s+i*ms)*4;for(let c=0;c<3;c++)e[l+c]=Ee.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new oi(e,ms,ms);return t.colorSpace=St,t.generateMipmaps=!0,t.minFilter=zn,t.magFilter=ln,t.needsUpdate=!0,t}function Ir(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ft(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new He(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Th,r.getY(l)*Th):r.setXY(l,.95,.95);return i.setAttribute("color",new zt(a,3)),i}function Hs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:vh(s),material:new xn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function L0(n,e,t){let i=n/2,s=e/2,r=new us;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ks(n,e,t,i,s){return new fr(L0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Vs(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[h,d]=n[u];for(let f=0;f<=e;f++){let p=$n*f/e,x=t(h,d,p,u);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,u/(n.length-1)),u===n.length-1||f===e)continue;let g=u*(e+1)+f,m=g+e+1;h>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new rt;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let h=u*(e+1),d=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Sl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=$n*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new ps(t)}function dw(){let t=new il(L0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ee.clamp(i.getX(l)/.098+.5,0,1),u=Ee.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=Gs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*$n),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[ft(ks(.106,.207,.013,.011,.0019),8425890),ft(ks(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),ft(ks(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),ft(t,16777215,!0),ft(ks(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),ft(new Ye(.0036,.024,.004).translate(.055,.029,0),11714250),ft(new Ye(.0036,.015,.004).translate(-.055,.032,0),11385285),ft(new Ye(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(ft(new Bt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(ft(new Nn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(ft(new Nn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ps([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return Hs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function fw(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Vs(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+h)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Gs((a,l,c,u)=>{let h=$n*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(h)),p=Math.max(...e.map(_=>Math.exp(-(((d-_+.035*Math.cos(h))/.009)**2)))),x=f**3*p,g=Ir(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Sl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Hs("bread","Baguette de pain",.27,o,[ft(s,16777215,!0)],r,.9)}function pw(){let n=Gs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*Ir(a,l)-(c&&(h||d)?35:0);return[p*.94,p,p*1.04]}),e=Vs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Vs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[ft(e,16777215,!0),ft(t,11056059),ft(new Bt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),ft(new Bt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=$n*r/5;i.push(ft(new Ye(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Sl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Hs("wheel","Roue",1.8,s,i,n,.64,.23)}function mw(){let n=Gs((r,o,a,l)=>{let c=Ir(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos($n*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=Vs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Wn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+$n*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new ps(i);return Hs("cup","Tasse",.39,s,[ft(e,16777215,!0),ft(t,15785922)],n,.37)}function gw(){let n=Vs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Gs((s,r,o,a)=>{let l=9*Ir(o,a),c=11*Math.cos(s*$n*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*$n*48+s*$n*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*$n*4);return[u,u*1.13,u*1.24]}),t=[ft(n,16777215,!0),ft(new Ds(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),ft(new Nn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),ft(new Nn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),ft(new Bt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),ft(new Nn(.008,12).translate(0,.035,.0336),15633202)],i=Sl([[.033,-.143],[.054,.133]],6);return Hs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function xw(){let n=Vs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Gs((r,o,a,l)=>{let c=10*Ir(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos($n*r*2));if(e[d]?.[h]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos($n*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[ft(n,16777215,!0),ft(new Nn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),ft(new Ds(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),ft(new Nn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Sl([[.069,-.112],[.069,.109]],6);return Hs("soda","Canette de soda",.35,s,i,t,.42,.27)}function yw(){let n=Vs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Gs((s,r,o,a)=>{let l=15*Ir(o,a),c=8*Math.cos(s*$n*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[ft(n,16777215,!0),ft(ks(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),ft(new Nn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Sl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Hs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function _w(){let n=Gs((s,r,o,a)=>{let l=8*Ir(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Vs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[ft(ks(.138,.22,.061,.016,.004),14788675),ft(ks(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),ft(new An(.106,.174).translate(0,-.004,.0395),16777215,!0),ft(e,2502456),ft(new Bt(.014,.017,.016,10).translate(.04,.117,.001),2503482),ft(new Ye(.008,.047,.027).translate(-.072,.014,-.002),3028798),ft(new Ye(.006,.02,.019).translate(-.072,-.043,-.002),3950414),ft(new Nn(.004,8).translate(.04,.066,.0397),15817792),ft(new Nn(.004,8).translate(-.04,.066,.0397),7903100),ft(ks(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return Hs("radio","Talkie-walkie",.43,new ps(i),t,n,.61,.08)}function U0(){return[dw(),fw(),pw(),mw(),gw(),xw(),yw(),_w()]}var vw=[0,1,2,3,4,5,7,8,9,10];function F0(n){T0.forEach(({x:e,z:t},i)=>n(vw[i],new M(e,.8,t)))}function N0(){let n=[["Cube",new Ye(.33,.33,.33),"#b76b50",0,1.35],["Boule",new _i(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new pr(.29),"#d8ae53",0,1],["Brique",new Ye(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ye(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new _i(.6,2),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:_l(t,s),material:new xn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Zo(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of U0()){let s=_l(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var Ko={regolith:"R\xE9golithe sec",asphalt:"Asphalte rugueux",concrete:"B\xE9ton plein",steel:"T\xF4le d\u2019acier",grating:"Grille m\xE9tallique",glass:"Verre \xE9pais",ceramic:"Plaques c\xE9ramiques",rubber:"Caoutchouc",gravel:"Gravillons",panel:"Panneau composite"},Qo={district:"Ventilation urbaine",reactor:"R\xE9acteurs et relais",traffic:"Circulation urbaine"},Eh=12,Wf=6e5,Mw=48,z0=/^audio-[a-z0-9-]{1,64}$/i,bw=/^data:audio\/(?:wav|wave|x-wav|mpeg|mp3|ogg|webm|mp4|aac|flac|x-flac);base64,[a-z0-9+/]+={0,2}$/i,Tn=(n,e,t,i)=>Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,O0=(n,e)=>typeof n=="string"&&n.trim()?n.trim().slice(0,42):e;function Sw(n){return Object.hasOwn(Ko,n)||Object.hasOwn(Qo,n)||typeof n=="string"&&z0.test(n)}function B0(n){return!n||!Sw(n.clip)?null:{clip:n.clip,volume:Tn(n.volume,0,1,.62),volumeVariation:Tn(n.volumeVariation,0,.8,.16),rate:Tn(n.rate,.4,2.5,1),rateVariation:Tn(n.rateVariation,0,.7,.1),pitch:Tn(n.pitch,-1200,1200,0),pitchVariation:Tn(n.pitchVariation,0,800,135)}}function wl(n){let e=B0(n);return e?{...e,cooldown:Tn(n.cooldown,.03,2,.14),minImpact:Tn(n.minImpact,.1,12,.65),range:Tn(n.range,2,80,22)}:null}function Tl(n){return Array.isArray(n)?n.slice(0,Mw).flatMap((e,t)=>{let i=B0(e);return i?[{name:O0(e.name,"Zone "+(t+1)),x:Tn(e.x,-1024,1024,0),y:Tn(e.y,-2e4,2e4,1.5),z:Tn(e.z,-1024,1024,0),w:Tn(e.w,.1,1024,12),h:Tn(e.h,.1,256,5),d:Tn(e.d,.1,1024,12),...i,fadeDistance:Tn(e.fadeDistance,.05,100,2.5),fadeIn:Tn(e.fadeIn,.02,12,1.2),fadeOut:Tn(e.fadeOut,.02,12,1.8),mode:e.mode==="enter"?"enter":"loop"}]:[]}):[]}function Ah(n){if(!Array.isArray(n))return[];let e=new Set;return n.slice(0,Eh).filter(t=>!t||typeof t.id!="string"||!z0.test(t.id)||e.has(t.id)||typeof t.data!="string"||t.data.length>Wf||!bw.test(t.data)?!1:(e.add(t.id),!0)).map(t=>({id:t.id,name:O0(t.name,"Son import\xE9"),data:t.data}))}function k0(n,e){let t=n.w/2-Math.abs(e.x-n.x),i=n.h/2-Math.abs(e.y-n.y),s=n.d/2-Math.abs(e.z-n.z);if(Math.min(t,i,s)<=0)return 0;let r=Math.min(1,t/Math.min(n.fadeDistance,n.w/2),i/Math.min(n.fadeDistance,n.h/2),s/Math.min(n.fadeDistance,n.d/2));return r*r*(3-2*r)}var ww=Math.ceil((16e6+Math.ceil(16e4)+1024)*4/3),YR=Math.ceil(ww/3900);var jR=new M(0,1,0),El=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,t,i):e;function V0(n){if(!Array.isArray(n?.pivot)||n.pivot.length!==3)return null;let e=n.mode==="slide"||n.mode==="screw"?n.mode:null,t=n.axis==="x"||n.axis==="z"?n.axis:null;return{...e?{mode:e,travel:El(n.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:n.pivot.map(i=>El(i,0,-6,6)),closed:El(n.closed,0,-180,180),open:El(n.open,95,-180,180),seconds:El(n.seconds,.7,.1,6)}}var JR=new M;var Ch=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";Ch.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Ch.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Xf=Object.freeze(Object.fromEntries(Ch.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),G0=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,e,t):i;function Tw(n,e){let t=Xf[n];return{pivot:t.pivot.map((i,s)=>G0(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:G0(e?.limit,0,150,t.limit)}}function H0(n){return Object.fromEntries(Ch.map(([e])=>[e,Tw(e,n?.[e])]))}function W0(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var Ew={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},Aw=new WeakMap,Cw={value:0},X0=["sine","triangle","pulse","stars"],qf=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function q0(n){if(!n||typeof n!="object")return null;let e={};for(let[t,i]of Object.entries(Ew)){let s=n[t];e[t]={strength:qf(s?.strength,0,i.max,0),speed:qf(s?.speed,0,8,i.defaultSpeed),scale:qf(s?.scale,0,48,i.defaultScale),signal:X0.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function Y0(n,e){if(!e||!Object.values(e).some(r=>r.strength>0))return n;let t=r=>{let o=e[r];return new Jt(o.strength,o.speed,o.scale,X0.indexOf(o.signal))},i={uFoundryTime:Cw,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new He(e.tint.color)},uFoundryGlowColor:{value:new He(e.glow.color)}},s=`
uniform float uFoundryTime;
varying vec3 vFoundryPosition;
float foundryWave(vec4 channel, vec3 p){
  float phase=uFoundryTime*channel.y*6.2831853+dot(p,vec3(.61,.79,-.53))*channel.z;
  float wave=.5+.5*sin(phase);
  if(channel.w>1.5)return smoothstep(.65,.85,wave);
  if(channel.w>.5)return 1.-abs(fract(phase/6.2831853)*2.-1.);
  return wave;
}
`;return n.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=s+`uniform vec4 uFoundryDeform;
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},n.customProgramCacheKey=()=>"foundry-effect-v1",Aw.set(n,e),n}var Z0=48,Rw=3,Pw=128,j0=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),Iw=(n,e,t)=>Math.max(e,Math.min(t,n)),Dw=()=>structuredClone(j0.shield),Al=(n,e,t,i)=>Number.isFinite(n)?Iw(n,t,i):e;function Ph(n){let e=n?.mode==="lathe"?j0.bottle:Dw(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Z0?n.points.map(o=>[Al(o?.[0],0,-1.5,1.5),Al(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Al(n?.depth,e.depth,.025,1.5),bevel:Al(n?.bevel,e.bevel,0,.15),segments:Math.round(Al(n?.segments,32,Rw,Pw))}}function J0(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Rh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function Lw(n,e,t,i){let s=Rh(n,e,t),r=Rh(n,e,i),o=Rh(t,i,n),a=Rh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function Uw(n){let e=Ph(n),t=e.mode==="lathe"?e.points:J0(e);if(t.length<3||t.length>Z0*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&Lw(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function $0(n){let e=Ph(n),t=Uw(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ce(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ce(0,s[0].y)),s.at(-1).x>0&&s.push(new ce(0,s.at(-1).y)),i=new nl(s,e.segments);let r=[],o=i.attributes.position,a=new M,l=new M,c=new M,u=new M,h=i.index.array;for(let d=0;d<h.length;d+=3)a.fromBufferAttribute(o,h[d]),l.fromBufferAttribute(o,h[d+1]),c.fromBufferAttribute(o,h[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(h[d],h[d+1],h[d+2]);i.setIndex(r)}else{let s=J0(e),r=new us;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new fr(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new zt(new Float32Array(s*2),2))}return i}var Yf=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Cl=null,Fw=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Dr(n){return typeof n=="string"&&Fw.has(n.replace(/^custom-model-game-/,""))}function ea(n){let e=n?.parts;return Dr(n?.id)||Dr(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Dr(t?.assetId))}function Q0(){if(Cl)return Cl;let n=N0(),e=Yf;return Cl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Cl.set("chrome-sphere",{geometry:new _i(.54,2),material:new xn({color:"#c8e6ed",metalness:1,roughness:.16})}),Cl}function Ih(n){return typeof n=="string"&&Q0().has(n)}function Zf(n){return Q0().get(n)??null}function Nw(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function K0(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[Nw(e,n)]}}function jf(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>K0(e,t)),K0("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Kf=/^[a-z0-9-]{1,40}$/i,zw={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function Ow(n,e){if(!n)return null;let t=e==="trigger"?n.phase==="exit"?"exit":"enter":n.phase==="use"?"use":null;if(!t)return null;let i=typeof n.door=="string"&&Kf.test(n.door)?n.door:null,s=typeof n.light=="string"&&Kf.test(n.light)?n.light:null,r=Object.hasOwn(zw,n.sound)?n.sound:null,o=t==="use"&&sx.test(n.receiver??"")?n.receiver:null;return i||s||r||o?{phase:t,...o?{receiver:o}:{},...i?{door:i,doorState:["open","close","toggle"].includes(n.doorState)||e==="trigger"&&n.doorState==="hold"?n.doorState:"open"}:{},...i&&e==="trigger"&&n.doorState==="hold"?{doorDelay:Lr(n.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(n.lightState)?n.lightState:"on",lightColor:rx.test(n.lightColor??"")?n.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:Lr(n.soundVolume,0,1,.6)}:{}}:null}var np="gorilla-lab-models-v1",ta=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),Bw=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,kw=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),nx=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),Qf=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),Vw=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Lr=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,e,t):i;function ip(n){return{gravity:Lr(n?.physics?.gravity,0,2.5,1),bounce:Lr(n?.physics?.bounce,0,1.65,1)}}function ix(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Lr(n?.uv?.repeat,.01,100,1),angle:Lr(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Lr(n?.uv?.offset?.[t],-100,100,0))}}var Gw=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),sx=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,rx=/^#[a-f\d]{6}$/i;function Jf(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ws(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ee.clamp(n[s],t,i):e)}function ex(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var ep=new Set(["box","sphere","capsule","convex"]);function Hw(n){if(n?.mode==="box")return{mode:"box",center:Ws(n.center,0,-6,6),size:Ws(n.size,.5,.025,12)};let e=Math.round(Ee.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:ep.has(n.shape)?n.shape:"box",center:Ws(n.center,0,-6,6),size:Ws(n.size,.5,.025,12),rotation:Ws(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&ep.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function gs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ta.models||JSON.stringify(n).length>ta.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!ea(i)).map(i=>{if(typeof i?.id!="string"||!sx.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ta.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(i.id);let s=new Set;return{id:i.id,name:Jf(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:H0(i.avatarRig)}:{},...Ih(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:{...Object.fromEntries(Object.entries(Gw).map(([r,o])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:o])),...i.kind!=="structure"&&i.kind!=="avatar"&&i.properties?.drivable===!0?{drivable:!0}:{}},hitbox:Hw(i?.hitbox),...i.physics?{physics:ip(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Dr(r?.assetId)).map((r,o)=>{let a=q0(r?.effect),l=typeof r?.actionId=="string"&&Kf.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=i.kind==="structure"?Ow(r?.reaction,r?.zone):null,u=i.kind==="structure"&&r?.zone!=="trigger"?V0(r?.hinge):null;return{name:Jf(r?.name,`Pi\xE8ce ${o+1}`),...u?{hinge:u}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(Xf,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=ta.parts?{group:r.group}:{},shape:r?.shape==="asset"&&Ih(r?.assetId)?"asset":Object.hasOwn(kw,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Ih(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Ph(r?.profile)}:{},position:Ws(r?.position,0,-3,3),rotation:Ws(r?.rotation,0,-360,360),scale:Ws(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&rx.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(Vw,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:Jf(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(Qf,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&ex(r.portal)?{portal:ex(r.portal)}:{},...r?.uv?{uv:ix(r)}:{},surface:Object.hasOwn(nx,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=ta.textureBytes&&Bw.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&W0(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function ox(n){try{let e=(n??globalThis.localStorage)?.getItem(np);if(e&&e.length<=ta.fileBytes)return gs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Ww(n){switch(n){case"tetrahedron":return new pr(Math.sqrt(3)/2);case"sphere":return new Mi(.5,20,12);case"cylinder":return new Bt(.5,.5,1,20);case"cone":return new cs(.5,1,20);case"torus":return new Wn(.365,.135,8,24);case"capsule":return new Is(.28,.44,6,16);case"diamond":return new vi(.5);default:return new Ye(1,1,1)}}var ax=Object.keys(nx),vn=64,Rl=4,lx=2,$i;function cx(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function ux(){if($i)return $i;let n=vn*Rl,e=vn*lx,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/vn)*Rl+Math.floor(s/vn),o=cx(ax[r],s%vn,i%vn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return $i=new oi(t,n,e),$i.colorSpace=St,$i.magFilter=ln,$i.minFilter=zn,$i.generateMipmaps=!0,$i.needsUpdate=!0,$i}var $f=new Map,Oi;function Xw(){if(Oi)return Oi;let n=new Uint8Array(vn**2*4);for(let e=0;e<vn;e++)for(let t=0;t<vn;t++){let i=t>>3,s=e>>3,r=(i*13+s*17+i*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;n.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*vn+t)*4)}return Oi=new oi(n,vn,vn),Oi.colorSpace=St,Oi.wrapS=Oi.wrapT=Ln,Oi.magFilter=ln,Oi.minFilter=zn,Oi.generateMipmaps=!0,Oi.needsUpdate=!0,Oi}function tx(n){if($f.has(n))return $f.get(n);let e=new Uint8Array(vn*vn*4);for(let i=0;i<vn;i++)for(let s=0;s<vn;s++){let r=cx(n,s,i),o=(i*vn+s)*4;e.set([r,r,r,255],o)}let t=new oi(e,vn,vn);return t.colorSpace=St,t.wrapS=t.wrapT=Ln,t.magFilter=ln,t.minFilter=zn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,$f.set(n,t),t}function hx(n){return!!(n?.effect||n?.texture||n?.uv||n?.surface==="windows"||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function qw(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=ix(e),a=Ee.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:u,normal:h,uv:d}=n.attributes,f=new M,p=new M;for(let x=0;x<u.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(h,x);let _=Math.abs(p.x),v=Math.abs(p.y),y=Math.abs(p.z);_>=v&&_>=y?(g=f.z,m=f.y):v>=y?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Dh(n,e=new M(...n.scale)){let t=n.shape==="asset"?Zf(n.assetId):null,i=n.shape==="custom"?$0(n.profile):t?.geometry?.clone()??Ww(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Ne(new Float32Array(s.attributes.position.count*2),2)),n.uv&&qw(s,n,e);let r=n.rotation.map(Ee.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new He(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,u=ax.indexOf(n.surface),h=u%Rl,d=Math.floor(u/Rl),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&n.surface!=="windows"&&c.setXY(p,(h+.05+c.getX(p)*.9)/Rl,(d+.05+c.getY(p)*.9)/lx);return s.setAttribute("color",new zt(l,3)),s}function Yw(n){return Y0(Zw(n),n?.effect)}function Zw(n){let e=n?.shape==="asset"?Zf(n.assetId):null,t=Qf[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new bi().load(n.texture);a.colorSpace=St,a.wrapS=a.wrapT=Ln,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Ln),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new He(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??Qf.original;if(n?.surface==="windows"&&!n.texture)return new xn({vertexColors:!0,map:tx("windows"),emissive:"#ffffff",emissiveMap:Xw(),emissiveIntensity:1.3,roughness:i,metalness:s});if(!n?.texture)return new xn({vertexColors:!0,map:n?.uv?tx(n.surface):ux(),roughness:i,metalness:s});let r=new bi().load(n.texture);return r.colorSpace=St,r.wrapS=r.wrapT=Ln,new xn({vertexColors:!0,map:r,roughness:i,metalness:s})}function na(n){return n?.parts?.some(hx)?n.parts.map(Yw):new xn({vertexColors:!0,map:ux(),roughness:.68})}function ia(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==$i&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function tp(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Dh(s);let r=new nn(...s.rotation.map(Ee.degToRad),"ZYX"),o=new M(...s.scale).multiply(new M(...[0,1,2].map(a=>new M().setComponent(a,1).applyEuler(r).multiply(e).length())));return Dh(s,o)}),i=vh(t,n.some(hx));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function sa(n,e=null){let t=tp(n.parts),i=t.boundingBox.getSize(new M).max(new M(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=tp(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function Pl(n){let e=new fn;for(let t of n.parts??[]){let i=Dh(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function ra(n){return Pl(n).getSize(new M)}function dx(n){let e=Pl(n),t=e.getCenter(new M),i=e.getSize(new M),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":ep.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ee.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):i,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function jw(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),u=c.toArray().map(h=>h.toFixed(4)).join(",");s.has(u)||(s.add(u),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),r.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return r}function Jw(n,e=null){let t=dx(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new M(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((h,d)=>d!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new Is(l,c,Math.max(2,Math.round(i/8)),i):new Mi(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/s.x,1/s.y,1/s.z),u}if(t.shape==="convex"&&n.parts?.length){let s=tp(n.parts),r=jw(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new ps(r),a=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new Ye(1,1,1)}function fx(n,e=null){let t=dx(n),i=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=Jw(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Ee.degToRad(t.rotation.x)),a.rotateY(Ee.degToRad(t.rotation.y)),a.rotateZ(Ee.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function px(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=Pl(n),i=t.getCenter(new M),s=t.getSize(new M).max(new M(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new M(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Dh(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new M).sub(i).multiply(r),size:l.getSize(new M).multiply(r).max(new M(.01,.01,.01))};return a.dispose(),[c]})}var sp=12,rp=72,op=40,ui=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function Lh(n){return Array.isArray(n)?n.slice(0,sp).flatMap(e=>{let t=[];for(let r of Array.isArray(e?.points)?e.points.slice(0,op):[]){if(!Array.isArray(r)||r.length!==3||!r.every(Number.isFinite))continue;let o=[ui(r[0],-1024,1024,0),ui(r[1],-256,512,0),ui(r[2],-1024,1024,0)],a=t.at(-1);(!a||Math.hypot(...o.map((l,c)=>l-a[c]))>.15)&&t.push(o)}let i=t.at(-1);if(t.length>2&&Math.hypot(...t[0].map((r,o)=>r-i[o]))<=.15&&t.pop(),t.length<3)return[];let s=[];for(let r of Array.isArray(e.models)?e.models.slice(0,2):[]){let o=r?.model;if(!(!o||ea(o)||!Array.isArray(o.parts)||!o.parts.length))try{let[a]=gs({version:1,models:[o]}).models;a?.parts.length&&s.push({model:a,w:ui(r.w,.08,30,2),h:ui(r.h,.08,20,1.5),d:ui(r.d,.08,50,4)})}catch{}}return s.length?[{name:typeof e.name=="string"&&e.name.trim()?e.name.trim().slice(0,42):"Flux de circulation",points:t,models:s,count:Math.round(ui(e.count,1,rp,8)),speed:ui(e.speed,.5,160,10),pause:ui(e.pause,0,25,0),interval:ui(e.interval,3,180,20),phase:ui(e.phase,0,359,0),brightness:ui(e.brightness,.25,6,1),spread:ui(e.spread,.25,1,1),smooth:e.smooth===!0,visible:e.visible!==!1}]:[]}):[]}var Uh=["sentinelle","vigie"],oa=(n,e,t,i)=>Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,mx=n=>n&&[n.x,n.y,n.z].every(Number.isFinite);function gx(n){return{x:oa(n.x,-1024,1024,0),y:oa(n.y,-2999,2999,0),z:oa(n.z,-1024,1024,0)}}function Fh(n){if(!Array.isArray(n))return[];let e=[];for(let t of n)if(mx(t)&&(e.push({id:e.length+1,name:typeof t.name=="string"&&t.name.trim()?t.name.trim().slice(0,36):"Sentinelle",look:Uh.includes(t.look)?t.look:Uh[0],...gx(t),yaw:oa(t.yaw,-360,360,0),speed:oa(t.speed,.5,4,1.65),sight:oa(t.sight,2,20,10),route:(Array.isArray(t.route)?t.route:[]).slice(0,12).filter(mx).map(gx)}),e.length===16))break;return e}function xx(){let n=(e,t,i,s,r,o,a,l=9)=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,solid:!0});return{format:"gorilla-lab-map",version:1,name:"Sentinelle \xB7 parcours de test",worldSize:32,spawn:{x:0,y:.03,z:7,yaw:0},pieces:[n("Sol",0,-.2,0,19,.4,20),n("Mur gauche",-9.5,1,0,.5,2.5,20),n("Mur droit",9.5,1,0,.5,2.5,20),n("Mur nord",0,1,-10,19,2.5,.5),n("Mur sud",0,1,10,19,2.5,.5),n("Paravent central",0,1,1,4.8,2.5,.3,6),n("Abri ouest",-6,1,-2,.34,2.5,3.5,6),n("Abri est",6,1,3,.34,2.5,3.5,6),n("Blocs de franchissement",2.5,.28,-2,1.5,.56,1.5,3)],entities:[{name:"Sentinelle",look:"sentinelle",x:0,y:0,z:-6,yaw:90,speed:1.55,sight:11,route:[{x:4,y:0,z:-6},{x:4,y:0,z:-2},{x:-4,y:0,z:-2},{x:-4,y:0,z:-6}]}]}}var Mx=512,lp=1/2.6**2,Oh=1e4,Dl=20,$w=1e6,cp=1e4,Kw=1e4,up=10,hp=10,Qw=1e4,eT=16,aa=1e4,yx=new WeakMap,Bi=Ee.clamp,ki=Ee.lerp,Ll=n=>n*n*(3-2*n);function Dt(n,e,t,i){return Number.isFinite(n)?Bi(n,e,t):i}function bx(n){if(!n)return null;let e=gs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var tT=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Sx(n,e=eT){return Math.round(Dt(n,1,Mx,e))}function nT(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return Dt(n[e+"Density"],0,Dl,0);let r=Dt(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return Dt(o/t,0,Dl,0)}var iT=["grass","shrub","model"],sT=["keep","fit","stretch"],rT=/^#[a-f\d]{6}$/i,oT=20;function aT(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(Dt(n.minHeight,-300,300,-300),Dt(n.maxHeight,-300,300,300)),[s,r]=e(Dt(n.minX,0,100,0),Dt(n.maxX,0,100,100)),[o,a]=e(Dt(n.minZ,0,100,0),Dt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:Dt(n.maxSlope,0,90,90),yaw:Dt(n.yaw,-360,360,0),yawVariation:Dt(n.yawVariation,0,360,360)}}function lT(n){return n?{x:Dt(n.x,-256,256,0),z:Dt(n.z,-256,256,0),radius:Dt(n.radius,.1,512,5),blend:Dt(n.blend,0,1,.5)}:null}function Ul(n={}){let e=bx(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,up).map(r=>rT.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:Dt(n.density,0,Dl,1),colors:s,seed:Math.round(Dt(n.seed,0,2147483647,1)),size:Dt(n.size,.05,cp,1),fit:sT.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:Dt(n.variation,0,hp,0),...n.scatter?{scatter:aT(n.scatter)}:{}}}function cT(n,e){return Array.isArray(n.rules)?n.rules.slice(0,Oh).filter(t=>t&&typeof t=="object"&&iT.includes(t.kind)).filter(t=>t.kind!=="model"||bx(t.model)).map(Ul):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=nT(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ul({kind:t,model:a,density:o,seed:n.seed,size:Dt(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function xs(n={},e=1){let t=Sx(n?.detail),i=n?.heights;return{detail:t,...["varied","irregular","staggered"].includes(n?.triangulation)?{triangulation:n.triangulation}:{},...n?.thickness>0?{thickness:Dt(n.thickness,0,100,0)}:{},seed:Math.round(Dt(n?.seed,0,2147483647,1)),amplitude:Dt(n?.amplitude,0,1e4,0),frequency:Dt(n?.frequency,1e-5,100,.12),octaves:Math.round(Dt(n?.octaves,1,oT,3)),roughness:Dt(n?.roughness,0,1,.42),ridge:Dt(n?.ridge,0,1,0),edgeFade:Dt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:lT(n.reliefArea)}:{},rules:cT(n??{},e),...["triplanar","regolith"].includes(n?.projection)?{projection:n.projection}:{},textureDensity:Dt(n?.textureDensity,1e-4,Qw,lp),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&tT.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>Dt(s,-aa,aa,0)):null}}function dp(n,e,t){return t!==void 0&&Yn(n,e,t)>.5}function ap(n,e=n.detail){let{triangulation:t,seed:i}=n;if(t!=="irregular"&&t!=="staggered")return null;let s=e+1,r=s**2,o=new Float32Array(r),a=new Float32Array(r);for(let l=0;l<=e;l++)for(let c=0;c<=e;c++){let u=l*s+c,h=l>0&&l<e&&c>0&&c<e,d=h&&t==="irregular";o[u]=c+(d?(2*Yn(c,l,i)-1)*.2:h?.25*(l%2?1:-1):0),a[u]=l+(d?(2*Yn(c,l,i+417)-1)*.2:0)}return{x:o,z:a,staggered:t==="staggered"}}function wx(n,e,t,i){return i?.staggered?e%2===1:dp(n,e,t)}var Xs={a:0,b:0,c:0,u:0,v:0};function Nh(n,e,t,i,s,r){let o=n-t.x[i],a=e-t.z[i],l=t.x[s]-t.x[i],c=t.z[s]-t.z[i],u=t.x[r]-t.x[i],h=t.z[r]-t.z[i],d=1/(l*h-c*u),f=(o*h-a*u)*d,p=(l*a-c*o)*d;return f<-1e-6||p<-1e-6||f+p>1+1e-6?!1:(Xs.a=i,Xs.b=s,Xs.c=r,Xs.u=f,Xs.v=p,!0)}function _x(n,e,t,i,s,r,o){let a=r*i+s,l=a+1,c=a+i,u=c+1;return wx(s,r,o,t)?Nh(n,e,t,a,c,u)||Nh(n,e,t,a,u,l):Nh(n,e,t,a,c,l)||Nh(n,e,t,u,l,c)}function fp(n,e,t,i,s){let r=t+1,o=Math.min(t-1,Math.floor(n)),a=Math.min(t-1,Math.floor(e));if(_x(n,e,s,r,o,a,i))return!0;for(let l=Math.max(0,a-1);l<=Math.min(t-1,a+1);l++)for(let c=Math.max(0,o-1);c<=Math.min(t-1,o+1);c++)if((c!==o||l!==a)&&_x(n,e,s,r,c,l,i))return!0;return!1}function Tx(n,e,t,i,s,r){let o=Bi(t,0,e),a=Bi(i,0,e);if(r&&fp(o,a,e,s,r)){let{a:_,b:v,c:y,u:T,v:w}=Xs;return n[_]+(n[v]-n[_])*T+(n[y]-n[_])*w}let l=Math.min(e-1,Math.floor(o)),c=Math.min(e-1,Math.floor(a)),u=o-l,h=a-c,d=e+1,f=c*d+l,p=n[f],x=n[f+1],g=n[f+d],m=n[f+d+1];return dp(l,c,s)?u>=h?p+(x-p)*u+(m-x)*h:p+(m-g)*u+(g-p)*h:u+h<=1?p+(x-p)*u+(g-p)*h:m+(g-m)*(1-u)+(x-m)*(1-h)}function pp(n,e){let t=Sx(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=ap(n),o=ap(n,t),a=n.triangulation?n.seed:void 0,l=Array.from({length:i**2},(c,u)=>Tx(n.heights,n.detail,(o?.x[u]??u%i)*s,(o?.z[u]??Math.floor(u/i))*s,a,r));return{...n,detail:t,heights:l}}function Yn(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function zh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Ll(n-i),o=Ll(e-s),a=ki(Yn(i,s,t),Yn(i+1,s,t),r),l=ki(Yn(i,s+1,t),Yn(i+1,s+1,t),r);return 2*ki(a,l,o)-1}function Ur(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:h,reliefArea:d,heights:f}=i,p=yx.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.triangulation===i.triangulation&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===h&&p.reliefArea===d;if(x&&p.heights===f)return p;let g=s+1,m=x?p.layout:ap(i),_=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let T=0;T<=s;T++)for(let w=0;w<=s;w++){let R=T*g+w,C=((m?.x[R]??w)/s-.5)*e,b=((m?.z[R]??T)/s-.5)*t,S=1;if(d){let N=Math.hypot(C-d.x,b-d.z);if(N>=d.radius)continue;d.blend&&(S=Ll(Math.min(1,(d.radius-N)/(d.radius*d.blend))))}let A=C*a,I=b*a,O=0,z=1,V=0;for(let N=0;N<l;N++){let F=zh(A*2**N,I*2**N,r+N*13);O+=z*ki(F,1-2*Math.abs(F),u),V+=z,z*=c}let B=h?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(w/s-.5))*2,(.5-Math.abs(T/s-.5))*2)),h*2):1,K=l===3&&c===.42&&u===0&&h===0;_[T*g+w]=S*(K?o*(.62*zh(A,I,r)+.26*zh(A*2.03,I*2.03,r+13)+.12*zh(A*4.13,I*4.13,r+37)):o*O/V*B)}let v=f?_.map((T,w)=>T+f[w]):_,y={w:e,d:t,detail:s,seed:r,layout:m,triangulation:i.triangulation,diagonalSeed:i.triangulation?r:void 0,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:h,reliefArea:d,heights:f,procedural:_,surface:v};return yx.set(n,y),y}function Bh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Tx(o,i,(e/s+.5)*i,(t/r+.5)*i,n.diagonalSeed,n.layout)}function la(n=0){return(Math.round(n/90)%4+4)%4*90}function Ex(n){let e=la(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Ax(n,e,t){let{cos:i,sin:s}=Ex(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Il(n){return la(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function vx(n,e,t){return n.y+Bh(Ur(n),...Ax(n,e,t))}var uT=.25;function mp(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Il(n),s=Il(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),u=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(u-c<.05))for(let h of[-1,1]){let d=e[r]-h*s[a]/2,f=d-(n[r]+h*i[a]/2);Math.abs(f)<=uT&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:u,side:h,edge:d,delta:f})}}return t}function Cx(n,e,t=1.5){let i=mp(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:u,edge:h,delta:d}=i,f=n.terrain;if(Math.abs(Il(n)[a]-Il(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let b=e.terrain.detail,S=Math.ceil(f.detail/b)*b;S<=Mx&&(f=pp(f,S))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:_,layout:v}=Ur(p),y=m?.slice()??Array((x+1)**2).fill(0),T=Math.max(t,Il(p)[o]/x),{cos:w,sin:R}=Ex(p),C=!1;for(let b=0;b<=x;b++)for(let S=0;S<=x;S++){let A=b*(x+1)+S,I=((v?.x[A]??S)/x-.5)*p.w,O=((v?.z[A]??b)/x-.5)*p.d,z=p.x+w*I+R*O,V=p.z-R*I+w*O,B=r==="x"?z:V;if(B<l-1e-6||B>c+1e-6)continue;let K=Math.max(0,u*(h-(s==="x"?z:V)));if(K>T)continue;let N=s==="x"?vx(e,h,V):vx(e,z,h),F=ki(_[A],N-p.y,Ll(1-K/T))-g[A];y[A]=Bi(F,-aa,aa),C||=y[A]!==F}return{piece:{...p,terrain:{...f,heights:y}},clipped:C}}function hT(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,h=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(u+=s[d*r+f],h++);return u/h}function Rx(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ur(n),{detail:l,w:c,d:u,surface:h,procedural:d,layout:f}=a,[p,x]=Ax(n,e,t),g=Bi(p,-c/2,c/2),m=Bi(x,-u/2,u/2);if((p-g)**2+(x-m)**2>=s**2)return!1;let _=(p/c+.5)*l,v=(x/u+.5)*l,y=c/l,T=u/l,w=Math.max(0,Math.ceil(_-s/y-(f?.25:0))),R=Math.min(l,Math.floor(_+s/y+(f?.25:0))),C=Math.max(0,Math.ceil(v-s/T-(f?.25:0))),b=Math.min(l,Math.floor(v+s/T+(f?.25:0))),S=Number.isFinite(o)?o-n.y:Bh(a,p,x),A=l+1,I=a.heights?.slice()??new Array(A**2).fill(0),O=!1,z=!1;function V(B,K,N){O=!0;let F=K*A+B,W=I[F],J;if(i==="raise"||i==="lower")J=W+(i==="raise"?1:-1)*r*N;else{let ue=i==="flatten"?S:hT(a,B,K);J=ki(h[F],ue,Math.min(1,r)*N)-d[F]}J=Bi(J,-aa,aa),!(Math.abs(J-W)<1e-7)&&(I[F]=J,z=!0)}for(let B=C;B<=b;B++)for(let K=w;K<=R;K++){let N=B*A+K,F=Math.hypot(((f?.x[N]??K)-_)*y,((f?.z[N]??B)-v)*T)/s;F<1&&V(K,B,Ll(1-F))}if(!O){let B=Bi(_,0,l),K=Bi(v,0,l),N=Math.min(l-1,Math.floor(B)),F=Math.min(l-1,Math.floor(K)),W=B-N,J=K-F;if(f&&fp(B,K,l,a.diagonalSeed,f)){let{a:ue,b:ye,c:Te,u:Ue,v:H}=Xs,Q=1-Ue-H>=Math.max(Ue,H)?ue:Ue>=H?ye:Te;V(Q%A,Math.floor(Q/A),1)}else{let ue=W+J<=1,ye=ue?1-W-J:W+J-1,Te=ue?W:1-J,Ue=ue?J:1-W;if(ye>=Math.max(Te,Ue)){let H=+!ue;V(N+H,F+H,1)}else Te>=Ue?V(N+1,F,1):V(N,F+1,1)}}return z&&(n.terrain.heights=I),z}function Px(n,e){let t=e.terrain?.projection==="regolith";if(!t&&e.terrain?.projection!=="triplanar")return;let i=n.onBeforeCompile,s=n.customProgramCacheKey(),r=Ee.degToRad(e.uvRotation??0),o=Math.sqrt(e.terrain.textureDensity??lp)/(e.uvScale??1);n.onBeforeCompile=function(a,l){Object.assign(a.uniforms,{terrainRepeat:{value:o},terrainUvBasis:{value:new ce(Math.cos(r),Math.sin(r))},terrainUvOffset:{value:new ce(e.uvOffsetX??0,e.uvOffsetY??0)},terrainHalfSize:{value:new ce(e.w/2,e.d/2)}});let c=`varying vec3 terrainPoint; varying vec3 terrainNormal;
`;a.vertexShader=c+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
terrainPoint=position; terrainNormal=normal;`),a.fragmentShader=c+`
      uniform float terrainRepeat;
      uniform vec2 terrainUvBasis,terrainUvOffset,terrainHalfSize;
      vec2 terrainUv(vec2 value){
        vec2 r=terrainUvBasis;
        return mat2(r.x,r.y,-r.y,r.x)*value*terrainRepeat+terrainUvOffset;
      }
    `+a.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        vec3 weight=pow(abs(normalize(terrainNormal)),vec3(4.0));
        weight/=max(.0001,weight.x+weight.y+weight.z);
        vec3 p=terrainPoint;
        vec4 xSample=texture2D(map,terrainUv(vec2(p.z+terrainHalfSize.y,p.y)));
        vec4 ySample=texture2D(map,terrainUv(vec2(p.x+terrainHalfSize.x,terrainHalfSize.y-p.z)));
        vec4 zSample=texture2D(map,terrainUv(vec2(p.x+terrainHalfSize.x,p.y)));
        ${t?`
        vec2 macro=p.xz;
        vec2 alt=mat2(.79,.61,-.61,.79)*macro*.39;
        float veins=smoothstep(-.85,.85,sin(macro.x*.073+sin(macro.y*.057))+sin(macro.y*.091-macro.x*.021)*.68);
        vec4 mixedDust=mix(ySample,texture2D(map,terrainUv(alt)+.371),.26+veins*.29);
        mixedDust.rgb*=.74+veins*.43;
        diffuseColor*=xSample*weight.x+mixedDust*weight.y+zSample*weight.z;
        `:"diffuseColor*=xSample*weight.x+ySample*weight.y+zSample*weight.z;"}
      #endif
    `),i.call(this,a,l)},n.customProgramCacheKey=()=>s+(t?"|terrain-regolith":"|terrain-triplanar")}function Ix(n){let{w:e,d:t,terrain:i}=n,{detail:s,layout:r,diagonalSeed:o}=Ur(n),a=s+1,l=a**2,c=i.thickness??0,u=c?4*s:0,h=l*(c?2:1)+4*u,d=new Float32Array(h*3),f=new Float32Array(h*2),p=h>65536?Uint32Array:Uint16Array,x=s**2*6,g=new p(x*(c?2:1)+u*6),m=Math.sqrt(i.textureDensity??lp),_=0;for(let T=0;T<=s;T++)for(let w=0;w<=s;w++){let R=T*a+w,C=(r?.x[R]??w)/s,b=(r?.z[R]??T)/s;if(d[3*R]=(C-.5)*e,d[3*R+2]=(b-.5)*t,f[2*R]=C*e*m,f[2*R+1]=(1-b)*t*m,T>=s||w>=s)continue;let S=R+1,A=R+a,I=A+1;wx(w,T,o,r)?(g[_++]=R,g[_++]=A,g[_++]=I,g[_++]=R,g[_++]=I,g[_++]=S):(g[_++]=R,g[_++]=A,g[_++]=S,g[_++]=I,g[_++]=S,g[_++]=A)}let v=[];if(c){d.copyWithin(l*3,0,l*3),f.copyWithin(l*2,0,l*2);for(let w=0;w<x;w+=3)g[_++]=l+g[w],g[_++]=l+g[w+2],g[_++]=l+g[w+1];let T=(w,R)=>{for(let C=0;C<s;C++){let b=w+C*R,S=b+R,A=l*2+v.length*4;v.push([b,S]);for(let I=0;I<4;I++){let O=I%2?S:b;d[3*(A+I)]=d[3*O],d[3*(A+I)+2]=d[3*O+2];let z=Math.abs(R)===1?e:t;f[2*(A+I)]=(C+I%2)/s*z*m,f[2*(A+I)+1]=I<2?c*m:0}g.set([A,A+1,A+2,A+1,A+3,A+2],_),_+=6}};T(0,1),T(s,a),T(l-1,-1),T(l-a,-a)}let y=new rt;return y.setAttribute("position",new zt(d,3).setUsage(wr)),y.setAttribute("uv",new zt(f,2)),y.setIndex(new zt(g,1)),y.userData.terrainSides=v,gp(y,n),y}function gp(n,e){let{surface:t}=Ur(e),{position:i}=n.attributes,s=e.terrain.thickness??0,r=t.length;for(let o=0;o<r;o++)i.setY(o,t[o]),s&&i.setY(r+o,t[o]-s);n.userData.terrainSides.forEach(([o,a],l)=>{let c=r*2+l*4;i.setY(c,t[o]),i.setY(c+1,t[a]),i.setY(c+2,t[o]-s),i.setY(c+3,t[a]-s)}),i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function dT(n,e,t,i){let{detail:s,w:r,d:o,surface:a,layout:l}=n,c=Bi((e/r+.5)*s,0,s),u=Bi((t/o+.5)*s,0,s);if(l&&fp(c,u,s,n.diagonalSeed,l)){let{a:_,b:v,c:y}=Xs,T=(l.x[v]-l.x[_])*r/s,w=(l.z[v]-l.z[_])*o/s,R=a[v]-a[_],C=(l.x[y]-l.x[_])*r/s,b=(l.z[y]-l.z[_])*o/s,S=a[y]-a[_];return i.set(R*b-w*S,w*C-T*b,T*S-R*C).normalize()}let h=Math.min(s-1,Math.floor(c)),d=Math.min(s-1,Math.floor(u)),f=s+1,p=d*f+h;if(dp(h,d,n.diagonalSeed)){let _=c-h>=u-d,v=_?a[p+1]-a[p]:a[p+f+1]-a[p+f],y=_?a[p+f+1]-a[p+1]:a[p+f]-a[p];return i.set(-v*s/r,1,-y*s/o).normalize()}let x=c-h+u-d<=1,g=x?a[p+1]-a[p]:a[p+f+1]-a[p+f],m=x?a[p+f]-a[p]:a[p+f+1]-a[p+1];return i.set(-g*s/r,1,-m*s/o).normalize()}function fT(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new rt;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function pT(){return new _i(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function mT(n,e,t){if(e==="stretch")return new M().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function gT(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),u=[],h=new M;if(!c||!e.density)return{requested:0,positions:u,area:c};let d=Math.cos(Ee.degToRad(s.maxSlope)),f=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,T)=>{if(p){let w=n.y+Bh(t,y,T);if(w<s.minHeight||w>s.maxHeight)return!1}return!f||dT(t,y,T,h).y>=d-1e-7},g=1;if(f||p){let y=0,T=32;for(let w=0;w<T;w++)for(let R=0;R<T;R++)x(ki(r,o,(R+.5)/T),ki(a,l,(w+.5)/T))&&y++;g=y/T**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),v=f||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<v&&u.length<_;y++){let T=ki(r,o,Yn(y,27,e.seed)),w=ki(a,l,Yn(y,27,e.seed+1));x(T,w)&&u.push([T,w])}return{requested:m,positions:u,area:c*g}}function Dx(n){let e=new qt,t=Ur(n);e.userData.distribution=[];let i=$w,s=Kw;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=gT(n,o,t,i),u=l?l.length:Math.min(a,i),h=o.collidable?Math.min(u,s):0;if(i-=u,s-=h,e.userData.distribution[r]={requested:a,count:u,area:c,collisions:h},!u)continue;let d=o.kind==="grass",f=o.model?mT(ra(o.model),o.fit,o.size):null,p=o.model?sa(o.model,f):d?fT():pT();f?p.scale(...f):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?na(o.model):new li({color:"#ffffff",side:d?cn:ri,flatShading:!0});if(d&&n.terrain.grassTexture){let v=new bi().load(n.terrain.grassTexture);v.colorSpace=St,x.map=v,x.userData.ownTexture=!0}let g=new hr(p,x,u);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:h,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(wr),g.receiveShadow=!0;let m=o.colors.map(v=>new He(v)),_=new He;for(let v=0;v<u;v++){let y=Yn(v,41,o.seed)*(m.length-1),T=Math.floor(y);g.setColorAt(v,_.copy(m[T]).lerp(m[T+1],y-T))}e.add(g)}return xT(e,n),e}function xT(n,e){let t=Ur(e),i=new Yt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let u=a?.[c][0]??(Yn(c,27,r)-.5)*.96*e.w,h=a?.[c][1]??(Yn(c,27,r+1)-.5)*.96*e.d;i.position.set(u,Bh(t,u,h),h),i.rotation.y=l?Ee.degToRad(l.yaw+Yn(c,27,r+2)*l.yawVariation):Yn(c,27,r+2)*Math.PI*2,i.scale.setScalar(ki(Math.max(.05,1-o),1+o,Yn(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Lx(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),ia(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Fx=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],xp=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Fl={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},_T=16e6,ca=512,Ki=1024,hi=2e4,qs=512,kh=1024,Ft=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Ux=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function vT(n){return!n||!Number.isFinite(n.seconds)||!(n.x>0||n.z>0)?null:{x:Ft(n.x,0,640,0),z:Ft(n.z,0,640,0),seconds:Ft(n.seconds,10,900,90),phase:Ft(n.phase,-360,360,0),rise:Ft(n.rise,0,100,0)}}function pn(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>_T)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>ca)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+ca+" pi\xE8ces.");let e=n.spawn??{},t=n.boundary,i=gh(n.environment),s=Tl(n.soundZones),r=Ah(n.soundAssets),o=Lh(n.traffic),a=Fh(n.entities),l=n.pieces.filter(c=>!Dr(c?.sceneryId)&&!ea(c?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Ux(n.name,56,"Ma map"),worldSize:Ft(n.worldSize,24,2048,240),...n.exercise==="boules"?{exercise:"boules"}:{},...i?{environment:i}:{},...o.length?{traffic:o}:{},...a.length?{entities:a}:{},...s.length?{soundZones:s}:{},...r.length?{soundAssets:r}:{},...t?.diameter>0?{boundary:{diameter:Ft(t.diameter,12,2048,650),ceiling:Ft(t.ceiling,3,256,128)}}:{},spawn:{x:Ft(e.x,-Ki,Ki,0),y:Ft(e.y,-hi,hi,.06),z:Ft(e.z,-Ki,Ki,3),yaw:Ft(e.yaw,-360,360,0)},pieces:l.map((c,u)=>{if(!c||typeof c!="object")throw Error("Pi\xE8ce invalide : "+(u+1));let h=c.terrain?kh:qs,d=Ft(c.w,.01,h,3),f=Ft(c.d,.01,h,3),p=c.solid===!1?vT(c.flight):null,x=wl(c.surfaceSound),g=c.terrain&&typeof c.terrain=="object"?xs(c.terrain,d*f):null,m=c.model?gs({version:1,models:[c.model]}).models[0]:null;if(m&&!m.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Ux(c.name,36,"Pi\xE8ce "+(u+1)),...typeof c.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(c.sceneryId)?{sceneryId:c.sceneryId}:{},x:Ft(c.x,-Ki,Ki,0),y:Ft(c.y,-hi,hi,0),z:Ft(c.z,-Ki,Ki,0),w:d,h:Ft(c.h,.01,256,.5),d:f,pitch:g?0:Ft(c.pitch,-180,180,0),yaw:g?la(Ft(c.yaw,-360,360,0)):Ft(c.yaw,-360,360,0),roll:g?0:Ft(c.roll,-180,180,0),...g?{terrain:g}:{},...p?{flight:p}:{},...x?{surfaceSound:x}:{},...m?{model:m}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(c.primitive)?c.primitive:"box",uvScale:Ft(c.uvScale,.05,100,1),uvOffsetX:Ft(c.uvOffsetX,-100,100,0),uvOffsetY:Ft(c.uvOffsetY,-100,100,0),uvRotation:Ft(c.uvRotation,-360,360,0),material:Math.round(Ft(c.material,0,16,0)),color:typeof c.color=="string"&&/^#[a-f0-9]{6}$/i.test(c.color)?c.color:"#ffffff",grip:Ft(c.grip,0,1.5,.8),gravity:Ft(c.gravity,.05,2.5,1),bounce:Ft(c.bounce,0,1.65,1),solid:c.solid!==!1,texture:typeof c.texture=="string"&&c.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(c.texture)?c.texture:null}})}}function Nx(n){return pn({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...S0,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new nn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function zx(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return pn({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,Fl.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Fl.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Fl.rubber)]})}function di(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Ox(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new nn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),u=l(n.y+s.y*a),h=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(u-n.y)*s.y-(h-n.z)*s.z;return c+=s.x*d,u+=s.y*d,h+=s.z*d,![c,u,h].every(Number.isFinite)||Math.abs(c)>Ki||Math.abs(h)>Ki||Math.abs(u)>hi?null:{...t,x:c,y:u,z:h}}var Bx="gorilla-lab-custom-map-v1";function kx(n){let e=new Blob([JSON.stringify(pn(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var MT=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function yp(){return di({name:"Miroir",sceneryId:"lab-mirror",x:Os.x,y:Os.y,z:Os.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function Vx(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&MT.has(e)):!1:!0}var Gx=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],_p=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Xx=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",ua=(n,e,t)=>Math.min(t,Math.max(e,n)),bT=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Vh=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function qx(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var Yx="gorilla-lab-texture-shelf-v1";function ST(){try{let n=JSON.parse(localStorage.getItem(Yx)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function Hx(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Xx(t),r.fillRect(0,0,o,o);let a=qx(s),l=o/Math.max(4,2*Math.round(4*i)),c=u=>{r.fillStyle=u>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(i),h={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<h;d++){let f=a()*o,p=a()*o,x=a(),g=a(),m=a();Vh(r,_=>{if(e==="rock"){let v=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let T=y*Math.PI/3+g,w=v*(.63+.3*Math.cos(T*2+g)+.25);_.lineTo(f+Math.cos(T)*w,p+Math.sin(T)*w*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let v=(1+x*x*12)*u,y=_.createRadialGradient(f,p,0,f,p,v);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(f-v,p-v,v*2,v*2)}else if(e==="grass"||e==="wood"){let v=e==="grass",y=(v?5+x*25:7+x*110)*u;_.strokeStyle=v?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*u,_.beginPath(),_.moveTo(f,p),v?_.quadraticCurveTo(f+y*(g-.5)*.55,p-y*.58,f+y*(g-.6),p-y):_.quadraticCurveTo(f+y*.5,p+10*(g-.5),f+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let v=(e==="sand"?.6+x*1.6:1+x*5)*u;_.fillRect(f,p,v,v*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let h=0;h<u;h++)for(let d=0;d<u;d++)Vh(r,f=>{f.beginPath(),f.arc(d*l+l/2,h*l+l/2,ua(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let h=0;h<o;h+=l/2)r.fillRect(h,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,h,o,Math.max(1,l/13));for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(h,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let h=0;h<=o;h+=l)r.beginPath(),r.moveTo(0,h),r.lineTo(o,h),r.stroke();for(let h=0;h<o;h+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(h/l)%2?l/2:0;e!=="brick"&&h>0||(r.beginPath(),r.moveTo(d+f,h),r.lineTo(d+f,h+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let h=l/2;h<o;h+=l)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke()}}}r.globalAlpha=1}var wT=`
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
`;function TT(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=wT,document.head.append(n)}async function Wx(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function vp({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){TT();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=U=>o.querySelector(U),l=a(".texture-canvas"),c=a(".texture-tile"),u=_p(),h=_p(),d={pattern:Gx.some(([U])=>U===i)?i:"grain",base:Xx(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=u.getContext("2d",{willReadFrequently:!0}),x=h.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,v=!1,y=null,T="paint",w=null,R=null;a("#studio-title").textContent=t+" / SURFACE LAB";let C=[],b=-1;a("[data-field=base]").value=d.base;for(let U of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+U+"]").addEventListener("input",$=>{let he=$.target.value;d[U]=U==="seed"?Math.trunc(ua(Number(he)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(U)?Number(he):he});let S=U=>{a("[data-status]").textContent=U},A=()=>{f.clearRect(0,0,512,512),f.drawImage(u,0,0),f.drawImage(h,0,0);let U=c.getContext("2d");U.clearRect(0,0,256,128);for(let $=0;$<2;$++)for(let he=0;he<4;he++)U.drawImage(l,he*64,$*64,64,64)},I=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:C,editingShape:b}),O=U=>{p.putImageData(U.base,0,0),x.putImageData(U.top,0,0),C=U.shapes,b=U.editingShape,B(),A()},z=()=>{R=null,g.push(I()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},V=(U,$)=>{U.length&&(R=null,$.push(I()),O(U.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},B=()=>{a("[data-shape-count]").textContent=C.length+" forme"+(C.length>1?"s":""),a("[data-cmd=add-shape]").textContent=b<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(b+1),a("[data-shape-list]").replaceChildren(...C.map((U,$)=>{let he=document.createElement("div");he.className="texture-setting-row";let D=document.createElement("canvas");D.width=48,D.height=32;let le=Math.min(48/U.width,32/U.height);D.getContext("2d").drawImage(U,0,0,U.width*le,U.height*le);let ie=document.createElement("button"),ee=document.createElement("button");return ie.textContent="Modifier "+($+1),ee.textContent="Supprimer "+($+1),ie.onclick=()=>{z(),b=$,x.clearRect(0,0,512,512),x.drawImage(U,(512-U.width)/2,(512-U.height)/2),B(),A()},ee.onclick=()=>{z(),C=C.filter((se,Me)=>Me!==$),b===$?(b=-1,x.clearRect(0,0,512,512)):b>$&&b--,B(),A()},he.append(D,ie,ee),he}))};a("[data-cmd=add-shape]").onclick=()=>{let U=x.getImageData(0,0,512,512).data,$=512,he=512,D=-1,le=-1;for(let ee=0;ee<512;ee++)for(let se=0;se<512;se++)U[4*(ee*512+se)+3]&&($=Math.min($,se),he=Math.min(he,ee),D=Math.max(D,se),le=Math.max(le,ee));if(D<0){S("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let ie=document.createElement("canvas");ie.width=D-$+1,ie.height=le-he+1,ie.getContext("2d").drawImage(h,$,he,ie.width,ie.height,0,0,ie.width,ie.height),z(),C=b<0?[...C,ie]:C.map((ee,se)=>se===b?ie:ee),b=-1,x.clearRect(0,0,512,512),B(),A(),S("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let K=()=>{let U=(se,Me,xe)=>ua(Number(a("[data-field="+se+"]").value)||0,Me,xe),$=Math.round(U("density",1,1e3)),he=U("minScale",1,200)/100,D=Math.max(he,U("maxScale",1,200)/100),le=U("rotation",0,360)*Math.PI/180,ie=a("[data-field=mirror]").checked,ee=qx(d.seed);z(),d.pattern="solid",Hx(u,d);for(let se=0;se<$&&C.length;se++){let Me=C[Math.floor(ee()*C.length)],xe=ee()*512,Ae=ee()*512,Je=ee()*le,Ze=512*(he+ee()*(D-he))/Math.max(Me.width,Me.height),L=ie&&ee()<.5?-1:1;Vh(p,E=>{E.translate(xe,Ae),E.rotate(Je),E.scale(L*Ze,Ze),E.drawImage(Me,-Me.width/2,-Me.height/2)})}A(),S(C.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},N=U=>{let $=l.getBoundingClientRect();return{x:(U.clientX-$.left)/$.width*512,y:(U.clientY-$.top)/$.height*512}},F=U=>{let $=d.size/2,he=d.opacity;Vh(x,D=>{D.save(),T==="erase"&&(D.globalCompositeOperation="destination-out"),D.globalAlpha=he;let le=ua(d.hardness,.05,1);if(T==="stamp")D.fillStyle=d.ink,D.translate(U.x,U.y),D.rotate(Math.PI/4),D.fillRect(-$*.8,-$*.8,$*1.6,$*1.6);else{let ie=D.createRadialGradient(U.x,U.y,$*le*.85,U.x,U.y,$);if(T==="erase")ie.addColorStop(0,"rgba(0,0,0,1)"),ie.addColorStop(1,"rgba(0,0,0,0)");else{let ee=d.ink.match(/[\da-f]{2}/gi).map(se=>parseInt(se,16)).join(",");ie.addColorStop(0,"rgba("+ee+",1)"),ie.addColorStop(1,"rgba("+ee+",0)")}D.fillStyle=ie,D.beginPath(),D.arc(U.x,U.y,$,0,2*Math.PI),D.fill()}D.restore()})},W=(U,$)=>{let he=Math.hypot($.x-U.x,$.y-U.y),D=Math.max(1,Math.ceil(he/Math.max(2,d.size*.18)));for(let le=1;le<=D;le++)F({x:U.x+($.x-U.x)*le/D,y:U.y+($.y-U.y)*le/D})},J=U=>{let $=f.getImageData(Math.floor(ua(U.x,0,511)),Math.floor(ua(U.y,0,511)),1,1).data;d.ink="#"+[...$].slice(0,3).map(he=>he.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,S("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",U=>{if(U.button!==0||v)return;let $=N(U);if(T==="pick"){J($);return}U.preventDefault(),z(),v=!0,y=U.pointerId,w=$,l.setPointerCapture(U.pointerId),F($),A()}),l.addEventListener("pointermove",U=>{if(!v||U.pointerId!==y)return;U.preventDefault();let $=N(U);T==="stamp"?F($):W(w,$),w=$,A()});let ue=U=>{U.pointerId===y&&(v=!1,y=null,w=null,l.hasPointerCapture(U.pointerId)&&l.releasePointerCapture(U.pointerId))};l.addEventListener("pointerup",ue),l.addEventListener("pointercancel",ue);for(let U of o.querySelectorAll("[data-tool]"))U.onclick=()=>{T=U.dataset.tool,o.querySelectorAll("[data-tool]").forEach($=>$.setAttribute("aria-pressed",String($===U)))};a("[data-cmd=generate]").onclick=K,a("[data-cmd=undo]").onclick=()=>V(g,m),a("[data-cmd=redo]").onclick=()=>V(m,g),a("[data-cmd=export]").onclick=()=>bT(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async U=>{let $=U.target.files?.[0];if(U.target.value="",!!$)try{if(!["image/png","image/jpeg","image/webp"].includes($.type))throw Error("Image PNG / JPG / WebP uniquement.");if($.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let he=await createImageBitmap($);z(),p.clearRect(0,0,512,512),p.drawImage(he,0,0,512,512),he.close(),x.clearRect(0,0,512,512),A(),S("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(he){S(he.message)}});let ye=U=>{!U&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",Te,!0),o.remove())},Te=U=>{if(U.key==="Escape"){U.preventDefault(),ye(!1);return}(U.ctrlKey||U.metaKey)&&!U.target.closest("input,select")&&U.key.toLowerCase()==="z"&&(U.preventDefault(),U.stopImmediatePropagation(),U.shiftKey?V(m,g):V(g,m))};window.addEventListener("keydown",Te,!0),a("[data-cmd=close]").onclick=()=>ye(!1),a("[data-cmd=cancel]").onclick=()=>ye(!1);let Ue=()=>{if(R?.recipe.resolution===d.resolution&&R.data.length<=s)return R.data;for(let U of[d.resolution,256,128].filter(($,he,D)=>$<=d.resolution&&D.indexOf($)===he)){let $=document.createElement("canvas");$.width=$.height=U,$.getContext("2d").drawImage(l,0,0,U,U);for(let he of[.85,.72,.58]){let D=$.toDataURL("image/webp",he);if(D.length<=s)return D}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},H=ST(),Q=a("[data-field=shelf]");function Se(U=""){Q.replaceChildren(new Option("Choisir une texture",""),...H.map(he=>new Option(he.name,he.id))),Q.value=U;let $=!!Q.value;a("[data-cmd=shelf-load]").disabled=!$,a("[data-cmd=shelf-remove]").disabled=!$}function Re(U,$){try{localStorage.setItem(Yx,JSON.stringify(U))}catch{return S("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return H.splice(0,H.length,...U),Se($),!0}return Q.onchange=()=>Se(Q.value),a("[data-cmd=shelf-save]").onclick=()=>{let U=Gx.find(([he])=>he===d.pattern)?.[1]??"Texture",$=prompt("Nom de la texture",U)?.trim().slice(0,50);if($)try{let he={id:crypto.randomUUID(),name:$,data:Ue()},{pattern:D,base:le,scale:ie,seed:ee,resolution:se}=d;he.recipe={pattern:D,base:le,scale:ie,seed:ee,resolution:se},Re([...H,he],he.id)&&S("Texture disponible dans les deux ateliers.")}catch(he){S(he.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let U=H.find($=>$.id===Q.value);if(!(!U||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let $=_p();await Wx(U.data,$),z(),p.clearRect(0,0,512,512),p.drawImage($,0,0),x.clearRect(0,0,512,512),Object.assign(d,U.recipe),R=U;for(let he of["base","seed","resolution"])a("[data-field="+he+"]").value=d[he];A(),S("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch($){S($.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{Re(H.filter(U=>U.id!==Q.value),"")&&S("Texture retir\xE9e de la biblioth\xE8que.")},Se(),a("[data-cmd=apply]").onclick=async()=>{let U=a("[data-cmd=apply]");U.disabled=!0;try{let $=Ue();await r($),_=!1,ye(!0)}catch($){S($.message||"Impossible d\u2019appliquer la texture.")}finally{U.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Hx(u,d),A(),n&&Wx(n,u).then(A).catch(()=>S("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>ye(!1)}}function ET(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function Zx(n){let e=[];for(let t of n){for(;e.length>1&&ET(e.at(-2),e.at(-1),t)<=0;)e.pop();e.push(t)}return e.pop(),e}function jx(n){let e=0;for(let t=0;t<n.length;t++){let[i,s]=n[t],[r,o]=n[(t+1)%n.length];e+=i*o-s*r}return Math.abs(e)*.5}function AT(n,e,t,i){let s=[];for(let r=0;r<n.length;r++){let o=n[r],a=n[(r+1)%n.length],l=(o[e]-t)*i>=0,c=(a[e]-t)*i>=0;if(l&&s.push(o),l!==c){let u=(t-o[e])/(a[e]-o[e]);s.push([o[0]+(a[0]-o[0])*u,o[1]+(a[1]-o[1])*u])}}return s}function Jx(n,{left:e,top:t,right:i,bottom:s}){if(n.length<3)return!1;let r=n.slice().sort((c,u)=>c[0]-u[0]||c[1]-u[1]),o=[...Zx(r),...Zx(r.reverse())],a=jx(o);if(a<=1e-6)return!1;let l=[[0,e,1],[0,i,-1],[1,t,1],[1,s,-1]].reduce((c,u)=>AT(c,...u),o);return jx(l)>a*.5}function Mp(n){let e=n.points.map(i=>new M(...i));if(n.smooth){let i=new Po(e,!0,"centripetal");return i.arcLengthDivisions=Math.min(1200,e.length*30),i}let t=new Do;return e.forEach((i,s)=>t.add(new Io(i,e[(s+1)%e.length]))),t}function $x(n){let e=[],t=new qt,i=new Yt,s=new M,r=new M;t.name="Circulation",n.add(t);function o(l=[]){for(let{mesh:c}of e.flatMap(u=>u.batches))c.dispose(),c.geometry.dispose(),ia(c.material);t.clear(),e=l.filter(c=>c.visible).map(c=>{let u=c.models.map(({model:f,w:p,h:x,d:g},m)=>{let _=new M(p,x,g),v=sa(f,_);v.scale(p,x,g);let y=Math.floor((c.count+c.models.length-1-m)/c.models.length);if(!y)return v.dispose(),null;let T=na(f);if(Array.isArray(T)&&c.brightness!==1)for(let R of T){let C=R.onBeforeCompile;R.onBeforeCompile=function(b,S){C.call(this,b,S),b.uniforms.uFoundryGlow&&(b.uniforms.uFoundryGlow.value.x*=c.brightness)}}let w=new hr(v,T,y);return w.frustumCulled=!1,w.instanceMatrix.setUsage(wr),t.add(w),{mesh:w,offset:m,h:x}}).filter(Boolean),h=Mp(c),d=h.getLength();return{route:c,path:h,length:d,batches:u}}),a(0)}function a(l){for(let{route:c,path:u,length:h,batches:d}of e){let f=c.interval+c.pause,p=Math.floor(l/f),x=l-p*f,g=Math.min(1,x/c.interval),m=.13,_=g<m?g*g/(2*m):g>1-m?1-m-(1-g)**2/(2*m):g-m/2,y=(c.pause?p*c.interval+_*c.interval/(1-m):l)*c.speed/h+c.phase/360,T=w=>w-Math.floor(w);for(let{mesh:w,offset:R,h:C}of d){for(let b=0;b<w.count;b++){let S=b*c.models.length+R,A=T(y-S*c.spread/c.count);u.getPointAt(A,s),u.getPointAt(T(A+Math.min(.003,.9/h)),r);let I=r.sub(s);i.position.copy(s),i.position.y+=C/2,i.rotation.set(Math.atan2(I.y,Math.hypot(I.x,I.z)),Math.atan2(-I.x,-I.z),0,"YXZ"),i.updateMatrix(),w.setMatrixAt(b,i.matrix)}w.instanceMatrix.needsUpdate=!0}}}return{set:o,update:a,get count(){return e.reduce((l,{route:c})=>l+c.count,0)}}}function Vi(n,e){let t=document.createElement(n);return e&&(t.textContent=e),t}function Nl(n,e){let t=Vi("label",n);return t.append(e),t}function Ys(n,e){let t=Vi("button",n);return t.type="button",t.onclick=e,t}function Kx({container:n,scene:e,getMap:t,getPiece:i,getCenter:s,remember:r,save:o,render:a}){let l=new qt;e.add(l);let c=new qt;e.add(c);let u=$x(c),h=new Sn({color:6681817}),d=0,f=!1,p=!1,x=Vi("p");x.setAttribute("role","status");let g=()=>t().traffic?.[d];function m(){for(let w of[...l.children])l.remove(w),w.geometry.dispose();let T=g();if(f&&T){let R=Mp(T).getSpacedPoints(Math.max(48,T.points.length*7));l.add(new wn(new rt().setFromPoints(R),h))}a()}function _(){p=!1,u.set(),a()}function v(T){let[w]=Lh([T]);if(!w)return x.textContent="Indique au moins trois points distincts et un mod\xE8le.",!1;let R=t();return r(),R.traffic??=[],R.traffic[d]=w,o(),_(),m(),x.textContent="",!0}function y(){if(!f)return;let T=t(),w=T.traffic??[];d=Math.min(d,Math.max(0,w.length-1));let R=g();n.replaceChildren(Vi("h3","Flux de circulation"));let C=Ys("Nouveau flux depuis la pi\xE8ce s\xE9lectionn\xE9e",()=>{let F=i();if(!F?.model){x.textContent="S\xE9lectionne un mod\xE8le dans la hi\xE9rarchie.";return}if(w.length>=sp){x.textContent="Limite de flux atteinte.";return}d=w.length;let{x:W,y:J,z:ue,w:ye,h:Te,d:Ue,model:H}=F;v({name:F.name,points:[[W,J-Te/2,ue],[W,J-Te/2,ue-20],[W+12,J-Te/2,ue-14],[W+12,J-Te/2,ue]],models:[{w:ye,h:Te,d:Ue,model:H}],count:4,speed:8}),y()});if(n.append(C,x),!R){m();return}let b=Vi("select");w.forEach((F,W)=>b.add(new Option(F.name,W))),b.value=d,b.onchange=()=>{d=Number(b.value),_(),y()};let S=Vi("input");S.value=R.name,S.maxLength=42,S.onchange=()=>{v({...g(),name:S.value}),y()};let A=Vi("textarea");A.rows=6,A.spellcheck=!1,A.value=R.points.map(F=>F.join(" ")).join(`
`);let I=()=>A.value.trim().split(/\n+/).filter(F=>F.trim()).map(F=>F.trim().split(/[\s,;]+/).map(Number)),O=()=>{let F=I();return F.length>op||F.some(W=>W.length!==3||!W.every(Number.isFinite))?(x.textContent="Entre un point X Y Z par ligne (en m\xE8tres).",!1):v({...g(),points:F})};A.onchange=O;let z=Ys("Ajouter le point vis\xE9",()=>{let[F,W,J]=s();A.value+=`
`+[F,W,J].map(ue=>Math.round(ue*100)/100).join(" "),O()&&y()}),V=Vi("div");V.className="fields";for(let[F,W,J,ue,ye]of[["count","V\xE9hicules",1,rp,1],["speed","Vitesse (m/s)",.5,160,.1],["brightness","\xC9mission lumineuse",.25,6,.05],["pause","Arr\xEAt (s)",0,25,.1],["interval","Entre les arr\xEAts (s)",3,180,.1],["phase","D\xE9calage du convoi (\xB0)",0,359,1],["spread","R\xE9partition sur le circuit",.25,1,.01]]){let Te=Vi("input");Object.assign(Te,{type:"number",min:J,max:ue,step:ye,value:R[F]}),Te.onchange=()=>{v({...g(),[F]:Te.valueAsNumber}),Te.value=g()[F]},V.append(Nl(W,Te))}for(let[F,W]of[["smooth","Courbe liss\xE9e"],["visible","Actif en jeu"]]){let J=Vi("input");J.type="checkbox",J.checked=R[F],J.onchange=()=>v({...g(),[F]:J.checked}),V.append(Nl(W,J))}let B=Vi("p",R.models.map(F=>F.model.name).join(" / "));function K(F){let W=i();if(!W?.model){x.textContent="S\xE9lectionne une pi\xE8ce qui contient un mod\xE8le.";return}let J=g().models.slice(),{model:ue,w:ye,h:Te,d:Ue}=W;F===null?J.splice(1):J[F]={model:ue,w:ye,h:Te,d:Ue},v({...g(),models:J}),y()}let N=Ys("Supprimer ce flux",()=>{r(),T.traffic=w.filter((F,W)=>W!==d),o(),_(),y()});n.append(Nl("Flux s\xE9lectionn\xE9",b),Nl("Nom",S),Nl("Points X Y Z \xB7 boucle ferm\xE9e",A),z,V,B,Ys("Utiliser la pi\xE8ce s\xE9lectionn\xE9e comme mod\xE8le 1",()=>K(0)),Ys("Utiliser la pi\xE8ce s\xE9lectionn\xE9e comme mod\xE8le 2",()=>K(1)),Ys("Retirer le mod\xE8le 2",()=>{g().models.length>1&&(v({...g(),models:[g().models[0]]}),y())}),Ys("Animer dans l\u2019atelier",()=>{p=!0,u.set([{...g(),visible:!0}]),a()}),Ys("Arr\xEAter l\u2019aper\xE7u",_),N),n.append(x),m()}return{refresh:y,setVisible(T){f!==T&&(f=T,T?y():(_(),m()))},update(T){return p?(u.update(T*.001),!0):!1}}}function ey({container:n,scene:e,getMap:t,getPoint:i,remember:s,save:r,render:o}){let a=new qt;a.visible=!1,e.add(a);let l=new cs(.3,.58,5),c=new Ot({color:"#f4af63",depthTest:!1}),u=new Ot({color:"#74dadb",depthTest:!1}),h=new Sn({color:"#74dadb",depthTest:!1}),d=0,f=!1,p=null,x=(F,W)=>{let J=document.createElement(F);return W&&(J.textContent=W),J},g=(F,W)=>{let J=x("button",F);return J.type="button",J.onclick=W,J},m=x("select"),_=x("div"),v=x("ol"),y=x("p"),T=x("p","Place la cr\xE9ature et ses points sur un sol. Elle patrouille, poursuit un joueur visible et le cherche derri\xE8re les obstacles."),w=x("div");w.className="piece-actions";let R=g("Ajouter une cr\xE9ature",()=>{let F=t();!F||I().length>=16||z(()=>{(F.entities??=[]).push({name:"Sentinelle",...i()}),d=F.entities.length-1})}),C=g("Supprimer",()=>z(()=>t().entities.splice(d,1)));function b(F){p=p===F?null:F,N(),o()}let S=g("Placer au clic",()=>b("spawn")),A=g("Tracer la patrouille",()=>b("route"));w.append(R,C,S,A),n.append(x("h3","Cr\xE9atures de la carte"),T,m,w,_,v,y);let I=()=>t()?.entities??[],O=()=>I()[d];function z(F){s(),F();let W=t();W.entities=Fh(W.entities),W.entities.length||delete W.entities,r(),N(),o()}let V={};function B(F,W,J,ue,ye,Te){let Ue=x("label",W+" "),H=x(J==="look"?"select":"input");if(J==="look")for(let Q of Uh)H.add(new Option(Q==="vigie"?"Vigie":"Sentinelle",Q));else H.type=J,J==="number"?Object.assign(H,{min:ue,max:ye,step:Te}):H.maxLength=36;H.onchange=()=>{let Q=J==="number"?H.valueAsNumber:H.value;if(J==="number"&&!Number.isFinite(Q)){N();return}z(()=>{O()[F]=Q})},Ue.append(H),_.append(Ue),V[F]=H}_.className="fields",B("name","Nom","text"),B("look","Mod\xE8le","look"),B("x","X","number",-1024,1024,.05),B("y","Sol Y","number",-2999,2999,.05),B("z","Z","number",-1024,1024,.05),B("yaw","Orientation (\xB0)","number",-360,360,1),B("speed","Vitesse (m/s)","number",.5,4,.05),B("sight","Vue (m)","number",2,20,.25),m.onchange=()=>{d=Number(m.value),p=null,N(),o()};function K(F){for(let J of[...a.children])a.remove(J),J.isLine&&J.geometry.dispose();if(!f||!F)return;let W=[F,...F.route];for(let[J,ue]of W.entries()){let ye=new pe(l,J?u:c);ye.position.set(ue.x,ue.y+.34,ue.z),ye.rotation.z=Math.PI,ye.renderOrder=20,a.add(ye)}if(F.route.length){let J=F.route.length>1?[...W,F.route[0]]:W,ue=new wn(new rt().setFromPoints(J.map(ye=>new M(ye.x,ye.y+.055,ye.z))),h);ue.renderOrder=20,a.add(ue)}}function N(){if(!f)return;let F=I();d=Math.min(d,Math.max(0,F.length-1)),m.replaceChildren(...F.length?F.map((J,ue)=>new Option(J.name,String(ue))):[new Option("Aucune cr\xE9ature","")]),m.value=F.length?String(d):"";let W=O();if(R.disabled=F.length>=16,C.disabled=S.disabled=!W,(!W||p==="route"&&W.route.length>=12)&&(p=null),A.disabled=!W||W.route.length>=12,S.setAttribute("aria-pressed",String(p==="spawn")),A.setAttribute("aria-pressed",String(p==="route")),_.hidden=!W,v.replaceChildren(),W){for(let[J,ue]of Object.entries(V))ue.value=W[J];for(let[J,ue]of W.route.entries()){let ye=x("li",ue.x.toFixed(2)+" / "+ue.y.toFixed(2)+" / "+ue.z.toFixed(2)+" ");ye.append(g("Replacer",()=>z(()=>Object.assign(ue,i()))),g("Retirer",()=>z(()=>W.route.splice(J,1)))),v.append(ye)}}y.textContent=p==="spawn"?"Clique au sol pour placer la cr\xE9ature.":p==="route"?"Clique au sol pour ajouter des points. Reclique sur Tracer la patrouille pour terminer.":W?W.route.length+" / "+12+" points":"",K(W)}return{refresh:N,get placing(){return f&&!!p&&!!O()},place(F){F&&(p==="spawn"?(p=null,z(()=>Object.assign(O(),F))):p==="route"&&z(()=>O().route.push(F)))},setVisible(F){f=F,F||(p=null),a.visible=F,N(),o()}}}var Fr=Math.PI*2,CT={regolith:[.21,.13,[82,152],.87,.73,7],asphalt:[.16,.12,[112,241],.74,.55,9],concrete:[.19,.37,[174,472],.52,.16,11],steel:[.58,.3,[314,626,1039,1597],.25,.08,4.6],grating:[.32,.66,[228,907,1480,1809],.43,.6,7],glass:[.47,.8,[458,1397,2226],.17,.09,5.5],ceramic:[.28,.41,[259,573,1018],.37,.19,7],rubber:[.16,.07,[56,99],.58,.48,10],gravel:[.36,.37,[125,314],.78,.98,6.2],panel:[.31,.25,[122,294,735],.46,.36,7.5]};function ty(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/2147483648-1)}function RT(n,e,t){let[i,s,r,o,a,l]=CT[e],c=22050,u=ty(3087+t*5323+e.length*123),h=Math.round(i*c*(1+u()*.13)),d=n.createBuffer(1,h,c),f=d.getChannelData(0),p=1+u()*.055,x=0,g=0;for(let m=0;m<h;m++){let _=m/c,v=m/h,y=u();x+=(y-x)*s,g+=(y-g)*.012;let T=1+Math.sin((v*21+t*.21)*Fr+g*64)*a*.64,w=0;for(let[C,b]of r.entries())w+=Math.sin(_*Fr*b*p)*Math.exp(-v*C*1.58)/(1+C*.62);let R=Math.min(1,m/48)*Math.exp(-v*l)*Math.min(1,(1-v)*7);f[m]=(o*x*T+(1-o)*w*.59+y*.085)*R*.89}return d}function PT(n,e,t){let s=e==="district"?13:17,r=n.createBuffer(2,s*22050,22050),o=e==="district";for(let a=0;a<2;a++){let l=r.getChannelData(a),c=ty(2064+t*1993+a*2113+(o?0:145)),u=0,h=0,d=t*.79+a*.57;for(let f=0;f<l.length;f++){let p=f/22050,x=c();u+=(x-u)*.012,h+=(x-h)*.081;let g=.68+.2*Math.sin(p*.84+d)+.11*Math.sin(p*2.43+d*1.31),m=Math.sin(p*(o?.88:1.42)+d)**6,_=Math.sin(p*Fr*(o?53:47)+Math.sin(p*.22+d)*.35)*.103+Math.sin(p*Fr*(o?106.5:71.7)+Math.sin(p*.17+d*1.43)*.38)*.057,v=Math.sin(p*Fr*(o?201:143)+Math.sin(p*1.4+d)*1.3)*m*.054,y=(p+(a?1.7:.3)+t*.89)%4.2-.1,T=Math.exp(-((y-2.05)**2)*2.1),w=Math.sin(Fr*(155*p+22*Math.sin(p*.47+d)))+.32*Math.sin(Fr*(331*p+16*Math.sin(p*.58))),R=u*.95+h*.19+T*(w*.11+h*.6);l[f]=(e==="traffic"?R:_*(o?.66:1)+u*1.3+h*(o?.27:.13)+v)*g*Math.min(1,f/180,(l.length-f)/180)}}return r}function ny(n,e){return Object.hasOwn(Ko,e)?Array.from({length:3},(t,i)=>RT(n,e,i)):Object.hasOwn(Qo,e)?Array.from({length:3},(t,i)=>PT(n,e,i)):null}var Gh=Object.freeze([]),Sp=(n,e)=>n+(Math.random()*2-1)*e,zl=(n,e,t)=>Math.min(t,Math.max(e,n));function iy(n){let e=new Map,t=new Map,i=new WeakMap,s=Gh,r=Gh,o=new Map,a=[],l,c,u=0,h={x:0,y:0,z:0,yaw:0},d=0,f=0;function p(A){return l||(l=A.createDynamicsCompressor(),l.threshold.value=-16,l.ratio.value=6,l.connect(A.destination)),l}function x(A=Gh){if(s===A)return;let I=new Map(A.map(O=>[O.id,O.data]));for(let[O,z]of o)I.get(O)!==z&&(e.delete(O),t.delete(O));o=I,s=A}function g(A=Gh){if(r===A)return;let I=n();for(let O of a){if(!O.gain)continue;let z=I.currentTime+.13;O.gain.gain.setTargetAtTime(0,I.currentTime,.035);for(let B of O.sources)B.stop(z);let V=()=>{O.sources.size||O.gain?.disconnect()};for(let B of O.sources)B.addEventListener("ended",V,{once:!0});V()}r=A,a=A.map(O=>({zone:O,gain:null,levels:null,loading:!1,ready:!1,entered:!1,oneShot:!1,next:0,active:0,weight:0,sources:new Set}))}function m(){g(),x()}async function _(A,I){if(e.has(I))return e.get(I);let O=o.get(I),z=O?(async()=>{let V=O.slice(O.indexOf(",")+1),B=Uint8Array.from(atob(V),N=>N.charCodeAt(0)),K=await A.decodeAudioData(B.buffer);return o.get(I)===O&&K.duration<=180?[K]:null})().catch(()=>null):ny(A,I);return e.set(I,z),z}function v(A,I){let O=t.get(A)??-1,z=Math.floor(Math.random()*I.length);return z===O&&I.length>1&&(z=(z+1)%I.length),t.set(A,z),I[z]}function y(A,I,O,z,V,B,K=0,N=1/0){let F=A.createBufferSource(),W=A.createGain();F.buffer=v(I.clip,O);let J=zl(Sp(I.rate,I.rateVariation),.25,3.2),ue=Sp(I.pitch,I.pitchVariation);F.playbackRate.value=J,F.detune.value=ue;let ye=Math.min(N,F.buffer.duration/(J*2**(ue/1200))),Te=Math.min(K,ye*.25),Ue=zl(Sp(1,I.volumeVariation)*V,0,1);return Te?(W.gain.setValueAtTime(0,z),W.gain.linearRampToValueAtTime(Ue,z+Te),W.gain.setValueAtTime(Ue,z+ye-Te),W.gain.linearRampToValueAtTime(0,z+ye)):W.gain.setValueAtTime(Ue,z),F.connect(W).connect(B),F.onended=()=>{F.disconnect(),W.disconnect()},F.start(z),F.stop(z+ye),{source:F,duration:ye,edge:Te}}function T(A,I,O=1){let z=n();if(z?.state!=="running"||!A||!I||A.volume<=0||O<=0)return!1;let V=I.x-h.x,B=I.y-h.y,K=I.z-h.z,N=Math.hypot(V,B,K);if(N>=A.range)return!1;let F=zl((V*Math.cos(h.yaw)-K*Math.sin(h.yaw))/Math.max(.1,Math.hypot(V,K)),-1,1),W=(1-N/A.range)**1.45/(1+N*.12),J=z.currentTime,ue=zl(A.volume*O*W,0,1),ye=()=>{if(z.state!=="running"||z.currentTime-J>.3)return null;let H=z.createStereoPanner?.();return H&&(H.pan.value=F,H.connect(p(z))),H??p(z)},Te=H=>{if(!H?.length)return;let Q=ye();if(!Q)return;let{source:Se}=y(z,A,H,z.currentTime,ue,Q);Q!==l&&Se.addEventListener("ended",()=>Q.disconnect(),{once:!0}),d++},Ue=e.get(A.clip);return Array.isArray(Ue)?Te(Ue):_(z,A.clip).then(Te),!0}function w(A,I,O,z){let V=n();if(V?.state!=="running"||z<I.minImpact)return!1;let B=V.currentTime;return B<(i.get(A)??-1/0)||!T(I,O,Math.min(1.3,.22+.23*Math.sqrt(z)))?!1:(i.set(A,B+I.cooldown),!0)}function R(A,I,O){let{zone:z}=I,V=y(A,z,I.levels,O,1,I.gain,z.mode==="loop"?.8:.035);I.sources.add(V.source),V.source.addEventListener("ended",()=>I.sources.delete(V.source),{once:!0}),I.next=O+V.duration-V.edge,f++}function C(A,I,O,z=1){Object.assign(h,{x:I.x,y:I.y,z:I.z,yaw:O});let V=n();if(V?.state==="running")for(let B of a){let{zone:K}=B,N=k0(K,I),F=N*K.volume*z,W=F>B.active?K.fadeIn:K.fadeOut,J=Math.max(0,A)/W;if(B.active+=zl(F-B.active,-J,J),N||(B.entered=!1),!F&&B.active<1e-4){if(B.gain){for(let ye of B.sources)ye.stop();B.sources.clear(),B.next=0,B.gain.disconnect(),B.gain=null}continue}if(!B.ready&&!B.loading&&(B.loading=!0,_(V,K.clip).then(ye=>{B.levels=ye,B.ready=!0})),!B.levels?.length)continue;let ue=V.currentTime;B.gain||(B.gain=V.createGain(),B.gain.gain.value=0,B.gain.connect(p(V))),B.gain.gain.setTargetAtTime(B.active,ue,.035),K.mode==="enter"?N>=.03&&!B.entered&&(B.entered=!0,R(V,B,ue)):B.active>0&&ue>=B.next&&R(V,B,ue)}}async function b(A){let I=n();if(I?.state!=="running"||!A)return!1;S();let O=u,z=await _(I,A.clip);return O!==u||!z?.length?!1:(c=y(I,A,z,I.currentTime,A.volume,p(I),.035,4).source,!0)}function S(){u++,c&&(c.stop(),c=null)}return{setAssets:x,setZones:g,clear:m,update:C,impact:w,playSurface:T,preview:b,stopPreview:S,get diagnostics(){return{surfacesPlayed:d,ambientStarted:f,activeZones:a.filter(A=>A.active>.01).length,gains:a.map(A=>A.active)}}}}var oy=[["volume","Volume",0,1,.01],["volumeVariation","Variation de volume",0,.8,.01],["rate","Vitesse",.4,2.5,.01],["rateVariation","Variation de vitesse",0,.7,.01],["pitch","Hauteur (cents)",-1200,1200,10],["pitchVariation","Variation de hauteur (cents)",0,800,10]],IT=[...oy,["cooldown","D\xE9lai entre impacts (s)",.03,2,.01],["minImpact","Impact minimal (m/s)",.1,12,.1],["range","Port\xE9e (m)",2,80,.1]],DT=[["x","Centre X (m)",null,null,.1],["y","Centre Y (m)",null,null,.1],["z","Centre Z (m)",null,null,.1],["w","Largeur X (m)",.1,null,.1],["h","Hauteur Y (m)",.1,null,.1],["d","Profondeur Z (m)",.1,null,.1],...oy,["fadeDistance","Fondu au bord (m)",.05,100,.05],["fadeIn","Fondu d\u2019entr\xE9e (s)",.02,12,.01],["fadeOut","Fondu de sortie (s)",.02,12,.01]],LT={...Qo,...Ko},an=(n,e)=>Object.assign(document.createElement(n),e?{textContent:e}:{});function Nr(n,e){let t=an("label");return e.setAttribute("aria-label",n),t.append(an("span",n),e),t}function Ol(n,e){return Object.assign(an("button",n),{type:"button",onclick:e})}function wp(...n){let e=an("div");return e.className="piece-actions",e.append(...n),e}function sy(n,e,t){let i=an("div");i.className="fields";for(let[s,r,o,a,l]of e){let c=Object.assign(an("input"),{type:"number",step:l,value:n[s]??""});o!==null&&(c.min=o),a!==null&&(c.max=a),c.onchange=()=>{Number.isFinite(c.valueAsNumber)?c.value=t(s,c.valueAsNumber)??n[s]:c.value=n[s]},i.append(Nr(r,c))}return i}function ry(n){return n instanceof Map?[...n]:Object.entries(n)}function ay({container:n,scene:e,getMap:t,getPiece:i,getCenter:s,remember:r,save:o,render:a}){let l=an("section"),c=an("section"),u=an("section"),h=an("p");h.setAttribute("role","status"),n.append(l,c,u,h);let d=new qt;d.name="audio-zone-preview",d.visible=!1,e.add(d);let f=new Ye,p=new Ya(f),x=[.09,.23].map(N=>new Ot({color:4247503,opacity:N,transparent:!0,depthWrite:!1})),g=[4247503,16047250].map(N=>new Sn({color:N,transparent:!0,opacity:.85})),m=0,_="",v=!1,y=null,T=0,w=iy(()=>y),R=N=>{h.textContent=N};function C(){T++,w.stopPreview(),R("")}function b(){if(d.clear(),v)for(let[N,F]of(t()?.soundZones??[]).entries()){let W=+(N===m),J=new pe(f,x[W]);J.add(new ls(p,g[W])),J.position.set(F.x,F.y,F.z),J.scale.set(F.w,F.h,F.d),d.add(J)}a()}async function S(N){if(!N?.clip)return;C();let F=T;try{let W=globalThis.AudioContext??globalThis.webkitAudioContext;if(y??=new W,await y.resume(),F!==T)return;w.setAssets(t().soundAssets??[]),!await w.preview(N)&&F===T&&R("Impossible de lire ce son.")}catch{F===T&&R("Impossible de lire ce son.")}}function A(N){return wp(Ol("\xC9couter",()=>S(N())),Ol("Arr\xEAter",C))}function I(N,F,W,J){let ue=an("select");J&&ue.add(new Option(J,""));let ye=(t().soundAssets??[]).map(Te=>[Te.id,Te.name]);for(let[Te,Ue]of[...ry(N),...ye])ue.add(new Option(Ue,Te));return ue.value=F??"",ue.onchange=()=>W(ue.value),Nr("Son",ue)}function O(){let N=i();if(l.replaceChildren(an("h3","Sons de surface")),!N){l.append(an("p","S\xE9lectionnez une pi\xE8ce pour lui attribuer un son d\u2019impact."));return}let F=(W,J)=>{let ue=wl({...N.surfaceSound,[W]:J});return r(),ue?N.surfaceSound=ue:delete N.surfaceSound,o(),ue?.[W]};l.append(an("p",N.name),I(Ko,N.surfaceSound?.clip,W=>{C(),F("clip",W),O(),V()},"Son de surface du jeu")),N.surfaceSound&&l.append(sy(N.surfaceSound,IT,F),A(()=>N.surfaceSound))}function z(){let N=t(),F=N.soundZones??[];m=Math.min(m,Math.max(0,F.length-1));let W=F[m];c.replaceChildren(an("h3","Zones d\u2019ambiance"));let J=Ol("Ajouter une zone",()=>{let[Q,Se,Re]=s(),U=Tl([...F,{name:`Zone ${F.length+1}`,x:Q,y:Se,z:Re,w:8,h:5,d:8,clip:ry(Qo)[0]?.[0],mode:"loop"}]);if(U.length===F.length){R("Limite de zones atteinte.");return}r(),N.soundZones=U,m=U.length-1,z(),b(),o()});if(!W){c.append(wp(J));return}let ue=Ol("Supprimer la zone",()=>{r(),N.soundZones=F.filter((Q,Se)=>Se!==m),C(),z(),b(),V(),o()}),ye=an("select");F.forEach((Q,Se)=>ye.add(new Option(Q.name,Se))),ye.value=m,ye.onchange=()=>{m=Number(ye.value),C(),z(),b()};function Te(Q,Se){let[Re]=Tl([{...W,[Q]:Se}]);return Re&&(r(),Object.assign(W,Re),b(),o()),W[Q]}let Ue=Object.assign(an("input"),{value:W.name,maxLength:42});Ue.onchange=()=>{Ue.value=Te("name",Ue.value),ye.options[m].text=W.name};let H=an("select");H.add(new Option("En boucle","loop")),H.add(new Option("\xC0 l\u2019entr\xE9e","enter")),H.value=W.mode,H.onchange=()=>{H.value=Te("mode",H.value)},c.append(wp(J,ue),Nr("Zone s\xE9lectionn\xE9e",ye),Nr("Nom",Ue),I(LT,W.clip,Q=>{C(),Te("clip",Q),V()}),Nr("D\xE9clenchement",H),sy(W,DT,Te),A(()=>W))}function V(){let N=t();u.replaceChildren(an("h3","Sons import\xE9s"));let F=N.soundAssets??[],W=Object.assign(an("input"),{type:"file",accept:"audio/*"});if(W.disabled=F.length>=Eh,W.onchange=()=>{let H=W.files[0];if(!H)return;if(!H.type.startsWith("audio/")||H.size>45e4){R("Choisissez un fichier audio de moins de 450 ko.");return}let Q=new FileReader;Q.onload=()=>{if(t()!==N)return;let Se=Q.result,Re=H.name.replace(/\.[^.]+$/,""),U={id:`audio-${crypto.randomUUID()}`,name:Re,data:Se},$=N.soundAssets??[],he=Ah([...$,U]);if(Se.length>Wf||!he.some(D=>D.id===U.id)){R(`Import impossible. V\xE9rifiez la taille, le format ou la limite de ${Eh} sons.`);return}r(),N.soundAssets=he,_=U.id,o(),B(),R("Son ajout\xE9 aux menus de s\xE9lection.")},Q.onerror=()=>R("Impossible de lire ce fichier."),Q.readAsDataURL(H)},u.append(Nr("Importer un fichier audio (450 ko maximum)",W)),!F.length)return;let J=an("select");for(let{id:H,name:Q}of F)J.add(new Option(Q,H));F.some(H=>H.id===_)&&(J.value=_);let ue=Ol("Supprimer le son",()=>{r(),N.soundAssets=F.filter(H=>H.id!==J.value),C(),o(),B()}),ye=an("p");function Te(){_=J.value;let H=N.pieces.filter(Re=>Re.surfaceSound?.clip===_).length,Q=(N.soundZones??[]).filter(Re=>Re.clip===_).length;ue.disabled=!!(H||Q);let Se=[H&&`${H} ${H===1?"pi\xE8ce":"pi\xE8ces"}`,Q&&`${Q} ${Q===1?"zone":"zones"}`];ye.textContent=ue.disabled?`Son utilis\xE9 par ${Se.filter(Boolean).join(" et ")}. Changez leur son avant de le supprimer.`:"",ye.hidden=!ue.disabled}J.onchange=Te,Te();let Ue=A(()=>wl({clip:J.value,volume:.8,volumeVariation:0,rateVariation:0,pitchVariation:0}));Ue.append(ue),u.append(Nr("Son import\xE9",J),Ue,ye)}function B(){!v||!t()||(O(),z(),V(),b())}function K(N){v!==N&&(v=N,d.visible=N,v?B():(C(),b()))}return{refresh:B,setVisible:K}}var zr=new _r,Bn=new M,Zs=new M,Kt=new Tt,ly={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},Tp={type:"change"},cy={type:"mouseDown",mode:null},uy={type:"mouseUp",mode:null},hy={type:"objectChange"},Yh=class extends Mr{constructor(e,t=null){super(void 0,t);let i=new Ap(this);this._root=i;let s=new Cp;this._gizmo=s,i.add(s);let r=new Rp;this._plane=r,i.add(r);let o=this;function a(v,y){let T=y;Object.defineProperty(o,v,{get:function(){return T!==void 0?T:y},set:function(w){T!==w&&(T=w,r[v]=w,s[v]=w,o.dispatchEvent({type:v+"-changed",value:w}),o.dispatchEvent(Tp))}}),o[v]=y,r[v]=y,s[v]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,u=new Tt,h=new Tt,d=new M,f=new Tt,p=new M,x=new M,g=new M,m=0,_=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new Tt,this._parentQuaternionInv=new Tt,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new Tt,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new Tt,this._scaleStart=new M,this._getPointer=UT.bind(this),this._onPointerDown=NT.bind(this),this._onPointerHover=FT.bind(this),this._onPointerMove=zT.bind(this),this._onPointerUp=OT.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&zr.setFromCamera(e,this.camera);let t=Ep(this._gizmo.picker[this.mode],zr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&zr.setFromCamera(e,this.camera);let t=Ep(this._plane,zr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,cy.mode=this.mode,this.dispatchEvent(cy)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&zr.setFromCamera(e,this.camera);let o=Ep(this._plane,zr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Kt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Bn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Bn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Zs.set(a,a,a)}else Bn.copy(this.pointStart),Zs.copy(this.pointEnd),Bn.applyQuaternion(this._worldQuaternionInv),Zs.applyQuaternion(this._worldQuaternionInv),Zs.divide(Bn),t.search("X")===-1&&(Zs.x=1),t.search("Y")===-1&&(Zs.y=1),t.search("Z")===-1&&(Zs.z=1);s.scale.copy(this._scaleStart).multiply(Zs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Bn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Bn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(ly[t]),Bn.copy(ly[t]),r==="local"&&Bn.applyQuaternion(this.worldQuaternion),Bn.cross(this.eye),Bn.length()===0?l=!0:this.rotationAngle=this._offset.dot(Bn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Tp),this.dispatchEvent(hy)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(uy.mode=this.mode,this.dispatchEvent(uy)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Tp),this.dispatchEvent(hy),this.pointStart.copy(this.pointEnd))}getRaycaster(){return zr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function UT(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function FT(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function NT(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function zT(n){this.enabled&&this.pointerMove(this._getPointer(n))}function OT(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Ep(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var Hh=new nn,Wt=new M(0,1,0),dy=new M(0,0,0),fy=new wt,Wh=new Tt,qh=new Tt,Qi=new M,py=new wt,Vl=new M(1,0,0),Or=new M(0,1,0),Gl=new M(0,0,1),Xh=new M,Bl=new M,kl=new M,Ap=class extends Yt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Cp=class extends Yt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Ot({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Sn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let h=e.clone();h.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};let x=new Bt(0,.04,.1,12);x.translate(0,.05,0);let g=new Ye(.08,.08,.08);g.translate(0,.04,0);let m=new rt;m.setAttribute("position",new Ne([0,0,0,1,0,0],3));let _=new Bt(.0075,.0075,.5,3);_.translate(0,.25,0);function v(V,B){let K=new Wn(V,.0075,3,64,B*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function y(){let V=new rt;return V.setAttribute("position",new Ne([0,0,0,1,1,1],3)),V}let T={X:[[new pe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(x,o),[0,.5,0]],[new pe(x,o),[0,-.5,0],[Math.PI,0,0]],[new pe(_,o)]],Z:[[new pe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new vi(.1,0),h),[0,0,0]]],XY:[[new pe(new Ye(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new Ye(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new pe(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Bt(.2,0,.6,4),i),[0,.3,0]],[new pe(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new vi(.2,0),i)]],XY:[[new pe(new Ye(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ye(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new pe(new vi(.01,2),s),null,null,null,"helper"]],END:[[new pe(new vi(.01,2),s),null,null,null,"helper"]],DELTA:[[new wn(y(),s),null,null,null,"helper"]],X:[[new wn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new pe(v(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new pe(v(.5,.5),r)]],Y:[[new pe(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pe(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pe(v(.75,1),d),null,[0,Math.PI/2,0]]]},b={AXIS:[[new wn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new pe(new Mi(.25,10,8),i)]],X:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new Wn(.75,.1,2,24),i)]]},A={X:[[new pe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]],[new pe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(g,o),[0,.5,0]],[new pe(_,o)],[new pe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(_,a),[0,0,0],[Math.PI/2,0,0]],[new pe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new Ye(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new Ye(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ye(.1,.1,.1),h)]]},I={X:[[new pe(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Bt(.2,0,.6,4),i),[0,.3,0]],[new pe(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new Ye(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ye(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ye(.2,.2,.2),i),[0,0,0]]]},O={X:[[new wn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(V){let B=new Yt;for(let K in V)for(let N=V[K].length;N--;){let F=V[K][N][0].clone(),W=V[K][N][1],J=V[K][N][2],ue=V[K][N][3],ye=V[K][N][4];F.name=K,F.tag=ye,W&&F.position.set(W[0],W[1],W[2]),J&&F.rotation.set(J[0],J[1],J[2]),ue&&F.scale.set(ue[0],ue[1],ue[2]),F.updateMatrix();let Te=F.geometry.clone();Te.applyMatrix4(F.matrix),F.geometry=Te,F.renderOrder=1/0,F.position.set(0,0,0),F.rotation.set(0,0,0),F.scale.set(1,1,1),B.add(F)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(T)),this.add(this.gizmo.rotate=z(C)),this.add(this.gizmo.scale=z(A)),this.add(this.picker.translate=z(w)),this.add(this.picker.rotate=z(S)),this.add(this.picker.scale=z(I)),this.add(this.helper.translate=z(R)),this.add(this.helper.rotate=z(b)),this.add(this.helper.scale=z(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:qh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Kt.setFromEuler(Hh.set(0,0,0)),o.quaternion.copy(i).multiply(Kt),Math.abs(Wt.copy(Vl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Kt.setFromEuler(Hh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Kt),Math.abs(Wt.copy(Or).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Kt.setFromEuler(Hh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Kt),Math.abs(Wt.copy(Gl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Kt.setFromEuler(Hh.set(0,Math.PI/2,0)),Wt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(fy.lookAt(dy,Wt,Or)),o.quaternion.multiply(Kt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Bn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Bn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Bn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Wt.copy(Vl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Wt.copy(Or).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Wt.copy(Gl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Wt.copy(Gl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Wt.copy(Vl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Wt.copy(Or).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Wh.copy(i),Wt.copy(this.eye).applyQuaternion(Kt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(fy.lookAt(this.eye,dy,Or)),o.name==="X"&&(Kt.setFromAxisAngle(Vl,Math.atan2(-Wt.y,Wt.z)),Kt.multiplyQuaternions(Wh,Kt),o.quaternion.copy(Kt)),o.name==="Y"&&(Kt.setFromAxisAngle(Or,Math.atan2(Wt.x,Wt.z)),Kt.multiplyQuaternions(Wh,Kt),o.quaternion.copy(Kt)),o.name==="Z"&&(Kt.setFromAxisAngle(Gl,Math.atan2(Wt.y,Wt.x)),Kt.multiplyQuaternions(Wh,Kt),o.quaternion.copy(Kt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Rp=class extends pe{constructor(){super(new An(1e5,1e5,2,2),new Ot({visible:!1,wireframe:!0,side:cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Xh.copy(Vl).applyQuaternion(t==="local"?this.worldQuaternion:qh),Bl.copy(Or).applyQuaternion(t==="local"?this.worldQuaternion:qh),kl.copy(Gl).applyQuaternion(t==="local"?this.worldQuaternion:qh),Wt.copy(Bl),this.mode){case"translate":case"scale":switch(this.axis){case"X":Wt.copy(this.eye).cross(Xh),Qi.copy(Xh).cross(Wt);break;case"Y":Wt.copy(this.eye).cross(Bl),Qi.copy(Bl).cross(Wt);break;case"Z":Wt.copy(this.eye).cross(kl),Qi.copy(kl).cross(Wt);break;case"XY":Qi.copy(kl);break;case"YZ":Qi.copy(Xh);break;case"XZ":Wt.copy(kl),Qi.copy(Bl);break;case"XYZ":case"E":Qi.set(0,0,0);break}break;case"rotate":default:Qi.set(0,0,0)}Qi.length()===0?this.quaternion.copy(this.cameraQuaternion):(py.lookAt(Bn.set(0,0,0),Qi,Wt),this.quaternion.setFromRotationMatrix(py)),super.updateMatrixWorld(e)}};function my(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function gy(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new M(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new nn(Ee.degToRad(n.pitch),Ee.degToRad(n.yaw),Ee.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var xy={type:"change"},Ip={type:"start"},_y={type:"end"},Zh=new Ps,yy=new Dn,BT=Math.cos(70*Ee.DEG2RAD),Mn=new M,Kn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pp=1e-6,jh=class extends Mr{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new Tt,this._lastTargetPosition=new M,this._quat=new Tt().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fo,this._sphericalDelta=new Fo,this._scale=1,this._panOffset=new M,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new M,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VT.bind(this),this._onPointerDown=kT.bind(this),this._onPointerUp=GT.bind(this),this._onContextMenu=jT.bind(this),this._onMouseWheel=XT.bind(this),this._onKeyDown=qT.bind(this),this._onTouchStart=YT.bind(this),this._onTouchMove=ZT.bind(this),this._onMouseDown=HT.bind(this),this._onMouseMove=WT.bind(this),this._interceptControlDown=JT.bind(this),this._interceptControlUp=$T.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xy),this.update(),this.state=Gt.NONE}update(e=null){let t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kn:i>Math.PI&&(i-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Mn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zh.origin.copy(this.object.position),Zh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zh.direction))<BT?this.object.lookAt(this.target):(yy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zh.intersectPlane(yy,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pp||this._lastTargetPosition.distanceToSquared(this.target)>Pp?(this.dispatchEvent(xy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Mn.copy(s).sub(this.target);let r=Mn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function kT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function VT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function GT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_y),this.state=Gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function HT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Gt.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Gt.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Ip)}function WT(n){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function XT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(n.preventDefault(),this.dispatchEvent(Ip),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_y))}function qT(n){this.enabled!==!1&&this._handleKeyDown(n)}function YT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Gt.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Gt.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Ip)}function ZT(n){switch(this._trackPointer(n),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Gt.NONE}}function jT(n){this.enabled!==!1&&n.preventDefault()}function JT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $T(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var k=n=>document.getElementById(n),Cy=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],Ry=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],ed=[...document.querySelectorAll(".tool")],Np=new URLSearchParams(location.search).get("exercise")==="entites",Py=Np?"gorilla-lab-entity-exercise-draft":"gorilla-lab-editor-draft",ys=ox(localStorage),KT=jf(),Zn=[...new Map([...KT,...ys.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function Iy(n){let e=n??k("model-library").value;k("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Zn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Zn.some(t=>t.id===e)?k("model-library").value=e:Zn.length===1&&(k("model-library").value=Zn[0].id),k("place-model").disabled=!Zn.length}var Dy=new URLSearchParams(location.search),zp=Dy.get("model"),Op="gorilla-lab-edit-map-model";Iy(zp);function kr(){return Zn.find(n=>n.id===k("model-library").value)}function Ly(){let n=kr();if(!n)return null;let e=ra(n);return di({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Ee.clamp(e.x,.2,64),h:Ee.clamp(e.y,.12,36),d:Ee.clamp(e.z,.2,64),...ip(n),color:"#ffffff",solid:n.properties.collidable!==!1})}k("model-library").addEventListener("change",()=>{tt==="model"&&vs(null),rm()});var Dp={block:di({w:1,h:1,d:1}),ramp:di({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:di({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:xs({amplitude:.7,grassDensity:1.7})}),wall:di({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Yp={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ne,_t=-1,tt="move",Rt=null,fi=null,Zp,sd,Zl,Wl=[],Js=null,Qh=[];function Hi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:tt,selected:_t,...e};Qh.push(i),Qh.length>100&&Qh.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=nt(),e=Wr.info.render;return{version:"R58",map:{name:ne.name,pieces:ne.pieces.length},tool:tt,selected:_t,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[rn.width,rn.height],render:{...e},events:[...Qh]}};window.addEventListener("error",n=>{n.message&&Hi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Hi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Ks=[],rn=k("preview"),ut=k("plan"),vt=ut.getContext("2d");function QT(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[k("shape-preset").value]??n.slab;return di({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(k("shape-preset").value)?k("shape-preset").value:"box"})}var eE=k("editor-views");function Ql(){eE.dataset.layout=k("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",k("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",k("sidebar-width").value+"px"),requestAnimationFrame(()=>{od(),ad()})}for(let n of["layout-mode","view-split","sidebar-width"])k(n).addEventListener("input",Ql);k("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Ql()};var Bp=k("workspace-fullscreen");Bp.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{mt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Bp.setAttribute("aria-pressed",String(n)),Bp.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{od(),ad()})});k("focus-3d").onclick=()=>{k("layout-mode").value="only-3d",Ql()};k("focus-plan").onclick=()=>{k("layout-mode").value="only-plan",Ql()};function tE(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(U,$,he)=>{let D=document.createElement(U);return $&&(D.className=$),he!==void 0&&(D.textContent=he),D},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let U of ed){let $=U.dataset.tool,he=U.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[$]){let D=t("div","rail-divider");D.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[$]],i.append(D)}U.classList.add("rail-tool"),U.title=he+" \xB7 "+(Yp[$]??""),U.setAttribute("aria-label",he),U.replaceChildren(t("span","rail-glyph",s[$]??"\u25A1"),t("span","rail-caption",he==="Redimensionner"?"\xC9chelle":he==="S\xE9lectionner"?"S\xE9lect.":he==="D\xE9placer"?"D\xE9placer":he==="Atelier"?"Mod\xE8le":he)),i.append(U)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=k("shape-preset").closest("label"),u=k("model-library").closest(".inspector-section"),h=l.querySelector('a[href*="model-editor"]');h&&(h.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,u);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),h&&o.append(h);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=k("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let v=t("span","active-selection","Aucune s\xE9lection");v.id="active-selection",_.after(v);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let T=t("div","precision-options"),w=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let U of w){let $=k(U);$&&T.append($.closest("label"))}y.append(T),g.append(y);let R=U=>{if(U==="close"){o.hidden=!0;return}let $=U==="model";o.hidden=!1,o.dataset.mode=U,a.textContent=$?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",u.hidden=!$,c.hidden=$,d.hidden=!$,f.hidden=!$,h&&(h.hidden=!$),p.textContent=$?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!$,x.textContent=$?Zn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let he=kr();d.disabled=!he,d.textContent=he?"\u2B21 Placer \xAB "+he.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!he||!ys.models.some(le=>le.id===he.id),h&&(h.href="./model-editor.html"+(he?he.assetId&&he.id==="custom-model-game-"+he.assetId?"?asset="+encodeURIComponent(he.assetId):"?model="+encodeURIComponent(he.id):"")),k($?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{kr()&&(Wi("model"),R("close"),rn.focus({preventScroll:!0}),mt("Clique dans la sc\xE8ne pour placer \xAB "+kr().name+" \xBB."))},f.onclick=()=>{let U=kr();if(!(!U||!ys.models.some($=>$.id===U.id))&&confirm("Supprimer d\xE9finitivement \xAB "+U.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let $=gs({...ys,models:ys.models.filter(D=>D.id!==U.id),avatarId:ys.avatarId===U.id?null:ys.avatarId});localStorage.setItem(np,JSON.stringify($)),Object.assign(ys,$);let he=Zn.findIndex(D=>D.id===U.id);he>=0&&Zn.splice(he,1),Iy(),tt==="model"&&!Zn.length&&Wi("move"),vs(null),rm(),R("model"),mt("\xAB "+U.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch($){mt("Suppression impossible : "+($.message||"stockage local indisponible"))}},k("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&R("model")});for(let U of["model","preset"])ed.find(he=>he.dataset.tool===U)?.addEventListener("click",()=>R(U));window.addEventListener("pointerdown",U=>{!o.hidden&&!o.contains(U.target)&&!U.target.closest(".rail-tool")&&R("close")}),window.addEventListener("keydown",U=>{U.key==="Escape"&&R("close")});let C=t("section","outliner");C.id="scene-outline";let b=t("header","side-section-head");b.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),b.append(t("span","outline-meta","Objets")),C.append(b);let S=e.querySelector("#pieces").closest(".inspector-section");S.id="outline-content",C.append(S);let A=t("section","property-pane"),I=t("nav","inspector-tabs");I.setAttribute("aria-label","Propri\xE9t\xE9s");let O=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["audio","Audio"],["traffic","Circulation"],["entities","Entit\xE9s"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[U,$]of O){let he=t("button","inspector-tab",$);he.type="button",he.dataset.tab=U,he.setAttribute("aria-pressed",String(U==="object")),I.append(he)}let z=t("div","property-content");z.id="property-content";let V=k("piece-inspector").closest(".inspector-section");V.id="object-section";let B=V.querySelector("#surface").closest("details");B.id="surface-controls";let K=t("section");K.id="collision-options",K.append(t("h3","","Collisions de la pi\xE8ce")),K.append(V.querySelector("#p-solid").closest("label"),k("debug-controls"));let N=t("section");N.id="behavior-options";let F=t("div","fields");for(let U of["surface","p-grip","p-gravity","p-bounce"])F.append(B.querySelector("#"+U).closest("label"));N.append(t("h3","","Propri\xE9t\xE9s physiques")),N.append(F,V.querySelector("#model-object-controls"));let W=t("section");W.id="publish-options";for(let[U,$,he]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let D=t("div","piece-actions"),le=t("button","",$);le.type="button",le.addEventListener("click",()=>k(U).click()),D.append(le),W.append(t("h3","",he),D)}let J=t("section");J.id="audio-options";let ue=t("section");ue.id="traffic-options";let ye=t("section");ye.id="entity-options",z.append(V,K,N,J,ue,ye,W);let Te=t("section","scene-options");Te.id="scene-options",Te.append(t("h2","","Param\xE8tres de carte"));let Ue=k("map-name").closest("label"),H=k("map-world-size").closest(".fields"),Q=k("draft-status");Te.append(Ue,H,Q);let Se=[...e.children].filter(U=>U.tagName==="DETAILS");for(let U of Se)Te.append(U);z.append(Te),A.append(I,z),e.replaceChildren(C,A);let Re=U=>{let $=ne?.pieces?.[_t];["terrain","props"].includes(U)&&!$?.terrain&&(U="object"),["material","behavior"].includes(U)&&!$&&(U="object"),e.dataset.tab=U;for(let he of I.querySelectorAll("button"))he.setAttribute("aria-pressed",String(he.dataset.tab===U)),he.disabled=["terrain","props"].includes(he.dataset.tab)&&!$?.terrain;U==="terrain"&&(k("terrain-controls").open=!0),U==="material"&&(B.open=!0),Zp?.setVisible(U==="audio"),sd?.setVisible(U==="traffic"),Zl?.setVisible(U==="entities"),z.scrollTop=0};for(let U of I.querySelectorAll("button"))U.addEventListener("click",()=>Re(U.dataset.tab));window.setInspectorTab=Re,Re("object")}tE();var kt={scale:10,cx:0,cz:-6,width:30,height:40},Wr=new uh({canvas:rn,antialias:!0});Wr.setPixelRatio(Math.min(devicePixelRatio,1.5));rn.addEventListener("webglcontextlost",()=>Hi("contexte WebGL perdu",{},"warn"));var Et=new In(52,1,.1,640);Et.position.set(16,15,19);var Lt=new jh(Et,rn);Lt.target.set(0,0,-5);Lt.mouseButtons.LEFT=null;Lt.mouseButtons.RIGHT=Si.ROTATE;Lt.mouseButtons.MIDDLE=Si.PAN;Lt.maxDistance=580;Lt.maxPolarAngle=Math.PI-.035;var $t=new So;Zp=ay({container:k("audio-options"),scene:$t,getMap:()=>ne,getPiece:nt,getCenter:()=>Lt.target.toArray(),remember:Mt,save:_s,render:Xt});sd=Kx({container:k("traffic-options"),scene:$t,getMap:()=>ne,getPiece:nt,getCenter:()=>Lt.target.toArray(),remember:Mt,save:_s,render:Xt});Zl=ey({container:k("entity-options"),scene:$t,getMap:()=>ne,getPoint:()=>{let n=nt(),e=Lt.target;if(!n)return{x:e.x,y:e.y,z:e.z};let{x:t,y:i,z:s,h:r,terrain:o}=n;return{x:t,y:o?i:i+r*.5,z:s}},remember:Mt,save:_s,render:Xt});var Uy=new He("#8fb6c6");$t.background=Uy;var Fy=new gr("#f0f5ff","#8e775c",2.6);$t.add(Fy);var jp=new yr("#fff1d2",1.8);jp.position.set(-9,18,6);$t.add(jp);var es=new So;es.fog=new ur("#a6d4ea",55,135);var kn=C0(es,Wr),nE=c0(Wr);kn.probe.userData.editorAssetId="chrome-sphere";var wP=R0(es,kn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),iE=new Map(jf().map(n=>[n.assetId,n]));function vy(n,e,t=null,i=null){let s=structuredClone(t??iE.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=Pl(s),o=r.getSize(new M),a=r.getCenter(new M);return di({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Jp=()=>{let n=Nx(kn.boxes),e=kn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(u,h)=>{let d=t+h%(o+1)/o*a,f=s+Math.floor(h/(o+1))/o*l;return e.height(d,f)});n.pieces.push(di({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:xs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(yp()),F0((t,i)=>{let s=Yf[t];s&&n.pieces.push(vy(s,i))}),n.pieces.push(vy("chrome-sphere",new M(Bs.x,Bs.y,Bs.z))),pn(n)};ne=Jp();var $p=new pe(new Ye(1.8,2.03,.1),new xn({color:"#8daebc",metalness:.9,roughness:.12}));$p.position.set(Os.x,Os.y,Os.z);$p.userData.editorAssetId="lab-mirror";es.add($p);var sE=kn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);sE.forEach(n=>n.mesh.removeFromParent());var td=new qt;td.add(...es.children);$t.add(td,...kn.lighting);var $s=kn.boxes.find(n=>n.heightfield).mesh;$s.userData.editorAssetId="lab-hill";kn.visual(7,0,7,!0,!0,512,!1);var Kp=[...document.querySelectorAll("[data-env]")],ha=k("environment-status"),ma=new cl(60,60,"#d7e2e5","#5e7b8a");ma.material.transparent=!0;ma.material.opacity=.35;$t.add(ma);var yt=new qt;$t.add(yt);var Qe=new Yh(Et,rn);Qe.setSize(.9);Qe.setRotationSnap(Ee.degToRad(5));Qe.enabled=!1;$t.add(Qe.getHelper());var Qp=new Set(["translate","rotate","scale"]),Qs=null,Qn=null,em=!1,Xl=null,Jh=!1,Ny=()=>Number(k("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...k(n).options].some(t=>t.value===e)&&(k(n).value=e)}catch{}k(n).onchange=()=>{Qn=null;try{localStorage.setItem("gorilla-lab-"+n,k(n).value)}catch{}}}var Vr=new Map;try{k("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}k("magnet").onchange=()=>{Qn=null,Vr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",k("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{em=e.altKey});window.addEventListener("blur",()=>{em=!1,Qn=null});function zy(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/$l())*$l();if(i||!k("magnet").checked||!n.solid||n.terrain)return Qn=null,s;let r=Ny(),o=k("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new nn(...[p.pitch,p.yaw,p.roll??0].map(Ee.degToRad),"YXZ"),g=new wt().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let u=[];for(let p of ne.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,v=m.flatMap(y=>t.includes(y)&&_(m.find(T=>T!==y))?[-1,1].flatMap(T=>[-1,1].map(w=>{let R=p[y]+T*x[y]-w*c[y];return{key:y,value:R,distance:Math.abs(e[y]-R)}})):[]).sort((y,T)=>y.distance-T.distance)[0];if(!(o?!v||v.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let T=p[g]+y*(c[g]+x[g]),w=ne.pieces.indexOf(p)+":"+g+":"+y;u.push({key:w,axis:g,value:T,edge:o?v:null,distance:Math.max(Math.abs(T-e[g]),o?v.distance:0)})}}}let h=u.find(p=>p.key===Qn),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(h&&h.distance<=r*1.8)return d(h),s;Qn&&(Vr.set(Qn,(Vr.get(Qn)??0)+1),Qn=null);let f=u.filter(p=>p.distance<=r&&(Vr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Qn=f.key;else for(let p of u)p.distance<=r&&(Vr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var ql=new Ye(1,1,1),rE=Vf(),oE=new bi,nd=.025,aE=new Ds(.24,.36,40).rotateX(-Math.PI/2),Oy=new Ot({color:"#ffcd63",side:cn}),ei=new pe(aE,Oy),By=new pe(new An(.12,.2).rotateX(-Math.PI/2),Oy);By.position.set(0,0,-.39);ei.add(By);$t.add(ei);var Gr=new pe(ql,new Ot({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),da=new pe(new Mi(.055,10,8),new Ot({color:"#ffc85a",depthTest:!1}));da.visible=!1;da.renderOrder=20;$t.add(da);var Yl=new pe(ei.geometry,new Ot({color:"#ffe084",side:cn,opacity:.65,transparent:!0,depthWrite:!1}));Gr.visible=Yl.visible=!1;$t.add(Gr,Yl);var er=new _r,rd=new M(0,1,0),My=new Dn(rd,0),lE=new ht,mn=new Set,kp=[],js=null,Gi=null,Lp=!1,Hl=60,by=-1/0;function Xt(){Lp||(Lp=!0,requestAnimationFrame(n=>{Lp=!1;let e=sd.update(n),t=n-by;by=n,t<125&&(Hl=Ee.lerp(Hl,1e3/Math.max(10,t),.17));let i=Et.position.distanceTo(Lt.target),s=Math.max(640,ne.worldSize*2,i+ne.worldSize*2),r=Math.max(140,i+ne.worldSize*.35),o=k("adaptive-editor-view").checked?Ee.smoothstep(Hl,24,50):1,a=Ee.lerp(r,s,o);Et.far=Math.max(r,Ee.lerp(Et.far,a,.2)),Et.updateProjectionMatrix(),kn.centerSky(Et.position,Et.far);let l=performance.now();nE.render($t,Et,k("environment-bloom-preview").checked&&kn.sunDisk.visible?kn.bloomProfile:null)||Wr.render($t,Et);let c=performance.now()-l;c>25&&(Hl=Math.min(Hl,1e3/c)),(e||Math.abs(Et.far-a)>3)&&Xt(),Ky()}))}function od(){let n=rn.clientWidth||1,e=rn.clientHeight||1;Wr.setSize(n,e,!1),Et.aspect=n/e,Et.updateProjectionMatrix(),Xt()}function ad(){let n=Math.max(1,ut.clientWidth),e=Math.max(1,ut.clientHeight);n===ut.width&&e===ut.height||(ut.width=n,ut.height=e,tm(),pi())}new ResizeObserver(od).observe(rn);new ResizeObserver(ad).observe(ut);Lt.addEventListener("change",Xt);Lt.addEventListener("start",()=>vs(null));function tm(){kt.scale=Math.min(ut.width/kt.width,ut.height/kt.height)}function jl(n,e){return[ut.width/2+(n-kt.cx)*kt.scale,ut.height/2+(e-kt.cz)*kt.scale]}function Vp(n){let e=ut.getBoundingClientRect();return{x:((n.clientX-e.left)*ut.width/e.width-ut.width/2)/kt.scale+kt.cx,z:((n.clientY-e.top)*ut.height/e.height-ut.height/2)/kt.scale+kt.cz}}function Sy(n,e,t,i,s){let[r,o]=jl(n.x,n.z),a=Ee.degToRad(n.pitch),l=Ee.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,u=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);vt.save(),vt.translate(r,o),vt.rotate(-Ee.degToRad(n.yaw));let h=c*kt.scale,d=u*kt.scale;vt.globalAlpha=s,vt.fillStyle=e,vt.fillRect(-h/2,-d/2,h,d),vt.globalAlpha=1,vt.strokeStyle=t,vt.lineWidth=i,vt.strokeRect(-h/2,-d/2,h,d),vt.restore()}function wy(n,e){let[t,i]=jl(n.x,n.z);vt.save(),vt.translate(t,i),vt.rotate(Ee.degToRad(-n.yaw)),vt.strokeStyle=e?"#fff0bb":"#ffd16e",vt.lineWidth=2,vt.beginPath(),vt.arc(0,0,6,0,Math.PI*2),vt.moveTo(0,-6),vt.lineTo(0,-11),vt.stroke(),vt.restore()}function pi(){vt.fillStyle="#192e3a",vt.fillRect(0,0,ut.width,ut.height),vt.strokeStyle="#37505f",vt.lineWidth=1;let n=kt.scale<1?25:kt.scale<4?10:kt.scale<12?5:1,e=(ne.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=jl(r,r);o>=0&&o<=ut.width&&(vt.beginPath(),vt.moveTo(o,0),vt.lineTo(o,ut.height),vt.stroke()),a>=0&&a<=ut.height&&(vt.beginPath(),vt.moveTo(0,a),vt.lineTo(ut.width,a),vt.stroke())}let[t,i]=jl(-e,-e);vt.strokeStyle="#ffda9077",vt.lineWidth=2,vt.strokeRect(t,i,e*2*kt.scale,e*2*kt.scale);let s=ne.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?xp[r.material]:r.color);Sy(r,a,o===_t||mn.has(o)?"#ffe095":"#a4bac7",o===_t||mn.has(o)?2:1,r.solid?.86:.38)}wy(ne.spawn,!1),fi&&(tt==="spawn"?wy(fi,!0):Sy(fi,"#8ee7fc","#afefff",2,.45))}function Jl(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==Gr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Ee.degToRad(e.pitch),Ee.degToRad(e.yaw),Ee.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function ld(){for(let e of kp.splice(0))$t.remove(e),e.geometry.dispose(),e.material.dispose();for(let e of mn){if(e===_t||!yt.children[e])continue;let t=new vr(yt.children[e],"#ffdf88");kp.push(t),$t.add(t)}Gi&&($t.remove(Gi),Gi.geometry.dispose(),Gi.material.dispose());let n=yt.children[_t];Gi=n?new vr(n,"#ffdf88"):null,Gi&&$t.add(Gi),Gp()}function Gp(){if(tt==="spawn"){Qe.enabled=!0,Qe.setMode("translate"),Qe.setSpace("world"),Qe.setTranslationSnap(null),Qe.setRotationSnap(null),Qe.showX=Qe.showY=Qe.showZ=!0,Qe.attach(ei);return}let n=yt.children[_t],e=nt()?.terrain,t=Qp.has(tt)&&!!n;if(Qe.enabled=t,!t){Qe.detach();return}Qe.setMode(tt),Qe.setSpace(tt==="translate"?"world":"local"),Qe.setTranslationSnap(null);let i=!!(e&&tt==="rotate");Qe.setRotationSnap(i?Math.PI/2:null),Qe.showX=Qe.showZ=!i,Qe.showY=!(e&&tt==="scale"),Qe.attach(n),k("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":Yp[tt]}var fa=!1;function ky(){if(tt!=="scale")return;let n=nt(),e=Qs?.map.pieces[_t],t=Qe.object;if(!n||!e||!t)return;let i=gy(e,n,fa,Qs?.scaleSides),s=(ne.worldSize??240)/2;n.x=Ee.clamp(i.x,-s,s),n.y=Ee.clamp(i.y,-hi,hi),n.z=Ee.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),Gi?.update();for(let r of["x","y","z"])k("p-"+r).value=n[r].toFixed(2);pi(),Xt()}function Vy(n){let e=fa;fa=n.ctrlKey,e!==fa&&Qe.dragging&&ky()}for(let n of["keydown","keyup"])window.addEventListener(n,Vy);rn.addEventListener("pointermove",Vy,{capture:!0});Qe.addEventListener("change",Xt);Qe.addEventListener("mouseDown",()=>{let n=nt();if(Qn=null,n||Qe.object===ei){let e=tt==="scale"?my(Qe.axis,Qe.pointStart,Qe.worldQuaternionStart):void 0;Qs={map:structuredClone(ne),selected:_t,scaleSides:e},Hi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Qe.axis,scaleSides:e,terrain:!!n?.terrain})}fa=!!(fa||window.event?.ctrlKey)});Qe.addEventListener("objectChange",()=>{let n=nt(),e=Qe.object,t=Qs?.map.pieces[_t];if(e===ei&&Qs){let s=(ne.worldSize??240)/2,r=Ee.clamp;ne.spawn.x=r(ei.position.x,-s,s),ne.spawn.y=r(ei.position.y-nd,-hi,hi),ne.spawn.z=r(ei.position.z,-s,s),ei.position.set(ne.spawn.x,ne.spawn.y+nd,ne.spawn.z);for(let o of["x","y","z"])k("spawn-"+o).value=ne.spawn[o].toFixed(2);pi();return}if(!n||!e||!t)return;let i=Ee.clamp;if(tt==="translate"){let s=["x","y","z"].filter(a=>(Qe.axis??"XYZ").includes(a.toUpperCase())),r=zy(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,em),o=(ne.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-hi,hi),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else tt==="rotate"?(n.pitch=Ee.radToDeg(e.rotation.x),n.yaw=Ee.radToDeg(e.rotation.y),n.roll=Ee.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=la(n.yaw),e.rotation.set(0,Ee.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,n.terrain?kh:qs),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,n.terrain?kh:qs),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),ky());e.updateMatrixWorld(!0),Gi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])k("p-"+s).value=Number(n[s]??0).toFixed(2);pi(),Xt()});Qe.addEventListener("dragging-changed",({value:n})=>{if(Lt.enabled=!n,n||!Qs)return;let e=Qs;Qs=null;let t=Qe.object===ei,i=t?e.map.spawn:e.map.pieces[_t],s=t?ne.spawn:nt();if(JSON.stringify(i)===JSON.stringify(s)){Hi("transformation sans changement",{name:s?.name,axis:Qe.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Hi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Ks.length>=35&&Ks.shift(),Ks.push(e),ne=pn(ne),Pt(),mt("Transformation appliqu\xE9e.")});rn.addEventListener("pointerup",()=>{Qe.dragging||(Lt.enabled=!0)});rn.addEventListener("pointercancel",()=>{Qe.dragging&&Qe.pointerUp(null),Lt.enabled=!0});function cE(){Qe.detach();for(let t of[...yt.children])yt.remove(t),t.geometry!==ql&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&Lx(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),ia(t.material);td.visible=!!ne.arenaBase;let n=new Set(ne.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(ne.pieces.map(t=>t.sceneryId).filter(Boolean));td.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=Vx(ne,i,n,e))}),Hy();for(let t of ne.pieces){if(t.model){let l=new pe(sa(t.model,new M(t.w,t.h,t.d)),na(t.model));l.castShadow=l.receiveShadow=!0;let c=new pe(new Ye(1,1,1),new Ot({colorWrite:!1,depthWrite:!1,side:cn}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=yt.children.length,yt.add(l),Jl(l,t);continue}let i=[10,11,12].includes(t.material),s=new li({color:new He(xp[t.material]).multiply(new He(t.color)),side:t.terrain?cn:ri,transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(ne.arenaBase&&!t.texture){let l=kn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=oE.load(t.texture,Xt),s.map.colorSpace=St,s.map.wrapS=s.map.wrapT=Ln,s.color.set(t.color)),t.terrain&&(t.terrain.projection==="regolith"&&(s.flatShading=!1),Px(s,t));let r=t.terrain?performance.now():0,o=t.terrain?Ix(t):t.primitive==="ramp"?Vf(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?x0(t.primitive):t.texture||ne.arenaBase?xh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):ql;o!==ql&&g0(o,t);let a=new pe(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=Dx(t);l&&(a.add(l),a.userData.vegetation=l)}yt.add(a),Jl(a,t)}SE(),ei.position.set(ne.spawn.x,ne.spawn.y+nd,ne.spawn.z),ei.rotation.y=Ee.degToRad(ne.spawn.yaw),Qy(),ld()}function nt(){return ne.pieces[_t]}function mt(n){k("editor-note").textContent=n}function Mt(){Ks.length>=35&&Ks.shift(),Ks.push({map:structuredClone(ne),selected:_t}),k("undo").disabled=!1}var Up=0;async function _s(){let n=++Up;try{return await Of(Py,JSON.stringify(ne)),n===Up&&(k("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===Up&&(k("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}k("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=nt(),i=_t;if(!(!t?.model||!await _s()))try{sessionStorage.setItem(Op,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),mt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function uE(){let n=Dy.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Op)),sessionStorage.removeItem(Op)}catch{return}let t=ne.pieces[e?.index],i=ys.models.find(h=>h.id===n&&h.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){mt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}_t=e.index;let o=ra(t.model),a=ra(i),l=(h,d,f,p)=>Ee.clamp(h*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,qs),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,qs)},u=di({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(u)!==JSON.stringify(t)&&(Mt(),ne.pieces[_t]=u),mt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var Ty=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Gy(){let n=Ty(k("piece-search").value.trim()),e=[];ne.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";Ty(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===_t))}),k("pieces").replaceChildren(...e),k("pieces").value=String(_t),e.length||k("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(k("pieces").options[0].disabled=!0),k("count").textContent=n?e.length+" sur "+ne.pieces.length:ne.pieces.length+" / "+ca}function cd(){Gy();let n=nt();k("piece-inspector").hidden=!n,k("selection-help").hidden=!!n,k("focus-piece").disabled=!n,k("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";k("model-object-controls").hidden=!e,k("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=k("model-asset-edit-link"),i=n?.model&&Zn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,u=new URLSearchParams(c?{asset:l}:{model:n.model.id});u.set("from","cards"),t.href="./model-editor.html?"+u}e&&(k("model-grabbable").checked=n.model.properties?.grabbable!==!1,k("model-frozen").checked=n.model.properties?.frozen===!0,k("model-collidable").checked=n.model.properties?.collidable!==!1,k("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of Cy){let c=k("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])k(l).disabled=!n;k("delete").disabled=!n,k("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",k("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",k("texture-clear").disabled=!n?.texture,k("texture-paint").disabled=!n||!!n.model,k("flight-controls").hidden=!n||n.solid||!!n.terrain||n.model?.kind==="prop";for(let[l,c]of Object.entries(Xp))k("flight-"+l).value=n?.flight?.[l]??c;let s=Wl[_t],r=k("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=qp(s));let o=n?.terrain;k("terrain-grassTexture-paint").disabled=!o;for(let l of Ry){let c=k("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(k("uv-reset").disabled=!n||!!n?.model,k("terrain-controls").hidden=k("terrain-props").hidden=k("terrain-texture-density-fields").hidden=!o,k("texture-scale-label").hidden=!!o,o){k("terrain-triangulation").value=o.triangulation??"regular",k("terrain-projection").value=o.projection??"flat";for(let m of Zy)k("terrain-"+m).value=o[m]??0;let l=o.reliefArea??jy(n);k("terrain-relief-local").checked=!!o.reliefArea,k("terrain-relief-fields").hidden=!o.reliefArea;for(let m of["x","z","radius","blend"])k("terrain-relief-"+m).value=l[m];let c=yt.children[_t]?.userData.generationMs;k("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let u=n.w*n.d,h=2*o.detail**2,d=yt.children[_t]?.geometry.index.count/3||h,f=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});k("terrain-cell-size").textContent=f.format(n.w/o.detail)+" \xD7 "+f.format(n.d/o.detail)+" m de pas moyen \xB7 "+f.format(d)+" triangles au total \xB7 "+f.format(h/u)+" triangles/m\xB2 au sol",k("terrain-texture-effective").textContent=f.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2 \xE0 l\u2019\xE9cran avec l\u2019\xE9chelle enregistr\xE9e",ME(n);let p=k("terrain-neighbor"),x=p.value,g=ne.pieces.flatMap((m,_)=>mp(n,m)?[new Option(m.name,String(_))]:[]);p.replaceChildren(...g.length?g:[new Option("Aucun bord \xE0 moins de 25 cm","")]),g.some(m=>m.value===x)&&(p.value=x),p.disabled=k("terrain-stitch").disabled=!g.length,k("p-pitch").disabled=k("p-roll").disabled=!0}k("rotate").disabled=!n,k("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",k("p-yaw").step=o?"90":"1",k("surface").value="",k("undo").disabled=Ks.length===0,k("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o;Zp.refresh(),sd.refresh(),Zl.refresh()}function Hp(){let n=!!(ne.arenaBase||ne.environment);jp.visible=Fy.visible=!n;for(let t of kn.lighting)t.visible=n;let{sunDisk:e}=kn;e.visible=n&&(ne.environment?.sunPower??3)>0,$t.background=n?es.background:Uy,$t.backgroundRotation.copy(es.backgroundRotation),$t.fog=n&&k("environment-fog-preview").checked?es.fog:null,$t.environment=n?es.environment:null,$t.environmentIntensity=es.environmentIntensity,Xt()}function Hy(){let n=ne.environment??null,e=n??Ni(0);for(let t of Kp){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}ha.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",kn.setEnvironment(n,Hp),Hp()}function id(n){let e=gh(n);Mt(),e?ne.environment=e:delete ne.environment,Hy(),_s()}var hE=Kp.find(n=>n.dataset.env==="preset");hE.replaceChildren(...u0.map((n,e)=>new Option(n,e)));for(let n of Kp)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){id(Ni(Number(n.value)));return}let t=ne.environment??Ni(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,ha.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;id({...t,[e]:i})};k("environment-reset").onclick=()=>id(null);k("environment-aim-sun").onclick=()=>{if(!(ne.environment??Ni(0)).sunPower){ha.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=kn.sunDirection();Lt.target.copy(Et.position).addScaledVector(e,8),Lt.update(),Xt()};k("environment-fog-preview").onchange=Hp;k("environment-bloom-preview").onchange=Xt;k("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=ne;if(e.value="",!t)return;if(t.size>mh){ha.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(ne!==i)return;let r=new Image;r.onload=()=>{if(ne===i){if(r.width!==r.height*2){ha.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}id({...ne.environment??Ni(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{ne===i&&(ha.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function Pt(){k("map-name").value=ne.name,k("map-world-size").value=ne.worldSize??240,k("map-boundary").value=ne.boundary?.diameter??0,k("map-ceiling").value=ne.boundary?.ceiling??128,Et.far=Math.max(640,ne.worldSize*2),Et.updateProjectionMatrix(),Lt.maxDistance=Math.max(580,ne.worldSize*1.6);for(let n of["x","y","z","yaw"])k("spawn-"+n).value=ne.spawn[n];cE(),cd(),pi(),Xt(),_s()}function ga(n){_t===n&&!mn.size||(mn.clear(),_t=n,Hi("s\xE9lection",{name:nt()?.name,terrain:!!nt()?.terrain}),Qn=null,Vr.clear(),cd(),ld(),pi(),Xt())}function nm(n){if(ne.pieces.length>=ca)return mt("Limite de pi\xE8ces atteinte.");Mt(),ne.pieces.push(n),mn.clear(),_t=ne.pieces.length-1,Pt(),mt(n.name+" ajout\xE9 \xE0 la map.")}function im(){if(!nt())return;let n=mn.size||1,e=nt().name;Mt(),mn.size?ne.pieces=ne.pieces.filter((t,i)=>!mn.has(i)):ne.pieces.splice(_t,1),mn.clear(),_t=Math.min(_t,ne.pieces.length-1),Pt(),mt(n>1?n+" pi\xE8ces retir\xE9es.":e+" retir\xE9 de la map.")}function sm(){let n=nt();if(!n)return;let e=Ee.clamp(n.x+n.w+$l(),-120,120);nm({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function dE(){let n=nt();if(!n)return;Mt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Hi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),Pt()}function Wy(){let n=Ks.pop();n&&(ne=n.map,mn.clear(),_t=n.selected,vs(null),Pt(),mt("Derni\xE8re modification annul\xE9e."))}function rm(){let n=Yp[tt]??"";if(tt!=="model"||!kr()){k("tool-help").textContent=n;return}let e=Ly(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);k("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Wi(n){tt!==n&&Hi("changement d\u2019outil",{ancien:tt,nouveau:n,name:nt()?.name}),tt=n,Lt.mouseButtons.LEFT=tt==="view"?Si.ROTATE:null,Gp(),Xt();for(let e of ed)e.setAttribute("aria-pressed",String(e.dataset.tool===tt));for(let e of[rn,ut])e.dataset.tool=tt,e.removeAttribute("data-hit");rm(),Gp(),Xt(),vs(null)}function Xr(){let n=new fn().setFromObject(yt);n.expandByPoint(ei.position);let e=n.getCenter(new M),t=n.getSize(new M);kt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ne.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ne.worldSize??240,500))},tm();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));ma.scale.setScalar(i),ma.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Et.position.clone().sub(Lt.target).normalize(),r=new M().crossVectors(rd,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Ee.degToRad(Et.fov/2))*.87,l=a*Et.aspect,c=6;for(let u of[n.min.x,n.max.x])for(let h of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new M(u,h,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,Lt.maxDistance),Lt.target.copy(e),Et.position.copy(e).addScaledVector(s,c),Lt.update(),Et.updateMatrixWorld(),pi(),Xt()}function om(n,e){Mt(),ne=n,Qn=null,Vr.clear(),mn.clear(),_t=-1,k("piece-search").value="",Wi("move"),Pt(),Xr(),mt(e)}function $l(){return Number(k("snap").value)}function $h(n){let e=$l(),t=(ne.worldSize??240)/2;return Ee.clamp(Math.round(n/e)*e,-t,t)}function am(n,e){if(n===ut){let t=Vp(e);er.set(new M(t.x,80,t.z),new M(0,-1,0))}else{let t=rn.getBoundingClientRect();Et.updateMatrixWorld(),er.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Et)}}function Wp(n){return My.constant=-n,er.ray.intersectPlane(My,new M)}function fE(n){let e=n;for(;e&&e.parent!==yt;)e=e.parent;return e?.parent===yt?e:null}function Hr(n,e){am(n,e);let t=$s.visible&&ne.arenaBase?[...yt.children,$s]:yt.children,i=er.intersectObjects(t,!0);for(let s of i){if(s.object===$s)return s;let r=fE(s.object);if(r)return{...s,object:r}}return null}function Xy(n,e,t,i=null){let s=i?[i]:yt.children,r=0;for(let a of s){a.geometry.boundingBox||a.geometry.computeBoundingBox();let l=new fn().copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld).max.y;r=Math.max(r,l)}$s.visible&&ne.arenaBase&&(r=Math.max(r,80)),er.set(new M(n,r+1,e),new M(0,-1,0));let o=i?er.intersectObject(i,!1)[0]:er.intersectObjects($s.visible&&ne.arenaBase?[...yt.children,$s]:yt.children,!1).find(a=>a.object===$s||ne.pieces[yt.children.indexOf(a.object)]?.solid);return!o||Math.abs(o.point.y+.08)>hi?null:{x:n,y:o.point.y+.08,z:e,yaw:t}}function qy(n,e){Xl=null,Jh=!1;let t=Hr(n,e);if(tt==="spawn"){if(!t)return null;let u=$h(t.point.x),h=$h(t.point.z);return Xy(u,h,ne.spawn.yaw)}if(tt==="terrain"){let u=t?.point??Wp(0);return u?{...Dp.terrain,terrain:xs(Dp.terrain.terrain),x:$h(u.x),y:u.y,z:$h(u.z)}:null}if(tt==="sculpt"||tt==="model"&&!kr())return null;let i=t?.point??Wp(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(lE.getNormalMatrix(t.object.matrixWorld)):rd,r=t&&pE(t),o=Ny();r&&r.distance<=o*2&&(Xl=r.point,Jh=k("magnet").checked&&!e.altKey&&k("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=Jh||e.altKey?1e-6:$l(),l=tt==="model"?Ly():tt==="preset"?QT():Dp[tt],c=Ox(Jh?Xl:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ne.worldSize/2?c:null}function pE(n){let e=n.object,t=ne.pieces[yt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let u=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(h=>h!==a)]=0,(!o||u<o.distance)&&(o={distance:u,point:e.localToWorld(c)})}return o}function vs(n){!n&&!fi||(fi=n,da.visible=!!(fi&&Xl),da.visible&&da.position.copy(Xl),Yl.visible=!!(fi&&tt==="spawn"),Gr.visible=!!(fi&&tt!=="spawn"),Yl.visible&&Yl.position.set(fi.x,fi.y+nd,fi.z),Gr.visible&&(Gr.geometry=fi.primitive==="ramp"?rE:ql,Jl(Gr,fi)),pi(),Xt())}function mE(n,e){let t=qy(n,e);if(!t){mt(tt==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(tt==="spawn")Mt(),ne.spawn=t,Wi("move"),Pt(),mt("Point de d\xE9part d\xE9plac\xE9.");else{let i=tt==="model";vs(null),nm(t),i&&(Wi("move"),mt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function gE(n,e){if(Zl.placing&&e.button===0&&e.isPrimary&&!Rt&&!Qe.dragging){e.stopImmediatePropagation();let o=Hr(n,e);if(o){let{x:a,y:l,z:c}=o.point;Zl.place({x:a,y:l,z:c})}return}if(tt==="view"||e.button!==0||!e.isPrimary||Rt||Qe.dragging)return;if(tt==="spawn"||Qp.has(tt)){if(n===rn&&Qe.enabled){let o=rn.getBoundingClientRect();if(Qe.pointerHover({x:(e.clientX-o.left)/o.width*2-1,y:1-(e.clientY-o.top)/o.height*2,button:0}),Qe.axis){Lt.enabled=!1;return}}if(tt!=="spawn"){e.stopImmediatePropagation();let o=Hr(n,e);ga(o?yt.children.indexOf(o.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:tt};if(Rt=t,Qn=null,tt==="sculpt"){$y(n,e);return}if(tt!=="move")return;let i=Hr(n,e),s=i?yt.children.indexOf(i.object):-1;mn.has(s)?(_t=s,cd(),ld()):ga(s);let r=nt();!i||!r||(t.height=i.point.y,t.dx=i.point.x-r.x,t.dz=i.point.z-r.z)}function xE(n,e){if(tt==="view"||Qp.has(tt)||Qe.dragging)return;if(!Rt){tt==="move"?n.toggleAttribute("data-hit",!!Hr(n,e)):vs(qy(n,e));return}if(tt==="sculpt"&&Rt.id===e.pointerId&&Rt.canvas===n){Math.hypot(e.clientX-Rt.clientX,e.clientY-Rt.clientY)>=7&&($y(n,e),Rt.clientX=e.clientX,Rt.clientY=e.clientY);return}if(Rt.id!==e.pointerId||Rt.canvas!==n||Rt.height===void 0||!nt()||Math.hypot(e.clientX-Rt.clientX,e.clientY-Rt.clientY)<4&&!Rt.recorded)return;am(n,e);let i=Wp(Rt.height);if(!i)return;let s=nt(),r=zy(s,{x:i.x-Rt.dx,y:s.y,z:i.z-Rt.dz},["x","z"],e.altKey),o=(ne.worldSize??240)/2,a=Ee.clamp(r.x,-o,o),l=Ee.clamp(r.z,-o,o);if(!(a===s.x&&l===s.z)){if(Rt.recorded||(Mt(),Rt.recorded=!0,n.toggleAttribute("data-dragging",!0)),mn.size>1){let c=-1/0,u=1/0,h=-1/0,d=1/0;for(let x of mn){let g=ne.pieces[x];c=Math.max(c,-o-g.x),u=Math.min(u,o-g.x),h=Math.max(h,-o-g.z),d=Math.min(d,o-g.z)}let f=c<=u?Ee.clamp(a-s.x,c,u):0,p=h<=d?Ee.clamp(l-s.z,h,d):0;for(let x of mn){let g=ne.pieces[x];g.x+=f,g.z+=p,Jl(yt.children[x],g)}for(let x of kp)x.update()}else s.x=a,s.z=l;Jl(yt.children[_t],s),Gi?.update(),k("p-x").value=s.x,k("p-z").value=s.z,pi(),Xt()}}function Fp(n,e,t){if(!Rt||Rt.canvas!==n||Rt.id!==e.pointerId)return;let i=Rt;if(Rt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Pt(),mt("Relief modifi\xE9."));return}i.recorded&&(_s(),mt(mn.size>1?mn.size+" pi\xE8ces d\xE9plac\xE9es.":nt().name+" d\xE9plac\xE9.")),t&&tt===i.tool&&tt!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&mE(n,e)}var Ti=null,ud=!1,Kh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(ud=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(ud=!1)});window.addEventListener("blur",()=>{Ti=null,ud=!1});ut.addEventListener("pointerdown",n=>{n.button!==1&&!(ud&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Ti={id:n.pointerId,x:n.clientX,y:n.clientY},ut.setPointerCapture(n.pointerId),ut.style.cursor="grabbing")},{capture:!0});ut.addEventListener("pointermove",n=>{!Ti||Ti.id!==n.pointerId||(n.stopImmediatePropagation(),kt.cx-=(n.clientX-Ti.x)/kt.scale,kt.cz-=(n.clientY-Ti.y)/kt.scale,Ti.x=n.clientX,Ti.y=n.clientY,pi())},{capture:!0});function Yy(n){!Ti||Ti.id!==n.pointerId||(Ti=null,ut.style.cursor="",ut.hasPointerCapture(n.pointerId)&&ut.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}ut.addEventListener("pointerup",Yy,{capture:!0});ut.addEventListener("pointercancel",Yy,{capture:!0});function lm(n,e){let t=ut.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=Vp({clientX:i,clientY:s}),o=Ee.clamp(kt.width/n,.75,4096),a=o/kt.width;kt.width=o,kt.height*=a,tm();let l=Vp({clientX:i,clientY:s});kt.cx+=r.x-l.x,kt.cz+=r.z-l.z,pi()}ut.addEventListener("wheel",n=>{n.preventDefault(),lm(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});k("plan-zoom-in").onclick=()=>lm(1.25);k("plan-zoom-out").onclick=()=>lm(.8);k("plan-fit").onclick=Xr;var ts=k("context-actions"),Kl=!1;function xa(){ts.hidden=!0}for(let n of[rn,ut])n.addEventListener("pointerdown",e=>{e.button===2?Kh={canvas:n,x:e.clientX,y:e.clientY}:xa()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Kl){Kl=!1;return}if(Kh?.canvas!==n||Math.hypot(e.clientX-Kh.x,e.clientY-Kh.y)>6)return;let t=Hr(n,e),i=t?yt.children.indexOf(t.object):-1;if(i<0){xa();return}ga(i),k("context-title").textContent=nt()?.name??"Pi\xE8ce",ts.querySelector('[data-context-action="delete"]').textContent=nt()?.model?"Retirer de la carte":"Supprimer",ts.hidden=!1;let s=195,r=285;ts.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",ts.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{ts.hidden||ts.contains(n.target)||(Kl=n.button===2,xa())},{capture:!0});document.addEventListener("contextmenu",n=>{Kl&&n.target!==rn&&n.target!==ut&&(Kl=!1,n.preventDefault()),!ts.hidden&&!ts.contains(n.target)&&n.target!==rn&&n.target!==ut&&xa()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&xa()});for(let n of ts.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;xa(),e==="duplicate"?sm():e==="delete"?im():e==="focus"?k("focus-piece").click():Wi(e==="select"?"move":e)};var pa=document.createElement("div");Object.assign(pa.style,{position:"fixed",pointerEvents:"none",zIndex:100,border:"1px solid #a6efff",background:"#60bfe633"});pa.hidden=!0;document.body.append(pa);function Ey(n,e){return{left:Math.min(n.x,e.x),top:Math.min(n.y,e.y),right:Math.max(n.x,e.x),bottom:Math.max(n.y,e.y)}}function yE(n,e,t){let i=n.geometry;i.boundingBox||i.computeBoundingBox();let{min:s,max:r}=i.boundingBox,o=[];for(let a of[s.x,r.x])for(let l of[s.y,r.y])for(let c of[s.z,r.z]){let u=new M(a,l,c).applyMatrix4(n.matrixWorld);if(e===ut){let[h,d]=jl(u.x,u.z);o.push([t.left+h*t.width/ut.width,t.top+d*t.height/ut.height])}else u.project(Et),u.z>-1&&u.z<=1&&Number.isFinite(u.x)&&Number.isFinite(u.y)&&o.push([t.left+(u.x+1)*t.width/2,t.top+(1-u.y)*t.height/2])}return o}for(let n of[rn,ut]){n.addEventListener("pointerdown",t=>{!t.shiftKey||t.button!==0||!t.isPrimary||Rt||Qe.dragging||(t.preventDefault(),t.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(t.pointerId),js={canvas:n,id:t.pointerId,x:t.clientX,y:t.clientY})},{capture:!0}),n.addEventListener("pointermove",t=>{if(js?.id!==t.pointerId||js.canvas!==n)return;t.stopImmediatePropagation();let i=Ey(js,{x:t.clientX,y:t.clientY});Object.assign(pa.style,{left:i.left+"px",top:i.top+"px",width:i.right-i.left+"px",height:i.bottom-i.top+"px"}),pa.hidden=!1},{capture:!0});let e=(t,i)=>{if(js?.id!==t.pointerId||js.canvas!==n)return;t.stopImmediatePropagation();let s=Ey(js,{x:t.clientX,y:t.clientY});if(js=null,pa.hidden=!0,n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),!i||s.right-s.left<4||s.bottom-s.top<4)return;let r=n.getBoundingClientRect(),o=[];Et.updateMatrixWorld(),yt.children.forEach((a,l)=>{a.visible&&Jx(yE(a,n,r),s)&&o.push(l)}),mn.clear(),o.forEach(a=>mn.add(a)),_t=o.at(-1)??-1,cd(),ld(),pi(),Xt(),mt(o.length+" pi\xE8ce"+(o.length===1?" s\xE9lectionn\xE9e.":"s s\xE9lectionn\xE9es."))};n.addEventListener("pointerup",t=>e(t,!0),{capture:!0}),n.addEventListener("pointercancel",t=>e(t,!1),{capture:!0}),n.addEventListener("lostpointercapture",t=>e(t,!1),{capture:!0})}for(let n of[rn,ut])n.addEventListener("pointerdown",e=>gE(n,e),{capture:!0}),n.addEventListener("pointermove",e=>xE(n,e)),n.addEventListener("pointerup",e=>Fp(n,e,!0)),n.addEventListener("pointercancel",e=>Fp(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Fp(n,e,!1)}),n.addEventListener("pointerleave",()=>{Rt||vs(null)});k("p-material").append(...Fx.map((n,e)=>new Option(n,e)));for(let n of Ry)k("p-"+n).addEventListener("change",e=>{let t=nt();!t||t.model||(Mt(),t[n]=Number(e.target.value),ne=pn(ne),Pt())});k("uv-reset").onclick=()=>{let n=nt();!n||n.model||(Mt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ne=pn(ne),Pt())};var _E={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(_E))k(e).addEventListener("change",t=>{let i=nt();if(!i?.model||i.model.kind!=="prop")return;Mt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),ne=pn(ne),Pt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};mt(s[n])});for(let n of Cy)k("p-"+n).addEventListener("change",e=>{let t=nt();if(!t)return;Mt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),ne=pn(ne),Pt()});var Xp={x:0,z:0,seconds:90,phase:0,rise:0};for(let n of Object.keys(Xp))k("flight-"+n).onchange=()=>{let e=nt();if(!e||e.solid)return;Mt();let t=Object.fromEntries(Object.entries(Xp).map(([i,s])=>{let r=k("flight-"+i);return[i,Ee.clamp(Number.isFinite(r.valueAsNumber)?r.valueAsNumber:s,Number(r.min),Number(r.max))]}));t.x||t.z?e.flight=t:delete e.flight,Pt(),_s()};k("map-boundary").onchange=k("map-ceiling").onchange=()=>{Mt();let n=k("map-boundary").valueAsNumber;n>0?ne.boundary={diameter:Ee.clamp(n,12,2048),ceiling:Ee.clamp(k("map-ceiling").valueAsNumber||128,3,256)}:delete ne.boundary,Pt(),_s()};k("map-world-size").onchange=n=>{Mt(),ne.worldSize=Ee.clamp(Number(n.target.value)||240,24,2048),ne=pn(ne),Pt(),Xr(),mt("Zone de construction : "+ne.worldSize+" \xD7 "+ne.worldSize+" m.")};k("map-name").onchange=n=>{Mt(),ne.name=n.target.value,ne=pn(ne),Pt()};k("piece-search").addEventListener("input",Gy);k("pieces").onchange=n=>{n.target.value!==""&&ga(Number(n.target.value))};k("focus-piece").onclick=()=>{let n=yt.children[_t];if(!n)return;let e=new fn().setFromObject(n).getBoundingSphere(new yi),t=Et.position.clone().sub(Lt.target).normalize(),i=Math.atan(Math.tan(Ee.degToRad(Et.fov/2))*Math.min(Et.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Lt.target.copy(e.center),Et.position.copy(e.center).addScaledVector(t,s),Lt.update(),Xt()};for(let n of["x","y","z","yaw"])k("spawn-"+n).onchange=e=>{Mt(),ne.spawn[n]=Number(e.target.value),ne=pn(ne),Pt()};k("spawn-here").onclick=()=>{let n=nt();if(!n)return;let e=n.solid&&Xy(n.x,n.z,n.yaw,yt.children[_t]);if(!e)return mt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Mt(),ne.spawn=e,Pt(),mt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of ed)n.onclick=()=>Wi(n.dataset.tool);k("duplicate").onclick=sm;k("add-mirror").onclick=()=>nm(yp());k("delete").onclick=im;k("rotate").onclick=dE;k("undo").onclick=Wy;k("zoom-fit").onclick=Xr;k("snap").onchange=()=>vs(null);k("new-example").onclick=()=>om(Jp(),"Ar\xE8ne de d\xE9part ouverte.");k("blank-map").onclick=()=>{let n=Ee.clamp(Number(k("map-world-size").value)||240,24,2048);om({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[di({name:"Sol",y:-.25,w:Math.min(n,qs),d:Math.min(n,qs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};k("surface").onchange=n=>{let e=Fl[n.target.value],t=nt();!e||!t||(Mt(),Object.assign(t,e),Pt())};k("texture-file").onchange=async n=>{let e=n.target.files[0],t=nt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ne.pieces.includes(t))return mt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Mt(),t.texture=o,Pt(),mt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){mt(i.message)}finally{n.target.value=""}};k("texture-paint").onclick=()=>{let n=nt();if(!n||n.model)return mt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");vp({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Mt(),n.texture=e,ne=pn(ne),Pt(),mt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};k("terrain-grassTexture-paint").onclick=()=>{let n=nt();n?.terrain&&vp({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Mt(),n.terrain.grassTexture=e,ne=pn(ne),Pt(),mt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};k("texture-clear").onclick=()=>{nt()?.texture&&(Mt(),nt().texture=null,Pt())};k("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{om(pn(await e.text()),"Map charg\xE9e.")}catch(t){mt(t.message)}finally{n.target.value=""}};k("export-map").onclick=()=>{try{kx(ne),mt("Map JSON export\xE9e.")}catch(n){mt(n.message)}};k("test-map").onclick=async()=>{try{await Of(Bx,JSON.stringify(pn(ne))),location.href="./?custom=1"}catch{mt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Zy=["detail","thickness","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"],vE=new Intl.NumberFormat("fr-FR");function ME(n){let e=n.terrain.rules,t=yt.children[_t]?.userData.vegetation?.userData.distribution??[];k("terrain-add-rule").disabled=e.length>=Oh,k("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),k("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,b,S=!1)=>{let A=document.createElement("td");S&&(A.dataset.wide="");let I=document.createElement("span");return I.textContent=C,A.append(I,b),r.append(A),b.matches("input,select")&&b.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),A},a=C=>{Mt(),e[s]=Ul({...i,...C}),Hi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),Pt()},l=(C,b,S)=>{let A=document.createElement("select");return A.replaceChildren(...C.map(([I,O])=>new Option(I,O))),A.value=b,A.onchange=()=>S(A.value),A},c=(C,b,S,A)=>{let I=document.createElement("input");return I.type="number",I.value=i[C],I.min=b,I.max=S,I.step=A,I.onchange=()=>{Number.isFinite(I.valueAsNumber)?a({[C]:I.valueAsNumber}):I.value=i[C]},I},u=Zn.some(C=>C.id===i.model?.id)||!i.model?Zn:[...Zn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...u.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let b=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?u[0]:null,colors:i.colors.map(()=>b),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(u.map(C=>[C.name,C.id]),i.model.id,C=>a({model:u.find(b=>b.id===C)})));let h=document.createElement("div");h.className="terrain-palette",h.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:up-1},(C,b)=>[String(b+2),String(b+2)]),String(i.colors.length),C=>{let b=i.colors.slice(0,Number(C));for(;b.length<Number(C);)b.push(b.at(-1));a({colors:b})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),h.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[C,b]of i.colors.entries()){let S=document.createElement("input");S.type="color",S.value=b,S.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),S.onchange=()=>a({colors:i.colors.map((A,I)=>I===C?S.value:A)}),f.append(S)}h.append(f),o("Palette de teintes",h,!0),o("Instances / m\xB2",c("density",0,Dl,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,cp,.05)),o("Variation de taille",c("variation",0,hp,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,b,S,A]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let I=document.createElement("label"),O=document.createElement("input");I.textContent=b,O.type="number",O.min=S,O.max=A,O.step="any",O.value=i.scatter?.[C]??_[C],O.onchange=()=>{Number.isFinite(O.valueAsNumber)&&a({scatter:{...i.scatter,[C]:O.valueAsNumber}})},I.append(O),m.append(I)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let v=document.createElement("td");v.dataset.wide="",v.append(x),r.append(v);let y=document.createElement("output"),T=t[s]??{count:0,requested:0,area:0};y.textContent=T.count+" / "+T.requested+" \xB7 "+T.area.toFixed(1)+" m\xB2",T.requested>T.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+vE.format(T.collisions??0)+" collisions");let w=o("Affich\xE9es / demand\xE9es",y,!0),R=document.createElement("button");return R.type="button",R.textContent="Retirer la ligne",R.onclick=()=>{Mt(),e.splice(s,1),Pt()},w.append(R),r}))}k("terrain-add-rule").onclick=()=>{let n=nt();!n?.terrain||n.terrain.rules.length>=Oh||(Mt(),n.terrain.rules.push(Ul({seed:n.terrain.seed+n.terrain.rules.length})),Pt(),k("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};k("terrain-stitch").onclick=()=>{let n=nt(),e=ne.pieces[Number(k("terrain-neighbor").value)],t=Ee.clamp(Number(k("terrain-seam-width").value)||1.5,.1,25),i=Cx(n,e,t);if(!i)return mt("Rapproche les bords \xE0 moins de 25 cm.");Mt(),ne.pieces[_t]=i.piece,Pt(),mt(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};k("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=nt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ne.pieces.includes(t))return;Mt(),t.terrain.grassTexture=o,Pt(),mt("Texture d\u2019herbe import\xE9e.")}catch(i){mt(i.message)}};k("terrain-grassTexture-clear").onclick=()=>{nt()?.terrain&&(Mt(),nt().terrain.grassTexture=null,Pt())};for(let n of["triangulation","projection"])k("terrain-"+n).onchange=e=>{let t=nt();t?.terrain&&(Mt(),t.terrain=xs({...t.terrain,[n]:e.target.value},t.w*t.d),Pt())};k("adaptive-editor-view").onchange=Xt;k("spawn-gizmo").onclick=()=>{Wi("spawn"),mt("Tire la fl\xE8che verte Y pour monter le point de d\xE9part.")};for(let n of Zy)k("terrain-"+n).onchange=e=>{let t=nt();t?.terrain&&(Mt(),t.terrain=n==="detail"?pp(t.terrain,Number(e.target.value)):xs({...t.terrain,[n]:Number(e.target.value)},t.w*t.d),Pt())};function jy(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function Jy(n){let e=nt();e?.terrain&&(Mt(),e.terrain=xs({...e.terrain,reliefArea:n},e.w*e.d),Pt())}k("terrain-relief-local").onchange=n=>{let e=nt();e?.terrain&&Jy(n.target.checked?jy(e):null)};for(let n of["x","z","radius","blend"])k("terrain-relief-"+n).onchange=e=>{let t=nt(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&Jy({...t.terrain.reliefArea,[n]:i})};k("terrain-reset").onclick=()=>{nt()?.terrain&&(Mt(),nt().terrain.heights=null,Pt())};function $y(n,e){am(n,e);let t=er.intersectObjects(yt.children,!1).find(a=>ne.pieces[yt.children.indexOf(a.object)]?.terrain),i=t?yt.children.indexOf(t.object):-1,s=ne.pieces[i];if(!s?.terrain||(Rt.recorded||(Mt(),Rt.recorded=!0,Rt.flattenY=t.point.y,ga(i),k("terrain-controls").open=!0),i!==_t))return;let r={mode:k("terrain-brush").value,radius:Number(k("brush-radius").value),strength:Number(k("brush-strength").value),target:Rt.flattenY};if(!Rx(s,t.point.x,t.point.z,r))return;let o=yt.children[i];gp(o.geometry,s),Gi?.update(),pi(),Xt()}k("view-top").onclick=()=>{let n=Lt.target,e=Math.max(10,Et.position.distanceTo(n));Et.position.copy(n).add(new M(0,e,.001)),Lt.update(),Xt()};k("view-perspective").onclick=()=>{Et.position.copy(Lt.target).add(new M(16,15,24)),Xr()};k("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=ne.spawn,s=new M(0,0,-1).applyAxisAngle(rd,Ee.degToRad(i));Et.position.set(n,e+.87,t),Lt.target.copy(Et.position).addScaledVector(s,5),Et.lookAt(Lt.target),Xt()};var Ay={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||Rt||Qe.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")Wy();else if(e==="d")sm();else return;else{if(n.altKey)return;if(Ay[e])Wi(Ay[e]);else if(e==="f")Xr();else if(e==="delete"||e==="backspace")im();else return}n.preventDefault()});var Br=new qt;$t.add(Br);function bE(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function qp(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function SE(){Wl=yt.children.map(bE),Js={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of Wl.entries()){for(let i of["triangles","vertices","instances"])Js[i]+=t[i];(Js.heavy<0||t.triangles>Wl[Js.heavy].triangles)&&(Js.heavy=e)}k("scene-mesh-stats").textContent="Objets de la carte \xB7 "+qp(Js);let n=Js.heavy;k("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+ne.pieces[n].name+" \xB7 "+qp(Wl[n]),k("scene-select-heavy").disabled=n<0}k("scene-select-heavy").onclick=()=>{let n=Js?.heavy??-1;n<0||(ga(n),window.setInspectorTab("object"),k("focus-piece").click())};function Ky(){if(!k("debug-stats"))return;let n=Wr.info.render.triangles,e=ne?.pieces?.length??0;k("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ne?.worldSize??240)+" m"}function Qy(){for(let n of[...Br.children])Br.remove(n),n.geometry.dispose(),n.material.dispose();ma.visible=k("debug-grid").checked;for(let n of yt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=k("debug-wire").checked;if(k("debug-hitboxes").checked){let e=yt.children.indexOf(n),t=ne.pieces[e];if(t?.model){let i=new M(t.w,t.h,t.d),s=px(t.model,i);if(s)for(let r of s){let o=new Ye(...r.size),a=new pe(o,new Ot({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),Br.add(a)}else{let r=fx(t.model,i),o=new pe(r,new Ot({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),Br.add(o)}}else if(t?.primitive==="ramp"){let i=new ls(new sl(n.geometry),new Sn({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),Br.add(i)}else Br.add(new vr(n,"#fa9945"))}}Xt()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])k(n).onchange=Qy;k("debug-coords").onchange=()=>{k("debug-coords").checked||Ky()};for(let n of[rn,ut])n.addEventListener("pointermove",e=>{if(!k("debug-coords").checked||Rt||Ti)return;let t=Hr(n,e);if(!t)return;let i=t.point;k("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+ne.pieces.length+" \xE9l\xE9ments"});async function wE(){Np&&(ne=pn(xx()));try{let n=await d0(Py);if(n){let e=pn(n);if(JSON.stringify(e)!==JSON.stringify(zx()))if(e.arenaBase&&!e.editableArena){let t=Jp(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=ca?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ne=pn(e),mt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ne=e}else ne=e}}catch{}if(uE(),Wi("move"),Pt(),od(),ad(),Xr(),Ql(),Np&&window.setInspectorTab("entities"),zp){let n=Zn.find(e=>e.id===zp);n?(k("place-model").click(),mt("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):mt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Hi("d\xE9marrage termin\xE9",{version:"R58",name:ne.name,pi\u00E8ces:ne.pieces.length})}wE();})();
