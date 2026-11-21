(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tm=0,vd=1,nm=2;var Md=1,im=2,Wi=3,ei=0,On=1,on=2,ss=0,Js=1,Ga=2,bd=3,Sd=4,sm=5,vs=100,rm=101,om=102,am=103,lm=104,cm=200,hm=201,um=202,dm=203,ic=204,sc=205,fm=206,pm=207,mm=208,gm=209,xm=210,ym=211,_m=212,vm=213,Mm=214,Lc=0,Uc=1,Fc=2,Ks=3,Nc=4,Bc=5,Oc=6,zc=7,kc=0,bm=1,Sm=2,rs=0,Vc=1,Gc=2,Hc=3,Wc=4,Xc=5,qc=6,Yc=7;var wd=300,ur=301,dr=302,Ri=303,Zc=304,Ha=306,An=1e3,_s=1001,rc=1002,Wn=1003,wm=1004;var Wa=1005;var rn=1006,jc=1007;var In=1008;var Pi=1009,Td=1010,Ed=1011,_o=1012,Jc=1013,As=1014,Ii=1015,_i=1016,Kc=1017,$c=1018,vo=1020,Ad=35902,Cd=35899,Rd=1021,Pd=1022,zn=1023,eo=1026,Mo=1027,Qc=1028,eh=1029,Id=1030,th=1031;var nh=1033,Xa=33776,qa=33777,Ya=33778,Za=33779,ih=35840,sh=35841,rh=35842,oh=35843,ah=36196,lh=37492,ch=37496,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,xh=37815,yh=37816,_h=37817,vh=37818,Mh=37819,bh=37820,Sh=37821,wh=36492,Th=36494,Eh=36495,Ah=36283,Ch=36284,Rh=36285,Ph=36286;var da=2300,oc=2301,tc=2302,ld=2400,cd=2401,hd=2402;var Tm=3200,Em=3201;var Ih=0,Am=1,os="",vt="srgb",$s="srgb-linear",fa="linear",Lt="srgb";var js=7680;var ud=519,Cm=512,Rm=513,Pm=514,Dd=515,Im=516,Dm=517,Lm=518,Um=519,ac=35044,ja=35048;var Ld="300 es",Ei=2e3,pa=2001;var Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_p=1234567,la=Math.PI/180,to=180/Math.PI;function Gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Ud(n,e){return(n%e+e)%e}function Yx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Zx(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function jx(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function Jx(n,e=1){return e-Math.abs(Ud(n,e*2)-e)}function Kx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ey(n,e){return n+Math.random()*(e-n)}function ty(n){return n*(.5-Math.random())}function ny(n){n!==void 0&&(_p=n);let e=_p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iy(n){return n*la}function sy(n){return n*to}function ry(n){return(n&n-1)===0&&n!==0}function oy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ay(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ly(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var we={DEG2RAD:la,RAD2DEG:to,generateUUID:Gi,clamp:nt,euclideanModulo:Ud,mapLinear:Yx,inverseLerp:Zx,lerp:ca,damp:jx,pingpong:Jx,smoothstep:Kx,smootherstep:$x,randInt:Qx,randFloat:ey,randFloatSpread:ty,seededRandom:ny,degToRad:iy,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:oy,floorPowerOfTwo:ay,setQuaternionFromProperEuler:ly,normalize:Ft,denormalize:Ti},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,_=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let T=Math.sqrt(b),E=Math.atan2(T,m*_);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let y=a*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uu=new v,vp=new bt,ct=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],T=s[2],E=s[5],P=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*g+a*b+l*E,r[6]=o*m+a*y+l*P,r[1]=c*x+h*_+u*T,r[4]=c*g+h*b+u*E,r[7]=c*m+h*y+u*P,r[2]=f*x+d*_+p*T,r[5]=f*g+d*b+p*E,r[8]=f*m+d*y+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fu.makeScale(e,t)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fu=new ct;function Fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fm(){let n=no("canvas");return n.style.display="block",n}var Mp={};function io(n){n in Mp||(Mp[n]=!0,console.warn(n))}function Nm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cy(){let n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=Qr(s.r),s.g=Qr(s.g),s.b=Qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}var wt=cy();function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Lr,lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=no("canvas")),Lr.width=e.width,Lr.height=e.height;let s=Lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hy=0,so=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nu(s[o].image)):r.push(Nu(s[o]))}else r=Nu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uy=0,Bu=new v,Cn=class n extends Hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_s,s=_s,r=rn,o=In,a=zn,l=Pi,c=n.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Gi(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=wd;Cn.DEFAULT_ANISOTROPY=1;var qt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(h+f)/4,P=(u+x)/4,C=(p+g)/4;return b>y&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=P/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Cn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ma=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Al.subVectors(this.max,Ko),Ur.subVectors(e.a,Ko),Fr.subVectors(e.b,Ko),Nr.subVectors(e.c,Ko),fs.subVectors(Fr,Ur),ps.subVectors(Nr,Fr),Xs.subVectors(Ur,Nr);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Xs.z,Xs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Xs.z,0,-Xs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Xs.y,Xs.x,0];return!Ou(t,Ur,Fr,Nr,Al)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Ur,Fr,Nr,Al))?!1:(Cl.crossVectors(fs,ps),t=[Cl.x,Cl.y,Cl.z],Ou(t,Ur,Fr,Nr,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new v,new v,new v,new v,new v,new v,new v,new v],bi=new v,El=new cn,Ur=new v,Fr=new v,Nr=new v,fs=new v,ps=new v,Xs=new v,Ko=new v,Al=new v,Cl=new v,qs=new v;function Ou(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qs.fromArray(n,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),h=i.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dy=new cn,$o=new v,zu=new v,di=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(zu)),this.expandByPoint($o.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$i=new v,ku=new v,Rl=new v,ms=new v,Vu=new v,Pl=new v,Gu=new v,Ms=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ku.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(ku);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=ms.dot(this.direction),l=-ms.dot(Rl),c=ms.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ku).addScaledVector(Rl,f),d}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,s,r){Vu.subVectors(t,e),Pl.subVectors(i,e),Gu.crossVectors(Vu,Pl);let o=this.direction.dot(Gu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);let l=a*this.direction.dot(Pl.crossVectors(ms,Pl));if(l<0)return null;let c=a*this.direction.dot(Vu.cross(ms));if(c<0||l+c>o)return null;let h=-a*ms.dot(Gu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,py)}lookAt(e,t,i){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),gs.crossVectors(i,$n),gs.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),gs.crossVectors(i,$n)),gs.normalize(),Il.crossVectors($n,gs),s[0]=gs.x,s[4]=Il.x,s[8]=$n.x,s[1]=gs.y,s[5]=Il.y,s[9]=$n.y,s[2]=gs.z,s[6]=Il.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],b=i[7],y=i[11],T=i[15],E=s[0],P=s[4],C=s[8],S=s[12],M=s[1],R=s[5],L=s[9],B=s[13],k=s[2],X=s[6],Y=s[10],te=s[14],O=s[3],oe=s[7],ye=s[11],ve=s[15];return r[0]=o*E+a*M+l*k+c*O,r[4]=o*P+a*R+l*X+c*oe,r[8]=o*C+a*L+l*Y+c*ye,r[12]=o*S+a*B+l*te+c*ve,r[1]=h*E+u*M+f*k+d*O,r[5]=h*P+u*R+f*X+d*oe,r[9]=h*C+u*L+f*Y+d*ye,r[13]=h*S+u*B+f*te+d*ve,r[2]=p*E+x*M+g*k+m*O,r[6]=p*P+x*R+g*X+m*oe,r[10]=p*C+x*L+g*Y+m*ye,r[14]=p*S+x*B+g*te+m*ve,r[3]=_*E+b*M+y*k+T*O,r[7]=_*P+b*R+y*X+T*oe,r[11]=_*C+b*L+y*Y+T*ye,r[15]=_*S+b*B+y*te+T*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,b=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,y=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,T=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,E=t*_+i*b+s*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=_*P,e[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*m-i*f*m)*P,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=b*P,e[5]=(h*g*r-p*f*r+p*s*d-t*g*d-h*s*m+t*f*m)*P,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(p*u*r-h*x*r-p*i*d+t*x*d+h*i*m-t*u*m)*P,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*P,e[12]=T*P,e[13]=(h*x*s-p*u*s+p*i*f-t*x*f-h*i*g+t*u*g)*P,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,b=l*h,y=l*u,T=i.x,E=i.y,P=i.z;return s[0]=(1-(x+m))*T,s[1]=(d+y)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(p+b)*P,s[9]=(g-_)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Br.set(s[0],s[1],s[2]).length(),o=Br.set(s[4],s[5],s[6]).length(),a=Br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);let c=1/r,h=1/o,u=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=u,Si.elements[9]*=u,Si.elements[10]*=u,t.setFromRotationMatrix(Si),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===pa)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Br=new v,Si=new Mt,fy=new v(0,0,0),py=new v(1,1,1),gs=new v,Il=new v,$n=new v,wp=new Mt,Tp=new bt,Qt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},my=0,Ep=new v,Or=new bt,Qi=new Mt,Dl=new v,Qo=new v,gy=new v,xy=new bt,Ap=new v(1,0,0),Cp=new v(0,1,0),Rp=new v(0,0,1),Pp={type:"added"},yy={type:"removed"},zr={type:"childadded",child:null},Hu={type:"childremoved",child:null},Yt=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new v,t=new Qt,i=new bt,s=new v(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ct}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,t){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dl.copy(e):Dl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Qo,Dl,this.up):Qi.lookAt(Dl,Qo,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Or.setFromRotationMatrix(Qi),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yy),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new v(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new v,es=new v,Wu=new v,ts=new v,kr=new v,Vr=new v,Ip=new v,Xu=new v,qu=new v,Yu=new v,Zu=new qt,ju=new qt,Ju=new qt,Hn=class n{constructor(e=new v,t=new v,i=new v){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wi.subVectors(s,t),es.subVectors(i,t),Wu.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(es),l=wi.dot(Wu),c=es.dot(es),h=es.dot(Wu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Zu.setScalar(0),ju.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,i),Ju.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zu,r.x),o.addScaledVector(ju,r.y),o.addScaledVector(Ju,r.z),o}static isFrontFacing(e,t,i,s){return wi.subVectors(i,t),es.subVectors(e,t),wi.cross(es).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),es.subVectors(this.a,this.b),wi.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;kr.subVectors(s,i),Vr.subVectors(r,i),Xu.subVectors(e,i);let l=kr.dot(Xu),c=Vr.dot(Xu);if(l<=0&&c<=0)return t.copy(i);qu.subVectors(e,s);let h=kr.dot(qu),u=Vr.dot(qu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(kr,o);Yu.subVectors(e,r);let d=kr.dot(Yu),p=Vr.dot(Yu);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Vr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Ip.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Ip,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(kr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Ku(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=Ud(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ku(o,r,e+1/3),this.g=Ku(o,r,e),this.b=Ku(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Bm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return wt.workingToColorSpace(wn.copy(this),e),Math.round(nt(wn.r*255,0,255))*65536+Math.round(nt(wn.g*255,0,255))*256+Math.round(nt(wn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),t);let i=wn.r,s=wn.g,r=wn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=vt){wt.workingToColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,s=wn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(Ll);let i=ca(xs.h,Ll.h,t),s=ca(xs.s,Ll.s,t),r=ca(xs.l,Ll.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new ke;ke.NAMES=Bm;var _y=0,Ai=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Js,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ln=new v,Ul=new re,vy=0,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}};var ga=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ue=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},My=0,ui=new Mt,$u=new Yt,Gr=new v,Qn=new cn,ea=new cn,yn=new v,ht=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?xa:ga)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(Qn.min,ea.min),Qn.expandByPoint(yn),yn.addVectors(Qn.max,ea.max),Qn.expandByPoint(yn)):(Qn.expandByPoint(ea.min),Qn.expandByPoint(ea.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),yn.add(Gr)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new v,l[C]=new v;let c=new v,h=new v,u=new v,f=new re,d=new re,p=new re,x=new v,g=new v;function m(C,S,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(R),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),a[C].add(x),a[S].add(x),a[M].add(x),l[C].add(g),l[S].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,S=_.length;C<S;++C){let M=_[C],R=M.start,L=M.count;for(let B=R,k=R+L;B<k;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new v,y=new v,T=new v,E=new v;function P(C){T.fromBufferAttribute(s,C),E.copy(T);let S=a[C];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);let R=y.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,S=_.length;C<S;++C){let M=_[C],R=M.start,L=M.count;for(let B=R,k=R+L;B<k;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dp=new Mt,Ys=new Ms,Fl=new di,Lp=new v,Nl=new v,Bl=new v,Ol=new v,Qu=new v,zl=new v,Up=new v,kl=new v,de=class extends Yt{constructor(e=new ht,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Qu.fromBufferAttribute(u,e),o?zl.addScaledVector(Qu,h):zl.addScaledVector(Qu.sub(t),h))}t.add(zl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(Fl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Fl,Lp)===null||Ys.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=b;y<T;y+=3){let E=a.getX(y),P=a.getX(y+1),C=a.getX(y+2);s=Vl(this,m,e,i,c,h,u,E,P,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);s=Vl(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=b;y<T;y+=3){let E=y,P=y+1,C=y+2;s=Vl(this,m,e,i,c,h,u,E,P,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,b=g+1,y=g+2;s=Vl(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function by(n,e,t,i,s,r,o,a){let l;if(e.side===On?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;kl.copy(a),kl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(kl);return c<t.near||c>t.far?null:{distance:c,point:kl.clone(),object:n}}function Vl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Nl),n.getVertexPosition(l,Bl),n.getVertexPosition(c,Ol);let h=by(n,e,t,i,Nl,Bl,Ol,Up);if(h){let u=new v;Hn.getBarycoord(Up,Nl,Bl,Ol,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new v,materialIndex:0};Hn.getNormal(Nl,Bl,Ol,f.normal),h.face=f,h.barycoord=u}return h}var qe=class n extends ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function p(x,g,m,_,b,y,T,E,P,C,S){let M=y/P,R=T/C,L=y/2,B=T/2,k=E/2,X=P+1,Y=C+1,te=0,O=0,oe=new v;for(let ye=0;ye<Y;ye++){let ve=ye*R-B;for(let De=0;De<X;De++){let Ye=De*M-L;oe[x]=Ye*_,oe[g]=ve*b,oe[m]=k,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(De/P),u.push(1-ye/C),te+=1}}for(let ye=0;ye<C;ye++)for(let ve=0;ve<P;ve++){let De=f+ve+X*ye,Ye=f+ve+X*(ye+1),rt=f+(ve+1)+X*(ye+1),et=f+(ve+1)+X*ye;l.push(De,Ye,et),l.push(Ye,rt,et),O+=6}a.addGroup(d,O,S),d+=O,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=fr(n[t]);for(let s in i)e[s]=i[s]}return e}function Sy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var pr={clone:fr,merge:Dn},wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ya=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ys=new v,Fp=new re,Np=new re,Tn=class extends ya{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Np),t.subVectors(Np,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hr=-90,Wr=1,uc=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Hr,Wr,e,t);s.layers=this.layers,this.add(s);let r=new Tn(Hr,Wr,e,t);r.layers=this.layers,this.add(r);let o=new Tn(Hr,Wr,e,t);o.layers=this.layers,this.add(o);let a=new Tn(Hr,Wr,e,t);a.layers=this.layers,this.add(a);let l=new Tn(Hr,Wr,e,t);l.layers=this.layers,this.add(l);let c=new Tn(Hr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},_a=class extends Cn{constructor(e=[],t=ur,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _a(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:ss});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=rn),new uc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},_n=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ey={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Qs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ao=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new v,lo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},co=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,ta=new v,qr=new v,Yr=new v,Zr=new re,na=new re,Om=new Mt,Gl=new v,ia=new v,Hl=new v,Bp=new re,ed=new re,Op=new re,Ma=class extends Yt{constructor(e=new co){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new va(t,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new lo(i,3,0,!1)),Xr.setAttribute("uv",new lo(i,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),Om.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Wl(Gl.set(-.5,-.5,0),Yr,o,qr,s,r),Wl(ia.set(.5,-.5,0),Yr,o,qr,s,r),Wl(Hl.set(.5,.5,0),Yr,o,qr,s,r),Bp.set(0,0),ed.set(1,0),Op.set(1,1);let a=e.ray.intersectTriangle(Gl,ia,Hl,!1,ta);if(a===null&&(Wl(ia.set(-.5,.5,0),Yr,o,qr,s,r),ed.set(0,1),a=e.ray.intersectTriangle(Gl,Hl,ia,!1,ta),a===null))return;let l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:Hn.getInterpolation(ta,Gl,ia,Hl,Bp,ed,Op,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wl(n,e,t,i,s,r){Zr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(na.x=r*Zr.x-s*Zr.y,na.y=s*Zr.x+r*Zr.y):na.copy(Zr),n.copy(e),n.x+=na.x,n.y+=na.y,n.applyMatrix4(Om)}var ti=class extends Cn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Wn,h=Wn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jr=new Mt,zp=new Mt,Xl=[],kp=new cn,Ay=new Mt,sa=new de,ra=new di,ba=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ay)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,jr),kp.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(kp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,jr),ra.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,jr),zp.multiplyMatrices(i,jr),sa.matrixWorld=zp,sa.raycast(e,Xl);for(let o=0,a=Xl.length;o<a;o++){let l=Xl[o];l.instanceId=r,l.object=this,t.push(l)}Xl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ti(new Float32Array(s*this.count),s,this.count,Qc,Ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},td=new v,Cy=new v,Ry=new ct,En=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=td.subVectors(i,t).cross(Cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(td),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ry.getNormalMatrix(e),s=this.coplanarPoint(td).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new di,Py=new re(.5,.5),ql=new v,uo=class{constructor(e=new En,t=new En,i=new En,s=new En,r=new En,o=new En){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,m-p,T-_).normalize(),s[1].setComponents(c+o,d+h,m+p,T+_).normalize(),s[2].setComponents(c+a,d+u,m+x,T+b).normalize(),s[3].setComponents(c-a,d-u,m-x,T-b).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,m-g,T-y).normalize();else if(s[4].setComponents(c-l,d-f,m-g,T-y).normalize(),t===Ei)s[5].setComponents(c+l,d+f,m+g,T+y).normalize();else if(t===pa)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=Py.distanceTo(e.center);return Zs.radius=.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ql.x=s.normal.x>0?e.max.x:e.min.x,ql.y=s.normal.y>0?e.max.y:e.min.y,ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fi=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fc=new v,pc=new v,Vp=new Mt,oa=new Ms,Yl=new di,nd=new v,Gp=new v,Xn=class extends Yt{constructor(e=new ht,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,e.ray.intersectsSphere(Yl)===!1)return;Vp.copy(s).invert(),oa.copy(e.ray).applyMatrix4(Vp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),b=Zl(this,e,oa,l,m,_,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Zl(this,e,oa,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Zl(this,e,oa,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Zl(this,e,oa,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(fc.fromBufferAttribute(a,s),pc.fromBufferAttribute(a,r),t.distanceSqToSegment(fc,pc,nd,Gp)>i)return;nd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(nd);if(!(c<e.near||c>e.far))return{distance:c,point:Gp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Hp=new v,Wp=new v,er=class extends Xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hp.fromBufferAttribute(t,s),Wp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hp.distanceTo(Wp);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sa=class extends Xn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Ci=class extends Cn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wa=class extends Cn{constructor(e,t,i=As,s,r,o,a=Wn,l=Wn,c,h=eo,u=1){if(h!==eo&&h!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ta=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bs=class n extends ht{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,x=s+1,g=new v,m=new v;for(let _=0;_<=p;_++){let b=0,y=0,T=0,E=0;if(_<=i){let S=_/i,M=S*Math.PI/2;y=-h-e*Math.cos(M),T=e*Math.sin(M),E=-e*Math.cos(M),b=S*u}else if(_<=i+r){let S=(_-i)/r;y=-h+S*t,T=e,E=0,b=u+S*f}else{let S=(_-i-r)/i,M=S*Math.PI/2;y=h+e*Math.sin(M),T=e*Math.cos(M),E=e*Math.sin(M),b=u+f+S*u}let P=Math.max(0,Math.min(1,b/d)),C=0;_===0?C=.5/s:_===p&&(C=-.5/s);for(let S=0;S<=s;S++){let M=S/s,R=M*Math.PI*2,L=Math.sin(R),B=Math.cos(R);m.x=-T*B,m.y=y,m.z=T*L,a.push(m.x,m.y,m.z),g.set(-T*B,E,T*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+C,P)}if(_>0){let S=(_-1)*x;for(let M=0;M<s;M++){let R=S+M,L=S+M+1,B=_*x+M,k=_*x+M+1;o.push(R,L,B),o.push(L,k,B)}}}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Pn=class n extends ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(d,2));function _(){let y=new v,T=new v,E=0,P=(t-e)/i;for(let C=0;C<=r;C++){let S=[],M=C/r,R=M*(t-e)+e;for(let L=0;L<=s;L++){let B=L/s,k=B*l+a,X=Math.sin(k),Y=Math.cos(k);T.x=R*X,T.y=-M*i+g,T.z=R*Y,u.push(T.x,T.y,T.z),y.set(X,P,Y).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-M),S.push(p++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let M=x[S][C],R=x[S+1][C],L=x[S+1][C+1],B=x[S][C+1];(e>0||S!==0)&&(h.push(M,R,B),E+=3),(t>0||S!==r-1)&&(h.push(R,L,B),E+=3)}c.addGroup(m,E,0),m+=E}function b(y){let T=p,E=new re,P=new v,C=0,S=y===!0?e:t,M=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let R=p;for(let L=0;L<=s;L++){let k=L/s*l+a,X=Math.cos(k),Y=Math.sin(k);P.x=S*Y,P.y=g*M,P.z=S*X,u.push(P.x,P.y,P.z),f.push(0,M,0),E.x=X*.5+.5,E.y=Y*.5*M+.5,d.push(E.x,E.y),p++}for(let L=0;L<s;L++){let B=T+L,k=R+L;y===!0?h.push(k,k+1,B):h.push(k+1,k,B),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tr=class n extends Bt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class n extends ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new v,y=new v,T=new v;for(let E=0;E<t.length;E+=3)d(t[E+0],b),d(t[E+1],y),d(t[E+2],T),l(b,y,T,_)}function l(_,b,y,T){let E=T+1,P=[];for(let C=0;C<=E;C++){P[C]=[];let S=_.clone().lerp(y,C/E),M=b.clone().lerp(y,C/E),R=E-C;for(let L=0;L<=R;L++)L===0&&C===E?P[C][L]=S:P[C][L]=S.clone().lerp(M,L/R)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let M=Math.floor(S/2);S%2===0?(f(P[C][M+1]),f(P[C+1][M]),f(P[C][M])):(f(P[C][M+1]),f(P[C+1][M+1]),f(P[C+1][M]))}}function c(_){let b=new v;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new v;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;o.push(y,1-T)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],T=o[_+4],E=Math.max(b,y,T),P=Math.min(b,y,T);E>.9&&P<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){let _=new v,b=new v,y=new v,T=new v,E=new re,P=new re,C=new re;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),T.copy(_).add(b).add(y).divideScalar(3);let R=g(T);x(E,M+0,_,R),x(P,M+2,b,R),x(C,M+4,y,R)}}function x(_,b,y,T){T<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new v,s=[],r=[],o=[],a=new v,l=new Mt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},po=class extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mc=class extends po{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var jl=new v,id=new Bd,sd=new Bd,rd=new Bd,gc=class extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new v){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jl.subVectors(s[0],s[1]).add(s[0]),c=jl);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),id.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),sd.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),rd.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(id.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sd.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rd.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(id.calc(l),sd.calc(l),rd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new v().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Iy(n,e){let t=1-n;return t*t*e}function Dy(n,e){return 2*(1-n)*n*e}function Ly(n,e){return n*n*e}function ha(n,e,t,i){return Iy(n,e)+Dy(n,t)+Ly(n,i)}function Uy(n,e){let t=1-n;return t*t*t*e}function Fy(n,e){let t=1-n;return 3*t*t*n*e}function Ny(n,e){return 3*(1-n)*n*n*e}function By(n,e){return n*n*n*e}function ua(n,e,t,i,s){return Uy(n,e)+Fy(n,t)+Ny(n,i)+By(n,s)}var Ea=class extends ni{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends ni{constructor(e=new v,t=new v,i=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y),ua(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends ni{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends ni{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends ni{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends ni{constructor(e=new v,t=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y),ha(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Xp(a,l.x,c.x,h.x,u.x),Xp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},dd=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:Ea,CubicBezierCurve3:xc,EllipseCurve:po,LineCurve:Aa,LineCurve3:yc,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:_c,SplineCurve:Ra}),vc=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new dd[s.type]().fromJSON(s))}return this}},Pa=class extends vc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ca(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ea(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ra(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new po(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class extends Pa{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}};function Oy(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=zm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Hy(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ia(r,o,t,a,l,c,0),o}function zm(n,e,t,i,s){let r;if(s===e_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=qp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=qp(o/i|0,n[o],n[o+1],r);return r&&mo(r,r.next)&&(La(r),r=r.next),r}function nr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(mo(t,t.next)||$t(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ia(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Zy(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ky(n,i,s,r):zy(n)){e.push(l.i,n.i,c.i),La(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Vy(nr(n),e),Ia(n,e,t,i,s,r,2)):o===2&&Gy(n,e,t,i,s,r):Ia(nr(n),e,t,i,s,r,1);break}}}function zy(n){let e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&aa(s,a,r,l,o,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ky(n,e,t,i){let s=n.prev,r=n,o=n.next;if($t(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=fd(d,p,e,t,i),_=fd(x,g,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&aa(a,h,l,u,c,f,b.x,b.y)&&$t(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&aa(a,h,l,u,c,f,y.x,y.y)&&$t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&aa(a,h,l,u,c,f,b.x,b.y)&&$t(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&aa(a,h,l,u,c,f,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vy(n,e){let t=n;do{let i=t.prev,s=t.next.next;!mo(i,s)&&Vm(i,t,t.next,s)&&Da(i,s)&&Da(s,i)&&(e.push(i.i,t.i,s.i),La(t),La(t.next),t=n=s),t=t.next}while(t!==n);return nr(t)}function Gy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ky(o,a)){let l=Gm(o,a);o=nr(o,o.next),l=nr(l,l.next),Ia(o,e,t,i,s,r,0),Ia(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Hy(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=zm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Jy(c))}s.sort(Wy);for(let r=0;r<s.length;r++)t=Xy(s[r],t);return t}function Wy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Xy(n,e){let t=qy(n,e);if(!t)return e;let i=Gm(t,n);return nr(i,i.next),nr(t,t.next)}function qy(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(mo(n,t))return t;do{if(mo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&km(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Da(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Yy(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Yy(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function Zy(n,e,t,i){let s=n;do s.z===0&&(s.z=fd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jy(s)}function jy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Jy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function km(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function aa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&km(n,e,t,i,s,r,o,a)}function Ky(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$y(n,e)&&(Da(n,e)&&Da(e,n)&&Qy(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||mo(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function mo(n,e){return n.x===e.x&&n.y===e.y}function Vm(n,e,t,i){let s=Kl($t(n,e,t)),r=Kl($t(n,e,i)),o=Kl($t(t,i,n)),a=Kl($t(t,i,e));return!!(s!==r&&o!==a||s===0&&Jl(n,t,e)||r===0&&Jl(n,i,e)||o===0&&Jl(t,n,i)||a===0&&Jl(t,e,i))}function Jl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Kl(n){return n>0?1:n<0?-1:0}function $y(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Da(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function Qy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gm(n,e){let t=pd(n.i,n.x,n.y),i=pd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qp(n,e,t,i){let s=pd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function La(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function e_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var md=class{static triangulate(e,t,i=2){return Oy(e,t,i)}},Vi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yp(e),Zp(i,e);let o=e.length;t.forEach(Yp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Zp(i,t[l]);let a=md.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Yp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ir=class n extends ht{constructor(e=new is([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:t_,b,y=!1,T,E,P,C;m&&(b=m.getSpacedPoints(h),y=!0,f=!1,T=m.computeFrenetFrames(h,!1),E=new v,P=new v,C=new v),f||(g=0,d=0,p=0,x=0);let S=a.extractPoints(c),M=S.shape,R=S.holes;if(!Vi.isClockWise(M)){M=M.reverse();for(let ae=0,K=R.length;ae<K;ae++){let j=R[ae];Vi.isClockWise(j)&&(R[ae]=j.reverse())}}function B(ae){let j=10000000000000001e-36,$=ae[0];for(let _e=1;_e<=ae.length;_e++){let me=_e%ae.length,Se=ae[me],Ze=Se.x-$.x,We=Se.y-$.y,I=Ze*Ze+We*We,w=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs($.x),Math.abs($.y)),G=j*w*w;if(I<=G){ae.splice(me,1),_e--;continue}$=Se}}B(M),R.forEach(B);let k=R.length,X=M;for(let ae=0;ae<k;ae++){let K=R[ae];M=M.concat(K)}function Y(ae,K,j){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(K,j)}let te=M.length;function O(ae,K,j){let $,_e,me,Se=ae.x-K.x,Ze=ae.y-K.y,We=j.x-ae.x,I=j.y-ae.y,w=Se*Se+Ze*Ze,G=Se*I-Ze*We;if(Math.abs(G)>Number.EPSILON){let ee=Math.sqrt(w),ue=Math.sqrt(We*We+I*I),ie=K.x-Ze/ee,Oe=K.y+Se/ee,be=j.x-I/ue,Le=j.y+We/ue,Fe=((be-ie)*I-(Le-Oe)*We)/(Se*I-Ze*We);$=ie+Se*Fe-ae.x,_e=Oe+Ze*Fe-ae.y;let fe=$*$+_e*_e;if(fe<=2)return new re($,_e);me=Math.sqrt(fe/2)}else{let ee=!1;Se>Number.EPSILON?We>Number.EPSILON&&(ee=!0):Se<-Number.EPSILON?We<-Number.EPSILON&&(ee=!0):Math.sign(Ze)===Math.sign(I)&&(ee=!0),ee?($=-Ze,_e=Se,me=Math.sqrt(w)):($=Se,_e=Ze,me=Math.sqrt(w/2))}return new re($/me,_e/me)}let oe=[];for(let ae=0,K=X.length,j=K-1,$=ae+1;ae<K;ae++,j++,$++)j===K&&(j=0),$===K&&($=0),oe[ae]=O(X[ae],X[j],X[$]);let ye=[],ve,De=oe.concat();for(let ae=0,K=k;ae<K;ae++){let j=R[ae];ve=[];for(let $=0,_e=j.length,me=_e-1,Se=$+1;$<_e;$++,me++,Se++)me===_e&&(me=0),Se===_e&&(Se=0),ve[$]=O(j[$],j[me],j[Se]);ye.push(ve),De=De.concat(ve)}let Ye;if(g===0)Ye=Vi.triangulateShape(X,R);else{let ae=[],K=[];for(let j=0;j<g;j++){let $=j/g,_e=d*Math.cos($*Math.PI/2),me=p*Math.sin($*Math.PI/2)+x;for(let Se=0,Ze=X.length;Se<Ze;Se++){let We=Y(X[Se],oe[Se],me);he(We.x,We.y,-_e),$===0&&ae.push(We)}for(let Se=0,Ze=k;Se<Ze;Se++){let We=R[Se];ve=ye[Se];let I=[];for(let w=0,G=We.length;w<G;w++){let ee=Y(We[w],ve[w],me);he(ee.x,ee.y,-_e),$===0&&I.push(ee)}$===0&&K.push(I)}}Ye=Vi.triangulateShape(ae,K)}let rt=Ye.length,et=p+x;for(let ae=0;ae<te;ae++){let K=f?Y(M[ae],De[ae],et):M[ae];y?(P.copy(T.normals[0]).multiplyScalar(K.x),E.copy(T.binormals[0]).multiplyScalar(K.y),C.copy(b[0]).add(P).add(E),he(C.x,C.y,C.z)):he(K.x,K.y,0)}for(let ae=1;ae<=h;ae++)for(let K=0;K<te;K++){let j=f?Y(M[K],De[K],et):M[K];y?(P.copy(T.normals[ae]).multiplyScalar(j.x),E.copy(T.binormals[ae]).multiplyScalar(j.y),C.copy(b[ae]).add(P).add(E),he(C.x,C.y,C.z)):he(j.x,j.y,u/h*ae)}for(let ae=g-1;ae>=0;ae--){let K=ae/g,j=d*Math.cos(K*Math.PI/2),$=p*Math.sin(K*Math.PI/2)+x;for(let _e=0,me=X.length;_e<me;_e++){let Se=Y(X[_e],oe[_e],$);he(Se.x,Se.y,u+j)}for(let _e=0,me=R.length;_e<me;_e++){let Se=R[_e];ve=ye[_e];for(let Ze=0,We=Se.length;Ze<We;Ze++){let I=Y(Se[Ze],ve[Ze],$);y?he(I.x,I.y+b[h-1].y,b[h-1].x+j):he(I.x,I.y,u+j)}}}Z(),W();function Z(){let ae=s.length/3;if(f){let K=0,j=te*K;for(let $=0;$<rt;$++){let _e=Ye[$];N(_e[2]+j,_e[1]+j,_e[0]+j)}K=h+g*2,j=te*K;for(let $=0;$<rt;$++){let _e=Ye[$];N(_e[0]+j,_e[1]+j,_e[2]+j)}}else{for(let K=0;K<rt;K++){let j=Ye[K];N(j[2],j[1],j[0])}for(let K=0;K<rt;K++){let j=Ye[K];N(j[0]+te*h,j[1]+te*h,j[2]+te*h)}}i.addGroup(ae,s.length/3-ae,0)}function W(){let ae=s.length/3,K=0;ce(X,K),K+=X.length;for(let j=0,$=R.length;j<$;j++){let _e=R[j];ce(_e,K),K+=_e.length}i.addGroup(ae,s.length/3-ae,1)}function ce(ae,K){let j=ae.length;for(;--j>=0;){let $=j,_e=j-1;_e<0&&(_e=ae.length-1);for(let me=0,Se=h+g*2;me<Se;me++){let Ze=te*me,We=te*(me+1),I=K+$+Ze,w=K+_e+Ze,G=K+_e+We,ee=K+$+We;se(I,w,G,ee)}}}function he(ae,K,j){l.push(ae),l.push(K),l.push(j)}function N(ae,K,j){Ee(ae),Ee(K),Ee(j);let $=s.length/3,_e=_.generateTopUV(i,s,$-3,$-2,$-1);D(_e[0]),D(_e[1]),D(_e[2])}function se(ae,K,j,$){Ee(ae),Ee(K),Ee($),Ee(K),Ee(j),Ee($);let _e=s.length/3,me=_.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);D(me[0]),D(me[1]),D(me[3]),D(me[1]),D(me[2]),D(me[3])}function Ee(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function D(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return n_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dd[s.type]().fromJSON(s)),new n(i,e.options)}},t_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(x,1-m)]:[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(g,1-m)]}};function n_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pi=class n extends fo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ua=class n extends ht{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,f=new re,d=new v,p=new v,x=new v,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let b=i+_*h*s,y=Math.sin(b),T=Math.cos(b);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),f.x=_/t,f.y=E/(e.length-1),a.push(f.x,f.y);let P=l[3*E+0]*y,C=l[3*E+1],S=l[3*E+0]*T;c.push(P,C,S)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,T=y,E=y+e.length,P=y+e.length+1,C=y+1;r.push(T,E,C),r.push(P,C,E)}this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},mi=class n extends fo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let b=0;b<c;b++){let y=b*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let b=_+c*m,y=_+c*(m+1),T=_+1+c*(m+1),E=_+1+c*m;d.push(b,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ss=class n extends ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new v,p=new re;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,b=_,y=_+i+1,T=_+i+2,E=_+1;a.push(b,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Fa=class n extends ht{constructor(e=new is([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Vi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Vi.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=Vi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],b=_[0]+u,y=_[1]+u,T=_[2]+u;i.push(b,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return i_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function i_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var gi=class n extends ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,f=new v,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],b=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+b*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+y,1-b),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let b=h[m][_+1],y=h[m][_],T=h[m+1][_],E=h[m+1][_+1];(m!==0||o>0)&&d.push(b,y,E),(m!==i-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sr=class n extends fo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bn=class n extends ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new v,u=new v,f=new v;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,_=(s+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Na=class extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new v,r=new v;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),jp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),jp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function jp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Ba=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dn=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ii=class extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mc=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $l(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function s_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ld,endingEnd:ld}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cd:r=e,a=2*t-i;break;case hd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cd:o=e,l=2*i-t;break;case hd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+_*o[c+T]+b*o[l+T]+y*o[u+T];return r}},wc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Tc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$l(t,this.TimeBufferType),this.values=$l(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$l(e.times,Array),values:$l(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case oc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&s_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=oc;var ws=class extends si{constructor(e,t,i){super(e,t,i)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=da;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Ec.prototype.ValueTypeName="color";var Ac=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Ac.prototype.ValueTypeName="number";var Cc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)bt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oa=class extends si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends si{constructor(e,t,i){super(e,t,i)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=da;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends si{constructor(e,t,i,s){super(e,t,i,s)}};Rc.prototype.ValueTypeName="vector";var nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Pc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Hm=new Pc,go=class{constructor(e){this.manager=e!==void 0?e:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=new WeakMap,Ic=class extends go{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=nc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Jr.get(o);u===void 0&&(u=[],Jr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=no("img");function l(){h(),t&&t(this);let u=Jr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Jr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),nc.remove(`image:${e}`);let f=Jr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),nc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var xi=class extends go{constructor(e){super(e)}load(e,t,i,s){let r=new Cn,o=new Ic(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},za=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},or=class extends za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},od=new Mt,Jp=new v,Kp=new v,gd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kp),t.updateMatrixWorld(),od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ar=class extends ya{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xd=class extends gd{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Dc=class extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Od="\\[\\]\\.:\\/",r_=new RegExp("["+Od+"]","g"),zd="[^"+Od+"]",o_="[^"+Od.replace("\\.","")+"]",a_=/((?:WC+[\/:])*)/.source.replace("WC",zd),l_=/(WCOD+)?/.source.replace("WCOD",o_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),h_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),u_=new RegExp("^"+a_+l_+c_+h_+"$"),d_=["material","materials","bones","map"],yd=class{constructor(e,t,i){let s=i||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(e){let t=u_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=yd;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tT=new Float32Array(1);var $p=new Mt,cr=class{constructor(e,t,i=0,s=1/0){this.ray=new Ms(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(e,t=!0,i=[]){return _d(e,this,i,t),i.sort(Qp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)_d(e[s],this,i,t);return i.sort(Qp),i}};function Qp(n,e){return n.distance-e.distance}function _d(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)_d(r[o],e,t,!0)}}var xo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var em=new v,Ql=new v,Kr=new v,$r=new v,ad=new v,f_=new v,p_=new v,ka=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){em.subVectors(e,this.start),Ql.subVectors(this.end,this.start);let i=Ql.dot(Ql),r=Ql.dot(em)/i;return t&&(r=nt(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=f_,i=p_){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Kr.subVectors(c,a),$r.subVectors(h,l),ad.subVectors(a,l);let u=Kr.dot(Kr),f=$r.dot($r),d=$r.dot(ad);if(u<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=d/f,o=nt(o,0,1);else{let p=Kr.dot(ad);if(f<=s)o=0,r=nt(-p/u,0,1);else{let x=Kr.dot($r),g=u*f-x*x;g!==0?r=nt((x*d-p*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=nt(-p/u,0,1)):o>1&&(o=1,r=nt((x-p)/u,0,1))}}return t.copy(a).add(Kr.multiplyScalar(r)),i.copy(l).add($r.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Va=class extends er{constructor(e=10,t=10,i=4473924,s=8947848){i=new ke(i),s=new ke(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new ht;h.setAttribute("position",new Ue(l,3)),h.setAttribute("color",new Ue(c,3));let u=new fi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ec=new cn,yo=class extends er{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ht;r.setIndex(new Nt(i,1)),r.setAttribute("position",new Nt(s,3)),super(r,new fi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ec.setFromObject(this.object),ec.isEmpty())return;let e=ec.min,t=ec.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var hr=class extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function kd(n,e,t,i){let s=m_(i);switch(t){case Rd:return n*e;case Qc:return n*e/s.components*s.byteLength;case eh:return n*e/s.components*s.byteLength;case Id:return n*e*2/s.components*s.byteLength;case th:return n*e*2/s.components*s.byteLength;case Pd:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case nh:return n*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(n,16)*Math.max(e,8)/4;case ih:case rh:return Math.max(n,8)*Math.max(e,8)/2;case ah:case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wh:case Th:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ah:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rh:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(n){switch(n){case Pi:case Td:return{byteLength:1,components:1};case _o:case Ed:case _i:return{byteLength:2,components:1};case Kc:case $c:return{byteLength:2,components:4};case As:case Jc:case Ii:return{byteLength:4,components:1};case Ad:case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function v_(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b_=`#ifdef USE_ALPHAHASH
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
#endif`,S_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
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
#endif`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,_v=`struct PhysicalMaterial {
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
}`,vv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
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
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,CM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
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
}`,LM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,FM=`uniform vec3 diffuse;
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
}`,NM=`#define LAMBERT
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
}`,BM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,zM=`#define MATCAP
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
}`,kM=`#define NORMAL
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
}`,VM=`#define NORMAL
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
}`,GM=`#define PHONG
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
}`,HM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,XM=`#define STANDARD
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
}`,qM=`#define TOON
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
}`,YM=`#define TOON
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
}`,ZM=`uniform float size;
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
}`,jM=`uniform vec3 diffuse;
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
}`,JM=`#include <common>
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
}`,KM=`uniform vec3 color;
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
}`,$M=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:M_,alphahash_pars_fragment:b_,alphamap_fragment:S_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:A_,aomap_pars_fragment:C_,batching_pars_vertex:R_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:D_,bsdfs:L_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:z_,color_fragment:k_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:H_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Y_,displacementmap_vertex:Z_,emissivemap_fragment:j_,emissivemap_pars_fragment:J_,colorspace_fragment:K_,colorspace_pars_fragment:$_,envmap_fragment:Q_,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:fv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:ov,fog_pars_fragment:av,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:dv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:xv,lights_physical_fragment:yv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:Mv,lights_fragment_end:bv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Ev,map_fragment:Av,map_pars_fragment:Cv,map_particle_fragment:Rv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Uv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Bv,normal_fragment_begin:Ov,normal_fragment_maps:zv,normal_pars_fragment:kv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:Zv,packing:jv,premultiplied_alpha_fragment:Jv,project_vertex:Kv,dithering_fragment:$v,dithering_pars_fragment:Qv,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:sM,shadowmask_pars_fragment:rM,skinbase_vertex:oM,skinning_pars_vertex:aM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:hM,specularmap_pars_fragment:uM,tonemapping_fragment:dM,tonemapping_pars_fragment:fM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:gM,uv_pars_vertex:xM,uv_vertex:yM,worldpos_vertex:_M,background_vert:vM,background_frag:MM,backgroundCube_vert:bM,backgroundCube_frag:SM,cube_vert:wM,cube_frag:TM,depth_vert:EM,depth_frag:AM,distanceRGBA_vert:CM,distanceRGBA_frag:RM,equirect_vert:PM,equirect_frag:IM,linedashed_vert:DM,linedashed_frag:LM,meshbasic_vert:UM,meshbasic_frag:FM,meshlambert_vert:NM,meshlambert_frag:BM,meshmatcap_vert:OM,meshmatcap_frag:zM,meshnormal_vert:kM,meshnormal_frag:VM,meshphong_vert:GM,meshphong_frag:HM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:qM,meshtoon_frag:YM,points_vert:ZM,points_frag:jM,shadow_vert:JM,shadow_frag:KM,sprite_vert:$M,sprite_frag:QM},Re={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Xi={basic:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ke(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ke(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Dn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Dn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Dn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Dn([Re.common,Re.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Dn([Re.lights,Re.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Xi.physical={uniforms:Dn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Dh={r:0,b:0,g:0},mr=new Qt,eb=new Mt;function tb(n,e,t,i,s,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,T=p(b);T===null?m(a,l):T&&T.isColor&&(m(T,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,y){let T=p(y);T&&(T.isCubeTexture||T.mapping===Ha)?(h===void 0&&(h=new de(new qe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:fr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mr.copy(y.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(mr)),h.material.toneMapped=wt.getTransfer(T.colorSpace)!==Lt,(u!==T||f!==T.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new de(new Mn(2,2),new vn({name:"BackgroundMaterial",uniforms:fr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=wt.getTransfer(T.colorSpace)!==Lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(Dh,Nd(n)),i.buffers.color.setClear(Dh.r,Dh.g,Dh.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g,dispose:_}}function nb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,R,L,B,k){let X=!1,Y=u(B,L,R);r!==Y&&(r=Y,c(r.object)),X=d(M,B,L,k),X&&p(M,B,L,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(M,R,L,B),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,R,L){let B=L.wireframe===!0,k=i[M.id];k===void 0&&(k={},i[M.id]=k);let X=k[R.id];X===void 0&&(X={},k[R.id]=X);let Y=X[B];return Y===void 0&&(Y=f(l()),X[B]=Y),Y}function f(M){let R=[],L=[],B=[];for(let k=0;k<t;k++)R[k]=0,L[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,R,L,B){let k=r.attributes,X=R.attributes,Y=0,te=L.getAttributes();for(let O in te)if(te[O].location>=0){let ye=k[O],ve=X[O];if(ve===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ye===void 0||ye.attribute!==ve||ve&&ye.data!==ve.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function p(M,R,L,B){let k={},X=R.attributes,Y=0,te=L.getAttributes();for(let O in te)if(te[O].location>=0){let ye=X[O];ye===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));let ve={};ve.attribute=ye,ye&&ye.data&&(ve.data=ye.data),k[O]=ve,Y++}r.attributes=k,r.attributesNum=Y,r.index=B}function x(){let M=r.newAttributes;for(let R=0,L=M.length;R<L;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){let L=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;L[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),k[M]!==R&&(n.vertexAttribDivisor(M,R),k[M]=R)}function _(){let M=r.newAttributes,R=r.enabledAttributes;for(let L=0,B=R.length;L<B;L++)R[L]!==M[L]&&(n.disableVertexAttribArray(L),R[L]=0)}function b(M,R,L,B,k,X,Y){Y===!0?n.vertexAttribIPointer(M,R,L,k,X):n.vertexAttribPointer(M,R,L,B,k,X)}function y(M,R,L,B){x();let k=B.attributes,X=L.getAttributes(),Y=R.defaultAttributeValues;for(let te in X){let O=X[te];if(O.location>=0){let oe=k[te];if(oe===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let ye=oe.normalized,ve=oe.itemSize,De=e.get(oe);if(De===void 0)continue;let Ye=De.buffer,rt=De.type,et=De.bytesPerElement,Z=rt===n.INT||rt===n.UNSIGNED_INT||oe.gpuType===Jc;if(oe.isInterleavedBufferAttribute){let W=oe.data,ce=W.stride,he=oe.offset;if(W.isInstancedInterleavedBuffer){for(let N=0;N<O.locationSize;N++)m(O.location+N,W.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let N=0;N<O.locationSize;N++)g(O.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let N=0;N<O.locationSize;N++)b(O.location+N,ve/O.locationSize,rt,ye,ce*et,(he+ve/O.locationSize*N)*et,Z)}else{if(oe.isInstancedBufferAttribute){for(let W=0;W<O.locationSize;W++)m(O.location+W,oe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let W=0;W<O.locationSize;W++)g(O.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let W=0;W<O.locationSize;W++)b(O.location+W,ve/O.locationSize,rt,ye,ve*et,ve/O.locationSize*W*et,Z)}}else if(Y!==void 0){let ye=Y[te];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(O.location,ye);break;case 3:n.vertexAttrib3fv(O.location,ye);break;case 4:n.vertexAttrib4fv(O.location,ye);break;default:n.vertexAttrib1fv(O.location,ye)}}}}_()}function T(){C();for(let M in i){let R=i[M];for(let L in R){let B=R[L];for(let k in B)h(B[k].object),delete B[k];delete R[L]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let R=i[M.id];for(let L in R){let B=R[L];for(let k in B)h(B[k].object),delete B[k];delete R[L]}delete i[M.id]}function P(M){for(let R in i){let L=i[R];if(L[M.id]===void 0)continue;let B=L[M.id];for(let k in B)h(B[k].object),delete B[k];delete L[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function ib(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let C=P===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ii&&!C)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function rb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new En,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,b=_*4,y=m.clippingState||null;l.value=y,y=h(p,f,b,d);for(let T=0;T!==b;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=d;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function ob(n){let e=new WeakMap;function t(o,a){return a===Ri?o.mapping=ur:a===Zc&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ri||a===Zc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var So=4,Wm=[.125,.215,.35,.446,.526,.582],yr=20,Vd=new ar,Xm=new ke,Gd=null,Hd=0,Wd=0,Xd=!1,xr=(1+Math.sqrt(5))/2,bo=1/xr,qm=[new v(-xr,bo,0),new v(xr,bo,0),new v(-bo,0,xr),new v(bo,0,xr),new v(0,xr,-bo),new v(0,xr,bo),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],ab=new v,To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ab}=r;Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Hd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:_i,format:zn,colorSpace:$s,depthBuffer:!1},s=Ym(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(r)),this._blurMaterial=cb(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Vd)}_sceneToCubeUV(e,t,i,s,r){let l=new Tn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xm),u.toneMapping=rs,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Zt({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new de(new qe,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(Xm),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;Lh(s,y*T,b>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ur||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Lh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qm[(s-r-1)%qm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*yr-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):yr;g>yr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);let m=[],_=0;for(let P=0;P<yr;++P){let C=P/x,S=Math.exp(-C*C/2);m.push(S),P===0?_+=S:P<g&&(_+=2*S)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-i;let y=this._sizeLods[s],T=3*y*(s>b-So?s-b+So:0),E=4*(this._cubeSize-y);Lh(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Vd)}};function lb(n){let e=[],t=[],i=[],s=n,r=n-So+1+Wm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-So?l=Wm[o-n+So-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),b=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let E=0;E<d;E++){let P=E%3*2/3-1,C=E>2?0:-1,S=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];_.set(S,x*p*E),b.set(f,g*p*E);let M=[E,E,E,E,E,E];y.set(M,m*p*E)}let T=new ht;T.setAttribute("position",new Nt(_,x)),T.setAttribute("uv",new Nt(b,g)),T.setAttribute("faceIndex",new Nt(y,m)),e.push(T),s>So&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ym(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cb(n,e,t){let i=new Float32Array(yr),s=new v(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Zm(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function jm(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function hb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ri||l===Zc,h=l===ur||l===dr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new To(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new To(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ub(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function db(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let b=0,y=_.length;b<y;b+=3){let T=_[b+0],E=_[b+1],P=_[b+2];f.push(T,E,E,P,P,T)}}else if(p!==void 0){let _=p.array;x=p.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let T=b+0,E=b+1,P=b+2;f.push(T,E,E,P,P,T)}}else return;let g=new(Fd(f)?xa:ga)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fb(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mb(n,e,t){let i=new WeakMap,s=new qt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),P=new ma(E,y,T,u);P.type=Ii,P.needsUpdate=!0;let C=b*4;for(let M=0;M<u;M++){let R=g[M],L=m[M],B=_[M],k=y*T*4*M;for(let X=0;X<R.count;X++){let Y=X*C;d===!0&&(s.fromBufferAttribute(R,X),E[k+Y+0]=s.x,E[k+Y+1]=s.y,E[k+Y+2]=s.z,E[k+Y+3]=0),p===!0&&(s.fromBufferAttribute(L,X),E[k+Y+4]=s.x,E[k+Y+5]=s.y,E[k+Y+6]=s.z,E[k+Y+7]=0),x===!0&&(s.fromBufferAttribute(B,X),E[k+Y+8]=s.x,E[k+Y+9]=s.y,E[k+Y+10]=s.z,E[k+Y+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new re(y,T)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function gb(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var pg=new Cn,Jm=new wa(1,1),mg=new ma,gg=new hc,xg=new _a,Km=[],$m=[],Qm=new Float32Array(16),eg=new Float32Array(9),tg=new Float32Array(4);function Eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Km[s];if(r===void 0&&(r=new Float32Array(s),Km[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nh(n,e){let t=$m[e];t===void 0&&(t=new Int32Array(e),$m[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function _b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function Mb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;tg.set(i),n.uniformMatrix2fv(this.addr,!1,tg),pn(t,i)}}function bb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;eg.set(i),n.uniformMatrix3fv(this.addr,!1,eg),pn(t,i)}}function Sb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Qm.set(i),n.uniformMatrix4fv(this.addr,!1,Qm),pn(t,i)}}function wb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function Eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function Ab(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function Cb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function Pb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function Ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function Db(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jm.compareFunction=Dd,r=Jm):r=pg,t.setTexture2D(e||r,s)}function Lb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gg,s)}function Ub(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xg,s)}function Fb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mg,s)}function Nb(n){switch(n){case 5126:return xb;case 35664:return yb;case 35665:return _b;case 35666:return vb;case 35674:return Mb;case 35675:return bb;case 35676:return Sb;case 5124:case 35670:return wb;case 35667:case 35671:return Tb;case 35668:case 35672:return Eb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}function Bb(n,e){n.uniform1fv(this.addr,e)}function Ob(n,e){let t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function zb(n,e){let t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function kb(n,e){let t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function Vb(n,e){let t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gb(n,e){let t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hb(n,e){let t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wb(n,e){n.uniform1iv(this.addr,e)}function Xb(n,e){n.uniform2iv(this.addr,e)}function qb(n,e){n.uniform3iv(this.addr,e)}function Yb(n,e){n.uniform4iv(this.addr,e)}function Zb(n,e){n.uniform1uiv(this.addr,e)}function jb(n,e){n.uniform2uiv(this.addr,e)}function Jb(n,e){n.uniform3uiv(this.addr,e)}function Kb(n,e){n.uniform4uiv(this.addr,e)}function $b(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pg,r[o])}function Qb(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gg,r[o])}function eS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xg,r[o])}function tS(n,e,t){let i=this.cache,s=e.length,r=Nh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mg,r[o])}function nS(n){switch(n){case 5126:return Bb;case 35664:return Ob;case 35665:return zb;case 35666:return kb;case 35674:return Vb;case 35675:return Gb;case 35676:return Hb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return jb;case 36295:return Jb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}var Yd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}},Zd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nS(t.type)}},jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},qd=/(\w+)(\])?(\[|\.)?/g;function ng(n,e){n.seq.push(e),n.map[e.id]=e}function iS(n,e,t){let i=n.name,s=i.length;for(qd.lastIndex=0;;){let r=qd.exec(i),o=qd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ng(t,c===void 0?new Yd(a,n,e):new Zd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new jd(a),ng(t,u)),t=u}}}var wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);iS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ig(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sS=37297,rS=0;function oS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var sg=new ct;function aS(n){wt._getMatrix(sg,wt.workingColorSpace,n);let e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case fa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+oS(n.getShaderSource(e),a)}else return r}function lS(n,e){let t=aS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cS(n,e){let t;switch(e){case Vc:t="Linear";break;case Gc:t="Reinhard";break;case Hc:t="Cineon";break;case Wc:t="ACESFilmic";break;case qc:t="AgX";break;case Yc:t="Neutral";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uh=new v;function hS(){wt.getLuminanceCoefficients(Uh);let n=Uh.x.toFixed(4),e=Uh.y.toFixed(4),t=Uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function dS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ja(n){return n!==""}function og(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(n){return n.replace(pS,gS)}var mS=new Map;function gS(n,e){let t=ut[e];if(t===void 0){let i=mS.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(t)}var xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(n){return n.replace(xS,yS)}function yS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function _S(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===im?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case dr:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case bm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function SS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_S(t),c=vS(t),h=MS(t),u=bS(t),f=SS(t),d=uS(t),p=dS(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(g=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?ut.tonemapping_pars_fragment:"",t.toneMapping!==rs?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=Jd(o),o=og(o,t),o=ag(o,t),a=Jd(a),a=og(a,t),a=ag(a,t),o=lg(o),a=lg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+o,y=_+m+a,T=ig(s,s.VERTEX_SHADER,b),E=ig(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(E)||"",X=L.trim(),Y=B.trim(),te=k.trim(),O=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let ye=rg(s,T,"vertex"),ve=rg(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ye+`
`+ve)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||te==="")&&(oe=!1);oe&&(R.diagnostics={runnable:O,programLog:X,vertexShader:{log:Y,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(T),s.deleteShader(E),C=new wo(s,x),S=fS(s,x)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,sS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var TS=0,Kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $d(e),t.set(e,i)),i}},$d=class{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}};function ES(n,e,t,i,s,r,o){let a=new ro,l=new Kd,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,R,L,B){let k=L.fog,X=B.geometry,Y=S.isMeshStandardMaterial?L.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),O=te&&te.mapping===Ha?te.image.height:null,oe=p[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=ye!==void 0?ye.length:0,De=0;X.morphAttributes.position!==void 0&&(De=1),X.morphAttributes.normal!==void 0&&(De=2),X.morphAttributes.color!==void 0&&(De=3);let Ye,rt,et,Z;if(oe){let pe=Xi[oe];Ye=pe.vertexShader,rt=pe.fragmentShader}else Ye=S.vertexShader,rt=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);let W=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),he=B.isInstancedMesh===!0,N=B.isBatchedMesh===!0,se=!!S.map,Ee=!!S.matcap,D=!!te,ae=!!S.aoMap,K=!!S.lightMap,j=!!S.bumpMap,$=!!S.normalMap,_e=!!S.displacementMap,me=!!S.emissiveMap,Se=!!S.metalnessMap,Ze=!!S.roughnessMap,We=S.anisotropy>0,I=S.clearcoat>0,w=S.dispersion>0,G=S.iridescence>0,ee=S.sheen>0,ue=S.transmission>0,ie=We&&!!S.anisotropyMap,Oe=I&&!!S.clearcoatMap,be=I&&!!S.clearcoatNormalMap,Le=I&&!!S.clearcoatRoughnessMap,Fe=G&&!!S.iridescenceMap,fe=G&&!!S.iridescenceThicknessMap,Ae=ee&&!!S.sheenColorMap,je=ee&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Ce=!!S.specularColorMap,it=!!S.specularIntensityMap,F=ue&&!!S.transmissionMap,ge=ue&&!!S.thicknessMap,Te=!!S.gradientMap,Ne=!!S.alphaMap,xe=S.alphaTest>0,le=!!S.alphaHash,Ve=!!S.extensions,H=rs;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(H=n.toneMapping);let q={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:rt,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:N,batchingColor:N&&B._colorsTexture!==null,instancing:he,instancingColor:he&&B.instanceColor!==null,instancingMorph:he&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:$s,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:Ee,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:O,aoMap:ae,lightMap:K,bumpMap:j,normalMap:$,displacementMap:f&&_e,emissiveMap:me,normalMapObjectSpace:$&&S.normalMapType===Am,normalMapTangentSpace:$&&S.normalMapType===Ih,metalnessMap:Se,roughnessMap:Ze,anisotropy:We,anisotropyMap:ie,clearcoat:I,clearcoatMap:Oe,clearcoatNormalMap:be,clearcoatRoughnessMap:Le,dispersion:w,iridescence:G,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:ee,sheenColorMap:Ae,sheenRoughnessMap:je,specularMap:ze,specularColorMap:Ce,specularIntensityMap:it,transmission:ue,transmissionMap:F,thicknessMap:ge,gradientMap:Te,opaque:S.transparent===!1&&S.blending===Js&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:le,combine:S.combine,mapUv:se&&x(S.map.channel),aoMapUv:ae&&x(S.aoMap.channel),lightMapUv:K&&x(S.lightMap.channel),bumpMapUv:j&&x(S.bumpMap.channel),normalMapUv:$&&x(S.normalMap.channel),displacementMapUv:_e&&x(S.displacementMap.channel),emissiveMapUv:me&&x(S.emissiveMap.channel),metalnessMapUv:Se&&x(S.metalnessMap.channel),roughnessMapUv:Ze&&x(S.roughnessMap.channel),anisotropyMapUv:ie&&x(S.anisotropyMap.channel),clearcoatMapUv:Oe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(S.sheenRoughnessMap.channel),specularMapUv:ze&&x(S.specularMap.channel),specularColorMapUv:Ce&&x(S.specularColorMap.channel),specularIntensityMapUv:it&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:ge&&x(S.thicknessMap.channel),alphaMapUv:Ne&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($||We),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(se||Ne),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:H,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&wt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===On,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||N)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q}function m(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(_(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=p[S.type],R;if(M){let L=Xi[M];R=pr.clone(L.uniforms)}else R=S.uniforms;return R}function T(S,M){let R;for(let L=0,B=h.length;L<B;L++){let k=h[L];if(k.cacheKey===M){R=k,++R.usedTimes;break}}return R===void 0&&(R=new wS(n,M,S,r),h.push(R)),R}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:C}}function AS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function CS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ug(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||CS),i.length>1&&i.sort(f||hg),s.length>1&&s.sort(f||hg)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function RS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ug,n.set(i,[o])):s>=r.length?(o=new ug,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new ke};break;case"SpotLight":t={position:new v,direction:new v,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new v,halfWidth:new v,halfHeight:new v};break}return n[e.id]=t,t}}}function IS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var DS=0;function LS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function US(n){let e=new PS,t=IS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new v);let s=new v,r=new Mt,o=new Mt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,b=0,y=0,T=0,E=0,P=0;c.sort(LS);for(let S=0,M=c.length;S<M;S++){let R=c[S],L=R.color,B=R.intensity,k=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*B,u+=L.g*B,f+=L.b*B;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],B);P++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,O=t.get(R);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=R.shadow.matrix,_++}i.directional[d]=Y,d++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(L).multiplyScalar(B),Y.distance=k,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[x]=Y;let te=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,te.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=te.matrix,R.castShadow){let O=t.get(R);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=X,y++}x++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(L).multiplyScalar(B),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=Y,g++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let te=R.shadow,O=t.get(R);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,O.shadowCameraNear=te.camera.near,O.shadowCameraFar=te.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=R.shadow.matrix,b++}i.point[p]=Y,p++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(B),Y.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[m]=Y,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==d||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,C.directionalLength=d,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=P,i.version=DS++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let b=c[m];if(b.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(b.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function dg(n){let e=new US(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function FS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new dg(n),e.set(s,[a])):r>=o.length?(a=new dg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`;function OS(n,e,t){let i=new uo,s=new re,r=new re,o=new qt,a=new Mc({depthPacking:Em}),l=new bc,c={},h=t.maxTextureSize,u={[ei]:On,[On]:ei,[on]:on},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:NS,fragmentShader:BS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ht;p.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let m=this.type;this.render=function(E,P,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ss),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==Wi&&this.type===Wi,k=m===Wi&&this.type!==Wi;for(let X=0,Y=E.length;X<Y;X++){let te=E[X],O=te.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let oe=O.getFrameExtents();if(s.multiply(oe),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,O.mapSize.y=r.y)),O.map===null||B===!0||k===!0){let ve=this.type!==Wi?{minFilter:Wn,magFilter:Wn}:{};O.map!==null&&O.map.dispose(),O.map=new Rn(s.x,s.y,ve),O.map.texture.name=te.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();let ye=O.getViewportCount();for(let ve=0;ve<ye;ve++){let De=O.getViewport(ve);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),L.viewport(o),O.updateMatrices(te,ve),i=O.getFrustum(),y(P,C,O.camera,te,this.type)}O.isPointLightShadow!==!0&&this.type===Wi&&_(O,C),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,R)};function _(E,P){let C=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,C,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,C,d,x,null)}function b(E,P,C,S){let M=null,R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let L=M.uuid,B=P.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let X=k[B];X===void 0&&(X=M.clone(),k[B]=X,P.addEventListener("dispose",T)),M=X}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Wi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=n.properties.get(M);L.light=C}return M}function y(E,P,C,S,M){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Wi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let B=e.update(E),k=E.material;if(Array.isArray(k)){let X=B.groups;for(let Y=0,te=X.length;Y<te;Y++){let O=X[Y],oe=k[O.materialIndex];if(oe&&oe.visible){let ye=b(E,oe,S,M);E.onBeforeShadow(n,E,P,C,B,ye,O),n.renderBufferDirect(C,null,B,ye,E,O),E.onAfterShadow(n,E,P,C,B,ye,O)}}}else if(k.visible){let X=b(E,k,S,M);E.onBeforeShadow(n,E,P,C,B,X,null),n.renderBufferDirect(C,null,B,X,E,null),E.onAfterShadow(n,E,P,C,B,X,null)}}let L=E.children;for(let B=0,k=L.length;B<k;B++)y(L[B],P,C,S,M)}function T(E){E.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var zS={[Lc]:Uc,[Fc]:Oc,[Nc]:zc,[Ks]:Bc,[Uc]:Lc,[Oc]:Fc,[zc]:Nc,[Bc]:Ks};function kS(n,e){function t(){let F=!1,ge=new qt,Te=null,Ne=new qt(0,0,0,0);return{setMask:function(xe){Te!==xe&&!F&&(n.colorMask(xe,xe,xe,xe),Te=xe)},setLocked:function(xe){F=xe},setClear:function(xe,le,Ve,H,q){q===!0&&(xe*=H,le*=H,Ve*=H),ge.set(xe,le,Ve,H),Ne.equals(ge)===!1&&(n.clearColor(xe,le,Ve,H),Ne.copy(ge))},reset:function(){F=!1,Te=null,Ne.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,Te=null,Ne=null,xe=null;return{setReversed:function(le){if(ge!==le){let Ve=e.get("EXT_clip_control");le?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ge=le;let H=xe;xe=null,this.setClear(H)}},getReversed:function(){return ge},setTest:function(le){le?W(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(le){Te!==le&&!F&&(n.depthMask(le),Te=le)},setFunc:function(le){if(ge&&(le=zS[le]),Ne!==le){switch(le){case Lc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Fc:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Nc:n.depthFunc(n.EQUAL);break;case Bc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=le}},setLocked:function(le){F=le},setClear:function(le){xe!==le&&(ge&&(le=1-le),n.clearDepth(le),xe=le)},reset:function(){F=!1,Te=null,Ne=null,xe=null,ge=!1}}}function s(){let F=!1,ge=null,Te=null,Ne=null,xe=null,le=null,Ve=null,H=null,q=null;return{setTest:function(pe){F||(pe?W(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(pe){ge!==pe&&!F&&(n.stencilMask(pe),ge=pe)},setFunc:function(pe,Ge,Ie){(Te!==pe||Ne!==Ge||xe!==Ie)&&(n.stencilFunc(pe,Ge,Ie),Te=pe,Ne=Ge,xe=Ie)},setOp:function(pe,Ge,Ie){(le!==pe||Ve!==Ge||H!==Ie)&&(n.stencilOp(pe,Ge,Ie),le=pe,Ve=Ge,H=Ie)},setLocked:function(pe){F=pe},setClear:function(pe){q!==pe&&(n.clearStencil(pe),q=pe)},reset:function(){F=!1,ge=null,Te=null,Ne=null,xe=null,le=null,Ve=null,H=null,q=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,b=null,y=null,T=null,E=null,P=new ke(0,0,0),C=0,S=!1,M=null,R=null,L=null,B=null,k=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,te=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(O)[1]),Y=te>=1):O.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Y=te>=2);let oe=null,ye={},ve=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ye=new qt().fromArray(ve),rt=new qt().fromArray(De);function et(F,ge,Te,Ne){let xe=new Uint8Array(4),le=n.createTexture();n.bindTexture(F,le),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Te;Ve++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ge+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return le}let Z={};Z[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(Ks),j(!1),$(vd),W(n.CULL_FACE),ae(ss);function W(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ce(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function he(F,ge){return u[F]!==ge?(n.bindFramebuffer(F,ge),u[F]=ge,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function N(F,ge){let Te=d,Ne=!1;if(F){Te=f.get(ge),Te===void 0&&(Te=[],f.set(ge,Te));let xe=F.textures;if(Te.length!==xe.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ve=xe.length;le<Ve;le++)Te[le]=n.COLOR_ATTACHMENT0+le;Te.length=xe.length,Ne=!0}}else Te[0]!==n.BACK&&(Te[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Te)}function se(F){return p!==F?(n.useProgram(F),p=F,!0):!1}let Ee={[vs]:n.FUNC_ADD,[rm]:n.FUNC_SUBTRACT,[om]:n.FUNC_REVERSE_SUBTRACT};Ee[am]=n.MIN,Ee[lm]=n.MAX;let D={[cm]:n.ZERO,[hm]:n.ONE,[um]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[xm]:n.SRC_ALPHA_SATURATE,[mm]:n.DST_COLOR,[fm]:n.DST_ALPHA,[dm]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[gm]:n.ONE_MINUS_DST_COLOR,[pm]:n.ONE_MINUS_DST_ALPHA,[ym]:n.CONSTANT_COLOR,[_m]:n.ONE_MINUS_CONSTANT_COLOR,[vm]:n.CONSTANT_ALPHA,[Mm]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(F,ge,Te,Ne,xe,le,Ve,H,q,pe){if(F===ss){x===!0&&(ce(n.BLEND),x=!1);return}if(x===!1&&(W(n.BLEND),x=!0),F!==sm){if(F!==g||pe!==S){if((m!==vs||y!==vs)&&(n.blendEquation(n.FUNC_ADD),m=vs,y=vs),pe)switch(F){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.ONE,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,b=null,T=null,E=null,P.set(0,0,0),C=0,g=F,S=pe}return}xe=xe||ge,le=le||Te,Ve=Ve||Ne,(ge!==m||xe!==y)&&(n.blendEquationSeparate(Ee[ge],Ee[xe]),m=ge,y=xe),(Te!==_||Ne!==b||le!==T||Ve!==E)&&(n.blendFuncSeparate(D[Te],D[Ne],D[le],D[Ve]),_=Te,b=Ne,T=le,E=Ve),(H.equals(P)===!1||q!==C)&&(n.blendColor(H.r,H.g,H.b,q),P.copy(H),C=q),g=F,S=!1}function K(F,ge){F.side===on?ce(n.CULL_FACE):W(n.CULL_FACE);let Te=F.side===On;ge&&(Te=!Te),j(Te),F.blending===Js&&F.transparent===!1?ae(ss):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ne=F.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function $(F){F!==tm?(W(n.CULL_FACE),F!==R&&(F===vd?n.cullFace(n.BACK):F===nm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),R=F}function _e(F){F!==L&&(Y&&n.lineWidth(F),L=F)}function me(F,ge,Te){F?(W(n.POLYGON_OFFSET_FILL),(B!==ge||k!==Te)&&(n.polygonOffset(ge,Te),B=ge,k=Te)):ce(n.POLYGON_OFFSET_FILL)}function Se(F){F?W(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=n.TEXTURE0+X-1),oe!==F&&(n.activeTexture(F),oe=F)}function We(F,ge,Te){Te===void 0&&(oe===null?Te=n.TEXTURE0+X-1:Te=oe);let Ne=ye[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},ye[Te]=Ne),(Ne.type!==F||Ne.texture!==ge)&&(oe!==Te&&(n.activeTexture(Te),oe=Te),n.bindTexture(F,ge||Z[F]),Ne.type=F,Ne.texture=ge)}function I(){let F=ye[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(F){Ye.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function je(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function ze(F,ge){let Te=c.get(ge);Te===void 0&&(Te=new WeakMap,c.set(ge,Te));let Ne=Te.get(F);Ne===void 0&&(Ne=n.getUniformBlockIndex(ge,F.name),Te.set(F,Ne))}function Ce(F,ge){let Ne=c.get(ge).get(F);l.get(ge)!==Ne&&(n.uniformBlockBinding(ge,Ne,F.__bindingPointIndex),l.set(ge,Ne))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,ye={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,b=null,y=null,T=null,E=null,P=new ke(0,0,0),C=0,S=!1,M=null,R=null,L=null,B=null,k=null,Ye.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:ce,bindFramebuffer:he,drawBuffers:N,useProgram:se,setBlending:ae,setMaterial:K,setFlipSided:j,setCullFace:$,setLineWidth:_e,setPolygonOffset:me,setScissorTest:Se,activeTexture:Ze,bindTexture:We,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Fe,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:Ce,texStorage2D:be,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:ie,compressedTexSubImage3D:Oe,scissor:Ae,viewport:je,reset:it}}function VS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return d?new OffscreenCanvas(I,w):no("canvas")}function x(I,w,G){let ee=1,ue=We(I);if((ue.width>G||ue.height>G)&&(ee=G/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor(ee*ue.width),Oe=Math.floor(ee*ue.height);u===void 0&&(u=p(ie,Oe));let be=w?p(ie,Oe):u;return be.width=ie,be.height=Oe,be.getContext("2d").drawImage(I,0,0,ie,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ie+"x"+Oe+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(I,w,G,ee,ue=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ie=w;if(w===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),w===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),G===n.UNSIGNED_INT&&(ie=n.RGB32UI),G===n.BYTE&&(ie=n.RGB8I),G===n.SHORT&&(ie=n.RGB16I),G===n.INT&&(ie=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),G===n.UNSIGNED_INT&&(ie=n.RGBA32UI),G===n.BYTE&&(ie=n.RGBA8I),G===n.SHORT&&(ie=n.RGBA16I),G===n.INT&&(ie=n.RGBA32I)),w===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),w===n.RGBA){let Oe=ue?fa:wt.getTransfer(ee);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=Oe===Lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(I,w){let G;return I?w===null||w===As||w===vo?G=n.DEPTH24_STENCIL8:w===Ii?G=n.DEPTH32F_STENCIL8:w===_o&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===As||w===vo?G=n.DEPTH_COMPONENT24:w===Ii?G=n.DEPTH_COMPONENT32F:w===_o&&(G=n.DEPTH_COMPONENT16),G}function T(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wn&&I.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){let w=I.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function P(I){let w=I.target;w.removeEventListener("dispose",P),M(w)}function C(I){let w=i.get(I);if(w.__webglInit===void 0)return;let G=I.source,ee=f.get(G);if(ee){let ue=ee[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(I),Object.keys(ee).length===0&&f.delete(G)}i.remove(I)}function S(I){let w=i.get(I);n.deleteTexture(w.__webglTexture);let G=I.source,ee=f.get(G);delete ee[w.__cacheKey],o.memory.textures--}function M(I){let w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ue=0;ue<w.__webglFramebuffer[ee].length;ue++)n.deleteFramebuffer(w.__webglFramebuffer[ee][ue]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=I.textures;for(let ee=0,ue=G.length;ee<ue;ee++){let ie=i.get(G[ee]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(I)}let R=0;function L(){R=0}function B(){let I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function k(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){let G=i.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,I,w);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function Y(I,w){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function te(I,w){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function O(I,w){let G=i.get(I);if(I.version>0&&G.__version!==I.version){W(G,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}let oe={[An]:n.REPEAT,[_s]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},ye={[Wn]:n.NEAREST,[wm]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[jc]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},ve={[Cm]:n.NEVER,[Um]:n.ALWAYS,[Rm]:n.LESS,[Dd]:n.LEQUAL,[Pm]:n.EQUAL,[Lm]:n.GEQUAL,[Im]:n.GREATER,[Dm]:n.NOTEQUAL};function De(I,w){if(w.type===Ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===jc||w.magFilter===Wa||w.magFilter===In||w.minFilter===rn||w.minFilter===jc||w.minFilter===Wa||w.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,oe[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,oe[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,oe[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ye[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ye[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wn||w.minFilter!==Wa&&w.minFilter!==In||w.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(I,w){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));let ee=w.source,ue=f.get(ee);ue===void 0&&(ue={},f.set(ee,ue));let ie=k(w);if(ie!==I.__cacheKey){ue[ie]===void 0&&(ue[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[ie].usedTimes++;let Oe=ue[I.__cacheKey];Oe!==void 0&&(ue[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(w)),I.__cacheKey=ie,I.__webglTexture=ue[ie].texture}return G}function rt(I,w,G){return Math.floor(Math.floor(I/G)/w)}function et(I,w,G,ee){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,G,ee,w.data);else{ie.sort((fe,Ae)=>fe.start-Ae.start);let Oe=0;for(let fe=1;fe<ie.length;fe++){let Ae=ie[Oe],je=ie[fe],ze=Ae.start+Ae.count,Ce=rt(je.start,w.width,4),it=rt(Ae.start,w.width,4);je.start<=ze+1&&Ce===it&&rt(je.start+je.count-1,w.width,4)===Ce?Ae.count=Math.max(Ae.count,je.start+je.count-Ae.start):(++Oe,ie[Oe]=je)}ie.length=Oe+1;let be=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let fe=0,Ae=ie.length;fe<Ae;fe++){let je=ie[fe],ze=Math.floor(je.start/4),Ce=Math.ceil(je.count/4),it=ze%w.width,F=Math.floor(ze/w.width),ge=Ce,Te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,it,F,ge,Te,G,ee,w.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function Z(I,w,G){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);let ue=Ye(I,w),ie=w.source;t.bindTexture(ee,I.__webglTexture,n.TEXTURE0+G);let Oe=i.get(ie);if(ie.version!==Oe.__version||ue===!0){t.activeTexture(n.TEXTURE0+G);let be=wt.getPrimaries(wt.workingColorSpace),Le=w.colorSpace===os?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===os||be===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let fe=x(w.image,!1,s.maxTextureSize);fe=Ze(w,fe);let Ae=r.convert(w.format,w.colorSpace),je=r.convert(w.type),ze=b(w.internalFormat,Ae,je,w.colorSpace,w.isVideoTexture);De(ee,w);let Ce,it=w.mipmaps,F=w.isVideoTexture!==!0,ge=Oe.__version===void 0||ue===!0,Te=ie.dataReady,Ne=T(w,fe);if(w.isDepthTexture)ze=y(w.format===Mo,w.type),ge&&(F?t.texStorage2D(n.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ae,je,null));else if(w.isDataTexture)if(it.length>0){F&&ge&&t.texStorage2D(n.TEXTURE_2D,Ne,ze,it[0].width,it[0].height);for(let xe=0,le=it.length;xe<le;xe++)Ce=it[xe],F?Te&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Ae,je,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,ze,Ce.width,Ce.height,0,Ae,je,Ce.data);w.generateMipmaps=!1}else F?(ge&&t.texStorage2D(n.TEXTURE_2D,Ne,ze,fe.width,fe.height),Te&&et(w,fe,Ae,je)):t.texImage2D(n.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ae,je,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,ze,it[0].width,it[0].height,fe.depth);for(let xe=0,le=it.length;xe<le;xe++)if(Ce=it[xe],w.format!==zn)if(Ae!==null)if(F){if(Te)if(w.layerUpdates.size>0){let Ve=kd(Ce.width,Ce.height,w.format,w.type);for(let H of w.layerUpdates){let q=Ce.data.subarray(H*Ve/Ce.data.BYTES_PER_ELEMENT,(H+1)*Ve/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,H,Ce.width,Ce.height,1,Ae,q)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,fe.depth,Ae,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,ze,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,fe.depth,Ae,je,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,ze,Ce.width,Ce.height,fe.depth,0,Ae,je,Ce.data)}else{F&&ge&&t.texStorage2D(n.TEXTURE_2D,Ne,ze,it[0].width,it[0].height);for(let xe=0,le=it.length;xe<le;xe++)Ce=it[xe],w.format!==zn?Ae!==null?F?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Te&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Ae,je,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,ze,Ce.width,Ce.height,0,Ae,je,Ce.data)}else if(w.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,ze,fe.width,fe.height,fe.depth),Te)if(w.layerUpdates.size>0){let xe=kd(fe.width,fe.height,w.format,w.type);for(let le of w.layerUpdates){let Ve=fe.data.subarray(le*xe/fe.data.BYTES_PER_ELEMENT,(le+1)*xe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Ae,je,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,je,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,Ae,je,fe.data);else if(w.isData3DTexture)F?(ge&&t.texStorage3D(n.TEXTURE_3D,Ne,ze,fe.width,fe.height,fe.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,je,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,Ae,je,fe.data);else if(w.isFramebufferTexture){if(ge)if(F)t.texStorage2D(n.TEXTURE_2D,Ne,ze,fe.width,fe.height);else{let xe=fe.width,le=fe.height;for(let Ve=0;Ve<Ne;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,ze,xe,le,0,Ae,je,null),xe>>=1,le>>=1}}else if(it.length>0){if(F&&ge){let xe=We(it[0]);t.texStorage2D(n.TEXTURE_2D,Ne,ze,xe.width,xe.height)}for(let xe=0,le=it.length;xe<le;xe++)Ce=it[xe],F?Te&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae,je,Ce):t.texImage2D(n.TEXTURE_2D,xe,ze,Ae,je,Ce);w.generateMipmaps=!1}else if(F){if(ge){let xe=We(fe);t.texStorage2D(n.TEXTURE_2D,Ne,ze,xe.width,xe.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,je,fe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ae,je,fe);g(w)&&m(ee),Oe.__version=ie.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function W(I,w,G){if(w.image.length!==6)return;let ee=Ye(I,w),ue=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let ie=i.get(ue);if(ue.version!==ie.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let Oe=wt.getPrimaries(wt.workingColorSpace),be=w.colorSpace===os?null:wt.getPrimaries(w.colorSpace),Le=w.colorSpace===os||Oe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let le=0;le<6;le++)!Fe&&!fe?Ae[le]=x(w.image[le],!0,s.maxCubemapSize):Ae[le]=fe?w.image[le].image:w.image[le],Ae[le]=Ze(w,Ae[le]);let je=Ae[0],ze=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),it=b(w.internalFormat,ze,Ce,w.colorSpace),F=w.isVideoTexture!==!0,ge=ie.__version===void 0||ee===!0,Te=ue.dataReady,Ne=T(w,je);De(n.TEXTURE_CUBE_MAP,w);let xe;if(Fe){F&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,it,je.width,je.height);for(let le=0;le<6;le++){xe=Ae[le].mipmaps;for(let Ve=0;Ve<xe.length;Ve++){let H=xe[Ve];w.format!==zn?ze!==null?F?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,H.width,H.height,ze,H.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,it,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,H.width,H.height,ze,Ce,H.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,it,H.width,H.height,0,ze,Ce,H.data)}}}else{if(xe=w.mipmaps,F&&ge){xe.length>0&&Ne++;let le=We(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,it,le.width,le.height)}for(let le=0;le<6;le++)if(fe){F?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae[le].width,Ae[le].height,ze,Ce,Ae[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,Ae[le].width,Ae[le].height,0,ze,Ce,Ae[le].data);for(let Ve=0;Ve<xe.length;Ve++){let q=xe[Ve].image[le].image;F?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,q.width,q.height,ze,Ce,q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,it,q.width,q.height,0,ze,Ce,q.data)}}else{F?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,Ce,Ae[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,ze,Ce,Ae[le]);for(let Ve=0;Ve<xe.length;Ve++){let H=xe[Ve];F?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,ze,Ce,H.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,it,ze,Ce,H.image[le])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),ie.__version=ue.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ce(I,w,G,ee,ue,ie){let Oe=r.convert(G.format,G.colorSpace),be=r.convert(G.type),Le=b(G.internalFormat,Oe,be,G.colorSpace),Fe=i.get(w),fe=i.get(G);if(fe.__renderTarget=w,!Fe.__hasExternalTextures){let Ae=Math.max(1,w.width>>ie),je=Math.max(1,w.height>>ie);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,ie,Le,Ae,je,w.depth,0,Oe,be,null):t.texImage2D(ue,ie,Le,Ae,je,0,Oe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ue,fe.__webglTexture,0,_e(w)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ue,fe.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(I,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){let ee=w.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,ie=y(w.stencilBuffer,ue),Oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=_e(w);me(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ie,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ie,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ie,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,I)}else{let ee=w.textures;for(let ue=0;ue<ee.length;ue++){let ie=ee[ue],Oe=r.convert(ie.format,ie.colorSpace),be=r.convert(ie.type),Le=b(ie.internalFormat,Oe,be,ie.colorSpace),Fe=_e(w);G&&me(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Le,w.width,w.height):me(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Le,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Le,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let ue=ee.__webglTexture,ie=_e(w);if(w.depthTexture.format===eo)me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(w.depthTexture.format===Mo)me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function se(I){let w=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let ue=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),w.__depthDisposeCallback=ue}w.__boundDepthTexture=ee}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let ee=I.texture.mipmaps;ee&&ee.length>0?N(w.__webglFramebuffer[0],I):N(w.__webglFramebuffer,I)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),he(w.__webglDepthbuffer[ee],I,!1);else{let ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ie)}}else{let ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),he(w.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(I,w,G){let ee=i.get(I);w!==void 0&&ce(ee.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&se(I)}function D(I){let w=I.texture,G=i.get(I),ee=i.get(w);I.addEventListener("dispose",P);let ue=I.textures,ie=I.isWebGLCubeRenderTarget===!0,Oe=ue.length>1;if(Oe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let Le=0;Le<w.mipmaps.length;Le++)G.__webglFramebuffer[be][Le]=n.createFramebuffer()}else G.__webglFramebuffer[be]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)G.__webglFramebuffer[be]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let be=0,Le=ue.length;be<Le;be++){let Fe=i.get(ue[be]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&me(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<ue.length;be++){let Le=ue[be];G.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[be]);let Fe=r.convert(Le.format,Le.colorSpace),fe=r.convert(Le.type),Ae=b(Le.internalFormat,Fe,fe,Le.colorSpace,I.isXRRenderTarget===!0),je=_e(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ae,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,G.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),De(n.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)ce(G.__webglFramebuffer[be][Le],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le);else ce(G.__webglFramebuffer[be],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Le=ue.length;be<Le;be++){let Fe=ue[be],fe=i.get(Fe),Ae=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,fe.__webglTexture),De(Ae,Fe),ce(G.__webglFramebuffer,I,Fe,n.COLOR_ATTACHMENT0+be,Ae,0),g(Fe)&&m(Ae)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ee.__webglTexture),De(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)ce(G.__webglFramebuffer[Le],I,w,n.COLOR_ATTACHMENT0,be,Le);else ce(G.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,be,0);g(w)&&m(be),t.unbindTexture()}I.depthBuffer&&se(I)}function ae(I){let w=I.textures;for(let G=0,ee=w.length;G<ee;G++){let ue=w[G];if(g(ue)){let ie=_(I),Oe=i.get(ue).__webglTexture;t.bindTexture(ie,Oe),m(ie),t.unbindTexture()}}}let K=[],j=[];function $(I){if(I.samples>0){if(me(I)===!1){let w=I.textures,G=I.width,ee=I.height,ue=n.COLOR_BUFFER_BIT,ie=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(I),be=w.length>1;if(be)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let Le=I.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let fe=i.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ue,n.NEAREST),l===!0&&(K.length=0,j.length=0,K.push(n.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(K.push(ie),j.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let fe=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function _e(I){return Math.min(s.maxSamples,I.samples)}function me(I){let w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Ze(I,w){let G=I.colorSpace,ee=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==$s&&G!==os&&(wt.getTransfer(G)===Lt?(ee!==zn||ue!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=O,this.rebindTextures=Ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=me}function GS(n,e){function t(i,s=os){let r,o=wt.getTransfer(s);if(i===Pi)return n.UNSIGNED_BYTE;if(i===Kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Td)return n.BYTE;if(i===Ed)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===As)return n.UNSIGNED_INT;if(i===Ii)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Pd)return n.RGB;if(i===zn)return n.RGBA;if(i===eo)return n.DEPTH_COMPONENT;if(i===Mo)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===eh)return n.RED_INTEGER;if(i===Id)return n.RG;if(i===th)return n.RG_INTEGER;if(i===nh)return n.RGBA_INTEGER;if(i===Xa||i===qa||i===Ya||i===Za)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ih||i===sh||i===rh||i===oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ah||i===lh||i===ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ah||i===lh)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ch)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh||i===yh||i===_h||i===vh||i===Mh||i===bh||i===Sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ph)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Th||i===Eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wh)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ah||i===Ch||i===Rh||i===Ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ah)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
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

}`,Qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:HS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new Qd,m={},_=t.getContextAttributes(),b=null,y=null,T=[],E=[],P=new re,C=null,S=new Tn;S.viewport=new qt;let M=new Tn;M.viewport=new qt;let R=[S,M],L=new Dc,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let W=T[Z];return W===void 0&&(W=new oo,T[Z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Z){let W=T[Z];return W===void 0&&(W=new oo,T[Z]=W),W.getGripSpace()},this.getHand=function(Z){let W=T[Z];return W===void 0&&(W=new oo,T[Z]=W),W.getHandSpace()};function X(Z){let W=E.indexOf(Z.inputSource);if(W===-1)return;let ce=T[W];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let W=E[Z];W!==null&&(E[Z]=null,T[Z].disconnect(W))}B=null,k=null,g.reset();for(let Z in m)delete m[Z];e.setRenderTarget(b),d=null,f=null,u=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,he=null,N=null;_.depth&&(N=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Mo:eo,he=_.stencil?vo:As);let se={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Rn(f.textureWidth,f.textureHeight,{format:zn,type:Pi,depthTexture:new wa(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Rn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(Z){for(let W=0;W<Z.removed.length;W++){let ce=Z.removed[W],he=E.indexOf(ce);he>=0&&(E[he]=null,T[he].disconnect(ce))}for(let W=0;W<Z.added.length;W++){let ce=Z.added[W],he=E.indexOf(ce);if(he===-1){for(let se=0;se<T.length;se++)if(se>=E.length){E.push(ce),he=se;break}else if(E[se]===null){E[se]=ce,he=se;break}if(he===-1)break}let N=T[he];N&&N.connect(ce)}}let O=new v,oe=new v;function ye(Z,W,ce){O.setFromMatrixPosition(W.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);let he=O.distanceTo(oe),N=W.projectionMatrix.elements,se=ce.projectionMatrix.elements,Ee=N[14]/(N[10]-1),D=N[14]/(N[10]+1),ae=(N[9]+1)/N[5],K=(N[9]-1)/N[5],j=(N[8]-1)/N[0],$=(se[8]+1)/se[0],_e=Ee*j,me=Ee*$,Se=he/(-j+$),Ze=Se*-j;if(W.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),N[10]===-1)Z.projectionMatrix.copy(W.projectionMatrix),Z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let We=Ee+Se,I=D+Se,w=_e-Ze,G=me+(he-Ze),ee=ae*D/I*We,ue=K*D/I*We;Z.projectionMatrix.makePerspective(w,G,ee,ue,We,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,W){W===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(W.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let W=Z.near,ce=Z.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),L.near=M.near=S.near=W,L.far=M.far=S.far=ce,(B!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,k=L.far),L.layers.mask=Z.layers.mask|6,S.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let he=Z.parent,N=L.cameras;ve(L,he);for(let se=0;se<N.length;se++)ve(N[se],he);N.length===2?ye(L,S,M):L.projectionMatrix.copy(S.projectionMatrix),De(Z,L,he)};function De(Z,W,ce){ce===null?Z.matrix.copy(W.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(W.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(W.projectionMatrix),Z.projectionMatrixInverse.copy(W.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=to*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return m[Z]};let Ye=null;function rt(Z,W){if(h=W.getViewerPose(c||o),p=W,h!==null){let ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let he=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,he=!0);for(let D=0;D<ce.length;D++){let ae=ce[D],K=null;if(d!==null)K=d.getViewport(ae);else{let $=u.getViewSubImage(f,ae);K=$.viewport,D===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let j=R[D];j===void 0&&(j=new Tn,j.layers.enable(D),j.viewport=new qt,R[D]=j),j.matrix.fromArray(ae.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ae.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),D===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),he===!0&&L.cameras.push(j)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(N&&N.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<ce.length;D++){let ae=ce[D].camera;if(ae){let K=m[ae];K||(K=new Ta,m[ae]=K);let j=u.getCameraImage(ae);K.sourceTexture=j}}}}for(let ce=0;ce<T.length;ce++){let he=E[ce],N=T[ce];he!==null&&N!==void 0&&N.update(he,W,c||o)}Ye&&Ye(Z,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),p=null}let et=new fg;et.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}},gr=new Qt,XS=new Mt;function qS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Nd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===On&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===On&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,gr.copy(y),gr.x*=-1,gr.y*=-1,gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(gr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let y=b.program;i.uniformBlockBinding(_,y)}function c(_,b){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let T=b.program;i.updateUBOMapping(_,T);let E=e.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function h(_){let b=u();_.__bindingPointIndex=b;let y=n.createBuffer(),T=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=s[_.id],y=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,P=y.length;E<P;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,M=C.length;S<M;S++){let R=C[S];if(d(R,E,S,T)===!0){let L=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],k=0;for(let X=0;X<B.length;X++){let Y=B[X],te=x(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,L+k,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,b,y,T){let E=_.value,P=b+"_"+y;if(T[P]===void 0)return typeof E=="number"||typeof E=="boolean"?T[P]=E:T[P]=E.clone(),!0;{let C=T[P];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[P]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(_){let b=_.uniforms,y=0,T=16;for(let P=0,C=b.length;P<C;P++){let S=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,R=S.length;M<R;M++){let L=S[M],B=Array.isArray(L.value)?L.value:[L.value];for(let k=0,X=B.length;k<X;k++){let Y=B[k],te=x(Y),O=y%T,oe=O%te.boundary,ye=O+oe;y+=oe,ye!==0&&T-ye<te.storage&&(y+=T-ye),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=te.storage}}}let E=y%T;return E>0&&(y+=T-E),_.__size=y,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function g(_){let b=_.target;b.removeEventListener("dispose",g);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Fh=class{constructor(e={}){let{canvas:t=Fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=vt;let E=0,P=0,C=null,S=-1,M=null,R=new qt,L=new qt,B=null,k=new ke(0),X=0,Y=t.width,te=t.height,O=1,oe=null,ye=null,ve=new qt(0,0,Y,te),De=new qt(0,0,Y,te),Ye=!1,rt=new uo,et=!1,Z=!1,W=new Mt,ce=new v,he=new qt,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function Ee(){return C===null?O:1}let D=i;function ae(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){let z="webgl2";if(D=ae(z,A),D===null)throw ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,j,$,_e,me,Se,Ze,We,I,w,G,ee,ue,ie,Oe,be,Le,Fe,fe,Ae,je,ze,Ce,it;function F(){K=new ub(D),K.init(),ze=new GS(D,K),j=new sb(D,K,e,ze),$=new kS(D,K),j.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),_e=new pb(D),me=new AS,Se=new VS(D,K,$,me,j,ze,_e),Ze=new ob(y),We=new hb(y),I=new v_(D),Ce=new nb(D,I),w=new db(D,I,_e,Ce),G=new gb(D,w,I,_e),fe=new mb(D,j,Se),be=new rb(me),ee=new ES(y,Ze,We,K,j,Ce,be),ue=new qS(y,me),ie=new RS,Oe=new FS(K),Fe=new tb(y,Ze,We,$,G,d,l),Le=new OS(y,G,j),it=new YS(D,_e,j,$),Ae=new ib(D,K,_e),je=new fb(D,K,_e),_e.programs=ee.programs,y.capabilities=j,y.extensions=K,y.properties=me,y.renderLists=ie,y.shadowMap=Le,y.state=$,y.info=_e}F();let ge=new ef(y,D);this.xr=ge,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(Y,te,!1))},this.getSize=function(A){return A.set(Y,te)},this.setSize=function(A,z,J=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,te=z,t.width=Math.floor(A*O),t.height=Math.floor(z*O),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Y*O,te*O).floor()},this.setDrawingBufferSize=function(A,z,J){Y=A,te=z,O=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,z,J,Q){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,z,J,Q),$.viewport(R.copy(ve).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,z,J,Q){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,z,J,Q),$.scissor(L.copy(De).multiplyScalar(O).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(A){$.setScissorTest(Ye=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let Q=0;if(A){let V=!1;if(C!==null){let Me=C.texture.format;V=Me===nh||Me===th||Me===eh}if(V){let Me=C.texture.type,Pe=Me===Pi||Me===As||Me===_o||Me===vo||Me===Kc||Me===$c,He=Fe.getClearColor(),Be=Fe.getClearAlpha(),Ke=He.r,tt=He.g,Xe=He.b;Pe?(p[0]=Ke,p[1]=tt,p[2]=Xe,p[3]=Be,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Ke,x[1]=tt,x[2]=Xe,x[3]=Be,D.clearBufferiv(D.COLOR,0,x))}else Q|=D.COLOR_BUFFER_BIT}z&&(Q|=D.DEPTH_BUFFER_BIT),J&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Fe.dispose(),ie.dispose(),Oe.dispose(),me.dispose(),Ze.dispose(),We.dispose(),G.dispose(),Ce.dispose(),it.dispose(),ee.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ie),ge.removeEventListener("sessionend",st),St.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=_e.autoReset,z=Le.enabled,J=Le.autoUpdate,Q=Le.needsUpdate,V=Le.type;F(),_e.autoReset=A,Le.enabled=z,Le.autoUpdate=J,Le.needsUpdate=Q,Le.type=V}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){let z=A.target;z.removeEventListener("dispose",le),Ve(z)}function Ve(A){H(A),me.remove(A)}function H(A){let z=me.get(A).programs;z!==void 0&&(z.forEach(function(J){ee.releaseProgram(J)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,Q,V,Me){z===null&&(z=N);let Pe=V.isMesh&&V.matrixWorld.determinant()<0,He=Tl(A,z,J,Q,V);$.setMaterial(Q,Pe);let Be=J.index,Ke=1;if(Q.wireframe===!0){if(Be=w.getWireframeAttribute(J),Be===void 0)return;Ke=2}let tt=J.drawRange,Xe=J.attributes.position,_t=tt.start*Ke,kt=(tt.start+tt.count)*Ke;Me!==null&&(_t=Math.max(_t,Me.start*Ke),kt=Math.min(kt,(Me.start+Me.count)*Ke)),Be!==null?(_t=Math.max(_t,0),kt=Math.min(kt,Be.count)):Xe!=null&&(_t=Math.max(_t,0),kt=Math.min(kt,Xe.count));let tn=kt-_t;if(tn<0||tn===1/0)return;Ce.setup(V,Q,He,J,Be);let Wt,Gt=Ae;if(Be!==null&&(Wt=I.get(Be),Gt=je,Gt.setIndex(Wt)),V.isMesh)Q.wireframe===!0?($.setLineWidth(Q.wireframeLinewidth*Ee()),Gt.setMode(D.LINES)):Gt.setMode(D.TRIANGLES);else if(V.isLine){let Je=Q.linewidth;Je===void 0&&(Je=1),$.setLineWidth(Je*Ee()),V.isLineSegments?Gt.setMode(D.LINES):V.isLineLoop?Gt.setMode(D.LINE_LOOP):Gt.setMode(D.LINE_STRIP)}else V.isPoints?Gt.setMode(D.POINTS):V.isSprite&&Gt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Je=V._multiDrawStarts,Jt=V._multiDrawCounts,Pt=V._multiDrawCount,Jn=Be?I.get(Be).bytesPerElement:1,Dr=me.get(Q).currentProgram.getUniforms();for(let Kn=0;Kn<Pt;Kn++)Dr.setValue(D,"_gl_DrawID",Kn),Gt.render(Je[Kn]/Jn,Jt[Kn])}else if(V.isInstancedMesh)Gt.renderInstances(_t,tn,V.count);else if(J.isInstancedBufferGeometry){let Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Jt=Math.min(J.instanceCount,Je);Gt.renderInstances(_t,tn,Jt)}else Gt.render(_t,tn)};function q(A,z,J){A.transparent===!0&&A.side===on&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,gt(A,z,J),A.side=ei,A.needsUpdate=!0,gt(A,z,J),A.side=on):gt(A,z,J)}this.compile=function(A,z,J=null){J===null&&(J=A),m=Oe.get(J),m.init(z),b.push(m),J.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==J&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let Q=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Me=V.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){let He=Me[Pe];q(He,J,V),Q.add(He)}else q(Me,J,V),Q.add(Me)}),m=b.pop(),Q},this.compileAsync=function(A,z,J=null){let Q=this.compile(A,z,J);return new Promise(V=>{function Me(){if(Q.forEach(function(Pe){me.get(Pe).currentProgram.isReady()&&Q.delete(Pe)}),Q.size===0){V(A);return}setTimeout(Me,10)}K.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let pe=null;function Ge(A){pe&&pe(A)}function Ie(){St.stop()}function st(){St.start()}let St=new fg;St.setAnimationLoop(Ge),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){pe=A,ge.setAnimationLoop(A),A===null?St.stop():St.start()},ge.addEventListener("sessionstart",Ie),ge.addEventListener("sessionend",st),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(z),z=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,C),m=Oe.get(A,b.length),m.init(z),b.push(m),W.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),rt.setFromProjectionMatrix(W,Ei,z.reversedDepth),Z=this.localClippingEnabled,et=be.init(this.clippingPlanes,Z),g=ie.get(A,_.length),g.init(),_.push(g),ge.enabled===!0&&ge.isPresenting===!0){let Me=y.xr.getDepthSensingMesh();Me!==null&&ot(Me,z,-1/0,y.sortObjects)}ot(A,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(oe,ye),se=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,se&&Fe.addToRenderList(g,A),this.info.render.frame++,et===!0&&be.beginShadows();let J=m.state.shadowsArray;Le.render(J,A,z),et===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,V=g.transmissive;if(m.setupLights(),z.isArrayCamera){let Me=z.cameras;if(V.length>0)for(let Pe=0,He=Me.length;Pe<He;Pe++){let Be=Me[Pe];ft(Q,V,A,Be)}se&&Fe.render(A);for(let Pe=0,He=Me.length;Pe<He;Pe++){let Be=Me[Pe];at(g,A,Be,Be.viewport)}}else V.length>0&&ft(Q,V,A,z),se&&Fe.render(A),at(g,A,z);C!==null&&P===0&&(Se.updateMultisampleRenderTarget(C),Se.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,z),Ce.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],et===!0&&be.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ot(A,z,J,Q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){Q&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);let Pe=G.update(A),He=A.material;He.visible&&g.push(A,Pe,He,J,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){let Pe=G.update(A),He=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),he.copy(Pe.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(He)){let Be=Pe.groups;for(let Ke=0,tt=Be.length;Ke<tt;Ke++){let Xe=Be[Ke],_t=He[Xe.materialIndex];_t&&_t.visible&&g.push(A,Pe,_t,J,he.z,Xe)}}else He.visible&&g.push(A,Pe,He,J,he.z,null)}}let Me=A.children;for(let Pe=0,He=Me.length;Pe<He;Pe++)ot(Me[Pe],z,J,Q)}function at(A,z,J,Q){let V=A.opaque,Me=A.transmissive,Pe=A.transparent;m.setupLightsView(J),et===!0&&be.setGlobalState(y.clippingPlanes,J),Q&&$.viewport(R.copy(Q)),V.length>0&&xt(V,z,J),Me.length>0&&xt(Me,z,J),Pe.length>0&&xt(Pe,z,J),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ft(A,z,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Rn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?_i:Pi,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let Me=m.state.transmissionRenderTarget[Q.id],Pe=Q.viewport||R;Me.setSize(Pe.z*y.transmissionResolutionScale,Pe.w*y.transmissionResolutionScale);let He=y.getRenderTarget(),Be=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(Me),y.getClearColor(k),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),se&&Fe.render(J);let tt=y.toneMapping;y.toneMapping=rs;let Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),et===!0&&be.setGlobalState(y.clippingPlanes,Q),xt(A,J,Q),Se.updateMultisampleRenderTarget(Me),Se.updateRenderTargetMipmap(Me),K.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let kt=0,tn=z.length;kt<tn;kt++){let Wt=z[kt],Gt=Wt.object,Je=Wt.geometry,Jt=Wt.material,Pt=Wt.group;if(Jt.side===on&&Gt.layers.test(Q.layers)){let Jn=Jt.side;Jt.side=On,Jt.needsUpdate=!0,un(Gt,J,Q,Je,Jt,Pt),Jt.side=Jn,Jt.needsUpdate=!0,_t=!0}}_t===!0&&(Se.updateMultisampleRenderTarget(Me),Se.updateRenderTargetMipmap(Me))}y.setRenderTarget(He,Be,Ke),y.setClearColor(k,X),Xe!==void 0&&(Q.viewport=Xe),y.toneMapping=tt}function xt(A,z,J){let Q=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Me=A.length;V<Me;V++){let Pe=A[V],He=Pe.object,Be=Pe.geometry,Ke=Pe.group,tt=Pe.material;tt.allowOverride===!0&&Q!==null&&(tt=Q),He.layers.test(J.layers)&&un(He,z,J,Be,tt,Ke)}}function un(A,z,J,Q,V,Me){A.onBeforeRender(y,z,J,Q,V,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,z,J,Q,A,Me),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=On,V.needsUpdate=!0,y.renderBufferDirect(J,z,Q,V,A,Me),V.side=ei,V.needsUpdate=!0,y.renderBufferDirect(J,z,Q,V,A,Me),V.side=on):y.renderBufferDirect(J,z,Q,V,A,Me),A.onAfterRender(y,z,J,Q,V,Me)}function gt(A,z,J){z.isScene!==!0&&(z=N);let Q=me.get(A),V=m.state.lights,Me=m.state.shadowsArray,Pe=V.state.version,He=ee.getParameters(A,V.state,Me,z,J),Be=ee.getProgramCacheKey(He),Ke=Q.programs;Q.environment=A.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(A.isMeshStandardMaterial?We:Ze).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",le),Ke=new Map,Q.programs=Ke);let tt=Ke.get(Be);if(tt!==void 0){if(Q.currentProgram===tt&&Q.lightsStateVersion===Pe)return ki(A,He),tt}else He.uniforms=ee.getUniforms(A),A.onBeforeCompile(He,y),tt=ee.acquireProgram(He,Be),Ke.set(Be,tt),Q.uniforms=He.uniforms;let Xe=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=be.uniform),ki(A,He),Q.needsLights=jo(A),Q.lightsStateVersion=Pe,Q.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=tt,Q.uniformsList=null,tt}function an(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=wo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ki(A,z){let J=me.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Tl(A,z,J,Q,V){z.isScene!==!0&&(z=N),Se.resetTextureUnits();let Me=z.fog,Pe=Q.isMeshStandardMaterial?z.environment:null,He=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$s,Be=(Q.isMeshStandardMaterial?We:Ze).get(Q.envMap||Pe),Ke=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,kt=!!J.morphAttributes.color,tn=rs;Q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tn=y.toneMapping);let Wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Gt=Wt!==void 0?Wt.length:0,Je=me.get(Q),Jt=m.state.lights;if(et===!0&&(Z===!0||A!==M)){let Fn=A===M&&Q.id===S;be.setState(Q,A,Fn)}let Pt=!1;Q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Jt.state.version||Je.outputColorSpace!==He||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isBatchedMesh&&Je.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Je.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Je.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Je.instancingMorph===!1&&V.morphTexture!==null||Je.envMap!==Be||Q.fog===!0&&Je.fog!==Me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==tt||Je.morphTargets!==Xe||Je.morphNormals!==_t||Je.morphColors!==kt||Je.toneMapping!==tn||Je.morphTargetsCount!==Gt)&&(Pt=!0):(Pt=!0,Je.__version=Q.version);let Jn=Je.currentProgram;Pt===!0&&(Jn=gt(Q,z,V));let Dr=!1,Kn=!1,Jo=!1,Kt=Jn.getUniforms(),ci=Je.uniforms;if($.useProgram(Jn.program)&&(Dr=!0,Kn=!0,Jo=!0),Q.id!==S&&(S=Q.id,Kn=!0),Dr||M!==A){$.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Kt.setValue(D,"projectionMatrix",A.projectionMatrix),Kt.setValue(D,"viewMatrix",A.matrixWorldInverse);let Gn=Kt.map.cameraPosition;Gn!==void 0&&Gn.setValue(D,ce.setFromMatrixPosition(A.matrixWorld)),j.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Kn=!0,Jo=!0)}if(V.isSkinnedMesh){Kt.setOptional(D,V,"bindMatrix"),Kt.setOptional(D,V,"bindMatrixInverse");let Fn=V.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Kt.setValue(D,"boneTexture",Fn.boneTexture,Se))}V.isBatchedMesh&&(Kt.setOptional(D,V,"batchingTexture"),Kt.setValue(D,"batchingTexture",V._matricesTexture,Se),Kt.setOptional(D,V,"batchingIdTexture"),Kt.setValue(D,"batchingIdTexture",V._indirectTexture,Se),Kt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Kt.setValue(D,"batchingColorTexture",V._colorsTexture,Se));let hi=J.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&fe.update(V,J,Jn),(Kn||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,Kt.setValue(D,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ci.envMap.value=Be,ci.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(ci.envMapIntensity.value=z.environmentIntensity),Kn&&(Kt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&ds(ci,Jo),Me&&Q.fog===!0&&ue.refreshFogUniforms(ci,Me),ue.refreshMaterialUniforms(ci,Q,O,te,m.state.transmissionRenderTarget[A.id]),wo.upload(D,an(Je),ci,Se)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(wo.upload(D,an(Je),ci,Se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Kt.setValue(D,"center",V.center),Kt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Kt.setValue(D,"normalMatrix",V.normalMatrix),Kt.setValue(D,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Fn=Q.uniformsGroups;for(let Gn=0,Lu=Fn.length;Gn<Lu;Gn++){let Ws=Fn[Gn];it.update(Ws,Jn),it.bind(Ws,Jn)}}return Jn}function ds(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,J){let Q=me.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),me.get(A.texture).__webglTexture=z,me.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=me.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};let Wx=D.createFramebuffer();this.setRenderTarget=function(A,z=0,J=0){C=A,E=z,P=J;let Q=!0,V=null,Me=!1,Pe=!1;if(A){let Be=me.get(A);if(Be.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(Be.__webglFramebuffer===void 0)Se.setupRenderTarget(A);else if(Be.__hasExternalTextures)Se.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Xe=A.depthTexture;if(Be.__boundDepthTexture!==Xe){if(Xe!==null&&me.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(A)}}let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Pe=!0);let tt=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[z])?V=tt[z][J]:V=tt[z],Me=!0):A.samples>0&&Se.useMultisampledRTT(A)===!1?V=me.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?V=tt[J]:V=tt,R.copy(A.viewport),L.copy(A.scissor),B=A.scissorTest}else R.copy(ve).multiplyScalar(O).floor(),L.copy(De).multiplyScalar(O).floor(),B=Ye;if(J!==0&&(V=Wx),$.bindFramebuffer(D.FRAMEBUFFER,V)&&Q&&$.drawBuffers(A,V),$.viewport(R),$.scissor(L),$.setScissorTest(B),Me){let Be=me.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Be.__webglTexture,J)}else if(Pe){let Be=z;for(let Ke=0;Ke<A.textures.length;Ke++){let tt=me.get(A.textures[Ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,J,Be)}}else if(A!==null&&J!==0){let Be=me.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(A,z,J,Q,V,Me,Pe,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){$.bindFramebuffer(D.FRAMEBUFFER,Be);try{let Ke=A.textures[He],tt=Ke.format,Xe=Ke.type;if(!j.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Q&&J>=0&&J<=A.height-V&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+He),D.readPixels(z,J,Q,V,ze.convert(tt),ze.convert(Xe),Me))}finally{let Ke=C!==null?me.get(C).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,Q,V,Me,Pe,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be)if(z>=0&&z<=A.width-Q&&J>=0&&J<=A.height-V){$.bindFramebuffer(D.FRAMEBUFFER,Be);let Ke=A.textures[He],tt=Ke.format,Xe=Ke.type;if(!j.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.bufferData(D.PIXEL_PACK_BUFFER,Me.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+He),D.readPixels(z,J,Q,V,ze.convert(tt),ze.convert(Xe),0);let kt=C!==null?me.get(C).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,kt);let tn=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nm(D,tn,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Me),D.deleteBuffer(_t),D.deleteSync(tn),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let Q=Math.pow(2,-J),V=Math.floor(A.image.width*Q),Me=Math.floor(A.image.height*Q),Pe=z!==null?z.x:0,He=z!==null?z.y:0;Se.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Pe,He,V,Me),$.unbindTexture()};let Xx=D.createFramebuffer(),qx=D.createFramebuffer();this.copyTextureToTexture=function(A,z,J=null,Q=null,V=0,Me=null){Me===null&&(V!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Pe,He,Be,Ke,tt,Xe,_t,kt,tn,Wt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Pe=J.max.x-J.min.x,He=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,Ke=J.min.x,tt=J.min.y,Xe=J.isBox3?J.min.z:0;else{let hi=Math.pow(2,-V);Pe=Math.floor(Wt.width*hi),He=Math.floor(Wt.height*hi),A.isDataArrayTexture?Be=Wt.depth:A.isData3DTexture?Be=Math.floor(Wt.depth*hi):Be=1,Ke=0,tt=0,Xe=0}Q!==null?(_t=Q.x,kt=Q.y,tn=Q.z):(_t=0,kt=0,tn=0);let Gt=ze.convert(z.format),Je=ze.convert(z.type),Jt;z.isData3DTexture?(Se.setTexture3D(z,0),Jt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Se.setTexture2DArray(z,0),Jt=D.TEXTURE_2D_ARRAY):(Se.setTexture2D(z,0),Jt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Pt=D.getParameter(D.UNPACK_ROW_LENGTH),Jn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dr=D.getParameter(D.UNPACK_SKIP_PIXELS),Kn=D.getParameter(D.UNPACK_SKIP_ROWS),Jo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let Kt=A.isDataArrayTexture||A.isData3DTexture,ci=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let hi=me.get(A),Fn=me.get(z),Gn=me.get(hi.__renderTarget),Lu=me.get(Fn.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,Gn.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lu.__webglFramebuffer);for(let Ws=0;Ws<Be;Ws++)Kt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.get(A).__webglTexture,V,Xe+Ws),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.get(z).__webglTexture,Me,tn+Ws)),D.blitFramebuffer(Ke,tt,Pe,He,_t,kt,Pe,He,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||me.has(A)){let hi=me.get(A),Fn=me.get(z);$.bindFramebuffer(D.READ_FRAMEBUFFER,Xx),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,qx);for(let Gn=0;Gn<Be;Gn++)Kt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hi.__webglTexture,V,Xe+Gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hi.__webglTexture,V),ci?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fn.__webglTexture,Me,tn+Gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fn.__webglTexture,Me),V!==0?D.blitFramebuffer(Ke,tt,Pe,He,_t,kt,Pe,He,D.COLOR_BUFFER_BIT,D.NEAREST):ci?D.copyTexSubImage3D(Jt,Me,_t,kt,tn+Gn,Ke,tt,Pe,He):D.copyTexSubImage2D(Jt,Me,_t,kt,Ke,tt,Pe,He);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ci?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Jt,Me,_t,kt,tn,Pe,He,Be,Gt,Je,Wt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Jt,Me,_t,kt,tn,Pe,He,Be,Gt,Wt.data):D.texSubImage3D(Jt,Me,_t,kt,tn,Pe,He,Be,Gt,Je,Wt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Me,_t,kt,Pe,He,Gt,Je,Wt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Me,_t,kt,Wt.width,Wt.height,Gt,Wt.data):D.texSubImage2D(D.TEXTURE_2D,Me,_t,kt,Pe,He,Gt,Je,Wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jo),Me===0&&z.generateMipmaps&&D.generateMipmap(Jt),$.unbindTexture()},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&Se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){E=0,P=0,C=null,$.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Ao=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ZS=new ar(-1,1,1,-1,0,1),nf=class extends ht{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},jS=new nf,Co=class{constructor(e){this._mesh=new de(jS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ZS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ro=class n extends Ao{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,o,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Rn(r,o,{type:_i});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Rn(r,o,{type:_i});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=yg;this.highPassUniforms=pr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pr.clone(Bh.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:Bh.vertexShader,fragmentShader:Bh.fragmentShader,blending:Ga,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new Co(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new vn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ro.BlurDirectionX=new re(1,0);Ro.BlurDirectionY=new re(0,1);var Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Oh=class extends Ao{constructor(){super(),this.uniforms=pr.clone(Ka.uniforms),this.material=new Ba({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new Co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function JS(n){let e=n.extensions.has("EXT_color_buffer_float"),t,i=0,s=0;function r(a,l){if(!e||l<=0)return;let c=Math.max(32,Math.ceil(a.width*.64)),h=Math.max(32,Math.ceil(a.height*.64));t||(t=new Ro(new re(c,h),l,.43,1.25)),(c!==i||h!==s)&&(t.setSize(c,h),i=c,s=h),t.strength=l,t.render(n,null,a,0,!1)}function o(){t?.dispose(),t=null,i=s=0}return{supported:e,apply:r,dispose:o}}function _g(n){let e=JS(n),t=new re,i,s;function r(o,a,l){if(!e.supported||l<=0||(n.getDrawingBufferSize(t),t.x<32||t.y<32))return!1;i?(i.width!==t.x||i.height!==t.y)&&i.setSize(t.x,t.y):(i=new Rn(t.x,t.y,{type:_i,samples:2}),i.texture.name="Gorilla Lab HDR scene",s=new Oh,s.renderToScreen=!0);let c=n.getRenderTarget(),h=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.setRenderTarget(i),n.render(o,a),e.apply(i,l),s.render(n,null,i)}finally{n.setRenderTarget(c),n.info.autoReset=h}return!0}return{render:r}}var vg=["Jour","Coucher de soleil","Nuit"],zh={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,sunDiameter:3.3,sunHalo:1,sunRadiance:7.5,shadowRange:0,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},KS=[zh,{...zh,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,sunRadiance:9,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...zh,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,sunRadiance:1,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Di(n){return{...KS[n]??zh}}var kh=5e6,$S=4*Math.ceil(kh/3)+23,Po=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,ri=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function Vh(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(ri(n.preset,0,2,0)),t=Di(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=$S?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=kh?n.skyImage:null,r=ri(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:ri(n.rotation,-360,360,0),skyTint:Po(n.skyTint,"#ffffff"),skyColor:Po(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:Po(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,ri(n.fogFar,1,4096,t.fogFar)),azimuth:ri(n.azimuth,-360,360,t.azimuth),elevation:ri(n.elevation,-89,89,t.elevation),sunColor:Po(n.sunColor,t.sunColor),sunPower:ri(n.sunPower,0,12,t.sunPower),sunDiameter:ri(n.sunDiameter,.1,12,t.sunDiameter),sunHalo:ri(n.sunHalo,0,4,t.sunHalo),sunRadiance:ri(n.sunRadiance,.1,100,Math.max(1,ri(n.sunPower,0,12,t.sunPower)*2.5)),shadowRange:ri(n.shadowRange,0,160,t.shadowRange),ambientColor:Po(n.ambientColor,t.ambientColor),groundColor:Po(n.groundColor,t.groundColor),ambientPower:ri(n.ambientPower,0,12,t.ambientPower)}}var sf;function QS(){return sf??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw sf=null,n}),sf}async function Mg(n,e,t){let i=await QS();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function bg(n){return await Mg(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function rf(n,e){await Mg(n,"readwrite",(t,i)=>t.put(e,i))}var of=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var qA=of.length-1,Sg=Math.min(...of.map(n=>n[1])),wg=Math.max(...of.map(n=>n[1])),YA=new v(0,0,(Sg+wg)/2),Tg=new v(.047,.027,(wg-Sg)/2);var JA=new bt,KA=new v,$A=new v,QA=new Mt;var e2=new v,t2=new v;var n2=new v;var i2=new v,s2=new v,r2=new v,o2=new Hn,a2=new v,l2=new v,c2=new v,h2=new v,u2=new v;function $a(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new v().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new v().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),b=new Hn(g,m,_).getNormal(new v);b.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:b})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new cn().setFromPoints(i).getSize(new v),h=Math.max(1e-4,e**2*.4),u=e?new v().setScalar(1/h):new v(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:f,normals:e?[]:d(s.map(p=>p.n)),edges:e?[]:d(s.flatMap(p=>[new v().subVectors(p.b,p.a).normalize(),new v().subVectors(p.c,p.b).normalize(),new v().subVectors(p.a,p.c).normalize()]))}}var d2=new v,f2=new v,p2=new v,m2=new v,g2=new bt,x2=new bt,y2=new v;function Io(n){return $a(new qe(n.x*2,n.y*2,n.z*2))}var _2=new v;var af=$a(new mi(1,0).scale(...Tg)),v2={mesh:{position:new v,quaternion:new bt},shape:af,radius:af.radius,precise:!0},M2=new v,b2=new v,S2=new v,w2=af.vertices.map(()=>new v);var T2=new v,E2=new v,A2=new v,C2=new bt,R2=new bt,P2=new bt;var I2=new v,D2=new v,L2=new v,U2=new v;var F2=new v;var N2=new v,B2=new v,O2=new v,z2=new v,k2=new v,V2=new v,G2=new v;var H2={mesh:{position:null,quaternion:new bt},shape:{sphereRadius:0,normals:[],edges:[]}};function Gh(n,e,t){let i=new qe(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Eg(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function Ag(n){switch(n){case"sphere":return new gi(.5,24,16);case"cylinder":return new Bt(.5,.5,1,24);case"cone":return new tr(.5,1,24);case"torus":return new Bn(.34,.14,12,32);case"capsule":return new bs(.32,.36,8,16);default:return new qe(1,1,1)}}function lf(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new v(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let f=1;f<l.length-1;f++)for(let d of[c,l[f],l[f+1]]){s.push(...d);let p=d.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new ht;return o.setAttribute("position",new Ue(s,3)),o.setAttribute("uv",new Ue(r,2)),o.computeVertexNormals(),o}function Qa(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Cs=(n,e,t)=>n+(e-n)*t,Do=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Hh(n,e){let t=Math.floor(n),i=Math.floor(e),s=Do(0,1,n-t),r=Do(0,1,e-i);return Cs(Cs(Qa(t,i),Qa(t+1,i),s),Cs(Qa(t,i+1),Qa(t+1,i+1),s),r)}function Cg(n,e){return Hh(n,e)*.54+Hh(n*2.07+3.4,e*2.07-6.1)*.26+Hh(n*4.2+9,e*4.2)*.13+Hh(n*8.6,e*8.6-13)*.07}function Rg(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),f=u**.54,d=r.map((p,x)=>Cs(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=Qa(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*Do(.09,.3,c))}else{let[y,T]=s[p],E=2.8*h/(c+.16),P=y*E+3.6,C=T*E-8.1,S=Cg(P,C),M=Cg(P-.12,C-.09);g=Do(.49,.66,S)*Do(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-M)*5+(S-.54)*.8))}let b=n?1:Cs(.94,1,Do(.05,.34,c));i[x]=Cs(d[0],(139+115*m)*b,g)+_,i[x+1]=Cs(d[1],(154+100*m)*b,g)+_*.94,i[x+2]=Cs(d[2],(178+77*m)*b,g)+_*.86,i[x+3]=255}}let a=new ti(i,1024,512,zn);return a.colorSpace=vt,a.wrapS=An,a.magFilter=rn,a.minFilter=In,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Pg(){let n=Rg(!1),e=Rg(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new ti(t,n.image.width,n.image.height,zn);i.colorSpace=vt;for(let s of[n,i,e])s.mapping=Ri,s.magFilter=rn,s.minFilter=rn,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var en=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Ig=en(-24,24,-51,7),Dg=34521,Lg={x:0,y:0,z:3},Rs={x:.05,y:1.16,z:5.9},Lo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:en(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:en(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:en(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:en(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:en(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:en(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:en(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:en(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:en(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:en(9,23,-48,-37),sign:[16,-38.2]}},Y2=[en(-9,-6,-51,7),en(6,9,-51,7),en(-24,24,-8,-5),en(-24,24,-27,-23),en(9,23,-37,-34)],Ug=[{name:"Glace",bounds:Lo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Lo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:en(-9,9,-51,7)},{name:"Sol ouest",bounds:en(-23,-9,-51,-23)},{name:"Sol ouest",bounds:en(-23,-9,-8,7)},{name:"Bordure ouest",bounds:en(-24,-23,-51,7)},{name:"Sol est",bounds:en(9,23,-51,-48)},{name:"Sol est",bounds:en(9,23,-37,7)},{name:"Bordure est",bounds:en(23,24,-51,7)}],el={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Uo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Fg=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Ps={x:-19.4,y:.68,z:-3.25},Ng=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Bg={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Wh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ci(i);return s.colorSpace=vt,s}function Og(n,e){let{day:t,sunset:i,night:s}=Pg(),r=[t,i,s],o=new ke,a=new Qs("#a6d4ea",55,135),l=Wh(64,64,(H,q)=>{let pe=H.createRadialGradient(q/2,q/2,q*.22,q/2,q/2,q*.5);pe.addColorStop(0,"#fff"),pe.addColorStop(.65,"#fff"),pe.addColorStop(.88,"rgba(255,255,255,.72)"),pe.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=pe,H.fillRect(0,0,q,q)}),c=new Ma(new co({map:l,alphaTest:.15,depthWrite:!1,fog:!1}));n.add(c);let h=t.clone();h.mapping=Ri,h.needsUpdate=!0;let u=new To(e);n.environment=u.fromEquirectangular(h).texture,u.dispose();let f=new or("#daeaff","#88724c",2.25),d=new lr("#fff0d0",3);d.position.set(-14,25,-16),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),Object.assign(d.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),d.shadow.bias=-25e-5,d.shadow.normalBias=.025,n.add(f,d,d.target);let p=new v,x=0,g=null,m=!0,_=null,b=null,y=!1,T=0,E=0,P=new v,C=null,S=null,M=null,R=null,L=null,B=!1,k=0;function X(H,q){if(q==="#ffffff")return H;if(H===S&&q===M)return C;let pe=H.image,Ge=document.createElement("canvas");Ge.width=pe.width,Ge.height=pe.height;let Ie=Ge.getContext("2d");return H.isDataTexture?Ie.putImageData(new ImageData(new Uint8ClampedArray(pe.data),pe.width,pe.height),0,0):Ie.drawImage(pe,0,0),Ie.globalCompositeOperation="multiply",Ie.fillStyle=q,Ie.fillRect(0,0,Ge.width,Ge.height),C?.dispose(),C=new Ci(Ge),C.mapping=Ri,C.colorSpace=vt,C.flipY=H.flipY,S=H,M=q,C}function Y(H){if(L===H)return R;R?.dispose();let q=document.createElement("canvas"),pe=document.createElement("canvas");q.width=384,q.height=192,pe.width=1536,pe.height=768,q.getContext("2d").drawImage(H.image,0,0,q.width,q.height);let Ge=pe.getContext("2d");return Ge.imageSmoothingEnabled=!1,Ge.drawImage(q,0,0,pe.width,pe.height),R=new Ci(pe),R.mapping=Ri,R.colorSpace=vt,R.flipY=H.flipY,L=H,R}function te(H){let q=H.shadowRange?Math.max(13,H.shadowRange):13+k*1.2,pe=Math.max(33,q*1.4);p.copy(P).multiplyScalar(pe),Object.assign(d.shadow.camera,{left:-q,right:q,top:q,bottom:-q,far:Math.max(72,pe+q*1.5)}),d.shadow.camera.updateProjectionMatrix()}function O(H){x=[0,1,2].includes(H)?H:0;let q=g??Di(x),pe=we.degToRad(q.azimuth),Ge=we.degToRad(q.elevation);P.set(Math.cos(pe)*Math.cos(Ge),Math.sin(Ge),Math.sin(pe)*Math.cos(Ge)),te(q),f.color.set(q.ambientColor),f.groundColor.set(q.groundColor),f.intensity=q.ambientPower,d.color.set(q.sunColor),d.intensity=q.sunPower,d.position.copy(d.target.position).add(p),c.material.color.set(q.sunColor).multiplyScalar(q.sunRadiance??Math.max(1,q.sunPower*2.5)),c.visible=q.sunPower>0;let Ie=q.sky==="image"&&b?b:r[q.preset],st=X(Ie,q.skyTint);n.background=q.sky==="color"||!m?o.set(q.skyColor):B&&!st.isDataTexture?Y(st):st,n.backgroundRotation.y=we.degToRad(q.rotation),a.color.set(q.fogColor),a.near=q.fogNear,a.far=q.fogFar,n.fog=q.fog?a:null,n.environmentIntensity=T*[1,.56,.09][q.preset]}function oe(H,q=()=>{}){g=H;let pe=H?.sky==="image"?H.skyImage:null;if(_!==pe){_=pe;let Ge=++E;b?.dispose(),b=null,y=!!pe,pe&&new xi().load(pe,Ie=>{if(E!==Ge){Ie.dispose();return}Ie.colorSpace=vt,Ie.mapping=Ri,b=Ie,y=!1,O(x),q()},void 0,()=>{Ge===E&&(y=!1,q())})}O(x)}function ye(H,q=210){let pe=g??Di(x),Ge=q*.96,Ie=2*Ge*Math.tan(we.degToRad(pe.sunDiameter/2));c.position.copy(H).addScaledVector(P,Ge),c.scale.setScalar(Ie)}function ve(H){if(!d.castShadow)return;let q=d.target.position,pe=Math.round(H.x/4)*4,Ge=Math.round(H.y/4)*4,Ie=Math.round(H.z/4)*4;q.x===pe&&q.y===Ge&&q.z===Ie||(q.set(pe,Ge,Ie),d.position.copy(q).add(p))}O(0);let De=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function Ye(H,q,pe){let[,Ge,Ie]=De[q],st=512;H.save(),H.scale(pe/512,pe/512),H.fillStyle=Ge,H.fillRect(0,0,st,st);let St=q+19;function ot(){return St=Math.imul(St,1664525)+1013904223>>>0,St/4294967296}if(H.fillStyle=Ie,q===16){for(let at=0;at<16;at++)for(let ft=0;ft<16;ft++)(ft+at)%2===0&&H.fillRect(ft*32,at*32,32,32);H.fillStyle="#ff3957",H.fillRect(253,0,6,512),H.fillRect(0,253,512,6)}else if([0,2,8,15].includes(q)){let at=q===15?32:64;H.globalAlpha=.48;for(let ft=0;ft<st;ft+=at){H.fillRect(0,ft,st,q===8?3:2);for(let xt=-at;xt<st;xt+=at)H.fillRect(xt+ft/at%2*(q===2?at/2:0),ft,2,at)}}else if([4,5,6,7,10,11,12].includes(q)){let at=q===5?38:q===7?64:18;for(let ft=0;ft<at;ft++){H.strokeStyle=Ie,H.globalAlpha=.08+ot()*.22,H.lineWidth=q===5?1+ot()*8:1+ot()*4;let xt=ot()*st,un=q===5?.018:.009;H.beginPath();for(let gt=0;gt<=st;gt+=8){let an=xt+Math.sin(gt*un+ft)*(q===6||q===7?4:12+ft%5*3)+(q===4?gt*.28:0);gt===0?H.moveTo(gt,an):H.lineTo(gt,an)}H.stroke()}}else{H.globalAlpha=.27;for(let at=0;at<120;at++){let ft=ot()*st,xt=ot()*st,un=2+ot()*6;H.beginPath(),H.arc(ft,xt,un,0,Math.PI*2),H.fill()}}if(q!==16)for(let at=0;at<4400;at++)H.globalAlpha=.05+ot()*.1,H.fillStyle=ot()>.5?Ie:"#222324",H.fillRect(ot()*st,ot()*st,1+ot()*4,1+ot()*3);H.restore()}let rt=new Set([0,2,4,5,8,15,16]),et=ut.shadowmap_pars_fragment.replace("return mix( 1.0, shadow, shadowIntensity );","vec2 edge = min(shadowCoord.xy, 1.0 - shadowCoord.xy); return mix(1.0, shadow, shadowIntensity * smoothstep(0.0, 0.14, min(edge.x, edge.y)));"),Z=De.map(([H,q,pe,Ge,Ie,st],St)=>{let ot=rt.has(St)?512:256,at=Wh(ot,ot,xt=>Ye(xt,St,ot));at.wrapS=at.wrapT=An;let ft=new dn({map:at,roughness:Ge,metalness:Ie,flatShading:!0,opacity:st,transparent:st<1,depthWrite:st===1});return ft.name=H,ft}),W=Z.map(H=>H.map.image),ce=512,he=Z.map(H=>new ii({map:H.map,flatShading:!0,opacity:H.opacity,transparent:H.transparent,depthWrite:H.depthWrite})),N={value:0},se={value:.24},Ee={value:null},D={value:0};function ae(){Ee.value?.dispose(),Ee.value=Wh(512,512,(H,q)=>{H.fillStyle="#ffffff",H.fillRect(0,0,q,q);let pe=q/52,Ge=q/64;for(let Ie of K){if(!Ie.position||!Ie.half||Ie.position.y+Ie.half.y<.22)continue;let st=(Ie.position.x+26)*pe,St=(Ie.position.z+54)*Ge,ot=Math.min(55,Ie.half.x*pe+5),at=Math.min(72,Ie.half.z*Ge+6);H.save(),H.translate(st+Ie.half.y*pe*.2,St+Ie.half.y*Ge*.24),H.scale(ot,at);let ft=H.createRadialGradient(0,0,.15,0,0,1);ft.addColorStop(0,"rgba(22,37,65,.54)"),ft.addColorStop(.58,"rgba(36,54,76,.29)"),ft.addColorStop(1,"rgba(38,48,57,0)"),H.fillStyle=ft,H.fillRect(-1,-1,2,2),H.restore()}})}for(let H of[...Z,...he])H.onBeforeCompile=q=>{q.fragmentShader=q.fragmentShader.replace("#include <shadowmap_pars_fragment>",et),q.uniforms.uFocusAmount=N,q.uniforms.uFocusRadius=se,q.uniforms.uLabLightmap=Ee,q.uniforms.uLabBakedStrength=D,q.vertexShader=`varying vec3 vLabPosition;
`+q.vertexShader,q.vertexShader=q.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),q.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+q.fragmentShader,q.fragmentShader=q.fragmentShader.replace("#include <map_fragment>",`
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
      `)},H.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v3";let K=[],j=[];function $(H,q,pe,Ge,Ie,st,St,ot=0,at=0,ft=1,xt=1,un=!1){let gt=new de(un?new qe(Ie,st,St):Gh(Ie,st,St),Z[ot]);gt.position.set(q,pe,Ge),gt.rotation.x=at,gt.receiveShadow=!0,gt.castShadow=!0,n.add(gt);let an=new v(Ie/2,st/2,St/2),ki={mesh:gt,position:gt.position,quaternion:gt.quaternion,half:an,min:an.clone().negate(),friction:ft,gravity:xt,name:H,type:ot,shape:Io(an)};return K.push(ki),ki}let _e=Ug.map(({name:H,bounds:q,type:pe=0,friction:Ge=.78,gravity:Ie=1})=>{let{xMin:st,xMax:St,zMin:ot,zMax:at}=q;return $(H,(st+St)/2,-.33,(ot+at)/2,St-st,.66,at-ot,pe,0,Ge,Ie)});for(let H of Object.values(Bg))for(let q of H)$(...q);let{xMin:me,xMax:Se,zMin:Ze,zMax:We}=Ig;$("But\xE9e arri\xE8re",0,1.35,Ze+.4,Se-me,2.7,.6,2),$("But\xE9e ouest",me+.3,1.05,(Ze+We)/2,.6,2.1,We-Ze,2),$("But\xE9e est",Se-.3,1.05,(Ze+We)/2,.6,2.1,We-Ze,2);let{xMin:I,xMax:w,zMin:G,zMax:ee}=Lo.hills.bounds,ue=w-I,ie=ee-G,Oe=16,be=64,Le=new Mn(ue,ie,Oe,be).rotateX(-Math.PI/2).translate(I+ue/2,0,G+ie/2),Fe=Le.attributes.uv;for(let H=0;H<Fe.count;H++)Fe.setXY(H,Fe.getX(H)*ue/2.6,Fe.getY(H)*ie/2.6);let fe=Le.attributes.position,Ae;function je(H){if(Ae===H)return;Ae=H;let q=Ae*.017;for(let pe=0;pe<fe.count;pe++){let Ge=fe.getX(pe),Ie=fe.getZ(pe),st=Math.sin(Math.PI*we.clamp((Ge-I)/ue,0,1)),St=Math.min(1,(Ie-G)*.48,(ee-Ie)*.48),ot=.93+.56*Math.sin(Ie*.36+q)+.32*Math.cos(Ge*.67+Ie*.26+q*1.4)+.19*Math.sin(Ie*.81+q*.67);fe.setY(pe,Math.max(0,st*St*ot))}fe.needsUpdate=!0,Le.computeVertexNormals(),Le.computeBoundingSphere()}je(Dg);let ze=new de(Le,Z[3]);ze.userData.editorAssetId="lab-hill",ze.receiveShadow=ze.castShadow=!0,n.add(ze);let Ce=(H,q)=>{let pe=we.clamp((H-I)/ue*Oe,0,Oe-1e-6),Ge=we.clamp((q-G)/ie*be,0,be-1e-6),Ie=Math.floor(pe),st=Math.floor(Ge),St=pe-Ie,ot=Ge-st,at=Oe+1,ft=st*at+Ie,xt=fe.getY(ft),un=fe.getY(ft+1),gt=fe.getY(ft+at),an=fe.getY(ft+at+1);return St+ot<=1?xt+(un-xt)*St+(gt-xt)*ot:an+(gt-an)*(1-St)+(un-an)*(1-ot)};K.push({heightfield:!0,mesh:ze,editorAssetId:"lab-hill",height:Ce,...Lo.hills.bounds,friction:.81,gravity:1});function it(H,q,pe,Ge,Ie=1.45){let st=Wh(384,72,(ot,at,ft)=>{ot.fillStyle="#202a32",ot.fillRect(0,0,at,ft),ot.fillStyle=Ge,ot.font="bold 31px system-ui",ot.textAlign="center",ot.fillText(H,at/2,48,at-20)}),St=new de(new Mn(3.2,.6),new Zt({map:st,side:on}));St.position.set(q,Ie,pe),n.add(St),j.push(St)}for(let H of Object.values(Lo)){it(H.name.toLocaleUpperCase("fr"),...H.sign,H.color);let{xMin:q,xMax:pe,zMin:Ge,zMax:Ie}=H.bounds,st=new Sa(new ht().setFromPoints([new v(q,.025,Ge),new v(pe,.025,Ge),new v(pe,.025,Ie),new v(q,.025,Ie)]),new fi({color:H.color,transparent:!0,opacity:.72}));n.add(st),j.push(st)}it("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),it("MURS HAUTS",3,-31,"#e8d2ff"),it("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let F=new dn({color:"#c8e6ed",metalness:1,roughness:.16}),ge=new de(new pi(.54,2),F);ge.userData.editorAssetId="chrome-sphere",ge.position.set(Ps.x,Ps.y,Ps.z),ge.castShadow=!0,n.add(ge);let Te=De.map((H,q)=>{let{x:pe,z:Ge}=Ng(q);return $("\xC9chantillon "+De[q][0],pe,.325,Ge,.65,.65,.65,q,0,1,1,!0).mesh}),Ne=new Pn(1,12).rotateX(-Math.PI/2),xe=new Zt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function le(H){let q=new de(Ne,xe);return q.scale.setScalar(H),n.add(q),q}function Ve(H,q,pe,Ge,Ie,st,St){let ot=q>=3;e.shadowMap.enabled=ot,d.castShadow=ot,xe.opacity=q===2?.17:.11,D.value=St?.38+pe*.04:0;let at=q>=9?2048:q>=6?1024:q>=4?512:256;d.shadow.intensity=.45+q*.055,d.shadow.radius=.65+q*.12,k=q,d.shadow.mapSize.x!==at&&(d.shadow.map?.dispose(),d.shadow.map=null,d.shadow.mapSize.set(at,at)),st!==ce&&(ce=st,Z.forEach((xt,un)=>{let gt=xt.userData.texture??xt.map,an=rt.has(un)?st:Math.min(256,st);if(gt.image.width===an)return;let ki=document.createElement("canvas");ki.width=ki.height=an;let Tl=ki.getContext("2d");an>512?Ye(Tl,un,an):Tl.drawImage(W[un],0,0,an,an);let ds=new Ci(ki);ds.colorSpace=gt.colorSpace,ds.wrapS=gt.wrapS,ds.wrapT=gt.wrapT,ds.repeat.copy(gt.repeat);for(let jo of[xt,he[un]])jo.userData.texture=ds,jo.map=ds,jo.needsUpdate=!0;gt.dispose()}));let ft=H>=4;for(let xt of K)xt.mesh?.isMesh&&!xt.zone&&(xt.mesh.material=ft?Z[xt.type]:he[xt.type]);ze.material=ft?Z[3]:he[3];for(let xt=0;xt<Te.length;xt++)Te[xt].material=ft?Z[xt]:he[xt];Z.forEach((xt,un)=>{for(let gt of[xt,he[un]])gt.userData.texture||(gt.userData.texture=gt.map),gt.map=Ie?gt.userData.texture:null,gt.color.set(Ie?"#ffffff":De[un][1]),gt.needsUpdate=!0}),T=Ge?.21+pe*.067:0,F.metalness=Ge?.95:.1,F.roughness=Ge?.13:.46,m=H>=2,O(x)}return{boxes:K,floors:_e,probe:ge,display:Te,visual:Ve,shadow:le,setTimeOfDay:O,setEnvironment:oe,centerSky:ye,setRetroSky(H){B!==H&&(B=H,O(x))},sunDirection:()=>P.clone(),centerShadows:ve,lighting:[f,d,d.target,c],sunDisk:c,get bloomAmount(){return(g??Di(x)).sunHalo*.19},get skyLoading(){return y},get hillSeed(){return Ae},setHillSeed:je,bakeLightmap:ae,mapMaterial:(H,q)=>q>=4?Z[H]:he[H],builtObjects:[...K.map(H=>H.mesh).filter(H=>H?.isObject3D),ge,...j],materials:[...Z,...he],focus(H,q,pe){N.value=H?q*.75:0,se.value=.07+pe*.058}}}function zg(n,e,t){function i(c,h,u=.85){let f=c.getWorldPosition(new v),d=c.getWorldQuaternion(new bt);e.push({half:h,min:h.clone().negate(),position:f,quaternion:d,mesh:{position:f,quaternion:d},shape:Io(h),friction:u,gravity:1})}let s=[],r=[],o=new ii({color:"#485d5d",flatShading:!0});function a([c,h],u,f){let d=new de(new qe(.095,.68,.11),o);d.position.set(c,.34,h+.46),d.castShadow=d.receiveShadow=!0,n.add(d),i(d,new v(.0475,.34,.055));let p=new _n;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new de(new qe(.64,.36,.055),new ii({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Ci(g);_.colorSpace=vt;let b=new de(new Mn(.61,.095),new Zt({map:_}));b.position.set(0,.116,.03),p.add(b);let y=.592/f.length,T=f.map(([P,C],S)=>{let M=new de(new qe(y-.012,.155,.04),new ii({color:"#478086"}));M.position.set(-.296+y*(S+.5),-.045,.046),p.add(M),s.push(M),M.userData.touchWidth=y-.012;let R=document.createElement("canvas");R.width=208,R.height=172;let L=new Ci(R);L.colorSpace=vt;let B=new de(new Mn(y-.017,.139),new Zt({map:L}));B.position.z=.0205,M.add(B);let k=-1/0;return M.userData.action=()=>{let X=performance.now();X-k<250||(k=X,C(),l(),M.position.z=.036,setTimeout(()=>{M.position.z=.046},115))},{label:P,context:R.getContext("2d"),texture:L}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let P of T){let C=P.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let S=(typeof P.label=="function"?P.label():P.label).split("|");S.forEach((M,R)=>C.fillText(M,104,(S.length>1?68:97)+R*37,188)),P.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(el.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Uo[0])],["Boule",()=>t.spawn(1,Uo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Uo[0])],["Vider",t.clear]]),a(el.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Uo[1])],["Sph\xE8re",()=>t.spawn(5,Uo[1])]]),a(el.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(el.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function Xh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=kg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=kg(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function kg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Nt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Yh=0,e1=1,t1=new v,Vg=new ka,cf=new En,Gg=new v,qh=new Hn,Zh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new jh,this.unassigned=new jh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new hf(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new v;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,t1)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Yh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new v,t=new v,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,h;r=0,Vg.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l){Vg.closestPointToPoint(p.point,!0,Gg);let x=Gg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,cf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(cf.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(cf.distanceToPoint(h.point)<0){u.push(Li.create(a,l,c),Li.create(h,l,a),Li.create(h,c,l),Li.create(h,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge(d)),u[f+1].getEdge(1).setTwin(u[d+1].getEdge(0))}}else{u.push(Li.create(a,c,l),Li.create(h,a,l),Li.create(h,l,c),Li.create(h,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge((3-f)%3)),u[f+1].getEdge(0).setTwin(u[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(u[f]);for(let f=0,d=e.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Yh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=e1;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Yh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=Li.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Li=class n{constructor(){this.normal=new v,this.midpoint=new v,this.area=0,this.constant=0,this.outside=null,this.mark=Yh,this.edge=null}static create(e,t,i){let s=new n,r=new tl(e,s),o=new tl(t,s),a=new tl(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return qh.set(e.point,t.point,i.point),qh.getNormal(this.normal),qh.getMidpoint(this.midpoint),this.area=qh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},tl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},hf=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},jh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var as=class extends ht{constructor(e=[]){super();let t=[],i=[],r=new Zh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ue(t,3)),this.setAttribute("normal",new Ue(i,3))}};var qn=Math.PI*2,Jh=.84,ls=128;function Ls(n){let e=new Uint8Array(ls*ls*4);for(let i=0;i<ls;i++)for(let s=0;s<ls;s++){let r=(s+.5)/ls,o=(i+.5)/ls,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Jh,1),Math.min(o/Jh,1),s,i),l=(s+i*ls)*4;for(let c=0;c<3;c++)e[l+c]=we.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ti(e,ls,ls);return t.colorSpace=vt,t.generateMipmaps=!0,t.minFilter=In,t.magFilter=rn,t.needsUpdate=!0,t}function _r(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function dt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new ke(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Jh,r.getY(l)*Jh):r.setXY(l,.95,.95);return i.setAttribute("color",new Nt(a,3)),i}function Us(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Xh(s),material:new dn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Hg(n,e,t){let i=n/2,s=e/2,r=new is;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Is(n,e,t,i,s){return new ir(Hg(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ds(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,f]=n[h];for(let d=0;d<=e;d++){let p=qn*d/e,x=t(u,f,p,h);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(d/e,h/(n.length-1)),h===n.length-1||d===e)continue;let g=h*(e+1)+d,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new ht;o.setAttribute("position",new Ue(i,3)),o.setAttribute("uv",new Ue(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new v,c=new v;for(let h=0;h<n.length;h++){let u=h*(e+1),f=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function nl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new v(0,s,0));continue}for(let r=0;r<e;r++){let o=qn*r/e;t.push(new v(i*Math.sin(o),s,i*Math.cos(o)))}}return new as(t)}function n1(){let t=new Fa(Hg(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=we.clamp(i.getX(l)/.098+.5,0,1),h=we.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=Ls((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*qn),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[dt(Is(.106,.207,.013,.011,.0019),8425890),dt(Is(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),dt(Is(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),dt(t,16777215,!0),dt(Is(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),dt(new qe(.0036,.024,.004).translate(.055,.029,0),11714250),dt(new qe(.0036,.015,.004).translate(-.055,.032,0),11385285),dt(new qe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(dt(new Bt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(dt(new Pn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(dt(new Pn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new as([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new v(c,h,l))));return Us("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function i1(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Ds(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+u)/.014)**2))));return a*(1-.14*h**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Ls((a,l,c,h)=>{let u=qn*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(_=>Math.exp(-(((f-_+.035*Math.cos(u))/.009)**2)))),x=d**3*p,g=_r(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*x+m,76+24*d+70*x+m,24+11*d+52*x+m*.8]}),o=nl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Us("bread","Baguette de pain",.27,o,[dt(s,16777215,!0)],r,.9)}function s1(){let n=Ls((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*_r(a,l)-(c&&(u||f)?35:0);return[p*.94,p,p*1.04]}),e=Ds([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ds([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[dt(e,16777215,!0),dt(t,11056059),dt(new Bt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),dt(new Bt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=qn*r/5;i.push(dt(new qe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=nl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Us("wheel","Roue",1.8,s,i,n,.64,.23)}function r1(){let n=Ls((r,o,a,l)=>{let c=_r(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(qn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=Ds([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Bn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+qn*l/5;return new v(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new v(.166,-.027,.01),new v(.166,.053,-.01));let s=new as(i);return Us("cup","Tasse",.39,s,[dt(e,16777215,!0),dt(t,15785922)],n,.37)}function o1(){let n=Ds([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Ls((s,r,o,a)=>{let l=9*_r(o,a),c=11*Math.cos(s*qn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*qn*48+s*qn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*qn*4);return[h,h*1.13,h*1.24]}),t=[dt(n,16777215,!0),dt(new Ss(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),dt(new Pn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),dt(new Pn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),dt(new Bt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),dt(new Pn(.008,12).translate(0,.035,.0336),15633202)],i=nl([[.033,-.143],[.054,.133]],6);return Us("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function a1(){let n=Ds([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Ls((r,o,a,l)=>{let c=10*_r(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(qn*r*2));if(e[f]?.[u]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(qn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[dt(n,16777215,!0),dt(new Pn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),dt(new Ss(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),dt(new Pn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=nl([[.069,-.112],[.069,.109]],6);return Us("soda","Canette de soda",.35,s,i,t,.42,.27)}function l1(){let n=Ds([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Ls((s,r,o,a)=>{let l=15*_r(o,a),c=8*Math.cos(s*qn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[dt(n,16777215,!0),dt(Is(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),dt(new Pn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=nl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Us("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function c1(){let n=Ls((s,r,o,a)=>{let l=8*_r(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ds([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[dt(Is(.138,.22,.061,.016,.004),14788675),dt(Is(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),dt(new Mn(.106,.174).translate(0,-.004,.0395),16777215,!0),dt(e,2502456),dt(new Bt(.014,.017,.016,10).translate(.04,.117,.001),2503482),dt(new qe(.008,.047,.027).translate(-.072,.014,-.002),3028798),dt(new qe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),dt(new Pn(.004,8).translate(.04,.066,.0397),15817792),dt(new Pn(.004,8).translate(-.04,.066,.0397),7903100),dt(Is(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new v(s,l,o),new v(r,l,o),new v(r,l,a),new v(s,l,a)]);return Us("radio","Talkie-walkie",.43,new as(i),t,n,.61,.08)}function Wg(){return[n1(),i1(),s1(),r1(),o1(),a1(),l1(),c1()]}var h1=[0,1,2,3,4,5,7,8,9,10];function Xg(n){Fg.forEach(({x:e,z:t},i)=>n(h1[i],new v(e,.8,t)))}function qg(){let n=[["Cube",new qe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new pi(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new sr(.29),"#d8ae53",0,1],["Brique",new qe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new qe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new pi(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:$a(t,s),material:new dn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Io(t.computeBoundingBox()??t.boundingBox.getSize(new v).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Wg()){let s=$a(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var yC=new v(0,1,0),il=(n,e,t,i)=>Number.isFinite(n)?we.clamp(n,t,i):e;function Yg(n){if(!Array.isArray(n?.pivot)||n.pivot.length!==3)return null;let e=n.mode==="slide"||n.mode==="screw"?n.mode:null,t=n.axis==="x"||n.axis==="z"?n.axis:null;return{...e?{mode:e,travel:il(n.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:n.pivot.map(i=>il(i,0,-6,6)),closed:il(n.closed,0,-180,180),open:il(n.open,95,-180,180),seconds:il(n.seconds,.7,.1,6)}}var _C=new v;var Kh=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";Kh.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Kh.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var uf=Object.freeze(Object.fromEntries(Kh.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),Zg=(n,e,t,i)=>Number.isFinite(n)?we.clamp(n,e,t):i;function u1(n,e){let t=uf[n];return{pivot:t.pivot.map((i,s)=>Zg(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Zg(e?.limit,0,150,t.limit)}}function jg(n){return Object.fromEntries(Kh.map(([e])=>[e,u1(e,n?.[e])]))}function Jg(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var d1={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},f1=new WeakMap,p1={value:0},Kg=["sine","triangle","pulse","stars"],df=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function $g(n){if(!n||typeof n!="object")return null;let e={};for(let[t,i]of Object.entries(d1)){let s=n[t];e[t]={strength:df(s?.strength,0,i.max,0),speed:df(s?.speed,0,8,i.defaultSpeed),scale:df(s?.scale,0,48,i.defaultScale),signal:Kg.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function Qg(n,e){if(!e||!Object.values(e).some(r=>r.strength>0))return n;let t=r=>{let o=e[r];return new qt(o.strength,o.speed,o.scale,Kg.indexOf(o.signal))},i={uFoundryTime:p1,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new ke(e.tint.color)},uFoundryGlowColor:{value:new ke(e.glow.color)}},s=`
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},n.customProgramCacheKey=()=>"foundry-effect-v1",f1.set(n,e),n}var e0=48,m1=3,g1=128,t0=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),x1=(n,e,t)=>Math.max(e,Math.min(t,n)),y1=()=>structuredClone(t0.shield),sl=(n,e,t,i)=>Number.isFinite(n)?x1(n,t,i):e;function Qh(n){let e=n?.mode==="lathe"?t0.bottle:y1(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=e0?n.points.map(o=>[sl(o?.[0],0,-1.5,1.5),sl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:sl(n?.depth,e.depth,.025,1.5),bevel:sl(n?.bevel,e.bevel,0,.15),segments:Math.round(sl(n?.segments,32,m1,g1))}}function n0(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function $h(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function _1(n,e,t,i){let s=$h(n,e,t),r=$h(n,e,i),o=$h(t,i,n),a=$h(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function v1(n){let e=Qh(n),t=e.mode==="lathe"?e.points:n0(e);if(t.length<3||t.length>e0*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&_1(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function i0(n){let e=Qh(n),t=v1(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([f,d])=>new re(Math.max(0,f),d));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new re(0,s[0].y)),s.at(-1).x>0&&s.push(new re(0,s.at(-1).y)),i=new Ua(s,e.segments);let r=[],o=i.attributes.position,a=new v,l=new v,c=new v,h=new v,u=i.index.array;for(let f=0;f<u.length;f+=3)a.fromBufferAttribute(o,u[f]),l.fromBufferAttribute(o,u[f+1]),c.fromBufferAttribute(o,u[f+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[f],u[f+1],u[f+2]);i.setIndex(r)}else{let s=n0(e),r=new is;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new ir(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new Nt(new Float32Array(s*2),2))}return i}var ff=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],rl=null,M1=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function vr(n){return typeof n=="string"&&M1.has(n.replace(/^custom-model-game-/,""))}function eu(n){let e=n?.parts;return vr(n?.id)||vr(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>vr(t?.assetId))}function r0(){if(rl)return rl;let n=qg(),e=ff;return rl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),rl.set("chrome-sphere",{geometry:new pi(.54,2),material:new dn({color:"#c8e6ed",metalness:1,roughness:.16})}),rl}function tu(n){return typeof n=="string"&&r0().has(n)}function pf(n){return r0().get(n)??null}function b1(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function s0(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[b1(e,n)]}}function mf(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>s0(e,t)),s0("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var yf=/^[a-z0-9-]{1,40}$/i,S1={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function w1(n,e){if(!n)return null;let t=e==="trigger"?n.phase==="exit"?"exit":"enter":n.phase==="use"?"use":null;if(!t)return null;let i=typeof n.door=="string"&&yf.test(n.door)?n.door:null,s=typeof n.light=="string"&&yf.test(n.light)?n.light:null,r=Object.hasOwn(S1,n.sound)?n.sound:null,o=t==="use"&&h0.test(n.receiver??"")?n.receiver:null;return i||s||r||o?{phase:t,...o?{receiver:o}:{},...i?{door:i,doorState:["open","close","toggle"].includes(n.doorState)||e==="trigger"&&n.doorState==="hold"?n.doorState:"open"}:{},...i&&e==="trigger"&&n.doorState==="hold"?{doorDelay:Mr(n.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(n.lightState)?n.lightState:"on",lightColor:u0.test(n.lightColor??"")?n.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:Mr(n.soundVolume,0,1,.6)}:{}}:null}var bf="gorilla-lab-models-v1",Fo=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),T1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,E1=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),l0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),_f=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),A1=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Mr=(n,e,t,i)=>Number.isFinite(n)?we.clamp(n,e,t):i;function Sf(n){return{gravity:Mr(n?.physics?.gravity,0,2.5,1),bounce:Mr(n?.physics?.bounce,0,1.65,1)}}function c0(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Mr(n?.uv?.repeat,.01,100,1),angle:Mr(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Mr(n?.uv?.offset?.[t],-100,100,0))}}var C1=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),h0=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,u0=/^#[a-f\d]{6}$/i;function gf(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Fs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?we.clamp(n[s],t,i):e)}function o0(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var vf=new Set(["box","sphere","capsule","convex"]);function R1(n){if(n?.mode==="box")return{mode:"box",center:Fs(n.center,0,-6,6),size:Fs(n.size,.5,.025,12)};let e=Math.round(we.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:vf.has(n.shape)?n.shape:"box",center:Fs(n.center,0,-6,6),size:Fs(n.size,.5,.025,12),rotation:Fs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&vf.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function br(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Fo.models||JSON.stringify(n).length>Fo.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!eu(i)).map(i=>{if(typeof i?.id!="string"||!h0.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Fo.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(i.id);let s=new Set;return{id:i.id,name:gf(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:jg(i.avatarRig)}:{},...tu(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:{...Object.fromEntries(Object.entries(C1).map(([r,o])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:o])),...i.kind!=="structure"&&i.kind!=="avatar"&&i.properties?.drivable===!0?{drivable:!0}:{}},hitbox:R1(i?.hitbox),...i.physics?{physics:Sf(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!vr(r?.assetId)).map((r,o)=>{let a=$g(r?.effect),l=typeof r?.actionId=="string"&&yf.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=i.kind==="structure"?w1(r?.reaction,r?.zone):null,h=i.kind==="structure"&&r?.zone!=="trigger"?Yg(r?.hinge):null;return{name:gf(r?.name,`Pi\xE8ce ${o+1}`),...h?{hinge:h}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(uf,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Fo.parts?{group:r.group}:{},shape:r?.shape==="asset"&&tu(r?.assetId)?"asset":Object.hasOwn(E1,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&tu(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Qh(r?.profile)}:{},position:Fs(r?.position,0,-3,3),rotation:Fs(r?.rotation,0,-360,360),scale:Fs(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&u0.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(A1,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:gf(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(_f,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&o0(r.portal)?{portal:o0(r.portal)}:{},...r?.uv?{uv:c0(r)}:{},surface:Object.hasOwn(l0,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Fo.textureBytes&&T1.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&Jg(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function d0(n){try{let e=(n??globalThis.localStorage)?.getItem(bf);if(e&&e.length<=Fo.fileBytes)return br(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function P1(n){switch(n){case"tetrahedron":return new sr(Math.sqrt(3)/2);case"sphere":return new gi(.5,20,12);case"cylinder":return new Bt(.5,.5,1,20);case"cone":return new tr(.5,1,20);case"torus":return new Bn(.365,.135,8,24);case"capsule":return new bs(.28,.44,6,16);case"diamond":return new mi(.5);default:return new qe(1,1,1)}}var f0=Object.keys(l0),mn=64,ol=4,p0=2,qi;function m0(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function g0(){if(qi)return qi;let n=mn*ol,e=mn*p0,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/mn)*ol+Math.floor(s/mn),o=m0(f0[r],s%mn,i%mn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return qi=new ti(t,n,e),qi.colorSpace=vt,qi.magFilter=rn,qi.minFilter=In,qi.generateMipmaps=!0,qi.needsUpdate=!0,qi}var xf=new Map,Ui;function I1(){if(Ui)return Ui;let n=new Uint8Array(mn**2*4);for(let e=0;e<mn;e++)for(let t=0;t<mn;t++){let i=t>>3,s=e>>3,r=(i*13+s*17+i*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;n.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*mn+t)*4)}return Ui=new ti(n,mn,mn),Ui.colorSpace=vt,Ui.wrapS=Ui.wrapT=An,Ui.magFilter=rn,Ui.minFilter=In,Ui.generateMipmaps=!0,Ui.needsUpdate=!0,Ui}function a0(n){if(xf.has(n))return xf.get(n);let e=new Uint8Array(mn*mn*4);for(let i=0;i<mn;i++)for(let s=0;s<mn;s++){let r=m0(n,s,i),o=(i*mn+s)*4;e.set([r,r,r,255],o)}let t=new ti(e,mn,mn);return t.colorSpace=vt,t.wrapS=t.wrapT=An,t.magFilter=rn,t.minFilter=In,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,xf.set(n,t),t}function x0(n){return!!(n?.effect||n?.texture||n?.uv||n?.surface==="windows"||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function D1(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=c0(e),a=we.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:f}=n.attributes,d=new v,p=new v;for(let x=0;x<h.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){d.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let _=Math.abs(p.x),b=Math.abs(p.y),y=Math.abs(p.z);_>=b&&_>=y?(g=d.z,m=d.y):b>=y?(g=d.x,m=d.z):(g=d.x,m=d.y)}f.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function nu(n,e=new v(...n.scale)){let t=n.shape==="asset"?pf(n.assetId):null,i=n.shape==="custom"?i0(n.profile):t?.geometry?.clone()??P1(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Ue(new Float32Array(s.attributes.position.count*2),2)),n.uv&&D1(s,n,e);let r=n.rotation.map(we.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new ke(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=f0.indexOf(n.surface),u=h%ol,f=Math.floor(h/ol),d=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&d?(l[p*3]=d.getX(p)*o.r,l[p*3+1]=d.getY(p)*o.g,l[p*3+2]=d.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&n.surface!=="windows"&&c.setXY(p,(u+.05+c.getX(p)*.9)/ol,(f+.05+c.getY(p)*.9)/p0);return s.setAttribute("color",new Nt(l,3)),s}function L1(n){return Qg(U1(n),n?.effect)}function U1(n){let e=n?.shape==="asset"?pf(n.assetId):null,t=_f[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new xi().load(n.texture);a.colorSpace=vt,a.wrapS=a.wrapT=An,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=An),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new ke(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??_f.original;if(n?.surface==="windows"&&!n.texture)return new dn({vertexColors:!0,map:a0("windows"),emissive:"#ffffff",emissiveMap:I1(),emissiveIntensity:1.3,roughness:i,metalness:s});if(!n?.texture)return new dn({vertexColors:!0,map:n?.uv?a0(n.surface):g0(),roughness:i,metalness:s});let r=new xi().load(n.texture);return r.colorSpace=vt,r.wrapS=r.wrapT=An,new dn({vertexColors:!0,map:r,roughness:i,metalness:s})}function iu(n){return n?.parts?.some(x0)?n.parts.map(L1):new dn({vertexColors:!0,map:g0(),roughness:.68})}function su(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==qi&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Mf(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return nu(s);let r=new Qt(...s.rotation.map(we.degToRad),"ZYX"),o=new v(...s.scale).multiply(new v(...[0,1,2].map(a=>new v().setComponent(a,1).applyEuler(r).multiply(e).length())));return nu(s,o)}),i=Xh(t,n.some(x0));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function ru(n,e=null){let t=Mf(n.parts),i=t.boundingBox.getSize(new v).max(new v(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Mf(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function al(n){let e=new cn;for(let t of n.parts??[]){let i=nu(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new v,new v(1,1,1)),e}function No(n){return al(n).getSize(new v)}function y0(n){let e=al(n),t=e.getCenter(new v),i=e.getSize(new v),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":vf.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?we.clamp(s.precision,8,96):48,center:r?new v(...s.center):t,size:r?new v(...s.size):i,rotation:r?new v(...s.rotation??[0,0,0]):new v,boundsCenter:t,boundsSize:i}}function F1(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new v().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function N1(n,e=null){let t=y0(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new v(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,f)=>f!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new bs(l,c,Math.max(2,Math.round(i/8)),i):new gi(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=Mf(n.parts),r=F1(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new as(r),a=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new qe(1,1,1)}function _0(n,e=null){let t=y0(n),i=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5)),s=e?new v(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=N1(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(we.degToRad(t.rotation.x)),a.rotateY(we.degToRad(t.rotation.y)),a.rotateZ(we.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function v0(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=al(n),i=t.getCenter(new v),s=t.getSize(new v).max(new v(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new v(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=nu(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new v).sub(i).multiply(r),size:l.getSize(new v).multiply(r).max(new v(.01,.01,.01))};return a.dispose(),[c]})}var w0=512,Tf=1/2.6**2,lu=1e4,cl=20,B1=1e6,Ef=1e4,O1=1e4,Af=10,Cf=10,z1=1e4,k1=16,Bo=1e4,M0=new WeakMap,Fi=we.clamp,Ni=we.lerp,hl=n=>n*n*(3-2*n);function It(n,e,t,i){return Number.isFinite(n)?Fi(n,e,t):i}function T0(n){if(!n)return null;let e=br({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var V1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function E0(n,e=k1){return Math.round(It(n,1,w0,e))}function G1(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return It(n[e+"Density"],0,cl,0);let r=It(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return It(o/t,0,cl,0)}var H1=["grass","shrub","model"],W1=["keep","fit","stretch"],X1=/^#[a-f\d]{6}$/i,q1=20;function Y1(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(It(n.minHeight,-300,300,-300),It(n.maxHeight,-300,300,300)),[s,r]=e(It(n.minX,0,100,0),It(n.maxX,0,100,100)),[o,a]=e(It(n.minZ,0,100,0),It(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:It(n.maxSlope,0,90,90),yaw:It(n.yaw,-360,360,0),yawVariation:It(n.yawVariation,0,360,360)}}function Z1(n){return n?{x:It(n.x,-256,256,0),z:It(n.z,-256,256,0),radius:It(n.radius,.1,512,5),blend:It(n.blend,0,1,.5)}:null}function ul(n={}){let e=T0(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,Af).map(r=>X1.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:It(n.density,0,cl,1),colors:s,seed:Math.round(It(n.seed,0,2147483647,1)),size:It(n.size,.05,Ef,1),fit:W1.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:It(n.variation,0,Cf,0),...n.scatter?{scatter:Y1(n.scatter)}:{}}}function j1(n,e){return Array.isArray(n.rules)?n.rules.slice(0,lu).filter(t=>t&&typeof t=="object"&&H1.includes(t.kind)).filter(t=>t.kind!=="model"||T0(t.model)).map(ul):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=G1(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[ul({kind:t,model:a,density:o,seed:n.seed,size:It(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function cs(n={},e=1){let t=E0(n?.detail),i=n?.heights;return{detail:t,...["varied","irregular","staggered"].includes(n?.triangulation)?{triangulation:n.triangulation}:{},...n?.thickness>0?{thickness:It(n.thickness,0,100,0)}:{},seed:Math.round(It(n?.seed,0,2147483647,1)),amplitude:It(n?.amplitude,0,1e4,0),frequency:It(n?.frequency,1e-5,100,.12),octaves:Math.round(It(n?.octaves,1,q1,3)),roughness:It(n?.roughness,0,1,.42),ridge:It(n?.ridge,0,1,0),edgeFade:It(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:Z1(n.reliefArea)}:{},rules:j1(n??{},e),...["triplanar","regolith"].includes(n?.projection)?{projection:n.projection}:{},textureDensity:It(n?.textureDensity,1e-4,z1,Tf),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&V1.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>It(s,-Bo,Bo,0)):null}}function Rf(n,e,t){return t!==void 0&&kn(n,e,t)>.5}function wf(n,e=n.detail){let{triangulation:t,seed:i}=n;if(t!=="irregular"&&t!=="staggered")return null;let s=e+1,r=s**2,o=new Float32Array(r),a=new Float32Array(r);for(let l=0;l<=e;l++)for(let c=0;c<=e;c++){let h=l*s+c,u=l>0&&l<e&&c>0&&c<e,f=u&&t==="irregular";o[h]=c+(f?(2*kn(c,l,i)-1)*.2:u?.25*(l%2?1:-1):0),a[h]=l+(f?(2*kn(c,l,i+417)-1)*.2:0)}return{x:o,z:a,staggered:t==="staggered"}}function A0(n,e,t,i){return i?.staggered?e%2===1:Rf(n,e,t)}var Ns={a:0,b:0,c:0,u:0,v:0};function ou(n,e,t,i,s,r){let o=n-t.x[i],a=e-t.z[i],l=t.x[s]-t.x[i],c=t.z[s]-t.z[i],h=t.x[r]-t.x[i],u=t.z[r]-t.z[i],f=1/(l*u-c*h),d=(o*u-a*h)*f,p=(l*a-c*o)*f;return d<-1e-6||p<-1e-6||d+p>1+1e-6?!1:(Ns.a=i,Ns.b=s,Ns.c=r,Ns.u=d,Ns.v=p,!0)}function b0(n,e,t,i,s,r,o){let a=r*i+s,l=a+1,c=a+i,h=c+1;return A0(s,r,o,t)?ou(n,e,t,a,c,h)||ou(n,e,t,a,h,l):ou(n,e,t,a,c,l)||ou(n,e,t,h,l,c)}function Pf(n,e,t,i,s){let r=t+1,o=Math.min(t-1,Math.floor(n)),a=Math.min(t-1,Math.floor(e));if(b0(n,e,s,r,o,a,i))return!0;for(let l=Math.max(0,a-1);l<=Math.min(t-1,a+1);l++)for(let c=Math.max(0,o-1);c<=Math.min(t-1,o+1);c++)if((c!==o||l!==a)&&b0(n,e,s,r,c,l,i))return!0;return!1}function C0(n,e,t,i,s,r){let o=Fi(t,0,e),a=Fi(i,0,e);if(r&&Pf(o,a,e,s,r)){let{a:_,b,c:y,u:T,v:E}=Ns;return n[_]+(n[b]-n[_])*T+(n[y]-n[_])*E}let l=Math.min(e-1,Math.floor(o)),c=Math.min(e-1,Math.floor(a)),h=o-l,u=a-c,f=e+1,d=c*f+l,p=n[d],x=n[d+1],g=n[d+f],m=n[d+f+1];return Rf(l,c,s)?h>=u?p+(x-p)*h+(m-x)*u:p+(m-g)*h+(g-p)*u:h+u<=1?p+(x-p)*h+(g-p)*u:m+(g-m)*(1-h)+(x-m)*(1-u)}function If(n,e){let t=E0(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=wf(n),o=wf(n,t),a=n.triangulation?n.seed:void 0,l=Array.from({length:i**2},(c,h)=>C0(n.heights,n.detail,(o?.x[h]??h%i)*s,(o?.z[h]??Math.floor(h/i))*s,a,r));return{...n,detail:t,heights:l}}function kn(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function au(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=hl(n-i),o=hl(e-s),a=Ni(kn(i,s,t),kn(i+1,s,t),r),l=Ni(kn(i,s+1,t),kn(i+1,s+1,t),r);return 2*Ni(a,l,o)-1}function Sr(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d}=i,p=M0.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.triangulation===i.triangulation&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===f;if(x&&p.heights===d)return p;let g=s+1,m=x?p.layout:wf(i),_=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let T=0;T<=s;T++)for(let E=0;E<=s;E++){let P=T*g+E,C=((m?.x[P]??E)/s-.5)*e,S=((m?.z[P]??T)/s-.5)*t,M=1;if(f){let O=Math.hypot(C-f.x,S-f.z);if(O>=f.radius)continue;f.blend&&(M=hl(Math.min(1,(f.radius-O)/(f.radius*f.blend))))}let R=C*a,L=S*a,B=0,k=1,X=0;for(let O=0;O<l;O++){let oe=au(R*2**O,L*2**O,r+O*13);B+=k*Ni(oe,1-2*Math.abs(oe),h),X+=k,k*=c}let Y=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(T/s-.5))*2)),u*2):1,te=l===3&&c===.42&&h===0&&u===0;_[T*g+E]=M*(te?o*(.62*au(R,L,r)+.26*au(R*2.03,L*2.03,r+13)+.12*au(R*4.13,L*4.13,r+37)):o*B/X*Y)}let b=d?_.map((T,E)=>T+d[E]):_,y={w:e,d:t,detail:s,seed:r,layout:m,triangulation:i.triangulation,diagonalSeed:i.triangulation?r:void 0,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d,procedural:_,surface:b};return M0.set(n,y),y}function cu(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return C0(o,i,(e/s+.5)*i,(t/r+.5)*i,n.diagonalSeed,n.layout)}function Oo(n=0){return(Math.round(n/90)%4+4)%4*90}function R0(n){let e=Oo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function P0(n,e,t){let{cos:i,sin:s}=R0(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function ll(n){return Oo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function S0(n,e,t){return n.y+cu(Sr(n),...P0(n,e,t))}var J1=.25;function Df(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=ll(n),s=ll(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let f=e[r]-u*s[a]/2,d=f-(n[r]+u*i[a]/2);Math.abs(d)<=J1&&(!t||Math.abs(d)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:f,delta:d})}}return t}function I0(n,e,t=1.5){let i=Df(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:f}=i,d=n.terrain;if(Math.abs(ll(n)[a]-ll(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let S=e.terrain.detail,M=Math.ceil(d.detail/S)*S;M<=w0&&(d=If(d,M))}let p={...n,[s]:n[s]+f,terrain:d},{detail:x,procedural:g,heights:m,surface:_,layout:b}=Sr(p),y=m?.slice()??Array((x+1)**2).fill(0),T=Math.max(t,ll(p)[o]/x),{cos:E,sin:P}=R0(p),C=!1;for(let S=0;S<=x;S++)for(let M=0;M<=x;M++){let R=S*(x+1)+M,L=((b?.x[R]??M)/x-.5)*p.w,B=((b?.z[R]??S)/x-.5)*p.d,k=p.x+E*L+P*B,X=p.z-P*L+E*B,Y=r==="x"?k:X;if(Y<l-1e-6||Y>c+1e-6)continue;let te=Math.max(0,h*(u-(s==="x"?k:X)));if(te>T)continue;let O=s==="x"?S0(e,u,X):S0(e,k,u),oe=Ni(_[R],O-p.y,hl(1-te/T))-g[R];y[R]=Fi(oe,-Bo,Bo),C||=y[R]!==oe}return{piece:{...p,terrain:{...d,heights:y}},clipped:C}}function K1(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(h+=s[f*r+d],u++);return h/u}function D0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Sr(n),{detail:l,w:c,d:h,surface:u,procedural:f,layout:d}=a,[p,x]=P0(n,e,t),g=Fi(p,-c/2,c/2),m=Fi(x,-h/2,h/2);if((p-g)**2+(x-m)**2>=s**2)return!1;let _=(p/c+.5)*l,b=(x/h+.5)*l,y=c/l,T=h/l,E=Math.max(0,Math.ceil(_-s/y-(d?.25:0))),P=Math.min(l,Math.floor(_+s/y+(d?.25:0))),C=Math.max(0,Math.ceil(b-s/T-(d?.25:0))),S=Math.min(l,Math.floor(b+s/T+(d?.25:0))),M=Number.isFinite(o)?o-n.y:cu(a,p,x),R=l+1,L=a.heights?.slice()??new Array(R**2).fill(0),B=!1,k=!1;function X(Y,te,O){B=!0;let oe=te*R+Y,ye=L[oe],ve;if(i==="raise"||i==="lower")ve=ye+(i==="raise"?1:-1)*r*O;else{let De=i==="flatten"?M:K1(a,Y,te);ve=Ni(u[oe],De,Math.min(1,r)*O)-f[oe]}ve=Fi(ve,-Bo,Bo),!(Math.abs(ve-ye)<1e-7)&&(L[oe]=ve,k=!0)}for(let Y=C;Y<=S;Y++)for(let te=E;te<=P;te++){let O=Y*R+te,oe=Math.hypot(((d?.x[O]??te)-_)*y,((d?.z[O]??Y)-b)*T)/s;oe<1&&X(te,Y,hl(1-oe))}if(!B){let Y=Fi(_,0,l),te=Fi(b,0,l),O=Math.min(l-1,Math.floor(Y)),oe=Math.min(l-1,Math.floor(te)),ye=Y-O,ve=te-oe;if(d&&Pf(Y,te,l,a.diagonalSeed,d)){let{a:De,b:Ye,c:rt,u:et,v:Z}=Ns,W=1-et-Z>=Math.max(et,Z)?De:et>=Z?Ye:rt;X(W%R,Math.floor(W/R),1)}else{let De=ye+ve<=1,Ye=De?1-ye-ve:ye+ve-1,rt=De?ye:1-ve,et=De?ve:1-ye;if(Ye>=Math.max(rt,et)){let Z=+!De;X(O+Z,oe+Z,1)}else rt>=et?X(O+1,oe,1):X(O,oe+1,1)}}return k&&(n.terrain.heights=L),k}function L0(n,e){let t=e.terrain?.projection==="regolith";if(!t&&e.terrain?.projection!=="triplanar")return;let i=n.onBeforeCompile,s=n.customProgramCacheKey(),r=we.degToRad(e.uvRotation??0),o=Math.sqrt(e.terrain.textureDensity??Tf)/(e.uvScale??1);n.onBeforeCompile=function(a,l){Object.assign(a.uniforms,{terrainRepeat:{value:o},terrainUvBasis:{value:new re(Math.cos(r),Math.sin(r))},terrainUvOffset:{value:new re(e.uvOffsetX??0,e.uvOffsetY??0)},terrainHalfSize:{value:new re(e.w/2,e.d/2)}});let c=`varying vec3 terrainPoint; varying vec3 terrainNormal;
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
    `),i.call(this,a,l)},n.customProgramCacheKey=()=>s+(t?"|terrain-regolith":"|terrain-triplanar")}function U0(n){let{w:e,d:t,terrain:i}=n,{detail:s,layout:r,diagonalSeed:o}=Sr(n),a=s+1,l=a**2,c=i.thickness??0,h=c?4*s:0,u=l*(c?2:1)+4*h,f=new Float32Array(u*3),d=new Float32Array(u*2),p=u>65536?Uint32Array:Uint16Array,x=s**2*6,g=new p(x*(c?2:1)+h*6),m=Math.sqrt(i.textureDensity??Tf),_=0;for(let T=0;T<=s;T++)for(let E=0;E<=s;E++){let P=T*a+E,C=(r?.x[P]??E)/s,S=(r?.z[P]??T)/s;if(f[3*P]=(C-.5)*e,f[3*P+2]=(S-.5)*t,d[2*P]=C*e*m,d[2*P+1]=(1-S)*t*m,T>=s||E>=s)continue;let M=P+1,R=P+a,L=R+1;A0(E,T,o,r)?(g[_++]=P,g[_++]=R,g[_++]=L,g[_++]=P,g[_++]=L,g[_++]=M):(g[_++]=P,g[_++]=R,g[_++]=M,g[_++]=L,g[_++]=M,g[_++]=R)}let b=[];if(c){f.copyWithin(l*3,0,l*3),d.copyWithin(l*2,0,l*2);for(let E=0;E<x;E+=3)g[_++]=l+g[E],g[_++]=l+g[E+2],g[_++]=l+g[E+1];let T=(E,P)=>{for(let C=0;C<s;C++){let S=E+C*P,M=S+P,R=l*2+b.length*4;b.push([S,M]);for(let L=0;L<4;L++){let B=L%2?M:S;f[3*(R+L)]=f[3*B],f[3*(R+L)+2]=f[3*B+2];let k=Math.abs(P)===1?e:t;d[2*(R+L)]=(C+L%2)/s*k*m,d[2*(R+L)+1]=L<2?c*m:0}g.set([R,R+1,R+2,R+1,R+3,R+2],_),_+=6}};T(0,1),T(s,a),T(l-1,-1),T(l-a,-a)}let y=new ht;return y.setAttribute("position",new Nt(f,3).setUsage(ja)),y.setAttribute("uv",new Nt(d,2)),y.setIndex(new Nt(g,1)),y.userData.terrainSides=b,Lf(y,n),y}function Lf(n,e){let{surface:t}=Sr(e),{position:i}=n.attributes,s=e.terrain.thickness??0,r=t.length;for(let o=0;o<r;o++)i.setY(o,t[o]),s&&i.setY(r+o,t[o]-s);n.userData.terrainSides.forEach(([o,a],l)=>{let c=r*2+l*4;i.setY(c,t[o]),i.setY(c+1,t[a]),i.setY(c+2,t[o]-s),i.setY(c+3,t[a]-s)}),i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function $1(n,e,t,i){let{detail:s,w:r,d:o,surface:a,layout:l}=n,c=Fi((e/r+.5)*s,0,s),h=Fi((t/o+.5)*s,0,s);if(l&&Pf(c,h,s,n.diagonalSeed,l)){let{a:_,b,c:y}=Ns,T=(l.x[b]-l.x[_])*r/s,E=(l.z[b]-l.z[_])*o/s,P=a[b]-a[_],C=(l.x[y]-l.x[_])*r/s,S=(l.z[y]-l.z[_])*o/s,M=a[y]-a[_];return i.set(P*S-E*M,E*C-T*S,T*M-P*C).normalize()}let u=Math.min(s-1,Math.floor(c)),f=Math.min(s-1,Math.floor(h)),d=s+1,p=f*d+u;if(Rf(u,f,n.diagonalSeed)){let _=c-u>=h-f,b=_?a[p+1]-a[p]:a[p+d+1]-a[p+d],y=_?a[p+d+1]-a[p+1]:a[p+d]-a[p];return i.set(-b*s/r,1,-y*s/o).normalize()}let x=c-u+h-f<=1,g=x?a[p+1]-a[p]:a[p+d+1]-a[p+d],m=x?a[p+d]-a[p]:a[p+d+1]-a[p+1];return i.set(-g*s/r,1,-m*s/o).normalize()}function Q1(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new ht;return e.setAttribute("position",new Ue(n,3)),e.setAttribute("uv",new Ue(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function ew(){return new pi(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function tw(n,e,t){if(e==="stretch")return new v().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function nw(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),h=[],u=new v;if(!c||!e.density)return{requested:0,positions:h,area:c};let f=Math.cos(we.degToRad(s.maxSlope)),d=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,T)=>{if(p){let E=n.y+cu(t,y,T);if(E<s.minHeight||E>s.maxHeight)return!1}return!d||$1(t,y,T,u).y>=f-1e-7},g=1;if(d||p){let y=0,T=32;for(let E=0;E<T;E++)for(let P=0;P<T;P++)x(Ni(r,o,(P+.5)/T),Ni(a,l,(E+.5)/T))&&y++;g=y/T**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),b=d||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<b&&h.length<_;y++){let T=Ni(r,o,kn(y,27,e.seed)),E=Ni(a,l,kn(y,27,e.seed+1));x(T,E)&&h.push([T,E])}return{requested:m,positions:h,area:c*g}}function F0(n){let e=new _n,t=Sr(n);e.userData.distribution=[];let i=B1,s=O1;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=nw(n,o,t,i),h=l?l.length:Math.min(a,i),u=o.collidable?Math.min(h,s):0;if(i-=h,s-=u,e.userData.distribution[r]={requested:a,count:h,area:c,collisions:u},!h)continue;let f=o.kind==="grass",d=o.model?tw(No(o.model),o.fit,o.size):null,p=o.model?ru(o.model,d):f?Q1():ew();d?p.scale(...d):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?iu(o.model):new ii({color:"#ffffff",side:f?on:ei,flatShading:!0});if(f&&n.terrain.grassTexture){let b=new xi().load(n.terrain.grassTexture);b.colorSpace=vt,x.map=b,x.userData.ownTexture=!0}let g=new ba(p,x,h);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:u,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(ja),g.receiveShadow=!0;let m=o.colors.map(b=>new ke(b)),_=new ke;for(let b=0;b<h;b++){let y=kn(b,41,o.seed)*(m.length-1),T=Math.floor(y);g.setColorAt(b,_.copy(m[T]).lerp(m[T+1],y-T))}e.add(g)}return iw(e,n),e}function iw(n,e){let t=Sr(e),i=new Yt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(kn(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(kn(c,27,r+1)-.5)*.96*e.d;i.position.set(h,cu(t,h,u),u),i.rotation.y=l?we.degToRad(l.yaw+kn(c,27,r+2)*l.yawVariation):kn(c,27,r+2)*Math.PI*2,i.scale.setScalar(Ni(Math.max(.05,1-o),1+o,kn(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function N0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),su(e.material),e.dispose();n.clear(),n.removeFromParent()}}var O0=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Uf=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],dl={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},sw=16e6,zo=512,Yi=1024,oi=2e4,Bs=512,hu=1024,Ut=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,B0=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function rw(n){return!n||!Number.isFinite(n.seconds)||!(n.x>0||n.z>0)?null:{x:Ut(n.x,0,640,0),z:Ut(n.z,0,640,0),seconds:Ut(n.seconds,10,900,90),phase:Ut(n.phase,-360,360,0),rise:Ut(n.rise,0,100,0)}}function gn(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>sw)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>zo)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+zo+" pi\xE8ces.");let e=n.spawn??{},t=n.boundary,i=Vh(n.environment),s=n.pieces.filter(r=>!vr(r?.sceneryId)&&!eu(r?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:B0(n.name,56,"Ma map"),worldSize:Ut(n.worldSize,24,2048,240),...i?{environment:i}:{},...t?.diameter>0?{boundary:{diameter:Ut(t.diameter,12,2048,650),ceiling:Ut(t.ceiling,3,256,128)}}:{},spawn:{x:Ut(e.x,-Yi,Yi,0),y:Ut(e.y,-oi,oi,.06),z:Ut(e.z,-Yi,Yi,3),yaw:Ut(e.yaw,-360,360,0)},pieces:s.map((r,o)=>{if(!r||typeof r!="object")throw Error("Pi\xE8ce invalide : "+(o+1));let a=r.terrain?hu:Bs,l=Ut(r.w,.05,a,3),c=Ut(r.d,.05,a,3),h=r.solid===!1?rw(r.flight):null,u=r.terrain&&typeof r.terrain=="object"?cs(r.terrain,l*c):null,f=r.model?br({version:1,models:[r.model]}).models[0]:null;if(f&&!f.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:B0(r.name,36,"Pi\xE8ce "+(o+1)),...typeof r.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(r.sceneryId)?{sceneryId:r.sceneryId}:{},x:Ut(r.x,-Yi,Yi,0),y:Ut(r.y,-oi,oi,0),z:Ut(r.z,-Yi,Yi,0),w:l,h:Ut(r.h,.05,256,.5),d:c,pitch:u?0:Ut(r.pitch,-180,180,0),yaw:u?Oo(Ut(r.yaw,-360,360,0)):Ut(r.yaw,-360,360,0),roll:u?0:Ut(r.roll,-180,180,0),...u?{terrain:u}:{},...h?{flight:h}:{},...f?{model:f}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(r.primitive)?r.primitive:"box",uvScale:Ut(r.uvScale,.05,100,1),uvOffsetX:Ut(r.uvOffsetX,-100,100,0),uvOffsetY:Ut(r.uvOffsetY,-100,100,0),uvRotation:Ut(r.uvRotation,-360,360,0),material:Math.round(Ut(r.material,0,16,0)),color:typeof r.color=="string"&&/^#[a-f0-9]{6}$/i.test(r.color)?r.color:"#ffffff",grip:Ut(r.grip,0,1.5,.8),gravity:Ut(r.gravity,.05,2.5,1),bounce:Ut(r.bounce,0,1.65,1),solid:r.solid!==!1,texture:typeof r.texture=="string"&&r.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(r.texture)?r.texture:null}})}}function z0(n){return gn({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Lg,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Qt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function k0(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return gn({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,dl.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,dl.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,dl.rubber)]})}function ai(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function V0(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new Qt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new v(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=d=>Math.round(d/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*f,h+=s.y*f,u+=s.z*f,![c,h,u].every(Number.isFinite)||Math.abs(c)>Yi||Math.abs(u)>Yi||Math.abs(h)>oi?null:{...t,x:c,y:h,z:u}}var G0="gorilla-lab-custom-map-v1";function H0(n){let e=new Blob([JSON.stringify(gn(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var ow=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Ff(){return ai({name:"Miroir",sceneryId:"lab-mirror",x:Rs.x,y:Rs.y,z:Rs.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function W0(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&ow.has(e)):!1:!0}var X0=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Nf=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Z0=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",ko=(n,e,t)=>Math.min(t,Math.max(e,n)),aw=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},uu=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function j0(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var J0="gorilla-lab-texture-shelf-v1";function lw(){try{let n=JSON.parse(localStorage.getItem(J0)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function q0(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Z0(t),r.fillRect(0,0,o,o);let a=j0(s),l=o/Math.max(4,2*Math.round(4*i)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(i),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<u;f++){let d=a()*o,p=a()*o,x=a(),g=a(),m=a();uu(r,_=>{if(e==="rock"){let b=(4+x*22)*h;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let T=y*Math.PI/3+g,E=b*(.63+.3*Math.cos(T*2+g)+.25);_.lineTo(d+Math.cos(T)*E,p+Math.sin(T)*E*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let b=(1+x*x*12)*h,y=_.createRadialGradient(d,p,0,d,p,b);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(d-b,p-b,b*2,b*2)}else if(e==="grass"||e==="wood"){let b=e==="grass",y=(b?5+x*25:7+x*110)*h;_.strokeStyle=b?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*h,_.beginPath(),_.moveTo(d,p),b?_.quadraticCurveTo(d+y*(g-.5)*.55,p-y*.58,d+y*(g-.6),p-y):_.quadraticCurveTo(d+y*.5,p+10*(g-.5),d+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let b=(e==="sand"?.6+x*1.6:1+x*5)*h;_.fillRect(d,p,b,b*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let f=0;f<h;f++)uu(r,d=>{d.beginPath(),d.arc(f*l+l/2,u*l+l/2,ko(l*.11,2,13),0,Math.PI*2),d.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let f=0;f<=o;f+=l){let d=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(f+d,u),r.lineTo(f+d,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var cw=`
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
`;function hw(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=cw,document.head.append(n)}async function Y0(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function Bf({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){hw();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=N=>o.querySelector(N),l=a(".texture-canvas"),c=a(".texture-tile"),h=Nf(),u=Nf(),f={pattern:X0.some(([N])=>N===i)?i:"grain",base:Z0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},d=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,b=!1,y=null,T="paint",E=null,P=null;a("#studio-title").textContent=t+" / SURFACE LAB";let C=[],S=-1;a("[data-field=base]").value=f.base;for(let N of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+N+"]").addEventListener("input",se=>{let Ee=se.target.value;f[N]=N==="seed"?Math.trunc(ko(Number(Ee)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(N)?Number(Ee):Ee});let M=N=>{a("[data-status]").textContent=N},R=()=>{d.clearRect(0,0,512,512),d.drawImage(h,0,0),d.drawImage(u,0,0);let N=c.getContext("2d");N.clearRect(0,0,256,128);for(let se=0;se<2;se++)for(let Ee=0;Ee<4;Ee++)N.drawImage(l,Ee*64,se*64,64,64)},L=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:C,editingShape:S}),B=N=>{p.putImageData(N.base,0,0),x.putImageData(N.top,0,0),C=N.shapes,S=N.editingShape,Y(),R()},k=()=>{P=null,g.push(L()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},X=(N,se)=>{N.length&&(P=null,se.push(L()),B(N.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},Y=()=>{a("[data-shape-count]").textContent=C.length+" forme"+(C.length>1?"s":""),a("[data-cmd=add-shape]").textContent=S<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(S+1),a("[data-shape-list]").replaceChildren(...C.map((N,se)=>{let Ee=document.createElement("div");Ee.className="texture-setting-row";let D=document.createElement("canvas");D.width=48,D.height=32;let ae=Math.min(48/N.width,32/N.height);D.getContext("2d").drawImage(N,0,0,N.width*ae,N.height*ae);let K=document.createElement("button"),j=document.createElement("button");return K.textContent="Modifier "+(se+1),j.textContent="Supprimer "+(se+1),K.onclick=()=>{k(),S=se,x.clearRect(0,0,512,512),x.drawImage(N,(512-N.width)/2,(512-N.height)/2),Y(),R()},j.onclick=()=>{k(),C=C.filter(($,_e)=>_e!==se),S===se?(S=-1,x.clearRect(0,0,512,512)):S>se&&S--,Y(),R()},Ee.append(D,K,j),Ee}))};a("[data-cmd=add-shape]").onclick=()=>{let N=x.getImageData(0,0,512,512).data,se=512,Ee=512,D=-1,ae=-1;for(let j=0;j<512;j++)for(let $=0;$<512;$++)N[4*(j*512+$)+3]&&(se=Math.min(se,$),Ee=Math.min(Ee,j),D=Math.max(D,$),ae=Math.max(ae,j));if(D<0){M("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let K=document.createElement("canvas");K.width=D-se+1,K.height=ae-Ee+1,K.getContext("2d").drawImage(u,se,Ee,K.width,K.height,0,0,K.width,K.height),k(),C=S<0?[...C,K]:C.map((j,$)=>$===S?K:j),S=-1,x.clearRect(0,0,512,512),Y(),R(),M("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let te=()=>{let N=($,_e,me)=>ko(Number(a("[data-field="+$+"]").value)||0,_e,me),se=Math.round(N("density",1,1e3)),Ee=N("minScale",1,200)/100,D=Math.max(Ee,N("maxScale",1,200)/100),ae=N("rotation",0,360)*Math.PI/180,K=a("[data-field=mirror]").checked,j=j0(f.seed);k(),f.pattern="solid",q0(h,f);for(let $=0;$<se&&C.length;$++){let _e=C[Math.floor(j()*C.length)],me=j()*512,Se=j()*512,Ze=j()*ae,We=512*(Ee+j()*(D-Ee))/Math.max(_e.width,_e.height),I=K&&j()<.5?-1:1;uu(p,w=>{w.translate(me,Se),w.rotate(Ze),w.scale(I*We,We),w.drawImage(_e,-_e.width/2,-_e.height/2)})}R(),M(C.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},O=N=>{let se=l.getBoundingClientRect();return{x:(N.clientX-se.left)/se.width*512,y:(N.clientY-se.top)/se.height*512}},oe=N=>{let se=f.size/2,Ee=f.opacity;uu(x,D=>{D.save(),T==="erase"&&(D.globalCompositeOperation="destination-out"),D.globalAlpha=Ee;let ae=ko(f.hardness,.05,1);if(T==="stamp")D.fillStyle=f.ink,D.translate(N.x,N.y),D.rotate(Math.PI/4),D.fillRect(-se*.8,-se*.8,se*1.6,se*1.6);else{let K=D.createRadialGradient(N.x,N.y,se*ae*.85,N.x,N.y,se);if(T==="erase")K.addColorStop(0,"rgba(0,0,0,1)"),K.addColorStop(1,"rgba(0,0,0,0)");else{let j=f.ink.match(/[\da-f]{2}/gi).map($=>parseInt($,16)).join(",");K.addColorStop(0,"rgba("+j+",1)"),K.addColorStop(1,"rgba("+j+",0)")}D.fillStyle=K,D.beginPath(),D.arc(N.x,N.y,se,0,2*Math.PI),D.fill()}D.restore()})},ye=(N,se)=>{let Ee=Math.hypot(se.x-N.x,se.y-N.y),D=Math.max(1,Math.ceil(Ee/Math.max(2,f.size*.18)));for(let ae=1;ae<=D;ae++)oe({x:N.x+(se.x-N.x)*ae/D,y:N.y+(se.y-N.y)*ae/D})},ve=N=>{let se=d.getImageData(Math.floor(ko(N.x,0,511)),Math.floor(ko(N.y,0,511)),1,1).data;f.ink="#"+[...se].slice(0,3).map(Ee=>Ee.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=f.ink,M("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",N=>{if(N.button!==0||b)return;let se=O(N);if(T==="pick"){ve(se);return}N.preventDefault(),k(),b=!0,y=N.pointerId,E=se,l.setPointerCapture(N.pointerId),oe(se),R()}),l.addEventListener("pointermove",N=>{if(!b||N.pointerId!==y)return;N.preventDefault();let se=O(N);T==="stamp"?oe(se):ye(E,se),E=se,R()});let De=N=>{N.pointerId===y&&(b=!1,y=null,E=null,l.hasPointerCapture(N.pointerId)&&l.releasePointerCapture(N.pointerId))};l.addEventListener("pointerup",De),l.addEventListener("pointercancel",De);for(let N of o.querySelectorAll("[data-tool]"))N.onclick=()=>{T=N.dataset.tool,o.querySelectorAll("[data-tool]").forEach(se=>se.setAttribute("aria-pressed",String(se===N)))};a("[data-cmd=generate]").onclick=te,a("[data-cmd=undo]").onclick=()=>X(g,m),a("[data-cmd=redo]").onclick=()=>X(m,g),a("[data-cmd=export]").onclick=()=>aw(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async N=>{let se=N.target.files?.[0];if(N.target.value="",!!se)try{if(!["image/png","image/jpeg","image/webp"].includes(se.type))throw Error("Image PNG / JPG / WebP uniquement.");if(se.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ee=await createImageBitmap(se);k(),p.clearRect(0,0,512,512),p.drawImage(Ee,0,0,512,512),Ee.close(),x.clearRect(0,0,512,512),R(),M("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ee){M(Ee.message)}});let Ye=N=>{!N&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",rt,!0),o.remove())},rt=N=>{if(N.key==="Escape"){N.preventDefault(),Ye(!1);return}(N.ctrlKey||N.metaKey)&&!N.target.closest("input,select")&&N.key.toLowerCase()==="z"&&(N.preventDefault(),N.stopImmediatePropagation(),N.shiftKey?X(m,g):X(g,m))};window.addEventListener("keydown",rt,!0),a("[data-cmd=close]").onclick=()=>Ye(!1),a("[data-cmd=cancel]").onclick=()=>Ye(!1);let et=()=>{if(P?.recipe.resolution===f.resolution&&P.data.length<=s)return P.data;for(let N of[f.resolution,256,128].filter((se,Ee,D)=>se<=f.resolution&&D.indexOf(se)===Ee)){let se=document.createElement("canvas");se.width=se.height=N,se.getContext("2d").drawImage(l,0,0,N,N);for(let Ee of[.85,.72,.58]){let D=se.toDataURL("image/webp",Ee);if(D.length<=s)return D}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},Z=lw(),W=a("[data-field=shelf]");function ce(N=""){W.replaceChildren(new Option("Choisir une texture",""),...Z.map(Ee=>new Option(Ee.name,Ee.id))),W.value=N;let se=!!W.value;a("[data-cmd=shelf-load]").disabled=!se,a("[data-cmd=shelf-remove]").disabled=!se}function he(N,se){try{localStorage.setItem(J0,JSON.stringify(N))}catch{return M("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return Z.splice(0,Z.length,...N),ce(se),!0}return W.onchange=()=>ce(W.value),a("[data-cmd=shelf-save]").onclick=()=>{let N=X0.find(([Ee])=>Ee===f.pattern)?.[1]??"Texture",se=prompt("Nom de la texture",N)?.trim().slice(0,50);if(se)try{let Ee={id:crypto.randomUUID(),name:se,data:et()},{pattern:D,base:ae,scale:K,seed:j,resolution:$}=f;Ee.recipe={pattern:D,base:ae,scale:K,seed:j,resolution:$},he([...Z,Ee],Ee.id)&&M("Texture disponible dans les deux ateliers.")}catch(Ee){M(Ee.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let N=Z.find(se=>se.id===W.value);if(!(!N||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let se=Nf();await Y0(N.data,se),k(),p.clearRect(0,0,512,512),p.drawImage(se,0,0),x.clearRect(0,0,512,512),Object.assign(f,N.recipe),P=N;for(let Ee of["base","seed","resolution"])a("[data-field="+Ee+"]").value=f[Ee];R(),M("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(se){M(se.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{he(Z.filter(N=>N.id!==W.value),"")&&M("Texture retir\xE9e de la biblioth\xE8que.")},ce(),a("[data-cmd=apply]").onclick=async()=>{let N=a("[data-cmd=apply]");N.disabled=!0;try{let se=et();await r(se),_=!1,Ye(!0)}catch(se){M(se.message||"Impossible d\u2019appliquer la texture.")}finally{N.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,q0(h,f),R(),n&&Y0(n,h).then(R).catch(()=>M("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>Ye(!1)}}var wr=new cr,Ln=new v,Os=new v,jt=new bt,K0={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},Of={type:"change"},$0={type:"mouseDown",mode:null},Q0={type:"mouseUp",mode:null},ex={type:"objectChange"},gu=class extends hr{constructor(e,t=null){super(void 0,t);let i=new kf(this);this._root=i;let s=new Vf;this._gizmo=s,i.add(s);let r=new Gf;this._plane=r,i.add(r);let o=this;function a(b,y){let T=y;Object.defineProperty(o,b,{get:function(){return T!==void 0?T:y},set:function(E){T!==E&&(T=E,r[b]=E,s[b]=E,o.dispatchEvent({type:b+"-changed",value:E}),o.dispatchEvent(Of))}}),o[b]=y,r[b]=y,s[b]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new v,c=new v,h=new bt,u=new bt,f=new v,d=new bt,p=new v,x=new v,g=new v,m=0,_=new v;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",f),a("cameraQuaternion",d),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new bt,this._parentQuaternionInv=new bt,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new bt,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new bt,this._scaleStart=new v,this._getPointer=uw.bind(this),this._onPointerDown=fw.bind(this),this._onPointerHover=dw.bind(this),this._onPointerMove=pw.bind(this),this._onPointerUp=mw.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&wr.setFromCamera(e,this.camera);let t=zf(this._gizmo.picker[this.mode],wr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&wr.setFromCamera(e,this.camera);let t=zf(this._plane,wr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,$0.mode=this.mode,this.dispatchEvent($0)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&wr.setFromCamera(e,this.camera);let o=zf(this._plane,wr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(jt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ln.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ln.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Os.set(a,a,a)}else Ln.copy(this.pointStart),Os.copy(this.pointEnd),Ln.applyQuaternion(this._worldQuaternionInv),Os.applyQuaternion(this._worldQuaternionInv),Os.divide(Ln),t.search("X")===-1&&(Os.x=1),t.search("Y")===-1&&(Os.y=1),t.search("Z")===-1&&(Os.z=1);s.scale.copy(this._scaleStart).multiply(Os),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Ln.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ln.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(K0[t]),Ln.copy(K0[t]),r==="local"&&Ln.applyQuaternion(this.worldQuaternion),Ln.cross(this.eye),Ln.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ln.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Of),this.dispatchEvent(ex)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Q0.mode=this.mode,this.dispatchEvent(Q0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Of),this.dispatchEvent(ex),this.pointStart.copy(this.pointEnd))}getRaycaster(){return wr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function uw(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function dw(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function fw(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function pw(n){this.enabled&&this.pointerMove(this._getPointer(n))}function mw(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function zf(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var du=new Qt,Ht=new v(0,1,0),tx=new v(0,0,0),nx=new Mt,fu=new bt,mu=new bt,Zi=new v,ix=new Mt,ml=new v(1,0,0),Tr=new v(0,1,0),gl=new v(0,0,1),pu=new v,fl=new v,pl=new v,kf=class extends Yt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Vf=class extends Yt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Zt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new fi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let d=e.clone();d.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};let x=new Bt(0,.04,.1,12);x.translate(0,.05,0);let g=new qe(.08,.08,.08);g.translate(0,.04,0);let m=new ht;m.setAttribute("position",new Ue([0,0,0,1,0,0],3));let _=new Bt(.0075,.0075,.5,3);_.translate(0,.25,0);function b(X,Y){let te=new Bn(X,.0075,3,64,Y*Math.PI*2);return te.rotateY(Math.PI/2),te.rotateX(Math.PI/2),te}function y(){let X=new ht;return X.setAttribute("position",new Ue([0,0,0,1,1,1],3)),X}let T={X:[[new de(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new de(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(x,o),[0,.5,0]],[new de(x,o),[0,-.5,0],[Math.PI,0,0]],[new de(_,o)]],Z:[[new de(x,a),[0,0,.5],[Math.PI/2,0,0]],[new de(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new mi(.1,0),u),[0,0,0]]],XY:[[new de(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new de(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Bt(.2,0,.6,4),i),[0,.3,0]],[new de(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new mi(.2,0),i)]],XY:[[new de(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new de(new mi(.01,2),s),null,null,null,"helper"]],END:[[new de(new mi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Xn(y(),s),null,null,null,"helper"]],X:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new de(b(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new de(b(.5,.5),r)]],Y:[[new de(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(b(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new de(new gi(.25,10,8),i)]],X:[[new de(new Bn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new Bn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new Bn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new Bn(.75,.1,2,24),i)]]},R={X:[[new de(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(_,r),[0,0,0],[0,0,-Math.PI/2]],[new de(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(_,o)],[new de(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(_,a),[0,0,0],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new qe(.1,.1,.1),u)]]},L={X:[[new de(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Bt(.2,0,.6,4),i),[0,.3,0]],[new de(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new qe(.2,.2,.2),i),[0,0,0]]]},B={X:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function k(X){let Y=new Yt;for(let te in X)for(let O=X[te].length;O--;){let oe=X[te][O][0].clone(),ye=X[te][O][1],ve=X[te][O][2],De=X[te][O][3],Ye=X[te][O][4];oe.name=te,oe.tag=Ye,ye&&oe.position.set(ye[0],ye[1],ye[2]),ve&&oe.rotation.set(ve[0],ve[1],ve[2]),De&&oe.scale.set(De[0],De[1],De[2]),oe.updateMatrix();let rt=oe.geometry.clone();rt.applyMatrix4(oe.matrix),oe.geometry=rt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),Y.add(oe)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(T)),this.add(this.gizmo.rotate=k(C)),this.add(this.gizmo.scale=k(R)),this.add(this.picker.translate=k(E)),this.add(this.picker.rotate=k(M)),this.add(this.picker.scale=k(L)),this.add(this.helper.translate=k(P)),this.add(this.helper.rotate=k(S)),this.add(this.helper.scale=k(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:mu;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(jt.setFromEuler(du.set(0,0,0)),o.quaternion.copy(i).multiply(jt),Math.abs(Ht.copy(ml).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(jt.setFromEuler(du.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(jt),Math.abs(Ht.copy(Tr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(jt.setFromEuler(du.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(jt),Math.abs(Ht.copy(gl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(jt.setFromEuler(du.set(0,Math.PI/2,0)),Ht.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(nx.lookAt(tx,Ht,Tr)),o.quaternion.multiply(jt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ln.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ln.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ln),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ht.copy(ml).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ht.copy(Tr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ht.copy(gl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ht.copy(gl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ht.copy(ml).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ht.copy(Tr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(fu.copy(i),Ht.copy(this.eye).applyQuaternion(jt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(nx.lookAt(this.eye,tx,Tr)),o.name==="X"&&(jt.setFromAxisAngle(ml,Math.atan2(-Ht.y,Ht.z)),jt.multiplyQuaternions(fu,jt),o.quaternion.copy(jt)),o.name==="Y"&&(jt.setFromAxisAngle(Tr,Math.atan2(Ht.x,Ht.z)),jt.multiplyQuaternions(fu,jt),o.quaternion.copy(jt)),o.name==="Z"&&(jt.setFromAxisAngle(gl,Math.atan2(Ht.y,Ht.x)),jt.multiplyQuaternions(fu,jt),o.quaternion.copy(jt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Gf=class extends de{constructor(){super(new Mn(1e5,1e5,2,2),new Zt({visible:!1,wireframe:!0,side:on,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),pu.copy(ml).applyQuaternion(t==="local"?this.worldQuaternion:mu),fl.copy(Tr).applyQuaternion(t==="local"?this.worldQuaternion:mu),pl.copy(gl).applyQuaternion(t==="local"?this.worldQuaternion:mu),Ht.copy(fl),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ht.copy(this.eye).cross(pu),Zi.copy(pu).cross(Ht);break;case"Y":Ht.copy(this.eye).cross(fl),Zi.copy(fl).cross(Ht);break;case"Z":Ht.copy(this.eye).cross(pl),Zi.copy(pl).cross(Ht);break;case"XY":Zi.copy(pl);break;case"YZ":Zi.copy(pu);break;case"XZ":Ht.copy(pl),Zi.copy(fl);break;case"XYZ":case"E":Zi.set(0,0,0);break}break;case"rotate":default:Zi.set(0,0,0)}Zi.length()===0?this.quaternion.copy(this.cameraQuaternion):(ix.lookAt(Ln.set(0,0,0),Zi,Ht),this.quaternion.setFromRotationMatrix(ix)),super.updateMatrixWorld(e)}};function sx(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function rx(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new v(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new Qt(we.degToRad(n.pitch),we.degToRad(n.yaw),we.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var ox={type:"change"},Wf={type:"start"},lx={type:"end"},xu=new Ms,ax=new En,gw=Math.cos(70*we.DEG2RAD),xn=new v,Yn=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hf=1e-6,yu=class extends hr{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new bt,this._lastTargetPosition=new v,this._quat=new bt().setFromUnitVectors(e.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xo,this._sphericalDelta=new xo,this._scale=1,this._panOffset=new v,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new v,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yw.bind(this),this._onPointerDown=xw.bind(this),this._onPointerUp=_w.bind(this),this._onContextMenu=Ew.bind(this),this._onMouseWheel=bw.bind(this),this._onKeyDown=Sw.bind(this),this._onTouchStart=ww.bind(this),this._onTouchMove=Tw.bind(this),this._onMouseDown=vw.bind(this),this._onMouseMove=Mw.bind(this),this._interceptControlDown=Aw.bind(this),this._interceptControlUp=Cw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ox),this.update(),this.state=Vt.NONE}update(e=null){let t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yn:i>Math.PI&&(i-=Yn),s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=xn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new v(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new v(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<gw?this.object.lookAt(this.target):(ax.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(ax,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hf||this._lastTargetPosition.distanceToSquared(this.target)>Hf?(this.dispatchEvent(ox),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xn.copy(s).sub(this.target);let r=xn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function xw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function yw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _w(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lx),this.state=Vt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Vt.DOLLY;break;case yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Vt.ROTATE}break;case yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Wf)}function Mw(n){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(n.preventDefault(),this.dispatchEvent(Wf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lx))}function Sw(n){this.enabled!==!1&&this._handleKeyDown(n)}function ww(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Vt.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Vt.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Wf)}function Tw(n){switch(this._trackPointer(n),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Vt.NONE}}function Ew(n){this.enabled!==!1&&n.preventDefault()}function Aw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var U=n=>document.getElementById(n),gx=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],xx=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Su=[...document.querySelectorAll(".tool")],yx="gorilla-lab-editor-draft",hs=d0(localStorage),Rw=mf(),Vn=[...new Map([...Rw,...hs.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function _x(n){let e=n??U("model-library").value;U("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Vn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Vn.some(t=>t.id===e)?U("model-library").value=e:Vn.length===1&&(U("model-library").value=Vn[0].id),U("place-model").disabled=!Vn.length}var vx=new URLSearchParams(location.search),jf=vx.get("model"),Jf="gorilla-lab-edit-map-model";_x(jf);function Ar(){return Vn.find(n=>n.id===U("model-library").value)}function Mx(){let n=Ar();if(!n)return null;let e=No(n);return ai({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:we.clamp(e.x,.2,64),h:we.clamp(e.y,.12,36),d:we.clamp(e.z,.2,64),...Sf(n),color:"#ffffff",solid:n.properties.collidable!==!1})}U("model-library").addEventListener("change",()=>{$e==="model"&&us(null),mp()});var Xf={block:ai({w:1,h:1,d:1}),ramp:ai({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:ai({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:cs({amplitude:.7,grassDensity:1.7})}),wall:ai({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},sp={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ne,Tt=-1,$e="move",Dt=null,li=null,yl=[],zs=null,bu=[];function Oi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:$e,selected:Tt,...e};bu.push(i),bu.length>100&&bu.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=lt(),e=Pr.info.render;return{version:"R42",map:{name:ne.name,pieces:ne.pieces.length},tool:$e,selected:Tt,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[nn.width,nn.height],render:{...e},events:[...bu]}};window.addEventListener("error",n=>{n.message&&Oi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Oi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Vs=[],nn=U("preview"),pt=U("plan"),yt=pt.getContext("2d");function Pw(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[U("shape-preset").value]??n.slab;return ai({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(U("shape-preset").value)?U("shape-preset").value:"box"})}var Iw=U("editor-views");function wl(){Iw.dataset.layout=U("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",U("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",U("sidebar-width").value+"px"),requestAnimationFrame(()=>{Pu(),Iu()})}for(let n of["layout-mode","view-split","sidebar-width"])U(n).addEventListener("input",wl);U("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),wl()};var Kf=U("workspace-fullscreen");Kf.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{mt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Kf.setAttribute("aria-pressed",String(n)),Kf.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{Pu(),Iu()})});U("focus-3d").onclick=()=>{U("layout-mode").value="only-3d",wl()};U("focus-plan").onclick=()=>{U("layout-mode").value="only-plan",wl()};function Dw(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(W,ce,he)=>{let N=document.createElement(W);return ce&&(N.className=ce),he!==void 0&&(N.textContent=he),N},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let W of Su){let ce=W.dataset.tool,he=W.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[ce]){let N=t("div","rail-divider");N.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[ce]],i.append(N)}W.classList.add("rail-tool"),W.title=he+" \xB7 "+(sp[ce]??""),W.setAttribute("aria-label",he),W.replaceChildren(t("span","rail-glyph",s[ce]??"\u25A1"),t("span","rail-caption",he==="Redimensionner"?"\xC9chelle":he==="S\xE9lectionner"?"S\xE9lect.":he==="D\xE9placer"?"D\xE9placer":he==="Atelier"?"Mod\xE8le":he)),i.append(W)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=U("shape-preset").closest("label"),h=U("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let f=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");f.id="model-place-action",f.type="button",o.append(f);let d=t("button","delete-library-model","Supprimer de la biblioth\xE8que");d.type="button",d.id="delete-library-model",d.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(d),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=U("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let b=t("span","active-selection","Aucune s\xE9lection");b.id="active-selection",_.after(b);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let T=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let W of E){let ce=U(W);ce&&T.append(ce.closest("label"))}y.append(T),g.append(y);let P=W=>{if(W==="close"){o.hidden=!0;return}let ce=W==="model";o.hidden=!1,o.dataset.mode=W,a.textContent=ce?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!ce,c.hidden=ce,f.hidden=!ce,d.hidden=!ce,u&&(u.hidden=!ce),p.textContent=ce?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!ce,x.textContent=ce?Vn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let he=Ar();f.disabled=!he,f.textContent=he?"\u2B21 Placer \xAB "+he.name+" \xBB":"Aucun mod\xE8le \xE0 placer",d.disabled=!he||!hs.models.some(se=>se.id===he.id),u&&(u.href="./model-editor.html"+(he?he.assetId&&he.id==="custom-model-game-"+he.assetId?"?asset="+encodeURIComponent(he.assetId):"?model="+encodeURIComponent(he.id):"")),U(ce?"model-library":"shape-preset").focus({preventScroll:!0})};f.onclick=()=>{Ar()&&(zi("model"),P("close"),nn.focus({preventScroll:!0}),mt("Clique dans la sc\xE8ne pour placer \xAB "+Ar().name+" \xBB."))},d.onclick=()=>{let W=Ar();if(!(!W||!hs.models.some(ce=>ce.id===W.id))&&confirm("Supprimer d\xE9finitivement \xAB "+W.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let ce=br({...hs,models:hs.models.filter(N=>N.id!==W.id),avatarId:hs.avatarId===W.id?null:hs.avatarId});localStorage.setItem(bf,JSON.stringify(ce)),Object.assign(hs,ce);let he=Vn.findIndex(N=>N.id===W.id);he>=0&&Vn.splice(he,1),_x(),$e==="model"&&!Vn.length&&zi("move"),us(null),mp(),P("model"),mt("\xAB "+W.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(ce){mt("Suppression impossible : "+(ce.message||"stockage local indisponible"))}},U("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&P("model")});for(let W of["model","preset"])Su.find(he=>he.dataset.tool===W)?.addEventListener("click",()=>P(W));window.addEventListener("pointerdown",W=>{!o.hidden&&!o.contains(W.target)&&!W.target.closest(".rail-tool")&&P("close")}),window.addEventListener("keydown",W=>{W.key==="Escape"&&P("close")});let C=t("section","outliner");C.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),C.append(S);let M=e.querySelector("#pieces").closest(".inspector-section");M.id="outline-content",C.append(M);let R=t("section","property-pane"),L=t("nav","inspector-tabs");L.setAttribute("aria-label","Propri\xE9t\xE9s");let B=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[W,ce]of B){let he=t("button","inspector-tab",ce);he.type="button",he.dataset.tab=W,he.setAttribute("aria-pressed",String(W==="object")),L.append(he)}let k=t("div","property-content");k.id="property-content";let X=U("piece-inspector").closest(".inspector-section");X.id="object-section";let Y=X.querySelector("#surface").closest("details");Y.id="surface-controls";let te=t("section");te.id="collision-options",te.append(t("h3","","Collisions de la pi\xE8ce")),te.append(X.querySelector("#p-solid").closest("label"),U("debug-controls"));let O=t("section");O.id="behavior-options";let oe=t("div","fields");for(let W of["surface","p-grip","p-gravity","p-bounce"])oe.append(Y.querySelector("#"+W).closest("label"));O.append(t("h3","","Propri\xE9t\xE9s physiques")),O.append(oe,X.querySelector("#model-object-controls"));let ye=t("section");ye.id="publish-options";for(let[W,ce,he]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let N=t("div","piece-actions"),se=t("button","",ce);se.type="button",se.addEventListener("click",()=>U(W).click()),N.append(se),ye.append(t("h3","",he),N)}k.append(X,te,O,ye);let ve=t("section","scene-options");ve.id="scene-options",ve.append(t("h2","","Param\xE8tres de carte"));let De=U("map-name").closest("label"),Ye=U("map-world-size").closest(".fields"),rt=U("draft-status");ve.append(De,Ye,rt);let et=[...e.children].filter(W=>W.tagName==="DETAILS");for(let W of et)ve.append(W);k.append(ve),R.append(L,k),e.replaceChildren(C,R);let Z=W=>{let ce=ne?.pieces?.[Tt];["terrain","props"].includes(W)&&!ce?.terrain&&(W="object"),["material","behavior"].includes(W)&&!ce&&(W="object"),e.dataset.tab=W;for(let he of L.querySelectorAll("button"))he.setAttribute("aria-pressed",String(he.dataset.tab===W)),he.disabled=["terrain","props"].includes(he.dataset.tab)&&!ce?.terrain;W==="terrain"&&(U("terrain-controls").open=!0),W==="material"&&(Y.open=!0),k.scrollTop=0};for(let W of L.querySelectorAll("button"))W.addEventListener("click",()=>Z(W.dataset.tab));window.setInspectorTab=Z,Z("object")}Dw();var Ot={scale:10,cx:0,cz:-6,width:30,height:40},Pr=new Fh({canvas:nn,antialias:!0});Pr.setPixelRatio(Math.min(devicePixelRatio,1.5));nn.addEventListener("webglcontextlost",()=>Oi("contexte WebGL perdu",{},"warn"));var Et=new Tn(52,1,.1,640);Et.position.set(16,15,19);var zt=new yu(Et,nn);zt.target.set(0,0,-5);zt.mouseButtons.LEFT=null;zt.mouseButtons.RIGHT=yi.ROTATE;zt.mouseButtons.MIDDLE=yi.PAN;zt.maxDistance=580;zt.maxPolarAngle=Math.PI-.035;var hn=new ao,bx=new ke("#8fb6c6");hn.background=bx;var Sx=new or("#f0f5ff","#8e775c",2.6);hn.add(Sx);var rp=new lr("#fff1d2",1.8);rp.position.set(-9,18,6);hn.add(rp);var ji=new ao;ji.fog=new Qs("#a6d4ea",55,135);var Un=Og(ji,Pr),Lw=_g(Pr);Un.probe.userData.editorAssetId="chrome-sphere";var yR=zg(ji,Un.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),Uw=new Map(mf().map(n=>[n.assetId,n]));function cx(n,e,t=null,i=null){let s=structuredClone(t??Uw.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=al(s),o=r.getSize(new v),a=r.getCenter(new v);return ai({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var op=()=>{let n=z0(Un.boxes),e=Un.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let f=t+u%(o+1)/o*a,d=s+Math.floor(u/(o+1))/o*l;return e.height(f,d)});n.pieces.push(ai({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:cs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(Ff()),Xg((t,i)=>{let s=ff[t];s&&n.pieces.push(cx(s,i))}),n.pieces.push(cx("chrome-sphere",new v(Ps.x,Ps.y,Ps.z))),gn(n)};ne=op();var ap=new de(new qe(1.8,2.03,.1),new dn({color:"#8daebc",metalness:.9,roughness:.12}));ap.position.set(Rs.x,Rs.y,Rs.z);ap.userData.editorAssetId="lab-mirror";ji.add(ap);var Fw=Un.boxes.filter(n=>n.half&&n.mesh?.isObject3D);Fw.forEach(n=>n.mesh.removeFromParent());var wu=new _n;wu.add(...ji.children);hn.add(wu,...Un.lighting);var ks=Un.boxes.find(n=>n.heightfield).mesh;ks.userData.editorAssetId="lab-hill";Un.visual(7,0,7,!0,!0,512,!1);var lp=[...document.querySelectorAll("[data-env]")],Vo=U("environment-status"),Wo=new Va(60,60,"#d7e2e5","#5e7b8a");Wo.material.transparent=!0;Wo.material.opacity=.35;hn.add(Wo);var At=new _n;hn.add(At);var Qe=new gu(Et,nn);Qe.setSize(.9);Qe.setRotationSnap(we.degToRad(5));Qe.enabled=!1;hn.add(Qe.getHelper());var cp=new Set(["translate","rotate","scale"]),Gs=null,Zn=null,hp=!1,_l=null,_u=!1,wx=()=>Number(U("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...U(n).options].some(t=>t.value===e)&&(U(n).value=e)}catch{}U(n).onchange=()=>{Zn=null;try{localStorage.setItem("gorilla-lab-"+n,U(n).value)}catch{}}}var Cr=new Map;try{U("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}U("magnet").onchange=()=>{Zn=null,Cr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",U("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{hp=e.altKey});window.addEventListener("blur",()=>{hp=!1,Zn=null});function Tx(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/bl())*bl();if(i||!U("magnet").checked||!n.solid||n.terrain)return Zn=null,s;let r=wx(),o=U("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new Qt(...[p.pitch,p.yaw,p.roll??0].map(we.degToRad),"YXZ"),g=new Mt().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of ne.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,b=m.flatMap(y=>t.includes(y)&&_(m.find(T=>T!==y))?[-1,1].flatMap(T=>[-1,1].map(E=>{let P=p[y]+T*x[y]-E*c[y];return{key:y,value:P,distance:Math.abs(e[y]-P)}})):[]).sort((y,T)=>y.distance-T.distance)[0];if(!(o?!b||b.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let T=p[g]+y*(c[g]+x[g]),E=ne.pieces.indexOf(p)+":"+g+":"+y;h.push({key:E,axis:g,value:T,edge:o?b:null,distance:Math.max(Math.abs(T-e[g]),o?b.distance:0)})}}}let u=h.find(p=>p.key===Zn),f=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return f(u),s;Zn&&(Cr.set(Zn,(Cr.get(Zn)??0)+1),Zn=null);let d=h.filter(p=>p.distance<=r&&(Cr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(d)f(d),Zn=d.key;else for(let p of h)p.distance<=r&&(Cr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var vl=new qe(1,1,1),Nw=lf(),Bw=new xi,Tu=.025,Ow=new Ss(.24,.36,40).rotateX(-Math.PI/2),Ex=new Zt({color:"#ffcd63",side:on}),jn=new de(Ow,Ex),Ax=new de(new Mn(.12,.2).rotateX(-Math.PI/2),Ex);Ax.position.set(0,0,-.39);jn.add(Ax);hn.add(jn);var Rr=new de(vl,new Zt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Go=new de(new gi(.055,10,8),new Zt({color:"#ffc85a",depthTest:!1}));Go.visible=!1;Go.renderOrder=20;hn.add(Go);var Ml=new de(jn.geometry,new Zt({color:"#ffe084",side:on,opacity:.65,transparent:!0,depthWrite:!1}));Rr.visible=Ml.visible=!1;hn.add(Rr,Ml);var Hs=new cr,Ru=new v(0,1,0),hx=new En(Ru,0),zw=new ct,Bi=null,qf=!1,xl=60,ux=-1/0;function sn(){qf||(qf=!0,requestAnimationFrame(n=>{qf=!1;let e=n-ux;ux=n,e<125&&(xl=we.lerp(xl,1e3/Math.max(10,e),.17));let t=Et.position.distanceTo(zt.target),i=Math.max(640,ne.worldSize*2,t+ne.worldSize*2),s=Math.max(140,t+ne.worldSize*.35),r=U("adaptive-editor-view").checked?we.smoothstep(xl,24,50):1,o=we.lerp(s,i,r);Et.far=Math.max(s,we.lerp(Et.far,o,.2)),Et.updateProjectionMatrix(),Un.centerSky(Et.position,Et.far);let a=performance.now();Lw.render(hn,Et,Un.sunDisk.visible?Un.bloomAmount:0)||Pr.render(hn,Et);let l=performance.now()-a;l>25&&(xl=Math.min(xl,1e3/l)),Math.abs(Et.far-o)>3&&sn(),Gx()}))}function Pu(){let n=nn.clientWidth||1,e=nn.clientHeight||1;Pr.setSize(n,e,!1),Et.aspect=n/e,Et.updateProjectionMatrix(),sn()}function Iu(){let n=Math.max(1,pt.clientWidth),e=Math.max(1,pt.clientHeight);n===pt.width&&e===pt.height||(pt.width=n,pt.height=e,up(),Mi())}new ResizeObserver(Pu).observe(nn);new ResizeObserver(Iu).observe(pt);zt.addEventListener("change",sn);zt.addEventListener("start",()=>us(null));function up(){Ot.scale=Math.min(pt.width/Ot.width,pt.height/Ot.height)}function Eu(n,e){return[pt.width/2+(n-Ot.cx)*Ot.scale,pt.height/2+(e-Ot.cz)*Ot.scale]}function $f(n){let e=pt.getBoundingClientRect();return{x:((n.clientX-e.left)*pt.width/e.width-pt.width/2)/Ot.scale+Ot.cx,z:((n.clientY-e.top)*pt.height/e.height-pt.height/2)/Ot.scale+Ot.cz}}function dx(n,e,t,i,s){let[r,o]=Eu(n.x,n.z),a=we.degToRad(n.pitch),l=we.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);yt.save(),yt.translate(r,o),yt.rotate(-we.degToRad(n.yaw));let u=c*Ot.scale,f=h*Ot.scale;yt.globalAlpha=s,yt.fillStyle=e,yt.fillRect(-u/2,-f/2,u,f),yt.globalAlpha=1,yt.strokeStyle=t,yt.lineWidth=i,yt.strokeRect(-u/2,-f/2,u,f),yt.restore()}function fx(n,e){let[t,i]=Eu(n.x,n.z);yt.save(),yt.translate(t,i),yt.rotate(we.degToRad(-n.yaw)),yt.strokeStyle=e?"#fff0bb":"#ffd16e",yt.lineWidth=2,yt.beginPath(),yt.arc(0,0,6,0,Math.PI*2),yt.moveTo(0,-6),yt.lineTo(0,-11),yt.stroke(),yt.restore()}function Mi(){yt.fillStyle="#192e3a",yt.fillRect(0,0,pt.width,pt.height),yt.strokeStyle="#37505f",yt.lineWidth=1;let n=Ot.scale<1?25:Ot.scale<4?10:Ot.scale<12?5:1,e=(ne.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Eu(r,r);o>=0&&o<=pt.width&&(yt.beginPath(),yt.moveTo(o,0),yt.lineTo(o,pt.height),yt.stroke()),a>=0&&a<=pt.height&&(yt.beginPath(),yt.moveTo(0,a),yt.lineTo(pt.width,a),yt.stroke())}let[t,i]=Eu(-e,-e);yt.strokeStyle="#ffda9077",yt.lineWidth=2,yt.strokeRect(t,i,e*2*Ot.scale,e*2*Ot.scale);let s=ne.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Uf[r.material]:r.color);dx(r,a,o===Tt?"#ffe095":"#a4bac7",o===Tt?2:1,r.solid?.86:.38)}fx(ne.spawn,!1),li&&($e==="spawn"?fx(li,!0):dx(li,"#8ee7fc","#afefff",2,.45))}function Au(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==Rr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(we.degToRad(e.pitch),we.degToRad(e.yaw),we.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function Cx(){Bi&&(hn.remove(Bi),Bi.geometry.dispose(),Bi.material.dispose());let n=At.children[Tt];Bi=n?new yo(n,"#ffdf88"):null,Bi&&hn.add(Bi),Qf()}function Qf(){if($e==="spawn"){Qe.enabled=!0,Qe.setMode("translate"),Qe.setSpace("world"),Qe.setTranslationSnap(null),Qe.setRotationSnap(null),Qe.showX=Qe.showY=Qe.showZ=!0,Qe.attach(jn);return}let n=At.children[Tt],e=lt()?.terrain,t=cp.has($e)&&!!n;if(Qe.enabled=t,!t){Qe.detach();return}Qe.setMode($e),Qe.setSpace($e==="translate"?"world":"local"),Qe.setTranslationSnap(null);let i=!!(e&&$e==="rotate");Qe.setRotationSnap(i?Math.PI/2:null),Qe.showX=Qe.showZ=!i,Qe.showY=!(e&&$e==="scale"),Qe.attach(n),U("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":sp[$e]}var Ho=!1;function Rx(){if($e!=="scale")return;let n=lt(),e=Gs?.map.pieces[Tt],t=Qe.object;if(!n||!e||!t)return;let i=rx(e,n,Ho,Gs?.scaleSides),s=(ne.worldSize??240)/2;n.x=we.clamp(i.x,-s,s),n.y=we.clamp(i.y,-oi,oi),n.z=we.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),Bi?.update();for(let r of["x","y","z"])U("p-"+r).value=n[r].toFixed(2);Mi(),sn()}function Px(n){let e=Ho;Ho=n.ctrlKey,e!==Ho&&Qe.dragging&&Rx()}for(let n of["keydown","keyup"])window.addEventListener(n,Px);nn.addEventListener("pointermove",Px,{capture:!0});Qe.addEventListener("change",sn);Qe.addEventListener("mouseDown",()=>{let n=lt();if(Zn=null,n||Qe.object===jn){let e=$e==="scale"?sx(Qe.axis,Qe.pointStart,Qe.worldQuaternionStart):void 0;Gs={map:structuredClone(ne),selected:Tt,scaleSides:e},Oi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Qe.axis,scaleSides:e,terrain:!!n?.terrain})}Ho=!!(Ho||window.event?.ctrlKey)});Qe.addEventListener("objectChange",()=>{let n=lt(),e=Qe.object,t=Gs?.map.pieces[Tt];if(e===jn&&Gs){let s=(ne.worldSize??240)/2,r=we.clamp;ne.spawn.x=r(jn.position.x,-s,s),ne.spawn.y=r(jn.position.y-Tu,-oi,oi),ne.spawn.z=r(jn.position.z,-s,s),jn.position.set(ne.spawn.x,ne.spawn.y+Tu,ne.spawn.z);for(let o of["x","y","z"])U("spawn-"+o).value=ne.spawn[o].toFixed(2);Mi();return}if(!n||!e||!t)return;let i=we.clamp;if($e==="translate"){let s=["x","y","z"].filter(a=>(Qe.axis??"XYZ").includes(a.toUpperCase())),r=Tx(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,hp),o=(ne.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-oi,oi),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else $e==="rotate"?(n.pitch=we.radToDeg(e.rotation.x),n.yaw=we.radToDeg(e.rotation.y),n.roll=we.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=Oo(n.yaw),e.rotation.set(0,we.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,n.terrain?hu:Bs),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,n.terrain?hu:Bs),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),Rx());e.updateMatrixWorld(!0),Bi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])U("p-"+s).value=Number(n[s]??0).toFixed(2);Mi(),sn()});Qe.addEventListener("dragging-changed",({value:n})=>{if(zt.enabled=!n,n||!Gs)return;let e=Gs;Gs=null;let t=Qe.object===jn,i=t?e.map.spawn:e.map.pieces[Tt],s=t?ne.spawn:lt();if(JSON.stringify(i)===JSON.stringify(s)){Oi("transformation sans changement",{name:s?.name,axis:Qe.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Oi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Vs.length>=35&&Vs.shift(),Vs.push(e),ne=gn(ne),Rt(),mt("Transformation appliqu\xE9e.")});nn.addEventListener("pointerup",()=>{Qe.dragging||(zt.enabled=!0)});nn.addEventListener("pointercancel",()=>{Qe.dragging&&Qe.pointerUp(null),zt.enabled=!0});function kw(){Qe.detach();for(let t of[...At.children])At.remove(t),t.geometry!==vl&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&N0(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),su(t.material);wu.visible=!!ne.arenaBase;let n=new Set(ne.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(ne.pieces.map(t=>t.sceneryId).filter(Boolean));wu.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=W0(ne,i,n,e))}),Lx();for(let t of ne.pieces){if(t.model){let l=new de(ru(t.model,new v(t.w,t.h,t.d)),iu(t.model));l.castShadow=l.receiveShadow=!0;let c=new de(new qe(1,1,1),new Zt({colorWrite:!1,depthWrite:!1,side:on}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=At.children.length,At.add(l),Au(l,t);continue}let i=[10,11,12].includes(t.material),s=new ii({color:new ke(Uf[t.material]).multiply(new ke(t.color)),side:t.terrain?on:ei,transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(ne.arenaBase&&!t.texture){let l=Un.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=Bw.load(t.texture,sn),s.map.colorSpace=vt,s.map.wrapS=s.map.wrapT=An,s.color.set(t.color)),t.terrain&&(t.terrain.projection==="regolith"&&(s.flatShading=!1),L0(s,t));let r=t.terrain?performance.now():0,o=t.terrain?U0(t):t.primitive==="ramp"?lf(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?Ag(t.primitive):t.texture||ne.arenaBase?Gh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):vl;o!==vl&&Eg(o,t);let a=new de(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=F0(t);l&&(a.add(l),a.userData.vegetation=l)}At.add(a),Au(a,t)}Qw(),jn.position.set(ne.spawn.x,ne.spawn.y+Tu,ne.spawn.z),jn.rotation.y=we.degToRad(ne.spawn.yaw),Hx(),Cx()}function lt(){return ne.pieces[Tt]}function mt(n){U("editor-note").textContent=n}function Ct(){Vs.length>=35&&Vs.shift(),Vs.push({map:structuredClone(ne),selected:Tt}),U("undo").disabled=!1}var Yf=0;async function Zo(){let n=++Yf;try{return await rf(yx,JSON.stringify(ne)),n===Yf&&(U("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===Yf&&(U("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}U("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=lt(),i=Tt;if(!(!t?.model||!await Zo()))try{sessionStorage.setItem(Jf,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),mt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function Vw(){let n=vx.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Jf)),sessionStorage.removeItem(Jf)}catch{return}let t=ne.pieces[e?.index],i=hs.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){mt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}Tt=e.index;let o=No(t.model),a=No(i),l=(u,f,d,p)=>we.clamp(u*d/Math.max(f,.001),.05,p),c={w:l(t.w,o.x,a.x,Bs),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Bs)},h=ai({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(Ct(),ne.pieces[Tt]=h),mt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var px=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Ix(){let n=px(U("piece-search").value.trim()),e=[];ne.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";px(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===Tt))}),U("pieces").replaceChildren(...e),U("pieces").value=String(Tt),e.length||U("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(U("pieces").options[0].disabled=!0),U("count").textContent=n?e.length+" sur "+ne.pieces.length:ne.pieces.length+" / "+zo}function Dx(){Ix();let n=lt();U("piece-inspector").hidden=!n,U("selection-help").hidden=!!n,U("focus-piece").disabled=!n,U("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";U("model-object-controls").hidden=!e,U("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=U("model-asset-edit-link"),i=n?.model&&Vn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(U("model-grabbable").checked=n.model.properties?.grabbable!==!1,U("model-frozen").checked=n.model.properties?.frozen===!0,U("model-collidable").checked=n.model.properties?.collidable!==!1,U("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of gx){let c=U("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])U(l).disabled=!n;U("delete").disabled=!n,U("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",U("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",U("texture-clear").disabled=!n?.texture,U("texture-paint").disabled=!n||!!n.model,U("flight-controls").hidden=!n||n.solid||!!n.terrain||n.model?.kind==="prop";for(let[l,c]of Object.entries(np))U("flight-"+l).value=n?.flight?.[l]??c;let s=yl[Tt],r=U("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=ip(s));let o=n?.terrain;U("terrain-grassTexture-paint").disabled=!o;for(let l of xx){let c=U("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(U("uv-reset").disabled=!n||!!n?.model,U("terrain-controls").hidden=U("terrain-props").hidden=U("terrain-texture-density-fields").hidden=!o,U("texture-scale-label").hidden=!!o,o){U("terrain-triangulation").value=o.triangulation??"regular",U("terrain-projection").value=o.projection??"flat";for(let m of Ox)U("terrain-"+m).value=o[m]??0;let l=o.reliefArea??zx(n);U("terrain-relief-local").checked=!!o.reliefArea,U("terrain-relief-fields").hidden=!o.reliefArea;for(let m of["x","z","radius","blend"])U("terrain-relief-"+m).value=l[m];let c=At.children[Tt]?.userData.generationMs;U("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,f=At.children[Tt]?.geometry.index.count/3||u,d=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});U("terrain-cell-size").textContent=d.format(n.w/o.detail)+" \xD7 "+d.format(n.d/o.detail)+" m de pas moyen \xB7 "+d.format(f)+" triangles au total \xB7 "+d.format(u/h)+" triangles/m\xB2 au sol",U("terrain-texture-effective").textContent=d.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2 \xE0 l\u2019\xE9cran avec l\u2019\xE9chelle enregistr\xE9e",Kw(n);let p=U("terrain-neighbor"),x=p.value,g=ne.pieces.flatMap((m,_)=>Df(n,m)?[new Option(m.name,String(_))]:[]);p.replaceChildren(...g.length?g:[new Option("Aucun bord \xE0 moins de 25 cm","")]),g.some(m=>m.value===x)&&(p.value=x),p.disabled=U("terrain-stitch").disabled=!g.length,U("p-pitch").disabled=U("p-roll").disabled=!0}U("rotate").disabled=!n,U("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",U("p-yaw").step=o?"90":"1",U("surface").value="",U("undo").disabled=Vs.length===0,U("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function ep(){let n=!!(ne.arenaBase||ne.environment);rp.visible=Sx.visible=!n;for(let t of Un.lighting)t.visible=n;let{sunDisk:e}=Un;e.visible=n&&(ne.environment?.sunPower??3)>0,hn.background=n?ji.background:bx,hn.backgroundRotation.copy(ji.backgroundRotation),hn.fog=n&&U("environment-fog-preview").checked?ji.fog:null,hn.environment=n?ji.environment:null,hn.environmentIntensity=ji.environmentIntensity,sn()}function Lx(){let n=ne.environment??null,e=n??Di(0);for(let t of lp){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}Vo.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",Un.setEnvironment(n,ep),ep()}function Cu(n){let e=Vh(n);Ct(),e?ne.environment=e:delete ne.environment,Lx(),Zo()}var Gw=lp.find(n=>n.dataset.env==="preset");Gw.replaceChildren(...vg.map((n,e)=>new Option(n,e)));for(let n of lp)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){Cu(Di(Number(n.value)));return}let t=ne.environment??Di(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,Vo.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;Cu({...t,[e]:i})};U("environment-reset").onclick=()=>Cu(null);U("environment-aim-sun").onclick=()=>{if(!(ne.environment??Di(0)).sunPower){Vo.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=Un.sunDirection();zt.target.copy(Et.position).addScaledVector(e,8),zt.update(),sn()};U("environment-fog-preview").onchange=ep;U("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=ne;if(e.value="",!t)return;if(t.size>kh){Vo.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(ne!==i)return;let r=new Image;r.onload=()=>{if(ne===i){if(r.width!==r.height*2){Vo.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}Cu({...ne.environment??Di(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{ne===i&&(Vo.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function Rt(){U("map-name").value=ne.name,U("map-world-size").value=ne.worldSize??240,U("map-boundary").value=ne.boundary?.diameter??0,U("map-ceiling").value=ne.boundary?.ceiling??128,Et.far=Math.max(640,ne.worldSize*2),Et.updateProjectionMatrix(),zt.maxDistance=Math.max(580,ne.worldSize*1.6);for(let n of["x","y","z","yaw"])U("spawn-"+n).value=ne.spawn[n];kw(),Dx(),Mi(),sn(),Zo()}function Xo(n){Tt!==n&&(Tt=n,Oi("s\xE9lection",{name:lt()?.name,terrain:!!lt()?.terrain}),Zn=null,Cr.clear(),Dx(),Cx(),Mi(),sn())}function dp(n){if(ne.pieces.length>=zo)return mt("Limite de pi\xE8ces atteinte.");Ct(),ne.pieces.push(n),Tt=ne.pieces.length-1,Rt(),mt(n.name+" ajout\xE9 \xE0 la map.")}function fp(){if(!lt())return;let n=lt().name;Ct(),ne.pieces.splice(Tt,1),Tt=Math.min(Tt,ne.pieces.length-1),Rt(),mt(n+" retir\xE9 de la map.")}function pp(){let n=lt();if(!n)return;let e=we.clamp(n.x+n.w+bl(),-120,120);dp({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function Hw(){let n=lt();if(!n)return;Ct();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Oi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),Rt()}function Ux(){let n=Vs.pop();n&&(ne=n.map,Tt=n.selected,us(null),Rt(),mt("Derni\xE8re modification annul\xE9e."))}function mp(){let n=sp[$e]??"";if($e!=="model"||!Ar()){U("tool-help").textContent=n;return}let e=Mx(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);U("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function zi(n){$e!==n&&Oi("changement d\u2019outil",{ancien:$e,nouveau:n,name:lt()?.name}),$e=n,zt.mouseButtons.LEFT=$e==="view"?yi.ROTATE:null,Qf(),sn();for(let e of Su)e.setAttribute("aria-pressed",String(e.dataset.tool===$e));for(let e of[nn,pt])e.dataset.tool=$e,e.removeAttribute("data-hit");mp(),Qf(),sn(),us(null)}function Ir(){let n=new cn().setFromObject(At);n.expandByPoint(jn.position);let e=n.getCenter(new v),t=n.getSize(new v);Ot={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ne.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ne.worldSize??240,500))},up();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));Wo.scale.setScalar(i),Wo.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Et.position.clone().sub(zt.target).normalize(),r=new v().crossVectors(Ru,s).normalize(),o=new v().crossVectors(s,r),a=Math.tan(we.degToRad(Et.fov/2))*.87,l=a*Et.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let f of[n.min.z,n.max.z]){let d=new v(h,u,f).sub(e),p=Math.max(Math.abs(d.dot(r))/l,Math.abs(d.dot(o))/a);c=Math.max(c,p+d.dot(s))}c=Math.min(c,zt.maxDistance),zt.target.copy(e),Et.position.copy(e).addScaledVector(s,c),zt.update(),Et.updateMatrixWorld(),Mi(),sn()}function gp(n,e){Ct(),ne=n,Zn=null,Cr.clear(),Tt=-1,U("piece-search").value="",zi("move"),Rt(),Ir(),mt(e)}function bl(){return Number(U("snap").value)}function vu(n){let e=bl(),t=(ne.worldSize??240)/2;return we.clamp(Math.round(n/e)*e,-t,t)}function xp(n,e){if(n===pt){let t=$f(e);Hs.set(new v(t.x,80,t.z),new v(0,-1,0))}else{let t=nn.getBoundingClientRect();Et.updateMatrixWorld(),Hs.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Et)}}function tp(n){return hx.constant=-n,Hs.ray.intersectPlane(hx,new v)}function Ww(n){let e=n;for(;e&&e.parent!==At;)e=e.parent;return e?.parent===At?e:null}function qo(n,e){xp(n,e);let t=ks.visible&&ne.arenaBase?[...At.children,ks]:At.children,i=Hs.intersectObjects(t,!0);for(let s of i){if(s.object===ks)return s;let r=Ww(s.object);if(r)return{...s,object:r}}return null}function Fx(n,e,t,i=null){let s=i?[i]:At.children,r=0;for(let a of s){a.geometry.boundingBox||a.geometry.computeBoundingBox();let l=new cn().copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld).max.y;r=Math.max(r,l)}ks.visible&&ne.arenaBase&&(r=Math.max(r,80)),Hs.set(new v(n,r+1,e),new v(0,-1,0));let o=i?Hs.intersectObject(i,!1)[0]:Hs.intersectObjects(ks.visible&&ne.arenaBase?[...At.children,ks]:At.children,!1).find(a=>a.object===ks||ne.pieces[At.children.indexOf(a.object)]?.solid);return!o||Math.abs(o.point.y+.08)>oi?null:{x:n,y:o.point.y+.08,z:e,yaw:t}}function Nx(n,e){_l=null,_u=!1;let t=qo(n,e);if($e==="spawn"){if(!t)return null;let h=vu(t.point.x),u=vu(t.point.z);return Fx(h,u,ne.spawn.yaw)}if($e==="terrain"){let h=t?.point??tp(0);return h?{...Xf.terrain,terrain:cs(Xf.terrain.terrain),x:vu(h.x),y:h.y,z:vu(h.z)}:null}if($e==="sculpt"||$e==="model"&&!Ar())return null;let i=t?.point??tp(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(zw.getNormalMatrix(t.object.matrixWorld)):Ru,r=t&&Xw(t),o=wx();r&&r.distance<=o*2&&(_l=r.point,_u=U("magnet").checked&&!e.altKey&&U("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=_u||e.altKey?1e-6:bl(),l=$e==="model"?Mx():$e==="preset"?Pw():Xf[$e],c=V0(_u?_l:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ne.worldSize/2?c:null}function Xw(n){let e=n.object,t=ne.pieces[At.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function us(n){!n&&!li||(li=n,Go.visible=!!(li&&_l),Go.visible&&Go.position.copy(_l),Ml.visible=!!(li&&$e==="spawn"),Rr.visible=!!(li&&$e!=="spawn"),Ml.visible&&Ml.position.set(li.x,li.y+Tu,li.z),Rr.visible&&(Rr.geometry=li.primitive==="ramp"?Nw:vl,Au(Rr,li)),Mi(),sn())}function qw(n,e){let t=Nx(n,e);if(!t){mt($e==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if($e==="spawn")Ct(),ne.spawn=t,zi("move"),Rt(),mt("Point de d\xE9part d\xE9plac\xE9.");else{let i=$e==="model";us(null),dp(t),i&&(zi("move"),mt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function Yw(n,e){if($e==="view"||e.button!==0||!e.isPrimary||Dt||Qe.dragging)return;if($e==="spawn"||cp.has($e)){if(n===nn&&Qe.enabled){let r=nn.getBoundingClientRect();if(Qe.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),Qe.axis){zt.enabled=!1;return}}if($e!=="spawn"){e.stopImmediatePropagation();let r=qo(n,e);Xo(r?At.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:$e};if(Dt=t,Zn=null,$e==="sculpt"){Vx(n,e);return}if($e!=="move")return;let i=qo(n,e);Xo(i?At.children.indexOf(i.object):-1);let s=lt();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function Zw(n,e){if($e==="view"||cp.has($e)||Qe.dragging)return;if(!Dt){$e==="move"?n.toggleAttribute("data-hit",!!qo(n,e)):us(Nx(n,e));return}if($e==="sculpt"&&Dt.id===e.pointerId&&Dt.canvas===n){Math.hypot(e.clientX-Dt.clientX,e.clientY-Dt.clientY)>=7&&(Vx(n,e),Dt.clientX=e.clientX,Dt.clientY=e.clientY);return}if(Dt.id!==e.pointerId||Dt.canvas!==n||Dt.height===void 0||!lt()||Math.hypot(e.clientX-Dt.clientX,e.clientY-Dt.clientY)<4&&!Dt.recorded)return;xp(n,e);let i=tp(Dt.height);if(!i)return;let s=lt(),r=Tx(s,{x:i.x-Dt.dx,y:s.y,z:i.z-Dt.dz},["x","z"],e.altKey),o=(ne.worldSize??240)/2,a=we.clamp(r.x,-o,o),l=we.clamp(r.z,-o,o);a===s.x&&l===s.z||(Dt.recorded||(Ct(),Dt.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,Au(At.children[Tt],s),Bi?.update(),U("p-x").value=a,U("p-z").value=l,Mi(),sn())}function Zf(n,e,t){if(!Dt||Dt.canvas!==n||Dt.id!==e.pointerId)return;let i=Dt;if(Dt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Rt(),mt("Relief modifi\xE9."));return}i.recorded&&(Zo(),mt(lt().name+" d\xE9plac\xE9.")),t&&$e===i.tool&&$e!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&qw(n,e)}var vi=null,Du=!1,Mu=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(Du=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(Du=!1)});window.addEventListener("blur",()=>{vi=null,Du=!1});pt.addEventListener("pointerdown",n=>{n.button!==1&&!(Du&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),vi={id:n.pointerId,x:n.clientX,y:n.clientY},pt.setPointerCapture(n.pointerId),pt.style.cursor="grabbing")},{capture:!0});pt.addEventListener("pointermove",n=>{!vi||vi.id!==n.pointerId||(n.stopImmediatePropagation(),Ot.cx-=(n.clientX-vi.x)/Ot.scale,Ot.cz-=(n.clientY-vi.y)/Ot.scale,vi.x=n.clientX,vi.y=n.clientY,Mi())},{capture:!0});function Bx(n){!vi||vi.id!==n.pointerId||(vi=null,pt.style.cursor="",pt.hasPointerCapture(n.pointerId)&&pt.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}pt.addEventListener("pointerup",Bx,{capture:!0});pt.addEventListener("pointercancel",Bx,{capture:!0});function yp(n,e){let t=pt.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=$f({clientX:i,clientY:s}),o=we.clamp(Ot.width/n,.75,4096),a=o/Ot.width;Ot.width=o,Ot.height*=a,up();let l=$f({clientX:i,clientY:s});Ot.cx+=r.x-l.x,Ot.cz+=r.z-l.z,Mi()}pt.addEventListener("wheel",n=>{n.preventDefault(),yp(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});U("plan-zoom-in").onclick=()=>yp(1.25);U("plan-zoom-out").onclick=()=>yp(.8);U("plan-fit").onclick=Ir;var Ji=U("context-actions"),Sl=!1;function Yo(){Ji.hidden=!0}for(let n of[nn,pt])n.addEventListener("pointerdown",e=>{e.button===2?Mu={canvas:n,x:e.clientX,y:e.clientY}:Yo()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Sl){Sl=!1;return}if(Mu?.canvas!==n||Math.hypot(e.clientX-Mu.x,e.clientY-Mu.y)>6)return;let t=qo(n,e),i=t?At.children.indexOf(t.object):-1;if(i<0){Yo();return}Xo(i),U("context-title").textContent=lt()?.name??"Pi\xE8ce",Ji.querySelector('[data-context-action="delete"]').textContent=lt()?.model?"Retirer de la carte":"Supprimer",Ji.hidden=!1;let s=195,r=285;Ji.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Ji.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Ji.hidden||Ji.contains(n.target)||(Sl=n.button===2,Yo())},{capture:!0});document.addEventListener("contextmenu",n=>{Sl&&n.target!==nn&&n.target!==pt&&(Sl=!1,n.preventDefault()),!Ji.hidden&&!Ji.contains(n.target)&&n.target!==nn&&n.target!==pt&&Yo()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&Yo()});for(let n of Ji.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;Yo(),e==="duplicate"?pp():e==="delete"?fp():e==="focus"?U("focus-piece").click():zi(e==="select"?"move":e)};for(let n of[nn,pt])n.addEventListener("pointerdown",e=>Yw(n,e),{capture:!0}),n.addEventListener("pointermove",e=>Zw(n,e)),n.addEventListener("pointerup",e=>Zf(n,e,!0)),n.addEventListener("pointercancel",e=>Zf(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Zf(n,e,!1)}),n.addEventListener("pointerleave",()=>{Dt||us(null)});U("p-material").append(...O0.map((n,e)=>new Option(n,e)));for(let n of xx)U("p-"+n).addEventListener("change",e=>{let t=lt();!t||t.model||(Ct(),t[n]=Number(e.target.value),ne=gn(ne),Rt())});U("uv-reset").onclick=()=>{let n=lt();!n||n.model||(Ct(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ne=gn(ne),Rt())};var jw={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(jw))U(e).addEventListener("change",t=>{let i=lt();if(!i?.model||i.model.kind!=="prop")return;Ct(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),ne=gn(ne),Rt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};mt(s[n])});for(let n of gx)U("p-"+n).addEventListener("change",e=>{let t=lt();if(!t)return;Ct();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),ne=gn(ne),Rt()});var np={x:0,z:0,seconds:90,phase:0,rise:0};for(let n of Object.keys(np))U("flight-"+n).onchange=()=>{let e=lt();if(!e||e.solid)return;Ct();let t=Object.fromEntries(Object.entries(np).map(([i,s])=>{let r=U("flight-"+i);return[i,we.clamp(Number.isFinite(r.valueAsNumber)?r.valueAsNumber:s,Number(r.min),Number(r.max))]}));t.x||t.z?e.flight=t:delete e.flight,Rt(),Zo()};U("map-boundary").onchange=U("map-ceiling").onchange=()=>{Ct();let n=U("map-boundary").valueAsNumber;n>0?ne.boundary={diameter:we.clamp(n,12,2048),ceiling:we.clamp(U("map-ceiling").valueAsNumber||128,3,256)}:delete ne.boundary,Rt(),Zo()};U("map-world-size").onchange=n=>{Ct(),ne.worldSize=we.clamp(Number(n.target.value)||240,24,2048),ne=gn(ne),Rt(),Ir(),mt("Zone de construction : "+ne.worldSize+" \xD7 "+ne.worldSize+" m.")};U("map-name").onchange=n=>{Ct(),ne.name=n.target.value,ne=gn(ne),Rt()};U("piece-search").addEventListener("input",Ix);U("pieces").onchange=n=>{n.target.value!==""&&Xo(Number(n.target.value))};U("focus-piece").onclick=()=>{let n=At.children[Tt];if(!n)return;let e=new cn().setFromObject(n).getBoundingSphere(new di),t=Et.position.clone().sub(zt.target).normalize(),i=Math.atan(Math.tan(we.degToRad(Et.fov/2))*Math.min(Et.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);zt.target.copy(e.center),Et.position.copy(e.center).addScaledVector(t,s),zt.update(),sn()};for(let n of["x","y","z","yaw"])U("spawn-"+n).onchange=e=>{Ct(),ne.spawn[n]=Number(e.target.value),ne=gn(ne),Rt()};U("spawn-here").onclick=()=>{let n=lt();if(!n)return;let e=n.solid&&Fx(n.x,n.z,n.yaw,At.children[Tt]);if(!e)return mt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Ct(),ne.spawn=e,Rt(),mt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Su)n.onclick=()=>zi(n.dataset.tool);U("duplicate").onclick=pp;U("add-mirror").onclick=()=>dp(Ff());U("delete").onclick=fp;U("rotate").onclick=Hw;U("undo").onclick=Ux;U("zoom-fit").onclick=Ir;U("snap").onchange=()=>us(null);U("new-example").onclick=()=>gp(op(),"Ar\xE8ne de d\xE9part ouverte.");U("blank-map").onclick=()=>{let n=we.clamp(Number(U("map-world-size").value)||240,24,2048);gp({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[ai({name:"Sol",y:-.25,w:Math.min(n,Bs),d:Math.min(n,Bs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};U("surface").onchange=n=>{let e=dl[n.target.value],t=lt();!e||!t||(Ct(),Object.assign(t,e),Rt())};U("texture-file").onchange=async n=>{let e=n.target.files[0],t=lt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ne.pieces.includes(t))return mt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Ct(),t.texture=o,Rt(),mt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){mt(i.message)}finally{n.target.value=""}};U("texture-paint").onclick=()=>{let n=lt();if(!n||n.model)return mt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Bf({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Ct(),n.texture=e,ne=gn(ne),Rt(),mt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};U("terrain-grassTexture-paint").onclick=()=>{let n=lt();n?.terrain&&Bf({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Ct(),n.terrain.grassTexture=e,ne=gn(ne),Rt(),mt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};U("texture-clear").onclick=()=>{lt()?.texture&&(Ct(),lt().texture=null,Rt())};U("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{gp(gn(await e.text()),"Map charg\xE9e.")}catch(t){mt(t.message)}finally{n.target.value=""}};U("export-map").onclick=()=>{try{H0(ne),mt("Map JSON export\xE9e.")}catch(n){mt(n.message)}};U("test-map").onclick=async()=>{try{await rf(G0,JSON.stringify(gn(ne))),location.href="./?custom=1"}catch{mt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Ox=["detail","thickness","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"],Jw=new Intl.NumberFormat("fr-FR");function Kw(n){let e=n.terrain.rules,t=At.children[Tt]?.userData.vegetation?.userData.distribution??[];U("terrain-add-rule").disabled=e.length>=lu,U("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),U("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,S,M=!1)=>{let R=document.createElement("td");M&&(R.dataset.wide="");let L=document.createElement("span");return L.textContent=C,R.append(L,S),r.append(R),S.matches("input,select")&&S.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),R},a=C=>{Ct(),e[s]=ul({...i,...C}),Oi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),Rt()},l=(C,S,M)=>{let R=document.createElement("select");return R.replaceChildren(...C.map(([L,B])=>new Option(L,B))),R.value=S,R.onchange=()=>M(R.value),R},c=(C,S,M,R)=>{let L=document.createElement("input");return L.type="number",L.value=i[C],L.min=S,L.max=M,L.step=R,L.onchange=()=>{Number.isFinite(L.valueAsNumber)?a({[C]:L.valueAsNumber}):L.value=i[C]},L},h=Vn.some(C=>C.id===i.model?.id)||!i.model?Vn:[...Vn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let S=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(C=>[C.name,C.id]),i.model.id,C=>a({model:h.find(S=>S.id===C)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let f=l(Array.from({length:Af-1},(C,S)=>[String(S+2),String(S+2)]),String(i.colors.length),C=>{let S=i.colors.slice(0,Number(C));for(;S.length<Number(C);)S.push(S.at(-1));a({colors:S})});f.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(f);let d=document.createElement("div");d.className="terrain-swatches";for(let[C,S]of i.colors.entries()){let M=document.createElement("input");M.type="color",M.value=S,M.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),M.onchange=()=>a({colors:i.colors.map((R,L)=>L===C?M.value:R)}),d.append(M)}u.append(d),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,cl,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,Ef,.05)),o("Variation de taille",c("variation",0,Cf,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,S,M,R]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let L=document.createElement("label"),B=document.createElement("input");L.textContent=S,B.type="number",B.min=M,B.max=R,B.step="any",B.value=i.scatter?.[C]??_[C],B.onchange=()=>{Number.isFinite(B.valueAsNumber)&&a({scatter:{...i.scatter,[C]:B.valueAsNumber}})},L.append(B),m.append(L)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let b=document.createElement("td");b.dataset.wide="",b.append(x),r.append(b);let y=document.createElement("output"),T=t[s]??{count:0,requested:0,area:0};y.textContent=T.count+" / "+T.requested+" \xB7 "+T.area.toFixed(1)+" m\xB2",T.requested>T.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+Jw.format(T.collisions??0)+" collisions");let E=o("Affich\xE9es / demand\xE9es",y,!0),P=document.createElement("button");return P.type="button",P.textContent="Retirer la ligne",P.onclick=()=>{Ct(),e.splice(s,1),Rt()},E.append(P),r}))}U("terrain-add-rule").onclick=()=>{let n=lt();!n?.terrain||n.terrain.rules.length>=lu||(Ct(),n.terrain.rules.push(ul({seed:n.terrain.seed+n.terrain.rules.length})),Rt(),U("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};U("terrain-stitch").onclick=()=>{let n=lt(),e=ne.pieces[Number(U("terrain-neighbor").value)],t=we.clamp(Number(U("terrain-seam-width").value)||1.5,.1,25),i=I0(n,e,t);if(!i)return mt("Rapproche les bords \xE0 moins de 25 cm.");Ct(),ne.pieces[Tt]=i.piece,Rt(),mt(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};U("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=lt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ne.pieces.includes(t))return;Ct(),t.terrain.grassTexture=o,Rt(),mt("Texture d\u2019herbe import\xE9e.")}catch(i){mt(i.message)}};U("terrain-grassTexture-clear").onclick=()=>{lt()?.terrain&&(Ct(),lt().terrain.grassTexture=null,Rt())};for(let n of["triangulation","projection"])U("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Ct(),t.terrain=cs({...t.terrain,[n]:e.target.value},t.w*t.d),Rt())};U("adaptive-editor-view").onchange=sn;U("spawn-gizmo").onclick=()=>{zi("spawn"),mt("Tire la fl\xE8che verte Y pour monter le point de d\xE9part.")};for(let n of Ox)U("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Ct(),t.terrain=n==="detail"?If(t.terrain,Number(e.target.value)):cs({...t.terrain,[n]:Number(e.target.value)},t.w*t.d),Rt())};function zx(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function kx(n){let e=lt();e?.terrain&&(Ct(),e.terrain=cs({...e.terrain,reliefArea:n},e.w*e.d),Rt())}U("terrain-relief-local").onchange=n=>{let e=lt();e?.terrain&&kx(n.target.checked?zx(e):null)};for(let n of["x","z","radius","blend"])U("terrain-relief-"+n).onchange=e=>{let t=lt(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&kx({...t.terrain.reliefArea,[n]:i})};U("terrain-reset").onclick=()=>{lt()?.terrain&&(Ct(),lt().terrain.heights=null,Rt())};function Vx(n,e){xp(n,e);let t=Hs.intersectObjects(At.children,!1).find(a=>ne.pieces[At.children.indexOf(a.object)]?.terrain),i=t?At.children.indexOf(t.object):-1,s=ne.pieces[i];if(!s?.terrain||(Dt.recorded||(Ct(),Dt.recorded=!0,Dt.flattenY=t.point.y,Xo(i),U("terrain-controls").open=!0),i!==Tt))return;let r={mode:U("terrain-brush").value,radius:Number(U("brush-radius").value),strength:Number(U("brush-strength").value),target:Dt.flattenY};if(!D0(s,t.point.x,t.point.z,r))return;let o=At.children[i];Lf(o.geometry,s),Bi?.update(),Mi(),sn()}U("view-top").onclick=()=>{let n=zt.target,e=Math.max(10,Et.position.distanceTo(n));Et.position.copy(n).add(new v(0,e,.001)),zt.update(),sn()};U("view-perspective").onclick=()=>{Et.position.copy(zt.target).add(new v(16,15,24)),Ir()};U("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=ne.spawn,s=new v(0,0,-1).applyAxisAngle(Ru,we.degToRad(i));Et.position.set(n,e+.87,t),zt.target.copy(Et.position).addScaledVector(s,5),Et.lookAt(zt.target),sn()};var mx={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||Dt||Qe.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")Ux();else if(e==="d")pp();else return;else{if(n.altKey)return;if(mx[e])zi(mx[e]);else if(e==="f")Ir();else if(e==="delete"||e==="backspace")fp();else return}n.preventDefault()});var Er=new _n;hn.add(Er);function $w(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function ip(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function Qw(){yl=At.children.map($w),zs={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of yl.entries()){for(let i of["triangles","vertices","instances"])zs[i]+=t[i];(zs.heavy<0||t.triangles>yl[zs.heavy].triangles)&&(zs.heavy=e)}U("scene-mesh-stats").textContent="Objets de la carte \xB7 "+ip(zs);let n=zs.heavy;U("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+ne.pieces[n].name+" \xB7 "+ip(yl[n]),U("scene-select-heavy").disabled=n<0}U("scene-select-heavy").onclick=()=>{let n=zs?.heavy??-1;n<0||(Xo(n),window.setInspectorTab("object"),U("focus-piece").click())};function Gx(){if(!U("debug-stats"))return;let n=Pr.info.render.triangles,e=ne?.pieces?.length??0;U("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ne?.worldSize??240)+" m"}function Hx(){for(let n of[...Er.children])Er.remove(n),n.geometry.dispose(),n.material.dispose();Wo.visible=U("debug-grid").checked;for(let n of At.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=U("debug-wire").checked;if(U("debug-hitboxes").checked){let e=At.children.indexOf(n),t=ne.pieces[e];if(t?.model){let i=new v(t.w,t.h,t.d),s=v0(t.model,i);if(s)for(let r of s){let o=new qe(...r.size),a=new de(o,new Zt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),Er.add(a)}else{let r=_0(t.model,i),o=new de(r,new Zt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),Er.add(o)}}else if(t?.primitive==="ramp"){let i=new er(new Na(n.geometry),new fi({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),Er.add(i)}else Er.add(new yo(n,"#fa9945"))}}sn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])U(n).onchange=Hx;U("debug-coords").onchange=()=>{U("debug-coords").checked||Gx()};for(let n of[nn,pt])n.addEventListener("pointermove",e=>{if(!U("debug-coords").checked||Dt||vi)return;let t=qo(n,e);if(!t)return;let i=t.point;U("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+ne.pieces.length+" \xE9l\xE9ments"});async function eT(){try{let n=await bg(yx);if(n){let e=gn(n);if(JSON.stringify(e)!==JSON.stringify(k0()))if(e.arenaBase&&!e.editableArena){let t=op(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=zo?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ne=gn(e),mt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ne=e}else ne=e}}catch{}if(Vw(),zi("move"),Rt(),Pu(),Iu(),Ir(),wl(),jf){let n=Vn.find(e=>e.id===jf);n?(U("place-model").click(),mt("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):mt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Oi("d\xE9marrage termin\xE9",{version:"R42",name:ne.name,pi\u00E8ces:ne.pieces.length})}eT();})();
