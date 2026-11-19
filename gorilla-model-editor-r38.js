(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,Ah=1,rf=2;var Ch=1,of=2,li=3,Si=0,hn=1,Jt=2,Ci=0,vs=1,Rh=2,Ih=3,Ph=4,af=5,Xi=100,cf=101,lf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,Wa=204,Xa=205,gf=206,xf=207,_f=208,yf=209,vf=210,bf=211,Mf=212,Sf=213,wf=214,gc=0,xc=1,_c=2,bs=3,yc=4,vc=5,bc=6,Mc=7,Lh=0,Tf=1,Ef=2,Ri=0,Af=1,Cf=2,Rf=3,Sc=4,If=5,Pf=6,Lf=7;var Dh=300,Ds=301,Us=302,wc=303,Tc=304,ko=306,Cn=1e3,si=1001,mr=1002,en=1003,Ec=1004;var Ns=1005;var Zt=1006,Ur=1007;var un=1008;var Kn=1009,Uh=1010,Nh=1011,Nr=1012,Ac=1013,ts=1014,hi=1015,Fr=1016,Cc=1017,Rc=1018,Or=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,xn=1023,gr=1026,Br=1027,kh=1028,Ic=1029,Vh=1030,Pc=1031;var Lc=1033,Vo=33776,Ho=33777,Go=33778,Wo=33779,Dc=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,kc=37808,Vc=37809,Hc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,jc=37817,Jc=37818,Kc=37819,$c=37820,Qc=37821,el=36492,tl=36494,nl=36495,il=36283,sl=36284,rl=36285,ol=36286;var Ms=2300,xr=2301,Ha=2302,ph=2400,mh=2401,gh=2402;var Df=3200,Uf=3201;var Hh=0,Nf=1,$n="",At="srgb",Ss="srgb-linear",uo="linear",gt="srgb";var ys=7680;var xh=519,Ff=512,Of=513,Bf=514,Gh=515,zf=516,kf=517,Vf=518,Hf=519,_h=35044;var Wh="300 es",Zn=2e3,fo=2001;var oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,ao=Math.PI/180,_r=180/Math.PI;function Fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Xh(i,e){return(i%e+e)%e}function Jm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Km(i,e,t){return i!==e?(t-i)/(e-i):0}function co(i,e,t){return(1-t)*i+t*e}function $m(i,e,t,n){return co(i,e,1-Math.exp(-t*n))}function Qm(i,e=1){return e-Math.abs(Xh(i,e*2)-e)}function eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ng(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ig(i,e){return i+Math.random()*(e-i)}function sg(i){return i*(.5-Math.random())}function rg(i){i!==void 0&&(Ed=i);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function og(i){return i*ao}function ag(i){return i*_r}function cg(i){return(i&i-1)===0&&i!==0}function lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ug(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct={DEG2RAD:ao,RAD2DEG:_r,generateUUID:Fs,clamp:We,euclideanModulo:Xh,mapLinear:Jm,inverseLerp:Km,lerp:co,damp:$m,pingpong:Qm,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:sg,seededRandom:rg,degToRad:og,radToDeg:ag,isPowerOfTwo:cg,ceilPowerOfTwo:lg,floorPowerOfTwo:hg,setQuaternionFromProperEuler:ug,normalize:cn,denormalize:fr},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a,p=c*d+l*f+u*g+h*x,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let E=Math.sqrt(S),A=Math.atan2(E,p*b);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}let _=a*b;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},y=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new y,Ad=new st,Ke=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],S=s[4],_=s[7],E=s[2],A=s[5],I=s[8];return r[0]=o*x+a*b+c*E,r[3]=o*m+a*S+c*A,r[6]=o*p+a*_+c*I,r[1]=l*x+u*b+h*E,r[4]=l*m+u*S+h*A,r[7]=l*p+u*_+h*I,r[2]=d*x+f*b+g*E,r[5]=d*m+f*S+g*A,r[8]=d*p+f*_+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new Ke;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=yr("canvas");return i.style.display="block",i}var Cd={};function vr(i){i in Cd||(Cd[i]=!0,console.warn(i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dg(){let i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var at=dg();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,br=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=yr("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fg=0,qi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?br.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pg=0,Wl=new y,Kt=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Zt,o=un,a=xn,c=Kn,l=i.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Fs(),this.name="",this.source=new qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Dh;Kt.DEFAULT_ANISOTROPY=1;var Lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,_=(f+1)/2,E=(p+1)/2,A=(u+d)/4,I=(h+x)/4,L=(g+m)/4;return S>_&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=I/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=L/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=I/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Kt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ya.subVectors(this.max,to),Qs.subVectors(e.a,to),er.subVectors(e.b,to),tr.subVectors(e.c,to),zi.subVectors(er,Qs),ki.subVectors(tr,er),ms.subVectors(Qs,tr);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ms.z,ms.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ms.z,0,-ms.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ms.y,ms.x,0];return!Xl(t,Qs,er,tr,ya)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Qs,er,tr,ya))?!1:(va.crossVectors(zi,ki),t=[va.x,va.y,va.z],Xl(t,Qs,er,tr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new y,new y,new y,new y,new y,new y,new y,new y],Xn=new y,_a=new Vt,Qs=new y,er=new y,tr=new y,zi=new y,ki=new y,ms=new y,to=new y,ya=new y,va=new y,gs=new y;function Xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mg=new Vt,no=new y,ql=new y,Yi=class{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(no,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(ql)),this.expandByPoint(no.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_i=new y,Yl=new y,ba=new y,Vi=new y,Zl=new y,Ma=new y,jl=new y,Zi=class{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Vi.dot(this.direction),c=-Vi.dot(ba),l=Vi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yl).addScaledVector(ba,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){Zl.subVectors(t,e),Ma.subVectors(n,e),jl.crossVectors(Zl,Ma);let o=this.direction.dot(jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);let c=a*this.direction.dot(Ma.crossVectors(Vi,Ma));if(c<0)return null;let l=a*this.direction.dot(Zl.cross(Vi));if(l<0||c+l>o)return null;let u=-a*Vi.dot(jl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,xg)}lookAt(e,t,n){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Hi.crossVectors(n,wn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Hi.crossVectors(n,wn)),Hi.normalize(),Sa.crossVectors(wn,Hi),s[0]=Hi.x,s[4]=Sa.x,s[8]=wn.x,s[1]=Hi.y,s[5]=Sa.y,s[9]=wn.y,s[2]=Hi.z,s[6]=Sa.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],S=n[7],_=n[11],E=n[15],A=s[0],I=s[4],L=s[8],w=s[12],M=s[1],P=s[5],F=s[9],H=s[13],V=s[2],k=s[6],G=s[10],K=s[14],W=s[3],ee=s[7],pe=s[11],Se=s[15];return r[0]=o*A+a*M+c*V+l*W,r[4]=o*I+a*P+c*k+l*ee,r[8]=o*L+a*F+c*G+l*pe,r[12]=o*w+a*H+c*K+l*Se,r[1]=u*A+h*M+d*V+f*W,r[5]=u*I+h*P+d*k+f*ee,r[9]=u*L+h*F+d*G+f*pe,r[13]=u*w+h*H+d*K+f*Se,r[2]=g*A+x*M+m*V+p*W,r[6]=g*I+x*P+m*k+p*ee,r[10]=g*L+x*F+m*G+p*pe,r[14]=g*w+x*H+m*K+p*Se,r[3]=b*A+S*M+_*V+E*W,r[7]=b*I+S*P+_*k+E*ee,r[11]=b*L+S*F+_*G+E*pe,r[15]=b*w+S*H+_*K+E*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,S=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,_=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,E=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,A=t*b+n*S+s*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=b*I,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*I,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*I,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*I,e[4]=S*I,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*I,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*I,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*I,e[8]=_*I,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*I,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*I,e[12]=E*I,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*I,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,b=c*l,S=c*u,_=c*h,E=n.x,A=n.y,I=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+_)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+S)*I,s[9]=(m-b)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let l=1/r,u=1/o,h=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Zn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===fo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new y,qn=new ut,gg=new y(0,0,0),xg=new y(1,1,1),Hi=new y,Sa=new y,wn=new y,Pd=new ut,Ld=new st,jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_g=0,Dd=new y,ir=new st,yi=new ut,wa=new y,io=new y,yg=new y,vg=new st,Ud=new y(1,0,0),Nd=new y(0,1,0),Fd=new y(0,0,1),Od={type:"added"},bg={type:"removed"},sr={type:"childadded",child:null},Jl={type:"childremoved",child:null},Dt=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new y,t=new jt,n=new st,s=new y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(io,wa,this.up):yi.lookAt(wa,io,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(yi),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bg),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new y(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new y,vi=new y,Kl=new y,bi=new y,rr=new y,or=new y,Bd=new y,$l=new y,Ql=new y,eh=new y,th=new Lt,nh=new Lt,ih=new Lt,En=class i{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),vi.subVectors(n,t),Kl.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(vi),c=Yn.dot(Kl),l=vi.dot(vi),u=vi.dot(Kl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return th.setScalar(0),nh.setScalar(0),ih.setScalar(0),th.fromBufferAttribute(e,t),nh.fromBufferAttribute(e,n),ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(th,r.x),o.addScaledVector(nh,r.y),o.addScaledVector(ih,r.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),vi.subVectors(e,t),Yn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Yn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),$l.subVectors(e,n);let c=rr.dot($l),l=or.dot($l);if(c<=0&&l<=0)return t.copy(n);Ql.subVectors(e,s);let u=rr.dot(Ql),h=or.dot(Ql);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(rr,o);eh.subVectors(e,r);let f=rr.dot(eh),g=or.dot(eh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(or,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Bd.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Bd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Xh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sh(o,r,e+1/3),this.g=sh(o,r,e),this.b=sh(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return at.workingToColorSpace(Qt.copy(this),e),Math.round(We(Qt.r*255,0,255))*65536+Math.round(We(Qt.g*255,0,255))*256+Math.round(We(Qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=At){at.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Ta);let n=co(Gi.h,Ta.h,t),s=co(Gi.s,Ta.s,t),r=co(Gi.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new ze;ze.NAMES=Xf;var Mg=0,wi=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=vs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zn=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new y,Ea=new re,Sg=0,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var mo=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},wg=0,Bn=new ut,rh=new Dt,ar=new y,Tn=new Vt,so=new Vt,qt=new y,dt=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Tn.min,so.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,so.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(so.min),Tn.expandByPoint(so.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(ar.fromBufferAttribute(e,l),qt.add(ar)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new y,c[L]=new y;let l=new y,u=new y,h=new y,d=new re,f=new re,g=new re,x=new y,m=new y;function p(L,w,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[L].add(x),a[w].add(x),a[M].add(x),c[L].add(m),c[w].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,w=b.length;L<w;++L){let M=b[L],P=M.start,F=M.count;for(let H=P,V=P+F;H<V;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new y,_=new y,E=new y,A=new y;function I(L){E.fromBufferAttribute(s,L),A.copy(E);let w=a[L];S.copy(w),S.sub(E.multiplyScalar(E.dot(w))).normalize(),_.crossVectors(A,w);let P=_.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,w=b.length;L<w;++L){let M=b[L],P=M.start,F=M.count;for(let H=P,V=P+F;H<V;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new y,r=new y,o=new y,a=new y,c=new y,l=new y,u=new y,h=new y;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new ut,xs=new Zi,Aa=new Yi,kd=new y,Ca=new y,Ra=new y,Ia=new y,oh=new y,Pa=new y,Vd=new y,La=new y,ge=class extends Dt{constructor(e=new dt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(oh.fromBufferAttribute(h,e),o?Pa.addScaledVector(oh,u):Pa.addScaledVector(oh.sub(t),u))}t.add(Pa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Aa.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Aa,kd)===null||xs.origin.distanceToSquared(kd)>(e.far-e.near)**2))&&(zd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(zd),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=S;_<E;_+=3){let A=a.getX(_),I=a.getX(_+1),L=a.getX(_+2);s=Da(this,p,e,n,l,u,h,A,I,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);s=Da(this,o,e,n,l,u,h,b,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=S;_<E;_+=3){let A=_,I=_+1,L=_+2;s=Da(this,p,e,n,l,u,h,A,I,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,S=m+1,_=m+2;s=Da(this,o,e,n,l,u,h,b,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Tg(i,e,t,n,s,r,o,a){let c;if(e.side===hn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Si,a),c===null)return null;La.copy(a),La.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(La);return l<t.near||l>t.far?null:{distance:l,point:La.clone(),object:i}}function Da(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ca),i.getVertexPosition(c,Ra),i.getVertexPosition(l,Ia);let u=Tg(i,e,t,n,Ca,Ra,Ia,Vd);if(u){let h=new y;En.getBarycoord(Vd,Ca,Ra,Ia,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,c,l,h,new re)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,c,l,h,new re)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,h,new y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new y,materialIndex:0};En.getNormal(Ca,Ra,Ia,d.normal),u.face=d,u.barycoord=h}return u}var et=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function g(x,m,p,b,S,_,E,A,I,L,w){let M=_/I,P=E/L,F=_/2,H=E/2,V=A/2,k=I+1,G=L+1,K=0,W=0,ee=new y;for(let pe=0;pe<G;pe++){let Se=pe*P-H;for(let Y=0;Y<k;Y++){let ae=Y*M-F;ee[x]=ae*b,ee[m]=Se*S,ee[p]=V,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Y/I),h.push(1-pe/L),K+=1}}for(let pe=0;pe<L;pe++)for(let Se=0;Se<I;Se++){let Y=d+Se+k*pe,ae=d+Se+k*(pe+1),Oe=d+(Se+1)+k*(pe+1),Re=d+(Se+1)+k*pe;c.push(Y,ae,Re),c.push(ae,Oe,Re),W+=6}a.addGroup(f,W,w),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=Os(i[t]);for(let s in n)e[s]=n[s]}return e}function Eg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var qf={clone:Os,merge:tn},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new y,Hd=new re,Gd=new re,Yt=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Gd),t.subVectors(Gd,Hd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lr=1,Za=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(cr,lr,e,t);s.layers=this.layers,this.add(s);let r=new Yt(cr,lr,e,t);r.layers=this.layers,this.add(r);let o=new Yt(cr,lr,e,t);o.layers=this.layers,this.add(o);let a=new Yt(cr,lr,e,t);a.layers=this.layers,this.add(a);let c=new Yt(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new Yt(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends Kt{constructor(e=[],t=Ds,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ja=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _o(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===un&&(t.minFilter=Zt),new Za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},An=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ci=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ji=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=en,u=en,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ah=new y,Ig=new y,Pg=new Ke,mn=class{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ah.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ah),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pg.getNormalMatrix(e),s=this.coplanarPoint(ah).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new Yi,Lg=new re(.5,.5),Ua=new y,wr=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],S=r[13],_=r[14],E=r[15];if(s[0].setComponents(l-o,f-u,p-g,E-b).normalize(),s[1].setComponents(l+o,f+u,p+g,E+b).normalize(),s[2].setComponents(l+a,f+h,p+x,E+S).normalize(),s[3].setComponents(l-a,f-h,p-x,E-S).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,E-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-_).normalize(),t===Zn)s[5].setComponents(l+c,f+d,p+m,E+_).normalize();else if(t===fo)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=Lg.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ti=class extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ja=new y,Ka=new y,Wd=new ut,ro=new Zi,Na=new Yi,ch=new y,Xd=new y,Rn=class extends Dt{constructor(e=new dt,t=new Ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ja.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ja.distanceTo(Ka);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Wd.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),b=u.getX(x+1),S=Fa(this,e,ro,c,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Fa(this,e,ro,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=Fa(this,e,ro,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Fa(this,e,ro,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ja.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),t.distanceSqToSegment(Ja,Ka,ch,Xd)>n)return;ch.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ch);if(!(l<e.near||l>e.far))return{distance:l,point:Xd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new y,Yd=new y,Tr=class extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qd.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ws=class extends Kt{constructor(e,t,n,s,r,o,a,c,l,u,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var yo=class extends Kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vo=class extends Kt{constructor(e,t,n=ts,s,r,o,a=en,c=en,l,u=gr,h=1){if(u!==gr&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bo=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Er=class i extends dt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=s+1,m=new y,p=new y;for(let b=0;b<=g;b++){let S=0,_=0,E=0,A=0;if(b<=n){let w=b/n,M=w*Math.PI/2;_=-u-e*Math.cos(M),E=e*Math.sin(M),A=-e*Math.cos(M),S=w*h}else if(b<=n+r){let w=(b-n)/r;_=-u+w*t,E=e,A=0,S=h+w*d}else{let w=(b-n-r)/n,M=w*Math.PI/2;_=u+e*Math.sin(M),E=e*Math.cos(M),A=e*Math.sin(M),S=h+d+w*h}let I=Math.max(0,Math.min(1,S/f)),L=0;b===0?L=.5/s:b===g&&(L=-.5/s);for(let w=0;w<=s;w++){let M=w/s,P=M*Math.PI*2,F=Math.sin(P),H=Math.cos(P);p.x=-E*H,p.y=_,p.z=E*F,a.push(p.x,p.y,p.z),m.set(-E*H,A,E*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+L,I)}if(b>0){let w=(b-1)*x;for(let M=0;M<s;M++){let P=w+M,F=w+M+1,H=b*x+M,V=b*x+M+1;o.push(P,F,H),o.push(F,V,H)}}}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},gn=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new y,u=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function b(){let _=new y,E=new y,A=0,I=(t-e)/n;for(let L=0;L<=r;L++){let w=[],M=L/r,P=M*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,V=H*c+a,k=Math.sin(V),G=Math.cos(V);E.x=P*k,E.y=-M*n+m,E.z=P*G,h.push(E.x,E.y,E.z),_.set(k,I,G).normalize(),d.push(_.x,_.y,_.z),f.push(H,1-M),w.push(g++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let M=x[w][L],P=x[w+1][L],F=x[w+1][L+1],H=x[w][L+1];(e>0||w!==0)&&(u.push(M,P,H),A+=3),(t>0||w!==r-1)&&(u.push(P,F,H),A+=3)}l.addGroup(p,A,0),p+=A}function S(_){let E=g,A=new re,I=new y,L=0,w=_===!0?e:t,M=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let V=F/s*c+a,k=Math.cos(V),G=Math.sin(V);I.x=w*G,I.y=m*M,I.z=w*k,h.push(I.x,I.y,I.z),d.push(0,M,0),A.x=k*.5+.5,A.y=G*.5*M+.5,f.push(A.x,A.y),g++}for(let F=0;F<s;F++){let H=E+F,V=P+F;_===!0?u.push(V,V+1,H):u.push(V+1,V,H),L+=3}l.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class i extends vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ar=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new y,_=new y,E=new y;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],_),f(t[A+2],E),c(S,_,E,b)}function c(b,S,_,E){let A=E+1,I=[];for(let L=0;L<=A;L++){I[L]=[];let w=b.clone().lerp(_,L/A),M=S.clone().lerp(_,L/A),P=A-L;for(let F=0;F<=P;F++)F===0&&L===A?I[L][F]=w:I[L][F]=w.clone().lerp(M,F/P)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){let M=Math.floor(w/2);w%2===0?(d(I[L][M+1]),d(I[L+1][M]),d(I[L][M])):(d(I[L][M+1]),d(I[L+1][M+1]),d(I[L+1][M]))}}function l(b){let S=new y;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(b),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function u(){let b=new y;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let _=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;o.push(_,1-E)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){let S=o[b+0],_=o[b+2],E=o[b+4],A=Math.max(S,_,E),I=Math.min(S,_,E);A>.9&&I<.1&&(S<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,S){let _=b*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){let b=new y,S=new y,_=new y,E=new y,A=new re,I=new re,L=new re;for(let w=0,M=0;w<r.length;w+=9,M+=6){b.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),E.copy(b).add(S).add(_).divideScalar(3);let P=m(E);x(A,M+0,b,P),x(I,M+2,S,P),x(L,M+4,_,P)}}function x(b,S,_,E){E<0&&b.x===1&&(o[S]=b.x-1),_.x===0&&_.z===0&&(o[S]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new y);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new y,s=[],r=[],o=[],a=new y,c=new ut;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends In{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$a=class extends Cr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Oa=new y,lh=new Zh,hh=new Zh,uh=new Zh,Qa=class extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new y){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),lh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),hh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),uh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),hh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),uh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(lh.calc(c),hh.calc(c),uh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new y().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Dg(i,e){let t=1-i;return t*t*e}function Ug(i,e){return 2*(1-i)*i*e}function Ng(i,e){return i*i*e}function lo(i,e,t,n){return Dg(i,e)+Ug(i,t)+Ng(i,n)}function Fg(i,e){let t=1-i;return t*t*t*e}function Og(i,e){let t=1-i;return 3*t*t*i*e}function Bg(i,e){return 3*(1-i)*i*i*e}function zg(i,e){return i*i*i*e}function ho(i,e,t,n,s){return Fg(i,e)+Og(i,t)+Bg(i,n)+zg(i,s)}var So=class extends In{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends In{constructor(e=new y,t=new y,n=new y,s=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new y){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y),ho(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends In{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends In{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends In{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends In{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y),lo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Zd(a,c.x,l.x,u.x,h.x),Zd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},yh=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Qa,CubicBezierCurve:So,CubicBezierCurve3:ec,EllipseCurve:Cr,LineCurve:wo,LineCurve3:tc,QuadraticBezierCurve:To,QuadraticBezierCurve3:nc,SplineCurve:Eo}),ic=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yh[s.type]().fromJSON(s))}return this}},Ao=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new To(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new So(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Cr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class extends Ao{constructor(e){super(e),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ao().fromJSON(s))}return this}};function kg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Xg(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Co(r,o,t,a,c,l,0),o}function Yf(i,e,t,n,s){let r;if(s===n0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=jd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=jd(o/n|0,i[o],i[o+1],r);return r&&Rr(r,r.next)&&(Io(r),r=r.next),r}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Co(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Hg(i,n,s,r):Vg(i)){e.push(c.i,i.i,l.i),Io(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Gg(Ts(i),e),Co(i,e,t,n,s,r,2)):o===2&&Wg(i,e,t,n,s,r):Co(Ts(i),e,t,n,s,r,1);break}}}function Vg(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&oo(s,a,r,c,o,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),p=vh(f,g,e,t,n),b=vh(x,m,e,t,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=p&&_&&_.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&oo(a,u,c,h,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&oo(a,u,c,h,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&oo(a,u,c,h,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&oo(a,u,c,h,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Gg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Rr(n,s)&&jf(n,t,t.next,s)&&Ro(n,s)&&Ro(s,n)&&(e.push(n.i,t.i,s.i),Io(t),Io(t.next),t=i=s),t=t.next}while(t!==i);return Ts(t)}function Wg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qg(o,a)){let c=Jf(o,a);o=Ts(o,o.next),c=Ts(c,c.next),Co(o,e,t,n,s,r,0),Co(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Yf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push($g(l))}s.sort(qg);for(let r=0;r<s.length;r++)t=Yg(s[r],t);return t}function qg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yg(i,e){let t=Zg(i,e);if(!t)return e;let n=Jf(t,i);return Ts(n,n.next),Ts(t,t.next)}function Zg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Rr(i,t))return t;do{if(Rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Zf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Ro(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&jg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function jg(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Jg(i,e,t,n){let s=i;do s.z===0&&(s.z=vh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kg(s)}function Kg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function vh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $g(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function oo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Zf(i,e,t,n,s,r,o,a)}function Qg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!e0(i,e)&&(Ro(i,e)&&Ro(e,i)&&t0(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Rr(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rr(i,e){return i.x===e.x&&i.y===e.y}function jf(i,e,t,n){let s=za(Pt(i,e,t)),r=za(Pt(i,e,n)),o=za(Pt(t,n,i)),a=za(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ba(i,t,e)||r===0&&Ba(i,n,e)||o===0&&Ba(t,i,n)||a===0&&Ba(t,e,n))}function Ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function e0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ro(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function t0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jf(i,e){let t=bh(i.i,i.x,i.y),n=bh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jd(i,e,t,n){let s=bh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function n0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Mh=class{static triangulate(e,t,n=2){return kg(e,t,n)}},ri=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jd(e),Kd(n,e);let o=e.length;t.forEach(Jd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Kd(n,t[c]);let a=Mh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Jd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Es=class i extends dt{constructor(e=new Ei([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:i0,S,_=!1,E,A,I,L;p&&(S=p.getSpacedPoints(u),_=!0,d=!1,E=p.computeFrenetFrames(u,!1),A=new y,I=new y,L=new y),d||(m=0,f=0,g=0,x=0);let w=a.extractPoints(l),M=w.shape,P=w.holes;if(!ri.isClockWise(M)){M=M.reverse();for(let ne=0,ie=P.length;ne<ie;ne++){let te=P[ne];ri.isClockWise(te)&&(P[ne]=te.reverse())}}function H(ne){let te=10000000000000001e-36,Q=ne[0];for(let xe=1;xe<=ne.length;xe++){let ce=xe%ne.length,_e=ne[ce],je=_e.x-Q.x,Xe=_e.y-Q.y,C=je*je+Xe*Xe,v=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(Q.x),Math.abs(Q.y)),z=te*v*v;if(C<=z){ne.splice(ce,1),xe--;continue}Q=_e}}H(M),P.forEach(H);let V=P.length,k=M;for(let ne=0;ne<V;ne++){let ie=P[ne];M=M.concat(ie)}function G(ne,ie,te){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ie,te)}let K=M.length;function W(ne,ie,te){let Q,xe,ce,_e=ne.x-ie.x,je=ne.y-ie.y,Xe=te.x-ne.x,C=te.y-ne.y,v=_e*_e+je*je,z=_e*C-je*Xe;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(v),oe=Math.sqrt(Xe*Xe+C*C),j=ie.x-je/Z,De=ie.y+_e/Z,me=te.x-C/oe,Ie=te.y+Xe/oe,Pe=((me-j)*C-(Ie-De)*Xe)/(_e*C-je*Xe);Q=j+_e*Pe-ne.x,xe=De+je*Pe-ne.y;let le=Q*Q+xe*xe;if(le<=2)return new re(Q,xe);ce=Math.sqrt(le/2)}else{let Z=!1;_e>Number.EPSILON?Xe>Number.EPSILON&&(Z=!0):_e<-Number.EPSILON?Xe<-Number.EPSILON&&(Z=!0):Math.sign(je)===Math.sign(C)&&(Z=!0),Z?(Q=-je,xe=_e,ce=Math.sqrt(v)):(Q=_e,xe=je,ce=Math.sqrt(v/2))}return new re(Q/ce,xe/ce)}let ee=[];for(let ne=0,ie=k.length,te=ie-1,Q=ne+1;ne<ie;ne++,te++,Q++)te===ie&&(te=0),Q===ie&&(Q=0),ee[ne]=W(k[ne],k[te],k[Q]);let pe=[],Se,Y=ee.concat();for(let ne=0,ie=V;ne<ie;ne++){let te=P[ne];Se=[];for(let Q=0,xe=te.length,ce=xe-1,_e=Q+1;Q<xe;Q++,ce++,_e++)ce===xe&&(ce=0),_e===xe&&(_e=0),Se[Q]=W(te[Q],te[ce],te[_e]);pe.push(Se),Y=Y.concat(Se)}let ae;if(m===0)ae=ri.triangulateShape(k,P);else{let ne=[],ie=[];for(let te=0;te<m;te++){let Q=te/m,xe=f*Math.cos(Q*Math.PI/2),ce=g*Math.sin(Q*Math.PI/2)+x;for(let _e=0,je=k.length;_e<je;_e++){let Xe=G(k[_e],ee[_e],ce);ue(Xe.x,Xe.y,-xe),Q===0&&ne.push(Xe)}for(let _e=0,je=V;_e<je;_e++){let Xe=P[_e];Se=pe[_e];let C=[];for(let v=0,z=Xe.length;v<z;v++){let Z=G(Xe[v],Se[v],ce);ue(Z.x,Z.y,-xe),Q===0&&C.push(Z)}Q===0&&ie.push(C)}}ae=ri.triangulateShape(ne,ie)}let Oe=ae.length,Re=g+x;for(let ne=0;ne<K;ne++){let ie=d?G(M[ne],Y[ne],Re):M[ne];_?(I.copy(E.normals[0]).multiplyScalar(ie.x),A.copy(E.binormals[0]).multiplyScalar(ie.y),L.copy(S[0]).add(I).add(A),ue(L.x,L.y,L.z)):ue(ie.x,ie.y,0)}for(let ne=1;ne<=u;ne++)for(let ie=0;ie<K;ie++){let te=d?G(M[ie],Y[ie],Re):M[ie];_?(I.copy(E.normals[ne]).multiplyScalar(te.x),A.copy(E.binormals[ne]).multiplyScalar(te.y),L.copy(S[ne]).add(I).add(A),ue(L.x,L.y,L.z)):ue(te.x,te.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){let ie=ne/m,te=f*Math.cos(ie*Math.PI/2),Q=g*Math.sin(ie*Math.PI/2)+x;for(let xe=0,ce=k.length;xe<ce;xe++){let _e=G(k[xe],ee[xe],Q);ue(_e.x,_e.y,h+te)}for(let xe=0,ce=P.length;xe<ce;xe++){let _e=P[xe];Se=pe[xe];for(let je=0,Xe=_e.length;je<Xe;je++){let C=G(_e[je],Se[je],Q);_?ue(C.x,C.y+S[u-1].y,S[u-1].x+te):ue(C.x,C.y,h+te)}}}J(),D();function J(){let ne=s.length/3;if(d){let ie=0,te=K*ie;for(let Q=0;Q<Oe;Q++){let xe=ae[Q];ve(xe[2]+te,xe[1]+te,xe[0]+te)}ie=u+m*2,te=K*ie;for(let Q=0;Q<Oe;Q++){let xe=ae[Q];ve(xe[0]+te,xe[1]+te,xe[2]+te)}}else{for(let ie=0;ie<Oe;ie++){let te=ae[ie];ve(te[2],te[1],te[0])}for(let ie=0;ie<Oe;ie++){let te=ae[ie];ve(te[0]+K*u,te[1]+K*u,te[2]+K*u)}}n.addGroup(ne,s.length/3-ne,0)}function D(){let ne=s.length/3,ie=0;$(k,ie),ie+=k.length;for(let te=0,Q=P.length;te<Q;te++){let xe=P[te];$(xe,ie),ie+=xe.length}n.addGroup(ne,s.length/3-ne,1)}function $(ne,ie){let te=ne.length;for(;--te>=0;){let Q=te,xe=te-1;xe<0&&(xe=ne.length-1);for(let ce=0,_e=u+m*2;ce<_e;ce++){let je=K*ce,Xe=K*(ce+1),C=ie+Q+je,v=ie+xe+je,z=ie+xe+Xe,Z=ie+Q+Xe;ke(C,v,z,Z)}}}function ue(ne,ie,te){c.push(ne),c.push(ie),c.push(te)}function ve(ne,ie,te){Ze(ne),Ze(ie),Ze(te);let Q=s.length/3,xe=b.generateTopUV(n,s,Q-3,Q-2,Q-1);R(xe[0]),R(xe[1]),R(xe[2])}function ke(ne,ie,te,Q){Ze(ne),Ze(ie),Ze(Q),Ze(ie),Ze(te),Ze(Q);let xe=s.length/3,ce=b.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);R(ce[0]),R(ce[1]),R(ce[3]),R(ce[1]),R(ce[2]),R(ce[3])}function Ze(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function R(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return s0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yh[s.type]().fromJSON(s)),new i(n,e.options)}},i0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,c),new re(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-h),new re(d,1-g),new re(x,1-p)]:[new re(a,1-c),new re(u,1-h),new re(f,1-g),new re(m,1-p)]}};function s0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ji=class i extends Ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Po=class i extends dt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=We(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new y,d=new re,f=new y,g=new y,x=new y,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let S=n+b*u*s,_=Math.sin(S),E=Math.cos(S);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*_,h.y=e[A].y,h.z=e[A].x*E,o.push(h.x,h.y,h.z),d.x=b/t,d.y=A/(e.length-1),a.push(d.x,d.y);let I=c[3*A+0]*_,L=c[3*A+1],w=c[3*A+0]*E;l.push(I,L,w)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let _=S+b*e.length,E=_,A=_+e.length,I=_+e.length+1,L=_+1;r.push(E,A,L),r.push(I,L,A)}this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},kn=class i extends Ar{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ai=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*d-o;for(let S=0;S<l;S++){let _=S*h-r;g.push(_,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let S=b+l*p,_=b+l*(p+1),E=b+1+l*(p+1),A=b+1+l*p;f.push(S,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ir=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new y,g=new re;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,S=b,_=b+n+1,E=b+n+2,A=b+1;a.push(S,_,A),a.push(_,E,A)}}this.setIndex(a),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Lo=class i extends dt{constructor(e=new Ei([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(o,2));function l(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;ri.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];ri.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=ri.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){let b=x[m],S=b[0]+h,_=b[1]+h,E=b[2]+h;n.push(S,_,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return r0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function r0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ki=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new y,d=new y,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],S=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let A=E/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-S),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let S=u[p][b+1],_=u[p][b],E=u[p+1][b],A=u[p+1][b+1];(p!==0||o>0)&&f.push(S,_,A),(p!==n-1||c<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},As=class i extends Ar{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pn=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new y,h=new y,d=new y;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(x,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ln=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sc=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ka(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mh:r=e,a=2*t-n;break;case gh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mh:o=e,c=2*n-t;break;case gh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+b*o[l+E]+S*o[c+E]+_*o[h+E];return r}},ac=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},cc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&o0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ha,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=xr;var $i=class extends Ln{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ms;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};lc.prototype.ValueTypeName="color";var hc=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};hc.prototype.ValueTypeName="number";var uc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)st.slerpFlat(r,0,o,l-a,o,l,c);return r}},Do=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ms;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};dc.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Kf=new fc,Pr=class{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=new WeakMap,pc=class extends Pr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ga.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=hr.get(o);h===void 0&&(h=[],hr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=yr("img");function c(){u(),t&&t(this);let h=hr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ga.remove(`image:${e}`);let d=hr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ga.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Lr=class extends Pr{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,o=new pc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Uo=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Rs=class extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dh=new ut,$d=new y,Qd=new y,Sh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var No=class extends xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wh=class extends Sh{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new wh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var mc=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jh="\\[\\]\\.:\\/",a0=new RegExp("["+jh+"]","g"),Jh="[^"+jh+"]",c0="[^"+jh.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",Jh),h0=/(WCOD+)?/.source.replace("WCOD",c0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),f0=new RegExp("^"+l0+h0+u0+d0+"$"),p0=["material","materials","bones","map"],Th=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){let t=f0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Th;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SM=new Float32Array(1);var ef=new ut,Ps=class{constructor(e,t,n=0,s=1/0){this.ray=new Zi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,n=[]){return Eh(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Eh(e[s],this,n,t);return n.sort(tf),n}};function tf(i,e){return i.distance-e.distance}function Eh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Eh(r[o],e,t,!0)}}var Dr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nf=new y,Va=new y,ur=new y,dr=new y,fh=new y,m0=new y,g0=new y,Fo=class{constructor(e=new y,t=new y){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nf.subVectors(e,this.start),Va.subVectors(this.end,this.start);let n=Va.dot(Va),r=Va.dot(nf)/n;return t&&(r=We(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=m0,n=g0){let s=10000000000000001e-32,r,o,a=this.start,c=e.start,l=this.end,u=e.end;ur.subVectors(l,a),dr.subVectors(u,c),fh.subVectors(a,c);let h=ur.dot(ur),d=dr.dot(dr),f=dr.dot(fh);if(h<=s&&d<=s)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(h<=s)r=0,o=f/d,o=We(o,0,1);else{let g=ur.dot(fh);if(d<=s)o=0,r=We(-g/h,0,1);else{let x=ur.dot(dr),m=h*d-x*x;m!==0?r=We((x*f-g*d)/m,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=We(-g/h,0,1)):o>1&&(o=1,r=We((x-g)/h,0,1))}}return t.copy(a).add(ur.multiplyScalar(r)),n.copy(c).add(dr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Oo=class extends Tr{constructor(e=10,t=10,n=4473924,s=8947848){n=new ze(n),s=new ze(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}let u=new dt;u.setAttribute("position",new Ue(c,3)),u.setAttribute("color",new Ue(l,3));let h=new Ti({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Bo=class extends Tr{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new dt;r.setIndex(new ft(n,1)),r.setAttribute("position",new Ue(s,3)),super(r,new Ti({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var zo=class extends Tr{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new dt;s.setAttribute("position",new Ue(t,3)),s.setAttribute("color",new Ue(n,3));let r=new Ti({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new ze,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ls=class extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Kh(i,e,t,n){let s=x0(n);switch(t){case Bh:return i*e;case kh:return i*e/s.components*s.byteLength;case Ic:return i*e/s.components*s.byteLength;case Vh:return i*e*2/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case zh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Lc:return i*e*4/s.components*s.byteLength;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case Dc:case Nc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case el:case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rl:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x0(i){switch(i){case Kn:case Uh:return{byteLength:1,components:1};case Nr:case Nh:case Fr:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case ts:case Ac:case hi:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,wx=`struct PhysicalMaterial {
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
}`,Tx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,V_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,Z_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,$_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:E0,alphahash_pars_fragment:A0,alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:I0,alphatest_pars_fragment:P0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:k0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:j0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:K0,displacementmap_pars_vertex:$0,displacementmap_vertex:Q0,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:rx,envmap_pars_fragment:ox,envmap_pars_vertex:ax,envmap_physical_pars_fragment:_x,envmap_vertex:cx,fog_vertex:lx,fog_pars_vertex:hx,fog_fragment:ux,fog_pars_fragment:dx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:xx,lights_toon_fragment:yx,lights_toon_pars_fragment:vx,lights_phong_fragment:bx,lights_phong_pars_fragment:Mx,lights_physical_fragment:Sx,lights_physical_pars_fragment:wx,lights_fragment_begin:Tx,lights_fragment_maps:Ex,lights_fragment_end:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Px,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Ux,map_particle_pars_fragment:Nx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Hx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:$x,opaque_fragment:Qx,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:c_,shadowmap_vertex:l_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:x_,tonemapping_pars_fragment:__,transmission_fragment:y_,transmission_pars_fragment:v_,uv_pars_fragment:b_,uv_pars_vertex:M_,uv_vertex:S_,worldpos_vertex:w_,background_vert:T_,background_frag:E_,backgroundCube_vert:A_,backgroundCube_frag:C_,cube_vert:R_,cube_frag:I_,depth_vert:P_,depth_frag:L_,distanceRGBA_vert:D_,distanceRGBA_frag:U_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:z_,meshbasic_frag:k_,meshlambert_vert:V_,meshlambert_frag:H_,meshmatcap_vert:G_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:Z_,meshphysical_vert:j_,meshphysical_frag:J_,meshtoon_vert:K_,meshtoon_frag:$_,points_vert:Q_,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},be={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ui={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ze(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ui.physical={uniforms:tn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var al={r:0,b:0,g:0},Bs=new jt,ry=new ut;function oy(i,e,t,n,s,r,o){let a=new ze(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function x(S){let _=!1,E=g(S);E===null?p(a,c):E&&E.isColor&&(p(E,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){let E=g(_);E&&(E.isCubeTexture||E.mapping===ko)?(u===void 0&&(u=new ge(new et(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Os(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bs.copy(_.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(Bs)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==gt,(h!==E||d!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ge(new Ai(2,2),new jn({name:"BackgroundMaterial",uniforms:Os(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=at.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,_){S.getRGB(al,Yh(i)),n.buffers.color.setClear(al.r,al.g,al.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m,dispose:b}}function ay(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,P,F,H,V){let k=!1,G=h(H,F,P);r!==G&&(r=G,l(r.object)),k=f(M,H,F,V),k&&g(M,H,F,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(M,P,F,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,F){let H=F.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let k=V[P.id];k===void 0&&(k={},V[P.id]=k);let G=k[H];return G===void 0&&(G=d(c()),k[H]=G),G}function d(M){let P=[],F=[],H=[];for(let V=0;V<t;V++)P[V]=0,F[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,P,F,H){let V=r.attributes,k=P.attributes,G=0,K=F.getAttributes();for(let W in K)if(K[W].location>=0){let pe=V[W],Se=k[W];if(Se===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),pe===void 0||pe.attribute!==Se||Se&&pe.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function g(M,P,F,H){let V={},k=P.attributes,G=0,K=F.getAttributes();for(let W in K)if(K[W].location>=0){let pe=k[W];pe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let Se={};Se.attribute=pe,pe&&pe.data&&(Se.data=pe.data),V[W]=Se,G++}r.attributes=V,r.attributesNum=G,r.index=H}function x(){let M=r.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let F=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;F[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function b(){let M=r.newAttributes,P=r.enabledAttributes;for(let F=0,H=P.length;F<H;F++)P[F]!==M[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function S(M,P,F,H,V,k,G){G===!0?i.vertexAttribIPointer(M,P,F,V,k):i.vertexAttribPointer(M,P,F,H,V,k)}function _(M,P,F,H){x();let V=H.attributes,k=F.getAttributes(),G=P.defaultAttributeValues;for(let K in k){let W=k[K];if(W.location>=0){let ee=V[K];if(ee===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let pe=ee.normalized,Se=ee.itemSize,Y=e.get(ee);if(Y===void 0)continue;let ae=Y.buffer,Oe=Y.type,Re=Y.bytesPerElement,J=Oe===i.INT||Oe===i.UNSIGNED_INT||ee.gpuType===Ac;if(ee.isInterleavedBufferAttribute){let D=ee.data,$=D.stride,ue=ee.offset;if(D.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)p(W.location+ve,D.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ve=0;ve<W.locationSize;ve++)S(W.location+ve,Se/W.locationSize,Oe,pe,$*Re,(ue+Se/W.locationSize*ve)*Re,J)}else{if(ee.isInstancedBufferAttribute){for(let D=0;D<W.locationSize;D++)p(W.location+D,ee.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let D=0;D<W.locationSize;D++)m(W.location+D);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let D=0;D<W.locationSize;D++)S(W.location+D,Se/W.locationSize,Oe,pe,Se*Re,Se/W.locationSize*D*Re,J)}}else if(G!==void 0){let pe=G[K];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}b()}function E(){L();for(let M in n){let P=n[M];for(let F in P){let H=P[F];for(let V in H)u(H[V].object),delete H[V];delete P[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let F in P){let H=P[F];for(let V in H)u(H[V].object),delete H[V];delete P[F]}delete n[M.id]}function I(M){for(let P in n){let F=n[P];if(F[M.id]===void 0)continue;let H=F[M.id];for(let V in H)u(H[V].object),delete H[V];delete F[M.id]}}function L(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function cy(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ly(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==xn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==hi&&!L)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function hy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mn,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,S=b*4,_=p.clippingState||null;c.value=_,_=u(g,d,S,f);for(let E=0;E!==S;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function uy(i){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=Ds:a===Tc&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Tc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ja(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var kr=4,$f=[.125,.215,.35,.446,.526,.582],Vs=20,$h=new No,Qf=new ze,Qh=null,eu=0,tu=0,nu=!1,ks=(1+Math.sqrt(5))/2,zr=1/ks,ep=[new y(-ks,zr,0),new y(ks,zr,0),new y(-zr,0,ks),new y(zr,0,ks),new y(0,ks,-zr),new y(0,ks,zr),new y(-1,1,-1),new y(1,1,-1),new y(-1,1,1),new y(1,1,1)],dy=new y,hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=dy}=r;Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Fr,format:xn,colorSpace:Ss,depthBuffer:!1},s=tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fy(r)),this._blurMaterial=py(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,$h)}_sceneToCubeUV(e,t,n,s,r){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Qf),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new zn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new ge(new et,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Qf),p=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;cl(s,_*E,S>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ds||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;cl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$h)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ep[(s-r-1)%ep.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ge(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let p=[],b=0;for(let I=0;I<Vs;++I){let L=I/x,w=Math.exp(-L*L/2);p.push(w),I===0?b+=w:I<m&&(b+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let _=this._sizeLods[s],E=3*_*(s>S-kr?s-S+kr:0),A=4*(this._cubeSize-_);cl(t,E,A,3*_,2*_),c.setRenderTarget(t),c.render(h,$h)}};function fy(i){let e=[],t=[],n=[],s=i,r=i-kr+1+$f.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-kr?c=$f[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,L=A>2?0:-1,w=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];b.set(w,x*g*A),S.set(d,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let E=new dt;E.setAttribute("position",new ft(b,x)),E.setAttribute("uv",new ft(S,m)),E.setAttribute("faceIndex",new ft(_,p)),e.push(E),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tp(i,e,t){let n=new ai(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function py(i,e,t){let n=new Float32Array(Vs),s=new y(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function np(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ip(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function my(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wc||c===Tc,u=c===Ds||c===Us;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new hl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xy(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let S=0,_=b.length;S<_;S+=3){let E=b[S+0],A=b[S+1],I=b[S+2];d.push(E,A,A,I,I,E)}}else if(g!==void 0){let b=g.array;x=g.version;for(let S=0,_=b.length/3-1;S<_;S+=3){let E=S+0,A=S+1,I=S+2;d.push(E,A,A,I,I,E)}}else return;let m=new(qh(d)?go:mo)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _y(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vy(i,e,t){let n=new WeakMap,s=new Lt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*E*4*h),I=new po(A,_,E,h);I.type=hi,I.needsUpdate=!0;let L=S*4;for(let M=0;M<h;M++){let P=m[M],F=p[M],H=b[M],V=_*E*4*M;for(let k=0;k<P.count;k++){let G=k*L;f===!0&&(s.fromBufferAttribute(P,k),A[V+G+0]=s.x,A[V+G+1]=s.y,A[V+G+2]=s.z,A[V+G+3]=0),g===!0&&(s.fromBufferAttribute(F,k),A[V+G+4]=s.x,A[V+G+5]=s.y,A[V+G+6]=s.z,A[V+G+7]=0),x===!0&&(s.fromBufferAttribute(H,k),A[V+G+8]=s.x,A[V+G+9]=s.y,A[V+G+10]=s.z,A[V+G+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new re(_,E)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function by(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Mp=new Kt,sp=new vo(1,1),Sp=new po,wp=new Ya,Tp=new _o,rp=[],op=[],ap=new Float32Array(16),cp=new Float32Array(9),lp=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rp[s];if(r===void 0&&(r=new Float32Array(s),rp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ul(i,e){let t=op[e];t===void 0&&(t=new Int32Array(e),op[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function My(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;lp.set(n),i.uniformMatrix2fv(this.addr,!1,lp),Gt(t,n)}}function Ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;cp.set(n),i.uniformMatrix3fv(this.addr,!1,cp),Gt(t,n)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;ap.set(n),i.uniformMatrix4fv(this.addr,!1,ap),Gt(t,n)}}function Ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sp.compareFunction=Gh,r=sp):r=Mp,t.setTexture2D(e||r,s)}function By(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tp,s)}function ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sp,s)}function Vy(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return wy;case 35666:return Ty;case 35674:return Ey;case 35675:return Ay;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Iy;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Uy;case 36295:return Ny;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}function Hy(i,e){i.uniform1fv(this.addr,e)}function Gy(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Wy(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Xy(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function qy(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yy(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zy(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jy(i,e){i.uniform1iv(this.addr,e)}function Jy(i,e){i.uniform2iv(this.addr,e)}function Ky(i,e){i.uniform3iv(this.addr,e)}function $y(i,e){i.uniform4iv(this.addr,e)}function Qy(i,e){i.uniform1uiv(this.addr,e)}function ev(i,e){i.uniform2uiv(this.addr,e)}function tv(i,e){i.uniform3uiv(this.addr,e)}function nv(i,e){i.uniform4uiv(this.addr,e)}function iv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mp,r[o])}function sv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wp,r[o])}function rv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tp,r[o])}function ov(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sp,r[o])}function av(i){switch(i){case 5126:return Hy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return Zy;case 5124:case 35670:return jy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return $y;case 5125:return Qy;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}var su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=av(t.type)}},ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},iu=/(\w+)(\])?(\[|\.)?/g;function hp(i,e){i.seq.push(e),i.map[e.id]=e}function cv(i,e,t){let n=i.name,s=n.length;for(iu.lastIndex=0;;){let r=iu.exec(n),o=iu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hp(t,l===void 0?new su(a,i,e):new ru(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ou(a),hp(t,h)),t=h}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lv=37297,hv=0;function uv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var dp=new Ke;function dv(i){at._getMatrix(dp,at.workingColorSpace,i);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case uo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+uv(i.getShaderSource(e),a)}else return r}function fv(i,e){let t=dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pv(i,e){let t;switch(e){case Af:t="Linear";break;case Cf:t="Reinhard";break;case Rf:t="Cineon";break;case Sc:t="ACESFilmic";break;case Pf:t="AgX";break;case Lf:t="Neutral";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ll=new y;function mv(){at.getLuminanceCoefficients(ll);let i=ll.x.toFixed(4),e=ll.y.toFixed(4),t=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function xv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _v(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function pp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(yv,bv)}var vv=new Map;function bv(i,e){let t=tt[e];if(t===void 0){let n=vv.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}var Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(Mv,Sv)}function Sv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Tv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function Cv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=wv(t),l=Tv(t),u=Ev(t),h=Av(t),d=Cv(t),f=gv(t),g=xv(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),p.length>0&&(p+=`
`)):(m=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),p=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=au(o),o=pp(o,t),o=mp(o,t),a=au(a),a=pp(a,t),a=mp(a,t),o=gp(o),a=gp(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,_=b+p+a,E=up(s,s.VERTEX_SHADER,S),A=up(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(A)||"",k=F.trim(),G=H.trim(),K=V.trim(),W=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{let pe=fp(s,E,"vertex"),Se=fp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+pe+`
`+Se)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||K==="")&&(ee=!1);ee&&(P.diagnostics={runnable:W,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(A),L=new Vr(s,x),w=_v(s,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,lv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var Iv=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lu(e),t.set(e,n)),n}},lu=class{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}};function Pv(i,e,t,n,s,r,o){let a=new Mr,c=new cu,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,F,H){let V=F.fog,k=H.geometry,G=w.isMeshStandardMaterial?F.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),W=K&&K.mapping===ko?K.image.height:null,ee=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=pe!==void 0?pe.length:0,Y=0;k.morphAttributes.position!==void 0&&(Y=1),k.morphAttributes.normal!==void 0&&(Y=2),k.morphAttributes.color!==void 0&&(Y=3);let ae,Oe,Re,J;if(ee){let pt=ui[ee];ae=pt.vertexShader,Oe=pt.fragmentShader}else ae=w.vertexShader,Oe=w.fragmentShader,c.update(w),Re=c.getVertexShaderID(w),J=c.getFragmentShaderID(w);let D=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ue=H.isInstancedMesh===!0,ve=H.isBatchedMesh===!0,ke=!!w.map,Ze=!!w.matcap,R=!!K,ne=!!w.aoMap,ie=!!w.lightMap,te=!!w.bumpMap,Q=!!w.normalMap,xe=!!w.displacementMap,ce=!!w.emissiveMap,_e=!!w.metalnessMap,je=!!w.roughnessMap,Xe=w.anisotropy>0,C=w.clearcoat>0,v=w.dispersion>0,z=w.iridescence>0,Z=w.sheen>0,oe=w.transmission>0,j=Xe&&!!w.anisotropyMap,De=C&&!!w.clearcoatMap,me=C&&!!w.clearcoatNormalMap,Ie=C&&!!w.clearcoatRoughnessMap,Pe=z&&!!w.iridescenceMap,le=z&&!!w.iridescenceThicknessMap,Te=Z&&!!w.sheenColorMap,He=Z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Me=!!w.specularColorMap,Qe=!!w.specularIntensityMap,U=oe&&!!w.transmissionMap,fe=oe&&!!w.thicknessMap,ye=!!w.gradientMap,Ae=!!w.alphaMap,he=w.alphaTest>0,se=!!w.alphaHash,Le=!!w.extensions,Je=Ri;w.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Je=i.toneMapping);let St={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:ae,fragmentShader:Oe,defines:w.defines,customVertexShaderID:Re,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ve,batchingColor:ve&&H._colorsTexture!==null,instancing:ue,instancingColor:ue&&H.instanceColor!==null,instancingMorph:ue&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ss,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:Ze,envMap:R,envMapMode:R&&K.mapping,envMapCubeUVHeight:W,aoMap:ne,lightMap:ie,bumpMap:te,normalMap:Q,displacementMap:d&&xe,emissiveMap:ce,normalMapObjectSpace:Q&&w.normalMapType===Nf,normalMapTangentSpace:Q&&w.normalMapType===Hh,metalnessMap:_e,roughnessMap:je,anisotropy:Xe,anisotropyMap:j,clearcoat:C,clearcoatMap:De,clearcoatNormalMap:me,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:z,iridescenceMap:Pe,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:Te,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Me,specularIntensityMap:Qe,transmission:oe,transmissionMap:U,thicknessMap:fe,gradientMap:ye,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:se,combine:w.combine,mapUv:ke&&x(w.map.channel),aoMapUv:ne&&x(w.aoMap.channel),lightMapUv:ie&&x(w.lightMap.channel),bumpMapUv:te&&x(w.bumpMap.channel),normalMapUv:Q&&x(w.normalMap.channel),displacementMapUv:xe&&x(w.displacementMap.channel),emissiveMapUv:ce&&x(w.emissiveMap.channel),metalnessMapUv:_e&&x(w.metalnessMap.channel),roughnessMapUv:je&&x(w.roughnessMap.channel),anisotropyMapUv:j&&x(w.anisotropyMap.channel),clearcoatMapUv:De&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(w.sheenRoughnessMap.channel),specularMapUv:Ne&&x(w.specularMap.channel),specularColorMapUv:Me&&x(w.specularColorMap.channel),specularIntensityMapUv:Qe&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:fe&&x(w.thicknessMap.channel),alphaMapUv:Ae&&x(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Q||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(ke||Ae),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:$,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===gt,decodeVideoTextureEmissive:ce&&w.emissiveMap.isVideoTexture===!0&&at.getTransfer(w.emissiveMap.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jt,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(b(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let M=g[w.type],P;if(M){let F=ui[M];P=qf.clone(F.uniforms)}else P=w.uniforms;return P}function E(w,M){let P;for(let F=0,H=u.length;F<H;F++){let V=u[F];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Rv(i,M,w,r),u.push(P)),P}function A(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function I(w){c.remove(w)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:L}}function Lv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Dv),n.length>1&&n.sort(d||_p),s.length>1&&s.sort(d||_p)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Uv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new yp,i.set(n,[o])):s>=r.length?(o=new yp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new y,color:new ze};break;case"SpotLight":t={position:new y,direction:new y,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new y,halfWidth:new y,halfHeight:new y};break}return i[e.id]=t,t}}}function Fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ov=0;function Bv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zv(i){let e=new Nv,t=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new y);let s=new y,r=new ut,o=new ut;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,S=0,_=0,E=0,A=0,I=0;l.sort(Bv);for(let w=0,M=l.length;w<M;w++){let P=l[w],F=P.color,H=P.intensity,V=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*H,h+=F.g*H,d+=F.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],H);I++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,W=t.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=G,f++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(H),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[x]=G;let K=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=K.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=k,_++}x++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(F).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let K=P.shadow,W=t.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==E||L.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=E,L.numLightProbes=I,n.version=Ov++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let S=l[p];if(S.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(S.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function vp(i){let e=new zv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new vp(i),e.set(s,[a])):r>=o.length?(a=new vp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`;function Gv(i,e,t){let n=new wr,s=new re,r=new re,o=new Lt,a=new sc({depthPacking:Uf}),c=new rc,l={},u=t.maxTextureSize,h={[Si]:hn,[hn]:Si,[Jt]:Jt},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Vv,fragmentShader:Hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(A,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==li&&this.type===li,V=p===li&&this.type!==li;for(let k=0,G=A.length;k<G;k++){let K=A[k],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ee=W.getFrameExtents();if(s.multiply(ee),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||H===!0||V===!0){let Se=this.type!==li?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new ai(s.x,s.y,Se),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let pe=W.getViewportCount();for(let Se=0;Se<pe;Se++){let Y=W.getViewport(Se);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o),W.updateMatrices(K,Se),n=W.getFrustum(),_(I,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===li&&b(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,P)};function b(A,I){let L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,L,f,x,null)}function S(A,I,L,w){let M=null,P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=M.uuid,H=I.uuid,V=l[F];V===void 0&&(V={},l[F]=V);let k=V[H];k===void 0&&(k=M.clone(),V[H]=k,I.addEventListener("dispose",E)),M=k}if(M.visible=I.visible,M.wireframe=I.wireframe,w===li?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=L}return M}function _(A,I,L,w,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let H=e.update(A),V=A.material;if(Array.isArray(V)){let k=H.groups;for(let G=0,K=k.length;G<K;G++){let W=k[G],ee=V[W.materialIndex];if(ee&&ee.visible){let pe=S(A,ee,w,M);A.onBeforeShadow(i,A,I,L,H,pe,W),i.renderBufferDirect(L,null,H,pe,A,W),A.onAfterShadow(i,A,I,L,H,pe,W)}}}else if(V.visible){let k=S(A,V,w,M);A.onBeforeShadow(i,A,I,L,H,k,null),i.renderBufferDirect(L,null,H,k,A,null),A.onAfterShadow(i,A,I,L,H,k,null)}}let F=A.children;for(let H=0,V=F.length;H<V;H++)_(F[H],I,L,w,M)}function E(A){A.target.removeEventListener("dispose",E);for(let L in l){let w=l[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Wv={[gc]:xc,[_c]:bc,[yc]:Mc,[bs]:vc,[xc]:gc,[bc]:_c,[Mc]:yc,[vc]:bs};function Xv(i,e){function t(){let U=!1,fe=new Lt,ye=null,Ae=new Lt(0,0,0,0);return{setMask:function(he){ye!==he&&!U&&(i.colorMask(he,he,he,he),ye=he)},setLocked:function(he){U=he},setClear:function(he,se,Le,Je,St){St===!0&&(he*=Je,se*=Je,Le*=Je),fe.set(he,se,Le,Je),Ae.equals(fe)===!1&&(i.clearColor(he,se,Le,Je),Ae.copy(fe))},reset:function(){U=!1,ye=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,ye=null,Ae=null,he=null;return{setReversed:function(se){if(fe!==se){let Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=se;let Je=he;he=null,this.setClear(Je)}},getReversed:function(){return fe},setTest:function(se){se?D(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(se){ye!==se&&!U&&(i.depthMask(se),ye=se)},setFunc:function(se){if(fe&&(se=Wv[se]),Ae!==se){switch(se){case gc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=se}},setLocked:function(se){U=se},setClear:function(se){he!==se&&(fe&&(se=1-se),i.clearDepth(se),he=se)},reset:function(){U=!1,ye=null,Ae=null,he=null,fe=!1}}}function s(){let U=!1,fe=null,ye=null,Ae=null,he=null,se=null,Le=null,Je=null,St=null;return{setTest:function(pt){U||(pt?D(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(pt){fe!==pt&&!U&&(i.stencilMask(pt),fe=pt)},setFunc:function(pt,gi,ii){(ye!==pt||Ae!==gi||he!==ii)&&(i.stencilFunc(pt,gi,ii),ye=pt,Ae=gi,he=ii)},setOp:function(pt,gi,ii){(se!==pt||Le!==gi||Je!==ii)&&(i.stencilOp(pt,gi,ii),se=pt,Le=gi,Je=ii)},setLocked:function(pt){U=pt},setClear:function(pt){St!==pt&&(i.clearStencil(pt),St=pt)},reset:function(){U=!1,fe=null,ye=null,Ae=null,he=null,se=null,Le=null,Je=null,St=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,S=null,_=null,E=null,A=null,I=new ze(0,0,0),L=0,w=!1,M=null,P=null,F=null,H=null,V=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=K>=2);let ee=null,pe={},Se=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),ae=new Lt().fromArray(Se),Oe=new Lt().fromArray(Y);function Re(U,fe,ye,Ae){let he=new Uint8Array(4),se=i.createTexture();i.bindTexture(U,se),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ye;Le++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(fe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return se}let J={};J[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(i.DEPTH_TEST),o.setFunc(bs),te(!1),Q(Ah),D(i.CULL_FACE),ne(Ci);function D(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function $(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ue(U,fe){return h[U]!==fe?(i.bindFramebuffer(U,fe),h[U]=fe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function ve(U,fe){let ye=f,Ae=!1;if(U){ye=d.get(fe),ye===void 0&&(ye=[],d.set(fe,ye));let he=U.textures;if(ye.length!==he.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Le=he.length;se<Le;se++)ye[se]=i.COLOR_ATTACHMENT0+se;ye.length=he.length,Ae=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ye)}function ke(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Ze={[Xi]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};Ze[hf]=i.MIN,Ze[uf]=i.MAX;let R={[df]:i.ZERO,[ff]:i.ONE,[pf]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(U,fe,ye,Ae,he,se,Le,Je,St,pt){if(U===Ci){x===!0&&($(i.BLEND),x=!1);return}if(x===!1&&(D(i.BLEND),x=!0),U!==af){if(U!==m||pt!==w){if((p!==Xi||_!==Xi)&&(i.blendEquation(i.FUNC_ADD),p=Xi,_=Xi),pt)switch(U){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ih:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,E=null,A=null,I.set(0,0,0),L=0,m=U,w=pt}return}he=he||fe,se=se||ye,Le=Le||Ae,(fe!==p||he!==_)&&(i.blendEquationSeparate(Ze[fe],Ze[he]),p=fe,_=he),(ye!==b||Ae!==S||se!==E||Le!==A)&&(i.blendFuncSeparate(R[ye],R[Ae],R[se],R[Le]),b=ye,S=Ae,E=se,A=Le),(Je.equals(I)===!1||St!==L)&&(i.blendColor(Je.r,Je.g,Je.b,St),I.copy(Je),L=St),m=U,w=!1}function ie(U,fe){U.side===Jt?$(i.CULL_FACE):D(i.CULL_FACE);let ye=U.side===hn;fe&&(ye=!ye),te(ye),U.blending===vs&&U.transparent===!1?ne(Ci):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ae=U.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Q(U){U!==sf?(D(i.CULL_FACE),U!==P&&(U===Ah?i.cullFace(i.BACK):U===rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),P=U}function xe(U){U!==F&&(G&&i.lineWidth(U),F=U)}function ce(U,fe,ye){U?(D(i.POLYGON_OFFSET_FILL),(H!==fe||V!==ye)&&(i.polygonOffset(fe,ye),H=fe,V=ye)):$(i.POLYGON_OFFSET_FILL)}function _e(U){U?D(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function je(U){U===void 0&&(U=i.TEXTURE0+k-1),ee!==U&&(i.activeTexture(U),ee=U)}function Xe(U,fe,ye){ye===void 0&&(ee===null?ye=i.TEXTURE0+k-1:ye=ee);let Ae=pe[ye];Ae===void 0&&(Ae={type:void 0,texture:void 0},pe[ye]=Ae),(Ae.type!==U||Ae.texture!==fe)&&(ee!==ye&&(i.activeTexture(ye),ee=ye),i.bindTexture(U,fe||J[U]),Ae.type=U,Ae.texture=fe)}function C(){let U=pe[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(U){ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function He(U){Oe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Oe.copy(U))}function Ne(U,fe){let ye=l.get(fe);ye===void 0&&(ye=new WeakMap,l.set(fe,ye));let Ae=ye.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(fe,U.name),ye.set(U,Ae))}function Me(U,fe){let Ae=l.get(fe).get(U);c.get(fe)!==Ae&&(i.uniformBlockBinding(fe,Ae,U.__bindingPointIndex),c.set(fe,Ae))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,pe={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,S=null,_=null,E=null,A=null,I=new ze(0,0,0),L=0,w=!1,M=null,P=null,F=null,H=null,V=null,ae.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:$,bindFramebuffer:ue,drawBuffers:ve,useProgram:ke,setBlending:ne,setMaterial:ie,setFlipSided:te,setCullFace:Q,setLineWidth:xe,setPolygonOffset:ce,setScissorTest:_e,activeTexture:je,bindTexture:Xe,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Pe,texImage3D:le,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:me,texStorage3D:Ie,texSubImage2D:Z,texSubImage3D:oe,compressedTexSubImage2D:j,compressedTexSubImage3D:De,scissor:Te,viewport:He,reset:Qe}}function qv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):yr("canvas")}function x(C,v,z){let Z=1,oe=Xe(C);if((oe.width>z||oe.height>z)&&(Z=z/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor(Z*oe.width),De=Math.floor(Z*oe.height);h===void 0&&(h=g(j,De));let me=v?g(j,De):h;return me.width=j,me.height=De,me.getContext("2d").drawImage(C,0,0,j,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+j+"x"+De+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,v,z,Z,oe=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=v;if(v===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),v===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let De=oe?uo:at.getTransfer(Z);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=De===gt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(C,v){let z;return C?v===null||v===ts||v===Or?z=i.DEPTH24_STENCIL8:v===hi?z=i.DEPTH32F_STENCIL8:v===Nr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ts||v===Or?z=i.DEPTH_COMPONENT24:v===hi?z=i.DEPTH_COMPONENT32F:v===Nr&&(z=i.DEPTH_COMPONENT16),z}function E(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&u.delete(v)}function I(C){let v=C.target;v.removeEventListener("dispose",I),M(v)}function L(C){let v=n.get(C);if(v.__webglInit===void 0)return;let z=C.source,Z=d.get(z);if(Z){let oe=Z[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(C),Object.keys(Z).length===0&&d.delete(z)}n.remove(C)}function w(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let z=C.source,Z=d.get(z);delete Z[v.__cacheKey],o.memory.textures--}function M(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let oe=0;oe<v.__webglFramebuffer[Z].length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[Z][oe]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=C.textures;for(let Z=0,oe=z.length;Z<oe;Z++){let j=n.get(z[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(C)}let P=0;function F(){P=0}function H(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function V(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function k(C,v){let z=n.get(C);if(C.isVideoTexture&&_e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,C,v);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function G(C,v){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function K(C,v){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function W(C,v){let z=n.get(C);if(C.version>0&&z.__version!==C.version){D(z,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let ee={[Cn]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},pe={[en]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[un]:i.LINEAR_MIPMAP_LINEAR},Se={[Ff]:i.NEVER,[Hf]:i.ALWAYS,[Of]:i.LESS,[Gh]:i.LEQUAL,[Bf]:i.EQUAL,[Vf]:i.GEQUAL,[zf]:i.GREATER,[kf]:i.NOTEQUAL};function Y(C,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===Ur||v.magFilter===Ns||v.magFilter===un||v.minFilter===Zt||v.minFilter===Ur||v.minFilter===Ns||v.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Ns&&v.minFilter!==un||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(C,v){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let Z=v.source,oe=d.get(Z);oe===void 0&&(oe={},d.set(Z,oe));let j=V(v);if(j!==C.__cacheKey){oe[j]===void 0&&(oe[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[j].usedTimes++;let De=oe[C.__cacheKey];De!==void 0&&(oe[C.__cacheKey].usedTimes--,De.usedTimes===0&&w(v)),C.__cacheKey=j,C.__webglTexture=oe[j].texture}return z}function Oe(C,v,z){return Math.floor(Math.floor(C/z)/v)}function Re(C,v,z,Z){let j=C.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,Z,v.data);else{j.sort((le,Te)=>le.start-Te.start);let De=0;for(let le=1;le<j.length;le++){let Te=j[De],He=j[le],Ne=Te.start+Te.count,Me=Oe(He.start,v.width,4),Qe=Oe(Te.start,v.width,4);He.start<=Ne+1&&Me===Qe&&Oe(He.start+He.count-1,v.width,4)===Me?Te.count=Math.max(Te.count,He.start+He.count-Te.start):(++De,j[De]=He)}j.length=De+1;let me=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let le=0,Te=j.length;le<Te;le++){let He=j[le],Ne=Math.floor(He.start/4),Me=Math.ceil(He.count/4),Qe=Ne%v.width,U=Math.floor(Ne/v.width),fe=Me,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Qe,U,fe,ye,z,Z,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function J(C,v,z){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let oe=ae(C,v),j=v.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+z);let De=n.get(j);if(j.version!==De.__version||oe===!0){t.activeTexture(i.TEXTURE0+z);let me=at.getPrimaries(at.workingColorSpace),Ie=v.colorSpace===$n?null:at.getPrimaries(v.colorSpace),Pe=v.colorSpace===$n||me===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=x(v.image,!1,s.maxTextureSize);le=je(v,le);let Te=r.convert(v.format,v.colorSpace),He=r.convert(v.type),Ne=S(v.internalFormat,Te,He,v.colorSpace,v.isVideoTexture);Y(Z,v);let Me,Qe=v.mipmaps,U=v.isVideoTexture!==!0,fe=De.__version===void 0||oe===!0,ye=j.dataReady,Ae=E(v,le);if(v.isDepthTexture)Ne=_(v.format===Br,v.type),fe&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ne,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ne,le.width,le.height,0,Te,He,null));else if(v.isDataTexture)if(Qe.length>0){U&&fe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let he=0,se=Qe.length;he<se;he++)Me=Qe[he],U?ye&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Me.width,Me.height,Te,He,Me.data):t.texImage2D(i.TEXTURE_2D,he,Ne,Me.width,Me.height,0,Te,He,Me.data);v.generateMipmaps=!1}else U?(fe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,le.width,le.height),ye&&Re(v,le,Te,He)):t.texImage2D(i.TEXTURE_2D,0,Ne,le.width,le.height,0,Te,He,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ne,Qe[0].width,Qe[0].height,le.depth);for(let he=0,se=Qe.length;he<se;he++)if(Me=Qe[he],v.format!==xn)if(Te!==null)if(U){if(ye)if(v.layerUpdates.size>0){let Le=Kh(Me.width,Me.height,v.format,v.type);for(let Je of v.layerUpdates){let St=Me.data.subarray(Je*Le/Me.data.BYTES_PER_ELEMENT,(Je+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Je,Me.width,Me.height,1,Te,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,le.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Ne,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,le.depth,Te,He,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Ne,Me.width,Me.height,le.depth,0,Te,He,Me.data)}else{U&&fe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let he=0,se=Qe.length;he<se;he++)Me=Qe[he],v.format!==xn?Te!==null?U?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ye&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Me.width,Me.height,Te,He,Me.data):t.texImage2D(i.TEXTURE_2D,he,Ne,Me.width,Me.height,0,Te,He,Me.data)}else if(v.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ne,le.width,le.height,le.depth),ye)if(v.layerUpdates.size>0){let he=Kh(le.width,le.height,v.format,v.type);for(let se of v.layerUpdates){let Le=le.data.subarray(se*he/le.data.BYTES_PER_ELEMENT,(se+1)*he/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,Te,He,Le)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,Te,He,le.data);else if(v.isData3DTexture)U?(fe&&t.texStorage3D(i.TEXTURE_3D,Ae,Ne,le.width,le.height,le.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,Te,He,le.data);else if(v.isFramebufferTexture){if(fe)if(U)t.texStorage2D(i.TEXTURE_2D,Ae,Ne,le.width,le.height);else{let he=le.width,se=le.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ne,he,se,0,Te,He,null),he>>=1,se>>=1}}else if(Qe.length>0){if(U&&fe){let he=Xe(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ne,he.width,he.height)}for(let he=0,se=Qe.length;he<se;he++)Me=Qe[he],U?ye&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Te,He,Me):t.texImage2D(i.TEXTURE_2D,he,Ne,Te,He,Me);v.generateMipmaps=!1}else if(U){if(fe){let he=Xe(le);t.texStorage2D(i.TEXTURE_2D,Ae,Ne,he.width,he.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,He,le)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Te,He,le);m(v)&&p(Z),De.__version=j.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function D(C,v,z){if(v.image.length!==6)return;let Z=ae(C,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let j=n.get(oe);if(oe.version!==j.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);let De=at.getPrimaries(at.workingColorSpace),me=v.colorSpace===$n?null:at.getPrimaries(v.colorSpace),Ie=v.colorSpace===$n||De===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let se=0;se<6;se++)!Pe&&!le?Te[se]=x(v.image[se],!0,s.maxCubemapSize):Te[se]=le?v.image[se].image:v.image[se],Te[se]=je(v,Te[se]);let He=Te[0],Ne=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),Qe=S(v.internalFormat,Ne,Me,v.colorSpace),U=v.isVideoTexture!==!0,fe=j.__version===void 0||Z===!0,ye=oe.dataReady,Ae=E(v,He);Y(i.TEXTURE_CUBE_MAP,v);let he;if(Pe){U&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Qe,He.width,He.height);for(let se=0;se<6;se++){he=Te[se].mipmaps;for(let Le=0;Le<he.length;Le++){let Je=he[Le];v.format!==xn?Ne!==null?U?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Je.width,Je.height,Ne,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,Qe,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Je.width,Je.height,Ne,Me,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,Qe,Je.width,Je.height,0,Ne,Me,Je.data)}}}else{if(he=v.mipmaps,U&&fe){he.length>0&&Ae++;let se=Xe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(le){U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te[se].width,Te[se].height,Ne,Me,Te[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Te[se].width,Te[se].height,0,Ne,Me,Te[se].data);for(let Le=0;Le<he.length;Le++){let St=he[Le].image[se].image;U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,St.width,St.height,Ne,Me,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,Qe,St.width,St.height,0,Ne,Me,St.data)}}else{U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,Me,Te[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Ne,Me,Te[se]);for(let Le=0;Le<he.length;Le++){let Je=he[Le];U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,Ne,Me,Je.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,Qe,Ne,Me,Je.image[se])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=oe.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function $(C,v,z,Z,oe,j){let De=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Ie=S(z.internalFormat,De,me,z.colorSpace),Pe=n.get(v),le=n.get(z);if(le.__renderTarget=v,!Pe.__hasExternalTextures){let Te=Math.max(1,v.width>>j),He=Math.max(1,v.height>>j);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,j,Ie,Te,He,v.depth,0,De,me,null):t.texImage2D(oe,j,Ie,Te,He,0,De,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,oe,le.__webglTexture,0,xe(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,oe,le.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let Z=v.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,j=_(v.stencilBuffer,oe),De=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=xe(v);ce(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,j,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,C)}else{let Z=v.textures;for(let oe=0;oe<Z.length;oe++){let j=Z[oe],De=r.convert(j.format,j.colorSpace),me=r.convert(j.type),Ie=S(j.internalFormat,De,me,j.colorSpace),Pe=xe(v);z&&ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ie,v.width,v.height):ce(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let oe=Z.__webglTexture,j=xe(v);if(v.depthTexture.format===gr)ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Br)ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(C){let v=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?ve(v.__webglFramebuffer[0],C):ve(v.__webglFramebuffer,C)}else if(z){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),ue(v.__webglDepthbuffer[Z],C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,j)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ue(v.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(C,v,z){let Z=n.get(C);v!==void 0&&$(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ke(C)}function R(C){let v=C.texture,z=n.get(C),Z=n.get(v);C.addEventListener("dispose",I);let oe=C.textures,j=C.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)z.__webglFramebuffer[me][Ie]=i.createFramebuffer()}else z.__webglFramebuffer[me]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)z.__webglFramebuffer[me]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(De)for(let me=0,Ie=oe.length;me<Ie;me++){let Pe=n.get(oe[me]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ce(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){let Ie=oe[me];z.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[me]);let Pe=r.convert(Ie.format,Ie.colorSpace),le=r.convert(Ie.type),Te=S(Ie.internalFormat,Pe,le,Ie.colorSpace,C.isXRRenderTarget===!0),He=xe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,z.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(i.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)$(z.__webglFramebuffer[me][Ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie);else $(z.__webglFramebuffer[me],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,Ie=oe.length;me<Ie;me++){let Pe=oe[me],le=n.get(Pe),Te=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),Y(Te,Pe),$(z.__webglFramebuffer,C,Pe,i.COLOR_ATTACHMENT0+me,Te,0),m(Pe)&&p(Te)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Z.__webglTexture),Y(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)$(z.__webglFramebuffer[Ie],C,v,i.COLOR_ATTACHMENT0,me,Ie);else $(z.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,me,0);m(v)&&p(me),t.unbindTexture()}C.depthBuffer&&ke(C)}function ne(C){let v=C.textures;for(let z=0,Z=v.length;z<Z;z++){let oe=v[z];if(m(oe)){let j=b(C),De=n.get(oe).__webglTexture;t.bindTexture(j,De),p(j),t.unbindTexture()}}}let ie=[],te=[];function Q(C){if(C.samples>0){if(ce(C)===!1){let v=C.textures,z=C.width,Z=C.height,oe=i.COLOR_BUFFER_BIT,j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),me=v.length>1;if(me)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ie=C.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let le=n.get(v[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,oe,i.NEAREST),c===!0&&(ie.length=0,te.length=0,ie.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(j),te.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let le=n.get(v[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xe(C){return Math.min(s.maxSamples,C.samples)}function ce(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _e(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function je(C,v){let z=C.colorSpace,Z=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ss&&z!==$n&&(at.getTransfer(z)===gt?(Z!==xn||oe!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ce}function Yv(i,e){function t(n,s=$n){let r,o=at.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===xn)return i.RGBA;if(n===gr)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Vh)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===Vo||n===Ho||n===Go||n===Wo)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Uc||n===Nc||n===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===zc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Bc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===jc||n===Jc||n===Kc||n===$c||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:Zv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new hu,p={},b=t.getContextAttributes(),S=null,_=null,E=[],A=[],I=new re,L=null,w=new Yt;w.viewport=new Lt;let M=new Yt;M.viewport=new Lt;let P=[w,M],F=new mc,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let D=E[J];return D===void 0&&(D=new Sr,E[J]=D),D.getTargetRaySpace()},this.getControllerGrip=function(J){let D=E[J];return D===void 0&&(D=new Sr,E[J]=D),D.getGripSpace()},this.getHand=function(J){let D=E[J];return D===void 0&&(D=new Sr,E[J]=D),D.getHandSpace()};function k(J){let D=A.indexOf(J.inputSource);if(D===-1)return;let $=E[D];$!==void 0&&($.update(J.inputSource,J.frame,l||o),$.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let J=0;J<E.length;J++){let D=A[J];D!==null&&(A[J]=null,E[J].disconnect(D))}H=null,V=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(S),f=null,d=null,h=null,s=null,_=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ue=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?Br:gr,ue=b.stencil?Or:ts);let ke={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ai(d.textureWidth,d.textureHeight,{format:xn,type:Kn,depthTexture:new vo(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ai(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(J){for(let D=0;D<J.removed.length;D++){let $=J.removed[D],ue=A.indexOf($);ue>=0&&(A[ue]=null,E[ue].disconnect($))}for(let D=0;D<J.added.length;D++){let $=J.added[D],ue=A.indexOf($);if(ue===-1){for(let ke=0;ke<E.length;ke++)if(ke>=A.length){A.push($),ue=ke;break}else if(A[ke]===null){A[ke]=$,ue=ke;break}if(ue===-1)break}let ve=E[ue];ve&&ve.connect($)}}let W=new y,ee=new y;function pe(J,D,$){W.setFromMatrixPosition(D.matrixWorld),ee.setFromMatrixPosition($.matrixWorld);let ue=W.distanceTo(ee),ve=D.projectionMatrix.elements,ke=$.projectionMatrix.elements,Ze=ve[14]/(ve[10]-1),R=ve[14]/(ve[10]+1),ne=(ve[9]+1)/ve[5],ie=(ve[9]-1)/ve[5],te=(ve[8]-1)/ve[0],Q=(ke[8]+1)/ke[0],xe=Ze*te,ce=Ze*Q,_e=ue/(-te+Q),je=_e*-te;if(D.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(je),J.translateZ(_e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(D.projectionMatrix),J.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let Xe=Ze+_e,C=R+_e,v=xe-je,z=ce+(ue-je),Z=ne*R/C*Xe,oe=ie*R/C*Xe;J.projectionMatrix.makePerspective(v,z,Z,oe,Xe,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Se(J,D){D===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(D.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let D=J.near,$=J.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&($=m.depthFar)),F.near=M.near=w.near=D,F.far=M.far=w.far=$,(H!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,V=F.far),F.layers.mask=J.layers.mask|6,w.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let ue=J.parent,ve=F.cameras;Se(F,ue);for(let ke=0;ke<ve.length;ke++)Se(ve[ke],ue);ve.length===2?pe(F,w,M):F.projectionMatrix.copy(w.projectionMatrix),Y(J,F,ue)};function Y(J,D,$){$===null?J.matrix.copy(D.matrixWorld):(J.matrix.copy($.matrixWorld),J.matrix.invert(),J.matrix.multiply(D.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(D.projectionMatrix),J.projectionMatrixInverse.copy(D.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_r*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let ae=null;function Oe(J,D){if(u=D.getViewerPose(l||o),g=D,u!==null){let $=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;$.length!==F.cameras.length&&(F.cameras.length=0,ue=!0);for(let R=0;R<$.length;R++){let ne=$[R],ie=null;if(f!==null)ie=f.getViewport(ne);else{let Q=h.getViewSubImage(d,ne);ie=Q.viewport,R===0&&(e.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(_))}let te=P[R];te===void 0&&(te=new Yt,te.layers.enable(R),te.viewport=new Lt,P[R]=te),te.matrix.fromArray(ne.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ne.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),R===0&&(F.matrix.copy(te.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ue===!0&&F.cameras.push(te)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let R=h.getDepthInformation($[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<$.length;R++){let ne=$[R].camera;if(ne){let ie=p[ne];ie||(ie=new bo,p[ne]=ie);let te=h.getCameraImage(ne);ie.sourceTexture=te}}}}for(let $=0;$<E.length;$++){let ue=A[$],ve=E[$];ue!==null&&ve!==void 0&&ve.update(ue,D,l||o)}ae&&ae(J,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}let Re=new bp;Re.setAnimationLoop(Oe),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}},zs=new jt,Jv=new ut;function Kv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,_=b.envMapRotation;S&&(m.envMap.value=S,zs.copy(_),zs.x*=-1,zs.y*=-1,zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(zs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let _=S.program;n.uniformBlockBinding(b,_)}function l(b,S){let _=s[b.id];_===void 0&&(g(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",m));let E=S.program;n.updateUBOMapping(b,E);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){let S=h();b.__bindingPointIndex=S;let _=i.createBuffer(),E=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],_=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,I=_.length;A<I;A++){let L=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,M=L.length;w<M;w++){let P=L[w];if(f(P,A,w,E)===!0){let F=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],V=0;for(let k=0;k<H.length;k++){let G=H[k],K=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,_,E){let A=b.value,I=S+"_"+_;if(E[I]===void 0)return typeof A=="number"||typeof A=="boolean"?E[I]=A:E[I]=A.clone(),!0;{let L=E[I];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[I]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){let S=b.uniforms,_=0,E=16;for(let I=0,L=S.length;I<L;I++){let w=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,P=w.length;M<P;M++){let F=w[M],H=Array.isArray(F.value)?F.value:[F.value];for(let V=0,k=H.length;V<k;V++){let G=H[V],K=x(G),W=_%E,ee=W%K.boundary,pe=W+ee;_+=ee,pe!==0&&E-pe<K.storage&&(_+=E-pe),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=K.storage}}}let A=_%E;return A>0&&(_+=E-A),b.__size=_,b.__cache={},this}function x(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Hr=class{constructor(e={}){let{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=At;let A=0,I=0,L=null,w=-1,M=null,P=new Lt,F=new Lt,H=null,V=new ze(0),k=0,G=t.width,K=t.height,W=1,ee=null,pe=null,Se=new Lt(0,0,G,K),Y=new Lt(0,0,G,K),ae=!1,Oe=new wr,Re=!1,J=!1,D=new ut,$=new y,ue=new Lt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ze(){return L===null?W:1}let R=n;function ne(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){let O="webgl2";if(R=ne(O,T),R===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,te,Q,xe,ce,_e,je,Xe,C,v,z,Z,oe,j,De,me,Ie,Pe,le,Te,He,Ne,Me,Qe;function U(){ie=new gy(R),ie.init(),Ne=new Yv(R,ie),te=new ly(R,ie,e,Ne),Q=new Xv(R,ie),te.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),xe=new yy(R),ce=new Lv,_e=new qv(R,ie,Q,ce,te,Ne,xe),je=new uy(_),Xe=new my(_),C=new T0(R),Me=new ay(R,C),v=new xy(R,C,xe,Me),z=new by(R,v,C,xe),le=new vy(R,te,_e),me=new hy(ce),Z=new Pv(_,je,Xe,ie,te,Me,me),oe=new Kv(_,ce),j=new Uv,De=new kv(ie),Pe=new oy(_,je,Xe,Q,z,f,c),Ie=new Gv(_,z,te),Qe=new $v(R,xe,te,Q),Te=new cy(R,ie,xe),He=new _y(R,ie,xe),xe.programs=Z.programs,_.capabilities=te,_.extensions=ie,_.properties=ce,_.renderLists=j,_.shadowMap=Ie,_.state=Q,_.info=xe}U();let fe=new uu(_,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,K,!1))},this.getSize=function(T){return T.set(G,K)},this.setSize=function(T,O,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,K=O,t.width=Math.floor(T*W),t.height=Math.floor(O*W),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*W,K*W).floor()},this.setDrawingBufferSize=function(T,O,X){G=T,K=O,W=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,O,X,q){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,O,X,q),Q.viewport(P.copy(Se).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,O,X,q){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,O,X,q),Q.scissor(F.copy(Y).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Q.setScissorTest(ae=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let B=!1;if(L!==null){let de=L.texture.format;B=de===Lc||de===Pc||de===Ic}if(B){let de=L.texture.type,we=de===Kn||de===ts||de===Nr||de===Or||de===Cc||de===Rc,Ce=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Ve=Ce.r,Ge=Ce.g,Fe=Ce.b;we?(g[0]=Ve,g[1]=Ge,g[2]=Fe,g[3]=Ee,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ve,x[1]=Ge,x[2]=Fe,x[3]=Ee,R.clearBufferiv(R.COLOR,0,x))}else q|=R.COLOR_BUFFER_BIT}O&&(q|=R.DEPTH_BUFFER_BIT),X&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Pe.dispose(),j.dispose(),De.dispose(),ce.dispose(),je.dispose(),Xe.dispose(),z.dispose(),Me.dispose(),Qe.dispose(),Z.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ii),fe.removeEventListener("sessionend",vd),fs.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=xe.autoReset,O=Ie.enabled,X=Ie.autoUpdate,q=Ie.needsUpdate,B=Ie.type;U(),xe.autoReset=T,Ie.enabled=O,Ie.autoUpdate=X,Ie.needsUpdate=q,Ie.type=B}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){let O=T.target;O.removeEventListener("dispose",se),Le(O)}function Le(T){Je(T),ce.remove(T)}function Je(T){let O=ce.get(T).programs;O!==void 0&&(O.forEach(function(X){Z.releaseProgram(X)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,B,de){O===null&&(O=ve);let we=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Wm(T,O,X,q,B);Q.setMaterial(q,we);let Ee=X.index,Ve=1;if(q.wireframe===!0){if(Ee=v.getWireframeAttribute(X),Ee===void 0)return;Ve=2}let Ge=X.drawRange,Fe=X.attributes.position,it=Ge.start*Ve,xt=(Ge.start+Ge.count)*Ve;de!==null&&(it=Math.max(it,de.start*Ve),xt=Math.min(xt,(de.start+de.count)*Ve)),Ee!==null?(it=Math.max(it,0),xt=Math.min(xt,Ee.count)):Fe!=null&&(it=Math.max(it,0),xt=Math.min(xt,Fe.count));let Ft=xt-it;if(Ft<0||Ft===1/0)return;Me.setup(B,q,Ce,X,Ee);let Tt,yt=Te;if(Ee!==null&&(Tt=C.get(Ee),yt=He,yt.setIndex(Tt)),B.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*Ze()),yt.setMode(R.LINES)):yt.setMode(R.TRIANGLES);else if(B.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),Q.setLineWidth(Be*Ze()),B.isLineSegments?yt.setMode(R.LINES):B.isLineLoop?yt.setMode(R.LINE_LOOP):yt.setMode(R.LINE_STRIP)}else B.isPoints?yt.setMode(R.POINTS):B.isSprite&&yt.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Be=B._multiDrawStarts,Rt=B._multiDrawCounts,ht=B._multiDrawCount,Mn=Ee?C.get(Ee).bytesPerElement:1,Ks=ce.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<ht;Sn++)Ks.setValue(R,"_gl_DrawID",Sn),yt.render(Be[Sn]/Mn,Rt[Sn])}else if(B.isInstancedMesh)yt.renderInstances(it,Ft,B.count);else if(X.isInstancedBufferGeometry){let Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,Be);yt.renderInstances(it,Ft,Rt)}else yt.render(it,Ft)};function St(T,O,X){T.transparent===!0&&T.side===Jt&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,xa(T,O,X),T.side=Si,T.needsUpdate=!0,xa(T,O,X),T.side=Jt):xa(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=De.get(X),p.init(O),S.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let de=B.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){let Ce=de[we];St(Ce,X,B),q.add(Ce)}else St(de,X,B),q.add(de)}),p=S.pop(),q},this.compileAsync=function(T,O,X=null){let q=this.compile(T,O,X);return new Promise(B=>{function de(){if(q.forEach(function(we){ce.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){B(T);return}setTimeout(de,10)}ie.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let pt=null;function gi(T){pt&&pt(T)}function ii(){fs.stop()}function vd(){fs.start()}let fs=new bp;fs.setAnimationLoop(gi),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(T){pt=T,fe.setAnimationLoop(T),T===null?fs.stop():fs.start()},fe.addEventListener("sessionstart",ii),fe.addEventListener("sessionend",vd),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,L),p=De.get(T,S.length),p.init(O),S.push(p),D.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Oe.setFromProjectionMatrix(D,Zn,O.reversedDepth),J=this.localClippingEnabled,Re=me.init(this.clippingPlanes,J),m=j.get(T,b.length),m.init(),b.push(m),fe.enabled===!0&&fe.isPresenting===!0){let de=_.xr.getDepthSensingMesh();de!==null&&zl(de,O,-1/0,_.sortObjects)}zl(T,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ee,pe),ke=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ke&&Pe.addToRenderList(m,T),this.info.render.frame++,Re===!0&&me.beginShadows();let X=p.state.shadowsArray;Ie.render(X,T,O),Re===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let de=O.cameras;if(B.length>0)for(let we=0,Ce=de.length;we<Ce;we++){let Ee=de[we];Md(q,B,T,Ee)}ke&&Pe.render(T);for(let we=0,Ce=de.length;we<Ce;we++){let Ee=de[we];bd(m,T,Ee,Ee.viewport)}}else B.length>0&&Md(q,B,T,O),ke&&Pe.render(T),bd(m,T,O);L!==null&&I===0&&(_e.updateMultisampleRenderTarget(L),_e.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(_,T,O),Me.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Re===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function zl(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Oe.intersectsSprite(T)){q&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);let we=z.update(T),Ce=T.material;Ce.visible&&m.push(T,we,Ce,X,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Oe.intersectsObject(T))){let we=z.update(T),Ce=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ue.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ue.copy(we.boundingSphere.center)),ue.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Ce)){let Ee=we.groups;for(let Ve=0,Ge=Ee.length;Ve<Ge;Ve++){let Fe=Ee[Ve],it=Ce[Fe.materialIndex];it&&it.visible&&m.push(T,we,it,X,ue.z,Fe)}}else Ce.visible&&m.push(T,we,Ce,X,ue.z,null)}}let de=T.children;for(let we=0,Ce=de.length;we<Ce;we++)zl(de[we],O,X,q)}function bd(T,O,X,q){let B=T.opaque,de=T.transmissive,we=T.transparent;p.setupLightsView(X),Re===!0&&me.setGlobalState(_.clippingPlanes,X),q&&Q.viewport(P.copy(q)),B.length>0&&ga(B,O,X),de.length>0&&ga(de,O,X),we.length>0&&ga(we,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Md(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ai(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Fr:Kn,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let de=p.state.transmissionRenderTarget[q.id],we=q.viewport||P;de.setSize(we.z*_.transmissionResolutionScale,we.w*_.transmissionResolutionScale);let Ce=_.getRenderTarget(),Ee=_.getActiveCubeFace(),Ve=_.getActiveMipmapLevel();_.setRenderTarget(de),_.getClearColor(V),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),ke&&Pe.render(X);let Ge=_.toneMapping;_.toneMapping=Ri;let Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Re===!0&&me.setGlobalState(_.clippingPlanes,q),ga(T,X,q),_e.updateMultisampleRenderTarget(de),_e.updateRenderTargetMipmap(de),ie.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let xt=0,Ft=O.length;xt<Ft;xt++){let Tt=O[xt],yt=Tt.object,Be=Tt.geometry,Rt=Tt.material,ht=Tt.group;if(Rt.side===Jt&&yt.layers.test(q.layers)){let Mn=Rt.side;Rt.side=hn,Rt.needsUpdate=!0,Sd(yt,X,q,Be,Rt,ht),Rt.side=Mn,Rt.needsUpdate=!0,it=!0}}it===!0&&(_e.updateMultisampleRenderTarget(de),_e.updateRenderTargetMipmap(de))}_.setRenderTarget(Ce,Ee,Ve),_.setClearColor(V,k),Fe!==void 0&&(q.viewport=Fe),_.toneMapping=Ge}function ga(T,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=T.length;B<de;B++){let we=T[B],Ce=we.object,Ee=we.geometry,Ve=we.group,Ge=we.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),Ce.layers.test(X.layers)&&Sd(Ce,O,X,Ee,Ge,Ve)}}function Sd(T,O,X,q,B,de){T.onBeforeRender(_,O,X,q,B,de),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,O,X,q,T,de),B.transparent===!0&&B.side===Jt&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,_.renderBufferDirect(X,O,q,B,T,de),B.side=Si,B.needsUpdate=!0,_.renderBufferDirect(X,O,q,B,T,de),B.side=Jt):_.renderBufferDirect(X,O,q,B,T,de),T.onAfterRender(_,O,X,q,B,de)}function xa(T,O,X){O.isScene!==!0&&(O=ve);let q=ce.get(T),B=p.state.lights,de=p.state.shadowsArray,we=B.state.version,Ce=Z.getParameters(T,B.state,de,O,X),Ee=Z.getProgramCacheKey(Ce),Ve=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?Xe:je).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",se),Ve=new Map,q.programs=Ve);let Ge=Ve.get(Ee);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===we)return Td(T,Ce),Ge}else Ce.uniforms=Z.getUniforms(T),T.onBeforeCompile(Ce,_),Ge=Z.acquireProgram(Ce,Ee),Ve.set(Ee,Ge),q.uniforms=Ce.uniforms;let Fe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=me.uniform),Td(T,Ce),q.needsLights=qm(T),q.lightsStateVersion=we,q.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function wd(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Td(T,O){let X=ce.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Wm(T,O,X,q,B){O.isScene!==!0&&(O=ve),_e.resetTextureUnits();let de=O.fog,we=q.isMeshStandardMaterial?O.environment:null,Ce=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ss,Ee=(q.isMeshStandardMaterial?Xe:je).get(q.envMap||we),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,Ft=Ri;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=_.toneMapping);let Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=Tt!==void 0?Tt.length:0,Be=ce.get(q),Rt=p.state.lights;if(Re===!0&&(J===!0||T!==M)){let an=T===M&&q.id===w;me.setState(q,T,an)}let ht=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Rt.state.version||Be.outputColorSpace!==Ce||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Ee||q.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==me.numPlanes||Be.numIntersection!==me.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Ge||Be.morphTargets!==Fe||Be.morphNormals!==it||Be.morphColors!==xt||Be.toneMapping!==Ft||Be.morphTargetsCount!==yt)&&(ht=!0):(ht=!0,Be.__version=q.version);let Mn=Be.currentProgram;ht===!0&&(Mn=xa(q,O,B));let Ks=!1,Sn=!1,eo=!1,It=Mn.getUniforms(),Fn=Be.uniforms;if(Q.useProgram(Mn.program)&&(Ks=!0,Sn=!0,eo=!0),q.id!==w&&(w=q.id,Sn=!0),Ks||M!==T){Q.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),It.setValue(R,"projectionMatrix",T.projectionMatrix),It.setValue(R,"viewMatrix",T.matrixWorldInverse);let pn=It.map.cameraPosition;pn!==void 0&&pn.setValue(R,$.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&It.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&It.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Sn=!0,eo=!0)}if(B.isSkinnedMesh){It.setOptional(R,B,"bindMatrix"),It.setOptional(R,B,"bindMatrixInverse");let an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),It.setValue(R,"boneTexture",an.boneTexture,_e))}B.isBatchedMesh&&(It.setOptional(R,B,"batchingTexture"),It.setValue(R,"batchingTexture",B._matricesTexture,_e),It.setOptional(R,B,"batchingIdTexture"),It.setValue(R,"batchingIdTexture",B._indirectTexture,_e),It.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&It.setValue(R,"batchingColorTexture",B._colorsTexture,_e));let On=X.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&le.update(B,X,Mn),(Sn||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,It.setValue(R,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Fn.envMap.value=Ee,Fn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Fn.envMapIntensity.value=O.environmentIntensity),Sn&&(It.setValue(R,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&Xm(Fn,eo),de&&q.fog===!0&&oe.refreshFogUniforms(Fn,de),oe.refreshMaterialUniforms(Fn,q,W,K,p.state.transmissionRenderTarget[T.id]),Vr.upload(R,wd(Be),Fn,_e)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vr.upload(R,wd(Be),Fn,_e),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&It.setValue(R,"center",B.center),It.setValue(R,"modelViewMatrix",B.modelViewMatrix),It.setValue(R,"normalMatrix",B.normalMatrix),It.setValue(R,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let an=q.uniformsGroups;for(let pn=0,kl=an.length;pn<kl;pn++){let ps=an[pn];Qe.update(ps,Mn),Qe.bind(ps,Mn)}}return Mn}function Xm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function qm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,O,X){let q=ce.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ce.get(T.texture).__webglTexture=O,ce.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let X=ce.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let Ym=R.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){L=T,A=O,I=X;let q=!0,B=null,de=!1,we=!1;if(T){let Ee=ce.get(T);if(Ee.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(R.FRAMEBUFFER,null),q=!1;else if(Ee.__webglFramebuffer===void 0)_e.setupRenderTarget(T);else if(Ee.__hasExternalTextures)_e.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Fe=T.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&ce.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(T)}}let Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);let Ge=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][X]:B=Ge[O],de=!0):T.samples>0&&_e.useMultisampledRTT(T)===!1?B=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[X]:B=Ge,P.copy(T.viewport),F.copy(T.scissor),H=T.scissorTest}else P.copy(Se).multiplyScalar(W).floor(),F.copy(Y).multiplyScalar(W).floor(),H=ae;if(X!==0&&(B=Ym),Q.bindFramebuffer(R.FRAMEBUFFER,B)&&q&&Q.drawBuffers(T,B),Q.viewport(P),Q.scissor(F),Q.setScissorTest(H),de){let Ee=ce.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,X)}else if(we){let Ee=O;for(let Ve=0;Ve<T.textures.length;Ve++){let Ge=ce.get(T.textures[Ve]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ve,Ge.__webglTexture,X,Ee)}}else if(T!==null&&X!==0){let Ee=ce.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ee.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(T,O,X,q,B,de,we,Ce=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){Q.bindFramebuffer(R.FRAMEBUFFER,Ee);try{let Ve=T.textures[Ce],Ge=Ve.format,Fe=Ve.type;if(!te.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),R.readPixels(O,X,q,B,Ne.convert(Ge),Ne.convert(Fe),de))}finally{let Ve=L!==null?ce.get(L).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,q,B,de,we,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B){Q.bindFramebuffer(R.FRAMEBUFFER,Ee);let Ve=T.textures[Ce],Ge=Ve.format,Fe=Ve.type;if(!te.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,it),R.bufferData(R.PIXEL_PACK_BUFFER,de.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),R.readPixels(O,X,q,B,Ne.convert(Ge),Ne.convert(Fe),0);let xt=L!==null?ce.get(L).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,xt);let Ft=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Wf(R,Ft,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,it),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,de),R.deleteBuffer(it),R.deleteSync(Ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(T.image.width*q),de=Math.floor(T.image.height*q),we=O!==null?O.x:0,Ce=O!==null?O.y:0;_e.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,we,Ce,B,de),Q.unbindTexture()};let Zm=R.createFramebuffer(),jm=R.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,q=null,B=0,de=null){de===null&&(B!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let we,Ce,Ee,Ve,Ge,Fe,it,xt,Ft,Tt=T.isCompressedTexture?T.mipmaps[de]:T.image;if(X!==null)we=X.max.x-X.min.x,Ce=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ve=X.min.x,Ge=X.min.y,Fe=X.isBox3?X.min.z:0;else{let On=Math.pow(2,-B);we=Math.floor(Tt.width*On),Ce=Math.floor(Tt.height*On),T.isDataArrayTexture?Ee=Tt.depth:T.isData3DTexture?Ee=Math.floor(Tt.depth*On):Ee=1,Ve=0,Ge=0,Fe=0}q!==null?(it=q.x,xt=q.y,Ft=q.z):(it=0,xt=0,Ft=0);let yt=Ne.convert(O.format),Be=Ne.convert(O.type),Rt;O.isData3DTexture?(_e.setTexture3D(O,0),Rt=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_e.setTexture2DArray(O,0),Rt=R.TEXTURE_2D_ARRAY):(_e.setTexture2D(O,0),Rt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);let ht=R.getParameter(R.UNPACK_ROW_LENGTH),Mn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ks=R.getParameter(R.UNPACK_SKIP_PIXELS),Sn=R.getParameter(R.UNPACK_SKIP_ROWS),eo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fe);let It=T.isDataArrayTexture||T.isData3DTexture,Fn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let On=ce.get(T),an=ce.get(O),pn=ce.get(On.__renderTarget),kl=ce.get(an.__renderTarget);Q.bindFramebuffer(R.READ_FRAMEBUFFER,pn.__webglFramebuffer),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let ps=0;ps<Ee;ps++)It&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ce.get(T).__webglTexture,B,Fe+ps),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ce.get(O).__webglTexture,de,Ft+ps)),R.blitFramebuffer(Ve,Ge,we,Ce,it,xt,we,Ce,R.DEPTH_BUFFER_BIT,R.NEAREST);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||ce.has(T)){let On=ce.get(T),an=ce.get(O);Q.bindFramebuffer(R.READ_FRAMEBUFFER,Zm),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,jm);for(let pn=0;pn<Ee;pn++)It?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,On.__webglTexture,B,Fe+pn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,On.__webglTexture,B),Fn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,de,Ft+pn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,de),B!==0?R.blitFramebuffer(Ve,Ge,we,Ce,it,xt,we,Ce,R.COLOR_BUFFER_BIT,R.NEAREST):Fn?R.copyTexSubImage3D(Rt,de,it,xt,Ft+pn,Ve,Ge,we,Ce):R.copyTexSubImage2D(Rt,de,it,xt,Ve,Ge,we,Ce);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Fn?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Rt,de,it,xt,Ft,we,Ce,Ee,yt,Be,Tt.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Rt,de,it,xt,Ft,we,Ce,Ee,yt,Tt.data):R.texSubImage3D(Rt,de,it,xt,Ft,we,Ce,Ee,yt,Be,Tt):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,de,it,xt,we,Ce,yt,Be,Tt.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,de,it,xt,Tt.width,Tt.height,yt,Tt.data):R.texSubImage2D(R.TEXTURE_2D,de,it,xt,we,Ce,yt,Be,Tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ks),R.pixelStorei(R.UNPACK_SKIP_ROWS,Sn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,eo),de===0&&O.generateMipmaps&&R.generateMipmap(Rt),Q.unbindTexture()},this.initRenderTarget=function(T){ce.get(T).__webglFramebuffer===void 0&&_e.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?_e.setTextureCube(T,0):T.isData3DTexture?_e.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_e.setTexture2DArray(T,0):_e.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){A=0,I=0,L=null,Q.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Ep={type:"change"},mu={type:"start"},Cp={type:"end"},dl=new Zi,Ap=new mn,Qv=Math.cos(70*ct.DEG2RAD),Wt=new y,_n=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6,Wr=class extends Ls{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new st,this._lastTargetPosition=new y,this._quat=new st().setFromUnitVectors(e.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new y,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new y,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tb.bind(this),this._onPointerDown=eb.bind(this),this._onPointerUp=nb.bind(this),this._onContextMenu=lb.bind(this),this._onMouseWheel=rb.bind(this),this._onKeyDown=ob.bind(this),this._onTouchStart=ab.bind(this),this._onTouchMove=cb.bind(this),this._onMouseDown=ib.bind(this),this._onMouseMove=sb.bind(this),this._interceptControlDown=hb.bind(this),this._interceptControlUp=ub.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ep),this.update(),this.state=_t.NONE}update(e=null){let t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Wt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new y(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<Qv?this.object.lookAt(this.target):(Ap.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(Ap,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(Ep),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function eb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function tb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cp),this.state=_t.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ib(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_t.DOLLY;break;case Jn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}break;case Jn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(mu)}function sb(i){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rb(i){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(i.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cp))}function ob(i){this.enabled!==!1&&this._handleKeyDown(i)}function ab(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_t.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_t.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(mu)}function cb(i){switch(this._trackPointer(i),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_t.NONE}}function lb(i){this.enabled!==!1&&i.preventDefault()}function hb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ub(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hs=new Ps,nn=new y,ns=new y,Ct=new st,Rp={X:new y(1,0,0),Y:new y(0,1,0),Z:new y(0,0,1)},gu={type:"change"},Ip={type:"mouseDown",mode:null},Pp={type:"mouseUp",mode:null},Lp={type:"objectChange"},xl=class extends Ls{constructor(e,t=null){super(void 0,t);let n=new _u(this);this._root=n;let s=new yu;this._gizmo=s,n.add(s);let r=new vu;this._plane=r,n.add(r);let o=this;function a(S,_){let E=_;Object.defineProperty(o,S,{get:function(){return E!==void 0?E:_},set:function(A){E!==A&&(E=A,r[S]=A,s[S]=A,o.dispatchEvent({type:S+"-changed",value:A}),o.dispatchEvent(gu))}}),o[S]=_,r[S]=_,s[S]=_}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new y,l=new y,u=new st,h=new st,d=new y,f=new st,g=new y,x=new y,m=new y,p=0,b=new y;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",m),a("rotationAngle",p),a("eye",b),this._offset=new y,this._startNorm=new y,this._endNorm=new y,this._cameraScale=new y,this._parentPosition=new y,this._parentQuaternion=new st,this._parentQuaternionInv=new st,this._parentScale=new y,this._worldScaleStart=new y,this._worldQuaternionInv=new st,this._worldScale=new y,this._positionStart=new y,this._quaternionStart=new st,this._scaleStart=new y,this._getPointer=db.bind(this),this._onPointerDown=pb.bind(this),this._onPointerHover=fb.bind(this),this._onPointerMove=mb.bind(this),this._onPointerUp=gb.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Hs.setFromCamera(e,this.camera);let t=xu(this._gizmo.picker[this.mode],Hs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Hs.setFromCamera(e,this.camera);let t=xu(this._plane,Hs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ip.mode=this.mode,this.dispatchEvent(Ip)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Hs.setFromCamera(e,this.camera);let o=xu(this._plane,Hs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ct.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(nn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(nn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ns.set(a,a,a)}else nn.copy(this.pointStart),ns.copy(this.pointEnd),nn.applyQuaternion(this._worldQuaternionInv),ns.applyQuaternion(this._worldQuaternionInv),ns.divide(nn),t.search("X")===-1&&(ns.x=1),t.search("Y")===-1&&(ns.y=1),t.search("Z")===-1&&(ns.z=1);s.scale.copy(this._scaleStart).multiply(ns),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(nn.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(nn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Rp[t]),nn.copy(Rp[t]),r==="local"&&nn.applyQuaternion(this.worldQuaternion),nn.cross(this.eye),nn.length()===0?c=!0:this.rotationAngle=this._offset.dot(nn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gu),this.dispatchEvent(Lp)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Pp.mode=this.mode,this.dispatchEvent(Pp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gu),this.dispatchEvent(Lp),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Hs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function db(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function fb(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function pb(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function mb(i){this.enabled&&this.pointerMove(this._getPointer(i))}function gb(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function xu(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var fl=new jt,bt=new y(0,1,0),Dp=new y(0,0,0),Up=new ut,pl=new st,gl=new st,di=new y,Np=new ut,Zo=new y(1,0,0),Gs=new y(0,1,0),jo=new y(0,0,1),ml=new y,qo=new y,Yo=new y,_u=class extends Dt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},yu=class extends Dt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new zn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let h=e.clone();h.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:d};let x=new vt(0,.04,.1,12);x.translate(0,.05,0);let m=new et(.08,.08,.08);m.translate(0,.04,0);let p=new dt;p.setAttribute("position",new Ue([0,0,0,1,0,0],3));let b=new vt(.0075,.0075,.5,3);b.translate(0,.25,0);function S(k,G){let K=new Pn(k,.0075,3,64,G*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function _(){let k=new dt;return k.setAttribute("position",new Ue([0,0,0,1,1,1],3)),k}let E={X:[[new ge(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ge(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ge(x,o),[0,.5,0]],[new ge(x,o),[0,-.5,0],[Math.PI,0,0]],[new ge(b,o)]],Z:[[new ge(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ge(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new ge(new kn(.1,0),h),[0,0,0]]],XY:[[new ge(new et(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ge(new et(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new et(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ge(new vt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new vt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new vt(.2,0,.6,4),n),[0,.3,0]],[new ge(new vt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new vt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new vt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ge(new kn(.2,0),n)]],XY:[[new ge(new et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new ge(new kn(.01,2),s),null,null,null,"helper"]],END:[[new ge(new kn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Rn(_(),s),null,null,null,"helper"]],X:[[new Rn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Rn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Rn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new ge(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ge(S(.5,.5),r)]],Y:[[new ge(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ge(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ge(S(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Rn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ge(new Ki(.25,10,8),n)]],X:[[new ge(new Pn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ge(new Pn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ge(new Pn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ge(new Pn(.75,.1,2,24),n)]]},P={X:[[new ge(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ge(b,r),[0,0,0],[0,0,-Math.PI/2]],[new ge(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ge(m,o),[0,.5,0]],[new ge(b,o)],[new ge(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ge(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ge(b,a),[0,0,0],[Math.PI/2,0,0]],[new ge(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ge(new et(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ge(new et(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new et(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new et(.1,.1,.1),h)]]},F={X:[[new ge(new vt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ge(new vt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ge(new vt(.2,0,.6,4),n),[0,.3,0]],[new ge(new vt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ge(new vt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ge(new vt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ge(new et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ge(new et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ge(new et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ge(new et(.2,.2,.2),n),[0,0,0]]]},H={X:[[new Rn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Rn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Rn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function V(k){let G=new Dt;for(let K in k)for(let W=k[K].length;W--;){let ee=k[K][W][0].clone(),pe=k[K][W][1],Se=k[K][W][2],Y=k[K][W][3],ae=k[K][W][4];ee.name=K,ee.tag=ae,pe&&ee.position.set(pe[0],pe[1],pe[2]),Se&&ee.rotation.set(Se[0],Se[1],Se[2]),Y&&ee.scale.set(Y[0],Y[1],Y[2]),ee.updateMatrix();let Oe=ee.geometry.clone();Oe.applyMatrix4(ee.matrix),ee.geometry=Oe,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),G.add(ee)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=V(E)),this.add(this.gizmo.rotate=V(L)),this.add(this.gizmo.scale=V(P)),this.add(this.picker.translate=V(A)),this.add(this.picker.rotate=V(M)),this.add(this.picker.scale=V(F)),this.add(this.helper.translate=V(I)),this.add(this.helper.rotate=V(w)),this.add(this.helper.scale=V(H)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:gl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ct.setFromEuler(fl.set(0,0,0)),o.quaternion.copy(n).multiply(Ct),Math.abs(bt.copy(Zo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ct.setFromEuler(fl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ct),Math.abs(bt.copy(Gs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ct.setFromEuler(fl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ct),Math.abs(bt.copy(jo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ct.setFromEuler(fl.set(0,Math.PI/2,0)),bt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Up.lookAt(Dp,bt,Gs)),o.quaternion.multiply(Ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),nn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),nn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(nn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(bt.copy(Zo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(bt.copy(Gs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(bt.copy(jo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(bt.copy(jo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(bt.copy(Zo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(bt.copy(Gs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(pl.copy(n),bt.copy(this.eye).applyQuaternion(Ct.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Up.lookAt(this.eye,Dp,Gs)),o.name==="X"&&(Ct.setFromAxisAngle(Zo,Math.atan2(-bt.y,bt.z)),Ct.multiplyQuaternions(pl,Ct),o.quaternion.copy(Ct)),o.name==="Y"&&(Ct.setFromAxisAngle(Gs,Math.atan2(bt.x,bt.z)),Ct.multiplyQuaternions(pl,Ct),o.quaternion.copy(Ct)),o.name==="Z"&&(Ct.setFromAxisAngle(jo,Math.atan2(bt.y,bt.x)),Ct.multiplyQuaternions(pl,Ct),o.quaternion.copy(Ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},vu=class extends ge{constructor(){super(new Ai(1e5,1e5,2,2),new zn({visible:!1,wireframe:!0,side:Jt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ml.copy(Zo).applyQuaternion(t==="local"?this.worldQuaternion:gl),qo.copy(Gs).applyQuaternion(t==="local"?this.worldQuaternion:gl),Yo.copy(jo).applyQuaternion(t==="local"?this.worldQuaternion:gl),bt.copy(qo),this.mode){case"translate":case"scale":switch(this.axis){case"X":bt.copy(this.eye).cross(ml),di.copy(ml).cross(bt);break;case"Y":bt.copy(this.eye).cross(qo),di.copy(qo).cross(bt);break;case"Z":bt.copy(this.eye).cross(Yo),di.copy(Yo).cross(bt);break;case"XY":di.copy(Yo);break;case"YZ":di.copy(ml);break;case"XZ":bt.copy(Yo),di.copy(qo);break;case"XYZ":case"E":di.set(0,0,0);break}break;case"rotate":default:di.set(0,0,0)}di.length()===0?this.quaternion.copy(this.cameraQuaternion):(Np.lookAt(nn.set(0,0,0),di,bt),this.quaternion.setFromRotationMatrix(Np)),super.updateMatrixWorld(e)}};var Fp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Ws=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new wu(e)}),this.register(function(e){return new Tu(e)}),this.register(function(e){return new Ru(e)}),this.register(function(e){return new Iu(e)}),this.register(function(e){return new Pu(e)}),this.register(function(e){return new Lu(e)}),this.register(function(e){return new Eu(e)}),this.register(function(e){return new Au(e)}),this.register(function(e){return new Cu(e)}),this.register(function(e){return new Du(e)}),this.register(function(e){return new Uu(e)}),this.register(function(e){return new Nu(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new Ou(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new Su,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},nt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},bu="KHR_mesh_quantization",Dn={};Dn[en]=nt.NEAREST;Dn[Ec]=nt.NEAREST_MIPMAP_NEAREST;Dn[Ns]=nt.NEAREST_MIPMAP_LINEAR;Dn[Zt]=nt.LINEAR;Dn[Ur]=nt.LINEAR_MIPMAP_NEAREST;Dn[un]=nt.LINEAR_MIPMAP_LINEAR;Dn[si]=nt.CLAMP_TO_EDGE;Dn[Cn]=nt.REPEAT;Dn[mr]=nt.MIRRORED_REPEAT;var Op={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},xb=new ze,Bp=12,_b=1179937895,yb=2,zp=8,vb=1313821514,bb=5130562;function Jo(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function Mb(i){return new TextEncoder().encode(i).buffer}function Sb(i){return Jo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function wb(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=ct.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Vp(i){return Math.ceil(i/4)*4}function Mu(i,e=0){let t=Vp(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function kp(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Tb(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var Su=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(c);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=Mu(d.result),g=new DataView(new ArrayBuffer(zp));g.setUint32(0,f.byteLength,!0),g.setUint32(4,bb,!0);let x=Mu(Mb(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(zp));m.setUint32(0,x.byteLength,!0),m.setUint32(4,vb,!0);let p=new ArrayBuffer(Bp),b=new DataView(p);b.setUint32(0,_b,!0),b.setUint32(4,yb,!0);let S=Bp+m.byteLength+x.byteLength+g.byteLength+f.byteLength;b.setUint32(8,S,!0);let _=new Blob([p,m,x,g,f],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(_),E.onloadend=function(){t(E.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new y;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new y;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===At?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof ws&&(e=await this.decompressTextureAsync(e)),t instanceof ws&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=kp();c.width=o,c.height=a;let l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);let u=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);let f=n(e),g=l.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}if(r){l.drawImage(r,0,0,o,a);let f=n(t),g=l.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}l.putImageData(u,0,0);let d=(e||t).clone();return d.source=new qi(c),d.colorSpace=$n,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case nt.BYTE:case nt.UNSIGNED_BYTE:a=1;break;case nt.SHORT:case nt.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;r===nt.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);let l=Vp(s*c),u=new DataView(new ArrayBuffer(l)),h=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[g*e.itemSize+x]:(x===0?m=e.getX(g):x===1?m=e.getY(g):x===2?m=e.getZ(g):x===3&&(m=e.getW(g)),e.normalized===!0&&(m=ct.normalize(m,e.array))),t===nt.FLOAT?u.setFloat32(h,m,!0):t===nt.INT?u.setInt32(h,m,!0):t===nt.UNSIGNED_INT?u.setUint32(h,m,!0):t===nt.SHORT?u.setInt16(h,m,!0):t===nt.UNSIGNED_SHORT?u.setUint16(h,m,!0):t===nt.BYTE?u.setInt8(h,m):t===nt.UNSIGNED_BYTE&&u.setUint8(h,m),h+=a}h%c!==0&&(h+=c-h%c)}let d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(d.target=r),r===nt.ARRAY_BUFFER&&(d.byteStride=c),this.byteOffset+=l,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Mu(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=nt.FLOAT;else if(e.array.constructor===Int32Array)a=nt.INT;else if(e.array.constructor===Uint32Array)a=nt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=nt.SHORT;else if(e.array.constructor===Uint16Array)a=nt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=nt.BYTE;else if(e.array.constructor===Uint8Array)a=nt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=wb(e,n,s),l;t!==void 0&&(l=e===t.index?nt.ELEMENT_ARRAY_BUFFER:nt.ARRAY_BUFFER);let u=this.processBufferView(e,a,n,s,l),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});let u=o.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);let d={mimeType:s},f=kp();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==xn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(Tb(f,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):d.uri=br.getDataURL(f,s);let x=a.images.push(d)-1;return u[h]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Dn[e.magFilter],minFilter:Dn[e.minFilter],wrapS:Dn[e.wrapS],wrapT:Dn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof ws&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,a)});let c=r.textures.push(a)-1;return s.textures.set(e,c),c}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(Jo(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Jt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});let o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,E=e.material.length;_<E;_++)s.push(e.material[_].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=nt.LINES:e.isLineLoop?a=nt.LINE_LOOP:e.isLine?a=nt.LINE_STRIP:e.isPoints?a=nt.POINTS:a=e.material.wireframe?nt.LINES:nt.TRIANGLES;let c={},l={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let E=o.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(E))){l[_]=t.attributes.get(this.getUID(E));continue}g=null;let I=E.array;_==="JOINTS_0"&&!(I instanceof Uint16Array)&&!(I instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new ft(new Uint16Array(I),E.itemSize,E.normalized)):(I instanceof Uint32Array||I instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Ws.Utils.toFloat32BufferAttribute(E));let L=this.processAccessor(g||E,o);L!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,E),l[_]=L,t.attributes.set(this.getUID(E),L))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let _=[],E=[],A={};if(e.morphTargetDictionary!==void 0)for(let I in e.morphTargetDictionary)A[e.morphTargetDictionary[I]]=I;for(let I=0;I<e.morphTargetInfluences.length;++I){let L={},w=!1;for(let M in o.morphAttributes){if(M!=="position"&&M!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let P=o.morphAttributes[M][I],F=M.toUpperCase(),H=o.attributes[M];if(t.attributes.has(this.getUID(P,!0))){L[F]=t.attributes.get(this.getUID(P,!0));continue}let V=P.clone();if(!o.morphTargetsRelative)for(let k=0,G=P.count;k<G;k++)for(let K=0;K<P.itemSize;K++)K===0&&V.setX(k,P.getX(k)-H.getX(k)),K===1&&V.setY(k,P.getY(k)-H.getY(k)),K===2&&V.setZ(k,P.getZ(k)-H.getZ(k)),K===3&&V.setW(k,P.getW(k)-H.getW(k));L[F]=this.processAccessor(V,o),t.attributes.set(this.getUID(H,!0),L[F])}h.push(L),_.push(e.morphTargetInfluences[I]),e.morphTargetDictionary!==void 0&&E.push(A[I])}c.weights=_,E.length>0&&(c.extras={},c.extras.targetNames=E)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let m=!1;if(x&&o.index===null){let _=[];for(let E=0,A=o.attributes.position.count;E<A;E++)_[E]=E;o.setIndex(_),m=!0}let p=x?e.material:[e.material],b=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,E=b.length;_<E;_++){let A={mode:a,attributes:l};if(this.serializeUserData(o,A),h.length>0&&(A.targets=h),o.index!==null){let L=this.getUID(o.index);(b[_].start!==void 0||b[_].count!==void 0)&&(L+=":"+b[_].start+":"+b[_].count),t.attributes.has(L)?A.indices=t.attributes.get(L):(A.indices=this.processAccessor(o.index,o,b[_].start,b[_].count),t.attributes.set(L,A.indices)),A.indices===null&&delete A.indices}let I=await this.processMaterialAsync(p[b[_].materialIndex]);I!==null&&(A.material=I),u.push(A)}m===!0&&o.setIndex(null),c.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,c)});let S=n.meshes.push(c)-1;return t.meshes.set(r,S),S}detectMeshQuantization(e,t){if(this.extensionsUsed[bu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Fp[s]&&Fp[s].includes(n)&&(this.extensionsUsed[bu]=!0,this.extensionsRequired[bu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ct.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=Ws.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){let u=r[l],h=mt.parseTrackName(u.name),d=mt.findNode(t,h.nodeName),f=Op[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}let g=1,x=u.values.length/u.times.length;f===Op.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let m;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):u.getInterpolation()===Ms?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new ft(u.times,g)),output:this.processAccessor(new ft(u.values,x)),interpolation:m}),o.push({sampler:a.length-1,target:{node:s.get(d),path:f}})}let c={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,c),n.animations.push(c),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],c=new Float32Array(r.bones.length*16),l=new ut;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),l.copy(r.boneInverses[h]),l.multiply(e.bindMatrix).toArray(c,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ft(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();Jo(a,[0,0,0,1])||(r.rotation=a),Jo(c,[0,0,0])||(r.translation=c),Jo(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),Sb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let c=0,l=e.children.length;c<l;c++){let u=e.children[c];if(u.visible||n.onlyVisible===!1){let h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let c=e.children[o];if(c.visible||n.onlyVisible===!1){let l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new ci;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof ci?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},wu=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},Tu=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Eu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Au=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Cu=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Ru=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Iu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Pu=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Lu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(xb)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Du=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Uu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Nu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Fu=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Ou=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new ut,l=new y,u=new st,h=new y;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,u,h),l.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new ft(r,3)),ROTATION:n.processAccessor(new ft(o,4)),SCALE:n.processAccessor(new ft(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Ws.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=mt.parseTrackName(o.name),c=mt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(xr)}let l=c.morphTargetInfluences.length,u=c.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[c.uuid]===void 0){h=o.clone();let f=new h.ValueBufferType(l*h.times.length);for(let g=0;g<h.times.length;g++)f[g*l+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[c.uuid]=h,t.push(h);continue}let d=o.createInterpolant(new o.ValueBufferType(1));h=n[c.uuid];for(let f=0;f<h.times.length;f++)h.values[f*l+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(h,o.times[f]);h.values[g*l+u]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){let e=new ft(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};function _l(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new dt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Hp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let g=Hp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Hp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ft(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var vl=0,Eb=1,Ab=new y,Gp=new Fo,Bu=new mn,Wp=new y,yl=new En,bl=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ml,this.unassigned=new Ml,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new zu(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let c=new y;c.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(c)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let c=n[o],l=c.distanceToPoint(e.origin),u=c.normal.dot(e.direction);if(l>0&&u>=0)return null;let h=u!==0?-l/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Ab)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===vl){let c=a.distanceToPoint(t.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new y,t=new y,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],c=a.point;for(let l=0;l<3;l++)c.getComponent(l)<e.getComponent(l)&&(e.setComponent(l,c.getComponent(l)),n[l]=a);for(let l=0;l<3;l++)c.getComponent(l)>t.getComponent(l)&&(t.setComponent(l,c.getComponent(l)),s[l]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],c=s[o],l,u;r=0,Gp.set(a.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==c){Gp.closestPointToPoint(g.point,!0,Wp);let x=Wp.distanceToSquared(g.point);x>r&&(r=x,l=g)}}r=-1,Bu.setFromCoplanarPoints(a.point,c.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let g=e[d];if(g!==a&&g!==c&&g!==l){let x=Math.abs(Bu.distanceToPoint(g.point));x>r&&(r=x,u=g)}}let h=[];if(Bu.distanceToPoint(u.point)<0){h.push(Qn.create(a,c,l),Qn.create(u,c,a),Qn.create(u,l,c),Qn.create(u,a,l));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(Qn.create(a,l,c),Qn.create(u,a,c),Qn.create(u,c,l),Qn.create(u,l,a));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){let g=e[d];if(g!==a&&g!==c&&g!==l&&g!==u){r=this.tolerance;let x=null;for(let m=0;m<4;m++){let p=this.faces[m].distanceToPoint(g.point);p>r&&(r=p,x=this.faces[m])}x!==null&&this._addVertexToFace(g,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===vl&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=Eb;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===vl&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=Qn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Qn=class i{constructor(){this.normal=new y,this.midpoint=new y,this.area=0,this.constant=0,this.outside=null,this.mark=vl,this.edge=null}static create(e,t,n){let s=new i,r=new Ko(e,s),o=new Ko(t,s),a=new Ko(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return yl.set(e.point,t.point,n.point),yl.getNormal(this.normal),yl.getMidpoint(this.midpoint),this.area=yl.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ko=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},zu=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Ml=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Pi=class extends dt{constructor(e=[]){super();let t=[],n=[],r=new bl().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],c=a.edge;do{let l=c.head().point;t.push(l.x,l.y,l.z),n.push(a.normal.x,a.normal.y,a.normal.z),c=c.next}while(c!==a.edge)}this.setAttribute("position",new Ue(t,3)),this.setAttribute("normal",new Ue(n,3))}};var Qo=48,Cb=3,Rb=128,Vn=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),Ib=(i,e,t)=>Math.max(e,Math.min(t,i)),Pb=()=>structuredClone(Vn.shield),$o=(i,e,t,n)=>Number.isFinite(i)?Ib(i,t,n):e;function ei(i){let e=i?.mode==="lathe"?Vn.bottle:Pb(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=Qo?i.points.map(o=>[$o(o?.[0],0,-1.5,1.5),$o(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:$o(i?.depth,e.depth,.025,1.5),bevel:$o(i?.bevel,e.bevel,0,.15),segments:Math.round($o(i?.segments,32,Cb,Rb))}}function ea(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function Sl(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function Lb(i,e,t,n){let s=Sl(i,e,t),r=Sl(i,e,n),o=Sl(t,n,i),a=Sl(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function wl(i){let e=ei(i),t=e.mode==="lathe"?e.points:ea(e);if(t.length<3||t.length>Qo*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&Lb(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Tl(i){let e=ei(i),t=wl(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new re(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new re(0,s[0].y)),s.at(-1).x>0&&s.push(new re(0,s.at(-1).y)),n=new Po(s,e.segments);let r=[],o=n.attributes.position,a=new y,c=new y,l=new y,u=new y,h=n.index.array;for(let d=0;d<h.length;d+=3)a.fromBufferAttribute(o,h[d]),c.fromBufferAttribute(o,h[d+1]),l.fromBufferAttribute(o,h[d+2]),u.crossVectors(c.sub(a),l.sub(a)).lengthSq()>1e-16&&r.push(h[d],h[d+1],h[d+2]);n.setIndex(r)}else{let s=ea(e),r=new Ei;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new Es(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new ft(new Float32Array(s*2),2))}return n}function Xr(i="box"){let e=i==="cone"?Vn.bottle:i==="cylinder"?Vn.bowl:i==="diamond"?Vn.shield:Vn.panel;return ei(e)}var yn=Math.PI*2,El=.84,Li=128;function rs(i){let e=new Uint8Array(Li*Li*4);for(let n=0;n<Li;n++)for(let s=0;s<Li;s++){let r=(s+.5)/Li,o=(n+.5)/Li,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/El,1),Math.min(o/El,1),s,n),c=(s+n*Li)*4;for(let l=0;l<3;l++)e[c+l]=ct.clamp(Math.round(a[l]),0,255);e[c+3]=255}let t=new ji(e,Li,Li);return t.colorSpace=At,t.generateMipmaps=!0,t.minFilter=un,t.magFilter=Zt,t.needsUpdate=!0,t}function Xs(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function $e(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new ze(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let c=0;c<o;c++)s.toArray(a,c*3),t?r.setXY(c,r.getX(c)*El,r.getY(c)*El):r.setXY(c,.95,.95);return n.setAttribute("color",new ft(a,3)),n}function os(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:_l(s),material:new ln({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Xp(i,e,t){let n=i/2,s=e/2,r=new Ei;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function is(i,e,t,n,s){return new Es(Xp(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ss(i,e,t=n=>n){let n=[],s=[],r=[];for(let u=0;u<i.length;u++){let[h,d]=i[u];for(let f=0;f<=e;f++){let g=yn*f/e,x=t(h,d,g,u);if(n.push(x*Math.sin(g),d,x*Math.cos(g)),s.push(f/e,u/(i.length-1)),u===i.length-1||f===e)continue;let m=u*(e+1)+f,p=m+e+1;h>0&&r.push(m,m+1,p),i[u+1][0]>0&&r.push(m+1,p+1,p)}}let o=new dt;o.setAttribute("position",new Ue(n,3)),o.setAttribute("uv",new Ue(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,c=new y,l=new y;for(let u=0;u<i.length;u++){let h=u*(e+1),d=h+e;c.fromBufferAttribute(a,h).add(l.fromBufferAttribute(a,d)).normalize(),a.setXYZ(h,c.x,c.y,c.z),a.setXYZ(d,c.x,c.y,c.z)}return o}function ta(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new y(0,s,0));continue}for(let r=0;r<e;r++){let o=yn*r/e;t.push(new y(n*Math.sin(o),s,n*Math.cos(o)))}}return new Pi(t)}function Db(){let t=new Lo(Xp(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let c=0;c<n.count;c++){let l=ct.clamp(n.getX(c)/.098+.5,0,1),u=ct.clamp((n.getY(c)+.001)/.185+.5,0,1);t.attributes.uv.setXY(c,l,u)}let s=rs((c,l)=>{let u=Math.exp(-((c-.68)**2*7+(l-.24)**2*5)),h=.5+.5*Math.sin((l*1.5+c*.6)*yn),d=l>.033&&l<.05&&c>.3&&c<.7,f=l>.955&&l<.982&&c>.39&&c<.61,g=l>.926&&l<.938&&c>.78&&c<.9;return f?[18,27,42]:d||g?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[$e(is(.106,.207,.013,.011,.0019),8425890),$e(is(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),$e(is(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),$e(t,16777215,!0),$e(is(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),$e(new et(.0036,.024,.004).translate(.055,.029,0),11714250),$e(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),$e(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[c,l]of[[-.034,.08],[-.022,.059]])r.push($e(new vt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(c,l,-.0138),1580841)),r.push($e(new gn(.0055,10).rotateY(Math.PI).translate(c,l,-.01515),4350847));r.push($e(new gn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Pi([-.0152,.0117].flatMap(c=>o.map(([l,u])=>new y(l,u,c))));return os("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Ub(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,c)=>{let l=c/20;return[c===0||c===20?0:.062*Math.sin(Math.PI*l)**.31,(l*2-1)*.275]}),s=ss(t,18,(a,c,l)=>{let u=Math.max(0,-Math.sin(l)),h=.035*Math.cos(l),d=Math.max(...e.map(f=>Math.exp(-(((c-f+h)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(l*3+7*c))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=rs((a,c,l,u)=>{let h=yn*a,d=(c*2-1)*.275,f=Math.max(0,-Math.sin(h)),g=Math.max(...e.map(b=>Math.exp(-(((d-b+.035*Math.cos(h))/.009)**2)))),x=f**3*g,m=Xs(l,u)-.5,p=9*Math.sin(a*180+c*43)*Math.cos(c*29)+20*m;return[150+29*f+58*x+p,76+24*f+70*x+p,24+11*f+52*x+p*.8]}),o=ta([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return os("bread","Baguette de pain",.27,o,[$e(s,16777215,!0)],r,.9)}function Nb(){let i=rs((r,o,a,c)=>{let l=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,g=46+12*Xs(a,c)-(l&&(h||d)?35:0);return[g*.94,g,g*1.04]}),e=ss([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ss([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[$e(e,16777215,!0),$e(t,11056059),$e(new vt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),$e(new vt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=yn*r/5;n.push($e(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=ta([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return os("wheel","Roue",1.8,s,n,i,.64,.23)}function Fb(){let i=rs((r,o,a,c)=>{let l=Xs(a,c),u=o>.26&&o<.34||o>.455&&o<.475,h=l>.98?-44:19*(l-.5)+5*Math.cos(yn*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=ss([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Pn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,c)=>{let l=Math.PI+yn*c/5;return new y(r*Math.cos(l),o,r*Math.sin(l))}));n.push(new y(.166,-.027,.01),new y(.166,.053,-.01));let s=new Pi(n);return os("cup","Tasse",.39,s,[$e(e,16777215,!0),$e(t,15785922)],i,.37)}function Ob(){let i=ss([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=rs((s,r,o,a)=>{let c=9*Xs(o,a),l=11*Math.cos(s*yn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+c,128+c,43+c];if(r>.33&&r<.51){let h=40+.6*l+8*Math.cos(r*yn*48+s*yn*13)+c;return[h,h*1.08,h*1.13]}let u=63+l+c+14*Math.cos(s*yn*4);return[u,u*1.13,u*1.24]}),t=[$e(i,16777215,!0),$e(new Ir(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),$e(new gn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),$e(new gn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),$e(new vt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),$e(new gn(.008,12).translate(0,.035,.0336),15633202)],n=ta([[.033,-.143],[.054,.133]],6);return os("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function Bb(){let i=ss([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=rs((r,o,a,c)=>{let l=10*Xs(a,c);if(o<.21||o>.74)return[162+l,174+l,181+l];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(yn*r*2));if(e[d]?.[h]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+l,224+l,169+l];let g=20*Math.cos(yn*r*2)+l;return[173+g,27+g*.28,55+g*.5]}),n=[$e(i,16777215,!0),$e(new gn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),$e(new Ir(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),$e(new gn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=ta([[.069,-.112],[.069,.109]],6);return os("soda","Canette de soda",.35,s,n,t,.42,.27)}function zb(){let i=ss([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=rs((s,r,o,a)=>{let c=15*Xs(o,a),l=8*Math.cos(s*yn*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+c-h,236+c-h,216+c-h]}return[206+c+l,67+c+l,16+c*.7]}),t=[$e(i,16777215,!0),$e(is(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),$e(new gn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=ta([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return os("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function kb(){let i=rs((s,r,o,a)=>{let c=8*Xs(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+c,57+c,61+c];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+c,191+c,139+c]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+c,49+c,54+c]}),e=ss([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[$e(is(.138,.22,.061,.016,.004),14788675),$e(is(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),$e(new Ai(.106,.174).translate(0,-.004,.0395),16777215,!0),$e(e,2502456),$e(new vt(.014,.017,.016,10).translate(.04,.117,.001),2503482),$e(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),$e(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),$e(new gn(.004,8).translate(.04,.066,.0397),15817792),$e(new gn(.004,8).translate(-.04,.066,.0397),7903100),$e(is(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,c])=>[new y(s,c,o),new y(r,c,o),new y(r,c,a),new y(s,c,a)]);return os("radio","Talkie-walkie",.43,new Pi(n),t,i,.61,.08)}function qp(){return[Db(),Ub(),Nb(),Fb(),Ob(),Bb(),zb(),kb()]}var ku=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var x1=ku.length-1,Yp=Math.min(...ku.map(i=>i[1])),Zp=Math.max(...ku.map(i=>i[1])),_1=new y(0,0,(Yp+Zp)/2),jp=new y(.047,.027,(Zp-Yp)/2);var b1=new st,M1=new y,S1=new y,w1=new ut;var T1=new y,E1=new y;var A1=new y;var C1=new y,R1=new y,I1=new y,P1=new En,L1=new y;function na(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let g=0;g<t.count;g++){let x=new y().fromBufferAttribute(t,g),m=x.toArray().map(p=>p.toFixed(5)).join(",");r.has(m)||(r.add(m),n.push(x))}for(let g=0;g<(i.index?.count??t.count);g+=3){let x=_=>new y().fromBufferAttribute(t,i.index?i.index.getX(_):_),m=x(g),p=x(g+1),b=x(g+2),S=new En(m,p,b).getNormal(new y);S.lengthSq()>.1&&s.push({a:m,b:p,c:b,n:S})}let o=e||Math.max(...n.map(g=>g.length())),{x:a,y:c,z:l}=new Vt().setFromPoints(n).getSize(new y),u=Math.max(1e-4,e**2*.4),h=e?new y().setScalar(1/u):new y(12/Math.max(.001,c*c+l*l),12/Math.max(.001,a*a+l*l),12/Math.max(.001,a*a+c*c)),d=e?2*e:Math.min(a,c,l),f=g=>{let x=[];for(let m of g)m.lengthSq()>.5&&!x.some(p=>Math.abs(p.dot(m))>.9999)&&x.push(m);return x};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:d,normals:e?[]:f(s.map(g=>g.n)),edges:e?[]:f(s.flatMap(g=>[new y().subVectors(g.b,g.a).normalize(),new y().subVectors(g.c,g.b).normalize(),new y().subVectors(g.a,g.c).normalize()]))}}var D1=new y,U1=new y,N1=new y,F1=new y,O1=new st,B1=new st,z1=new y;function Kp(i){return na(new et(i.x*2,i.y*2,i.z*2))}var k1=new y;var Jp=na(new kn(1,0).scale(...jp)),V1={mesh:{position:new y,quaternion:new st},shape:Jp,radius:Jp.radius,precise:!0};var H1=new y,G1=new y,W1=new y,X1=new st,q1=new st,Y1=new st;var Z1=new y,j1=new y,J1=new y,K1=new y;var $1=new y;var Q1=new y,eT=new y,tT=new y,nT=new y,iT=new y,sT=new y,rT=new y;var oT={mesh:{position:null,quaternion:new st},shape:{sphereRadius:0,normals:[],edges:[]}};var Ut=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),cT=Ut(-24,24,-51,7);var $p={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Ut(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Ut(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Ut(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Ut(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Ut(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Ut(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Ut(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Ut(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Ut(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Ut(9,23,-48,-37),sign:[16,-38.2]}},lT=[Ut(-9,-6,-51,7),Ut(6,9,-51,7),Ut(-24,24,-8,-5),Ut(-24,24,-27,-23),Ut(9,23,-37,-34)],hT=[{name:"Glace",bounds:$p.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:$p.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Ut(-9,9,-51,7)},{name:"Sol ouest",bounds:Ut(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Ut(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Ut(-24,-23,-51,7)},{name:"Sol est",bounds:Ut(9,23,-51,-48)},{name:"Sol est",bounds:Ut(9,23,-37,7)},{name:"Bordure est",bounds:Ut(23,24,-51,7)}];var Vb=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i})));var uT={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Qp(){let i=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ji(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new As(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ji(.6,4),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:na(t,s),material:new ln({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Kp(t.computeBoundingBox()??t.boundingBox.getSize(new y).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of qp()){let s=na(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var Hb=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],ia=null,Gb=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function sa(i){return typeof i=="string"&&Gb.has(i.replace(/^custom-model-game-/,""))}function tm(i){let e=i?.parts;return sa(i?.id)||sa(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>sa(t?.assetId))}function nm(){if(ia)return ia;let i=Qp(),e=Hb;return ia=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),ia.set("chrome-sphere",{geometry:new Ji(.54,2),material:new ln({color:"#c8e6ed",metalness:1,roughness:.16})}),ia}function Al(i){return typeof i=="string"&&nm().has(i)}function Vu(i){return nm().get(i)??null}function Wb(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function em(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[Wb(e,i)]}}function im(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>em(e,t)),em("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Xu="gorilla-lab-models-v1",Et=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),Xb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,qr=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Cl=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),qs=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),qu=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),ra=(i,e,t,n)=>Number.isFinite(i)?ct.clamp(i,e,t):n;function aa(i){return{gravity:ra(i?.physics?.gravity,0,2.5,1),bounce:ra(i?.physics?.bounce,0,1.65,1)}}function Yr(i){return{projection:i?.uv?.projection==="metric"?"metric":"native",repeat:ra(i?.uv?.repeat,.01,100,1),angle:ra(i?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>ra(i?.uv?.offset?.[t],-100,100,0))}}var ca=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),qb=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Yb=/^#[a-f\d]{6}$/i;function sm(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function as(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?ct.clamp(i[s],t,n):e)}var Gu=new Set(["box","sphere","capsule","convex"]);function Zb(i){if(i?.mode==="box")return{mode:"box",center:as(i.center,0,-6,6),size:as(i.size,.5,.025,12)};let e=Math.round(ct.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:Gu.has(i.shape)?i.shape:"box",center:as(i.center,0,-6,6),size:as(i.size,.5,.025,12),rotation:as(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&Gu.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Di(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>Et.models||JSON.stringify(i).length>Et.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:i.models.filter(n=>!tm(n)).map(n=>{if(typeof n?.id!="string"||!qb.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>Et.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(n.id),{id:n.id,name:sm(n.name,"Mod\xE8le sans nom"),kind:n.kind==="structure"?"structure":"prop",...Al(n.assetId)?{assetId:n.assetId}:{},inGame:n.inGame===!0,properties:Object.fromEntries(Object.entries(ca).map(([s,r])=>[s,typeof n.properties?.[s]=="boolean"?n.properties[s]:r])),hitbox:Zb(n?.hitbox),...n.physics?{physics:aa(n)}:{},...n.partCollisions===!0?{partCollisions:!0}:{},parts:n.parts.filter(s=>!sa(s?.assetId)).map((s,r)=>({name:sm(s?.name,`Pi\xE8ce ${r+1}`),...Number.isInteger(s?.group)&&s.group>0&&s.group<=Et.parts?{group:s.group}:{},shape:s?.shape==="asset"&&Al(s?.assetId)?"asset":Object.hasOwn(qr,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&Al(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:ei(s?.profile)}:{},position:as(s?.position,0,-3,3),rotation:as(s?.rotation,0,-360,360),scale:as(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&Yb.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(qu,s?.zone)?{zone:s.zone}:{},...Object.hasOwn(qs,s?.finish)?{finish:s.finish}:{},...s?.uv?{uv:Yr(s)}:{},surface:Object.hasOwn(Cl,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=Et.textureBytes&&Xb.test(s.texture)?s.texture:null}))}}),avatarId:typeof i.avatarId=="string"&&e.has(i.avatarId)?i.avatarId:null}}function rm(i){try{let e=(i??globalThis.localStorage)?.getItem(Xu);if(e&&e.length<=Et.fileBytes)return Di(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function jb(i){switch(i){case"tetrahedron":return new As(Math.sqrt(3)/2);case"sphere":return new Ki(.5,20,12);case"cylinder":return new vt(.5,.5,1,20);case"cone":return new Mo(.5,1,20);case"torus":return new Pn(.365,.135,8,24);case"capsule":return new Er(.28,.44,6,16);case"diamond":return new kn(.5);default:return new et(1,1,1)}}var om=Object.keys(Cl),Un=64,oa=4,am=2,fi;function cm(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function lm(){if(fi)return fi;let i=Un*oa,e=Un*am,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/Un)*oa+Math.floor(s/Un),o=cm(om[r],s%Un,n%Un),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return fi=new ji(t,i,e),fi.colorSpace=At,fi.magFilter=Zt,fi.minFilter=un,fi.generateMipmaps=!0,fi.needsUpdate=!0,fi}var Hu=new Map;function Jb(i){if(Hu.has(i))return Hu.get(i);let e=new Uint8Array(Un*Un*4);for(let n=0;n<Un;n++)for(let s=0;s<Un;s++){let r=cm(i,s,n),o=(n*Un+s)*4;e.set([r,r,r,255],o)}let t=new ji(e,Un,Un);return t.colorSpace=At,t.wrapS=t.wrapT=Cn,t.magFilter=Zt,t.minFilter=un,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Hu.set(i,t),t}function Rl(i){return!!(i?.texture||i?.uv||i?.shape==="asset"||i?.finish&&i.finish!=="original")}function Kb(i,e,t){let{projection:n,repeat:s,angle:r,offset:o}=Yr(e),a=ct.degToRad(r),c=Math.cos(a),l=Math.sin(a),{position:u,normal:h,uv:d}=i.attributes,f=new y,g=new y;for(let x=0;x<u.count;x++){let m=d.getX(x),p=d.getY(x);if(n==="metric"){f.fromBufferAttribute(u,x).multiply(t),g.fromBufferAttribute(h,x);let b=Math.abs(g.x),S=Math.abs(g.y),_=Math.abs(g.z);b>=S&&b>=_?(m=f.z,p=f.y):S>=_?(m=f.x,p=f.z):(m=f.x,p=f.y)}d.setXY(x,(m*c-p*l)*s+o[0],(m*l+p*c)*s+o[1])}}function Ys(i,e=new y(...i.scale)){let t=i.shape==="asset"?Vu(i.assetId):null,n=i.shape==="custom"?Tl(i.profile):t?.geometry?.clone()??jb(i.shape),s=n.index?n.toNonIndexed():n;s!==n&&n.dispose(),s.attributes.uv||s.setAttribute("uv",new Ue(new Float32Array(s.attributes.position.count*2),2)),i.uv&&Kb(s,i,e);let r=i.rotation.map(ct.degToRad);s.scale(...i.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...i.position);let o=new ze(i.color),a=s.attributes.position.count,c=new Float32Array(a*3),l=s.attributes.uv,u=om.indexOf(i.surface),h=u%oa,d=Math.floor(u/oa),f=s.attributes.color;for(let g=0;g<a;g++)i.shape==="asset"&&f?(c[g*3]=f.getX(g)*o.r,c[g*3+1]=f.getY(g)*o.g,c[g*3+2]=f.getZ(g)*o.b):o.toArray(c,g*3),i.shape!=="asset"&&!i.texture&&!i.uv&&l.setXY(g,(h+.05+l.getX(g)*.9)/oa,(d+.05+l.getY(g)*.9)/am);return s.setAttribute("color",new ft(c,3)),s}function Il(i){let e=i?.shape==="asset"?Vu(i.assetId):null,t=qs[i?.finish];if(e?.material){let o=e.material.clone();if(t&&i.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),i.texture){o.map?.dispose();let a=new Lr().load(i.texture);a.colorSpace=At,a.wrapS=a.wrapT=Cn,o.map=a}return i.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Cn),i.color&&i.color!=="#ffffff"&&o.color?.multiply(new ze(i.color)),o.needsUpdate=!0,o}let{roughness:n,metalness:s}=t??qs.original;if(!i?.texture)return new ln({vertexColors:!0,map:i?.uv?Jb(i.surface):lm(),roughness:n,metalness:s});let r=new Lr().load(i.texture);return r.colorSpace=At,r.wrapS=r.wrapT=Cn,new ln({vertexColors:!0,map:r,roughness:n,metalness:s})}function hm(i){return i?.parts?.some(Rl)?i.parts.map(Il):new ln({vertexColors:!0,map:lm(),roughness:.68})}function Yu(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==fi&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Wu(i,e=null){let t=i.map(s=>{if(!e||s.uv?.projection!=="metric")return Ys(s);let r=new jt(...s.rotation.map(ct.degToRad),"ZYX"),o=new y(...s.scale).multiply(new y(...[0,1,2].map(a=>new y().setComponent(a,1).applyEuler(r).multiply(e).length())));return Ys(s,o)}),n=_l(t,i.some(Rl));return t.forEach(s=>s.dispose()),n.center(),n.computeBoundingBox(),n}function um(i,e=null){let t=Wu(i.parts),n=t.boundingBox.getSize(new y).max(new y(1e-5,1e-5,1e-5));return e&&i.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Wu(i.parts,e.clone().divide(n))),t.scale(1/n.x,1/n.y,1/n.z),t.computeBoundingBox(),t}function dm(i){let e=new Vt;for(let t of i.parts??[]){let n=Ys(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new y,new y(1,1,1)),e}function Ui(i){let e=dm(i),t=e.getCenter(new y),n=e.getSize(new y),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Gu.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?ct.clamp(s.precision,8,96):48,center:r?new y(...s.center):t,size:r?new y(...s.size):n,rotation:r?new y(...s.rotation??[0,0,0]):new y,boundsCenter:t,boundsSize:n}}function $b(i,e){let t=i.attributes.position,n=[],s=new Set;for(let c=0;c<t.count;c++){let l=new y().fromBufferAttribute(t,c),u=l.toArray().map(h=>h.toFixed(4)).join(",");s.has(u)||(s.add(u),n.push(l))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(c=>c.distanceToSquared(r[0]));for(;r.length<e;){let c=-1,l=-1;for(let u=0;u<n.length;u++)!o.has(u)&&a[u]>l&&(c=u,l=a[u]);if(c<0)break;o.add(c),r.push(n[c]);for(let u=0;u<n.length;u++)a[u]=Math.min(a[u],n[u].distanceToSquared(n[c]))}return r}function fm(i,e=null){let t=Ui(i),n=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new y(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),c=(t.shape==="sphere"?o:Math.max(...r.filter((h,d)=>d!==a)))/2,l=Math.max(0,o-2*c),u=t.shape==="capsule"&&l>1e-5?new Er(c,l,Math.max(2,Math.round(n/8)),n):new Ki(c,n,Math.max(6,Math.floor(n/2)));return t.shape==="capsule"&&l>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/s.x,1/s.y,1/s.z),u}if(t.shape==="convex"&&i.parts?.length){let s=Wu(i.parts),r=$b(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new Pi(r),a=t.boundsSize.clone().max(new y(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new et(1,1,1)}function pm(i,e=null){if(!i.partCollisions||i.kind!=="structure")return null;if(i.properties?.collidable===!1)return[];let t=dm(i),n=t.getCenter(new y),s=t.getSize(new y).max(new y(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new y(1,1,1);return i.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Ys(o);a.computeBoundingBox();let c=a.boundingBox,l={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:c.getCenter(new y).sub(n).multiply(r),size:c.getSize(new y).multiply(r).max(new y(.01,.01,.01))};return a.dispose(),[l]})}var mm=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],gm=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},_m=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",la=(i,e,t)=>Math.min(t,Math.max(e,i)),Qb=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Zu=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function eM(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function xm(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=_m(t),r.fillRect(0,0,o,o);let a=eM(s),c=la(64/n,12,192),l=u=>{r.fillStyle=u>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(u)};if(["grain","soil","rock","grass","wood"].includes(e)){let u=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let h=0;h<u;h++){let d=a()*o,f=a()*o,g=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,x=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;l((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),Zu(r,m=>m.fillRect(d,f,g,x))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let u=Math.ceil(o/c);if(e==="dots"){l(.36);for(let h=0;h<u;h++)for(let d=0;d<u;d++)Zu(r,f=>{f.beginPath(),f.arc(d*c+c/2,h*c+c/2,la(c*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let h=0;h<o;h+=c/2)r.fillRect(h,0,Math.max(2,c/10),o)}else if(e==="woven"){for(let h=0;h<o;h+=c/5)r.fillStyle=h%(c*2)<c?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,h,o,Math.max(1,c/13));for(let h=0;h<o;h+=c/5)r.fillStyle=h%(c*2)<c?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(h,0,Math.max(1,c/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let h=0;h<=o;h+=c)r.beginPath(),r.moveTo(0,h),r.lineTo(o,h),r.stroke();for(let h=0;h<o;h+=c)for(let d=0;d<=o;d+=c){let f=e==="brick"&&Math.floor(h/c)%2?c/2:0;e!=="brick"&&h>0||(r.beginPath(),r.moveTo(d+f,h),r.lineTo(d+f,h+c),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let h=c/2;h<o;h+=c)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke()}}}r.globalAlpha=1}var tM=`
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
`;function nM(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=tM,document.head.append(i)}async function iM(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function ym({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){nM();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=Y=>o.querySelector(Y),c=a(".texture-canvas"),l=a(".texture-tile"),u=gm(),h=gm(),d={pattern:mm.some(([Y])=>Y===n)?n:"grain",base:_m(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=c.getContext("2d",{willReadFrequently:!0}),g=u.getContext("2d",{willReadFrequently:!0}),x=h.getContext("2d",{willReadFrequently:!0}),m=[],p=[],b=!1,S=!1,_=null,E="paint",A=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...mm.map(([Y,ae])=>new Option(ae,Y))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let Y of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+Y+"]").addEventListener("input",ae=>{d[Y]=["scale","size","opacity","hardness"].includes(Y)?Number(ae.target.value):ae.target.value});let I=Y=>{a("[data-status]").textContent=Y},L=()=>{f.clearRect(0,0,512,512),f.drawImage(u,0,0),f.drawImage(h,0,0);let Y=l.getContext("2d");Y.clearRect(0,0,256,128);for(let ae=0;ae<2;ae++)for(let Oe=0;Oe<4;Oe++)Y.drawImage(c,Oe*64,ae*64,64,64)},w=()=>({base:g.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512)}),M=Y=>{g.putImageData(Y.base,0,0),x.putImageData(Y.top,0,0),L()},P=()=>{m.push(w()),m.length>16&&m.shift(),p.length=0,b=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},F=(Y,ae)=>{Y.length&&(ae.push(w()),M(Y.pop()),a("[data-cmd=undo]").disabled=!m.length,a("[data-cmd=redo]").disabled=!p.length,b=!0)},H=()=>{b&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(P(),xm(u,d),x.clearRect(0,0,512,512),L(),I("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},V=Y=>{let ae=c.getBoundingClientRect();return{x:(Y.clientX-ae.left)/ae.width*512,y:(Y.clientY-ae.top)/ae.height*512}},k=Y=>{let ae=d.size/2,Oe=d.opacity;Zu(x,Re=>{Re.save(),E==="erase"&&(Re.globalCompositeOperation="destination-out"),Re.globalAlpha=Oe;let J=la(d.hardness,.05,1);if(E==="stamp")Re.fillStyle=d.ink,Re.translate(Y.x,Y.y),Re.rotate(Math.PI/4),Re.fillRect(-ae*.8,-ae*.8,ae*1.6,ae*1.6);else{let D=Re.createRadialGradient(Y.x,Y.y,ae*J*.85,Y.x,Y.y,ae);if(E==="erase")D.addColorStop(0,"rgba(0,0,0,1)"),D.addColorStop(1,"rgba(0,0,0,0)");else{let $=d.ink.match(/[\da-f]{2}/gi).map(ue=>parseInt(ue,16)).join(",");D.addColorStop(0,"rgba("+$+",1)"),D.addColorStop(1,"rgba("+$+",0)")}Re.fillStyle=D,Re.beginPath(),Re.arc(Y.x,Y.y,ae,0,2*Math.PI),Re.fill()}Re.restore()})},G=(Y,ae)=>{let Oe=Math.hypot(ae.x-Y.x,ae.y-Y.y),Re=Math.max(1,Math.ceil(Oe/Math.max(2,d.size*.18)));for(let J=1;J<=Re;J++)k({x:Y.x+(ae.x-Y.x)*J/Re,y:Y.y+(ae.y-Y.y)*J/Re})},K=Y=>{let ae=f.getImageData(Math.floor(la(Y.x,0,511)),Math.floor(la(Y.y,0,511)),1,1).data;d.ink="#"+[...ae].slice(0,3).map(Oe=>Oe.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,I("Couleur pr\xE9lev\xE9e sur la texture.")};c.addEventListener("pointerdown",Y=>{if(Y.button!==0||S)return;let ae=V(Y);if(E==="pick"){K(ae);return}Y.preventDefault(),P(),S=!0,_=Y.pointerId,A=ae,c.setPointerCapture(Y.pointerId),k(ae),L()}),c.addEventListener("pointermove",Y=>{if(!S||Y.pointerId!==_)return;Y.preventDefault();let ae=V(Y);E==="stamp"?k(ae):G(A,ae),A=ae,L()});let W=Y=>{Y.pointerId===_&&(S=!1,_=null,A=null,c.hasPointerCapture(Y.pointerId)&&c.releasePointerCapture(Y.pointerId))};c.addEventListener("pointerup",W),c.addEventListener("pointercancel",W);for(let Y of o.querySelectorAll("[data-tool]"))Y.onclick=()=>{E=Y.dataset.tool,o.querySelectorAll("[data-tool]").forEach(ae=>ae.setAttribute("aria-pressed",String(ae===Y)))};a("[data-cmd=generate]").onclick=H,a("[data-cmd=undo]").onclick=()=>F(m,p),a("[data-cmd=redo]").onclick=()=>F(p,m),a("[data-cmd=export]").onclick=()=>Qb(c,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async Y=>{let ae=Y.target.files?.[0];if(Y.target.value="",!!ae)try{if(!["image/png","image/jpeg","image/webp"].includes(ae.type))throw Error("Image PNG / JPG / WebP uniquement.");if(ae.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Oe=await createImageBitmap(ae);P(),g.clearRect(0,0,512,512),g.drawImage(Oe,0,0,512,512),Oe.close(),x.clearRect(0,0,512,512),L(),I("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Oe){I(Oe.message)}});let ee=Y=>{!Y&&b&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",pe,!0),o.remove())},pe=Y=>{if(Y.key==="Escape"){Y.preventDefault(),ee(!1);return}(Y.ctrlKey||Y.metaKey)&&!Y.target.closest("input,select")&&Y.key.toLowerCase()==="z"&&(Y.preventDefault(),Y.stopImmediatePropagation(),Y.shiftKey?F(p,m):F(m,p))};window.addEventListener("keydown",pe,!0),a("[data-cmd=close]").onclick=()=>ee(!1),a("[data-cmd=cancel]").onclick=()=>ee(!1);let Se=()=>{for(let Y of[512,384,256,192]){let ae=document.createElement("canvas");ae.width=ae.height=Y,ae.getContext("2d").drawImage(c,0,0,Y,Y);for(let Oe of[.85,.72,.58]){let Re=ae.toDataURL("image/webp",Oe);if(Re.length<=s)return Re}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let Y=a("[data-cmd=apply]");Y.disabled=!0;try{let ae=Se();await r(ae),b=!1,ee(!0)}catch(ae){I(ae.message||"Impossible d\u2019appliquer la texture.")}finally{Y.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,xm(u,d),L(),i&&iM(i,u).then(L).catch(()=>I("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>ee(!1)}}var sM=`
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
`;function rM(){if(document.querySelector("#forge-sketch-css"))return;let i=document.createElement("style");i.id="forge-sketch-css",i.textContent=sM,document.head.append(i)}var ju=i=>structuredClone(i),Zs=(i,e,t)=>Math.min(t,Math.max(e,i)),vm=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function oM(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s,o=Zs(r?((i[0]-e[0])*n+(i[1]-e[1])*s)/r:0,0,1);return vm(i,[e[0]+o*n,e[1]+o*s])}function bm({initial:i=Xr(),name:e="Forme libre",onApply:t=()=>{}}={}){rM();let n=document.createElement("div");n.className="forge-sketch-backdrop",n.innerHTML=`
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
  </section>`,document.body.append(n);let s=D=>n.querySelector(D);s("#sketch-title").textContent="Fa\xE7onner \xB7 "+e;let r=ei(i),o=0,a="move",c=!1,l=null,u=!1,h=null,d=null,f=null,g=[],x=[],m=600,p=m/2,b=m/2.75,S=s("#sketch-2d"),_=S.getContext("2d"),E=new ci,A=new Yt(44,1,.01,30);E.background=new ze("#1b2b34"),E.add(new Rs("#e3f7ff","#314653",2));let I=new Is("#ffd4a9",2.5);I.position.set(3,4,6),E.add(I),A.position.set(1.5,1.25,2.1),A.lookAt(0,0,0);let L=new zo(.7);E.add(L);let w=new ln({color:"#89c2cb",metalness:.25,roughness:.52,side:Jt});try{let D=s("#sketch-preview");h=new Hr({canvas:D,antialias:!0}),h.setPixelRatio(Math.min(1.5,devicePixelRatio)),d=new Wr(A,D),d.enablePan=!1,d.minDistance=.5,d.maxDistance=7,d.addEventListener("change",()=>h.render(E,A));let $=new ResizeObserver(()=>{if(!D.isConnected)return;let ue=D.getBoundingClientRect();A.aspect=Math.max(.1,ue.width/Math.max(1,ue.height)),A.updateProjectionMatrix(),h.setSize(Math.max(1,ue.width),Math.max(1,ue.height),!1),h.render(E,A)});$.observe(D),n._disposeObserver=()=>$.disconnect()}catch{s("[data-error]").textContent="Aper\xE7u WebGL indisponible ; tu peux dessiner en 2D."}function M([D,$]){return[p+D*b,p-$*b]}function P(D){let $=S.getBoundingClientRect(),ue=((D.clientX-$.left)/$.width*m-p)/b,ve=(p-(D.clientY-$.top)/$.height*m)/b;if(r.mode==="lathe"&&(ue=Math.max(0,ue)),r.symmetric&&(ue=Math.min(0,ue)),s("[data-field=snap]").checked&&!D.altKey){let ke=Number(s("[data-field=step]").value)||.05;ue=Math.round(ue/ke)*ke,ve=Math.round(ve/ke)*ke}return[Zs(ue,-1.35,1.35),Zs(ve,-1.35,1.35)]}function F(D){let $=16/b,ue=-1,ve=$;return r.points.forEach((ke,Ze)=>{let R=vm(D,ke);R<ve&&(ue=Ze,ve=R)}),ue}function H(D){let $=r.points,ve=r.mode==="extrude"&&!r.symmetric?$.length:$.length-1,ke=-1,Ze=16/b;for(let R=0;R<ve;R++){let ne=oM(D,$[R],$[(R+1)%$.length]);ne<Ze&&(ke=R,Ze=ne)}return ke}function V(){g.push(ju(r)),g.length>36&&g.shift(),x.length=0,u=!0,s("[data-act=undo]").disabled=!1,s("[data-act=redo]").disabled=!0}function k(D,$){D.length&&($.push(ju(r)),r=D.pop(),o=Zs(o,0,r.points.length-1),u=!0,pe(),G(),s("[data-act=undo]").disabled=!g.length,s("[data-act=redo]").disabled=!x.length)}function G(){_.clearRect(0,0,m,m),_.fillStyle="#15232d",_.fillRect(0,0,m,m);let $=((Number(s("[data-field=step]").value)||.05)<.05,.1);_.lineWidth=1;for(let Ze=-1.4;Ze<=1.4;Ze+=$){let R=M([Ze,0])[0],ne=M([0,Ze])[1];_.strokeStyle=Math.abs(Ze)<1e-4?"#d8a26677":"#47627148",_.beginPath(),_.moveTo(R,0),_.lineTo(R,m),_.stroke(),_.beginPath(),_.moveTo(0,ne),_.lineTo(m,ne),_.stroke()}let ue=r.mode==="extrude"?ea(r):r.points,ve=(Ze,R)=>{Ze.length&&(_.beginPath(),_.moveTo(...M(Ze[0])),Ze.slice(1).forEach(ne=>_.lineTo(...M(ne))),R&&_.closePath())};r.mode==="extrude"?(ve(ue,!0),_.fillStyle="#65b9c733",_.fill(),_.strokeStyle="#8fdce2",_.lineWidth=3,_.stroke()):(ve(ue,!1),_.strokeStyle="#8fdce2",_.lineWidth=3,_.stroke(),_.strokeStyle="#d3a261aa",_.setLineDash([8,6]),_.beginPath(),_.moveTo(p,30),_.lineTo(p,m-30),_.stroke(),_.setLineDash([])),r.symmetric&&(_.lineWidth=2,_.setLineDash([5,4]),_.strokeStyle="#daa96e99",_.beginPath(),_.moveTo(p,10),_.lineTo(p,m-10),_.stroke(),_.setLineDash([])),r.points.forEach((Ze,R)=>{let[ne,ie]=M(Ze);_.beginPath(),_.arc(ne,ie,R===o?8:6,0,Math.PI*2),_.fillStyle=R===o?"#f5c486":"#e3f0ef",_.fill(),_.strokeStyle="#344b58",_.lineWidth=2,_.stroke()});let ke=wl(r);s("[data-error]").textContent=ke??"",s("[data-act=apply]").disabled=!!ke}function K(){try{let D=Tl(r);if(s("[data-triangles]").textContent=((D.index?.count??D.attributes.position.count)/3).toLocaleString("fr-FR")+" triangles",!h){D.dispose();return}f&&(E.remove(f),f.geometry.dispose()),f=new ge(D,w),E.add(f),h.render(E,A)}catch{s("[data-triangles]").textContent="\u2014",h?.render(E,A)}}let W=!1;function ee(){W||(W=!0,requestAnimationFrame(()=>{W=!1,n.isConnected&&K()}))}function pe(){s("[data-field=mode]").value=r.mode,s("[data-field=symmetric]").checked=r.symmetric,s("[data-field=symmetric]").disabled=r.mode==="lathe",s("[data-field=depth]").value=r.depth,s("[data-field=bevel]").value=r.bevel,s("[data-field=segments]").value=r.segments,s("[data-depth]").hidden=r.mode==="lathe",s("[data-bevel]").hidden=r.mode==="lathe",s("[data-segments]").hidden=r.mode!=="lathe"}function Se(D){V(),r=ei(D==="lathe"?Vn.bottle:Vn.shield),o=0,pe(),G(),ee()}function Y(D){Vn[D]&&(V(),r=ei(Vn[D]),o=0,pe(),G(),ee())}function ae(D){o<0||(r.points[o]=D,G(),ee())}S.addEventListener("pointerdown",D=>{if(D.button!==0)return;D.preventDefault();let $=P(D),ue=F($);if(a==="remove"){ue>=0&&r.points.length>3&&(V(),r.points.splice(ue,1),o=Zs(ue,0,r.points.length-1),G(),ee());return}if(a==="add"&&r.points.length<Qo){V();let ve=H($);o=ve<0?r.points.length:ve+1,r.points.splice(o,0,$),G(),ee();return}ue<0||(o=ue,V(),l=D.pointerId,c=!0,S.setPointerCapture(D.pointerId),G())}),S.addEventListener("pointermove",D=>{!c||l!==D.pointerId||ae(P(D))});let Oe=D=>{D.pointerId===l&&(c=!1,l=null,S.hasPointerCapture(D.pointerId)&&S.releasePointerCapture(D.pointerId))};S.addEventListener("pointerup",Oe),S.addEventListener("pointercancel",Oe),S.addEventListener("dblclick",D=>{if(r.points.length>=Qo)return;let $=P(D),ue=H($);ue<0||(V(),o=ue+1,r.points.splice(o,0,$),G(),ee())}),S.addEventListener("contextmenu",D=>{D.preventDefault();let $=F(P(D));$<0||r.points.length<=3||(V(),r.points.splice($,1),o=Zs($,0,r.points.length-1),G(),ee())});for(let D of n.querySelectorAll("[data-tool]"))D.onclick=()=>{a=D.dataset.tool,n.querySelectorAll("[data-tool]").forEach($=>$.setAttribute("aria-pressed",String($===D)))};s("[data-field=mode]").onchange=D=>Se(D.target.value),s("[data-field=preset]").onchange=D=>{Y(D.target.value),D.target.value=""},s("[data-field=symmetric]").onchange=D=>{if(V(),D.target.checked){let $=r.points.filter(([ue])=>ue<=.005).sort((ue,ve)=>ue[1]-ve[1]);r.points=$.length>=3?$:ju(Vn.shield.points),r.points[0][0]<-.001&&r.points.unshift([0,r.points[0][1]]),r.points.at(-1)[0]<-.001&&r.points.push([0,r.points.at(-1)[1]]),r.symmetric=!0}else r.points=ea(r),r.symmetric=!1;o=0,pe(),G(),ee()};for(let D of["depth","bevel","segments"])s("[data-field="+D+"]").oninput=$=>{!c&&$.target.dataset.started!=="1"&&(V(),$.target.dataset.started="1"),r[D]=Number($.target.value),G(),ee()},s("[data-field="+D+"]").onchange=$=>{$.target.dataset.started="0",D==="segments"&&(r.segments=ei(r).segments,$.target.value=r.segments)};s("[data-field=step]").onchange=G,s("[data-field=snap]").onchange=G,s("[data-act=reset]").onclick=()=>{let D=r.mode==="lathe"?"bottle":"shield";Y(D)},s("[data-act=undo]").onclick=()=>k(g,x),s("[data-act=redo]").onclick=()=>k(x,g);let Re=D=>{!D&&u&&!confirm("Fermer sans utiliser cette forme ?")||(window.removeEventListener("keydown",J,!0),n._disposeObserver?.(),d?.dispose(),f&&f.geometry.dispose(),w.dispose(),h?.dispose(),n.remove())},J=D=>{if(D.key==="Escape"){D.preventDefault(),D.stopImmediatePropagation(),Re(!1);return}if((D.ctrlKey||D.metaKey)&&D.key.toLowerCase()==="z"){D.preventDefault(),D.stopImmediatePropagation(),D.shiftKey?k(x,g):k(g,x);return}D.target.closest("input,select,button")||(D.key==="Delete"||D.key==="Backspace")&&(r.points.length>3&&(V(),r.points.splice(o,1),o=Zs(o,0,r.points.length-1),G(),ee()),D.preventDefault(),D.stopImmediatePropagation())};return window.addEventListener("keydown",J,!0),s("[data-act=close]").onclick=()=>Re(!1),s("[data-act=cancel]").onclick=()=>Re(!1),s("[data-act=apply]").onclick=()=>{let D=wl(r);if(D){s("[data-error]").textContent=D;return}try{t(ei(r)),u=!1,Re(!0)}catch($){s("[data-error]").textContent=$.message||"Forme invalide."}},s("[data-act=undo]").disabled=!0,s("[data-act=redo]").disabled=!0,pe(),G(),ee(),{close:()=>Re(!1)}}function Mm(i,e,t){let n=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>i?.includes(s.toUpperCase())&&n[s]<-1e-6?-1:1)}function Sm(i,e,t,n,s){let r=s?new y:n.clone().multiply(new y(1,1,1).sub(t.scale));return i.map(o=>{let a=new st().setFromEuler(new jt(...o.rotation.map(ct.degToRad),"ZYX")),c=o.scale.map((h,d)=>h*new y().setComponent(d,1).applyQuaternion(a).multiply(t.scale).length()),l=new y().fromArray(o.position).sub(e).multiply(t.scale).add(r).applyQuaternion(t.quaternion).add(t.position).toArray();a.premultiply(t.quaternion);let u=new jt().setFromQuaternion(a,"ZYX");return{position:l,rotation:[u.x,u.y,u.z].map(ct.radToDeg),scale:c}})}function wm(i,e,t,n,s,r){return(r?new y:t.clone().multiply(n.clone().sub(s))).applyQuaternion(e).add(i)}var N=i=>document.getElementById(i),dn=N("preview-canvas"),aM=["X","Y","Z"],Cm={position:{min:-3,max:3,step:.01,label:"POSITION / M"},rotation:{min:-360,max:360,step:1,label:"ROTATION / \xB0"},scale:{min:.02,max:4,step:.01,label:"DIMENSIONS / \xC9CHELLE"}},qe=rm(localStorage),Ku=im(),nd="gorilla-foundry-draft-v1",Jr=!1,lt=qe.models[0]?.id??null,Xt=0,Ot=new Set,Zr=null,fa=!1;try{let i=localStorage.getItem(nd);if(i){let e=Di(JSON.parse(i));Object.assign(qe,e),lt=qe.models[0]?.id??null,Jr=!0}}catch{}var ti=null,sn=null,ot=null,vn="select",rn=!1,ha=!1,$u=0;var Ni=null,ls=[],pa=[],cM=48,Gn=new An,pi=new Dt,Fi=new An,Kr=new ci;Kr.background=new ze("#152229");var bn=new Yt(45,1,.005,110),id=new Oo(8,32,"#64818a","#334b54");id.position.y=-.002;var ua=new Bo(new Vt,"#eeb578");ua.visible=!1;var fn=new ge(new et(1,1,1),new zn({color:"#ffb55e",wireframe:!0,transparent:!0,opacity:.92,depthTest:!1}));fn.name="Hitbox de collision";fn.renderOrder=8;fn.visible=!1;var Ll=new An;Kr.add(Ll);var lM=hm();Kr.add(pi,Gn,Fi,id,ua,fn,new Rs("#ecf7ff","#4c5960",2.4));var Rm=new Is("#ffe5c2",2.05);Rm.position.set(-2.5,4,-3);Kr.add(Rm);bn.position.set(1.8,1.4,-2.4);bn.lookAt(0,0,0);var ni=ct.clamp,Ye=()=>qe.models.find(i=>i.id===lt),Bt=()=>Ye()?.parts[Xt],ds=()=>Ot.size?[...Ot]:Bt()?[Xt]:[],sd=()=>ds().map(i=>Gn.children[i]).filter(Boolean),rd=()=>sd().filter(i=>i.visible),Im="gorilla-foundry-visibility-v1",on={active:{},masks:{},references:[]};try{let i=JSON.parse(localStorage.getItem(Im)||"null");i&&typeof i=="object"&&i.masks&&i.active&&(on={active:i.active,masks:i.masks,references:Array.isArray(i.references)?i.references:[],lastModel:typeof i.lastModel=="string"?i.lastModel:null})}catch{}qe.models.some(i=>i.id===on.lastModel)&&(lt=on.lastModel);var od=new URLSearchParams(location.search),Qu=od.get("model"),Pm=od.get("from")==="cards",Tm=od.get("asset"),ad=Qu;qe.models.some(i=>i.id===Qu)&&(lt=Qu);var hs=new Set(on.references);function $r(){try{on.references=[...hs],localStorage.setItem(Im,JSON.stringify(on))}catch{}}function Ul(){return on.active[lt]||"all"}function ed(){let i=on.masks[lt]?.[Ul()]||[];return new Set(Array.isArray(i)?i.filter(e=>Number.isInteger(e)&&e>=0):[])}function cd(i){lt&&(on.masks[lt]||(on.masks[lt]={}),on.masks[lt][Ul()]=[...i].sort((e,t)=>e-t),$r(),mi(),zt())}function hM(){lt&&delete on.masks[lt],$r()}var ld=()=>({data:structuredClone(qe),modelId:lt,partIndex:Xt,multi:[...Ot]});function wt(i,e=!1){N("status").textContent=i,N("status").dataset.error=String(e)}function rt(){Jr=!0,wt("Brouillon local \xB7 non publi\xE9 dans le jeu"),clearTimeout($u),$u=setTimeout(()=>{try{localStorage.setItem(nd,JSON.stringify(Di(qe)))}catch{wt("Brouillon non enregistr\xE9 : exporte le JSON.",!0)}},480)}function Nl(){try{let i=Di(qe);return localStorage.setItem(Xu,JSON.stringify(i)),Object.assign(qe,i),localStorage.removeItem(nd),clearTimeout($u),Jr=!1,Bi(),wt("Enregistr\xE9 \xB7 disponible dans Gorilla Lab et les cartes"),!0}catch{return wt("Enregistrement impossible : exporte le JSON.",!0),!1}}function Mt(){let i=ld(),e=ls.at(-1);(!e||JSON.stringify(e)!==JSON.stringify(i))&&(ls.push(i),ls.length>cM&&ls.shift()),pa.length=0,hd()}function hd(){N("undo-action").disabled=!ls.length,N("redo-action").disabled=!pa.length}function Lm(i){Object.assign(qe,structuredClone(i.data)),lt=i.modelId,Xt=i.partIndex,Ot=new Set(i.multi??[]),rt(),Bi(),hd()}function Dm(){if(!ls.length)return;let i=ls.pop();pa.push(ld()),Lm(i),wt("Annul\xE9 \xB7 Ctrl Z")}function td(){if(!pa.length)return;let i=pa.pop();ls.push(ld()),Lm(i),wt("R\xE9tabli \xB7 Ctrl Maj Z")}function uM(i){Ni?.target===i&&Ni.recorded||((!Ni||Ni.target!==i)&&(Ni={target:i,recorded:!1}),Ni.recorded||(Mt(),Ni.recorded=!0))}document.addEventListener("focusout",i=>{Ni?.target===i.target&&(Ni=null)});function Oi(i){i&&document.activeElement===i?uM(i):Mt()}function us(i,e,t){i.replaceChildren(...e.map(([n,s])=>new Option(s,n))),i.value=t??""}function Fl(){let i=qe.models.map(r=>[r.id,r.name||"Sans nom"]);us(N("models"),i.length?i:[["","Aucun mod\xE8le"]],lt),N("models").disabled=!i.length;let e=Ye();N("model-title").disabled=!e,document.activeElement!==N("model-title")&&(N("model-title").value=e?.name??""),N("duplicate-model").disabled=!e||qe.models.length>=Et.models,N("model-count").textContent=qe.models.length+" / "+Et.models,us(N("avatar"),[["","Singe d\u2019origine"],...i.filter(([r])=>qe.models.find(o=>o.id===r)?.parts.length)],qe.avatarId);let t=N("model-list"),n=t.scrollTop,s=qe.models.map(r=>{let o=document.createElement("div");o.className="model-entry-wrap";let a=document.createElement("button");a.type="button",a.className="model-entry",a.setAttribute("aria-pressed",String(r.id===lt)),a.title="\xC9diter "+r.name,a.textContent=r.name||"Sans nom";let c=document.createElement("small");c.textContent=" \xB7 "+r.parts.length+" p.",a.append(c),a.onclick=()=>Bm(r.id);let l=document.createElement("button");return l.type="button",l.className="model-visibility",l.disabled=r.id===lt||!r.parts.length,l.setAttribute("aria-pressed",String(hs.has(r.id))),l.textContent=r.id===lt?"\u25CF":hs.has(r.id)?"\u25C9":"\u25CE",l.title=r.id===lt?"Mod\xE8le actif":"Afficher/masquer comme r\xE9f\xE9rence 3D sans modifier ce mod\xE8le",l.setAttribute("aria-label",l.title+" : "+r.name),l.onclick=()=>pM(r.id),o.append(a,l),o});t.replaceChildren(...s),t.scrollTop=n}function mi(){let i=Ye()?.parts??[];N("part-count").textContent=i.length+" / "+Et.parts,N("add-part").disabled=i.length>=Et.parts||!Ye();let e=ds(),t=new Set(e.map(r=>i[r]?.group).filter(Boolean));N("duplicate-part").disabled=!e.length||i.length+e.length>Et.parts,N("group-parts").disabled=e.length<2||t.size===1&&e.every(r=>i[r]?.group),N("ungroup-parts").disabled=!t.size,N("selection-count").textContent=e.length+" s\xE9lectionn\xE9e"+(e.length===1?"":"s");let n=ed();N("mask-set").value=Ul(),N("solo-part").disabled=!i.length||!Bt(),N("show-all-parts").disabled=!n.size;let s=N("part-list").scrollTop;N("part-list").replaceChildren(...i.map((r,o)=>{let a=document.createElement("div");a.className="part-row";let c=document.createElement("button");c.type="button",c.className="part-entry",c.setAttribute("aria-pressed",String(e.includes(o))),c.title=r.shape+" \xB7 "+r.surface;let l=document.createElement("span");l.textContent=String(o+1).padStart(2,"0")+"  "+r.name+(r.group?" \xB7 G"+r.group:"");let u=document.createElement("span");u.className="swatch",u.style.setProperty("--swatch",r.color),c.append(l,u),n.has(o)&&(c.style.opacity=".48"),c.onclick=d=>dd(o,d.shiftKey||d.ctrlKey||d.metaKey);let h=document.createElement("button");return h.type="button",h.className="part-visibility",h.textContent=n.has(o)?"\u25CC":"\u25C9",h.setAttribute("aria-pressed",String(!n.has(o))),h.title=n.has(o)?"Afficher cette pi\xE8ce dans la vue":"Masquer cette pi\xE8ce dans la vue",h.setAttribute("aria-label",h.title+" : "+r.name),h.onclick=()=>{let d=ed();d.has(o)?d.delete(o):d.add(o),cd(d)},a.append(c,h),a})),N("part-list").scrollTop=s}function Nt(){let i=Ye(),e=Bt();if(N("model-details").hidden=!i,N("part-inspector").hidden=!e,N("part-empty").hidden=!!e||["settings","collision","publish"].includes(N("model-inspector").dataset.tab),i){document.activeElement!==N("model-name")&&(N("model-name").value=i.name),N("model-kind").value=i.kind||"prop";let t=aa(i);for(let r of["gravity","bounce"])document.activeElement!==N("model-"+r)&&(N("model-"+r).value=t[r]);N("in-game").checked=i.inGame;let n="./editor.html?model="+encodeURIComponent(i.id);for(let r of["send-to-map","quick-send-to-map"])N(r).href=n;let s=Pm&&i.id===ad;N("go-cards").href=s?"./editor.html?applyModel="+encodeURIComponent(i.id):"./editor.html",N("go-cards").textContent=s?"Appliquer \xE0 la pi\xE8ce et revenir":"Cartes \u2192";for(let r of Object.keys(ca))N(r).checked=!!i.properties[r]}if(N("model-inspector").dataset.tab==="collision"&&Js(),e){for(let s of["name","shape","color","surface"])N("part-"+s).value=e[s];let t=Yr(e),n=qs[e.finish]??qs.original;N("part-finish").value=e.finish??"original",N("part-finish-info").textContent="Rugosit\xE9 "+n.roughness+" \xB7 m\xE9tallicit\xE9 "+n.metalness;for(let[s,r]of[["projection",t.projection],["repeat",t.repeat],["angle",t.angle],["u",t.offset[0]],["v",t.offset[1]]]){let o=N("part-"+s);document.activeElement!==o&&(o.value=r)}N("part-shape").disabled=e.shape==="asset";for(let s of Object.keys(Cm))Fm[s].forEach((r,o)=>{document.activeElement!==r&&(r.value=Number(e[s][o].toFixed(3)))})}for(let t of document.querySelectorAll(".tab"))t.setAttribute("aria-pressed",String(t.dataset.panel===N("model-inspector").dataset.tab));N("mirror").disabled=!e||Ye().parts.length>=Et.parts,N("drop-to-grid").disabled=!e,N("focus-part").disabled=!e,N("reset-part").disabled=!e,N("custom-shape-controls").hidden=e?.shape!=="custom",N("edit-profile").disabled=!e||e.shape!=="custom",N("part-paint").disabled=!e,N("part-texture-clear").disabled=!e?.texture,N("part-texture-status").textContent=e?.texture?"Texture peinte appliqu\xE9e \xE0 cette pi\xE8ce.":"Aucune texture personnalis\xE9e. La finition pr\xE9-d\xE9finie reste active.",N("center-part").disabled=!e,N("delete-part").disabled=!e,N("viewport-title").textContent=i?"ATELIER / "+i.name.toUpperCase():"ESPACE DE CONSTRUCTION / 3D",N("quick-send-to-map").setAttribute("aria-disabled",String(!i?.parts.length)),N("send-to-map").setAttribute("aria-disabled",String(!i?.parts.length))}function Js(){let i=Ye(),e=i?.hitbox?.mode==="box"||i?.hitbox?.mode==="custom",t=i?.kind==="structure"&&i.partCollisions===!0;if(N("part-collisions").disabled=i?.kind!=="structure",N("part-collisions").checked=t,N("whole-hitbox-controls").hidden=t,N("part-zone-controls").hidden=!t,N("part-zone").disabled=!Bt(),N("part-zone").value=Bt()?.zone??"solid",N("hitbox-auto").setAttribute("aria-pressed",String(!e)),N("hitbox-manual").setAttribute("aria-pressed",String(!!e)),N("hitbox-geometry").hidden=!e,N("hitbox-auto").disabled=N("hitbox-manual").disabled=!i?.parts.length,N("hitbox-shape").disabled=!i?.parts.length,N("hitbox-drag").setAttribute("aria-pressed",String(!!rn&&vn==="translate")),N("hitbox-scale").setAttribute("aria-pressed",String(!!rn&&vn==="scale")),N("hitbox-rotate").setAttribute("aria-pressed",String(!!rn&&vn==="rotate")),!i?.parts.length){N("hitbox-info").textContent="Ajoute une pi\xE8ce pour g\xE9n\xE9rer sa hitbox.";return}let n=i.hitbox?.shape??"box",s=Math.round(i.hitbox?.precision??48);N("hitbox-shape").value!==n&&(N("hitbox-shape").value=n),N("hitbox-precision").value=String(s),N("hitbox-precision-value").textContent=String(s),N("hitbox-precision-wrap").hidden=n==="box",N("hitbox-info").textContent=e?"Hitbox personnalis\xE9e : d\xE9place, tourne et redimensionne la forme orange.":n==="convex"?"Auto : enveloppe convexe calcul\xE9e depuis la g\xE9om\xE9trie du mod\xE8le.":"Auto : collision simple ajust\xE9e aux dimensions du mod\xE8le.";let o=Ui(i).size.toArray(),a=Math.max(...o),c=o.indexOf(a),l=(n==="sphere"?a:Math.max(...o.filter((h,d)=>d!==c)))/2,u=o.map(h=>h.toFixed(2)).join(" \xD7 ")+" m";if(n==="sphere"?N("hitbox-info").textContent+=" Diam\xE8tre "+(2*l).toFixed(2)+" m.":n==="capsule"?N("hitbox-info").textContent+=" Axe "+["X","Y","Z"][c]+" \xB7 rayon "+l.toFixed(2)+" m \xB7 cylindre "+Math.max(0,a-2*l).toFixed(2)+" m.":N("hitbox-info").textContent+=" "+u+(n==="convex"?" L\u2019enveloppe remplit les creux.":""),!!e)for(let h of["center","size"])for(let d=0;d<3;d++){let f=N("hitbox-"+h+"-"+["x","y","z"][d]);document.activeElement!==f&&(f.value=Number(i.hitbox[h][d].toFixed(3)))}}function Wn(){let i=Ye(),e=!!i?.parts.length&&N("model-inspector").dataset.tab==="collision"&&N("hitbox-preview-toggle").checked;for(let n of[...Ll.children])n.geometry.dispose(),n.material.dispose(),Ll.remove(n);let t=e?pm(i):null;if(fn.visible=!!(e&&!t),t){let n=Ui(i).boundsCenter;for(let s of t){let r=new ge(new et(...s.size),new zn({color:s.mode==="trigger"?"#64dbf0":"#ffb55e",wireframe:!0,depthTest:!1}));r.position.copy(s.center).add(n),r.renderOrder=8,Ll.add(r)}}else if(e){let n=Ui(i),s=fm(i);fn.geometry.dispose(),fn.geometry=s,fn.position.copy(n.center),fn.rotation.set(...n.rotation.toArray().map(ct.degToRad)),fn.scale.copy(n.size),fn.material.color.set(i.properties.collidable?"#ffb55e":"#9b9fa5")}ot?.dragging||Qr(),Nn()}function Um(i){let e=Ye();if(!e?.parts.length)return;let t=Ui(e);Mt(),e.hitbox=i==="box"?{mode:"custom",shape:N("hitbox-shape").value||"box",center:t.center.toArray(),size:t.size.toArray(),rotation:t.rotation.toArray(),precision:Number(N("hitbox-precision").value)||48}:{mode:"auto",shape:"convex",precision:Number(N("hitbox-precision").value)||48},rn=i==="box",rt(),Js(),N("hitbox-preview-toggle").checked=!0,Wn(),Hn(i==="box"?"scale":"select")}function Ol(i){i!=="collision"&&rn&&(rn=!1,Hn("select")),N("model-inspector").dataset.tab=i,Nt(),Wn(),Qr()}for(let i of document.querySelectorAll(".tab"))i.onclick=()=>Ol(i.dataset.panel);function Nn(){ti?.render(Kr,bn)}try{ti=new Hr({canvas:dn,antialias:!0,preserveDrawingBuffer:!0}),ti.setPixelRatio(Math.min(devicePixelRatio,1.5)),ti.toneMapping=Sc,sn=new Wr(bn,dn),sn.enablePan=!0,sn.minDistance=.09,sn.maxDistance=48,sn.mouseButtons.RIGHT=Jn.ROTATE,sn.mouseButtons.MIDDLE=Jn.PAN,sn.addEventListener("change",Nn),ot=new xl(bn,dn);let i=ot.getHelper();Kr.add(i),ot.addEventListener("dragging-changed",e=>{sn.enabled=!e.value,!e.value&&(Zr=null,ha&&(ha=!1,rt(),zt()))}),ot.addEventListener("mouseDown",()=>{Mt(),ha=!1,ma=null;let e=ot.object;if(e===fn)return;let t=e===pi?sd():[e],n=new Vt;if(e===pi){for(let o of t)n.expandByObject(o);n.translate(e.position.clone().negate())}else e.geometry.computeBoundingBox(),n.copy(e.geometry.boundingBox);let s=vn==="scale"?Mm(ot.axis,ot.pointStart,ot.worldQuaternionStart):[1,1,1],r=new y;for(let o=0;o<3;o++){let a=s[o]<0||N("negative-scale-face").checked;r.setComponent(o,(a?n.max:n.min).getComponent(o))}Zr={position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone(),anchor:r,rawScale:e.scale.clone(),parts:t.map(o=>({mesh:o,data:structuredClone(Ye().parts[Gn.children.indexOf(o)])}))}}),ot.addEventListener("objectChange",()=>{let e=ot.object;if(!(!e||!ot.dragging)){if(rn&&e===fn&&["box","custom"].includes(Ye()?.hitbox?.mode)){let t=Ye().hitbox;t.center=e.position.toArray().map(n=>ni(n,-6,6)),t.size=e.scale.toArray().map(n=>ni(Math.abs(n),.025,12)),t.rotation=[e.rotation.x,e.rotation.y,e.rotation.z].map(n=>ni(ct.radToDeg(n),-360,360)),e.position.fromArray(t.center),e.scale.fromArray(t.size),ha=!0,Js(),Nn();return}Zr&&(Zr.rawScale.copy(e.scale),Nm())}}),dn.addEventListener("pointerdown",Ju,!0),dn.addEventListener("pointermove",e=>{fa=e.ctrlKey},!0),window.addEventListener("keydown",Ju),window.addEventListener("keyup",Ju),new ResizeObserver(()=>{let e=Math.max(1,dn.clientWidth),t=Math.max(1,dn.clientHeight);bn.aspect=e/t,bn.updateProjectionMatrix(),ti.setSize(e,t,!1),Nn()}).observe(dn)}catch{wt("WebGL indisponible \xB7 \xE9dition num\xE9rique toujours possible.",!0)}function Ju(i){fa!==i.ctrlKey&&(fa=i.ctrlKey,ot?.dragging&&vn==="scale"&&Zr&&Nm())}function Nm(){let i=ot.object,e=Zr,t=i===pi,n=Ye().parts,s;if(t){let r={position:i.position,quaternion:i.quaternion,scale:vn==="scale"?e.rawScale.clone().clampScalar(.001,200):new y(1,1,1)};if(s=Sm(e.parts.map(o=>o.data),e.position,r,e.anchor,fa),s.some(o=>o.position.some(a=>Math.abs(a)>3+1e-8)||o.scale.some(a=>a<.02-1e-8||a>4+1e-8)))return}else{let r=e.rawScale.clone().clampScalar(.02,4),o=vn==="scale"?wm(e.position,e.rotation,e.anchor,e.scale,r,fa):i.position;if(vn==="scale"&&o.toArray().some(a=>Math.abs(a)>3+1e-8)){let a=n[Gn.children.indexOf(i)];i.position.fromArray(a.position),i.scale.fromArray(a.scale),Nn();return}s=[{position:o.toArray().map(a=>ni(a,-3,3)),rotation:[i.rotation.x,i.rotation.y,i.rotation.z].map(ct.radToDeg),scale:r.toArray()}]}e.parts.forEach(({mesh:r},o)=>{let a=s[o],c=n[Gn.children.indexOf(r)];Object.assign(c,a),r.position.fromArray(a.position),r.rotation.set(...a.rotation.map(ct.degToRad),"ZYX"),r.scale.fromArray(a.scale)}),ha=!0,Om(),Nt()}var Fm={};for(let[i,e]of Object.entries(Cm)){let t=document.createElement("fieldset");t.className="vectors";let n=document.createElement("legend");n.textContent=e.label,t.append(n);let s=document.createElement("div");s.className="axes",Fm[i]=aM.map((r,o)=>{let a=document.createElement("label");a.textContent=r;let c=document.createElement("input");return c.type="number",c.id=i+"-"+r.toLowerCase(),c.min=e.min,c.max=e.max,c.step=e.step,c.setAttribute("aria-label",e.label+" "+r),c.addEventListener("input",()=>{let l=Bt();!l||!Number.isFinite(c.valueAsNumber)||(Oi(c),l[i][o]=ni(c.valueAsNumber,e.min,e.max),rt(),zt())}),c.addEventListener("change",()=>{let l=Bt();l&&(c.value=l[i][o])}),a.append(c),s.append(a),c}),t.append(s),N("part-fields").append(t)}function dM(i){let e={...i,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},t=Rl(i),n=t?Il(e):lM,s=new ge(Ys(e,new y(...i.scale)),n);s.userData.ownMaterial=t;let r=n?.map?.image;return r?.addEventListener&&!r.complete&&r.addEventListener("load",Nn,{once:!0}),s.position.fromArray(i.position),s.rotation.order="ZYX",s.rotation.set(...i.rotation.map(ct.degToRad)),s.scale.fromArray(i.scale),s.userData.part=!0,s}function Qr(){if(!ot)return;let i=rd(),e=i[0];if(i.length&&ds().length>1&&(e=pi,!ot.dragging)){let s=new Vt;for(let r of sd())s.expandByObject(r);s.getCenter(pi.position),pi.rotation.set(0,0,0),pi.scale.setScalar(1),pi.updateMatrixWorld(!0)}let t=vn==="select"?null:rn&&fn.visible&&["translate","scale","rotate"].includes(vn)?fn:e?.visible?e:null;if(ot.object!==t){if(ot.dragging)return;t?ot.attach(t):ot.detach()}t&&(ot.setMode(vn),ot.setSpace(vn==="translate"||t===pi?"world":"local"));let n=Number(N("snap-step").value);ot.setTranslationSnap(n||null),ot.setRotationSnap(n?ct.degToRad(5):null),ot.setScaleSnap(n||null),Nn()}function Om(){let i=rd();ua.visible=!!i.length&&!rn,ua.box.makeEmpty();for(let e of i)ua.box.expandByObject(e);Nn()}function ud(){Om(),Qr()}function js(i=!1){if(!sn)return;let e=i?rd():[],t=new Vt;if(e.length)for(let l of e)t.expandByObject(l);else t.setFromObject(Gn);!i&&Fi.children.length&&t.union(new Vt().setFromObject(Fi));let n=new y,s=new y;t.isEmpty()||(t.getCenter(n),t.getSize(s));let r=ct.degToRad(bn.fov/2),o=Math.atan(Math.tan(r)*bn.aspect),a=Math.max(.6,s.length()*.63/Math.sin(Math.min(r,o))),c=bn.position.clone().sub(sn.target).normalize();sn.target.copy(n),bn.position.copy(n).addScaledVector(c,a),sn.update(),Nn()}function fM(){for(let e of[...Fi.children])Fi.remove(e),e.geometry.dispose(),e.material.dispose();if(!ti)return;let i=qe.models.filter(e=>hs.has(e.id)&&e.id!==lt&&e.parts.length);i.forEach((e,t)=>{let n=um(e),s=new zn({color:"#8bd1dc",side:Jt,transparent:!0,opacity:.25,depthWrite:!1}),r=new ge(n,s);r.name="R\xE9f\xE9rence : "+e.name;let o=t/i.length*Math.PI*2-Math.PI/2,a=2.2+Math.floor(t/5)*1.6;r.position.set(Math.cos(o)*a,0,Math.sin(o)*a),r.renderOrder=3,Fi.add(r)})}function zt(i=!1){ot?.detach();for(let n of[...Gn.children])Gn.remove(n),n.geometry.dispose(),n.userData.ownMaterial&&Yu(n.material);let e=Ye()?.parts??[],t=ed();ti&&e.forEach((n,s)=>{let r=dM(n);r.visible=!t.has(s),Gn.add(r)}),fM(),Wn(),N("preview-empty").hidden=!!(e.length&&ti),N("preview-empty").textContent=ti?Ye()?"Ajoute une forme avec la barre \xE0 gauche pour commencer.":"Cr\xE9e un mod\xE8le avec + Nouveau mod\xE8le puis assemble tes pi\xE8ces.":"Pr\xE9visualisation 3D indisponible : les valeurs restent modifiables.",N("preview-tag").textContent=e.length+" PI\xC8CE"+(e.length>1?"S":"")+" / "+(Ye()?.kind==="structure"?"D\xC9COR":"OBJET")+(Fi.children.length?" \xB7 "+Fi.children.length+" R\xC9F.":""),ud(),i&&(e.length||Fi.children.length)?js():Nn()}function Bi(){on.lastModel=lt,$r(),Fl(),N("new-model").disabled=N("example").disabled=qe.models.length>=Et.models,mi(),Nt(),zt(!0),hd()}function dd(i,e=!1){let t=Ye()?.parts,n=t?.[i];if(!n)return;let s=n.group?t.flatMap((r,o)=>r.group===n.group?[o]:[]):[i];if(e){Ot=new Set(ds());let r=s.every(o=>Ot.has(o));for(let o of s)r?Ot.delete(o):Ot.add(o);Xt=r?Ot.values().next().value??-1:i}else Ot=new Set(s),Xt=i;mi(),Nt(),ud()}function fd(i=!1){let e=Ye()?.parts,t=ds();if(!e||!t.length)return;let n=new Set(t.map(r=>e[r].group).filter(Boolean)),s=e.flatMap((r,o)=>t.includes(o)||n.has(r.group)?[o]:[]);if(!(!i&&s.length<2)){if(Mt(),i)for(let r of s)delete e[r].group;else{let r=new Set(e.map(a=>a.group)),o=1;for(;r.has(o);)o++;for(let a of s)e[a].group=o}Ot=new Set(s),rt(),mi(),ud()}}function Bm(i){!qe.models.some(e=>e.id===i)||i===lt||(lt=i,Xt=0,Ot.clear(),Bi(),wt("Mod\xE8le actif : "+Ye().name))}function pM(i){i===lt||!qe.models.some(e=>e.id===i)||(hs.has(i)?hs.delete(i):hs.add(i),$r(),Fl(),zt(),js())}function mM(i){lt&&(on.active[lt]=i,$r(),mi(),zt())}function Hn(i){rn&&!["translate","scale","rotate"].includes(i)&&(rn=!1),vn=i;for(let e of document.querySelectorAll(".rail-btn[data-tool]"))e.setAttribute("aria-pressed",String(e.dataset.tool===i));dn.dataset.tool=i,N("negative-scale-option").hidden=i!=="scale"||rn,Qr()}for(let i of document.querySelectorAll(".rail-btn[data-tool]"))i.onclick=()=>Hn(i.dataset.tool);var ma=null,da=null,Em=new Ps,Am=new re;function zm(i){if(!ti)return-1;let e=dn.getBoundingClientRect();Am.set(2*(i.clientX-e.left)/e.width-1,1-2*(i.clientY-e.top)/e.height),Em.setFromCamera(Am,bn);let t=Em.intersectObjects(Gn.children.filter(n=>n.visible),!1)[0];return t?Gn.children.indexOf(t.object):-1}dn.addEventListener("pointerdown",i=>{i.button===0&&(ma=vn!=="select"&&ot?.axis?null:{id:i.pointerId,x:i.clientX,y:i.clientY}),i.button===2&&(da={x:i.clientX,y:i.clientY})});dn.addEventListener("pointercancel",()=>{ma=null,da=null});dn.addEventListener("pointerup",i=>{if(ot?.dragging)return;let e=ma;if(ma=null,i.button!==0||e?.id!==i.pointerId||Math.hypot(i.clientX-e.x,i.clientY-e.y)>5)return;let t=zm(i);t>=0&&dd(t,i.shiftKey||i.ctrlKey||i.metaKey)});var jr=N("part-context");function Bl(){jr.hidden=!0}dn.addEventListener("contextmenu",i=>{if(i.preventDefault(),!da||Math.hypot(i.clientX-da.x,i.clientY-da.y)>6)return;let e=zm(i);if(e<0)return Bl();ds().includes(e)||dd(e),N("context-name").textContent=Bt().name,jr.hidden=!1,jr.style.left=ni(i.clientX,5,innerWidth-205)+"px",jr.style.top=ni(i.clientY,5,innerHeight-305)+"px"});document.addEventListener("pointerdown",i=>{jr.contains(i.target)||Bl()});function cs(i,e=qr[i],t=[0,0,0],n=[.35,.35,.35],s="#51bdd2",r="plain",o=[0,0,0]){return{name:e,shape:i,position:t,scale:n,rotation:o,surface:r,color:s,...i==="custom"?{profile:Xr()}:{}}}function gM(){let i="#678fb4",e="#c1d7de",t="#233241";return[cs("sphere","Cr\xE2ne",[0,0,.02],[.31,.32,.29],i,"speckle"),cs("sphere","Museau",[0,-.048,-.11],[.2,.13,.15],e),cs("sphere","Oreille gauche",[-.149,.003,.01],[.08,.1,.06],i),cs("sphere","Oreille droite",[.149,.003,.01],[.08,.1,.06],i),cs("sphere","\u0152il gauche",[-.056,.037,-.118],[.049,.042,.036],t),cs("sphere","\u0152il droit",[.056,.037,-.118],[.049,.042,.036],t),cs("sphere","Nez",[0,-.025,-.181],[.071,.039,.033],t)]}function pd(){return"custom-model-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function km(i,e=!1){let t=Ku.find(s=>s.assetId===i);if(!t)return wt("Asset int\xE9gr\xE9 introuvable.",!0);if(qe.models.length>=Et.models)return wt("Limite de "+Et.models+" mod\xE8les atteinte.",!0);Mt();let n=structuredClone(t);return n.id=pd(),qe.models.some(s=>s.name===n.name)&&(n.name=(n.name+" \xB7 copie").slice(0,48)),qe.models.push(n),lt=n.id,Xt=0,Ot.clear(),rt(),Bi(),e&&Ol("geometry"),wt("\xAB "+n.name+" \xBB import\xE9 \xB7 enregistre pour le retrouver dans les cartes."),n}function Vm(i=!1){if(qe.models.length>=Et.models)return;Mt();let e=pd(),t=i?"Singe de pierre":"Mod\xE8le "+(qe.models.length+1);qe.models.push({id:e,name:t,kind:"structure",inGame:!1,properties:{...ca},hitbox:{mode:"auto",shape:"convex",precision:48},parts:i?gM():[]}),lt=e,Xt=0,Ot.clear(),rt(),Bi(),Ol("geometry"),i||(N("model-title").focus({preventScroll:!0}),N("model-title").select())}function xM(){let i=Ye();if(!i||qe.models.length>=Et.models)return;Mt();let e=structuredClone(i);e.id=pd(),e.name=(i.name.slice(0,37)+" \xB7 variante").slice(0,48),qe.models.push(e),lt=e.id,Xt=0,Ot.clear(),rt(),Bi(),N("model-title").focus({preventScroll:!0}),N("model-title").select(),wt("Variante cr\xE9\xE9e : modifie-la sans toucher au mod\xE8le original.")}function md(i=N("new-shape").value){let e=Ye();if(!e||e.parts.length>=Et.parts)return;Mt();let t=Bt(),n=t?[ni(t.position[0]+.22,-3,3),...t.position.slice(1)]:[0,0,0];e.parts.push(cs(i,qr[i],n)),Xt=e.parts.length-1,Ot.clear(),rt(),mi(),Nt(),zt(e.parts.length===1),Hn("translate"),Ol("geometry"),i==="custom"&&yd()}function Dl(){let i=Ye(),e=ds();if(!i||!e.length||i.parts.length+e.length>Et.parts)return;Mt();let t=e.map(a=>i.parts[a]),n=Math.min(.12,3-Math.max(...t.map(a=>a.position[0]))),s=new Map,r=new Set(i.parts.map(a=>a.group)),o=i.parts.length;for(let a of t){let c=structuredClone(a);if(c.name=a.name.slice(0,40)+" copie",c.position[0]+=n,c.group){if(!s.has(c.group)){let l=1;for(;r.has(l);)l++;r.add(l),s.set(c.group,l)}c.group=s.get(c.group)}i.parts.push(c)}Ot=new Set(t.map((a,c)=>o+c)),Xt=o,rt(),mi(),Nt(),zt()}function gd(){let i=Ye(),e=ds();if(!(!i||!e.length)){Mt();for(let t of e.sort((n,s)=>s-n))i.parts.splice(t,1);Ot.clear(),hM(),Xt=Math.max(0,Math.min(Xt,i.parts.length-1)),!i.parts.length&&qe.avatarId===i.id&&(qe.avatarId=null),rt(),Fl(),mi(),Nt(),zt()}}function xd(){let i=Ye(),e=Bt();if(!e||i.parts.length>=Et.parts)return;Mt();let t=structuredClone(e);t.name=e.name.slice(0,36)+" \xB7 miroir",delete t.group,t.position[0]=-t.position[0],t.rotation[1]=-t.rotation[1],t.rotation[2]=-t.rotation[2],i.parts.push(t),Xt=i.parts.length-1,Ot.clear(),rt(),mi(),Nt(),zt(),wt("Copie en miroir cr\xE9\xE9e sur l\u2019axe X")}function Hm(){let i=Bt(),e=Gn.children[Xt];if(!i||!e)return;let t=new Vt().setFromObject(e);t.isEmpty()||(Mt(),i.position[1]=ni(i.position[1]-t.min.y,-3,3),rt(),Nt(),zt(),wt("Pi\xE8ce pos\xE9e sur le plan Y = 0"))}function _M(){let i=Bt();i&&(Mt(),i.position=[0,0,0],i.rotation=[0,0,0],i.scale=[.35,.35,.35],rt(),Nt(),zt())}function yM(){let i=Bt();i&&(Mt(),i.position=[0,0,0],rt(),Nt(),zt())}function _d(i){if(!sn)return;let e=bn.position.distanceTo(sn.target),t=i==="front"?new y(0,0,-1):i==="side"?new y(1,0,0):new y(1e-4,1,0);bn.position.copy(sn.target).addScaledVector(t,Math.max(.6,e)),sn.update(),Nn()}function Pl(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var vM=()=>Ye()?.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"modele";async function bM(){let i=N("export-format").value;try{let e=Ye(),t=vM();if(i==="workspace-json")Pl(new Blob([JSON.stringify(Di(qe),null,2)],{type:"application/json"}),"atelier.gorilla-models.json");else if(i==="model-json"){if(!e)throw Error("Cr\xE9e un mod\xE8le avant de l\u2019exporter.");Pl(new Blob([JSON.stringify(Di({version:1,models:[e],avatarId:null}),null,2)],{type:"application/json"}),t+".gorilla-model.json")}else if(i==="png"){if(!ti)throw Error("WebGL indisponible : capture impossible.");Nn();let n=await new Promise(s=>dn.toBlob(s,"image/png"));if(!n)throw Error("Capture impossible sur cet appareil.");Pl(n,t+".png")}else if(i==="glb"){if(!e?.parts.length)throw Error("Ajoute une pi\xE8ce avant l\u2019export 3D.");let n=new An;n.name=e.name;let s=[];wt("Pr\xE9paration du GLB et des textures\u2026");for(let r of e.parts){let o=null;if(r.texture){let l=await fetch(r.texture);if(!l.ok)throw Error("Image du mod\xE8le impossible \xE0 charger.");let u=await createImageBitmap(await l.blob()),h=document.createElement("canvas");h.width=u.width,h.height=u.height,h.getContext("2d").drawImage(u,0,0),u.close(),o=new yo(h),o.colorSpace=At,o.wrapS=o.wrapT=Cn}let a=Il({...r,texture:null});o&&(a.map=o,a.needsUpdate=!0);let c=new ge(Ys(r),a);c.name=r.name,n.add(c),s.push(c)}try{let r=await new Promise((o,a)=>new Ws().parse(n,o,a,{binary:!0,onlyVisible:!0}));Pl(new Blob([r],{type:"model/gltf-binary"}),t+".glb")}finally{for(let r of s)r.geometry.dispose(),Yu(r.material)}}wt("Export "+i.toUpperCase()+" g\xE9n\xE9r\xE9")}catch(e){wt(e.message||"Export impossible.",!0)}}N("new-model").onclick=()=>Vm();N("duplicate-model").onclick=xM;N("example").onclick=()=>Vm(!0);N("models").onchange=i=>Bm(i.target.value);N("mask-set").onchange=i=>mM(i.target.value);N("solo-part").onclick=()=>{let i=Ye();i?.parts.length&&(cd(new Set(i.parts.map((e,t)=>t).filter(e=>e!==Xt))),wt("Masque "+Ul()+" : seule la pi\xE8ce active est affich\xE9e."))};N("show-all-parts").onclick=()=>{cd(new Set),wt("Toutes les pi\xE8ces sont visibles.")};N("save").onclick=N("publish-save").onclick=Nl;N("undo-action").onclick=Dm;N("redo-action").onclick=td;N("export").onclick=bM;N("import").onclick=()=>N("file").click();N("file").onchange=async i=>{let e=i.target.files?.[0];if(i.target.value="",!!e)try{if(e.size>Et.fileBytes)throw Error("JSON trop volumineux pour cet atelier.");let t=Di(JSON.parse(await e.text())),n=new Map(qe.models.map(s=>[s.id,s]));for(let s of t.models)n.set(s.id,s);if(n.size>Et.models)throw Error("L\u2019atelier accepte "+Et.models+" mod\xE8les.");if(t.models.some(s=>qe.models.some(r=>r.id===s.id))&&!confirm("Remplacer les mod\xE8les de m\xEAme identifiant ?"))return;Mt(),Object.assign(qe,{version:1,models:[...n.values()],avatarId:t.avatarId??qe.avatarId}),lt=t.models[0]?.id??lt,Xt=0,Ot.clear(),rt(),Bi(),wt("Import\xE9 \xB7 enregistrer pour appliquer au jeu")}catch(t){wt(t instanceof SyntaxError?"JSON illisible.":t.message,!0)}};function Gm(i){if(!Ye()?.parts.length){i.preventDefault(),wt("Ajoute au moins une pi\xE8ce avant de placer le mod\xE8le sur une carte.",!0);return}Nl()||i.preventDefault()}for(let i of["send-to-map","quick-send-to-map"])N(i).addEventListener("click",Gm);N("go-cards").addEventListener("click",i=>{Pm&&lt===ad?Gm(i):Jr&&!Nl()&&i.preventDefault()});N("delete-model").onclick=()=>{let i=Ye();if(!i||!confirm("Supprimer le mod\xE8le \xAB "+i.name+" \xBB ?"))return;Mt();let e=qe.models.indexOf(i);qe.models.splice(e,1),hs.delete(i.id),delete on.active[i.id],delete on.masks[i.id],$r(),qe.avatarId===i.id&&(qe.avatarId=null),lt=(qe.models[e]??qe.models[e-1])?.id??null,Xt=0,Ot.clear(),rt(),Bi()};function MM(i){let e=Ye();e&&(Oi(i.target),e.name=i.target.value.slice(0,48),rt(),Fl(),Nt())}for(let i of["model-name","model-title"])N(i).addEventListener("input",MM);N("hitbox-auto").onclick=()=>Um("auto");N("hitbox-manual").onclick=()=>Um("box");N("hitbox-preview-toggle").onchange=Wn;N("hitbox-shape").onchange=i=>{let e=Ye();if(!e)return;Oi(i.target);let t=i.target.value;if(!["box","sphere","capsule","convex"].includes(t))return;let n=Ui(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{},precision:Number(N("hitbox-precision").value)||48},rn=s,rt(),Js(),Wn()};N("hitbox-precision").oninput=i=>{let e=Ye();if(!e)return;let t=ni(Math.round(Number(i.target.value)||48),8,96),n=Ui(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:e.hitbox?.shape??"convex",precision:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{}},N("hitbox-precision-value").textContent=String(t),rt(),Wn()};for(let[i,e]of[["hitbox-drag","translate"],["hitbox-scale","scale"],["hitbox-rotate","rotate"]])N(i).onclick=()=>{let t=Ye();!t?.parts.length||!["box","custom"].includes(t.hitbox?.mode)||(N("hitbox-preview-toggle").checked=!0,rn=!0,Hn(e),Js(),Wn())};N("hitbox-fit").onclick=()=>{let i=Ye();if(!i?.parts.length)return;let e=Number(N("hitbox-precision").value)||48,t=Ui({...i,hitbox:{mode:"auto",shape:"convex",precision:e}});Mt(),i.hitbox={mode:"custom",shape:N("hitbox-shape").value||"convex",center:t.center.toArray(),size:t.size.toArray(),rotation:[0,0,0],precision:e},rn=!0,rt(),Js(),Wn(),wt("Hitbox ajust\xE9e \xE0 la g\xE9om\xE9trie actuelle.")};for(let i of["center","size"])for(let e=0;e<3;e++){let t=N("hitbox-"+i+"-"+["x","y","z"][e]);t.oninput=n=>{let s=Ye(),r=n.target.valueAsNumber;!["box","custom"].includes(s?.hitbox?.mode)||!Number.isFinite(r)||(Oi(n.target),s.hitbox[i][e]=ni(r,i==="size"?.025:-6,i==="size"?12:6),rt(),Wn())},t.onchange=Js}N("model-kind").onchange=i=>{Ye()&&(Oi(i.target),Ye().kind=i.target.value,rt(),Nt(),zt())};N("in-game").onchange=i=>{Oi(i.target),Ye().inGame=i.target.checked,rt()};for(let i of Object.keys(ca))N(i).onchange=e=>{Ye()&&(Oi(e.target),Ye().properties[i]=e.target.checked,rt(),i==="collidable"&&Wn())};N("avatar").onchange=i=>{Oi(i.target),qe.avatarId=i.target.value||null,rt()};us(N("new-shape"),Object.entries(qr).filter(([i])=>i!=="asset"),"box");us(N("part-shape"),Object.entries(qr),"box");us(N("game-asset"),Ku.map(i=>[i.assetId,i.name]),Ku[0]?.assetId);N("add-game-asset").onclick=()=>km(N("game-asset").value);us(N("part-surface"),Object.entries(Cl),"plain");us(N("part-finish"),Object.entries(qs).map(([i,e])=>[i,e.label]),"original");us(N("part-zone"),Object.entries(qu),"solid");N("part-collisions").onchange=i=>{let e=Ye();!e||e.kind!=="structure"||(Mt(),e.partCollisions=i.target.checked,rn=!1,rt(),Nt(),Wn())};N("part-zone").onchange=i=>{let e=Bt();e&&(Mt(),e.zone=i.target.value,rt(),Wn())};N("part-finish").onchange=i=>{let e=Bt();e&&(Mt(),e.finish=i.target.value,rt(),Nt(),zt())};for(let i of["projection","repeat","angle","u","v"])N("part-"+i).onchange=e=>{let t=Bt();if(!t)return;let n=e.target,s=i==="projection"?n.value:n.valueAsNumber;if(i!=="projection"&&!Number.isFinite(s)){Nt();return}let r=Yr(t);i==="u"||i==="v"?r.offset[i==="u"?0:1]=s:r[i]=s,Mt(),t.uv=Yr({uv:r}),rt(),Nt(),zt()};for(let i of["gravity","bounce"])N("model-"+i).onchange=e=>{let t=Ye();!t||!Number.isFinite(e.target.valueAsNumber)||(Mt(),t.physics=aa({physics:{...aa(t),[i]:e.target.valueAsNumber}}),rt())};function yd(){let i=Bt();!i||i.shape!=="custom"||bm({name:i.name,initial:i.profile??Xr(),onApply:e=>{if(!Ye()?.parts.includes(i))throw Error("La pi\xE8ce n\u2019existe plus.");Mt(),i.profile=e,rt(),Nt(),zt(),wt("Forme personnelle appliqu\xE9e \xB7 mod\xE8le pr\xEAt \xE0 enregistrer.")}})}N("edit-profile").onclick=yd;N("add-part").onclick=()=>md();for(let i of document.querySelectorAll("[data-shape]"))i.onclick=()=>{N("new-shape").value=i.dataset.shape,md(i.dataset.shape)};N("part-paint").onclick=()=>{let i=Bt();if(!i)return;let e={plain:"solid",grid:"grid",stripes:"stripes",wood:"wood",speckle:"rock"};ym({initial:i.texture,name:"Pi\xE8ce / "+i.name,tint:i.color,pattern:e[i.surface]??"grain",maxDataBytes:Et.textureBytes-2e3,onApply:async t=>{if(!Ye()?.parts.includes(i))throw Error("La pi\xE8ce modifi\xE9e n\u2019existe plus dans ce mod\xE8le.");Mt(),i.texture||(i.color="#ffffff"),i.texture=t,Di(qe),rt(),Nt(),zt(),wt("Texture peinte appliqu\xE9e \xE0 "+i.name+". Enregistre pour la retrouver en jeu.")}})};N("part-texture-clear").onclick=()=>{let i=Bt();i?.texture&&(Mt(),i.texture=null,rt(),Nt(),zt())};N("duplicate-part").onclick=Dl;N("group-parts").onclick=()=>fd();N("ungroup-parts").onclick=()=>fd(!0);N("delete-part").onclick=gd;N("mirror").onclick=xd;N("drop-to-grid").onclick=Hm;N("reset-part").onclick=_M;N("center-part").onclick=yM;N("focus-part").onclick=()=>js(!0);N("frame").onclick=()=>js();N("view-front").onclick=()=>_d("front");N("view-side").onclick=()=>_d("side");N("view-top").onclick=()=>_d("top");N("grid-toggle").onchange=i=>{id.visible=i.target.checked,Nn()};N("snap-step").onchange=Qr;N("focus-toggle").onclick=()=>{document.body.classList.toggle("preview-fullscreen"),setTimeout(()=>window.dispatchEvent(new Event("resize")),0)};for(let i of["name","shape","color","surface"])N("part-"+i).addEventListener(i==="name"||i==="color"?"input":"change",e=>{let t=Bt();t&&(Oi(e.target),i==="shape"&&e.target.value==="custom"&&t.shape!=="custom"&&(t.profile=Xr(t.shape)),t[i]=e.target.value,rt(),mi(),i==="name"?Nt():(Nt(),zt(),i==="shape"&&t.shape==="custom"&&yd()))});for(let i of document.querySelectorAll("[data-color]"))i.onclick=()=>{let e=Bt();e&&(Mt(),e.color=i.dataset.color,rt(),Nt(),zt())};for(let i of jr.querySelectorAll("button"))i.onclick=()=>{Bl();let e=i.dataset.action;["translate","rotate","scale"].includes(e)?Hn(e):e==="duplicate"?Dl():e==="mirror"?xd():e==="ground"?Hm():e==="focus"?js(!0):e==="delete"&&gd()};window.addEventListener("keydown",i=>{let e=i.target.closest?.("input,select,textarea,[contenteditable]");if(i.key==="Escape"){Bl(),!e&&!ot?.dragging&&Hn("select");return}if(ot?.dragging)return;let t=i.ctrlKey||i.metaKey;if(t&&!e){let s=i.key.toLowerCase();if(s==="z"){i.preventDefault(),i.shiftKey?td():Dm();return}if(s==="y"){i.preventDefault(),td();return}if(s==="s"){i.preventDefault(),Nl();return}if(s==="d"){i.preventDefault(),Dl();return}if(s==="g"){i.preventDefault(),fd(i.shiftKey);return}}if(e||t||i.altKey)return;let n=i.key.toLowerCase();if(n==="v")Hn("select");else if(n==="g")Hn("translate");else if(n==="r")Hn("rotate");else if(n==="s")Hn("scale");else if(n==="f")js(!0);else if(n==="a")js();else if(n==="m")xd();else if(n==="delete"||n==="backspace")gd();else if(n==="d"&&i.shiftKey)Dl();else if("123456789".includes(n)&&n.length===1){let s=["box","sphere","cylinder","cone","torus","capsule","diamond","custom","tetrahedron"][Number(n)-1];s&&md(s)}else return;i.preventDefault()});window.addEventListener("keydown",i=>{i.key==="Alt"&&ot&&(ot.setTranslationSnap(null),ot.setRotationSnap(null),ot.setScaleSnap(null))});window.addEventListener("keyup",i=>{i.key==="Alt"&&Qr()});window.addEventListener("beforeunload",i=>{Jr&&i.preventDefault()});Tm&&(ad=km(Tm,!0)?.id);Bi();Jr&&wt("Brouillon r\xE9cup\xE9r\xE9 automatiquement");})();
