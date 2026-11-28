(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sp=0,Uh=1,wp=2;var Nh=1,Tp=2,Ui=3,Zi=0,Cn=1,qt=2,ns=0,$s=1,Fh=2,Oh=3,Bh=4,Ep=5,_s=100,Ap=101,Cp=102,Rp=103,Ip=104,Pp=200,Lp=201,Dp=202,Up=203,Fl=204,Ol=205,Np=206,Fp=207,Op=208,Bp=209,zp=210,kp=211,Vp=212,Gp=213,Hp=214,lc=0,cc=1,uc=2,Qs=3,hc=4,dc=5,fc=6,pc=7,zh=0,Wp=1,Xp=2,is=0,qp=1,Yp=2,Zp=3,mc=4,jp=5,Jp=6,Kp=7,vh="attached",$p="detached",kh=300,hr=301,dr=302,gc=303,xc=304,Ta=306,On=1e3,Ei=1001,Zr=1002,_n=1003,yc=1004;var fr=1005;var rn=1006,fo=1007;var vn=1008;var _i=1009,Vh=1010,Gh=1011,po=1012,_c=1013,Ts=1014,vi=1015,mo=1016,vc=1017,bc=1018,go=1020,Hh=35902,Wh=35899,Xh=1021,qh=1022,Rn=1023,jr=1026,xo=1027,Yh=1028,Mc=1029,Zh=1030,Sc=1031;var wc=1033,Ea=33776,Aa=33777,Ca=33778,Ra=33779,Tc=35840,Ec=35841,Ac=35842,Cc=35843,Rc=36196,Ic=37492,Pc=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,kc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,Zc=36495,jc=36283,Jc=36284,Kc=36285,$c=36286;var er=2300,Jr=2301,Ul=2302,bh=2400,Mh=2401,Sh=2402;var Qp=3200,em=3201;var jh=0,tm=1,bi="",Ot="srgb",tr="srgb-linear",$o="linear",At="srgb";var Ks=7680;var wh=519,nm=512,im=513,sm=514,Jh=515,rm=516,om=517,am=518,lm=519,Th=35044;var Kh="300 es",xi=2e3,Qo=2001;var Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=1234567,Zo=Math.PI/180,Kr=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function $h(i,e){return(i%e+e)%e}function B0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function z0(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function k0(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function V0(i,e=1){return e-Math.abs($h(i,e*2)-e)}function G0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function H0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function W0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function X0(i,e){return i+Math.random()*(e-i)}function q0(i){return i*(.5-Math.random())}function Y0(i){i!==void 0&&(kf=i);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(i){return i*Zo}function j0(i){return i*Kr}function J0(i){return(i&i-1)===0&&i!==0}function K0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Q0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ke={DEG2RAD:Zo,RAD2DEG:Kr,generateUUID:Es,clamp:et,euclideanModulo:$h,mapLinear:B0,inverseLerp:z0,lerp:jo,damp:k0,pingpong:V0,smoothstep:G0,smootherstep:H0,randInt:W0,randFloat:X0,randFloatSpread:q0,seededRandom:Y0,degToRad:Z0,radToDeg:j0,isPowerOfTwo:J0,ceilPowerOfTwo:K0,floorPowerOfTwo:$0,setQuaternionFromProperEuler:Q0,normalize:En,denormalize:qr},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let p=1-a,m=l*d+c*f+u*g+h*x,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let T=Math.sqrt(b),A=Math.atan2(T,m*v);p=Math.sin(p*A)/T,a=Math.sin(a*A)/T}let y=a*v;if(l=l*p+d*y,c=c*p+f*y,u=u*p+g*y,h=h*p+x*y,p===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xu=new _,Vf=new dt,ot=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],b=s[4],y=s[7],T=s[2],A=s[5],P=s[8];return r[0]=o*x+a*v+l*T,r[3]=o*p+a*b+l*A,r[6]=o*m+a*y+l*P,r[1]=c*x+u*v+h*T,r[4]=c*p+u*b+h*A,r[7]=c*m+u*y+h*P,r[2]=d*x+f*v+g*T,r[5]=d*p+f*b+g*A,r[8]=d*m+f*y+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qu.makeScale(e,t)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qu=new ot;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cm(){let i=$r("canvas");return i.style.display="block",i}var Gf={};function Qr(i){i in Gf||(Gf[i]=!0,console.warn(i))}function um(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ex(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var bt=ex();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pr,eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=$r("canvas")),Pr.width=e.width,Pr.height=e.height;let s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tx=0,vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yu(s[o].image)):r.push(Yu(s[o]))}else r=Yu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nx=0,Zu=new _,dn=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=rn,o=vn,a=Rn,l=_i,c=i.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Es(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=kh;dn.DEFAULT_ANISOTROPY=1;var Rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,T=(m+1)/2,A=(u+d)/4,P=(h+x)/4,D=(g+p)/4;return b>y&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new dn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),ul.subVectors(this.max,Go),Lr.subVectors(e.a,Go),Dr.subVectors(e.b,Go),Ur.subVectors(e.c,Go),fs.subVectors(Dr,Lr),ps.subVectors(Ur,Dr),Ys.subVectors(Lr,Ur);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Ys.z,Ys.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Ys.z,0,-Ys.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Ys.y,Ys.x,0];return!ju(t,Lr,Dr,Ur,ul)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,Lr,Dr,Ur,ul))?!1:(hl.crossVectors(fs,ps),t=[hl.x,hl.y,hl.z],ju(t,Lr,Dr,Ur,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new _,new _,new _,new _,new _,new _,new _,new _],pi=new _,cl=new Kt,Lr=new _,Dr=new _,Ur=new _,fs=new _,ps=new _,Ys=new _,Go=new _,ul=new _,hl=new _,Zs=new _;function ju(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zs.fromArray(i,r);let a=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=n.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ix=new Kt,Ho=new _,Ju=new _,Ii=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ju)),this.expandByPoint(Ho.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hi=new _,Ku=new _,dl=new _,ms=new _,$u=new _,fl=new _,Qu=new _,ji=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ku.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(Ku);let r=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=ms.dot(this.direction),l=-ms.dot(dl),c=ms.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ku).addScaledVector(dl,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){$u.subVectors(t,e),fl.subVectors(n,e),Qu.crossVectors($u,fl);let o=this.direction.dot(Qu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);let l=a*this.direction.dot(fl.crossVectors(ms,fl));if(l<0)return null;let c=a*this.direction.dot($u.cross(ms));if(c<0||l+c>o)return null;let u=-a*ms.dot(Qu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,rx)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),gs.crossVectors(n,Zn),gs.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),gs.crossVectors(n,Zn)),gs.normalize(),pl.crossVectors(Zn,gs),s[0]=gs.x,s[4]=pl.x,s[8]=Zn.x,s[1]=gs.y,s[5]=pl.y,s[9]=Zn.y,s[2]=gs.z,s[6]=pl.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],b=n[7],y=n[11],T=n[15],A=s[0],P=s[4],D=s[8],w=s[12],M=s[1],L=s[5],O=s[9],X=s[13],V=s[2],G=s[6],W=s[10],se=s[14],Y=s[3],re=s[7],ye=s[11],Se=s[15];return r[0]=o*A+a*M+l*V+c*Y,r[4]=o*P+a*L+l*G+c*re,r[8]=o*D+a*O+l*W+c*ye,r[12]=o*w+a*X+l*se+c*Se,r[1]=u*A+h*M+d*V+f*Y,r[5]=u*P+h*L+d*G+f*re,r[9]=u*D+h*O+d*W+f*ye,r[13]=u*w+h*X+d*se+f*Se,r[2]=g*A+x*M+p*V+m*Y,r[6]=g*P+x*L+p*G+m*re,r[10]=g*D+x*O+p*W+m*ye,r[14]=g*w+x*X+p*se+m*Se,r[3]=v*A+b*M+y*V+T*Y,r[7]=v*P+b*L+y*G+T*re,r[11]=v*D+b*O+y*W+T*ye,r[15]=v*w+b*X+y*se+T*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=h*p*c-x*d*c+x*l*f-a*p*f-h*l*m+a*d*m,b=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,y=u*x*c-g*h*c+g*a*f-o*x*f-u*a*m+o*h*m,T=g*h*l-u*x*l-g*a*d+o*x*d+u*a*p-o*h*p,A=t*v+n*b+s*y+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=v*P,e[1]=(x*d*r-h*p*r-x*s*f+n*p*f+h*s*m-n*d*m)*P,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*m+n*l*m)*P,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=b*P,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*P,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=y*P,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*m-t*h*m)*P,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*P,e[12]=T*P,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*p+t*h*p)*P,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*P,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,p=o*h,m=a*h,v=l*c,b=l*u,y=l*h,T=n.x,A=n.y,P=n.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+m))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+b)*P,s[9]=(p-v)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Nr.set(s[0],s[1],s[2]).length(),o=Nr.set(s[4],s[5],s[6]).length(),a=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===xi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Qo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===xi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Qo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nr=new _,mi=new ct,sx=new _(0,0,0),rx=new _(1,1,1),gs=new _,pl=new _,Zn=new _,Xf=new ct,qf=new dt,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qf.setFromEuler(this),this.setFromQuaternion(qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ox=0,Yf=new _,Fr=new dt,Wi=new ct,ml=new _,Wo=new _,ax=new _,lx=new dt,Zf=new _(1,0,0),jf=new _(0,1,0),Jf=new _(0,0,1),Kf={type:"added"},cx={type:"removed"},Or={type:"childadded",child:null},eh={type:"childremoved",child:null},Bt=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new _,t=new en,n=new dt,s=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new ot}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ml.copy(e):ml.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Wo,ml,this.up):Wi.lookAt(ml,Wo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(Wi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kf),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cx),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kf),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new _(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new _,Xi=new _,th=new _,qi=new _,Br=new _,zr=new _,$f=new _,nh=new _,ih=new _,sh=new _,rh=new Rt,oh=new Rt,ah=new Rt,An=class i{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Xi.subVectors(n,t),th.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Xi),l=gi.dot(th),c=Xi.dot(Xi),u=Xi.dot(th),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Xi.subVectors(e,t),gi.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),gi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,n),zr.subVectors(r,n),nh.subVectors(e,n);let l=Br.dot(nh),c=zr.dot(nh);if(l<=0&&c<=0)return t.copy(n);ih.subVectors(e,s);let u=Br.dot(ih),h=zr.dot(ih);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Br,o);sh.subVectors(e,r);let f=Br.dot(sh),g=zr.dot(sh);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(zr,a);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return $f.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector($f,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Br,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},gl={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=$h(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lh(o,r,e+1/3),this.g=lh(o,r,e),this.b=lh(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return bt.workingToColorSpace(xn.copy(this),e),Math.round(et(xn.r*255,0,255))*65536+Math.round(et(xn.g*255,0,255))*256+Math.round(et(xn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ot){bt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(gl);let n=jo(xs.h,gl.h,t),s=jo(xs.s,gl.s,t),r=jo(xs.l,gl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ge;Ge.NAMES=hm;var ux=0,Ji=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=$s,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new _,xl=new le,hx=0,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var nr=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},dx=0,ri=new ct,ch=new Bt,kr=new _,jn=new Kt,Xo=new Kt,un=new _,ft=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ta:nr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(jn.min,Xo.min),jn.expandByPoint(un),un.addVectors(jn.max,Xo.max),jn.expandByPoint(un)):(jn.expandByPoint(Xo.min),jn.expandByPoint(Xo.max))}jn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),un.add(kr)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new _,l[D]=new _;let c=new _,u=new _,h=new _,d=new le,f=new le,g=new le,x=new _,p=new _;function m(D,w,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(x),a[w].add(x),a[M].add(x),l[D].add(p),l[w].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,w=v.length;D<w;++D){let M=v[D],L=M.start,O=M.count;for(let X=L,V=L+O;X<V;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let b=new _,y=new _,T=new _,A=new _;function P(D){T.fromBufferAttribute(s,D),A.copy(T);let w=a[D];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(A,w);let L=y.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,w=v.length;D<w;++D){let M=v[D],L=M.start,O=M.count;for(let X=L,V=L+O;X<V;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new _,r=new _,o=new _,a=new _,l=new _,c=new _,u=new _,h=new _;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new St(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qf=new ct,js=new ji,yl=new Ii,ep=new _,_l=new _,vl=new _,bl=new _,uh=new _,Ml=new _,tp=new _,Sl=new _,ve=class extends Bt{constructor(e=new ft,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(uh.fromBufferAttribute(h,e),o?Ml.addScaledVector(uh,u):Ml.addScaledVector(uh.sub(t),u))}t.add(Ml)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(yl.containsPoint(js.origin)===!1&&(js.intersectSphere(yl,ep)===null||js.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Qf.copy(r).invert(),js.copy(e.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){let A=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=wl(this,m,e,n,c,u,h,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);s=wl(this,o,e,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){let A=y,P=y+1,D=y+2;s=wl(this,m,e,n,c,u,h,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,b=p+1,y=p+2;s=wl(this,o,e,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function fx(i,e,t,n,s,r,o,a){let l;if(e.side===Cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Sl);return c<t.near||c>t.far?null:{distance:c,point:Sl.clone(),object:i}}function wl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,_l),i.getVertexPosition(l,vl),i.getVertexPosition(c,bl);let u=fx(i,e,t,n,_l,vl,bl,tp);if(u){let h=new _;An.getBarycoord(tp,_l,vl,bl,h),s&&(u.uv=An.getInterpolatedAttribute(s,a,l,c,h,new le)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,l,c,h,new le)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,c,h,new _),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new _,materialIndex:0};An.getNormal(_l,vl,bl,d.normal),u.face=d,u.barycoord=h}return u}var rt=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function g(x,p,m,v,b,y,T,A,P,D,w){let M=y/P,L=T/D,O=y/2,X=T/2,V=A/2,G=P+1,W=D+1,se=0,Y=0,re=new _;for(let ye=0;ye<W;ye++){let Se=ye*L-X;for(let Be=0;Be<G;Be++){let Je=Be*M-O;re[x]=Je*v,re[p]=Se*b,re[m]=V,c.push(re.x,re.y,re.z),re[x]=0,re[p]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(Be/P),h.push(1-ye/D),se+=1}}for(let ye=0;ye<D;ye++)for(let Se=0;Se<P;Se++){let Be=d+Se+G*ye,Je=d+Se+G*(ye+1),it=d+(Se+1)+G*(ye+1),Ye=d+(Se+1)+G*ye;l.push(Be,Je,Ye),l.push(Je,it,Ye),Y+=6}a.addGroup(f,Y,w),f+=Y,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let s in n)e[s]=n[s]}return e}function px(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var dm={clone:pr,merge:bn},mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},na=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ys=new _,np=new le,ip=new le,Qt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vr=-90,Gr=1,kl=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Vr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Vr,Gr,e,t);r.layers=this.layers,this.add(r);let o=new Qt(Vr,Gr,e,t);o.layers=this.layers,this.add(o);let a=new Qt(Vr,Gr,e,t);a.layers=this.layers,this.add(a);let l=new Qt(Vr,Gr,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Vr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends dn{constructor(e=[],t=hr,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:ns});r.uniforms.tEquirect.value=t;let o=new ve(s,r),a=t.minFilter;return t.minFilter===vn&&(t.minFilter=rn),new kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},sn=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var oi=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var sp=new _,rp=new Rt,op=new Rt,yx=new _,ap=new ct,Tl=new _,hh=new Ii,lp=new ct,dh=new ji,sa=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vh,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingBox.expandByPoint(Tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ii),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingSphere.expandByPoint(Tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hh.copy(this.boundingSphere),hh.applyMatrix4(s),e.ray.intersectsSphere(hh)!==!1&&(lp.copy(s).invert(),dh.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$p?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;rp.fromBufferAttribute(s.attributes.skinIndex,e),op.fromBufferAttribute(s.attributes.skinWeight,e),sp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=op.getComponent(r);if(o!==0){let a=rp.getComponent(r);ap.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yx.copy(sp).applyMatrix4(ap),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},io=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pi=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=_n,u=_n,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cp=new ct,_x=new ct,ra=class i{constructor(e=[],t=[]){this.uuid=Es(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_x;cp.multiplyMatrices(a,t[r]),cp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pi(t,e,e,Rn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new io),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var fh=new _,vx=new _,bx=new ot,yn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fh.subVectors(n,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bx.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Ii,Mx=new le(.5,.5),El=new _,so=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,o=new yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],b=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,m-g,T-v).normalize(),s[1].setComponents(c+o,f+u,m+g,T+v).normalize(),s[2].setComponents(c+a,f+h,m+x,T+b).normalize(),s[3].setComponents(c-a,f-h,m-x,T-b).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,m-p,T-y).normalize();else if(s[4].setComponents(c-l,f-d,m-p,T-y).normalize(),t===xi)s[5].setComponents(c+l,f+d,m+p,T+y).normalize();else if(t===Qo)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Mx.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(El.x=s.normal.x>0?e.max.x:e.min.x,El.y=s.normal.y>0?e.max.y:e.min.y,El.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jn=class extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gl=new _,Hl=new _,up=new ct,qo=new ji,Al=new Ii,ph=new _,hp=new _,Kn=class extends Bt{constructor(e=new ft,t=new Jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gl.fromBufferAttribute(t,s-1),Hl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gl.distanceTo(Hl);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;up.copy(s).invert(),qo.copy(e.ray).applyMatrix4(up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),v=u.getX(x+1),b=Cl(this,e,qo,l,m,v,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=Cl(this,e,qo,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=Cl(this,e,qo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Cl(this,e,qo,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Gl.fromBufferAttribute(a,s),Hl.fromBufferAttribute(a,r),t.distanceSqToSegment(Gl,Hl,ph,hp)>n)return;ph.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ph);if(!(c<e.near||c>e.far))return{distance:c,point:hp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var dp=new _,fp=new _,Li=class extends Kn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),fp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dp.distanceTo(fp);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends dn{constructor(e,t,n,s,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var oa=class extends dn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},aa=class extends dn{constructor(e,t,n=Ts,s,r,o,a=_n,l=_n,c,u=jr,h=1){if(u!==jr&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},la=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ro=class i extends ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=s+1,p=new _,m=new _;for(let v=0;v<=g;v++){let b=0,y=0,T=0,A=0;if(v<=n){let w=v/n,M=w*Math.PI/2;y=-u-e*Math.cos(M),T=e*Math.sin(M),A=-e*Math.cos(M),b=w*h}else if(v<=n+r){let w=(v-n)/r;y=-u+w*t,T=e,A=0,b=h+w*d}else{let w=(v-n-r)/n,M=w*Math.PI/2;y=u+e*Math.sin(M),T=e*Math.cos(M),A=e*Math.sin(M),b=h+d+w*h}let P=Math.max(0,Math.min(1,b/f)),D=0;v===0?D=.5/s:v===g&&(D=-.5/s);for(let w=0;w<=s;w++){let M=w/s,L=M*Math.PI*2,O=Math.sin(L),X=Math.cos(L);m.x=-T*X,m.y=y,m.z=T*O,a.push(m.x,m.y,m.z),p.set(-T*X,A,T*O),p.normalize(),l.push(p.x,p.y,p.z),c.push(M+D,P)}if(v>0){let w=(v-1)*x;for(let M=0;M<s;M++){let L=w+M,O=w+M+1,X=v*x+M,V=v*x+M+1;o.push(L,O,X),o.push(O,V,X)}}}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Bn=class i extends ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new _,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class i extends ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function v(){let y=new _,T=new _,A=0,P=(t-e)/n;for(let D=0;D<=r;D++){let w=[],M=D/r,L=M*(t-e)+e;for(let O=0;O<=s;O++){let X=O/s,V=X*l+a,G=Math.sin(V),W=Math.cos(V);T.x=L*G,T.y=-M*n+p,T.z=L*W,h.push(T.x,T.y,T.z),y.set(G,P,W).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-M),w.push(g++)}x.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){let M=x[w][D],L=x[w+1][D],O=x[w+1][D+1],X=x[w][D+1];(e>0||w!==0)&&(u.push(M,L,X),A+=3),(t>0||w!==r-1)&&(u.push(L,O,X),A+=3)}c.addGroup(m,A,0),m+=A}function b(y){let T=g,A=new le,P=new _,D=0,w=y===!0?e:t,M=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let V=O/s*l+a,G=Math.cos(V),W=Math.sin(V);P.x=w*W,P.y=p*M,P.z=w*G,h.push(P.x,P.y,P.z),d.push(0,M,0),A.x=G*.5+.5,A.y=W*.5*M+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let X=T+O,V=L+O;y===!0?u.push(V,V+1,X):u.push(V+1,V,X),D+=3}c.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ca=class i extends Lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oo=class i extends ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new _,y=new _,T=new _;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],y),f(t[A+2],T),l(b,y,T,v)}function l(v,b,y,T){let A=T+1,P=[];for(let D=0;D<=A;D++){P[D]=[];let w=v.clone().lerp(y,D/A),M=b.clone().lerp(y,D/A),L=A-D;for(let O=0;O<=L;O++)O===0&&D===A?P[D][O]=w:P[D][O]=w.clone().lerp(M,O/L)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){let M=Math.floor(w/2);w%2===0?(d(P[D][M+1]),d(P[D+1][M]),d(P[D][M])):(d(P[D][M+1]),d(P[D+1][M+1]),d(P[D+1][M]))}}function c(v){let b=new _;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){let v=new _;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(y,1-T)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],T=o[v+4],A=Math.max(b,y,T),P=Math.min(b,y,T);A>.9&&P<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let v=new _,b=new _,y=new _,T=new _,A=new le,P=new le,D=new le;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),T.copy(v).add(b).add(y).divideScalar(3);let L=p(T);x(A,M+0,v,L),x(P,M+2,b,L),x(D,M+4,y,L)}}function x(v,b,y,T){T<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,s=[],r=[],o=[],a=new _,l=new ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ao=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wl=class extends ao{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function td(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Rl=new _,mh=new td,gh=new td,xh=new td,Xl=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new _){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Rl.subVectors(s[0],s[1]).add(s[0]),c=Rl);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Rl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),mh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,p),gh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,p),xh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),xh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Sx(i,e){let t=1-i;return t*t*e}function wx(i,e){return 2*(1-i)*i*e}function Tx(i,e){return i*i*e}function Jo(i,e,t,n){return Sx(i,e)+wx(i,t)+Tx(i,n)}function Ex(i,e){let t=1-i;return t*t*t*e}function Ax(i,e){let t=1-i;return 3*t*t*i*e}function Cx(i,e){return 3*(1-i)*i*i*e}function Rx(i,e){return i*i*i*e}function Ko(i,e,t,n,s){return Ex(i,e)+Ax(i,t)+Cx(i,n)+Rx(i,s)}var ua=class extends $n{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ql=class extends $n{constructor(e=new _,t=new _,n=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends $n{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends $n{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends $n{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends $n{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y),Jo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(pp(a,l.x,c.x,u.x,h.x),pp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:Xl,CubicBezierCurve:ua,CubicBezierCurve3:ql,EllipseCurve:ao,LineCurve:ha,LineCurve3:Yl,QuadraticBezierCurve:da,QuadraticBezierCurve3:Zl,SplineCurve:fa}),jl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Eh[s.type]().fromJSON(s))}return this}},pa=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new da(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ua(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ao(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ki=class extends pa{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new pa().fromJSON(s))}return this}};function Ix(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=fm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Nx(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ma(r,o,t,a,l,c,0),o}function fm(i,e,t,n,s){let r;if(s===qx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=mp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=mp(o/n|0,i[o],i[o+1],r);return r&&lo(r,r.next)&&(xa(r),r=r.next),r}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(lo(t,t.next)||Xt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ma(i,e,t,n,s,r,o){if(!i)return;!o&&r&&kx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lx(i,n,s,r):Px(i)){e.push(l.i,i.i,c.i),xa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Dx(sr(i),e),ma(i,e,t,n,s,r,2)):o===2&&Ux(i,e,t,n,s,r):ma(sr(i),e,t,n,s,r,1);break}}}function Px(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Yo(s,a,r,l,o,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),x=Math.max(a,l,c),p=Math.max(u,h,d),m=Ah(f,g,e,t,n),v=Ah(x,p,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Yo(a,u,l,h,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Yo(a,u,l,h,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Yo(a,u,l,h,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Yo(a,u,l,h,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Dx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!lo(n,s)&&mm(n,t,t.next,s)&&ga(n,s)&&ga(s,n)&&(e.push(n.i,t.i,s.i),xa(t),xa(t.next),t=i=s),t=t.next}while(t!==i);return sr(t)}function Ux(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let l=gm(o,a);o=sr(o,o.next),l=sr(l,l.next),ma(o,e,t,n,s,r,0),ma(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=fm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gx(c))}s.sort(Fx);for(let r=0;r<s.length;r++)t=Ox(s[r],t);return t}function Fx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ox(i,e){let t=Bx(i,e);if(!t)return e;let n=gm(t,i);return sr(n,n.next),sr(t,t.next)}function Bx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(lo(i,t))return t;do{if(lo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ga(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&zx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function zx(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function kx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ah(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vx(s)}function Vx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ah(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Gx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Yo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&pm(i,e,t,n,s,r,o,a)}function Hx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wx(i,e)&&(ga(i,e)&&ga(e,i)&&Xx(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||lo(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lo(i,e){return i.x===e.x&&i.y===e.y}function mm(i,e,t,n){let s=Pl(Xt(i,e,t)),r=Pl(Xt(i,e,n)),o=Pl(Xt(t,n,i)),a=Pl(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Il(i,t,e)||r===0&&Il(i,n,e)||o===0&&Il(t,i,n)||a===0&&Il(t,e,n))}function Il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pl(i){return i>0?1:i<0?-1:0}function Wx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ga(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Xx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gm(i,e){let t=Ch(i.i,i.x,i.y),n=Ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mp(i,e,t,n){let s=Ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(e,t,n=2){return Ix(e,t,n)}},Ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];gp(e),xp(n,e);let o=e.length;t.forEach(gp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,xp(n,t[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function gp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rr=class i extends ft{constructor(e=new Ki([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Yx,b,y=!1,T,A,P,D;m&&(b=m.getSpacedPoints(u),y=!0,d=!1,T=m.computeFrenetFrames(u,!1),A=new _,P=new _,D=new _),d||(p=0,f=0,g=0,x=0);let w=a.extractPoints(c),M=w.shape,L=w.holes;if(!Ai.isClockWise(M)){M=M.reverse();for(let te=0,K=L.length;te<K;te++){let j=L[te];Ai.isClockWise(j)&&(L[te]=j.reverse())}}function X(te){let j=10000000000000001e-36,ee=te[0];for(let me=1;me<=te.length;me++){let de=me%te.length,be=te[de],ze=be.x-ee.x,We=be.y-ee.y,I=ze*ze+We*We,S=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(ee.x),Math.abs(ee.y)),B=j*S*S;if(I<=B){te.splice(de,1),me--;continue}ee=be}}X(M),L.forEach(X);let V=L.length,G=M;for(let te=0;te<V;te++){let K=L[te];M=M.concat(K)}function W(te,K,j){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(K,j)}let se=M.length;function Y(te,K,j){let ee,me,de,be=te.x-K.x,ze=te.y-K.y,We=j.x-te.x,I=j.y-te.y,S=be*be+ze*ze,B=be*I-ze*We;if(Math.abs(B)>Number.EPSILON){let $=Math.sqrt(S),oe=Math.sqrt(We*We+I*I),ie=K.x-ze/$,Le=K.y+be/$,ge=j.x-I/oe,Ue=j.y+We/oe,Ne=((ge-ie)*I-(Ue-Le)*We)/(be*I-ze*We);ee=ie+be*Ne-te.x,me=Le+ze*Ne-te.y;let fe=ee*ee+me*me;if(fe<=2)return new le(ee,me);de=Math.sqrt(fe/2)}else{let $=!1;be>Number.EPSILON?We>Number.EPSILON&&($=!0):be<-Number.EPSILON?We<-Number.EPSILON&&($=!0):Math.sign(ze)===Math.sign(I)&&($=!0),$?(ee=-ze,me=be,de=Math.sqrt(S)):(ee=be,me=ze,de=Math.sqrt(S/2))}return new le(ee/de,me/de)}let re=[];for(let te=0,K=G.length,j=K-1,ee=te+1;te<K;te++,j++,ee++)j===K&&(j=0),ee===K&&(ee=0),re[te]=Y(G[te],G[j],G[ee]);let ye=[],Se,Be=re.concat();for(let te=0,K=V;te<K;te++){let j=L[te];Se=[];for(let ee=0,me=j.length,de=me-1,be=ee+1;ee<me;ee++,de++,be++)de===me&&(de=0),be===me&&(be=0),Se[ee]=Y(j[ee],j[de],j[be]);ye.push(Se),Be=Be.concat(Se)}let Je;if(p===0)Je=Ai.triangulateShape(G,L);else{let te=[],K=[];for(let j=0;j<p;j++){let ee=j/p,me=f*Math.cos(ee*Math.PI/2),de=g*Math.sin(ee*Math.PI/2)+x;for(let be=0,ze=G.length;be<ze;be++){let We=W(G[be],re[be],de);ue(We.x,We.y,-me),ee===0&&te.push(We)}for(let be=0,ze=V;be<ze;be++){let We=L[be];Se=ye[be];let I=[];for(let S=0,B=We.length;S<B;S++){let $=W(We[S],Se[S],de);ue($.x,$.y,-me),ee===0&&I.push($)}ee===0&&K.push(I)}}Je=Ai.triangulateShape(te,K)}let it=Je.length,Ye=g+x;for(let te=0;te<se;te++){let K=d?W(M[te],Be[te],Ye):M[te];y?(P.copy(T.normals[0]).multiplyScalar(K.x),A.copy(T.binormals[0]).multiplyScalar(K.y),D.copy(b[0]).add(P).add(A),ue(D.x,D.y,D.z)):ue(K.x,K.y,0)}for(let te=1;te<=u;te++)for(let K=0;K<se;K++){let j=d?W(M[K],Be[K],Ye):M[K];y?(P.copy(T.normals[te]).multiplyScalar(j.x),A.copy(T.binormals[te]).multiplyScalar(j.y),D.copy(b[te]).add(P).add(A),ue(D.x,D.y,D.z)):ue(j.x,j.y,h/u*te)}for(let te=p-1;te>=0;te--){let K=te/p,j=f*Math.cos(K*Math.PI/2),ee=g*Math.sin(K*Math.PI/2)+x;for(let me=0,de=G.length;me<de;me++){let be=W(G[me],re[me],ee);ue(be.x,be.y,h+j)}for(let me=0,de=L.length;me<de;me++){let be=L[me];Se=ye[me];for(let ze=0,We=be.length;ze<We;ze++){let I=W(be[ze],Se[ze],ee);y?ue(I.x,I.y+b[u-1].y,b[u-1].x+j):ue(I.x,I.y,h+j)}}}q(),U();function q(){let te=s.length/3;if(d){let K=0,j=se*K;for(let ee=0;ee<it;ee++){let me=Je[ee];N(me[2]+j,me[1]+j,me[0]+j)}K=u+p*2,j=se*K;for(let ee=0;ee<it;ee++){let me=Je[ee];N(me[0]+j,me[1]+j,me[2]+j)}}else{for(let K=0;K<it;K++){let j=Je[K];N(j[2],j[1],j[0])}for(let K=0;K<it;K++){let j=Je[K];N(j[0]+se*u,j[1]+se*u,j[2]+se*u)}}n.addGroup(te,s.length/3-te,0)}function U(){let te=s.length/3,K=0;ne(G,K),K+=G.length;for(let j=0,ee=L.length;j<ee;j++){let me=L[j];ne(me,K),K+=me.length}n.addGroup(te,s.length/3-te,1)}function ne(te,K){let j=te.length;for(;--j>=0;){let ee=j,me=j-1;me<0&&(me=te.length-1);for(let de=0,be=u+p*2;de<be;de++){let ze=se*de,We=se*(de+1),I=K+ee+ze,S=K+me+ze,B=K+me+We,$=K+ee+We;z(I,S,B,$)}}}function ue(te,K,j){l.push(te),l.push(K),l.push(j)}function N(te,K,j){ce(te),ce(K),ce(j);let ee=s.length/3,me=v.generateTopUV(n,s,ee-3,ee-2,ee-1);R(me[0]),R(me[1]),R(me[2])}function z(te,K,j,ee){ce(te),ce(K),ce(ee),ce(K),ce(j),ce(ee);let me=s.length/3,de=v.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);R(de[0]),R(de[1]),R(de[3]),R(de[1]),R(de[2]),R(de[3])}function ce(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function R(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Eh[s.type]().fromJSON(s)),new i(n,e.options)}},Yx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(d,1-g),new le(x,1-m)]:[new le(a,1-l),new le(u,1-h),new le(f,1-g),new le(p,1-m)]}};function Zx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Di=class i extends oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ya=class i extends ft{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new _,d=new le,f=new _,g=new _,x=new _,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let b=n+v*u*s,y=Math.sin(b),T=Math.cos(b);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*y,h.y=e[A].y,h.z=e[A].x*T,o.push(h.x,h.y,h.z),d.x=v/t,d.y=A/(e.length-1),a.push(d.x,d.y);let P=l[3*A+0]*y,D=l[3*A+1],w=l[3*A+0]*T;c.push(P,D,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let y=b+v*e.length,T=y,A=y+e.length,P=y+e.length+1,D=y+1;r.push(T,A,D),r.push(P,D,A)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ai=class i extends oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$i=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let v=m*d-o;for(let b=0;b<c;b++){let y=b*h-r;g.push(y,-v,0),x.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),A=v+1+c*m;f.push(b,y,A),f.push(y,T,A)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},bs=class i extends ft{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new _,g=new le;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,b=v,y=v+n+1,T=v+n+2,A=v+1;a.push(b,y,A),a.push(y,T,A)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},_a=class i extends ft{constructor(e=new Ki([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];Ai.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=Ai.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],b=v[0]+h,y=v[1]+h,T=v[2]+h;n.push(b,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function jx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var li=class i extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new _,d=new _,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],b=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(A+y,1-b),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let b=u[m][v+1],y=u[m][v],T=u[m+1][v],A=u[m+1][v+1];(m!==0||o>0)&&f.push(b,y,A),(m!==n-1||l<Math.PI)&&f.push(y,T,A)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},or=class i extends oo{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qn=class i extends ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new _,h=new _,d=new _;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tn=class extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Jl=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kl=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ll(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ar=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends ar{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-n;break;case Sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,l=2*n-t;break;case Sh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+v*o[c+T]+b*o[l+T]+y*o[h+T];return r}},Ql=class extends ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},ec=class extends ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ll(t,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ll(e.times,Array),values:Ll(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ul,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Jr;var Ms=class extends ei{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=er;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};tc.prototype.ValueTypeName="color";var nc=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};nc.prototype.ValueTypeName="number";var ic=class extends ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)dt.slerpFlat(r,0,o,c-a,o,c,l);return r}},va=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ei{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=er;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};sc.prototype.ValueTypeName="vector";var Nl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},rc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xm=new rc,co=class{constructor(e){this.manager=e!==void 0?e:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=new WeakMap,oc=class extends co{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Nl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Hr.get(o);h===void 0&&(h=[],Hr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=$r("img");function l(){u(),t&&t(this);let h=Hr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Hr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Nl.remove(`image:${e}`);let d=Hr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Nl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var uo=class extends co{constructor(e){super(e)}load(e,t,n,s){let r=new dn,o=new oc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ba=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qi=class extends ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yh=new ct,yp=new _,_p=new _,Ih=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),_p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_p),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ma=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ph=class extends Ih{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ac=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nd="\\[\\]\\.:\\/",Kx=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",$x="[^"+nd.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",id),ey=/(WCOD+)?/.source.replace("WCOD",$x),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),iy=new RegExp("^"+Qx+ey+ty+ny+"$"),sy=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){let t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Lh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xw=new Float32Array(1);var vp=new ct,ts=class{constructor(e,t,n=0,s=1/0){this.ray=new ji(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vp),this}intersectObject(e,t=!0,n=[]){return Dh(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dh(e[s],this,n,t);return n.sort(bp),n}};function bp(i,e){return i.distance-e.distance}function Dh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],e,t,!0)}}var ho=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Mp=new _,Dl=new _,Wr=new _,Xr=new _,_h=new _,ry=new _,oy=new _,lr=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mp.subVectors(e,this.start),Dl.subVectors(this.end,this.start);let n=Dl.dot(Dl),r=Dl.dot(Mp)/n;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=ry,n=oy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Wr.subVectors(c,a),Xr.subVectors(u,l),_h.subVectors(a,l);let h=Wr.dot(Wr),d=Xr.dot(Xr),f=Xr.dot(_h);if(h<=s&&d<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=s)r=0,o=f/d,o=et(o,0,1);else{let g=Wr.dot(_h);if(d<=s)o=0,r=et(-g/h,0,1);else{let x=Wr.dot(Xr),p=h*d-x*x;p!==0?r=et((x*f-g*d)/p,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=et(-g/h,0,1)):o>1&&(o=1,r=et((x-g)/h,0,1))}}return t.copy(a).add(Wr.multiplyScalar(r)),n.copy(l).add(Xr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var cr=class extends Li{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ge(n),s=new Ge(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new ft;u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));let h=new Jn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Sa=class extends Li{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ft;r.setIndex(new St(n,1)),r.setAttribute("position",new Ce(s,3)),super(r,new Jn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var wa=class extends Li{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ft;s.setAttribute("position",new Ce(t,3)),s.setAttribute("color",new Ce(n,3));let r=new Jn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new Ge,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var ur=class extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sd(i,e,t,n){let s=ay(n);switch(t){case Xh:return i*e;case Yh:return i*e/s.components*s.byteLength;case Mc:return i*e/s.components*s.byteLength;case Zh:return i*e*2/s.components*s.byteLength;case Sc:return i*e*2/s.components*s.byteLength;case qh:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case wc:return i*e*4/s.components*s.byteLength;case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Rc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ay(i){switch(i){case _i:case Vh:return{byteLength:1,components:1};case po:case Gh:case mo:return{byteLength:2,components:1};case vc:case bc:return{byteLength:2,components:4};case Ts:case _c:case vi:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function my(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy=`#ifdef USE_BATCHING
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
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Iy=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zy=`#define PI 3.141592653589793
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
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vy=`vec3 transformedNormal = objectNormal;
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
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,p_=`struct PhysicalMaterial {
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
}`,m_=`
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
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
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,Mv=`#if DEPTH_PACKING == 3200
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
}`,Sv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Pv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,Nv=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,kv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,Gv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,Yv=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:gy,alphahash_pars_fragment:xy,alphamap_fragment:yy,alphamap_pars_fragment:_y,alphatest_fragment:vy,alphatest_pars_fragment:by,aomap_fragment:My,aomap_pars_fragment:Sy,batching_pars_vertex:wy,batching_vertex:Ty,begin_vertex:Ey,beginnormal_vertex:Ay,bsdfs:Cy,iridescence_fragment:Ry,bumpmap_pars_fragment:Iy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Uy,color_fragment:Ny,color_pars_fragment:Fy,color_pars_vertex:Oy,color_vertex:By,common:zy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:Vy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Hy,emissivemap_fragment:Wy,emissivemap_pars_fragment:Xy,colorspace_fragment:qy,colorspace_pars_fragment:Yy,envmap_fragment:Zy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Jy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:l_,envmap_vertex:$y,fog_vertex:Qy,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:b_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:w_,map_particle_pars_fragment:T_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:A_,morphinstance_vertex:C_,morphcolor_vertex:R_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:D_,normal_fragment_maps:U_,normal_pars_fragment:N_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:G_,opaque_fragment:H_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:$_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:sv,specularmap_fragment:rv,specularmap_pars_fragment:ov,tonemapping_fragment:av,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:uv,uv_pars_fragment:hv,uv_pars_vertex:dv,uv_vertex:fv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:_v,cube_frag:vv,depth_vert:bv,depth_frag:Mv,distanceRGBA_vert:Sv,distanceRGBA_frag:wv,equirect_vert:Tv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:Cv,meshbasic_vert:Rv,meshbasic_frag:Iv,meshlambert_vert:Pv,meshlambert_frag:Lv,meshmatcap_vert:Dv,meshmatcap_frag:Uv,meshnormal_vert:Nv,meshnormal_frag:Fv,meshphong_vert:Ov,meshphong_frag:Bv,meshphysical_vert:zv,meshphysical_frag:kv,meshtoon_vert:Vv,meshtoon_frag:Gv,points_vert:Hv,points_frag:Wv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:Zv},Ee={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ni={basic:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:bn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:bn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:bn([Ee.points,Ee.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:bn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:bn([Ee.common,Ee.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:bn([Ee.sprite,Ee.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:bn([Ee.common,Ee.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:bn([Ee.lights,Ee.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ni.physical={uniforms:bn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Qc={r:0,b:0,g:0},mr=new en,jv=new ct;function Jv(i,e,t,n,s,r,o){let a=new Ge(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,T=g(b);T===null?m(a,l):T&&T.isColor&&(m(T,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){let T=g(y);T&&(T.isCubeTexture||T.mapping===Ta)?(u===void 0&&(u=new ve(new rt(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:pr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mr.copy(y.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(mr)),u.material.toneMapped=bt.getTransfer(T.colorSpace)!==At,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ve(new $i(2,2),new yi({name:"BackgroundMaterial",uniforms:pr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=bt.getTransfer(T.colorSpace)!==At,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(Qc,ed(i)),n.buffers.color.setClear(Qc.r,Qc.g,Qc.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p,dispose:v}}function Kv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,L,O,X,V){let G=!1,W=h(X,O,L);r!==W&&(r=W,c(r.object)),G=f(M,X,O,V),G&&g(M,X,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(M,L,O,X),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,O){let X=O.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let G=V[L.id];G===void 0&&(G={},V[L.id]=G);let W=G[X];return W===void 0&&(W=d(l()),G[X]=W),W}function d(M){let L=[],O=[],X=[];for(let V=0;V<t;V++)L[V]=0,O[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:X,object:M,attributes:{},index:null}}function f(M,L,O,X){let V=r.attributes,G=L.attributes,W=0,se=O.getAttributes();for(let Y in se)if(se[Y].location>=0){let ye=V[Y],Se=G[Y];if(Se===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ye===void 0||ye.attribute!==Se||Se&&ye.data!==Se.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function g(M,L,O,X){let V={},G=L.attributes,W=0,se=O.getAttributes();for(let Y in se)if(se[Y].location>=0){let ye=G[Y];ye===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));let Se={};Se.attribute=ye,ye&&ye.data&&(Se.data=ye.data),V[Y]=Se,W++}r.attributes=V,r.attributesNum=W,r.index=X}function x(){let M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function p(M){m(M,0)}function m(M,L){let O=r.newAttributes,X=r.enabledAttributes,V=r.attributeDivisors;O[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),V[M]!==L&&(i.vertexAttribDivisor(M,L),V[M]=L)}function v(){let M=r.newAttributes,L=r.enabledAttributes;for(let O=0,X=L.length;O<X;O++)L[O]!==M[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function b(M,L,O,X,V,G,W){W===!0?i.vertexAttribIPointer(M,L,O,V,G):i.vertexAttribPointer(M,L,O,X,V,G)}function y(M,L,O,X){x();let V=X.attributes,G=O.getAttributes(),W=L.defaultAttributeValues;for(let se in G){let Y=G[se];if(Y.location>=0){let re=V[se];if(re===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let ye=re.normalized,Se=re.itemSize,Be=e.get(re);if(Be===void 0)continue;let Je=Be.buffer,it=Be.type,Ye=Be.bytesPerElement,q=it===i.INT||it===i.UNSIGNED_INT||re.gpuType===_c;if(re.isInterleavedBufferAttribute){let U=re.data,ne=U.stride,ue=re.offset;if(U.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)m(Y.location+N,U.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let N=0;N<Y.locationSize;N++)p(Y.location+N);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let N=0;N<Y.locationSize;N++)b(Y.location+N,Se/Y.locationSize,it,ye,ne*Ye,(ue+Se/Y.locationSize*N)*Ye,q)}else{if(re.isInstancedBufferAttribute){for(let U=0;U<Y.locationSize;U++)m(Y.location+U,re.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let U=0;U<Y.locationSize;U++)p(Y.location+U);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let U=0;U<Y.locationSize;U++)b(Y.location+U,Se/Y.locationSize,it,ye,Se*Ye,Se/Y.locationSize*U*Ye,q)}}else if(W!==void 0){let ye=W[se];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(Y.location,ye);break;case 3:i.vertexAttrib3fv(Y.location,ye);break;case 4:i.vertexAttrib4fv(Y.location,ye);break;default:i.vertexAttrib1fv(Y.location,ye)}}}}v()}function T(){D();for(let M in n){let L=n[M];for(let O in L){let X=L[O];for(let V in X)u(X[V].object),delete X[V];delete L[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let O in L){let X=L[O];for(let V in X)u(X[V].object),delete X[V];delete L[O]}delete n[M.id]}function P(M){for(let L in n){let O=n[L];if(O[M.id]===void 0)continue;let X=O[M.id];for(let V in X)u(X[V].object),delete X[V];delete O[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function $v(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_i&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vi&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:T,maxSamples:A}}function eb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yn,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,b=v*4,y=m.clippingState||null;l.value=y,y=u(g,d,b,f);for(let T=0;T!==b;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function tb(i){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=hr:a===xc&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===xc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _o=4,ym=[.125,.215,.35,.446,.526,.582],yr=20,rd=new Ma,_m=new Ge,od=null,ad=0,ld=0,cd=!1,xr=(1+Math.sqrt(5))/2,yo=1/xr,vm=[new _(-xr,yo,0),new _(xr,yo,0),new _(-yo,0,xr),new _(yo,0,xr),new _(0,xr,-yo),new _(0,xr,yo),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],nb=new _,nu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=nb}=r;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:mo,format:Rn,colorSpace:tr,depthBuffer:!1},s=bm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(r)),this._blurMaterial=sb(r,e,t)}return s}_compileMaterial(e){let t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,rd)}_sceneToCubeUV(e,t,n,s,r){let l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(_m),h.toneMapping=is,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new fn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),p=new ve(new rt,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(_m),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let T=this._cubeSize;eu(s,y*T,b>2?T:0,T,T),h.setRenderTarget(s),m&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===hr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;eu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vm[(s-r-1)%vm.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ve(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yr-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):yr;p>yr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);let m=[],v=0;for(let P=0;P<yr;++P){let D=P/x,w=Math.exp(-D*D/2);m.push(w),P===0?v+=w:P<p&&(v+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],T=3*y*(s>b-_o?s-b+_o:0),A=4*(this._cubeSize-y);eu(t,T,A,3*y,2*y),l.setRenderTarget(t),l.render(h,rd)}};function ib(i){let e=[],t=[],n=[],s=i,r=i-_o+1+ym.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-_o?l=ym[o-i+_o-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),b=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,D=A>2?0:-1,w=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];v.set(w,x*g*A),b.set(d,p*g*A);let M=[A,A,A,A,A,A];y.set(M,m*g*A)}let T=new ft;T.setAttribute("position",new St(v,x)),T.setAttribute("uv",new St(b,p)),T.setAttribute("faceIndex",new St(y,m)),e.push(T),s>_o&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bm(i,e,t){let n=new Ri(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sb(i,e,t){let n=new Float32Array(yr),s=new _(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vd(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Mm(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Sm(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}function rb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===gc||l===xc,u=l===hr||l===dr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new nu(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ob(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ab(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){let T=v[b+0],A=v[b+1],P=v[b+2];d.push(T,A,A,P,P,T)}}else if(g!==void 0){let v=g.array;x=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let T=b+0,A=b+1,P=b+2;d.push(T,A,A,P,P,T)}}else return;let p=new(Qh(d)?ta:nr)(d,1);p.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lb(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*x[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ub(i,e,t){let n=new WeakMap,s=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*T*4*h),P=new ea(A,y,T,h);P.type=vi,P.needsUpdate=!0;let D=b*4;for(let M=0;M<h;M++){let L=p[M],O=m[M],X=v[M],V=y*T*4*M;for(let G=0;G<L.count;G++){let W=G*D;f===!0&&(s.fromBufferAttribute(L,G),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),g===!0&&(s.fromBufferAttribute(O,G),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),x===!0&&(s.fromBufferAttribute(X,G),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new le(y,T)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hb(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Gm=new dn,wm=new aa(1,1),Hm=new ea,Wm=new zl,Xm=new ia,Tm=[],Em=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function Mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Tm[s];if(r===void 0&&(r=new Float32Array(s),Tm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function iu(i,e){let t=Em[e];t===void 0&&(t=new Int32Array(e),Em[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function db(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function gb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Rm.set(n),i.uniformMatrix2fv(this.addr,!1,Rm),an(t,n)}}function xb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Cm.set(n),i.uniformMatrix3fv(this.addr,!1,Cm),an(t,n)}}function yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Am.set(n),i.uniformMatrix4fv(this.addr,!1,Am),an(t,n)}}function _b(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Sb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function Eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function Ab(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wm.compareFunction=Jh,r=wm):r=Gm,t.setTexture2D(e||r,s)}function Cb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wm,s)}function Rb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xm,s)}function Ib(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hm,s)}function Pb(i){switch(i){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return bb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Tb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Lb(i,e){i.uniform1fv(this.addr,e)}function Db(i,e){let t=Mo(e,this.size,2);i.uniform2fv(this.addr,t)}function Ub(i,e){let t=Mo(e,this.size,3);i.uniform3fv(this.addr,t)}function Nb(i,e){let t=Mo(e,this.size,4);i.uniform4fv(this.addr,t)}function Fb(i,e){let t=Mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ob(i,e){let t=Mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bb(i,e){let t=Mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zb(i,e){i.uniform1iv(this.addr,e)}function kb(i,e){i.uniform2iv(this.addr,e)}function Vb(i,e){i.uniform3iv(this.addr,e)}function Gb(i,e){i.uniform4iv(this.addr,e)}function Hb(i,e){i.uniform1uiv(this.addr,e)}function Wb(i,e){i.uniform2uiv(this.addr,e)}function Xb(i,e){i.uniform3uiv(this.addr,e)}function qb(i,e){i.uniform4uiv(this.addr,e)}function Yb(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gm,r[o])}function Zb(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wm,r[o])}function jb(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xm,r[o])}function Jb(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hm,r[o])}function Kb(i){switch(i){case 5126:return Lb;case 35664:return Db;case 35665:return Ub;case 35666:return Nb;case 35674:return Fb;case 35675:return Ob;case 35676:return Bb;case 5124:case 35670:return zb;case 35667:case 35671:return kb;case 35668:case 35672:return Vb;case 35669:case 35673:return Gb;case 5125:return Hb;case 36294:return Wb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Jb}}var hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pb(t.type)}},dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kb(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ud=/(\w+)(\])?(\[|\.)?/g;function Im(i,e){i.seq.push(e),i.map[e.id]=e}function $b(i,e,t){let n=i.name,s=n.length;for(ud.lastIndex=0;;){let r=ud.exec(n),o=ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Im(t,c===void 0?new hd(a,i,e):new dd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fd(a),Im(t,h)),t=h}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$b(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Pm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qb=37297,eM=0;function tM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Lm=new ot;function nM(i){bt._getMatrix(Lm,bt.workingColorSpace,i);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case $o:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tM(i.getShaderSource(e),a)}else return r}function iM(i,e){let t=nM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sM(i,e){let t;switch(e){case qp:t="Linear";break;case Yp:t="Reinhard";break;case Zp:t="Cineon";break;case mc:t="ACESFilmic";break;case Jp:t="AgX";break;case Kp:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tu=new _;function rM(){bt.getLuminanceCoefficients(tu);let i=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function aM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ia(i){return i!==""}function Um(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(i){return i.replace(cM,hM)}var uM=new Map;function hM(i,e){let t=ut[e];if(t===void 0){let n=uM.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}var dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(i){return i.replace(dM,fM)}function fM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Om(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case dr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function xM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wp:e="ENVMAP_BLENDING_MIX";break;case Xp:e="ENVMAP_BLENDING_ADD";break}return e}function yM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _M(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pM(t),c=mM(t),u=gM(t),h=xM(t),d=yM(t),f=oM(t),g=aM(r),x=s.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(p=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?ut.tonemapping_pars_fragment:"",t.toneMapping!==is?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,iM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=pd(o),o=Um(o,t),o=Nm(o,t),a=pd(a),a=Um(a,t),a=Nm(a,t),o=Fm(o),a=Fm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+p+o,y=v+m+a,T=Pm(s,s.VERTEX_SHADER,b),A=Pm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(A)||"",G=O.trim(),W=X.trim(),se=V.trim(),Y=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,A);else{let ye=Dm(s,T,"vertex"),Se=Dm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ye+`
`+Se)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||se==="")&&(re=!1);re&&(L.diagnostics={runnable:Y,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:se,prefix:m}})}s.deleteShader(T),s.deleteShader(A),D=new vo(s,x),w=lM(s,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Qb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var vM=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gd(e),t.set(e,n)),n}},gd=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};function bM(i,e,t,n,s,r,o){let a=new to,l=new md,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,L,O,X){let V=O.fog,G=X.geometry,W=w.isMeshStandardMaterial?O.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),Y=se&&se.mapping===Ta?se.image.height:null,re=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ye!==void 0?ye.length:0,Be=0;G.morphAttributes.position!==void 0&&(Be=1),G.morphAttributes.normal!==void 0&&(Be=2),G.morphAttributes.color!==void 0&&(Be=3);let Je,it,Ye,q;if(re){let _t=Ni[re];Je=_t.vertexShader,it=_t.fragmentShader}else Je=w.vertexShader,it=w.fragmentShader,l.update(w),Ye=l.getVertexShaderID(w),q=l.getFragmentShaderID(w);let U=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),ue=X.isInstancedMesh===!0,N=X.isBatchedMesh===!0,z=!!w.map,ce=!!w.matcap,R=!!se,te=!!w.aoMap,K=!!w.lightMap,j=!!w.bumpMap,ee=!!w.normalMap,me=!!w.displacementMap,de=!!w.emissiveMap,be=!!w.metalnessMap,ze=!!w.roughnessMap,We=w.anisotropy>0,I=w.clearcoat>0,S=w.dispersion>0,B=w.iridescence>0,$=w.sheen>0,oe=w.transmission>0,ie=We&&!!w.anisotropyMap,Le=I&&!!w.clearcoatMap,ge=I&&!!w.clearcoatNormalMap,Ue=I&&!!w.clearcoatRoughnessMap,Ne=B&&!!w.iridescenceMap,fe=B&&!!w.iridescenceThicknessMap,Te=$&&!!w.sheenColorMap,Xe=$&&!!w.sheenRoughnessMap,Re=!!w.specularMap,we=!!w.specularColorMap,nt=!!w.specularIntensityMap,F=oe&&!!w.transmissionMap,xe=oe&&!!w.thicknessMap,Me=!!w.gradientMap,De=!!w.alphaMap,pe=w.alphaTest>0,ae=!!w.alphaHash,Ie=!!w.extensions,Ke=is;w.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let wt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:it,defines:w.defines,customVertexShaderID:Ye,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:N,batchingColor:N&&X._colorsTexture!==null,instancing:ue,instancingColor:ue&&X.instanceColor!==null,instancingMorph:ue&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:tr,alphaToCoverage:!!w.alphaToCoverage,map:z,matcap:ce,envMap:R,envMapMode:R&&se.mapping,envMapCubeUVHeight:Y,aoMap:te,lightMap:K,bumpMap:j,normalMap:ee,displacementMap:d&&me,emissiveMap:de,normalMapObjectSpace:ee&&w.normalMapType===tm,normalMapTangentSpace:ee&&w.normalMapType===jh,metalnessMap:be,roughnessMap:ze,anisotropy:We,anisotropyMap:ie,clearcoat:I,clearcoatMap:Le,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ue,dispersion:S,iridescence:B,iridescenceMap:Ne,iridescenceThicknessMap:fe,sheen:$,sheenColorMap:Te,sheenRoughnessMap:Xe,specularMap:Re,specularColorMap:we,specularIntensityMap:nt,transmission:oe,transmissionMap:F,thicknessMap:xe,gradientMap:Me,opaque:w.transparent===!1&&w.blending===$s&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:ae,combine:w.combine,mapUv:z&&x(w.map.channel),aoMapUv:te&&x(w.aoMap.channel),lightMapUv:K&&x(w.lightMap.channel),bumpMapUv:j&&x(w.bumpMap.channel),normalMapUv:ee&&x(w.normalMap.channel),displacementMapUv:me&&x(w.displacementMap.channel),emissiveMapUv:de&&x(w.emissiveMap.channel),metalnessMapUv:be&&x(w.metalnessMap.channel),roughnessMapUv:ze&&x(w.roughnessMap.channel),anisotropyMapUv:ie&&x(w.anisotropyMap.channel),clearcoatMapUv:Le&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(w.sheenRoughnessMap.channel),specularMapUv:Re&&x(w.specularMap.channel),specularColorMapUv:we&&x(w.specularColorMap.channel),specularIntensityMapUv:nt&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:xe&&x(w.thicknessMap.channel),alphaMapUv:De&&x(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ee||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(z||De),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:z&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===At,decodeVideoTextureEmissive:de&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===At,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qt,flipSided:w.side===Cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],L;if(M){let O=Ni[M];L=dm.clone(O.uniforms)}else L=w.uniforms;return L}function T(w,M){let L;for(let O=0,X=u.length;O<X;O++){let V=u[O];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new _M(i,M,w,r),u.push(L)),L}function A(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:D}}function MM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function SM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),e++,m}function a(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||SM),n.length>1&&n.sort(d||Bm),s.length>1&&s.sort(d||Bm)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new zm,i.set(n,[o])):s>=r.length?(o=new zm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function TM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Ge};break;case"SpotLight":t={position:new _,direction:new _,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new _,halfWidth:new _,halfHeight:new _};break}return i[e.id]=t,t}}}function EM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var AM=0;function CM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function RM(i){let e=new TM,t=EM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new _);let s=new _,r=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,b=0,y=0,T=0,A=0,P=0;c.sort(CM);for(let w=0,M=c.length;w<M;w++){let L=c[w],O=L.color,X=L.intensity,V=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*X,h+=O.g*X,d+=O.b*X;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],X);P++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let se=L.shadow,Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=W,f++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(X),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[x]=W;let se=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,se.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=se.matrix,L.castShadow){let Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=G,y++}x++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(O).multiplyScalar(X),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let se=L.shadow,Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=W,g++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(X),W.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==v||D.numPointShadows!==b||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=v,D.numPointShadows=b,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=P,n.version=AM++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function km(i){let e=new RM(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function IM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new km(i),e.set(s,[a])):r>=o.length?(a=new km(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`;function DM(i,e,t){let n=new so,s=new le,r=new le,o=new Rt,a=new Jl({depthPacking:em}),l=new Kl,c={},u=t.maxTextureSize,h={[Zi]:Cn,[Cn]:Zi,[qt]:qt},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(A,P,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ns),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=m!==Ui&&this.type===Ui,V=m===Ui&&this.type!==Ui;for(let G=0,W=A.length;G<W;G++){let se=A[G],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let re=Y.getFrameExtents();if(s.multiply(re),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||V===!0){let Se=this.type!==Ui?{minFilter:_n,magFilter:_n}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(s.x,s.y,Se),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ye=Y.getViewportCount();for(let Se=0;Se<ye;Se++){let Be=Y.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),O.viewport(o),Y.updateMatrices(se,Se),n=Y.getFrustum(),y(P,D,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Ui&&v(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,M,L)};function v(A,P){let D=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,D,f,x,null)}function b(A,P,D,w){let M=null,L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=M.uuid,X=P.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let G=V[X];G===void 0&&(G=M.clone(),V[X]=G,P.addEventListener("dispose",T)),M=G}if(M.visible=P.visible,M.wireframe=P.wireframe,w===Ui?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=D}return M}function y(A,P,D,w,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ui)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let X=e.update(A),V=A.material;if(Array.isArray(V)){let G=X.groups;for(let W=0,se=G.length;W<se;W++){let Y=G[W],re=V[Y.materialIndex];if(re&&re.visible){let ye=b(A,re,w,M);A.onBeforeShadow(i,A,P,D,X,ye,Y),i.renderBufferDirect(D,null,X,ye,A,Y),A.onAfterShadow(i,A,P,D,X,ye,Y)}}}else if(V.visible){let G=b(A,V,w,M);A.onBeforeShadow(i,A,P,D,X,G,null),i.renderBufferDirect(D,null,X,G,A,null),A.onAfterShadow(i,A,P,D,X,G,null)}}let O=A.children;for(let X=0,V=O.length;X<V;X++)y(O[X],P,D,w,M)}function T(A){A.target.removeEventListener("dispose",T);for(let D in c){let w=c[D],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var UM={[lc]:cc,[uc]:fc,[hc]:pc,[Qs]:dc,[cc]:lc,[fc]:uc,[pc]:hc,[dc]:Qs};function NM(i,e){function t(){let F=!1,xe=new Rt,Me=null,De=new Rt(0,0,0,0);return{setMask:function(pe){Me!==pe&&!F&&(i.colorMask(pe,pe,pe,pe),Me=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ae,Ie,Ke,wt){wt===!0&&(pe*=Ke,ae*=Ke,Ie*=Ke),xe.set(pe,ae,Ie,Ke),De.equals(xe)===!1&&(i.clearColor(pe,ae,Ie,Ke),De.copy(xe))},reset:function(){F=!1,Me=null,De.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,Me=null,De=null,pe=null;return{setReversed:function(ae){if(xe!==ae){let Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;let Ke=pe;pe=null,this.setClear(Ke)}},getReversed:function(){return xe},setTest:function(ae){ae?U(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(ae){Me!==ae&&!F&&(i.depthMask(ae),Me=ae)},setFunc:function(ae){if(xe&&(ae=UM[ae]),De!==ae){switch(ae){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ae}},setLocked:function(ae){F=ae},setClear:function(ae){pe!==ae&&(xe&&(ae=1-ae),i.clearDepth(ae),pe=ae)},reset:function(){F=!1,Me=null,De=null,pe=null,xe=!1}}}function s(){let F=!1,xe=null,Me=null,De=null,pe=null,ae=null,Ie=null,Ke=null,wt=null;return{setTest:function(_t){F||(_t?U(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(_t){xe!==_t&&!F&&(i.stencilMask(_t),xe=_t)},setFunc:function(_t,Wn,Un){(Me!==_t||De!==Wn||pe!==Un)&&(i.stencilFunc(_t,Wn,Un),Me=_t,De=Wn,pe=Un)},setOp:function(_t,Wn,Un){(ae!==_t||Ie!==Wn||Ke!==Un)&&(i.stencilOp(_t,Wn,Un),ae=_t,Ie=Wn,Ke=Un)},setLocked:function(_t){F=_t},setClear:function(_t){wt!==_t&&(i.clearStencil(_t),wt=_t)},reset:function(){F=!1,xe=null,Me=null,De=null,pe=null,ae=null,Ie=null,Ke=null,wt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,T=null,A=null,P=new Ge(0,0,0),D=0,w=!1,M=null,L=null,O=null,X=null,V=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=se>=2);let re=null,ye={},Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Je=new Rt().fromArray(Se),it=new Rt().fromArray(Be);function Ye(F,xe,Me,De){let pe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(F,ae),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Me;Ie++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(xe+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ae}let q={};q[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(i.DEPTH_TEST),o.setFunc(Qs),j(!1),ee(Uh),U(i.CULL_FACE),te(ns);function U(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ne(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ue(F,xe){return h[F]!==xe?(i.bindFramebuffer(F,xe),h[F]=xe,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function N(F,xe){let Me=f,De=!1;if(F){Me=d.get(xe),Me===void 0&&(Me=[],d.set(xe,Me));let pe=F.textures;if(Me.length!==pe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ie=pe.length;ae<Ie;ae++)Me[ae]=i.COLOR_ATTACHMENT0+ae;Me.length=pe.length,De=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,De=!0);De&&i.drawBuffers(Me)}function z(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let ce={[_s]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Cp]:i.FUNC_REVERSE_SUBTRACT};ce[Rp]=i.MIN,ce[Ip]=i.MAX;let R={[Pp]:i.ZERO,[Lp]:i.ONE,[Dp]:i.SRC_COLOR,[Fl]:i.SRC_ALPHA,[zp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Up]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Fp]:i.ONE_MINUS_DST_ALPHA,[kp]:i.CONSTANT_COLOR,[Vp]:i.ONE_MINUS_CONSTANT_COLOR,[Gp]:i.CONSTANT_ALPHA,[Hp]:i.ONE_MINUS_CONSTANT_ALPHA};function te(F,xe,Me,De,pe,ae,Ie,Ke,wt,_t){if(F===ns){x===!0&&(ne(i.BLEND),x=!1);return}if(x===!1&&(U(i.BLEND),x=!0),F!==Ep){if(F!==p||_t!==w){if((m!==_s||y!==_s)&&(i.blendEquation(i.FUNC_ADD),m=_s,y=_s),_t)switch(F){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,b=null,T=null,A=null,P.set(0,0,0),D=0,p=F,w=_t}return}pe=pe||xe,ae=ae||Me,Ie=Ie||De,(xe!==m||pe!==y)&&(i.blendEquationSeparate(ce[xe],ce[pe]),m=xe,y=pe),(Me!==v||De!==b||ae!==T||Ie!==A)&&(i.blendFuncSeparate(R[Me],R[De],R[ae],R[Ie]),v=Me,b=De,T=ae,A=Ie),(Ke.equals(P)===!1||wt!==D)&&(i.blendColor(Ke.r,Ke.g,Ke.b,wt),P.copy(Ke),D=wt),p=F,w=!1}function K(F,xe){F.side===qt?ne(i.CULL_FACE):U(i.CULL_FACE);let Me=F.side===Cn;xe&&(Me=!Me),j(Me),F.blending===$s&&F.transparent===!1?te(ns):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let De=F.stencilWrite;a.setTest(De),De&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function ee(F){F!==Sp?(U(i.CULL_FACE),F!==L&&(F===Uh?i.cullFace(i.BACK):F===wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),L=F}function me(F){F!==O&&(W&&i.lineWidth(F),O=F)}function de(F,xe,Me){F?(U(i.POLYGON_OFFSET_FILL),(X!==xe||V!==Me)&&(i.polygonOffset(xe,Me),X=xe,V=Me)):ne(i.POLYGON_OFFSET_FILL)}function be(F){F?U(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function ze(F){F===void 0&&(F=i.TEXTURE0+G-1),re!==F&&(i.activeTexture(F),re=F)}function We(F,xe,Me){Me===void 0&&(re===null?Me=i.TEXTURE0+G-1:Me=re);let De=ye[Me];De===void 0&&(De={type:void 0,texture:void 0},ye[Me]=De),(De.type!==F||De.texture!==xe)&&(re!==Me&&(i.activeTexture(Me),re=Me),i.bindTexture(F,xe||q[F]),De.type=F,De.texture=xe)}function I(){let F=ye[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){Je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function Xe(F){it.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function Re(F,xe){let Me=c.get(xe);Me===void 0&&(Me=new WeakMap,c.set(xe,Me));let De=Me.get(F);De===void 0&&(De=i.getUniformBlockIndex(xe,F.name),Me.set(F,De))}function we(F,xe){let De=c.get(xe).get(F);l.get(xe)!==De&&(i.uniformBlockBinding(xe,De,F.__bindingPointIndex),l.set(xe,De))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ye={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,T=null,A=null,P=new Ge(0,0,0),D=0,w=!1,M=null,L=null,O=null,X=null,V=null,Je.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:ne,bindFramebuffer:ue,drawBuffers:N,useProgram:z,setBlending:te,setMaterial:K,setFlipSided:j,setCullFace:ee,setLineWidth:me,setPolygonOffset:de,setScissorTest:be,activeTexture:ze,bindTexture:We,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Ne,texImage3D:fe,updateUBOMapping:Re,uniformBlockBinding:we,texStorage2D:ge,texStorage3D:Ue,texSubImage2D:$,texSubImage3D:oe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Le,scissor:Te,viewport:Xe,reset:nt}}function FM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return f?new OffscreenCanvas(I,S):$r("canvas")}function x(I,S,B){let $=1,oe=We(I);if((oe.width>B||oe.height>B)&&($=B/Math.max(oe.width,oe.height)),$<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor($*oe.width),Le=Math.floor($*oe.height);h===void 0&&(h=g(ie,Le));let ge=S?g(ie,Le):h;return ge.width=ie,ge.height=Le,ge.getContext("2d").drawImage(I,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+Le+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,S,B,$,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ie=S;if(S===i.RED&&(B===i.FLOAT&&(ie=i.R32F),B===i.HALF_FLOAT&&(ie=i.R16F),B===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.R8UI),B===i.UNSIGNED_SHORT&&(ie=i.R16UI),B===i.UNSIGNED_INT&&(ie=i.R32UI),B===i.BYTE&&(ie=i.R8I),B===i.SHORT&&(ie=i.R16I),B===i.INT&&(ie=i.R32I)),S===i.RG&&(B===i.FLOAT&&(ie=i.RG32F),B===i.HALF_FLOAT&&(ie=i.RG16F),B===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RG8UI),B===i.UNSIGNED_SHORT&&(ie=i.RG16UI),B===i.UNSIGNED_INT&&(ie=i.RG32UI),B===i.BYTE&&(ie=i.RG8I),B===i.SHORT&&(ie=i.RG16I),B===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),B===i.UNSIGNED_INT&&(ie=i.RGB32UI),B===i.BYTE&&(ie=i.RGB8I),B===i.SHORT&&(ie=i.RGB16I),B===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),B===i.UNSIGNED_INT&&(ie=i.RGBA32UI),B===i.BYTE&&(ie=i.RGBA8I),B===i.SHORT&&(ie=i.RGBA16I),B===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),S===i.RGBA){let Le=oe?$o:bt.getTransfer($);B===i.FLOAT&&(ie=i.RGBA32F),B===i.HALF_FLOAT&&(ie=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ie=Le===At?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(I,S){let B;return I?S===null||S===Ts||S===go?B=i.DEPTH24_STENCIL8:S===vi?B=i.DEPTH32F_STENCIL8:S===po&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ts||S===go?B=i.DEPTH_COMPONENT24:S===vi?B=i.DEPTH_COMPONENT32F:S===po&&(B=i.DEPTH_COMPONENT16),B}function T(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==_n&&I.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&u.delete(S)}function P(I){let S=I.target;S.removeEventListener("dispose",P),M(S)}function D(I){let S=n.get(I);if(S.__webglInit===void 0)return;let B=I.source,$=d.get(B);if($){let oe=$[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(I),Object.keys($).length===0&&d.delete(B)}n.remove(I)}function w(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let B=I.source,$=d.get(B);delete $[S.__cacheKey],o.memory.textures--}function M(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let oe=0;oe<S.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=I.textures;for(let $=0,oe=B.length;$<oe;$++){let ie=n.get(B[$]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(I)}let L=0;function O(){L=0}function X(){let I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function V(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){let B=n.get(I);if(I.isVideoTexture&&be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){let $=I.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,I,S);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function W(I,S){let B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){q(B,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function se(I,S){let B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){q(B,I,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function Y(I,S){let B=n.get(I);if(I.version>0&&B.__version!==I.version){U(B,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let re={[On]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},ye={[_n]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[vn]:i.LINEAR_MIPMAP_LINEAR},Se={[nm]:i.NEVER,[lm]:i.ALWAYS,[im]:i.LESS,[Jh]:i.LEQUAL,[sm]:i.EQUAL,[am]:i.GEQUAL,[rm]:i.GREATER,[om]:i.NOTEQUAL};function Be(I,S){if(S.type===vi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===fo||S.magFilter===fr||S.magFilter===vn||S.minFilter===rn||S.minFilter===fo||S.minFilter===fr||S.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ye[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ye[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==fr&&S.minFilter!==vn||S.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Je(I,S){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let $=S.source,oe=d.get($);oe===void 0&&(oe={},d.set($,oe));let ie=V(S);if(ie!==I.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),oe[ie].usedTimes++;let Le=oe[I.__cacheKey];Le!==void 0&&(oe[I.__cacheKey].usedTimes--,Le.usedTimes===0&&w(S)),I.__cacheKey=ie,I.__webglTexture=oe[ie].texture}return B}function it(I,S,B){return Math.floor(Math.floor(I/B)/S)}function Ye(I,S,B,$){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,$,S.data);else{ie.sort((fe,Te)=>fe.start-Te.start);let Le=0;for(let fe=1;fe<ie.length;fe++){let Te=ie[Le],Xe=ie[fe],Re=Te.start+Te.count,we=it(Xe.start,S.width,4),nt=it(Te.start,S.width,4);Xe.start<=Re+1&&we===nt&&it(Xe.start+Xe.count-1,S.width,4)===we?Te.count=Math.max(Te.count,Xe.start+Xe.count-Te.start):(++Le,ie[Le]=Xe)}ie.length=Le+1;let ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let fe=0,Te=ie.length;fe<Te;fe++){let Xe=ie[fe],Re=Math.floor(Xe.start/4),we=Math.ceil(Xe.count/4),nt=Re%S.width,F=Math.floor(Re/S.width),xe=we,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,nt,F,xe,Me,B,$,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function q(I,S,B){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let oe=Je(I,S),ie=S.source;t.bindTexture($,I.__webglTexture,i.TEXTURE0+B);let Le=n.get(ie);if(ie.version!==Le.__version||oe===!0){t.activeTexture(i.TEXTURE0+B);let ge=bt.getPrimaries(bt.workingColorSpace),Ue=S.colorSpace===bi?null:bt.getPrimaries(S.colorSpace),Ne=S.colorSpace===bi||ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let fe=x(S.image,!1,s.maxTextureSize);fe=ze(S,fe);let Te=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type),Re=b(S.internalFormat,Te,Xe,S.colorSpace,S.isVideoTexture);Be($,S);let we,nt=S.mipmaps,F=S.isVideoTexture!==!0,xe=Le.__version===void 0||oe===!0,Me=ie.dataReady,De=T(S,fe);if(S.isDepthTexture)Re=y(S.format===xo,S.type),xe&&(F?t.texStorage2D(i.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Re,fe.width,fe.height,0,Te,Xe,null));else if(S.isDataTexture)if(nt.length>0){F&&xe&&t.texStorage2D(i.TEXTURE_2D,De,Re,nt[0].width,nt[0].height);for(let pe=0,ae=nt.length;pe<ae;pe++)we=nt[pe],F?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,Te,Xe,we.data):t.texImage2D(i.TEXTURE_2D,pe,Re,we.width,we.height,0,Te,Xe,we.data);S.generateMipmaps=!1}else F?(xe&&t.texStorage2D(i.TEXTURE_2D,De,Re,fe.width,fe.height),Me&&Ye(S,fe,Te,Xe)):t.texImage2D(i.TEXTURE_2D,0,Re,fe.width,fe.height,0,Te,Xe,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Re,nt[0].width,nt[0].height,fe.depth);for(let pe=0,ae=nt.length;pe<ae;pe++)if(we=nt[pe],S.format!==Rn)if(Te!==null)if(F){if(Me)if(S.layerUpdates.size>0){let Ie=sd(we.width,we.height,S.format,S.type);for(let Ke of S.layerUpdates){let wt=we.data.subarray(Ke*Ie/we.data.BYTES_PER_ELEMENT,(Ke+1)*Ie/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Ke,we.width,we.height,1,Te,wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,fe.depth,Te,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Re,we.width,we.height,fe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,fe.depth,Te,Xe,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Re,we.width,we.height,fe.depth,0,Te,Xe,we.data)}else{F&&xe&&t.texStorage2D(i.TEXTURE_2D,De,Re,nt[0].width,nt[0].height);for(let pe=0,ae=nt.length;pe<ae;pe++)we=nt[pe],S.format!==Rn?Te!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Re,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,Te,Xe,we.data):t.texImage2D(i.TEXTURE_2D,pe,Re,we.width,we.height,0,Te,Xe,we.data)}else if(S.isDataArrayTexture)if(F){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Re,fe.width,fe.height,fe.depth),Me)if(S.layerUpdates.size>0){let pe=sd(fe.width,fe.height,S.format,S.type);for(let ae of S.layerUpdates){let Ie=fe.data.subarray(ae*pe/fe.data.BYTES_PER_ELEMENT,(ae+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Te,Xe,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Xe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,Te,Xe,fe.data);else if(S.isData3DTexture)F?(xe&&t.texStorage3D(i.TEXTURE_3D,De,Re,fe.width,fe.height,fe.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Xe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,Te,Xe,fe.data);else if(S.isFramebufferTexture){if(xe)if(F)t.texStorage2D(i.TEXTURE_2D,De,Re,fe.width,fe.height);else{let pe=fe.width,ae=fe.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Re,pe,ae,0,Te,Xe,null),pe>>=1,ae>>=1}}else if(nt.length>0){if(F&&xe){let pe=We(nt[0]);t.texStorage2D(i.TEXTURE_2D,De,Re,pe.width,pe.height)}for(let pe=0,ae=nt.length;pe<ae;pe++)we=nt[pe],F?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Te,Xe,we):t.texImage2D(i.TEXTURE_2D,pe,Re,Te,Xe,we);S.generateMipmaps=!1}else if(F){if(xe){let pe=We(fe);t.texStorage2D(i.TEXTURE_2D,De,Re,pe.width,pe.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Xe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Re,Te,Xe,fe);p(S)&&m($),Le.__version=ie.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function U(I,S,B){if(S.image.length!==6)return;let $=Je(I,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+B);let ie=n.get(oe);if(oe.version!==ie.__version||$===!0){t.activeTexture(i.TEXTURE0+B);let Le=bt.getPrimaries(bt.workingColorSpace),ge=S.colorSpace===bi?null:bt.getPrimaries(S.colorSpace),Ue=S.colorSpace===bi||Le===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let ae=0;ae<6;ae++)!Ne&&!fe?Te[ae]=x(S.image[ae],!0,s.maxCubemapSize):Te[ae]=fe?S.image[ae].image:S.image[ae],Te[ae]=ze(S,Te[ae]);let Xe=Te[0],Re=r.convert(S.format,S.colorSpace),we=r.convert(S.type),nt=b(S.internalFormat,Re,we,S.colorSpace),F=S.isVideoTexture!==!0,xe=ie.__version===void 0||$===!0,Me=oe.dataReady,De=T(S,Xe);Be(i.TEXTURE_CUBE_MAP,S);let pe;if(Ne){F&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,Xe.width,Xe.height);for(let ae=0;ae<6;ae++){pe=Te[ae].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){let Ke=pe[Ie];S.format!==Rn?Re!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,Ke.width,Ke.height,Re,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,nt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,Ke.width,Ke.height,Re,we,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,nt,Ke.width,Ke.height,0,Re,we,Ke.data)}}}else{if(pe=S.mipmaps,F&&xe){pe.length>0&&De++;let ae=We(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Te[ae].width,Te[ae].height,Re,we,Te[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Te[ae].width,Te[ae].height,0,Re,we,Te[ae].data);for(let Ie=0;Ie<pe.length;Ie++){let wt=pe[Ie].image[ae].image;F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,wt.width,wt.height,Re,we,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,nt,wt.width,wt.height,0,Re,we,wt.data)}}else{F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re,we,Te[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Re,we,Te[ae]);for(let Ie=0;Ie<pe.length;Ie++){let Ke=pe[Ie];F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,Re,we,Ke.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,nt,Re,we,Ke.image[ae])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ne(I,S,B,$,oe,ie){let Le=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),Ue=b(B.internalFormat,Le,ge,B.colorSpace),Ne=n.get(S),fe=n.get(B);if(fe.__renderTarget=S,!Ne.__hasExternalTextures){let Te=Math.max(1,S.width>>ie),Xe=Math.max(1,S.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,Ue,Te,Xe,S.depth,0,Le,ge,null):t.texImage2D(oe,ie,Ue,Te,Xe,0,Le,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,oe,fe.__webglTexture,0,me(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,oe,fe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(I,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let $=S.depthTexture,oe=$&&$.isDepthTexture?$.type:null,ie=y(S.stencilBuffer,oe),Le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=me(S);de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,I)}else{let $=S.textures;for(let oe=0;oe<$.length;oe++){let ie=$[oe],Le=r.convert(ie.format,ie.colorSpace),ge=r.convert(ie.type),Ue=b(ie.internalFormat,Le,ge,ie.colorSpace),Ne=me(S);B&&de(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ue,S.width,S.height):de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let oe=$.__webglTexture,ie=me(S);if(S.depthTexture.format===jr)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(S.depthTexture.format===xo)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function z(I){let S=n.get(I),B=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let $=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",oe)};$.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=$}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let $=I.texture.mipmaps;$&&$.length>0?N(S.__webglFramebuffer[0],I):N(S.__webglFramebuffer,I)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ue(S.__webglDepthbuffer[$],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ie)}}else{let $=I.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ue(S.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,S,B){let $=n.get(I);S!==void 0&&ne($.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&z(I)}function R(I){let S=I.texture,B=n.get(I),$=n.get(S);I.addEventListener("dispose",P);let oe=I.textures,ie=I.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Ue=0;Ue<S.mipmaps.length;Ue++)B.__webglFramebuffer[ge][Ue]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ge=0,Ue=oe.length;ge<Ue;ge++){let Ne=n.get(oe[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&de(I)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){let Ue=oe[ge];B.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);let Ne=r.convert(Ue.format,Ue.colorSpace),fe=r.convert(Ue.type),Te=b(Ue.internalFormat,Ne,fe,Ue.colorSpace,I.isXRRenderTarget===!0),Xe=me(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Te,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Be(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)ne(B.__webglFramebuffer[ge][Ue],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue);else ne(B.__webglFramebuffer[ge],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ge=0,Ue=oe.length;ge<Ue;ge++){let Ne=oe[ge],fe=n.get(Ne),Te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,fe.__webglTexture),Be(Te,Ne),ne(B.__webglFramebuffer,I,Ne,i.COLOR_ATTACHMENT0+ge,Te,0),p(Ne)&&m(Te)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,$.__webglTexture),Be(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)ne(B.__webglFramebuffer[Ue],I,S,i.COLOR_ATTACHMENT0,ge,Ue);else ne(B.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ge,0);p(S)&&m(ge),t.unbindTexture()}I.depthBuffer&&z(I)}function te(I){let S=I.textures;for(let B=0,$=S.length;B<$;B++){let oe=S[B];if(p(oe)){let ie=v(I),Le=n.get(oe).__webglTexture;t.bindTexture(ie,Le),m(ie),t.unbindTexture()}}}let K=[],j=[];function ee(I){if(I.samples>0){if(de(I)===!1){let S=I.textures,B=I.width,$=I.height,oe=i.COLOR_BUFFER_BIT,ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(I),ge=S.length>1;if(ge)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ue=I.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let fe=n.get(S[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,oe,i.NEAREST),l===!0&&(K.length=0,j.length=0,K.push(i.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(K.push(ie),j.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let fe=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(I){return Math.min(s.maxSamples,I.samples)}function de(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(I){let S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function ze(I,S){let B=I.colorSpace,$=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==tr&&B!==bi&&(bt.getTransfer(B)===At?($!==Rn||oe!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=ce,this.setupRenderTarget=R,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=de}function OM(i,e){function t(n,s=bi){let r,o=bt.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===mo)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===Rn)return i.RGBA;if(n===jr)return i.DEPTH_COMPONENT;if(n===xo)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Zh)return i.RG;if(n===Sc)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===Ea||n===Aa||n===Ca||n===Ra)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ec||n===Ac||n===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Ic||n===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Ic)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Jc||n===Kc||n===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zM=`
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

}`,xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:BM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new xd,m={},v=t.getContextAttributes(),b=null,y=null,T=[],A=[],P=new le,D=null,w=new Qt;w.viewport=new Rt;let M=new Qt;M.viewport=new Rt;let L=[w,M],O=new ac,X=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let U=T[q];return U===void 0&&(U=new no,T[q]=U),U.getTargetRaySpace()},this.getControllerGrip=function(q){let U=T[q];return U===void 0&&(U=new no,T[q]=U),U.getGripSpace()},this.getHand=function(q){let U=T[q];return U===void 0&&(U=new no,T[q]=U),U.getHandSpace()};function G(q){let U=A.indexOf(q.inputSource);if(U===-1)return;let ne=T[U];ne!==void 0&&(ne.update(q.inputSource,q.frame,c||o),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let q=0;q<T.length;q++){let U=A[q];U!==null&&(A[q]=null,T[q].disconnect(U))}X=null,V=null,p.reset();for(let q in m)delete m[q];e.setRenderTarget(b),f=null,d=null,h=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ue=null,N=null;v.depth&&(N=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?xo:jr,ue=v.stencil?go:Ts);let z={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ri(d.textureWidth,d.textureHeight,{format:Rn,type:_i,depthTexture:new aa(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ri(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(q){for(let U=0;U<q.removed.length;U++){let ne=q.removed[U],ue=A.indexOf(ne);ue>=0&&(A[ue]=null,T[ue].disconnect(ne))}for(let U=0;U<q.added.length;U++){let ne=q.added[U],ue=A.indexOf(ne);if(ue===-1){for(let z=0;z<T.length;z++)if(z>=A.length){A.push(ne),ue=z;break}else if(A[z]===null){A[z]=ne,ue=z;break}if(ue===-1)break}let N=T[ue];N&&N.connect(ne)}}let Y=new _,re=new _;function ye(q,U,ne){Y.setFromMatrixPosition(U.matrixWorld),re.setFromMatrixPosition(ne.matrixWorld);let ue=Y.distanceTo(re),N=U.projectionMatrix.elements,z=ne.projectionMatrix.elements,ce=N[14]/(N[10]-1),R=N[14]/(N[10]+1),te=(N[9]+1)/N[5],K=(N[9]-1)/N[5],j=(N[8]-1)/N[0],ee=(z[8]+1)/z[0],me=ce*j,de=ce*ee,be=ue/(-j+ee),ze=be*-j;if(U.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),N[10]===-1)q.projectionMatrix.copy(U.projectionMatrix),q.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let We=ce+be,I=R+be,S=me-ze,B=de+(ue-ze),$=te*R/I*We,oe=K*R/I*We;q.projectionMatrix.makePerspective(S,B,$,oe,We,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,U){U===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(U.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let U=q.near,ne=q.far;p.texture!==null&&(p.depthNear>0&&(U=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),O.near=M.near=w.near=U,O.far=M.far=w.far=ne,(X!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,V=O.far),O.layers.mask=q.layers.mask|6,w.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let ue=q.parent,N=O.cameras;Se(O,ue);for(let z=0;z<N.length;z++)Se(N[z],ue);N.length===2?ye(O,w,M):O.projectionMatrix.copy(w.projectionMatrix),Be(q,O,ue)};function Be(q,U,ne){ne===null?q.matrix.copy(U.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(U.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(U.projectionMatrix),q.projectionMatrixInverse.copy(U.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(q){return m[q]};let Je=null;function it(q,U){if(u=U.getViewerPose(c||o),g=U,u!==null){let ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;ne.length!==O.cameras.length&&(O.cameras.length=0,ue=!0);for(let R=0;R<ne.length;R++){let te=ne[R],K=null;if(f!==null)K=f.getViewport(te);else{let ee=h.getViewSubImage(d,te);K=ee.viewport,R===0&&(e.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(y))}let j=L[R];j===void 0&&(j=new Qt,j.layers.enable(R),j.viewport=new Rt,L[R]=j),j.matrix.fromArray(te.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(te.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),R===0&&(O.matrix.copy(j.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ue===!0&&O.cameras.push(j)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let R=h.getDepthInformation(ne[0]);R&&R.isValid&&R.texture&&p.init(R,s.renderState)}if(N&&N.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<ne.length;R++){let te=ne[R].camera;if(te){let K=m[te];K||(K=new la,m[te]=K);let j=h.getCameraImage(te);K.sourceTexture=j}}}}for(let ne=0;ne<T.length;ne++){let ue=A[ne],N=T[ne];ue!==null&&N!==void 0&&N.update(ue,U,c||o)}Je&&Je(q,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let Ye=new Vm;Ye.setAnimationLoop(it),this.setAnimationLoop=function(q){Je=q},this.dispose=function(){}}},gr=new en,kM=new ct;function VM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ed(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,gr.copy(y),gr.x*=-1,gr.y*=-1,gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),p.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(gr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function GM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));let T=b.program;n.updateUBOMapping(v,T);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){let b=h();v.__bindingPointIndex=b;let y=i.createBuffer(),T=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=y.length;A<P;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,M=D.length;w<M;w++){let L=D[w];if(f(L,A,w,T)===!0){let O=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],V=0;for(let G=0;G<X.length;G++){let W=X[G],se=x(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+V,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,V),V+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,y,T){let A=v.value,P=b+"_"+y;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{let D=T[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(v){let b=v.uniforms,y=0,T=16;for(let P=0,D=b.length;P<D;P++){let w=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,L=w.length;M<L;M++){let O=w[M],X=Array.isArray(O.value)?O.value:[O.value];for(let V=0,G=X.length;V<G;V++){let W=X[V],se=x(W),Y=y%T,re=Y%se.boundary,ye=Y+re;y+=re,ye!==0&&T-ye<se.storage&&(y+=T-ye),O.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=se.storage}}}let A=y%T;return A>0&&(y+=T-A),v.__size=y,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){let b=v.target;b.removeEventListener("dispose",p);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var bo=class{constructor(e={}){let{canvas:t=cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Ot;let A=0,P=0,D=null,w=-1,M=null,L=new Rt,O=new Rt,X=null,V=new Ge(0),G=0,W=t.width,se=t.height,Y=1,re=null,ye=null,Se=new Rt(0,0,W,se),Be=new Rt(0,0,W,se),Je=!1,it=new so,Ye=!1,q=!1,U=new ct,ne=new _,ue=new Rt,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function ce(){return D===null?Y:1}let R=n;function te(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){let k="webgl2";if(R=te(k,E),R===null)throw te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,j,ee,me,de,be,ze,We,I,S,B,$,oe,ie,Le,ge,Ue,Ne,fe,Te,Xe,Re,we,nt;function F(){K=new ob(R),K.init(),Re=new OM(R,K),j=new Qv(R,K,e,Re),ee=new NM(R,K),j.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),me=new cb(R),de=new MM,be=new FM(R,K,ee,de,j,Re,me),ze=new tb(y),We=new rb(y),I=new my(R),we=new Kv(R,I),S=new ab(R,I,me,we),B=new hb(R,S,I,me),fe=new ub(R,j,be),ge=new eb(de),$=new bM(y,ze,We,K,j,we,ge),oe=new VM(y,de),ie=new wM,Le=new IM(K),Ne=new Jv(y,ze,We,ee,B,f,l),Ue=new DM(y,B,j),nt=new GM(R,me,j,ee),Te=new $v(R,K,me),Xe=new lb(R,K,me),me.programs=$.programs,y.capabilities=j,y.extensions=K,y.properties=de,y.renderLists=ie,y.shadowMap=Ue,y.state=ee,y.info=me}F();let xe=new yd(y,R);this.xr=xe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(W,se,!1))},this.getSize=function(E){return E.set(W,se)},this.setSize=function(E,k,J=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,se=k,t.width=Math.floor(E*Y),t.height=Math.floor(k*Y),J===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(W*Y,se*Y).floor()},this.setDrawingBufferSize=function(E,k,J){W=E,se=k,Y=J,t.width=Math.floor(E*J),t.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,k,J,Q){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,k,J,Q),ee.viewport(L.copy(Se).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,k,J,Q){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,k,J,Q),ee.scissor(O.copy(Be).multiplyScalar(Y).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){ee.setScissorTest(Je=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let Q=0;if(E){let H=!1;if(D!==null){let _e=D.texture.format;H=_e===wc||_e===Sc||_e===Mc}if(H){let _e=D.texture.type,Ae=_e===_i||_e===Ts||_e===po||_e===go||_e===vc||_e===bc,Oe=Ne.getClearColor(),Fe=Ne.getClearAlpha(),je=Oe.r,Qe=Oe.g,He=Oe.b;Ae?(g[0]=je,g[1]=Qe,g[2]=He,g[3]=Fe,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=je,x[1]=Qe,x[2]=He,x[3]=Fe,R.clearBufferiv(R.COLOR,0,x))}else Q|=R.COLOR_BUFFER_BIT}k&&(Q|=R.DEPTH_BUFFER_BIT),J&&(Q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ne.dispose(),ie.dispose(),Le.dispose(),de.dispose(),ze.dispose(),We.dispose(),B.dispose(),we.dispose(),nt.dispose(),$.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Un),xe.removeEventListener("sessionend",ko),Nn.stop()};function Me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=me.autoReset,k=Ue.enabled,J=Ue.autoUpdate,Q=Ue.needsUpdate,H=Ue.type;F(),me.autoReset=E,Ue.enabled=k,Ue.autoUpdate=J,Ue.needsUpdate=Q,Ue.type=H}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){let k=E.target;k.removeEventListener("dispose",ae),Ie(k)}function Ie(E){Ke(E),de.remove(E)}function Ke(E){let k=de.get(E).programs;k!==void 0&&(k.forEach(function(J){$.releaseProgram(J)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,Q,H,_e){k===null&&(k=N);let Ae=H.isMesh&&H.matrixWorld.determinant()<0,Oe=mt(E,k,J,Q,H);ee.setMaterial(Q,Ae);let Fe=J.index,je=1;if(Q.wireframe===!0){if(Fe=S.getWireframeAttribute(J),Fe===void 0)return;je=2}let Qe=J.drawRange,He=J.attributes.position,xt=Qe.start*je,Ct=(Qe.start+Qe.count)*je;_e!==null&&(xt=Math.max(xt,_e.start*je),Ct=Math.min(Ct,(_e.start+_e.count)*je)),Fe!==null?(xt=Math.max(xt,0),Ct=Math.min(Ct,Fe.count)):He!=null&&(xt=Math.max(xt,0),Ct=Math.min(Ct,He.count));let Zt=Ct-xt;if(Zt<0||Zt===1/0)return;we.setup(H,Q,Oe,J,Fe);let Ft,Pt=Te;if(Fe!==null&&(Ft=I.get(Fe),Pt=Xe,Pt.setIndex(Ft)),H.isMesh)Q.wireframe===!0?(ee.setLineWidth(Q.wireframeLinewidth*ce()),Pt.setMode(R.LINES)):Pt.setMode(R.TRIANGLES);else if(H.isLine){let qe=Q.linewidth;qe===void 0&&(qe=1),ee.setLineWidth(qe*ce()),H.isLineSegments?Pt.setMode(R.LINES):H.isLineLoop?Pt.setMode(R.LINE_LOOP):Pt.setMode(R.LINE_STRIP)}else H.isPoints?Pt.setMode(R.POINTS):H.isSprite&&Pt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let qe=H._multiDrawStarts,Ht=H._multiDrawCounts,Mt=H._multiDrawCount,qn=Fe?I.get(Fe).bytesPerElement:1,Ir=de.get(Q).currentProgram.getUniforms();for(let Yn=0;Yn<Mt;Yn++)Ir.setValue(R,"_gl_DrawID",Yn),Pt.render(qe[Yn]/qn,Ht[Yn])}else if(H.isInstancedMesh)Pt.renderInstances(xt,Zt,H.count);else if(J.isInstancedBufferGeometry){let qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ht=Math.min(J.instanceCount,qe);Pt.renderInstances(xt,Zt,Ht)}else Pt.render(xt,Zt)};function wt(E,k,J){E.transparent===!0&&E.side===qt&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,he(E,k,J),E.side=Zi,E.needsUpdate=!0,he(E,k,J),E.side=qt):he(E,k,J)}this.compile=function(E,k,J=null){J===null&&(J=E),m=Le.get(J),m.init(k),b.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==J&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let Q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let Oe=_e[Ae];wt(Oe,J,H),Q.add(Oe)}else wt(_e,J,H),Q.add(_e)}),m=b.pop(),Q},this.compileAsync=function(E,k,J=null){let Q=this.compile(E,k,J);return new Promise(H=>{function _e(){if(Q.forEach(function(Ae){de.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){H(E);return}setTimeout(_e,10)}K.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let _t=null;function Wn(E){_t&&_t(E)}function Un(){Nn.stop()}function ko(){Nn.start()}let Nn=new Vm;Nn.setAnimationLoop(Wn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(E){_t=E,xe.setAnimationLoop(E),E===null?Nn.stop():Nn.start()},xe.addEventListener("sessionstart",Un),xe.addEventListener("sessionend",ko),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,D),m=Le.get(E,b.length),m.init(k),b.push(m),U.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(U,xi,k.reversedDepth),q=this.localClippingEnabled,Ye=ge.init(this.clippingPlanes,q),p=ie.get(E,v.length),p.init(),v.push(p),xe.enabled===!0&&xe.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&Xn(_e,k,-1/0,y.sortObjects)}Xn(E,k,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(re,ye),z=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,z&&Ne.addToRenderList(p,E),this.info.render.frame++,Ye===!0&&ge.beginShadows();let J=m.state.shadowsArray;Ue.render(J,E,k),Ye===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=p.opaque,H=p.transmissive;if(m.setupLights(),k.isArrayCamera){let _e=k.cameras;if(H.length>0)for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){let Fe=_e[Ae];ll(Q,H,E,Fe)}z&&Ne.render(E);for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){let Fe=_e[Ae];al(p,E,Fe,Fe.viewport)}}else H.length>0&&ll(Q,H,E,k),z&&Ne.render(E),al(p,E,k);D!==null&&P===0&&(be.updateMultisampleRenderTarget(D),be.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,k),we.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],Ye===!0&&ge.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Xn(E,k,J,Q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){Q&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);let Ae=B.update(E),Oe=E.material;Oe.visible&&p.push(E,Ae,Oe,J,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){let Ae=B.update(E),Oe=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ue.copy(Ae.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Oe)){let Fe=Ae.groups;for(let je=0,Qe=Fe.length;je<Qe;je++){let He=Fe[je],xt=Oe[He.materialIndex];xt&&xt.visible&&p.push(E,Ae,xt,J,ue.z,He)}}else Oe.visible&&p.push(E,Ae,Oe,J,ue.z,null)}}let _e=E.children;for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++)Xn(_e[Ae],k,J,Q)}function al(E,k,J,Q){let H=E.opaque,_e=E.transmissive,Ae=E.transparent;m.setupLightsView(J),Ye===!0&&ge.setGlobalState(y.clippingPlanes,J),Q&&ee.viewport(L.copy(Q)),H.length>0&&Ws(H,k,J),_e.length>0&&Ws(_e,k,J),Ae.length>0&&Ws(Ae,k,J),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function ll(E,k,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Ri(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?mo:_i,minFilter:vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let _e=m.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||L;_e.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),Fe=y.getActiveCubeFace(),je=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(V),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),z&&Ne.render(J);let Qe=y.toneMapping;y.toneMapping=is;let He=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),Ye===!0&&ge.setGlobalState(y.clippingPlanes,Q),Ws(E,J,Q),be.updateMultisampleRenderTarget(_e),be.updateRenderTargetMipmap(_e),K.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Ct=0,Zt=k.length;Ct<Zt;Ct++){let Ft=k[Ct],Pt=Ft.object,qe=Ft.geometry,Ht=Ft.material,Mt=Ft.group;if(Ht.side===qt&&Pt.layers.test(Q.layers)){let qn=Ht.side;Ht.side=Cn,Ht.needsUpdate=!0,Z(Pt,J,Q,qe,Ht,Mt),Ht.side=qn,Ht.needsUpdate=!0,xt=!0}}xt===!0&&(be.updateMultisampleRenderTarget(_e),be.updateRenderTargetMipmap(_e))}y.setRenderTarget(Oe,Fe,je),y.setClearColor(V,G),He!==void 0&&(Q.viewport=He),y.toneMapping=Qe}function Ws(E,k,J){let Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){let Ae=E[H],Oe=Ae.object,Fe=Ae.geometry,je=Ae.group,Qe=Ae.material;Qe.allowOverride===!0&&Q!==null&&(Qe=Q),Oe.layers.test(J.layers)&&Z(Oe,k,J,Fe,Qe,je)}}function Z(E,k,J,Q,H,_e){E.onBeforeRender(y,k,J,Q,H,_e),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,k,J,Q,E,_e),H.transparent===!0&&H.side===qt&&H.forceSinglePass===!1?(H.side=Cn,H.needsUpdate=!0,y.renderBufferDirect(J,k,Q,H,E,_e),H.side=Zi,H.needsUpdate=!0,y.renderBufferDirect(J,k,Q,H,E,_e),H.side=qt):y.renderBufferDirect(J,k,Q,H,E,_e),E.onAfterRender(y,k,J,Q,H,_e)}function he(E,k,J){k.isScene!==!0&&(k=N);let Q=de.get(E),H=m.state.lights,_e=m.state.shadowsArray,Ae=H.state.version,Oe=$.getParameters(E,H.state,_e,k,J),Fe=$.getProgramCacheKey(Oe),je=Q.programs;Q.environment=E.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(E.isMeshStandardMaterial?We:ze).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",ae),je=new Map,Q.programs=je);let Qe=je.get(Fe);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Ae)return Ze(E,Oe),Qe}else Oe.uniforms=$.getUniforms(E),E.onBeforeCompile(Oe,y),Qe=$.acquireProgram(Oe,Fe),je.set(Fe,Qe),Q.uniforms=Oe.uniforms;let He=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ge.uniform),Ze(E,Oe),Q.needsLights=ht(E),Q.lightsStateVersion=Ae,Q.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function Pe(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=vo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ze(E,k){let J=de.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function mt(E,k,J,Q,H){k.isScene!==!0&&(k=N),be.resetTextureUnits();let _e=k.fog,Ae=Q.isMeshStandardMaterial?k.environment:null,Oe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:tr,Fe=(Q.isMeshStandardMaterial?We:ze).get(Q.envMap||Ae),je=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color,Zt=is;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=Ft!==void 0?Ft.length:0,qe=de.get(Q),Ht=m.state.lights;if(Ye===!0&&(q===!0||E!==M)){let Tn=E===M&&Q.id===w;ge.setState(Q,E,Tn)}let Mt=!1;Q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Oe||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Fe||Q.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ge.numPlanes||qe.numIntersection!==ge.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Qe||qe.morphTargets!==He||qe.morphNormals!==xt||qe.morphColors!==Ct||qe.toneMapping!==Zt||qe.morphTargetsCount!==Pt)&&(Mt=!0):(Mt=!0,qe.__version=Q.version);let qn=qe.currentProgram;Mt===!0&&(qn=he(Q,k,H));let Ir=!1,Yn=!1,Vo=!1,Wt=qn.getUniforms(),ii=qe.uniforms;if(ee.useProgram(qn.program)&&(Ir=!0,Yn=!0,Vo=!0),Q.id!==w&&(w=Q.id,Yn=!0),Ir||M!==E){ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Wt.setValue(R,"projectionMatrix",E.projectionMatrix),Wt.setValue(R,"viewMatrix",E.matrixWorldInverse);let Fn=Wt.map.cameraPosition;Fn!==void 0&&Fn.setValue(R,ne.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&Wt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Wt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Yn=!0,Vo=!0)}if(H.isSkinnedMesh){Wt.setOptional(R,H,"bindMatrix"),Wt.setOptional(R,H,"bindMatrixInverse");let Tn=H.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Wt.setValue(R,"boneTexture",Tn.boneTexture,be))}H.isBatchedMesh&&(Wt.setOptional(R,H,"batchingTexture"),Wt.setValue(R,"batchingTexture",H._matricesTexture,be),Wt.setOptional(R,H,"batchingIdTexture"),Wt.setValue(R,"batchingIdTexture",H._indirectTexture,be),Wt.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&Wt.setValue(R,"batchingColorTexture",H._colorsTexture,be));let si=J.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&fe.update(H,J,qn),(Yn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Wt.setValue(R,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ii.envMap.value=Fe,ii.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(ii.envMapIntensity.value=k.environmentIntensity),Yn&&(Wt.setValue(R,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&st(ii,Vo),_e&&Q.fog===!0&&oe.refreshFogUniforms(ii,_e),oe.refreshMaterialUniforms(ii,Q,Y,se,m.state.transmissionRenderTarget[E.id]),vo.upload(R,Pe(qe),ii,be)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vo.upload(R,Pe(qe),ii,be),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Wt.setValue(R,"center",H.center),Wt.setValue(R,"modelViewMatrix",H.modelViewMatrix),Wt.setValue(R,"normalMatrix",H.normalMatrix),Wt.setValue(R,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Tn=Q.uniformsGroups;for(let Fn=0,Wu=Tn.length;Fn<Wu;Fn++){let qs=Tn[Fn];nt.update(qs,qn),nt.bind(qs,qn)}}return qn}function st(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ht(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,J){let Q=de.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),de.get(E.texture).__webglTexture=k,de.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let J=de.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};let hn=R.createFramebuffer();this.setRenderTarget=function(E,k=0,J=0){D=E,A=k,P=J;let Q=!0,H=null,_e=!1,Ae=!1;if(E){let Fe=de.get(E);if(Fe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(R.FRAMEBUFFER,null),Q=!1;else if(Fe.__webglFramebuffer===void 0)be.setupRenderTarget(E);else if(Fe.__hasExternalTextures)be.rebindTextures(E,de.get(E.texture).__webglTexture,de.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(Fe.__boundDepthTexture!==He){if(He!==null&&de.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(E)}}let je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);let Qe=de.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[k])?H=Qe[k][J]:H=Qe[k],_e=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?H=de.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?H=Qe[J]:H=Qe,L.copy(E.viewport),O.copy(E.scissor),X=E.scissorTest}else L.copy(Se).multiplyScalar(Y).floor(),O.copy(Be).multiplyScalar(Y).floor(),X=Je;if(J!==0&&(H=hn),ee.bindFramebuffer(R.FRAMEBUFFER,H)&&Q&&ee.drawBuffers(E,H),ee.viewport(L),ee.scissor(O),ee.setScissorTest(X),_e){let Fe=de.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,J)}else if(Ae){let Fe=k;for(let je=0;je<E.textures.length;je++){let Qe=de.get(E.textures[je]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+je,Qe.__webglTexture,J,Fe)}}else if(E!==null&&J!==0){let Fe=de.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fe.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(E,k,J,Q,H,_e,Ae,Oe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){ee.bindFramebuffer(R.FRAMEBUFFER,Fe);try{let je=E.textures[Oe],Qe=je.format,He=je.type;if(!j.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Q&&J>=0&&J<=E.height-H&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Oe),R.readPixels(k,J,Q,H,Re.convert(Qe),Re.convert(He),_e))}finally{let je=D!==null?de.get(D).__webglFramebuffer:null;ee.bindFramebuffer(R.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,Q,H,_e,Ae,Oe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe)if(k>=0&&k<=E.width-Q&&J>=0&&J<=E.height-H){ee.bindFramebuffer(R.FRAMEBUFFER,Fe);let je=E.textures[Oe],Qe=je.format,He=je.type;if(!j.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Oe),R.readPixels(k,J,Q,H,Re.convert(Qe),Re.convert(He),0);let Ct=D!==null?de.get(D).__webglFramebuffer:null;ee.bindFramebuffer(R.FRAMEBUFFER,Ct);let Zt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await um(R,Zt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.deleteBuffer(xt),R.deleteSync(Zt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){let Q=Math.pow(2,-J),H=Math.floor(E.image.width*Q),_e=Math.floor(E.image.height*Q),Ae=k!==null?k.x:0,Oe=k!==null?k.y:0;be.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,Ae,Oe,H,_e),ee.unbindTexture()};let ds=R.createFramebuffer(),Xs=R.createFramebuffer();this.copyTextureToTexture=function(E,k,J=null,Q=null,H=0,_e=null){_e===null&&(H!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Ae,Oe,Fe,je,Qe,He,xt,Ct,Zt,Ft=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(J!==null)Ae=J.max.x-J.min.x,Oe=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,je=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{let si=Math.pow(2,-H);Ae=Math.floor(Ft.width*si),Oe=Math.floor(Ft.height*si),E.isDataArrayTexture?Fe=Ft.depth:E.isData3DTexture?Fe=Math.floor(Ft.depth*si):Fe=1,je=0,Qe=0,He=0}Q!==null?(xt=Q.x,Ct=Q.y,Zt=Q.z):(xt=0,Ct=0,Zt=0);let Pt=Re.convert(k.format),qe=Re.convert(k.type),Ht;k.isData3DTexture?(be.setTexture3D(k,0),Ht=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(be.setTexture2DArray(k,0),Ht=R.TEXTURE_2D_ARRAY):(be.setTexture2D(k,0),Ht=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);let Mt=R.getParameter(R.UNPACK_ROW_LENGTH),qn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ir=R.getParameter(R.UNPACK_SKIP_PIXELS),Yn=R.getParameter(R.UNPACK_SKIP_ROWS),Vo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,je),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,He);let Wt=E.isDataArrayTexture||E.isData3DTexture,ii=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let si=de.get(E),Tn=de.get(k),Fn=de.get(si.__renderTarget),Wu=de.get(Tn.__renderTarget);ee.bindFramebuffer(R.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wu.__webglFramebuffer);for(let qs=0;qs<Fe;qs++)Wt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(E).__webglTexture,H,He+qs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(k).__webglTexture,_e,Zt+qs)),R.blitFramebuffer(je,Qe,Ae,Oe,xt,Ct,Ae,Oe,R.DEPTH_BUFFER_BIT,R.NEAREST);ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||de.has(E)){let si=de.get(E),Tn=de.get(k);ee.bindFramebuffer(R.READ_FRAMEBUFFER,ds),ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,Xs);for(let Fn=0;Fn<Fe;Fn++)Wt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,si.__webglTexture,H,He+Fn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,si.__webglTexture,H),ii?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tn.__webglTexture,_e,Zt+Fn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Tn.__webglTexture,_e),H!==0?R.blitFramebuffer(je,Qe,Ae,Oe,xt,Ct,Ae,Oe,R.COLOR_BUFFER_BIT,R.NEAREST):ii?R.copyTexSubImage3D(Ht,_e,xt,Ct,Zt+Fn,je,Qe,Ae,Oe):R.copyTexSubImage2D(Ht,_e,xt,Ct,je,Qe,Ae,Oe);ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ii?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ht,_e,xt,Ct,Zt,Ae,Oe,Fe,Pt,qe,Ft.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(Ht,_e,xt,Ct,Zt,Ae,Oe,Fe,Pt,Ft.data):R.texSubImage3D(Ht,_e,xt,Ct,Zt,Ae,Oe,Fe,Pt,qe,Ft):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,xt,Ct,Ae,Oe,Pt,qe,Ft.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,xt,Ct,Ft.width,Ft.height,Pt,Ft.data):R.texSubImage2D(R.TEXTURE_2D,_e,xt,Ct,Ae,Oe,Pt,qe,Ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ir),R.pixelStorei(R.UNPACK_SKIP_ROWS,Yn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vo),_e===0&&k.generateMipmaps&&R.generateMipmap(Ht),ee.unbindTexture()},this.initRenderTarget=function(E){de.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,ee.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var qm={type:"change"},Md={type:"start"},Zm={type:"end"},su=new ji,Ym=new yn,HM=Math.cos(70*ke.DEG2RAD),ln=new _,kn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bd=1e-6,As=class extends ur{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new dt,this._lastTargetPosition=new _,this._quat=new dt().setFromUnitVectors(e.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ho,this._sphericalDelta=new ho,this._scale=1,this._panOffset=new _,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new _,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XM.bind(this),this._onPointerDown=WM.bind(this),this._onPointerUp=qM.bind(this),this._onContextMenu=QM.bind(this),this._onMouseWheel=jM.bind(this),this._onKeyDown=JM.bind(this),this._onTouchStart=KM.bind(this),this._onTouchMove=$M.bind(this),this._onMouseDown=YM.bind(this),this._onMouseMove=ZM.bind(this),this._interceptControlDown=eS.bind(this),this._interceptControlUp=tS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qm),this.update(),this.state=It.NONE}update(e=null){let t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=kn:n>Math.PI&&(n-=kn),s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new _(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new _(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<HM?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bd||this._lastTargetPosition.distanceToSquared(this.target)>bd?(this.dispatchEvent(qm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function WM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function XM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zm),this.state=It.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=It.DOLLY;break;case zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}break;case zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Md)}function ZM(i){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jM(i){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(i.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zm))}function JM(i){this.enabled!==!1&&this._handleKeyDown(i)}function KM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=It.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=It.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Md)}function $M(i){switch(this._trackPointer(i),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=It.NONE}}function QM(i){this.enabled!==!1&&i.preventDefault()}function eS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Sd=["Repos","Patrouille","Poursuite","Contact"],wd="gorilla-lab-entity-models-v1";var nS={sphere:2562,cube:1946},ci=[["Torse",-1,[0,.65,0]],["Tete",0,[0,1.18,0]]];for(let[i,e]of[["G",-1],["D",1]]){let t=ci.length;ci.push(["Epaule "+i,0,[e*.23,.96,0]],["Coude "+i,t,[e*.36,.65,0]],["Poignet "+i,t+1,[e*.43,.38,0]],["Doigt 1 "+i,t+2,[e*.39,.28,-.04]],["Doigt 2 "+i,t+2,[e*.43,.27,0]],["Doigt 3 "+i,t+2,[e*.47,.28,.04]],["Hanche "+i,0,[e*.15,.46,0]],["Genou "+i,t+6,[e*.17,.23,0]],["Pied "+i,t+7,[e*.18,.07,-.03]])}var ru=(i,e,t,n=0)=>Number.isFinite(i)?Math.max(e,Math.min(t,i)):n,Pa=()=>ci.map(()=>[0,0,0]);function ou(i){let e=nS[i?.base],t=i?.vertices?.length/3;if(!Number.isInteger(e)||!Array.isArray(i.vertices)||!Number.isInteger(t)||t<e||t>12e3||!i.vertices.every(Number.isFinite))return null;let n=i.indices;if(n!==void 0){if(!Array.isArray(n)||n.length!==(t-2)*6||!n.every(s=>Number.isInteger(s)&&s>=0&&s<t))return null}else if(t!==e)return null;return{base:i.base,...n?{indices:n}:{},vertices:i.vertices.map(s=>Math.round(ru(s,-3e3,3e3))),color:typeof i.color=="string"&&/^#[0-9a-f]{6}$/i.test(i.color)?i.color.toLowerCase():"#62566b",pivots:ci.map(([,,s],r)=>s.map((o,a)=>ru(i.pivots?.[r]?.[a],-3,3,o))),clips:Sd.map((s,r)=>(Array.isArray(i.clips?.[r])?i.clips[r]:[]).slice(0,12).map(o=>({duration:ru(o?.duration,.08,2,.35),pose:ci.map((a,l)=>[0,1,2].map(c=>ru(o?.pose?.[l]?.[c],-180,180)))}))),contact:i.contact==="animate"?"animate":"kill"}}function jm(i){try{let e=JSON.parse(i.getItem(wd)??"[]");return Array.isArray(e)?e.slice(0,20).flatMap(t=>{let n=ou(t?.sculpt);return n&&typeof t.id=="string"&&typeof t.name=="string"?[{id:t.id.slice(0,64),name:t.name.slice(0,36),sculpt:n}]:[]}):[]}catch{return[]}}function lu(i){let e=i.index.array,t=Array.from({length:i.attributes.position.count},()=>new Set);for(let n=0;n<e.length;n+=3)for(let s=0;s<3;s++){let r=e[n+s],o=e[n+(s+1)%3];t[r].add(o),t[o].add(r)}return t.map(n=>Array.from(n))}function Jm(i,e,t,n){let s=i.attributes.position,r=i.index.array,o=new Map,a=new An,l=new _,c=Array.from(s.array),u=[],h=(f,g)=>Math.min(f,g)*12e3+Math.max(f,g);function d(f,g,x,p){if(x.distanceToSquared(p)<n*n||c.length>=12e3*3)return;let m=h(f,g);o.has(m)||(o.set(m,c.length/3),c.push((x.x+p.x)/2,(x.y+p.y)/2,(x.z+p.z)/2))}for(let f=0;f<r.length;f+=3){let g=r[f],x=r[f+1],p=r[f+2];a.a.fromBufferAttribute(s,g),a.b.fromBufferAttribute(s,x),a.c.fromBufferAttribute(s,p),e.some(m=>a.closestPointToPoint(m,l).distanceToSquared(m)<t*t)&&(d(g,x,a.a,a.b),d(x,p,a.b,a.c),d(p,g,a.c,a.a))}if(!o.size)return!1;for(let f=0;f<r.length;f+=3){let g=r[f],x=r[f+1],p=r[f+2],m=o.get(h(g,x)),v=o.get(h(x,p)),b=o.get(h(p,g)),y=+(m!==void 0)+ +(v!==void 0)+ +(b!==void 0);if(!y){u.push(g,x,p);continue}if(y===3){u.push(g,m,b,m,x,v,v,p,b,m,v,b);continue}for(;m===void 0||y===2&&v===void 0;)[g,x,p]=[x,p,g],[m,v,b]=[v,b,m];y===1?u.push(g,m,p,m,x,p):u.push(m,x,v,g,m,p,m,v,p)}return i.dispose(),i.setAttribute("position",new Ce(c,3)),i.deleteAttribute("normal"),i.setIndex(u),i.computeVertexNormals(),i.computeBoundingSphere(),!0}function Td(i,e,t,n,s){let r=new _,o=[],a=new Uint8Array(i.length/3),l=[];if(s?.length)o.push(...s);else{let c=1/0,u=-1;for(let h=0;h<a.length;h++){let d=r.fromArray(i,h*3).distanceToSquared(t);d<c&&(c=d,u=h)}u>=0&&o.push(u)}for(let c=0;c<o.length;c++){let u=o[c];if(a[u])continue;a[u]=1;let h=r.fromArray(i,u*3).distanceTo(t);if(!(h>=n)){l.push([u,1-ke.smoothstep(h,0,n)]);for(let d of e[u])a[d]||o.push(d)}}return l}function Ed(i,e,t,n,s,r,o,a,l,c=!1){let u=new _,h=new _;for(let[d,f]of s){let g=d*3;if(u.fromArray(e,g),o==="grab"||o==="hook")h.copy(a),c&&(h.x*=-1),u.addScaledVector(h,f*l);else if(o==="smooth"){h.set(0,0,0);for(let x of n[d])h.x+=e[x*3],h.y+=e[x*3+1],h.z+=e[x*3+2];u.lerp(h.multiplyScalar(1/n[d].length),Math.min(1,l)*f)}else o==="pinch"?(h.subVectors(r,u),u.addScaledVector(h,l*f)):u.addScaledVector(h.fromArray(t,g),l*f);u.clampScalar(-3,3).toArray(i,g)}}function cu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ft,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Km(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let g=Km(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Km(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new St(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function $m(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,b=a.length;v<b;v++){let y=a[v],T=i.attributes[y];l[y]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let A=i.morphAttributes[y];A&&(c[y]||(c[y]=[]),A.forEach((P,D)=>{let w=new P.array.constructor(P.count*P.itemSize);c[y][D]=new P.constructor(w,P.itemSize,P.normalized)}))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let v=0;v<r;v++){let b=n?n.getX(v):v,y="";for(let T=0,A=a.length;T<A;T++){let P=a[T],D=i.getAttribute(P),w=D.itemSize;for(let M=0;M<w;M++)y+=`${~~(D[h[M]](b)*x+p)},`}if(y in t)u.push(t[y]);else{for(let T=0,A=a.length;T<A;T++){let P=a[T],D=i.getAttribute(P),w=i.morphAttributes[P],M=D.itemSize,L=l[P],O=c[P];for(let X=0;X<M;X++){let V=h[X],G=d[X];if(L[G](o,D[V](b)),w)for(let W=0,se=w.length;W<se;W++)O[W][G](o,w[W][V](b))}}t[y]=o,u.push(o),o++}}let m=i.clone();for(let v in i.attributes){let b=l[v];if(m.setAttribute(v,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),v in c)for(let y=0;y<c[v].length;y++){let T=c[v][y];m.morphAttributes[v][y]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return m.setIndex(u),m}function uu(i,e,t){if(t){let r=new ft;return r.setAttribute("position",new Ce(e.map(o=>o/1e3),3)),r.setIndex(t),r.computeVertexNormals(),r.computeBoundingSphere(),r}let n=i==="cube"?new rt(.9,1.25,.67,18,18,18):new Di(1,15);n.deleteAttribute("normal"),n.deleteAttribute("uv");let s=$m(n,1e-5);return n.dispose(),i==="sphere"&&s.scale(.46,.64,.34),s.translate(0,.68,0),e&&s.attributes.position.array.set(e.map(r=>r/1e3)),s.computeVertexNormals(),s.computeBoundingSphere(),s}function Ad(i){return Array.from(i.attributes.position.array,e=>Math.round(e*1e3))}function Qm(i){let e=uu(i.base,i.vertices,i.indices),t=new tn({color:i.color,roughness:.86,side:qt}),n=new sa(e,t);n.frustumCulled=!1;let s=i.pivots.map(d=>new _(...d)),r=ci.map((d,f)=>{let g=new io;return g.position.copy(s[f]),g}),o=ci.map(([,d],f)=>{d<0?n.add(r[f]):(r[d].add(r[f]),r[f].position.sub(s[d]));let g=d<0?s[0].clone().add(new _(0,.19,0)):s[d].clone().lerp(s[f],.55);return new lr(g,s[f])}),a=e.attributes.position,l=[],c=[],u=new _,h=new _;for(let d=0;d<a.count;d++){u.fromBufferAttribute(a,d);let f=o.map((p,m)=>[m,(p.distanceSq()<1e-10?p.end:p.closestPointToPoint(u,!0,h)).distanceToSquared(u)]).sort((p,m)=>p[1]-m[1]).slice(0,4),g=f.map(([,p])=>1/(.0018+p)**2.6),x=g.reduce((p,m)=>p+m,0);for(let p=0;p<4;p++)l.push(f[p][0]),c.push(g[p]/x)}return e.setAttribute("skinIndex",new nr(l,4)),e.setAttribute("skinWeight",new Ce(c,4)),n.bind(new ra(r)),{mesh:n,bones:r,dispose(){n.removeFromParent(),n.skeleton.dispose(),e.dispose(),t.dispose()}}}function hu(i,e){for(let[t,n]of i.bones.entries())n.rotation.set(...e[t].map(ke.degToRad))}function eg(i,e,t,n=!0){if(!e.length)return;let s=e.reduce((r,o)=>r+o.duration,0);t=n?t%s:Math.min(t,s);for(let[r,o]of e.entries()){if(t>o.duration&&r<e.length-1){t-=o.duration;continue}let a=e[n?(r+1)%e.length:Math.min(r+1,e.length-1)],l=ke.smoothstep(t/o.duration,0,1);for(let[c,u]of i.bones.entries())u.rotation.set(...o.pose[c].map((h,d)=>ke.degToRad(ke.lerp(h,a.pose[c][d],l))));return}}function tg({canvas:i,renderer:e,onClose:t}){let n=jm(localStorage),s=(Z,he,Pe)=>{let Ze=document.createElement(Z);return Ze.className=he,Ze.innerHTML=Pe,Ze},r=s("div","sculpt-toolbar",`
    <select data-ui="library" aria-label="Entit&eacute; enregistr&eacute;e"></select>
    <input data-ui="name" aria-label="Nom" maxlength="36">
    <button data-ui="sphere">Nouvelle sph&egrave;re</button><button data-ui="cube">Nouveau cube</button>
    <button class="strong" data-ui="save">Enregistrer l&rsquo;entit&eacute;</button>
    <a href="./editor.html?tab=entities" target="_blank" rel="noopener">Placer sur une carte</a>`),o=[["hook","K","Allonger","Prolonge une forme dans la direction du trait"],["grab","G","D\xE9placer","D\xE9place le volume sous la brosse"],["draw","D","Relief","Ajoute du volume le long de la surface"],["carve","C","Creuser","Repousse la surface vers l\u2019int\xE9rieur"],["smooth","S","Lisser","Estompe les bosses et les raccords"],["pinch","P","Pincer","Resserre les sommets pour marquer un pli"]],a=s("nav","tool-rail sculpt-rail",o.map(([Z,he,Pe,Ze])=>`<button class="rail-btn" data-brush="${Z}" title="${Ze} (${he})"><span>${he}</span><span>${Pe}</span></button>`).join(""));a.setAttribute("aria-label","Brosses de sculpture");let l=s("aside","side sculpt-inspector",`
        <h2>Entit\xE9</h2>
        <label>Mode <select data-ui="mode"><option value="sculpt">Sculpture</option><option value="motion">Squelette et animations</option></select></label>
        <div data-ui="sculpt">
          <label>Rayon <input data-ui="radius" type="range" min="8" max="160" step="1" value="52"></label>
          <label>Intensit&eacute; <input data-ui="strength" type="range" min=".15" max="1" step=".05" value=".65"></label>
          <label><input data-ui="mirror" type="checkbox" checked> Sym&eacute;trie gauche / droite</label>
          <label><input data-ui="adaptive" type="checkbox" checked> Ajouter des polygones sous la brosse</label>
          <label><input data-ui="wire" type="checkbox"> Afficher les polygones</label>
          <label>Couleur <input data-ui="color" type="color"></label>
          <button data-ui="undo">Annuler</button> <button data-ui="redo">R&eacute;tablir</button>
          <p data-ui="hint"></p>
        </div>
        <div data-ui="motion" hidden>
          <label>Articulation <select data-ui="joint"></select></label>
          <p>Clique une articulation pour la choisir. Glisse-la pour d&eacute;placer son pivot en pose de repos.</p>
          <fieldset><legend>Pivot XYZ (m)</legend><div data-ui="pivot" style="display:flex;gap:4px"></div></fieldset>
          <fieldset><legend>Rotation XYZ (&deg;)</legend><div data-ui="rotation" style="display:flex;gap:4px"></div></fieldset>
          <label>Animation <select data-ui="clip"></select></label>
          <label>Pose <select data-ui="frame"></select></label>
          <label>Dur&eacute;e de la pose <input data-ui="duration" type="number" min=".08" max="2" step=".05" value=".35"> s</label>
          <div><button data-ui="add">Ajouter une pose</button><button data-ui="replace">Mettre &agrave; jour</button><button data-ui="delete">Supprimer</button></div>
          <div><button data-ui="rest">Remettre la pose &agrave; z&eacute;ro</button><button data-ui="play">Lire</button></div>
          <label>Au contact <select data-ui="contact"><option value="kill">Animation + &eacute;limination</option><option value="animate">Animation seule</option></select></label>
        </div>
        <output data-ui="status" role="status"></output>
  `),c=s("div","sculpt-views",'<button data-view="front">Avant</button><button data-view="side">C\xF4t\xE9</button><button data-view="top">Dessus</button><button data-view="fit">Tout voir</button>'),u=document.querySelector("main.layout"),h=u.querySelector(".viewport-head"),d=h.querySelector("strong"),f=u.querySelector(".preview-footer"),g=d.textContent,x=f.textContent,p=Z=>l.querySelector('[data-ui="'+Z+'"]')??r.querySelector('[data-ui="'+Z+'"]');document.querySelector(".top-actions").append(r),u.prepend(a),u.append(l),h.append(c);let m=document.body.classList.contains("preview-fullscreen");document.body.classList.remove("preview-fullscreen"),document.body.dataset.workspace="sculpt",d.textContent="Entit\xE9 / Sculpture",f.textContent="Clic droit : tourner \xB7 Molette : zoomer \xB7 Clic molette : d\xE9placer la vue";let v=new oi;v.background=new Ge("#182029");let b=new Qt(44,1,.03,100);b.position.set(2,1.55,-2.7);let y=new AbortController,T=(Z,he,Pe)=>Z.addEventListener(he,Pe,{signal:y.signal}),A=new As(b,i);A.target.set(0,.65,0),A.mouseButtons={LEFT:null,MIDDLE:zn.PAN,RIGHT:zn.ROTATE};let P=new Qi("#e5f0ff","#5c3d46",2.1),D=new es("#fff0e0",2.7);D.position.set(-2,4,-3),v.add(P,D,new cr(6,24,"#758698","#344250"));let w=new tn({color:"#62566b",roughness:.84,side:qt}),M=new ve(new bs(.978,1,44),new fn({color:"#d0f1ff",side:qt,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));M.renderOrder=4,v.add(M),M.visible=!1;let L=new sn;v.add(L);let O=new li(.027,9,6),X=new fn({color:"#92b9db",depthTest:!1}),V=new fn({color:"#ffc35e",depthTest:!1}),G=new Li(new ft,new Jn({color:"#96a9bb",depthTest:!1}));L.add(G);let W=ci.map(()=>{let Z=new ve(O,X);return Z.renderOrder=3,L.add(Z),Z}),se=new ts,Y=new le,re=new yn,ye=new _,Se=[],Be=[],Je="hook",it=!1,Ye,q,U,ne,ue,N=!1,z,ce,R=0,te=null,K=0,j=[],ee=(Z,he)=>new Option(he,Z);p("joint").replaceChildren(...ci.map(([Z],he)=>ee(he,Z))),p("clip").replaceChildren(...Sd.map((Z,he)=>ee(he,Z)));let me=(Z,he,Pe,Ze)=>["X","Y","Z"].map(st=>{let ht=document.createElement("input");return Object.assign(ht,{type:"number",min:Pe,max:Ze,step:he}),ht.style.width="33%",ht.setAttribute("aria-label",Z+" "+st),p(Z).append(ht),ht}),de=me("pivot",.02,-3,3),be=me("rotation",1,-180,180),ze=()=>{K||(K=requestAnimationFrame(ll))};A.addEventListener("change",ze);let We=new ResizeObserver(ze);We.observe(i);let I=Z=>{Je=Z;for(let Pe of a.querySelectorAll("[data-brush]"))Pe.setAttribute("aria-pressed",String(Pe.dataset.brush===Z));let he=o.find(([Pe])=>Pe===Z);p("hint").textContent=he[3]+". Maj pour lisser, Ctrl pour inverser Relief ou Creuser."};I(Je);for(let Z of a.querySelectorAll("[data-brush]"))Z.onclick=()=>I(Z.dataset.brush);c.onclick=Z=>{let he=Z.target.dataset.view;if(!he)return;q.geometry.computeBoundingSphere();let Pe=q.geometry.boundingSphere,Ze=Math.max(.6,Pe.radius*3.6);A.target.copy(Pe.center);let mt=he==="front"?[0,0,-1]:he==="side"?[1,0,0]:he==="top"?[0,1,-.001]:[.55,.22,-1];b.position.fromArray(mt).normalize().multiplyScalar(Ze).add(A.target),A.update(),ze()};let S=Z=>{p("status").textContent=Z},B=()=>{N=!0,S("Modifications en cours"),ze()},$=()=>Number(p("joint").value),oe=()=>ne.clips[Number(p("clip").value)];function ie(){p("library").replaceChildren(ee("","Brouillon"),...n.map(Z=>ee(Z.id,Z.name))),p("library").value=Ye??""}function Le(){te=null,p("play").textContent="Lire",U&&hu(U,ue),ze()}function ge(){de.forEach((Z,he)=>{Z.value=ne.pivots[$()][he]}),be.forEach((Z,he)=>{Z.value=ue[$()][he]}),R=Math.min(R,Math.max(0,oe().length-1)),p("frame").replaceChildren(...oe().map((Z,he)=>ee(he,"Pose "+(he+1)))),p("frame").value=String(R),p("duration").value=oe()[R]?.duration??.35,p("replace").disabled=p("delete").disabled=!oe().length,p("add").disabled=oe().length>=12}function Ue(){Le(),U?.dispose(),U=null,q.visible=p("mode").value==="sculpt",L.visible=!q.visible,M.visible=!1;for(let Z of a.querySelectorAll("[data-brush]"))Z.disabled=!q.visible;d.textContent=q.visible?"Entit\xE9 / Sculpture":"Entit\xE9 / Squelette et animations",q.visible||(U=Qm({...ne,...we()}),v.add(U.mesh),hu(U,ue)),ge()}function Ne(Z,he){q?.removeFromParent(),q?.geometry.dispose(),Ye=he?.id;let Pe=uu(Z,he?.sculpt.vertices,he?.sculpt.indices);q=new ve(Pe,w),v.add(q),j=lu(Pe),it=!!he?.sculpt.indices,ne=ou(he?.sculpt??{base:Z,vertices:Ad(Pe)}),ue=Pa(),R=0,Se.length=Be.length=0,N=!1,p("name").value=he?.name??"Ma cr\xE9ature",p("contact").value=ne.contact,p("color").value=ne.color,w.color.set(ne.color),p("mode").value="sculpt",S(""),ie(),Ue()}function fe(){return!N||confirm("Quitter ce brouillon sans enregistrer les modifications ?")}p("sphere").onclick=()=>{fe()&&Ne("sphere")},p("cube").onclick=()=>{fe()&&Ne("cube")},p("library").onchange=()=>{let Z=n.find(he=>he.id===p("library").value);Z&&fe()?Ne(Z.sculpt.base,Z):ie()},p("mode").onchange=Ue,p("wire").onchange=()=>{w.wireframe=p("wire").checked,ze()},p("color").oninput=()=>{ne.color=p("color").value,w.color.set(ne.color),B()},p("name").oninput=B,p("contact").onchange=()=>{ne.contact=p("contact").value,B()},p("save").onclick=()=>{if(!Ye&&n.length>=20){S("La biblioth\xE8que contient d\xE9j\xE0 20 cr\xE9atures.");return}let Z=ou({...ne,...we()});if(!Z){S("Le maillage de cette entit\xE9 est invalide.");return}let he={id:Ye??crypto.randomUUID(),name:p("name").value.trim()||"Ma cr\xE9ature",sculpt:Z},Pe=[...n.filter(Ze=>Ze.id!==Ye),he];try{localStorage.setItem(wd,JSON.stringify(Pe))}catch{S("Sauvegarde impossible. Le stockage du navigateur est plein ou bloqu\xE9.");return}n.splice(0,n.length,...Pe),Ye=he.id,N=!1,ie(),S("Enregistr\xE9e. Choisis-la dans Entit\xE9s, sur ta carte.")},p("joint").onchange=()=>{ge(),ze()},de.forEach((Z,he)=>{Z.onchange=()=>{if(!Number.isFinite(Z.valueAsNumber)){ge();return}ne.pivots[$()][he]=ke.clamp(Z.valueAsNumber,-3,3),B(),Ue()}}),be.forEach((Z,he)=>{Z.oninput=()=>{Number.isFinite(Z.valueAsNumber)&&(ue[$()][he]=ke.clamp(Z.valueAsNumber,-180,180),Le())}});function Te(){oe().length?ue=structuredClone(oe()[R].pose):ue=Pa(),Le(),ge()}p("clip").onchange=()=>{R=0,Te()},p("frame").onchange=()=>{R=Number(p("frame").value),Te()};let Xe=()=>({duration:ke.clamp(p("duration").valueAsNumber||.35,.08,2),pose:structuredClone(ue)});p("add").onclick=()=>{oe().push(Xe()),R=oe().length-1,B(),ge()},p("replace").onclick=()=>{oe()[R]=Xe(),B(),ge()},p("delete").onclick=()=>{oe().splice(R,1),R=Math.max(0,R-1),B(),Te()},p("rest").onclick=()=>{ue=Pa(),Le(),ge()},p("play").onclick=()=>{if(te!==null){Le();return}if(!oe().length){S("Ajoute une pose avant de lire l\u2019animation.");return}te=performance.now(),p("play").textContent="Arr\xEAter",ze()};let Re=()=>q.geometry.attributes.position,we=()=>({base:ne.base,vertices:Ad(q.geometry),indices:it?Array.from(q.geometry.index.array):void 0});function nt(){Re().needsUpdate=!0,q.geometry.computeVertexNormals(),q.geometry.computeBoundingSphere(),B()}function F(Z,he){if(!Z.length||z||!q.visible)return;he.push(we());let Pe=Z.pop();q.geometry.dispose(),q.geometry=uu(Pe.base,Pe.vertices,Pe.indices),it=!!Pe.indices,j=lu(q.geometry),B()}p("undo").onclick=()=>F(Se,Be),p("redo").onclick=()=>F(Be,Se);let xe=new _,Me=new _(0,0,1),De=new _;function pe(Z){return De.copy(Z).applyMatrix4(b.matrixWorldInverse),Math.max(.004,Number(p("radius").value)*2*Math.abs(De.z)*Math.tan(ke.degToRad(b.fov/2))/Math.max(i.clientHeight,1))}function ae(Z,he){b.updateMatrixWorld();let Pe=i.getBoundingClientRect();Y.set(2*(Z-Pe.left)/Pe.width-1,1-2*(he-Pe.top)/Pe.height),se.setFromCamera(Y,b)}let Ie=()=>se.intersectObject(q,!1)[0];function Ke(Z){M.visible=!!Z,Z&&(xe.copy(Z.face.normal),M.position.copy(Z.point).addScaledVector(xe,.002),M.quaternion.setFromUnitVectors(Me,xe),M.scale.setScalar(pe(Z.point))),ze()}let wt=Z=>Z.clone().setX(-Z.x);function _t(Z,he,Pe,Ze){if(!p("adaptive").checked)return!1;let mt=Pe?[Z,wt(Z)]:[Z],st=!1;for(let ht=0;ht<Ze&&Jm(q.geometry,mt,he*1.16,he*.56);ht++)st=!0;return st&&(it=!0,j=lu(q.geometry)),st}function Wn(Z,he,Pe,Ze){let mt=Ze?[Ze.a,Ze.b,Ze.c]:void 0,st=Td(Re().array,j,Z,he,mt),ht=Pe&&Math.abs(Z.x)>he*.035?Td(Re().array,j,wt(Z),he):[];if(!ht.length)return{direct:st,other:ht};let hn=new Map(st),ds=new Map(ht);return{direct:st.filter(([Xs,E])=>E>=(ds.get(Xs)??0)),other:ht.filter(([Xs,E])=>E>(hn.get(Xs)??0))}}function Un(Z,he,Pe,Ze,mt,st=Re().array.slice()){let ht=Re().array,hn=q.geometry.attributes.normal.array;Ed(ht,st,hn,j,he.direct,Z,Pe,Ze,mt),Ed(ht,st,hn,j,he.other,wt(Z),Pe,Ze,mt,!0)}function ko(Z,he,Pe){let{point:Ze}=Z,mt=pe(Ze),st=he.shiftKey?"smooth":z.tool;(!z.detailAt||z.detailAt.distanceToSquared(Ze)>mt*mt*.3)&&(_t(Ze,mt,z.mirror,2)&&(Z=Ie()??Z),z.detailAt=Ze.clone());let ht=Wn(Z.point,mt,z.mirror,Z.face);if(!ht.direct.length&&!ht.other.length)return;let hn=Number(p("strength").value),ds=(st==="carve"?-1:1)*(he.ctrlKey||he.metaKey?-1:1),Xs=st==="smooth"?.55:st==="pinch"?.16:ds*mt*.19;Un(Z.point,ht,st,ye,Pe*hn*Xs),nt()}T(i,"pointerdown",Z=>{if(!(Z.button!==0||z||ce)){if(ae(Z.clientX,Z.clientY),q.visible){let he=Ie();if(!he)return;let Pe=he.point,Ze=pe(Pe),mt=p("mirror").checked,st=Z.shiftKey?"smooth":Je;Se.push(we()),Se.length>16&&Se.shift(),Be.length=0,_t(Pe,Ze,mt,4)&&(he=Ie()??he,B());let ht=Wn(he.point,Ze,mt,he.face);if(!ht.direct.length){S(Re().count>=12e3?"Limite de polygones atteinte. Agrandis la brosse.":"Agrandis la brosse pour atteindre les sommets de cette zone.");return}re.setFromNormalAndCoplanarPoint(b.getWorldDirection(new _),he.point),z={id:Z.pointerId,tool:st,center:he.point,mirror:mt,radius:Ze,weights:ht,anchor:ht.direct.reduce((hn,ds)=>ds[1]>hn[1]?ds:hn)[0],original:st==="grab"?Re().array.slice():null,projected:he.point.clone(),x:Z.clientX,y:Z.clientY,detailAt:he.point.clone()},st!=="hook"&&st!=="grab"&&ko(he,Z,1),Ke(null)}else{let he=se.intersectObjects(W,!1)[0];if(!he)return;let Pe=W.indexOf(he.object);p("joint").value=String(Pe),Le(),hu(U,Pa());let Ze=new _(...ne.pivots[Pe]);re.setFromNormalAndCoplanarPoint(b.getWorldDirection(new _),Ze);let mt=se.ray.intersectPlane(re,new _);if(!mt)return;ce={id:Z.pointerId,index:Pe,offset:Ze.sub(mt)},ge()}i.setPointerCapture(Z.pointerId),A.enabled=!1}});let Nn=new _,Xn=new _;T(i,"pointermove",Z=>{if(ce?.id===Z.pointerId){if(ae(Z.clientX,Z.clientY),!se.ray.intersectPlane(re,ye))return;let st=ye.add(ce.offset).clampScalar(-3,3).toArray().map(ht=>Math.round(ht*1e3)/1e3);ne.pivots[ce.index]=st,de.forEach((ht,hn)=>{ht.value=st[hn]}),B();return}if(!q.visible)return;if(ae(Z.clientX,Z.clientY),!z){Ke(Ie());return}if(z.id!==Z.pointerId)return;let he=Number(p("strength").value);if(z.tool==="grab"||z.tool==="hook"){if(!se.ray.intersectPlane(re,ye))return;if(z.tool==="grab")Nn.subVectors(ye,z.center),Un(z.center,z.weights,"grab",Nn,he,z.original);else{Nn.subVectors(ye,z.projected);let st=Math.min(24,Math.max(1,Math.ceil(Nn.length()/(z.radius*.2))));Nn.multiplyScalar(1/st);for(let ht=0;ht<st;ht++)Xn.fromBufferAttribute(Re(),z.anchor),z.detailAt.distanceToSquared(Xn)>z.radius**2*.42&&(_t(Xn,z.radius,z.mirror,1),z.detailAt.copy(Xn)),Un(Xn,Wn(Xn,z.radius,z.mirror),"hook",Nn,.75+he*.35);z.projected.copy(ye)}nt();return}let Pe=Math.hypot(Z.clientX-z.x,Z.clientY-z.y),Ze=Math.max(2,Number(p("radius").value)*.17);if(Pe<Ze)return;let mt=Math.min(12,Math.floor(Pe/Ze));for(let st=1;st<=mt;st++){ae(ke.lerp(z.x,Z.clientX,st/mt),ke.lerp(z.y,Z.clientY,st/mt));let ht=Ie();ht&&ko(ht,Z,.75)}z.x=Z.clientX,z.y=Z.clientY}),T(i,"lostpointercapture",Z=>{if(ce?.id===Z.pointerId&&(ce=null,A.enabled=!0,Ue()),z?.id!==Z.pointerId)return;let{tool:he,center:Pe,radius:Ze,mirror:mt}=z;(he==="grab"||he==="hook")&&(Xn.fromBufferAttribute(Re(),z.anchor),Xn.distanceToSquared(Pe)>1e-6&&_t(Xn,Ze,mt,2)&&B()),z=null,A.enabled=!0,ae(Z.clientX,Z.clientY),Ke(Ie())}),T(i,"pointerleave",()=>{Ke(null)});function al(){if(!fe())return;y.abort(),We.disconnect(),cancelAnimationFrame(K),A.dispose(),U?.dispose();let Z=new Set;v.traverse(he=>{he.geometry&&Z.add(he.geometry),he.material&&Z.add(he.material)}),Z.add(V),Z.add(X);for(let he of Z)he.dispose();delete document.body.dataset.workspace,m&&document.body.classList.add("preview-fullscreen"),d.textContent=g,f.textContent=x,r.remove(),a.remove(),l.remove(),c.remove(),i.style.touchAction="none",t()}T(window,"beforeunload",Z=>{N&&Z.preventDefault()}),T(window,"keydown",Z=>{if(Z.target.closest?.("input,select,textarea")||z||ce)return;let Pe=Z.key.toLowerCase(),Ze=Z.ctrlKey||Z.metaKey;if(Ze&&Pe==="s"){Z.preventDefault(),p("save").click();return}if(Ze&&(Pe==="z"||Pe==="y")){Z.preventDefault(),p(Z.shiftKey||Pe==="y"?"redo":"undo").click();return}if(Ze||!q.visible)return;let mt=o.find(([,st])=>st.toLowerCase()===Pe);mt&&(Z.preventDefault(),I(mt[0]))});function ll(Z){K=0;let he=Math.max(1,i.clientWidth),Pe=Math.max(1,i.clientHeight);if((i.width!==Math.floor(he*e.getPixelRatio())||i.height!==Math.floor(Pe*e.getPixelRatio()))&&e.setSize(he,Pe,!1),b.aspect!==he/Pe&&(b.aspect=he/Pe,b.updateProjectionMatrix()),A.update(),U){te!==null&&eg(U,oe(),(Z-te)/1e3,Number(p("clip").value)!==3),U.mesh.updateMatrixWorld(!0);let Ze=[];for(let[st,[,ht]]of ci.entries()){let hn=W[st].position;ce?hn.fromArray(ne.pivots[st]):U.bones[st].getWorldPosition(hn),W[st].material=st===$()?V:X,ht>=0&&Ze.push(...W[ht].position,...hn)}let mt=G.geometry.getAttribute("position");mt?(mt.array.set(Ze),mt.needsUpdate=!0):G.geometry.setAttribute("position",new Ce(Ze,3)),G.frustumCulled=!1}e.render(v,b),te!==null&&ze()}let Ws=n.at(-1);return Ne(Ws?.sculpt.base??"sphere",Ws),ze(),{requestRender:ze,close:al}}var sE=new _(0,1,0),La=(i,e,t,n)=>Number.isFinite(i)?ke.clamp(i,t,n):e;function Da(i){if(!Array.isArray(i?.pivot)||i.pivot.length!==3)return null;let e=i.mode==="slide"||i.mode==="screw"?i.mode:null,t=i.axis==="x"||i.axis==="z"?i.axis:null;return{...e?{mode:e,travel:La(i.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:i.pivot.map(n=>La(n,0,-6,6)),closed:La(i.closed,0,-180,180),open:La(i.open,95,-180,180),seconds:La(i.seconds,.7,.1,6)}}function iS(i,e){return ke.degToRad(ke.lerp(i.closed,i.open,ke.smoothstep(e,0,1)))}var Cd=new _;function ng(i,e,t,n,s,r,o=1){let a=s.axis==="x"?0:s.axis==="z"?2:1;Cd.set(0,0,0).setComponent(a,1);let l=s.mode==="slide"?0:iS(s,r);i.quaternion.setFromAxisAngle(Cd,l),i.position.copy(t).sub(e).applyQuaternion(i.quaternion).add(e),s.mode&&i.position.addScaledVector(Cd,s.travel*o*ke.smoothstep(r,0,1)),i.quaternion.multiply(n)}var So=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[i,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let n=i+"Arm",s=i+"Forearm",r=i+"Hand";So.push([n,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,n,[.35*e,-.52,.02],120],[r,i==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)So.push([i+"Finger"+o,"Doigt "+o+" \xB7 "+(i==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Cs=Object.freeze(Object.fromEntries(So.map(([i,e,t,n,s])=>[i,{label:e,parent:t,pivot:n,limit:s}]))),Rd=(i,e,t,n)=>Number.isFinite(i)?ke.clamp(i,e,t):n;function wo(i,e){let t=Cs[i];return{pivot:t.pivot.map((n,s)=>Rd(e?.pivot?.[s],-3,3,n)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Rd(e?.limit,0,150,t.limit)}}function Ua(i){return Object.fromEntries(So.map(([e])=>[e,wo(e,i?.[e])]))}function Na(i){return i?.parts.length?i.kind!=="avatar"?!0:i.parts.some(e=>e.avatarJoint==="head")&&i.parts.some(e=>e.avatarJoint==="torso"):!1}function ig(){let i=(s,r,o,a,l,c="sphere",u=[0,0,0])=>({name:r,avatarJoint:s,shape:c,position:o,scale:a,rotation:u,color:l,surface:"plain",texture:null}),e="#6e4b58",t="#a17668",n=[i("torso","Torse",[0,-.43,.04],[.58,.69,.38],e),i("head","Cr\xE2ne",[0,.01,.01],[.32,.36,.29],e),i("head","Museau",[0,-.045,-.125],[.22,.14,.19],t),i("head","Oreille gauche",[-.16,.012,.025],[.086,.106,.064],t),i("head","Oreille droite",[.16,.012,.025],[.086,.106,.064],t),i("head","\u0152il gauche",[-.058,.036,-.121],[.034,.03,.035],"#24202c"),i("head","\u0152il droit",[.058,.036,-.121],[.034,.03,.035],"#24202c")];for(let[s,r,o]of[["left",-1,"gauche"],["right",1,"droit"]]){n.push(i(s+"Arm","Bras "+o,[.31*r,-.38,.04],[.17,.38,.17],e,"sphere",[0,0,r*15]),i(s+"Forearm","Avant-bras "+o,[.38*r,-.63,.009],[.13,.3,.14],e,"sphere",[0,0,r*13]),i(s+"Hand","Paume "+o,[.41*r,-.787,-.003],[.13,.125,.075],t));for(let a=1;a<=3;a++)n.push(i(s+"Finger"+a,"Doigt "+a+" "+o,[(.375+(a-1)*.035)*r,-.868,-.025],[.035,.096,.04],t))}return n}function sg(i,e,t){let n=Ua(i.avatarRig),s=new sn,r={},o=[],a=0;for(let[u,,h]of So){let d=new sn;d.position.fromArray(n[u].pivot),h&&d.position.sub(new _(...n[h].pivot)),(h?r[h]:s).add(d),r[u]=d}for(let[u,h]of i.parts.entries()){let d=Object.hasOwn(r,h.avatarJoint)?h.avatarJoint:"torso",f=e(h,u),g=f.geometry.index?.count??f.geometry.attributes.position.count;a+=g/3,f.position.sub(new _(...n[d].pivot)),r[d].add(f),o.push(f)}function l(u,h){let d=r[u],f=n[u];d&&(d.rotation.set(0,0,0),d.rotation[f.axis]=ke.degToRad(f.limit)*Rd(h,-1,1,0))}function c(u,h){let d=n[u].pivot;n[u]=wo(u,{...n[u],pivot:h});let f=new _(...d).sub(new _(...n[u].pivot));for(let g of r[u].children)g.isMesh&&g.position.add(f);for(let[g,,x]of So){if(g!==u&&x!==u)continue;let p=r[g].position.fromArray(n[g].pivot);x&&p.sub(new _(...n[x].pivot))}return n[u].pivot}return{root:s,bones:r,meshes:o,triangles:a,setBend:l,setPivot:c,headPivot:new _(...n.head.pivot),dispose(){s.removeFromParent();for(let u of o)t(u)}}}var Pd={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},sS=new WeakMap,rg={value:0},og=["sine","triangle","pulse","stars"],Id=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n;function Fa(i){if(!i||typeof i!="object")return null;let e={};for(let[t,n]of Object.entries(Pd)){let s=i[t];e[t]={strength:Id(s?.strength,0,n.max,0),speed:Id(s?.speed,0,8,n.defaultSpeed),scale:Id(s?.scale,0,48,n.defaultScale),signal:og.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function ag(i){rg.value=i}function lg(i,e){if(!e||!Object.values(e).some(r=>r.strength>0))return i;let t=r=>{let o=e[r];return new Rt(o.strength,o.speed,o.scale,og.indexOf(o.signal))},n={uFoundryTime:rg,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new Ge(e.tint.color)},uFoundryGlowColor:{value:new Ge(e.glow.color)}},s=`
uniform float uFoundryTime;
varying vec3 vFoundryPosition;
float foundryWave(vec4 channel, vec3 p){
  float phase=uFoundryTime*channel.y*6.2831853+dot(p,vec3(.61,.79,-.53))*channel.z;
  float wave=.5+.5*sin(phase);
  if(channel.w>1.5)return smoothstep(.65,.85,wave);
  if(channel.w>.5)return 1.-abs(fract(phase/6.2831853)*2.-1.);
  return wave;
}
`;return i.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=s+`uniform vec4 uFoundryDeform;
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},i.customProgramCacheKey=()=>"foundry-effect-v1",sS.set(i,e),i}var fu=0,rS=1,oS=new _,cg=new lr,Ld=new yn,ug=new _,du=new An,pu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new mu,this.unassigned=new mu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Dd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new _;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,oS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===fu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,u;r=0,cg.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==l){cg.closestPointToPoint(g.point,!0,ug);let x=ug.distanceToSquared(g.point);x>r&&(r=x,c=g)}}r=-1,Ld.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==l&&g!==c){let x=Math.abs(Ld.distanceToPoint(g.point));x>r&&(r=x,u=g)}}let h=[];if(Ld.distanceToPoint(u.point)<0){h.push(Mi.create(a,l,c),Mi.create(u,l,a),Mi.create(u,c,l),Mi.create(u,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(Mi.create(a,c,l),Mi.create(u,a,l),Mi.create(u,l,c),Mi.create(u,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){let g=e[d];if(g!==a&&g!==l&&g!==c&&g!==u){r=this.tolerance;let x=null;for(let p=0;p<4;p++){let m=this.faces[p].distanceToPoint(g.point);m>r&&(r=m,x=this.faces[p])}x!==null&&this._addVertexToFace(g,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===fu&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=rS;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===fu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=Mi.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Mi=class i{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=fu,this.edge=null}static create(e,t,n){let s=new i,r=new Oa(e,s),o=new Oa(t,s),a=new Oa(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return du.set(e.point,t.point,n.point),du.getNormal(this.normal),du.getMidpoint(this.midpoint),this.area=du.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Oa=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Dd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},mu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ss=class extends ft{constructor(e=[]){super();let t=[],n=[],r=new pu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ce(t,3)),this.setAttribute("normal",new Ce(n,3))}};var za=48,aS=3,lS=128,ui=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),cS=(i,e,t)=>Math.max(e,Math.min(t,i)),uS=()=>structuredClone(ui.shield),Ba=(i,e,t,n)=>Number.isFinite(i)?cS(i,t,n):e;function Si(i){let e=i?.mode==="lathe"?ui.bottle:uS(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=za?i.points.map(o=>[Ba(o?.[0],0,-1.5,1.5),Ba(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:Ba(i?.depth,e.depth,.025,1.5),bevel:Ba(i?.bevel,e.bevel,0,.15),segments:Math.round(Ba(i?.segments,32,aS,lS))}}function ka(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function gu(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function hS(i,e,t,n){let s=gu(i,e,t),r=gu(i,e,n),o=gu(t,n,i),a=gu(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function xu(i){let e=Si(i),t=e.mode==="lathe"?e.points:ka(e);if(t.length<3||t.length>za*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&hS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function yu(i){let e=Si(i),t=xu(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new le(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new le(0,s[0].y)),s.at(-1).x>0&&s.push(new le(0,s.at(-1).y)),n=new ya(s,e.segments);let r=[],o=n.attributes.position,a=new _,l=new _,c=new _,u=new _,h=n.index.array;for(let d=0;d<h.length;d+=3)a.fromBufferAttribute(o,h[d]),l.fromBufferAttribute(o,h[d+1]),c.fromBufferAttribute(o,h[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(h[d],h[d+1],h[d+2]);n.setIndex(r)}else{let s=ka(e),r=new Ki;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new rr(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new St(new Float32Array(s*2),2))}return n}function To(i="box"){let e=i==="cone"?ui.bottle:i==="cylinder"?ui.bowl:i==="diamond"?ui.shield:ui.panel;return Si(e)}var Vn=Math.PI*2,_u=.84,rs=128;function Ps(i){let e=new Uint8Array(rs*rs*4);for(let n=0;n<rs;n++)for(let s=0;s<rs;s++){let r=(s+.5)/rs,o=(n+.5)/rs,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/_u,1),Math.min(o/_u,1),s,n),l=(s+n*rs)*4;for(let c=0;c<3;c++)e[l+c]=ke.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new Pi(e,rs,rs);return t.colorSpace=Ot,t.generateMipmaps=!0,t.minFilter=vn,t.magFilter=rn,t.needsUpdate=!0,t}function _r(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function at(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new Ge(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*_u,r.getY(l)*_u):r.setXY(l,.95,.95);return n.setAttribute("color",new St(a,3)),n}function Ls(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:cu(s),material:new tn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function hg(i,e,t){let n=i/2,s=e/2,r=new Ki;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function Rs(i,e,t,n,s){return new rr(hg(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Is(i,e,t=n=>n){let n=[],s=[],r=[];for(let u=0;u<i.length;u++){let[h,d]=i[u];for(let f=0;f<=e;f++){let g=Vn*f/e,x=t(h,d,g,u);if(n.push(x*Math.sin(g),d,x*Math.cos(g)),s.push(f/e,u/(i.length-1)),u===i.length-1||f===e)continue;let p=u*(e+1)+f,m=p+e+1;h>0&&r.push(p,p+1,m),i[u+1][0]>0&&r.push(p+1,m+1,m)}}let o=new ft;o.setAttribute("position",new Ce(n,3)),o.setAttribute("uv",new Ce(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<i.length;u++){let h=u*(e+1),d=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Va(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new _(0,s,0));continue}for(let r=0;r<e;r++){let o=Vn*r/e;t.push(new _(n*Math.sin(o),s,n*Math.cos(o)))}}return new ss(t)}function dS(){let t=new _a(hg(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let l=0;l<n.count;l++){let c=ke.clamp(n.getX(l)/.098+.5,0,1),u=ke.clamp((n.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=Ps((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*Vn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,g=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||g?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[at(Rs(.106,.207,.013,.011,.0019),8425890),at(Rs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),at(Rs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),at(t,16777215,!0),at(Rs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),at(new rt(.0036,.024,.004).translate(.055,.029,0),11714250),at(new rt(.0036,.015,.004).translate(-.055,.032,0),11385285),at(new rt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(at(new Lt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(at(new Bn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(at(new Bn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ss([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Ls("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function fS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Is(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+h)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Ps((a,l,c,u)=>{let h=Vn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(h)),g=Math.max(...e.map(v=>Math.exp(-(((d-v+.035*Math.cos(h))/.009)**2)))),x=f**3*g,p=_r(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*p;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Va([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ls("bread","Baguette de pain",.27,o,[at(s,16777215,!0)],r,.9)}function pS(){let i=Ps((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,g=46+12*_r(a,l)-(c&&(h||d)?35:0);return[g*.94,g,g*1.04]}),e=Is([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Is([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[at(e,16777215,!0),at(t,11056059),at(new Lt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),at(new Lt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Vn*r/5;n.push(at(new rt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Va([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ls("wheel","Roue",1.8,s,n,i,.64,.23)}function mS(){let i=Ps((r,o,a,l)=>{let c=_r(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos(Vn*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=Is([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Qn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Vn*l/5;return new _(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let s=new ss(n);return Ls("cup","Tasse",.39,s,[at(e,16777215,!0),at(t,15785922)],i,.37)}function gS(){let i=Is([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Ps((s,r,o,a)=>{let l=9*_r(o,a),c=11*Math.cos(s*Vn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*Vn*48+s*Vn*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*Vn*4);return[u,u*1.13,u*1.24]}),t=[at(i,16777215,!0),at(new bs(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),at(new Bn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),at(new Bn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),at(new Lt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),at(new Bn(.008,12).translate(0,.035,.0336),15633202)],n=Va([[.033,-.143],[.054,.133]],6);return Ls("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function xS(){let i=Is([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Ps((r,o,a,l)=>{let c=10*_r(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Vn*r*2));if(e[d]?.[h]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let g=20*Math.cos(Vn*r*2)+c;return[173+g,27+g*.28,55+g*.5]}),n=[at(i,16777215,!0),at(new Bn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),at(new bs(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),at(new Bn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Va([[.069,-.112],[.069,.109]],6);return Ls("soda","Canette de soda",.35,s,n,t,.42,.27)}function yS(){let i=Is([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Ps((s,r,o,a)=>{let l=15*_r(o,a),c=8*Math.cos(s*Vn*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[at(i,16777215,!0),at(Rs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),at(new Bn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=Va([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ls("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function _S(){let i=Ps((s,r,o,a)=>{let l=8*_r(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Is([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[at(Rs(.138,.22,.061,.016,.004),14788675),at(Rs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),at(new $i(.106,.174).translate(0,-.004,.0395),16777215,!0),at(e,2502456),at(new Lt(.014,.017,.016,10).translate(.04,.117,.001),2503482),at(new rt(.008,.047,.027).translate(-.072,.014,-.002),3028798),at(new rt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),at(new Bn(.004,8).translate(.04,.066,.0397),15817792),at(new Bn(.004,8).translate(-.04,.066,.0397),7903100),at(Rs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new _(s,l,o),new _(r,l,o),new _(r,l,a),new _(s,l,a)]);return Ls("radio","Talkie-walkie",.43,new ss(n),t,i,.61,.08)}function dg(){return[dS(),fS(),pS(),mS(),gS(),xS(),yS(),_S()]}var Ud=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var xE=Ud.length-1,fg=Math.min(...Ud.map(i=>i[1])),pg=Math.max(...Ud.map(i=>i[1])),yE=new _(0,0,(fg+pg)/2),mg=new _(.047,.027,(pg-fg)/2);var bE=new dt,ME=new _,SE=new _,wE=new ct;var TE=new _,EE=new _;var AE=new _;var CE=new _,RE=new _,IE=new _,PE=new An,LE=new _,DE=new _,UE=new _,NE=new _,FE=new _;function Ga(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let g=0;g<t.count;g++){let x=new _().fromBufferAttribute(t,g),p=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(p)||(r.add(p),n.push(x))}for(let g=0;g<(i.index?.count??t.count);g+=3){let x=y=>new _().fromBufferAttribute(t,i.index?i.index.getX(y):y),p=x(g),m=x(g+1),v=x(g+2),b=new An(p,m,v).getNormal(new _);b.lengthSq()>.1&&s.push({a:p,b:m,c:v,n:b})}let o=e||Math.max(...n.map(g=>g.length())),{x:a,y:l,z:c}=new Kt().setFromPoints(n).getSize(new _),u=Math.max(1e-4,e**2*.4),h=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=g=>{let x=[];for(let p of g)p.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(p))>.9999)&&x.push(p);return x};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:d,normals:e?[]:f(s.map(g=>g.n)),edges:e?[]:f(s.flatMap(g=>[new _().subVectors(g.b,g.a).normalize(),new _().subVectors(g.c,g.b).normalize(),new _().subVectors(g.a,g.c).normalize()]))}}var OE=new _,BE=new _,zE=new _,kE=new _,VE=new dt,GE=new dt,HE=new _;function gg(i){return Ga(new rt(i.x*2,i.y*2,i.z*2))}var WE=new _;var Nd=Ga(new ai(1,0).scale(...mg)),XE={mesh:{position:new _,quaternion:new dt},shape:Nd,radius:Nd.radius,precise:!0},qE=new _,YE=new _,ZE=new _,jE=new _,JE=new _,KE=new _,$E=new _,QE=Nd.vertices.map(()=>new _);var eA=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)];var tA=new _,nA=new _,iA=new _,sA=new dt,rA=new dt,oA=new dt;var aA=new _,lA=new _,cA=new _,uA=new _;var hA=new _;var dA=new _,fA=new _,pA=new _,mA=new _,gA=new _,xA=new _,yA=new _;var _A={mesh:{position:null,quaternion:new dt},shape:{sphereRadius:0,normals:[],edges:[]}};var Yt=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),bA=Yt(-24,24,-51,7);var xg={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Yt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Yt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Yt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Yt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Yt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Yt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Yt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Yt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Yt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Yt(9,23,-48,-37),sign:[16,-38.2]}},MA=[Yt(-9,-6,-51,7),Yt(6,9,-51,7),Yt(-24,24,-8,-5),Yt(-24,24,-27,-23),Yt(9,23,-37,-34)],SA=[{name:"Glace",bounds:xg.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:xg.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Yt(-9,9,-51,7)},{name:"Sol ouest",bounds:Yt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Yt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Yt(-24,-23,-51,7)},{name:"Sol est",bounds:Yt(9,23,-51,-48)},{name:"Sol est",bounds:Yt(9,23,-37,7)},{name:"Bordure est",bounds:Yt(23,24,-51,7)}];var vS=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i})));var wA={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function yg(){let i=[["Cube",new rt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Di(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new or(.29),"#d8ae53",0,1],["Brique",new rt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new rt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Di(.6,2),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:Ga(t,s),material:new tn({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:gg(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of dg()){let s=Ga(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var bS=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ha=null,MS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Wa(i){return typeof i=="string"&&MS.has(i.replace(/^custom-model-game-/,""))}function vg(i){let e=i?.parts;return Wa(i?.id)||Wa(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Wa(t?.assetId))}function bg(){if(Ha)return Ha;let i=yg(),e=bS;return Ha=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Ha.set("chrome-sphere",{geometry:new Di(.54,2),material:new tn({color:"#c8e6ed",metalness:1,roughness:.16})}),Ha}function vu(i){return typeof i=="string"&&bg().has(i)}function Fd(i){return bg().get(i)??null}function SS(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function _g(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[SS(e,i)]}}function Mg(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>_g(e,t)),_g("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var zd=/^[a-z0-9-]{1,40}$/i,Gd={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function bu(i,e){if(!i)return null;let t=e==="trigger"?i.phase==="exit"?"exit":"enter":i.phase==="use"?"use":null;if(!t)return null;let n=typeof i.door=="string"&&zd.test(i.door)?i.door:null,s=typeof i.light=="string"&&zd.test(i.light)?i.light:null,r=Object.hasOwn(Gd,i.sound)?i.sound:null,o=t==="use"&&Tg.test(i.receiver??"")?i.receiver:null;return n||s||r||o?{phase:t,...o?{receiver:o}:{},...n?{door:n,doorState:["open","close","toggle"].includes(i.doorState)||e==="trigger"&&i.doorState==="hold"?i.doorState:"open"}:{},...n&&e==="trigger"&&i.doorState==="hold"?{doorDelay:vr(i.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(i.lightState)?i.lightState:"on",lightColor:Eg.test(i.lightColor??"")?i.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:vr(i.soundVolume,0,1,.6)}:{}}:null}var Hd="gorilla-lab-models-v1",Dt=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),wS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,Eo=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Mu=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),br=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),Wd=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),vr=(i,e,t,n)=>Number.isFinite(i)?ke.clamp(i,e,t):n;function qa(i){return{gravity:vr(i?.physics?.gravity,0,2.5,1),bounce:vr(i?.physics?.bounce,0,1.65,1)}}function Ao(i){return{projection:i?.uv?.projection==="metric"?"metric":"native",repeat:vr(i?.uv?.repeat,.01,100,1),angle:vr(i?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>vr(i?.uv?.offset?.[t],-100,100,0))}}var Ya=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),Tg=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Eg=/^#[a-f\d]{6}$/i;function Od(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ds(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?ke.clamp(i[s],t,n):e)}function Sg(i){if(i==="arena")return i;if(typeof i!="string"||i.length>700)return null;try{let e=new URL(i);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var kd=new Set(["box","sphere","capsule","convex"]);function TS(i){if(i?.mode==="box")return{mode:"box",center:Ds(i.center,0,-6,6),size:Ds(i.size,.5,.025,12)};let e=Math.round(ke.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:kd.has(i.shape)?i.shape:"box",center:Ds(i.center,0,-6,6),size:Ds(i.size,.5,.025,12),rotation:Ds(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&kd.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Oi(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>Dt.models||JSON.stringify(i).length>Dt.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=i.models.filter(n=>!vg(n)).map(n=>{if(typeof n?.id!="string"||!Tg.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>Dt.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(n.id);let s=new Set;return{id:n.id,name:Od(n.name,"Mod\xE8le sans nom"),kind:n.kind==="avatar"?"avatar":n.kind==="structure"?"structure":"prop",...n.kind==="avatar"?{avatarRig:Ua(n.avatarRig)}:{},...vu(n.assetId)?{assetId:n.assetId}:{},inGame:n.kind!=="avatar"&&n.inGame===!0,properties:{...Object.fromEntries(Object.entries(Ya).map(([r,o])=>[r,typeof n.properties?.[r]=="boolean"?n.properties[r]:o])),...n.kind!=="structure"&&n.kind!=="avatar"&&n.properties?.drivable===!0?{drivable:!0}:{}},hitbox:TS(n?.hitbox),...n.physics?{physics:qa(n)}:{},...n.partCollisions===!0?{partCollisions:!0}:{},parts:n.parts.filter(r=>!Wa(r?.assetId)).map((r,o)=>{let a=Fa(r?.effect),l=typeof r?.actionId=="string"&&zd.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=n.kind==="structure"?bu(r?.reaction,r?.zone):null,u=n.kind==="structure"&&r?.zone!=="trigger"?Da(r?.hinge):null;return{name:Od(r?.name,`Pi\xE8ce ${o+1}`),...u?{hinge:u}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(Cs,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Dt.parts?{group:r.group}:{},shape:r?.shape==="asset"&&vu(r?.assetId)?"asset":Object.hasOwn(Eo,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&vu(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Si(r?.profile)}:{},position:Ds(r?.position,0,-3,3),rotation:Ds(r?.rotation,0,-360,360),scale:Ds(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&Eg.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(Wd,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:Od(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(br,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&Sg(r.portal)?{portal:Sg(r.portal)}:{},...r?.uv?{uv:Ao(r)}:{},surface:Object.hasOwn(Mu,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Dt.textureBytes&&wS.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof i.avatarId=="string"&&Na(t.find(n=>n.id===i.avatarId))?i.avatarId:null}}function Ag(i){try{let e=(i??globalThis.localStorage)?.getItem(Hd);if(e&&e.length<=Dt.fileBytes)return Oi(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function ES(i){switch(i){case"tetrahedron":return new or(Math.sqrt(3)/2);case"sphere":return new li(.5,20,12);case"cylinder":return new Lt(.5,.5,1,20);case"cone":return new ca(.5,1,20);case"torus":return new Qn(.365,.135,8,24);case"capsule":return new ro(.28,.44,6,16);case"diamond":return new ai(.5);default:return new rt(1,1,1)}}var Cg=Object.keys(Mu),cn=64,Xa=4,Rg=2,Fi;function Ig(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Pg(){if(Fi)return Fi;let i=cn*Xa,e=cn*Rg,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/cn)*Xa+Math.floor(s/cn),o=Ig(Cg[r],s%cn,n%cn),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Fi=new Pi(t,i,e),Fi.colorSpace=Ot,Fi.magFilter=rn,Fi.minFilter=vn,Fi.generateMipmaps=!0,Fi.needsUpdate=!0,Fi}var Bd=new Map,wi;function AS(){if(wi)return wi;let i=new Uint8Array(cn**2*4);for(let e=0;e<cn;e++)for(let t=0;t<cn;t++){let n=t>>3,s=e>>3,r=(n*13+s*17+n*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;i.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*cn+t)*4)}return wi=new Pi(i,cn,cn),wi.colorSpace=Ot,wi.wrapS=wi.wrapT=On,wi.magFilter=rn,wi.minFilter=vn,wi.generateMipmaps=!0,wi.needsUpdate=!0,wi}function wg(i){if(Bd.has(i))return Bd.get(i);let e=new Uint8Array(cn*cn*4);for(let n=0;n<cn;n++)for(let s=0;s<cn;s++){let r=Ig(i,s,n),o=(n*cn+s)*4;e.set([r,r,r,255],o)}let t=new Pi(e,cn,cn);return t.colorSpace=Ot,t.wrapS=t.wrapT=On,t.magFilter=rn,t.minFilter=vn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Bd.set(i,t),t}function Su(i){return!!(i?.effect||i?.texture||i?.uv||i?.surface==="windows"||i?.shape==="asset"||i?.finish&&i.finish!=="original")}function CS(i,e,t){let{projection:n,repeat:s,angle:r,offset:o}=Ao(e),a=ke.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:u,normal:h,uv:d}=i.attributes,f=new _,g=new _;for(let x=0;x<u.count;x++){let p=d.getX(x),m=d.getY(x);if(n==="metric"){f.fromBufferAttribute(u,x).multiply(t),g.fromBufferAttribute(h,x);let v=Math.abs(g.x),b=Math.abs(g.y),y=Math.abs(g.z);v>=b&&v>=y?(p=f.z,m=f.y):b>=y?(p=f.x,m=f.z):(p=f.x,m=f.y)}d.setXY(x,(p*l-m*c)*s+o[0],(p*c+m*l)*s+o[1])}}function Mr(i,e=new _(...i.scale)){let t=i.shape==="asset"?Fd(i.assetId):null,n=i.shape==="custom"?yu(i.profile):t?.geometry?.clone()??ES(i.shape),s=n.index?n.toNonIndexed():n;s!==n&&n.dispose(),s.attributes.uv||s.setAttribute("uv",new Ce(new Float32Array(s.attributes.position.count*2),2)),i.uv&&CS(s,i,e);let r=i.rotation.map(ke.degToRad);s.scale(...i.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...i.position);let o=new Ge(i.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,u=Cg.indexOf(i.surface),h=u%Xa,d=Math.floor(u/Xa),f=s.attributes.color;for(let g=0;g<a;g++)i.shape==="asset"&&f?(l[g*3]=f.getX(g)*o.r,l[g*3+1]=f.getY(g)*o.g,l[g*3+2]=f.getZ(g)*o.b):o.toArray(l,g*3),i.shape!=="asset"&&!i.texture&&!i.uv&&i.surface!=="windows"&&c.setXY(g,(h+.05+c.getX(g)*.9)/Xa,(d+.05+c.getY(g)*.9)/Rg);return s.setAttribute("color",new St(l,3)),s}function wu(i){return lg(RS(i),i?.effect)}function RS(i){let e=i?.shape==="asset"?Fd(i.assetId):null,t=br[i?.finish];if(e?.material){let o=e.material.clone();if(t&&i.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),i.texture){o.map?.dispose();let a=new uo().load(i.texture);a.colorSpace=Ot,a.wrapS=a.wrapT=On,o.map=a}return i.uv&&o.map&&(o.map.wrapS=o.map.wrapT=On),i.color&&i.color!=="#ffffff"&&o.color?.multiply(new Ge(i.color)),o.needsUpdate=!0,o}let{roughness:n,metalness:s}=t??br.original;if(i?.surface==="windows"&&!i.texture)return new tn({vertexColors:!0,map:wg("windows"),emissive:"#ffffff",emissiveMap:AS(),emissiveIntensity:1.3,roughness:n,metalness:s});if(!i?.texture)return new tn({vertexColors:!0,map:i?.uv?wg(i.surface):Pg(),roughness:n,metalness:s});let r=new uo().load(i.texture);return r.colorSpace=Ot,r.wrapS=r.wrapT=On,new tn({vertexColors:!0,map:r,roughness:n,metalness:s})}function Lg(i){return i?.parts?.some(Su)?i.parts.map(wu):new tn({vertexColors:!0,map:Pg(),roughness:.68})}function Tu(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==Fi&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Vd(i,e=null){let t=i.map(s=>{if(!e||s.uv?.projection!=="metric")return Mr(s);let r=new en(...s.rotation.map(ke.degToRad),"ZYX"),o=new _(...s.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(r).multiply(e).length())));return Mr(s,o)}),n=cu(t,i.some(Su));return t.forEach(s=>s.dispose()),n.center(),n.computeBoundingBox(),n}function Dg(i,e=null){let t=Vd(i.parts),n=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&i.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Vd(i.parts,e.clone().divide(n))),t.scale(1/n.x,1/n.y,1/n.z),t.computeBoundingBox(),t}function Eu(i){let e=new Kt;for(let t of i.parts??[]){let n=Mr(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function os(i){let e=Eu(i),t=e.getCenter(new _),n=e.getSize(new _),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":kd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?ke.clamp(s.precision,8,96):48,center:r?new _(...s.center):t,size:r?new _(...s.size):n,rotation:r?new _(...s.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:n}}function IS(i,e){let t=i.attributes.position,n=[],s=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(h=>h.toFixed(4)).join(",");s.has(u)||(s.add(u),n.push(c))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let u=0;u<n.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),r.push(n[l]);for(let u=0;u<n.length;u++)a[u]=Math.min(a[u],n[u].distanceToSquared(n[l]))}return r}function Ug(i,e=null){let t=os(i),n=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((h,d)=>d!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new ro(l,c,Math.max(2,Math.round(n/8)),n):new li(l,n,Math.max(6,Math.floor(n/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/s.x,1/s.y,1/s.z),u}if(t.shape==="convex"&&i.parts?.length){let s=Vd(i.parts),r=IS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new ss(r),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new rt(1,1,1)}function Ng(i,e=null){if(!i.partCollisions||i.kind!=="structure")return null;if(i.properties?.collidable===!1)return[];let t=Eu(i),n=t.getCenter(new _),s=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new _(1,1,1);return i.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Mr(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new _).sub(n).multiply(r),size:l.getSize(new _).multiply(r).max(new _(.01,.01,.01))};return a.dispose(),[c]})}var Sr=new ts,Mn=new _,Us=new _,Vt=new dt,Fg={X:new _(1,0,0),Y:new _(0,1,0),Z:new _(0,0,1)},Xd={type:"change"},Og={type:"mouseDown",mode:null},Bg={type:"mouseUp",mode:null},zg={type:"objectChange"},Pu=class extends ur{constructor(e,t=null){super(void 0,t);let n=new Yd(this);this._root=n;let s=new Zd;this._gizmo=s,n.add(s);let r=new jd;this._plane=r,n.add(r);let o=this;function a(b,y){let T=y;Object.defineProperty(o,b,{get:function(){return T!==void 0?T:y},set:function(A){T!==A&&(T=A,r[b]=A,s[b]=A,o.dispatchEvent({type:b+"-changed",value:A}),o.dispatchEvent(Xd))}}),o[b]=y,r[b]=y,s[b]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new _,c=new _,u=new dt,h=new dt,d=new _,f=new dt,g=new _,x=new _,p=new _,m=0,v=new _;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",m),a("eye",v),this._offset=new _,this._startNorm=new _,this._endNorm=new _,this._cameraScale=new _,this._parentPosition=new _,this._parentQuaternion=new dt,this._parentQuaternionInv=new dt,this._parentScale=new _,this._worldScaleStart=new _,this._worldQuaternionInv=new dt,this._worldScale=new _,this._positionStart=new _,this._quaternionStart=new dt,this._scaleStart=new _,this._getPointer=PS.bind(this),this._onPointerDown=DS.bind(this),this._onPointerHover=LS.bind(this),this._onPointerMove=US.bind(this),this._onPointerUp=NS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Sr.setFromCamera(e,this.camera);let t=qd(this._gizmo.picker[this.mode],Sr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Sr.setFromCamera(e,this.camera);let t=qd(this._plane,Sr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Og.mode=this.mode,this.dispatchEvent(Og)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Sr.setFromCamera(e,this.camera);let o=qd(this._plane,Sr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Vt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Mn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Mn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Us.set(a,a,a)}else Mn.copy(this.pointStart),Us.copy(this.pointEnd),Mn.applyQuaternion(this._worldQuaternionInv),Us.applyQuaternion(this._worldQuaternionInv),Us.divide(Mn),t.search("X")===-1&&(Us.x=1),t.search("Y")===-1&&(Us.y=1),t.search("Z")===-1&&(Us.z=1);s.scale.copy(this._scaleStart).multiply(Us),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Mn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Mn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Fg[t]),Mn.copy(Fg[t]),r==="local"&&Mn.applyQuaternion(this.worldQuaternion),Mn.cross(this.eye),Mn.length()===0?l=!0:this.rotationAngle=this._offset.dot(Mn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Xd),this.dispatchEvent(zg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Bg.mode=this.mode,this.dispatchEvent(Bg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Xd),this.dispatchEvent(zg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Sr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function PS(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function LS(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function DS(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function US(i){this.enabled&&this.pointerMove(this._getPointer(i))}function NS(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function qd(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Au=new en,Ut=new _(0,1,0),kg=new _(0,0,0),Vg=new ct,Cu=new dt,Iu=new dt,Bi=new _,Gg=new ct,Ja=new _(1,0,0),wr=new _(0,1,0),Ka=new _(0,0,1),Ru=new _,Za=new _,ja=new _,Yd=class extends Bt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Zd=class extends Bt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new fn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Jn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let h=e.clone();h.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};let x=new Lt(0,.04,.1,12);x.translate(0,.05,0);let p=new rt(.08,.08,.08);p.translate(0,.04,0);let m=new ft;m.setAttribute("position",new Ce([0,0,0,1,0,0],3));let v=new Lt(.0075,.0075,.5,3);v.translate(0,.25,0);function b(G,W){let se=new Qn(G,.0075,3,64,W*Math.PI*2);return se.rotateY(Math.PI/2),se.rotateX(Math.PI/2),se}function y(){let G=new ft;return G.setAttribute("position",new Ce([0,0,0,1,1,1],3)),G}let T={X:[[new ve(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ve(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ve(x,o),[0,.5,0]],[new ve(x,o),[0,-.5,0],[Math.PI,0,0]],[new ve(v,o)]],Z:[[new ve(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ve(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ve(new ai(.1,0),h),[0,0,0]]],XY:[[new ve(new rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ve(new rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ve(new Lt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Lt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Lt(.2,0,.6,4),n),[0,.3,0]],[new ve(new Lt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Lt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Lt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ve(new ai(.2,0),n)]],XY:[[new ve(new rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new ve(new ai(.01,2),s),null,null,null,"helper"]],END:[[new ve(new ai(.01,2),s),null,null,null,"helper"]],DELTA:[[new Kn(y(),s),null,null,null,"helper"]],X:[[new Kn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new ve(b(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ve(b(.5,.5),r)]],Y:[[new ve(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ve(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ve(b(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Kn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ve(new li(.25,10,8),n)]],X:[[new ve(new Qn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ve(new Qn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ve(new Qn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ve(new Qn(.75,.1,2,24),n)]]},L={X:[[new ve(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ve(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ve(p,o),[0,.5,0]],[new ve(v,o)],[new ve(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ve(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(v,a),[0,0,0],[Math.PI/2,0,0]],[new ve(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ve(new rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ve(new rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new rt(.1,.1,.1),h)]]},O={X:[[new ve(new Lt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Lt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Lt(.2,0,.6,4),n),[0,.3,0]],[new ve(new Lt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Lt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Lt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ve(new rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new rt(.2,.2,.2),n),[0,0,0]]]},X={X:[[new Kn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function V(G){let W=new Bt;for(let se in G)for(let Y=G[se].length;Y--;){let re=G[se][Y][0].clone(),ye=G[se][Y][1],Se=G[se][Y][2],Be=G[se][Y][3],Je=G[se][Y][4];re.name=se,re.tag=Je,ye&&re.position.set(ye[0],ye[1],ye[2]),Se&&re.rotation.set(Se[0],Se[1],Se[2]),Be&&re.scale.set(Be[0],Be[1],Be[2]),re.updateMatrix();let it=re.geometry.clone();it.applyMatrix4(re.matrix),re.geometry=it,re.renderOrder=1/0,re.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.set(1,1,1),W.add(re)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=V(T)),this.add(this.gizmo.rotate=V(D)),this.add(this.gizmo.scale=V(L)),this.add(this.picker.translate=V(A)),this.add(this.picker.rotate=V(M)),this.add(this.picker.scale=V(O)),this.add(this.helper.translate=V(P)),this.add(this.helper.rotate=V(w)),this.add(this.helper.scale=V(X)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Iu;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Vt.setFromEuler(Au.set(0,0,0)),o.quaternion.copy(n).multiply(Vt),Math.abs(Ut.copy(Ja).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Vt.setFromEuler(Au.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Vt),Math.abs(Ut.copy(wr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Vt.setFromEuler(Au.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Vt),Math.abs(Ut.copy(Ka).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Vt.setFromEuler(Au.set(0,Math.PI/2,0)),Ut.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Vg.lookAt(kg,Ut,wr)),o.quaternion.multiply(Vt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Mn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Mn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Mn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ut.copy(Ja).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ut.copy(wr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ut.copy(Ka).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ut.copy(Ka).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ut.copy(Ja).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ut.copy(wr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Cu.copy(n),Ut.copy(this.eye).applyQuaternion(Vt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Vg.lookAt(this.eye,kg,wr)),o.name==="X"&&(Vt.setFromAxisAngle(Ja,Math.atan2(-Ut.y,Ut.z)),Vt.multiplyQuaternions(Cu,Vt),o.quaternion.copy(Vt)),o.name==="Y"&&(Vt.setFromAxisAngle(wr,Math.atan2(Ut.x,Ut.z)),Vt.multiplyQuaternions(Cu,Vt),o.quaternion.copy(Vt)),o.name==="Z"&&(Vt.setFromAxisAngle(Ka,Math.atan2(Ut.y,Ut.x)),Vt.multiplyQuaternions(Cu,Vt),o.quaternion.copy(Vt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},jd=class extends ve{constructor(){super(new $i(1e5,1e5,2,2),new fn({visible:!1,wireframe:!0,side:qt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ru.copy(Ja).applyQuaternion(t==="local"?this.worldQuaternion:Iu),Za.copy(wr).applyQuaternion(t==="local"?this.worldQuaternion:Iu),ja.copy(Ka).applyQuaternion(t==="local"?this.worldQuaternion:Iu),Ut.copy(Za),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ut.copy(this.eye).cross(Ru),Bi.copy(Ru).cross(Ut);break;case"Y":Ut.copy(this.eye).cross(Za),Bi.copy(Za).cross(Ut);break;case"Z":Ut.copy(this.eye).cross(ja),Bi.copy(ja).cross(Ut);break;case"XY":Bi.copy(ja);break;case"YZ":Bi.copy(Ru);break;case"XZ":Ut.copy(ja),Bi.copy(Za);break;case"XYZ":case"E":Bi.set(0,0,0);break}break;case"rotate":default:Bi.set(0,0,0)}Bi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Gg.lookAt(Mn.set(0,0,0),Bi,Ut),this.quaternion.setFromRotationMatrix(Gg)),super.updateMatrixWorld(e)}};var Hg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Tr=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Qd(e)}),this.register(function(e){return new ef(e)}),this.register(function(e){return new rf(e)}),this.register(function(e){return new of(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new tf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new sf(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new ff(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new $d,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},gt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Jd="KHR_mesh_quantization",ti={};ti[_n]=gt.NEAREST;ti[yc]=gt.NEAREST_MIPMAP_NEAREST;ti[fr]=gt.NEAREST_MIPMAP_LINEAR;ti[rn]=gt.LINEAR;ti[fo]=gt.LINEAR_MIPMAP_NEAREST;ti[vn]=gt.LINEAR_MIPMAP_LINEAR;ti[Ei]=gt.CLAMP_TO_EDGE;ti[On]=gt.REPEAT;ti[Zr]=gt.MIRRORED_REPEAT;var Wg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},FS=new Ge,Xg=12,OS=1179937895,BS=2,qg=8,zS=1313821514,kS=5130562;function $a(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function VS(i){return new TextEncoder().encode(i).buffer}function GS(i){return $a(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function HS(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=ke.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Zg(i){return Math.ceil(i/4)*4}function Kd(i,e=0){let t=Zg(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Yg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function WS(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var $d=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(l);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){let f=Kd(d.result),g=new DataView(new ArrayBuffer(qg));g.setUint32(0,f.byteLength,!0),g.setUint32(4,kS,!0);let x=Kd(VS(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(qg));p.setUint32(0,x.byteLength,!0),p.setUint32(4,zS,!0);let m=new ArrayBuffer(Xg),v=new DataView(m);v.setUint32(0,OS,!0),v.setUint32(4,BS,!0);let b=Xg+p.byteLength+x.byteLength+g.byteLength+f.byteLength;v.setUint32(8,b,!0);let y=new Blob([m,p,x,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(y),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new _;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new _;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===Ot?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof ir&&(e=await this.decompressTextureAsync(e)),t instanceof ir&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=Yg();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let u=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let f=n(e),g=c.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let f=n(t),g=c.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}c.putImageData(u,0,0);let d=(e||t).clone();return d.source=new vs(l),d.colorSpace=bi,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case gt.BYTE:case gt.UNSIGNED_BYTE:a=1;break;case gt.SHORT:case gt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===gt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Zg(s*l),u=new DataView(new ArrayBuffer(c)),h=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let p;e.itemSize>4?p=e.array[g*e.itemSize+x]:(x===0?p=e.getX(g):x===1?p=e.getY(g):x===2?p=e.getZ(g):x===3&&(p=e.getW(g)),e.normalized===!0&&(p=ke.normalize(p,e.array))),t===gt.FLOAT?u.setFloat32(h,p,!0):t===gt.INT?u.setInt32(h,p,!0):t===gt.UNSIGNED_INT?u.setUint32(h,p,!0):t===gt.SHORT?u.setInt16(h,p,!0):t===gt.UNSIGNED_SHORT?u.setUint16(h,p,!0):t===gt.BYTE?u.setInt8(h,p):t===gt.UNSIGNED_BYTE&&u.setUint8(h,p),h+=a}h%l!==0&&(h+=l-h%l)}let d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===gt.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Kd(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=gt.FLOAT;else if(e.array.constructor===Int32Array)a=gt.INT;else if(e.array.constructor===Uint32Array)a=gt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=gt.SHORT;else if(e.array.constructor===Uint16Array)a=gt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=gt.BYTE;else if(e.array.constructor===Uint8Array)a=gt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=HS(e,n,s),c;t!==void 0&&(c=e===t.index?gt.ELEMENT_ARRAY_BUFFER:gt.ARRAY_BUFFER);let u=this.processBufferView(e,a,n,s,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let u=o.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);let d={mimeType:s},f=Yg();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==Rn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(WS(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):d.uri=eo.getDataURL(f,s);let x=a.images.push(d)-1;return u[h]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:ti[e.magFilter],minFilter:ti[e.minFilter],wrapS:ti[e.wrapS],wrapT:ti[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof ir&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if($a(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===qt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});let o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,T=e.material.length;y<T;y++)s.push(e.material[y].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=gt.LINES:e.isLineLoop?a=gt.LINE_LOOP:e.isLine?a=gt.LINE_STRIP:e.isPoints?a=gt.POINTS:a=e.material.wireframe?gt.LINES:gt.TRIANGLES;let l={},c={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let T=o.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(T))){c[y]=t.attributes.get(this.getUID(T));continue}g=null;let P=T.array;y==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new St(new Uint16Array(P),T.itemSize,T.normalized)):(P instanceof Uint32Array||P instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),g=Tr.Utils.toFloat32BufferAttribute(T));let D=this.processAccessor(g||T,o);D!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,T),c[y]=D,t.attributes.set(this.getUID(T),D))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],T=[],A={};if(e.morphTargetDictionary!==void 0)for(let P in e.morphTargetDictionary)A[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){let D={},w=!1;for(let M in o.morphAttributes){if(M!=="position"&&M!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let L=o.morphAttributes[M][P],O=M.toUpperCase(),X=o.attributes[M];if(t.attributes.has(this.getUID(L,!0))){D[O]=t.attributes.get(this.getUID(L,!0));continue}let V=L.clone();if(!o.morphTargetsRelative)for(let G=0,W=L.count;G<W;G++)for(let se=0;se<L.itemSize;se++)se===0&&V.setX(G,L.getX(G)-X.getX(G)),se===1&&V.setY(G,L.getY(G)-X.getY(G)),se===2&&V.setZ(G,L.getZ(G)-X.getZ(G)),se===3&&V.setW(G,L.getW(G)-X.getW(G));D[O]=this.processAccessor(V,o),t.attributes.set(this.getUID(X,!0),D[O])}h.push(D),y.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&T.push(A[P])}l.weights=y,T.length>0&&(l.extras={},l.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let p=!1;if(x&&o.index===null){let y=[];for(let T=0,A=o.attributes.position.count;T<A;T++)y[T]=T;o.setIndex(y),p=!0}let m=x?e.material:[e.material],v=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,T=v.length;y<T;y++){let A={mode:a,attributes:c};if(this.serializeUserData(o,A),h.length>0&&(A.targets=h),o.index!==null){let D=this.getUID(o.index);(v[y].start!==void 0||v[y].count!==void 0)&&(D+=":"+v[y].start+":"+v[y].count),t.attributes.has(D)?A.indices=t.attributes.get(D):(A.indices=this.processAccessor(o.index,o,v[y].start,v[y].count),t.attributes.set(D,A.indices)),A.indices===null&&delete A.indices}let P=await this.processMaterialAsync(m[v[y].materialIndex]);P!==null&&(A.material=P),u.push(A)}p===!0&&o.setIndex(null),l.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,l)});let b=n.meshes.push(l)-1;return t.meshes.set(r,b),b}detectMeshQuantization(e,t){if(this.extensionsUsed[Jd])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Hg[s]&&Hg[s].includes(n)&&(this.extensionsUsed[Jd]=!0,this.extensionsRequired[Jd]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ke.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=Tr.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let u=r[c],h=Tt.parseTrackName(u.name),d=Tt.findNode(t,h.nodeName),f=Wg[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}let g=1,x=u.values.length/u.times.length;f===Wg.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let p;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",x/=3):u.getInterpolation()===er?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new St(u.times,g)),output:this.processAccessor(new St(u.values,x)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(d),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new ct;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new St(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();$a(a,[0,0,0,1])||(r.rotation=a),$a(l,[0,0,0])||(r.translation=l),$a(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),GS(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let u=e.children[l];if(u.visible||n.onlyVisible===!1){let h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new oi;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof oi?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Qd=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},ef=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},tf=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},nf=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},sf=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},rf=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},of=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},af=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},lf=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(FS)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cf=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},uf=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hf=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},df=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ff=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new ct,c=new _,u=new dt,h=new _;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,u,h),c.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new St(r,3)),ROTATION:n.processAccessor(new St(o,4)),SCALE:n.processAccessor(new St(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Tr.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=Tt.parseTrackName(o.name),l=Tt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Jr)}let c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[l.uuid]===void 0){h=o.clone();let f=new h.ValueBufferType(c*h.times.length);for(let g=0;g<h.times.length;g++)f[g*c+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[l.uuid]=h,t.push(h);continue}let d=o.createInterpolant(new o.ValueBufferType(1));h=n[l.uuid];for(let f=0;f<h.times.length;f++)h.values[f*c+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(h,o.times[f]);h.values[g*c+u]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){let e=new St(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};var jg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],pf=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},$g=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",Co=(i,e,t)=>Math.min(t,Math.max(e,i)),XS=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Lu=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function Qg(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var e0="gorilla-lab-texture-shelf-v1";function qS(){try{let i=JSON.parse(localStorage.getItem(e0)??"[]");return Array.isArray(i)?i:[]}catch{return[]}}function Jg(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=$g(t),r.fillRect(0,0,o,o);let a=Qg(s),l=o/Math.max(4,2*Math.round(4*n)),c=u=>{r.fillStyle=u>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(n),h={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<h;d++){let f=a()*o,g=a()*o,x=a(),p=a(),m=a();Lu(r,v=>{if(e==="rock"){let b=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),v.beginPath();for(let y=0;y<6;y++){let T=y*Math.PI/3+p,A=b*(.63+.3*Math.cos(T*2+p)+.25);v.lineTo(f+Math.cos(T)*A,g+Math.sin(T)*A*.72)}v.closePath(),v.fill(),v.globalAlpha=.3,v.strokeStyle="#232633",v.lineWidth=1.4,v.stroke()}else if(e==="soil"){let b=(1+x*x*12)*u,y=v.createRadialGradient(f,g,0,f,g,b);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),v.globalAlpha=.6,v.fillStyle=y,v.fillRect(f-b,g-b,b*2,b*2)}else if(e==="grass"||e==="wood"){let b=e==="grass",y=(b?5+x*25:7+x*110)*u;v.strokeStyle=b?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",v.globalAlpha=.08+p*.28,v.lineWidth=(.75+x*1.7)*u,v.beginPath(),v.moveTo(f,g),b?v.quadraticCurveTo(f+y*(p-.5)*.55,g-y*.58,f+y*(p-.6),g-y):v.quadraticCurveTo(f+y*.5,g+10*(p-.5),f+y,g+4*(m-.5)),v.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let b=(e==="sand"?.6+x*1.6:1+x*5)*u;v.fillRect(f,g,b,b*(.7+p*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let h=0;h<u;h++)for(let d=0;d<u;d++)Lu(r,f=>{f.beginPath(),f.arc(d*l+l/2,h*l+l/2,Co(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let h=0;h<o;h+=l/2)r.fillRect(h,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,h,o,Math.max(1,l/13));for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(h,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let h=0;h<=o;h+=l)r.beginPath(),r.moveTo(0,h),r.lineTo(o,h),r.stroke();for(let h=0;h<o;h+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(h/l)%2?l/2:0;e!=="brick"&&h>0||(r.beginPath(),r.moveTo(d+f,h),r.lineTo(d+f,h+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let h=l/2;h<o;h+=l)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke()}}}r.globalAlpha=1}var YS=`
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
`;function ZS(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=YS,document.head.append(i)}async function Kg(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function t0({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){ZS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=N=>o.querySelector(N),l=a(".texture-canvas"),c=a(".texture-tile"),u=pf(),h=pf(),d={pattern:jg.some(([N])=>N===n)?n:"grain",base:$g(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),g=u.getContext("2d",{willReadFrequently:!0}),x=h.getContext("2d",{willReadFrequently:!0}),p=[],m=[],v=!1,b=!1,y=null,T="paint",A=null,P=null;a("#studio-title").textContent=t+" / SURFACE LAB";let D=[],w=-1;a("[data-field=base]").value=d.base;for(let N of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+N+"]").addEventListener("input",z=>{let ce=z.target.value;d[N]=N==="seed"?Math.trunc(Co(Number(ce)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(N)?Number(ce):ce});let M=N=>{a("[data-status]").textContent=N},L=()=>{f.clearRect(0,0,512,512),f.drawImage(u,0,0),f.drawImage(h,0,0);let N=c.getContext("2d");N.clearRect(0,0,256,128);for(let z=0;z<2;z++)for(let ce=0;ce<4;ce++)N.drawImage(l,ce*64,z*64,64,64)},O=()=>({base:g.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:D,editingShape:w}),X=N=>{g.putImageData(N.base,0,0),x.putImageData(N.top,0,0),D=N.shapes,w=N.editingShape,W(),L()},V=()=>{P=null,p.push(O()),p.length>16&&p.shift(),m.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},G=(N,z)=>{N.length&&(P=null,z.push(O()),X(N.pop()),a("[data-cmd=undo]").disabled=!p.length,a("[data-cmd=redo]").disabled=!m.length,v=!0)},W=()=>{a("[data-shape-count]").textContent=D.length+" forme"+(D.length>1?"s":""),a("[data-cmd=add-shape]").textContent=w<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(w+1),a("[data-shape-list]").replaceChildren(...D.map((N,z)=>{let ce=document.createElement("div");ce.className="texture-setting-row";let R=document.createElement("canvas");R.width=48,R.height=32;let te=Math.min(48/N.width,32/N.height);R.getContext("2d").drawImage(N,0,0,N.width*te,N.height*te);let K=document.createElement("button"),j=document.createElement("button");return K.textContent="Modifier "+(z+1),j.textContent="Supprimer "+(z+1),K.onclick=()=>{V(),w=z,x.clearRect(0,0,512,512),x.drawImage(N,(512-N.width)/2,(512-N.height)/2),W(),L()},j.onclick=()=>{V(),D=D.filter((ee,me)=>me!==z),w===z?(w=-1,x.clearRect(0,0,512,512)):w>z&&w--,W(),L()},ce.append(R,K,j),ce}))};a("[data-cmd=add-shape]").onclick=()=>{let N=x.getImageData(0,0,512,512).data,z=512,ce=512,R=-1,te=-1;for(let j=0;j<512;j++)for(let ee=0;ee<512;ee++)N[4*(j*512+ee)+3]&&(z=Math.min(z,ee),ce=Math.min(ce,j),R=Math.max(R,ee),te=Math.max(te,j));if(R<0){M("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let K=document.createElement("canvas");K.width=R-z+1,K.height=te-ce+1,K.getContext("2d").drawImage(h,z,ce,K.width,K.height,0,0,K.width,K.height),V(),D=w<0?[...D,K]:D.map((j,ee)=>ee===w?K:j),w=-1,x.clearRect(0,0,512,512),W(),L(),M("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let se=()=>{let N=(ee,me,de)=>Co(Number(a("[data-field="+ee+"]").value)||0,me,de),z=Math.round(N("density",1,1e3)),ce=N("minScale",1,200)/100,R=Math.max(ce,N("maxScale",1,200)/100),te=N("rotation",0,360)*Math.PI/180,K=a("[data-field=mirror]").checked,j=Qg(d.seed);V(),d.pattern="solid",Jg(u,d);for(let ee=0;ee<z&&D.length;ee++){let me=D[Math.floor(j()*D.length)],de=j()*512,be=j()*512,ze=j()*te,We=512*(ce+j()*(R-ce))/Math.max(me.width,me.height),I=K&&j()<.5?-1:1;Lu(g,S=>{S.translate(de,be),S.rotate(ze),S.scale(I*We,We),S.drawImage(me,-me.width/2,-me.height/2)})}L(),M(D.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},Y=N=>{let z=l.getBoundingClientRect();return{x:(N.clientX-z.left)/z.width*512,y:(N.clientY-z.top)/z.height*512}},re=N=>{let z=d.size/2,ce=d.opacity;Lu(x,R=>{R.save(),T==="erase"&&(R.globalCompositeOperation="destination-out"),R.globalAlpha=ce;let te=Co(d.hardness,.05,1);if(T==="stamp")R.fillStyle=d.ink,R.translate(N.x,N.y),R.rotate(Math.PI/4),R.fillRect(-z*.8,-z*.8,z*1.6,z*1.6);else{let K=R.createRadialGradient(N.x,N.y,z*te*.85,N.x,N.y,z);if(T==="erase")K.addColorStop(0,"rgba(0,0,0,1)"),K.addColorStop(1,"rgba(0,0,0,0)");else{let j=d.ink.match(/[\da-f]{2}/gi).map(ee=>parseInt(ee,16)).join(",");K.addColorStop(0,"rgba("+j+",1)"),K.addColorStop(1,"rgba("+j+",0)")}R.fillStyle=K,R.beginPath(),R.arc(N.x,N.y,z,0,2*Math.PI),R.fill()}R.restore()})},ye=(N,z)=>{let ce=Math.hypot(z.x-N.x,z.y-N.y),R=Math.max(1,Math.ceil(ce/Math.max(2,d.size*.18)));for(let te=1;te<=R;te++)re({x:N.x+(z.x-N.x)*te/R,y:N.y+(z.y-N.y)*te/R})},Se=N=>{let z=f.getImageData(Math.floor(Co(N.x,0,511)),Math.floor(Co(N.y,0,511)),1,1).data;d.ink="#"+[...z].slice(0,3).map(ce=>ce.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,M("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",N=>{if(N.button!==0||b)return;let z=Y(N);if(T==="pick"){Se(z);return}N.preventDefault(),V(),b=!0,y=N.pointerId,A=z,l.setPointerCapture(N.pointerId),re(z),L()}),l.addEventListener("pointermove",N=>{if(!b||N.pointerId!==y)return;N.preventDefault();let z=Y(N);T==="stamp"?re(z):ye(A,z),A=z,L()});let Be=N=>{N.pointerId===y&&(b=!1,y=null,A=null,l.hasPointerCapture(N.pointerId)&&l.releasePointerCapture(N.pointerId))};l.addEventListener("pointerup",Be),l.addEventListener("pointercancel",Be);for(let N of o.querySelectorAll("[data-tool]"))N.onclick=()=>{T=N.dataset.tool,o.querySelectorAll("[data-tool]").forEach(z=>z.setAttribute("aria-pressed",String(z===N)))};a("[data-cmd=generate]").onclick=se,a("[data-cmd=undo]").onclick=()=>G(p,m),a("[data-cmd=redo]").onclick=()=>G(m,p),a("[data-cmd=export]").onclick=()=>XS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async N=>{let z=N.target.files?.[0];if(N.target.value="",!!z)try{if(!["image/png","image/jpeg","image/webp"].includes(z.type))throw Error("Image PNG / JPG / WebP uniquement.");if(z.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let ce=await createImageBitmap(z);V(),g.clearRect(0,0,512,512),g.drawImage(ce,0,0,512,512),ce.close(),x.clearRect(0,0,512,512),L(),M("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(ce){M(ce.message)}});let Je=N=>{!N&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",it,!0),o.remove())},it=N=>{if(N.key==="Escape"){N.preventDefault(),Je(!1);return}(N.ctrlKey||N.metaKey)&&!N.target.closest("input,select")&&N.key.toLowerCase()==="z"&&(N.preventDefault(),N.stopImmediatePropagation(),N.shiftKey?G(m,p):G(p,m))};window.addEventListener("keydown",it,!0),a("[data-cmd=close]").onclick=()=>Je(!1),a("[data-cmd=cancel]").onclick=()=>Je(!1);let Ye=()=>{if(P?.recipe.resolution===d.resolution&&P.data.length<=s)return P.data;for(let N of[d.resolution,256,128].filter((z,ce,R)=>z<=d.resolution&&R.indexOf(z)===ce)){let z=document.createElement("canvas");z.width=z.height=N,z.getContext("2d").drawImage(l,0,0,N,N);for(let ce of[.85,.72,.58]){let R=z.toDataURL("image/webp",ce);if(R.length<=s)return R}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},q=qS(),U=a("[data-field=shelf]");function ne(N=""){U.replaceChildren(new Option("Choisir une texture",""),...q.map(ce=>new Option(ce.name,ce.id))),U.value=N;let z=!!U.value;a("[data-cmd=shelf-load]").disabled=!z,a("[data-cmd=shelf-remove]").disabled=!z}function ue(N,z){try{localStorage.setItem(e0,JSON.stringify(N))}catch{return M("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return q.splice(0,q.length,...N),ne(z),!0}return U.onchange=()=>ne(U.value),a("[data-cmd=shelf-save]").onclick=()=>{let N=jg.find(([ce])=>ce===d.pattern)?.[1]??"Texture",z=prompt("Nom de la texture",N)?.trim().slice(0,50);if(z)try{let ce={id:crypto.randomUUID(),name:z,data:Ye()},{pattern:R,base:te,scale:K,seed:j,resolution:ee}=d;ce.recipe={pattern:R,base:te,scale:K,seed:j,resolution:ee},ue([...q,ce],ce.id)&&M("Texture disponible dans les deux ateliers.")}catch(ce){M(ce.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let N=q.find(z=>z.id===U.value);if(!(!N||v&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let z=pf();await Kg(N.data,z),V(),g.clearRect(0,0,512,512),g.drawImage(z,0,0),x.clearRect(0,0,512,512),Object.assign(d,N.recipe),P=N;for(let ce of["base","seed","resolution"])a("[data-field="+ce+"]").value=d[ce];L(),M("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(z){M(z.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{ue(q.filter(N=>N.id!==U.value),"")&&M("Texture retir\xE9e de la biblioth\xE8que.")},ne(),a("[data-cmd=apply]").onclick=async()=>{let N=a("[data-cmd=apply]");N.disabled=!0;try{let z=Ye();await r(z),v=!1,Je(!0)}catch(z){M(z.message||"Impossible d\u2019appliquer la texture.")}finally{N.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Jg(u,d),L(),i&&Kg(i,u).then(L).catch(()=>M("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>Je(!1)}}var jS=`
.forge-sketch-backdrop{position:fixed;inset:0;z-index:2100;background:#090f14e0;display:grid;place-items:center;padding:9px}
.forge-sketch{width:min(1120px,99vw);height:min(790px,97dvh);display:flex;flex-direction:column;
background:#222b32;border:1px solid #728390;border-radius:7px;box-shadow:0 25px 80px #000e;
color:#ecedef;font:12px/1.35 system-ui,sans-serif;overflow:hidden}
.forge-sketch *{box-sizing:border-box}
.forge-sketch header,.forge-sketch footer{background:#303940;padding:9px 13px;border-bottom:1px solid #4a5863;
display:flex;align-items:center;justify-content:space-between;gap:10px}
.forge-sketch header strong{font-size:14px;letter-spacing:.035em}
.forge-sketch header small{color:#e9b47b;font-size:10px;display:block;letter-spacing:.15em}
.forge-sketch button,.forge-sketch select,.forge-sketch input{font:inherit}
.forge-sketch button{border:1px solid #526270;background:#384751;border-radius:4px;min-height:28px;
padding:5px 9px;cursor:pointer;color:#ecedef}
.forge-sketch button:hover{background:#4e6069}
.forge-sketch button[aria-pressed=true]{border-color:#dcac71;background:#725037}
.forge-sketch button:disabled{opacity:.4;cursor:default}
.forge-sketch select,.forge-sketch input{background:#1a252d;border:1px solid #5a6873;color:#ecedef;
border-radius:4px;min-height:28px;padding:4px 6px;width:100%}
.forge-sketch input[type=checkbox]{width:auto;min-height:0;accent-color:#d5a36e}
.forge-sketch input[type=range]{padding:0;min-height:22px}
.forge-sketch label{display:flex;flex-direction:column;gap:4px;color:#c2d0d8}
.forge-sketch .sketch-body{flex:1;min-height:0;display:grid;
grid-template-columns:minmax(0,1fr) minmax(230px,32%) 217px;gap:8px;padding:9px;overflow:hidden}
.forge-sketch .sketch-panel{min-width:0;min-height:0;display:flex;flex-direction:column;
background:#1b272f;border:1px solid #40515d;border-radius:5px;overflow:hidden}
.forge-sketch .sketch-panel h3{margin:0;padding:8px 10px;background:#2b3943;font-size:11px;
letter-spacing:.08em;border-bottom:1px solid #4a5b67;color:#f2c28f}
.forge-sketch .sketch-canvas-wrap{display:flex;align-items:center;justify-content:center;
flex:1;min-height:0;min-width:0;padding:9px}
.forge-sketch #sketch-2d{display:block;max-width:100%;max-height:100%;width:auto;height:auto;
aspect-ratio:1;touch-action:none;cursor:crosshair;background:#18252b;border:1px solid #4f626d;border-radius:3px}
.forge-sketch #sketch-preview{width:100%;height:100%;touch-action:none}
.forge-sketch .sketch-tools{display:flex;gap:5px;padding:6px 9px;border-bottom:1px solid #43525e;flex-wrap:wrap}
.forge-sketch .sketch-tools button{flex:1;min-width:57px;font-size:11px}
.forge-sketch .sketch-help{color:#92aab6;font-size:10px;padding:5px 9px;min-height:25px}
.forge-sketch .sketch-options{overflow-y:auto;min-height:0;padding:10px;display:flex;flex-direction:column;gap:11px;scrollbar-width:thin}
.forge-sketch .sketch-options strong{font-size:11px;color:#f2c28f;letter-spacing:.06em}
.forge-sketch .sketch-row{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.forge-sketch .sketch-check{flex-direction:row;gap:7px;align-items:center}
.forge-sketch .sketch-error{font-size:11px;color:#ffb8a0;min-height:29px}
.forge-sketch footer{border-bottom:0;border-top:1px solid #4a5863;min-height:48px}
.forge-sketch footer span{font-size:10px;color:#abc2ca}
.forge-sketch .sketch-actions{display:flex;gap:6px}
.forge-sketch .sketch-apply{background:#b78146;color:#fff6e9;font-weight:700;border-color:#e2ad74}
.forge-sketch .sketch-apply:hover{background:#cf9253}
.forge-sketch [hidden]{display:none!important}
@media(max-width:850px){.forge-sketch{height:97dvh}
.forge-sketch .sketch-body{grid-template-columns:minmax(0,1fr) 180px;grid-template-rows:minmax(150px,1fr) 190px}
.forge-sketch .sketch-panel:nth-child(2){grid-column:1;grid-row:2}
.forge-sketch .sketch-options{grid-column:2;grid-row:1/span 2}
.forge-sketch footer span{display:none}}
@media(max-width:490px){.forge-sketch .sketch-body{grid-template-columns:1fr;overflow-y:auto;
grid-template-rows:320px 220px auto}
.forge-sketch .sketch-options{grid-column:1;grid-row:3;overflow:visible}}
`;function JS(){if(document.querySelector("#forge-sketch-css"))return;let i=document.createElement("style");i.id="forge-sketch-css",i.textContent=jS,document.head.append(i)}var mf=i=>structuredClone(i),Er=(i,e,t)=>Math.min(t,Math.max(e,i)),n0=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function KS(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s,o=Er(r?((i[0]-e[0])*n+(i[1]-e[1])*s)/r:0,0,1);return n0(i,[e[0]+o*n,e[1]+o*s])}function i0({initial:i=To(),name:e="Forme libre",onApply:t=()=>{}}={}){JS();let n=document.createElement("div");n.className="forge-sketch-backdrop",n.innerHTML=`
  <section class="forge-sketch" role="dialog" aria-modal="true" aria-labelledby="sketch-title">
    <header><div><small>GORILLA / FOUNDRY \xB7 SHAPE LAB</small><strong id="sketch-title">Dessiner une forme</strong></div>
    <div style="display:flex;gap:5px"><button data-act="undo" title="Annuler \xB7 Ctrl Z">\u21B6</button>
    <button data-act="redo" title="R\xE9tablir \xB7 Ctrl Maj Z">\u21B7</button>
    <button data-act="close">\u2715</button></div></header>
    <div class="sketch-body">
      <section class="sketch-panel">
        <h3>01 / CONTOUR \xC0 LA SOURIS</h3>
        <div class="sketch-tools">
        <button data-tool="move" aria-pressed="true">D\xE9placer</button>
        <button data-tool="add" aria-pressed="false">+ Point</button>
        <button data-tool="remove" aria-pressed="false">\u2212 Point</button>
        </div>
        <div class="sketch-canvas-wrap"><canvas id="sketch-2d" width="600" height="600" aria-label="Points du contour \xE0 d\xE9placer ou ajouter"></canvas></div>
        <div class="sketch-help">Glisse un point \xB7 Double-clic sur un bord : ajouter \xB7 Suppr : retirer un point</div>
      </section>
      <section class="sketch-panel">
        <h3>02 / APER\xC7U DU VOLUME</h3>
        <div style="flex:1;min-height:0"><canvas id="sketch-preview" aria-label="Aper\xE7u 3D de la forme"></canvas></div>
        <div class="sketch-help">Glisse pour tourner \xB7 Molette pour zoomer</div>
      </section>
      <section class="sketch-options">
        <strong>TYPE DE FORME</strong>
        <label>Construction<select data-field="mode"><option value="extrude">Contour \u2192 Extrusion</option>
          <option value="lathe">Profil \u2192 R\xE9volution 360\xB0</option></select></label>
        <label>Commencer avec<select data-field="preset">
          <option value="">Forme en cours</option>
          <option value="shield">Bouclier sym\xE9trique</option>
          <option value="panel">Plaque rectangulaire</option>
          <option value="angle">\xC9querre / forme en L</option>
          <option value="arch">Contour arrondi</option>
          <option value="bottle">Bouteille / vase</option>
          <option value="bowl">Bol / r\xE9cipient</option>
        </select></label>
        <label class="sketch-check"><input type="checkbox" data-field="symmetric"> Sym\xE9trie X (dessiner la moiti\xE9)</label>
        <strong>VOLUME ET FINITION</strong>
        <label data-depth>Profondeur d\u2019extrusion (m)<input data-field="depth" type="range" min=".025" max="1.5" step=".025"></label>
        <label data-bevel>Arrondir les ar\xEAtes<input data-field="bevel" type="range" min="0" max=".15" step=".005"></label>
        <label data-segments>Segments de r\xE9volution<input data-field="segments" type="number" min="3" max="128" step="1"></label>
        <output data-triangles aria-live="polite"></output>
        <strong>PR\xC9CISION</strong>
        <label class="sketch-check"><input data-field="snap" type="checkbox" checked> Grille aimant\xE9e</label>
        <label>Pas de grille<select data-field="step"><option value=".025">2,5 cm</option>
          <option value=".05" selected>5 cm</option><option value=".1">10 cm</option></select></label>
        <button data-act="reset">Recommencer avec ce pr\xE9r\xE9glage</button>
        <div class="sketch-error" data-error></div>
      </section>
    </div>
    <footer><span>Contour modifiable \xB7 profondeur / arrondi / tour \xB7 enregistr\xE9 dans le mod\xE8le</span>
    <div class="sketch-actions"><button data-act="cancel">Annuler</button>
    <button class="sketch-apply" data-act="apply">Utiliser cette forme</button></div></footer>
  </section>`,document.body.append(n);let s=U=>n.querySelector(U);s("#sketch-title").textContent="Fa\xE7onner \xB7 "+e;let r=Si(i),o=0,a="move",l=!1,c=null,u=!1,h=null,d=null,f=null,g=[],x=[],p=600,m=p/2,v=p/2.75,b=s("#sketch-2d"),y=b.getContext("2d"),T=new oi,A=new Qt(44,1,.01,30);T.background=new Ge("#1b2b34"),T.add(new Qi("#e3f7ff","#314653",2));let P=new es("#ffd4a9",2.5);P.position.set(3,4,6),T.add(P),A.position.set(1.5,1.25,2.1),A.lookAt(0,0,0);let D=new wa(.7);T.add(D);let w=new tn({color:"#89c2cb",metalness:.25,roughness:.52,side:qt});try{let U=s("#sketch-preview");h=new bo({canvas:U,antialias:!0}),h.setPixelRatio(Math.min(1.5,devicePixelRatio)),d=new As(A,U),d.enablePan=!1,d.minDistance=.5,d.maxDistance=7,d.addEventListener("change",()=>h.render(T,A));let ne=new ResizeObserver(()=>{if(!U.isConnected)return;let ue=U.getBoundingClientRect();A.aspect=Math.max(.1,ue.width/Math.max(1,ue.height)),A.updateProjectionMatrix(),h.setSize(Math.max(1,ue.width),Math.max(1,ue.height),!1),h.render(T,A)});ne.observe(U),n._disposeObserver=()=>ne.disconnect()}catch{s("[data-error]").textContent="Aper\xE7u WebGL indisponible ; tu peux dessiner en 2D."}function M([U,ne]){return[m+U*v,m-ne*v]}function L(U){let ne=b.getBoundingClientRect(),ue=((U.clientX-ne.left)/ne.width*p-m)/v,N=(m-(U.clientY-ne.top)/ne.height*p)/v;if(r.mode==="lathe"&&(ue=Math.max(0,ue)),r.symmetric&&(ue=Math.min(0,ue)),s("[data-field=snap]").checked&&!U.altKey){let z=Number(s("[data-field=step]").value)||.05;ue=Math.round(ue/z)*z,N=Math.round(N/z)*z}return[Er(ue,-1.35,1.35),Er(N,-1.35,1.35)]}function O(U){let ne=16/v,ue=-1,N=ne;return r.points.forEach((z,ce)=>{let R=n0(U,z);R<N&&(ue=ce,N=R)}),ue}function X(U){let ne=r.points,N=r.mode==="extrude"&&!r.symmetric?ne.length:ne.length-1,z=-1,ce=16/v;for(let R=0;R<N;R++){let te=KS(U,ne[R],ne[(R+1)%ne.length]);te<ce&&(z=R,ce=te)}return z}function V(){g.push(mf(r)),g.length>36&&g.shift(),x.length=0,u=!0,s("[data-act=undo]").disabled=!1,s("[data-act=redo]").disabled=!0}function G(U,ne){U.length&&(ne.push(mf(r)),r=U.pop(),o=Er(o,0,r.points.length-1),u=!0,ye(),W(),s("[data-act=undo]").disabled=!g.length,s("[data-act=redo]").disabled=!x.length)}function W(){y.clearRect(0,0,p,p),y.fillStyle="#15232d",y.fillRect(0,0,p,p);let ne=((Number(s("[data-field=step]").value)||.05)<.05,.1);y.lineWidth=1;for(let ce=-1.4;ce<=1.4;ce+=ne){let R=M([ce,0])[0],te=M([0,ce])[1];y.strokeStyle=Math.abs(ce)<1e-4?"#d8a26677":"#47627148",y.beginPath(),y.moveTo(R,0),y.lineTo(R,p),y.stroke(),y.beginPath(),y.moveTo(0,te),y.lineTo(p,te),y.stroke()}let ue=r.mode==="extrude"?ka(r):r.points,N=(ce,R)=>{ce.length&&(y.beginPath(),y.moveTo(...M(ce[0])),ce.slice(1).forEach(te=>y.lineTo(...M(te))),R&&y.closePath())};r.mode==="extrude"?(N(ue,!0),y.fillStyle="#65b9c733",y.fill(),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke()):(N(ue,!1),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke(),y.strokeStyle="#d3a261aa",y.setLineDash([8,6]),y.beginPath(),y.moveTo(m,30),y.lineTo(m,p-30),y.stroke(),y.setLineDash([])),r.symmetric&&(y.lineWidth=2,y.setLineDash([5,4]),y.strokeStyle="#daa96e99",y.beginPath(),y.moveTo(m,10),y.lineTo(m,p-10),y.stroke(),y.setLineDash([])),r.points.forEach((ce,R)=>{let[te,K]=M(ce);y.beginPath(),y.arc(te,K,R===o?8:6,0,Math.PI*2),y.fillStyle=R===o?"#f5c486":"#e3f0ef",y.fill(),y.strokeStyle="#344b58",y.lineWidth=2,y.stroke()});let z=xu(r);s("[data-error]").textContent=z??"",s("[data-act=apply]").disabled=!!z}function se(){try{let U=yu(r);if(s("[data-triangles]").textContent=((U.index?.count??U.attributes.position.count)/3).toLocaleString("fr-FR")+" triangles",!h){U.dispose();return}f&&(T.remove(f),f.geometry.dispose()),f=new ve(U,w),T.add(f),h.render(T,A)}catch{s("[data-triangles]").textContent="\u2014",h?.render(T,A)}}let Y=!1;function re(){Y||(Y=!0,requestAnimationFrame(()=>{Y=!1,n.isConnected&&se()}))}function ye(){s("[data-field=mode]").value=r.mode,s("[data-field=symmetric]").checked=r.symmetric,s("[data-field=symmetric]").disabled=r.mode==="lathe",s("[data-field=depth]").value=r.depth,s("[data-field=bevel]").value=r.bevel,s("[data-field=segments]").value=r.segments,s("[data-depth]").hidden=r.mode==="lathe",s("[data-bevel]").hidden=r.mode==="lathe",s("[data-segments]").hidden=r.mode!=="lathe"}function Se(U){V(),r=Si(U==="lathe"?ui.bottle:ui.shield),o=0,ye(),W(),re()}function Be(U){ui[U]&&(V(),r=Si(ui[U]),o=0,ye(),W(),re())}function Je(U){o<0||(r.points[o]=U,W(),re())}b.addEventListener("pointerdown",U=>{if(U.button!==0)return;U.preventDefault();let ne=L(U),ue=O(ne);if(a==="remove"){ue>=0&&r.points.length>3&&(V(),r.points.splice(ue,1),o=Er(ue,0,r.points.length-1),W(),re());return}if(a==="add"&&r.points.length<za){V();let N=X(ne);o=N<0?r.points.length:N+1,r.points.splice(o,0,ne),W(),re();return}ue<0||(o=ue,V(),c=U.pointerId,l=!0,b.setPointerCapture(U.pointerId),W())}),b.addEventListener("pointermove",U=>{!l||c!==U.pointerId||Je(L(U))});let it=U=>{U.pointerId===c&&(l=!1,c=null,b.hasPointerCapture(U.pointerId)&&b.releasePointerCapture(U.pointerId))};b.addEventListener("pointerup",it),b.addEventListener("pointercancel",it),b.addEventListener("dblclick",U=>{if(r.points.length>=za)return;let ne=L(U),ue=X(ne);ue<0||(V(),o=ue+1,r.points.splice(o,0,ne),W(),re())}),b.addEventListener("contextmenu",U=>{U.preventDefault();let ne=O(L(U));ne<0||r.points.length<=3||(V(),r.points.splice(ne,1),o=Er(ne,0,r.points.length-1),W(),re())});for(let U of n.querySelectorAll("[data-tool]"))U.onclick=()=>{a=U.dataset.tool,n.querySelectorAll("[data-tool]").forEach(ne=>ne.setAttribute("aria-pressed",String(ne===U)))};s("[data-field=mode]").onchange=U=>Se(U.target.value),s("[data-field=preset]").onchange=U=>{Be(U.target.value),U.target.value=""},s("[data-field=symmetric]").onchange=U=>{if(V(),U.target.checked){let ne=r.points.filter(([ue])=>ue<=.005).sort((ue,N)=>ue[1]-N[1]);r.points=ne.length>=3?ne:mf(ui.shield.points),r.points[0][0]<-.001&&r.points.unshift([0,r.points[0][1]]),r.points.at(-1)[0]<-.001&&r.points.push([0,r.points.at(-1)[1]]),r.symmetric=!0}else r.points=ka(r),r.symmetric=!1;o=0,ye(),W(),re()};for(let U of["depth","bevel","segments"])s("[data-field="+U+"]").oninput=ne=>{!l&&ne.target.dataset.started!=="1"&&(V(),ne.target.dataset.started="1"),r[U]=Number(ne.target.value),W(),re()},s("[data-field="+U+"]").onchange=ne=>{ne.target.dataset.started="0",U==="segments"&&(r.segments=Si(r).segments,ne.target.value=r.segments)};s("[data-field=step]").onchange=W,s("[data-field=snap]").onchange=W,s("[data-act=reset]").onclick=()=>{let U=r.mode==="lathe"?"bottle":"shield";Be(U)},s("[data-act=undo]").onclick=()=>G(g,x),s("[data-act=redo]").onclick=()=>G(x,g);let Ye=U=>{!U&&u&&!confirm("Fermer sans utiliser cette forme ?")||(window.removeEventListener("keydown",q,!0),n._disposeObserver?.(),d?.dispose(),f&&f.geometry.dispose(),w.dispose(),h?.dispose(),n.remove())},q=U=>{if(U.key==="Escape"){U.preventDefault(),U.stopImmediatePropagation(),Ye(!1);return}if((U.ctrlKey||U.metaKey)&&U.key.toLowerCase()==="z"){U.preventDefault(),U.stopImmediatePropagation(),U.shiftKey?G(x,g):G(g,x);return}U.target.closest("input,select,button")||(U.key==="Delete"||U.key==="Backspace")&&(r.points.length>3&&(V(),r.points.splice(o,1),o=Er(o,0,r.points.length-1),W(),re()),U.preventDefault(),U.stopImmediatePropagation())};return window.addEventListener("keydown",q,!0),s("[data-act=close]").onclick=()=>Ye(!1),s("[data-act=cancel]").onclick=()=>Ye(!1),s("[data-act=apply]").onclick=()=>{let U=xu(r);if(U){s("[data-error]").textContent=U;return}try{t(Si(r)),u=!1,Ye(!0)}catch(ne){s("[data-error]").textContent=ne.message||"Forme invalide."}},s("[data-act=undo]").disabled=!0,s("[data-act=redo]").disabled=!0,ye(),W(),re(),{close:()=>Ye(!1)}}function s0(i,e,t){let n=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>i?.includes(s.toUpperCase())&&n[s]<-1e-6?-1:1)}function r0(i,e,t,n,s){let r=s?new _:n.clone().multiply(new _(1,1,1).sub(t.scale));return i.map(o=>{let a=new dt().setFromEuler(new en(...o.rotation.map(ke.degToRad),"ZYX")),l=o.scale.map((h,d)=>h*new _().setComponent(d,1).applyQuaternion(a).multiply(t.scale).length()),c=new _().fromArray(o.position).sub(e).multiply(t.scale).add(r).applyQuaternion(t.quaternion).add(t.position).toArray();a.premultiply(t.quaternion);let u=new en().setFromQuaternion(a,"ZYX");return{position:c,rotation:[u.x,u.y,u.z].map(ke.radToDeg),scale:l}})}function o0(i,e,t,n,s,r){return(r?new _:t.clone().multiply(n.clone().sub(s))).applyQuaternion(e).add(i)}var C=i=>document.getElementById(i),pn=C("preview-canvas"),$S=["X","Y","Z"],u0={position:{min:-3,max:3,step:.01,label:"POSITION / M"},rotation:{min:-360,max:360,step:1,label:"ROTATION / \xB0"},scale:{min:.02,max:4,step:.01,label:"DIMENSIONS / \xC9CHELLE"}},tt=Ag(localStorage),xf=Mg(),bf="gorilla-foundry-draft-v1",Oo=!1,vt=tt.models[0]?.id??null,Jt=0,jt=new Set,Io=null,tl=!1;try{let i=localStorage.getItem(bf);if(i){let e=Oi(JSON.parse(i));Object.assign(tt,e),vt=tt.models[0]?.id??null,Oo=!0}}catch{}var Ln=null,Gt=null,lt=null,Gn="select",Sn=!1,Ro=!1,ki=null,yf=0;var as=null,Fs=[],nl=[],QS=48,Dn=new sn,zi=new Bt,ls=new sn,nn=null,ks=new Map,Po=new Bt,Bs=new sn,cs=!1,ew=new li(1,10,6),Mf={},ku=new Li(new ft().setAttribute("position",new Ce(6*(Object.keys(Cs).length-1),3)),new Jn({color:"#49d3ec",depthTest:!1,depthWrite:!1,transparent:!0,opacity:.85}));ku.frustumCulled=!1;ku.renderOrder=9;Bs.add(ku);for(let i of Object.keys(Cs)){let e=new ve(ew,new fn({color:"#55d8ee",depthTest:!1,depthWrite:!1}));e.renderOrder=10,e.userData.avatarJoint=i,Bs.add(e),Mf[i]=e}var Vs=new oi;Bs.visible=!1;Vs.add(Po,Bs);Vs.background=new Ge("#152229");var mn=new Qt(45,1,.005,110),Sf=new cr(8,32,"#64818a","#334b54");Sf.position.y=-.002;var Lo=new Sa(new Kt,"#eeb578");Lo.visible=!1;var Pn=new ve(new rt(1,1,1),new fn({color:"#ffb55e",wireframe:!0,transparent:!0,opacity:.92,depthTest:!1}));Pn.name="Hitbox de collision";Pn.renderOrder=8;Pn.visible=!1;var Nu=new sn;Vs.add(Nu);var tw=Lg();Vs.add(zi,Dn,ls,Sf,Lo,Pn,new Qi("#ecf7ff","#4c5960",2.4));var h0=new es("#ffe5c2",2.05);h0.position.set(-2.5,4,-3);Vs.add(h0);mn.position.set(1.8,1.4,-2.4);mn.lookAt(0,0,0);var Hn=ke.clamp,Ve=()=>tt.models.find(i=>i.id===vt),pt=()=>Ve()?.parts[Jt],us=()=>jt.size?[...jt]:pt()?[Jt]:[],wf=()=>us().map(i=>Dn.children[i]).filter(Boolean),Tf=()=>wf().filter(i=>i.visible),d0="gorilla-foundry-visibility-v1",wn={active:{},masks:{},references:[]};try{let i=JSON.parse(localStorage.getItem(d0)||"null");i&&typeof i=="object"&&i.masks&&i.active&&(wn={active:i.active,masks:i.masks,references:Array.isArray(i.references)?i.references:[],lastModel:typeof i.lastModel=="string"?i.lastModel:null})}catch{}tt.models.some(i=>i.id===wn.lastModel)&&(vt=wn.lastModel);var il=new URLSearchParams(location.search),_f=il.get("model"),f0=il.get("from")==="cards",a0=il.get("asset"),Ef=_f;tt.models.some(i=>i.id===_f)&&(vt=_f);var zs=new Set(wn.references);function Bo(){try{wn.references=[...zs],localStorage.setItem(d0,JSON.stringify(wn))}catch{}}function Vu(){return wn.active[vt]||"all"}function Fu(){let i=wn.masks[vt]?.[Vu()]||[];return new Set(Array.isArray(i)?i.filter(e=>Number.isInteger(e)&&e>=0):[])}function Af(i){vt&&(wn.masks[vt]||(wn.masks[vt]={}),wn.masks[vt][Vu()]=[...i].sort((e,t)=>e-t),Bo(),Vi(),kt())}function nw(){vt&&delete wn.masks[vt],Bo()}var Cf=()=>({data:structuredClone(tt),modelId:vt,partIndex:Jt,multi:[...jt]});function Et(i,e=!1){C("status").textContent=i,C("status").dataset.error=String(e)}function $e(){Oo=!0,Et("Brouillon local \xB7 non publi\xE9 dans le jeu"),clearTimeout(yf),yf=setTimeout(()=>{try{localStorage.setItem(bf,JSON.stringify(Oi(tt)))}catch{Et("Brouillon non enregistr\xE9 : exporte le JSON.",!0)}},480)}function sl(){try{let i=Oi(tt);return localStorage.setItem(Hd,JSON.stringify(i)),Object.assign(tt,i),localStorage.removeItem(bf),clearTimeout(yf),Oo=!1,Ti(),Et("Enregistr\xE9 \xB7 disponible dans Gorilla Lab et les cartes"),!0}catch{return Et("Enregistrement impossible : exporte le JSON.",!0),!1}}function yt(){let i=Cf(),e=Fs.at(-1);(!e||JSON.stringify(e)!==JSON.stringify(i))&&(Fs.push(i),Fs.length>QS&&Fs.shift()),nl.length=0,Rf()}function Rf(){C("undo-action").disabled=!Fs.length,C("redo-action").disabled=!nl.length}function p0(i){Object.assign(tt,structuredClone(i.data)),vt=i.modelId,Jt=i.partIndex,jt=new Set(i.multi??[]),$e(),Ti(),Rf()}function m0(){if(!Fs.length)return;let i=Fs.pop();nl.push(Cf()),p0(i),Et("Annul\xE9 \xB7 Ctrl Z")}function vf(){if(!nl.length)return;let i=nl.pop();Fs.push(Cf()),p0(i),Et("R\xE9tabli \xB7 Ctrl Maj Z")}function iw(i){as?.target===i&&as.recorded||((!as||as.target!==i)&&(as={target:i,recorded:!1}),as.recorded||(yt(),as.recorded=!0))}document.addEventListener("focusout",i=>{as?.target===i.target&&(as=null)});function di(i){i&&document.activeElement===i?iw(i):yt()}function ni(i,e,t){i.replaceChildren(...e.map(([n,s])=>new Option(s,n))),i.value=t??""}function rl(){let i=tt.models.map(r=>[r.id,r.name||"Sans nom"]);ni(C("models"),i.length?i:[["","Aucun mod\xE8le"]],vt),C("models").disabled=!i.length;let e=Ve();C("model-title").disabled=!e,C("delete-model").disabled=!e,document.activeElement!==C("model-title")&&(C("model-title").value=e?.name??""),C("duplicate-model").disabled=!e||tt.models.length>=Dt.models,C("model-count").textContent=tt.models.length+" / "+Dt.models,ni(C("avatar"),[["","Singe d\u2019origine"],...tt.models.filter(Na).map(r=>[r.id,r.name+(r.kind==="avatar"?"":" \xB7 t\xEAte")])],tt.avatarId);let t=C("model-list"),n=t.scrollTop,s=tt.models.map(r=>{let o=document.createElement("div");o.className="model-entry-wrap";let a=document.createElement("button");a.type="button",a.className="model-entry",a.setAttribute("aria-pressed",String(r.id===vt)),a.title="\xC9diter "+r.name,a.textContent=r.name||"Sans nom";let l=document.createElement("small");l.textContent=" \xB7 "+r.parts.length+" p.",a.append(l),a.onclick=()=>C0(r.id);let c=document.createElement("button");return c.type="button",c.className="model-visibility",c.disabled=r.id===vt||!r.parts.length,c.setAttribute("aria-pressed",String(zs.has(r.id))),c.textContent=r.id===vt?"\u25CF":zs.has(r.id)?"\u25C9":"\u25CE",c.title=r.id===vt?"Mod\xE8le actif":"Afficher/masquer comme r\xE9f\xE9rence 3D sans modifier ce mod\xE8le",c.setAttribute("aria-label",c.title+" : "+r.name),c.onclick=()=>aw(r.id),o.append(a,c),o});t.replaceChildren(...s),t.scrollTop=n}function Vi(){let i=Ve()?.parts??[];C("part-count").textContent=i.length+" / "+Dt.parts,C("add-part").disabled=i.length>=Dt.parts||!Ve();let e=us(),t=new Set(e.map(r=>i[r]?.group).filter(Boolean));C("duplicate-part").disabled=!e.length||i.length+e.length>Dt.parts,C("group-parts").disabled=e.length<2||t.size===1&&e.every(r=>i[r]?.group),C("ungroup-parts").disabled=!t.size,C("selection-count").textContent=e.length+" s\xE9lectionn\xE9e"+(e.length===1?"":"s");let n=Fu();C("mask-set").value=Vu(),C("solo-part").disabled=!i.length||!pt(),C("show-all-parts").disabled=!n.size;let s=C("part-list").scrollTop;C("part-list").replaceChildren(...i.map((r,o)=>{let a=document.createElement("div");a.className="part-row";let l=document.createElement("button");l.type="button",l.className="part-entry",l.setAttribute("aria-pressed",String(e.includes(o))),l.title=r.shape+" \xB7 "+r.surface;let c=document.createElement("span");c.textContent=String(o+1).padStart(2,"0")+"  "+r.name+(r.group?" \xB7 G"+r.group:"");let u=document.createElement("span");u.className="swatch",u.style.setProperty("--swatch",r.color),l.append(c,u),n.has(o)&&(l.style.opacity=".48"),l.onclick=d=>Ou(o,d.shiftKey||d.ctrlKey||d.metaKey);let h=document.createElement("button");return h.type="button",h.className="part-visibility",h.textContent=n.has(o)?"\u25CC":"\u25C9",h.setAttribute("aria-pressed",String(!n.has(o))),h.title=n.has(o)?"Afficher cette pi\xE8ce dans la vue":"Masquer cette pi\xE8ce dans la vue",h.setAttribute("aria-label",h.title+" : "+r.name),h.onclick=()=>{let d=Fu();d.has(o)?d.delete(o):d.add(o),Af(d)},a.append(l,h),a})),C("part-list").scrollTop=s}function zt(){let i=Ve(),e=pt();if(C("model-details").hidden=!i,C("part-inspector").hidden=!e,C("part-empty").hidden=!!e||["settings","collision","publish","avatar","animation"].includes(C("model-inspector").dataset.tab),i){document.activeElement!==C("model-name")&&(C("model-name").value=i.name),C("model-kind").value=i.kind||"prop",C("model-kind").disabled=i.kind==="avatar",C("in-game").disabled=i.kind==="avatar";let t=qa(i);for(let r of["gravity","bounce"])document.activeElement!==C("model-"+r)&&(C("model-"+r).value=t[r]);C("in-game").checked=i.inGame,C("drivable").checked=i.properties.drivable===!0,C("drivable").disabled=i.kind!=="prop";let n="./editor.html?model="+encodeURIComponent(i.id);for(let r of["send-to-map","quick-send-to-map"])C(r).href=n;let s=f0&&i.id===Ef;C("go-cards").href=s?"./editor.html?applyModel="+encodeURIComponent(i.id):"./editor.html",C("go-cards").textContent=s?"Appliquer \xE0 la pi\xE8ce et revenir":"Cartes \u2192";for(let r of Object.keys(Ya))C(r).checked=!!i.properties[r]}if(C("model-inspector").dataset.tab==="collision"&&Gs(),e){for(let s of["name","shape","color","surface"])C("part-"+s).value=e[s];let t=Ao(e),n=br[e.finish]??br.original;C("part-finish").value=e.finish??"original",C("part-finish-info").textContent="Rugosit\xE9 "+n.roughness+" \xB7 m\xE9tallicit\xE9 "+n.metalness;for(let[s,r]of[["projection",t.projection],["repeat",t.repeat],["angle",t.angle],["u",t.offset[0]],["v",t.offset[1]]]){let o=C("part-"+s);document.activeElement!==o&&(o.value=r)}C("part-shape").disabled=e.shape==="asset";for(let s of Object.keys(u0))T0[s].forEach((r,o)=>{document.activeElement!==r&&(r.value=Number(e[s][o].toFixed(3)))})}for(let t of document.querySelectorAll(".tab"))t.setAttribute("aria-pressed",String(t.dataset.panel===C("model-inspector").dataset.tab));C("mirror").disabled=!e||Ve().parts.length>=Dt.parts,C("drop-to-grid").disabled=!e,C("focus-part").disabled=!e,C("reset-part").disabled=!e,C("custom-shape-controls").hidden=e?.shape!=="custom",C("edit-profile").disabled=!e||e.shape!=="custom",C("part-paint").disabled=!e,C("part-texture-clear").disabled=!e?.texture,C("part-texture-status").textContent=e?.texture?"Texture peinte appliqu\xE9e \xE0 cette pi\xE8ce.":"Aucune texture personnalis\xE9e. La finition pr\xE9-d\xE9finie reste active.",C("center-part").disabled=!e,C("delete-part").disabled=!e,C("viewport-title").textContent=i?"ATELIER / "+i.name.toUpperCase():"ESPACE DE CONSTRUCTION / 3D";for(let t of["quick-send-to-map","send-to-map"])C(t).setAttribute("aria-disabled",String(!i?.parts.length||i.kind==="avatar"));C("avatar-new").disabled=tt.models.length>=Dt.models,C("avatar-copy").disabled=!i?.parts.length||i.kind==="avatar"||C("avatar-new").disabled,Hs(),v0(),Df(),_0()}function Gs(){let i=Ve(),e=i?.hitbox?.mode==="box"||i?.hitbox?.mode==="custom",t=i?.kind==="structure"&&i.partCollisions===!0;C("part-collisions").disabled=i?.kind!=="structure",C("part-collisions").checked=t,C("whole-hitbox-controls").hidden=t,C("part-zone-controls").hidden=!t,C("part-zone").disabled=!pt(),C("part-zone").value=pt()?.zone??"solid";let n=pt()?.zone==="trigger";if(C("trigger-notice").hidden=!t||!n,n){let d=pt().notice;C("trigger-notice-phase").value=d?.phase??"enter",document.activeElement!==C("trigger-notice-text")&&(C("trigger-notice-text").value=d?.text??""),document.activeElement!==C("trigger-portal")&&(C("trigger-portal").value=pt().portal??"")}if(C("hitbox-auto").setAttribute("aria-pressed",String(!e)),C("hitbox-manual").setAttribute("aria-pressed",String(!!e)),C("hitbox-geometry").hidden=!e,C("hitbox-auto").disabled=C("hitbox-manual").disabled=!i?.parts.length,C("hitbox-shape").disabled=!i?.parts.length,C("hitbox-drag").setAttribute("aria-pressed",String(!!Sn&&Gn==="translate")),C("hitbox-scale").setAttribute("aria-pressed",String(!!Sn&&Gn==="scale")),C("hitbox-rotate").setAttribute("aria-pressed",String(!!Sn&&Gn==="rotate")),!i?.parts.length){C("hitbox-info").textContent="Ajoute une pi\xE8ce pour g\xE9n\xE9rer sa hitbox.";return}let s=i.hitbox?.shape??"box",r=Math.round(i.hitbox?.precision??48);C("hitbox-shape").value!==s&&(C("hitbox-shape").value=s),C("hitbox-precision").value=String(r),C("hitbox-precision-value").textContent=String(r),C("hitbox-precision-wrap").hidden=s==="box",C("hitbox-info").textContent=e?"Hitbox personnalis\xE9e : d\xE9place, tourne et redimensionne la forme orange.":s==="convex"?"Auto : enveloppe convexe calcul\xE9e depuis la g\xE9om\xE9trie du mod\xE8le.":"Auto : collision simple ajust\xE9e aux dimensions du mod\xE8le.";let a=os(i).size.toArray(),l=Math.max(...a),c=a.indexOf(l),u=(s==="sphere"?l:Math.max(...a.filter((d,f)=>f!==c)))/2,h=a.map(d=>d.toFixed(2)).join(" \xD7 ")+" m";if(s==="sphere"?C("hitbox-info").textContent+=" Diam\xE8tre "+(2*u).toFixed(2)+" m.":s==="capsule"?C("hitbox-info").textContent+=" Axe "+["X","Y","Z"][c]+" \xB7 rayon "+u.toFixed(2)+" m \xB7 cylindre "+Math.max(0,l-2*u).toFixed(2)+" m.":C("hitbox-info").textContent+=" "+h+(s==="convex"?" L\u2019enveloppe remplit les creux.":""),!!e)for(let d of["center","size"])for(let f=0;f<3;f++){let g=C("hitbox-"+d+"-"+["x","y","z"][f]);document.activeElement!==g&&(g.value=Number(i.hitbox[d][f].toFixed(3)))}}function fi(){let i=Ve(),e=!!i?.parts.length&&C("model-inspector").dataset.tab==="collision"&&C("hitbox-preview-toggle").checked;for(let n of[...Nu.children])n.geometry.dispose(),n.material.dispose(),Nu.remove(n);let t=e?Ng(i):null;if(Pn.visible=!!(e&&!t),t){let n=os(i).boundsCenter;for(let s of t){let r=new ve(new rt(...s.size),new fn({color:s.mode==="trigger"?"#64dbf0":"#ffb55e",wireframe:!0,depthTest:!1}));r.position.copy(s.center).add(n),r.renderOrder=8,Nu.add(r)}}else if(e){let n=os(i),s=Ug(i);Pn.geometry.dispose(),Pn.geometry=s,Pn.position.copy(n.center),Pn.rotation.set(...n.rotation.toArray().map(ke.degToRad)),Pn.scale.copy(n.size),Pn.material.color.set(i.properties.collidable?"#ffb55e":"#9b9fa5")}lt?.dragging||hs(),Nt()}function g0(i){let e=Ve();if(!e?.parts.length)return;let t=os(e);yt(),e.hitbox=i==="box"?{mode:"custom",shape:C("hitbox-shape").value||"box",center:t.center.toArray(),size:t.size.toArray(),rotation:t.rotation.toArray(),precision:Number(C("hitbox-precision").value)||48}:{mode:"auto",shape:"convex",precision:Number(C("hitbox-precision").value)||48},Sn=i==="box",$e(),Gs(),C("hitbox-preview-toggle").checked=!0,fi(),hi(i==="box"?"scale":"select")}function zo(i){i!=="collision"&&Sn&&(Sn=!1,hi("select")),C("model-inspector").dataset.tab=i,i!=="avatar"&&(ks.clear(),cs=!1),i!=="animation"&&No(),zt(),fi(),hs(),Rr()}for(let i of document.querySelectorAll(".tab"))i.onclick=()=>zo(i.dataset.panel);var Os=0,x0=new _,sw=new _,rw=new dt,y0=new en,If=["closed","open","seconds","travel"],Pf=["x","y","z"];function No(){cancelAnimationFrame(Os),Os=0,C("hinge-preview").value=0,C("hinge-play").textContent="Lire"}var l0=["phase","door","doorState","doorDelay","receiver","light","lightState","lightColor","sound","soundVolume"];function _0(){let i=Ve(),e=pt(),t=e&&i.kind==="structure"&&(e.zone!=="trigger"||i.partCollisions&&i.properties.collidable);if(C("reaction-fields").hidden=!t,C("reaction-note").textContent=t?"Les cibles appartiennent \xE0 la m\xEAme instance du d\xE9cor.":"S\xE9lectionne une pi\xE8ce d\u2019un d\xE9cor. Pour une zone, active les volumes de collision par pi\xE8ce.",!t)return;let n=e.reaction??{},s=(r,o)=>{let a=i.parts.flatMap((c,u)=>o(c)?[[String(u),c.name+" \xB7 "+(u+1)]]:[]),l=i.parts.findIndex(c=>c.actionId&&c.actionId===n[r]);ni(C("reaction-"+r),[["","Aucun"],...a],l<0?"":String(l))};ni(C("reaction-phase"),e.zone==="trigger"?[["enter","Entr\xE9e dans la zone"],["exit","Sortie de la zone"]]:[["use","Interaction avec E"]],n.phase??(e.zone==="trigger"?"enter":"use")),s("door",r=>!!r.hinge),s("light",r=>r.zone!=="trigger"),ni(C("reaction-sound"),[["","Aucun"],...Object.entries(Gd)],n.sound??""),C("reaction-doorState").querySelector("[value=hold]").hidden=e.zone!=="trigger",C("reaction-doorState").value=n.doorState??"open",C("reaction-doorDelay").value=n.doorDelay??1.25,C("reaction-lightState").value=n.lightState??"on",C("reaction-lightColor").value=n.lightColor??"#ffbd54",C("reaction-soundVolume").value=n.soundVolume??.6,C("reaction-receiver").disabled=e.zone==="trigger",C("reaction-receiver").value=n.receiver??""}for(let i of l0)C("reaction-"+i).onchange=()=>{let e=Ve(),t=pt();if(!t||e.kind!=="structure")return;yt();let n=Object.fromEntries(l0.map(r=>[r,C("reaction-"+r).value]));for(let r of["door","light"]){if(n[r]==="")continue;let o=e.parts[Number(n[r])];if(!o){n[r]="";continue}o.actionId??=crypto.randomUUID(),n[r]=o.actionId}n.soundVolume=C("reaction-soundVolume").valueAsNumber,n.doorDelay=C("reaction-doorDelay").valueAsNumber;let s=bu(n,t.zone);s?t.reaction=s:delete t.reaction,$e()};function v0(){let i=pt(),e=Ve(),t=e?.kind==="structure"&&i?.zone!=="trigger"?i?.hinge:null,n=i&&i.zone!=="trigger"&&e.kind!=="avatar";if(C("hinge-fields").hidden=!t,C("hinge-add").hidden=!!t,C("hinge-add").disabled=!n,C("hinge-hint").textContent=t?"Panneau s\xE9lectionn\xE9 : "+i.name:n?"Articule le panneau s\xE9lectionn\xE9. Le mod\xE8le devient un d\xE9cor.":"S\xE9lectionne une pi\xE8ce solide ou traversable du d\xE9cor.",!!t){Pf.forEach((s,r)=>C(`hinge-${s}`).value=t.pivot[r]);for(let s of If)C(`hinge-${s}`).value=t[s]??1;C("hinge-mode").value=t.mode??"pivot",C("hinge-direction").value=t.axis??"y",C("hinge-travel").disabled=!t.mode}}function Lf(){let i=pt();i?.hinge&&(yt(),i.hinge=Da({mode:C("hinge-mode").value,axis:C("hinge-direction").value,pivot:Pf.map(e=>C(`hinge-${e}`).valueAsNumber),...Object.fromEntries(If.map(e=>[e,C(`hinge-${e}`).valueAsNumber]))}),$e(),v0(),Nt())}C("hinge-add").onclick=()=>{let i=pt(),e=Ve();if(!i||e.kind==="avatar"||i.zone==="trigger")return;yt(),e.kind="structure",e.partCollisions=!0;let t=new _(-i.scale[0]/2,0,0).applyEuler(y0.set(...i.rotation.map(ke.degToRad),"ZYX"));i.hinge=Da({pivot:t.add(x0.fromArray(i.position)).toArray()}),No(),$e(),zt(),kt()};C("hinge-remove").onclick=()=>{let i=pt();i?.hinge&&(yt(),delete i.hinge,No(),$e(),zt(),kt())};for(let i of[...Pf,...If])C(`hinge-${i}`).onchange=Lf;C("hinge-preview").oninput=()=>{cancelAnimationFrame(Os),Os=0,C("hinge-play").textContent="Lire",Nt()};C("hinge-play").onclick=()=>{let i=pt()?.hinge;if(!i)return;if(Os){No(),Nt();return}C("hinge-play").textContent="Revenir \xE0 la pose ferm\xE9e";let e=performance.now(),t=n=>{if(pt()?.hinge!==i){No(),Nt();return}let s=Math.min(1,(n-e)/(i.seconds*1e3));C("hinge-preview").value=s,Nt(),Os=s<1?requestAnimationFrame(t):0,Os||(C("hinge-play").textContent="Relire")};Os=requestAnimationFrame(t)};var Ar=0,c0=-1/0,b0={};for(let[i,e]of Object.entries(Pd)){let t=document.createElement("details"),n=document.createElement("summary"),s=document.createElement("div");n.textContent=e.label,s.className="axes";let r=b0[i]={};for(let[o,a,l,c,u]of[["strength","Intensit\xE9",0,e.max,.01],["speed","Vitesse (Hz)",0,8,.05],["scale","Variation spatiale",0,48,.5],["signal","Forme"],...i==="deform"?[]:[["color","Couleur"]]]){let h=document.createElement("label");h.textContent=a;let d=document.createElement(o==="signal"?"select":"input");if(d.id="effect-"+i+"-"+o,o==="signal")for(let[f,g]of[["sine","Sinus"],["triangle","Triangle"],["pulse","Impulsion"],...i==="deform"?[]:[["stars","\xC9toiles"]]])d.add(new Option(g,f));else d.type=o==="color"?"color":"number",d.type==="number"&&(d.min=l,d.max=c,d.step=u);d.onchange=()=>{let f=pt();f?.effect&&(yt(),f.effect=Fa({...f.effect,[i]:{...f.effect[i],[o]:d.type==="number"?d.valueAsNumber:d.value}}),$e(),Df(),kt())},r[o]=d,h.append(d),s.append(h)}t.append(n,s),C("effect-fields").append(t)}function Df(){let i=pt(),e=!!(i&&i.zone!=="trigger"),t=e?i.effect:null;if(C("effect-actions").hidden=!e,C("effect-fields").hidden=!t,C("effect-remove").hidden=!t,C("effect-note").hidden=e,!!t)for(let[n,s]of Object.entries(b0))for(let[r,o]of Object.entries(s))o.value=t[n][r]}function M0(i){let e=pt();!e||e.zone==="trigger"||(yt(),i===null?delete e.effect:e.effect=Fa(i),$e(),Df(),kt())}C("effect-new").onclick=()=>M0({});C("effect-remove").onclick=()=>M0(null);function S0(i){Ar=0,i-c0>=32?(c0=i,Nt()):C("model-inspector").dataset.tab==="animation"&&(Ar=requestAnimationFrame(S0))}C("hinge-mode").onchange=Lf;C("hinge-direction").onchange=Lf;function Nt(){if(ki){ki.requestRender();return}let i=Ve(),e=i?.parts??[],t=C("model-inspector").dataset.tab==="animation"&&i?.kind==="structure";for(let s=0;s<Dn.children.length;s++){let r=Dn.children[s],o=e[s];if(!o||o.zone==="trigger")continue;let a=o.hinge?o:o.group?e.find(h=>h.group===o.group&&h.hinge):null;if(!a||!t&&!r.userData.hingePreview)continue;r.userData.hingePreview=t;let l=x0.fromArray(o.position),c=sw.fromArray(a.hinge.pivot),u=rw.setFromEuler(y0.set(...o.rotation.map(ke.degToRad),"ZYX"));ng(r,c,l,u,a.hinge,t&&e[Jt]===a?+C("hinge-preview").value:0)}gw(),ag(performance.now()*.001),Ln?.render(Vs,mn);let n=C("model-inspector").dataset.tab==="animation"&&e.some(s=>s.effect&&Object.values(s.effect).some(r=>r.strength>0&&r.speed>0));n&&!Ar&&(Ar=requestAnimationFrame(S0)),!n&&Ar&&(cancelAnimationFrame(Ar),Ar=0)}try{Ln=new bo({canvas:pn,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(devicePixelRatio,1.5)),Ln.toneMapping=mc,Gt=new As(mn,pn),Gt.enablePan=!0,Gt.minDistance=.09,Gt.maxDistance=48,Gt.mouseButtons.RIGHT=zn.ROTATE,Gt.mouseButtons.MIDDLE=zn.PAN,Gt.addEventListener("change",Nt),lt=new Pu(mn,pn);let i=lt.getHelper();Vs.add(i),lt.addEventListener("dragging-changed",e=>{Gt.enabled=!e.value,!e.value&&(Io=null,Ro&&(Ro=!1,$e(),kt()))}),lt.addEventListener("mouseDown",()=>{yt(),Ro=!1,Fo=null;let e=lt.object;if(e===Pn||e===Po)return;let t=e===zi?wf():[e],n=new Kt;if(e===zi){for(let o of t)n.expandByObject(o);n.translate(e.position.clone().negate())}else e.geometry.computeBoundingBox(),n.copy(e.geometry.boundingBox);let s=Gn==="scale"?s0(lt.axis,lt.pointStart,lt.worldQuaternionStart):[1,1,1],r=new _;for(let o=0;o<3;o++){let a=s[o]<0||C("negative-scale-face").checked;r.setComponent(o,(a?n.max:n.min).getComponent(o))}Io={position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone(),anchor:r,rawScale:e.scale.clone(),parts:t.map(o=>({mesh:o,data:structuredClone(Ve().parts[Dn.children.indexOf(o)])}))}}),lt.addEventListener("objectChange",()=>{let e=lt.object;if(!(!e||!lt.dragging)){if(e===Po&&nn){let t=C("avatar-joint").value,n=nn.setPivot(t,e.position.toArray());Ve().avatarRig[t].pivot=n,e.position.fromArray(n),Ro=!0,Hs(),Nt();return}if(Sn&&e===Pn&&["box","custom"].includes(Ve()?.hitbox?.mode)){let t=Ve().hitbox;t.center=e.position.toArray().map(n=>Hn(n,-6,6)),t.size=e.scale.toArray().map(n=>Hn(Math.abs(n),.025,12)),t.rotation=[e.rotation.x,e.rotation.y,e.rotation.z].map(n=>Hn(ke.radToDeg(n),-360,360)),e.position.fromArray(t.center),e.scale.fromArray(t.size),Ro=!0,Gs(),Nt();return}Io&&(Io.rawScale.copy(e.scale),w0())}}),pn.addEventListener("pointerdown",gf,!0),pn.addEventListener("pointermove",e=>{tl=e.ctrlKey},!0),window.addEventListener("keydown",gf),window.addEventListener("keyup",gf),new ResizeObserver(()=>{let e=Math.max(1,pn.clientWidth),t=Math.max(1,pn.clientHeight);mn.aspect=e/t,mn.updateProjectionMatrix(),Ln.setSize(e,t,!1),Nt()}).observe(pn)}catch{Et("WebGL indisponible \xB7 \xE9dition num\xE9rique toujours possible.",!0)}function gf(i){tl!==i.ctrlKey&&(tl=i.ctrlKey,lt?.dragging&&Gn==="scale"&&Io&&w0())}function w0(){let i=lt.object,e=Io,t=i===zi,n=Ve().parts,s;if(t){let r={position:i.position,quaternion:i.quaternion,scale:Gn==="scale"?e.rawScale.clone().clampScalar(.001,200):new _(1,1,1)};if(s=r0(e.parts.map(o=>o.data),e.position,r,e.anchor,tl),s.some(o=>o.position.some(a=>Math.abs(a)>3+1e-8)||o.scale.some(a=>a<.02-1e-8||a>4+1e-8)))return}else{let r=e.rawScale.clone().clampScalar(.02,4),o=Gn==="scale"?o0(e.position,e.rotation,e.anchor,e.scale,r,tl):i.position;if(Gn==="scale"&&o.toArray().some(a=>Math.abs(a)>3+1e-8)){let a=n[Dn.children.indexOf(i)];i.position.fromArray(a.position),i.scale.fromArray(a.scale),Nt();return}s=[{position:o.toArray().map(a=>Hn(a,-3,3)),rotation:[i.rotation.x,i.rotation.y,i.rotation.z].map(ke.radToDeg),scale:r.toArray()}]}e.parts.forEach(({mesh:r},o)=>{let a=s[o],l=n[Dn.children.indexOf(r)];Object.assign(l,a),r.position.fromArray(a.position),r.rotation.set(...a.rotation.map(ke.degToRad),"ZYX"),r.scale.fromArray(a.scale)}),Ro=!0,A0(),zt()}var T0={};for(let[i,e]of Object.entries(u0)){let t=document.createElement("fieldset");t.className="vectors";let n=document.createElement("legend");n.textContent=e.label,t.append(n);let s=document.createElement("div");s.className="axes",T0[i]=$S.map((r,o)=>{let a=document.createElement("label");a.textContent=r;let l=document.createElement("input");return l.type="number",l.id=i+"-"+r.toLowerCase(),l.min=e.min,l.max=e.max,l.step=e.step,l.setAttribute("aria-label",e.label+" "+r),l.addEventListener("input",()=>{let c=pt();!c||!Number.isFinite(l.valueAsNumber)||(di(l),c[i][o]=Hn(l.valueAsNumber,e.min,e.max),$e(),kt())}),l.addEventListener("change",()=>{let c=pt();c&&(l.value=c[i][o])}),a.append(l),s.append(a),l}),t.append(s),C("part-fields").append(t)}function E0(i){let e={...i,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},t=Su(i),n=t?wu(e):tw,s=new ve(Mr(e,new _(...i.scale)),n);s.userData.ownMaterial=t;let r=n?.map?.image;return r?.addEventListener&&!r.complete&&r.addEventListener("load",Nt,{once:!0}),s.position.fromArray(i.position),s.rotation.order="ZYX",s.rotation.set(...i.rotation.map(ke.degToRad)),s.scale.fromArray(i.scale),s.userData.part=!0,s}function hs(){if(!lt)return;if(C("model-inspector").dataset.tab==="animation"){lt.detach();return}if(C("model-inspector").dataset.tab==="avatar"){if(cs&&nn){let s=C("avatar-joint").value;Po.position.fromArray(wo(s,Ve()?.avatarRig?.[s]).pivot),Po.updateMatrixWorld(!0),lt.setMode("translate"),lt.attach(Po)}else lt.detach();return}let i=Tf(),e=i[0];if(i.length&&us().length>1&&(e=zi,!lt.dragging)){let s=new Kt;for(let r of wf())s.expandByObject(r);s.getCenter(zi.position),zi.rotation.set(0,0,0),zi.scale.setScalar(1),zi.updateMatrixWorld(!0)}let t=Gn==="select"?null:Sn&&Pn.visible&&["translate","scale","rotate"].includes(Gn)?Pn:e?.visible?e:null;if(lt.object!==t){if(lt.dragging)return;t?lt.attach(t):lt.detach()}t&&(lt.setMode(Gn),lt.setSpace(Gn==="translate"||t===zi?"world":"local"));let n=Number(C("snap-step").value);lt.setTranslationSnap(n||null),lt.setRotationSnap(n?ke.degToRad(5):null),lt.setScaleSnap(n||null),Nt()}function A0(){let i=Tf();Lo.visible=!!i.length&&!Sn,Lo.box.makeEmpty();for(let e of i)Lo.box.expandByObject(e);Nt()}function Gu(){A0(),hs()}function Cr(i=!1){if(!Gt)return;let e=i?Tf():[],t=new Kt;if(e.length)for(let c of e)t.expandByObject(c);else t.setFromObject(Dn);!i&&ls.children.length&&t.union(new Kt().setFromObject(ls));let n=new _,s=new _;t.isEmpty()||(t.getCenter(n),t.getSize(s));let r=ke.degToRad(mn.fov/2),o=Math.atan(Math.tan(r)*mn.aspect),a=Math.max(.6,s.length()*.63/Math.sin(Math.min(r,o))),l=mn.position.clone().sub(Gt.target).normalize();Gt.target.copy(n),mn.position.copy(n).addScaledVector(l,a),Gt.update(),Nt()}function ow(){for(let e of[...ls.children])ls.remove(e),e.geometry.dispose(),e.material.dispose();if(!Ln)return;let i=tt.models.filter(e=>zs.has(e.id)&&e.id!==vt&&e.parts.length);i.forEach((e,t)=>{let n=Dg(e),s=new fn({color:"#8bd1dc",side:qt,transparent:!0,opacity:.25,depthWrite:!1}),r=new ve(n,s);r.name="R\xE9f\xE9rence : "+e.name;let o=t/i.length*Math.PI*2-Math.PI/2,a=2.2+Math.floor(t/5)*1.6;r.position.set(Math.cos(o)*a,0,Math.sin(o)*a),r.renderOrder=3,ls.add(r)})}function kt(i=!1){lt?.detach();for(let n of[...Dn.children])Dn.remove(n),n.geometry.dispose(),n.userData.ownMaterial&&Tu(n.material);let e=Ve()?.parts??[],t=Fu();Ln&&e.forEach((n,s)=>{let r=E0(n);r.visible=!t.has(s),Dn.add(r)}),ow(),fi(),C("preview-empty").hidden=!!(e.length&&Ln),C("preview-empty").textContent=Ln?Ve()?"Ajoute une forme avec la barre \xE0 gauche pour commencer.":"Cr\xE9e un mod\xE8le avec + Nouveau mod\xE8le puis assemble tes pi\xE8ces.":"Pr\xE9visualisation 3D indisponible : les valeurs restent modifiables.",C("preview-tag").textContent=e.length+" PI\xC8CE"+(e.length>1?"S":"")+" / "+({avatar:"AVATAR",structure:"D\xC9COR"}[Ve()?.kind]??"OBJET")+(ls.children.length?" \xB7 "+ls.children.length+" R\xC9F.":""),Gu(),Rr(),i&&(e.length||ls.children.length)?Cr():Nt()}function Ti(){wn.lastModel=vt,Bo(),rl(),C("new-model").disabled=C("example").disabled=tt.models.length>=Dt.models,Vi(),zt(),kt(!0),Rf()}function Ou(i,e=!1){i!==Jt&&No();let t=Ve()?.parts,n=t?.[i];if(!n)return;let s=n.group?t.flatMap((r,o)=>r.group===n.group?[o]:[]):[i];if(e){jt=new Set(us());let r=s.every(o=>jt.has(o));for(let o of s)r?jt.delete(o):jt.add(o);Jt=r?jt.values().next().value??-1:i}else jt=new Set(s),Jt=i;Vi(),zt(),Gu()}function Uf(i=!1){let e=Ve()?.parts,t=us();if(!e||!t.length)return;let n=new Set(t.map(r=>e[r].group).filter(Boolean)),s=e.flatMap((r,o)=>t.includes(o)||n.has(r.group)?[o]:[]);if(!(!i&&s.length<2)){if(yt(),i)for(let r of s)delete e[r].group;else{let r=new Set(e.map(a=>a.group)),o=1;for(;r.has(o);)o++;for(let a of s)e[a].group=o}jt=new Set(s),$e(),Vi(),Gu()}}function C0(i){!tt.models.some(e=>e.id===i)||i===vt||(vt=i,Jt=0,jt.clear(),ks.clear(),Ti(),Et("Mod\xE8le actif : "+Ve().name))}function aw(i){i===vt||!tt.models.some(e=>e.id===i)||(zs.has(i)?zs.delete(i):zs.add(i),Bo(),rl(),kt(),Cr())}function lw(i){vt&&(wn.active[vt]=i,Bo(),Vi(),kt())}function hi(i){Sn&&!["translate","scale","rotate"].includes(i)&&(Sn=!1),Gn=i;for(let e of document.querySelectorAll(".rail-btn[data-tool]"))e.setAttribute("aria-pressed",String(e.dataset.tool===i));pn.dataset.tool=i,C("negative-scale-option").hidden=i!=="scale"||Sn,hs()}for(let i of document.querySelectorAll(".rail-btn[data-tool]"))i.onclick=()=>hi(i.dataset.tool);var Fo=null,Do=null,el=new ts,Bu=new le;function R0(i){if(!Ln||nn)return-1;let e=pn.getBoundingClientRect();Bu.set(2*(i.clientX-e.left)/e.width-1,1-2*(i.clientY-e.top)/e.height),el.setFromCamera(Bu,mn);let t=el.intersectObjects(Dn.children.filter(n=>n.visible),!1)[0];return t?Dn.children.indexOf(t.object):-1}pn.addEventListener("pointerdown",i=>{ki||(i.button===0&&(Fo=Gn!=="select"&&lt?.axis?null:{id:i.pointerId,x:i.clientX,y:i.clientY}),i.button===2&&(Do={x:i.clientX,y:i.clientY}))});pn.addEventListener("pointercancel",()=>{Fo=null,Do=null});pn.addEventListener("pointerup",i=>{if(ki||lt?.dragging)return;let e=Fo;if(Fo=null,i.button!==0||e?.id!==i.pointerId||Math.hypot(i.clientX-e.x,i.clientY-e.y)>5)return;let t=i.shiftKey||i.ctrlKey||i.metaKey;if(nn){let s=pn.getBoundingClientRect();Bu.set(2*(i.clientX-s.left)/s.width-1,1-2*(i.clientY-s.top)/s.height),el.setFromCamera(Bu,mn);let r=Bs.visible&&!t?el.intersectObjects(Object.values(Mf),!1)[0]?.object:null;if(r){F0(r.userData.avatarJoint);return}let o=el.intersectObjects(nn.meshes.filter(a=>a.visible),!1)[0]?.object;o&&(Ou(nn.meshes.indexOf(o),t),Nt());return}let n=R0(i);n>=0&&Ou(n,t)});var Uo=C("part-context");function ol(){Uo.hidden=!0}pn.addEventListener("contextmenu",i=>{if(i.preventDefault(),ki||!Do||Math.hypot(i.clientX-Do.x,i.clientY-Do.y)>6)return;let e=R0(i);if(e<0)return ol();us().includes(e)||Ou(e),C("context-name").textContent=pt().name,Uo.hidden=!1,Uo.style.left=Hn(i.clientX,5,innerWidth-205)+"px",Uo.style.top=Hn(i.clientY,5,innerHeight-305)+"px"});document.addEventListener("pointerdown",i=>{Uo.contains(i.target)||ol()});function Ns(i,e=Eo[i],t=[0,0,0],n=[.35,.35,.35],s="#51bdd2",r="plain",o=[0,0,0]){return{name:e,shape:i,position:t,scale:n,rotation:o,surface:r,color:s,...i==="custom"?{profile:To()}:{}}}function cw(){let i="#678fb4",e="#c1d7de",t="#233241";return[Ns("sphere","Cr\xE2ne",[0,0,.02],[.31,.32,.29],i,"speckle"),Ns("sphere","Museau",[0,-.048,-.11],[.2,.13,.15],e),Ns("sphere","Oreille gauche",[-.149,.003,.01],[.08,.1,.06],i),Ns("sphere","Oreille droite",[.149,.003,.01],[.08,.1,.06],i),Ns("sphere","\u0152il gauche",[-.056,.037,-.118],[.049,.042,.036],t),Ns("sphere","\u0152il droit",[.056,.037,-.118],[.049,.042,.036],t),Ns("sphere","Nez",[0,-.025,-.181],[.071,.039,.033],t)]}function Hu(){return"custom-model-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function I0(i,e=!1){let t=xf.find(s=>s.assetId===i);if(!t)return Et("Asset int\xE9gr\xE9 introuvable.",!0);if(tt.models.length>=Dt.models)return Et("Limite de "+Dt.models+" mod\xE8les atteinte.",!0);yt();let n=structuredClone(t);return n.id=Hu(),tt.models.some(s=>s.name===n.name)&&(n.name=(n.name+" \xB7 copie").slice(0,48)),tt.models.push(n),vt=n.id,Jt=0,jt.clear(),$e(),Ti(),e&&zo("geometry"),Et("\xAB "+n.name+" \xBB import\xE9 \xB7 enregistre pour le retrouver dans les cartes."),n}function P0(i=!1){if(tt.models.length>=Dt.models)return;yt();let e=Hu(),t=i?"Singe de pierre":"Mod\xE8le "+(tt.models.length+1);tt.models.push({id:e,name:t,kind:"structure",inGame:!1,properties:{...Ya},hitbox:{mode:"auto",shape:"convex",precision:48},parts:i?cw():[]}),vt=e,Jt=0,jt.clear(),$e(),Ti(),zo("geometry"),i||(C("model-title").focus({preventScroll:!0}),C("model-title").select())}function uw(){let i=Ve();if(!i||tt.models.length>=Dt.models)return;yt();let e=structuredClone(i);e.id=Hu(),e.name=(i.name.slice(0,37)+" \xB7 variante").slice(0,48),tt.models.push(e),vt=e.id,Jt=0,jt.clear(),$e(),Ti(),C("model-title").focus({preventScroll:!0}),C("model-title").select(),Et("Variante cr\xE9\xE9e : modifie-la sans toucher au mod\xE8le original.")}function Nf(i=C("new-shape").value){let e=Ve();if(!e||e.parts.length>=Dt.parts)return;yt();let t=pt(),n=t?[Hn(t.position[0]+.22,-3,3),...t.position.slice(1)]:[0,0,0];e.parts.push(Ns(i,Eo[i],n)),Jt=e.parts.length-1,jt.clear(),$e(),Vi(),zt(),kt(e.parts.length===1),hi("translate"),zo("geometry"),i==="custom"&&zf()}function zu(){let i=Ve(),e=us();if(!i||!e.length||i.parts.length+e.length>Dt.parts)return;yt();let t=e.map(a=>i.parts[a]),n=Math.min(.12,3-Math.max(...t.map(a=>a.position[0]))),s=new Map,r=new Set(i.parts.map(a=>a.group)),o=i.parts.length;for(let a of t){let l=structuredClone(a);if(delete l.actionId,l.name=a.name.slice(0,40)+" copie",l.position[0]+=n,l.group){if(!s.has(l.group)){let c=1;for(;r.has(c);)c++;r.add(c),s.set(l.group,c)}l.group=s.get(l.group)}i.parts.push(l)}jt=new Set(t.map((a,l)=>o+l)),Jt=o,$e(),Vi(),zt(),kt()}function Ff(){let i=Ve(),e=us();if(!(!i||!e.length)){yt();for(let t of e.sort((n,s)=>s-n))i.parts.splice(t,1);jt.clear(),nw(),Jt=Math.max(0,Math.min(Jt,i.parts.length-1)),!i.parts.length&&tt.avatarId===i.id&&(tt.avatarId=null),$e(),rl(),Vi(),zt(),kt()}}function Of(){let i=Ve(),e=pt();if(!e||i.parts.length>=Dt.parts)return;yt();let t=structuredClone(e);delete t.actionId,t.name=e.name.slice(0,36)+" \xB7 miroir",delete t.group,t.position[0]=-t.position[0],t.avatarJoint?.startsWith("left")?t.avatarJoint="right"+t.avatarJoint.slice(4):t.avatarJoint?.startsWith("right")&&(t.avatarJoint="left"+t.avatarJoint.slice(5)),t.rotation[1]=-t.rotation[1],t.rotation[2]=-t.rotation[2],i.parts.push(t),Jt=i.parts.length-1,jt.clear(),$e(),Vi(),zt(),kt(),Et("Copie en miroir cr\xE9\xE9e sur l\u2019axe X")}function L0(){let i=pt(),e=Dn.children[Jt];if(!i||!e)return;let t=new Kt().setFromObject(e);t.isEmpty()||(yt(),i.position[1]=Hn(i.position[1]-t.min.y,-3,3),$e(),zt(),kt(),Et("Pi\xE8ce pos\xE9e sur le plan Y = 0"))}function hw(){let i=pt();i&&(yt(),i.position=[0,0,0],i.rotation=[0,0,0],i.scale=[.35,.35,.35],$e(),zt(),kt())}function dw(){let i=pt();i&&(yt(),i.position=[0,0,0],$e(),zt(),kt())}function Bf(i){if(!Gt)return;let e=mn.position.distanceTo(Gt.target),t=i==="front"?new _(0,0,-1):i==="side"?new _(1,0,0):new _(1e-4,1,0);mn.position.copy(Gt.target).addScaledVector(t,Math.max(.6,e)),Gt.update(),Nt()}function Du(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var fw=()=>Ve()?.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"modele";async function pw(){let i=C("export-format").value;try{let e=Ve(),t=fw();if(i==="workspace-json")Du(new Blob([JSON.stringify(Oi(tt),null,2)],{type:"application/json"}),"atelier.gorilla-models.json");else if(i==="model-json"){if(!e)throw Error("Cr\xE9e un mod\xE8le avant de l\u2019exporter.");Du(new Blob([JSON.stringify(Oi({version:1,models:[e],avatarId:null}),null,2)],{type:"application/json"}),t+".gorilla-model.json")}else if(i==="png"){if(!Ln)throw Error("WebGL indisponible : capture impossible.");Nt();let n=await new Promise(s=>pn.toBlob(s,"image/png"));if(!n)throw Error("Capture impossible sur cet appareil.");Du(n,t+".png")}else if(i==="glb"){if(!e?.parts.length)throw Error("Ajoute une pi\xE8ce avant l\u2019export 3D.");let n=new sn;n.name=e.name;let s=[];Et("Pr\xE9paration du GLB et des textures\u2026");for(let r of e.parts){let o=null;if(r.texture){let c=await fetch(r.texture);if(!c.ok)throw Error("Image du mod\xE8le impossible \xE0 charger.");let u=await createImageBitmap(await c.blob()),h=document.createElement("canvas");h.width=u.width,h.height=u.height,h.getContext("2d").drawImage(u,0,0),u.close(),o=new oa(h),o.colorSpace=Ot,o.wrapS=o.wrapT=On}let a=wu({...r,texture:null});o&&(a.map=o,a.needsUpdate=!0);let l=new ve(Mr(r),a);l.name=r.name,n.add(l),s.push(l)}try{let r=await new Promise((o,a)=>new Tr().parse(n,o,a,{binary:!0,onlyVisible:!0}));Du(new Blob([r],{type:"model/gltf-binary"}),t+".glb")}finally{for(let r of s)r.geometry.dispose(),Tu(r.material)}}Et("Export "+i.toUpperCase()+" g\xE9n\xE9r\xE9")}catch(e){Et(e.message||"Export impossible.",!0)}}C("new-model").onclick=()=>P0();C("duplicate-model").onclick=uw;C("example").onclick=()=>P0(!0);C("models").onchange=i=>C0(i.target.value);C("mask-set").onchange=i=>lw(i.target.value);C("solo-part").onclick=()=>{let i=Ve();i?.parts.length&&(Af(new Set(i.parts.map((e,t)=>t).filter(e=>e!==Jt))),Et("Masque "+Vu()+" : seule la pi\xE8ce active est affich\xE9e."))};C("show-all-parts").onclick=()=>{Af(new Set),Et("Toutes les pi\xE8ces sont visibles.")};C("save").onclick=C("publish-save").onclick=sl;C("undo-action").onclick=m0;C("redo-action").onclick=vf;C("entity-sculptor").onclick=()=>{if(ki){ki.close();return}if(!Ln){Et("WebGL indisponible pour la sculpture.",!0);return}if(!lt?.dragging){ol(),Fo=Do=null,Gt.enabled=!1,lt.enabled=!1;try{ki=tg({canvas:pn,renderer:Ln,onClose(){ki=null,Gt.enabled=!0,lt.enabled=!0,C("entity-sculptor").textContent="Atelier des entit\xE9s",Ti()}}),C("entity-sculptor").textContent="Retour aux mod\xE8les"}catch(i){Gt.enabled=!0,lt.enabled=!0,Et(i.message,!0)}}};C("export").onclick=pw;C("import").onclick=()=>C("file").click();C("file").onchange=async i=>{let e=i.target.files?.[0];if(i.target.value="",!!e)try{if(e.size>Dt.fileBytes)throw Error("JSON trop volumineux pour cet atelier.");let t=Oi(JSON.parse(await e.text())),n=new Map(tt.models.map(s=>[s.id,s]));for(let s of t.models)n.set(s.id,s);if(n.size>Dt.models)throw Error("L\u2019atelier accepte "+Dt.models+" mod\xE8les.");if(t.models.some(s=>tt.models.some(r=>r.id===s.id))&&!confirm("Remplacer les mod\xE8les de m\xEAme identifiant ?"))return;yt(),Object.assign(tt,{version:1,models:[...n.values()],avatarId:t.avatarId??tt.avatarId}),vt=t.models[0]?.id??vt,Jt=0,jt.clear(),$e(),Ti(),Et("Import\xE9 \xB7 enregistrer pour appliquer au jeu")}catch(t){Et(t instanceof SyntaxError?"JSON illisible.":t.message,!0)}};function D0(i){let e=Ve();if(e?.kind==="avatar"){i.preventDefault(),Et("\xC9quipe cet avatar dans l\u2019onglet Avatar.");return}if(!e?.parts.length){i.preventDefault(),Et("Ajoute au moins une pi\xE8ce avant de placer le mod\xE8le sur une carte.",!0);return}sl()||i.preventDefault()}for(let i of["send-to-map","quick-send-to-map"])C(i).addEventListener("click",D0);C("go-cards").addEventListener("click",i=>{f0&&vt===Ef?D0(i):Oo&&!sl()&&i.preventDefault()});C("delete-model").onclick=()=>{let i=Ve();if(!i||!confirm("Supprimer le mod\xE8le \xAB "+i.name+" \xBB ?"))return;yt();let e=tt.models.indexOf(i);tt.models.splice(e,1),zs.delete(i.id),delete wn.active[i.id],delete wn.masks[i.id],Bo(),tt.avatarId===i.id&&(tt.avatarId=null),vt=(tt.models[e]??tt.models[e-1])?.id??null,Jt=0,jt.clear(),$e(),Ti()};function mw(i){let e=Ve();e&&(di(i.target),e.name=i.target.value.slice(0,48),$e(),rl(),zt())}for(let i of["model-name","model-title"])C(i).addEventListener("input",mw);C("hitbox-auto").onclick=()=>g0("auto");C("hitbox-manual").onclick=()=>g0("box");C("hitbox-preview-toggle").onchange=fi;C("hitbox-shape").onchange=i=>{let e=Ve();if(!e)return;di(i.target);let t=i.target.value;if(!["box","sphere","capsule","convex"].includes(t))return;let n=os(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{},precision:Number(C("hitbox-precision").value)||48},Sn=s,$e(),Gs(),fi()};C("hitbox-precision").oninput=i=>{let e=Ve();if(!e)return;let t=Hn(Math.round(Number(i.target.value)||48),8,96),n=os(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:e.hitbox?.shape??"convex",precision:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{}},C("hitbox-precision-value").textContent=String(t),$e(),fi()};for(let[i,e]of[["hitbox-drag","translate"],["hitbox-scale","scale"],["hitbox-rotate","rotate"]])C(i).onclick=()=>{let t=Ve();!t?.parts.length||!["box","custom"].includes(t.hitbox?.mode)||(C("hitbox-preview-toggle").checked=!0,Sn=!0,hi(e),Gs(),fi())};C("hitbox-fit").onclick=()=>{let i=Ve();if(!i?.parts.length)return;let e=Number(C("hitbox-precision").value)||48,t=os({...i,hitbox:{mode:"auto",shape:"convex",precision:e}});yt(),i.hitbox={mode:"custom",shape:C("hitbox-shape").value||"convex",center:t.center.toArray(),size:t.size.toArray(),rotation:[0,0,0],precision:e},Sn=!0,$e(),Gs(),fi(),Et("Hitbox ajust\xE9e \xE0 la g\xE9om\xE9trie actuelle.")};for(let i of["center","size"])for(let e=0;e<3;e++){let t=C("hitbox-"+i+"-"+["x","y","z"][e]);t.oninput=n=>{let s=Ve(),r=n.target.valueAsNumber;!["box","custom"].includes(s?.hitbox?.mode)||!Number.isFinite(r)||(di(n.target),s.hitbox[i][e]=Hn(r,i==="size"?.025:-6,i==="size"?12:6),$e(),fi())},t.onchange=Gs}C("model-kind").onchange=i=>{!Ve()||Ve().kind==="avatar"||(di(i.target),Ve().kind=i.target.value,$e(),zt(),kt())};C("in-game").onchange=i=>{di(i.target),Ve().inGame=i.target.checked,$e()};C("drivable").onchange=i=>{let e=Ve();e?.kind==="prop"&&(di(i.target),i.target.checked?e.properties.drivable=!0:delete e.properties.drivable,$e())};for(let i of Object.keys(Ya))C(i).onchange=e=>{Ve()&&(di(e.target),Ve().properties[i]=e.target.checked,$e(),i==="collidable"&&fi())};C("avatar").onchange=i=>{di(i.target),tt.avatarId=i.target.value||null,$e()};var U0=Object.entries(Cs).map(([i,e])=>[i,e.label]);ni(C("avatar-assignment"),U0,"torso");ni(C("avatar-joint"),U0,"torso");function Hs(){let i=Ve(),e=pt(),t=i?.kind==="avatar";if(C("avatar-rig-controls").hidden=!t,!t)return;C("avatar-assignment").disabled=!e,C("avatar-attach").disabled=!e,C("avatar-move").setAttribute("aria-pressed",String(cs)),C("avatar-assignment").value=e?.avatarJoint??"torso";let n=C("avatar-joint").value||"torso",s=wo(n,i.avatarRig?.[n]);for(let[r,o]of["x","y","z"].entries())C("avatar-"+o).value=s.pivot[r];C("avatar-axis").value=s.axis,C("avatar-limit").value=s.limit,C("avatar-bend").value=(ks.get(n)??0)*100}var Qa=new _,Uu=new _;function gw(){if(Bs.visible=!!nn&&C("avatar-display").value!=="model",!Bs.visible)return;let i=C("avatar-joint").value;nn.root.updateMatrixWorld(!0);let e=ku.geometry.attributes.position,t=0;for(let[n,s]of Object.entries(Mf)){nn.bones[n].getWorldPosition(Qa),s.position.copy(Qa),s.scale.setScalar(n.includes("Finger")?.011:.018).multiplyScalar(n===i?1.35:1),s.material.color.set(n===i?"#ffc16e":"#55d8ee");let r=Cs[n].parent;r&&(nn.bones[r].getWorldPosition(Uu),e.setXYZ(t++,Qa.x,Qa.y,Qa.z),e.setXYZ(t++,Uu.x,Uu.y,Uu.z))}e.needsUpdate=!0,Bs.updateMatrixWorld(!0)}function Rr(){let i=Ve(),e=Ln&&i?.kind==="avatar"&&C("model-inspector").dataset.tab==="avatar";if(nn?.dispose(),nn=null,Dn.visible=!e,!e){Ln&&Gu(),Nt();return}let t=Fu();nn=sg(i,(n,s)=>{let r=E0(n);return r.visible=!t.has(s)&&C("avatar-display").value!=="bones",r},n=>{n.geometry.dispose(),n.userData.ownMaterial&&Tu(n.material)}),Vs.add(nn.root);for(let[n,s]of ks)nn.setBend(n,s);Lo.visible=!1,hs(),C("avatar-cost").textContent=i.parts.length+" pi\xE8ces \xB7 "+nn.triangles.toLocaleString("fr-FR")+" triangles"+(Na(i)?"":" \xB7 ajoute une t\xEAte et un torse pour l\u2019\xE9quiper"),Nt()}function N0(i=null){if(tt.models.length>=Dt.models)return;yt();let e=i?structuredClone(i.parts):ig(),t=Ua();if(i){let s=Eu(i),r=s.getCenter(new _),o=s.getSize(new _);for(let a of Object.values(t)){let[l,c,u]=a.pivot;a.pivot=[Hn(r.x+l*o.x/.95,-3,3),Hn(s.max.y-o.y*.15+c*o.y/1.08,-3,3),Hn(r.z+u*o.z/.42,-3,3)]}}let n=Oi({version:1,models:[{id:Hu(),name:i?(i.name+" \xB7 avatar").slice(0,48):"Mon gorille",kind:"avatar",avatarRig:t,parts:e}]}).models[0];tt.models.push(n),vt=n.id,Jt=0,jt.clear(),ks.clear(),cs=!1,$e(),Ti(),zo("avatar")}function F0(i){C("avatar-joint").value=i,Hs(),hs(),Nt()}function O0(i){let e=Ve(),t=us();if(!(e?.kind!=="avatar"||!t.length)&&!t.every(n=>e.parts[n].avatarJoint===i)){yt();for(let n of t)e.parts[n].avatarJoint=i;C("avatar-joint").value=i,$e(),rl(),Hs(),Rr()}}C("avatar-new").onclick=()=>N0();C("avatar-copy").onclick=()=>{let i=Ve();i?.parts.length&&i.kind!=="avatar"&&N0(i)};C("avatar-assignment").onchange=i=>O0(i.target.value);C("avatar-joint").onchange=i=>F0(i.target.value);C("avatar-attach").onclick=()=>O0(C("avatar-joint").value);C("avatar-display").onchange=Rr;C("avatar-move").onclick=()=>{cs=!cs,cs&&(ks.clear(),C("avatar-display").value==="model"&&(C("avatar-display").value="overlay")),Hs(),Rr()};C("avatar-focus").onclick=()=>{if(!Gt||!nn)return;let i=C("avatar-joint").value,e=mn.position.clone().sub(Gt.target).normalize();nn.bones[i].getWorldPosition(Gt.target),mn.position.copy(Gt.target).addScaledVector(e,i.includes("Finger")?.3:.72),Gt.update(),Nt()};C("avatar-reset-pose").onclick=()=>{ks.clear(),Hs(),Rr()};for(let i of["x","y","z","axis","limit"])C("avatar-"+i).onchange=()=>{let e=Ve(),t=C("avatar-joint").value;e?.kind==="avatar"&&(yt(),e.avatarRig[t]=wo(t,{pivot:["x","y","z"].map(n=>C("avatar-"+n).valueAsNumber),axis:C("avatar-axis").value,limit:C("avatar-limit").valueAsNumber}),$e(),Hs(),Rr())};C("avatar-bend").oninput=i=>{let e=C("avatar-joint").value,t=i.target.valueAsNumber/100;cs&&(cs=!1,Hs(),hs()),ks.set(e,t),C("avatar-bend").value=t*100,nn?.setBend(e,t),Nt()};C("avatar-play").onclick=i=>{sl()||i.preventDefault()};ni(C("new-shape"),Object.entries(Eo).filter(([i])=>i!=="asset"),"box");ni(C("part-shape"),Object.entries(Eo),"box");ni(C("game-asset"),xf.map(i=>[i.assetId,i.name]),xf[0]?.assetId);C("add-game-asset").onclick=()=>I0(C("game-asset").value);ni(C("part-surface"),Object.entries(Mu),"plain");ni(C("part-finish"),Object.entries(br).map(([i,e])=>[i,e.label]),"original");ni(C("part-zone"),Object.entries(Wd),"solid");C("trigger-portal").onchange=i=>{let e=pt();if(e?.zone!=="trigger")return;let t=i.target.value.trim();if(t&&t!=="arena")try{let n=new URL(t);if(n.protocol!=="https:"||n.username||n.password)throw Error()}catch{Et("Destination invalide. Entre une URL HTTPS publique ou le mot arena.",!0),i.target.value=e.portal??"";return}di(i.target),t?e.portal=t:delete e.portal,$e()};for(let i of["phase","text"])C("trigger-notice-"+i).onchange=e=>{let t=pt();t?.zone==="trigger"&&(di(e.target),t.notice={text:C("trigger-notice-text").value,phase:C("trigger-notice-phase").value},$e())};C("part-collisions").onchange=i=>{let e=Ve();!e||e.kind!=="structure"||(yt(),e.partCollisions=i.target.checked,Sn=!1,$e(),zt(),fi())};C("part-zone").onchange=i=>{let e=pt();if(!e)return;yt(),e.zone=i.target.value;let t=bu(e.reaction&&{...e.reaction,phase:e.zone==="trigger"?"enter":"use"},e.zone);t?e.reaction=t:delete e.reaction,$e(),Gs(),_0(),fi()};C("part-finish").onchange=i=>{let e=pt();e&&(yt(),e.finish=i.target.value,$e(),zt(),kt())};for(let i of["projection","repeat","angle","u","v"])C("part-"+i).onchange=e=>{let t=pt();if(!t)return;let n=e.target,s=i==="projection"?n.value:n.valueAsNumber;if(i!=="projection"&&!Number.isFinite(s)){zt();return}let r=Ao(t);i==="u"||i==="v"?r.offset[i==="u"?0:1]=s:r[i]=s,yt(),t.uv=Ao({uv:r}),$e(),zt(),kt()};for(let i of["gravity","bounce"])C("model-"+i).onchange=e=>{let t=Ve();!t||!Number.isFinite(e.target.valueAsNumber)||(yt(),t.physics=qa({physics:{...qa(t),[i]:e.target.valueAsNumber}}),$e())};function zf(){let i=pt();!i||i.shape!=="custom"||i0({name:i.name,initial:i.profile??To(),onApply:e=>{if(!Ve()?.parts.includes(i))throw Error("La pi\xE8ce n\u2019existe plus.");yt(),i.profile=e,$e(),zt(),kt(),Et("Forme personnelle appliqu\xE9e \xB7 mod\xE8le pr\xEAt \xE0 enregistrer.")}})}C("edit-profile").onclick=zf;C("add-part").onclick=()=>Nf();for(let i of document.querySelectorAll("[data-shape]"))i.onclick=()=>{C("new-shape").value=i.dataset.shape,Nf(i.dataset.shape)};C("part-paint").onclick=()=>{let i=pt();if(!i)return;let e={plain:"solid",grid:"grid",stripes:"stripes",wood:"wood",speckle:"rock"};t0({initial:i.texture,name:"Pi\xE8ce / "+i.name,tint:i.color,pattern:e[i.surface]??"grain",maxDataBytes:Dt.textureBytes-2e3,onApply:async t=>{if(!Ve()?.parts.includes(i))throw Error("La pi\xE8ce modifi\xE9e n\u2019existe plus dans ce mod\xE8le.");yt(),i.texture||(i.color="#ffffff"),i.texture=t,Oi(tt),$e(),zt(),kt(),Et("Texture peinte appliqu\xE9e \xE0 "+i.name+". Enregistre pour la retrouver en jeu.")}})};C("part-texture-clear").onclick=()=>{let i=pt();i?.texture&&(yt(),i.texture=null,$e(),zt(),kt())};C("duplicate-part").onclick=zu;C("group-parts").onclick=()=>Uf();C("ungroup-parts").onclick=()=>Uf(!0);C("delete-part").onclick=Ff;C("mirror").onclick=Of;C("drop-to-grid").onclick=L0;C("reset-part").onclick=hw;C("center-part").onclick=dw;C("focus-part").onclick=()=>Cr(!0);C("frame").onclick=()=>Cr();C("view-front").onclick=()=>Bf("front");C("view-side").onclick=()=>Bf("side");C("view-top").onclick=()=>Bf("top");C("grid-toggle").onchange=i=>{Sf.visible=i.target.checked,Nt()};C("snap-step").onchange=hs;C("focus-toggle").onclick=()=>{document.body.classList.toggle("preview-fullscreen"),setTimeout(()=>window.dispatchEvent(new Event("resize")),0)};for(let i of["name","shape","color","surface"])C("part-"+i).addEventListener(i==="name"||i==="color"?"input":"change",e=>{let t=pt();t&&(di(e.target),i==="shape"&&e.target.value==="custom"&&t.shape!=="custom"&&(t.profile=To(t.shape)),t[i]=e.target.value,$e(),Vi(),i==="name"?zt():(zt(),kt(),i==="shape"&&t.shape==="custom"&&zf()))});for(let i of document.querySelectorAll("[data-color]"))i.onclick=()=>{let e=pt();e&&(yt(),e.color=i.dataset.color,$e(),zt(),kt())};for(let i of Uo.querySelectorAll("button"))i.onclick=()=>{ol();let e=i.dataset.action;["translate","rotate","scale"].includes(e)?hi(e):e==="duplicate"?zu():e==="mirror"?Of():e==="ground"?L0():e==="focus"?Cr(!0):e==="delete"&&Ff()};window.addEventListener("keydown",i=>{if(ki)return;let e=i.target.closest?.("input,select,textarea,[contenteditable]");if(i.key==="Escape"){ol(),!e&&!lt?.dragging&&hi("select");return}if(lt?.dragging)return;let t=i.ctrlKey||i.metaKey;if(t&&!e){let s=i.key.toLowerCase();if(s==="z"){i.preventDefault(),i.shiftKey?vf():m0();return}if(s==="y"){i.preventDefault(),vf();return}if(s==="s"){i.preventDefault(),sl();return}if(s==="d"){i.preventDefault(),zu();return}if(s==="g"){i.preventDefault(),Uf(i.shiftKey);return}}if(e||t||i.altKey)return;let n=i.key.toLowerCase();if(n==="v")hi("select");else if(n==="g")hi("translate");else if(n==="r")hi("rotate");else if(n==="s")hi("scale");else if(n==="f")Cr(!0);else if(n==="a")Cr();else if(n==="m")Of();else if(n==="delete"||n==="backspace")Ff();else if(n==="d"&&i.shiftKey)zu();else if("123456789".includes(n)&&n.length===1){let s=["box","sphere","cylinder","cone","torus","capsule","diamond","custom","tetrahedron"][Number(n)-1];s&&Nf(s)}else return;i.preventDefault()});window.addEventListener("keydown",i=>{i.key==="Alt"&&lt&&(lt.setTranslationSnap(null),lt.setRotationSnap(null),lt.setScaleSnap(null))});window.addEventListener("keyup",i=>{i.key==="Alt"&&hs()});window.addEventListener("beforeunload",i=>{Oo&&i.preventDefault()});a0&&(Ef=I0(a0,!0)?.id);Ti();il.get("tab")==="avatar"&&zo("avatar");Oo&&Et("Brouillon r\xE9cup\xE9r\xE9 automatiquement");il.get("sculpt")==="1"&&C("entity-sculptor").click();})();
