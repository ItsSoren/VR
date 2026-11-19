(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,bu=1,qf=2;var Su=1,Yf=2,yi=3,ri=0,an=1,Yt=2,Ni=0,Ts=1,ha=2,wu=3,Tu=4,Zf=5,$i=100,jf=101,Jf=102,Kf=103,$f=104,Qf=200,ep=201,tp=202,np=203,bl=204,Sl=205,ip=206,sp=207,rp=208,op=209,ap=210,lp=211,cp=212,hp=213,up=214,$l=0,Ql=1,ec=2,Es=3,tc=4,nc=5,ic=6,sc=7,rc=0,dp=1,fp=2,Fi=0,pp=1,mp=2,gp=3,xp=4,_p=5,yp=6,vp=7;var Eu=300,Bs=301,zs=302,Wr=303,oc=304,ua=306,On=1e3,Ki=1001,wl=1002,wn=1003,Mp=1004;var da=1005;var rn=1006,ac=1007;var An=1008;var li=1009,Au=1010,Cu=1011,Xr=1012,lc=1013,rs=1014,ci=1015,qr=1016,cc=1017,hc=1018,Yr=1020,Ru=35902,Iu=35899,Pu=1021,Du=1022,Cn=1023,Er=1026,Zr=1027,uc=1028,dc=1029,Lu=1030,fc=1031;var pc=1033,fa=33776,pa=33777,ma=33778,ga=33779,mc=35840,gc=35841,xc=35842,_c=35843,yc=36196,vc=37492,Mc=37496,bc=37808,Sc=37809,wc=37810,Tc=37811,Ec=37812,Ac=37813,Cc=37814,Rc=37815,Ic=37816,Pc=37817,Dc=37818,Lc=37819,Uc=37820,Nc=37821,Fc=36492,Oc=36494,Bc=36495,zc=36283,kc=36284,Vc=36285,Gc=36286;var Lo=2300,Tl=2301,vl=2302,hu=2400,uu=2401,du=2402;var bp=3200,Sp=3201;var Hc=0,wp=1,Oi="",xt="srgb",As="srgb-linear",Uo="linear",bt="srgb";var ws=7680;var fu=519,Tp=512,Ep=513,Ap=514,Uu=515,Cp=516,Rp=517,Ip=518,Pp=519,El=35044,xa=35048;var Nu="300 es",si=2e3,No=2001;var mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=1234567,Ro=Math.PI/180,Ar=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Fu(i,e){return(i%e+e)%e}function M0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function b0(i,e,t){return i!==e?(t-i)/(e-i):0}function Io(i,e,t){return(1-t)*i+t*e}function S0(i,e,t,n){return Io(i,e,1-Math.exp(-t*n))}function w0(i,e=1){return e-Math.abs(Fu(i,e*2)-e)}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function A0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C0(i,e){return i+Math.random()*(e-i)}function R0(i){return i*(.5-Math.random())}function I0(i){i!==void 0&&(cf=i);let e=cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(i){return i*Ro}function D0(i){return i*Ar}function L0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function N0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function F0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:Ro,RAD2DEG:Ar,generateUUID:pi,clamp:je,euclideanModulo:Fu,mapLinear:M0,inverseLerp:b0,lerp:Io,damp:S0,pingpong:w0,smoothstep:T0,smootherstep:E0,randInt:A0,randFloat:C0,randFloatSpread:R0,seededRandom:I0,degToRad:P0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:U0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:F0,normalize:Mt,denormalize:ii},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,v=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let A=Math.sqrt(b),E=Math.atan2(A,p*v);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fh=new M,hf=new ht,$e=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],b=s[4],y=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*x+a*v+l*A,r[3]=o*g+a*b+l*E,r[6]=o*p+a*y+l*R,r[1]=c*x+h*v+u*A,r[4]=c*g+h*b+u*E,r[7]=c*p+h*y+u*R,r[2]=d*x+f*v+m*A,r[5]=d*g+f*b+m*E,r[8]=d*p+f*y+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new $e;function Ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){let i=Cr("canvas");return i.style.display="block",i}var uf={};function Rr(i){i in uf||(uf[i]=!0,console.warn(i))}function Lp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var df=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Uo,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var dt=O0();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,Al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Cr("canvas")),rr.width=e.width,rr.height=e.height;let s=rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=0,Ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bh(s[o].image)):r.push(Bh(s[o]))}else r=Bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var z0=0,zh=new M,fn=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=rn,o=An,a=Cn,l=li,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=pi(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Eu;fn.DEFAULT_ANISOTROPY=1;var zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,A=(p+1)/2,E=(h+d)/4,R=(u+x)/4,P=(m+g)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new fn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),qa.subVectors(this.max,_o),or.subVectors(e.a,_o),ar.subVectors(e.b,_o),lr.subVectors(e.c,_o),Xi.subVectors(ar,or),qi.subVectors(lr,ar),vs.subVectors(or,lr);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-vs.z,vs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,vs.z,0,-vs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-vs.y,vs.x,0];return!kh(t,or,ar,lr,qa)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,or,ar,lr,qa))?!1:(Ya.crossVectors(Xi,qi),t=[Ya.x,Ya.y,Ya.z],kh(t,or,ar,lr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new M,new M,new M,new M,new M,new M,new M,new M],ei=new M,Xa=new Zt,or=new M,ar=new M,lr=new M,Xi=new M,qi=new M,vs=new M,_o=new M,qa=new M,Ya=new M,Ms=new M;function kh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var k0=new Zt,yo=new M,Vh=new M,Yn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):k0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Vh)),this.expandByPoint(yo.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ci=new M,Gh=new M,Za=new M,Yi=new M,Hh=new M,ja=new M,Wh=new M,Qi=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gh.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Gh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Yi.dot(this.direction),l=-Yi.dot(Za),c=Yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gh).addScaledVector(Za,d),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){Hh.subVectors(t,e),ja.subVectors(n,e),Wh.crossVectors(Hh,ja);let o=this.direction.dot(Wh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(ja.crossVectors(Yi,ja));if(l<0)return null;let c=a*this.direction.dot(Hh.cross(Yi));if(c<0||l+c>o)return null;let h=-a*Yi.dot(Wh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,G0)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Zi.crossVectors(n,Nn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Zi.crossVectors(n,Nn)),Zi.normalize(),Ja.crossVectors(Nn,Zi),s[0]=Zi.x,s[4]=Ja.x,s[8]=Nn.x,s[1]=Zi.y,s[5]=Ja.y,s[9]=Nn.y,s[2]=Zi.z,s[6]=Ja.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],b=n[7],y=n[11],A=n[15],E=s[0],R=s[4],P=s[8],w=s[12],S=s[1],D=s[5],N=s[9],G=s[13],H=s[2],V=s[6],X=s[10],K=s[14],W=s[3],ee=s[7],me=s[11],Ee=s[15];return r[0]=o*E+a*S+l*H+c*W,r[4]=o*R+a*D+l*V+c*ee,r[8]=o*P+a*N+l*X+c*me,r[12]=o*w+a*G+l*K+c*Ee,r[1]=h*E+u*S+d*H+f*W,r[5]=h*R+u*D+d*V+f*ee,r[9]=h*P+u*N+d*X+f*me,r[13]=h*w+u*G+d*K+f*Ee,r[2]=m*E+x*S+g*H+p*W,r[6]=m*R+x*D+g*V+p*ee,r[10]=m*P+x*N+g*X+p*me,r[14]=m*w+x*G+g*K+p*Ee,r[3]=v*E+b*S+y*H+A*W,r[7]=v*R+b*D+y*V+A*ee,r[11]=v*P+b*N+y*X+A*me,r[15]=v*w+b*G+y*K+A*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,b=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,E=t*v+n*b+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=v*R,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*R,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=b*R,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*R,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=A*R,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*R,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=l*c,b=l*h,y=l*u,A=n.x,E=n.y,R=n.z;return s[0]=(1-(x+p))*A,s[1]=(f+y)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+b)*R,s[9]=(g-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/o,u=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=si,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===si)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===No)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===si)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===No)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new M,ti=new ct,V0=new M(0,0,0),G0=new M(1,1,1),Zi=new M,Ja=new M,Nn=new M,pf=new ct,mf=new ht,Xt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mf.setFromEuler(this),this.setFromQuaternion(mf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xt.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H0=0,gf=new M,hr=new ht,Ri=new ct,Ka=new M,vo=new M,W0=new M,X0=new ht,xf=new M(1,0,0),_f=new M(0,1,0),yf=new M(0,0,1),vf={type:"added"},q0={type:"removed"},ur={type:"childadded",child:null},Xh={type:"childremoved",child:null},Ut=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new Xt,n=new ht,s=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(vo,Ka,this.up):Ri.lookAt(Ka,vo,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ri),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),Xh.child=e,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new M(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new M,Ii=new M,qh=new M,Pi=new M,dr=new M,fr=new M,Mf=new M,Yh=new M,Zh=new M,jh=new M,Jh=new zt,Kh=new zt,$h=new zt,Sn=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Ii.subVectors(n,t),qh.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ii),l=ni.dot(qh),c=Ii.dot(Ii),h=Ii.dot(qh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jh.setScalar(0),Kh.setScalar(0),$h.setScalar(0),Jh.fromBufferAttribute(e,t),Kh.fromBufferAttribute(e,n),$h.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jh,r.x),o.addScaledVector(Kh,r.y),o.addScaledVector($h,r.z),o}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Ii.subVectors(e,t),ni.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;dr.subVectors(s,n),fr.subVectors(r,n),Yh.subVectors(e,n);let l=dr.dot(Yh),c=fr.dot(Yh);if(l<=0&&c<=0)return t.copy(n);Zh.subVectors(e,s);let h=dr.dot(Zh),u=fr.dot(Zh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(dr,o);jh.subVectors(e,r);let f=dr.dot(jh),m=fr.dot(jh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(fr,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Mf.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Mf,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Qh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Fu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qh(o,r,e+1/3),this.g=Qh(o,r,e),this.b=Qh(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return dt.workingToColorSpace(cn.copy(this),e),Math.round(je(cn.r*255,0,255))*65536+Math.round(je(cn.g*255,0,255))*256+Math.round(je(cn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=xt){dt.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL($a);let n=Io(ji.h,$a.h,t),s=Io(ji.s,$a.s,t),r=Io(ji.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ge;Ge.NAMES=Up;var Y0=0,oi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Ts,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new M,Qa=new oe,Z0=0,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}};var Oo=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bo=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},j0=0,qn=new ct,eu=new Ut,pr=new M,Fn=new Zt,Mo=new Zt,en=new M,it=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Bo:Oo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Fn.min,Mo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Mo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Mo.min),Fn.expandByPoint(Mo.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),en.add(pr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new M,l[P]=new M;let c=new M,h=new M,u=new M,d=new oe,f=new oe,m=new oe,x=new M,g=new M;function p(P,w,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[P].add(x),a[w].add(x),a[S].add(x),l[P].add(g),l[w].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){let S=v[P],D=S.start,N=S.count;for(let G=D,H=D+N;G<H;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new M,y=new M,A=new M,E=new M;function R(P){A.fromBufferAttribute(s,P),E.copy(A);let w=a[P];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);let D=y.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,w=v.length;P<w;++P){let S=v[P],D=S.start,N=S.count;for(let G=D,H=D+N;G<H;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bf=new ct,bs=new Qi,el=new Yn,Sf=new M,tl=new M,nl=new M,il=new M,tu=new M,sl=new M,wf=new M,rl=new M,ge=class extends Ut{constructor(e=new it,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(tu.fromBufferAttribute(u,e),o?sl.addScaledVector(tu,h):sl.addScaledVector(tu.sub(t),h))}t.add(sl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(el.containsPoint(bs.origin)===!1&&(bs.intersectSphere(el,Sf)===null||bs.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),bs.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=b;y<A;y+=3){let E=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);s=ol(this,p,e,n,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);s=ol(this,o,e,n,c,h,u,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=b;y<A;y+=3){let E=y,R=y+1,P=y+2;s=ol(this,p,e,n,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,b=g+1,y=g+2;s=ol(this,o,e,n,c,h,u,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function J0(i,e,t,n,s,r,o,a){let l;if(e.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;rl.copy(a),rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function ol(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,tl),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let h=J0(i,e,t,n,tl,nl,il,wf);if(h){let u=new M;Sn.getBarycoord(wf,tl,nl,il,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new oe)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new oe)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};Sn.getNormal(tl,nl,il,d.normal),h.face=d,h.barycoord=u}return h}var Xe=class i extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function m(x,g,p,v,b,y,A,E,R,P,w){let S=y/R,D=A/P,N=y/2,G=A/2,H=E/2,V=R+1,X=P+1,K=0,W=0,ee=new M;for(let me=0;me<X;me++){let Ee=me*D-G;for(let q=0;q<V;q++){let ue=q*S-N;ee[x]=ue*v,ee[g]=Ee*b,ee[p]=H,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[p]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(q/R),u.push(1-me/P),K+=1}}for(let me=0;me<P;me++)for(let Ee=0;Ee<R;Ee++){let q=d+Ee+V*me,ue=d+Ee+V*(me+1),Ve=d+(Ee+1)+V*(me+1),De=d+(Ee+1)+V*me;l.push(q,ue,De),l.push(ue,Ve,De),W+=6}a.addGroup(f,W,w),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function K0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Np={clone:ks,merge:mn},$0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zo=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new M,Tf=new oe,Ef=new oe,hn=class extends zo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Tf,Ef),t.subVectors(Ef,Tf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,Il=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new hn(mr,gr,e,t);r.layers=this.layers,this.add(r);let o=new hn(mr,gr,e,t);o.layers=this.layers,this.add(o);let a=new hn(mr,gr,e,t);a.layers=this.layers,this.add(a);let l=new hn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new hn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ko=class extends fn{constructor(e=[],t=Bs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ni});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=rn),new Il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},dn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},ex={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Vo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new M,Ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nr=class extends oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xr,bo=new M,_r=new M,yr=new M,vr=new oe,So=new oe,Fp=new ct,al=new M,wo=new M,ll=new M,Af=new oe,nu=new oe,Cf=new oe,Ho=class extends Ut{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Go(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Ur(n,3,0,!1)),xr.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-yr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;cl(al.set(-.5,-.5,0),yr,o,_r,s,r),cl(wo.set(.5,-.5,0),yr,o,_r,s,r),cl(ll.set(.5,.5,0),yr,o,_r,s,r),Af.set(0,0),nu.set(1,0),Cf.set(1,1);let a=e.ray.intersectTriangle(al,wo,ll,!1,bo);if(a===null&&(cl(wo.set(-.5,.5,0),yr,o,_r,s,r),nu.set(0,1),a=e.ray.intersectTriangle(al,ll,wo,!1,bo),a===null))return;let l=e.ray.origin.distanceTo(bo);l<e.near||l>e.far||t.push({distance:l,point:bo.clone(),uv:Sn.getInterpolation(bo,al,wo,ll,Af,nu,Cf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function cl(i,e,t,n,s,r){vr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(So.x=r*vr.x-s*vr.y,So.y=s*vr.x+r*vr.y):So.copy(vr),i.copy(e),i.x+=So.x,i.y+=So.y,i.applyMatrix4(Fp)}var xi=class extends fn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new ct,Rf=new ct,hl=[],If=new Zt,tx=new ct,To=new ge,Eo=new Yn,Wo=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),If.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(If)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Eo.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Rf.multiplyMatrices(n,Mr),To.matrixWorld=Rf,To.raycast(e,hl);for(let o=0,a=hl.length;o<a;o++){let l=hl[o];l.instanceId=r,l.object=this,t.push(l)}hl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(s*this.count),s,this.count,uc,ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},iu=new M,nx=new M,ix=new $e,un=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=iu.subVectors(n,t).cross(nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(iu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ix.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Yn,sx=new oe(.5,.5),ul=new M,Or=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,p-m,A-v).normalize(),s[1].setComponents(c+o,f+h,p+m,A+v).normalize(),s[2].setComponents(c+a,f+u,p+x,A+b).normalize(),s[3].setComponents(c-a,f-u,p-x,A-b).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,A-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,A-y).normalize(),t===si)s[5].setComponents(c+l,f+d,p+g,A+y).normalize();else if(t===No)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=sx.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ul.x=s.normal.x>0?e.max.x:e.min.x,ul.y=s.normal.y>0?e.max.y:e.min.y,ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zn=class extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dl=new M,Ll=new M,Pf=new ct,Ao=new Qi,dl=new Yn,su=new M,Df=new M,Tn=class extends Ut{constructor(e=new it,t=new Zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dl.fromBufferAttribute(t,s-1),Ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dl.distanceTo(Ll);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Pf.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),b=fl(this,e,Ao,l,p,v,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=fl(this,e,Ao,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=fl(this,e,Ao,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=fl(this,e,Ao,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Dl.fromBufferAttribute(a,s),Ll.fromBufferAttribute(a,r),t.distanceSqToSegment(Dl,Ll,su,Df)>n)return;su.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(su);if(!(c<e.near||c>e.far))return{distance:c,point:Df.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Lf=new M,Uf=new M,Cs=class extends Tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lf.fromBufferAttribute(t,s),Uf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lf.distanceTo(Uf);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends Tn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Li=class extends fn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qo=class extends fn{constructor(e,t,n=rs,s,r,o,a=wn,l=wn,c,h=Er,u=1){if(h!==Er&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yo=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},es=class i extends it{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,x=s+1,g=new M,p=new M;for(let v=0;v<=m;v++){let b=0,y=0,A=0,E=0;if(v<=n){let w=v/n,S=w*Math.PI/2;y=-h-e*Math.cos(S),A=e*Math.sin(S),E=-e*Math.cos(S),b=w*u}else if(v<=n+r){let w=(v-n)/r;y=-h+w*t,A=e,E=0,b=u+w*d}else{let w=(v-n-r)/n,S=w*Math.PI/2;y=h+e*Math.sin(S),A=e*Math.cos(S),E=e*Math.sin(S),b=u+d+w*u}let R=Math.max(0,Math.min(1,b/f)),P=0;v===0?P=.5/s:v===m&&(P=-.5/s);for(let w=0;w<=s;w++){let S=w/s,D=S*Math.PI*2,N=Math.sin(D),G=Math.cos(D);p.x=-A*G,p.y=y,p.z=A*N,a.push(p.x,p.y,p.z),g.set(-A*G,E,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+P,R)}if(v>0){let w=(v-1)*x;for(let S=0;S<s;S++){let D=w+S,N=w+S+1,G=v*x+S,H=v*x+S+1;o.push(D,N,G),o.push(N,H,G)}}}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pn=class i extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class i extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function v(){let y=new M,A=new M,E=0,R=(t-e)/n;for(let P=0;P<=r;P++){let w=[],S=P/r,D=S*(t-e)+e;for(let N=0;N<=s;N++){let G=N/s,H=G*l+a,V=Math.sin(H),X=Math.cos(H);A.x=D*V,A.y=-S*n+g,A.z=D*X,u.push(A.x,A.y,A.z),y.set(V,R,X).normalize(),d.push(y.x,y.y,y.z),f.push(G,1-S),w.push(m++)}x.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let S=x[w][P],D=x[w+1][P],N=x[w+1][P+1],G=x[w][P+1];(e>0||w!==0)&&(h.push(S,D,G),E+=3),(t>0||w!==r-1)&&(h.push(D,N,G),E+=3)}c.addGroup(p,E,0),p+=E}function b(y){let A=m,E=new oe,R=new M,P=0,w=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let D=m;for(let N=0;N<=s;N++){let H=N/s*l+a,V=Math.cos(H),X=Math.sin(H);R.x=w*X,R.y=g*S,R.z=w*V,u.push(R.x,R.y,R.z),d.push(0,S,0),E.x=V*.5+.5,E.y=X*.5*S+.5,f.push(E.x,E.y),m++}for(let N=0;N<s;N++){let G=A+N,H=D+N;y===!0?h.push(H,H+1,G):h.push(H+1,H,G),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rs=class i extends wt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class i extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new M,y=new M,A=new M;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],y),f(t[E+2],A),l(b,y,A,v)}function l(v,b,y,A){let E=A+1,R=[];for(let P=0;P<=E;P++){R[P]=[];let w=v.clone().lerp(y,P/E),S=b.clone().lerp(y,P/E),D=E-P;for(let N=0;N<=D;N++)N===0&&P===E?R[P][N]=w:R[P][N]=w.clone().lerp(S,N/D)}for(let P=0;P<E;P++)for(let w=0;w<2*(E-P)-1;w++){let S=Math.floor(w/2);w%2===0?(d(R[P][S+1]),d(R[P+1][S]),d(R[P][S])):(d(R[P][S+1]),d(R[P+1][S+1]),d(R[P+1][S]))}}function c(v){let b=new M;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let v=new M;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],A=o[v+4],E=Math.max(b,y,A),R=Math.min(b,y,A);E>.9&&R<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function m(){let v=new M,b=new M,y=new M,A=new M,E=new oe,R=new oe,P=new oe;for(let w=0,S=0;w<r.length;w+=9,S+=6){v.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(v).add(b).add(y).divideScalar(3);let D=g(A);x(E,S+0,v,D),x(R,S+2,b,D),x(P,S+4,y,D)}}function x(v,b,y,A){A<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new M,s=[],r=[],o=[],a=new M,l=new ct;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var pl=new M,ru=new zu,ou=new zu,au=new zu,Nl=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new M){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pl.subVectors(s[0],s[1]).add(s[0]),c=pl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ru.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),ou.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),au.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ou.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),au.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ru.calc(l),ou.calc(l),au.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function rx(i,e){let t=1-i;return t*t*e}function ox(i,e){return 2*(1-i)*i*e}function ax(i,e){return i*i*e}function Po(i,e,t,n){return rx(i,e)+ox(i,t)+ax(i,n)}function lx(i,e){let t=1-i;return t*t*t*e}function cx(i,e){let t=1-i;return 3*t*t*i*e}function hx(i,e){return 3*(1-i)*i*i*e}function ux(i,e){return i*i*i*e}function Do(i,e,t,n,s){return lx(i,e)+cx(i,t)+hx(i,n)+ux(i,s)}var Zo=class extends Bn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends Bn{constructor(e=new M,t=new M,n=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y),Do(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends Bn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Bn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends Bn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends Bn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Nf(a,l.x,c.x,h.x,u.x),Nf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},pu=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Nl,CubicBezierCurve:Zo,CubicBezierCurve3:Fl,EllipseCurve:zr,LineCurve:jo,LineCurve3:Ol,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Bl,SplineCurve:Ko}),zl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new pu[s.type]().fromJSON(s))}return this}},$o=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Jo(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Zo(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new zr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ui=class extends $o{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $o().fromJSON(s))}return this}};function dx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Op(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=xx(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qo(r,o,t,a,l,c,0),o}function Op(i,e,t,n,s){let r;if(s===Cx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ff(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ff(o/n|0,i[o],i[o+1],r);return r&&kr(r,r.next)&&(ta(r),r=r.next),r}function Is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&bx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?px(i,n,s,r):fx(i)){e.push(l.i,i.i,c.i),ta(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=mx(Is(i),e),Qo(i,e,t,n,s,r,2)):o===2&&gx(i,e,t,n,s,r):Qo(Is(i),e,t,n,s,r,1);break}}}function fx(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Co(s,a,r,l,o,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function px(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=mu(f,m,e,t,n),v=mu(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Co(a,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Co(a,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Co(a,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Co(a,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!kr(n,s)&&zp(n,t,t.next,s)&&ea(n,s)&&ea(s,n)&&(e.push(n.i,t.i,s.i),ta(t),ta(t.next),t=i=s),t=t.next}while(t!==i);return Is(t)}function gx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tx(o,a)){let l=kp(o,a);o=Is(o,o.next),l=Is(l,l.next),Qo(o,e,t,n,s,r,0),Qo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Op(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wx(c))}s.sort(_x);for(let r=0;r<s.length;r++)t=yx(s[r],t);return t}function _x(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yx(i,e){let t=vx(i,e);if(!t)return e;let n=kp(t,i);return Is(n,n.next),Is(t,t.next)}function vx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(kr(i,t))return t;do{if(kr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Bp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ea(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Mx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Mx(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function bx(i,e,t,n){let s=i;do s.z===0&&(s.z=mu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sx(s)}function Sx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function mu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Bp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Co(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Bp(i,e,t,n,s,r,o,a)}function Tx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ex(i,e)&&(ea(i,e)&&ea(e,i)&&Ax(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||kr(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function zp(i,e,t,n){let s=gl(Bt(i,e,t)),r=gl(Bt(i,e,n)),o=gl(Bt(t,n,i)),a=gl(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&ml(i,t,e)||r===0&&ml(i,n,e)||o===0&&ml(t,i,n)||a===0&&ml(t,e,n))}function ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gl(i){return i>0?1:i<0?-1:0}function Ex(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ea(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function Ax(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kp(i,e){let t=gu(i.i,i.x,i.y),n=gu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ff(i,e,t,n){let s=gu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xu=class{static triangulate(e,t,n=2){return dx(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Of(e),Bf(n,e);let o=e.length;t.forEach(Of);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bf(n,t[l]);let a=xu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Of(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ps=class i extends it{constructor(e=new Ui([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Rx,b,y=!1,A,E,R,P;p&&(b=p.getSpacedPoints(h),y=!0,d=!1,A=p.computeFrenetFrames(h,!1),E=new M,R=new M,P=new M),d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(c),S=w.shape,D=w.holes;if(!fi.isClockWise(S)){S=S.reverse();for(let he=0,re=D.length;he<re;he++){let te=D[he];fi.isClockWise(te)&&(D[he]=te.reverse())}}function G(he){let te=10000000000000001e-36,ne=he[0];for(let Te=1;Te<=he.length;Te++){let _e=Te%he.length,Ae=he[_e],Je=Ae.x-ne.x,Ye=Ae.y-ne.y,C=Je*Je+Ye*Ye,_=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ne.x),Math.abs(ne.y)),I=te*_*_;if(C<=I){he.splice(_e,1),Te--;continue}ne=Ae}}G(S),D.forEach(G);let H=D.length,V=S;for(let he=0;he<H;he++){let re=D[he];S=S.concat(re)}function X(he,re,te){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(re,te)}let K=S.length;function W(he,re,te){let ne,Te,_e,Ae=he.x-re.x,Je=he.y-re.y,Ye=te.x-he.x,C=te.y-he.y,_=Ae*Ae+Je*Je,I=Ae*C-Je*Ye;if(Math.abs(I)>Number.EPSILON){let O=Math.sqrt(_),j=Math.sqrt(Ye*Ye+C*C),k=re.x-Je/O,xe=re.y+Ae/O,ie=te.x-C/j,pe=te.y+Ye/j,de=((ie-k)*C-(pe-xe)*Ye)/(Ae*C-Je*Ye);ne=k+Ae*de-he.x,Te=xe+Je*de-he.y;let J=ne*ne+Te*Te;if(J<=2)return new oe(ne,Te);_e=Math.sqrt(J/2)}else{let O=!1;Ae>Number.EPSILON?Ye>Number.EPSILON&&(O=!0):Ae<-Number.EPSILON?Ye<-Number.EPSILON&&(O=!0):Math.sign(Je)===Math.sign(C)&&(O=!0),O?(ne=-Je,Te=Ae,_e=Math.sqrt(_)):(ne=Ae,Te=Je,_e=Math.sqrt(_/2))}return new oe(ne/_e,Te/_e)}let ee=[];for(let he=0,re=V.length,te=re-1,ne=he+1;he<re;he++,te++,ne++)te===re&&(te=0),ne===re&&(ne=0),ee[he]=W(V[he],V[te],V[ne]);let me=[],Ee,q=ee.concat();for(let he=0,re=H;he<re;he++){let te=D[he];Ee=[];for(let ne=0,Te=te.length,_e=Te-1,Ae=ne+1;ne<Te;ne++,_e++,Ae++)_e===Te&&(_e=0),Ae===Te&&(Ae=0),Ee[ne]=W(te[ne],te[_e],te[Ae]);me.push(Ee),q=q.concat(Ee)}let ue;if(g===0)ue=fi.triangulateShape(V,D);else{let he=[],re=[];for(let te=0;te<g;te++){let ne=te/g,Te=f*Math.cos(ne*Math.PI/2),_e=m*Math.sin(ne*Math.PI/2)+x;for(let Ae=0,Je=V.length;Ae<Je;Ae++){let Ye=X(V[Ae],ee[Ae],_e);fe(Ye.x,Ye.y,-Te),ne===0&&he.push(Ye)}for(let Ae=0,Je=H;Ae<Je;Ae++){let Ye=D[Ae];Ee=me[Ae];let C=[];for(let _=0,I=Ye.length;_<I;_++){let O=X(Ye[_],Ee[_],_e);fe(O.x,O.y,-Te),ne===0&&C.push(O)}ne===0&&re.push(C)}}ue=fi.triangulateShape(he,re)}let Ve=ue.length,De=m+x;for(let he=0;he<K;he++){let re=d?X(S[he],q[he],De):S[he];y?(R.copy(A.normals[0]).multiplyScalar(re.x),E.copy(A.binormals[0]).multiplyScalar(re.y),P.copy(b[0]).add(R).add(E),fe(P.x,P.y,P.z)):fe(re.x,re.y,0)}for(let he=1;he<=h;he++)for(let re=0;re<K;re++){let te=d?X(S[re],q[re],De):S[re];y?(R.copy(A.normals[he]).multiplyScalar(te.x),E.copy(A.binormals[he]).multiplyScalar(te.y),P.copy(b[he]).add(R).add(E),fe(P.x,P.y,P.z)):fe(te.x,te.y,u/h*he)}for(let he=g-1;he>=0;he--){let re=he/g,te=f*Math.cos(re*Math.PI/2),ne=m*Math.sin(re*Math.PI/2)+x;for(let Te=0,_e=V.length;Te<_e;Te++){let Ae=X(V[Te],ee[Te],ne);fe(Ae.x,Ae.y,u+te)}for(let Te=0,_e=D.length;Te<_e;Te++){let Ae=D[Te];Ee=me[Te];for(let Je=0,Ye=Ae.length;Je<Ye;Je++){let C=X(Ae[Je],Ee[Je],ne);y?fe(C.x,C.y+b[h-1].y,b[h-1].x+te):fe(C.x,C.y,u+te)}}}$(),se();function $(){let he=s.length/3;if(d){let re=0,te=K*re;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[2]+te,Te[1]+te,Te[0]+te)}re=h+g*2,te=K*re;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[0]+te,Te[1]+te,Te[2]+te)}}else{for(let re=0;re<Ve;re++){let te=ue[re];ce(te[2],te[1],te[0])}for(let re=0;re<Ve;re++){let te=ue[re];ce(te[0]+K*h,te[1]+K*h,te[2]+K*h)}}n.addGroup(he,s.length/3-he,0)}function se(){let he=s.length/3,re=0;Q(V,re),re+=V.length;for(let te=0,ne=D.length;te<ne;te++){let Te=D[te];Q(Te,re),re+=Te.length}n.addGroup(he,s.length/3-he,1)}function Q(he,re){let te=he.length;for(;--te>=0;){let ne=te,Te=te-1;Te<0&&(Te=he.length-1);for(let _e=0,Ae=h+g*2;_e<Ae;_e++){let Je=K*_e,Ye=K*(_e+1),C=re+ne+Je,_=re+Te+Je,I=re+Te+Ye,O=re+ne+Ye;ke(C,_,I,O)}}}function fe(he,re,te){l.push(he),l.push(re),l.push(te)}function ce(he,re,te){ut(he),ut(re),ut(te);let ne=s.length/3,Te=v.generateTopUV(n,s,ne-3,ne-2,ne-1);L(Te[0]),L(Te[1]),L(Te[2])}function ke(he,re,te,ne){ut(he),ut(re),ut(ne),ut(re),ut(te),ut(ne);let Te=s.length/3,_e=v.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);L(_e[0]),L(_e[1]),L(_e[3]),L(_e[1]),L(_e[2]),L(_e[3])}function ut(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function L(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ix(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pu[s.type]().fromJSON(s)),new i(n,e.options)}},Rx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(d,1-m),new oe(x,1-p)]:[new oe(a,1-l),new oe(h,1-u),new oe(f,1-m),new oe(g,1-p)]}};function Ix(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var jn=class i extends Br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},na=class i extends it{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new M,d=new oe,f=new M,m=new M,x=new M,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let b=n+v*h*s,y=Math.sin(b),A=Math.cos(b);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*A,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);let R=l[3*E+0]*y,P=l[3*E+1],w=l[3*E+0]*A;c.push(R,P,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let y=b+v*e.length,A=y,E=y+e.length,R=y+e.length+1,P=y+1;r.push(A,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Jn=class i extends Br{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let b=0;b<c;b++){let y=b*u-r;m.push(y,-v,0),x.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let b=v+c*p,y=v+c*(p+1),A=v+1+c*(p+1),E=v+1+c*p;f.push(b,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ts=class i extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new M,m=new oe;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,b=v,y=v+n+1,A=v+n+2,E=v+1;a.push(b,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ia=class i extends it{constructor(e=new Ui([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];fi.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=fi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],b=v[0]+u,y=v[1]+u,A=v[2]+u;n.push(b,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Px(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Px(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var En=class i extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new M,d=new M,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],b=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+y,1-b),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let b=h[p][v+1],y=h[p][v],A=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(b,y,E),(p!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ds=class i extends Br{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vn=class i extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new M,u=new M,d=new M;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var sa=class extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,x=d+f;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),v=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var tn=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zn=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kl=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vl=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends Ls{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uu:r=e,a=2*t-n;break;case du:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uu:o=e,l=2*n-t;break;case du:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+v*o[c+A]+b*o[l+A]+y*o[u+A];return r}},Hl=class extends Ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Wl=class extends Ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xl(t,this.TimeBufferType),this.values=xl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xl(e.times,Array),values:xl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Dx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Tl;var ns=class extends kn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Lo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="color";var ql=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="number";var Yl=class extends Ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}},ra=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends kn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Lo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Zl.prototype.ValueTypeName="vector";var Ml={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},jl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vp=new jl,Vr=class{constructor(e){this.manager=e!==void 0?e:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=new WeakMap,Jl=class extends Vr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ml.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=br.get(o);u===void 0&&(u=[],br.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Cr("img");function l(){h(),t&&t(this);let u=br.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}br.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ml.remove(`image:${e}`);let d=br.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ml.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var _i=class extends Vr{constructor(e){super(e)}load(e,t,n,s){let r=new fn,o=new Jl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},oa=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Us=class extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lu=new ct,kf=new M,Vf=new M,_u=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var aa=class extends zo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yu=class extends _u{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ku="\\[\\]\\.:\\/",Lx=new RegExp("["+ku+"]","g"),Vu="[^"+ku+"]",Ux="[^"+ku.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Fx=/(WCOD+)?/.source.replace("WCOD",Ux),Ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),zx=new RegExp("^"+Nx+Fx+Ox+Bx+"$"),kx=["material","materials","bones","map"],vu=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(e){let t=zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=vu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i1=new Float32Array(1);var Gf=new ct,Fs=class{constructor(e,t,n=0,s=1/0){this.ray=new Qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gf),this}intersectObject(e,t=!0,n=[]){return Mu(e,this,n,t),n.sort(Hf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mu(e[s],this,n,t);return n.sort(Hf),n}};function Hf(i,e){return i.distance-e.distance}function Mu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Mu(r[o],e,t,!0)}}var Gr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wf=new M,_l=new M,Sr=new M,wr=new M,cu=new M,Vx=new M,Gx=new M,la=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wf.subVectors(e,this.start),_l.subVectors(this.end,this.start);let n=_l.dot(_l),r=_l.dot(Wf)/n;return t&&(r=je(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Vx,n=Gx){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Sr.subVectors(c,a),wr.subVectors(h,l),cu.subVectors(a,l);let u=Sr.dot(Sr),d=wr.dot(wr),f=wr.dot(cu);if(u<=s&&d<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=s)r=0,o=f/d,o=je(o,0,1);else{let m=Sr.dot(cu);if(d<=s)o=0,r=je(-m/u,0,1);else{let x=Sr.dot(wr),g=u*d-x*x;g!==0?r=je((x*f-m*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=je(-m/u,0,1)):o>1&&(o=1,r=je((x-m)/u,0,1))}}return t.copy(a).add(Sr.multiplyScalar(r)),n.copy(l).add(wr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ca=class extends Cs{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ge(n),s=new Ge(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new it;h.setAttribute("position",new Ue(l,3)),h.setAttribute("color",new Ue(c,3));let u=new Zn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var yl=new Zt,Hr=class extends Cs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new it;r.setIndex(new St(n,1)),r.setAttribute("position",new St(s,3)),super(r,new Zn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&yl.setFromObject(this.object),yl.isEmpty())return;let e=yl.min,t=yl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Os=class extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Gu(i,e,t,n){let s=Hx(n);switch(t){case Pu:return i*e;case uc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case Lu:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case Du:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case _c:return Math.max(i,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case yc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(i){switch(i){case li:case Au:return{byteLength:1,components:1};case Xr:case Cu:case qr:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case rs:case lc:case ci:return{byteLength:4,components:1};case Ru:case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function um(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,__=`#define PI 3.141592653589793
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
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,Z_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sy=`#if defined( USE_POINTS_UV )
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
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,nv=`#define DISTANCE
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
}`,iv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 diffuse;
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
}`,hv=`#define LAMBERT
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
}`,uv=`#define LAMBERT
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
}`,dv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,pv=`#define NORMAL
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
}`,mv=`#define NORMAL
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
}`,gv=`#define PHONG
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
}`,xv=`#define PHONG
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
}`,_v=`#define STANDARD
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
}`,yv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Tv=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,Av=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:jx,alphahash_pars_fragment:Jx,alphamap_fragment:Kx,alphamap_pars_fragment:$x,alphatest_fragment:Qx,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:x_,common:__,cube_uv_reflection_fragment:y_,defaultnormal_vertex:v_,displacementmap_pars_vertex:M_,displacementmap_vertex:b_,emissivemap_fragment:S_,emissivemap_pars_fragment:w_,colorspace_fragment:T_,colorspace_pars_fragment:E_,envmap_fragment:A_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:V_,envmap_vertex:P_,fog_vertex:D_,fog_pars_vertex:L_,fog_fragment:U_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:k_,lights_toon_fragment:G_,lights_toon_pars_fragment:H_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:Z_,lights_fragment_maps:j_,lights_fragment_end:J_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:sy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:hy,morphtarget_vertex:uy,normal_fragment_begin:dy,normal_fragment_maps:fy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:vy,iridescence_pars_fragment:My,opaque_fragment:by,packing:Sy,premultiplied_alpha_fragment:wy,project_vertex:Ty,dithering_fragment:Ey,dithering_pars_fragment:Ay,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Py,shadowmap_vertex:Dy,shadowmask_pars_fragment:Ly,skinbase_vertex:Uy,skinning_pars_vertex:Ny,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:By,specularmap_pars_fragment:zy,tonemapping_fragment:ky,tonemapping_pars_fragment:Vy,transmission_fragment:Gy,transmission_pars_fragment:Hy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Zy,background_frag:jy,backgroundCube_vert:Jy,backgroundCube_frag:Ky,cube_vert:$y,cube_frag:Qy,depth_vert:ev,depth_frag:tv,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:hv,meshlambert_frag:uv,meshmatcap_vert:dv,meshmatcap_frag:fv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:xv,meshphysical_vert:_v,meshphysical_frag:yv,meshtoon_vert:vv,meshtoon_frag:Mv,points_vert:bv,points_frag:Sv,shadow_vert:wv,shadow_frag:Tv,sprite_vert:Ev,sprite_frag:Av},Re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},vi={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};vi.physical={uniforms:mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Wc={r:0,b:0,g:0},Vs=new Xt,Cv=new ct;function Rv(i,e,t,n,s,r,o){let a=new Ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,A=m(b);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let A=m(y);A&&(A.isCubeTexture||A.mapping===ua)?(h===void 0&&(h=new ge(new Xe(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ks(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(Vs)),h.material.toneMapped=dt.getTransfer(A.colorSpace)!==bt,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ge(new on(2,2),new ai({name:"BackgroundMaterial",uniforms:ks(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=dt.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Wc,Bu(i)),n.buffers.color.setClear(Wc.r,Wc.g,Wc.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:g,dispose:v}}function Iv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,D,N,G,H){let V=!1,X=u(G,N,D);r!==X&&(r=X,c(r.object)),V=f(S,G,N,H),V&&m(S,G,N,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(S,D,N,G),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,N){let G=N.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let V=H[D.id];V===void 0&&(V={},H[D.id]=V);let X=V[G];return X===void 0&&(X=d(l()),V[G]=X),X}function d(S){let D=[],N=[],G=[];for(let H=0;H<t;H++)D[H]=0,N[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,D,N,G){let H=r.attributes,V=D.attributes,X=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let me=H[W],Ee=V[W];if(Ee===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),me===void 0||me.attribute!==Ee||Ee&&me.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function m(S,D,N,G){let H={},V=D.attributes,X=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let me=V[W];me===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));let Ee={};Ee.attribute=me,me&&me.data&&(Ee.data=me.data),H[W]=Ee,X++}r.attributes=H,r.attributesNum=X,r.index=G}function x(){let S=r.newAttributes;for(let D=0,N=S.length;D<N;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){let N=r.newAttributes,G=r.enabledAttributes,H=r.attributeDivisors;N[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),H[S]!==D&&(i.vertexAttribDivisor(S,D),H[S]=D)}function v(){let S=r.newAttributes,D=r.enabledAttributes;for(let N=0,G=D.length;N<G;N++)D[N]!==S[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function b(S,D,N,G,H,V,X){X===!0?i.vertexAttribIPointer(S,D,N,H,V):i.vertexAttribPointer(S,D,N,G,H,V)}function y(S,D,N,G){x();let H=G.attributes,V=N.getAttributes(),X=D.defaultAttributeValues;for(let K in V){let W=V[K];if(W.location>=0){let ee=H[K];if(ee===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){let me=ee.normalized,Ee=ee.itemSize,q=e.get(ee);if(q===void 0)continue;let ue=q.buffer,Ve=q.type,De=q.bytesPerElement,$=Ve===i.INT||Ve===i.UNSIGNED_INT||ee.gpuType===lc;if(ee.isInterleavedBufferAttribute){let se=ee.data,Q=se.stride,fe=ee.offset;if(se.isInstancedInterleavedBuffer){for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce,se.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ce=0;ce<W.locationSize;ce++)b(W.location+ce,Ee/W.locationSize,Ve,me,Q*De,(fe+Ee/W.locationSize*ce)*De,$)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)p(W.location+se,ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<W.locationSize;se++)g(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let se=0;se<W.locationSize;se++)b(W.location+se,Ee/W.locationSize,Ve,me,Ee*De,Ee/W.locationSize*se*De,$)}}else if(X!==void 0){let me=X[K];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(W.location,me);break;case 3:i.vertexAttrib3fv(W.location,me);break;case 4:i.vertexAttrib4fv(W.location,me);break;default:i.vertexAttrib1fv(W.location,me)}}}}v()}function A(){P();for(let S in n){let D=n[S];for(let N in D){let G=D[N];for(let H in G)h(G[H].object),delete G[H];delete D[N]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let N in D){let G=D[N];for(let H in G)h(G[H].object),delete G[H];delete D[N]}delete n[S.id]}function R(S){for(let D in n){let N=n[D];if(N[S.id]===void 0)continue;let G=N[S.id];for(let H in G)h(G[H].object),delete G[H];delete N[S.id]}}function P(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Pv(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==li&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function Lv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new un,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,b=v*4,y=p.clippingState||null;l.value=y,y=h(m,d,b,f);for(let A=0;A!==b;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Uv(i){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=Bs:a===oc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wr||a===oc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Jr=4,Gp=[.125,.215,.35,.446,.526,.582],Ws=20,Hu=new aa,Hp=new Ge,Wu=null,Xu=0,qu=0,Yu=!1,Hs=(1+Math.sqrt(5))/2,jr=1/Hs,Wp=[new M(-Hs,jr,0),new M(Hs,jr,0),new M(-jr,0,Hs),new M(jr,0,Hs),new M(0,Hs,-jr),new M(0,Hs,jr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Nv=new M,$r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Nv}=r;Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:qr,format:Cn,colorSpace:As,depthBuffer:!1},s=Xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(r)),this._blurMaterial=Ov(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,Hu)}_sceneToCubeUV(e,t,n,s,r){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hp),u.toneMapping=Fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Ht({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new ge(new Xe,x),p=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,p=!0):(x.color.copy(Hp),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;Xc(s,y*A,b>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Xc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wp[(s-r-1)%Wp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ws;g>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ws}`);let p=[],v=0;for(let R=0;R<Ws;++R){let P=R/x,w=Math.exp(-P*P/2);p.push(w),R===0?v+=w:R<g&&(v+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;let y=this._sizeLods[s],A=3*y*(s>b-Jr?s-b+Jr:0),E=4*(this._cubeSize-y);Xc(t,A,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Hu)}};function Fv(i){let e=[],t=[],n=[],s=i,r=i-Jr+1+Gp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Jr?l=Gp[o-i+Jr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),b=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,P=E>2?0:-1,w=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(w,x*m*E),b.set(d,g*m*E);let S=[E,E,E,E,E,E];y.set(S,p*m*E)}let A=new it;A.setAttribute("position",new St(v,x)),A.setAttribute("uv",new St(b,g)),A.setAttribute("faceIndex",new St(y,p)),e.push(A),s>Jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xp(i,e,t){let n=new gi(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ov(i,e,t){let n=new Float32Array(Ws),s=new M(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:id(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qp(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Yp(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function id(){return`

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
	`}function Bv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wr||l===oc,h=l===Bs||l===zs;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new $r(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new $r(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){let A=v[b+0],E=v[b+1],R=v[b+2];d.push(A,E,E,R,R,A)}}else if(m!==void 0){let v=m.array;x=m.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let A=b+0,E=b+1,R=b+2;d.push(A,E,E,R,R,A)}}else return;let g=new(Ou(d)?Bo:Oo)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hv(i,e,t){let n=new WeakMap,s=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*u),R=new Fo(E,y,A,u);R.type=ci,R.needsUpdate=!0;let P=b*4;for(let S=0;S<u;S++){let D=g[S],N=p[S],G=v[S],H=y*A*4*S;for(let V=0;V<D.count;V++){let X=V*P;f===!0&&(s.fromBufferAttribute(D,V),E[H+X+0]=s.x,E[H+X+1]=s.y,E[H+X+2]=s.z,E[H+X+3]=0),m===!0&&(s.fromBufferAttribute(N,V),E[H+X+4]=s.x,E[H+X+5]=s.y,E[H+X+6]=s.z,E[H+X+7]=0),x===!0&&(s.fromBufferAttribute(G,V),E[H+X+8]=s.x,E[H+X+9]=s.y,E[H+X+10]=s.z,E[H+X+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new oe(y,A)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dm=new fn,Zp=new qo(1,1),fm=new Fo,pm=new Rl,mm=new ko,jp=[],Jp=[],Kp=new Float32Array(16),$p=new Float32Array(9),Qp=new Float32Array(4);function Qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jp[s];if(r===void 0&&(r=new Float32Array(s),jp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zc(i,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function jv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),Jt(t,n)}}function Jv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;$p.set(n),i.uniformMatrix3fv(this.addr,!1,$p),Jt(t,n)}}function Kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;Kp.set(n),i.uniformMatrix4fv(this.addr,!1,Kp),Jt(t,n)}}function $v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function nM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function sM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function rM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function oM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zp.compareFunction=Uu,r=Zp):r=dm,t.setTexture2D(e||r,s)}function aM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pm,s)}function lM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mm,s)}function cM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fm,s)}function hM(i){switch(i){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Zv;case 35674:return jv;case 35675:return Jv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return Qv;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function uM(i,e){i.uniform1fv(this.addr,e)}function dM(i,e){let t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function fM(i,e){let t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function pM(i,e){let t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function mM(i,e){let t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gM(i,e){let t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xM(i,e){let t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _M(i,e){i.uniform1iv(this.addr,e)}function yM(i,e){i.uniform2iv(this.addr,e)}function vM(i,e){i.uniform3iv(this.addr,e)}function MM(i,e){i.uniform4iv(this.addr,e)}function bM(i,e){i.uniform1uiv(this.addr,e)}function SM(i,e){i.uniform2uiv(this.addr,e)}function wM(i,e){i.uniform3uiv(this.addr,e)}function TM(i,e){i.uniform4uiv(this.addr,e)}function EM(i,e,t){let n=this.cache,s=e.length,r=Zc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dm,r[o])}function AM(i,e,t){let n=this.cache,s=e.length,r=Zc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pm,r[o])}function CM(i,e,t){let n=this.cache,s=e.length,r=Zc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mm,r[o])}function RM(i,e,t){let n=this.cache,s=e.length,r=Zc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fm,r[o])}function IM(i){switch(i){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return xM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return vM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return SM;case 36295:return wM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}var ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}},Ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}},Ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function em(i,e){i.seq.push(e),i.map[e.id]=e}function PM(i,e,t){let n=i.name,s=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),o=Zu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){em(t,c===void 0?new ju(a,i,e):new Ju(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ku(a),em(t,u)),t=u}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);PM(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function tm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var DM=37297,LM=0;function UM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var nm=new $e;function NM(i){dt._getMatrix(nm,dt.workingColorSpace,i);let e=`mat3( ${nm.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function im(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+UM(i.getShaderSource(e),a)}else return r}function FM(i,e){let t=NM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OM(i,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="Cineon";break;case xp:t="ACESFilmic";break;case yp:t="AgX";break;case vp:t="Neutral";break;case _p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qc=new M;function BM(){dt.getLuminanceCoefficients(qc);let i=qc.x.toFixed(4),e=qc.y.toFixed(4),t=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function kM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _a(i){return i!==""}function sm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(GM,WM)}var HM=new Map;function WM(i,e){let t=st[e];if(t===void 0){let n=HM.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $u(t)}var XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(i){return i.replace(XM,qM)}function qM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function am(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function YM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function JM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function KM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $M(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=YM(t),c=ZM(t),h=jM(t),u=JM(t),d=KM(t),f=zM(t),m=kM(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_a).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(g=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?st.tonemapping_pars_fragment:"",t.toneMapping!==Fi?OM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,FM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),o=$u(o),o=sm(o,t),o=rm(o,t),a=$u(a),a=sm(a,t),a=rm(a,t),o=om(o),a=om(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=v+g+o,y=v+p+a,A=tm(s,s.VERTEX_SHADER,b),E=tm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(E)||"",V=N.trim(),X=G.trim(),K=H.trim(),W=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{let me=im(s,A,"vertex"),Ee=im(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+me+`
`+Ee)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||K==="")&&(ee=!1);ee&&(D.diagnostics={runnable:W,programLog:V,vertexShader:{log:X,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(E),P=new Kr(s,x),w=VM(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,DM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var QM=0,Qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}},ed=class{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}};function eb(i,e,t,n,s,r,o){let a=new Pr,l=new Qu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,D,N,G){let H=N.fog,V=G.geometry,X=w.isMeshStandardMaterial?N.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),W=K&&K.mapping===ua?K.image.height:null,ee=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ee=me!==void 0?me.length:0,q=0;V.morphAttributes.position!==void 0&&(q=1),V.morphAttributes.normal!==void 0&&(q=2),V.morphAttributes.color!==void 0&&(q=3);let ue,Ve,De,$;if(ee){let gt=vi[ee];ue=gt.vertexShader,Ve=gt.fragmentShader}else ue=w.vertexShader,Ve=w.fragmentShader,l.update(w),De=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);let se=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),fe=G.isInstancedMesh===!0,ce=G.isBatchedMesh===!0,ke=!!w.map,ut=!!w.matcap,L=!!K,he=!!w.aoMap,re=!!w.lightMap,te=!!w.bumpMap,ne=!!w.normalMap,Te=!!w.displacementMap,_e=!!w.emissiveMap,Ae=!!w.metalnessMap,Je=!!w.roughnessMap,Ye=w.anisotropy>0,C=w.clearcoat>0,_=w.dispersion>0,I=w.iridescence>0,O=w.sheen>0,j=w.transmission>0,k=Ye&&!!w.anisotropyMap,xe=C&&!!w.clearcoatMap,ie=C&&!!w.clearcoatNormalMap,pe=C&&!!w.clearcoatRoughnessMap,de=I&&!!w.iridescenceMap,J=I&&!!w.iridescenceThicknessMap,be=O&&!!w.sheenColorMap,Fe=O&&!!w.sheenRoughnessMap,ye=!!w.specularMap,Se=!!w.specularColorMap,ze=!!w.specularIntensityMap,U=j&&!!w.transmissionMap,Me=j&&!!w.thicknessMap,Ce=!!w.gradientMap,Pe=!!w.alphaMap,ve=w.alphaTest>0,le=!!w.alphaHash,Be=!!w.extensions,Qe=Fi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let It={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:ue,fragmentShader:Ve,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ce,batchingColor:ce&&G._colorsTexture!==null,instancing:fe,instancingColor:fe&&G.instanceColor!==null,instancingMorph:fe&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:ut,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:W,aoMap:he,lightMap:re,bumpMap:te,normalMap:ne,displacementMap:d&&Te,emissiveMap:_e,normalMapObjectSpace:ne&&w.normalMapType===wp,normalMapTangentSpace:ne&&w.normalMapType===Hc,metalnessMap:Ae,roughnessMap:Je,anisotropy:Ye,anisotropyMap:k,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:_,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:J,sheen:O,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:ye,specularColorMap:Se,specularIntensityMap:ze,transmission:j,transmissionMap:U,thicknessMap:Me,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Ts&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ve,alphaHash:le,combine:w.combine,mapUv:ke&&x(w.map.channel),aoMapUv:he&&x(w.aoMap.channel),lightMapUv:re&&x(w.lightMap.channel),bumpMapUv:te&&x(w.bumpMap.channel),normalMapUv:ne&&x(w.normalMap.channel),displacementMapUv:Te&&x(w.displacementMap.channel),emissiveMapUv:_e&&x(w.emissiveMap.channel),metalnessMapUv:Ae&&x(w.metalnessMap.channel),roughnessMapUv:Je&&x(w.roughnessMap.channel),anisotropyMapUv:k&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(w.sheenRoughnessMap.channel),specularMapUv:ye&&x(w.specularMap.channel),specularColorMapUv:Se&&x(w.specularColorMap.channel),specularIntensityMapUv:ze&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:Me&&x(w.thicknessMap.channel),alphaMapUv:Pe&&x(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ne||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(ke||Pe),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:_e&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Yt,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(S,w),b(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let S=m[w.type],D;if(S){let N=vi[S];D=Np.clone(N.uniforms)}else D=w.uniforms;return D}function A(w,S){let D;for(let N=0,G=h.length;N<G;N++){let H=h[N];if(H.cacheKey===S){D=H,++D.usedTimes;break}}return D===void 0&&(D=new $M(i,S,w,r),h.push(D)),D}function E(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function tb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||nb),n.length>1&&n.sort(d||lm),s.length>1&&s.sort(d||lm)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ib(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cm,i.set(n,[o])):s>=r.length?(o=new cm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ge};break;case"SpotLight":t={position:new M,direction:new M,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new M,halfWidth:new M,halfHeight:new M};break}return i[e.id]=t,t}}}function rb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ob=0;function ab(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lb(i){let e=new sb,t=rb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);let s=new M,r=new ct,o=new ct;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,b=0,y=0,A=0,E=0,R=0;c.sort(ab);for(let w=0,S=c.length;w<S;w++){let D=c[w],N=D.color,G=D.intensity,H=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=N.r*G,u+=N.g*G,d+=N.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],G);R++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=X,f++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(N).multiplyScalar(G),X.distance=H,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;let K=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,K.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,D.castShadow){let W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,y++}x++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(N).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=X,m++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=R,n.version=ob++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let b=c[p];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function hm(i){let e=new lb(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hm(i),e.set(s,[a])):r>=o.length?(a=new hm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`;function db(i,e,t){let n=new Or,s=new oe,r=new oe,o=new zt,a=new kl({depthPacking:Sp}),l=new Vl,c={},h=t.maxTextureSize,u={[ri]:an,[an]:ri,[Yt]:Yt},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:hb,fragmentShader:ub}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new it;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let p=this.type;this.render=function(E,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=p!==yi&&this.type===yi,H=p===yi&&this.type!==yi;for(let V=0,X=E.length;V<X;V++){let K=E[V],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ee=W.getFrameExtents();if(s.multiply(ee),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||G===!0||H===!0){let Ee=this.type!==yi?{minFilter:wn,magFilter:wn}:{};W.map!==null&&W.map.dispose(),W.map=new gi(s.x,s.y,Ee),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let me=W.getViewportCount();for(let Ee=0;Ee<me;Ee++){let q=W.getViewport(Ee);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o),W.updateMatrices(K,Ee),n=W.getFrustum(),y(R,P,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===yi&&v(W,P),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,D)};function v(E,R){let P=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function b(E,R,P,w){let S=null,D=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=S.uuid,G=R.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let V=H[G];V===void 0&&(V=S.clone(),H[G]=V,R.addEventListener("dispose",A)),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,w===yi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=i.properties.get(S);N.light=P}return S}function y(E,R,P,w,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===yi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let G=e.update(E),H=E.material;if(Array.isArray(H)){let V=G.groups;for(let X=0,K=V.length;X<K;X++){let W=V[X],ee=H[W.materialIndex];if(ee&&ee.visible){let me=b(E,ee,w,S);E.onBeforeShadow(i,E,R,P,G,me,W),i.renderBufferDirect(P,null,G,me,E,W),E.onAfterShadow(i,E,R,P,G,me,W)}}}else if(H.visible){let V=b(E,H,w,S);E.onBeforeShadow(i,E,R,P,G,V,null),i.renderBufferDirect(P,null,G,V,E,null),E.onAfterShadow(i,E,R,P,G,V,null)}}let N=E.children;for(let G=0,H=N.length;G<H;G++)y(N[G],R,P,w,S)}function A(E){E.target.removeEventListener("dispose",A);for(let P in c){let w=c[P],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var fb={[$l]:Ql,[ec]:ic,[tc]:sc,[Es]:nc,[Ql]:$l,[ic]:ec,[sc]:tc,[nc]:Es};function pb(i,e){function t(){let U=!1,Me=new zt,Ce=null,Pe=new zt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!U&&(i.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){U=ve},setClear:function(ve,le,Be,Qe,It){It===!0&&(ve*=Qe,le*=Qe,Be*=Qe),Me.set(ve,le,Be,Qe),Pe.equals(Me)===!1&&(i.clearColor(ve,le,Be,Qe),Pe.copy(Me))},reset:function(){U=!1,Ce=null,Pe.set(-1,0,0,0)}}}function n(){let U=!1,Me=!1,Ce=null,Pe=null,ve=null;return{setReversed:function(le){if(Me!==le){let Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Me=le;let Qe=ve;ve=null,this.setClear(Qe)}},getReversed:function(){return Me},setTest:function(le){le?se(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(le){Ce!==le&&!U&&(i.depthMask(le),Ce=le)},setFunc:function(le){if(Me&&(le=fb[le]),Pe!==le){switch(le){case $l:i.depthFunc(i.NEVER);break;case Ql:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=le}},setLocked:function(le){U=le},setClear:function(le){ve!==le&&(Me&&(le=1-le),i.clearDepth(le),ve=le)},reset:function(){U=!1,Ce=null,Pe=null,ve=null,Me=!1}}}function s(){let U=!1,Me=null,Ce=null,Pe=null,ve=null,le=null,Be=null,Qe=null,It=null;return{setTest:function(gt){U||(gt?se(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(gt){Me!==gt&&!U&&(i.stencilMask(gt),Me=gt)},setFunc:function(gt,Ei,di){(Ce!==gt||Pe!==Ei||ve!==di)&&(i.stencilFunc(gt,Ei,di),Ce=gt,Pe=Ei,ve=di)},setOp:function(gt,Ei,di){(le!==gt||Be!==Ei||Qe!==di)&&(i.stencilOp(gt,Ei,di),le=gt,Be=Ei,Qe=di)},setLocked:function(gt){U=gt},setClear:function(gt){It!==gt&&(i.clearStencil(gt),It=gt)},reset:function(){U=!1,Me=null,Ce=null,Pe=null,ve=null,le=null,Be=null,Qe=null,It=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,b=null,y=null,A=null,E=null,R=new Ge(0,0,0),P=0,w=!1,S=null,D=null,N=null,G=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=K>=2);let ee=null,me={},Ee=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ue=new zt().fromArray(Ee),Ve=new zt().fromArray(q);function De(U,Me,Ce,Pe){let ve=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Ce;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Me+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return le}let $={};$[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Es),te(!1),ne(bu),se(i.CULL_FACE),he(Ni);function se(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function fe(U,Me){return u[U]!==Me?(i.bindFramebuffer(U,Me),u[U]=Me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(U,Me){let Ce=f,Pe=!1;if(U){Ce=d.get(Me),Ce===void 0&&(Ce=[],d.set(Me,Ce));let ve=U.textures;if(Ce.length!==ve.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Be=ve.length;le<Be;le++)Ce[le]=i.COLOR_ATTACHMENT0+le;Ce.length=ve.length,Pe=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Ce)}function ke(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let ut={[$i]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};ut[Kf]=i.MIN,ut[$f]=i.MAX;let L={[Qf]:i.ZERO,[ep]:i.ONE,[tp]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[ap]:i.SRC_ALPHA_SATURATE,[rp]:i.DST_COLOR,[ip]:i.DST_ALPHA,[np]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[op]:i.ONE_MINUS_DST_COLOR,[sp]:i.ONE_MINUS_DST_ALPHA,[lp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[hp]:i.CONSTANT_ALPHA,[up]:i.ONE_MINUS_CONSTANT_ALPHA};function he(U,Me,Ce,Pe,ve,le,Be,Qe,It,gt){if(U===Ni){x===!0&&(Q(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),U!==Zf){if(U!==g||gt!==w){if((p!==$i||y!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,y=$i),gt)switch(U){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,b=null,A=null,E=null,R.set(0,0,0),P=0,g=U,w=gt}return}ve=ve||Me,le=le||Ce,Be=Be||Pe,(Me!==p||ve!==y)&&(i.blendEquationSeparate(ut[Me],ut[ve]),p=Me,y=ve),(Ce!==v||Pe!==b||le!==A||Be!==E)&&(i.blendFuncSeparate(L[Ce],L[Pe],L[le],L[Be]),v=Ce,b=Pe,A=le,E=Be),(Qe.equals(R)===!1||It!==P)&&(i.blendColor(Qe.r,Qe.g,Qe.b,It),R.copy(Qe),P=It),g=U,w=!1}function re(U,Me){U.side===Yt?Q(i.CULL_FACE):se(i.CULL_FACE);let Ce=U.side===an;Me&&(Ce=!Ce),te(Ce),U.blending===Ts&&U.transparent===!1?he(Ni):he(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Pe=U.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function ne(U){U!==Xf?(se(i.CULL_FACE),U!==D&&(U===bu?i.cullFace(i.BACK):U===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),D=U}function Te(U){U!==N&&(X&&i.lineWidth(U),N=U)}function _e(U,Me,Ce){U?(se(i.POLYGON_OFFSET_FILL),(G!==Me||H!==Ce)&&(i.polygonOffset(Me,Ce),G=Me,H=Ce)):Q(i.POLYGON_OFFSET_FILL)}function Ae(U){U?se(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Je(U){U===void 0&&(U=i.TEXTURE0+V-1),ee!==U&&(i.activeTexture(U),ee=U)}function Ye(U,Me,Ce){Ce===void 0&&(ee===null?Ce=i.TEXTURE0+V-1:Ce=ee);let Pe=me[Ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[Ce]=Pe),(Pe.type!==U||Pe.texture!==Me)&&(ee!==Ce&&(i.activeTexture(Ce),ee=Ce),i.bindTexture(U,Me||$[U]),Pe.type=U,Pe.texture=Me)}function C(){let U=me[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ue.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Fe(U){Ve.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function ye(U,Me){let Ce=c.get(Me);Ce===void 0&&(Ce=new WeakMap,c.set(Me,Ce));let Pe=Ce.get(U);Pe===void 0&&(Pe=i.getUniformBlockIndex(Me,U.name),Ce.set(U,Pe))}function Se(U,Me){let Pe=c.get(Me).get(U);l.get(Me)!==Pe&&(i.uniformBlockBinding(Me,Pe,U.__bindingPointIndex),l.set(Me,Pe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,me={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,b=null,y=null,A=null,E=null,R=new Ge(0,0,0),P=0,w=!1,S=null,D=null,N=null,G=null,H=null,ue.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Q,bindFramebuffer:fe,drawBuffers:ce,useProgram:ke,setBlending:he,setMaterial:re,setFlipSided:te,setCullFace:ne,setLineWidth:Te,setPolygonOffset:_e,setScissorTest:Ae,activeTexture:Je,bindTexture:Ye,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:de,texImage3D:J,updateUBOMapping:ye,uniformBlockBinding:Se,texStorage2D:ie,texStorage3D:pe,texSubImage2D:O,texSubImage3D:j,compressedTexSubImage2D:k,compressedTexSubImage3D:xe,scissor:be,viewport:Fe,reset:ze}}function mb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,_){return f?new OffscreenCanvas(C,_):Cr("canvas")}function x(C,_,I){let O=1,j=Ye(C);if((j.width>I||j.height>I)&&(O=I/Math.max(j.width,j.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let k=Math.floor(O*j.width),xe=Math.floor(O*j.height);u===void 0&&(u=m(k,xe));let ie=_?m(k,xe):u;return ie.width=k,ie.height=xe,ie.getContext("2d").drawImage(C,0,0,k,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+xe+")."),ie}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,_,I,O,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let k=_;if(_===i.RED&&(I===i.FLOAT&&(k=i.R32F),I===i.HALF_FLOAT&&(k=i.R16F),I===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.R8UI),I===i.UNSIGNED_SHORT&&(k=i.R16UI),I===i.UNSIGNED_INT&&(k=i.R32UI),I===i.BYTE&&(k=i.R8I),I===i.SHORT&&(k=i.R16I),I===i.INT&&(k=i.R32I)),_===i.RG&&(I===i.FLOAT&&(k=i.RG32F),I===i.HALF_FLOAT&&(k=i.RG16F),I===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RG8UI),I===i.UNSIGNED_SHORT&&(k=i.RG16UI),I===i.UNSIGNED_INT&&(k=i.RG32UI),I===i.BYTE&&(k=i.RG8I),I===i.SHORT&&(k=i.RG16I),I===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGB8UI),I===i.UNSIGNED_SHORT&&(k=i.RGB16UI),I===i.UNSIGNED_INT&&(k=i.RGB32UI),I===i.BYTE&&(k=i.RGB8I),I===i.SHORT&&(k=i.RGB16I),I===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),I===i.UNSIGNED_INT&&(k=i.RGBA32UI),I===i.BYTE&&(k=i.RGBA8I),I===i.SHORT&&(k=i.RGBA16I),I===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){let xe=j?Uo:dt.getTransfer(O);I===i.FLOAT&&(k=i.RGBA32F),I===i.HALF_FLOAT&&(k=i.RGBA16F),I===i.UNSIGNED_BYTE&&(k=xe===bt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(C,_){let I;return C?_===null||_===rs||_===Yr?I=i.DEPTH24_STENCIL8:_===ci?I=i.DEPTH32F_STENCIL8:_===Xr&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===rs||_===Yr?I=i.DEPTH_COMPONENT24:_===ci?I=i.DEPTH_COMPONENT32F:_===Xr&&(I=i.DEPTH_COMPONENT16),I}function A(C,_){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function E(C){let _=C.target;_.removeEventListener("dispose",E),P(_),_.isVideoTexture&&h.delete(_)}function R(C){let _=C.target;_.removeEventListener("dispose",R),S(_)}function P(C){let _=n.get(C);if(_.__webglInit===void 0)return;let I=C.source,O=d.get(I);if(O){let j=O[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(C),Object.keys(O).length===0&&d.delete(I)}n.remove(C)}function w(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let I=C.source,O=d.get(I);delete O[_.__cacheKey],o.memory.textures--}function S(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let j=0;j<_.__webglFramebuffer[O].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[O][j]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let I=C.textures;for(let O=0,j=I.length;O<j;O++){let k=n.get(I[O]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(I[O])}n.remove(C)}let D=0;function N(){D=0}function G(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function H(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function V(C,_){let I=n.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let O=C.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,C,_);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function X(C,_){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){$(I,C,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function K(C,_){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){$(I,C,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function W(C,_){let I=n.get(C);if(C.version>0&&I.__version!==C.version){se(I,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}let ee={[On]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},me={[wn]:i.NEAREST,[Mp]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[ac]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Ee={[Tp]:i.NEVER,[Pp]:i.ALWAYS,[Ep]:i.LESS,[Uu]:i.LEQUAL,[Ap]:i.EQUAL,[Ip]:i.GEQUAL,[Cp]:i.GREATER,[Rp]:i.NOTEQUAL};function q(C,_){if(_.type===ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===ac||_.magFilter===da||_.magFilter===An||_.minFilter===rn||_.minFilter===ac||_.minFilter===da||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===wn||_.minFilter!==da&&_.minFilter!==An||_.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ue(C,_){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",E));let O=_.source,j=d.get(O);j===void 0&&(j={},d.set(O,j));let k=H(_);if(k!==C.__cacheKey){j[k]===void 0&&(j[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[k].usedTimes++;let xe=j[C.__cacheKey];xe!==void 0&&(j[C.__cacheKey].usedTimes--,xe.usedTimes===0&&w(_)),C.__cacheKey=k,C.__webglTexture=j[k].texture}return I}function Ve(C,_,I){return Math.floor(Math.floor(C/I)/_)}function De(C,_,I,O){let k=C.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,O,_.data);else{k.sort((J,be)=>J.start-be.start);let xe=0;for(let J=1;J<k.length;J++){let be=k[xe],Fe=k[J],ye=be.start+be.count,Se=Ve(Fe.start,_.width,4),ze=Ve(be.start,_.width,4);Fe.start<=ye+1&&Se===ze&&Ve(Fe.start+Fe.count-1,_.width,4)===Se?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++xe,k[xe]=Fe)}k.length=xe+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),pe=i.getParameter(i.UNPACK_SKIP_PIXELS),de=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let J=0,be=k.length;J<be;J++){let Fe=k[J],ye=Math.floor(Fe.start/4),Se=Math.ceil(Fe.count/4),ze=ye%_.width,U=Math.floor(ye/_.width),Me=Se,Ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ze,U,Me,Ce,I,O,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function $(C,_,I){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let j=ue(C,_),k=_.source;t.bindTexture(O,C.__webglTexture,i.TEXTURE0+I);let xe=n.get(k);if(k.version!==xe.__version||j===!0){t.activeTexture(i.TEXTURE0+I);let ie=dt.getPrimaries(dt.workingColorSpace),pe=_.colorSpace===Oi?null:dt.getPrimaries(_.colorSpace),de=_.colorSpace===Oi||ie===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let J=x(_.image,!1,s.maxTextureSize);J=Je(_,J);let be=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),ye=b(_.internalFormat,be,Fe,_.colorSpace,_.isVideoTexture);q(O,_);let Se,ze=_.mipmaps,U=_.isVideoTexture!==!0,Me=xe.__version===void 0||j===!0,Ce=k.dataReady,Pe=A(_,J);if(_.isDepthTexture)ye=y(_.format===Zr,_.type),Me&&(U?t.texStorage2D(i.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ye,J.width,J.height,0,be,Fe,null));else if(_.isDataTexture)if(ze.length>0){U&&Me&&t.texStorage2D(i.TEXTURE_2D,Pe,ye,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],U?Ce&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,ve,ye,Se.width,Se.height,0,be,Fe,Se.data);_.generateMipmaps=!1}else U?(Me&&t.texStorage2D(i.TEXTURE_2D,Pe,ye,J.width,J.height),Ce&&De(_,J,be,Fe)):t.texImage2D(i.TEXTURE_2D,0,ye,J.width,J.height,0,be,Fe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ye,ze[0].width,ze[0].height,J.depth);for(let ve=0,le=ze.length;ve<le;ve++)if(Se=ze[ve],_.format!==Cn)if(be!==null)if(U){if(Ce)if(_.layerUpdates.size>0){let Be=Gu(Se.width,Se.height,_.format,_.type);for(let Qe of _.layerUpdates){let It=Se.data.subarray(Qe*Be/Se.data.BYTES_PER_ELEMENT,(Qe+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Qe,Se.width,Se.height,1,be,It)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,be,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,ye,Se.width,Se.height,J.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,be,Fe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,ye,Se.width,Se.height,J.depth,0,be,Fe,Se.data)}else{U&&Me&&t.texStorage2D(i.TEXTURE_2D,Pe,ye,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],_.format!==Cn?be!==null?U?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Ce&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,ve,ye,Se.width,Se.height,0,be,Fe,Se.data)}else if(_.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ye,J.width,J.height,J.depth),Ce)if(_.layerUpdates.size>0){let ve=Gu(J.width,J.height,_.format,_.type);for(let le of _.layerUpdates){let Be=J.data.subarray(le*ve/J.data.BYTES_PER_ELEMENT,(le+1)*ve/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,be,Fe,Be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,be,Fe,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,be,Fe,J.data);else if(_.isData3DTexture)U?(Me&&t.texStorage3D(i.TEXTURE_3D,Pe,ye,J.width,J.height,J.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,be,Fe,J.data)):t.texImage3D(i.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,be,Fe,J.data);else if(_.isFramebufferTexture){if(Me)if(U)t.texStorage2D(i.TEXTURE_2D,Pe,ye,J.width,J.height);else{let ve=J.width,le=J.height;for(let Be=0;Be<Pe;Be++)t.texImage2D(i.TEXTURE_2D,Be,ye,ve,le,0,be,Fe,null),ve>>=1,le>>=1}}else if(ze.length>0){if(U&&Me){let ve=Ye(ze[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ye,ve.width,ve.height)}for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],U?Ce&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,be,Fe,Se):t.texImage2D(i.TEXTURE_2D,ve,ye,be,Fe,Se);_.generateMipmaps=!1}else if(U){if(Me){let ve=Ye(J);t.texStorage2D(i.TEXTURE_2D,Pe,ye,ve.width,ve.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Fe,J)}else t.texImage2D(i.TEXTURE_2D,0,ye,be,Fe,J);g(_)&&p(O),xe.__version=k.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function se(C,_,I){if(_.image.length!==6)return;let O=ue(C,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+I);let k=n.get(j);if(j.version!==k.__version||O===!0){t.activeTexture(i.TEXTURE0+I);let xe=dt.getPrimaries(dt.workingColorSpace),ie=_.colorSpace===Oi?null:dt.getPrimaries(_.colorSpace),pe=_.colorSpace===Oi||xe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!de&&!J?be[le]=x(_.image[le],!0,s.maxCubemapSize):be[le]=J?_.image[le].image:_.image[le],be[le]=Je(_,be[le]);let Fe=be[0],ye=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),ze=b(_.internalFormat,ye,Se,_.colorSpace),U=_.isVideoTexture!==!0,Me=k.__version===void 0||O===!0,Ce=j.dataReady,Pe=A(_,Fe);q(i.TEXTURE_CUBE_MAP,_);let ve;if(de){U&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,ze,Fe.width,Fe.height);for(let le=0;le<6;le++){ve=be[le].mipmaps;for(let Be=0;Be<ve.length;Be++){let Qe=ve[Be];_.format!==Cn?ye!==null?U?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,Qe.width,Qe.height,ye,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,Qe.width,Qe.height,ye,Se,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,Qe.width,Qe.height,0,ye,Se,Qe.data)}}}else{if(ve=_.mipmaps,U&&Me){ve.length>0&&Pe++;let le=Ye(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,ze,le.width,le.height)}for(let le=0;le<6;le++)if(J){U?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,ye,Se,be[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,be[le].width,be[le].height,0,ye,Se,be[le].data);for(let Be=0;Be<ve.length;Be++){let It=ve[Be].image[le].image;U?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,It.width,It.height,ye,Se,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,It.width,It.height,0,ye,Se,It.data)}}else{U?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye,Se,be[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,ye,Se,be[le]);for(let Be=0;Be<ve.length;Be++){let Qe=ve[Be];U?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,ye,Se,Qe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,ye,Se,Qe.image[le])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),k.__version=j.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Q(C,_,I,O,j,k){let xe=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),pe=b(I.internalFormat,xe,ie,I.colorSpace),de=n.get(_),J=n.get(I);if(J.__renderTarget=_,!de.__hasExternalTextures){let be=Math.max(1,_.width>>k),Fe=Math.max(1,_.height>>k);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,k,pe,be,Fe,_.depth,0,xe,ie,null):t.texImage2D(j,k,pe,be,Fe,0,xe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,j,J.__webglTexture,0,Te(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,j,J.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(C,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let O=_.depthTexture,j=O&&O.isDepthTexture?O.type:null,k=y(_.stencilBuffer,j),xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=Te(_);_e(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,k,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,C)}else{let O=_.textures;for(let j=0;j<O.length;j++){let k=O[j],xe=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),pe=b(k.internalFormat,xe,ie,k.colorSpace),de=Te(_);I&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,_.width,_.height):_e(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let j=O.__webglTexture,k=Te(_);if(_.depthTexture.format===Er)_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Zr)_e(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(C){let _=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let O=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",j)};O.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=O}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let O=C.texture.mipmaps;O&&O.length>0?ce(_.__webglFramebuffer[0],C):ce(_.__webglFramebuffer,C)}else if(I){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[O],C,!1);else{let j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}else{let O=C.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,_,I){let O=n.get(C);_!==void 0&&Q(O.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ke(C)}function L(C){let _=C.texture,I=n.get(C),O=n.get(_);C.addEventListener("dispose",R);let j=C.textures,k=C.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,o.memory.textures++),k){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let pe=0;pe<_.mipmaps.length;pe++)I.__webglFramebuffer[ie][pe]=i.createFramebuffer()}else I.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)I.__webglFramebuffer[ie]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ie=0,pe=j.length;ie<pe;ie++){let de=n.get(j[ie]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&_e(C)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){let pe=j[ie];I.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);let de=r.convert(pe.format,pe.colorSpace),J=r.convert(pe.type),be=b(pe.internalFormat,de,J,pe.colorSpace,C.isXRRenderTarget===!0),Fe=Te(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,be,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(I.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),q(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Q(I.__webglFramebuffer[ie][pe],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else Q(I.__webglFramebuffer[ie],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ie=0,pe=j.length;ie<pe;ie++){let de=j[ie],J=n.get(de),be=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,J.__webglTexture),q(be,de),Q(I.__webglFramebuffer,C,de,i.COLOR_ATTACHMENT0+ie,be,0),g(de)&&p(be)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,O.__webglTexture),q(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Q(I.__webglFramebuffer[pe],C,_,i.COLOR_ATTACHMENT0,ie,pe);else Q(I.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,ie,0);g(_)&&p(ie),t.unbindTexture()}C.depthBuffer&&ke(C)}function he(C){let _=C.textures;for(let I=0,O=_.length;I<O;I++){let j=_[I];if(g(j)){let k=v(C),xe=n.get(j).__webglTexture;t.bindTexture(k,xe),p(k),t.unbindTexture()}}}let re=[],te=[];function ne(C){if(C.samples>0){if(_e(C)===!1){let _=C.textures,I=C.width,O=C.height,j=i.COLOR_BUFFER_BIT,k=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),ie=_.length>1;if(ie)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let pe=C.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let J=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,I,O,0,0,I,O,j,i.NEAREST),l===!0&&(re.length=0,te.length=0,re.push(i.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(k),te.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let J=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Te(C){return Math.min(s.maxSamples,C.samples)}function _e(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ae(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Je(C,_){let I=C.colorSpace,O=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==As&&I!==Oi&&(dt.getTransfer(I)===bt?(O!==Cn||j!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=ut,this.setupRenderTarget=L,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=_e}function gb(i,e){function t(n,s=Oi){let r,o=dt.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Cu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Du)return i.RGB;if(n===Cn)return i.RGBA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Lu)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===vc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Cc||n===Rc||n===Ic||n===Pc||n===Dc||n===Lc||n===Uc||n===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Oc||n===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===kc||n===Vc||n===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ai({vertexShader:xb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new td,p={},v=t.getContextAttributes(),b=null,y=null,A=[],E=[],R=new oe,P=null,w=new hn;w.viewport=new zt;let S=new hn;S.viewport=new zt;let D=[w,S],N=new Kl,G=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=A[$];return se===void 0&&(se=new Dr,A[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=A[$];return se===void 0&&(se=new Dr,A[$]=se),se.getGripSpace()},this.getHand=function($){let se=A[$];return se===void 0&&(se=new Dr,A[$]=se),se.getHandSpace()};function V($){let se=E.indexOf($.inputSource);if(se===-1)return;let Q=A[se];Q!==void 0&&(Q.update($.inputSource,$.frame,c||o),Q.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let $=0;$<A.length;$++){let se=E[$];se!==null&&(E[$]=null,A[$].disconnect(se))}G=null,H=null,g.reset();for(let $ in p)delete p[$];e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,fe=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?Zr:Er,fe=v.stencil?Yr:rs);let ke={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new gi(d.textureWidth,d.textureHeight,{format:Cn,type:li,depthTexture:new qo(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new gi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let se=0;se<$.removed.length;se++){let Q=$.removed[se],fe=E.indexOf(Q);fe>=0&&(E[fe]=null,A[fe].disconnect(Q))}for(let se=0;se<$.added.length;se++){let Q=$.added[se],fe=E.indexOf(Q);if(fe===-1){for(let ke=0;ke<A.length;ke++)if(ke>=E.length){E.push(Q),fe=ke;break}else if(E[ke]===null){E[ke]=Q,fe=ke;break}if(fe===-1)break}let ce=A[fe];ce&&ce.connect(Q)}}let W=new M,ee=new M;function me($,se,Q){W.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Q.matrixWorld);let fe=W.distanceTo(ee),ce=se.projectionMatrix.elements,ke=Q.projectionMatrix.elements,ut=ce[14]/(ce[10]-1),L=ce[14]/(ce[10]+1),he=(ce[9]+1)/ce[5],re=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],ne=(ke[8]+1)/ke[0],Te=ut*te,_e=ut*ne,Ae=fe/(-te+ne),Je=Ae*-te;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Je),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ce[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ye=ut+Ae,C=L+Ae,_=Te-Je,I=_e+(fe-Je),O=he*L/C*Ye,j=re*L/C*Ye;$.projectionMatrix.makePerspective(_,I,O,j,Ye,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let se=$.near,Q=$.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),N.near=S.near=w.near=se,N.far=S.far=w.far=Q,(G!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,H=N.far),N.layers.mask=$.layers.mask|6,w.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let fe=$.parent,ce=N.cameras;Ee(N,fe);for(let ke=0;ke<ce.length;ke++)Ee(ce[ke],fe);ce.length===2?me(N,w,S):N.projectionMatrix.copy(w.projectionMatrix),q($,N,fe)};function q($,se,Q){Q===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Q.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ar*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function($){return p[$]};let ue=null;function Ve($,se){if(h=se.getViewerPose(c||o),m=se,h!==null){let Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let fe=!1;Q.length!==N.cameras.length&&(N.cameras.length=0,fe=!0);for(let L=0;L<Q.length;L++){let he=Q[L],re=null;if(f!==null)re=f.getViewport(he);else{let ne=u.getViewSubImage(d,he);re=ne.viewport,L===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let te=D[L];te===void 0&&(te=new hn,te.layers.enable(L),te.viewport=new zt,D[L]=te),te.matrix.fromArray(he.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(he.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),L===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),fe===!0&&N.cameras.push(te)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let L=u.getDepthInformation(Q[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Q.length;L++){let he=Q[L].camera;if(he){let re=p[he];re||(re=new Yo,p[he]=re);let te=u.getCameraImage(he);re.sourceTexture=te}}}}for(let Q=0;Q<A.length;Q++){let fe=E[Q],ce=A[Q];fe!==null&&ce!==void 0&&ce.update(fe,se,c||o)}ue&&ue($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let De=new um;De.setAnimationLoop(Ve),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}},Gs=new Xt,yb=new ct;function vb(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Bu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,Gs.copy(y),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),g.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(Gs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let A=b.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let b=u();v.__bindingPointIndex=b;let y=i.createBuffer(),A=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],y=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,R=y.length;E<R;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,S=P.length;w<S;w++){let D=P[w];if(f(D,E,w,A)===!0){let N=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],H=0;for(let V=0;V<G.length;V++){let X=G[V],K=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,N+H,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,y,A){let E=v.value,R=b+"_"+y;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{let P=A[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(v){let b=v.uniforms,y=0,A=16;for(let R=0,P=b.length;R<P;R++){let w=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,D=w.length;S<D;S++){let N=w[S],G=Array.isArray(N.value)?N.value:[N.value];for(let H=0,V=G.length;H<V;H++){let X=G[H],K=x(X),W=y%A,ee=W%K.boundary,me=W+ee;y+=ee,me!==0&&A-me<K.storage&&(y+=A-me),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=K.storage}}}let E=y%A;return E>0&&(y+=A-E),v.__size=y,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Yc=class{constructor(e={}){let{canvas:t=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=xt;let E=0,R=0,P=null,w=-1,S=null,D=new zt,N=new zt,G=null,H=new Ge(0),V=0,X=t.width,K=t.height,W=1,ee=null,me=null,Ee=new zt(0,0,X,K),q=new zt(0,0,X,K),ue=!1,Ve=new Or,De=!1,$=!1,se=new ct,Q=new M,fe=new zt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function ut(){return P===null?W:1}let L=n;function he(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){let B="webgl2";if(L=he(B,T),L===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,te,ne,Te,_e,Ae,Je,Ye,C,_,I,O,j,k,xe,ie,pe,de,J,be,Fe,ye,Se,ze;function U(){re=new zv(L),re.init(),ye=new gb(L,re),te=new Dv(L,re,e,ye),ne=new pb(L,re),te.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Te=new Gv(L),_e=new tb,Ae=new mb(L,re,ne,_e,te,ye,Te),Je=new Uv(y),Ye=new Bv(y),C=new Zx(L),Se=new Iv(L,C),_=new kv(L,C,Te,Se),I=new Wv(L,_,C,Te),J=new Hv(L,te,Ae),ie=new Lv(_e),O=new eb(y,Je,Ye,re,te,Se,ie),j=new vb(y,_e),k=new ib,xe=new cb(re),de=new Rv(y,Je,Ye,ne,I,f,l),pe=new db(y,I,te),ze=new Mb(L,Te,te,ne),be=new Pv(L,re,Te),Fe=new Vv(L,re,Te),Te.programs=O.programs,y.capabilities=te,y.extensions=re,y.properties=_e,y.renderLists=k,y.shadowMap=pe,y.state=ne,y.info=Te}U();let Me=new nd(y,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,B,Y=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=B,t.width=Math.floor(T*W),t.height=Math.floor(B*W),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*W,K*W).floor()},this.setDrawingBufferSize=function(T,B,Y){X=T,K=B,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,B,Y,Z){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,B,Y,Z),ne.viewport(D.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,B,Y,Z){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,B,Y,Z),ne.scissor(N.copy(q).multiplyScalar(W).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){ne.setScissorTest(ue=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Y=!0){let Z=0;if(T){let z=!1;if(P!==null){let we=P.texture.format;z=we===pc||we===fc||we===dc}if(z){let we=P.texture.type,Ie=we===li||we===rs||we===Xr||we===Yr||we===cc||we===hc,Oe=de.getClearColor(),Le=de.getClearAlpha(),qe=Oe.r,Ze=Oe.g,He=Oe.b;Ie?(m[0]=qe,m[1]=Ze,m[2]=He,m[3]=Le,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=qe,x[1]=Ze,x[2]=He,x[3]=Le,L.clearBufferiv(L.COLOR,0,x))}else Z|=L.COLOR_BUFFER_BIT}B&&(Z|=L.DEPTH_BUFFER_BIT),Y&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),de.dispose(),k.dispose(),xe.dispose(),_e.dispose(),Je.dispose(),Ye.dispose(),I.dispose(),Se.dispose(),ze.dispose(),O.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",di),Me.removeEventListener("sessionend",nf),_s.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=Te.autoReset,B=pe.enabled,Y=pe.autoUpdate,Z=pe.needsUpdate,z=pe.type;U(),Te.autoReset=T,pe.enabled=B,pe.autoUpdate=Y,pe.needsUpdate=Z,pe.type=z}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){let B=T.target;B.removeEventListener("dispose",le),Be(B)}function Be(T){Qe(T),_e.remove(T)}function Qe(T){let B=_e.get(T).programs;B!==void 0&&(B.forEach(function(Y){O.releaseProgram(Y)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,Z,z,we){B===null&&(B=ce);let Ie=z.isMesh&&z.matrixWorld.determinant()<0,Oe=m0(T,B,Y,Z,z);ne.setMaterial(Z,Ie);let Le=Y.index,qe=1;if(Z.wireframe===!0){if(Le=_.getWireframeAttribute(Y),Le===void 0)return;qe=2}let Ze=Y.drawRange,He=Y.attributes.position,lt=Ze.start*qe,Et=(Ze.start+Ze.count)*qe;we!==null&&(lt=Math.max(lt,we.start*qe),Et=Math.min(Et,(we.start+we.count)*qe)),Le!==null?(lt=Math.max(lt,0),Et=Math.min(Et,Le.count)):He!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,He.count));let Gt=Et-lt;if(Gt<0||Gt===1/0)return;Se.setup(z,Z,Oe,Y,Le);let Pt,Ct=be;if(Le!==null&&(Pt=C.get(Le),Ct=Fe,Ct.setIndex(Pt)),z.isMesh)Z.wireframe===!0?(ne.setLineWidth(Z.wireframeLinewidth*ut()),Ct.setMode(L.LINES)):Ct.setMode(L.TRIANGLES);else if(z.isLine){let We=Z.linewidth;We===void 0&&(We=1),ne.setLineWidth(We*ut()),z.isLineSegments?Ct.setMode(L.LINES):z.isLineLoop?Ct.setMode(L.LINE_LOOP):Ct.setMode(L.LINE_STRIP)}else z.isPoints?Ct.setMode(L.POINTS):z.isSprite&&Ct.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let We=z._multiDrawStarts,Ft=z._multiDrawCounts,ft=z._multiDrawCount,Ln=Le?C.get(Le).bytesPerElement:1,sr=_e.get(Z).currentProgram.getUniforms();for(let Un=0;Un<ft;Un++)sr.setValue(L,"_gl_DrawID",Un),Ct.render(We[Un]/Ln,Ft[Un])}else if(z.isInstancedMesh)Ct.renderInstances(lt,Gt,z.count);else if(Y.isInstancedBufferGeometry){let We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ft=Math.min(Y.instanceCount,We);Ct.renderInstances(lt,Gt,Ft)}else Ct.render(lt,Gt)};function It(T,B,Y){T.transparent===!0&&T.side===Yt&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Wa(T,B,Y),T.side=ri,T.needsUpdate=!0,Wa(T,B,Y),T.side=Yt):Wa(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),p=xe.get(Y),p.init(B),b.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==Y&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Z=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let we=z.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){let Oe=we[Ie];It(Oe,Y,z),Z.add(Oe)}else It(we,Y,z),Z.add(we)}),p=b.pop(),Z},this.compileAsync=function(T,B,Y=null){let Z=this.compile(T,B,Y);return new Promise(z=>{function we(){if(Z.forEach(function(Ie){_e.get(Ie).currentProgram.isReady()&&Z.delete(Ie)}),Z.size===0){z(T);return}setTimeout(we,10)}re.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gt=null;function Ei(T){gt&&gt(T)}function di(){_s.stop()}function nf(){_s.start()}let _s=new um;_s.setAnimationLoop(Ei),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(T){gt=T,Me.setAnimationLoop(T),T===null?_s.stop():_s.start()},Me.addEventListener("sessionstart",di),Me.addEventListener("sessionend",nf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,P),p=xe.get(T,b.length),p.init(B),b.push(p),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ve.setFromProjectionMatrix(se,si,B.reversedDepth),$=this.localClippingEnabled,De=ie.init(this.clippingPlanes,$),g=k.get(T,v.length),g.init(),v.push(g),Me.enabled===!0&&Me.isPresenting===!0){let we=y.xr.getDepthSensingMesh();we!==null&&Uh(we,B,-1/0,y.sortObjects)}Uh(T,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ee,me),ke=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ke&&de.addToRenderList(g,T),this.info.render.frame++,De===!0&&ie.beginShadows();let Y=p.state.shadowsArray;pe.render(Y,T,B),De===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let we=B.cameras;if(z.length>0)for(let Ie=0,Oe=we.length;Ie<Oe;Ie++){let Le=we[Ie];rf(Z,z,T,Le)}ke&&de.render(T);for(let Ie=0,Oe=we.length;Ie<Oe;Ie++){let Le=we[Ie];sf(g,T,Le,Le.viewport)}}else z.length>0&&rf(Z,z,T,B),ke&&de.render(T),sf(g,T,B);P!==null&&R===0&&(Ae.updateMultisampleRenderTarget(P),Ae.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,B),Se.resetDefaultState(),w=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],De===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Uh(T,B,Y,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){Z&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);let Ie=I.update(T),Oe=T.material;Oe.visible&&g.push(T,Ie,Oe,Y,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){let Ie=I.update(T),Oe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),fe.copy(Ie.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Oe)){let Le=Ie.groups;for(let qe=0,Ze=Le.length;qe<Ze;qe++){let He=Le[qe],lt=Oe[He.materialIndex];lt&&lt.visible&&g.push(T,Ie,lt,Y,fe.z,He)}}else Oe.visible&&g.push(T,Ie,Oe,Y,fe.z,null)}}let we=T.children;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++)Uh(we[Ie],B,Y,Z)}function sf(T,B,Y,Z){let z=T.opaque,we=T.transmissive,Ie=T.transparent;p.setupLightsView(Y),De===!0&&ie.setGlobalState(y.clippingPlanes,Y),Z&&ne.viewport(D.copy(Z)),z.length>0&&Ha(z,B,Y),we.length>0&&Ha(we,B,Y),Ie.length>0&&Ha(Ie,B,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function rf(T,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new gi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?qr:li,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let we=p.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||D;we.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),Le=y.getActiveCubeFace(),qe=y.getActiveMipmapLevel();y.setRenderTarget(we),y.getClearColor(H),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),ke&&de.render(Y);let Ze=y.toneMapping;y.toneMapping=Fi;let He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),De===!0&&ie.setGlobalState(y.clippingPlanes,Z),Ha(T,Y,Z),Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we),re.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Et=0,Gt=B.length;Et<Gt;Et++){let Pt=B[Et],Ct=Pt.object,We=Pt.geometry,Ft=Pt.material,ft=Pt.group;if(Ft.side===Yt&&Ct.layers.test(Z.layers)){let Ln=Ft.side;Ft.side=an,Ft.needsUpdate=!0,of(Ct,Y,Z,We,Ft,ft),Ft.side=Ln,Ft.needsUpdate=!0,lt=!0}}lt===!0&&(Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we))}y.setRenderTarget(Oe,Le,qe),y.setClearColor(H,V),He!==void 0&&(Z.viewport=He),y.toneMapping=Ze}function Ha(T,B,Y){let Z=B.isScene===!0?B.overrideMaterial:null;for(let z=0,we=T.length;z<we;z++){let Ie=T[z],Oe=Ie.object,Le=Ie.geometry,qe=Ie.group,Ze=Ie.material;Ze.allowOverride===!0&&Z!==null&&(Ze=Z),Oe.layers.test(Y.layers)&&of(Oe,B,Y,Le,Ze,qe)}}function of(T,B,Y,Z,z,we){T.onBeforeRender(y,B,Y,Z,z,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,B,Y,Z,T,we),z.transparent===!0&&z.side===Yt&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,y.renderBufferDirect(Y,B,Z,z,T,we),z.side=ri,z.needsUpdate=!0,y.renderBufferDirect(Y,B,Z,z,T,we),z.side=Yt):y.renderBufferDirect(Y,B,Z,z,T,we),T.onAfterRender(y,B,Y,Z,z,we)}function Wa(T,B,Y){B.isScene!==!0&&(B=ce);let Z=_e.get(T),z=p.state.lights,we=p.state.shadowsArray,Ie=z.state.version,Oe=O.getParameters(T,z.state,we,B,Y),Le=O.getProgramCacheKey(Oe),qe=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?Ye:Je).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",le),qe=new Map,Z.programs=qe);let Ze=qe.get(Le);if(Ze!==void 0){if(Z.currentProgram===Ze&&Z.lightsStateVersion===Ie)return lf(T,Oe),Ze}else Oe.uniforms=O.getUniforms(T),T.onBeforeCompile(Oe,y),Ze=O.acquireProgram(Oe,Le),qe.set(Le,Ze),Z.uniforms=Oe.uniforms;let He=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=ie.uniform),lf(T,Oe),Z.needsLights=x0(T),Z.lightsStateVersion=Ie,Z.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Ze,Z.uniformsList=null,Ze}function af(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Kr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function lf(T,B){let Y=_e.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function m0(T,B,Y,Z,z){B.isScene!==!0&&(B=ce),Ae.resetTextureUnits();let we=B.fog,Ie=Z.isMeshStandardMaterial?B.environment:null,Oe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:As,Le=(Z.isMeshStandardMaterial?Ye:Je).get(Z.envMap||Ie),qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color,Gt=Fi;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ct=Pt!==void 0?Pt.length:0,We=_e.get(Z),Ft=p.state.lights;if(De===!0&&($===!0||T!==S)){let _n=T===S&&Z.id===w;ie.setState(Z,T,_n)}let ft=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ft.state.version||We.outputColorSpace!==Oe||z.isBatchedMesh&&We.batching===!1||!z.isBatchedMesh&&We.batching===!0||z.isBatchedMesh&&We.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&We.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&We.instancing===!1||!z.isInstancedMesh&&We.instancing===!0||z.isSkinnedMesh&&We.skinning===!1||!z.isSkinnedMesh&&We.skinning===!0||z.isInstancedMesh&&We.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&We.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&We.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&We.instancingMorph===!1&&z.morphTexture!==null||We.envMap!==Le||Z.fog===!0&&We.fog!==we||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ie.numPlanes||We.numIntersection!==ie.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ze||We.morphTargets!==He||We.morphNormals!==lt||We.morphColors!==Et||We.toneMapping!==Gt||We.morphTargetsCount!==Ct)&&(ft=!0):(ft=!0,We.__version=Z.version);let Ln=We.currentProgram;ft===!0&&(Ln=Wa(Z,B,z));let sr=!1,Un=!1,xo=!1,Ot=Ln.getUniforms(),Wn=We.uniforms;if(ne.useProgram(Ln.program)&&(sr=!0,Un=!0,xo=!0),Z.id!==w&&(w=Z.id,Un=!0),sr||S!==T){ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(L,"projectionMatrix",T.projectionMatrix),Ot.setValue(L,"viewMatrix",T.matrixWorldInverse);let bn=Ot.map.cameraPosition;bn!==void 0&&bn.setValue(L,Q.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Un=!0,xo=!0)}if(z.isSkinnedMesh){Ot.setOptional(L,z,"bindMatrix"),Ot.setOptional(L,z,"bindMatrixInverse");let _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ot.setValue(L,"boneTexture",_n.boneTexture,Ae))}z.isBatchedMesh&&(Ot.setOptional(L,z,"batchingTexture"),Ot.setValue(L,"batchingTexture",z._matricesTexture,Ae),Ot.setOptional(L,z,"batchingIdTexture"),Ot.setValue(L,"batchingIdTexture",z._indirectTexture,Ae),Ot.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Ot.setValue(L,"batchingColorTexture",z._colorsTexture,Ae));let Xn=Y.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&J.update(z,Y,Ln),(Un||We.receiveShadow!==z.receiveShadow)&&(We.receiveShadow=z.receiveShadow,Ot.setValue(L,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Wn.envMap.value=Le,Wn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Wn.envMapIntensity.value=B.environmentIntensity),Un&&(Ot.setValue(L,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&g0(Wn,xo),we&&Z.fog===!0&&j.refreshFogUniforms(Wn,we),j.refreshMaterialUniforms(Wn,Z,W,K,p.state.transmissionRenderTarget[T.id]),Kr.upload(L,af(We),Wn,Ae)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Kr.upload(L,af(We),Wn,Ae),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(L,"center",z.center),Ot.setValue(L,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(L,"normalMatrix",z.normalMatrix),Ot.setValue(L,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let _n=Z.uniformsGroups;for(let bn=0,Nh=_n.length;bn<Nh;bn++){let ys=_n[bn];ze.update(ys,Ln),ze.bind(ys,Ln)}}return Ln}function g0(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function x0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,Y){let Z=_e.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_e.get(T.texture).__webglTexture=B,_e.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let Y=_e.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};let _0=L.createFramebuffer();this.setRenderTarget=function(T,B=0,Y=0){P=T,E=B,R=Y;let Z=!0,z=null,we=!1,Ie=!1;if(T){let Le=_e.get(T);if(Le.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Le.__hasExternalTextures)Ae.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let He=T.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&_e.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);let Ze=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?z=Ze[B][Y]:z=Ze[B],we=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?z=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?z=Ze[Y]:z=Ze,D.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else D.copy(Ee).multiplyScalar(W).floor(),N.copy(q).multiplyScalar(W).floor(),G=ue;if(Y!==0&&(z=_0),ne.bindFramebuffer(L.FRAMEBUFFER,z)&&Z&&ne.drawBuffers(T,z),ne.viewport(D),ne.scissor(N),ne.setScissorTest(G),we){let Le=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,Y)}else if(Ie){let Le=B;for(let qe=0;qe<T.textures.length;qe++){let Ze=_e.get(T.textures[qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,Y,Le)}}else if(T!==null&&Y!==0){let Le=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(T,B,Y,Z,z,we,Ie,Oe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){ne.bindFramebuffer(L.FRAMEBUFFER,Le);try{let qe=T.textures[Oe],Ze=qe.format,He=qe.type;if(!te.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&Y>=0&&Y<=T.height-z&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Oe),L.readPixels(B,Y,Z,z,ye.convert(Ze),ye.convert(He),we))}finally{let qe=P!==null?_e.get(P).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,Z,z,we,Ie,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(B>=0&&B<=T.width-Z&&Y>=0&&Y<=T.height-z){ne.bindFramebuffer(L.FRAMEBUFFER,Le);let qe=T.textures[Oe],Ze=qe.format,He=qe.type;if(!te.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,we.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Oe),L.readPixels(B,Y,Z,z,ye.convert(Ze),ye.convert(He),0);let Et=P!==null?_e.get(P).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,Et);let Gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lp(L,Gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,we),L.deleteBuffer(lt),L.deleteSync(Gt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Y=0){let Z=Math.pow(2,-Y),z=Math.floor(T.image.width*Z),we=Math.floor(T.image.height*Z),Ie=B!==null?B.x:0,Oe=B!==null?B.y:0;Ae.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ie,Oe,z,we),ne.unbindTexture()};let y0=L.createFramebuffer(),v0=L.createFramebuffer();this.copyTextureToTexture=function(T,B,Y=null,Z=null,z=0,we=null){we===null&&(z!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=z,z=0):we=0);let Ie,Oe,Le,qe,Ze,He,lt,Et,Gt,Pt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Y!==null)Ie=Y.max.x-Y.min.x,Oe=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Ze=Y.min.y,He=Y.isBox3?Y.min.z:0;else{let Xn=Math.pow(2,-z);Ie=Math.floor(Pt.width*Xn),Oe=Math.floor(Pt.height*Xn),T.isDataArrayTexture?Le=Pt.depth:T.isData3DTexture?Le=Math.floor(Pt.depth*Xn):Le=1,qe=0,Ze=0,He=0}Z!==null?(lt=Z.x,Et=Z.y,Gt=Z.z):(lt=0,Et=0,Gt=0);let Ct=ye.convert(B.format),We=ye.convert(B.type),Ft;B.isData3DTexture?(Ae.setTexture3D(B,0),Ft=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ae.setTexture2DArray(B,0),Ft=L.TEXTURE_2D_ARRAY):(Ae.setTexture2D(B,0),Ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let ft=L.getParameter(L.UNPACK_ROW_LENGTH),Ln=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sr=L.getParameter(L.UNPACK_SKIP_PIXELS),Un=L.getParameter(L.UNPACK_SKIP_ROWS),xo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);let Ot=T.isDataArrayTexture||T.isData3DTexture,Wn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Xn=_e.get(T),_n=_e.get(B),bn=_e.get(Xn.__renderTarget),Nh=_e.get(_n.__renderTarget);ne.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nh.__webglFramebuffer);for(let ys=0;ys<Le;ys++)Ot&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,z,He+ys),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(B).__webglTexture,we,Gt+ys)),L.blitFramebuffer(qe,Ze,Ie,Oe,lt,Et,Ie,Oe,L.DEPTH_BUFFER_BIT,L.NEAREST);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||_e.has(T)){let Xn=_e.get(T),_n=_e.get(B);ne.bindFramebuffer(L.READ_FRAMEBUFFER,y0),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,v0);for(let bn=0;bn<Le;bn++)Ot?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xn.__webglTexture,z,He+bn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xn.__webglTexture,z),Wn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,we,Gt+bn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,we),z!==0?L.blitFramebuffer(qe,Ze,Ie,Oe,lt,Et,Ie,Oe,L.COLOR_BUFFER_BIT,L.NEAREST):Wn?L.copyTexSubImage3D(Ft,we,lt,Et,Gt+bn,qe,Ze,Ie,Oe):L.copyTexSubImage2D(Ft,we,lt,Et,qe,Ze,Ie,Oe);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Wn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ft,we,lt,Et,Gt,Ie,Oe,Le,Ct,We,Pt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ft,we,lt,Et,Gt,Ie,Oe,Le,Ct,Pt.data):L.texSubImage3D(Ft,we,lt,Et,Gt,Ie,Oe,Le,Ct,We,Pt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,we,lt,Et,Ie,Oe,Ct,We,Pt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,we,lt,Et,Pt.width,Pt.height,Ct,Pt.data):L.texSubImage2D(L.TEXTURE_2D,we,lt,Et,Ie,Oe,Ct,We,Pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ln),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Un),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xo),we===0&&B.generateMipmaps&&L.generateMipmap(Ft),ne.unbindTexture()},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var sd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var RT=sd.length-1,gm=Math.min(...sd.map(i=>i[1])),xm=Math.max(...sd.map(i=>i[1])),IT=new M(0,0,(gm+xm)/2),_m=new M(.047,.027,(xm-gm)/2);var LT=new ht,UT=new M,NT=new M,FT=new ct;var OT=new M,BT=new M;var zT=new M;var kT=new M,VT=new M,GT=new M,HT=new Sn,WT=new M;function ya(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let m=0;m<t.count;m++){let x=new M().fromBufferAttribute(t,m),g=x.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),n.push(x))}for(let m=0;m<(i.index?.count??t.count);m+=3){let x=y=>new M().fromBufferAttribute(t,i.index?i.index.getX(y):y),g=x(m),p=x(m+1),v=x(m+2),b=new Sn(g,p,v).getNormal(new M);b.lengthSq()>.1&&s.push({a:g,b:p,c:v,n:b})}let o=e||Math.max(...n.map(m=>m.length())),{x:a,y:l,z:c}=new Zt().setFromPoints(n).getSize(new M),h=Math.max(1e-4,e**2*.4),u=e?new M().setScalar(1/h):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=m=>{let x=[];for(let g of m)g.lengthSq()>.5&&!x.some(p=>Math.abs(p.dot(g))>.9999)&&x.push(g);return x};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(m=>m.n)),edges:e?[]:f(s.flatMap(m=>[new M().subVectors(m.b,m.a).normalize(),new M().subVectors(m.c,m.b).normalize(),new M().subVectors(m.a,m.c).normalize()]))}}var XT=new M,qT=new M,YT=new M,ZT=new M,jT=new ht,JT=new ht,KT=new M;function eo(i){return ya(new Xe(i.x*2,i.y*2,i.z*2))}var $T=new M;var ym=ya(new Jn(1,0).scale(..._m)),QT={mesh:{position:new M,quaternion:new ht},shape:ym,radius:ym.radius,precise:!0};var eE=new M,tE=new M,nE=new M,iE=new ht,sE=new ht,rE=new ht;var oE=new M,aE=new M,lE=new M,cE=new M;var hE=new M;var uE=new M,dE=new M,fE=new M,pE=new M,mE=new M,gE=new M,xE=new M;var _E={mesh:{position:null,quaternion:new ht},shape:{sphereRadius:0,normals:[],edges:[]}};function jc(i,e,t){let n=new Xe(i,e,t),{uv:s,normal:r}=n.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:i,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return n}function rd(i,e){let t=i.attributes.uv;if(!t)return i;let n=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*n,u=t.getY(c)*n;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,i}function vm(i){switch(i){case"sphere":return new En(.5,24,16);case"cylinder":return new wt(.5,.5,1,24);case"cone":return new Rs(.5,1,24);case"torus":return new vn(.34,.14,12,32);case"capsule":return new es(.32,.36,8,16);default:return new Xe(1,1,1)}}function od(i=1,e=1,t=1){let n=[[-i/2,-e/2,-t/2],[i/2,-e/2,-t/2],[-i/2,-e/2,t/2],[i/2,-e/2,t/2],[-i/2,e/2,-t/2],[i/2,e/2,-t/2]].map(a=>new M(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>n[d]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let m=f.clone().sub(c);r.push(m.dot(h)/2.6,m.dot(u)/2.6)}}let o=new it;return o.setAttribute("position",new Ue(s,3)),o.setAttribute("uv",new Ue(r,2)),o.computeVertexNormals(),o}function va(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var os=(i,e,t)=>i+(e-i)*t,to=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};function Jc(i,e){let t=Math.floor(i),n=Math.floor(e),s=to(0,1,i-t),r=to(0,1,e-n);return os(os(va(t,n),va(t+1,n),s),os(va(t,n+1),va(t+1,n+1),s),r)}function Mm(i,e){return Jc(i,e)*.54+Jc(i*2.07+3.4,e*2.07-6.1)*.26+Jc(i*4.2+9,e*4.2)*.13+Jc(i*8.6,e*8.6-13)*.07}function bm(i){let n=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=i?[12,19,38]:[188,213,225],o=i?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((m,x)=>os(m,o[x],d));for(let m=0;m<1024;m++){let x=4*(m+l*1024),g=0,p=0,v=0;if(c>.025)if(i){let y=va(m+792,l+677);y>.9988&&(v=(y-.9988)*49e3*to(.09,.3,c))}else{let[y,A]=s[m],E=2.8*h/(c+.16),R=y*E+3.6,P=A*E-8.1,w=Mm(R,P),S=Mm(R-.12,P-.09);g=to(.49,.66,w)*to(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-S)*5+(w-.54)*.8))}let b=i?1:os(.94,1,to(.05,.34,c));n[x]=os(f[0],(139+115*p)*b,g)+v,n[x+1]=os(f[1],(154+100*p)*b,g)+v*.94,n[x+2]=os(f[2],(178+77*p)*b,g)+v*.86,n[x+3]=255}}let a=new xi(n,1024,512,Cn);return a.colorSpace=xt,a.wrapS=On,a.magFilter=rn,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Sm(){return{day:bm(!1),night:bm(!0)}}var kt=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),wm=kt(-24,24,-51,7),Tm=34521,Em={x:0,y:0,z:3},as={x:.05,y:1.16,z:5.9},no={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:kt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:kt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:kt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:kt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:kt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:kt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:kt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:kt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:kt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:kt(9,23,-48,-37),sign:[16,-38.2]}},bE=[kt(-9,-6,-51,7),kt(6,9,-51,7),kt(-24,24,-8,-5),kt(-24,24,-27,-23),kt(9,23,-37,-34)],Am=[{name:"Glace",bounds:no.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:no.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:kt(-9,9,-51,7)},{name:"Sol ouest",bounds:kt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:kt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:kt(-24,-23,-51,7)},{name:"Sol est",bounds:kt(9,23,-51,-48)},{name:"Sol est",bounds:kt(9,23,-37,7)},{name:"Bordure est",bounds:kt(23,24,-51,7)}],Ma={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},io=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Cm=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i}))),ls={x:-19.4,y:.68,z:-3.25},Rm=i=>({x:-20+i%6*1.52,z:.5-Math.floor(i/6)*1.25}),Im={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Kc(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Li(n);return s.colorSpace=xt,s}function Pm(i,e){let{day:t,night:n}=Sm(),s=new ge(new En(180,40,20),new Ht({map:t,side:an,fog:!1,toneMapped:!1}));i.add(s);let r=Kc(128,128,(_,I)=>{let O=_.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);O.addColorStop(0,"#fff8df"),O.addColorStop(.12,"#fff3bd"),O.addColorStop(.18,"rgba(255,225,144,.40)"),O.addColorStop(1,"rgba(255,220,144,0)"),_.fillStyle=O,_.fillRect(0,0,I,I)}),o=new Ho(new Nr({map:r,blending:ha,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),i.add(o);let a=t.clone();a.mapping=Wr,a.needsUpdate=!0;let l=new $r(e);i.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Us("#daeaff","#88724c",2.25),h=new Ns("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,i.add(c,h,h.target);let u=new M,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function m(_){f=d[_]?_:0;let I=d[f];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,h.color.set(I.sun),h.intensity=I.power,u.set(...I.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,s.material.map=f===2?n:t,s.material.color.set(I.sky),i.fog.color.set(I.fog),i.background.set(I.fog),i.environmentIntensity=g*[1,.56,.09][f]}function x(_){if(!h.castShadow)return;let I=h.target.position,O=Math.round(_.x/4)*4,j=Math.round(_.y/4)*4,k=Math.round(_.z/4)*4;I.x===O&&I.y===j&&I.z===k||(I.set(O,j,k),h.position.copy(I).add(u))}let g=0;i.background=new Ge(d[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function v(_,I,O){let[,j,k]=p[I],xe=512;_.save(),_.scale(O/512,O/512),_.fillStyle=j,_.fillRect(0,0,xe,xe);let ie=I+19;function pe(){return ie=Math.imul(ie,1664525)+1013904223>>>0,ie/4294967296}if(_.fillStyle=k,I===16){for(let de=0;de<16;de++)for(let J=0;J<16;J++)(J+de)%2===0&&_.fillRect(J*32,de*32,32,32);_.fillStyle="#ff3957",_.fillRect(253,0,6,512),_.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let de=I===15?32:64;_.globalAlpha=.48;for(let J=0;J<xe;J+=de){_.fillRect(0,J,xe,I===8?3:2);for(let be=-de;be<xe;be+=de)_.fillRect(be+J/de%2*(I===2?de/2:0),J,2,de)}}else if([4,5,6,7,10,11,12].includes(I)){let de=I===5?38:I===7?64:18;for(let J=0;J<de;J++){_.strokeStyle=k,_.globalAlpha=.08+pe()*.22,_.lineWidth=I===5?1+pe()*8:1+pe()*4;let be=pe()*xe,Fe=I===5?.018:.009;_.beginPath();for(let ye=0;ye<=xe;ye+=8){let Se=be+Math.sin(ye*Fe+J)*(I===6||I===7?4:12+J%5*3)+(I===4?ye*.28:0);ye===0?_.moveTo(ye,Se):_.lineTo(ye,Se)}_.stroke()}}else{_.globalAlpha=.27;for(let de=0;de<120;de++){let J=pe()*xe,be=pe()*xe,Fe=2+pe()*6;_.beginPath(),_.arc(J,be,Fe,0,Math.PI*2),_.fill()}}if(I!==16)for(let de=0;de<4400;de++)_.globalAlpha=.05+pe()*.1,_.fillStyle=pe()>.5?k:"#222324",_.fillRect(pe()*xe,pe()*xe,1+pe()*4,1+pe()*3);_.restore()}let b=new Set([0,2,4,5,8,15,16]),y=p.map(([_,I,O,j,k,xe],ie)=>{let pe=b.has(ie)?512:256,de=Kc(pe,pe,be=>v(be,ie,pe));de.wrapS=de.wrapT=On;let J=new tn({map:de,roughness:j,metalness:k,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return J.name=_,J}),A=y.map(_=>_.map.image),E=512,R=y.map(_=>new zn({map:_.map,flatShading:!0,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite})),P={value:0},w={value:.24},S={value:null},D={value:0};function N(){S.value?.dispose(),S.value=Kc(512,512,(_,I)=>{_.fillStyle="#ffffff",_.fillRect(0,0,I,I);let O=I/52,j=I/64;for(let k of G){if(!k.position||!k.half||k.position.y+k.half.y<.22)continue;let xe=(k.position.x+26)*O,ie=(k.position.z+54)*j,pe=Math.min(55,k.half.x*O+5),de=Math.min(72,k.half.z*j+6);_.save(),_.translate(xe+k.half.y*O*.2,ie+k.half.y*j*.24),_.scale(pe,de);let J=_.createRadialGradient(0,0,.15,0,0,1);J.addColorStop(0,"rgba(22,37,65,.54)"),J.addColorStop(.58,"rgba(36,54,76,.29)"),J.addColorStop(1,"rgba(38,48,57,0)"),_.fillStyle=J,_.fillRect(-1,-1,2,2),_.restore()}})}for(let _ of[...y,...R])_.onBeforeCompile=I=>{I.uniforms.uFocusAmount=P,I.uniforms.uFocusRadius=w,I.uniforms.uLabLightmap=S,I.uniforms.uLabBakedStrength=D,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},_.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let G=[],H=[];function V(_,I,O,j,k,xe,ie,pe=0,de=0,J=1,be=1,Fe=!1){let ye=new ge(Fe?new Xe(k,xe,ie):jc(k,xe,ie),y[pe]);ye.position.set(I,O,j),ye.rotation.x=de,ye.receiveShadow=!0,ye.castShadow=!0,i.add(ye);let Se=new M(k/2,xe/2,ie/2),ze={mesh:ye,position:ye.position,quaternion:ye.quaternion,half:Se,min:Se.clone().negate(),friction:J,gravity:be,name:_,type:pe,shape:eo(Se)};return G.push(ze),ze}let X=Am.map(({name:_,bounds:I,type:O=0,friction:j=.78,gravity:k=1})=>{let{xMin:xe,xMax:ie,zMin:pe,zMax:de}=I;return V(_,(xe+ie)/2,-.33,(pe+de)/2,ie-xe,.66,de-pe,O,0,j,k)});for(let _ of Object.values(Im))for(let I of _)V(...I);let{xMin:K,xMax:W,zMin:ee,zMax:me}=wm;V("But\xE9e arri\xE8re",0,1.35,ee+.4,W-K,2.7,.6,2),V("But\xE9e ouest",K+.3,1.05,(ee+me)/2,.6,2.1,me-ee,2),V("But\xE9e est",W-.3,1.05,(ee+me)/2,.6,2.1,me-ee,2);let{xMin:Ee,xMax:q,zMin:ue,zMax:Ve}=no.hills.bounds,De=q-Ee,$=Ve-ue,se=16,Q=64,fe=new on(De,$,se,Q).rotateX(-Math.PI/2).translate(Ee+De/2,0,ue+$/2),ce=fe.attributes.uv;for(let _=0;_<ce.count;_++)ce.setXY(_,ce.getX(_)*De/2.6,ce.getY(_)*$/2.6);let ke=fe.attributes.position,ut;function L(_){if(ut===_)return;ut=_;let I=ut*.017;for(let O=0;O<ke.count;O++){let j=ke.getX(O),k=ke.getZ(O),xe=Math.sin(Math.PI*Ne.clamp((j-Ee)/De,0,1)),ie=Math.min(1,(k-ue)*.48,(Ve-k)*.48),pe=.93+.56*Math.sin(k*.36+I)+.32*Math.cos(j*.67+k*.26+I*1.4)+.19*Math.sin(k*.81+I*.67);ke.setY(O,Math.max(0,xe*ie*pe))}ke.needsUpdate=!0,fe.computeVertexNormals(),fe.computeBoundingSphere()}L(Tm);let he=new ge(fe,y[3]);he.userData.editorAssetId="lab-hill",he.receiveShadow=he.castShadow=!0,i.add(he);let re=(_,I)=>{let O=Ne.clamp((_-Ee)/De*se,0,se-1e-6),j=Ne.clamp((I-ue)/$*Q,0,Q-1e-6),k=Math.floor(O),xe=Math.floor(j),ie=O-k,pe=j-xe,de=se+1,J=xe*de+k,be=ke.getY(J),Fe=ke.getY(J+1),ye=ke.getY(J+de),Se=ke.getY(J+de+1);return ie+pe<=1?be+(Fe-be)*ie+(ye-be)*pe:Se+(ye-Se)*(1-ie)+(Fe-Se)*(1-pe)};G.push({heightfield:!0,mesh:he,editorAssetId:"lab-hill",height:re,...no.hills.bounds,friction:.81,gravity:1});function te(_,I,O,j,k=1.45){let xe=Kc(384,72,(pe,de,J)=>{pe.fillStyle="#202a32",pe.fillRect(0,0,de,J),pe.fillStyle=j,pe.font="bold 31px system-ui",pe.textAlign="center",pe.fillText(_,de/2,48,de-20)}),ie=new ge(new on(3.2,.6),new Ht({map:xe,side:Yt}));ie.position.set(I,k,O),i.add(ie),H.push(ie)}for(let _ of Object.values(no)){te(_.name.toLocaleUpperCase("fr"),..._.sign,_.color);let{xMin:I,xMax:O,zMin:j,zMax:k}=_.bounds,xe=new Xo(new it().setFromPoints([new M(I,.025,j),new M(O,.025,j),new M(O,.025,k),new M(I,.025,k)]),new Zn({color:_.color,transparent:!0,opacity:.72}));i.add(xe),H.push(xe)}te("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),te("MURS HAUTS",3,-31,"#e8d2ff"),te("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ne=new tn({color:"#c8e6ed",metalness:1,roughness:.16}),Te=new ge(new jn(.54,2),ne);Te.userData.editorAssetId="chrome-sphere",Te.position.set(ls.x,ls.y,ls.z),Te.castShadow=!0,i.add(Te);let _e=p.map((_,I)=>{let{x:O,z:j}=Rm(I);return V("\xC9chantillon "+p[I][0],O,.325,j,.65,.65,.65,I,0,1,1,!0).mesh}),Ae=new pn(1,12).rotateX(-Math.PI/2),Je=new Ht({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ye(_){let I=new ge(Ae,Je);return I.scale.setScalar(_),i.add(I),I}function C(_,I,O,j,k,xe,ie,pe){let de=I>=3;e.shadowMap.enabled=de,h.castShadow=de,Je.opacity=I===2?.17:.11,D.value=pe?.38+O*.04:0;let J=I>=9?2048:I>=6?1024:I>=4?512:256;h.shadow.intensity=.45+I*.055,h.shadow.radius=.65+I*.12;let be=13+I*1.2;Object.assign(h.shadow.camera,{left:-be,right:be,top:be,bottom:-be}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==J&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(J,J)),o.visible=k,ie!==E&&(E=ie,y.forEach((ye,Se)=>{let ze=ye.userData.texture??ye.map,U=b.has(Se)?ie:Math.min(256,ie);if(ze.image.width===U)return;let Me=document.createElement("canvas");Me.width=Me.height=U;let Ce=Me.getContext("2d");U>512?v(Ce,Se,U):Ce.drawImage(A[Se],0,0,U,U);let Pe=new Li(Me);Pe.colorSpace=ze.colorSpace,Pe.wrapS=ze.wrapS,Pe.wrapT=ze.wrapT,Pe.repeat.copy(ze.repeat);for(let ve of[ye,R[Se]])ve.userData.texture=Pe,ve.map=Pe,ve.needsUpdate=!0;ze.dispose()}));let Fe=_>=4;for(let ye of G)ye.mesh?.isMesh&&!ye.zone&&(ye.mesh.material=Fe?y[ye.type]:R[ye.type]);he.material=Fe?y[3]:R[3];for(let ye=0;ye<_e.length;ye++)_e[ye].material=Fe?y[ye]:R[ye];y.forEach((ye,Se)=>{for(let ze of[ye,R[Se]])ze.userData.texture||(ze.userData.texture=ze.map),ze.map=xe?ze.userData.texture:null,ze.color.set(xe?"#ffffff":p[Se][1]),ze.needsUpdate=!0}),g=j?.21+O*.067:0,ne.metalness=j?.95:.1,ne.roughness=j?.13:.46,s.visible=_>=2,m(f)}return{boxes:G,floors:X,probe:Te,display:_e,visual:C,shadow:Ye,setTimeOfDay:m,centerShadows:x,get hillSeed(){return ut},setHillSeed:L,bakeLightmap:N,mapMaterial:(_,I)=>I>=4?y[_]:R[_],builtObjects:[...G.map(_=>_.mesh).filter(_=>_?.isObject3D),Te,...H],materials:[...y,...R],focus(_,I,O){P.value=_?I*.75:0,w.value=.07+O*.058}}}function Dm(i,e,t){function n(c,h,u=.85){let d=c.getWorldPosition(new M),f=c.getWorldQuaternion(new ht);e.push({half:h,min:h.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:eo(h),friction:u,gravity:1})}let s=[],r=[],o=new zn({color:"#485d5d",flatShading:!0});function a([c,h],u,d){let f=new ge(new Xe(.095,.68,.11),o);f.position.set(c,.34,h+.46),f.castShadow=f.receiveShadow=!0,i.add(f),n(f,new M(.0475,.34,.055));let m=new dn;m.position.set(c,.85,h+.4),m.rotation.x=-.35,i.add(m);let x=new ge(new Xe(.64,.36,.055),new zn({color:"#182831"}));m.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let p=g.getContext("2d"),v=new Li(g);v.colorSpace=xt;let b=new ge(new on(.61,.095),new Ht({map:v}));b.position.set(0,.116,.03),m.add(b);let y=.592/d.length,A=d.map(([R,P],w)=>{let S=new ge(new Xe(y-.012,.155,.04),new zn({color:"#478086"}));S.position.set(-.296+y*(w+.5),-.045,.046),m.add(S),s.push(S),S.userData.touchWidth=y-.012;let D=document.createElement("canvas");D.width=208,D.height=172;let N=new Li(D);N.colorSpace=xt;let G=new ge(new on(y-.017,.139),new Ht({map:N}));G.position.z=.0205,S.add(G);let H=-1/0;return S.userData.action=()=>{let V=performance.now();V-H<250||(H=V,P(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:R,context:D.getContext("2d"),texture:N}});function E(){p.fillStyle="#182831",p.fillRect(0,0,512,96),p.fillStyle="#ffe1a0",p.font="bold 38px system-ui",p.fillText(u,17,62,478);for(let R of A){let P=R.context;P.fillStyle="#386269",P.fillRect(0,0,208,172),P.fillStyle="#fff2d5",P.textAlign="center",P.font="bold 27px system-ui";let w=(typeof R.label=="function"?R.label():R.label).split("|");w.forEach((S,D)=>P.fillText(S,104,(w.length>1?68:97)+D*37,188)),R.texture.needsUpdate=!0}v.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(Ma.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,io[0])],["Boule",()=>t.spawn(1,io[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,io[0])],["Vider",t.clear]]),a(Ma.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,io[1])],["Sph\xE8re",()=>t.spawn(5,io[1])]]),a(Ma.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ma.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function $c(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new it,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Lm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Lm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new St(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var eh=0,bb=1,Sb=new M,Um=new la,ad=new un,Nm=new M,Qc=new Sn,th=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new nh,this.unassigned=new nh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new ld(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Sb)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===eh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,h;r=0,Um.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=e[d];if(m!==a&&m!==l){Um.closestPointToPoint(m.point,!0,Nm);let x=Nm.distanceToSquared(m.point);x>r&&(r=x,c=m)}}r=-1,ad.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=e[d];if(m!==a&&m!==l&&m!==c){let x=Math.abs(ad.distanceToPoint(m.point));x>r&&(r=x,h=m)}}let u=[];if(ad.distanceToPoint(h.point)<0){u.push(hi.create(a,l,c),hi.create(h,l,a),hi.create(h,c,l),hi.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(hi.create(a,c,l),hi.create(h,a,l),hi.create(h,l,c),hi.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let m=e[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,x=this.faces[g])}x!==null&&this._addVertexToFace(m,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===eh&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=bb;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===eh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=hi.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},hi=class i{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=eh,this.edge=null}static create(e,t,n){let s=new i,r=new ba(e,s),o=new ba(t,s),a=new ba(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Qc.set(e.point,t.point,n.point),Qc.getNormal(this.normal),Qc.getMidpoint(this.midpoint),this.area=Qc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ba=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},ld=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},nh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Bi=class extends it{constructor(e=[]){super();let t=[],n=[],r=new th().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ue(t,3)),this.setAttribute("normal",new Ue(n,3))}};var Rn=Math.PI*2,ih=.84,zi=128;function us(i){let e=new Uint8Array(zi*zi*4);for(let n=0;n<zi;n++)for(let s=0;s<zi;s++){let r=(s+.5)/zi,o=(n+.5)/zi,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/ih,1),Math.min(o/ih,1),s,n),l=(s+n*zi)*4;for(let c=0;c<3;c++)e[l+c]=Ne.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new xi(e,zi,zi);return t.colorSpace=xt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=rn,t.needsUpdate=!0,t}function Xs(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function et(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new Ge(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*ih,r.getY(l)*ih):r.setXY(l,.95,.95);return n.setAttribute("color",new St(a,3)),n}function ds(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:$c(s),material:new tn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Fm(i,e,t){let n=i/2,s=e/2,r=new Ui;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function cs(i,e,t,n,s){return new Ps(Fm(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function hs(i,e,t=n=>n){let n=[],s=[],r=[];for(let h=0;h<i.length;h++){let[u,d]=i[h];for(let f=0;f<=e;f++){let m=Rn*f/e,x=t(u,d,m,h);if(n.push(x*Math.sin(m),d,x*Math.cos(m)),s.push(f/e,h/(i.length-1)),h===i.length-1||f===e)continue;let g=h*(e+1)+f,p=g+e+1;u>0&&r.push(g,g+1,p),i[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new it;o.setAttribute("position",new Ue(n,3)),o.setAttribute("uv",new Ue(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let h=0;h<i.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Sa(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Rn*r/e;t.push(new M(n*Math.sin(o),s,n*Math.cos(o)))}}return new Bi(t)}function wb(){let t=new ia(Fm(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let l=0;l<n.count;l++){let c=Ne.clamp(n.getX(l)/.098+.5,0,1),h=Ne.clamp((n.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=us((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Rn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[et(cs(.106,.207,.013,.011,.0019),8425890),et(cs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),et(cs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),et(t,16777215,!0),et(cs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),et(new Xe(.0036,.024,.004).translate(.055,.029,0),11714250),et(new Xe(.0036,.015,.004).translate(-.055,.032,0),11385285),et(new Xe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(et(new wt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(et(new pn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(et(new pn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Bi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new M(c,h,l))));return ds("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Tb(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=hs(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=us((a,l,c,h)=>{let u=Rn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...e.map(v=>Math.exp(-(((d-v+.035*Math.cos(u))/.009)**2)))),x=f**3*m,g=Xs(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+p,76+24*f+70*x+p,24+11*f+52*x+p*.8]}),o=Sa([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return ds("bread","Baguette de pain",.27,o,[et(s,16777215,!0)],r,.9)}function Eb(){let i=us((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*Xs(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),e=hs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=hs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[et(e,16777215,!0),et(t,11056059),et(new wt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),et(new wt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Rn*r/5;n.push(et(new Xe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Sa([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return ds("wheel","Roue",1.8,s,n,i,.64,.23)}function Ab(){let i=us((r,o,a,l)=>{let c=Xs(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Rn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=hs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new vn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Rn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new Bi(n);return ds("cup","Tasse",.39,s,[et(e,16777215,!0),et(t,15785922)],i,.37)}function Cb(){let i=hs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=us((s,r,o,a)=>{let l=9*Xs(o,a),c=11*Math.cos(s*Rn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Rn*48+s*Rn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Rn*4);return[h,h*1.13,h*1.24]}),t=[et(i,16777215,!0),et(new ts(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),et(new pn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),et(new pn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),et(new wt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),et(new pn(.008,12).translate(0,.035,.0336),15633202)],n=Sa([[.033,-.143],[.054,.133]],6);return ds("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function Rb(){let i=hs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=us((r,o,a,l)=>{let c=10*Xs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Rn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Rn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),n=[et(i,16777215,!0),et(new pn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),et(new ts(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),et(new pn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Sa([[.069,-.112],[.069,.109]],6);return ds("soda","Canette de soda",.35,s,n,t,.42,.27)}function Ib(){let i=hs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=us((s,r,o,a)=>{let l=15*Xs(o,a),c=8*Math.cos(s*Rn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[et(i,16777215,!0),et(cs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),et(new pn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=Sa([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return ds("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function Pb(){let i=us((s,r,o,a)=>{let l=8*Xs(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=hs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[et(cs(.138,.22,.061,.016,.004),14788675),et(cs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),et(new on(.106,.174).translate(0,-.004,.0395),16777215,!0),et(e,2502456),et(new wt(.014,.017,.016,10).translate(.04,.117,.001),2503482),et(new Xe(.008,.047,.027).translate(-.072,.014,-.002),3028798),et(new Xe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),et(new pn(.004,8).translate(.04,.066,.0397),15817792),et(new pn(.004,8).translate(-.04,.066,.0397),7903100),et(cs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return ds("radio","Talkie-walkie",.43,new Bi(n),t,i,.61,.08)}function Om(){return[wb(),Tb(),Eb(),Ab(),Cb(),Rb(),Ib(),Pb()]}var Db=[0,1,2,3,4,5,7,8,9,10];function Bm(i){Cm.forEach(({x:e,z:t},n)=>i(Db[n],new M(e,.8,t)))}function zm(){let i=[["Cube",new Xe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new jn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ds(.29),"#d8ae53",0,1],["Brique",new Xe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Xe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new jn(.6,4),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:ya(t,s),material:new tn({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:eo(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of Om()){let s=ya(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var km=48,Lb=3,Ub=128,Vm=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),Nb=(i,e,t)=>Math.max(e,Math.min(t,i)),Fb=()=>structuredClone(Vm.shield),wa=(i,e,t,n)=>Number.isFinite(i)?Nb(i,t,n):e;function rh(i){let e=i?.mode==="lathe"?Vm.bottle:Fb(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=km?i.points.map(o=>[wa(o?.[0],0,-1.5,1.5),wa(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:wa(i?.depth,e.depth,.025,1.5),bevel:wa(i?.bevel,e.bevel,0,.15),segments:Math.round(wa(i?.segments,32,Lb,Ub))}}function Gm(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function sh(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function Ob(i,e,t,n){let s=sh(i,e,t),r=sh(i,e,n),o=sh(t,n,i),a=sh(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function Bb(i){let e=rh(i),t=e.mode==="lathe"?e.points:Gm(e);if(t.length<3||t.length>km*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&Ob(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Hm(i){let e=rh(i),t=Bb(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new oe(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new oe(0,s[0].y)),s.at(-1).x>0&&s.push(new oe(0,s.at(-1).y)),n=new na(s,e.segments);let r=[],o=n.attributes.position,a=new M,l=new M,c=new M,h=new M,u=n.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);n.setIndex(r)}else{let s=Gm(e),r=new Ui;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new Ps(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new St(new Float32Array(s*2),2))}return n}var cd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ta=null,zb=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function qs(i){return typeof i=="string"&&zb.has(i.replace(/^custom-model-game-/,""))}function oh(i){let e=i?.parts;return qs(i?.id)||qs(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>qs(t?.assetId))}function Xm(){if(Ta)return Ta;let i=zm(),e=cd;return Ta=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Ta.set("chrome-sphere",{geometry:new jn(.54,2),material:new tn({color:"#c8e6ed",metalness:1,roughness:.16})}),Ta}function ah(i){return typeof i=="string"&&Xm().has(i)}function hd(i){return Xm().get(i)??null}function kb(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function Wm(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[kb(e,i)]}}function ud(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>Wm(e,t)),Wm("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var fd="gorilla-lab-models-v1",ro=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),Vb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,Gb=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Ym=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Hb=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),Wb=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Xb=/^#[a-f\d]{6}$/i;function qm(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function fs(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?Ne.clamp(i[s],t,n):e)}var dd=new Set(["box","sphere","capsule","convex"]);function qb(i){if(i?.mode==="box")return{mode:"box",center:fs(i.center,0,-6,6),size:fs(i.size,.5,.025,12)};let e=Math.round(Ne.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:dd.has(i.shape)?i.shape:"box",center:fs(i.center,0,-6,6),size:fs(i.size,.5,.025,12),rotation:fs(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&dd.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Ys(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>ro.models||JSON.stringify(i).length>ro.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:i.models.filter(n=>!oh(n)).map(n=>{if(typeof n?.id!="string"||!Wb.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>ro.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(n.id),{id:n.id,name:qm(n.name,"Mod\xE8le sans nom"),kind:n.kind==="structure"?"structure":"prop",...ah(n.assetId)?{assetId:n.assetId}:{},inGame:n.inGame===!0,properties:Object.fromEntries(Object.entries(Hb).map(([s,r])=>[s,typeof n.properties?.[s]=="boolean"?n.properties[s]:r])),hitbox:qb(n?.hitbox),parts:n.parts.filter(s=>!qs(s?.assetId)).map((s,r)=>({name:qm(s?.name,`Pi\xE8ce ${r+1}`),...Number.isInteger(s?.group)&&s.group>0&&s.group<=ro.parts?{group:s.group}:{},shape:s?.shape==="asset"&&ah(s?.assetId)?"asset":Object.hasOwn(Gb,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&ah(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:rh(s?.profile)}:{},position:fs(s?.position,0,-3,3),rotation:fs(s?.rotation,0,-360,360),scale:fs(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&Xb.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(Ym,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=ro.textureBytes&&Vb.test(s.texture)?s.texture:null}))}}),avatarId:typeof i.avatarId=="string"&&e.has(i.avatarId)?i.avatarId:null}}function Zm(i){try{let e=(i??globalThis.localStorage)?.getItem(fd);if(e&&e.length<=ro.fileBytes)return Ys(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Yb(i){switch(i){case"tetrahedron":return new Ds(Math.sqrt(3)/2);case"sphere":return new En(.5,20,12);case"cylinder":return new wt(.5,.5,1,20);case"cone":return new Rs(.5,1,20);case"torus":return new vn(.365,.135,8,24);case"capsule":return new es(.28,.44,6,16);case"diamond":return new Jn(.5);default:return new Xe(1,1,1)}}var jm=Object.keys(Ym),so=64,Ea=4,Jm=2,Mi;function Zb(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Km(){if(Mi)return Mi;let i=so*Ea,e=so*Jm,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/so)*Ea+Math.floor(s/so),o=Zb(jm[r],s%so,n%so),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Mi=new xi(t,i,e),Mi.colorSpace=xt,Mi.magFilter=rn,Mi.minFilter=An,Mi.generateMipmaps=!0,Mi.needsUpdate=!0,Mi}function $m(i){let e=i.shape==="asset"?hd(i.assetId):null,t=i.shape==="custom"?Hm(i.profile):e?.geometry?.clone()??Yb(i.shape),n=t.index?t.toNonIndexed():t;n!==t&&t.dispose(),n.attributes.uv||n.setAttribute("uv",new Ue(new Float32Array(n.attributes.position.count*2),2));let s=i.rotation.map(Ne.degToRad);n.scale(...i.scale),n.rotateX(s[0]),n.rotateY(s[1]),n.rotateZ(s[2]),n.translate(...i.position);let r=new Ge(i.color),o=n.attributes.position.count,a=new Float32Array(o*3),l=n.attributes.uv,c=jm.indexOf(i.surface),h=c%Ea,u=Math.floor(c/Ea),d=n.attributes.color;for(let f=0;f<o;f++)i.shape==="asset"&&d?(a[f*3]=d.getX(f)*r.r,a[f*3+1]=d.getY(f)*r.g,a[f*3+2]=d.getZ(f)*r.b):r.toArray(a,f*3),i.shape!=="asset"&&!i.texture&&l.setXY(f,(h+.05+l.getX(f)*.9)/Ea,(u+.05+l.getY(f)*.9)/Jm);return n.setAttribute("color",new St(a,3)),n}function jb(i){let e=i?.shape==="asset"?hd(i.assetId):null;if(e?.material){let n=e.material.clone();if(n.map&&(n.map=n.map.clone(),n.map.needsUpdate=!0),i.texture){n.map?.dispose();let s=new _i().load(i.texture);s.colorSpace=xt,s.wrapS=s.wrapT=On,n.map=s}return i.color&&i.color!=="#ffffff"&&n.color?.multiply(new Ge(i.color)),n.needsUpdate=!0,n}if(!i?.texture)return new tn({vertexColors:!0,map:Km(),roughness:.68});let t=new _i().load(i.texture);return t.colorSpace=xt,t.wrapS=t.wrapT=On,new tn({vertexColors:!0,map:t,roughness:.68})}function lh(i){return i?.parts?.some(e=>e.texture||e.shape==="asset")?i.parts.map(jb):new tn({vertexColors:!0,map:Km(),roughness:.68})}function ch(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==Mi&&e.map.dispose(),e.dispose()}}function Qm(i){let e=i.map($m),t=$c(e,i.some(n=>n.texture||n.shape==="asset"));return e.forEach(n=>n.dispose()),t.center(),t.computeBoundingBox(),t}function hh(i){let e=Qm(i.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function uh(i){let e=new Zt;for(let t of i.parts??[]){let n=$m(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function oo(i){return uh(i).getSize(new M)}function eg(i){let e=uh(i),t=e.getCenter(new M),n=e.getSize(new M),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":dd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ne.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):n,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:n}}function Jb(i,e){let t=i.attributes.position,n=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),n.push(c))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<n.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(n[l]);for(let h=0;h<n.length;h++)a[h]=Math.min(a[h],n[h].distanceToSquared(n[l]))}return r}function Kb(i){let e=eg(i),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new En(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new es(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&i.parts?.length){let n=Qm(i.parts),s=Jb(n,e.precision);if(n.dispose(),s.length>=4)try{let r=new Bi(s),o=e.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return r.scale(1/o.x,1/o.y,1/o.z),r.computeVertexNormals(),r}catch{}}return new Xe(1,1,1)}function tg(i,e=null){let t=eg(i),n=Kb(i),s=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),r=e?new M(e.x,e.y,e.z):s.clone(),o=t.size.clone().multiply(r).divide(s),a=t.center.clone().sub(t.boundsCenter).multiply(r).divide(s);return n.scale(o.x,o.y,o.z),n.rotateX(Ne.degToRad(t.rotation.x)),n.rotateY(Ne.degToRad(t.rotation.y)),n.rotateZ(Ne.degToRad(t.rotation.z)),n.translate(a.x,a.y,a.z),n.computeBoundingBox(),n}var rg=256,og=1/2.6**2,ph=16,md=256,pd=100,$b=256,Qb=16,lo=24,ng=new WeakMap,ki=Ne.clamp,ao=Ne.lerp,fh=i=>i*i*(3-2*i);function nn(i,e,t,n){return Number.isFinite(i)?ki(i,e,t):n}function ag(i){if(!i)return null;let e=Ys({version:1,models:[i]});return e.models[0]?.parts.length?e.models[0]:null}var eS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function lg(i,e=Qb){return Math.round(nn(i,1,rg,e))}function tS(i,e,t,n,s){if(Number.isFinite(i[e+"Density"]))return nn(i[e+"Density"],0,pd,0);let r=nn(i[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*n)*r));return nn(o/t,0,pd,0)}var nS=["grass","shrub","model"],iS=["keep","fit","stretch"],ig=/^#[a-f\d]{6}$/i;function Aa(i={}){let e=ag(i.model),t=e?"model":i.kind==="shrub"?"shrub":"grass",n=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff";return{kind:t,model:e,density:nn(i.density,0,pd,1),colorA:ig.test(i.colorA)?i.colorA:n,colorB:ig.test(i.colorB)?i.colorB:n,seed:Math.round(nn(i.seed,0,2147483647,1)),size:nn(i.size,.05,10,1),fit:iS.includes(i.fit)?i.fit:"keep",collidable:i.collidable===!0,variation:nn(i.variation,0,1,0)}}function sS(i,e){return Array.isArray(i.rules)?i.rules.slice(0,ph).filter(t=>t&&typeof t=="object"&&nS.includes(t.kind)).filter(t=>t.kind!=="model"||ag(t.model)).map(Aa):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,n,s,r])=>{let o=tS(i,t,e,n,s),a=i[t+"Model"];return!o&&!a&&!(t==="grass"&&i.grassTexture)?[]:[Aa({kind:t,model:a,density:o,seed:i.seed,size:nn(i[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&i.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Zs(i={},e=1){let t=lg(i?.detail),n=i?.heights;return{detail:t,seed:Math.round(nn(i?.seed,0,2147483647,1)),amplitude:nn(i?.amplitude,0,12,0),frequency:nn(i?.frequency,.015,2,.12),octaves:Math.round(nn(i?.octaves,1,5,3)),roughness:nn(i?.roughness,.15,.95,.42),ridge:nn(i?.ridge,0,1,0),edgeFade:nn(i?.edgeFade,0,1,0),rules:sS(i??{},e),textureDensity:nn(i?.textureDensity,1e-4,$b,og),grassTexture:typeof i?.grassTexture=="string"&&i.grassTexture.length<5e5&&eS.test(i.grassTexture)?i.grassTexture:null,heights:Array.isArray(n)&&n.length===(t+1)**2?Array.from(n,s=>nn(s,-lo,lo,0)):null}}function cg(i,e,t,n){let s=ki(t,0,e),r=ki(n,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,d=i[u],f=i[u+1],m=i[u+h],x=i[u+h+1];return l+c<=1?d+(f-d)*l+(m-d)*c:x+(m-x)*(1-l)+(f-x)*(1-c)}function gd(i,e){let t=lg(e,i.detail);if(t===i.detail)return i;if(!i.heights)return{...i,detail:t,heights:null};let n=t+1,s=i.detail/t,r=Array.from({length:n**2},(o,a)=>cg(i.heights,i.detail,a%n*s,Math.floor(a/n)*s));return{...i,detail:t,heights:r}}function Vi(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function dh(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=fh(i-n),o=fh(e-s),a=ao(Vi(n,s,t),Vi(n+1,s,t),r),l=ao(Vi(n,s+1,t),Vi(n+1,s+1,t),r);return 2*ao(a,l,o)-1}function Ca(i){let{w:e,d:t,terrain:n}=i,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d}=n,f=ng.get(i),m=f&&f.w===e&&f.d===t&&f.detail===s&&f.seed===r&&f.amplitude===o&&f.frequency===a&&f.octaves===l&&f.roughness===c&&f.ridge===h&&f.edgeFade===u;if(m&&f.heights===d)return f;let x=s+1,g=m?f.procedural:new Float64Array(x**2);if(!m&&o)for(let b=0;b<=s;b++)for(let y=0;y<=s;y++){let A=(y/s-.5)*e*a,E=(b/s-.5)*t*a,R=0,P=1,w=0;for(let N=0;N<l;N++){let G=dh(A*2**N,E*2**N,r+N*13);R+=P*ao(G,1-2*Math.abs(G),h),w+=P,P*=c}let S=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(y/s-.5))*2,(.5-Math.abs(b/s-.5))*2)),u*2):1,D=l===3&&c===.42&&h===0&&u===0;g[b*x+y]=D?o*(.62*dh(A,E,r)+.26*dh(A*2.03,E*2.03,r+13)+.12*dh(A*4.13,E*4.13,r+37)):o*R/w*S}let p=d?g.map((b,y)=>b+d[y]):g,v={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d,procedural:g,surface:p};return ng.set(i,v),v}function xd(i,e,t){let{detail:n,w:s,d:r,surface:o}=i;return cg(o,n,(e/s+.5)*n,(t/r+.5)*n)}function sg(i,e,t){return i.y+xd(Ca(i),e-i.x,t-i.z)}var rS=.25;function _d(i,e){if(!i?.terrain||!e?.terrain||i===e)return null;let t=null;for(let[n,s,r,o]of[["x","z","w","d"],["z","x","d","w"]]){let a=Math.max(i[s]-i[o]/2,e[s]-e[o]/2),l=Math.min(i[s]+i[o]/2,e[s]+e[o]/2);if(!(l-a<.05))for(let c of[-1,1]){let h=e[n]-c*e[r]/2,u=h-(i[n]+c*i[r]/2);Math.abs(u)<=rS&&(!t||Math.abs(u)<Math.abs(t.delta))&&(t={axis:n,along:s,length:r,span:o,lo:a,hi:l,side:c,edge:h,delta:u})}}return t}function hg(i,e,t=1.5){let n=_d(i,e);if(!n)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:d}=n,f=i.terrain;if(Math.abs(i[a]-e[a])<1e-6&&Math.abs(i[r]-e[r])<1e-6){let E=e.terrain.detail,R=Math.ceil(f.detail/E)*E;R<=rg&&(f=gd(f,R))}let m={...i,[s]:i[s]+d,terrain:f},{detail:x,procedural:g,heights:p,surface:v}=Ca(m),b=p?.slice()??Array((x+1)**2).fill(0),y=Math.max(t,m[o]/x),A=!1;for(let E=0;E<=x;E++)for(let R=0;R<=x;R++){let P=m.x+(R/x-.5)*m.w,w=m.z+(E/x-.5)*m.d,S=r==="x"?P:w;if(S<l-1e-6||S>c+1e-6)continue;let D=Math.max(0,h*(u-(s==="x"?P:w)));if(D>y)continue;let N=E*(x+1)+R,G=s==="x"?sg(e,u,w):sg(e,P,u),H=ao(v[N],G-m.y,fh(1-D/y))-g[N];b[N]=ki(H,-lo,lo),A||=b[N]!==H}return{piece:{...m,terrain:{...f,heights:b}},clipped:A}}function oS(i,e,t){let{detail:n,surface:s}=i,r=n+1,o=Math.max(0,e-1),a=Math.min(n,e+1),l=Math.max(0,t-1),c=Math.min(n,t+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(h+=s[d*r+f],u++);return h/u}function ug(i,e,t,{mode:n,radius:s,strength:r,target:o}={}){if(!i?.terrain||!["raise","lower","smooth","flatten"].includes(n)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ca(i),{detail:l,w:c,d:h,surface:u,procedural:d}=a,f=e-i.x,m=t-i.z,x=ki(f,-c/2,c/2),g=ki(m,-h/2,h/2);if((f-x)**2+(m-g)**2>=s**2)return!1;let p=(f/c+.5)*l,v=(m/h+.5)*l,b=c/l,y=h/l,A=Math.max(0,Math.ceil(p-s/b)),E=Math.min(l,Math.floor(p+s/b)),R=Math.max(0,Math.ceil(v-s/y)),P=Math.min(l,Math.floor(v+s/y)),w=Number.isFinite(o)?o-i.y:xd(a,f,m),S=l+1,D=a.heights?.slice()??new Array(S**2).fill(0),N=!1,G=!1;function H(V,X,K){N=!0;let W=X*S+V,ee=D[W],me;if(n==="raise"||n==="lower")me=ee+(n==="raise"?1:-1)*r*K;else{let Ee=n==="flatten"?w:oS(a,V,X);me=ao(u[W],Ee,Math.min(1,r)*K)-d[W]}me=ki(me,-lo,lo),!(Math.abs(me-ee)<1e-7)&&(D[W]=me,G=!0)}for(let V=R;V<=P;V++)for(let X=A;X<=E;X++){let K=Math.hypot((X-p)*b,(V-v)*y)/s;K<1&&H(X,V,fh(1-K))}if(!N){let V=ki(p,0,l),X=ki(v,0,l),K=Math.min(l-1,Math.floor(V)),W=Math.min(l-1,Math.floor(X)),ee=V-K,me=X-W,Ee=ee+me<=1,q=Ee?1-ee-me:ee+me-1,ue=Ee?ee:1-me,Ve=Ee?me:1-ee;if(q>=Math.max(ue,Ve)){let De=+!Ee;H(K+De,W+De,1)}else ue>=Ve?H(K+1,W,1):H(K,W+1,1)}return G&&(i.terrain.heights=D),G}function yd(i){let{w:e,d:t,terrain:n}=i,{detail:s}=n,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(n.textureDensity??og),u=0;for(let f=0;f<=s;f++)for(let m=0;m<=s;m++){let x=f*r+m;o[3*x]=(m/s-.5)*e,o[3*x+2]=(f/s-.5)*t,a[2*x]=m/s*e*h,a[2*x+1]=(1-f/s)*t*h,f<s&&m<s&&(c.set([x,x+r,x+1,x+r+1,x+1,x+r],u),u+=6)}let d=new it;return d.setAttribute("position",new St(o,3).setUsage(xa)),d.setAttribute("uv",new St(a,2)),d.setIndex(new St(c,1)),aS(d,i),d}function aS(i,e){let{surface:t}=Ca(e),{position:n}=i.attributes;for(let s=0;s<t.length;s++)n.setY(s,t[s]);n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere(),i.boundingBox&&i.computeBoundingBox()}function lS(){let i=[];for(let t=0;t<5;t++){let n=t*2.4,s=Math.cos(n),r=Math.sin(n),o=s*.105,a=r*.105;i.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new it;return e.setAttribute("position",new Ue(i,3)),e.setAttribute("uv",new Ue(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function cS(){return new jn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function hS(i,e,t){if(e==="stretch")return new M().setScalar(t);let n=e==="fit"?Math.min(1,t/Math.max(i.x,i.y,i.z,1e-5)):t;return i.clone().multiplyScalar(n)}function dg(i,e=md){let t=new dn,n=24e4,s=4800,r=Math.min(128,e);for(let[o,a]of(i.terrain.rules??[]).entries()){let l=Math.round(i.w*i.d*a.density);if(!l||!n||!s||a.collidable&&!r)continue;let c=a.kind==="grass",h=a.model?hh(a.model):c?lS():cS();a.model?h.scale(...hS(oo(a.model),a.fit,a.size)):h.scale(a.size,a.size,a.size),h.computeBoundingBox(),h.translate(0,-h.boundingBox.min.y,0),h.computeBoundingBox();let u=(h.index?.count??h.attributes.position.count)/3,d=Math.min(l,a.kind==="shrub"?1024:3200,Math.floor(n/Math.max(1,u)),s,a.collidable?r:1/0);if(!d){h.dispose();continue}let f=a.model?lh(a.model):new zn({color:"#ffffff",side:c?Yt:ri,flatShading:!0});if(c&&i.terrain.grassTexture){let v=new _i().load(i.terrain.grassTexture);v.colorSpace=xt,f.map=v,f.userData.ownTexture=!0}let m=new Wo(h,f,d);m.name=a.kind,m.userData={ruleIndex:o,seed:a.seed,variation:a.variation,collidable:a.collidable,requestedCount:l},m.instanceMatrix.setUsage(xa),m.receiveShadow=!0;let x=new Ge(a.colorA),g=new Ge(a.colorB),p=new Ge;for(let v=0;v<d;v++)m.setColorAt(v,p.copy(x).lerp(g,Vi(v,41,a.seed)));t.add(m),n-=d*u,s-=d,a.collidable&&(r-=d)}return uS(t,i),t}function uS(i,e){let t=Ca(e),n=new Ut;for(let s of i.children){let{seed:r,variation:o}=s.userData;for(let a=0;a<s.count;a++){let l=(Vi(a,27,r)-.5)*.96*e.w,c=(Vi(a,27,r+1)-.5)*.96*e.d;n.position.set(l,xd(t,l,c),c),n.rotation.y=Vi(a,27,r+2)*Math.PI*2,n.scale.setScalar(1+o*(2*Vi(a,27,r+3)-1)),n.updateMatrix(),s.setMatrixAt(a,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function fg(i){if(i){for(let e of i.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),ch(e.material),e.dispose();i.clear(),i.removeFromParent()}}var mg=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],vd=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Ra={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},dS=8e6,co=512,bi=1024,Gi=512,Wt=(i,e,t,n)=>typeof i=="number"&&Number.isFinite(i)?Math.max(e,Math.min(t,i)):n,pg=(i,e,t)=>typeof i=="string"&&i.trim()?i.trim().slice(0,e):t;function Kt(i){if(typeof i=="string"){if(i.length>dS)throw Error("Cette map d\xE9passe 3 Mo.");i=JSON.parse(i)}if(i?.format!=="gorilla-lab-map"||i.version!==1||!Array.isArray(i.pieces)||i.pieces.length<1||i.pieces.length>co)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+co+" pi\xE8ces.");let e=i.spawn??{},t=i.pieces.filter(n=>!qs(n?.sceneryId)&&!oh(n?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...i.arenaBase===!0?{arenaBase:!0}:{},...i.assetLayer===!0?{assetLayer:!0}:{},...i.editableArena===!0?{editableArena:!0}:{},name:pg(i.name,56,"Ma map"),worldSize:Wt(i.worldSize,24,2048,240),spawn:{x:Wt(e.x,-bi,bi,0),y:Wt(e.y,-256,256,.06),z:Wt(e.z,-bi,bi,3),yaw:Wt(e.yaw,-360,360,0)},pieces:t.map((n,s)=>{if(!n||typeof n!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let r=Wt(n.w,.05,Gi,3),o=Wt(n.d,.05,Gi,3),a=n.terrain&&typeof n.terrain=="object"?Zs(n.terrain,r*o):null,l=n.model?Ys({version:1,models:[n.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:pg(n.name,36,"Pi\xE8ce "+(s+1)),...typeof n.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(n.sceneryId)?{sceneryId:n.sceneryId}:{},x:Wt(n.x,-bi,bi,0),y:Wt(n.y,-256,256,0),z:Wt(n.z,-bi,bi,0),w:r,h:Wt(n.h,.05,256,.5),d:o,pitch:a?0:Wt(n.pitch,-180,180,0),yaw:a?0:Wt(n.yaw,-360,360,0),roll:a?0:Wt(n.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(n.primitive)?n.primitive:"box",uvScale:Wt(n.uvScale,.05,100,1),uvOffsetX:Wt(n.uvOffsetX,-100,100,0),uvOffsetY:Wt(n.uvOffsetY,-100,100,0),uvRotation:Wt(n.uvRotation,-360,360,0),material:Math.round(Wt(n.material,0,16,0)),color:typeof n.color=="string"&&/^#[a-f0-9]{6}$/i.test(n.color)?n.color:"#ffffff",grip:Wt(n.grip,0,1.5,.8),gravity:Wt(n.gravity,.05,2.5,1),bounce:Wt(n.bounce,0,1.65,1),solid:n.solid!==!1,texture:typeof n.texture=="string"&&n.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(n.texture)?n.texture:null}})}}function gg(i){return Kt({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Em,yaw:0},pieces:i.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Xt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function xg(){let i=(e,t,n,s,r,o,a,l,c={})=>({name:e,x:t,y:n,z:s,w:r,h:o,d:a,material:l,...c});return Kt({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[i("Placette",0,-.24,1,13,.48,12,0),i("Piste de glace",-5,-.24,-10,5,.48,11,12,Ra.ice),i("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Ra.moon),i("Couloir central",0,-.24,-12,5,.48,14,9),i("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),i("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),i("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),i("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Ra.rubber)]})}function Gn(i={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...i}}function _g(i,e,t,n=.25){if(!i||!e||!Number.isFinite(n)||n<=0)return null;let s=e,r=new Xt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/n)*n,c=l(i.x+s.x*a),h=l(i.y+s.y*a),u=l(i.z+s.z*a),d=a-(c-i.x)*s.x-(h-i.y)*s.y-(u-i.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>bi||Math.abs(u)>bi||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var yg="gorilla-lab-custom-map-v1";function vg(i){let e=new Blob([JSON.stringify(Kt(i),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=i.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var fS=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Md(){return Gn({name:"Miroir",sceneryId:"lab-mirror",x:as.x,y:as.y,z:as.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function Mg(i,e,t,n){return i?i.arenaBase?!e||!t.has(e)&&!n.has(e)&&!(i.editableArena&&fS.has(e)):!1:!0}var bd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],bg=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Sg(i,e=bg[i]){i=Math.max(0,Math.min(bd.length-1,i|0));let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:bg[i],n.fillRect(0,0,512,512);let s=(i+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])n.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;n.fillStyle=r()>.46?"#fcf5dc":"#212131",n.globalAlpha=.025+r()*.19,o(l,c,i===4?3+r()*62:1+r()*9,1+r()*(i===4?3:8))}if(i===5){n.fillStyle="#151d22",n.globalAlpha=.47;for(let a=0;a<512;a+=128)n.fillRect(0,a,512,3),n.fillRect(a,0,3,512)}return t}var wg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Tg=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},Ag=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",Ia=(i,e,t)=>Math.min(t,Math.max(e,i)),pS=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Sd=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function mS(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function Eg(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Ag(t),r.fillRect(0,0,o,o);let a=mS(s),l=Ia(64/n,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(e)){let h=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let u=0;u<h;u++){let d=a()*o,f=a()*o,m=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,x=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),Sd(r,g=>g.fillRect(d,f,m,x))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Sd(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,Ia(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var gS=`
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
`;function xS(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=gS,document.head.append(i)}async function _S(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function wd({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){xS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
          <label>G\xE9n\xE9rateur<select data-field="pattern"></select></label>
          <div class="texture-setting-row">
            <label>Couleur de fond<input type="color" data-field="base" value="#687a86"></label>
            <label>R\xE9p\xE9tition<input type="range" min=".5" max="5" value="1" step=".25" data-field="scale"></label>
          </div>
          <button data-cmd="generate">R\xE9g\xE9n\xE9rer le motif</button>
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
  </section>`,document.body.append(o);let a=q=>o.querySelector(q),l=a(".texture-canvas"),c=a(".texture-tile"),h=Tg(),u=Tg(),d={pattern:wg.some(([q])=>q===n)?n:"grain",base:Ag(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d"),m=h.getContext("2d"),x=u.getContext("2d"),g=[],p=[],v=!1,b=!1,y=null,A="paint",E=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...wg.map(([q,ue])=>new Option(ue,q))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let q of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+q+"]").addEventListener("input",ue=>{d[q]=["scale","size","opacity","hardness"].includes(q)?Number(ue.target.value):ue.target.value});let R=q=>{a("[data-status]").textContent=q},P=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let q=c.getContext("2d");q.clearRect(0,0,256,128);for(let ue=0;ue<2;ue++)for(let Ve=0;Ve<4;Ve++)q.drawImage(l,Ve*64,ue*64,64,64)},w=()=>({base:m.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512)}),S=q=>{m.putImageData(q.base,0,0),x.putImageData(q.top,0,0),P()},D=()=>{g.push(w()),g.length>16&&g.shift(),p.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},N=(q,ue)=>{q.length&&(ue.push(w()),S(q.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,v=!0)},G=()=>{v&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(D(),Eg(h,d),x.clearRect(0,0,512,512),P(),R("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},H=q=>{let ue=l.getBoundingClientRect();return{x:(q.clientX-ue.left)/ue.width*512,y:(q.clientY-ue.top)/ue.height*512}},V=q=>{let ue=d.size/2,Ve=d.opacity;Sd(x,De=>{De.save(),A==="erase"&&(De.globalCompositeOperation="destination-out"),De.globalAlpha=Ve;let $=Ia(d.hardness,.05,1);if(A==="stamp")De.fillStyle=d.ink,De.translate(q.x,q.y),De.rotate(Math.PI/4),De.fillRect(-ue*.8,-ue*.8,ue*1.6,ue*1.6);else{let se=De.createRadialGradient(q.x,q.y,ue*$*.85,q.x,q.y,ue);if(A==="erase")se.addColorStop(0,"rgba(0,0,0,1)"),se.addColorStop(1,"rgba(0,0,0,0)");else{let Q=d.ink.match(/[\da-f]{2}/gi).map(fe=>parseInt(fe,16)).join(",");se.addColorStop(0,"rgba("+Q+",1)"),se.addColorStop(1,"rgba("+Q+",0)")}De.fillStyle=se,De.beginPath(),De.arc(q.x,q.y,ue,0,2*Math.PI),De.fill()}De.restore()})},X=(q,ue)=>{let Ve=Math.hypot(ue.x-q.x,ue.y-q.y),De=Math.max(1,Math.ceil(Ve/Math.max(2,d.size*.18)));for(let $=1;$<=De;$++)V({x:q.x+(ue.x-q.x)*$/De,y:q.y+(ue.y-q.y)*$/De})},K=q=>{let ue=f.getImageData(Math.floor(Ia(q.x,0,511)),Math.floor(Ia(q.y,0,511)),1,1).data;d.ink="#"+[...ue].slice(0,3).map(Ve=>Ve.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,R("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",q=>{if(q.button!==0||b)return;let ue=H(q);if(A==="pick"){K(ue);return}q.preventDefault(),D(),b=!0,y=q.pointerId,E=ue,l.setPointerCapture(q.pointerId),V(ue),P()}),l.addEventListener("pointermove",q=>{if(!b||q.pointerId!==y)return;q.preventDefault();let ue=H(q);A==="stamp"?V(ue):X(E,ue),E=ue,P()});let W=q=>{q.pointerId===y&&(b=!1,y=null,E=null,l.hasPointerCapture(q.pointerId)&&l.releasePointerCapture(q.pointerId))};l.addEventListener("pointerup",W),l.addEventListener("pointercancel",W);for(let q of o.querySelectorAll("[data-tool]"))q.onclick=()=>{A=q.dataset.tool,o.querySelectorAll("[data-tool]").forEach(ue=>ue.setAttribute("aria-pressed",String(ue===q)))};a("[data-cmd=generate]").onclick=G,a("[data-cmd=undo]").onclick=()=>N(g,p),a("[data-cmd=redo]").onclick=()=>N(p,g),a("[data-cmd=export]").onclick=()=>pS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async q=>{let ue=q.target.files?.[0];if(q.target.value="",!!ue)try{if(!["image/png","image/jpeg","image/webp"].includes(ue.type))throw Error("Image PNG / JPG / WebP uniquement.");if(ue.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ve=await createImageBitmap(ue);D(),m.clearRect(0,0,512,512),m.drawImage(Ve,0,0,512,512),Ve.close(),x.clearRect(0,0,512,512),P(),R("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ve){R(Ve.message)}});let ee=q=>{!q&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",me,!0),o.remove())},me=q=>{if(q.key==="Escape"){q.preventDefault(),ee(!1);return}(q.ctrlKey||q.metaKey)&&!q.target.closest("input,select")&&q.key.toLowerCase()==="z"&&(q.preventDefault(),q.stopImmediatePropagation(),q.shiftKey?N(p,g):N(g,p))};window.addEventListener("keydown",me,!0),a("[data-cmd=close]").onclick=()=>ee(!1),a("[data-cmd=cancel]").onclick=()=>ee(!1);let Ee=()=>{for(let q of[512,384,256,192]){let ue=document.createElement("canvas");ue.width=ue.height=q,ue.getContext("2d").drawImage(l,0,0,q,q);for(let Ve of[.85,.72,.58]){let De=ue.toDataURL("image/webp",Ve);if(De.length<=s)return De}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let q=a("[data-cmd=apply]");q.disabled=!0;try{let ue=Ee();await r(ue),v=!1,ee(!0)}catch(ue){R(ue.message||"Impossible d\u2019appliquer la texture.")}finally{q.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Eg(h,d),P(),i&&_S(i,h).then(P).catch(()=>R("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>ee(!1)}}var js=new Fs,gn=new M,ps=new M,Nt=new ht,Cg={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},Td={type:"change"},Rg={type:"mouseDown",mode:null},Ig={type:"mouseUp",mode:null},Pg={type:"objectChange"},yh=class extends Os{constructor(e,t=null){super(void 0,t);let n=new Ad(this);this._root=n;let s=new Cd;this._gizmo=s,n.add(s);let r=new Rd;this._plane=r,n.add(r);let o=this;function a(b,y){let A=y;Object.defineProperty(o,b,{get:function(){return A!==void 0?A:y},set:function(E){A!==E&&(A=E,r[b]=E,s[b]=E,o.dispatchEvent({type:b+"-changed",value:E}),o.dispatchEvent(Td))}}),o[b]=y,r[b]=y,s[b]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,h=new ht,u=new ht,d=new M,f=new ht,m=new M,x=new M,g=new M,p=0,v=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",p),a("eye",v),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new ht,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new ht,this._scaleStart=new M,this._getPointer=yS.bind(this),this._onPointerDown=MS.bind(this),this._onPointerHover=vS.bind(this),this._onPointerMove=bS.bind(this),this._onPointerUp=SS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&js.setFromCamera(e,this.camera);let t=Ed(this._gizmo.picker[this.mode],js);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&js.setFromCamera(e,this.camera);let t=Ed(this._plane,js,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Rg.mode=this.mode,this.dispatchEvent(Rg)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&js.setFromCamera(e,this.camera);let o=Ed(this._plane,js,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ps.set(a,a,a)}else gn.copy(this.pointStart),ps.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),ps.applyQuaternion(this._worldQuaternionInv),ps.divide(gn),t.search("X")===-1&&(ps.x=1),t.search("Y")===-1&&(ps.y=1),t.search("Z")===-1&&(ps.z=1);s.scale.copy(this._scaleStart).multiply(ps),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Cg[t]),gn.copy(Cg[t]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Td),this.dispatchEvent(Pg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Ig.mode=this.mode,this.dispatchEvent(Ig)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Td),this.dispatchEvent(Pg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return js}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function yS(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function vS(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function MS(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function bS(i){this.enabled&&this.pointerMove(this._getPointer(i))}function SS(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ed(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var mh=new Xt,Rt=new M(0,1,0),Dg=new M(0,0,0),Lg=new ct,gh=new ht,_h=new ht,Si=new M,Ug=new ct,La=new M(1,0,0),Js=new M(0,1,0),Ua=new M(0,0,1),xh=new M,Pa=new M,Da=new M,Ad=class extends Ut{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Cd=class extends Ut{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Ht({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Zn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new wt(0,.04,.1,12);x.translate(0,.05,0);let g=new Xe(.08,.08,.08);g.translate(0,.04,0);let p=new it;p.setAttribute("position",new Ue([0,0,0,1,0,0],3));let v=new wt(.0075,.0075,.5,3);v.translate(0,.25,0);function b(V,X){let K=new vn(V,.0075,3,64,X*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function y(){let V=new it;return V.setAttribute("position",new Ue([0,0,0,1,1,1],3)),V}let A={X:[[new ge(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ge(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ge(x,o),[0,.5,0]],[new ge(x,o),[0,-.5,0],[Math.PI,0,0]],[new ge(v,o)]],Z:[[new ge(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ge(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ge(new Jn(.1,0),u),[0,0,0]]],XY:[[new ge(new Xe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ge(new Xe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new Xe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new ge(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new wt(.2,0,.6,4),n),[0,.3,0]],[new ge(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ge(new Jn(.2,0),n)]],XY:[[new ge(new Xe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new Xe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new Xe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new ge(new Jn(.01,2),s),null,null,null,"helper"]],END:[[new ge(new Jn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Tn(y(),s),null,null,null,"helper"]],X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new ge(b(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new ge(b(.5,.5),r)]],Y:[[new ge(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ge(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ge(b(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new ge(new En(.25,10,8),n)]],X:[[new ge(new vn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ge(new vn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ge(new vn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ge(new vn(.75,.1,2,24),n)]]},D={X:[[new ge(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ge(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ge(g,o),[0,.5,0]],[new ge(v,o)],[new ge(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ge(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(v,a),[0,0,0],[Math.PI/2,0,0]],[new ge(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ge(new Xe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ge(new Xe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new Xe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new Xe(.1,.1,.1),u)]]},N={X:[[new ge(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new wt(.2,0,.6,4),n),[0,.3,0]],[new ge(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ge(new Xe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new Xe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new Xe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new Xe(.2,.2,.2),n),[0,0,0]]]},G={X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function H(V){let X=new Ut;for(let K in V)for(let W=V[K].length;W--;){let ee=V[K][W][0].clone(),me=V[K][W][1],Ee=V[K][W][2],q=V[K][W][3],ue=V[K][W][4];ee.name=K,ee.tag=ue,me&&ee.position.set(me[0],me[1],me[2]),Ee&&ee.rotation.set(Ee[0],Ee[1],Ee[2]),q&&ee.scale.set(q[0],q[1],q[2]),ee.updateMatrix();let Ve=ee.geometry.clone();Ve.applyMatrix4(ee.matrix),ee.geometry=Ve,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),X.add(ee)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=H(A)),this.add(this.gizmo.rotate=H(P)),this.add(this.gizmo.scale=H(D)),this.add(this.picker.translate=H(E)),this.add(this.picker.rotate=H(S)),this.add(this.picker.scale=H(N)),this.add(this.helper.translate=H(R)),this.add(this.helper.rotate=H(w)),this.add(this.helper.scale=H(G)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:_h;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Nt.setFromEuler(mh.set(0,0,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Rt.copy(La).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Nt.setFromEuler(mh.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Nt),Math.abs(Rt.copy(Js).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Nt.setFromEuler(mh.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Rt.copy(Ua).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Nt.setFromEuler(mh.set(0,Math.PI/2,0)),Rt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Lg.lookAt(Dg,Rt,Js)),o.quaternion.multiply(Nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Rt.copy(La).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Rt.copy(Js).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Rt.copy(Ua).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Rt.copy(Ua).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Rt.copy(La).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Rt.copy(Js).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(gh.copy(n),Rt.copy(this.eye).applyQuaternion(Nt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Lg.lookAt(this.eye,Dg,Js)),o.name==="X"&&(Nt.setFromAxisAngle(La,Math.atan2(-Rt.y,Rt.z)),Nt.multiplyQuaternions(gh,Nt),o.quaternion.copy(Nt)),o.name==="Y"&&(Nt.setFromAxisAngle(Js,Math.atan2(Rt.x,Rt.z)),Nt.multiplyQuaternions(gh,Nt),o.quaternion.copy(Nt)),o.name==="Z"&&(Nt.setFromAxisAngle(Ua,Math.atan2(Rt.y,Rt.x)),Nt.multiplyQuaternions(gh,Nt),o.quaternion.copy(Nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Rd=class extends ge{constructor(){super(new on(1e5,1e5,2,2),new Ht({visible:!1,wireframe:!0,side:Yt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),xh.copy(La).applyQuaternion(t==="local"?this.worldQuaternion:_h),Pa.copy(Js).applyQuaternion(t==="local"?this.worldQuaternion:_h),Da.copy(Ua).applyQuaternion(t==="local"?this.worldQuaternion:_h),Rt.copy(Pa),this.mode){case"translate":case"scale":switch(this.axis){case"X":Rt.copy(this.eye).cross(xh),Si.copy(xh).cross(Rt);break;case"Y":Rt.copy(this.eye).cross(Pa),Si.copy(Pa).cross(Rt);break;case"Z":Rt.copy(this.eye).cross(Da),Si.copy(Da).cross(Rt);break;case"XY":Si.copy(Da);break;case"YZ":Si.copy(xh);break;case"XZ":Rt.copy(Da),Si.copy(Pa);break;case"XYZ":case"E":Si.set(0,0,0);break}break;case"rotate":default:Si.set(0,0,0)}Si.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ug.lookAt(gn.set(0,0,0),Si,Rt),this.quaternion.setFromRotationMatrix(Ug)),super.updateMatrixWorld(e)}};function Ng(i,e,t=!1){if(t)return{x:i.x,y:i.y,z:i.z};let n=new M((e.w-i.w)/2,i.terrain?0:(e.h-i.h)/2,(e.d-i.d)/2);return n.applyEuler(new Xt(Ne.degToRad(i.pitch),Ne.degToRad(i.yaw),Ne.degToRad(i.roll??0),"YXZ")),{x:i.x+n.x,y:i.y+n.y,z:i.z+n.z}}var Fg={type:"change"},Pd={type:"start"},Bg={type:"end"},vh=new Qi,Og=new un,wS=Math.cos(70*Ne.DEG2RAD),$t=new M,In=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6,Mh=class extends Os{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new ht,this._lastTargetPosition=new M,this._quat=new ht().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gr,this._sphericalDelta=new Gr,this._scale=1,this._panOffset=new M,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new M,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ES.bind(this),this._onPointerDown=TS.bind(this),this._onPointerUp=AS.bind(this),this._onContextMenu=US.bind(this),this._onMouseWheel=IS.bind(this),this._onKeyDown=PS.bind(this),this._onTouchStart=DS.bind(this),this._onTouchMove=LS.bind(this),this._onMouseDown=CS.bind(this),this._onMouseMove=RS.bind(this),this._interceptControlDown=NS.bind(this),this._interceptControlUp=FS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=At.NONE}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$t.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vh.origin.copy(this.object.position),vh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vh.direction))<wS?this.object.lookAt(this.target):(Og.setFromNormalAndCoplanarPoint(this.object.up,this.target),vh.intersectPlane(Og,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function TS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ES(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function AS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bg),this.state=At.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function CS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case Kn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case Kn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pd)}function RS(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function IS(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent(Pd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bg))}function PS(i){this.enabled!==!1&&this._handleKeyDown(i)}function DS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pd)}function LS(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function US(i){this.enabled!==!1&&i.preventDefault()}function NS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var F=i=>document.getElementById(i),Xg=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],qg=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Th=[...document.querySelectorAll(".tool")],Yg="gorilla-lab-editor-draft",Hi=Zm(localStorage),OS=ud(),Mn=[...new Map([...OS,...Hi.models].map(i=>[i.id,i])).values()].filter(i=>i.parts.length);function Zg(i){let e=i??F("model-library").value;F("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Mn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Mn.some(t=>t.id===e)?F("model-library").value=e:Mn.length===1&&(F("model-library").value=Mn[0].id),F("place-model").disabled=!Mn.length}var jg=new URLSearchParams(location.search),Nd=jg.get("model"),Fd="gorilla-lab-edit-map-model";Zg(Nd);function Ks(){return Mn.find(i=>i.id===F("model-library").value)}function Jg(){let i=Ks();if(!i)return null;let e=oo(i);return Gn({name:i.name.slice(0,36),model:structuredClone(i),x:0,y:Math.max(.15,e.y/2),z:0,w:Ne.clamp(e.x,.2,64),h:Ne.clamp(e.y,.12,36),d:Ne.clamp(e.z,.2,64),color:"#ffffff",solid:i.properties.collidable!==!1})}F("model-library").addEventListener("change",()=>{Ke==="model"&&Wi(null),$d()});var Dd={block:Gn({w:1,h:1,d:1}),ramp:Gn({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:Gn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Zs({amplitude:.7,grassDensity:1.7})}),wall:Gn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Vd={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ae,yt=-1,Ke="move",pt=null,Hn=null,ms=[],Qt=F("preview"),nt=F("plan"),ot=nt.getContext("2d");function BS(){let i={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,n,s]=i[F("shape-preset").value]??i.slab;return Gn({name:e,w:t,h:n,d:s,y:n/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(F("shape-preset").value)?F("shape-preset").value:"box"})}var zS=F("editor-views");function Va(){zS.dataset.layout=F("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",F("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",F("sidebar-width").value+"px"),requestAnimationFrame(()=>{Ph(),Dh()})}for(let i of["layout-mode","view-split","sidebar-width"])F(i).addEventListener("input",Va);F("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Va()};var Od=F("workspace-fullscreen");Od.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{rt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let i=document.fullscreenElement===document.documentElement;Od.setAttribute("aria-pressed",String(i)),Od.textContent=i?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{Ph(),Dh()})});F("focus-3d").onclick=()=>{F("layout-mode").value="only-3d",Va()};F("focus-plan").onclick=()=>{F("layout-mode").value="only-plan",Va()};function kS(){let i=document.querySelector("main"),e=i.querySelector("aside.panel");e.id="scene-sidebar";let t=(Q,fe,ce)=>{let ke=document.createElement(Q);return fe&&(ke.className=fe),ce!==void 0&&(ke.textContent=ce),ke},n=t("nav","tool-rail");n.id="tool-rail",n.setAttribute("aria-label","Outils de l\u2019atelier"),i.prepend(n);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let Q of Th){let fe=Q.dataset.tool,ce=Q.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[fe]){let ke=t("div","rail-divider");ke.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[fe]],n.append(ke)}Q.classList.add("rail-tool"),Q.title=ce+" \xB7 "+(Vd[fe]??""),Q.setAttribute("aria-label",ce),Q.replaceChildren(t("span","rail-glyph",s[fe]??"\u25A1"),t("span","rail-caption",ce==="Redimensionner"?"\xC9chelle":ce==="S\xE9lectionner"?"S\xE9lect.":ce==="D\xE9placer"?"D\xE9placer":ce==="Atelier"?"Mod\xE8le":ce)),n.append(Q)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=F("shape-preset").closest("label"),h=F("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),u&&o.append(u);let m=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(m);let x=t("p","model-count-hint","");o.append(x),i.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let v=F("layout-mode").closest("label");v.classList.add("viewport-layout"),g.prepend(v);let b=t("span","active-selection","Aucune s\xE9lection");b.id="active-selection",v.after(b);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let A=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let Q of E){let fe=F(Q);fe&&A.append(fe.closest("label"))}y.append(A),g.append(y);let R=Q=>{if(Q==="close"){o.hidden=!0;return}let fe=Q==="model";o.hidden=!1,o.dataset.mode=Q,a.textContent=fe?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!fe,c.hidden=fe,d.hidden=!fe,f.hidden=!fe,u&&(u.hidden=!fe),m.textContent=fe?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!fe,x.textContent=fe?Mn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ce=Ks();d.disabled=!ce,d.textContent=ce?"\u2B21 Placer \xAB "+ce.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!ce||!Hi.models.some(ut=>ut.id===ce.id),u&&(u.href="./model-editor.html"+(ce?ce.assetId&&ce.id==="custom-model-game-"+ce.assetId?"?asset="+encodeURIComponent(ce.assetId):"?model="+encodeURIComponent(ce.id):"")),F(fe?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{Ks()&&(Ti("model"),R("close"),Qt.focus({preventScroll:!0}),rt("Clique dans la sc\xE8ne pour placer \xAB "+Ks().name+" \xBB."))},f.onclick=()=>{let Q=Ks();if(!(!Q||!Hi.models.some(fe=>fe.id===Q.id))&&confirm("Supprimer d\xE9finitivement \xAB "+Q.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let fe=Ys({...Hi,models:Hi.models.filter(ke=>ke.id!==Q.id),avatarId:Hi.avatarId===Q.id?null:Hi.avatarId});localStorage.setItem(fd,JSON.stringify(fe)),Object.assign(Hi,fe);let ce=Mn.findIndex(ke=>ke.id===Q.id);ce>=0&&Mn.splice(ce,1),Zg(),Ke==="model"&&!Mn.length&&Ti("move"),Wi(null),$d(),R("model"),rt("\xAB "+Q.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(fe){rt("Suppression impossible : "+(fe.message||"stockage local indisponible"))}},F("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&R("model")});for(let Q of["model","preset"])Th.find(ce=>ce.dataset.tool===Q)?.addEventListener("click",()=>R(Q));window.addEventListener("pointerdown",Q=>{!o.hidden&&!o.contains(Q.target)&&!Q.target.closest(".rail-tool")&&R("close")}),window.addEventListener("keydown",Q=>{Q.key==="Escape"&&R("close")});let P=t("section","outliner");P.id="scene-outline";let w=t("header","side-section-head");w.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),w.append(t("span","outline-meta","Objets")),P.append(w);let S=e.querySelector("#pieces").closest(".inspector-section");S.id="outline-content",P.append(S);let D=t("section","property-pane"),N=t("nav","inspector-tabs");N.setAttribute("aria-label","Propri\xE9t\xE9s");let G=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Comportements"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[Q,fe]of G){let ce=t("button","inspector-tab",fe);ce.type="button",ce.dataset.tab=Q,ce.setAttribute("aria-pressed",String(Q==="object")),N.append(ce)}let H=t("div","property-content");H.id="property-content";let V=F("piece-inspector").closest(".inspector-section");V.id="object-section";let X=V.querySelector("#surface").closest("details");X.id="surface-controls";let K=t("section");K.id="collision-options",K.append(t("h3","","Collisions de la pi\xE8ce")),K.append(V.querySelector("#p-solid").closest("label"),F("debug-controls"));let W=t("section");W.id="behavior-options";let ee=t("div","fields");for(let Q of["surface","p-grip","p-gravity","p-bounce"])ee.append(X.querySelector("#"+Q).closest("label"));W.append(t("h3","","Propri\xE9t\xE9s physiques")),W.append(ee,V.querySelector("#model-object-controls"));let me=t("section");me.id="publish-options";let Ee=t("div","piece-actions");for(let[Q,fe]of[["test-map","Jouer cette map"],["export-map","Exporter JSON"]]){let ce=t("button","",fe);ce.type="button",ce.addEventListener("click",()=>F(Q).click()),Ee.append(ce)}me.append(Ee),H.append(V,K,W,me);let q=t("section","scene-options");q.id="scene-options",q.append(t("h2","","Param\xE8tres de carte"));let ue=F("map-name").closest("label"),Ve=F("map-world-size").closest(".fields"),De=F("draft-status");q.append(ue,Ve,De);let $=[...e.children].filter(Q=>Q.tagName==="DETAILS");for(let Q of $)q.append(Q);H.append(q),D.append(N,H),e.replaceChildren(P,D);let se=Q=>{let fe=ae?.pieces?.[yt];["terrain","props"].includes(Q)&&!fe?.terrain&&(Q="object"),["material","behavior"].includes(Q)&&!fe&&(Q="object"),e.dataset.tab=Q;for(let ce of N.querySelectorAll("button"))ce.setAttribute("aria-pressed",String(ce.dataset.tab===Q)),ce.disabled=["terrain","props"].includes(ce.dataset.tab)&&!fe?.terrain;Q==="terrain"&&(F("terrain-controls").open=!0),Q==="material"&&(X.open=!0),H.scrollTop=0};for(let Q of N.querySelectorAll("button"))Q.addEventListener("click",()=>se(Q.dataset.tab));window.setInspectorTab=se,se("object")}kS();var Tt={scale:10,cx:0,cz:-6,width:30,height:40},Ga=new Yc({canvas:Qt,antialias:!0});Ga.setPixelRatio(Math.min(devicePixelRatio,1.5));var Vt=new hn(52,1,.1,640);Vt.position.set(16,15,19);var Lt=new Mh(Vt,Qt);Lt.target.set(0,0,-5);Lt.mouseButtons.LEFT=null;Lt.mouseButtons.RIGHT=Kn.ROTATE;Lt.mouseButtons.MIDDLE=Kn.PAN;Lt.maxDistance=580;Lt.maxPolarAngle=Math.PI/2-.035;var xn=new Lr;xn.background=new Ge("#8fb6c6");var Kg=new Us("#f0f5ff","#8e775c",2.6);xn.add(Kg);var Gd=new Ns("#fff1d2",1.8);Gd.position.set(-9,18,6);xn.add(Gd);var nr=new Lr;nr.fog=new Vo("#a6d4ea",55,135);var xs=Pm(nr,Ga);xs.probe.userData.editorAssetId="chrome-sphere";var FA=Dm(nr,xs.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),VS=new Map(ud().map(i=>[i.assetId,i]));function zg(i,e,t=null,n=null){let s=structuredClone(t??VS.get(i));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+i);let r=uh(s),o=r.getSize(new M),a=r.getCenter(new M);return Gn({name:(n??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Hd=()=>{let i=gg(xs.boxes),e=xs.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:n,zMin:s,zMax:r}=e,o=32,a=n-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let d=t+u%(o+1)/o*a,f=s+Math.floor(u/(o+1))/o*l;return e.height(d,f)});i.pieces.push(Gn({name:"Relief principal",sceneryId:"lab-hill",x:(t+n)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:Zs({detail:o,seed:1,amplitude:0,heights:c})}))}return i.assetLayer=!0,i.editableArena=!0,i.pieces.push(Md()),Bm((t,n)=>{let s=cd[t];s&&i.pieces.push(zg(s,n))}),i.pieces.push(zg("chrome-sphere",new M(ls.x,ls.y,ls.z))),Kt(i)};ae=Hd();var Wd=new ge(new Xe(1.8,2.03,.1),new tn({color:"#8daebc",metalness:.9,roughness:.12}));Wd.position.set(as.x,as.y,as.z);Wd.userData.editorAssetId="lab-mirror";nr.add(Wd);var GS=xs.boxes.filter(i=>i.half&&i.mesh?.isObject3D);GS.forEach(i=>i.mesh.removeFromParent());var Eh=new dn;Eh.add(...nr.children);xn.add(Eh);var er=xs.boxes.find(i=>i.heightfield).mesh;er.userData.editorAssetId="lab-hill";xs.visual(7,0,7,!0,!0,!0,512,!1);var po=new ca(60,60,"#d7e2e5","#5e7b8a");po.material.transparent=!0;po.material.opacity=.35;xn.add(po);var _t=new dn;xn.add(_t);var tt=new yh(Vt,Qt);tt.setSize(.9);tt.setRotationSnap(Ne.degToRad(5));tt.enabled=!1;xn.add(tt.getHelper());var Xd=new Set(["translate","rotate","scale"]),tr=null,Pn=null,qd=!1,Na=null,bh=!1,$g=()=>Number(F("magnet-distance").value);for(let i of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+i);[...F(i).options].some(t=>t.value===e)&&(F(i).value=e)}catch{}F(i).onchange=()=>{Pn=null;try{localStorage.setItem("gorilla-lab-"+i,F(i).value)}catch{}}}var $s=new Map;try{F("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}F("magnet").onchange=()=>{Pn=null,$s.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",F("magnet").checked?"on":"off")}catch{}};for(let i of["keydown","keyup"])window.addEventListener(i,e=>{qd=e.altKey});window.addEventListener("blur",()=>{qd=!1,Pn=null});function Qg(i,e,t,n){let s={...e};if(!n)for(let m of t)s[m]=Math.round(e[m]/za())*za();if(n||!F("magnet").checked||!i.solid||i.terrain)return Pn=null,s;let r=$g(),o=F("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let x=new Xt(...[m.pitch,m.yaw,m.roll??0].map(Ne.degToRad),"YXZ"),g=new ct().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((p,v)=>[p,(Math.abs(g[v])*m.w+Math.abs(g[4+v])*m.h+Math.abs(g[8+v])*m.d)/2]))},c=l(i);if(!c)return s;let h=[];for(let m of ae.pieces){if(m===i)continue;let x=l(m);if(x)for(let g of t){let p=Object.keys(a).filter(y=>y!==g),v=y=>Math.abs(s[y]-m[y])<c[y]+x[y]-.001,b=p.flatMap(y=>t.includes(y)&&v(p.find(A=>A!==y))?[-1,1].flatMap(A=>[-1,1].map(E=>{let R=m[y]+A*x[y]-E*c[y];return{key:y,value:R,distance:Math.abs(e[y]-R)}})):[]).sort((y,A)=>y.distance-A.distance)[0];if(!(o?!b||b.distance>r*1.8:!p.every(v)))for(let y of[-1,1]){let A=m[g]+y*(c[g]+x[g]),E=ae.pieces.indexOf(m)+":"+g+":"+y;h.push({key:E,axis:g,value:A,edge:o?b:null,distance:Math.max(Math.abs(A-e[g]),o?b.distance:0)})}}}let u=h.find(m=>m.key===Pn),d=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Pn&&($s.set(Pn,($s.get(Pn)??0)+1),Pn=null);let f=h.filter(m=>m.distance<=r&&($s.get(m.key)??0)<3).sort((m,x)=>m.distance-x.distance)[0];if(f)d(f),Pn=f.key;else for(let m of h)m.distance<=r&&($s.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=e[m.axis]);return s}var Fa=new Xe(1,1,1),HS=od(),WS=new _i,Ah=.025,XS=new ts(.24,.36,40).rotateX(-Math.PI/2),e0=new Ht({color:"#ffcd63",side:Yt}),Dn=new ge(XS,e0),t0=new ge(new on(.12,.2).rotateX(-Math.PI/2),e0);t0.position.set(0,0,-.39);Dn.add(t0);xn.add(Dn);var Qs=new ge(Fa,new Ht({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),uo=new ge(new En(.055,10,8),new Ht({color:"#ffc85a",depthTest:!1}));uo.visible=!1;uo.renderOrder=20;xn.add(uo);var Oa=new ge(Dn.geometry,new Ht({color:"#ffe084",side:Yt,opacity:.65,transparent:!0,depthWrite:!1}));Qs.visible=Oa.visible=!1;xn.add(Qs,Oa);var gs=new Fs,Ih=new M(0,1,0),kg=new un(Ih,0),qS=new $e,ui=null,Ld=!1;function sn(){Ld||(Ld=!0,requestAnimationFrame(()=>{Ld=!1,Ga.render(xn,Vt),f0()}))}function Ph(){let i=Qt.clientWidth||1,e=Qt.clientHeight||1;Ga.setSize(i,e,!1),Vt.aspect=i/e,Vt.updateProjectionMatrix(),sn()}function Dh(){let i=Math.max(1,nt.clientWidth),e=Math.max(1,nt.clientHeight);i===nt.width&&e===nt.height||(nt.width=i,nt.height=e,Yd(),Qn())}new ResizeObserver(Ph).observe(Qt);new ResizeObserver(Dh).observe(nt);Lt.addEventListener("change",sn);Lt.addEventListener("start",()=>Wi(null));function Yd(){Tt.scale=Math.min(nt.width/Tt.width,nt.height/Tt.height)}function Ch(i,e){return[nt.width/2+(i-Tt.cx)*Tt.scale,nt.height/2+(e-Tt.cz)*Tt.scale]}function Bd(i){let e=nt.getBoundingClientRect();return{x:((i.clientX-e.left)*nt.width/e.width-nt.width/2)/Tt.scale+Tt.cx,z:((i.clientY-e.top)*nt.height/e.height-nt.height/2)/Tt.scale+Tt.cz}}function Vg(i,e,t,n,s){let[r,o]=Ch(i.x,i.z),a=Ne.degToRad(i.pitch),l=Ne.degToRad(i.roll??0),c=Math.abs(Math.cos(l))*i.w+Math.abs(Math.sin(l))*i.h,h=Math.abs(Math.cos(a))*i.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*i.w+Math.abs(Math.cos(l))*i.h);ot.save(),ot.translate(r,o),ot.rotate(-Ne.degToRad(i.yaw));let u=c*Tt.scale,d=h*Tt.scale;ot.globalAlpha=s,ot.fillStyle=e,ot.fillRect(-u/2,-d/2,u,d),ot.globalAlpha=1,ot.strokeStyle=t,ot.lineWidth=n,ot.strokeRect(-u/2,-d/2,u,d),ot.restore()}function Gg(i,e){let[t,n]=Ch(i.x,i.z);ot.save(),ot.translate(t,n),ot.rotate(Ne.degToRad(-i.yaw)),ot.strokeStyle=e?"#fff0bb":"#ffd16e",ot.lineWidth=2,ot.beginPath(),ot.arc(0,0,6,0,Math.PI*2),ot.moveTo(0,-6),ot.lineTo(0,-11),ot.stroke(),ot.restore()}function Qn(){ot.fillStyle="#192e3a",ot.fillRect(0,0,nt.width,nt.height),ot.strokeStyle="#37505f",ot.lineWidth=1;let i=Tt.scale<1?25:Tt.scale<4?10:Tt.scale<12?5:1,e=(ae.worldSize??240)/2;for(let r=-Math.ceil(e/i)*i;r<=e;r+=i){let[o,a]=Ch(r,r);o>=0&&o<=nt.width&&(ot.beginPath(),ot.moveTo(o,0),ot.lineTo(o,nt.height),ot.stroke()),a>=0&&a<=nt.height&&(ot.beginPath(),ot.moveTo(0,a),ot.lineTo(nt.width,a),ot.stroke())}let[t,n]=Ch(-e,-e);ot.strokeStyle="#ffda9077",ot.lineWidth=2,ot.strokeRect(t,n,e*2*Tt.scale,e*2*Tt.scale);let s=ae.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?vd[r.material]:r.color);Vg(r,a,o===yt?"#ffe095":"#a4bac7",o===yt?2:1,r.solid?.86:.38)}Gg(ae.spawn,!1),Hn&&(Ke==="spawn"?Gg(Hn,!0):Vg(Hn,"#8ee7fc","#afefff",2,.45))}function Rh(i,e){i.position.set(e.x,e.y,e.z),e.terrain&&i!==Qs?i.scale.setScalar(1):i.scale.set(e.w,e.h,e.d),i.rotation.set(Ne.degToRad(e.pitch),Ne.degToRad(e.yaw),Ne.degToRad(e.roll??0),"YXZ"),i.updateMatrixWorld()}function n0(){ui&&(xn.remove(ui),ui.geometry.dispose(),ui.material.dispose());let i=_t.children[yt];ui=i?new Hr(i,"#ffdf88"):null,ui&&xn.add(ui),zd()}function zd(){if(Ke==="spawn"){tt.enabled=!0,tt.setMode("translate"),tt.setSpace("world"),tt.setTranslationSnap(null),tt.showX=tt.showY=tt.showZ=!0,tt.attach(Dn);return}let i=_t.children[yt],e=at()?.terrain,t=Xd.has(Ke)&&!!i&&!(e&&Ke==="rotate");if(tt.enabled=t,!t){tt.detach(),e&&Ke==="rotate"&&(F("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}tt.setMode(Ke),tt.setSpace(Ke==="translate"?"world":"local"),tt.setTranslationSnap(null),tt.showX=tt.showZ=!0,tt.showY=!(e&&Ke==="scale"),tt.attach(i),F("tool-help").textContent=Vd[Ke]}var fo=!1;function i0(){if(Ke!=="scale")return;let i=at(),e=tr?.map.pieces[yt],t=tt.object;if(!i||!e||!t)return;let n=Ng(e,i,fo),s=(ae.worldSize??240)/2;i.x=Ne.clamp(n.x,-s,s),i.y=Ne.clamp(n.y,-256,256),i.z=Ne.clamp(n.z,-s,s),t.position.set(i.x,i.y,i.z),ui?.update();for(let r of["x","y","z"])F("p-"+r).value=i[r].toFixed(2);Qn(),sn()}function s0(i){let e=fo;fo=i.ctrlKey,e!==fo&&tt.dragging&&i0()}for(let i of["keydown","keyup"])window.addEventListener(i,s0);Qt.addEventListener("pointermove",s0,{capture:!0});tt.addEventListener("change",sn);tt.addEventListener("mouseDown",()=>{let i=at();Pn=null,(i||tt.object===Dn)&&(tr={map:structuredClone(ae),selected:yt}),fo=!!(fo||window.event?.ctrlKey)});tt.addEventListener("objectChange",()=>{let i=at(),e=tt.object,t=tr?.map.pieces[yt];if(e===Dn&&tr){let s=(ae.worldSize??240)/2,r=Ne.clamp;ae.spawn.x=r(Dn.position.x,-s,s),ae.spawn.y=r(Dn.position.y-Ah,-256,256),ae.spawn.z=r(Dn.position.z,-s,s),Dn.position.set(ae.spawn.x,ae.spawn.y+Ah,ae.spawn.z);for(let o of["x","y","z"])F("spawn-"+o).value=ae.spawn[o].toFixed(2);Qn();return}if(!i||!e||!t)return;let n=Ne.clamp;if(Ke==="translate"){let s=["x","y","z"].filter(a=>(tt.axis??"XYZ").includes(a.toUpperCase())),r=Qg(i,{x:e.position.x,y:e.position.y,z:e.position.z},s,qd),o=(ae.worldSize??240)/2;i.x=n(r.x,-o,o),i.y=n(r.y,-256,256),i.z=n(r.z,-o,o),e.position.set(i.x,i.y,i.z)}else Ke==="rotate"?(i.pitch=Ne.radToDeg(e.rotation.x),i.yaw=Ne.radToDeg(e.rotation.y),i.roll=Ne.radToDeg(e.rotation.z)):(i.w=n(e.scale.x*(i.terrain?t.w:1),.05,Gi),i.d=n(e.scale.z*(i.terrain?t.d:1),.05,Gi),i.terrain||(i.h=n(e.scale.y,.05,256)),e.scale.set(i.terrain?i.w/t.w:i.w,i.terrain?1:i.h,i.terrain?i.d/t.d:i.d),i0());e.updateMatrixWorld(!0),ui?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])F("p-"+s).value=Number(i[s]??0).toFixed(2);Qn(),sn()});tt.addEventListener("dragging-changed",({value:i})=>{if(Lt.enabled=!i,i||!tr)return;let e=tr;tr=null;let t=tt.object===Dn,n=t?e.map.spawn:e.map.pieces[yt],s=t?ae.spawn:at();JSON.stringify(n)!==JSON.stringify(s)&&(ms.length>=35&&ms.shift(),ms.push(e),ae=Kt(ae),mt(),rt("Transformation appliqu\xE9e."))});Qt.addEventListener("pointerup",()=>{tt.dragging||(Lt.enabled=!0)});Qt.addEventListener("pointercancel",()=>{tt.dragging&&tt.pointerUp(null),Lt.enabled=!0});function YS(){tt.detach();for(let n of[..._t.children])_t.remove(n),n.geometry!==Fa&&n.geometry.dispose(),n.userData.pickProxy&&(n.userData.pickProxy.geometry.dispose(),n.userData.pickProxy.material.dispose()),n.userData.vegetation&&fg(n.userData.vegetation),n.userData.ownsTexture&&n.material.map?.dispose(),ch(n.material);Eh.visible=!!ae.arenaBase;let i=new Set(ae.pieces.map(n=>n.model?.assetId).filter(Boolean)),e=new Set(ae.pieces.map(n=>n.sceneryId).filter(Boolean));Eh.traverse(n=>{let s=n.userData.editorAssetId;s&&(n.visible=Mg(ae,s,i,e))}),Gd.visible=Kg.visible=!ae.arenaBase,xn.fog=ae.arenaBase?nr.fog:null,xn.environment=ae.arenaBase?nr.environment:null;let t=md;for(let n of ae.pieces){if(n.model){let l=new ge(hh(n.model),lh(n.model));l.castShadow=l.receiveShadow=!0;let c=new ge(new Xe(1,1,1),new Ht({colorWrite:!1,depthWrite:!1,side:Yt}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=_t.children.length,_t.add(l),Rh(l,n);continue}let s=[10,11,12].includes(n.material),r=new zn({color:new Ge(vd[n.material]).multiply(new Ge(n.color)),transparent:!n.solid||s,opacity:n.solid?s?.55:1:.4});if(ae.arenaBase&&!n.texture){let l=xs.mapMaterial(n.material,7);r.color.set(n.color),r.map=l.map,r.opacity=n.solid?l.opacity:.4,r.transparent=!n.solid||l.transparent}n.texture&&(r.map=WS.load(n.texture,sn),r.map.colorSpace=xt,r.map.wrapS=r.map.wrapT=On,r.color.set(n.color));let o=n.terrain?yd(n):n.primitive==="ramp"?od(n.w,n.h,n.d).scale(1/n.w,1/n.h,1/n.d):n.primitive&&n.primitive!=="box"?vm(n.primitive):n.texture||ae.arenaBase?jc(n.w,n.h,n.d).scale(1/n.w,1/n.h,1/n.d):Fa;o!==Fa&&rd(o,n);let a=new ge(o,r);if(a.userData.ownsTexture=!!n.texture,n.terrain){let l=dg(n,t);for(let c of l.children)c.userData.collidable&&(t-=c.count);l&&(a.add(l),a.userData.vegetation=l)}_t.add(a),Rh(a,n)}Dn.position.set(ae.spawn.x,ae.spawn.y+Ah,ae.spawn.z),Dn.rotation.y=Ne.degToRad(ae.spawn.yaw),p0(),n0()}function at(){return ae.pieces[yt]}function rt(i){F("editor-note").textContent=i}function vt(){ms.length>=35&&ms.shift(),ms.push({map:structuredClone(ae),selected:yt}),F("undo").disabled=!1}function Zd(){try{return localStorage.setItem(Yg,JSON.stringify(ae)),F("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil",!0}catch{return F("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.",!1}}F("model-asset-edit-link").onclick=i=>{let e=at();if(!e?.model||!Zd()){i.preventDefault();return}try{sessionStorage.setItem(Fd,JSON.stringify({index:yt,piece:e}))}catch{i.preventDefault(),rt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function ZS(){let i=jg.get("applyModel");if(!i)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Fd)),sessionStorage.removeItem(Fd)}catch{return}let t=ae.pieces[e?.index],n=Hi.models.find(u=>u.id===i&&u.parts.length),s=t?.model;if(!(n&&s&&(n.id===s.id||s.id==="custom-model-game-"+s.assetId&&n.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){rt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}yt=e.index;let o=oo(t.model),a=oo(n),l=(u,d,f,m)=>Ne.clamp(u*f/Math.max(d,.001),.05,m),c={w:l(t.w,o.x,a.x,Gi),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Gi)},h=Gn({...t,...c,model:{...t.model,id:n.id,parts:n.parts,hitbox:n.hitbox}});JSON.stringify(h)!==JSON.stringify(t)&&(vt(),ae.pieces[yt]=h),rt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var Hg=i=>i.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function r0(){let i=Hg(F("piece-search").value.trim()),e=[];ae.pieces.forEach((t,n)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";Hg(t.name+" "+s).includes(i)&&e.push(new Option(t.name+s,n,!1,n===yt))}),F("pieces").replaceChildren(...e),F("pieces").value=String(yt),e.length||F("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(F("pieces").options[0].disabled=!0),F("count").textContent=i?e.length+" sur "+ae.pieces.length:ae.pieces.length+" / "+co}function o0(){r0();let i=at();F("piece-inspector").hidden=!i,F("selection-help").hidden=!!i,F("focus-piece").disabled=!i,F("selection-title").textContent=i?i.name+(i.model?i.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=i?.model?.kind==="prop";F("model-object-controls").hidden=!e,F("model-structure-note").hidden=!i?.model||i.model.kind!=="structure";let t=F("model-asset-edit-link"),n=i?.model&&Mn.some(o=>o.id===i.model.id);if(t.hidden=!n,n){let o=i.model.assetId,a=o&&i.model.id==="custom-model-game-"+o,l=new URLSearchParams(a?{asset:o}:{model:i.model.id});l.set("from","cards"),t.href="./model-editor.html?"+l}e&&(F("model-grabbable").checked=i.model.properties?.grabbable!==!1,F("model-frozen").checked=i.model.properties?.frozen===!0,F("model-collidable").checked=i.model.properties?.collidable!==!1,F("model-support-held").checked=i.model.properties?.supportWhileHeld===!0);for(let o of Xg){let a=F("p-"+o);a.disabled=!i,o==="solid"?a.checked=i?.solid??!1:a.value=i?.[o]??(o==="color"?"#ffffff":"")}for(let o of["rotate","duplicate","texture-file","surface","spawn-here"])F(o).disabled=!i;F("delete").disabled=!i||ae.pieces.length===1,F("delete").title=i?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",F("delete").firstChild.textContent=i?.model?"Retirer ":"Supprimer ",F("texture-clear").disabled=!i?.texture,F("texture-paint").disabled=!i||!!i.model;let s=i?.terrain;F("terrain-grassTexture-paint").disabled=!s;for(let o of qg){let a=F("p-"+o);a.disabled=!i||!!i?.model,a.value=i?.[o]??(o==="uvScale"?1:0)}if(F("uv-reset").disabled=!i||!!i?.model,F("terrain-controls").hidden=F("terrain-props").hidden=F("terrain-texture-density-fields").hidden=!s,s){for(let d of u0)F("terrain-"+d).value=s[d];let o=i.w*i.d,a=2*s.detail**2,l=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2});F("terrain-cell-size").textContent=l.format(i.w/s.detail)+" \xD7 "+l.format(i.d/s.detail)+" m par case \xB7 "+l.format(a)+" triangles \xB7 "+l.format(a/o)+" triangles/m\xB2",F("terrain-texture-effective").textContent=l.format(s.textureDensity/(i.uvScale??1)**2)+" motifs/m\xB2",n1(i);let c=F("terrain-neighbor"),h=c.value,u=ae.pieces.flatMap((d,f)=>_d(i,d)?[new Option(d.name,String(f))]:[]);c.replaceChildren(...u.length?u:[new Option("Aucun bord \xE0 moins de 25 cm","")]),u.some(d=>d.value===h)&&(c.value=h),c.disabled=F("terrain-stitch").disabled=!u.length,F("p-pitch").disabled=F("p-yaw").disabled=F("p-roll").disabled=!0}F("rotate").disabled=!i||!!s,F("texture-create").disabled=!i,F("surface").value="",F("undo").disabled=ms.length===0,F("active-selection").textContent=i?i.name:"Aucune s\xE9lection";let r=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(r)&&!s||["behavior","material"].includes(r)&&!i)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!i;for(let o of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+o+'"]').disabled=!s}function mt(){F("map-name").value=ae.name,F("map-world-size").value=ae.worldSize??240;for(let i of["x","y","z","yaw"])F("spawn-"+i).value=ae.spawn[i];YS(),o0(),Qn(),sn(),Zd()}function Ba(i){yt!==i&&(yt=i,Pn=null,$s.clear(),o0(),n0(),Qn(),sn())}function jd(i){if(ae.pieces.length>=co)return rt("Limite de pi\xE8ces atteinte.");vt(),ae.pieces.push(i),yt=ae.pieces.length-1,mt(),rt(i.name+" ajout\xE9 \xE0 la map.")}function Jd(){if(!at()||ae.pieces.length===1)return;let i=at().name;vt(),ae.pieces.splice(yt,1),yt=Math.min(yt,ae.pieces.length-1),mt(),rt(i+" retir\xE9 de la map.")}function Kd(){let i=at();if(!i)return;let e=Ne.clamp(i.x+i.w+za(),-120,120);jd({...structuredClone(i),name:(i.name+" bis").slice(0,36),x:e})}function jS(){let i=at();!i||i.terrain||(vt(),i.yaw=(i.yaw+45)%360,mt())}function a0(){let i=ms.pop();i&&(ae=i.map,yt=i.selected,Wi(null),mt(),rt("Derni\xE8re modification annul\xE9e."))}function $d(){let i=Vd[Ke]??"";if(Ke!=="model"||!Ks()){F("tool-help").textContent=i;return}let e=Jg(),t=n=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(n);F("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+i}function Ti(i){Ke=i,Lt.mouseButtons.LEFT=Ke==="view"?Kn.ROTATE:null,zd(),sn();for(let e of Th)e.setAttribute("aria-pressed",String(e.dataset.tool===Ke));for(let e of[Qt,nt])e.dataset.tool=Ke,e.removeAttribute("data-hit");$d(),zd(),sn(),Wi(null)}function ir(){let i=new Zt().setFromObject(_t);i.expandByPoint(Dn.position);let e=i.getCenter(new M),t=i.getSize(new M);Tt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ae.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ae.worldSize??240,500))},Yd();let n=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));po.scale.setScalar(n),po.position.set(Math.round(e.x/n)*n,-.035,Math.round(e.z/n)*n);let s=Vt.position.clone().sub(Lt.target).normalize(),r=new M().crossVectors(Ih,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Ne.degToRad(Vt.fov/2))*.87,l=a*Vt.aspect,c=6;for(let h of[i.min.x,i.max.x])for(let u of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let f=new M(h,u,d).sub(e),m=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,m+f.dot(s))}c=Math.min(c,Lt.maxDistance),Lt.target.copy(e),Vt.position.copy(e).addScaledVector(s,c),Lt.update(),Vt.updateMatrixWorld(),Qn(),sn()}function Qd(i,e){vt(),ae=i,Pn=null,$s.clear(),yt=-1,F("piece-search").value="",Ti("move"),mt(),ir(),rt(e)}function za(){return Number(F("snap").value)}function Sh(i){let e=za(),t=(ae.worldSize??240)/2;return Ne.clamp(Math.round(i/e)*e,-t,t)}function ef(i,e){if(i===nt){let t=Bd(e);gs.set(new M(t.x,80,t.z),new M(0,-1,0))}else{let t=Qt.getBoundingClientRect();Vt.updateMatrixWorld(),gs.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Vt)}}function kd(i){return kg.constant=-i,gs.ray.intersectPlane(kg,new M)}function JS(i){let e=i;for(;e&&e.parent!==_t;)e=e.parent;return e?.parent===_t?e:null}function mo(i,e){ef(i,e);let t=er.visible&&ae.arenaBase?[..._t.children,er]:_t.children,n=gs.intersectObjects(t,!0);for(let s of n){if(s.object===er)return s;let r=JS(s.object);if(r)return{...s,object:r}}return null}function l0(i,e,t,n=null){gs.set(new M(i,80,e),new M(0,-1,0));let s=n?gs.intersectObject(n,!1)[0]:gs.intersectObjects(er.visible&&ae.arenaBase?[..._t.children,er]:_t.children,!1).find(r=>r.object===er||ae.pieces[_t.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:i,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function c0(i,e){Na=null,bh=!1;let t=mo(i,e);if(Ke==="spawn"){if(!t)return null;let h=Sh(t.point.x),u=Sh(t.point.z);return l0(h,u,ae.spawn.yaw)}if(Ke==="terrain"){let h=t?.point??kd(0);return h?{...Dd.terrain,terrain:Zs(Dd.terrain.terrain),x:Sh(h.x),y:h.y,z:Sh(h.z)}:null}if(Ke==="sculpt"||Ke==="model"&&!Ks())return null;let n=t?.point??kd(0);if(!n)return null;let s=t?t.face.normal.clone().applyNormalMatrix(qS.getNormalMatrix(t.object.matrixWorld)):Ih,r=t&&KS(t),o=$g();r&&r.distance<=o*2&&(Na=r.point,bh=F("magnet").checked&&!e.altKey&&F("magnet-mode").value==="edge"&&r.point.distanceTo(n)<=o);let a=bh||e.altKey?1e-6:za(),l=Ke==="model"?Jg():Ke==="preset"?BS():Dd[Ke],c=_g(bh?Na:n,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ae.worldSize/2?c:null}function KS(i){let e=i.object,t=ae.pieces[_t.children.indexOf(e)];if(!t||t.terrain)return null;let n=e.worldToLocal(i.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(i.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=n.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(i.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function Wi(i){!i&&!Hn||(Hn=i,uo.visible=!!(Hn&&Na),uo.visible&&uo.position.copy(Na),Oa.visible=!!(Hn&&Ke==="spawn"),Qs.visible=!!(Hn&&Ke!=="spawn"),Oa.visible&&Oa.position.set(Hn.x,Hn.y+Ah,Hn.z),Qs.visible&&(Qs.geometry=Hn.primitive==="ramp"?HS:Fa,Rh(Qs,Hn)),Qn(),sn())}function $S(i,e){let t=c0(i,e);if(!t){rt(Ke==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ke==="spawn")vt(),ae.spawn=t,Ti("move"),mt(),rt("Point de d\xE9part d\xE9plac\xE9.");else{let n=Ke==="model";Wi(null),jd(t),n&&(Ti("move"),rt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function QS(i,e){if(Ke==="view"||e.button!==0||!e.isPrimary||pt||tt.dragging)return;if(Ke==="spawn"||Xd.has(Ke)){if(i===Qt&&tt.enabled){let r=Qt.getBoundingClientRect();if(tt.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),tt.axis){Lt.enabled=!1;return}}if(Ke!=="spawn"){e.stopImmediatePropagation();let r=mo(i,e);Ba(r?_t.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),i.focus({preventScroll:!0}),i.setPointerCapture(e.pointerId);let t={canvas:i,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ke};if(pt=t,Pn=null,Ke==="sculpt"){d0(i,e);return}if(Ke!=="move")return;let n=mo(i,e);Ba(n?_t.children.indexOf(n.object):-1);let s=at();!n||!s||(t.height=n.point.y,t.dx=n.point.x-s.x,t.dz=n.point.z-s.z)}function e1(i,e){if(Ke==="view"||Xd.has(Ke)||tt.dragging)return;if(!pt){Ke==="move"?i.toggleAttribute("data-hit",!!mo(i,e)):Wi(c0(i,e));return}if(Ke==="sculpt"&&pt.id===e.pointerId&&pt.canvas===i){Math.hypot(e.clientX-pt.clientX,e.clientY-pt.clientY)>=7&&(d0(i,e),pt.clientX=e.clientX,pt.clientY=e.clientY);return}if(pt.id!==e.pointerId||pt.canvas!==i||pt.height===void 0||!at()||Math.hypot(e.clientX-pt.clientX,e.clientY-pt.clientY)<4&&!pt.recorded)return;ef(i,e);let n=kd(pt.height);if(!n)return;let s=at(),r=Qg(s,{x:n.x-pt.dx,y:s.y,z:n.z-pt.dz},["x","z"],e.altKey),o=(ae.worldSize??240)/2,a=Ne.clamp(r.x,-o,o),l=Ne.clamp(r.z,-o,o);a===s.x&&l===s.z||(pt.recorded||(vt(),pt.recorded=!0,i.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,Rh(_t.children[yt],s),ui?.update(),F("p-x").value=a,F("p-z").value=l,Qn(),sn())}function Ud(i,e,t){if(!pt||pt.canvas!==i||pt.id!==e.pointerId)return;let n=pt;if(pt=null,i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),i.removeAttribute("data-dragging"),n.tool==="sculpt"){n.recorded&&(mt(),rt("Relief modifi\xE9."));return}n.recorded&&(Zd(),rt(at().name+" d\xE9plac\xE9.")),t&&Ke===n.tool&&Ke!=="move"&&Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY)<6&&$S(i,e)}var $n=null,Lh=!1,wh=null;document.addEventListener("keydown",i=>{i.code==="Space"&&!i.target.closest?.("input,select,textarea,button")&&(Lh=!0)});document.addEventListener("keyup",i=>{i.code==="Space"&&(Lh=!1)});window.addEventListener("blur",()=>{$n=null,Lh=!1});nt.addEventListener("pointerdown",i=>{i.button!==1&&!(Lh&&i.button===0)||(i.preventDefault(),i.stopImmediatePropagation(),$n={id:i.pointerId,x:i.clientX,y:i.clientY},nt.setPointerCapture(i.pointerId),nt.style.cursor="grabbing")},{capture:!0});nt.addEventListener("pointermove",i=>{!$n||$n.id!==i.pointerId||(i.stopImmediatePropagation(),Tt.cx-=(i.clientX-$n.x)/Tt.scale,Tt.cz-=(i.clientY-$n.y)/Tt.scale,$n.x=i.clientX,$n.y=i.clientY,Qn())},{capture:!0});function h0(i){!$n||$n.id!==i.pointerId||($n=null,nt.style.cursor="",nt.hasPointerCapture(i.pointerId)&&nt.releasePointerCapture(i.pointerId),i.stopImmediatePropagation())}nt.addEventListener("pointerup",h0,{capture:!0});nt.addEventListener("pointercancel",h0,{capture:!0});function tf(i,e){let t=nt.getBoundingClientRect(),n=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=Bd({clientX:n,clientY:s}),o=Ne.clamp(Tt.width/i,.75,4096),a=o/Tt.width;Tt.width=o,Tt.height*=a,Yd();let l=Bd({clientX:n,clientY:s});Tt.cx+=r.x-l.x,Tt.cz+=r.z-l.z,Qn()}nt.addEventListener("wheel",i=>{i.preventDefault(),tf(Math.exp(-Math.sign(i.deltaY)*.18),i)},{passive:!1});F("plan-zoom-in").onclick=()=>tf(1.25);F("plan-zoom-out").onclick=()=>tf(.8);F("plan-fit").onclick=ir;var wi=F("context-actions"),ka=!1;function go(){wi.hidden=!0}for(let i of[Qt,nt])i.addEventListener("pointerdown",e=>{e.button===2?wh={canvas:i,x:e.clientX,y:e.clientY}:go()}),i.addEventListener("contextmenu",e=>{if(e.preventDefault(),ka){ka=!1;return}if(wh?.canvas!==i||Math.hypot(e.clientX-wh.x,e.clientY-wh.y)>6)return;let t=mo(i,e),n=t?_t.children.indexOf(t.object):-1;if(n<0){go();return}Ba(n),F("context-title").textContent=at()?.name??"Pi\xE8ce",wi.querySelector('[data-context-action="delete"]').textContent=at()?.model?"Retirer de la carte":"Supprimer",wi.hidden=!1;let s=195,r=285;wi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",wi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",i=>{wi.hidden||wi.contains(i.target)||(ka=i.button===2,go())},{capture:!0});document.addEventListener("contextmenu",i=>{ka&&i.target!==Qt&&i.target!==nt&&(ka=!1,i.preventDefault()),!wi.hidden&&!wi.contains(i.target)&&i.target!==Qt&&i.target!==nt&&go()},{capture:!0});document.addEventListener("keydown",i=>{i.key==="Escape"&&go()});for(let i of wi.querySelectorAll("[data-context-action]"))i.onclick=()=>{let e=i.dataset.contextAction;go(),e==="duplicate"?Kd():e==="delete"?Jd():e==="focus"?F("focus-piece").click():Ti(e==="select"?"move":e)};for(let i of[Qt,nt])i.addEventListener("pointerdown",e=>QS(i,e),{capture:!0}),i.addEventListener("pointermove",e=>e1(i,e)),i.addEventListener("pointerup",e=>Ud(i,e,!0)),i.addEventListener("pointercancel",e=>Ud(i,e,!1)),i.addEventListener("lostpointercapture",e=>{i.hasPointerCapture(e.pointerId)||Ud(i,e,!1)}),i.addEventListener("pointerleave",()=>{pt||Wi(null)});F("p-material").append(...mg.map((i,e)=>new Option(i,e)));for(let i of qg)F("p-"+i).addEventListener("change",e=>{let t=at();!t||t.model||(vt(),t[i]=Number(e.target.value),ae=Kt(ae),mt())});F("uv-reset").onclick=()=>{let i=at();!i||i.model||(vt(),Object.assign(i,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ae=Kt(ae),mt())};var t1={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[i,e]of Object.entries(t1))F(e).addEventListener("change",t=>{let n=at();if(!n?.model||n.model.kind!=="prop")return;vt(),n.model.properties[i]=t.target.checked,i==="collidable"&&(n.solid=t.target.checked),ae=Kt(ae),mt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};rt(s[i])});for(let i of Xg)F("p-"+i).addEventListener("change",e=>{let t=at();if(!t)return;vt();let n=e.target;i==="solid"?(t[i]=n.checked,t.model&&(t.model.properties.collidable=n.checked)):t[i]=["name","color"].includes(i)?n.value:Number(n.value),ae=Kt(ae),mt()});F("map-world-size").onchange=i=>{vt(),ae.worldSize=Ne.clamp(Number(i.target.value)||240,24,2048),ae=Kt(ae),mt(),ir(),rt("Zone de construction : "+ae.worldSize+" \xD7 "+ae.worldSize+" m.")};F("map-name").onchange=i=>{vt(),ae.name=i.target.value,ae=Kt(ae),mt()};F("piece-search").addEventListener("input",r0);F("pieces").onchange=i=>{i.target.value!==""&&Ba(Number(i.target.value))};F("focus-piece").onclick=()=>{let i=_t.children[yt];if(!i)return;let e=new Zt().setFromObject(i).getBoundingSphere(new Yn),t=Vt.position.clone().sub(Lt.target).normalize(),n=Math.atan(Math.tan(Ne.degToRad(Vt.fov/2))*Math.min(Vt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(n)*1.15);Lt.target.copy(e.center),Vt.position.copy(e.center).addScaledVector(t,s),Lt.update(),sn()};for(let i of["x","y","z","yaw"])F("spawn-"+i).onchange=e=>{vt(),ae.spawn[i]=Number(e.target.value),ae=Kt(ae),mt()};F("spawn-here").onclick=()=>{let i=at();if(!i)return;let e=i.solid&&l0(i.x,i.z,i.yaw,_t.children[yt]);if(!e)return rt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");vt(),ae.spawn=e,mt(),rt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let i of Th)i.onclick=()=>Ti(i.dataset.tool);F("duplicate").onclick=Kd;F("add-mirror").onclick=()=>jd(Md());F("delete").onclick=Jd;F("rotate").onclick=jS;F("undo").onclick=a0;F("zoom-fit").onclick=ir;F("snap").onchange=()=>Wi(null);F("new-example").onclick=()=>Qd(Hd(),"Ar\xE8ne de d\xE9part ouverte.");F("blank-map").onclick=()=>{let i=Ne.clamp(Number(F("map-world-size").value)||240,24,2048);Qd({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:i,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Gn({name:"Sol",y:-.25,w:Math.min(i,Gi),d:Math.min(i,Gi)})]},"Nouvelle carte : "+i+" \xD7 "+i+" m. Tu peux s\xE9lectionner et modeler le sol.")};F("surface").onchange=i=>{let e=Ra[i.target.value],t=at();!e||!t||(vt(),Object.assign(t,e),mt())};F("texture-file").onchange=async i=>{let e=i.target.files[0],t=at();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let n=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(n.width,n.height));s.width=Math.max(1,Math.round(n.width*r)),s.height=Math.max(1,Math.round(n.height*r)),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ae.pieces.includes(t))return rt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");vt(),t.texture=o,mt(),rt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(n){rt(n.message)}finally{i.target.value=""}};F("texture-paint").onclick=()=>{let i=at();if(!i||i.model)return rt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");wd({name:i.name||"\xC9l\xE9ment du d\xE9cor",initial:i.texture,tint:i.color&&i.color!=="#ffffff"?i.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ae.pieces.includes(i))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");vt(),i.texture=e,ae=Kt(ae),mt(),rt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};F("terrain-grassTexture-paint").onclick=()=>{let i=at();i?.terrain&&wd({name:"Herbe / "+i.name,initial:i.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ae.pieces.includes(i))throw Error("Terrain supprim\xE9 avant application.");vt(),i.terrain.grassTexture=e,ae=Kt(ae),mt(),rt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};F("texture-clear").onclick=()=>{at()?.texture&&(vt(),at().texture=null,mt())};F("import-map").onchange=async i=>{let e=i.target.files[0];if(e)try{Qd(Kt(await e.text()),"Map charg\xE9e.")}catch(t){rt(t.message)}finally{i.target.value=""}};F("export-map").onclick=()=>{try{vg(ae),rt("Map JSON export\xE9e.")}catch(i){rt(i.message)}};F("test-map").onclick=()=>{try{localStorage.setItem(yg,JSON.stringify(Kt(ae))),location.href="./?custom=1"}catch{rt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var u0=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function n1(i){let e=i.terrain.rules,t=_t.children[yt]?.userData.vegetation?.children??[];F("terrain-add-rule").disabled=e.length>=ph,F("terrain-grass-texture").hidden=!e.some(n=>n.kind==="grass"),F("terrain-rules").replaceChildren(...e.map((n,s)=>{let r=document.createElement("tr"),o=(g,p,v=!1)=>{let b=document.createElement("td");v&&(b.dataset.wide="");let y=document.createElement("span");return y.textContent=g,b.append(y,p),r.append(b),p.matches("input,select")&&p.setAttribute("aria-label",g+" \xB7 r\xE8gle "+(s+1)),b},a=g=>{vt(),e[s]=Aa({...n,...g}),mt()},l=(g,p,v)=>{let b=document.createElement("select");return b.replaceChildren(...g.map(([y,A])=>new Option(y,A))),b.value=p,b.onchange=()=>v(b.value),b},c=(g,p,v,b)=>{let y=document.createElement("input");return y.type="number",y.value=n[g],y.min=p,y.max=v,y.step=b,y.onchange=()=>{Number.isFinite(y.valueAsNumber)?a({[g]:y.valueAsNumber}):y.value=n[g]},y},h=Mn.some(g=>g.id===n.model?.id)||!n.model?Mn:[...Mn,n.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],n.kind,g=>{let p=g==="grass"?"#527a34":g==="shrub"?"#36583c":"#ffffff";a({kind:g,model:g==="model"?h[0]:null,colorA:p,colorB:p,fit:"keep",size:1})})),n.kind==="model"&&o("Mod\xE8le",l(h.map(g=>[g.name,g.id]),n.model.id,g=>a({model:h.find(p=>p.id===g)})));let u=document.createElement("span");u.dataset.pair="";for(let[g,p]of["colorA","colorB"].entries()){let v=document.createElement("input");v.type="color",v.value=n[p],v.setAttribute("aria-label","Teinte "+(g+1)+" \xB7 r\xE8gle "+(s+1)),v.onchange=()=>a({[p]:v.value}),u.append(v)}o("Deux teintes",u),o("Instances / m\xB2",c("density",0,100,"any")),o("Graine",c("seed",0,2147483647,1)),n.model&&o("Dimensions du mod\xE8le",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],n.fit,g=>a({fit:g})),!0),o(n.fit==="keep"?"\xC9chelle \xD7":"C\xF4t\xE9 du cube (m)",c("size",.05,10,.05)),n.variation&&o("Variation de taille",c("variation",0,1,.05));let d=document.createElement("input");d.type="checkbox",d.checked=n.collidable,d.onchange=()=>a({collidable:d.checked}),o("Collision \xB7 bo\xEEte",d);let f=document.createElement("output");f.textContent=(t.find(g=>g.userData.ruleIndex===s)?.count??0)+" / "+Math.round(i.w*i.d*n.density);let m=o("Affich\xE9es / demand\xE9es",f,!0),x=document.createElement("button");return x.type="button",x.textContent="Retirer la ligne",x.onclick=()=>{vt(),e.splice(s,1),mt()},m.append(x),r}))}F("terrain-add-rule").onclick=()=>{let i=at();!i?.terrain||i.terrain.rules.length>=ph||(vt(),i.terrain.rules.push(Aa({seed:i.terrain.seed+i.terrain.rules.length})),mt(),F("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};F("terrain-stitch").onclick=()=>{let i=at(),e=ae.pieces[Number(F("terrain-neighbor").value)],t=Ne.clamp(Number(F("terrain-seam-width").value)||1.5,.1,25),n=hg(i,e,t);if(!n)return rt("Rapproche les bords \xE0 moins de 25 cm.");vt(),ae.pieces[yt]=n.piece,mt(),rt(n.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};F("terrain-grassTexture-file").onchange=async i=>{let e=i.target.files?.[0],t=at();if(i.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let n=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(n.width,n.height));s.width=Math.round(n.width*r),s.height=Math.round(n.height*r),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ae.pieces.includes(t))return;vt(),t.terrain.grassTexture=o,mt(),rt("Texture d\u2019herbe import\xE9e.")}catch(n){rt(n.message)}};F("terrain-grassTexture-clear").onclick=()=>{at()?.terrain&&(vt(),at().terrain.grassTexture=null,mt())};for(let i of u0)F("terrain-"+i).onchange=e=>{let t=at();t?.terrain&&(vt(),t.terrain=i==="detail"?gd(t.terrain,Number(e.target.value)):Zs({...t.terrain,[i]:Number(e.target.value)}),mt())};F("terrain-reset").onclick=()=>{at()?.terrain&&(vt(),at().terrain.heights=null,mt())};function d0(i,e){ef(i,e);let t=gs.intersectObjects(_t.children,!1).find(a=>ae.pieces[_t.children.indexOf(a.object)]?.terrain),n=t?_t.children.indexOf(t.object):-1,s=ae.pieces[n];if(!s?.terrain||(pt.recorded||(vt(),pt.recorded=!0,pt.flattenY=t.point.y,Ba(n),F("terrain-controls").open=!0),n!==yt))return;let r={mode:F("terrain-brush").value,radius:Number(F("brush-radius").value),strength:Number(F("brush-strength").value),target:pt.flattenY};if(!ug(s,t.point.x,t.point.z,r))return;let o=_t.children[n];o.geometry.dispose(),o.geometry=yd(s),rd(o.geometry,s),ui?.update(),Qn(),sn()}F("texture-style").replaceChildren(...bd.map((i,e)=>new Option(i,e)));F("texture-create").onclick=()=>{let i=at();if(!i)return;let e=Sg(Number(F("texture-style").value),F("texture-tint").value);vt(),i.texture=e.toDataURL("image/webp",.85),mt(),rt("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};F("view-top").onclick=()=>{let i=Lt.target,e=Math.max(10,Vt.position.distanceTo(i));Vt.position.copy(i).add(new M(0,e,.001)),Lt.update(),sn()};F("view-perspective").onclick=()=>{Vt.position.copy(Lt.target).add(new M(16,15,24)),ir()};F("view-spawn").onclick=()=>{let{x:i,y:e,z:t,yaw:n}=ae.spawn,s=new M(0,0,-1).applyAxisAngle(Ih,Ne.degToRad(n));Vt.position.set(i,e+.87,t),Lt.target.copy(Vt.position).addScaledVector(s,5),Vt.lookAt(Lt.target),sn()};var Wg={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",i=>{if(i.target.closest?.("input, select, textarea, [contenteditable]")||pt||tt.dragging)return;let e=i.key.toLowerCase();if(i.ctrlKey||i.metaKey)if(e==="z")a0();else if(e==="d")Kd();else return;else{if(i.altKey)return;if(Wg[e])Ti(Wg[e]);else if(e==="f")ir();else if(e==="delete"||e==="backspace")Jd();else return}i.preventDefault()});var ho=new dn;xn.add(ho);function f0(){if(!F("debug-stats"))return;let i=Ga.info.render.triangles,e=ae?.pieces?.length??0;F("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+i.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ae?.worldSize??240)+" m"}function p0(){for(let i of[...ho.children])ho.remove(i),i.geometry.dispose(),i.material.dispose();po.visible=F("debug-grid").checked;for(let i of _t.children){if(i.material)for(let e of Array.isArray(i.material)?i.material:[i.material])e.wireframe=F("debug-wire").checked;if(F("debug-hitboxes").checked){let e=_t.children.indexOf(i),t=ae.pieces[e];if(t?.model){let n=tg(t.model,new M(t.w,t.h,t.d)),s=new ge(n,new Ht({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));s.position.copy(i.position),s.rotation.copy(i.rotation),ho.add(s)}else if(t?.primitive==="ramp"){let n=new Cs(new sa(i.geometry),new Zn({color:"#fa9945"}));n.position.copy(i.position),n.quaternion.copy(i.quaternion),n.scale.copy(i.scale),ho.add(n)}else ho.add(new Hr(i,"#fa9945"))}}sn()}for(let i of["debug-grid","debug-wire","debug-hitboxes"])F(i).onchange=p0;F("debug-coords").onchange=()=>{F("debug-coords").checked||f0()};for(let i of[Qt,nt])i.addEventListener("pointermove",e=>{if(!F("debug-coords").checked||pt||$n)return;let t=mo(i,e);if(!t)return;let n=t.point;F("debug-stats").textContent="X "+n.x.toFixed(2)+" \xB7 Y "+n.y.toFixed(2)+" \xB7 Z "+n.z.toFixed(2)+" m \xB7 "+ae.pieces.length+" \xE9l\xE9ments"});try{let i=localStorage.getItem(Yg);if(i){let e=Kt(i);if(JSON.stringify(e)!==JSON.stringify(xg()))if(e.arenaBase&&!e.editableArena){let t=Hd(),n=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!n.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=co?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ae=Kt(e),rt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ae=e}else ae=e}}catch{}ZS();Ti("move");mt();Ph();Dh();ir();Va();if(Nd){let i=Mn.find(e=>e.id===Nd);i?(F("place-model").click(),rt("\xAB "+i.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):rt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}})();
