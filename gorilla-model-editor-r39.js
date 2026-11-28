(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wp=0,Uh=1,Tp=2;var Nh=1,Ep=2,Pi=3,qi=0,En=1,Wt=2,es=0,Js=1,Fh=2,Oh=3,Bh=4,Ap=5,gs=100,Cp=101,Rp=102,Ip=103,Pp=104,Lp=200,Dp=201,Up=202,Np=203,Bl=204,zl=205,Fp=206,Op=207,Bp=208,zp=209,kp=210,Vp=211,Gp=212,Hp=213,Wp=214,uc=0,hc=1,dc=2,Ks=3,fc=4,pc=5,mc=6,gc=7,zh=0,Xp=1,qp=2,ts=0,Yp=1,Zp=2,jp=3,xc=4,Jp=5,Kp=6,$p=7,vh="attached",Qp="detached",kh=300,cr=301,ur=302,yc=303,_c=304,Ta=306,Nn=1e3,Si=1001,qr=1002,xn=1003,vc=1004;var hr=1005;var nn=1006,uo=1007;var yn=1008;var gi=1009,Vh=1010,Gh=1011,ho=1012,bc=1013,Ms=1014,xi=1015,fo=1016,Mc=1017,Sc=1018,po=1020,Hh=35902,Wh=35899,Xh=1021,qh=1022,An=1023,Yr=1026,mo=1027,Yh=1028,wc=1029,Zh=1030,Tc=1031;var Ec=1033,Ea=33776,Aa=33777,Ca=33778,Ra=33779,Ac=35840,Cc=35841,Rc=35842,Ic=35843,Pc=36196,Lc=37492,Dc=37496,Uc=37808,Nc=37809,Fc=37810,Oc=37811,Bc=37812,zc=37813,kc=37814,Vc=37815,Gc=37816,Hc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,Zc=36492,jc=36494,Jc=36495,Kc=36283,$c=36284,Qc=36285,eu=36286;var $s=2300,Zr=2301,Fl=2302,bh=2400,Mh=2401,Sh=2402;var em=3200,tm=3201;var jh=0,nm=1,yi="",Nt="srgb",Qs="srgb-linear",$o="linear",Tt="srgb";var js=7680;var wh=519,im=512,sm=513,rm=514,Jh=515,om=516,am=517,lm=518,cm=519,Th=35044;var Kh="300 es",pi=2e3,Qo=2001;var Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=1234567,Zo=Math.PI/180,jr=180/Math.PI;function Ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function $h(i,e){return(i%e+e)%e}function k0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function V0(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function G0(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function H0(i,e=1){return e-Math.abs($h(i,e*2)-e)}function W0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function X0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function q0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Y0(i,e){return i+Math.random()*(e-i)}function Z0(i){return i*(.5-Math.random())}function j0(i){i!==void 0&&(Vf=i);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(i){return i*Zo}function K0(i){return i*jr}function $0(i){return(i&i-1)===0&&i!==0}function Q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ex(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ve={DEG2RAD:Zo,RAD2DEG:jr,generateUUID:Ss,clamp:et,euclideanModulo:$h,mapLinear:k0,inverseLerp:V0,lerp:jo,damp:G0,pingpong:H0,smoothstep:W0,smootherstep:X0,randInt:q0,randFloat:Y0,randFloatSpread:Z0,seededRandom:j0,degToRad:J0,radToDeg:K0,isPowerOfTwo:$0,ceilPowerOfTwo:Q0,floorPowerOfTwo:ex,setQuaternionFromProperEuler:tx,normalize:Tn,denormalize:Wr},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let p=1-a,m=l*d+c*f+u*g+h*x,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let E=Math.sqrt(b),A=Math.atan2(E,m*v);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}let y=a*v;if(l=l*p+d*y,c=c*p+f*y,u=u*p+g*y,h=h*p+x*y,p===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xu=new _,Gf=new ht,ot=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],b=s[4],y=s[7],E=s[2],A=s[5],C=s[8];return r[0]=o*x+a*v+l*E,r[3]=o*p+a*b+l*A,r[6]=o*m+a*y+l*C,r[1]=c*x+u*v+h*E,r[4]=c*p+u*b+h*A,r[7]=c*m+u*y+h*C,r[2]=d*x+f*v+g*E,r[5]=d*p+f*b+g*A,r[8]=d*m+f*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qu.makeScale(e,t)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qu=new ot;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function um(){let i=Jr("canvas");return i.style.display="block",i}var Hf={};function Kr(i){i in Hf||(Hf[i]=!0,console.warn(i))}function hm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xf=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var _t=nx();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rr,$r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=Jr("canvas")),Rr.width=e.width,Rr.height=e.height;let s=Rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ix=0,xs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yu(s[o].image)):r.push(Yu(s[o]))}else r=Yu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sx=0,Zu=new _,un=class i extends Ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,r=nn,o=yn,a=An,l=gi,c=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ss(),this.name="",this.source=new xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=kh;un.DEFAULT_ANISOTROPY=1;var At=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,E=(m+1)/2,A=(u+d)/4,C=(h+x)/4,L=(g+p)/4;return b>y&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=L/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=L/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new un(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends kl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hl.copy(n.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),dl.subVectors(this.max,Go),Ir.subVectors(e.a,Go),Pr.subVectors(e.b,Go),Lr.subVectors(e.c,Go),us.subVectors(Pr,Ir),hs.subVectors(Lr,Pr),Xs.subVectors(Ir,Lr);let t=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Xs.z,Xs.y,us.z,0,-us.x,hs.z,0,-hs.x,Xs.z,0,-Xs.x,-us.y,us.x,0,-hs.y,hs.x,0,-Xs.y,Xs.x,0];return!ju(t,Ir,Pr,Lr,dl)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,Ir,Pr,Lr,dl))?!1:(fl.crossVectors(us,hs),t=[fl.x,fl.y,fl.z],ju(t,Ir,Pr,Lr,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new _,new _,new _,new _,new _,new _,new _,new _],hi=new _,hl=new jt,Ir=new _,Pr=new _,Lr=new _,us=new _,hs=new _,Xs=new _,Go=new _,dl=new _,fl=new _,qs=new _;function ju(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qs.fromArray(i,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),u=n.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var rx=new jt,Ho=new _,Ju=new _,Ai=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ju)),this.expandByPoint(Ho.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vi=new _,Ku=new _,pl=new _,ds=new _,$u=new _,ml=new _,Qu=new _,Yi=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ku.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Ku);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pl),a=ds.dot(this.direction),l=-ds.dot(pl),c=ds.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ku).addScaledVector(pl,d),f}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){$u.subVectors(t,e),ml.subVectors(n,e),Qu.crossVectors($u,ml);let o=this.direction.dot(Qu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);let l=a*this.direction.dot(ml.crossVectors(ds,ml));if(l<0)return null;let c=a*this.direction.dot($u.cross(ds));if(c<0||l+c>o)return null;let u=-a*ds.dot(Qu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,t,n){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),fs.crossVectors(n,Wn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),fs.crossVectors(n,Wn)),fs.normalize(),gl.crossVectors(Wn,fs),s[0]=fs.x,s[4]=gl.x,s[8]=Wn.x,s[1]=fs.y,s[5]=gl.y,s[9]=Wn.y,s[2]=fs.z,s[6]=gl.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],b=n[7],y=n[11],E=n[15],A=s[0],C=s[4],L=s[8],w=s[12],M=s[1],D=s[5],z=s[9],k=s[13],V=s[2],W=s[6],X=s[10],se=s[14],j=s[3],re=s[7],_e=s[11],Se=s[15];return r[0]=o*A+a*M+l*V+c*j,r[4]=o*C+a*D+l*W+c*re,r[8]=o*L+a*z+l*X+c*_e,r[12]=o*w+a*k+l*se+c*Se,r[1]=u*A+h*M+d*V+f*j,r[5]=u*C+h*D+d*W+f*re,r[9]=u*L+h*z+d*X+f*_e,r[13]=u*w+h*k+d*se+f*Se,r[2]=g*A+x*M+p*V+m*j,r[6]=g*C+x*D+p*W+m*re,r[10]=g*L+x*z+p*X+m*_e,r[14]=g*w+x*k+p*se+m*Se,r[3]=v*A+b*M+y*V+E*j,r[7]=v*C+b*D+y*W+E*re,r[11]=v*L+b*z+y*X+E*_e,r[15]=v*w+b*k+y*se+E*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=h*p*c-x*d*c+x*l*f-a*p*f-h*l*m+a*d*m,b=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,y=u*x*c-g*h*c+g*a*f-o*x*f-u*a*m+o*h*m,E=g*h*l-u*x*l-g*a*d+o*x*d+u*a*p-o*h*p,A=t*v+n*b+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=v*C,e[1]=(x*d*r-h*p*r-x*s*f+n*p*f+h*s*m-n*d*m)*C,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*m+n*l*m)*C,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*C,e[4]=b*C,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*C,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=y*C,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*m-t*h*m)*C,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*C,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*C,e[12]=E*C,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*p+t*h*p)*C,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*C,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,p=o*h,m=a*h,v=l*c,b=l*u,y=l*h,E=n.x,A=n.y,C=n.z;return s[0]=(1-(x+m))*E,s[1]=(f+y)*E,s[2]=(g-b)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+m))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(p-v)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Dr.set(s[0],s[1],s[2]).length(),o=Dr.set(s[4],s[5],s[6]).length(),a=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let c=1/r,u=1/o,h=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===pi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Qo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===pi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Qo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Dr=new _,di=new ct,ox=new _(0,0,0),ax=new _(1,1,1),fs=new _,gl=new _,Wn=new _,qf=new ct,Yf=new ht,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lx=0,Zf=new _,Ur=new ht,Gi=new ct,xl=new _,Wo=new _,cx=new _,ux=new ht,jf=new _(1,0,0),Jf=new _(0,1,0),Kf=new _(0,0,1),$f={type:"added"},hx={type:"removed"},Nr={type:"childadded",child:null},eh={type:"childremoved",child:null},Ft=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new _,t=new $t,n=new ht,s=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new ot}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xl.copy(e):xl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Wo,xl,this.up):Gi.lookAt(xl,Wo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hx),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new _(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new _,Hi=new _,th=new _,Wi=new _,Fr=new _,Or=new _,Qf=new _,nh=new _,ih=new _,sh=new _,rh=new At,oh=new At,ah=new At,cn=class i{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Hi.subVectors(n,t),th.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Hi),l=fi.dot(th),c=Hi.dot(Hi),u=Hi.dot(th),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Hi.subVectors(e,t),fi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,n),Or.subVectors(r,n),nh.subVectors(e,n);let l=Fr.dot(nh),c=Or.dot(nh);if(l<=0&&c<=0)return t.copy(n);ih.subVectors(e,s);let u=Fr.dot(ih),h=Or.dot(ih);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fr,o);sh.subVectors(e,r);let f=Fr.dot(sh),g=Or.dot(sh);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Or,a);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Qf.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Qf,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},yl={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=$h(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lh(o,r,e+1/3),this.g=lh(o,r,e),this.b=lh(o,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return _t.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Nt){_t.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(yl);let n=jo(ps.h,yl.h,t),s=jo(ps.s,yl.s,t),r=jo(ps.l,yl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new He;He.NAMES=dm;var dx=0,Zi=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Js,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hn=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new _,_l=new le,fx=0,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var er=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},px=0,ti=new ct,ch=new Ft,Br=new _,Xn=new jt,Xo=new jt,ln=new _,dt=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ta:er)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Xn.min,Xo.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Xo.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Xo.min),Xn.expandByPoint(Xo.max))}Xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),ln.add(Br)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new _,l[L]=new _;let c=new _,u=new _,h=new _,d=new le,f=new le,g=new le,x=new _,p=new _;function m(L,w,M){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(x),a[w].add(x),a[M].add(x),l[L].add(p),l[w].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,w=v.length;L<w;++L){let M=v[L],D=M.start,z=M.count;for(let k=D,V=D+z;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new _,y=new _,E=new _,A=new _;function C(L){E.fromBufferAttribute(s,L),A.copy(E);let w=a[L];b.copy(w),b.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(A,w);let D=y.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,D)}for(let L=0,w=v.length;L<w;++L){let M=v[L],D=M.start,z=M.count;for(let k=D,V=D+z;k<V;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new _,r=new _,o=new _,a=new _,l=new _,c=new _,u=new _,h=new _;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ep=new ct,Ys=new Yi,vl=new Ai,tp=new _,bl=new _,Ml=new _,Sl=new _,uh=new _,wl=new _,np=new _,Tl=new _,ve=class extends Ft{constructor(e=new dt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(uh.fromBufferAttribute(h,e),o?wl.addScaledVector(uh,u):wl.addScaledVector(uh.sub(t),u))}t.add(wl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(vl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(vl,tp)===null||Ys.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=b;y<E;y+=3){let A=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);s=El(this,m,e,n,c,u,h,A,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);s=El(this,o,e,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=b;y<E;y+=3){let A=y,C=y+1,L=y+2;s=El(this,m,e,n,c,u,h,A,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,b=p+1,y=p+2;s=El(this,o,e,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function mx(i,e,t,n,s,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:i}}function El(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bl),i.getVertexPosition(l,Ml),i.getVertexPosition(c,Sl);let u=mx(i,e,t,n,bl,Ml,Sl,np);if(u){let h=new _;cn.getBarycoord(np,bl,Ml,Sl,h),s&&(u.uv=cn.getInterpolatedAttribute(s,a,l,c,h,new le)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,h,new le)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,h,new _),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new _,materialIndex:0};cn.getNormal(bl,Ml,Sl,d.normal),u.face=d,u.barycoord=h}return u}var rt=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function g(x,p,m,v,b,y,E,A,C,L,w){let M=y/C,D=E/L,z=y/2,k=E/2,V=A/2,W=C+1,X=L+1,se=0,j=0,re=new _;for(let _e=0;_e<X;_e++){let Se=_e*D-k;for(let Be=0;Be<W;Be++){let Ze=Be*M-z;re[x]=Ze*v,re[p]=Se*b,re[m]=V,c.push(re.x,re.y,re.z),re[x]=0,re[p]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(Be/C),h.push(1-_e/L),se+=1}}for(let _e=0;_e<L;_e++)for(let Se=0;Se<C;Se++){let Be=d+Se+W*_e,Ze=d+Se+W*(_e+1),nt=d+(Se+1)+W*(_e+1),je=d+(Se+1)+W*_e;l.push(Be,Ze,je),l.push(Ze,nt,je),j+=6}a.addGroup(f,j,w),f+=j,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function gx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var fm={clone:dr,merge:_n},xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},na=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ms=new _,ip=new le,sp=new le,Kt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,ip,sp),t.subVectors(sp,ip)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zr=-90,kr=1,Gl=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(zr,kr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(zr,kr,e,t);r.layers=this.layers,this.add(r);let o=new Kt(zr,kr,e,t);o.layers=this.layers,this.add(o);let a=new Kt(zr,kr,e,t);a.layers=this.layers,this.add(a);let l=new Kt(zr,kr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(zr,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends un{constructor(e=[],t=cr,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:es});r.uniforms.tEquirect.value=t;let o=new ve(s,r),a=t.minFilter;return t.minFilter===yn&&(t.minFilter=nn),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},tn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ni=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var rp=new _,op=new At,ap=new At,vx=new _,lp=new ct,Al=new _,hh=new Ai,cp=new ct,dh=new Yi,sa=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vh,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hh.copy(this.boundingSphere),hh.applyMatrix4(s),e.ray.intersectsSphere(hh)!==!1&&(cp.copy(s).invert(),dh.copy(e.ray).applyMatrix4(cp),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;op.fromBufferAttribute(s.attributes.skinIndex,e),ap.fromBufferAttribute(s.attributes.skinWeight,e),rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ap.getComponent(r);if(o!==0){let a=op.getComponent(r);lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vx.copy(rp).applyMatrix4(lp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},to=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ci=class extends un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=xn,u=xn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},up=new ct,bx=new ct,ra=class i{constructor(e=[],t=[]){this.uuid=Ss(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bx;up.multiplyMatrices(a,t[r]),up.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ci(t,e,e,An,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new to),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var fh=new _,Mx=new _,Sx=new ot,gn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fh.subVectors(n,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sx.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new Ai,wx=new le(.5,.5),Cl=new _,no=class{constructor(e=new gn,t=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,m-g,E-v).normalize(),s[1].setComponents(c+o,f+u,m+g,E+v).normalize(),s[2].setComponents(c+a,f+h,m+x,E+b).normalize(),s[3].setComponents(c-a,f-h,m-x,E-b).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,m-p,E-y).normalize();else if(s[4].setComponents(c-l,f-d,m-p,E-y).normalize(),t===pi)s[5].setComponents(c+l,f+d,m+p,E+y).normalize();else if(t===Qo)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=wx.distanceTo(e.center);return Zs.radius=.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Cl.x=s.normal.x>0?e.max.x:e.min.x,Cl.y=s.normal.y>0?e.max.y:e.min.y,Cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qn=class extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new _,Xl=new _,hp=new ct,qo=new Yi,Rl=new Ai,ph=new _,dp=new _,Yn=class extends Ft{constructor(e=new dt,t=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wl.fromBufferAttribute(t,s-1),Xl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(s),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;hp.copy(s).invert(),qo.copy(e.ray).applyMatrix4(hp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),v=u.getX(x+1),b=Il(this,e,qo,l,m,v,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=Il(this,e,qo,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=Il(this,e,qo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Il(this,e,qo,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Il(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Wl.fromBufferAttribute(a,s),Xl.fromBufferAttribute(a,r),t.distanceSqToSegment(Wl,Xl,ph,dp)>n)return;ph.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ph);if(!(c<e.near||c>e.far))return{distance:c,point:dp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var fp=new _,pp=new _,Ri=class extends Yn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fp.distanceTo(pp);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends un{constructor(e,t,n,s,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var oa=class extends un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},aa=class extends un{constructor(e,t,n=Ms,s,r,o,a=xn,l=xn,c,u=Yr,h=1){if(u!==Yr&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},la=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},io=class i extends dt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=s+1,p=new _,m=new _;for(let v=0;v<=g;v++){let b=0,y=0,E=0,A=0;if(v<=n){let w=v/n,M=w*Math.PI/2;y=-u-e*Math.cos(M),E=e*Math.sin(M),A=-e*Math.cos(M),b=w*h}else if(v<=n+r){let w=(v-n)/r;y=-u+w*t,E=e,A=0,b=h+w*d}else{let w=(v-n-r)/n,M=w*Math.PI/2;y=u+e*Math.sin(M),E=e*Math.cos(M),A=e*Math.sin(M),b=h+d+w*h}let C=Math.max(0,Math.min(1,b/f)),L=0;v===0?L=.5/s:v===g&&(L=-.5/s);for(let w=0;w<=s;w++){let M=w/s,D=M*Math.PI*2,z=Math.sin(D),k=Math.cos(D);m.x=-E*k,m.y=y,m.z=E*z,a.push(m.x,m.y,m.z),p.set(-E*k,A,E*z),p.normalize(),l.push(p.x,p.y,p.z),c.push(M+L,C)}if(v>0){let w=(v-1)*x;for(let M=0;M<s;M++){let D=w+M,z=w+M+1,k=v*x+M,V=v*x+M+1;o.push(D,z,k),o.push(z,V,k)}}}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Fn=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new _,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},It=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function v(){let y=new _,E=new _,A=0,C=(t-e)/n;for(let L=0;L<=r;L++){let w=[],M=L/r,D=M*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,V=k*l+a,W=Math.sin(V),X=Math.cos(V);E.x=D*W,E.y=-M*n+p,E.z=D*X,h.push(E.x,E.y,E.z),y.set(W,C,X).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-M),w.push(g++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let M=x[w][L],D=x[w+1][L],z=x[w+1][L+1],k=x[w][L+1];(e>0||w!==0)&&(u.push(M,D,k),A+=3),(t>0||w!==r-1)&&(u.push(D,z,k),A+=3)}c.addGroup(m,A,0),m+=A}function b(y){let E=g,A=new le,C=new _,L=0,w=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let V=z/s*l+a,W=Math.cos(V),X=Math.sin(V);C.x=w*X,C.y=p*M,C.z=w*W,h.push(C.x,C.y,C.z),d.push(0,M,0),A.x=W*.5+.5,A.y=X*.5*M+.5,f.push(A.x,A.y),g++}for(let z=0;z<s;z++){let k=E+z,V=D+z;y===!0?u.push(V,V+1,k):u.push(V+1,V,k),L+=3}c.addGroup(m,L,y===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ca=class i extends It{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},so=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new _,y=new _,E=new _;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],y),f(t[A+2],E),l(b,y,E,v)}function l(v,b,y,E){let A=E+1,C=[];for(let L=0;L<=A;L++){C[L]=[];let w=v.clone().lerp(y,L/A),M=b.clone().lerp(y,L/A),D=A-L;for(let z=0;z<=D;z++)z===0&&L===A?C[L][z]=w:C[L][z]=w.clone().lerp(M,z/D)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){let M=Math.floor(w/2);w%2===0?(d(C[L][M+1]),d(C[L+1][M]),d(C[L][M])):(d(C[L][M+1]),d(C[L+1][M+1]),d(C[L+1][M]))}}function c(v){let b=new _;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){let v=new _;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=p(v)/2/Math.PI+.5,E=m(v)/Math.PI+.5;o.push(y,1-E)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],E=o[v+4],A=Math.max(b,y,E),C=Math.min(b,y,E);A>.9&&C<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let v=new _,b=new _,y=new _,E=new _,A=new le,C=new le,L=new le;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),E.copy(v).add(b).add(y).divideScalar(3);let D=p(E);x(A,M+0,v,D),x(C,M+2,b,D),x(L,M+4,y,D)}}function x(v,b,y,E){E<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,s=[],r=[],o=[],a=new _,l=new ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ro=class extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ql=class extends ro{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function td(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Pl=new _,mh=new td,gh=new td,xh=new td,Yl=class extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new _){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Pl.subVectors(s[0],s[1]).add(s[0]),c=Pl);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),mh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,p),gh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,p),xh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),xh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Tx(i,e){let t=1-i;return t*t*e}function Ex(i,e){return 2*(1-i)*i*e}function Ax(i,e){return i*i*e}function Jo(i,e,t,n){return Tx(i,e)+Ex(i,t)+Ax(i,n)}function Cx(i,e){let t=1-i;return t*t*t*e}function Rx(i,e){let t=1-i;return 3*t*t*i*e}function Ix(i,e){return 3*(1-i)*i*i*e}function Px(i,e){return i*i*i*e}function Ko(i,e,t,n,s){return Cx(i,e)+Rx(i,t)+Ix(i,n)+Px(i,s)}var ua=class extends Zn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends Zn{constructor(e=new _,t=new _,n=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends Zn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends Zn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Zn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Zn{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y),Jo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(mp(a,l.x,c.x,u.x,h.x),mp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:Yl,CubicBezierCurve:ua,CubicBezierCurve3:Zl,EllipseCurve:ro,LineCurve:ha,LineCurve3:jl,QuadraticBezierCurve:da,QuadraticBezierCurve3:Jl,SplineCurve:fa}),Kl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Eh[s.type]().fromJSON(s))}return this}},pa=class extends Kl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new da(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ua(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ro(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class extends pa{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new pa().fromJSON(s))}return this}};function Lx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=pm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ox(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ma(r,o,t,a,l,c,0),o}function pm(i,e,t,n,s){let r;if(s===Zx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=gp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=gp(o/n|0,i[o],i[o+1],r);return r&&oo(r,r.next)&&(xa(r),r=r.next),r}function nr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||Ht(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ma(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Gx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ux(i,n,s,r):Dx(i)){e.push(l.i,i.i,c.i),xa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Nx(nr(i),e),ma(i,e,t,n,s,r,2)):o===2&&Fx(i,e,t,n,s,r):ma(nr(i),e,t,n,s,r,1);break}}}function Dx(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Yo(s,a,r,l,o,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ux(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),x=Math.max(a,l,c),p=Math.max(u,h,d),m=Ah(f,g,e,t,n),v=Ah(x,p,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Yo(a,u,l,h,c,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Yo(a,u,l,h,c,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Yo(a,u,l,h,c,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Yo(a,u,l,h,c,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Nx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!oo(n,s)&&gm(n,t,t.next,s)&&ga(n,s)&&ga(s,n)&&(e.push(n.i,t.i,s.i),xa(t),xa(t.next),t=i=s),t=t.next}while(t!==i);return nr(t)}function Fx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xx(o,a)){let l=xm(o,a);o=nr(o,o.next),l=nr(l,l.next),ma(o,e,t,n,s,r,0),ma(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ox(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=pm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wx(c))}s.sort(Bx);for(let r=0;r<s.length;r++)t=zx(s[r],t);return t}function Bx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function zx(i,e){let t=kx(i,e);if(!t)return e;let n=xm(t,i);return nr(n,n.next),nr(t,t.next)}function kx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(oo(i,t))return t;do{if(oo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&mm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ga(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Vx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Vx(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function Gx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ah(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hx(s)}function Hx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ah(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Wx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Yo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&mm(i,e,t,n,s,r,o,a)}function Xx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qx(i,e)&&(ga(i,e)&&ga(e,i)&&Yx(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||oo(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oo(i,e){return i.x===e.x&&i.y===e.y}function gm(i,e,t,n){let s=Dl(Ht(i,e,t)),r=Dl(Ht(i,e,n)),o=Dl(Ht(t,n,i)),a=Dl(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Ll(i,t,e)||r===0&&Ll(i,n,e)||o===0&&Ll(t,i,n)||a===0&&Ll(t,e,n))}function Ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dl(i){return i>0?1:i<0?-1:0}function qx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ga(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function Yx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xm(i,e){let t=Ch(i.i,i.x,i.y),n=Ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gp(i,e,t,n){let s=Ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(e,t,n=2){return Lx(e,t,n)}},wi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];xp(e),yp(n,e);let o=e.length;t.forEach(xp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yp(n,t[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ir=class i extends dt{constructor(e=new ji([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:jx,b,y=!1,E,A,C,L;m&&(b=m.getSpacedPoints(u),y=!0,d=!1,E=m.computeFrenetFrames(u,!1),A=new _,C=new _,L=new _),d||(p=0,f=0,g=0,x=0);let w=a.extractPoints(c),M=w.shape,D=w.holes;if(!wi.isClockWise(M)){M=M.reverse();for(let te=0,Q=D.length;te<Q;te++){let J=D[te];wi.isClockWise(J)&&(D[te]=J.reverse())}}function k(te){let J=10000000000000001e-36,ee=te[0];for(let ye=1;ye<=te.length;ye++){let de=ye%te.length,be=te[de],ze=be.x-ee.x,qe=be.y-ee.y,P=ze*ze+qe*qe,S=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(ee.x),Math.abs(ee.y)),H=J*S*S;if(P<=H){te.splice(de,1),ye--;continue}ee=be}}k(M),D.forEach(k);let V=D.length,W=M;for(let te=0;te<V;te++){let Q=D[te];M=M.concat(Q)}function X(te,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Q,J)}let se=M.length;function j(te,Q,J){let ee,ye,de,be=te.x-Q.x,ze=te.y-Q.y,qe=J.x-te.x,P=J.y-te.y,S=be*be+ze*ze,H=be*P-ze*qe;if(Math.abs(H)>Number.EPSILON){let ne=Math.sqrt(S),ae=Math.sqrt(qe*qe+P*P),$=Q.x-ze/ne,Le=Q.y+be/ne,pe=J.x-P/ae,Ue=J.y+qe/ae,Ie=((pe-$)*P-(Ue-Le)*qe)/(be*P-ze*qe);ee=$+be*Ie-te.x,ye=Le+ze*Ie-te.y;let fe=ee*ee+ye*ye;if(fe<=2)return new le(ee,ye);de=Math.sqrt(fe/2)}else{let ne=!1;be>Number.EPSILON?qe>Number.EPSILON&&(ne=!0):be<-Number.EPSILON?qe<-Number.EPSILON&&(ne=!0):Math.sign(ze)===Math.sign(P)&&(ne=!0),ne?(ee=-ze,ye=be,de=Math.sqrt(S)):(ee=be,ye=ze,de=Math.sqrt(S/2))}return new le(ee/de,ye/de)}let re=[];for(let te=0,Q=W.length,J=Q-1,ee=te+1;te<Q;te++,J++,ee++)J===Q&&(J=0),ee===Q&&(ee=0),re[te]=j(W[te],W[J],W[ee]);let _e=[],Se,Be=re.concat();for(let te=0,Q=V;te<Q;te++){let J=D[te];Se=[];for(let ee=0,ye=J.length,de=ye-1,be=ee+1;ee<ye;ee++,de++,be++)de===ye&&(de=0),be===ye&&(be=0),Se[ee]=j(J[ee],J[de],J[be]);_e.push(Se),Be=Be.concat(Se)}let Ze;if(p===0)Ze=wi.triangulateShape(W,D);else{let te=[],Q=[];for(let J=0;J<p;J++){let ee=J/p,ye=f*Math.cos(ee*Math.PI/2),de=g*Math.sin(ee*Math.PI/2)+x;for(let be=0,ze=W.length;be<ze;be++){let qe=X(W[be],re[be],de);he(qe.x,qe.y,-ye),ee===0&&te.push(qe)}for(let be=0,ze=V;be<ze;be++){let qe=D[be];Se=_e[be];let P=[];for(let S=0,H=qe.length;S<H;S++){let ne=X(qe[S],Se[S],de);he(ne.x,ne.y,-ye),ee===0&&P.push(ne)}ee===0&&Q.push(P)}}Ze=wi.triangulateShape(te,Q)}let nt=Ze.length,je=g+x;for(let te=0;te<se;te++){let Q=d?X(M[te],Be[te],je):M[te];y?(C.copy(E.normals[0]).multiplyScalar(Q.x),A.copy(E.binormals[0]).multiplyScalar(Q.y),L.copy(b[0]).add(C).add(A),he(L.x,L.y,L.z)):he(Q.x,Q.y,0)}for(let te=1;te<=u;te++)for(let Q=0;Q<se;Q++){let J=d?X(M[Q],Be[Q],je):M[Q];y?(C.copy(E.normals[te]).multiplyScalar(J.x),A.copy(E.binormals[te]).multiplyScalar(J.y),L.copy(b[te]).add(C).add(A),he(L.x,L.y,L.z)):he(J.x,J.y,h/u*te)}for(let te=p-1;te>=0;te--){let Q=te/p,J=f*Math.cos(Q*Math.PI/2),ee=g*Math.sin(Q*Math.PI/2)+x;for(let ye=0,de=W.length;ye<de;ye++){let be=X(W[ye],re[ye],ee);he(be.x,be.y,h+J)}for(let ye=0,de=D.length;ye<de;ye++){let be=D[ye];Se=_e[ye];for(let ze=0,qe=be.length;ze<qe;ze++){let P=X(be[ze],Se[ze],ee);y?he(P.x,P.y+b[u-1].y,b[u-1].x+J):he(P.x,P.y,h+J)}}}Z(),N();function Z(){let te=s.length/3;if(d){let Q=0,J=se*Q;for(let ee=0;ee<nt;ee++){let ye=Ze[ee];O(ye[2]+J,ye[1]+J,ye[0]+J)}Q=u+p*2,J=se*Q;for(let ee=0;ee<nt;ee++){let ye=Ze[ee];O(ye[0]+J,ye[1]+J,ye[2]+J)}}else{for(let Q=0;Q<nt;Q++){let J=Ze[Q];O(J[2],J[1],J[0])}for(let Q=0;Q<nt;Q++){let J=Ze[Q];O(J[0]+se*u,J[1]+se*u,J[2]+se*u)}}n.addGroup(te,s.length/3-te,0)}function N(){let te=s.length/3,Q=0;ie(W,Q),Q+=W.length;for(let J=0,ee=D.length;J<ee;J++){let ye=D[J];ie(ye,Q),Q+=ye.length}n.addGroup(te,s.length/3-te,1)}function ie(te,Q){let J=te.length;for(;--J>=0;){let ee=J,ye=J-1;ye<0&&(ye=te.length-1);for(let de=0,be=u+p*2;de<be;de++){let ze=se*de,qe=se*(de+1),P=Q+ee+ze,S=Q+ye+ze,H=Q+ye+qe,ne=Q+ee+qe;B(P,S,H,ne)}}}function he(te,Q,J){l.push(te),l.push(Q),l.push(J)}function O(te,Q,J){ce(te),ce(Q),ce(J);let ee=s.length/3,ye=v.generateTopUV(n,s,ee-3,ee-2,ee-1);I(ye[0]),I(ye[1]),I(ye[2])}function B(te,Q,J,ee){ce(te),ce(Q),ce(ee),ce(Q),ce(J),ce(ee);let ye=s.length/3,de=v.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);I(de[0]),I(de[1]),I(de[3]),I(de[1]),I(de[2]),I(de[3])}function ce(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function I(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Eh[s.type]().fromJSON(s)),new i(n,e.options)}},jx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(d,1-g),new le(x,1-m)]:[new le(a,1-l),new le(u,1-h),new le(f,1-g),new le(p,1-m)]}};function Jx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ii=class i extends so{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ya=class i extends dt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new _,d=new le,f=new _,g=new _,x=new _,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let b=n+v*u*s,y=Math.sin(b),E=Math.cos(b);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*y,h.y=e[A].y,h.z=e[A].x*E,o.push(h.x,h.y,h.z),d.x=v/t,d.y=A/(e.length-1),a.push(d.x,d.y);let C=l[3*A+0]*y,L=l[3*A+1],w=l[3*A+0]*E;c.push(C,L,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let y=b+v*e.length,E=y,A=y+e.length,C=y+e.length+1,L=y+1;r.push(E,A,L),r.push(C,L,A)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ii=class i extends so{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ji=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let v=m*d-o;for(let b=0;b<c;b++){let y=b*h-r;g.push(y,-v,0),x.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),A=v+1+c*m;f.push(b,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ys=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new _,g=new le;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,b=v,y=v+n+1,E=v+n+2,A=v+1;a.push(b,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},_a=class i extends dt{constructor(e=new ji([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;wi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];wi.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=wi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],b=v[0]+h,y=v[1]+h,E=v[2]+h;n.push(b,y,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Kx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Kx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var si=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new _,d=new _,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],b=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let A=E/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(A+y,1-b),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let b=u[m][v+1],y=u[m][v],E=u[m+1][v],A=u[m+1][v+1];(m!==0||o>0)&&f.push(b,y,A),(m!==n-1||l<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sr=class i extends so{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},jn=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new _,h=new _,d=new _;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qt=class extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $l=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ul(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $x(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ec=class extends rr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-n;break;case Sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,l=2*n-t;break;case Sh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+v*o[c+E]+b*o[l+E]+y*o[h+E];return r}},tc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},nc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$x(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Zr;var _s=class extends Jn{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=$s;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};ic.prototype.ValueTypeName="color";var sc=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};sc.prototype.ValueTypeName="number";var rc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}},va=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Jn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=$s;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};oc.prototype.ValueTypeName="vector";var Ol={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ac=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ym=new ac,ao=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=new WeakMap,lc=class extends ao{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ol.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Vr.get(o);h===void 0&&(h=[],Vr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Jr("img");function l(){u(),t&&t(this);let h=Vr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Vr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ol.remove(`image:${e}`);let d=Vr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ol.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var lo=class extends ao{constructor(e){super(e)}load(e,t,n,s){let r=new un,o=new lc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ba=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ki=class extends ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yh=new ct,_p=new _,vp=new _,Ih=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_p.setFromMatrixPosition(e.matrixWorld),t.position.copy(_p),vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vp),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ma=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ph=class extends Ih{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var cc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nd="\\[\\]\\.:\\/",Qx=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",ey="[^"+nd.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",id),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){let t=ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);oy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Lh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _w=new Float32Array(1);var bp=new ct,Qi=class{constructor(e,t,n=0,s=1/0){this.ray=new Yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(e,t=!0,n=[]){return Dh(e,this,n,t),n.sort(Mp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dh(e[s],this,n,t);return n.sort(Mp),n}};function Mp(i,e){return i.distance-e.distance}function Dh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],e,t,!0)}}var co=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sp=new _,Nl=new _,Gr=new _,Hr=new _,_h=new _,ay=new _,ly=new _,or=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Sp.subVectors(e,this.start),Nl.subVectors(this.end,this.start);let n=Nl.dot(Nl),r=Nl.dot(Sp)/n;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=ay,n=ly){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Gr.subVectors(c,a),Hr.subVectors(u,l),_h.subVectors(a,l);let h=Gr.dot(Gr),d=Hr.dot(Hr),f=Hr.dot(_h);if(h<=s&&d<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=s)r=0,o=f/d,o=et(o,0,1);else{let g=Gr.dot(_h);if(d<=s)o=0,r=et(-g/h,0,1);else{let x=Gr.dot(Hr),p=h*d-x*x;p!==0?r=et((x*f-g*d)/p,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=et(-g/h,0,1)):o>1&&(o=1,r=et((x-g)/h,0,1))}}return t.copy(a).add(Gr.multiplyScalar(r)),n.copy(l).add(Hr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ar=class extends Ri{constructor(e=10,t=10,n=4473924,s=8947848){n=new He(n),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new dt;u.setAttribute("position",new Re(l,3)),u.setAttribute("color",new Re(c,3));let h=new qn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Sa=class extends Ri{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new dt;r.setIndex(new Mt(n,1)),r.setAttribute("position",new Re(s,3)),super(r,new qn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var wa=class extends Ri{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new dt;s.setAttribute("position",new Re(t,3)),s.setAttribute("color",new Re(n,3));let r=new qn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new He,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var lr=class extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sd(i,e,t,n){let s=cy(n);switch(t){case Xh:return i*e;case Yh:return i*e/s.components*s.byteLength;case wc:return i*e/s.components*s.byteLength;case Zh:return i*e*2/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case qh:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case Ec:return i*e*4/s.components*s.byteLength;case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Ac:case Rc:return Math.max(i,8)*Math.max(e,8)/2;case Pc:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case jc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cy(i){switch(i){case gi:case Vh:return{byteLength:1,components:1};case ho:case Gh:case fo:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case Ms:case bc:case xi:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xy(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_y=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Py=`#ifdef USE_IRIDESCENCE
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
#endif`,Ly=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vy=`#define PI 3.141592653589793
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
} // validated`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hy=`vec3 transformedNormal = objectNormal;
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
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
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
#endif`,g_=`struct PhysicalMaterial {
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
}`,x_=`
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yv=`uniform sampler2D t2D;
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,wv=`#if DEPTH_PACKING == 3200
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
}`,Tv=`#define DISTANCE
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
}`,Ev=`#define DISTANCE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Uv=`#define LAMBERT
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
}`,Nv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,kv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
}`,Hv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Zv=`uniform vec3 color;
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
}`,jv=`uniform float rotation;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:yy,alphahash_pars_fragment:_y,alphamap_fragment:vy,alphamap_pars_fragment:by,alphatest_fragment:My,alphatest_pars_fragment:Sy,aomap_fragment:wy,aomap_pars_fragment:Ty,batching_pars_vertex:Ey,batching_vertex:Ay,begin_vertex:Cy,beginnormal_vertex:Ry,bsdfs:Iy,iridescence_fragment:Py,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Ny,clipping_planes_vertex:Fy,color_fragment:Oy,color_pars_fragment:By,color_pars_vertex:zy,color_vertex:ky,common:Vy,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Xy,emissivemap_fragment:qy,emissivemap_pars_fragment:Yy,colorspace_fragment:Zy,colorspace_pars_fragment:jy,envmap_fragment:Jy,envmap_common_pars_fragment:Ky,envmap_pars_fragment:$y,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:u_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:h_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:x_,lights_fragment_maps:y_,lights_fragment_end:__,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:S_,map_fragment:w_,map_pars_fragment:T_,map_particle_fragment:E_,map_particle_pars_fragment:A_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:R_,morphinstance_vertex:I_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:D_,morphtarget_vertex:U_,normal_fragment_begin:N_,normal_fragment_maps:F_,normal_pars_fragment:O_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:Z_,dithering_fragment:j_,dithering_pars_fragment:J_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:xv,background_frag:yv,backgroundCube_vert:_v,backgroundCube_frag:vv,cube_vert:bv,cube_frag:Mv,depth_vert:Sv,depth_frag:wv,distanceRGBA_vert:Tv,distanceRGBA_frag:Ev,equirect_vert:Av,equirect_frag:Cv,linedashed_vert:Rv,linedashed_frag:Iv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Dv,meshlambert_frag:Uv,meshmatcap_vert:Nv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:kv,meshphysical_vert:Vv,meshphysical_frag:Gv,meshtoon_vert:Hv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:Zv,sprite_vert:jv,sprite_frag:Jv},Ee={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Li={basic:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:_n([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:_n([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:_n([Ee.points,Ee.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:_n([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:_n([Ee.common,Ee.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:_n([Ee.sprite,Ee.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:_n([Ee.common,Ee.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:_n([Ee.lights,Ee.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Li.physical={uniforms:_n([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var tu={r:0,b:0,g:0},fr=new $t,Kv=new ct;function $v(i,e,t,n,s,r,o){let a=new He(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,E=g(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){let E=g(y);E&&(E.isCubeTexture||E.mapping===Ta)?(u===void 0&&(u=new ve(new rt(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:dr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fr.copy(y.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(fr)),u.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,(h!==E||d!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ve(new Ji(2,2),new mi({name:"BackgroundMaterial",uniforms:dr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(tu,ed(i)),n.buffers.color.setClear(tu.r,tu.g,tu.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p,dispose:v}}function Qv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,D,z,k,V){let W=!1,X=h(k,z,D);r!==X&&(r=X,c(r.object)),W=f(M,k,z,V),W&&g(M,k,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(M,D,z,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,z){let k=z.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[D.id];W===void 0&&(W={},V[D.id]=W);let X=W[k];return X===void 0&&(X=d(l()),W[k]=X),X}function d(M){let D=[],z=[],k=[];for(let V=0;V<t;V++)D[V]=0,z[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,D,z,k){let V=r.attributes,W=D.attributes,X=0,se=z.getAttributes();for(let j in se)if(se[j].location>=0){let _e=V[j],Se=W[j];if(Se===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(M,D,z,k){let V={},W=D.attributes,X=0,se=z.getAttributes();for(let j in se)if(se[j].location>=0){let _e=W[j];_e===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));let Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),V[j]=Se,X++}r.attributes=V,r.attributesNum=X,r.index=k}function x(){let M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){let z=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;z[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),V[M]!==D&&(i.vertexAttribDivisor(M,D),V[M]=D)}function v(){let M=r.newAttributes,D=r.enabledAttributes;for(let z=0,k=D.length;z<k;z++)D[z]!==M[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function b(M,D,z,k,V,W,X){X===!0?i.vertexAttribIPointer(M,D,z,V,W):i.vertexAttribPointer(M,D,z,k,V,W)}function y(M,D,z,k){x();let V=k.attributes,W=z.getAttributes(),X=D.defaultAttributeValues;for(let se in W){let j=W[se];if(j.location>=0){let re=V[se];if(re===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let _e=re.normalized,Se=re.itemSize,Be=e.get(re);if(Be===void 0)continue;let Ze=Be.buffer,nt=Be.type,je=Be.bytesPerElement,Z=nt===i.INT||nt===i.UNSIGNED_INT||re.gpuType===bc;if(re.isInterleavedBufferAttribute){let N=re.data,ie=N.stride,he=re.offset;if(N.isInstancedInterleavedBuffer){for(let O=0;O<j.locationSize;O++)m(j.location+O,N.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let O=0;O<j.locationSize;O++)p(j.location+O);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let O=0;O<j.locationSize;O++)b(j.location+O,Se/j.locationSize,nt,_e,ie*je,(he+Se/j.locationSize*O)*je,Z)}else{if(re.isInstancedBufferAttribute){for(let N=0;N<j.locationSize;N++)m(j.location+N,re.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let N=0;N<j.locationSize;N++)p(j.location+N);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let N=0;N<j.locationSize;N++)b(j.location+N,Se/j.locationSize,nt,_e,Se*je,Se/j.locationSize*N*je,Z)}}else if(X!==void 0){let _e=X[se];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(j.location,_e);break;case 3:i.vertexAttrib3fv(j.location,_e);break;case 4:i.vertexAttrib4fv(j.location,_e);break;default:i.vertexAttrib1fv(j.location,_e)}}}}v()}function E(){L();for(let M in n){let D=n[M];for(let z in D){let k=D[z];for(let V in k)u(k[V].object),delete k[V];delete D[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let z in D){let k=D[z];for(let V in k)u(k[V].object),delete k[V];delete D[z]}delete n[M.id]}function C(M){for(let D in n){let z=n[D];if(z[M.id]===void 0)continue;let k=z[M.id];for(let V in k)u(k[V].object),delete k[V];delete z[M.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function eb(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xi&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function nb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gn,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,b=v*4,y=m.clippingState||null;l.value=y,y=u(g,d,b,f);for(let E=0;E!==b;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ib(i){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=cr:a===_c&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===yc||a===_c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var xo=4,_m=[.125,.215,.35,.446,.526,.582],gr=20,rd=new Ma,vm=new He,od=null,ad=0,ld=0,cd=!1,mr=(1+Math.sqrt(5))/2,go=1/mr,bm=[new _(-mr,go,0),new _(mr,go,0),new _(-go,0,mr),new _(go,0,mr),new _(0,mr,-go),new _(0,mr,go),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],sb=new _,su=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=sb}=r;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,nu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:fo,format:An,colorSpace:Qs,depthBuffer:!1},s=Mm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(r)),this._blurMaterial=ob(r,e,t)}return s}_compileMaterial(e){let t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,rd)}_sceneToCubeUV(e,t,n,s,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(vm),h.toneMapping=ts,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new hn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),p=new ve(new rt,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(vm),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let E=this._cubeSize;nu(s,y*E,b>2?E:0,E,E),h.setRenderTarget(s),m&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cr||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;nu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bm[(s-r-1)%bm.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ve(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gr-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):gr;p>gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);let m=[],v=0;for(let C=0;C<gr;++C){let L=C/x,w=Math.exp(-L*L/2);m.push(w),C===0?v+=w:C<p&&(v+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],E=3*y*(s>b-xo?s-b+xo:0),A=4*(this._cubeSize-y);nu(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(h,rd)}};function rb(i){let e=[],t=[],n=[],s=i,r=i-xo+1+_m.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xo?l=_m[o-i+xo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),b=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(w,x*g*A),b.set(d,p*g*A);let M=[A,A,A,A,A,A];y.set(M,m*g*A)}let E=new dt;E.setAttribute("position",new Mt(v,x)),E.setAttribute("uv",new Mt(b,p)),E.setAttribute("faceIndex",new Mt(y,m)),e.push(E),s>xo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mm(i,e,t){let n=new Ei(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ob(i,e,t){let n=new Float32Array(gr),s=new _(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vd(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Sm(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function wm(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}function ab(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===yc||l===_c,u=l===cr||l===ur;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new su(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new su(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cb(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){let E=v[b+0],A=v[b+1],C=v[b+2];d.push(E,A,A,C,C,E)}}else if(g!==void 0){let v=g.array;x=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let E=b+0,A=b+1,C=b+2;d.push(E,A,A,C,C,E)}}else return;let p=new(Qh(d)?ta:er)(d,1);p.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ub(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*x[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function db(i,e,t){let n=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*h),C=new ea(A,y,E,h);C.type=xi,C.needsUpdate=!0;let L=b*4;for(let M=0;M<h;M++){let D=p[M],z=m[M],k=v[M],V=y*E*4*M;for(let W=0;W<D.count;W++){let X=W*L;f===!0&&(s.fromBufferAttribute(D,W),A[V+X+0]=s.x,A[V+X+1]=s.y,A[V+X+2]=s.z,A[V+X+3]=0),g===!0&&(s.fromBufferAttribute(z,W),A[V+X+4]=s.x,A[V+X+5]=s.y,A[V+X+6]=s.z,A[V+X+7]=0),x===!0&&(s.fromBufferAttribute(k,W),A[V+X+8]=s.x,A[V+X+9]=s.y,A[V+X+10]=s.z,A[V+X+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new le(y,E)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fb(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Hm=new un,Tm=new aa(1,1),Wm=new ea,Xm=new Vl,qm=new ia,Em=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Im=new Float32Array(4);function vo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Em[s];if(r===void 0&&(r=new Float32Array(s),Em[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ru(i,e){let t=Am[e];t===void 0&&(t=new Int32Array(e),Am[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Im.set(n),i.uniformMatrix2fv(this.addr,!1,Im),rn(t,n)}}function _b(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Rm.set(n),i.uniformMatrix3fv(this.addr,!1,Rm),rn(t,n)}}function vb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Cm.set(n),i.uniformMatrix4fv(this.addr,!1,Cm),rn(t,n)}}function bb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Tb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Rb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tm.compareFunction=Jh,r=Tm):r=Hm,t.setTexture2D(e||r,s)}function Ib(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xm,s)}function Pb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qm,s)}function Lb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wm,s)}function Db(i){switch(i){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return xb;case 35674:return yb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return bb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Eb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ub(i,e){i.uniform1fv(this.addr,e)}function Nb(i,e){let t=vo(e,this.size,2);i.uniform2fv(this.addr,t)}function Fb(i,e){let t=vo(e,this.size,3);i.uniform3fv(this.addr,t)}function Ob(i,e){let t=vo(e,this.size,4);i.uniform4fv(this.addr,t)}function Bb(i,e){let t=vo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zb(i,e){let t=vo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kb(i,e){let t=vo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vb(i,e){i.uniform1iv(this.addr,e)}function Gb(i,e){i.uniform2iv(this.addr,e)}function Hb(i,e){i.uniform3iv(this.addr,e)}function Wb(i,e){i.uniform4iv(this.addr,e)}function Xb(i,e){i.uniform1uiv(this.addr,e)}function qb(i,e){i.uniform2uiv(this.addr,e)}function Yb(i,e){i.uniform3uiv(this.addr,e)}function Zb(i,e){i.uniform4uiv(this.addr,e)}function jb(i,e,t){let n=this.cache,s=e.length,r=ru(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hm,r[o])}function Jb(i,e,t){let n=this.cache,s=e.length,r=ru(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xm,r[o])}function Kb(i,e,t){let n=this.cache,s=e.length,r=ru(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qm,r[o])}function $b(i,e,t){let n=this.cache,s=e.length,r=ru(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wm,r[o])}function Qb(i){switch(i){case 5126:return Ub;case 35664:return Nb;case 35665:return Fb;case 35666:return Ob;case 35674:return Bb;case 35675:return zb;case 35676:return kb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return Hb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return Yb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return $b}}var hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}},dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ud=/(\w+)(\])?(\[|\.)?/g;function Pm(i,e){i.seq.push(e),i.map[e.id]=e}function eM(i,e,t){let n=i.name,s=n.length;for(ud.lastIndex=0;;){let r=ud.exec(n),o=ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pm(t,c===void 0?new hd(a,i,e):new dd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fd(a),Pm(t,h)),t=h}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eM(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Lm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var tM=37297,nM=0;function iM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Dm=new ot;function sM(i){_t._getMatrix(Dm,_t.workingColorSpace,i);let e=`mat3( ${Dm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case $o:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Um(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+iM(i.getShaderSource(e),a)}else return r}function rM(i,e){let t=sM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oM(i,e){let t;switch(e){case Yp:t="Linear";break;case Zp:t="Reinhard";break;case jp:t="Cineon";break;case xc:t="ACESFilmic";break;case Kp:t="AgX";break;case $p:t="Neutral";break;case Jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var iu=new _;function aM(){_t.getLuminanceCoefficients(iu);let i=iu.x.toFixed(4),e=iu.y.toFixed(4),t=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function cM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ia(i){return i!==""}function Nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(i){return i.replace(hM,fM)}var dM=new Map;function fM(i,e){let t=ut[e];if(t===void 0){let n=dM.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}var pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(i){return i.replace(pM,mM)}function mM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case ur:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function _M(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xp:e="ENVMAP_BLENDING_MIX";break;case qp:e="ENVMAP_BLENDING_ADD";break}return e}function vM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gM(t),c=xM(t),u=yM(t),h=_M(t),d=vM(t),f=lM(t),g=cM(r),x=s.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(p=[Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[Bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?ut.tonemapping_pars_fragment:"",t.toneMapping!==ts?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),aM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=pd(o),o=Nm(o,t),o=Fm(o,t),a=pd(a),a=Nm(a,t),a=Fm(a,t),o=Om(o),a=Om(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+p+o,y=v+m+a,E=Lm(s,s.VERTEX_SHADER,b),A=Lm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(A)||"",W=z.trim(),X=k.trim(),se=V.trim(),j=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{let _e=Um(s,E,"vertex"),Se=Um(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+_e+`
`+Se)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||se==="")&&(re=!1);re&&(D.diagnostics={runnable:j,programLog:W,vertexShader:{log:X,prefix:p},fragmentShader:{log:se,prefix:m}})}s.deleteShader(E),s.deleteShader(A),L=new yo(s,x),w=uM(s,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,tM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var MM=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gd(e),t.set(e,n)),n}},gd=class{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}};function SM(i,e,t,n,s,r,o){let a=new Qr,l=new md,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,D,z,k){let V=z.fog,W=k.geometry,X=w.isMeshStandardMaterial?z.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),j=se&&se.mapping===Ta?se.image.height:null,re=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=_e!==void 0?_e.length:0,Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let Ze,nt,je,Z;if(re){let pt=Li[re];Ze=pt.vertexShader,nt=pt.fragmentShader}else Ze=w.vertexShader,nt=w.fragmentShader,l.update(w),je=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);let N=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),he=k.isInstancedMesh===!0,O=k.isBatchedMesh===!0,B=!!w.map,ce=!!w.matcap,I=!!se,te=!!w.aoMap,Q=!!w.lightMap,J=!!w.bumpMap,ee=!!w.normalMap,ye=!!w.displacementMap,de=!!w.emissiveMap,be=!!w.metalnessMap,ze=!!w.roughnessMap,qe=w.anisotropy>0,P=w.clearcoat>0,S=w.dispersion>0,H=w.iridescence>0,ne=w.sheen>0,ae=w.transmission>0,$=qe&&!!w.anisotropyMap,Le=P&&!!w.clearcoatMap,pe=P&&!!w.clearcoatNormalMap,Ue=P&&!!w.clearcoatRoughnessMap,Ie=H&&!!w.iridescenceMap,fe=H&&!!w.iridescenceThicknessMap,Te=ne&&!!w.sheenColorMap,We=ne&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,we=!!w.specularColorMap,it=!!w.specularIntensityMap,F=ae&&!!w.transmissionMap,ge=ae&&!!w.thicknessMap,Me=!!w.gradientMap,Pe=!!w.alphaMap,me=w.alphaTest>0,oe=!!w.alphaHash,Ne=!!w.extensions,$e=ts;w.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($e=i.toneMapping);let vt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:nt,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:O,batchingColor:O&&k._colorsTexture!==null,instancing:he,instancingColor:he&&k.instanceColor!==null,instancingMorph:he&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qs,alphaToCoverage:!!w.alphaToCoverage,map:B,matcap:ce,envMap:I,envMapMode:I&&se.mapping,envMapCubeUVHeight:j,aoMap:te,lightMap:Q,bumpMap:J,normalMap:ee,displacementMap:d&&ye,emissiveMap:de,normalMapObjectSpace:ee&&w.normalMapType===nm,normalMapTangentSpace:ee&&w.normalMapType===jh,metalnessMap:be,roughnessMap:ze,anisotropy:qe,anisotropyMap:$,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ue,dispersion:S,iridescence:H,iridescenceMap:Ie,iridescenceThicknessMap:fe,sheen:ne,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:we,specularIntensityMap:it,transmission:ae,transmissionMap:F,thicknessMap:ge,gradientMap:Me,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:me,alphaHash:oe,combine:w.combine,mapUv:B&&x(w.map.channel),aoMapUv:te&&x(w.aoMap.channel),lightMapUv:Q&&x(w.lightMap.channel),bumpMapUv:J&&x(w.bumpMap.channel),normalMapUv:ee&&x(w.normalMap.channel),displacementMapUv:ye&&x(w.displacementMap.channel),emissiveMapUv:de&&x(w.emissiveMap.channel),metalnessMapUv:be&&x(w.metalnessMap.channel),roughnessMapUv:ze&&x(w.roughnessMap.channel),anisotropyMapUv:$&&x(w.anisotropyMap.channel),clearcoatMapUv:Le&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(w.sheenRoughnessMap.channel),specularMapUv:Fe&&x(w.specularMap.channel),specularColorMapUv:we&&x(w.specularColorMap.channel),specularIntensityMapUv:it&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:ge&&x(w.thicknessMap.channel),alphaMapUv:Pe&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ee||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(B||Pe),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:B&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===Tt,decodeVideoTextureEmissive:de&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===Tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wt,flipSided:w.side===En,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],D;if(M){let z=Li[M];D=fm.clone(z.uniforms)}else D=w.uniforms;return D}function E(w,M){let D;for(let z=0,k=u.length;z<k;z++){let V=u[z];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new bM(i,M,w,r),u.push(D)),D}function A(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:L}}function wM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function TM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function km(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),e++,m}function a(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||TM),n.length>1&&n.sort(d||zm),s.length>1&&s.sort(d||zm)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function EM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new km,i.set(n,[o])):s>=r.length?(o=new km,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function AM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new He};break;case"SpotLight":t={position:new _,direction:new _,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new _,halfWidth:new _,halfHeight:new _};break}return i[e.id]=t,t}}}function CM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var RM=0;function IM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function PM(i){let e=new AM,t=CM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new _);let s=new _,r=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,b=0,y=0,E=0,A=0,C=0;c.sort(IM);for(let w=0,M=c.length;w<M;w++){let D=c[w],z=D.color,k=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*k,h+=z.g*k,d+=z.b*k;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],k);C++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=X,f++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(k),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;let se=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,se.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=se.matrix,D.castShadow){let j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=W,y++}x++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(z).multiplyScalar(k),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=X,p++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let se=D.shadow,j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,j.shadowCameraNear=se.camera.near,j.shadowCameraFar=se.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=X,g++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(k),X.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[m]=X,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==v||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==E||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=v,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=E,L.numLightProbes=C,n.version=RM++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Vm(i){let e=new PM(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Vm(i),e.set(s,[a])):r>=o.length?(a=new Vm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
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
}`;function NM(i,e,t){let n=new no,s=new le,r=new le,o=new At,a=new $l({depthPacking:tm}),l=new Ql,c={},u=t.maxTextureSize,h={[qi]:En,[En]:qi,[Wt]:Wt},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:DM,fragmentShader:UM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(A,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(es),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=m!==Pi&&this.type===Pi,V=m===Pi&&this.type!==Pi;for(let W=0,X=A.length;W<X;W++){let se=A[W],j=se.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let re=j.getFrameExtents();if(s.multiply(re),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,j.mapSize.y=r.y)),j.map===null||k===!0||V===!0){let Se=this.type!==Pi?{minFilter:xn,magFilter:xn}:{};j.map!==null&&j.map.dispose(),j.map=new Ei(s.x,s.y,Se),j.map.texture.name=se.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let _e=j.getViewportCount();for(let Se=0;Se<_e;Se++){let Be=j.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(o),j.updateMatrices(se,Se),n=j.getFrustum(),y(C,L,j.camera,se,this.type)}j.isPointLightShadow!==!0&&this.type===Pi&&v(j,L),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,M,D)};function v(A,C){let L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,L,f,x,null)}function b(A,C,L,w){let M=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=M.uuid,k=C.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let W=V[k];W===void 0&&(W=M.clone(),V[k]=W,C.addEventListener("dispose",E)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Pi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=L}return M}function y(A,C,L,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let k=e.update(A),V=A.material;if(Array.isArray(V)){let W=k.groups;for(let X=0,se=W.length;X<se;X++){let j=W[X],re=V[j.materialIndex];if(re&&re.visible){let _e=b(A,re,w,M);A.onBeforeShadow(i,A,C,L,k,_e,j),i.renderBufferDirect(L,null,k,_e,A,j),A.onAfterShadow(i,A,C,L,k,_e,j)}}}else if(V.visible){let W=b(A,V,w,M);A.onBeforeShadow(i,A,C,L,k,W,null),i.renderBufferDirect(L,null,k,W,A,null),A.onAfterShadow(i,A,C,L,k,W,null)}}let z=A.children;for(let k=0,V=z.length;k<V;k++)y(z[k],C,L,w,M)}function E(A){A.target.removeEventListener("dispose",E);for(let L in c){let w=c[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var FM={[uc]:hc,[dc]:mc,[fc]:gc,[Ks]:pc,[hc]:uc,[mc]:dc,[gc]:fc,[pc]:Ks};function OM(i,e){function t(){let F=!1,ge=new At,Me=null,Pe=new At(0,0,0,0);return{setMask:function(me){Me!==me&&!F&&(i.colorMask(me,me,me,me),Me=me)},setLocked:function(me){F=me},setClear:function(me,oe,Ne,$e,vt){vt===!0&&(me*=$e,oe*=$e,Ne*=$e),ge.set(me,oe,Ne,$e),Pe.equals(ge)===!1&&(i.clearColor(me,oe,Ne,$e),Pe.copy(ge))},reset:function(){F=!1,Me=null,Pe.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,Me=null,Pe=null,me=null;return{setReversed:function(oe){if(ge!==oe){let Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ge=oe;let $e=me;me=null,this.setClear($e)}},getReversed:function(){return ge},setTest:function(oe){oe?N(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(oe){Me!==oe&&!F&&(i.depthMask(oe),Me=oe)},setFunc:function(oe){if(ge&&(oe=FM[oe]),Pe!==oe){switch(oe){case uc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=oe}},setLocked:function(oe){F=oe},setClear:function(oe){me!==oe&&(ge&&(oe=1-oe),i.clearDepth(oe),me=oe)},reset:function(){F=!1,Me=null,Pe=null,me=null,ge=!1}}}function s(){let F=!1,ge=null,Me=null,Pe=null,me=null,oe=null,Ne=null,$e=null,vt=null;return{setTest:function(pt){F||(pt?N(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!F&&(i.stencilMask(pt),ge=pt)},setFunc:function(pt,Ln,Sn){(Me!==pt||Pe!==Ln||me!==Sn)&&(i.stencilFunc(pt,Ln,Sn),Me=pt,Pe=Ln,me=Sn)},setOp:function(pt,Ln,Sn){(oe!==pt||Ne!==Ln||$e!==Sn)&&(i.stencilOp(pt,Ln,Sn),oe=pt,Ne=Ln,$e=Sn)},setLocked:function(pt){F=pt},setClear:function(pt){vt!==pt&&(i.clearStencil(pt),vt=pt)},reset:function(){F=!1,ge=null,Me=null,Pe=null,me=null,oe=null,Ne=null,$e=null,vt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,E=null,A=null,C=new He(0,0,0),L=0,w=!1,M=null,D=null,z=null,k=null,V=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,se=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=se>=2);let re=null,_e={},Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ze=new At().fromArray(Se),nt=new At().fromArray(Be);function je(F,ge,Me,Pe){let me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(F,oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Me;Ne++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ge+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return oe}let Z={};Z[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(i.DEPTH_TEST),o.setFunc(Ks),J(!1),ee(Uh),N(i.CULL_FACE),te(es);function N(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ie(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function he(F,ge){return h[F]!==ge?(i.bindFramebuffer(F,ge),h[F]=ge,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function O(F,ge){let Me=f,Pe=!1;if(F){Me=d.get(ge),Me===void 0&&(Me=[],d.set(ge,Me));let me=F.textures;if(Me.length!==me.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ne=me.length;oe<Ne;oe++)Me[oe]=i.COLOR_ATTACHMENT0+oe;Me.length=me.length,Pe=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Me)}function B(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let ce={[gs]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};ce[Ip]=i.MIN,ce[Pp]=i.MAX;let I={[Lp]:i.ZERO,[Dp]:i.ONE,[Up]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[kp]:i.SRC_ALPHA_SATURATE,[Bp]:i.DST_COLOR,[Fp]:i.DST_ALPHA,[Np]:i.ONE_MINUS_SRC_COLOR,[zl]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Op]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Hp]:i.CONSTANT_ALPHA,[Wp]:i.ONE_MINUS_CONSTANT_ALPHA};function te(F,ge,Me,Pe,me,oe,Ne,$e,vt,pt){if(F===es){x===!0&&(ie(i.BLEND),x=!1);return}if(x===!1&&(N(i.BLEND),x=!0),F!==Ap){if(F!==p||pt!==w){if((m!==gs||y!==gs)&&(i.blendEquation(i.FUNC_ADD),m=gs,y=gs),pt)switch(F){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,b=null,E=null,A=null,C.set(0,0,0),L=0,p=F,w=pt}return}me=me||ge,oe=oe||Me,Ne=Ne||Pe,(ge!==m||me!==y)&&(i.blendEquationSeparate(ce[ge],ce[me]),m=ge,y=me),(Me!==v||Pe!==b||oe!==E||Ne!==A)&&(i.blendFuncSeparate(I[Me],I[Pe],I[oe],I[Ne]),v=Me,b=Pe,E=oe,A=Ne),($e.equals(C)===!1||vt!==L)&&(i.blendColor($e.r,$e.g,$e.b,vt),C.copy($e),L=vt),p=F,w=!1}function Q(F,ge){F.side===Wt?ie(i.CULL_FACE):N(i.CULL_FACE);let Me=F.side===En;ge&&(Me=!Me),J(Me),F.blending===Js&&F.transparent===!1?te(es):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Pe=F.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function ee(F){F!==wp?(N(i.CULL_FACE),F!==D&&(F===Uh?i.cullFace(i.BACK):F===Tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),D=F}function ye(F){F!==z&&(X&&i.lineWidth(F),z=F)}function de(F,ge,Me){F?(N(i.POLYGON_OFFSET_FILL),(k!==ge||V!==Me)&&(i.polygonOffset(ge,Me),k=ge,V=Me)):ie(i.POLYGON_OFFSET_FILL)}function be(F){F?N(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function ze(F){F===void 0&&(F=i.TEXTURE0+W-1),re!==F&&(i.activeTexture(F),re=F)}function qe(F,ge,Me){Me===void 0&&(re===null?Me=i.TEXTURE0+W-1:Me=re);let Pe=_e[Me];Pe===void 0&&(Pe={type:void 0,texture:void 0},_e[Me]=Pe),(Pe.type!==F||Pe.texture!==ge)&&(re!==Me&&(i.activeTexture(Me),re=Me),i.bindTexture(F,ge||Z[F]),Pe.type=F,Pe.texture=ge)}function P(){let F=_e[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){Ze.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ze.copy(F))}function We(F){nt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Fe(F,ge){let Me=c.get(ge);Me===void 0&&(Me=new WeakMap,c.set(ge,Me));let Pe=Me.get(F);Pe===void 0&&(Pe=i.getUniformBlockIndex(ge,F.name),Me.set(F,Pe))}function we(F,ge){let Pe=c.get(ge).get(F);l.get(ge)!==Pe&&(i.uniformBlockBinding(ge,Pe,F.__bindingPointIndex),l.set(ge,Pe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,_e={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,E=null,A=null,C=new He(0,0,0),L=0,w=!1,M=null,D=null,z=null,k=null,V=null,Ze.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:ie,bindFramebuffer:he,drawBuffers:O,useProgram:B,setBlending:te,setMaterial:Q,setFlipSided:J,setCullFace:ee,setLineWidth:ye,setPolygonOffset:de,setScissorTest:be,activeTexture:ze,bindTexture:qe,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Ie,texImage3D:fe,updateUBOMapping:Fe,uniformBlockBinding:we,texStorage2D:pe,texStorage3D:Ue,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:$,compressedTexSubImage3D:Le,scissor:Te,viewport:We,reset:it}}function BM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):Jr("canvas")}function x(P,S,H){let ne=1,ae=qe(P);if((ae.width>H||ae.height>H)&&(ne=H/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let $=Math.floor(ne*ae.width),Le=Math.floor(ne*ae.height);h===void 0&&(h=g($,Le));let pe=S?g($,Le):h;return pe.width=$,pe.height=Le,pe.getContext("2d").drawImage(P,0,0,$,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+$+"x"+Le+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,S,H,ne,ae=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=S;if(S===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),S===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let Le=ae?$o:_t.getTransfer(ne);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=Le===Tt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(P,S){let H;return P?S===null||S===Ms||S===po?H=i.DEPTH24_STENCIL8:S===xi?H=i.DEPTH32F_STENCIL8:S===ho&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ms||S===po?H=i.DEPTH_COMPONENT24:S===xi?H=i.DEPTH_COMPONENT32F:S===ho&&(H=i.DEPTH_COMPONENT16),H}function E(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){let S=P.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&u.delete(S)}function C(P){let S=P.target;S.removeEventListener("dispose",C),M(S)}function L(P){let S=n.get(P);if(S.__webglInit===void 0)return;let H=P.source,ne=d.get(H);if(ne){let ae=ne[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(P),Object.keys(ne).length===0&&d.delete(H)}n.remove(P)}function w(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let H=P.source,ne=d.get(H);delete ne[S.__cacheKey],o.memory.textures--}function M(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ae=0;ae<S.__webglFramebuffer[ne].length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ne][ae]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=P.textures;for(let ne=0,ae=H.length;ne<ae;ne++){let $=n.get(H[ne]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(H[ne])}n.remove(P)}let D=0;function z(){D=0}function k(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function V(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function W(P,S){let H=n.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,P,S);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function X(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Z(H,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function se(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Z(H,P,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function j(P,S){let H=n.get(P);if(P.version>0&&H.__version!==P.version){N(H,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let re={[Nn]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},_e={[xn]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},Se={[im]:i.NEVER,[cm]:i.ALWAYS,[sm]:i.LESS,[Jh]:i.LEQUAL,[rm]:i.EQUAL,[lm]:i.GEQUAL,[om]:i.GREATER,[am]:i.NOTEQUAL};function Be(P,S){if(S.type===xi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===uo||S.magFilter===hr||S.magFilter===yn||S.minFilter===nn||S.minFilter===uo||S.minFilter===hr||S.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,re[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,_e[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==hr&&S.minFilter!==yn||S.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));let ne=S.source,ae=d.get(ne);ae===void 0&&(ae={},d.set(ne,ae));let $=V(S);if($!==P.__cacheKey){ae[$]===void 0&&(ae[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[$].usedTimes++;let Le=ae[P.__cacheKey];Le!==void 0&&(ae[P.__cacheKey].usedTimes--,Le.usedTimes===0&&w(S)),P.__cacheKey=$,P.__webglTexture=ae[$].texture}return H}function nt(P,S,H){return Math.floor(Math.floor(P/H)/S)}function je(P,S,H,ne){let $=P.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,ne,S.data);else{$.sort((fe,Te)=>fe.start-Te.start);let Le=0;for(let fe=1;fe<$.length;fe++){let Te=$[Le],We=$[fe],Fe=Te.start+Te.count,we=nt(We.start,S.width,4),it=nt(Te.start,S.width,4);We.start<=Fe+1&&we===it&&nt(We.start+We.count-1,S.width,4)===we?Te.count=Math.max(Te.count,We.start+We.count-Te.start):(++Le,$[Le]=We)}$.length=Le+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let fe=0,Te=$.length;fe<Te;fe++){let We=$[fe],Fe=Math.floor(We.start/4),we=Math.ceil(We.count/4),it=Fe%S.width,F=Math.floor(Fe/S.width),ge=we,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,it,F,ge,Me,H,ne,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function Z(P,S,H){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);let ae=Ze(P,S),$=S.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+H);let Le=n.get($);if($.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);let pe=_t.getPrimaries(_t.workingColorSpace),Ue=S.colorSpace===yi?null:_t.getPrimaries(S.colorSpace),Ie=S.colorSpace===yi||pe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let fe=x(S.image,!1,s.maxTextureSize);fe=ze(S,fe);let Te=r.convert(S.format,S.colorSpace),We=r.convert(S.type),Fe=b(S.internalFormat,Te,We,S.colorSpace,S.isVideoTexture);Be(ne,S);let we,it=S.mipmaps,F=S.isVideoTexture!==!0,ge=Le.__version===void 0||ae===!0,Me=$.dataReady,Pe=E(S,fe);if(S.isDepthTexture)Fe=y(S.format===mo,S.type),ge&&(F?t.texStorage2D(i.TEXTURE_2D,1,Fe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Fe,fe.width,fe.height,0,Te,We,null));else if(S.isDataTexture)if(it.length>0){F&&ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,it[0].width,it[0].height);for(let me=0,oe=it.length;me<oe;me++)we=it[me],F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,We,we.data):t.texImage2D(i.TEXTURE_2D,me,Fe,we.width,we.height,0,Te,We,we.data);S.generateMipmaps=!1}else F?(ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,fe.width,fe.height),Me&&je(S,fe,Te,We)):t.texImage2D(i.TEXTURE_2D,0,Fe,fe.width,fe.height,0,Te,We,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Fe,it[0].width,it[0].height,fe.depth);for(let me=0,oe=it.length;me<oe;me++)if(we=it[me],S.format!==An)if(Te!==null)if(F){if(Me)if(S.layerUpdates.size>0){let Ne=sd(we.width,we.height,S.format,S.type);for(let $e of S.layerUpdates){let vt=we.data.subarray($e*Ne/we.data.BYTES_PER_ELEMENT,($e+1)*Ne/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,$e,we.width,we.height,1,Te,vt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,fe.depth,Te,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Fe,we.width,we.height,fe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,fe.depth,Te,We,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Fe,we.width,we.height,fe.depth,0,Te,We,we.data)}else{F&&ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,it[0].width,it[0].height);for(let me=0,oe=it.length;me<oe;me++)we=it[me],S.format!==An?Te!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,We,we.data):t.texImage2D(i.TEXTURE_2D,me,Fe,we.width,we.height,0,Te,We,we.data)}else if(S.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Fe,fe.width,fe.height,fe.depth),Me)if(S.layerUpdates.size>0){let me=sd(fe.width,fe.height,S.format,S.type);for(let oe of S.layerUpdates){let Ne=fe.data.subarray(oe*me/fe.data.BYTES_PER_ELEMENT,(oe+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,Te,We,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,We,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,fe.width,fe.height,fe.depth,0,Te,We,fe.data);else if(S.isData3DTexture)F?(ge&&t.texStorage3D(i.TEXTURE_3D,Pe,Fe,fe.width,fe.height,fe.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,We,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,fe.width,fe.height,fe.depth,0,Te,We,fe.data);else if(S.isFramebufferTexture){if(ge)if(F)t.texStorage2D(i.TEXTURE_2D,Pe,Fe,fe.width,fe.height);else{let me=fe.width,oe=fe.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Fe,me,oe,0,Te,We,null),me>>=1,oe>>=1}}else if(it.length>0){if(F&&ge){let me=qe(it[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Fe,me.width,me.height)}for(let me=0,oe=it.length;me<oe;me++)we=it[me],F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,We,we):t.texImage2D(i.TEXTURE_2D,me,Fe,Te,We,we);S.generateMipmaps=!1}else if(F){if(ge){let me=qe(fe);t.texStorage2D(i.TEXTURE_2D,Pe,Fe,me.width,me.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,We,fe)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Te,We,fe);p(S)&&m(ne),Le.__version=$.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function N(P,S,H){if(S.image.length!==6)return;let ne=Ze(P,S),ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let $=n.get(ae);if(ae.version!==$.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);let Le=_t.getPrimaries(_t.workingColorSpace),pe=S.colorSpace===yi?null:_t.getPrimaries(S.colorSpace),Ue=S.colorSpace===yi||Le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Ie&&!fe?Te[oe]=x(S.image[oe],!0,s.maxCubemapSize):Te[oe]=fe?S.image[oe].image:S.image[oe],Te[oe]=ze(S,Te[oe]);let We=Te[0],Fe=r.convert(S.format,S.colorSpace),we=r.convert(S.type),it=b(S.internalFormat,Fe,we,S.colorSpace),F=S.isVideoTexture!==!0,ge=$.__version===void 0||ne===!0,Me=ae.dataReady,Pe=E(S,We);Be(i.TEXTURE_CUBE_MAP,S);let me;if(Ie){F&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,We.width,We.height);for(let oe=0;oe<6;oe++){me=Te[oe].mipmaps;for(let Ne=0;Ne<me.length;Ne++){let $e=me[Ne];S.format!==An?Fe!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,$e.width,$e.height,Fe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,it,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,$e.width,$e.height,Fe,we,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,it,$e.width,$e.height,0,Fe,we,$e.data)}}}else{if(me=S.mipmaps,F&&ge){me.length>0&&Pe++;let oe=qe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Fe,we,Te[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,it,Te[oe].width,Te[oe].height,0,Fe,we,Te[oe].data);for(let Ne=0;Ne<me.length;Ne++){let vt=me[Ne].image[oe].image;F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,vt.width,vt.height,Fe,we,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,it,vt.width,vt.height,0,Fe,we,vt.data)}}else{F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,we,Te[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,it,Fe,we,Te[oe]);for(let Ne=0;Ne<me.length;Ne++){let $e=me[Ne];F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,Fe,we,$e.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,it,Fe,we,$e.image[oe])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),$.__version=ae.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ie(P,S,H,ne,ae,$){let Le=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),Ue=b(H.internalFormat,Le,pe,H.colorSpace),Ie=n.get(S),fe=n.get(H);if(fe.__renderTarget=S,!Ie.__hasExternalTextures){let Te=Math.max(1,S.width>>$),We=Math.max(1,S.height>>$);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,$,Ue,Te,We,S.depth,0,Le,pe,null):t.texImage2D(ae,$,Ue,Te,We,0,Le,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ae,fe.__webglTexture,0,ye(S)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ae,fe.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(P,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let ne=S.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,$=y(S.stencilBuffer,ae),Le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=ye(S);de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,$,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,P)}else{let ne=S.textures;for(let ae=0;ae<ne.length;ae++){let $=ne[ae],Le=r.convert($.format,$.colorSpace),pe=r.convert($.type),Ue=b($.internalFormat,Le,pe,$.colorSpace),Ie=ye(S);H&&de(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ue,S.width,S.height):de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let ae=ne.__webglTexture,$=ye(S);if(S.depthTexture.format===Yr)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===mo)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function B(P){let S=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let ne=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){let ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=ne}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let ne=P.texture.mipmaps;ne&&ne.length>0?O(S.__webglFramebuffer[0],P):O(S.__webglFramebuffer,P)}else if(H){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),he(S.__webglDepthbuffer[ne],P,!1);else{let ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,$)}}else{let ne=P.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),he(S.__webglDepthbuffer,P,!1);else{let ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,S,H){let ne=n.get(P);S!==void 0&&ie(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&B(P)}function I(P){let S=P.texture,H=n.get(P),ne=n.get(S);P.addEventListener("dispose",C);let ae=P.textures,$=P.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<S.mipmaps.length;Ue++)H.__webglFramebuffer[pe][Ue]=i.createFramebuffer()}else H.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)H.__webglFramebuffer[pe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Le)for(let pe=0,Ue=ae.length;pe<Ue;pe++){let Ie=n.get(ae[pe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){let Ue=ae[pe];H.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);let Ie=r.convert(Ue.format,Ue.colorSpace),fe=r.convert(Ue.type),Te=b(Ue.internalFormat,Ie,fe,Ue.colorSpace,P.isXRRenderTarget===!0),We=ye(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Te,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),he(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Be(i.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)ie(H.__webglFramebuffer[pe][Ue],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else ie(H.__webglFramebuffer[pe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,Ue=ae.length;pe<Ue;pe++){let Ie=ae[pe],fe=n.get(Ie),Te=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,fe.__webglTexture),Be(Te,Ie),ie(H.__webglFramebuffer,P,Ie,i.COLOR_ATTACHMENT0+pe,Te,0),p(Ie)&&m(Te)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),Be(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)ie(H.__webglFramebuffer[Ue],P,S,i.COLOR_ATTACHMENT0,pe,Ue);else ie(H.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,pe,0);p(S)&&m(pe),t.unbindTexture()}P.depthBuffer&&B(P)}function te(P){let S=P.textures;for(let H=0,ne=S.length;H<ne;H++){let ae=S[H];if(p(ae)){let $=v(P),Le=n.get(ae).__webglTexture;t.bindTexture($,Le),m($),t.unbindTexture()}}}let Q=[],J=[];function ee(P){if(P.samples>0){if(de(P)===!1){let S=P.textures,H=P.width,ne=P.height,ae=i.COLOR_BUFFER_BIT,$=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(P),pe=S.length>1;if(pe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ue=P.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);let fe=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,ae,i.NEAREST),l===!0&&(Q.length=0,J.length=0,Q.push(i.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push($),J.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);let fe=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ye(P){return Math.min(s.maxSamples,P.samples)}function de(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(P){let S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ze(P,S){let H=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Qs&&H!==yi&&(_t.getTransfer(H)===Tt?(ne!==An||ae!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=I,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=de}function zM(i,e){function t(n,s=yi){let r,o=_t.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===fo)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===An)return i.RGBA;if(n===Yr)return i.DEPTH_COMPONENT;if(n===mo)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===Zh)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Ea||n===Aa||n===Ca||n===Ra)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Cc||n===Rc||n===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Lc)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===jc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===$c||n===Qc||n===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`,xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mi({vertexShader:kM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends Ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new xd,m={},v=t.getContextAttributes(),b=null,y=null,E=[],A=[],C=new le,L=null,w=new Kt;w.viewport=new At;let M=new Kt;M.viewport=new At;let D=[w,M],z=new cc,k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let N=E[Z];return N===void 0&&(N=new eo,E[Z]=N),N.getTargetRaySpace()},this.getControllerGrip=function(Z){let N=E[Z];return N===void 0&&(N=new eo,E[Z]=N),N.getGripSpace()},this.getHand=function(Z){let N=E[Z];return N===void 0&&(N=new eo,E[Z]=N),N.getHandSpace()};function W(Z){let N=A.indexOf(Z.inputSource);if(N===-1)return;let ie=E[N];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,c||o),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<E.length;Z++){let N=A[Z];N!==null&&(A[Z]=null,E[Z].disconnect(N))}k=null,V=null,p.reset();for(let Z in m)delete m[Z];e.setRenderTarget(b),f=null,d=null,h=null,s=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,he=null,O=null;v.depth&&(O=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?mo:Yr,he=v.stencil?po:Ms);let B={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(B),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ei(d.textureWidth,d.textureHeight,{format:An,type:gi,depthTexture:new aa(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ei(f.framebufferWidth,f.framebufferHeight,{format:An,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(Z){for(let N=0;N<Z.removed.length;N++){let ie=Z.removed[N],he=A.indexOf(ie);he>=0&&(A[he]=null,E[he].disconnect(ie))}for(let N=0;N<Z.added.length;N++){let ie=Z.added[N],he=A.indexOf(ie);if(he===-1){for(let B=0;B<E.length;B++)if(B>=A.length){A.push(ie),he=B;break}else if(A[B]===null){A[B]=ie,he=B;break}if(he===-1)break}let O=E[he];O&&O.connect(ie)}}let j=new _,re=new _;function _e(Z,N,ie){j.setFromMatrixPosition(N.matrixWorld),re.setFromMatrixPosition(ie.matrixWorld);let he=j.distanceTo(re),O=N.projectionMatrix.elements,B=ie.projectionMatrix.elements,ce=O[14]/(O[10]-1),I=O[14]/(O[10]+1),te=(O[9]+1)/O[5],Q=(O[9]-1)/O[5],J=(O[8]-1)/O[0],ee=(B[8]+1)/B[0],ye=ce*J,de=ce*ee,be=he/(-J+ee),ze=be*-J;if(N.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),O[10]===-1)Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let qe=ce+be,P=I+be,S=ye-ze,H=de+(he-ze),ne=te*I/P*qe,ae=Q*I/P*qe;Z.projectionMatrix.makePerspective(S,H,ne,ae,qe,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,N){N===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(N.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let N=Z.near,ie=Z.far;p.texture!==null&&(p.depthNear>0&&(N=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),z.near=M.near=w.near=N,z.far=M.far=w.far=ie,(k!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,V=z.far),z.layers.mask=Z.layers.mask|6,w.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let he=Z.parent,O=z.cameras;Se(z,he);for(let B=0;B<O.length;B++)Se(O[B],he);O.length===2?_e(z,w,M):z.projectionMatrix.copy(w.projectionMatrix),Be(Z,z,he)};function Be(Z,N,ie){ie===null?Z.matrix.copy(N.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(N.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=jr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Z){return m[Z]};let Ze=null;function nt(Z,N){if(u=N.getViewerPose(c||o),g=N,u!==null){let ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;ie.length!==z.cameras.length&&(z.cameras.length=0,he=!0);for(let I=0;I<ie.length;I++){let te=ie[I],Q=null;if(f!==null)Q=f.getViewport(te);else{let ee=h.getViewSubImage(d,te);Q=ee.viewport,I===0&&(e.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(y))}let J=D[I];J===void 0&&(J=new Kt,J.layers.enable(I),J.viewport=new At,D[I]=J),J.matrix.fromArray(te.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(te.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),he===!0&&z.cameras.push(J)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let I=h.getDepthInformation(ie[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(O&&O.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<ie.length;I++){let te=ie[I].camera;if(te){let Q=m[te];Q||(Q=new la,m[te]=Q);let J=h.getCameraImage(te);Q.sourceTexture=J}}}}for(let ie=0;ie<E.length;ie++){let he=A[ie],O=E[ie];he!==null&&O!==void 0&&O.update(he,N,c||o)}Ze&&Ze(Z,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let je=new Gm;je.setAnimationLoop(nt),this.setAnimationLoop=function(Z){Ze=Z},this.dispose=function(){}}},pr=new $t,GM=new ct;function HM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ed(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,pr.copy(y),pr.x*=-1,pr.y*=-1,pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),p.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(pr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function WM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(v,E);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){let b=h();v.__bindingPointIndex=b;let y=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=y.length;A<C;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,M=L.length;w<M;w++){let D=L[w];if(f(D,A,w,E)===!0){let z=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],V=0;for(let W=0;W<k.length;W++){let X=k[W],se=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+V,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,V),V+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,y,E){let A=v.value,C=b+"_"+y;if(E[C]===void 0)return typeof A=="number"||typeof A=="boolean"?E[C]=A:E[C]=A.clone(),!0;{let L=E[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(v){let b=v.uniforms,y=0,E=16;for(let C=0,L=b.length;C<L;C++){let w=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,D=w.length;M<D;M++){let z=w[M],k=Array.isArray(z.value)?z.value:[z.value];for(let V=0,W=k.length;V<W;V++){let X=k[V],se=x(X),j=y%E,re=j%se.boundary,_e=j+re;y+=re,_e!==0&&E-_e<se.storage&&(y+=E-_e),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=se.storage}}}let A=y%E;return A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){let b=v.target;b.removeEventListener("dispose",p);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var _o=class{constructor(e={}){let{canvas:t=um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=Nt;let A=0,C=0,L=null,w=-1,M=null,D=new At,z=new At,k=null,V=new He(0),W=0,X=t.width,se=t.height,j=1,re=null,_e=null,Se=new At(0,0,X,se),Be=new At(0,0,X,se),Ze=!1,nt=new no,je=!1,Z=!1,N=new ct,ie=new _,he=new At,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function ce(){return L===null?j:1}let I=n;function te(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){let U="webgl2";if(I=te(U,T),I===null)throw te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,J,ee,ye,de,be,ze,qe,P,S,H,ne,ae,$,Le,pe,Ue,Ie,fe,Te,We,Fe,we,it;function F(){Q=new lb(I),Q.init(),Fe=new zM(I,Q),J=new tb(I,Q,e,Fe),ee=new OM(I,Q),J.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),ye=new hb(I),de=new wM,be=new BM(I,Q,ee,de,J,Fe,ye),ze=new ib(y),qe=new ab(y),P=new xy(I),we=new Qv(I,P),S=new cb(I,P,ye,we),H=new fb(I,S,P,ye),fe=new db(I,J,be),pe=new nb(de),ne=new SM(y,ze,qe,Q,J,we,pe),ae=new HM(y,de),$=new EM,Le=new LM(Q),Ie=new $v(y,ze,qe,ee,H,f,l),Ue=new NM(y,H,J),it=new WM(I,ye,J,ee),Te=new eb(I,Q,ye),We=new ub(I,Q,ye),ye.programs=ne.programs,y.capabilities=J,y.extensions=Q,y.properties=de,y.renderLists=$,y.shadowMap=Ue,y.state=ee,y.info=ye}F();let ge=new yd(y,I);this.xr=ge,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(X,se,!1))},this.getSize=function(T){return T.set(X,se)},this.setSize=function(T,U,Y=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,se=U,t.width=Math.floor(T*j),t.height=Math.floor(U*j),Y===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*j,se*j).floor()},this.setDrawingBufferSize=function(T,U,Y){X=T,se=U,j=Y,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,U,Y,K){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,U,Y,K),ee.viewport(D.copy(Se).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,U,Y,K){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,U,Y,K),ee.scissor(z.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){ee.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let K=0;if(T){let G=!1;if(L!==null){let xe=L.texture.format;G=xe===Ec||xe===Tc||xe===wc}if(G){let xe=L.texture.type,Ae=xe===gi||xe===Ms||xe===ho||xe===po||xe===Mc||xe===Sc,Oe=Ie.getClearColor(),De=Ie.getClearAlpha(),Je=Oe.r,Qe=Oe.g,Xe=Oe.b;Ae?(g[0]=Je,g[1]=Qe,g[2]=Xe,g[3]=De,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Je,x[1]=Qe,x[2]=Xe,x[3]=De,I.clearBufferiv(I.COLOR,0,x))}else K|=I.COLOR_BUFFER_BIT}U&&(K|=I.DEPTH_BUFFER_BIT),Y&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ie.dispose(),$.dispose(),Le.dispose(),de.dispose(),ze.dispose(),qe.dispose(),H.dispose(),we.dispose(),it.dispose(),ne.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Sn),ge.removeEventListener("sessionend",Vs),ui.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=ye.autoReset,U=Ue.enabled,Y=Ue.autoUpdate,K=Ue.needsUpdate,G=Ue.type;F(),ye.autoReset=T,Ue.enabled=U,Ue.autoUpdate=Y,Ue.needsUpdate=K,Ue.type=G}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){let U=T.target;U.removeEventListener("dispose",oe),Ne(U)}function Ne(T){$e(T),de.remove(T)}function $e(T){let U=de.get(T).programs;U!==void 0&&(U.forEach(function(Y){ne.releaseProgram(Y)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,K,G,xe){U===null&&(U=O);let Ae=G.isMesh&&G.matrixWorld.determinant()<0,Oe=ul(T,U,Y,K,G);ee.setMaterial(K,Ae);let De=Y.index,Je=1;if(K.wireframe===!0){if(De=S.getWireframeAttribute(Y),De===void 0)return;Je=2}let Qe=Y.drawRange,Xe=Y.attributes.position,gt=Qe.start*Je,Et=(Qe.start+Qe.count)*Je;xe!==null&&(gt=Math.max(gt,xe.start*Je),Et=Math.min(Et,(xe.start+xe.count)*Je)),De!==null?(gt=Math.max(gt,0),Et=Math.min(Et,De.count)):Xe!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,Xe.count));let qt=Et-gt;if(qt<0||qt===1/0)return;we.setup(G,K,Oe,Y,De);let Ut,Rt=Te;if(De!==null&&(Ut=P.get(De),Rt=We,Rt.setIndex(Ut)),G.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*ce()),Rt.setMode(I.LINES)):Rt.setMode(I.TRIANGLES);else if(G.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),ee.setLineWidth(Ye*ce()),G.isLineSegments?Rt.setMode(I.LINES):G.isLineLoop?Rt.setMode(I.LINE_LOOP):Rt.setMode(I.LINE_STRIP)}else G.isPoints?Rt.setMode(I.POINTS):G.isSprite&&Rt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ye=G._multiDrawStarts,Vt=G._multiDrawCounts,bt=G._multiDrawCount,Gn=De?P.get(De).bytesPerElement:1,Cr=de.get(K).currentProgram.getUniforms();for(let Hn=0;Hn<bt;Hn++)Cr.setValue(I,"_gl_DrawID",Hn),Rt.render(Ye[Hn]/Gn,Vt[Hn])}else if(G.isInstancedMesh)Rt.renderInstances(gt,qt,G.count);else if(Y.isInstancedBufferGeometry){let Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Vt=Math.min(Y.instanceCount,Ye);Rt.renderInstances(gt,qt,Vt)}else Rt.render(gt,qt)};function vt(T,U,Y){T.transparent===!0&&T.side===Wt&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Dn(T,U,Y),T.side=qi,T.needsUpdate=!0,Dn(T,U,Y),T.side=Wt):Dn(T,U,Y)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),m=Le.get(Y),m.init(U),b.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==Y&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let Oe=xe[Ae];vt(Oe,Y,G),K.add(Oe)}else vt(xe,Y,G),K.add(xe)}),m=b.pop(),K},this.compileAsync=function(T,U,Y=null){let K=this.compile(T,U,Y);return new Promise(G=>{function xe(){if(K.forEach(function(Ae){de.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){G(T);return}setTimeout(xe,10)}Q.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let pt=null;function Ln(T){pt&&pt(T)}function Sn(){ui.stop()}function Vs(){ui.start()}let ui=new Gm;ui.setAnimationLoop(Ln),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(T){pt=T,ge.setAnimationLoop(T),T===null?ui.stop():ui.start()},ge.addEventListener("sessionstart",Sn),ge.addEventListener("sessionend",Vs),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(U),U=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,L),m=Le.get(T,b.length),m.init(U),b.push(m),N.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(N,pi,U.reversedDepth),Z=this.localClippingEnabled,je=pe.init(this.clippingPlanes,Z),p=$.get(T,v.length),p.init(),v.push(p),ge.enabled===!0&&ge.isPresenting===!0){let xe=y.xr.getDepthSensingMesh();xe!==null&&Gs(xe,U,-1/0,y.sortObjects)}Gs(T,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(re,_e),B=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,B&&Ie.addToRenderList(p,T),this.info.render.frame++,je===!0&&pe.beginShadows();let Y=m.state.shadowsArray;Ue.render(Y,T,U),je===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=p.opaque,G=p.transmissive;if(m.setupLights(),U.isArrayCamera){let xe=U.cameras;if(G.length>0)for(let Ae=0,Oe=xe.length;Ae<Oe;Ae++){let De=xe[Ae];ko(K,G,T,De)}B&&Ie.render(T);for(let Ae=0,Oe=xe.length;Ae<Oe;Ae++){let De=xe[Ae];zo(p,T,De,De.viewport)}}else G.length>0&&ko(K,G,T,U),B&&Ie.render(T),zo(p,T,U);L!==null&&C===0&&(be.updateMultisampleRenderTarget(L),be.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,U),we.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],je===!0&&pe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Gs(T,U,Y,K){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){K&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(N);let Ae=H.update(T),Oe=T.material;Oe.visible&&p.push(T,Ae,Oe,Y,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){let Ae=H.update(T),Oe=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),he.copy(Ae.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(N)),Array.isArray(Oe)){let De=Ae.groups;for(let Je=0,Qe=De.length;Je<Qe;Je++){let Xe=De[Je],gt=Oe[Xe.materialIndex];gt&&gt.visible&&p.push(T,Ae,gt,Y,he.z,Xe)}}else Oe.visible&&p.push(T,Ae,Oe,Y,he.z,null)}}let xe=T.children;for(let Ae=0,Oe=xe.length;Ae<Oe;Ae++)Gs(xe[Ae],U,Y,K)}function zo(T,U,Y,K){let G=T.opaque,xe=T.transmissive,Ae=T.transparent;m.setupLightsView(Y),je===!0&&pe.setGlobalState(y.clippingPlanes,Y),K&&ee.viewport(D.copy(K)),G.length>0&&Hs(G,U,Y),xe.length>0&&Hs(xe,U,Y),Ae.length>0&&Hs(Ae,U,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function ko(T,U,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Ei(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?fo:gi,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let xe=m.state.transmissionRenderTarget[K.id],Ae=K.viewport||D;xe.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),De=y.getActiveCubeFace(),Je=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(V),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),B&&Ie.render(Y);let Qe=y.toneMapping;y.toneMapping=ts;let Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),je===!0&&pe.setGlobalState(y.clippingPlanes,K),Hs(T,Y,K),be.updateMultisampleRenderTarget(xe),be.updateRenderTargetMipmap(xe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Et=0,qt=U.length;Et<qt;Et++){let Ut=U[Et],Rt=Ut.object,Ye=Ut.geometry,Vt=Ut.material,bt=Ut.group;if(Vt.side===Wt&&Rt.layers.test(K.layers)){let Gn=Vt.side;Vt.side=En,Vt.needsUpdate=!0,zi(Rt,Y,K,Ye,Vt,bt),Vt.side=Gn,Vt.needsUpdate=!0,gt=!0}}gt===!0&&(be.updateMultisampleRenderTarget(xe),be.updateRenderTargetMipmap(xe))}y.setRenderTarget(Oe,De,Je),y.setClearColor(V,W),Xe!==void 0&&(K.viewport=Xe),y.toneMapping=Qe}function Hs(T,U,Y){let K=U.isScene===!0?U.overrideMaterial:null;for(let G=0,xe=T.length;G<xe;G++){let Ae=T[G],Oe=Ae.object,De=Ae.geometry,Je=Ae.group,Qe=Ae.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),Oe.layers.test(Y.layers)&&zi(Oe,U,Y,De,Qe,Je)}}function zi(T,U,Y,K,G,xe){T.onBeforeRender(y,U,Y,K,G,xe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,U,Y,K,T,xe),G.transparent===!0&&G.side===Wt&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,y.renderBufferDirect(Y,U,K,G,T,xe),G.side=qi,G.needsUpdate=!0,y.renderBufferDirect(Y,U,K,G,T,xe),G.side=Wt):y.renderBufferDirect(Y,U,K,G,T,xe),T.onAfterRender(y,U,Y,K,G,xe)}function Dn(T,U,Y){U.isScene!==!0&&(U=O);let K=de.get(T),G=m.state.lights,xe=m.state.shadowsArray,Ae=G.state.version,Oe=ne.getParameters(T,G.state,xe,U,Y),De=ne.getProgramCacheKey(Oe),Je=K.programs;K.environment=T.isMeshStandardMaterial?U.environment:null,K.fog=U.fog,K.envMap=(T.isMeshStandardMaterial?qe:ze).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",oe),Je=new Map,K.programs=Je);let Qe=Je.get(De);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Ae)return cl(T,Oe),Qe}else Oe.uniforms=ne.getUniforms(T),T.onBeforeCompile(Oe,y),Qe=ne.acquireProgram(Oe,De),Je.set(De,Qe),K.uniforms=Oe.uniforms;let Xe=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),cl(T,Oe),K.needsLights=ue(T),K.lightsStateVersion=Ae,K.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function ll(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function cl(T,U){let Y=de.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ul(T,U,Y,K,G){U.isScene!==!0&&(U=O),be.resetTextureUnits();let xe=U.fog,Ae=K.isMeshStandardMaterial?U.environment:null,Oe=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qs,De=(K.isMeshStandardMaterial?qe:ze).get(K.envMap||Ae),Je=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color,qt=ts;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(qt=y.toneMapping);let Ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=Ut!==void 0?Ut.length:0,Ye=de.get(K),Vt=m.state.lights;if(je===!0&&(Z===!0||T!==M)){let wn=T===M&&K.id===w;pe.setState(K,T,wn)}let bt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Vt.state.version||Ye.outputColorSpace!==Oe||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==De||K.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==pe.numPlanes||Ye.numIntersection!==pe.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==Qe||Ye.morphTargets!==Xe||Ye.morphNormals!==gt||Ye.morphColors!==Et||Ye.toneMapping!==qt||Ye.morphTargetsCount!==Rt)&&(bt=!0):(bt=!0,Ye.__version=K.version);let Gn=Ye.currentProgram;bt===!0&&(Gn=Dn(K,U,G));let Cr=!1,Hn=!1,Vo=!1,Gt=Gn.getUniforms(),Qn=Ye.uniforms;if(ee.useProgram(Gn.program)&&(Cr=!0,Hn=!0,Vo=!0),K.id!==w&&(w=K.id,Hn=!0),Cr||M!==T){ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Gt.setValue(I,"projectionMatrix",T.projectionMatrix),Gt.setValue(I,"viewMatrix",T.matrixWorldInverse);let Un=Gt.map.cameraPosition;Un!==void 0&&Un.setValue(I,ie.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&Gt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Gt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Hn=!0,Vo=!0)}if(G.isSkinnedMesh){Gt.setOptional(I,G,"bindMatrix"),Gt.setOptional(I,G,"bindMatrixInverse");let wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Gt.setValue(I,"boneTexture",wn.boneTexture,be))}G.isBatchedMesh&&(Gt.setOptional(I,G,"batchingTexture"),Gt.setValue(I,"batchingTexture",G._matricesTexture,be),Gt.setOptional(I,G,"batchingIdTexture"),Gt.setValue(I,"batchingIdTexture",G._indirectTexture,be),Gt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Gt.setValue(I,"batchingColorTexture",G._colorsTexture,be));let ei=Y.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&fe.update(G,Y,Gn),(Hn||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Gt.setValue(I,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Qn.envMap.value=De,Qn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&U.environment!==null&&(Qn.envMapIntensity.value=U.environmentIntensity),Hn&&(Gt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ye.needsLights&&q(Qn,Vo),xe&&K.fog===!0&&ae.refreshFogUniforms(Qn,xe),ae.refreshMaterialUniforms(Qn,K,j,se,m.state.transmissionRenderTarget[T.id]),yo.upload(I,ll(Ye),Qn,be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(yo.upload(I,ll(Ye),Qn,be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Gt.setValue(I,"center",G.center),Gt.setValue(I,"modelViewMatrix",G.modelViewMatrix),Gt.setValue(I,"normalMatrix",G.normalMatrix),Gt.setValue(I,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let wn=K.uniformsGroups;for(let Un=0,Wu=wn.length;Un<Wu;Un++){let Ws=wn[Un];it.update(Ws,Gn),it.bind(Ws,Gn)}}return Gn}function q(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ue(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,U,Y){let K=de.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),de.get(T.texture).__webglTexture=U,de.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=de.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0};let Ce=I.createFramebuffer();this.setRenderTarget=function(T,U=0,Y=0){L=T,A=U,C=Y;let K=!0,G=null,xe=!1,Ae=!1;if(T){let De=de.get(T);if(De.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(De.__webglFramebuffer===void 0)be.setupRenderTarget(T);else if(De.__hasExternalTextures)be.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xe=T.depthTexture;if(De.__boundDepthTexture!==Xe){if(Xe!==null&&de.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(T)}}let Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ae=!0);let Qe=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[U])?G=Qe[U][Y]:G=Qe[U],xe=!0):T.samples>0&&be.useMultisampledRTT(T)===!1?G=de.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?G=Qe[Y]:G=Qe,D.copy(T.viewport),z.copy(T.scissor),k=T.scissorTest}else D.copy(Se).multiplyScalar(j).floor(),z.copy(Be).multiplyScalar(j).floor(),k=Ze;if(Y!==0&&(G=Ce),ee.bindFramebuffer(I.FRAMEBUFFER,G)&&K&&ee.drawBuffers(T,G),ee.viewport(D),ee.scissor(z),ee.setScissorTest(k),xe){let De=de.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,Y)}else if(Ae){let De=U;for(let Je=0;Je<T.textures.length;Je++){let Qe=de.get(T.textures[Je]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,Y,De)}}else if(T!==null&&Y!==0){let De=de.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(T,U,Y,K,G,xe,Ae,Oe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){ee.bindFramebuffer(I.FRAMEBUFFER,De);try{let Je=T.textures[Oe],Qe=Je.format,Xe=Je.type;if(!J.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-K&&Y>=0&&Y<=T.height-G&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Oe),I.readPixels(U,Y,K,G,Fe.convert(Qe),Fe.convert(Xe),xe))}finally{let Je=L!==null?de.get(L).__webglFramebuffer:null;ee.bindFramebuffer(I.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,K,G,xe,Ae,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De)if(U>=0&&U<=T.width-K&&Y>=0&&Y<=T.height-G){ee.bindFramebuffer(I.FRAMEBUFFER,De);let Je=T.textures[Oe],Qe=Je.format,Xe=Je.type;if(!J.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Oe),I.readPixels(U,Y,K,G,Fe.convert(Qe),Fe.convert(Xe),0);let Et=L!==null?de.get(L).__webglFramebuffer:null;ee.bindFramebuffer(I.FRAMEBUFFER,Et);let qt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hm(I,qt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(gt),I.deleteSync(qt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let K=Math.pow(2,-Y),G=Math.floor(T.image.width*K),xe=Math.floor(T.image.height*K),Ae=U!==null?U.x:0,Oe=U!==null?U.y:0;be.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ae,Oe,G,xe),ee.unbindTexture()};let ke=I.createFramebuffer(),st=I.createFramebuffer();this.copyTextureToTexture=function(T,U,Y=null,K=null,G=0,xe=null){xe===null&&(G!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=G,G=0):xe=0);let Ae,Oe,De,Je,Qe,Xe,gt,Et,qt,Ut=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Y!==null)Ae=Y.max.x-Y.min.x,Oe=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Je=Y.min.x,Qe=Y.min.y,Xe=Y.isBox3?Y.min.z:0;else{let ei=Math.pow(2,-G);Ae=Math.floor(Ut.width*ei),Oe=Math.floor(Ut.height*ei),T.isDataArrayTexture?De=Ut.depth:T.isData3DTexture?De=Math.floor(Ut.depth*ei):De=1,Je=0,Qe=0,Xe=0}K!==null?(gt=K.x,Et=K.y,qt=K.z):(gt=0,Et=0,qt=0);let Rt=Fe.convert(U.format),Ye=Fe.convert(U.type),Vt;U.isData3DTexture?(be.setTexture3D(U,0),Vt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(be.setTexture2DArray(U,0),Vt=I.TEXTURE_2D_ARRAY):(be.setTexture2D(U,0),Vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let bt=I.getParameter(I.UNPACK_ROW_LENGTH),Gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cr=I.getParameter(I.UNPACK_SKIP_PIXELS),Hn=I.getParameter(I.UNPACK_SKIP_ROWS),Vo=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);let Gt=T.isDataArrayTexture||T.isData3DTexture,Qn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ei=de.get(T),wn=de.get(U),Un=de.get(ei.__renderTarget),Wu=de.get(wn.__renderTarget);ee.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wu.__webglFramebuffer);for(let Ws=0;Ws<De;Ws++)Gt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(T).__webglTexture,G,Xe+Ws),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(U).__webglTexture,xe,qt+Ws)),I.blitFramebuffer(Je,Qe,Ae,Oe,gt,Et,Ae,Oe,I.DEPTH_BUFFER_BIT,I.NEAREST);ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||de.has(T)){let ei=de.get(T),wn=de.get(U);ee.bindFramebuffer(I.READ_FRAMEBUFFER,ke),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,st);for(let Un=0;Un<De;Un++)Gt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ei.__webglTexture,G,Xe+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ei.__webglTexture,G),Qn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,xe,qt+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,xe),G!==0?I.blitFramebuffer(Je,Qe,Ae,Oe,gt,Et,Ae,Oe,I.COLOR_BUFFER_BIT,I.NEAREST):Qn?I.copyTexSubImage3D(Vt,xe,gt,Et,qt+Un,Je,Qe,Ae,Oe):I.copyTexSubImage2D(Vt,xe,gt,Et,Je,Qe,Ae,Oe);ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Vt,xe,gt,Et,qt,Ae,Oe,De,Rt,Ye,Ut.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Vt,xe,gt,Et,qt,Ae,Oe,De,Rt,Ut.data):I.texSubImage3D(Vt,xe,gt,Et,qt,Ae,Oe,De,Rt,Ye,Ut):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,gt,Et,Ae,Oe,Rt,Ye,Ut.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,gt,Et,Ut.width,Ut.height,Rt,Ut.data):I.texSubImage2D(I.TEXTURE_2D,xe,gt,Et,Ae,Oe,Rt,Ye,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vo),xe===0&&U.generateMipmaps&&I.generateMipmap(Vt),ee.unbindTexture()},this.initRenderTarget=function(T){de.get(T).__webglFramebuffer===void 0&&be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,ee.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Ym={type:"change"},Md={type:"start"},jm={type:"end"},ou=new Yi,Zm=new gn,XM=Math.cos(70*Ve.DEG2RAD),on=new _,Bn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bd=1e-6,ws=class extends lr{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new ht,this._lastTargetPosition=new _,this._quat=new ht().setFromUnitVectors(e.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new co,this._sphericalDelta=new co,this._scale=1,this._panOffset=new _,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new _,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YM.bind(this),this._onPointerDown=qM.bind(this),this._onPointerUp=ZM.bind(this),this._onContextMenu=tS.bind(this),this._onMouseWheel=KM.bind(this),this._onKeyDown=$M.bind(this),this._onTouchStart=QM.bind(this),this._onTouchMove=eS.bind(this),this._onMouseDown=jM.bind(this),this._onMouseMove=JM.bind(this),this._interceptControlDown=nS.bind(this),this._interceptControlUp=iS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ym),this.update(),this.state=Ct.NONE}update(e=null){let t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=on.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new _(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new _(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ou.origin.copy(this.object.position),ou.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ou.direction))<XM?this.object.lookAt(this.target):(Zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ou.intersectPlane(Zm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bd||this._lastTargetPosition.distanceToSquared(this.target)>bd?(this.dispatchEvent(Ym),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function qM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function YM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ZM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jm),this.state=Ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case On.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case On.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case On.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Md)}function JM(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function KM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jm))}function $M(i){this.enabled!==!1&&this._handleKeyDown(i)}function QM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Md)}function eS(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function tS(i){this.enabled!==!1&&i.preventDefault()}function nS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Sd=["Repos","Patrouille","Poursuite","Contact"],wd="gorilla-lab-entity-models-v1";var sS={sphere:2562,cube:1946},ri=[["Torse",-1,[0,.65,0]],["Tete",0,[0,1.18,0]]];for(let[i,e]of[["G",-1],["D",1]]){let t=ri.length;ri.push(["Epaule "+i,0,[e*.23,.96,0]],["Coude "+i,t,[e*.36,.65,0]],["Poignet "+i,t+1,[e*.43,.38,0]],["Doigt 1 "+i,t+2,[e*.39,.28,-.04]],["Doigt 2 "+i,t+2,[e*.43,.27,0]],["Doigt 3 "+i,t+2,[e*.47,.28,.04]],["Hanche "+i,0,[e*.15,.46,0]],["Genou "+i,t+6,[e*.17,.23,0]],["Pied "+i,t+7,[e*.18,.07,-.03]])}var au=(i,e,t,n=0)=>Number.isFinite(i)?Math.max(e,Math.min(t,i)):n,Pa=()=>ri.map(()=>[0,0,0]);function lu(i){let e=sS[i?.base],t=i?.vertices?.length/3;if(!Number.isInteger(e)||!Array.isArray(i.vertices)||!Number.isInteger(t)||t<4||t>12e3||!i.vertices.every(Number.isFinite))return null;let n=i.indices;if(n!==void 0){if(!Array.isArray(n)||n.length!==(t-2)*6||!n.every(s=>Number.isInteger(s)&&s>=0&&s<t))return null}else if(t!==e)return null;return{base:i.base,...n?{indices:n}:{},vertices:i.vertices.map(s=>Math.round(au(s,-3e3,3e3))),color:typeof i.color=="string"&&/^#[0-9a-f]{6}$/i.test(i.color)?i.color.toLowerCase():"#62566b",pivots:ri.map(([,,s],r)=>s.map((o,a)=>au(i.pivots?.[r]?.[a],-3,3,o))),clips:Sd.map((s,r)=>(Array.isArray(i.clips?.[r])?i.clips[r]:[]).slice(0,12).map(o=>({duration:au(o?.duration,.08,2,.35),pose:ri.map((a,l)=>[0,1,2].map(c=>au(o?.pose?.[l]?.[c],-180,180)))}))),contact:i.contact==="animate"?"animate":"kill"}}function Jm(i){try{let e=JSON.parse(i.getItem(wd)??"[]");return Array.isArray(e)?e.slice(0,20).flatMap(t=>{let n=lu(t?.sculpt);return n&&typeof t.id=="string"&&typeof t.name=="string"?[{id:t.id.slice(0,64),name:t.name.slice(0,36),sculpt:n}]:[]}):[]}catch{return[]}}function bo(i){let e=i.index.array,t=Array.from({length:i.attributes.position.count},()=>new Set);for(let n=0;n<e.length;n+=3)for(let s=0;s<3;s++){let r=e[n+s],o=e[n+(s+1)%3];t[r].add(o),t[o].add(r)}return t.map(n=>Array.from(n))}function Km(i,e,t){i.dispose(),i.setAttribute("position",new Re(e,3)),i.deleteAttribute("normal"),i.setIndex(t),i.computeVertexNormals(),i.computeBoundingSphere()}function Td(i,e,t,n){let s=i.attributes.position,r=i.index.array,o=new Map,a=new cn,l=new _,c=Array.from(s.array),u=[],h=(f,g)=>Math.min(f,g)*12e3+Math.max(f,g);function d(f,g,x,p){if(x.distanceToSquared(p)<n*n||c.length>=12e3*3)return;let m=h(f,g);o.has(m)||(o.set(m,c.length/3),c.push((x.x+p.x)/2,(x.y+p.y)/2,(x.z+p.z)/2))}for(let f=0;f<r.length;f+=3){let g=r[f],x=r[f+1],p=r[f+2];a.a.fromBufferAttribute(s,g),a.b.fromBufferAttribute(s,x),a.c.fromBufferAttribute(s,p),e.some(m=>a.closestPointToPoint(m,l).distanceToSquared(m)<t*t)&&(d(g,x,a.a,a.b),d(x,p,a.b,a.c),d(p,g,a.c,a.a))}if(!o.size)return!1;for(let f=0;f<r.length;f+=3){let g=r[f],x=r[f+1],p=r[f+2],m=o.get(h(g,x)),v=o.get(h(x,p)),b=o.get(h(p,g)),y=+(m!==void 0)+ +(v!==void 0)+ +(b!==void 0);if(!y){u.push(g,x,p);continue}if(y===3){u.push(g,m,b,m,x,v,v,p,b,m,v,b);continue}for(;m===void 0||y===2&&v===void 0;)[g,x,p]=[x,p,g],[m,v,b]=[v,b,m];y===1?u.push(g,m,p,m,x,p):u.push(m,x,v,g,m,p,m,v,p)}return Km(i,c,u),!0}function Ed(i,e,t,n,s){let r=new _,o=[],a=new Uint8Array(i.length/3),l=[];if(s?.length)o.push(...s);else{let c=1/0,u=-1;for(let h=0;h<a.length;h++){let d=r.fromArray(i,h*3).distanceToSquared(t);d<c&&(c=d,u=h)}u>=0&&o.push(u)}for(let c=0;c<o.length;c++){let u=o[c];if(a[u])continue;a[u]=1;let h=r.fromArray(i,u*3).distanceTo(t);if(!(h>=n)){l.push([u,1-Ve.smoothstep(h,0,n)]);for(let d of e[u])a[d]||o.push(d)}}return l}function Ad(i,e,t,n,s,r,o,a,l,c=!1){let u=new _,h=new _;for(let[d,f]of s){let g=d*3;if(u.fromArray(e,g),o==="grab"||o==="hook")h.copy(a),c&&(h.x*=-1),u.addScaledVector(h,f*l);else if(o==="smooth"){h.set(0,0,0);for(let x of n[d])h.x+=e[x*3],h.y+=e[x*3+1],h.z+=e[x*3+2];u.lerp(h.multiplyScalar(1/n[d].length),Math.min(1,l)*f)}else o==="pinch"?(h.subVectors(r,u),u.addScaledVector(h,l*f)):u.addScaledVector(h.fromArray(t,g),l*f);u.clampScalar(-3,3).toArray(i,g)}}function $m(i,e,t,n){let s=i.attributes.position,r=i.index.array,o=s.count,a=bo(i),l=Array.from({length:o},(C,L)=>new _().fromBufferAttribute(s,L)),c=t*t,u=l.map(C=>e.some(L=>L.distanceToSquared(C)<c));if(!u.some(Boolean))return!1;let h=Array.from({length:o},()=>[]),d=[];for(let C=0;C<r.length;C+=3){let L=[r[C],r[C+1],r[C+2]],w=L.some(D=>u[D])?cn.getNormal(...L.map(D=>l[D]),new _):null,M={ids:L,normal:w};for(let D of L)h[D].push(M);d.push(M)}let f=h.map((C,L)=>u[L]&&C.some((w,M)=>C.slice(M+1).some(D=>w.normal.dot(D.normal)<.82))),g=n*n,x=[];for(let C=0;C<o;C++)if(!(!u[C]||f[C]))for(let L of a[C]){if(L<=C||!u[L]||f[L]||!e.some(M=>M.distanceToSquared(l[C])<c&&M.distanceToSquared(l[L])<c))continue;let w=l[C].distanceToSquared(l[L]);w<g&&x.push({a:C,b:L,length2:w})}x.sort((C,L)=>C.length2-L.length2);let p=new Set,m=new Map,v=new _,b=new _;for(let{a:C,b:L}of x){if(p.has(C)||p.has(L))continue;let w=a[C].filter(k=>a[L].includes(k));if(w.length!==2||h[C].filter(k=>k.ids.includes(L)).length!==2)continue;let D=h[C].filter(k=>!k.ids.includes(L)),z=h[L].filter(k=>!k.ids.includes(C));if(!(D.some(k=>w.every(V=>k.ids.includes(V)))&&z.some(k=>w.every(V=>k.ids.includes(V))))&&(v.copy(l[C]).lerp(l[L],.5),![...D,...z].some(k=>{let V=k.ids.map(W=>W===C||W===L?v:l[W]);return cn.getNormal(...V,b).dot(k.normal)<.85}))){l[C].copy(v),m.set(L,C),p.add(C),p.add(L);for(let k of[...a[C],...a[L]])p.add(k);if(m.size>=64)break}}if(!m.size)return!1;let y=[],E=[],A=new Int32Array(o);for(let C=0;C<o;C++)m.has(C)||(A[C]=y.length/3,y.push(...l[C]));for(let{ids:C}of d){let[L,w,M]=C.map(D=>A[m.get(D)??D]);L!==w&&w!==M&&M!==L&&E.push(L,w,M)}return Km(i,y,E),!0}function cu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new dt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Qm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let g=Qm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function eg(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,b=a.length;v<b;v++){let y=a[v],E=i.attributes[y];l[y]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);let A=i.morphAttributes[y];A&&(c[y]||(c[y]=[]),A.forEach((C,L)=>{let w=new C.array.constructor(C.count*C.itemSize);c[y][L]=new C.constructor(w,C.itemSize,C.normalized)}))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let v=0;v<r;v++){let b=n?n.getX(v):v,y="";for(let E=0,A=a.length;E<A;E++){let C=a[E],L=i.getAttribute(C),w=L.itemSize;for(let M=0;M<w;M++)y+=`${~~(L[h[M]](b)*x+p)},`}if(y in t)u.push(t[y]);else{for(let E=0,A=a.length;E<A;E++){let C=a[E],L=i.getAttribute(C),w=i.morphAttributes[C],M=L.itemSize,D=l[C],z=c[C];for(let k=0;k<M;k++){let V=h[k],W=d[k];if(D[W](o,L[V](b)),w)for(let X=0,se=w.length;X<se;X++)z[X][W](o,w[X][V](b))}}t[y]=o,u.push(o),o++}}let m=i.clone();for(let v in i.attributes){let b=l[v];if(m.setAttribute(v,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),v in c)for(let y=0;y<c[v].length;y++){let E=c[v][y];m.morphAttributes[v][y]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(u),m}function uu(i,e,t){if(t){let r=new dt;return r.setAttribute("position",new Re(e.map(o=>o/1e3),3)),r.setIndex(t),r.computeVertexNormals(),r.computeBoundingSphere(),r}let n=i==="cube"?new rt(.9,1.25,.67,18,18,18):new Ii(1,15);n.deleteAttribute("normal"),n.deleteAttribute("uv");let s=eg(n,1e-5);return n.dispose(),i==="sphere"&&s.scale(.46,.64,.34),s.translate(0,.68,0),e&&s.attributes.position.array.set(e.map(r=>r/1e3)),s.computeVertexNormals(),s.computeBoundingSphere(),s}function Cd(i){return Array.from(i.attributes.position.array,e=>Math.round(e*1e3))}function tg(i){let e=uu(i.base,i.vertices,i.indices),t=new Qt({color:i.color,roughness:.86,side:Wt}),n=new sa(e,t);n.frustumCulled=!1;let s=i.pivots.map(d=>new _(...d)),r=ri.map((d,f)=>{let g=new to;return g.position.copy(s[f]),g}),o=ri.map(([,d],f)=>{d<0?n.add(r[f]):(r[d].add(r[f]),r[f].position.sub(s[d]));let g=d<0?s[0].clone().add(new _(0,.19,0)):s[d].clone().lerp(s[f],.55);return new or(g,s[f])}),a=e.attributes.position,l=[],c=[],u=new _,h=new _;for(let d=0;d<a.count;d++){u.fromBufferAttribute(a,d);let f=o.map((p,m)=>[m,(p.distanceSq()<1e-10?p.end:p.closestPointToPoint(u,!0,h)).distanceToSquared(u)]).sort((p,m)=>p[1]-m[1]).slice(0,4),g=f.map(([,p])=>1/(.0018+p)**2.6),x=g.reduce((p,m)=>p+m,0);for(let p=0;p<4;p++)l.push(f[p][0]),c.push(g[p]/x)}return e.setAttribute("skinIndex",new er(l,4)),e.setAttribute("skinWeight",new Re(c,4)),n.bind(new ra(r)),{mesh:n,bones:r,dispose(){n.removeFromParent(),n.skeleton.dispose(),e.dispose(),t.dispose()}}}function hu(i,e){for(let[t,n]of i.bones.entries())n.rotation.set(...e[t].map(Ve.degToRad))}function ng(i,e,t,n=!0){if(!e.length)return;let s=e.reduce((r,o)=>r+o.duration,0);t=n?t%s:Math.min(t,s);for(let[r,o]of e.entries()){if(t>o.duration&&r<e.length-1){t-=o.duration;continue}let a=e[n?(r+1)%e.length:Math.min(r+1,e.length-1)],l=Ve.smoothstep(t/o.duration,0,1);for(let[c,u]of i.bones.entries())u.rotation.set(...o.pose[c].map((h,d)=>Ve.degToRad(Ve.lerp(h,a.pose[c][d],l))));return}}function ig({canvas:i,renderer:e,onClose:t}){let n=Jm(localStorage),s=(q,ue,Ce)=>{let ke=document.createElement(q);return ke.className=ue,ke.innerHTML=Ce,ke},r=s("div","sculpt-toolbar",`
    <select data-ui="library" aria-label="Entit&eacute; enregistr&eacute;e"></select>
    <input data-ui="name" aria-label="Nom" maxlength="36">
    <button data-ui="sphere">Nouvelle sph&egrave;re</button><button data-ui="cube">Nouveau cube</button>
    <button class="strong" data-ui="save">Enregistrer l&rsquo;entit&eacute;</button>
    <a href="./editor.html?tab=entities" target="_blank" rel="noopener">Placer sur une carte</a>`),o=[["hook","K","Allonger","Prolonge une forme dans la direction du trait"],["grab","G","D\xE9placer","D\xE9place le volume sous la brosse"],["draw","D","Relief","Ajoute du volume le long de la surface"],["carve","C","Creuser","Repousse la surface vers l\u2019int\xE9rieur"],["smooth","S","Lisser","Estompe les bosses et les raccords"],["pinch","P","Pincer","Resserre les sommets pour marquer un pli"],["refine","B","Densifier","Subdivise les grandes ar\xEAtes sous la brosse"],["simplify","N","Simplifier","Fusionne les ar\xEAtes courtes sous la brosse"]],a=s("nav","tool-rail sculpt-rail",o.map(([q,ue,Ce,ke])=>`<button class="rail-btn" data-brush="${q}" title="${ke} (${ue})"><span>${ue}</span><span>${Ce}</span></button>`).join(""));a.setAttribute("aria-label","Brosses de sculpture");let l=s("aside","side sculpt-inspector",`
        <h2>Entit\xE9</h2>
        <label>Mode <select data-ui="mode"><option value="sculpt">Sculpture</option><option value="motion">Squelette et animations</option></select></label>
        <div data-ui="sculpt">
          <label>Rayon <input data-ui="radius" type="range" min="8" max="160" step="1" value="52"></label>
          <label data-ui="spacing-label" hidden>Taille des ar&ecirc;tes <input data-ui="spacing" type="range" min="3" max="34" step="1" value="11"><span data-ui="spacing-value">11 px</span></label>
          <label data-ui="strength-label">Intensit&eacute; <input data-ui="strength" type="range" min=".15" max="1" step=".05" value=".65"></label>
          <label><input data-ui="mirror" type="checkbox" checked> Sym&eacute;trie gauche / droite</label>
          <label><input data-ui="adaptive" type="checkbox" checked> Ajouter des polygones sous la brosse</label>
          <p data-ui="mesh-count"></p>
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
  `),c=s("div","sculpt-views",'<button data-view="front">Avant</button><button data-view="side">C\xF4t\xE9</button><button data-view="top">Dessus</button><button data-view="fit">Tout voir</button>'),u=document.querySelector("main.layout"),h=u.querySelector(".viewport-head"),d=h.querySelector("strong"),f=u.querySelector(".preview-footer"),g=d.textContent,x=f.textContent,p=q=>l.querySelector('[data-ui="'+q+'"]')??r.querySelector('[data-ui="'+q+'"]');document.querySelector(".top-actions").append(r),u.prepend(a),u.append(l),h.append(c);let m=document.body.classList.contains("preview-fullscreen");document.body.classList.remove("preview-fullscreen"),document.body.dataset.workspace="sculpt",d.textContent="Entit\xE9 / Sculpture",f.textContent="Clic droit : tourner \xB7 Molette : zoomer \xB7 Clic molette : d\xE9placer la vue";let v=new ni;v.background=new He("#182029");let b=new Kt(44,1,.03,100);b.position.set(2,1.55,-2.7);let y=new AbortController,E=(q,ue,Ce)=>q.addEventListener(ue,Ce,{signal:y.signal}),A=new ws(b,i);A.target.set(0,.65,0),A.mouseButtons={LEFT:null,MIDDLE:On.PAN,RIGHT:On.ROTATE};let C=new Ki("#e5f0ff","#5c3d46",2.1),L=new $i("#fff0e0",2.7);L.position.set(-2,4,-3),v.add(C,L,new ar(6,24,"#758698","#344250"));let w=new Qt({color:"#62566b",roughness:.84,side:Wt}),M=new ve(new ys(.978,1,44),new hn({color:"#d0f1ff",side:Wt,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));M.renderOrder=4,v.add(M),M.visible=!1;let D=new tn;v.add(D);let z=new si(.027,9,6),k=new hn({color:"#92b9db",depthTest:!1}),V=new hn({color:"#ffc35e",depthTest:!1}),W=new Ri(new dt,new qn({color:"#96a9bb",depthTest:!1}));D.add(W);let X=ri.map(()=>{let q=new ve(z,k);return q.renderOrder=3,D.add(q),q}),se=new Qi,j=new le,re=new gn,_e=new _,Se=[],Be=[],Ze="hook",nt=!1,je,Z,N,ie,he,O=!1,B,ce,I=0,te=null,Q=0,J=[],ee=(q,ue)=>new Option(ue,q);p("joint").replaceChildren(...ri.map(([q],ue)=>ee(ue,q))),p("clip").replaceChildren(...Sd.map((q,ue)=>ee(ue,q)));let ye=(q,ue,Ce,ke)=>["X","Y","Z"].map(T=>{let U=document.createElement("input");return Object.assign(U,{type:"number",min:Ce,max:ke,step:ue}),U.style.width="33%",U.setAttribute("aria-label",q+" "+T),p(q).append(U),U}),de=ye("pivot",.02,-3,3),be=ye("rotation",1,-180,180),ze=()=>{Q||(Q=requestAnimationFrame(cl))};A.addEventListener("change",ze);let qe=new ResizeObserver(ze);qe.observe(i);let P=q=>q==="refine"||q==="simplify",S=q=>{Ze=q;for(let ke of a.querySelectorAll("[data-brush]"))ke.setAttribute("aria-pressed",String(ke.dataset.brush===q));let ue=o.find(([ke])=>ke===q),Ce=P(q);p("spacing-label").hidden=!Ce,p("strength-label").hidden=Ce,p("hint").textContent=ue[3]+(Ce?". R\xE9duis la taille pour des d\xE9tails plus fins.":". Maj pour lisser, Ctrl pour inverser Relief ou Creuser.")};S(Ze),p("spacing").oninput=()=>{p("spacing-value").textContent=p("spacing").value+" px"};for(let q of a.querySelectorAll("[data-brush]"))q.onclick=()=>S(q.dataset.brush);c.onclick=q=>{let ue=q.target.dataset.view;if(!ue)return;Z.geometry.computeBoundingSphere();let Ce=Z.geometry.boundingSphere,ke=Math.max(.6,Ce.radius*3.6);A.target.copy(Ce.center);let st=ue==="front"?[0,0,-1]:ue==="side"?[1,0,0]:ue==="top"?[0,1,-.001]:[.55,.22,-1];b.position.fromArray(st).normalize().multiplyScalar(ke).add(A.target),A.update(),ze()};let H=q=>{p("status").textContent=q},ne=new Intl.NumberFormat("fr-FR");function ae(){let{geometry:q}=Z;p("mesh-count").textContent=ne.format(q.index.count/3)+" triangles \xB7 "+ne.format(q.attributes.position.count)+" sommets"}let $=()=>{O=!0,H("Modifications en cours"),ze()},Le=()=>Number(p("joint").value),pe=()=>ie.clips[Number(p("clip").value)];function Ue(){p("library").replaceChildren(ee("","Brouillon"),...n.map(q=>ee(q.id,q.name))),p("library").value=je??""}function Ie(){te=null,p("play").textContent="Lire",N&&hu(N,he),ze()}function fe(){de.forEach((q,ue)=>{q.value=ie.pivots[Le()][ue]}),be.forEach((q,ue)=>{q.value=he[Le()][ue]}),I=Math.min(I,Math.max(0,pe().length-1)),p("frame").replaceChildren(...pe().map((q,ue)=>ee(ue,"Pose "+(ue+1)))),p("frame").value=String(I),p("duration").value=pe()[I]?.duration??.35,p("replace").disabled=p("delete").disabled=!pe().length,p("add").disabled=pe().length>=12}function Te(){Ie(),N?.dispose(),N=null,Z.visible=p("mode").value==="sculpt",D.visible=!Z.visible,M.visible=!1;for(let q of a.querySelectorAll("[data-brush]"))q.disabled=!Z.visible;d.textContent=Z.visible?"Entit\xE9 / Sculpture":"Entit\xE9 / Squelette et animations",Z.visible||(N=tg({...ie,...ge()}),v.add(N.mesh),hu(N,he)),fe()}function We(q,ue){Z?.removeFromParent(),Z?.geometry.dispose(),je=ue?.id;let Ce=uu(q,ue?.sculpt.vertices,ue?.sculpt.indices);Z=new ve(Ce,w),v.add(Z),J=bo(Ce),nt=!!ue?.sculpt.indices,ae(),ie=lu(ue?.sculpt??{base:q,vertices:Cd(Ce)}),he=Pa(),I=0,Se.length=Be.length=0,O=!1,p("name").value=ue?.name??"Ma cr\xE9ature",p("contact").value=ie.contact,p("color").value=ie.color,w.color.set(ie.color),p("mode").value="sculpt",H(""),Ue(),Te()}function Fe(){return!O||confirm("Quitter ce brouillon sans enregistrer les modifications ?")}p("sphere").onclick=()=>{Fe()&&We("sphere")},p("cube").onclick=()=>{Fe()&&We("cube")},p("library").onchange=()=>{let q=n.find(ue=>ue.id===p("library").value);q&&Fe()?We(q.sculpt.base,q):Ue()},p("mode").onchange=Te,p("wire").onchange=()=>{w.wireframe=p("wire").checked,ze()},p("color").oninput=()=>{ie.color=p("color").value,w.color.set(ie.color),$()},p("name").oninput=$,p("contact").onchange=()=>{ie.contact=p("contact").value,$()},p("save").onclick=()=>{if(!je&&n.length>=20){H("La biblioth\xE8que contient d\xE9j\xE0 20 cr\xE9atures.");return}let q=lu({...ie,...ge()});if(!q){H("Le maillage de cette entit\xE9 est invalide.");return}let ue={id:je??crypto.randomUUID(),name:p("name").value.trim()||"Ma cr\xE9ature",sculpt:q},Ce=[...n.filter(ke=>ke.id!==je),ue];try{localStorage.setItem(wd,JSON.stringify(Ce))}catch{H("Sauvegarde impossible. Le stockage du navigateur est plein ou bloqu\xE9.");return}n.splice(0,n.length,...Ce),je=ue.id,O=!1,Ue(),H("Enregistr\xE9e. Choisis-la dans Entit\xE9s, sur ta carte.")},p("joint").onchange=()=>{fe(),ze()},de.forEach((q,ue)=>{q.onchange=()=>{if(!Number.isFinite(q.valueAsNumber)){fe();return}ie.pivots[Le()][ue]=Ve.clamp(q.valueAsNumber,-3,3),$(),Te()}}),be.forEach((q,ue)=>{q.oninput=()=>{Number.isFinite(q.valueAsNumber)&&(he[Le()][ue]=Ve.clamp(q.valueAsNumber,-180,180),Ie())}});function we(){pe().length?he=structuredClone(pe()[I].pose):he=Pa(),Ie(),fe()}p("clip").onchange=()=>{I=0,we()},p("frame").onchange=()=>{I=Number(p("frame").value),we()};let it=()=>({duration:Ve.clamp(p("duration").valueAsNumber||.35,.08,2),pose:structuredClone(he)});p("add").onclick=()=>{pe().push(it()),I=pe().length-1,$(),fe()},p("replace").onclick=()=>{pe()[I]=it(),$(),fe()},p("delete").onclick=()=>{pe().splice(I,1),I=Math.max(0,I-1),$(),we()},p("rest").onclick=()=>{he=Pa(),Ie(),fe()},p("play").onclick=()=>{if(te!==null){Ie();return}if(!pe().length){H("Ajoute une pose avant de lire l\u2019animation.");return}te=performance.now(),p("play").textContent="Arr\xEAter",ze()};let F=()=>Z.geometry.attributes.position,ge=()=>({base:ie.base,vertices:Cd(Z.geometry),indices:nt?Array.from(Z.geometry.index.array):void 0});function Me(){F().needsUpdate=!0,Z.geometry.computeVertexNormals(),Z.geometry.computeBoundingSphere(),$()}function Pe(q,ue){if(!q.length||B||!Z.visible)return;ue.push(ge());let Ce=q.pop();Z.geometry.dispose(),Z.geometry=uu(Ce.base,Ce.vertices,Ce.indices),nt=!!Ce.indices,J=bo(Z.geometry),ae(),$()}p("undo").onclick=()=>Pe(Se,Be),p("redo").onclick=()=>Pe(Be,Se);let me=new _,oe=new _(0,0,1),Ne=new _;function $e(q){return Ne.copy(q).applyMatrix4(b.matrixWorldInverse),Math.max(.004,Number(p("radius").value)*2*Math.abs(Ne.z)*Math.tan(Ve.degToRad(b.fov/2))/Math.max(i.clientHeight,1))}function vt(q,ue){b.updateMatrixWorld();let Ce=i.getBoundingClientRect();j.set(2*(q-Ce.left)/Ce.width-1,1-2*(ue-Ce.top)/Ce.height),se.setFromCamera(j,b)}let pt=()=>se.intersectObject(Z,!1)[0];function Ln(q){M.visible=!!q,q&&(me.copy(q.face.normal),M.position.copy(q.point).addScaledVector(me,.002),M.quaternion.setFromUnitVectors(oe,me),M.scale.setScalar($e(q.point))),ze()}let Sn=q=>q.clone().setX(-q.x);function Vs(q,ue,Ce,ke){if(!p("adaptive").checked)return!1;let st=Ce?[q,Sn(q)]:[q],T=!1;for(let U=0;U<ke&&Td(Z.geometry,st,ue*1.16,ue*.56);U++)T=!0;return T&&(nt=!0,J=bo(Z.geometry),ae()),T}function ui(q,ue,Ce,ke){let st=ke?[ke.a,ke.b,ke.c]:void 0,T=Ed(F().array,J,q,ue,st),U=Ce&&Math.abs(q.x)>ue*.035?Ed(F().array,J,Sn(q),ue):[];if(!U.length)return{direct:T,other:U};let Y=new Map(T),K=new Map(U);return{direct:T.filter(([G,xe])=>xe>=(K.get(G)??0)),other:U.filter(([G,xe])=>xe>(Y.get(G)??0))}}function Gs(q,ue,Ce,ke,st,T=F().array.slice()){let U=F().array,Y=Z.geometry.attributes.normal.array;Ad(U,T,Y,J,ue.direct,q,Ce,ke,st),Ad(U,T,Y,J,ue.other,Sn(q),Ce,ke,st,!0)}function zo(q=ge()){Se.push(q),Se.length>16&&Se.shift(),Be.length=0}function ko(q,ue){let Ce=B.mirror?[q,Sn(q)]:[q],ke=Number(p("spacing").value)*ue/Number(p("radius").value),st=Z.geometry,T=B.tool==="refine";if(!(T?Td(st,Ce,ue,ke):$m(st,Ce,ue,ke*1.4))){B.prior&&(T&&F().count>=12e3?H("Limite de sommets atteinte. Simplifie une zone pour continuer."):H(T?"Aucune ar\xEAte \xE0 subdiviser ici. R\xE9duis la taille des ar\xEAtes.":"Aucune ar\xEAte \xE0 fusionner ici. Augmente la taille des ar\xEAtes ou le rayon."));return}B.prior&&(zo(B.prior),B.prior=null),nt=!0,J=bo(st),ae(),$()}function Hs(q,ue,Ce){let{point:ke}=q,st=$e(ke);if(P(B.tool)){ko(ke,st);return}let T=ue.shiftKey?"smooth":B.tool;(!B.detailAt||B.detailAt.distanceToSquared(ke)>st*st*.3)&&(Vs(ke,st,B.mirror,2)&&(q=pt()??q),B.detailAt=ke.clone());let U=ui(q.point,st,B.mirror,q.face);if(!U.direct.length&&!U.other.length)return;let Y=Number(p("strength").value),K=(T==="carve"?-1:1)*(ue.ctrlKey||ue.metaKey?-1:1),G=T==="smooth"?.55:T==="pinch"?.16:K*st*.19;Gs(q.point,U,T,_e,Ce*Y*G),Me()}E(i,"pointerdown",q=>{if(!(q.button!==0||B||ce)){if(vt(q.clientX,q.clientY),Z.visible){let ue=pt();if(!ue)return;let Ce=ue.point,ke=$e(Ce),st=p("mirror").checked;if(P(Ze)&&!q.shiftKey)B={id:q.pointerId,tool:Ze,mirror:st,x:q.clientX,y:q.clientY,prior:ge()},ko(Ce,ke);else{let T=q.shiftKey?"smooth":Ze;zo(),Vs(Ce,ke,st,4)&&(ue=pt()??ue,$());let U=ui(ue.point,ke,st,ue.face);if(!U.direct.length){H(F().count>=12e3?"Limite de polygones atteinte. Agrandis la brosse.":"Agrandis la brosse pour atteindre les sommets de cette zone.");return}re.setFromNormalAndCoplanarPoint(b.getWorldDirection(new _),ue.point),B={id:q.pointerId,tool:T,center:ue.point,mirror:st,radius:ke,weights:U,anchor:U.direct.reduce((Y,K)=>K[1]>Y[1]?K:Y)[0],original:T==="grab"?F().array.slice():null,projected:ue.point.clone(),x:q.clientX,y:q.clientY,detailAt:ue.point.clone()},T!=="hook"&&T!=="grab"&&Hs(ue,q,1)}Ln(null)}else{let ue=se.intersectObjects(X,!1)[0];if(!ue)return;let Ce=X.indexOf(ue.object);p("joint").value=String(Ce),Ie(),hu(N,Pa());let ke=new _(...ie.pivots[Ce]);re.setFromNormalAndCoplanarPoint(b.getWorldDirection(new _),ke);let st=se.ray.intersectPlane(re,new _);if(!st)return;ce={id:q.pointerId,index:Ce,offset:ke.sub(st)},fe()}i.setPointerCapture(q.pointerId),A.enabled=!1}});let zi=new _,Dn=new _;E(i,"pointermove",q=>{if(ce?.id===q.pointerId){if(vt(q.clientX,q.clientY),!se.ray.intersectPlane(re,_e))return;let T=_e.add(ce.offset).clampScalar(-3,3).toArray().map(U=>Math.round(U*1e3)/1e3);ie.pivots[ce.index]=T,de.forEach((U,Y)=>{U.value=T[Y]}),$();return}if(!Z.visible)return;if(vt(q.clientX,q.clientY),!B){Ln(pt());return}if(B.id!==q.pointerId)return;let ue=Number(p("strength").value);if(B.tool==="grab"||B.tool==="hook"){if(!se.ray.intersectPlane(re,_e))return;if(B.tool==="grab")zi.subVectors(_e,B.center),Gs(B.center,B.weights,"grab",zi,ue,B.original);else{zi.subVectors(_e,B.projected);let T=Math.min(24,Math.max(1,Math.ceil(zi.length()/(B.radius*.2))));zi.multiplyScalar(1/T);for(let U=0;U<T;U++)Dn.fromBufferAttribute(F(),B.anchor),B.detailAt.distanceToSquared(Dn)>B.radius**2*.42&&(Vs(Dn,B.radius,B.mirror,1),B.detailAt.copy(Dn)),Gs(Dn,ui(Dn,B.radius,B.mirror),"hook",zi,.75+ue*.35);B.projected.copy(_e)}Me();return}let Ce=Math.hypot(q.clientX-B.x,q.clientY-B.y),ke=Math.max(2,Number(p("radius").value)*.17);if(Ce<ke)return;let st=Math.min(P(B.tool)?3:12,Math.floor(Ce/ke));for(let T=1;T<=st;T++){vt(Ve.lerp(B.x,q.clientX,T/st),Ve.lerp(B.y,q.clientY,T/st));let U=pt();U&&Hs(U,q,.75)}B.x=q.clientX,B.y=q.clientY}),E(i,"lostpointercapture",q=>{if(ce?.id===q.pointerId&&(ce=null,A.enabled=!0,Te()),B?.id!==q.pointerId)return;let{tool:ue,center:Ce,radius:ke,mirror:st}=B;(ue==="grab"||ue==="hook")&&(Dn.fromBufferAttribute(F(),B.anchor),Dn.distanceToSquared(Ce)>1e-6&&Vs(Dn,ke,st,2)&&$()),B=null,A.enabled=!0,vt(q.clientX,q.clientY),Ln(pt())}),E(i,"pointerleave",()=>{Ln(null)});function ll(){if(!Fe())return;y.abort(),qe.disconnect(),cancelAnimationFrame(Q),A.dispose(),N?.dispose();let q=new Set;v.traverse(ue=>{ue.geometry&&q.add(ue.geometry),ue.material&&q.add(ue.material)}),q.add(V),q.add(k);for(let ue of q)ue.dispose();delete document.body.dataset.workspace,m&&document.body.classList.add("preview-fullscreen"),d.textContent=g,f.textContent=x,r.remove(),a.remove(),l.remove(),c.remove(),i.style.touchAction="none",t()}E(window,"beforeunload",q=>{O&&q.preventDefault()}),E(window,"keydown",q=>{if(q.target.closest?.("input,select,textarea")||B||ce)return;let Ce=q.key.toLowerCase(),ke=q.ctrlKey||q.metaKey;if(ke&&Ce==="s"){q.preventDefault(),p("save").click();return}if(ke&&(Ce==="z"||Ce==="y")){q.preventDefault(),p(q.shiftKey||Ce==="y"?"redo":"undo").click();return}if(ke||!Z.visible)return;let st=o.find(([,T])=>T.toLowerCase()===Ce);st&&(q.preventDefault(),S(st[0]))});function cl(q){Q=0;let ue=Math.max(1,i.clientWidth),Ce=Math.max(1,i.clientHeight);if((i.width!==Math.floor(ue*e.getPixelRatio())||i.height!==Math.floor(Ce*e.getPixelRatio()))&&e.setSize(ue,Ce,!1),b.aspect!==ue/Ce&&(b.aspect=ue/Ce,b.updateProjectionMatrix()),A.update(),N){te!==null&&ng(N,pe(),(q-te)/1e3,Number(p("clip").value)!==3),N.mesh.updateMatrixWorld(!0);let ke=[];for(let[T,[,U]]of ri.entries()){let Y=X[T].position;ce?Y.fromArray(ie.pivots[T]):N.bones[T].getWorldPosition(Y),X[T].material=T===Le()?V:k,U>=0&&ke.push(...X[U].position,...Y)}let st=W.geometry.getAttribute("position");st?(st.array.set(ke),st.needsUpdate=!0):W.geometry.setAttribute("position",new Re(ke,3)),W.frustumCulled=!1}e.render(v,b),te!==null&&ze()}let ul=n.at(-1);return We(ul?.sculpt.base??"sphere",ul),ze(),{requestRender:ze,close:ll}}var oE=new _(0,1,0),Da=(i,e,t,n)=>Number.isFinite(i)?Ve.clamp(i,t,n):e;function Ua(i){if(!Array.isArray(i?.pivot)||i.pivot.length!==3)return null;let e=i.mode==="slide"||i.mode==="screw"?i.mode:null,t=i.axis==="x"||i.axis==="z"?i.axis:null;return{...e?{mode:e,travel:Da(i.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:i.pivot.map(n=>Da(n,0,-6,6)),closed:Da(i.closed,0,-180,180),open:Da(i.open,95,-180,180),seconds:Da(i.seconds,.7,.1,6)}}function rS(i,e){return Ve.degToRad(Ve.lerp(i.closed,i.open,Ve.smoothstep(e,0,1)))}var Rd=new _;function sg(i,e,t,n,s,r,o=1){let a=s.axis==="x"?0:s.axis==="z"?2:1;Rd.set(0,0,0).setComponent(a,1);let l=s.mode==="slide"?0:rS(s,r);i.quaternion.setFromAxisAngle(Rd,l),i.position.copy(t).sub(e).applyQuaternion(i.quaternion).add(e),s.mode&&i.position.addScaledVector(Rd,s.travel*o*Ve.smoothstep(r,0,1)),i.quaternion.multiply(n)}var Mo=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[i,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let n=i+"Arm",s=i+"Forearm",r=i+"Hand";Mo.push([n,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,n,[.35*e,-.52,.02],120],[r,i==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Mo.push([i+"Finger"+o,"Doigt "+o+" \xB7 "+(i==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Ts=Object.freeze(Object.fromEntries(Mo.map(([i,e,t,n,s])=>[i,{label:e,parent:t,pivot:n,limit:s}]))),Id=(i,e,t,n)=>Number.isFinite(i)?Ve.clamp(i,e,t):n;function So(i,e){let t=Ts[i];return{pivot:t.pivot.map((n,s)=>Id(e?.pivot?.[s],-3,3,n)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Id(e?.limit,0,150,t.limit)}}function Na(i){return Object.fromEntries(Mo.map(([e])=>[e,So(e,i?.[e])]))}function Fa(i){return i?.parts.length?i.kind!=="avatar"?!0:i.parts.some(e=>e.avatarJoint==="head")&&i.parts.some(e=>e.avatarJoint==="torso"):!1}function rg(){let i=(s,r,o,a,l,c="sphere",u=[0,0,0])=>({name:r,avatarJoint:s,shape:c,position:o,scale:a,rotation:u,color:l,surface:"plain",texture:null}),e="#6e4b58",t="#a17668",n=[i("torso","Torse",[0,-.43,.04],[.58,.69,.38],e),i("head","Cr\xE2ne",[0,.01,.01],[.32,.36,.29],e),i("head","Museau",[0,-.045,-.125],[.22,.14,.19],t),i("head","Oreille gauche",[-.16,.012,.025],[.086,.106,.064],t),i("head","Oreille droite",[.16,.012,.025],[.086,.106,.064],t),i("head","\u0152il gauche",[-.058,.036,-.121],[.034,.03,.035],"#24202c"),i("head","\u0152il droit",[.058,.036,-.121],[.034,.03,.035],"#24202c")];for(let[s,r,o]of[["left",-1,"gauche"],["right",1,"droit"]]){n.push(i(s+"Arm","Bras "+o,[.31*r,-.38,.04],[.17,.38,.17],e,"sphere",[0,0,r*15]),i(s+"Forearm","Avant-bras "+o,[.38*r,-.63,.009],[.13,.3,.14],e,"sphere",[0,0,r*13]),i(s+"Hand","Paume "+o,[.41*r,-.787,-.003],[.13,.125,.075],t));for(let a=1;a<=3;a++)n.push(i(s+"Finger"+a,"Doigt "+a+" "+o,[(.375+(a-1)*.035)*r,-.868,-.025],[.035,.096,.04],t))}return n}function og(i,e,t){let n=Na(i.avatarRig),s=new tn,r={},o=[],a=0;for(let[u,,h]of Mo){let d=new tn;d.position.fromArray(n[u].pivot),h&&d.position.sub(new _(...n[h].pivot)),(h?r[h]:s).add(d),r[u]=d}for(let[u,h]of i.parts.entries()){let d=Object.hasOwn(r,h.avatarJoint)?h.avatarJoint:"torso",f=e(h,u),g=f.geometry.index?.count??f.geometry.attributes.position.count;a+=g/3,f.position.sub(new _(...n[d].pivot)),r[d].add(f),o.push(f)}function l(u,h){let d=r[u],f=n[u];d&&(d.rotation.set(0,0,0),d.rotation[f.axis]=Ve.degToRad(f.limit)*Id(h,-1,1,0))}function c(u,h){let d=n[u].pivot;n[u]=So(u,{...n[u],pivot:h});let f=new _(...d).sub(new _(...n[u].pivot));for(let g of r[u].children)g.isMesh&&g.position.add(f);for(let[g,,x]of Mo){if(g!==u&&x!==u)continue;let p=r[g].position.fromArray(n[g].pivot);x&&p.sub(new _(...n[x].pivot))}return n[u].pivot}return{root:s,bones:r,meshes:o,triangles:a,setBend:l,setPivot:c,headPivot:new _(...n.head.pivot),dispose(){s.removeFromParent();for(let u of o)t(u)}}}var Ld={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},oS=new WeakMap,ag={value:0},lg=["sine","triangle","pulse","stars"],Pd=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n;function Oa(i){if(!i||typeof i!="object")return null;let e={};for(let[t,n]of Object.entries(Ld)){let s=i[t];e[t]={strength:Pd(s?.strength,0,n.max,0),speed:Pd(s?.speed,0,8,n.defaultSpeed),scale:Pd(s?.scale,0,48,n.defaultScale),signal:lg.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function cg(i){ag.value=i}function ug(i,e){if(!e||!Object.values(e).some(r=>r.strength>0))return i;let t=r=>{let o=e[r];return new At(o.strength,o.speed,o.scale,lg.indexOf(o.signal))},n={uFoundryTime:ag,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new He(e.tint.color)},uFoundryGlowColor:{value:new He(e.glow.color)}},s=`
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},i.customProgramCacheKey=()=>"foundry-effect-v1",oS.set(i,e),i}var fu=0,aS=1,lS=new _,hg=new or,Dd=new gn,dg=new _,du=new cn,pu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new mu,this.unassigned=new mu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Ud(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new _;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,lS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===fu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,u;r=0,hg.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==l){hg.closestPointToPoint(g.point,!0,dg);let x=dg.distanceToSquared(g.point);x>r&&(r=x,c=g)}}r=-1,Dd.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==l&&g!==c){let x=Math.abs(Dd.distanceToPoint(g.point));x>r&&(r=x,u=g)}}let h=[];if(Dd.distanceToPoint(u.point)<0){h.push(_i.create(a,l,c),_i.create(u,l,a),_i.create(u,c,l),_i.create(u,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(_i.create(a,c,l),_i.create(u,a,l),_i.create(u,l,c),_i.create(u,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){let g=e[d];if(g!==a&&g!==l&&g!==c&&g!==u){r=this.tolerance;let x=null;for(let p=0;p<4;p++){let m=this.faces[p].distanceToPoint(g.point);m>r&&(r=m,x=this.faces[p])}x!==null&&this._addVertexToFace(g,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===fu&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=aS;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===fu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=_i.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},_i=class i{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=fu,this.edge=null}static create(e,t,n){let s=new i,r=new Ba(e,s),o=new Ba(t,s),a=new Ba(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return du.set(e.point,t.point,n.point),du.getNormal(this.normal),du.getMidpoint(this.midpoint),this.area=du.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ba=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Ud=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},mu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ns=class extends dt{constructor(e=[]){super();let t=[],n=[],r=new pu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Re(t,3)),this.setAttribute("normal",new Re(n,3))}};var ka=48,cS=3,uS=128,oi=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),hS=(i,e,t)=>Math.max(e,Math.min(t,i)),dS=()=>structuredClone(oi.shield),za=(i,e,t,n)=>Number.isFinite(i)?hS(i,t,n):e;function vi(i){let e=i?.mode==="lathe"?oi.bottle:dS(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=ka?i.points.map(o=>[za(o?.[0],0,-1.5,1.5),za(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:za(i?.depth,e.depth,.025,1.5),bevel:za(i?.bevel,e.bevel,0,.15),segments:Math.round(za(i?.segments,32,cS,uS))}}function Va(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function gu(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function fS(i,e,t,n){let s=gu(i,e,t),r=gu(i,e,n),o=gu(t,n,i),a=gu(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function xu(i){let e=vi(i),t=e.mode==="lathe"?e.points:Va(e);if(t.length<3||t.length>ka*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&fS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function yu(i){let e=vi(i),t=xu(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new le(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new le(0,s[0].y)),s.at(-1).x>0&&s.push(new le(0,s.at(-1).y)),n=new ya(s,e.segments);let r=[],o=n.attributes.position,a=new _,l=new _,c=new _,u=new _,h=n.index.array;for(let d=0;d<h.length;d+=3)a.fromBufferAttribute(o,h[d]),l.fromBufferAttribute(o,h[d+1]),c.fromBufferAttribute(o,h[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(h[d],h[d+1],h[d+2]);n.setIndex(r)}else{let s=Va(e),r=new ji;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new ir(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new Mt(new Float32Array(s*2),2))}return n}function wo(i="box"){let e=i==="cone"?oi.bottle:i==="cylinder"?oi.bowl:i==="diamond"?oi.shield:oi.panel;return vi(e)}var zn=Math.PI*2,_u=.84,is=128;function Cs(i){let e=new Uint8Array(is*is*4);for(let n=0;n<is;n++)for(let s=0;s<is;s++){let r=(s+.5)/is,o=(n+.5)/is,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/_u,1),Math.min(o/_u,1),s,n),l=(s+n*is)*4;for(let c=0;c<3;c++)e[l+c]=Ve.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new Ci(e,is,is);return t.colorSpace=Nt,t.generateMipmaps=!0,t.minFilter=yn,t.magFilter=nn,t.needsUpdate=!0,t}function xr(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function at(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new He(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*_u,r.getY(l)*_u):r.setXY(l,.95,.95);return n.setAttribute("color",new Mt(a,3)),n}function Rs(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:cu(s),material:new Qt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function fg(i,e,t){let n=i/2,s=e/2,r=new ji;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function Es(i,e,t,n,s){return new ir(fg(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function As(i,e,t=n=>n){let n=[],s=[],r=[];for(let u=0;u<i.length;u++){let[h,d]=i[u];for(let f=0;f<=e;f++){let g=zn*f/e,x=t(h,d,g,u);if(n.push(x*Math.sin(g),d,x*Math.cos(g)),s.push(f/e,u/(i.length-1)),u===i.length-1||f===e)continue;let p=u*(e+1)+f,m=p+e+1;h>0&&r.push(p,p+1,m),i[u+1][0]>0&&r.push(p+1,m+1,m)}}let o=new dt;o.setAttribute("position",new Re(n,3)),o.setAttribute("uv",new Re(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<i.length;u++){let h=u*(e+1),d=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Ga(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new _(0,s,0));continue}for(let r=0;r<e;r++){let o=zn*r/e;t.push(new _(n*Math.sin(o),s,n*Math.cos(o)))}}return new ns(t)}function pS(){let t=new _a(fg(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let l=0;l<n.count;l++){let c=Ve.clamp(n.getX(l)/.098+.5,0,1),u=Ve.clamp((n.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=Cs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*zn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,g=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||g?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[at(Es(.106,.207,.013,.011,.0019),8425890),at(Es(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),at(Es(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),at(t,16777215,!0),at(Es(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),at(new rt(.0036,.024,.004).translate(.055,.029,0),11714250),at(new rt(.0036,.015,.004).translate(-.055,.032,0),11385285),at(new rt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(at(new It(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(at(new Fn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(at(new Fn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ns([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Rs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function mS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=As(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+h)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Cs((a,l,c,u)=>{let h=zn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(h)),g=Math.max(...e.map(v=>Math.exp(-(((d-v+.035*Math.cos(h))/.009)**2)))),x=f**3*g,p=xr(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*p;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Ga([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Rs("bread","Baguette de pain",.27,o,[at(s,16777215,!0)],r,.9)}function gS(){let i=Cs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,g=46+12*xr(a,l)-(c&&(h||d)?35:0);return[g*.94,g,g*1.04]}),e=As([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=As([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[at(e,16777215,!0),at(t,11056059),at(new It(.067,.067,.124,10).rotateX(Math.PI/2),9346214),at(new It(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=zn*r/5;n.push(at(new rt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ga([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Rs("wheel","Roue",1.8,s,n,i,.64,.23)}function xS(){let i=Cs((r,o,a,l)=>{let c=xr(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos(zn*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=As([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new jn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+zn*l/5;return new _(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let s=new ns(n);return Rs("cup","Tasse",.39,s,[at(e,16777215,!0),at(t,15785922)],i,.37)}function yS(){let i=As([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Cs((s,r,o,a)=>{let l=9*xr(o,a),c=11*Math.cos(s*zn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*zn*48+s*zn*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*zn*4);return[u,u*1.13,u*1.24]}),t=[at(i,16777215,!0),at(new ys(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),at(new Fn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),at(new Fn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),at(new It(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),at(new Fn(.008,12).translate(0,.035,.0336),15633202)],n=Ga([[.033,-.143],[.054,.133]],6);return Rs("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function _S(){let i=As([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Cs((r,o,a,l)=>{let c=10*xr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(zn*r*2));if(e[d]?.[h]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let g=20*Math.cos(zn*r*2)+c;return[173+g,27+g*.28,55+g*.5]}),n=[at(i,16777215,!0),at(new Fn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),at(new ys(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),at(new Fn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ga([[.069,-.112],[.069,.109]],6);return Rs("soda","Canette de soda",.35,s,n,t,.42,.27)}function vS(){let i=As([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Cs((s,r,o,a)=>{let l=15*xr(o,a),c=8*Math.cos(s*zn*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[at(i,16777215,!0),at(Es(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),at(new Fn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=Ga([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Rs("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function bS(){let i=Cs((s,r,o,a)=>{let l=8*xr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=As([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[at(Es(.138,.22,.061,.016,.004),14788675),at(Es(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),at(new Ji(.106,.174).translate(0,-.004,.0395),16777215,!0),at(e,2502456),at(new It(.014,.017,.016,10).translate(.04,.117,.001),2503482),at(new rt(.008,.047,.027).translate(-.072,.014,-.002),3028798),at(new rt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),at(new Fn(.004,8).translate(.04,.066,.0397),15817792),at(new Fn(.004,8).translate(-.04,.066,.0397),7903100),at(Es(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new _(s,l,o),new _(r,l,o),new _(r,l,a),new _(s,l,a)]);return Rs("radio","Talkie-walkie",.43,new ns(n),t,i,.61,.08)}function pg(){return[pS(),mS(),gS(),xS(),yS(),_S(),vS(),bS()]}var Nd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var _E=Nd.length-1,mg=Math.min(...Nd.map(i=>i[1])),gg=Math.max(...Nd.map(i=>i[1])),vE=new _(0,0,(mg+gg)/2),xg=new _(.047,.027,(gg-mg)/2);var SE=new ht,wE=new _,TE=new _,EE=new ct;var AE=new _,CE=new _;var RE=new _;var IE=new _,PE=new _,LE=new _,DE=new cn,UE=new _,NE=new _,FE=new _,OE=new _,BE=new _;function Ha(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let g=0;g<t.count;g++){let x=new _().fromBufferAttribute(t,g),p=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(p)||(r.add(p),n.push(x))}for(let g=0;g<(i.index?.count??t.count);g+=3){let x=y=>new _().fromBufferAttribute(t,i.index?i.index.getX(y):y),p=x(g),m=x(g+1),v=x(g+2),b=new cn(p,m,v).getNormal(new _);b.lengthSq()>.1&&s.push({a:p,b:m,c:v,n:b})}let o=e||Math.max(...n.map(g=>g.length())),{x:a,y:l,z:c}=new jt().setFromPoints(n).getSize(new _),u=Math.max(1e-4,e**2*.4),h=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=g=>{let x=[];for(let p of g)p.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(p))>.9999)&&x.push(p);return x};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:d,normals:e?[]:f(s.map(g=>g.n)),edges:e?[]:f(s.flatMap(g=>[new _().subVectors(g.b,g.a).normalize(),new _().subVectors(g.c,g.b).normalize(),new _().subVectors(g.a,g.c).normalize()]))}}var zE=new _,kE=new _,VE=new _,GE=new _,HE=new ht,WE=new ht,XE=new _;function yg(i){return Ha(new rt(i.x*2,i.y*2,i.z*2))}var qE=new _;var Fd=Ha(new ii(1,0).scale(...xg)),YE={mesh:{position:new _,quaternion:new ht},shape:Fd,radius:Fd.radius,precise:!0},ZE=new _,jE=new _,JE=new _,KE=new _,$E=new _,QE=new _,eA=new _,tA=Fd.vertices.map(()=>new _);var nA=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)];var iA=new _,sA=new _,rA=new _,oA=new ht,aA=new ht,lA=new ht;var cA=new _,uA=new _,hA=new _,dA=new _;var fA=new _;var pA=new _,mA=new _,gA=new _,xA=new _,yA=new _,_A=new _,vA=new _;var bA={mesh:{position:null,quaternion:new ht},shape:{sphereRadius:0,normals:[],edges:[]}};var Xt=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),SA=Xt(-24,24,-51,7);var _g={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Xt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Xt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Xt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Xt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Xt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Xt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Xt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Xt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Xt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Xt(9,23,-48,-37),sign:[16,-38.2]}},wA=[Xt(-9,-6,-51,7),Xt(6,9,-51,7),Xt(-24,24,-8,-5),Xt(-24,24,-27,-23),Xt(9,23,-37,-34)],TA=[{name:"Glace",bounds:_g.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:_g.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Xt(-9,9,-51,7)},{name:"Sol ouest",bounds:Xt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Xt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Xt(-24,-23,-51,7)},{name:"Sol est",bounds:Xt(9,23,-51,-48)},{name:"Sol est",bounds:Xt(9,23,-37,7)},{name:"Bordure est",bounds:Xt(23,24,-51,7)}];var MS=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i})));var EA={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function vg(){let i=[["Cube",new rt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ii(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new sr(.29),"#d8ae53",0,1],["Brique",new rt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new rt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ii(.6,2),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:Ha(t,s),material:new Qt({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:yg(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of pg()){let s=Ha(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var SS=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Wa=null,wS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Xa(i){return typeof i=="string"&&wS.has(i.replace(/^custom-model-game-/,""))}function Mg(i){let e=i?.parts;return Xa(i?.id)||Xa(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Xa(t?.assetId))}function Sg(){if(Wa)return Wa;let i=vg(),e=SS;return Wa=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Wa.set("chrome-sphere",{geometry:new Ii(.54,2),material:new Qt({color:"#c8e6ed",metalness:1,roughness:.16})}),Wa}function vu(i){return typeof i=="string"&&Sg().has(i)}function Od(i){return Sg().get(i)??null}function TS(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function bg(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[TS(e,i)]}}function wg(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>bg(e,t)),bg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var kd=/^[a-z0-9-]{1,40}$/i,Hd={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function bu(i,e){if(!i)return null;let t=e==="trigger"?i.phase==="exit"?"exit":"enter":i.phase==="use"?"use":null;if(!t)return null;let n=typeof i.door=="string"&&kd.test(i.door)?i.door:null,s=typeof i.light=="string"&&kd.test(i.light)?i.light:null,r=Object.hasOwn(Hd,i.sound)?i.sound:null,o=t==="use"&&Ag.test(i.receiver??"")?i.receiver:null;return n||s||r||o?{phase:t,...o?{receiver:o}:{},...n?{door:n,doorState:["open","close","toggle"].includes(i.doorState)||e==="trigger"&&i.doorState==="hold"?i.doorState:"open"}:{},...n&&e==="trigger"&&i.doorState==="hold"?{doorDelay:yr(i.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(i.lightState)?i.lightState:"on",lightColor:Cg.test(i.lightColor??"")?i.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:yr(i.soundVolume,0,1,.6)}:{}}:null}var Wd="gorilla-lab-models-v1",Pt=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),ES=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,To=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Mu=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),_r=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),Xd=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),yr=(i,e,t,n)=>Number.isFinite(i)?Ve.clamp(i,e,t):n;function Ya(i){return{gravity:yr(i?.physics?.gravity,0,2.5,1),bounce:yr(i?.physics?.bounce,0,1.65,1)}}function Eo(i){return{projection:i?.uv?.projection==="metric"?"metric":"native",repeat:yr(i?.uv?.repeat,.01,100,1),angle:yr(i?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>yr(i?.uv?.offset?.[t],-100,100,0))}}var Za=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),Ag=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Cg=/^#[a-f\d]{6}$/i;function Bd(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Is(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?Ve.clamp(i[s],t,n):e)}function Tg(i){if(i==="arena")return i;if(typeof i!="string"||i.length>700)return null;try{let e=new URL(i);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var Vd=new Set(["box","sphere","capsule","convex"]);function AS(i){if(i?.mode==="box")return{mode:"box",center:Is(i.center,0,-6,6),size:Is(i.size,.5,.025,12)};let e=Math.round(Ve.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:Vd.has(i.shape)?i.shape:"box",center:Is(i.center,0,-6,6),size:Is(i.size,.5,.025,12),rotation:Is(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&Vd.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Ui(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>Pt.models||JSON.stringify(i).length>Pt.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=i.models.filter(n=>!Mg(n)).map(n=>{if(typeof n?.id!="string"||!Ag.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>Pt.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(n.id);let s=new Set;return{id:n.id,name:Bd(n.name,"Mod\xE8le sans nom"),kind:n.kind==="avatar"?"avatar":n.kind==="structure"?"structure":"prop",...n.kind==="avatar"?{avatarRig:Na(n.avatarRig)}:{},...vu(n.assetId)?{assetId:n.assetId}:{},inGame:n.kind!=="avatar"&&n.inGame===!0,properties:{...Object.fromEntries(Object.entries(Za).map(([r,o])=>[r,typeof n.properties?.[r]=="boolean"?n.properties[r]:o])),...n.kind!=="structure"&&n.kind!=="avatar"&&n.properties?.drivable===!0?{drivable:!0}:{}},hitbox:AS(n?.hitbox),...n.physics?{physics:Ya(n)}:{},...n.partCollisions===!0?{partCollisions:!0}:{},parts:n.parts.filter(r=>!Xa(r?.assetId)).map((r,o)=>{let a=Oa(r?.effect),l=typeof r?.actionId=="string"&&kd.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=n.kind==="structure"?bu(r?.reaction,r?.zone):null,u=n.kind==="structure"&&r?.zone!=="trigger"?Ua(r?.hinge):null;return{name:Bd(r?.name,`Pi\xE8ce ${o+1}`),...u?{hinge:u}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(Ts,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Pt.parts?{group:r.group}:{},shape:r?.shape==="asset"&&vu(r?.assetId)?"asset":Object.hasOwn(To,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&vu(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:vi(r?.profile)}:{},position:Is(r?.position,0,-3,3),rotation:Is(r?.rotation,0,-360,360),scale:Is(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&Cg.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(Xd,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:Bd(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(_r,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&Tg(r.portal)?{portal:Tg(r.portal)}:{},...r?.uv?{uv:Eo(r)}:{},surface:Object.hasOwn(Mu,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Pt.textureBytes&&ES.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof i.avatarId=="string"&&Fa(t.find(n=>n.id===i.avatarId))?i.avatarId:null}}function Rg(i){try{let e=(i??globalThis.localStorage)?.getItem(Wd);if(e&&e.length<=Pt.fileBytes)return Ui(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function CS(i){switch(i){case"tetrahedron":return new sr(Math.sqrt(3)/2);case"sphere":return new si(.5,20,12);case"cylinder":return new It(.5,.5,1,20);case"cone":return new ca(.5,1,20);case"torus":return new jn(.365,.135,8,24);case"capsule":return new io(.28,.44,6,16);case"diamond":return new ii(.5);default:return new rt(1,1,1)}}var Ig=Object.keys(Mu),an=64,qa=4,Pg=2,Di;function Lg(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Dg(){if(Di)return Di;let i=an*qa,e=an*Pg,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/an)*qa+Math.floor(s/an),o=Lg(Ig[r],s%an,n%an),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Di=new Ci(t,i,e),Di.colorSpace=Nt,Di.magFilter=nn,Di.minFilter=yn,Di.generateMipmaps=!0,Di.needsUpdate=!0,Di}var zd=new Map,bi;function RS(){if(bi)return bi;let i=new Uint8Array(an**2*4);for(let e=0;e<an;e++)for(let t=0;t<an;t++){let n=t>>3,s=e>>3,r=(n*13+s*17+n*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;i.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*an+t)*4)}return bi=new Ci(i,an,an),bi.colorSpace=Nt,bi.wrapS=bi.wrapT=Nn,bi.magFilter=nn,bi.minFilter=yn,bi.generateMipmaps=!0,bi.needsUpdate=!0,bi}function Eg(i){if(zd.has(i))return zd.get(i);let e=new Uint8Array(an*an*4);for(let n=0;n<an;n++)for(let s=0;s<an;s++){let r=Lg(i,s,n),o=(n*an+s)*4;e.set([r,r,r,255],o)}let t=new Ci(e,an,an);return t.colorSpace=Nt,t.wrapS=t.wrapT=Nn,t.magFilter=nn,t.minFilter=yn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,zd.set(i,t),t}function Su(i){return!!(i?.effect||i?.texture||i?.uv||i?.surface==="windows"||i?.shape==="asset"||i?.finish&&i.finish!=="original")}function IS(i,e,t){let{projection:n,repeat:s,angle:r,offset:o}=Eo(e),a=Ve.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:u,normal:h,uv:d}=i.attributes,f=new _,g=new _;for(let x=0;x<u.count;x++){let p=d.getX(x),m=d.getY(x);if(n==="metric"){f.fromBufferAttribute(u,x).multiply(t),g.fromBufferAttribute(h,x);let v=Math.abs(g.x),b=Math.abs(g.y),y=Math.abs(g.z);v>=b&&v>=y?(p=f.z,m=f.y):b>=y?(p=f.x,m=f.z):(p=f.x,m=f.y)}d.setXY(x,(p*l-m*c)*s+o[0],(p*c+m*l)*s+o[1])}}function vr(i,e=new _(...i.scale)){let t=i.shape==="asset"?Od(i.assetId):null,n=i.shape==="custom"?yu(i.profile):t?.geometry?.clone()??CS(i.shape),s=n.index?n.toNonIndexed():n;s!==n&&n.dispose(),s.attributes.uv||s.setAttribute("uv",new Re(new Float32Array(s.attributes.position.count*2),2)),i.uv&&IS(s,i,e);let r=i.rotation.map(Ve.degToRad);s.scale(...i.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...i.position);let o=new He(i.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,u=Ig.indexOf(i.surface),h=u%qa,d=Math.floor(u/qa),f=s.attributes.color;for(let g=0;g<a;g++)i.shape==="asset"&&f?(l[g*3]=f.getX(g)*o.r,l[g*3+1]=f.getY(g)*o.g,l[g*3+2]=f.getZ(g)*o.b):o.toArray(l,g*3),i.shape!=="asset"&&!i.texture&&!i.uv&&i.surface!=="windows"&&c.setXY(g,(h+.05+c.getX(g)*.9)/qa,(d+.05+c.getY(g)*.9)/Pg);return s.setAttribute("color",new Mt(l,3)),s}function wu(i){return ug(PS(i),i?.effect)}function PS(i){let e=i?.shape==="asset"?Od(i.assetId):null,t=_r[i?.finish];if(e?.material){let o=e.material.clone();if(t&&i.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),i.texture){o.map?.dispose();let a=new lo().load(i.texture);a.colorSpace=Nt,a.wrapS=a.wrapT=Nn,o.map=a}return i.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Nn),i.color&&i.color!=="#ffffff"&&o.color?.multiply(new He(i.color)),o.needsUpdate=!0,o}let{roughness:n,metalness:s}=t??_r.original;if(i?.surface==="windows"&&!i.texture)return new Qt({vertexColors:!0,map:Eg("windows"),emissive:"#ffffff",emissiveMap:RS(),emissiveIntensity:1.3,roughness:n,metalness:s});if(!i?.texture)return new Qt({vertexColors:!0,map:i?.uv?Eg(i.surface):Dg(),roughness:n,metalness:s});let r=new lo().load(i.texture);return r.colorSpace=Nt,r.wrapS=r.wrapT=Nn,new Qt({vertexColors:!0,map:r,roughness:n,metalness:s})}function Ug(i){return i?.parts?.some(Su)?i.parts.map(wu):new Qt({vertexColors:!0,map:Dg(),roughness:.68})}function Tu(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==Di&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Gd(i,e=null){let t=i.map(s=>{if(!e||s.uv?.projection!=="metric")return vr(s);let r=new $t(...s.rotation.map(Ve.degToRad),"ZYX"),o=new _(...s.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(r).multiply(e).length())));return vr(s,o)}),n=cu(t,i.some(Su));return t.forEach(s=>s.dispose()),n.center(),n.computeBoundingBox(),n}function Ng(i,e=null){let t=Gd(i.parts),n=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&i.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Gd(i.parts,e.clone().divide(n))),t.scale(1/n.x,1/n.y,1/n.z),t.computeBoundingBox(),t}function Eu(i){let e=new jt;for(let t of i.parts??[]){let n=vr(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function ss(i){let e=Eu(i),t=e.getCenter(new _),n=e.getSize(new _),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Vd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ve.clamp(s.precision,8,96):48,center:r?new _(...s.center):t,size:r?new _(...s.size):n,rotation:r?new _(...s.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:n}}function LS(i,e){let t=i.attributes.position,n=[],s=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(h=>h.toFixed(4)).join(",");s.has(u)||(s.add(u),n.push(c))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let u=0;u<n.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),r.push(n[l]);for(let u=0;u<n.length;u++)a[u]=Math.min(a[u],n[u].distanceToSquared(n[l]))}return r}function Fg(i,e=null){let t=ss(i),n=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((h,d)=>d!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new io(l,c,Math.max(2,Math.round(n/8)),n):new si(l,n,Math.max(6,Math.floor(n/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/s.x,1/s.y,1/s.z),u}if(t.shape==="convex"&&i.parts?.length){let s=Gd(i.parts),r=LS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new ns(r),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new rt(1,1,1)}function Og(i,e=null){if(!i.partCollisions||i.kind!=="structure")return null;if(i.properties?.collidable===!1)return[];let t=Eu(i),n=t.getCenter(new _),s=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new _(1,1,1);return i.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=vr(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new _).sub(n).multiply(r),size:l.getSize(new _).multiply(r).max(new _(.01,.01,.01))};return a.dispose(),[c]})}var br=new Qi,vn=new _,Ps=new _,zt=new ht,Bg={X:new _(1,0,0),Y:new _(0,1,0),Z:new _(0,0,1)},qd={type:"change"},zg={type:"mouseDown",mode:null},kg={type:"mouseUp",mode:null},Vg={type:"objectChange"},Pu=class extends lr{constructor(e,t=null){super(void 0,t);let n=new Zd(this);this._root=n;let s=new jd;this._gizmo=s,n.add(s);let r=new Jd;this._plane=r,n.add(r);let o=this;function a(b,y){let E=y;Object.defineProperty(o,b,{get:function(){return E!==void 0?E:y},set:function(A){E!==A&&(E=A,r[b]=A,s[b]=A,o.dispatchEvent({type:b+"-changed",value:A}),o.dispatchEvent(qd))}}),o[b]=y,r[b]=y,s[b]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new _,c=new _,u=new ht,h=new ht,d=new _,f=new ht,g=new _,x=new _,p=new _,m=0,v=new _;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",m),a("eye",v),this._offset=new _,this._startNorm=new _,this._endNorm=new _,this._cameraScale=new _,this._parentPosition=new _,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new _,this._worldScaleStart=new _,this._worldQuaternionInv=new ht,this._worldScale=new _,this._positionStart=new _,this._quaternionStart=new ht,this._scaleStart=new _,this._getPointer=DS.bind(this),this._onPointerDown=NS.bind(this),this._onPointerHover=US.bind(this),this._onPointerMove=FS.bind(this),this._onPointerUp=OS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&br.setFromCamera(e,this.camera);let t=Yd(this._gizmo.picker[this.mode],br);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&br.setFromCamera(e,this.camera);let t=Yd(this._plane,br,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,zg.mode=this.mode,this.dispatchEvent(zg)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&br.setFromCamera(e,this.camera);let o=Yd(this._plane,br,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(zt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(vn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(vn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ps.set(a,a,a)}else vn.copy(this.pointStart),Ps.copy(this.pointEnd),vn.applyQuaternion(this._worldQuaternionInv),Ps.applyQuaternion(this._worldQuaternionInv),Ps.divide(vn),t.search("X")===-1&&(Ps.x=1),t.search("Y")===-1&&(Ps.y=1),t.search("Z")===-1&&(Ps.z=1);s.scale.copy(this._scaleStart).multiply(Ps),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(vn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(vn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Bg[t]),vn.copy(Bg[t]),r==="local"&&vn.applyQuaternion(this.worldQuaternion),vn.cross(this.eye),vn.length()===0?l=!0:this.rotationAngle=this._offset.dot(vn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(zt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(zt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(qd),this.dispatchEvent(Vg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(kg.mode=this.mode,this.dispatchEvent(kg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(qd),this.dispatchEvent(Vg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return br}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function DS(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function US(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function NS(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function FS(i){this.enabled&&this.pointerMove(this._getPointer(i))}function OS(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Yd(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Au=new $t,Lt=new _(0,1,0),Gg=new _(0,0,0),Hg=new ct,Cu=new ht,Iu=new ht,Ni=new _,Wg=new ct,Ka=new _(1,0,0),Mr=new _(0,1,0),$a=new _(0,0,1),Ru=new _,ja=new _,Ja=new _,Zd=class extends Ft{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},jd=class extends Ft{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new hn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new qn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let h=e.clone();h.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};let x=new It(0,.04,.1,12);x.translate(0,.05,0);let p=new rt(.08,.08,.08);p.translate(0,.04,0);let m=new dt;m.setAttribute("position",new Re([0,0,0,1,0,0],3));let v=new It(.0075,.0075,.5,3);v.translate(0,.25,0);function b(W,X){let se=new jn(W,.0075,3,64,X*Math.PI*2);return se.rotateY(Math.PI/2),se.rotateX(Math.PI/2),se}function y(){let W=new dt;return W.setAttribute("position",new Re([0,0,0,1,1,1],3)),W}let E={X:[[new ve(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ve(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ve(x,o),[0,.5,0]],[new ve(x,o),[0,-.5,0],[Math.PI,0,0]],[new ve(v,o)]],Z:[[new ve(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ve(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ve(new ii(.1,0),h),[0,0,0]]],XY:[[new ve(new rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ve(new rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ve(new It(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new It(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new It(.2,0,.6,4),n),[0,.3,0]],[new ve(new It(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new It(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new It(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ve(new ii(.2,0),n)]],XY:[[new ve(new rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new ve(new ii(.01,2),s),null,null,null,"helper"]],END:[[new ve(new ii(.01,2),s),null,null,null,"helper"]],DELTA:[[new Yn(y(),s),null,null,null,"helper"]],X:[[new Yn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new ve(b(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ve(b(.5,.5),r)]],Y:[[new ve(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ve(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ve(b(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Yn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ve(new si(.25,10,8),n)]],X:[[new ve(new jn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ve(new jn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ve(new jn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ve(new jn(.75,.1,2,24),n)]]},D={X:[[new ve(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ve(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ve(p,o),[0,.5,0]],[new ve(v,o)],[new ve(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ve(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(v,a),[0,0,0],[Math.PI/2,0,0]],[new ve(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ve(new rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ve(new rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new rt(.1,.1,.1),h)]]},z={X:[[new ve(new It(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new It(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new It(.2,0,.6,4),n),[0,.3,0]],[new ve(new It(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new It(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new It(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ve(new rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new rt(.2,.2,.2),n),[0,0,0]]]},k={X:[[new Yn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function V(W){let X=new Ft;for(let se in W)for(let j=W[se].length;j--;){let re=W[se][j][0].clone(),_e=W[se][j][1],Se=W[se][j][2],Be=W[se][j][3],Ze=W[se][j][4];re.name=se,re.tag=Ze,_e&&re.position.set(_e[0],_e[1],_e[2]),Se&&re.rotation.set(Se[0],Se[1],Se[2]),Be&&re.scale.set(Be[0],Be[1],Be[2]),re.updateMatrix();let nt=re.geometry.clone();nt.applyMatrix4(re.matrix),re.geometry=nt,re.renderOrder=1/0,re.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.set(1,1,1),X.add(re)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=V(E)),this.add(this.gizmo.rotate=V(L)),this.add(this.gizmo.scale=V(D)),this.add(this.picker.translate=V(A)),this.add(this.picker.rotate=V(M)),this.add(this.picker.scale=V(z)),this.add(this.helper.translate=V(C)),this.add(this.helper.rotate=V(w)),this.add(this.helper.scale=V(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Iu;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(zt.setFromEuler(Au.set(0,0,0)),o.quaternion.copy(n).multiply(zt),Math.abs(Lt.copy(Ka).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(zt.setFromEuler(Au.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(zt),Math.abs(Lt.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(zt.setFromEuler(Au.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(zt),Math.abs(Lt.copy($a).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(zt.setFromEuler(Au.set(0,Math.PI/2,0)),Lt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Hg.lookAt(Gg,Lt,Mr)),o.quaternion.multiply(zt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),vn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),vn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(vn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Lt.copy(Ka).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Lt.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Lt.copy($a).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Lt.copy($a).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Lt.copy(Ka).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Lt.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Cu.copy(n),Lt.copy(this.eye).applyQuaternion(zt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Hg.lookAt(this.eye,Gg,Mr)),o.name==="X"&&(zt.setFromAxisAngle(Ka,Math.atan2(-Lt.y,Lt.z)),zt.multiplyQuaternions(Cu,zt),o.quaternion.copy(zt)),o.name==="Y"&&(zt.setFromAxisAngle(Mr,Math.atan2(Lt.x,Lt.z)),zt.multiplyQuaternions(Cu,zt),o.quaternion.copy(zt)),o.name==="Z"&&(zt.setFromAxisAngle($a,Math.atan2(Lt.y,Lt.x)),zt.multiplyQuaternions(Cu,zt),o.quaternion.copy(zt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Jd=class extends ve{constructor(){super(new Ji(1e5,1e5,2,2),new hn({visible:!1,wireframe:!0,side:Wt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ru.copy(Ka).applyQuaternion(t==="local"?this.worldQuaternion:Iu),ja.copy(Mr).applyQuaternion(t==="local"?this.worldQuaternion:Iu),Ja.copy($a).applyQuaternion(t==="local"?this.worldQuaternion:Iu),Lt.copy(ja),this.mode){case"translate":case"scale":switch(this.axis){case"X":Lt.copy(this.eye).cross(Ru),Ni.copy(Ru).cross(Lt);break;case"Y":Lt.copy(this.eye).cross(ja),Ni.copy(ja).cross(Lt);break;case"Z":Lt.copy(this.eye).cross(Ja),Ni.copy(Ja).cross(Lt);break;case"XY":Ni.copy(Ja);break;case"YZ":Ni.copy(Ru);break;case"XZ":Lt.copy(Ja),Ni.copy(ja);break;case"XYZ":case"E":Ni.set(0,0,0);break}break;case"rotate":default:Ni.set(0,0,0)}Ni.length()===0?this.quaternion.copy(this.cameraQuaternion):(Wg.lookAt(vn.set(0,0,0),Ni,Lt),this.quaternion.setFromRotationMatrix(Wg)),super.updateMatrixWorld(e)}};var Xg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Sr=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new ef(e)}),this.register(function(e){return new tf(e)}),this.register(function(e){return new of(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new sf(e)}),this.register(function(e){return new rf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new pf(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new Qd,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},mt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Kd="KHR_mesh_quantization",Kn={};Kn[xn]=mt.NEAREST;Kn[vc]=mt.NEAREST_MIPMAP_NEAREST;Kn[hr]=mt.NEAREST_MIPMAP_LINEAR;Kn[nn]=mt.LINEAR;Kn[uo]=mt.LINEAR_MIPMAP_NEAREST;Kn[yn]=mt.LINEAR_MIPMAP_LINEAR;Kn[Si]=mt.CLAMP_TO_EDGE;Kn[Nn]=mt.REPEAT;Kn[qr]=mt.MIRRORED_REPEAT;var qg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},BS=new He,Yg=12,zS=1179937895,kS=2,Zg=8,VS=1313821514,GS=5130562;function Qa(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function HS(i){return new TextEncoder().encode(i).buffer}function WS(i){return Qa(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function XS(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Ve.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Jg(i){return Math.ceil(i/4)*4}function $d(i,e=0){let t=Jg(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function jg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function qS(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var Qd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(l);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){let f=$d(d.result),g=new DataView(new ArrayBuffer(Zg));g.setUint32(0,f.byteLength,!0),g.setUint32(4,GS,!0);let x=$d(HS(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Zg));p.setUint32(0,x.byteLength,!0),p.setUint32(4,VS,!0);let m=new ArrayBuffer(Yg),v=new DataView(m);v.setUint32(0,zS,!0),v.setUint32(4,kS,!0);let b=Yg+p.byteLength+x.byteLength+g.byteLength+f.byteLength;v.setUint32(8,b,!0);let y=new Blob([m,p,x,g,f],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(y),E.onloadend=function(){t(E.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new _;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new _;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===Nt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof tr&&(e=await this.decompressTextureAsync(e)),t instanceof tr&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=jg();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let u=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let f=n(e),g=c.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let f=n(t),g=c.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}c.putImageData(u,0,0);let d=(e||t).clone();return d.source=new xs(l),d.colorSpace=yi,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case mt.BYTE:case mt.UNSIGNED_BYTE:a=1;break;case mt.SHORT:case mt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===mt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Jg(s*l),u=new DataView(new ArrayBuffer(c)),h=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let p;e.itemSize>4?p=e.array[g*e.itemSize+x]:(x===0?p=e.getX(g):x===1?p=e.getY(g):x===2?p=e.getZ(g):x===3&&(p=e.getW(g)),e.normalized===!0&&(p=Ve.normalize(p,e.array))),t===mt.FLOAT?u.setFloat32(h,p,!0):t===mt.INT?u.setInt32(h,p,!0):t===mt.UNSIGNED_INT?u.setUint32(h,p,!0):t===mt.SHORT?u.setInt16(h,p,!0):t===mt.UNSIGNED_SHORT?u.setUint16(h,p,!0):t===mt.BYTE?u.setInt8(h,p):t===mt.UNSIGNED_BYTE&&u.setUint8(h,p),h+=a}h%l!==0&&(h+=l-h%l)}let d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===mt.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=$d(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=mt.FLOAT;else if(e.array.constructor===Int32Array)a=mt.INT;else if(e.array.constructor===Uint32Array)a=mt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=mt.SHORT;else if(e.array.constructor===Uint16Array)a=mt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=mt.BYTE;else if(e.array.constructor===Uint8Array)a=mt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=XS(e,n,s),c;t!==void 0&&(c=e===t.index?mt.ELEMENT_ARRAY_BUFFER:mt.ARRAY_BUFFER);let u=this.processBufferView(e,a,n,s,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let u=o.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);let d={mimeType:s},f=jg();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==An&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(qS(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):d.uri=$r.getDataURL(f,s);let x=a.images.push(d)-1;return u[h]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Kn[e.magFilter],minFilter:Kn[e.minFilter],wrapS:Kn[e.wrapS],wrapT:Kn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof tr&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(Qa(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Wt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});let o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,E=e.material.length;y<E;y++)s.push(e.material[y].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=mt.LINES:e.isLineLoop?a=mt.LINE_LOOP:e.isLine?a=mt.LINE_STRIP:e.isPoints?a=mt.POINTS:a=e.material.wireframe?mt.LINES:mt.TRIANGLES;let l={},c={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let E=o.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(E))){c[y]=t.attributes.get(this.getUID(E));continue}g=null;let C=E.array;y==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Mt(new Uint16Array(C),E.itemSize,E.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),g=Sr.Utils.toFloat32BufferAttribute(E));let L=this.processAccessor(g||E,o);L!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,E),c[y]=L,t.attributes.set(this.getUID(E),L))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],E=[],A={};if(e.morphTargetDictionary!==void 0)for(let C in e.morphTargetDictionary)A[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){let L={},w=!1;for(let M in o.morphAttributes){if(M!=="position"&&M!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let D=o.morphAttributes[M][C],z=M.toUpperCase(),k=o.attributes[M];if(t.attributes.has(this.getUID(D,!0))){L[z]=t.attributes.get(this.getUID(D,!0));continue}let V=D.clone();if(!o.morphTargetsRelative)for(let W=0,X=D.count;W<X;W++)for(let se=0;se<D.itemSize;se++)se===0&&V.setX(W,D.getX(W)-k.getX(W)),se===1&&V.setY(W,D.getY(W)-k.getY(W)),se===2&&V.setZ(W,D.getZ(W)-k.getZ(W)),se===3&&V.setW(W,D.getW(W)-k.getW(W));L[z]=this.processAccessor(V,o),t.attributes.set(this.getUID(k,!0),L[z])}h.push(L),y.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&E.push(A[C])}l.weights=y,E.length>0&&(l.extras={},l.extras.targetNames=E)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let p=!1;if(x&&o.index===null){let y=[];for(let E=0,A=o.attributes.position.count;E<A;E++)y[E]=E;o.setIndex(y),p=!0}let m=x?e.material:[e.material],v=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,E=v.length;y<E;y++){let A={mode:a,attributes:c};if(this.serializeUserData(o,A),h.length>0&&(A.targets=h),o.index!==null){let L=this.getUID(o.index);(v[y].start!==void 0||v[y].count!==void 0)&&(L+=":"+v[y].start+":"+v[y].count),t.attributes.has(L)?A.indices=t.attributes.get(L):(A.indices=this.processAccessor(o.index,o,v[y].start,v[y].count),t.attributes.set(L,A.indices)),A.indices===null&&delete A.indices}let C=await this.processMaterialAsync(m[v[y].materialIndex]);C!==null&&(A.material=C),u.push(A)}p===!0&&o.setIndex(null),l.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,l)});let b=n.meshes.push(l)-1;return t.meshes.set(r,b),b}detectMeshQuantization(e,t){if(this.extensionsUsed[Kd])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Xg[s]&&Xg[s].includes(n)&&(this.extensionsUsed[Kd]=!0,this.extensionsRequired[Kd]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Ve.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=Sr.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let u=r[c],h=St.parseTrackName(u.name),d=St.findNode(t,h.nodeName),f=qg[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}let g=1,x=u.values.length/u.times.length;f===qg.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let p;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",x/=3):u.getInterpolation()===$s?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new Mt(u.times,g)),output:this.processAccessor(new Mt(u.values,x)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(d),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new ct;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Mt(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Qa(a,[0,0,0,1])||(r.rotation=a),Qa(l,[0,0,0])||(r.translation=l),Qa(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),WS(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let u=e.children[l];if(u.visible||n.onlyVisible===!1){let h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new ni;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof ni?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},ef=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},tf=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},nf=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},sf=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},rf=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},of=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},af=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},lf=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cf=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(BS)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},uf=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hf=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},df=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ff=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},pf=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new ct,c=new _,u=new ht,h=new _;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,u,h),c.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new Mt(r,3)),ROTATION:n.processAccessor(new Mt(o,4)),SCALE:n.processAccessor(new Mt(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Sr.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=St.parseTrackName(o.name),l=St.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Zr)}let c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[l.uuid]===void 0){h=o.clone();let f=new h.ValueBufferType(c*h.times.length);for(let g=0;g<h.times.length;g++)f[g*c+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[l.uuid]=h,t.push(h);continue}let d=o.createInterpolant(new o.ValueBufferType(1));h=n[l.uuid];for(let f=0;f<h.times.length;f++)h.values[f*c+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(h,o.times[f]);h.values[g*c+u]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){let e=new Mt(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};var Kg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],mf=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},e0=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",Ao=(i,e,t)=>Math.min(t,Math.max(e,i)),YS=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Lu=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function t0(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var n0="gorilla-lab-texture-shelf-v1";function ZS(){try{let i=JSON.parse(localStorage.getItem(n0)??"[]");return Array.isArray(i)?i:[]}catch{return[]}}function $g(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=e0(t),r.fillRect(0,0,o,o);let a=t0(s),l=o/Math.max(4,2*Math.round(4*n)),c=u=>{r.fillStyle=u>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(n),h={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<h;d++){let f=a()*o,g=a()*o,x=a(),p=a(),m=a();Lu(r,v=>{if(e==="rock"){let b=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),v.beginPath();for(let y=0;y<6;y++){let E=y*Math.PI/3+p,A=b*(.63+.3*Math.cos(E*2+p)+.25);v.lineTo(f+Math.cos(E)*A,g+Math.sin(E)*A*.72)}v.closePath(),v.fill(),v.globalAlpha=.3,v.strokeStyle="#232633",v.lineWidth=1.4,v.stroke()}else if(e==="soil"){let b=(1+x*x*12)*u,y=v.createRadialGradient(f,g,0,f,g,b);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),v.globalAlpha=.6,v.fillStyle=y,v.fillRect(f-b,g-b,b*2,b*2)}else if(e==="grass"||e==="wood"){let b=e==="grass",y=(b?5+x*25:7+x*110)*u;v.strokeStyle=b?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",v.globalAlpha=.08+p*.28,v.lineWidth=(.75+x*1.7)*u,v.beginPath(),v.moveTo(f,g),b?v.quadraticCurveTo(f+y*(p-.5)*.55,g-y*.58,f+y*(p-.6),g-y):v.quadraticCurveTo(f+y*.5,g+10*(p-.5),f+y,g+4*(m-.5)),v.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let b=(e==="sand"?.6+x*1.6:1+x*5)*u;v.fillRect(f,g,b,b*(.7+p*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let h=0;h<u;h++)for(let d=0;d<u;d++)Lu(r,f=>{f.beginPath(),f.arc(d*l+l/2,h*l+l/2,Ao(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let h=0;h<o;h+=l/2)r.fillRect(h,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,h,o,Math.max(1,l/13));for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(h,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let h=0;h<=o;h+=l)r.beginPath(),r.moveTo(0,h),r.lineTo(o,h),r.stroke();for(let h=0;h<o;h+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(h/l)%2?l/2:0;e!=="brick"&&h>0||(r.beginPath(),r.moveTo(d+f,h),r.lineTo(d+f,h+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let h=l/2;h<o;h+=l)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke()}}}r.globalAlpha=1}var jS=`
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
`;function JS(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=jS,document.head.append(i)}async function Qg(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function i0({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){JS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=O=>o.querySelector(O),l=a(".texture-canvas"),c=a(".texture-tile"),u=mf(),h=mf(),d={pattern:Kg.some(([O])=>O===n)?n:"grain",base:e0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),g=u.getContext("2d",{willReadFrequently:!0}),x=h.getContext("2d",{willReadFrequently:!0}),p=[],m=[],v=!1,b=!1,y=null,E="paint",A=null,C=null;a("#studio-title").textContent=t+" / SURFACE LAB";let L=[],w=-1;a("[data-field=base]").value=d.base;for(let O of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+O+"]").addEventListener("input",B=>{let ce=B.target.value;d[O]=O==="seed"?Math.trunc(Ao(Number(ce)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(O)?Number(ce):ce});let M=O=>{a("[data-status]").textContent=O},D=()=>{f.clearRect(0,0,512,512),f.drawImage(u,0,0),f.drawImage(h,0,0);let O=c.getContext("2d");O.clearRect(0,0,256,128);for(let B=0;B<2;B++)for(let ce=0;ce<4;ce++)O.drawImage(l,ce*64,B*64,64,64)},z=()=>({base:g.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:L,editingShape:w}),k=O=>{g.putImageData(O.base,0,0),x.putImageData(O.top,0,0),L=O.shapes,w=O.editingShape,X(),D()},V=()=>{C=null,p.push(z()),p.length>16&&p.shift(),m.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},W=(O,B)=>{O.length&&(C=null,B.push(z()),k(O.pop()),a("[data-cmd=undo]").disabled=!p.length,a("[data-cmd=redo]").disabled=!m.length,v=!0)},X=()=>{a("[data-shape-count]").textContent=L.length+" forme"+(L.length>1?"s":""),a("[data-cmd=add-shape]").textContent=w<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(w+1),a("[data-shape-list]").replaceChildren(...L.map((O,B)=>{let ce=document.createElement("div");ce.className="texture-setting-row";let I=document.createElement("canvas");I.width=48,I.height=32;let te=Math.min(48/O.width,32/O.height);I.getContext("2d").drawImage(O,0,0,O.width*te,O.height*te);let Q=document.createElement("button"),J=document.createElement("button");return Q.textContent="Modifier "+(B+1),J.textContent="Supprimer "+(B+1),Q.onclick=()=>{V(),w=B,x.clearRect(0,0,512,512),x.drawImage(O,(512-O.width)/2,(512-O.height)/2),X(),D()},J.onclick=()=>{V(),L=L.filter((ee,ye)=>ye!==B),w===B?(w=-1,x.clearRect(0,0,512,512)):w>B&&w--,X(),D()},ce.append(I,Q,J),ce}))};a("[data-cmd=add-shape]").onclick=()=>{let O=x.getImageData(0,0,512,512).data,B=512,ce=512,I=-1,te=-1;for(let J=0;J<512;J++)for(let ee=0;ee<512;ee++)O[4*(J*512+ee)+3]&&(B=Math.min(B,ee),ce=Math.min(ce,J),I=Math.max(I,ee),te=Math.max(te,J));if(I<0){M("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let Q=document.createElement("canvas");Q.width=I-B+1,Q.height=te-ce+1,Q.getContext("2d").drawImage(h,B,ce,Q.width,Q.height,0,0,Q.width,Q.height),V(),L=w<0?[...L,Q]:L.map((J,ee)=>ee===w?Q:J),w=-1,x.clearRect(0,0,512,512),X(),D(),M("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let se=()=>{let O=(ee,ye,de)=>Ao(Number(a("[data-field="+ee+"]").value)||0,ye,de),B=Math.round(O("density",1,1e3)),ce=O("minScale",1,200)/100,I=Math.max(ce,O("maxScale",1,200)/100),te=O("rotation",0,360)*Math.PI/180,Q=a("[data-field=mirror]").checked,J=t0(d.seed);V(),d.pattern="solid",$g(u,d);for(let ee=0;ee<B&&L.length;ee++){let ye=L[Math.floor(J()*L.length)],de=J()*512,be=J()*512,ze=J()*te,qe=512*(ce+J()*(I-ce))/Math.max(ye.width,ye.height),P=Q&&J()<.5?-1:1;Lu(g,S=>{S.translate(de,be),S.rotate(ze),S.scale(P*qe,qe),S.drawImage(ye,-ye.width/2,-ye.height/2)})}D(),M(L.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},j=O=>{let B=l.getBoundingClientRect();return{x:(O.clientX-B.left)/B.width*512,y:(O.clientY-B.top)/B.height*512}},re=O=>{let B=d.size/2,ce=d.opacity;Lu(x,I=>{I.save(),E==="erase"&&(I.globalCompositeOperation="destination-out"),I.globalAlpha=ce;let te=Ao(d.hardness,.05,1);if(E==="stamp")I.fillStyle=d.ink,I.translate(O.x,O.y),I.rotate(Math.PI/4),I.fillRect(-B*.8,-B*.8,B*1.6,B*1.6);else{let Q=I.createRadialGradient(O.x,O.y,B*te*.85,O.x,O.y,B);if(E==="erase")Q.addColorStop(0,"rgba(0,0,0,1)"),Q.addColorStop(1,"rgba(0,0,0,0)");else{let J=d.ink.match(/[\da-f]{2}/gi).map(ee=>parseInt(ee,16)).join(",");Q.addColorStop(0,"rgba("+J+",1)"),Q.addColorStop(1,"rgba("+J+",0)")}I.fillStyle=Q,I.beginPath(),I.arc(O.x,O.y,B,0,2*Math.PI),I.fill()}I.restore()})},_e=(O,B)=>{let ce=Math.hypot(B.x-O.x,B.y-O.y),I=Math.max(1,Math.ceil(ce/Math.max(2,d.size*.18)));for(let te=1;te<=I;te++)re({x:O.x+(B.x-O.x)*te/I,y:O.y+(B.y-O.y)*te/I})},Se=O=>{let B=f.getImageData(Math.floor(Ao(O.x,0,511)),Math.floor(Ao(O.y,0,511)),1,1).data;d.ink="#"+[...B].slice(0,3).map(ce=>ce.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,M("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",O=>{if(O.button!==0||b)return;let B=j(O);if(E==="pick"){Se(B);return}O.preventDefault(),V(),b=!0,y=O.pointerId,A=B,l.setPointerCapture(O.pointerId),re(B),D()}),l.addEventListener("pointermove",O=>{if(!b||O.pointerId!==y)return;O.preventDefault();let B=j(O);E==="stamp"?re(B):_e(A,B),A=B,D()});let Be=O=>{O.pointerId===y&&(b=!1,y=null,A=null,l.hasPointerCapture(O.pointerId)&&l.releasePointerCapture(O.pointerId))};l.addEventListener("pointerup",Be),l.addEventListener("pointercancel",Be);for(let O of o.querySelectorAll("[data-tool]"))O.onclick=()=>{E=O.dataset.tool,o.querySelectorAll("[data-tool]").forEach(B=>B.setAttribute("aria-pressed",String(B===O)))};a("[data-cmd=generate]").onclick=se,a("[data-cmd=undo]").onclick=()=>W(p,m),a("[data-cmd=redo]").onclick=()=>W(m,p),a("[data-cmd=export]").onclick=()=>YS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async O=>{let B=O.target.files?.[0];if(O.target.value="",!!B)try{if(!["image/png","image/jpeg","image/webp"].includes(B.type))throw Error("Image PNG / JPG / WebP uniquement.");if(B.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let ce=await createImageBitmap(B);V(),g.clearRect(0,0,512,512),g.drawImage(ce,0,0,512,512),ce.close(),x.clearRect(0,0,512,512),D(),M("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(ce){M(ce.message)}});let Ze=O=>{!O&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",nt,!0),o.remove())},nt=O=>{if(O.key==="Escape"){O.preventDefault(),Ze(!1);return}(O.ctrlKey||O.metaKey)&&!O.target.closest("input,select")&&O.key.toLowerCase()==="z"&&(O.preventDefault(),O.stopImmediatePropagation(),O.shiftKey?W(m,p):W(p,m))};window.addEventListener("keydown",nt,!0),a("[data-cmd=close]").onclick=()=>Ze(!1),a("[data-cmd=cancel]").onclick=()=>Ze(!1);let je=()=>{if(C?.recipe.resolution===d.resolution&&C.data.length<=s)return C.data;for(let O of[d.resolution,256,128].filter((B,ce,I)=>B<=d.resolution&&I.indexOf(B)===ce)){let B=document.createElement("canvas");B.width=B.height=O,B.getContext("2d").drawImage(l,0,0,O,O);for(let ce of[.85,.72,.58]){let I=B.toDataURL("image/webp",ce);if(I.length<=s)return I}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},Z=ZS(),N=a("[data-field=shelf]");function ie(O=""){N.replaceChildren(new Option("Choisir une texture",""),...Z.map(ce=>new Option(ce.name,ce.id))),N.value=O;let B=!!N.value;a("[data-cmd=shelf-load]").disabled=!B,a("[data-cmd=shelf-remove]").disabled=!B}function he(O,B){try{localStorage.setItem(n0,JSON.stringify(O))}catch{return M("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return Z.splice(0,Z.length,...O),ie(B),!0}return N.onchange=()=>ie(N.value),a("[data-cmd=shelf-save]").onclick=()=>{let O=Kg.find(([ce])=>ce===d.pattern)?.[1]??"Texture",B=prompt("Nom de la texture",O)?.trim().slice(0,50);if(B)try{let ce={id:crypto.randomUUID(),name:B,data:je()},{pattern:I,base:te,scale:Q,seed:J,resolution:ee}=d;ce.recipe={pattern:I,base:te,scale:Q,seed:J,resolution:ee},he([...Z,ce],ce.id)&&M("Texture disponible dans les deux ateliers.")}catch(ce){M(ce.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let O=Z.find(B=>B.id===N.value);if(!(!O||v&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let B=mf();await Qg(O.data,B),V(),g.clearRect(0,0,512,512),g.drawImage(B,0,0),x.clearRect(0,0,512,512),Object.assign(d,O.recipe),C=O;for(let ce of["base","seed","resolution"])a("[data-field="+ce+"]").value=d[ce];D(),M("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(B){M(B.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{he(Z.filter(O=>O.id!==N.value),"")&&M("Texture retir\xE9e de la biblioth\xE8que.")},ie(),a("[data-cmd=apply]").onclick=async()=>{let O=a("[data-cmd=apply]");O.disabled=!0;try{let B=je();await r(B),v=!1,Ze(!0)}catch(B){M(B.message||"Impossible d\u2019appliquer la texture.")}finally{O.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,$g(u,d),D(),i&&Qg(i,u).then(D).catch(()=>M("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>Ze(!1)}}var KS=`
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
`;function $S(){if(document.querySelector("#forge-sketch-css"))return;let i=document.createElement("style");i.id="forge-sketch-css",i.textContent=KS,document.head.append(i)}var gf=i=>structuredClone(i),wr=(i,e,t)=>Math.min(t,Math.max(e,i)),s0=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function QS(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s,o=wr(r?((i[0]-e[0])*n+(i[1]-e[1])*s)/r:0,0,1);return s0(i,[e[0]+o*n,e[1]+o*s])}function r0({initial:i=wo(),name:e="Forme libre",onApply:t=()=>{}}={}){$S();let n=document.createElement("div");n.className="forge-sketch-backdrop",n.innerHTML=`
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
  </section>`,document.body.append(n);let s=N=>n.querySelector(N);s("#sketch-title").textContent="Fa\xE7onner \xB7 "+e;let r=vi(i),o=0,a="move",l=!1,c=null,u=!1,h=null,d=null,f=null,g=[],x=[],p=600,m=p/2,v=p/2.75,b=s("#sketch-2d"),y=b.getContext("2d"),E=new ni,A=new Kt(44,1,.01,30);E.background=new He("#1b2b34"),E.add(new Ki("#e3f7ff","#314653",2));let C=new $i("#ffd4a9",2.5);C.position.set(3,4,6),E.add(C),A.position.set(1.5,1.25,2.1),A.lookAt(0,0,0);let L=new wa(.7);E.add(L);let w=new Qt({color:"#89c2cb",metalness:.25,roughness:.52,side:Wt});try{let N=s("#sketch-preview");h=new _o({canvas:N,antialias:!0}),h.setPixelRatio(Math.min(1.5,devicePixelRatio)),d=new ws(A,N),d.enablePan=!1,d.minDistance=.5,d.maxDistance=7,d.addEventListener("change",()=>h.render(E,A));let ie=new ResizeObserver(()=>{if(!N.isConnected)return;let he=N.getBoundingClientRect();A.aspect=Math.max(.1,he.width/Math.max(1,he.height)),A.updateProjectionMatrix(),h.setSize(Math.max(1,he.width),Math.max(1,he.height),!1),h.render(E,A)});ie.observe(N),n._disposeObserver=()=>ie.disconnect()}catch{s("[data-error]").textContent="Aper\xE7u WebGL indisponible ; tu peux dessiner en 2D."}function M([N,ie]){return[m+N*v,m-ie*v]}function D(N){let ie=b.getBoundingClientRect(),he=((N.clientX-ie.left)/ie.width*p-m)/v,O=(m-(N.clientY-ie.top)/ie.height*p)/v;if(r.mode==="lathe"&&(he=Math.max(0,he)),r.symmetric&&(he=Math.min(0,he)),s("[data-field=snap]").checked&&!N.altKey){let B=Number(s("[data-field=step]").value)||.05;he=Math.round(he/B)*B,O=Math.round(O/B)*B}return[wr(he,-1.35,1.35),wr(O,-1.35,1.35)]}function z(N){let ie=16/v,he=-1,O=ie;return r.points.forEach((B,ce)=>{let I=s0(N,B);I<O&&(he=ce,O=I)}),he}function k(N){let ie=r.points,O=r.mode==="extrude"&&!r.symmetric?ie.length:ie.length-1,B=-1,ce=16/v;for(let I=0;I<O;I++){let te=QS(N,ie[I],ie[(I+1)%ie.length]);te<ce&&(B=I,ce=te)}return B}function V(){g.push(gf(r)),g.length>36&&g.shift(),x.length=0,u=!0,s("[data-act=undo]").disabled=!1,s("[data-act=redo]").disabled=!0}function W(N,ie){N.length&&(ie.push(gf(r)),r=N.pop(),o=wr(o,0,r.points.length-1),u=!0,_e(),X(),s("[data-act=undo]").disabled=!g.length,s("[data-act=redo]").disabled=!x.length)}function X(){y.clearRect(0,0,p,p),y.fillStyle="#15232d",y.fillRect(0,0,p,p);let ie=((Number(s("[data-field=step]").value)||.05)<.05,.1);y.lineWidth=1;for(let ce=-1.4;ce<=1.4;ce+=ie){let I=M([ce,0])[0],te=M([0,ce])[1];y.strokeStyle=Math.abs(ce)<1e-4?"#d8a26677":"#47627148",y.beginPath(),y.moveTo(I,0),y.lineTo(I,p),y.stroke(),y.beginPath(),y.moveTo(0,te),y.lineTo(p,te),y.stroke()}let he=r.mode==="extrude"?Va(r):r.points,O=(ce,I)=>{ce.length&&(y.beginPath(),y.moveTo(...M(ce[0])),ce.slice(1).forEach(te=>y.lineTo(...M(te))),I&&y.closePath())};r.mode==="extrude"?(O(he,!0),y.fillStyle="#65b9c733",y.fill(),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke()):(O(he,!1),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke(),y.strokeStyle="#d3a261aa",y.setLineDash([8,6]),y.beginPath(),y.moveTo(m,30),y.lineTo(m,p-30),y.stroke(),y.setLineDash([])),r.symmetric&&(y.lineWidth=2,y.setLineDash([5,4]),y.strokeStyle="#daa96e99",y.beginPath(),y.moveTo(m,10),y.lineTo(m,p-10),y.stroke(),y.setLineDash([])),r.points.forEach((ce,I)=>{let[te,Q]=M(ce);y.beginPath(),y.arc(te,Q,I===o?8:6,0,Math.PI*2),y.fillStyle=I===o?"#f5c486":"#e3f0ef",y.fill(),y.strokeStyle="#344b58",y.lineWidth=2,y.stroke()});let B=xu(r);s("[data-error]").textContent=B??"",s("[data-act=apply]").disabled=!!B}function se(){try{let N=yu(r);if(s("[data-triangles]").textContent=((N.index?.count??N.attributes.position.count)/3).toLocaleString("fr-FR")+" triangles",!h){N.dispose();return}f&&(E.remove(f),f.geometry.dispose()),f=new ve(N,w),E.add(f),h.render(E,A)}catch{s("[data-triangles]").textContent="\u2014",h?.render(E,A)}}let j=!1;function re(){j||(j=!0,requestAnimationFrame(()=>{j=!1,n.isConnected&&se()}))}function _e(){s("[data-field=mode]").value=r.mode,s("[data-field=symmetric]").checked=r.symmetric,s("[data-field=symmetric]").disabled=r.mode==="lathe",s("[data-field=depth]").value=r.depth,s("[data-field=bevel]").value=r.bevel,s("[data-field=segments]").value=r.segments,s("[data-depth]").hidden=r.mode==="lathe",s("[data-bevel]").hidden=r.mode==="lathe",s("[data-segments]").hidden=r.mode!=="lathe"}function Se(N){V(),r=vi(N==="lathe"?oi.bottle:oi.shield),o=0,_e(),X(),re()}function Be(N){oi[N]&&(V(),r=vi(oi[N]),o=0,_e(),X(),re())}function Ze(N){o<0||(r.points[o]=N,X(),re())}b.addEventListener("pointerdown",N=>{if(N.button!==0)return;N.preventDefault();let ie=D(N),he=z(ie);if(a==="remove"){he>=0&&r.points.length>3&&(V(),r.points.splice(he,1),o=wr(he,0,r.points.length-1),X(),re());return}if(a==="add"&&r.points.length<ka){V();let O=k(ie);o=O<0?r.points.length:O+1,r.points.splice(o,0,ie),X(),re();return}he<0||(o=he,V(),c=N.pointerId,l=!0,b.setPointerCapture(N.pointerId),X())}),b.addEventListener("pointermove",N=>{!l||c!==N.pointerId||Ze(D(N))});let nt=N=>{N.pointerId===c&&(l=!1,c=null,b.hasPointerCapture(N.pointerId)&&b.releasePointerCapture(N.pointerId))};b.addEventListener("pointerup",nt),b.addEventListener("pointercancel",nt),b.addEventListener("dblclick",N=>{if(r.points.length>=ka)return;let ie=D(N),he=k(ie);he<0||(V(),o=he+1,r.points.splice(o,0,ie),X(),re())}),b.addEventListener("contextmenu",N=>{N.preventDefault();let ie=z(D(N));ie<0||r.points.length<=3||(V(),r.points.splice(ie,1),o=wr(ie,0,r.points.length-1),X(),re())});for(let N of n.querySelectorAll("[data-tool]"))N.onclick=()=>{a=N.dataset.tool,n.querySelectorAll("[data-tool]").forEach(ie=>ie.setAttribute("aria-pressed",String(ie===N)))};s("[data-field=mode]").onchange=N=>Se(N.target.value),s("[data-field=preset]").onchange=N=>{Be(N.target.value),N.target.value=""},s("[data-field=symmetric]").onchange=N=>{if(V(),N.target.checked){let ie=r.points.filter(([he])=>he<=.005).sort((he,O)=>he[1]-O[1]);r.points=ie.length>=3?ie:gf(oi.shield.points),r.points[0][0]<-.001&&r.points.unshift([0,r.points[0][1]]),r.points.at(-1)[0]<-.001&&r.points.push([0,r.points.at(-1)[1]]),r.symmetric=!0}else r.points=Va(r),r.symmetric=!1;o=0,_e(),X(),re()};for(let N of["depth","bevel","segments"])s("[data-field="+N+"]").oninput=ie=>{!l&&ie.target.dataset.started!=="1"&&(V(),ie.target.dataset.started="1"),r[N]=Number(ie.target.value),X(),re()},s("[data-field="+N+"]").onchange=ie=>{ie.target.dataset.started="0",N==="segments"&&(r.segments=vi(r).segments,ie.target.value=r.segments)};s("[data-field=step]").onchange=X,s("[data-field=snap]").onchange=X,s("[data-act=reset]").onclick=()=>{let N=r.mode==="lathe"?"bottle":"shield";Be(N)},s("[data-act=undo]").onclick=()=>W(g,x),s("[data-act=redo]").onclick=()=>W(x,g);let je=N=>{!N&&u&&!confirm("Fermer sans utiliser cette forme ?")||(window.removeEventListener("keydown",Z,!0),n._disposeObserver?.(),d?.dispose(),f&&f.geometry.dispose(),w.dispose(),h?.dispose(),n.remove())},Z=N=>{if(N.key==="Escape"){N.preventDefault(),N.stopImmediatePropagation(),je(!1);return}if((N.ctrlKey||N.metaKey)&&N.key.toLowerCase()==="z"){N.preventDefault(),N.stopImmediatePropagation(),N.shiftKey?W(x,g):W(g,x);return}N.target.closest("input,select,button")||(N.key==="Delete"||N.key==="Backspace")&&(r.points.length>3&&(V(),r.points.splice(o,1),o=wr(o,0,r.points.length-1),X(),re()),N.preventDefault(),N.stopImmediatePropagation())};return window.addEventListener("keydown",Z,!0),s("[data-act=close]").onclick=()=>je(!1),s("[data-act=cancel]").onclick=()=>je(!1),s("[data-act=apply]").onclick=()=>{let N=xu(r);if(N){s("[data-error]").textContent=N;return}try{t(vi(r)),u=!1,je(!0)}catch(ie){s("[data-error]").textContent=ie.message||"Forme invalide."}},s("[data-act=undo]").disabled=!0,s("[data-act=redo]").disabled=!0,_e(),X(),re(),{close:()=>je(!1)}}function o0(i,e,t){let n=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>i?.includes(s.toUpperCase())&&n[s]<-1e-6?-1:1)}function a0(i,e,t,n,s){let r=s?new _:n.clone().multiply(new _(1,1,1).sub(t.scale));return i.map(o=>{let a=new ht().setFromEuler(new $t(...o.rotation.map(Ve.degToRad),"ZYX")),l=o.scale.map((h,d)=>h*new _().setComponent(d,1).applyQuaternion(a).multiply(t.scale).length()),c=new _().fromArray(o.position).sub(e).multiply(t.scale).add(r).applyQuaternion(t.quaternion).add(t.position).toArray();a.premultiply(t.quaternion);let u=new $t().setFromQuaternion(a,"ZYX");return{position:c,rotation:[u.x,u.y,u.z].map(Ve.radToDeg),scale:l}})}function l0(i,e,t,n,s,r){return(r?new _:t.clone().multiply(n.clone().sub(s))).applyQuaternion(e).add(i)}var R=i=>document.getElementById(i),dn=R("preview-canvas"),ew=["X","Y","Z"],d0={position:{min:-3,max:3,step:.01,label:"POSITION / M"},rotation:{min:-360,max:360,step:1,label:"ROTATION / \xB0"},scale:{min:.02,max:4,step:.01,label:"DIMENSIONS / \xC9CHELLE"}},tt=Rg(localStorage),yf=wg(),Mf="gorilla-foundry-draft-v1",Fo=!1,yt=tt.models[0]?.id??null,Zt=0,Yt=new Set,Ro=null,nl=!1;try{let i=localStorage.getItem(Mf);if(i){let e=Ui(JSON.parse(i));Object.assign(tt,e),yt=tt.models[0]?.id??null,Fo=!0}}catch{}var In=null,kt=null,lt=null,kn="select",bn=!1,Co=!1,Oi=null,_f=0;var rs=null,Ds=[],il=[],tw=48,Pn=new tn,Fi=new Ft,os=new tn,en=null,Os=new Map,Io=new Ft,Ns=new tn,as=!1,nw=new si(1,10,6),Sf={},ku=new Ri(new dt().setAttribute("position",new Re(6*(Object.keys(Ts).length-1),3)),new qn({color:"#49d3ec",depthTest:!1,depthWrite:!1,transparent:!0,opacity:.85}));ku.frustumCulled=!1;ku.renderOrder=9;Ns.add(ku);for(let i of Object.keys(Ts)){let e=new ve(nw,new hn({color:"#55d8ee",depthTest:!1,depthWrite:!1}));e.renderOrder=10,e.userData.avatarJoint=i,Ns.add(e),Sf[i]=e}var Bs=new ni;Ns.visible=!1;Bs.add(Io,Ns);Bs.background=new He("#152229");var fn=new Kt(45,1,.005,110),wf=new ar(8,32,"#64818a","#334b54");wf.position.y=-.002;var Po=new Sa(new jt,"#eeb578");Po.visible=!1;var Rn=new ve(new rt(1,1,1),new hn({color:"#ffb55e",wireframe:!0,transparent:!0,opacity:.92,depthTest:!1}));Rn.name="Hitbox de collision";Rn.renderOrder=8;Rn.visible=!1;var Nu=new tn;Bs.add(Nu);var iw=Ug();Bs.add(Fi,Pn,os,wf,Po,Rn,new Ki("#ecf7ff","#4c5960",2.4));var f0=new $i("#ffe5c2",2.05);f0.position.set(-2.5,4,-3);Bs.add(f0);fn.position.set(1.8,1.4,-2.4);fn.lookAt(0,0,0);var Vn=Ve.clamp,Ge=()=>tt.models.find(i=>i.id===yt),ft=()=>Ge()?.parts[Zt],ls=()=>Yt.size?[...Yt]:ft()?[Zt]:[],Tf=()=>ls().map(i=>Pn.children[i]).filter(Boolean),Ef=()=>Tf().filter(i=>i.visible),p0="gorilla-foundry-visibility-v1",Mn={active:{},masks:{},references:[]};try{let i=JSON.parse(localStorage.getItem(p0)||"null");i&&typeof i=="object"&&i.masks&&i.active&&(Mn={active:i.active,masks:i.masks,references:Array.isArray(i.references)?i.references:[],lastModel:typeof i.lastModel=="string"?i.lastModel:null})}catch{}tt.models.some(i=>i.id===Mn.lastModel)&&(yt=Mn.lastModel);var sl=new URLSearchParams(location.search),vf=sl.get("model"),m0=sl.get("from")==="cards",c0=sl.get("asset"),Af=vf;tt.models.some(i=>i.id===vf)&&(yt=vf);var Fs=new Set(Mn.references);function Oo(){try{Mn.references=[...Fs],localStorage.setItem(p0,JSON.stringify(Mn))}catch{}}function Vu(){return Mn.active[yt]||"all"}function Fu(){let i=Mn.masks[yt]?.[Vu()]||[];return new Set(Array.isArray(i)?i.filter(e=>Number.isInteger(e)&&e>=0):[])}function Cf(i){yt&&(Mn.masks[yt]||(Mn.masks[yt]={}),Mn.masks[yt][Vu()]=[...i].sort((e,t)=>e-t),Oo(),Bi(),Bt())}function sw(){yt&&delete Mn.masks[yt],Oo()}var Rf=()=>({data:structuredClone(tt),modelId:yt,partIndex:Zt,multi:[...Yt]});function wt(i,e=!1){R("status").textContent=i,R("status").dataset.error=String(e)}function Ke(){Fo=!0,wt("Brouillon local \xB7 non publi\xE9 dans le jeu"),clearTimeout(_f),_f=setTimeout(()=>{try{localStorage.setItem(Mf,JSON.stringify(Ui(tt)))}catch{wt("Brouillon non enregistr\xE9 : exporte le JSON.",!0)}},480)}function rl(){try{let i=Ui(tt);return localStorage.setItem(Wd,JSON.stringify(i)),Object.assign(tt,i),localStorage.removeItem(Mf),clearTimeout(_f),Fo=!1,Mi(),wt("Enregistr\xE9 \xB7 disponible dans Gorilla Lab et les cartes"),!0}catch{return wt("Enregistrement impossible : exporte le JSON.",!0),!1}}function xt(){let i=Rf(),e=Ds.at(-1);(!e||JSON.stringify(e)!==JSON.stringify(i))&&(Ds.push(i),Ds.length>tw&&Ds.shift()),il.length=0,If()}function If(){R("undo-action").disabled=!Ds.length,R("redo-action").disabled=!il.length}function g0(i){Object.assign(tt,structuredClone(i.data)),yt=i.modelId,Zt=i.partIndex,Yt=new Set(i.multi??[]),Ke(),Mi(),If()}function x0(){if(!Ds.length)return;let i=Ds.pop();il.push(Rf()),g0(i),wt("Annul\xE9 \xB7 Ctrl Z")}function bf(){if(!il.length)return;let i=il.pop();Ds.push(Rf()),g0(i),wt("R\xE9tabli \xB7 Ctrl Maj Z")}function rw(i){rs?.target===i&&rs.recorded||((!rs||rs.target!==i)&&(rs={target:i,recorded:!1}),rs.recorded||(xt(),rs.recorded=!0))}document.addEventListener("focusout",i=>{rs?.target===i.target&&(rs=null)});function li(i){i&&document.activeElement===i?rw(i):xt()}function $n(i,e,t){i.replaceChildren(...e.map(([n,s])=>new Option(s,n))),i.value=t??""}function ol(){let i=tt.models.map(r=>[r.id,r.name||"Sans nom"]);$n(R("models"),i.length?i:[["","Aucun mod\xE8le"]],yt),R("models").disabled=!i.length;let e=Ge();R("model-title").disabled=!e,R("delete-model").disabled=!e,document.activeElement!==R("model-title")&&(R("model-title").value=e?.name??""),R("duplicate-model").disabled=!e||tt.models.length>=Pt.models,R("model-count").textContent=tt.models.length+" / "+Pt.models,$n(R("avatar"),[["","Singe d\u2019origine"],...tt.models.filter(Fa).map(r=>[r.id,r.name+(r.kind==="avatar"?"":" \xB7 t\xEAte")])],tt.avatarId);let t=R("model-list"),n=t.scrollTop,s=tt.models.map(r=>{let o=document.createElement("div");o.className="model-entry-wrap";let a=document.createElement("button");a.type="button",a.className="model-entry",a.setAttribute("aria-pressed",String(r.id===yt)),a.title="\xC9diter "+r.name,a.textContent=r.name||"Sans nom";let l=document.createElement("small");l.textContent=" \xB7 "+r.parts.length+" p.",a.append(l),a.onclick=()=>I0(r.id);let c=document.createElement("button");return c.type="button",c.className="model-visibility",c.disabled=r.id===yt||!r.parts.length,c.setAttribute("aria-pressed",String(Fs.has(r.id))),c.textContent=r.id===yt?"\u25CF":Fs.has(r.id)?"\u25C9":"\u25CE",c.title=r.id===yt?"Mod\xE8le actif":"Afficher/masquer comme r\xE9f\xE9rence 3D sans modifier ce mod\xE8le",c.setAttribute("aria-label",c.title+" : "+r.name),c.onclick=()=>cw(r.id),o.append(a,c),o});t.replaceChildren(...s),t.scrollTop=n}function Bi(){let i=Ge()?.parts??[];R("part-count").textContent=i.length+" / "+Pt.parts,R("add-part").disabled=i.length>=Pt.parts||!Ge();let e=ls(),t=new Set(e.map(r=>i[r]?.group).filter(Boolean));R("duplicate-part").disabled=!e.length||i.length+e.length>Pt.parts,R("group-parts").disabled=e.length<2||t.size===1&&e.every(r=>i[r]?.group),R("ungroup-parts").disabled=!t.size,R("selection-count").textContent=e.length+" s\xE9lectionn\xE9e"+(e.length===1?"":"s");let n=Fu();R("mask-set").value=Vu(),R("solo-part").disabled=!i.length||!ft(),R("show-all-parts").disabled=!n.size;let s=R("part-list").scrollTop;R("part-list").replaceChildren(...i.map((r,o)=>{let a=document.createElement("div");a.className="part-row";let l=document.createElement("button");l.type="button",l.className="part-entry",l.setAttribute("aria-pressed",String(e.includes(o))),l.title=r.shape+" \xB7 "+r.surface;let c=document.createElement("span");c.textContent=String(o+1).padStart(2,"0")+"  "+r.name+(r.group?" \xB7 G"+r.group:"");let u=document.createElement("span");u.className="swatch",u.style.setProperty("--swatch",r.color),l.append(c,u),n.has(o)&&(l.style.opacity=".48"),l.onclick=d=>Ou(o,d.shiftKey||d.ctrlKey||d.metaKey);let h=document.createElement("button");return h.type="button",h.className="part-visibility",h.textContent=n.has(o)?"\u25CC":"\u25C9",h.setAttribute("aria-pressed",String(!n.has(o))),h.title=n.has(o)?"Afficher cette pi\xE8ce dans la vue":"Masquer cette pi\xE8ce dans la vue",h.setAttribute("aria-label",h.title+" : "+r.name),h.onclick=()=>{let d=Fu();d.has(o)?d.delete(o):d.add(o),Cf(d)},a.append(l,h),a})),R("part-list").scrollTop=s}function Ot(){let i=Ge(),e=ft();if(R("model-details").hidden=!i,R("part-inspector").hidden=!e,R("part-empty").hidden=!!e||["settings","collision","publish","avatar","animation"].includes(R("model-inspector").dataset.tab),i){document.activeElement!==R("model-name")&&(R("model-name").value=i.name),R("model-kind").value=i.kind||"prop",R("model-kind").disabled=i.kind==="avatar",R("in-game").disabled=i.kind==="avatar";let t=Ya(i);for(let r of["gravity","bounce"])document.activeElement!==R("model-"+r)&&(R("model-"+r).value=t[r]);R("in-game").checked=i.inGame,R("drivable").checked=i.properties.drivable===!0,R("drivable").disabled=i.kind!=="prop";let n="./editor.html?model="+encodeURIComponent(i.id);for(let r of["send-to-map","quick-send-to-map"])R(r).href=n;let s=m0&&i.id===Af;R("go-cards").href=s?"./editor.html?applyModel="+encodeURIComponent(i.id):"./editor.html",R("go-cards").textContent=s?"Appliquer \xE0 la pi\xE8ce et revenir":"Cartes \u2192";for(let r of Object.keys(Za))R(r).checked=!!i.properties[r]}if(R("model-inspector").dataset.tab==="collision"&&zs(),e){for(let s of["name","shape","color","surface"])R("part-"+s).value=e[s];let t=Eo(e),n=_r[e.finish]??_r.original;R("part-finish").value=e.finish??"original",R("part-finish-info").textContent="Rugosit\xE9 "+n.roughness+" \xB7 m\xE9tallicit\xE9 "+n.metalness;for(let[s,r]of[["projection",t.projection],["repeat",t.repeat],["angle",t.angle],["u",t.offset[0]],["v",t.offset[1]]]){let o=R("part-"+s);document.activeElement!==o&&(o.value=r)}R("part-shape").disabled=e.shape==="asset";for(let s of Object.keys(d0))A0[s].forEach((r,o)=>{document.activeElement!==r&&(r.value=Number(e[s][o].toFixed(3)))})}for(let t of document.querySelectorAll(".tab"))t.setAttribute("aria-pressed",String(t.dataset.panel===R("model-inspector").dataset.tab));R("mirror").disabled=!e||Ge().parts.length>=Pt.parts,R("drop-to-grid").disabled=!e,R("focus-part").disabled=!e,R("reset-part").disabled=!e,R("custom-shape-controls").hidden=e?.shape!=="custom",R("edit-profile").disabled=!e||e.shape!=="custom",R("part-paint").disabled=!e,R("part-texture-clear").disabled=!e?.texture,R("part-texture-status").textContent=e?.texture?"Texture peinte appliqu\xE9e \xE0 cette pi\xE8ce.":"Aucune texture personnalis\xE9e. La finition pr\xE9-d\xE9finie reste active.",R("center-part").disabled=!e,R("delete-part").disabled=!e,R("viewport-title").textContent=i?"ATELIER / "+i.name.toUpperCase():"ESPACE DE CONSTRUCTION / 3D";for(let t of["quick-send-to-map","send-to-map"])R(t).setAttribute("aria-disabled",String(!i?.parts.length||i.kind==="avatar"));R("avatar-new").disabled=tt.models.length>=Pt.models,R("avatar-copy").disabled=!i?.parts.length||i.kind==="avatar"||R("avatar-new").disabled,ks(),M0(),Uf(),b0()}function zs(){let i=Ge(),e=i?.hitbox?.mode==="box"||i?.hitbox?.mode==="custom",t=i?.kind==="structure"&&i.partCollisions===!0;R("part-collisions").disabled=i?.kind!=="structure",R("part-collisions").checked=t,R("whole-hitbox-controls").hidden=t,R("part-zone-controls").hidden=!t,R("part-zone").disabled=!ft(),R("part-zone").value=ft()?.zone??"solid";let n=ft()?.zone==="trigger";if(R("trigger-notice").hidden=!t||!n,n){let d=ft().notice;R("trigger-notice-phase").value=d?.phase??"enter",document.activeElement!==R("trigger-notice-text")&&(R("trigger-notice-text").value=d?.text??""),document.activeElement!==R("trigger-portal")&&(R("trigger-portal").value=ft().portal??"")}if(R("hitbox-auto").setAttribute("aria-pressed",String(!e)),R("hitbox-manual").setAttribute("aria-pressed",String(!!e)),R("hitbox-geometry").hidden=!e,R("hitbox-auto").disabled=R("hitbox-manual").disabled=!i?.parts.length,R("hitbox-shape").disabled=!i?.parts.length,R("hitbox-drag").setAttribute("aria-pressed",String(!!bn&&kn==="translate")),R("hitbox-scale").setAttribute("aria-pressed",String(!!bn&&kn==="scale")),R("hitbox-rotate").setAttribute("aria-pressed",String(!!bn&&kn==="rotate")),!i?.parts.length){R("hitbox-info").textContent="Ajoute une pi\xE8ce pour g\xE9n\xE9rer sa hitbox.";return}let s=i.hitbox?.shape??"box",r=Math.round(i.hitbox?.precision??48);R("hitbox-shape").value!==s&&(R("hitbox-shape").value=s),R("hitbox-precision").value=String(r),R("hitbox-precision-value").textContent=String(r),R("hitbox-precision-wrap").hidden=s==="box",R("hitbox-info").textContent=e?"Hitbox personnalis\xE9e : d\xE9place, tourne et redimensionne la forme orange.":s==="convex"?"Auto : enveloppe convexe calcul\xE9e depuis la g\xE9om\xE9trie du mod\xE8le.":"Auto : collision simple ajust\xE9e aux dimensions du mod\xE8le.";let a=ss(i).size.toArray(),l=Math.max(...a),c=a.indexOf(l),u=(s==="sphere"?l:Math.max(...a.filter((d,f)=>f!==c)))/2,h=a.map(d=>d.toFixed(2)).join(" \xD7 ")+" m";if(s==="sphere"?R("hitbox-info").textContent+=" Diam\xE8tre "+(2*u).toFixed(2)+" m.":s==="capsule"?R("hitbox-info").textContent+=" Axe "+["X","Y","Z"][c]+" \xB7 rayon "+u.toFixed(2)+" m \xB7 cylindre "+Math.max(0,l-2*u).toFixed(2)+" m.":R("hitbox-info").textContent+=" "+h+(s==="convex"?" L\u2019enveloppe remplit les creux.":""),!!e)for(let d of["center","size"])for(let f=0;f<3;f++){let g=R("hitbox-"+d+"-"+["x","y","z"][f]);document.activeElement!==g&&(g.value=Number(i.hitbox[d][f].toFixed(3)))}}function ci(){let i=Ge(),e=!!i?.parts.length&&R("model-inspector").dataset.tab==="collision"&&R("hitbox-preview-toggle").checked;for(let n of[...Nu.children])n.geometry.dispose(),n.material.dispose(),Nu.remove(n);let t=e?Og(i):null;if(Rn.visible=!!(e&&!t),t){let n=ss(i).boundsCenter;for(let s of t){let r=new ve(new rt(...s.size),new hn({color:s.mode==="trigger"?"#64dbf0":"#ffb55e",wireframe:!0,depthTest:!1}));r.position.copy(s.center).add(n),r.renderOrder=8,Nu.add(r)}}else if(e){let n=ss(i),s=Fg(i);Rn.geometry.dispose(),Rn.geometry=s,Rn.position.copy(n.center),Rn.rotation.set(...n.rotation.toArray().map(Ve.degToRad)),Rn.scale.copy(n.size),Rn.material.color.set(i.properties.collidable?"#ffb55e":"#9b9fa5")}lt?.dragging||cs(),Dt()}function y0(i){let e=Ge();if(!e?.parts.length)return;let t=ss(e);xt(),e.hitbox=i==="box"?{mode:"custom",shape:R("hitbox-shape").value||"box",center:t.center.toArray(),size:t.size.toArray(),rotation:t.rotation.toArray(),precision:Number(R("hitbox-precision").value)||48}:{mode:"auto",shape:"convex",precision:Number(R("hitbox-precision").value)||48},bn=i==="box",Ke(),zs(),R("hitbox-preview-toggle").checked=!0,ci(),ai(i==="box"?"scale":"select")}function Bo(i){i!=="collision"&&bn&&(bn=!1,ai("select")),R("model-inspector").dataset.tab=i,i!=="avatar"&&(Os.clear(),as=!1),i!=="animation"&&Uo(),Ot(),ci(),cs(),Ar()}for(let i of document.querySelectorAll(".tab"))i.onclick=()=>Bo(i.dataset.panel);var Us=0,_0=new _,ow=new _,aw=new ht,v0=new $t,Pf=["closed","open","seconds","travel"],Lf=["x","y","z"];function Uo(){cancelAnimationFrame(Us),Us=0,R("hinge-preview").value=0,R("hinge-play").textContent="Lire"}var u0=["phase","door","doorState","doorDelay","receiver","light","lightState","lightColor","sound","soundVolume"];function b0(){let i=Ge(),e=ft(),t=e&&i.kind==="structure"&&(e.zone!=="trigger"||i.partCollisions&&i.properties.collidable);if(R("reaction-fields").hidden=!t,R("reaction-note").textContent=t?"Les cibles appartiennent \xE0 la m\xEAme instance du d\xE9cor.":"S\xE9lectionne une pi\xE8ce d\u2019un d\xE9cor. Pour une zone, active les volumes de collision par pi\xE8ce.",!t)return;let n=e.reaction??{},s=(r,o)=>{let a=i.parts.flatMap((c,u)=>o(c)?[[String(u),c.name+" \xB7 "+(u+1)]]:[]),l=i.parts.findIndex(c=>c.actionId&&c.actionId===n[r]);$n(R("reaction-"+r),[["","Aucun"],...a],l<0?"":String(l))};$n(R("reaction-phase"),e.zone==="trigger"?[["enter","Entr\xE9e dans la zone"],["exit","Sortie de la zone"]]:[["use","Interaction avec E"]],n.phase??(e.zone==="trigger"?"enter":"use")),s("door",r=>!!r.hinge),s("light",r=>r.zone!=="trigger"),$n(R("reaction-sound"),[["","Aucun"],...Object.entries(Hd)],n.sound??""),R("reaction-doorState").querySelector("[value=hold]").hidden=e.zone!=="trigger",R("reaction-doorState").value=n.doorState??"open",R("reaction-doorDelay").value=n.doorDelay??1.25,R("reaction-lightState").value=n.lightState??"on",R("reaction-lightColor").value=n.lightColor??"#ffbd54",R("reaction-soundVolume").value=n.soundVolume??.6,R("reaction-receiver").disabled=e.zone==="trigger",R("reaction-receiver").value=n.receiver??""}for(let i of u0)R("reaction-"+i).onchange=()=>{let e=Ge(),t=ft();if(!t||e.kind!=="structure")return;xt();let n=Object.fromEntries(u0.map(r=>[r,R("reaction-"+r).value]));for(let r of["door","light"]){if(n[r]==="")continue;let o=e.parts[Number(n[r])];if(!o){n[r]="";continue}o.actionId??=crypto.randomUUID(),n[r]=o.actionId}n.soundVolume=R("reaction-soundVolume").valueAsNumber,n.doorDelay=R("reaction-doorDelay").valueAsNumber;let s=bu(n,t.zone);s?t.reaction=s:delete t.reaction,Ke()};function M0(){let i=ft(),e=Ge(),t=e?.kind==="structure"&&i?.zone!=="trigger"?i?.hinge:null,n=i&&i.zone!=="trigger"&&e.kind!=="avatar";if(R("hinge-fields").hidden=!t,R("hinge-add").hidden=!!t,R("hinge-add").disabled=!n,R("hinge-hint").textContent=t?"Panneau s\xE9lectionn\xE9 : "+i.name:n?"Articule le panneau s\xE9lectionn\xE9. Le mod\xE8le devient un d\xE9cor.":"S\xE9lectionne une pi\xE8ce solide ou traversable du d\xE9cor.",!!t){Lf.forEach((s,r)=>R(`hinge-${s}`).value=t.pivot[r]);for(let s of Pf)R(`hinge-${s}`).value=t[s]??1;R("hinge-mode").value=t.mode??"pivot",R("hinge-direction").value=t.axis??"y",R("hinge-travel").disabled=!t.mode}}function Df(){let i=ft();i?.hinge&&(xt(),i.hinge=Ua({mode:R("hinge-mode").value,axis:R("hinge-direction").value,pivot:Lf.map(e=>R(`hinge-${e}`).valueAsNumber),...Object.fromEntries(Pf.map(e=>[e,R(`hinge-${e}`).valueAsNumber]))}),Ke(),M0(),Dt())}R("hinge-add").onclick=()=>{let i=ft(),e=Ge();if(!i||e.kind==="avatar"||i.zone==="trigger")return;xt(),e.kind="structure",e.partCollisions=!0;let t=new _(-i.scale[0]/2,0,0).applyEuler(v0.set(...i.rotation.map(Ve.degToRad),"ZYX"));i.hinge=Ua({pivot:t.add(_0.fromArray(i.position)).toArray()}),Uo(),Ke(),Ot(),Bt()};R("hinge-remove").onclick=()=>{let i=ft();i?.hinge&&(xt(),delete i.hinge,Uo(),Ke(),Ot(),Bt())};for(let i of[...Lf,...Pf])R(`hinge-${i}`).onchange=Df;R("hinge-preview").oninput=()=>{cancelAnimationFrame(Us),Us=0,R("hinge-play").textContent="Lire",Dt()};R("hinge-play").onclick=()=>{let i=ft()?.hinge;if(!i)return;if(Us){Uo(),Dt();return}R("hinge-play").textContent="Revenir \xE0 la pose ferm\xE9e";let e=performance.now(),t=n=>{if(ft()?.hinge!==i){Uo(),Dt();return}let s=Math.min(1,(n-e)/(i.seconds*1e3));R("hinge-preview").value=s,Dt(),Us=s<1?requestAnimationFrame(t):0,Us||(R("hinge-play").textContent="Relire")};Us=requestAnimationFrame(t)};var Tr=0,h0=-1/0,S0={};for(let[i,e]of Object.entries(Ld)){let t=document.createElement("details"),n=document.createElement("summary"),s=document.createElement("div");n.textContent=e.label,s.className="axes";let r=S0[i]={};for(let[o,a,l,c,u]of[["strength","Intensit\xE9",0,e.max,.01],["speed","Vitesse (Hz)",0,8,.05],["scale","Variation spatiale",0,48,.5],["signal","Forme"],...i==="deform"?[]:[["color","Couleur"]]]){let h=document.createElement("label");h.textContent=a;let d=document.createElement(o==="signal"?"select":"input");if(d.id="effect-"+i+"-"+o,o==="signal")for(let[f,g]of[["sine","Sinus"],["triangle","Triangle"],["pulse","Impulsion"],...i==="deform"?[]:[["stars","\xC9toiles"]]])d.add(new Option(g,f));else d.type=o==="color"?"color":"number",d.type==="number"&&(d.min=l,d.max=c,d.step=u);d.onchange=()=>{let f=ft();f?.effect&&(xt(),f.effect=Oa({...f.effect,[i]:{...f.effect[i],[o]:d.type==="number"?d.valueAsNumber:d.value}}),Ke(),Uf(),Bt())},r[o]=d,h.append(d),s.append(h)}t.append(n,s),R("effect-fields").append(t)}function Uf(){let i=ft(),e=!!(i&&i.zone!=="trigger"),t=e?i.effect:null;if(R("effect-actions").hidden=!e,R("effect-fields").hidden=!t,R("effect-remove").hidden=!t,R("effect-note").hidden=e,!!t)for(let[n,s]of Object.entries(S0))for(let[r,o]of Object.entries(s))o.value=t[n][r]}function w0(i){let e=ft();!e||e.zone==="trigger"||(xt(),i===null?delete e.effect:e.effect=Oa(i),Ke(),Uf(),Bt())}R("effect-new").onclick=()=>w0({});R("effect-remove").onclick=()=>w0(null);function T0(i){Tr=0,i-h0>=32?(h0=i,Dt()):R("model-inspector").dataset.tab==="animation"&&(Tr=requestAnimationFrame(T0))}R("hinge-mode").onchange=Df;R("hinge-direction").onchange=Df;function Dt(){if(Oi){Oi.requestRender();return}let i=Ge(),e=i?.parts??[],t=R("model-inspector").dataset.tab==="animation"&&i?.kind==="structure";for(let s=0;s<Pn.children.length;s++){let r=Pn.children[s],o=e[s];if(!o||o.zone==="trigger")continue;let a=o.hinge?o:o.group?e.find(h=>h.group===o.group&&h.hinge):null;if(!a||!t&&!r.userData.hingePreview)continue;r.userData.hingePreview=t;let l=_0.fromArray(o.position),c=ow.fromArray(a.hinge.pivot),u=aw.setFromEuler(v0.set(...o.rotation.map(Ve.degToRad),"ZYX"));sg(r,c,l,u,a.hinge,t&&e[Zt]===a?+R("hinge-preview").value:0)}yw(),cg(performance.now()*.001),In?.render(Bs,fn);let n=R("model-inspector").dataset.tab==="animation"&&e.some(s=>s.effect&&Object.values(s.effect).some(r=>r.strength>0&&r.speed>0));n&&!Tr&&(Tr=requestAnimationFrame(T0)),!n&&Tr&&(cancelAnimationFrame(Tr),Tr=0)}try{In=new _o({canvas:dn,antialias:!0,preserveDrawingBuffer:!0}),In.setPixelRatio(Math.min(devicePixelRatio,1.5)),In.toneMapping=xc,kt=new ws(fn,dn),kt.enablePan=!0,kt.minDistance=.09,kt.maxDistance=48,kt.mouseButtons.RIGHT=On.ROTATE,kt.mouseButtons.MIDDLE=On.PAN,kt.addEventListener("change",Dt),lt=new Pu(fn,dn);let i=lt.getHelper();Bs.add(i),lt.addEventListener("dragging-changed",e=>{kt.enabled=!e.value,!e.value&&(Ro=null,Co&&(Co=!1,Ke(),Bt()))}),lt.addEventListener("mouseDown",()=>{xt(),Co=!1,No=null;let e=lt.object;if(e===Rn||e===Io)return;let t=e===Fi?Tf():[e],n=new jt;if(e===Fi){for(let o of t)n.expandByObject(o);n.translate(e.position.clone().negate())}else e.geometry.computeBoundingBox(),n.copy(e.geometry.boundingBox);let s=kn==="scale"?o0(lt.axis,lt.pointStart,lt.worldQuaternionStart):[1,1,1],r=new _;for(let o=0;o<3;o++){let a=s[o]<0||R("negative-scale-face").checked;r.setComponent(o,(a?n.max:n.min).getComponent(o))}Ro={position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone(),anchor:r,rawScale:e.scale.clone(),parts:t.map(o=>({mesh:o,data:structuredClone(Ge().parts[Pn.children.indexOf(o)])}))}}),lt.addEventListener("objectChange",()=>{let e=lt.object;if(!(!e||!lt.dragging)){if(e===Io&&en){let t=R("avatar-joint").value,n=en.setPivot(t,e.position.toArray());Ge().avatarRig[t].pivot=n,e.position.fromArray(n),Co=!0,ks(),Dt();return}if(bn&&e===Rn&&["box","custom"].includes(Ge()?.hitbox?.mode)){let t=Ge().hitbox;t.center=e.position.toArray().map(n=>Vn(n,-6,6)),t.size=e.scale.toArray().map(n=>Vn(Math.abs(n),.025,12)),t.rotation=[e.rotation.x,e.rotation.y,e.rotation.z].map(n=>Vn(Ve.radToDeg(n),-360,360)),e.position.fromArray(t.center),e.scale.fromArray(t.size),Co=!0,zs(),Dt();return}Ro&&(Ro.rawScale.copy(e.scale),E0())}}),dn.addEventListener("pointerdown",xf,!0),dn.addEventListener("pointermove",e=>{nl=e.ctrlKey},!0),window.addEventListener("keydown",xf),window.addEventListener("keyup",xf),new ResizeObserver(()=>{let e=Math.max(1,dn.clientWidth),t=Math.max(1,dn.clientHeight);fn.aspect=e/t,fn.updateProjectionMatrix(),In.setSize(e,t,!1),Dt()}).observe(dn)}catch{wt("WebGL indisponible \xB7 \xE9dition num\xE9rique toujours possible.",!0)}function xf(i){nl!==i.ctrlKey&&(nl=i.ctrlKey,lt?.dragging&&kn==="scale"&&Ro&&E0())}function E0(){let i=lt.object,e=Ro,t=i===Fi,n=Ge().parts,s;if(t){let r={position:i.position,quaternion:i.quaternion,scale:kn==="scale"?e.rawScale.clone().clampScalar(.001,200):new _(1,1,1)};if(s=a0(e.parts.map(o=>o.data),e.position,r,e.anchor,nl),s.some(o=>o.position.some(a=>Math.abs(a)>3+1e-8)||o.scale.some(a=>a<.02-1e-8||a>4+1e-8)))return}else{let r=e.rawScale.clone().clampScalar(.02,4),o=kn==="scale"?l0(e.position,e.rotation,e.anchor,e.scale,r,nl):i.position;if(kn==="scale"&&o.toArray().some(a=>Math.abs(a)>3+1e-8)){let a=n[Pn.children.indexOf(i)];i.position.fromArray(a.position),i.scale.fromArray(a.scale),Dt();return}s=[{position:o.toArray().map(a=>Vn(a,-3,3)),rotation:[i.rotation.x,i.rotation.y,i.rotation.z].map(Ve.radToDeg),scale:r.toArray()}]}e.parts.forEach(({mesh:r},o)=>{let a=s[o],l=n[Pn.children.indexOf(r)];Object.assign(l,a),r.position.fromArray(a.position),r.rotation.set(...a.rotation.map(Ve.degToRad),"ZYX"),r.scale.fromArray(a.scale)}),Co=!0,R0(),Ot()}var A0={};for(let[i,e]of Object.entries(d0)){let t=document.createElement("fieldset");t.className="vectors";let n=document.createElement("legend");n.textContent=e.label,t.append(n);let s=document.createElement("div");s.className="axes",A0[i]=ew.map((r,o)=>{let a=document.createElement("label");a.textContent=r;let l=document.createElement("input");return l.type="number",l.id=i+"-"+r.toLowerCase(),l.min=e.min,l.max=e.max,l.step=e.step,l.setAttribute("aria-label",e.label+" "+r),l.addEventListener("input",()=>{let c=ft();!c||!Number.isFinite(l.valueAsNumber)||(li(l),c[i][o]=Vn(l.valueAsNumber,e.min,e.max),Ke(),Bt())}),l.addEventListener("change",()=>{let c=ft();c&&(l.value=c[i][o])}),a.append(l),s.append(a),l}),t.append(s),R("part-fields").append(t)}function C0(i){let e={...i,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},t=Su(i),n=t?wu(e):iw,s=new ve(vr(e,new _(...i.scale)),n);s.userData.ownMaterial=t;let r=n?.map?.image;return r?.addEventListener&&!r.complete&&r.addEventListener("load",Dt,{once:!0}),s.position.fromArray(i.position),s.rotation.order="ZYX",s.rotation.set(...i.rotation.map(Ve.degToRad)),s.scale.fromArray(i.scale),s.userData.part=!0,s}function cs(){if(!lt)return;if(R("model-inspector").dataset.tab==="animation"){lt.detach();return}if(R("model-inspector").dataset.tab==="avatar"){if(as&&en){let s=R("avatar-joint").value;Io.position.fromArray(So(s,Ge()?.avatarRig?.[s]).pivot),Io.updateMatrixWorld(!0),lt.setMode("translate"),lt.attach(Io)}else lt.detach();return}let i=Ef(),e=i[0];if(i.length&&ls().length>1&&(e=Fi,!lt.dragging)){let s=new jt;for(let r of Tf())s.expandByObject(r);s.getCenter(Fi.position),Fi.rotation.set(0,0,0),Fi.scale.setScalar(1),Fi.updateMatrixWorld(!0)}let t=kn==="select"?null:bn&&Rn.visible&&["translate","scale","rotate"].includes(kn)?Rn:e?.visible?e:null;if(lt.object!==t){if(lt.dragging)return;t?lt.attach(t):lt.detach()}t&&(lt.setMode(kn),lt.setSpace(kn==="translate"||t===Fi?"world":"local"));let n=Number(R("snap-step").value);lt.setTranslationSnap(n||null),lt.setRotationSnap(n?Ve.degToRad(5):null),lt.setScaleSnap(n||null),Dt()}function R0(){let i=Ef();Po.visible=!!i.length&&!bn,Po.box.makeEmpty();for(let e of i)Po.box.expandByObject(e);Dt()}function Gu(){R0(),cs()}function Er(i=!1){if(!kt)return;let e=i?Ef():[],t=new jt;if(e.length)for(let c of e)t.expandByObject(c);else t.setFromObject(Pn);!i&&os.children.length&&t.union(new jt().setFromObject(os));let n=new _,s=new _;t.isEmpty()||(t.getCenter(n),t.getSize(s));let r=Ve.degToRad(fn.fov/2),o=Math.atan(Math.tan(r)*fn.aspect),a=Math.max(.6,s.length()*.63/Math.sin(Math.min(r,o))),l=fn.position.clone().sub(kt.target).normalize();kt.target.copy(n),fn.position.copy(n).addScaledVector(l,a),kt.update(),Dt()}function lw(){for(let e of[...os.children])os.remove(e),e.geometry.dispose(),e.material.dispose();if(!In)return;let i=tt.models.filter(e=>Fs.has(e.id)&&e.id!==yt&&e.parts.length);i.forEach((e,t)=>{let n=Ng(e),s=new hn({color:"#8bd1dc",side:Wt,transparent:!0,opacity:.25,depthWrite:!1}),r=new ve(n,s);r.name="R\xE9f\xE9rence : "+e.name;let o=t/i.length*Math.PI*2-Math.PI/2,a=2.2+Math.floor(t/5)*1.6;r.position.set(Math.cos(o)*a,0,Math.sin(o)*a),r.renderOrder=3,os.add(r)})}function Bt(i=!1){lt?.detach();for(let n of[...Pn.children])Pn.remove(n),n.geometry.dispose(),n.userData.ownMaterial&&Tu(n.material);let e=Ge()?.parts??[],t=Fu();In&&e.forEach((n,s)=>{let r=C0(n);r.visible=!t.has(s),Pn.add(r)}),lw(),ci(),R("preview-empty").hidden=!!(e.length&&In),R("preview-empty").textContent=In?Ge()?"Ajoute une forme avec la barre \xE0 gauche pour commencer.":"Cr\xE9e un mod\xE8le avec + Nouveau mod\xE8le puis assemble tes pi\xE8ces.":"Pr\xE9visualisation 3D indisponible : les valeurs restent modifiables.",R("preview-tag").textContent=e.length+" PI\xC8CE"+(e.length>1?"S":"")+" / "+({avatar:"AVATAR",structure:"D\xC9COR"}[Ge()?.kind]??"OBJET")+(os.children.length?" \xB7 "+os.children.length+" R\xC9F.":""),Gu(),Ar(),i&&(e.length||os.children.length)?Er():Dt()}function Mi(){Mn.lastModel=yt,Oo(),ol(),R("new-model").disabled=R("example").disabled=tt.models.length>=Pt.models,Bi(),Ot(),Bt(!0),If()}function Ou(i,e=!1){i!==Zt&&Uo();let t=Ge()?.parts,n=t?.[i];if(!n)return;let s=n.group?t.flatMap((r,o)=>r.group===n.group?[o]:[]):[i];if(e){Yt=new Set(ls());let r=s.every(o=>Yt.has(o));for(let o of s)r?Yt.delete(o):Yt.add(o);Zt=r?Yt.values().next().value??-1:i}else Yt=new Set(s),Zt=i;Bi(),Ot(),Gu()}function Nf(i=!1){let e=Ge()?.parts,t=ls();if(!e||!t.length)return;let n=new Set(t.map(r=>e[r].group).filter(Boolean)),s=e.flatMap((r,o)=>t.includes(o)||n.has(r.group)?[o]:[]);if(!(!i&&s.length<2)){if(xt(),i)for(let r of s)delete e[r].group;else{let r=new Set(e.map(a=>a.group)),o=1;for(;r.has(o);)o++;for(let a of s)e[a].group=o}Yt=new Set(s),Ke(),Bi(),Gu()}}function I0(i){!tt.models.some(e=>e.id===i)||i===yt||(yt=i,Zt=0,Yt.clear(),Os.clear(),Mi(),wt("Mod\xE8le actif : "+Ge().name))}function cw(i){i===yt||!tt.models.some(e=>e.id===i)||(Fs.has(i)?Fs.delete(i):Fs.add(i),Oo(),ol(),Bt(),Er())}function uw(i){yt&&(Mn.active[yt]=i,Oo(),Bi(),Bt())}function ai(i){bn&&!["translate","scale","rotate"].includes(i)&&(bn=!1),kn=i;for(let e of document.querySelectorAll(".rail-btn[data-tool]"))e.setAttribute("aria-pressed",String(e.dataset.tool===i));dn.dataset.tool=i,R("negative-scale-option").hidden=i!=="scale"||bn,cs()}for(let i of document.querySelectorAll(".rail-btn[data-tool]"))i.onclick=()=>ai(i.dataset.tool);var No=null,Lo=null,tl=new Qi,Bu=new le;function P0(i){if(!In||en)return-1;let e=dn.getBoundingClientRect();Bu.set(2*(i.clientX-e.left)/e.width-1,1-2*(i.clientY-e.top)/e.height),tl.setFromCamera(Bu,fn);let t=tl.intersectObjects(Pn.children.filter(n=>n.visible),!1)[0];return t?Pn.children.indexOf(t.object):-1}dn.addEventListener("pointerdown",i=>{Oi||(i.button===0&&(No=kn!=="select"&&lt?.axis?null:{id:i.pointerId,x:i.clientX,y:i.clientY}),i.button===2&&(Lo={x:i.clientX,y:i.clientY}))});dn.addEventListener("pointercancel",()=>{No=null,Lo=null});dn.addEventListener("pointerup",i=>{if(Oi||lt?.dragging)return;let e=No;if(No=null,i.button!==0||e?.id!==i.pointerId||Math.hypot(i.clientX-e.x,i.clientY-e.y)>5)return;let t=i.shiftKey||i.ctrlKey||i.metaKey;if(en){let s=dn.getBoundingClientRect();Bu.set(2*(i.clientX-s.left)/s.width-1,1-2*(i.clientY-s.top)/s.height),tl.setFromCamera(Bu,fn);let r=Ns.visible&&!t?tl.intersectObjects(Object.values(Sf),!1)[0]?.object:null;if(r){B0(r.userData.avatarJoint);return}let o=tl.intersectObjects(en.meshes.filter(a=>a.visible),!1)[0]?.object;o&&(Ou(en.meshes.indexOf(o),t),Dt());return}let n=P0(i);n>=0&&Ou(n,t)});var Do=R("part-context");function al(){Do.hidden=!0}dn.addEventListener("contextmenu",i=>{if(i.preventDefault(),Oi||!Lo||Math.hypot(i.clientX-Lo.x,i.clientY-Lo.y)>6)return;let e=P0(i);if(e<0)return al();ls().includes(e)||Ou(e),R("context-name").textContent=ft().name,Do.hidden=!1,Do.style.left=Vn(i.clientX,5,innerWidth-205)+"px",Do.style.top=Vn(i.clientY,5,innerHeight-305)+"px"});document.addEventListener("pointerdown",i=>{Do.contains(i.target)||al()});function Ls(i,e=To[i],t=[0,0,0],n=[.35,.35,.35],s="#51bdd2",r="plain",o=[0,0,0]){return{name:e,shape:i,position:t,scale:n,rotation:o,surface:r,color:s,...i==="custom"?{profile:wo()}:{}}}function hw(){let i="#678fb4",e="#c1d7de",t="#233241";return[Ls("sphere","Cr\xE2ne",[0,0,.02],[.31,.32,.29],i,"speckle"),Ls("sphere","Museau",[0,-.048,-.11],[.2,.13,.15],e),Ls("sphere","Oreille gauche",[-.149,.003,.01],[.08,.1,.06],i),Ls("sphere","Oreille droite",[.149,.003,.01],[.08,.1,.06],i),Ls("sphere","\u0152il gauche",[-.056,.037,-.118],[.049,.042,.036],t),Ls("sphere","\u0152il droit",[.056,.037,-.118],[.049,.042,.036],t),Ls("sphere","Nez",[0,-.025,-.181],[.071,.039,.033],t)]}function Hu(){return"custom-model-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function L0(i,e=!1){let t=yf.find(s=>s.assetId===i);if(!t)return wt("Asset int\xE9gr\xE9 introuvable.",!0);if(tt.models.length>=Pt.models)return wt("Limite de "+Pt.models+" mod\xE8les atteinte.",!0);xt();let n=structuredClone(t);return n.id=Hu(),tt.models.some(s=>s.name===n.name)&&(n.name=(n.name+" \xB7 copie").slice(0,48)),tt.models.push(n),yt=n.id,Zt=0,Yt.clear(),Ke(),Mi(),e&&Bo("geometry"),wt("\xAB "+n.name+" \xBB import\xE9 \xB7 enregistre pour le retrouver dans les cartes."),n}function D0(i=!1){if(tt.models.length>=Pt.models)return;xt();let e=Hu(),t=i?"Singe de pierre":"Mod\xE8le "+(tt.models.length+1);tt.models.push({id:e,name:t,kind:"structure",inGame:!1,properties:{...Za},hitbox:{mode:"auto",shape:"convex",precision:48},parts:i?hw():[]}),yt=e,Zt=0,Yt.clear(),Ke(),Mi(),Bo("geometry"),i||(R("model-title").focus({preventScroll:!0}),R("model-title").select())}function dw(){let i=Ge();if(!i||tt.models.length>=Pt.models)return;xt();let e=structuredClone(i);e.id=Hu(),e.name=(i.name.slice(0,37)+" \xB7 variante").slice(0,48),tt.models.push(e),yt=e.id,Zt=0,Yt.clear(),Ke(),Mi(),R("model-title").focus({preventScroll:!0}),R("model-title").select(),wt("Variante cr\xE9\xE9e : modifie-la sans toucher au mod\xE8le original.")}function Ff(i=R("new-shape").value){let e=Ge();if(!e||e.parts.length>=Pt.parts)return;xt();let t=ft(),n=t?[Vn(t.position[0]+.22,-3,3),...t.position.slice(1)]:[0,0,0];e.parts.push(Ls(i,To[i],n)),Zt=e.parts.length-1,Yt.clear(),Ke(),Bi(),Ot(),Bt(e.parts.length===1),ai("translate"),Bo("geometry"),i==="custom"&&kf()}function zu(){let i=Ge(),e=ls();if(!i||!e.length||i.parts.length+e.length>Pt.parts)return;xt();let t=e.map(a=>i.parts[a]),n=Math.min(.12,3-Math.max(...t.map(a=>a.position[0]))),s=new Map,r=new Set(i.parts.map(a=>a.group)),o=i.parts.length;for(let a of t){let l=structuredClone(a);if(delete l.actionId,l.name=a.name.slice(0,40)+" copie",l.position[0]+=n,l.group){if(!s.has(l.group)){let c=1;for(;r.has(c);)c++;r.add(c),s.set(l.group,c)}l.group=s.get(l.group)}i.parts.push(l)}Yt=new Set(t.map((a,l)=>o+l)),Zt=o,Ke(),Bi(),Ot(),Bt()}function Of(){let i=Ge(),e=ls();if(!(!i||!e.length)){xt();for(let t of e.sort((n,s)=>s-n))i.parts.splice(t,1);Yt.clear(),sw(),Zt=Math.max(0,Math.min(Zt,i.parts.length-1)),!i.parts.length&&tt.avatarId===i.id&&(tt.avatarId=null),Ke(),ol(),Bi(),Ot(),Bt()}}function Bf(){let i=Ge(),e=ft();if(!e||i.parts.length>=Pt.parts)return;xt();let t=structuredClone(e);delete t.actionId,t.name=e.name.slice(0,36)+" \xB7 miroir",delete t.group,t.position[0]=-t.position[0],t.avatarJoint?.startsWith("left")?t.avatarJoint="right"+t.avatarJoint.slice(4):t.avatarJoint?.startsWith("right")&&(t.avatarJoint="left"+t.avatarJoint.slice(5)),t.rotation[1]=-t.rotation[1],t.rotation[2]=-t.rotation[2],i.parts.push(t),Zt=i.parts.length-1,Yt.clear(),Ke(),Bi(),Ot(),Bt(),wt("Copie en miroir cr\xE9\xE9e sur l\u2019axe X")}function U0(){let i=ft(),e=Pn.children[Zt];if(!i||!e)return;let t=new jt().setFromObject(e);t.isEmpty()||(xt(),i.position[1]=Vn(i.position[1]-t.min.y,-3,3),Ke(),Ot(),Bt(),wt("Pi\xE8ce pos\xE9e sur le plan Y = 0"))}function fw(){let i=ft();i&&(xt(),i.position=[0,0,0],i.rotation=[0,0,0],i.scale=[.35,.35,.35],Ke(),Ot(),Bt())}function pw(){let i=ft();i&&(xt(),i.position=[0,0,0],Ke(),Ot(),Bt())}function zf(i){if(!kt)return;let e=fn.position.distanceTo(kt.target),t=i==="front"?new _(0,0,-1):i==="side"?new _(1,0,0):new _(1e-4,1,0);fn.position.copy(kt.target).addScaledVector(t,Math.max(.6,e)),kt.update(),Dt()}function Du(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var mw=()=>Ge()?.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"modele";async function gw(){let i=R("export-format").value;try{let e=Ge(),t=mw();if(i==="workspace-json")Du(new Blob([JSON.stringify(Ui(tt),null,2)],{type:"application/json"}),"atelier.gorilla-models.json");else if(i==="model-json"){if(!e)throw Error("Cr\xE9e un mod\xE8le avant de l\u2019exporter.");Du(new Blob([JSON.stringify(Ui({version:1,models:[e],avatarId:null}),null,2)],{type:"application/json"}),t+".gorilla-model.json")}else if(i==="png"){if(!In)throw Error("WebGL indisponible : capture impossible.");Dt();let n=await new Promise(s=>dn.toBlob(s,"image/png"));if(!n)throw Error("Capture impossible sur cet appareil.");Du(n,t+".png")}else if(i==="glb"){if(!e?.parts.length)throw Error("Ajoute une pi\xE8ce avant l\u2019export 3D.");let n=new tn;n.name=e.name;let s=[];wt("Pr\xE9paration du GLB et des textures\u2026");for(let r of e.parts){let o=null;if(r.texture){let c=await fetch(r.texture);if(!c.ok)throw Error("Image du mod\xE8le impossible \xE0 charger.");let u=await createImageBitmap(await c.blob()),h=document.createElement("canvas");h.width=u.width,h.height=u.height,h.getContext("2d").drawImage(u,0,0),u.close(),o=new oa(h),o.colorSpace=Nt,o.wrapS=o.wrapT=Nn}let a=wu({...r,texture:null});o&&(a.map=o,a.needsUpdate=!0);let l=new ve(vr(r),a);l.name=r.name,n.add(l),s.push(l)}try{let r=await new Promise((o,a)=>new Sr().parse(n,o,a,{binary:!0,onlyVisible:!0}));Du(new Blob([r],{type:"model/gltf-binary"}),t+".glb")}finally{for(let r of s)r.geometry.dispose(),Tu(r.material)}}wt("Export "+i.toUpperCase()+" g\xE9n\xE9r\xE9")}catch(e){wt(e.message||"Export impossible.",!0)}}R("new-model").onclick=()=>D0();R("duplicate-model").onclick=dw;R("example").onclick=()=>D0(!0);R("models").onchange=i=>I0(i.target.value);R("mask-set").onchange=i=>uw(i.target.value);R("solo-part").onclick=()=>{let i=Ge();i?.parts.length&&(Cf(new Set(i.parts.map((e,t)=>t).filter(e=>e!==Zt))),wt("Masque "+Vu()+" : seule la pi\xE8ce active est affich\xE9e."))};R("show-all-parts").onclick=()=>{Cf(new Set),wt("Toutes les pi\xE8ces sont visibles.")};R("save").onclick=R("publish-save").onclick=rl;R("undo-action").onclick=x0;R("redo-action").onclick=bf;R("entity-sculptor").onclick=()=>{if(Oi){Oi.close();return}if(!In){wt("WebGL indisponible pour la sculpture.",!0);return}if(!lt?.dragging){al(),No=Lo=null,kt.enabled=!1,lt.enabled=!1;try{Oi=ig({canvas:dn,renderer:In,onClose(){Oi=null,kt.enabled=!0,lt.enabled=!0,R("entity-sculptor").textContent="Atelier des entit\xE9s",Mi()}}),R("entity-sculptor").textContent="Retour aux mod\xE8les"}catch(i){kt.enabled=!0,lt.enabled=!0,wt(i.message,!0)}}};R("export").onclick=gw;R("import").onclick=()=>R("file").click();R("file").onchange=async i=>{let e=i.target.files?.[0];if(i.target.value="",!!e)try{if(e.size>Pt.fileBytes)throw Error("JSON trop volumineux pour cet atelier.");let t=Ui(JSON.parse(await e.text())),n=new Map(tt.models.map(s=>[s.id,s]));for(let s of t.models)n.set(s.id,s);if(n.size>Pt.models)throw Error("L\u2019atelier accepte "+Pt.models+" mod\xE8les.");if(t.models.some(s=>tt.models.some(r=>r.id===s.id))&&!confirm("Remplacer les mod\xE8les de m\xEAme identifiant ?"))return;xt(),Object.assign(tt,{version:1,models:[...n.values()],avatarId:t.avatarId??tt.avatarId}),yt=t.models[0]?.id??yt,Zt=0,Yt.clear(),Ke(),Mi(),wt("Import\xE9 \xB7 enregistrer pour appliquer au jeu")}catch(t){wt(t instanceof SyntaxError?"JSON illisible.":t.message,!0)}};function N0(i){let e=Ge();if(e?.kind==="avatar"){i.preventDefault(),wt("\xC9quipe cet avatar dans l\u2019onglet Avatar.");return}if(!e?.parts.length){i.preventDefault(),wt("Ajoute au moins une pi\xE8ce avant de placer le mod\xE8le sur une carte.",!0);return}rl()||i.preventDefault()}for(let i of["send-to-map","quick-send-to-map"])R(i).addEventListener("click",N0);R("go-cards").addEventListener("click",i=>{m0&&yt===Af?N0(i):Fo&&!rl()&&i.preventDefault()});R("delete-model").onclick=()=>{let i=Ge();if(!i||!confirm("Supprimer le mod\xE8le \xAB "+i.name+" \xBB ?"))return;xt();let e=tt.models.indexOf(i);tt.models.splice(e,1),Fs.delete(i.id),delete Mn.active[i.id],delete Mn.masks[i.id],Oo(),tt.avatarId===i.id&&(tt.avatarId=null),yt=(tt.models[e]??tt.models[e-1])?.id??null,Zt=0,Yt.clear(),Ke(),Mi()};function xw(i){let e=Ge();e&&(li(i.target),e.name=i.target.value.slice(0,48),Ke(),ol(),Ot())}for(let i of["model-name","model-title"])R(i).addEventListener("input",xw);R("hitbox-auto").onclick=()=>y0("auto");R("hitbox-manual").onclick=()=>y0("box");R("hitbox-preview-toggle").onchange=ci;R("hitbox-shape").onchange=i=>{let e=Ge();if(!e)return;li(i.target);let t=i.target.value;if(!["box","sphere","capsule","convex"].includes(t))return;let n=ss(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{},precision:Number(R("hitbox-precision").value)||48},bn=s,Ke(),zs(),ci()};R("hitbox-precision").oninput=i=>{let e=Ge();if(!e)return;let t=Vn(Math.round(Number(i.target.value)||48),8,96),n=ss(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:e.hitbox?.shape??"convex",precision:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{}},R("hitbox-precision-value").textContent=String(t),Ke(),ci()};for(let[i,e]of[["hitbox-drag","translate"],["hitbox-scale","scale"],["hitbox-rotate","rotate"]])R(i).onclick=()=>{let t=Ge();!t?.parts.length||!["box","custom"].includes(t.hitbox?.mode)||(R("hitbox-preview-toggle").checked=!0,bn=!0,ai(e),zs(),ci())};R("hitbox-fit").onclick=()=>{let i=Ge();if(!i?.parts.length)return;let e=Number(R("hitbox-precision").value)||48,t=ss({...i,hitbox:{mode:"auto",shape:"convex",precision:e}});xt(),i.hitbox={mode:"custom",shape:R("hitbox-shape").value||"convex",center:t.center.toArray(),size:t.size.toArray(),rotation:[0,0,0],precision:e},bn=!0,Ke(),zs(),ci(),wt("Hitbox ajust\xE9e \xE0 la g\xE9om\xE9trie actuelle.")};for(let i of["center","size"])for(let e=0;e<3;e++){let t=R("hitbox-"+i+"-"+["x","y","z"][e]);t.oninput=n=>{let s=Ge(),r=n.target.valueAsNumber;!["box","custom"].includes(s?.hitbox?.mode)||!Number.isFinite(r)||(li(n.target),s.hitbox[i][e]=Vn(r,i==="size"?.025:-6,i==="size"?12:6),Ke(),ci())},t.onchange=zs}R("model-kind").onchange=i=>{!Ge()||Ge().kind==="avatar"||(li(i.target),Ge().kind=i.target.value,Ke(),Ot(),Bt())};R("in-game").onchange=i=>{li(i.target),Ge().inGame=i.target.checked,Ke()};R("drivable").onchange=i=>{let e=Ge();e?.kind==="prop"&&(li(i.target),i.target.checked?e.properties.drivable=!0:delete e.properties.drivable,Ke())};for(let i of Object.keys(Za))R(i).onchange=e=>{Ge()&&(li(e.target),Ge().properties[i]=e.target.checked,Ke(),i==="collidable"&&ci())};R("avatar").onchange=i=>{li(i.target),tt.avatarId=i.target.value||null,Ke()};var F0=Object.entries(Ts).map(([i,e])=>[i,e.label]);$n(R("avatar-assignment"),F0,"torso");$n(R("avatar-joint"),F0,"torso");function ks(){let i=Ge(),e=ft(),t=i?.kind==="avatar";if(R("avatar-rig-controls").hidden=!t,!t)return;R("avatar-assignment").disabled=!e,R("avatar-attach").disabled=!e,R("avatar-move").setAttribute("aria-pressed",String(as)),R("avatar-assignment").value=e?.avatarJoint??"torso";let n=R("avatar-joint").value||"torso",s=So(n,i.avatarRig?.[n]);for(let[r,o]of["x","y","z"].entries())R("avatar-"+o).value=s.pivot[r];R("avatar-axis").value=s.axis,R("avatar-limit").value=s.limit,R("avatar-bend").value=(Os.get(n)??0)*100}var el=new _,Uu=new _;function yw(){if(Ns.visible=!!en&&R("avatar-display").value!=="model",!Ns.visible)return;let i=R("avatar-joint").value;en.root.updateMatrixWorld(!0);let e=ku.geometry.attributes.position,t=0;for(let[n,s]of Object.entries(Sf)){en.bones[n].getWorldPosition(el),s.position.copy(el),s.scale.setScalar(n.includes("Finger")?.011:.018).multiplyScalar(n===i?1.35:1),s.material.color.set(n===i?"#ffc16e":"#55d8ee");let r=Ts[n].parent;r&&(en.bones[r].getWorldPosition(Uu),e.setXYZ(t++,el.x,el.y,el.z),e.setXYZ(t++,Uu.x,Uu.y,Uu.z))}e.needsUpdate=!0,Ns.updateMatrixWorld(!0)}function Ar(){let i=Ge(),e=In&&i?.kind==="avatar"&&R("model-inspector").dataset.tab==="avatar";if(en?.dispose(),en=null,Pn.visible=!e,!e){In&&Gu(),Dt();return}let t=Fu();en=og(i,(n,s)=>{let r=C0(n);return r.visible=!t.has(s)&&R("avatar-display").value!=="bones",r},n=>{n.geometry.dispose(),n.userData.ownMaterial&&Tu(n.material)}),Bs.add(en.root);for(let[n,s]of Os)en.setBend(n,s);Po.visible=!1,cs(),R("avatar-cost").textContent=i.parts.length+" pi\xE8ces \xB7 "+en.triangles.toLocaleString("fr-FR")+" triangles"+(Fa(i)?"":" \xB7 ajoute une t\xEAte et un torse pour l\u2019\xE9quiper"),Dt()}function O0(i=null){if(tt.models.length>=Pt.models)return;xt();let e=i?structuredClone(i.parts):rg(),t=Na();if(i){let s=Eu(i),r=s.getCenter(new _),o=s.getSize(new _);for(let a of Object.values(t)){let[l,c,u]=a.pivot;a.pivot=[Vn(r.x+l*o.x/.95,-3,3),Vn(s.max.y-o.y*.15+c*o.y/1.08,-3,3),Vn(r.z+u*o.z/.42,-3,3)]}}let n=Ui({version:1,models:[{id:Hu(),name:i?(i.name+" \xB7 avatar").slice(0,48):"Mon gorille",kind:"avatar",avatarRig:t,parts:e}]}).models[0];tt.models.push(n),yt=n.id,Zt=0,Yt.clear(),Os.clear(),as=!1,Ke(),Mi(),Bo("avatar")}function B0(i){R("avatar-joint").value=i,ks(),cs(),Dt()}function z0(i){let e=Ge(),t=ls();if(!(e?.kind!=="avatar"||!t.length)&&!t.every(n=>e.parts[n].avatarJoint===i)){xt();for(let n of t)e.parts[n].avatarJoint=i;R("avatar-joint").value=i,Ke(),ol(),ks(),Ar()}}R("avatar-new").onclick=()=>O0();R("avatar-copy").onclick=()=>{let i=Ge();i?.parts.length&&i.kind!=="avatar"&&O0(i)};R("avatar-assignment").onchange=i=>z0(i.target.value);R("avatar-joint").onchange=i=>B0(i.target.value);R("avatar-attach").onclick=()=>z0(R("avatar-joint").value);R("avatar-display").onchange=Ar;R("avatar-move").onclick=()=>{as=!as,as&&(Os.clear(),R("avatar-display").value==="model"&&(R("avatar-display").value="overlay")),ks(),Ar()};R("avatar-focus").onclick=()=>{if(!kt||!en)return;let i=R("avatar-joint").value,e=fn.position.clone().sub(kt.target).normalize();en.bones[i].getWorldPosition(kt.target),fn.position.copy(kt.target).addScaledVector(e,i.includes("Finger")?.3:.72),kt.update(),Dt()};R("avatar-reset-pose").onclick=()=>{Os.clear(),ks(),Ar()};for(let i of["x","y","z","axis","limit"])R("avatar-"+i).onchange=()=>{let e=Ge(),t=R("avatar-joint").value;e?.kind==="avatar"&&(xt(),e.avatarRig[t]=So(t,{pivot:["x","y","z"].map(n=>R("avatar-"+n).valueAsNumber),axis:R("avatar-axis").value,limit:R("avatar-limit").valueAsNumber}),Ke(),ks(),Ar())};R("avatar-bend").oninput=i=>{let e=R("avatar-joint").value,t=i.target.valueAsNumber/100;as&&(as=!1,ks(),cs()),Os.set(e,t),R("avatar-bend").value=t*100,en?.setBend(e,t),Dt()};R("avatar-play").onclick=i=>{rl()||i.preventDefault()};$n(R("new-shape"),Object.entries(To).filter(([i])=>i!=="asset"),"box");$n(R("part-shape"),Object.entries(To),"box");$n(R("game-asset"),yf.map(i=>[i.assetId,i.name]),yf[0]?.assetId);R("add-game-asset").onclick=()=>L0(R("game-asset").value);$n(R("part-surface"),Object.entries(Mu),"plain");$n(R("part-finish"),Object.entries(_r).map(([i,e])=>[i,e.label]),"original");$n(R("part-zone"),Object.entries(Xd),"solid");R("trigger-portal").onchange=i=>{let e=ft();if(e?.zone!=="trigger")return;let t=i.target.value.trim();if(t&&t!=="arena")try{let n=new URL(t);if(n.protocol!=="https:"||n.username||n.password)throw Error()}catch{wt("Destination invalide. Entre une URL HTTPS publique ou le mot arena.",!0),i.target.value=e.portal??"";return}li(i.target),t?e.portal=t:delete e.portal,Ke()};for(let i of["phase","text"])R("trigger-notice-"+i).onchange=e=>{let t=ft();t?.zone==="trigger"&&(li(e.target),t.notice={text:R("trigger-notice-text").value,phase:R("trigger-notice-phase").value},Ke())};R("part-collisions").onchange=i=>{let e=Ge();!e||e.kind!=="structure"||(xt(),e.partCollisions=i.target.checked,bn=!1,Ke(),Ot(),ci())};R("part-zone").onchange=i=>{let e=ft();if(!e)return;xt(),e.zone=i.target.value;let t=bu(e.reaction&&{...e.reaction,phase:e.zone==="trigger"?"enter":"use"},e.zone);t?e.reaction=t:delete e.reaction,Ke(),zs(),b0(),ci()};R("part-finish").onchange=i=>{let e=ft();e&&(xt(),e.finish=i.target.value,Ke(),Ot(),Bt())};for(let i of["projection","repeat","angle","u","v"])R("part-"+i).onchange=e=>{let t=ft();if(!t)return;let n=e.target,s=i==="projection"?n.value:n.valueAsNumber;if(i!=="projection"&&!Number.isFinite(s)){Ot();return}let r=Eo(t);i==="u"||i==="v"?r.offset[i==="u"?0:1]=s:r[i]=s,xt(),t.uv=Eo({uv:r}),Ke(),Ot(),Bt()};for(let i of["gravity","bounce"])R("model-"+i).onchange=e=>{let t=Ge();!t||!Number.isFinite(e.target.valueAsNumber)||(xt(),t.physics=Ya({physics:{...Ya(t),[i]:e.target.valueAsNumber}}),Ke())};function kf(){let i=ft();!i||i.shape!=="custom"||r0({name:i.name,initial:i.profile??wo(),onApply:e=>{if(!Ge()?.parts.includes(i))throw Error("La pi\xE8ce n\u2019existe plus.");xt(),i.profile=e,Ke(),Ot(),Bt(),wt("Forme personnelle appliqu\xE9e \xB7 mod\xE8le pr\xEAt \xE0 enregistrer.")}})}R("edit-profile").onclick=kf;R("add-part").onclick=()=>Ff();for(let i of document.querySelectorAll("[data-shape]"))i.onclick=()=>{R("new-shape").value=i.dataset.shape,Ff(i.dataset.shape)};R("part-paint").onclick=()=>{let i=ft();if(!i)return;let e={plain:"solid",grid:"grid",stripes:"stripes",wood:"wood",speckle:"rock"};i0({initial:i.texture,name:"Pi\xE8ce / "+i.name,tint:i.color,pattern:e[i.surface]??"grain",maxDataBytes:Pt.textureBytes-2e3,onApply:async t=>{if(!Ge()?.parts.includes(i))throw Error("La pi\xE8ce modifi\xE9e n\u2019existe plus dans ce mod\xE8le.");xt(),i.texture||(i.color="#ffffff"),i.texture=t,Ui(tt),Ke(),Ot(),Bt(),wt("Texture peinte appliqu\xE9e \xE0 "+i.name+". Enregistre pour la retrouver en jeu.")}})};R("part-texture-clear").onclick=()=>{let i=ft();i?.texture&&(xt(),i.texture=null,Ke(),Ot(),Bt())};R("duplicate-part").onclick=zu;R("group-parts").onclick=()=>Nf();R("ungroup-parts").onclick=()=>Nf(!0);R("delete-part").onclick=Of;R("mirror").onclick=Bf;R("drop-to-grid").onclick=U0;R("reset-part").onclick=fw;R("center-part").onclick=pw;R("focus-part").onclick=()=>Er(!0);R("frame").onclick=()=>Er();R("view-front").onclick=()=>zf("front");R("view-side").onclick=()=>zf("side");R("view-top").onclick=()=>zf("top");R("grid-toggle").onchange=i=>{wf.visible=i.target.checked,Dt()};R("snap-step").onchange=cs;R("focus-toggle").onclick=()=>{document.body.classList.toggle("preview-fullscreen"),setTimeout(()=>window.dispatchEvent(new Event("resize")),0)};for(let i of["name","shape","color","surface"])R("part-"+i).addEventListener(i==="name"||i==="color"?"input":"change",e=>{let t=ft();t&&(li(e.target),i==="shape"&&e.target.value==="custom"&&t.shape!=="custom"&&(t.profile=wo(t.shape)),t[i]=e.target.value,Ke(),Bi(),i==="name"?Ot():(Ot(),Bt(),i==="shape"&&t.shape==="custom"&&kf()))});for(let i of document.querySelectorAll("[data-color]"))i.onclick=()=>{let e=ft();e&&(xt(),e.color=i.dataset.color,Ke(),Ot(),Bt())};for(let i of Do.querySelectorAll("button"))i.onclick=()=>{al();let e=i.dataset.action;["translate","rotate","scale"].includes(e)?ai(e):e==="duplicate"?zu():e==="mirror"?Bf():e==="ground"?U0():e==="focus"?Er(!0):e==="delete"&&Of()};window.addEventListener("keydown",i=>{if(Oi)return;let e=i.target.closest?.("input,select,textarea,[contenteditable]");if(i.key==="Escape"){al(),!e&&!lt?.dragging&&ai("select");return}if(lt?.dragging)return;let t=i.ctrlKey||i.metaKey;if(t&&!e){let s=i.key.toLowerCase();if(s==="z"){i.preventDefault(),i.shiftKey?bf():x0();return}if(s==="y"){i.preventDefault(),bf();return}if(s==="s"){i.preventDefault(),rl();return}if(s==="d"){i.preventDefault(),zu();return}if(s==="g"){i.preventDefault(),Nf(i.shiftKey);return}}if(e||t||i.altKey)return;let n=i.key.toLowerCase();if(n==="v")ai("select");else if(n==="g")ai("translate");else if(n==="r")ai("rotate");else if(n==="s")ai("scale");else if(n==="f")Er(!0);else if(n==="a")Er();else if(n==="m")Bf();else if(n==="delete"||n==="backspace")Of();else if(n==="d"&&i.shiftKey)zu();else if("123456789".includes(n)&&n.length===1){let s=["box","sphere","cylinder","cone","torus","capsule","diamond","custom","tetrahedron"][Number(n)-1];s&&Ff(s)}else return;i.preventDefault()});window.addEventListener("keydown",i=>{i.key==="Alt"&&lt&&(lt.setTranslationSnap(null),lt.setRotationSnap(null),lt.setScaleSnap(null))});window.addEventListener("keyup",i=>{i.key==="Alt"&&cs()});window.addEventListener("beforeunload",i=>{Fo&&i.preventDefault()});c0&&(Af=L0(c0,!0)?.id);Mi();sl.get("tab")==="avatar"&&Bo("avatar");Fo&&wt("Brouillon r\xE9cup\xE9r\xE9 automatiquement");sl.get("sculpt")==="1"&&R("entity-sculptor").click();})();
