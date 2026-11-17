(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,Dh=1,Od=2;var Lh=1,Bd=2,di=3,Zn=0,Qe=1,Ve=2,bi=0,as=1,Bo=2,Uh=3,Nh=4,zd=5,Fi=100,kd=101,Vd=102,Gd=103,Hd=104,Wd=200,Xd=201,qd=202,Yd=203,Wa=204,Xa=205,Zd=206,Jd=207,Kd=208,$d=209,jd=210,Qd=211,tf=212,ef=213,nf=214,vl=0,Ml=1,Sl=2,ls=3,bl=4,wl=5,Tl=6,El=7,Al=0,sf=1,rf=2,wi=0,of=1,af=2,lf=3,cf=4,hf=5,uf=6,df=7;var Fh=300,xs=301,ys=302,_r=303,Cl=304,zo=306,oi=1e3,Ni=1001,qa=1002,Mn=1003,ff=1004;var ko=1005;var je=1006,Rl=1007;var bn=1008;var jn=1009,Oh=1010,Bh=1011,xr=1012,Pl=1013,Vi=1014,Qn=1015,yr=1016,Il=1017,Dl=1018,vr=1020,zh=35902,kh=35899,Vh=1021,Gh=1022,wn=1023,Qs=1026,Mr=1027,Ll=1028,Ul=1029,Hh=1030,Nl=1031;var Fl=1033,Vo=33776,Go=33777,Ho=33778,Wo=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,Jl=37813,Kl=37814,$l=37815,jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,cc=36285,hc=36286;var no=2300,Ya=2301,Ga=2302,vh=2400,Mh=2401,Sh=2402;var pf=3200,mf=3201;var uc=0,gf=1,Ti="",ye="srgb",cs="srgb-linear",io="linear",fe="srgb";var os=7680;var bh=519,_f=512,xf=513,yf=514,Wh=515,vf=516,Mf=517,Sf=518,bf=519,Za=35044,Xo=35048;var Xh="300 es",Yn=2e3,so=2001;var ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,jr=Math.PI/180,tr=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function qh(i,t){return(i%t+t)%t}function $m(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jm(i,t,e){return i!==t?(e-i)/(t-i):0}function Qr(i,t,e){return(1-e)*i+e*t}function Qm(i,t,e,n){return Qr(i,t,1-Math.exp(-e*n))}function tg(i,t=1){return t-Math.abs(qh(i,t*2)-t)}function eg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ng(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ig(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sg(i,t){return i+Math.random()*(t-i)}function rg(i){return i*(.5-Math.random())}function og(i){i!==void 0&&(ed=i);let t=ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ag(i){return i*jr}function lg(i){return i*tr}function cg(i){return(i&i-1)===0&&i!==0}function hg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kt={DEG2RAD:jr,RAD2DEG:tr,generateUUID:ri,clamp:Jt,euclideanModulo:qh,mapLinear:$m,inverseLerp:jm,lerp:Qr,damp:Qm,pingpong:tg,smoothstep:eg,smootherstep:ng,randInt:ig,randFloat:sg,randFloatSpread:rg,seededRandom:og,degToRad:ag,radToDeg:lg,isPowerOfTwo:cg,ceilPowerOfTwo:hg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:dg,normalize:de,denormalize:qn},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let R=Math.sqrt(S),A=Math.atan2(R,p*b);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}let y=a*b;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new M,nd=new ce,$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],S=s[4],y=s[7],R=s[2],A=s[5],I=s[8];return r[0]=o*x+a*b+l*R,r[3]=o*g+a*S+l*A,r[6]=o*p+a*y+l*I,r[1]=c*x+h*b+u*R,r[4]=c*g+h*S+u*A,r[7]=c*p+h*y+u*I,r[2]=d*x+f*b+m*R,r[5]=d*g+f*S+m*A,r[8]=d*p+f*y+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new $t;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=er("canvas");return i.style.display="block",i}var id={};function nr(i){i in id||(id[i]=!0,console.warn(i))}function Tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var sd=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){let i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:t,whitePoint:n,transfer:io,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}var ae=fg();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=er("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pg=0,ir=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zc(s[o].image)):r.push(Zc(s[o]))}else r=Zc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mg=0,Jc=new M,an=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=je,o=bn,a=wn,l=jn,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ri(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Fh;an.DEFAULT_ANISOTROPY=1;var De=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,R=(p+1)/2,A=(h+d)/4,I=(u+x)/4,L=(m+g)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new an(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ro=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),pa.subVectors(this.max,Vr),Ls.subVectors(t.a,Vr),Us.subVectors(t.b,Vr),Ns.subVectors(t.c,Vr),Ri.subVectors(Us,Ls),Pi.subVectors(Ns,Us),ns.subVectors(Ls,Ns);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ns.z,ns.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ns.z,0,-ns.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ns.y,ns.x,0];return!Kc(e,Ls,Us,Ns,pa)||(e=[1,0,0,0,1,0,0,0,1],!Kc(e,Ls,Us,Ns,pa))?!1:(ma.crossVectors(Ri,Pi),e=[ma.x,ma.y,ma.z],Kc(e,Ls,Us,Ns,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new M,new M,new M,new M,new M,new M,new M,new M],Hn=new M,fa=new He,Ls=new M,Us=new M,Ns=new M,Ri=new M,Pi=new M,ns=new M,Vr=new M,pa=new M,ma=new M,is=new M;function Kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gg=new He,Gr=new M,$c=new M,kn=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add($c)),this.expandByPoint(Gr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xi=new M,jc=new M,ga=new M,Ii=new M,Qc=new M,_a=new M,th=new M,Oi=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ga),a=Ii.dot(this.direction),l=-Ii.dot(ga),c=Ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jc).addScaledVector(ga,d),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){Qc.subVectors(e,t),_a.subVectors(n,t),th.crossVectors(Qc,_a);let o=this.direction.dot(th),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let l=a*this.direction.dot(_a.crossVectors(Ii,_a));if(l<0)return null;let c=a*this.direction.dot(Qc.cross(Ii));if(c<0||l+c>o)return null;let h=-a*Ii.dot(th);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_g,t,xg)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Di.crossVectors(n,Pn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Di.crossVectors(n,Pn)),Di.normalize(),xa.crossVectors(Pn,Di),s[0]=Di.x,s[4]=xa.x,s[8]=Pn.x,s[1]=Di.y,s[5]=xa.y,s[9]=Pn.y,s[2]=Di.z,s[6]=xa.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],S=n[7],y=n[11],R=n[15],A=s[0],I=s[4],L=s[8],w=s[12],v=s[1],D=s[5],F=s[9],V=s[13],G=s[2],k=s[6],H=s[10],j=s[14],W=s[3],nt=s[7],ft=s[11],$=s[15];return r[0]=o*A+a*v+l*G+c*W,r[4]=o*I+a*D+l*k+c*nt,r[8]=o*L+a*F+l*H+c*ft,r[12]=o*w+a*V+l*j+c*$,r[1]=h*A+u*v+d*G+f*W,r[5]=h*I+u*D+d*k+f*nt,r[9]=h*L+u*F+d*H+f*ft,r[13]=h*w+u*V+d*j+f*$,r[2]=m*A+x*v+g*G+p*W,r[6]=m*I+x*D+g*k+p*nt,r[10]=m*L+x*F+g*H+p*ft,r[14]=m*w+x*V+g*j+p*$,r[3]=b*A+S*v+y*G+R*W,r[7]=b*I+S*D+y*k+R*nt,r[11]=b*L+S*F+y*H+R*ft,r[15]=b*w+S*V+y*j+R*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,S=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,R=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,A=e*b+n*S+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=b*I,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*I,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*I,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*I,t[4]=S*I,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*I,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*I,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*I,t[8]=y*I,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*I,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*I,t[12]=R*I,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*I,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,b=l*c,S=l*h,y=l*u,R=n.x,A=n.y,I=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+y)*R,s[2]=(m-S)*R,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(m+S)*I,s[9]=(g-b)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);let c=1/r,h=1/o,u=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Yn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new M,Wn=new oe,_g=new M(0,0,0),xg=new M(1,1,1),Di=new M,xa=new M,Pn=new M,od=new oe,ad=new ce,Je=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ad.setFromEuler(this),this.setFromQuaternion(ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yg=0,ld=new M,Os=new ce,yi=new oe,ya=new M,Hr=new M,vg=new M,Mg=new ce,cd=new M(1,0,0),hd=new M(0,1,0),ud=new M(0,0,1),dd={type:"added"},Sg={type:"removed"},Bs={type:"childadded",child:null},eh={type:"childremoved",child:null},be=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new M,e=new Je,n=new ce,s=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(cd,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(ud,t)}translateOnAxis(t,e){return ld.copy(t).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cd,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ya.copy(t):ya.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Hr,ya,this.up):yi.lookAt(ya,Hr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(yi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dd),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sg),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dd),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new M(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new M,vi=new M,nh=new M,Mi=new M,zs=new M,ks=new M,fd=new M,ih=new M,sh=new M,rh=new M,oh=new De,ah=new De,lh=new De,vn=class i{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),vi.subVectors(n,e),nh.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(vi),l=Xn.dot(nh),c=vi.dot(vi),h=vi.dot(nh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(t,e),ah.fromBufferAttribute(t,n),lh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(lh,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),vi.subVectors(t,e),Xn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),ks.subVectors(r,n),ih.subVectors(t,n);let l=zs.dot(ih),c=ks.dot(ih);if(l<=0&&c<=0)return e.copy(n);sh.subVectors(t,s);let h=zs.dot(sh),u=ks.dot(sh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zs,o);rh.subVectors(t,r);let f=zs.dot(rh),m=ks.dot(rh);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ks,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return fd.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(fd,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},va={h:0,s:0,l:0};function ch(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=qh(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ch(o,r,t+1/3),this.g=ch(o,r,t),this.b=ch(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ae.workingToColorSpace(sn.copy(this),t),Math.round(Jt(sn.r*255,0,255))*65536+Math.round(Jt(sn.g*255,0,255))*256+Math.round(Jt(sn.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(sn.copy(this),e);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=ye){ae.workingToColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,s=sn.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(va);let n=Qr(Li.h,va.h,e),s=Qr(Li.s,va.s,e),r=Qr(Li.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new kt;kt.NAMES=Ef;var bg=0,Jn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=as,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ze=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new M,Ma=new ct,wg=0,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}};var oo=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tg=0,zn=new oe,hh=new be,Vs=new M,In=new He,Wr=new He,Ze=new M,ne=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new He);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(In.min,Wr.min),In.expandByPoint(Ze),Ze.addVectors(In.max,Wr.max),In.expandByPoint(Ze)):(In.expandByPoint(Wr.min),In.expandByPoint(Wr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),Ze.add(Vs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new M,l[L]=new M;let c=new M,h=new M,u=new M,d=new ct,f=new ct,m=new ct,x=new M,g=new M;function p(L,w,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[L].add(x),a[w].add(x),a[v].add(x),l[L].add(g),l[w].add(g),l[v].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,w=b.length;L<w;++L){let v=b[L],D=v.start,F=v.count;for(let V=D,G=D+F;V<G;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new M,y=new M,R=new M,A=new M;function I(L){R.fromBufferAttribute(s,L),A.copy(R);let w=a[L];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(A,w);let D=y.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,w=b.length;L<w;++L){let v=b[L],D=v.start,F=v.count;for(let V=D,G=D+F;V<G;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pd=new oe,ss=new Oi,Sa=new kn,md=new M,ba=new M,wa=new M,Ta=new M,uh=new M,Ea=new M,gd=new M,Aa=new M,ot=class extends be{constructor(t=new ne,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(uh.fromBufferAttribute(u,t),o?Ea.addScaledVector(uh,h):Ea.addScaledVector(uh.sub(e),h))}e.add(Ea)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Sa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Sa,md)===null||ss.origin.distanceToSquared(md)>(t.far-t.near)**2))&&(pd.copy(r).invert(),ss.copy(t.ray).applyMatrix4(pd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,R=S;y<R;y+=3){let A=a.getX(y),I=a.getX(y+1),L=a.getX(y+2);s=Ca(this,p,t,n,c,h,u,A,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);s=Ca(this,o,t,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,R=S;y<R;y+=3){let A=y,I=y+1,L=y+2;s=Ca(this,p,t,n,c,h,u,A,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,S=g+1,y=g+2;s=Ca(this,o,t,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Eg(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Aa);return c<e.near||c>e.far?null:{distance:c,point:Aa.clone(),object:i}}function Ca(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ba),i.getVertexPosition(l,wa),i.getVertexPosition(c,Ta);let h=Eg(i,t,e,n,ba,wa,Ta,gd);if(h){let u=new M;vn.getBarycoord(gd,ba,wa,Ta,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};vn.getNormal(ba,wa,Ta,d.normal),h.face=d,h.barycoord=u}return h}var Yt=class i extends ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function m(x,g,p,b,S,y,R,A,I,L,w){let v=y/I,D=R/L,F=y/2,V=R/2,G=A/2,k=I+1,H=L+1,j=0,W=0,nt=new M;for(let ft=0;ft<H;ft++){let $=ft*D-V;for(let Mt=0;Mt<k;Mt++){let Et=Mt*v-F;nt[x]=Et*b,nt[g]=$*S,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[g]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Mt/I),u.push(1-ft/L),j+=1}}for(let ft=0;ft<L;ft++)for(let $=0;$<I;$++){let Mt=d+$+k*ft,Et=d+$+k*(ft+1),Ot=d+($+1)+k*(ft+1),It=d+($+1)+k*ft;l.push(Mt,Et,It),l.push(Et,Ot,It),W+=6}a.addGroup(f,W,w),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ag(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Af={clone:vs,merge:un},Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lo=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new M,_d=new ct,xd=new ct,rn=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,_d,xd),e.subVectors(xd,_d)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Hs=1,ja=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Gs,Hs,t,e);s.layers=this.layers,this.add(s);let r=new rn(Gs,Hs,t,e);r.layers=this.layers,this.add(r);let o=new rn(Gs,Hs,t,e);o.layers=this.layers,this.add(o);let a=new rn(Gs,Hs,t,e);a.layers=this.layers,this.add(a);let l=new rn(Gs,Hs,t,e);l.layers=this.layers,this.add(l);let c=new rn(Gs,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},co=class extends an{constructor(t=[],e=xs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:bi});r.uniforms.tEquirect.value=e;let o=new ot(s,r),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=je),new ja(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},$e=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ho=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new M,ar=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lr=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Xr=new M,Xs=new M,qs=new M,Ys=new ct,qr=new ct,Cf=new oe,Ra=new M,Yr=new M,Pa=new M,yd=new ct,dh=new ct,vd=new ct,fo=class extends be{constructor(t=new lr){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uo(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ar(n,3,0,!1)),Ws.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ia(Ra.set(-.5,-.5,0),qs,o,Xs,s,r),Ia(Yr.set(.5,-.5,0),qs,o,Xs,s,r),Ia(Pa.set(.5,.5,0),qs,o,Xs,s,r),yd.set(0,0),dh.set(1,0),vd.set(1,1);let a=t.ray.intersectTriangle(Ra,Yr,Pa,!1,Xr);if(a===null&&(Ia(Yr.set(-.5,.5,0),qs,o,Xs,s,r),dh.set(0,1),a=t.ray.intersectTriangle(Ra,Pa,Yr,!1,Xr),a===null))return;let l=t.ray.origin.distanceTo(Xr);l<t.near||l>t.far||e.push({distance:l,point:Xr.clone(),uv:vn.getInterpolation(Xr,Ra,Yr,Pa,yd,dh,vd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ia(i,t,e,n,s,r){Ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qr.x=r*Ys.x-s*Ys.y,qr.y=s*Ys.x+r*Ys.y):qr.copy(Ys),i.copy(t),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(Cf)}var ci=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Mn,h=Mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new oe,Md=new oe,Da=[],Sd=new He,Ig=new oe,Zr=new ot,Jr=new kn,po=class extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ig)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new He),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Sd.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Jr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Md.multiplyMatrices(n,Zs),Zr.matrixWorld=Md,Zr.raycast(t,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,Ll,Qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fh=new M,Dg=new M,Lg=new $t,on=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fh.subVectors(n,e).cross(Dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lg.getNormalMatrix(t),s=this.coplanarPoint(fh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new kn,Ug=new ct(.5,.5),La=new M,hr=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],S=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-m,R-b).normalize(),s[1].setComponents(c+o,f+h,p+m,R+b).normalize(),s[2].setComponents(c+a,f+u,p+x,R+S).normalize(),s[3].setComponents(c-a,f-u,p-x,R-S).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,R-y).normalize(),e===Yn)s[5].setComponents(c+l,f+d,p+g,R+y).normalize();else if(e===so)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=Ug.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hi=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new M,el=new M,bd=new oe,Kr=new Oi,Ua=new kn,ph=new M,wd=new M,Sn=class extends be{constructor(t=new ne,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)tl.fromBufferAttribute(e,s-1),el.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=tl.distanceTo(el);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;bd.copy(s).invert(),Kr.copy(t.ray).applyMatrix4(bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),S=Na(this,t,Kr,l,p,b,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Na(this,t,Kr,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Na(this,t,Kr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Na(this,t,Kr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Na(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(tl.fromBufferAttribute(a,s),el.fromBufferAttribute(a,r),e.distanceSqToSegment(tl,el,ph,wd)>n)return;ph.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:wd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Td=new M,Ed=new M,mo=class extends Sn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Td.fromBufferAttribute(e,s),Ed.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Td.distanceTo(Ed);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},go=class extends Sn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var ui=class extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_o=class extends an{constructor(t,e,n=Vi,s,r,o,a=Mn,l=Mn,c,h=Qs,u=1){if(h!==Qs&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xo=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yo=class i extends ne{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,x=s+1,g=new M,p=new M;for(let b=0;b<=m;b++){let S=0,y=0,R=0,A=0;if(b<=n){let w=b/n,v=w*Math.PI/2;y=-h-t*Math.cos(v),R=t*Math.sin(v),A=-t*Math.cos(v),S=w*u}else if(b<=n+r){let w=(b-n)/r;y=-h+w*e,R=t,A=0,S=u+w*d}else{let w=(b-n-r)/n,v=w*Math.PI/2;y=h+t*Math.sin(v),R=t*Math.cos(v),A=t*Math.sin(v),S=u+d+w*u}let I=Math.max(0,Math.min(1,S/f)),L=0;b===0?L=.5/s:b===m&&(L=-.5/s);for(let w=0;w<=s;w++){let v=w/s,D=v*Math.PI*2,F=Math.sin(D),V=Math.cos(D);p.x=-R*V,p.y=y,p.z=R*F,a.push(p.x,p.y,p.z),g.set(-R*V,A,R*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(v+L,I)}if(b>0){let w=(b-1)*x;for(let v=0;v<s;v++){let D=w+v,F=w+v+1,V=b*x+v,G=b*x+v+1;o.push(D,F,V),o.push(F,G,V)}}}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ke=class i extends ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new M,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pe=class i extends ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function b(){let y=new M,R=new M,A=0,I=(e-t)/n;for(let L=0;L<=r;L++){let w=[],v=L/r,D=v*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,G=V*l+a,k=Math.sin(G),H=Math.cos(G);R.x=D*k,R.y=-v*n+g,R.z=D*H,u.push(R.x,R.y,R.z),y.set(k,I,H).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-v),w.push(m++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let v=x[w][L],D=x[w+1][L],F=x[w+1][L+1],V=x[w][L+1];(t>0||w!==0)&&(h.push(v,D,V),A+=3),(e>0||w!==r-1)&&(h.push(D,F,V),A+=3)}c.addGroup(p,A,0),p+=A}function S(y){let R=m,A=new ct,I=new M,L=0,w=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let D=m;for(let F=0;F<=s;F++){let G=F/s*l+a,k=Math.cos(G),H=Math.sin(G);I.x=w*H,I.y=g*v,I.z=w*k,u.push(I.x,I.y,I.z),d.push(0,v,0),A.x=k*.5+.5,A.y=H*.5*v+.5,f.push(A.x,A.y),m++}for(let F=0;F<s;F++){let V=R+F,G=D+F;y===!0?h.push(G,G+1,V):h.push(G+1,G,V),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hs=class i extends pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ur=class i extends ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new M,y=new M,R=new M;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],y),f(e[A+2],R),l(S,y,R,b)}function l(b,S,y,R){let A=R+1,I=[];for(let L=0;L<=A;L++){I[L]=[];let w=b.clone().lerp(y,L/A),v=S.clone().lerp(y,L/A),D=A-L;for(let F=0;F<=D;F++)F===0&&L===A?I[L][F]=w:I[L][F]=w.clone().lerp(v,F/D)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){let v=Math.floor(w/2);w%2===0?(d(I[L][v+1]),d(I[L+1][v]),d(I[L][v])):(d(I[L][v+1]),d(I[L+1][v+1]),d(I[L+1][v]))}}function c(b){let S=new M;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(b),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let b=new M;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let y=g(b)/2/Math.PI+.5,R=p(b)/Math.PI+.5;o.push(y,1-R)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let S=o[b+0],y=o[b+2],R=o[b+4],A=Math.max(S,y,R),I=Math.min(S,y,R);A>.9&&I<.1&&(S<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,S){let y=b*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function m(){let b=new M,S=new M,y=new M,R=new M,A=new ct,I=new ct,L=new ct;for(let w=0,v=0;w<r.length;w+=9,v+=6){b.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),R.copy(b).add(S).add(y).divideScalar(3);let D=g(R);x(A,v+0,b,D),x(I,v+2,S,D),x(L,v+4,y,D)}}function x(b,S,y,R){R<0&&b.x===1&&(o[S]=b.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new M,s=[],r=[],o=[],a=new M,l=new oe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},dr=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nl=class extends dr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Fa=new M,mh=new Jh,gh=new Jh,_h=new Jh,il=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new M){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fa.subVectors(s[0],s[1]).add(s[0]),c=Fa);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),mh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),gh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),_h.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_h.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(mh.calc(l),gh.calc(l),_h.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new M().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ad(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ng(i,t){let e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function to(i,t,e,n){return Ng(i,t)+Fg(i,e)+Og(i,n)}function Bg(i,t){let e=1-i;return e*e*e*t}function zg(i,t){let e=1-i;return 3*e*e*i*t}function kg(i,t){return 3*(1-i)*i*i*t}function Vg(i,t){return i*i*i*t}function eo(i,t,e,n,s){return Bg(i,t)+zg(i,e)+kg(i,n)+Vg(i,s)}var vo=class extends Dn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,s.x,r.x,o.x,a.x),eo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Dn{constructor(t=new M,e=new M,n=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new M){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,s.x,r.x,o.x,a.x),eo(t,s.y,r.y,o.y,a.y),eo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends Dn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Dn{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends Dn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(to(t,s.x,r.x,o.x),to(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Dn{constructor(t=new M,e=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new M){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(to(t,s.x,r.x,o.x),to(t,s.y,r.y,o.y),to(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ad(a,l.x,c.x,h.x,u.x),Ad(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:nl,CatmullRomCurve3:il,CubicBezierCurve:vo,CubicBezierCurve3:sl,EllipseCurve:dr,LineCurve:Mo,LineCurve3:rl,QuadraticBezierCurve:So,QuadraticBezierCurve3:ol,SplineCurve:bo}),al=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},wo=class extends al{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new dr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},us=class extends wo{constructor(t){super(t),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wo().fromJSON(s))}return this}};function Gg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Yg(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return To(r,o,e,a,l,c,0),o}function Rf(i,t,e,n,s){let r;if(s===s0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Cd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Cd(o/n|0,i[o],i[o+1],r);return r&&fr(r,r.next)&&(Ao(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function To(i,t,e,n,s,r,o){if(!i)return;!o&&r&&jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Wg(i,n,s,r):Hg(i)){t.push(l.i,i.i,c.i),Ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xg(ds(i),t),To(i,t,e,n,s,r,2)):o===2&&qg(i,t,e,n,s,r):To(ds(i),t,e,n,s,r,1);break}}}function Hg(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&$r(s,a,r,l,o,c,m.x,m.y)&&Ie(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=Th(f,m,t,e,n),b=Th(x,g,t,e,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&$r(a,h,l,u,c,d,S.x,S.y)&&Ie(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$r(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&$r(a,h,l,u,c,d,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$r(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!fr(n,s)&&If(n,e,e.next,s)&&Eo(n,s)&&Eo(s,n)&&(t.push(n.i,e.i,s.i),Ao(e),Ao(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function qg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e0(o,a)){let l=Df(o,a);o=ds(o,o.next),l=ds(l,l.next),To(o,t,e,n,s,r,0),To(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Rf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(t0(c))}s.sort(Zg);for(let r=0;r<s.length;r++)e=Jg(s[r],e);return e}function Zg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Jg(i,t){let e=Kg(i,t);if(!e)return t;let n=Df(e,i);return ds(n,n.next),ds(e,e.next)}function Kg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(fr(i,e))return e;do{if(fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Eo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&$g(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function $g(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function jg(i,t,e,n){let s=i;do s.z===0&&(s.z=Th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function t0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $r(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Pf(i,t,e,n,s,r,o,a)}function e0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!n0(i,t)&&(Eo(i,t)&&Eo(t,i)&&i0(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||fr(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fr(i,t){return i.x===t.x&&i.y===t.y}function If(i,t,e,n){let s=Ba(Ie(i,t,e)),r=Ba(Ie(i,t,n)),o=Ba(Ie(e,n,i)),a=Ba(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Oa(i,e,t)||r===0&&Oa(i,n,t)||o===0&&Oa(e,i,n)||a===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ba(i){return i>0?1:i<0?-1:0}function n0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Eo(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function i0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Df(i,t){let e=Eh(i.i,i.x,i.y),n=Eh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cd(i,t,e,n){let s=Eh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Eh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ah=class{static triangulate(t,e,n=2){return Gg(t,e,n)}},si=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Rd(t),Pd(n,t);let o=t.length;e.forEach(Rd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Pd(n,e[l]);let a=Ah.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Pd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Co=class i extends ne{constructor(t=new us([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:r0,S,y=!1,R,A,I,L;p&&(S=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),A=new M,I=new M,L=new M),d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(c),v=w.shape,D=w.holes;if(!si.isClockWise(v)){v=v.reverse();for(let st=0,tt=D.length;st<tt;st++){let K=D[st];si.isClockWise(K)&&(D[st]=K.reverse())}}function V(st){let K=10000000000000001e-36,Q=st[0];for(let ut=1;ut<=st.length;ut++){let at=ut%st.length,St=st[at],Xt=St.x-Q.x,Wt=St.y-Q.y,E=Xt*Xt+Wt*Wt,_=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(Q.x),Math.abs(Q.y)),C=K*_*_;if(E<=C){st.splice(at,1),ut--;continue}Q=St}}V(v),D.forEach(V);let G=D.length,k=v;for(let st=0;st<G;st++){let tt=D[st];v=v.concat(tt)}function H(st,tt,K){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(tt,K)}let j=v.length;function W(st,tt,K){let Q,ut,at,St=st.x-tt.x,Xt=st.y-tt.y,Wt=K.x-st.x,E=K.y-st.y,_=St*St+Xt*Xt,C=St*E-Xt*Wt;if(Math.abs(C)>Number.EPSILON){let N=Math.sqrt(_),Z=Math.sqrt(Wt*Wt+E*E),z=tt.x-Xt/N,dt=tt.y+St/N,et=K.x-E/Z,ht=K.y+Wt/Z,lt=((et-z)*E-(ht-dt)*Wt)/(St*E-Xt*Wt);Q=z+St*lt-st.x,ut=dt+Xt*lt-st.y;let J=Q*Q+ut*ut;if(J<=2)return new ct(Q,ut);at=Math.sqrt(J/2)}else{let N=!1;St>Number.EPSILON?Wt>Number.EPSILON&&(N=!0):St<-Number.EPSILON?Wt<-Number.EPSILON&&(N=!0):Math.sign(Xt)===Math.sign(E)&&(N=!0),N?(Q=-Xt,ut=St,at=Math.sqrt(_)):(Q=St,ut=Xt,at=Math.sqrt(_/2))}return new ct(Q/at,ut/at)}let nt=[];for(let st=0,tt=k.length,K=tt-1,Q=st+1;st<tt;st++,K++,Q++)K===tt&&(K=0),Q===tt&&(Q=0),nt[st]=W(k[st],k[K],k[Q]);let ft=[],$,Mt=nt.concat();for(let st=0,tt=G;st<tt;st++){let K=D[st];$=[];for(let Q=0,ut=K.length,at=ut-1,St=Q+1;Q<ut;Q++,at++,St++)at===ut&&(at=0),St===ut&&(St=0),$[Q]=W(K[Q],K[at],K[St]);ft.push($),Mt=Mt.concat($)}let Et;if(g===0)Et=si.triangulateShape(k,D);else{let st=[],tt=[];for(let K=0;K<g;K++){let Q=K/g,ut=f*Math.cos(Q*Math.PI/2),at=m*Math.sin(Q*Math.PI/2)+x;for(let St=0,Xt=k.length;St<Xt;St++){let Wt=H(k[St],nt[St],at);Pt(Wt.x,Wt.y,-ut),Q===0&&st.push(Wt)}for(let St=0,Xt=G;St<Xt;St++){let Wt=D[St];$=ft[St];let E=[];for(let _=0,C=Wt.length;_<C;_++){let N=H(Wt[_],$[_],at);Pt(N.x,N.y,-ut),Q===0&&E.push(N)}Q===0&&tt.push(E)}}Et=si.triangulateShape(st,tt)}let Ot=Et.length,It=m+x;for(let st=0;st<j;st++){let tt=d?H(v[st],Mt[st],It):v[st];y?(I.copy(R.normals[0]).multiplyScalar(tt.x),A.copy(R.binormals[0]).multiplyScalar(tt.y),L.copy(S[0]).add(I).add(A),Pt(L.x,L.y,L.z)):Pt(tt.x,tt.y,0)}for(let st=1;st<=h;st++)for(let tt=0;tt<j;tt++){let K=d?H(v[tt],Mt[tt],It):v[tt];y?(I.copy(R.normals[st]).multiplyScalar(K.x),A.copy(R.binormals[st]).multiplyScalar(K.y),L.copy(S[st]).add(I).add(A),Pt(L.x,L.y,L.z)):Pt(K.x,K.y,u/h*st)}for(let st=g-1;st>=0;st--){let tt=st/g,K=f*Math.cos(tt*Math.PI/2),Q=m*Math.sin(tt*Math.PI/2)+x;for(let ut=0,at=k.length;ut<at;ut++){let St=H(k[ut],nt[ut],Q);Pt(St.x,St.y,u+K)}for(let ut=0,at=D.length;ut<at;ut++){let St=D[ut];$=ft[ut];for(let Xt=0,Wt=St.length;Xt<Wt;Xt++){let E=H(St[Xt],$[Xt],Q);y?Pt(E.x,E.y+S[h-1].y,S[h-1].x+K):Pt(E.x,E.y,u+K)}}}Y(),it();function Y(){let st=s.length/3;if(d){let tt=0,K=j*tt;for(let Q=0;Q<Ot;Q++){let ut=Et[Q];At(ut[2]+K,ut[1]+K,ut[0]+K)}tt=h+g*2,K=j*tt;for(let Q=0;Q<Ot;Q++){let ut=Et[Q];At(ut[0]+K,ut[1]+K,ut[2]+K)}}else{for(let tt=0;tt<Ot;tt++){let K=Et[tt];At(K[2],K[1],K[0])}for(let tt=0;tt<Ot;tt++){let K=Et[tt];At(K[0]+j*h,K[1]+j*h,K[2]+j*h)}}n.addGroup(st,s.length/3-st,0)}function it(){let st=s.length/3,tt=0;wt(k,tt),tt+=k.length;for(let K=0,Q=D.length;K<Q;K++){let ut=D[K];wt(ut,tt),tt+=ut.length}n.addGroup(st,s.length/3-st,1)}function wt(st,tt){let K=st.length;for(;--K>=0;){let Q=K,ut=K-1;ut<0&&(ut=st.length-1);for(let at=0,St=h+g*2;at<St;at++){let Xt=j*at,Wt=j*(at+1),E=tt+Q+Xt,_=tt+ut+Xt,C=tt+ut+Wt,N=tt+Q+Wt;Gt(E,_,C,N)}}}function Pt(st,tt,K){l.push(st),l.push(tt),l.push(K)}function At(st,tt,K){te(st),te(tt),te(K);let Q=s.length/3,ut=b.generateTopUV(n,s,Q-3,Q-2,Q-1);P(ut[0]),P(ut[1]),P(ut[2])}function Gt(st,tt,K,Q){te(st),te(tt),te(Q),te(tt),te(K),te(Q);let ut=s.length/3,at=b.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);P(at[0]),P(at[1]),P(at[3]),P(at[1]),P(at[2]),P(at[3])}function te(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function P(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return o0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wh[s.type]().fromJSON(s)),new i(n,t.options)}},r0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-m),new ct(x,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-m),new ct(g,1-p)]}};function o0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ln=class i extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vn=class i extends ur{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ln=class i extends ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*d-o;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,y=b+c*(p+1),R=b+1+c*(p+1),A=b+1+c*p;f.push(S,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pr=class i extends ne{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new M,m=new ct;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let b=p+g,S=b,y=b+n+1,R=b+n+2,A=b+1;a.push(S,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ro=class i extends ne{constructor(t=new us([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let b=m[g];si.isClockWise(b)===!0&&(m[g]=b.reverse())}let x=si.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let b=m[g];f=f.concat(b)}for(let g=0,p=f.length;g<p;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,p=x.length;g<p;g++){let b=x[g],S=b[0]+u,y=b[1]+u,R=b[2]+u;n.push(S,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return a0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function a0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var $n=class i extends ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new M,d=new M,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=h[p][b+1],y=h[p][b],R=h[p+1][b],A=h[p+1][b+1];(p!==0||o>0)&&f.push(S,y,A),(p!==n-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Po=class i extends ur{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Un=class i extends ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new M,u=new M,d=new M;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,b=(s+1)*f+m;o.push(x,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var cn=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var hn=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ll=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function za(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function l0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=t,a=2*e-n;break;case Sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=t,l=2*n-e;break;case Sh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+b*o[c+R]+S*o[l+R]+y*o[u+R];return r}},ul=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},dl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=za(e,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:za(t.times,Array),values:za(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&l0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ya;var Bi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=no;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};fl.prototype.ValueTypeName="color";var pl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="number";var ml=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ce.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Nn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=no;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};gl.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},_l=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Lf=new _l,mr=class{constructor(t){this.manager=t!==void 0?t:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=new WeakMap,xl=class extends mr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ha.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Js.get(o);u===void 0&&(u=[],Js.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=er("img");function l(){h(),e&&e(this);let u=Js.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Js.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ha.remove(`image:${t}`);let d=Js.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Js.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ha.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Do=class extends mr{constructor(t){super(t)}load(t,e,n,s){let r=new an,o=new xl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Lo=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ps=class extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},xh=new oe,Id=new M,Dd=new M,Ch=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Id.setFromMatrixPosition(t.matrixWorld),e.position.copy(Id),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uo=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rh=class extends Ch{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yl=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kh="\\[\\]\\.:\\/",c0=new RegExp("["+Kh+"]","g"),$h="[^"+Kh+"]",h0="[^"+Kh.replace("\\.","")+"]",u0=/((?:WC+[\/:])*)/.source.replace("WC",$h),d0=/(WCOD+)?/.source.replace("WCOD",h0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),m0=new RegExp("^"+u0+d0+f0+p0+"$"),g0=["material","materials","bones","map"],Ph=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let e=m0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Ph;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nS=new Float32Array(1);var Ld=new oe,gs=class{constructor(t,e,n=0,s=1/0){this.ray=new Oi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(t,e=!0,n=[]){return Ih(t,this,n,e),n.sort(Ud),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ih(t[s],this,n,e);return n.sort(Ud),n}};function Ud(i,t){return i.distance-t.distance}function Ih(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ih(r[o],t,e,!0)}}var gr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Nd=new M,ka=new M,Ks=new M,$s=new M,yh=new M,_0=new M,x0=new M,No=class{constructor(t=new M,e=new M){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Nd.subVectors(t,this.start),ka.subVectors(this.end,this.start);let n=ka.dot(ka),r=ka.dot(Nd)/n;return e&&(r=Jt(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=_0,n=x0){let s=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;Ks.subVectors(c,a),$s.subVectors(h,l),yh.subVectors(a,l);let u=Ks.dot(Ks),d=$s.dot($s),f=$s.dot(yh);if(u<=s&&d<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(u<=s)r=0,o=f/d,o=Jt(o,0,1);else{let m=Ks.dot(yh);if(d<=s)o=0,r=Jt(-m/u,0,1);else{let x=Ks.dot($s),g=u*d-x*x;g!==0?r=Jt((x*f-m*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=Jt(-m/u,0,1)):o>1&&(o=1,r=Jt((x-m)/u,0,1))}}return e.copy(a).add(Ks.multiplyScalar(r)),n.copy(l).add($s.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Fo=class extends mo{constructor(t=10,e=10,n=4473924,s=8947848){n=new kt(n),s=new kt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new ne;h.setAttribute("position",new Bt(l,3)),h.setAttribute("color",new Bt(c,3));let u=new hi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Va=new He,Oo=class extends mo{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ne;r.setIndex(new ve(n,1)),r.setAttribute("position",new ve(s,3)),super(r,new hi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Va.setFromObject(this.object),Va.isEmpty())return;let t=Va.min,e=Va.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var _s=class extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function jh(i,t,e,n){let s=y0(n);switch(e){case Vh:return i*t;case Ll:return i*t/s.components*s.byteLength;case Ul:return i*t/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case Nl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case kl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function y0(i){switch(i){case jn:case Oh:return{byteLength:1,components:1};case xr:case Bh:case yr:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case Vi:case Pl:case Qn:return{byteLength:4,components:1};case zh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ip(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function w0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
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
#endif`,b_=`struct PhysicalMaterial {
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
}`,w_=`
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Gx=`#define MATCAP
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
}`,Hx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,Kx=`#define TOON
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
}`,$x=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,ey=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:T0,alphahash_pars_fragment:E0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:D0,batching_pars_vertex:L0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:H0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:K0,displacementmap_pars_vertex:$0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:y_,lights_phong_fragment:v_,lights_phong_pars_fragment:M_,lights_physical_fragment:S_,lights_physical_pars_fragment:b_,lights_fragment_begin:w_,lights_fragment_maps:T_,lights_fragment_end:E_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:P_,map_fragment:I_,map_pars_fragment:D_,map_particle_fragment:L_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:V_,normal_fragment_begin:G_,normal_fragment_maps:H_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:$_,opaque_fragment:j_,packing:Q_,premultiplied_alpha_fragment:tx,project_vertex:ex,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:ax,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:_x,transmission_fragment:xx,transmission_pars_fragment:yx,uv_pars_fragment:vx,uv_pars_vertex:Mx,uv_vertex:Sx,worldpos_vertex:bx,background_vert:wx,background_frag:Tx,backgroundCube_vert:Ex,backgroundCube_frag:Ax,cube_vert:Cx,cube_frag:Rx,depth_vert:Px,depth_frag:Ix,distanceRGBA_vert:Dx,distanceRGBA_frag:Lx,equirect_vert:Ux,equirect_frag:Nx,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:kx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Hx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Kx,meshtoon_frag:$x,points_vert:jx,points_frag:Qx,shadow_vert:ty,shadow_frag:ey,sprite_vert:ny,sprite_frag:iy},Tt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},fi={basic:{uniforms:un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:un([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:un([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:un([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:un([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:un([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:un([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:un([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:un([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:un([Tt.common,Tt.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:un([Tt.lights,Tt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};fi.physical={uniforms:un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var dc={r:0,b:0,g:0},Ms=new Je,sy=new oe;function ry(i,t,e,n,s,r,o){let a=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1,R=m(S);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){let R=m(y);R&&(R.isCubeTexture||R.mapping===zo)?(h===void 0&&(h=new ot(new Yt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:vs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(y.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Ms)),h.material.toneMapped=ae.getTransfer(R.colorSpace)!==fe,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ot(new ln(2,2),new Kn({name:"BackgroundMaterial",uniforms:vs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(R.colorSpace)!==fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(dc,Zh(i)),n.buffers.color.setClear(dc.r,dc.g,dc.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:g,dispose:b}}function oy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,D,F,V,G){let k=!1,H=u(V,F,D);r!==H&&(r=H,c(r.object)),k=f(v,V,F,G),k&&m(v,V,F,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(v,D,F,V),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,D,F){let V=F.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let k=G[D.id];k===void 0&&(k={},G[D.id]=k);let H=k[V];return H===void 0&&(H=d(l()),k[V]=H),H}function d(v){let D=[],F=[],V=[];for(let G=0;G<e;G++)D[G]=0,F[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,D,F,V){let G=r.attributes,k=D.attributes,H=0,j=F.getAttributes();for(let W in j)if(j[W].location>=0){let ft=G[W],$=k[W];if($===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),ft===void 0||ft.attribute!==$||$&&ft.data!==$.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function m(v,D,F,V){let G={},k=D.attributes,H=0,j=F.getAttributes();for(let W in j)if(j[W].location>=0){let ft=k[W];ft===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor));let $={};$.attribute=ft,ft&&ft.data&&($.data=ft.data),G[W]=$,H++}r.attributes=G,r.attributesNum=H,r.index=V}function x(){let v=r.newAttributes;for(let D=0,F=v.length;D<F;D++)v[D]=0}function g(v){p(v,0)}function p(v,D){let F=r.newAttributes,V=r.enabledAttributes,G=r.attributeDivisors;F[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),G[v]!==D&&(i.vertexAttribDivisor(v,D),G[v]=D)}function b(){let v=r.newAttributes,D=r.enabledAttributes;for(let F=0,V=D.length;F<V;F++)D[F]!==v[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function S(v,D,F,V,G,k,H){H===!0?i.vertexAttribIPointer(v,D,F,G,k):i.vertexAttribPointer(v,D,F,V,G,k)}function y(v,D,F,V){x();let G=V.attributes,k=F.getAttributes(),H=D.defaultAttributeValues;for(let j in k){let W=k[j];if(W.location>=0){let nt=G[j];if(nt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){let ft=nt.normalized,$=nt.itemSize,Mt=t.get(nt);if(Mt===void 0)continue;let Et=Mt.buffer,Ot=Mt.type,It=Mt.bytesPerElement,Y=Ot===i.INT||Ot===i.UNSIGNED_INT||nt.gpuType===Pl;if(nt.isInterleavedBufferAttribute){let it=nt.data,wt=it.stride,Pt=nt.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)p(W.location+At,it.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<W.locationSize;At++)g(W.location+At);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let At=0;At<W.locationSize;At++)S(W.location+At,$/W.locationSize,Ot,ft,wt*It,(Pt+$/W.locationSize*At)*It,Y)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<W.locationSize;it++)p(W.location+it,nt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<W.locationSize;it++)g(W.location+it);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let it=0;it<W.locationSize;it++)S(W.location+it,$/W.locationSize,Ot,ft,$*It,$/W.locationSize*it*It,Y)}}else if(H!==void 0){let ft=H[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}b()}function R(){L();for(let v in n){let D=n[v];for(let F in D){let V=D[F];for(let G in V)h(V[G].object),delete V[G];delete D[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let D=n[v.id];for(let F in D){let V=D[F];for(let G in V)h(V[G].object),delete V[G];delete D[F]}delete n[v.id]}function I(v){for(let D in n){let F=n[D];if(F[v.id]===void 0)continue;let V=F[v.id];for(let G in V)h(V[G].object),delete V[G];delete F[v.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function ay(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ly(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==jn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Qn&&!L)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function cy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new on,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,S=b*4,y=p.clippingState||null;l.value=y,y=h(m,d,S,f);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function hy(i){let t=new WeakMap;function e(o,a){return a===_r?o.mapping=xs:a===Cl&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_r||a===Cl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var br=4,Uf=[.125,.215,.35,.446,.526,.582],ws=20,Qh=new Uo,Nf=new kt,tu=null,eu=0,nu=0,iu=!1,bs=(1+Math.sqrt(5))/2,Sr=1/bs,Ff=[new M(-bs,Sr,0),new M(bs,Sr,0),new M(-Sr,0,bs),new M(Sr,0,bs),new M(0,bs,-Sr),new M(0,bs,Sr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],uy=new M,Tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=uy}=r;tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,fc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:yr,format:wn,colorSpace:cs,depthBuffer:!1},s=Of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(r)),this._blurMaterial=fy(r,t,e)}return s}_compileMaterial(t){let e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,Qh)}_sceneToCubeUV(t,e,n,s,r){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nf),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new ze({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new ot(new Yt,x),p=!1,b=t.background;b?b.isColor&&(x.color.copy(b),t.background=null,p=!0):(x.color.copy(Nf),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let R=this._cubeSize;fc(s,y*R,S>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;fc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ff[(s-r-1)%Ff.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ws-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ws;g>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);let p=[],b=0;for(let I=0;I<ws;++I){let L=I/x,w=Math.exp(-L*L/2);p.push(w),I===0?b+=w:I<g&&(b+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-br?s-S+br:0),A=4*(this._cubeSize-y);fc(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Qh)}};function dy(i){let t=[],e=[],n=[],s=i,r=i-br+1+Uf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-br?l=Uf[o-i+br-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),S=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,L=A>2?0:-1,w=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];b.set(w,x*m*A),S.set(d,g*m*A);let v=[A,A,A,A,A,A];y.set(v,p*m*A)}let R=new ne;R.setAttribute("position",new ve(b,x)),R.setAttribute("uv",new ve(S,g)),R.setAttribute("faceIndex",new ve(y,p)),t.push(R),s>br&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Of(i,t,e){let n=new li(i,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fy(i,t,e){let n=new Float32Array(ws),s=new M(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bf(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zf(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function py(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_r||l===Cl,h=l===xs||l===ys;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Tr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Tr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function my(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gy(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let S=0,y=b.length;S<y;S+=3){let R=b[S+0],A=b[S+1],I=b[S+2];d.push(R,A,A,I,I,R)}}else if(m!==void 0){let b=m.array;x=m.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let R=S+0,A=S+1,I=S+2;d.push(R,A,A,I,I,R)}}else return;let g=new(Yh(d)?ao:oo)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function _y(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*x[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yy(i,t,e){let n=new WeakMap,s=new De;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*R*4*u),I=new ro(A,y,R,u);I.type=Qn,I.needsUpdate=!0;let L=S*4;for(let v=0;v<u;v++){let D=g[v],F=p[v],V=b[v],G=y*R*4*v;for(let k=0;k<D.count;k++){let H=k*L;f===!0&&(s.fromBufferAttribute(D,k),A[G+H+0]=s.x,A[G+H+1]=s.y,A[G+H+2]=s.z,A[G+H+3]=0),m===!0&&(s.fromBufferAttribute(F,k),A[G+H+4]=s.x,A[G+H+5]=s.y,A[G+H+6]=s.z,A[G+H+7]=0),x===!0&&(s.fromBufferAttribute(V,k),A[G+H+8]=s.x,A[G+H+9]=s.y,A[G+H+10]=s.z,A[G+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ct(y,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vy(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var sp=new an,kf=new _o(1,1),rp=new ro,op=new $a,ap=new co,Vf=[],Gf=[],Hf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vf[s];if(r===void 0&&(r=new Float32Array(s),Vf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gc(i,t){let e=Gf[t];e===void 0&&(e=new Int32Array(t),Gf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function My(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Ty(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Xf.set(n),i.uniformMatrix2fv(this.addr,!1,Xf),Xe(e,n)}}function Ey(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Wf.set(n),i.uniformMatrix3fv(this.addr,!1,Wf),Xe(e,n)}}function Ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Hf.set(n),i.uniformMatrix4fv(this.addr,!1,Hf),Xe(e,n)}}function Cy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Dy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function Fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kf.compareFunction=Wh,r=kf):r=sp,e.setTexture2D(t||r,s)}function Oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||op,s)}function By(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ap,s)}function zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rp,s)}function ky(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return by;case 35666:return wy;case 35674:return Ty;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Ly;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function Vy(i,t){i.uniform1fv(this.addr,t)}function Gy(i,t){let e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function Hy(i,t){let e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function Wy(i,t){let e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function Xy(i,t){let e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qy(i,t){let e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yy(i,t){let e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zy(i,t){i.uniform1iv(this.addr,t)}function Jy(i,t){i.uniform2iv(this.addr,t)}function Ky(i,t){i.uniform3iv(this.addr,t)}function $y(i,t){i.uniform4iv(this.addr,t)}function jy(i,t){i.uniform1uiv(this.addr,t)}function Qy(i,t){i.uniform2uiv(this.addr,t)}function tv(i,t){i.uniform3uiv(this.addr,t)}function ev(i,t){i.uniform4uiv(this.addr,t)}function nv(i,t,e){let n=this.cache,s=t.length,r=gc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sp,r[o])}function iv(i,t,e){let n=this.cache,s=t.length,r=gc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||op,r[o])}function sv(i,t,e){let n=this.cache,s=t.length,r=gc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ap,r[o])}function rv(i,t,e){let n=this.cache,s=t.length,r=gc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rp,r[o])}function ov(i){switch(i){case 5126:return Vy;case 35664:return Gy;case 35665:return Hy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Qy;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}var ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ky(e.type)}},ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ov(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},su=/(\w+)(\])?(\[|\.)?/g;function qf(i,t){i.seq.push(t),i.map[t.id]=t}function av(i,t,e){let n=i.name,s=n.length;for(su.lastIndex=0;;){let r=su.exec(n),o=su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qf(e,c===void 0?new ru(a,i,t):new ou(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new au(a),qf(e,u)),e=u}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);av(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lv=37297,cv=0;function hv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zf=new $t;function uv(i){ae._getMatrix(Zf,ae.workingColorSpace,i);let t=`mat3( ${Zf.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hv(i.getShaderSource(t),a)}else return r}function dv(i,t){let e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fv(i,t){let e;switch(t){case of:e="Linear";break;case af:e="Reinhard";break;case lf:e="Cineon";break;case cf:e="ACESFilmic";break;case uf:e="AgX";break;case df:e="Neutral";break;case hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pc=new M;function pv(){ae.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function gv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _v(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qo(i){return i!==""}function Kf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $f(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(xv,vv)}var yv=new Map;function vv(i,t){let e=ee[t];if(e===void 0){let n=yv.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lu(e)}var Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(i){return i.replace(Mv,Sv)}function Sv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Ev(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case rf:t="ENVMAP_BLENDING_ADD";break}return t}function Av(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bv(e),c=wv(e),h=Tv(e),u=Ev(e),d=Av(e),f=mv(e),m=gv(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(g=[Qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[Qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?ee.tonemapping_pars_fragment:"",e.toneMapping!==wi?fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=lu(o),o=Kf(o,e),o=$f(o,e),a=lu(a),a=Kf(a,e),a=$f(a,e),o=jf(o),a=jf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+o,y=b+p+a,R=Yf(s,s.VERTEX_SHADER,S),A=Yf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(A)||"",k=F.trim(),H=V.trim(),j=G.trim(),W=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,A);else{let ft=Jf(s,R,"vertex"),$=Jf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+ft+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||j==="")&&(nt=!1);nt&&(D.diagnostics={runnable:W,programLog:k,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:p}})}s.deleteShader(R),s.deleteShader(A),L=new wr(s,x),w=_v(s,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,lv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var Rv=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hu(t),e.set(t,n)),n}},hu=class{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}};function Pv(i,t,e,n,s,r,o){let a=new sr,l=new cu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,v,D,F,V){let G=F.fog,k=V.geometry,H=w.isMeshStandardMaterial?F.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),W=j&&j.mapping===zo?j.image.height:null,nt=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=ft!==void 0?ft.length:0,Mt=0;k.morphAttributes.position!==void 0&&(Mt=1),k.morphAttributes.normal!==void 0&&(Mt=2),k.morphAttributes.color!==void 0&&(Mt=3);let Et,Ot,It,Y;if(nt){let ue=fi[nt];Et=ue.vertexShader,Ot=ue.fragmentShader}else Et=w.vertexShader,Ot=w.fragmentShader,l.update(w),It=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);let it=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Pt=V.isInstancedMesh===!0,At=V.isBatchedMesh===!0,Gt=!!w.map,te=!!w.matcap,P=!!j,st=!!w.aoMap,tt=!!w.lightMap,K=!!w.bumpMap,Q=!!w.normalMap,ut=!!w.displacementMap,at=!!w.emissiveMap,St=!!w.metalnessMap,Xt=!!w.roughnessMap,Wt=w.anisotropy>0,E=w.clearcoat>0,_=w.dispersion>0,C=w.iridescence>0,N=w.sheen>0,Z=w.transmission>0,z=Wt&&!!w.anisotropyMap,dt=E&&!!w.clearcoatMap,et=E&&!!w.clearcoatNormalMap,ht=E&&!!w.clearcoatRoughnessMap,lt=C&&!!w.iridescenceMap,J=C&&!!w.iridescenceThicknessMap,_t=N&&!!w.sheenColorMap,Lt=N&&!!w.sheenRoughnessMap,pt=!!w.specularMap,xt=!!w.specularColorMap,Ft=!!w.specularIntensityMap,U=Z&&!!w.transmissionMap,gt=Z&&!!w.thicknessMap,bt=!!w.gradientMap,Rt=!!w.alphaMap,mt=w.alphaTest>0,rt=!!w.alphaHash,Nt=!!w.extensions,jt=wi;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(jt=i.toneMapping);let Se={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:Et,fragmentShader:Ot,defines:w.defines,customVertexShaderID:It,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:At,batchingColor:At&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:cs,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:te,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:tt,bumpMap:K,normalMap:Q,displacementMap:d&&ut,emissiveMap:at,normalMapObjectSpace:Q&&w.normalMapType===gf,normalMapTangentSpace:Q&&w.normalMapType===uc,metalnessMap:St,roughnessMap:Xt,anisotropy:Wt,anisotropyMap:z,clearcoat:E,clearcoatMap:dt,clearcoatNormalMap:et,clearcoatRoughnessMap:ht,dispersion:_,iridescence:C,iridescenceMap:lt,iridescenceThicknessMap:J,sheen:N,sheenColorMap:_t,sheenRoughnessMap:Lt,specularMap:pt,specularColorMap:xt,specularIntensityMap:Ft,transmission:Z,transmissionMap:U,thicknessMap:gt,gradientMap:bt,opaque:w.transparent===!1&&w.blending===as&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:mt,alphaHash:rt,combine:w.combine,mapUv:Gt&&x(w.map.channel),aoMapUv:st&&x(w.aoMap.channel),lightMapUv:tt&&x(w.lightMap.channel),bumpMapUv:K&&x(w.bumpMap.channel),normalMapUv:Q&&x(w.normalMap.channel),displacementMapUv:ut&&x(w.displacementMap.channel),emissiveMapUv:at&&x(w.emissiveMap.channel),metalnessMapUv:St&&x(w.metalnessMap.channel),roughnessMapUv:Xt&&x(w.roughnessMap.channel),anisotropyMapUv:z&&x(w.anisotropyMap.channel),clearcoatMapUv:dt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(w.sheenRoughnessMap.channel),specularMapUv:pt&&x(w.specularMap.channel),specularColorMapUv:xt&&x(w.specularColorMap.channel),specularIntensityMapUv:Ft&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:gt&&x(w.thicknessMap.channel),alphaMapUv:Rt&&x(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Q||Wt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(Gt||Rt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&ae.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ve,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(w){let v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)v.push(D),v.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(b(v,w),S(v,w),v.push(i.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function b(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function S(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let v=m[w.type],D;if(v){let F=fi[v];D=Af.clone(F.uniforms)}else D=w.uniforms;return D}function R(w,v){let D;for(let F=0,V=h.length;F<V;F++){let G=h[F];if(G.cacheKey===v){D=G,++D.usedTimes;break}}return D===void 0&&(D=new Cv(i,v,w,r),h.push(D)),D}function A(w){if(--w.usedTimes===0){let v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function I(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:L}}function Iv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ep(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Dv),n.length>1&&n.sort(d||tp),s.length>1&&s.sort(d||tp)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Lv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ep,i.set(n,[o])):s>=r.length?(o=new ep,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new kt};break;case"SpotLight":e={position:new M,direction:new M,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new M,halfWidth:new M,halfHeight:new M};break}return i[t.id]=e,e}}}function Nv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fv=0;function Ov(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bv(i){let t=new Uv,e=Nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);let s=new M,r=new oe,o=new oe;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,S=0,y=0,R=0,A=0,I=0;c.sort(Ov);for(let w=0,v=c.length;w<v;w++){let D=c[w],F=D.color,V=D.intensity,G=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*V,u+=F.g*V,d+=F.b*V;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],V);I++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=H,f++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=G,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[x]=H;let j=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,j.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=j.matrix,D.castShadow){let W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=k,y++}x++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=H,g++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let j=D.shadow,W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=D.shadow.matrix,S++}n.point[m]=H,m++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(V),H.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=I,n.version=Fv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function np(i){let t=new Bv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new np(i),t.set(s,[a])):r>=o.length?(a=new np(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`;function Gv(i,t,e){let n=new hr,s=new ct,r=new ct,o=new De,a=new ll({depthPacking:mf}),l=new cl,c={},h=e.maxTextureSize,u={[Zn]:Qe,[Qe]:Zn,[Ve]:Ve},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:kv,fragmentShader:Vv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ne;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(A,I,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==di&&this.type===di,G=p===di&&this.type!==di;for(let k=0,H=A.length;k<H;k++){let j=A[k],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let nt=W.getFrameExtents();if(s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||V===!0||G===!0){let $=this.type!==di?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new li(s.x,s.y,$),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ft=W.getViewportCount();for(let $=0;$<ft;$++){let Mt=W.getViewport($);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),F.viewport(o),W.updateMatrices(j,$),n=W.getFrustum(),y(I,L,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===di&&b(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,v,D)};function b(A,I){let L=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,L,f,x,null)}function S(A,I,L,w){let v=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=v.uuid,V=I.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let k=G[V];k===void 0&&(k=v.clone(),G[V]=k,I.addEventListener("dispose",R)),v=k}if(v.visible=I.visible,v.wireframe=I.wireframe,w===di?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=L}return v}function y(A,I,L,w,v){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===di)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let V=t.update(A),G=A.material;if(Array.isArray(G)){let k=V.groups;for(let H=0,j=k.length;H<j;H++){let W=k[H],nt=G[W.materialIndex];if(nt&&nt.visible){let ft=S(A,nt,w,v);A.onBeforeShadow(i,A,I,L,V,ft,W),i.renderBufferDirect(L,null,V,ft,A,W),A.onAfterShadow(i,A,I,L,V,ft,W)}}}else if(G.visible){let k=S(A,G,w,v);A.onBeforeShadow(i,A,I,L,V,k,null),i.renderBufferDirect(L,null,V,k,A,null),A.onAfterShadow(i,A,I,L,V,k,null)}}let F=A.children;for(let V=0,G=F.length;V<G;V++)y(F[V],I,L,w,v)}function R(A){A.target.removeEventListener("dispose",R);for(let L in c){let w=c[L],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}var Hv={[vl]:Ml,[Sl]:Tl,[bl]:El,[ls]:wl,[Ml]:vl,[Tl]:Sl,[El]:bl,[wl]:ls};function Wv(i,t){function e(){let U=!1,gt=new De,bt=null,Rt=new De(0,0,0,0);return{setMask:function(mt){bt!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),bt=mt)},setLocked:function(mt){U=mt},setClear:function(mt,rt,Nt,jt,Se){Se===!0&&(mt*=jt,rt*=jt,Nt*=jt),gt.set(mt,rt,Nt,jt),Rt.equals(gt)===!1&&(i.clearColor(mt,rt,Nt,jt),Rt.copy(gt))},reset:function(){U=!1,bt=null,Rt.set(-1,0,0,0)}}}function n(){let U=!1,gt=!1,bt=null,Rt=null,mt=null;return{setReversed:function(rt){if(gt!==rt){let Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let jt=mt;mt=null,this.setClear(jt)}},getReversed:function(){return gt},setTest:function(rt){rt?it(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(rt){bt!==rt&&!U&&(i.depthMask(rt),bt=rt)},setFunc:function(rt){if(gt&&(rt=Hv[rt]),Rt!==rt){switch(rt){case vl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=rt}},setLocked:function(rt){U=rt},setClear:function(rt){mt!==rt&&(gt&&(rt=1-rt),i.clearDepth(rt),mt=rt)},reset:function(){U=!1,bt=null,Rt=null,mt=null,gt=!1}}}function s(){let U=!1,gt=null,bt=null,Rt=null,mt=null,rt=null,Nt=null,jt=null,Se=null;return{setTest:function(ue){U||(ue?it(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ue){gt!==ue&&!U&&(i.stencilMask(ue),gt=ue)},setFunc:function(ue,gi,ii){(bt!==ue||Rt!==gi||mt!==ii)&&(i.stencilFunc(ue,gi,ii),bt=ue,Rt=gi,mt=ii)},setOp:function(ue,gi,ii){(rt!==ue||Nt!==gi||jt!==ii)&&(i.stencilOp(ue,gi,ii),rt=ue,Nt=gi,jt=ii)},setLocked:function(ue){U=ue},setClear:function(ue){Se!==ue&&(i.clearStencil(ue),Se=ue)},reset:function(){U=!1,gt=null,bt=null,Rt=null,mt=null,rt=null,Nt=null,jt=null,Se=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,S=null,y=null,R=null,A=null,I=new kt(0,0,0),L=0,w=!1,v=null,D=null,F=null,V=null,G=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let nt=null,ft={},$=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Et=new De().fromArray($),Ot=new De().fromArray(Mt);function It(U,gt,bt,Rt){let mt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(U,rt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<bt;Nt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(gt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return rt}let Y={};Y[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(ls),K(!1),Q(Dh),it(i.CULL_FACE),st(bi);function it(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function wt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pt(U,gt){return u[U]!==gt?(i.bindFramebuffer(U,gt),u[U]=gt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function At(U,gt){let bt=f,Rt=!1;if(U){bt=d.get(gt),bt===void 0&&(bt=[],d.set(gt,bt));let mt=U.textures;if(bt.length!==mt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Nt=mt.length;rt<Nt;rt++)bt[rt]=i.COLOR_ATTACHMENT0+rt;bt.length=mt.length,Rt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(bt)}function Gt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let te={[Fi]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};te[Gd]=i.MIN,te[Hd]=i.MAX;let P={[Wd]:i.ZERO,[Xd]:i.ONE,[qd]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Jd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[tf]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[nf]:i.ONE_MINUS_CONSTANT_ALPHA};function st(U,gt,bt,Rt,mt,rt,Nt,jt,Se,ue){if(U===bi){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),U!==zd){if(U!==g||ue!==w){if((p!==Fi||y!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,y=Fi),ue)switch(U){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,R=null,A=null,I.set(0,0,0),L=0,g=U,w=ue}return}mt=mt||gt,rt=rt||bt,Nt=Nt||Rt,(gt!==p||mt!==y)&&(i.blendEquationSeparate(te[gt],te[mt]),p=gt,y=mt),(bt!==b||Rt!==S||rt!==R||Nt!==A)&&(i.blendFuncSeparate(P[bt],P[Rt],P[rt],P[Nt]),b=bt,S=Rt,R=rt,A=Nt),(jt.equals(I)===!1||Se!==L)&&(i.blendColor(jt.r,jt.g,jt.b,Se),I.copy(jt),L=Se),g=U,w=!1}function tt(U,gt){U.side===Ve?wt(i.CULL_FACE):it(i.CULL_FACE);let bt=U.side===Qe;gt&&(bt=!bt),K(bt),U.blending===as&&U.transparent===!1?st(bi):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Rt=U.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function Q(U){U!==Fd?(it(i.CULL_FACE),U!==D&&(U===Dh?i.cullFace(i.BACK):U===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),D=U}function ut(U){U!==F&&(H&&i.lineWidth(U),F=U)}function at(U,gt,bt){U?(it(i.POLYGON_OFFSET_FILL),(V!==gt||G!==bt)&&(i.polygonOffset(gt,bt),V=gt,G=bt)):wt(i.POLYGON_OFFSET_FILL)}function St(U){U?it(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Xt(U){U===void 0&&(U=i.TEXTURE0+k-1),nt!==U&&(i.activeTexture(U),nt=U)}function Wt(U,gt,bt){bt===void 0&&(nt===null?bt=i.TEXTURE0+k-1:bt=nt);let Rt=ft[bt];Rt===void 0&&(Rt={type:void 0,texture:void 0},ft[bt]=Rt),(Rt.type!==U||Rt.texture!==gt)&&(nt!==bt&&(i.activeTexture(bt),nt=bt),i.bindTexture(U,gt||Y[U]),Rt.type=U,Rt.texture=gt)}function E(){let U=ft[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(U){Et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function Lt(U){Ot.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ot.copy(U))}function pt(U,gt){let bt=c.get(gt);bt===void 0&&(bt=new WeakMap,c.set(gt,bt));let Rt=bt.get(U);Rt===void 0&&(Rt=i.getUniformBlockIndex(gt,U.name),bt.set(U,Rt))}function xt(U,gt){let Rt=c.get(gt).get(U);l.get(gt)!==Rt&&(i.uniformBlockBinding(gt,Rt,U.__bindingPointIndex),l.set(gt,Rt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,ft={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,S=null,y=null,R=null,A=null,I=new kt(0,0,0),L=0,w=!1,v=null,D=null,F=null,V=null,G=null,Et.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:wt,bindFramebuffer:Pt,drawBuffers:At,useProgram:Gt,setBlending:st,setMaterial:tt,setFlipSided:K,setCullFace:Q,setLineWidth:ut,setPolygonOffset:at,setScissorTest:St,activeTexture:Xt,bindTexture:Wt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:C,texImage2D:lt,texImage3D:J,updateUBOMapping:pt,uniformBlockBinding:xt,texStorage2D:et,texStorage3D:ht,texSubImage2D:N,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:dt,scissor:_t,viewport:Lt,reset:Ft}}function Xv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return f?new OffscreenCanvas(E,_):er("canvas")}function x(E,_,C){let N=1,Z=Wt(E);if((Z.width>C||Z.height>C)&&(N=C/Math.max(Z.width,Z.height)),N<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let z=Math.floor(N*Z.width),dt=Math.floor(N*Z.height);u===void 0&&(u=m(z,dt));let et=_?m(z,dt):u;return et.width=z,et.height=dt,et.getContext("2d").drawImage(E,0,0,z,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+dt+")."),et}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,C,N,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=_;if(_===i.RED&&(C===i.FLOAT&&(z=i.R32F),C===i.HALF_FLOAT&&(z=i.R16F),C===i.UNSIGNED_BYTE&&(z=i.R8)),_===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(z=i.R8UI),C===i.UNSIGNED_SHORT&&(z=i.R16UI),C===i.UNSIGNED_INT&&(z=i.R32UI),C===i.BYTE&&(z=i.R8I),C===i.SHORT&&(z=i.R16I),C===i.INT&&(z=i.R32I)),_===i.RG&&(C===i.FLOAT&&(z=i.RG32F),C===i.HALF_FLOAT&&(z=i.RG16F),C===i.UNSIGNED_BYTE&&(z=i.RG8)),_===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(z=i.RG8UI),C===i.UNSIGNED_SHORT&&(z=i.RG16UI),C===i.UNSIGNED_INT&&(z=i.RG32UI),C===i.BYTE&&(z=i.RG8I),C===i.SHORT&&(z=i.RG16I),C===i.INT&&(z=i.RG32I)),_===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(z=i.RGB8UI),C===i.UNSIGNED_SHORT&&(z=i.RGB16UI),C===i.UNSIGNED_INT&&(z=i.RGB32UI),C===i.BYTE&&(z=i.RGB8I),C===i.SHORT&&(z=i.RGB16I),C===i.INT&&(z=i.RGB32I)),_===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),C===i.UNSIGNED_INT&&(z=i.RGBA32UI),C===i.BYTE&&(z=i.RGBA8I),C===i.SHORT&&(z=i.RGBA16I),C===i.INT&&(z=i.RGBA32I)),_===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),_===i.RGBA){let dt=Z?io:ae.getTransfer(N);C===i.FLOAT&&(z=i.RGBA32F),C===i.HALF_FLOAT&&(z=i.RGBA16F),C===i.UNSIGNED_BYTE&&(z=dt===fe?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(E,_){let C;return E?_===null||_===Vi||_===vr?C=i.DEPTH24_STENCIL8:_===Qn?C=i.DEPTH32F_STENCIL8:_===xr&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vi||_===vr?C=i.DEPTH_COMPONENT24:_===Qn?C=i.DEPTH_COMPONENT32F:_===xr&&(C=i.DEPTH_COMPONENT16),C}function R(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Mn&&E.minFilter!==je?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&h.delete(_)}function I(E){let _=E.target;_.removeEventListener("dispose",I),v(_)}function L(E){let _=n.get(E);if(_.__webglInit===void 0)return;let C=E.source,N=d.get(C);if(N){let Z=N[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(E),Object.keys(N).length===0&&d.delete(C)}n.remove(E)}function w(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let C=E.source,N=d.get(C);delete N[_.__cacheKey],o.memory.textures--}function v(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let Z=0;Z<_.__webglFramebuffer[N].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[N][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)i.deleteFramebuffer(_.__webglFramebuffer[N]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let C=E.textures;for(let N=0,Z=C.length;N<Z;N++){let z=n.get(C[N]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(C[N])}n.remove(E)}let D=0;function F(){D=0}function V(){let E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function G(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){let C=n.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&C.__version!==E.version){let N=E.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(C,E,_);return}}else E.isExternalTexture&&(C.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+_)}function H(E,_){let C=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){Y(C,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+_)}function j(E,_){let C=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){Y(C,E,_);return}e.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+_)}function W(E,_){let C=n.get(E);if(E.version>0&&C.__version!==E.version){it(C,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+_)}let nt={[oi]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},ft={[Mn]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},$={[_f]:i.NEVER,[bf]:i.ALWAYS,[xf]:i.LESS,[Wh]:i.LEQUAL,[yf]:i.EQUAL,[Sf]:i.GEQUAL,[vf]:i.GREATER,[Mf]:i.NOTEQUAL};function Mt(E,_){if(_.type===Qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===je||_.magFilter===Rl||_.magFilter===ko||_.magFilter===bn||_.minFilter===je||_.minFilter===Rl||_.minFilter===ko||_.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,nt[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,nt[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,nt[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,$[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Mn||_.minFilter!==ko&&_.minFilter!==bn||_.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Et(E,_){let C=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let N=_.source,Z=d.get(N);Z===void 0&&(Z={},d.set(N,Z));let z=G(_);if(z!==E.__cacheKey){Z[z]===void 0&&(Z[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),Z[z].usedTimes++;let dt=Z[E.__cacheKey];dt!==void 0&&(Z[E.__cacheKey].usedTimes--,dt.usedTimes===0&&w(_)),E.__cacheKey=z,E.__webglTexture=Z[z].texture}return C}function Ot(E,_,C){return Math.floor(Math.floor(E/C)/_)}function It(E,_,C,N){let z=E.updateRanges;if(z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,C,N,_.data);else{z.sort((J,_t)=>J.start-_t.start);let dt=0;for(let J=1;J<z.length;J++){let _t=z[dt],Lt=z[J],pt=_t.start+_t.count,xt=Ot(Lt.start,_.width,4),Ft=Ot(_t.start,_.width,4);Lt.start<=pt+1&&xt===Ft&&Ot(Lt.start+Lt.count-1,_.width,4)===xt?_t.count=Math.max(_t.count,Lt.start+Lt.count-_t.start):(++dt,z[dt]=Lt)}z.length=dt+1;let et=i.getParameter(i.UNPACK_ROW_LENGTH),ht=i.getParameter(i.UNPACK_SKIP_PIXELS),lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let J=0,_t=z.length;J<_t;J++){let Lt=z[J],pt=Math.floor(Lt.start/4),xt=Math.ceil(Lt.count/4),Ft=pt%_.width,U=Math.floor(pt/_.width),gt=xt,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ft,U,gt,bt,C,N,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,et),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function Y(E,_,C){let N=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=i.TEXTURE_3D);let Z=Et(E,_),z=_.source;e.bindTexture(N,E.__webglTexture,i.TEXTURE0+C);let dt=n.get(z);if(z.version!==dt.__version||Z===!0){e.activeTexture(i.TEXTURE0+C);let et=ae.getPrimaries(ae.workingColorSpace),ht=_.colorSpace===Ti?null:ae.getPrimaries(_.colorSpace),lt=_.colorSpace===Ti||et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let J=x(_.image,!1,s.maxTextureSize);J=Xt(_,J);let _t=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),pt=S(_.internalFormat,_t,Lt,_.colorSpace,_.isVideoTexture);Mt(N,_);let xt,Ft=_.mipmaps,U=_.isVideoTexture!==!0,gt=dt.__version===void 0||Z===!0,bt=z.dataReady,Rt=R(_,J);if(_.isDepthTexture)pt=y(_.format===Mr,_.type),gt&&(U?e.texStorage2D(i.TEXTURE_2D,1,pt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,pt,J.width,J.height,0,_t,Lt,null));else if(_.isDataTexture)if(Ft.length>0){U&&gt&&e.texStorage2D(i.TEXTURE_2D,Rt,pt,Ft[0].width,Ft[0].height);for(let mt=0,rt=Ft.length;mt<rt;mt++)xt=Ft[mt],U?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,xt.width,xt.height,_t,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,mt,pt,xt.width,xt.height,0,_t,Lt,xt.data);_.generateMipmaps=!1}else U?(gt&&e.texStorage2D(i.TEXTURE_2D,Rt,pt,J.width,J.height),bt&&It(_,J,_t,Lt)):e.texImage2D(i.TEXTURE_2D,0,pt,J.width,J.height,0,_t,Lt,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,pt,Ft[0].width,Ft[0].height,J.depth);for(let mt=0,rt=Ft.length;mt<rt;mt++)if(xt=Ft[mt],_.format!==wn)if(_t!==null)if(U){if(bt)if(_.layerUpdates.size>0){let Nt=jh(xt.width,xt.height,_.format,_.type);for(let jt of _.layerUpdates){let Se=xt.data.subarray(jt*Nt/xt.data.BYTES_PER_ELEMENT,(jt+1)*Nt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,jt,xt.width,xt.height,1,_t,Se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,J.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,pt,xt.width,xt.height,J.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,J.depth,_t,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,pt,xt.width,xt.height,J.depth,0,_t,Lt,xt.data)}else{U&&gt&&e.texStorage2D(i.TEXTURE_2D,Rt,pt,Ft[0].width,Ft[0].height);for(let mt=0,rt=Ft.length;mt<rt;mt++)xt=Ft[mt],_.format!==wn?_t!==null?U?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,xt.width,xt.height,_t,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,mt,pt,xt.width,xt.height,0,_t,Lt,xt.data)}else if(_.isDataArrayTexture)if(U){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,pt,J.width,J.height,J.depth),bt)if(_.layerUpdates.size>0){let mt=jh(J.width,J.height,_.format,_.type);for(let rt of _.layerUpdates){let Nt=J.data.subarray(rt*mt/J.data.BYTES_PER_ELEMENT,(rt+1)*mt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,J.width,J.height,1,_t,Lt,Nt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_t,Lt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,J.width,J.height,J.depth,0,_t,Lt,J.data);else if(_.isData3DTexture)U?(gt&&e.texStorage3D(i.TEXTURE_3D,Rt,pt,J.width,J.height,J.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_t,Lt,J.data)):e.texImage3D(i.TEXTURE_3D,0,pt,J.width,J.height,J.depth,0,_t,Lt,J.data);else if(_.isFramebufferTexture){if(gt)if(U)e.texStorage2D(i.TEXTURE_2D,Rt,pt,J.width,J.height);else{let mt=J.width,rt=J.height;for(let Nt=0;Nt<Rt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,pt,mt,rt,0,_t,Lt,null),mt>>=1,rt>>=1}}else if(Ft.length>0){if(U&&gt){let mt=Wt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,Rt,pt,mt.width,mt.height)}for(let mt=0,rt=Ft.length;mt<rt;mt++)xt=Ft[mt],U?bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,_t,Lt,xt):e.texImage2D(i.TEXTURE_2D,mt,pt,_t,Lt,xt);_.generateMipmaps=!1}else if(U){if(gt){let mt=Wt(J);e.texStorage2D(i.TEXTURE_2D,Rt,pt,mt.width,mt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Lt,J)}else e.texImage2D(i.TEXTURE_2D,0,pt,_t,Lt,J);g(_)&&p(N),dt.__version=z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function it(E,_,C){if(_.image.length!==6)return;let N=Et(E,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+C);let z=n.get(Z);if(Z.version!==z.__version||N===!0){e.activeTexture(i.TEXTURE0+C);let dt=ae.getPrimaries(ae.workingColorSpace),et=_.colorSpace===Ti?null:ae.getPrimaries(_.colorSpace),ht=_.colorSpace===Ti||dt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!lt&&!J?_t[rt]=x(_.image[rt],!0,s.maxCubemapSize):_t[rt]=J?_.image[rt].image:_.image[rt],_t[rt]=Xt(_,_t[rt]);let Lt=_t[0],pt=r.convert(_.format,_.colorSpace),xt=r.convert(_.type),Ft=S(_.internalFormat,pt,xt,_.colorSpace),U=_.isVideoTexture!==!0,gt=z.__version===void 0||N===!0,bt=Z.dataReady,Rt=R(_,Lt);Mt(i.TEXTURE_CUBE_MAP,_);let mt;if(lt){U&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Ft,Lt.width,Lt.height);for(let rt=0;rt<6;rt++){mt=_t[rt].mipmaps;for(let Nt=0;Nt<mt.length;Nt++){let jt=mt[Nt];_.format!==wn?pt!==null?U?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,jt.width,jt.height,pt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,Ft,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,jt.width,jt.height,pt,xt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,Ft,jt.width,jt.height,0,pt,xt,jt.data)}}}else{if(mt=_.mipmaps,U&&gt){mt.length>0&&Rt++;let rt=Wt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Ft,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(J){U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,pt,xt,_t[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,_t[rt].width,_t[rt].height,0,pt,xt,_t[rt].data);for(let Nt=0;Nt<mt.length;Nt++){let Se=mt[Nt].image[rt].image;U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,Se.width,Se.height,pt,xt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,Ft,Se.width,Se.height,0,pt,xt,Se.data)}}else{U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt,xt,_t[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,pt,xt,_t[rt]);for(let Nt=0;Nt<mt.length;Nt++){let jt=mt[Nt];U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,pt,xt,jt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,Ft,pt,xt,jt.image[rt])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),z.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function wt(E,_,C,N,Z,z){let dt=r.convert(C.format,C.colorSpace),et=r.convert(C.type),ht=S(C.internalFormat,dt,et,C.colorSpace),lt=n.get(_),J=n.get(C);if(J.__renderTarget=_,!lt.__hasExternalTextures){let _t=Math.max(1,_.width>>z),Lt=Math.max(1,_.height>>z);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,z,ht,_t,Lt,_.depth,0,dt,et,null):e.texImage2D(Z,z,ht,_t,Lt,0,dt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,Z,J.__webglTexture,0,ut(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,Z,J.__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(E,_,C){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let N=_.depthTexture,Z=N&&N.isDepthTexture?N.type:null,z=y(_.stencilBuffer,Z),dt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=ut(_);at(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,z,_.width,_.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,E)}else{let N=_.textures;for(let Z=0;Z<N.length;Z++){let z=N[Z],dt=r.convert(z.format,z.colorSpace),et=r.convert(z.type),ht=S(z.internalFormat,dt,et,z.colorSpace),lt=ut(_);C&&at(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ht,_.width,_.height):at(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=n.get(_.depthTexture);N.__renderTarget=_,(!N.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);let Z=N.__webglTexture,z=ut(_);if(_.depthTexture.format===Qs)at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Mr)at(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Gt(E){let _=n.get(E),C=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let N=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),N){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,N.removeEventListener("dispose",Z)};N.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=N}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");let N=E.texture.mipmaps;N&&N.length>0?At(_.__webglFramebuffer[0],E):At(_.__webglFramebuffer,E)}else if(C){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]===void 0)_.__webglDepthbuffer[N]=i.createRenderbuffer(),Pt(_.__webglDepthbuffer[N],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,z)}}else{let N=E.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pt(_.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(E,_,C){let N=n.get(E);_!==void 0&&wt(N.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Gt(E)}function P(E){let _=E.texture,C=n.get(E),N=n.get(_);E.addEventListener("dispose",I);let Z=E.textures,z=E.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=_.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[et]=[];for(let ht=0;ht<_.mipmaps.length;ht++)C.__webglFramebuffer[et][ht]=i.createFramebuffer()}else C.__webglFramebuffer[et]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let et=0;et<_.mipmaps.length;et++)C.__webglFramebuffer[et]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(dt)for(let et=0,ht=Z.length;et<ht;et++){let lt=n.get(Z[et]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&at(E)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let et=0;et<Z.length;et++){let ht=Z[et];C.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[et]);let lt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),_t=S(ht.internalFormat,lt,J,ht.colorSpace,E.isXRRenderTarget===!0),Lt=ut(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,C.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(C.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,_);for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)wt(C.__webglFramebuffer[et][ht],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht);else wt(C.__webglFramebuffer[et],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let et=0,ht=Z.length;et<ht;et++){let lt=Z[et],J=n.get(lt),_t=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_t=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),Mt(_t,lt),wt(C.__webglFramebuffer,E,lt,i.COLOR_ATTACHMENT0+et,_t,0),g(lt)&&p(_t)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(et=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,N.__webglTexture),Mt(et,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)wt(C.__webglFramebuffer[ht],E,_,i.COLOR_ATTACHMENT0,et,ht);else wt(C.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,et,0);g(_)&&p(et),e.unbindTexture()}E.depthBuffer&&Gt(E)}function st(E){let _=E.textures;for(let C=0,N=_.length;C<N;C++){let Z=_[C];if(g(Z)){let z=b(E),dt=n.get(Z).__webglTexture;e.bindTexture(z,dt),p(z),e.unbindTexture()}}}let tt=[],K=[];function Q(E){if(E.samples>0){if(at(E)===!1){let _=E.textures,C=E.width,N=E.height,Z=i.COLOR_BUFFER_BIT,z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(E),et=_.length>1;if(et)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let ht=E.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let J=n.get(_[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,C,N,0,0,C,N,Z,i.NEAREST),l===!0&&(tt.length=0,K.length=0,tt.push(i.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(tt.push(z),K.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let J=n.get(_[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,J,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ut(E){return Math.min(s.maxSamples,E.samples)}function at(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function St(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Xt(E,_){let C=E.colorSpace,N=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||C!==cs&&C!==Ti&&(ae.getTransfer(C)===fe?(N!==wn||Z!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function Wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=te,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=at}function qv(i,t){function e(n,s=Ti){let r,o=ae.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===wn)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Vo||n===Go||n===Ho||n===Wo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===$l||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:Yv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new uu,p={},b=e.getContextAttributes(),S=null,y=null,R=[],A=[],I=new ct,L=null,w=new rn;w.viewport=new De;let v=new rn;v.viewport=new De;let D=[w,v],F=new yl,V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=R[Y];return it===void 0&&(it=new rr,R[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=R[Y];return it===void 0&&(it=new rr,R[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=R[Y];return it===void 0&&(it=new rr,R[Y]=it),it.getHandSpace()};function k(Y){let it=A.indexOf(Y.inputSource);if(it===-1)return;let wt=R[it];wt!==void 0&&(wt.update(Y.inputSource,Y.frame,c||o),wt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<R.length;Y++){let it=A[Y];it!==null&&(A[Y]=null,R[Y].disconnect(it))}V=null,G=null,g.reset();for(let Y in p)delete p[Y];t.setRenderTarget(S),f=null,d=null,u=null,s=null,y=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Pt=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=b.stencil?Mr:Qs,Pt=b.stencil?vr:Vi);let Gt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:wn,type:jn,depthTexture:new _o(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:wn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Y){for(let it=0;it<Y.removed.length;it++){let wt=Y.removed[it],Pt=A.indexOf(wt);Pt>=0&&(A[Pt]=null,R[Pt].disconnect(wt))}for(let it=0;it<Y.added.length;it++){let wt=Y.added[it],Pt=A.indexOf(wt);if(Pt===-1){for(let Gt=0;Gt<R.length;Gt++)if(Gt>=A.length){A.push(wt),Pt=Gt;break}else if(A[Gt]===null){A[Gt]=wt,Pt=Gt;break}if(Pt===-1)break}let At=R[Pt];At&&At.connect(wt)}}let W=new M,nt=new M;function ft(Y,it,wt){W.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(wt.matrixWorld);let Pt=W.distanceTo(nt),At=it.projectionMatrix.elements,Gt=wt.projectionMatrix.elements,te=At[14]/(At[10]-1),P=At[14]/(At[10]+1),st=(At[9]+1)/At[5],tt=(At[9]-1)/At[5],K=(At[8]-1)/At[0],Q=(Gt[8]+1)/Gt[0],ut=te*K,at=te*Q,St=Pt/(-K+Q),Xt=St*-K;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Wt=te+St,E=P+St,_=ut-Xt,C=at+(Pt-Xt),N=st*P/E*Wt,Z=tt*P/E*Wt;Y.projectionMatrix.makePerspective(_,C,N,Z,Wt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,wt=Y.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),F.near=v.near=w.near=it,F.far=v.far=w.far=wt,(V!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,G=F.far),F.layers.mask=Y.layers.mask|6,w.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let Pt=Y.parent,At=F.cameras;$(F,Pt);for(let Gt=0;Gt<At.length;Gt++)$(At[Gt],Pt);At.length===2?ft(F,w,v):F.projectionMatrix.copy(w.projectionMatrix),Mt(Y,F,Pt)};function Mt(Y,it,wt){wt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(wt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Et=null;function Ot(Y,it){if(h=it.getViewerPose(c||o),m=it,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;wt.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let P=0;P<wt.length;P++){let st=wt[P],tt=null;if(f!==null)tt=f.getViewport(st);else{let Q=u.getViewSubImage(d,st);tt=Q.viewport,P===0&&(t.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(y))}let K=D[P];K===void 0&&(K=new rn,K.layers.enable(P),K.viewport=new De,D[P]=K),K.matrix.fromArray(st.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(st.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(tt.x,tt.y,tt.width,tt.height),P===0&&(F.matrix.copy(K.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(K)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let P=u.getDepthInformation(wt[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<wt.length;P++){let st=wt[P].camera;if(st){let tt=p[st];tt||(tt=new xo,p[st]=tt);let K=u.getCameraImage(st);tt.sourceTexture=K}}}}for(let wt=0;wt<R.length;wt++){let Pt=A[wt],At=R[wt];Pt!==null&&At!==void 0&&At.update(Pt,it,c||o)}Et&&Et(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let It=new ip;It.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}},Ss=new Je,Jv=new oe;function Kv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Zh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,y=b.envMapRotation;S&&(g.envMap.value=S,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(Ss)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let y=S.program;n.uniformBlockBinding(b,y)}function c(b,S){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",g));let R=S.program;n.updateUBOMapping(b,R);let A=t.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let S=u();b.__bindingPointIndex=S;let y=i.createBuffer(),R=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],y=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,I=y.length;A<I;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,v=L.length;w<v;w++){let D=L[w];if(f(D,A,w,R)===!0){let F=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],G=0;for(let k=0;k<V.length;k++){let H=V[k],j=x(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+G,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,y,R){let A=b.value,I=S+"_"+y;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let L=R[I];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[I]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(b){let S=b.uniforms,y=0,R=16;for(let I=0,L=S.length;I<L;I++){let w=Array.isArray(S[I])?S[I]:[S[I]];for(let v=0,D=w.length;v<D;v++){let F=w[v],V=Array.isArray(F.value)?F.value:[F.value];for(let G=0,k=V.length;G<k;G++){let H=V[G],j=x(H),W=y%R,nt=W%j.boundary,ft=W+nt;y+=nt,ft!==0&&R-ft<j.storage&&(y+=R-ft),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=j.storage}}}let A=y%R;return A>0&&(y+=R-A),b.__size=y,b.__cache={},this}function x(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){let S=b.target;S.removeEventListener("dispose",g);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var mc=class{constructor(t={}){let{canvas:e=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=ye;let A=0,I=0,L=null,w=-1,v=null,D=new De,F=new De,V=null,G=new kt(0),k=0,H=e.width,j=e.height,W=1,nt=null,ft=null,$=new De(0,0,H,j),Mt=new De(0,0,H,j),Et=!1,Ot=new hr,It=!1,Y=!1,it=new oe,wt=new M,Pt=new De,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function te(){return L===null?W:1}let P=n;function st(T,O){return e.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),P===null){let O="webgl2";if(P=st(O,T),P===null)throw st(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,K,Q,ut,at,St,Xt,Wt,E,_,C,N,Z,z,dt,et,ht,lt,J,_t,Lt,pt,xt,Ft;function U(){tt=new my(P),tt.init(),pt=new qv(P,tt),K=new ly(P,tt,t,pt),Q=new Wv(P,tt),K.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),ut=new xy(P),at=new Iv,St=new Xv(P,tt,Q,at,K,pt,ut),Xt=new hy(y),Wt=new py(y),E=new w0(P),xt=new oy(P,E),_=new gy(P,E,ut,xt),C=new vy(P,_,E,ut),J=new yy(P,K,St),et=new cy(at),N=new Pv(y,Xt,Wt,tt,K,xt,et),Z=new Kv(y,at),z=new Lv,dt=new zv(tt),lt=new ry(y,Xt,Wt,Q,C,f,l),ht=new Gv(y,C,K),Ft=new $v(P,ut,K,Q),_t=new ay(P,tt,ut),Lt=new _y(P,tt,ut),ut.programs=N.programs,y.capabilities=K,y.extensions=tt,y.properties=at,y.renderLists=z,y.shadowMap=ht,y.state=Q,y.info=ut}U();let gt=new du(y,P);this.xr=gt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,O,X=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=O,e.width=Math.floor(T*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*W,j*W).floor()},this.setDrawingBufferSize=function(T,O,X){H=T,j=O,W=X,e.width=Math.floor(T*X),e.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,O,X,q){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,O,X,q),Q.viewport(D.copy($).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Mt)},this.setScissor=function(T,O,X,q){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,O,X,q),Q.scissor(F.copy(Mt).multiplyScalar(W).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){Q.setScissorTest(Et=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){ft=T},this.getClearColor=function(T){return T.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let B=!1;if(L!==null){let vt=L.texture.format;B=vt===Fl||vt===Nl||vt===Ul}if(B){let vt=L.texture.type,Ct=vt===jn||vt===Vi||vt===xr||vt===vr||vt===Il||vt===Dl,Ut=lt.getClearColor(),Dt=lt.getClearAlpha(),qt=Ut.r,Zt=Ut.g,Vt=Ut.b;Ct?(m[0]=qt,m[1]=Zt,m[2]=Vt,m[3]=Dt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=qt,x[1]=Zt,x[2]=Vt,x[3]=Dt,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}O&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),lt.dispose(),z.dispose(),dt.dispose(),at.dispose(),Xt.dispose(),Wt.dispose(),C.dispose(),xt.dispose(),Ft.dispose(),N.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ii),gt.removeEventListener("sessionend",Ju),ts.stop()};function bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=ut.autoReset,O=ht.enabled,X=ht.autoUpdate,q=ht.needsUpdate,B=ht.type;U(),ut.autoReset=T,ht.enabled=O,ht.autoUpdate=X,ht.needsUpdate=q,ht.type=B}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){let O=T.target;O.removeEventListener("dispose",rt),Nt(O)}function Nt(T){jt(T),at.remove(T)}function jt(T){let O=at.get(T).programs;O!==void 0&&(O.forEach(function(X){N.releaseProgram(X)}),T.isShaderMaterial&&N.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,B,vt){O===null&&(O=At);let Ct=B.isMesh&&B.matrixWorld.determinant()<0,Ut=Xm(T,O,X,q,B);Q.setMaterial(q,Ct);let Dt=X.index,qt=1;if(q.wireframe===!0){if(Dt=_.getWireframeAttribute(X),Dt===void 0)return;qt=2}let Zt=X.drawRange,Vt=X.attributes.position,re=Zt.start*qt,me=(Zt.start+Zt.count)*qt;vt!==null&&(re=Math.max(re,vt.start*qt),me=Math.min(me,(vt.start+vt.count)*qt)),Dt!==null?(re=Math.max(re,0),me=Math.min(me,Dt.count)):Vt!=null&&(re=Math.max(re,0),me=Math.min(me,Vt.count));let Be=me-re;if(Be<0||Be===1/0)return;xt.setup(B,q,Ut,X,Dt);let Te,xe=_t;if(Dt!==null&&(Te=E.get(Dt),xe=Lt,xe.setIndex(Te)),B.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*te()),xe.setMode(P.LINES)):xe.setMode(P.TRIANGLES);else if(B.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),Q.setLineWidth(Ht*te()),B.isLineSegments?xe.setMode(P.LINES):B.isLineLoop?xe.setMode(P.LINE_LOOP):xe.setMode(P.LINE_STRIP)}else B.isPoints?xe.setMode(P.POINTS):B.isSprite&&xe.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))xe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ht=B._multiDrawStarts,Re=B._multiDrawCounts,le=B._multiDrawCount,Cn=Dt?E.get(Dt).bytesPerElement:1,Is=at.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<le;Rn++)Is.setValue(P,"_gl_DrawID",Rn),xe.render(Ht[Rn]/Cn,Re[Rn])}else if(B.isInstancedMesh)xe.renderInstances(re,Be,B.count);else if(X.isInstancedBufferGeometry){let Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,Ht);xe.renderInstances(re,Be,Re)}else xe.render(re,Be)};function Se(T,O,X){T.transparent===!0&&T.side===Ve&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,da(T,O,X),T.side=Zn,T.needsUpdate=!0,da(T,O,X),T.side=Ve):da(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=dt.get(X),p.init(O),S.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let vt=B.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let Ut=vt[Ct];Se(Ut,X,B),q.add(Ut)}else Se(vt,X,B),q.add(vt)}),p=S.pop(),q},this.compileAsync=function(T,O,X=null){let q=this.compile(T,O,X);return new Promise(B=>{function vt(){if(q.forEach(function(Ct){at.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){B(T);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ue=null;function gi(T){ue&&ue(T)}function ii(){ts.stop()}function Ju(){ts.start()}let ts=new ip;ts.setAnimationLoop(gi),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(T){ue=T,gt.setAnimationLoop(T),T===null?ts.stop():ts.start()},gt.addEventListener("sessionstart",ii),gt.addEventListener("sessionend",Ju),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(O),O=gt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,L),p=dt.get(T,S.length),p.init(O),S.push(p),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ot.setFromProjectionMatrix(it,Yn,O.reversedDepth),Y=this.localClippingEnabled,It=et.init(this.clippingPlanes,Y),g=z.get(T,b.length),g.init(),b.push(g),gt.enabled===!0&&gt.isPresenting===!0){let vt=y.xr.getDepthSensingMesh();vt!==null&&Wc(vt,O,-1/0,y.sortObjects)}Wc(T,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(nt,ft),Gt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Gt&&lt.addToRenderList(g,T),this.info.render.frame++,It===!0&&et.beginShadows();let X=p.state.shadowsArray;ht.render(X,T,O),It===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,B=g.transmissive;if(p.setupLights(),O.isArrayCamera){let vt=O.cameras;if(B.length>0)for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){let Dt=vt[Ct];$u(q,B,T,Dt)}Gt&&lt.render(T);for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){let Dt=vt[Ct];Ku(g,T,Dt,Dt.viewport)}}else B.length>0&&$u(q,B,T,O),Gt&&lt.render(T),Ku(g,T,O);L!==null&&I===0&&(St.updateMultisampleRenderTarget(L),St.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,O),xt.resetDefaultState(),w=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],It===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Wc(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ot.intersectsSprite(T)){q&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);let Ct=C.update(T),Ut=T.material;Ut.visible&&g.push(T,Ct,Ut,X,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ot.intersectsObject(T))){let Ct=C.update(T),Ut=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Pt.copy(Ct.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(it)),Array.isArray(Ut)){let Dt=Ct.groups;for(let qt=0,Zt=Dt.length;qt<Zt;qt++){let Vt=Dt[qt],re=Ut[Vt.materialIndex];re&&re.visible&&g.push(T,Ct,re,X,Pt.z,Vt)}}else Ut.visible&&g.push(T,Ct,Ut,X,Pt.z,null)}}let vt=T.children;for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++)Wc(vt[Ct],O,X,q)}function Ku(T,O,X,q){let B=T.opaque,vt=T.transmissive,Ct=T.transparent;p.setupLightsView(X),It===!0&&et.setGlobalState(y.clippingPlanes,X),q&&Q.viewport(D.copy(q)),B.length>0&&ua(B,O,X),vt.length>0&&ua(vt,O,X),Ct.length>0&&ua(Ct,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function $u(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new li(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?yr:jn,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let vt=p.state.transmissionRenderTarget[q.id],Ct=q.viewport||D;vt.setSize(Ct.z*y.transmissionResolutionScale,Ct.w*y.transmissionResolutionScale);let Ut=y.getRenderTarget(),Dt=y.getActiveCubeFace(),qt=y.getActiveMipmapLevel();y.setRenderTarget(vt),y.getClearColor(G),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&lt.render(X);let Zt=y.toneMapping;y.toneMapping=wi;let Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),It===!0&&et.setGlobalState(y.clippingPlanes,q),ua(T,X,q),St.updateMultisampleRenderTarget(vt),St.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let me=0,Be=O.length;me<Be;me++){let Te=O[me],xe=Te.object,Ht=Te.geometry,Re=Te.material,le=Te.group;if(Re.side===Ve&&xe.layers.test(q.layers)){let Cn=Re.side;Re.side=Qe,Re.needsUpdate=!0,ju(xe,X,q,Ht,Re,le),Re.side=Cn,Re.needsUpdate=!0,re=!0}}re===!0&&(St.updateMultisampleRenderTarget(vt),St.updateRenderTargetMipmap(vt))}y.setRenderTarget(Ut,Dt,qt),y.setClearColor(G,k),Vt!==void 0&&(q.viewport=Vt),y.toneMapping=Zt}function ua(T,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,vt=T.length;B<vt;B++){let Ct=T[B],Ut=Ct.object,Dt=Ct.geometry,qt=Ct.group,Zt=Ct.material;Zt.allowOverride===!0&&q!==null&&(Zt=q),Ut.layers.test(X.layers)&&ju(Ut,O,X,Dt,Zt,qt)}}function ju(T,O,X,q,B,vt){T.onBeforeRender(y,O,X,q,B,vt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,O,X,q,T,vt),B.transparent===!0&&B.side===Ve&&B.forceSinglePass===!1?(B.side=Qe,B.needsUpdate=!0,y.renderBufferDirect(X,O,q,B,T,vt),B.side=Zn,B.needsUpdate=!0,y.renderBufferDirect(X,O,q,B,T,vt),B.side=Ve):y.renderBufferDirect(X,O,q,B,T,vt),T.onAfterRender(y,O,X,q,B,vt)}function da(T,O,X){O.isScene!==!0&&(O=At);let q=at.get(T),B=p.state.lights,vt=p.state.shadowsArray,Ct=B.state.version,Ut=N.getParameters(T,B.state,vt,O,X),Dt=N.getProgramCacheKey(Ut),qt=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?Wt:Xt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",rt),qt=new Map,q.programs=qt);let Zt=qt.get(Dt);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===Ct)return td(T,Ut),Zt}else Ut.uniforms=N.getUniforms(T),T.onBeforeCompile(Ut,y),Zt=N.acquireProgram(Ut,Dt),qt.set(Dt,Zt),q.uniforms=Ut.uniforms;let Vt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=et.uniform),td(T,Ut),q.needsLights=Ym(T),q.lightsStateVersion=Ct,q.needsLights&&(Vt.ambientLightColor.value=B.state.ambient,Vt.lightProbe.value=B.state.probe,Vt.directionalLights.value=B.state.directional,Vt.directionalLightShadows.value=B.state.directionalShadow,Vt.spotLights.value=B.state.spot,Vt.spotLightShadows.value=B.state.spotShadow,Vt.rectAreaLights.value=B.state.rectArea,Vt.ltc_1.value=B.state.rectAreaLTC1,Vt.ltc_2.value=B.state.rectAreaLTC2,Vt.pointLights.value=B.state.point,Vt.pointLightShadows.value=B.state.pointShadow,Vt.hemisphereLights.value=B.state.hemi,Vt.directionalShadowMap.value=B.state.directionalShadowMap,Vt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Vt.spotShadowMap.value=B.state.spotShadowMap,Vt.spotLightMatrix.value=B.state.spotLightMatrix,Vt.spotLightMap.value=B.state.spotLightMap,Vt.pointShadowMap.value=B.state.pointShadowMap,Vt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function Qu(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=wr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function td(T,O){let X=at.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Xm(T,O,X,q,B){O.isScene!==!0&&(O=At),St.resetTextureUnits();let vt=O.fog,Ct=q.isMeshStandardMaterial?O.environment:null,Ut=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:cs,Dt=(q.isMeshStandardMaterial?Wt:Xt).get(q.envMap||Ct),qt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Vt=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,me=!!X.morphAttributes.color,Be=wi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Be=y.toneMapping);let Te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Te!==void 0?Te.length:0,Ht=at.get(q),Re=p.state.lights;if(It===!0&&(Y===!0||T!==v)){let mn=T===v&&q.id===w;et.setState(q,T,mn)}let le=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Re.state.version||Ht.outputColorSpace!==Ut||B.isBatchedMesh&&Ht.batching===!1||!B.isBatchedMesh&&Ht.batching===!0||B.isBatchedMesh&&Ht.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ht.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ht.instancing===!1||!B.isInstancedMesh&&Ht.instancing===!0||B.isSkinnedMesh&&Ht.skinning===!1||!B.isSkinnedMesh&&Ht.skinning===!0||B.isInstancedMesh&&Ht.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ht.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ht.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ht.instancingMorph===!1&&B.morphTexture!==null||Ht.envMap!==Dt||q.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==et.numPlanes||Ht.numIntersection!==et.numIntersection)||Ht.vertexAlphas!==qt||Ht.vertexTangents!==Zt||Ht.morphTargets!==Vt||Ht.morphNormals!==re||Ht.morphColors!==me||Ht.toneMapping!==Be||Ht.morphTargetsCount!==xe)&&(le=!0):(le=!0,Ht.__version=q.version);let Cn=Ht.currentProgram;le===!0&&(Cn=da(q,O,B));let Is=!1,Rn=!1,kr=!1,Pe=Cn.getUniforms(),On=Ht.uniforms;if(Q.useProgram(Cn.program)&&(Is=!0,Rn=!0,kr=!0),q.id!==w&&(w=q.id,Rn=!0),Is||v!==T){Q.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pe.setValue(P,"projectionMatrix",T.projectionMatrix),Pe.setValue(P,"viewMatrix",T.matrixWorldInverse);let yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(P,wt.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&Pe.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pe.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Rn=!0,kr=!0)}if(B.isSkinnedMesh){Pe.setOptional(P,B,"bindMatrix"),Pe.setOptional(P,B,"bindMatrixInverse");let mn=B.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pe.setValue(P,"boneTexture",mn.boneTexture,St))}B.isBatchedMesh&&(Pe.setOptional(P,B,"batchingTexture"),Pe.setValue(P,"batchingTexture",B._matricesTexture,St),Pe.setOptional(P,B,"batchingIdTexture"),Pe.setValue(P,"batchingIdTexture",B._indirectTexture,St),Pe.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Pe.setValue(P,"batchingColorTexture",B._colorsTexture,St));let Bn=X.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&J.update(B,X,Cn),(Rn||Ht.receiveShadow!==B.receiveShadow)&&(Ht.receiveShadow=B.receiveShadow,Pe.setValue(P,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=Dt,On.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),Rn&&(Pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&qm(On,kr),vt&&q.fog===!0&&Z.refreshFogUniforms(On,vt),Z.refreshMaterialUniforms(On,q,W,j,p.state.transmissionRenderTarget[T.id]),wr.upload(P,Qu(Ht),On,St)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wr.upload(P,Qu(Ht),On,St),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pe.setValue(P,"center",B.center),Pe.setValue(P,"modelViewMatrix",B.modelViewMatrix),Pe.setValue(P,"normalMatrix",B.normalMatrix),Pe.setValue(P,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let mn=q.uniformsGroups;for(let yn=0,Xc=mn.length;yn<Xc;yn++){let es=mn[yn];Ft.update(es,Cn),Ft.bind(es,Cn)}}return Cn}function qm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ym(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,O,X){let q=at.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),at.get(T.texture).__webglTexture=O,at.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let X=at.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let Zm=P.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){L=T,A=O,I=X;let q=!0,B=null,vt=!1,Ct=!1;if(T){let Dt=at.get(T);if(Dt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)St.setupRenderTarget(T);else if(Dt.__hasExternalTextures)St.rebindTextures(T,at.get(T.texture).__webglTexture,at.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Vt=T.depthTexture;if(Dt.__boundDepthTexture!==Vt){if(Vt!==null&&at.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(T)}}let qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);let Zt=at.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?B=Zt[O][X]:B=Zt[O],vt=!0):T.samples>0&&St.useMultisampledRTT(T)===!1?B=at.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[X]:B=Zt,D.copy(T.viewport),F.copy(T.scissor),V=T.scissorTest}else D.copy($).multiplyScalar(W).floor(),F.copy(Mt).multiplyScalar(W).floor(),V=Et;if(X!==0&&(B=Zm),Q.bindFramebuffer(P.FRAMEBUFFER,B)&&q&&Q.drawBuffers(T,B),Q.viewport(D),Q.scissor(F),Q.setScissorTest(V),vt){let Dt=at.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,X)}else if(Ct){let Dt=O;for(let qt=0;qt<T.textures.length;qt++){let Zt=at.get(T.textures[qt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,X,Dt)}}else if(T!==null&&X!==0){let Dt=at.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(T,O,X,q,B,vt,Ct,Ut=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=at.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Q.bindFramebuffer(P.FRAMEBUFFER,Dt);try{let qt=T.textures[Ut],Zt=qt.format,Vt=qt.type;if(!K.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ut),P.readPixels(O,X,q,B,pt.convert(Zt),pt.convert(Vt),vt))}finally{let qt=L!==null?at.get(L).__webglFramebuffer:null;Q.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,q,B,vt,Ct,Ut=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=at.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B){Q.bindFramebuffer(P.FRAMEBUFFER,Dt);let qt=T.textures[Ut],Zt=qt.format,Vt=qt.type;if(!K.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,re),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ut),P.readPixels(O,X,q,B,pt.convert(Zt),pt.convert(Vt),0);let me=L!==null?at.get(L).__webglFramebuffer:null;Q.bindFramebuffer(P.FRAMEBUFFER,me);let Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Tf(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.deleteBuffer(re),P.deleteSync(Be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(T.image.width*q),vt=Math.floor(T.image.height*q),Ct=O!==null?O.x:0,Ut=O!==null?O.y:0;St.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Ct,Ut,B,vt),Q.unbindTexture()};let Jm=P.createFramebuffer(),Km=P.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,q=null,B=0,vt=null){vt===null&&(B!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=B,B=0):vt=0);let Ct,Ut,Dt,qt,Zt,Vt,re,me,Be,Te=T.isCompressedTexture?T.mipmaps[vt]:T.image;if(X!==null)Ct=X.max.x-X.min.x,Ut=X.max.y-X.min.y,Dt=X.isBox3?X.max.z-X.min.z:1,qt=X.min.x,Zt=X.min.y,Vt=X.isBox3?X.min.z:0;else{let Bn=Math.pow(2,-B);Ct=Math.floor(Te.width*Bn),Ut=Math.floor(Te.height*Bn),T.isDataArrayTexture?Dt=Te.depth:T.isData3DTexture?Dt=Math.floor(Te.depth*Bn):Dt=1,qt=0,Zt=0,Vt=0}q!==null?(re=q.x,me=q.y,Be=q.z):(re=0,me=0,Be=0);let xe=pt.convert(O.format),Ht=pt.convert(O.type),Re;O.isData3DTexture?(St.setTexture3D(O,0),Re=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(St.setTexture2DArray(O,0),Re=P.TEXTURE_2D_ARRAY):(St.setTexture2D(O,0),Re=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let le=P.getParameter(P.UNPACK_ROW_LENGTH),Cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Is=P.getParameter(P.UNPACK_SKIP_PIXELS),Rn=P.getParameter(P.UNPACK_SKIP_ROWS),kr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);let Pe=T.isDataArrayTexture||T.isData3DTexture,On=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Bn=at.get(T),mn=at.get(O),yn=at.get(Bn.__renderTarget),Xc=at.get(mn.__renderTarget);Q.bindFramebuffer(P.READ_FRAMEBUFFER,yn.__webglFramebuffer),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xc.__webglFramebuffer);for(let es=0;es<Dt;es++)Pe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,at.get(T).__webglTexture,B,Vt+es),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,at.get(O).__webglTexture,vt,Be+es)),P.blitFramebuffer(qt,Zt,Ct,Ut,re,me,Ct,Ut,P.DEPTH_BUFFER_BIT,P.NEAREST);Q.bindFramebuffer(P.READ_FRAMEBUFFER,null),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||at.has(T)){let Bn=at.get(T),mn=at.get(O);Q.bindFramebuffer(P.READ_FRAMEBUFFER,Jm),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,Km);for(let yn=0;yn<Dt;yn++)Pe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bn.__webglTexture,B,Vt+yn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bn.__webglTexture,B),On?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,vt,Be+yn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,vt),B!==0?P.blitFramebuffer(qt,Zt,Ct,Ut,re,me,Ct,Ut,P.COLOR_BUFFER_BIT,P.NEAREST):On?P.copyTexSubImage3D(Re,vt,re,me,Be+yn,qt,Zt,Ct,Ut):P.copyTexSubImage2D(Re,vt,re,me,qt,Zt,Ct,Ut);Q.bindFramebuffer(P.READ_FRAMEBUFFER,null),Q.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else On?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Re,vt,re,me,Be,Ct,Ut,Dt,xe,Ht,Te.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,vt,re,me,Be,Ct,Ut,Dt,xe,Te.data):P.texSubImage3D(Re,vt,re,me,Be,Ct,Ut,Dt,xe,Ht,Te):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,vt,re,me,Ct,Ut,xe,Ht,Te.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,vt,re,me,Te.width,Te.height,xe,Te.data):P.texSubImage2D(P.TEXTURE_2D,vt,re,me,Ct,Ut,xe,Ht,Te);P.pixelStorei(P.UNPACK_ROW_LENGTH,le),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Is),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kr),vt===0&&O.generateMipmaps&&P.generateMipmap(Re),Q.unbindTexture()},this.initRenderTarget=function(T){at.get(T).__webglFramebuffer===void 0&&St.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?St.setTextureCube(T,0):T.isData3DTexture?St.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?St.setTexture2DArray(T,0):St.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){A=0,I=0,L=null,Q.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var pu=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var P1=pu.length-1,lp=Math.min(...pu.map(i=>i[1])),cp=Math.max(...pu.map(i=>i[1])),I1=new M(0,0,(lp+cp)/2),hp=new M(.047,.027,(cp-lp)/2);var U1=new ce,N1=new M,F1=new M,O1=new oe;var B1=new M,z1=new M;var k1=new M;var V1=new M,G1=new M,H1=new M,W1=new vn,X1=new M;function Yo(i,t=0){let e=i.attributes.position,n=[],s=[],r=new Set;for(let m=0;m<e.count;m++){let x=new M().fromBufferAttribute(e,m),g=x.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),n.push(x))}for(let m=0;m<(i.index?.count??e.count);m+=3){let x=y=>new M().fromBufferAttribute(e,i.index?i.index.getX(y):y),g=x(m),p=x(m+1),b=x(m+2),S=new vn(g,p,b).getNormal(new M);S.lengthSq()>.1&&s.push({a:g,b:p,c:b,n:S})}let o=t||Math.max(...n.map(m=>m.length())),{x:a,y:l,z:c}=new He().setFromPoints(n).getSize(new M),h=Math.max(1e-4,t**2*.4),u=t?new M().setScalar(1/h):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=t?2*t:Math.min(a,l,c),f=m=>{let x=[];for(let g of m)g.lengthSq()>.5&&!x.some(p=>Math.abs(p.dot(g))>.9999)&&x.push(g);return x};return{vertices:n,faces:s,sphereRadius:t,radius:o,inverseInertia:u,thickness:d,normals:t?[]:f(s.map(m=>m.n)),edges:t?[]:f(s.flatMap(m=>[new M().subVectors(m.b,m.a).normalize(),new M().subVectors(m.c,m.b).normalize(),new M().subVectors(m.a,m.c).normalize()]))}}var q1=new M,Y1=new M,Z1=new M,J1=new M,K1=new M;function Ar(i){return Yo(new Yt(i.x*2,i.y*2,i.z*2))}var $1=new M;var up=Yo(new Vn(1,0).scale(...hp)),j1={mesh:{position:new M,quaternion:new ce},shape:up,radius:up.radius,precise:!0};var Q1=new M,tw=new M,ew=new M,nw=new ce,iw=new ce,sw=new ce;var rw=new M,ow=new M,aw=new M,lw=new M;var cw=new M;var hw=new M,uw=new M,dw=new M,fw=new M,pw=new M,mw=new M,gw=new M;var _w={mesh:{position:null,quaternion:new ce},shape:{sphereRadius:0,normals:[],edges:[]}};function _c(i,t,e){let n=new Yt(i,t,e),{uv:s,normal:r}=n.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?e:i,h=l?e:t;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return n}function Zo(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}var Gi=(i,t,e)=>i+(t-i)*e,Cr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function xc(i,t){let e=Math.floor(i),n=Math.floor(t),s=Cr(0,1,i-e),r=Cr(0,1,t-n);return Gi(Gi(Zo(e,n),Zo(e+1,n),s),Gi(Zo(e,n+1),Zo(e+1,n+1),s),r)}function dp(i,t){return xc(i,t)*.54+xc(i*2.07+3.4,t*2.07-6.1)*.26+xc(i*4.2+9,t*4.2)*.13+xc(i*8.6,t*8.6-13)*.07}function fp(i){let n=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=i?[12,19,38]:[188,213,225],o=i?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((m,x)=>Gi(m,o[x],d));for(let m=0;m<1024;m++){let x=4*(m+l*1024),g=0,p=0,b=0;if(c>.025)if(i){let y=Zo(m+792,l+677);y>.9988&&(b=(y-.9988)*49e3*Cr(.09,.3,c))}else{let[y,R]=s[m],A=2.8*h/(c+.16),I=y*A+3.6,L=R*A-8.1,w=dp(I,L),v=dp(I-.12,L-.09);g=Cr(.49,.66,w)*Cr(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-v)*5+(w-.54)*.8))}let S=i?1:Gi(.94,1,Cr(.05,.34,c));n[x]=Gi(f[0],(139+115*p)*S,g)+b,n[x+1]=Gi(f[1],(154+100*p)*S,g)+b*.94,n[x+2]=Gi(f[2],(178+77*p)*S,g)+b*.86,n[x+3]=255}}let a=new ci(n,1024,512,wn);return a.colorSpace=ye,a.wrapS=oi,a.magFilter=je,a.minFilter=bn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function pp(){return{day:fp(!1),night:fp(!0)}}var Le=(i,t,e,n)=>({xMin:i,xMax:t,zMin:e,zMax:n}),mp=Le(-24,24,-51,7),gp=34521,_p={x:0,y:0,z:3},yc={x:.05,y:1.16,z:5.9},Rr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Le(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Le(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Le(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Le(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Le(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Le(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Le(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Le(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Le(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Le(9,23,-48,-37),sign:[16,-38.2]}},Mw=[Le(-9,-6,-51,7),Le(6,9,-51,7),Le(-24,24,-8,-5),Le(-24,24,-27,-23),Le(9,23,-37,-34)],xp=[{name:"Glace",bounds:Rr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Rr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Le(-9,9,-51,7)},{name:"Sol ouest",bounds:Le(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Le(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Le(-24,-23,-51,7)},{name:"Sol est",bounds:Le(9,23,-51,-48)},{name:"Sol est",bounds:Le(9,23,-37,7)},{name:"Bordure est",bounds:Le(23,24,-51,7)}],Pr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Ir=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],yp=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(t=>({x:t,z:i}))),mu={x:16,z:-31},gu={x:16,y:1.52,z:-21},vc={x:-19.4,y:.68,z:-3.25},vp=i=>({x:-20+i%6*1.52,z:.5-Math.floor(i/6)*1.25}),Mp={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",gu.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,t)=>{let e=.3+t*.265;return["Palier "+(t+1),-3.75,e*.5,-29.65-t*1.7,2.1,e,1.35,t%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,t)=>[["Paroi ouest "+(t+1),1.35,2.15+t*.32,-33.4-t*3.55,.45,4.3+t*.64,2.7,2],["Paroi est "+(t+1),4.78,2.36+t*.3,-34.2-t*3.55,.45,4.72+t*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Mc(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ui(n);return s.colorSpace=ye,s}function Sp(i,t){let{day:e,night:n}=pp(),s=new ot(new $n(180,40,20),new ze({map:e,side:Qe,fog:!1,toneMapped:!1}));i.add(s);let r=Mc(128,128,(_,C)=>{let N=_.createRadialGradient(C/2,C/2,0,C/2,C/2,C/2);N.addColorStop(0,"#fff8df"),N.addColorStop(.12,"#fff3bd"),N.addColorStop(.18,"rgba(255,225,144,.40)"),N.addColorStop(1,"rgba(255,220,144,0)"),_.fillStyle=N,_.fillRect(0,0,C,C)}),o=new fo(new lr({map:r,blending:Bo,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),i.add(o);let a=e.clone();a.mapping=_r,a.needsUpdate=!0;let l=new Tr(t);i.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ps("#daeaff","#88724c",2.25),h=new ms("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,i.add(c,h,h.target);let u=new M,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function m(_){f=d[_]?_:0;let C=d[f];c.color.set(C.fill),c.groundColor.set(C.ground),c.intensity=C.hemi,h.color.set(C.sun),h.intensity=C.power,u.set(...C.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(C.sun),o.material.opacity=C.glow,s.material.map=f===2?n:e,s.material.color.set(C.sky),i.fog.color.set(C.fog),i.background.set(C.fog),i.environmentIntensity=g*[1,.56,.09][f]}function x(_){if(!h.castShadow)return;let C=h.target.position,N=Math.round(_.x/4)*4,Z=Math.round(_.y/4)*4,z=Math.round(_.z/4)*4;C.x===N&&C.y===Z&&C.z===z||(C.set(N,Z,z),h.position.copy(C).add(u))}let g=0;i.background=new kt(d[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(_,C,N){let[,Z,z]=p[C],dt=512;_.save(),_.scale(N/512,N/512),_.fillStyle=Z,_.fillRect(0,0,dt,dt);let et=C+19;function ht(){return et=Math.imul(et,1664525)+1013904223>>>0,et/4294967296}if(_.fillStyle=z,C===16){for(let lt=0;lt<16;lt++)for(let J=0;J<16;J++)(J+lt)%2===0&&_.fillRect(J*32,lt*32,32,32);_.fillStyle="#ff3957",_.fillRect(253,0,6,512),_.fillRect(0,253,512,6)}else if([0,2,8,15].includes(C)){let lt=C===15?32:64;_.globalAlpha=.48;for(let J=0;J<dt;J+=lt){_.fillRect(0,J,dt,C===8?3:2);for(let _t=-lt;_t<dt;_t+=lt)_.fillRect(_t+J/lt%2*(C===2?lt/2:0),J,2,lt)}}else if([4,5,6,7,10,11,12].includes(C)){let lt=C===5?38:C===7?64:18;for(let J=0;J<lt;J++){_.strokeStyle=z,_.globalAlpha=.08+ht()*.22,_.lineWidth=C===5?1+ht()*8:1+ht()*4;let _t=ht()*dt,Lt=C===5?.018:.009;_.beginPath();for(let pt=0;pt<=dt;pt+=8){let xt=_t+Math.sin(pt*Lt+J)*(C===6||C===7?4:12+J%5*3)+(C===4?pt*.28:0);pt===0?_.moveTo(pt,xt):_.lineTo(pt,xt)}_.stroke()}}else{_.globalAlpha=.27;for(let lt=0;lt<120;lt++){let J=ht()*dt,_t=ht()*dt,Lt=2+ht()*6;_.beginPath(),_.arc(J,_t,Lt,0,Math.PI*2),_.fill()}}if(C!==16)for(let lt=0;lt<4400;lt++)_.globalAlpha=.05+ht()*.1,_.fillStyle=ht()>.5?z:"#222324",_.fillRect(ht()*dt,ht()*dt,1+ht()*4,1+ht()*3);_.restore()}let S=new Set([0,2,4,5,8,15,16]),y=p.map(([_,C,N,Z,z,dt],et)=>{let ht=S.has(et)?512:256,lt=Mc(ht,ht,_t=>b(_t,et,ht));lt.wrapS=lt.wrapT=oi;let J=new cn({map:lt,roughness:Z,metalness:z,flatShading:!0,opacity:dt,transparent:dt<1,depthWrite:dt===1});return J.name=_,J}),R=y.map(_=>_.map.image),A=512,I=y.map(_=>new hn({map:_.map,flatShading:!0,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite})),L={value:0},w={value:.24},v={value:null},D={value:0};function F(){v.value?.dispose(),v.value=Mc(512,512,(_,C)=>{_.fillStyle="#ffffff",_.fillRect(0,0,C,C);let N=C/52,Z=C/64;for(let z of V){if(!z.position||!z.half||z.position.y+z.half.y<.22)continue;let dt=(z.position.x+26)*N,et=(z.position.z+54)*Z,ht=Math.min(55,z.half.x*N+5),lt=Math.min(72,z.half.z*Z+6);_.save(),_.translate(dt+z.half.y*N*.2,et+z.half.y*Z*.24),_.scale(ht,lt);let J=_.createRadialGradient(0,0,.15,0,0,1);J.addColorStop(0,"rgba(22,37,65,.54)"),J.addColorStop(.58,"rgba(36,54,76,.29)"),J.addColorStop(1,"rgba(38,48,57,0)"),_.fillStyle=J,_.fillRect(-1,-1,2,2),_.restore()}})}for(let _ of[...y,...I])_.onBeforeCompile=C=>{C.uniforms.uFocusAmount=L,C.uniforms.uFocusRadius=w,C.uniforms.uLabLightmap=v,C.uniforms.uLabBakedStrength=D,C.vertexShader=`varying vec3 vLabPosition;
`+C.vertexShader,C.vertexShader=C.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),C.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+C.fragmentShader,C.fragmentShader=C.fragmentShader.replace("#include <map_fragment>",`
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
      `)},_.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let V=[],G=[];function k(_,C,N,Z,z,dt,et,ht=0,lt=0,J=1,_t=1,Lt=!1){let pt=new ot(Lt?new Yt(z,dt,et):_c(z,dt,et),y[ht]);pt.position.set(C,N,Z),pt.rotation.x=lt,pt.receiveShadow=!0,pt.castShadow=!0,i.add(pt);let xt=new M(z/2,dt/2,et/2),Ft={mesh:pt,position:pt.position,quaternion:pt.quaternion,half:xt,min:xt.clone().negate(),friction:J,gravity:_t,name:_,type:ht,shape:Ar(xt)};return V.push(Ft),Ft}let H=xp.map(({name:_,bounds:C,type:N=0,friction:Z=.78,gravity:z=1})=>{let{xMin:dt,xMax:et,zMin:ht,zMax:lt}=C;return k(_,(dt+et)/2,-.33,(ht+lt)/2,et-dt,.66,lt-ht,N,0,Z,z)});for(let _ of Object.values(Mp))for(let C of _)k(...C);let{xMin:j,xMax:W,zMin:nt,zMax:ft}=mp;k("But\xE9e arri\xE8re",0,1.35,nt+.4,W-j,2.7,.6,2),k("But\xE9e ouest",j+.3,1.05,(nt+ft)/2,.6,2.1,ft-nt,2),k("But\xE9e est",W-.3,1.05,(nt+ft)/2,.6,2.1,ft-nt,2);let{xMin:$,xMax:Mt,zMin:Et,zMax:Ot}=Rr.hills.bounds,It=Mt-$,Y=Ot-Et,it=16,wt=64,Pt=new ln(It,Y,it,wt).rotateX(-Math.PI/2).translate($+It/2,0,Et+Y/2),At=Pt.attributes.uv;for(let _=0;_<At.count;_++)At.setXY(_,At.getX(_)*It/2.6,At.getY(_)*Y/2.6);let Gt=Pt.attributes.position,te;function P(_){if(te===_)return;te=_;let C=te*.017;for(let N=0;N<Gt.count;N++){let Z=Gt.getX(N),z=Gt.getZ(N),dt=Math.sin(Math.PI*Kt.clamp((Z-$)/It,0,1)),et=Math.min(1,(z-Et)*.48,(Ot-z)*.48),ht=.93+.56*Math.sin(z*.36+C)+.32*Math.cos(Z*.67+z*.26+C*1.4)+.19*Math.sin(z*.81+C*.67);Gt.setY(N,Math.max(0,dt*et*ht))}Gt.needsUpdate=!0,Pt.computeVertexNormals(),Pt.computeBoundingSphere()}P(gp);let st=new ot(Pt,y[3]);st.receiveShadow=st.castShadow=!0,i.add(st);let tt=(_,C)=>{let N=Kt.clamp((_-$)/It*it,0,it-1e-6),Z=Kt.clamp((C-Et)/Y*wt,0,wt-1e-6),z=Math.floor(N),dt=Math.floor(Z),et=N-z,ht=Z-dt,lt=it+1,J=dt*lt+z,_t=Gt.getY(J),Lt=Gt.getY(J+1),pt=Gt.getY(J+lt),xt=Gt.getY(J+lt+1);return et+ht<=1?_t+(Lt-_t)*et+(pt-_t)*ht:xt+(pt-xt)*(1-et)+(Lt-xt)*(1-ht)};V.push({heightfield:!0,mesh:st,height:tt,...Rr.hills.bounds,friction:.81,gravity:1});function K(_,C,N,Z,z=1.45){let dt=Mc(384,72,(ht,lt,J)=>{ht.fillStyle="#202a32",ht.fillRect(0,0,lt,J),ht.fillStyle=Z,ht.font="bold 31px system-ui",ht.textAlign="center",ht.fillText(_,lt/2,48,lt-20)}),et=new ot(new ln(3.2,.6),new ze({map:dt,side:Ve}));et.position.set(C,z,N),i.add(et),G.push(et)}for(let _ of Object.values(Rr)){K(_.name.toLocaleUpperCase("fr"),..._.sign,_.color);let{xMin:C,xMax:N,zMin:Z,zMax:z}=_.bounds,dt=new go(new ne().setFromPoints([new M(C,.025,Z),new M(N,.025,Z),new M(N,.025,z),new M(C,.025,z)]),new hi({color:_.color,transparent:!0,opacity:.72}));i.add(dt),G.push(dt)}K("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),K("MURS HAUTS",3,-31,"#e8d2ff"),K("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Q=new cn({color:"#c8e6ed",metalness:1,roughness:.16}),ut=new ot(new Ln(.54,2),Q);ut.position.set(vc.x,vc.y,vc.z),ut.castShadow=!0,i.add(ut);let at=p.map((_,C)=>{let{x:N,z:Z}=vp(C);return k("\xC9chantillon "+p[C][0],N,.325,Z,.65,.65,.65,C,0,1,1,!0).mesh}),St=new Ke(1,12).rotateX(-Math.PI/2),Xt=new ze({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Wt(_){let C=new ot(St,Xt);return C.scale.setScalar(_),i.add(C),C}function E(_,C,N,Z,z,dt,et,ht){let lt=C>=3;t.shadowMap.enabled=lt,h.castShadow=lt,Xt.opacity=C===2?.17:.11,D.value=ht?.38+N*.04:0;let J=C>=9?2048:C>=6?1024:C>=4?512:256;h.shadow.intensity=.45+C*.055,h.shadow.radius=.65+C*.12;let _t=13+C*1.2;Object.assign(h.shadow.camera,{left:-_t,right:_t,top:_t,bottom:-_t}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==J&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(J,J)),o.visible=z,et!==A&&(A=et,y.forEach((pt,xt)=>{let Ft=pt.userData.texture??pt.map,U=S.has(xt)?et:Math.min(256,et);if(Ft.image.width===U)return;let gt=document.createElement("canvas");gt.width=gt.height=U;let bt=gt.getContext("2d");U>512?b(bt,xt,U):bt.drawImage(R[xt],0,0,U,U);let Rt=new ui(gt);Rt.colorSpace=Ft.colorSpace,Rt.wrapS=Ft.wrapS,Rt.wrapT=Ft.wrapT,Rt.repeat.copy(Ft.repeat);for(let mt of[pt,I[xt]])mt.userData.texture=Rt,mt.map=Rt,mt.needsUpdate=!0;Ft.dispose()}));let Lt=_>=4;for(let pt of V)pt.mesh?.isMesh&&!pt.zone&&(pt.mesh.material=Lt?y[pt.type]:I[pt.type]);st.material=Lt?y[3]:I[3];for(let pt=0;pt<at.length;pt++)at[pt].material=Lt?y[pt]:I[pt];y.forEach((pt,xt)=>{for(let Ft of[pt,I[xt]])Ft.userData.texture||(Ft.userData.texture=Ft.map),Ft.map=dt?Ft.userData.texture:null,Ft.color.set(dt?"#ffffff":p[xt][1]),Ft.needsUpdate=!0}),g=Z?.21+N*.067:0,Q.metalness=Z?.95:.1,Q.roughness=Z?.13:.46,s.visible=_>=2,m(f)}return{boxes:V,floors:H,probe:ut,display:at,visual:E,shadow:Wt,setTimeOfDay:m,centerShadows:x,get hillSeed(){return te},setHillSeed:P,bakeLightmap:F,mapMaterial:(_,C)=>C>=4?y[_]:I[_],builtObjects:[...V.map(_=>_.mesh).filter(_=>_?.isObject3D),ut,...G],materials:[...y,...I],focus(_,C,N){L.value=_?C*.75:0,w.value=.07+N*.058}}}function bp(i,t,e){let n=new hn({color:16777215,vertexColors:!0,flatShading:!0}),s=new pe(.16,.25,3.15,9,12),r=s.attributes.position,o=new kt,a=[];for(let $=0;$<r.count;$++){let Mt=Math.round((r.getY($)+1.575)/3.15*12),Et=Math.floor((Math.atan2(r.getX($),r.getZ($))+Math.PI)*1.43);o.setHSL(.084+Mt*.002,.35,.35+Mt%3*.032+Et%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Bt(a,3));let l=new $e;l.position.set(mu.x,0,mu.z),l.rotation.z=-.14,i.add(l);let c=new ot(s,n);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function h($,Mt,Et=.85){let Ot=$.getWorldPosition(new M),It=$.getWorldQuaternion(new ce);t.push({half:Mt,min:Mt.clone().negate(),position:Ot,quaternion:It,mesh:{position:Ot,quaternion:It},shape:Ar(Mt),friction:Et,gravity:1})}for(let $=0;$<4;$++){let Mt=new be;Mt.position.y=($+.5)*3.15/4,l.add(Mt);let Et=.237-$*.022;h(Mt,new M(Et,.398,Et))}let u=[],d=[],f=3.14;function m($,Mt,Et,Ot){u.push(...$,...Mt,...Et),o.setHSL(.25+Ot*.043,.54,.28+Ot*.17);for(let It=0;It<3;It++)d.push(o.r,o.g,o.b)}for(let $=0;$<10;$++){let Ot=function(It,Y){let it=It*Et;return[Math.cos(Mt)*it-Math.sin(Mt)*Y,f+Math.sin(It*Math.PI)*.38-It*It*.54+$%3*.055,Math.sin(Mt)*it+Math.cos(Mt)*Y]},Mt=$*2.39996,Et=1.35+$%4*.2;for(let It=0;It<7;It++){let Y=It/7,it=(It+1)/7,wt=.285*Math.sin(Math.PI*Y)**.7,Pt=.285*Math.sin(Math.PI*it)**.7;for(let At of[-1,1]){let Gt=Ot(Y,wt*At),te=Ot(it,Pt*At);Gt[1]-=.065,te[1]-=.065,m(Ot(Y,0),Gt,te,.31+It%4*.14),m(Ot(Y,0),te,Ot(it,0),.47+$%3*.16)}}}let x=new ne;x.setAttribute("position",new Bt(u,3)),x.setAttribute("color",new Bt(d,3)),x.computeVertexNormals();let g=new ot(x,new hn({vertexColors:!0,side:Ve,flatShading:!0}));g.castShadow=!0,l.add(g);let p=new cn({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let $=0;$<5;$++){let Mt=$*Math.PI*2/5,Et=new ot(new Ln(.124,1),p);Et.position.set(Math.cos(Mt)*(.25+$%2*.1),2.88+$%3*.06,Math.sin(Mt)*(.25+$%2*.1)),Et.scale.set(.91,1.16,.91),Et.castShadow=!0,l.add(Et),b.push(Et)}l.updateMatrixWorld(!0);let S=[],y=[],R=new hn({color:"#485d5d",flatShading:!0});function A([$,Mt],Et,Ot){let It=new ot(new Yt(.095,.68,.11),R);It.position.set($,.34,Mt+.46),It.castShadow=It.receiveShadow=!0,i.add(It),h(It,new M(.0475,.34,.055));let Y=new $e;Y.position.set($,.85,Mt+.4),Y.rotation.x=-.35,i.add(Y);let it=new ot(new Yt(.64,.36,.055),new hn({color:"#182831"}));Y.add(it);let wt=document.createElement("canvas");wt.width=512,wt.height=96;let Pt=wt.getContext("2d"),At=new ui(wt);At.colorSpace=ye;let Gt=new ot(new ln(.61,.095),new ze({map:At}));Gt.position.set(0,.116,.03),Y.add(Gt);let te=.592/Ot.length,P=Ot.map(([tt,K],Q)=>{let ut=new ot(new Yt(te-.012,.155,.04),new hn({color:"#478086"}));ut.position.set(-.296+te*(Q+.5),-.045,.046),Y.add(ut),S.push(ut),ut.userData.touchWidth=te-.012;let at=document.createElement("canvas");at.width=208,at.height=172;let St=new ui(at);St.colorSpace=ye;let Xt=new ot(new ln(te-.017,.139),new ze({map:St}));Xt.position.z=.0205,ut.add(Xt);let Wt=-1/0;return ut.userData.action=()=>{let E=performance.now();E-Wt<250||(Wt=E,K(),I(),ut.position.z=.036,setTimeout(()=>{ut.position.z=.046},115))},{label:tt,context:at.getContext("2d"),texture:St}});function st(){Pt.fillStyle="#182831",Pt.fillRect(0,0,512,96),Pt.fillStyle="#ffe1a0",Pt.font="bold 38px system-ui",Pt.fillText(Et,17,62,478);for(let tt of P){let K=tt.context;K.fillStyle="#386269",K.fillRect(0,0,208,172),K.fillStyle="#fff2d5",K.textAlign="center",K.font="bold 27px system-ui";let Q=(typeof tt.label=="function"?tt.label():tt.label).split("|");Q.forEach((ut,at)=>K.fillText(ut,104,(Q.length>1?68:97)+at*37,188)),tt.texture.needsUpdate=!0}At.needsUpdate=!0}y.push(st)}function I(){for(let $ of y)$()}A(Pr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>e.spawn(0,Ir[0])],["Boule",()=>e.spawn(1,Ir[0])],["T\xE9tra\xE8dre",()=>e.spawn(2,Ir[0])],["Vider",e.clear]]),A(Pr.largeObjects,"GROS OBJETS",[["Rectangle",()=>e.spawn(4,Ir[1])],["Sph\xE8re",()=>e.spawn(5,Ir[1])]]),A(Pr.rendering,"RENDU",[[()=>"Qualit\xE9|"+e.quality(),e.qualityNext],[()=>"R\xE9solution XR|"+e.resolution(),e.resolutionNext],[()=>"Textures|"+e.textureSize(),e.textureNext]]),A(Pr.course,"PARCOURS",[["Retour|d\xE9part",e.resetPlayer],["Remettre|objets",e.resetObjects],["Hitboxes|Low / High",e.hitbox],["Appuis|On / Off",e.movement]]),A(Pr.coconuts,"COCOTIER",[["Remettre|les cocos",e.resetTree],["Vider|les objets",e.clear]]),I();let L=new $e,{x:w,y:v,z:D}=gu;L.position.set(w,v,D),i.add(L);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let $=0;$<3;$++){let Mt=[.9,.58,.27][$],Et=new ot(new Ke(Mt,20),new hn({color:F[$],side:Ve}));Et.position.z=$*.012,L.add(Et)}let V=new ot(new Yt(.14,1.5,.14),R);V.position.set(0,.75-v,-.11),L.add(V);let G=0,k=document.createElement("canvas");k.width=256,k.height=64;let H=k.getContext("2d"),j=new ui(k);j.colorSpace=ye;let W=new ot(new ln(1.4,.35),new ze({map:j,side:Ve}));W.position.set(0,2.64-v,.02),L.add(W);function nt(){H.fillStyle="#182831",H.fillRect(0,0,256,64),H.textAlign="center",H.font="bold 28px system-ui",H.fillStyle="#fff0ce",H.fillText("CIBLE  \xB7  "+G,128,42),j.needsUpdate=!0}function ft($){for(let Mt of $){if(!Mt.beforePhysics||Mt.owner||Mt.frozen||!Mt.mesh.visible)continue;let Et=Mt.beforePhysics,Ot=Mt.mesh.position;if(Et.z<=D||Ot.z>D||Mt.velocity.z>=-1)continue;let It=(Et.z-D)/(Et.z-Ot.z),Y=Math.hypot(Kt.lerp(Et.x,Ot.x,It)-w,Kt.lerp(Et.y,Ot.y,It)-v);Y<=.9+Mt.radius*.45&&(G+=Y<.27?3:Y<.58?2:1,nt())}}return nt(),{targets:S,coconuts:b,redraw:I,updateTarget:ft,score:()=>G,setScore($){G=$,nt()}}}function Sc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ne,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=wp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=wp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function wp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var wc=0,jv=1,Qv=new M,Tp=new No,_u=new on,Ep=new M,bc=new vn,Tc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ec,this.unassigned=new Ec,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new xu(t[e]));this._compute()}return this}setFromObject(t){let e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){let e=this.faces;for(let n=0,s=e.length;n<s;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,Qv)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}_removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){let e=t.outside,n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}_deleteFaceVertices(t,e){let n=this._removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;e.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{let n=e.next,s=this.tolerance,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.mark===wc){let l=a.distanceToPoint(e.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(e,r),e=n}while(e!==null)}return this}_computeExtremes(){let t=new M,e=new M,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:s}}_computeInitialHull(){let t=this.vertices,e=this._computeExtremes(),n=e.min,s=e.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,h;r=0,Tp.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l){Tp.closestPointToPoint(m.point,!0,Ep);let x=Ep.distanceToSquared(m.point);x>r&&(r=x,c=m)}}r=-1,_u.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c){let x=Math.abs(_u.distanceToPoint(m.point));x>r&&(r=x,h=m)}}let u=[];if(_u.distanceToPoint(h.point)<0){u.push(ei.create(a,l,c),ei.create(h,l,a),ei.create(h,c,l),ei.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(ei.create(a,c,l),ei.create(h,a,l),ei.create(h,l,c),ei.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=t.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,x=this.faces[g])}x!==null&&this._addVertexToFace(m,x)}}return this}_reindexFaces(){let t=[];for(let e=0;e<this.faces.length;e++){let n=this.faces[e];n.mark===wc&&t.push(n)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===n);return t}}_computeHorizon(t,e,n,s){this._deleteFaceVertices(n),n.mark=jv;let r;e===null?r=e=n.getEdge(0):r=e.next;do{let o=r.twin,a=o.face;a.mark===wc&&(a.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,o,a,s):s.push(r)),r=r.next}while(r!==e);return this}_addAdjoiningFace(t,e){let n=ei.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}_addNewFaces(t,e){this.newFaces=[];let n=null,s=null;for(let r=0;r<e.length;r++){let o=e[r],a=this._addAdjoiningFace(t,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(t){let e=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,e),this._addNewFaces(t,e),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}},ei=class i{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=wc,this.edge=null}static create(t,e,n){let s=new i,r=new Jo(t,s),o=new Jo(e,s),a=new Jo(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){let t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return bc.set(t.point,e.point,n.point),bc.getNormal(this.normal),bc.getMidpoint(this.midpoint),this.area=bc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}},Jo=class{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}},xu=class{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}},Ec=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}};var Ts=class extends ne{constructor(t=[]){super();let e=[],n=[],r=new Tc().setFromPoints(t).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;e.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Bt(e,3)),this.setAttribute("normal",new Bt(n,3))}};var Tn=Math.PI*2,Ac=.84,Ei=128;function Xi(i){let t=new Uint8Array(Ei*Ei*4);for(let n=0;n<Ei;n++)for(let s=0;s<Ei;s++){let r=(s+.5)/Ei,o=(n+.5)/Ei,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/Ac,1),Math.min(o/Ac,1),s,n),l=(s+n*Ei)*4;for(let c=0;c<3;c++)t[l+c]=Kt.clamp(Math.round(a[c]),0,255);t[l+3]=255}let e=new ci(t,Ei,Ei);return e.colorSpace=ye,e.generateMipmaps=!0,e.minFilter=bn,e.magFilter=je,e.needsUpdate=!0,e}function Es(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Qt(i,t,e=!1){let n=i.index?i.toNonIndexed():i,s=new kt(t),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),e?r.setXY(l,r.getX(l)*Ac,r.getY(l)*Ac):r.setXY(l,.95,.95);return n.setAttribute("color",new ve(a,3)),n}function qi(i,t,e,n,s,r,o,a=0){return{id:i,name:t,collisionGeo:n,mass:e,geo:Sc(s),material:new cn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Ap(i,t,e){let n=i/2,s=t/2,r=new us;return r.moveTo(-n+e,-s),r.lineTo(n-e,-s),r.quadraticCurveTo(n,-s,n,-s+e),r.lineTo(n,s-e),r.quadraticCurveTo(n,s,n-e,s),r.lineTo(-n+e,s),r.quadraticCurveTo(-n,s,-n,s-e),r.lineTo(-n,-s+e),r.quadraticCurveTo(-n,-s,-n+e,-s),r}function Hi(i,t,e,n,s){return new Co(Ap(i,t,n),{depth:e,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-e/2)}function Wi(i,t,e=n=>n){let n=[],s=[],r=[];for(let h=0;h<i.length;h++){let[u,d]=i[h];for(let f=0;f<=t;f++){let m=Tn*f/t,x=e(u,d,m,h);if(n.push(x*Math.sin(m),d,x*Math.cos(m)),s.push(f/t,h/(i.length-1)),h===i.length-1||f===t)continue;let g=h*(t+1)+f,p=g+t+1;u>0&&r.push(g,g+1,p),i[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new ne;o.setAttribute("position",new Bt(n,3)),o.setAttribute("uv",new Bt(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let h=0;h<i.length;h++){let u=h*(t+1),d=u+t;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Ko(i,t){let e=[];for(let[n,s]of i){if(n===0){e.push(new M(0,s,0));continue}for(let r=0;r<t;r++){let o=Tn*r/t;e.push(new M(n*Math.sin(o),s,n*Math.cos(o)))}}return new Ts(e)}function tM(){let e=new Ro(Ap(.098,.185,.008),3).translate(0,-.001,.0116),n=e.attributes.position;for(let l=0;l<n.count;l++){let c=Kt.clamp(n.getX(l)/.098+.5,0,1),h=Kt.clamp((n.getY(l)+.001)/.185+.5,0,1);e.attributes.uv.setXY(l,c,h)}let s=Xi((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Tn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[Qt(Hi(.106,.207,.013,.011,.0019),8425890),Qt(Hi(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),Qt(Hi(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),Qt(e,16777215,!0),Qt(Hi(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),Qt(new Yt(.0036,.024,.004).translate(.055,.029,0),11714250),Qt(new Yt(.0036,.015,.004).translate(-.055,.032,0),11385285),Qt(new Yt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(Qt(new pe(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(Qt(new Ke(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(Qt(new Ke(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ts([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new M(c,h,l))));return qi("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function eM(){let t=[-.165,-.055,.055,.165],e=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Wi(e,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...t.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Xi((a,l,c,h)=>{let u=Tn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...t.map(b=>Math.exp(-(((d-b+.035*Math.cos(u))/.009)**2)))),x=f**3*m,g=Es(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+p,76+24*f+70*x+p,24+11*f+52*x+p*.8]}),o=Ko([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return qi("bread","Baguette de pain",.27,o,[Qt(s,16777215,!0)],r,.9)}function nM(){let i=Xi((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*Es(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),t=Wi([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),e=Wi([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[Qt(t,16777215,!0),Qt(e,11056059),Qt(new pe(.067,.067,.124,10).rotateX(Math.PI/2),9346214),Qt(new pe(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Tn*r/5;n.push(Qt(new Yt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ko([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return qi("wheel","Roue",1.8,s,n,i,.64,.23)}function iM(){let i=Xi((r,o,a,l)=>{let c=Es(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Tn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),t=Wi([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),e=new Un(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Tn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new Ts(n);return qi("cup","Tasse",.39,s,[Qt(t,16777215,!0),Qt(e,15785922)],i,.37)}function sM(){let i=Wi([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),t=Xi((s,r,o,a)=>{let l=9*Es(o,a),c=11*Math.cos(s*Tn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Tn*48+s*Tn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Tn*4);return[h,h*1.13,h*1.24]}),e=[Qt(i,16777215,!0),Qt(new pr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),Qt(new Ke(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),Qt(new Ke(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),Qt(new pe(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),Qt(new Ke(.008,12).translate(0,.035,.0336),15633202)],n=Ko([[.033,-.143],[.054,.133]],6);return qi("flashlight","Lampe torche",.31,n,e,t,.46,.28)}function rM(){let i=Wi([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),t=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],e=Xi((r,o,a,l)=>{let c=10*Es(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Tn*r*2));if(t[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Tn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),n=[Qt(i,16777215,!0),Qt(new Ke(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),Qt(new pr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),Qt(new Ke(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ko([[.069,-.112],[.069,.109]],6);return qi("soda","Canette de soda",.35,s,n,e,.42,.27)}function oM(){let i=Wi([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),t=Xi((s,r,o,a)=>{let l=15*Es(o,a),c=8*Math.cos(s*Tn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),e=[Qt(i,16777215,!0),Qt(Hi(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),Qt(new Ke(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=Ko([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return qi("cone","C\xF4ne de chantier",.58,n,e,t,.78)}function aM(){let i=Xi((s,r,o,a)=>{let l=8*Es(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),t=Wi([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),e=[Qt(Hi(.138,.22,.061,.016,.004),14788675),Qt(Hi(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),Qt(new ln(.106,.174).translate(0,-.004,.0395),16777215,!0),Qt(t,2502456),Qt(new pe(.014,.017,.016,10).translate(.04,.117,.001),2503482),Qt(new Yt(.008,.047,.027).translate(-.072,.014,-.002),3028798),Qt(new Yt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),Qt(new Ke(.004,8).translate(.04,.066,.0397),15817792),Qt(new Ke(.004,8).translate(-.04,.066,.0397),7903100),Qt(Hi(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return qi("radio","Talkie-walkie",.43,new Ts(n),e,i,.61,.08)}function Cp(){return[tM(),eM(),nM(),iM(),sM(),rM(),oM(),aM()]}var lM=[0,1,2,3,4,5,7,8,9,10];function Rp(i){yp.forEach(({x:t,z:e},n)=>i(lM[n],new M(t,.8,e)))}function Pp(){let i=[["Cube",new Yt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ln(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Po(.29),"#d8ae53",0,1],["Brique",new Yt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Yt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ln(.6,4),"#dbab58",.6,3.7],["Coco",new Ln(.124,1),"#956238",.124,.44]].map(([t,e,n,s,r])=>({name:t,geo:e,mass:r,shape:Yo(e,s),material:new cn({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Ar(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:t,sphere:e=0,...n}of Cp()){let s=Yo(t??n.geo,e);i.push({...n,shape:s,lowShape:s})}return i}var cM="gorilla-lab-models-v1",vu=Object.freeze({models:12,parts:64,fileBytes:18e4}),hM=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),Dp=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),uM=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),dM=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,fM=/^#[a-f\d]{6}$/i;function Ip(i,t){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||t}function yu(i,t,e,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?Kt.clamp(i[s],e,n):t)}function Mu(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>vu.models)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let t=new Set;return{version:1,models:i.models.map(n=>{if(typeof n?.id!="string"||!dM.test(n.id)||t.has(n.id)||!Array.isArray(n.parts)||n.parts.length>vu.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return t.add(n.id),{id:n.id,name:Ip(n.name,"Mod\xE8le sans nom"),kind:n.kind==="structure"?"structure":"prop",inGame:n.inGame===!0,properties:Object.fromEntries(Object.entries(uM).map(([s,r])=>[s,typeof n.properties?.[s]=="boolean"?n.properties[s]:r])),parts:n.parts.map((s,r)=>({name:Ip(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(hM,s?.shape)?s.shape:"box",position:yu(s?.position,0,-3,3),rotation:yu(s?.rotation,0,-360,360),scale:yu(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&fM.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(Dp,s?.surface)?s.surface:"plain"}))}}),avatarId:typeof i.avatarId=="string"&&t.has(i.avatarId)?i.avatarId:null}}function Lp(i){try{let t=(i??globalThis.localStorage)?.getItem(cM);if(t&&t.length<=vu.fileBytes)return Mu(JSON.parse(t))}catch{}return{version:1,models:[],avatarId:null}}function pM(i){switch(i){case"sphere":return new $n(.5,20,12);case"cylinder":return new pe(.5,.5,1,20);case"cone":return new hs(.5,1,20);case"torus":return new Un(.365,.135,8,24);case"capsule":return new yo(.28,.44,6,16);case"diamond":return new Vn(.5);default:return new Yt(1,1,1)}}var Up=Object.keys(Dp),Dr=64,$o=4,Np=2,Ai;function mM(i,t,e){let n=Math.sin(t*127.1+e*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return t%16<2||e%16<2?135:255;case"stripes":return(t+e)%16<6?155:255;case"wood":return 204+24*Math.sin(e*.75+Math.sin(t*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function gM(){if(Ai)return Ai;let i=Dr*$o,t=Dr*Np,e=new Uint8Array(i*t*4);for(let n=0;n<t;n++)for(let s=0;s<i;s++){let r=Math.floor(n/Dr)*$o+Math.floor(s/Dr),o=mM(Up[r],s%Dr,n%Dr),a=(n*i+s)*4;e[a]=e[a+1]=e[a+2]=o,e[a+3]=255}return Ai=new ci(e,i,t),Ai.colorSpace=ye,Ai.magFilter=je,Ai.minFilter=bn,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}function Fp(i){let t=pM(i.shape),e=t.index?t.toNonIndexed():t;e!==t&&t.dispose();let n=i.rotation.map(Kt.degToRad);e.scale(...i.scale),e.rotateX(n[0]),e.rotateY(n[1]),e.rotateZ(n[2]),e.translate(...i.position);let s=new kt(i.color),r=e.attributes.position.count,o=new Float32Array(r*3),a=e.attributes.uv,l=Up.indexOf(i.surface),c=l%$o,h=Math.floor(l/$o);for(let u=0;u<r;u++)s.toArray(o,u*3),a.setXY(u,(c+.05+a.getX(u)*.9)/$o,(h+.05+a.getY(u)*.9)/Np);return e.setAttribute("color",new ve(o,3)),e}function Op(){return new cn({vertexColors:!0,map:gM(),roughness:.68})}function _M(i){let t=i.map(Fp),e=Sc(t);return t.forEach(n=>n.dispose()),e.center(),e.computeBoundingBox(),e}function Bp(i){let t=_M(i.parts),e=t.boundingBox.getSize(new M);return t.scale(1/Math.max(e.x,1e-5),1/Math.max(e.y,1e-5),1/Math.max(e.z,1e-5)),t.computeBoundingBox(),t}function zp(i){let t=new He;for(let e of i.parts){let n=Fp(e);n.computeBoundingBox(),t.union(n.boundingBox),n.dispose()}return t.getSize(new M)}var Vp=Object.freeze([8,16,32,48]),Gp=16,Cc=24,kp=new WeakMap,Yi=Kt.clamp,Ur=Kt.lerp,bu=i=>i*i*(3-2*i);function Lr(i,t,e,n){return Number.isFinite(i)?Yi(i,t,e):n}function Nr(i={}){let t=Vp.includes(i?.detail)?i.detail:Gp,e=i?.heights;return{detail:t,seed:Math.round(Lr(i?.seed,0,2147483647,1)),amplitude:Lr(i?.amplitude,0,12,0),frequency:Lr(i?.frequency,.015,2,.12),grass:Lr(i?.grass,0,1,0),shrub:Lr(i?.shrub,0,1,0),heights:Array.isArray(e)&&e.length===(t+1)**2?Array.from(e,n=>Lr(n,-Cc,Cc,0)):null}}function Hp(i,t,e,n){let s=Yi(e,0,t),r=Yi(n,0,t),o=Math.min(t-1,Math.floor(s)),a=Math.min(t-1,Math.floor(r)),l=s-o,c=r-a,h=t+1,u=a*h+o,d=i[u],f=i[u+1],m=i[u+h],x=i[u+h+1];return l+c<=1?d+(f-d)*l+(m-d)*c:x+(m-x)*(1-l)+(f-x)*(1-c)}function Wp(i,t){let e=Vp.includes(t)?t:Gp;if(e===i.detail)return i;if(!i.heights)return{...i,detail:e,heights:null};let n=e+1,s=i.detail/e,r=Array.from({length:n**2},(o,a)=>Hp(i.heights,i.detail,a%n*s,Math.floor(a/n)*s));return{...i,detail:e,heights:r}}function Ci(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e+1,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Su(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=bu(i-n),o=bu(t-s),a=Ur(Ci(n,s,e),Ci(n+1,s,e),r),l=Ur(Ci(n,s+1,e),Ci(n+1,s+1,e),r);return 2*Ur(a,l,o)-1}function wu(i){let{w:t,d:e,terrain:n}=i,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=n,c=kp.get(i),h=c&&c.w===t&&c.d===e&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(h&&c.heights===l)return c;let u=s+1,d=h?c.procedural:new Float64Array(u**2);if(!h&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let p=(g/s-.5)*t*a,b=(x/s-.5)*e*a;d[x*u+g]=o*(.62*Su(p,b,r)+.26*Su(p*2.03,b*2.03,r+13)+.12*Su(p*4.13,b*4.13,r+37))}let f=l?d.map((x,g)=>x+l[g]):d,m={w:t,d:e,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:d,surface:f};return kp.set(i,m),m}function Xp(i,t,e){let{detail:n,w:s,d:r,surface:o}=i;return Hp(o,n,(t/s+.5)*n,(e/r+.5)*n)}function xM(i,t,e){let{detail:n,surface:s}=i,r=n+1,o=Math.max(0,t-1),a=Math.min(n,t+1),l=Math.max(0,e-1),c=Math.min(n,e+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===t&&d===e||(h+=s[d*r+f],u++);return h/u}function qp(i,t,e,{mode:n,radius:s,strength:r,target:o}={}){if(!i?.terrain||!["raise","lower","smooth","flatten"].includes(n)||![t,e,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=wu(i),{detail:l,w:c,d:h,surface:u,procedural:d}=a,f=t-i.x,m=e-i.z,x=Yi(f,-c/2,c/2),g=Yi(m,-h/2,h/2);if((f-x)**2+(m-g)**2>=s**2)return!1;let p=(f/c+.5)*l,b=(m/h+.5)*l,S=c/l,y=h/l,R=Math.max(0,Math.ceil(p-s/S)),A=Math.min(l,Math.floor(p+s/S)),I=Math.max(0,Math.ceil(b-s/y)),L=Math.min(l,Math.floor(b+s/y)),w=Number.isFinite(o)?o-i.y:Xp(a,f,m),v=l+1,D=a.heights?.slice()??new Array(v**2).fill(0),F=!1,V=!1;function G(k,H,j){F=!0;let W=H*v+k,nt=D[W],ft;if(n==="raise"||n==="lower")ft=nt+(n==="raise"?1:-1)*r*j;else{let $=n==="flatten"?w:xM(a,k,H);ft=Ur(u[W],$,Math.min(1,r)*j)-d[W]}ft=Yi(ft,-Cc,Cc),!(Math.abs(ft-nt)<1e-7)&&(D[W]=ft,V=!0)}for(let k=I;k<=L;k++)for(let H=R;H<=A;H++){let j=Math.hypot((H-p)*S,(k-b)*y)/s;j<1&&G(H,k,bu(1-j))}if(!F){let k=Yi(p,0,l),H=Yi(b,0,l),j=Math.min(l-1,Math.floor(k)),W=Math.min(l-1,Math.floor(H)),nt=k-j,ft=H-W,$=nt+ft<=1,Mt=$?1-nt-ft:nt+ft-1,Et=$?nt:1-ft,Ot=$?ft:1-nt;if(Mt>=Math.max(Et,Ot)){let It=+!$;G(j+It,W+It,1)}else Et>=Ot?G(j+1,W,1):G(j,W+1,1)}return V&&(i.terrain.heights=D),V}function Tu(i){let{w:t,d:e,terrain:n}=i,{detail:s}=n,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let d=0;d<=s;d++){let f=u*r+d;o[3*f]=(d/s-.5)*t,o[3*f+2]=(u/s-.5)*e,a[2*f]=d/s*t/2.6,a[2*f+1]=(1-u/s)*e/2.6,u<s&&d<s&&(l.set([f,f+r,f+1,f+r+1,f+1,f+r],c),c+=6)}let h=new ne;return h.setAttribute("position",new ve(o,3).setUsage(Xo)),h.setAttribute("uv",new ve(a,2)),h.setIndex(new ve(l,1)),yM(h,i),h}function yM(i,t){let{surface:e}=wu(t),{position:n}=i.attributes;for(let s=0;s<e.length;s++)n.setY(s,e[s]);n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere(),i.boundingBox&&i.computeBoundingBox()}function vM(){let i=[];for(let e=0;e<5;e++){let n=e*2.4,s=Math.cos(n),r=Math.sin(n),o=s*.105,a=r*.105;i.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+e%3*.07,a+r*.16)}let t=new ne;return t.setAttribute("position",new Bt(i,3)),t.computeVertexNormals(),t}function MM(){return new Ln(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var SM=[{name:"grass",geometry:vM,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:MM,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Yp(i){let t=new $e;for(let{name:e,geometry:n,perMetre:s,max:r,salt:o,color:a}of SM){let l=i.terrain[e];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,i.w*i.d*s)*l)),h=new hn({color:a,side:e==="grass"?Ve:Zn});h.flatShading=!0;let u=new po(n(),h,c);u.name=e,u.instanceMatrix.setUsage(Xo),u.userData.salt=o,u.receiveShadow=!0;let d=new kt;for(let f=0;f<c;f++){let m=Ur(.68,1.2,Ci(f,o,i.terrain.seed+4));u.setColorAt(f,d.setRGB(m,m,m))}t.add(u)}return bM(t,i),t}function bM(i,t){let e=wu(t),n=new be;for(let s of i.children){let{salt:r}=s.userData,{seed:o}=t.terrain;for(let a=0;a<s.count;a++){let l=(Ci(a,r,o)-.5)*.96*t.w,c=(Ci(a,r,o+1)-.5)*.96*t.d;n.position.set(l,Xp(e,l,c),c),n.rotation.y=Ci(a,r,o+2)*2*Math.PI,n.scale.setScalar(Ur(.58,1.34,Ci(a,r,o+3))),n.updateMatrix(),s.setMatrixAt(a,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Zp(i){if(i){for(let t of i.children)t.geometry.dispose(),t.material.dispose(),t.dispose();i.clear(),i.removeFromParent()}}var Eu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Jp=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Kp(i,t=Jp[i]){i=Math.max(0,Math.min(Eu.length-1,i|0));let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.fillStyle=/^#[a-f0-9]{6}$/i.test(t)?t:Jp[i],n.fillRect(0,0,512,512);let s=(i+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])n.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;n.fillStyle=r()>.46?"#fcf5dc":"#212131",n.globalAlpha=.025+r()*.19,o(l,c,i===4?3+r()*62:1+r()*9,1+r()*(i===4?3:8))}if(i===5){n.fillStyle="#151d22",n.globalAlpha=.47;for(let a=0;a<512;a+=128)n.fillRect(0,a,512,3),n.fillRect(a,0,3,512)}return e}var As=new gs,dn=new M,Zi=new M,Ce=new ce,$p={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},Au={type:"change"},jp={type:"mouseDown",mode:null},Qp={type:"mouseUp",mode:null},tm={type:"objectChange"},Lc=class extends _s{constructor(t,e=null){super(void 0,e);let n=new Ru(this);this._root=n;let s=new Pu;this._gizmo=s,n.add(s);let r=new Iu;this._plane=r,n.add(r);let o=this;function a(S,y){let R=y;Object.defineProperty(o,S,{get:function(){return R!==void 0?R:y},set:function(A){R!==A&&(R=A,r[S]=A,s[S]=A,o.dispatchEvent({type:S+"-changed",value:A}),o.dispatchEvent(Au))}}),o[S]=y,r[S]=y,s[S]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,h=new ce,u=new ce,d=new M,f=new ce,m=new M,x=new M,g=new M,p=0,b=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",p),a("eye",b),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new ce,this._parentQuaternionInv=new ce,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new ce,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new ce,this._scaleStart=new M,this._getPointer=wM.bind(this),this._onPointerDown=EM.bind(this),this._onPointerHover=TM.bind(this),this._onPointerMove=AM.bind(this),this._onPointerUp=CM.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&As.setFromCamera(t,this.camera);let e=Cu(this._gizmo.picker[this.mode],As);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&As.setFromCamera(t,this.camera);let e=Cu(this._plane,As,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,jp.mode=this.mode,this.dispatchEvent(jp)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&As.setFromCamera(t,this.camera);let o=Cu(this._plane,As,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ce.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(dn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(dn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Zi.set(a,a,a)}else dn.copy(this.pointStart),Zi.copy(this.pointEnd),dn.applyQuaternion(this._worldQuaternionInv),Zi.applyQuaternion(this._worldQuaternionInv),Zi.divide(dn),e.search("X")===-1&&(Zi.x=1),e.search("Y")===-1&&(Zi.y=1),e.search("Z")===-1&&(Zi.z=1);s.scale.copy(this._scaleStart).multiply(Zi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(dn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(dn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy($p[e]),dn.copy($p[e]),r==="local"&&dn.applyQuaternion(this.worldQuaternion),dn.cross(this.eye),dn.length()===0?l=!0:this.rotationAngle=this._offset.dot(dn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ce.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ce.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Au),this.dispatchEvent(tm)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Qp.mode=this.mode,this.dispatchEvent(Qp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Au),this.dispatchEvent(tm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return As}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function wM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function TM(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function EM(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function AM(i){this.enabled&&this.pointerMove(this._getPointer(i))}function CM(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Cu(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var Rc=new Je,Me=new M(0,1,0),em=new M(0,0,0),nm=new oe,Pc=new ce,Dc=new ce,pi=new M,im=new oe,ta=new M(1,0,0),Cs=new M(0,1,0),ea=new M(0,0,1),Ic=new M,jo=new M,Qo=new M,Ru=class extends be{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},Pu=class extends be{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new ze({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new hi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let u=t.clone();u.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25;let f=t.clone();f.color.setHex(16776960);let m=t.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new pe(0,.04,.1,12);x.translate(0,.05,0);let g=new Yt(.08,.08,.08);g.translate(0,.04,0);let p=new ne;p.setAttribute("position",new Bt([0,0,0,1,0,0],3));let b=new pe(.0075,.0075,.5,3);b.translate(0,.25,0);function S(k,H){let j=new Un(k,.0075,3,64,H*Math.PI*2);return j.rotateY(Math.PI/2),j.rotateX(Math.PI/2),j}function y(){let k=new ne;return k.setAttribute("position",new Bt([0,0,0,1,1,1],3)),k}let R={X:[[new ot(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ot(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ot(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ot(x,o),[0,.5,0]],[new ot(x,o),[0,-.5,0],[Math.PI,0,0]],[new ot(b,o)]],Z:[[new ot(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ot(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ot(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new ot(new Vn(.1,0),u),[0,0,0]]],XY:[[new ot(new Yt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ot(new Yt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ot(new Yt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ot(new pe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ot(new pe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ot(new pe(.2,0,.6,4),n),[0,.3,0]],[new ot(new pe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ot(new pe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ot(new pe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ot(new Vn(.2,0),n)]],XY:[[new ot(new Yt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ot(new Yt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ot(new Yt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new ot(new Vn(.01,2),s),null,null,null,"helper"]],END:[[new ot(new Vn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Sn(y(),s),null,null,null,"helper"]],X:[[new Sn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Sn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Sn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new ot(S(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new ot(S(.5,.5),r)]],Y:[[new ot(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ot(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ot(S(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Sn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new ot(new $n(.25,10,8),n)]],X:[[new ot(new Un(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ot(new Un(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ot(new Un(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ot(new Un(.75,.1,2,24),n)]]},D={X:[[new ot(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new ot(b,r),[0,0,0],[0,0,-Math.PI/2]],[new ot(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ot(g,o),[0,.5,0]],[new ot(b,o)],[new ot(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ot(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ot(b,a),[0,0,0],[Math.PI/2,0,0]],[new ot(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ot(new Yt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ot(new Yt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ot(new Yt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ot(new Yt(.1,.1,.1),u)]]},F={X:[[new ot(new pe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ot(new pe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ot(new pe(.2,0,.6,4),n),[0,.3,0]],[new ot(new pe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ot(new pe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ot(new pe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ot(new Yt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ot(new Yt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ot(new Yt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ot(new Yt(.2,.2,.2),n),[0,0,0]]]},V={X:[[new Sn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Sn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Sn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(k){let H=new be;for(let j in k)for(let W=k[j].length;W--;){let nt=k[j][W][0].clone(),ft=k[j][W][1],$=k[j][W][2],Mt=k[j][W][3],Et=k[j][W][4];nt.name=j,nt.tag=Et,ft&&nt.position.set(ft[0],ft[1],ft[2]),$&&nt.rotation.set($[0],$[1],$[2]),Mt&&nt.scale.set(Mt[0],Mt[1],Mt[2]),nt.updateMatrix();let Ot=nt.geometry.clone();Ot.applyMatrix4(nt.matrix),nt.geometry=Ot,nt.renderOrder=1/0,nt.position.set(0,0,0),nt.rotation.set(0,0,0),nt.scale.set(1,1,1),H.add(nt)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(R)),this.add(this.gizmo.rotate=G(L)),this.add(this.gizmo.scale=G(D)),this.add(this.picker.translate=G(A)),this.add(this.picker.rotate=G(v)),this.add(this.picker.scale=G(F)),this.add(this.helper.translate=G(I)),this.add(this.helper.rotate=G(w)),this.add(this.helper.scale=G(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Dc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ce.setFromEuler(Rc.set(0,0,0)),o.quaternion.copy(n).multiply(Ce),Math.abs(Me.copy(ta).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ce.setFromEuler(Rc.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ce),Math.abs(Me.copy(Cs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ce.setFromEuler(Rc.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ce),Math.abs(Me.copy(ea).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ce.setFromEuler(Rc.set(0,Math.PI/2,0)),Me.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(nm.lookAt(em,Me,Cs)),o.quaternion.multiply(Ce),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),dn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),dn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(dn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Me.copy(ta).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Me.copy(Cs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Me.copy(ea).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Me.copy(ea).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Me.copy(ta).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Me.copy(Cs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Pc.copy(n),Me.copy(this.eye).applyQuaternion(Ce.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(nm.lookAt(this.eye,em,Cs)),o.name==="X"&&(Ce.setFromAxisAngle(ta,Math.atan2(-Me.y,Me.z)),Ce.multiplyQuaternions(Pc,Ce),o.quaternion.copy(Ce)),o.name==="Y"&&(Ce.setFromAxisAngle(Cs,Math.atan2(Me.x,Me.z)),Ce.multiplyQuaternions(Pc,Ce),o.quaternion.copy(Ce)),o.name==="Z"&&(Ce.setFromAxisAngle(ea,Math.atan2(Me.y,Me.x)),Ce.multiplyQuaternions(Pc,Ce),o.quaternion.copy(Ce))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},Iu=class extends ot{constructor(){super(new ln(1e5,1e5,2,2),new ze({visible:!1,wireframe:!0,side:Ve,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ic.copy(ta).applyQuaternion(e==="local"?this.worldQuaternion:Dc),jo.copy(Cs).applyQuaternion(e==="local"?this.worldQuaternion:Dc),Qo.copy(ea).applyQuaternion(e==="local"?this.worldQuaternion:Dc),Me.copy(jo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Me.copy(this.eye).cross(Ic),pi.copy(Ic).cross(Me);break;case"Y":Me.copy(this.eye).cross(jo),pi.copy(jo).cross(Me);break;case"Z":Me.copy(this.eye).cross(Qo),pi.copy(Qo).cross(Me);break;case"XY":pi.copy(Qo);break;case"YZ":pi.copy(Ic);break;case"XZ":Me.copy(Qo),pi.copy(jo);break;case"XYZ":case"E":pi.set(0,0,0);break}break;case"rotate":default:pi.set(0,0,0)}pi.length()===0?this.quaternion.copy(this.cameraQuaternion):(im.lookAt(dn.set(0,0,0),pi,Me),this.quaternion.setFromRotationMatrix(im)),super.updateMatrixWorld(t)}};var sm={type:"change"},Lu={type:"start"},om={type:"end"},Uc=new Oi,rm=new on,RM=Math.cos(70*Kt.DEG2RAD),qe=new M,En=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6,Nc=class extends _s{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new ce,this._lastTargetPosition=new M,this._quat=new ce().setFromUnitVectors(t.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gr,this._sphericalDelta=new gr,this._scale=1,this._panOffset=new M,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new M,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IM.bind(this),this._onPointerDown=PM.bind(this),this._onPointerUp=DM.bind(this),this._onContextMenu=zM.bind(this),this._onMouseWheel=NM.bind(this),this._onKeyDown=FM.bind(this),this._onTouchStart=OM.bind(this),this._onTouchMove=BM.bind(this),this._onMouseDown=LM.bind(this),this._onMouseMove=UM.bind(this),this._interceptControlDown=kM.bind(this),this._interceptControlUp=VM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sm),this.update(),this.state=ge.NONE}update(t=null){let e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=qe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<RM?this.object.lookAt(this.target):(rm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(rm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?En/60*this.autoRotateSpeed*t:En/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function PM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function IM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function DM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(om),this.state=ge.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function LM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case Gn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case Gn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Lu)}function UM(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function NM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(Lu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(om))}function FM(i){this.enabled!==!1&&this._handleKeyDown(i)}function OM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Lu)}function BM(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function zM(i){this.enabled!==!1&&i.preventDefault()}function kM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var lm=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Uu=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],na={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},GM=3e6,ia=240,tn=(i,t,e,n)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,am=(i,t,e)=>typeof i=="string"&&i.trim()?i.trim().slice(0,t):e;function ni(i){if(typeof i=="string"){if(i.length>GM)throw Error("Cette map d\xE9passe 3 Mo.");i=JSON.parse(i)}if(i?.format!=="gorilla-lab-map"||i.version!==1||!Array.isArray(i.pieces)||i.pieces.length<1||i.pieces.length>ia)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+ia+" pi\xE8ces.");let t=i.spawn??{};return{format:"gorilla-lab-map",version:1,...i.arenaBase===!0?{arenaBase:!0}:{},name:am(i.name,56,"Ma map"),spawn:{x:tn(t.x,-120,120,0),y:tn(t.y,-10,30,.06),z:tn(t.z,-120,120,3),yaw:tn(t.yaw,-360,360,0)},pieces:i.pieces.map((e,n)=>{if(!e||typeof e!="object")throw Error("Pi\xE8ce invalide : "+(n+1));let s=e.terrain&&typeof e.terrain=="object"?Nr(e.terrain):null,r=e.model?Mu({version:1,models:[e.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:am(e.name,36,"Pi\xE8ce "+(n+1)),x:tn(e.x,-120,120,0),y:tn(e.y,-12,33,0),z:tn(e.z,-120,120,0),w:tn(e.w,.2,64,3),h:tn(e.h,.12,36,.5),d:tn(e.d,.2,64,3),pitch:s?0:tn(e.pitch,-180,180,0),yaw:s?0:tn(e.yaw,-360,360,0),roll:s?0:tn(e.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},material:Math.round(tn(e.material,0,16,0)),color:typeof e.color=="string"&&/^#[a-f0-9]{6}$/i.test(e.color)?e.color:"#ffffff",grip:tn(e.grip,0,1.5,.8),gravity:tn(e.gravity,.05,2.5,1),bounce:tn(e.bounce,0,1.65,1),solid:e.solid!==!1,texture:typeof e.texture=="string"&&e.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(e.texture)?e.texture:null}})}}function cm(i){return ni({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{..._p,yaw:0},pieces:i.filter(t=>t.half&&t.mesh?.isObject3D).map(t=>({name:t.name,x:t.position.x,y:t.position.y,z:t.position.z,w:t.half.x*2,h:t.half.y*2,d:t.half.z*2,pitch:t.mesh.rotation.x*180/Math.PI,material:t.type,grip:t.friction,gravity:t.gravity}))})}function hm(){let i=(t,e,n,s,r,o,a,l,c={})=>({name:t,x:e,y:n,z:s,w:r,h:o,d:a,material:l,...c});return ni({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[i("Placette",0,-.24,1,13,.48,12,0),i("Piste de glace",-5,-.24,-10,5,.48,11,12,na.ice),i("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,na.moon),i("Couloir central",0,-.24,-12,5,.48,14,9),i("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),i("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),i("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),i("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,na.rubber)]})}function Rs(i={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...i}}function um(i,t,e,n=.25){if(!i||!t||!Number.isFinite(n)||n<=0)return null;let s=t,r=new Je(-e.pitch*Math.PI/180,-e.yaw*Math.PI/180,-(e.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*e.w+Math.abs(o.y)*e.h+Math.abs(o.z)*e.d)*.5,l=f=>Math.round(f/n)*n,c=l(i.x+s.x*a),h=l(i.y+s.y*a),u=l(i.z+s.z*a),d=a-(c-i.x)*s.x-(h-i.y)*s.y-(u-i.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>120||Math.abs(u)>120||h<-12||h>33?null:{...e,x:c,y:h,z:u}}var dm="gorilla-lab-custom-map-v1";function fm(i){let t=new Blob([JSON.stringify(ni(i),null,2)],{type:"application/json"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=i.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",n.click(),setTimeout(()=>URL.revokeObjectURL(e),1200)}var yt=i=>document.getElementById(i),vm=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],Mm=[...document.querySelectorAll(".tool")],Sm="gorilla-lab-editor-draft",HM=Lp(localStorage),kc=HM.models.filter(i=>i.parts.length);yt("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...kc.map(i=>new Option(i.name+(i.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),i.id)));var pm=new URLSearchParams(location.search).get("model");kc.some(i=>i.id===pm)&&(yt("model-library").value=pm);yt("place-model").disabled=!kc.length;function bm(){return kc.find(i=>i.id===yt("model-library").value)}function WM(){let i=bm();if(!i)return null;let t=zp(i);return Rs({name:i.name.slice(0,36),model:structuredClone(i),x:0,y:Math.max(.15,t.y/2),z:0,w:Kt.clamp(t.x,.2,64),h:Kt.clamp(t.y,.12,36),d:Kt.clamp(t.z,.2,64),color:"#ffffff",solid:i.properties.collidable!==!1})}yt("model-library").addEventListener("change",()=>{se==="model"&&Qi(null)});var Nu={block:Rs(),ramp:Rs({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:Rs({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Nr({amplitude:.7,grass:.34})}),wall:Rs({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},wm={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire un cube color\xE9 pour modifier un axe. Sur un terrain, les poign\xE9es X et Z r\xE8glent son emprise.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",spawn:"Clique sur une surface pour placer le d\xE9part du joueur.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},zt,Fe=-1,se="move",he=null,fn=null,Ji=[],Fn=yt("preview"),we=yt("plan"),ie=we.getContext("2d"),_n={scale:10,cx:0,cz:-6,width:30,height:40},Vc=new mc({canvas:Fn,antialias:!0});Vc.setPixelRatio(Math.min(devicePixelRatio,1.5));var Ue=new rn(52,1,.1,640);Ue.position.set(16,15,19);var Ae=new Nc(Ue,Fn);Ae.target.set(0,0,-5);Ae.mouseButtons.LEFT=null;Ae.mouseButtons.RIGHT=Gn.ROTATE;Ae.mouseButtons.MIDDLE=Gn.PAN;Ae.maxDistance=580;Ae.maxPolarAngle=Math.PI/2-.035;var xn=new or;xn.background=new kt("#8fb6c6");var Tm=new ps("#f0f5ff","#8e775c",2.6);xn.add(Tm);var Gu=new ms("#fff1d2",1.8);Gu.position.set(-9,18,6);xn.add(Gu);var $i=new or;$i.fog=new ho("#a6d4ea",55,135);var zr=Sp($i,Vc),Em=()=>cm(zr.boxes);zt=Em();bp($i,zr.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"});var XM=Pp();Rp((i,t)=>{let{geo:e,material:n}=XM[i],s=new ot(e,n);e.computeBoundingBox(),s.position.set(t.x,-e.boundingBox.min.y,t.z),$i.add(s)});var Am=new ot(new Yt(1.8,2.03,.1),new cn({color:"#8daebc",metalness:.9,roughness:.12}));Am.position.set(yc.x,yc.y,yc.z);$i.add(Am);var qM=zr.boxes.filter(i=>i.half&&i.mesh?.isObject3D);qM.forEach(i=>i.mesh.removeFromParent());var Hu=new $e;Hu.add(...$i.children);xn.add(Hu);var Bu=zr.boxes.find(i=>i.heightfield).mesh;zr.visual(7,0,7,!0,!0,!0,512,!1);var aa=new Fo(60,60,"#d7e2e5","#5e7b8a");aa.material.transparent=!0;aa.material.opacity=.35;xn.add(aa);var Ne=new $e;xn.add(Ne);var _e=new Lc(Ue,Fn);_e.setSize(.9);_e.setRotationSnap(Kt.degToRad(5));_e.enabled=!1;xn.add(_e.getHelper());var Wu=new Set(["translate","rotate","scale"]),ra=null,An=null,Xu=!1,Fr=null,sa=!1,Cm=()=>Number(yt("magnet-distance").value);for(let i of["magnet-mode","magnet-distance"]){try{let t=localStorage.getItem("gorilla-lab-"+i);[...yt(i).options].some(e=>e.value===t)&&(yt(i).value=t)}catch{}yt(i).onchange=()=>{An=null;try{localStorage.setItem("gorilla-lab-"+i,yt(i).value)}catch{}}}var Ps=new Map;try{yt("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}yt("magnet").onchange=()=>{An=null,Ps.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",yt("magnet").checked?"on":"off")}catch{}};for(let i of["keydown","keyup"])window.addEventListener(i,t=>{Xu=t.altKey});window.addEventListener("blur",()=>{Xu=!1,An=null});function Rm(i,t,e,n){let s={...t};if(!n)for(let m of e)s[m]=Math.round(t[m]/la())*la();if(n||!yt("magnet").checked||!i.solid||i.terrain)return An=null,s;let r=Cm(),o=yt("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let x=new Je(...[m.pitch,m.yaw,m.roll??0].map(Kt.degToRad),"YXZ"),g=new oe().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((p,b)=>[p,(Math.abs(g[b])*m.w+Math.abs(g[4+b])*m.h+Math.abs(g[8+b])*m.d)/2]))},c=l(i);if(!c)return s;let h=[];for(let m of zt.pieces){if(m===i)continue;let x=l(m);if(x)for(let g of e){let p=Object.keys(a).filter(y=>y!==g),b=y=>Math.abs(s[y]-m[y])<c[y]+x[y]-.001,S=p.flatMap(y=>e.includes(y)&&b(p.find(R=>R!==y))?[-1,1].flatMap(R=>[-1,1].map(A=>{let I=m[y]+R*x[y]-A*c[y];return{key:y,value:I,distance:Math.abs(t[y]-I)}})):[]).sort((y,R)=>y.distance-R.distance)[0];if(!(o?!S||S.distance>r*1.8:!p.every(b)))for(let y of[-1,1]){let R=m[g]+y*(c[g]+x[g]),A=zt.pieces.indexOf(m)+":"+g+":"+y;h.push({key:A,axis:g,value:R,edge:o?S:null,distance:Math.max(Math.abs(R-t[g]),o?S.distance:0)})}}}let u=h.find(m=>m.key===An),d=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;An&&(Ps.set(An,(Ps.get(An)??0)+1),An=null);let f=h.filter(m=>m.distance<=r&&(Ps.get(m.key)??0)<3).sort((m,x)=>m.distance-x.distance)[0];if(f)d(f),An=f.key;else for(let m of h)m.distance<=r&&(Ps.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=t[m.axis]);return s}var zu=new Yt(1,1,1),YM=new Do,Gc=new ot(new hs(.32,.75,5),new ze({color:"#ffcd63"}));xn.add(Gc);var Or=new ot(zu,new ze({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Br=new ot(new $n(.055,10,8),new ze({color:"#ffc85a",depthTest:!1}));Br.visible=!1;Br.renderOrder=20;xn.add(Br);var oa=new ot(Gc.geometry,new ze({color:"#ffe084",opacity:.65,transparent:!0,depthWrite:!1}));Or.visible=oa.visible=!1;xn.add(Or,oa);var Ki=new gs,Hc=new M(0,1,0),mm=new on(Hc,0),ZM=new $t,mi=null,Fu=!1;function pn(){Fu||(Fu=!0,requestAnimationFrame(()=>{Fu=!1,Vc.render(xn,Ue)}))}function Pm(){let i=Fn.clientWidth||1,t=Fn.clientHeight||1;Vc.setSize(i,t,!1),Ue.aspect=i/t,Ue.updateProjectionMatrix(),pn()}function Im(){let i=Math.max(1,we.clientWidth),t=Math.max(1,we.clientHeight);i===we.width&&t===we.height||(we.width=i,we.height=t,Dm(),ji())}new ResizeObserver(Pm).observe(Fn);new ResizeObserver(Im).observe(we);Ae.addEventListener("change",pn);Ae.addEventListener("start",()=>Qi(null));function Dm(){_n.scale=Math.min(we.width/_n.width,we.height/_n.height)}function qu(i,t){return[we.width/2+(i-_n.cx)*_n.scale,we.height/2+(t-_n.cz)*_n.scale]}function JM(i){let t=we.getBoundingClientRect();return{x:((i.clientX-t.left)*we.width/t.width-we.width/2)/_n.scale+_n.cx,z:((i.clientY-t.top)*we.height/t.height-we.height/2)/_n.scale+_n.cz}}function gm(i,t,e,n,s){let[r,o]=qu(i.x,i.z),a=Kt.degToRad(i.pitch),l=Kt.degToRad(i.roll??0),c=Math.abs(Math.cos(l))*i.w+Math.abs(Math.sin(l))*i.h,h=Math.abs(Math.cos(a))*i.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*i.w+Math.abs(Math.cos(l))*i.h);ie.save(),ie.translate(r,o),ie.rotate(-Kt.degToRad(i.yaw));let u=c*_n.scale,d=h*_n.scale;ie.globalAlpha=s,ie.fillStyle=t,ie.fillRect(-u/2,-d/2,u,d),ie.globalAlpha=1,ie.strokeStyle=e,ie.lineWidth=n,ie.strokeRect(-u/2,-d/2,u,d),ie.restore()}function _m(i,t){let[e,n]=qu(i.x,i.z);ie.save(),ie.translate(e,n),ie.rotate(Kt.degToRad(-i.yaw)),ie.fillStyle=t?"#fff0bb":"#ffd16e",ie.strokeStyle="#263740",ie.lineWidth=1.5,ie.beginPath(),ie.moveTo(0,-8),ie.lineTo(6,5),ie.lineTo(0,3),ie.lineTo(-6,5),ie.closePath(),ie.fill(),ie.stroke(),ie.restore()}function ji(){ie.fillStyle="#192e3a",ie.fillRect(0,0,we.width,we.height),ie.strokeStyle="#37505f",ie.lineWidth=1;let i=_n.scale<4?5:1;for(let e=-120;e<=120;e+=i){let[n,s]=qu(e,e);n>=0&&n<=we.width&&(ie.beginPath(),ie.moveTo(n,0),ie.lineTo(n,we.height),ie.stroke()),s>=0&&s<=we.height&&(ie.beginPath(),ie.moveTo(0,s),ie.lineTo(we.width,s),ie.stroke())}let t=zt.pieces.map((e,n)=>({piece:e,index:n})).sort((e,n)=>e.piece.y-n.piece.y);for(let{piece:e,index:n}of t){let s=e.model?.parts[0]?.color??(e.color==="#ffffff"?Uu[e.material]:e.color);gm(e,s,n===Fe?"#ffe095":"#a4bac7",n===Fe?2:1,e.solid?.86:.38)}_m(zt.spawn,!1),fn&&(se==="spawn"?_m(fn,!0):gm(fn,"#8ee7fc","#afefff",2,.45))}function Oc(i,t){i.position.set(t.x,t.y,t.z),t.terrain&&i!==Or?i.scale.setScalar(1):i.scale.set(t.w,t.h,t.d),i.rotation.set(Kt.degToRad(t.pitch),Kt.degToRad(t.yaw),Kt.degToRad(t.roll??0),"YXZ"),i.updateMatrixWorld()}function Lm(){mi&&(xn.remove(mi),mi.geometry.dispose(),mi.material.dispose());let i=Ne.children[Fe];mi=i?new Oo(i,"#ffdf88"):null,mi&&xn.add(mi),ku()}function ku(){let i=Ne.children[Fe],t=Oe()?.terrain,e=Wu.has(se)&&!!i&&!(t&&se==="rotate");if(_e.enabled=e,!e){_e.detach(),t&&se==="rotate"&&(yt("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}_e.setMode(se),_e.setSpace(se==="translate"?"world":"local"),_e.setTranslationSnap(null),_e.showX=_e.showZ=!0,_e.showY=!(t&&se==="scale"),_e.attach(i),yt("tool-help").textContent=wm[se]}_e.addEventListener("change",pn);_e.addEventListener("mouseDown",()=>{let i=Oe();An=null,i&&(ra={map:structuredClone(zt),selected:Fe})});_e.addEventListener("objectChange",()=>{let i=Oe(),t=_e.object,e=ra?.map.pieces[Fe];if(!i||!t||!e)return;let n=Kt.clamp;if(se==="translate"){let s=["x","y","z"].filter(o=>(_e.axis??"XYZ").includes(o.toUpperCase())),r=Rm(i,{x:t.position.x,y:t.position.y,z:t.position.z},s,Xu);i.x=n(r.x,-120,120),i.y=n(r.y,-12,33),i.z=n(r.z,-120,120),t.position.set(i.x,i.y,i.z)}else se==="rotate"?(i.pitch=Kt.radToDeg(t.rotation.x),i.yaw=Kt.radToDeg(t.rotation.y),i.roll=Kt.radToDeg(t.rotation.z)):(i.w=n(t.scale.x*(i.terrain?e.w:1),.2,64),i.d=n(t.scale.z*(i.terrain?e.d:1),.2,64),i.terrain||(i.h=n(t.scale.y,.12,36)),t.scale.set(i.terrain?i.w/e.w:i.w,i.terrain?1:i.h,i.terrain?i.d/e.d:i.d));t.updateMatrixWorld(!0),mi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])yt("p-"+s).value=Number(i[s]??0).toFixed(2);ji(),pn()});_e.addEventListener("dragging-changed",({value:i})=>{if(Ae.enabled=!i,i||!ra)return;let t=ra;ra=null,JSON.stringify(t.map.pieces[Fe])!==JSON.stringify(Oe())&&(Ji.length>=35&&Ji.shift(),Ji.push(t),zt=ni(zt),Ye(),Ge("Transformation appliqu\xE9e."))});Fn.addEventListener("pointerup",()=>{_e.dragging||(Ae.enabled=!0)});Fn.addEventListener("pointercancel",()=>{_e.dragging&&_e.pointerUp(null),Ae.enabled=!0});function KM(){_e.detach();for(let i of[...Ne.children])Ne.remove(i),i.geometry!==zu&&i.geometry.dispose(),i.userData.vegetation&&Zp(i.userData.vegetation),i.userData.ownsTexture&&i.material.map?.dispose(),i.material.dispose();Hu.visible=!!zt.arenaBase,Gu.visible=Tm.visible=!zt.arenaBase,xn.fog=zt.arenaBase?$i.fog:null,xn.environment=zt.arenaBase?$i.environment:null;for(let i of zt.pieces){if(i.model){let r=new ot(Bp(i.model),Op());r.castShadow=r.receiveShadow=!0,Ne.add(r),Oc(r,i);continue}let t=[10,11,12].includes(i.material),e=new hn({color:new kt(Uu[i.material]).multiply(new kt(i.color)),transparent:!i.solid||t,opacity:i.solid?t?.55:1:.4});if(zt.arenaBase&&!i.texture){let r=zr.mapMaterial(i.material,7);e.color.set(i.color),e.map=r.map,e.opacity=i.solid?r.opacity:.4,e.transparent=!i.solid||r.transparent}i.texture&&(e.map=YM.load(i.texture,pn),e.map.colorSpace=ye,e.map.wrapS=e.map.wrapT=oi,e.color.set(i.color));let n=i.terrain?Tu(i):i.texture||zt.arenaBase?_c(i.w,i.h,i.d).scale(1/i.w,1/i.h,1/i.d):zu,s=new ot(n,e);if(s.userData.ownsTexture=!!i.texture,i.terrain){let r=Yp(i);r&&(s.add(r),s.userData.vegetation=r)}Ne.add(s),Oc(s,i)}Gc.position.set(zt.spawn.x,zt.spawn.y+.38,zt.spawn.z),Lm()}function Oe(){return zt.pieces[Fe]}function Ge(i){yt("editor-note").textContent=i}function en(){Ji.length>=35&&Ji.shift(),Ji.push({map:structuredClone(zt),selected:Fe}),yt("undo").disabled=!1}function Um(){try{localStorage.setItem(Sm,JSON.stringify(zt)),yt("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"}catch{yt("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."}}var xm=i=>i.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Nm(){let i=xm(yt("piece-search").value.trim()),t=[];zt.pieces.forEach((e,n)=>{xm(e.name).includes(i)&&t.push(new Option(e.name,n,!1,n===Fe))}),yt("pieces").replaceChildren(...t),yt("pieces").value=String(Fe),t.length||yt("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),t.length||(yt("pieces").options[0].disabled=!0),yt("count").textContent=i?t.length+" sur "+zt.pieces.length:zt.pieces.length+" / "+ia}function Fm(){Nm();let i=Oe();yt("piece-inspector").hidden=!i,yt("selection-help").hidden=!!i,yt("focus-piece").disabled=!i,yt("selection-title").textContent=i?i.name:"Aucune pi\xE8ce s\xE9lectionn\xE9e";for(let e of vm){let n=yt("p-"+e);n.disabled=!i,e==="solid"?n.checked=i?.solid??!1:n.value=i?.[e]??(e==="color"?"#ffffff":"")}for(let e of["rotate","duplicate","texture-file","surface","spawn-here"])yt(e).disabled=!i;yt("delete").disabled=!i||zt.pieces.length===1,yt("texture-clear").disabled=!i?.texture;let t=i?.terrain;if(yt("terrain-controls").hidden=!t,t){for(let e of Hm)yt("terrain-"+e).value=t[e];yt("p-pitch").disabled=yt("p-yaw").disabled=yt("p-roll").disabled=!0}yt("rotate").disabled=!i||!!t,yt("texture-create").disabled=!i,yt("surface").value="",yt("undo").disabled=Ji.length===0}function Ye(){yt("map-name").value=zt.name,Fm();for(let i of["x","y","z","yaw"])yt("spawn-"+i).value=zt.spawn[i];KM(),ji(),pn(),Um()}function Bc(i){Fe!==i&&(Fe=i,An=null,Ps.clear(),Fm(),Lm(),ji(),pn())}function Om(i){if(zt.pieces.length>=ia)return Ge("Limite de pi\xE8ces atteinte.");en(),zt.pieces.push(i),Fe=zt.pieces.length-1,Ye(),Ge(i.name+" ajout\xE9 \xE0 la map.")}function Bm(){if(!Oe()||zt.pieces.length===1)return;let i=Oe().name;en(),zt.pieces.splice(Fe,1),Fe=Math.min(Fe,zt.pieces.length-1),Ye(),Ge(i+" retir\xE9 de la map.")}function zm(){let i=Oe();if(!i)return;let t=Kt.clamp(i.x+i.w+la(),-120,120);Om({...i,name:(i.name+" bis").slice(0,36),x:t})}function $M(){let i=Oe();!i||i.terrain||(en(),i.yaw=(i.yaw+45)%360,Ye())}function km(){let i=Ji.pop();i&&(zt=i.map,Fe=i.selected,Qi(null),Ye(),Ge("Derni\xE8re modification annul\xE9e."))}function ca(i){se=i,Ae.mouseButtons.LEFT=se==="view"?Gn.ROTATE:null,ku(),pn();for(let t of Mm)t.setAttribute("aria-pressed",String(t.dataset.tool===se));for(let t of[Fn,we])t.dataset.tool=se,t.removeAttribute("data-hit");yt("tool-help").textContent=wm[se],ku(),pn(),Qi(null)}function ha(){let i=new He().setFromObject(Ne);i.expandByPoint(Gc.position);let t=i.getCenter(new M),e=i.getSize(new M);_n={cx:t.x,cz:t.z,width:e.x+5,height:e.z+5},Dm();let n=Math.max(1,Math.ceil(Math.max(e.x,e.z)/40));aa.scale.setScalar(n),aa.position.set(Math.round(t.x/n)*n,-.035,Math.round(t.z/n)*n);let s=Ue.position.clone().sub(Ae.target).normalize(),r=new M().crossVectors(Hc,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Kt.degToRad(Ue.fov/2))*.87,l=a*Ue.aspect,c=6;for(let h of[i.min.x,i.max.x])for(let u of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let f=new M(h,u,d).sub(t),m=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,m+f.dot(s))}c=Math.min(c,Ae.maxDistance),Ae.target.copy(t),Ue.position.copy(t).addScaledVector(s,c),Ae.update(),Ue.updateMatrixWorld(),ji(),pn()}function Yu(i,t){en(),zt=i,An=null,Ps.clear(),Fe=-1,yt("piece-search").value="",ca("move"),Ye(),ha(),Ge(t)}function la(){return Number(yt("snap").value)}function Fc(i){let t=la();return Kt.clamp(Math.round(i/t)*t,-120,120)}function Zu(i,t){if(i===we){let e=JM(t);Ki.set(new M(e.x,80,e.z),new M(0,-1,0))}else{let e=Fn.getBoundingClientRect();Ue.updateMatrixWorld(),Ki.setFromCamera({x:(t.clientX-e.left)/e.width*2-1,y:1-(t.clientY-e.top)/e.height*2},Ue)}}function Vu(i){return mm.constant=-i,Ki.ray.intersectPlane(mm,new M)}function zc(i,t){return Zu(i,t),Ki.intersectObjects(zt.arenaBase?[...Ne.children,Bu]:Ne.children,!1)[0]}function Vm(i,t,e,n=null){Ki.set(new M(i,80,t),new M(0,-1,0));let s=n?Ki.intersectObject(n,!1)[0]:Ki.intersectObjects(zt.arenaBase?[...Ne.children,Bu]:Ne.children,!1).find(r=>r.object===Bu||zt.pieces[Ne.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:i,y:Math.max(-10,s.point.y+.08),z:t,yaw:e}}function Gm(i,t){Fr=null,sa=!1;let e=zc(i,t);if(se==="spawn"){if(!e)return null;let l=Fc(e.point.x),c=Fc(e.point.z);return Vm(l,c,zt.spawn.yaw)}if(se==="terrain"){let l=e?.point??Vu(0);return l?{...Nu.terrain,terrain:Nr(Nu.terrain.terrain),x:Fc(l.x),y:l.y,z:Fc(l.z)}:null}if(se==="sculpt"||se==="model"&&!bm())return null;let n=e?.point??Vu(0);if(!n)return null;let s=e?e.face.normal.clone().applyNormalMatrix(ZM.getNormalMatrix(e.object.matrixWorld)):Hc,r=e&&jM(e),o=Cm();r&&r.distance<=o*2&&(Fr=r.point,sa=yt("magnet").checked&&!t.altKey&&yt("magnet-mode").value==="edge"&&r.point.distanceTo(n)<=o);let a=sa||t.altKey?1e-6:la();return um(sa?Fr:n,s,se==="model"?WM():Nu[se],a)}function jM(i){let t=i.object,e=zt.pieces[Ne.children.indexOf(t)];if(!e||e.terrain)return null;let n=t.worldToLocal(i.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(i.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=n.clone();c[a]=l;let h=t.localToWorld(c.clone()).distanceTo(i.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:t.localToWorld(c)})}return o}function Qi(i){if(!i&&!fn)return;fn=i;let t=yt("placement-measures");if(t.hidden=!fn||se==="spawn",!t.hidden){let e=n=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(n);t.textContent=[fn.w,fn.h,fn.d].map(e).join(" \xD7 ")+" m (L \xD7 H \xD7 P)"+(Fr?sa?" \xB7 Milieu accroch\xE9":" \xB7 Rep\xE8re : milieu de l\u2019ar\xEAte":"")}Br.visible=!!(fn&&Fr),Br.visible&&Br.position.copy(Fr),oa.visible=!!(fn&&se==="spawn"),Or.visible=!!(fn&&se!=="spawn"),oa.visible&&oa.position.set(fn.x,fn.y+.38,fn.z),Or.visible&&Oc(Or,fn),ji(),pn()}function QM(i,t){let e=Gm(i,t);if(!e){Ge(se==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}se==="spawn"?(en(),zt.spawn=e,ca("move"),Ye(),Ge("Point de d\xE9part d\xE9plac\xE9.")):(Qi(null),Om(e))}function tS(i,t){if(se==="view"||t.button!==0||!t.isPrimary||he||_e.dragging)return;if(Wu.has(se)){if(i===Fn&&_e.enabled){let o=Fn.getBoundingClientRect();if(_e.pointerHover({x:(t.clientX-o.left)/o.width*2-1,y:1-(t.clientY-o.top)/o.height*2,button:0}),_e.axis){Ae.enabled=!1;return}}t.stopImmediatePropagation();let r=zc(i,t);Bc(r?Ne.children.indexOf(r.object):-1);return}t.stopImmediatePropagation(),i.focus({preventScroll:!0}),i.setPointerCapture(t.pointerId);let e={canvas:i,id:t.pointerId,clientX:t.clientX,clientY:t.clientY,tool:se};if(he=e,An=null,se==="sculpt"){Wm(i,t);return}if(se!=="move")return;let n=zc(i,t);Bc(n?Ne.children.indexOf(n.object):-1);let s=Oe();!n||!s||(e.height=n.point.y,e.dx=n.point.x-s.x,e.dz=n.point.z-s.z)}function eS(i,t){if(se==="view"||Wu.has(se))return;if(!he){se==="move"?i.toggleAttribute("data-hit",!!zc(i,t)):Qi(Gm(i,t));return}if(se==="sculpt"&&he.id===t.pointerId&&he.canvas===i){Math.hypot(t.clientX-he.clientX,t.clientY-he.clientY)>=7&&(Wm(i,t),he.clientX=t.clientX,he.clientY=t.clientY);return}if(he.id!==t.pointerId||he.canvas!==i||he.height===void 0||!Oe()||Math.hypot(t.clientX-he.clientX,t.clientY-he.clientY)<4&&!he.recorded)return;Zu(i,t);let n=Vu(he.height);if(!n)return;let s=Oe(),r=Rm(s,{x:n.x-he.dx,y:s.y,z:n.z-he.dz},["x","z"],t.altKey),o=Kt.clamp(r.x,-120,120),a=Kt.clamp(r.z,-120,120);o===s.x&&a===s.z||(he.recorded||(en(),he.recorded=!0,i.toggleAttribute("data-dragging",!0)),s.x=o,s.z=a,Oc(Ne.children[Fe],s),mi?.update(),yt("p-x").value=o,yt("p-z").value=a,ji(),pn())}function Ou(i,t,e){if(!he||he.canvas!==i||he.id!==t.pointerId)return;let n=he;if(he=null,i.hasPointerCapture(t.pointerId)&&i.releasePointerCapture(t.pointerId),i.removeAttribute("data-dragging"),n.tool==="sculpt"){n.recorded&&(Ye(),Ge("Relief modifi\xE9."));return}n.recorded&&(Um(),Ge(Oe().name+" d\xE9plac\xE9.")),e&&se===n.tool&&se!=="move"&&Math.hypot(t.clientX-n.clientX,t.clientY-n.clientY)<6&&QM(i,t)}for(let i of[Fn,we])i.addEventListener("pointerdown",t=>tS(i,t),{capture:!0}),i.addEventListener("pointermove",t=>eS(i,t)),i.addEventListener("pointerup",t=>Ou(i,t,!0)),i.addEventListener("pointercancel",t=>Ou(i,t,!1)),i.addEventListener("lostpointercapture",t=>{i.hasPointerCapture(t.pointerId)||Ou(i,t,!1)}),i.addEventListener("pointerleave",()=>{he||Qi(null)});yt("p-material").append(...lm.map((i,t)=>new Option(i,t)));for(let i of vm)yt("p-"+i).addEventListener("change",t=>{let e=Oe();if(!e)return;en();let n=t.target;i==="solid"?e[i]=n.checked:e[i]=["name","color"].includes(i)?n.value:Number(n.value),zt=ni(zt),Ye()});yt("map-name").onchange=i=>{en(),zt.name=i.target.value,zt=ni(zt),Ye()};yt("piece-search").addEventListener("input",Nm);yt("pieces").onchange=i=>{i.target.value!==""&&Bc(Number(i.target.value))};yt("focus-piece").onclick=()=>{let i=Ne.children[Fe];if(!i)return;let t=new He().setFromObject(i).getBoundingSphere(new kn),e=Ue.position.clone().sub(Ae.target).normalize(),n=Math.atan(Math.tan(Kt.degToRad(Ue.fov/2))*Math.min(Ue.aspect,1)),s=Math.max(1.5,t.radius/Math.sin(n)*1.15);Ae.target.copy(t.center),Ue.position.copy(t.center).addScaledVector(e,s),Ae.update(),pn()};for(let i of["x","y","z","yaw"])yt("spawn-"+i).onchange=t=>{en(),zt.spawn[i]=Number(t.target.value),zt=ni(zt),Ye()};yt("spawn-here").onclick=()=>{let i=Oe();if(!i)return;let t=i.solid&&Vm(i.x,i.z,i.yaw,Ne.children[Fe]);if(!t)return Ge("Choisis une pi\xE8ce solide pour placer le d\xE9part.");en(),zt.spawn=t,Ye(),Ge("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let i of Mm)i.onclick=()=>ca(i.dataset.tool);yt("duplicate").onclick=zm;yt("delete").onclick=Bm;yt("rotate").onclick=$M;yt("undo").onclick=km;yt("zoom-fit").onclick=ha;yt("snap").onchange=()=>Qi(null);yt("new-example").onclick=()=>Yu(Em(),"Ar\xE8ne de d\xE9part ouverte.");yt("blank-map").onclick=()=>Yu({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Rs({name:"Sol",y:-.25,w:24,d:24})]},"Nouvelle map cr\xE9\xE9e. S\xE9lectionne Bloc, Rampe ou Mur, puis clique o\xF9 le poser.");yt("surface").onchange=i=>{let t=na[i.target.value],e=Oe();!t||!e||(en(),Object.assign(e,t),Ye())};yt("texture-file").onchange=async i=>{let t=i.target.files[0],e=Oe();if(!(!t||!e))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Choisis un PNG, JPG ou WebP.");let n=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(n.width,n.height));s.width=Math.max(1,Math.round(n.width*r)),s.height=Math.max(1,Math.round(n.height*r)),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!zt.pieces.includes(e))return Ge("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");en(),e.texture=o,Ye(),Ge("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(n){Ge(n.message)}finally{i.target.value=""}};yt("texture-clear").onclick=()=>{Oe()?.texture&&(en(),Oe().texture=null,Ye())};yt("import-map").onchange=async i=>{let t=i.target.files[0];if(t)try{Yu(ni(await t.text()),"Map charg\xE9e.")}catch(e){Ge(e.message)}finally{i.target.value=""}};yt("export-map").onclick=()=>{try{fm(zt),Ge("Map JSON export\xE9e.")}catch(i){Ge(i.message)}};yt("test-map").onclick=()=>{try{localStorage.setItem(dm,JSON.stringify(ni(zt))),location.href="./?custom=1"}catch{Ge("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Hm=["detail","seed","amplitude","frequency","grass","shrub"];for(let i of Hm)yt("terrain-"+i).onchange=t=>{let e=Oe();e?.terrain&&(en(),e.terrain=i==="detail"?Wp(e.terrain,Number(t.target.value)):Nr({...e.terrain,[i]:Number(t.target.value)}),Ye())};yt("terrain-reset").onclick=()=>{Oe()?.terrain&&(en(),Oe().terrain.heights=null,Ye())};function Wm(i,t){Zu(i,t);let e=Ki.intersectObjects(Ne.children,!1).find(a=>zt.pieces[Ne.children.indexOf(a.object)]?.terrain),n=e?Ne.children.indexOf(e.object):-1,s=zt.pieces[n];if(!s?.terrain||(he.recorded||(en(),he.recorded=!0,he.flattenY=e.point.y,Bc(n),yt("terrain-controls").open=!0),n!==Fe))return;let r={mode:yt("terrain-brush").value,radius:Number(yt("brush-radius").value),strength:Number(yt("brush-strength").value),target:he.flattenY};if(!qp(s,e.point.x,e.point.z,r))return;let o=Ne.children[n];o.geometry.dispose(),o.geometry=Tu(s),mi?.update(),ji(),pn()}yt("texture-style").replaceChildren(...Eu.map((i,t)=>new Option(i,t)));yt("texture-create").onclick=()=>{let i=Oe();if(!i)return;let t=Kp(Number(yt("texture-style").value),yt("texture-tint").value);en(),i.texture=t.toDataURL("image/webp",.85),Ye(),Ge("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};yt("view-top").onclick=()=>{let i=Ae.target,t=Math.max(10,Ue.position.distanceTo(i));Ue.position.copy(i).add(new M(0,t,.001)),Ae.update(),pn()};yt("view-perspective").onclick=()=>{Ue.position.copy(Ae.target).add(new M(16,15,24)),ha()};yt("view-spawn").onclick=()=>{let{x:i,y:t,z:e,yaw:n}=zt.spawn,s=new M(0,0,-1).applyAxisAngle(Hc,Kt.degToRad(n));Ue.position.set(i,t+.87,e),Ae.target.copy(Ue.position).addScaledVector(s,5),Ue.lookAt(Ae.target),pn()};var ym={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",i=>{if(i.target.closest?.("input, select, textarea, [contenteditable]")||he||_e.dragging)return;let t=i.key.toLowerCase();if(i.ctrlKey||i.metaKey)if(t==="z")km();else if(t==="d")zm();else return;else{if(i.altKey)return;if(ym[t])ca(ym[t]);else if(t==="f")ha();else if(t==="delete")Bm();else return}i.preventDefault()});try{let i=localStorage.getItem(Sm);if(i){let t=ni(i);JSON.stringify(t)!==JSON.stringify(hm())&&(zt=t)}}catch{}ca("move");Ye();Pm();Im();ha();})();
